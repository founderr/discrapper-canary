"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
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
  c = n("69439"),
  f = n("46140"),
  E = n("689938"),
  h = n("641935");

function _(e) {
  let {
    quest: t
  } = e, n = (0, o.getRewardAsset)(t), l = u.SharedQuestFields.build(t.config).defaultReward.messages.name, _ = (0, o.getQuestsInstructionsToWinReward)({
    quest: t,
    location: f.QuestsExperimentLocations.QUEST_HOME_DESKTOP,
    useV2Variants: !0
  }), C = !(0, o.isQuestExpired)(t), m = s.useCallback(() => (0, a.jsx)(r.Text, {
    variant: "text-md/semibold",
    color: "text-brand",
    tag: "span",
    className: h.header,
    children: l
  }), [l]);
  return (0, a.jsxs)("div", {
    className: h.container,
    children: [(0, a.jsxs)("div", {
      className: h.rewardDescriptionContainer,
      children: [(0, a.jsx)(d.QuestsAsset, {
        id: "QuestRewardTile_rewardTileStatic",
        children: e => (0, a.jsx)("img", {
          ref: e,
          alt: l,
          className: i()(h.questRewardTileAsset),
          src: n.url
        })
      }), (0, a.jsxs)("div", {
        className: h.textContainer,
        children: [(0, a.jsx)("span", {
          className: h.headerSpan,
          children: (0, a.jsx)(r.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            className: h.header,
            children: E.default.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({
              rewardHook: m
            })
          })
        }), null != _ ? (0, a.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          className: h.description,
          children: _
        }) : null]
      })]
    }), C ? (0, a.jsx)(c.default, {
      quest: t
    }) : null]
  })
}