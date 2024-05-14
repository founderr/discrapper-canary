"use strict";
a.r(t), a.d(t, {
  getGuildProductPurchaseSystemMessageContentMobile: function() {
    return n
  }
});
var s = a("689938");

function n(e) {
  let {
    username: t,
    usernameOnClickHandler: a,
    productName: n
  } = e;
  return s.default.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE_MOBILE.astFormat({
    username: t,
    usernameHook: a,
    productName: n
  })
}