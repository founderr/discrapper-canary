"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("37983");
s("884691");
var n = s("748802"),
  r = s("77078"),
  i = s("181114"),
  l = s("599110"),
  u = s("598739"),
  o = s("49111"),
  d = s("782340"),
  c = s("137537"),
  _ = e => {
    let {
      setIsAllPerksVisible: t,
      previousComponent: s
    } = e;
    return (0, a.jsx)(i.default, {
      color: r.ButtonColors.CUSTOM,
      onlyShineOnHover: !0,
      shineSize: i.ShineSizes.SMALL,
      className: c.seeAllPerksButton,
      onClick: () => {
        t(!0), l.default.track(o.AnalyticEvents.NITRO_HOME_NAVIGATION, {
          current_component: s,
          next_component: u.NitroLandingPages.SEE_ALL,
          interaction_component: "See All Button"
        })
      },
      children: (0, a.jsxs)("div", {
        className: c.seeAllPerksButtonContent,
        children: [d.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, (0, a.jsx)(n.ChevronSmallRightIcon, {
          color: "currentColor"
        })]
      })
    })
  }