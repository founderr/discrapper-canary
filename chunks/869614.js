n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(47120);
let i = new Set(['nvidia']);
function r(e) {
    for (let t of Object.keys(e)) {
        let n = e[t];
        if (null != n && null == n.error && i.has(t)) return !0;
    }
    return !1;
}
