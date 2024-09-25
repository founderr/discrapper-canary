n.d(t, {
    A: function () {
        return M;
    },
    Z: function () {
        return P;
    }
});
var r = n(653041);
var i = n(392711),
    a = n.n(i),
    o = n(46973),
    s = n(570140),
    l = n(861687),
    u = n(437263),
    c = n(924557),
    d = n(435064),
    _ = n(811660),
    E = n(581567),
    f = n(594190),
    h = n(314897),
    p = n(592125),
    m = n(131951),
    I = n(866960),
    T = n(19780),
    g = n(936349),
    S = n(704806),
    A = n(626135),
    v = n(756315),
    N = n(569545),
    O = n(297733),
    R = n(981631),
    C = n(65154);
function y(e, t, n) {
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
let b = 10,
    L = 1000000,
    D = 1500000;
class M {
    setActionContext(e) {
        this.actionContext = e;
    }
    trackViewerCount(e) {
        this.maxViewers = Math.max(e, this.maxViewers);
    }
    constructor({ streamRegion: e, streamApplication: t, streamSourceType: n, actionContext: r, numViewers: i }) {
        y(this, 'streamRegion', void 0), y(this, 'streamApplication', void 0), y(this, 'streamSourceType', void 0), y(this, 'actionContext', void 0), y(this, 'maxViewers', void 0), (this.streamRegion = e), (this.streamApplication = t), (this.streamSourceType = n), (this.actionContext = r), (this.maxViewers = i);
    }
}
class P extends l.Z {
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
            let { duration: r, avg_bitrate: i, avg_fps: a, avg_resolution: o } = this.isOwner ? t.getOutboundStats()[0] : null !== (n = t.getInboundStats(e)) && void 0 !== n ? n : {};
            return {
                duration: r,
                avg_bitrate: i,
                avg_fps: a,
                avg_resolution: o
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
        var t, n, r, i, o, s, l, u, c, d, _, E;
        let f;
        let h = !this.isOwner && (null === (t = this._goLiveQualityManager) || void 0 === t ? void 0 : t.getUserID()) != null;
        let p = 'unknown',
            m = null === (n = e.find((e) => e.connection === this._connection)) || void 0 === n ? void 0 : n.stats;
        if (null != m && h) {
            let e = m.transport.inboundBitrateEstimate;
            null != e && e < 100000000 && (this._bandwidthSamples.push(e), this._bandwidthSamples.length > b && this._bandwidthSamples.shift(), this._bandwidthSamples.length === b && ((f = a().mean(this._bandwidthSamples)) > D ? (p = 'HQ') : f < L && (p = 'LQ')));
        }
        let I = null !== (i = null === (r = this._goLiveQualityManager) || void 0 === r ? void 0 : r.isDowngraded()) && void 0 !== i && i;
        if (('HQ' === p && I ? (this.logger.info('Attempting to upgrade to HQ simulcast stream, bandwidth estimate: '.concat(f)), null === (o = this._goLiveQualityManager) || void 0 === o || o.setGoLiveStreamDowngraded(!1)) : 'LQ' === p && !I && (this.logger.info('Attempting to downgrade to LQ simulcast stream, bandwidth estimate: '.concat(f)), null === (s = this._goLiveQualityManager) || void 0 === s || s.setGoLiveStreamDowngraded(!0)), h)) {
            let e = !(null === (l = this._goLiveQualityManager) || void 0 === l ? void 0 : l.senderSupportsSimulcast()) || (null === (u = this._goLiveQualityManager) || void 0 === u ? void 0 : u.isDowngraded()) === !1;
            null === (c = this._videoQuality) || void 0 === c || c.setViewedSimulcastQuality(e);
            let t = null !== (E = null === (d = this._goLiveQualityManager) || void 0 === d ? void 0 : d.isOneToOneCall()) && void 0 !== E && E,
                n = 'LQ' !== p || !!t;
            null === (_ = this._videoQuality) || void 0 === _ || _.setEligibleSimulcastQuality(n);
        }
    }
    _initializeEvents() {
        let e = !1;
        this.on(u.z.State, (e, t, n) => {
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
                e === R.hes.RTC_CONNECTED)
            ) {
                var r;
                null === (r = this._connection) ||
                    void 0 === r ||
                    r.on(o.Sh.ScreenshareFinish, (e, t, n, r, i, a, o, s, l, u, c, d, _, h, p, m) => {
                        let I = this.getMediaSessionId(),
                            T = this.getRTCConnectionId(),
                            g = this.getGoLiveSource();
                        (0, S.q)().then((S) => {
                            var v, N, O;
                            let y = null;
                            if (null != S) {
                                let { cpu_brand: e, cpu_vendor: t, cpu_memory: n, gpu_brand: r, gpu_memory: i } = S;
                                y = {
                                    cpu_brand: e,
                                    cpu_vendor: t,
                                    cpu_memory: n,
                                    gpu_brand: r,
                                    gpu_memory: i
                                };
                            }
                            let b = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != r ? r : 0) + (null != i ? i : 0) + (null != a ? a : 0) + (null != u ? u : 0) + (null != m ? m : 0) + (null != p ? p : 0),
                                L = (null == g ? void 0 : null === (v = g.desktopSource) || void 0 === v ? void 0 : v.sourcePid) != null ? f.ZP.getGameForPID(g.desktopSource.sourcePid) : null,
                                { gameName: D, gameId: M, exe: P, distributor: U } = (0, E.G8)(L);
                            A.default.track(R.rMx.SCREENSHARE_FINISHED, {
                                screenshare_frames: e,
                                videohook_frames: t,
                                hybrid_dxgi_frames: n,
                                hybrid_gdi_frames: r,
                                hybrid_videohook_frames: i,
                                hybrid_graphics_capture_frames: a,
                                hybrid_capture_method_switches: o,
                                hybrid_gdi_bitblt_frames: s,
                                hybrid_gdi_printwindow_frames: l,
                                quartz_frames: u,
                                screencapturekit_frames: m,
                                go_live_camera_frames: p,
                                total_frames: b,
                                desktop_capturer_type: c,
                                media_session_id: I,
                                rtc_connection_id: T,
                                context: C.Yn.STREAM,
                                screens: d,
                                windows: _,
                                activity: h,
                                soundshare_session: null !== (O = null == g ? void 0 : null === (N = g.desktopSource) || void 0 === N ? void 0 : N.soundshareSession) && void 0 !== O ? O : void 0,
                                share_game_name: D,
                                share_game_id: M,
                                share_game_exe: P,
                                share_game_distributor: U,
                                ...y
                            });
                        });
                    });
            }
        }),
            this.on(u.z.Video, (t, n, r, i, a) => {
                let o = (0, N.my)(this._streamKey);
                if (o.guildId === t && o.channelId === n && o.ownerId === r) null != this.getMediaSessionId() && !e && (this._trackVideoStartStats(), (e = !0)), this._updateVideoStreamId(i, a);
            }),
            this.on(u.z.VideoSourceQualityChanged, (e, t, n, r, i, a) => {
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
            this.on(u.z.SecureFramesUpdate, () => {
                s.Z.wait(() => {
                    s.Z.dispatch({ type: 'RTC_CONNECTION_SECURE_FRAMES_UPDATE' });
                });
            }),
            this.on(u.z.RosterMapUpdate, (e) => {
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
            o = g.Z.getRegion(T.Z.getHostname()),
            { gameName: s, gameId: l, exe: u, distributor: c } = (0, E.G8)(t);
        return {
            channel_id: this.channelId,
            rtc_connection_id: this.getRTCConnectionId(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            sender_user_id: i,
            context: C.Yn.STREAM,
            guild_id: a,
            stream_region: e,
            stream_source_type: n,
            guild_region: o,
            participant_type: this.isOwner ? 'streamer' : 'receiver',
            share_application_name: s,
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
        let e = this.isOwner ? (0, O.Z)() : null;
        A.default.track(R.rMx.VIDEO_STREAM_STARTED, {
            ...this._getStreamAnalyticsProperties(),
            ...e,
            connection_type: I.Z.getType(),
            effective_connection_speed: I.Z.getEffectiveConnectionSpeed(),
            service_provider: I.Z.getServiceProvider()
        });
    }
    _trackVideoEndStats(e) {
        let t = p.Z.getChannel(this.channelId),
            n = null != t ? t.type : null,
            { ownerId: r } = this._streamContext,
            i = null,
            a = null,
            o = this._videoQuality;
        if (null == o) return;
        (i = o.getNetworkStats()), (a = this.isOwner ? o.getCodecUsageStats('streamer', this.userId) : o.getCodecUsageStats('receiver', r));
        let s = null,
            l = (0, c.ln)(),
            u = d.Z.getSettings(),
            E = this.isOwner
                ? {
                      clips_enabled: u.clipsEnabled && l,
                      clips_buffer_length: u.clipsLength
                  }
                : {},
            f = this.isOwner ? { bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment() } : {};
        o.getOutboundStats().forEach((t) => {
            var r;
            (null !== (r = t.num_frames) && void 0 !== r ? r : 0) > 0 &&
                A.default.track(R.rMx.VIDEO_STREAM_ENDED, {
                    ...a,
                    ...i,
                    ...s,
                    ...this._videoStreamStats.getStats(),
                    ...t,
                    ...this._soundshareStats.getStats(),
                    ...this._getStreamAnalyticsProperties(),
                    ...E,
                    ...f,
                    channel_type: n,
                    reason: e,
                    max_viewers: this.analyticsContext.maxViewers,
                    hostname: this.hostname,
                    hardware_enabled: m.Z.getHardwareEncoding(),
                    device_performance_class: this.isOwner ? (0, _.R)() : null
                });
        }),
            o.getInboundParticipants().forEach((t) => {
                var r;
                let l = o.getInboundStats(t);
                (null !== (r = null == l ? void 0 : l.num_frames) && void 0 !== r ? r : 0) > 0 &&
                    A.default.track(R.rMx.VIDEO_STREAM_ENDED, {
                        ...a,
                        ...i,
                        ...s,
                        ...this._videoStreamStats.getStats(),
                        ...l,
                        ...this._soundshareStats.getStats(),
                        ...this._getStreamAnalyticsProperties(),
                        ...E,
                        ...f,
                        channel_type: n,
                        reason: e,
                        max_viewers: this.analyticsContext.maxViewers,
                        hostname: this.hostname,
                        hardware_enabled: m.Z.getHardwareEncoding(),
                        device_performance_class: this.isOwner ? (0, _.R)() : null
                    });
            });
    }
    _getExtraConnectionOptions() {
        return { streamUserId: (0, N.my)(this._streamKey).ownerId };
    }
    constructor({ sessionId: e, streamKey: t, serverId: n, initialLayout: r, analyticsContext: i, isStreamer: o, parentMediaSessionId: l }) {
        let u = (0, N.my)(t),
            { guildId: c, channelId: d } = u;
        super({
            userId: h.default.getId(),
            sessionId: e,
            guildId: c,
            channelId: d,
            context: C.Yn.STREAM,
            rtcServerId: n,
            parentMediaSessionId: l
        }),
            y(this, 'analyticsContext', void 0),
            y(this, '_videoStreamStats', void 0),
            y(this, '_streamContext', void 0),
            y(this, '_streamKey', void 0),
            y(this, '_isStreamer', void 0),
            y(this, '_updateVideoStreamId', void 0),
            y(this, '_bandwidthSamples', []),
            (this._streamContext = u),
            (this._streamKey = t),
            (this._isStreamer = o),
            (this._videoStreamStats = new v.Z(r, this.isOwner)),
            (this.analyticsContext = i),
            (this._updateVideoStreamId = a().debounce((e, t) => {
                let { guildId: n, channelId: r, ownerId: i } = (0, N.my)(this._streamKey);
                s.Z.wait(() =>
                    s.Z.dispatch({
                        type: 'RTC_CONNECTION_VIDEO',
                        guildId: n,
                        channelId: r,
                        userId: i,
                        streamId: e,
                        rtcServerId: t,
                        context: C.Yn.STREAM
                    })
                );
            }, 200)),
            this._videoStreamStats.start(),
            this._initializeEvents();
    }
}
