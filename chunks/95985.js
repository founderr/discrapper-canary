"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("481060"),
  i = s("497505"),
  r = s("918701"),
  u = s("644646"),
  o = s("472144"),
  d = s("569379"),
  c = s("743294"),
  E = s("481900");
t.default = e => {
  let {
    quest: t,
    progressBarRef: s,
    isExpanded: _
  } = e, f = n.useMemo(() => (0, r.calculatePercentComplete)(t), [t]), h = f > 0 ? c.HAS_PROGRESS_COLORS : c.NO_PROGRESS_COLORS, m = (0, d.useQuestBarTitle)(t), T = (0, d.useQuestBarSubtitle)(t, _);
  return (0, a.jsxs)("div", {
    className: E.questProgressWrapper,
    children: [(0, a.jsx)(o.default, {
      percentComplete: f,
      size: 42,
      strokeWidth: 3,
      progressBarBackgroundTop: h.backgroundTop,
      progressBarBackgroundBottom: h.backgroundBottom,
      progressBarForeground: h.foreground,
      glowColor: h.glow,
      progressBarRef: s,
      children: (0, a.jsx)(u.default, {
        className: E.questProgressRewardTile,
        quest: t,
        questContent: i.QuestContent.QUEST_BAR,
        autoplay: !1
      })
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(l.Text, {
        className: E.questProgressHint,
        color: "header-primary",
        variant: "text-sm/semibold",
        children: m
      }), (0, a.jsx)(l.Text, {
        className: E.questProgressHint,
        color: "text-muted",
        variant: "text-xs/normal",
        children: T
      })]
    })]
  })
}