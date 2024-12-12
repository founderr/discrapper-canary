function i(e) {
    if (null == e) return window;
    if ('[object Window]' !== e.toString()) {
        var n = e.ownerDocument;
        return (n && n.defaultView) || window;
    }
    return e;
}
r.d(n, {
    Z: function () {
        return i;
    }
});
