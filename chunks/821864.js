t.d(n, {
    I4: function () {
        return c;
    },
    Sn: function () {
        return d;
    },
    U3: function () {
        return I;
    },
    Ui: function () {
        return _;
    },
    W4: function () {
        return l;
    },
    gq: function () {
        return E;
    },
    kZ: function () {
        return s;
    }
});
var i = t(544891),
    r = t(570140),
    o = t(555573),
    a = t(581364),
    u = t(981631);
function s() {
    r.Z.dispatch({ type: 'INTEGRATION_PERMISSION_SETTINGS_CLEAR' });
}
function l(e, n, t) {
    r.Z.dispatch({
        applicationId: e,
        commandId: n,
        permissions: t,
        type: 'INTEGRATION_PERMISSION_SETTINGS_EDIT'
    });
}
function d(e, n) {
    i.tn.get(u.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, n)).then(
        (t) => {
            r.Z.dispatch({
                type: 'INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS',
                applicationId: n,
                commands: t.body.application_commands,
                guildId: e,
                permissions: t.body.permissions
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
async function E(e, n, t) {
    let o = [];
    try {
        let r = await i.tn.get(u.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, n, t));
        r.ok && (o = r.body.permissions);
    } catch (i) {
        if (404 !== i.status) {
            r.Z.dispatch({
                type: 'INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE',
                applicationId: e,
                commandId: t,
                guildId: n
            });
            return;
        }
    }
    r.Z.dispatch({
        type: 'INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE',
        applicationId: e,
        commandId: t,
        guildId: n,
        permissions: o
    });
}
function c(e) {
    r.Z.dispatch({
        applicationId: e,
        type: 'INTEGRATION_PERMISSION_SETTINGS_INIT'
    });
}
function _(e) {
    r.Z.dispatch({
        commandId: e,
        type: 'INTEGRATION_PERMISSION_SETTINGS_RESET'
    });
}
async function I(e) {
    let { applicationId: n, commandId: t, defaultEveryoneValue: i, defaultEverywhereValue: u, guildId: s, permissions: l } = e,
        d =
            t === n
                ? (function (e, n, t, i) {
                      if (!t || !i) return n;
                      let r = {
                          [e]: t,
                          [(0, a.bD)(e)]: i
                      };
                      return n.filter((e) => {
                          let n = r[e.id];
                          return null == n || e.permission !== n;
                      });
                  })(s, l, i, u)
                : l,
        E = await o.dh(n, s, t, d);
    E.ok &&
        r.Z.dispatch({
            type: 'INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE',
            applicationId: n,
            commandId: t,
            guildId: s,
            permissions: E.body.permissions
        });
}
