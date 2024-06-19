E.d(n, {
  Y: function() {
    return _
  }
});
var t = E(689938);

function _(e) {
  let {
    application: n,
    username: E,
    usernameOnClick: _,
    medium: s
  } = e;
  return null != n ? t.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_MOBILE.astFormat({
    username: E,
    applicationName: n.name,
    usernameOnClick: _,
    medium: s
  }) : t.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION_MOBILE.astFormat({
    username: E,
    usernameOnClick: _,
    medium: s
  })
}