r.d(n, {
    j0: function () {
        return m;
    },
    mY: function () {
        return p;
    },
    on: function () {
        return h;
    }
});
var i = r(47120);
var a = r(442837),
    s = r(652515),
    o = r(200876),
    l = r(674180),
    u = r(160404),
    c = r(430824),
    d = r(772021),
    f = r(981631);
function _(e) {
    let [n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [c.Z, u.Z],
        i = n.getGuild(e);
    if (null == i) return !1;
    let a = (0, o.l)(i),
        s = i.hasFeature(f.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    return !!((a && s) || r.isViewingServerShop(e)) || !1;
}
function h(e, n) {
    return !!_(e) || (0, d.U)(e, n);
}
function p(e) {
    let n = (0, d.Z)(e),
        r = (0, a.e7)([c.Z, u.Z], () => _(e, [c.Z, u.Z]), [e]),
        { shouldHideGuildPurchaseEntryPoints: i } = (0, l.uP)(e);
    return !i && (r || n);
}
function m(e) {
    let n = p(e),
        r = (0, s.RF)(e, 'useShowRoleSubscriptionsInChannelList');
    return n && !r;
}
