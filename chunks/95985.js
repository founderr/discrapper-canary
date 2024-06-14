"use strict";
s.r(t);
var n = s("735250");
s("470079");
var a = s("481060"),
  l = s("113434"),
  i = s("497505"),
  r = s("644646"),
  o = s("613087"),
  u = s("472144"),
  d = s("569379"),
  c = s("46140"),
  E = s("481900");
t.default = e => {
  let {
    quest: t,
    progressBarRef: s,
    isExpanded: _
  } = e, {
    percentComplete: f
  } = (0, l.useQuestTaskDetails)({
    quest: t,
    location: c.QuestsExperimentLocations.QUESTS_BAR
  }), h = (0, d.useQuestBarTitle)(t), C = (0, d.useQuestBarSubtitle)(t, _), m = _ ? "expanded" : "collapsed";
  return (0, n.jsxs)("div", {
    className: E.questProgressWrapper,
    children: [(0, n.jsx)(o.QuestBarV2AnimationComponent, {
      inState: m,
      id: "progress-bar",
      children: e => (0, n.jsx)(u.default, {
        ref: e,
        percentComplete: f,
        size: 42,
        strokeWidth: 3,
        progressBarRef: s,
        children: (0, n.jsx)(r.default, {
          className: E.questProgressRewardTile,
          quest: t,
          questContent: i.QuestContent.QUEST_BAR,
          autoplay: !1
        })
      })
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(o.QuestBarV2AnimationComponent, {
        inState: m,
        id: "progress-title",
        children: e => (0, n.jsx)(a.Text, {
          ref: e,
          className: E.questProgressHint,
          color: "header-primary",
          variant: "text-sm/semibold",
          children: h
        })
      }), (0, n.jsx)(o.QuestBarV2AnimationComponent, {
        inState: m,
        id: "progress-subtitle",
        isTextTransition: !0,
        children: e => (0, n.jsx)(a.Text, {
          ref: e,
          className: E.questProgressHint,
          color: "text-muted",
          variant: "text-xs/normal",
          children: C
        })
      })]
    })]
  })
}