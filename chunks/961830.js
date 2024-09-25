t.d(n, {
    F7: function () {
        return h;
    },
    WA: function () {
        return _;
    },
    s2: function () {
        return m;
    },
    wo: function () {
        return T;
    },
    yp: function () {
        return N;
    }
});
var r = t(735250);
t(470079);
var i = t(853872),
    a = t(409813),
    s = t(276442),
    o = t(793541),
    l = t(380898),
    c = t(713316),
    u = t(710094),
    d = t(865921),
    I = t(689938);
let _ = {
        key: null,
        renderStep: (e) => (0, r.jsx)(d.v, { ...e })
    },
    m = {
        key: a.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)(s.J, {
                    ...e,
                    breadcrumbSteps: [a.h8.ADD_PAYMENT_STEPS, a.h8.REVIEW, a.h8.CONFIRM],
                    onReturn: () => {
                        0 === Object.keys(i.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(a.h8.REVIEW, { trackedFromStep: a.h8.ADD_PAYMENT_STEPS });
                    }
                })
            }),
        options: { renderHeader: !0 }
    },
    f = {
        key: a.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, r.jsx)(l.Z, {})
    },
    p = {
        key: a.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, r.jsx)(o.Z, {}),
        options: { renderHeader: !0 }
    },
    T = {
        key: a.h8.REVIEW,
        renderStep: (e) => (0, r.jsx)(u.l, { ...e }),
        options: { useBreadcrumbLabel: () => I.Z.Messages.BILLING_STEP_REVIEW }
    },
    h = {
        key: a.h8.CONFIRM,
        renderStep: (e) => (0, r.jsx)(c.w, { ...e })
    },
    N = [f, p];
