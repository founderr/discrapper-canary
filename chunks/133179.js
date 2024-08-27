t.d(n, {
    Z: function () {
        return u;
    }
});
var l = t(735250);
t(470079);
var s = t(120356),
    a = t.n(s),
    r = t(481060),
    i = t(600164),
    o = t(624743);
function u(e) {
    let { source: n, selectedSource: t } = e,
        { id: s, name: u, url: c } = n,
        d = (null == t ? void 0 : t.id) === s;
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsxs)(i.Z, {
            direction: i.Z.Direction.VERTICAL,
            justify: i.Z.Justify.CENTER,
            align: i.Z.Align.CENTER,
            children: [
                (0, l.jsx)(i.Z, {
                    justify: i.Z.Justify.CENTER,
                    align: i.Z.Align.CENTER,
                    children: (0, l.jsx)('div', {
                        style: { backgroundImage: 'url('.concat(c, ')') },
                        className: a()(o.sourceThumbnail, { [o.selected]: d })
                    })
                }),
                (0, l.jsx)(r.Text, {
                    className: a()(o.sourceName, { [o.selected]: d }),
                    variant: 'text-sm/normal',
                    children: u
                })
            ]
        })
    });
}
