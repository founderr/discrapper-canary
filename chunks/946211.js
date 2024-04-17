"use strict";
t.r(n), t.d(n, {
  renderGuildProductPurchaseHeader: function() {
    return l
  }
});
var a = t("735250");
t("470079");
var r = t("409813"),
  s = t("443650"),
  o = t("464797"),
  i = t("743893");

function u(e) {
  let {
    onClose: n
  } = e, {
    guildProductListing: t
  } = (0, o.useGuildProductPurchaseContext)();
  return (0, a.jsx)(s.default, {
    guildProductListing: t,
    className: i.header,
    onClose: n
  })
}
let l = (e, n, t) => t === r.Step.CONFIRM ? null : (0, a.jsx)(u, {
  onClose: () => n(!1)
})