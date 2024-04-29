"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("481060"),
  o = a("441674"),
  u = a("308083"),
  d = a("661926");
t.default = e => {
  let {
    title: t,
    description: a,
    handleUpdate: l,
    playstyle: c,
    error: f
  } = e, E = (0, r.useToken)(r.tokens.colors.WHITE), h = s.useMemo(() => Object.values((0, u.getPlaystyleOptions)()), []);
  return (0, n.jsxs)("div", {
    className: d.slideContent,
    children: [(0, n.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: d.title,
      children: t
    }), (0, n.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: d.subtitle,
      children: a
    }), null != f && (0, n.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: d.errorText,
      children: f
    }), (0, n.jsx)("div", {
      className: d.playstyleSelect,
      children: h.map(e => (0, n.jsxs)(r.Clickable, {
        className: i()(d.playstyleOption, {
          [d.selectedPlaystyle]: e.type === c
        }),
        onClick: () => l(e.type),
        children: [(0, n.jsx)(r.Heading, {
          variant: "heading-xxl/medium",
          children: e.emoji
        }), (0, n.jsx)(r.Heading, {
          variant: "heading-md/medium",
          className: d.playstyleTitle,
          children: e.title
        }), (0, n.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: e.subtitle
        }), e.type === c && (0, n.jsx)(o.default, {
          backgroundColor: E.hex(),
          className: d.checkmark
        })]
      }, e.type))
    })]
  })
}