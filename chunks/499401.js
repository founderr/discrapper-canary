"use strict";
s.r(t), s.d(t, {
  getApplicationSubscriptionSystemMessageASTContent: function() {
    return n
  }
});
var a = s("689938");

function n(e) {
  let {
    application: t,
    username: s,
    usernameOnClick: n,
    medium: E
  } = e;
  return null != t ? a.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_MOBILE.astFormat({
    username: s,
    applicationName: t.name,
    usernameOnClick: n,
    medium: E
  }) : a.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION_MOBILE.astFormat({
    username: s,
    usernameOnClick: n,
    medium: E
  })
}