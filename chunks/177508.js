"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("390547"), s("47120");
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("481060"),
  r = s("359420");
let o = Object.keys(i.Button.Colors).filter(e => "CUSTOM" !== e),
  d = Object.keys(i.Button.Looks).filter(e => "BLANK" !== e);

function u() {
  let e = o.flatMap(e => [...d.map(t => (0, a.jsxs)(i.Button, {
    color: i.Button.Colors[e],
    look: i.Button.Looks[t],
    children: [e, " - ", t]
  }, e + t)), (0, a.jsx)("hr", {
    className: r.sectionDivider
  }, e + "divider")]);
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-xl/semibold",
      children: "Buttons"
    }), (0, a.jsxs)("div", {
      className: r.buttons,
      children: [(0, a.jsx)("div", {
        className: l()("theme-dark", r.section),
        children: e
      }), (0, a.jsx)("div", {
        className: l()("theme-light", r.section),
        children: e
      })]
    })]
  })
}