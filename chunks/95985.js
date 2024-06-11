"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("113434"),
  i = s("497505"),
  r = s("644646"),
  o = s("472144"),
  u = s("569379"),
  d = s("46140"),
  c = s("481900");
t.default = e => {
  let {
    quest: t,
    progressBarRef: s,
    isExpanded: E
  } = e, {
    percentComplete: _
  } = (0, l.useQuestTaskDetails)({
    quest: t,
    location: d.QuestsExperimentLocations.QUESTS_BAR
  }), f = (0, u.useQuestBarTitle)(t), h = (0, u.useQuestBarSubtitle)(t, E);
  return (0, a.jsxs)("div", {
    className: c.questProgressWrapper,
    children: [(0, a.jsx)(o.default, {
      percentComplete: _,
      size: 42,
      strokeWidth: 3,
      progressBarRef: s,
      children: (0, a.jsx)(r.default, {
        className: c.questProgressRewardTile,
        quest: t,
        questContent: i.QuestContent.QUEST_BAR,
        autoplay: !1
      })
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(n.Text, {
        className: c.questProgressHint,
        color: "header-primary",
        variant: "text-sm/semibold",
        children: f
      }), (0, a.jsx)(n.Text, {
        className: c.questProgressHint,
        color: "text-muted",
        variant: "text-xs/normal",
        children: h
      })]
    })]
  })
}