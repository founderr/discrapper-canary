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
    F = n(441167),
    V = n(338336),
    H = n(751571),
    Z = n(725380),
    Y = n(581883),
    j = n(626135),
    W = n(12647),
    K = n(70956),
    z = n(358085),
    q = n(960048),
    Q = n(998502),
    X = n(13140),
    $ = n(314897),
    J = n(967368),
    ee = n(463395),
    et = n(592125),
    en = n(858340),
    er = n(19780),
    ei = n(704806),
    ea = n(631768),
    es = n(981631),
    eo = n(70722),
    el = n(761274),
    eu = n(526761),
    ec = n(65154),
    ed = n(689938);
function e_(e, t, n) {
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
let eE = new v.Z('MediaEngineStore');
((u = o || (o = {}))[(u.DETACHED = 0)] = 'DETACHED'), (u[(u.WAITING = 1)] = 'WAITING'), (u[(u.ATTACHED = 2)] = 'ATTACHED'), (u[(u.STARTED = 3)] = 'STARTED'), (u[(u.PLAYING = 4)] = 'PLAYING'), (u[(u.SILENCE = 5)] = 'SILENCE');
let ef = 'MediaEngineStore',
    eh = {
        left: 1,
        right: 1
    },
    ep = 5 * K.Z.Millis.SECOND;
function eI() {
    return {
        mode: es.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: z.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: ec.Qx,
        outputVolume: ec.Qx,
        inputDeviceId: ec.w5,
        outputDeviceId: ec.w5,
        videoDeviceId: ec.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: em.supports(ec.AN.VIDEO_HOOK),
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
let em = (0, I.Mt)((0, I.jj)()),
    eT = {},
    eS = new Set([ec.Yn.DEFAULT]),
    eg = em.supports(ec.AN.AUTO_ENABLE),
    eA = !1,
    eN = ec.Yn.STREAM,
    eO = { [ec.w5]: ti(ed.Z.Messages.NO_INPUT_DEVICES) },
    eR = { [ec.w5]: ti(ed.Z.Messages.NO_OUTPUT_DEVICES) },
    ev = { [ec.w5]: ti(ed.Z.Messages.NO_VIDEO_DEVICES) },
    eC = !1,
    ey = !1,
    eL = !1,
    eD = !1,
    eb = !1,
    eM = ec.Av,
    eP = !1,
    eU = !1,
    ew = !1,
    ex = !1,
    eG = null,
    ek = !1,
    eB = !1,
    eF = !1,
    eV = !1,
    eH = !1,
    eZ = null,
    eY = !1,
    ej = !1,
    eW = !1;
H.Z.hasPermission(el.Eu.AUDIO, { showAuthorizationError: !1 }), H.Z.hasPermission(el.Eu.CAMERA, { showAuthorizationError: !1 });
let eK = new Set(),
    ez = !1,
    eq = !1,
    eQ = {},
    eX = null,
    e$ = !0,
    eJ = {},
    e0 = 5 * K.Z.Millis.SECOND;
function e1() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec.Yn.DEFAULT,
        t = eT[e];
    return null == t && ((t = eI()), (eT[e] = t)), t;
}
function e2(e) {
    let t = e1(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp:
            t.modeOptions.vadUseKrisp &&
            (function () {
                return eH || !1;
            })(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function e3(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.Qx;
    return E().clamp(e, 0, t);
}
function e4(e) {
    let t = e1(e.context),
        n = !eg || t.mute || t.deaf;
    e.context === ec.Yn.DEFAULT ? (n = n || eC || ey || eL || !H.Z.didHavePermission(el.Eu.AUDIO)) : e.context === ec.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === ec.Yn.DEFAULT && N.Z.updateNativeMute();
}
function e5() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        o = a;
    if (((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, z.isWindows)() && A.pn(o.desktopSource.soundshareId), em.setGoLiveSource(null, eN)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == s ? void 0 : null === (t = s.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && em.setGoLiveSource(null, eN), (eb || i) && ((eM = (eb = i) ? ts(ev, e1().videoDeviceId) : ec.Av), em.setVideoInputDevice(eM)), (a = s), null != s)) {
        let e = {
            resolution: s.quality.resolution,
            frameRate: s.quality.frameRate
        };
        if (null != s.desktopSource) {
            let { hdrCaptureMode: t } = x.Z.getCurrentConfig({ location: 'f627ab_2' }, { autoTrackExposure: !1 }),
                n = e1().videoHook;
            em.setGoLiveSource(
                {
                    desktopDescription: {
                        id: s.desktopSource.id,
                        soundshareId: s.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: e8(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: e9(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: ep,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eN
            );
        }
        null != s.cameraSource &&
            em.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: s.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: s.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eN
            );
    }
}
function e6(e, t, n, r) {
    var i;
    let a = null !== (i = null == e ? void 0 : e.soundshareSession) && void 0 !== i ? i : '';
    null == eJ[a] && (eJ[a] = new Set());
    let s = null != t && !eJ[a].has(t);
    s && eJ[a].add(t),
        (null == t || s) &&
            j.default.track(es.rMx.SOUNDSHARE_FAILED, {
                soundshare_failure_code: t,
                soundshare_failure_reason: n,
                soundshare_failure_will_retry: r,
                ...(0, b.Z)(e)
            });
}
function e7(e) {
    let t = e1(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(ee.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ee.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ee.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, z.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function e8() {
    return (0, z.isWindows)() && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, eo.nz);
}
function e9() {
    return (0, z.isMac)() && em.supports(ec.AN.SCREEN_CAPTURE_KIT) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, eo.C7);
}
function te() {
    var e;
    let t = (null === (e = et.Z.getChannel(eZ)) || void 0 === e ? void 0 : e.type) === es.d4z.GUILD_STAGE_VOICE,
        n = r.getHardwareEncoding();
    return !t && n && w.Z.supportsSimulcast();
}
let tt = new (class {
    start() {
        !this.started && ((this.started = !0), em.on(I.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            em.removeListener(I.aB.Silence, this.handleSilence),
            S.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = e1();
        !ek && er.Z.getState() === es.hes.RTC_CONNECTED && e.mode === es.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        e_(this, 'stateChangeTimeout', void 0),
            e_(this, 'noVoiceTimeout', 5000),
            e_(this, 'voiceTimeout', 1500),
            e_(this, 'started', !1),
            e_(this, 'handleSilence', (e) => {
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
                                    e && (eB = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tn(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = e1(t);
    return Object.assign(r, e), !__OVERLAY__ && n && m.K.set(ef, eT), r;
}
function tr() {
    !eg &&
        em.enable().then(() =>
            S.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function ti(e) {
    return {
        id: ec.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function ta(e, t) {
    if (0 === e.length) {
        let e = ti(t);
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
function ts(e, t) {
    var n;
    let r = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
    return null != r ? r.id : t;
}
function to() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null !== (e = Y.Z.settings.audioContextSettings) && void 0 !== e
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === eu.u0.USER ? ec.Yn.DEFAULT : ec.Yn.STREAM,
            a = i === ec.Yn.STREAM ? ec.Yh : ec.Qx,
            s = null !== (t = r[e]) && void 0 !== t ? t : {},
            { localMutes: o, localVolumes: l } = e1(i);
        for (let [e, t] of Object.entries(s))
            null == (0, Z.Ky)(i, e) &&
                (t.muted ? (o[e] = !0) : delete o[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                em.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(o), ...Object.keys(l)]))
                null == s[e] &&
                    (delete o[e],
                    delete l[e],
                    em.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        tn(
            {
                localMutes: o,
                localVolumes: l
            },
            i
        );
    }
}
function tl(e) {
    if (null == r)
        return (
            eE.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : W.Z.getAudioPid(e),
            n = '';
        return (
            null != t && (n = W.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n
            }
        );
    }
}
function tu(e, t) {
    (0, z.isWindows)() &&
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
function tc() {
    let e = ec.Yn.DEFAULT,
        { videoToggleStateMap: t } = e1(e);
    for (let [e, n] of Object.entries(t)) n === es.ZUi.AUTO_PROBING && delete t[e];
    tn({ videoToggleStateMap: t }, e, !1);
}
function td(e) {
    let t = e1();
    j.default.track(es.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function t_(e) {
    let t = tn({ sidechainCompression: e });
    em.setSidechainCompression(t.sidechainCompression);
}
function tE() {
    let e = e1(),
        t = e.inputDeviceId,
        n = ee.Z.hasEchoCancellation(t) || e.echoCancellation,
        r = ee.Z.hasNoiseSuppression(t) || e.noiseSuppression,
        i = ee.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
        a = e.noiseCancellation;
    em.setLoopback(eq, {
        echoCancellation: n,
        noiseSuppression: r,
        automaticGainControl: i,
        noiseCancellation: a
    });
}
function tf() {
    return eH || !1;
}
async function th() {
    try {
        await Q.ZP.ensureModule('discord_krisp'), Q.ZP.requireModule('discord_krisp'), (eH = !0), r.emitChange();
    } catch (t) {
        eE.warn('Failed to load Krisp module: '.concat(t.message)), q.Z.captureException(t);
        let e = ec.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? ec.H3.INITIALIZED : n;
        }
        j.default.track(es.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tn({ noiseCancellation: !1 });
    } finally {
        eV = !1;
    }
}
function tp(e) {
    let { section: t } = e;
    return t === es.oAB.VOICE && tr(), !1;
}
class tI extends (l = p.ZP.Store) {
    initialize() {
        em.on(I.aB.Connection, (e) => {
            var t, n;
            e2(e), e4(e), e7(e);
            let i = e1();
            e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = i.openH264) || void 0 === n || n);
            let s = er.Z.getGuildId(),
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
            o && e.setExperimentFlag(ec.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(ec.V8.PTT_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(ec.V8.SKIP_ENCODE, !0);
            e.setExperimentFlag(ec.V8.RESET_DECODER_ON_ERRORS, !0), e.setExperimentFlag(ec.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            if (e.context === ec.Yn.STREAM && te()) {
                let t = w.Z.goliveSimulcastFlag();
                void 0 !== t && e.setExperimentFlag(t, !0);
            }
            if (((0, z.isWindows)() ? ((null == eX ? void 0 : eX.startsWith('NVIDIA')) ? e.setExperimentFlag(ec.V8.SIGNAL_AV1, !0) : (null == eX ? void 0 : eX.startsWith('AMD')) && M.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(ec.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(ec.V8.SIGNAL_AV1_DECODE, !0)) : ((0, z.isMac)() || (0, z.isLinux)()) && e.setExperimentFlag(ec.V8.SIGNAL_AV1_DECODE, !0), (0, z.isWindows)() && e.setExperimentFlag(ec.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), em.setHasFullbandPerformance((0, C.b)()), e.setRemoteAudioHistory(0), (0, R.Z)(r))) {
                let t = O.Z.getSettings();
                e.setExperimentFlag(ec.V8.STREAMER_CLIP, t.clipsEnabled);
                let { enableViewerClipping: n } = F.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
                e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ec.ux);
            }
            for (let t of ((i = e1(e.context)), e.setPostponeDecodeLevel(100), Object.keys(i.localMutes))) t !== $.default.getId() && e.setLocalMute(t, i.localMutes[t]);
            for (let t of Object.keys(i.localVolumes)) t !== $.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
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
                e.context === ec.Yn.DEFAULT &&
                    ((eU = !1),
                    e.on(I.Sh.SpeakingWhileMuted, () => {
                        (eU = !0), r.emitChange();
                    })),
                e.on(I.Sh.DesktopSourceEnd, () => {
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                        settings: { context: e.context }
                    });
                }),
                e.on(I.Sh.SoundshareAttached, () => {
                    (null == a ? void 0 : a.desktopSource) != null && j.default.track(es.rMx.SOUNDSHARE_ATTACHED, (0, b.Z)(null == a ? void 0 : a.desktopSource));
                }),
                e.on(I.Sh.SoundshareFailed, (e) => {
                    let { failureCode: t, failureReason: n, willRetry: r } = e;
                    e6(null == a ? void 0 : a.desktopSource, t, n, r);
                }),
                e.on(I.Sh.SoundshareSpeaking, () => {
                    (null == a ? void 0 : a.desktopSource) != null && (j.default.track(es.rMx.SOUNDSHARE_TRANSMITTING, (0, b.Z)(null == a ? void 0 : a.desktopSource)), null != en.Z.getHookError(es.K3D.SOUND) && S.Z.wait(() => S.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
                });
            let c = new T.V7();
            e.on(I.Sh.SoundshareTrace, (e) => {
                switch (e.type) {
                    case 'soundshare_attach_requested':
                        c.start(e0, () => {
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
                            (e6(null == a ? void 0 : a.desktopSource, n, t, r),
                            !r &&
                                (c.stop(),
                                S.Z.wait(() =>
                                    S.Z.dispatch({
                                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                        errorMessage: t,
                                        errorCode: n
                                    })
                                )));
                        break;
                    case 'soundshare_state_transition':
                        4 === e.newState && (c.stop(), S.Z.wait(() => S.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
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
                        j.default.track(es.rMx.VIDEOHOOK_INITIALIZED, {
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
                    eE.warn('noisecancellererror event: '.concat(e)),
                        (eY = !0),
                        j.default.track(es.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                    eE.warn('voiceactivitydetectorerror event: '.concat(e)),
                        j.default.track(es.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.Z.dispatch({
                            type: 'AUDIO_SET_MODE',
                            context: ec.Yn.DEFAULT,
                            mode: es.pM4.VOICE_ACTIVITY,
                            options: {
                                ...e1(ec.Yn.DEFAULT).modeOptions,
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
                    c.stop();
                }),
                e.setBitRate(J.Z.bitrate),
                e.applyVideoQualityMode(ea.Z.mode);
        }),
            em.on(I.aB.DeviceChange, (e, t, n) => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_DEVICES',
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n
                });
            }),
            em.on(I.aB.VolumeChange, (e, t) => {
                S.Z.dispatch({
                    type: 'AUDIO_VOLUME_CHANGE',
                    inputVolume: e,
                    outputVolume: t
                });
            }),
            em.on(I.aB.DesktopSourceEnd, () => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: null
                });
            }),
            em.on(I.aB.AudioPermission, (e) => {
                (eW = !0),
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_PERMISSION',
                        kind: 'audio',
                        granted: e
                    });
            }),
            em.on(I.aB.VideoPermission, (e) => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'video',
                    granted: e
                });
            }),
            em.on(I.aB.WatchdogTimeout, async () => {
                let e;
                try {
                    await W.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
                } catch (t) {
                    'number' == typeof t.status && (e = t.status);
                }
                eE.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), j.default.track(es.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
            }),
            em.on(I.aB.VideoInputInitialized, (e) => {
                j.default.track(es.rMx.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * K.Z.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy
                });
            }),
            em.on(I.aB.ClipsRecordingRestartNeeded, () => {
                S.Z.dispatch({ type: 'CLIPS_RESTART' });
            }),
            em.on(I.aB.ClipsInitFailure, (e, t) => {
                S.Z.wait(() => {
                    S.Z.dispatch({
                        type: 'CLIPS_INIT_FAILURE',
                        errMsg: e,
                        applicationName: t
                    });
                });
            }),
            em.on(I.aB.ClipsRecordingEnded, (e, t) => {
                var n, r;
                (null == s ? void 0 : null === (n = s.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == a ? void 0 : null === (r = a.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t && A.pn(t), (s = null));
            }),
            em.on(I.aB.NativeScreenSharePickerUpdate, (e) => {
                G.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                        existing: e
                    });
            }),
            em.on(I.aB.NativeScreenSharePickerCancel, (e) => {
                G.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                        existing: e
                    });
            }),
            em.on(I.aB.NativeScreenSharePickerError, (e) => {
                G.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                        error: e
                    });
            }),
            em.on(I.aB.AudioDeviceModuleError, (e, t, n) => {
                j.default.track(es.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                    audio_device_module: e,
                    code: t,
                    device_name: n
                });
            }),
            tt.reset(),
            (0, ei.q)().then((e) => {
                null != e && (eX = e.gpu_brand);
            }),
            !(function () {
                var e;
                let t = m.K.get('audio');
                null != t && (m.K.set(ef, { [ec.Yn.DEFAULT]: t }), m.K.remove('audio')),
                    (eT = null !== (e = m.K.get(ef)) && void 0 !== e ? e : {}),
                    E().each(eT, (e) => {
                        if ((E().defaultsDeep(e, eI()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, X.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)), !e.qosMigrated && ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                            var t;
                            (e.vadThrehsoldMigrated = !0), (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60);
                        }
                        (0, z.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : 1 !== e.ncUseKrispSettingVersion && ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), 1 !== e.hardwareEnabledVersion && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = 1)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
                    }),
                    (function () {
                        var e, t, n;
                        let r = e1();
                        em.setAudioInputDevice(r.inputDeviceId), em.setAudioOutputDevice(r.outputDeviceId), e5(), em.setInputVolume(r.inputVolume), em.setOutputVolume(r.outputVolume), em.setH264Enabled(null === (e = r.hardwareEncoding) || void 0 === e || e || r.openH264), em.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t), em.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n), em.setAecDump(r.aecDumpEnabled), em.setSidechainCompression(r.sidechainCompression), em.setSidechainCompressionStrength(r.sidechainCompressionStrength);
                    })();
            })(),
            ((0, z.isWindows)() || (0, z.isLinux)() || ((0, z.isMac)() && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, '>=21.0.0'))) && !__OVERLAY__ && !eV && !eH ? ((eV = !0), th()) : (0, z.isWeb)() && em.supports(ec.AN.NOISE_CANCELLATION) ? ((eH = !0), r.emitChange()) : (0, z.isWeb)() && tn({ noiseCancellation: !1 }),
            tc(),
            (eQ = {
                [ec.AN.VIDEO]: em.supports(ec.AN.VIDEO),
                [ec.AN.DESKTOP_CAPTURE]: em.supports(ec.AN.DESKTOP_CAPTURE),
                [ec.AN.HYBRID_VIDEO]: em.supports(ec.AN.HYBRID_VIDEO)
            }),
            this.waitFor($.default, ee.Z, et.Z, en.Z, er.Z, D.ZP, H.Z.storage, Y.Z, y.Z, O.Z);
    }
    supports(e) {
        return em.supports(e);
    }
    supportsInApp(e) {
        return eQ[e] || em.supports(e);
    }
    isSupported() {
        return em.supported();
    }
    isExperimentalEncodersSupported() {
        return em.supports(ec.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return em.supports(ec.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return eH || !1;
    }
    isNoiseCancellationError() {
        return eY;
    }
    isAutomaticGainControlSupported() {
        return em.supports(ec.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return eH || !1;
    }
    isAecDumpSupported() {
        return em.supports(ec.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return em.supports(ec.AN.VIDEO) && em.supports(ec.AN.SIMULCAST);
    }
    getAecDump() {
        return e1().aecDumpEnabled;
    }
    getMediaEngine() {
        return em;
    }
    getVideoComponent() {
        return em.supports(ec.AN.DIRECT_VIDEO) && em.setUseDirectVideo(!0), em.Video;
    }
    getCameraComponent() {
        return em.supports(ec.AN.DIRECT_VIDEO) && em.setUseDirectVideo(!0), em.Camera;
    }
    isEnabled() {
        return eg;
    }
    isMute() {
        return this.isSelfMute() || eC;
    }
    isDeaf() {
        return this.isSelfDeaf() || eD;
    }
    hasContext(e) {
        return null != eT[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec.Yn.DEFAULT;
        return e === ec.Yn.DEFAULT && ey;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec.Yn.DEFAULT;
        return !this.isEnabled() || e1(e).mute || !H.Z.didHavePermission(el.Eu.AUDIO) || this.isSelfDeaf(e) || (e === ec.Yn.DEFAULT && eL);
    }
    shouldSkipMuteUnmuteSound() {
        return eP;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        eP = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ee.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return e$;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec.Yn.DEFAULT;
        return !this.isSupported() || e1(e).deaf;
    }
    isVideoEnabled() {
        return eb && ex;
    }
    isVideoAvailable() {
        return Object.values(ev).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec.Yn.STREAM;
        return eN === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec.Yn.STREAM;
        return eN === t && null != a && (null === (e = a.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.Yn.DEFAULT;
        return e !== $.default.getId() && (e1(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return em.supports(ec.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.Yn.DEFAULT;
        return null !== (t = e1(n).disabledLocalVideos[e]) && void 0 !== t && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.Yn.DEFAULT;
        return null !== (t = e1(n).videoToggleStateMap[e]) && void 0 !== t ? t : es.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.Yn.DEFAULT;
        return t === ec.Yn.DEFAULT && eK.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec.Yn.DEFAULT;
        return e === ec.Yn.DEFAULT && eK.size > 0;
    }
    isMediaFilterSettingLoading() {
        return ej;
    }
    isNativeAudioPermissionReady() {
        return eW;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eN;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.Yn.DEFAULT,
            n = e1(t).localPans[e];
        return null != n ? n : eh;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.Yn.DEFAULT,
            n = t === ec.Yn.STREAM ? ec.Yh : ec.Qx,
            r = e1(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return e1().inputVolume;
    }
    getOutputVolume() {
        return e1().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec.Yn.DEFAULT;
        return e1(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec.Yn.DEFAULT;
        return e1(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(eT, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === es.pM4.PUSH_TO_TALK && eS.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return ts(eO, e1().inputDeviceId);
    }
    getOutputDeviceId() {
        return ts(eR, e1().outputDeviceId);
    }
    getVideoDeviceId() {
        return ts(ev, e1().videoDeviceId);
    }
    getInputDevices() {
        return eO;
    }
    getOutputDevices() {
        return eR;
    }
    getVideoDevices() {
        return ev;
    }
    getEchoCancellation() {
        let e = e1();
        return ee.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e1().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return e1().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return e1().h265Enabled;
    }
    getLoopback() {
        return em.getLoopback();
    }
    getNoiseSuppression() {
        let e = e1();
        return ee.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = e1();
        return ee.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return e1().noiseCancellation;
    }
    getExperimentalEncoders() {
        return e1().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null === (e = e1().hardwareEncoding) || void 0 === e || e;
    }
    getEnableSilenceWarning() {
        return e1().silenceWarning;
    }
    getDebugLogging() {
        return em.getDebugLogging();
    }
    getQoS() {
        return e1().qos;
    }
    getAttenuation() {
        return e1().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return e1().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return e1().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return em.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return em.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec.Yn.DEFAULT;
        return e1(e);
    }
    getState() {
        return {
            settingsByContext: eT,
            inputDevices: eO,
            outputDevices: eR,
            appSupported: eQ,
            krispModuleLoaded: eH,
            goLiveSource: a,
            goLiveContext: eN
        };
    }
    getInputDetected() {
        return eG;
    }
    getNoInputDetectedNotice() {
        return eB;
    }
    getPacketDelay() {
        return z.isPlatformEmbedded || this.getMode() !== es.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        em.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eA;
    }
    getVideoHook() {
        return e1().videoHook;
    }
    supportsVideoHook() {
        return em.supports(ec.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = e1().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return em.supports(ec.AN.EXPERIMENTAL_SOUNDSHARE) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, eo.I9);
    }
    getOpenH264() {
        return e1().openH264;
    }
    getEverSpeakingWhileMuted() {
        return eU;
    }
    supportsScreenSoundshare() {
        return ((0, z.isMac)() && em.supports(ec.AN.SOUNDSHARE) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, eo.yG) && e9()) || ((0, z.isWindows)() && em.supports(ec.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare());
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec.Yn.DEFAULT,
            t = this.supports(ec.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === ec.Yn.DEFAULT ? ec.Tr.VIDEO : ec.Tr.SCREEN,
                          quality: 100
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === ec.Yn.DEFAULT || te()) &&
                t.push({
                    rid: '50',
                    type: e === ec.Yn.DEFAULT ? ec.Tr.VIDEO : ec.Tr.SCREEN,
                    quality: 50
                }),
            t
        );
    }
    getSupportedSecureFramesProtocolVersion(e) {
        var t;
        let n = em.getSupportedSecureFramesProtocolVersion(),
            r = k.m.getCurrentConfig({ location: 'MediaEngineStore' }),
            i =
                null != e
                    ? k.N.getCurrentConfig({
                          guildId: e,
                          location: 'MediaEngineStore'
                      })
                    : null;
        n > 5 && (n = 114 === n ? 1 : 0);
        let a = r.canSupportDaveProtocol || (null == i ? void 0 : i.canSupportDaveProtocol),
            s = Math.max(r.protocolVersionFloor, null !== (t = null == i ? void 0 : i.protocolVersionFloor) && void 0 !== t ? t : 0);
        return a && n >= s ? n : 0;
    }
    hasClipsSource() {
        return null != s;
    }
}
e_(tI, 'displayName', 'MediaEngineStore'),
    (r = new tI(S.Z, {
        VOICE_CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
            if ((r !== n && e5(i, null), null != t || null == n)) {
                eF = !1;
                return;
            }
            if (eF) return;
            eF = !0;
            let a = e1();
            (a.mute || a.deaf) &&
                (tn({
                    deaf: !1,
                    mute: !1
                }),
                em.eachConnection(e4));
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => (i === t.sessionId ? ((eC = t.mute || t.suppress), (eD = t.deaf), em.eachConnection(e4), e5(!(null != t.guildId && null != t.channelId && null != eZ && eZ !== t.channelId) && eb), (eZ = t.channelId), !0) : (!__OVERLAY__ && t.userId === $.default.getId() && null == er.Z.getChannelId() && e5(!1, null), e)), !1);
        },
        CONNECTION_OPEN: function (e) {
            (i = e.sessionId),
                (eC = !1),
                (eD = !1),
                !(0, z.isWeb)() &&
                    B.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                        let t = e1();
                        !e.sidechainAvailable && t.sidechainCompression ? (tn({ sidechainCompressionSettingVersion: 0 }), t_(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < 1 && (tn({ sidechainCompressionSettingVersion: 1 }), t_(e.sidechainEnabled));
                    }),
                to();
        },
        CONNECTION_CLOSED: function () {
            i = null;
        },
        RTC_CONNECTION_STATE: function (e) {
            switch (e.state) {
                case es.hes.CONNECTING:
                    tr();
                    break;
                case es.hes.RTC_CONNECTING:
                    (ek = !1), (eB = !1);
                    break;
                case es.hes.RTC_CONNECTED:
                    e5();
                    break;
                case es.hes.DISCONNECTED:
                    (function () {
                        if (0 === eK.size) return;
                        let e = ec.Yn.DEFAULT,
                            { disabledLocalVideos: t } = e1(e);
                        eK.forEach((n) => {
                            d()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], em.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            eK.clear(),
                            tn({ disabledLocalVideos: t }, e, !1);
                    })(),
                        tc();
            }
            tt.update();
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
            let { mute: t } = e;
            (ey = t), em.eachConnection(e4);
        },
        AUDIO_TOGGLE_SELF_MUTE: function (e) {
            let { context: t, skipMuteUnmuteSoundEffect: n } = e,
                { mute: r, deaf: i } = e1(t);
            if (t === ec.Yn.DEFAULT && (H.Z.requestPermission(el.Eu.AUDIO), eL)) return !1;
            !(r = !i && !r) && (i = !1),
                n && (eP = !0),
                tn(
                    {
                        mute: r,
                        deaf: i
                    },
                    t
                ),
                em.eachConnection(e4);
        },
        AUDIO_SET_SELF_MUTE: function (e) {
            let { context: t, mute: n } = e;
            tn({ mute: n }, t), em.eachConnection(e4);
        },
        AUDIO_TOGGLE_SELF_DEAF: function (e) {
            let { context: t } = e;
            tn({ deaf: !e1(t).deaf }, t), em.eachConnection(e4);
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
            let { context: t, userId: n } = e;
            if (n === $.default.getId()) return;
            let { localMutes: r } = e1(t);
            r[n] ? delete r[n] : (r[n] = !0), tn({ localMutes: r }, t), em.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
            var t, n, r, i, a, s, o;
            let { context: l, userId: u, videoToggleState: c, persist: _, isAutomatic: E } = e;
            d()(!(_ && E), 'These are not allowed to both be true.');
            let f = c === es.ZUi.DISABLED,
                { disabledLocalVideos: h } = e1(l),
                p = null !== (t = h[u]) && void 0 !== t && t,
                I = eK.has(u),
                m = c === es.ZUi.AUTO_ENABLED || c === es.ZUi.MANUAL_ENABLED;
            eE.info('disableVideo='.concat(f, ' currentlyDisabled=').concat(p, ' currentlyAutoDisabled=').concat(I, ', isVideoShown=').concat(m)), d()(!(I && !p), 'If you are auto-disabled, then you are also disabled.');
            let T = f !== p,
                S = l === ec.Yn.DEFAULT,
                g = E && T && S,
                A = _ && T && S;
            eE.info('changed='.concat(T, ' isDefaultContext=').concat(S, ' isUpdateCausedByVideoHealthManager=').concat(g, ' isManualToggleByUser=').concat(A));
            let { videoToggleStateMap: N } = e1(l);
            if ((N[u] === es.ZUi.AUTO_PROBING && c === es.ZUi.AUTO_ENABLED && (0, V.Z)(u, f ? ec.fC.AUTO_DISABLE : ec.fC.AUTO_ENABLE, m), (N[u] = c), tn({ videoToggleStateMap: N }, l, _), c === es.ZUi.AUTO_PROBING ? null === (n = er.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (r = er.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(u, !1), !ez && (eE.info('isAutoDisableAllowed='.concat(ez, ' - disabling VideoHealthManager')), null === (a = er.Z.getRTCConnection()) || void 0 === a || null === (i = a.getVideoHealthManager()) || void 0 === i || i.disable()), g)) {
                if ((!f && !I) || (f && !ez)) return;
                (0, V.Z)(u, f ? ec.fC.AUTO_DISABLE : ec.fC.AUTO_ENABLE, m), f ? eK.add(u) : eK.delete(u);
            } else A && (I && !f ? (eE.info('disallowing auto-disable for this session because of manual override by user'), (ez = !1), null === (o = er.Z.getRTCConnection()) || void 0 === o || null === (s = o.getVideoHealthManager()) || void 0 === s || s.disable(), (0, V.Z)(u, ec.fC.MANUAL_REENABLE, m)) : (0, V.Z)(u, f ? ec.fC.MANUAL_DISABLE : ec.fC.MANUAL_ENABLE, m));
            S && !f && eK.delete(u),
                f ? (h[u] = !0) : delete h[u],
                tn({ disabledLocalVideos: h }, l, _),
                em.eachConnection((e) => {
                    var t;
                    return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t);
                }, l);
        },
        AUDIO_SET_LOCAL_VOLUME: function (e) {
            let { context: t, userId: n, volume: r } = e;
            if (n === $.default.getId()) return;
            let i = t === ec.Yn.STREAM ? ec.Yh : ec.Qx,
                { localVolumes: a } = e1(t);
            r === i ? delete a[n] : (a[n] = r), tn({ localVolumes: a }, t), em.eachConnection((e) => e.setLocalVolume(n, r), t);
        },
        AUDIO_SET_LOCAL_PAN: function (e) {
            let { context: t, userId: n, left: r, right: i } = e,
                { localPans: a } = e1(t);
            (a[n] = {
                left: r,
                right: i
            }),
                tn({ localPans: a }, t),
                em.eachConnection((e) => e.setLocalPan(n, r, i), t);
        },
        AUDIO_SET_MODE: function (e) {
            let { context: t, mode: n, options: r } = e;
            tn(
                {
                    mode: n,
                    modeOptions: r
                },
                t
            ),
                em.eachConnection(e2),
                tt.update();
        },
        AUDIO_SET_INPUT_VOLUME: function (e) {
            let { volume: t } = e;
            tn({ inputVolume: e3(t) }), em.setInputVolume(t);
        },
        AUDIO_SET_OUTPUT_VOLUME: function (e) {
            let { volume: t } = e;
            tn({ outputVolume: t }), em.setOutputVolume(t);
        },
        AUDIO_SET_INPUT_DEVICE: function (e) {
            let { id: t } = e;
            tn({ inputDeviceId: (t = ts(eO, t)) }), em.setAudioInputDevice(t);
        },
        AUDIO_SET_OUTPUT_DEVICE: function (e) {
            let { id: t } = e;
            tn({ outputDeviceId: (t = ts(eR, t)) }), em.setAudioOutputDevice(t);
        },
        AUDIO_SET_ECHO_CANCELLATION: function (e) {
            let t = tn({ echoCancellation: e.enabled });
            em.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), tE(), td(e.location);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
            t_(e.enabled);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
            let t = tn({ sidechainCompressionStrength: e.strength });
            em.setSidechainCompressionStrength(t.sidechainCompressionStrength);
        },
        AUDIO_SET_LOOPBACK: function (e) {
            let { enabled: t } = e;
            return (eq = t), tE();
        },
        AUDIO_SET_NOISE_SUPPRESSION: function (e) {
            let t = tn({ noiseSuppression: e.enabled });
            em.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), tE(), td(e.location);
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
            let t = tn({ automaticGainControl: e.enabled });
            em.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), tE(), td(e.location);
        },
        AUDIO_SET_NOISE_CANCELLATION: function (e) {
            let t = tn({ noiseCancellation: e.enabled });
            em.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), tE(), td(e.location);
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
            tn({ silenceWarning: e.enabled }), tt.update();
        },
        AUDIO_SET_DEBUG_LOGGING: function (e) {
            em.setDebugLogging(e.enabled);
        },
        MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
            tn({ videoHook: e.enabled });
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
            tn({ experimentalSoundshare2: e.enabled });
        },
        AUDIO_SET_ATTENUATION: function (e) {
            let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
                i = tn({
                    attenuation: t,
                    attenuateWhileSpeakingSelf: n,
                    attenuateWhileSpeakingOthers: r
                });
            em.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
        },
        AUDIO_SET_QOS: function (e) {
            let { enabled: t } = e;
            tn({ qos: t }), em.eachConnection((e) => e.setQoS(t));
        },
        MEDIA_ENGINE_DEVICES: function (e) {
            let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
            !(function (e) {
                let t = eO;
                if (((eO = ta(e, ed.Z.Messages.NO_INPUT_DEVICES)), !E().isEqual(eO, t))) {
                    let e = e1(),
                        t = ts(eO, e.inputDeviceId);
                    em.setAudioInputDevice(t);
                }
            })(t),
                !(function (e) {
                    let t = eR;
                    if (((eR = ta(e, ed.Z.Messages.NO_OUTPUT_DEVICES)), !E().isEqual(eR, t))) {
                        let e = e1(),
                            t = ts(eR, e.outputDeviceId);
                        em.setAudioOutputDevice(t);
                    }
                })(n),
                !(function (e) {
                    ex = e.length > 0;
                    let t = ev;
                    if (((ev = ta(e, ed.Z.Messages.NO_VIDEO_DEVICES)), eb && !E().isEqual(ev, t))) {
                        var n;
                        let e = void 0 !== ev[eM],
                            r = eM === ec.w5 && (null === (n = t[ec.w5]) || void 0 === n ? void 0 : n.disabled);
                        e5(e || r);
                    }
                })(r);
        },
        AUDIO_VOLUME_CHANGE: function (e) {
            let { inputVolume: t, outputVolume: n } = e;
            tn({
                inputVolume: e3(t),
                outputVolume: n
            });
        },
        AUDIO_RESET: function () {
            m.K.remove(ef), location.reload();
        },
        AUDIO_INPUT_DETECTED: function (e) {
            let { inputDetected: t } = e;
            (eG = t), !ek && eG && ((ek = !0), tt.update());
        },
        AUDIO_SET_SUBSYSTEM: function (e) {
            em.setAudioSubsystem(e.subsystem);
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
            (eg = e.enabled),
                e.unmute &&
                    tn({
                        mute: !1,
                        deaf: !1
                    }),
                em.eachConnection(e4);
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
            let { enabled: t } = e;
            H.Z.requestPermission(el.Eu.CAMERA), e5(t);
        },
        MEDIA_ENGINE_PERMISSION: function (e) {
            let { kind: t, granted: n } = e;
            if (!n)
                switch (t) {
                    case 'audio':
                        (eg = !1), em.eachConnection(e4);
                        break;
                    case 'video':
                        e5(!1);
                }
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
            var t, n, r, i;
            let { settings: s } = e;
            if ((null == s ? void 0 : s.desktopSettings) != null) {
                let e = null,
                    r = null,
                    { sourceId: i, sound: o } = s.desktopSettings,
                    l = null !== (t = s.context) && void 0 !== t ? t : ec.Yn.DEFAULT,
                    u =
                        null !== (n = s.qualityOptions) && void 0 !== n
                            ? n
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              },
                    c = !1 === o ? null : W.Z.getPidFromDesktopSource(i);
                z.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = tl(c)), null != e && tu(e, r)),
                    !(function (e) {
                        if (e !== eN) null != a && em.setGoLiveSource(null, eN), (eN = e);
                    })(l),
                    e5(l === ec.Yn.STREAM && eb, {
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
                let e = null !== (r = s.context) && void 0 !== r ? r : ec.Yn.DEFAULT,
                    { videoDeviceGuid: t, audioDeviceGuid: n } = s.cameraSettings,
                    a = e === ec.Yn.STREAM && eb,
                    o =
                        null !== (i = s.qualityOptions) && void 0 !== i
                            ? i
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              };
                e5(a, {
                    cameraSource: {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    },
                    quality: {
                        resolution: o.resolution,
                        frameRate: o.frameRate
                    }
                });
            } else e5(eb, null);
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
            let { id: t } = e;
            tn({ videoDeviceId: (t = ts(ev, t)) }), e5();
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function (e) {
            let t = tn({ experimentalEncoders: e.enabled });
            em.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
            return eA !== e.required && ((eA = e.required), !e.required && em.interact(), !0);
        },
        USER_SETTINGS_MODAL_INIT: tp,
        USER_SETTINGS_MODAL_SET_SECTION: tp,
        CERTIFIED_DEVICES_SET: function () {
            return em.eachConnection(e7), !1;
        },
        RPC_APP_CONNECTED: function (e) {
            let { application: t } = e;
            eS.add(t.id);
        },
        RPC_APP_DISCONNECTED: function (e) {
            let { application: t } = e;
            eS.delete(t.id);
        },
        OVERLAY_INITIALIZE: function (e) {
            let { mediaEngineState: t } = e;
            (eT = t.settingsByContext), (eO = t.inputDevices), (eR = t.outputDevices), (eQ = t.appSupported), (eH = t.krispModuleLoaded), (eN = t.goLiveContext);
        },
        MEDIA_ENGINE_SET_OPEN_H264: function (e) {
            let { enabled: t } = e,
                n = tn({ openH264: t });
            em.setH264Enabled(n.hardwareEncoding || n.openH264),
                em.eachConnection((e) => {
                    var t;
                    return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
                });
        },
        MEDIA_ENGINE_SET_HARDWARE_ENCODING: function (e) {
            var t, n;
            let { enabled: r } = e,
                i = tn({ hardwareEncoding: r });
            em.eachConnection((e) => {
                var t;
                return e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t);
            }),
                em.setH264Enabled(i.hardwareEncoding || i.openH264),
                em.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t),
                em.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n);
        },
        APP_STATE_UPDATE: function (e) {
            let { state: t } = e,
                n = L.Z.isEnabled();
            if (t === es.$7l.BACKGROUND && eb && !n) (ew = !0), e5(!1);
            else {
                if (t !== es.$7l.ACTIVE || !ew) return !1;
                (ew = !1), e5(!0);
            }
            return !0;
        },
        SET_CHANNEL_BITRATE: function (e) {
            em.eachConnection((t) => t.setBitRate(e.bitrate));
        },
        SET_VAD_PERMISSION: function (e) {
            let { hasPermission: t } = e,
                n = !t;
            if (n === eL) return !1;
            (eL = n), em.eachConnection(e4);
        },
        SET_NATIVE_PERMISSION: function (e) {
            let { state: t, permissionType: n } = e,
                r = t === el.PQ.ACCEPTED;
            switch (n) {
                case el.Eu.AUDIO:
                    (eW = !0), em.eachConnection(e4);
                    break;
                case el.Eu.CAMERA:
                    !r && eb && e5(!1);
                    break;
                default:
                    return !1;
            }
        },
        SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
            em.eachConnection((t) => t.applyVideoQualityMode(e.mode));
        },
        MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
            let { enabled: t } = e,
                n = tn({ aecDumpEnabled: t });
            em.setAecDump(n.aecDumpEnabled);
        },
        CHANNEL_DELETE: function () {
            if ((!eb && null == a) || null != er.Z.getRTCConnectionId()) return !1;
            e5(!1, null);
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
            return !!eY && ((eY = !1), !0);
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
            let { settings: t } = e;
            em.applyMediaFilterSettings(t).finally(() => {
                (ej = !1), r.emitChange();
            });
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
            ej = !0;
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
            ej = !1;
        },
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            let {
                settings: { type: t },
                local: n,
                wasSaved: r
            } = e;
            if (t !== eu.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
            to(!0);
        },
        CLIPS_INIT: function (e) {
            let { sourceId: t, applicationName: n, quality: i } = e,
                a = O.Z.isDecoupledGameClippingEnabled(),
                o = O.Z.getSettings().decoupledClipsEnabled;
            if (!a || !o || null == g.Z) return;
            let l = null,
                u = null,
                c = W.Z.getPidFromDesktopSource(t);
            ({ soundshareId: l, soundshareSession: u } = tl(c));
            let d = {
                desktopSource: {
                    id: t,
                    sourcePid: c,
                    soundshareId: l,
                    soundshareSession: u
                },
                quality: i
            };
            null != s && s.desktopSource.id !== d.desktopSource.id && (em.setClipsSource(null), (0, z.isWindows)() && null != s.desktopSource.soundshareId && A.pn(s.desktopSource.soundshareId)), null != l && tu(l, u), (s = d);
            let { hdrCaptureMode: _ } = x.Z.getCurrentConfig({ location: 'f627ab_12' }, { autoTrackExposure: !1 }),
                E = e1().videoHook;
            em.setClipsSource({
                desktopDescription: {
                    id: s.desktopSource.id,
                    soundshareId: s.desktopSource.soundshareId,
                    useVideoHook: E,
                    useGraphicsCapture: e8(),
                    useLoopback: r.getExperimentalSoundshare(),
                    useQuartzCapturer: !0,
                    allowScreenCaptureKit: e9(),
                    videoHookStaleFrameTimeoutMs: 500,
                    graphicsCaptureStaleFrameTimeoutMs: ep,
                    hdrCaptureMode: _
                },
                quality: i,
                applicationName: n
            });
        },
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            !1 === t.decoupledClipsEnabled && ((s = null), em.setClipsSource(null));
        },
        MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
            e$ = e.enabled;
        }
    })),
    (t.Z = r);
