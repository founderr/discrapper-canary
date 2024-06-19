n.d(t, {
  m: function() {
    return l
  },
  o: function() {
    return g
  }
}), n(47120);
var l, i, s = n(259443),
  a = n(379649),
  r = n(314897),
  o = n(592125),
  c = n(866960),
  u = n(19780),
  d = n(979651),
  h = n(626135),
  m = n(981631);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(i = l || (l = {})).SELF_VIDEO = "self_video", i.SELF_STREAM = "self_stream", i.REMOTE_VIDEO = "remote_video", i.REMOTE_STREAM = "remote_stream", i.CHANGE_VIDEO_BACKGROUND = "change_video_background", i.VIDEO_PLAYER = "video_player", i.REPLAY_VIDEO_STREAM = "replay_video_stream";
let E = new Map;
class g {
  onSpinnerStarted() {
    null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, a.zO)())
  }
  trackSpinnerDuration(e, t, n) {
    if (null == this.spinnerVisibleStart) return;
    let l = function(e) {
        var t;
        let n = (null !== (t = E.get(e)) && void 0 !== t ? t : 0) + 1;
        return E.set(e, n), n
      }(n),
      i = (0, a.zO)() - this.spinnerVisibleStart;
    if (this.spinnerVisibleStart = null, i < 0) {
      this.logger.warn("spinner duration is negative: ".concat(i, " ms\n        [").concat(e, ", count for stream: ").concat(l, "]"));
      return
    }
    this.logger.info("spinner visible for ".concat(i, " ms\n      [").concat(e, ", count for stream: ").concat(l, "]"));
    let s = u.Z.getGuildId(),
      p = d.Z.getUserVoiceChannelId(s, r.default.getId()),
      g = function(e) {
        if (null != e) {
          if (e.isGuildVoice()) return "guild_voice";
          if (e.isGuildStageVoice()) return "is_stage_channel";
          if (e.isDM()) return "dm";
          if (e.isGroupDM()) return "group_dm"
        }
        return null
      }(o.Z.getChannel(p));
    h.default.track(m.rMx.VIDEO_SPINNER_SHOWN_V2, {
      video_spinner_context: e,
      duration_video_spinner_visible_ms: i,
      rtc_connection_id: u.Z.getRTCConnectionId(),
      media_session_id: u.Z.getMediaSessionId(),
      event_count_for_stream: l,
      guild_id: s,
      channel_id: p,
      channel_type: g,
      spinning_user_id: t,
      connection_type: c.Z.getType(),
      effective_connection_speed: c.Z.getEffectiveConnectionSpeed(),
      service_provider: c.Z.getServiceProvider()
    })
  }
  constructor(e) {
    p(this, "logger", void 0), p(this, "spinnerVisibleStart", null), this.logger = new s.Y(e)
  }
}