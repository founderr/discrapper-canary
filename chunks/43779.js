"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("481060"),
  r = n("918701"),
  o = n("566078"),
  u = n("78826"),
  d = n("46140"),
  c = n("689938"),
  f = n("641935");

function E(e) {
  let {
    quest: t
  } = e, n = (0, r.getRewardAsset)(t), s = o.SharedQuestFields.build(t.config).defaultReward.messages.name, E = (0, r.getQuestsInstructionsToWinReward)({
    quest: t,
    location: d.QuestsExperimentLocations.QUEST_HOME_DESKTOP,
    useV2Variants: !0
  });
  return (0, a.jsxs)("div", {
    className: f.container,
    children: [(0, a.jsx)(u.QuestsAsset, {
      id: "QuestRewardTile_rewardTileStatic",
      children: e => (0, a.jsx)("img", {
        ref: e,
        alt: s,
        className: l()(f.questRewardTileAsset),
        src: n.url
      })
    }), (0, a.jsxs)("div", {
      className: f.textContainer,
      children: [(0, a.jsx)("span", {
        className: f.headerSpan,
        children: (0, a.jsx)(i.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: f.header,
          children: c.default.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({
            rewardHook: () => (0, a.jsx)(i.Text, {
              variant: "text-md/semibold",
              color: "text-brand",
              className: f.header,
              children: s
            })
          })
        })
      }), null != E ? (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: f.description,
        children: E
      }) : null]
    })]
  })
}