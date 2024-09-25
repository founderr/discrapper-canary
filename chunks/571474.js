var r,
    i = n(442837),
    a = n(570140),
    o = n(70956),
    s = n(709054),
    l = n(314897),
    u = n(699516);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = 10,
    _ = 180 * o.Z.Millis.DAY,
    E = !1;
function f() {
    return E !== (E = u.Z.getFriendIDs().length >= d && s.default.extractTimestamp(l.default.getId()) < Date.now() - _);
}
class h extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, l.default);
    }
    isEligible() {
        return E;
    }
}
c(h, 'displayName', 'PremiumPromoStore'), (t.Z = new h(a.Z, { CONNECTION_OPEN: f }));
