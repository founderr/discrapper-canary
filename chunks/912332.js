"use strict";
n.r(t), n.d(t, {
  closeForwardModal: function() {
    return o
  },
  openForwardModal: function() {
    return r
  },
  showForwardFailedAlertModal: function() {
    return u
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("822869");
let i = "forward-modal";

function r(e) {
  let {
    messageId: t,
    channelId: r,
    source: o,
    initialSelectedDestinations: u = [],
    forwardOptions: d
  } = e;
  (0, l.trackForwardStart)(r, t, o), (0, a.openModalLazy)(async () => {
    let {
      ForwardModal: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("33648")]).then(n.bind(n, "930864"));
    return n => (0, s.jsx)(e, {
      ...n,
      channelId: r,
      messageId: t,
      initialSelectedDestinations: u,
      forwardOptions: d
    })
  }, {
    modalKey: i
  })
}

function o() {
  (0, a.closeModal)(i)
}

function u(e) {
  let {
    messageId: t,
    channelId: l,
    failedDestinations: i,
    forwardOptions: r
  } = e;
  (0, a.openModalLazy)(async () => {
    let {
      ForwardFailedAlertModal: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("86590")]).then(n.bind(n, "384331"));
    return n => (0, s.jsx)(e, {
      ...n,
      messageId: t,
      channelId: l,
      failedDestinations: i,
      forwardOptions: r
    })
  })
}