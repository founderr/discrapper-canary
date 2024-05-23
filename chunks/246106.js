"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("442837"),
  r = n("314897"),
  s = n("317381"),
  a = n("613611");

function o(e) {
  let t = r.default.getId(),
    {
      userActivity: n,
      inActivity: o
    } = (0, i.useStateFromStoresObject)([s.default], () => {
      let n = s.default.getSelfEmbeddedActivityForChannel(e),
        i = s.default.getEmbeddedActivitiesForChannel(e).find(e => e.applicationId === (null == n ? void 0 : n.applicationId)),
        r = !1;
      if ((null == i ? void 0 : i.participants) != null) {
        var o;
        r = (null == i ? void 0 : null === (o = i.participants) || void 0 === o ? void 0 : o.find(e => (0, a.isActivityParticipantCurrentUserCurrentSession)(e))) != null
      } else(null == i ? void 0 : i.userIds) != null && (r = i.userIds.has(t));
      return {
        userActivity: n,
        inActivity: null != r && r
      }
    });
  return {
    userActivity: n,
    inActivity: o
  }
}