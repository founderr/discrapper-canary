n.d(t, {
    W4: function () {
        return m;
    }
});
var r = n(47120);
var i = n(688619),
    a = n.n(i);
let o = '--theme-base-color-amount',
    s = '--theme-text-color-amount',
    l = '--theme-base-color-light',
    u = '--theme-text-color-light',
    c = '--theme-base-color-light-hsl',
    d = '--theme-base-color-dark',
    _ = '--theme-text-color-dark',
    E = '--theme-base-color-dark-hsl',
    f = 50,
    h = 38;
function p(e) {
    let { primaryColor: t, secondaryColor: n, isDarkTheme: r } = e,
        i = a()(t),
        o = a()(n),
        [s, l] = i.luminance() > o.luminance() ? [i, o] : [o, i],
        u = l.get('hsl.h');
    (0 === u || Number.isNaN(u)) && (l = s);
    let c = r ? s.set('hsl.s', 1) : l.set('hsl.s', 1),
        d = c.get('hsl.h'),
        _ = d >= 200 && d <= 300 ? (r ? 0.8 : 0.25) : r ? 0.95 : 0.15;
    return (
        (c = c.set('hsl.l', _)),
        {
            base: r ? l.set('hsl.s', 1).set('hsl.l', 0.05) : s.set('hsl.s', 1).set('hsl.l', 0.9),
            text: c
        }
    );
}
function m(e) {
    let { enabled: t, primaryColor: n, secondaryColor: r, baseMixAmount: i = f, textMixAmount: a = h } = e,
        { base: m, text: T } = p({
            primaryColor: n,
            secondaryColor: r,
            isDarkTheme: !0
        }),
        { base: g, text: S } = p({
            primaryColor: n,
            secondaryColor: r,
            isDarkTheme: !1
        });
    return {
        [c]: I(g),
        [l]: g.css(),
        [u]: S.css(),
        [E]: I(m),
        [d]: m.css(),
        [_]: T.css(),
        [o]: ''.concat(t ? i : 0, '%'),
        [s]: ''.concat(t ? a : 0, '%'),
        '--bg-overlay-selected': 'unset',
        '--bg-overlay-hover': 'unset',
        '--bg-overlay-active': 'unset'
    };
}
function I(e) {
    let [t, n, r] = e.hsl();
    return ''
        .concat(Number.isNaN(t) ? 0 : t, ' ')
        .concat(100 * n, '% ')
        .concat(100 * r, '%');
}
