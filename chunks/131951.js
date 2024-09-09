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
    O = n(565885),
    R = n(435064),
    v = n(779618),
    C = n(710845),
    y = n(811660),
    L = n(353926),
    D = n(646047),
    b = n(594190),
    M = n(502286),
    P = n(227196),
    U = n(12898),
    w = n(294473),
    x = n(706629),
    G = n(926951),
    k = n(836157),
    B = n(498600),
    F = n(998594),
    V = n(529558),
    H = n(111672),
    Z = n(874785),
    Y = n(636458),
    j = n(441167),
    W = n(338336),
    K = n(751571),
    z = n(725380),
    q = n(581883),
    Q = n(626135),
    X = n(12647),
    $ = n(70956),
    J = n(358085),
    ee = n(960048),
    et = n(998502),
    en = n(13140),
    er = n(314897),
    ei = n(967368),
    ea = n(463395),
    es = n(592125),
    eo = n(858340),
    el = n(19780),
    eu = n(704806),
    ec = n(631768),
    ed = n(981631),
    e_ = n(70722),
    eE = n(761274),
    ef = n(526761),
    eh = n(65154),
    ep = n(689938);
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
let em = new C.Z('MediaEngineStore');
((u = o || (o = {}))[(u.DETACHED = 0)] = 'DETACHED'), (u[(u.WAITING = 1)] = 'WAITING'), (u[(u.ATTACHED = 2)] = 'ATTACHED'), (u[(u.STARTED = 3)] = 'STARTED'), (u[(u.PLAYING = 4)] = 'PLAYING'), (u[(u.SILENCE = 5)] = 'SILENCE');
let eT = 'MediaEngineStore',
    eS = {
        left: 1,
        right: 1
    },
    eg = 5 * $.Z.Millis.SECOND;
