"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var i = n("637612"),
  a = n("819689"),
  l = n("689988"),
  s = n("271938"),
  r = n("42203"),
  o = n("377253"),
  u = n("957255"),
  d = n("18494"),
  c = n("697218"),
  f = n("923510"),
  E = n("285857"),
  h = n("49111");
class _ extends l.default {
  handleVoiceStateUpdates(e) {
    let {
      voiceStates: t
    } = e;
    t.forEach(e => {
      let {
        channelId: t,
        userId: n,
        suppress: l,
        requestToSpeakTimestamp: _
      } = e;
      if (d.default.getVoiceChannelId() !== t || !l || null == t || n === s.default.getId()) return;
      let C = u.default.can(f.MODERATE_STAGE_CHANNEL_PERMISSIONS, r.default.getChannel(t));
      if (C) {
        if (null != _) {
          let e = c.default.getUser(n);
          null != e && (0, E.sendStageRequestToSpeakEphemeralMessage)(t, e, _)
        } else {
          let e = o.default.getMessages(t),
            l = e.findNewest(e => e.type === i.MessageTypes.STAGE_RAISE_HAND && e.hasFlag(h.MessageFlags.EPHEMERAL) && e.author.id === n);
          null != l && a.default.deleteMessage(t, l.id, !0)
        }
      }
    })
  }
  constructor(...e) {
    super(...e), this.actions = {
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates
    }
  }
}
var C = new _