"use strict";
i.r(t), i.d(t, {
  confirmNoSharedServerSubscribeWarningModal: function() {
    return a
  }
});
var n = i("735250");
i("470079");
var l = i("481060");

function a(e) {
  let {
    applicationName: t,
    onConfirm: a,
    onCancel: s
  } = e;
  return (0, l.openModalLazy)(async () => {
    let {
      ConfirmNoSharedServerSubscribeWarningModal: e
    } = await Promise.all([i.e("99387"), i.e("99809")]).then(i.bind(i, "525549"));
    return i => (0, n.jsx)(e, {
      ...i,
      applicationName: t,
      onConfirm: a,
      onCancel: s
    })
  }, {
    modalKey: "application-user-subscribe-no-shared-server-warning"
  })
}