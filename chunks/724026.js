"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  i = n("305961"),
  r = n("697218"),
  s = n("986003"),
  d = n("512395"),
  o = n("49111"),
  f = n("782340");

function c(e) {
  let t = (0, d.useOptInEnabledForGuild)(e),
    n = (0, u.useStateFromStores)([i.default], () => i.default.getGuild(e)),
    c = (0, u.useStateFromStores)([r.default], () => r.default.getCurrentUser());
  return null != c && null != n && (n.hasFeature(o.GuildFeatures.COMMUNITY) || c.isStaff()) ? (0, l.jsx)(a.MenuCheckboxItem, {
    id: "opt-in",
    label: f.default.Messages.GUILD_CHANNEL_OPT_IN,
    checked: !t,
    action: () => {
      (0, s.toggleShowAllChannels)(e)
    }
  }) : null
}