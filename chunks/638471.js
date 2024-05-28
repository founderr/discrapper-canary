"use strict";
a.r(t), a.d(t, {
  useCanGuildFeedFeatureChannel: function() {
    return f
  }
});
var n = a("149765"),
  u = a("442837"),
  r = a("971930"),
  i = a("859802"),
  s = a("430824"),
  d = a("496675"),
  l = a("981631");
let o = n.combine(l.Permissions.VIEW_CHANNEL, l.Permissions.MANAGE_MESSAGES, l.Permissions.READ_MESSAGE_HISTORY);

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    a = e.getGuildId(),
    n = (0, u.useStateFromStores)([d.default], () => d.default.can(o, e), [e]),
    f = (0, u.useStateFromStores)([s.default], () => s.default.getGuild(a), [a]),
    c = (0, i.useGuildHomeExperiment)(f, !1);
  return !!(n && null !== a && c && (null != e.parentChannelThreadType && l.ChannelTypesSets.GUILD_THREADS_ONLY.has(e.parentChannelThreadType) || t) && (0, r.isChannelAvailableInGuildFeed)(e)) || !1
}