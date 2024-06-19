var n = t(735250);
t(470079);
var a = t(481060),
  r = t(626135),
  i = t(391110),
  l = t(981631),
  o = t(689938),
  _ = t(455879);
s.Z = e => {
  let {
    setIsAllPerksVisible: s,
    previousComponent: t
  } = e;
  return (0, n.jsx)(a.ShinyButton, {
    color: a.ButtonColors.CUSTOM,
    onlyShineOnHover: !0,
    shineSize: a.ShineSizes.SMALL,
    className: _.seeAllPerksButton,
    onClick: () => {
      s(!0), r.default.track(l.rMx.NITRO_HOME_NAVIGATION, {
        current_component: t,
        next_component: i.MQ.SEE_ALL,
        interaction_component: "See All Button"
      })
    },
    children: (0, n.jsxs)("div", {
      className: _.seeAllPerksButtonContent,
      children: [o.Z.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, (0, n.jsx)(a.ChevronSmallRightIcon, {
        color: "currentColor"
      })]
    })
  })
}