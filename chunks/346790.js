t.d(n, {
    n: function () {
        return o;
    }
});
var s = t(735250);
t(470079);
var a = t(853872),
    l = t(987209),
    i = t(409813),
    r = t(276442);
let o = {
    key: i.h8.ADD_PAYMENT_STEPS,
    renderStep: (e) => (0, s.jsx)(d, { ...e }),
    options: { renderHeader: !0 }
};
function d(e) {
    let { isGift: n } = (0, l.wD)();
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsx)(r.J, {
            ...e,
            breadcrumbSteps: [i.h8.ADD_PAYMENT_STEPS, i.h8.REVIEW, i.h8.CONFIRM],
            onReturn: () => {
                if (0 === Object.keys(a.Z.paymentSources).length) {
                    if (n) {
                        e.handleStepChange(i.h8.GIFT_CUSTOMIZATION);
                        return;
                    }
                    e.handleClose();
                } else e.handleStepChange(i.h8.REVIEW, { trackedFromStep: i.h8.ADD_PAYMENT_STEPS });
            }
        })
    });
}
