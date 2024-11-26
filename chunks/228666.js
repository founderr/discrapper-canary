n.d(t, {
    P: function () {
        return h;
    }
});
var a = n(200651),
    r = n(192379),
    l = n(442837),
    i = n(481060),
    o = n(464179);
n(600164);
var s = n(706454),
    c = n(351402),
    u = n(603421),
    d = n(981631),
    m = n(388032),
    p = n(868069);
let h = (e) => {
    let t,
        { billingAddressInfo: n, billingError: h, onBillingAddressChange: A, paymentSourceType: E } = e,
        N = null != h && (null == h.code || (0, u.ly)(h) === u.Rg.ADDRESS),
        f = (0, l.e7)([s.default], () => s.default.locale);
    switch (E) {
        case d.HeQ.GIROPAY:
        case d.HeQ.PAYSAFE_CARD:
        case d.HeQ.GCASH:
        case d.HeQ.GRABPAY_MY:
        case d.HeQ.MOMO_WALLET:
        case d.HeQ.KAKAOPAY:
        case d.HeQ.GOPAY_WALLET:
        case d.HeQ.BANCONTACT:
            t = 'en-US' === f ? o.ZP.Layouts.MODAL_US_WITH_NAME : o.ZP.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case d.HeQ.VENMO:
        case d.HeQ.CASH_APP:
            t = o.ZP.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = 'en-US' === f ? o.ZP.Layouts.MODAL_US : o.ZP.Layouts.MODAL_INTL;
    }
    let y = (0, l.e7)([c.Z], () => c.Z.ipCountryCode);
    return (
        0 === n.country.length && (n.country = null != y ? y : ''),
        (0, a.jsxs)(r.Fragment, {
            children: [
                N
                    ? (0, a.jsx)(i.FormErrorBlock, {
                          className: p.errorBlock,
                          children: m.intl.string(m.t.vZ8y7u)
                      })
                    : null,
                (0, a.jsx)(o.ZP, {
                    className: p.__invalid_formItem,
                    onBillingAddressChange: A,
                    error: h,
                    layout: t,
                    ...n
                })
            ]
        })
    );
};
