"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
});
var n = l("470079"),
  u = l("442837"),
  a = l("480608"),
  d = l("243730");
let s = {};

function i(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    l = (0, u.useStateFromStores)([d.default], () => d.default.getRoleMemberCount(e));
  return n.useEffect(() => {
    if (null == e) return;
    let l = s[e];
    !(null != l && t > 0 && Date.now() - l < t) && (s[e] = Date.now(), a.fetchMemberCounts(e))
  }, [e, t]), l
}