n.d(t, {
    Z: function () {
        return o;
    }
});
var s = n(200651);
n(192379);
var a = n(481060),
    i = n(259580),
    r = n(689938),
    l = n(914908);
function o(e) {
    let { role: t, onClick: n } = e;
    return (0, s.jsxs)(a.Clickable, {
        className: l.container,
        onClick: n,
        children: [
            (0, s.jsx)('div', {
                className: l.icon,
                children: (0, s.jsx)(a.GroupIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 20,
                    height: 20
                })
            }),
            (0, s.jsxs)('div', {
                className: l.description,
                children: [
                    (0, s.jsx)(a.Text, {
                        className: l.label,
                        color: 'none',
                        variant: 'text-md/bold',
                        children: r.Z.Messages.ROLE_EVERYONE_LABEL
                    }),
                    (0, s.jsxs)(a.Text, {
                        color: 'none',
                        variant: 'text-xs/normal',
                        children: [t.name, ' \u2022 ', r.Z.Messages.ROLE_EVERYONE_DESCRIPTION]
                    })
                ]
            }),
            (0, s.jsx)(i.Z, {
                className: l.arrow,
                direction: i.Z.Directions.RIGHT
            })
        ]
    });
}
