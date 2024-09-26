let r, i, a, o;
var s,
    l,
    u = n(47120);
var c = n(724458);
var d = n(773603);
var _ = n(653041);
n(337869);
var E = n(512722),
    f = n.n(E),
    h = n(392711),
    p = n.n(h),
    m = n(553813),
    I = n.n(m),
    T = n(404097),
    g = n(442837),
    S = n(46973),
    A = n(433517),
    v = n(846519),
    N = n(570140),
    O = n(579806),
    R = n(887278),
    C = n(547727),
    y = n(435064),
    L = n(779618),
    b = n(710845),
    D = n(811660),
    M = n(353926),
    P = n(646047),
    U = n(594190),
    w = n(502286),
    x = n(12898),
    G = n(294473),
    k = n(706629),
    B = n(926951),
    F = n(998594),
    Z = n(14457),
    V = n(529558),
    H = n(111672),
    Y = n(441167),
    j = n(338336),
    W = n(751571),
    K = n(725380),
    z = n(581883),
    q = n(626135),
    Q = n(12647),
    X = n(70956),
    $ = n(358085),
    J = n(747268),
    ee = n(960048),
    et = n(998502),
    en = n(13140),
    er = n(314897),
    ei = n(967368),
    ea = n(463395),
    eo = n(592125),
    es = n(858340),
    el = n(19780),
    eu = n(704806),
    ec = n(594174),
    ed = n(631768),
    e_ = n(981631),
    eE = n(70722),
    ef = n(761274),
    eh = n(526761),
    ep = n(65154),
    em = n(689938);
function eI(e, t, n) {
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
let eT = new b.Z('MediaEngineStore');
!(function (e) {
    (e[(e.DETACHED = 0)] = 'DETACHED'), (e[(e.WAITING = 1)] = 'WAITING'), (e[(e.ATTACHED = 2)] = 'ATTACHED'), (e[(e.STARTED = 3)] = 'STARTED'), (e[(e.PLAYING = 4)] = 'PLAYING'), (e[(e.SILENCE = 5)] = 'SILENCE');
})(s || (s = {}));
let eg = 'MediaEngineStore',
    eS = 4,
    eA = 1,
    ev = 1,
    eN = 1,
    eO = 1,
    eR = 2,
    eC = {
        left: 1,
        right: 1
    },
    ey = 500,
    eL = 5 * X.Z.Millis.SECOND,
    eb = -60,
    eD = 100,
    eM = '>=21.0.0';
function eP() {
    return {
        mode: e_.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eb,
            autoThreshold: $.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadLeading: 5,
            vadTrailing: 25,
            delay: 20,
            shortcut: []
        },
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: !1,
        deaf: !1,
        echoCancellation: !0,
        noiseSuppression: !1,
        automaticGainControl: !0,
        noiseCancellation: !0,
        experimentalEncoders: !1,
        hardwareH264: !0,
        hardwareEnabledVersion: 0,
        hardwareEncoding: null,
        silenceWarning: !0,
        attenuation: 0,
        attenuateWhileSpeakingSelf: !1,
        attenuateWhileSpeakingOthers: !0,
        localMutes: {},
        disabledLocalVideos: {},
        videoToggleStateMap: {},
        localVolumes: {},
        localPans: {},
        inputVolume: ep.Qx,
        outputVolume: ep.Qx,
        inputDeviceId: ep.w5,
        outputDeviceId: ep.w5,
        videoDeviceId: ep.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eU.supports(ep.AN.VIDEO_HOOK),
        experimentalSoundshare2: null,
        openH264: !0,
        h265Enabled: !0,
        vadThrehsoldMigrated: !1,
        aecDumpEnabled: !1,
        sidechainCompression: !1,
        sidechainCompressionSettingVersion: 0,
        sidechainCompressionStrength: 50,
        audioSubsystemSettingVersion: 0,
        automaticAudioSubsystem: !1
    };
}
let eU = (0, S.Mt)((0, S.jj)()),
    ew = {},
    ex = new Set([ep.Yn.DEFAULT]),
    eG = eU.supports(ep.AN.AUTO_ENABLE),
    ek = !1,
    eB = ep.Yn.STREAM,
    eF = { [ep.w5]: tC(em.Z.Messages.NO_INPUT_DEVICES) },
    eZ = { [ep.w5]: tC(em.Z.Messages.NO_OUTPUT_DEVICES) },
    eV = { [ep.w5]: tC(em.Z.Messages.NO_VIDEO_DEVICES) },
    eH = !1,
    eY = !1,
    ej = !1,
    eW = !1,
    eK = !1,
    ez = ep.Av,
    eq = !1,
    eQ = !1,
    eX = !1,
    e$ = !1,
    eJ = null,
    e0 = !1,
    e1 = !1,
    e2 = !1,
    e3 = !1,
    e4 = !1,
    e5 = null,
    e6 = !1,
    e7 = !1,
    e8 = !1;
W.Z.hasPermission(ef.Eu.AUDIO, { showAuthorizationError: !1 }), W.Z.hasPermission(ef.Eu.CAMERA, { showAuthorizationError: !1 });
let e9 = !1,
    te = new Set(),
    tt = e9,
    tn = !1,
    tr = {},
    ti = null,
    ta = !0,
    to = {},
    ts = 5 * X.Z.Millis.SECOND;
