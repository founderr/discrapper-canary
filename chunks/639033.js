n(47120);
var i = n(735250);
n(470079);
var s = n(481060),
  l = n(570140),
  a = n(317770),
  r = n(314897),
  o = n(592125),
  c = n(797258),
  u = n(590415),
  d = n(981631);
let E = "STAGE_INVITED_TO_SPEAK_MODAL";
class h extends a.Z {
  _initialize() {
    l.Z.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  _terminate() {
    l.Z.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  constructor(...e) {
    var t, l, a;
    super(...e), t = this, l = "handleVoiceStateUpdates", a = e => {
      var t;
      let {
        voiceStates: l
      } = e, a = r.default.getId(), h = null === (t = c.Z.getSession()) || void 0 === t ? void 0 : t.sessionId, _ = l.find(e => e.userId === a && e.sessionId === h);
      if (null == _) return;
      let I = _.channelId;
      if (null == I) {
        (0, s.hasModalOpen)(E) && (0, s.closeModal)(E);
        return
      }
      let m = o.Z.getChannel(I);
      if (!(null == m ? void 0 : m.isGuildStageVoice())) return;
      let g = (0, u.gf)(_) === u.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
      if (null != m && g) {
        if ((0, s.hasModalOpen)(E)) return;
        (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("13878")]).then(n.bind(n, 113140));
          return t => (0, i.jsx)(e, {
            ...t,
            channel: m
          })
        }, {
          modalKey: E,
          onCloseRequest: d.VqG
        })
      }
    }, l in t ? Object.defineProperty(t, l, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[l] = a
  }
}
t.Z = new h