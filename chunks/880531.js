"use strict";
n.r(t), n.d(t, {
  renderGuildProductPurchaseHeader: function() {
    return o
  }
});
var r = n("37983");
n("884691");
var u = n("85336"),
  i = n("891328"),
  a = n("273093"),
  l = n("780022");

function s(e) {
  let {
    onClose: t
  } = e, {
    guildProductListing: n
  } = (0, a.useGuildProductPurchaseContext)();
  return (0, r.jsx)(i.default, {
    guildProductListing: n,
    className: l.header,
    onClose: t
  })
}
let o = (e, t, n) => n === u.Step.CONFIRM ? null : (0, r.jsx)(s, {
  onClose: () => t(!1)
})