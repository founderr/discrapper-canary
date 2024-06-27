"use strict";
n.d(t, {
  A: function() {
    return D
  },
  Z: function() {
    return M
  }
}), n(653041), n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(46973),
  o = n(570140),
  a = n(861687),
  l = n(437263),
  u = n(924557),
  _ = n(435064),
  c = n(811660),
  d = n(581567),
  E = n(594190),
  I = n(695346),
  T = n(314897),
  h = n(592125),
  f = n(131951),
  S = n(866960),
  A = n(19780),
  N = n(936349),
  m = n(704806),
  O = n(626135),
  R = n(756315),
  p = n(569545),
  g = n(297733),
  C = n(981631),
  v = n(65154);

function L(e, t, n) {
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
    L(this, "streamRegion", void 0), L(this, "streamApplication", void 0), L(this, "streamSourceType", void 0), L(this, "actionContext", void 0), L(this, "maxViewers", void 0), L(this, "isBroadcast", void 0), this.streamRegion = e, this.streamApplication = t, this.streamSourceType = n, this.actionContext = i, this.maxViewers = r, this.isBroadcast = s
  }
}
class M extends a.Z {
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
        avg_resolution: o
      } = this.isOwner ? t.getOutboundStats()[0] : null !== (n = t.getInboundStats(e)) && void 0 !== n ? n : {};
      return {
        duration: i,
        avg_bitrate: r,
        avg_fps: s,
        avg_resolution: o
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
    var t, n, i, s, o, a;
    for (let {
        connection: t,
        stats: n
      }
      of e)
      if (t === this._connection) {
        let e = n.transport.inboundBitrateEstimate;
        if (null != e) {
          if (e > 1e8) break;
          if (this._bandwidthSamples.push(e), this._bandwidthSamples.length > 15 && this._bandwidthSamples.shift(), 15 === this._bandwidthSamples.length) {
            let e = r().mean(this._bandwidthSamples),
              t = null !== (s = null === (i = this._goLiveQualityManager) || void 0 === i ? void 0 : i.isDowngraded()) && void 0 !== s && s;
            t && e > 2e6 ? null === (o = this._goLiveQualityManager) || void 0 === o || o.setGoLiveStreamDowngraded(!1) : !t && e < 1e6 && (null === (a = this._goLiveQualityManager) || void 0 === a || a.setGoLiveStreamDowngraded(!0))
          }
          break
        }
      } null === (n = this._videoQuality) || void 0 === n || n.setViewedSimulcastQuality(!(null === (t = this._goLiveQualityManager) || void 0 === t ? void 0 : t.isDowngraded()))
  }
  _initializeEvents() {
    let e = !1;
    this.on(l.z.State, (e, t, n) => {
      if (o.Z.wait(() => o.Z.dispatch({
          type: "RTC_CONNECTION_STATE",
          state: e,
          ...t,
          ...n,
          streamKey: this._streamKey
        })), e === C.hes.RTC_CONNECTED) {
        var i;
        null === (i = this._connection) || void 0 === i || i.on(s.Sh.ScreenshareFinish, (e, t, n, i, r, s, o, a, l, u, _, c, I, T, h, f) => {
          let S = this.getMediaSessionId(),
            A = this.getRTCConnectionId(),
            N = this.getGoLiveSource();
          (0, m.q)().then(m => {
            var R, p, g;
            let L = null;
            if (null != m) {
              let {
                cpu_brand: e,
                cpu_vendor: t,
                cpu_memory: n,
                gpu_brand: i,
                gpu_memory: r
              } = m;
              L = {
                cpu_brand: e,
                cpu_vendor: t,
                cpu_memory: n,
                gpu_brand: i,
                gpu_memory: r
              }
            }
            let D = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != i ? i : 0) + (null != r ? r : 0) + (null != s ? s : 0) + (null != u ? u : 0) + (null != f ? f : 0) + (null != h ? h : 0),
              M = (null == N ? void 0 : null === (R = N.desktopSource) || void 0 === R ? void 0 : R.sourcePid) != null ? E.ZP.getGameForPID(N.desktopSource.sourcePid) : null,
              {
                gameName: P,
                gameId: y,
                exe: U,
                distributor: b
              } = (0, d.G8)(M);
            O.default.track(C.rMx.SCREENSHARE_FINISHED, {
              screenshare_frames: e,
              videohook_frames: t,
              hybrid_dxgi_frames: n,
              hybrid_gdi_frames: i,
              hybrid_videohook_frames: r,
              hybrid_graphics_capture_frames: s,
              hybrid_capture_method_switches: o,
              hybrid_gdi_bitblt_frames: a,
              hybrid_gdi_printwindow_frames: l,
              quartz_frames: u,
              screencapturekit_frames: f,
              go_live_camera_frames: h,
              total_frames: D,
              desktop_capturer_type: _,
              media_session_id: S,
              rtc_connection_id: A,
              context: v.Yn.STREAM,
              screens: c,
              windows: I,
              activity: T,
              soundshare_session: null !== (g = null == N ? void 0 : null === (p = N.desktopSource) || void 0 === p ? void 0 : p.soundshareSession) && void 0 !== g ? g : void 0,
              share_game_name: P,
              share_game_id: y,
              share_game_exe: U,
              share_game_distributor: b,
              ...L
            })
          })
        })
      }
    }), this.on(l.z.Video, (t, n, i, r, s) => {
      let o = (0, p.my)(this._streamKey);
      if (o.guildId === t && o.channelId === n && o.ownerId === i) null != this.getMediaSessionId() && !e && (this._trackVideoStartStats(), e = !0), this._updateVideoStreamId(r, s)
    }), this.on(l.z.VideoSourceQualityChanged, (e, t, n, i, r, s) => {
      o.Z.wait(() => o.Z.dispatch({
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
      guildId: o
    } = this._streamContext, a = N.Z.getRegion(A.Z.getHostname()), l = I.xd.getSetting(), {
      gameName: u,
      gameId: _,
      exe: c,
      distributor: E
    } = (0, d.G8)(t);
    return {
      channel_id: this.channelId,
      rtc_connection_id: this.getRTCConnectionId(),
      media_session_id: this.getMediaSessionId(),
      parent_media_session_id: this.parentMediaSessionId,
      sender_user_id: s,
      context: v.Yn.STREAM,
      guild_id: o,
      stream_region: e,
      stream_source_type: n,
      guild_region: a,
      participant_type: this.isOwner ? "streamer" : "receiver",
      share_application_name: u,
      share_application_id: _,
      share_application_executable: c,
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
    let e = this.isOwner ? (0, g.Z)() : null;
    O.default.track(C.rMx.VIDEO_STREAM_STARTED, {
      ...this._getStreamAnalyticsProperties(),
      ...e,
      connection_type: S.Z.getType(),
      effective_connection_speed: S.Z.getEffectiveConnectionSpeed(),
      service_provider: S.Z.getServiceProvider()
    })
  }
  _trackVideoEndStats(e) {
    let t = h.Z.getChannel(this.channelId),
      n = null != t ? t.type : null,
      {
        ownerId: i
      } = this._streamContext,
      r = null,
      s = null,
      o = this._videoQuality;
    if (null == o) return;
    r = o.getNetworkStats(), s = this.isOwner ? o.getCodecUsageStats("streamer", this.userId) : o.getCodecUsageStats("receiver", i);
    let a = (0, u.ln)(),
      l = _.Z.getSettings(),
      d = this.isOwner ? {
        clips_enabled: l.clipsEnabled && a,
        clips_buffer_length: l.clipsLength
      } : {},
      E = this.isOwner ? {
        bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment()
      } : {};
    o.getOutboundStats().forEach(t => {
      var i;
      (null !== (i = t.num_frames) && void 0 !== i ? i : 0) > 0 && O.default.track(C.rMx.VIDEO_STREAM_ENDED, {
        ...t,
        ...s,
        ...r,
        ...this._videoStreamStats.getStats(),
        ...this._soundshareStats.getStats(),
        ...this._getStreamAnalyticsProperties(),
        ...d,
        ...E,
        channel_type: n,
        reason: e,
        max_viewers: this.analyticsContext.maxViewers,
        hostname: this.hostname,
        hardware_enabled: f.Z.getHardwareEncoding(),
        device_performance_class: this.isOwner ? (0, c.R)() : null
      })
    }), o.getInboundParticipants().forEach(t => {
      var i;
      let a = o.getInboundStats(t);
      (null !== (i = null == a ? void 0 : a.num_frames) && void 0 !== i ? i : 0) > 0 && O.default.track(C.rMx.VIDEO_STREAM_ENDED, {
        ...a,
        ...s,
        ...r,
        ...this._videoStreamStats.getStats(),
        ...this._soundshareStats.getStats(),
        ...this._getStreamAnalyticsProperties(),
        ...d,
        ...E,
        channel_type: n,
        reason: e,
        max_viewers: this.analyticsContext.maxViewers,
        hostname: this.hostname,
        hardware_enabled: f.Z.getHardwareEncoding(),
        device_performance_class: this.isOwner ? (0, c.R)() : null
      })
    })
  }
  _getExtraConnectionOptions() {
    return {
      streamUserId: (0, p.my)(this._streamKey).ownerId
    }
  }
  constructor({
    sessionId: e,
    streamKey: t,
    serverId: n,
    initialLayout: i,
    analyticsContext: s,
    isStreamer: a,
    parentMediaSessionId: l
  }) {
    let u = (0, p.my)(t),
      {
        guildId: _,
        channelId: c
      } = u;
    super({
      userId: T.default.getId(),
      sessionId: e,
      guildId: _,
      channelId: c,
      context: v.Yn.STREAM,
      rtcServerId: n,
      parentMediaSessionId: l
    }), L(this, "analyticsContext", void 0), L(this, "_videoStreamStats", void 0), L(this, "_streamContext", void 0), L(this, "_streamKey", void 0), L(this, "_isStreamer", void 0), L(this, "_updateVideoStreamId", void 0), L(this, "_bandwidthSamples", []), this._streamContext = u, this._streamKey = t, this._isStreamer = a, this._videoStreamStats = new R.Z(i, this.isOwner), this.analyticsContext = s, this._updateVideoStreamId = r().debounce((e, t) => {
      let {
        guildId: n,
        channelId: i,
        ownerId: r
      } = (0, p.my)(this._streamKey);
      o.Z.wait(() => o.Z.dispatch({
        type: "RTC_CONNECTION_VIDEO",
        guildId: n,
        channelId: i,
        userId: r,
        streamId: e,
        rtcServerId: t,
        context: v.Yn.STREAM
      }))
    }, 200), this._videoStreamStats.start(), this._initializeEvents()
  }
}