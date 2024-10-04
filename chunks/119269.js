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
    l = n.n(i),
    o = n(442837),
    c = n(607070),
    d = n(967538),
    _ = n(885302),
    E = n(914677),
    u = n(226705);
((s = a || (a = {}))[(s.NITRO_GEM = 0)] = 'NITRO_GEM'), (s[(s.NITRO_LOGO = 1)] = 'NITRO_LOGO');
t.Z = (e) => {
    let { showAnimations: t = !0, iconClassName: n, staticPercentage: s, innerCircleClassName: a, progressCircleStrokeSize: i, backgroundCircleSize: T, percentage: I, initialPercentage: R, progressCircleVariation: g = 0, ellipseOpacity: N, customAnimationClassName: m, circleColor: C, circleStroke: f } = e,
        p = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        A = t && !p;
    return (0, r.jsx)('div', {
        className: l()(u.progressCircle, n, { [u.progressCricleBottomMargin]: 0 === g }),
        children: (0, r.jsx)(E.Z, {
            animationClassName: l()(u.activeProgressCircle, {
                [u.activeProgressCircleAnimation]: A,
                [null != m ? m : '']: A
            }),
            progressCircleStroke: f,
            progressCircleStrokeSize: i,
            percentage: null != s ? s : I,
            initialPercentage: null != s ? s : R,
            progressCircleVariation: g,
            children:
                0 === g
                    ? (0, r.jsx)(d.Z, {
                          className: A ? u.nitroGemAnimation : void 0,
                          backgroundColor: l()(u.gemBackgroundFill, a),
                          backgroundCircleSize: T
                      })
                    : (0, r.jsx)(_.Z, {
                          circleColor: C,
                          ellipseOpacity: N
                      })
        })
    });
};
