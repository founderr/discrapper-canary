function i(e, n) {
    if (e.length !== n.length) return !1;
    for (let r = 0; r < n.length && r < e.length; r++) {
        if (!Object.is(e[r], n[r])) return !1;
    }
    return !0;
}
r.d(n, {
    Z: function () {
        return i;
    }
});
