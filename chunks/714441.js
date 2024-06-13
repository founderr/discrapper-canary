"use strict";
n.r(t), n.d(t, {
  confirmNoSharedServerSubscribeWarningModal: function() {
    return a
  }
});
var i = n("735250");
n("470079");
var l = n("481060");

function a(e) {
  let {
    applicationName: t,
    onConfirm: a,
    onCancel: r
  } = e;
  return (0, l.openModalLazy)(async () => {
    let {
      ConfirmNoSharedServerSubscribeWarningModal: e
    } = await Promise.all([n.e("99387"), n.e("99809")]).then(n.bind(n, "525549"));
    return n => (0, i.jsx)(e, {
      ...n,
      applicationName: t,
      onConfirm: a,
      onCancel: r
    })
  }, {
    modalKey: "application-user-subscribe-no-shared-server-warning"
  })
}