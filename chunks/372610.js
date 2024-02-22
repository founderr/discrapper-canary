"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("884691"),
  a = n("550766"),
  s = n("126939"),
  i = n("702173");
let r = e => null != e && "" !== e;

function u(e, t) {
  let n = (0, s.useIsActivitiesEnabledForCurrentPlatform)(null != t ? t : void 0),
    u = (0, i.default)(t),
    o = r(e) || u;
  l.useEffect(() => {
    o && n && (0, a.fetchShelf)({
      guildId: e
    })
  }, [e, n, o]);
  let d = o && n;
  return d
}