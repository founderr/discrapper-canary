let i, l, r;
t(47120);
var a,
    o,
    s,
    d,
    c = t(442837),
    u = t(570140),
    m = t(581364),
    h = t(399860);
let p = {},
    g = {},
    f = !1;
function x() {
    (i = void 0), (p = {}), (g = {}), (l = void 0), (r = void 0), (f = !1);
}
class b extends (a = c.ZP.Store) {
    getApplicationPermissions() {
        return p;
    }
    getCommands() {
        return g;
    }
    getCommand(e) {
        return null == g ? void 0 : g[e];
    }
    getEditedApplication() {
        return l;
    }
    getEditedCommand() {
        return r;
    }
    isUnavailable() {
        return f;
    }
    getApplicationId() {
        return i;
    }
}
(d = 'IntegrationPermissionStore'),
    (s = 'displayName') in (o = b)
        ? Object.defineProperty(o, s, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[s] = d),
    (n.Z = new b(u.Z, {
        LOGOUT: x,
        INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function (e) {
            let { applicationId: n } = e;
            if (n !== i) return !1;
            f = !0;
        },
        INTEGRATION_PERMISSION_SETTINGS_CLEAR: x,
        INTEGRATION_PERMISSION_SETTINGS_INIT: function (e) {
            let { applicationId: n } = e;
            x(), (i = n);
        },
        INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function (e) {
            let { applicationId: n, commandId: t, permissions: l } = e;
            if (n !== i) return !1;
            if (t === i) {
                p = (0, h.tk)(l);
                return;
            }
            let r = g[t];
            if (null == r) return !1;
            g[t] = {
                ...r,
                permissions: (0, h.tk)(l)
            };
        },
        INTEGRATION_PERMISSION_SETTINGS_EDIT: function (e) {
            let { applicationId: n, commandId: t, permissions: a } = e;
            if (n !== i) return !1;
            t === i
                ? (l = a)
                : (r = {
                      commandId: t,
                      permissions: a
                  });
        },
        INTEGRATION_PERMISSION_SETTINGS_RESET: function (e) {
            let { commandId: n } = e;
            null == n ? (l = void 0) : (r = void 0);
        },
        INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function (e) {
            let { applicationId: n } = e;
            if (n !== i) return !1;
            f = !0;
        },
        INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function (e) {
            let { applicationId: n, commands: t, permissions: l } = e;
            if (n !== i) return !1;
            let r = Object.fromEntries(l.map((e) => [e.id, e.permissions])),
                a = {};
            for (let e of t)
                if (e.application_id === i) {
                    let n = (0, m.Z8)({
                            rootCommand: e,
                            command: e,
                            applicationId: e.application_id
                        }),
                        t = r[e.id];
                    null != t && (n.permissions = (0, h.tk)(t)), (a[e.id] = n);
                }
            g = a;
        }
    }));
