"use strict";
a.r(t), a.d(t, {
  getInitialSubscriptionPayload: function() {
    return d
  }
});
var n = a("317381"),
  s = a("573979"),
  l = a("42352"),
  i = a("886355"),
  r = a("238679"),
  o = a("981631"),
  u = a("701488");
async function d(e, t, a) {
  var d, c;
  switch (t) {
    case o.RPCEvents.ACTIVITY_PIP_MODE_UPDATE: {
      let t = null === (d = e.application) || void 0 === d ? void 0 : d.id,
        a = null != t ? n.default.getLayoutModeForApp(t) : null;
      return null != a ? {
        is_pip_mode: a !== u.ActivityLayoutMode.FOCUSED
      } : null
    }
    case o.RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE: {
      let t = null === (c = e.application) || void 0 === c ? void 0 : c.id,
        a = null != t ? n.default.getLayoutModeForApp(t) : null;
      return null != a ? {
        layout_mode: a
      } : null
    }
    case o.RPCEvents.THERMAL_STATE_UPDATE: {
      let e = await (0, l.default)();
      if (null == e) return null;
      return {
        thermal_state: (0, s.default)(e)
      }
    }
    case o.RPCEvents.ORIENTATION_UPDATE: {
      let e = i.default.isScreenLandscape();
      if (null == e) return null;
      {
        let t = e ? u.ActivityScreenOrientation.LANDSCAPE : u.ActivityScreenOrientation.PORTRAIT,
          a = t === u.ActivityScreenOrientation.PORTRAIT ? "portrait" : "landscape";
        return {
          screen_orientation: t,
          orientation: a
        }
      }
    }
    case o.RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
      return (0, r.activityInstanceConnectedParticipants)();
    default:
      return null
  }
}