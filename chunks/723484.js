n.d(t, {
    F: function () {
        return u;
    },
    b: function () {
        return d;
    }
});
var a = n(200651);
n(192379);
var r = n(512722),
    l = n.n(r),
    i = n(481060),
    s = n(563132),
    o = n(185139),
    c = n(388032);
let u = (e) => {
    let { className: t } = e;
    return (0, a.jsx)(i.FormSection, {
        className: t,
        children: (0, a.jsx)(i.FormTitle, { children: c.intl.string(c.t.eALkIS) })
    });
};
function d(e) {
    let { steps: t, currentStep: n, paymentError: r, className: i } = e,
        { steps: c, step: d, paymentError: m } = (0, s.usePaymentContext)();
    return (
        (t = null != t ? t : c),
        null == n && null != d && (n = d),
        l()(n, 'step should be set'),
        l()(t, 'step should be set'),
        (r = null != r ? r : m),
        (0, a.jsx)(o.Z, {
            steps: t,
            currentStep: n,
            paymentError: r,
            body: (0, a.jsx)(u, { className: i }),
            footer: null
        })
    );
}
