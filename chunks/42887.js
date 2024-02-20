"use strict";
let i, r, s, a;
n.r(t), n.d(t, {
  default: function() {
    return tT
  }
}), n("222007"), n("808653"), n("506083"), n("424973"), n("256955");
var o, l, u, c, d = n("627445"),
  p = n.n(d),
  h = n("917351"),
  f = n.n(h),
  E = n("570277"),
  _ = n.n(E),
  m = n("446674"),
  S = n("773364"),
  g = n("95410"),
  T = n("862337"),
  I = n("913144"),
  v = n("49671"),
  C = n("6193"),
  A = n("965068"),
  R = n("386045"),
  N = n("18346"),
  y = n("605250"),
  O = n("808122"),
  D = n("733589"),
  b = n("933034"),
  P = n("746800"),
  L = n("584687"),
  M = n("705500"),
  U = n("238847"),
  w = n("981699"),
  k = n("140622"),
  G = n("16001"),
  x = n("631508"),
  F = n("368765"),
  V = n("403770"),
  B = n("940146"),
  H = n("353500"),
  j = n("103979"),
  Y = n("665862"),
  W = n("122530"),
  K = n("928609"),
  z = n("891760"),
  q = n("536692"),
  Q = n("374363"),
  X = n("599110"),
  Z = n("922932"),
  J = n("718517"),
  $ = n("773336"),
  ee = n("286235"),
  et = n("50885"),
  en = n("13798"),
  ei = n("271938"),
  er = n("366679"),
  es = n("533222"),
  ea = n("42203"),
  eo = n("760190"),
  el = n("855867"),
  eu = n("945956"),
  ec = n("568307"),
  ed = n("123647"),
  ep = n("49111"),
  eh = n("706530"),
  ef = n("180524"),
  eE = n("397336"),
  e_ = n("353927"),
  em = n("782340");
let eS = new y.default("MediaEngineStore");
(u = o || (o = {}))[u.DETACHED = 0] = "DETACHED", u[u.WAITING = 1] = "WAITING", u[u.ATTACHED = 2] = "ATTACHED", u[u.STARTED = 3] = "STARTED", u[u.PLAYING = 4] = "PLAYING", u[u.SILENCE = 5] = "SILENCE", (c = l || (l = {}))[c.FAILED = -1] = "FAILED", c[c.OK = 0] = "OK", c[c.ACE_INSTALL_FAILED = 4] = "ACE_INSTALL_FAILED", c[c.ACE_NOT_AUTHORIZED = 5] = "ACE_NOT_AUTHORIZED";
let eg = "MediaEngineStore",
  eT = {
    left: 1,
    right: 1
  };

function eI() {
  let e = {
    mode: ep.InputModes.VOICE_ACTIVITY,
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
    inputVolume: e_.DEFAULT_VOLUME,
    outputVolume: e_.DEFAULT_VOLUME,
    inputDeviceId: e_.DEFAULT_DEVICE_ID,
    outputDeviceId: e_.DEFAULT_DEVICE_ID,
    videoDeviceId: e_.DEFAULT_DEVICE_ID,
    qos: !1,
    qosMigrated: !1,
    videoHook: ev.supports(e_.Features.VIDEO_HOOK),
    experimentalSoundshare2: null,
    openH264: !0,
    av1Enabled: !0,
    h265Enabled: !0,
    vadThrehsoldMigrated: !1,
    aecDumpEnabled: !1
  };
  return e
}
let ev = (0, S.initializeMediaEngine)((0, S.determineMediaEngine)()),
  eC = {},
  eA = new Set([e_.MediaEngineContextTypes.DEFAULT]),
  eR = ev.supports(e_.Features.AUTO_ENABLE),
  eN = !1,
  ey = e_.MediaEngineContextTypes.STREAM,
  eO = {
    [e_.DEFAULT_DEVICE_ID]: ts(em.default.Messages.NO_INPUT_DEVICES)
  },
  eD = {
    [e_.DEFAULT_DEVICE_ID]: ts(em.default.Messages.NO_OUTPUT_DEVICES)
  },
  eb = {
    [e_.DEFAULT_DEVICE_ID]: ts(em.default.Messages.NO_VIDEO_DEVICES)
  },
  eP = !1,
  eL = !1,
  eM = !1,
  eU = !1,
  ew = !1,
  ek = e_.DISABLED_DEVICE_ID,
  eG = !1,
  ex = !1,
  eF = !1,
  eV = null,
  eB = !1,
  eH = !1,
  ej = !1,
  eY = !1,
  eW = !1,
  eK = null,
  ez = !1,
  eq = ep.SoundshareEnableState.NOT_ENABLED,
  eQ = !1,
  eX = !1;
K.default.hasPermission(ef.NativePermissionTypes.AUDIO, {
  showAuthorizationError: !1
}), K.default.hasPermission(ef.NativePermissionTypes.CAMERA, {
  showAuthorizationError: !1
});
let eZ = new Set,
  eJ = !1,
  e$ = !1,
  e0 = {},
  e1 = {},
  e2 = 5 * J.default.Millis.SECOND;

function e4() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.MediaEngineContextTypes.DEFAULT,
    t = eC[e];
  return null == t && (t = eI(), eC[e] = t), t
}

function e3(e) {
  let t = e4(e.context);
  e.setInputMode(t.mode, {
    vadThreshold: t.modeOptions.threshold,
    vadAutoThreshold: t.modeOptions.autoThreshold,
    vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
      return eW || !1
    }(),
    vadLeading: t.modeOptions.vadLeading,
    vadTrailing: t.modeOptions.vadTrailing,
    pttReleaseDelay: t.modeOptions.delay
  })
}

function e6(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.DEFAULT_VOLUME;
  return f.clamp(e, 0, t)
}

function e5(e) {
  let t = e4(e.context),
    n = !eR || t.mute || t.deaf;
  e.context === e_.MediaEngineContextTypes.DEFAULT && (n = n || eP || eL || eM || !K.default.didHavePermission(ef.NativePermissionTypes.AUDIO)), e.setSelfMute(n), e.setSelfDeaf(t.deaf)
}

