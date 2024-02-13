"use strict";
n.r(t), n.d(t, {
  getVideoButtonLabel: function() {
    return i
  }
});
var a = n("49111"),
  r = n("782340");

function i(e) {
  let {
    enabled: t,
    join: n,
    channel: i,
    cameraUnavailable: s,
    hasPermission: l,
    channelLimit: u = -1,
    channelLimitReached: o = !1
  } = e, d = t ? r.default.Messages.CAMERA_OFF : r.default.Messages.CAMERA_ON;
  if (n) {
    let e = (null == i ? void 0 : i.isManaged()) || !(null == i ? void 0 : i.isPrivate());
    d = e ? r.default.Messages.CONNECT_TO_VIDEO : r.default.Messages.JOIN_VIDEO_CALL
  }
  return s && (d = r.default.Messages.CAMERA_UNAVAILABLE), !l && (d = r.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE), o && !t && (d = (null == i ? void 0 : i.isGuildStageVoice()) ? u >= a.MAX_STAGE_VIDEO_USER_LIMIT_TIER3 ? r.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED_MAX : r.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED : r.default.Messages.CAMERA_DISABLED_LIMIT_REACHED.format({
    limit: u
  })), d
}