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
    u = n(64268),
    E = n(697720),
    T = n(578325),
    I = n(56790),
    R = n(90718),
    m = n(897482),
    N = n(4515),
    g = n(474472),
    C = n(156129),
    p = n(799303),
    f = n(245630),
    A = n(842272),
    h = n(486731),
    S = n(346943),
    M = n(55826),
    x = n(218776),
    b = n(414653),
    O = n(297141),
    v = n(26517),
    P = n(93125),
    L = n(278583),
    Z = n(814437);
let D = new Map([
    ['BG', i],
    ['CZ', c],
    ['HU', m],
    ['RO', v],
    ['SE', P],
    ['CY', o],
    ['EE', _],
    ['IS', g],
    ['IE', N],
    ['LV', h],
    ['LI', p],
    ['LT', f],
    ['LU', A],
    ['MT', S],
    ['SK', Z],
    ['SI', L],
    ['GR', I],
    ['FI', E],
    ['PT', O],
    ['NO', x],
    ['BE', r],
    ['AT', a],
    ['CH', l],
    ['FR', T],
    ['DE', d],
    ['ES', u],
    ['IT', C],
    ['NL', M],
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
