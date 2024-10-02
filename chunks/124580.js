a.d(n, {
    Z: function () {
        return g;
    }
}),
    a(47120),
    a(653041);
var t = a(735250),
    i = a(470079),
    o = a(120356),
    r = a.n(o),
    l = a(758713),
    s = a(657707),
    c = a(793030),
    d = a(689938),
    u = a(51527);
let m = [l.z.DESKTOP, l.z.XBOX, l.z.PLAYSTATION, l.z.NINTENDO];
function p(e) {
    let { platform: n } = e;
    switch (n) {
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
function _(e) {
    let { platforms: n } = e;
    return (0, t.jsxs)('div', {
        className: r()(u.row, u.gapSm),
        style: { alignItems: 'center' },
        children: [
            (0, t.jsx)(c.xv, {
                variant: 'text-sm/normal',
                children: ' \xB7 '
            }),
            n.map((e) => (0, t.jsx)(p, { platform: e }, e))
        ]
    });
}
function g(e) {
    let { detectedGame: n } = e,
        a = i.useMemo(() => {
            let e = new Set(n.platforms),
                a = [...e];
            return !e.has(l.z.DESKTOP) && (e.has(l.z.MACOS) || e.has(l.z.LINUX)) && a.push(l.z.DESKTOP), a.filter((e) => m.includes(e));
        }, [n.platforms]);
    return 0 === n.publishers.length && 0 === a.length
        ? null
        : (0, t.jsx)('div', {
              className: r()(u.column, u.gapLg),
              children:
                  n.publishers.length > 0 &&
                  (0, t.jsxs)('div', {
                      className: r()(u.column, u.gapSm),
                      children: [
                          (0, t.jsx)(c.X6, {
                              variant: 'text-xs/semibold',
                              color: 'header-secondary',
                              children: d.Z.Messages.GAME_PROFILE_PUBLISHER
                          }),
                          (0, t.jsxs)('div', {
                              className: r()(u.row, u.gapMd),
                              children: [
                                  (0, t.jsx)(c.xv, {
                                      variant: 'text-sm/normal',
                                      children: n.publishers.join(', ')
                                  }),
                                  a.length > 0 && (0, t.jsx)(_, { platforms: a })
                              ]
                          })
                      ]
                  })
          });
}
