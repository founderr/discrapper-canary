s.d(t, {
    Z: function () {
        return r;
    }
});
var n = s(200651);
s(192379);
var l = s(481060),
    i = s(600164),
    a = s(973156);
function r(e) {
    let { description: t, icon: s, id: r, label: o, onChange: c, value: d } = e;
    return (0, n.jsxs)('div', {
        className: a.cardContent,
        children: [
            (0, n.jsxs)(i.Z, {
                justify: i.Z.Justify.BETWEEN,
                align: i.Z.Align.CENTER,
                children: [
                    s,
                    (0, n.jsx)(i.Z.Child, {
                        grow: 1,
                        children: (0, n.jsx)(l.Text, {
                            variant: 'text-md/semibold',
                            children: o
                        })
                    }),
                    null != c &&
                        null != d &&
                        (0, n.jsx)(l.Switch, {
                            id: r,
                            checked: d,
                            onChange: c
                        })
                ]
            }),
            (0, n.jsx)(l.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: a.cardDescription,
                children: t
            })
        ]
    });
}
