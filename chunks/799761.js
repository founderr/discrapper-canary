function i(e) {
    return function (n, r) {
        var i;
        if ('formatting' === (null != r && r.context ? String(r.context) : 'standalone') && e.formattingValues) {
            var a = e.defaultFormattingWidth || e.defaultWidth,
                s = null != r && r.width ? String(r.width) : a;
            i = e.formattingValues[s] || e.formattingValues[a];
        } else {
            var o = e.defaultWidth,
                l = null != r && r.width ? String(r.width) : e.defaultWidth;
            i = e.values[l] || e.values[o];
        }
        return i[e.argumentCallback ? e.argumentCallback(n) : n];
    };
}
r.d(n, {
    Z: function () {
        return i;
    }
});
