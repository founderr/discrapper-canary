n.d(t, {
    Z: function () {
        return B;
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
    d = n(569620),
    _ = n(16503),
    E = n(64268),
    u = n(697720),
    T = n(578325),
    I = n(56790),
    R = n(90718),
    g = n(897482),
    N = n(4515),
    C = n(474472),
    m = n(156129),
    f = n(799303),
    A = n(245630),
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
    ['EE', _],
    ['IS', C],
    ['IE', N],
    ['LV', M],
    ['LI', f],
    ['LT', A],
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
    ['DE', d],
    ['ES', E],
    ['IT', m],
    ['NL', h],
    ['PL', b],
    ['HR', R]
]);
function B(e) {
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
