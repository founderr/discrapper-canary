var o = n(735250);
n(470079);
var s = n(481060),
  r = n(113434),
  a = n(497505),
  i = n(644646),
  l = n(613087),
  c = n(472144),
  d = n(569379),
  u = n(46140),
  p = n(232604);
t.Z = e => {
  let {
    quest: t,
    progressBarRef: n,
    isExpanded: m
  } = e, {
    percentComplete: x
  } = (0, r.Rf)({
    quest: t,
    location: u.dr.QUESTS_BAR
  }), g = (0, d.eQ)(t), C = (0, d.vf)(t, m), f = m ? "expanded" : "collapsed";
  return (0, o.jsxs)("div", {
    className: p.questProgressWrapper,
    children: [(0, o.jsx)(l.l7, {
      inState: f,
      id: "progress-bar",
      ref: n,
      children: e => (0, o.jsx)(c.Z, {
        ref: e,
        quest: t,
        percentComplete: x,
        size: 42,
        strokeWidth: 3,
        children: (0, o.jsx)(i.Z, {
          className: p.questProgressRewardTile,
          quest: t,
          questContent: a.jn.QUEST_BAR_V2,
          autoplay: !1
        })
      })
    }), (0, o.jsxs)("div", {
      children: [(0, o.jsx)(l.l7, {
        inState: f,
        id: "progress-title",
        children: e => (0, o.jsx)(s.Text, {
          ref: e,
          className: p.questProgressHint,
          color: "header-primary",
          variant: "text-sm/semibold",
          children: g
        })
      }), (0, o.jsx)(l.l7, {
        inState: f,
        id: "progress-subtitle",
        isTextTransition: !0,
        children: e => (0, o.jsx)(s.Text, {
          ref: e,
          className: p.questProgressHint,
          color: "text-muted",
          variant: "text-xs/normal",
          children: C
        })
      })]
    })]
  })
}