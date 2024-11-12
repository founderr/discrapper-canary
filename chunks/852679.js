n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(668781),
    s = n(355467),
    o = n(821849),
    l = n(78839),
    u = n(626135),
    c = n(74538),
    d = n(981631),
    f = n(388032);
let _ = 'guild-boost-purchase-modal';
async function p(e) {
    let { analyticsLocations: t, analyticsLocation: p, analyticsSourceLocation: h, guildId: m, closeLayer: g, onCloseModal: E, totalNumberOfSlotsToAssign: v = 1, disablePremiumUpsell: I, onSubscriptionConfirmation: b, inPopout: S, applicationId: T } = e,
        y = S ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT,
        A = l.ZP.getPremiumTypeSubscription();
    if (null != A && A.isPurchasedExternally && null != A.paymentGateway) {
        null != g && g(),
            a.Z.show({
                title: f.intl.formatToPlainString(f.t.rTk9v7, { paymentGatewayName: d.Vzj[A.paymentGateway] }),
                body: f.intl.format(f.t.NY03WF, {
                    paymentGatewayName: d.Vzj[A.paymentGateway],
                    subscriptionManagementLink: (0, c.JE)(A.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                })
            });
        return;
    }
    Promise.all([(0, s.tZ)(), (0, o.Y2)()]);
    await (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('63288'), n.e('77298'), n.e('23357'), n.e('29549'), n.e('12013'), n.e('8016'), n.e('52249'), n.e('99783'), n.e('22646'), n.e('48583')]).then(n.bind(n, 343649));
            return (n) => {
                let { transitionState: i, onClose: a } = n;
                return (0, r.jsx)(e, {
                    transitionState: i,
                    onClose: (e) => {
                        a(), null == E || E(e);
                    },
                    analyticsLocations: t,
                    analyticsLocation: p,
                    analyticsSourceLocation: null != h ? h : p,
                    guildId: m,
                    totalNumberOfSlotsToAssign: v,
                    closeGuildPerksModal: g,
                    disablePremiumUpsell: I,
                    onSubscriptionConfirmation: b,
                    applicationId: T
                });
            };
        },
        {
            modalKey: _,
            onCloseCallback: () => {
                u.default.track(d.rMx.MODAL_DISMISSED, {
                    type: d.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
                    location: p
                });
            },
            onCloseRequest: () => {
                (0, i.closeModal)(_), null == E || E(!1);
            },
            contextKey: y
        }
    );
}
