"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("6587"),
  r = n("615387"),
  u = n("755624"),
  o = n("42203"),
  d = n("660478"),
  c = n("282109"),
  f = n("471671"),
  h = n("357007");

function C(e) {
  let t = o.default.getChannel(e);
  if (null == t || null == t.getGuildId()) return !1;
  let n = t.isThread() ? u.default.isMuted(t.id) : c.default.isChannelMuted(t.getGuildId(), t.id);
  return !n && (0, r.getHasImportantUnread)(t)
}

function p(e) {
  let t = o.default.getChannel(e);
  if (null == t) return !1;
  let n = t.getGuildId();
  if (null == n) return !1;
  let l = c.default.isGuildCollapsed(n),
    a = c.default.isChannelMuted(n, t.id);
  return (!l || !a) && d.default.getMentionCount(e) > 0
}
var m = a.forwardRef(function(e, t) {
  let {
    guildId: n,
    guildChannels: a,
    guildChannelsVersion: r,
    ...u
  } = e, o = (0, i.useFlattenedChannelIdListWithThreads)(n, a, r, !1, {
    ignoreRecents: !0
  }), d = (0, s.useStateFromStores)([f.default], () => f.default.isFocused());
  return (0, l.jsx)(h.default, {
    ref: t,
    ...u,
    isUnread: C,
    isMentioned: p,
    items: o,
    animate: d
  })
})