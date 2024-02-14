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
  M = n("705500"),
  U = n("238847"),
  G = n("981699"),
  w = n("352705"),
  k = n("140622"),
  x = n("16001"),
  F = n("631508"),
  V = n("368765"),
  B = n("403770"),
  H = n("940146"),
  j = n("353500"),
  Y = n("103979"),
  W = n("665862"),
  K = n("122530"),
  z = n("928609"),
  q = n("891760"),
  X = n("536692"),
  Q = n("374363"),
  Z = n("599110"),
  J = n("922932"),
  $ = n("718517"),
  ee = n("773336"),
  et = n("286235"),
  en = n("50885"),
  ei = n("13798"),
  er = n("271938"),
  es = n("366679"),
  ea = n("533222"),
  eo = n("42203"),
  el = n("760190"),
  eu = n("855867"),
  ec = n("945956"),
  ed = n("568307"),
  ef = n("123647"),
  eE = n("49111"),
  ep = n("706530"),
  eh = n("180524"),
  e_ = n("397336"),
  eS = n("353927"),
  em = n("782340");
let eT = new O.default("MediaEngineStore");
(u = o || (o = {}))[u.DETACHED = 0] = "DETACHED", u[u.WAITING = 1] = "WAITING", u[u.ATTACHED = 2] = "ATTACHED", u[u.STARTED = 3] = "STARTED", u[u.PLAYING = 4] = "PLAYING", u[u.SILENCE = 5] = "SILENCE", (c = l || (l = {}))[c.FAILED = -1] = "FAILED", c[c.OK = 0] = "OK", c[c.ACE_INSTALL_FAILED = 4] = "ACE_INSTALL_FAILED", c[c.ACE_NOT_AUTHORIZED = 5] = "ACE_NOT_AUTHORIZED";
let eg = "MediaEngineStore",
  eI = {
    left: 1,
    right: 1
  };

function eC() {
  let e = {
    mode: eE.InputModes.VOICE_ACTIVITY,
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
    inputVolume: eS.DEFAULT_VOLUME,
    outputVolume: eS.DEFAULT_VOLUME,
    inputDeviceId: eS.DEFAULT_DEVICE_ID,
    outputDeviceId: eS.DEFAULT_DEVICE_ID,
    videoDeviceId: eS.DEFAULT_DEVICE_ID,
    qos: !1,
    qosMigrated: !1,
    videoHook: ev.supports(eS.Features.VIDEO_HOOK),
    experimentalSoundshare2: null,
    openH264: !0,
    av1Enabled: !0,
    h265Enabled: !0,
    vadThrehsoldMigrated: !1,
    aecDumpEnabled: !1
  };
  return e
}
let ev = (0, m.initializeMediaEngine)((0, m.determineMediaEngine)()),
  eA = {},
  eR = new Set([eS.MediaEngineContextTypes.DEFAULT]),
  eN = ev.supports(eS.Features.AUTO_ENABLE),
  eO = !1,
  eD = eS.MediaEngineContextTypes.STREAM,
  ey = {
    [eS.DEFAULT_DEVICE_ID]: ta(em.default.Messages.NO_INPUT_DEVICES)
  },
  eP = {
    [eS.DEFAULT_DEVICE_ID]: ta(em.default.Messages.NO_OUTPUT_DEVICES)
  },
  eL = {
    [eS.DEFAULT_DEVICE_ID]: ta(em.default.Messages.NO_VIDEO_DEVICES)
  },
  eb = !1,
  eM = !1,
  eU = !1,
  eG = !1,
  ew = !1,
  ek = eS.DISABLED_DEVICE_ID,
  ex = !1,
  eF = !1,
  eV = !1,
  eB = null,
  eH = !1,
  ej = !1,
  eY = !1,
  eW = !1,
  eK = !1,
  ez = null,
  eq = !1,
  eX = eE.SoundshareEnableState.NOT_ENABLED,
  eQ = !1,
  eZ = !1;
z.default.hasPermission(eh.NativePermissionTypes.AUDIO, {
  showAuthorizationError: !1
}), z.default.hasPermission(eh.NativePermissionTypes.CAMERA, {
  showAuthorizationError: !1
});
let eJ = new Set,
  e$ = !1,
  e0 = !1,
  e1 = {},
  e2 = {},
  e4 = 5 * $.default.Millis.SECOND;

function e3() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT,
    t = eA[e];
  return null == t && (t = eC(), eA[e] = t), t
}

function e6(e) {
  let t = e3(e.context);
  e.setInputMode(t.mode, {
    vadThreshold: t.modeOptions.threshold,
    vadAutoThreshold: t.modeOptions.autoThreshold,
    vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
      return eK || !1
    }(),
    vadLeading: t.modeOptions.vadLeading,
    vadTrailing: t.modeOptions.vadTrailing,
    pttReleaseDelay: t.modeOptions.delay
  })
}

function e5(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.DEFAULT_VOLUME;
  return p.clamp(e, 0, t)
}

function e7(e) {
  let t = e3(e.context),
    n = !eN || t.mute || t.deaf;
  e.context === eS.MediaEngineContextTypes.DEFAULT && (n = n || eb || eM || eU || !z.default.didHavePermission(eh.NativePermissionTypes.AUDIO)), e.setSelfMute(n), e.setSelfDeaf(t.deaf)
}

