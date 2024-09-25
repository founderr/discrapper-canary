n.d(t, {
    Y: function () {
        return i;
    }
});
var r = n(689938);
function i(e) {
    let { application: t, username: n, usernameOnClick: i, medium: a } = e;
    return null != t
        ? r.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_MOBILE.astFormat({
              username: n,
              applicationName: t.name,
              usernameOnClick: i,
              medium: a
          })
        : r.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION_MOBILE.astFormat({
              username: n,
              usernameOnClick: i,
              medium: a
          });
}
