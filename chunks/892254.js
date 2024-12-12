r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(780384),
    o = r(607070),
    l = r(514361),
    u = r(210887),
    c = r(740492),
    d = r(231338);
function f(e) {
    let { children: n } = e,
        r = (0, a.e7)([u.Z], () => u.Z.theme),
        f = (0, a.e7)([c.ZP], () => c.ZP.listDensity),
        _ = (0, a.e7)([l.Z], () => l.Z.gradientPreset),
        { saturation: h, contrast: p } = (0, a.cj)([o.Z], () => ({
            saturation: o.Z.saturation,
            contrast: o.Z.contrast
        })),
        m = 0;
    return (
        null != _ && (m = _.theme === d.BR.LIGHT ? (0, s.Od)(m, s.bg.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, s.Od)(m, s.bg.MOBILE_DARK_GRADIENT_THEME_ENABLED)),
        1 !== h && (m = (0, s.Od)(m, s.bg.REDUCE_SATURATION_ENABLED)),
        (0, i.jsx)(s.wM, {
            theme: r,
            flags: m,
            saturation: h,
            contrast: p,
            density: f,
            children: n
        })
    );
}
