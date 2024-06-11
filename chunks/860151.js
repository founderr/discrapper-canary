"use strict";
n.r(t);
var i = n("735250");
n("470079");
var a = n("120356"),
  s = n.n(a),
  r = n("481060"),
  l = n("918701"),
  u = n("644646"),
  o = n("456030");
t.default = function(e) {
  let {
    className: t,
    autoplay: n,
    quest: a,
    questContent: d,
    questExperimentLocation: c
  } = e, f = (0, l.getQuestsInstructionsToWinReward)({
    quest: a,
    location: c
  });
  return (0, i.jsxs)("div", {
    className: s()(o.wrapper, t),
    style: {
      color: a.config.colors.primary
    },
    children: [(0, i.jsx)(u.default, {
      autoplay: n,
      className: o.rewardTile,
      quest: a,
      questContent: d
    }), (0, i.jsx)(r.Text, {
      className: o.instructions,
      variant: "text-sm/normal",
      color: "text-normal",
      children: f
    })]
  })
}