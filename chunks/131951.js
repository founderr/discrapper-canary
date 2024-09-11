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
    x = n(498600),
    G = n(998594),
    k = n(529558),
    B = n(111672),
    F = n(874785),
    V = n(441167),
    H = n(338336),
    Z = n(751571),
    Y = n(725380),
    j = n(581883),
    W = n(626135),
    K = n(12647),
    z = n(70956),
    q = n(358085),
    Q = n(960048),
    X = n(998502),
    $ = n(13140),
    J = n(314897),
    ee = n(967368),
    et = n(463395),
    en = n(592125),
    er = n(858340),
    ei = n(19780),
    ea = n(704806),
    es = n(631768),
    eo = n(981631),
    el = n(70722),
    eu = n(761274),
    ec = n(526761),
    ed = n(65154),
    e_ = n(689938);
function eE(e, t, n) {
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
let ef = new v.Z('MediaEngineStore');
((u = o || (o = {}))[(u.DETACHED = 0)] = 'DETACHED'), (u[(u.WAITING = 1)] = 'WAITING'), (u[(u.ATTACHED = 2)] = 'ATTACHED'), (u[(u.STARTED = 3)] = 'STARTED'), (u[(u.PLAYING = 4)] = 'PLAYING'), (u[(u.SILENCE = 5)] = 'SILENCE');
let eh = 'MediaEngineStore',
    ep = {
        left: 1,
        right: 1
    },
    eI = 5 * z.Z.Millis.SECOND;
function em() {
    return {
        mode: eo.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: q.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: ed.Qx,
        outputVolume: ed.Qx,
        inputDeviceId: ed.w5,
        outputDeviceId: ed.w5,
        videoDeviceId: ed.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eT.supports(ed.AN.VIDEO_HOOK),
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
let eT = (0, I.Mt)((0, I.jj)()),
    eS = {},
    eg = new Set([ed.Yn.DEFAULT]),
    eA = eT.supports(ed.AN.AUTO_ENABLE),
    eN = !1,
    eO = ed.Yn.STREAM,
    eR = { [ed.w5]: ta(e_.Z.Messages.NO_INPUT_DEVICES) },
    ev = { [ed.w5]: ta(e_.Z.Messages.NO_OUTPUT_DEVICES) },
    eC = { [ed.w5]: ta(e_.Z.Messages.NO_VIDEO_DEVICES) },
    ey = !1,
    eL = !1,
    eD = !1,
    eb = !1,
    eM = !1,
    eP = ed.Av,
    eU = !1,
    ew = !1,
    ex = !1,
    eG = !1,
    ek = null,
    eB = !1,
    eF = !1,
    eV = !1,
    eH = !1,
    eZ = !1,
    eY = null,
    ej = !1,
    eW = !1,
    eK = !1;
Z.Z.hasPermission(eu.Eu.AUDIO, { showAuthorizationError: !1 }), Z.Z.hasPermission(eu.Eu.CAMERA, { showAuthorizationError: !1 });
let ez = new Set(),
    eq = !1,
    eQ = !1,
    eX = {},
    e$ = null,
    eJ = !0,
    e0 = {},
    e1 = 5 * z.Z.Millis.SECOND;
function e2() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ed.Yn.DEFAULT,
        t = eS[e];
    return null == t && ((t = em()), (eS[e] = t)), t;
}
function e3(e) {
    let t = e2(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp:
            t.modeOptions.vadUseKrisp &&
            (function () {
                return eZ || !1;
            })(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function e4(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.Qx;
    return E().clamp(e, 0, t);
}
function e5(e) {
    let t = e2(e.context),
        n = !eA || t.mute || t.deaf;
    e.context === ed.Yn.DEFAULT ? (n = n || ey || eL || eD || !Z.Z.didHavePermission(eu.Eu.AUDIO)) : e.context === ed.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === ed.Yn.DEFAULT && N.Z.updateNativeMute();
}
function e6() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        o = a;
    if (((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, q.isWindows)() && A.pn(o.desktopSource.soundshareId), eT.setGoLiveSource(null, eO)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == s ? void 0 : null === (t = s.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eT.setGoLiveSource(null, eO), (eM || i) && ((eP = (eM = i) ? to(eC, e2().videoDeviceId) : ed.Av), eT.setVideoInputDevice(eP)), (a = s), null != s)) {
        let e = {
            resolution: s.quality.resolution,
            frameRate: s.quality.frameRate
        };
        if (null != s.desktopSource) {
            let { hdrCaptureMode: t } = x.Z.getCurrentConfig({ location: 'f627ab_2' }, { autoTrackExposure: !1 }),
                n = e2().videoHook;
            eT.setGoLiveSource(
                {
                    desktopDescription: {
                        id: s.desktopSource.id,
                        soundshareId: s.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: e9(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: te(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: eI,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eO
            );
        }
        null != s.cameraSource &&
            eT.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: s.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: s.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eO
            );
    }
}
function e7(e, t, n, r) {
    var i;
    let a = null !== (i = null == e ? void 0 : e.soundshareSession) && void 0 !== i ? i : '';
    null == e0[a] && (e0[a] = new Set());
    let s = null != t && !e0[a].has(t);
    s && e0[a].add(t),
        (null == t || s) &&
            W.default.track(eo.rMx.SOUNDSHARE_FAILED, {
                soundshare_failure_code: t,
                soundshare_failure_reason: n,
                soundshare_failure_will_retry: r,
                ...(0, b.Z)(e)
            });
}
function e8(e) {
    let t = e2(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(et.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(et.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(et.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, q.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function e9() {
    return (0, q.isWindows)() && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, el.nz);
}
function te() {
    return (0, q.isMac)() && eT.supports(ed.AN.SCREEN_CAPTURE_KIT) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, el.C7);
}
function tt() {
    var e;
    let t = (null === (e = en.Z.getChannel(eY)) || void 0 === e ? void 0 : e.type) === eo.d4z.GUILD_STAGE_VOICE,
        n = r.getHardwareEncoding();
    return !t && n && w.Z.supportsSimulcast();
}
let tn = new (class {
    start() {
        !this.started && ((this.started = !0), eT.on(I.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eT.removeListener(I.aB.Silence, this.handleSilence),
            S.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = e2();
        !eB && ei.Z.getState() === eo.hes.RTC_CONNECTED && e.mode === eo.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eE(this, 'stateChangeTimeout', void 0),
            eE(this, 'noVoiceTimeout', 5000),
            eE(this, 'voiceTimeout', 1500),
            eE(this, 'started', !1),
            eE(this, 'handleSilence', (e) => {
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
                                    e && (eF = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tr(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = e2(t);
    return Object.assign(r, e), !__OVERLAY__ && n && m.K.set(eh, eS), r;
}
function ti() {
    !eA &&
        eT.enable().then(() =>
            S.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function ta(e) {
    return {
        id: ed.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function ts(e, t) {
    if (0 === e.length) {
        let e = ta(t);
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
function to(e, t) {
    var n;
    let r = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
    return null != r ? r.id : t;
}
function tl() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null !== (e = j.Z.settings.audioContextSettings) && void 0 !== e
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === ec.u0.USER ? ed.Yn.DEFAULT : ed.Yn.STREAM,
            a = i === ed.Yn.STREAM ? ed.Yh : ed.Qx,
            s = null !== (t = r[e]) && void 0 !== t ? t : {},
            { localMutes: o, localVolumes: l } = e2(i);
        for (let [e, t] of Object.entries(s))
            null == (0, Y.Ky)(i, e) &&
                (t.muted ? (o[e] = !0) : delete o[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eT.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(o), ...Object.keys(l)]))
                null == s[e] &&
                    (delete o[e],
                    delete l[e],
                    eT.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        tr(
            {
                localMutes: o,
                localVolumes: l
            },
            i
        );
    }
}
function tu(e) {
    if (null == r)
        return (
            ef.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : K.Z.getAudioPid(e),
            n = '';
        return (
            null != t && (n = K.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n
            }
        );
    }
}
function tc(e, t) {
    (0, q.isWindows)() &&
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
function td() {
    let e = ed.Yn.DEFAULT,
        { videoToggleStateMap: t } = e2(e);
    for (let [e, n] of Object.entries(t)) n === eo.ZUi.AUTO_PROBING && delete t[e];
    tr({ videoToggleStateMap: t }, e, !1);
}
function t_(e) {
    let t = e2();
    W.default.track(eo.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function tE(e) {
    let t = tr({ sidechainCompression: e });
    eT.setSidechainCompression(t.sidechainCompression);
}
function tf() {
    let e = e2(),
        t = e.inputDeviceId,
        n = et.Z.hasEchoCancellation(t) || e.echoCancellation,
        r = et.Z.hasNoiseSuppression(t) || e.noiseSuppression,
        i = et.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
        a = e.noiseCancellation;
    eT.setLoopback(eQ, {
        echoCancellation: n,
        noiseSuppression: r,
        automaticGainControl: i,
        noiseCancellation: a
    });
}
function th() {
    return eZ || !1;
}
async function tp() {
    try {
        await X.ZP.ensureModule('discord_krisp'), X.ZP.requireModule('discord_krisp'), (eZ = !0), r.emitChange();
    } catch (t) {
        ef.warn('Failed to load Krisp module: '.concat(t.message)), Q.Z.captureException(t);
        let e = ed.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? ed.H3.INITIALIZED : n;
        }
        W.default.track(eo.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tr({ noiseCancellation: !1 });
    } finally {
        eH = !1;
    }
}
function tI(e) {
    let { section: t } = e;
    return t === eo.oAB.VOICE && ti(), !1;
}
class tm extends (l = p.ZP.Store) {
    initialize() {
        eT.on(I.aB.Connection, (e) => {
            var t, n;
            e3(e), e5(e), e8(e);
            let i = e2();
            e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = i.openH264) || void 0 === n || n);
            let s = ei.Z.getGuildId(),
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
            o && e.setExperimentFlag(ed.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(ed.V8.PTT_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(ed.V8.SKIP_ENCODE, !0);
            let { resetOnErrors: c, fallbackOnErrors: d, fallbackOnConsecutiveErrors: _ } = F.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 });
            c && e.setExperimentFlag(ed.V8.RESET_DECODER_ON_ERRORS, !0), d && e.setExperimentFlag(ed.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), _ && e.setExperimentFlag(ed.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            if (e.context === ed.Yn.STREAM && tt()) {
                let t = w.Z.goliveSimulcastFlag();
                void 0 !== t && e.setExperimentFlag(t, !0);
            }
            if (((0, q.isWindows)() ? ((null == e$ ? void 0 : e$.startsWith('NVIDIA')) ? e.setExperimentFlag(ed.V8.SIGNAL_AV1, !0) : (null == e$ ? void 0 : e$.startsWith('AMD')) && M.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(ed.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(ed.V8.SIGNAL_AV1_DECODE, !0)) : ((0, q.isMac)() || (0, q.isLinux)()) && e.setExperimentFlag(ed.V8.SIGNAL_AV1_DECODE, !0), (0, q.isWindows)() && e.setExperimentFlag(ed.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eT.setHasFullbandPerformance((0, C.b)()), e.setRemoteAudioHistory(0), (0, R.Z)(r))) {
                let t = O.Z.getSettings();
                e.setExperimentFlag(ed.V8.STREAMER_CLIP, t.clipsEnabled);
                let { enableViewerClipping: n } = V.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
                e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ed.ux);
            }
            for (let t of ((i = e2(e.context)), e.setPostponeDecodeLevel(100), Object.keys(i.localMutes))) t !== J.default.getId() && e.setLocalMute(t, i.localMutes[t]);
            for (let t of Object.keys(i.localVolumes)) t !== J.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
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
                e.context === ed.Yn.DEFAULT &&
                    ((ew = !1),
                    e.on(I.Sh.SpeakingWhileMuted, () => {
                        (ew = !0), r.emitChange();
                    })),
                e.on(I.Sh.DesktopSourceEnd, () => {
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                        settings: { context: e.context }
                    });
                }),
                e.on(I.Sh.SoundshareAttached, () => {
                    (null == a ? void 0 : a.desktopSource) != null && W.default.track(eo.rMx.SOUNDSHARE_ATTACHED, (0, b.Z)(null == a ? void 0 : a.desktopSource));
                }),
                e.on(I.Sh.SoundshareFailed, (e) => {
                    let { failureCode: t, failureReason: n, willRetry: r } = e;
                    e7(null == a ? void 0 : a.desktopSource, t, n, r);
                }),
                e.on(I.Sh.SoundshareSpeaking, () => {
                    (null == a ? void 0 : a.desktopSource) != null && (W.default.track(eo.rMx.SOUNDSHARE_TRANSMITTING, (0, b.Z)(null == a ? void 0 : a.desktopSource)), null != er.Z.getHookError(eo.K3D.SOUND) && S.Z.wait(() => S.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
                });
            let E = new T.V7();
            e.on(I.Sh.SoundshareTrace, (e) => {
                switch (e.type) {
                    case 'soundshare_attach_requested':
                        E.start(e1, () => {
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
                            (e7(null == a ? void 0 : a.desktopSource, n, t, r),
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
                        W.default.track(eo.rMx.VIDEOHOOK_INITIALIZED, {
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
                    ef.warn('noisecancellererror event: '.concat(e)),
                        (ej = !0),
                        W.default.track(eo.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                    ef.warn('voiceactivitydetectorerror event: '.concat(e)),
                        W.default.track(eo.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.Z.dispatch({
                            type: 'AUDIO_SET_MODE',
                            context: ed.Yn.DEFAULT,
                            mode: eo.pM4.VOICE_ACTIVITY,
                            options: {
                                ...e2(ed.Yn.DEFAULT).modeOptions,
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
                e.setBitRate(ee.Z.bitrate),
                e.applyVideoQualityMode(es.Z.mode);
        }),
            eT.on(I.aB.DeviceChange, (e, t, n) => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_DEVICES',
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n
                });
            }),
            eT.on(I.aB.VolumeChange, (e, t) => {
                S.Z.dispatch({
                    type: 'AUDIO_VOLUME_CHANGE',
                    inputVolume: e,
                    outputVolume: t
                });
            }),
            eT.on(I.aB.DesktopSourceEnd, () => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: null
                });
            }),
            eT.on(I.aB.AudioPermission, (e) => {
                (eK = !0),
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_PERMISSION',
                        kind: 'audio',
                        granted: e
                    });
            }),
            eT.on(I.aB.VideoPermission, (e) => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'video',
                    granted: e
                });
            }),
            eT.on(I.aB.WatchdogTimeout, async () => {
                let e;
                try {
                    await K.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
                } catch (t) {
                    'number' == typeof t.status && (e = t.status);
                }
                ef.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), W.default.track(eo.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
            }),
            eT.on(I.aB.VideoInputInitialized, (e) => {
                W.default.track(eo.rMx.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * z.Z.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy
                });
            }),
            eT.on(I.aB.ClipsRecordingRestartNeeded, () => {
                S.Z.dispatch({ type: 'CLIPS_RESTART' });
            }),
            eT.on(I.aB.ClipsInitFailure, (e, t) => {
                S.Z.wait(() => {
                    S.Z.dispatch({
                        type: 'CLIPS_INIT_FAILURE',
                        errMsg: e,
                        applicationName: t
                    });
                });
            }),
            eT.on(I.aB.ClipsRecordingEnded, (e, t) => {
                var n, r;
                (null == s ? void 0 : null === (n = s.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == a ? void 0 : null === (r = a.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t && A.pn(t), (s = null));
            }),
            eT.on(I.aB.NativeScreenSharePickerUpdate, (e) => {
                G.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                        existing: e
                    });
            }),
            eT.on(I.aB.NativeScreenSharePickerCancel, (e) => {
                G.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                        existing: e
                    });
            }),
            eT.on(I.aB.NativeScreenSharePickerError, (e) => {
                G.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                        error: e
                    });
            }),
            eT.on(I.aB.AudioDeviceModuleError, (e, t, n) => {
                W.default.track(eo.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                    audio_device_module: e,
                    code: t,
                    device_name: n
                });
            }),
            tn.reset(),
            (0, ea.q)().then((e) => {
                null != e && (e$ = e.gpu_brand);
            }),
            !(function () {
                var e;
                let t = m.K.get('audio');
                null != t && (m.K.set(eh, { [ed.Yn.DEFAULT]: t }), m.K.remove('audio')),
                    (eS = null !== (e = m.K.get(eh)) && void 0 !== e ? e : {}),
                    E().each(eS, (e) => {
                        if ((E().defaultsDeep(e, em()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, $.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)), !e.qosMigrated && ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                            var t;
                            (e.vadThrehsoldMigrated = !0), (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60);
                        }
                        (0, q.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : 1 !== e.ncUseKrispSettingVersion && ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), 1 !== e.hardwareEnabledVersion && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = 1)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
                    }),
                    (function () {
                        var e, t, n;
                        let r = e2();
                        eT.setAudioInputDevice(r.inputDeviceId), eT.setAudioOutputDevice(r.outputDeviceId), e6(), eT.setInputVolume(r.inputVolume), eT.setOutputVolume(r.outputVolume), eT.setH264Enabled(null === (e = r.hardwareEncoding) || void 0 === e || e || r.openH264), eT.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t), eT.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n), eT.setAecDump(r.aecDumpEnabled), eT.setSidechainCompression(r.sidechainCompression), eT.setSidechainCompressionStrength(r.sidechainCompressionStrength);
                    })();
            })(),
            ((0, q.isWindows)() || (0, q.isLinux)() || ((0, q.isMac)() && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, '>=21.0.0'))) && !__OVERLAY__ && !eH && !eZ ? ((eH = !0), tp()) : (0, q.isWeb)() && eT.supports(ed.AN.NOISE_CANCELLATION) ? ((eZ = !0), r.emitChange()) : (0, q.isWeb)() && tr({ noiseCancellation: !1 }),
            td(),
            (eX = {
                [ed.AN.VIDEO]: eT.supports(ed.AN.VIDEO),
                [ed.AN.DESKTOP_CAPTURE]: eT.supports(ed.AN.DESKTOP_CAPTURE),
                [ed.AN.HYBRID_VIDEO]: eT.supports(ed.AN.HYBRID_VIDEO)
            }),
            this.waitFor(J.default, et.Z, en.Z, er.Z, ei.Z, D.ZP, Z.Z.storage, j.Z, y.Z, O.Z);
    }
    supports(e) {
        return eT.supports(e);
    }
    supportsInApp(e) {
        return eX[e] || eT.supports(e);
    }
    isSupported() {
        return eT.supported();
    }
    isExperimentalEncodersSupported() {
        return eT.supports(ed.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eT.supports(ed.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return eZ || !1;
    }
    isNoiseCancellationError() {
        return ej;
    }
    isAutomaticGainControlSupported() {
        return eT.supports(ed.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return eZ || !1;
    }
    isAecDumpSupported() {
        return eT.supports(ed.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eT.supports(ed.AN.VIDEO) && eT.supports(ed.AN.SIMULCAST);
    }
    getAecDump() {
        return e2().aecDumpEnabled;
    }
    getMediaEngine() {
        return eT;
    }
    getVideoComponent() {
        return eT.supports(ed.AN.DIRECT_VIDEO) && eT.setUseDirectVideo(!0), eT.Video;
    }
    getCameraComponent() {
        return eT.supports(ed.AN.DIRECT_VIDEO) && eT.setUseDirectVideo(!0), eT.Camera;
    }
    isEnabled() {
        return eA;
    }
    isMute() {
        return this.isSelfMute() || ey;
    }
    isDeaf() {
        return this.isSelfDeaf() || eb;
    }
    hasContext(e) {
        return null != eS[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ed.Yn.DEFAULT;
        return e === ed.Yn.DEFAULT && eL;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ed.Yn.DEFAULT;
        return !this.isEnabled() || e2(e).mute || !Z.Z.didHavePermission(eu.Eu.AUDIO) || this.isSelfDeaf(e) || (e === ed.Yn.DEFAULT && eD);
    }
    shouldSkipMuteUnmuteSound() {
        return eU;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        eU = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ed.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && et.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return eJ;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ed.Yn.DEFAULT;
        return !this.isSupported() || e2(e).deaf;
    }
    isVideoEnabled() {
        return eM && eG;
    }
    isVideoAvailable() {
        return Object.values(eC).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ed.Yn.STREAM;
        return eO === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ed.Yn.STREAM;
        return eO === t && null != a && (null === (e = a.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.Yn.DEFAULT;
        return e !== J.default.getId() && (e2(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eT.supports(ed.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.Yn.DEFAULT;
        return null !== (t = e2(n).disabledLocalVideos[e]) && void 0 !== t && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.Yn.DEFAULT;
        return null !== (t = e2(n).videoToggleStateMap[e]) && void 0 !== t ? t : eo.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.Yn.DEFAULT;
        return t === ed.Yn.DEFAULT && ez.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ed.Yn.DEFAULT;
        return e === ed.Yn.DEFAULT && ez.size > 0;
    }
    isMediaFilterSettingLoading() {
        return eW;
    }
    isNativeAudioPermissionReady() {
        return eK;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eO;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.Yn.DEFAULT,
            n = e2(t).localPans[e];
        return null != n ? n : ep;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.Yn.DEFAULT,
            n = t === ed.Yn.STREAM ? ed.Yh : ed.Qx,
            r = e2(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return e2().inputVolume;
    }
    getOutputVolume() {
        return e2().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ed.Yn.DEFAULT;
        return e2(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ed.Yn.DEFAULT;
        return e2(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(eS, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === eo.pM4.PUSH_TO_TALK && eg.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return to(eR, e2().inputDeviceId);
    }
    getOutputDeviceId() {
        return to(ev, e2().outputDeviceId);
    }
    getVideoDeviceId() {
        return to(eC, e2().videoDeviceId);
    }
    getInputDevices() {
        return eR;
    }
    getOutputDevices() {
        return ev;
    }
    getVideoDevices() {
        return eC;
    }
    getEchoCancellation() {
        let e = e2();
        return et.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e2().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return e2().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return e2().h265Enabled;
    }
    getLoopback() {
        return eT.getLoopback();
    }
    getNoiseSuppression() {
        let e = e2();
        return et.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = e2();
        return et.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return e2().noiseCancellation;
    }
    getExperimentalEncoders() {
        return e2().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null === (e = e2().hardwareEncoding) || void 0 === e || e;
    }
    getEnableSilenceWarning() {
        return e2().silenceWarning;
    }
    getDebugLogging() {
        return eT.getDebugLogging();
    }
    getQoS() {
        return e2().qos;
    }
    getAttenuation() {
        return e2().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return e2().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return e2().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return eT.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eT.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ed.Yn.DEFAULT;
        return e2(e);
    }
    getState() {
        return {
            settingsByContext: eS,
            inputDevices: eR,
            outputDevices: ev,
            appSupported: eX,
            krispModuleLoaded: eZ,
            goLiveSource: a,
            goLiveContext: eO
        };
    }
    getInputDetected() {
        return ek;
    }
    getNoInputDetectedNotice() {
        return eF;
    }
    getPacketDelay() {
        return q.isPlatformEmbedded || this.getMode() !== eo.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eT.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eN;
    }
    getVideoHook() {
        return e2().videoHook;
    }
    supportsVideoHook() {
        return eT.supports(ed.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = e2().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eT.supports(ed.AN.EXPERIMENTAL_SOUNDSHARE) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, el.I9);
    }
    getOpenH264() {
        return e2().openH264;
    }
    getEverSpeakingWhileMuted() {
        return ew;
    }
    supportsScreenSoundshare() {
        return ((0, q.isMac)() && eT.supports(ed.AN.SOUNDSHARE) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, el.yG) && te()) || ((0, q.isWindows)() && eT.supports(ed.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare());
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ed.Yn.DEFAULT,
            t = this.supports(ed.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === ed.Yn.DEFAULT ? ed.Tr.VIDEO : ed.Tr.SCREEN,
                          quality: 100
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === ed.Yn.DEFAULT || tt()) &&
                t.push({
                    rid: '50',
                    type: e === ed.Yn.DEFAULT ? ed.Tr.VIDEO : ed.Tr.SCREEN,
                    quality: 50
                }),
            t
        );
    }
    getSupportedSecureFramesProtocolVersion(e) {
        var t;
        let n = eT.getSupportedSecureFramesProtocolVersion(),
            r = k.m.getCurrentConfig({ location: 'MediaEngineStore' }),
            i =
                null != e
                    ? k.N.getCurrentConfig({
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
eE(tm, 'displayName', 'MediaEngineStore'),
    (r = new tm(S.Z, {
        VOICE_CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
            if ((r !== n && e6(i, null), null != t || null == n)) {
                eV = !1;
                return;
            }
            if (eV) return;
            eV = !0;
            let a = e2();
            (a.mute || a.deaf) &&
                (tr({
                    deaf: !1,
                    mute: !1
                }),
                eT.eachConnection(e5));
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => (i === t.sessionId ? ((ey = t.mute || t.suppress), (eb = t.deaf), eT.eachConnection(e5), e6(!(null != t.guildId && null != t.channelId && null != eY && eY !== t.channelId) && eM), (eY = t.channelId), !0) : (!__OVERLAY__ && t.userId === J.default.getId() && null == ei.Z.getChannelId() && e6(!1, null), e)), !1);
        },
        CONNECTION_OPEN: function (e) {
            (i = e.sessionId),
                (ey = !1),
                (eb = !1),
                !(0, q.isWeb)() &&
                    B.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                        let t = e2();
                        !e.sidechainAvailable && t.sidechainCompression ? (tr({ sidechainCompressionSettingVersion: 0 }), tE(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < 1 && (tr({ sidechainCompressionSettingVersion: 1 }), tE(e.sidechainEnabled));
                    }),
                tl();
        },
        CONNECTION_CLOSED: function () {
            i = null;
        },
        RTC_CONNECTION_STATE: function (e) {
            switch (e.state) {
                case eo.hes.CONNECTING:
                    ti();
                    break;
                case eo.hes.RTC_CONNECTING:
                    (eB = !1), (eF = !1);
                    break;
                case eo.hes.RTC_CONNECTED:
                    e6();
                    break;
                case eo.hes.DISCONNECTED:
                    (function () {
                        if (0 === ez.size) return;
                        let e = ed.Yn.DEFAULT,
                            { disabledLocalVideos: t } = e2(e);
                        ez.forEach((n) => {
                            d()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eT.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            ez.clear(),
                            tr({ disabledLocalVideos: t }, e, !1);
                    })(),
                        td();
            }
            tn.update();
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
            let { mute: t } = e;
            (eL = t), eT.eachConnection(e5);
        },
        AUDIO_TOGGLE_SELF_MUTE: function (e) {
            let { context: t, skipMuteUnmuteSoundEffect: n } = e,
                { mute: r, deaf: i } = e2(t);
            if (t === ed.Yn.DEFAULT && (Z.Z.requestPermission(eu.Eu.AUDIO), eD)) return !1;
            !(r = !i && !r) && (i = !1),
                n && (eU = !0),
                tr(
                    {
                        mute: r,
                        deaf: i
                    },
                    t
                ),
                eT.eachConnection(e5);
        },
        AUDIO_SET_SELF_MUTE: function (e) {
            let { context: t, mute: n } = e;
            tr({ mute: n }, t), eT.eachConnection(e5);
        },
        AUDIO_TOGGLE_SELF_DEAF: function (e) {
            let { context: t } = e;
            tr({ deaf: !e2(t).deaf }, t), eT.eachConnection(e5);
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
            let { context: t, userId: n } = e;
            if (n === J.default.getId()) return;
            let { localMutes: r } = e2(t);
            r[n] ? delete r[n] : (r[n] = !0), tr({ localMutes: r }, t), eT.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
            var t, n, r, i, a, s, o;
            let { context: l, userId: u, videoToggleState: c, persist: _, isAutomatic: E } = e;
            d()(!(_ && E), 'These are not allowed to both be true.');
            let f = c === eo.ZUi.DISABLED,
                { disabledLocalVideos: h } = e2(l),
                p = null !== (t = h[u]) && void 0 !== t && t,
                I = ez.has(u),
                m = c === eo.ZUi.AUTO_ENABLED || c === eo.ZUi.MANUAL_ENABLED;
            ef.info('disableVideo='.concat(f, ' currentlyDisabled=').concat(p, ' currentlyAutoDisabled=').concat(I, ', isVideoShown=').concat(m)), d()(!(I && !p), 'If you are auto-disabled, then you are also disabled.');
            let T = f !== p,
                S = l === ed.Yn.DEFAULT,
                g = E && T && S,
                A = _ && T && S;
            ef.info('changed='.concat(T, ' isDefaultContext=').concat(S, ' isUpdateCausedByVideoHealthManager=').concat(g, ' isManualToggleByUser=').concat(A));
            let { videoToggleStateMap: N } = e2(l);
            if ((N[u] === eo.ZUi.AUTO_PROBING && c === eo.ZUi.AUTO_ENABLED && (0, H.Z)(u, f ? ed.fC.AUTO_DISABLE : ed.fC.AUTO_ENABLE, m), (N[u] = c), tr({ videoToggleStateMap: N }, l, _), c === eo.ZUi.AUTO_PROBING ? null === (n = ei.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (r = ei.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(u, !1), !eq && (ef.info('isAutoDisableAllowed='.concat(eq, ' - disabling VideoHealthManager')), null === (a = ei.Z.getRTCConnection()) || void 0 === a || null === (i = a.getVideoHealthManager()) || void 0 === i || i.disable()), g)) {
                if ((!f && !I) || (f && !eq)) return;
                (0, H.Z)(u, f ? ed.fC.AUTO_DISABLE : ed.fC.AUTO_ENABLE, m), f ? ez.add(u) : ez.delete(u);
            } else A && (I && !f ? (ef.info('disallowing auto-disable for this session because of manual override by user'), (eq = !1), null === (o = ei.Z.getRTCConnection()) || void 0 === o || null === (s = o.getVideoHealthManager()) || void 0 === s || s.disable(), (0, H.Z)(u, ed.fC.MANUAL_REENABLE, m)) : (0, H.Z)(u, f ? ed.fC.MANUAL_DISABLE : ed.fC.MANUAL_ENABLE, m));
            S && !f && ez.delete(u),
                f ? (h[u] = !0) : delete h[u],
                tr({ disabledLocalVideos: h }, l, _),
                eT.eachConnection((e) => {
                    var t;
                    return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t);
                }, l);
        },
        AUDIO_SET_LOCAL_VOLUME: function (e) {
            let { context: t, userId: n, volume: r } = e;
            if (n === J.default.getId()) return;
            let i = t === ed.Yn.STREAM ? ed.Yh : ed.Qx,
                { localVolumes: a } = e2(t);
            r === i ? delete a[n] : (a[n] = r), tr({ localVolumes: a }, t), eT.eachConnection((e) => e.setLocalVolume(n, r), t);
        },
        AUDIO_SET_LOCAL_PAN: function (e) {
            let { context: t, userId: n, left: r, right: i } = e,
                { localPans: a } = e2(t);
            (a[n] = {
                left: r,
                right: i
            }),
                tr({ localPans: a }, t),
                eT.eachConnection((e) => e.setLocalPan(n, r, i), t);
        },
        AUDIO_SET_MODE: function (e) {
            let { context: t, mode: n, options: r } = e;
            tr(
                {
                    mode: n,
                    modeOptions: r
                },
                t
            ),
                eT.eachConnection(e3),
                tn.update();
        },
        AUDIO_SET_INPUT_VOLUME: function (e) {
            let { volume: t } = e;
            tr({ inputVolume: e4(t) }), eT.setInputVolume(t);
        },
        AUDIO_SET_OUTPUT_VOLUME: function (e) {
            let { volume: t } = e;
            tr({ outputVolume: t }), eT.setOutputVolume(t);
        },
        AUDIO_SET_INPUT_DEVICE: function (e) {
            let { id: t } = e;
            tr({ inputDeviceId: (t = to(eR, t)) }), eT.setAudioInputDevice(t);
        },
        AUDIO_SET_OUTPUT_DEVICE: function (e) {
            let { id: t } = e;
            tr({ outputDeviceId: (t = to(ev, t)) }), eT.setAudioOutputDevice(t);
        },
        AUDIO_SET_ECHO_CANCELLATION: function (e) {
            let t = tr({ echoCancellation: e.enabled });
            eT.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), tf(), t_(e.location);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
            tE(e.enabled);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
            let t = tr({ sidechainCompressionStrength: e.strength });
            eT.setSidechainCompressionStrength(t.sidechainCompressionStrength);
        },
        AUDIO_SET_LOOPBACK: function (e) {
            let { enabled: t } = e;
            return (eQ = t), tf();
        },
        AUDIO_SET_NOISE_SUPPRESSION: function (e) {
            let t = tr({ noiseSuppression: e.enabled });
            eT.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), tf(), t_(e.location);
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
            let t = tr({ automaticGainControl: e.enabled });
            eT.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), tf(), t_(e.location);
        },
        AUDIO_SET_NOISE_CANCELLATION: function (e) {
            let t = tr({ noiseCancellation: e.enabled });
            eT.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), tf(), t_(e.location);
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
            tr({ silenceWarning: e.enabled }), tn.update();
        },
        AUDIO_SET_DEBUG_LOGGING: function (e) {
            eT.setDebugLogging(e.enabled);
        },
        MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
            tr({ videoHook: e.enabled });
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
            tr({ experimentalSoundshare2: e.enabled });
        },
        AUDIO_SET_ATTENUATION: function (e) {
            let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
                i = tr({
                    attenuation: t,
                    attenuateWhileSpeakingSelf: n,
                    attenuateWhileSpeakingOthers: r
                });
            eT.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
        },
        AUDIO_SET_QOS: function (e) {
            let { enabled: t } = e;
            tr({ qos: t }), eT.eachConnection((e) => e.setQoS(t));
        },
        MEDIA_ENGINE_DEVICES: function (e) {
            let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
            !(function (e) {
                let t = eR;
                if (((eR = ts(e, e_.Z.Messages.NO_INPUT_DEVICES)), !E().isEqual(eR, t))) {
                    let e = e2(),
                        t = to(eR, e.inputDeviceId);
                    eT.setAudioInputDevice(t);
                }
            })(t),
                !(function (e) {
                    let t = ev;
                    if (((ev = ts(e, e_.Z.Messages.NO_OUTPUT_DEVICES)), !E().isEqual(ev, t))) {
                        let e = e2(),
                            t = to(ev, e.outputDeviceId);
                        eT.setAudioOutputDevice(t);
                    }
                })(n),
                !(function (e) {
                    eG = e.length > 0;
                    let t = eC;
                    if (((eC = ts(e, e_.Z.Messages.NO_VIDEO_DEVICES)), eM && !E().isEqual(eC, t))) {
                        var n;
                        let e = void 0 !== eC[eP],
                            r = eP === ed.w5 && (null === (n = t[ed.w5]) || void 0 === n ? void 0 : n.disabled);
                        e6(e || r);
                    }
                })(r);
        },
        AUDIO_VOLUME_CHANGE: function (e) {
            let { inputVolume: t, outputVolume: n } = e;
            tr({
                inputVolume: e4(t),
                outputVolume: n
            });
        },
        AUDIO_RESET: function () {
            m.K.remove(eh), location.reload();
        },
        AUDIO_INPUT_DETECTED: function (e) {
            let { inputDetected: t } = e;
            (ek = t), !eB && ek && ((eB = !0), tn.update());
        },
        AUDIO_SET_SUBSYSTEM: function (e) {
            eT.setAudioSubsystem(e.subsystem);
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
            (eA = e.enabled),
                e.unmute &&
                    tr({
                        mute: !1,
                        deaf: !1
                    }),
                eT.eachConnection(e5);
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
            let { enabled: t } = e;
            Z.Z.requestPermission(eu.Eu.CAMERA), e6(t);
        },
        MEDIA_ENGINE_PERMISSION: function (e) {
            let { kind: t, granted: n } = e;
            if (!n)
                switch (t) {
                    case 'audio':
                        (eA = !1), eT.eachConnection(e5);
                        break;
                    case 'video':
                        e6(!1);
                }
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
            var t, n, r, i;
            let { settings: s } = e;
            if ((null == s ? void 0 : s.desktopSettings) != null) {
                let e = null,
                    r = null,
                    { sourceId: i, sound: o } = s.desktopSettings,
                    l = null !== (t = s.context) && void 0 !== t ? t : ed.Yn.DEFAULT,
                    u =
                        null !== (n = s.qualityOptions) && void 0 !== n
                            ? n
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              },
                    c = !1 === o ? null : K.Z.getPidFromDesktopSource(i);
                q.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = tu(c)), null != e && tc(e, r)),
                    !(function (e) {
                        if (e !== eO) null != a && eT.setGoLiveSource(null, eO), (eO = e);
                    })(l),
                    e6(l === ed.Yn.STREAM && eM, {
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
                let e = null !== (r = s.context) && void 0 !== r ? r : ed.Yn.DEFAULT,
                    { videoDeviceGuid: t, audioDeviceGuid: n } = s.cameraSettings,
                    a = e === ed.Yn.STREAM && eM,
                    o =
                        null !== (i = s.qualityOptions) && void 0 !== i
                            ? i
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              };
                e6(a, {
                    cameraSource: {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    },
                    quality: {
                        resolution: o.resolution,
                        frameRate: o.frameRate
                    }
                });
            } else e6(eM, null);
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
            let { id: t } = e;
            tr({ videoDeviceId: (t = to(eC, t)) }), e6();
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function (e) {
            let t = tr({ experimentalEncoders: e.enabled });
            eT.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
            return eN !== e.required && ((eN = e.required), !e.required && eT.interact(), !0);
        },
        USER_SETTINGS_MODAL_INIT: tI,
        USER_SETTINGS_MODAL_SET_SECTION: tI,
        CERTIFIED_DEVICES_SET: function () {
            return eT.eachConnection(e8), !1;
        },
        RPC_APP_CONNECTED: function (e) {
            let { application: t } = e;
            eg.add(t.id);
        },
        RPC_APP_DISCONNECTED: function (e) {
            let { application: t } = e;
            eg.delete(t.id);
        },
        OVERLAY_INITIALIZE: function (e) {
            let { mediaEngineState: t } = e;
            (eS = t.settingsByContext), (eR = t.inputDevices), (ev = t.outputDevices), (eX = t.appSupported), (eZ = t.krispModuleLoaded), (eO = t.goLiveContext);
        },
        MEDIA_ENGINE_SET_OPEN_H264: function (e) {
            let { enabled: t } = e,
                n = tr({ openH264: t });
            eT.setH264Enabled(n.hardwareEncoding || n.openH264),
                eT.eachConnection((e) => {
                    var t;
                    return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
                });
        },
        MEDIA_ENGINE_SET_HARDWARE_ENCODING: function (e) {
            var t, n;
            let { enabled: r } = e,
                i = tr({ hardwareEncoding: r });
            eT.eachConnection((e) => {
                var t;
                return e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t);
            }),
                eT.setH264Enabled(i.hardwareEncoding || i.openH264),
                eT.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t),
                eT.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n);
        },
        APP_STATE_UPDATE: function (e) {
            let { state: t } = e,
                n = L.Z.isEnabled();
            if (t === eo.$7l.BACKGROUND && eM && !n) (ex = !0), e6(!1);
            else {
                if (t !== eo.$7l.ACTIVE || !ex) return !1;
                (ex = !1), e6(!0);
            }
            return !0;
        },
        SET_CHANNEL_BITRATE: function (e) {
            eT.eachConnection((t) => t.setBitRate(e.bitrate));
        },
        SET_VAD_PERMISSION: function (e) {
            let { hasPermission: t } = e,
                n = !t;
            if (n === eD) return !1;
            (eD = n), eT.eachConnection(e5);
        },
        SET_NATIVE_PERMISSION: function (e) {
            let { state: t, permissionType: n } = e,
                r = t === eu.PQ.ACCEPTED;
            switch (n) {
                case eu.Eu.AUDIO:
                    (eK = !0), eT.eachConnection(e5);
                    break;
                case eu.Eu.CAMERA:
                    !r && eM && e6(!1);
                    break;
                default:
                    return !1;
            }
        },
        SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
            eT.eachConnection((t) => t.applyVideoQualityMode(e.mode));
        },
        MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
            let { enabled: t } = e,
                n = tr({ aecDumpEnabled: t });
            eT.setAecDump(n.aecDumpEnabled);
        },
        CHANNEL_DELETE: function () {
            if ((!eM && null == a) || null != ei.Z.getRTCConnectionId()) return !1;
            e6(!1, null);
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
            return !!ej && ((ej = !1), !0);
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
            let { settings: t } = e;
            eT.applyMediaFilterSettings(t).finally(() => {
                (eW = !1), r.emitChange();
            });
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
            eW = !0;
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
            eW = !1;
        },
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            let {
                settings: { type: t },
                local: n,
                wasSaved: r
            } = e;
            if (t !== ec.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
            tl(!0);
        },
        CLIPS_INIT: function (e) {
            let { sourceId: t, applicationName: n, quality: i } = e,
                a = O.Z.isDecoupledGameClippingEnabled(),
                o = O.Z.getSettings().decoupledClipsEnabled;
            if (!a || !o || null == g.Z) return;
            let l = null,
                u = null,
                c = K.Z.getPidFromDesktopSource(t);
            ({ soundshareId: l, soundshareSession: u } = tu(c));
            let d = {
                desktopSource: {
                    id: t,
                    sourcePid: c,
                    soundshareId: l,
                    soundshareSession: u
                },
                quality: i
            };
            null != s && s.desktopSource.id !== d.desktopSource.id && (eT.setClipsSource(null), (0, q.isWindows)() && null != s.desktopSource.soundshareId && A.pn(s.desktopSource.soundshareId)), null != l && tc(l, u), (s = d);
            let { hdrCaptureMode: _ } = x.Z.getCurrentConfig({ location: 'f627ab_12' }, { autoTrackExposure: !1 }),
                E = e2().videoHook;
            eT.setClipsSource({
                desktopDescription: {
                    id: s.desktopSource.id,
                    soundshareId: s.desktopSource.soundshareId,
                    useVideoHook: E,
                    useGraphicsCapture: e9(),
                    useLoopback: r.getExperimentalSoundshare(),
                    useQuartzCapturer: !0,
                    allowScreenCaptureKit: te(),
                    videoHookStaleFrameTimeoutMs: 500,
                    graphicsCaptureStaleFrameTimeoutMs: eI,
                    hdrCaptureMode: _
                },
                quality: i,
                applicationName: n
            });
        },
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            !1 === t.decoupledClipsEnabled && ((s = null), eT.setClipsSource(null));
        },
        MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
            eJ = e.enabled;
        }
    })),
    (t.Z = r);
