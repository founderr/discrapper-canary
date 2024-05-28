"use strict";
n.r(t), n.d(t, {
  CustomCallSoundUpsell: function() {
    return g
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  i = n("693789"),
  l = n("260034"),
  r = n("993365"),
  u = n("481060"),
  o = n("230711"),
  d = n("197115"),
  c = n("504983"),
  E = n("594174"),
  f = n("465670"),
  _ = n("466111"),
  T = n("74538"),
  I = n("981631"),
  S = n("921944"),
  m = n("474936"),
  C = n("526761"),
  N = n("689938"),
  R = n("697382");

function g(e) {
  var t;
  let {
    onClose: n,
    markAsDismissed: g
  } = e, v = (0, a.useStateFromStores)([E.default], () => E.default.getCurrentUser());
  let L = (t = null == v ? void 0 : v.premiumType) === m.PremiumTypes.TIER_2 ? N.default.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_TIER_2 : null == t ? N.default.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_SUB : N.default.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_TIER_2,
    h = T.default.canUseCustomCallSounds(v);
  return (0, s.jsxs)(c.default, {
    isShown: !0,
    type: c.FeatureBorderTypes.PREMIUM,
    className: R.upsellOuter,
    backgroundClassName: R.upsellInner,
    children: [null != g ? (0, s.jsx)(u.Clickable, {
      className: R.close,
      onClick: () => null == g ? void 0 : g(S.ContentDismissActionType.DISMISS),
      "aria-label": N.default.Messages.CLOSE,
      children: (0, s.jsx)(f.default, {
        className: R.closeIcon,
        width: 16,
        height: 16
      })
    }) : null, (0, s.jsxs)("div", {
      className: R.upsellTitle,
      children: [(0, s.jsx)(_.default, {
        className: R.nitroWheel,
        width: 18,
        height: 18
      }), (0, s.jsx)(l.Heading, {
        variant: "heading-sm/bold",
        children: N.default.Messages.CALL_SOUNDS_UPSELL_TITLE_NON_SUB
      })]
    }), (0, s.jsx)(r.Text, {
      variant: "text-sm/normal",
      children: L
    }), h ? (0, s.jsx)(i.Button, {
      onClick: function() {
        o.default.open(I.UserSettingsSections.VOICE, C.SOUNDBOARD_SUBSECTION), null == n || n(), null == g || g(S.ContentDismissActionType.PRIMARY)
      },
      children: N.default.Messages.CHECK_IT_OUT
    }) : (0, s.jsx)(d.default, {
      buttonText: N.default.Messages.PREMIUM_UPSELL_GET_NITRO,
      subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
      premiumModalAnalyticsLocation: {
        section: I.AnalyticsSections.SOUNDBOARD_SOUND_PICKER,
        object: I.AnalyticsObjects.BUTTON_CTA
      },
      color: i.Button.Colors.GREEN,
      onSubscribeModalClose: () => null == g ? void 0 : g(S.ContentDismissActionType.PRIMARY)
    })]
  })
}