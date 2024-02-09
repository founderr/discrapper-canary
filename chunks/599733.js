"use strict";
n.r(t), n.d(t, {
  confirmNoSharedServerSubscribeWarningModal: function() {
    return a
  }
});
var i = n("37983");
n("884691");
var l = n("77078");

function a(e) {
  let {
    application: t,
    onConfirm: a,
    onCancel: r
  } = e;
  return (0, l.openModalLazy)(async () => {
    let {
      ConfirmNoSharedServerSubscribeWarningModal: e
    } = await n.el("411638").then(n.bind(n, "411638"));
    return n => (0, i.jsx)(e, {
      ...n,
      application: t,
      onConfirm: a,
      onCancel: r
    })
  }, {
    modalKey: "application-user-subscribe-no-shared-server-warning"
  }), Promise.resolve()
}