"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("884691"),
  a = n("550766"),
  s = n("126939"),
  i = n("702173");
let r = e => null != e && "" !== e;

function o(e, t) {
  let n = (0, s.useIsActivitiesEnabledForCurrentPlatform)(null != t ? t : void 0),
    o = (0, i.default)(t),
    u = r(e) || o;
  l.useEffect(() => {
    u && n && (0, a.fetchShelf)({
      guildId: e
    })
  }, [e, n, u]);
  let d = u && n;
  return d
}