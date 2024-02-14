"use strict";
n.r(t), n.d(t, {
  renderGuildProductPurchaseHeader: function() {
    return o
  }
});
var u = n("37983");
n("884691");
var r = n("85336"),
  a = n("891328"),
  i = n("273093"),
  l = n("751499");

function s(e) {
  let {
    onClose: t
  } = e, {
    guildProductListing: n
  } = (0, i.useGuildProductPurchaseContext)();
  return (0, u.jsx)(a.default, {
    guildProductListing: n,
    className: l.header,
    onClose: t
  })
}
let o = (e, t, n) => n === r.Step.CONFIRM ? null : (0, u.jsx)(s, {
  onClose: () => t(!1)
})