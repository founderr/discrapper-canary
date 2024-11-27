n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(866442),
    l = n(481060),
    a = n(388032),
    o = n(399178);
function s(e) {
    let { locked: t, role: n, textVariant: s = 'text-xs/medium' } = e,
        c = (0, l.useToken)(l.tokens.colors.INTERACTIVE_NORMAL).hex();
    return (0, i.jsx)('div', {
        className: o.roleTagContainer,
        children: (0, i.jsxs)('div', {
            className: o.roleTag,
            children: [
                (0, i.jsx)('div', {
                    className: o.roleColor,
                    style: { backgroundColor: (0, r.Rf)(n.color) }
                }),
                (0, i.jsx)(l.Spacer, {
                    size: 8,
                    horizontal: !0
                }),
                (0, i.jsxs)(l.Text, {
                    variant: s,
                    color: 'text-normal',
                    children: [(0, i.jsx)(l.HiddenVisually, { children: a.intl.string(a.t.RnyseH) }), n.name]
                }),
                !0 === t &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(l.Spacer, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, i.jsx)(l.LockIcon, {
                                size: 'md',
                                color: c
                            })
                        ]
                    })
            ]
        })
    });
}
