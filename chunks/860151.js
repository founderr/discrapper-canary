"use strict";
s.r(t);
var n = s("735250");
s("470079");
var i = s("120356"),
  l = s.n(i),
  a = s("481060"),
  r = s("918701"),
  u = s("644646"),
  o = s("456030");
t.default = function(e) {
  let {
    className: t,
    autoplay: s,
    quest: i,
    questContent: d,
    questExperimentLocation: c
  } = e, f = (0, r.getQuestsInstructionsToWinReward)({
    quest: i,
    location: c
  });
  return (0, n.jsxs)("div", {
    className: l()(o.wrapper, t),
    style: {
      color: i.config.colors.primary
    },
    children: [(0, n.jsx)(u.default, {
      autoplay: s,
      className: o.rewardTile,
      quest: i,
      questContent: d
    }), (0, n.jsx)(a.Text, {
      className: o.instructions,
      variant: "text-sm/normal",
      color: "text-normal",
      children: f
    })]
  })
}