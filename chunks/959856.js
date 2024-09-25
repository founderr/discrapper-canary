n.d(t, {
    Z: function () {
        return L;
    }
});
var r = n(773603);
var i = n(411104);
var a = n(47120);
n(600040);
var o = n(512722),
    s = n.n(o),
    l = n(264344),
    u = n.n(l),
    c = n(259443),
    d = n(47770),
    _ = n(174498),
    E = n.n(_),
    f = n(839548),
    h = n(46973),
    p = n(734298),
    m = n(970838),
    I = n(68721),
    T = n(997653),
    g = n(384136),
    S = n(740197),
    A = n(548820),
    v = n(579237),
    N = n(582168),
    O = n(825040),
    R = n(65154),
    C = n(436620);
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
let b = new c.Y('MediaEngineWebRTC');
class L extends d.Z {
    destroy() {
        null != this.voiceActivityInput && (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null)), this.eachConnection((e) => e.destroy()), this.emit(h.aB.Destroy), this.removeAllListeners();
    }
    interact() {
        !this.interacted && (document.createElement('audio').play(), (this.interacted = !0)), this.eachConnection((e) => e.interact());
    }
    static supported() {
        return !__OVERLAY__ && (C.fi && null != window.AudioContext && null != window.RTCPeerConnection ? (n(250678), !0) : (b.info('WebRTC is not supported on', u().name, u().version), !1));
    }
    supported() {
        return !0;
    }
    supports(e) {
        switch (e) {
            case R.AN.AUDIO_INPUT_DEVICE:
                return S.S5;
            case R.AN.AUDIO_OUTPUT_DEVICE:
                return S.ZA;
            case R.AN.VIDEO:
                return C.U8;
            case R.AN.DESKTOP_CAPTURE:
                var t;
                return (null === (t = navigator.mediaDevices) || void 0 === t ? void 0 : t.getDisplayMedia) != null;
            case R.AN.VOICE_PROCESSING:
                return 'Chrome' === u().name;
            case R.AN.NATIVE_PING:
            case R.AN.DIAGNOSTICS:
                return C.Fo;
            case R.AN.DESKTOP_CAPTURE_APPLICATIONS:
            case R.AN.LOOPBACK:
            case R.AN.NOISE_SUPPRESSION:
            case R.AN.AUTOMATIC_GAIN_CONTROL:
                return 'Safari' !== u().name;
            case R.AN.NOISE_CANCELLATION:
                return E()();
            case R.AN.QOS:
            case R.AN.ATTENUATION:
            case R.AN.AUTOMATIC_VAD:
            case R.AN.LEGACY_AUDIO_SUBSYSTEM:
            case R.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM:
            case R.AN.AUTOMATIC_AUDIO_SUBSYSTEM:
            case R.AN.DEBUG_LOGGING:
            case R.AN.VOICE_PANNING:
            case R.AN.AUTO_ENABLE:
            case R.AN.DESKTOP_CAPTURE_FORMAT:
            case R.AN.VIDEO_HOOK:
            case R.AN.OPEN_H264:
            case R.AN.AEC_DUMP:
            case R.AN.DISABLE_VIDEO:
            case R.AN.CONNECTION_REPLAY:
            case R.AN.SIMULCAST:
            case R.AN.SCREEN_CAPTURE_KIT:
            default:
                return !1;
        }
    }
    getAudioContext() {
        return null == this._audioContext && (this._audioContext = new AudioContext()), this._audioContext;
    }
    connect(e, t, n) {
        let { ssrc: r, address: i, port: a, modes: o, streamUserId: s, streamParameters: l } = n,
            u = (0, T.Q)(e, t, this.getAudioContext(), l);
        return (u.streamUserId = s), u.setOutputVolume(this.outputVolume), u.setSinkId(this.sinkId), u.once(f.S.Destroy, (e) => this.connections.delete(e)), u.on(f.S.Silence, (e) => this.emit(h.aB.Silence, e)), u.on(f.S.DesktopSourceEnd, this.handleDesktopSourceEnd), u.on(f.S.AudioPermission, this.handleAudioPermission), u.on(f.S.VideoPermission, this.handleVideoPermission), this.interacted && u.interact(), e === R.Yn.DEFAULT && (u.setAudioSource(this.sourceId), this.enabled && u.input.enableAudioInput()), this.connections.add(u), this.emit(h.aB.Connection, u), u;
    }
    findConnection(e) {
        return Array.from(this.connections).find((t) => null == e || t.context === e);
    }
    eachConnection(e, t) {
        this.connections.forEach((n) => {
            (null == t || n.context === t) && e(n);
        });
    }
    enable() {
        return (
            null == this.enablePromise &&
                (this.enablePromise = this._enable().finally(() => {
                    this.enablePromise = null;
                })),
            this.enablePromise
        );
    }
    async _enable() {
        if (this.enabled) return;
        await this.getAudioContext().audioWorklet.addModule(A);
        let e = new I.Z(this.getAudioContext());
        e.on('permission', this.handleAudioPermission);
        try {
            var t;
            await e.enable(), 'Firefox' === u().name && (await this.handleDeviceChange()), (this.enabled = !0), this.eachConnection((e) => e.input.enableAudioInput(), R.Yn.DEFAULT), null === (t = this.voiceActivityInput) || void 0 === t || t.enable();
        } finally {
            e.destroy();
        }
    }
    setInputVolume(e) {}
    setOutputVolume(e) {
        (this.outputVolume = e), this.connections.forEach((t) => t.setOutputVolume(e));
    }
    getAudioInputDevices() {
        return (0, S.Hg)();
    }
    setAudioInputDevice(e) {
        var t, n;
        (this.sourceId = e), this.eachConnection((t) => t.setAudioSource(e), R.Yn.DEFAULT), null === (t = this.voiceActivityInput) || void 0 === t || t.setSource(e), null === (n = this.loopback) || void 0 === n || n.setAudioSource(e);
    }
    getAudioOutputDevices() {
        return (0, S.HS)();
    }
    setAudioOutputDevice(e) {
        var t;
        (this.sinkId = e), this.connections.forEach((t) => t.setSinkId(e)), null === (t = this.loopback) || void 0 === t || t.setAudioSink(e);
    }
    getVideoInputDevices() {
        return (0, S.l0)();
    }
    setVideoInputDevice(e) {
        this.eachConnection((t) => t.setVideoSource(e), R.Yn.DEFAULT);
    }
    getSupportedVideoCodecs(e) {
        e([]);
    }
    getCodecCapabilities(e) {
        e('');
    }
    async getDesktopSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = await g.Z.get(e, t);
        return (this.pendingDesktopInputs[n.id] = n), n.id;
    }
    getScreenPreviews(e, t) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    getWindowPreviews(e, t) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    setClipBufferLength(e) {}
    saveClip(e, t) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    saveClipForUser(e, t, n) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    updateClipMetadata(e, t) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    exportClip(e, t) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    setGoLiveSource(e, t) {
        if (null == e) this.eachConnection((e) => e.setDesktopInput(null), t);
        else if (null != e.desktopDescription && null != this.findConnection(t)) {
            s()(t === R.Yn.STREAM, 'Go live context is not STREAM');
            let n = !1,
                r = this.pendingDesktopInputs[e.desktopDescription.id];
            null != r &&
                this.eachConnection((e) => {
                    e.streamUserId === e.userId && ((n = !0), e.setDesktopInput(r));
                }, t),
                n && delete this.pendingDesktopInputs[e.desktopDescription.id];
        }
    }
    setClipsSource(e) {}
    setClipsQualitySettings(e, t, n) {
        return !1;
    }
    setSoundshareSource(e, t, n) {}
    setAudioSubsystem(e) {}
    getAudioSubsystem() {
        return R.iA.STANDARD;
    }
    getAudioLayer() {
        return '';
    }
    getDebugLogging() {
        return !1;
    }
    setDebugLogging(e) {}
    writeAudioDebugState() {
        return Promise.reject(Error('Audio debug state is not supported.'));
    }
    setExperimentalAdm(e) {}
    setLoopback(e, t) {
        e && null == this.loopback ? (this.enable(), (this.loopback = new v.Z(this.getAudioContext(), this.sourceId, this.sinkId)), this.loopback.setNoiseCancellation(t.noiseCancellation)) : !e && null != this.loopback && (this.loopback.stop(), (this.loopback = null));
    }
    getLoopback() {
        return null != this.loopback;
    }
    setH264Enabled(e) {}
    setAv1Enabled(e) {}
    setH265Enabled(e) {}
    getCodecSurvey() {
        return Promise.reject(Error('getCodecSurvey is not implemented on MediaEngine of browsers.'));
    }
    startAecDump() {}
    stopAecDump() {}
    setAecDump(e) {}
    createReplayConnection(e, t) {
        throw Error('Connection replay is not supported.');
    }
    setUseDirectVideo(e) {}
    setMaxSyncDelayOverride(e) {}
    rankRtcRegions(e) {
        return Promise.reject(Error('RTC region latency test is not supported.'));
    }
    applyMediaFilterSettings(e) {
        return Promise.resolve();
    }
    startLocalAudioRecording() {
        return Promise.reject(Error('startLocalAudioRecording is not supported.'));
    }
    stopLocalAudioRecording(e) {}
    setHasFullbandPerformance(e) {}
    getSupportedSecureFramesProtocolVersion() {
        return 0;
    }
    getSupportedBandwidthEstimationExperiments(e) {
        e([]);
    }
    getMLSSigningKey(e, t) {
        return Promise.reject(Error('getMLSSigningKey is not supported.'));
    }
    setSidechainCompression(e) {}
    setSidechainCompressionStrength(e) {}
    setNativeDesktopVideoSourcePickerActive(e) {}
    presentNativeScreenSharePicker(e) {}
    releaseNativeDesktopVideoSourcePickerStream() {}
    constructor() {
        super(),
            y(this, 'Video', O.Z),
            y(this, 'Camera', N.Z),
            y(this, '_audioContext', null),
            y(this, 'outputVolume', R.Qx),
            y(this, 'sourceId', R.w5),
            y(this, 'sinkId', R.w5),
            y(this, 'enabled', !1),
            y(this, 'connections', new Set()),
            y(this, 'interacted', !1),
            y(this, 'loopback', null),
            y(this, 'voiceActivityInput', null),
            y(this, 'pendingDesktopInputs', {}),
            y(this, 'enablePromise', null),
            y(this, 'handleActiveSinksChange', (e, t) => {
                this.connections.forEach((n) => n.setHasActiveVideoOutputSink(e, t));
            }),
            y(this, 'handleNewListener', (e) => {
                switch (e) {
                    case h.aB.DeviceChange:
                        null != navigator.mediaDevices &&
                            null == navigator.mediaDevices.ondevicechange &&
                            ((navigator.mediaDevices.ondevicechange = () => {
                                this.handleDeviceChange();
                            }),
                            this.handleDeviceChange());
                        break;
                    case h.aB.VoiceActivity:
                        null == this.voiceActivityInput && ((this.voiceActivityInput = new I.Z(this.getAudioContext())), this.voiceActivityInput.setSource(this.sourceId), this.voiceActivityInput.on('voiceactivity', this.handleVoiceActivity), this.enabled && this.voiceActivityInput.enable());
                }
            }),
            y(this, 'handleRemoveListener', (e) => {
                switch (e) {
                    case h.aB.DeviceChange:
                        var t;
                        (null === (t = navigator.mediaDevices) || void 0 === t ? void 0 : t.ondevicechange) != null && 0 === this.listenerCount(h.aB.DeviceChange) && (navigator.mediaDevices.ondevicechange = null);
                        break;
                    case h.aB.VoiceActivity:
                        null != this.voiceActivityInput && 0 === this.listenerCount(h.aB.VoiceActivity) && (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null));
                }
            }),
            y(this, 'handleDeviceChange', () =>
                (0, S.PW)().then((e) => {
                    let [t, n, r] = e;
                    return this.emit(h.aB.DeviceChange, t, n, r);
                })
            ),
            y(this, 'handleVoiceActivity', (e) => {
                this.emit(h.aB.VoiceActivity, e, 0);
            }),
            y(this, 'handleDesktopSourceEnd', () => {
                this.emit(h.aB.DesktopSourceEnd);
            }),
            y(this, 'handleAudioPermission', (e) => {
                this.emit(h.aB.AudioPermission, e);
            }),
            y(this, 'handleVideoPermission', (e) => {
                this.emit(h.aB.VideoPermission, e);
            }),
            this.on('newListener', this.handleNewListener),
            this.on('removeListener', this.handleRemoveListener),
            (0, m.px)(this.handleActiveSinksChange),
            (0, p.Z)(this);
    }
}
