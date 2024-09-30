n.d(t, {
    Jf: function () {
        return h;
    },
    KK: function () {
        return c;
    },
    KW: function () {
        return d;
    },
    OL: function () {
        return f;
    },
    PB: function () {
        return _;
    },
    bZ: function () {
        return u;
    },
    z0: function () {
        return E;
    }
});
var r = n(789020);
var i = n(512722),
    a = n.n(i),
    o = n(55563),
    s = n(630388),
    l = n(981631);
function u(e) {
    let t = e.items;
    return a()(1 === t.length, 'more than 1 subscription item for application subscription'), t[0].planId;
}
function c(e) {
    return (0, s.yE)(e, l.l4R.APPLICATION_GUILD_SUBSCRIPTION);
}
function d(e) {
    return (0, s.yE)(e, l.l4R.APPLICATION_USER_SUBSCRIPTION);
}
function _(e, t, n, r, i) {
    if (n.type === l.NYc.APPLICATION && n.status === l.O0b.ACTIVE && !!r.isValid(null, o.Z))
        return n.items
            .map((t) => e.get(t.planId))
            .filter((e) => null != e)
            .find((e) => {
                let n = t.get(e.skuId);
                return null != n && (!c(n.flags) || r.guildId === i);
            });
}
function E(e, t, n) {
    var r;
    return null === (r = n.renewalMutations) || void 0 === r
        ? void 0
        : r.items
              .map((t) => e.get(t.planId))
              .filter((e) => null != e)
              .find((e) => t.includes(e.skuId));
}
function f(e) {
    return !1 === e.available;
}
function h(e, t) {
    var n;
    let r = null !== (n = null == t ? void 0 : t.deleted) && void 0 !== n && n,
        i = null != t && f(t);
    return e.status === l.O0b.CANCELED || r || i;
}
