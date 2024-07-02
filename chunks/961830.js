t.d(n, {
    F7: function () {
        return g;
    },
    WA: function () {
        return p;
    },
    s2: function () {
        return _;
    },
    wo: function () {
        return b;
    },
    yp: function () {
        return v;
    }
});
var i = t(735250);
t(470079);
var a = t(853872), r = t(409813), o = t(276442), s = t(793541), l = t(380898), c = t(713316), d = t(710094), u = t(865921), f = t(689938);
let p = {
        key: null,
        renderStep: e => (0, i.jsx)(u.v, { ...e })
    }, _ = {
        key: r.h8.ADD_PAYMENT_STEPS,
        renderStep: e => (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(o.J, {
                ...e,
                breadcrumbSteps: [
                    r.h8.ADD_PAYMENT_STEPS,
                    r.h8.REVIEW,
                    r.h8.CONFIRM
                ],
                onReturn: () => {
                    0 === Object.keys(a.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(r.h8.REVIEW, { trackedFromStep: r.h8.ADD_PAYMENT_STEPS });
                }
            })
        }),
        options: { renderHeader: !0 }
    }, m = {
        key: r.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(l.Z, {})
    }, C = {
        key: r.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(s.Z, {}),
        options: { renderHeader: !0 }
    }, b = {
        key: r.h8.REVIEW,
        renderStep: e => (0, i.jsx)(d.l, { ...e }),
        options: { useBreadcrumbLabel: () => f.Z.Messages.BILLING_STEP_REVIEW }
    }, g = {
        key: r.h8.CONFIRM,
        renderStep: e => (0, i.jsx)(c.w, { ...e })
    }, v = [
        m,
        C
    ];
