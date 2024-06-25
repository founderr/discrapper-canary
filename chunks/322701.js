var s = n(735250);
n(470079);
var i = n(924826),
  l = n(91192),
  a = n(442837),
  r = n(215569),
  o = n(481060),
  c = n(607070),
  u = n(981631),
  d = n(28813);
t.Z = function(e) {
  let {
    statusSections: t,
    renderRow: n,
    searchQuery: E,
    sectionFilter: h,
    useReducedMotion: _
  } = e, I = (0, a.e7)([c.Z], () => c.Z.keyboardModeEnabled), m = (0, i.ZP)({
    id: "people",
    isEnabled: I,
    async scrollToStart() {},
    async scrollToEnd() {}
  }), T = h !== u.pJs.ONLINE && h !== u.pJs.ALL, g = _ || "" !== E || T, p = t.map((e, t) => g ? (0, s.jsx)("div", {
    children: e.map(n)
  }, t) : (0, s.jsx)(r.W, {
    transitionAppear: !1,
    component: "div",
    children: e.map(n)
  }, t));
  return (0, s.jsx)(l.bG, {
    navigator: m,
    children: (0, s.jsx)(l.SJ, {
      children: e => {
        let {
          ref: t,
          ...n
        } = e;
        return (0, s.jsx)(o.ScrollerAuto, {
          ref: t,
          className: d.peopleList,
          ...n,
          children: p
        })
      }
    })
  })
}