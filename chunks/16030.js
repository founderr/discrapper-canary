n.d(t, {
    G: function () {
        return o;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(390507);
let o = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function (n) {
        var r, o, s, l, u;
        let { color: c, ...d } = n,
            _ = 'currentColor';
        null != c && (_ = 'string' != typeof c && 'css' in c ? c.css : c);
        let E = null !== (r = d.size) && void 0 !== r ? r : 'md',
            f = (0, a.m)(E),
            h = null !== (s = null !== (o = null == f ? void 0 : f.width) && void 0 !== o ? o : d.width) && void 0 !== s ? s : 24,
            p = {
                color: _,
                width: h,
                height: null !== (u = null !== (l = null == f ? void 0 : f.height) && void 0 !== l ? l : d.height) && void 0 !== u ? u : 24,
                foreground: d.colorClass
            };
        for (let [e, n] of Object.entries(t)) null != d[e] && (p[n] = d[e]);
        return (0, i.jsx)(e, {
            ...d,
            ...p
        });
    };
};
