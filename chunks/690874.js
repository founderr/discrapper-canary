"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("808653");
var l = n("446674"),
  a = n("42203"),
  s = n("957255"),
  i = n("660478"),
  r = n("282109"),
  u = n("843455");

function o(e) {
  return (0, l.useStateFromStoresObject)([a.default, i.default, r.default, s.default], () => {
    let t = Object.keys(e);
    return t.reduce((e, t) => {
      let n = a.default.getChannel(t),
        l = null == n ? void 0 : n.isGuildVocal();
      return e.badge = e.badge + i.default.getMentionCount(t), e.unread = e.unread || !l && s.default.can(u.Permissions.VIEW_CHANNEL, n) && i.default.hasUnread(t) && !r.default.isChannelMuted(null == n ? void 0 : n.getGuildId(), t), e
    }, {
      badge: 0,
      unread: !1
    })
  })
}