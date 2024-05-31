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
  c = n("481900");
t.default = e => {
  let {
    quest: t,
    progressBarRef: n,
    isExpanded: f
  } = e, E = s.useMemo(() => (0, r.calculatePercentComplete)(t), [t]), h = (0, d.useQuestBarTitle)(t), _ = (0, d.useQuestBarSubtitle)(t, f);
  return (0, a.jsxs)("div", {
    className: c.questProgressWrapper,
    children: [(0, a.jsx)(u.default, {
      percentComplete: E,
      size: 42,
      strokeWidth: 3,
      progressBarRef: n,
      children: (0, a.jsx)(o.default, {
        className: c.questProgressRewardTile,
        quest: t,
        questContent: i.QuestContent.QUEST_BAR,
        autoplay: !1
      })
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(l.Text, {
        className: c.questProgressHint,
        color: "header-primary",
        variant: "text-sm/semibold",
        children: h
      }), (0, a.jsx)(l.Text, {
        className: c.questProgressHint,
        color: "text-muted",
        variant: "text-xs/normal",
        children: _
      })]
    })]
  })
}