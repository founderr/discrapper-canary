t.d(n, {
    Z: function () {
        return c;
    }
});
var l = t(735250);
t(470079);
var s = t(120356),
    a = t.n(s),
    i = t(481060),
    r = t(600164),
    o = t(624743);
function c(e) {
    let { source: n, selectedSource: t } = e,
        { id: s, name: c, url: u } = n,
        d = (null == t ? void 0 : t.id) === s;
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsxs)(r.Z, {
            direction: r.Z.Direction.VERTICAL,
            justify: r.Z.Justify.CENTER,
            align: r.Z.Align.CENTER,
            children: [
                (0, l.jsx)(r.Z, {
                    justify: r.Z.Justify.CENTER,
                    align: r.Z.Align.CENTER,
                    children: (0, l.jsx)('div', {
                        style: { backgroundImage: 'url('.concat(u, ')') },
                        className: a()(o.sourceThumbnail, { [o.selected]: d })
                    })
                }),
                (0, l.jsx)(i.Text, {
                    className: a()(o.sourceName, { [o.selected]: d }),
                    variant: 'text-sm/normal',
                    children: c
                })
            ]
        })
    });
}
