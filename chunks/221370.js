n.d(a, {
    Z: function () {
        return g;
    }
}),
    n(47120),
    n(653041);
var t = n(735250),
    i = n(470079),
    r = n(120356),
    o = n.n(r),
    l = n(758713),
    s = n(657707),
    c = n(793030),
    d = n(51527);
let u = [l.z.DESKTOP, l.z.XBOX, l.z.PLAYSTATION, l.z.NINTENDO];
function m(e) {
    let { platform: a } = e;
    switch (a) {
        case l.z.DESKTOP:
            return (0, t.jsx)(s.pzj, { size: 'xs' });
        case l.z.XBOX:
            return (0, t.jsx)(s.Mko, { size: 'xs' });
        case l.z.PLAYSTATION:
            return (0, t.jsx)(s.Tsp, { size: 'xs' });
        case l.z.NINTENDO:
            return (0, t.jsx)(s.aPH, { size: 'xs' });
        default:
            return null;
    }
}
function p(e) {
    let { platforms: a } = e;
    return (0, t.jsxs)('div', {
        className: o()(d.row, d.gapSm),
        style: { alignItems: 'center' },
        children: [
            (0, t.jsx)(c.xv, {
                variant: 'text-sm/normal',
                children: ' \xB7 '
            }),
            a.map((e) => (0, t.jsx)(m, { platform: e }, e))
        ]
    });
}
function g(e) {
    let { detectedGame: a, className: n } = e,
        r = i.useMemo(() => {
            let e = new Set(a.platforms),
                n = [...e];
            return !e.has(l.z.DESKTOP) && (e.has(l.z.MACOS) || e.has(l.z.LINUX)) && n.push(l.z.DESKTOP), n.filter((e) => u.includes(e));
        }, [a.platforms]);
    return 0 === r.length
        ? null
        : (0, t.jsx)('div', {
              className: o()(d.column, d.gapLg, n),
              children: r.length > 0 && (0, t.jsx)(p, { platforms: r })
          });
}
