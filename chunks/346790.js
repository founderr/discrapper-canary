t.d(n, {
    n: function () {
        return o;
    }
});
var s = t(735250);
t(470079);
var a = t(853872),
    l = t(987209),
    r = t(409813),
    i = t(276442);
let o = {
    key: r.h8.ADD_PAYMENT_STEPS,
    renderStep: (e) => (0, s.jsx)(d, { ...e }),
    options: { renderHeader: !0 }
};
function d(e) {
    let { isGift: n } = (0, l.wD)();
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsx)(i.J, {
            ...e,
            breadcrumbSteps: [r.h8.ADD_PAYMENT_STEPS, r.h8.REVIEW, r.h8.CONFIRM],
            onReturn: () => {
                if (0 === Object.keys(a.Z.paymentSources).length) {
                    if (n) {
                        e.handleStepChange(r.h8.GIFT_CUSTOMIZATION);
                        return;
                    }
                    e.handleClose();
                } else e.handleStepChange(r.h8.REVIEW, { trackedFromStep: r.h8.ADD_PAYMENT_STEPS });
            }
        })
    });
}