function e7() {
  var e, t, n;
  let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew,
    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
    o = s;
  if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, $.isWindows)() && C.cancelAttachToProcess(o.desktopSource.soundshareId), ev.setGoLiveSource(null, ey)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && ev.setGoLiveSource(null, ey), (ew || r) && (ek = (ew = r) ? to(eb, e4().videoDeviceId) : e_.DISABLED_DEVICE_ID, ev.setVideoInputDevice(ek)), s = a, null != a) {
    let e = {
      resolution: a.quality.resolution,
      frameRate: a.quality.frameRate
    };
    if (null != a.desktopSource) {
      let {
        useQuartzCapturer: t
      } = x.default.getCurrentConfig({
        location: "f627ab_1"
      }, {
        autoTrackExposure: !1
      }), {
        hdrCaptureMode: n
      } = w.default.getCurrentConfig({
        location: "f627ab_2"
      }, {
        autoTrackExposure: !1
      }), r = e4().videoHook, s = ev.supports(e_.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
        videoHookStaleFrameTimeoutMs: o
      } = B.default.getConfig(s && r, "e225cfdf5_vh1", !0), {
        graphicsCaptureStaleFrameTimeoutMs: l
      } = Y.default.getConfig(s && te(), "e225cfdf5_wgc2", !0);
      ev.setGoLiveSource({
        desktopDescription: {
          id: a.desktopSource.id,
          soundshareId: a.desktopSource.soundshareId,
          useVideoHook: r,
          useGraphicsCapture: te(),
          useLoopback: i.getExperimentalSoundshare(),
          useQuartzCapturer: t,
          allowScreenCaptureKit: tt(!0),
          videoHookStaleFrameTimeoutMs: o,
          graphicsCaptureStaleFrameTimeoutMs: l,
          hdrCaptureMode: n
        },
        quality: e
      }, ey)
    }
    null != a.cameraSource && ev.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: a.cameraSource.videoDeviceGuid,
        audioDeviceGuid: a.cameraSource.audioDeviceGuid
      },
      quality: e
    }, ey)
  }
}

function e9(e, t, n, i) {
  var r;
  let s = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : "";
  null == e1[s] && (e1[s] = new Set);
  let a = null != t && !e1[s].has(t);
  a && e1[s].add(t), (null == t || a) && X.default.track(ep.AnalyticEvents.SOUNDSHARE_FAILED, {
    soundshare_failure_code: t,
    soundshare_failure_reason: n,
    soundshare_failure_will_retry: i,
    ...(0, b.default)(e)
  })
}

function e8(e) {
  let t = e4(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(es.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(es.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(es.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, $.isWeb)()) {
    let n = t.noiseCancellation ? -150 : -100;
    e.setSilenceThreshold(n)
  }
}

function te() {
  return (0, $.isWindows)() && _.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, eh.WINDOWS_GRAPHICS_CAPTURE_VERSION)
}

function tt(e) {
  return !!((0, $.isMac)() && ev.supports(e_.Features.SCREEN_CAPTURE_KIT) && _.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, eh.DARWIN_SCKIT_VERSION)) && F.default.getCurrentConfig({
    location: "screenCaptureKitEnabled"
  }, {
    autoTrackExposure: e
  }).allowScreenCaptureKit
}
let tn = new class {
  start() {
    !this.started && (this.started = !0, ev.on(S.MediaEngineEvent.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), ev.removeListener(S.MediaEngineEvent.Silence, this.handleSilence), I.default.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = e4();
    !eB && eu.default.getState() === ep.RTCConnectionStates.RTC_CONNECTED && e.mode === ep.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
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
        }), e && (eH = !0))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    }
  }
};

function ti(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.MediaEngineContextTypes.DEFAULT,
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = e4(t);
  return Object.assign(i, e), !__OVERLAY__ && n && g.default.set(eg, eC), i
}

function tr() {
  !eR && ev.enable().then(() => I.default.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: !0,
    unmute: !1
  }))
}

function ts(e) {
  return {
    id: e_.DEFAULT_DEVICE_ID,
    index: 0,
    name: e,
    disabled: !0
  }
}

function ta(e, t) {
  if (0 === e.length) {
    let e = ts(t);
    return {
      [e.id]: e
    }
  }
  return f(e).map(e => ({
    id: e.id,
    index: e.index,
    name: e.name,
    disabled: !1
  })).keyBy("id").value()
}

function to(e, t) {
  var n;
  let i = null !== (n = e[t]) && void 0 !== n ? n : f(e).values().first();
  return null != i ? i.id : t
}

function tl() {
  var e, t;
  let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    i = null !== (e = Q.default.settings.audioContextSettings) && void 0 !== e ? e : {
      user: {},
      stream: {}
    };
  for (let e of Object.keys(i)) {
    let r = e === eE.ProtoAudioSettingsContextTypes.USER ? e_.MediaEngineContextTypes.DEFAULT : e_.MediaEngineContextTypes.STREAM,
      s = r === e_.MediaEngineContextTypes.STREAM ? e_.DEFAULT_STREAM_VOLUME : e_.DEFAULT_VOLUME,
      a = null !== (t = i[e]) && void 0 !== t ? t : {},
      {
        localMutes: o,
        localVolumes: l
      } = e4(r);
    for (let [e, t] of Object.entries(a)) null == (0, q.getPendingAudioSettings)(r, e) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== s ? l[e] = t.volume : delete l[e], ev.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, r));
    if (n) {
      let e = new Set([...Object.keys(o), ...Object.keys(l)]);
      for (let t of e) null == a[t] && (delete o[t], delete l[t], ev.eachConnection(e => {
        e.setLocalVolume(t, s), e.setLocalMute(t, !1)
      }, r))
    }
    ti({
      localMutes: o,
      localVolumes: l
    }, r)
  }
}

function tu(e) {
  if (null == i) return eS.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = i.getExperimentalSoundshare() ? e : Z.default.getAudioPid(e),
      n = "";
    return null != t && (n = Z.default.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function tc(e, t) {
  (0, $.isWindows)() && C.attachToProcess(e, {
    soundshare_session: t
  }).then(t => {
    null != t && !ec.default.shouldContinueWithoutElevatedProcessForPID(e) && I.default.wait(() => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
        errorMessage: t
      })
    })
  })
}

function td() {
  let e = e_.MediaEngineContextTypes.DEFAULT,
    {
      videoToggleStateMap: t
    } = e4(e);
  for (let [e, n] of Object.entries(t)) n === ep.VideoToggleState.AUTO_PROBING && delete t[e];
  ti({
    videoToggleStateMap: t
  }, e, !1)
}

