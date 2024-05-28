"use strict";
n.r(t), n.d(t, {
  confirmNoSharedServerSubscribeWarningModal: function() {
    return l
  }
});
var r = n("735250");
n("470079");
var i = n("481060");

function l(e) {
  let {
    applicationName: t,
    onConfirm: l,
    onCancel: s
  } = e;
  return (0, i.openModalLazy)(async () => {
    let {
      ConfirmNoSharedServerSubscribeWarningModal: e
    } = await Promise.all([n.e("99387"), n.e("99809")]).then(n.bind(n, "525549"));
    return n => (0, r.jsx)(e, {
      ...n,
      applicationName: t,
      onConfirm: l,
      onCancel: s
    })
  }, {
    modalKey: "application-user-subscribe-no-shared-server-warning"
  })
}