"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("470079"),
  u = n("442837"),
  i = n("480608"),
  a = n("243730");
let d = {};

function s(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = (0, u.useStateFromStores)([a.default], () => a.default.getRoleMemberCount(e));
  return l.useEffect(() => {
    if (null == e) return;
    let n = d[e];
    !(null != n && t > 0 && Date.now() - n < t) && (d[e] = Date.now(), i.fetchMemberCounts(e))
  }, [e, t]), n
}