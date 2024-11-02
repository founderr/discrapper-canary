var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140),
    c = n(70956),
    u = n(709054),
    d = n(314897),
    m = n(699516);
let f = 180 * c.Z.Millis.DAY,
    h = !1;
class p extends (a = o.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, d.default);
    }
    isEligible() {
        return h;
    }
}
(l = 'PremiumPromoStore'),
    (r = 'displayName') in (i = p)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new p(s.Z, {
        CONNECTION_OPEN: function () {
            return h !== (h = m.Z.getFriendIDs().length >= 10 && u.default.extractTimestamp(d.default.getId()) < Date.now() - f);
        }
    }));
