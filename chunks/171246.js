t.d(n, {
    AQ: function () {
        return c;
    },
    Jf: function () {
        return f;
    },
    KK: function () {
        return a;
    },
    KW: function () {
        return u;
    },
    OL: function () {
        return d;
    },
    bZ: function () {
        return o;
    }
});
var l = t(512722),
    i = t.n(l),
    r = t(630388),
    s = t(981631);
function o(e) {
    let n = e.items;
    return i()(1 === n.length, 'more than 1 subscription item for application subscription'), n[0].planId;
}
function a(e) {
    return (0, r.yE)(e, s.l4R.APPLICATION_GUILD_SUBSCRIPTION);
}
function u(e) {
    return (0, r.yE)(e, s.l4R.APPLICATION_USER_SUBSCRIPTION);
}
function c(e, n, t) {
    return e.subscription_plans[0].sku_id === n.skuId && (a(e.sku_flags) ? null != t && n.guildId === t && t !== s.ME : !!u(e.sku_flags) && null == n.guildId);
}
function d(e) {
    return !1 === e.available;
}
function f(e, n) {
    var t;
    let l = null !== (t = null == n ? void 0 : n.deleted) && void 0 !== t && t,
        i = null != n && d(n);
    return e.status === s.O0b.CANCELED || l || i;
}
