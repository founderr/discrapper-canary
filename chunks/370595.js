n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    a = n(50493),
    l = n(689938),
    r = n(659367),
    o = n(194898);
function c(e) {
    let { onNavigate: t, backPanel: n = a.k.INFO } = e;
    return (0, i.jsxs)('div', {
        className: o.header,
        children: [
            (0, i.jsx)('div', {
                className: o.headerTitle,
                children: (0, i.jsxs)(s.Clickable, {
                    className: r.backButton,
                    onClick: () => (null == t ? void 0 : t(n)),
                    children: [
                        (0, i.jsx)(s.ArrowSmallLeftIcon, {
                            size: 'custom',
                            width: 20,
                            height: 20
                        }),
                        (0, i.jsx)(s.Heading, {
                            variant: 'heading-md/semibold',
                            children: l.Z.Messages.BACK
                        })
                    ]
                })
            }),
            (0, i.jsx)(s.KeyCombo, {
                shortcut: 'esc',
                keyClassName: r.keyComboInner,
                className: r.keyComboContainer
            })
        ]
    });
}
