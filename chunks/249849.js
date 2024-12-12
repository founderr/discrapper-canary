r.d(n, {
    s: function () {
        return o;
    }
});
var i = r(688619),
    a = r.n(i);
function s(e, n, r) {
    if (!a().valid(n)) return e.map(() => '#000000');
    let i = a()(n),
        s = i.luminance();
    return e.map((e, n) => i.luminance((e * r[n].base + s * r[n].tint) / (r[n].base + r[n].tint)).hex());
}
function o(e) {
    let { primaryBaseColors: n, primaryTintColor: r, primaryTintLuminances: i, primaryLuminanceWeights: a, secondaryBaseColors: o, secondaryTintColor: l, secondaryTintLuminances: u, secondaryLuminanceWeights: c } = e,
        d = null != r ? s(i, r, a) : n,
        f = [];
    return (
        null != o && null != u && null != c && (f = null != l ? s(u, l, c) : o),
        {
            primaryColorsTransformed: d,
            secondaryColorsTransformed: f
        }
    );
}
