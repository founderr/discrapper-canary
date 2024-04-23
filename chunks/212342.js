"use strict";
n.r(t), n("47120"), n("789020");
var s, l, a, i, r = n("442837"),
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
  p = new Set;
class h extends(s = r.default.Store) {
  initialize() {
    this.waitFor(d.default), I = new Set(o.Storage.get(T))
  }
  shouldShowBump(e) {
    return p.has(e)
  }
}
i = "ChannelFollowingPublishBumpStore", (a = "displayName") in(l = h) ? Object.defineProperty(l, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[a] = i, t.default = new h(u.default, {
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: s,
      optimistic: l
    } = e;
    if (l || I.has(n)) return !1;
    let a = c.default.getChannel(n),
      i = E.default.getCurrentUser();
    if (!(null != a && a.type === m.ChannelTypes.GUILD_ANNOUNCEMENT && s.type === m.MessageTypes.DEFAULT && (null != i && (null === (t = s.author) || void 0 === t ? void 0 : t.id) === i.id ? f.default.can(m.Permissions.SEND_MESSAGES, a) : f.default.can(m.Permissions.MANAGE_MESSAGES, a)) && !_.hasFlag(Number(s.flags), m.MessageFlags.CROSSPOSTED))) return !1;
    p.add(s.id)
  },
  MESSAGE_UPDATE: function(e) {
    let {
      message: t
    } = e;
    p.has(t.id) && _.hasFlag(Number(t.flags), m.MessageFlags.CROSSPOSTED) && p.delete(t.id)
  },
  CHANNEL_SELECT: function(e) {
    p.clear()
  },
  CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function(e) {
    let {
      messageId: t
    } = e;
    p.delete(t)
  },
  CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function(e) {
    let {
      channelId: t
    } = e;
    I.add(t), o.Storage.set(T, I), p.clear()
  }
})