"use strict";
a.r(t), a.d(t, {
  useMultiAccountUsers: function() {
    return o
  }
});
var n = a("470079"),
  s = a("442837"),
  l = a("570140"),
  i = a("480387"),
  r = a("726745");

function o() {
  let e = (0, s.useStateFromStoresObject)([r.default], () => ({
    isLoading: r.default.getIsValidatingUsers(),
    multiAccountUsers: r.default.getUsers()
  }));
  return n.useEffect(() => {
    l.default.wait(() => {
      i.validateMultiAccountTokens()
    })
  }, []), e
}