n.d(t, {
    F7: function () {
        return S;
    },
    WA: function () {
        return I;
    },
    s2: function () {
        return _;
    },
    wo: function () {
        return E;
    },
    yp: function () {
        return p;
    }
});
var r = n(735250);
n(470079);
var a = n(853872),
    i = n(409813),
    l = n(276442),
    s = n(793541),
    o = n(380898),
    u = n(713316),
    c = n(710094),
    d = n(865921),
    h = n(689938);
let I = {
        key: null,
        renderStep: (e) => (0, r.jsx)(d.v, { ...e })
    },
    _ = {
        key: i.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)(l.J, {
                    ...e,
                    breadcrumbSteps: [i.h8.ADD_PAYMENT_STEPS, i.h8.REVIEW, i.h8.CONFIRM],
                    onReturn: () => {
                        0 === Object.keys(a.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(i.h8.REVIEW, { trackedFromStep: i.h8.ADD_PAYMENT_STEPS });
                    }
                })
            }),
        options: { renderHeader: !0 }
    },
    f = {
        key: i.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, r.jsx)(o.Z, {})
    },
    m = {
        key: i.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, r.jsx)(s.Z, {}),
        options: { renderHeader: !0 }
    },
    E = {
        key: i.h8.REVIEW,
        renderStep: (e) => (0, r.jsx)(c.l, { ...e }),
        options: { useBreadcrumbLabel: () => h.Z.Messages.BILLING_STEP_REVIEW }
    },
    S = {
        key: i.h8.CONFIRM,
        renderStep: (e) => (0, r.jsx)(u.w, { ...e })
    },
    p = [f, m];
