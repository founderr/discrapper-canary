n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(481060),
    o = n(668781),
    s = n(355467),
    l = n(821849),
    u = n(78839),
    c = n(626135),
    d = n(74538),
    _ = n(981631),
    E = n(689938);
let f = 'guild-boost-purchase-modal';
async function h(e) {
    let { analyticsLocations: t, analyticsLocation: r, analyticsSourceLocation: h, guildId: p, closeLayer: m, onCloseModal: I, totalNumberOfSlotsToAssign: T = 1, disablePremiumUpsell: g, onSubscriptionConfirmation: S, inPopout: A, applicationId: v } = e,
        N = A ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT,
        O = u.ZP.getPremiumTypeSubscription();
    if (null != O && O.isPurchasedExternally && null != O.paymentGateway) {
        null != m && m(),
            o.Z.show({
                title: E.Z.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({ paymentGatewayName: _.Vzj[O.paymentGateway] }),
                body: E.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_UPGRADE_TO_PREMIUM_EXTERNAL_ERROR.format({
                    paymentGatewayName: _.Vzj[O.paymentGateway],
                    subscriptionManagementLink: (0, d.JE)(O.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                })
            });
        return;
    }
    Promise.all([(0, s.tZ)(), (0, l.Y2)()]);
    let R = () => {
        c.default.track(_.rMx.MODAL_DISMISSED, {
            type: _.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
            location: r
        });
    };
    await (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('96427'), n.e('52249'), n.e('54803'), n.e('15685'), n.e('8016'), n.e('22646'), n.e('55686')]).then(n.bind(n, 343649));
            return (n) => {
                let { transitionState: a, onClose: o } = n;
                return (0, i.jsx)(e, {
                    transitionState: a,
                    onClose: (e) => {
                        o(), null == I || I(e);
                    },
                    analyticsLocations: t,
                    analyticsLocation: r,
                    analyticsSourceLocation: null != h ? h : r,
                    guildId: p,
                    totalNumberOfSlotsToAssign: T,
                    closeGuildPerksModal: m,
                    disablePremiumUpsell: g,
                    onSubscriptionConfirmation: S,
                    applicationId: v
                });
            };
        },
        {
            modalKey: f,
            onCloseCallback: R,
            onCloseRequest: () => {
                (0, a.closeModal)(f), null == I || I(!1);
            },
            contextKey: N
        }
    );
}
