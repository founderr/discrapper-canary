t.d(n, {
    F7: function () {
        return g;
    },
    WA: function () {
        return m;
    },
    s2: function () {
        return x;
    },
    wo: function () {
        return p;
    },
    yp: function () {
        return C;
    }
});
var i = t(200651);
t(192379);
var l = t(853872),
    r = t(409813),
    a = t(276442),
    s = t(793541),
    o = t(380898),
    d = t(713316),
    c = t(710094),
    u = t(865921),
    h = t(388032);
let m = {
        key: null,
        renderStep: (e) => (0, i.jsx)(u.v, { ...e })
    },
    x = {
        key: r.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(a.J, {
                    ...e,
                    breadcrumbSteps: [r.h8.ADD_PAYMENT_STEPS, r.h8.REVIEW, r.h8.CONFIRM],
                    onReturn: () => {
                        0 === Object.keys(l.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(r.h8.REVIEW, { trackedFromStep: r.h8.ADD_PAYMENT_STEPS });
                    }
                })
            }),
        options: { renderHeader: !0 }
    },
    f = {
        key: r.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(o.Z, {})
    },
    v = {
        key: r.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(s.Z, {}),
        options: { renderHeader: !0 }
    },
    p = {
        key: r.h8.REVIEW,
        renderStep: (e) => (0, i.jsx)(c.l, { ...e }),
        options: { useBreadcrumbLabel: () => h.intl.string(h.t.QBnNHh) }
    },
    g = {
        key: r.h8.CONFIRM,
        renderStep: (e) => (0, i.jsx)(d.w, { ...e })
    },
    C = [f, v];
