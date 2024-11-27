t.d(n, {
    F7: function () {
        return g;
    },
    WA: function () {
        return p;
    },
    s2: function () {
        return m;
    },
    wo: function () {
        return x;
    },
    yp: function () {
        return h;
    }
});
var i = t(200651);
t(192379);
var r = t(853872),
    o = t(409813),
    a = t(276442),
    l = t(793541),
    c = t(380898),
    d = t(713316),
    s = t(710094),
    u = t(865921),
    f = t(388032);
let p = {
        key: null,
        renderStep: (e) => (0, i.jsx)(u.v, { ...e })
    },
    m = {
        key: o.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(a.J, {
                    ...e,
                    breadcrumbSteps: [o.h8.ADD_PAYMENT_STEPS, o.h8.REVIEW, o.h8.CONFIRM],
                    onReturn: () => {
                        0 === Object.keys(r.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(o.h8.REVIEW, { trackedFromStep: o.h8.ADD_PAYMENT_STEPS });
                    }
                })
            }),
        options: { renderHeader: !0 }
    },
    b = {
        key: o.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(c.Z, {})
    },
    _ = {
        key: o.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(l.Z, {}),
        options: { renderHeader: !0 }
    },
    x = {
        key: o.h8.REVIEW,
        renderStep: (e) => (0, i.jsx)(s.l, { ...e }),
        options: { useBreadcrumbLabel: () => f.intl.string(f.t.QBnNHh) }
    },
    g = {
        key: o.h8.CONFIRM,
        renderStep: (e) => (0, i.jsx)(d.w, { ...e })
    },
    h = [b, _];
