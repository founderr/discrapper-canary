n.d(t, {
    AQ: function () {
        return c;
    },
    Jf: function () {
        return _;
    },
    KK: function () {
        return l;
    },
    KW: function () {
        return u;
    },
    OL: function () {
        return d;
    },
    bZ: function () {
        return s;
    }
});
var r = n(512722),
    i = n.n(r),
    a = n(630388),
    o = n(981631);
function s(e) {
    let t = e.items;
    return i()(1 === t.length, 'more than 1 subscription item for application subscription'), t[0].planId;
}
function l(e) {
    return (0, a.yE)(e, o.l4R.APPLICATION_GUILD_SUBSCRIPTION);
}
function u(e) {
    return (0, a.yE)(e, o.l4R.APPLICATION_USER_SUBSCRIPTION);
}
function c(e, t, n) {
    return e.subscription_plans[0].sku_id === t.skuId && (l(e.sku_flags) ? null != n && t.guildId === n && n !== o.ME : !!u(e.sku_flags) && null == t.guildId);
}
function d(e) {
    return !1 === e.available;
}
function _(e, t) {
    var n;
    let r = null !== (n = null == t ? void 0 : t.deleted) && void 0 !== n && n,
        i = null != t && d(t);
    return e.status === o.O0b.CANCELED || r || i;
}
