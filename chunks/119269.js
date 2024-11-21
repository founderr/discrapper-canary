s.d(t, {
    Qo: function () {
        return r;
    }
});
var n,
    r,
    i = s(200651),
    a = s(192379),
    o = s(120356),
    l = s.n(o),
    c = s(442837),
    d = s(481060),
    u = s(607070),
    p = s(821982),
    f = s(967538),
    x = s(885302),
    C = s(914677),
    g = s(226705);
((n = r || (r = {}))[(n.NITRO_GEM = 0)] = 'NITRO_GEM'), (n[(n.NITRO_LOGO = 1)] = 'NITRO_LOGO'), (n[(n.AVATAR_DECO = 2)] = 'AVATAR_DECO');
let _ = (e) => {
    let { avatarDecoAssetId: t, avatarDecoAssetDescription: s } = e,
        n = a.useMemo(() => (0, p.Z)(t, d.AvatarSizes.SIZE_120, !1), [t]);
    return (0, i.jsx)('div', {
        className: g.avatarDecoContainer,
        children: (0, i.jsx)('div', {
            className: g.avatarDeco,
            children: (0, i.jsx)('img', {
                className: g.avatarDecoImage,
                alt: s,
                src: n
            })
        })
    });
};
t.ZP = (e) => {
    let { showAnimations: t = !0, iconClassName: s, staticPercentage: n, innerCircleClassName: r, progressCircleStrokeSize: a, backgroundCircleSize: o, percentage: d, initialPercentage: p, progressCircleVariation: h = 0, avatarDecoAssetId: m, avatarDecoAssetDescription: L, ellipseOpacity: v, customAnimationClassName: A, circleColor: j, circleStroke: E } = e,
        O = (0, c.e7)([u.Z], () => u.Z.useReducedMotion),
        T = t && !O;
    return (0, i.jsx)('div', {
        className: l()(g.progressCircle, s),
        children: (0, i.jsx)(C.Z, {
            animationClassName: l()(g.activeProgressCircle, {
                [g.activeProgressCircleAnimation]: T,
                [null != A ? A : '']: T
            }),
            progressCircleStroke: E,
            progressCircleStrokeSize: a,
            percentage: null != n ? n : d,
            initialPercentage: null != n ? n : p,
            progressCircleVariation: h,
            children: (() => {
                switch (h) {
                    case 0:
                        return (0, i.jsx)(f.Z, {
                            className: T ? g.nitroGemAnimation : void 0,
                            backgroundColor: l()(g.gemBackgroundFill, r),
                            backgroundCircleSize: o
                        });
                    case 1:
                        return (0, i.jsx)(x.Z, {
                            circleColor: j,
                            ellipseOpacity: v
                        });
                    case 2:
                        if (null != m)
                            return (0, i.jsx)(_, {
                                avatarDecoAssetId: m,
                                avatarDecoAssetDescription: L
                            });
                        return null;
                    default:
                        return null;
                }
            })()
        })
    });
};
