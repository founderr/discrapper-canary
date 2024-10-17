var s,
    a,
    r,
    i,
    l = n(442837),
    o = n(570140);
let c = {},
    _ = null;
function d() {
    (c = {}), (_ = null);
}
class E extends (i = l.ZP.Store) {
    getEmailSettings() {
        return {
            categories: c,
            initialized: _
        };
    }
}
(r = 'EmailSettingsStore'),
    (a = 'displayName') in (s = E)
        ? Object.defineProperty(s, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[a] = r),
    (t.Z = new E(o.Z, {
        CONNECTION_OPEN: d,
        LOGOUT: d,
        EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
            let { settings: t } = e;
            (c = t.categories), (_ = t.initialized);
        },
        EMAIL_SETTINGS_UPDATE_SUCCESS: function (e) {
            let { settings: t } = e;
            c = t.categories;
        },
        EMAIL_SETTINGS_UPDATE: function (e) {
            let { updates: t } = e;
            c = {
                ...c,
                ...t
            };
        }
    }));
