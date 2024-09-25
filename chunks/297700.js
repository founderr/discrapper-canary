n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(189798),
    u = n(96175);
function c(e) {
    let { children: t, size: n = 16, className: a, flowerStarClassName: c, ...d } = e,
        _ = i.Children.only(t),
        E = {
            width: n,
            height: n
        },
        f = (0, s.useRedesignIconContext)().enabled && !e.allowFullSizedIcon;
    return (0, r.jsxs)('div', {
        className: o()(u.flowerStarContainer, a),
        style: E,
        children: [
            (0, r.jsx)(l.Z, {
                ...d,
                className: o()(c, u.flowerStar)
            }),
            (0, r.jsx)('div', {
                className: o()(u.childContainer, { [u.redesignIconChildContainer]: f }),
                children: _
            })
        ]
    });
}
