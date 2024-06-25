var l = s(735250);
s(470079);
var t = s(481060),
  i = s(689938);
n.Z = e => {
  let {
    onChangeAvatar: n,
    onChangeAvatarDecoration: s,
    onClose: r,
    className: a
  } = e;
  return (0, l.jsxs)(t.Menu, {
    className: a,
    onClose: r,
    onSelect: void 0,
    navId: "user-settings-change-avatar",
    "aria-label": i.Z.Messages.AVATAR_ACTIONS_MENU_LABEL,
    children: [(0, l.jsx)(t.MenuItem, {
      id: "change-avatar",
      action: n,
      label: i.Z.Messages.USER_SETTINGS_CHANGE_AVATAR
    }), (0, l.jsx)(t.MenuItem, {
      id: "change-avatar-decoration",
      action: s,
      label: i.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
    })]
  })
}