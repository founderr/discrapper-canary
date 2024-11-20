t.d(n, {
    w: function () {
        return h;
    }
});
var i = t(200651);
t(192379);
var l = t(512722),
    r = t.n(l),
    a = t(481060),
    s = t(563132),
    o = t(698708),
    d = t(614277),
    c = t(388032),
    u = t(525550);
function h(e) {
    let { handleClose: n } = e,
        { skusById: t, selectedSkuId: l, application: h } = (0, s.usePaymentContext)();
    r()(null != l, 'Expected selectedSkuId'), r()(null != h, 'Expected application');
    let m = t[l];
    r()(null != m, 'Expected sku');
    let f = c.intl.formatToPlainString(c.t.wK0IbG, {
        applicationName: h.name,
        itemName: m.name
    });
    return (0, i.jsxs)(d.C3, {
        children: [
            (0, i.jsx)(o.Z, {}),
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
                        children: f
                    }),
                    (0, i.jsx)('div', { className: u.divider }),
                    (0, i.jsx)(a.Button, {
                        onClick: n,
                        children: c.intl.string(c.t.cpT0Cg)
                    })
                ]
            })
        ]
    });
}
