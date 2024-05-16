"use strict";
i.r(t), i.d(t, {
  default: function() {
    return u
  }
});
var n = i("442837"),
  s = i("496675"),
  a = i("981631");

function u(e) {
  let {
    canManageGuild: t,
    canManageRoles: i,
    canBanMembers: u,
    canManageNicknames: l,
    canCreateEmojisAndStickers: o,
    canManageEmojisAndStickers: d,
    canManageWebhooks: r,
    canViewAuditLog: c
  } = (0, n.useStateFromStoresObject)([s.default], () => ({
    canManageGuild: s.default.can(a.Permissions.MANAGE_GUILD, e),
    canManageRoles: s.default.can(a.Permissions.MANAGE_ROLES, e),
    canBanMembers: s.default.can(a.Permissions.BAN_MEMBERS, e),
    canManageNicknames: s.default.can(a.Permissions.MANAGE_NICKNAMES, e),
    canCreateEmojisAndStickers: s.default.can(a.Permissions.CREATE_GUILD_EXPRESSIONS, e),
    canManageEmojisAndStickers: s.default.can(a.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
    canManageWebhooks: s.default.can(a.Permissions.MANAGE_WEBHOOKS, e),
    canViewAuditLog: s.default.can(a.Permissions.VIEW_AUDIT_LOG, e)
  }), [e]);
  return t || i || u || l || o || d || r || c
}