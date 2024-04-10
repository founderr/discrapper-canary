"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("481060"),
  o = n("441674"),
  u = n("308083"),
  d = n("689938"),
  c = n("597338");
t.default = e => {
  let {
    handleUpdate: t,
    playstyle: n,
    error: l
  } = e, f = (0, r.useToken)(r.tokens.colors.WHITE), E = s.useMemo(() => Object.values((0, u.getPlaystyleOptions)()), []);
  return (0, a.jsxs)("div", {
    className: c.slideContent,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: c.title,
      children: d.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: c.subtitle,
      children: d.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE
    }), null != l && (0, a.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: c.errorText,
      children: l
    }), (0, a.jsx)("div", {
      className: c.playstyleSelect,
      children: E.map(e => (0, a.jsxs)(r.Clickable, {
        className: i()(c.playstyleOption, {
          [c.selectedPlaystyle]: e.type === n
        }),
        onClick: () => t({
          playstyle: e.type
        }),
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-xxl/medium",
          children: e.emoji
        }), (0, a.jsx)(r.Heading, {
          variant: "heading-md/medium",
          className: c.playstyleTitle,
          children: e.title
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: e.subtitle
        }), e.type === n && (0, a.jsx)(o.default, {
          backgroundColor: f.hex(),
          className: c.checkmark
        })]
      }, e.type))
    })]
  })
}