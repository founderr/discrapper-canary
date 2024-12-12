function i(e, n, r) {
    var i = n.reduce(function (n, r) {
        return n || e.getData(r);
    }, '');
    return null != i ? i : r;
}
r.d(n, {
    R: function () {
        return i;
    }
});
