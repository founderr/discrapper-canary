"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("570140"),
  i = a("317770"),
  r = a("314897"),
  o = a("592125"),
  u = a("797258"),
  d = a("590415"),
  c = a("981631");
let f = "STAGE_INVITED_TO_SPEAK_MODAL";
class E extends i.default {
  _initialize() {
    l.default.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  _terminate() {
    l.default.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  constructor(...e) {
    var t, l, i;
    super(...e), t = this, l = "handleVoiceStateUpdates", i = e => {
      var t;
      let {
        voiceStates: l
      } = e, i = r.default.getId(), E = null === (t = u.default.getSession()) || void 0 === t ? void 0 : t.sessionId, h = l.find(e => e.userId === i && e.sessionId === E);
      if (null == h) return;
      let _ = h.channelId;
      if (null == _) {
        (0, s.hasModalOpen)(f) && (0, s.closeModal)(f);
        return
      }
      let C = o.default.getChannel(_);
      if (!(null == C ? void 0 : C.isGuildStageVoice())) return;
      let m = (0, d.getAudienceRequestToSpeakState)(h) === d.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
      if (null != C && m) {
        if ((0, s.hasModalOpen)(f)) return;
        (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("13878")]).then(a.bind(a, "113140"));
          return t => (0, n.jsx)(e, {
            ...t,
            channel: C
          })
        }, {
          modalKey: f,
          onCloseRequest: c.NOOP_NULL
        })
      }
    }, l in t ? Object.defineProperty(t, l, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[l] = i
  }
}
t.default = new E