n.d(a, {
    Z: function () {
        return p;
    }
}),
    n(47120),
    n(653041);
var t = n(735250),
    i = n(470079),
    o = n(120356),
    r = n.n(o),
    l = n(758713),
    s = n(657707),
    c = n(51527);
let d = [l.z.DESKTOP, l.z.XBOX, l.z.PLAYSTATION, l.z.NINTENDO];
function u(e) {
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
function m(e) {
    let { platforms: a } = e;
    return (0, t.jsx)('div', {
        className: r()(c.row, c.gapSm),
        style: { alignItems: 'center' },
        children: a.map((e) => (0, t.jsx)(u, { platform: e }, e))
    });
}
function p(e) {
    let { detectedGame: a, className: n } = e,
        o = i.useMemo(() => {
            let e = new Set(a.platforms),
                n = [...e];
            return !e.has(l.z.DESKTOP) && (e.has(l.z.MACOS) || e.has(l.z.LINUX)) && n.push(l.z.DESKTOP), n.filter((e) => d.includes(e));
        }, [a.platforms]);
    return 0 === o.length
        ? null
        : (0, t.jsx)('div', {
              className: r()(c.column, c.gapLg, n),
              children: o.length > 0 && (0, t.jsx)(m, { platforms: o })
          });
}
