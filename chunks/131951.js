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
    M = n(227196),
    P = n(12898),
    U = n(294473),
    w = n(706629),
    x = n(926951),
    G = n(836157),
    k = n(498600),
    B = n(998594),
    F = n(529558),
    V = n(111672),
    H = n(874785),
    Z = n(636458),
    Y = n(441167),
    j = n(338336),
    W = n(751571),
    K = n(725380),
    z = n(581883),
    q = n(626135),
    Q = n(12647),
    X = n(70956),
    $ = n(358085),
    J = n(960048),
    ee = n(998502),
    et = n(13140),
    en = n(314897),
    er = n(967368),
    ei = n(463395),
    ea = n(592125),
    es = n(858340),
    eo = n(19780),
    el = n(704806),
    eu = n(631768),
    ec = n(981631),
    ed = n(70722),
    e_ = n(761274),
    eE = n(526761),
    ef = n(65154),
    eh = n(689938);
function ep(e, t, n) {
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
let eI = new v.Z('MediaEngineStore');
((u = o || (o = {}))[(u.DETACHED = 0)] = 'DETACHED'), (u[(u.WAITING = 1)] = 'WAITING'), (u[(u.ATTACHED = 2)] = 'ATTACHED'), (u[(u.STARTED = 3)] = 'STARTED'), (u[(u.PLAYING = 4)] = 'PLAYING'), (u[(u.SILENCE = 5)] = 'SILENCE');
let em = 'MediaEngineStore',
    eT = {
        left: 1,
        right: 1
    },
    eS = 5 * X.Z.Millis.SECOND;
function eg() {
    return {
        mode: ec.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
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
        inputVolume: ef.Qx,
        outputVolume: ef.Qx,
        inputDeviceId: ef.w5,
        outputDeviceId: ef.w5,
        videoDeviceId: ef.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eA.supports(ef.AN.VIDEO_HOOK),
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
let eA = (0, I.Mt)((0, I.jj)()),
    eN = {},
    eO = new Set([ef.Yn.DEFAULT]),
    eR = eA.supports(ef.AN.AUTO_ENABLE),
    ev = !1,
    eC = ef.Yn.STREAM,
    ey = { [ef.w5]: tl(eh.Z.Messages.NO_INPUT_DEVICES) },
    eL = { [ef.w5]: tl(eh.Z.Messages.NO_OUTPUT_DEVICES) },
    eD = { [ef.w5]: tl(eh.Z.Messages.NO_VIDEO_DEVICES) },
    eb = !1,
    eM = !1,
    eP = !1,
    eU = !1,
    ew = !1,
    ex = ef.Av,
    eG = !1,
    ek = !1,
    eB = !1,
    eF = !1,
    eV = null,
    eH = !1,
    eZ = !1,
    eY = !1,
    ej = !1,
    eW = !1,
    eK = null,
    ez = !1,
    eq = !1,
    eQ = !1;
W.Z.hasPermission(e_.Eu.AUDIO, { showAuthorizationError: !1 }), W.Z.hasPermission(e_.Eu.CAMERA, { showAuthorizationError: !1 });
let eX = new Set(),
    e$ = !1,
    eJ = !1,
    e0 = {},
    e1 = null,
    e2 = !0,
    e3 = {},
    e4 = 5 * X.Z.Millis.SECOND;
function e5() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.Yn.DEFAULT,
        t = eN[e];
    return null == t && ((t = eg()), (eN[e] = t)), t;
}
function e6(e) {
    let t = e5(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp:
            t.modeOptions.vadUseKrisp &&
            (function () {
                return eW || !1;
            })(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function e7(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.Qx;
    return E().clamp(e, 0, t);
}
function e8(e) {
    let t = e5(e.context),
        n = !eR || t.mute || t.deaf;
    e.context === ef.Yn.DEFAULT ? (n = n || eb || eM || eP || !W.Z.didHavePermission(e_.Eu.AUDIO)) : e.context === ef.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === ef.Yn.DEFAULT && N.Z.updateNativeMute();
}
function e9() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        o = a;
    if (((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, $.isWindows)() && A.pn(o.desktopSource.soundshareId), eA.setGoLiveSource(null, eC)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == s ? void 0 : null === (t = s.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eA.setGoLiveSource(null, eC), (ew || i) && ((ex = (ew = i) ? tc(eD, e5().videoDeviceId) : ef.Av), eA.setVideoInputDevice(ex)), (a = s), null != s)) {
        let e = {
            resolution: s.quality.resolution,
            frameRate: s.quality.frameRate
        };
        if (null != s.desktopSource) {
            let { hdrCaptureMode: t } = k.Z.getCurrentConfig({ location: 'f627ab_2' }, { autoTrackExposure: !1 }),
                n = e5().videoHook;
            eA.setGoLiveSource(
                {
                    desktopDescription: {
                        id: s.desktopSource.id,
                        soundshareId: s.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: tn(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tr(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: eS,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eC
            );
        }
        null != s.cameraSource &&
            eA.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: s.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: s.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eC
            );
    }
}
function te(e, t, n, r) {
    var i;
    let a = null !== (i = null == e ? void 0 : e.soundshareSession) && void 0 !== i ? i : '';
    null == e3[a] && (e3[a] = new Set());
    let s = null != t && !e3[a].has(t);
    s && e3[a].add(t),
        (null == t || s) &&
            q.default.track(ec.rMx.SOUNDSHARE_FAILED, {
                soundshare_failure_code: t,
                soundshare_failure_reason: n,
                soundshare_failure_will_retry: r,
                ...(0, b.Z)(e)
            });
}
function tt(e) {
    let t = e5(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(ei.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ei.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ei.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, $.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tn() {
    return (0, $.isWindows)() && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, ed.nz);
}
function tr() {
    return (0, $.isMac)() && eA.supports(ef.AN.SCREEN_CAPTURE_KIT) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, ed.C7);
}
function ti() {
    var e;
    let t = (null === (e = ea.Z.getChannel(eK)) || void 0 === e ? void 0 : e.type) === ec.d4z.GUILD_STAGE_VOICE,
        n = r.getHardwareEncoding();
    return !t && n && x.Z.supportsSimulcast();
}
let ta = new (class {
    start() {
        !this.started && ((this.started = !0), eA.on(I.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eA.removeListener(I.aB.Silence, this.handleSilence),
            S.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = e5();
        !eH && eo.Z.getState() === ec.hes.RTC_CONNECTED && e.mode === ec.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        ep(this, 'stateChangeTimeout', void 0),
            ep(this, 'noVoiceTimeout', 5000),
            ep(this, 'voiceTimeout', 1500),
            ep(this, 'started', !1),
            ep(this, 'handleSilence', (e) => {
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
                                    e && (eZ = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function ts(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = e5(t);
    return Object.assign(r, e), !__OVERLAY__ && n && m.K.set(em, eN), r;
}
function to() {
    !eR &&
        eA.enable().then(() =>
            S.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tl(e) {
    return {
        id: ef.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function tu(e, t) {
    if (0 === e.length) {
        let e = tl(t);
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
function tc(e, t) {
    var n;
    let r = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
    return null != r ? r.id : t;
}
function td() {
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
        let i = e === eE.u0.USER ? ef.Yn.DEFAULT : ef.Yn.STREAM,
            a = i === ef.Yn.STREAM ? ef.Yh : ef.Qx,
            s = null !== (t = r[e]) && void 0 !== t ? t : {},
            { localMutes: o, localVolumes: l } = e5(i);
        for (let [e, t] of Object.entries(s))
            null == (0, K.Ky)(i, e) &&
                (t.muted ? (o[e] = !0) : delete o[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eA.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(o), ...Object.keys(l)]))
                null == s[e] &&
                    (delete o[e],
                    delete l[e],
                    eA.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        ts(
            {
                localMutes: o,
                localVolumes: l
            },
            i
        );
    }
}
function t_(e) {
    if (null == r)
        return (
            eI.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
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
function tE(e, t) {
    (0, $.isWindows)() &&
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
function tf() {
    let e = ef.Yn.DEFAULT,
        { videoToggleStateMap: t } = e5(e);
    for (let [e, n] of Object.entries(t)) n === ec.ZUi.AUTO_PROBING && delete t[e];
    ts({ videoToggleStateMap: t }, e, !1);
}
function th(e) {
    let t = e5();
    q.default.track(ec.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function tp(e) {
    let t = ts({ sidechainCompression: e });
    eA.setSidechainCompression(t.sidechainCompression);
}
function tI() {
    let e = e5(),
        t = e.inputDeviceId,
        n = ei.Z.hasEchoCancellation(t) || e.echoCancellation,
        r = ei.Z.hasNoiseSuppression(t) || e.noiseSuppression,
        i = ei.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
        a = e.noiseCancellation;
    eA.setLoopback(eJ, {
        echoCancellation: n,
        noiseSuppression: r,
        automaticGainControl: i,
        noiseCancellation: a
    });
}
function tm() {
    return eW || !1;
}
async function tT() {
    try {
        await ee.ZP.ensureModule('discord_krisp'), ee.ZP.requireModule('discord_krisp'), (eW = !0), r.emitChange();
    } catch (t) {
        eI.warn('Failed to load Krisp module: '.concat(t.message)), J.Z.captureException(t);
        let e = ef.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? ef.H3.INITIALIZED : n;
        }
        q.default.track(ec.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), ts({ noiseCancellation: !1 });
    } finally {
        ej = !1;
    }
}
function tS(e) {
    let { section: t } = e;
    return t === ec.oAB.VOICE && to(), !1;
}
class tg extends (l = p.ZP.Store) {
    initialize() {
        eA.on(I.aB.Connection, (e) => {
            var t, n;
            e6(e), e8(e), tt(e);
            let i = e5();
            e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = i.openH264) || void 0 === n || n);
            let { useExperimentalRateControl: s } = Z.Z.getCurrentConfig({ location: 'f627ab_4' }, { autoTrackExposure: !1 });
            s && e.setExperimentFlag(ef.V8.VIDEOTOOLBOX_RATE_CONTROL, !0);
            let o = eo.Z.getGuildId(),
                {
                    muteBeforeProcessing: l,
                    pttBeforeProcessing: u,
                    skipEncode: c
                } = (null != o ? w.Z : U.Z).getCurrentConfig(
                    {
                        location: 'setupMediaEngine',
                        ...(null != o && { guildId: o })
                    },
                    { autoTrackExposure: !0 }
                );
            l && e.setExperimentFlag(ef.V8.MUTE_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(ef.V8.PTT_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(ef.V8.SKIP_ENCODE, !0);
            let { resetOnErrors: d, fallbackOnErrors: _, fallbackOnConsecutiveErrors: E } = H.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 });
            d && e.setExperimentFlag(ef.V8.RESET_DECODER_ON_ERRORS, !0), _ && e.setExperimentFlag(ef.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), E && e.setExperimentFlag(ef.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            if (e.context === ef.Yn.STREAM && ti()) {
                let t = x.Z.goliveSimulcastFlag();
                void 0 !== t && e.setExperimentFlag(t, !0);
            }
            if (((0, $.isWindows)() ? ((null == e1 ? void 0 : e1.startsWith('NVIDIA')) ? e.setExperimentFlag(ef.V8.SIGNAL_AV1, !0) : (null == e1 ? void 0 : e1.startsWith('AMD')) && P.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(ef.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(ef.V8.SIGNAL_AV1_DECODE, !0)) : ((0, $.isMac)() || (0, $.isLinux)()) && e.setExperimentFlag(ef.V8.SIGNAL_AV1_DECODE, !0), (0, $.isWindows)() && e.setExperimentFlag(ef.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eA.setHasFullbandPerformance((0, C.b)()), e.setRemoteAudioHistory(0), (0, R.Z)(r))) {
                let t = O.Z.getSettings();
                e.setExperimentFlag(ef.V8.STREAMER_CLIP, t.clipsEnabled);
                let { enableViewerClipping: n } = Y.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
                e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ef.ux);
            }
            for (let t of ((i = e5(e.context)), e.setPostponeDecodeLevel(100), Object.keys(i.localMutes))) t !== en.default.getId() && e.setLocalMute(t, i.localMutes[t]);
            for (let t of Object.keys(i.localVolumes)) t !== en.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
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
                e.context === ef.Yn.DEFAULT &&
                    ((ek = !1),
                    e.on(I.Sh.SpeakingWhileMuted, () => {
                        (ek = !0), r.emitChange();
                    })),
                e.on(I.Sh.DesktopSourceEnd, () => {
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                        settings: { context: e.context }
                    });
                }),
                e.on(I.Sh.SoundshareAttached, () => {
                    (null == a ? void 0 : a.desktopSource) != null && q.default.track(ec.rMx.SOUNDSHARE_ATTACHED, (0, b.Z)(null == a ? void 0 : a.desktopSource));
                }),
                e.on(I.Sh.SoundshareFailed, (e) => {
                    let { failureCode: t, failureReason: n, willRetry: r } = e;
                    te(null == a ? void 0 : a.desktopSource, t, n, r);
                }),
                e.on(I.Sh.SoundshareSpeaking, () => {
                    (null == a ? void 0 : a.desktopSource) != null && (q.default.track(ec.rMx.SOUNDSHARE_TRANSMITTING, (0, b.Z)(null == a ? void 0 : a.desktopSource)), null != es.Z.getHookError(ec.K3D.SOUND) && S.Z.wait(() => S.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
                });
            let f = new T.V7();
            e.on(I.Sh.SoundshareTrace, (e) => {
                switch (e.type) {
                    case 'soundshare_attach_requested':
                        f.start(e4, () => {
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
                            (te(null == a ? void 0 : a.desktopSource, n, t, r),
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
                        q.default.track(ec.rMx.VIDEOHOOK_INITIALIZED, {
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
                    eI.warn('noisecancellererror event: '.concat(e)),
                        (ez = !0),
                        q.default.track(ec.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                    eI.warn('voiceactivitydetectorerror event: '.concat(e)),
                        q.default.track(ec.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.Z.dispatch({
                            type: 'AUDIO_SET_MODE',
                            context: ef.Yn.DEFAULT,
                            mode: ec.pM4.VOICE_ACTIVITY,
                            options: {
                                ...e5(ef.Yn.DEFAULT).modeOptions,
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
                e.setBitRate(er.Z.bitrate),
                e.applyVideoQualityMode(eu.Z.mode);
        }),
            eA.on(I.aB.DeviceChange, (e, t, n) => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_DEVICES',
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n
                });
            }),
            eA.on(I.aB.VolumeChange, (e, t) => {
                S.Z.dispatch({
                    type: 'AUDIO_VOLUME_CHANGE',
                    inputVolume: e,
                    outputVolume: t
                });
            }),
            eA.on(I.aB.DesktopSourceEnd, () => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: null
                });
            }),
            eA.on(I.aB.AudioPermission, (e) => {
                (eQ = !0),
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_PERMISSION',
                        kind: 'audio',
                        granted: e
                    });
            }),
            eA.on(I.aB.VideoPermission, (e) => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'video',
                    granted: e
                });
            }),
            eA.on(I.aB.WatchdogTimeout, async () => {
                let e;
                try {
                    await Q.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
                } catch (t) {
                    'number' == typeof t.status && (e = t.status);
                }
                eI.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), q.default.track(ec.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
            }),
            eA.on(I.aB.VideoInputInitialized, (e) => {
                q.default.track(ec.rMx.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * X.Z.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy
                });
            }),
            eA.on(I.aB.ClipsRecordingRestartNeeded, () => {
                S.Z.dispatch({ type: 'CLIPS_RESTART' });
            }),
            eA.on(I.aB.ClipsInitFailure, (e, t) => {
                S.Z.wait(() => {
                    S.Z.dispatch({
                        type: 'CLIPS_INIT_FAILURE',
                        errMsg: e,
                        applicationName: t
                    });
                });
            }),
            eA.on(I.aB.ClipsRecordingEnded, (e, t) => {
                var n, r;
                (null == s ? void 0 : null === (n = s.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == a ? void 0 : null === (r = a.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t && A.pn(t), (s = null));
            }),
            eA.on(I.aB.NativeScreenSharePickerUpdate, (e) => {
                B.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                        existing: e
                    });
            }),
            eA.on(I.aB.NativeScreenSharePickerCancel, (e) => {
                B.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                        existing: e
                    });
            }),
            eA.on(I.aB.NativeScreenSharePickerError, (e) => {
                B.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                        error: e
                    });
            }),
            eA.on(I.aB.AudioDeviceModuleError, (e, t, n) => {
                q.default.track(ec.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                    audio_device_module: e,
                    code: t,
                    device_name: n
                });
            }),
            ta.reset(),
            (0, el.q)().then((e) => {
                null != e && (e1 = e.gpu_brand);
            }),
            !(function () {
                var e;
                let t = m.K.get('audio');
                null != t && (m.K.set(em, { [ef.Yn.DEFAULT]: t }), m.K.remove('audio')),
                    (eN = null !== (e = m.K.get(em)) && void 0 !== e ? e : {}),
                    E().each(eN, (e) => {
                        if ((E().defaultsDeep(e, eg()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, et.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)), !e.qosMigrated && ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                            var t;
                            (e.vadThrehsoldMigrated = !0), (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60);
                        }
                        (0, $.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : 1 !== e.ncUseKrispSettingVersion && ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), 1 !== e.hardwareEnabledVersion && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = 1)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
                    }),
                    (function () {
                        var e, t, n;
                        let r = e5();
                        eA.setAudioInputDevice(r.inputDeviceId), eA.setAudioOutputDevice(r.outputDeviceId), e9(), eA.setInputVolume(r.inputVolume), eA.setOutputVolume(r.outputVolume), eA.setH264Enabled(null === (e = r.hardwareEncoding) || void 0 === e || e || r.openH264), eA.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t), eA.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n), eA.setAecDump(r.aecDumpEnabled), eA.setSidechainCompression(r.sidechainCompression), eA.setSidechainCompressionStrength(r.sidechainCompressionStrength);
                    })();
            })(),
            ((0, $.isWindows)() || (0, $.isLinux)() || ((0, $.isMac)() && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, '>=21.0.0'))) && !__OVERLAY__ && !ej && !eW ? ((ej = !0), tT()) : (0, $.isWeb)() && eA.supports(ef.AN.NOISE_CANCELLATION) ? ((eW = !0), r.emitChange()) : (0, $.isWeb)() && ts({ noiseCancellation: !1 }),
            tf(),
            (e0 = {
                [ef.AN.VIDEO]: eA.supports(ef.AN.VIDEO),
                [ef.AN.DESKTOP_CAPTURE]: eA.supports(ef.AN.DESKTOP_CAPTURE),
                [ef.AN.HYBRID_VIDEO]: eA.supports(ef.AN.HYBRID_VIDEO)
            }),
            this.waitFor(en.default, ei.Z, ea.Z, es.Z, eo.Z, D.ZP, W.Z.storage, z.Z, y.Z, O.Z);
    }
    supports(e) {
        return eA.supports(e);
    }
    supportsInApp(e) {
        return e0[e] || eA.supports(e);
    }
    isSupported() {
        return eA.supported();
    }
    isExperimentalEncodersSupported() {
        return eA.supports(ef.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eA.supports(ef.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return eW || !1;
    }
    isNoiseCancellationError() {
        return ez;
    }
    isAutomaticGainControlSupported() {
        return eA.supports(ef.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return eW || !1;
    }
    isAecDumpSupported() {
        return eA.supports(ef.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eA.supports(ef.AN.VIDEO) && eA.supports(ef.AN.SIMULCAST);
    }
    getAecDump() {
        return e5().aecDumpEnabled;
    }
    getMediaEngine() {
        return eA;
    }
    getVideoComponent() {
        return eA.supports(ef.AN.DIRECT_VIDEO) && eA.setUseDirectVideo(!0), eA.Video;
    }
    getCameraComponent() {
        return eA.supports(ef.AN.DIRECT_VIDEO) && eA.setUseDirectVideo(!0), eA.Camera;
    }
    isEnabled() {
        return eR;
    }
    isMute() {
        return this.isSelfMute() || eb;
    }
    isDeaf() {
        return this.isSelfDeaf() || eU;
    }
    hasContext(e) {
        return null != eN[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.Yn.DEFAULT;
        return e === ef.Yn.DEFAULT && eM;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.Yn.DEFAULT;
        return !this.isEnabled() || e5(e).mute || !W.Z.didHavePermission(e_.Eu.AUDIO) || this.isSelfDeaf(e) || (e === ef.Yn.DEFAULT && eP);
    }
    shouldSkipMuteUnmuteSound() {
        let { airpodsMuteSupported: e } = M.Z.getCurrentConfig({ location: 'shouldSkipMuteUnmuteSound' }, { autoTrackExposure: !0 });
        return !!e && eG;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        eG = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ei.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return e2;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.Yn.DEFAULT;
        return !this.isSupported() || e5(e).deaf;
    }
    isVideoEnabled() {
        return ew && eF;
    }
    isVideoAvailable() {
        return Object.values(eD).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.Yn.STREAM;
        return eC === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.Yn.STREAM;
        return eC === t && null != a && (null === (e = a.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.Yn.DEFAULT;
        return e !== en.default.getId() && (e5(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eA.supports(ef.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.Yn.DEFAULT;
        return null !== (t = e5(n).disabledLocalVideos[e]) && void 0 !== t && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.Yn.DEFAULT;
        return null !== (t = e5(n).videoToggleStateMap[e]) && void 0 !== t ? t : ec.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.Yn.DEFAULT;
        return t === ef.Yn.DEFAULT && eX.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.Yn.DEFAULT;
        return e === ef.Yn.DEFAULT && eX.size > 0;
    }
    isMediaFilterSettingLoading() {
        return eq;
    }
    isNativeAudioPermissionReady() {
        return eQ;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eC;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.Yn.DEFAULT,
            n = e5(t).localPans[e];
        return null != n ? n : eT;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.Yn.DEFAULT,
            n = t === ef.Yn.STREAM ? ef.Yh : ef.Qx,
            r = e5(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return e5().inputVolume;
    }
    getOutputVolume() {
        return e5().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.Yn.DEFAULT;
        return e5(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.Yn.DEFAULT;
        return e5(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(eN, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === ec.pM4.PUSH_TO_TALK && eO.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tc(ey, e5().inputDeviceId);
    }
    getOutputDeviceId() {
        return tc(eL, e5().outputDeviceId);
    }
    getVideoDeviceId() {
        return tc(eD, e5().videoDeviceId);
    }
    getInputDevices() {
        return ey;
    }
    getOutputDevices() {
        return eL;
    }
    getVideoDevices() {
        return eD;
    }
    getEchoCancellation() {
        let e = e5();
        return ei.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e5().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return e5().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return e5().h265Enabled;
    }
    getLoopback() {
        return eA.getLoopback();
    }
    getNoiseSuppression() {
        let e = e5();
        return ei.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = e5();
        return ei.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return e5().noiseCancellation;
    }
    getExperimentalEncoders() {
        return e5().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null === (e = e5().hardwareEncoding) || void 0 === e || e;
    }
    getEnableSilenceWarning() {
        return e5().silenceWarning;
    }
    getDebugLogging() {
        return eA.getDebugLogging();
    }
    getQoS() {
        return e5().qos;
    }
    getAttenuation() {
        return e5().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return e5().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return e5().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return eA.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eA.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.Yn.DEFAULT;
        return e5(e);
    }
    getState() {
        return {
            settingsByContext: eN,
            inputDevices: ey,
            outputDevices: eL,
            appSupported: e0,
            krispModuleLoaded: eW,
            goLiveSource: a,
            goLiveContext: eC
        };
    }
    getInputDetected() {
        return eV;
    }
    getNoInputDetectedNotice() {
        return eZ;
    }
    getPacketDelay() {
        return $.isPlatformEmbedded || this.getMode() !== ec.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eA.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ev;
    }
    getVideoHook() {
        return e5().videoHook;
    }
    supportsVideoHook() {
        return eA.supports(ef.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = e5().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eA.supports(ef.AN.EXPERIMENTAL_SOUNDSHARE) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, ed.I9);
    }
    getOpenH264() {
        return e5().openH264;
    }
    getEverSpeakingWhileMuted() {
        return ek;
    }
    supportsScreenSoundshare() {
        return ((0, $.isMac)() && eA.supports(ef.AN.SOUNDSHARE) && h().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, ed.yG) && tr()) || ((0, $.isWindows)() && eA.supports(ef.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare());
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.Yn.DEFAULT,
            t = this.supports(ef.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === ef.Yn.DEFAULT ? ef.Tr.VIDEO : ef.Tr.SCREEN,
                          quality: 100
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === ef.Yn.DEFAULT || ti()) &&
                t.push({
                    rid: '50',
                    type: e === ef.Yn.DEFAULT ? ef.Tr.VIDEO : ef.Tr.SCREEN,
                    quality: 50
                }),
            t
        );
    }
    getSupportedSecureFramesProtocolVersion(e) {
        var t;
        let n = eA.getSupportedSecureFramesProtocolVersion(),
            r = F.m.getCurrentConfig({ location: 'MediaEngineStore' }),
            i =
                null != e
                    ? F.N.getCurrentConfig({
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
ep(tg, 'displayName', 'MediaEngineStore'),
    (r = new tg(S.Z, {
        VOICE_CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
            if ((r !== n && e9(i, null), null != t || null == n)) {
                eY = !1;
                return;
            }
            if (eY) return;
            eY = !0;
            let a = e5();
            (a.mute || a.deaf) &&
                (ts({
                    deaf: !1,
                    mute: !1
                }),
                eA.eachConnection(e8));
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => (i === t.sessionId ? ((eb = t.mute || t.suppress), (eU = t.deaf), eA.eachConnection(e8), e9(!(null != t.guildId && null != t.channelId && null != eK && eK !== t.channelId) && ew), (eK = t.channelId), !0) : (!__OVERLAY__ && t.userId === en.default.getId() && null == eo.Z.getChannelId() && e9(!1, null), e)), !1);
        },
        CONNECTION_OPEN: function (e) {
            (i = e.sessionId),
                (eb = !1),
                (eU = !1),
                !(0, $.isWeb)() &&
                    V.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                        let t = e5();
                        !e.sidechainAvailable && t.sidechainCompression ? (ts({ sidechainCompressionSettingVersion: 0 }), tp(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < 1 && (ts({ sidechainCompressionSettingVersion: 1 }), tp(e.sidechainEnabled));
                    }),
                td();
        },
        CONNECTION_CLOSED: function () {
            i = null;
        },
        RTC_CONNECTION_STATE: function (e) {
            switch (e.state) {
                case ec.hes.CONNECTING:
                    to();
                    break;
                case ec.hes.RTC_CONNECTING:
                    (eH = !1), (eZ = !1);
                    break;
                case ec.hes.RTC_CONNECTED:
                    e9();
                    break;
                case ec.hes.DISCONNECTED:
                    (function () {
                        if (0 === eX.size) return;
                        let e = ef.Yn.DEFAULT,
                            { disabledLocalVideos: t } = e5(e);
                        eX.forEach((n) => {
                            d()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eA.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            eX.clear(),
                            ts({ disabledLocalVideos: t }, e, !1);
                    })(),
                        tf();
            }
            ta.update();
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
            let { mute: t } = e;
            (eM = t), eA.eachConnection(e8);
        },
        AUDIO_TOGGLE_SELF_MUTE: function (e) {
            let { context: t, skipMuteUnmuteSoundEffect: n } = e,
                { mute: r, deaf: i } = e5(t);
            if (t === ef.Yn.DEFAULT && (W.Z.requestPermission(e_.Eu.AUDIO), eP)) return !1;
            !(r = !i && !r) && (i = !1),
                n && (eG = !0),
                ts(
                    {
                        mute: r,
                        deaf: i
                    },
                    t
                ),
                eA.eachConnection(e8);
        },
        AUDIO_SET_SELF_MUTE: function (e) {
            let { context: t, mute: n } = e;
            ts({ mute: n }, t), eA.eachConnection(e8);
        },
        AUDIO_TOGGLE_SELF_DEAF: function (e) {
            let { context: t } = e;
            ts({ deaf: !e5(t).deaf }, t), eA.eachConnection(e8);
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
            let { context: t, userId: n } = e;
            if (n === en.default.getId()) return;
            let { localMutes: r } = e5(t);
            r[n] ? delete r[n] : (r[n] = !0), ts({ localMutes: r }, t), eA.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
            var t, n, r, i, a, s, o;
            let { context: l, userId: u, videoToggleState: c, persist: _, isAutomatic: E } = e;
            d()(!(_ && E), 'These are not allowed to both be true.');
            let f = c === ec.ZUi.DISABLED,
                { disabledLocalVideos: h } = e5(l),
                p = null !== (t = h[u]) && void 0 !== t && t,
                I = eX.has(u),
                m = c === ec.ZUi.AUTO_ENABLED || c === ec.ZUi.MANUAL_ENABLED;
            eI.info('disableVideo='.concat(f, ' currentlyDisabled=').concat(p, ' currentlyAutoDisabled=').concat(I, ', isVideoShown=').concat(m)), d()(!(I && !p), 'If you are auto-disabled, then you are also disabled.');
            let T = f !== p,
                S = l === ef.Yn.DEFAULT,
                g = E && T && S,
                A = _ && T && S;
            eI.info('changed='.concat(T, ' isDefaultContext=').concat(S, ' isUpdateCausedByVideoHealthManager=').concat(g, ' isManualToggleByUser=').concat(A));
            let { videoToggleStateMap: N } = e5(l);
            if ((N[u] === ec.ZUi.AUTO_PROBING && c === ec.ZUi.AUTO_ENABLED && (0, j.Z)(u, f ? ef.fC.AUTO_DISABLE : ef.fC.AUTO_ENABLE, m), (N[u] = c), ts({ videoToggleStateMap: N }, l, _), c === ec.ZUi.AUTO_PROBING ? null === (n = eo.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (r = eo.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(u, !1), !e$ && (eI.info('isAutoDisableAllowed='.concat(e$, ' - disabling VideoHealthManager')), null === (a = eo.Z.getRTCConnection()) || void 0 === a || null === (i = a.getVideoHealthManager()) || void 0 === i || i.disable()), g)) {
                if ((!f && !I) || (f && !e$)) return;
                (0, j.Z)(u, f ? ef.fC.AUTO_DISABLE : ef.fC.AUTO_ENABLE, m), f ? eX.add(u) : eX.delete(u);
            } else A && (I && !f ? (eI.info('disallowing auto-disable for this session because of manual override by user'), (e$ = !1), null === (o = eo.Z.getRTCConnection()) || void 0 === o || null === (s = o.getVideoHealthManager()) || void 0 === s || s.disable(), (0, j.Z)(u, ef.fC.MANUAL_REENABLE, m)) : (0, j.Z)(u, f ? ef.fC.MANUAL_DISABLE : ef.fC.MANUAL_ENABLE, m));
            S && !f && eX.delete(u),
                f ? (h[u] = !0) : delete h[u],
                ts({ disabledLocalVideos: h }, l, _),
                eA.eachConnection((e) => {
                    var t;
                    return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t);
                }, l);
        },
        AUDIO_SET_LOCAL_VOLUME: function (e) {
            let { context: t, userId: n, volume: r } = e;
            if (n === en.default.getId()) return;
            let i = t === ef.Yn.STREAM ? ef.Yh : ef.Qx,
                { localVolumes: a } = e5(t);
            r === i ? delete a[n] : (a[n] = r), ts({ localVolumes: a }, t), eA.eachConnection((e) => e.setLocalVolume(n, r), t);
        },
        AUDIO_SET_LOCAL_PAN: function (e) {
            let { context: t, userId: n, left: r, right: i } = e,
                { localPans: a } = e5(t);
            (a[n] = {
                left: r,
                right: i
            }),
                ts({ localPans: a }, t),
                eA.eachConnection((e) => e.setLocalPan(n, r, i), t);
        },
        AUDIO_SET_MODE: function (e) {
            let { context: t, mode: n, options: r } = e;
            ts(
                {
                    mode: n,
                    modeOptions: r
                },
                t
            ),
                eA.eachConnection(e6),
                ta.update();
        },
        AUDIO_SET_INPUT_VOLUME: function (e) {
            let { volume: t } = e;
            ts({ inputVolume: e7(t) }), eA.setInputVolume(t);
        },
        AUDIO_SET_OUTPUT_VOLUME: function (e) {
            let { volume: t } = e;
            ts({ outputVolume: t }), eA.setOutputVolume(t);
        },
        AUDIO_SET_INPUT_DEVICE: function (e) {
            let { id: t } = e;
            ts({ inputDeviceId: (t = tc(ey, t)) }), eA.setAudioInputDevice(t);
        },
        AUDIO_SET_OUTPUT_DEVICE: function (e) {
            let { id: t } = e;
            ts({ outputDeviceId: (t = tc(eL, t)) }), eA.setAudioOutputDevice(t);
        },
        AUDIO_SET_ECHO_CANCELLATION: function (e) {
            let t = ts({ echoCancellation: e.enabled });
            eA.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), tI(), th(e.location);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
            tp(e.enabled);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
            let t = ts({ sidechainCompressionStrength: e.strength });
            eA.setSidechainCompressionStrength(t.sidechainCompressionStrength);
        },
        AUDIO_SET_LOOPBACK: function (e) {
            let { enabled: t } = e;
            return (eJ = t), tI();
        },
        AUDIO_SET_NOISE_SUPPRESSION: function (e) {
            let t = ts({ noiseSuppression: e.enabled });
            eA.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), tI(), th(e.location);
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
            let t = ts({ automaticGainControl: e.enabled });
            eA.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), tI(), th(e.location);
        },
        AUDIO_SET_NOISE_CANCELLATION: function (e) {
            let t = ts({ noiseCancellation: e.enabled });
            eA.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), tI(), th(e.location);
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
            ts({ silenceWarning: e.enabled }), ta.update();
        },
        AUDIO_SET_DEBUG_LOGGING: function (e) {
            eA.setDebugLogging(e.enabled);
        },
        MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
            ts({ videoHook: e.enabled });
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
            ts({ experimentalSoundshare2: e.enabled });
        },
        AUDIO_SET_ATTENUATION: function (e) {
            let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
                i = ts({
                    attenuation: t,
                    attenuateWhileSpeakingSelf: n,
                    attenuateWhileSpeakingOthers: r
                });
            eA.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
        },
        AUDIO_SET_QOS: function (e) {
            let { enabled: t } = e;
            ts({ qos: t }), eA.eachConnection((e) => e.setQoS(t));
        },
        MEDIA_ENGINE_DEVICES: function (e) {
            let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
            !(function (e) {
                let t = ey;
                if (((ey = tu(e, eh.Z.Messages.NO_INPUT_DEVICES)), !E().isEqual(ey, t))) {
                    let e = e5(),
                        t = tc(ey, e.inputDeviceId);
                    eA.setAudioInputDevice(t);
                }
            })(t),
                !(function (e) {
                    let t = eL;
                    if (((eL = tu(e, eh.Z.Messages.NO_OUTPUT_DEVICES)), !E().isEqual(eL, t))) {
                        let e = e5(),
                            t = tc(eL, e.outputDeviceId);
                        eA.setAudioOutputDevice(t);
                    }
                })(n),
                !(function (e) {
                    eF = e.length > 0;
                    let t = eD;
                    if (((eD = tu(e, eh.Z.Messages.NO_VIDEO_DEVICES)), ew && !E().isEqual(eD, t))) {
                        var n;
                        let e = void 0 !== eD[ex],
                            r = ex === ef.w5 && (null === (n = t[ef.w5]) || void 0 === n ? void 0 : n.disabled);
                        e9(e || r);
                    }
                })(r);
        },
        AUDIO_VOLUME_CHANGE: function (e) {
            let { inputVolume: t, outputVolume: n } = e;
            ts({
                inputVolume: e7(t),
                outputVolume: n
            });
        },
        AUDIO_RESET: function () {
            m.K.remove(em), location.reload();
        },
        AUDIO_INPUT_DETECTED: function (e) {
            let { inputDetected: t } = e;
            (eV = t), !eH && eV && ((eH = !0), ta.update());
        },
        AUDIO_SET_SUBSYSTEM: function (e) {
            eA.setAudioSubsystem(e.subsystem);
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
            (eR = e.enabled),
                e.unmute &&
                    ts({
                        mute: !1,
                        deaf: !1
                    }),
                eA.eachConnection(e8);
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
            let { enabled: t } = e;
            W.Z.requestPermission(e_.Eu.CAMERA), e9(t);
        },
        MEDIA_ENGINE_PERMISSION: function (e) {
            let { kind: t, granted: n } = e;
            if (!n)
                switch (t) {
                    case 'audio':
                        (eR = !1), eA.eachConnection(e8);
                        break;
                    case 'video':
                        e9(!1);
                }
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
            var t, n, r, i;
            let { settings: s } = e;
            if ((null == s ? void 0 : s.desktopSettings) != null) {
                let e = null,
                    r = null,
                    { sourceId: i, sound: o } = s.desktopSettings,
                    l = null !== (t = s.context) && void 0 !== t ? t : ef.Yn.DEFAULT,
                    u =
                        null !== (n = s.qualityOptions) && void 0 !== n
                            ? n
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              },
                    c = !1 === o ? null : Q.Z.getPidFromDesktopSource(i);
                $.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = t_(c)), null != e && tE(e, r)),
                    !(function (e) {
                        if (e !== eC) null != a && eA.setGoLiveSource(null, eC), (eC = e);
                    })(l),
                    e9(l === ef.Yn.STREAM && ew, {
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
                let e = null !== (r = s.context) && void 0 !== r ? r : ef.Yn.DEFAULT,
                    { videoDeviceGuid: t, audioDeviceGuid: n } = s.cameraSettings,
                    a = e === ef.Yn.STREAM && ew,
                    o =
                        null !== (i = s.qualityOptions) && void 0 !== i
                            ? i
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              };
                e9(a, {
                    cameraSource: {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    },
                    quality: {
                        resolution: o.resolution,
                        frameRate: o.frameRate
                    }
                });
            } else e9(ew, null);
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
            let { id: t } = e;
            ts({ videoDeviceId: (t = tc(eD, t)) }), e9();
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function (e) {
            let t = ts({ experimentalEncoders: e.enabled });
            eA.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
            return ev !== e.required && ((ev = e.required), !e.required && eA.interact(), !0);
        },
        USER_SETTINGS_MODAL_INIT: tS,
        USER_SETTINGS_MODAL_SET_SECTION: tS,
        CERTIFIED_DEVICES_SET: function () {
            return eA.eachConnection(tt), !1;
        },
        RPC_APP_CONNECTED: function (e) {
            let { application: t } = e;
            eO.add(t.id);
        },
        RPC_APP_DISCONNECTED: function (e) {
            let { application: t } = e;
            eO.delete(t.id);
        },
        OVERLAY_INITIALIZE: function (e) {
            let { mediaEngineState: t } = e;
            (eN = t.settingsByContext), (ey = t.inputDevices), (eL = t.outputDevices), (e0 = t.appSupported), (eW = t.krispModuleLoaded), (eC = t.goLiveContext);
        },
        MEDIA_ENGINE_SET_OPEN_H264: function (e) {
            let { enabled: t } = e,
                n = ts({ openH264: t });
            eA.setH264Enabled(n.hardwareEncoding || n.openH264),
                eA.eachConnection((e) => {
                    var t;
                    return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
                });
        },
        MEDIA_ENGINE_SET_HARDWARE_ENCODING: function (e) {
            var t, n;
            let { enabled: r } = e,
                i = ts({ hardwareEncoding: r });
            eA.eachConnection((e) => {
                var t;
                return e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t);
            }),
                eA.setH264Enabled(i.hardwareEncoding || i.openH264),
                eA.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t),
                eA.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n);
        },
        APP_STATE_UPDATE: function (e) {
            let { state: t } = e,
                n = L.Z.isEnabled();
            if (t === ec.$7l.BACKGROUND && ew && !n) (eB = !0), e9(!1);
            else {
                if (t !== ec.$7l.ACTIVE || !eB) return !1;
                (eB = !1), e9(!0);
            }
            return !0;
        },
        SET_CHANNEL_BITRATE: function (e) {
            eA.eachConnection((t) => t.setBitRate(e.bitrate));
        },
        SET_VAD_PERMISSION: function (e) {
            let { hasPermission: t } = e,
                n = !t;
            if (n === eP) return !1;
            (eP = n), eA.eachConnection(e8);
        },
        SET_NATIVE_PERMISSION: function (e) {
            let { state: t, permissionType: n } = e,
                r = t === e_.PQ.ACCEPTED;
            switch (n) {
                case e_.Eu.AUDIO:
                    (eQ = !0), eA.eachConnection(e8);
                    break;
                case e_.Eu.CAMERA:
                    !r && ew && e9(!1);
                    break;
                default:
                    return !1;
            }
        },
        SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
            eA.eachConnection((t) => t.applyVideoQualityMode(e.mode));
        },
        MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
            let { enabled: t } = e,
                n = ts({ aecDumpEnabled: t });
            eA.setAecDump(n.aecDumpEnabled);
        },
        CHANNEL_DELETE: function () {
            if ((!ew && null == a) || null != eo.Z.getRTCConnectionId()) return !1;
            e9(!1, null);
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
            return !!ez && ((ez = !1), !0);
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
            let { settings: t } = e;
            eA.applyMediaFilterSettings(t).finally(() => {
                (eq = !1), r.emitChange();
            });
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
            eq = !0;
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
            eq = !1;
        },
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            let {
                settings: { type: t },
                local: n,
                wasSaved: r
            } = e;
            if (t !== eE.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
            td(!0);
        },
        CLIPS_INIT: function (e) {
            let { sourceId: t, applicationName: n, quality: i } = e,
                { enableDecoupledGameClipping: a } = G.Z.getCurrentConfig({ location: 'handleClipsInit' }, { autoTrackExposure: !0 }),
                o = O.Z.getSettings().decoupledClipsEnabled;
            if (!a || !o || null == g.Z) return;
            let l = null,
                u = null,
                c = Q.Z.getPidFromDesktopSource(t);
            ({ soundshareId: l, soundshareSession: u } = t_(c));
            let d = {
                desktopSource: {
                    id: t,
                    sourcePid: c,
                    soundshareId: l,
                    soundshareSession: u
                },
                quality: i
            };
            null != s && s.desktopSource.id !== d.desktopSource.id && (eA.setClipsSource(null), (0, $.isWindows)() && null != s.desktopSource.soundshareId && A.pn(s.desktopSource.soundshareId)), null != l && tE(l, u), (s = d);
            let { hdrCaptureMode: _ } = k.Z.getCurrentConfig({ location: 'f627ab_12' }, { autoTrackExposure: !1 }),
                E = e5().videoHook;
            eA.setClipsSource({
                desktopDescription: {
                    id: s.desktopSource.id,
                    soundshareId: s.desktopSource.soundshareId,
                    useVideoHook: E,
                    useGraphicsCapture: tn(),
                    useLoopback: r.getExperimentalSoundshare(),
                    useQuartzCapturer: !0,
                    allowScreenCaptureKit: tr(),
                    videoHookStaleFrameTimeoutMs: 500,
                    graphicsCaptureStaleFrameTimeoutMs: eS,
                    hdrCaptureMode: _
                },
                quality: i,
                applicationName: n
            });
        },
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            !1 === t.decoupledClipsEnabled && ((s = null), eA.setClipsSource(null));
        },
        MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
            e2 = e.enabled;
        }
    })),
    (t.Z = r);
