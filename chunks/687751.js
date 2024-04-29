"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("570140"),
  i = a("317770"),
  r = a("592125"),
  o = a("944486"),
  u = a("914010"),
  d = a("594174"),
  c = a("758119"),
  f = a("920644"),
  E = a("208381"),
  h = a("723359"),
  _ = a("981631");

function C(e, t) {
  var a;
  if (null == e) return;
  let n = d.default.getCurrentUser();
  (null === (a = r.default.getChannel(t)) || void 0 === a ? void 0 : a.isNSFW()) && null != n && null == n.nsfwAllowed && (0, c.openAgeGateModal)(h.AgeGateSource.NSFW_CHANNEL)
}
class m extends i.default {
  _initialize() {
    l.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.default.subscribe("CHANNEL_SELECT", this.handleChannelSelect), l.default.subscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen), l.default.subscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose), l.default.subscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess), l.default.subscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure)
  }
  _terminate() {
    l.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.default.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect), l.default.unsubscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen), l.default.unsubscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose), l.default.unsubscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess), l.default.unsubscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure)
  }
  handleChannelSelect(e) {
    let {
      guildId: t,
      channelId: a
    } = e;
    C(t, a)
  }
  handleConnectionOpen() {
    let e = u.default.getGuildId();
    C(e, o.default.getChannelId())
  }
  handleAgeGateModalOpen(e) {
    let {
      source: t
    } = e;
    (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("49237"), a.e("99387"), a.e("96427"), a.e("1716")]).then(a.bind(a, "746882"));
      return a => (0, n.jsx)(e, {
        source: t,
        ...a
      })
    }, {
      modalKey: h.EXISTING_USER_AGE_GATE_MODAL_KEY,
      onCloseRequest: _.NOOP
    })
  }
  handleAgeGateSuccess() {
    (0, s.updateModal)(h.EXISTING_USER_AGE_GATE_MODAL_KEY, e => (0, n.jsx)(E.default, {
      ...e
    }))
  }
  handleAgeGateFailure(e) {
    let {
      underageMessage: t
    } = e;
    (0, s.updateModal)(h.EXISTING_USER_AGE_GATE_MODAL_KEY, e => (0, n.jsx)(f.default, {
      underageMessage: t,
      ...e
    }))
  }
  handleAgeGateModalClose() {
    (0, s.closeModal)(h.EXISTING_USER_AGE_GATE_MODAL_KEY)
  }
}
t.default = new m