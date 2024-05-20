"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("481060"),
  r = n("918701"),
  o = n("78826"),
  u = n("46140"),
  d = n("689938"),
  c = n("641935");

function f(e) {
  let {
    quest: t
  } = e, n = (0, r.getRewardAssetUrl)(t), s = (0, r.getQuestsInstructionsToWinReward)({
    quest: t,
    location: u.QuestsExperimentLocations.QUEST_HOME_DESKTOP,
    useV2Variants: !0
  });
  return (0, a.jsxs)("div", {
    className: c.container,
    children: [(0, a.jsx)(o.QuestsAsset, {
      id: "QuestRewardTile_rewardTileStatic",
      children: e => (0, a.jsx)("img", {
        ref: e,
        alt: t.config.messages.rewardName,
        className: l()(c.questRewardTileAsset),
        src: n
      })
    }), (0, a.jsxs)("div", {
      className: c.textContainer,
      children: [(0, a.jsx)("span", {
        className: c.headerSpan,
        children: (0, a.jsx)(i.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: c.header,
          children: d.default.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({
            rewardHook: () => (0, a.jsx)(i.Text, {
              variant: "text-md/semibold",
              color: "text-brand",
              className: c.header,
              children: t.config.messages.rewardName
            })
          })
        })
      }), null != s ? (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: c.description,
        children: s
      }) : null]
    })]
  })
}