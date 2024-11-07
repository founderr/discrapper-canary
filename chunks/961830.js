t.d(n, {
    F7: function () {
        return x;
    },
    WA: function () {
        return p;
    },
    s2: function () {
        return b;
    },
    wo: function () {
        return h;
    },
    yp: function () {
        return m;
    }
});
var o = t(200651);
t(192379);
var i = t(853872),
    r = t(409813),
    a = t(276442),
    c = t(793541),
    d = t(380898),
    l = t(713316),
    s = t(710094),
    u = t(865921),
    f = t(388032);
let p = {
        key: null,
        renderStep: (e) => (0, o.jsx)(u.v, { ...e })
    },
    b = {
        key: r.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, o.jsx)(o.Fragment, {
                children: (0, o.jsx)(a.J, {
                    ...e,
                    breadcrumbSteps: [r.h8.ADD_PAYMENT_STEPS, r.h8.REVIEW, r.h8.CONFIRM],
                    onReturn: () => {
                        0 === Object.keys(i.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(r.h8.REVIEW, { trackedFromStep: r.h8.ADD_PAYMENT_STEPS });
                    }
                })
            }),
        options: { renderHeader: !0 }
    },
    _ = {
        key: r.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, o.jsx)(d.Z, {})
    },
    g = {
        key: r.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, o.jsx)(c.Z, {}),
        options: { renderHeader: !0 }
    },
    h = {
        key: r.h8.REVIEW,
        renderStep: (e) => (0, o.jsx)(s.l, { ...e }),
        options: { useBreadcrumbLabel: () => f.intl.string(f.t.QBnNHh) }
    },
    x = {
        key: r.h8.CONFIRM,
        renderStep: (e) => (0, o.jsx)(l.w, { ...e })
    },
    m = [_, g];
