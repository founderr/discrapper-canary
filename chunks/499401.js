"use strict";
n.r(t), n.d(t, {
  getApplicationSubscriptionSystemMessageASTContent: function() {
    return s
  }
});
var a = n("689938");

function s(e) {
  let {
    application: t,
    username: n,
    usernameOnClick: s,
    medium: r
  } = e;
  return null != t ? a.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_MOBILE.astFormat({
    username: n,
    applicationName: t.name,
    usernameOnClick: s,
    medium: r
  }) : a.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION_MOBILE.astFormat({
    username: n,
    usernameOnClick: s,
    medium: r
  })
}