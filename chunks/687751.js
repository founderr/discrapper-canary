var s = n(735250);
n(470079);
var i = n(481060),
  l = n(570140),
  a = n(317770),
  r = n(592125),
  o = n(944486),
  c = n(914010),
  u = n(594174),
  d = n(758119),
  E = n(920644),
  h = n(208381),
  _ = n(723359),
  I = n(981631);

function m(e, t) {
  var n;
  if (null == e) return;
  let s = u.default.getCurrentUser();
  (null === (n = r.Z.getChannel(t)) || void 0 === n ? void 0 : n.isNSFW()) && null != s && null == s.nsfwAllowed && (0, d.mN)(_.L0.NSFW_CHANNEL)
}
class T extends a.Z {
  _initialize() {
    l.Z.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.Z.subscribe("CHANNEL_SELECT", this.handleChannelSelect), l.Z.subscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen), l.Z.subscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose), l.Z.subscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess), l.Z.subscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure)
  }
  _terminate() {
    l.Z.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.Z.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect), l.Z.unsubscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen), l.Z.unsubscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose), l.Z.unsubscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess), l.Z.unsubscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure)
  }
  handleChannelSelect(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    m(t, n)
  }
  handleConnectionOpen() {
    let e = c.Z.getGuildId();
    m(e, o.Z.getChannelId())
  }
  handleAgeGateModalOpen(e) {
    let {
      source: t
    } = e;
    (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("1716")]).then(n.bind(n, 746882));
      return n => (0, s.jsx)(e, {
        source: t,
        ...n
      })
    }, {
      modalKey: _.dG,
      onCloseRequest: I.dG4
    })
  }
  handleAgeGateSuccess() {
    (0, i.updateModal)(_.dG, e => (0, s.jsx)(h.Z, {
      ...e
    }))
  }
  handleAgeGateFailure(e) {
    let {
      underageMessage: t
    } = e;
    (0, i.updateModal)(_.dG, e => (0, s.jsx)(E.Z, {
      underageMessage: t,
      ...e
    }))
  }
  handleAgeGateModalClose() {
    (0, i.closeModal)(_.dG)
  }
}
t.Z = new T