"use strict";
a.r(t), a.d(t, {
  getApplicationSubscriptionSystemMessageASTContent: function() {
    return n
  }
});
var s = a("689938");

function n(e) {
  let {
    application: t,
    username: a,
    usernameOnClick: n,
    medium: E
  } = e;
  return null != t ? s.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_MOBILE.astFormat({
    username: a,
    applicationName: t.name,
    usernameOnClick: n,
    medium: E
  }) : s.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION_MOBILE.astFormat({
    username: a,
    usernameOnClick: n,
    medium: E
  })
}