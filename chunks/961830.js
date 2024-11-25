n.d(t, {
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
var o = n(200651);
n(192379);
var i = n(853872),
    r = n(409813),
    a = n(276442),
    d = n(793541),
    c = n(380898),
    l = n(713316),
    s = n(710094),
    u = n(865921),
    f = n(388032);
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
        renderStep: () => (0, o.jsx)(c.Z, {})
    },
    g = {
        key: r.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, o.jsx)(d.Z, {}),
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
