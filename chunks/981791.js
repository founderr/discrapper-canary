n.d(t, {
  A: function() {
    return l
  }
});
var s = n(981631),
  i = n(689938);

function l(e) {
  let {
    application: t,
    username: n,
    usernameHook: l = s.dG4
  } = e;
  return null != t ? i.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE.format({
    username: n,
    applicationName: t.name,
    usernameHook: l
  }) : i.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION.format({
    username: n,
    usernameHook: l
  })
}