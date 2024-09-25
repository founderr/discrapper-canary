n.d(t, {
    A: function () {
        return a;
    }
});
var r = n(981631),
    i = n(689938);
function a(e) {
    let { application: t, username: n, usernameHook: a = r.dG4 } = e;
    return null != t
        ? i.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE.format({
              username: n,
              applicationName: t.name,
              usernameHook: a
          })
        : i.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION.format({
              username: n,
              usernameHook: a
          });
}
