function i(e, n, r) {
    if (!n.has(e)) throw TypeError('attempted to ' + r + ' private field on non-instance');
    return n.get(e);
}
r.d(n, {
    J: function () {
        return i;
    }
});
