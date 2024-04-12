"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("470079"),
  r = n("442837"),
  l = n("480608"),
  s = n("243730");
let u = {};

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = (0, r.useStateFromStores)([s.default], () => s.default.getRoleMemberCount(e));
  return i.useEffect(() => {
    if (null == e) return;
    let n = u[e];
    !(null != n && t > 0 && Date.now() - n < t) && (u[e] = Date.now(), l.fetchMemberCounts(e))
  }, [e, t]), n
}