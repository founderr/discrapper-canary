var i,
    r,
    s,
    l,
    a = n(442837),
    o = n(570140);
let c = !1,
    u = null,
    d = null;
class h extends (l = a.ZP.Store) {
    getState() {
        return {
            verifySuccess: c,
            verifyErrors: u,
            redirectGuildId: d
        };
    }
}
(s = 'HubEmailVerificationStore'),
    (r = 'displayName') in (i = h)
        ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = s),
    (t.Z = new h(o.Z, {
        HUB_VERIFY_EMAIL_SUCCESS: function (e) {
            let { guildId: t } = e;
            (c = !0), (u = null), (d = t);
        },
        HUB_VERIFY_EMAIL_FAILURE: function (e) {
            let { errors: t } = e;
            (c = !1), (u = t);
        }
    }));
