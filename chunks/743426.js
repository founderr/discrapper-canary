n.d(t, {
    Z: function () {
        return S;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(264344),
    o = n.n(a),
    s = n(259443),
    l = n(47770),
    u = n(46973),
    c = n(734298),
    d = n(997545),
    _ = n(501950),
    E = n(992774),
    f = n(656795),
    h = n(650886),
    p = n(65154),
    m = n(149396);
function I(e, t, n) {
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
function T(e) {
    return (null != e ? e : m.Qx) / m.Qx;
}
function g(e, t, n) {
    return t + ((n - t) * e) / 100;
}
class S extends l.Z {
    destroy() {
        this.eachConnection((e) => e.destroy()), this.emit(u.aB.Destroy), this.removeAllListeners();
    }
    interact() {}
    static supported() {
        return (0, E.Zh)();
    }
    supported() {
        return !0;
    }
    supports(e) {
        var t, n;
        switch (e) {
            case m.AN.LEGACY_AUDIO_SUBSYSTEM:
                return (0, E.eJ)(m.eR.VOICE_LEGACY_SUBSYSTEM);
            case m.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM:
                return (0, E.eJ)(m.eR.VOICE_EXPERIMENTAL_SUBSYSTEM);
            case m.AN.AUTOMATIC_AUDIO_SUBSYSTEM:
                return (0, E.eJ)(m.eR.VOICE_AUTOMATIC_SUBSYSTEM);
            case m.AN.DEBUG_LOGGING:
                return (0, E.eJ)(m.eR.DEBUG_LOGGING);
            case m.AN.SOUNDSHARE:
                return (0, E.eJ)(m.eR.SOUNDSHARE);
            case m.AN.SCREEN_SOUNDSHARE:
                return (0, E.eJ)(m.eR.SCREEN_SOUNDSHARE);
            case m.AN.ELEVATED_HOOK:
                return (0, E.eJ)(m.eR.ELEVATED_HOOK);
            case m.AN.LOOPBACK:
                return (0, E.eJ)(m.eR.LOOPBACK);
            case m.AN.WUMPUS_VIDEO:
                return (0, E.eJ)(m.eR.WUMPUS_VIDEO);
            case m.AN.HYBRID_VIDEO:
                return (0, E.eJ)(m.eR.HYBRID_VIDEO);
            case m.AN.ATTENUATION:
            case m.AN.VIDEO_HOOK:
                return (null === o() || void 0 === o() ? void 0 : null === (t = o().os) || void 0 === t ? void 0 : t.family) != null && /^win/i.test(o().os.family);
            case m.AN.EXPERIMENTAL_SOUNDSHARE:
                return (0, E.eJ)(m.eR.SOUNDSHARE_LOOPBACK);
            case m.AN.OPEN_H264:
                return (null === o() || void 0 === o() ? void 0 : null === (n = o().os) || void 0 === n ? void 0 : n.family) != null && /^win|linux|OS X/i.test(o().os.family);
            case m.AN.EXPERIMENTAL_ENCODERS:
                return (0, E.eJ)(m.eR.EXPERIMENTAL_ENCODERS);
            case m.AN.REMOTE_LOCUS_NETWORK_CONTROL:
                return (0, E.eJ)(m.eR.REMOTE_LOCUS_NETWORK_CONTROL);
            case m.AN.SCREEN_PREVIEWS:
                return (0, E.eJ)(m.eR.SCREEN_PREVIEWS);
            case m.AN.CLIPS:
                return (0, E.eJ)(m.eR.CLIPS);
            case m.AN.WINDOW_PREVIEWS:
                return (0, E.eJ)(m.eR.WINDOW_PREVIEWS);
            case m.AN.AUDIO_DEBUG_STATE:
                return (0, E.eJ)(m.eR.AUDIO_DEBUG_STATE);
            case m.AN.CONNECTION_REPLAY:
                return (0, E.eJ)(m.eR.CONNECTION_REPLAY);
            case m.AN.SIMULCAST:
                return (0, E.eJ)(m.eR.SIMULCAST) && (0, E.eJ)(m.eR.SIMULCAST_BUGFIX);
            case m.AN.RTC_REGION_RANKING:
                return (0, E.eJ)(m.eR.RTC_REGION_RANKING);
            case m.AN.DIRECT_VIDEO:
                return (0, E.eJ)(m.eR.DIRECT_VIDEO) && null != window.createDiscordStream;
            case m.AN.ELECTRON_VIDEO:
                return (0, E.eJ)(m.eR.ELECTRON_VIDEO);
            case m.AN.MEDIAPIPE:
                return (0, E.eJ)(m.eR.MEDIAPIPE);
            case m.AN.FIXED_KEYFRAME_INTERVAL:
                return (0, E.eJ)(m.eR.FIXED_KEYFRAME_INTERVAL);
            case m.AN.FIRST_FRAME_CALLBACK:
                return (0, E.eJ)(m.eR.FIRST_FRAME_CALLBACK);
            case m.AN.REMOTE_USER_MULTI_STREAM:
                return (0, E.eJ)(m.eR.REMOTE_USER_MULTI_STREAM);
            case m.AN.IMAGE_QUALITY_MEASUREMENT:
                return (0, E.eJ)(m.eR.IMAGE_QUALITY_MEASUREMENT);
            case m.AN.AMD_EXPERIMENTAL_RATE_CONTROL:
                return (0, E.eJ)(m.eR.AMD_EXPERIMENTAL_RATE_CONTROL);
            case m.AN.GO_LIVE_HARDWARE:
                return (0, E.eJ)(m.eR.GO_LIVE_HARDWARE);
            case m.AN.SCREEN_CAPTURE_KIT:
                return (0, E.eJ)(m.eR.SCREEN_CAPTURE_KIT);
            case m.AN.CAPTURE_TIMEOUT_EXPERIMENTS:
                return (0, E.eJ)(m.eR.CAPTURE_TIMEOUT_EXPERIMENTS);
            case m.AN.NATIVE_SCREENSHARE_PICKER:
                return (0, E.eJ)(m.eR.NATIVE_SCREENSHARE_PICKER);
            case m.AN.MLS_PAIRWISE_FINGERPRINTS:
                return (0, E.eJ)(m.eR.MLS_PAIRWISE_FINGERPRINTS);
            case m.AN.DIAGNOSTICS:
            case m.AN.NATIVE_PING:
            case m.AN.AUTOMATIC_VAD:
            case m.AN.AUDIO_INPUT_DEVICE:
            case m.AN.AUDIO_OUTPUT_DEVICE:
            case m.AN.QOS:
            case m.AN.VOICE_PROCESSING:
            case m.AN.AUTO_ENABLE:
            case m.AN.VIDEO:
            case m.AN.DESKTOP_CAPTURE:
            case m.AN.DESKTOP_CAPTURE_FORMAT:
            case m.AN.DESKTOP_CAPTURE_APPLICATIONS:
            case m.AN.VOICE_PANNING:
            case m.AN.AEC_DUMP:
            case m.AN.DISABLE_VIDEO:
            case m.AN.SAMPLE_PLAYBACK:
            case m.AN.NOISE_SUPPRESSION:
            case m.AN.AUTOMATIC_GAIN_CONTROL:
                return !0;
            default:
                return !1;
        }
    }
    connect(e, t, n) {
        !(0, E.eJ)(m.eR.EXPERIMENT_CONFIG) && (n.experiments = void 0);
        let r = d.Z.create(e, t, n);
        return (
            r.on(u.Sh.Destroy, (e) => {
                this.connections.delete(e), this.connectionsEmpty() && (0, E.p8)(m.uJ.NORMAL);
            }),
            r.on(u.Sh.Connected, () => {
                r.setVideoBroadcast(this.shouldConnectionBroadcastVideo(r));
            }),
            r.on(u.Sh.Silence, (e) => {
                this.emit(u.aB.Silence, e);
            }),
            this.connections.add(r),
            (0, E.p8)(m.uJ.HIGH),
            this.emit(u.aB.Connection, r),
            r
        );
    }
    shouldConnectionBroadcastVideo(e) {
        return (e.context === m.Yn.DEFAULT && this.videoInputDeviceId !== m.Av) || e.hasDesktopSource();
    }
    eachConnection(e, t) {
        this.connections.forEach((n) => {
            (null == t || n.context === t) && e(n);
        });
    }
    enable() {
        return Promise.resolve();
    }
    setInputVolume(e) {
        (0, E.zS)().setInputVolume(T(e));
    }
    setOutputVolume(e) {
        (0, E.zS)().setOutputVolume(T(e));
    }
    getAudioInputDevices() {
        return (0, _.Hg)();
    }
    setAudioInputDevice(e) {
        (0, E.eJ)(m.eR.SET_AUDIO_DEVICE_BY_ID)
            ? (0, E.zS)().setInputDevice(e)
            : (0, _.Hg)().then((t) => {
                  var n;
                  let r = null !== (n = t.find((t) => t.id === e)) && void 0 !== n ? n : t[0];
                  null != r && (0, E.zS)().setInputDevice(r.index);
              });
    }
    getAudioOutputDevices() {
        return (0, _.HS)();
    }
    setAudioOutputDevice(e) {
        (0, E.eJ)(m.eR.SET_AUDIO_DEVICE_BY_ID)
            ? (0, E.zS)().setOutputDevice(e)
            : (0, _.HS)().then((t) => {
                  var n;
                  let r = null !== (n = t.find((t) => t.id === e)) && void 0 !== n ? n : t[0];
                  null != r && (0, E.zS)().setOutputDevice(r.index);
              });
    }
    getVideoInputDevices() {
        return (0, _.l0)();
    }
    async setVideoInputDevice(e) {
        let t = (await this.getVideoInputDevices()).find((t) => t.id === e),
            n = null != t ? t.id : m.Av;
        if (n !== this.videoInputDeviceId) {
            if (((this.videoInputDeviceId = n), (0, E.eJ)(m.eR.SET_VIDEO_DEVICE_BY_ID))) {
                let e = null != t ? (null != t.originalId && '' !== t.originalId ? t.originalId : t.id) : m.Av;
                (0, E.zS)().setVideoInputDevice(e);
            } else (0, E.zS)().setVideoInputDevice(null != t ? t.index : -1);
            this.connections.forEach((e) => e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e)));
        }
    }
    getSupportedVideoCodecs(e) {
        (0, E.zS)().getSupportedVideoCodecs(e);
    }
    getCodecCapabilities(e) {
        (0, E.zS)().getCodecCapabilities(e);
    }
    setGoLiveSource(e, t) {
        if (null == e) {
            this.eachConnection((e) => {
                e.clearDesktopSource(), e.clearGoLiveDevices(), e.setSoundshareSource(0, !1), e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e));
            }, t);
            return;
        }
        this.eachConnection((n) => {
            if (t !== m.Yn.STREAM || n.streamUserId === n.userId) n.setGoLiveSource(e), n.setVideoBroadcast(this.shouldConnectionBroadcastVideo(n));
        }, t);
    }
    setClipsSource(e) {
        var t;
        let n = (0, E.zS)();
        if (null == n.setClipsSource || null == n.setOnClipsRecordingEvent || null == n.applyClipsSettings) return;
        if (null == e) {
            n.setClipsSource({
                id: '',
                soundshareId: 0
            });
            return;
        }
        let { frameRate: r, resolution: i } = e.quality,
            a = i <= 480 ? (i / 3) * 4 : (i / 9) * 16,
            o = i,
            { id: s, soundshareId: l, useLoopback: c, useVideoHook: d, useGraphicsCapture: _, useQuartzCapturer: f, allowScreenCaptureKit: h, hdrCaptureMode: p } = e.desktopDescription;
        n.setOnClipsRecordingEvent((t) => {
            this.logger.info('Clips recording event: '.concat(m.Pf[t], ' received for stream ').concat(s, ' and sound ').concat(l, '.')), t === m.Pf.GoLiveEnded ? this.emit(u.aB.ClipsRecordingRestartNeeded) : t === m.Pf.Error ? this.emit(u.aB.ClipsInitFailure, 'Failed to set clips source in media engine', e.applicationName) : (t === m.Pf.Ended || t === m.Pf.StoppedByGoLive) && this.emit(u.aB.ClipsRecordingEnded, s, l);
        }),
            null === (t = n.applyClipsSettings) ||
                void 0 === t ||
                t.call(n, {
                    useVideoHook: d,
                    useGraphicsCapture: _,
                    useQuartzCapturer: f,
                    allowScreenCaptureKit: h,
                    hdrCaptureMode: p,
                    soundshareLoopback: c,
                    frameRate: r,
                    width: a,
                    height: o
                });
        let [I, T] = null != s ? s.split(':') : ['', ''];
        n.setClipsSource({
            id: T,
            soundshareId: null != l ? l : 0
        });
    }
    setClipsQualitySettings(e, t, n) {
        let r = (0, E.zS)();
        return null != r.applyClipsQualitySettings && (r.applyClipsQualitySettings(e, t, n), !0);
    }
    setSoundshareSource(e, t, n) {
        this.eachConnection((r) => {
            if (n !== m.Yn.STREAM || r.streamUserId === r.userId) r.setSoundshareSource(e, t);
        }, n);
    }
    getDesktopSource() {
        return Promise.reject(Error('NO_STREAM'));
    }
    getScreenPreviews(e, t) {
        return new Promise((n) => {
            null != (0, E.zS)().getScreenPreviews
                ? (0, E.zS)().getScreenPreviews(e, t, (e) => {
                      n(
                          e.map((e, t) => ({
                              ...e,
                              name: 'Screen ' + (t + 1)
                          }))
                      );
                  })
                : n([]);
        });
    }
    setClipBufferLength(e) {
        var t, n;
        null === (t = (n = (0, E.zS)()).setClipBufferLength) || void 0 === t || t.call(n, e);
    }
    saveClip(e, t) {
        let n = (0, E.zS)();
        return null == n.setClipBufferLength || null == n.saveClip
            ? Promise.reject('unsupported')
            : new Promise((r, i) => {
                  n.saveClip(
                      e,
                      t,
                      (e, t, n) =>
                          r({
                              duration: e,
                              clipStats: JSON.parse(n)
                          }),
                      (e) => i(JSON.parse(e))
                  );
              });
    }
    saveClipForUser(e, t, n) {
        let r = (0, E.zS)();
        return null == r.saveClipForUser
            ? Promise.reject('unsupported')
            : new Promise((i, a) => {
                  r.saveClipForUser(
                      e,
                      t,
                      n,
                      (e, t, n) =>
                          i({
                              duration: e,
                              clipStats: JSON.parse(n)
                          }),
                      (e) => a(JSON.parse(e))
                  );
              });
    }
    updateClipMetadata(e, t) {
        let n = (0, E.zS)();
        return null == n.updateClipMetadata
            ? Promise.reject('unsupported')
            : new Promise((r, i) => {
                  n.updateClipMetadata(e, t, r, i);
              });
    }
    exportClip(e, t) {
        let n = (0, E.zS)();
        return null == n.exportClip
            ? Promise.reject('unsupported')
            : new Promise((r, i) => {
                  n.exportClip(e, t, (e) => r(new Blob([e])), i);
              });
    }
    getWindowPreviews(e, t) {
        return new Promise((n) => {
            null != (0, E.zS)().getWindowPreviews
                ? (0, E.zS)().getWindowPreviews(e, t, (e) => {
                      n(e);
                  })
                : n([]);
        });
    }
    setAudioSubsystem(e) {
        null != (0, E.zS)().setAudioSubsystem ? (0, E.zS)().setAudioSubsystem(e) : (0, E.zS)().setUseLegacyAudioDevice(e === m.iA.LEGACY);
    }
    getAudioSubsystem() {
        return this.audioSubsystem;
    }
    getAudioLayer() {
        return this.audioLayer;
    }
    getDebugLogging() {
        return !!this.supports(m.AN.DEBUG_LOGGING) && (0, E.zS)().getDebugLogging();
    }
    setDebugLogging(e) {
        this.supports(m.AN.DEBUG_LOGGING) && (0, E.zS)().setDebugLogging(e);
    }
    setExperimentalAdm(e) {
        let { setExperimentalAdm: t, getAudioSubsystem: n } = (0, E.zS)();
        null == t || t(e),
            null == n ||
                n((e) => {
                    this.audioSubsystem = e;
                });
    }
    setLoopback(e, t) {
        null != (0, E.zS)().setLoopback &&
            (0, E.zS)().setLoopback(e, {
                echoCancellation: t.echoCancellation,
                noiseSuppression: t.noiseSuppression,
                automaticGainControl: t.automaticGainControl,
                noiseCancellation: t.noiseCancellation
            }),
            null != (0, E.zS)().setEmitVADLevel2
                ? (0, E.zS)().setEmitVADLevel2(e || this.listenerCount(u.aB.VoiceActivity) > 0)
                : (0, E.zS)().setEmitVADLevel(e || this.listenerCount(u.aB.VoiceActivity) > 0, e, {
                      echoCancellation: t.echoCancellation,
                      noiseSuppression: t.noiseSuppression,
                      automaticGainControl: t.automaticGainControl,
                      noiseCancellation: t.noiseCancellation
                  });
    }
    getLoopback() {
        return !1;
    }
    setH264Enabled(e) {
        (0, E.zS)().setTransportOptions({ h264Enabled: e });
    }
    setAv1Enabled(e) {
        (0, E.zS)().setTransportOptions({ av1Enabled: e });
    }
    setH265Enabled(e) {
        (0, E.zS)().setTransportOptions({ h265Enabled: e });
    }
    getCodecSurvey() {
        return null != this.codecSurvey
            ? Promise.resolve(this.codecSurvey)
            : new Promise((e, t) => {
                  let n = (0, E.zS)();
                  null != n.getCodecSurvey
                      ? n.getCodecSurvey((t) => {
                            (this.codecSurvey = t), e(t);
                        })
                      : t(Error('getCodecSurvey is not implemented.'));
              });
    }
    writeAudioDebugState() {
        return new Promise((e, t) => {
            let { writeAudioDebugState: n } = (0, E.zS)();
            null != n ? (n(), e()) : t(Error('Audio debug state is not supported.'));
        });
    }
    startAecDump() {}
    stopAecDump() {}
    setAecDump(e) {
        var t, n;
        null === (t = (n = (0, E.zS)()).setAecDump) || void 0 === t || t.call(n, e);
    }
    rankRtcRegions(e) {
        return new Promise((t, n) => {
            let { rankRtcRegions: r } = (0, E.zS)();
            null != r ? r(e, (e) => t(e)) : n(Error('RTC region latency test is not supported.'));
        });
    }
    createReplayConnection(e, t) {
        let n = d.Z.createReplay(e, t);
        return null == n
            ? null
            : (n.on(u.Sh.Destroy, (e) => {
                  this.connections.delete(e), this.connectionsEmpty() && (0, E.p8)(m.uJ.NORMAL);
              }),
              this.connections.add(n),
              (0, E.p8)(m.uJ.HIGH),
              this.emit(u.aB.Connection, n),
              n);
    }
    setUseDirectVideo(e) {
        h.Z.useDirectVideo = e;
    }
    setMaxSyncDelayOverride(e) {
        let { setMaxSyncDelayOverride: t } = (0, E.zS)();
        null != t && t(e);
    }
    applyMediaFilterSettings(e) {
        let { applyMediaFilterSettings: t, applyMediaFilterSettingsWithCallback: n } = (0, E.zS)();
        return null != n
            ? new Promise((t, r) => {
                  n(e, t);
              })
            : (null != t && t(e), Promise.resolve());
    }
    startLocalAudioRecording(e) {
        return new Promise((t, n) => {
            let { startLocalAudioRecording: r } = (0, E.zS)();
            null != r
                ? r(e, (e) => {
                      e ? t() : n(Error('Failed to start local audio recording.'));
                  })
                : n(Error('startLocalAudioRecording is not supported.'));
        });
    }
    stopLocalAudioRecording(e) {
        var t, n;
        null === (t = (n = (0, E.zS)()).stopLocalAudioRecording) ||
            void 0 === t ||
            t.call(n, (t, n) => {
                e(t, n);
            }),
            this.listenerCount(u.aB.VoiceActivity) > 0 && null != (0, E.zS)().setEmitVADLevel2 && (0, E.zS)().setEmitVADLevel2(!0);
    }
    setHasFullbandPerformance(e) {
        var t, n;
        null === (t = (n = (0, E.zS)()).setHasFullbandPerformance) || void 0 === t || t.call(n, e);
    }
    getSupportedSecureFramesProtocolVersion() {
        var e;
        return null !== (e = (0, E.zS)().SupportedSecureFramesProtocolVersion) && void 0 !== e ? e : 0;
    }
    getSupportedBandwidthEstimationExperiments(e) {
        var t, n;
        null === (t = (n = (0, E.zS)()).getSupportedBandwidthEstimationExperiments) || void 0 === t || t.call(n, e);
    }
    getMLSSigningKey(e, t) {
        return new Promise((n, r) => {
            let i = (0, E.zS)();
            null != i.getMLSSigningKey
                ? i.getMLSSigningKey(e, t, (e, t) =>
                      n({
                          key: e,
                          signature: t
                      })
                  )
                : r(Error('NOT_IMPLEMENTED'));
        });
    }
    setSidechainCompression(e) {
        var t, n;
        null === (t = (n = (0, E.zS)()).setSidechainCompression) || void 0 === t || t.call(n, e);
    }
    setSidechainCompressionStrength(e) {
        var t, n;
        let r = 100 - e,
            i = g(r, p.Zq, p.WA),
            a = g(r, p.QO, p.JA);
        null === (t = (n = (0, E.zS)()).applySidechainCompressionSettings) ||
            void 0 === t ||
            t.call(n, {
                threshold: i,
                ratio: a
            });
    }
    setNativeDesktopVideoSourcePickerActive(e) {
        var t, n;
        null === (t = (n = (0, E.zS)()).setNativeDesktopVideoSourcePickerActive) || void 0 === t || t.call(n, e);
    }
    presentNativeScreenSharePicker(e) {
        var t, n;
        null === (t = (n = (0, E.zS)()).presentNativeScreenSharePicker) || void 0 === t || t.call(n, e);
    }
    releaseNativeDesktopVideoSourcePickerStream() {
        var e, t;
        null === (e = (t = (0, E.zS)()).releaseNativeDesktopVideoSourcePickerStream) || void 0 === e || e.call(t);
    }
    watchdogTick() {
        let e = !1;
        (0, E.zS)().pingVoiceThread(() => {
            (e = !0), (this.consecutiveWatchdogFailures = 0);
        }),
            setTimeout(() => {
                !e && ++this.consecutiveWatchdogFailures > 1 ? this.emit(u.aB.WatchdogTimeout) : this.watchdogTick();
            }, m.H0);
    }
    connectionsEmpty() {
        return 0 === this.connections.size;
    }
    constructor() {
        var e, t, n, r;
        super(),
            (e = this),
            I(this, 'Video', h.Z),
            I(this, 'Camera', f.Z),
            I(this, 'videoInputDeviceId', m.Av),
            I(this, 'connections', new Set()),
            I(this, 'lastVoiceActivity', -1),
            I(this, 'audioSubsystem', 'standard'),
            I(this, 'audioLayer', ''),
            I(this, 'deviceChangeGeneration', 0),
            I(this, 'consecutiveWatchdogFailures', 0),
            I(this, 'codecSurvey', null),
            I(this, 'logger', new s.Y('MediaEngineNative')),
            I(this, 'handleDeviceChange', function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                e.deviceChangeGeneration++, e.emit(u.aB.DeviceChange, (0, _.C1)(m.h7.AUDIO_INPUT, t), (0, _.C1)(m.h7.AUDIO_OUTPUT, n), (0, _.C1)(m.h7.VIDEO_INPUT, r));
            }),
            I(this, 'handleVolumeChange', (e, t) => {
                this.emit(u.aB.VolumeChange, e * m.Qx, t * m.Qx);
            }),
            I(this, 'handleVoiceActivity', (e, t) => {
                let n = Date.now();
                this.listenerCount(u.aB.VoiceActivity) > 0 && (-1 === this.lastVoiceActivity || Date.now() - this.lastVoiceActivity > 20) && ((this.lastVoiceActivity = n), this.emit(u.aB.VoiceActivity, e, t));
            }),
            I(this, 'handleActiveSinksChange', (e, t) => {
                this.connections.forEach((n) => n.setHasActiveVideoOutputSink(e, t));
            }),
            I(this, 'handleNewListener', (e) => {
                switch (e) {
                    case u.aB.VoiceActivity:
                        null != (0, E.zS)().setEmitVADLevel2 ? (0, E.zS)().setEmitVADLevel2(!0) : (0, E.zS)().setEmitVADLevel(!0, !1, {});
                        break;
                    case u.aB.DeviceChange:
                        let t = this.deviceChangeGeneration;
                        Promise.all([this.getAudioInputDevices(), this.getAudioOutputDevices(), this.getVideoInputDevices()]).then((e) => {
                            let [n, r, i] = e;
                            t === this.deviceChangeGeneration && this.emit(u.aB.DeviceChange, n, r, i);
                        });
                }
            }),
            I(this, 'handleRemoveListener', (e) => {
                e === u.aB.VoiceActivity && (null != (0, E.zS)().setEmitVADLevel2 ? (0, E.zS)().setEmitVADLevel2(this.listenerCount(u.aB.VoiceActivity) > 0) : (0, E.zS)().setEmitVADLevel(this.listenerCount(u.aB.VoiceActivity) > 0, !1, {}));
            }),
            I(this, 'handleVideoInputInitialization', (e) => {
                this.emit(u.aB.VideoInputInitialized, e);
            }),
            I(this, 'handleNativeScreenSharePickerUpdate', (e) => {
                this.emit(u.aB.NativeScreenSharePickerUpdate, e);
            }),
            I(this, 'handleNativeScreenSharePickerCancel', (e) => {
                this.emit(u.aB.NativeScreenSharePickerCancel, e);
            }),
            I(this, 'handleNativeScreenSharePickerError', (e) => {
                this.emit(u.aB.NativeScreenSharePickerError, e);
            }),
            I(this, 'handleAudioDeviceModuleErrorCallback', (e, t) => {
                -100 !== e && this.emit(u.aB.AudioDeviceModuleError, 'RustAudioDeviceModule', e, t);
            });
        let i = (0, E.zS)();
        if (
            (i.setDeviceChangeCallback(this.handleDeviceChange),
            i.setVolumeChangeCallback(this.handleVolumeChange),
            i.setOnVoiceCallback(this.handleVoiceActivity),
            null === (t = i.setVideoInputInitializationCallback) || void 0 === t || t.call(i, this.handleVideoInputInitialization),
            i.setTransportOptions({
                idleJitterBufferFlush: !0,
                ducking: !1
            }),
            null === (n = i.setNativeScreenSharePickerCallbacks) || void 0 === n || n.call(i, this.handleNativeScreenSharePickerUpdate, this.handleNativeScreenSharePickerCancel, this.handleNativeScreenSharePickerError),
            null === (r = i.setAudioDeviceModuleErrorCallback) || void 0 === r || r.call(i, this.handleAudioDeviceModuleErrorCallback),
            this.on('removeListener', this.handleRemoveListener),
            this.on('newListener', this.handleNewListener),
            null != (0, E.zS)().getAudioSubsystem
                ? (0, E.zS)().getAudioSubsystem((e, t) => {
                      (this.audioSubsystem = e), (this.audioLayer = t);
                  })
                : null != (0, E.zS)().getUseLegacyAudioDevice && (this.audioSubsystem = (0, E.zS)().getUseLegacyAudioDevice() ? m.iA.LEGACY : m.iA.STANDARD),
            null != i.pingVoiceThread && 'undefined' != typeof window && 'canary' === window.GLOBAL_ENV.RELEASE_CHANNEL && this.watchdogTick(),
            this.getDebugLogging() && !S.installedLogHooks)
        )
            for (let e of ((S.installedLogHooks = !0), ['trace', 'debug', 'info', 'warn', 'error', 'log'])) {
                let t = console,
                    n = t[e];
                null != n &&
                    (t[e] = function () {
                        n.apply(this, arguments);
                        try {
                            let t = Array.from(arguments)
                                .map((e) => (null != e ? e.toString() : e))
                                .filter((e) => 'string' != typeof e || '\nfont-weight: bold;\ncolor: purple;\n' !== e)
                                .map((e) => (e.startsWith('%c') ? e.slice(2) : e));
                            (0, E.zS)().consoleLog(e, t.join(' '));
                        } catch (e) {}
                    });
            }
        null != i.setActiveSinksChangeCallback && i.setActiveSinksChangeCallback(this.handleActiveSinksChange), (0, c.Z)(this);
    }
}
I(S, 'installedLogHooks', !1);
