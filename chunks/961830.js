t.d(n, {
    F7: function () {
        return p;
    },
    WA: function () {
        return f;
    },
    s2: function () {
        return x;
    },
    wo: function () {
        return g;
    },
    yp: function () {
        return S;
    }
});
var i = t(200651);
t(192379);
var l = t(853872),
    s = t(409813),
    a = t(276442),
    r = t(793541),
    o = t(380898),
    d = t(713316),
    c = t(710094),
    u = t(865921),
    h = t(388032);
let f = {
        key: null,
        renderStep: (e) => (0, i.jsx)(u.v, { ...e })
    },
    x = {
        key: s.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(a.J, {
                    ...e,
                    breadcrumbSteps: [s.h8.ADD_PAYMENT_STEPS, s.h8.REVIEW, s.h8.CONFIRM],
                    onReturn: () => {
                        0 === Object.keys(l.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(s.h8.REVIEW, { trackedFromStep: s.h8.ADD_PAYMENT_STEPS });
                    }
                })
            }),
        options: { renderHeader: !0 }
    },
    C = {
        key: s.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(o.Z, {})
    },
    m = {
        key: s.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(r.Z, {}),
        options: { renderHeader: !0 }
    },
    g = {
        key: s.h8.REVIEW,
        renderStep: (e) => (0, i.jsx)(c.l, { ...e }),
        options: { useBreadcrumbLabel: () => h.intl.string(h.t.QBnNHh) }
    },
    p = {
        key: s.h8.CONFIRM,
        renderStep: (e) => (0, i.jsx)(d.w, { ...e })
    },
    S = [C, m];
