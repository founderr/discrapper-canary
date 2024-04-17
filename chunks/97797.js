"use strict";
s.r(t), s.d(t, {
  getGuildProductPurchaseSystemMessageContentMobile: function() {
    return n
  }
});
var a = s("689938");

function n(e) {
  let {
    username: t,
    usernameOnClickHandler: s,
    productName: n
  } = e;
  return a.default.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE_MOBILE.astFormat({
    username: t,
    usernameHook: s,
    productName: n
  })
}