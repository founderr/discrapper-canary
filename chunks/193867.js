"use strict";
i.r(t), i.d(t, {
  default: function() {
    return N
  }
});
var s = i("37983"),
  n = i("884691"),
  l = i("446674"),
  r = i("77078"),
  o = i("812204"),
  a = i("685665"),
  u = i("67069"),
  d = i("635956"),
  c = i("697218"),
  f = i("258078"),
  h = i("599110"),
  v = i("719923"),
  p = i("49111"),
  g = i("75015"),
  m = i("646718"),
  C = i("782340"),
  I = i("931720");

function N(e) {
  let {
    analyticsSection: t,
    type: i
  } = e, N = (0, l.useStateFromStores)([c.default], () => c.default.getCurrentUser()), x = v.default.canUseAnimatedAvatar(N), E = v.default.canUsePremiumProfileCustomization(N), _ = i === g.UploadTypes.BANNER && E || i === g.UploadTypes.AVATAR && x, {
    sourceAnalyticsLocations: b
  } = (0, a.default)(o.default.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (n.useEffect(() => {
      !_ && h.default.track(p.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: t,
        location_stack: b
      })
    }, [_, t, b]), _) return null;
  let T = (0, s.jsx)(d.default, {
    className: I.getNitroLink,
    size: r.Button.Sizes.SMALL,
    look: r.Button.Looks.LINK,
    color: r.Button.Colors.LINK,
    subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
    buttonText: C.default.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
    showIcon: !1,
    premiumModalAnalyticsLocation: {
      section: t,
      object: p.AnalyticsObjects.BUTTON_CTA
    },
    disableShine: !0
  });
  return (0, s.jsx)(u.default, {
    reducedRightPadding: !0,
    className: I.nitroPreviewUpsell,
    text: C.default.Messages.PREMIUM_PREVIEW.format(),
    textSize: f.default.Sizes.SIZE_14,
    textColor: f.default.Colors.HEADER_PRIMARY,
    button: T
  })
}