n.d(t, {
    I4: function () {
        return a;
    },
    Sn: function () {
        return u;
    },
    U3: function () {
        return S;
    },
    Ui: function () {
        return _;
    },
    W4: function () {
        return E;
    },
    gq: function () {
        return N;
    },
    kZ: function () {
        return o;
    }
});
var i = n(544891),
    l = n(570140),
    r = n(555573),
    T = n(581364),
    I = n(981631);
function o() {
    l.Z.dispatch({ type: 'INTEGRATION_PERMISSION_SETTINGS_CLEAR' });
}
function E(e, t, n) {
    l.Z.dispatch({
        applicationId: e,
        commandId: t,
        permissions: n,
        type: 'INTEGRATION_PERMISSION_SETTINGS_EDIT'
    });
}
function u(e, t) {
    i.tn.get(I.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(
        (n) => {
            l.Z.dispatch({
                type: 'INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS',
                applicationId: t,
                commands: n.body.application_commands,
                guildId: e,
                permissions: n.body.permissions
            });
        },
        () => {
            l.Z.dispatch({
                type: 'INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE',
                applicationId: t
            });
        }
    );
}
async function N(e, t, n) {
    let r = [];
    try {
        let l = await i.tn.get(I.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n));
        l.ok && (r = l.body.permissions);
    } catch (i) {
        if (404 !== i.status) {
            l.Z.dispatch({
                type: 'INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE',
                applicationId: e,
                commandId: n,
                guildId: t
            });
            return;
        }
    }
    l.Z.dispatch({
        type: 'INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE',
        applicationId: e,
        commandId: n,
        guildId: t,
        permissions: r
    });
}
function a(e) {
    l.Z.dispatch({
        applicationId: e,
        type: 'INTEGRATION_PERMISSION_SETTINGS_INIT'
    });
}
function _(e) {
    l.Z.dispatch({
        commandId: e,
        type: 'INTEGRATION_PERMISSION_SETTINGS_RESET'
    });
}
async function S(e) {
    let { applicationId: t, commandId: n, defaultEveryoneValue: i, defaultEverywhereValue: I, guildId: o, permissions: E } = e,
        u =
            n === t
                ? (function (e, t, n, i) {
                      if (!n || !i) return t;
                      let l = {
                          [e]: n,
                          [(0, T.bD)(e)]: i
                      };
                      return t.filter((e) => {
                          let t = l[e.id];
                          return null == t || e.permission !== t;
                      });
                  })(o, E, i, I)
                : E,
        N = await r.dh(t, o, n, u);
    N.ok &&
        l.Z.dispatch({
            type: 'INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE',
            applicationId: t,
            commandId: n,
            guildId: o,
            permissions: N.body.permissions
        });
}
