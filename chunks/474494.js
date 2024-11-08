n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(319147),
    a = n(306276),
    s = n(510236),
    l = n(133398),
    o = n(722283),
    c = n(298274),
    d = n(569620),
    u = n(16503),
    g = n(64268),
    m = n(697720),
    f = n(578325),
    _ = n(56790),
    p = n(90718),
    h = n(897482),
    E = n(4515),
    b = n(474472),
    x = n(156129),
    C = n(799303),
    T = n(245630),
    v = n(842272),
    N = n(486731),
    I = n(346943),
    S = n(55826),
    R = n(218776),
    A = n(414653),
    j = n(297141),
    P = n(26517),
    Z = n(93125),
    O = n(278583),
    M = n(814437);
let B = new Map([
    ['BG', s],
    ['CZ', c],
    ['HU', h],
    ['RO', P],
    ['SE', Z],
    ['CY', o],
    ['EE', u],
    ['IS', b],
    ['IE', E],
    ['LV', N],
    ['LI', C],
    ['LT', T],
    ['LU', v],
    ['MT', I],
    ['SK', M],
    ['SI', O],
    ['GR', _],
    ['FI', m],
    ['PT', j],
    ['NO', R],
    ['BE', a],
    ['AT', r],
    ['CH', l],
    ['FR', f],
    ['DE', d],
    ['ES', g],
    ['IT', x],
    ['NL', S],
    ['PL', A],
    ['HR', p]
]);
function w(e) {
    let { className: t, countryCode: n } = e;
    if (null == n || !B.has(n)) return null;
    let r = B.get(n);
    return (0, i.jsx)('img', {
        className: t,
        'aria-hidden': !0,
        alt: 'Wumpus holding a country-specific flag',
        src: r
    });
}
