n.d(t, {
    Z: function () {
        return u;
    }
});
var s = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(481060),
    l = n(388905),
    o = n(689938),
    c = n(113207);
function u(e) {
    let { email: t } = e;
    return (0, s.jsxs)('div', {
        children: [
            (0, s.jsx)(l.Ee, {
                src: n(26230),
                className: i()(c.marginBottom20, c.marginTop8)
            }),
            (0, s.jsx)(l.Dx, { children: o.Z.Messages.ACCOUNT_REVERT_SUCCESS_SUBTITLE }),
            (0, s.jsx)(l.DK, { children: o.Z.Messages.ACCOUNT_REVERT_SUCCESS_RECOVERED_WITH_EMAIL.format({ email: t }) }),
            (0, s.jsx)(a.Text, {
                className: i()(c.marginBottom8, c.marginTop20),
                variant: 'text-md/normal',
                children: o.Z.Messages.ACCOUNT_REVERT_SUCCESS_MAY_LOGIN
            })
        ]
    });
}
