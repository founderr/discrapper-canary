"use strict";
n.r(t);
var a = n("735250"),
  r = n("470079"),
  i = n("120356"),
  s = n.n(i),
  l = n("481060"),
  o = n("441674"),
  c = n("308083"),
  d = n("418571");
t.default = e => {
  let {
    title: t,
    description: n,
    handleUpdate: i,
    playstyle: u,
    error: f
  } = e, m = (0, l.useToken)(l.tokens.colors.WHITE), h = r.useMemo(() => Object.values((0, c.getPlaystyleOptions)()), []);
  return (0, a.jsxs)("div", {
    className: d.slideContent,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: d.title,
      children: t
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: d.subtitle,
      children: n
    }), null != f && (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: d.errorText,
      children: f
    }), (0, a.jsx)("div", {
      className: d.playstyleSelect,
      children: h.map(e => (0, a.jsxs)(l.Clickable, {
        className: s()(d.playstyleOption, {
          [d.selectedPlaystyle]: e.type === u
        }),
        onClick: () => i(e.type),
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-xxl/medium",
          children: e.emoji
        }), (0, a.jsx)(l.Heading, {
          variant: "heading-md/medium",
          className: d.playstyleTitle,
          children: e.title
        }), (0, a.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: e.subtitle
        }), e.type === u && (0, a.jsx)(o.default, {
          backgroundColor: m.hex(),
          className: d.checkmark
        })]
      }, e.type))
    })]
  })
}