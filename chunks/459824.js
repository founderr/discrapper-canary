"use strict";
E.r(t), E.d(t, {
  canAccessGuildMemberModViewWithExperiment: function() {
    return i
  },
  useCanAccessGuildMemberModView: function() {
    return l
  }
}), E("222007");
var _ = E("316693"),
  s = E("446674"),
  a = E("305961"),
  T = E("697218"),
  n = E("991170"),
  A = E("209700"),
  u = E("562980");
let I = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.default, T.default];
    if (null == e) return !1;
    let [E, s] = t, A = E.getGuild(e);
    if (null == A) return !1;
    let I = s.getCurrentUser(),
      i = _.default.hasAny(n.default.computePermissions({
        user: I,
        context: A,
        checkElevated: !1
      }), u.MemberSafetyPagePermissions);
    return i
  },
  i = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      E = arguments.length > 2 ? arguments[2] : void 0;
    if (null == e) return !1;
    let _ = I(e),
      s = (0, A.isInGuildMemberModViewExperiment)(e, {
        autoTrackExposure: t,
        disable: !_,
        location: E
      });
    return _ && s
  };

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    E = arguments.length > 2 ? arguments[2] : void 0,
    _ = (0, s.useStateFromStores)([a.default, T.default], () => I(e, [a.default, T.default]), [e]),
    n = (0, A.useGuildMemberModViewExperiment)(e, {
      autoTrackExposure: t,
      disable: !_,
      location: E
    });
  return _ && n
}