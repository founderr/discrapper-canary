"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("481060"),
  r = n("689938"),
  o = n("432406");

function u(e) {
  let {
    children: t
  } = e;
  return (0, a.jsxs)("div", {
    className: o.container,
    children: [(0, a.jsx)("div", {
      className: l()(o.image)
    }), (0, a.jsx)("div", {
      className: l()(o.gradient)
    }), (0, a.jsx)("div", {
      className: o.contents,
      children: (0, a.jsxs)("div", {
        className: o.textContainer,
        children: [(0, a.jsx)(i.Text, {
          variant: "eyebrow",
          color: "text-brand",
          className: o.eyebrow,
          children: r.default.Messages.QUESTS_HOME_HERO_EYEBROW
        }), (0, a.jsx)(i.Heading, {
          variant: "display-md",
          color: "always-white",
          className: o.header,
          children: r.default.Messages.QUESTS_HOME_HERO_TITLE
        }), (0, a.jsx)(i.Text, {
          variant: "text-md/medium",
          color: "text-muted",
          children: r.default.Messages.QUESTS_HOME_HERO_DESCRIPTION
        }), (0, a.jsx)(i.Button, {
          size: "medium",
          className: o.button,
          onClick: () => {},
          children: r.default.Messages.LEARN_MORE
        })]
      })
    }), t]
  })
}