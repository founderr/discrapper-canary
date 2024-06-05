"use strict";
n.r(t), n.d(t, {
  useCanGuildFeedFeatureChannel: function() {
    return f
  }
});
var u = n("149765"),
  a = n("442837"),
  r = n("971930"),
  l = n("859802"),
  s = n("430824"),
  i = n("496675"),
  d = n("981631");
let o = u.combine(d.Permissions.VIEW_CHANNEL, d.Permissions.MANAGE_MESSAGES, d.Permissions.READ_MESSAGE_HISTORY);

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = e.getGuildId(),
    u = (0, a.useStateFromStores)([i.default], () => i.default.can(o, e), [e]),
    f = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(n), [n]),
    c = (0, l.useGuildHomeExperiment)(f, !1);
  return !!(u && null !== n && c && (null != e.parentChannelThreadType && d.ChannelTypesSets.GUILD_THREADS_ONLY.has(e.parentChannelThreadType) || t) && (0, r.isChannelAvailableInGuildFeed)(e)) || !1
}