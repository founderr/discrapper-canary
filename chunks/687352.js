n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    l = n.n(a),
    s = n(481060),
    o = n(925329),
    r = n(932355);
function c(e) {
    let { className: t, embeddedApps: n, muted: a } = e;
    if (n.length <= 0) return null;
    if (1 === n.length)
        return (0, i.jsx)('div', {
            className: l()(r.container, t, a && r.modeMuted),
            children: (0, i.jsx)(o.Z, {
                game: n[0].application,
                className: r.icon20px
            })
        });
    {
        let e = n.length - 1;
        return (0, i.jsxs)('div', {
            className: l()(r.container, t, a && r.modeMuted),
            children: [
                (0, i.jsx)(o.Z, {
                    game: n[0].application,
                    className: r.icon20px
                }),
                2 === n.length
                    ? (0, i.jsx)(o.Z, {
                          game: n[1].application,
                          className: r.icon20px
                      })
                    : (0, i.jsx)(s.Text, {
                          className: r.overflow,
                          variant: 'text-xs/bold',
                          color: 'interactive-active',
                          children: '+'.concat(e)
                      })
            ]
        });
    }
}
