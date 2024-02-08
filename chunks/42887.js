"use strict";
let i, r, s, a;
n.r(t), n.d(t, {
  default: function() {
    return tI
  }
}), n("222007"), n("808653"), n("506083"), n("424973"), n("256955");
var o, l, u, c, d = n("627445"),
  f = n.n(d),
  E = n("917351"),
  p = n.n(E),
  h = n("570277"),
  _ = n.n(h),
  S = n("446674"),
  m = n("773364"),
  T = n("95410"),
  g = n("862337"),
  I = n("913144"),
  C = n("49671"),
  v = n("6193"),
  A = n("965068"),
  R = n("386045"),
  N = n("18346"),
  O = n("605250"),
  D = n("808122"),
  y = n("733589"),
  P = n("933034"),
  L = n("746800"),
  b = n("584687"),
  M = n("636243"),
  U = n("705500"),
  G = n("238847"),
  w = n("981699"),
  k = n("352705"),
  x = n("140622"),
  F = n("16001"),
  V = n("631508"),
  B = n("368765"),
  H = n("403770"),
  j = n("940146"),
  Y = n("353500"),
  W = n("103979"),
  K = n("665862"),
  z = n("122530"),
  q = n("928609"),
  X = n("891760"),
  Q = n("536692"),
  Z = n("374363"),
  J = n("599110"),
  $ = n("922932"),
  ee = n("718517"),
  et = n("773336"),
  en = n("286235"),
  ei = n("50885"),
  er = n("13798"),
  es = n("271938"),
  ea = n("366679"),
  eo = n("533222"),
  el = n("42203"),
  eu = n("760190"),
  ec = n("855867"),
  ed = n("945956"),
  ef = n("568307"),
  eE = n("123647"),
  ep = n("49111"),
  eh = n("706530"),
  e_ = n("180524"),
  eS = n("397336"),
  em = n("353927"),
  eT = n("782340");
let eg = new O.default("MediaEngineStore");
(u = o || (o = {}))[u.DETACHED = 0] = "DETACHED", u[u.WAITING = 1] = "WAITING", u[u.ATTACHED = 2] = "ATTACHED", u[u.STARTED = 3] = "STARTED", u[u.PLAYING = 4] = "PLAYING", u[u.SILENCE = 5] = "SILENCE", (c = l || (l = {}))[c.FAILED = -1] = "FAILED", c[c.OK = 0] = "OK", c[c.ACE_INSTALL_FAILED = 4] = "ACE_INSTALL_FAILED", c[c.ACE_NOT_AUTHORIZED = 5] = "ACE_NOT_AUTHORIZED";
let eI = "MediaEngineStore",
  eC = {
    left: 1,
    right: 1
  };

function ev() {
  let e = {
    mode: ep.InputModes.VOICE_ACTIVITY,
    modeOptions: {
      threshold: -60,
      autoThreshold: et.isPlatformEmbedded || __OVERLAY__,
      vadUseKrisp: !0,
      vadLeading: 5,
      vadTrailing: 25,
      delay: 20,
      shortcut: []
    },
    vadUseKrispSettingVersion: 0,
    ncUseKrispSettingVersion: 0,
    ncUseKrispjsSettingVersion: 0,
    av1EnabledSettingVersion: 0,
    mute: !1,
    deaf: !1,
    echoCancellation: !0,
    noiseSuppression: !1,
    automaticGainControl: !0,
    noiseCancellation: !0,
    experimentalEncoders: !1,
    hardwareH264: !0,
    silenceWarning: !0,
    attenuation: 0,
    attenuateWhileSpeakingSelf: !1,
    attenuateWhileSpeakingOthers: !0,
    localMutes: {},
    disabledLocalVideos: {},
    videoToggleStateMap: {},
    localVolumes: {},
    localPans: {},
    inputVolume: em.DEFAULT_VOLUME,
    outputVolume: em.DEFAULT_VOLUME,
    inputDeviceId: em.DEFAULT_DEVICE_ID,
    outputDeviceId: em.DEFAULT_DEVICE_ID,
    videoDeviceId: em.DEFAULT_DEVICE_ID,
    qos: !1,
    qosMigrated: !1,
    videoHook: eA.supports(em.Features.VIDEO_HOOK),
    experimentalSoundshare2: null,
    openH264: !0,
    av1Enabled: !0,
    h265Enabled: !0,
    vadThrehsoldMigrated: !1,
    aecDumpEnabled: !1
  };
  return e
}
let eA = (0, m.initializeMediaEngine)((0, m.determineMediaEngine)()),
  eR = {},
  eN = new Set([em.MediaEngineContextTypes.DEFAULT]),
  eO = eA.supports(em.Features.AUTO_ENABLE),
  eD = !1,
  ey = em.MediaEngineContextTypes.STREAM,
  eP = {
    [em.DEFAULT_DEVICE_ID]: to(eT.default.Messages.NO_INPUT_DEVICES)
  },
  eL = {
    [em.DEFAULT_DEVICE_ID]: to(eT.default.Messages.NO_OUTPUT_DEVICES)
  },
  eb = {
    [em.DEFAULT_DEVICE_ID]: to(eT.default.Messages.NO_VIDEO_DEVICES)
  },
  eM = !1,
  eU = !1,
  eG = !1,
  ew = !1,
  ek = !1,
  ex = em.DISABLED_DEVICE_ID,
  eF = !1,
  eV = !1,
  eB = !1,
  eH = null,
  ej = !1,
  eY = !1,
  eW = !1,
  eK = !1,
  ez = !1,
  eq = null,
  eX = !1,
  eQ = ep.SoundshareEnableState.NOT_ENABLED,
  eZ = !1,
  eJ = !1;
q.default.hasPermission(e_.NativePermissionTypes.AUDIO, {
  showAuthorizationError: !1
}), q.default.hasPermission(e_.NativePermissionTypes.CAMERA, {
  showAuthorizationError: !1
});
let e$ = new Set,
  e0 = !1,
  e1 = !1,
  e2 = {},
  e4 = {},
  e6 = 5 * ee.default.Millis.SECOND;

function e3() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT,
    t = eR[e];
  return null == t && (t = ev(), eR[e] = t), t
}

function e5(e) {
  let t = e3(e.context);
  e.setInputMode(t.mode, {
    vadThreshold: t.modeOptions.threshold,
    vadAutoThreshold: t.modeOptions.autoThreshold,
    vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
      return ez || !1
    }(),
    vadLeading: t.modeOptions.vadLeading,
    vadTrailing: t.modeOptions.vadTrailing,
    pttReleaseDelay: t.modeOptions.delay
  })
}

function e7(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.DEFAULT_VOLUME;
  return p.clamp(e, 0, t)
}

function e8(e) {
  let t = e3(e.context),
    n = !eO || t.mute || t.deaf;
  e.context === em.MediaEngineContextTypes.DEFAULT && (n = n || eM || eU || eG || !q.default.didHavePermission(e_.NativePermissionTypes.AUDIO)), e.setSelfMute(n), e.setSelfDeaf(t.deaf)
}

