"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("470079"),
  i = n("442837"),
  l = n("480608"),
  s = n("243730");
let o = {};

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = (0, i.useStateFromStores)([s.default], () => s.default.getRoleMemberCount(e));
  return r.useEffect(() => {
    if (null == e) return;
    let n = o[e];
    !(null != n && t > 0 && Date.now() - n < t) && (o[e] = Date.now(), l.fetchMemberCounts(e))
  }, [e, t]), n
}