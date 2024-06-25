"use strict";
n(47120);
var i = n(147913),
  r = n(751571),
  s = n(88751),
  o = n(590415),
  a = n(189786),
  l = n(314897),
  u = n(592125),
  _ = n(131951),
  c = n(19780),
  d = n(876506),
  E = n(981631),
  I = n(761274);
let T = null;

function h() {
  r.Z.requestPermission(I.Eu.AUDIO).then(e => {
    if (!!e)(0, d.Z)(!0)
  }), _.Z.getMode() === E.pM4.PUSH_TO_TALK && r.Z.requestPermission(I.Eu.INPUT_MONITORING)
}
class f extends i.Z {
  handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    null == t && (T = null)
  }
  handleVoiceStateUpdates(e) {
    let {
      voiceStates: t
    } = e;
    t.forEach(e => {
      var t, n, i, r;
      let {
        userId: _,
        channelId: d
      } = e;
      if (null != d && l.default.getId() === _ && null != c.Z.getRTCConnectionId() && T !== d) {
        if (t = _, n = d, (null === (i = u.Z.getChannel(n)) || void 0 === i ? !void 0 : !i.isListenModeCapable()) || s.ZP.isSpeaker(t, n)) {
          T = d, h();
          return
        }
        r = new a.Z(e), (0, o.gf)(r) === o.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && (T = d, h())
      }
    })
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new f