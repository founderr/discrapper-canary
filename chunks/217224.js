function i(e) {
    if (null === e || !0 === e || !1 === e) return NaN;
    var n = Number(e);
    return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
}
r.d(n, {
    Z: function () {
        return i;
    }
});
