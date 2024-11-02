n.d(t, {
    Z: function () {
        return c;
    }
});
var l = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    s = n(481060),
    a = n(600164),
    o = n(24548);
function c(e) {
    let { source: t, selectedSource: n } = e,
        { id: i, name: c, url: d } = t,
        u = (null == n ? void 0 : n.id) === i;
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsxs)(a.Z, {
            direction: a.Z.Direction.VERTICAL,
            justify: a.Z.Justify.CENTER,
            align: a.Z.Align.CENTER,
            children: [
                (0, l.jsx)(a.Z, {
                    justify: a.Z.Justify.CENTER,
                    align: a.Z.Align.CENTER,
                    children: (0, l.jsx)('div', {
                        style: { backgroundImage: 'url('.concat(d, ')') },
                        className: r()(o.sourceThumbnail, { [o.selected]: u })
                    })
                }),
                (0, l.jsx)(s.Text, {
                    className: r()(o.sourceName, { [o.selected]: u }),
                    variant: 'text-sm/normal',
                    children: c
                })
            ]
        })
    });
}
