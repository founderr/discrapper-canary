let r, i, a, s;
n(47120), n(724458), n(773603), n(653041), n(337869);
var o,
    l,
    u,
    c = n(512722),
    d = n.n(c),
    _ = n(392711),
    E = n.n(_),
    f = n(553813),
    h = n.n(f),
    p = n(442837),
    I = n(46973),
    m = n(433517),
    T = n(846519),
    S = n(570140),
    g = n(579806),
    A = n(887278),
    N = n(547727),
    O = n(435064),
    R = n(779618),
    v = n(710845),
    C = n(811660),
    y = n(353926),
    L = n(646047),
    D = n(594190),
    b = n(502286),
    M = n(12898),
    P = n(294473),
    U = n(706629),
    w = n(926951),
    x = n(836157),
    G = n(498600),
    k = n(998594),
    B = n(529558),
    F = n(111672),
    V = n(874785),
    H = n(636458),
    Z = n(441167),
    Y = n(338336),
    j = n(751571),
    W = n(725380),
    K = n(581883),
    z = n(626135),
    q = n(12647),
    Q = n(70956),
    X = n(358085),
    $ = n(960048),
    J = n(998502),
    ee = n(13140),
    et = n(314897),
    en = n(967368),
    er = n(463395),
    ei = n(592125),
    ea = n(858340),
    es = n(19780),
    eo = n(704806),
    el = n(631768),
    eu = n(981631),
    ec = n(70722),
    ed = n(761274),
    e_ = n(526761),
    eE = n(65154),
    ef = n(689938);
