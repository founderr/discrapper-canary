var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(399606),
  l = s(481060),
  o = s(78839),
  c = s(63063),
  E = s(276800),
  _ = s(248042),
  u = s(409100),
  d = s(725727),
  T = s(474936),
  I = s(981631),
  R = s(689938),
  A = s(280881);
t.Z = function(e) {
  let {
    isFullscreen: t,
    buttonClassName: s
  } = e, {
    promotion: a
  } = (0, d.mq)(), N = (0, r.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription());
  if (!(0, _.Vi)()) return null;
  let C = new Date(a.endDate);
  return (0, n.jsx)("div", {
    className: i()(A.banner, {
      [A.bannerFullscreen]: t
    }),
    children: (0, n.jsxs)("div", {
      className: A.bannerContent,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)(l.Heading, {
          variant: "display-sm",
          color: "always-white",
          children: null == N ? R.Z.Messages.BOGO_BUY_HEADLINE : R.Z.Messages.BOGO_UPGRADE_HEADLINE
        }), (0, n.jsx)(l.Text, {
          className: A.countdown,
          variant: "text-sm/medium",
          children: (0, n.jsx)(E.Z, {
            endDate: C
          })
        }), (0, n.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: null == N ? R.Z.Messages.BOGO_PERKS_SUBTITLE_NON_SUB_FORMATTED.format({
            helpCenterLink: c.Z.getArticleURL(I.BhN.SUMMER_2023_BOGO)
          }) : R.Z.Messages.BOGO_PERKS_SUBTITLE_SUB_FORMATTED.format({
            helpCenterLink: c.Z.getArticleURL(I.BhN.SUMMER_2023_BOGO)
          })
        })]
      }), (0, n.jsx)(u.Z, {
        buttonText: R.Z.Messages.BOGO_CLAIM_OFFER,
        buttonTextClassName: A.subscribeButtonText,
        subscriptionTier: T.Si.TIER_2,
        className: null != s ? s : A.subscribeButton,
        forceInverted: !0
      })]
    })
  })
}