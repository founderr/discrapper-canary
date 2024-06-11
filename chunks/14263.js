"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("470079"),
  l = n("442837"),
  r = n("480608"),
  a = n("243730");
let o = {};

function s(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = (0, l.useStateFromStores)([a.default], () => a.default.getRoleMemberCount(e));
  return i.useEffect(() => {
    if (null == e) return;
    let n = o[e];
    !(null != n && t > 0 && Date.now() - n < t) && (o[e] = Date.now(), r.fetchMemberCounts(e))
  }, [e, t]), n
}