"use strict";
let i, r, s, a;
n.r(t), n("47120"), n("724458"), n("773603"), n("653041"), n("337869");
var o, l, u, d = n("512722"),
  _ = n.n(d),
  c = n("392711"),
  E = n.n(c),
  I = n("553813"),
  T = n.n(I),
  f = n("442837"),
  S = n("46973"),
  h = n("433517"),
  A = n("846519"),
  m = n("570140"),
  N = n("579806"),
  p = n("887278"),
  O = n("547727"),
  C = n("565885"),
  R = n("435064"),
  g = n("779618"),
  L = n("710845"),
  v = n("811660"),
  D = n("353926"),
  M = n("646047"),
  y = n("594190"),
  P = n("502286"),
  U = n("248062"),
  b = n("227196"),
  G = n("294473"),
  w = n("706629"),
  k = n("926951"),
  B = n("836157"),
  V = n("498600"),
  x = n("631610"),
  F = n("951958"),
  H = n("529558"),
  Y = n("874785"),
  j = n("636458"),
  W = n("441167"),
  K = n("338336"),
  z = n("751571"),
  Z = n("815016"),
  Q = n("725380"),
  X = n("581883"),
  q = n("626135"),
  J = n("12647"),
  $ = n("70956"),
  ee = n("358085"),
  et = n("960048"),
  en = n("998502"),
  ei = n("13140"),
  er = n("314897"),
  es = n("967368"),
  ea = n("463395"),
  eo = n("592125"),
  el = n("858340"),
  eu = n("19780"),
  ed = n("631768"),
  e_ = n("981631"),
  ec = n("70722"),
  eE = n("761274"),
  eI = n("526761"),
  eT = n("65154"),
  ef = n("689938");

function eS(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eh = new L.default("MediaEngineStore");
(u = o || (o = {}))[u.DETACHED = 0] = "DETACHED", u[u.WAITING = 1] = "WAITING", u[u.ATTACHED = 2] = "ATTACHED", u[u.STARTED = 3] = "STARTED", u[u.PLAYING = 4] = "PLAYING", u[u.SILENCE = 5] = "SILENCE";
let eA = "MediaEngineStore",
  em = {
    left: 1,
    right: 1
  },
  eN = 5 * $.default.Millis.SECOND;

function ep() {
  return {
    mode: e_.InputModes.VOICE_ACTIVITY,
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
    silenceWarning: !0,
    attenuation: 0,
    attenuateWhileSpeakingSelf: !1,
    attenuateWhileSpeakingOthers: !0,
    localMutes: {},
    disabledLocalVideos: {},
    videoToggleStateMap: {},
    localVolumes: {},
    localPans: {},
    inputVolume: eT.DEFAULT_VOLUME,
    outputVolume: eT.DEFAULT_VOLUME,
    inputDeviceId: eT.DEFAULT_DEVICE_ID,
    outputDeviceId: eT.DEFAULT_DEVICE_ID,
    videoDeviceId: eT.DEFAULT_DEVICE_ID,
    qos: !1,
    qosMigrated: !1,
    videoHook: eO.supports(eT.Features.VIDEO_HOOK),
    experimentalSoundshare2: null,
    openH264: !0,
    h265Enabled: !0,
    vadThrehsoldMigrated: !1,
    aecDumpEnabled: !1
  }
}
let eO = (0, S.initializeMediaEngine)((0, S.determineMediaEngine)()),
  eC = {},
  eR = new Set([eT.MediaEngineContextTypes.DEFAULT]),
  eg = eO.supports(eT.Features.AUTO_ENABLE),
  eL = !1,
  ev = eT.MediaEngineContextTypes.STREAM,
  eD = {
    [eT.DEFAULT_DEVICE_ID]: to(ef.default.Messages.NO_INPUT_DEVICES)
  },
  eM = {
    [eT.DEFAULT_DEVICE_ID]: to(ef.default.Messages.NO_OUTPUT_DEVICES)
  },
  ey = {
    [eT.DEFAULT_DEVICE_ID]: to(ef.default.Messages.NO_VIDEO_DEVICES)
  },
  eP = !1,
  eU = !1,
  eb = !1,
  eG = !1,
  ew = !1,
  ek = eT.DISABLED_DEVICE_ID,
  eB = !1,
  eV = !1,
  ex = !1,
  eF = !1,
  eH = null,
  eY = !1,
  ej = !1,
  eW = !1,
  eK = !1,
  ez = !1,
  eZ = null,
  eQ = !1,
  eX = !1,
  eq = !1;
z.default.hasPermission(eE.NativePermissionTypes.AUDIO, {
  showAuthorizationError: !1
}), z.default.hasPermission(eE.NativePermissionTypes.CAMERA, {
  showAuthorizationError: !1
});
let eJ = new Set,
  e$ = !1,
  e0 = !1,
  e1 = {},
  e2 = {},
  e3 = 5 * $.default.Millis.SECOND;

function e4() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.MediaEngineContextTypes.DEFAULT,
    t = eC[e];
  return null == t && (t = ep(), eC[e] = t), t
}

function e6(e) {
  let t = e4(e.context);
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
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.DEFAULT_VOLUME;
  return E().clamp(e, 0, t)
}

function e5(e) {
  let t = e4(e.context),
    n = !eg || t.mute || t.deaf;
  e.context === eT.MediaEngineContextTypes.DEFAULT ? n = n || eP || eU || eb || !z.default.didHavePermission(eE.NativePermissionTypes.AUDIO) : e.context === eT.MediaEngineContextTypes.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eT.MediaEngineContextTypes.DEFAULT && O.default.updateNativeMute()
}

function e8() {
  var e, t, n;
  let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew,
    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
    o = s;
  if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, ee.isWindows)() && p.cancelAttachToProcess(o.desktopSource.soundshareId), eO.setGoLiveSource(null, ev)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eO.setGoLiveSource(null, ev), (ew || r) && (ek = (ew = r) ? tu(ey, e4().videoDeviceId) : eT.DISABLED_DEVICE_ID, eO.setVideoInputDevice(ek)), s = a, null != a) {
    let e = {
      resolution: a.quality.resolution,
      frameRate: a.quality.frameRate
    };
    if (null != a.desktopSource) {
      let {
        hdrCaptureMode: t
      } = V.default.getCurrentConfig({
        location: "f627ab_2"
      }, {
        autoTrackExposure: !1
      }), n = e4().videoHook;
      eO.setGoLiveSource({
        desktopDescription: {
          id: a.desktopSource.id,
          soundshareId: a.desktopSource.soundshareId,
          useVideoHook: n,
          useGraphicsCapture: tt(),
          useLoopback: i.getExperimentalSoundshare(),
          useQuartzCapturer: !0,
          allowScreenCaptureKit: tn(),
          videoHookStaleFrameTimeoutMs: 500,
          graphicsCaptureStaleFrameTimeoutMs: eN,
          hdrCaptureMode: t
        },
        quality: e
      }, ev)
    }
    null != a.cameraSource && eO.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: a.cameraSource.videoDeviceGuid,
        audioDeviceGuid: a.cameraSource.audioDeviceGuid
      },
      quality: e
    }, ev)
  }
}

