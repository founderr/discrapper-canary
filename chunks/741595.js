"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("481060"),
  o = n("441674"),
  u = n("308083"),
  d = n("418571");
t.default = e => {
  let {
    title: t,
    description: n,
    handleUpdate: l,
    playstyle: c,
    error: f
  } = e, E = (0, r.useToken)(r.tokens.colors.WHITE), h = s.useMemo(() => Object.values((0, u.getPlaystyleOptions)()), []);
  return (0, a.jsxs)("div", {
    className: d.slideContent,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: d.title,
      children: t
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: d.subtitle,
      children: n
    }), null != f && (0, a.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: d.errorText,
      children: f
    }), (0, a.jsx)("div", {
      className: d.playstyleSelect,
      children: h.map(e => (0, a.jsxs)(r.Clickable, {
        className: i()(d.playstyleOption, {
          [d.selectedPlaystyle]: e.type === c
        }),
        onClick: () => l(e.type),
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-xxl/medium",
          children: e.emoji
        }), (0, a.jsx)(r.Heading, {
          variant: "heading-md/medium",
          className: d.playstyleTitle,
          children: e.title
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: e.subtitle
        }), e.type === c && (0, a.jsx)(o.default, {
          backgroundColor: E.hex(),
          className: d.checkmark
        })]
      }, e.type))
    })]
  })
}