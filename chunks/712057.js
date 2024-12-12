r.d(n, {
    Z: function () {
        return d;
    },
    u: function () {
        return c;
    }
});
var i = r(564334),
    a = r(302221),
    s = r(563114);
let o = '#ffffff',
    l = '#36393e',
    u = (e) => {
        var n, r;
        let { colors: s, saturationFactor: u = 1 } = e;
        if (null == s || s.length < 1) return null;
        let c = (0, a.YD)(s),
            d = i.Z.parseString(o);
        if (null == d) return null;
        let f = i.Z.parseString(l);
        if (null == f) return null;
        let _ = i.Z.parseString(c);
        if (null == _) return null;
        let h = (0, a.AZ)(_.red, _.blue, _.green),
            p =
                null !==
                    (n = (0, a.k8)({
                        colors: [(0, a.j)(_, 0.6, !0), d],
                        ratio: 3,
                        saturationFactor: u
                    })) && void 0 !== n
                    ? n
                    : _,
            m =
                null !==
                    (r = (0, a.k8)({
                        colors: [(0, a.j)(_, 0.6, !1), f],
                        ratio: 5,
                        saturationFactor: u
                    })) && void 0 !== r
                    ? r
                    : _,
            g = (0, a.k8)({
                colors: [_, d],
                ratio: 7,
                saturationFactor: u
            }),
            E = (0, a.k8)({
                colors: [_, f],
                ratio: 7,
                saturationFactor: u
            });
        return {
            LIGHT: {
                accentColor: null == g ? void 0 : g.toHexString(),
                backgroundColor: (0, a.xj)({
                    colorRGB: p,
                    saturationFactor: u
                }),
                highlightColor: null == _ ? void 0 : _.toHexString(),
                opacity: (null == h ? void 0 : h.saturation) < 0.1 ? 0.35 : 0.1
            },
            DARK: {
                accentColor: null == E ? void 0 : E.toHexString(),
                backgroundColor: (0, a.xj)({
                    colorRGB: m,
                    saturationFactor: u
                }),
                highlightColor: null == _ ? void 0 : _.toHexString(),
                opacity: (null == h ? void 0 : h.saturation) < 0.1 ? 0.5 : 0.2
            }
        };
    },
    c = (e) => {
        let { colors: n, saturationFactor: r = 1, shouldProcessMobileColors: i = !1 } = e,
            a = u({
                colors: n,
                saturationFactor: r
            });
        return s.Z.applyPlatformToThemedEmojiColorPalette({
            palette: a,
            shouldProcessMobileColors: i
        });
    },
    d = (e, n, r) => {
        var i;
        if (null == e || e.length < 1) return null;
        let a = c({
                colors: e,
                saturationFactor: n
            }),
            s = r ? (null == a ? void 0 : a.DARK) : null == a ? void 0 : a.LIGHT;
        return {
            backgroundColor: null == s ? void 0 : s.backgroundColor,
            accentColor: null == s ? void 0 : s.accentColor,
            highlightColor: null == s ? void 0 : s.highlightColor,
            opacity: null !== (i = null == s ? void 0 : s.opacity) && void 0 !== i ? i : 0.15
        };
    };
