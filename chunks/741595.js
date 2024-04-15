"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("481060"),
  o = a("441674"),
  u = a("308083"),
  d = a("689938"),
  c = a("597338");
t.default = e => {
  let {
    handleUpdate: t,
    playstyle: a,
    error: l
  } = e, f = (0, r.useToken)(r.tokens.colors.WHITE), E = s.useMemo(() => Object.values((0, u.getPlaystyleOptions)()), []);
  return (0, n.jsxs)("div", {
    className: c.slideContent,
    children: [(0, n.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: c.title,
      children: d.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE
    }), (0, n.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: c.subtitle,
      children: d.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE
    }), null != l && (0, n.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: c.errorText,
      children: l
    }), (0, n.jsx)("div", {
      className: c.playstyleSelect,
      children: E.map(e => (0, n.jsxs)(r.Clickable, {
        className: i()(c.playstyleOption, {
          [c.selectedPlaystyle]: e.type === a
        }),
        onClick: () => t({
          playstyle: e.type
        }),
        children: [(0, n.jsx)(r.Heading, {
          variant: "heading-xxl/medium",
          children: e.emoji
        }), (0, n.jsx)(r.Heading, {
          variant: "heading-md/medium",
          className: c.playstyleTitle,
          children: e.title
        }), (0, n.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: e.subtitle
        }), e.type === a && (0, n.jsx)(o.default, {
          backgroundColor: f.hex(),
          className: c.checkmark
        })]
      }, e.type))
    })]
  })
}