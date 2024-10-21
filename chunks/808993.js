n.d(t, {
    Z: function () {
        return _;
    }
});
var s = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(481060),
    l = n(388905),
    o = n(981631),
    c = n(689938),
    u = n(340214),
    d = n(113207);
function _(e) {
    let { transitionTo: t, email: r } = e;
    return (0, s.jsxs)('div', {
        children: [
            (0, s.jsx)(l.Ee, {
                src: n(26230),
                className: i()(d.marginBottom20, d.marginTop8)
            }),
            (0, s.jsx)(l.Dx, { children: c.Z.Messages.ACCOUNT_REVERT_SUCCESS_SUBTITLE }),
            (0, s.jsx)(l.DK, { children: c.Z.Messages.ACCOUNT_REVERT_SUCCESS_RECOVERED_WITH_EMAIL.format({ email: r }) }),
            (0, s.jsx)(l.gO, {
                className: i()(d.marginBottom20, d.marginTop20),
                children: (0, s.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    children: c.Z.Messages.ACCOUNT_REVERT_SUCCESS_MAY_LOGIN
                })
            }),
            (0, s.jsx)('div', {
                className: u.buttonContainer,
                children: (0, s.jsx)(l.zx, {
                    onClick: () => t(o.Z5c.LOGIN),
                    children: 'Log in'
                })
            })
        ]
    });
}
