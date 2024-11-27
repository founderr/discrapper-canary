t.d(n, {
    w: function () {
        return f;
    }
});
var i = t(200651);
t(192379);
var r = t(512722),
    o = t.n(r),
    a = t(481060),
    l = t(563132),
    c = t(698708),
    d = t(614277),
    s = t(388032),
    u = t(786698);
function f(e) {
    let { handleClose: n } = e,
        { skusById: t, selectedSkuId: r, application: f } = (0, l.usePaymentContext)();
    o()(null != r, 'Expected selectedSkuId'), o()(null != f, 'Expected application');
    let p = t[r];
    o()(null != p, 'Expected sku');
    let m = s.intl.formatToPlainString(s.t.wK0IbG, {
        applicationName: f.name,
        itemName: p.name
    });
    return (0, i.jsxs)(d.C3, {
        children: [
            (0, i.jsx)(c.Z, {}),
            (0, i.jsxs)('div', {
                className: u.confirmation,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-xxl/bold',
                        className: u.confirmationHeader,
                        children: 'Success!'
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: m
                    }),
                    (0, i.jsx)('div', { className: u.divider }),
                    (0, i.jsx)(a.Button, {
                        onClick: n,
                        children: s.intl.string(s.t.cpT0Cg)
                    })
                ]
            })
        ]
    });
}
