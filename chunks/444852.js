r.d(n, {
    A: function () {
        return w;
    },
    Z: function () {
        return P;
    }
});
var i = r(653041);
var a = r(392711),
    s = r.n(a),
    o = r(46973),
    l = r(570140),
    u = r(861687),
    c = r(437263),
    d = r(924557),
    f = r(435064),
    _ = r(631053),
    h = r(581567),
    p = r(594190),
    m = r(314897),
    g = r(592125),
    E = r(131951),
    v = r(866960),
    I = r(19780),
    T = r(936349),
    b = r(704806),
    y = r(626135),
    S = r(756315),
    A = r(569545),
    N = r(297733),
    C = r(981631),
    R = r(65154);
function O(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let D = 10,
    L = 1500000,
    x = 1500000;
class w {
    setActionContext(e) {
        this.actionContext = e;
    }
    trackViewerCount(e) {
        this.maxViewers = Math.max(e, this.maxViewers);
    }
    constructor({ streamRegion: e, streamApplication: n, streamSourceType: r, actionContext: i, numViewers: a }) {
        O(this, 'streamRegion', void 0), O(this, 'streamApplication', void 0), O(this, 'streamSourceType', void 0), O(this, 'actionContext', void 0), O(this, 'maxViewers', void 0), (this.streamRegion = e), (this.streamApplication = n), (this.streamSourceType = r), (this.actionContext = i), (this.maxViewers = a);
    }
}
class P extends u.Z {
    get isOwner() {
        let { ownerId: e } = this._streamContext;
        return m.default.getId() === e;
    }
    destroy(e) {
        this._videoStreamStats.stop(), this._trackVideoEndStats(e), this._updateVideoStreamId.cancel(), this._updateVideoStreamId(null, null), this._updateVideoStreamId.flush(), super.destroy();
    }
    streamUpdate(e) {
        let n = this._videoQuality;
        null != n && (e ? n.pause() : n.resume());
    }
    layoutChange(e) {
        this._videoStreamStats.layoutChange(e);
    }
    getVideoStats() {
        let { ownerId: e } = this._streamContext,
            n = this._videoQuality;
        if (null != n) {
            var r;
            let { duration: i, avg_bitrate: a, avg_fps: s, avg_resolution: o, inbound_bitrate_estimate_percentile99: l } = this.isOwner ? n.getOutboundStats()[0] : null !== (r = n.getInboundStats(e)) && void 0 !== r ? r : {};
            return {
                duration: i,
                avg_bitrate: a,
                avg_fps: s,
                avg_resolution: o,
                inbound_bitrate_estimate_percentile99: l
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
    getVoiceParticipantType() {
        return this.isOwner ? 'streamer' : 'receiver';
    }
    updateStats(e) {
        var n, r, i, a, o, l, u, c, d, f, _, h;
        let p;
        let m = !this.isOwner && (null === (n = this._goLiveQualityManager) || void 0 === n ? void 0 : n.getUserID()) != null,
            g = void 0 !== this._goliveCurrentMaxResolution && (this._goliveCurrentMaxResolution.height > 720 || 0 === this._goliveCurrentMaxResolution.height);
        let E = 'unknown',
            v = null === (r = e.find((e) => e.connection === this._connection)) || void 0 === r ? void 0 : r.stats;
        if (null != v && m) {
            let e = v.transport.inboundBitrateEstimate;
            null != e && e < 100000000 && (this._bandwidthSamples.push(e), this._bandwidthSamples.length > D && this._bandwidthSamples.shift(), this._bandwidthSamples.length === D && ((p = s().mean(this._bandwidthSamples)) > x ? (E = 'HQ') : p < L && (E = 'LQ')));
        }
        let I = null !== (a = null === (i = this._goLiveQualityManager) || void 0 === i ? void 0 : i.isDowngraded()) && void 0 !== a && a;
        if (('HQ' === E && I ? (this.logger.info('Attempting to upgrade to HQ simulcast stream, bandwidth estimate: '.concat(p)), null === (o = this._goLiveQualityManager) || void 0 === o || o.setGoLiveStreamDowngraded(!1)) : 'LQ' === E && !I && g && (this.logger.info('Attempting to downgrade to LQ simulcast stream, bandwidth estimate: '.concat(p)), null === (l = this._goLiveQualityManager) || void 0 === l || l.setGoLiveStreamDowngraded(!0)), m)) {
            let e = !(null === (u = this._goLiveQualityManager) || void 0 === u ? void 0 : u.senderSupportsSimulcast()) || (null === (c = this._goLiveQualityManager) || void 0 === c ? void 0 : c.isDowngraded()) === !1;
            null === (d = this._videoQuality) || void 0 === d || d.setViewedSimulcastQuality(e);
            let n = null !== (h = null === (f = this._goLiveQualityManager) || void 0 === f ? void 0 : f.isOneToOneCall()) && void 0 !== h && h,
                r = g && 'LQ' === E && !n;
            null === (_ = this._videoQuality) || void 0 === _ || _.setEligibleSimulcastQuality(!r);
        }
    }
    _initializeEvents() {
        let e = !1;
        this.on(c.z.State, (e, n, r) => {
            if (
                (l.Z.wait(() =>
                    l.Z.dispatch({
                        type: 'RTC_CONNECTION_STATE',
                        state: e,
                        ...n,
                        ...r,
                        streamKey: this._streamKey
                    })
                ),
                e === C.hes.RTC_CONNECTED)
            ) {
                var i;
                null === (i = this._connection) ||
                    void 0 === i ||
                    i.on(o.Sh.ScreenshareFinish, (e, n, r, i, a, s, o, l, u, c, d, f, _, m, g, E) => {
                        let v = this.getMediaSessionId(),
                            I = this.getRTCConnectionId(),
                            T = this.getGoLiveSource();
                        (0, b.q)().then((b) => {
                            var S, A, N;
                            let O = null;
                            if (null != b) {
                                let { cpu_brand: e, cpu_vendor: n, cpu_memory: r, gpu_brand: i, gpu_memory: a } = b;
                                O = {
                                    cpu_brand: e,
                                    cpu_vendor: n,
                                    cpu_memory: r,
                                    gpu_brand: i,
                                    gpu_memory: a
                                };
                            }
                            let D = (null != e ? e : 0) + (null != n ? n : 0) + (null != r ? r : 0) + (null != i ? i : 0) + (null != a ? a : 0) + (null != s ? s : 0) + (null != c ? c : 0) + (null != E ? E : 0) + (null != g ? g : 0),
                                L = (null == T ? void 0 : null === (S = T.desktopSource) || void 0 === S ? void 0 : S.sourcePid) != null ? p.ZP.getGameForPID(T.desktopSource.sourcePid) : null,
                                { gameName: x, gameId: w, exe: P, distributor: M } = (0, h.G8)(L);
                            y.default.track(C.rMx.SCREENSHARE_FINISHED, {
                                screenshare_frames: e,
                                videohook_frames: n,
                                hybrid_dxgi_frames: r,
                                hybrid_gdi_frames: i,
                                hybrid_videohook_frames: a,
                                hybrid_graphics_capture_frames: s,
                                hybrid_capture_method_switches: o,
                                hybrid_gdi_bitblt_frames: l,
                                hybrid_gdi_printwindow_frames: u,
                                quartz_frames: c,
                                screencapturekit_frames: E,
                                go_live_camera_frames: g,
                                total_frames: D,
                                desktop_capturer_type: d,
                                media_session_id: v,
                                rtc_connection_id: I,
                                context: R.Yn.STREAM,
                                screens: f,
                                windows: _,
                                activity: m,
                                soundshare_session: null !== (N = null == T ? void 0 : null === (A = T.desktopSource) || void 0 === A ? void 0 : A.soundshareSession) && void 0 !== N ? N : void 0,
                                share_game_name: x,
                                share_game_id: w,
                                share_game_exe: P,
                                share_game_distributor: M,
                                ...O
                            });
                        });
                    });
            }
        }),
            this.on(c.z.Video, (n, r, i, a, s) => {
                let o = (0, A.my)(this._streamKey);
                if (o.guildId === n && o.channelId === r && o.ownerId === i) null != this.getMediaSessionId() && !e && (this._trackVideoStartStats(), (e = !0)), this._updateVideoStreamId(a, s);
            }),
            this.on(c.z.VideoSourceQualityChanged, (e, n, r, i, a, s) => {
                var o;
                r === (null === (o = this._goLiveQualityManager) || void 0 === o ? void 0 : o.getUserID()) && (this._goliveCurrentMaxResolution = i),
                    l.Z.wait(() =>
                        l.Z.dispatch({
                            type: 'MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED',
                            guildId: e,
                            channelId: n,
                            senderUserId: r,
                            maxResolution: i,
                            maxFrameRate: a,
                            context: s
                        })
                    );
            }),
            this.on(c.z.SecureFramesUpdate, () => {
                l.Z.wait(() => {
                    l.Z.dispatch({ type: 'RTC_CONNECTION_SECURE_FRAMES_UPDATE' });
                });
            }),
            this.on(c.z.RosterMapUpdate, (e) => {
                l.Z.wait(() => {
                    l.Z.dispatch({
                        type: 'RTC_CONNECTION_ROSTER_MAP_UPDATE',
                        userIds: e
                    });
                });
            });
    }
    _getStreamAnalyticsProperties() {
        let { streamRegion: e, streamApplication: n, streamSourceType: r, actionContext: i } = this.analyticsContext,
            { ownerId: a, guildId: s } = this._streamContext,
            o = T.Z.getRegion(I.Z.getHostname()),
            { gameName: l, gameId: u, exe: c, distributor: d } = (0, h.G8)(n);
        return {
            channel_id: this.channelId,
            rtc_connection_id: this.getRTCConnectionId(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            sender_user_id: a,
            context: R.Yn.STREAM,
            guild_id: s,
            stream_region: e,
            stream_source_type: r,
            guild_region: o,
            participant_type: this.isOwner ? 'streamer' : 'receiver',
            share_application_name: l,
            share_application_id: u,
            share_application_executable: c,
            share_application_distributor: d,
            video_layout: this._videoStreamStats.getLayout(),
            client_event_source: i,
            voice_backend_version: this.voiceVersion,
            rtc_worker_backend_version: this.rtcWorkerVersion
        };
    }
    _trackVideoStartStats() {
        let e = this.isOwner ? (0, N.Z)() : null;
        y.default.track(C.rMx.VIDEO_STREAM_STARTED, {
            ...this._getStreamAnalyticsProperties(),
            ...e,
            connection_type: v.Z.getType(),
            effective_connection_speed: v.Z.getEffectiveConnectionSpeed(),
            service_provider: v.Z.getServiceProvider()
        });
    }
    _trackVideoEndStats(e) {
        let n = g.Z.getChannel(this.channelId),
            r = null != n ? n.type : null,
            { ownerId: i } = this._streamContext,
            a = null,
            s = null,
            o = this._videoQuality;
        if (null == o) return;
        (a = o.getNetworkStats()), (s = this.isOwner ? o.getCodecUsageStats('streamer', this.userId) : o.getCodecUsageStats('receiver', i));
        let l = null,
            u = (0, d.ln)(),
            c = f.Z.getSettings(),
            h = this.isOwner
                ? {
                      clips_enabled: c.clipsEnabled && u,
                      clips_buffer_length: c.clipsLength
                  }
                : {},
            p = this.isOwner ? { bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment() } : {};
        o.getOutboundStats().forEach((n) => {
            var i;
            (null !== (i = n.num_frames) && void 0 !== i ? i : 0) > 0 &&
                y.default.track(C.rMx.VIDEO_STREAM_ENDED, {
                    ...s,
                    ...a,
                    ...l,
                    ...this._videoStreamStats.getStats(),
                    ...n,
                    ...this._soundshareStats.getStats(),
                    ...this._getStreamAnalyticsProperties(),
                    ...h,
                    ...p,
                    channel_type: r,
                    reason: e,
                    max_viewers: this.analyticsContext.maxViewers,
                    hostname: this.hostname,
                    hardware_enabled: E.Z.getHardwareEncoding(),
                    device_performance_class: this.isOwner ? (0, _.Z)() : null
                });
        }),
            o.getInboundParticipants().forEach((n) => {
                var i;
                let u = o.getInboundStats(n);
                (null !== (i = null == u ? void 0 : u.num_frames) && void 0 !== i ? i : 0) > 0 &&
                    y.default.track(C.rMx.VIDEO_STREAM_ENDED, {
                        ...s,
                        ...a,
                        ...l,
                        ...this._videoStreamStats.getStats(),
                        ...u,
                        ...this._soundshareStats.getStats(),
                        ...this._getStreamAnalyticsProperties(),
                        ...h,
                        ...p,
                        channel_type: r,
                        reason: e,
                        max_viewers: this.analyticsContext.maxViewers,
                        hostname: this.hostname,
                        hardware_enabled: E.Z.getHardwareEncoding(),
                        device_performance_class: this.isOwner ? (0, _.Z)() : null
                    });
            });
    }
    _getExtraConnectionOptions() {
        return { streamUserId: (0, A.my)(this._streamKey).ownerId };
    }
    constructor({ sessionId: e, streamKey: n, serverId: r, initialLayout: i, analyticsContext: a, isStreamer: o, parentMediaSessionId: u }) {
        let c = (0, A.my)(n),
            { guildId: d, channelId: f } = c;
        super({
            userId: m.default.getId(),
            sessionId: e,
            guildId: d,
            channelId: f,
            context: R.Yn.STREAM,
            rtcServerId: r,
            parentMediaSessionId: u
        }),
            O(this, 'analyticsContext', void 0),
            O(this, '_videoStreamStats', void 0),
            O(this, '_streamContext', void 0),
            O(this, '_streamKey', void 0),
            O(this, '_isStreamer', void 0),
            O(this, '_updateVideoStreamId', void 0),
            O(this, '_bandwidthSamples', []),
            O(this, '_goliveCurrentMaxResolution', void 0),
            (this._streamContext = c),
            (this._streamKey = n),
            (this._isStreamer = o),
            (this._videoStreamStats = new S.Z(i, this.isOwner)),
            (this.analyticsContext = a),
            (this._updateVideoStreamId = s().debounce((e, n) => {
                let { guildId: r, channelId: i, ownerId: a } = (0, A.my)(this._streamKey);
                l.Z.wait(() =>
                    l.Z.dispatch({
                        type: 'RTC_CONNECTION_VIDEO',
                        guildId: r,
                        channelId: i,
                        userId: a,
                        streamId: e,
                        rtcServerId: n,
                        context: R.Yn.STREAM
                    })
                );
            }, 200)),
            this._videoStreamStats.start(),
            this._initializeEvents();
    }
}