function tp(e) {
  let t = e4();
  X.default.track(ep.AnalyticEvents.VOICE_PROCESSING, {
    echo_cancellation: t.echoCancellation,
    noise_cancellation: t.noiseCancellation,
    noise_suppression: t.noiseSuppression,
    automatic_gain_control: t.automaticGainControl,
    location: e
  })
}

function th() {
  let e = e4(),
    t = e.inputDeviceId,
    n = es.default.hasEchoCancellation(t) || e.echoCancellation,
    i = es.default.hasNoiseSuppression(t) || e.noiseSuppression,
    r = es.default.hasAutomaticGainControl(t) || e.automaticGainControl,
    s = e.noiseCancellation;
  ev.setLoopback(e$, {
    echoCancellation: n,
    noiseSuppression: i,
    automaticGainControl: r,
    noiseCancellation: s
  })
}

function tf() {
  return eW || !1
}
async function tE() {
  try {
    await et.default.ensureModule("discord_krisp"), et.default.requireModule("discord_krisp"), eW = !0, i.emitChange()
  } catch (t) {
    eS.warn("Failed to load Krisp module: ".concat(t.message)), ee.default.captureException(t);
    let e = e_.NoiseCancellerError.INITIALIZED;
    if (t.message.includes(": ")) {
      let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
      e = isNaN(n) || 0 === n ? e_.NoiseCancellerError.INITIALIZED : n
    }
    X.default.track(ep.AnalyticEvents.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), ti({
      noiseCancellation: !1
    })
  } finally {
    eY = !1
  }
}

function t_(e) {
  let {
    section: t
  } = e;
  return t === ep.UserSettingsSections.VOICE && tr(), !1
}

