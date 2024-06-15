"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("336197"),
  a = n("592125"),
  l = n("430824"),
  i = n("900849"),
  r = n("981631");
async function o(e, t) {
  var n, o;
  if (null == e.messageReference) return;
  let u = e.messageReference.channel_id,
    d = a.default.getChannel(u);
  if (null == d && null != t.guild && null == l.default.getGuild(t.guild.id)) try {
    await (0, i.startLurking)(t.guild.id, {}, {
      channelId: u
    }), d = a.default.getChannel(u)
  } catch {}
  let c = null !== (o = null == d ? void 0 : d.guild_id) && void 0 !== o ? o : null === (n = t.guild) || void 0 === n ? void 0 : n.id;
  (0, s.default)(r.Routes.CHANNEL(c, u, e.messageReference.message_id), void 0)
}