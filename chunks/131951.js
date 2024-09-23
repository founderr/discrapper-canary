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
    p = n(404097),
    I = n(442837),
    m = n(46973),
    T = n(433517),
    S = n(846519),
    g = n(570140),
    A = n(579806),
    N = n(887278),
    O = n(547727),
    R = n(435064),
    v = n(779618),
    C = n(710845),
    y = n(811660),
    L = n(353926),
    D = n(646047),
    b = n(594190),
    M = n(502286),
    P = n(12898),
    U = n(294473),
    w = n(706629),
    x = n(926951),
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
    q = n(747268),
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
    es = n(594174),
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
let eh = new C.Z('MediaEngineStore');
((u = o || (o = {}))[(u.DETACHED = 0)] = 'DETACHED'), (u[(u.WAITING = 1)] = 'WAITING'), (u[(u.ATTACHED = 2)] = 'ATTACHED'), (u[(u.STARTED = 3)] = 'STARTED'), (u[(u.PLAYING = 4)] = 'PLAYING'), (u[(u.SILENCE = 5)] = 'SILENCE');
let ep = 'MediaEngineStore',
    eI = {
        left: 1,
        right: 1
    },
    em = 5 * K.Z.Millis.SECOND;
function eT() {
    return {
        mode: el.pM4.VOICE_ACTIVITY,
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
let eS = (0, m.Mt)((0, m.jj)()),
    eg = {},
    eA = new Set([e_.Yn.DEFAULT]),
    eN = eS.supports(e_.AN.AUTO_ENABLE),
    eO = !1,
    eR = e_.Yn.STREAM,
    ev = { [e_.w5]: to(eE.Z.Messages.NO_INPUT_DEVICES) },
    eC = { [e_.w5]: to(eE.Z.Messages.NO_OUTPUT_DEVICES) },
    ey = { [e_.w5]: to(eE.Z.Messages.NO_VIDEO_DEVICES) },
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
H.Z.hasPermission(ec.Eu.AUDIO, { showAuthorizationError: !1 }), H.Z.hasPermission(ec.Eu.CAMERA, { showAuthorizationError: !1 });
let eq = new Set(),
    eQ = !1,
    eX = !1,
    e$ = {},
    eJ = null,
    e0 = !0,
    e1 = {},
    e2 = 5 * K.Z.Millis.SECOND;
function e3() {
    var e, t;
    return null !== (t = null === (e = es.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t ? 'always' : q.Z === p.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function e4() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT,
        t = eg[e];
    return null == t && ((t = eT()), (eg[e] = t)), t;
}
function e5(e) {
    let t = e4(e.context);
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
function e6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Qx;
    return E().clamp(e, 0, t);
}
function e7(e) {
    let t = e4(e.context),
        n = !eN || t.mute || t.deaf;
    e.context === e_.Yn.DEFAULT ? (n = n || eL || eD || eb || !H.Z.didHavePermission(ec.Eu.AUDIO)) : e.context === e_.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === e_.Yn.DEFAULT && O.Z.updateNativeMute();
}
function e8() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        o = a;
    if (((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, z.isWindows)() && N.pn(o.desktopSource.soundshareId), eS.setGoLiveSource(null, eR)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == s ? void 0 : null === (t = s.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eS.setGoLiveSource(null, eR), (eP || i) && ((eU = (eP = i) ? tu(ey, e4().videoDeviceId) : e_.Av), eS.setVideoInputDevice(eU)), (a = s), null != s)) {
        let e = {
            resolution: s.quality.resolution,
            frameRate: s.quality.frameRate
        };
        if (null != s.desktopSource) {
            let t = e3(),
                n = e4().videoHook;
            eS.setGoLiveSource(
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
function e9(e, t, n, r) {
    var i;
    let a = null !== (i = null == e ? void 0 : e.soundshareSession) && void 0 !== i ? i : '';
    null == e1[a] && (e1[a] = new Set());
    let s = null != t && !e1[a].has(t);
    s && e1[a].add(t),
        (null == t || s) &&
            j.default.track(el.rMx.SOUNDSHARE_FAILED, {
                soundshare_failure_code: t,
                soundshare_failure_reason: n,
                soundshare_failure_will_retry: r,
                ...(0, M.Z)(e)
            });
}
function te(e) {
    let t = e4(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(et.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(et.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(et.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, z.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tt() {
    return (0, z.isWindows)() && h().satisfies(null === A.Z || void 0 === A.Z ? void 0 : A.Z.os.release, eu.nz);
}
function tn() {
    return (0, z.isMac)() && eS.supports(e_.AN.SCREEN_CAPTURE_KIT) && h().satisfies(null === A.Z || void 0 === A.Z ? void 0 : A.Z.os.release, eu.C7);
}
function tr() {
    var e;
    let t = (null === (e = en.Z.getChannel(ej)) || void 0 === e ? void 0 : e.type) === el.d4z.GUILD_STAGE_VOICE,
        n = r.getHardwareEncoding();
    return !t && n && x.Z.supportsSimulcast();
}
let ti = new (class {
    start() {
        !this.started && ((this.started = !0), eS.on(m.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eS.removeListener(m.aB.Silence, this.handleSilence),
            g.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = e4();
        !eF && ei.Z.getState() === el.hes.RTC_CONNECTED && e.mode === el.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
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
                                    (g.Z.dispatch({
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
function ta(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = e4(t);
    return Object.assign(r, e), !__OVERLAY__ && n && T.K.set(ep, eg), r;
}
function ts() {
    !eN &&
        eS.enable().then(() =>
            g.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function to(e) {
    return {
        id: e_.w5,
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
            null !== (e = Y.Z.settings.audioContextSettings) && void 0 !== e
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === ed.u0.USER ? e_.Yn.DEFAULT : e_.Yn.STREAM,
            a = i === e_.Yn.STREAM ? e_.Yh : e_.Qx,
            s = null !== (t = r[e]) && void 0 !== t ? t : {},
            { localMutes: o, localVolumes: l } = e4(i);
        for (let [e, t] of Object.entries(s))
            null == (0, Z.Ky)(i, e) &&
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
            eh.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
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
function t_(e, t) {
    (0, z.isWindows)() &&
        N.YT(e, { soundshare_session: t }).then((t) => {
            null != t &&
                !b.ZP.shouldContinueWithoutElevatedProcessForPID(e) &&
                g.Z.wait(() => {
                    g.Z.dispatch({
                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                        errorMessage: t
                    });
                });
        });
}
function tE() {
    let e = e_.Yn.DEFAULT,
        { videoToggleStateMap: t } = e4(e);
    for (let [e, n] of Object.entries(t)) n === el.ZUi.AUTO_PROBING && delete t[e];
    ta({ videoToggleStateMap: t }, e, !1);
}
function tf(e) {
    let t = e4();
    j.default.track(el.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function th(e) {
    let t = ta({ sidechainCompression: e });
    eS.setSidechainCompression(t.sidechainCompression);
}
function tp() {
    let e = e4(),
        t = e.inputDeviceId,
        n = et.Z.hasEchoCancellation(t) || e.echoCancellation,
        r = et.Z.hasNoiseSuppression(t) || e.noiseSuppression,
        i = et.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
        a = e.noiseCancellation;
    eS.setLoopback(eX, {
        echoCancellation: n,
        noiseSuppression: r,
        automaticGainControl: i,
        noiseCancellation: a
    });
}
function tI() {
    return eY || !1;
}
async function tm() {
    try {
        await X.ZP.ensureModule('discord_krisp'), X.ZP.requireModule('discord_krisp'), (eY = !0), r.emitChange();
    } catch (t) {
        eh.warn('Failed to load Krisp module: '.concat(t.message)), Q.Z.captureException(t);
        let e = e_.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? e_.H3.INITIALIZED : n;
        }
        j.default.track(el.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), ta({ noiseCancellation: !1 });
    } finally {
        eZ = !1;
    }
}
function tT(e) {
    e === e_.iA.AUTOMATIC ? (ta({ automaticAudioSubsystem: !0 }), tS()) : (ta({ automaticAudioSubsystem: !1 }), eS.setAudioSubsystem(e));
}
function tS() {
    eS.setAudioSubsystem(e_.iA.STANDARD);
}
function tg(e) {
    let { section: t } = e;
    return t === el.oAB.VOICE && ts(), !1;
}
class tA extends (l = I.ZP.Store) {
    initialize() {
        eS.on(m.aB.Connection, (e) => {
            var t, n;
            e5(e), e7(e), te(e);
            let i = e4();
            e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = i.openH264) || void 0 === n || n);
            let s = ei.Z.getGuildId(),
                {
                    muteBeforeProcessing: o,
                    pttBeforeProcessing: l,
                    skipEncode: u
                } = (null != s ? w.Z : U.Z).getCurrentConfig(
                    {
                        location: 'setupMediaEngine',
                        ...(null != s && { guildId: s })
                    },
                    { autoTrackExposure: !0 }
                );
            o && e.setExperimentFlag(e_.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(e_.V8.PTT_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(e_.V8.SKIP_ENCODE, !0);
            e.setExperimentFlag(e_.V8.RESET_DECODER_ON_ERRORS, !0), e.setExperimentFlag(e_.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            if (e.context === e_.Yn.STREAM && tr()) {
                let t = x.Z.goliveSimulcastFlag();
                void 0 !== t && e.setExperimentFlag(t, !0);
            }
            if (((0, z.isWindows)() ? ((null == eJ ? void 0 : eJ.startsWith('NVIDIA')) ? e.setExperimentFlag(e_.V8.SIGNAL_AV1, !0) : (null == eJ ? void 0 : eJ.startsWith('AMD')) && P.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(e_.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(e_.V8.SIGNAL_AV1_DECODE, !0)) : ((0, z.isMac)() || (0, z.isLinux)()) && e.setExperimentFlag(e_.V8.SIGNAL_AV1_DECODE, !0), (0, z.isWindows)() && e.setExperimentFlag(e_.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eS.setHasFullbandPerformance((0, y.b)()), e.setRemoteAudioHistory(0), (0, v.Z)(r))) {
                let t = R.Z.getSettings();
                e.setExperimentFlag(e_.V8.STREAMER_CLIP, t.clipsEnabled);
                let { enableViewerClipping: n } = F.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
                e.setViewerSideClip(n), e.setClipsKeyFrameInterval(e_.ux);
            }
            for (let t of ((i = e4(e.context)), e.setPostponeDecodeLevel(100), Object.keys(i.localMutes))) t !== J.default.getId() && e.setLocalMute(t, i.localMutes[t]);
            for (let t of Object.keys(i.localVolumes)) t !== J.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
            for (let t of Object.keys(i.localPans)) {
                let n = i.localPans[t];
                e.setLocalPan(t, n.left, n.right);
            }
            for (let t of Object.keys(i.disabledLocalVideos)) e.setLocalVideoDisabled(t, i.disabledLocalVideos[t]);
            e.on(m.Sh.Speaking, (t, n) => {
                g.Z.dispatch({
                    type: 'SPEAKING',
                    context: e.context,
                    userId: t,
                    speakingFlags: n
                });
            }),
                e.context === e_.Yn.DEFAULT &&
                    ((ex = !1),
                    e.on(m.Sh.SpeakingWhileMuted, () => {
                        (ex = !0), r.emitChange();
                    })),
                e.on(m.Sh.DesktopSourceEnd, () => {
                    g.Z.dispatch({
                        type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                        settings: { context: e.context }
                    });
                }),
                e.on(m.Sh.SoundshareAttached, () => {
                    (null == a ? void 0 : a.desktopSource) != null && j.default.track(el.rMx.SOUNDSHARE_ATTACHED, (0, M.Z)(null == a ? void 0 : a.desktopSource));
                }),
                e.on(m.Sh.SoundshareFailed, (e) => {
                    let { failureCode: t, failureReason: n, willRetry: r } = e;
                    e9(null == a ? void 0 : a.desktopSource, t, n, r);
                }),
                e.on(m.Sh.SoundshareSpeaking, () => {
                    (null == a ? void 0 : a.desktopSource) != null && (j.default.track(el.rMx.SOUNDSHARE_TRANSMITTING, (0, M.Z)(null == a ? void 0 : a.desktopSource)), null != er.Z.getHookError(el.K3D.SOUND) && g.Z.wait(() => g.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
                });
            let c = new S.V7();
            e.on(m.Sh.SoundshareTrace, (e) => {
                switch (e.type) {
                    case 'soundshare_attach_requested':
                        c.start(e2, () => {
                            g.Z.dispatch({
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
                                (c.stop(),
                                g.Z.wait(() =>
                                    g.Z.dispatch({
                                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                        errorMessage: t,
                                        errorCode: n
                                    })
                                )));
                        break;
                    case 'soundshare_state_transition':
                        4 === e.newState && (c.stop(), g.Z.wait(() => g.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
                }
            }),
                e.on(m.Sh.InteractionRequired, (e) => {
                    g.Z.dispatch({
                        type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                        required: e
                    });
                }),
                e.on(m.Sh.VideoHookInitialize, (e, t, n, r, i, s) => {
                    (null == a ? void 0 : a.desktopSource) != null &&
                        j.default.track(el.rMx.VIDEOHOOK_INITIALIZED, {
                            backend: e,
                            format: t,
                            framebuffer_format: n,
                            sample_count: r,
                            success: i,
                            reinitialization: s,
                            ...(0, M.Z)(null == a ? void 0 : a.desktopSource)
                        });
                }),
                e.on(m.Sh.NoiseCancellationError, (e) => {
                    eh.warn('noisecancellererror event: '.concat(e)),
                        (eW = !0),
                        j.default.track(el.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                        g.Z.dispatch({
                            type: 'AUDIO_SET_NOISE_SUPPRESSION',
                            enabled: !0
                        }),
                        g.Z.dispatch({
                            type: 'AUDIO_SET_NOISE_CANCELLATION',
                            enabled: !1
                        }),
                        g.Z.dispatch({
                            type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR',
                            code: e
                        });
                }),
                e.on(m.Sh.VoiceActivityDetectorError, (e) => {
                    eh.warn('voiceactivitydetectorerror event: '.concat(e)),
                        j.default.track(el.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                        g.Z.dispatch({
                            type: 'AUDIO_SET_MODE',
                            context: e_.Yn.DEFAULT,
                            mode: el.pM4.VOICE_ACTIVITY,
                            options: {
                                ...e4(e_.Yn.DEFAULT).modeOptions,
                                vadUseKrisp: !1
                            }
                        }),
                        g.Z.dispatch({
                            type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                            code: e
                        });
                }),
                e.on(m.Sh.VideoState, (t) => {
                    g.Z.dispatch({
                        type: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
                        videoState: t,
                        context: e.context
                    });
                }),
                e.on(m.Sh.Destroy, () => {
                    c.stop();
                }),
                e.setBitRate(ee.Z.bitrate),
                e.applyVideoQualityMode(eo.Z.mode);
        }),
            eS.on(m.aB.DeviceChange, (e, t, n) => {
                g.Z.dispatch({
                    type: 'MEDIA_ENGINE_DEVICES',
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n
                });
            }),
            eS.on(m.aB.VolumeChange, (e, t) => {
                g.Z.dispatch({
                    type: 'AUDIO_VOLUME_CHANGE',
                    inputVolume: e,
                    outputVolume: t
                });
            }),
            eS.on(m.aB.DesktopSourceEnd, () => {
                g.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: null
                });
            }),
            eS.on(m.aB.AudioPermission, (e) => {
                (ez = !0),
                    g.Z.dispatch({
                        type: 'MEDIA_ENGINE_PERMISSION',
                        kind: 'audio',
                        granted: e
                    });
            }),
            eS.on(m.aB.VideoPermission, (e) => {
                g.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'video',
                    granted: e
                });
            }),
            eS.on(m.aB.WatchdogTimeout, async () => {
                let e;
                try {
                    await W.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
                } catch (t) {
                    'number' == typeof t.status && (e = t.status);
                }
                eh.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), j.default.track(el.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
            }),
            eS.on(m.aB.VideoInputInitialized, (e) => {
                j.default.track(el.rMx.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * K.Z.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy
                });
            }),
            eS.on(m.aB.ClipsRecordingRestartNeeded, () => {
                g.Z.dispatch({ type: 'CLIPS_RESTART' });
            }),
            eS.on(m.aB.ClipsInitFailure, (e, t) => {
                g.Z.wait(() => {
                    g.Z.dispatch({
                        type: 'CLIPS_INIT_FAILURE',
                        errMsg: e,
                        applicationName: t
                    });
                });
            }),
            eS.on(m.aB.ClipsRecordingEnded, (e, t) => {
                var n, r;
                (null == s ? void 0 : null === (n = s.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == a ? void 0 : null === (r = a.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t && N.pn(t), (s = null));
            }),
            eS.on(m.aB.NativeScreenSharePickerUpdate, (e) => {
                G.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                    g.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                        existing: e
                    });
            }),
            eS.on(m.aB.NativeScreenSharePickerCancel, (e) => {
                G.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                    g.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                        existing: e
                    });
            }),
            eS.on(m.aB.NativeScreenSharePickerError, (e) => {
                G.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                    g.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                        error: e
                    });
            }),
            eS.on(m.aB.AudioDeviceModuleError, (e, t, n) => {
                j.default.track(el.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                    audio_device_module: e,
                    code: t,
                    device_name: n
                });
            }),
            ti.reset(),
            (0, ea.q)().then((e) => {
                null != e && (eJ = e.gpu_brand);
            }),
            !(function () {
                var e;
                let t = T.K.get('audio');
                null != t && (T.K.set(ep, { [e_.Yn.DEFAULT]: t }), T.K.remove('audio')),
                    (eg = null !== (e = T.K.get(ep)) && void 0 !== e ? e : {}),
                    E().each(eg, (e) => {
                        if ((E().defaultsDeep(e, eT()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, $.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)), !e.qosMigrated && ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                            var t;
                            (e.vadThrehsoldMigrated = !0), (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60);
                        }
                        (0, z.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : 1 !== e.ncUseKrispSettingVersion && ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), 1 !== e.hardwareEnabledVersion && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = 1)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
                    }),
                    (function () {
                        var e, t, n;
                        let r = e4();
                        eS.setAudioInputDevice(r.inputDeviceId), eS.setAudioOutputDevice(r.outputDeviceId), e8(), eS.setInputVolume(r.inputVolume), eS.setOutputVolume(r.outputVolume), eS.setH264Enabled(null === (e = r.hardwareEncoding) || void 0 === e || e || r.openH264), eS.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t), eS.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n), eS.setAecDump(r.aecDumpEnabled), eS.setSidechainCompression(r.sidechainCompression), eS.setSidechainCompressionStrength(r.sidechainCompressionStrength);
                    })();
            })(),
            ((0, z.isWindows)() || (0, z.isLinux)() || ((0, z.isMac)() && h().satisfies(null === A.Z || void 0 === A.Z ? void 0 : A.Z.os.release, '>=21.0.0'))) && !__OVERLAY__ && !eZ && !eY ? ((eZ = !0), tm()) : (0, z.isWeb)() && eS.supports(e_.AN.NOISE_CANCELLATION) ? ((eY = !0), r.emitChange()) : (0, z.isWeb)() && ta({ noiseCancellation: !1 }),
            tE(),
            (e$ = {
                [e_.AN.VIDEO]: eS.supports(e_.AN.VIDEO),
                [e_.AN.DESKTOP_CAPTURE]: eS.supports(e_.AN.DESKTOP_CAPTURE),
                [e_.AN.HYBRID_VIDEO]: eS.supports(e_.AN.HYBRID_VIDEO)
            }),
            this.waitFor(J.default, et.Z, en.Z, er.Z, ei.Z, b.ZP, H.Z.storage, Y.Z, L.Z, R.Z);
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
        return e4().aecDumpEnabled;
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
        return !this.isEnabled() || e4(e).mute || !H.Z.didHavePermission(ec.Eu.AUDIO) || this.isSelfDeaf(e) || (e === e_.Yn.DEFAULT && eb);
    }
    shouldSkipMuteUnmuteSound() {
        return ew;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        ew = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && et.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return e0;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return !this.isSupported() || e4(e).deaf;
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
        return e !== J.default.getId() && (e4(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eS.supports(e_.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT;
        return null !== (t = e4(n).disabledLocalVideos[e]) && void 0 !== t && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT;
        return null !== (t = e4(n).videoToggleStateMap[e]) && void 0 !== t ? t : el.ZUi.NONE;
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
            n = e4(t).localPans[e];
        return null != n ? n : eI;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT,
            n = t === e_.Yn.STREAM ? e_.Yh : e_.Qx,
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return e4(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return e4(e).modeOptions;
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
        return tu(ev, e4().inputDeviceId);
    }
    getOutputDeviceId() {
        return tu(eC, e4().outputDeviceId);
    }
    getVideoDeviceId() {
        return tu(ey, e4().videoDeviceId);
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
        let e = e4();
        return et.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
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
        return eS.getLoopback();
    }
    getNoiseSuppression() {
        let e = e4();
        return et.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = e4();
        return et.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
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
        return eS.getDebugLogging();
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
        return e4().automaticAudioSubsystem ? e_.iA.AUTOMATIC : eS.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eS.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return e4(e);
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
        return z.isPlatformEmbedded || this.getMode() !== el.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eS.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eO;
    }
    getVideoHook() {
        return e4().videoHook;
    }
    supportsVideoHook() {
        return eS.supports(e_.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = e4().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eS.supports(e_.AN.EXPERIMENTAL_SOUNDSHARE) && h().satisfies(null === A.Z || void 0 === A.Z ? void 0 : A.Z.os.release, eu.I9);
    }
    getOpenH264() {
        return e4().openH264;
    }
    getEverSpeakingWhileMuted() {
        return ex;
    }
    supportsScreenSoundshare() {
        return ((0, z.isMac)() && eS.supports(e_.AN.SOUNDSHARE) && h().satisfies(null === A.Z || void 0 === A.Z ? void 0 : A.Z.os.release, eu.yG) && tn()) || ((0, z.isWindows)() && eS.supports(e_.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare());
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
                (e === e_.Yn.DEFAULT || tr()) &&
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
            r = k.m.getCurrentConfig({ location: 'MediaEngineStore' }),
            i =
                null != e
                    ? k.N.getCurrentConfig({
                          guildId: e,
                          location: 'MediaEngineStore'
                      })
                    : null,
            a = r.canSupportDaveProtocol || (null == i ? void 0 : i.canSupportDaveProtocol),
            s = Math.max(r.protocolVersionFloor, null !== (t = null == i ? void 0 : i.protocolVersionFloor) && void 0 !== t ? t : 0);
        return a && (n >= s || (n > 5 && 114 === n)) ? n : 0;
    }
    hasClipsSource() {
        return null != s;
    }
}
ef(tA, 'displayName', 'MediaEngineStore'),
    (r = new tA(g.Z, {
        VOICE_CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
            if ((r !== n && e8(i, null), null != t || null == n)) {
                eH = !1;
                return;
            }
            if (eH) return;
            eH = !0;
            let a = e4();
            (a.mute || a.deaf) &&
                (ta({
                    deaf: !1,
                    mute: !1
                }),
                eS.eachConnection(e7));
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => (i === t.sessionId ? ((eL = t.mute || t.suppress), (eM = t.deaf), eS.eachConnection(e7), e8(!(null != t.guildId && null != t.channelId && null != ej && ej !== t.channelId) && eP), (ej = t.channelId), !0) : (!__OVERLAY__ && t.userId === J.default.getId() && null == ei.Z.getChannelId() && e8(!1, null), e)), !1);
        },
        CONNECTION_OPEN: function (e) {
            (i = e.sessionId),
                (eL = !1),
                (eM = !1),
                !(0, z.isWeb)() &&
                    B.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                        let t = e4();
                        !e.sidechainAvailable && t.sidechainCompression ? (ta({ sidechainCompressionSettingVersion: 0 }), th(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < 1 && (ta({ sidechainCompressionSettingVersion: 1 }), th(e.sidechainEnabled));
                    });
            let t = e4();
            eS.supports(e_.AN.AUTOMATIC_AUDIO_SUBSYSTEM) ? (t.automaticAudioSubsystem && tS(), (0, z.isWindows)() && t.audioSubsystemSettingVersion < 2 && (ta({ audioSubsystemSettingVersion: 2 }), !t.automaticAudioSubsystem && eS.getAudioSubsystem() === e_.iA.STANDARD && tT(e_.iA.AUTOMATIC))) : ta({ automaticAudioSubsystem: !1 }), tc();
        },
        CONNECTION_CLOSED: function () {
            i = null;
        },
        RTC_CONNECTION_STATE: function (e) {
            switch (e.state) {
                case el.hes.CONNECTING:
                    ts();
                    break;
                case el.hes.RTC_CONNECTING:
                    (eF = !1), (eV = !1);
                    break;
                case el.hes.RTC_CONNECTED:
                    e8();
                    break;
                case el.hes.DISCONNECTED:
                    (function () {
                        if (0 === eq.size) return;
                        let e = e_.Yn.DEFAULT,
                            { disabledLocalVideos: t } = e4(e);
                        eq.forEach((n) => {
                            d()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eS.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            eq.clear(),
                            ta({ disabledLocalVideos: t }, e, !1);
                    })(),
                        tE();
            }
            ti.update();
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
            let { mute: t } = e;
            (eD = t), eS.eachConnection(e7);
        },
        AUDIO_TOGGLE_SELF_MUTE: function (e) {
            let { context: t, skipMuteUnmuteSoundEffect: n } = e,
                { mute: r, deaf: i } = e4(t);
            if (t === e_.Yn.DEFAULT && (H.Z.requestPermission(ec.Eu.AUDIO), eb)) return !1;
            !(r = !i && !r) && (i = !1),
                n && (ew = !0),
                ta(
                    {
                        mute: r,
                        deaf: i
                    },
                    t
                ),
                eS.eachConnection(e7);
        },
        AUDIO_SET_SELF_MUTE: function (e) {
            let { context: t, mute: n } = e;
            ta({ mute: n }, t), eS.eachConnection(e7);
        },
        AUDIO_TOGGLE_SELF_DEAF: function (e) {
            let { context: t } = e;
            ta({ deaf: !e4(t).deaf }, t), eS.eachConnection(e7);
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
            let { context: t, userId: n } = e;
            if (n === J.default.getId()) return;
            let { localMutes: r } = e4(t);
            r[n] ? delete r[n] : (r[n] = !0), ta({ localMutes: r }, t), eS.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
            var t, n, r, i, a, s, o;
            let { context: l, userId: u, videoToggleState: c, persist: _, isAutomatic: E } = e;
            d()(!(_ && E), 'These are not allowed to both be true.');
            let f = c === el.ZUi.DISABLED,
                { disabledLocalVideos: h } = e4(l),
                p = null !== (t = h[u]) && void 0 !== t && t,
                I = eq.has(u),
                m = c === el.ZUi.AUTO_ENABLED || c === el.ZUi.MANUAL_ENABLED;
            eh.info('disableVideo='.concat(f, ' currentlyDisabled=').concat(p, ' currentlyAutoDisabled=').concat(I, ', isVideoShown=').concat(m)), d()(!(I && !p), 'If you are auto-disabled, then you are also disabled.');
            let T = f !== p,
                S = l === e_.Yn.DEFAULT,
                g = E && T && S,
                A = _ && T && S;
            eh.info('changed='.concat(T, ' isDefaultContext=').concat(S, ' isUpdateCausedByVideoHealthManager=').concat(g, ' isManualToggleByUser=').concat(A));
            let { videoToggleStateMap: N } = e4(l);
            if ((N[u] === el.ZUi.AUTO_PROBING && c === el.ZUi.AUTO_ENABLED && (0, V.Z)(u, f ? e_.fC.AUTO_DISABLE : e_.fC.AUTO_ENABLE, m), (N[u] = c), ta({ videoToggleStateMap: N }, l, _), c === el.ZUi.AUTO_PROBING ? null === (n = ei.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (r = ei.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(u, !1), !eQ && (eh.info('isAutoDisableAllowed='.concat(eQ, ' - disabling VideoHealthManager')), null === (a = ei.Z.getRTCConnection()) || void 0 === a || null === (i = a.getVideoHealthManager()) || void 0 === i || i.disable()), g)) {
                if ((!f && !I) || (f && !eQ)) return;
                (0, V.Z)(u, f ? e_.fC.AUTO_DISABLE : e_.fC.AUTO_ENABLE, m), f ? eq.add(u) : eq.delete(u);
            } else A && (I && !f ? (eh.info('disallowing auto-disable for this session because of manual override by user'), (eQ = !1), null === (o = ei.Z.getRTCConnection()) || void 0 === o || null === (s = o.getVideoHealthManager()) || void 0 === s || s.disable(), (0, V.Z)(u, e_.fC.MANUAL_REENABLE, m)) : (0, V.Z)(u, f ? e_.fC.MANUAL_DISABLE : e_.fC.MANUAL_ENABLE, m));
            S && !f && eq.delete(u),
                f ? (h[u] = !0) : delete h[u],
                ta({ disabledLocalVideos: h }, l, _),
                eS.eachConnection((e) => {
                    var t;
                    return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t);
                }, l);
        },
        AUDIO_SET_LOCAL_VOLUME: function (e) {
            let { context: t, userId: n, volume: r } = e;
            if (n === J.default.getId()) return;
            let i = t === e_.Yn.STREAM ? e_.Yh : e_.Qx,
                { localVolumes: a } = e4(t);
            r === i ? delete a[n] : (a[n] = r), ta({ localVolumes: a }, t), eS.eachConnection((e) => e.setLocalVolume(n, r), t);
        },
        AUDIO_SET_LOCAL_PAN: function (e) {
            let { context: t, userId: n, left: r, right: i } = e,
                { localPans: a } = e4(t);
            (a[n] = {
                left: r,
                right: i
            }),
                ta({ localPans: a }, t),
                eS.eachConnection((e) => e.setLocalPan(n, r, i), t);
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
                eS.eachConnection(e5),
                ti.update();
        },
        AUDIO_SET_INPUT_VOLUME: function (e) {
            let { volume: t } = e;
            ta({ inputVolume: e6(t) }), eS.setInputVolume(t);
        },
        AUDIO_SET_OUTPUT_VOLUME: function (e) {
            let { volume: t } = e;
            ta({ outputVolume: t }), eS.setOutputVolume(t);
        },
        AUDIO_SET_INPUT_DEVICE: function (e) {
            let { id: t } = e;
            ta({ inputDeviceId: (t = tu(ev, t)) }), eS.setAudioInputDevice(t);
        },
        AUDIO_SET_OUTPUT_DEVICE: function (e) {
            let { id: t } = e;
            ta({ outputDeviceId: (t = tu(eC, t)) }), eS.setAudioOutputDevice(t);
        },
        AUDIO_SET_ECHO_CANCELLATION: function (e) {
            let t = ta({ echoCancellation: e.enabled });
            eS.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), tp(), tf(e.location);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
            th(e.enabled);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
            let t = ta({ sidechainCompressionStrength: e.strength });
            eS.setSidechainCompressionStrength(t.sidechainCompressionStrength);
        },
        AUDIO_SET_LOOPBACK: function (e) {
            let { enabled: t } = e;
            return (eX = t), tp();
        },
        AUDIO_SET_NOISE_SUPPRESSION: function (e) {
            let t = ta({ noiseSuppression: e.enabled });
            eS.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), tp(), tf(e.location);
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
            let t = ta({ automaticGainControl: e.enabled });
            eS.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), tp(), tf(e.location);
        },
        AUDIO_SET_NOISE_CANCELLATION: function (e) {
            let t = ta({ noiseCancellation: e.enabled });
            eS.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), tp(), tf(e.location);
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
            ta({ silenceWarning: e.enabled }), ti.update();
        },
        AUDIO_SET_DEBUG_LOGGING: function (e) {
            eS.setDebugLogging(e.enabled);
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
            eS.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
        },
        AUDIO_SET_QOS: function (e) {
            let { enabled: t } = e;
            ta({ qos: t }), eS.eachConnection((e) => e.setQoS(t));
        },
        MEDIA_ENGINE_DEVICES: function (e) {
            let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
            !(function (e) {
                let t = ev;
                if (((ev = tl(e, eE.Z.Messages.NO_INPUT_DEVICES)), !E().isEqual(ev, t))) {
                    let e = e4(),
                        t = tu(ev, e.inputDeviceId);
                    eS.setAudioInputDevice(t);
                }
            })(t),
                !(function (e) {
                    let t = eC;
                    if (((eC = tl(e, eE.Z.Messages.NO_OUTPUT_DEVICES)), !E().isEqual(eC, t))) {
                        let e = e4(),
                            t = tu(eC, e.outputDeviceId);
                        eS.setAudioOutputDevice(t);
                    }
                })(n),
                !(function (e) {
                    ek = e.length > 0;
                    let t = ey;
                    if (((ey = tl(e, eE.Z.Messages.NO_VIDEO_DEVICES)), eP && !E().isEqual(ey, t))) {
                        var n;
                        let e = void 0 !== ey[eU],
                            r = eU === e_.w5 && (null === (n = t[e_.w5]) || void 0 === n ? void 0 : n.disabled);
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
            T.K.remove(ep), location.reload();
        },
        AUDIO_INPUT_DETECTED: function (e) {
            let { inputDetected: t } = e;
            (eB = t), !eF && eB && ((eF = !0), ti.update());
        },
        AUDIO_SET_SUBSYSTEM: function (e) {
            tT(e.subsystem);
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
            (eN = e.enabled),
                e.unmute &&
                    ta({
                        mute: !1,
                        deaf: !1
                    }),
                eS.eachConnection(e7);
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
            let { enabled: t } = e;
            H.Z.requestPermission(ec.Eu.CAMERA), e8(t);
        },
        MEDIA_ENGINE_PERMISSION: function (e) {
            let { kind: t, granted: n } = e;
            if (!n)
                switch (t) {
                    case 'audio':
                        (eN = !1), eS.eachConnection(e7);
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
                    l = null !== (t = s.context) && void 0 !== t ? t : e_.Yn.DEFAULT,
                    u =
                        null !== (n = s.qualityOptions) && void 0 !== n
                            ? n
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              },
                    c = !1 === o ? null : W.Z.getPidFromDesktopSource(i);
                z.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = td(c)), null != e && t_(e, r)),
                    !(function (e) {
                        if (e !== eR) null != a && eS.setGoLiveSource(null, eR), (eR = e);
                    })(l),
                    e8(l === e_.Yn.STREAM && eP, {
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
            } else e8(eP, null);
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
            let { id: t } = e;
            ta({ videoDeviceId: (t = tu(ey, t)) }), e8();
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function (e) {
            let t = ta({ experimentalEncoders: e.enabled });
            eS.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
            return eO !== e.required && ((eO = e.required), !e.required && eS.interact(), !0);
        },
        USER_SETTINGS_MODAL_INIT: tg,
        USER_SETTINGS_MODAL_SET_SECTION: tg,
        CERTIFIED_DEVICES_SET: function () {
            return eS.eachConnection(te), !1;
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
                n = ta({ openH264: t });
            eS.setH264Enabled(n.hardwareEncoding || n.openH264),
                eS.eachConnection((e) => {
                    var t;
                    return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
                });
        },
        MEDIA_ENGINE_SET_HARDWARE_ENCODING: function (e) {
            var t, n;
            let { enabled: r } = e,
                i = ta({ hardwareEncoding: r });
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
                n = D.Z.isEnabled();
            if (t === el.$7l.BACKGROUND && eP && !n) (eG = !0), e8(!1);
            else {
                if (t !== el.$7l.ACTIVE || !eG) return !1;
                (eG = !1), e8(!0);
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
            (eb = n), eS.eachConnection(e7);
        },
        SET_NATIVE_PERMISSION: function (e) {
            let { state: t, permissionType: n } = e,
                r = t === ec.PQ.ACCEPTED;
            switch (n) {
                case ec.Eu.AUDIO:
                    (ez = !0), eS.eachConnection(e7);
                    break;
                case ec.Eu.CAMERA:
                    !r && eP && e8(!1);
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
                n = ta({ aecDumpEnabled: t });
            eS.setAecDump(n.aecDumpEnabled);
        },
        CHANNEL_DELETE: function () {
            if ((!eP && null == a) || null != ei.Z.getRTCConnectionId()) return !1;
            e8(!1, null);
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
            tc(!0);
        },
        CLIPS_INIT: function (e) {
            let { sourceId: t, applicationName: n, quality: i } = e,
                a = R.Z.isDecoupledGameClippingEnabled(),
                o = R.Z.getSettings().decoupledClipsEnabled;
            if (!a || !o || null == A.Z) return;
            let l = null,
                u = null,
                c = W.Z.getPidFromDesktopSource(t);
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
            null != s && s.desktopSource.id !== d.desktopSource.id && (eS.setClipsSource(null), (0, z.isWindows)() && null != s.desktopSource.soundshareId && N.pn(s.desktopSource.soundshareId)), null != l && t_(l, u), (s = d);
            let _ = e3(),
                E = e4().videoHook;
            eS.setClipsSource({
                desktopDescription: {
                    id: s.desktopSource.id,
                    soundshareId: s.desktopSource.soundshareId,
                    useVideoHook: E,
                    useGraphicsCapture: tt(),
                    useLoopback: r.getExperimentalSoundshare(),
                    useQuartzCapturer: !0,
                    allowScreenCaptureKit: tn(),
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
