n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(228168),
    o = n(958310);
function l(e) {
    let { profileType: t, children: n } = e;
    return (0, r.jsx)('div', {
        className: a()(o.wrapper, {
            [o.biteSize]: t === s.y0.BITE_SIZE,
            [o.fullSize]: t === s.y0.FULL_SIZE,
            [o.panel]: t === s.y0.PANEL
        }),
        children: n
    });
}
