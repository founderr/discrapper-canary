n.d(t, {
    Z: function () {
        return eT;
    }
});
var r,
    i = n(411104);
var a = n(724458);
var o = n(653041);
var s = n(47120);
var l = n(654861),
    u = n.n(l),
    c = n(954955),
    d = n.n(c),
    _ = n(108131),
    E = n.n(_),
    f = n(729594),
    h = n(772848),
    p = n(261470),
    m = n(47770),
    I = n(46973),
    T = n(379649),
    g = n(570140),
    S = n(668781),
    A = n(846027),
    v = n(304680),
    N = n(547727),
    O = n(710845),
    R = n(811660),
    C = n(42352),
    y = n(148959),
    b = n(926951),
    L = n(868616),
    D = n(848886),
    M = n(583215),
    P = n(576574),
    U = n(307320);
n(527702);
var w = n(103645),
    x = n(615830),
    G = n(314897),
    k = n(592125),
    B = n(131951),
    F = n(19780),
    Z = n(226961),
    V = n(936349),
    H = n(594174),
    Y = n(626135),
    j = n(630388),
    W = n(931619),
    K = n(358085),
    z = n(579806),
    q = n(859401),
    Q = n(437263),
    X = n(423343),
    $ = n(685756),
    J = n(655306),
    ee = n(583794),
    et = n(824096),
    en = n(53114),
    er = n(174532),
    ei = n(895066),
    ea = n(798681),
    eo = n(981631),
    es = n(65154);
