n.d(t, {
    G: function () {
        return a;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(390507);
let a = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function (n) {
        var a, s, o, l, u;
        let { color: c, ...d } = n,
            f = 'currentColor';
        null != c && (f = 'string' != typeof c && 'css' in c ? c.css : c);
        let _ = null !== (a = d.size) && void 0 !== a ? a : 'md',
            p = (0, i.m)(_),
            h = null !== (o = null !== (s = null == p ? void 0 : p.width) && void 0 !== s ? s : d.width) && void 0 !== o ? o : 24,
            m = {
                color: f,
                width: h,
                height: null !== (u = null !== (l = null == p ? void 0 : p.height) && void 0 !== l ? l : d.height) && void 0 !== u ? u : 24,
                foreground: d.colorClass
            };
        for (let [e, n] of Object.entries(t)) null != d[e] && (m[n] = d[e]);
        return (0, r.jsx)(e, {
            ...d,
            ...m
        });
    };
};
