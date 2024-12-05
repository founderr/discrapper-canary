n.r(t),
    n.d(t, {
        default: function () {
            return x;
        }
    });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(512722),
    a = n.n(l),
    o = n(481060),
    c = n(563132),
    d = n(409813),
    u = n(3409),
    m = n(388032),
    g = n(517978),
    h = n(652849);
function p(e) {
    let { transitionState: t, analyticsLocation: n, onClose: s, onAddPaymentSource: l, toastContent: c, initialStep: p = d.h8.PAYMENT_TYPE, overwriteSubscriptionPaymentSource: x = !1 } = e,
        T = (0, u.fL)(),
        S = (0, u.vP)({
            paymentModalArgs: T,
            initialStep: p,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                s();
            },
            onComplete: (e, t) => {
                a()(null != t, 'paymentSource missing'), null == l || l(t), s();
            },
            onStepChange: () => {},
            header: (0, i.jsxs)('div', {
                className: r()(g.modalTitle, h.flex, h.justifyBetween, h.alignCenter),
                children: [
                    (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H4,
                        children: m.intl.string(m.t.eQ2bLi)
                    }),
                    (0, i.jsx)(o.ModalCloseButton, { onClick: s })
                ]
            }),
            analyticsLocation: n,
            hideBreadcrumbs: !0,
            toastContent: c,
            overwriteSubscriptionPaymentSource: x
        });
    return (0, i.jsx)(o.ModalRoot, {
        transitionState: t,
        size: o.ModalSize.SMALL,
        className: g.modal,
        'aria-label': m.intl.string(m.t.eQ2bLi),
        children: (0, i.jsx)('form', {
            className: g.form,
            onSubmit: function (e) {
                e.preventDefault();
            },
            children: S
        })
    });
}
function x(e) {
    return (0, i.jsx)(c.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, i.jsx)(p, { ...e })
    });
}
