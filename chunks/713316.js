t.d(n, {
    w: function () {
        return p;
    }
});
var i = t(200651);
t(192379);
var r = t(512722),
    o = t.n(r),
    a = t(481060),
    l = t(563132),
    c = t(698708),
    s = t(614277),
    d = t(388032),
    u = t(538228);
function p(e) {
    let { handleClose: n } = e,
        { skusById: t, selectedSkuId: r, application: p } = (0, l.usePaymentContext)();
    o()(null != r, 'Expected selectedSkuId'), o()(null != p, 'Expected application');
    let f = t[r];
    o()(null != f, 'Expected sku');
    let m = d.intl.formatToPlainString(d.t.wK0IbG, {
        applicationName: p.name,
        itemName: f.name
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
                        onClick: n,
                        children: d.intl.string(d.t.cpT0Cg)
                    })
                ]
            })
        ]
    });
}
