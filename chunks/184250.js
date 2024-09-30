t.r(s),
    t.d(s, {
        default: function () {
            return d;
        }
    });
var a = t(735250);
t(470079);
var n = t(98278),
    _ = t(790527),
    c = t(474936),
    o = t(689938);
function d(e) {
    let { onClose: s, analyticsSource: d, analyticsLocation: E, ...P } = e;
    return (0, a.jsx)(_.Z, {
        artURL: t(116909),
        type: c.cd.APP_ICONS_UPSELL,
        title: o.Z.Messages.PREMIUM_UPSEL_FEATURE_IN_APP_ICONS_TITLE,
        body: o.Z.Messages.PREMIUM_UPSELL_FEATURE_IN_APP_ICONS_DESCRIPTION,
        glowUp: o.Z.Messages.PREMIUM_UPSELL_FEATURE_IN_APP_ICONS_DESCRIPTION,
        onSecondaryClick: () => {
            (0, n.$)(s);
        },
        secondaryCTA: o.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
        analyticsSource: d,
        analyticsLocation: E,
        onClose: s,
        enableArtBoxShadow: !1,
        hideBackButton: !0,
        showEnhancedUpsell: !0,
        ...P
    });
}
