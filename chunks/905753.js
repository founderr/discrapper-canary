let i, a, l;
t(47120);
var s,
    o,
    r,
    d,
    c = t(442837),
    u = t(570140),
    I = t(581364),
    m = t(399860);
let _ = {},
    N = {},
    E = !1;
function T() {
    (i = void 0), (_ = {}), (N = {}), (a = void 0), (l = void 0), (E = !1);
}
class h extends (s = c.ZP.Store) {
    getApplicationPermissions() {
        return _;
    }
    getCommands() {
        return N;
    }
    getCommand(e) {
        return null == N ? void 0 : N[e];
    }
    getEditedApplication() {
        return a;
    }
    getEditedCommand() {
        return l;
    }
    isUnavailable() {
        return E;
    }
    getApplicationId() {
        return i;
    }
}
(d = 'IntegrationPermissionStore'),
    (r = 'displayName') in (o = h)
        ? Object.defineProperty(o, r, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[r] = d),
    (n.Z = new h(u.Z, {
        LOGOUT: T,
        INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function (e) {
            let { applicationId: n } = e;
            if (n !== i) return !1;
            E = !0;
        },
        INTEGRATION_PERMISSION_SETTINGS_CLEAR: T,
        INTEGRATION_PERMISSION_SETTINGS_INIT: function (e) {
            let { applicationId: n } = e;
            T(), (i = n);
        },
        INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function (e) {
            let { applicationId: n, commandId: t, permissions: a } = e;
            if (n !== i) return !1;
            if (t === i) {
                _ = (0, m.tk)(a);
                return;
            }
            let l = N[t];
            if (null == l) return !1;
            N[t] = {
                ...l,
                permissions: (0, m.tk)(a)
            };
        },
        INTEGRATION_PERMISSION_SETTINGS_EDIT: function (e) {
            let { applicationId: n, commandId: t, permissions: s } = e;
            if (n !== i) return !1;
            t === i
                ? (a = s)
                : (l = {
                      commandId: t,
                      permissions: s
                  });
        },
        INTEGRATION_PERMISSION_SETTINGS_RESET: function (e) {
            let { commandId: n } = e;
            null == n ? (a = void 0) : (l = void 0);
        },
        INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function (e) {
            let { applicationId: n } = e;
            if (n !== i) return !1;
            E = !0;
        },
        INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function (e) {
            let { applicationId: n, commands: t, permissions: a } = e;
            if (n !== i) return !1;
            let l = Object.fromEntries(a.map((e) => [e.id, e.permissions])),
                s = {};
            for (let e of t)
                if (e.application_id === i) {
                    let n = (0, I.Z8)({
                            rootCommand: e,
                            command: e,
                            applicationId: e.application_id
                        }),
                        t = l[e.id];
                    null != t && (n.permissions = (0, m.tk)(t)), (s[e.id] = n);
                }
            N = s;
        }
    }));
