function i(e) {
    return function (n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = n.match(e.matchPattern);
        if (!i) return null;
        var a = i[0],
            s = n.match(e.parsePattern);
        if (!s) return null;
        var o = e.valueCallback ? e.valueCallback(s[0]) : s[0];
        return {
            value: (o = r.valueCallback ? r.valueCallback(o) : o),
            rest: n.slice(a.length)
        };
    };
}
r.d(n, {
    Z: function () {
        return i;
    }
});
