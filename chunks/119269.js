n.d(t, {
    Q: function () {
        return r;
    }
});
var i,
    r,
    a = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    o = n(442837),
    c = n(607070),
    d = n(967538),
    u = n(885302),
    g = n(914677),
    m = n(595837);
((i = r || (r = {}))[(i.NITRO_GEM = 0)] = 'NITRO_GEM'), (i[(i.NITRO_LOGO = 1)] = 'NITRO_LOGO');
t.Z = (e) => {
    let { showAnimations: t = !0, iconClassName: n, staticPercentage: i, innerCircleClassName: r, progressCircleStrokeSize: s, backgroundCircleSize: f, percentage: p, initialPercentage: _, progressCircleVariation: h = 0, ellipseOpacity: x, customAnimationClassName: E, circleColor: b, circleStroke: C } = e,
        v = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        T = t && !v;
    return (0, a.jsx)('div', {
        className: l()(m.progressCircle, n, { [m.progressCricleBottomMargin]: 0 === h }),
        children: (0, a.jsx)(g.Z, {
            animationClassName: l()(m.activeProgressCircle, {
                [m.activeProgressCircleAnimation]: T,
                [null != E ? E : '']: T
            }),
            progressCircleStroke: C,
            progressCircleStrokeSize: s,
            percentage: null != i ? i : p,
            initialPercentage: null != i ? i : _,
            progressCircleVariation: h,
            children:
                0 === h
                    ? (0, a.jsx)(d.Z, {
                          className: T ? m.nitroGemAnimation : void 0,
                          backgroundColor: l()(m.gemBackgroundFill, r),
                          backgroundCircleSize: f
                      })
                    : (0, a.jsx)(u.Z, {
                          circleColor: b,
                          ellipseOpacity: x
                      })
        })
    });
};
