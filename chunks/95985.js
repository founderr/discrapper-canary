var s = n(735250);
n(470079);
var a = n(481060),
  i = n(113434),
  l = n(497505),
  r = n(644646),
  o = n(613087),
  c = n(472144),
  d = n(569379),
  u = n(46140),
  E = n(232604);
t.Z = e => {
  let {
    quest: t,
    progressBarRef: n,
    isExpanded: _
  } = e, {
    percentComplete: h
  } = (0, i.Rf)({
    quest: t,
    location: u.dr.QUESTS_BAR
  }), m = (0, d.eQ)(t), T = (0, d.vf)(t, _), C = _ ? "expanded" : "collapsed";
  return (0, s.jsxs)("div", {
    className: E.questProgressWrapper,
    children: [(0, s.jsx)(o.l7, {
      inState: C,
      id: "progress-bar",
      ref: n,
      children: e => (0, s.jsx)(c.Z, {
        ref: e,
        percentComplete: h,
        size: 42,
        strokeWidth: 3,
        children: (0, s.jsx)(r.Z, {
          className: E.questProgressRewardTile,
          quest: t,
          questContent: l.jn.QUEST_BAR,
          autoplay: !1
        })
      })
    }), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(o.l7, {
        inState: C,
        id: "progress-title",
        children: e => (0, s.jsx)(a.Text, {
          ref: e,
          className: E.questProgressHint,
          color: "header-primary",
          variant: "text-sm/semibold",
          children: m
        })
      }), (0, s.jsx)(o.l7, {
        inState: C,
        id: "progress-subtitle",
        isTextTransition: !0,
        children: e => (0, s.jsx)(a.Text, {
          ref: e,
          className: E.questProgressHint,
          color: "text-muted",
          variant: "text-xs/normal",
          children: T
        })
      })]
    })]
  })
}