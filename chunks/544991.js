function i(e, n) {
    if (null == e) throw TypeError('assign requires that input parameter not be null or undefined');
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    return e;
}
r.d(n, {
    Z: function () {
        return i;
    }
});
