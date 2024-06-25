"use strict";
n.d(t, {
  h: function() {
    return h
  }
});
var i = n(952265),
  r = n(570140),
  s = n(281956),
  o = n(200498),
  a = n(71275),
  l = n(672339),
  u = n(653175),
  _ = n(592125),
  c = n(430824),
  d = n(607744),
  E = n(944486),
  I = n(979651),
  T = n(934415);
let h = function(e, t) {
  let h = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    f = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    S = _.Z.getChannel(e),
    A = I.Z.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
    N = null != S ? d.Z.getCheck(S.guild_id) : null;
  if (!(null != t && (0, s.n)(t)) && (null == N || !!N.canChat || !!(0, o.jU)(S))) {
    if (null != S && !A) {
      let e = (0, T.rY)(S, I.Z, c.Z);
      if (e && S.isGuildStageVoice() && (0, a.xJ)(S.id)) {
        (0, i.ZD)(async () => {
          let {
            default: e
          } = await n.e("46398").then(n.bind(n, 523794));
          return t => e({
            channel: S,
            ...t
          })
        });
        return
      }
      if (e) {
        (0, i.ZD)(async () => {
          let {
            default: e
          } = await n.e("86465").then(n.bind(n, 997308));
          return t => e(t)
        });
        return
      }
    }
    h && (0, l.eH)();
    (0, u.Z)(function() {
      r.Z.dispatch({
        type: "VOICE_CHANNEL_SELECT",
        guildId: t,
        channelId: e,
        currentVoiceChannelId: E.Z.getVoiceChannelId(),
        video: h,
        stream: f
      })
    }, e, f, h)
  }
}