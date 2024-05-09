"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  E = s.n(i),
  l = s("481060"),
  _ = s("441674"),
  r = s("308083"),
  u = s("661926");
t.default = e => {
  let {
    title: t,
    description: s,
    handleUpdate: i,
    playstyle: o,
    error: T
  } = e, d = (0, l.useToken)(l.tokens.colors.WHITE), A = n.useMemo(() => Object.values((0, r.getPlaystyleOptions)()), []);
  return (0, a.jsxs)("div", {
    className: u.slideContent,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: u.title,
      children: t
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: u.subtitle,
      children: s
    }), null != T && (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: u.errorText,
      children: T
    }), (0, a.jsx)("div", {
      className: u.playstyleSelect,
      children: A.map(e => (0, a.jsxs)(l.Clickable, {
        className: E()(u.playstyleOption, u.selectableOption, {
          [u.selectedOption]: e.type === o
        }),
        onClick: () => i(e.type),
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-xxl/medium",
          children: e.emoji
        }), (0, a.jsx)(l.Heading, {
          variant: "heading-md/medium",
          className: u.playstyleTitle,
          children: e.title
        }), (0, a.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: e.subtitle
        }), e.type === o && (0, a.jsx)(_.default, {
          backgroundColor: d.hex(),
          className: u.checkmark
        })]
      }, e.type))
    })]
  })
}