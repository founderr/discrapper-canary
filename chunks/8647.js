var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  i = t(399606),
  l = t(481060),
  o = t(78839),
  _ = t(63063),
  c = t(276800),
  E = t(248042),
  u = t(409100),
  d = t(725727),
  R = t(474936),
  I = t(981631),
  T = t(689938),
  A = t(280881);
s.Z = function(e) {
  let {
    isFullscreen: s,
    buttonClassName: t
  } = e, {
    promotion: a
  } = (0, d.mq)(), M = (0, i.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription());
  if (!(0, E.Vi)()) return null;
  let S = new Date(a.endDate);
  return (0, n.jsx)("div", {
    className: r()(A.banner, {
      [A.bannerFullscreen]: s
    }),
    children: (0, n.jsxs)("div", {
      className: A.bannerContent,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)(l.Heading, {
          variant: "display-sm",
          color: "always-white",
          children: null == M ? T.Z.Messages.BOGO_BUY_HEADLINE : T.Z.Messages.BOGO_UPGRADE_HEADLINE
        }), (0, n.jsx)(l.Text, {
          className: A.countdown,
          variant: "text-sm/medium",
          children: (0, n.jsx)(c.Z, {
            endDate: S
          })
        }), (0, n.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: null == M ? T.Z.Messages.BOGO_PERKS_SUBTITLE_NON_SUB_FORMATTED.format({
            helpCenterLink: _.Z.getArticleURL(I.BhN.SUMMER_2023_BOGO)
          }) : T.Z.Messages.BOGO_PERKS_SUBTITLE_SUB_FORMATTED.format({
            helpCenterLink: _.Z.getArticleURL(I.BhN.SUMMER_2023_BOGO)
          })
        })]
      }), (0, n.jsx)(u.Z, {
        buttonText: T.Z.Messages.BOGO_CLAIM_OFFER,
        buttonTextClassName: A.subscribeButtonText,
        subscriptionTier: R.Si.TIER_2,
        className: null != t ? t : A.subscribeButton,
        forceInverted: !0
      })]
    })
  })
}