r.d(n, {
    B: function () {
        return o;
    },
    n: function () {
        return s;
    }
});
var i = r(653041);
var a = r(192379);
function s(e) {
    let n = {};
    if (e) {
        var r;
        null === (r = a.Children.map(e, (e) => e)) ||
            void 0 === r ||
            r.forEach((e) => {
                let r = e.key;
                null != r && (n[r] = e);
            });
    }
    return n;
}
function o() {
    let e,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    function i(e) {
        return r.hasOwnProperty(e) ? r[e] : n[e];
    }
    let a = {},
        s = [];
    for (let e in n) r.hasOwnProperty(e) ? s.length && ((a[e] = s), (s = [])) : s.push(e);
    let o = {};
    for (let n in r) {
        if (a.hasOwnProperty(n))
            for (e = 0; e < a[n].length; e++) {
                let r = a[n][e];
                o[a[n][e]] = i(r);
            }
        o[n] = i(n);
    }
    for (e = 0; e < s.length; e++) o[s[e]] = i(s[e]);
    return o;
}
