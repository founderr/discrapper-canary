n.d(t, {
  _: function() {
    return E
  }
});
var s = n(735250),
  i = n(120356),
  l = n.n(i),
  r = n(481060),
  a = n(52689),
  o = n(49898),
  c = n(689938),
  u = n(689772);

function d(e) {
  let {
    config: t,
    selected: n,
    handleSelectPage: i
  } = e;
  return (0, s.jsxs)(r.Clickable, {
    onClick: () => i(t.slug),
    className: l()(u.navItem, {
      [u.selectedNavItem]: n
    }),
    children: [(0, s.jsx)("div", {
      className: u.navItemIcon,
      children: function(e) {
        switch (e) {
          case o.S.SERVERS:
            return (0, s.jsx)(r.ServerIcon, {
              color: "currentColor"
            });
          case o.S.APPS:
            return (0, s.jsx)(r.AppsIcon, {
              color: "currentColor"
            });
          case o.S.QUESTS:
            return (0, s.jsx)(r.QuestsIcon, {
              color: "currentColor"
            });
          case o.S.SHOP:
            return (0, s.jsx)(r.ShopSparkleIcon, {
              color: "currentColor"
            });
          default:
            return null
        }
      }(t.slug)
    }), (0, s.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "none",
      children: t.title
    })]
  })
}

function E() {
  let {
    config: e,
    selectedPage: t,
    handleSelectPage: n
  } = (0, a.Z)();
  return (0, s.jsxs)("div", {
    className: u.container,
    children: [(0, s.jsx)("div", {
      className: u.header,
      children: (0, s.jsx)(r.Heading, {
        variant: "text-lg/semibold",
        children: c.Z.Messages.GLOBAL_DISCOVERY_TITLE
      })
    }), (0, s.jsx)("nav", {
      className: u.nav,
      children: e.map(e => (0, s.jsx)(d, {
        config: e,
        selected: t === e.slug,
        handleSelectPage: n
      }, e.slug))
    })]
  })
}