a.r(e),
    a.d(e, {
        default: function () {
            return _;
        }
    });
var n = a(200651);
a(192379);
var d = a(979554),
    t = a(98278),
    s = a(792254),
    A = a(790527),
    f = a(474936),
    o = a(689938);
function _(c) {
    let { collectableType: e, onClose: a, analyticsSource: _, analyticsLocation: E, onSecondaryClick: L, ...p } = c,
        b = e === d.Z.AVATAR_DECORATION || e === d.Z.PROFILE_EFFECT,
        R = (0, s.Z)(e === d.Z.AVATAR_DECORATION ? f.cd.AVATAR_DECORATION_MODAL_UPSELL : f.cd.PROFILE_EFFECT_MODAL_UPSELL);
    return b
        ? (0, n.jsx)(A.Z, {
              artURL: R,
              type: e === d.Z.AVATAR_DECORATION ? f.cd.AVATAR_DECORATION_MODAL_UPSELL : f.cd.PROFILE_EFFECT_MODAL_UPSELL,
              title: e === d.Z.AVATAR_DECORATION ? o.Z.Messages.PREMIUM_UPSELL_PROFILE_AVATAR_DECO_MODAL_UPSELL_TITLE : o.Z.Messages.PREMIUM_UPSELL_PROFILE_EFFECT_MODAL_UPSELL_TITLE,
              body: e === d.Z.AVATAR_DECORATION ? o.Z.Messages.PREMIUM_UPSELL_PROFILE_AVATAR_DECO_MODAL_UPSELL_DESCRIPTION : o.Z.Messages.PREMIUM_UPSELL_PROFILE_EFFECT_MODAL_UPSELL_DESCRIPTION,
              glowUp: e === d.Z.AVATAR_DECORATION ? o.Z.Messages.PREMIUM_UPSELL_PROFILE_AVATAR_DECO_MODAL_UPSELL_DESCRIPTION : o.Z.Messages.PREMIUM_UPSELL_PROFILE_EFFECT_MODAL_UPSELL_DESCRIPTION,
              onSecondaryClick: () => {
                  L(), (0, t.$)(a);
              },
              secondaryCTA: o.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
              onClose: a,
              enableArtBoxShadow: !1,
              analyticsSource: _,
              analyticsLocation: E,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              ...p
          })
        : null;
}
