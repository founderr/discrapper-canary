var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(984370),
  r = n(703656),
  o = n(626135),
  c = n(804739),
  u = n(981631),
  d = n(689938),
  E = n(747207);
let h = (0, c.Q)() || !1;
t.Z = i.memo(function(e) {
  let {
    currentRoute: t,
    renderToolbar: n
  } = e, c = i.useContext(o.AnalyticsContext), _ = h || t === u.Z5c.APPLICATION_LIBRARY_SETTINGS;
  return (0, s.jsxs)(a.Z, {
    className: E.libraryHeader,
    toolbar: null == n ? void 0 : n(),
    children: [(0, s.jsx)(a.Z.Icon, {
      icon: l.InventoryIcon,
      "aria-hidden": !0
    }), (0, s.jsx)(a.Z.Title, {
      children: d.Z.Messages.LIBRARY
    }), (0, s.jsx)(a.Z.Divider, {}), (0, s.jsxs)(l.TabBar, {
      type: "top-pill",
      selectedItem: t,
      onItemSelect: function(e) {
        e !== t && (0, r.uL)(e, {
          state: {
            analyticsSource: {
              ...c.location,
              section: u.jXE.TABS,
              object: u.qAy.NAVIGATION_LINK
            }
          }
        })
      },
      children: [(0, s.jsx)(l.TabBar.Item, {
        id: u.Z5c.APPLICATION_LIBRARY,
        children: d.Z.Messages.APPLICATION_LIBRARY_MY_GAMES
      }), _ ? (0, s.jsx)(l.TabBar.Item, {
        id: u.Z5c.APPLICATION_LIBRARY_SETTINGS,
        children: d.Z.Messages.SETTINGS
      }) : null]
    })]
  })
})