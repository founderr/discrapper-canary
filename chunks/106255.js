r.d(n, {
    C3: function () {
        return m;
    },
    Cl: function () {
        return p;
    },
    GT: function () {
        return v;
    },
    MR: function () {
        return h;
    },
    Wb: function () {
        return E;
    },
    Xs: function () {
        return I;
    },
    YE: function () {
        return d;
    },
    _k: function () {
        return c;
    },
    kG: function () {
        return _;
    },
    km: function () {
        return f;
    },
    u7: function () {
        return g;
    }
}),
    r(580130);
var i = r(55563),
    a = r(513785),
    s = r(474936),
    o = r(735825),
    l = r(981631),
    u = r(388032);
function c(e) {
    return e.type === l.qc2.PURCHASE && e.skuId === s.Si.TIER_2 && e.applicationId === s.CL && e.isValid(null, i.Z);
}
function d(e) {
    return e.type === l.qc2.PREMIUM_PURCHASE && o.uv.has(e.skuId) && e.applicationId === s.CL && e.isValid(null, i.Z);
}
function f(e) {
    return e.type === l.qc2.FREE_PURCHASE && e.skuId === o.qY && e.applicationId === l.XAJ && e.isValid(null, i.Z);
}
function _(e) {
    if (null != e) return Array.from(e).find((e) => c(e));
}
function h(e, n) {
    if (null != n) return Array.from(n).find((n) => n.type === l.qc2.PREMIUM_PURCHASE && e.includes(n.skuId) && n.applicationId === s.CL && n.isValid(null, i.Z));
}
function p(e, n) {
    if (null != n) return Array.from(n).find((n) => n.type === l.qc2.FREE_PURCHASE && n.skuId === e && n.applicationId === l.XAJ && n.isValid(null, i.Z));
}
function m(e, n) {
    var r;
    return null != n && (null === (r = n.avatarDecoration) || void 0 === r ? void 0 : r.skuId) === e;
}
function g(e) {
    return null != e.redeemable_at && null != e.next_tenure_reward_id;
}
function E(e) {
    switch (e) {
        case o.EB.PENDING:
            return u.intl.string(u.t.jyYgZ2);
        case o.EB.REDEEMABLE:
            return u.intl.string(u.t['+zx47e']);
        case o.EB.REDEEMED:
        default:
            return null;
    }
}
function v() {
    var e, n;
    return null !== (n = null !== (e = a.Z.getTenureRewardStatusForRewardId(o.Ft.FREE_AVATAR_DECO_1_MONTH)) && void 0 !== e ? e : a.Z.getTenureRewardStatusForRewardId(o.Ft.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== n ? n : a.Z.getTenureRewardStatusForRewardId(o.Ft.FREE_GUILD_BOOST_3_MONTHS);
}
function I(e) {
    return e === o.Ft.FREE_AVATAR_DECO_1_MONTH ? o.nW.AVATAR_DECO : e === o.Ft.FREE_GUILD_BOOST_1_MONTH || e === o.Ft.FREE_GUILD_BOOST_3_MONTHS ? o.nW.SERVER_BOOST : void 0;
}
