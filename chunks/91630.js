n.d(t, {
  U: function() {
    return h
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(657707),
  r = n(823379),
  l = n(51448),
  o = n(164427),
  c = n(742916),
  d = n(982345),
  u = n(49898),
  _ = n(689938),
  E = n(432403);

function h() {
  let [e, t] = s.useState(""), {
    tabs: n,
    selectedTab: h,
    onSelectTab: I
  } = (0, d.Y)(), m = s.useRef(new c.m), p = s.useCallback(e => {
    switch (e) {
      case u.v.GUILDS:
        return (0, i.jsx)("div", {
          children: "TODO: Guilds"
        });
      case u.v.GAMING:
        return (0, i.jsx)("div", {
          children: "TODO: Gaming"
        });
      case u.v.MUSIC:
        return (0, i.jsx)("div", {
          children: "TODO: Music"
        });
      case u.v.ENTERTAINMENT:
        return (0, i.jsx)("div", {
          children: "TODO: Entertainment"
        });
      case u.v.TECH:
        return (0, i.jsx)("div", {
          children: "TODO: Tech"
        });
      case u.v.EDUCATION:
        return (0, i.jsx)("div", {
          children: "TODO: Education"
        });
      case u.v.HUBS:
        return (0, i.jsx)("div", {
          children: "TODO: Hubs"
        });
      default:
        (0, r.vE)(e)
    }
  }, []);
  return (0, i.jsxs)("div", {
    className: E.container,
    children: [(0, i.jsx)(l.f, {
      icon: (0, i.jsx)(a.QTo, {}),
      title: _.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE,
      tabs: n,
      selectedTab: h,
      onTabSelect: I,
      searchQuery: e,
      onSearch: t,
      onSearchClear: () => t(""),
      scrollManager: m
    }), (0, i.jsx)(o.J, {
      scrollManager: m,
      children: p(h.id)
    })]
  })
}