"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var i = n("689988"),
  a = n("191145"),
  l = n("721281"),
  s = n("42203"),
  r = n("800762"),
  o = n("818766");
class u extends i.default {
  handleVoiceChannelSelect(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    if (null == t || null == n) return;
    let i = s.default.getChannel(t);
    if (null != i && (0, l.hasVoiceChannelActivityNotifsEnabled)(i) && i.isGuildVoice()) {
      let e = a.default.getParticipants(t).length,
        n = r.default.isInChannel(t),
        i = e === (n ? 1 : 0);
      i ? o.sendVoiceChannelActivityNotification(t, i) : e === (n ? 2 : 1) && o.sendVoiceChannelActivityNotification(t, i)
    }
  }
  constructor(...e) {
    super(...e), this.actions = {
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
    }
  }
}
var d = new u