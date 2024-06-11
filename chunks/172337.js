"use strict";
i.r(t);
var l = i("442837"),
  s = i("353926"),
  u = i("496675"),
  a = i("923726"),
  n = i("981631"),
  d = i("689938");
t.default = {
  title: () => d.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_TITLE,
  description: () => d.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_DEEPLINK_MODAL_DESCRIPTION,
  canCreateGuild: !1,
  useIsGuildSupported: () => (0, l.useStateFromStores)([s.default, u.default], () => e => e.hasFeature(n.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && !e.hasFeature(n.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) && u.default.can(n.Permissions.ADMINISTRATOR, e) && (0, a.isUserEligibleForTierTemplates)() && (0, a.isGuildEligibleForTierTemplates)(e.id), [])
}