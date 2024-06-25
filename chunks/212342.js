n(47120), n(789020);
var s, i, l, a, r = n(442837),
  o = n(433517),
  c = n(570140),
  u = n(314897),
  d = n(592125),
  E = n(496675),
  _ = n(594174),
  I = n(630388),
  T = n(110630),
  m = n(981631);
let N = "ChannelFollowingBumpChannels",
  h = new Set,
  C = new Set;
class S extends(s = r.ZP.Store) {
  initialize() {
    this.waitFor(u.default), h = new Set(o.K.get(N))
  }
  shouldShowBump(e) {
    return C.has(e)
  }
}
a = "ChannelFollowingPublishBumpStore", (l = "displayName") in(i = S) ? Object.defineProperty(i, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = a, t.Z = new S(c.Z, {
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: s,
      optimistic: i
    } = e;
    if (i || h.has(n)) return !1;
    let l = d.Z.getChannel(n),
      a = _.default.getCurrentUser();
    if (!(null != l && l.type === m.d4z.GUILD_ANNOUNCEMENT && (0, T.Z)(s) && (null != a && (null === (t = s.author) || void 0 === t ? void 0 : t.id) === a.id ? E.Z.can(m.Plq.SEND_MESSAGES, l) : E.Z.can(m.Plq.MANAGE_MESSAGES, l)) && !I.yE(Number(s.flags), m.iLy.CROSSPOSTED))) return !1;
    C.add(s.id)
  },
  MESSAGE_UPDATE: function(e) {
    let {
      message: t
    } = e;
    C.has(t.id) && I.yE(Number(t.flags), m.iLy.CROSSPOSTED) && C.delete(t.id)
  },
  CHANNEL_SELECT: function(e) {
    C.clear()
  },
  CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function(e) {
    let {
      messageId: t
    } = e;
    C.delete(t)
  },
  CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function(e) {
    let {
      channelId: t
    } = e;
    h.add(t), o.K.set(N, h), C.clear()
  }
})