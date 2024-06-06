"use strict";
s.r(t), s.d(t, {
  getApplicationSubscriptionSystemMessageASTContent: function() {
    return E
  }
});
var a = s("689938");

function E(e) {
  let {
    application: t,
    username: s,
    usernameOnClick: E,
    medium: n
  } = e;
  return null != t ? a.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_MOBILE.astFormat({
    username: s,
    applicationName: t.name,
    usernameOnClick: E,
    medium: n
  }) : a.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION_MOBILE.astFormat({
    username: s,
    usernameOnClick: E,
    medium: n
  })
}