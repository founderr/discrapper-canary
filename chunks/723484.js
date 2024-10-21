t.d(a, {
    F: function () {
        return u;
    },
    b: function () {
        return d;
    }
});
var n = t(200651);
t(192379);
var s = t(512722),
    r = t.n(s),
    l = t(481060),
    o = t(598),
    i = t(185139),
    c = t(689938);
let u = (e) => {
    let { className: a } = e;
    return (0, n.jsx)(l.FormSection, {
        className: a,
        children: (0, n.jsx)(l.FormTitle, { children: c.Z.Messages.PAYMENT_WAITING_FOR_AUTHENTICATION })
    });
};
function d(e) {
    let { steps: a, currentStep: t, paymentError: s, className: l } = e,
        { steps: c, step: d, paymentError: E } = (0, o.usePaymentContext)();
    return (
        (a = null != a ? a : c),
        null == t && null != d && (t = d),
        r()(t, 'step should be set'),
        r()(a, 'step should be set'),
        (s = null != s ? s : E),
        (0, n.jsx)(i.Z, {
            steps: a,
            currentStep: t,
            paymentError: s,
            body: (0, n.jsx)(u, { className: l }),
            footer: null
        })
    );
}
