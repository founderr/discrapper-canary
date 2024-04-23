"use strict";
n.r(t), n.d(t, {
  openGuildShopReportModal: function() {
    return a
  }
});
var s = n("735250");
n("470079");
var l = n("481060");

function a(e) {
  let {
    listing: t
  } = e;
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e("95480").then(n.bind(n, "275869"));
    return n => (0, s.jsx)(e, {
      listing: t,
      ...n
    })
  })
}