t.d(n, {
    F7: function () {
        return x;
    },
    WA: function () {
        return f;
    },
    s2: function () {
        return b;
    },
    wo: function () {
        return g;
    },
    yp: function () {
        return m;
    }
});
var o = t(200651);
t(192379);
var r = t(853872),
    i = t(409813),
    a = t(276442),
    c = t(793541),
    d = t(380898),
    l = t(713316),
    s = t(710094),
    u = t(865921),
    p = t(689938);
let f = {
        key: null,
        renderStep: (e) => (0, o.jsx)(u.v, { ...e })
    },
    b = {
        key: i.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, o.jsx)(o.Fragment, {
                children: (0, o.jsx)(a.J, {
                    ...e,
                    breadcrumbSteps: [i.h8.ADD_PAYMENT_STEPS, i.h8.REVIEW, i.h8.CONFIRM],
                    onReturn: () => {
                        0 === Object.keys(r.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(i.h8.REVIEW, { trackedFromStep: i.h8.ADD_PAYMENT_STEPS });
                    }
                })
            }),
        options: { renderHeader: !0 }
    },
    _ = {
        key: i.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, o.jsx)(d.Z, {})
    },
    h = {
        key: i.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, o.jsx)(c.Z, {}),
        options: { renderHeader: !0 }
    },
    g = {
        key: i.h8.REVIEW,
        renderStep: (e) => (0, o.jsx)(s.l, { ...e }),
        options: { useBreadcrumbLabel: () => p.Z.Messages.BILLING_STEP_REVIEW }
    },
    x = {
        key: i.h8.CONFIRM,
        renderStep: (e) => (0, o.jsx)(l.w, { ...e })
    },
    m = [_, h];
