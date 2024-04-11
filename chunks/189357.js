"use strict";
s.r(t), s.d(t, {
  canAccessGuildMemberModViewWithExperiment: function() {
    return l
  },
  useCanAccessGuildMemberModView: function() {
    return I
  }
}), s("47120");
var E = s("149765"),
  _ = s("442837"),
  a = s("430824"),
  n = s("594174"),
  T = s("700785"),
  i = s("686692"),
  u = s("478743");
let A = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.default, n.default];
    if (null == e) return !1;
    let [s, _] = t, i = s.getGuild(e);
    if (null == i) return !1;
    let A = _.getCurrentUser();
    return E.hasAny(T.computePermissions({
      user: A,
      context: i,
      checkElevated: !1
    }), u.MemberSafetyPagePermissions)
  },
  l = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      s = arguments.length > 2 ? arguments[2] : void 0;
    if (null == e) return !1;
    let E = A(e),
      _ = (0, i.isInGuildMemberModViewExperiment)(e, {
        autoTrackExposure: t,
        disable: !E,
        location: s
      });
    return E && _
  };

function I(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    s = arguments.length > 2 ? arguments[2] : void 0,
    E = (0, _.useStateFromStores)([a.default, n.default], () => A(e, [a.default, n.default]), [e]),
    T = (0, i.useGuildMemberModViewExperiment)(e, {
      autoTrackExposure: t,
      disable: !E,
      location: s
    });
  return E && T
}