function eA() {
    return {
        mode: ed.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: J.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: eh.Qx,
        outputVolume: eh.Qx,
        inputDeviceId: eh.w5,
        outputDeviceId: eh.w5,
        videoDeviceId: eh.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eN.supports(eh.AN.VIDEO_HOOK),
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
let eN = (0, I.Mt)((0, I.jj)()),
    eO = {},
    eR = new Set([eh.Yn.DEFAULT]),
    ev = eN.supports(eh.AN.AUTO_ENABLE),
    eC = !1,
    ey = eh.Yn.STREAM,
    eL = { [eh.w5]: tu(ep.Z.Messages.NO_INPUT_DEVICES) },
    eD = { [eh.w5]: tu(ep.Z.Messages.NO_OUTPUT_DEVICES) },
    eb = { [eh.w5]: tu(ep.Z.Messages.NO_VIDEO_DEVICES) },
    eM = !1,
    eP = !1,
    eU = !1,
    ew = !1,
    ex = !1,
    eG = eh.Av,
    ek = !1,
    eB = !1,
    eF = !1,
    eV = !1,
    eH = null,
    eZ = !1,
    eY = !1,
    ej = !1,
    eW = !1,
    eK = !1,
    ez = null,
    eq = !1,
    eQ = !1,
    eX = !1;
K.Z.hasPermission(eE.Eu.AUDIO, { showAuthorizationError: !1 }), K.Z.hasPermission(eE.Eu.CAMERA, { showAuthorizationError: !1 });
let e$ = new Set(),
    eJ = !1,
    e0 = !1,
    e1 = {},
    e2 = null,
    e3 = !0,
    e4 = {},
    e5 = 5 * $.Z.Millis.SECOND;
function e6() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT,
        t = eO[e];
    return null == t && ((t = eA()), (eO[e] = t)), t;
}
function e7(e) {
    let t = e6(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp:
            t.modeOptions.vadUseKrisp &&
            (function () {
                return eK || !1;
            })(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function e8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Qx;
    return E().clamp(e, 0, t);
}
function e9(e) {
    let t = e6(e.context),
        n = !ev || t.mute || t.deaf;
    e.context === eh.Yn.DEFAULT ? (n = n || eM || eP || eU || !K.Z.didHavePermission(eE.Eu.AUDIO)) : e.context === eh.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eh.Yn.DEFAULT && N.Z.updateNativeMute();
}
function te() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        o = a;
    if (((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, J.isWindows)() && A.pn(o.desktopSource.soundshareId), eN.setGoLiveSource(null, ey)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == s ? void 0 : null === (t = s.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eN.setGoLiveSource(null, ey), (ex || i) && ((eG = (ex = i) ? td(eb, e6().videoDeviceId) : eh.Av), eN.setVideoInputDevice(eG)), (a = s), null != s)) {
        let e = {
            resolution: s.quality.resolution,
            frameRate: s.quality.frameRate
        };
        if (null != s.desktopSource) {
            let { hdrCaptureMode: t } = B.Z.getCurrentConfig({ location: 'f627ab_2' }, { autoTrackExposure: !1 }),
                n = e6().videoHook;
            eN.setGoLiveSource(
                {
                    desktopDescription: {
                        id: s.desktopSource.id,
                        soundshareId: s.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: tr(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: ti(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: eg,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                ey
            );
        }
        null != s.cameraSource &&
            eN.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: s.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: s.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                ey
            );
    }
}
function tt(e, t, n, r) {
    var i;
    let a = null !== (i = null == e ? void 0 : e.soundshareSession) && void 0 !== i ? i : '';
    null == e4[a] && (e4[a] = new Set());
    let s = null != t && !e4[a].has(t);
    s && e4[a].add(t),
        (null == t || s) &&
            Q.default.track(ed.rMx.SOUNDSHARE_FAILED, {
                soundshare_failure_code: t,
                soundshare_failure_reason: n,
                soundshare_failure_will_retry: r,
                ...(0, M.Z)(e)
            });
}
function tn(e) {
    let t = e6(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(ea.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ea.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ea.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, J.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tr() {
    return (0, J.isWindows)() && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, e_.nz);
}
function ti() {
    return (0, J.isMac)() && eN.supports(eh.AN.SCREEN_CAPTURE_KIT) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, e_.C7);
}
function ta() {
    var e;
    let t = (null === (e = es.Z.getChannel(ez)) || void 0 === e ? void 0 : e.type) === ed.d4z.GUILD_STAGE_VOICE,
        n = r.getHardwareEncoding();
    return !t && n && G.Z.supportsSimulcast();
}
let ts = new (class {
    start() {
        !this.started && ((this.started = !0), eN.on(I.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eN.removeListener(I.aB.Silence, this.handleSilence),
            S.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = e6();
        !eZ && el.Z.getState() === ed.hes.RTC_CONNECTED && e.mode === ed.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
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
                                    (S.Z.dispatch({
                                        type: 'AUDIO_INPUT_DETECTED',
                                        inputDetected: t
                                    }),
                                    e && (eY = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function to(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = e6(t);
    return Object.assign(r, e), !__OVERLAY__ && n && m.K.set(eT, eO), r;
}
function tl() {
    !ev &&
        eN.enable().then(() =>
            S.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tu(e) {
    return {
        id: eh.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function tc(e, t) {
    if (0 === e.length) {
        let e = tu(t);
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
function td(e, t) {
    var n;
    let r = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
    return null != r ? r.id : t;
}
function t_() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null !== (e = q.Z.settings.audioContextSettings) && void 0 !== e
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === ef.u0.USER ? eh.Yn.DEFAULT : eh.Yn.STREAM,
            a = i === eh.Yn.STREAM ? eh.Yh : eh.Qx,
            s = null !== (t = r[e]) && void 0 !== t ? t : {},
            { localMutes: o, localVolumes: l } = e6(i);
        for (let [e, t] of Object.entries(s))
            null == (0, z.Ky)(i, e) &&
                (t.muted ? (o[e] = !0) : delete o[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eN.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(o), ...Object.keys(l)]))
                null == s[e] &&
                    (delete o[e],
                    delete l[e],
                    eN.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        to(
            {
                localMutes: o,
                localVolumes: l
            },
            i
        );
    }
}
function tE(e) {
    if (null == r)
        return (
            em.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : X.Z.getAudioPid(e),
            n = '';
        return (
            null != t && (n = X.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n
            }
        );
    }
}
function tf(e, t) {
    (0, J.isWindows)() &&
        A.YT(e, { soundshare_session: t }).then((t) => {
            null != t &&
                !b.ZP.shouldContinueWithoutElevatedProcessForPID(e) &&
                S.Z.wait(() => {
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                        errorMessage: t
                    });
                });
        });
}
function th() {
    let e = eh.Yn.DEFAULT,
        { videoToggleStateMap: t } = e6(e);
    for (let [e, n] of Object.entries(t)) n === ed.ZUi.AUTO_PROBING && delete t[e];
    to({ videoToggleStateMap: t }, e, !1);
}
function tp(e) {
    let t = e6();
    Q.default.track(ed.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function tI(e) {
    let t = to({ sidechainCompression: e });
    eN.setSidechainCompression(t.sidechainCompression);
}
function tm() {
    let e = e6(),
        t = e.inputDeviceId,
        n = ea.Z.hasEchoCancellation(t) || e.echoCancellation,
        r = ea.Z.hasNoiseSuppression(t) || e.noiseSuppression,
        i = ea.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
        a = e.noiseCancellation;
    eN.setLoopback(e0, {
        echoCancellation: n,
        noiseSuppression: r,
        automaticGainControl: i,
        noiseCancellation: a
    });
}
function tT() {
    return eK || !1;
}
async function tS() {
    try {
        await et.ZP.ensureModule('discord_krisp'), et.ZP.requireModule('discord_krisp'), (eK = !0), r.emitChange();
    } catch (t) {
        em.warn('Failed to load Krisp module: '.concat(t.message)), ee.Z.captureException(t);
        let e = eh.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? eh.H3.INITIALIZED : n;
        }
        Q.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), to({ noiseCancellation: !1 });
    } finally {
        eW = !1;
    }
}
function tg(e) {
    let { section: t } = e;
    return t === ed.oAB.VOICE && tl(), !1;
}
class tA extends (l = p.ZP.Store) {
    initialize() {
        eN.on(I.aB.Connection, (e) => {
            var t, n;
            e7(e), e9(e), tn(e);
            let i = e6();
            e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = i.openH264) || void 0 === n || n);
            let { useExperimentalRateControl: s } = Y.Z.getCurrentConfig({ location: 'f627ab_4' }, { autoTrackExposure: !1 });
            s && e.setExperimentFlag(eh.V8.VIDEOTOOLBOX_RATE_CONTROL, !0);
            let o = el.Z.getGuildId(),
                {
                    muteBeforeProcessing: l,
                    pttBeforeProcessing: u,
                    skipEncode: c
                } = (null != o ? x.Z : w.Z).getCurrentConfig(
                    {
                        location: 'setupMediaEngine',
                        ...(null != o && { guildId: o })
                    },
                    { autoTrackExposure: !0 }
                );
            l && e.setExperimentFlag(eh.V8.MUTE_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(eh.V8.PTT_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(eh.V8.SKIP_ENCODE, !0);
            let { resetOnErrors: d, fallbackOnErrors: _, fallbackOnConsecutiveErrors: E } = Z.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 });
            d && e.setExperimentFlag(eh.V8.RESET_DECODER_ON_ERRORS, !0), _ && e.setExperimentFlag(eh.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), E && e.setExperimentFlag(eh.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            if (e.context === eh.Yn.STREAM && ta()) {
                let t = G.Z.goliveSimulcastFlag();
                void 0 !== t && e.setExperimentFlag(t, !0);
            }
            if (((0, J.isWindows)() ? ((null == e2 ? void 0 : e2.startsWith('NVIDIA')) ? e.setExperimentFlag(eh.V8.SIGNAL_AV1, !0) : (null == e2 ? void 0 : e2.startsWith('AMD')) && U.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(eh.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eh.V8.SIGNAL_AV1_DECODE, !0)) : ((0, J.isMac)() || (0, J.isLinux)()) && e.setExperimentFlag(eh.V8.SIGNAL_AV1_DECODE, !0), (0, J.isWindows)() && e.setExperimentFlag(eh.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eN.setHasFullbandPerformance((0, y.b)()), e.setRemoteAudioHistory(0), (0, v.Z)(r))) {
                let t = R.Z.getSettings();
                e.setExperimentFlag(eh.V8.STREAMER_CLIP, t.clipsEnabled);
                let { enableViewerClipping: n } = j.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
                e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eh.ux);
                let { allowQualityDecoupling: r } = O.Z.getCurrentConfig({ location: 'MediaEngineStore_setupMediaEngine' }, { autoTrackExposure: !0 });
                e.setQualityDecoupling(r);
            }
            for (let t of ((i = e6(e.context)), e.setPostponeDecodeLevel(100), Object.keys(i.localMutes))) t !== er.default.getId() && e.setLocalMute(t, i.localMutes[t]);
            for (let t of Object.keys(i.localVolumes)) t !== er.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
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
                e.context === eh.Yn.DEFAULT &&
                    ((eB = !1),
                    e.on(I.Sh.SpeakingWhileMuted, () => {
                        (eB = !0), r.emitChange();
                    })),
                e.on(I.Sh.DesktopSourceEnd, () => {
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                        settings: { context: e.context }
                    });
                }),
                e.on(I.Sh.SoundshareAttached, () => {
                    (null == a ? void 0 : a.desktopSource) != null && Q.default.track(ed.rMx.SOUNDSHARE_ATTACHED, (0, M.Z)(null == a ? void 0 : a.desktopSource));
                }),
                e.on(I.Sh.SoundshareFailed, (e) => {
                    let { failureCode: t, failureReason: n, willRetry: r } = e;
                    tt(null == a ? void 0 : a.desktopSource, t, n, r);
                }),
                e.on(I.Sh.SoundshareSpeaking, () => {
                    (null == a ? void 0 : a.desktopSource) != null && (Q.default.track(ed.rMx.SOUNDSHARE_TRANSMITTING, (0, M.Z)(null == a ? void 0 : a.desktopSource)), null != eo.Z.getHookError(ed.K3D.SOUND) && S.Z.wait(() => S.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
                });
            let f = new T.V7();
            e.on(I.Sh.SoundshareTrace, (e) => {
                switch (e.type) {
                    case 'soundshare_attach_requested':
                        f.start(e5, () => {
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
                            (tt(null == a ? void 0 : a.desktopSource, n, t, r),
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
                        Q.default.track(ed.rMx.VIDEOHOOK_INITIALIZED, {
                            backend: e,
                            format: t,
                            framebuffer_format: n,
                            sample_count: r,
                            success: i,
                            reinitialization: s,
                            ...(0, M.Z)(null == a ? void 0 : a.desktopSource)
                        });
                }),
                e.on(I.Sh.NoiseCancellationError, (e) => {
                    em.warn('noisecancellererror event: '.concat(e)),
                        (eq = !0),
                        Q.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                    em.warn('voiceactivitydetectorerror event: '.concat(e)),
                        Q.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.Z.dispatch({
                            type: 'AUDIO_SET_MODE',
                            context: eh.Yn.DEFAULT,
                            mode: ed.pM4.VOICE_ACTIVITY,
                            options: {
                                ...e6(eh.Yn.DEFAULT).modeOptions,
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
                e.setBitRate(ei.Z.bitrate),
                e.applyVideoQualityMode(ec.Z.mode);
        }),
            eN.on(I.aB.DeviceChange, (e, t, n) => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_DEVICES',
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n
                });
            }),
            eN.on(I.aB.VolumeChange, (e, t) => {
                S.Z.dispatch({
                    type: 'AUDIO_VOLUME_CHANGE',
                    inputVolume: e,
                    outputVolume: t
                });
            }),
            eN.on(I.aB.DesktopSourceEnd, () => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: null
                });
            }),
            eN.on(I.aB.AudioPermission, (e) => {
                (eX = !0),
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_PERMISSION',
                        kind: 'audio',
                        granted: e
                    });
            }),
            eN.on(I.aB.VideoPermission, (e) => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'video',
                    granted: e
                });
            }),
            eN.on(I.aB.WatchdogTimeout, async () => {
                let e;
                try {
                    await X.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
                } catch (t) {
                    'number' == typeof t.status && (e = t.status);
                }
                em.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), Q.default.track(ed.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
            }),
            eN.on(I.aB.VideoInputInitialized, (e) => {
                Q.default.track(ed.rMx.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * $.Z.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy
                });
            }),
            eN.on(I.aB.ClipsRecordingRestartNeeded, () => {
                S.Z.dispatch({ type: 'CLIPS_RESTART' });
            }),
            eN.on(I.aB.ClipsInitFailure, (e, t) => {
                S.Z.wait(() => {
                    S.Z.dispatch({
                        type: 'CLIPS_INIT_FAILURE',
                        errMsg: e,
                        applicationName: t
                    });
                });
            }),
            eN.on(I.aB.ClipsRecordingEnded, (e, t) => {
                var n, r;
                (null == s ? void 0 : null === (n = s.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == a ? void 0 : null === (r = a.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t && A.pn(t), (s = null));
            }),
            eN.on(I.aB.NativeScreenSharePickerUpdate, (e) => {
                F.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                        existing: e
                    });
            }),
            eN.on(I.aB.NativeScreenSharePickerCancel, (e) => {
                F.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                        existing: e
                    });
            }),
            eN.on(I.aB.NativeScreenSharePickerError, (e) => {
                F.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                        error: e
                    });
            }),
            eN.on(I.aB.AudioDeviceModuleError, (e, t, n) => {
                Q.default.track(ed.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                    audio_device_module: e,
                    code: t,
                    device_name: n
                });
            }),
            ts.reset(),
            (0, eu.q)().then((e) => {
                null != e && (e2 = e.gpu_brand);
            }),
            !(function () {
                var e;
                let t = m.K.get('audio');
                null != t && (m.K.set(eT, { [eh.Yn.DEFAULT]: t }), m.K.remove('audio')),
                    (eO = null !== (e = m.K.get(eT)) && void 0 !== e ? e : {}),
                    E().each(eO, (e) => {
                        if ((E().defaultsDeep(e, eA()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, en.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)), !e.qosMigrated && ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                            var t;
                            (e.vadThrehsoldMigrated = !0), (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60);
                        }
                        (0, J.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : 1 !== e.ncUseKrispSettingVersion && ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), 1 !== e.hardwareEnabledVersion && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = 1)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
                    }),
                    (function () {
                        var e, t, n;
                        let r = e6();
                        eN.setAudioInputDevice(r.inputDeviceId), eN.setAudioOutputDevice(r.outputDeviceId), te(), eN.setInputVolume(r.inputVolume), eN.setOutputVolume(r.outputVolume), eN.setH264Enabled(null === (e = r.hardwareEncoding) || void 0 === e || e || r.openH264), eN.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t), eN.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n), eN.setAecDump(r.aecDumpEnabled), eN.setSidechainCompression(r.sidechainCompression), eN.setSidechainCompressionStrength(r.sidechainCompressionStrength);
                    })();
            })(),
            ((0, J.isWindows)() || (0, J.isLinux)() || ((0, J.isMac)() && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, '>=21.0.0'))) && !__OVERLAY__ && !eW && !eK ? ((eW = !0), tS()) : (0, J.isWeb)() && eN.supports(eh.AN.NOISE_CANCELLATION) ? ((eK = !0), r.emitChange()) : (0, J.isWeb)() && to({ noiseCancellation: !1 }),
            th(),
            (e1 = {
                [eh.AN.VIDEO]: eN.supports(eh.AN.VIDEO),
                [eh.AN.DESKTOP_CAPTURE]: eN.supports(eh.AN.DESKTOP_CAPTURE),
                [eh.AN.HYBRID_VIDEO]: eN.supports(eh.AN.HYBRID_VIDEO)
            }),
            this.waitFor(er.default, ea.Z, es.Z, eo.Z, el.Z, b.ZP, K.Z.storage, q.Z, L.Z, R.Z);
    }
    supports(e) {
        return eN.supports(e);
    }
    supportsInApp(e) {
        return e1[e] || eN.supports(e);
    }
    isSupported() {
        return eN.supported();
    }
    isExperimentalEncodersSupported() {
        return eN.supports(eh.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eN.supports(eh.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return eK || !1;
    }
    isNoiseCancellationError() {
        return eq;
    }
    isAutomaticGainControlSupported() {
        return eN.supports(eh.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return eK || !1;
    }
    isAecDumpSupported() {
        return eN.supports(eh.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eN.supports(eh.AN.VIDEO) && eN.supports(eh.AN.SIMULCAST);
    }
    getAecDump() {
        return e6().aecDumpEnabled;
    }
    getMediaEngine() {
        return eN;
    }
    getVideoComponent() {
        return eN.supports(eh.AN.DIRECT_VIDEO) && eN.setUseDirectVideo(!0), eN.Video;
    }
    getCameraComponent() {
        return eN.supports(eh.AN.DIRECT_VIDEO) && eN.setUseDirectVideo(!0), eN.Camera;
    }
    isEnabled() {
        return ev;
    }
    isMute() {
        return this.isSelfMute() || eM;
    }
    isDeaf() {
        return this.isSelfDeaf() || ew;
    }
    hasContext(e) {
        return null != eO[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return e === eh.Yn.DEFAULT && eP;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return !this.isEnabled() || e6(e).mute || !K.Z.didHavePermission(eE.Eu.AUDIO) || this.isSelfDeaf(e) || (e === eh.Yn.DEFAULT && eU);
    }
    shouldSkipMuteUnmuteSound() {
        let { airpodsMuteSupported: e } = P.Z.getCurrentConfig({ location: 'shouldSkipMuteUnmuteSound' }, { autoTrackExposure: !0 });
        return !!e && ek;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        ek = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ea.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return e3;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return !this.isSupported() || e6(e).deaf;
    }
    isVideoEnabled() {
        return ex && eV;
    }
    isVideoAvailable() {
        return Object.values(eb).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.STREAM;
        return ey === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.STREAM;
        return ey === t && null != a && (null === (e = a.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return e !== er.default.getId() && (e6(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eN.supports(eh.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return null !== (t = e6(n).disabledLocalVideos[e]) && void 0 !== t && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return null !== (t = e6(n).videoToggleStateMap[e]) && void 0 !== t ? t : ed.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return t === eh.Yn.DEFAULT && e$.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return e === eh.Yn.DEFAULT && e$.size > 0;
    }
    isMediaFilterSettingLoading() {
        return eQ;
    }
    isNativeAudioPermissionReady() {
        return eX;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return ey;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
            n = e6(t).localPans[e];
        return null != n ? n : eS;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
            n = t === eh.Yn.STREAM ? eh.Yh : eh.Qx,
            r = e6(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return e6().inputVolume;
    }
    getOutputVolume() {
        return e6().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return e6(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return e6(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(eO, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === ed.pM4.PUSH_TO_TALK && eR.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return td(eL, e6().inputDeviceId);
    }
    getOutputDeviceId() {
        return td(eD, e6().outputDeviceId);
    }
    getVideoDeviceId() {
        return td(eb, e6().videoDeviceId);
    }
    getInputDevices() {
        return eL;
    }
    getOutputDevices() {
        return eD;
    }
    getVideoDevices() {
        return eb;
    }
    getEchoCancellation() {
        let e = e6();
        return ea.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e6().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return e6().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return e6().h265Enabled;
    }
    getLoopback() {
        return eN.getLoopback();
    }
    getNoiseSuppression() {
        let e = e6();
        return ea.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = e6();
        return ea.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return e6().noiseCancellation;
    }
    getExperimentalEncoders() {
        return e6().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null === (e = e6().hardwareEncoding) || void 0 === e || e;
    }
    getEnableSilenceWarning() {
        return e6().silenceWarning;
    }
    getDebugLogging() {
        return eN.getDebugLogging();
    }
    getQoS() {
        return e6().qos;
    }
    getAttenuation() {
        return e6().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return e6().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return e6().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return eN.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eN.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return e6(e);
    }
    getState() {
        return {
            settingsByContext: eO,
            inputDevices: eL,
            outputDevices: eD,
            appSupported: e1,
            krispModuleLoaded: eK,
            goLiveSource: a,
            goLiveContext: ey
        };
    }
    getInputDetected() {
        return eH;
    }
    getNoInputDetectedNotice() {
        return eY;
    }
    getPacketDelay() {
        return J.isPlatformEmbedded || this.getMode() !== ed.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eN.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eC;
    }
    getVideoHook() {
        return e6().videoHook;
    }
    supportsVideoHook() {
        return eN.supports(eh.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = e6().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eN.supports(eh.AN.EXPERIMENTAL_SOUNDSHARE) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, e_.I9);
    }
    getOpenH264() {
        return e6().openH264;
    }
    getEverSpeakingWhileMuted() {
        return eB;
    }
    supportsScreenSoundshare() {
        return ((0, J.isMac)() && eN.supports(eh.AN.SOUNDSHARE) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, e_.yG) && ti()) || ((0, J.isWindows)() && eN.supports(eh.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare());
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT,
            t = this.supports(eh.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === eh.Yn.DEFAULT ? eh.Tr.VIDEO : eh.Tr.SCREEN,
                          quality: 100
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eh.Yn.DEFAULT || ta()) &&
                t.push({
                    rid: '50',
                    type: e === eh.Yn.DEFAULT ? eh.Tr.VIDEO : eh.Tr.SCREEN,
                    quality: 50
                }),
            t
        );
    }
    getSupportedSecureFramesProtocolVersion(e) {
        var t;
        let n = eN.getSupportedSecureFramesProtocolVersion(),
            r = V.m.getCurrentConfig({ location: 'MediaEngineStore' }),
            i =
                null != e
                    ? V.N.getCurrentConfig({
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
eI(tA, 'displayName', 'MediaEngineStore'),
    (r = new tA(S.Z, {
        VOICE_CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
            if ((r !== n && te(i, null), null != t || null == n)) {
                ej = !1;
                return;
            }
            if (ej) return;
            ej = !0;
            let a = e6();
            (a.mute || a.deaf) &&
                (to({
                    deaf: !1,
                    mute: !1
                }),
                eN.eachConnection(e9));
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => (i === t.sessionId ? ((eM = t.mute || t.suppress), (ew = t.deaf), eN.eachConnection(e9), te(!(null != t.guildId && null != t.channelId && null != ez && ez !== t.channelId) && ex), (ez = t.channelId), !0) : (!__OVERLAY__ && t.userId === er.default.getId() && null == el.Z.getChannelId() && te(!1, null), e)), !1);
        },
        CONNECTION_OPEN: function (e) {
            (i = e.sessionId),
                (eM = !1),
                (ew = !1),
                !(0, J.isWeb)() &&
                    H.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                        let t = e6();
                        !e.sidechainAvailable && t.sidechainCompression ? (to({ sidechainCompressionSettingVersion: 0 }), tI(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < 1 && (to({ sidechainCompressionSettingVersion: 1 }), tI(e.sidechainEnabled));
                    }),
                t_();
        },
        CONNECTION_CLOSED: function () {
            i = null;
        },
        RTC_CONNECTION_STATE: function (e) {
            switch (e.state) {
                case ed.hes.CONNECTING:
                    tl();
                    break;
                case ed.hes.RTC_CONNECTING:
                    (eZ = !1), (eY = !1);
                    break;
                case ed.hes.RTC_CONNECTED:
                    te();
                    break;
                case ed.hes.DISCONNECTED:
                    (function () {
                        if (0 === e$.size) return;
                        let e = eh.Yn.DEFAULT,
                            { disabledLocalVideos: t } = e6(e);
                        e$.forEach((n) => {
                            d()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eN.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            e$.clear(),
                            to({ disabledLocalVideos: t }, e, !1);
                    })(),
                        th();
            }
            ts.update();
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
            let { mute: t } = e;
            (eP = t), eN.eachConnection(e9);
        },
        AUDIO_TOGGLE_SELF_MUTE: function (e) {
            let { context: t, skipMuteUnmuteSoundEffect: n } = e,
                { mute: r, deaf: i } = e6(t);
            if (t === eh.Yn.DEFAULT && (K.Z.requestPermission(eE.Eu.AUDIO), eU)) return !1;
            !(r = !i && !r) && (i = !1),
                n && (ek = !0),
                to(
                    {
                        mute: r,
                        deaf: i
                    },
                    t
                ),
                eN.eachConnection(e9);
        },
        AUDIO_SET_SELF_MUTE: function (e) {
            let { context: t, mute: n } = e;
            to({ mute: n }, t), eN.eachConnection(e9);
        },
        AUDIO_TOGGLE_SELF_DEAF: function (e) {
            let { context: t } = e;
            to({ deaf: !e6(t).deaf }, t), eN.eachConnection(e9);
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
            let { context: t, userId: n } = e;
            if (n === er.default.getId()) return;
            let { localMutes: r } = e6(t);
            r[n] ? delete r[n] : (r[n] = !0), to({ localMutes: r }, t), eN.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
            var t, n, r, i, a, s, o;
            let { context: l, userId: u, videoToggleState: c, persist: _, isAutomatic: E } = e;
            d()(!(_ && E), 'These are not allowed to both be true.');
            let f = c === ed.ZUi.DISABLED,
                { disabledLocalVideos: h } = e6(l),
                p = null !== (t = h[u]) && void 0 !== t && t,
                I = e$.has(u),
                m = c === ed.ZUi.AUTO_ENABLED || c === ed.ZUi.MANUAL_ENABLED;
            em.info('disableVideo='.concat(f, ' currentlyDisabled=').concat(p, ' currentlyAutoDisabled=').concat(I, ', isVideoShown=').concat(m)), d()(!(I && !p), 'If you are auto-disabled, then you are also disabled.');
            let T = f !== p,
                S = l === eh.Yn.DEFAULT,
                g = E && T && S,
                A = _ && T && S;
            em.info('changed='.concat(T, ' isDefaultContext=').concat(S, ' isUpdateCausedByVideoHealthManager=').concat(g, ' isManualToggleByUser=').concat(A));
            let { videoToggleStateMap: N } = e6(l);
            if ((N[u] === ed.ZUi.AUTO_PROBING && c === ed.ZUi.AUTO_ENABLED && (0, W.Z)(u, f ? eh.fC.AUTO_DISABLE : eh.fC.AUTO_ENABLE, m), (N[u] = c), to({ videoToggleStateMap: N }, l, _), c === ed.ZUi.AUTO_PROBING ? null === (n = el.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (r = el.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(u, !1), !eJ && (em.info('isAutoDisableAllowed='.concat(eJ, ' - disabling VideoHealthManager')), null === (a = el.Z.getRTCConnection()) || void 0 === a || null === (i = a.getVideoHealthManager()) || void 0 === i || i.disable()), g)) {
                if ((!f && !I) || (f && !eJ)) return;
                (0, W.Z)(u, f ? eh.fC.AUTO_DISABLE : eh.fC.AUTO_ENABLE, m), f ? e$.add(u) : e$.delete(u);
            } else A && (I && !f ? (em.info('disallowing auto-disable for this session because of manual override by user'), (eJ = !1), null === (o = el.Z.getRTCConnection()) || void 0 === o || null === (s = o.getVideoHealthManager()) || void 0 === s || s.disable(), (0, W.Z)(u, eh.fC.MANUAL_REENABLE, m)) : (0, W.Z)(u, f ? eh.fC.MANUAL_DISABLE : eh.fC.MANUAL_ENABLE, m));
            S && !f && e$.delete(u),
                f ? (h[u] = !0) : delete h[u],
                to({ disabledLocalVideos: h }, l, _),
                eN.eachConnection((e) => {
                    var t;
                    return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t);
                }, l);
        },
        AUDIO_SET_LOCAL_VOLUME: function (e) {
            let { context: t, userId: n, volume: r } = e;
            if (n === er.default.getId()) return;
            let i = t === eh.Yn.STREAM ? eh.Yh : eh.Qx,
                { localVolumes: a } = e6(t);
            r === i ? delete a[n] : (a[n] = r), to({ localVolumes: a }, t), eN.eachConnection((e) => e.setLocalVolume(n, r), t);
        },
        AUDIO_SET_LOCAL_PAN: function (e) {
            let { context: t, userId: n, left: r, right: i } = e,
                { localPans: a } = e6(t);
            (a[n] = {
                left: r,
                right: i
            }),
                to({ localPans: a }, t),
                eN.eachConnection((e) => e.setLocalPan(n, r, i), t);
        },
        AUDIO_SET_MODE: function (e) {
            let { context: t, mode: n, options: r } = e;
            to(
                {
                    mode: n,
                    modeOptions: r
                },
                t
            ),
                eN.eachConnection(e7),
                ts.update();
        },
        AUDIO_SET_INPUT_VOLUME: function (e) {
            let { volume: t } = e;
            to({ inputVolume: e8(t) }), eN.setInputVolume(t);
        },
        AUDIO_SET_OUTPUT_VOLUME: function (e) {
            let { volume: t } = e;
            to({ outputVolume: t }), eN.setOutputVolume(t);
        },
        AUDIO_SET_INPUT_DEVICE: function (e) {
            let { id: t } = e;
            to({ inputDeviceId: (t = td(eL, t)) }), eN.setAudioInputDevice(t);
        },
        AUDIO_SET_OUTPUT_DEVICE: function (e) {
            let { id: t } = e;
            to({ outputDeviceId: (t = td(eD, t)) }), eN.setAudioOutputDevice(t);
        },
        AUDIO_SET_ECHO_CANCELLATION: function (e) {
            let t = to({ echoCancellation: e.enabled });
            eN.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), tm(), tp(e.location);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
            tI(e.enabled);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
            let t = to({ sidechainCompressionStrength: e.strength });
            eN.setSidechainCompressionStrength(t.sidechainCompressionStrength);
        },
        AUDIO_SET_LOOPBACK: function (e) {
            let { enabled: t } = e;
            return (e0 = t), tm();
        },
        AUDIO_SET_NOISE_SUPPRESSION: function (e) {
            let t = to({ noiseSuppression: e.enabled });
            eN.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), tm(), tp(e.location);
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
            let t = to({ automaticGainControl: e.enabled });
            eN.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), tm(), tp(e.location);
        },
        AUDIO_SET_NOISE_CANCELLATION: function (e) {
            let t = to({ noiseCancellation: e.enabled });
            eN.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), tm(), tp(e.location);
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
            to({ silenceWarning: e.enabled }), ts.update();
        },
        AUDIO_SET_DEBUG_LOGGING: function (e) {
            eN.setDebugLogging(e.enabled);
        },
        MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
            to({ videoHook: e.enabled });
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
            to({ experimentalSoundshare2: e.enabled });
        },
        AUDIO_SET_ATTENUATION: function (e) {
            let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
                i = to({
                    attenuation: t,
                    attenuateWhileSpeakingSelf: n,
                    attenuateWhileSpeakingOthers: r
                });
            eN.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
        },
        AUDIO_SET_QOS: function (e) {
            let { enabled: t } = e;
            to({ qos: t }), eN.eachConnection((e) => e.setQoS(t));
        },
        MEDIA_ENGINE_DEVICES: function (e) {
            let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
            !(function (e) {
                let t = eL;
                if (((eL = tc(e, ep.Z.Messages.NO_INPUT_DEVICES)), !E().isEqual(eL, t))) {
                    let e = e6(),
                        t = td(eL, e.inputDeviceId);
                    eN.setAudioInputDevice(t);
                }
            })(t),
                !(function (e) {
                    let t = eD;
                    if (((eD = tc(e, ep.Z.Messages.NO_OUTPUT_DEVICES)), !E().isEqual(eD, t))) {
                        let e = e6(),
                            t = td(eD, e.outputDeviceId);
                        eN.setAudioOutputDevice(t);
                    }
                })(n),
                !(function (e) {
                    eV = e.length > 0;
                    let t = eb;
                    if (((eb = tc(e, ep.Z.Messages.NO_VIDEO_DEVICES)), ex && !E().isEqual(eb, t))) {
                        var n;
                        let e = void 0 !== eb[eG],
                            r = eG === eh.w5 && (null === (n = t[eh.w5]) || void 0 === n ? void 0 : n.disabled);
                        te(e || r);
                    }
                })(r);
        },
        AUDIO_VOLUME_CHANGE: function (e) {
            let { inputVolume: t, outputVolume: n } = e;
            to({
                inputVolume: e8(t),
                outputVolume: n
            });
        },
        AUDIO_RESET: function () {
            m.K.remove(eT), location.reload();
        },
        AUDIO_INPUT_DETECTED: function (e) {
            let { inputDetected: t } = e;
            (eH = t), !eZ && eH && ((eZ = !0), ts.update());
        },
        AUDIO_SET_SUBSYSTEM: function (e) {
            eN.setAudioSubsystem(e.subsystem);
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
            (ev = e.enabled),
                e.unmute &&
                    to({
                        mute: !1,
                        deaf: !1
                    }),
                eN.eachConnection(e9);
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
            let { enabled: t } = e;
            K.Z.requestPermission(eE.Eu.CAMERA), te(t);
        },
        MEDIA_ENGINE_PERMISSION: function (e) {
            let { kind: t, granted: n } = e;
            if (!n)
                switch (t) {
                    case 'audio':
                        (ev = !1), eN.eachConnection(e9);
                        break;
                    case 'video':
                        te(!1);
                }
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
            var t, n, r, i;
            let { settings: s } = e;
            if ((null == s ? void 0 : s.desktopSettings) != null) {
                let e = null,
                    r = null,
                    { sourceId: i, sound: o } = s.desktopSettings,
                    l = null !== (t = s.context) && void 0 !== t ? t : eh.Yn.DEFAULT,
                    u =
                        null !== (n = s.qualityOptions) && void 0 !== n
                            ? n
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              },
                    c = !1 === o ? null : X.Z.getPidFromDesktopSource(i);
                J.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = tE(c)), null != e && tf(e, r)),
                    !(function (e) {
                        if (e !== ey) null != a && eN.setGoLiveSource(null, ey), (ey = e);
                    })(l),
                    te(l === eh.Yn.STREAM && ex, {
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
                let e = null !== (r = s.context) && void 0 !== r ? r : eh.Yn.DEFAULT,
                    { videoDeviceGuid: t, audioDeviceGuid: n } = s.cameraSettings,
                    a = e === eh.Yn.STREAM && ex,
                    o =
                        null !== (i = s.qualityOptions) && void 0 !== i
                            ? i
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              };
                te(a, {
                    cameraSource: {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    },
                    quality: {
                        resolution: o.resolution,
                        frameRate: o.frameRate
                    }
                });
            } else te(ex, null);
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
            let { id: t } = e;
            to({ videoDeviceId: (t = td(eb, t)) }), te();
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function (e) {
            let t = to({ experimentalEncoders: e.enabled });
            eN.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
            return eC !== e.required && ((eC = e.required), !e.required && eN.interact(), !0);
        },
        USER_SETTINGS_MODAL_INIT: tg,
        USER_SETTINGS_MODAL_SET_SECTION: tg,
        CERTIFIED_DEVICES_SET: function () {
            return eN.eachConnection(tn), !1;
        },
        RPC_APP_CONNECTED: function (e) {
            let { application: t } = e;
            eR.add(t.id);
        },
        RPC_APP_DISCONNECTED: function (e) {
            let { application: t } = e;
            eR.delete(t.id);
        },
        OVERLAY_INITIALIZE: function (e) {
            let { mediaEngineState: t } = e;
            (eO = t.settingsByContext), (eL = t.inputDevices), (eD = t.outputDevices), (e1 = t.appSupported), (eK = t.krispModuleLoaded), (ey = t.goLiveContext);
        },
        MEDIA_ENGINE_SET_OPEN_H264: function (e) {
            let { enabled: t } = e,
                n = to({ openH264: t });
            eN.setH264Enabled(n.hardwareEncoding || n.openH264),
                eN.eachConnection((e) => {
                    var t;
                    return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
                });
        },
        MEDIA_ENGINE_SET_HARDWARE_ENCODING: function (e) {
            var t, n;
            let { enabled: r } = e,
                i = to({ hardwareEncoding: r });
            eN.eachConnection((e) => {
                var t;
                return e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t);
            }),
                eN.setH264Enabled(i.hardwareEncoding || i.openH264),
                eN.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t),
                eN.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n);
        },
        APP_STATE_UPDATE: function (e) {
            let { state: t } = e,
                n = D.Z.isEnabled();
            if (t === ed.$7l.BACKGROUND && ex && !n) (eF = !0), te(!1);
            else {
                if (t !== ed.$7l.ACTIVE || !eF) return !1;
                (eF = !1), te(!0);
            }
            return !0;
        },
        SET_CHANNEL_BITRATE: function (e) {
            eN.eachConnection((t) => t.setBitRate(e.bitrate));
        },
        SET_VAD_PERMISSION: function (e) {
            let { hasPermission: t } = e,
                n = !t;
            if (n === eU) return !1;
            (eU = n), eN.eachConnection(e9);
        },
        SET_NATIVE_PERMISSION: function (e) {
            let { state: t, permissionType: n } = e,
                r = t === eE.PQ.ACCEPTED;
            switch (n) {
                case eE.Eu.AUDIO:
                    (eX = !0), eN.eachConnection(e9);
                    break;
                case eE.Eu.CAMERA:
                    !r && ex && te(!1);
                    break;
                default:
                    return !1;
            }
        },
        SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
            eN.eachConnection((t) => t.applyVideoQualityMode(e.mode));
        },
        MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
            let { enabled: t } = e,
                n = to({ aecDumpEnabled: t });
            eN.setAecDump(n.aecDumpEnabled);
        },
        CHANNEL_DELETE: function () {
            if ((!ex && null == a) || null != el.Z.getRTCConnectionId()) return !1;
            te(!1, null);
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
            return !!eq && ((eq = !1), !0);
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
            let { settings: t } = e;
            eN.applyMediaFilterSettings(t).finally(() => {
                (eQ = !1), r.emitChange();
            });
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
            eQ = !0;
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
            eQ = !1;
        },
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            let {
                settings: { type: t },
                local: n,
                wasSaved: r
            } = e;
            if (t !== ef.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
            t_(!0);
        },
        CLIPS_INIT: function (e) {
            let { sourceId: t, applicationName: n, quality: i } = e,
                { enableDecoupledGameClipping: a } = k.Z.getCurrentConfig({ location: 'handleClipsInit' }, { autoTrackExposure: !0 }),
                o = R.Z.getSettings().decoupledClipsEnabled;
            if (!a || !o || null == g.Z) return;
            let l = null,
                u = null,
                c = X.Z.getPidFromDesktopSource(t);
            ({ soundshareId: l, soundshareSession: u } = tE(c));
            let d = {
                desktopSource: {
                    id: t,
                    sourcePid: c,
                    soundshareId: l,
                    soundshareSession: u
                },
                quality: i
            };
            null != s && s.desktopSource.id !== d.desktopSource.id && (eN.setClipsSource(null), (0, J.isWindows)() && null != s.desktopSource.soundshareId && A.pn(s.desktopSource.soundshareId)), null != l && tf(l, u), (s = d);
            let { hdrCaptureMode: _ } = B.Z.getCurrentConfig({ location: 'f627ab_12' }, { autoTrackExposure: !1 }),
                E = e6().videoHook;
            eN.setClipsSource({
                desktopDescription: {
                    id: s.desktopSource.id,
                    soundshareId: s.desktopSource.soundshareId,
                    useVideoHook: E,
                    useGraphicsCapture: tr(),
                    useLoopback: r.getExperimentalSoundshare(),
                    useQuartzCapturer: !0,
                    allowScreenCaptureKit: ti(),
                    videoHookStaleFrameTimeoutMs: 500,
                    graphicsCaptureStaleFrameTimeoutMs: eg,
                    hdrCaptureMode: _
                },
                quality: i,
                applicationName: n
            });
        },
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            !1 === t.decoupledClipsEnabled && ((s = null), eN.setClipsSource(null));
        },
        MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
            e3 = e.enabled;
        }
    })),
    (t.Z = r);
