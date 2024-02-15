"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  },
  useCanCreateOrAddGuildInDirectory: function() {
    return u
  }
});
var l = n("446674"),
  a = n("42203"),
  s = n("305961"),
  i = n("957255"),
  r = n("49111");

function o(e) {
  let t = (0, l.useStateFromStores)([s.default], () => s.default.getGuild(e.guildId)),
    n = (0, l.useStateFromStores)([a.default], () => a.default.getChannel(e.channelId)),
    o = (0, l.useStateFromStores)([i.default], () => i.default.can(r.Permissions.ADMINISTRATOR, t)),
    u = (0, l.useStateFromStores)([i.default], () => i.default.can(r.Permissions.MANAGE_MESSAGES, n));
  return {
    isEntryAdmin: o,
    canEdit: o || u,
    canRemove: o || u
  }
}

function u(e) {
  return (0, l.useStateFromStores)([i.default], () => i.default.can(r.Permissions.SEND_MESSAGES, e))
}