n.d(e, {
    I4: function () {
        return d;
    },
    Sn: function () {
        return s;
    },
    U3: function () {
        return T;
    },
    Ui: function () {
        return S;
    },
    W4: function () {
        return E;
    },
    gq: function () {
        return c;
    },
    kZ: function () {
        return o;
    }
});
var r = n(544891),
    i = n(570140),
    l = n(555573),
    u = n(581364),
    a = n(981631);
function o() {
    i.Z.dispatch({ type: 'INTEGRATION_PERMISSION_SETTINGS_CLEAR' });
}
function E(t, e, n) {
    i.Z.dispatch({
        applicationId: t,
        commandId: e,
        permissions: n,
        type: 'INTEGRATION_PERMISSION_SETTINGS_EDIT'
    });
}
function s(t, e) {
    r.tn.get(a.ANM.GUILD_COMMANDS_FOR_APPLICATION(t, e)).then(
        (n) => {
            i.Z.dispatch({
                type: 'INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS',
                applicationId: e,
                commands: n.body.application_commands,
                guildId: t,
                permissions: n.body.permissions
            });
        },
        () => {
            i.Z.dispatch({
                type: 'INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE',
                applicationId: e
            });
        }
    );
}
async function c(t, e, n) {
    let l = [];
    try {
        let i = await r.tn.get(a.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(t, e, n));
        i.ok && (l = i.body.permissions);
    } catch (r) {
        if (404 !== r.status) {
            i.Z.dispatch({
                type: 'INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE',
                applicationId: t,
                commandId: n,
                guildId: e
            });
            return;
        }
    }
    i.Z.dispatch({
        type: 'INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE',
        applicationId: t,
        commandId: n,
        guildId: e,
        permissions: l
    });
}
function d(t) {
    i.Z.dispatch({
        applicationId: t,
        type: 'INTEGRATION_PERMISSION_SETTINGS_INIT'
    });
}
function S(t) {
    i.Z.dispatch({
        commandId: t,
        type: 'INTEGRATION_PERMISSION_SETTINGS_RESET'
    });
}
async function T(t) {
    let { applicationId: e, commandId: n, defaultEveryoneValue: r, defaultEverywhereValue: a, guildId: o, permissions: E } = t,
        s =
            n === e
                ? (function (t, e, n, r) {
                      if (!n || !r) return e;
                      let i = {
                          [t]: n,
                          [(0, u.bD)(t)]: r
                      };
                      return e.filter((t) => {
                          let e = i[t.id];
                          return null == e || t.permission !== e;
                      });
                  })(o, E, r, a)
                : E,
        c = await l.dh(e, o, n, s);
    c.ok &&
        i.Z.dispatch({
            type: 'INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE',
            applicationId: e,
            commandId: n,
            guildId: o,
            permissions: c.body.permissions
        });
}
