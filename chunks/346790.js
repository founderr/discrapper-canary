n.d(t, {
    n: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(853872),
    l = n(987209),
    a = n(409813),
    o = n(276442);
let s = {
    key: a.h8.ADD_PAYMENT_STEPS,
    renderStep: (e) => (0, i.jsx)(c, { ...e }),
    options: { renderHeader: !0 }
};
function c(e) {
    let { isGift: t } = (0, l.wD)();
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(o.J, {
            ...e,
            breadcrumbSteps: [a.h8.ADD_PAYMENT_STEPS, a.h8.REVIEW, a.h8.CONFIRM],
            onReturn: () => {
                if (0 === Object.keys(r.Z.paymentSources).length) {
                    if (t) {
                        e.handleStepChange(a.h8.GIFT_CUSTOMIZATION);
                        return;
                    }
                    e.handleClose();
                } else e.handleStepChange(a.h8.REVIEW, { trackedFromStep: a.h8.ADD_PAYMENT_STEPS });
            }
        })
    });
}
