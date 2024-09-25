n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(866442),
    a = n(481060),
    o = n(689938),
    s = n(401114);
function l(e) {
    let { locked: t, role: n, textVariant: l = 'text-xs/medium' } = e,
        u = (0, a.useToken)(a.tokens.colors.INTERACTIVE_NORMAL).hex();
    return (0, r.jsx)('div', {
        className: s.roleTagContainer,
        children: (0, r.jsxs)('div', {
            className: s.roleTag,
            children: [
                (0, r.jsx)('div', {
                    className: s.roleColor,
                    style: { backgroundColor: (0, i.Rf)(n.color) }
                }),
                (0, r.jsx)(a.Spacer, {
                    size: 8,
                    horizontal: !0
                }),
                (0, r.jsxs)(a.Text, {
                    variant: l,
                    color: 'text-normal',
                    children: [(0, r.jsx)(a.HiddenVisually, { children: o.Z.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER }), n.name]
                }),
                !0 === t &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(a.Spacer, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, r.jsx)(a.LockIcon, {
                                size: 'md',
                                color: u
                            })
                        ]
                    })
            ]
        })
    });
}