function e9(e, t, n, i) {
  var r;
  let s = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : "";
  null == e2[s] && (e2[s] = new Set);
  let a = null != t && !e2[s].has(t);
  a && e2[s].add(t), (null == t || a) && q.default.track(e_.AnalyticEvents.SOUNDSHARE_FAILED, {
    soundshare_failure_code: t,
    soundshare_failure_reason: n,
    soundshare_failure_will_retry: i,
    ...(0, P.default)(e)
  })
}

function te(e) {
  let t = e4(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(ea.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ea.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ea.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, ee.isWeb)()) {
    let n = t.noiseCancellation ? -150 : -100;
    e.setSilenceThreshold(n)
  }
}

function tt() {
  return (0, ee.isWindows)() && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, ec.WINDOWS_GRAPHICS_CAPTURE_VERSION)
}

function tn() {
  return (0, ee.isMac)() && eO.supports(eT.Features.SCREEN_CAPTURE_KIT) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, ec.DARWIN_SCKIT_VERSION)
}

function ti() {
  return k.default.supportsSimulcast()
}
let tr = new class {
  start() {
    !this.started && (this.started = !0, eO.on(S.MediaEngineEvent.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eO.removeListener(S.MediaEngineEvent.Silence, this.handleSilence), m.default.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = e4();
    !eY && eu.default.getState() === e_.RTCConnectionStates.RTC_CONNECTED && e.mode === e_.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    eS(this, "stateChangeTimeout", void 0), eS(this, "noVoiceTimeout", 5e3), eS(this, "voiceTimeout", 1500), eS(this, "started", !1), eS(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (m.default.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (ej = !0))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function ts(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.MediaEngineContextTypes.DEFAULT,
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = e4(t);
  return Object.assign(i, e), !__OVERLAY__ && n && h.Storage.set(eA, eC), i
}

function ta() {
  !eg && eO.enable().then(() => m.default.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: !0,
    unmute: !1
  }))
}

function to(e) {
  return {
    id: eT.DEFAULT_DEVICE_ID,
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
  return E()(e).map(e => ({
    id: e.id,
    index: e.index,
    name: e.name,
    disabled: !1
  })).keyBy("id").value()
}

function tu(e, t) {
  var n;
  let i = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
  return null != i ? i.id : t
}

function td() {
  var e, t;
  let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    i = null !== (e = X.default.settings.audioContextSettings) && void 0 !== e ? e : {
      user: {},
      stream: {}
    };
  for (let e of Object.keys(i)) {
    let r = e === eI.ProtoAudioSettingsContextTypes.USER ? eT.MediaEngineContextTypes.DEFAULT : eT.MediaEngineContextTypes.STREAM,
      s = r === eT.MediaEngineContextTypes.STREAM ? eT.DEFAULT_STREAM_VOLUME : eT.DEFAULT_VOLUME,
      a = null !== (t = i[e]) && void 0 !== t ? t : {},
      {
        localMutes: o,
        localVolumes: l
      } = e4(r);
    for (let [e, t] of Object.entries(a)) null == (0, Q.getPendingAudioSettings)(r, e) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== s ? l[e] = t.volume : delete l[e], eO.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, r));
    if (n)
      for (let e of new Set([...Object.keys(o), ...Object.keys(l)])) null == a[e] && (delete o[e], delete l[e], eO.eachConnection(t => {
        t.setLocalVolume(e, s), t.setLocalMute(e, !1)
      }, r));
    ts({
      localMutes: o,
      localVolumes: l
    }, r)
  }
}

function t_(e) {
  if (null == i) return eh.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = i.getExperimentalSoundshare() ? e : J.default.getAudioPid(e),
      n = "";
    return null != t && (n = J.default.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function tc(e, t) {
  (0, ee.isWindows)() && p.attachToProcess(e, {
    soundshare_session: t
  }).then(t => {
    null != t && !y.default.shouldContinueWithoutElevatedProcessForPID(e) && m.default.wait(() => {
      m.default.dispatch({
        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
        errorMessage: t
      })
    })
  })
}

function tE() {
  let e = eT.MediaEngineContextTypes.DEFAULT,
    {
      videoToggleStateMap: t
    } = e4(e);
  for (let [e, n] of Object.entries(t)) n === e_.VideoToggleState.AUTO_PROBING && delete t[e];
  ts({
    videoToggleStateMap: t
  }, e, !1)
}

function tI(e) {
  let t = e4();
  q.default.track(e_.AnalyticEvents.VOICE_PROCESSING, {
    echo_cancellation: t.echoCancellation,
    noise_cancellation: t.noiseCancellation,
    noise_suppression: t.noiseSuppression,
    automatic_gain_control: t.automaticGainControl,
    location: e
  })
}

function tT() {
  let e = e4(),
    t = e.inputDeviceId,
    n = ea.default.hasEchoCancellation(t) || e.echoCancellation,
    i = ea.default.hasNoiseSuppression(t) || e.noiseSuppression,
    r = ea.default.hasAutomaticGainControl(t) || e.automaticGainControl,
    s = e.noiseCancellation;
  eO.setLoopback(e0, {
    echoCancellation: n,
    noiseSuppression: i,
    automaticGainControl: r,
    noiseCancellation: s
  })
}

function tf() {
  return ez || !1
}
async function tS() {
  try {
    await en.default.ensureModule("discord_krisp"), en.default.requireModule("discord_krisp"), ez = !0, i.emitChange()
  } catch (t) {
    eh.warn("Failed to load Krisp module: ".concat(t.message)), et.default.captureException(t);
    let e = eT.NoiseCancellerError.INITIALIZED;
    if (t.message.includes(": ")) {
      let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
      e = isNaN(n) || 0 === n ? eT.NoiseCancellerError.INITIALIZED : n
    }
    q.default.track(e_.AnalyticEvents.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), ts({
      noiseCancellation: !1
    })
  } finally {
    eK = !1
  }
}

function th(e) {
  let {
    section: t
  } = e;
  return t === e_.UserSettingsSections.VOICE && ta(), !1
}
class tA extends(l = f.default.Store) {
  initialize() {
    eO.on(S.MediaEngineEvent.Connection, e => {
      let {
        maxSyncDelayOverride: t
      } = F.default.getCurrentConfig({
        location: "f627ab_3"
      }, {
        autoTrackExposure: !1
      });
      t > 0 && eO.setMaxSyncDelayOverride(t), e6(e), e5(e), te(e);
      let n = e4();
      e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
      let {
        useExperimentalRateControl: r
      } = j.default.getCurrentConfig({
        location: "f627ab_4"
      }, {
        autoTrackExposure: !1
      });
      r && e.setExperimentFlag(eT.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
      let a = eu.default.getGuildId(),
        {
          muteBeforeProcessing: o,
          pttBeforeProcessing: l,
          skipEncode: u
        } = (null != a ? w.default : G.default).getCurrentConfig({
          location: "setupMediaEngine",
          ...null != a && {
            guildId: a
          }
        }, {
          autoTrackExposure: !0
        });
      o && e.setExperimentFlag(eT.ExperimentFlags.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(eT.ExperimentFlags.PTT_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(eT.ExperimentFlags.SKIP_ENCODE, !0);
      let {
        resetOnErrors: d,
        fallbackOnErrors: _,
        fallbackOnConsecutiveErrors: c
      } = Y.default.getCurrentConfig({
        location: "setupMediaEngine"
      }, {
        autoTrackExposure: !0
      });
      d && e.setExperimentFlag(eT.ExperimentFlags.RESET_DECODER_ON_ERRORS, !0), _ && e.setExperimentFlag(eT.ExperimentFlags.SOFTWARE_FALLBACK_ON_ERRORS, !0), c && e.setExperimentFlag(eT.ExperimentFlags.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === eT.MediaEngineContextTypes.STREAM && ti() && e.setExperimentFlag(eT.ExperimentFlags.GOLIVE_SIMULCAST, !0);
      let {
        signalAV1Support: E
      } = U.default.getCurrentConfig({
        location: "f627ab_10"
      }, {
        autoTrackExposure: !0
      });
      E && e.setExperimentFlag(eT.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0), (0, ee.isWindows)() && e.setExperimentFlag(eT.ExperimentFlags.SIGNAL_AV1_HARDWARE_DECODE, !0);
      let {
        allowSettingFullbandAndroid: I
      } = x.default.getCurrentConfig({
        location: "f627ab_14"
      }, {
        autoTrackExposure: !0
      });
      if (I && eO.setHasFullbandPerformance((0, v.hasPerformanceForKrispFullband)()), e.setRemoteAudioHistory(0), (0, g.default)(i)) {
        let t = R.default.getSettings();
        e.setExperimentFlag(eT.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
        let {
          enableViewerClipping: n
        } = W.default.getCurrentConfig({
          location: "f627ab_15"
        }, {
          autoTrackExposure: !1
        });
        e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eT.VIEWERSIDE_CLIP_KFI_MS);
        let {
          allowQualityDecoupling: i
        } = C.default.getCurrentConfig({
          location: "MediaEngineStore_setupMediaEngine"
        }, {
          autoTrackExposure: !0
        });
        e.setQualityDecoupling(i)
      }
      for (let t of (n = e4(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== er.default.getId() && e.setLocalMute(t, n.localMutes[t]);
      for (let t of Object.keys(n.localVolumes)) t !== er.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
      for (let t of Object.keys(n.localPans)) {
        let i = n.localPans[t];
        e.setLocalPan(t, i.left, i.right)
      }
      for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
      e.on(S.BaseConnectionEvent.Speaking, (t, n) => {
        m.default.dispatch({
          type: "SPEAKING",
          context: e.context,
          userId: t,
          speakingFlags: n
        })
      }), e.context === eT.MediaEngineContextTypes.DEFAULT && (eV = !1, e.on(S.BaseConnectionEvent.SpeakingWhileMuted, () => {
        eV = !0, i.emitChange()
      })), e.on(S.BaseConnectionEvent.DesktopSourceEnd, () => {
        m.default.dispatch({
          type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
          settings: {
            context: e.context
          }
        })
      }), e.on(S.BaseConnectionEvent.SoundshareAttached, () => {
        (null == s ? void 0 : s.desktopSource) != null && q.default.track(e_.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, P.default)(null == s ? void 0 : s.desktopSource))
      }), e.on(S.BaseConnectionEvent.SoundshareFailed, e => {
        let {
          failureCode: t,
          failureReason: n,
          willRetry: i
        } = e;
        e9(null == s ? void 0 : s.desktopSource, t, n, i)
      }), e.on(S.BaseConnectionEvent.SoundshareSpeaking, () => {
        (null == s ? void 0 : s.desktopSource) != null && (q.default.track(e_.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, P.default)(null == s ? void 0 : s.desktopSource)), null != el.default.getHookError(e_.MediaEngineHookTypes.SOUND) && m.default.wait(() => m.default.dispatch({
          type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
        })))
      });
      let T = new A.Timeout;
      e.on(S.BaseConnectionEvent.SoundshareTrace, e => {
        switch (e.type) {
          case "soundshare_attach_requested":
            T.start(e3, () => {
              m.default.dispatch({
                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                errorMessage: "Sound Hook Failed"
              })
            });
            break;
          case "soundshare_recv_failed":
            let t = e.reason,
              n = e.code,
              i = e.retry;
            (null == s ? void 0 : s.desktopSource) != null && (e9(null == s ? void 0 : s.desktopSource, n, t, i), !i && (T.stop(), m.default.wait(() => m.default.dispatch({
              type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
              errorMessage: t,
              errorCode: n
            }))));
            break;
          case "soundshare_state_transition":
            4 === e.newState && (T.stop(), m.default.wait(() => m.default.dispatch({
              type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
            })))
        }
      }), e.on(S.BaseConnectionEvent.InteractionRequired, e => {
        m.default.dispatch({
          type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
          required: e
        })
      }), e.on(S.BaseConnectionEvent.VideoHookInitialize, (e, t, n, i, r, a) => {
        (null == s ? void 0 : s.desktopSource) != null && q.default.track(e_.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
          backend: e,
          format: t,
          framebuffer_format: n,
          sample_count: i,
          success: r,
          reinitialization: a,
          ...(0, P.default)(null == s ? void 0 : s.desktopSource)
        })
      }), e.on(S.BaseConnectionEvent.NoiseCancellationError, e => {
        eh.warn("noisecancellererror event: ".concat(e)), eQ = !0, q.default.track(e_.AnalyticEvents.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), m.default.dispatch({
          type: "AUDIO_SET_NOISE_SUPPRESSION",
          enabled: !0
        }), m.default.dispatch({
          type: "AUDIO_SET_NOISE_CANCELLATION",
          enabled: !1
        }), m.default.dispatch({
          type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
          code: e
        })
      }), e.on(S.BaseConnectionEvent.VoiceActivityDetectorError, e => {
        eh.warn("voiceactivitydetectorerror event: ".concat(e)), q.default.track(e_.AnalyticEvents.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), m.default.dispatch({
          type: "AUDIO_SET_MODE",
          context: eT.MediaEngineContextTypes.DEFAULT,
          mode: e_.InputModes.VOICE_ACTIVITY,
          options: {
            ...e4(eT.MediaEngineContextTypes.DEFAULT).modeOptions,
            vadUseKrisp: !1
          }
        }), m.default.dispatch({
          type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
          code: e
        })
      }), e.on(S.BaseConnectionEvent.VideoState, t => {
        m.default.dispatch({
          type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
          videoState: t,
          context: e.context
        })
      }), e.on(S.BaseConnectionEvent.Destroy, () => {
        T.stop()
      }), e.setBitRate(es.default.bitrate), e.applyVideoQualityMode(ed.default.mode)
    }), eO.on(S.MediaEngineEvent.DeviceChange, (e, t, n) => {
      m.default.dispatch({
        type: "MEDIA_ENGINE_DEVICES",
        inputDevices: e,
        outputDevices: t,
        videoDevices: n
      })
    }), eO.on(S.MediaEngineEvent.VolumeChange, (e, t) => {
      m.default.dispatch({
        type: "AUDIO_VOLUME_CHANGE",
        inputVolume: e,
        outputVolume: t
      })
    }), eO.on(S.MediaEngineEvent.DesktopSourceEnd, () => {
      m.default.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: null
      })
    }), eO.on(S.MediaEngineEvent.AudioPermission, e => {
      eq = !0, m.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "audio",
        granted: e
      })
    }), eO.on(S.MediaEngineEvent.VideoPermission, e => {
      m.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "video",
        granted: e
      })
    }), eO.on(S.MediaEngineEvent.WatchdogTimeout, async () => {
      let e;
      try {
        await J.default.submitLiveCrashReport({
          message: {
            message: "Voice Watchdog Timeout"
          }
        })
      } catch (t) {
        "number" == typeof t.status && (e = t.status)
      }
      eh.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), q.default.track(e_.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
        minidump_submission_error: e
      })
    }), eO.on(S.MediaEngineEvent.VideoInputInitialized, e => {
      q.default.track(e_.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
        device_name: e.description.name,
        time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * $.default.Millis.SECOND),
        timed_out: e.initializationTimerExpired,
        activity: e.entropy
      })
    }), eO.on(S.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
      m.default.dispatch({
        type: "CLIPS_RESTART"
      })
    }), eO.on(S.MediaEngineEvent.ClipsInitFailure, (e, t) => {
      m.default.wait(() => {
        m.default.dispatch({
          type: "CLIPS_INIT_FAILURE",
          errMsg: e,
          applicationName: t
        })
      })
    }), eO.on(S.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
      var n, i;
      (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == s ? void 0 : null === (i = s.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && p.cancelAttachToProcess(t), a = null)
    }), tr.reset(), ! function() {
      var e;
      let t = h.Storage.get("audio");
      null != t && (h.Storage.set(eA, {
          [eT.MediaEngineContextTypes.DEFAULT]: t
        }), h.Storage.remove("audio")), eC = null !== (e = h.Storage.get(eA)) && void 0 !== e ? e : {}, E().each(eC, e => {
          if (E().defaultsDeep(e, ep()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ei.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
            var t;
            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
          }(0, ee.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.hardwareEnabledVersion && (e.hardwareH264 = !0, e.hardwareEnabledVersion = 1)
        }),
        function() {
          let e = e4();
          eO.setAudioInputDevice(e.inputDeviceId), eO.setAudioOutputDevice(e.outputDeviceId), e8(), eO.setInputVolume(e.inputVolume), eO.setOutputVolume(e.outputVolume), eO.setH264Enabled(e.openH264), eO.setAv1Enabled(e.hardwareH264), eO.setH265Enabled(e.hardwareH264), eO.setAecDump(e.aecDumpEnabled)
        }()
    }(), ((0, ee.isWindows)() || (0, ee.isLinux)() || (0, ee.isMac)() && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, ">=21.0.0")) && !__OVERLAY__ && !eK && !ez ? (eK = !0, tS()) : (0, ee.isWeb)() && eO.supports(eT.Features.NOISE_CANCELLATION) ? (ez = !0, i.emitChange()) : (0, ee.isWeb)() && ts({
      noiseCancellation: !1
    }), tE(), e1 = {
      [eT.Features.VIDEO]: eO.supports(eT.Features.VIDEO),
      [eT.Features.DESKTOP_CAPTURE]: eO.supports(eT.Features.DESKTOP_CAPTURE),
      [eT.Features.HYBRID_VIDEO]: eO.supports(eT.Features.HYBRID_VIDEO)
    }, this.waitFor(er.default, ea.default, eo.default, el.default, eu.default, y.default, z.default.storage, X.default, D.default, R.default)
  }
  supports(e) {
    return eO.supports(e)
  }
  supportsInApp(e) {
    return e1[e] || eO.supports(e)
  }
  isSupported() {
    return eO.supported()
  }
  isExperimentalEncodersSupported() {
    return eO.supports(eT.Features.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return eO.supports(eT.Features.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return ez || !1
  }
  isNoiseCancellationError() {
    return eQ
  }
  isAutomaticGainControlSupported() {
    return eO.supports(eT.Features.AUTOMATIC_GAIN_CONTROL)
  }
  isAdvancedVoiceActivitySupported() {
    return ez || !1
  }
  isAecDumpSupported() {
    return eO.supports(eT.Features.AEC_DUMP)
  }
  isSimulcastSupported() {
    return eO.supports(eT.Features.VIDEO) && eO.supports(eT.Features.SIMULCAST)
  }
  getAecDump() {
    return e4().aecDumpEnabled
  }
  getMediaEngine() {
    return eO
  }
  getVideoComponent() {
    return eO.supports(eT.Features.DIRECT_VIDEO) && eO.setUseDirectVideo(!0), eO.Video
  }
  getCameraComponent() {
    return eO.supports(eT.Features.DIRECT_VIDEO) && eO.setUseDirectVideo(!0), eO.Camera
  }
  isEnabled() {
    return eg
  }
  isMute() {
    return this.isSelfMute() || eP
  }
  isDeaf() {
    return this.isSelfDeaf() || eG
  }
  hasContext(e) {
    return null != eC[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.MediaEngineContextTypes.DEFAULT;
    return e === eT.MediaEngineContextTypes.DEFAULT && eU
  }
  isSelfMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.MediaEngineContextTypes.DEFAULT;
    return !this.isEnabled() || e4(e).mute || !z.default.didHavePermission(eE.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === eT.MediaEngineContextTypes.DEFAULT && eb
  }
  shouldSkipMuteUnmuteSound() {
    let {
      airpodsMuteSupported: e
    } = b.default.getCurrentConfig({
      location: "shouldSkipMuteUnmuteSound"
    }, {
      autoTrackExposure: !0
    });
    return !!e && eB
  }
  notifyMuteUnmuteSoundWasSkipped() {
    eB = !1
  }
  isHardwareMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.MediaEngineContextTypes.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(e) && ea.default.isHardwareMute(this.getInputDeviceId())
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.MediaEngineContextTypes.DEFAULT;
    return !this.isSupported() || e4(e).deaf
  }
  isVideoEnabled() {
    return ew && eF
  }
  isVideoAvailable() {
    return Object.values(ey).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.MediaEngineContextTypes.STREAM;
    return ev === e && null != s
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.MediaEngineContextTypes.STREAM;
    return ev === t && null != s && (null === (e = s.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.MediaEngineContextTypes.DEFAULT;
    return e !== er.default.getId() && (e4(t).localMutes[e] || !1)
  }
  supportsDisableLocalVideo() {
    return eO.supports(eT.Features.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e4(n).disabledLocalVideos[e]) && void 0 !== t && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e4(n).videoToggleStateMap[e]) && void 0 !== t ? t : e_.VideoToggleState.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.MediaEngineContextTypes.DEFAULT;
    return t === eT.MediaEngineContextTypes.DEFAULT && eJ.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.MediaEngineContextTypes.DEFAULT;
    return e === eT.MediaEngineContextTypes.DEFAULT && eJ.size > 0
  }
  isMediaFilterSettingLoading() {
    return eX
  }
  isNativeAudioPermissionReady() {
    return eq
  }
  getGoLiveSource() {
    return s
  }
  getGoLiveContext() {
    return ev
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.MediaEngineContextTypes.DEFAULT,
      n = e4(t).localPans[e];
    return null != n ? n : em
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.MediaEngineContextTypes.DEFAULT,
      n = t === eT.MediaEngineContextTypes.STREAM ? eT.DEFAULT_STREAM_VOLUME : eT.DEFAULT_VOLUME,
      i = e4(t).localVolumes[e];
    return null != i ? i : n
  }
  getInputVolume() {
    return e4().inputVolume
  }
  getOutputVolume() {
    return e4().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.MediaEngineContextTypes.DEFAULT;
    return e4(e).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.MediaEngineContextTypes.DEFAULT;
    return e4(e).modeOptions
  }
  getShortcuts() {
    let e = {};
    return E().each(eC, (t, n) => {
      let {
        mode: i,
        modeOptions: {
          shortcut: r
        }
      } = t;
      i === e_.InputModes.PUSH_TO_TALK && eR.has(n) && (e[n] = r)
    }), e
  }
  getInputDeviceId() {
    return tu(eD, e4().inputDeviceId)
  }
  getOutputDeviceId() {
    return tu(eM, e4().outputDeviceId)
  }
  getVideoDeviceId() {
    return tu(ey, e4().videoDeviceId)
  }
  getInputDevices() {
    return eD
  }
  getOutputDevices() {
    return eM
  }
  getVideoDevices() {
    return ey
  }
  getEchoCancellation() {
    let e = e4();
    return ea.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
  }
  getH265Enabled() {
    return e4().h265Enabled
  }
  getLoopback() {
    return eO.getLoopback()
  }
  getNoiseSuppression() {
    let e = e4();
    return ea.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = e4();
    return ea.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
  }
  getNoiseCancellation() {
    return e4().noiseCancellation
  }
  getExperimentalEncoders() {
    return e4().experimentalEncoders
  }
  getHardwareH264() {
    return e4().hardwareH264
  }
  getEnableSilenceWarning() {
    return e4().silenceWarning
  }
  getDebugLogging() {
    return eO.getDebugLogging()
  }
  getQoS() {
    return e4().qos
  }
  getAttenuation() {
    return e4().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return e4().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return e4().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return eO.getAudioSubsystem()
  }
  getSettings() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.MediaEngineContextTypes.DEFAULT;
    return e4(e)
  }
  getState() {
    return {
      settingsByContext: eC,
      inputDevices: eD,
      outputDevices: eM,
      appSupported: e1,
      krispModuleLoaded: ez,
      goLiveSource: s,
      goLiveContext: ev
    }
  }
  getInputDetected() {
    return eH
  }
  getNoInputDetectedNotice() {
    return ej
  }
  getPacketDelay() {
    return ee.isPlatformEmbedded || this.getMode() !== e_.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    eO.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return eL
  }
  getVideoHook() {
    return e4().videoHook
  }
  supportsVideoHook() {
    return eO.supports(eT.Features.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = e4().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == e || e)
  }
  supportsExperimentalSoundshare() {
    return eO.supports(eT.Features.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, ec.WINDOWS_SOUNDSHARE_VERSION)
  }
  getOpenH264() {
    return e4().openH264
  }
  getEverSpeakingWhileMuted() {
    return eV
  }
  supportsScreenSoundshare() {
    return (0, ee.isMac)() && eO.supports(eT.Features.SOUNDSHARE) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, ec.DARWIN_SCKIT_AUDIO_VERSION) && tn() || (0, ee.isWindows)() && eO.supports(eT.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
  }
  getVideoStreamParameters() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.MediaEngineContextTypes.DEFAULT,
      t = this.supports(eT.Features.VIDEO) ? [{
        rid: "100",
        type: e === eT.MediaEngineContextTypes.DEFAULT ? eT.MediaTypes.VIDEO : eT.MediaTypes.SCREEN,
        quality: 100
      }] : [];
    return this.isSimulcastSupported() && (e === eT.MediaEngineContextTypes.DEFAULT || ti()) && t.push({
      rid: "50",
      type: e === eT.MediaEngineContextTypes.DEFAULT ? eT.MediaTypes.VIDEO : eT.MediaTypes.SCREEN,
      quality: 50
    }), t
  }
  getSupportedSecureFramesProtocolVersion(e) {
    var t;
    let n = eO.getSupportedSecureFramesProtocolVersion(),
      i = H.SecureFramesUserExperiment.getCurrentConfig({
        location: "MediaEngineStore"
      }),
      r = null != e ? H.SecureFramesGuildExperiment.getCurrentConfig({
        guildId: e,
        location: "MediaEngineStore"
      }) : null,
      s = i.canSupportSecureFrames || (null == r ? void 0 : r.canSupportSecureFrames),
      a = i.canSupportMls || (null == r ? void 0 : r.canSupportMls),
      o = Math.max(i.protocolVersionFloor, null !== (t = null == r ? void 0 : r.protocolVersionFloor) && void 0 !== t ? t : 0);
    return s && n % 100 >= o ? a ? n : n % 100 : 0
  }
  hasClipsSource() {
    return null != a
  }
}
eS(tA, "displayName", "MediaEngineStore"), i = new tA(m.default, {
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n,
      currentVoiceChannelId: i,
      video: r
    } = e;
    if (i !== n && e8(r, null), null != t || null == n) {
      eW = !1;
      return
    }
    if (eW) return;
    eW = !0;
    let s = e4();
    (s.mute || s.deaf) && (ts({
      deaf: !1,
      mute: !1
    }), eO.eachConnection(e5))
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => r === t.sessionId ? (eP = t.mute || t.suppress, eG = t.deaf, eO.eachConnection(e5), e8(!(null != t.guildId && null != t.channelId && null != eZ && eZ !== t.channelId) && ew), eZ = t.channelId, !0) : (!__OVERLAY__ && t.userId === er.default.getId() && null == eu.default.getChannelId() && e8(!1, null), e), !1)
  },
  CONNECTION_OPEN: function(e) {
    r = e.sessionId, eP = !1, eG = !1, (0, Z.shouldReadWriteAudioSettings)() && td()
  },
  CONNECTION_CLOSED: function() {
    r = null
  },
  RTC_CONNECTION_STATE: function(e) {
    switch (e.state) {
      case e_.RTCConnectionStates.CONNECTING:
        ta();
        break;
      case e_.RTCConnectionStates.RTC_CONNECTING:
        eY = !1, ej = !1;
        break;
      case e_.RTCConnectionStates.RTC_CONNECTED:
        e8();
        break;
      case e_.RTCConnectionStates.DISCONNECTED:
        (function() {
          if (0 === eJ.size) return;
          let e = eT.MediaEngineContextTypes.DEFAULT,
            {
              disabledLocalVideos: t
            } = e4(e);
          eJ.forEach(n => {
            _()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eO.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
          }), eJ.clear(), ts({
            disabledLocalVideos: t
          }, e, !1)
        })(), tE()
    }
    tr.update()
  },
  AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
    let {
      mute: t
    } = e;
    eU = t, eO.eachConnection(e5)
  },
  AUDIO_TOGGLE_SELF_MUTE: function(e) {
    let {
      context: t,
      skipMuteUnmuteSoundEffect: n
    } = e, {
      mute: i,
      deaf: r
    } = e4(t);
    if (t === eT.MediaEngineContextTypes.DEFAULT && (z.default.requestPermission(eE.NativePermissionTypes.AUDIO), eb)) return !1;
    !(i = !r && !i) && (r = !1), n && (eB = !0), ts({
      mute: i,
      deaf: r
    }, t), eO.eachConnection(e5)
  },
  AUDIO_SET_SELF_MUTE: function(e) {
    let {
      context: t,
      mute: n
    } = e;
    ts({
      mute: n
    }, t), eO.eachConnection(e5)
  },
  AUDIO_TOGGLE_SELF_DEAF: function(e) {
    let {
      context: t
    } = e;
    ts({
      deaf: !e4(t).deaf
    }, t), eO.eachConnection(e5)
  },
  AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
    let {
      context: t,
      userId: n
    } = e;
    if (n === er.default.getId()) return;
    let {
      localMutes: i
    } = e4(t);
    i[n] ? delete i[n] : i[n] = !0, ts({
      localMutes: i
    }, t), eO.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
    var t, n, i, r, s, a, o;
    let {
      context: l,
      userId: u,
      videoToggleState: d,
      persist: c,
      isAutomatic: E
    } = e;
    _()(!(c && E), "These are not allowed to both be true.");
    let I = d === e_.VideoToggleState.DISABLED,
      {
        disabledLocalVideos: T
      } = e4(l),
      f = null !== (t = T[u]) && void 0 !== t && t,
      S = eJ.has(u),
      h = d === e_.VideoToggleState.AUTO_ENABLED || d === e_.VideoToggleState.MANUAL_ENABLED;
    eh.info("disableVideo=".concat(I, " currentlyDisabled=").concat(f, " currentlyAutoDisabled=").concat(S, ", isVideoShown=").concat(h)), _()(!(S && !f), "If you are auto-disabled, then you are also disabled.");
    let A = I !== f,
      m = l === eT.MediaEngineContextTypes.DEFAULT,
      N = E && A && m,
      p = c && A && m;
    eh.info("changed=".concat(A, " isDefaultContext=").concat(m, " isUpdateCausedByVideoHealthManager=").concat(N, " isManualToggleByUser=").concat(p));
    let {
      videoToggleStateMap: O
    } = e4(l);
    if (O[u] === e_.VideoToggleState.AUTO_PROBING && d === e_.VideoToggleState.AUTO_ENABLED && (0, K.default)(u, I ? eT.VideoToggleReason.AUTO_DISABLE : eT.VideoToggleReason.AUTO_ENABLE, h), O[u] = d, ts({
        videoToggleStateMap: O
      }, l, c), d === e_.VideoToggleState.AUTO_PROBING ? null === (n = eu.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = eu.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !e$ && (eh.info("isAutoDisableAllowed=".concat(e$, " - disabling VideoHealthManager")), null === (s = eu.default.getRTCConnection()) || void 0 === s || null === (r = s.getVideoHealthManager()) || void 0 === r || r.disable()), N) {
      if (!I && !S || I && !e$) return;
      (0, K.default)(u, I ? eT.VideoToggleReason.AUTO_DISABLE : eT.VideoToggleReason.AUTO_ENABLE, h), I ? eJ.add(u) : eJ.delete(u)
    } else p && (S && !I ? (eh.info("disallowing auto-disable for this session because of manual override by user"), e$ = !1, null === (o = eu.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, K.default)(u, eT.VideoToggleReason.MANUAL_REENABLE, h)) : (0, K.default)(u, I ? eT.VideoToggleReason.MANUAL_DISABLE : eT.VideoToggleReason.MANUAL_ENABLE, h));
    m && !I && eJ.delete(u), I ? T[u] = !0 : delete T[u], ts({
      disabledLocalVideos: T
    }, l, c), eO.eachConnection(e => {
      var t;
      return e.setLocalVideoDisabled(u, null !== (t = T[u]) && void 0 !== t && t)
    }, l)
  },
  AUDIO_SET_LOCAL_VOLUME: function(e) {
    let {
      context: t,
      userId: n,
      volume: i
    } = e;
    if (n === er.default.getId()) return;
    let r = t === eT.MediaEngineContextTypes.STREAM ? eT.DEFAULT_STREAM_VOLUME : eT.DEFAULT_VOLUME,
      {
        localVolumes: s
      } = e4(t);
    i === r ? delete s[n] : s[n] = i, ts({
      localVolumes: s
    }, t), eO.eachConnection(e => e.setLocalVolume(n, i), t)
  },
  AUDIO_SET_LOCAL_PAN: function(e) {
    let {
      context: t,
      userId: n,
      left: i,
      right: r
    } = e, {
      localPans: s
    } = e4(t);
    s[n] = {
      left: i,
      right: r
    }, ts({
      localPans: s
    }, t), eO.eachConnection(e => e.setLocalPan(n, i, r), t)
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
    }, t), eO.eachConnection(e6), tr.update()
  },
  AUDIO_SET_INPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    ts({
      inputVolume: e7(t)
    }), eO.setInputVolume(t)
  },
  AUDIO_SET_OUTPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    ts({
      outputVolume: t
    }), eO.setOutputVolume(t)
  },
  AUDIO_SET_INPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ts({
      inputDeviceId: t = tu(eD, t)
    }), eO.setAudioInputDevice(t)
  },
  AUDIO_SET_OUTPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ts({
      outputDeviceId: t = tu(eM, t)
    }), eO.setAudioOutputDevice(t)
  },
  AUDIO_SET_ECHO_CANCELLATION: function(e) {
    let t = ts({
      echoCancellation: e.enabled
    });
    eO.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tT(), tI(e.location)
  },
  AUDIO_SET_LOOPBACK: function(e) {
    let {
      enabled: t
    } = e;
    return e0 = t, tT()
  },
  AUDIO_SET_NOISE_SUPPRESSION: function(e) {
    let t = ts({
      noiseSuppression: e.enabled
    });
    eO.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tT(), tI(e.location)
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
    let t = ts({
      automaticGainControl: e.enabled
    });
    eO.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tT(), tI(e.location)
  },
  AUDIO_SET_NOISE_CANCELLATION: function(e) {
    let t = ts({
      noiseCancellation: e.enabled
    });
    eO.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tT(), tI(e.location)
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
    ts({
      silenceWarning: e.enabled
    }), tr.update()
  },
  AUDIO_SET_DEBUG_LOGGING: function(e) {
    eO.setDebugLogging(e.enabled)
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
    eO.eachConnection(e => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers))
  },
  AUDIO_SET_QOS: function(e) {
    let {
      enabled: t
    } = e;
    ts({
      qos: t
    }), eO.eachConnection(e => e.setQoS(t))
  },
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: n,
      videoDevices: i
    } = e;
    ! function(e) {
      let t = eD;
      if (eD = tl(e, ef.default.Messages.NO_INPUT_DEVICES), !E().isEqual(eD, t)) {
        let e = e4(),
          t = tu(eD, e.inputDeviceId);
        eO.setAudioInputDevice(t)
      }
    }(t), ! function(e) {
      let t = eM;
      if (eM = tl(e, ef.default.Messages.NO_OUTPUT_DEVICES), !E().isEqual(eM, t)) {
        let e = e4(),
          t = tu(eM, e.outputDeviceId);
        eO.setAudioOutputDevice(t)
      }
    }(n), ! function(e) {
      eF = e.length > 0;
      let t = ey;
      if (ey = tl(e, ef.default.Messages.NO_VIDEO_DEVICES), ew && !E().isEqual(ey, t)) {
        var n;
        let e = void 0 !== ey[ek],
          i = ek === eT.DEFAULT_DEVICE_ID && (null === (n = t[eT.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
        e8(e || i)
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
    h.Storage.remove(eA), location.reload()
  },
  AUDIO_INPUT_DETECTED: function(e) {
    let {
      inputDetected: t
    } = e;
    eH = t, !eY && eH && (eY = !0, tr.update())
  },
  AUDIO_SET_SUBSYSTEM: function(e) {
    eO.setAudioSubsystem(e.subsystem)
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
    eg = e.enabled, e.unmute && ts({
      mute: !1,
      deaf: !1
    }), eO.eachConnection(e5)
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
    let {
      enabled: t
    } = e;
    z.default.requestPermission(eE.NativePermissionTypes.CAMERA), e8(t)
  },
  MEDIA_ENGINE_PERMISSION: function(e) {
    let {
      kind: t,
      granted: n
    } = e;
    if (!n) switch (t) {
      case "audio":
        eg = !1, eO.eachConnection(e5);
        break;
      case "video":
        e8(!1)
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
        u = null !== (t = o.context) && void 0 !== t ? t : eT.MediaEngineContextTypes.DEFAULT,
        d = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
          resolution: 720,
          frameRate: 30
        },
        _ = J.default.getPidFromDesktopSource(r);
      ee.isPlatformEmbedded && !0 === l && ({
        soundshareId: e,
        soundshareSession: i
      } = t_(_), null != e && tc(e, i)), (a = u) !== ev && (null != s && eO.setGoLiveSource(null, ev), ev = a), e8(u === eT.MediaEngineContextTypes.STREAM && ew, {
        desktopSource: {
          id: r,
          sourcePid: _,
          soundshareId: e,
          soundshareSession: i
        },
        quality: {
          resolution: d.resolution,
          frameRate: d.frameRate
        }
      })
    } else if ((null == o ? void 0 : o.cameraSettings) != null) {
      let e = null !== (i = o.context) && void 0 !== i ? i : eT.MediaEngineContextTypes.DEFAULT,
        {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        } = o.cameraSettings,
        s = e === eT.MediaEngineContextTypes.STREAM && ew,
        a = null !== (r = o.qualityOptions) && void 0 !== r ? r : {
          resolution: 720,
          frameRate: 30
        };
      e8(s, {
        cameraSource: {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        },
        quality: {
          resolution: a.resolution,
          frameRate: a.frameRate
        }
      })
    } else e8(ew, null)
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ts({
      videoDeviceId: t = tu(ey, t)
    }), e8()
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
    let t = ts({
      experimentalEncoders: e.enabled
    });
    eO.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
  },
  MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
    return eL !== e.required && (eL = e.required, !e.required && eO.interact(), !0)
  },
  USER_SETTINGS_MODAL_INIT: th,
  USER_SETTINGS_MODAL_SET_SECTION: th,
  CERTIFIED_DEVICES_SET: function() {
    return eO.eachConnection(te), !1
  },
  RPC_APP_CONNECTED: function(e) {
    let {
      application: t
    } = e;
    eR.add(t.id)
  },
  RPC_APP_DISCONNECTED: function(e) {
    let {
      application: t
    } = e;
    eR.delete(t.id)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      mediaEngineState: t
    } = e;
    eC = t.settingsByContext, eD = t.inputDevices, eM = t.outputDevices, e1 = t.appSupported, ez = t.krispModuleLoaded, ev = t.goLiveContext
  },
  MEDIA_ENGINE_SET_OPEN_H264: function(e) {
    let {
      enabled: t
    } = e, n = ts({
      openH264: t
    });
    eO.setH264Enabled(n.openH264)
  },
  MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
    let {
      enabled: t
    } = e, n = ts({
      hardwareH264: t
    });
    eO.eachConnection(e => e.setHardwareH264(n.hardwareH264)), eO.setAv1Enabled(n.hardwareH264), eO.setH265Enabled(n.hardwareH264)
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e, n = M.default.isEnabled();
    if (t === e_.AppStates.BACKGROUND && ew && !n) ex = !0, e8(!1);
    else {
      if (t !== e_.AppStates.ACTIVE || !ex) return !1;
      ex = !1, e8(!0)
    }
    return !0
  },
  SET_CHANNEL_BITRATE: function(e) {
    eO.eachConnection(t => t.setBitRate(e.bitrate))
  },
  SET_VAD_PERMISSION: function(e) {
    let {
      hasPermission: t
    } = e, n = !t;
    if (n === eb) return !1;
    eb = n, eO.eachConnection(e5)
  },
  SET_NATIVE_PERMISSION: function(e) {
    let {
      state: t,
      permissionType: n
    } = e, i = t === eE.NativePermissionStates.ACCEPTED;
    switch (n) {
      case eE.NativePermissionTypes.AUDIO:
        eq = !0, eO.eachConnection(e5);
        break;
      case eE.NativePermissionTypes.CAMERA:
        !i && ew && e8(!1);
        break;
      default:
        return !1
    }
  },
  SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
    eO.eachConnection(t => t.applyVideoQualityMode(e.mode))
  },
  MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
    let {
      enabled: t
    } = e, n = ts({
      aecDumpEnabled: t
    });
    eO.setAecDump(n.aecDumpEnabled)
  },
  CHANNEL_DELETE: function() {
    if (!ew && null == s || null != eu.default.getRTCConnectionId()) return !1;
    e8(!1, null)
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
    return !!eQ && (eQ = !1, !0)
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    eO.applyMediaFilterSettings(t).finally(() => {
      eX = !1, i.emitChange()
    })
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
    eX = !0
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
    eX = !1
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      local: n,
      wasSaved: i
    } = e;
    if (!(0, Z.shouldReadWriteAudioSettings)() || t !== eI.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
    td(!0)
  },
  CLIPS_INIT: function(e) {
    let {
      sourceId: t,
      applicationName: n,
      quality: r
    } = e, {
      enableDecoupledGameClipping: s
    } = B.default.getCurrentConfig({
      location: "handleClipsInit"
    }, {
      autoTrackExposure: !0
    }), o = R.default.getSettings().decoupledClipsEnabled;
    if (!s || !o || null == N.default) return;
    let l = null,
      u = null,
      d = J.default.getPidFromDesktopSource(t);
    ({
      soundshareId: l,
      soundshareSession: u
    } = t_(d));
    let _ = {
      desktopSource: {
        id: t,
        sourcePid: d,
        soundshareId: l,
        soundshareSession: u
      },
      quality: r
    };
    null != a && a.desktopSource.id !== _.desktopSource.id && (eO.setClipsSource(null), (0, ee.isWindows)() && null != a.desktopSource.soundshareId && p.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && tc(l, u), a = _;
    let {
      hdrCaptureMode: c
    } = V.default.getCurrentConfig({
      location: "f627ab_12"
    }, {
      autoTrackExposure: !1
    }), E = e4().videoHook;
    eO.setClipsSource({
      desktopDescription: {
        id: a.desktopSource.id,
        soundshareId: a.desktopSource.soundshareId,
        useVideoHook: E,
        useGraphicsCapture: tt(),
        useLoopback: i.getExperimentalSoundshare(),
        useQuartzCapturer: !0,
        allowScreenCaptureKit: tn(),
        videoHookStaleFrameTimeoutMs: 500,
        graphicsCaptureStaleFrameTimeoutMs: eN,
        hdrCaptureMode: c
      },
      quality: r,
      applicationName: n
    })
  },
  CLIPS_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    !1 === t.decoupledClipsEnabled && (a = null, eO.setClipsSource(null))
  }
}), t.default = i