n.d(t, {
    n: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var a = n(853872),
    s = n(987209),
    r = n(409813),
    l = n(276442);
let o = {
    key: r.h8.ADD_PAYMENT_STEPS,
    renderStep: (e) => (0, i.jsx)(c, { ...e }),
    options: { renderHeader: !0 }
};
function c(e) {
    let { isGift: t } = (0, s.wD)();
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(l.J, {
            ...e,
            breadcrumbSteps: [r.h8.ADD_PAYMENT_STEPS, r.h8.REVIEW, r.h8.CONFIRM],
            onReturn: () => {
                if (0 === Object.keys(a.Z.paymentSources).length) {
                    if (t) {
                        e.handleStepChange(r.h8.GIFT_CUSTOMIZATION);
                        return;
                    }
                    e.handleClose();
                } else e.handleStepChange(r.h8.REVIEW, { trackedFromStep: r.h8.ADD_PAYMENT_STEPS });
            }
        })
    });
}
