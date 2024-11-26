n.d(t, {
    z: function () {
        return s;
    }
});
var a = n(200651),
    r = n(481060),
    l = n(37592),
    i = n(388032),
    o = n(458065);
function s(e) {
    let { onChooseType: t, onStripePaymentMethodReceived: n, onPaymentRequestFailure: s, onValidGooglePay: c, paymentRequestRef: u } = e;
    return (0, a.jsx)('div', {
        className: o.body,
        children: (0, a.jsx)(r.FormSection, {
            title: i.intl.string(i.t.eQ2bLi),
            children: (0, a.jsx)(l.T, {
                paymentLabel: i.intl.string(i.t.ZURqX1),
                paymentRequestRef: u,
                renderConnectorView: !0,
                onStripePaymentMethodReceived: n,
                onPaymentRequestFailure: s,
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
