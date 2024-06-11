"use strict";
n.r(t), n.d(t, {
  CustomCallSoundUpsell: function() {
    return v
  }
});
var i = n("735250");
n("470079");
var a = n("442837"),
  s = n("693789"),
  r = n("260034"),
  l = n("993365"),
  u = n("481060"),
  o = n("230711"),
  d = n("197115"),
  c = n("504983"),
  f = n("594174"),
  E = n("465670"),
  _ = n("466111"),
  T = n("74538"),
  I = n("981631"),
  S = n("921944"),
  C = n("474936"),
  m = n("526761"),
  N = n("689938"),
  R = n("697382");

function v(e) {
  var t;
  let {
    onClose: n,
    markAsDismissed: v
  } = e, g = (0, a.useStateFromStores)([f.default], () => f.default.getCurrentUser());
  let p = (t = null == g ? void 0 : g.premiumType) === C.PremiumTypes.TIER_2 ? N.default.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_TIER_2 : null == t ? N.default.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_SUB : N.default.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_TIER_2,
    h = T.default.canUseCustomCallSounds(g);
  return (0, i.jsxs)(c.default, {
    isShown: !0,
    type: c.FeatureBorderTypes.PREMIUM,
    className: R.upsellOuter,
    backgroundClassName: R.upsellInner,
    children: [null != v ? (0, i.jsx)(u.Clickable, {
      className: R.close,
      onClick: () => null == v ? void 0 : v(S.ContentDismissActionType.DISMISS),
      "aria-label": N.default.Messages.CLOSE,
      children: (0, i.jsx)(E.default, {
        className: R.closeIcon,
        width: 16,
        height: 16
      })
    }) : null, (0, i.jsxs)("div", {
      className: R.upsellTitle,
      children: [(0, i.jsx)(_.default, {
        className: R.nitroWheel,
        width: 18,
        height: 18
      }), (0, i.jsx)(r.Heading, {
        variant: "heading-sm/bold",
        children: N.default.Messages.CALL_SOUNDS_UPSELL_TITLE_NON_SUB
      })]
    }), (0, i.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: p
    }), h ? (0, i.jsx)(s.Button, {
      onClick: function() {
        o.default.open(I.UserSettingsSections.VOICE, m.SOUNDBOARD_SUBSECTION), null == n || n(), null == v || v(S.ContentDismissActionType.PRIMARY)
      },
      children: N.default.Messages.CHECK_IT_OUT
    }) : (0, i.jsx)(d.default, {
      buttonText: N.default.Messages.PREMIUM_UPSELL_GET_NITRO,
      subscriptionTier: C.PremiumSubscriptionSKUs.TIER_2,
      premiumModalAnalyticsLocation: {
        section: I.AnalyticsSections.SOUNDBOARD_SOUND_PICKER,
        object: I.AnalyticsObjects.BUTTON_CTA
      },
      color: s.Button.Colors.GREEN,
      onSubscribeModalClose: () => null == v ? void 0 : v(S.ContentDismissActionType.PRIMARY)
    })]
  })
}