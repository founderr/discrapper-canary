"use strict";
n.r(t), n.d(t, {
  showVotesForAnswer: function() {
    return a
  }
});
var s = n("735250");
n("470079");
var l = n("481060");

function a(e) {
  let {
    message: t,
    initialAnswerId: a
  } = e;
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("74590")]).then(n.bind(n, "651081"));
    return n => (0, s.jsx)(e, {
      ...n,
      message: t,
      initialAnswerId: a
    })
  })
}