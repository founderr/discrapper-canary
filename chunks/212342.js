"use strict";
n.r(t), n("47120"), n("789020");
var s, l, a, i, r = n("442837"),
  o = n("433517"),
  u = n("570140"),
  d = n("314897"),
  c = n("592125"),
  E = n("496675"),
  f = n("594174"),
  _ = n("630388"),
  T = n("981631");
let I = "ChannelFollowingBumpChannels",
  m = new Set,
  N = new Set;
class p extends(s = r.default.Store) {
  initialize() {
    this.waitFor(d.default), m = new Set(o.Storage.get(I))
  }
  shouldShowBump(e) {
    return N.has(e)
  }
}
i = "ChannelFollowingPublishBumpStore", (a = "displayName") in(l = p) ? Object.defineProperty(l, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[a] = i, t.default = new p(u.default, {
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: s,
      optimistic: l
    } = e;
    if (l || m.has(n)) return !1;
    let a = c.default.getChannel(n),
      i = f.default.getCurrentUser();
    if (!(null != a && a.type === T.ChannelTypes.GUILD_ANNOUNCEMENT && s.type === T.MessageTypes.DEFAULT && (null != i && (null === (t = s.author) || void 0 === t ? void 0 : t.id) === i.id ? E.default.can(T.Permissions.SEND_MESSAGES, a) : E.default.can(T.Permissions.MANAGE_MESSAGES, a)) && !_.hasFlag(Number(s.flags), T.MessageFlags.CROSSPOSTED))) return !1;
    N.add(s.id)
  },
  MESSAGE_UPDATE: function(e) {
    let {
      message: t
    } = e;
    N.has(t.id) && _.hasFlag(Number(t.flags), T.MessageFlags.CROSSPOSTED) && N.delete(t.id)
  },
  CHANNEL_SELECT: function(e) {
    N.clear()
  },
  CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function(e) {
    let {
      messageId: t
    } = e;
    N.delete(t)
  },
  CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function(e) {
    let {
      channelId: t
    } = e;
    m.add(t), o.Storage.set(I, m), N.clear()
  }
})