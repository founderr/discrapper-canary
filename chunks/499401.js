_.d(E, {
    Y: function () {
        return n;
    }
});
var t = _(689938);
function n(e) {
    let { application: E, username: _, usernameOnClick: n, medium: s } = e;
    return null != E
        ? t.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_MOBILE.astFormat({
              username: _,
              applicationName: E.name,
              usernameOnClick: n,
              medium: s
          })
        : t.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION_MOBILE.astFormat({
              username: _,
              usernameOnClick: n,
              medium: s
          });
}
