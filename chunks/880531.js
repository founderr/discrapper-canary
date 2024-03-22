"use strict";
n.r(t), n.d(t, {
  renderGuildProductPurchaseHeader: function() {
    return d
  }
});
var r = n("37983");
n("884691");
var u = n("85336"),
  a = n("891328"),
  i = n("273093"),
  l = n("751499");

function s(e) {
  let {
    onClose: t
  } = e, {
    guildProductListing: n
  } = (0, i.useGuildProductPurchaseContext)();
  return (0, r.jsx)(a.default, {
    guildProductListing: n,
    className: l.header,
    onClose: t
  })
}
let d = (e, t, n) => n === u.Step.CONFIRM ? null : (0, r.jsx)(s, {
  onClose: () => t(!1)
})