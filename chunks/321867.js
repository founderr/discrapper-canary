n.d(t, {
  Z: function() {
    return m
  }
});
var o = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(481060),
  l = n(100527),
  r = n(906732),
  c = n(411477),
  u = n(197115),
  d = n(594174),
  E = n(154921),
  _ = n(626135),
  N = n(74538),
  I = n(981631),
  g = n(486324),
  R = n(474936),
  f = n(689938),
  p = n(5018);

function m(e) {
  let {
    analyticsSection: t,
    type: n
  } = e, m = (0, s.e7)([d.default], () => d.default.getCurrentUser()), T = N.ZP.canUseAnimatedAvatar(m), h = N.ZP.canUsePremiumProfileCustomization(m), A = n === g.pC.BANNER && h || n === g.pC.AVATAR && T, {
    sourceAnalyticsLocations: x
  } = (0, r.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (i.useEffect(() => {
      !A && _.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
        type: t,
        location_stack: x
      })
    }, [A, t, x]), A) return null;
  let M = (0, o.jsx)(u.Z, {
    className: p.__invalid_getNitroLink,
    size: a.Button.Sizes.SMALL,
    look: a.Button.Looks.LINK,
    color: a.Button.Colors.LINK,
    subscriptionTier: R.Si.TIER_2,
    buttonText: f.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
    showIcon: !1,
    premiumModalAnalyticsLocation: {
      section: t,
      object: I.qAy.BUTTON_CTA
    },
    disableShine: !0
  });
  return (0, o.jsx)(c.Z, {
    reducedRightPadding: !0,
    className: p.nitroPreviewUpsell,
    text: f.Z.Messages.PREMIUM_PREVIEW.format(),
    textSize: E.Z.Sizes.SIZE_14,
    textColor: E.Z.Colors.HEADER_PRIMARY,
    button: M
  })
}