"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("570140"),
  i = n("317770"),
  r = n("592125"),
  o = n("944486"),
  u = n("914010"),
  d = n("594174"),
  c = n("758119"),
  f = n("920644"),
  E = n("208381"),
  C = n("723359"),
  h = n("981631");

function _(e, t) {
  var n;
  if (null == e) return;
  let a = d.default.getCurrentUser();
  (null === (n = r.default.getChannel(t)) || void 0 === n ? void 0 : n.isNSFW()) && null != a && null == a.nsfwAllowed && (0, c.openAgeGateModal)(C.AgeGateSource.NSFW_CHANNEL)
}
class S extends i.default {
  _initialize() {
    l.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.default.subscribe("CHANNEL_SELECT", this.handleChannelSelect), l.default.subscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen), l.default.subscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose), l.default.subscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess), l.default.subscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure)
  }
  _terminate() {
    l.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.default.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect), l.default.unsubscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen), l.default.unsubscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose), l.default.unsubscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess), l.default.unsubscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure)
  }
  handleChannelSelect(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    _(t, n)
  }
  handleConnectionOpen() {
    let e = u.default.getGuildId();
    _(e, o.default.getChannelId())
  }
  handleAgeGateModalOpen(e) {
    let {
      source: t
    } = e;
    (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("1716")]).then(n.bind(n, "746882"));
      return n => (0, a.jsx)(e, {
        source: t,
        ...n
      })
    }, {
      modalKey: C.EXISTING_USER_AGE_GATE_MODAL_KEY,
      onCloseRequest: h.NOOP
    })
  }
  handleAgeGateSuccess() {
    (0, s.updateModal)(C.EXISTING_USER_AGE_GATE_MODAL_KEY, e => (0, a.jsx)(E.default, {
      ...e
    }))
  }
  handleAgeGateFailure(e) {
    let {
      underageMessage: t
    } = e;
    (0, s.updateModal)(C.EXISTING_USER_AGE_GATE_MODAL_KEY, e => (0, a.jsx)(f.default, {
      underageMessage: t,
      ...e
    }))
  }
  handleAgeGateModalClose() {
    (0, s.closeModal)(C.EXISTING_USER_AGE_GATE_MODAL_KEY)
  }
}
t.default = new S