"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("336197"),
  a = n("592125"),
  l = n("900849"),
  i = n("981631");
async function r(e, t) {
  var n, r;
  if (null == e.messageReference) return;
  let o = e.messageReference.channel_id,
    u = a.default.getChannel(o);
  if (null == u && null != t.guild) try {
    await (0, l.startLurking)(t.guild.id, {}, {
      channelId: o
    }), u = a.default.getChannel(o)
  } catch {}
  let d = null !== (r = null == u ? void 0 : u.guild_id) && void 0 !== r ? r : null === (n = t.guild) || void 0 === n ? void 0 : n.id;
  (0, s.default)(i.Routes.CHANNEL(d, o, e.messageReference.message_id), void 0)
}