function e9() {
  var e, t, n;
  let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek,
    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
    o = s;
  if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, et.isWindows)() && v.cancelAttachToProcess(o.desktopSource.soundshareId), eA.setGoLiveSource(null, ey)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eA.setGoLiveSource(null, ey), (ek || r) && (ex = (ek = r) ? tu(eb, e3().videoDeviceId) : em.DISABLED_DEVICE_ID, eA.setVideoInputDevice(ex)), s = a, null != a) {
    let e = {
      resolution: a.quality.resolution,
      frameRate: a.quality.frameRate
    };
    if (null != a.desktopSource) {
      let {
        useQuartzCapturer: t
      } = V.default.getCurrentConfig({
        location: "f627ab_1"
      }, {
        autoTrackExposure: !1
      }), {
        hdrCaptureMode: n
      } = w.default.getCurrentConfig({
        location: "f627ab_2"
      }, {
        autoTrackExposure: !1
      }), r = e3().videoHook, s = eA.supports(em.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
        videoHookStaleFrameTimeoutMs: o
      } = j.default.getConfig(s && r, "e225cfdf5_vh1", !0), {
        graphicsCaptureStaleFrameTimeoutMs: l
      } = K.default.getConfig(s && tn(), "e225cfdf5_wgc2", !0);
      eA.setGoLiveSource({
        desktopDescription: {
          id: a.desktopSource.id,
          soundshareId: a.desktopSource.soundshareId,
          useVideoHook: r,
          useGraphicsCapture: tn(),
          useLoopback: i.getExperimentalSoundshare(),
          useQuartzCapturer: t,
          allowScreenCaptureKit: ti(!0),
          videoHookStaleFrameTimeoutMs: o,
          graphicsCaptureStaleFrameTimeoutMs: l,
          hdrCaptureMode: n
        },
        quality: e
      }, ey)
    }
    null != a.cameraSource && eA.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: a.cameraSource.videoDeviceGuid,
        audioDeviceGuid: a.cameraSource.audioDeviceGuid
      },
      quality: e
    }, ey)
  }
}

function te(e, t, n, i) {
  var r;
  let s = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : "";
  null == e4[s] && (e4[s] = new Set);
  let a = null != t && !e4[s].has(t);
  a && e4[s].add(t), (null == t || a) && J.default.track(ep.AnalyticEvents.SOUNDSHARE_FAILED, {
    soundshare_failure_code: t,
    soundshare_failure_reason: n,
    soundshare_failure_will_retry: i,
    ...(0, P.default)(e)
  })
}

function tt(e) {
  let t = e3(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(eo.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eo.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(eo.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, et.isWeb)()) {
    let n = t.noiseCancellation ? -150 : -100;
    e.setSilenceThreshold(n)
  }
}

function tn() {
  return (0, et.isWindows)() && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, eh.WINDOWS_GRAPHICS_CAPTURE_VERSION)
}

function ti(e) {
  return !!((0, et.isMac)() && eA.supports(em.Features.SCREEN_CAPTURE_KIT) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, eh.DARWIN_SCKIT_VERSION)) && B.default.getCurrentConfig({
    location: "screenCaptureKitEnabled"
  }, {
    autoTrackExposure: e
  }).allowScreenCaptureKit
}
let tr = new class {
  start() {
    !this.started && (this.started = !0, eA.on(m.MediaEngineEvent.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eA.removeListener(m.MediaEngineEvent.Silence, this.handleSilence), I.default.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = e3();
    !ej && ed.default.getState() === ep.RTCConnectionStates.RTC_CONNECTED && e.mode === ep.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    this.noVoiceTimeout = 5e3, this.voiceTimeout = 1500, this.started = !1, this.handleSilence = e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (I.default.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (eY = !0))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    }
  }
};

function ts(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT,
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = e3(t);
  return Object.assign(i, e), !__OVERLAY__ && n && T.default.set(eI, eR), i
}

function ta() {
  !eO && eA.enable().then(() => I.default.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: !0,
    unmute: !1
  }))
}

function to(e) {
  return {
    id: em.DEFAULT_DEVICE_ID,
    index: 0,
    name: e,
    disabled: !0
  }
}

function tl(e, t) {
  if (0 === e.length) {
    let e = to(t);
    return {
      [e.id]: e
    }
  }
  return p(e).map(e => ({
    id: e.id,
    index: e.index,
    name: e.name,
    disabled: !1
  })).keyBy("id").value()
}

function tu(e, t) {
  var n;
  let i = null !== (n = e[t]) && void 0 !== n ? n : p(e).values().first();
  return null != i ? i.id : t
}

function tc() {
  var e, t;
  let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    i = null !== (e = Z.default.settings.audioContextSettings) && void 0 !== e ? e : {
      user: {},
      stream: {}
    };
  for (let e of Object.keys(i)) {
    let r = e === eS.ProtoAudioSettingsContextTypes.USER ? em.MediaEngineContextTypes.DEFAULT : em.MediaEngineContextTypes.STREAM,
      s = r === em.MediaEngineContextTypes.STREAM ? em.DEFAULT_STREAM_VOLUME : em.DEFAULT_VOLUME,
      a = null !== (t = i[e]) && void 0 !== t ? t : {},
      {
        localMutes: o,
        localVolumes: l
      } = e3(r);
    for (let [e, t] of Object.entries(a)) null == (0, Q.getPendingAudioSettings)(r, e) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== s ? l[e] = t.volume : delete l[e], eA.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, r));
    if (n) {
      let e = new Set([...Object.keys(o), ...Object.keys(l)]);
      for (let t of e) null == a[t] && (delete o[t], delete l[t], eA.eachConnection(e => {
        e.setLocalVolume(t, s), e.setLocalMute(t, !1)
      }, r))
    }
    ts({
      localMutes: o,
      localVolumes: l
    }, r)
  }
}

function td(e) {
  if (null == i) return eg.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = i.getExperimentalSoundshare() ? e : $.default.getAudioPid(e),
      n = "";
    return null != t && (n = $.default.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function tf(e, t) {
  (0, et.isWindows)() && v.attachToProcess(e, {
    soundshare_session: t
  }).then(t => {
    null != t && !ef.default.shouldContinueWithoutElevatedProcessForPID(e) && I.default.wait(() => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
        errorMessage: t
      })
    })
  })
}

function tE(e) {
  let t = e3();
  J.default.track(ep.AnalyticEvents.VOICE_PROCESSING, {
    echo_cancellation: t.echoCancellation,
    noise_cancellation: t.noiseCancellation,
    noise_suppression: t.noiseSuppression,
    automatic_gain_control: t.automaticGainControl,
    location: e
  })
}

