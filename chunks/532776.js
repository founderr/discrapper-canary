"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var s = l("470079"),
  i = l("442837"),
  a = l("621853");
let n = [];

function o(e) {
  let t = (0, i.useStateFromStores)([a.default], () => a.default.getUserProfile(e));
  return (0, s.useMemo)(() => (null == t ? void 0 : t.applicationRoleConnections) == null ? n : t.applicationRoleConnections, [null == t ? void 0 : t.applicationRoleConnections])
}