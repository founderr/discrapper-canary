"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("735250");
n("470079");
var l = n("481060");

function a(e, t) {
  (0, l.openModalLazy)(async () => {
    let {
      default: l
    } = await Promise.all([n.e("99387"), n.e("6310")]).then(n.bind(n, "706923"));
    return n => (0, s.jsx)(l, {
      channelId: e,
      messageId: t,
      ...n
    })
  })
}