function tm(e) {
  eq = 0 === e ? ep.SoundshareEnableState.ENABLED : 5 === e ? ep.SoundshareEnableState.ENABLING : -1 === e || 4 === e ? ep.SoundshareEnableState.FAILED_TO_ENABLE : ep.SoundshareEnableState.NOT_ENABLED
}
async function tS() {
  if (eq === ep.SoundshareEnableState.ENABLING) return;
  eq = ep.SoundshareEnableState.ENABLING;
  let e = {};
  try {
    let t = await ev.enableSoundshare();
    tm(t.code), e = {
      status_code: t.code,
      message: t.message
    }
  } catch (t) {
    eS.warn("Failed to enable macOS soundshare: ".concat(t)), tm(-1), e = {
      status_code: -1,
      message: "".concat(t)
    }
  } finally {
    i.emitChange(), X.default.track(ep.AnalyticEvents.SOUNDSHARE_ENABLE, e)
  }
}
class tg extends m.default.Store {
  initialize() {
    ev.on(S.MediaEngineEvent.Connection, e => {
      let {
        maxSyncDelayOverride: t
      } = G.default.getCurrentConfig({
        location: "f627ab_3"
      }, {
        autoTrackExposure: !1
      });
      t > 0 && ev.setMaxSyncDelayOverride(t), e3(e), e5(e), e8(e);
      let n = e4();
      e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
      let {
        useExperimentalRateControl: r
      } = H.default.getCurrentConfig({
        location: "f627ab_4"
      }, {
        autoTrackExposure: !1
      });
      r && e.setExperimentFlag(e_.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
      {
        (0, $.isWindows)() && e.setExperimentFlag(e_.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0);
        let {
          signalH265SupportNvenc: t
        } = U.default.getCurrentConfig({
          location: "f627ab_9"
        }, {
          autoTrackExposure: !0
        });
        t && e.setExperimentFlag(e_.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
        let {
          signalH265SupportMacOS: n
        } = M.default.getCurrentConfig({
          location: "f627ab_8"
        }, {
          autoTrackExposure: !0
        });
        n && e.setExperimentFlag(e_.ExperimentFlags.SIGNAL_H265_SUPPORT, !0)
      }
      let {
        signalAV1Support: a
      } = P.default.getCurrentConfig({
        location: "f627ab_10"
      }, {
        autoTrackExposure: !0
      });
      a && e.setExperimentFlag(e_.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
      let {
        allowSettingFullbandAndroid: o
      } = k.default.getCurrentConfig({
        location: "f627ab_14"
      }, {
        autoTrackExposure: !0
      });
      if (o && ev.setHasFullbandPerformance((0, O.hasPerformanceForKrispFullband)()), (0, N.default)(i)) {
        let t = R.default.getSettings();
        e.setExperimentFlag(e_.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
        let {
          enableViewerClipping: n
        } = j.default.getCurrentConfig({
          location: "f627ab_15"
        }, {
          autoTrackExposure: !1
        });
        e.setViewerSideClip(n), e.setClipsKeyFrameInterval(e_.VIEWERSIDE_CLIP_KFI_MS);
        let {
          allowQualityDecoupling: i
        } = A.default.getCurrentConfig({
          location: "MediaEngineStore_setupMediaEngine"
        }, {
          autoTrackExposure: !0
        });
        e.setQualityDecoupling(i)
      }
      for (let t of (n = e4(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== ei.default.getId() && e.setLocalMute(t, n.localMutes[t]);
      for (let t of Object.keys(n.localVolumes)) t !== ei.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
      for (let t of Object.keys(n.localPans)) {
        let i = n.localPans[t];
        e.setLocalPan(t, i.left, i.right)
      }
      for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
      e.on(S.BaseConnectionEvent.Speaking, (t, n) => {
        I.default.dispatch({
          type: "SPEAKING",
          context: e.context,
          userId: t,
          speakingFlags: n
        })
      }), e.context === e_.MediaEngineContextTypes.DEFAULT && (eG = !1, e.on(S.BaseConnectionEvent.SpeakingWhileMuted, () => {
        eG = !0, i.emitChange()
      })), e.on(S.BaseConnectionEvent.DesktopSourceEnd, () => {
        I.default.dispatch({
          type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
          settings: {
            context: e.context
          }
        })
      }), e.on(S.BaseConnectionEvent.SoundshareAttached, () => {
        (null == s ? void 0 : s.desktopSource) != null && X.default.track(ep.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, b.default)(null == s ? void 0 : s.desktopSource))
      }), e.on(S.BaseConnectionEvent.SoundshareFailed, e => {
        let {
          failureCode: t,
          failureReason: n,
          willRetry: i
        } = e;
        e9(null == s ? void 0 : s.desktopSource, t, n, i)
      }), e.on(S.BaseConnectionEvent.SoundshareSpeaking, () => {
        (null == s ? void 0 : s.desktopSource) != null && (X.default.track(ep.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, b.default)(null == s ? void 0 : s.desktopSource)), null != el.default.getHookError(ep.MediaEngineHookTypes.SOUND) && I.default.wait(() => I.default.dispatch({
          type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
        })))
      });
      let l = new T.Timeout;
      e.on(S.BaseConnectionEvent.SoundshareTrace, e => {
        switch (e.type) {
          case "soundshare_attach_requested":
            l.start(e2, () => {
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
      }), e.on(S.BaseConnectionEvent.InteractionRequired, e => {
        I.default.dispatch({
          type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
          required: e
        })
      }), e.on(S.BaseConnectionEvent.VideoHookInitialize, (e, t, n, i, r, a) => {
        (null == s ? void 0 : s.desktopSource) != null && X.default.track(ep.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
          backend: e,
          format: t,
          framebuffer_format: n,
          sample_count: i,
          success: r,
          reinitialization: a,
          ...(0, b.default)(null == s ? void 0 : s.desktopSource)
        })
      }), e.on(S.BaseConnectionEvent.NoiseCancellationError, e => {
        eS.warn("noisecancellererror event: ".concat(e)), ez = !0, X.default.track(ep.AnalyticEvents.VOICE_PROCESSING, {
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
      }), e.on(S.BaseConnectionEvent.VoiceActivityDetectorError, e => {
        eS.warn("voiceactivitydetectorerror event: ".concat(e)), X.default.track(ep.AnalyticEvents.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), I.default.dispatch({
          type: "AUDIO_SET_MODE",
          context: e_.MediaEngineContextTypes.DEFAULT,
          mode: ep.InputModes.VOICE_ACTIVITY,
          options: {
            ...e4(e_.MediaEngineContextTypes.DEFAULT).modeOptions,
            vadUseKrisp: !1
          }
        }), I.default.dispatch({
          type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
          code: e
        })
      }), e.on(S.BaseConnectionEvent.VideoState, t => {
        I.default.dispatch({
          type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
          videoState: t,
          context: e.context
        })
      }), e.on(S.BaseConnectionEvent.Destroy, () => {
        l.stop()
      }), e.setBitRate(er.default.bitrate), e.applyVideoQualityMode(ed.default.mode)
    }), ev.on(S.MediaEngineEvent.DeviceChange, (e, t, n) => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_DEVICES",
        inputDevices: e,
        outputDevices: t,
        videoDevices: n
      })
    }), ev.on(S.MediaEngineEvent.VolumeChange, (e, t) => {
      I.default.dispatch({
        type: "AUDIO_VOLUME_CHANGE",
        inputVolume: e,
        outputVolume: t
      })
    }), ev.on(S.MediaEngineEvent.DesktopSourceEnd, () => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: null
      })
    }), ev.on(S.MediaEngineEvent.AudioPermission, e => {
      eX = !0, I.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "audio",
        granted: e
      })
    }), ev.on(S.MediaEngineEvent.VideoPermission, e => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "video",
        granted: e
      })
    }), ev.on(S.MediaEngineEvent.WatchdogTimeout, async () => {
      let e;
      try {
        await Z.default.submitLiveCrashReport({
          message: {
            message: "Voice Watchdog Timeout"
          }
        })
      } catch (t) {
        "number" == typeof t.status && (e = t.status)
      }
      eS.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), X.default.track(ep.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
        minidump_submission_error: e
      })
    }), ev.on(S.MediaEngineEvent.VideoInputInitialized, e => {
      X.default.track(ep.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
        device_name: e.description.name,
        time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * J.default.Millis.SECOND),
        timed_out: e.initializationTimerExpired,
        activity: e.entropy
      })
    }), ev.on(S.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
      I.default.dispatch({
        type: "CLIPS_RESTART"
      })
    }), ev.on(S.MediaEngineEvent.ClipsInitFailure, (e, t) => {
      I.default.wait(() => {
        I.default.dispatch({
          type: "CLIPS_INIT_FAILURE",
          errMsg: e,
          applicationName: t
        })
      })
    }), ev.on(S.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
      var n, i;
      (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == s ? void 0 : null === (i = s.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && C.cancelAttachToProcess(t), a = null)
    }), tn.reset(), ! function() {
      var e;
      let t = g.default.get("audio");
      null != t && (g.default.set(eg, {
          [e_.MediaEngineContextTypes.DEFAULT]: t
        }), g.default.remove("audio")), eC = null !== (e = g.default.get(eg)) && void 0 !== e ? e : {}, f.each(eC, e => {
          if (f.defaultsDeep(e, eI()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, en.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
            var t;
            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
          }(0, $.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.av1EnabledSettingVersion && (e.av1EnabledSettingVersion = 1, e.av1Enabled = !0)
        }),
        function() {
          let e = e4();
          ev.setAudioInputDevice(e.inputDeviceId), ev.setAudioOutputDevice(e.outputDeviceId), e7(), ev.setInputVolume(e.inputVolume), ev.setOutputVolume(e.outputVolume), ev.setH264Enabled(e.openH264), ev.setAv1Enabled(e.av1Enabled), ev.setAecDump(e.aecDumpEnabled)
        }()
    }(), !(0, $.isDesktop)() || __OVERLAY__ || eY || eW ? (0, $.isWeb)() && ev.supports(e_.Features.NOISE_CANCELLATION) ? (eW = !0, i.emitChange()) : (0, $.isWeb)() && ti({
      noiseCancellation: !1
    }) : (eY = !0, tE()), (0, $.isMac)() && ev.supports(e_.Features.SOUNDSHARE) ? ev.getSoundshareStatus().then(e => {
      tm(e)
    }).catch(e => {
      eS.warn("Failed to check if soundshare is enabled: ".concat(e))
    }) : eq = ep.SoundshareEnableState.ENABLED, td(), e0 = {
      [e_.Features.VIDEO]: ev.supports(e_.Features.VIDEO),
      [e_.Features.DESKTOP_CAPTURE]: ev.supports(e_.Features.DESKTOP_CAPTURE),
      [e_.Features.HYBRID_VIDEO]: ev.supports(e_.Features.HYBRID_VIDEO)
    }, this.waitFor(ei.default, es.default, ea.default, el.default, eu.default, ec.default, K.default.storage, Q.default, eo.default, R.default)
  }
  supports(e) {
    return ev.supports(e)
  }
  supportsInApp(e) {
    return e0[e] || ev.supports(e)
  }
  isSupported() {
    return ev.supported()
  }
  isExperimentalEncodersSupported() {
    return ev.supports(e_.Features.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return ev.supports(e_.Features.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return eW || !1
  }
  isNoiseCancellationError() {
    return ez
  }
  isAutomaticGainControlSupported() {
    return ev.supports(e_.Features.AUTOMATIC_GAIN_CONTROL)
  }
  isAdvancedVoiceActivitySupported() {
    return eW || !1
  }
  isAecDumpSupported() {
    return ev.supports(e_.Features.AEC_DUMP)
  }
  isSimulcastSupported() {
    return ev.supports(e_.Features.VIDEO) && ev.supports(e_.Features.SIMULCAST)
  }
  getAecDump() {
    return e4().aecDumpEnabled
  }
  getMediaEngine() {
    return ev
  }
  getVideoComponent() {
    return ev.supports(e_.Features.DIRECT_VIDEO) && ev.setUseDirectVideo(!0), ev.Video
  }
  getCameraComponent() {
    return ev.supports(e_.Features.DIRECT_VIDEO) && ev.setUseDirectVideo(!0), ev.Camera
  }
  isEnabled() {
    return eR
  }
  isMute() {
    return this.isSelfMute() || eP
  }
  isDeaf() {
    return this.isSelfDeaf() || eU
  }
  hasContext(e) {
    return null != eC[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.MediaEngineContextTypes.DEFAULT;
    return e === e_.MediaEngineContextTypes.DEFAULT && eL
  }
  isSelfMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.MediaEngineContextTypes.DEFAULT;
    return !this.isEnabled() || e4(e).mute || !K.default.didHavePermission(ef.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === e_.MediaEngineContextTypes.DEFAULT && eM
  }
  isHardwareMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.MediaEngineContextTypes.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(e) && es.default.isHardwareMute(this.getInputDeviceId())
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.MediaEngineContextTypes.DEFAULT;
    return !this.isSupported() || e4(e).deaf
  }
  isVideoEnabled() {
    return ew && eF
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
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.MediaEngineContextTypes.STREAM;
    return ey === e && null != s
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.MediaEngineContextTypes.STREAM;
    return ey === t && null != s && (null === (e = s.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.MediaEngineContextTypes.DEFAULT;
    return e !== ei.default.getId() && (e4(t).localMutes[e] || !1)
  }
  supportsDisableLocalVideo() {
    return ev.supports(e_.Features.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e4(n).disabledLocalVideos[e]) && void 0 !== t && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e4(n).videoToggleStateMap[e]) && void 0 !== t ? t : ep.VideoToggleState.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.MediaEngineContextTypes.DEFAULT;
    return t === e_.MediaEngineContextTypes.DEFAULT && eZ.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.MediaEngineContextTypes.DEFAULT;
    return e === e_.MediaEngineContextTypes.DEFAULT && eZ.size > 0
  }
  isMediaFilterSettingLoading() {
    return eQ
  }
  isNativeAudioPermissionReady() {
    return eX
  }
  getGoLiveSource() {
    return s
  }
  getGoLiveContext() {
    return ey
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.MediaEngineContextTypes.DEFAULT,
      n = e4(t).localPans[e];
    return null != n ? n : eT
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.MediaEngineContextTypes.DEFAULT,
      n = t === e_.MediaEngineContextTypes.STREAM,
      i = n ? e_.DEFAULT_STREAM_VOLUME : e_.DEFAULT_VOLUME,
      r = e4(t).localVolumes[e];
    return null != r ? r : i
  }
  getInputVolume() {
    return e4().inputVolume
  }
  getOutputVolume() {
    return e4().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.MediaEngineContextTypes.DEFAULT;
    return e4(e).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.MediaEngineContextTypes.DEFAULT;
    return e4(e).modeOptions
  }
  getShortcuts() {
    let e = {};
    return f.each(eC, (t, n) => {
      let {
        mode: i,
        modeOptions: {
          shortcut: r
        }
      } = t;
      i === ep.InputModes.PUSH_TO_TALK && eA.has(n) && (e[n] = r)
    }), e
  }
  getInputDeviceId() {
    return to(eO, e4().inputDeviceId)
  }
  getOutputDeviceId() {
    return to(eD, e4().outputDeviceId)
  }
  getVideoDeviceId() {
    return to(eb, e4().videoDeviceId)
  }
  getInputDevices() {
    return eO
  }
  getOutputDevices() {
    return eD
  }
  getVideoDevices() {
    return eb
  }
  getEchoCancellation() {
    let e = e4();
    return es.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
  }
  getH265Enabled() {
    return e4().h265Enabled
  }
  getLoopback() {
    return ev.getLoopback()
  }
  getNoiseSuppression() {
    let e = e4();
    return es.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = e4();
    return es.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
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
    return ev.getDebugLogging()
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
    return ev.getAudioSubsystem()
  }
  getSettings() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.MediaEngineContextTypes.DEFAULT;
    return e4(e)
  }
  getState() {
    return {
      settingsByContext: eC,
      inputDevices: eO,
      outputDevices: eD,
      appSupported: e0,
      krispModuleLoaded: eW,
      goLiveSource: s,
      goLiveContext: ey
    }
  }
  getInputDetected() {
    return eV
  }
  getNoInputDetectedNotice() {
    return eH
  }
  getPacketDelay() {
    return $.isPlatformEmbedded || this.getMode() !== ep.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    ev.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return eN
  }
  getVideoHook() {
    return e4().videoHook
  }
  supportsVideoHook() {
    return ev.supports(e_.Features.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = e4().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == e || e)
  }
  supportsExperimentalSoundshare() {
    return ev.supports(e_.Features.EXPERIMENTAL_SOUNDSHARE) && _.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, eh.WINDOWS_SOUNDSHARE_VERSION)
  }
  getOpenH264() {
    return e4().openH264
  }
  getAv1Enabled() {
    return e4().av1Enabled
  }
  getEverSpeakingWhileMuted() {
    return eG
  }
  getSoundshareEnabled() {
    return eq
  }
  supportsEnableSoundshare() {
    return (0, $.isMac)() && ev.supports(e_.Features.SOUNDSHARE) && _.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, eh.DARWIN_SOUNDSHARE_VERSION) && !(_.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, eh.DARWIN_SCKIT_AUDIO_VERSION) && tt(!1))
  }
  supportsScreenSoundshare() {
    return (0, $.isMac)() && ev.supports(e_.Features.SOUNDSHARE) && _.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, eh.DARWIN_SCKIT_AUDIO_VERSION) && tt(!1) || (0, $.isWindows)() && ev.supports(e_.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
  }
  getVideoStreamParameters() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.MediaEngineContextTypes.DEFAULT,
      t = this.supports(e_.Features.VIDEO) ? [{
        rid: "100",
        type: e === e_.MediaEngineContextTypes.DEFAULT ? e_.MediaTypes.VIDEO : e_.MediaTypes.SCREEN,
        quality: 100
      }] : [];
    return this.isSimulcastSupported() && e === e_.MediaEngineContextTypes.DEFAULT && t.push({
      rid: "50",
      type: e_.MediaTypes.VIDEO,
      quality: 50
    }), t
  }
  getSupportedSecureFramesProtocolVersion(e) {
    var t;
    let n = ev.getSupportedSecureFramesProtocolVersion(),
      i = V.SecureFramesUserExperiment.getCurrentConfig({
        location: "MediaEngineStore"
      }),
      r = null != e ? V.SecureFramesGuildExperiment.getCurrentConfig({
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
tg.displayName = "MediaEngineStore";
var tT = i = new tg(I.default, {
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n,
      currentVoiceChannelId: i,
      video: r
    } = e;
    if (i !== n && e7(r, null), null != t || null == n) {
      ej = !1;
      return
    }
    if (ej) return;
    ej = !0;
    let s = e4();
    (s.mute || s.deaf) && (ti({
      deaf: !1,
      mute: !1
    }), ev.eachConnection(e5))
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      if (r === t.sessionId) {
        eP = t.mute || t.suppress, eU = t.deaf, ev.eachConnection(e5);
        let e = null != t.guildId && null != t.channelId && null != eK && eK !== t.channelId,
          n = !e && ew;
        return e7(n), eK = t.channelId, !0
      }
      return !__OVERLAY__ && t.userId === ei.default.getId() && null == eu.default.getChannelId() && e7(!1, null), e
    }, !1)
  },
  CONNECTION_OPEN: function(e) {
    r = e.sessionId, eP = !1, eU = !1, (0, z.shouldReadWriteAudioSettings)() && tl()
  },
  CONNECTION_CLOSED: function() {
    r = null
  },
  RTC_CONNECTION_STATE: function(e) {
    switch (e.state) {
      case ep.RTCConnectionStates.CONNECTING:
        tr();
        break;
      case ep.RTCConnectionStates.RTC_CONNECTING:
        eB = !1, eH = !1;
        break;
      case ep.RTCConnectionStates.RTC_CONNECTED:
        e7();
        break;
      case ep.RTCConnectionStates.DISCONNECTED:
        (function() {
          if (0 === eZ.size) return;
          let e = e_.MediaEngineContextTypes.DEFAULT,
            {
              disabledLocalVideos: t
            } = e4(e);
          eZ.forEach(n => {
            p(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], ev.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
          }), eZ.clear(), ti({
            disabledLocalVideos: t
          }, e, !1)
        })(), td()
    }
    tn.update()
  },
  AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
    let {
      mute: t
    } = e;
    eL = t, ev.eachConnection(e5)
  },
  AUDIO_TOGGLE_SELF_MUTE: function(e) {
    let {
      context: t
    } = e, {
      mute: n,
      deaf: i
    } = e4(t);
    if (t === e_.MediaEngineContextTypes.DEFAULT && (K.default.requestPermission(ef.NativePermissionTypes.AUDIO), eM)) return !1;
    !(n = !i && !n) && (i = !1), ti({
      mute: n,
      deaf: i
    }, t), ev.eachConnection(e5)
  },
  AUDIO_TOGGLE_SELF_DEAF: function(e) {
    let {
      context: t
    } = e, n = e4(t);
    ti({
      deaf: !n.deaf
    }, t), ev.eachConnection(e5)
  },
  AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
    let {
      context: t,
      userId: n
    } = e;
    if (n === ei.default.getId()) return;
    let {
      localMutes: i
    } = e4(t);
    i[n] ? delete i[n] : i[n] = !0, ti({
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
      isAutomatic: h
    } = e;
    p(!(d && h), "These are not allowed to both be true.");
    let f = c === ep.VideoToggleState.DISABLED,
      {
        disabledLocalVideos: E
      } = e4(l),
      _ = null !== (t = E[u]) && void 0 !== t && t,
      m = eZ.has(u),
      S = c === ep.VideoToggleState.AUTO_ENABLED || c === ep.VideoToggleState.MANUAL_ENABLED;
    eS.info("disableVideo=".concat(f, " currentlyDisabled=").concat(_, " currentlyAutoDisabled=").concat(m, ", isVideoShown=").concat(S)), p(!(m && !_), "If you are auto-disabled, then you are also disabled.");
    let g = f !== _,
      T = l === e_.MediaEngineContextTypes.DEFAULT,
      I = h && g && T,
      v = d && g && T;
    eS.info("changed=".concat(g, " isDefaultContext=").concat(T, " isUpdateCausedByVideoHealthManager=").concat(I, " isManualToggleByUser=").concat(v));
    let {
      videoToggleStateMap: C
    } = e4(l);
    if (C[u] === ep.VideoToggleState.AUTO_PROBING && c === ep.VideoToggleState.AUTO_ENABLED && (0, W.default)(u, f ? e_.VideoToggleReason.AUTO_DISABLE : e_.VideoToggleReason.AUTO_ENABLE, S), C[u] = c, ti({
        videoToggleStateMap: C
      }, l, d), c === ep.VideoToggleState.AUTO_PROBING ? null === (n = eu.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = eu.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !eJ && (eS.info("isAutoDisableAllowed=".concat(eJ, " - disabling VideoHealthManager")), null === (s = eu.default.getRTCConnection()) || void 0 === s || null === (r = s.getVideoHealthManager()) || void 0 === r || r.disable()), I) {
      if (!f && !m || f && !eJ) return;
      (0, W.default)(u, f ? e_.VideoToggleReason.AUTO_DISABLE : e_.VideoToggleReason.AUTO_ENABLE, S), f ? eZ.add(u) : eZ.delete(u)
    } else v && (m && !f ? (eS.info("disallowing auto-disable for this session because of manual override by user"), eJ = !1, null === (o = eu.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, W.default)(u, e_.VideoToggleReason.MANUAL_REENABLE, S)) : (0, W.default)(u, f ? e_.VideoToggleReason.MANUAL_DISABLE : e_.VideoToggleReason.MANUAL_ENABLE, S));
    T && !f && eZ.delete(u), f ? E[u] = !0 : delete E[u], ti({
      disabledLocalVideos: E
    }, l, d), ev.eachConnection(e => {
      var t;
      return e.setLocalVideoDisabled(u, null !== (t = E[u]) && void 0 !== t && t)
    }, l)
  },
  AUDIO_SET_LOCAL_VOLUME: function(e) {
    let {
      context: t,
      userId: n,
      volume: i
    } = e;
    if (n === ei.default.getId()) return;
    let r = t === e_.MediaEngineContextTypes.STREAM,
      s = r ? e_.DEFAULT_STREAM_VOLUME : e_.DEFAULT_VOLUME,
      {
        localVolumes: a
      } = e4(t);
    i === s ? delete a[n] : a[n] = i, ti({
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
    } = e4(t);
    s[n] = {
      left: i,
      right: r
    }, ti({
      localPans: s
    }, t), ev.eachConnection(e => e.setLocalPan(n, i, r), t)
  },
  AUDIO_SET_MODE: function(e) {
    let {
      context: t,
      mode: n,
      options: i
    } = e;
    ti({
      mode: n,
      modeOptions: i
    }, t), ev.eachConnection(e3), tn.update()
  },
  AUDIO_SET_INPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    ti({
      inputVolume: e6(t)
    }), ev.setInputVolume(t)
  },
  AUDIO_SET_OUTPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    ti({
      outputVolume: t
    }), ev.setOutputVolume(t)
  },
  AUDIO_SET_INPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ti({
      inputDeviceId: t = to(eO, t)
    }), ev.setAudioInputDevice(t)
  },
  AUDIO_SET_OUTPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ti({
      outputDeviceId: t = to(eD, t)
    }), ev.setAudioOutputDevice(t)
  },
  AUDIO_SET_ECHO_CANCELLATION: function(e) {
    let t = ti({
      echoCancellation: e.enabled
    });
    ev.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), th(), tp(e.location)
  },
  MEDIA_ENGINE_SET_H265: function(e) {
    let t = ti({
      h265Enabled: e.enabled
    });
    ev.setH265Enabled(t.h265Enabled)
  },
  AUDIO_SET_LOOPBACK: function(e) {
    let {
      enabled: t
    } = e;
    return e$ = t, th()
  },
  AUDIO_SET_NOISE_SUPPRESSION: function(e) {
    let t = ti({
      noiseSuppression: e.enabled
    });
    ev.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), th(), tp(e.location)
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
    let t = ti({
      automaticGainControl: e.enabled
    });
    ev.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), th(), tp(e.location)
  },
  AUDIO_SET_NOISE_CANCELLATION: function(e) {
    let t = ti({
      noiseCancellation: e.enabled
    });
    ev.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), th(), tp(e.location)
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
    ti({
      silenceWarning: e.enabled
    }), tn.update()
  },
  AUDIO_SET_DEBUG_LOGGING: function(e) {
    ev.setDebugLogging(e.enabled)
  },
  MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
    ti({
      videoHook: e.enabled
    })
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
    ti({
      experimentalSoundshare2: e.enabled
    })
  },
  AUDIO_SET_ATTENUATION: function(e) {
    let {
      attenuation: t,
      attenuateWhileSpeakingSelf: n,
      attenuateWhileSpeakingOthers: i
    } = e, r = ti({
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
    ti({
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
      let t = eO;
      if (eO = ta(e, em.default.Messages.NO_INPUT_DEVICES), !f.isEqual(eO, t)) {
        let e = e4(),
          t = to(eO, e.inputDeviceId);
        ev.setAudioInputDevice(t)
      }
    }(t), ! function(e) {
      let t = eD;
      if (eD = ta(e, em.default.Messages.NO_OUTPUT_DEVICES), !f.isEqual(eD, t)) {
        let e = e4(),
          t = to(eD, e.outputDeviceId);
        ev.setAudioOutputDevice(t)
      }
    }(n), ! function(e) {
      eF = e.length > 0;
      let t = eb;
      if (eb = ta(e, em.default.Messages.NO_VIDEO_DEVICES), ew && !f.isEqual(eb, t)) {
        var n;
        let e = void 0 !== eb[ek],
          i = ek === e_.DEFAULT_DEVICE_ID && (null === (n = t[e_.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
        e7(e || i)
      }
    }(i)
  },
  AUDIO_VOLUME_CHANGE: function(e) {
    let {
      inputVolume: t,
      outputVolume: n
    } = e;
    ti({
      inputVolume: e6(t),
      outputVolume: n
    })
  },
  AUDIO_RESET: function() {
    g.default.remove(eg), location.reload()
  },
  AUDIO_INPUT_DETECTED: function(e) {
    let {
      inputDetected: t
    } = e;
    eV = t, !eB && eV && (eB = !0, tn.update())
  },
  AUDIO_SET_SUBSYSTEM: function(e) {
    ev.setAudioSubsystem(e.subsystem)
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
    eR = e.enabled, e.unmute && ti({
      mute: !1,
      deaf: !1
    }), ev.eachConnection(e5)
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
    let {
      enabled: t
    } = e;
    K.default.requestPermission(ef.NativePermissionTypes.CAMERA), e7(t)
  },
  MEDIA_ENGINE_PERMISSION: function(e) {
    let {
      kind: t,
      granted: n
    } = e;
    if (!n) switch (t) {
      case "audio":
        eR = !1, ev.eachConnection(e5);
        break;
      case "video":
        e7(!1)
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
        u = null !== (t = o.context) && void 0 !== t ? t : e_.MediaEngineContextTypes.DEFAULT,
        c = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
          resolution: 720,
          frameRate: 30
        },
        d = Z.default.getPidFromDesktopSource(r);
      $.isPlatformEmbedded && !0 === l && ({
        soundshareId: e,
        soundshareSession: i
      } = tu(d), null != e && tc(e, i)), (a = u) !== ey && (null != s && ev.setGoLiveSource(null, ey), ey = a);
      let p = u === e_.MediaEngineContextTypes.STREAM && ew;
      e7(p, {
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
      let e = null !== (i = o.context) && void 0 !== i ? i : e_.MediaEngineContextTypes.DEFAULT,
        {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        } = o.cameraSettings,
        s = e === e_.MediaEngineContextTypes.STREAM && ew,
        a = null !== (r = o.qualityOptions) && void 0 !== r ? r : {
          resolution: 720,
          frameRate: 30
        };
      e7(s, {
        cameraSource: {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        },
        quality: {
          resolution: a.resolution,
          frameRate: a.frameRate
        }
      })
    } else e7(ew, null)
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ti({
      videoDeviceId: t = to(eb, t)
    }), e7()
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
    let t = ti({
      experimentalEncoders: e.enabled
    });
    ev.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
  },
  MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
    return eN !== e.required && (eN = e.required, !e.required && ev.interact(), !0)
  },
  USER_SETTINGS_MODAL_INIT: t_,
  USER_SETTINGS_MODAL_SET_SECTION: t_,
  CERTIFIED_DEVICES_SET: function() {
    return ev.eachConnection(e8), !1
  },
  RPC_APP_CONNECTED: function(e) {
    let {
      application: t
    } = e;
    eA.add(t.id)
  },
  RPC_APP_DISCONNECTED: function(e) {
    let {
      application: t
    } = e;
    eA.delete(t.id)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      mediaEngineState: t
    } = e;
    eC = t.settingsByContext, eO = t.inputDevices, eD = t.outputDevices, e0 = t.appSupported, eW = t.krispModuleLoaded, ey = t.goLiveContext
  },
  MEDIA_ENGINE_SET_OPEN_H264: function(e) {
    let {
      enabled: t
    } = e, n = ti({
      openH264: t
    });
    ev.setH264Enabled(n.openH264)
  },
  MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
    let {
      enabled: t
    } = e, n = ti({
      hardwareH264: t
    });
    ev.eachConnection(e => e.setHardwareH264(n.hardwareH264))
  },
  MEDIA_ENGINE_SET_AV1: function(e) {
    let {
      enabled: t
    } = e, n = ti({
      av1Enabled: t
    });
    ev.setAv1Enabled(n.av1Enabled)
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e, n = D.default.isEnabled();
    if (t === ep.AppStates.BACKGROUND && ew && !n) ex = !0, e7(!1);
    else {
      if (t !== ep.AppStates.ACTIVE || !ex) return !1;
      ex = !1, e7(!0)
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
    if (n === eM) return !1;
    eM = n, ev.eachConnection(e5)
  },
  SET_NATIVE_PERMISSION: function(e) {
    let {
      state: t,
      permissionType: n
    } = e, i = t === ef.NativePermissionStates.ACCEPTED;
    switch (n) {
      case ef.NativePermissionTypes.AUDIO:
        eX = !0, ev.eachConnection(e5);
        break;
      case ef.NativePermissionTypes.CAMERA:
        !i && ew && e7(!1);
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
    } = e, n = ti({
      aecDumpEnabled: t
    });
    ev.setAecDump(n.aecDumpEnabled)
  },
  CHANNEL_DELETE: function() {
    if (!ew && null == s || null != eu.default.getRTCConnectionId()) return !1;
    e7(!1, null)
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
    return !!ez && (ez = !1, !0)
  },
  MEDIA_ENGINE_ENABLE_SOUNDSHARE: function() {
    tS(), ! function() {
      var e, t;
      let n = i.isSoundSharing(),
        r = null === (e = i.getGoLiveSource()) || void 0 === e ? void 0 : e.desktopSource;
      if (null != r) {
        let e = null !== (t = r.soundshareId) && void 0 !== t ? t : 0,
          s = i.getExperimentalSoundshare();
        n && ev.setSoundshareSource(e, s, ey)
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
    if (!(0, z.shouldReadWriteAudioSettings)() || t !== eE.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
    tl(!0)
  },
  CLIPS_INIT: function(e) {
    let {
      sourceId: t,
      applicationName: n,
      quality: r
    } = e, {
      enableDecoupledGameClipping: s
    } = L.default.getCurrentConfig({
      location: "handleClipsInit"
    }, {
      autoTrackExposure: !0
    }), o = R.default.getSettings().decoupledClipsEnabled;
    if (!s || !o || null == v.default) return;
    let l = null,
      u = null,
      c = Z.default.getPidFromDesktopSource(t);
    ({
      soundshareId: l,
      soundshareSession: u
    } = tu(c));
    let d = {
      desktopSource: {
        id: t,
        sourcePid: c,
        soundshareId: l,
        soundshareSession: u
      },
      quality: r
    };
    null != a && a.desktopSource.id !== d.desktopSource.id && (ev.setClipsSource(null), (0, $.isWindows)() && null != a.desktopSource.soundshareId && C.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && tc(l, u), a = d;
    let {
      useQuartzCapturer: p
    } = x.default.getCurrentConfig({
      location: "f627ab_11"
    }, {
      autoTrackExposure: !1
    }), {
      hdrCaptureMode: h
    } = w.default.getCurrentConfig({
      location: "f627ab_12"
    }, {
      autoTrackExposure: !1
    }), f = e4().videoHook, E = ev.supports(e_.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
      videoHookStaleFrameTimeoutMs: _
    } = B.default.getConfig(E && f, "e225cfdf5_vh2", !1), {
      graphicsCaptureStaleFrameTimeoutMs: m
    } = Y.default.getConfig(E && te(), "e225cfdf5_wgc2", !1);
    ev.setClipsSource({
      desktopDescription: {
        id: a.desktopSource.id,
        soundshareId: a.desktopSource.soundshareId,
        useVideoHook: f,
        useGraphicsCapture: te(),
        useLoopback: i.getExperimentalSoundshare(),
        useQuartzCapturer: p,
        allowScreenCaptureKit: tt(!1),
        videoHookStaleFrameTimeoutMs: _,
        graphicsCaptureStaleFrameTimeoutMs: m,
        hdrCaptureMode: h
      },
      quality: r,
      applicationName: n
    })
  },
  CLIPS_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    !1 === t.decoupledClipsEnabled && (a = null, ev.setClipsSource(null))
  }
})