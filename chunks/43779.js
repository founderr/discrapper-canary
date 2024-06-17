"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("113434"),
  r = n("497505"),
  o = n("918701"),
  u = n("566078"),
  d = n("472144"),
  c = n("644646"),
  f = n("69439"),
  E = n("689938"),
  h = n("641935");

function C(e) {
  let {
    quest: t,
    location: n,
    questContent: C
  } = e, _ = u.SharedQuestFields.build(t.config).defaultReward.messages.name, m = (0, i.useQuestTaskDetails)({
    quest: t,
    location: n
  }), S = m.percentComplete > 0, p = (0, o.getQuestsInstructionsToWinReward)({
    quest: t,
    location: n,
    useV2Variants: !0,
    taskDetails: m
  }), I = !(0, o.isQuestExpired)(t), g = s.useCallback(() => (0, a.jsx)(l.Text, {
    variant: "text-md/semibold",
    color: "text-brand",
    tag: "span",
    className: h.header,
    children: _
  }), [_]);
  return (0, a.jsxs)("div", {
    className: h.container,
    children: [(0, a.jsxs)("div", {
      className: h.rewardDescriptionContainer,
      children: [S ? (0, a.jsx)("div", {
        className: h.progressWrapper,
        children: (0, a.jsx)(d.default, {
          size: 76,
          percentComplete: m.percentComplete,
          children: (0, a.jsx)("div", {
            className: h.circularRewardTileWrapper,
            children: (0, a.jsx)(c.default, {
              quest: t,
              questContent: C,
              className: h.circularQuestRewardTileAsset
            })
          })
        })
      }) : (0, a.jsx)(c.default, {
        quest: t,
        questContent: r.QuestContent.QUEST_HOME_DESKTOP,
        className: h.questRewardTileAsset
      }), (0, a.jsxs)("div", {
        className: h.textContainer,
        children: [(0, a.jsx)("span", {
          className: h.headerSpan,
          children: (0, a.jsx)(l.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            className: h.header,
            children: E.default.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({
              rewardHook: g
            })
          })
        }), null != p ? (0, a.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          className: h.description,
          children: p
        }) : null]
      })]
    }), I ? (0, a.jsx)(f.default, {
      quest: t
    }) : null]
  })
}