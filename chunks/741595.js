"use strict";
a.r(t);
var n = a("735250"),
  i = a("470079"),
  r = a("120356"),
  s = a.n(r),
  l = a("481060"),
  o = a("441674"),
  c = a("308083"),
  d = a("418571");
t.default = e => {
  let {
    title: t,
    description: a,
    handleUpdate: r,
    playstyle: u,
    error: f
  } = e, m = (0, l.useToken)(l.tokens.colors.WHITE), h = i.useMemo(() => Object.values((0, c.getPlaystyleOptions)()), []);
  return (0, n.jsxs)("div", {
    className: d.slideContent,
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: d.title,
      children: t
    }), (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: d.subtitle,
      children: a
    }), null != f && (0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: d.errorText,
      children: f
    }), (0, n.jsx)("div", {
      className: d.playstyleSelect,
      children: h.map(e => (0, n.jsxs)(l.Clickable, {
        className: s()(d.playstyleOption, d.selectableOption, {
          [d.selectedOption]: e.type === u
        }),
        onClick: () => r(e.type),
        children: [(0, n.jsx)(l.Heading, {
          variant: "heading-xxl/medium",
          children: e.emoji
        }), (0, n.jsx)(l.Heading, {
          variant: "heading-md/medium",
          className: d.playstyleTitle,
          children: e.title
        }), (0, n.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: e.subtitle
        }), e.type === u && (0, n.jsx)(o.default, {
          backgroundColor: m.hex(),
          className: d.checkmark
        })]
      }, e.type))
    })]
  })
}