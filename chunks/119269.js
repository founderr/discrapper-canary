s.d(t, {
    Q: function () {
        return r;
    }
});
var n,
    r,
    i = s(200651);
s(192379);
var o = s(120356),
    a = s.n(o),
    l = s(442837),
    c = s(607070),
    d = s(967538),
    u = s(885302),
    p = s(914677),
    f = s(595837);
((n = r || (r = {}))[(n.NITRO_GEM = 0)] = 'NITRO_GEM'), (n[(n.NITRO_LOGO = 1)] = 'NITRO_LOGO');
t.Z = (e) => {
    let { showAnimations: t = !0, iconClassName: s, staticPercentage: n, innerCircleClassName: r, progressCircleStrokeSize: o, backgroundCircleSize: x, percentage: C, initialPercentage: g, progressCircleVariation: h = 0, ellipseOpacity: _, customAnimationClassName: m, circleColor: L, circleStroke: v } = e,
        j = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        E = t && !j;
    return (0, i.jsx)('div', {
        className: a()(f.progressCircle, s, { [f.progressCricleBottomMargin]: 0 === h }),
        children: (0, i.jsx)(p.Z, {
            animationClassName: a()(f.activeProgressCircle, {
                [f.activeProgressCircleAnimation]: E,
                [null != m ? m : '']: E
            }),
            progressCircleStroke: v,
            progressCircleStrokeSize: o,
            percentage: null != n ? n : C,
            initialPercentage: null != n ? n : g,
            progressCircleVariation: h,
            children:
                0 === h
                    ? (0, i.jsx)(d.Z, {
                          className: E ? f.nitroGemAnimation : void 0,
                          backgroundColor: a()(f.gemBackgroundFill, r),
                          backgroundCircleSize: x
                      })
                    : (0, i.jsx)(u.Z, {
                          circleColor: L,
                          ellipseOpacity: _
                      })
        })
    });
};
