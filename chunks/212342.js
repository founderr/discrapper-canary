"use strict";
n.r(t), n("47120"), n("789020");
var s, a, l, i, r = n("442837"),
  o = n("433517"),
  u = n("570140"),
  d = n("314897"),
  c = n("592125"),
  f = n("496675"),
  E = n("594174"),
  _ = n("630388"),
  m = n("981631");
let T = "ChannelFollowingBumpChannels",
  I = new Set,
  h = new Set;
class p extends(s = r.default.Store) {
  initialize() {
    this.waitFor(d.default), I = new Set(o.Storage.get(T))
  }
  shouldShowBump(e) {
    return h.has(e)
  }
}
i = "ChannelFollowingPublishBumpStore", (l = "displayName") in(a = p) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, t.default = new p(u.default, {
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: s,
      optimistic: a
    } = e;
    if (a || I.has(n)) return !1;
    let l = c.default.getChannel(n),
      i = E.default.getCurrentUser();
    if (!(null != l && l.type === m.ChannelTypes.GUILD_ANNOUNCEMENT && s.type === m.MessageTypes.DEFAULT && (null != i && (null === (t = s.author) || void 0 === t ? void 0 : t.id) === i.id ? f.default.can(m.Permissions.SEND_MESSAGES, l) : f.default.can(m.Permissions.MANAGE_MESSAGES, l)) && !_.hasFlag(Number(s.flags), m.MessageFlags.CROSSPOSTED))) return !1;
    h.add(s.id)
  },
  MESSAGE_UPDATE: function(e) {
    let {
      message: t
    } = e;
    h.has(t.id) && _.hasFlag(Number(t.flags), m.MessageFlags.CROSSPOSTED) && h.delete(t.id)
  },
  CHANNEL_SELECT: function(e) {
    h.clear()
  },
  CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function(e) {
    let {
      messageId: t
    } = e;
    h.delete(t)
  },
  CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function(e) {
    let {
      channelId: t
    } = e;
    I.add(t), o.Storage.set(T, I), h.clear()
  }
})