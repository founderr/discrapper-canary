n.d(t, {
    z: function () {
        return o;
    }
});
var a = n(200651),
    r = n(481060),
    l = n(502109),
    i = n(388032),
    s = n(458065);
function o(e) {
    let { onChooseType: t, onStripePaymentMethodReceived: n, onPaymentRequestFailure: o, onValidGooglePay: c, paymentRequestRef: u } = e;
    return (0, a.jsx)('div', {
        className: s.body,
        children: (0, a.jsx)(r.FormSection, {
            title: i.intl.string(i.t.eQ2bLi),
            children: (0, a.jsx)(l.T, {
                paymentLabel: i.intl.string(i.t.ZURqX1),
                paymentRequestRef: u,
                renderConnectorView: !0,
                onStripePaymentMethodReceived: n,
                onPaymentRequestFailure: o,
                onValidGooglePay: c,
                onChooseType: t,
                loadingComponent: (0, a.jsx)(r.Button, {
                    color: r.Button.Colors.TRANSPARENT,
                    submitting: !0,
                    look: r.Button.Looks.LINK
                })
            })
        })
    });
}
