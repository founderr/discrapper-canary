"use strict";
n.r(t), n.d(t, {
  openDeleteChannelModal: function() {
    return i
  }
});
var a = n("735250");
n("470079");
var r = n("481060");

function i(e, t) {
  return (0, r.openModalLazy)(async () => {
    let {
      default: r
    } = await Promise.all([n.e("99387"), n.e("79521")]).then(n.bind(n, "207540"));
    return n => (0, a.jsx)(r, {
      ...n,
      onConfirm: () => {
        n.onClose(), t()
      },
      channel: e
    })
  })
}