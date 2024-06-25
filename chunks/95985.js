var s = n(735250);
n(470079);
var o = n(481060),
  r = n(113434),
  a = n(497505),
  l = n(644646),
  i = n(613087),
  c = n(472144),
  u = n(569379),
  d = n(46140),
  p = n(232604);
t.Z = e => {
  let {
    quest: t,
    progressBarRef: n,
    isExpanded: x
  } = e, {
    percentComplete: m
  } = (0, r.Rf)({
    quest: t,
    location: d.dr.QUESTS_BAR
  }), g = (0, u.eQ)(t), h = (0, u.vf)(t, x), C = x ? "expanded" : "collapsed";
  return (0, s.jsxs)("div", {
    className: p.questProgressWrapper,
    children: [(0, s.jsx)(i.l7, {
      inState: C,
      id: "progress-bar",
      ref: n,
      children: e => (0, s.jsx)(c.Z, {
        ref: e,
        percentComplete: m,
        size: 42,
        strokeWidth: 3,
        children: (0, s.jsx)(l.Z, {
          className: p.questProgressRewardTile,
          quest: t,
          questContent: a.jn.QUEST_BAR_V2,
          autoplay: !1
        })
      })
    }), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(i.l7, {
        inState: C,
        id: "progress-title",
        children: e => (0, s.jsx)(o.Text, {
          ref: e,
          className: p.questProgressHint,
          color: "header-primary",
          variant: "text-sm/semibold",
          children: g
        })
      }), (0, s.jsx)(i.l7, {
        inState: C,
        id: "progress-subtitle",
        isTextTransition: !0,
        children: e => (0, s.jsx)(o.Text, {
          ref: e,
          className: p.questProgressHint,
          color: "text-muted",
          variant: "text-xs/normal",
          children: h
        })
      })]
    })]
  })
}