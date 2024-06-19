t.d(n, {
  Np: function() {
    return c
  },
  l8: function() {
    return u
  },
  mc: function() {
    return o
  }
});
var i = t(735250);
t(470079);
var r = t(481060),
  l = t(822869);
let a = "forward-modal";

function u(e) {
  let {
    messageId: n,
    channelId: u,
    source: o,
    initialSelectedDestinations: c = [],
    forwardOptions: s,
    onRequestSent: d
  } = e;
  (0, l.Lb)(u, n, o), (0, r.openModalLazy)(async () => {
    let {
      ForwardModal: e
    } = await Promise.all([t.e("49237"), t.e("99387"), t.e("6380"), t.e("33648")]).then(t.bind(t, 930864));
    return t => (0, i.jsx)(e, {
      ...t,
      channelId: u,
      messageId: n,
      initialSelectedDestinations: c,
      forwardOptions: s,
      onRequestSent: d
    })
  }, {
    modalKey: a
  })
}

function o() {
  (0, r.closeModal)(a)
}

function c(e) {
  let {
    messageId: n,
    channelId: l,
    failedDestinations: a,
    forwardOptions: u
  } = e;
  (0, r.openModalLazy)(async () => {
    let {
      ForwardFailedAlertModal: e
    } = await Promise.all([t.e("49237"), t.e("99387"), t.e("86590")]).then(t.bind(t, 384331));
    return t => (0, i.jsx)(e, {
      ...t,
      messageId: n,
      channelId: l,
      failedDestinations: a,
      forwardOptions: u
    })
  })
}