"use strict";
t.r(n), t.d(n, {
  default: function() {
    return c
  }
});
var a = t("735250");
t("470079");
var u = t("442837"),
  s = t("481060"),
  l = t("787014"),
  r = t("496675"),
  i = t("981631"),
  o = t("689938");

function c(e) {
  let {
    canManageChannels: n,
    canManageRoles: t,
    canManageWebhooks: c,
    canAccessChannel: d
  } = (0, u.useStateFromStoresObject)([r.default], () => ({
    canManageChannels: r.default.can(i.Permissions.MANAGE_CHANNELS, e),
    canManageRoles: r.default.can(i.Permissions.MANAGE_ROLES, e),
    canManageWebhooks: r.default.can(i.Permissions.MANAGE_WEBHOOKS, e),
    canAccessChannel: r.default.can(e.accessPermissions, e)
  }), [e]);
  return !__OVERLAY__ && d && (n || t || c) ? (0, a.jsx)(s.MenuItem, {
    id: "edit-channel",
    label: e.type === i.ChannelTypes.GUILD_CATEGORY ? o.default.Messages.EDIT_CATEGORY : o.default.Messages.EDIT_CHANNEL,
    action: () => l.default.open(e.id)
  }) : null
}