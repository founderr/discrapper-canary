"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("120356"),
  i = n.n(a),
  l = n("481060"),
  r = n("918701"),
  u = n("644646"),
  o = n("456030");
t.default = function(e) {
  let {
    className: t,
    autoplay: n,
    quest: a,
    questContent: d,
    questExperimentLocation: c
  } = e, E = (0, r.getQuestsInstructionsToWinReward)({
    quest: a,
    location: c
  });
  return (0, s.jsxs)("div", {
    className: i()(o.wrapper, t),
    style: {
      color: a.config.colors.primary
    },
    children: [(0, s.jsx)(u.default, {
      autoplay: n,
      className: o.rewardTile,
      quest: a,
      questContent: d
    }), (0, s.jsx)(l.Text, {
      className: o.instructions,
      variant: "text-sm/normal",
      color: "text-normal",
      children: E
    })]
  })
}