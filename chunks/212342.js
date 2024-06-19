n(47120), n(789020);
var s, i, l, a, r = n(442837),
  o = n(433517),
  c = n(570140),
  u = n(314897),
  d = n(592125),
  E = n(496675),
  _ = n(594174),
  I = n(630388),
  T = n(981631);
let N = "ChannelFollowingBumpChannels",
  m = new Set,
  h = new Set;
class C extends(s = r.ZP.Store) {
  initialize() {
    this.waitFor(u.default), m = new Set(o.K.get(N))
  }
  shouldShowBump(e) {
    return h.has(e)
  }
}
a = "ChannelFollowingPublishBumpStore", (l = "displayName") in(i = C) ? Object.defineProperty(i, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = a, t.Z = new C(c.Z, {
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: s,
      optimistic: i
    } = e;
    if (i || m.has(n)) return !1;
    let l = d.Z.getChannel(n),
      a = _.default.getCurrentUser();
    if (!(null != l && l.type === T.d4z.GUILD_ANNOUNCEMENT && s.type === T.uaV.DEFAULT && (null != a && (null === (t = s.author) || void 0 === t ? void 0 : t.id) === a.id ? E.Z.can(T.Plq.SEND_MESSAGES, l) : E.Z.can(T.Plq.MANAGE_MESSAGES, l)) && !I.yE(Number(s.flags), T.iLy.CROSSPOSTED))) return !1;
    h.add(s.id)
  },
  MESSAGE_UPDATE: function(e) {
    let {
      message: t
    } = e;
    h.has(t.id) && I.yE(Number(t.flags), T.iLy.CROSSPOSTED) && h.delete(t.id)
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
    m.add(t), o.K.set(N, m), h.clear()
  }
})