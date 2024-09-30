s.r(t),
    s.d(t, {
        default: function () {
            return f;
        }
    });
var a = s(735250);
s(470079);
var n = s(442837),
    c = s(654904),
    o = s(594174),
    r = s(74538),
    _ = s(98278),
    d = s(790527),
    i = s(474936),
    E = s(981631),
    u = s(486324),
    U = s(689938);
function f(e) {
    let { onClose: t, source: f, ...I } = e,
        O = (0, n.e7)([o.default], () => o.default.getCurrentUser()),
        T = r.ZP.isPremium(O) ? U.Z.Messages.PREMIUM_PROFILE_CUSTOMIZATION_UPGRADE_BODY : U.Z.Messages.PREMIUM_PROFILE_CUSTOMIZATION_UPSELL_BODY,
        M = T.format({
            onLearnMore: function () {
                t(), (0, _.z)(!0);
            }
        });
    return (0, a.jsx)(d.Z, {
        artURL: s(89671),
        type: i.cd.CUSTOM_PROFILE_UPSELL,
        title: U.Z.Messages.PREMIUM_PROFILE_CUSTOMIZATION_UPSELL_HEADER,
        body: M,
        glowUp: M,
        onSecondaryClick: () => {
            t(), (0, c.$r)(u.pC.BANNER);
        },
        secondaryCTA: U.Z.Messages.USER_SETTINGS_TRY_IT_OUT,
        analyticsSource: f,
        analyticsLocation: {
            section: E.jXE.USER_PROFILE,
            object: E.qAy.BUTTON_CTA
        },
        onClose: t,
        ...I
    });
}
