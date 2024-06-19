E.d(n, {
  i: function() {
    return _
  }
});
var t = E(689938);

function _(e) {
  let {
    username: n,
    usernameOnClickHandler: E,
    productName: _
  } = e;
  return t.Z.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE_MOBILE.astFormat({
    username: n,
    usernameHook: E,
    productName: _
  })
}