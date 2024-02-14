"use strict";
n.r(t), n.d(t, {
  useCanGuildFeedFeatureChannel: function() {
    return c
  }
});
var a = n("316693"),
  i = n("446674"),
  l = n("886484"),
  s = n("677315"),
  u = n("305961"),
  r = n("957255"),
  d = n("49111");
let o = a.default.combine(d.Permissions.VIEW_CHANNEL, d.Permissions.MANAGE_MESSAGES, d.Permissions.READ_MESSAGE_HISTORY);

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = e.getGuildId(),
    a = (0, i.useStateFromStores)([r.default], () => r.default.can(o, e), [e]),
    c = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(n), [n]),
    f = (0, s.useGuildHomeExperiment)(c, !1);
  return !!(a && null !== n && f && (null != e.parentChannelThreadType && d.ChannelTypesSets.GUILD_THREADS_ONLY.has(e.parentChannelThreadType) || t) && (0, l.isChannelAvailableInGuildFeed)(e)) || !1
}