"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("497505"),
  r = n("918701"),
  o = n("566078"),
  u = n("472144"),
  d = n("644646"),
  c = n("69439"),
  f = n("689938"),
  E = n("641935");

function h(e) {
  let {
    quest: t,
    location: n,
    questContent: h
  } = e, _ = o.SharedQuestFields.build(t.config).defaultReward.messages.name, C = (0, r.getQuestsInstructionsToWinReward)({
    quest: t,
    location: n,
    useV2Variants: !0
  }), m = s.useRef(null), S = s.useMemo(() => (0, r.calculatePercentComplete)(t), [t]), p = S > 0, I = !(0, r.isQuestExpired)(t), g = s.useCallback(() => (0, a.jsx)(l.Text, {
    variant: "text-md/semibold",
    color: "text-brand",
    tag: "span",
    className: E.header,
    children: _
  }), [_]);
  return (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsxs)("div", {
      className: E.rewardDescriptionContainer,
      children: [p ? (0, a.jsx)("div", {
        className: E.progressWrapper,
        children: (0, a.jsx)(u.default, {
          size: 76,
          percentComplete: S,
          progressBarRef: m,
          children: (0, a.jsx)("div", {
            className: E.circularRewardTileWrapper,
            children: (0, a.jsx)(d.default, {
              quest: t,
              questContent: h,
              className: E.circularQuestRewardTileAsset
            })
          })
        })
      }) : (0, a.jsx)(d.default, {
        quest: t,
        questContent: i.QuestContent.QUEST_HOME_DESKTOP,
        className: E.questRewardTileAsset
      }), (0, a.jsxs)("div", {
        className: E.textContainer,
        children: [(0, a.jsx)("span", {
          className: E.headerSpan,
          children: (0, a.jsx)(l.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            className: E.header,
            children: f.default.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({
              rewardHook: g
            })
          })
        }), null != C ? (0, a.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          className: E.description,
          children: C
        }) : null]
      })]
    }), I ? (0, a.jsx)(c.default, {
      quest: t
    }) : null]
  })
}