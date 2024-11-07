t.d(n, {
    n: function () {
        return s;
    }
});
var i = t(200651);
t(192379);
var a = t(853872),
    r = t(987209),
    o = t(409813),
    l = t(276442);
let s = {
    key: o.h8.ADD_PAYMENT_STEPS,
    renderStep: (e) => (0, i.jsx)(d, { ...e }),
    options: { renderHeader: !0 }
};
function d(e) {
    let { isGift: n } = (0, r.wD)();
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(l.J, {
            ...e,
            breadcrumbSteps: [o.h8.ADD_PAYMENT_STEPS, o.h8.REVIEW, o.h8.CONFIRM],
            onReturn: () => {
                if (0 === Object.keys(a.Z.paymentSources).length) {
                    if (n) {
                        e.handleStepChange(o.h8.GIFT_CUSTOMIZATION);
                        return;
                    }
                    e.handleClose();
                } else e.handleStepChange(o.h8.REVIEW, { trackedFromStep: o.h8.ADD_PAYMENT_STEPS });
            }
        })
    });
}
