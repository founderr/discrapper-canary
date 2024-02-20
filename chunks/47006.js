"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("18054"),
  d = n("957255"),
  s = n("49111"),
  o = n("782340");

function r(e) {
  let {
    canManageChannels: t,
    canManageRoles: n,
    canManageWebhooks: r,
    canAccessChannel: c
  } = (0, i.useStateFromStoresObject)([d.default], () => ({
    canManageChannels: d.default.can(s.Permissions.MANAGE_CHANNELS, e),
    canManageRoles: d.default.can(s.Permissions.MANAGE_ROLES, e),
    canManageWebhooks: d.default.can(s.Permissions.MANAGE_WEBHOOKS, e),
    canAccessChannel: d.default.can(e.accessPermissions, e)
  }), [e]);
  return !__OVERLAY__ && c && (t || n || r) ? (0, a.jsx)(l.MenuItem, {
    id: "edit-channel",
    label: e.type === s.ChannelTypes.GUILD_CATEGORY ? o.default.Messages.EDIT_CATEGORY : o.default.Messages.EDIT_CHANNEL,
    action: () => u.default.open(e.id)
  }) : null
}