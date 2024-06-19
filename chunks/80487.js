var n = a(735250);
a(470079);
var t = a(481060),
  l = a(984370),
  r = a(669405),
  i = a(246364),
  o = a(689938),
  c = a(352113);
s.Z = function(e) {
  let {
    pendingGuildJoinRequestsTotal: s,
    currentTab: a,
    onTabItemSelect: I,
    showSetupTab: d
  } = e;
  return (0, n.jsxs)(l.Z, {
    className: c.__invalid_container,
    hideSearch: !0,
    toolbar: (0, n.jsx)("div", {}),
    children: [(0, n.jsx)(l.Z.Icon, {
      icon: (0, t.makeIconCompat)(r.Z),
      disabled: !0,
      "aria-label": o.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS
    }), (0, n.jsx)(l.Z.Title, {
      className: c.title,
      children: o.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS
    }), (0, n.jsx)(l.Z.Divider, {
      className: c.divider
    }), (0, n.jsxs)(t.TabBar, {
      "aria-label": o.Z.Messages.FRIENDS,
      selectedItem: a,
      type: "top-pill",
      onItemSelect: I,
      className: c.__invalid_tabBar,
      children: [d ? (0, n.jsx)(t.TabBar.Item, {
        id: "REVIEW_APPLICATION",
        children: o.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REVIEW_APPLICATION_TITLE
      }) : null, (0, n.jsx)(t.TabBar.Item, {
        id: i.wB.SUBMITTED,
        children: 0 === s ? o.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING : o.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT.format({
          count: s
        })
      }), (0, n.jsx)(t.TabBar.Item, {
        id: i.wB.APPROVED,
        children: o.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED
      }), (0, n.jsx)(t.TabBar.Item, {
        id: i.wB.REJECTED,
        children: o.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED
      })]
    })]
  })
}