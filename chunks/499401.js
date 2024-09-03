_.d(E, {
    Y: function () {
        return t;
    }
});
var n = _(689938);
function t(e) {
    let { application: E, username: _, usernameOnClick: t, medium: s } = e;
    return null != E
        ? n.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_MOBILE.astFormat({
              username: _,
              applicationName: E.name,
              usernameOnClick: t,
              medium: s
          })
        : n.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION_MOBILE.astFormat({
              username: _,
              usernameOnClick: t,
              medium: s
          });
}
