"use strict";
n.r(t), n.d(t, {
  StreamRTCAnalyticsContext: function() {
    return D
  },
  default: function() {
    return M
  }
}), n("653041"), n("47120");
var i = n("392711"),
  r = n.n(i),
  s = n("46973"),
  a = n("570140"),
  o = n("861687"),
  l = n("437263"),
  u = n("924557"),
  d = n("435064"),
  _ = n("811660"),
  c = n("581567"),
  E = n("594190"),
  I = n("695346"),
  T = n("314897"),
  f = n("592125"),
  S = n("131951"),
  h = n("866960"),
  A = n("19780"),
  m = n("936349"),
  N = n("704806"),
  p = n("626135"),
  O = n("756315"),
  C = n("569545"),
  R = n("297733"),
  g = n("981631"),
  L = n("65154");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class D {
  setActionContext(e) {
    this.actionContext = e
  }
  trackViewerCount(e) {
    this.maxViewers = Math.max(e, this.maxViewers)
  }
  constructor({
    streamRegion: e,
    streamApplication: t,
    streamSourceType: n,
    actionContext: i,
    numViewers: r,
    isBroadcast: s = !1
  }) {
    v(this, "streamRegion", void 0), v(this, "streamApplication", void 0), v(this, "streamSourceType", void 0), v(this, "actionContext", void 0), v(this, "maxViewers", void 0), v(this, "isBroadcast", void 0), this.streamRegion = e, this.streamApplication = t, this.streamSourceType = n, this.actionContext = i, this.maxViewers = r, this.isBroadcast = s
  }
}
class M extends o.default {
  get isOwner() {
    let {
      ownerId: e
    } = this._streamContext;
    return T.default.getId() === e
  }
  destroy(e) {
    this._videoStreamStats.stop(), this._trackVideoEndStats(e), this._updateVideoStreamId.cancel(), this._updateVideoStreamId(null, null), this._updateVideoStreamId.flush(), super.destroy()
  }
  streamUpdate(e) {
    let t = this._videoQuality;
    null != t && (e ? t.pause() : t.resume())
  }
  layoutChange(e) {
    this._videoStreamStats.layoutChange(e)
  }
  getVideoStats() {
    let {
      ownerId: e
    } = this._streamContext, t = this._videoQuality;
    if (null != t) {
      var n;
      let {
        duration: i,
        avg_bitrate: r,
        avg_fps: s,
        avg_resolution: a
      } = this.isOwner ? t.getOutboundStats()[0] : null !== (n = t.getInboundStats(e)) && void 0 !== n ? n : {};
      return {
        duration: i,
        avg_bitrate: r,
        avg_fps: s,
        avg_resolution: a
      }
    }
    return null
  }
  getRegion() {
    return this.analyticsContext.streamRegion
  }
  getMaxViewers() {
    return this.analyticsContext.maxViewers
  }
  updateStats(e) {
    for (let {
        connection: n,
        stats: i
      }
      of e)
      if (n === this._connection) {
        let e = i.transport.inboundBitrateEstimate;
        if (null != e) {
          if (e > 1e8) break;
          if (this._bandwidthSamples.push(e), this._bandwidthSamples.length > 15 && this._bandwidthSamples.shift(), 15 === this._bandwidthSamples.length) {
            var t;
            let e = r().mean(this._bandwidthSamples);
            null === (t = this._goLiveQualityManager) || void 0 === t || t.setGoLiveStreamDowngraded(e < 1e6)
          }
          break
        }
      }
  }
  _initializeEvents() {
    let e = !1;
    this.on(l.RTCConnectionEvent.State, (e, t, n) => {
      if (a.default.wait(() => a.default.dispatch({
          type: "RTC_CONNECTION_STATE",
          state: e,
          ...t,
          ...n,
          streamKey: this._streamKey
        })), e === g.RTCConnectionStates.RTC_CONNECTED) {
        var i;
        null === (i = this._connection) || void 0 === i || i.on(s.BaseConnectionEvent.ScreenshareFinish, (e, t, n, i, r, s, a, o, l, u, d, _, I, T) => {
          let f = this.getMediaSessionId(),
            S = this.getRTCConnectionId(),
            h = this.getGoLiveSource();
          (0, N.getSystemAnalyticsInfo)().then(A => {
            var m, N, O;
            let C = null;
            if (null != A) {
              let {
                cpu_brand: e,
                cpu_vendor: t,
                cpu_memory: n,
                gpu_brand: i,
                gpu_memory: r
              } = A;
              C = {
                cpu_brand: e,
                cpu_vendor: t,
                cpu_memory: n,
                gpu_brand: i,
                gpu_memory: r
              }
            }
            let R = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != i ? i : 0) + (null != r ? r : 0) + (null != s ? s : 0) + (null != o ? o : 0) + (null != T ? T : 0) + (null != I ? I : 0),
              v = (null == h ? void 0 : null === (m = h.desktopSource) || void 0 === m ? void 0 : m.sourcePid) != null ? E.default.getGameForPID(h.desktopSource.sourcePid) : null,
              {
                gameName: D,
                gameId: M,
                exe: y,
                distributor: P
              } = (0, c.getRunningGameAnalytics)(v);
            p.default.track(g.AnalyticEvents.SCREENSHARE_FINISHED, {
              screenshare_frames: e,
              videohook_frames: t,
              hybrid_dxgi_frames: n,
              hybrid_gdi_frames: i,
              hybrid_videohook_frames: r,
              hybrid_graphics_capture_frames: s,
              hybrid_capture_method_switches: a,
              quartz_frames: o,
              screencapturekit_frames: T,
              go_live_camera_frames: I,
              total_frames: R,
              desktop_capturer_type: l,
              media_session_id: f,
              rtc_connection_id: S,
              context: L.MediaEngineContextTypes.STREAM,
              screens: u,
              windows: d,
              activity: _,
              soundshare_session: null !== (O = null == h ? void 0 : null === (N = h.desktopSource) || void 0 === N ? void 0 : N.soundshareSession) && void 0 !== O ? O : void 0,
              share_game_name: D,
              share_game_id: M,
              share_game_exe: y,
              share_game_distributor: P,
              ...C
            })
          })
        })
      }
    }), this.on(l.RTCConnectionEvent.Video, (t, n, i, r, s) => {
      let a = (0, C.decodeStreamKey)(this._streamKey);
      a.guildId === t && a.channelId === n && a.ownerId === i && (null != this.getMediaSessionId() && !e && (this._trackVideoStartStats(), e = !0), this._updateVideoStreamId(r, s))
    }), this.on(l.RTCConnectionEvent.VideoSourceQualityChanged, (e, t, n, i, r, s) => {
      a.default.wait(() => a.default.dispatch({
        type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
        guildId: e,
        channelId: t,
        senderUserId: n,
        maxResolution: i,
        maxFrameRate: r,
        context: s
      }))
    })
  }
  _getStreamAnalyticsProperties() {
    let {
      streamRegion: e,
      streamApplication: t,
      streamSourceType: n,
      actionContext: i,
      isBroadcast: r
    } = this.analyticsContext, {
      ownerId: s,
      guildId: a
    } = this._streamContext, o = m.default.getRegion(A.default.getHostname()), l = I.BroadcastAutoBroadcast.getSetting(), {
      gameName: u,
      gameId: d,
      exe: _,
      distributor: E
    } = (0, c.getRunningGameAnalytics)(t);
    return {
      channel_id: this.channelId,
      rtc_connection_id: this.getRTCConnectionId(),
      media_session_id: this.getMediaSessionId(),
      parent_media_session_id: this.parentMediaSessionId,
      sender_user_id: s,
      context: L.MediaEngineContextTypes.STREAM,
      guild_id: a,
      stream_region: e,
      stream_source_type: n,
      guild_region: o,
      participant_type: this.isOwner ? "streamer" : "receiver",
      share_application_name: u,
      share_application_id: d,
      share_application_executable: _,
      share_application_distributor: E,
      video_layout: this._videoStreamStats.getLayout(),
      client_event_source: i,
      is_broadcast: r,
      auto_broadcast_enabled: this.isOwner ? l : null,
      voice_backend_version: this.voiceVersion,
      rtc_worker_backend_version: this.rtcWorkerVersion
    }
  }
  _trackVideoStartStats() {
    let e = this.isOwner ? (0, R.default)() : null;
    p.default.track(g.AnalyticEvents.VIDEO_STREAM_STARTED, {
      ...this._getStreamAnalyticsProperties(),
      ...e,
      connection_type: h.default.getType(),
      effective_connection_speed: h.default.getEffectiveConnectionSpeed(),
      service_provider: h.default.getServiceProvider()
    })
  }
  _trackVideoEndStats(e) {
    let t = f.default.getChannel(this.channelId),
      n = null != t ? t.type : null,
      {
        ownerId: i
      } = this._streamContext,
      r = null,
      s = null,
      a = this._videoQuality;
    if (null == a) return;
    r = a.getNetworkStats(), s = this.isOwner ? a.getCodecUsageStats("streamer", this.userId) : a.getCodecUsageStats("receiver", i);
    let o = (0, u.areClipsEnabled)(),
      l = d.default.getSettings(),
      c = this.isOwner ? {
        clips_enabled: l.clipsEnabled && o,
        clips_buffer_length: l.clipsLength
      } : {},
      E = this.isOwner ? {
        bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment()
      } : {};
    a.getOutboundStats().forEach(t => {
      var i;
      (null !== (i = t.num_frames) && void 0 !== i ? i : 0) > 0 && p.default.track(g.AnalyticEvents.VIDEO_STREAM_ENDED, {
        ...t,
        ...s,
        ...r,
        ...this._videoStreamStats.getStats(),
        ...this._soundshareStats.getStats(),
        ...this._getStreamAnalyticsProperties(),
        ...c,
        ...E,
        channel_type: n,
        reason: e,
        max_viewers: this.analyticsContext.maxViewers,
        hostname: this.hostname,
        hardware_enabled: S.default.getHardwareH264(),
        device_performance_class: this.isOwner ? (0, _.getMediaPerformanceClass)() : null
      })
    }), a.getInboundParticipants().forEach(t => {
      var i;
      let o = a.getInboundStats(t);
      (null !== (i = null == o ? void 0 : o.num_frames) && void 0 !== i ? i : 0) > 0 && p.default.track(g.AnalyticEvents.VIDEO_STREAM_ENDED, {
        ...o,
        ...s,
        ...r,
        ...this._videoStreamStats.getStats(),
        ...this._soundshareStats.getStats(),
        ...this._getStreamAnalyticsProperties(),
        ...c,
        ...E,
        channel_type: n,
        reason: e,
        max_viewers: this.analyticsContext.maxViewers,
        hostname: this.hostname,
        hardware_enabled: S.default.getHardwareH264(),
        device_performance_class: this.isOwner ? (0, _.getMediaPerformanceClass)() : null
      })
    })
  }
  _getExtraConnectionOptions() {
    return {
      streamUserId: (0, C.decodeStreamKey)(this._streamKey).ownerId
    }
  }
  constructor({
    sessionId: e,
    streamKey: t,
    serverId: n,
    initialLayout: i,
    analyticsContext: s,
    isStreamer: o,
    parentMediaSessionId: l
  }) {
    let u = (0, C.decodeStreamKey)(t),
      {
        guildId: d,
        channelId: _
      } = u;
    super({
      userId: T.default.getId(),
      sessionId: e,
      guildId: d,
      channelId: _,
      context: L.MediaEngineContextTypes.STREAM,
      rtcServerId: n,
      parentMediaSessionId: l
    }), v(this, "analyticsContext", void 0), v(this, "_videoStreamStats", void 0), v(this, "_streamContext", void 0), v(this, "_streamKey", void 0), v(this, "_isStreamer", void 0), v(this, "_updateVideoStreamId", void 0), v(this, "_bandwidthSamples", []), this._streamContext = u, this._streamKey = t, this._isStreamer = o, this._videoStreamStats = new O.default(i, this.isOwner), this.analyticsContext = s, this._updateVideoStreamId = r().debounce((e, t) => {
      let {
        guildId: n,
        channelId: i,
        ownerId: r
      } = (0, C.decodeStreamKey)(this._streamKey);
      a.default.wait(() => a.default.dispatch({
        type: "RTC_CONNECTION_VIDEO",
        guildId: n,
        channelId: i,
        userId: r,
        streamId: e,
        rtcServerId: t,
        context: L.MediaEngineContextTypes.STREAM
      }))
    }, 200), this._videoStreamStats.start(), this._initializeEvents()
  }
}