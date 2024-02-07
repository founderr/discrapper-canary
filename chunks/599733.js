"use strict";
n.r(e), n.d(e, {
  confirmNoSharedServerSubscribeWarningModal: function() {
    return a
  }
});
var i = n("37983");
n("884691");
var l = n("77078");

function a(t) {
  let {
    application: e,
    onConfirm: a,
    onCancel: r
  } = t;
  return (0, l.openModalLazy)(async () => {
    let {
      ConfirmNoSharedServerSubscribeWarningModal: t
    } = await n.el("411638").then(n.bind(n, "411638"));
    return n => (0, i.jsx)(t, {
      ...n,
      application: e,
      onConfirm: a,
      onCancel: r
    })
  }, {
    modalKey: "application-user-subscribe-no-shared-server-warning"
  }), Promise.resolve()
}