function eh(e, t, n) {
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
let ep = new v.Z('MediaEngineStore');
((u = o || (o = {}))[(u.DETACHED = 0)] = 'DETACHED'), (u[(u.WAITING = 1)] = 'WAITING'), (u[(u.ATTACHED = 2)] = 'ATTACHED'), (u[(u.STARTED = 3)] = 'STARTED'), (u[(u.PLAYING = 4)] = 'PLAYING'), (u[(u.SILENCE = 5)] = 'SILENCE');
let eI = 'MediaEngineStore',
    em = {
        left: 1,
        right: 1
    },
    eT = 5 * Q.Z.Millis.SECOND;
function eS() {
    return {
        mode: eu.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: X.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: eE.Qx,
        outputVolume: eE.Qx,
        inputDeviceId: eE.w5,
        outputDeviceId: eE.w5,
        videoDeviceId: eE.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eg.supports(eE.AN.VIDEO_HOOK),
        experimentalSoundshare2: null,
        openH264: !0,
        h265Enabled: !0,
        vadThrehsoldMigrated: !1,
        aecDumpEnabled: !1,
        sidechainCompression: !1,
        sidechainCompressionSettingVersion: 0,
        sidechainCompressionStrength: 50
    };
}
let eg = (0, I.Mt)((0, I.jj)()),
    eA = {},
    eN = new Set([eE.Yn.DEFAULT]),
    eO = eg.supports(eE.AN.AUTO_ENABLE),
    eR = !1,
    ev = eE.Yn.STREAM,
    eC = { [eE.w5]: to(ef.Z.Messages.NO_INPUT_DEVICES) },
    ey = { [eE.w5]: to(ef.Z.Messages.NO_OUTPUT_DEVICES) },
    eL = { [eE.w5]: to(ef.Z.Messages.NO_VIDEO_DEVICES) },
    eD = !1,
    eb = !1,
    eM = !1,
    eP = !1,
    eU = !1,
    ew = eE.Av,
    ex = !1,
    eG = !1,
    ek = !1,
    eB = !1,
    eF = null,
    eV = !1,
    eH = !1,
    eZ = !1,
    eY = !1,
    ej = !1,
    eW = null,
    eK = !1,
    ez = !1,
    eq = !1;
j.Z.hasPermission(ed.Eu.AUDIO, { showAuthorizationError: !1 }), j.Z.hasPermission(ed.Eu.CAMERA, { showAuthorizationError: !1 });
let eQ = new Set(),
    eX = !1,
    e$ = !1,
    eJ = {},
    e0 = null,
    e1 = !0,
    e2 = {},
    e3 = 5 * Q.Z.Millis.SECOND;
function e4() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT,
        t = eA[e];
    return null == t && ((t = eS()), (eA[e] = t)), t;
}
function e5(e) {
    let t = e4(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp:
            t.modeOptions.vadUseKrisp &&
            (function () {
                return ej || !1;
            })(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function e6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Qx;
    return E().clamp(e, 0, t);
}
function e7(e) {
    let t = e4(e.context),
        n = !eO || t.mute || t.deaf;
    e.context === eE.Yn.DEFAULT ? (n = n || eD || eb || eM || !j.Z.didHavePermission(ed.Eu.AUDIO)) : e.context === eE.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eE.Yn.DEFAULT && N.Z.updateNativeMute();
}
function e8() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        o = a;
    if (((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, X.isWindows)() && A.pn(o.desktopSource.soundshareId), eg.setGoLiveSource(null, ev)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == s ? void 0 : null === (t = s.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eg.setGoLiveSource(null, ev), (eU || i) && ((ew = (eU = i) ? tu(eL, e4().videoDeviceId) : eE.Av), eg.setVideoInputDevice(ew)), (a = s), null != s)) {
        let e = {
            resolution: s.quality.resolution,
            frameRate: s.quality.frameRate
        };
        if (null != s.desktopSource) {
            let { hdrCaptureMode: t } = G.Z.getCurrentConfig({ location: 'f627ab_2' }, { autoTrackExposure: !1 }),
                n = e4().videoHook;
            eg.setGoLiveSource(
                {
                    desktopDescription: {
                        id: s.desktopSource.id,
                        soundshareId: s.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: tt(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tn(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: eT,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                ev
            );
        }
        null != s.cameraSource &&
            eg.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: s.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: s.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                ev
            );
    }
}
function e9(e, t, n, r) {
    var i;
    let a = null !== (i = null == e ? void 0 : e.soundshareSession) && void 0 !== i ? i : '';
    null == e2[a] && (e2[a] = new Set());
    let s = null != t && !e2[a].has(t);
    s && e2[a].add(t),
        (null == t || s) &&
            z.default.track(eu.rMx.SOUNDSHARE_FAILED, {
                soundshare_failure_code: t,
                soundshare_failure_reason: n,
                soundshare_failure_will_retry: r,
                ...(0, b.Z)(e)
            });
}
function te(e) {
    let t = e4(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(er.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(er.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(er.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, X.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tt() {
    return (0, X.isWindows)() && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, ec.nz);
}
function tn() {
    return (0, X.isMac)() && eg.supports(eE.AN.SCREEN_CAPTURE_KIT) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, ec.C7);
}
function tr() {
    var e;
    let t = (null === (e = ei.Z.getChannel(eW)) || void 0 === e ? void 0 : e.type) === eu.d4z.GUILD_STAGE_VOICE,
        n = r.getHardwareEncoding();
    return !t && n && w.Z.supportsSimulcast();
}
let ti = new (class {
    start() {
        !this.started && ((this.started = !0), eg.on(I.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eg.removeListener(I.aB.Silence, this.handleSilence),
            S.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = e4();
        !eV && es.Z.getState() === eu.hes.RTC_CONNECTED && e.mode === eu.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eh(this, 'stateChangeTimeout', void 0),
            eh(this, 'noVoiceTimeout', 5000),
            eh(this, 'voiceTimeout', 1500),
            eh(this, 'started', !1),
            eh(this, 'handleSilence', (e) => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout),
                    (this.stateChangeTimeout = setTimeout(
                        () => {
                            (this.stateChangeTimeout = null),
                                this.started &&
                                    (S.Z.dispatch({
                                        type: 'AUDIO_INPUT_DETECTED',
                                        inputDetected: t
                                    }),
                                    e && (eH = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function ta(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = e4(t);
    return Object.assign(r, e), !__OVERLAY__ && n && m.K.set(eI, eA), r;
}
function ts() {
    !eO &&
        eg.enable().then(() =>
            S.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function to(e) {
    return {
        id: eE.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function tl(e, t) {
    if (0 === e.length) {
        let e = to(t);
        return { [e.id]: e };
    }
    return E()(e)
        .map((e) => ({
            id: e.id,
            index: e.index,
            name: e.name,
            disabled: !1
        }))
        .keyBy('id')
        .value();
}
function tu(e, t) {
    var n;
    let r = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
    return null != r ? r.id : t;
}
function tc() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null !== (e = K.Z.settings.audioContextSettings) && void 0 !== e
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === e_.u0.USER ? eE.Yn.DEFAULT : eE.Yn.STREAM,
            a = i === eE.Yn.STREAM ? eE.Yh : eE.Qx,
            s = null !== (t = r[e]) && void 0 !== t ? t : {},
            { localMutes: o, localVolumes: l } = e4(i);
        for (let [e, t] of Object.entries(s))
            null == (0, W.Ky)(i, e) &&
                (t.muted ? (o[e] = !0) : delete o[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eg.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(o), ...Object.keys(l)]))
                null == s[e] &&
                    (delete o[e],
                    delete l[e],
                    eg.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        ta(
            {
                localMutes: o,
                localVolumes: l
            },
            i
        );
    }
}
function td(e) {
    if (null == r)
        return (
            ep.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : q.Z.getAudioPid(e),
            n = '';
        return (
            null != t && (n = q.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n
            }
        );
    }
}
function t_(e, t) {
    (0, X.isWindows)() &&
        A.YT(e, { soundshare_session: t }).then((t) => {
            null != t &&
                !D.ZP.shouldContinueWithoutElevatedProcessForPID(e) &&
                S.Z.wait(() => {
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                        errorMessage: t
                    });
                });
        });
}
function tE() {
    let e = eE.Yn.DEFAULT,
        { videoToggleStateMap: t } = e4(e);
    for (let [e, n] of Object.entries(t)) n === eu.ZUi.AUTO_PROBING && delete t[e];
    ta({ videoToggleStateMap: t }, e, !1);
}
function tf(e) {
    let t = e4();
    z.default.track(eu.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function th(e) {
    let t = ta({ sidechainCompression: e });
    eg.setSidechainCompression(t.sidechainCompression);
}
function tp() {
    let e = e4(),
        t = e.inputDeviceId,
        n = er.Z.hasEchoCancellation(t) || e.echoCancellation,
        r = er.Z.hasNoiseSuppression(t) || e.noiseSuppression,
        i = er.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
        a = e.noiseCancellation;
    eg.setLoopback(e$, {
        echoCancellation: n,
        noiseSuppression: r,
        automaticGainControl: i,
        noiseCancellation: a
    });
}
function tI() {
    return ej || !1;
}
async function tm() {
    try {
        await J.ZP.ensureModule('discord_krisp'), J.ZP.requireModule('discord_krisp'), (ej = !0), r.emitChange();
    } catch (t) {
        ep.warn('Failed to load Krisp module: '.concat(t.message)), $.Z.captureException(t);
        let e = eE.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? eE.H3.INITIALIZED : n;
        }
        z.default.track(eu.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), ta({ noiseCancellation: !1 });
    } finally {
        eY = !1;
    }
}
function tT(e) {
    let { section: t } = e;
    return t === eu.oAB.VOICE && ts(), !1;
}
class tS extends (l = p.ZP.Store) {
    initialize() {
        eg.on(I.aB.Connection, (e) => {
            var t, n;
            e5(e), e7(e), te(e);
            let i = e4();
            e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = i.openH264) || void 0 === n || n);
            let { useExperimentalRateControl: s } = H.Z.getCurrentConfig({ location: 'f627ab_4' }, { autoTrackExposure: !1 });
            s && e.setExperimentFlag(eE.V8.VIDEOTOOLBOX_RATE_CONTROL, !0);
            let o = es.Z.getGuildId(),
                {
                    muteBeforeProcessing: l,
                    pttBeforeProcessing: u,
                    skipEncode: c
                } = (null != o ? U.Z : P.Z).getCurrentConfig(
                    {
                        location: 'setupMediaEngine',
                        ...(null != o && { guildId: o })
                    },
                    { autoTrackExposure: !0 }
                );
            l && e.setExperimentFlag(eE.V8.MUTE_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(eE.V8.PTT_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(eE.V8.SKIP_ENCODE, !0);
            let { resetOnErrors: d, fallbackOnErrors: _, fallbackOnConsecutiveErrors: E } = V.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 });
            d && e.setExperimentFlag(eE.V8.RESET_DECODER_ON_ERRORS, !0), _ && e.setExperimentFlag(eE.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), E && e.setExperimentFlag(eE.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            if (e.context === eE.Yn.STREAM && tr()) {
                let t = w.Z.goliveSimulcastFlag();
                void 0 !== t && e.setExperimentFlag(t, !0);
            }
            if (((0, X.isWindows)() ? ((null == e0 ? void 0 : e0.startsWith('NVIDIA')) ? e.setExperimentFlag(eE.V8.SIGNAL_AV1, !0) : (null == e0 ? void 0 : e0.startsWith('AMD')) && M.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(eE.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eE.V8.SIGNAL_AV1_DECODE, !0)) : ((0, X.isMac)() || (0, X.isLinux)()) && e.setExperimentFlag(eE.V8.SIGNAL_AV1_DECODE, !0), (0, X.isWindows)() && e.setExperimentFlag(eE.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eg.setHasFullbandPerformance((0, C.b)()), e.setRemoteAudioHistory(0), (0, R.Z)(r))) {
                let t = O.Z.getSettings();
                e.setExperimentFlag(eE.V8.STREAMER_CLIP, t.clipsEnabled);
                let { enableViewerClipping: n } = Z.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
                e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eE.ux);
            }
            for (let t of ((i = e4(e.context)), e.setPostponeDecodeLevel(100), Object.keys(i.localMutes))) t !== et.default.getId() && e.setLocalMute(t, i.localMutes[t]);
            for (let t of Object.keys(i.localVolumes)) t !== et.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
            for (let t of Object.keys(i.localPans)) {
                let n = i.localPans[t];
                e.setLocalPan(t, n.left, n.right);
            }
            for (let t of Object.keys(i.disabledLocalVideos)) e.setLocalVideoDisabled(t, i.disabledLocalVideos[t]);
            e.on(I.Sh.Speaking, (t, n) => {
                S.Z.dispatch({
                    type: 'SPEAKING',
                    context: e.context,
                    userId: t,
                    speakingFlags: n
                });
            }),
                e.context === eE.Yn.DEFAULT &&
                    ((eG = !1),
                    e.on(I.Sh.SpeakingWhileMuted, () => {
                        (eG = !0), r.emitChange();
                    })),
                e.on(I.Sh.DesktopSourceEnd, () => {
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                        settings: { context: e.context }
                    });
                }),
                e.on(I.Sh.SoundshareAttached, () => {
                    (null == a ? void 0 : a.desktopSource) != null && z.default.track(eu.rMx.SOUNDSHARE_ATTACHED, (0, b.Z)(null == a ? void 0 : a.desktopSource));
                }),
                e.on(I.Sh.SoundshareFailed, (e) => {
                    let { failureCode: t, failureReason: n, willRetry: r } = e;
                    e9(null == a ? void 0 : a.desktopSource, t, n, r);
                }),
                e.on(I.Sh.SoundshareSpeaking, () => {
                    (null == a ? void 0 : a.desktopSource) != null && (z.default.track(eu.rMx.SOUNDSHARE_TRANSMITTING, (0, b.Z)(null == a ? void 0 : a.desktopSource)), null != ea.Z.getHookError(eu.K3D.SOUND) && S.Z.wait(() => S.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
                });
            let f = new T.V7();
            e.on(I.Sh.SoundshareTrace, (e) => {
                switch (e.type) {
                    case 'soundshare_attach_requested':
                        f.start(e3, () => {
                            S.Z.dispatch({
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
                            (e9(null == a ? void 0 : a.desktopSource, n, t, r),
                            !r &&
                                (f.stop(),
                                S.Z.wait(() =>
                                    S.Z.dispatch({
                                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                        errorMessage: t,
                                        errorCode: n
                                    })
                                )));
                        break;
                    case 'soundshare_state_transition':
                        4 === e.newState && (f.stop(), S.Z.wait(() => S.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
                }
            }),
                e.on(I.Sh.InteractionRequired, (e) => {
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                        required: e
                    });
                }),
                e.on(I.Sh.VideoHookInitialize, (e, t, n, r, i, s) => {
                    (null == a ? void 0 : a.desktopSource) != null &&
                        z.default.track(eu.rMx.VIDEOHOOK_INITIALIZED, {
                            backend: e,
                            format: t,
                            framebuffer_format: n,
                            sample_count: r,
                            success: i,
                            reinitialization: s,
                            ...(0, b.Z)(null == a ? void 0 : a.desktopSource)
                        });
                }),
                e.on(I.Sh.NoiseCancellationError, (e) => {
                    ep.warn('noisecancellererror event: '.concat(e)),
                        (eK = !0),
                        z.default.track(eu.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.Z.dispatch({
                            type: 'AUDIO_SET_NOISE_SUPPRESSION',
                            enabled: !0
                        }),
                        S.Z.dispatch({
                            type: 'AUDIO_SET_NOISE_CANCELLATION',
                            enabled: !1
                        }),
                        S.Z.dispatch({
                            type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR',
                            code: e
                        });
                }),
                e.on(I.Sh.VoiceActivityDetectorError, (e) => {
                    ep.warn('voiceactivitydetectorerror event: '.concat(e)),
                        z.default.track(eu.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.Z.dispatch({
                            type: 'AUDIO_SET_MODE',
                            context: eE.Yn.DEFAULT,
                            mode: eu.pM4.VOICE_ACTIVITY,
                            options: {
                                ...e4(eE.Yn.DEFAULT).modeOptions,
                                vadUseKrisp: !1
                            }
                        }),
                        S.Z.dispatch({
                            type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                            code: e
                        });
                }),
                e.on(I.Sh.VideoState, (t) => {
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
                        videoState: t,
                        context: e.context
                    });
                }),
                e.on(I.Sh.Destroy, () => {
                    f.stop();
                }),
                e.setBitRate(en.Z.bitrate),
                e.applyVideoQualityMode(el.Z.mode);
        }),
            eg.on(I.aB.DeviceChange, (e, t, n) => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_DEVICES',
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n
                });
            }),
            eg.on(I.aB.VolumeChange, (e, t) => {
                S.Z.dispatch({
                    type: 'AUDIO_VOLUME_CHANGE',
                    inputVolume: e,
                    outputVolume: t
                });
            }),
            eg.on(I.aB.DesktopSourceEnd, () => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: null
                });
            }),
            eg.on(I.aB.AudioPermission, (e) => {
                (eq = !0),
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_PERMISSION',
                        kind: 'audio',
                        granted: e
                    });
            }),
            eg.on(I.aB.VideoPermission, (e) => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'video',
                    granted: e
                });
            }),
            eg.on(I.aB.WatchdogTimeout, async () => {
                let e;
                try {
                    await q.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
                } catch (t) {
                    'number' == typeof t.status && (e = t.status);
                }
                ep.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), z.default.track(eu.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
            }),
            eg.on(I.aB.VideoInputInitialized, (e) => {
                z.default.track(eu.rMx.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * Q.Z.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy
                });
            }),
            eg.on(I.aB.ClipsRecordingRestartNeeded, () => {
                S.Z.dispatch({ type: 'CLIPS_RESTART' });
            }),
            eg.on(I.aB.ClipsInitFailure, (e, t) => {
                S.Z.wait(() => {
                    S.Z.dispatch({
                        type: 'CLIPS_INIT_FAILURE',
                        errMsg: e,
                        applicationName: t
                    });
                });
            }),
            eg.on(I.aB.ClipsRecordingEnded, (e, t) => {
                var n, r;
                (null == s ? void 0 : null === (n = s.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == a ? void 0 : null === (r = a.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t && A.pn(t), (s = null));
            }),
            eg.on(I.aB.NativeScreenSharePickerUpdate, (e) => {
                k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                        existing: e
                    });
            }),
            eg.on(I.aB.NativeScreenSharePickerCancel, (e) => {
                k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                        existing: e
                    });
            }),
            eg.on(I.aB.NativeScreenSharePickerError, (e) => {
                k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                        error: e
                    });
            }),
            eg.on(I.aB.AudioDeviceModuleError, (e, t, n) => {
                z.default.track(eu.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                    audio_device_module: e,
                    code: t,
                    device_name: n
                });
            }),
            ti.reset(),
            (0, eo.q)().then((e) => {
                null != e && (e0 = e.gpu_brand);
            }),
            !(function () {
                var e;
                let t = m.K.get('audio');
                null != t && (m.K.set(eI, { [eE.Yn.DEFAULT]: t }), m.K.remove('audio')),
                    (eA = null !== (e = m.K.get(eI)) && void 0 !== e ? e : {}),
                    E().each(eA, (e) => {
                        if ((E().defaultsDeep(e, eS()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ee.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)), !e.qosMigrated && ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                            var t;
                            (e.vadThrehsoldMigrated = !0), (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60);
                        }
                        (0, X.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : 1 !== e.ncUseKrispSettingVersion && ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), 1 !== e.hardwareEnabledVersion && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = 1)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
                    }),
                    (function () {
                        var e, t, n;
                        let r = e4();
                        eg.setAudioInputDevice(r.inputDeviceId), eg.setAudioOutputDevice(r.outputDeviceId), e8(), eg.setInputVolume(r.inputVolume), eg.setOutputVolume(r.outputVolume), eg.setH264Enabled(null === (e = r.hardwareEncoding) || void 0 === e || e || r.openH264), eg.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t), eg.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n), eg.setAecDump(r.aecDumpEnabled), eg.setSidechainCompression(r.sidechainCompression), eg.setSidechainCompressionStrength(r.sidechainCompressionStrength);
                    })();
            })(),
            ((0, X.isWindows)() || (0, X.isLinux)() || ((0, X.isMac)() && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, '>=21.0.0'))) && !__OVERLAY__ && !eY && !ej ? ((eY = !0), tm()) : (0, X.isWeb)() && eg.supports(eE.AN.NOISE_CANCELLATION) ? ((ej = !0), r.emitChange()) : (0, X.isWeb)() && ta({ noiseCancellation: !1 }),
            tE(),
            (eJ = {
                [eE.AN.VIDEO]: eg.supports(eE.AN.VIDEO),
                [eE.AN.DESKTOP_CAPTURE]: eg.supports(eE.AN.DESKTOP_CAPTURE),
                [eE.AN.HYBRID_VIDEO]: eg.supports(eE.AN.HYBRID_VIDEO)
            }),
            this.waitFor(et.default, er.Z, ei.Z, ea.Z, es.Z, D.ZP, j.Z.storage, K.Z, y.Z, O.Z);
    }
    supports(e) {
        return eg.supports(e);
    }
    supportsInApp(e) {
        return eJ[e] || eg.supports(e);
    }
    isSupported() {
        return eg.supported();
    }
    isExperimentalEncodersSupported() {
        return eg.supports(eE.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eg.supports(eE.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return ej || !1;
    }
    isNoiseCancellationError() {
        return eK;
    }
    isAutomaticGainControlSupported() {
        return eg.supports(eE.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return ej || !1;
    }
    isAecDumpSupported() {
        return eg.supports(eE.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eg.supports(eE.AN.VIDEO) && eg.supports(eE.AN.SIMULCAST);
    }
    getAecDump() {
        return e4().aecDumpEnabled;
    }
    getMediaEngine() {
        return eg;
    }
    getVideoComponent() {
        return eg.supports(eE.AN.DIRECT_VIDEO) && eg.setUseDirectVideo(!0), eg.Video;
    }
    getCameraComponent() {
        return eg.supports(eE.AN.DIRECT_VIDEO) && eg.setUseDirectVideo(!0), eg.Camera;
    }
    isEnabled() {
        return eO;
    }
    isMute() {
        return this.isSelfMute() || eD;
    }
    isDeaf() {
        return this.isSelfDeaf() || eP;
    }
    hasContext(e) {
        return null != eA[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return e === eE.Yn.DEFAULT && eb;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return !this.isEnabled() || e4(e).mute || !j.Z.didHavePermission(ed.Eu.AUDIO) || this.isSelfDeaf(e) || (e === eE.Yn.DEFAULT && eM);
    }
    shouldSkipMuteUnmuteSound() {
        return ex;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        ex = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && er.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return e1;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return !this.isSupported() || e4(e).deaf;
    }
    isVideoEnabled() {
        return eU && eB;
    }
    isVideoAvailable() {
        return Object.values(eL).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.STREAM;
        return ev === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.STREAM;
        return ev === t && null != a && (null === (e = a.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT;
        return e !== et.default.getId() && (e4(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eg.supports(eE.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT;
        return null !== (t = e4(n).disabledLocalVideos[e]) && void 0 !== t && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT;
        return null !== (t = e4(n).videoToggleStateMap[e]) && void 0 !== t ? t : eu.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT;
        return t === eE.Yn.DEFAULT && eQ.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return e === eE.Yn.DEFAULT && eQ.size > 0;
    }
    isMediaFilterSettingLoading() {
        return ez;
    }
    isNativeAudioPermissionReady() {
        return eq;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return ev;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT,
            n = e4(t).localPans[e];
        return null != n ? n : em;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT,
            n = t === eE.Yn.STREAM ? eE.Yh : eE.Qx,
            r = e4(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return e4().inputVolume;
    }
    getOutputVolume() {
        return e4().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return e4(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return e4(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(eA, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === eu.pM4.PUSH_TO_TALK && eN.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tu(eC, e4().inputDeviceId);
    }
    getOutputDeviceId() {
        return tu(ey, e4().outputDeviceId);
    }
    getVideoDeviceId() {
        return tu(eL, e4().videoDeviceId);
    }
    getInputDevices() {
        return eC;
    }
    getOutputDevices() {
        return ey;
    }
    getVideoDevices() {
        return eL;
    }
    getEchoCancellation() {
        let e = e4();
        return er.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e4().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return e4().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return e4().h265Enabled;
    }
    getLoopback() {
        return eg.getLoopback();
    }
    getNoiseSuppression() {
        let e = e4();
        return er.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = e4();
        return er.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return e4().noiseCancellation;
    }
    getExperimentalEncoders() {
        return e4().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null === (e = e4().hardwareEncoding) || void 0 === e || e;
    }
    getEnableSilenceWarning() {
        return e4().silenceWarning;
    }
    getDebugLogging() {
        return eg.getDebugLogging();
    }
    getQoS() {
        return e4().qos;
    }
    getAttenuation() {
        return e4().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return e4().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return e4().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return eg.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eg.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return e4(e);
    }
    getState() {
        return {
            settingsByContext: eA,
            inputDevices: eC,
            outputDevices: ey,
            appSupported: eJ,
            krispModuleLoaded: ej,
            goLiveSource: a,
            goLiveContext: ev
        };
    }
    getInputDetected() {
        return eF;
    }
    getNoInputDetectedNotice() {
        return eH;
    }
    getPacketDelay() {
        return X.isPlatformEmbedded || this.getMode() !== eu.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eg.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eR;
    }
    getVideoHook() {
        return e4().videoHook;
    }
    supportsVideoHook() {
        return eg.supports(eE.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = e4().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eg.supports(eE.AN.EXPERIMENTAL_SOUNDSHARE) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, ec.I9);
    }
    getOpenH264() {
        return e4().openH264;
    }
    getEverSpeakingWhileMuted() {
        return eG;
    }
    supportsScreenSoundshare() {
        return ((0, X.isMac)() && eg.supports(eE.AN.SOUNDSHARE) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, ec.yG) && tn()) || ((0, X.isWindows)() && eg.supports(eE.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare());
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT,
            t = this.supports(eE.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === eE.Yn.DEFAULT ? eE.Tr.VIDEO : eE.Tr.SCREEN,
                          quality: 100
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eE.Yn.DEFAULT || tr()) &&
                t.push({
                    rid: '50',
                    type: e === eE.Yn.DEFAULT ? eE.Tr.VIDEO : eE.Tr.SCREEN,
                    quality: 50
                }),
            t
        );
    }
    getSupportedSecureFramesProtocolVersion(e) {
        var t;
        let n = eg.getSupportedSecureFramesProtocolVersion(),
            r = B.m.getCurrentConfig({ location: 'MediaEngineStore' }),
            i =
                null != e
                    ? B.N.getCurrentConfig({
                          guildId: e,
                          location: 'MediaEngineStore'
                      })
                    : null,
            a = r.canSupportSecureFrames || (null == i ? void 0 : i.canSupportSecureFrames),
            s = r.canSupportMls || (null == i ? void 0 : i.canSupportMls),
            o = Math.max(r.protocolVersionFloor, null !== (t = null == i ? void 0 : i.protocolVersionFloor) && void 0 !== t ? t : 0);
        return a && n % 100 >= o ? (s ? n : n % 100) : 0;
    }
    hasClipsSource() {
        return null != s;
    }
}
eh(tS, 'displayName', 'MediaEngineStore'),
    (r = new tS(S.Z, {
        VOICE_CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
            if ((r !== n && e8(i, null), null != t || null == n)) {
                eZ = !1;
                return;
            }
            if (eZ) return;
            eZ = !0;
            let a = e4();
            (a.mute || a.deaf) &&
                (ta({
                    deaf: !1,
                    mute: !1
                }),
                eg.eachConnection(e7));
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => (i === t.sessionId ? ((eD = t.mute || t.suppress), (eP = t.deaf), eg.eachConnection(e7), e8(!(null != t.guildId && null != t.channelId && null != eW && eW !== t.channelId) && eU), (eW = t.channelId), !0) : (!__OVERLAY__ && t.userId === et.default.getId() && null == es.Z.getChannelId() && e8(!1, null), e)), !1);
        },
        CONNECTION_OPEN: function (e) {
            (i = e.sessionId),
                (eD = !1),
                (eP = !1),
                !(0, X.isWeb)() &&
                    F.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                        let t = e4();
                        !e.sidechainAvailable && t.sidechainCompression ? (ta({ sidechainCompressionSettingVersion: 0 }), th(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < 1 && (ta({ sidechainCompressionSettingVersion: 1 }), th(e.sidechainEnabled));
                    }),
                tc();
        },
        CONNECTION_CLOSED: function () {
            i = null;
        },
        RTC_CONNECTION_STATE: function (e) {
            switch (e.state) {
                case eu.hes.CONNECTING:
                    ts();
                    break;
                case eu.hes.RTC_CONNECTING:
                    (eV = !1), (eH = !1);
                    break;
                case eu.hes.RTC_CONNECTED:
                    e8();
                    break;
                case eu.hes.DISCONNECTED:
                    (function () {
                        if (0 === eQ.size) return;
                        let e = eE.Yn.DEFAULT,
                            { disabledLocalVideos: t } = e4(e);
                        eQ.forEach((n) => {
                            d()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eg.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            eQ.clear(),
                            ta({ disabledLocalVideos: t }, e, !1);
                    })(),
                        tE();
            }
            ti.update();
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
            let { mute: t } = e;
            (eb = t), eg.eachConnection(e7);
        },
        AUDIO_TOGGLE_SELF_MUTE: function (e) {
            let { context: t, skipMuteUnmuteSoundEffect: n } = e,
                { mute: r, deaf: i } = e4(t);
            if (t === eE.Yn.DEFAULT && (j.Z.requestPermission(ed.Eu.AUDIO), eM)) return !1;
            !(r = !i && !r) && (i = !1),
                n && (ex = !0),
                ta(
                    {
                        mute: r,
                        deaf: i
                    },
                    t
                ),
                eg.eachConnection(e7);
        },
        AUDIO_SET_SELF_MUTE: function (e) {
            let { context: t, mute: n } = e;
            ta({ mute: n }, t), eg.eachConnection(e7);
        },
        AUDIO_TOGGLE_SELF_DEAF: function (e) {
            let { context: t } = e;
            ta({ deaf: !e4(t).deaf }, t), eg.eachConnection(e7);
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
            let { context: t, userId: n } = e;
            if (n === et.default.getId()) return;
            let { localMutes: r } = e4(t);
            r[n] ? delete r[n] : (r[n] = !0), ta({ localMutes: r }, t), eg.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
            var t, n, r, i, a, s, o;
            let { context: l, userId: u, videoToggleState: c, persist: _, isAutomatic: E } = e;
            d()(!(_ && E), 'These are not allowed to both be true.');
            let f = c === eu.ZUi.DISABLED,
                { disabledLocalVideos: h } = e4(l),
                p = null !== (t = h[u]) && void 0 !== t && t,
                I = eQ.has(u),
                m = c === eu.ZUi.AUTO_ENABLED || c === eu.ZUi.MANUAL_ENABLED;
            ep.info('disableVideo='.concat(f, ' currentlyDisabled=').concat(p, ' currentlyAutoDisabled=').concat(I, ', isVideoShown=').concat(m)), d()(!(I && !p), 'If you are auto-disabled, then you are also disabled.');
            let T = f !== p,
                S = l === eE.Yn.DEFAULT,
                g = E && T && S,
                A = _ && T && S;
            ep.info('changed='.concat(T, ' isDefaultContext=').concat(S, ' isUpdateCausedByVideoHealthManager=').concat(g, ' isManualToggleByUser=').concat(A));
            let { videoToggleStateMap: N } = e4(l);
            if ((N[u] === eu.ZUi.AUTO_PROBING && c === eu.ZUi.AUTO_ENABLED && (0, Y.Z)(u, f ? eE.fC.AUTO_DISABLE : eE.fC.AUTO_ENABLE, m), (N[u] = c), ta({ videoToggleStateMap: N }, l, _), c === eu.ZUi.AUTO_PROBING ? null === (n = es.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (r = es.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(u, !1), !eX && (ep.info('isAutoDisableAllowed='.concat(eX, ' - disabling VideoHealthManager')), null === (a = es.Z.getRTCConnection()) || void 0 === a || null === (i = a.getVideoHealthManager()) || void 0 === i || i.disable()), g)) {
                if ((!f && !I) || (f && !eX)) return;
                (0, Y.Z)(u, f ? eE.fC.AUTO_DISABLE : eE.fC.AUTO_ENABLE, m), f ? eQ.add(u) : eQ.delete(u);
            } else A && (I && !f ? (ep.info('disallowing auto-disable for this session because of manual override by user'), (eX = !1), null === (o = es.Z.getRTCConnection()) || void 0 === o || null === (s = o.getVideoHealthManager()) || void 0 === s || s.disable(), (0, Y.Z)(u, eE.fC.MANUAL_REENABLE, m)) : (0, Y.Z)(u, f ? eE.fC.MANUAL_DISABLE : eE.fC.MANUAL_ENABLE, m));
            S && !f && eQ.delete(u),
                f ? (h[u] = !0) : delete h[u],
                ta({ disabledLocalVideos: h }, l, _),
                eg.eachConnection((e) => {
                    var t;
                    return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t);
                }, l);
        },
        AUDIO_SET_LOCAL_VOLUME: function (e) {
            let { context: t, userId: n, volume: r } = e;
            if (n === et.default.getId()) return;
            let i = t === eE.Yn.STREAM ? eE.Yh : eE.Qx,
                { localVolumes: a } = e4(t);
            r === i ? delete a[n] : (a[n] = r), ta({ localVolumes: a }, t), eg.eachConnection((e) => e.setLocalVolume(n, r), t);
        },
        AUDIO_SET_LOCAL_PAN: function (e) {
            let { context: t, userId: n, left: r, right: i } = e,
                { localPans: a } = e4(t);
            (a[n] = {
                left: r,
                right: i
            }),
                ta({ localPans: a }, t),
                eg.eachConnection((e) => e.setLocalPan(n, r, i), t);
        },
        AUDIO_SET_MODE: function (e) {
            let { context: t, mode: n, options: r } = e;
            ta(
                {
                    mode: n,
                    modeOptions: r
                },
                t
            ),
                eg.eachConnection(e5),
                ti.update();
        },
        AUDIO_SET_INPUT_VOLUME: function (e) {
            let { volume: t } = e;
            ta({ inputVolume: e6(t) }), eg.setInputVolume(t);
        },
        AUDIO_SET_OUTPUT_VOLUME: function (e) {
            let { volume: t } = e;
            ta({ outputVolume: t }), eg.setOutputVolume(t);
        },
        AUDIO_SET_INPUT_DEVICE: function (e) {
            let { id: t } = e;
            ta({ inputDeviceId: (t = tu(eC, t)) }), eg.setAudioInputDevice(t);
        },
        AUDIO_SET_OUTPUT_DEVICE: function (e) {
            let { id: t } = e;
            ta({ outputDeviceId: (t = tu(ey, t)) }), eg.setAudioOutputDevice(t);
        },
        AUDIO_SET_ECHO_CANCELLATION: function (e) {
            let t = ta({ echoCancellation: e.enabled });
            eg.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), tp(), tf(e.location);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
            th(e.enabled);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
            let t = ta({ sidechainCompressionStrength: e.strength });
            eg.setSidechainCompressionStrength(t.sidechainCompressionStrength);
        },
        AUDIO_SET_LOOPBACK: function (e) {
            let { enabled: t } = e;
            return (e$ = t), tp();
        },
        AUDIO_SET_NOISE_SUPPRESSION: function (e) {
            let t = ta({ noiseSuppression: e.enabled });
            eg.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), tp(), tf(e.location);
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
            let t = ta({ automaticGainControl: e.enabled });
            eg.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), tp(), tf(e.location);
        },
        AUDIO_SET_NOISE_CANCELLATION: function (e) {
            let t = ta({ noiseCancellation: e.enabled });
            eg.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), tp(), tf(e.location);
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
            ta({ silenceWarning: e.enabled }), ti.update();
        },
        AUDIO_SET_DEBUG_LOGGING: function (e) {
            eg.setDebugLogging(e.enabled);
        },
        MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
            ta({ videoHook: e.enabled });
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
            ta({ experimentalSoundshare2: e.enabled });
        },
        AUDIO_SET_ATTENUATION: function (e) {
            let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
                i = ta({
                    attenuation: t,
                    attenuateWhileSpeakingSelf: n,
                    attenuateWhileSpeakingOthers: r
                });
            eg.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
        },
        AUDIO_SET_QOS: function (e) {
            let { enabled: t } = e;
            ta({ qos: t }), eg.eachConnection((e) => e.setQoS(t));
        },
        MEDIA_ENGINE_DEVICES: function (e) {
            let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
            !(function (e) {
                let t = eC;
                if (((eC = tl(e, ef.Z.Messages.NO_INPUT_DEVICES)), !E().isEqual(eC, t))) {
                    let e = e4(),
                        t = tu(eC, e.inputDeviceId);
                    eg.setAudioInputDevice(t);
                }
            })(t),
                !(function (e) {
                    let t = ey;
                    if (((ey = tl(e, ef.Z.Messages.NO_OUTPUT_DEVICES)), !E().isEqual(ey, t))) {
                        let e = e4(),
                            t = tu(ey, e.outputDeviceId);
                        eg.setAudioOutputDevice(t);
                    }
                })(n),
                !(function (e) {
                    eB = e.length > 0;
                    let t = eL;
                    if (((eL = tl(e, ef.Z.Messages.NO_VIDEO_DEVICES)), eU && !E().isEqual(eL, t))) {
                        var n;
                        let e = void 0 !== eL[ew],
                            r = ew === eE.w5 && (null === (n = t[eE.w5]) || void 0 === n ? void 0 : n.disabled);
                        e8(e || r);
                    }
                })(r);
        },
        AUDIO_VOLUME_CHANGE: function (e) {
            let { inputVolume: t, outputVolume: n } = e;
            ta({
                inputVolume: e6(t),
                outputVolume: n
            });
        },
        AUDIO_RESET: function () {
            m.K.remove(eI), location.reload();
        },
        AUDIO_INPUT_DETECTED: function (e) {
            let { inputDetected: t } = e;
            (eF = t), !eV && eF && ((eV = !0), ti.update());
        },
        AUDIO_SET_SUBSYSTEM: function (e) {
            eg.setAudioSubsystem(e.subsystem);
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
            (eO = e.enabled),
                e.unmute &&
                    ta({
                        mute: !1,
                        deaf: !1
                    }),
                eg.eachConnection(e7);
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
            let { enabled: t } = e;
            j.Z.requestPermission(ed.Eu.CAMERA), e8(t);
        },
        MEDIA_ENGINE_PERMISSION: function (e) {
            let { kind: t, granted: n } = e;
            if (!n)
                switch (t) {
                    case 'audio':
                        (eO = !1), eg.eachConnection(e7);
                        break;
                    case 'video':
                        e8(!1);
                }
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
            var t, n, r, i;
            let { settings: s } = e;
            if ((null == s ? void 0 : s.desktopSettings) != null) {
                let e = null,
                    r = null,
                    { sourceId: i, sound: o } = s.desktopSettings,
                    l = null !== (t = s.context) && void 0 !== t ? t : eE.Yn.DEFAULT,
                    u =
                        null !== (n = s.qualityOptions) && void 0 !== n
                            ? n
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              },
                    c = !1 === o ? null : q.Z.getPidFromDesktopSource(i);
                X.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = td(c)), null != e && t_(e, r)),
                    !(function (e) {
                        if (e !== ev) null != a && eg.setGoLiveSource(null, ev), (ev = e);
                    })(l),
                    e8(l === eE.Yn.STREAM && eU, {
                        desktopSource: {
                            id: i,
                            sourcePid: c,
                            soundshareId: e,
                            soundshareSession: r
                        },
                        quality: {
                            resolution: u.resolution,
                            frameRate: u.frameRate
                        }
                    });
            } else if ((null == s ? void 0 : s.cameraSettings) != null) {
                let e = null !== (r = s.context) && void 0 !== r ? r : eE.Yn.DEFAULT,
                    { videoDeviceGuid: t, audioDeviceGuid: n } = s.cameraSettings,
                    a = e === eE.Yn.STREAM && eU,
                    o =
                        null !== (i = s.qualityOptions) && void 0 !== i
                            ? i
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              };
                e8(a, {
                    cameraSource: {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    },
                    quality: {
                        resolution: o.resolution,
                        frameRate: o.frameRate
                    }
                });
            } else e8(eU, null);
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
            let { id: t } = e;
            ta({ videoDeviceId: (t = tu(eL, t)) }), e8();
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function (e) {
            let t = ta({ experimentalEncoders: e.enabled });
            eg.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
            return eR !== e.required && ((eR = e.required), !e.required && eg.interact(), !0);
        },
        USER_SETTINGS_MODAL_INIT: tT,
        USER_SETTINGS_MODAL_SET_SECTION: tT,
        CERTIFIED_DEVICES_SET: function () {
            return eg.eachConnection(te), !1;
        },
        RPC_APP_CONNECTED: function (e) {
            let { application: t } = e;
            eN.add(t.id);
        },
        RPC_APP_DISCONNECTED: function (e) {
            let { application: t } = e;
            eN.delete(t.id);
        },
        OVERLAY_INITIALIZE: function (e) {
            let { mediaEngineState: t } = e;
            (eA = t.settingsByContext), (eC = t.inputDevices), (ey = t.outputDevices), (eJ = t.appSupported), (ej = t.krispModuleLoaded), (ev = t.goLiveContext);
        },
        MEDIA_ENGINE_SET_OPEN_H264: function (e) {
            let { enabled: t } = e,
                n = ta({ openH264: t });
            eg.setH264Enabled(n.hardwareEncoding || n.openH264),
                eg.eachConnection((e) => {
                    var t;
                    return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
                });
        },
        MEDIA_ENGINE_SET_HARDWARE_ENCODING: function (e) {
            var t, n;
            let { enabled: r } = e,
                i = ta({ hardwareEncoding: r });
            eg.eachConnection((e) => {
                var t;
                return e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t);
            }),
                eg.setH264Enabled(i.hardwareEncoding || i.openH264),
                eg.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t),
                eg.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n);
        },
        APP_STATE_UPDATE: function (e) {
            let { state: t } = e,
                n = L.Z.isEnabled();
            if (t === eu.$7l.BACKGROUND && eU && !n) (ek = !0), e8(!1);
            else {
                if (t !== eu.$7l.ACTIVE || !ek) return !1;
                (ek = !1), e8(!0);
            }
            return !0;
        },
        SET_CHANNEL_BITRATE: function (e) {
            eg.eachConnection((t) => t.setBitRate(e.bitrate));
        },
        SET_VAD_PERMISSION: function (e) {
            let { hasPermission: t } = e,
                n = !t;
            if (n === eM) return !1;
            (eM = n), eg.eachConnection(e7);
        },
        SET_NATIVE_PERMISSION: function (e) {
            let { state: t, permissionType: n } = e,
                r = t === ed.PQ.ACCEPTED;
            switch (n) {
                case ed.Eu.AUDIO:
                    (eq = !0), eg.eachConnection(e7);
                    break;
                case ed.Eu.CAMERA:
                    !r && eU && e8(!1);
                    break;
                default:
                    return !1;
            }
        },
        SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
            eg.eachConnection((t) => t.applyVideoQualityMode(e.mode));
        },
        MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
            let { enabled: t } = e,
                n = ta({ aecDumpEnabled: t });
            eg.setAecDump(n.aecDumpEnabled);
        },
        CHANNEL_DELETE: function () {
            if ((!eU && null == a) || null != es.Z.getRTCConnectionId()) return !1;
            e8(!1, null);
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
            return !!eK && ((eK = !1), !0);
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
            let { settings: t } = e;
            eg.applyMediaFilterSettings(t).finally(() => {
                (ez = !1), r.emitChange();
            });
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
            ez = !0;
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
            ez = !1;
        },
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            let {
                settings: { type: t },
                local: n,
                wasSaved: r
            } = e;
            if (t !== e_.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
            tc(!0);
        },
        CLIPS_INIT: function (e) {
            let { sourceId: t, applicationName: n, quality: i } = e,
                { enableDecoupledGameClipping: a } = x.Z.getCurrentConfig({ location: 'handleClipsInit' }, { autoTrackExposure: !0 }),
                o = O.Z.getSettings().decoupledClipsEnabled;
            if (!a || !o || null == g.Z) return;
            let l = null,
                u = null,
                c = q.Z.getPidFromDesktopSource(t);
            ({ soundshareId: l, soundshareSession: u } = td(c));
            let d = {
                desktopSource: {
                    id: t,
                    sourcePid: c,
                    soundshareId: l,
                    soundshareSession: u
                },
                quality: i
            };
            null != s && s.desktopSource.id !== d.desktopSource.id && (eg.setClipsSource(null), (0, X.isWindows)() && null != s.desktopSource.soundshareId && A.pn(s.desktopSource.soundshareId)), null != l && t_(l, u), (s = d);
            let { hdrCaptureMode: _ } = G.Z.getCurrentConfig({ location: 'f627ab_12' }, { autoTrackExposure: !1 }),
                E = e4().videoHook;
            eg.setClipsSource({
                desktopDescription: {
                    id: s.desktopSource.id,
                    soundshareId: s.desktopSource.soundshareId,
                    useVideoHook: E,
                    useGraphicsCapture: tt(),
                    useLoopback: r.getExperimentalSoundshare(),
                    useQuartzCapturer: !0,
                    allowScreenCaptureKit: tn(),
                    videoHookStaleFrameTimeoutMs: 500,
                    graphicsCaptureStaleFrameTimeoutMs: eT,
                    hdrCaptureMode: _
                },
                quality: i,
                applicationName: n
            });
        },
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            !1 === t.decoupledClipsEnabled && ((s = null), eg.setClipsSource(null));
        },
        MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
            e1 = e.enabled;
        }
    })),
    (t.Z = r);
