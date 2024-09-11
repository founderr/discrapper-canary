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
    H = n(441167),
    Z = n(338336),
    Y = n(751571),
    j = n(725380),
    W = n(581883),
    K = n(626135),
    z = n(12647),
    q = n(70956),
    Q = n(358085),
    X = n(960048),
    $ = n(998502),
    J = n(13140),
    ee = n(314897),
    et = n(967368),
    en = n(463395),
    er = n(592125),
    ei = n(858340),
    ea = n(19780),
    es = n(704806),
    eo = n(631768),
    el = n(981631),
    eu = n(70722),
    ec = n(761274),
    ed = n(526761),
    e_ = n(65154),
    eE = n(689938);
function ef(e, t, n) {
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
let eh = new v.Z('MediaEngineStore');
((u = o || (o = {}))[(u.DETACHED = 0)] = 'DETACHED'), (u[(u.WAITING = 1)] = 'WAITING'), (u[(u.ATTACHED = 2)] = 'ATTACHED'), (u[(u.STARTED = 3)] = 'STARTED'), (u[(u.PLAYING = 4)] = 'PLAYING'), (u[(u.SILENCE = 5)] = 'SILENCE');
let ep = 'MediaEngineStore',
    eI = {
        left: 1,
        right: 1
    },
    em = 5 * q.Z.Millis.SECOND;
function eT() {
    return {
        mode: el.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: Q.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: e_.Qx,
        outputVolume: e_.Qx,
        inputDeviceId: e_.w5,
        outputDeviceId: e_.w5,
        videoDeviceId: e_.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eS.supports(e_.AN.VIDEO_HOOK),
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
let eS = (0, I.Mt)((0, I.jj)()),
    eg = {},
    eA = new Set([e_.Yn.DEFAULT]),
    eN = eS.supports(e_.AN.AUTO_ENABLE),
    eO = !1,
    eR = e_.Yn.STREAM,
    ev = { [e_.w5]: ts(eE.Z.Messages.NO_INPUT_DEVICES) },
    eC = { [e_.w5]: ts(eE.Z.Messages.NO_OUTPUT_DEVICES) },
    ey = { [e_.w5]: ts(eE.Z.Messages.NO_VIDEO_DEVICES) },
    eL = !1,
    eD = !1,
    eb = !1,
    eM = !1,
    eP = !1,
    eU = e_.Av,
    ew = !1,
    ex = !1,
    eG = !1,
    ek = !1,
    eB = null,
    eF = !1,
    eV = !1,
    eH = !1,
    eZ = !1,
    eY = !1,
    ej = null,
    eW = !1,
    eK = !1,
    ez = !1;
Y.Z.hasPermission(ec.Eu.AUDIO, { showAuthorizationError: !1 }), Y.Z.hasPermission(ec.Eu.CAMERA, { showAuthorizationError: !1 });
let eq = new Set(),
    eQ = !1,
    eX = !1,
    e$ = {},
    eJ = null,
    e0 = !0,
    e1 = {},
    e2 = 5 * q.Z.Millis.SECOND;
function e3() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT,
        t = eg[e];
    return null == t && ((t = eT()), (eg[e] = t)), t;
}
function e4(e) {
    let t = e3(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp:
            t.modeOptions.vadUseKrisp &&
            (function () {
                return eY || !1;
            })(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function e5(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Qx;
    return E().clamp(e, 0, t);
}
function e6(e) {
    let t = e3(e.context),
        n = !eN || t.mute || t.deaf;
    e.context === e_.Yn.DEFAULT ? (n = n || eL || eD || eb || !Y.Z.didHavePermission(ec.Eu.AUDIO)) : e.context === e_.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === e_.Yn.DEFAULT && N.Z.updateNativeMute();
}
function e7() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        o = a;
    if (((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, Q.isWindows)() && A.pn(o.desktopSource.soundshareId), eS.setGoLiveSource(null, eR)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == s ? void 0 : null === (t = s.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eS.setGoLiveSource(null, eR), (eP || i) && ((eU = (eP = i) ? tl(ey, e3().videoDeviceId) : e_.Av), eS.setVideoInputDevice(eU)), (a = s), null != s)) {
        let e = {
            resolution: s.quality.resolution,
            frameRate: s.quality.frameRate
        };
        if (null != s.desktopSource) {
            let { hdrCaptureMode: t } = G.Z.getCurrentConfig({ location: 'f627ab_2' }, { autoTrackExposure: !1 }),
                n = e3().videoHook;
            eS.setGoLiveSource(
                {
                    desktopDescription: {
                        id: s.desktopSource.id,
                        soundshareId: s.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: te(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tt(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: em,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eR
            );
        }
        null != s.cameraSource &&
            eS.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: s.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: s.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eR
            );
    }
}
function e8(e, t, n, r) {
    var i;
    let a = null !== (i = null == e ? void 0 : e.soundshareSession) && void 0 !== i ? i : '';
    null == e1[a] && (e1[a] = new Set());
    let s = null != t && !e1[a].has(t);
    s && e1[a].add(t),
        (null == t || s) &&
            K.default.track(el.rMx.SOUNDSHARE_FAILED, {
                soundshare_failure_code: t,
                soundshare_failure_reason: n,
                soundshare_failure_will_retry: r,
                ...(0, b.Z)(e)
            });
}
function e9(e) {
    let t = e3(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(en.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(en.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(en.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, Q.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function te() {
    return (0, Q.isWindows)() && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, eu.nz);
}
function tt() {
    return (0, Q.isMac)() && eS.supports(e_.AN.SCREEN_CAPTURE_KIT) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, eu.C7);
}
function tn() {
    var e;
    let t = (null === (e = er.Z.getChannel(ej)) || void 0 === e ? void 0 : e.type) === el.d4z.GUILD_STAGE_VOICE,
        n = r.getHardwareEncoding();
    return !t && n && w.Z.supportsSimulcast();
}
let tr = new (class {
    start() {
        !this.started && ((this.started = !0), eS.on(I.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eS.removeListener(I.aB.Silence, this.handleSilence),
            S.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = e3();
        !eF && ea.Z.getState() === el.hes.RTC_CONNECTED && e.mode === el.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        ef(this, 'stateChangeTimeout', void 0),
            ef(this, 'noVoiceTimeout', 5000),
            ef(this, 'voiceTimeout', 1500),
            ef(this, 'started', !1),
            ef(this, 'handleSilence', (e) => {
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
                                    e && (eV = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function ti(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = e3(t);
    return Object.assign(r, e), !__OVERLAY__ && n && m.K.set(ep, eg), r;
}
function ta() {
    !eN &&
        eS.enable().then(() =>
            S.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function ts(e) {
    return {
        id: e_.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function to(e, t) {
    if (0 === e.length) {
        let e = ts(t);
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
function tl(e, t) {
    var n;
    let r = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
    return null != r ? r.id : t;
}
function tu() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null !== (e = W.Z.settings.audioContextSettings) && void 0 !== e
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === ed.u0.USER ? e_.Yn.DEFAULT : e_.Yn.STREAM,
            a = i === e_.Yn.STREAM ? e_.Yh : e_.Qx,
            s = null !== (t = r[e]) && void 0 !== t ? t : {},
            { localMutes: o, localVolumes: l } = e3(i);
        for (let [e, t] of Object.entries(s))
            null == (0, j.Ky)(i, e) &&
                (t.muted ? (o[e] = !0) : delete o[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eS.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(o), ...Object.keys(l)]))
                null == s[e] &&
                    (delete o[e],
                    delete l[e],
                    eS.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        ti(
            {
                localMutes: o,
                localVolumes: l
            },
            i
        );
    }
}
function tc(e) {
    if (null == r)
        return (
            eh.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : z.Z.getAudioPid(e),
            n = '';
        return (
            null != t && (n = z.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n
            }
        );
    }
}
function td(e, t) {
    (0, Q.isWindows)() &&
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
function t_() {
    let e = e_.Yn.DEFAULT,
        { videoToggleStateMap: t } = e3(e);
    for (let [e, n] of Object.entries(t)) n === el.ZUi.AUTO_PROBING && delete t[e];
    ti({ videoToggleStateMap: t }, e, !1);
}
function tE(e) {
    let t = e3();
    K.default.track(el.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function tf(e) {
    let t = ti({ sidechainCompression: e });
    eS.setSidechainCompression(t.sidechainCompression);
}
function th() {
    let e = e3(),
        t = e.inputDeviceId,
        n = en.Z.hasEchoCancellation(t) || e.echoCancellation,
        r = en.Z.hasNoiseSuppression(t) || e.noiseSuppression,
        i = en.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
        a = e.noiseCancellation;
    eS.setLoopback(eX, {
        echoCancellation: n,
        noiseSuppression: r,
        automaticGainControl: i,
        noiseCancellation: a
    });
}
function tp() {
    return eY || !1;
}
async function tI() {
    try {
        await $.ZP.ensureModule('discord_krisp'), $.ZP.requireModule('discord_krisp'), (eY = !0), r.emitChange();
    } catch (t) {
        eh.warn('Failed to load Krisp module: '.concat(t.message)), X.Z.captureException(t);
        let e = e_.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? e_.H3.INITIALIZED : n;
        }
        K.default.track(el.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), ti({ noiseCancellation: !1 });
    } finally {
        eZ = !1;
    }
}
function tm(e) {
    e === e_.iA.AUTOMATIC ? (ti({ automaticAudioSubsystem: !0 }), tT()) : (ti({ automaticAudioSubsystem: !1 }), eS.setAudioSubsystem(e));
}
function tT() {
    eS.setAudioSubsystem(e_.iA.STANDARD);
}
function tS(e) {
    let { section: t } = e;
    return t === el.oAB.VOICE && ta(), !1;
}
class tg extends (l = p.ZP.Store) {
    initialize() {
        eS.on(I.aB.Connection, (e) => {
            var t, n;
            e4(e), e6(e), e9(e);
            let i = e3();
            e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = i.openH264) || void 0 === n || n);
            let s = ea.Z.getGuildId(),
                {
                    muteBeforeProcessing: o,
                    pttBeforeProcessing: l,
                    skipEncode: u
                } = (null != s ? U.Z : P.Z).getCurrentConfig(
                    {
                        location: 'setupMediaEngine',
                        ...(null != s && { guildId: s })
                    },
                    { autoTrackExposure: !0 }
                );
            o && e.setExperimentFlag(e_.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(e_.V8.PTT_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(e_.V8.SKIP_ENCODE, !0);
            let { resetOnErrors: c, fallbackOnErrors: d, fallbackOnConsecutiveErrors: _ } = V.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 });
            c && e.setExperimentFlag(e_.V8.RESET_DECODER_ON_ERRORS, !0), d && e.setExperimentFlag(e_.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), _ && e.setExperimentFlag(e_.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            if (e.context === e_.Yn.STREAM && tn()) {
                let t = w.Z.goliveSimulcastFlag();
                void 0 !== t && e.setExperimentFlag(t, !0);
            }
            if (((0, Q.isWindows)() ? ((null == eJ ? void 0 : eJ.startsWith('NVIDIA')) ? e.setExperimentFlag(e_.V8.SIGNAL_AV1, !0) : (null == eJ ? void 0 : eJ.startsWith('AMD')) && M.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(e_.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(e_.V8.SIGNAL_AV1_DECODE, !0)) : ((0, Q.isMac)() || (0, Q.isLinux)()) && e.setExperimentFlag(e_.V8.SIGNAL_AV1_DECODE, !0), (0, Q.isWindows)() && e.setExperimentFlag(e_.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eS.setHasFullbandPerformance((0, C.b)()), e.setRemoteAudioHistory(0), (0, R.Z)(r))) {
                let t = O.Z.getSettings();
                e.setExperimentFlag(e_.V8.STREAMER_CLIP, t.clipsEnabled);
                let { enableViewerClipping: n } = H.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
                e.setViewerSideClip(n), e.setClipsKeyFrameInterval(e_.ux);
            }
            for (let t of ((i = e3(e.context)), e.setPostponeDecodeLevel(100), Object.keys(i.localMutes))) t !== ee.default.getId() && e.setLocalMute(t, i.localMutes[t]);
            for (let t of Object.keys(i.localVolumes)) t !== ee.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
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
                e.context === e_.Yn.DEFAULT &&
                    ((ex = !1),
                    e.on(I.Sh.SpeakingWhileMuted, () => {
                        (ex = !0), r.emitChange();
                    })),
                e.on(I.Sh.DesktopSourceEnd, () => {
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                        settings: { context: e.context }
                    });
                }),
                e.on(I.Sh.SoundshareAttached, () => {
                    (null == a ? void 0 : a.desktopSource) != null && K.default.track(el.rMx.SOUNDSHARE_ATTACHED, (0, b.Z)(null == a ? void 0 : a.desktopSource));
                }),
                e.on(I.Sh.SoundshareFailed, (e) => {
                    let { failureCode: t, failureReason: n, willRetry: r } = e;
                    e8(null == a ? void 0 : a.desktopSource, t, n, r);
                }),
                e.on(I.Sh.SoundshareSpeaking, () => {
                    (null == a ? void 0 : a.desktopSource) != null && (K.default.track(el.rMx.SOUNDSHARE_TRANSMITTING, (0, b.Z)(null == a ? void 0 : a.desktopSource)), null != ei.Z.getHookError(el.K3D.SOUND) && S.Z.wait(() => S.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
                });
            let E = new T.V7();
            e.on(I.Sh.SoundshareTrace, (e) => {
                switch (e.type) {
                    case 'soundshare_attach_requested':
                        E.start(e2, () => {
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
                            (e8(null == a ? void 0 : a.desktopSource, n, t, r),
                            !r &&
                                (E.stop(),
                                S.Z.wait(() =>
                                    S.Z.dispatch({
                                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                        errorMessage: t,
                                        errorCode: n
                                    })
                                )));
                        break;
                    case 'soundshare_state_transition':
                        4 === e.newState && (E.stop(), S.Z.wait(() => S.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
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
                        K.default.track(el.rMx.VIDEOHOOK_INITIALIZED, {
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
                    eh.warn('noisecancellererror event: '.concat(e)),
                        (eW = !0),
                        K.default.track(el.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                    eh.warn('voiceactivitydetectorerror event: '.concat(e)),
                        K.default.track(el.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.Z.dispatch({
                            type: 'AUDIO_SET_MODE',
                            context: e_.Yn.DEFAULT,
                            mode: el.pM4.VOICE_ACTIVITY,
                            options: {
                                ...e3(e_.Yn.DEFAULT).modeOptions,
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
                    E.stop();
                }),
                e.setBitRate(et.Z.bitrate),
                e.applyVideoQualityMode(eo.Z.mode);
        }),
            eS.on(I.aB.DeviceChange, (e, t, n) => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_DEVICES',
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n
                });
            }),
            eS.on(I.aB.VolumeChange, (e, t) => {
                S.Z.dispatch({
                    type: 'AUDIO_VOLUME_CHANGE',
                    inputVolume: e,
                    outputVolume: t
                });
            }),
            eS.on(I.aB.DesktopSourceEnd, () => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: null
                });
            }),
            eS.on(I.aB.AudioPermission, (e) => {
                (ez = !0),
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_PERMISSION',
                        kind: 'audio',
                        granted: e
                    });
            }),
            eS.on(I.aB.VideoPermission, (e) => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'video',
                    granted: e
                });
            }),
            eS.on(I.aB.WatchdogTimeout, async () => {
                let e;
                try {
                    await z.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
                } catch (t) {
                    'number' == typeof t.status && (e = t.status);
                }
                eh.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), K.default.track(el.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
            }),
            eS.on(I.aB.VideoInputInitialized, (e) => {
                K.default.track(el.rMx.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * q.Z.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy
                });
            }),
            eS.on(I.aB.ClipsRecordingRestartNeeded, () => {
                S.Z.dispatch({ type: 'CLIPS_RESTART' });
            }),
            eS.on(I.aB.ClipsInitFailure, (e, t) => {
                S.Z.wait(() => {
                    S.Z.dispatch({
                        type: 'CLIPS_INIT_FAILURE',
                        errMsg: e,
                        applicationName: t
                    });
                });
            }),
            eS.on(I.aB.ClipsRecordingEnded, (e, t) => {
                var n, r;
                (null == s ? void 0 : null === (n = s.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == a ? void 0 : null === (r = a.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t && A.pn(t), (s = null));
            }),
            eS.on(I.aB.NativeScreenSharePickerUpdate, (e) => {
                k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                        existing: e
                    });
            }),
            eS.on(I.aB.NativeScreenSharePickerCancel, (e) => {
                k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                        existing: e
                    });
            }),
            eS.on(I.aB.NativeScreenSharePickerError, (e) => {
                k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                        error: e
                    });
            }),
            eS.on(I.aB.AudioDeviceModuleError, (e, t, n) => {
                K.default.track(el.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                    audio_device_module: e,
                    code: t,
                    device_name: n
                });
            }),
            tr.reset(),
            (0, es.q)().then((e) => {
                null != e && (eJ = e.gpu_brand);
            }),
            !(function () {
                var e;
                let t = m.K.get('audio');
                null != t && (m.K.set(ep, { [e_.Yn.DEFAULT]: t }), m.K.remove('audio')),
                    (eg = null !== (e = m.K.get(ep)) && void 0 !== e ? e : {}),
                    E().each(eg, (e) => {
                        if ((E().defaultsDeep(e, eT()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, J.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)), !e.qosMigrated && ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                            var t;
                            (e.vadThrehsoldMigrated = !0), (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60);
                        }
                        (0, Q.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : 1 !== e.ncUseKrispSettingVersion && ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), 1 !== e.hardwareEnabledVersion && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = 1)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
                    }),
                    (function () {
                        var e, t, n;
                        let r = e3();
                        eS.setAudioInputDevice(r.inputDeviceId), eS.setAudioOutputDevice(r.outputDeviceId), e7(), eS.setInputVolume(r.inputVolume), eS.setOutputVolume(r.outputVolume), eS.setH264Enabled(null === (e = r.hardwareEncoding) || void 0 === e || e || r.openH264), eS.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t), eS.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n), eS.setAecDump(r.aecDumpEnabled), eS.setSidechainCompression(r.sidechainCompression), eS.setSidechainCompressionStrength(r.sidechainCompressionStrength);
                    })();
            })(),
            ((0, Q.isWindows)() || (0, Q.isLinux)() || ((0, Q.isMac)() && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, '>=21.0.0'))) && !__OVERLAY__ && !eZ && !eY ? ((eZ = !0), tI()) : (0, Q.isWeb)() && eS.supports(e_.AN.NOISE_CANCELLATION) ? ((eY = !0), r.emitChange()) : (0, Q.isWeb)() && ti({ noiseCancellation: !1 }),
            t_(),
            (e$ = {
                [e_.AN.VIDEO]: eS.supports(e_.AN.VIDEO),
                [e_.AN.DESKTOP_CAPTURE]: eS.supports(e_.AN.DESKTOP_CAPTURE),
                [e_.AN.HYBRID_VIDEO]: eS.supports(e_.AN.HYBRID_VIDEO)
            }),
            this.waitFor(ee.default, en.Z, er.Z, ei.Z, ea.Z, D.ZP, Y.Z.storage, W.Z, y.Z, O.Z);
    }
    supports(e) {
        return eS.supports(e);
    }
    supportsInApp(e) {
        return e$[e] || eS.supports(e);
    }
    isSupported() {
        return eS.supported();
    }
    isExperimentalEncodersSupported() {
        return eS.supports(e_.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eS.supports(e_.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return eY || !1;
    }
    isNoiseCancellationError() {
        return eW;
    }
    isAutomaticGainControlSupported() {
        return eS.supports(e_.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return eY || !1;
    }
    isAecDumpSupported() {
        return eS.supports(e_.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eS.supports(e_.AN.VIDEO) && eS.supports(e_.AN.SIMULCAST);
    }
    getAecDump() {
        return e3().aecDumpEnabled;
    }
    getMediaEngine() {
        return eS;
    }
    getVideoComponent() {
        return eS.supports(e_.AN.DIRECT_VIDEO) && eS.setUseDirectVideo(!0), eS.Video;
    }
    getCameraComponent() {
        return eS.supports(e_.AN.DIRECT_VIDEO) && eS.setUseDirectVideo(!0), eS.Camera;
    }
    isEnabled() {
        return eN;
    }
    isMute() {
        return this.isSelfMute() || eL;
    }
    isDeaf() {
        return this.isSelfDeaf() || eM;
    }
    hasContext(e) {
        return null != eg[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return e === e_.Yn.DEFAULT && eD;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return !this.isEnabled() || e3(e).mute || !Y.Z.didHavePermission(ec.Eu.AUDIO) || this.isSelfDeaf(e) || (e === e_.Yn.DEFAULT && eb);
    }
    shouldSkipMuteUnmuteSound() {
        return ew;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        ew = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && en.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return e0;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return !this.isSupported() || e3(e).deaf;
    }
    isVideoEnabled() {
        return eP && ek;
    }
    isVideoAvailable() {
        return Object.values(ey).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.STREAM;
        return eR === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.STREAM;
        return eR === t && null != a && (null === (e = a.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT;
        return e !== ee.default.getId() && (e3(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eS.supports(e_.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT;
        return null !== (t = e3(n).disabledLocalVideos[e]) && void 0 !== t && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT;
        return null !== (t = e3(n).videoToggleStateMap[e]) && void 0 !== t ? t : el.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT;
        return t === e_.Yn.DEFAULT && eq.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return e === e_.Yn.DEFAULT && eq.size > 0;
    }
    isMediaFilterSettingLoading() {
        return eK;
    }
    isNativeAudioPermissionReady() {
        return ez;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eR;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT,
            n = e3(t).localPans[e];
        return null != n ? n : eI;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT,
            n = t === e_.Yn.STREAM ? e_.Yh : e_.Qx,
            r = e3(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return e3().inputVolume;
    }
    getOutputVolume() {
        return e3().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return e3(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return e3(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(eg, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === el.pM4.PUSH_TO_TALK && eA.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tl(ev, e3().inputDeviceId);
    }
    getOutputDeviceId() {
        return tl(eC, e3().outputDeviceId);
    }
    getVideoDeviceId() {
        return tl(ey, e3().videoDeviceId);
    }
    getInputDevices() {
        return ev;
    }
    getOutputDevices() {
        return eC;
    }
    getVideoDevices() {
        return ey;
    }
    getEchoCancellation() {
        let e = e3();
        return en.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e3().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return e3().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return e3().h265Enabled;
    }
    getLoopback() {
        return eS.getLoopback();
    }
    getNoiseSuppression() {
        let e = e3();
        return en.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = e3();
        return en.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return e3().noiseCancellation;
    }
    getExperimentalEncoders() {
        return e3().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null === (e = e3().hardwareEncoding) || void 0 === e || e;
    }
    getEnableSilenceWarning() {
        return e3().silenceWarning;
    }
    getDebugLogging() {
        return eS.getDebugLogging();
    }
    getQoS() {
        return e3().qos;
    }
    getAttenuation() {
        return e3().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return e3().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return e3().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return e3().automaticAudioSubsystem ? e_.iA.AUTOMATIC : eS.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eS.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return e3(e);
    }
    getState() {
        return {
            settingsByContext: eg,
            inputDevices: ev,
            outputDevices: eC,
            appSupported: e$,
            krispModuleLoaded: eY,
            goLiveSource: a,
            goLiveContext: eR
        };
    }
    getInputDetected() {
        return eB;
    }
    getNoInputDetectedNotice() {
        return eV;
    }
    getPacketDelay() {
        return Q.isPlatformEmbedded || this.getMode() !== el.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eS.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eO;
    }
    getVideoHook() {
        return e3().videoHook;
    }
    supportsVideoHook() {
        return eS.supports(e_.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = e3().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eS.supports(e_.AN.EXPERIMENTAL_SOUNDSHARE) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, eu.I9);
    }
    getOpenH264() {
        return e3().openH264;
    }
    getEverSpeakingWhileMuted() {
        return ex;
    }
    supportsScreenSoundshare() {
        return ((0, Q.isMac)() && eS.supports(e_.AN.SOUNDSHARE) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, eu.yG) && tt()) || ((0, Q.isWindows)() && eS.supports(e_.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare());
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT,
            t = this.supports(e_.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === e_.Yn.DEFAULT ? e_.Tr.VIDEO : e_.Tr.SCREEN,
                          quality: 100
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === e_.Yn.DEFAULT || tn()) &&
                t.push({
                    rid: '50',
                    type: e === e_.Yn.DEFAULT ? e_.Tr.VIDEO : e_.Tr.SCREEN,
                    quality: 50
                }),
            t
        );
    }
    getSupportedSecureFramesProtocolVersion(e) {
        var t;
        let n = eS.getSupportedSecureFramesProtocolVersion(),
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
ef(tg, 'displayName', 'MediaEngineStore'),
    (r = new tg(S.Z, {
        VOICE_CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
            if ((r !== n && e7(i, null), null != t || null == n)) {
                eH = !1;
                return;
            }
            if (eH) return;
            eH = !0;
            let a = e3();
            (a.mute || a.deaf) &&
                (ti({
                    deaf: !1,
                    mute: !1
                }),
                eS.eachConnection(e6));
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => (i === t.sessionId ? ((eL = t.mute || t.suppress), (eM = t.deaf), eS.eachConnection(e6), e7(!(null != t.guildId && null != t.channelId && null != ej && ej !== t.channelId) && eP), (ej = t.channelId), !0) : (!__OVERLAY__ && t.userId === ee.default.getId() && null == ea.Z.getChannelId() && e7(!1, null), e)), !1);
        },
        CONNECTION_OPEN: function (e) {
            (i = e.sessionId),
                (eL = !1),
                (eM = !1),
                !(0, Q.isWeb)() &&
                    F.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                        let t = e3();
                        !e.sidechainAvailable && t.sidechainCompression ? (ti({ sidechainCompressionSettingVersion: 0 }), tf(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < 1 && (ti({ sidechainCompressionSettingVersion: 1 }), tf(e.sidechainEnabled));
                    }),
                e3().automaticAudioSubsystem && tT(),
                (0, Q.isWindows)() && e3().audioSubsystemSettingVersion < 1 && (ti({ audioSubsystemSettingVersion: 1 }), !e3().automaticAudioSubsystem && eS.getAudioSubsystem() === e_.iA.STANDARD && tm(e_.iA.AUTOMATIC)),
                tu();
        },
        CONNECTION_CLOSED: function () {
            i = null;
        },
        RTC_CONNECTION_STATE: function (e) {
            switch (e.state) {
                case el.hes.CONNECTING:
                    ta();
                    break;
                case el.hes.RTC_CONNECTING:
                    (eF = !1), (eV = !1);
                    break;
                case el.hes.RTC_CONNECTED:
                    e7();
                    break;
                case el.hes.DISCONNECTED:
                    (function () {
                        if (0 === eq.size) return;
                        let e = e_.Yn.DEFAULT,
                            { disabledLocalVideos: t } = e3(e);
                        eq.forEach((n) => {
                            d()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eS.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            eq.clear(),
                            ti({ disabledLocalVideos: t }, e, !1);
                    })(),
                        t_();
            }
            tr.update();
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
            let { mute: t } = e;
            (eD = t), eS.eachConnection(e6);
        },
        AUDIO_TOGGLE_SELF_MUTE: function (e) {
            let { context: t, skipMuteUnmuteSoundEffect: n } = e,
                { mute: r, deaf: i } = e3(t);
            if (t === e_.Yn.DEFAULT && (Y.Z.requestPermission(ec.Eu.AUDIO), eb)) return !1;
            !(r = !i && !r) && (i = !1),
                n && (ew = !0),
                ti(
                    {
                        mute: r,
                        deaf: i
                    },
                    t
                ),
                eS.eachConnection(e6);
        },
        AUDIO_SET_SELF_MUTE: function (e) {
            let { context: t, mute: n } = e;
            ti({ mute: n }, t), eS.eachConnection(e6);
        },
        AUDIO_TOGGLE_SELF_DEAF: function (e) {
            let { context: t } = e;
            ti({ deaf: !e3(t).deaf }, t), eS.eachConnection(e6);
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
            let { context: t, userId: n } = e;
            if (n === ee.default.getId()) return;
            let { localMutes: r } = e3(t);
            r[n] ? delete r[n] : (r[n] = !0), ti({ localMutes: r }, t), eS.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
            var t, n, r, i, a, s, o;
            let { context: l, userId: u, videoToggleState: c, persist: _, isAutomatic: E } = e;
            d()(!(_ && E), 'These are not allowed to both be true.');
            let f = c === el.ZUi.DISABLED,
                { disabledLocalVideos: h } = e3(l),
                p = null !== (t = h[u]) && void 0 !== t && t,
                I = eq.has(u),
                m = c === el.ZUi.AUTO_ENABLED || c === el.ZUi.MANUAL_ENABLED;
            eh.info('disableVideo='.concat(f, ' currentlyDisabled=').concat(p, ' currentlyAutoDisabled=').concat(I, ', isVideoShown=').concat(m)), d()(!(I && !p), 'If you are auto-disabled, then you are also disabled.');
            let T = f !== p,
                S = l === e_.Yn.DEFAULT,
                g = E && T && S,
                A = _ && T && S;
            eh.info('changed='.concat(T, ' isDefaultContext=').concat(S, ' isUpdateCausedByVideoHealthManager=').concat(g, ' isManualToggleByUser=').concat(A));
            let { videoToggleStateMap: N } = e3(l);
            if ((N[u] === el.ZUi.AUTO_PROBING && c === el.ZUi.AUTO_ENABLED && (0, Z.Z)(u, f ? e_.fC.AUTO_DISABLE : e_.fC.AUTO_ENABLE, m), (N[u] = c), ti({ videoToggleStateMap: N }, l, _), c === el.ZUi.AUTO_PROBING ? null === (n = ea.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (r = ea.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(u, !1), !eQ && (eh.info('isAutoDisableAllowed='.concat(eQ, ' - disabling VideoHealthManager')), null === (a = ea.Z.getRTCConnection()) || void 0 === a || null === (i = a.getVideoHealthManager()) || void 0 === i || i.disable()), g)) {
                if ((!f && !I) || (f && !eQ)) return;
                (0, Z.Z)(u, f ? e_.fC.AUTO_DISABLE : e_.fC.AUTO_ENABLE, m), f ? eq.add(u) : eq.delete(u);
            } else A && (I && !f ? (eh.info('disallowing auto-disable for this session because of manual override by user'), (eQ = !1), null === (o = ea.Z.getRTCConnection()) || void 0 === o || null === (s = o.getVideoHealthManager()) || void 0 === s || s.disable(), (0, Z.Z)(u, e_.fC.MANUAL_REENABLE, m)) : (0, Z.Z)(u, f ? e_.fC.MANUAL_DISABLE : e_.fC.MANUAL_ENABLE, m));
            S && !f && eq.delete(u),
                f ? (h[u] = !0) : delete h[u],
                ti({ disabledLocalVideos: h }, l, _),
                eS.eachConnection((e) => {
                    var t;
                    return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t);
                }, l);
        },
        AUDIO_SET_LOCAL_VOLUME: function (e) {
            let { context: t, userId: n, volume: r } = e;
            if (n === ee.default.getId()) return;
            let i = t === e_.Yn.STREAM ? e_.Yh : e_.Qx,
                { localVolumes: a } = e3(t);
            r === i ? delete a[n] : (a[n] = r), ti({ localVolumes: a }, t), eS.eachConnection((e) => e.setLocalVolume(n, r), t);
        },
        AUDIO_SET_LOCAL_PAN: function (e) {
            let { context: t, userId: n, left: r, right: i } = e,
                { localPans: a } = e3(t);
            (a[n] = {
                left: r,
                right: i
            }),
                ti({ localPans: a }, t),
                eS.eachConnection((e) => e.setLocalPan(n, r, i), t);
        },
        AUDIO_SET_MODE: function (e) {
            let { context: t, mode: n, options: r } = e;
            ti(
                {
                    mode: n,
                    modeOptions: r
                },
                t
            ),
                eS.eachConnection(e4),
                tr.update();
        },
        AUDIO_SET_INPUT_VOLUME: function (e) {
            let { volume: t } = e;
            ti({ inputVolume: e5(t) }), eS.setInputVolume(t);
        },
        AUDIO_SET_OUTPUT_VOLUME: function (e) {
            let { volume: t } = e;
            ti({ outputVolume: t }), eS.setOutputVolume(t);
        },
        AUDIO_SET_INPUT_DEVICE: function (e) {
            let { id: t } = e;
            ti({ inputDeviceId: (t = tl(ev, t)) }), eS.setAudioInputDevice(t);
        },
        AUDIO_SET_OUTPUT_DEVICE: function (e) {
            let { id: t } = e;
            ti({ outputDeviceId: (t = tl(eC, t)) }), eS.setAudioOutputDevice(t);
        },
        AUDIO_SET_ECHO_CANCELLATION: function (e) {
            let t = ti({ echoCancellation: e.enabled });
            eS.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), th(), tE(e.location);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
            tf(e.enabled);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
            let t = ti({ sidechainCompressionStrength: e.strength });
            eS.setSidechainCompressionStrength(t.sidechainCompressionStrength);
        },
        AUDIO_SET_LOOPBACK: function (e) {
            let { enabled: t } = e;
            return (eX = t), th();
        },
        AUDIO_SET_NOISE_SUPPRESSION: function (e) {
            let t = ti({ noiseSuppression: e.enabled });
            eS.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), th(), tE(e.location);
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
            let t = ti({ automaticGainControl: e.enabled });
            eS.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), th(), tE(e.location);
        },
        AUDIO_SET_NOISE_CANCELLATION: function (e) {
            let t = ti({ noiseCancellation: e.enabled });
            eS.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), th(), tE(e.location);
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
            ti({ silenceWarning: e.enabled }), tr.update();
        },
        AUDIO_SET_DEBUG_LOGGING: function (e) {
            eS.setDebugLogging(e.enabled);
        },
        MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
            ti({ videoHook: e.enabled });
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
            ti({ experimentalSoundshare2: e.enabled });
        },
        AUDIO_SET_ATTENUATION: function (e) {
            let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
                i = ti({
                    attenuation: t,
                    attenuateWhileSpeakingSelf: n,
                    attenuateWhileSpeakingOthers: r
                });
            eS.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
        },
        AUDIO_SET_QOS: function (e) {
            let { enabled: t } = e;
            ti({ qos: t }), eS.eachConnection((e) => e.setQoS(t));
        },
        MEDIA_ENGINE_DEVICES: function (e) {
            let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
            !(function (e) {
                let t = ev;
                if (((ev = to(e, eE.Z.Messages.NO_INPUT_DEVICES)), !E().isEqual(ev, t))) {
                    let e = e3(),
                        t = tl(ev, e.inputDeviceId);
                    eS.setAudioInputDevice(t);
                }
            })(t),
                !(function (e) {
                    let t = eC;
                    if (((eC = to(e, eE.Z.Messages.NO_OUTPUT_DEVICES)), !E().isEqual(eC, t))) {
                        let e = e3(),
                            t = tl(eC, e.outputDeviceId);
                        eS.setAudioOutputDevice(t);
                    }
                })(n),
                !(function (e) {
                    ek = e.length > 0;
                    let t = ey;
                    if (((ey = to(e, eE.Z.Messages.NO_VIDEO_DEVICES)), eP && !E().isEqual(ey, t))) {
                        var n;
                        let e = void 0 !== ey[eU],
                            r = eU === e_.w5 && (null === (n = t[e_.w5]) || void 0 === n ? void 0 : n.disabled);
                        e7(e || r);
                    }
                })(r);
        },
        AUDIO_VOLUME_CHANGE: function (e) {
            let { inputVolume: t, outputVolume: n } = e;
            ti({
                inputVolume: e5(t),
                outputVolume: n
            });
        },
        AUDIO_RESET: function () {
            m.K.remove(ep), location.reload();
        },
        AUDIO_INPUT_DETECTED: function (e) {
            let { inputDetected: t } = e;
            (eB = t), !eF && eB && ((eF = !0), tr.update());
        },
        AUDIO_SET_SUBSYSTEM: function (e) {
            tm(e.subsystem);
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
            (eN = e.enabled),
                e.unmute &&
                    ti({
                        mute: !1,
                        deaf: !1
                    }),
                eS.eachConnection(e6);
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
            let { enabled: t } = e;
            Y.Z.requestPermission(ec.Eu.CAMERA), e7(t);
        },
        MEDIA_ENGINE_PERMISSION: function (e) {
            let { kind: t, granted: n } = e;
            if (!n)
                switch (t) {
                    case 'audio':
                        (eN = !1), eS.eachConnection(e6);
                        break;
                    case 'video':
                        e7(!1);
                }
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
            var t, n, r, i;
            let { settings: s } = e;
            if ((null == s ? void 0 : s.desktopSettings) != null) {
                let e = null,
                    r = null,
                    { sourceId: i, sound: o } = s.desktopSettings,
                    l = null !== (t = s.context) && void 0 !== t ? t : e_.Yn.DEFAULT,
                    u =
                        null !== (n = s.qualityOptions) && void 0 !== n
                            ? n
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              },
                    c = !1 === o ? null : z.Z.getPidFromDesktopSource(i);
                Q.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = tc(c)), null != e && td(e, r)),
                    !(function (e) {
                        if (e !== eR) null != a && eS.setGoLiveSource(null, eR), (eR = e);
                    })(l),
                    e7(l === e_.Yn.STREAM && eP, {
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
                let e = null !== (r = s.context) && void 0 !== r ? r : e_.Yn.DEFAULT,
                    { videoDeviceGuid: t, audioDeviceGuid: n } = s.cameraSettings,
                    a = e === e_.Yn.STREAM && eP,
                    o =
                        null !== (i = s.qualityOptions) && void 0 !== i
                            ? i
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              };
                e7(a, {
                    cameraSource: {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    },
                    quality: {
                        resolution: o.resolution,
                        frameRate: o.frameRate
                    }
                });
            } else e7(eP, null);
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
            let { id: t } = e;
            ti({ videoDeviceId: (t = tl(ey, t)) }), e7();
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function (e) {
            let t = ti({ experimentalEncoders: e.enabled });
            eS.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
            return eO !== e.required && ((eO = e.required), !e.required && eS.interact(), !0);
        },
        USER_SETTINGS_MODAL_INIT: tS,
        USER_SETTINGS_MODAL_SET_SECTION: tS,
        CERTIFIED_DEVICES_SET: function () {
            return eS.eachConnection(e9), !1;
        },
        RPC_APP_CONNECTED: function (e) {
            let { application: t } = e;
            eA.add(t.id);
        },
        RPC_APP_DISCONNECTED: function (e) {
            let { application: t } = e;
            eA.delete(t.id);
        },
        OVERLAY_INITIALIZE: function (e) {
            let { mediaEngineState: t } = e;
            (eg = t.settingsByContext), (ev = t.inputDevices), (eC = t.outputDevices), (e$ = t.appSupported), (eY = t.krispModuleLoaded), (eR = t.goLiveContext);
        },
        MEDIA_ENGINE_SET_OPEN_H264: function (e) {
            let { enabled: t } = e,
                n = ti({ openH264: t });
            eS.setH264Enabled(n.hardwareEncoding || n.openH264),
                eS.eachConnection((e) => {
                    var t;
                    return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
                });
        },
        MEDIA_ENGINE_SET_HARDWARE_ENCODING: function (e) {
            var t, n;
            let { enabled: r } = e,
                i = ti({ hardwareEncoding: r });
            eS.eachConnection((e) => {
                var t;
                return e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t);
            }),
                eS.setH264Enabled(i.hardwareEncoding || i.openH264),
                eS.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t),
                eS.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n);
        },
        APP_STATE_UPDATE: function (e) {
            let { state: t } = e,
                n = L.Z.isEnabled();
            if (t === el.$7l.BACKGROUND && eP && !n) (eG = !0), e7(!1);
            else {
                if (t !== el.$7l.ACTIVE || !eG) return !1;
                (eG = !1), e7(!0);
            }
            return !0;
        },
        SET_CHANNEL_BITRATE: function (e) {
            eS.eachConnection((t) => t.setBitRate(e.bitrate));
        },
        SET_VAD_PERMISSION: function (e) {
            let { hasPermission: t } = e,
                n = !t;
            if (n === eb) return !1;
            (eb = n), eS.eachConnection(e6);
        },
        SET_NATIVE_PERMISSION: function (e) {
            let { state: t, permissionType: n } = e,
                r = t === ec.PQ.ACCEPTED;
            switch (n) {
                case ec.Eu.AUDIO:
                    (ez = !0), eS.eachConnection(e6);
                    break;
                case ec.Eu.CAMERA:
                    !r && eP && e7(!1);
                    break;
                default:
                    return !1;
            }
        },
        SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
            eS.eachConnection((t) => t.applyVideoQualityMode(e.mode));
        },
        MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
            let { enabled: t } = e,
                n = ti({ aecDumpEnabled: t });
            eS.setAecDump(n.aecDumpEnabled);
        },
        CHANNEL_DELETE: function () {
            if ((!eP && null == a) || null != ea.Z.getRTCConnectionId()) return !1;
            e7(!1, null);
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
            return !!eW && ((eW = !1), !0);
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
            let { settings: t } = e;
            eS.applyMediaFilterSettings(t).finally(() => {
                (eK = !1), r.emitChange();
            });
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
            eK = !0;
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
            eK = !1;
        },
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            let {
                settings: { type: t },
                local: n,
                wasSaved: r
            } = e;
            if (t !== ed.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
            tu(!0);
        },
        CLIPS_INIT: function (e) {
            let { sourceId: t, applicationName: n, quality: i } = e,
                { enableDecoupledGameClipping: a } = x.Z.getCurrentConfig({ location: 'handleClipsInit' }, { autoTrackExposure: !0 }),
                o = O.Z.getSettings().decoupledClipsEnabled;
            if (!a || !o || null == g.Z) return;
            let l = null,
                u = null,
                c = z.Z.getPidFromDesktopSource(t);
            ({ soundshareId: l, soundshareSession: u } = tc(c));
            let d = {
                desktopSource: {
                    id: t,
                    sourcePid: c,
                    soundshareId: l,
                    soundshareSession: u
                },
                quality: i
            };
            null != s && s.desktopSource.id !== d.desktopSource.id && (eS.setClipsSource(null), (0, Q.isWindows)() && null != s.desktopSource.soundshareId && A.pn(s.desktopSource.soundshareId)), null != l && td(l, u), (s = d);
            let { hdrCaptureMode: _ } = G.Z.getCurrentConfig({ location: 'f627ab_12' }, { autoTrackExposure: !1 }),
                E = e3().videoHook;
            eS.setClipsSource({
                desktopDescription: {
                    id: s.desktopSource.id,
                    soundshareId: s.desktopSource.soundshareId,
                    useVideoHook: E,
                    useGraphicsCapture: te(),
                    useLoopback: r.getExperimentalSoundshare(),
                    useQuartzCapturer: !0,
                    allowScreenCaptureKit: tt(),
                    videoHookStaleFrameTimeoutMs: 500,
                    graphicsCaptureStaleFrameTimeoutMs: em,
                    hdrCaptureMode: _
                },
                quality: i,
                applicationName: n
            });
        },
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            !1 === t.decoupledClipsEnabled && ((s = null), eS.setClipsSource(null));
        },
        MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
            e0 = e.enabled;
        }
    })),
    (t.Z = r);
