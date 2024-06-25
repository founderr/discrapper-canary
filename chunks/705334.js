n.d(t, {
  _: function() {
    return d
  }
});
var s = n(735250),
  i = n(120356),
  l = n.n(i),
  a = n(481060),
  r = n(52689),
  o = n(689938),
  c = n(689772);

function u(e) {
  let {
    config: t,
    selected: n,
    handleSelectPage: i
  } = e;
  return (0, s.jsxs)(a.Clickable, {
    onClick: () => i(t.slug),
    className: l()(c.navItem, {
      [c.selectedNavItem]: n
    }),
    children: [(0, s.jsx)("div", {
      className: c.navItemIcon,
      children: t.icon
    }), (0, s.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "none",
      children: t.title
    })]
  })
}

function d() {
  let {
    config: e,
    selectedPage: t,
    handleSelectPage: n
  } = (0, r.Z)();
  return (0, s.jsxs)("div", {
    className: c.container,
    children: [(0, s.jsx)("div", {
      className: c.header,
      children: (0, s.jsx)(a.Heading, {
        variant: "text-lg/semibold",
        children: o.Z.Messages.GLOBAL_DISCOVERY_TITLE
      })
    }), (0, s.jsx)("nav", {
      className: c.nav,
      children: e.map(e => (0, s.jsx)(u, {
        config: e,
        selected: t === e.slug,
        handleSelectPage: n
      }, e.slug))
    })]
  })
}