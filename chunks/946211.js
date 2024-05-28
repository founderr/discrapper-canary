"use strict";
r.r(t), r.d(t, {
  renderGuildProductPurchaseHeader: function() {
    return c
  }
});
var n = r("735250");
r("470079");
var a = r("409813"),
  s = r("443650"),
  l = r("464797"),
  u = r("285540");

function i(e) {
  let {
    onClose: t
  } = e, {
    guildProductListing: r
  } = (0, l.useGuildProductPurchaseContext)();
  return (0, n.jsx)(s.default, {
    guildProductListing: r,
    className: u.header,
    onClose: t
  })
}
let c = (e, t, r) => r === a.Step.CONFIRM ? null : (0, n.jsx)(i, {
  onClose: () => t(!1)
})