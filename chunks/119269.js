n.d(t, {
    Q: function () {
        return a;
    }
});
var s,
    a,
    r = n(735250);
n(470079);
var i = n(120356),
    o = n.n(i),
    l = n(442837),
    c = n(607070),
    d = n(967538),
    _ = n(885302),
    u = n(914677),
    E = n(226705);
((s = a || (a = {}))[(s.NITRO_GEM = 0)] = 'NITRO_GEM'), (s[(s.NITRO_LOGO = 1)] = 'NITRO_LOGO');
t.Z = (e) => {
    let { showAnimations: t = !0, iconClassName: n, staticPercentage: s, innerCircleClassName: a, progressCircleStrokeSize: i, backgroundCircleSize: T, percentage: I, initialPercentage: R, progressCircleVariation: m = 0, ellipseOpacity: g, customAnimationClassName: N, circleColor: C, circleStroke: p } = e,
        f = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        A = t && !f;
    return (0, r.jsx)('div', {
        className: o()(E.progressCircle, n, { [E.progressCricleBottomMargin]: 0 === m }),
        children: (0, r.jsx)(u.Z, {
            animationClassName: o()(E.activeProgressCircle, {
                [E.activeProgressCircleAnimation]: A,
                [null != N ? N : '']: A
            }),
            progressCircleStroke: p,
            progressCircleStrokeSize: i,
            percentage: null != s ? s : I,
            initialPercentage: null != s ? s : R,
            progressCircleVariation: m,
            children:
                0 === m
                    ? (0, r.jsx)(d.Z, {
                          className: A ? E.nitroGemAnimation : void 0,
                          backgroundColor: o()(E.gemBackgroundFill, a),
                          backgroundCircleSize: T
                      })
                    : (0, r.jsx)(_.Z, {
                          circleColor: C,
                          ellipseOpacity: g
                      })
        })
    });
};
