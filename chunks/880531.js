"use strict";
n.r(t), n.d(t, {
  renderGuildProductPurchaseHeader: function() {
    return a
  }
});
var r = n("37983");
n("884691");
var u = n("85336"),
  s = n("891328"),
  i = n("273093"),
  l = n("780022");

function o(e) {
  let {
    onClose: t
  } = e, {
    guildProductListing: n
  } = (0, i.useGuildProductPurchaseContext)();
  return (0, r.jsx)(s.default, {
    guildProductListing: n,
    className: l.header,
    onClose: t
  })
}
let a = (e, t, n) => n === u.Step.CONFIRM ? null : (0, r.jsx)(o, {
  onClose: () => t(!1)
})