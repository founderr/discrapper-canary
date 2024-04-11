"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("465270"),
  r = s("481060"),
  l = s("976644"),
  n = s("626135"),
  o = s("391110"),
  u = s("981631"),
  d = s("689938"),
  c = s("379101");
t.default = e => {
  let {
    setIsAllPerksVisible: t,
    previousComponent: s
  } = e;
  return (0, a.jsx)(l.default, {
    color: r.ButtonColors.CUSTOM,
    onlyShineOnHover: !0,
    shineSize: l.ShineSizes.SMALL,
    className: c.seeAllPerksButton,
    onClick: () => {
      t(!0), n.default.track(u.AnalyticEvents.NITRO_HOME_NAVIGATION, {
        current_component: s,
        next_component: o.NitroLandingPages.SEE_ALL,
        interaction_component: "See All Button"
      })
    },
    children: (0, a.jsxs)("div", {
      className: c.seeAllPerksButtonContent,
      children: [d.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, (0, a.jsx)(i.ChevronSmallRightIcon, {
        color: "currentColor"
      })]
    })
  })
}