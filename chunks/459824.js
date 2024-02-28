"use strict";
n.r(t), n.d(t, {
  canAccessGuildMemberModViewWithExperiment: function() {
    return c
  },
  useCanAccessGuildMemberModView: function() {
    return E
  }
}), n("222007");
var i = n("316693"),
  l = n("446674"),
  u = n("305961"),
  a = n("697218"),
  r = n("991170"),
  d = n("209700"),
  o = n("562980");
let s = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.default, a.default];
    if (null == e) return !1;
    let [n, l] = t, d = n.getGuild(e);
    if (null == d) return !1;
    let s = l.getCurrentUser(),
      c = i.default.hasAny(r.default.computePermissions({
        user: s,
        context: d,
        checkElevated: !1
      }), o.MemberSafetyPagePermissions);
    return c
  },
  c = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : void 0;
    if (null == e) return !1;
    let i = s(e),
      l = (0, d.isInGuildMemberModViewExperiment)(e, {
        autoTrackExposure: t,
        disable: !i,
        location: n
      });
    return i && l
  };

function E(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0,
    i = (0, l.useStateFromStores)([u.default, a.default], () => s(e, [u.default, a.default]), [e]),
    r = (0, d.useGuildMemberModViewExperiment)(e, {
      autoTrackExposure: t,
      disable: !i,
      location: n
    });
  return i && r
}