n.d(t, {
    LA: function () {
        return h;
    },
    MR: function () {
        return f;
    },
    Wb: function () {
        return p;
    },
    Xs: function () {
        return m;
    },
    YE: function () {
        return c;
    },
    _k: function () {
        return u;
    },
    kG: function () {
        return d;
    },
    u7: function () {
        return _;
    }
}),
    n(580130);
var r = n(55563),
    i = n(513785),
    a = n(474936),
    s = n(735825),
    o = n(981631),
    l = n(388032);
function u(e) {
    return e.type === o.qc2.PURCHASE && e.skuId === a.Si.TIER_2 && e.applicationId === a.CL && e.isValid(null, r.Z);
}
function c(e) {
    return e.type === o.qc2.PREMIUM_PURCHASE && s.uv.has(e.skuId) && e.applicationId === a.CL && e.isValid(null, r.Z);
}
function d(e) {
    if (null != e) return Array.from(e).find((e) => u(e));
}
function f(e, t) {
    if (null != t) return Array.from(t).find((t) => t.type === o.qc2.PREMIUM_PURCHASE && e.includes(t.skuId) && t.applicationId === a.CL && t.isValid(null, r.Z));
}
function _(e) {
    return null != e.redeemable_at && null != e.next_tenure_reward_id;
}
function p(e) {
    switch (e) {
        case s.EB.PENDING:
            return l.intl.string(l.t.jyYgZ2);
        case s.EB.REDEEMABLE:
            return l.intl.string(l.t['+zx47e']);
        case s.EB.REDEEMED:
        default:
            return null;
    }
}
function h() {
    var e;
    return null !== (e = i.Z.getTenureRewardStatusForRewardId(s.Ft.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : i.Z.getTenureRewardStatusForRewardId(s.Ft.FREE_GUILD_BOOST_3_MONTHS);
}
function m(e) {
    return e === s.Ft.FREE_AVATAR_DECO_1_MONTH ? s.nW.AVATAR_DECO : e === s.Ft.FREE_GUILD_BOOST_1_MONTH || e === s.Ft.FREE_GUILD_BOOST_3_MONTHS ? s.nW.SERVER_BOOST : void 0;
}
