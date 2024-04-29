"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("924826"),
  l = a("442837"),
  i = a("215569"),
  r = a("481060"),
  o = a("607070"),
  u = a("981631"),
  d = a("739426");
t.default = function(e) {
  let {
    statusSections: t,
    renderRow: a,
    searchQuery: c,
    sectionFilter: f,
    useReducedMotion: E
  } = e, h = (0, l.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled), _ = (0, s.default)({
    id: "people",
    isEnabled: h,
    async scrollToStart() {},
    async scrollToEnd() {}
  }), C = f !== u.FriendsSections.ONLINE && f !== u.FriendsSections.ALL, m = E || "" !== c || C, S = t.map((e, t) => m ? (0, n.jsx)("div", {
    children: e.map(a)
  }, t) : (0, n.jsx)(i.TransitionGroup, {
    transitionAppear: !1,
    component: "div",
    children: e.map(a)
  }, t));
  return (0, n.jsx)(s.ListNavigatorProvider, {
    navigator: _,
    children: (0, n.jsx)(s.ListNavigatorContainer, {
      children: e => {
        let {
          ref: t,
          ...a
        } = e;
        return (0, n.jsx)(r.ScrollerAuto, {
          ref: t,
          className: d.peopleList,
          ...a,
          children: S
        })
      }
    })
  })
}