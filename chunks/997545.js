n.d(t, {
    Z: function () {
        return P;
    }
});
var r = n(312677);
var i = n(47120);
var a = n(411104);
var o = n(653041);
var s = n(595182),
    l = n.n(s),
    u = n(117806),
    c = n.n(u),
    d = n(565925),
    _ = n.n(d),
    E = n(971793),
    f = n.n(E),
    h = n(420994),
    p = n(259443),
    m = n(839548),
    I = n(198274),
    T = n(701597),
    g = n(46973),
    S = n(829839),
    A = n(916057),
    v = n(992774),
    N = n(158466),
    O = n(650886),
    R = n(65154),
    C = n(149396);
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
let b = 50,
    L = 0;
function D(e) {
    return (null != e ? e : C.Qx) / C.Qx;
}
function M(e) {
    return null != e && 0 !== e ? e + 1 : 0;
}
class P extends m.Z {
    static create(e, t, n) {
        let r = new P(e, t, !0);
        return r.initialize(n), r;
    }
    static createReplay(e, t) {
        let n = new P(e, '0', !0),
            r = (0, v.zS)();
        n.initializeStreamParameters([
            {
                type: R.Tr.VIDEO,
                rid: '100',
                ssrc: 0,
                rtxSsrc: 0,
                quality: 100,
                active: !1
            }
        ]);
        let i = (t, i) => {
                let a = null != r.getCodecCapabilities ? r.getCodecCapabilities : r.getSupportedVideoCodecs;
                n.on(g.Sh.Stats, n.handleStats),
                    n.conn.setOnVideoCallback(n.handleVideo),
                    a((t) => {
                        let r = (0, S.DY)(n.experimentFlags);
                        (n.codecs = [
                            {
                                type: 'audio',
                                name: C.ad.OPUS,
                                priority: 1,
                                payloadType: 120
                            },
                            ...(0, S.yQ)(t, r).map((e, t) => {
                                let n = t + 1,
                                    r = 101 + 2 * t;
                                return {
                                    type: 'video',
                                    name: e.name,
                                    priority: n,
                                    payloadType: r,
                                    rtxPayloadType: r + 1,
                                    encode: e.encode,
                                    decode: e.decode
                                };
                            })
                        ]),
                            n.setCodecs(C.ad.OPUS, C.ad.H264, e),
                            n.conn.startReplay();
                    });
            },
            a = r.createReplayConnection('default', i, t);
        return null == a ? null : ((n.conn = a), n);
    }
    initialize(e) {
        let t;
        this.logger.info('Creating connection to '.concat(e.address, ':').concat(e.port, ' with audio ssrc: ').concat(e.ssrc)),
            (this.audioSSRC = e.ssrc),
            (this.streamUserId = e.streamUserId),
            this.initializeStreamParameters(e.streamParameters),
            (e.streamParameters = [
                {
                    type: R.Tr.AUDIO,
                    ssrc: this.audioSSRC,
                    rid: '',
                    maxBitrate: 64000,
                    soundshare: this.context === C.Yn.STREAM
                },
                ...this.videoStreamParameters
            ]);
        let n = (0, v.zS)(),
            r = null != n.getCodecCapabilities ? n.getCodecCapabilities : n.getSupportedVideoCodecs,
            i = (i, a) => {
                if (this.destroyed) return;
                if (null != i && '' !== i) {
                    this.setConnectionState(C.$j.NO_ROUTE), this.emit(g.Sh.Error, i);
                    return;
                }
                if (null == a) throw Error('Invalid transport info');
                let { protocol: o, address: s, port: l } = a;
                this.logger.info('Connected with local address '.concat(s, ':').concat(l, ' and protocol: ').concat(o)),
                    r((r) => {
                        this.logger.info('Available codecs: '.concat(JSON.stringify(r)));
                        let i = (0, S.DY)(this.experimentFlags);
                        this.logger.info('Experimental codecs: '.concat(JSON.stringify(i))),
                            (this.codecs = [
                                {
                                    type: 'audio',
                                    name: C.ad.OPUS,
                                    priority: 1,
                                    payloadType: 120
                                },
                                ...(0, S.yQ)(r, i).map((e, t) => {
                                    let n = t + 1,
                                        r = 101 + 2 * t;
                                    return {
                                        type: 'video',
                                        name: e.name,
                                        priority: n,
                                        payloadType: r,
                                        rtxPayloadType: r + 1,
                                        encode: e.encode,
                                        decode: e.decode
                                    };
                                })
                            ]),
                            this.logger.info('Audio codecs: '.concat(this.codecs.filter((e) => 'audio' === e.type).map((e) => e.name))),
                            this.logger.info('Video codecs: '.concat(this.codecs.filter((e) => 'video' === e.type).map((e) => e.name + '[encode: ' + e.encode + ', decode: ' + e.decode + ']'))),
                            t.getEncryptionModes((r) => {
                                var i, a, u, c, d, _, E, f, h, p, m, I;
                                this.logger.info('Encryption modes: '.concat(r)),
                                    t.setTransportOptions(this.getConnectionTransportOptions()),
                                    t.setSelfMute(this.selfMute || this.context === C.Yn.STREAM),
                                    t.setSelfDeafen(this.selfDeaf),
                                    t.setOnSpeakingCallback(this.handleSpeakingNative),
                                    null === (i = t.setOnNativeMuteToggleCallback) || void 0 === i || i.call(t, this.handleNativeMuteToggled),
                                    null === (a = t.setOnNativeMuteChangedCallback) || void 0 === a || a.call(t, this.handleNativeMuteChanged),
                                    null === (u = t.setOnSpeakingWhileMutedCallback) || void 0 === u || u.call(t, this.handleSpeakingWhileMuted),
                                    null === (c = t.setPingInterval) || void 0 === c || c.call(t, C.$B),
                                    t.setPingCallback(this.handlePing),
                                    null === (d = t.setPingTimeoutCallback) || void 0 === d || d.call(t, this.handlePingTimeout),
                                    null === (_ = t.setOnVideoEncoderFallbackCallback) || void 0 === _ || _.call(t, this.handleVideoEncoderFallback),
                                    n.setTransportOptions({
                                        builtInEchoCancellation: !0,
                                        echoCancellation: this.echoCancellation,
                                        noiseSuppression: this.noiseSuppression,
                                        automaticGainControl: this.automaticGainControl,
                                        noiseCancellation: this.noiseCancellation
                                    }),
                                    n.setNoInputThreshold(-100),
                                    n.setNoInputCallback(this.handleNoInput),
                                    this.videoSupported && (t.setOnVideoCallback(this.handleVideo), null === (f = t.setOnFirstFrameCallback) || void 0 === f || f.call(t, this.handleFirstFrame), null === (h = t.setOnDesktopSourceEnded) || void 0 === h || h.call(t, this.handleDesktopSourceEnded), null === (p = t.setOnSoundshare) || void 0 === p || p.call(t, this.handleSoundshare), null === (m = t.setOnSoundshareEnded) || void 0 === m || m.call(t, this.handleSoundshareEnded), null === (I = t.setOnSoundshareFailed) || void 0 === I || I.call(t, this.handleSoundshareFailed)),
                                    null === (E = t.setOnMLSFailureCallback) || void 0 === E || E.call(t, this.handleMLSFailure),
                                    this.setConnectionState(C.$j.CONNECTED),
                                    this.emit(g.Sh.Connected, o, {
                                        address: s,
                                        port: l,
                                        mode: this.chooseEncryptionMode(e.modes, r),
                                        codecs: this.codecs
                                    }),
                                    this.on(g.Sh.Stats, this.handleStats);
                                let T = this.getUserOptions();
                                for (let e of (T.forEach((e) => {
                                    var t, n;
                                    return this.logger.info(
                                        'Creating user: '
                                            .concat(e.id, ' with audio SSRC: ')
                                            .concat(e.ssrc, ' and video SSRCs: ')
                                            .concat(null !== (n = null === (t = e.videoSsrcs) || void 0 === t ? void 0 : t.join(',')) && void 0 !== n ? n : 0)
                                    );
                                }),
                                t.mergeUsers(T),
                                this.emit(g.Sh.RemoteStreamsReady, T.length),
                                Object.keys(this.localSpeakingFlags)))
                                    e !== this.userId && this.setSpeakingFlags(e, this.localSpeakingFlags[e]);
                            });
                    });
            };
        if (null != n.createOwnStreamConnectionWithOptions) s = this.context === C.Yn.STREAM && this.streamUserId === this.userId ? n.createOwnStreamConnectionWithOptions : n.createVoiceConnectionWithOptions;
        else if (null != n.createOwnStreamConnection) {
            var a,
                o,
                s,
                l = this.context === C.Yn.STREAM && this.streamUserId === this.userId ? n.createOwnStreamConnection : n.createVoiceConnection;
            s = (e, t, n) => l(t.ssrc, this.userId, t.address, t.port, n, t.experiments, t.streamParameters);
        } else s = (e, t, r) => new n.VoiceConnection(t.ssrc, e, t.address, t.port, r, t.experiments, t.streamParameters);
        null === (a = (t = this.conn = s(this.userId, e, i)).setSecureFramesStateUpdateCallback) ||
            void 0 === a ||
            a.call(t, (e) => {
                this.logger.info('DAVE protocol state update: '.concat(JSON.stringify(e))), this.emit(g.Sh.SecureFramesUpdate, e);
            }),
            null === (o = t.setDesktopSourceStatusCallback) ||
                void 0 === o ||
                o.call(t, (e) => {
                    if ('videohook_start' === e.type) this.emit(g.Sh.VideoHookStart);
                    else if ('videohook_stop' === e.type) this.emit(g.Sh.VideoHookStop);
                    else if ('videohook_initialize' === e.type) this.emit(g.Sh.VideoHookInitialize, e.backend, e.format, e.framebufferFormat, e.sampleCount, e.success, e.reinitialization);
                    else if ('screenshare_finish' === e.type) {
                        var t;
                        this.emit(g.Sh.ScreenshareFinish, e.screenshareFrames, e.videohookFrames, e.hybridDxgiFrames, e.hybridGdiFrames, e.hybridVideohookFrames, e.hybridGraphicsCaptureFrames, e.hybridCaptureMethodSwitches, e.hybridGdiBitBltFrames, e.hybridGdiPrintWindowFrames, e.quartzFrames, null !== (t = e.desktopCapturerType) && void 0 !== t ? t : e.desktop_capturer_type, e.screens, e.windows, e.activity, e.goLiveCameraFrames, e.screenCaptureKitFrames);
                    } else 'video_state' === e.type ? this.emit(g.Sh.VideoState, e.state) : e.type.startsWith('soundshare_') && this.emit(g.Sh.SoundshareTrace, e);
                }),
            this.on('newListener', this.handleNewListenerNative);
    }
    destroy() {
        this.conn.destroy(),
            Object.keys(this.localSpeakingFlags)
                .filter((e) => e !== this.userId)
                .forEach((e) => this.emit(g.Sh.Speaking, e, C.Dg.NONE, this.remoteAudioSSRCs[e])),
            this.setConnectionState(C.$j.DISCONNECTED),
            super.destroy();
    }
    setCodecs(e, t, n) {
        this.conn.setTransportOptions(this.getCodecOptions(e, t, n)), this.videoEncoderFallbackPending && (this.videoEncoderFallbackPending = !1);
    }
    getStats() {
        return this.connectionState === C.$j.DISCONNECTED
            ? Promise.resolve(null)
            : (0, h.timeout)(
                  new Promise((e) => {
                      null != this.conn.getFilteredStats ? this.conn.getFilteredStats(R.QP.ALL, (t) => e((0, N.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants))) : null != this.conn.getStats ? this.conn.getStats((t) => e((0, N.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants))) : (0, v.zS)().getStats((t) => e((0, N.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants)));
                  }),
                  I.T
              ).catch((e) => {
                  if (!(e instanceof h.TimeoutError)) throw e;
              });
    }
    createUser(e, t, n) {
        let r = this.remoteAudioSSRCs[e],
            i = this.remoteVideoSSRCs[e];
        if (null != r && 0 === t) {
            this.logger.warn('Attempting to recreate user '.concat(e, ' with 0 audio SSRC'));
            return;
        }
        (i = void 0 !== i ? [...i].sort() : []), (n = void 0 === n ? (null != i ? i : []) : [...n].sort());
        let a = r !== t,
            o = !_()(i, n);
        if (((this.remoteAudioSSRCs[e] = t), (this.remoteVideoSSRCs[e] = null != n ? n : []), this.userId !== e && (a || o))) {
            let r = void 0 !== n && n.length > 0 ? n[0] : 0,
                i = {
                    id: e,
                    ssrc: t,
                    videoSsrc: r,
                    videoSsrcs: n,
                    rtxSsrc: M(r),
                    mute: this.getLocalMute(e),
                    volume: this.getLocalVolume(e)
                };
            if (this.connectionState === C.$j.CONNECTED) {
                var s;
                this.logger.info(
                    'Creating user: '
                        .concat(e, ' with audio SSRC: ')
                        .concat(t, ' and video SSRCs: ')
                        .concat(null !== (s = null == n ? void 0 : n.join(',')) && void 0 !== s ? s : 0)
                ),
                    this.conn.mergeUsers([i]);
            }
            let a = this.localPans[e];
            null != a && this.setLocalPan(e, a.left, a.right);
            let o = this.localSpeakingFlags[e];
            null != o && o !== C.Dg.NONE && this.setSpeakingFlags(e, o);
        }
    }
    destroyUser(e) {
        null != this.remoteAudioSSRCs[e] && (this.conn.destroyUser(e), delete this.remoteAudioSSRCs[e], delete this.remoteVideoSSRCs[e]);
    }
    setSelfMute(e) {
        (this.selfMute = e), this.conn.setSelfMute(e), this.emit(g.Sh.Mute, e);
    }
    setSelfDeaf(e) {
        (this.selfDeaf = e), this.conn.setSelfDeafen(e);
    }
    setSoundshareSource(e, t) {
        if ((this.soundshareId === e && this.soundshareSentSpeakingEvent) || this.context !== C.Yn.STREAM) return;
        (this.soundshareId = e), (this.soundshareSentSpeakingEvent = !1);
        let n = e;
        null === n && (n = 0),
            this.conn.setTransportOptions({
                soundsharePid: n,
                soundshareEventDriven: !0,
                soundshareLoopback: t
            });
    }
    setLocalMute(e, t) {
        (this.localMutes[e] = t), this.conn.setLocalMute(e, t), this.emit(g.Sh.LocalMute, e, t);
    }
    fastUdpReconnect() {
        null != this.conn.fastUdpReconnect && ((this.numFastUdpReconnects += 1), this.conn.fastUdpReconnect());
    }
    getNumFastUdpReconnects() {
        return null != this.conn.fastUdpReconnect ? this.numFastUdpReconnects : null;
    }
    wasRemoteDisconnected() {
        var e, t;
        null === (e = (t = this.conn).wasRemoteDisconnected) || void 0 === e || e.call(t);
    }
    setLocalVideoDisabled(e, t) {
        (this.disabledLocalVideos[e] = t), this.emit(g.Sh.LocalVideoDisabled, e, t);
    }
    setMinimumJitterBufferLevel(e) {
        this.minimumJitterBufferLevel = e;
    }
    setPostponeDecodeLevel(e) {
        this.postponeDecodeLevel = e;
    }
    setClipRecordUser(e, t, n) {
        if (!this.destroyed) {
            var r, i;
            null === (r = (i = this.conn).setClipRecordUser) || void 0 === r || r.call(i, e, (this.context === C.Yn.STREAM ? 'application' : 'user').concat('audio' === t ? 'Audio' : 'Video'), n);
        }
    }
    setClipsKeyFrameInterval(e) {
        this.context === C.Yn.STREAM &&
            ((this.clipsKeyFrameInterval = e),
            this.conn.setTransportOptions({
                keyframeInterval: this.getKeyFrameInterval(),
                alwaysSendVideo: this.keyframeInterval > 0
            }));
    }
    setViewerSideClip(e) {
        this.context === C.Yn.STREAM && this.conn.setTransportOptions({ enableViewerSideClip: e });
    }
    setRemoteAudioHistory(e) {
        this.conn.setTransportOptions({ remoteAudioHistoryMs: e });
    }
    setQualityDecoupling(e) {
        this.context === C.Yn.STREAM && this.conn.setTransportOptions({ enableQualityDecoupling: e });
    }
    getLocalVolume(e) {
        let t = this.localVolumes[e];
        return null == t && (t = this.context === C.Yn.DEFAULT ? C.Qx : C.Yh), D(t);
    }
    setLocalVolume(e, t) {
        this.localVolumes[e] = t;
        try {
            this.conn.setLocalVolume(e, this.getLocalVolume(e));
        } catch {
            this.logger.warn('Failed to set volume for user: '.concat(e, ': ').concat(t));
        }
    }
    setLocalPan(e, t, n) {
        (this.localPans[e] = {
            left: t,
            right: n
        }),
            this.conn.setLocalPan(e, t, n);
    }
    isAttenuating() {
        return this.attenuationFactor < 1;
    }
    setAttenuation(e, t, n) {
        (this.attenuationFactor = (100 - e) / 100), (this.attenuateWhileSpeakingSelf = t), (this.attenuateWhileSpeakingOthers = n), this.conn.setTransportOptions(this.getAttenuationOptions());
    }
    setCanHavePriority(e, t) {
        var n, r;
        null === (n = (r = this.conn).setRemoteUserCanHavePriority) || void 0 === n || n.call(r, e, t);
    }
    setBitRate(e) {
        this.setVoiceBitRate(e);
    }
    setVoiceBitRate(e) {
        if (this.voiceBitrate === e) return;
        this.voiceBitrate = e;
        let t = this.voiceBitrate;
        this.soundshareActive && (t = Math.max(C.ed, t)), this.conn.setTransportOptions({ encodingVoiceBitRate: t });
    }
    setCameraBitRate(e, t, n) {
        null != n || null != t
            ? this.videoQualityManager.setQualityOverwrite({
                  bitrateMin: null != n && n > 0 ? n : t,
                  bitrateMax: t
              })
            : this.videoQualityManager.setQualityOverwrite({}),
            !this.hasDesktopSource() &&
                this.conn.setTransportOptions({
                    encodingVideoBitRate: e,
                    encodingVideoMinBitRate: n,
                    encodingVideoMaxBitRate: t
                });
    }
    setEchoCancellation(e) {
        (this.echoCancellation = e), (0, v.zS)().setTransportOptions({ echoCancellation: this.echoCancellation });
    }
    setNoiseSuppression(e) {
        (this.noiseSuppression = e), (0, v.zS)().setTransportOptions({ noiseSuppression: this.noiseSuppression });
    }
    setAutomaticGainControl(e) {
        (this.automaticGainControl = e), (0, v.zS)().setTransportOptions({ automaticGainControl: this.automaticGainControl });
    }
    setNoiseCancellation(e) {
        (this.noiseCancellation = e), (0, v.zS)().setTransportOptions({ noiseCancellation: this.noiseCancellation });
    }
    setExperimentalEncoders(e) {
        (this.experimentalEncoders = e), this.conn.setTransportOptions({ experimentalEncoders: this.experimentalEncoders });
    }
    setHardwareH264(e) {
        (this.hardwareH264 = e), this.conn.setTransportOptions({ hardwareH264: this.hardwareH264 });
    }
    setSoftwareH264(e) {
        (this.softwareH264 = e), this.conn.setTransportOptions({ softwareH264: this.softwareH264 });
    }
    setQoS(e) {
        (this.qos = e), this.conn.setTransportOptions({ qos: this.qos });
    }
    setInputMode(e, t) {
        switch (((this.inputMode = e), e)) {
            case C.pM.PUSH_TO_TALK:
                this.pttReleaseDelay = t.pttReleaseDelay;
                break;
            case C.pM.VOICE_ACTIVITY:
                (this.vadThreshold = t.vadThreshold), (this.vadAutoThreshold = t.vadAutoThreshold), (this.vadUseKrisp = t.vadUseKrisp), (this.vadLeading = t.vadLeading), (this.vadTrailing = t.vadTrailing);
                break;
            default:
                throw Error('Unknown Input Mode: '.concat(e));
        }
        this.conn.setTransportOptions({
            inputMode: C.GO[this.inputMode],
            inputModeOptions: this.createInputModeOptions()
        });
    }
    setSilenceThreshold(e) {
        (0, v.zS)().setNoInputThreshold(e);
    }
    setForceAudioInput(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t ? (this.forceAudioPriority = e) : (this.forceAudioNormal = e), this.conn.setPTTActive(this.forceAudioPriority || this.forceAudioNormal, this.forceAudioPriority);
    }
    setSpeakingFlags(e, t) {
        null != this.conn.setRemoteUserSpeakingStatus ? this.conn.setRemoteUserSpeakingStatus(e, t) : null != this.conn.setRemoteUserSpeaking && this.conn.setRemoteUserSpeaking(e, (t & C.Dg.VOICE) === C.Dg.VOICE), this.handleSpeakingFlags(e, t);
    }
    clearAllSpeaking() {}
    setEncryption(e, t) {
        this.logger.info('Selected encryption mode: '.concat(e)),
            this.conn.setTransportOptions({
                encryptionSettings: {
                    mode: e,
                    secretKey: t
                }
            });
    }
    setReconnectInterval(e) {
        (this.reconnectInterval = e), this.conn.setTransportOptions({ reconnectInterval: this.reconnectInterval });
    }
    setKeyframeInterval(e) {
        (this.keyframeInterval = e),
            this.conn.setTransportOptions({
                keyframeInterval: this.getKeyFrameInterval(),
                alwaysSendVideo: this.keyframeInterval > 0
            });
    }
    setVideoQualityMeasurement(e) {
        (this.videoQualityMeasurement = e), this.conn.setTransportOptions({ videoQualityMeasurement: this.videoQualityMeasurement });
    }
    setVideoEncoderExperiments(e) {
        (this.videoEncoderExperiments = e), this.conn.setTransportOptions({ videoEncoderExperiments: this.videoEncoderExperiments });
    }
    setVideoBroadcast(e) {
        if (this.selfVideo !== e) (this.selfVideo = e), this.applyVideoTransportOptions();
    }
    setGoLiveSource(e) {
        let { resolution: t, frameRate: n } = e.quality,
            r = t <= 480 ? (t / 3) * 4 : (t / 9) * 16,
            i = t,
            a = null;
        if ((null != e.desktopDescription ? (a = e.desktopDescription.id) : null != e.cameraDescription && (a = ''.concat(e.cameraDescription.videoDeviceGuid, ':').concat(e.cameraDescription.audioDeviceGuid)), this.goLiveSourceIdentifier === a)) {
            if ((this.setDesktopEncodingOptions(r, i, n), null != e.desktopDescription)) {
                let { soundshareId: t, useLoopback: n } = e.desktopDescription;
                this.soundshareId !== t && this.setSoundshareSource(t, n);
            }
            return;
        }
        if ((this.videoQualityManager.configGoliveSimulcast(this.experimentFlags), (this.goLiveSourceIdentifier = a), null != this.conn.setDesktopSource)) {
            if (null != e.desktopDescription) {
                let { id: t, soundshareId: n, useLoopback: r, useVideoHook: i, useGraphicsCapture: a, useQuartzCapturer: o, allowScreenCaptureKit: s, videoHookStaleFrameTimeoutMs: l, graphicsCaptureStaleFrameTimeoutMs: u, hdrCaptureMode: c } = e.desktopDescription;
                this.setSoundshareSource(n, r);
                let [d, _] = null != t ? t.split(':') : ['', ''];
                null != t
                    ? this.logger.info(
                          'capturing desktop (type: '
                              .concat(d, ', handle: ')
                              .concat(_, ', use-video-hook: ')
                              .concat(i.toString(), ', use-graphics-capture: ')
                              .concat(null == a ? void 0 : a.toString(), ').')
                      )
                    : this.logger.info('capturing desktop (type: <stop>).'),
                    null != this.conn.setDesktopSourceWithOptions
                        ? null != t
                            ? this.conn.setDesktopSourceWithOptions({
                                  type: d,
                                  sourceId: _,
                                  useVideoHook: i,
                                  useGraphicsCapture: a,
                                  useQuartzCapturer: o,
                                  allowScreenCaptureKit: s,
                                  videoHookStaleFrameTimeoutMs: l,
                                  graphicsCaptureStaleFrameTimeoutMs: u,
                                  hdrCaptureMode: c
                              })
                            : this.conn.clearDesktopSource()
                        : this.conn.setDesktopSource('wumpus-'.concat(_), i, d);
            } else if (null != e.cameraDescription) {
                let { videoDeviceGuid: t, audioDeviceGuid: n } = e.cameraDescription;
                this.conn.setGoLiveDevices({
                    videoInputDeviceId: t,
                    audioInputDeviceId: n
                });
            }
            this.setDesktopEncodingOptions(r, i, n);
        }
    }
    clearGoLiveDevices() {
        null != this.goLiveSourceIdentifier && this.setDesktopEncodingOptions(1280, 720, 30), null != this.conn.clearGoLiveDevices && this.conn.clearGoLiveDevices();
    }
    clearDesktopSource() {
        null != this.goLiveSourceIdentifier && this.setDesktopEncodingOptions(1280, 720, 30), (this.goLiveSourceIdentifier = null), null != this.conn.clearDesktopSource ? this.conn.clearDesktopSource() : this.conn.setDesktopSource('', !1, '');
    }
    setDesktopSourceStatusCallback(e) {
        var t, n;
        null === (t = (n = this.conn).setDesktopSourceStatusCallback) || void 0 === t || t.call(n, e);
    }
    hasDesktopSource() {
        return null != this.goLiveSourceIdentifier;
    }
    setDesktopEncodingOptions(e, t, n) {
        if (this.destroyed) return;
        let r = (0 === t && n >= 10) || t > 720 || n > 30 ? R.yf : R.YE,
            i = {
                width: e,
                height: t,
                framerate: n
            },
            a = this.videoQualityManager.getQuality();
        if (!T.SF.equals(i, a.capture) || a.bitrateMax !== r) {
            this.videoQualityManager.setGoliveQuality({
                capture: i,
                encode: i,
                bitrateMax: r
            });
            let a = this.videoStreamParameters.findIndex((e) => 100 === e.quality);
            -1 === a && (a = 0),
                this.videoStreamParameters.length > 0 &&
                    ((this.videoStreamParameters[a].maxResolution = {
                        type: 0 === e && 0 === t ? C.uA.SOURCE : C.uA.FIXED,
                        width: e,
                        height: t
                    }),
                    (this.videoStreamParameters[a].maxFrameRate = n),
                    (this.videoStreamParameters[a].maxBitrate = r)),
                this.emit(g.Sh.Video, this.userId, null, this.audioSSRC, this.videoStreamParameters[a].ssrc, M(this.videoStreamParameters[a].ssrc), this.videoStreamParameters),
                this.conn.setTransportOptions(this.applyQualityConstraints().constraints);
        }
    }
    setSDP(e) {}
    setRemoteVideoSinkWants(e) {
        (this.remoteVideoSinkWants = e), this.updateVideoQuality(R.XR);
    }
    setLocalVideoSinkWants(e) {
        let t = this.localVideoSinkWants,
            n = e;
        for (let [e, s] of Object.entries(this.remoteVideoSSRCs)) {
            var r, i, a, o;
            let l = 0,
                u = 0;
            for (let e of s) (l += null == t ? void 0 : t[e]), (u += null == n ? void 0 : n[e]);
            0 === l && 0 !== u && (null === (r = (i = this.conn).setDisableLocalVideo) || void 0 === r || r.call(i, e, !1)), 0 !== l && 0 === u && (null === (a = (o = this.conn).setDisableLocalVideo) || void 0 === a || a.call(o, e, !0));
        }
        this.localVideoSinkWants = e;
    }
    startSamplesLocalPlayback(e, t, n, r) {
        if (t.numberOfChannels > 2) {
            r(1, 'Too many channels');
            return;
        }
        for (var i = [], a = 0; a < t.numberOfChannels; a++) {
            var o = t.getChannelData(a);
            i.push(o);
        }
        this.conn.startSamplesLocalPlayback(
            e,
            {
                sampleRate: t.sampleRate,
                volume: n
            },
            i,
            r
        );
    }
    stopAllSamplesLocalPlayback() {
        this.conn.stopAllSamplesLocalPlayback();
    }
    stopSamplesLocalPlayback(e) {
        this.conn.stopSamplesLocalPlayback(e);
    }
    setBandwidthEstimationExperiments(e) {
        this.conn.setTransportOptions({ bandwidthEstimationExperiments: e });
    }
    updateVideoQualityCore(e, t) {
        this.videoSupported && !this.destroyed && this.conn.setTransportOptions(e);
    }
    setStreamParameters(e) {
        return new Promise((t, n) => {
            for (let t of this.videoStreamParameters) {
                let r = e.findIndex((e) => e.rid === t.rid);
                if (-1 === r) {
                    n(Error('Invalid rid'));
                    return;
                }
                let i = [];
                !_()(this.videoStreamParameters[r], e[r]) && ((this.videoStreamParameters[r] = { ...e[r] }), i.push({ ...e[r] })), this.conn.setTransportOptions({ streamParameters: i });
            }
            t();
        });
    }
    applyVideoTransportOptions() {
        if (!this.videoSupported) return;
        let e = !1;
        if (this.hasDesktopSource() && this.videoStreamParameters.length > 0) {
            var t;
            e = (null === (t = this.videoStreamParameters[0].maxResolution) || void 0 === t ? void 0 : t.type) === C.uA.SOURCE;
        }
        this.conn.setTransportOptions(this.applyQualityConstraints({ encodingVideoDegradationPreference: this.hasDesktopSource() ? (e ? this.sourceDesktopDegradationPreference : this.desktopDegradationPreference) : this.videoDegradationPreference }).constraints), this.conn.setVideoBroadcast(this.selfVideo);
    }
    chooseEncryptionMode(e, t) {
        for (let n of t) for (let t of e) if (n === t) return n;
        return 'xsalsa20_poly1305';
    }
    getUserOptions() {
        return Object.keys(this.remoteAudioSSRCs).map((e) => {
            let t = void 0 !== this.remoteVideoSSRCs[e] && this.remoteVideoSSRCs[e].length > 0 ? this.remoteVideoSSRCs[e][0] : 0;
            return {
                id: e,
                ssrc: this.remoteAudioSSRCs[e],
                videoSsrc: t,
                videoSsrcs: this.remoteVideoSSRCs[e],
                rtxSsrc: M(t),
                mute: this.getLocalMute(e),
                volume: this.getLocalVolume(e)
            };
        });
    }
    createInputModeOptions() {
        switch (this.inputMode) {
            case C.pM.VOICE_ACTIVITY:
                return {
                    vadThreshold: this.vadThreshold,
                    vadAutoThreshold: this.vadAutoThreshold ? A.a.VERY_AGGRESSIVE : A.a.DISABLED,
                    vadUseKrisp: this.vadUseKrisp,
                    vadLeading: this.vadLeading,
                    vadTrailing: this.vadTrailing
                };
            case C.pM.PUSH_TO_TALK:
                return { pttReleaseDelay: this.pttReleaseDelay };
            default:
                throw Error('Unknown Input Mode: '.concat(this.inputMode));
        }
    }
    getAttenuationOptions() {
        return {
            attenuation: this.isAttenuating(),
            attenuationFactor: this.attenuationFactor,
            attenuateWhileSpeakingSelf: this.attenuateWhileSpeakingSelf,
            attenuateWhileSpeakingOthers: this.attenuateWhileSpeakingOthers
        };
    }
    getCodecParams(e, t) {
        if (e !== C.ad.H264) return {};
        if (t)
            return {
                'level-asymmetry-allowed': '1',
                'packetization-mode': '1',
                'profile-level-id': '42e034',
                'hardware-h264': this.hardwareH264 && this.useElectronVideo && O.Z.useDirectVideo ? '1' : '0'
            };
        {
            let e = '4d0033',
                t = '42e01f';
            return {
                'level-asymmetry-allowed': '1',
                'packetization-mode': '1',
                'profile-level-id': 'android' === (0, v.zS)().platform ? t : e,
                'hardware-h264': this.hardwareH264 && this.useElectronVideo && O.Z.useDirectVideo ? '1' : '0',
                'software-h264': this.softwareH264 ? '1' : '0'
            };
        }
    }
    getCodecOptions(e, t, n) {
        var r, i, a, o;
        let s;
        let l = {
                type: null !== (r = null == (s = this.codecs.find((t) => t.name === e)) ? void 0 : s.payloadType) && void 0 !== r ? r : 0,
                name: e,
                freq: 48000,
                pacsize: 960,
                channels: 1,
                rate: 64000
            },
            u = [
                {
                    type: null !== (i = null == s ? void 0 : s.payloadType) && void 0 !== i ? i : 0,
                    name: e,
                    freq: 48000,
                    channels: 2,
                    params: { stereo: '1' }
                }
            ];
        n === C.Yn.STREAM && (l.channels = 2);
        let c = [],
            d = {
                name: '',
                type: 0,
                rtxType: 0,
                params: {}
            };
        for (s of this.codecs) {
            if (s.name === e) continue;
            let n = {
                name: (0, S.AQ)(s.name),
                type: null !== (a = null == s ? void 0 : s.payloadType) && void 0 !== a ? a : 0,
                rtxType: null !== (o = null == s ? void 0 : s.rtxPayloadType) && void 0 !== o ? o : 0,
                params: this.getCodecParams(s.name, !0)
            };
            this.experimentFlags.has(R.V8.RESET_DECODER_ON_ERRORS) && (n.params['reset-on-errors'] = '1'),
                this.experimentFlags.has(R.V8.SOFTWARE_FALLBACK_ON_ERRORS) && (n.params['fallback-after-errors'] = '3'),
                this.experimentFlags.has(R.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS) && (n.params['fallback-on-consecutive-errors'] = '1'),
                this.experimentFlags.has(R.V8.SIGNAL_AV1_HARDWARE_DECODE) && (n.params['hardware-av1-decode'] = '1'),
                c.push(n),
                s.name === t &&
                    ((d = {
                        ...n,
                        params: this.getCodecParams(s.name, !1)
                    }),
                    this.experimentFlags.has(R.V8.VIDEOTOOLBOX_RATE_CONTROL) && (d.params['fixed-rate-presentation-timestamps'] = '1'));
        }
        return {
            videoEncoder: d,
            videoDecoders: c,
            audioEncoder: l,
            audioDecoders: u
        };
    }
    getKeyFrameInterval() {
        return this.keyframeInterval > 0 && this.clipsKeyFrameInterval > 0 ? Math.min(this.keyframeInterval, this.clipsKeyFrameInterval) : Math.max(this.keyframeInterval, this.clipsKeyFrameInterval);
    }
    getConnectionTransportOptions() {
        let e = {
            selfMute: this.selfMute,
            inputMode: C.GO[this.inputMode],
            inputModeOptions: this.createInputModeOptions(),
            minimumJitterBufferLevel: this.minimumJitterBufferLevel,
            postponeDecodeLevel: this.postponeDecodeLevel,
            ...this.getAttenuationOptions(),
            fec: !0,
            packetLossRate: 0.3,
            qos: this.qos,
            prioritySpeakerDucking: C.jg,
            encodingVoiceBitRate: this.voiceBitrate,
            callBitRate: C.$A,
            callMinBitRate: C.mN,
            callMaxBitRate: C.mC,
            encodingVideoDegradationPreference: this.videoDegradationPreference,
            experimentalEncoders: this.experimentalEncoders,
            hardwareH264: this.hardwareH264,
            softwareH264: this.softwareH264,
            reconnectInterval: this.reconnectInterval
        };
        return (0, v.eJ)(C.eR.VIDEO_EFFECTS) && this.context === C.Yn.STREAM && (e.enableVideoEffects = !0), this.experimentFlags.has(R.V8.MUTE_BEFORE_PROCESSING) && (e.muteBeforeProcessing = !0), this.experimentFlags.has(R.V8.PTT_BEFORE_PROCESSING) && (e.pttBeforeProcessing = !0), this.experimentFlags.has(R.V8.SKIP_ENCODE) && (e.skipEncode = !0), e;
    }
    setStream(e) {
        throw Error('Method not implemented.');
    }
    getUserIdBySsrc(e) {}
    prepareSecureFramesTransition(e, t, n) {
        var r, i;
        null === (r = (i = this.conn).prepareSecureFramesTransition) || void 0 === r || r.call(i, e, t, n);
    }
    prepareSecureFramesEpoch(e, t, n) {
        var r, i;
        null === (r = (i = this.conn).prepareSecureFramesEpoch) || void 0 === r || r.call(i, e, t, n);
    }
    executeSecureFramesTransition(e) {
        var t, n;
        null === (t = (n = this.conn).executeSecureFramesTransition) || void 0 === t || t.call(n, e);
    }
    getMLSKeyPackage(e) {
        var t, n;
        null === (t = (n = this.conn).getMLSKeyPackage) || void 0 === t || t.call(n, e);
    }
    updateMLSExternalSender(e) {
        var t, n;
        null === (t = (n = this.conn).updateMLSExternalSender) || void 0 === t || t.call(n, e);
    }
    processMLSProposals(e, t) {
        var n, r;
        null === (n = (r = this.conn).processMLSProposals) || void 0 === n || n.call(r, e, t);
    }
    prepareMLSCommitTransition(e, t, n) {
        var r, i;
        null === (r = (i = this.conn).prepareMLSCommitTransition) || void 0 === r || r.call(i, e, t, n);
    }
    processMLSWelcome(e, t, n) {
        var r, i;
        null === (r = (i = this.conn).processMLSWelcome) || void 0 === r || r.call(i, e, t, n);
    }
    getMLSPairwiseFingerprint(e, t, n) {
        var r, i;
        null === (r = (i = this.conn).getMLSPairwiseFingerprint) || void 0 === r || r.call(i, e, t, n);
    }
    presentDesktopSourcePicker(e) {
        var t, n;
        null === (t = (n = this.conn).presentDesktopSourcePicker) || void 0 === t || t.call(n, e);
    }
    constructor(e, t, n) {
        super(e, t),
            y(this, 'mediaEngineConnectionId', 'Native-'.concat(L++)),
            y(this, 'goLiveSourceIdentifier', void 0),
            y(this, 'selfMute', !1),
            y(this, 'selfVideo', !1),
            y(this, 'forceAudioNormal', !1),
            y(this, 'forceAudioPriority', !1),
            y(this, 'codecs', []),
            y(this, 'videoEncoderFallbackPending', !1),
            y(this, 'desktopDegradationPreference', (0, v.zS)().DegradationPreference.MAINTAIN_FRAMERATE),
            y(this, 'sourceDesktopDegradationPreference', (0, v.zS)().DegradationPreference.DISABLED),
            y(this, 'videoDegradationPreference', (0, v.zS)().DegradationPreference.BALANCED),
            y(this, 'localPans', {}),
            y(this, 'remoteAudioSSRCs', {}),
            y(this, 'remoteVideoSSRCs', {}),
            y(this, 'inputMode', C.pM.VOICE_ACTIVITY),
            y(this, 'vadThreshold', -40),
            y(this, 'vadAutoThreshold', !0),
            y(this, 'vadUseKrisp', !0),
            y(this, 'vadLeading', 5),
            y(this, 'vadTrailing', 25),
            y(this, 'pttReleaseDelay', 20),
            y(this, 'soundshareActive', !1),
            y(this, 'soundshareId', null),
            y(this, 'soundshareSentSpeakingEvent', !1),
            y(this, 'echoCancellation', !0),
            y(this, 'noiseSuppression', !0),
            y(this, 'automaticGainControl', !0),
            y(this, 'noiseCancellation', !1),
            y(this, 'experimentalEncoders', !1),
            y(this, 'hardwareH264', !0),
            y(this, 'softwareH264', !0),
            y(this, 'attenuationFactor', 0.5),
            y(this, 'attenuateWhileSpeakingSelf', !1),
            y(this, 'attenuateWhileSpeakingOthers', !0),
            y(this, 'qos', !0),
            y(this, 'conn', void 0),
            y(this, 'minimumJitterBufferLevel', 0),
            y(this, 'postponeDecodeLevel', 100),
            y(this, 'reconnectInterval', 60000),
            y(this, 'keyframeInterval', 0),
            y(this, 'clipsKeyFrameInterval', 0),
            y(this, 'videoQualityMeasurement', ''),
            y(this, 'videoEncoderExperiments', ''),
            y(this, 'numFastUdpReconnects', 0),
            y(this, 'logger', void 0),
            y(this, 'handleSpeakingNative', (e, t) => {
                let n = C.Dg.NONE;
                (n = 'boolean' == typeof t ? (t ? C.Dg.VOICE : C.Dg.NONE) : t), this.handleSpeakingFlags(e, n);
            }),
            y(this, 'handleNativeMuteToggled', () => {
                this.emit(g.Sh.ToggleMuteFromNative);
            }),
            y(this, 'handleNativeMuteChanged', (e) => {
                this.emit(g.Sh.NativeMuteChanged, e);
            }),
            y(this, 'handleSpeakingFlags', (e, t) => {
                this.localSpeakingFlags[e] = t;
                let n = e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e];
                this.emit(g.Sh.Speaking, e, t, n), (t & C.Dg.SOUNDSHARE) != 0 && !1 === this.soundshareSentSpeakingEvent && (this.emit(g.Sh.SoundshareSpeaking), (this.soundshareSentSpeakingEvent = !0));
            }),
            y(this, 'handleSpeakingWhileMuted', () => {
                this.emit(g.Sh.SpeakingWhileMuted);
            }),
            y(this, 'handlePing', (e, t, n) => {
                this.emit(g.Sh.Ping, e);
            }),
            y(this, 'handlePingTimeout', (e, t, n, r) => {
                this.emit(g.Sh.PingTimeout, n, r > 0 ? r : 4000);
            }),
            y(this, 'handleVideoEncoderFallback', (e) => {
                if (!this.videoEncoderFallbackPending) this.logger.info('Falling back from current video encoder: '.concat(e)), (this.codecs = this.codecs.map((t) => ((e === t.name || ('AV1' === t.name && 'AV1X' === e)) && (t.encode = !1), t)).filter((e) => !('video' === e.type && !1 === e.encode && !1 === e.decode))), this.emit(g.Sh.VideoEncoderFallback, this.codecs), (this.videoEncoderFallbackPending = !0);
            }),
            y(this, 'handleVideo', (e, t, n, r) => {
                let i = c()(this.videoStreamParameters);
                e === this.userId
                    ? null != r && Array.isArray(r) && r.length > 0
                        ? r.forEach((e) => {
                              i.forEach((t, n) => {
                                  t.rid === e.rid &&
                                      (i[n] = {
                                          ...t,
                                          ssrc: e.ssrc,
                                          rtxSsrc: e.rtxSsrc,
                                          active: e.active
                                      });
                              });
                          })
                        : t > 0
                          ? ((i[0].active = !0), (i[0].ssrc = t), (i[0].rtxSsrc = M(t)))
                          : (i[0].active = !1)
                    : t > 0 && (void 0 !== this.remoteVideoSSRCs[e] ? !this.remoteVideoSSRCs[e].includes(t) && (this.remoteVideoSSRCs[e] = [...this.remoteVideoSSRCs[e], t]) : (this.remoteVideoSSRCs[e] = [t])),
                    (this.videoStreamParameters = i),
                    this.emit(g.Sh.Video, e, null != n && '' !== n ? n : null, e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e], t, M(t), this.videoStreamParameters);
            }),
            y(this, 'handleFirstFrame', (e, t, n) => {
                this.emit(g.Sh.FirstFrame, e, t, n);
            }),
            y(this, 'handleNoInput', (e) => {
                this.emit(g.Sh.Silence, !e);
            }),
            y(this, 'handleDesktopSourceEnded', () => {
                this.emit(g.Sh.DesktopSourceEnd);
            }),
            y(this, 'handleSoundshare', (e) => {
                e && ((this.soundshareActive = !0), this.conn.setTransportOptions({ encodingVoiceBitRate: Math.max(C.ed, this.voiceBitrate) }), this.emit(g.Sh.SoundshareAttached));
            }),
            y(this, 'handleSoundshareFailed', (e, t, n) => {
                this.emit(g.Sh.SoundshareFailed, {
                    failureCode: e,
                    failureReason: t,
                    willRetry: n
                });
            }),
            y(this, 'handleSoundshareEnded', () => {
                (this.soundshareActive = !1), !this.destroyed && this.conn.setTransportOptions({ encodingVoiceBitRate: this.voiceBitrate });
            }),
            y(this, 'handleNewListenerNative', (e) => {
                if (e === g.Sh.ConnectionStateChange) this.emit(e, this.connectionState);
            }),
            y(this, 'handleStats', (e) => {
                if (this.connectionState === C.$j.DISCONNECTED) {
                    this.off(g.Sh.Stats, this.handleStats);
                    return;
                }
                if (null != e) {
                    if (null != this.stats) {
                        let t = f()(
                                e.rtp.outbound,
                                (e, t) => {
                                    var n, r;
                                    return (e.lost += null !== (n = t.packetsLost) && void 0 !== n ? n : 0), (e.sent += null !== (r = t.packetsSent) && void 0 !== r ? r : 0), e;
                                },
                                {
                                    lost: 0,
                                    sent: 0
                                }
                            ),
                            n = f()(
                                this.stats.rtp.outbound,
                                (e, t) => {
                                    var n, r;
                                    return (e.lost += null !== (n = t.packetsLost) && void 0 !== n ? n : 0), (e.sent += null !== (r = t.packetsSent) && void 0 !== r ? r : 0), e;
                                },
                                {
                                    lost: 0,
                                    sent: 0
                                }
                            ),
                            r = t.sent - n.sent,
                            i = t.lost - n.lost;
                        if (0 === r) this.emit(g.Sh.OutboundLossRate, 0);
                        else if (r > 0 && i >= 0) {
                            let e = l()(i / (r + i), 0, 1);
                            this.emit(g.Sh.OutboundLossRate, 100 * e);
                        }
                        let a = e.rtp.outbound.filter((e) => 'audio' === e.type)[0],
                            o = this.stats.rtp.outbound.filter((e) => 'audio' === e.type)[0];
                        if (null != a && null != o && null != a.framesCaptured && null != o.framesCaptured) {
                            let e = a.framesCaptured - o.framesCaptured,
                                t = null != a.noiseCancellerFrames ? (null != o.noiseCancellerFrames ? a.noiseCancellerFrames - o.noiseCancellerFrames : 0) : e;
                            if (this.noiseCancellation && t > b && null != a.noiseCancellerProcessTime && null != o.noiseCancellerProcessTime) {
                                let e = a.noiseCancellerProcessTime - o.noiseCancellerProcessTime;
                                e / t > 8 ? this.emit(g.Sh.NoiseCancellationError, C.H3.CPU_OVERUSE) : 0 === e && this.emit(g.Sh.NoiseCancellationError, C.H3.FAILED);
                            }
                            this.inputMode === C.pM.VOICE_ACTIVITY && this.vadAutoThreshold && this.vadUseKrisp && e > b && null != a.voiceActivityDetectorProcessTime && null != o.voiceActivityDetectorProcessTime && (a.voiceActivityDetectorProcessTime - o.voiceActivityDetectorProcessTime) / e > 4 && this.emit(g.Sh.VoiceActivityDetectorError, C.H3.VAD_CPU_OVERUSE);
                        }
                    }
                    this.stats = e;
                }
            }),
            y(this, 'handleMLSFailure', (e, t) => {
                this.emit(g.Sh.MLSFailure, e, t);
            }),
            (this.logger = new p.Y('Connection('.concat(e, ')'))),
            (this.videoSupported = n);
    }
}
