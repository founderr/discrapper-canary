"use strict";
n.r(t), n.d(t, {
  renderGuildProductPurchaseHeader: function() {
    return c
  }
});
var r = n("735250");
n("470079");
var s = n("409813"),
  a = n("443650"),
  u = n("464797"),
  l = n("743893");

function i(e) {
  let {
    onClose: t
  } = e, {
    guildProductListing: n
  } = (0, u.useGuildProductPurchaseContext)();
  return (0, r.jsx)(a.default, {
    guildProductListing: n,
    className: l.header,
    onClose: t
  })
}
let c = (e, t, n) => n === s.Step.CONFIRM ? null : (0, r.jsx)(i, {
  onClose: () => t(!1)
})