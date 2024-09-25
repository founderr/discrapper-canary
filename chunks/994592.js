n.d(t, {
    j0: function () {
        return h;
    },
    mY: function () {
        return f;
    },
    on: function () {
        return E;
    }
});
var r = n(47120);
var i = n(442837),
    a = n(652515),
    o = n(200876),
    s = n(674180),
    l = n(160404),
    u = n(430824),
    c = n(772021),
    d = n(981631);
function _(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.Z, l.Z],
        r = t.getGuild(e);
    if (null == r) return !1;
    let i = (0, o.l)(r),
        a = r.hasFeature(d.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    return !!((i && a) || n.isViewingServerShop(e)) || !1;
}
function E(e, t) {
    return !!_(e) || (0, c.U)(e, t);
}
function f(e) {
    let t = (0, c.Z)(e),
        n = (0, i.e7)([u.Z, l.Z], () => _(e, [u.Z, l.Z]), [e]),
        { shouldHideGuildPurchaseEntryPoints: r } = (0, s.uP)(e);
    return !r && (n || t);
}
function h(e) {
    let t = f(e),
        n = (0, a.RF)(e, 'useShowRoleSubscriptionsInChannelList');
    return t && !n;
}
