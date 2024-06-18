"use strict";
n.d(t, {
  Z: function() {
    return E
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(717881),
  o = n(906732),
  a = n(199902),
  l = n(785717),
  u = n(221292),
  _ = n(659101),
  c = n(981631),
  d = n(710598);

function E(e) {
  let {
    activity: t,
    user: n,
    guild: E,
    channelId: I,
    onClose: T,
    analyticsParams: h
  } = e, {
    analyticsLocations: S
  } = (0, o.ZP)(), {
    trackUserProfileAction: f,
    ...N
  } = (0, l.KZ)(), A = (0, r.e7)([a.Z], () => null != a.Z.getAnyStreamForUser(n.id));
  return (0, i.jsx)(_.Z, {
    children: (0, i.jsx)(s.Z, {
      type: s.P.USER_POPOUT_V2,
      activity: t,
      className: d.activity,
      user: n,
      guildId: null == E ? void 0 : E.id,
      channelId: I,
      source: c.Sbl.PROFILE_POPOUT,
      onOpenGameProfile: T,
      onAction: () => {
        f({
          action: "JOIN_ACTIVITY"
        }), (0, u.Ac)({
          activityType: A ? c.IIU.STREAMING : null == t ? void 0 : t.type,
          activityName: null == t ? void 0 : t.name,
          activityPlatform: null == t ? void 0 : t.platform,
          activitySessionId: null == t ? void 0 : t.session_id,
          applicationId: null == t ? void 0 : t.application_id,
          analyticsLocations: S,
          ...N
        }), null == T || T()
      },
      actionColor: d.buttonColor,
      analyticsParams: h
    })
  })
}