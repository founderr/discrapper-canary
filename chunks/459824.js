"use strict";
n.r(t), n.d(t, {
  canAccessGuildMemberModViewWithExperiment: function() {
    return d
  },
  useCanAccessGuildMemberModView: function() {
    return f
  }
}), n("222007");
var l = n("316693"),
  i = n("446674"),
  r = n("305961"),
  s = n("697218"),
  o = n("991170"),
  u = n("209700"),
  a = n("562980");
let c = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, s.default],
      [n, i] = t,
      u = n.getGuild(e);
    if (null == u) return !1;
    let c = i.getCurrentUser(),
      d = l.default.hasAny(o.default.computePermissions({
        user: c,
        context: u,
        checkElevated: !1
      }), a.MemberSafetyPagePermissions);
    return d
  },
  d = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : void 0,
      l = c(e),
      i = (0, u.isInGuildMemberModViewExperiment)(e, {
        autoTrackExposure: t,
        disable: !l,
        location: n
      });
    return l && i
  };

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0,
    l = (0, i.useStateFromStores)([r.default, s.default], () => c(e, [r.default, s.default]), [e]),
    o = (0, u.useGuildMemberModViewExperiment)(e, {
      autoTrackExposure: t,
      disable: !l,
      location: n
    });
  return l && o
}