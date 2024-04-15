"use strict";
n.r(t), n.d(t, {
  openGuildProductPurchaseConfirmationModal: function() {
    return a
  }
});
var r = n("735250");
n("470079");
var s = n("481060");

function a(e) {
  (0, s.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("99387"), n.e("16359")]).then(n.bind(n, "588091"));
    return n => (0, r.jsx)(t, {
      ...e,
      ...n
    })
  })
}