function i(e) {
    return function () {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = n.width ? String(n.width) : e.defaultWidth;
        return e.formats[r] || e.formats[e.defaultWidth];
    };
}
r.d(n, {
    Z: function () {
        return i;
    }
});
