r.d(n, {
    Ej: function () {
        return m;
    },
    Jf: function () {
        return h;
    },
    KK: function () {
        return d;
    },
    KW: function () {
        return f;
    },
    OL: function () {
        return _;
    },
    bZ: function () {
        return c;
    }
});
var i = r(789020);
var a = r(512722),
    s = r.n(a);
r(55563);
var o = r(630388),
    l = r(74538),
    u = r(981631);
function c(e) {
    let n = e.items;
    return s()(1 === n.length, 'more than 1 subscription item for application subscription'), n[0].planId;
}
function d(e) {
    return (0, o.yE)(e, u.l4R.APPLICATION_GUILD_SUBSCRIPTION);
}
function f(e) {
    return (0, o.yE)(e, u.l4R.APPLICATION_USER_SUBSCRIPTION);
}
function _(e) {
    return !1 === e.available;
}
function h(e, n) {
    var r;
    let i = null !== (r = null == n ? void 0 : n.deleted) && void 0 !== r && r,
        a = null != n && _(n);
    return e.status === u.O0b.CANCELED || i || a;
}
function p(e, n) {
    var r, i;
    if (e.type === u.epS.SUBSCRIPTION) {
        let r = n.getForSKU(e.id);
        if (r.length > 0) {
            let e = r[0];
            return (0, l.aS)(e.id).amount;
        }
    }
    return null !== (i = null === (r = e.price) || void 0 === r ? void 0 : r.amount) && void 0 !== i ? i : 0;
}
function m(e, n, r) {
    return e.slice().sort((e, i) => {
        let a = n.get(e.skuId),
            s = null != a ? p(a, r) : 0,
            o = n.get(i.skuId);
        return s - (null != o ? p(o, r) : 0);
    });
}
