n.d(t, {
    U: function () {
        return u;
    },
    Z: function () {
        return c;
    }
});
var r = n(47120);
var i = n(442837),
    a = n(314897),
    o = n(271383),
    s = n(430824),
    l = n(981631);
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == e ? null : o.ZP.getMember(e, a.default.getId()),
        [r] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [s.Z],
        i = r.getGuild(e);
    if (null == i || null == n || !i.hasFeature(l.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) return !1;
    for (let e of n.roles) {
        var u;
        let n = null == t ? void 0 : t[e];
        if ((null == n ? void 0 : null === (u = n.tags) || void 0 === u ? void 0 : u.subscription_listing_id) != null) return !0;
    }
    return !1;
}
function c(e) {
    let t = (0, i.e7)([a.default, o.ZP], () => (null == e ? null : o.ZP.getMember(e, a.default.getId())));
    return (0, i.e7)([s.Z], () => u(e, null != e ? s.Z.getRoles(e) : void 0, t, [s.Z]), [e, t]);
}
