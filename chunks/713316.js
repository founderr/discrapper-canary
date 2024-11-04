n.d(t, {
    w: function () {
        return p;
    }
});
var o = n(200651);
n(192379);
var r = n(512722),
    i = n.n(r),
    a = n(481060),
    c = n(598),
    d = n(698708),
    l = n(614277),
    s = n(388032),
    u = n(525550);
function p(e) {
    let { handleClose: t } = e,
        { skusById: n, selectedSkuId: r, application: p } = (0, c.usePaymentContext)();
    i()(null != r, 'Expected selectedSkuId'), i()(null != p, 'Expected application');
    let f = n[r];
    i()(null != f, 'Expected sku');
    let b = s.intl.formatToPlainString(s.t.wK0IbG, {
        applicationName: p.name,
        itemName: f.name
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
