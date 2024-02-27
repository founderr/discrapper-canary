"use strict";
n.r(t), n.d(t, {
  isChannelPublic: function() {
    return r
  },
  useIsChannelPublic: function() {
    return d
  }
});
var l = n("446674"),
  s = n("42203"),
  u = n("991170"),
  a = n("398604"),
  i = n("745049"),
  o = n("49111");

function r(e, t) {
  return u.default.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e) || t === i.GuildScheduledEventEntityTypes.EXTERNAL
}

function d(e, t) {
  return (0, l.useStateFromStores)([s.default, a.default], () => {
    let n = s.default.getChannel(e),
      l = a.default.getGuildScheduledEvent(t);
    return r(n, null == l ? void 0 : l.entity_type)
  }, [e, t])
}