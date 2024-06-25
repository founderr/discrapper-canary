var n = s(735250);
s(470079);
var a = s(481060),
  i = s(626135),
  r = s(391110),
  l = s(981631),
  o = s(689938),
  c = s(455879);
t.Z = e => {
  let {
    setIsAllPerksVisible: t,
    previousComponent: s
  } = e;
  return (0, n.jsx)(a.ShinyButton, {
    color: a.ButtonColors.CUSTOM,
    onlyShineOnHover: !0,
    shineSize: a.ShineSizes.SMALL,
    className: c.seeAllPerksButton,
    onClick: () => {
      t(!0), i.default.track(l.rMx.NITRO_HOME_NAVIGATION, {
        current_component: s,
        next_component: r.MQ.SEE_ALL,
        interaction_component: "See All Button"
      })
    },
    children: (0, n.jsxs)("div", {
      className: c.seeAllPerksButtonContent,
      children: [o.Z.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, (0, n.jsx)(a.ChevronSmallRightIcon, {
        color: "currentColor"
      })]
    })
  })
}