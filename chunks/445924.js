"use strict";
t.r(a);
var l = t("735250");
t("470079");
var i = t("481060"),
  r = t("689938");
a.default = e => {
  let {
    onChangeAvatar: a,
    onChangeAvatarDecoration: t,
    onClose: n,
    className: s
  } = e;
  return (0, l.jsxs)(i.Menu, {
    className: s,
    onClose: n,
    onSelect: void 0,
    navId: "user-settings-change-avatar",
    "aria-label": r.default.Messages.AVATAR_ACTIONS_MENU_LABEL,
    children: [(0, l.jsx)(i.MenuItem, {
      id: "change-avatar",
      action: a,
      label: r.default.Messages.USER_SETTINGS_CHANGE_AVATAR
    }), (0, l.jsx)(i.MenuItem, {
      id: "change-avatar-decoration",
      action: t,
      label: r.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
    })]
  })
}