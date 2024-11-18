var i,
    r,
    s,
    l,
    a = n(973361),
    o = n(442837),
    c = n(570140),
    u = n(358085),
    d = n(723359);
let h = null,
    p = 'underage';
class g extends (l = o.ZP.Store) {
    isUnderageAnonymous() {
        if (u.isPlatformEmbedded) {
            if (null != h && h + d.k0 > Date.now()) return !0;
        } else return null != a.parse(document.cookie)[p];
        return !1;
    }
}
(s = 'AgeGateStore'),
    (r = 'displayName') in (i = g)
        ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = s),
    (t.Z = new g(c.Z, {
        AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
            h = Date.now();
            document.cookie = ''.concat(p, '=1;path=/');
        },
        LOGIN_SUCCESS: function () {
            h = null;
            document.cookie = ''.concat(p, '=1;path=/;max-age=0');
        }
    }));
