"use strict";
n.r(t), n.d(t, {
  useMultiAccountUsers: function() {
    return o
  }
});
var s = n("884691"),
  a = n("446674"),
  r = n("913144"),
  i = n("694787"),
  l = n("770032");

function o() {
  let e = (0, a.useStateFromStoresObject)([l.default], () => ({
    isLoading: l.default.getIsValidatingUsers(),
    multiAccountUsers: l.default.getUsers()
  }));
  return s.useEffect(() => {
    r.default.wait(() => {
      i.validateMultiAccountTokens()
    })
  }, []), e
}