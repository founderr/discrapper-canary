r.d(n, {
    W4: function () {
        return E;
    }
});
var i = r(47120);
var a = r(688619),
    s = r.n(a);
let o = '--theme-base-color-amount',
    l = '--theme-text-color-amount',
    u = '--theme-base-color-light',
    c = '--theme-text-color-light',
    d = '--theme-base-color-light-hsl',
    f = '--theme-base-color-dark',
    _ = '--theme-text-color-dark',
    h = '--theme-base-color-dark-hsl',
    p = 50,
    m = 38;
function g(e) {
    let { primaryColor: n, secondaryColor: r, isDarkTheme: i } = e,
        a = s()(n),
        o = s()(r),
        [l, u] = a.luminance() > o.luminance() ? [a, o] : [o, a],
        c = u.get('hsl.h');
    (0 === c || Number.isNaN(c)) && (u = l);
    let d = i ? l.set('hsl.s', 1) : u.set('hsl.s', 1),
        f = d.get('hsl.h'),
        _ = f >= 200 && f <= 300 ? (i ? 0.8 : 0.25) : i ? 0.95 : 0.15;
    return (
        (d = d.set('hsl.l', _)),
        {
            base: i ? u.set('hsl.s', 1).set('hsl.l', 0.05) : l.set('hsl.s', 1).set('hsl.l', 0.9),
            text: d
        }
    );
}
function E(e) {
    let { enabled: n, primaryColor: r, secondaryColor: i, baseMixAmount: a = p, textMixAmount: s = m } = e,
        { base: E, text: I } = g({
            primaryColor: r,
            secondaryColor: i,
            isDarkTheme: !0
        }),
        { base: T, text: b } = g({
            primaryColor: r,
            secondaryColor: i,
            isDarkTheme: !1
        });
    return {
        [d]: v(T),
        [u]: T.css(),
        [c]: b.css(),
        [h]: v(E),
        [f]: E.css(),
        [_]: I.css(),
        [o]: ''.concat(n ? a : 0, '%'),
        [l]: ''.concat(n ? s : 0, '%'),
        '--bg-overlay-selected': 'unset',
        '--bg-overlay-hover': 'unset',
        '--bg-overlay-active': 'unset'
    };
}
function v(e) {
    let [n, r, i] = e.hsl();
    return ''
        .concat(Number.isNaN(n) ? 0 : n, ' ')
        .concat(100 * r, '% ')
        .concat(100 * i, '%');
}
