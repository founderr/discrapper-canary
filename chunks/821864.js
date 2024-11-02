e.d(n, {
    I4: function () {
        return E;
    },
    Sn: function () {
        return s;
    },
    U3: function () {
        return I;
    },
    Ui: function () {
        return f;
    },
    W4: function () {
        return d;
    },
    gq: function () {
        return c;
    },
    kZ: function () {
        return l;
    }
});
var i = e(544891),
    r = e(570140),
    o = e(555573),
    a = e(581364),
    u = e(981631);
function l() {
    r.Z.dispatch({ type: 'INTEGRATION_PERMISSION_SETTINGS_CLEAR' });
}
function d(t, n, e) {
    r.Z.dispatch({
        applicationId: t,
        commandId: n,
        permissions: e,
        type: 'INTEGRATION_PERMISSION_SETTINGS_EDIT'
    });
}
function s(t, n) {
    i.tn.get(u.ANM.GUILD_COMMANDS_FOR_APPLICATION(t, n)).then(
        (e) => {
            r.Z.dispatch({
                type: 'INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS',
                applicationId: n,
                commands: e.body.application_commands,
                guildId: t,
                permissions: e.body.permissions
            });
        },
        () => {
            r.Z.dispatch({
                type: 'INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE',
                applicationId: n
            });
        }
    );
}
async function c(t, n, e) {
    let o = [];
    try {
        let r = await i.tn.get(u.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(t, n, e));
        r.ok && (o = r.body.permissions);
    } catch (i) {
        if (404 !== i.status) {
            r.Z.dispatch({
                type: 'INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE',
                applicationId: t,
                commandId: e,
                guildId: n
            });
            return;
        }
    }
    r.Z.dispatch({
        type: 'INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE',
        applicationId: t,
        commandId: e,
        guildId: n,
        permissions: o
    });
}
function E(t) {
    r.Z.dispatch({
        applicationId: t,
        type: 'INTEGRATION_PERMISSION_SETTINGS_INIT'
    });
}
function f(t) {
    r.Z.dispatch({
        commandId: t,
        type: 'INTEGRATION_PERMISSION_SETTINGS_RESET'
    });
}
async function I(t) {
    let { applicationId: n, commandId: e, defaultEveryoneValue: i, defaultEverywhereValue: u, guildId: l, permissions: d } = t,
        s =
            e === n
                ? (function (t, n, e, i) {
                      if (!e || !i) return n;
                      let r = {
                          [t]: e,
                          [(0, a.bD)(t)]: i
                      };
                      return n.filter((t) => {
                          let n = r[t.id];
                          return null == n || t.permission !== n;
                      });
                  })(l, d, i, u)
                : d,
        c = await o.dh(n, l, e, s);
    c.ok &&
        r.Z.dispatch({
            type: 'INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE',
            applicationId: n,
            commandId: e,
            guildId: l,
            permissions: c.body.permissions
        });
}
