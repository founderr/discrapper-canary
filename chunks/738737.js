n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    l = n(987209),
    s = n(981631);
function a(e) {
    let { initialPlanId: t, activeSubscription: a, trialId: o, trialFooterMessageOverride: u, onClose: c, analyticsObject: d, analyticsLocation: h, analyticsLocations: _, analyticsSubscriptionType: f, renderHeader: E, renderPurchaseConfirmation: p, planGroup: m, reviewWarningMessage: C, skuId: S } = e;
    (0, i.openModalLazy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 598)),
                { PaymentModal: i } = await Promise.all([n.e('52249'), n.e('72652'), n.e('32776'), n.e('4747')]).then(n.bind(n, 791785)),
                { STEPS: s } = await Promise.all([n.e('96427'), n.e('52249'), n.e('54803'), n.e('15685'), n.e('72652'), n.e('32776'), n.e('79915'), n.e('8016'), n.e('68136'), n.e('51199'), n.e('76752')]).then(n.bind(n, 7305));
            return (n) => {
                let { onClose: I, ...g } = n;
                return (0, r.jsx)(e, {
                    activeSubscription: a,
                    stepConfigs: s,
                    skuIDs: [S],
                    children: (0, r.jsx)(l.KB, {
                        children: (0, r.jsx)(i, {
                            ...g,
                            initialPlanId: t,
                            onClose: (e) => {
                                I(), null == c || c(e);
                            },
                            analyticsLocations: _,
                            analyticsObject: d,
                            analyticsLocation: h,
                            analyticsSubscriptionType: f,
                            skuId: S,
                            renderHeader: E,
                            renderPurchaseConfirmation: p,
                            planGroup: m,
                            trialId: o,
                            trialFooterMessageOverride: u,
                            reviewWarningMessage: C
                        })
                    })
                });
            };
        },
        {
            onCloseCallback: () => {
                null == c || c(!1);
            },
            onCloseRequest: s.dG4
        }
    );
}