function tp() {
  let e = e3(),
    t = e.inputDeviceId,
    n = eo.default.hasEchoCancellation(t) || e.echoCancellation,
    i = eo.default.hasNoiseSuppression(t) || e.noiseSuppression,
    r = eo.default.hasAutomaticGainControl(t) || e.automaticGainControl,
    s = e.noiseCancellation;
  eA.setLoopback(e1, {
    echoCancellation: n,
    noiseSuppression: i,
    automaticGainControl: r,
    noiseCancellation: s
  })
}

function th() {
  return ez || !1
}
async function t_() {
  try {
    await ei.default.ensureModule("discord_krisp"), ei.default.requireModule("discord_krisp"), ez = !0, i.emitChange()
  } catch (t) {
    eg.warn("Failed to load Krisp module: ".concat(t.message)), en.default.captureException(t);
    let e = em.NoiseCancellerError.INITIALIZED;
    if (t.message.includes(": ")) {
      let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
      e = isNaN(n) || 0 === n ? em.NoiseCancellerError.INITIALIZED : n
    }
    J.default.track(ep.AnalyticEvents.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), ts({
      noiseCancellation: !1
    })
  } finally {
    eK = !1
  }
}

function tS(e) {
  let {
    section: t
  } = e;
  return t === ep.UserSettingsSections.VOICE && ta(), !1
}

