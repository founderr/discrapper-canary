t.d(n, {
    w: function () {
        return f;
    }
});
var i = t(735250);
t(470079);
var a = t(512722), r = t.n(a), o = t(481060), s = t(598), l = t(698708), c = t(614277), d = t(689938), u = t(811586);
function f(e) {
    let {handleClose: n} = e, {
            skusById: t,
            selectedSkuId: a,
            application: f
        } = (0, s.usePaymentContext)();
    r()(null != a, 'Expected selectedSkuId'), r()(null != f, 'Expected application');
    let p = t[a];
    r()(null != p, 'Expected sku');
    let _ = d.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
        applicationName: f.name,
        itemName: p.name
    });
    return (0, i.jsxs)(c.C3, {
        children: [
            (0, i.jsx)(l.Z, {}),
            (0, i.jsxs)('div', {
                className: u.confirmation,
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-xxl/bold',
                        className: u.confirmationHeader,
                        children: 'Success!'
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: _
                    }),
                    (0, i.jsx)('div', { className: u.divider }),
                    (0, i.jsx)(o.Button, {
                        onClick: n,
                        children: d.Z.Messages.CLOSE
                    })
                ]
            })
        ]
    });
}