function e8() {
  var e, t, n;
  let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew,
    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
    o = s;
  if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, ee.isWindows)() && v.cancelAttachToProcess(o.desktopSource.soundshareId), ev.setGoLiveSource(null, eD)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && ev.setGoLiveSource(null, eD), (ew || r) && (ek = (ew = r) ? tl(eL, e3().videoDeviceId) : eS.DISABLED_DEVICE_ID, ev.setVideoInputDevice(ek)), s = a, null != a) {
    let e = {
      resolution: a.quality.resolution,
      frameRate: a.quality.frameRate
    };
    if (null != a.desktopSource) {
      let {
        useQuartzCapturer: t
      } = F.default.getCurrentConfig({
        location: "f627ab_1"
      }, {
        autoTrackExposure: !1
      }), {
        hdrCaptureMode: n
      } = G.default.getCurrentConfig({
        location: "f627ab_2"
      }, {
        autoTrackExposure: !1
      }), r = e3().videoHook, s = ev.supports(eS.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
        videoHookStaleFrameTimeoutMs: o
      } = H.default.getConfig(s && r, "e225cfdf5_vh1", !0), {
        graphicsCaptureStaleFrameTimeoutMs: l
      } = W.default.getConfig(s && tt(), "e225cfdf5_wgc2", !0);
      ev.setGoLiveSource({
        desktopDescription: {
          id: a.desktopSource.id,
          soundshareId: a.desktopSource.soundshareId,
          useVideoHook: r,
          useGraphicsCapture: tt(),
          useLoopback: i.getExperimentalSoundshare(),
          useQuartzCapturer: t,
          allowScreenCaptureKit: tn(!0),
          videoHookStaleFrameTimeoutMs: o,
          graphicsCaptureStaleFrameTimeoutMs: l,
          hdrCaptureMode: n
        },
        quality: e
      }, eD)
    }
    null != a.cameraSource && ev.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: a.cameraSource.videoDeviceGuid,
        audioDeviceGuid: a.cameraSource.audioDeviceGuid
      },
      quality: e
    }, eD)
  }
}

function e9(e, t, n, i) {
  var r;
  let s = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : "";
  null == e2[s] && (e2[s] = new Set);
  let a = null != t && !e2[s].has(t);
  a && e2[s].add(t), (null == t || a) && Z.default.track(eE.AnalyticEvents.SOUNDSHARE_FAILED, {
    soundshare_failure_code: t,
    soundshare_failure_reason: n,
    soundshare_failure_will_retry: i,
    ...(0, P.default)(e)
  })
}

function te(e) {
  let t = e3(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(ea.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ea.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ea.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, ee.isWeb)()) {
    let n = t.noiseCancellation ? -150 : -100;
    e.setSilenceThreshold(n)
  }
}

function tt() {
  return (0, ee.isWindows)() && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ep.WINDOWS_GRAPHICS_CAPTURE_VERSION)
}

function tn(e) {
  return !!((0, ee.isMac)() && ev.supports(eS.Features.SCREEN_CAPTURE_KIT) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ep.DARWIN_SCKIT_VERSION)) && V.default.getCurrentConfig({
    location: "screenCaptureKitEnabled"
  }, {
    autoTrackExposure: e
  }).allowScreenCaptureKit
}
let ti = new class {
  start() {
    !this.started && (this.started = !0, ev.on(m.MediaEngineEvent.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), ev.removeListener(m.MediaEngineEvent.Silence, this.handleSilence), I.default.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = e3();
    !eH && ec.default.getState() === eE.RTCConnectionStates.RTC_CONNECTED && e.mode === eE.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
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
        }), e && (ej = !0))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    }
  }
};

function tr(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT,
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = e3(t);
  return Object.assign(i, e), !__OVERLAY__ && n && T.default.set(eg, eA), i
}

function ts() {
  !eN && ev.enable().then(() => I.default.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: !0,
    unmute: !1
  }))
}

function ta(e) {
  return {
    id: eS.DEFAULT_DEVICE_ID,
    index: 0,
    name: e,
    disabled: !0
  }
}

function to(e, t) {
  if (0 === e.length) {
    let e = ta(t);
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

function tl(e, t) {
  var n;
  let i = null !== (n = e[t]) && void 0 !== n ? n : p(e).values().first();
  return null != i ? i.id : t
}

function tu() {
  var e, t;
  let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    i = null !== (e = Q.default.settings.audioContextSettings) && void 0 !== e ? e : {
      user: {},
      stream: {}
    };
  for (let e of Object.keys(i)) {
    let r = e === e_.ProtoAudioSettingsContextTypes.USER ? eS.MediaEngineContextTypes.DEFAULT : eS.MediaEngineContextTypes.STREAM,
      s = r === eS.MediaEngineContextTypes.STREAM ? eS.DEFAULT_STREAM_VOLUME : eS.DEFAULT_VOLUME,
      a = null !== (t = i[e]) && void 0 !== t ? t : {},
      {
        localMutes: o,
        localVolumes: l
      } = e3(r);
    for (let [e, t] of Object.entries(a)) null == (0, X.getPendingAudioSettings)(r, e) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== s ? l[e] = t.volume : delete l[e], ev.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, r));
    if (n) {
      let e = new Set([...Object.keys(o), ...Object.keys(l)]);
      for (let t of e) null == a[t] && (delete o[t], delete l[t], ev.eachConnection(e => {
        e.setLocalVolume(t, s), e.setLocalMute(t, !1)
      }, r))
    }
    tr({
      localMutes: o,
      localVolumes: l
    }, r)
  }
}

function tc(e) {
  if (null == i) return eT.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
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

function td(e, t) {
  (0, ee.isWindows)() && v.attachToProcess(e, {
    soundshare_session: t
  }).then(t => {
    null != t && !ed.default.shouldContinueWithoutElevatedProcessForPID(e) && I.default.wait(() => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
        errorMessage: t
      })
    })
  })
}

function tf() {
  let e = eS.MediaEngineContextTypes.DEFAULT,
    {
      videoToggleStateMap: t
    } = e3(e);
  for (let [e, n] of Object.entries(t)) n === eE.VideoToggleState.AUTO_PROBING && delete t[e];
  tr({
    videoToggleStateMap: t
  }, e, !1)
}

