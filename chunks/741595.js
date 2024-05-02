"use strict";
n.r(t);
var a = n("735250"),
  i = n("470079"),
  r = n("120356"),
  s = n.n(r),
  l = n("481060"),
  o = n("441674"),
  d = n("308083"),
  c = n("418571");
t.default = e => {
  let {
    title: t,
    description: n,
    handleUpdate: r,
    playstyle: u,
    error: f
  } = e, m = (0, l.useToken)(l.tokens.colors.WHITE), h = i.useMemo(() => Object.values((0, d.getPlaystyleOptions)()), []);
  return (0, a.jsxs)("div", {
    className: c.slideContent,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: c.title,
      children: t
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: c.subtitle,
      children: n
    }), null != f && (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: c.errorText,
      children: f
    }), (0, a.jsx)("div", {
      className: c.playstyleSelect,
      children: h.map(e => (0, a.jsxs)(l.Clickable, {
        className: s()(c.playstyleOption, {
          [c.selectedPlaystyle]: e.type === u
        }),
        onClick: () => r(e.type),
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-xxl/medium",
          children: e.emoji
        }), (0, a.jsx)(l.Heading, {
          variant: "heading-md/medium",
          className: c.playstyleTitle,
          children: e.title
        }), (0, a.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: e.subtitle
        }), e.type === u && (0, a.jsx)(o.default, {
          backgroundColor: m.hex(),
          className: c.checkmark
        })]
      }, e.type))
    })]
  })
}