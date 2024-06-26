"use strict";
n.d(t, {
  Z: function() {
    return f
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(717881),
  l = n(906732),
  u = n(199902),
  _ = n(158776),
  c = n(594174),
  d = n(332390),
  E = n(785717),
  I = n(221292),
  T = n(981631),
  h = n(387690);

function f(e) {
  let {
    user: t,
    guild: n,
    channelId: r,
    onClose: f
  } = e, {
    analyticsLocations: S,
    newestAnalyticsLocation: N
  } = (0, l.ZP)(), {
    trackUserProfileAction: A,
    ...m
  } = (0, E.KZ)(), O = (0, o.e7)([c.default], () => c.default.getCurrentUser()), {
    messageCtaEnabled: p
  } = (0, d.l)({
    location: "BiteSizeProfileActivitySection"
  }), {
    isApplicationStreaming: R,
    activity: g
  } = (0, o.cj)([u.Z, _.Z], () => {
    let e = null != u.Z.getAnyStreamForUser(t.id);
    return {
      isApplicationStreaming: e,
      activity: e ? _.Z.findActivity(t.id, e => {
        let {
          type: t
        } = e;
        return t === T.IIU.PLAYING
      }) : _.Z.findActivity(t.id, e => {
        let {
          type: t
        } = e;
        return t !== T.IIU.CUSTOM_STATUS
      })
    }
  });
  return (0, i.jsx)(a.Z, {
    type: a.P.BITE_SIZE_POPOUT,
    activity: g,
    className: h.activity,
    source: N,
    user: t,
    guildId: null == n ? void 0 : n.id,
    channelId: r,
    onOpenGameProfile: f,
    onAction: () => {
      A({
        action: "JOIN_ACTIVITY"
      }), (0, I.Ac)({
        activityType: R ? T.IIU.STREAMING : null == g ? void 0 : g.type,
        activityName: null == g ? void 0 : g.name,
        activityPlatform: null == g ? void 0 : g.platform,
        activitySessionId: null == g ? void 0 : g.session_id,
        applicationId: null == g ? void 0 : g.application_id,
        analyticsLocations: S,
        ...m
      }), null == f || f()
    },
    showActions: t.id !== (null == O ? void 0 : O.id),
    actionColor: s()(h.buttonColor, p ? h.engagementExpButtonColor : void 0),
    showChannelDetails: !0
  })
}