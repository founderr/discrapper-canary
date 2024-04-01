"use strict";
n.r(t), n.d(t, {
  getApplicationSubscriptionSystemMessageContent: function() {
    return a
  }
});
var s = n("981631"),
  l = n("689938");

function a(e) {
  let {
    application: t,
    username: n,
    usernameHook: a = s.NOOP
  } = e;
  return null != t ? l.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE.format({
    username: n,
    applicationName: t.name,
    usernameHook: a
  }) : l.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION.format({
    username: n,
    usernameHook: a
  })
}