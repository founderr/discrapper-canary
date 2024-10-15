n.d(t, {
    Ej: function () {
        return I;
    },
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
}),
    n(789020);
var r = n(512722),
    i = n.n(r),
    a = n(55563),
    s = n(630388),
    o = n(74538),
    l = n(981631);
function u(e) {
    let t = e.items;
    return i()(1 === t.length, 'more than 1 subscription item for application subscription'), t[0].planId;
}
function c(e) {
    return (0, s.yE)(e, l.l4R.APPLICATION_GUILD_SUBSCRIPTION);
}
function d(e) {
    return (0, s.yE)(e, l.l4R.APPLICATION_USER_SUBSCRIPTION);
}
function _(e, t, n, r, i) {
    var s;
    if (n.type === l.NYc.APPLICATION && n.status === l.O0b.ACTIVE && !!r.isValid(null, a.Z) && (null === (s = n.metadata) || void 0 === s ? void 0 : s.application_subscription_guild_id) === i)
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
function p(e, t) {
    var n, r;
    if (e.type === l.epS.SUBSCRIPTION) {
        let n = t.getForSKU(e.id);
        if (n.length > 0) {
            let e = n[0];
            return (0, o.aS)(e.id).amount;
        }
    }
    return null !== (r = null === (n = e.price) || void 0 === n ? void 0 : n.amount) && void 0 !== r ? r : 0;
}
function I(e, t, n) {
    return e.slice().sort((e, r) => {
        let i = t.get(e.skuId),
            a = null != i ? p(i, n) : 0,
            s = t.get(r.skuId);
        return a - (null != s ? p(s, n) : 0);
    });
}
