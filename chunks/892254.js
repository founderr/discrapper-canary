n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(780384),
    s = n(607070),
    o = n(514361),
    l = n(210887),
    u = n(231338);
function c(e) {
    let { children: t } = e,
        n = (0, i.e7)([l.Z], () => l.Z.theme),
        c = (0, i.e7)([o.Z], () => o.Z.gradientPreset),
        { saturation: d, contrast: f } = (0, i.cj)([s.Z], () => ({
            saturation: s.Z.saturation,
            contrast: s.Z.contrast
        })),
        _ = 0;
    return (
        null != c && (_ = c.theme === u.BR.LIGHT ? (0, a.Od)(_, a.bg.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, a.Od)(_, a.bg.MOBILE_DARK_GRADIENT_THEME_ENABLED)),
        1 !== d && (_ = (0, a.Od)(_, a.bg.REDUCE_SATURATION_ENABLED)),
        (0, r.jsx)(a.wM, {
            theme: n,
            flags: _,
            saturation: d,
            contrast: f,
            children: t
        })
    );
}
