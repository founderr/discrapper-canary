"use strict";
a.r(t);
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  s = a.n(i),
  l = a("481060"),
  o = a("441674"),
  d = a("308083"),
  c = a("661926");
t.default = e => {
  let {
    title: t,
    description: a,
    handleUpdate: i,
    playstyle: u,
    error: f
  } = e, m = (0, l.useToken)(l.tokens.colors.WHITE), E = r.useMemo(() => Object.values((0, d.getPlaystyleOptions)()), []);
  return (0, n.jsxs)("div", {
    className: c.slideContent,
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: c.title,
      children: t
    }), (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: c.subtitle,
      children: a
    }), null != f && (0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: c.errorText,
      children: f
    }), (0, n.jsx)("div", {
      className: c.playstyleSelect,
      children: E.map(e => (0, n.jsxs)(l.Clickable, {
        className: s()(c.playstyleOption, c.selectableOption, {
          [c.selectedOption]: e.type === u
        }),
        onClick: () => i(e.type),
        children: [(0, n.jsx)(l.Heading, {
          variant: "heading-xxl/medium",
          children: e.emoji
        }), (0, n.jsx)(l.Heading, {
          variant: "heading-md/medium",
          className: c.playstyleTitle,
          children: e.title
        }), (0, n.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: e.subtitle
        }), e.type === u && (0, n.jsx)(o.default, {
          backgroundColor: m.hex(),
          className: c.checkmark
        })]
      }, e.type))
    })]
  })
}