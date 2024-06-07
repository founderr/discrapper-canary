"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("735250");
n("470079");
var o = n("481060"),
  l = n("468436");

function a(e) {
  (0, o.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("76815")]).then(n.bind(n, "336977"));
    return t => (0, i.jsx)(e, {
      ...t
    })
  }, {
    onCloseCallback: e,
    backdropStyle: l.BackdropStyles.BLUR
  })
}