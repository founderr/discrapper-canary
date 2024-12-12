r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(780384),
    o = r(607070),
    l = r(514361),
    u = r(210887),
    c = r(231338);
function d(e) {
    let { children: n } = e,
        r = (0, a.e7)([u.Z], () => u.Z.theme),
        d = (0, a.e7)([l.Z], () => l.Z.gradientPreset),
        { saturation: f, contrast: _ } = (0, a.cj)([o.Z], () => ({
            saturation: o.Z.saturation,
            contrast: o.Z.contrast
        })),
        h = 0;
    return (
        null != d && (h = d.theme === c.BR.LIGHT ? (0, s.Od)(h, s.bg.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, s.Od)(h, s.bg.MOBILE_DARK_GRADIENT_THEME_ENABLED)),
        1 !== f && (h = (0, s.Od)(h, s.bg.REDUCE_SATURATION_ENABLED)),
        (0, i.jsx)(s.wM, {
            theme: r,
            flags: h,
            saturation: f,
            contrast: _,
            children: n
        })
    );
}
