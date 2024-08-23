r.d(t, {
    Z: function () {
        return g;
    }
});
var a = r(735250),
    n = r(470079),
    i = r(120356),
    o = r.n(i),
    l = r(481060),
    c = r(931240),
    s = r(207796),
    d = r(540742),
    u = r(836768),
    h = r(10394),
    m = r(535271);
function g() {
    let e = n.useRef(null);
    return (0, a.jsxs)('div', {
        ref: e,
        className: o()(m.panel, h.panel),
        children: [
            (0, a.jsx)(l.Button, {
                size: l.Button.Sizes.SMALL,
                onClick: c.LX,
                children: 'Reset Every Clan Setup State'
            }),
            (0, a.jsx)(l.Button, {
                size: l.Button.Sizes.SMALL,
                onClick: s.PJ,
                children: 'Reset Clan Discovery State'
            }),
            (0, a.jsx)(l.Button, {
                size: l.Button.Sizes.SMALL,
                onClick: u.u,
                children: 'Reset Global Discovery State'
            }),
            (0, a.jsx)(l.Button, {
                size: l.Button.Sizes.SMALL,
                onClick: d.t,
                children: 'Reset Global Discovery Servers State'
            })
        ]
    });
}
