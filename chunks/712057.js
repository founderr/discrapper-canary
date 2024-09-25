n.d(t, {
    Z: function () {
        return c;
    },
    u: function () {
        return u;
    }
});
var r = n(564334),
    i = n(302221),
    a = n(563114);
let o = '#ffffff',
    s = '#36393e',
    l = (e) => {
        var t, n;
        let { colors: a, saturationFactor: l = 1 } = e;
        if (null == a || a.length < 1) return null;
        let u = (0, i.YD)(a),
            c = r.Z.parseString(o);
        if (null == c) return null;
        let d = r.Z.parseString(s);
        if (null == d) return null;
        let _ = r.Z.parseString(u);
        if (null == _) return null;
        let E = (0, i.AZ)(_.red, _.blue, _.green),
            f =
                null !==
                    (t = (0, i.k8)({
                        colors: [(0, i.j)(_, 0.6, !0), c],
                        ratio: 3,
                        saturationFactor: l
                    })) && void 0 !== t
                    ? t
                    : _,
            h =
                null !==
                    (n = (0, i.k8)({
                        colors: [(0, i.j)(_, 0.6, !1), d],
                        ratio: 5,
                        saturationFactor: l
                    })) && void 0 !== n
                    ? n
                    : _,
            p = (0, i.k8)({
                colors: [_, c],
                ratio: 7,
                saturationFactor: l
            }),
            m = (0, i.k8)({
                colors: [_, d],
                ratio: 7,
                saturationFactor: l
            });
        return {
            LIGHT: {
                accentColor: null == p ? void 0 : p.toHexString(),
                backgroundColor: (0, i.xj)({
                    colorRGB: f,
                    saturationFactor: l
                }),
                highlightColor: null == _ ? void 0 : _.toHexString(),
                opacity: (null == E ? void 0 : E.saturation) < 0.1 ? 0.35 : 0.1
            },
            DARK: {
                accentColor: null == m ? void 0 : m.toHexString(),
                backgroundColor: (0, i.xj)({
                    colorRGB: h,
                    saturationFactor: l
                }),
                highlightColor: null == _ ? void 0 : _.toHexString(),
                opacity: (null == E ? void 0 : E.saturation) < 0.1 ? 0.5 : 0.2
            }
        };
    },
    u = (e) => {
        let { colors: t, saturationFactor: n = 1, shouldProcessMobileColors: r = !1 } = e,
            i = l({
                colors: t,
                saturationFactor: n
            });
        return a.Z.applyPlatformToThemedEmojiColorPalette({
            palette: i,
            shouldProcessMobileColors: r
        });
    },
    c = (e, t, n) => {
        var r;
        if (null == e || e.length < 1) return null;
        let i = u({
                colors: e,
                saturationFactor: t
            }),
            a = n ? (null == i ? void 0 : i.DARK) : null == i ? void 0 : i.LIGHT;
        return {
            backgroundColor: null == a ? void 0 : a.backgroundColor,
            accentColor: null == a ? void 0 : a.accentColor,
            highlightColor: null == a ? void 0 : a.highlightColor,
            opacity: null !== (r = null == a ? void 0 : a.opacity) && void 0 !== r ? r : 0.15
        };
    };
