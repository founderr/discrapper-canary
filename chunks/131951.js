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
    F = n(951958),
    V = n(998594),
    H = n(529558),
    Z = n(111672),
    Y = n(874785),
    j = n(636458),
    W = n(441167),
    K = n(338336),
    z = n(751571),
    q = n(725380),
    Q = n(581883),
    X = n(626135),
    $ = n(12647),
    J = n(70956),
    ee = n(358085),
    et = n(960048),
    en = n(998502),
    er = n(13140),
    ei = n(314897),
    ea = n(967368),
    es = n(463395),
    eo = n(592125),
    el = n(858340),
    eu = n(19780),
    ec = n(704806),
    ed = n(631768),
    e_ = n(981631),
    eE = n(70722),
    ef = n(761274),
    eh = n(526761),
    ep = n(65154),
    eI = n(689938);
function em(e, t, n) {
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
let eT = new C.Z('MediaEngineStore');
((u = o || (o = {}))[(u.DETACHED = 0)] = 'DETACHED'), (u[(u.WAITING = 1)] = 'WAITING'), (u[(u.ATTACHED = 2)] = 'ATTACHED'), (u[(u.STARTED = 3)] = 'STARTED'), (u[(u.PLAYING = 4)] = 'PLAYING'), (u[(u.SILENCE = 5)] = 'SILENCE');
let eS = 'MediaEngineStore',
    eg = {
        left: 1,
        right: 1
    },
    eA = 5 * J.Z.Millis.SECOND;
function eN() {
    return {
        mode: e_.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: ee.isPlatformEmbedded || __OVERLAY__,
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
        videoHook: eO.supports(ep.AN.VIDEO_HOOK),
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
let eO = (0, I.Mt)((0, I.jj)()),
    eR = {},
    ev = new Set([ep.Yn.DEFAULT]),
    eC = eO.supports(ep.AN.AUTO_ENABLE),
    ey = !1,
    eL = ep.Yn.STREAM,
    eD = { [ep.w5]: tc(eI.Z.Messages.NO_INPUT_DEVICES) },
    eb = { [ep.w5]: tc(eI.Z.Messages.NO_OUTPUT_DEVICES) },
    eM = { [ep.w5]: tc(eI.Z.Messages.NO_VIDEO_DEVICES) },
    eP = !1,
    eU = !1,
    ew = !1,
    ex = !1,
    eG = !1,
    ek = ep.Av,
    eB = !1,
    eF = !1,
    eV = !1,
    eH = !1,
    eZ = null,
    eY = !1,
    ej = !1,
    eW = !1,
    eK = !1,
    ez = !1,
    eq = null,
    eQ = !1,
    eX = !1,
    e$ = !1;
z.Z.hasPermission(ef.Eu.AUDIO, { showAuthorizationError: !1 }), z.Z.hasPermission(ef.Eu.CAMERA, { showAuthorizationError: !1 });
let eJ = new Set(),
    e0 = !1,
    e1 = !1,
    e2 = {},
    e3 = null,
    e4 = !0,
    e5 = {},
    e6 = 5 * J.Z.Millis.SECOND;
function e7() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT,
        t = eR[e];
    return null == t && ((t = eN()), (eR[e] = t)), t;
}
function e8(e) {
    let t = e7(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp:
            t.modeOptions.vadUseKrisp &&
            (function () {
                return ez || !1;
            })(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function e9(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Qx;
    return E().clamp(e, 0, t);
}
function te(e) {
    let t = e7(e.context),
        n = !eC || t.mute || t.deaf;
    e.context === ep.Yn.DEFAULT ? (n = n || eP || eU || ew || !z.Z.didHavePermission(ef.Eu.AUDIO)) : e.context === ep.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === ep.Yn.DEFAULT && N.Z.updateNativeMute();
}
function tt() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        o = a;
    if (((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, ee.isWindows)() && A.pn(o.desktopSource.soundshareId), eO.setGoLiveSource(null, eL)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == s ? void 0 : null === (t = s.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eO.setGoLiveSource(null, eL), (eG || i) && ((ek = (eG = i) ? t_(eM, e7().videoDeviceId) : ep.Av), eO.setVideoInputDevice(ek)), (a = s), null != s)) {
        let e = {
            resolution: s.quality.resolution,
            frameRate: s.quality.frameRate
        };
        if (null != s.desktopSource) {
            let { hdrCaptureMode: t } = B.Z.getCurrentConfig({ location: 'f627ab_2' }, { autoTrackExposure: !1 }),
                n = e7().videoHook;
            eO.setGoLiveSource(
                {
                    desktopDescription: {
                        id: s.desktopSource.id,
                        soundshareId: s.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: ti(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: ta(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: eA,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eL
            );
        }
        null != s.cameraSource &&
            eO.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: s.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: s.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eL
            );
    }
}
function tn(e, t, n, r) {
    var i;
    let a = null !== (i = null == e ? void 0 : e.soundshareSession) && void 0 !== i ? i : '';
    null == e5[a] && (e5[a] = new Set());
    let s = null != t && !e5[a].has(t);
    s && e5[a].add(t),
        (null == t || s) &&
            X.default.track(e_.rMx.SOUNDSHARE_FAILED, {
                soundshare_failure_code: t,
                soundshare_failure_reason: n,
                soundshare_failure_will_retry: r,
                ...(0, M.Z)(e)
            });
}
function tr(e) {
    let t = e7(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(es.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(es.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(es.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, ee.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function ti() {
    return (0, ee.isWindows)() && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, eE.nz);
}
function ta() {
    return (0, ee.isMac)() && eO.supports(ep.AN.SCREEN_CAPTURE_KIT) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, eE.C7);
}
function ts() {
    var e;
    let t = (null === (e = eo.Z.getChannel(eq)) || void 0 === e ? void 0 : e.type) === e_.d4z.GUILD_STAGE_VOICE,
        n = r.getHardwareEncoding();
    return !t && n && G.Z.supportsSimulcast();
}
let to = new (class {
    start() {
        !this.started && ((this.started = !0), eO.on(I.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eO.removeListener(I.aB.Silence, this.handleSilence),
            S.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = e7();
        !eY && eu.Z.getState() === e_.hes.RTC_CONNECTED && e.mode === e_.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        em(this, 'stateChangeTimeout', void 0),
            em(this, 'noVoiceTimeout', 5000),
            em(this, 'voiceTimeout', 1500),
            em(this, 'started', !1),
            em(this, 'handleSilence', (e) => {
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
                                    e && (ej = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tl(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = e7(t);
    return Object.assign(r, e), !__OVERLAY__ && n && m.K.set(eS, eR), r;
}
function tu() {
    !eC &&
        eO.enable().then(() =>
            S.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tc(e) {
    return {
        id: ep.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function td(e, t) {
    if (0 === e.length) {
        let e = tc(t);
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
function t_(e, t) {
    var n;
    let r = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
    return null != r ? r.id : t;
}
function tE() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null !== (e = Q.Z.settings.audioContextSettings) && void 0 !== e
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === eh.u0.USER ? ep.Yn.DEFAULT : ep.Yn.STREAM,
            a = i === ep.Yn.STREAM ? ep.Yh : ep.Qx,
            s = null !== (t = r[e]) && void 0 !== t ? t : {},
            { localMutes: o, localVolumes: l } = e7(i);
        for (let [e, t] of Object.entries(s))
            null == (0, q.Ky)(i, e) &&
                (t.muted ? (o[e] = !0) : delete o[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eO.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(o), ...Object.keys(l)]))
                null == s[e] &&
                    (delete o[e],
                    delete l[e],
                    eO.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        tl(
            {
                localMutes: o,
                localVolumes: l
            },
            i
        );
    }
}
function tf(e) {
    if (null == r)
        return (
            eT.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : $.Z.getAudioPid(e),
            n = '';
        return (
            null != t && (n = $.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n
            }
        );
    }
}
function th(e, t) {
    (0, ee.isWindows)() &&
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
function tp() {
    let e = ep.Yn.DEFAULT,
        { videoToggleStateMap: t } = e7(e);
    for (let [e, n] of Object.entries(t)) n === e_.ZUi.AUTO_PROBING && delete t[e];
    tl({ videoToggleStateMap: t }, e, !1);
}
function tI(e) {
    let t = e7();
    X.default.track(e_.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function tm(e) {
    let t = tl({ sidechainCompression: e });
    eO.setSidechainCompression(t.sidechainCompression);
}
function tT() {
    let e = e7(),
        t = e.inputDeviceId,
        n = es.Z.hasEchoCancellation(t) || e.echoCancellation,
        r = es.Z.hasNoiseSuppression(t) || e.noiseSuppression,
        i = es.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
        a = e.noiseCancellation;
    eO.setLoopback(e1, {
        echoCancellation: n,
        noiseSuppression: r,
        automaticGainControl: i,
        noiseCancellation: a
    });
}
function tS() {
    return ez || !1;
}
async function tg() {
    try {
        await en.ZP.ensureModule('discord_krisp'), en.ZP.requireModule('discord_krisp'), (ez = !0), r.emitChange();
    } catch (t) {
        eT.warn('Failed to load Krisp module: '.concat(t.message)), et.Z.captureException(t);
        let e = ep.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? ep.H3.INITIALIZED : n;
        }
        X.default.track(e_.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tl({ noiseCancellation: !1 });
    } finally {
        eK = !1;
    }
}
function tA(e) {
    let { section: t } = e;
    return t === e_.oAB.VOICE && tu(), !1;
}
class tN extends (l = p.ZP.Store) {
    initialize() {
        eO.on(I.aB.Connection, (e) => {
            var t, n;
            let { maxSyncDelayOverride: i } = F.Z.getCurrentConfig({ location: 'f627ab_3' }, { autoTrackExposure: !1 });
            i > 0 && eO.setMaxSyncDelayOverride(i), e8(e), te(e), tr(e);
            let s = e7();
            e.setAttenuation(s.attenuation, s.attenuateWhileSpeakingSelf, s.attenuateWhileSpeakingOthers), e.setQoS(s.qos), e.setExperimentalEncoders(s.experimentalEncoders), e.setHardwareH264(null === (t = s.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = s.openH264) || void 0 === n || n);
            let { useExperimentalRateControl: o } = j.Z.getCurrentConfig({ location: 'f627ab_4' }, { autoTrackExposure: !1 });
            o && e.setExperimentFlag(ep.V8.VIDEOTOOLBOX_RATE_CONTROL, !0);
            let l = eu.Z.getGuildId(),
                {
                    muteBeforeProcessing: u,
                    pttBeforeProcessing: c,
                    skipEncode: d
                } = (null != l ? x.Z : w.Z).getCurrentConfig(
                    {
                        location: 'setupMediaEngine',
                        ...(null != l && { guildId: l })
                    },
                    { autoTrackExposure: !0 }
                );
            u && e.setExperimentFlag(ep.V8.MUTE_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(ep.V8.PTT_BEFORE_PROCESSING, !0), d && e.setExperimentFlag(ep.V8.SKIP_ENCODE, !0);
            let { resetOnErrors: _, fallbackOnErrors: E, fallbackOnConsecutiveErrors: f } = Y.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 });
            _ && e.setExperimentFlag(ep.V8.RESET_DECODER_ON_ERRORS, !0), E && e.setExperimentFlag(ep.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), f && e.setExperimentFlag(ep.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            if (e.context === ep.Yn.STREAM && ts()) {
                let t = G.Z.goliveSimulcastFlag();
                void 0 !== t && e.setExperimentFlag(t, !0);
            }
            if (((0, ee.isWindows)() ? ((null == e3 ? void 0 : e3.startsWith('NVIDIA')) ? e.setExperimentFlag(ep.V8.SIGNAL_AV1, !0) : (null == e3 ? void 0 : e3.startsWith('AMD')) && U.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(ep.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(ep.V8.SIGNAL_AV1_DECODE, !0)) : ((0, ee.isMac)() || (0, ee.isLinux)()) && e.setExperimentFlag(ep.V8.SIGNAL_AV1_DECODE, !0), (0, ee.isWindows)() && e.setExperimentFlag(ep.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eO.setHasFullbandPerformance((0, y.b)()), e.setRemoteAudioHistory(0), (0, v.Z)(r))) {
                let t = R.Z.getSettings();
                e.setExperimentFlag(ep.V8.STREAMER_CLIP, t.clipsEnabled);
                let { enableViewerClipping: n } = W.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
                e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ep.ux);
                let { allowQualityDecoupling: r } = O.Z.getCurrentConfig({ location: 'MediaEngineStore_setupMediaEngine' }, { autoTrackExposure: !0 });
                e.setQualityDecoupling(r);
            }
            for (let t of ((s = e7(e.context)), e.setPostponeDecodeLevel(100), Object.keys(s.localMutes))) t !== ei.default.getId() && e.setLocalMute(t, s.localMutes[t]);
            for (let t of Object.keys(s.localVolumes)) t !== ei.default.getId() && e.setLocalVolume(t, s.localVolumes[t]);
            for (let t of Object.keys(s.localPans)) {
                let n = s.localPans[t];
                e.setLocalPan(t, n.left, n.right);
            }
            for (let t of Object.keys(s.disabledLocalVideos)) e.setLocalVideoDisabled(t, s.disabledLocalVideos[t]);
            e.on(I.Sh.Speaking, (t, n) => {
                S.Z.dispatch({
                    type: 'SPEAKING',
                    context: e.context,
                    userId: t,
                    speakingFlags: n
                });
            }),
                e.context === ep.Yn.DEFAULT &&
                    ((eF = !1),
                    e.on(I.Sh.SpeakingWhileMuted, () => {
                        (eF = !0), r.emitChange();
                    })),
                e.on(I.Sh.DesktopSourceEnd, () => {
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                        settings: { context: e.context }
                    });
                }),
                e.on(I.Sh.SoundshareAttached, () => {
                    (null == a ? void 0 : a.desktopSource) != null && X.default.track(e_.rMx.SOUNDSHARE_ATTACHED, (0, M.Z)(null == a ? void 0 : a.desktopSource));
                }),
                e.on(I.Sh.SoundshareFailed, (e) => {
                    let { failureCode: t, failureReason: n, willRetry: r } = e;
                    tn(null == a ? void 0 : a.desktopSource, t, n, r);
                }),
                e.on(I.Sh.SoundshareSpeaking, () => {
                    (null == a ? void 0 : a.desktopSource) != null && (X.default.track(e_.rMx.SOUNDSHARE_TRANSMITTING, (0, M.Z)(null == a ? void 0 : a.desktopSource)), null != el.Z.getHookError(e_.K3D.SOUND) && S.Z.wait(() => S.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
                });
            let h = new T.V7();
            e.on(I.Sh.SoundshareTrace, (e) => {
                switch (e.type) {
                    case 'soundshare_attach_requested':
                        h.start(e6, () => {
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
                            (tn(null == a ? void 0 : a.desktopSource, n, t, r),
                            !r &&
                                (h.stop(),
                                S.Z.wait(() =>
                                    S.Z.dispatch({
                                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                        errorMessage: t,
                                        errorCode: n
                                    })
                                )));
                        break;
                    case 'soundshare_state_transition':
                        4 === e.newState && (h.stop(), S.Z.wait(() => S.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
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
                        X.default.track(e_.rMx.VIDEOHOOK_INITIALIZED, {
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
                    eT.warn('noisecancellererror event: '.concat(e)),
                        (eQ = !0),
                        X.default.track(e_.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                    eT.warn('voiceactivitydetectorerror event: '.concat(e)),
                        X.default.track(e_.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.Z.dispatch({
                            type: 'AUDIO_SET_MODE',
                            context: ep.Yn.DEFAULT,
                            mode: e_.pM4.VOICE_ACTIVITY,
                            options: {
                                ...e7(ep.Yn.DEFAULT).modeOptions,
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
                    h.stop();
                }),
                e.setBitRate(ea.Z.bitrate),
                e.applyVideoQualityMode(ed.Z.mode);
        }),
            eO.on(I.aB.DeviceChange, (e, t, n) => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_DEVICES',
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n
                });
            }),
            eO.on(I.aB.VolumeChange, (e, t) => {
                S.Z.dispatch({
                    type: 'AUDIO_VOLUME_CHANGE',
                    inputVolume: e,
                    outputVolume: t
                });
            }),
            eO.on(I.aB.DesktopSourceEnd, () => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: null
                });
            }),
            eO.on(I.aB.AudioPermission, (e) => {
                (e$ = !0),
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_PERMISSION',
                        kind: 'audio',
                        granted: e
                    });
            }),
            eO.on(I.aB.VideoPermission, (e) => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'video',
                    granted: e
                });
            }),
            eO.on(I.aB.WatchdogTimeout, async () => {
                let e;
                try {
                    await $.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
                } catch (t) {
                    'number' == typeof t.status && (e = t.status);
                }
                eT.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), X.default.track(e_.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
            }),
            eO.on(I.aB.VideoInputInitialized, (e) => {
                X.default.track(e_.rMx.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * J.Z.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy
                });
            }),
            eO.on(I.aB.ClipsRecordingRestartNeeded, () => {
                S.Z.dispatch({ type: 'CLIPS_RESTART' });
            }),
            eO.on(I.aB.ClipsInitFailure, (e, t) => {
                S.Z.wait(() => {
                    S.Z.dispatch({
                        type: 'CLIPS_INIT_FAILURE',
                        errMsg: e,
                        applicationName: t
                    });
                });
            }),
            eO.on(I.aB.ClipsRecordingEnded, (e, t) => {
                var n, r;
                (null == s ? void 0 : null === (n = s.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == a ? void 0 : null === (r = a.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t && A.pn(t), (s = null));
            }),
            eO.on(I.aB.NativeScreenSharePickerUpdate, (e) => {
                V.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                        existing: e
                    });
            }),
            eO.on(I.aB.NativeScreenSharePickerCancel, (e) => {
                V.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                        existing: e
                    });
            }),
            eO.on(I.aB.NativeScreenSharePickerError, (e) => {
                V.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                        error: e
                    });
            }),
            eO.on(I.aB.AudioDeviceModuleError, (e, t, n) => {
                X.default.track(e_.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                    audio_device_module: e,
                    code: t,
                    device_name: n
                });
            }),
            to.reset(),
            (0, ec.q)().then((e) => {
                null != e && (e3 = e.gpu_brand);
            }),
            !(function () {
                var e;
                let t = m.K.get('audio');
                null != t && (m.K.set(eS, { [ep.Yn.DEFAULT]: t }), m.K.remove('audio')),
                    (eR = null !== (e = m.K.get(eS)) && void 0 !== e ? e : {}),
                    E().each(eR, (e) => {
                        if ((E().defaultsDeep(e, eN()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, er.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)), !e.qosMigrated && ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                            var t;
                            (e.vadThrehsoldMigrated = !0), (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60);
                        }
                        (0, ee.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : 1 !== e.ncUseKrispSettingVersion && ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), 1 !== e.hardwareEnabledVersion && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = 1)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
                    }),
                    (function () {
                        var e, t, n;
                        let r = e7();
                        eO.setAudioInputDevice(r.inputDeviceId), eO.setAudioOutputDevice(r.outputDeviceId), tt(), eO.setInputVolume(r.inputVolume), eO.setOutputVolume(r.outputVolume), eO.setH264Enabled(null === (e = r.hardwareEncoding) || void 0 === e || e || r.openH264), eO.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t), eO.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n), eO.setAecDump(r.aecDumpEnabled), eO.setSidechainCompression(r.sidechainCompression), eO.setSidechainCompressionStrength(r.sidechainCompressionStrength);
                    })();
            })(),
            ((0, ee.isWindows)() || (0, ee.isLinux)() || ((0, ee.isMac)() && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, '>=21.0.0'))) && !__OVERLAY__ && !eK && !ez ? ((eK = !0), tg()) : (0, ee.isWeb)() && eO.supports(ep.AN.NOISE_CANCELLATION) ? ((ez = !0), r.emitChange()) : (0, ee.isWeb)() && tl({ noiseCancellation: !1 }),
            tp(),
            (e2 = {
                [ep.AN.VIDEO]: eO.supports(ep.AN.VIDEO),
                [ep.AN.DESKTOP_CAPTURE]: eO.supports(ep.AN.DESKTOP_CAPTURE),
                [ep.AN.HYBRID_VIDEO]: eO.supports(ep.AN.HYBRID_VIDEO)
            }),
            this.waitFor(ei.default, es.Z, eo.Z, el.Z, eu.Z, b.ZP, z.Z.storage, Q.Z, L.Z, R.Z);
    }
    supports(e) {
        return eO.supports(e);
    }
    supportsInApp(e) {
        return e2[e] || eO.supports(e);
    }
    isSupported() {
        return eO.supported();
    }
    isExperimentalEncodersSupported() {
        return eO.supports(ep.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eO.supports(ep.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return ez || !1;
    }
    isNoiseCancellationError() {
        return eQ;
    }
    isAutomaticGainControlSupported() {
        return eO.supports(ep.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return ez || !1;
    }
    isAecDumpSupported() {
        return eO.supports(ep.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eO.supports(ep.AN.VIDEO) && eO.supports(ep.AN.SIMULCAST);
    }
    getAecDump() {
        return e7().aecDumpEnabled;
    }
    getMediaEngine() {
        return eO;
    }
    getVideoComponent() {
        return eO.supports(ep.AN.DIRECT_VIDEO) && eO.setUseDirectVideo(!0), eO.Video;
    }
    getCameraComponent() {
        return eO.supports(ep.AN.DIRECT_VIDEO) && eO.setUseDirectVideo(!0), eO.Camera;
    }
    isEnabled() {
        return eC;
    }
    isMute() {
        return this.isSelfMute() || eP;
    }
    isDeaf() {
        return this.isSelfDeaf() || ex;
    }
    hasContext(e) {
        return null != eR[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return e === ep.Yn.DEFAULT && eU;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return !this.isEnabled() || e7(e).mute || !z.Z.didHavePermission(ef.Eu.AUDIO) || this.isSelfDeaf(e) || (e === ep.Yn.DEFAULT && ew);
    }
    shouldSkipMuteUnmuteSound() {
        let { airpodsMuteSupported: e } = P.Z.getCurrentConfig({ location: 'shouldSkipMuteUnmuteSound' }, { autoTrackExposure: !0 });
        return !!e && eB;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        eB = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && es.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return e4;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return !this.isSupported() || e7(e).deaf;
    }
    isVideoEnabled() {
        return eG && eH;
    }
    isVideoAvailable() {
        return Object.values(eM).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.STREAM;
        return eL === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.STREAM;
        return eL === t && null != a && (null === (e = a.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return e !== ei.default.getId() && (e7(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eO.supports(ep.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return null !== (t = e7(n).disabledLocalVideos[e]) && void 0 !== t && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return null !== (t = e7(n).videoToggleStateMap[e]) && void 0 !== t ? t : e_.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return t === ep.Yn.DEFAULT && eJ.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return e === ep.Yn.DEFAULT && eJ.size > 0;
    }
    isMediaFilterSettingLoading() {
        return eX;
    }
    isNativeAudioPermissionReady() {
        return e$;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eL;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
            n = e7(t).localPans[e];
        return null != n ? n : eg;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
            n = t === ep.Yn.STREAM ? ep.Yh : ep.Qx,
            r = e7(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return e7().inputVolume;
    }
    getOutputVolume() {
        return e7().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return e7(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return e7(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(eR, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === e_.pM4.PUSH_TO_TALK && ev.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return t_(eD, e7().inputDeviceId);
    }
    getOutputDeviceId() {
        return t_(eb, e7().outputDeviceId);
    }
    getVideoDeviceId() {
        return t_(eM, e7().videoDeviceId);
    }
    getInputDevices() {
        return eD;
    }
    getOutputDevices() {
        return eb;
    }
    getVideoDevices() {
        return eM;
    }
    getEchoCancellation() {
        let e = e7();
        return es.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e7().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return e7().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return e7().h265Enabled;
    }
    getLoopback() {
        return eO.getLoopback();
    }
    getNoiseSuppression() {
        let e = e7();
        return es.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = e7();
        return es.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return e7().noiseCancellation;
    }
    getExperimentalEncoders() {
        return e7().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null === (e = e7().hardwareEncoding) || void 0 === e || e;
    }
    getEnableSilenceWarning() {
        return e7().silenceWarning;
    }
    getDebugLogging() {
        return eO.getDebugLogging();
    }
    getQoS() {
        return e7().qos;
    }
    getAttenuation() {
        return e7().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return e7().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return e7().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return eO.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eO.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return e7(e);
    }
    getState() {
        return {
            settingsByContext: eR,
            inputDevices: eD,
            outputDevices: eb,
            appSupported: e2,
            krispModuleLoaded: ez,
            goLiveSource: a,
            goLiveContext: eL
        };
    }
    getInputDetected() {
        return eZ;
    }
    getNoInputDetectedNotice() {
        return ej;
    }
    getPacketDelay() {
        return ee.isPlatformEmbedded || this.getMode() !== e_.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eO.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ey;
    }
    getVideoHook() {
        return e7().videoHook;
    }
    supportsVideoHook() {
        return eO.supports(ep.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = e7().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eO.supports(ep.AN.EXPERIMENTAL_SOUNDSHARE) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, eE.I9);
    }
    getOpenH264() {
        return e7().openH264;
    }
    getEverSpeakingWhileMuted() {
        return eF;
    }
    supportsScreenSoundshare() {
        return ((0, ee.isMac)() && eO.supports(ep.AN.SOUNDSHARE) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, eE.yG) && ta()) || ((0, ee.isWindows)() && eO.supports(ep.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare());
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
                (e === ep.Yn.DEFAULT || ts()) &&
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
        let n = eO.getSupportedSecureFramesProtocolVersion(),
            r = H.m.getCurrentConfig({ location: 'MediaEngineStore' }),
            i =
                null != e
                    ? H.N.getCurrentConfig({
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
em(tN, 'displayName', 'MediaEngineStore'),
    (r = new tN(S.Z, {
        VOICE_CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
            if ((r !== n && tt(i, null), null != t || null == n)) {
                eW = !1;
                return;
            }
            if (eW) return;
            eW = !0;
            let a = e7();
            (a.mute || a.deaf) &&
                (tl({
                    deaf: !1,
                    mute: !1
                }),
                eO.eachConnection(te));
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => (i === t.sessionId ? ((eP = t.mute || t.suppress), (ex = t.deaf), eO.eachConnection(te), tt(!(null != t.guildId && null != t.channelId && null != eq && eq !== t.channelId) && eG), (eq = t.channelId), !0) : (!__OVERLAY__ && t.userId === ei.default.getId() && null == eu.Z.getChannelId() && tt(!1, null), e)), !1);
        },
        CONNECTION_OPEN: function (e) {
            (i = e.sessionId),
                (eP = !1),
                (ex = !1),
                !(0, ee.isWeb)() &&
                    Z.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                        let t = e7();
                        !e.sidechainAvailable && t.sidechainCompression ? (tl({ sidechainCompressionSettingVersion: 0 }), tm(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < 1 && (tl({ sidechainCompressionSettingVersion: 1 }), tm(e.sidechainEnabled));
                    }),
                tE();
        },
        CONNECTION_CLOSED: function () {
            i = null;
        },
        RTC_CONNECTION_STATE: function (e) {
            switch (e.state) {
                case e_.hes.CONNECTING:
                    tu();
                    break;
                case e_.hes.RTC_CONNECTING:
                    (eY = !1), (ej = !1);
                    break;
                case e_.hes.RTC_CONNECTED:
                    tt();
                    break;
                case e_.hes.DISCONNECTED:
                    (function () {
                        if (0 === eJ.size) return;
                        let e = ep.Yn.DEFAULT,
                            { disabledLocalVideos: t } = e7(e);
                        eJ.forEach((n) => {
                            d()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eO.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            eJ.clear(),
                            tl({ disabledLocalVideos: t }, e, !1);
                    })(),
                        tp();
            }
            to.update();
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
            let { mute: t } = e;
            (eU = t), eO.eachConnection(te);
        },
        AUDIO_TOGGLE_SELF_MUTE: function (e) {
            let { context: t, skipMuteUnmuteSoundEffect: n } = e,
                { mute: r, deaf: i } = e7(t);
            if (t === ep.Yn.DEFAULT && (z.Z.requestPermission(ef.Eu.AUDIO), ew)) return !1;
            !(r = !i && !r) && (i = !1),
                n && (eB = !0),
                tl(
                    {
                        mute: r,
                        deaf: i
                    },
                    t
                ),
                eO.eachConnection(te);
        },
        AUDIO_SET_SELF_MUTE: function (e) {
            let { context: t, mute: n } = e;
            tl({ mute: n }, t), eO.eachConnection(te);
        },
        AUDIO_TOGGLE_SELF_DEAF: function (e) {
            let { context: t } = e;
            tl({ deaf: !e7(t).deaf }, t), eO.eachConnection(te);
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
            let { context: t, userId: n } = e;
            if (n === ei.default.getId()) return;
            let { localMutes: r } = e7(t);
            r[n] ? delete r[n] : (r[n] = !0), tl({ localMutes: r }, t), eO.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
            var t, n, r, i, a, s, o;
            let { context: l, userId: u, videoToggleState: c, persist: _, isAutomatic: E } = e;
            d()(!(_ && E), 'These are not allowed to both be true.');
            let f = c === e_.ZUi.DISABLED,
                { disabledLocalVideos: h } = e7(l),
                p = null !== (t = h[u]) && void 0 !== t && t,
                I = eJ.has(u),
                m = c === e_.ZUi.AUTO_ENABLED || c === e_.ZUi.MANUAL_ENABLED;
            eT.info('disableVideo='.concat(f, ' currentlyDisabled=').concat(p, ' currentlyAutoDisabled=').concat(I, ', isVideoShown=').concat(m)), d()(!(I && !p), 'If you are auto-disabled, then you are also disabled.');
            let T = f !== p,
                S = l === ep.Yn.DEFAULT,
                g = E && T && S,
                A = _ && T && S;
            eT.info('changed='.concat(T, ' isDefaultContext=').concat(S, ' isUpdateCausedByVideoHealthManager=').concat(g, ' isManualToggleByUser=').concat(A));
            let { videoToggleStateMap: N } = e7(l);
            if ((N[u] === e_.ZUi.AUTO_PROBING && c === e_.ZUi.AUTO_ENABLED && (0, K.Z)(u, f ? ep.fC.AUTO_DISABLE : ep.fC.AUTO_ENABLE, m), (N[u] = c), tl({ videoToggleStateMap: N }, l, _), c === e_.ZUi.AUTO_PROBING ? null === (n = eu.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (r = eu.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(u, !1), !e0 && (eT.info('isAutoDisableAllowed='.concat(e0, ' - disabling VideoHealthManager')), null === (a = eu.Z.getRTCConnection()) || void 0 === a || null === (i = a.getVideoHealthManager()) || void 0 === i || i.disable()), g)) {
                if ((!f && !I) || (f && !e0)) return;
                (0, K.Z)(u, f ? ep.fC.AUTO_DISABLE : ep.fC.AUTO_ENABLE, m), f ? eJ.add(u) : eJ.delete(u);
            } else A && (I && !f ? (eT.info('disallowing auto-disable for this session because of manual override by user'), (e0 = !1), null === (o = eu.Z.getRTCConnection()) || void 0 === o || null === (s = o.getVideoHealthManager()) || void 0 === s || s.disable(), (0, K.Z)(u, ep.fC.MANUAL_REENABLE, m)) : (0, K.Z)(u, f ? ep.fC.MANUAL_DISABLE : ep.fC.MANUAL_ENABLE, m));
            S && !f && eJ.delete(u),
                f ? (h[u] = !0) : delete h[u],
                tl({ disabledLocalVideos: h }, l, _),
                eO.eachConnection((e) => {
                    var t;
                    return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t);
                }, l);
        },
        AUDIO_SET_LOCAL_VOLUME: function (e) {
            let { context: t, userId: n, volume: r } = e;
            if (n === ei.default.getId()) return;
            let i = t === ep.Yn.STREAM ? ep.Yh : ep.Qx,
                { localVolumes: a } = e7(t);
            r === i ? delete a[n] : (a[n] = r), tl({ localVolumes: a }, t), eO.eachConnection((e) => e.setLocalVolume(n, r), t);
        },
        AUDIO_SET_LOCAL_PAN: function (e) {
            let { context: t, userId: n, left: r, right: i } = e,
                { localPans: a } = e7(t);
            (a[n] = {
                left: r,
                right: i
            }),
                tl({ localPans: a }, t),
                eO.eachConnection((e) => e.setLocalPan(n, r, i), t);
        },
        AUDIO_SET_MODE: function (e) {
            let { context: t, mode: n, options: r } = e;
            tl(
                {
                    mode: n,
                    modeOptions: r
                },
                t
            ),
                eO.eachConnection(e8),
                to.update();
        },
        AUDIO_SET_INPUT_VOLUME: function (e) {
            let { volume: t } = e;
            tl({ inputVolume: e9(t) }), eO.setInputVolume(t);
        },
        AUDIO_SET_OUTPUT_VOLUME: function (e) {
            let { volume: t } = e;
            tl({ outputVolume: t }), eO.setOutputVolume(t);
        },
        AUDIO_SET_INPUT_DEVICE: function (e) {
            let { id: t } = e;
            tl({ inputDeviceId: (t = t_(eD, t)) }), eO.setAudioInputDevice(t);
        },
        AUDIO_SET_OUTPUT_DEVICE: function (e) {
            let { id: t } = e;
            tl({ outputDeviceId: (t = t_(eb, t)) }), eO.setAudioOutputDevice(t);
        },
        AUDIO_SET_ECHO_CANCELLATION: function (e) {
            let t = tl({ echoCancellation: e.enabled });
            eO.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), tT(), tI(e.location);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
            tm(e.enabled);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
            let t = tl({ sidechainCompressionStrength: e.strength });
            eO.setSidechainCompressionStrength(t.sidechainCompressionStrength);
        },
        AUDIO_SET_LOOPBACK: function (e) {
            let { enabled: t } = e;
            return (e1 = t), tT();
        },
        AUDIO_SET_NOISE_SUPPRESSION: function (e) {
            let t = tl({ noiseSuppression: e.enabled });
            eO.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), tT(), tI(e.location);
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
            let t = tl({ automaticGainControl: e.enabled });
            eO.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), tT(), tI(e.location);
        },
        AUDIO_SET_NOISE_CANCELLATION: function (e) {
            let t = tl({ noiseCancellation: e.enabled });
            eO.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), tT(), tI(e.location);
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
            tl({ silenceWarning: e.enabled }), to.update();
        },
        AUDIO_SET_DEBUG_LOGGING: function (e) {
            eO.setDebugLogging(e.enabled);
        },
        MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
            tl({ videoHook: e.enabled });
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
            tl({ experimentalSoundshare2: e.enabled });
        },
        AUDIO_SET_ATTENUATION: function (e) {
            let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
                i = tl({
                    attenuation: t,
                    attenuateWhileSpeakingSelf: n,
                    attenuateWhileSpeakingOthers: r
                });
            eO.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
        },
        AUDIO_SET_QOS: function (e) {
            let { enabled: t } = e;
            tl({ qos: t }), eO.eachConnection((e) => e.setQoS(t));
        },
        MEDIA_ENGINE_DEVICES: function (e) {
            let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
            !(function (e) {
                let t = eD;
                if (((eD = td(e, eI.Z.Messages.NO_INPUT_DEVICES)), !E().isEqual(eD, t))) {
                    let e = e7(),
                        t = t_(eD, e.inputDeviceId);
                    eO.setAudioInputDevice(t);
                }
            })(t),
                !(function (e) {
                    let t = eb;
                    if (((eb = td(e, eI.Z.Messages.NO_OUTPUT_DEVICES)), !E().isEqual(eb, t))) {
                        let e = e7(),
                            t = t_(eb, e.outputDeviceId);
                        eO.setAudioOutputDevice(t);
                    }
                })(n),
                !(function (e) {
                    eH = e.length > 0;
                    let t = eM;
                    if (((eM = td(e, eI.Z.Messages.NO_VIDEO_DEVICES)), eG && !E().isEqual(eM, t))) {
                        var n;
                        let e = void 0 !== eM[ek],
                            r = ek === ep.w5 && (null === (n = t[ep.w5]) || void 0 === n ? void 0 : n.disabled);
                        tt(e || r);
                    }
                })(r);
        },
        AUDIO_VOLUME_CHANGE: function (e) {
            let { inputVolume: t, outputVolume: n } = e;
            tl({
                inputVolume: e9(t),
                outputVolume: n
            });
        },
        AUDIO_RESET: function () {
            m.K.remove(eS), location.reload();
        },
        AUDIO_INPUT_DETECTED: function (e) {
            let { inputDetected: t } = e;
            (eZ = t), !eY && eZ && ((eY = !0), to.update());
        },
        AUDIO_SET_SUBSYSTEM: function (e) {
            eO.setAudioSubsystem(e.subsystem);
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
            (eC = e.enabled),
                e.unmute &&
                    tl({
                        mute: !1,
                        deaf: !1
                    }),
                eO.eachConnection(te);
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
            let { enabled: t } = e;
            z.Z.requestPermission(ef.Eu.CAMERA), tt(t);
        },
        MEDIA_ENGINE_PERMISSION: function (e) {
            let { kind: t, granted: n } = e;
            if (!n)
                switch (t) {
                    case 'audio':
                        (eC = !1), eO.eachConnection(te);
                        break;
                    case 'video':
                        tt(!1);
                }
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
            var t, n, r, i;
            let { settings: s } = e;
            if ((null == s ? void 0 : s.desktopSettings) != null) {
                let e = null,
                    r = null,
                    { sourceId: i, sound: o } = s.desktopSettings,
                    l = null !== (t = s.context) && void 0 !== t ? t : ep.Yn.DEFAULT,
                    u =
                        null !== (n = s.qualityOptions) && void 0 !== n
                            ? n
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              },
                    c = !1 === o ? null : $.Z.getPidFromDesktopSource(i);
                ee.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = tf(c)), null != e && th(e, r)),
                    !(function (e) {
                        if (e !== eL) null != a && eO.setGoLiveSource(null, eL), (eL = e);
                    })(l),
                    tt(l === ep.Yn.STREAM && eG, {
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
                let e = null !== (r = s.context) && void 0 !== r ? r : ep.Yn.DEFAULT,
                    { videoDeviceGuid: t, audioDeviceGuid: n } = s.cameraSettings,
                    a = e === ep.Yn.STREAM && eG,
                    o =
                        null !== (i = s.qualityOptions) && void 0 !== i
                            ? i
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              };
                tt(a, {
                    cameraSource: {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    },
                    quality: {
                        resolution: o.resolution,
                        frameRate: o.frameRate
                    }
                });
            } else tt(eG, null);
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
            let { id: t } = e;
            tl({ videoDeviceId: (t = t_(eM, t)) }), tt();
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function (e) {
            let t = tl({ experimentalEncoders: e.enabled });
            eO.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
            return ey !== e.required && ((ey = e.required), !e.required && eO.interact(), !0);
        },
        USER_SETTINGS_MODAL_INIT: tA,
        USER_SETTINGS_MODAL_SET_SECTION: tA,
        CERTIFIED_DEVICES_SET: function () {
            return eO.eachConnection(tr), !1;
        },
        RPC_APP_CONNECTED: function (e) {
            let { application: t } = e;
            ev.add(t.id);
        },
        RPC_APP_DISCONNECTED: function (e) {
            let { application: t } = e;
            ev.delete(t.id);
        },
        OVERLAY_INITIALIZE: function (e) {
            let { mediaEngineState: t } = e;
            (eR = t.settingsByContext), (eD = t.inputDevices), (eb = t.outputDevices), (e2 = t.appSupported), (ez = t.krispModuleLoaded), (eL = t.goLiveContext);
        },
        MEDIA_ENGINE_SET_OPEN_H264: function (e) {
            let { enabled: t } = e,
                n = tl({ openH264: t });
            eO.setH264Enabled(n.hardwareEncoding || n.openH264),
                eO.eachConnection((e) => {
                    var t;
                    return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
                });
        },
        MEDIA_ENGINE_SET_HARDWARE_ENCODING: function (e) {
            var t, n;
            let { enabled: r } = e,
                i = tl({ hardwareEncoding: r });
            eO.eachConnection((e) => {
                var t;
                return e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t);
            }),
                eO.setH264Enabled(i.hardwareEncoding || i.openH264),
                eO.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t),
                eO.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n);
        },
        APP_STATE_UPDATE: function (e) {
            let { state: t } = e,
                n = D.Z.isEnabled();
            if (t === e_.$7l.BACKGROUND && eG && !n) (eV = !0), tt(!1);
            else {
                if (t !== e_.$7l.ACTIVE || !eV) return !1;
                (eV = !1), tt(!0);
            }
            return !0;
        },
        SET_CHANNEL_BITRATE: function (e) {
            eO.eachConnection((t) => t.setBitRate(e.bitrate));
        },
        SET_VAD_PERMISSION: function (e) {
            let { hasPermission: t } = e,
                n = !t;
            if (n === ew) return !1;
            (ew = n), eO.eachConnection(te);
        },
        SET_NATIVE_PERMISSION: function (e) {
            let { state: t, permissionType: n } = e,
                r = t === ef.PQ.ACCEPTED;
            switch (n) {
                case ef.Eu.AUDIO:
                    (e$ = !0), eO.eachConnection(te);
                    break;
                case ef.Eu.CAMERA:
                    !r && eG && tt(!1);
                    break;
                default:
                    return !1;
            }
        },
        SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
            eO.eachConnection((t) => t.applyVideoQualityMode(e.mode));
        },
        MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
            let { enabled: t } = e,
                n = tl({ aecDumpEnabled: t });
            eO.setAecDump(n.aecDumpEnabled);
        },
        CHANNEL_DELETE: function () {
            if ((!eG && null == a) || null != eu.Z.getRTCConnectionId()) return !1;
            tt(!1, null);
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
            return !!eQ && ((eQ = !1), !0);
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
            let { settings: t } = e;
            eO.applyMediaFilterSettings(t).finally(() => {
                (eX = !1), r.emitChange();
            });
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
            eX = !0;
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
            eX = !1;
        },
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            let {
                settings: { type: t },
                local: n,
                wasSaved: r
            } = e;
            if (t !== eh.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
            tE(!0);
        },
        CLIPS_INIT: function (e) {
            let { sourceId: t, applicationName: n, quality: i } = e,
                { enableDecoupledGameClipping: a } = k.Z.getCurrentConfig({ location: 'handleClipsInit' }, { autoTrackExposure: !0 }),
                o = R.Z.getSettings().decoupledClipsEnabled;
            if (!a || !o || null == g.Z) return;
            let l = null,
                u = null,
                c = $.Z.getPidFromDesktopSource(t);
            ({ soundshareId: l, soundshareSession: u } = tf(c));
            let d = {
                desktopSource: {
                    id: t,
                    sourcePid: c,
                    soundshareId: l,
                    soundshareSession: u
                },
                quality: i
            };
            null != s && s.desktopSource.id !== d.desktopSource.id && (eO.setClipsSource(null), (0, ee.isWindows)() && null != s.desktopSource.soundshareId && A.pn(s.desktopSource.soundshareId)), null != l && th(l, u), (s = d);
            let { hdrCaptureMode: _ } = B.Z.getCurrentConfig({ location: 'f627ab_12' }, { autoTrackExposure: !1 }),
                E = e7().videoHook;
            eO.setClipsSource({
                desktopDescription: {
                    id: s.desktopSource.id,
                    soundshareId: s.desktopSource.soundshareId,
                    useVideoHook: E,
                    useGraphicsCapture: ti(),
                    useLoopback: r.getExperimentalSoundshare(),
                    useQuartzCapturer: !0,
                    allowScreenCaptureKit: ta(),
                    videoHookStaleFrameTimeoutMs: 500,
                    graphicsCaptureStaleFrameTimeoutMs: eA,
                    hdrCaptureMode: _
                },
                quality: i,
                applicationName: n
            });
        },
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            !1 === t.decoupledClipsEnabled && ((s = null), eO.setClipsSource(null));
        },
        MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
            e4 = e.enabled;
        }
    })),
    (t.Z = r);
