"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  },
  useCanCreateOrAddGuildInDirectory: function() {
    return o
  }
});
var l = n("446674"),
  a = n("42203"),
  s = n("305961"),
  i = n("957255"),
  r = n("49111");

function u(e) {
  let t = (0, l.useStateFromStores)([s.default], () => s.default.getGuild(e.guildId)),
    n = (0, l.useStateFromStores)([a.default], () => a.default.getChannel(e.channelId)),
    u = (0, l.useStateFromStores)([i.default], () => i.default.can(r.Permissions.ADMINISTRATOR, t)),
    o = (0, l.useStateFromStores)([i.default], () => i.default.can(r.Permissions.MANAGE_MESSAGES, n));
  return {
    isEntryAdmin: u,
    canEdit: u || o,
    canRemove: u || o
  }
}

function o(e) {
  return (0, l.useStateFromStores)([i.default], () => i.default.can(r.Permissions.SEND_MESSAGES, e))
}