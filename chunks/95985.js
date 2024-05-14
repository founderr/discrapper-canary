"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("497505"),
  r = n("918701"),
  o = n("644646"),
  u = n("472144"),
  d = n("569379"),
  c = n("743294"),
  f = n("481900");
t.default = e => {
  let {
    quest: t,
    isExpanded: n
  } = e, E = s.useMemo(() => (0, r.calculatePercentComplete)(t), [t]), h = E > 0 ? c.HAS_PROGRESS_COLORS : c.NO_PROGRESS_COLORS, _ = (0, d.useQuestBarTitle)(t), C = (0, d.useQuestBarSubtitle)(t, n);
  return (0, a.jsxs)("div", {
    className: f.questProgressWrapper,
    children: [(0, a.jsx)(u.default, {
      percentComplete: E,
      size: 42,
      strokeWidth: 3,
      progressBarBackgroundTop: h.backgroundTop,
      progressBarBackgroundBottom: h.backgroundBottom,
      progressBarForeground: h.foreground,
      glowColor: h.glow,
      children: (0, a.jsx)(o.default, {
        className: f.questProgressRewardTile,
        quest: t,
        questContent: i.QuestContent.QUEST_BAR,
        autoplay: !1
      })
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(l.Text, {
        className: f.questProgressHint,
        color: "header-primary",
        variant: "text-sm/semibold",
        children: _
      }), (0, a.jsx)(l.Text, {
        className: f.questProgressHint,
        color: "text-muted",
        variant: "text-xs/normal",
        children: C
      })]
    })]
  })
}