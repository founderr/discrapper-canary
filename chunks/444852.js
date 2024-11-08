n.d(t, {
    A: function () {
        return R;
    },
    Z: function () {
        return O;
    }
}),
    n(653041);
var r = n(392711),
    i = n.n(r),
    a = n(46973),
    s = n(570140),
    o = n(861687),
    l = n(437263),
    u = n(924557),
    c = n(435064),
    d = n(811660),
    f = n(581567),
    _ = n(594190),
    h = n(314897),
    p = n(592125),
    m = n(131951),
    g = n(866960),
    E = n(19780),
    v = n(936349),
    I = n(704806),
    S = n(626135),
    b = n(756315),
    T = n(569545),
    y = n(297733),
    A = n(981631),
    N = n(65154);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class R {
    setActionContext(e) {
        this.actionContext = e;
    }
    trackViewerCount(e) {
        this.maxViewers = Math.max(e, this.maxViewers);
    }
    constructor({ streamRegion: e, streamApplication: t, streamSourceType: n, actionContext: r, numViewers: i }) {
        C(this, 'streamRegion', void 0), C(this, 'streamApplication', void 0), C(this, 'streamSourceType', void 0), C(this, 'actionContext', void 0), C(this, 'maxViewers', void 0), (this.streamRegion = e), (this.streamApplication = t), (this.streamSourceType = n), (this.actionContext = r), (this.maxViewers = i);
    }
}
class O extends o.Z {
    get isOwner() {
        let { ownerId: e } = this._streamContext;
        return h.default.getId() === e;
    }
    destroy(e) {
        this._videoStreamStats.stop(), this._trackVideoEndStats(e), this._updateVideoStreamId.cancel(), this._updateVideoStreamId(null, null), this._updateVideoStreamId.flush(), super.destroy();
    }
    streamUpdate(e) {
        let t = this._videoQuality;
        null != t && (e ? t.pause() : t.resume());
    }
    layoutChange(e) {
        this._videoStreamStats.layoutChange(e);
    }
    getVideoStats() {
        let { ownerId: e } = this._streamContext,
            t = this._videoQuality;
        if (null != t) {
            var n;
            let { duration: r, avg_bitrate: i, avg_fps: a, avg_resolution: s, inbound_bitrate_estimate_percentile99: o } = this.isOwner ? t.getOutboundStats()[0] : null !== (n = t.getInboundStats(e)) && void 0 !== n ? n : {};
            return {
                duration: r,
                avg_bitrate: i,
                avg_fps: a,
                avg_resolution: s,
                inbound_bitrate_estimate_percentile99: o
            };
        }
        return null;
    }
    getRegion() {
        return this.analyticsContext.streamRegion;
    }
    getMaxViewers() {
        return this.analyticsContext.maxViewers;
    }
    updateStats(e) {
        var t, n, r, a, s, o, l, u, c, d, f, _;
        let h;
        let p = !this.isOwner && (null === (t = this._goLiveQualityManager) || void 0 === t ? void 0 : t.getUserID()) != null;
        let m = 'unknown',
            g = null === (n = e.find((e) => e.connection === this._connection)) || void 0 === n ? void 0 : n.stats;
        if (null != g && p) {
            let e = g.transport.inboundBitrateEstimate;
            null != e && e < 100000000 && (this._bandwidthSamples.push(e), this._bandwidthSamples.length > 10 && this._bandwidthSamples.shift(), 10 === this._bandwidthSamples.length && ((h = i().mean(this._bandwidthSamples)) > 1500000 ? (m = 'HQ') : h < 1500000 && (m = 'LQ')));
        }
        let E = null !== (a = null === (r = this._goLiveQualityManager) || void 0 === r ? void 0 : r.isDowngraded()) && void 0 !== a && a;
        if (('HQ' === m && E ? (this.logger.info('Attempting to upgrade to HQ simulcast stream, bandwidth estimate: '.concat(h)), null === (s = this._goLiveQualityManager) || void 0 === s || s.setGoLiveStreamDowngraded(!1)) : 'LQ' === m && !E && (this.logger.info('Attempting to downgrade to LQ simulcast stream, bandwidth estimate: '.concat(h)), null === (o = this._goLiveQualityManager) || void 0 === o || o.setGoLiveStreamDowngraded(!0)), p)) {
            let e = !(null === (l = this._goLiveQualityManager) || void 0 === l ? void 0 : l.senderSupportsSimulcast()) || (null === (u = this._goLiveQualityManager) || void 0 === u ? void 0 : u.isDowngraded()) === !1;
            null === (c = this._videoQuality) || void 0 === c || c.setViewedSimulcastQuality(e);
            let t = null !== (_ = null === (d = this._goLiveQualityManager) || void 0 === d ? void 0 : d.isOneToOneCall()) && void 0 !== _ && _,
                n = 'LQ' !== m || !!t;
            null === (f = this._videoQuality) || void 0 === f || f.setEligibleSimulcastQuality(n);
        }
    }
    _initializeEvents() {
        let e = !1;
        this.on(l.z.State, (e, t, n) => {
            if (
                (s.Z.wait(() =>
                    s.Z.dispatch({
                        type: 'RTC_CONNECTION_STATE',
                        state: e,
                        ...t,
                        ...n,
                        streamKey: this._streamKey
                    })
                ),
                e === A.hes.RTC_CONNECTED)
            ) {
                var r;
                null === (r = this._connection) ||
                    void 0 === r ||
                    r.on(a.Sh.ScreenshareFinish, (e, t, n, r, i, a, s, o, l, u, c, d, h, p, m, g) => {
                        let E = this.getMediaSessionId(),
                            v = this.getRTCConnectionId(),
                            b = this.getGoLiveSource();
                        (0, I.q)().then((I) => {
                            var T, y, C;
                            let R = null;
                            if (null != I) {
                                let { cpu_brand: e, cpu_vendor: t, cpu_memory: n, gpu_brand: r, gpu_memory: i } = I;
                                R = {
                                    cpu_brand: e,
                                    cpu_vendor: t,
                                    cpu_memory: n,
                                    gpu_brand: r,
                                    gpu_memory: i
                                };
                            }
                            let O = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != r ? r : 0) + (null != i ? i : 0) + (null != a ? a : 0) + (null != u ? u : 0) + (null != g ? g : 0) + (null != m ? m : 0),
                                D = (null == b ? void 0 : null === (T = b.desktopSource) || void 0 === T ? void 0 : T.sourcePid) != null ? _.ZP.getGameForPID(b.desktopSource.sourcePid) : null,
                                { gameName: L, gameId: x, exe: w, distributor: M } = (0, f.G8)(D);
                            S.default.track(A.rMx.SCREENSHARE_FINISHED, {
                                screenshare_frames: e,
                                videohook_frames: t,
                                hybrid_dxgi_frames: n,
                                hybrid_gdi_frames: r,
                                hybrid_videohook_frames: i,
                                hybrid_graphics_capture_frames: a,
                                hybrid_capture_method_switches: s,
                                hybrid_gdi_bitblt_frames: o,
                                hybrid_gdi_printwindow_frames: l,
                                quartz_frames: u,
                                screencapturekit_frames: g,
                                go_live_camera_frames: m,
                                total_frames: O,
                                desktop_capturer_type: c,
                                media_session_id: E,
                                rtc_connection_id: v,
                                context: N.Yn.STREAM,
                                screens: d,
                                windows: h,
                                activity: p,
                                soundshare_session: null !== (C = null == b ? void 0 : null === (y = b.desktopSource) || void 0 === y ? void 0 : y.soundshareSession) && void 0 !== C ? C : void 0,
                                share_game_name: L,
                                share_game_id: x,
                                share_game_exe: w,
                                share_game_distributor: M,
                                ...R
                            });
                        });
                    });
            }
        }),
            this.on(l.z.Video, (t, n, r, i, a) => {
                let s = (0, T.my)(this._streamKey);
                if (s.guildId === t && s.channelId === n && s.ownerId === r) null != this.getMediaSessionId() && !e && (this._trackVideoStartStats(), (e = !0)), this._updateVideoStreamId(i, a);
            }),
            this.on(l.z.VideoSourceQualityChanged, (e, t, n, r, i, a) => {
                s.Z.wait(() =>
                    s.Z.dispatch({
                        type: 'MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED',
                        guildId: e,
                        channelId: t,
                        senderUserId: n,
                        maxResolution: r,
                        maxFrameRate: i,
                        context: a
                    })
                );
            }),
            this.on(l.z.SecureFramesUpdate, () => {
                s.Z.wait(() => {
                    s.Z.dispatch({ type: 'RTC_CONNECTION_SECURE_FRAMES_UPDATE' });
                });
            }),
            this.on(l.z.RosterMapUpdate, (e) => {
                s.Z.wait(() => {
                    s.Z.dispatch({
                        type: 'RTC_CONNECTION_ROSTER_MAP_UPDATE',
                        userIds: e
                    });
                });
            });
    }
    _getStreamAnalyticsProperties() {
        let { streamRegion: e, streamApplication: t, streamSourceType: n, actionContext: r } = this.analyticsContext,
            { ownerId: i, guildId: a } = this._streamContext,
            s = v.Z.getRegion(E.Z.getHostname()),
            { gameName: o, gameId: l, exe: u, distributor: c } = (0, f.G8)(t);
        return {
            channel_id: this.channelId,
            rtc_connection_id: this.getRTCConnectionId(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            sender_user_id: i,
            context: N.Yn.STREAM,
            guild_id: a,
            stream_region: e,
            stream_source_type: n,
            guild_region: s,
            participant_type: this.isOwner ? 'streamer' : 'receiver',
            share_application_name: o,
            share_application_id: l,
            share_application_executable: u,
            share_application_distributor: c,
            video_layout: this._videoStreamStats.getLayout(),
            client_event_source: r,
            voice_backend_version: this.voiceVersion,
            rtc_worker_backend_version: this.rtcWorkerVersion
        };
    }
    _trackVideoStartStats() {
        let e = this.isOwner ? (0, y.Z)() : null;
        S.default.track(A.rMx.VIDEO_STREAM_STARTED, {
            ...this._getStreamAnalyticsProperties(),
            ...e,
            connection_type: g.Z.getType(),
            effective_connection_speed: g.Z.getEffectiveConnectionSpeed(),
            service_provider: g.Z.getServiceProvider()
        });
    }
    _trackVideoEndStats(e) {
        let t = p.Z.getChannel(this.channelId),
            n = null != t ? t.type : null,
            { ownerId: r } = this._streamContext,
            i = null,
            a = null,
            s = this._videoQuality;
        if (null == s) return;
        (i = s.getNetworkStats()), (a = this.isOwner ? s.getCodecUsageStats('streamer', this.userId) : s.getCodecUsageStats('receiver', r));
        let o = (0, u.ln)(),
            l = c.Z.getSettings(),
            f = this.isOwner
                ? {
                      clips_enabled: l.clipsEnabled && o,
                      clips_buffer_length: l.clipsLength
                  }
                : {},
            _ = this.isOwner ? { bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment() } : {};
        s.getOutboundStats().forEach((t) => {
            var r;
            (null !== (r = t.num_frames) && void 0 !== r ? r : 0) > 0 &&
                S.default.track(A.rMx.VIDEO_STREAM_ENDED, {
                    ...a,
                    ...i,
                    ...this._videoStreamStats.getStats(),
                    ...t,
                    ...this._soundshareStats.getStats(),
                    ...this._getStreamAnalyticsProperties(),
                    ...f,
                    ..._,
                    channel_type: n,
                    reason: e,
                    max_viewers: this.analyticsContext.maxViewers,
                    hostname: this.hostname,
                    hardware_enabled: m.Z.getHardwareEncoding(),
                    device_performance_class: this.isOwner ? (0, d.R)() : null
                });
        }),
            s.getInboundParticipants().forEach((t) => {
                var r;
                let o = s.getInboundStats(t);
                (null !== (r = null == o ? void 0 : o.num_frames) && void 0 !== r ? r : 0) > 0 &&
                    S.default.track(A.rMx.VIDEO_STREAM_ENDED, {
                        ...a,
                        ...i,
                        ...this._videoStreamStats.getStats(),
                        ...o,
                        ...this._soundshareStats.getStats(),
                        ...this._getStreamAnalyticsProperties(),
                        ...f,
                        ..._,
                        channel_type: n,
                        reason: e,
                        max_viewers: this.analyticsContext.maxViewers,
                        hostname: this.hostname,
                        hardware_enabled: m.Z.getHardwareEncoding(),
                        device_performance_class: this.isOwner ? (0, d.R)() : null
                    });
            });
    }
    _getExtraConnectionOptions() {
        return { streamUserId: (0, T.my)(this._streamKey).ownerId };
    }
    constructor({ sessionId: e, streamKey: t, serverId: n, initialLayout: r, analyticsContext: a, isStreamer: o, parentMediaSessionId: l }) {
        let u = (0, T.my)(t),
            { guildId: c, channelId: d } = u;
        super({
            userId: h.default.getId(),
            sessionId: e,
            guildId: c,
            channelId: d,
            context: N.Yn.STREAM,
            rtcServerId: n,
            parentMediaSessionId: l
        }),
            C(this, 'analyticsContext', void 0),
            C(this, '_videoStreamStats', void 0),
            C(this, '_streamContext', void 0),
            C(this, '_streamKey', void 0),
            C(this, '_isStreamer', void 0),
            C(this, '_updateVideoStreamId', void 0),
            C(this, '_bandwidthSamples', []),
            (this._streamContext = u),
            (this._streamKey = t),
            (this._isStreamer = o),
            (this._videoStreamStats = new b.Z(r, this.isOwner)),
            (this.analyticsContext = a),
            (this._updateVideoStreamId = i().debounce((e, t) => {
                let { guildId: n, channelId: r, ownerId: i } = (0, T.my)(this._streamKey);
                s.Z.wait(() =>
                    s.Z.dispatch({
                        type: 'RTC_CONNECTION_VIDEO',
                        guildId: n,
                        channelId: r,
                        userId: i,
                        streamId: e,
                        rtcServerId: t,
                        context: N.Yn.STREAM
                    })
                );
            }, 200)),
            this._videoStreamStats.start(),
            this._initializeEvents();
    }
}
