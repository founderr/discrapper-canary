n.r(t),
    n.d(t, {
        default: function () {
            return p;
        },
        openBurstReactionsUpsellModal: function () {
            return f;
        }
    });
var i = n(735250);
n(470079);
var s = n(481060),
    o = n(230711),
    a = n(104494),
    l = n(639119),
    r = n(790527),
    c = n(474936),
    d = n(981631),
    u = n(689938),
    h = n(104724),
    m = n(784370);
function p(e) {
    var t, n;
    let { onClose: s, analyticsSource: p, ...f } = e,
        g = u.Z.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY.format({
            onClick: () => {
                o.Z.open(d.oAB.PREMIUM), s();
            }
        }),
        _ = (0, l.N)(),
        T = (0, a.Ng)(),
        v = null != _ || null != T;
    return (0, i.jsx)(r.Z, {
        artURL: m,
        artContainerClassName: h.artContainer,
        modalClassName: h.modalContainer,
        bodyClassName: h.bodyContainer,
        type: c.cd.BURST_REACTION_UPSELL,
        title: u.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE,
        body: g,
        glowUp: g,
        analyticsSource: p,
        analyticsLocation: {
            page: d.ZY5.PREMIUM_UPSELL_BURST_REACTIONS,
            object: d.qAy.BUTTON_CTA
        },
        onClose: s,
        subscribeButtonText: v ? void 0 : u.Z.Messages.PREMIUM_SETTINGS_GET,
        subscriptionTier: null !== (n = null == _ ? void 0 : null === (t = _.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : c.Si.TIER_2,
        backButtonText: u.Z.Messages.NO_THANKS,
        ...f
    });
}
function f(e) {
    let { analytics: t } = e;
    (0, s.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 659215));
        return (n) =>
            (0, i.jsx)(e, {
                analyticsSource: t,
                ...n
            });
    });
}
