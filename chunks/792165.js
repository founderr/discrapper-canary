"use strict";
s.r(t), s.d(t, {
  CustomCallSoundUpsell: function() {
    return L
  }
});
var n = s("735250");
s("470079");
var i = s("442837"),
  l = s("693789"),
  a = s("260034"),
  r = s("993365"),
  u = s("481060"),
  o = s("230711"),
  d = s("197115"),
  c = s("504983"),
  f = s("594174"),
  _ = s("465670"),
  I = s("466111"),
  C = s("74538"),
  m = s("981631"),
  E = s("921944"),
  S = s("474936"),
  T = s("526761"),
  N = s("689938"),
  g = s("697382");

function L(e) {
  var t;
  let {
    onClose: s,
    markAsDismissed: L
  } = e, R = (0, i.useStateFromStores)([f.default], () => f.default.getCurrentUser());
  let h = (t = null == R ? void 0 : R.premiumType) === S.PremiumTypes.TIER_2 ? N.default.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_TIER_2 : null == t ? N.default.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_SUB : N.default.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_TIER_2,
    p = C.default.canUseCustomCallSounds(R);
  return (0, n.jsxs)(c.default, {
    isShown: !0,
    type: c.FeatureBorderTypes.PREMIUM,
    className: g.upsellOuter,
    backgroundClassName: g.upsellInner,
    children: [null != L ? (0, n.jsx)(u.Clickable, {
      className: g.close,
      onClick: () => null == L ? void 0 : L(E.ContentDismissActionType.DISMISS),
      "aria-label": N.default.Messages.CLOSE,
      children: (0, n.jsx)(_.default, {
        className: g.closeIcon,
        width: 16,
        height: 16
      })
    }) : null, (0, n.jsxs)("div", {
      className: g.upsellTitle,
      children: [(0, n.jsx)(I.default, {
        className: g.nitroWheel,
        width: 18,
        height: 18
      }), (0, n.jsx)(a.Heading, {
        variant: "heading-sm/bold",
        children: N.default.Messages.CALL_SOUNDS_UPSELL_TITLE_NON_SUB
      })]
    }), (0, n.jsx)(r.Text, {
      variant: "text-sm/normal",
      children: h
    }), p ? (0, n.jsx)(l.Button, {
      onClick: function() {
        o.default.open(m.UserSettingsSections.VOICE, T.SOUNDBOARD_SUBSECTION), null == s || s(), null == L || L(E.ContentDismissActionType.PRIMARY)
      },
      children: N.default.Messages.CHECK_IT_OUT
    }) : (0, n.jsx)(d.default, {
      buttonText: N.default.Messages.PREMIUM_UPSELL_GET_NITRO,
      subscriptionTier: S.PremiumSubscriptionSKUs.TIER_2,
      premiumModalAnalyticsLocation: {
        section: m.AnalyticsSections.SOUNDBOARD_SOUND_PICKER,
        object: m.AnalyticsObjects.BUTTON_CTA
      },
      color: l.Button.Colors.GREEN,
      onSubscribeModalClose: () => null == L ? void 0 : L(E.ContentDismissActionType.PRIMARY)
    })]
  })
}