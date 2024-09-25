var r,
    i = n(913527),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(255078),
    u = n(594174),
    c = n(74538);
function d(e, t, n) {
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
let _ = !1;
function E(e) {
    let { subscription: t } = e;
    if (null != t) {
        var n;
        let e = l.Z.createFromServer(t);
        if (null == (0, c.Af)(e) || (null === (n = e.metadata) || void 0 === n ? void 0 : n.ended_at) == null) return;
        let r = a()(e.metadata.ended_at);
        a()().isBetween(r.clone().add(4, 'days'), r.clone().add(11, 'days')) && (_ = !0);
    }
}
class f extends (r = o.ZP.Store) {
    shouldShowReactivateNotice() {
        let e = u.default.getCurrentUser();
        return !(0, c.I5)(e) && _;
    }
}
d(f, 'displayName', 'SubscriptionRemindersStore'), (t.Z = new f(s.Z, { BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: E }));
