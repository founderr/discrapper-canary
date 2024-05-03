"use strict";
n.r(l), n.d(l, {
  default: function() {
    return u
  }
});
var t = n("470079"),
  s = n("442837"),
  a = n("749210"),
  i = n("594174");

function u(e) {
  let l = (0, s.useStateFromStores)([i.default], () => i.default.getUser(null == e ? void 0 : e.creator_id), [e]);
  return t.useEffect(() => {
    null == l && (null == e ? void 0 : e.creator_id) != null && a.default.requestMembersById(e.guild_id, e.creator_id)
  }, [e, l]), l
}