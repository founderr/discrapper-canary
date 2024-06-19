n.d(t, {
  Z: function() {
    return N
  }
});
var r = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(481060),
  l = n(100527),
  o = n(906732),
  c = n(411477),
  u = n(197115),
  d = n(594174),
  h = n(154921),
  A = n(626135),
  E = n(74538),
  g = n(981631),
  m = n(486324),
  R = n(474936),
  f = n(689938),
  _ = n(5018);

function N(e) {
  let {
    analyticsSection: t,
    type: n
  } = e, N = (0, s.e7)([d.default], () => d.default.getCurrentUser()), I = E.ZP.canUseAnimatedAvatar(N), M = E.ZP.canUsePremiumProfileCustomization(N), x = n === m.pC.BANNER && M || n === m.pC.AVATAR && I, {
    sourceAnalyticsLocations: L
  } = (0, o.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (i.useEffect(() => {
      !x && A.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
        type: t,
        location_stack: L
      })
    }, [x, t, L]), x) return null;
  let C = (0, r.jsx)(u.Z, {
    className: _.__invalid_getNitroLink,
    size: a.Button.Sizes.SMALL,
    look: a.Button.Looks.LINK,
    color: a.Button.Colors.LINK,
    subscriptionTier: R.Si.TIER_2,
    buttonText: f.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
    showIcon: !1,
    premiumModalAnalyticsLocation: {
      section: t,
      object: g.qAy.BUTTON_CTA
    },
    disableShine: !0
  });
  return (0, r.jsx)(c.Z, {
    reducedRightPadding: !0,
    className: _.nitroPreviewUpsell,
    text: f.Z.Messages.PREMIUM_PREVIEW.format(),
    textSize: h.Z.Sizes.SIZE_14,
    textColor: h.Z.Colors.HEADER_PRIMARY,
    button: C
  })
}