"use strict";
n.r(t), n.d(t, {
  getVideoButtonLabel: function() {
    return s
  }
});
var a = n("49111"),
  r = n("782340");

function s(e) {
  let {
    enabled: t,
    join: n,
    channel: s,
    cameraUnavailable: i,
    hasPermission: l,
    channelLimit: o = -1,
    channelLimitReached: u = !1
  } = e, d = t ? r.default.Messages.CAMERA_OFF : r.default.Messages.CAMERA_ON;
  if (n) {
    let e = (null == s ? void 0 : s.isManaged()) || !(null == s ? void 0 : s.isPrivate());
    d = e ? r.default.Messages.CONNECT_TO_VIDEO : r.default.Messages.JOIN_VIDEO_CALL
  }
  return i && (d = r.default.Messages.CAMERA_UNAVAILABLE), !l && (d = r.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE), u && !t && (d = (null == s ? void 0 : s.isGuildStageVoice()) ? o >= a.MAX_STAGE_VIDEO_USER_LIMIT_TIER3 ? r.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED_MAX : r.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED : r.default.Messages.CAMERA_DISABLED_LIMIT_REACHED.format({
    limit: o
  })), d
}