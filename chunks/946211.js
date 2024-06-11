"use strict";
n.r(t), n.d(t, {
  renderGuildProductPurchaseHeader: function() {
    return o
  }
});
var r = n("735250");
n("470079");
var s = n("409813"),
  u = n("443650"),
  a = n("464797"),
  l = n("285540");

function i(e) {
  let {
    onClose: t
  } = e, {
    guildProductListing: n
  } = (0, a.useGuildProductPurchaseContext)();
  return (0, r.jsx)(u.default, {
    guildProductListing: n,
    className: l.header,
    onClose: t
  })
}
let o = (e, t, n) => n === s.Step.CONFIRM ? null : (0, r.jsx)(i, {
  onClose: () => t(!1)
})