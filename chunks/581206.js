function i(e, n) {
    return n.reduce(function (n, r) {
        return (n[r] = e), n;
    }, {});
}
r.d(n, {
    Z: function () {
        return i;
    }
});