function tE(e) {
  let t = e3();
  Z.default.track(eE.AnalyticEvents.VOICE_PROCESSING, {
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
    n = ea.default.hasEchoCancellation(t) || e.echoCancellation,
    i = ea.default.hasNoiseSuppression(t) || e.noiseSuppression,
    r = ea.default.hasAutomaticGainControl(t) || e.automaticGainControl,
    s = e.noiseCancellation;
  ev.setLoopback(e0, {
    echoCancellation: n,
    noiseSuppression: i,
    automaticGainControl: r,
    noiseCancellation: s
  })
}

function th() {
  return eK || !1
}
async function t_() {
  try {
    await en.default.ensureModule("discord_krisp"), en.default.requireModule("discord_krisp"), eK = !0, i.emitChange()
  } catch (t) {
    eT.warn("Failed to load Krisp module: ".concat(t.message)), et.default.captureException(t);
    let e = eS.NoiseCancellerError.INITIALIZED;
    if (t.message.includes(": ")) {
      let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
      e = isNaN(n) || 0 === n ? eS.NoiseCancellerError.INITIALIZED : n
    }
    Z.default.track(eE.AnalyticEvents.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), tr({
      noiseCancellation: !1
    })
  } finally {
    eW = !1
  }
}

function tS(e) {
  let {
    section: t
  } = e;
  return t === eE.UserSettingsSections.VOICE && ts(), !1
}

function tm(e) {
  eX = 0 === e ? eE.SoundshareEnableState.ENABLED : 5 === e ? eE.SoundshareEnableState.ENABLING : -1 === e || 4 === e ? eE.SoundshareEnableState.FAILED_TO_ENABLE : eE.SoundshareEnableState.NOT_ENABLED
}
async function tT() {
  if (eX === eE.SoundshareEnableState.ENABLING) return;
  eX = eE.SoundshareEnableState.ENABLING;
  let e = {};
  try {
    let t = await ev.enableSoundshare();
    tm(t.code), e = {
      status_code: t.code,
      message: t.message
    }
  } catch (t) {
    eT.warn("Failed to enable macOS soundshare: ".concat(t)), tm(-1), e = {
      status_code: -1,
      message: "".concat(t)
    }
  } finally {
    i.emitChange(), Z.default.track(eE.AnalyticEvents.SOUNDSHARE_ENABLE, e)
  }
}
class tg extends S.default.Store {
  initialize() {
    ev.on(m.MediaEngineEvent.Connection, e => {
      let {
        maxSyncDelayOverride: t
      } = x.default.getCurrentConfig({
        location: "f627ab_3"
      }, {
        autoTrackExposure: !1
      });
      t > 0 && ev.setMaxSyncDelayOverride(t), e6(e), e7(e), te(e);
      let n = e3();
      e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
      let {
        useExperimentalRateControl: r
      } = j.default.getCurrentConfig({
        location: "f627ab_4"
      }, {
        autoTrackExposure: !1
      });
      r && e.setExperimentFlag(eS.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
      {
        (0, ee.isWindows)() && e.setExperimentFlag(eS.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0);
        let {
          signalH265SupportNvenc: t
        } = U.default.getCurrentConfig({
          location: "f627ab_9"
        }, {
          autoTrackExposure: !0
        });
        t && e.setExperimentFlag(eS.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
        let {
          signalH265SupportMacOS: n
        } = M.default.getCurrentConfig({
          location: "f627ab_8"
        }, {
          autoTrackExposure: !0
        });
        n && e.setExperimentFlag(eS.ExperimentFlags.SIGNAL_H265_SUPPORT, !0)
      }
      let {
        signalAV1Support: a
      } = L.default.getCurrentConfig({
        location: "f627ab_10"
      }, {
        autoTrackExposure: !0
      });
      a && e.setExperimentFlag(eS.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
      let {
        allowSettingFullbandAndroid: o
      } = k.default.getCurrentConfig({
        location: "f627ab_14"
      }, {
        autoTrackExposure: !0
      });
      if (o && ev.setHasFullbandPerformance((0, D.hasPerformanceForKrispFullband)()), (0, N.default)(i)) {
        let t = R.default.getSettings();
        e.setExperimentFlag(eS.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
        let {
          enableViewerClipping: n
        } = Y.default.getCurrentConfig({
          location: "f627ab_15"
        }, {
          autoTrackExposure: !1
        });
        e.setViewerSideClip(n);
        let i = ec.default.getGuildId(),
          r = 0;
        null != i && e.context === eS.MediaEngineContextTypes.STREAM && (r = w.default.getCurrentConfig({
          guildId: i,
          location: "MediaEngineStore_SetupMediaEngine"
        }, {
          autoTrackExposure: !0
        }).keyFrameIntervalMs), e.setClipsKeyFrameInterval(n && t.viewerClipsEnabled ? eS.VIEWERSIDE_CLIP_KFI_MS : r);
        let {
          allowQualityDecoupling: s
        } = A.default.getCurrentConfig({
          location: "MediaEngineStore_setupMediaEngine"
        }, {
          autoTrackExposure: !0
        });
        e.setQualityDecoupling(s)
      }
      for (let t of (n = e3(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== er.default.getId() && e.setLocalMute(t, n.localMutes[t]);
      for (let t of Object.keys(n.localVolumes)) t !== er.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
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
      }), e.context === eS.MediaEngineContextTypes.DEFAULT && (ex = !1, e.on(m.BaseConnectionEvent.SpeakingWhileMuted, () => {
        ex = !0, i.emitChange()
      })), e.on(m.BaseConnectionEvent.DesktopSourceEnd, () => {
        I.default.dispatch({
          type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
          settings: {
            context: e.context
          }
        })
      }), e.on(m.BaseConnectionEvent.SoundshareAttached, () => {
        (null == s ? void 0 : s.desktopSource) != null && Z.default.track(eE.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, P.default)(null == s ? void 0 : s.desktopSource))
      }), e.on(m.BaseConnectionEvent.SoundshareFailed, e => {
        let {
          failureCode: t,
          failureReason: n,
          willRetry: i
        } = e;
        e9(null == s ? void 0 : s.desktopSource, t, n, i)
      }), e.on(m.BaseConnectionEvent.SoundshareSpeaking, () => {
        (null == s ? void 0 : s.desktopSource) != null && (Z.default.track(eE.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, P.default)(null == s ? void 0 : s.desktopSource)), null != eu.default.getHookError(eE.MediaEngineHookTypes.SOUND) && I.default.wait(() => I.default.dispatch({
          type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
        })))
      });
      let l = new g.Timeout;
      e.on(m.BaseConnectionEvent.SoundshareTrace, e => {
        switch (e.type) {
          case "soundshare_attach_requested":
            l.start(e4, () => {
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
            (null == s ? void 0 : s.desktopSource) != null && (e9(null == s ? void 0 : s.desktopSource, n, t, i), !i && (l.stop(), I.default.wait(() => I.default.dispatch({
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
        (null == s ? void 0 : s.desktopSource) != null && Z.default.track(eE.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
          backend: e,
          format: t,
          framebuffer_format: n,
          sample_count: i,
          success: r,
          reinitialization: a,
          ...(0, P.default)(null == s ? void 0 : s.desktopSource)
        })
      }), e.on(m.BaseConnectionEvent.NoiseCancellationError, e => {
        eT.warn("noisecancellererror event: ".concat(e)), eq = !0, Z.default.track(eE.AnalyticEvents.VOICE_PROCESSING, {
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
        eT.warn("voiceactivitydetectorerror event: ".concat(e)), Z.default.track(eE.AnalyticEvents.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), I.default.dispatch({
          type: "AUDIO_SET_MODE",
          context: eS.MediaEngineContextTypes.DEFAULT,
          mode: eE.InputModes.VOICE_ACTIVITY,
          options: {
            ...e3(eS.MediaEngineContextTypes.DEFAULT).modeOptions,
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
      }), e.setBitRate(es.default.bitrate), e.applyVideoQualityMode(ef.default.mode)
    }), ev.on(m.MediaEngineEvent.DeviceChange, (e, t, n) => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_DEVICES",
        inputDevices: e,
        outputDevices: t,
        videoDevices: n
      })
    }), ev.on(m.MediaEngineEvent.VolumeChange, (e, t) => {
      I.default.dispatch({
        type: "AUDIO_VOLUME_CHANGE",
        inputVolume: e,
        outputVolume: t
      })
    }), ev.on(m.MediaEngineEvent.DesktopSourceEnd, () => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: null
      })
    }), ev.on(m.MediaEngineEvent.AudioPermission, e => {
      eZ = !0, I.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "audio",
        granted: e
      })
    }), ev.on(m.MediaEngineEvent.VideoPermission, e => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "video",
        granted: e
      })
    }), ev.on(m.MediaEngineEvent.WatchdogTimeout, async () => {
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
      eT.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), Z.default.track(eE.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
        minidump_submission_error: e
      })
    }), ev.on(m.MediaEngineEvent.VideoInputInitialized, e => {
      Z.default.track(eE.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
        device_name: e.description.name,
        time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * $.default.Millis.SECOND),
        timed_out: e.initializationTimerExpired,
        activity: e.entropy
      })
    }), ev.on(m.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
      I.default.dispatch({
        type: "CLIPS_RESTART"
      })
    }), ev.on(m.MediaEngineEvent.ClipsInitFailure, (e, t) => {
      I.default.wait(() => {
        I.default.dispatch({
          type: "CLIPS_INIT_FAILURE",
          errMsg: e,
          applicationName: t
        })
      })
    }), ev.on(m.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
      var n, i;
      (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == s ? void 0 : null === (i = s.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && v.cancelAttachToProcess(t), a = null)
    }), ti.reset(), ! function() {
      var e;
      let t = T.default.get("audio");
      null != t && (T.default.set(eg, {
          [eS.MediaEngineContextTypes.DEFAULT]: t
        }), T.default.remove("audio")), eA = null !== (e = T.default.get(eg)) && void 0 !== e ? e : {}, p.each(eA, e => {
          if (p.defaultsDeep(e, eC()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ei.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
            var t;
            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
          }(0, ee.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.av1EnabledSettingVersion && (e.av1EnabledSettingVersion = 1, e.av1Enabled = !0)
        }),
        function() {
          let e = e3();
          ev.setAudioInputDevice(e.inputDeviceId), ev.setAudioOutputDevice(e.outputDeviceId), e8(), ev.setInputVolume(e.inputVolume), ev.setOutputVolume(e.outputVolume), ev.setH264Enabled(e.openH264), ev.setAv1Enabled(e.av1Enabled), ev.setAecDump(e.aecDumpEnabled)
        }()
    }(), !(0, ee.isDesktop)() || __OVERLAY__ || eW || eK ? (0, ee.isWeb)() && ev.supports(eS.Features.NOISE_CANCELLATION) ? (eK = !0, i.emitChange()) : (0, ee.isWeb)() && tr({
      noiseCancellation: !1
    }) : (eW = !0, t_()), (0, ee.isMac)() && ev.supports(eS.Features.SOUNDSHARE) ? ev.getSoundshareStatus().then(e => {
      tm(e)
    }).catch(e => {
      eT.warn("Failed to check if soundshare is enabled: ".concat(e))
    }) : eX = eE.SoundshareEnableState.ENABLED, tf(), e1 = {
      [eS.Features.VIDEO]: ev.supports(eS.Features.VIDEO),
      [eS.Features.DESKTOP_CAPTURE]: ev.supports(eS.Features.DESKTOP_CAPTURE),
      [eS.Features.HYBRID_VIDEO]: ev.supports(eS.Features.HYBRID_VIDEO)
    }, this.waitFor(er.default, ea.default, eo.default, eu.default, ec.default, ed.default, z.default.storage, Q.default, el.default, R.default)
  }
  supports(e) {
    return ev.supports(e)
  }
  supportsInApp(e) {
    return e1[e] || ev.supports(e)
  }
  isSupported() {
    return ev.supported()
  }
  isExperimentalEncodersSupported() {
    return ev.supports(eS.Features.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return ev.supports(eS.Features.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return eK || !1
  }
  isNoiseCancellationError() {
    return eq
  }
  isAutomaticGainControlSupported() {
    return ev.supports(eS.Features.AUTOMATIC_GAIN_CONTROL)
  }
  isAdvancedVoiceActivitySupported() {
    return eK || !1
  }
  isAecDumpSupported() {
    return ev.supports(eS.Features.AEC_DUMP)
  }
  isSimulcastSupported() {
    return ev.supports(eS.Features.VIDEO) && ev.supports(eS.Features.SIMULCAST)
  }
  getAecDump() {
    return e3().aecDumpEnabled
  }
  getMediaEngine() {
    return ev
  }
  getVideoComponent() {
    return ev.supports(eS.Features.DIRECT_VIDEO) && ev.setUseDirectVideo(!0), ev.Video
  }
  getCameraComponent() {
    return ev.supports(eS.Features.DIRECT_VIDEO) && ev.setUseDirectVideo(!0), ev.Camera
  }
  isEnabled() {
    return eN
  }
  isMute() {
    return this.isSelfMute() || eb
  }
  isDeaf() {
    return this.isSelfDeaf() || eG
  }
  hasContext(e) {
    return null != eA[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
    return e === eS.MediaEngineContextTypes.DEFAULT && eM
  }
  isSelfMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
    return !this.isEnabled() || e3(e).mute || !z.default.didHavePermission(eh.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === eS.MediaEngineContextTypes.DEFAULT && eU
  }
  isHardwareMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(e) && ea.default.isHardwareMute(this.getInputDeviceId())
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
    return !this.isSupported() || e3(e).deaf
  }
  isVideoEnabled() {
    return ew && eV
  }
  isVideoAvailable() {
    return Object.values(eL).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.STREAM;
    return eD === e && null != s
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.STREAM;
    return eD === t && null != s && (null === (e = s.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT;
    return e !== er.default.getId() && (e3(t).localMutes[e] || !1)
  }
  supportsDisableLocalVideo() {
    return ev.supports(eS.Features.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e3(n).disabledLocalVideos[e]) && void 0 !== t && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e3(n).videoToggleStateMap[e]) && void 0 !== t ? t : eE.VideoToggleState.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT;
    return t === eS.MediaEngineContextTypes.DEFAULT && eJ.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
    return e === eS.MediaEngineContextTypes.DEFAULT && eJ.size > 0
  }
  isMediaFilterSettingLoading() {
    return eQ
  }
  isNativeAudioPermissionReady() {
    return eZ
  }
  getGoLiveSource() {
    return s
  }
  getGoLiveContext() {
    return eD
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT,
      n = e3(t).localPans[e];
    return null != n ? n : eI
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT,
      n = t === eS.MediaEngineContextTypes.STREAM,
      i = n ? eS.DEFAULT_STREAM_VOLUME : eS.DEFAULT_VOLUME,
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
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
    return e3(e).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
    return e3(e).modeOptions
  }
  getShortcuts() {
    let e = {};
    return p.each(eA, (t, n) => {
      let {
        mode: i,
        modeOptions: {
          shortcut: r
        }
      } = t;
      i === eE.InputModes.PUSH_TO_TALK && eR.has(n) && (e[n] = r)
    }), e
  }
  getInputDeviceId() {
    return tl(ey, e3().inputDeviceId)
  }
  getOutputDeviceId() {
    return tl(eP, e3().outputDeviceId)
  }
  getVideoDeviceId() {
    return tl(eL, e3().videoDeviceId)
  }
  getInputDevices() {
    return ey
  }
  getOutputDevices() {
    return eP
  }
  getVideoDevices() {
    return eL
  }
  getEchoCancellation() {
    let e = e3();
    return ea.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
  }
  getH265Enabled() {
    return e3().h265Enabled
  }
  getLoopback() {
    return ev.getLoopback()
  }
  getNoiseSuppression() {
    let e = e3();
    return ea.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = e3();
    return ea.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
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
    return ev.getDebugLogging()
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
    return ev.getAudioSubsystem()
  }
  getSettings() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
    return e3(e)
  }
  getState() {
    return {
      settingsByContext: eA,
      inputDevices: ey,
      outputDevices: eP,
      appSupported: e1,
      krispModuleLoaded: eK,
      goLiveSource: s,
      goLiveContext: eD
    }
  }
  getInputDetected() {
    return eB
  }
  getNoInputDetectedNotice() {
    return ej
  }
  getPacketDelay() {
    return ee.isPlatformEmbedded || this.getMode() !== eE.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    ev.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return eO
  }
  getVideoHook() {
    return e3().videoHook
  }
  supportsVideoHook() {
    return ev.supports(eS.Features.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = e3().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == e || e)
  }
  supportsExperimentalSoundshare() {
    return ev.supports(eS.Features.EXPERIMENTAL_SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ep.WINDOWS_SOUNDSHARE_VERSION)
  }
  getOpenH264() {
    return e3().openH264
  }
  getAv1Enabled() {
    return e3().av1Enabled
  }
  getEverSpeakingWhileMuted() {
    return ex
  }
  getSoundshareEnabled() {
    return eX
  }
  supportsEnableSoundshare() {
    return (0, ee.isMac)() && ev.supports(eS.Features.SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ep.DARWIN_SOUNDSHARE_VERSION) && !(_.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ep.DARWIN_SCKIT_AUDIO_VERSION) && tn(!1))
  }
  supportsScreenSoundshare() {
    return (0, ee.isMac)() && ev.supports(eS.Features.SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ep.DARWIN_SCKIT_AUDIO_VERSION) && tn(!1) || (0, ee.isWindows)() && ev.supports(eS.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
  }
  getVideoStreamParameters() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT,
      t = this.supports(eS.Features.VIDEO) ? [{
        rid: "100",
        type: e === eS.MediaEngineContextTypes.DEFAULT ? eS.MediaTypes.VIDEO : eS.MediaTypes.SCREEN,
        quality: 100
      }] : [];
    return this.isSimulcastSupported() && e === eS.MediaEngineContextTypes.DEFAULT && t.push({
      rid: "50",
      type: eS.MediaTypes.VIDEO,
      quality: 50
    }), t
  }
  getSupportedSecureFramesProtocolVersion(e) {
    var t;
    let n = ev.getSupportedSecureFramesProtocolVersion(),
      i = B.SecureFramesUserExperiment.getCurrentConfig({
        location: "MediaEngineStore"
      }),
      r = null != e ? B.SecureFramesGuildExperiment.getCurrentConfig({
        guildId: e,
        location: "MediaEngineStore"
      }) : null,
      s = i.canSupportSecureFrames || (null == r ? void 0 : r.canSupportSecureFrames),
      a = !(0, ee.isIOS)() && !(0, ee.isAndroid)() && (i.canSupportMls || (null == r ? void 0 : r.canSupportMls)),
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
    if (i !== n && e8(r, null), null != t || null == n) {
      eY = !1;
      return
    }
    if (eY) return;
    eY = !0;
    let s = e3();
    (s.mute || s.deaf) && (tr({
      deaf: !1,
      mute: !1
    }), ev.eachConnection(e7))
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      if (r === t.sessionId) {
        eb = t.mute || t.suppress, eG = t.deaf, ev.eachConnection(e7);
        let e = null != t.guildId && null != t.channelId && null != ez && ez !== t.channelId,
          n = !e && ew;
        return e8(n), ez = t.channelId, !0
      }
      return !__OVERLAY__ && t.userId === er.default.getId() && null == ec.default.getChannelId() && e8(!1, null), e
    }, !1)
  },
  CONNECTION_OPEN: function(e) {
    r = e.sessionId, eb = !1, eG = !1, (0, q.shouldReadWriteAudioSettings)() && tu()
  },
  CONNECTION_CLOSED: function() {
    r = null
  },
  RTC_CONNECTION_STATE: function(e) {
    switch (e.state) {
      case eE.RTCConnectionStates.CONNECTING:
        ts();
        break;
      case eE.RTCConnectionStates.RTC_CONNECTING:
        eH = !1, ej = !1;
        break;
      case eE.RTCConnectionStates.RTC_CONNECTED:
        e8();
        break;
      case eE.RTCConnectionStates.DISCONNECTED:
        (function() {
          if (0 === eJ.size) return;
          let e = eS.MediaEngineContextTypes.DEFAULT,
            {
              disabledLocalVideos: t
            } = e3(e);
          eJ.forEach(n => {
            f(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], ev.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
          }), eJ.clear(), tr({
            disabledLocalVideos: t
          }, e, !1)
        })(), tf()
    }
    ti.update()
  },
  AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
    let {
      mute: t
    } = e;
    eM = t, ev.eachConnection(e7)
  },
  AUDIO_TOGGLE_SELF_MUTE: function(e) {
    let {
      context: t
    } = e, {
      mute: n,
      deaf: i
    } = e3(t);
    if (t === eS.MediaEngineContextTypes.DEFAULT && (z.default.requestPermission(eh.NativePermissionTypes.AUDIO), eU)) return !1;
    !(n = !i && !n) && (i = !1), tr({
      mute: n,
      deaf: i
    }, t), ev.eachConnection(e7)
  },
  AUDIO_TOGGLE_SELF_DEAF: function(e) {
    let {
      context: t
    } = e, n = e3(t);
    tr({
      deaf: !n.deaf
    }, t), ev.eachConnection(e7)
  },
  AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
    let {
      context: t,
      userId: n
    } = e;
    if (n === er.default.getId()) return;
    let {
      localMutes: i
    } = e3(t);
    i[n] ? delete i[n] : i[n] = !0, tr({
      localMutes: i
    }, t), ev.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
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
    let p = c === eE.VideoToggleState.DISABLED,
      {
        disabledLocalVideos: h
      } = e3(l),
      _ = null !== (t = h[u]) && void 0 !== t && t,
      S = eJ.has(u),
      m = c === eE.VideoToggleState.AUTO_ENABLED || c === eE.VideoToggleState.MANUAL_ENABLED;
    eT.info("disableVideo=".concat(p, " currentlyDisabled=").concat(_, " currentlyAutoDisabled=").concat(S, ", isVideoShown=").concat(m)), f(!(S && !_), "If you are auto-disabled, then you are also disabled.");
    let T = p !== _,
      g = l === eS.MediaEngineContextTypes.DEFAULT,
      I = E && T && g,
      C = d && T && g;
    eT.info("changed=".concat(T, " isDefaultContext=").concat(g, " isUpdateCausedByVideoHealthManager=").concat(I, " isManualToggleByUser=").concat(C));
    let {
      videoToggleStateMap: v
    } = e3(l);
    if (v[u] === eE.VideoToggleState.AUTO_PROBING && c === eE.VideoToggleState.AUTO_ENABLED && (0, K.default)(u, p ? eS.VideoToggleReason.AUTO_DISABLE : eS.VideoToggleReason.AUTO_ENABLE, m), v[u] = c, tr({
        videoToggleStateMap: v
      }, l, d), c === eE.VideoToggleState.AUTO_PROBING ? null === (n = ec.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = ec.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !e$ && (eT.info("isAutoDisableAllowed=".concat(e$, " - disabling VideoHealthManager")), null === (s = ec.default.getRTCConnection()) || void 0 === s || null === (r = s.getVideoHealthManager()) || void 0 === r || r.disable()), I) {
      if (!p && !S || p && !e$) return;
      (0, K.default)(u, p ? eS.VideoToggleReason.AUTO_DISABLE : eS.VideoToggleReason.AUTO_ENABLE, m), p ? eJ.add(u) : eJ.delete(u)
    } else C && (S && !p ? (eT.info("disallowing auto-disable for this session because of manual override by user"), e$ = !1, null === (o = ec.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, K.default)(u, eS.VideoToggleReason.MANUAL_REENABLE, m)) : (0, K.default)(u, p ? eS.VideoToggleReason.MANUAL_DISABLE : eS.VideoToggleReason.MANUAL_ENABLE, m));
    g && !p && eJ.delete(u), p ? h[u] = !0 : delete h[u], tr({
      disabledLocalVideos: h
    }, l, d), ev.eachConnection(e => {
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
    if (n === er.default.getId()) return;
    let r = t === eS.MediaEngineContextTypes.STREAM,
      s = r ? eS.DEFAULT_STREAM_VOLUME : eS.DEFAULT_VOLUME,
      {
        localVolumes: a
      } = e3(t);
    i === s ? delete a[n] : a[n] = i, tr({
      localVolumes: a
    }, t), ev.eachConnection(e => e.setLocalVolume(n, i), t)
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
    }, tr({
      localPans: s
    }, t), ev.eachConnection(e => e.setLocalPan(n, i, r), t)
  },
  AUDIO_SET_MODE: function(e) {
    let {
      context: t,
      mode: n,
      options: i
    } = e;
    tr({
      mode: n,
      modeOptions: i
    }, t), ev.eachConnection(e6), ti.update()
  },
  AUDIO_SET_INPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    tr({
      inputVolume: e5(t)
    }), ev.setInputVolume(t)
  },
  AUDIO_SET_OUTPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    tr({
      outputVolume: t
    }), ev.setOutputVolume(t)
  },
  AUDIO_SET_INPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    tr({
      inputDeviceId: t = tl(ey, t)
    }), ev.setAudioInputDevice(t)
  },
  AUDIO_SET_OUTPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    tr({
      outputDeviceId: t = tl(eP, t)
    }), ev.setAudioOutputDevice(t)
  },
  AUDIO_SET_ECHO_CANCELLATION: function(e) {
    let t = tr({
      echoCancellation: e.enabled
    });
    ev.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tp(), tE(e.location)
  },
  MEDIA_ENGINE_SET_H265: function(e) {
    let t = tr({
      h265Enabled: e.enabled
    });
    ev.setH265Enabled(t.h265Enabled)
  },
  AUDIO_SET_LOOPBACK: function(e) {
    let {
      enabled: t
    } = e;
    return e0 = t, tp()
  },
  AUDIO_SET_NOISE_SUPPRESSION: function(e) {
    let t = tr({
      noiseSuppression: e.enabled
    });
    ev.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tp(), tE(e.location)
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
    let t = tr({
      automaticGainControl: e.enabled
    });
    ev.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tp(), tE(e.location)
  },
  AUDIO_SET_NOISE_CANCELLATION: function(e) {
    let t = tr({
      noiseCancellation: e.enabled
    });
    ev.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tp(), tE(e.location)
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
    tr({
      silenceWarning: e.enabled
    }), ti.update()
  },
  AUDIO_SET_DEBUG_LOGGING: function(e) {
    ev.setDebugLogging(e.enabled)
  },
  MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
    tr({
      videoHook: e.enabled
    })
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
    tr({
      experimentalSoundshare2: e.enabled
    })
  },
  AUDIO_SET_ATTENUATION: function(e) {
    let {
      attenuation: t,
      attenuateWhileSpeakingSelf: n,
      attenuateWhileSpeakingOthers: i
    } = e, r = tr({
      attenuation: t,
      attenuateWhileSpeakingSelf: n,
      attenuateWhileSpeakingOthers: i
    });
    ev.eachConnection(e => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers))
  },
  AUDIO_SET_QOS: function(e) {
    let {
      enabled: t
    } = e;
    tr({
      qos: t
    }), ev.eachConnection(e => e.setQoS(t))
  },
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: n,
      videoDevices: i
    } = e;
    ! function(e) {
      let t = ey;
      if (ey = to(e, em.default.Messages.NO_INPUT_DEVICES), !p.isEqual(ey, t)) {
        let e = e3(),
          t = tl(ey, e.inputDeviceId);
        ev.setAudioInputDevice(t)
      }
    }(t), ! function(e) {
      let t = eP;
      if (eP = to(e, em.default.Messages.NO_OUTPUT_DEVICES), !p.isEqual(eP, t)) {
        let e = e3(),
          t = tl(eP, e.outputDeviceId);
        ev.setAudioOutputDevice(t)
      }
    }(n), ! function(e) {
      eV = e.length > 0;
      let t = eL;
      if (eL = to(e, em.default.Messages.NO_VIDEO_DEVICES), ew && !p.isEqual(eL, t)) {
        var n;
        let e = void 0 !== eL[ek],
          i = ek === eS.DEFAULT_DEVICE_ID && (null === (n = t[eS.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
        e8(e || i)
      }
    }(i)
  },
  AUDIO_VOLUME_CHANGE: function(e) {
    let {
      inputVolume: t,
      outputVolume: n
    } = e;
    tr({
      inputVolume: e5(t),
      outputVolume: n
    })
  },
  AUDIO_RESET: function() {
    T.default.remove(eg), location.reload()
  },
  AUDIO_INPUT_DETECTED: function(e) {
    let {
      inputDetected: t
    } = e;
    eB = t, !eH && eB && (eH = !0, ti.update())
  },
  AUDIO_SET_SUBSYSTEM: function(e) {
    ev.setAudioSubsystem(e.subsystem)
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
    eN = e.enabled, e.unmute && tr({
      mute: !1,
      deaf: !1
    }), ev.eachConnection(e7)
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
    let {
      enabled: t
    } = e;
    z.default.requestPermission(eh.NativePermissionTypes.CAMERA), e8(t)
  },
  MEDIA_ENGINE_PERMISSION: function(e) {
    let {
      kind: t,
      granted: n
    } = e;
    if (!n) switch (t) {
      case "audio":
        eN = !1, ev.eachConnection(e7);
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
        u = null !== (t = o.context) && void 0 !== t ? t : eS.MediaEngineContextTypes.DEFAULT,
        c = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
          resolution: 720,
          frameRate: 30
        },
        d = J.default.getPidFromDesktopSource(r);
      ee.isPlatformEmbedded && !0 === l && ({
        soundshareId: e,
        soundshareSession: i
      } = tc(d), null != e && td(e, i)), (a = u) !== eD && (null != s && ev.setGoLiveSource(null, eD), eD = a);
      let f = u === eS.MediaEngineContextTypes.STREAM && ew;
      e8(f, {
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
      let e = null !== (i = o.context) && void 0 !== i ? i : eS.MediaEngineContextTypes.DEFAULT,
        {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        } = o.cameraSettings,
        s = e === eS.MediaEngineContextTypes.STREAM && ew,
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
    tr({
      videoDeviceId: t = tl(eL, t)
    }), e8()
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
    let t = tr({
      experimentalEncoders: e.enabled
    });
    ev.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
  },
  MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
    return eO !== e.required && (eO = e.required, !e.required && ev.interact(), !0)
  },
  USER_SETTINGS_MODAL_INIT: tS,
  USER_SETTINGS_MODAL_SET_SECTION: tS,
  CERTIFIED_DEVICES_SET: function() {
    return ev.eachConnection(te), !1
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
    eA = t.settingsByContext, ey = t.inputDevices, eP = t.outputDevices, e1 = t.appSupported, eK = t.krispModuleLoaded, eD = t.goLiveContext
  },
  MEDIA_ENGINE_SET_OPEN_H264: function(e) {
    let {
      enabled: t
    } = e, n = tr({
      openH264: t
    });
    ev.setH264Enabled(n.openH264)
  },
  MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
    let {
      enabled: t
    } = e, n = tr({
      hardwareH264: t
    });
    ev.eachConnection(e => e.setHardwareH264(n.hardwareH264))
  },
  MEDIA_ENGINE_SET_AV1: function(e) {
    let {
      enabled: t
    } = e, n = tr({
      av1Enabled: t
    });
    ev.setAv1Enabled(n.av1Enabled)
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e, n = y.default.isEnabled();
    if (t === eE.AppStates.BACKGROUND && ew && !n) eF = !0, e8(!1);
    else {
      if (t !== eE.AppStates.ACTIVE || !eF) return !1;
      eF = !1, e8(!0)
    }
    return !0
  },
  SET_CHANNEL_BITRATE: function(e) {
    ev.eachConnection(t => t.setBitRate(e.bitrate))
  },
  SET_VAD_PERMISSION: function(e) {
    let {
      hasPermission: t
    } = e, n = !t;
    if (n === eU) return !1;
    eU = n, ev.eachConnection(e7)
  },
  SET_NATIVE_PERMISSION: function(e) {
    let {
      state: t,
      permissionType: n
    } = e, i = t === eh.NativePermissionStates.ACCEPTED;
    switch (n) {
      case eh.NativePermissionTypes.AUDIO:
        eZ = !0, ev.eachConnection(e7);
        break;
      case eh.NativePermissionTypes.CAMERA:
        !i && ew && e8(!1);
        break;
      default:
        return !1
    }
  },
  SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
    ev.eachConnection(t => t.applyVideoQualityMode(e.mode))
  },
  MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
    let {
      enabled: t
    } = e, n = tr({
      aecDumpEnabled: t
    });
    ev.setAecDump(n.aecDumpEnabled)
  },
  CHANNEL_DELETE: function() {
    if (!ew && null == s || null != ec.default.getRTCConnectionId()) return !1;
    e8(!1, null)
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
    return !!eq && (eq = !1, !0)
  },
  MEDIA_ENGINE_ENABLE_SOUNDSHARE: function() {
    tT(), ! function() {
      var e, t;
      let n = i.isSoundSharing(),
        r = null === (e = i.getGoLiveSource()) || void 0 === e ? void 0 : e.desktopSource;
      if (null != r) {
        let e = null !== (t = r.soundshareId) && void 0 !== t ? t : 0,
          s = i.getExperimentalSoundshare();
        n && ev.setSoundshareSource(e, s, eD)
      }
    }()
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    ev.applyMediaFilterSettings(t).finally(() => {
      eQ = !1, i.emitChange()
    })
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
    eQ = !0
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
    eQ = !1
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      local: n,
      wasSaved: i
    } = e;
    if (!(0, q.shouldReadWriteAudioSettings)() || t !== e_.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
    tu(!0)
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
      c = J.default.getPidFromDesktopSource(t);
    ({
      soundshareId: l,
      soundshareSession: u
    } = tc(c));
    let d = {
      desktopSource: {
        id: t,
        sourcePid: c,
        soundshareId: l,
        soundshareSession: u
      },
      quality: r
    };
    null != a && a.desktopSource.id !== d.desktopSource.id && (ev.setClipsSource(null), (0, ee.isWindows)() && null != a.desktopSource.soundshareId && v.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && td(l, u), a = d;
    let {
      useQuartzCapturer: f
    } = F.default.getCurrentConfig({
      location: "f627ab_11"
    }, {
      autoTrackExposure: !1
    }), {
      hdrCaptureMode: E
    } = G.default.getCurrentConfig({
      location: "f627ab_12"
    }, {
      autoTrackExposure: !1
    }), p = e3().videoHook, h = ev.supports(eS.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
      videoHookStaleFrameTimeoutMs: _
    } = H.default.getConfig(h && p, "e225cfdf5_vh2", !1), {
      graphicsCaptureStaleFrameTimeoutMs: S
    } = W.default.getConfig(h && tt(), "e225cfdf5_wgc2", !1);
    ev.setClipsSource({
      desktopDescription: {
        id: a.desktopSource.id,
        soundshareId: a.desktopSource.soundshareId,
        useVideoHook: p,
        useGraphicsCapture: tt(),
        useLoopback: i.getExperimentalSoundshare(),
        useQuartzCapturer: f,
        allowScreenCaptureKit: tn(!1),
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
    void 0 !== t.viewerClipsEnabled && ev.eachConnection(e => e.setClipsKeyFrameInterval(R.default.getSettings().viewerClipsEnabled ? eS.VIEWERSIDE_CLIP_KFI_MS : 0), eS.MediaEngineContextTypes.STREAM), !1 === t.decoupledClipsEnabled && (a = null, ev.setClipsSource(null))
  }
})