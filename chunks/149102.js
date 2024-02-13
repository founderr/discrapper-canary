"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  i = s.n(n),
  r = s("77078"),
  l = s("646718"),
  u = s("103975"),
  o = e => {
    let {
      selectedPremiumType: t,
      setSelectedPremiumType: s
    } = e;
    return (0, a.jsxs)("div", {
      className: i(u.toggleSwitch, {
        [u.toggleSwitchStandard]: t === l.PremiumTypes.TIER_2,
        [u.toggleSwitchBasic]: t === l.PremiumTypes.TIER_0
      }),
      children: [(0, a.jsx)(r.Clickable, {
        className: u.toggleOption,
        onClick: () => s(l.PremiumTypes.TIER_2),
        children: (0, a.jsx)(r.Heading, {
          className: u.sectionHeader,
          variant: "heading-md/semibold",
          children: "Nitro"
        })
      }), (0, a.jsx)("div", {
        className: i(u.slider, {
          [u.sliderStandard]: t === l.PremiumTypes.TIER_2,
          [u.sliderBasic]: t === l.PremiumTypes.TIER_0
        })
      }), (0, a.jsx)(r.Clickable, {
        className: u.toggleOption,
        onClick: () => s(l.PremiumTypes.TIER_0),
        children: (0, a.jsx)(r.Heading, {
          className: u.sectionHeader,
          variant: "heading-md/semibold",
          children: "Basic"
        })
      })]
    })
  }