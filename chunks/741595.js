var a = t(735250),
  r = t(470079),
  s = t(120356),
  i = t.n(s),
  l = t(481060),
  o = t(308083),
  c = t(360884);
n.Z = e => {
  let {
    title: n,
    description: t,
    handleUpdate: s,
    playstyle: d,
    error: u
  } = e, m = (0, l.useToken)(l.tokens.colors.WHITE), h = r.useMemo(() => Object.values((0, o.f4)()), []);
  return (0, a.jsxs)("div", {
    className: c.slideContent,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: c.title,
      children: n
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: c.subtitle,
      children: t
    }), null != u && (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: c.errorText,
      children: u
    }), (0, a.jsx)("div", {
      className: c.playstyleSelect,
      children: h.map(e => (0, a.jsxs)(l.Clickable, {
        className: i()(c.playstyleOption, c.selectableOption, {
          [c.selectedOption]: e.type === d
        }),
        onClick: () => s(e.type),
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
        }), e.type === d && (0, a.jsx)(l.CircleCheckIcon, {
          size: "md",
          color: "currentColor",
          secondaryColor: m.hex(),
          className: c.checkmark
        })]
      }, e.type))
    })]
  })
}