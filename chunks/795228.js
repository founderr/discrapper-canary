"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("884691"),
  u = n("446674"),
  r = n("895026"),
  i = n("36402");
let a = {};

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = (0, u.useStateFromStores)([i.default], () => i.default.getRoleMemberCount(e));
  return l.useEffect(() => {
    if (null == e) return;
    let n = a[e],
      l = null != n && t > 0 && Date.now() - n < t;
    !l && (a[e] = Date.now(), r.fetchMemberCounts(e))
  }, [e, t]), n
}