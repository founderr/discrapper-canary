n(47120);
var l, i, s, a = n(445346),
  r = n(570140),
  o = n(430198),
  c = n(314897),
  u = n(592125),
  d = n(709054),
  h = n(522579);
let m = new Set;
class E extends a.y {
  shouldDisplayPrompt(e) {
    return m.has(e)
  }
}
s = "MediaPostSharePromptStore", (i = "displayName") in(l = E) ? Object.defineProperty(l, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[i] = s, t.Z = new E(r.Z, {
  CONNECTION_OPEN: function() {
    m = new Set
  },
  MESSAGE_CREATE: function(e) {
    var t;
    if (e.isPushNotification) return;
    let n = e.message;
    if (c.default.getId() !== (null === (t = n.author) || void 0 === t ? void 0 : t.id) || !(0, h.z9)(n.id, n.channel_id)) return;
    let l = u.Z.getChannel(n.channel_id);
    if (null != l && null != l.parent_id) o.Z.isChannelGated(l.guild_id, l.parent_id) && m.add(d.default.castMessageIdAsChannelId(e.message.id))
  },
  DISMISS_MEDIA_POST_SHARE_PROMPT: function(e) {
    let {
      threadId: t
    } = e;
    m.delete(t)
  },
  LOGOUT: function(e) {
    m.clear()
  }
})