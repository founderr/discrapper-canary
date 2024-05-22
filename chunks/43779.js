"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("481060"),
  o = n("918701"),
  u = n("566078"),
  d = n("78826"),
  c = n("46140"),
  f = n("689938"),
  E = n("641935");

function h(e) {
  let {
    quest: t
  } = e, n = (0, o.getRewardAsset)(t), l = u.SharedQuestFields.build(t.config).defaultReward.messages.name, h = (0, o.getQuestsInstructionsToWinReward)({
    quest: t,
    location: c.QuestsExperimentLocations.QUEST_HOME_DESKTOP,
    useV2Variants: !0
  }), _ = s.useCallback(() => (0, a.jsx)(r.Text, {
    variant: "text-md/semibold",
    color: "text-brand",
    tag: "span",
    className: E.header,
    children: l
  }), [l]);
  return (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsx)(d.QuestsAsset, {
      id: "QuestRewardTile_rewardTileStatic",
      children: e => (0, a.jsx)("img", {
        ref: e,
        alt: l,
        className: i()(E.questRewardTileAsset),
        src: n.url
      })
    }), (0, a.jsxs)("div", {
      className: E.textContainer,
      children: [(0, a.jsx)("span", {
        className: E.headerSpan,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          tag: "span",
          className: E.header,
          children: f.default.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({
            rewardHook: _
          })
        })
      }), null != h ? (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: E.description,
        children: h
      }) : null]
    })]
  })
}