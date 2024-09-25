t.d(n, {
    w: function () {
        return I;
    }
});
var r = t(735250);
t(470079);
var i = t(512722),
    a = t.n(i),
    s = t(481060),
    o = t(598),
    l = t(698708),
    c = t(614277),
    u = t(689938),
    d = t(525550);
function I(e) {
    let { handleClose: n } = e,
        { skusById: t, selectedSkuId: i, application: I } = (0, o.usePaymentContext)();
    a()(null != i, 'Expected selectedSkuId'), a()(null != I, 'Expected application');
    let _ = t[i];
    a()(null != _, 'Expected sku');
    let m = u.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
        applicationName: I.name,
        itemName: _.name
    });
    return (0, r.jsxs)(c.C3, {
        children: [
            (0, r.jsx)(l.Z, {}),
            (0, r.jsxs)('div', {
                className: d.confirmation,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: 'heading-xxl/bold',
                        className: d.confirmationHeader,
                        children: 'Success!'
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: m
                    }),
                    (0, r.jsx)('div', { className: d.divider }),
                    (0, r.jsx)(s.Button, {
                        onClick: n,
                        children: u.Z.Messages.CLOSE
                    })
                ]
            })
        ]
    });
}