function tl() {
    var e, t;
    return null !== (t = null === (e = ec.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t ? 'always' : J.Z === T.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tu() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT,
        t = ew[e];
    return null == t && ((t = eP()), (ew[e] = t)), t;
}
function tc(e) {
    let t = tu(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp: t.modeOptions.vadUseKrisp && nT(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function td(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Qx;
    return p().clamp(e, 0, t);
}
function t_(e) {
    let t = tu(e.context),
        n = !eG || t.mute || t.deaf;
    e.context === ep.Yn.DEFAULT ? (n = n || eH || eY || ej || !W.Z.didHavePermission(ef.Eu.AUDIO)) : e.context === ep.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === ep.Yn.DEFAULT && C.Z.updateNativeMute();
}
function tE(e) {
    if (e !== eB) null != a && eU.setGoLiveSource(null, eB), (eB = e);
}
function tf() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == o ? void 0 : null === (e = o.desktopSource) || void 0 === e ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, $.isWindows)() && R.pn(s.desktopSource.soundshareId), eU.setGoLiveSource(null, eB)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o ? void 0 : null === (t = o.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o ? void 0 : null === (n = o.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eU.setGoLiveSource(null, eB), (eK || i) && ((ez = (eK = i) ? tL(eV, tu().videoDeviceId) : ep.Av), eU.setVideoInputDevice(ez)), (a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate
        };
        if (null != o.desktopSource) {
            let t = tl(),
                n = tu().videoHook;
            eU.setGoLiveSource(
                {
                    desktopDescription: {
                        id: o.desktopSource.id,
                        soundshareId: o.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: tI(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tT(),
                        videoHookStaleFrameTimeoutMs: ey,
                        graphicsCaptureStaleFrameTimeoutMs: eL,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eB
            );
        }
        null != o.cameraSource &&
            eU.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eB
            );
    }
}
function th(e, t, n, r) {
    var i;
    let a = null !== (i = null == e ? void 0 : e.soundshareSession) && void 0 !== i ? i : '';
    null == to[a] && (to[a] = new Set());
    let o = null != t && !to[a].has(t);
    o && to[a].add(t),
        (null == t || o) &&
            q.default.track(e_.rMx.SOUNDSHARE_FAILED, {
                soundshare_failure_code: t,
                soundshare_failure_reason: n,
                soundshare_failure_will_retry: r,
                ...(0, w.Z)(e)
            });
}
function tp(e) {
    let t = tu(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(ea.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ea.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ea.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, $.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tm() {
    eU.on(S.aB.Connection, (e) => {
        var t, n;
        tc(e), t_(e), tp(e);
        let i = tu();
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = i.openH264) || void 0 === n || n);
        let o = el.Z.getGuildId(),
            {
                muteBeforeProcessing: s,
                pttBeforeProcessing: l,
                skipEncode: u
            } = (null != o ? k.Z : G.Z).getCurrentConfig(
                {
                    location: 'setupMediaEngine',
                    ...(null != o && { guildId: o })
                },
                { autoTrackExposure: !0 }
            );
        s && e.setExperimentFlag(ep.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(ep.V8.PTT_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(ep.V8.SKIP_ENCODE, !0);
        let c = !1,
            d = !0;
        e.setExperimentFlag(ep.V8.RESET_DECODER_ON_ERRORS, !0), c && e.setExperimentFlag(ep.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), d && e.setExperimentFlag(ep.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
        if (e.context === ep.Yn.STREAM && tg()) {
            let t = B.Z.goliveSimulcastFlag();
            void 0 !== t && e.setExperimentFlag(t, !0);
        }
        if (((0, $.isWindows)() ? ((null == ti ? void 0 : ti.startsWith('NVIDIA')) ? e.setExperimentFlag(ep.V8.SIGNAL_AV1, !0) : (null == ti ? void 0 : ti.startsWith('AMD')) && x.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(ep.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(ep.V8.SIGNAL_AV1_DECODE, !0)) : ((0, $.isMac)() || (0, $.isLinux)()) && e.setExperimentFlag(ep.V8.SIGNAL_AV1_DECODE, !0), (0, $.isWindows)() && e.setExperimentFlag(ep.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eU.setHasFullbandPerformance((0, D.b)()), e.setRemoteAudioHistory(0), (0, L.Z)(r))) {
            let t = y.Z.getSettings();
            e.setExperimentFlag(ep.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = Y.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ep.ux);
        }
        for (let t of ((i = tu(e.context)), e.setPostponeDecodeLevel(eD), Object.keys(i.localMutes))) t !== er.default.getId() && e.setLocalMute(t, i.localMutes[t]);
        for (let t of Object.keys(i.localVolumes)) t !== er.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
        for (let t of Object.keys(i.localPans)) {
            let n = i.localPans[t];
            e.setLocalPan(t, n.left, n.right);
        }
        for (let t of Object.keys(i.disabledLocalVideos)) e.setLocalVideoDisabled(t, i.disabledLocalVideos[t]);
        e.on(S.Sh.Speaking, (t, n) => {
            N.Z.dispatch({
                type: 'SPEAKING',
                context: e.context,
                userId: t,
                speakingFlags: n
            });
        }),
            e.context === ep.Yn.DEFAULT &&
                ((eQ = !1),
                e.on(S.Sh.SpeakingWhileMuted, () => {
                    (eQ = !0), r.emitChange();
                })),
            e.on(S.Sh.DesktopSourceEnd, () => {
                N.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context }
                });
            }),
            e.on(S.Sh.SoundshareAttached, () => {
                (null == a ? void 0 : a.desktopSource) != null && q.default.track(e_.rMx.SOUNDSHARE_ATTACHED, (0, w.Z)(null == a ? void 0 : a.desktopSource));
            }),
            e.on(S.Sh.SoundshareFailed, (e) => {
                let { failureCode: t, failureReason: n, willRetry: r } = e;
                th(null == a ? void 0 : a.desktopSource, t, n, r);
            }),
            e.on(S.Sh.SoundshareSpeaking, () => {
                (null == a ? void 0 : a.desktopSource) != null && (q.default.track(e_.rMx.SOUNDSHARE_TRANSMITTING, (0, w.Z)(null == a ? void 0 : a.desktopSource)), null != es.Z.getHookError(e_.K3D.SOUND) && N.Z.wait(() => N.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let _ = new v.V7();
        e.on(S.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    _.start(ts, () => {
                        N.Z.dispatch({
                            type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                            errorMessage: 'Sound Hook Failed'
                        });
                    });
                    break;
                case 'soundshare_recv_failed':
                    let t = e.reason,
                        n = e.code,
                        r = e.retry;
                    (null == a ? void 0 : a.desktopSource) != null &&
                        (th(null == a ? void 0 : a.desktopSource, n, t, r),
                        !r &&
                            (_.stop(),
                            N.Z.wait(() =>
                                N.Z.dispatch({
                                    type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                    errorMessage: t,
                                    errorCode: n
                                })
                            )));
                    break;
                case 'soundshare_state_transition':
                    4 === e.newState && (_.stop(), N.Z.wait(() => N.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            }
        }),
            e.on(S.Sh.InteractionRequired, (e) => {
                N.Z.dispatch({
                    type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                    required: e
                });
            }),
            e.on(S.Sh.VideoHookInitialize, (e, t, n, r, i, o) => {
                (null == a ? void 0 : a.desktopSource) != null &&
                    q.default.track(e_.rMx.VIDEOHOOK_INITIALIZED, {
                        backend: e,
                        format: t,
                        framebuffer_format: n,
                        sample_count: r,
                        success: i,
                        reinitialization: o,
                        ...(0, w.Z)(null == a ? void 0 : a.desktopSource)
                    });
            }),
            e.on(S.Sh.NoiseCancellationError, (e) => {
                eT.warn('noisecancellererror event: '.concat(e)),
                    (e6 = !0),
                    q.default.track(e_.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    N.Z.dispatch({
                        type: 'AUDIO_SET_NOISE_SUPPRESSION',
                        enabled: !0
                    }),
                    N.Z.dispatch({
                        type: 'AUDIO_SET_NOISE_CANCELLATION',
                        enabled: !1
                    }),
                    N.Z.dispatch({
                        type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR',
                        code: e
                    });
            }),
            e.on(S.Sh.VoiceActivityDetectorError, (e) => {
                eT.warn('voiceactivitydetectorerror event: '.concat(e)),
                    q.default.track(e_.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    N.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: ep.Yn.DEFAULT,
                        mode: e_.pM4.VOICE_ACTIVITY,
                        options: {
                            ...tu(ep.Yn.DEFAULT).modeOptions,
                            vadUseKrisp: !1
                        }
                    }),
                    N.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    });
            }),
            e.on(S.Sh.VideoState, (t) => {
                N.Z.dispatch({
                    type: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
                    videoState: t,
                    context: e.context
                });
            }),
            e.on(S.Sh.Destroy, () => {
                _.stop();
            }),
            e.setBitRate(ei.Z.bitrate),
            e.applyVideoQualityMode(ed.Z.mode);
    }),
        eU.on(S.aB.DeviceChange, (e, t, n) => {
            N.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        eU.on(S.aB.VolumeChange, (e, t) => {
            N.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        eU.on(S.aB.DesktopSourceEnd, () => {
            N.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        eU.on(S.aB.AudioPermission, (e) => {
            (e8 = !0),
                N.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                });
        }),
        eU.on(S.aB.VideoPermission, (e) => {
            N.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        eU.on(S.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await Q.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            eT.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), q.default.track(e_.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eU.on(S.aB.VideoInputInitialized, (e) => {
            q.default.track(e_.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * X.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy
            });
        }),
        eU.on(S.aB.ClipsRecordingRestartNeeded, () => {
            N.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        eU.on(S.aB.ClipsInitFailure, (e, t) => {
            N.Z.wait(() => {
                N.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        eU.on(S.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o ? void 0 : null === (n = o.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == a ? void 0 : null === (r = a.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t && R.pn(t), (o = null));
        }),
        eU.on(S.aB.NativeScreenSharePickerUpdate, (e) => {
            F.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                N.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                    existing: e
                });
        }),
        eU.on(S.aB.NativeScreenSharePickerCancel, (e) => {
            F.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                N.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                    existing: e
                });
        }),
        eU.on(S.aB.NativeScreenSharePickerError, (e) => {
            F.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                N.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                    error: e
                });
        }),
        eU.on(S.aB.AudioDeviceModuleError, (e, t, n) => {
            q.default.track(e_.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        tS.reset(),
        (0, eu.q)().then((e) => {
            null != e && (ti = e.gpu_brand);
        });
}
function tI() {
    return (0, $.isWindows)() && I().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, eE.nz);
}
function tT() {
    return (0, $.isMac)() && eU.supports(ep.AN.SCREEN_CAPTURE_KIT) && I().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, eE.C7);
}
function tg() {
    var e;
    let t = (null === (e = eo.Z.getChannel(e5)) || void 0 === e ? void 0 : e.type) === e_.d4z.GUILD_STAGE_VOICE,
        n = r.getHardwareEncoding();
    return !t && n && B.Z.supportsSimulcast();
}
let tS = new (class {
    start() {
        !this.started && ((this.started = !0), eU.on(S.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eU.removeListener(S.aB.Silence, this.handleSilence),
            N.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tu();
        !e0 && el.Z.getState() === e_.hes.RTC_CONNECTED && e.mode === e_.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eI(this, 'stateChangeTimeout', void 0),
            eI(this, 'noVoiceTimeout', 5000),
            eI(this, 'voiceTimeout', 1500),
            eI(this, 'started', !1),
            eI(this, 'handleSilence', (e) => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout),
                    (this.stateChangeTimeout = setTimeout(
                        () => {
                            (this.stateChangeTimeout = null),
                                this.started &&
                                    (N.Z.dispatch({
                                        type: 'AUDIO_INPUT_DETECTED',
                                        inputDetected: t
                                    }),
                                    e && (e1 = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tA() {
    var e;
    let t = A.K.get('audio');
    null != t && (A.K.set(eg, { [ep.Yn.DEFAULT]: t }), A.K.remove('audio')),
        (ew = null !== (e = A.K.get(eg)) && void 0 !== e ? e : {}),
        p().each(ew, (e) => {
            if ((p().defaultsDeep(e, eP()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, en.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eS && ((e.vadUseKrispSettingVersion = eS), (e.modeOptions.vadUseKrisp = !0)), !e.qosMigrated && ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                (e.vadThrehsoldMigrated = !0), (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eb);
            }
            (0, $.isWeb)() ? e.ncUseKrispjsSettingVersion !== ev && ((e.ncUseKrispjsSettingVersion = ev), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eA && ((e.ncUseKrispSettingVersion = eA), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eN && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eN)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tO();
}
function tv(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tu(t);
    return Object.assign(r, e), !__OVERLAY__ && n && A.K.set(eg, ew), r;
}
function tN() {
    A.K.remove(eg);
    location.reload();
}
function tO() {
    var e, t, n;
    let r = tu();
    eU.setAudioInputDevice(r.inputDeviceId), eU.setAudioOutputDevice(r.outputDeviceId), tf(), eU.setInputVolume(r.inputVolume), eU.setOutputVolume(r.outputVolume), eU.setH264Enabled(null === (e = r.hardwareEncoding) || void 0 === e || e || r.openH264), eU.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t), eU.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n), eU.setAecDump(r.aecDumpEnabled), eU.setSidechainCompression(r.sidechainCompression), eU.setSidechainCompressionStrength(r.sidechainCompressionStrength);
}
function tR() {
    !eG &&
        eU.enable().then(() =>
            N.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tC(e) {
    return {
        id: ep.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function ty(e, t) {
    if (0 === e.length) {
        let e = tC(t);
        return { [e.id]: e };
    }
    return p()(e)
        .map((e) => ({
            id: e.id,
            index: e.index,
            name: e.name,
            disabled: !1
        }))
        .keyBy('id')
        .value();
}
function tL(e, t) {
    var n;
    let r = null !== (n = e[t]) && void 0 !== n ? n : p()(e).values().first();
    return null != r ? r.id : t;
}
function tb(e) {
    let t = eF;
    if (((eF = ty(e, em.Z.Messages.NO_INPUT_DEVICES)), !p().isEqual(eF, t))) {
        let e = tu(),
            t = tL(eF, e.inputDeviceId);
        eU.setAudioInputDevice(t);
    }
}
function tD(e) {
    let t = eZ;
    if (((eZ = ty(e, em.Z.Messages.NO_OUTPUT_DEVICES)), !p().isEqual(eZ, t))) {
        let e = tu(),
            t = tL(eZ, e.outputDeviceId);
        eU.setAudioOutputDevice(t);
    }
}
function tM(e) {
    e$ = e.length > 0;
    let t = eV;
    if (((eV = ty(e, em.Z.Messages.NO_VIDEO_DEVICES)), eK && !p().isEqual(eV, t))) {
        var n;
        let e = void 0 !== eV[ez],
            r = ez === ep.w5 && (null === (n = t[ep.w5]) || void 0 === n ? void 0 : n.disabled);
        tf(e || r);
    }
}
function tP() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null !== (e = z.Z.settings.audioContextSettings) && void 0 !== e
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === eh.u0.USER ? ep.Yn.DEFAULT : ep.Yn.STREAM,
            a = i === ep.Yn.STREAM ? ep.Yh : ep.Qx,
            o = null !== (t = r[e]) && void 0 !== t ? t : {},
            { localMutes: s, localVolumes: l } = tu(i);
        for (let [e, t] of Object.entries(o))
            null == (0, K.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eU.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    eU.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        tv(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function tU(e) {
    if (null == r)
        return (
            eT.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : Q.Z.getAudioPid(e),
            n = '';
        return (
            null != t && (n = Q.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n
            }
        );
    }
}
function tw(e, t) {
    (0, $.isWindows)() &&
        R.YT(e, { soundshare_session: t }).then((t) => {
            null != t &&
                !U.ZP.shouldContinueWithoutElevatedProcessForPID(e) &&
                N.Z.wait(() => {
                    N.Z.dispatch({
                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                        errorMessage: t
                    });
                });
        });
}
function tx(e) {
    (i = e.sessionId),
        (eH = !1),
        (eW = !1),
        !(0, $.isWeb)() &&
            H.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tu();
                !e.sidechainAvailable && t.sidechainCompression ? (tv({ sidechainCompressionSettingVersion: 0 }), nt(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eO && (tv({ sidechainCompressionSettingVersion: eO }), nt(e.sidechainEnabled));
            });
    let t = tu();
    eU.supports(ep.AN.AUTOMATIC_AUDIO_SUBSYSTEM) ? (t.automaticAudioSubsystem && nO(), (0, $.isWindows)() && t.audioSubsystemSettingVersion < eR && (tv({ audioSubsystemSettingVersion: eR }), !t.automaticAudioSubsystem && eU.getAudioSubsystem() === ep.iA.STANDARD && nN(ep.iA.AUTOMATIC))) : tv({ automaticAudioSubsystem: !1 }), tP();
}
function tG(e) {
    let { mediaEngineState: t } = e;
    (ew = t.settingsByContext), (eF = t.inputDevices), (eZ = t.outputDevices), (tr = t.appSupported), (e4 = t.krispModuleLoaded), (eB = t.goLiveContext);
}
function tk() {
    i = null;
}
function tB(e) {
    switch (e.state) {
        case e_.hes.CONNECTING:
            tR();
            break;
        case e_.hes.RTC_CONNECTING:
            (e0 = !1), (e1 = !1);
            break;
        case e_.hes.RTC_CONNECTED:
            tf();
            break;
        case e_.hes.DISCONNECTED:
            tz(), tq();
    }
    tS.update();
}
function tF(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((eH = t.mute || t.suppress), (eW = t.deaf), eU.eachConnection(t_), tf(!(null != t.guildId && null != t.channelId && null != e5 && e5 !== t.channelId) && eK), (e5 = t.channelId), !0) : (!__OVERLAY__ && t.userId === er.default.getId() && null == el.Z.getChannelId() && tf(!1, null), e)), !1);
}
function tZ(e) {
    let { mute: t } = e;
    (eY = t), eU.eachConnection(t_);
}
function tV(e) {
    let { context: t, skipMuteUnmuteSoundEffect: n } = e,
        { mute: r, deaf: i } = tu(t);
    if (t === ep.Yn.DEFAULT && (W.Z.requestPermission(ef.Eu.AUDIO), ej)) return !1;
    !(r = !i && !r) && (i = !1),
        n && (eq = !0),
        tv(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        eU.eachConnection(t_);
}
function tH(e) {
    let { context: t, mute: n } = e;
    tv({ mute: n }, t), eU.eachConnection(t_);
}
function tY(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== eh.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    tP(!0);
}
function tj(e) {
    let { context: t } = e;
    tv({ deaf: !tu(t).deaf }, t), eU.eachConnection(t_);
}
function tW(e) {
    let { context: t, userId: n } = e;
    if (n === er.default.getId()) return;
    let { localMutes: r } = tu(t);
    r[n] ? delete r[n] : (r[n] = !0), tv({ localMutes: r }, t), eU.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function tK(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: u, videoToggleState: c, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), 'These are not allowed to both be true.');
    let E = c === e_.ZUi.DISABLED,
        { disabledLocalVideos: h } = tu(l),
        p = null !== (t = h[u]) && void 0 !== t && t,
        m = te.has(u),
        I = c === e_.ZUi.AUTO_ENABLED || c === e_.ZUi.MANUAL_ENABLED;
    eT.info('disableVideo='.concat(E, ' currentlyDisabled=').concat(p, ' currentlyAutoDisabled=').concat(m, ', isVideoShown=').concat(I)), f()(!(m && !p), 'If you are auto-disabled, then you are also disabled.');
    let T = E !== p,
        g = l === ep.Yn.DEFAULT,
        S = _ && T && g,
        A = d && T && g;
    eT.info('changed='.concat(T, ' isDefaultContext=').concat(g, ' isUpdateCausedByVideoHealthManager=').concat(S, ' isManualToggleByUser=').concat(A));
    let { videoToggleStateMap: v } = tu(l);
    if ((v[u] === e_.ZUi.AUTO_PROBING && c === e_.ZUi.AUTO_ENABLED && (0, j.Z)(u, E ? ep.fC.AUTO_DISABLE : ep.fC.AUTO_ENABLE, I), (v[u] = c), tv({ videoToggleStateMap: v }, l, d), c === e_.ZUi.AUTO_PROBING ? null === (n = el.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (r = el.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(u, !1), !tt && (eT.info('isAutoDisableAllowed='.concat(tt, ' - disabling VideoHealthManager')), null === (a = el.Z.getRTCConnection()) || void 0 === a || null === (i = a.getVideoHealthManager()) || void 0 === i || i.disable()), S)) {
        if ((!E && !m) || (E && !tt)) return;
        (0, j.Z)(u, E ? ep.fC.AUTO_DISABLE : ep.fC.AUTO_ENABLE, I), E ? te.add(u) : te.delete(u);
    } else A && (m && !E ? (eT.info('disallowing auto-disable for this session because of manual override by user'), (tt = !1), null === (s = el.Z.getRTCConnection()) || void 0 === s || null === (o = s.getVideoHealthManager()) || void 0 === o || o.disable(), (0, j.Z)(u, ep.fC.MANUAL_REENABLE, I)) : (0, j.Z)(u, E ? ep.fC.MANUAL_DISABLE : ep.fC.MANUAL_ENABLE, I));
    g && !E && te.delete(u),
        E ? (h[u] = !0) : delete h[u],
        tv({ disabledLocalVideos: h }, l, d),
        eU.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t);
        }, l);
}
function tz() {
    if (0 === te.size) return;
    let e = ep.Yn.DEFAULT,
        { disabledLocalVideos: t } = tu(e);
    te.forEach((n) => {
        f()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eU.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        te.clear(),
        tv({ disabledLocalVideos: t }, e, !1);
}
function tq() {
    let e = ep.Yn.DEFAULT,
        { videoToggleStateMap: t } = tu(e);
    for (let [e, n] of Object.entries(t)) n === e_.ZUi.AUTO_PROBING && delete t[e];
    tv({ videoToggleStateMap: t }, e, !1);
}
function tQ(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === er.default.getId()) return;
    let i = t === ep.Yn.STREAM ? ep.Yh : ep.Qx,
        { localVolumes: a } = tu(t);
    r === i ? delete a[n] : (a[n] = r), tv({ localVolumes: a }, t), eU.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function tX(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tu(t);
    (a[n] = {
        left: r,
        right: i
    }),
        tv({ localPans: a }, t),
        eU.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function t$(e) {
    let { context: t, mode: n, options: r } = e;
    tv(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        eU.eachConnection(tc),
        tS.update();
}
function tJ(e) {
    let { volume: t } = e;
    tv({ inputVolume: td(t) }), eU.setInputVolume(t);
}
function t0(e) {
    let { volume: t } = e;
    tv({ outputVolume: t }), eU.setOutputVolume(t);
}
function t1(e) {
    let { id: t } = e;
    tv({ inputDeviceId: (t = tL(eF, t)) }), eU.setAudioInputDevice(t);
}
function t2(e) {
    let { id: t } = e;
    tv({ outputDeviceId: (t = tL(eZ, t)) }), eU.setAudioOutputDevice(t);
}
function t3(e) {
    let { id: t } = e;
    tv({ videoDeviceId: (t = tL(eV, t)) }), tf();
}
function t4(e) {
    return ek !== e.required && ((ek = e.required), !e.required && eU.interact(), !0);
}
function t5(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    tb(t), tD(n), tM(r);
}
function t6(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tv({
        inputVolume: td(t),
        outputVolume: n
    });
}
function t7(e) {
    let t = tu();
    q.default.track(e_.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function t8(e) {
    let t = tv({ echoCancellation: e.enabled });
    eU.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nr(), t7(e.location);
}
function t9(e) {
    nt(e.enabled);
}
function ne(e) {
    let t = tv({ sidechainCompressionStrength: e.strength });
    eU.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nt(e) {
    let t = tv({ sidechainCompression: e });
    eU.setSidechainCompression(t.sidechainCompression);
}
function nn(e) {
    let { enabled: t } = e;
    return (tn = t), nr();
}
function nr() {
    let e = tu(),
        t = e.inputDeviceId,
        n = ea.Z.hasEchoCancellation(t) || e.echoCancellation,
        r = ea.Z.hasNoiseSuppression(t) || e.noiseSuppression,
        i = ea.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
        a = e.noiseCancellation;
    eU.setLoopback(tn, {
        echoCancellation: n,
        noiseSuppression: r,
        automaticGainControl: i,
        noiseCancellation: a
    });
}
function ni(e) {
    let t = tv({ noiseSuppression: e.enabled });
    eU.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nr(), t7(e.location);
}
function na(e) {
    let t = tv({ automaticGainControl: e.enabled });
    eU.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), nr(), t7(e.location);
}
function no(e) {
    let t = tv({ noiseCancellation: e.enabled });
    eU.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nr(), t7(e.location);
}
function ns(e) {
    let t = tv({ experimentalEncoders: e.enabled });
    eU.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nl(e) {
    var t, n;
    let { enabled: r } = e,
        i = tv({ hardwareEncoding: r });
    eU.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t);
    }),
        eU.setH264Enabled(i.hardwareEncoding || i.openH264),
        eU.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t),
        eU.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n);
}
function nu(e) {
    tv({ silenceWarning: e.enabled }), tS.update();
}
function nc(e) {
    eU.setDebugLogging(e.enabled);
}
function nd(e) {
    tv({ videoHook: e.enabled });
}
function n_(e) {
    tv({ experimentalSoundshare2: e.enabled });
}
function nE(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tv({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    eU.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nf(e) {
    let { enabled: t } = e;
    tv({ qos: t }), eU.eachConnection((e) => e.setQoS(t));
}
function nh() {
    tN();
}
function np(e) {
    let { inputDetected: t } = e;
    (eJ = t), !e0 && eJ && ((e0 = !0), tS.update());
}
function nm(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === ej) return !1;
    (ej = n), eU.eachConnection(t_);
}
function nI(e) {
    let { state: t, permissionType: n } = e,
        r = t === ef.PQ.ACCEPTED;
    switch (n) {
        case ef.Eu.AUDIO:
            (e8 = !0), eU.eachConnection(t_);
            break;
        case ef.Eu.CAMERA:
            !r && eK && tf(!1);
            break;
        default:
            return !1;
    }
}
function nT() {
    return e4 || !1;
}
async function ng() {
    try {
        await et.ZP.ensureModule('discord_krisp'), et.ZP.requireModule('discord_krisp'), (e4 = !0), r.emitChange();
    } catch (t) {
        eT.warn('Failed to load Krisp module: '.concat(t.message)), ee.Z.captureException(t);
        let e = ep.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? ep.H3.INITIALIZED : n;
        }
        q.default.track(e_.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tv({ noiseCancellation: !1 });
    } finally {
        e3 = !1;
    }
}
function nS() {
    return (0, $.isWindows)() || (0, $.isLinux)() || ((0, $.isMac)() && I().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, eM));
}
function nA() {
    !nS() || __OVERLAY__ || e3 || e4 ? ((0, $.isWeb)() && eU.supports(ep.AN.NOISE_CANCELLATION) ? ((e4 = !0), r.emitChange()) : (0, $.isWeb)() && tv({ noiseCancellation: !1 })) : ((e3 = !0), ng());
}
function nv(e) {
    nN(e.subsystem);
}
function nN(e) {
    e === ep.iA.AUTOMATIC ? (tv({ automaticAudioSubsystem: !0 }), nO()) : (tv({ automaticAudioSubsystem: !1 }), eU.setAudioSubsystem(e));
}
function nO() {
    let { enabled: e } = Z.I.getCurrentConfig({ location: 'interpretAutomaticAudioSubsystem' }, { autoTrackExposure: !1 });
    e ? eU.setAudioSubsystem(ep.iA.EXPERIMENTAL) : eU.setAudioSubsystem(ep.iA.STANDARD);
}
function nR(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tf(i, null), null != t || null == n)) {
        e2 = !1;
        return;
    }
    if (e2) return;
    e2 = !0;
    let a = tu();
    (a.mute || a.deaf) &&
        (tv({
            deaf: !1,
            mute: !1
        }),
        eU.eachConnection(t_));
}
function nC(e) {
    let { application: t } = e;
    ex.add(t.id);
}
function ny(e) {
    let { application: t } = e;
    ex.delete(t.id);
}
function nL(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                (eG = !1), eU.eachConnection(t_);
                break;
            case 'video':
                tf(!1);
        }
}
function nb(e) {
    (eG = e.enabled),
        e.unmute &&
            tv({
                mute: !1,
                deaf: !1
            }),
        eU.eachConnection(t_);
}
function nD(e) {
    let { enabled: t } = e;
    W.Z.requestPermission(ef.Eu.CAMERA), tf(t);
}
function nM(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = y.Z.isDecoupledGameClippingEnabled(),
        s = y.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == O.Z) return;
    let l = null,
        u = null,
        c = Q.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: u } = tU(c));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: c,
            soundshareId: l,
            soundshareSession: u
        },
        quality: i
    };
    null != o && o.desktopSource.id !== d.desktopSource.id && (eU.setClipsSource(null), (0, $.isWindows)() && null != o.desktopSource.soundshareId && R.pn(o.desktopSource.soundshareId)), null != l && tw(l, u), (o = d);
    let _ = tl(),
        E = tu().videoHook;
    eU.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: E,
            useGraphicsCapture: tI(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tT(),
            videoHookStaleFrameTimeoutMs: ey,
            graphicsCaptureStaleFrameTimeoutMs: eL,
            hdrCaptureMode: _
        },
        quality: i,
        applicationName: n
    });
}
function nP(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eU.setClipsSource(null));
}
function nU(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null !== (t = a.context) && void 0 !== t ? t : ep.Yn.DEFAULT,
            l =
                null !== (n = a.qualityOptions) && void 0 !== n
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            u = !1 === o ? null : Q.Z.getPidFromDesktopSource(i);
        $.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = tU(u)), null != e && tw(e, r)),
            tE(s),
            tf(s === ep.Yn.STREAM && eK, {
                desktopSource: {
                    id: i,
                    sourcePid: u,
                    soundshareId: e,
                    soundshareSession: r
                },
                quality: {
                    resolution: l.resolution,
                    frameRate: l.frameRate
                }
            });
    } else if ((null == a ? void 0 : a.cameraSettings) != null) {
        let e = null !== (r = a.context) && void 0 !== r ? r : ep.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === ep.Yn.STREAM && eK,
            s =
                null !== (i = a.qualityOptions) && void 0 !== i
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tf(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate
            }
        });
    } else tf(eK, null);
}
function nw(e) {
    let { section: t } = e;
    return t === e_.oAB.VOICE && tR(), !1;
}
function nx() {
    return eU.eachConnection(tp), !1;
}
function nG(e) {
    let { enabled: t } = e,
        n = tv({ openH264: t });
    eU.setH264Enabled(n.hardwareEncoding || n.openH264),
        eU.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
        });
}
function nk(e) {
    let { enabled: t } = e,
        n = tv({ aecDumpEnabled: t });
    eU.setAecDump(n.aecDumpEnabled);
}
function nB(e) {
    let { state: t } = e,
        n = P.Z.isEnabled();
    if (t === e_.$7l.BACKGROUND && eK && !n) (eX = !0), tf(!1);
    else {
        if (t !== e_.$7l.ACTIVE || !eX) return !1;
        (eX = !1), tf(!0);
    }
    return !0;
}
function nF(e) {
    eU.eachConnection((t) => t.setBitRate(e.bitrate));
}
function nZ() {
    if ((!eK && null == a) || null != el.Z.getRTCConnectionId()) return !1;
    tf(!1, null);
}
function nV() {
    return !!e6 && ((e6 = !1), !0);
}
function nH(e) {
    eU.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function nY(e) {
    let { settings: t } = e;
    eU.applyMediaFilterSettings(t).finally(() => {
        (e7 = !1), r.emitChange();
    });
}
function nj() {
    e7 = !0;
}
function nW() {
    e7 = !1;
}
function nK(e) {
    ta = e.enabled;
}
class nz extends (l = g.ZP.Store) {
    initialize() {
        tm(),
            tA(),
            nA(),
            tq(),
            (tr = {
                [ep.AN.VIDEO]: eU.supports(ep.AN.VIDEO),
                [ep.AN.DESKTOP_CAPTURE]: eU.supports(ep.AN.DESKTOP_CAPTURE),
                [ep.AN.HYBRID_VIDEO]: eU.supports(ep.AN.HYBRID_VIDEO)
            }),
            this.waitFor(er.default, ea.Z, eo.Z, es.Z, el.Z, U.ZP, W.Z.storage, z.Z, M.Z, y.Z);
    }
    supports(e) {
        return eU.supports(e);
    }
    supportsInApp(e) {
        return tr[e] || eU.supports(e);
    }
    isSupported() {
        return eU.supported();
    }
    isExperimentalEncodersSupported() {
        return eU.supports(ep.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eU.supports(ep.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nT();
    }
    isNoiseCancellationError() {
        return e6;
    }
    isAutomaticGainControlSupported() {
        return eU.supports(ep.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return nT();
    }
    isAecDumpSupported() {
        return eU.supports(ep.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eU.supports(ep.AN.VIDEO) && eU.supports(ep.AN.SIMULCAST);
    }
    getAecDump() {
        return tu().aecDumpEnabled;
    }
    getMediaEngine() {
        return eU;
    }
    getVideoComponent() {
        return eU.supports(ep.AN.DIRECT_VIDEO) && eU.setUseDirectVideo(!0), eU.Video;
    }
    getCameraComponent() {
        return eU.supports(ep.AN.DIRECT_VIDEO) && eU.setUseDirectVideo(!0), eU.Camera;
    }
    isEnabled() {
        return eG;
    }
    isMute() {
        return this.isSelfMute() || eH;
    }
    isDeaf() {
        return this.isSelfDeaf() || eW;
    }
    hasContext(e) {
        return null != ew[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return e === ep.Yn.DEFAULT && eY;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return !this.isEnabled() || tu(e).mute || !W.Z.didHavePermission(ef.Eu.AUDIO) || this.isSelfDeaf(e) || (e === ep.Yn.DEFAULT && ej);
    }
    shouldSkipMuteUnmuteSound() {
        return eq;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        eq = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ea.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return ta;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return !this.isSupported() || tu(e).deaf;
    }
    isVideoEnabled() {
        return eK && e$;
    }
    isVideoAvailable() {
        return Object.values(eV).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.STREAM;
        return eB === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.STREAM;
        return eB === t && null != a && (null === (e = a.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return e !== er.default.getId() && (tu(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eU.supports(ep.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return null !== (t = tu(n).disabledLocalVideos[e]) && void 0 !== t && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return null !== (t = tu(n).videoToggleStateMap[e]) && void 0 !== t ? t : e_.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return t === ep.Yn.DEFAULT && te.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return e === ep.Yn.DEFAULT && te.size > 0;
    }
    isMediaFilterSettingLoading() {
        return e7;
    }
    isNativeAudioPermissionReady() {
        return e8;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eB;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
            n = tu(t).localPans[e];
        return null != n ? n : eC;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
            n = t === ep.Yn.STREAM ? ep.Yh : ep.Qx,
            r = tu(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tu().inputVolume;
    }
    getOutputVolume() {
        return tu().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return tu(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return tu(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(ew, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === e_.pM4.PUSH_TO_TALK && ex.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tL(eF, tu().inputDeviceId);
    }
    getOutputDeviceId() {
        return tL(eZ, tu().outputDeviceId);
    }
    getVideoDeviceId() {
        return tL(eV, tu().videoDeviceId);
    }
    getInputDevices() {
        return eF;
    }
    getOutputDevices() {
        return eZ;
    }
    getVideoDevices() {
        return eV;
    }
    getEchoCancellation() {
        let e = tu();
        return ea.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tu().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tu().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tu().h265Enabled;
    }
    getLoopback() {
        return eU.getLoopback();
    }
    getNoiseSuppression() {
        let e = tu();
        return ea.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tu();
        return ea.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return tu().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tu().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null === (e = tu().hardwareEncoding) || void 0 === e || e;
    }
    getEnableSilenceWarning() {
        return tu().silenceWarning;
    }
    getDebugLogging() {
        return eU.getDebugLogging();
    }
    getQoS() {
        return tu().qos;
    }
    getAttenuation() {
        return tu().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tu().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tu().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tu().automaticAudioSubsystem ? ep.iA.AUTOMATIC : eU.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eU.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return tu(e);
    }
    getState() {
        return {
            settingsByContext: ew,
            inputDevices: eF,
            outputDevices: eZ,
            appSupported: tr,
            krispModuleLoaded: e4,
            goLiveSource: a,
            goLiveContext: eB
        };
    }
    getInputDetected() {
        return eJ;
    }
    getNoInputDetectedNotice() {
        return e1;
    }
    getPacketDelay() {
        return $.isPlatformEmbedded || this.getMode() !== e_.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eU.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ek;
    }
    getVideoHook() {
        return tu().videoHook;
    }
    supportsVideoHook() {
        return eU.supports(ep.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tu().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eU.supports(ep.AN.EXPERIMENTAL_SOUNDSHARE) && I().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, eE.I9);
    }
    getOpenH264() {
        return tu().openH264;
    }
    getEverSpeakingWhileMuted() {
        return eQ;
    }
    supportsScreenSoundshare() {
        return ((0, $.isMac)() && eU.supports(ep.AN.SOUNDSHARE) && I().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, eE.yG) && tT()) || ((0, $.isWindows)() && eU.supports(ep.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare());
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT,
            t = this.supports(ep.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === ep.Yn.DEFAULT ? ep.Tr.VIDEO : ep.Tr.SCREEN,
                          quality: 100
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === ep.Yn.DEFAULT || tg()) &&
                t.push({
                    rid: '50',
                    type: e === ep.Yn.DEFAULT ? ep.Tr.VIDEO : ep.Tr.SCREEN,
                    quality: 50
                }),
            t
        );
    }
    getSupportedSecureFramesProtocolVersion(e) {
        var t;
        let n = eU.getSupportedSecureFramesProtocolVersion(),
            r = V.m.getCurrentConfig({ location: 'MediaEngineStore' }),
            i =
                null != e
                    ? V.N.getCurrentConfig({
                          guildId: e,
                          location: 'MediaEngineStore'
                      })
                    : null,
            a = r.canSupportDaveProtocol || (null == i ? void 0 : i.canSupportDaveProtocol),
            o = Math.max(r.protocolVersionFloor, null !== (t = null == i ? void 0 : i.protocolVersionFloor) && void 0 !== t ? t : 0),
            s = n > 5 && 114 === n;
        return a && (n >= o || s) ? n : 0;
    }
    hasClipsSource() {
        return null != o;
    }
}
eI(nz, 'displayName', 'MediaEngineStore'),
    (r = new nz(N.Z, {
        VOICE_CHANNEL_SELECT: nR,
        VOICE_STATE_UPDATES: tF,
        CONNECTION_OPEN: tx,
        CONNECTION_CLOSED: tk,
        RTC_CONNECTION_STATE: tB,
        AUDIO_SET_TEMPORARY_SELF_MUTE: tZ,
        AUDIO_TOGGLE_SELF_MUTE: tV,
        AUDIO_SET_SELF_MUTE: tH,
        AUDIO_TOGGLE_SELF_DEAF: tj,
        AUDIO_TOGGLE_LOCAL_MUTE: tW,
        AUDIO_SET_LOCAL_VIDEO_DISABLED: tK,
        AUDIO_SET_LOCAL_VOLUME: tQ,
        AUDIO_SET_LOCAL_PAN: tX,
        AUDIO_SET_MODE: t$,
        AUDIO_SET_INPUT_VOLUME: tJ,
        AUDIO_SET_OUTPUT_VOLUME: t0,
        AUDIO_SET_INPUT_DEVICE: t1,
        AUDIO_SET_OUTPUT_DEVICE: t2,
        AUDIO_SET_ECHO_CANCELLATION: t8,
        AUDIO_SET_SIDECHAIN_COMPRESSION: t9,
        AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: ne,
        AUDIO_SET_LOOPBACK: nn,
        AUDIO_SET_NOISE_SUPPRESSION: ni,
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: na,
        AUDIO_SET_NOISE_CANCELLATION: no,
        AUDIO_SET_DISPLAY_SILENCE_WARNING: nu,
        AUDIO_SET_DEBUG_LOGGING: nc,
        MEDIA_ENGINE_SET_VIDEO_HOOK: nd,
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n_,
        AUDIO_SET_ATTENUATION: nE,
        AUDIO_SET_QOS: nf,
        MEDIA_ENGINE_DEVICES: t5,
        AUDIO_VOLUME_CHANGE: t6,
        AUDIO_RESET: nh,
        AUDIO_INPUT_DETECTED: np,
        AUDIO_SET_SUBSYSTEM: nv,
        MEDIA_ENGINE_SET_AUDIO_ENABLED: nb,
        MEDIA_ENGINE_SET_VIDEO_ENABLED: nD,
        MEDIA_ENGINE_PERMISSION: nL,
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: nU,
        MEDIA_ENGINE_SET_VIDEO_DEVICE: t3,
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: ns,
        MEDIA_ENGINE_INTERACTION_REQUIRED: t4,
        USER_SETTINGS_MODAL_INIT: nw,
        USER_SETTINGS_MODAL_SET_SECTION: nw,
        CERTIFIED_DEVICES_SET: nx,
        RPC_APP_CONNECTED: nC,
        RPC_APP_DISCONNECTED: ny,
        OVERLAY_INITIALIZE: tG,
        MEDIA_ENGINE_SET_OPEN_H264: nG,
        MEDIA_ENGINE_SET_HARDWARE_ENCODING: nl,
        APP_STATE_UPDATE: nB,
        SET_CHANNEL_BITRATE: nF,
        SET_VAD_PERMISSION: nm,
        SET_NATIVE_PERMISSION: nI,
        SET_CHANNEL_VIDEO_QUALITY_MODE: nH,
        MEDIA_ENGINE_SET_AEC_DUMP: nk,
        CHANNEL_DELETE: nZ,
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: nV,
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: nY,
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: nj,
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: nW,
        USER_SETTINGS_PROTO_UPDATE: tY,
        CLIPS_INIT: nM,
        CLIPS_SETTINGS_UPDATE: nP,
        MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: nK
    })),
    (t.Z = r);
