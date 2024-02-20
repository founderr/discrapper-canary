"use strict";
n.r(t), n.d(t, {
  shouldImmediatelyRequestVoicePermissions: function() {
    return S
  },
  default: function() {
    return T
  }
}), n("222007");
var i = n("689988"),
  a = n("928609"),
  l = n("325861"),
  s = n("808422"),
  r = n("628454"),
  o = n("271938"),
  u = n("42203"),
  d = n("42887"),
  c = n("945956"),
  f = n("850296"),
  E = n("49111"),
  h = n("180524");
let _ = null;

function C() {
  a.default.requestPermission(h.NativePermissionTypes.AUDIO).then(e => {
    e && (0, f.default)(!0)
  }), d.default.getMode() === E.InputModes.PUSH_TO_TALK && a.default.requestPermission(h.NativePermissionTypes.INPUT_MONITORING)
}

function S(e, t) {
  var n;
  let i = null === (n = u.default.getChannel(t)) || void 0 === n ? void 0 : n.isListenModeCapable();
  if (!i) return !0;
  let a = l.default.isSpeaker(e, t);
  return a
}
class g extends i.default {
  handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    null == t && (_ = null)
  }
  handleVoiceStateUpdates(e) {
    let {
      voiceStates: t
    } = e;
    t.forEach(e => {
      let {
        userId: t,
        channelId: n
      } = e;
      if (null == n) return;
      let i = o.default.getId() === t;
      if (!i || null == c.default.getRTCConnectionId() || _ === n) return;
      let a = S(t, n);
      if (a) {
        _ = n, C();
        return
      }
      let l = function(e) {
        let t = (0, s.getAudienceRequestToSpeakState)(e),
          n = t === s.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        return n
      }(new r.default(e));
      l && (_ = n, C())
    })
  }
  constructor(...e) {
    super(...e), this.actions = {
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
    }
  }
}
var T = new g