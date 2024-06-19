i.r(a);
var n = i(735250);
i(470079);
var l = i(481060),
  r = i(689938);
a.default = e => {
  let {
    onChangeAvatar: a,
    onChangeAvatarDecoration: i,
    onClose: t,
    className: s
  } = e;
  return (0, n.jsxs)(l.Menu, {
    className: s,
    onClose: t,
    onSelect: void 0,
    navId: "user-settings-change-avatar",
    "aria-label": r.Z.Messages.AVATAR_ACTIONS_MENU_LABEL,
    children: [(0, n.jsx)(l.MenuItem, {
      id: "change-avatar",
      action: a,
      label: r.Z.Messages.USER_SETTINGS_CHANGE_AVATAR
    }), (0, n.jsx)(l.MenuItem, {
      id: "change-avatar-decoration",
      action: i,
      label: r.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
    })]
  })
}