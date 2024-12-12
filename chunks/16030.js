r.d(n, {
    G: function () {
        return o;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var s = r(390507);
let o = function (e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function (r) {
        var i, o, l, u, c;
        let { color: d, ...f } = r,
            _ = 'currentColor';
        null != d && (_ = 'string' != typeof d && 'css' in d ? d.css : d);
        let h = null !== (i = f.size) && void 0 !== i ? i : 'md',
            p = (0, s.m)(h),
            m = null !== (l = null !== (o = null == p ? void 0 : p.width) && void 0 !== o ? o : f.width) && void 0 !== l ? l : 24,
            g = {
                color: _,
                width: m,
                height: null !== (c = null !== (u = null == p ? void 0 : p.height) && void 0 !== u ? u : f.height) && void 0 !== c ? c : 24,
                foreground: f.colorClass
            };
        for (let [e, r] of Object.entries(n)) null != f[e] && (g[r] = f[e]);
        return (0, a.jsx)(e, {
            ...f,
            ...g
        });
    };
};
