n.d(t, {
    w: function () {
        return f;
    }
});
var o = n(200651);
n(192379);
var i = n(512722),
    r = n.n(i),
    a = n(481060),
    c = n(563132),
    d = n(698708),
    l = n(614277),
    s = n(388032),
    u = n(525550);
function f(e) {
    let { handleClose: t } = e,
        { skusById: n, selectedSkuId: i, application: f } = (0, c.usePaymentContext)();
    r()(null != i, 'Expected selectedSkuId'), r()(null != f, 'Expected application');
    let p = n[i];
    r()(null != p, 'Expected sku');
    let b = s.intl.formatToPlainString(s.t.wK0IbG, {
        applicationName: f.name,
        itemName: p.name
    });
    return (0, o.jsxs)(l.C3, {
        children: [
            (0, o.jsx)(d.Z, {}),
            (0, o.jsxs)('div', {
                className: u.confirmation,
                children: [
                    (0, o.jsx)(a.Heading, {
                        variant: 'heading-xxl/bold',
                        className: u.confirmationHeader,
                        children: 'Success!'
                    }),
                    (0, o.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: b
                    }),
                    (0, o.jsx)('div', { className: u.divider }),
                    (0, o.jsx)(a.Button, {
                        onClick: t,
                        children: s.intl.string(s.t.cpT0Cg)
                    })
                ]
            })
        ]
    });
}
