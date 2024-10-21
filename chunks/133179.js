n.d(t, {
    Z: function () {
        return c;
    }
});
var l = n(200651);
n(192379);
var s = n(120356),
    i = n.n(s),
    r = n(481060),
    a = n(600164),
    o = n(24548);
function c(e) {
    let { source: t, selectedSource: n } = e,
        { id: s, name: c, url: d } = t,
        u = (null == n ? void 0 : n.id) === s;
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
                        className: i()(o.sourceThumbnail, { [o.selected]: u })
                    })
                }),
                (0, l.jsx)(r.Text, {
                    className: i()(o.sourceName, { [o.selected]: u }),
                    variant: 'text-sm/normal',
                    children: c
                })
            ]
        })
    });
}
