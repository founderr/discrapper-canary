n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(987209),
    r = n(981631);
function l(e) {
    let { initialPlanId: t, activeSubscription: l, trialId: o, trialFooterMessageOverride: c, onClose: u, analyticsObject: d, analyticsLocation: _, analyticsLocations: E, analyticsSubscriptionType: I, renderHeader: m, renderPurchaseConfirmation: T, planGroup: f, reviewWarningMessage: h, skuId: N } = e;
    (0, a.openModalLazy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 598)),
                { PaymentModal: a } = await Promise.resolve().then(n.bind(n, 791785)),
                { STEPS: r } = await Promise.all([n.e('8016'), n.e('17938'), n.e('54433'), n.e('11999')]).then(n.bind(n, 7305));
            return (n) => {
                let { onClose: p, ...C } = n;
                return (0, i.jsx)(e, {
                    activeSubscription: l,
                    stepConfigs: r,
                    skuIDs: [N],
                    children: (0, i.jsx)(s.KB, {
                        children: (0, i.jsx)(a, {
                            ...C,
                            initialPlanId: t,
                            onClose: (e) => {
                                p(), null == u || u(e);
                            },
                            analyticsLocations: E,
                            analyticsObject: d,
                            analyticsLocation: _,
                            analyticsSubscriptionType: I,
                            skuId: N,
                            renderHeader: m,
                            renderPurchaseConfirmation: T,
                            planGroup: f,
                            trialId: o,
                            trialFooterMessageOverride: c,
                            reviewWarningMessage: h
                        })
                    })
                });
            };
        },
        {
            onCloseCallback: () => {
                null == u || u(!1);
            },
            onCloseRequest: r.dG4
        }
    );
}
