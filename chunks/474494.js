n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(47120);
var s = n(735250);
n(470079);
var a = n(319147),
    r = n(306276),
    i = n(510236),
    l = n(133398),
    o = n(722283),
    c = n(298274),
    _ = n(569620),
    d = n(16503),
    E = n(64268),
    u = n(697720),
    T = n(578325),
    I = n(56790),
    R = n(90718),
    g = n(897482),
    N = n(4515),
    m = n(474472),
    C = n(156129),
    A = n(799303),
    f = n(245630),
    p = n(842272),
    M = n(486731),
    S = n(346943),
    h = n(55826),
    x = n(218776),
    b = n(414653),
    O = n(297141),
    P = n(26517),
    v = n(93125),
    L = n(278583),
    Z = n(814437);
let D = new Map([
    ['BG', i],
    ['CZ', c],
    ['HU', g],
    ['RO', P],
    ['SE', v],
    ['CY', o],
    ['EE', d],
    ['IS', m],
    ['IE', N],
    ['LV', M],
    ['LI', A],
    ['LT', f],
    ['LU', p],
    ['MT', S],
    ['SK', Z],
    ['SI', L],
    ['GR', I],
    ['FI', u],
    ['PT', O],
    ['NO', x],
    ['BE', r],
    ['AT', a],
    ['CH', l],
    ['FR', T],
    ['DE', _],
    ['ES', E],
    ['IT', C],
    ['NL', h],
    ['PL', b],
    ['HR', R]
]);
function U(e) {
    let { className: t, countryCode: n } = e;
    if (null == n || !D.has(n)) return null;
    let a = D.get(n);
    return (0, s.jsx)('img', {
        className: t,
        'aria-hidden': !0,
        alt: 'Wumpus holding a country-specific flag',
        src: a
    });
}
