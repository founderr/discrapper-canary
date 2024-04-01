"use strict";
n.r(t), n.d(t, {
  useMultiAccountUsers: function() {
    return o
  }
});
var a = n("470079"),
  s = n("442837"),
  l = n("570140"),
  i = n("480387"),
  r = n("726745");

function o() {
  let e = (0, s.useStateFromStoresObject)([r.default], () => ({
    isLoading: r.default.getIsValidatingUsers(),
    multiAccountUsers: r.default.getUsers()
  }));
  return a.useEffect(() => {
    l.default.wait(() => {
      i.validateMultiAccountTokens()
    })
  }, []), e
}