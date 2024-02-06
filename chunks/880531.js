"use strict";
n.r(t), n.d(t, {
  renderGuildProductPurchaseHeader: function() {
    return a
  }
});
var r = n("37983");
n("884691");
var s = n("85336"),
  u = n("891328"),
  o = n("273093"),
  l = n("780022");

function i(e) {
  let {
    onClose: t
  } = e, {
    guildProductListing: n
  } = (0, o.useGuildProductPurchaseContext)();
  return (0, r.jsx)(u.default, {
    guildProductListing: n,
    className: l.header,
    onClose: t
  })
}
let a = (e, t, n) => n === s.Step.CONFIRM ? null : (0, r.jsx)(i, {
  onClose: () => t(!1)
})