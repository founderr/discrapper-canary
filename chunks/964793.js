"use strict";
n.r(t), n.d(t, {
  openGuildProductInfoModal: function() {
    return a
  }
});
var s = n("735250");
n("470079");
var l = n("481060");

function a(e) {
  (0, l.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("99387"), n.e("38062")]).then(n.bind(n, "546604"));
    return n => (0, s.jsx)(t, {
      ...e,
      ...n
    })
  })
}