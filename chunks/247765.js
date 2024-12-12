function i(e) {
    let { isInline: n, isVoid: r } = e;
    return (e.isInline = (e) => 'testInline' === e.type || 'testInlineVoid' === e.type || n(e)), (e.isVoid = (e) => 'testInlineVoid' === e.type || r(e)), e;
}
r.d(n, {
    Z: function () {
        return i;
    }
});
