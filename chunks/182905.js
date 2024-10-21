var n = s(200651);
s(192379);
var l = s(120356),
    i = s.n(l),
    a = s(692547),
    r = s(481060),
    o = s(600164),
    c = s(670494);
t.Z = (e) => {
    let { className: t, icon: s, noticeText: l, buttonText: d, onClick: u, canSync: h } = e;
    return (0, n.jsx)(r.Card, {
        className: i()(t, c.card),
        children: (0, n.jsxs)(o.Z, {
            justify: o.Z.Justify.BETWEEN,
            align: o.Z.Align.CENTER,
            children: [
                (0, n.jsx)(s, {
                    width: 20,
                    height: 20,
                    size: 'custom',
                    color: a.Z.unsafe_rawColors.YELLOW_300.css
                }),
                (0, n.jsx)('div', {
                    className: c.label,
                    children: (0, n.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: l
                    })
                }),
                h &&
                    (0, n.jsx)(r.Button, {
                        size: r.Button.Sizes.SMALL,
                        color: r.Button.Colors.PRIMARY,
                        onClick: u,
                        children: d
                    })
            ]
        })
    });
};
