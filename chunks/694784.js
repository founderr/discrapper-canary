n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(336197),
  i = n(592125),
  l = n(430824),
  a = n(900849),
  r = n(981631);
async function o(e) {
  if (null == e.messageReference) return;
  let t = e.messageReference.guild_id,
    n = e.messageReference.channel_id,
    o = i.Z.getChannel(n);
  if (null == o && null != t && null == l.Z.getGuild(t)) try {
    await (0, a.Ub)(t, {}, {
      channelId: n
    }), o = i.Z.getChannel(n)
  } catch {}(0, s.Z)(r.Z5c.CHANNEL(t, n, e.messageReference.message_id), void 0)
}