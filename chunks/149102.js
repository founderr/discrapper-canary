"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  i = s.n(n),
  r = s("77078"),
  l = s("646718"),
  o = s("497151"),
  u = e => {
    let {
      selectedPremiumType: t,
      setSelectedPremiumType: s
    } = e;
    return (0, a.jsxs)("div", {
      className: i(o.toggleSwitch, {
        [o.toggleSwitchStandard]: t === l.PremiumTypes.TIER_2,
        [o.toggleSwitchBasic]: t === l.PremiumTypes.TIER_0
      }),
      children: [(0, a.jsx)(r.Clickable, {
        className: o.toggleOption,
        onClick: () => s(l.PremiumTypes.TIER_2),
        children: (0, a.jsx)(r.Heading, {
          className: o.sectionHeader,
          variant: "heading-md/semibold",
          children: "Nitro"
        })
      }), (0, a.jsx)("div", {
        className: i(o.slider, {
          [o.sliderStandard]: t === l.PremiumTypes.TIER_2,
          [o.sliderBasic]: t === l.PremiumTypes.TIER_0
        })
      }), (0, a.jsx)(r.Clickable, {
        className: o.toggleOption,
        onClick: () => s(l.PremiumTypes.TIER_0),
        children: (0, a.jsx)(r.Heading, {
          className: o.sectionHeader,
          variant: "heading-md/semibold",
          children: "Basic"
        })
      })]
    })
  }