function el(e, t, n) {
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
let eu = /^https/.test(((r = 'https:'), 'https:')) ? 'wss:' : 'ws:',
    ec = 200,
    ed = 20,
    e_ = 500,
    eE = 250,
    ef = 10,
    eh = 5,
    ep = '1',
    em = 0;
function eI(e) {
    return e;
}
class eT extends m.Z {
    get quality() {
        let e = this.getLastPing();
        if (this.state !== eo.hes.RTC_CONNECTED || void 0 === e) return eo.IE4.UNKNOWN;
        if (e > e_ || (null != this._outboundLossRate && this._outboundLossRate > ef)) return eo.IE4.BAD;
        if (e > eE || (null != this._outboundLossRate && this._outboundLossRate > eh)) return eo.IE4.AVERAGE;
        else return eo.IE4.FINE;
    }
    get endpoint() {
        return this._endpoint;
    }
    set endpoint(e) {
        if (null == e) (this._endpoint = null), (this.hostname = null);
        else {
            e = ''.concat(eu, '//').concat(e);
            let { hostname: t, port: n } = f.parse(e),
                r = null != n ? parseInt(n) : NaN;
            null != t && (80 === r || 443 === r) && (e = ''.concat(eu, '//').concat(t)), (this._endpoint = e + '/'), (this.hostname = t);
        }
    }
    connect(e, t) {
        if (this._destroyed) throw Error('RTCConnection.connect(...): Attempting to connect on destroyed instance.');
        this._backoff.cancel();
        let { endpoint: n, token: r } = this;
        if (
            ((this.endpoint = e),
            (this.token = t),
            (n !== this.endpoint || r !== t) &&
                (this._cleanupSocket(),
                (this._mediaSessionId = null),
                null != n &&
                    ((this._rtcConnectionId = (0, h.Z)()),
                    g.Z.dispatch({
                        type: 'RTC_CONNECTION_UPDATE_ID',
                        connection: this
                    }))),
            null == this.endpoint)
        ) {
            this.setState(eo.hes.AWAITING_ENDPOINT);
            return;
        }
        let i = this._socket;
        null != i && this._cleanupSocket(), (i = this._socket = new $.Z(this.endpoint, this.context)).on($.V.Connecting, this._handleConnecting.bind(this, i)), i.on($.V.Connect, this._handleConnect.bind(this, i)), i.on($.V.Disconnect, this._handleDisconnect.bind(this, i)), i.on($.V.Resuming, this._handleResuming.bind(this, i)), i.on($.V.Ready, this._handleReady.bind(this, i)), i.on($.V.Speaking, this._handleSpeaking.bind(this, i)), i.on($.V.Video, this._handleVideo.bind(this, i)), i.on($.V.Ping, this._handleControlPing.bind(this)), i.on($.V.ClientDisconnect, this._handleClientDisconnect.bind(this)), i.on($.V.ClientConnect, this._handleClientConnect.bind(this)), i.on($.V.Codecs, this._handleCodecs.bind(this)), i.on($.V.MediaSessionId, this._handleMediaSessionId.bind(this)), i.on($.V.MediaSinkWants, this._handleMediaSinkWants.bind(this)), i.on($.V.VoiceBackendVersion, this._handleCodeVersion.bind(this)), i.on($.V.KeyframeInterval, this._handleKeyframeInterval.bind(this)), i.on($.V.Flags, this.handleFlags.bind(this)), i.on($.V.Platform, this.handlePlatform.bind(this)), i.on($.V.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)), i.on($.V.SecureFramesInit, this._handleSecureFramesInit.bind(this)), i.on($.V.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)), i.on($.V.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)), i.on($.V.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)), i.on($.V.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)), i.on($.V.MLSProposals, this._handleMLSProposals.bind(this, i)), i.on($.V.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)), i.on($.V.MLSWelcome, this._handleMLSWelcome.bind(this)), (this._connectStartTime = (0, T.zO)()), this._connectCount++, (this._connecting = !0), null != i && this._socket === i && (this._trackVoiceConnectionConnecting(), (this._encountered_socket_failure = !1), i.connect());
    }
    destroy() {
        var e, t, n, r, i, a;
        if ((this.logger.info('Destroy RTCConnection'), W.Z.removeOnlineCallback(this._handleNetworkOnline), W.Z.removeOfflineCallback(this._handleNetworkOffline), (0, K.isDesktop)() && (null === (i = (a = this).powerMonitorListener) || void 0 === i || i.call(a)), ea.w.off(ea.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged), ea.w.off(ea.e.WindowVisibilityChanged, this.windowVisibilityChanged), this._backoff.cancel(), this._cleanupSocket(), null === (e = this._voiceQuality) || void 0 === e || e.stop(), (this._voiceQuality = null), clearInterval(this._voiceQualityPeriodicStatsInterval), (this._voiceQualityPeriodicStatsInterval = null), (this._voiceQualityPeriodicStatsSequenceId = 0), (this._noiseCancellationError = 0), null === (t = this._voiceDuration) || void 0 === t || t.stop(), (this._voiceDuration = null), null === (n = this._videoQuality) || void 0 === n || n.stop(), (this._videoQuality = null), (this._videoHealthManager = null), (this._secureFramesState = null), null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.reset(), null != this._connection)) {
            let e = this._connection;
            (this._connection = null), e.destroy();
        }
        this.removeAllListeners(), (this._destroyed = !0);
    }
    shouldSendSpeaking(e, t) {
        if ((0, K.isWeb)() || !this._matchVoiceServerSpeakingLogic) return !0;
        let n = (0, j.yE)(e, es.Dg.PRIORITY),
            r = (0, j.yE)(this._lastSentSpeakingStatus, es.Dg.PRIORITY);
        if (this._lastSentSSRC === t && n === r) return !1;
        if (void 0 === this._lastSentSSRC && e === es.Dg.NONE) return !1;
        if (this._lastSentSSRC !== t && e === es.Dg.NONE) return !1;
        return (this._lastSentSpeakingStatus = e), (this._lastSentSSRC = t), !0;
    }
    sendSpeaking(e, t) {
        let n = this._socket;
        if (null == n || !this.shouldSendSpeaking(e, t)) return;
        let r = B.Z.getPacketDelay();
        n.speaking(e, r, t);
    }
    sendVideo(e, t, n, r) {
        let i = this._socket;
        null != i && (0 !== t && (this._sentVideo = !0), this._sentVideo && i.video(e, t, n, r));
    }
    getPings() {
        return this._pings;
    }
    getAveragePing() {
        let e = this._pings.slice(0, Math.min(this._pings.length, ed));
        return 0 === e.length || null == this._socket ? 0 : e.reduce((e, t) => e + t.value, 0) / e.length;
    }
    getLastPing() {
        var e;
        return null === (e = this._pings[this._pings.length - 1]) || void 0 === e ? void 0 : e.value;
    }
    getOutboundLossRate() {
        return this._outboundLossRate;
    }
    getMediaSessionId() {
        return this._mediaSessionId;
    }
    getRTCConnectionId() {
        return this._rtcConnectionId;
    }
    getVoiceVersion() {
        return this.voiceVersion;
    }
    getRtcWorkerVersion() {
        return this.rtcWorkerVersion;
    }
    getDuration() {
        let e = this._connectCompletedTime > 0 ? (0, T.zO)() - this._connectCompletedTime : 0;
        return e > 0 ? e : 0;
    }
    getPacketStats() {
        var e;
        return null === (e = this._voiceQuality) || void 0 === e ? void 0 : e.getPacketStats();
    }
    getCreatedTime() {
        return this._createdTime;
    }
    getSecureFramesState() {
        return this._secureFramesState;
    }
    getSecureFramesRosterMap() {
        return this._secureFramesRosterMap;
    }
    getUserIds() {
        return this._userIds;
    }
    getIsUserConnected(e) {
        return this._userIds.has(e);
    }
    getVideoHealthManager() {
        return this._videoHealthManager;
    }
    getBandwidthEstimationExperiment() {
        return this._bandwidthEstimationExperiment;
    }
    pauseStatsCollectionForUser(e, t) {
        let n = this.getOrCreateVideoQuality();
        if (null == n) {
            this.logger.error('pauseStatsCollectionForUser: Unable to create videoQuality.');
            return;
        }
        t ? n.addUserToStatsCollectionPausedSet(e) : n.removeUserFromStatsCollectionPausedSet(e);
    }
    setState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.logger.info('RTC connection state: '.concat(this.state, ' => ').concat(e)),
            (this.state = e),
            this.stateHistory.update(this.state),
            this.emit(
                Q.z.State,
                e,
                {
                    hostname: this.hostname,
                    channelId: this.trueChannelId,
                    context: this.context
                },
                t
            );
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = this._socket;
        null != r && r.expeditedHeartbeat(e, t, n) && this._backoff.cancel();
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            t = this._socket;
        null != t && t.resetBackoff(e) && this._backoff.cancel();
    }
    setAppBackgrounded(e, t) {
        var n;
        null === (n = this._localMediaSinkWantsManager) || void 0 === n || n.setAppBackgrounded(e, t);
    }
    setSelectedParticipant(e) {
        var t;
        null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.setSelectedParticipant(e);
    }
    setPipOpen(e) {
        var t;
        null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.setPipOpen(e);
    }
    setClipRecordUser(e, t, n) {
        var r, i;
        null === (i = this._connection) || void 0 === i || null === (r = i.setClipRecordUser) || void 0 === r || r.call(i, e, t, n);
    }
    setSimulcastDebugOverride(e, t, n) {
        var r, i;
        if (t === this.context) t === es.Yn.DEFAULT ? null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.setSimulcastDebugOverride(e, n) : null === (i = this._goLiveQualityManager) || void 0 === i || i.setSimulcastDebugOverride(n);
    }
    set channelId(e) {
        (this._channelId = e), this.channelIds.add(e);
    }
    get channelId() {
        return this._channelId;
    }
    get trueChannelId() {
        return null != this.rtcServerId ? u()(this.rtcServerId).prev().toString() : this.channelId;
    }
    _cleanupSocket() {
        let e = this._socket;
        null != e && (e.close(), e.removeAllListeners(), (this._socket = null));
    }
    _chooseExperiments(e) {
        let t = [];
        if ((this._recordingEnabled && t.push('connection_log'), null != this.guildId)) {
            let { shouldOverrideKrisp: e, overrideKrispSetting: n } = L.Z.getCurrentConfig(
                {
                    guildId: this.guildId,
                    location: 'handleReady'
                },
                { autoTrackExposure: !0 }
            );
            e && (n ? t.push('force_krisp_enabled') : t.push('force_krisp_disabled'));
        }
        if ((B.Z.supports(es.AN.FIXED_KEYFRAME_INTERVAL) && t.push('fixed_keyframe_interval'), 0 !== this._supportedBandwidthEstimationExperiments.length)) {
            let { enabled: e, fullname: n } = b.Z.getConfig(!0, this._supportedBandwidthEstimationExperiments);
            e && t.push(n);
        }
        this._selectedExperiments = t;
    }
    _handleConnecting(e) {
        null != this.endpoint && this.logger.info('Connecting to RTC server '.concat(this.endpoint, ', rtc-connection-id: ').concat(this.getRTCConnectionId())), this.setState(eo.hes.CONNECTING);
    }
    _handleConnect(e) {
        var t, n;
        let r = this.token;
        if (null == r) throw Error('RTCConnection._handleConnect(...): Token is missing.');
        this.logger.info('Connected to RTC server.'),
            e.identify({
                serverId: null !== (n = null !== (t = this.rtcServerId) && void 0 !== t ? t : this.guildId) && void 0 !== n ? n : this.channelId,
                userId: this.userId,
                sessionId: this.sessionId,
                token: r,
                maxDaveProtocolVersion: B.Z.getSupportedSecureFramesProtocolVersion(this.guildId),
                video: B.Z.supports(es.AN.VIDEO),
                streamParameters: B.Z.getVideoStreamParameters(this.context)
            }),
            this.setState(eo.hes.AUTHENTICATING);
    }
    _handleDisconnect(e, t, n, r) {
        var i, a, o, s, l, u;
        this.logger.info('Disconnected from RTC server, clean: '.concat(t, ', code: ').concat(n, ', reason: ').concat(r, ', state: ').concat(this.state)),
            !t &&
                this._connecting &&
                !this._encountered_socket_failure &&
                (Y.default.track(eo.rMx.VOICE_CONNECTION_SOCKET_FAILURE, {
                    ...this._getAnalyticsProperties(),
                    hostname: this.hostname,
                    connect_count: this._connectCount,
                    code: n,
                    reason: r
                }),
                (this._encountered_socket_failure = !0)),
            F.Z.getRemoteDisconnectVoiceChannelId() === this.channelId && (null === (l = this._connection) || void 0 === l || l.wasRemoteDisconnected());
        let c = 'Force Close' !== r;
        if (c) {
            let e = this._backoff.fail(this.reconnect);
            this.logger.warn('Disconnect was not clean! reason='.concat(r, '. Reconnecting in ').concat((e / 1000).toFixed(2), ' seconds.'));
        }
        if (this.state !== eo.hes.DISCONNECTED) {
            let e = this._videoQuality;
            null != e &&
                this.context === es.Yn.DEFAULT &&
                (e.stop(),
                this._sentVideo &&
                    e.getOutboundStats().forEach((t) => {
                        var n;
                        (null !== (n = t.num_frames) && void 0 !== n ? n : 0) > 0 &&
                            Y.default.track(eo.rMx.VIDEO_STREAM_ENDED, {
                                ...this._getAnalyticsProperties(),
                                media_session_id: this.getMediaSessionId(),
                                sender_user_id: this.userId,
                                reason: r,
                                participant_type: 'sender',
                                guild_region: V.Z.getRegion(this.hostname),
                                hostname: this.hostname,
                                hardware_enabled: B.Z.getHardwareEncoding(),
                                ...t,
                                ...e.getNetworkStats(),
                                ...e.getCodecUsageStats('sender', this.userId),
                                ...this._soundshareStats.getStats(),
                                device_performance_class: (0, R.R)()
                            });
                    }),
                e.getInboundParticipants().forEach((t) => {
                    var n;
                    let i = e.getInboundStats(t);
                    (null !== (n = null == i ? void 0 : i.num_frames) && void 0 !== n ? n : 0) > 0 &&
                        Y.default.track(eo.rMx.VIDEO_STREAM_ENDED, {
                            ...this._getAnalyticsProperties(),
                            media_session_id: this.getMediaSessionId(),
                            sender_user_id: t,
                            reason: r,
                            participant_type: 'receiver',
                            guild_region: V.Z.getRegion(this.hostname),
                            hostname: this.hostname,
                            hardware_enabled: B.Z.getHardwareEncoding(),
                            ...i,
                            ...e.getNetworkStats(),
                            ...e.getCodecUsageStats('receiver', t)
                        });
                }));
            let t = V.Z.shouldIncludePreferredRegion() ? V.Z.getPreferredRegion() : null,
                n = B.Z.getSettings(),
                i = k.Z.getChannel(this.channelId);
            Y.default.track(eo.rMx.VOICE_DISCONNECT, {
                ...this._getAnalyticsProperties(),
                hostname: this.hostname,
                port: this.port,
                protocol: this.protocol,
                reconnect: c,
                reason: r,
                duration: this.getDuration(),
                ...(null != this._voiceQuality ? this._voiceQuality.getMosStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getPacketStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getBytesStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getBufferStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getNetworkStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getSystemResourceStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getFrameOpStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getDurationStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getTransportStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getE2EEStats() : null),
                ...(null != this._voiceDuration ? this._voiceDuration.getDurationStats() : null),
                media_session_id: this.getMediaSessionId(),
                channel_bitrate: null != i ? i.bitrate : null,
                cloudflare_best_region: t,
                connect_count: this._connectCount,
                ping_average: Math.round(this.getAveragePing()),
                ping_bad_count: this._pingBadCount,
                ping_timeout: this._pingTimeouts.length,
                input_detected: this._inputDetected,
                no_input_detected_notice: B.Z.getNoInputDetectedNotice(),
                audio_input_mode: n.mode,
                automatic_audio_input_sensitivity_enabled: n.modeOptions.autoThreshold,
                audio_input_sensitivity: n.modeOptions.threshold,
                echo_cancellation_enabled: n.echoCancellation,
                sidechain_compression_enabled: n.sidechainCompression,
                noise_suppression_enabled: n.noiseSuppression,
                noise_cancellation_enabled: n.noiseCancellation,
                noise_canceller_error: this._noiseCancellationError,
                automatic_gain_control_enabled: n.automaticGainControl,
                voice_output_volume: n.outputVolume,
                encryption_mode: this._encryptionMode,
                channel_count: this.channelIds.size,
                input_device: this.getInputDeviceName(),
                input_device_count: Object.keys(B.Z.getInputDevices()).length,
                output_device: this.getOutputDeviceName(),
                output_device_count: Object.keys(B.Z.getOutputDevices()).length,
                device_performance_class: (0, R.R)(),
                num_fast_udp_reconnects: null != this._connection ? (null === (u = this._connection) || void 0 === u ? void 0 : u.getNumFastUdpReconnects()) : null,
                parent_media_session_id: this.parentMediaSessionId,
                audio_subsystem: B.Z.getMediaEngine().getAudioSubsystem(),
                audio_layer: B.Z.getMediaEngine().getAudioLayer(),
                automatic_audio_subsystem: n.automaticAudioSubsystem
            });
            let a = this.getMediaSessionId();
            B.Z.getMediaEngine()
                .getCodecSurvey()
                .then((e) => {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_encoders || null == t.available_video_decoders) throw Error('codec survey is not available');
                    Y.default.track(eo.rMx.VOICE_CODEC_DETECTED, {
                        ...t,
                        rtc_connection_id: this.getRTCConnectionId(),
                        media_session_id: a
                    });
                })
                .catch((e) => {
                    this.logger.warn(e);
                }),
                this._trackMLSFailures();
        }
        if (((this._pingTimeouts = []), (this._pings = []), (this._connectCompletedTime = 0), (this._pingBadCount = 0), (this._inputDetected = !1), (this._mediaSessionId = null), null === (i = this._voiceQuality) || void 0 === i || i.stop(), (this._voiceQuality = null), clearInterval(this._voiceQualityPeriodicStatsInterval), (this._voiceQualityPeriodicStatsInterval = null), (this._voiceQualityPeriodicStatsSequenceId = 0), (this._noiseCancellationError = 0), null === (a = this._voiceDuration) || void 0 === a || a.stop(), (this._voiceDuration = null), null === (o = this._videoQuality) || void 0 === o || o.stop(), (this._videoQuality = null), (this._videoHealthManager = null), null === (s = this._localMediaSinkWantsManager) || void 0 === s || s.reset(), (this._secureFramesState = null), (this._userIds = new Set([this.userId])), this._secureFramesRosterMap.clear(), null != this._connection)) {
            let e = this._connection;
            (this._connection = null), e.destroy();
        }
        this.setState(eo.hes.DISCONNECTED, { willReconnect: c });
    }
    _handleResuming(e) {
        var t, n;
        null === (t = this._connection) || void 0 === t || t.fastUdpReconnect(), null === (n = this._connection) || void 0 === n || n.clearAllSpeaking();
    }
    _handleReady(e, t, n, r, i, a, o) {
        var s;
        this.setState(eo.hes.RTC_CONNECTING),
            (this.port = n),
            null != o && this._chooseExperiments(o),
            0 === a.length &&
                a.push({
                    type: es.Tr.VIDEO,
                    rid: '100',
                    ssrc: i + 1,
                    rtxSsrc: i + 2,
                    quality: 100,
                    active: !1
                });
        let l = B.Z.getMediaEngine(),
            u = x.Z.getPersistentCodesEnabled(),
            c = null !== (s = G.default.getStaticAuthSessionId()) && void 0 !== s ? s : void 0,
            d = l.connect(this.context, this.userId, {
                ssrc: i,
                address: t,
                port: n,
                modes: r,
                experiments: this._selectedExperiments,
                streamParameters: a,
                qosEnabled: B.Z.getQoS(),
                signingKeyId: u ? c : void 0,
                ...this._getExtraConnectionOptions()
            });
        d.setUseElectronVideo(l.supports(es.AN.ELECTRON_VIDEO)), B.Z.supports(es.AN.IMAGE_QUALITY_MEASUREMENT) && d.setVideoQualityMeasurement('imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec');
        let _ = ['unk'];
        if ((B.Z.supports(es.AN.AMD_EXPERIMENTAL_RATE_CONTROL) && _.push('amdRelaxRc'), this.context === es.Yn.STREAM)) {
            let { nvMediumVbvSizeMs: e } = P.Z.getCurrentConfig({ location: 'handleReady' }, { autoTrackExposure: !0 });
            if (e > 0) {
                _.push('nvRelaxRc=' + e);
                let { nvEnableNewPresets: t } = M.Z.getCurrentConfig({ location: 'handleReady' }, { autoTrackExposure: !0 });
                t && _.push('nvNewPresets');
            }
            if (null != this.guildId) {
                let { enableAdaptiveKeyFrame: e } = D.Z.getCurrentConfig(
                    {
                        guildId: this.guildId,
                        location: 'handleReady'
                    },
                    { autoTrackExposure: !0 }
                );
                e && _.push('nvencAdaptiveIDR');
            }
        }
        d.setVideoEncoderExperiments(_.join(',')),
            d.on(I.Sh.Speaking, (e, t, n) => {
                this.userId === e && this.sendSpeaking(t, n), this.emit(Q.z.Speaking, eI(e), t);
            }),
            d.on(I.Sh.ToggleMuteFromNative, () => {
                this.context === es.Yn.DEFAULT && A.Z.toggleSelfMute({ playSoundEffect: !1 });
            }),
            d.on(I.Sh.NativeMuteChanged, (e) => {
                this.context === es.Yn.DEFAULT && N.Z.nativeMuteChanged(e);
            }),
            d.on(I.Sh.Video, (e, t, n, r, i, a) => {
                this._handleVideoStreamId({
                    userId: eI(e),
                    streamId: t,
                    audioSsrc: n,
                    videoSsrc: null != r ? r : 0,
                    rtxSsrc: i,
                    videoStreamParameters: a
                }),
                    this.userId === e &&
                        (this.sendVideo(null != n ? n : 0, null != r ? r : 0, null != i ? i : 0, a),
                        null == a ||
                            a.forEach((t) => {
                                100 === t.quality && this.emit(Q.z.VideoSourceQualityChanged, this.guildId, this.channelId, eI(e), t.maxResolution, t.maxFrameRate, this.context);
                            }));
            }),
            d.on(I.Sh.FirstFrame, (e, t, n) => {
                null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.setFirstFrameReceived(t), this.emit(Q.z.Video, this.guildId, this.channelId, eI(e), n, this.rtcServerId)), null != this._goLiveQualityManager && (this._goLiveQualityManager.setFirstFrameReceived(t), this.emit(Q.z.Video, this.guildId, this.channelId, eI(e), n, this.rtcServerId));
            }),
            d.on(I.Sh.Silence, (e) => {
                this._inputDetected = this._inputDetected || !e;
            }),
            d.on(I.Sh.Connected, (r, i) => {
                if ((this.logger.info('RTC connected to media server: '.concat(t, ':').concat(n)), e !== this._socket)) {
                    this.logger.warn('Socket mismatch, disconnecting');
                    return;
                }
                switch (((this._voiceQuality = new ei.Z(d)), this._voiceQuality.start(), (this._voiceQualityPeriodicStatsSequenceId = 0), (this._voiceQualityPeriodicStatsInterval = setInterval(this._handleVoiceQualityPeriodicsStats, 300000)), (this._noiseCancellationError = 0), (this._voiceDuration = new er.Z(this.userId, d)), this._voiceDuration.start(), (this.protocol = r), r)) {
                    case 'udp':
                        this.logger.info('Sending UDP info to RTC server.', i, this._selectedExperiments),
                            e.once($.V.Encryption, (e, t) => {
                                d === this._connection && (d.setEncryption(e, t), (this._encryptionMode = e));
                            }),
                            e.selectProtocol(r, this.getRTCConnectionId(), i, this._selectedExperiments);
                        break;
                    case 'webrtc':
                        this.logger.info('Sending local SDP to RTC server.'), e.once($.V.SDP, this._handleSDP.bind(this)), e.selectProtocol(r, this.getRTCConnectionId(), i);
                        break;
                    default:
                        this.logger.error('Unable to determine protocol.');
                        return;
                }
                this._backoff.succeed();
            }),
            d.on(I.Sh.VideoEncoderFallback, (t) => {
                let n = t
                    .filter((e) => 'video' === e.type)
                    .map((e) => e.name)
                    .join(',');
                this.logger.info('The originally selected video encoder is not working, fallback to the other available encoders: '.concat(n)), e.updateSession({ codecs: t });
            }),
            d.on(I.Sh.Error, (t) => {
                if (e !== this._socket) return;
                let n = V.Z.shouldIncludePreferredRegion() ? V.Z.getPreferredRegion() : null;
                this.logger.error('Error occurred while connecting to RTC server: '.concat(t)),
                    Y.default.track(eo.rMx.VOICE_CONNECTION_FAILURE, {
                        ...this._getAnalyticsProperties(),
                        hostname: this.hostname,
                        port: this.port,
                        protocol: this.protocol,
                        error: t,
                        cloudflare_best_region: n,
                        connect_count: this._connectCount
                    });
            }),
            d.on(I.Sh.ConnectionStateChange, (t) => {
                if ((this.logger.info('RTC media connection state change: '.concat(this.state, ' => ').concat(t)), e !== this._socket)) return;
                let n = this.state;
                switch (t) {
                    case es.$j.DISCONNECTED:
                        this.setState(eo.hes.RTC_DISCONNECTED);
                        break;
                    case es.$j.CONNECTING:
                        this.setState(eo.hes.RTC_CONNECTING);
                        break;
                    case es.$j.CONNECTED:
                        this.setState(eo.hes.RTC_CONNECTED);
                        break;
                    case es.$j.NO_ROUTE:
                        this.setState(eo.hes.NO_ROUTE);
                        break;
                    case es.$j.ICE_CHECKING:
                        this.setState(eo.hes.ICE_CHECKING);
                        break;
                    case es.$j.DTLS_CONNECTING:
                        this.setState(eo.hes.DTLS_CONNECTING);
                }
                if ((n === eo.hes.RTC_CONNECTING && this.state === eo.hes.RTC_DISCONNECTED ? this.reconnect() : this.state === eo.hes.NO_ROUTE && (0 === this._backoff.fails && this._handleNoRoute(), this._backoff.fail(this.reconnect)), this.state === eo.hes.RTC_CONNECTED)) {
                    var r, i;
                    let e = V.Z.shouldIncludePreferredRegion() ? V.Z.getPreferredRegion() : null;
                    this._connecting &&
                        Y.default.track(eo.rMx.VOICE_CONNECTION_SUCCESS, {
                            ...this._getAnalyticsProperties(),
                            hostname: this.hostname,
                            port: this.port,
                            protocol: this.protocol,
                            cloudflare_best_region: e,
                            connect_time: (0, T.zO)() - (this._connected ? this._connectStartTime : this._createdTime),
                            connect_count: this._connectCount,
                            audio_subsystem: B.Z.getMediaEngine().getAudioSubsystem(),
                            audio_layer: B.Z.getMediaEngine().getAudioLayer(),
                            media_session_id: this.getMediaSessionId(),
                            ...this.stateHistory.getVoiceConnectionSuccessStats()
                        }),
                        null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.setConnection(d),
                        null === (i = this._goLiveQualityManager) || void 0 === i || i.update(),
                        (this._connectCompletedTime = (0, T.zO)()),
                        (this._connected = !0),
                        (this._connecting = !1),
                        (this._encountered_socket_failure = !1);
                } else n === eo.hes.RTC_CONNECTED && this.stateHistory.reset(this.state);
            }),
            d.on(I.Sh.SecureFramesUpdate, (e) => {
                (this._secureFramesState = e), this.emit(Q.z.SecureFramesUpdate);
            }),
            d.on(I.Sh.Ping, this._handlePing.bind(this)),
            d.on(I.Sh.PingTimeout, this._handlePingTimeout.bind(this)),
            d.on(I.Sh.OutboundLossRate, this._handleOutboundLossRate.bind(this)),
            d.on(I.Sh.SoundshareTrace, this._handleSoundshareTrace.bind(this)),
            d.on(I.Sh.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)),
            d.on(I.Sh.Stats, q.Z.create()),
            d.on(I.Sh.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)),
            d.on(I.Sh.NoiseCancellationError, (e) => {
                this._noiseCancellationError = e;
            }),
            d.on(I.Sh.MLSFailure, this._handleMLSFailure.bind(this)),
            d.setRemoteVideoSinkWants(this._remoteVideoSinkWants),
            (this._connection = d);
    }
    _handleSpeaking(e, t, n, r) {
        let i = this._connection;
        if (null != i && this.userId !== t) {
            var a;
            r !== es.Dg.NONE &&
                (i.createUser(t, n),
                g.Z.dispatch({
                    type: 'RTC_CONNECTION_USER_CREATE',
                    userId: t,
                    context: this.context
                })),
                null === (a = this._localMediaSinkWantsManager) || void 0 === a || a.setAudioSSRC(t, n);
        }
    }
    handleFlags(e, t) {
        this.emit(Q.z.Flags, e, t);
    }
    handlePlatform(e, t) {
        this.emit(Q.z.Platform, e, t, this.channelId);
    }
    getOrCreateVideoQuality() {
        if (null != this._connection && null == this._videoQuality) {
            (this._videoQuality = new en.S(this._connection)), this._videoQuality.start();
            let { featureEnabled: e, windowLength: t, allowedPoorFpsRatio: n, fpsThreshold: r, backoffTimeSec: i } = U.Z.getConfig(!0);
            if (e) {
                (this._videoHealthManager = new et.y(t, n, r, i)), null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager);
                let e = (e, t, n) => {
                    var r, i;
                    (null === (r = this._localMediaSinkWantsManager) || void 0 === r ? void 0 : r.shouldReceiveFromUser(e)) && (null === (i = this._videoHealthManager) || void 0 === i || i.updateFps(e, t, n));
                };
                this._videoQuality.on(en.d.FpsUpdate, e);
            }
        }
        return this._videoQuality;
    }
    _handleVideoStreamId(e) {
        var t, n, r, i;
        let { userId: a, streamId: o, videoSsrc: s, videoStreamParameters: l } = e;
        if (
            (this.emit(Q.z.Video, this.guildId, this.channelId, a, o, this.rtcServerId),
            null != o && null == this.getOrCreateVideoQuality() && this.logger.error('_handleVideoStreamId: Unable to create videoQuality.'),
            null != this._videoQuality &&
                this.userId === a &&
                l.forEach((e) => {
                    var t, n;
                    let r = null !== (t = e.ssrc) && void 0 !== t ? t : 0;
                    r > 0 && !0 === e.active && (null === (n = this._videoQuality) || void 0 === n || n.setOutboundSsrc(r));
                }),
            this.userId !== a)
        ) {
            let e = 0 === s && null === o;
            (!e || (e && (null === (t = this._videoQuality) || void 0 === t ? void 0 : t.getInboundParticipants().includes(a)))) && (null === (n = this._videoQuality) || void 0 === n || n.setInboundUser(a, s), null === (r = this._videoHealthManager) || void 0 === r || r.createUser(a));
        }
        null != this._connection && this.userId !== a && (null === (i = this._localMediaSinkWantsManager) || void 0 === i || i.setStreamId(a, o));
    }
    _handleLocalVideoDisabled(e, t) {
        if (this.userId !== e) {
            let n = this.getOrCreateVideoQuality();
            if (null == n) {
                this.logger.error('_handleLocalVideoDisabled: Unable to create videoQuality.');
                return;
            }
            n.setUserVideoDisabled(eI(e), t);
        }
    }
    _handleRemoteStreamsReady(e) {
        let t = (0, T.zO)() - this._connectStartTime;
        Y.default.track(eo.rMx.VOICE_CONNECTION_REMOTE_STREAMS_CREATED, {
            ...this._getAnalyticsProperties(),
            number_of_users: e,
            duration_ms: t
        });
    }
    _handleVideo(e, t, n, r, i) {
        if (null != this._connection && this.userId !== t) {
            if (null != this._localMediaSinkWantsManager) {
                this._localMediaSinkWantsManager.setAudioSSRC(t, n);
                let e = i.map((e) => ({
                    type: es.Tr.VIDEO,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    active: r > 0
                }));
                0 === e.length &&
                    e.push({
                        type: es.Tr.VIDEO,
                        rid: '100',
                        ssrc: r,
                        rtxSsrc: r + 1,
                        quality: 100,
                        active: r > 0
                    }),
                    this._localMediaSinkWantsManager.setVideoSSRCs(t, e);
            } else {
                var a, o;
                let e = [];
                for (let t of i)
                    null != t.ssrc &&
                        null != t.quality &&
                        e.push({
                            ssrc: t.ssrc,
                            quality: t.quality
                        });
                null === (a = this._goLiveQualityManager) || void 0 === a || a.setUserID(t), null === (o = this._goLiveQualityManager) || void 0 === o || o.updateAudioAndVideoStreamInfo(n, e);
            }
            null == i ||
                i.forEach((e) => {
                    100 === e.quality && this.emit(Q.z.VideoSourceQualityChanged, this.guildId, this.channelId, t, e.maxResolution, e.maxFrameRate, this.context);
                });
        }
    }
    _handleControlPing(e) {
        !B.Z.supports(es.AN.NATIVE_PING) && this._handlePing(e);
    }
    _handlePing(e) {
        if (void 0 !== e) {
            for (
                this._pings.push({
                    time: Date.now(),
                    value: e
                });
                this._pings.length >= ec;

            )
                this._pings.shift();
            e > e_ && this._pingBadCount++, this.emit(Q.z.Ping, this._pings, this.quality);
        }
    }
    _handlePingTimeout(e, t) {
        this._pingTimeouts.push(e);
        let n = this._pingTimeouts.length;
        n >= 3 && this._pingTimeouts[n - 1] === this._pingTimeouts[n - 2] + 1 && this._pingTimeouts[n - 2] === this._pingTimeouts[n - 3] + 1 && this._handlePing(t);
    }
    _handleOutboundLossRate(e) {
        (this._outboundLossRate = e), this.emit(Q.z.OutboundLossRate, e);
    }
    _handleSoundshareTrace(e) {
        this._soundshareStats.traceEvent(void 0, e);
    }
    _getAnalyticsProperties() {
        let e = k.Z.getChannel(this.channelId),
            t = null != e ? e.type : null;
        return {
            guild_id: this.guildId,
            channel_id: this.channelId,
            channel_type: t,
            rtc_connection_id: this.getRTCConnectionId(),
            context: this.context,
            voice_backend_version: this.voiceVersion,
            rtc_worker_backend_version: this.rtcWorkerVersion
        };
    }
    _handleClientConnect(e) {
        var t;
        e.forEach((e) => {
            var t;
            this._userIds.add(e), null === (t = this._connection) || void 0 === t || t.createUser(e, 0);
        }),
            this.emit(Q.z.ClientConnect, e),
            null === (t = this._goLiveQualityManager) || void 0 === t || t.updateCallUserIds(this._userIds);
    }
    _handleClientDisconnect(e) {
        var t, n, r, i;
        let a = this._videoQuality;
        if (null != a && this.context === es.Yn.DEFAULT) {
            let t = a.getInboundStats(e),
                n = null !== (r = null == t ? void 0 : t.num_frames) && void 0 !== r ? r : 0;
            null != t &&
                n > 0 &&
                (Y.default.track(eo.rMx.VIDEO_STREAM_ENDED, {
                    ...this._getAnalyticsProperties(),
                    media_session_id: this.getMediaSessionId(),
                    sender_user_id: e,
                    reason: 'User disconnected',
                    participant_type: 'receiver',
                    guild_region: V.Z.getRegion(this.hostname),
                    hostname: this.hostname,
                    hardware_enabled: B.Z.getHardwareEncoding(),
                    ...t,
                    ...a.getNetworkStats(),
                    ...a.getCodecUsageStats('receiver', e)
                }),
                a.destroyUser(e),
                null === (i = this._videoHealthManager) || void 0 === i || i.deleteUser(e));
        }
        let o = this._connection;
        null != o && o.destroyUser(e), null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.destroyUser(e), this._userIds.delete(e), this.emit(Q.z.ClientDisconnect, e), null === (n = this._goLiveQualityManager) || void 0 === n || n.updateCallUserIds(this._userIds);
    }
    _handleCodecs(e, t) {
        let n = this._connection;
        null != n && null != this.protocol ? n.setCodecs(null != e && '' !== e ? e : es.ad.OPUS, null != t && '' !== t ? t : es.ad.H264, this.context) : this.logger.warn('Cannot set codecs on connection with protocol:', this.protocol);
    }
    _handleSDP(e) {
        let t = this._connection;
        null != t && null != this.protocol ? t.setSDP(e) : this.logger.warn('Cannot set SDP on connection with protocol:', this.protocol);
    }
    async _handleMediaSessionId(e) {
        (this._mediaSessionId = e), this.logger.info('Setting media-session-id: '.concat(e, ' for rtc-connection-id: ').concat(this.getRTCConnectionId()));
        let t = await (0, C.Z)();
        Y.default.track(eo.rMx.MEDIA_SESSION_JOINED, {
            ...this._getAnalyticsProperties(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            raw_thermal_state: t
        }),
            g.Z.dispatch({
                type: 'MEDIA_SESSION_JOINED',
                mediaSessionId: this.getMediaSessionId(),
                context: this.context
            });
    }
    _handleMediaSinkWants(e) {
        let t = this._connection;
        this.logger.info('Remote media sink wants: '.concat(JSON.stringify(e))), (this._remoteVideoSinkWants = e), null == t || t.setRemoteVideoSinkWants(e);
    }
    _handleCodeVersion(e, t) {
        (this.voiceVersion = e), (this.rtcWorkerVersion = t);
    }
    _handleKeyframeInterval(e) {
        let t = this._connection;
        null != t && null != this.protocol ? t.setKeyframeInterval(e) : this.logger.warn('Cannot set keyframe interval on connection with protocol:', this.protocol);
    }
    _handleBandwidthEstimationExperiment(e) {
        this._bandwidthEstimationExperiment = e;
        let t = b.Z.getMediaEngineExperiments(e);
        if (null !== t && 0 !== t.length) {
            var n;
            null === (n = this._connection) || void 0 === n || n.setBandwidthEstimationExperiments(t);
        }
    }
    _trackSecureFrameTransition(e, t) {
        Y.default.track(eo.rMx.SECURE_FRAMES_TRANSITION, {
            ...this._getAnalyticsProperties(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            sender_user_id: this.userId,
            transition_id: e,
            protocol_version: t
        });
    }
    _handleSecureFramesInit(e) {
        var t, n;
        e > 0
            ? (this.logger.info('DAVE protocol init with protocol version: '.concat(e)), null === (t = this._connection) || void 0 === t || t.prepareSecureFramesEpoch(ep, e, this.trueChannelId), this._sendMLSKeyPackage())
            : null === (n = this._connection) ||
              void 0 === n ||
              n.prepareSecureFramesTransition(em, e, () => {
                  var t;
                  e > 0 && this._trackSecureFrameTransition(em, e), null === (t = this._connection) || void 0 === t || t.executeSecureFramesTransition(em);
              });
    }
    _handleSecureFramesRosterChange(e) {
        let t = [];
        Object.entries(e).forEach((e) => {
            let [n, r] = e;
            t.push(eI(n)), null == r || 0 === r.byteLength ? this._secureFramesRosterMap.delete(eI(n)) : this._secureFramesRosterMap.set(eI(n), r);
        }),
            this.emit(Q.z.RosterMapUpdate, t);
    }
    _handleSecureFramesPrepareTransition(e, t) {
        var n;
        this.logger.info('Preparing DAVE protocol transition: '.concat(e, ', protocol version: ').concat(t)),
            null === (n = this._connection) ||
                void 0 === n ||
                n.prepareSecureFramesTransition(e, t, () => {
                    this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, t);
                });
    }
    _handleSecureFramesPrepareEpoch(e, t) {
        var n;
        this.logger.info('Preparing DAVE protocol epoch: '.concat(e, ', protocol version: ').concat(t));
        let r = e.toString();
        null === (n = this._connection) || void 0 === n || n.prepareSecureFramesEpoch(r, t, this.trueChannelId), r === ep && this._sendMLSKeyPackage();
    }
    _sendMLSKeyPackage() {
        var e;
        null === (e = this._connection) ||
            void 0 === e ||
            e.getMLSKeyPackage((e) => {
                var t;
                this.logger.info('Got MLS key package, sending to RTC server'), null === (t = this._socket) || void 0 === t || t.sendMLSKeyPackage(e);
            });
    }
    _maybeSendSecureFramesTransitionReady(e) {
        if (e !== em) {
            var t;
            this.logger.info('Sending DAVE protocol ready for transition ID '.concat(e)), null === (t = this._socket) || void 0 === t || t.secureFramesReadyForTransition(e);
        }
    }
    _handleSecureFramesExecuteTransition(e) {
        var t;
        this.logger.info('Executing DAVE protocol transition: '.concat(e)), null === (t = this._connection) || void 0 === t || t.executeSecureFramesTransition(e);
    }
    _handleMLSExternalSenderPackage(e) {
        var t;
        this.logger.info('Received MLS external sender package'), null === (t = this._connection) || void 0 === t || t.updateMLSExternalSender(e);
    }
    _handleMLSProposals(e, t) {
        var n;
        this.logger.info('Received MLS proposals'),
            null === (n = this._connection) ||
                void 0 === n ||
                n.processMLSProposals(t, (t) => {
                    this.logger.info('Sending MLS commit welcome message'), e.sendMLSCommitWelcome(t);
                });
    }
    _handleMLSPrepareCommitTransition(e, t) {
        var n;
        this.logger.info('Received MLS commit for transition ID '.concat(e)),
            null === (n = this._connection) ||
                void 0 === n ||
                n.prepareMLSCommitTransition(e, t, (t, n, r) => {
                    t ? (this._handleSecureFramesRosterChange(r), this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, n), this._recoverMLSFailures()) : (this.logger.warn('Failed to process MLS commit for transition ID '.concat(e)), this._flagMLSInvalidCommitWelcome(e), this._handleSecureFramesInit(n));
                });
    }
    _handleMLSWelcome(e, t) {
        var n;
        this.logger.info('Received MLS welcome for transition ID '.concat(e)),
            null === (n = this._connection) ||
                void 0 === n ||
                n.processMLSWelcome(e, t, (t, n, r) => {
                    t ? (this._handleSecureFramesRosterChange(r), this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, n), this._recoverMLSFailures()) : (this._flagMLSInvalidCommitWelcome(e), this._sendMLSKeyPackage());
                });
    }
    getMLSPairwiseFingerprint(e, t, n) {
        var r;
        null === (r = this._connection) || void 0 === r || r.getMLSPairwiseFingerprint(e, t, n);
    }
    _flagMLSInvalidCommitWelcome(e) {
        var t;
        this.logger.info('Flagging invalid MLS commit/welcome for transition ID '.concat(e)), null === (t = this._socket) || void 0 === t || t.flagMLSInvalidCommitWelcome(e);
    }
    _handleMLSFailure(e, t) {
        let n = ''.concat(e, ':').concat(t),
            r = n in this._mlsFailures ? this._mlsFailures[n][2] : 0;
        (this._mlsFailures[n] = [e, t, r + 1]), this._alertMLSFailureDebouced(e, t);
    }
    _recoverMLSFailures() {
        for (let [e, [t, n, r]] of Object.entries(this._mlsFailures)) {
            let i = e in this._mlsFailuresRecovered ? this._mlsFailuresRecovered[e][2] : 0;
            this._mlsFailuresRecovered[e] = [t, n, i + r];
        }
    }
    _trackMLSFailures() {
        let e = [
                ...Object.values(this._mlsFailuresRecovered).map((e) => {
                    let [t, n, r] = e;
                    return [t, n, r, !0];
                }),
                ...Object.values(this._mlsFailures).map((e) => {
                    let [t, n, r] = e;
                    return [t, n, r, !1];
                })
            ],
            t = this.getMediaSessionId();
        for (let [n, r, i, a] of e)
            Y.default.track(eo.rMx.MLS_FAILURES, {
                ...this._getAnalyticsProperties(),
                media_session_id: t,
                parent_media_session_id: this.parentMediaSessionId,
                failure_source: n,
                failure_reason: r,
                failure_count: i,
                failure_was_recovered: a
            });
    }
    _alertMLSFailure(e, t) {
        let n = H.default.getCurrentUser();
        ((null == n ? void 0 : n.isStaff()) || (null == n ? void 0 : n.isStaffPersonal())) &&
            S.Z.show({
                title: 'MLS Error in '.concat(e),
                body: 'Error: '.concat(t, '! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!')
            });
    }
    _getExtraConnectionOptions() {
        return {};
    }
    shouldReportPeriodicStats(e) {
        if (e.length > 10) return !1;
        let t = this.getMediaSessionId();
        if (null == t) return !1;
        let n = E().v3(t);
        return !!(n % 100 <= 5) || !1;
    }
    getInputDeviceName() {
        var e;
        let t = B.Z.getInputDeviceId();
        return null === (e = B.Z.getInputDevices()[t]) || void 0 === e ? void 0 : e.name;
    }
    getOutputDeviceName() {
        var e;
        let t = B.Z.getOutputDeviceId();
        return null === (e = B.Z.getOutputDevices()[t]) || void 0 === e ? void 0 : e.name;
    }
    getGoLiveSource() {
        return B.Z.getGoLiveSource();
    }
    incomingVideoEnabledChanged(e) {
        var t, n;
        null === (t = this._goLiveQualityManager) || void 0 === t || t.onIncomingVideoEnabled(e), null === (n = this.getOrCreateVideoQuality()) || void 0 === n || n.setOcclusionIncomingVideoEnabled(e);
    }
    windowVisibilityChanged(e) {
        var t;
        null === (t = this.getOrCreateVideoQuality()) || void 0 === t || t.setWindowOcclusionState(!e);
    }
    constructor({ userId: e, sessionId: t, guildId: n, channelId: r, context: i = es.Yn.DEFAULT, rtcServerId: a, parentMediaSessionId: o }) {
        var s, l;
        super(),
            el(this, 'context', void 0),
            el(this, 'userId', void 0),
            el(this, 'sessionId', void 0),
            el(this, 'guildId', void 0),
            el(this, 'parentMediaSessionId', void 0),
            el(this, 'hostname', void 0),
            el(this, 'state', void 0),
            el(this, '_videoQuality', void 0),
            el(this, '_soundshareStats', void 0),
            el(this, 'logger', void 0),
            el(this, 'rtcServerId', void 0),
            el(this, '_channelId', void 0),
            el(this, 'channelIds', void 0),
            el(this, '_endpoint', void 0),
            el(this, 'port', void 0),
            el(this, 'token', void 0),
            el(this, 'protocol', void 0),
            el(this, 'voiceVersion', void 0),
            el(this, 'rtcWorkerVersion', void 0),
            el(this, '_socket', void 0),
            el(this, '_backoff', void 0),
            el(this, '_destroyed', void 0),
            el(this, '_pings', void 0),
            el(this, '_pingBadCount', void 0),
            el(this, '_pingTimeouts', void 0),
            el(this, '_mediaSessionId', void 0),
            el(this, '_voiceQuality', void 0),
            el(this, '_voiceQualityPeriodicStatsInterval', void 0),
            el(this, '_voiceQualityPeriodicStatsSequenceId', void 0),
            el(this, '_noiseCancellationError', void 0),
            el(this, '_voiceDuration', void 0),
            el(this, '_videoHealthManager', void 0),
            el(this, '_sentVideo', void 0),
            el(this, '_outboundLossRate', void 0),
            el(this, '_recordingEnabled', void 0),
            el(this, '_selectedExperiments', void 0),
            el(this, '_localMediaSinkWantsManager', void 0),
            el(this, '_goLiveQualityManager', void 0),
            el(this, '_remoteVideoSinkWants', void 0),
            el(this, '_connection', void 0),
            el(this, '_createdTime', void 0),
            el(this, '_connectStartTime', void 0),
            el(this, '_connectCompletedTime', void 0),
            el(this, '_rtcConnectionId', void 0),
            el(this, '_connectCount', void 0),
            el(this, '_connected', void 0),
            el(this, '_connecting', void 0),
            el(this, '_encountered_socket_failure', void 0),
            el(this, '_inputDetected', void 0),
            el(this, '_encryptionMode', void 0),
            el(this, 'stateHistory', void 0),
            el(this, '_supportedBandwidthEstimationExperiments', void 0),
            el(this, '_bandwidthEstimationExperiment', void 0),
            el(this, '_secureFramesState', void 0),
            el(this, '_userIds', void 0),
            el(this, '_secureFramesRosterMap', new Map()),
            el(this, '_mlsFailuresRecovered', void 0),
            el(this, '_mlsFailures', void 0),
            el(this, '_lastSentSpeakingStatus', void 0),
            el(this, '_lastSentSSRC', void 0),
            el(this, '_matchVoiceServerSpeakingLogic', void 0),
            el(this, 'powerMonitorListener', void 0),
            el(this, 'reconnect', () => {
                let e = this._socket;
                null != e && (this._connected && (this._connectStartTime = (0, T.zO)()), !this._connecting && (this._trackVoiceConnectionConnecting(), (this._connecting = !0), (this._encountered_socket_failure = !1)), this._connectCount++, e.close(), e.connect());
            }),
            el(this, '_alertMLSFailureDebouced', d()(this._alertMLSFailure, 100)),
            el(this, '_handleNetworkOnline', () => {
                this.expeditedHeartbeat(5000, 'network detected online.');
            }),
            el(this, '_handleNetworkOffline', () => {
                this.expeditedHeartbeat(15000, 'network detected offline.', !1);
            }),
            el(this, '_handleNoRoute', () => {
                var e;
                null === (e = this._socket) || void 0 === e || e.noRoute();
            }),
            el(this, '_handlePowerResume', () => {
                this.expeditedHeartbeat(5000, 'power monitor resumed');
            }),
            el(this, '_handleVoiceQualityPeriodicsStats', () => {
                if (null != this._voiceQuality) {
                    let e = this._voiceQuality.getPeriodicStats();
                    if (this.shouldReportPeriodicStats(e))
                        for (let t of e)
                            Y.default.track(eo.rMx.VOICE_QUALITY_PERIODIC_STATS, {
                                ...this._getAnalyticsProperties(),
                                media_session_id: this.getMediaSessionId(),
                                sender_user_id: t.userId,
                                hostname: this.hostname,
                                frame_op_silent: t.silent,
                                frame_op_normal: t.normal,
                                frame_op_merged: t.merged,
                                frame_op_expanded: t.expanded,
                                frame_op_accelerated: t.accelerated,
                                frame_op_preemptive_expanded: t.preemptiveExpanded,
                                frame_op_cng: t.cng,
                                accelerate_rate: t.accelerateRate,
                                expand_rate: t.expandRate,
                                preemptive_expand_rate: t.preemptiveExpandRate,
                                speech_expand_rate: t.speechExpandRate,
                                duration_ms: t.durationMs,
                                sequence_id: this._voiceQualityPeriodicStatsSequenceId,
                                input_device: this.getInputDeviceName(),
                                output_device: this.getOutputDeviceName(),
                                ping_average: Math.round(this.getAveragePing()),
                                ping_bad_count: this._pingBadCount,
                                parent_media_session_id: this.parentMediaSessionId
                            });
                    this._voiceQualityPeriodicStatsSequenceId++;
                }
            }),
            el(this, '_trackVoiceConnectionConnecting', () => {
                let e = k.Z.getChannel(this.channelId),
                    t = null != e ? e.type : null;
                Y.default.track(eo.rMx.VOICE_CONNECTION_CONNECTING, {
                    guild_id: this.guildId,
                    channel_id: this.channelId,
                    rtc_connection_id: this.getRTCConnectionId(),
                    hostname: this.hostname,
                    connect_count: this._connectCount,
                    context: this.context,
                    channel_type: t
                });
            }),
            (this.context = i),
            (this.logger = new O.Z('RTCConnection('.concat(null !== (s = null != a ? a : n) && void 0 !== s ? s : r, ', ').concat(this.context, ')'))),
            (this.userId = e),
            (this.sessionId = t),
            (this.guildId = n),
            (this._channelId = r),
            (this.channelIds = new Set([r])),
            (this.rtcServerId = a),
            (this.parentMediaSessionId = o),
            (this._endpoint = null),
            (this.hostname = null),
            (this.port = null),
            (this.token = null),
            (this.voiceVersion = null),
            (this.rtcWorkerVersion = null),
            (this.state = eo.hes.AWAITING_ENDPOINT),
            (this.stateHistory = new X.K(this.state)),
            (this._socket = null),
            (this._backoff = new p.Z(1000, 10000)),
            (this._destroyed = !1),
            (this._pings = []),
            (this._pingBadCount = 0),
            (this._pingTimeouts = []),
            (this._mediaSessionId = null),
            (this._voiceQuality = null),
            (this._voiceQualityPeriodicStatsInterval = null),
            (this._voiceQualityPeriodicStatsSequenceId = 0),
            (this._noiseCancellationError = 0),
            (this._voiceDuration = null),
            (this._videoQuality = null),
            (this._videoHealthManager = null),
            (this._sentVideo = !1),
            (this._outboundLossRate = null),
            (this._createdTime = (0, T.zO)()),
            (this._connectStartTime = 0),
            (this._connectCompletedTime = 0),
            (this._rtcConnectionId = (0, h.Z)()),
            (this._connectCount = 0),
            (this._connected = !1),
            (this._connecting = !1),
            (this._encountered_socket_failure = !1),
            (this._inputDetected = !1),
            (this._selectedExperiments = []),
            (this._secureFramesState = null),
            (this._userIds = new Set([e])),
            this._secureFramesRosterMap.clear(),
            (this._mlsFailuresRecovered = {}),
            (this._mlsFailures = {});
        let { matchVoiceServerSpeakingLogic: u } = w.Z.getCurrentConfig({ location: 'rtc_connection' }, { autoTrackExposure: !1 });
        (this._lastSentSpeakingStatus = 0), (this._lastSentSSRC = void 0), (this._matchVoiceServerSpeakingLogic = u);
        let c = B.Z.supports(es.AN.FIRST_FRAME_CALLBACK) && B.Z.supports(es.AN.REMOTE_USER_MULTI_STREAM);
        if (i === es.Yn.DEFAULT) {
            let t = (null === (l = k.Z.getChannel(this.channelId)) || void 0 === l ? void 0 : l.type) === eo.d4z.GUILD_STAGE_VOICE;
            (this._localMediaSinkWantsManager = new J.ZP(e, t, c)),
                this._localMediaSinkWantsManager.on(J.ai.Update, (e) => {
                    if (this.state === eo.hes.RTC_CONNECTED && null != this._socket) {
                        var t;
                        this.logger.info('Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null === (t = this._connection) || void 0 === t || t.setLocalVideoSinkWants(e);
                    }
                }),
                this._localMediaSinkWantsManager.on(J.ai.UserSSRCUpdate, (e, t, n) => {
                    var r;
                    null === (r = this._connection) || void 0 === r || r.createUser(e, t, n);
                });
        } else
            i === es.Yn.STREAM &&
                ((this._goLiveQualityManager = new y.Z(!0)),
                this._goLiveQualityManager.on(y.y.RequestedSSRCsUpdate, (e, t, n) => {
                    var r;
                    null === (r = this._connection) || void 0 === r || r.createUser(e, t, n);
                }),
                this._goLiveQualityManager.on(y.y.RequestedStreamsUpdate, (e) => {
                    if (this.state === eo.hes.RTC_CONNECTED && null != this._socket) {
                        var t;
                        this.logger.info('Go Live Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null === (t = this._connection) || void 0 === t || t.setLocalVideoSinkWants(e);
                    }
                }));
        (this._remoteVideoSinkWants = J.Yy),
            ea.w.on(ea.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged.bind(this)),
            ea.w.on(ea.e.WindowVisibilityChanged, this.windowVisibilityChanged.bind(this)),
            Z.ZP.shouldRecordNextConnection() ? ((this._recordingEnabled = !0), v.TC(!1)) : (this._recordingEnabled = !1),
            (this._soundshareStats = new ee.Z()),
            W.Z.addOnlineCallback(this._handleNetworkOnline),
            W.Z.addOfflineCallback(this._handleNetworkOffline),
            (0, K.isDesktop)() && (this.powerMonitorListener = z.Z.remotePowerMonitor.on('resume', this._handlePowerResume)),
            (this._supportedBandwidthEstimationExperiments = []),
            (this._bandwidthEstimationExperiment = null),
            B.Z.getMediaEngine().getSupportedBandwidthEstimationExperiments((e) => {
                this._supportedBandwidthEstimationExperiments = e;
            });
    }
}
