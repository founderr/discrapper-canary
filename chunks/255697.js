"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("77078"),
  r = n("227231"),
  o = n("782340"),
  u = n("267678"),
  d = function(e) {
    let {
      className: t,
      quest: n
    } = e;
    return (0, l.jsxs)("div", {
      className: s(u.wrapper, t),
      style: {
        color: n.config.colors.primary
      },
      children: [(0, l.jsx)("img", {
        alt: n.config.messages.rewardName,
        className: u.rewardTile,
        src: (0, r.getRewardAssetUrl)(n.id)
      }), (0, l.jsx)(i.Text, {
        className: u.instructions,
        variant: "text-sm/normal",
        color: "text-normal",
        children: o.default.Messages.QUESTS_ACCEPTED_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: n.config.messages.gameTitle,
          questReward: n.config.messages.rewardNameWithArticle,
          streamingDurationRequirement: n.config.streamDurationRequirementMinutes
        })
      })]
    })
  }