function tm(e) {
  eQ = 0 === e ? ep.SoundshareEnableState.ENABLED : 5 === e ? ep.SoundshareEnableState.ENABLING : -1 === e || 4 === e ? ep.SoundshareEnableState.FAILED_TO_ENABLE : ep.SoundshareEnableState.NOT_ENABLED
}
async function tT() {
  if (eQ === ep.SoundshareEnableState.ENABLING) return;
  eQ = ep.SoundshareEnableState.ENABLING;
  let e = {};
  try {
    let t = await eA.enableSoundshare();
    tm(t.code), e = {
      status_code: t.code,
      message: t.message
    }
  } catch (t) {
    eg.warn("Failed to enable macOS soundshare: ".concat(t)), tm(-1), e = {
      status_code: -1,
      message: "".concat(t)
    }
  } finally {
    i.emitChange(), J.default.track(ep.AnalyticEvents.SOUNDSHARE_ENABLE, e)
  }
}
class tg extends S.default.Store {
  initialize() {
    eA.on(m.MediaEngineEvent.Connection, e => {
      let {
        maxSyncDelayOverride: t
      } = F.default.getCurrentConfig({
        location: "f627ab_3"
      }, {
        autoTrackExposure: !1
      });
      t > 0 && eA.setMaxSyncDelayOverride(t), e5(e), e8(e), tt(e);
      let n = e3();
      e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
      let {
        useExperimentalRateControl: r
      } = Y.default.getCurrentConfig({
        location: "f627ab_4"
      }, {
        autoTrackExposure: !1
      });
      r && e.setExperimentFlag(em.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
      {
        let {
          signalH265DesktopDecode: t
        } = M.default.getCurrentConfig({
          location: "MediaEngineStore_setupMediaEngine"
        }, {
          autoTrackExposure: !0
        });
        t && e.setExperimentFlag(em.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0);
        let {
          signalH265SupportMacOS: n
        } = U.default.getCurrentConfig({
          location: "f627ab_8"
        }, {
          autoTrackExposure: !0
        });
        n && e.setExperimentFlag(em.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
        let {
          signalH265SupportNvenc: i
        } = G.default.getCurrentConfig({
          location: "f627ab_9"
        }, {
          autoTrackExposure: !0
        });
        i && e.setExperimentFlag(em.ExperimentFlags.SIGNAL_H265_SUPPORT, !0)
      }
      let {
        signalAV1Support: a
      } = L.default.getCurrentConfig({
        location: "f627ab_10"
      }, {
        autoTrackExposure: !0
      });
      a && e.setExperimentFlag(em.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
      let {
        allowSettingFullbandAndroid: o
      } = x.default.getCurrentConfig({
        location: "f627ab_14"
      }, {
        autoTrackExposure: !0
      });
      if (o && eA.setHasFullbandPerformance((0, D.hasPerformanceForKrispFullband)()), (0, N.default)(i)) {
        let t = R.default.getSettings();
        e.setExperimentFlag(em.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
        let {
          enableViewerClipping: n
        } = W.default.getCurrentConfig({
          location: "f627ab_15"
        }, {
          autoTrackExposure: !1
        });
        e.setViewerSideClip(n);
        let i = ed.default.getGuildId(),
          r = 0;
        null != i && e.context === em.MediaEngineContextTypes.STREAM && (r = k.default.getCurrentConfig({
          guildId: i,
          location: "MediaEngineStore_SetupMediaEngine"
        }, {
          autoTrackExposure: !0
        }).keyFrameIntervalMs), e.setClipsKeyFrameInterval(n && t.viewerClipsEnabled ? em.VIEWERSIDE_CLIP_KFI_MS : r);
        let {
          allowQualityDecoupling: s
        } = A.default.getCurrentConfig({
          location: "MediaEngineStore_setupMediaEngine"
        }, {
          autoTrackExposure: !0
        });
        e.setQualityDecoupling(s)
      }
      for (let t of (n = e3(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== es.default.getId() && e.setLocalMute(t, n.localMutes[t]);
      for (let t of Object.keys(n.localVolumes)) t !== es.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
      for (let t of Object.keys(n.localPans)) {
        let i = n.localPans[t];
        e.setLocalPan(t, i.left, i.right)
      }
      for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
      e.on(m.BaseConnectionEvent.Speaking, (t, n) => {
        I.default.dispatch({
          type: "SPEAKING",
          context: e.context,
          userId: t,
          speakingFlags: n
        })
      }), e.context === em.MediaEngineContextTypes.DEFAULT && (eF = !1, e.on(m.BaseConnectionEvent.SpeakingWhileMuted, () => {
        eF = !0, i.emitChange()
      })), e.on(m.BaseConnectionEvent.DesktopSourceEnd, () => {
        I.default.dispatch({
          type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
          settings: {
            context: e.context
          }
        })
      }), e.on(m.BaseConnectionEvent.SoundshareAttached, () => {
        (null == s ? void 0 : s.desktopSource) != null && J.default.track(ep.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, P.default)(null == s ? void 0 : s.desktopSource))
      }), e.on(m.BaseConnectionEvent.SoundshareFailed, e => {
        let {
          failureCode: t,
          failureReason: n,
          willRetry: i
        } = e;
        te(null == s ? void 0 : s.desktopSource, t, n, i)
      }), e.on(m.BaseConnectionEvent.SoundshareSpeaking, () => {
        (null == s ? void 0 : s.desktopSource) != null && (J.default.track(ep.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, P.default)(null == s ? void 0 : s.desktopSource)), null != ec.default.getHookError(ep.MediaEngineHookTypes.SOUND) && I.default.wait(() => I.default.dispatch({
          type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
        })))
      });
      let l = new g.Timeout;
      e.on(m.BaseConnectionEvent.SoundshareTrace, e => {
        switch (e.type) {
          case "soundshare_attach_requested":
            l.start(e6, () => {
              I.default.dispatch({
                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                errorMessage: "Sound Hook Failed"
              })
            });
            break;
          case "soundshare_recv_failed":
            let t = e.reason,
              n = e.code,
              i = e.retry;
            (null == s ? void 0 : s.desktopSource) != null && (te(null == s ? void 0 : s.desktopSource, n, t, i), !i && (l.stop(), I.default.wait(() => I.default.dispatch({
              type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
              errorMessage: t,
              errorCode: n
            }))));
            break;
          case "soundshare_state_transition":
            4 === e.newState && (l.stop(), I.default.wait(() => I.default.dispatch({
              type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
            })))
        }
      }), e.on(m.BaseConnectionEvent.InteractionRequired, e => {
        I.default.dispatch({
          type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
          required: e
        })
      }), e.on(m.BaseConnectionEvent.VideoHookInitialize, (e, t, n, i, r, a) => {
        (null == s ? void 0 : s.desktopSource) != null && J.default.track(ep.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
          backend: e,
          format: t,
          framebuffer_format: n,
          sample_count: i,
          success: r,
          reinitialization: a,
          ...(0, P.default)(null == s ? void 0 : s.desktopSource)
        })
      }), e.on(m.BaseConnectionEvent.NoiseCancellationError, e => {
        eg.warn("noisecancellererror event: ".concat(e)), eX = !0, J.default.track(ep.AnalyticEvents.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), I.default.dispatch({
          type: "AUDIO_SET_NOISE_SUPPRESSION",
          enabled: !0
        }), I.default.dispatch({
          type: "AUDIO_SET_NOISE_CANCELLATION",
          enabled: !1
        }), I.default.dispatch({
          type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
          code: e
        })
      }), e.on(m.BaseConnectionEvent.VoiceActivityDetectorError, e => {
        eg.warn("voiceactivitydetectorerror event: ".concat(e)), J.default.track(ep.AnalyticEvents.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), I.default.dispatch({
          type: "AUDIO_SET_MODE",
          context: em.MediaEngineContextTypes.DEFAULT,
          mode: ep.InputModes.VOICE_ACTIVITY,
          options: {
            ...e3(em.MediaEngineContextTypes.DEFAULT).modeOptions,
            vadUseKrisp: !1
          }
        }), I.default.dispatch({
          type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
          code: e
        })
      }), e.on(m.BaseConnectionEvent.VideoState, t => {
        I.default.dispatch({
          type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
          videoState: t,
          context: e.context
        })
      }), e.on(m.BaseConnectionEvent.Destroy, () => {
        l.stop()
      }), e.setBitRate(ea.default.bitrate), e.applyVideoQualityMode(eE.default.mode)
    }), eA.on(m.MediaEngineEvent.DeviceChange, (e, t, n) => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_DEVICES",
        inputDevices: e,
        outputDevices: t,
        videoDevices: n
      })
    }), eA.on(m.MediaEngineEvent.VolumeChange, (e, t) => {
      I.default.dispatch({
        type: "AUDIO_VOLUME_CHANGE",
        inputVolume: e,
        outputVolume: t
      })
    }), eA.on(m.MediaEngineEvent.DesktopSourceEnd, () => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: null
      })
    }), eA.on(m.MediaEngineEvent.AudioPermission, e => {
      eJ = !0, I.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "audio",
        granted: e
      })
    }), eA.on(m.MediaEngineEvent.VideoPermission, e => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "video",
        granted: e
      })
    }), eA.on(m.MediaEngineEvent.WatchdogTimeout, async () => {
      let e;
      try {
        await $.default.submitLiveCrashReport({
          message: {
            message: "Voice Watchdog Timeout"
          }
        })
      } catch (t) {
        "number" == typeof t.status && (e = t.status)
      }
      eg.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), J.default.track(ep.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
        minidump_submission_error: e
      })
    }), eA.on(m.MediaEngineEvent.VideoInputInitialized, e => {
      J.default.track(ep.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
        device_name: e.description.name,
        time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * ee.default.Millis.SECOND),
        timed_out: e.initializationTimerExpired,
        activity: e.entropy
      })
    }), eA.on(m.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
      I.default.dispatch({
        type: "CLIPS_RESTART"
      })
    }), eA.on(m.MediaEngineEvent.ClipsInitFailure, (e, t) => {
      I.default.wait(() => {
        I.default.dispatch({
          type: "CLIPS_INIT_FAILURE",
          errMsg: e,
          applicationName: t
        })
      })
    }), eA.on(m.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
      var n, i;
      (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == s ? void 0 : null === (i = s.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && v.cancelAttachToProcess(t), a = null)
    }), tr.reset(), ! function() {
      var e;
      let t = T.default.get("audio");
      null != t && (T.default.set(eI, {
          [em.MediaEngineContextTypes.DEFAULT]: t
        }), T.default.remove("audio")), eR = null !== (e = T.default.get(eI)) && void 0 !== e ? e : {}, p.each(eR, e => {
          if (p.defaultsDeep(e, ev()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, er.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
            var t;
            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
          }(0, et.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.av1EnabledSettingVersion && (e.av1EnabledSettingVersion = 1, e.av1Enabled = !0)
        }),
        function() {
          let e = e3();
          eA.setAudioInputDevice(e.inputDeviceId), eA.setAudioOutputDevice(e.outputDeviceId), e9(), eA.setInputVolume(e.inputVolume), eA.setOutputVolume(e.outputVolume), eA.setH264Enabled(e.openH264), eA.setAv1Enabled(e.av1Enabled), eA.setAecDump(e.aecDumpEnabled)
        }()
    }(), !(0, et.isDesktop)() || __OVERLAY__ || eK || ez ? (0, et.isWeb)() && eA.supports(em.Features.NOISE_CANCELLATION) ? (ez = !0, i.emitChange()) : (0, et.isWeb)() && ts({
      noiseCancellation: !1
    }) : (eK = !0, t_()), (0, et.isMac)() && eA.supports(em.Features.SOUNDSHARE) ? eA.getSoundshareStatus().then(e => {
      tm(e)
    }).catch(e => {
      eg.warn("Failed to check if soundshare is enabled: ".concat(e))
    }) : eQ = ep.SoundshareEnableState.ENABLED, e2 = {
      [em.Features.VIDEO]: eA.supports(em.Features.VIDEO),
      [em.Features.DESKTOP_CAPTURE]: eA.supports(em.Features.DESKTOP_CAPTURE),
      [em.Features.HYBRID_VIDEO]: eA.supports(em.Features.HYBRID_VIDEO)
    }, this.waitFor(es.default, eo.default, el.default, ec.default, ed.default, ef.default, q.default.storage, Z.default, eu.default, R.default)
  }
  supports(e) {
    return eA.supports(e)
  }
  supportsInApp(e) {
    return e2[e] || eA.supports(e)
  }
  isSupported() {
    return eA.supported()
  }
  isExperimentalEncodersSupported() {
    return eA.supports(em.Features.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return eA.supports(em.Features.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return ez || !1
  }
  isNoiseCancellationError() {
    return eX
  }
  isAutomaticGainControlSupported() {
    return eA.supports(em.Features.AUTOMATIC_GAIN_CONTROL)
  }
  isAdvancedVoiceActivitySupported() {
    return ez || !1
  }
  isAecDumpSupported() {
    return eA.supports(em.Features.AEC_DUMP)
  }
  isSimulcastSupported() {
    return eA.supports(em.Features.VIDEO) && eA.supports(em.Features.SIMULCAST)
  }
  getAecDump() {
    return e3().aecDumpEnabled
  }
  getMediaEngine() {
    return eA
  }
  getVideoComponent() {
    return eA.supports(em.Features.DIRECT_VIDEO) && eA.setUseDirectVideo(!0), eA.Video
  }
  getCameraComponent() {
    return eA.supports(em.Features.DIRECT_VIDEO) && eA.setUseDirectVideo(!0), eA.Camera
  }
  isEnabled() {
    return eO
  }
  isMute() {
    return this.isSelfMute() || eM
  }
  isDeaf() {
    return this.isSelfDeaf() || ew
  }
  hasContext(e) {
    return null != eR[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
    return e === em.MediaEngineContextTypes.DEFAULT && eU
  }
  isSelfMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
    return !this.isEnabled() || e3(e).mute || !q.default.didHavePermission(e_.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === em.MediaEngineContextTypes.DEFAULT && eG
  }
  isHardwareMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(e) && eo.default.isHardwareMute(this.getInputDeviceId())
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
    return !this.isSupported() || e3(e).deaf
  }
  isVideoEnabled() {
    return ek && eB
  }
  isVideoAvailable() {
    return Object.values(eb).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.STREAM;
    return ey === e && null != s
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.STREAM;
    return ey === t && null != s && (null === (e = s.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT;
    return e !== es.default.getId() && (e3(t).localMutes[e] || !1)
  }
  supportsDisableLocalVideo() {
    return eA.supports(em.Features.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e3(n).disabledLocalVideos[e]) && void 0 !== t && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e3(n).videoToggleStateMap[e]) && void 0 !== t ? t : ep.VideoToggleState.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT;
    return t === em.MediaEngineContextTypes.DEFAULT && e$.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
    return e === em.MediaEngineContextTypes.DEFAULT && e$.size > 0
  }
  isMediaFilterSettingLoading() {
    return eZ
  }
  isNativeAudioPermissionReady() {
    return eJ
  }
  getGoLiveSource() {
    return s
  }
  getGoLiveContext() {
    return ey
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT,
      n = e3(t).localPans[e];
    return null != n ? n : eC
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT,
      n = t === em.MediaEngineContextTypes.STREAM,
      i = n ? em.DEFAULT_STREAM_VOLUME : em.DEFAULT_VOLUME,
      r = e3(t).localVolumes[e];
    return null != r ? r : i
  }
  getInputVolume() {
    return e3().inputVolume
  }
  getOutputVolume() {
    return e3().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
    return e3(e).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
    return e3(e).modeOptions
  }
  getShortcuts() {
    let e = {};
    return p.each(eR, (t, n) => {
      let {
        mode: i,
        modeOptions: {
          shortcut: r
        }
      } = t;
      i === ep.InputModes.PUSH_TO_TALK && eN.has(n) && (e[n] = r)
    }), e
  }
  getInputDeviceId() {
    return tu(eP, e3().inputDeviceId)
  }
  getOutputDeviceId() {
    return tu(eL, e3().outputDeviceId)
  }
  getVideoDeviceId() {
    return tu(eb, e3().videoDeviceId)
  }
  getInputDevices() {
    return eP
  }
  getOutputDevices() {
    return eL
  }
  getVideoDevices() {
    return eb
  }
  getEchoCancellation() {
    let e = e3();
    return eo.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
  }
  getH265Enabled() {
    return e3().h265Enabled
  }
  getLoopback() {
    return eA.getLoopback()
  }
  getNoiseSuppression() {
    let e = e3();
    return eo.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = e3();
    return eo.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
  }
  getNoiseCancellation() {
    return e3().noiseCancellation
  }
  getExperimentalEncoders() {
    return e3().experimentalEncoders
  }
  getHardwareH264() {
    return e3().hardwareH264
  }
  getEnableSilenceWarning() {
    return e3().silenceWarning
  }
  getDebugLogging() {
    return eA.getDebugLogging()
  }
  getQoS() {
    return e3().qos
  }
  getAttenuation() {
    return e3().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return e3().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return e3().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return eA.getAudioSubsystem()
  }
  getSettings() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
    return e3(e)
  }
  getState() {
    return {
      settingsByContext: eR,
      inputDevices: eP,
      outputDevices: eL,
      appSupported: e2,
      krispModuleLoaded: ez,
      goLiveSource: s,
      goLiveContext: ey
    }
  }
  getInputDetected() {
    return eH
  }
  getNoInputDetectedNotice() {
    return eY
  }
  getPacketDelay() {
    return et.isPlatformEmbedded || this.getMode() !== ep.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    eA.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return eD
  }
  getVideoHook() {
    return e3().videoHook
  }
  supportsVideoHook() {
    return eA.supports(em.Features.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = e3().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == e || e)
  }
  supportsExperimentalSoundshare() {
    return eA.supports(em.Features.EXPERIMENTAL_SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, eh.WINDOWS_SOUNDSHARE_VERSION)
  }
  getOpenH264() {
    return e3().openH264
  }
  getAv1Enabled() {
    return e3().av1Enabled
  }
  getEverSpeakingWhileMuted() {
    return eF
  }
  getSoundshareEnabled() {
    return eQ
  }
  supportsEnableSoundshare() {
    return (0, et.isMac)() && eA.supports(em.Features.SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, eh.DARWIN_SOUNDSHARE_VERSION) && !(_.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, eh.DARWIN_SCKIT_AUDIO_VERSION) && ti(!1))
  }
  supportsScreenSoundshare() {
    return (0, et.isMac)() && eA.supports(em.Features.SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, eh.DARWIN_SCKIT_AUDIO_VERSION) && ti(!1) || (0, et.isWindows)() && eA.supports(em.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
  }
  getVideoStreamParameters() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT,
      t = this.supports(em.Features.VIDEO) ? [{
        rid: "100",
        type: e === em.MediaEngineContextTypes.DEFAULT ? em.MediaTypes.VIDEO : em.MediaTypes.SCREEN,
        quality: 100
      }] : [];
    return this.isSimulcastSupported() && e === em.MediaEngineContextTypes.DEFAULT && t.push({
      rid: "50",
      type: em.MediaTypes.VIDEO,
      quality: 50
    }), t
  }
  getSupportedSecureFramesProtocolVersion(e) {
    var t;
    let n = eA.getSupportedSecureFramesProtocolVersion(),
      i = H.SecureFramesUserExperiment.getCurrentConfig({
        location: "MediaEngineStore"
      }),
      r = null != e ? H.SecureFramesGuildExperiment.getCurrentConfig({
        guildId: e,
        location: "MediaEngineStore"
      }) : null,
      s = i.canSupportSecureFrames || (null == r ? void 0 : r.canSupportSecureFrames),
      a = !(0, et.isIOS)() && !(0, et.isAndroid)() && (i.canSupportMls || (null == r ? void 0 : r.canSupportMls)),
      o = Math.max(i.protocolVersionFloor, null !== (t = null == r ? void 0 : r.protocolVersionFloor) && void 0 !== t ? t : 0);
    return s && n % 100 >= o ? a ? n : n % 100 : 0
  }
  hasClipsSource() {
    return null != a
  }
}
tg.displayName = "MediaEngineStore";
var tI = i = new tg(I.default, {
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n,
      currentVoiceChannelId: i,
      video: r
    } = e;
    if (i !== n && e9(r, null), null != t || null == n) {
      eW = !1;
      return
    }
    if (eW) return;
    eW = !0;
    let s = e3();
    (s.mute || s.deaf) && (ts({
      deaf: !1,
      mute: !1
    }), eA.eachConnection(e8))
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      if (r === t.sessionId) {
        eM = t.mute || t.suppress, ew = t.deaf, eA.eachConnection(e8);
        let e = null != t.guildId && null != t.channelId && null != eq && eq !== t.channelId,
          n = !e && ek;
        return e9(n), eq = t.channelId, !0
      }
      return !__OVERLAY__ && t.userId === es.default.getId() && null == ed.default.getChannelId() && e9(!1, null), e
    }, !1)
  },
  CONNECTION_OPEN: function(e) {
    r = e.sessionId, eM = !1, ew = !1, (0, X.shouldReadWriteAudioSettings)() && tc()
  },
  CONNECTION_CLOSED: function() {
    r = null
  },
  RTC_CONNECTION_STATE: function(e) {
    switch (e.state) {
      case ep.RTCConnectionStates.CONNECTING:
        ta();
        break;
      case ep.RTCConnectionStates.RTC_CONNECTING:
        ej = !1, eY = !1;
        break;
      case ep.RTCConnectionStates.RTC_CONNECTED:
        e9();
        break;
      case ep.RTCConnectionStates.DISCONNECTED:
        (function() {
          if (0 === e$.size) return;
          let e = em.MediaEngineContextTypes.DEFAULT,
            {
              disabledLocalVideos: t
            } = e3(e);
          e$.forEach(n => {
            f(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eA.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
          }), e$.clear(), ts({
            disabledLocalVideos: t
          }, e, !1)
        })()
    }
    tr.update()
  },
  AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
    let {
      mute: t
    } = e;
    eU = t, eA.eachConnection(e8)
  },
  AUDIO_TOGGLE_SELF_MUTE: function(e) {
    let {
      context: t
    } = e, {
      mute: n,
      deaf: i
    } = e3(t);
    if (t === em.MediaEngineContextTypes.DEFAULT && (q.default.requestPermission(e_.NativePermissionTypes.AUDIO), eG)) return !1;
    !(n = !i && !n) && (i = !1), ts({
      mute: n,
      deaf: i
    }, t), eA.eachConnection(e8)
  },
  AUDIO_TOGGLE_SELF_DEAF: function(e) {
    let {
      context: t
    } = e, n = e3(t);
    ts({
      deaf: !n.deaf
    }, t), eA.eachConnection(e8)
  },
  AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
    let {
      context: t,
      userId: n
    } = e;
    if (n === es.default.getId()) return;
    let {
      localMutes: i
    } = e3(t);
    i[n] ? delete i[n] : i[n] = !0, ts({
      localMutes: i
    }, t), eA.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
    var t, n, i, r, s, a, o;
    let {
      context: l,
      userId: u,
      videoToggleState: c,
      persist: d,
      isAutomatic: E
    } = e;
    f(!(d && E), "These are not allowed to both be true.");
    let p = c === ep.VideoToggleState.DISABLED,
      {
        disabledLocalVideos: h
      } = e3(l),
      _ = null !== (t = h[u]) && void 0 !== t && t,
      S = e$.has(u),
      m = c === ep.VideoToggleState.AUTO_ENABLED || c === ep.VideoToggleState.MANUAL_ENABLED;
    eg.info("disableVideo=".concat(p, " currentlyDisabled=").concat(_, " currentlyAutoDisabled=").concat(S, ", isVideoShown=").concat(m)), f(!(S && !_), "If you are auto-disabled, then you are also disabled.");
    let T = p !== _,
      g = l === em.MediaEngineContextTypes.DEFAULT,
      I = E && T && g,
      C = d && T && g;
    eg.info("changed=".concat(T, " isDefaultContext=").concat(g, " isUpdateCausedByVideoHealthManager=").concat(I, " isManualToggleByUser=").concat(C));
    let {
      videoToggleStateMap: v
    } = e3(l);
    if (v[u] === ep.VideoToggleState.AUTO_PROBING && c === ep.VideoToggleState.AUTO_ENABLED && (0, z.default)(u, p ? em.VideoToggleReason.AUTO_DISABLE : em.VideoToggleReason.AUTO_ENABLE, m), v[u] = c, ts({
        videoToggleStateMap: v
      }, l, d), c === ep.VideoToggleState.AUTO_PROBING ? null === (n = ed.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = ed.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !e0 && (eg.info("isAutoDisableAllowed=".concat(e0, " - disabling VideoHealthManager")), null === (s = ed.default.getRTCConnection()) || void 0 === s || null === (r = s.getVideoHealthManager()) || void 0 === r || r.disable()), I) {
      if (!p && !S || p && !e0) return;
      (0, z.default)(u, p ? em.VideoToggleReason.AUTO_DISABLE : em.VideoToggleReason.AUTO_ENABLE, m), p ? e$.add(u) : e$.delete(u)
    } else C && (S && !p ? (eg.info("disallowing auto-disable for this session because of manual override by user"), e0 = !1, null === (o = ed.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, z.default)(u, em.VideoToggleReason.MANUAL_REENABLE, m)) : (0, z.default)(u, p ? em.VideoToggleReason.MANUAL_DISABLE : em.VideoToggleReason.MANUAL_ENABLE, m));
    g && !p && e$.delete(u), p ? h[u] = !0 : delete h[u], ts({
      disabledLocalVideos: h
    }, l, d), eA.eachConnection(e => {
      var t;
      return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t)
    }, l)
  },
  AUDIO_SET_LOCAL_VOLUME: function(e) {
    let {
      context: t,
      userId: n,
      volume: i
    } = e;
    if (n === es.default.getId()) return;
    let r = t === em.MediaEngineContextTypes.STREAM,
      s = r ? em.DEFAULT_STREAM_VOLUME : em.DEFAULT_VOLUME,
      {
        localVolumes: a
      } = e3(t);
    i === s ? delete a[n] : a[n] = i, ts({
      localVolumes: a
    }, t), eA.eachConnection(e => e.setLocalVolume(n, i), t)
  },
  AUDIO_SET_LOCAL_PAN: function(e) {
    let {
      context: t,
      userId: n,
      left: i,
      right: r
    } = e, {
      localPans: s
    } = e3(t);
    s[n] = {
      left: i,
      right: r
    }, ts({
      localPans: s
    }, t), eA.eachConnection(e => e.setLocalPan(n, i, r), t)
  },
  AUDIO_SET_MODE: function(e) {
    let {
      context: t,
      mode: n,
      options: i
    } = e;
    ts({
      mode: n,
      modeOptions: i
    }, t), eA.eachConnection(e5), tr.update()
  },
  AUDIO_SET_INPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    ts({
      inputVolume: e7(t)
    }), eA.setInputVolume(t)
  },
  AUDIO_SET_OUTPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    ts({
      outputVolume: t
    }), eA.setOutputVolume(t)
  },
  AUDIO_SET_INPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ts({
      inputDeviceId: t = tu(eP, t)
    }), eA.setAudioInputDevice(t)
  },
  AUDIO_SET_OUTPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ts({
      outputDeviceId: t = tu(eL, t)
    }), eA.setAudioOutputDevice(t)
  },
  AUDIO_SET_ECHO_CANCELLATION: function(e) {
    let t = ts({
      echoCancellation: e.enabled
    });
    eA.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tp(), tE(e.location)
  },
  MEDIA_ENGINE_SET_H265: function(e) {
    let t = ts({
      h265Enabled: e.enabled
    });
    eA.setH265Enabled(t.h265Enabled)
  },
  AUDIO_SET_LOOPBACK: function(e) {
    let {
      enabled: t
    } = e;
    return e1 = t, tp()
  },
  AUDIO_SET_NOISE_SUPPRESSION: function(e) {
    let t = ts({
      noiseSuppression: e.enabled
    });
    eA.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tp(), tE(e.location)
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
    let t = ts({
      automaticGainControl: e.enabled
    });
    eA.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tp(), tE(e.location)
  },
  AUDIO_SET_NOISE_CANCELLATION: function(e) {
    let t = ts({
      noiseCancellation: e.enabled
    });
    eA.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tp(), tE(e.location)
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
    ts({
      silenceWarning: e.enabled
    }), tr.update()
  },
  AUDIO_SET_DEBUG_LOGGING: function(e) {
    eA.setDebugLogging(e.enabled)
  },
  MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
    ts({
      videoHook: e.enabled
    })
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
    ts({
      experimentalSoundshare2: e.enabled
    })
  },
  AUDIO_SET_ATTENUATION: function(e) {
    let {
      attenuation: t,
      attenuateWhileSpeakingSelf: n,
      attenuateWhileSpeakingOthers: i
    } = e, r = ts({
      attenuation: t,
      attenuateWhileSpeakingSelf: n,
      attenuateWhileSpeakingOthers: i
    });
    eA.eachConnection(e => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers))
  },
  AUDIO_SET_QOS: function(e) {
    let {
      enabled: t
    } = e;
    ts({
      qos: t
    }), eA.eachConnection(e => e.setQoS(t))
  },
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: n,
      videoDevices: i
    } = e;
    ! function(e) {
      let t = eP;
      if (eP = tl(e, eT.default.Messages.NO_INPUT_DEVICES), !p.isEqual(eP, t)) {
        let e = e3(),
          t = tu(eP, e.inputDeviceId);
        eA.setAudioInputDevice(t)
      }
    }(t), ! function(e) {
      let t = eL;
      if (eL = tl(e, eT.default.Messages.NO_OUTPUT_DEVICES), !p.isEqual(eL, t)) {
        let e = e3(),
          t = tu(eL, e.outputDeviceId);
        eA.setAudioOutputDevice(t)
      }
    }(n), ! function(e) {
      eB = e.length > 0;
      let t = eb;
      if (eb = tl(e, eT.default.Messages.NO_VIDEO_DEVICES), ek && !p.isEqual(eb, t)) {
        var n;
        let e = void 0 !== eb[ex],
          i = ex === em.DEFAULT_DEVICE_ID && (null === (n = t[em.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
        e9(e || i)
      }
    }(i)
  },
  AUDIO_VOLUME_CHANGE: function(e) {
    let {
      inputVolume: t,
      outputVolume: n
    } = e;
    ts({
      inputVolume: e7(t),
      outputVolume: n
    })
  },
  AUDIO_RESET: function() {
    T.default.remove(eI), location.reload()
  },
  AUDIO_INPUT_DETECTED: function(e) {
    let {
      inputDetected: t
    } = e;
    eH = t, !ej && eH && (ej = !0, tr.update())
  },
  AUDIO_SET_SUBSYSTEM: function(e) {
    eA.setAudioSubsystem(e.subsystem)
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
    eO = e.enabled, e.unmute && ts({
      mute: !1,
      deaf: !1
    }), eA.eachConnection(e8)
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
    let {
      enabled: t
    } = e;
    q.default.requestPermission(e_.NativePermissionTypes.CAMERA), e9(t)
  },
  MEDIA_ENGINE_PERMISSION: function(e) {
    let {
      kind: t,
      granted: n
    } = e;
    if (!n) switch (t) {
      case "audio":
        eO = !1, eA.eachConnection(e8);
        break;
      case "video":
        e9(!1)
    }
  },
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
    var t, n, i, r, a;
    let {
      settings: o
    } = e;
    if ((null == o ? void 0 : o.desktopSettings) != null) {
      ;
      let e = null,
        i = null,
        {
          sourceId: r,
          sound: l
        } = o.desktopSettings,
        u = null !== (t = o.context) && void 0 !== t ? t : em.MediaEngineContextTypes.DEFAULT,
        c = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
          resolution: 720,
          frameRate: 30
        },
        d = $.default.getPidFromDesktopSource(r);
      et.isPlatformEmbedded && !0 === l && ({
        soundshareId: e,
        soundshareSession: i
      } = td(d), null != e && tf(e, i)), (a = u) !== ey && (null != s && eA.setGoLiveSource(null, ey), ey = a);
      let f = u === em.MediaEngineContextTypes.STREAM && ek;
      e9(f, {
        desktopSource: {
          id: r,
          sourcePid: d,
          soundshareId: e,
          soundshareSession: i
        },
        quality: {
          resolution: c.resolution,
          frameRate: c.frameRate
        }
      })
    } else if ((null == o ? void 0 : o.cameraSettings) != null) {
      let e = null !== (i = o.context) && void 0 !== i ? i : em.MediaEngineContextTypes.DEFAULT,
        {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        } = o.cameraSettings,
        s = e === em.MediaEngineContextTypes.STREAM && ek,
        a = null !== (r = o.qualityOptions) && void 0 !== r ? r : {
          resolution: 720,
          frameRate: 30
        };
      e9(s, {
        cameraSource: {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        },
        quality: {
          resolution: a.resolution,
          frameRate: a.frameRate
        }
      })
    } else e9(ek, null)
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ts({
      videoDeviceId: t = tu(eb, t)
    }), e9()
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
    let t = ts({
      experimentalEncoders: e.enabled
    });
    eA.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
  },
  MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
    return eD !== e.required && (eD = e.required, !e.required && eA.interact(), !0)
  },
  USER_SETTINGS_MODAL_INIT: tS,
  USER_SETTINGS_MODAL_SET_SECTION: tS,
  CERTIFIED_DEVICES_SET: function() {
    return eA.eachConnection(tt), !1
  },
  RPC_APP_CONNECTED: function(e) {
    let {
      application: t
    } = e;
    eN.add(t.id)
  },
  RPC_APP_DISCONNECTED: function(e) {
    let {
      application: t
    } = e;
    eN.delete(t.id)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      mediaEngineState: t
    } = e;
    eR = t.settingsByContext, eP = t.inputDevices, eL = t.outputDevices, e2 = t.appSupported, ez = t.krispModuleLoaded, ey = t.goLiveContext
  },
  MEDIA_ENGINE_SET_OPEN_H264: function(e) {
    let {
      enabled: t
    } = e, n = ts({
      openH264: t
    });
    eA.setH264Enabled(n.openH264)
  },
  MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
    let {
      enabled: t
    } = e, n = ts({
      hardwareH264: t
    });
    eA.eachConnection(e => e.setHardwareH264(n.hardwareH264))
  },
  MEDIA_ENGINE_SET_AV1: function(e) {
    let {
      enabled: t
    } = e, n = ts({
      av1Enabled: t
    });
    eA.setAv1Enabled(n.av1Enabled)
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e, n = y.default.isEnabled();
    if (t === ep.AppStates.BACKGROUND && ek && !n) eV = !0, e9(!1);
    else {
      if (t !== ep.AppStates.ACTIVE || !eV) return !1;
      eV = !1, e9(!0)
    }
    return !0
  },
  SET_CHANNEL_BITRATE: function(e) {
    eA.eachConnection(t => t.setBitRate(e.bitrate))
  },
  SET_VAD_PERMISSION: function(e) {
    let {
      hasPermission: t
    } = e, n = !t;
    if (n === eG) return !1;
    eG = n, eA.eachConnection(e8)
  },
  SET_NATIVE_PERMISSION: function(e) {
    let {
      state: t,
      permissionType: n
    } = e, i = t === e_.NativePermissionStates.ACCEPTED;
    switch (n) {
      case e_.NativePermissionTypes.AUDIO:
        eJ = !0, eA.eachConnection(e8);
        break;
      case e_.NativePermissionTypes.CAMERA:
        !i && ek && e9(!1);
        break;
      default:
        return !1
    }
  },
  SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
    eA.eachConnection(t => t.applyVideoQualityMode(e.mode))
  },
  MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
    let {
      enabled: t
    } = e, n = ts({
      aecDumpEnabled: t
    });
    eA.setAecDump(n.aecDumpEnabled)
  },
  CHANNEL_DELETE: function() {
    if (!ek && null == s || null != ed.default.getRTCConnectionId()) return !1;
    e9(!1, null)
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
    return !!eX && (eX = !1, !0)
  },
  MEDIA_ENGINE_ENABLE_SOUNDSHARE: function() {
    tT(), ! function() {
      var e, t;
      let n = i.isSoundSharing(),
        r = null === (e = i.getGoLiveSource()) || void 0 === e ? void 0 : e.desktopSource;
      if (null != r) {
        let e = null !== (t = r.soundshareId) && void 0 !== t ? t : 0,
          s = i.getExperimentalSoundshare();
        n && eA.setSoundshareSource(e, s, ey)
      }
    }()
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    eA.applyMediaFilterSettings(t).finally(() => {
      eZ = !1, i.emitChange()
    })
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
    eZ = !0
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
    eZ = !1
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      local: n,
      wasSaved: i
    } = e;
    if (!(0, X.shouldReadWriteAudioSettings)() || t !== eS.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
    tc(!0)
  },
  CLIPS_INIT: function(e) {
    let {
      sourceId: t,
      applicationName: n,
      quality: r
    } = e, {
      enableDecoupledGameClipping: s
    } = b.default.getCurrentConfig({
      location: "handleClipsInit"
    }, {
      autoTrackExposure: !0
    }), o = R.default.getSettings().decoupledClipsEnabled;
    if (!s || !o || null == C.default) return;
    let l = null,
      u = null,
      c = $.default.getPidFromDesktopSource(t);
    ({
      soundshareId: l,
      soundshareSession: u
    } = td(c));
    let d = {
      desktopSource: {
        id: t,
        sourcePid: c,
        soundshareId: l,
        soundshareSession: u
      },
      quality: r
    };
    null != a && a.desktopSource.id !== d.desktopSource.id && (eA.setClipsSource(null), (0, et.isWindows)() && null != a.desktopSource.soundshareId && v.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && tf(l, u), a = d;
    let {
      useQuartzCapturer: f
    } = V.default.getCurrentConfig({
      location: "f627ab_11"
    }, {
      autoTrackExposure: !1
    }), {
      hdrCaptureMode: E
    } = w.default.getCurrentConfig({
      location: "f627ab_12"
    }, {
      autoTrackExposure: !1
    }), p = e3().videoHook, h = eA.supports(em.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
      videoHookStaleFrameTimeoutMs: _
    } = j.default.getConfig(h && p, "e225cfdf5_vh2", !1), {
      graphicsCaptureStaleFrameTimeoutMs: S
    } = K.default.getConfig(h && tn(), "e225cfdf5_wgc2", !1);
    eA.setClipsSource({
      desktopDescription: {
        id: a.desktopSource.id,
        soundshareId: a.desktopSource.soundshareId,
        useVideoHook: p,
        useGraphicsCapture: tn(),
        useLoopback: i.getExperimentalSoundshare(),
        useQuartzCapturer: f,
        allowScreenCaptureKit: ti(!1),
        videoHookStaleFrameTimeoutMs: _,
        graphicsCaptureStaleFrameTimeoutMs: S,
        hdrCaptureMode: E
      },
      quality: r,
      applicationName: n
    })
  },
  CLIPS_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    void 0 !== t.viewerClipsEnabled && eA.eachConnection(e => e.setClipsKeyFrameInterval(R.default.getSettings().viewerClipsEnabled ? em.VIEWERSIDE_CLIP_KFI_MS : 0), em.MediaEngineContextTypes.STREAM), !1 === t.decoupledClipsEnabled && (a = null, eA.setClipsSource(null))
  }
})