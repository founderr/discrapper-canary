a.d(n, {
    Z: function () {
        return E;
    }
}),
    a(47120),
    a(653041);
var t = a(735250),
    r = a(470079),
    s = a(120356),
    i = a.n(s),
    o = a(758713),
    l = a(657707),
    c = a(51527);
let d = [o.z.DESKTOP, o.z.XBOX, o.z.PLAYSTATION, o.z.NINTENDO];
function u(e) {
    let { platform: n } = e;
    switch (n) {
        case o.z.DESKTOP:
            return (0, t.jsx)(l.pzj, { size: 'xs' });
        case o.z.XBOX:
            return (0, t.jsx)(l.Mko, { size: 'xs' });
        case o.z.PLAYSTATION:
            return (0, t.jsx)(l.Tsp, { size: 'xs' });
        case o.z.NINTENDO:
            return (0, t.jsx)(l.aPH, { size: 'xs' });
        default:
            return null;
    }
}
function _(e) {
    let { platforms: n } = e;
    return (0, t.jsx)('div', {
        className: i()(c.row, c.gapSm),
        style: { alignItems: 'center' },
        children: n.map((e) => (0, t.jsx)(u, { platform: e }, e))
    });
}
function E(e) {
    let { detectedGame: n, className: a } = e,
        s = r.useMemo(() => {
            let e = new Set(n.platforms),
                a = [...e];
            return !e.has(o.z.DESKTOP) && (e.has(o.z.MACOS) || e.has(o.z.LINUX)) && a.push(o.z.DESKTOP), a.filter((e) => d.includes(e));
        }, [n.platforms]);
    return 0 === s.length
        ? null
        : (0, t.jsx)('div', {
              className: i()(c.column, c.gapLg, a),
              children: s.length > 0 && (0, t.jsx)(_, { platforms: s })
          });
}
