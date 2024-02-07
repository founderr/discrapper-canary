"use strict";
i.r(t), i.d(t, {
  default: function() {
    return x
  }
});
var s = i("37983"),
  n = i("884691"),
  l = i("446674"),
  r = i("77078"),
  o = i("812204"),
  a = i("685665"),
  u = i("67069"),
  c = i("635956"),
  d = i("697218"),
  h = i("258078"),
  f = i("599110"),
  p = i("719923"),
  v = i("49111"),
  g = i("75015"),
  m = i("646718"),
  I = i("782340"),
  C = i("123342");

function x(e) {
  let {
    analyticsSection: t,
    type: i
  } = e, x = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()), E = p.default.canUseAnimatedAvatar(x), L = p.default.canUsePremiumProfileCustomization(x), N = i === g.UploadTypes.BANNER && L || i === g.UploadTypes.AVATAR && E, {
    sourceAnalyticsLocations: b
  } = (0, a.default)(o.default.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (n.useEffect(() => {
      !N && f.default.track(v.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: t,
        location_stack: b
      })
    }, [N, t, b]), N) return null;
  let R = (0, s.jsx)(c.default, {
    className: C.getNitroLink,
    size: r.Button.Sizes.SMALL,
    look: r.Button.Looks.LINK,
    color: r.Button.Colors.LINK,
    subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
    buttonText: I.default.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
    showIcon: !1,
    premiumModalAnalyticsLocation: {
      section: t,
      object: v.AnalyticsObjects.BUTTON_CTA
    },
    disableShine: !0
  });
  return (0, s.jsx)(u.default, {
    reducedRightPadding: !0,
    className: C.nitroPreviewUpsell,
    text: I.default.Messages.PREMIUM_PREVIEW.format(),
    textSize: h.default.Sizes.SIZE_14,
    textColor: h.default.Colors.HEADER_PRIMARY,
    button: R
  })
}