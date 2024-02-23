"use strict";
n.r(t), n.d(t, {
  VideoSpinnerContext: function() {
    return l
  },
  VideoSpinnerTimer: function() {
    return p
  }
}), n("222007");
var l, a, s = n("811022"),
  i = n("398183"),
  r = n("271938"),
  o = n("42203"),
  u = n("985365"),
  d = n("945956"),
  c = n("800762"),
  f = n("599110"),
  h = n("49111");
(a = l || (l = {})).SELF_VIDEO = "self_video", a.SELF_STREAM = "self_stream", a.REMOTE_VIDEO = "remote_video", a.REMOTE_STREAM = "remote_stream", a.CHANGE_VIDEO_BACKGROUND = "change_video_background", a.VIDEO_PLAYER = "video_player", a.REPLAY_VIDEO_STREAM = "replay_video_stream";
let m = new Map;
class p {
  onSpinnerStarted() {
    null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, i.now)())
  }
  trackSpinnerDuration(e, t, n) {
    if (null == this.spinnerVisibleStart) return;
    let l = function(e) {
        var t;
        let n = (null !== (t = m.get(e)) && void 0 !== t ? t : 0) + 1;
        return m.set(e, n), n
      }(n),
      a = (0, i.now)() - this.spinnerVisibleStart;
    if (this.spinnerVisibleStart = null, a < 0) {
      this.logger.warn("spinner duration is negative: ".concat(a, " ms\n        [").concat(e, ", count for stream: ").concat(l, "]"));
      return
    }
    this.logger.info("spinner visible for ".concat(a, " ms\n      [").concat(e, ", count for stream: ").concat(l, "]"));
    let s = d.default.getGuildId(),
      p = c.default.getUserVoiceChannelId(s, r.default.getId()),
      E = function(e) {
        if (null != e) {
          if (e.isGuildVoice()) return "guild_voice";
          if (e.isGuildStageVoice()) return "is_stage_channel";
          if (e.isDM()) return "dm";
          if (e.isGroupDM()) return "group_dm"
        }
        return null
      }(o.default.getChannel(p));
    f.default.track(h.AnalyticEvents.VIDEO_SPINNER_SHOWN_V2, {
      video_spinner_context: e,
      duration_video_spinner_visible_ms: a,
      rtc_connection_id: d.default.getRTCConnectionId(),
      media_session_id: d.default.getMediaSessionId(),
      event_count_for_stream: l,
      guild_id: s,
      channel_id: p,
      channel_type: E,
      spinning_user_id: t,
      connection_type: u.default.getType(),
      effective_connection_speed: u.default.getEffectiveConnectionSpeed(),
      service_provider: u.default.getServiceProvider()
    })
  }
  constructor(e) {
    this.spinnerVisibleStart = null, this.logger = new s.default(e)
  }
}