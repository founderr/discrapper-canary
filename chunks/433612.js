"use strict";
a.r(t), a.d(t, {
  openSecureFramesUserVerificationModal: function() {
    return s
  }
});
var u = a("735250"),
  l = a("481060");

function s(e, t) {
  (0, l.openModalLazy)(async () => {
    let l = (await Promise.all([a.e("99387"), a.e("71121")]).then(a.bind(a, "269319"))).default;
    return a => (0, u.jsx)(l, {
      userId: e,
      channelId: t,
      ...a
    })
  })
}