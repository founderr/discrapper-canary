"use strict";
n.r(t), n.d(t, {
  Reference: function() {
    return s
  }
});
var r = n("884691"),
  a = n("752961"),
  o = n.n(a),
  i = n("204748"),
  u = n("84075");

function s(e) {
  var t = e.children,
    n = e.innerRef,
    a = r.useContext(i.ManagerReferenceNodeSetterContext),
    s = r.useCallback(function(e) {
      (0, u.setRef)(n, e), (0, u.safeInvoke)(a, e)
    }, [n, a]);
  return r.useEffect(function() {
    return function() {
      return (0, u.setRef)(n, null)
    }
  }, []), r.useEffect(function() {
    o(!!a, "`Reference` should not be used outside of a `Manager` component.")
  }, [a]), (0, u.unwrapArray)(t)({
    ref: s
  })
}