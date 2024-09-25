n.r(t),
    n.d(t, {
        default: function () {
            return f;
        },
        openBurstReactionsUpsellModal: function () {
            return h;
        }
    });
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(230711),
    o = n(104494),
    s = n(639119),
    l = n(790527),
    u = n(474936),
    c = n(981631),
    d = n(689938),
    _ = n(104724),
    E = n(784370);
function f(e) {
    var t, n;
    let { onClose: i, analyticsSource: f, ...h } = e,
        p = d.Z.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY.format({
            onClick: () => {
                a.Z.open(c.oAB.PREMIUM), i();
            }
        }),
        m = (0, s.N)(),
        I = (0, o.Ng)(),
        T = null != m || null != I;
    return (0, r.jsx)(l.Z, {
        artURL: E,
        artContainerClassName: _.artContainer,
        modalClassName: _.modalContainer,
        bodyClassName: _.bodyContainer,
        type: u.cd.BURST_REACTION_UPSELL,
        title: d.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE,
        body: p,
        glowUp: p,
        analyticsSource: f,
        analyticsLocation: {
            page: c.ZY5.PREMIUM_UPSELL_BURST_REACTIONS,
            object: c.qAy.BUTTON_CTA
        },
        onClose: i,
        subscribeButtonText: T ? void 0 : d.Z.Messages.PREMIUM_SETTINGS_GET,
        subscriptionTier: null !== (n = null == m ? void 0 : null === (t = m.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : u.Si.TIER_2,
        backButtonText: d.Z.Messages.NO_THANKS,
        ...h
    });
}
function h(e) {
    let { analytics: t } = e;
    (0, i.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 659215));
        return (n) =>
            (0, r.jsx)(e, {
                analyticsSource: t,
                ...n
            });
    });
}
