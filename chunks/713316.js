t.d(n, {
    w: function () {
        return f;
    }
});
var o = t(200651);
t(192379);
var i = t(512722),
    r = t.n(i),
    a = t(481060),
    c = t(563132),
    d = t(698708),
    l = t(614277),
    s = t(388032),
    u = t(525550);
function f(e) {
    let { handleClose: n } = e,
        { skusById: t, selectedSkuId: i, application: f } = (0, c.usePaymentContext)();
    r()(null != i, 'Expected selectedSkuId'), r()(null != f, 'Expected application');
    let p = t[i];
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
                        onClick: n,
                        children: s.intl.string(s.t.cpT0Cg)
                    })
                ]
            })
        ]
    });
}
