n.d(t, {
    w: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(512722),
    o = n.n(r),
    a = n(481060),
    l = n(563132),
    c = n(698708),
    s = n(614277),
    d = n(388032),
    u = n(786698);
function f(e) {
    let { handleClose: t } = e,
        { skusById: n, selectedSkuId: r, application: f } = (0, l.usePaymentContext)();
    o()(null != r, 'Expected selectedSkuId'), o()(null != f, 'Expected application');
    let p = n[r];
    o()(null != p, 'Expected sku');
    let m = d.intl.formatToPlainString(d.t.wK0IbG, {
        applicationName: f.name,
        itemName: p.name
    });
    return (0, i.jsxs)(s.C3, {
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
                        onClick: t,
                        children: d.intl.string(d.t.cpT0Cg)
                    })
                ]
            })
        ]
    });
}
