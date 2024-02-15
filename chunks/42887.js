"use strict";
let i, r, s, a;
n.r(t), n.d(t, {
  default: function() {
    return tg
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
  w = n("140622"),
  k = n("16001"),
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
  X = n("374363"),
  Q = n("599110"),
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
  ef = n("49111"),
  eE = n("706530"),
  ep = n("180524"),
  eh = n("397336"),
  e_ = n("353927"),
  eS = n("782340");
let em = new O.default("MediaEngineStore");
(u = o || (o = {}))[u.DETACHED = 0] = "DETACHED", u[u.WAITING = 1] = "WAITING", u[u.ATTACHED = 2] = "ATTACHED", u[u.STARTED = 3] = "STARTED", u[u.PLAYING = 4] = "PLAYING", u[u.SILENCE = 5] = "SILENCE", (c = l || (l = {}))[c.FAILED = -1] = "FAILED", c[c.OK = 0] = "OK", c[c.ACE_INSTALL_FAILED = 4] = "ACE_INSTALL_FAILED", c[c.ACE_NOT_AUTHORIZED = 5] = "ACE_NOT_AUTHORIZED";
let eT = "MediaEngineStore",
  eg = {
    left: 1,
    right: 1
  };

function eI() {
  let e = {
    mode: ef.InputModes.VOICE_ACTIVITY,
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
    videoHook: eC.supports(e_.Features.VIDEO_HOOK),
    experimentalSoundshare2: null,
    openH264: !0,
    av1Enabled: !0,
    h265Enabled: !0,
    vadThrehsoldMigrated: !1,
    aecDumpEnabled: !1
  };
  return e
}
let eC = (0, m.initializeMediaEngine)((0, m.determineMediaEngine)()),
  ev = {},
  eA = new Set([e_.MediaEngineContextTypes.DEFAULT]),
  eR = eC.supports(e_.Features.AUTO_ENABLE),
  eN = !1,
  eO = e_.MediaEngineContextTypes.STREAM,
  eD = {
    [e_.DEFAULT_DEVICE_ID]: ts(eS.default.Messages.NO_INPUT_DEVICES)
  },
  ey = {
    [e_.DEFAULT_DEVICE_ID]: ts(eS.default.Messages.NO_OUTPUT_DEVICES)
  },
  eP = {
    [e_.DEFAULT_DEVICE_ID]: ts(eS.default.Messages.NO_VIDEO_DEVICES)
  },
  eL = !1,
  eb = !1,
  eM = !1,
  eU = !1,
  eG = !1,
  ew = e_.DISABLED_DEVICE_ID,
  ek = !1,
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
  eq = ef.SoundshareEnableState.NOT_ENABLED,
  eX = !1,
  eQ = !1;
K.default.hasPermission(ep.NativePermissionTypes.AUDIO, {
  showAuthorizationError: !1
}), K.default.hasPermission(ep.NativePermissionTypes.CAMERA, {
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
    t = ev[e];
  return null == t && (t = eI(), ev[e] = t), t
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
  return p.clamp(e, 0, t)
}

function e5(e) {
  let t = e4(e.context),
    n = !eR || t.mute || t.deaf;
  e.context === e_.MediaEngineContextTypes.DEFAULT && (n = n || eL || eb || eM || !K.default.didHavePermission(ep.NativePermissionTypes.AUDIO)), e.setSelfMute(n), e.setSelfDeaf(t.deaf)
}

function e7() {
  var e, t, n;
  let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG,
    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
    o = s;
  if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, $.isWindows)() && v.cancelAttachToProcess(o.desktopSource.soundshareId), eC.setGoLiveSource(null, eO)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eC.setGoLiveSource(null, eO), (eG || r) && (ew = (eG = r) ? to(eP, e4().videoDeviceId) : e_.DISABLED_DEVICE_ID, eC.setVideoInputDevice(ew)), s = a, null != a) {
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
      } = G.default.getCurrentConfig({
        location: "f627ab_2"
      }, {
        autoTrackExposure: !1
      }), r = e4().videoHook, s = eC.supports(e_.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
        videoHookStaleFrameTimeoutMs: o
      } = B.default.getConfig(s && r, "e225cfdf5_vh1", !0), {
        graphicsCaptureStaleFrameTimeoutMs: l
      } = Y.default.getConfig(s && te(), "e225cfdf5_wgc2", !0);
      eC.setGoLiveSource({
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
      }, eO)
    }
    null != a.cameraSource && eC.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: a.cameraSource.videoDeviceGuid,
        audioDeviceGuid: a.cameraSource.audioDeviceGuid
      },
      quality: e
    }, eO)
  }
}

function e8(e, t, n, i) {
  var r;
  let s = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : "";
  null == e1[s] && (e1[s] = new Set);
  let a = null != t && !e1[s].has(t);
  a && e1[s].add(t), (null == t || a) && Q.default.track(ef.AnalyticEvents.SOUNDSHARE_FAILED, {
    soundshare_failure_code: t,
    soundshare_failure_reason: n,
    soundshare_failure_will_retry: i,
    ...(0, P.default)(e)
  })
}

function e9(e) {
  let t = e4(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(es.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(es.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(es.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, $.isWeb)()) {
    let n = t.noiseCancellation ? -150 : -100;
    e.setSilenceThreshold(n)
  }
}

function te() {
  return (0, $.isWindows)() && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, eE.WINDOWS_GRAPHICS_CAPTURE_VERSION)
}

function tt(e) {
  return !!((0, $.isMac)() && eC.supports(e_.Features.SCREEN_CAPTURE_KIT) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, eE.DARWIN_SCKIT_VERSION)) && F.default.getCurrentConfig({
    location: "screenCaptureKitEnabled"
  }, {
    autoTrackExposure: e
  }).allowScreenCaptureKit
}
let tn = new class {
  start() {
    !this.started && (this.started = !0, eC.on(m.MediaEngineEvent.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eC.removeListener(m.MediaEngineEvent.Silence, this.handleSilence), I.default.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = e4();
    !eB && eu.default.getState() === ef.RTCConnectionStates.RTC_CONNECTED && e.mode === ef.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
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
  return Object.assign(i, e), !__OVERLAY__ && n && T.default.set(eT, ev), i
}

function tr() {
  !eR && eC.enable().then(() => I.default.dispatch({
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
  return p(e).map(e => ({
    id: e.id,
    index: e.index,
    name: e.name,
    disabled: !1
  })).keyBy("id").value()
}

function to(e, t) {
  var n;
  let i = null !== (n = e[t]) && void 0 !== n ? n : p(e).values().first();
  return null != i ? i.id : t
}

function tl() {
  var e, t;
  let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    i = null !== (e = X.default.settings.audioContextSettings) && void 0 !== e ? e : {
      user: {},
      stream: {}
    };
  for (let e of Object.keys(i)) {
    let r = e === eh.ProtoAudioSettingsContextTypes.USER ? e_.MediaEngineContextTypes.DEFAULT : e_.MediaEngineContextTypes.STREAM,
      s = r === e_.MediaEngineContextTypes.STREAM ? e_.DEFAULT_STREAM_VOLUME : e_.DEFAULT_VOLUME,
      a = null !== (t = i[e]) && void 0 !== t ? t : {},
      {
        localMutes: o,
        localVolumes: l
      } = e4(r);
    for (let [e, t] of Object.entries(a)) null == (0, q.getPendingAudioSettings)(r, e) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== s ? l[e] = t.volume : delete l[e], eC.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, r));
    if (n) {
      let e = new Set([...Object.keys(o), ...Object.keys(l)]);
      for (let t of e) null == a[t] && (delete o[t], delete l[t], eC.eachConnection(e => {
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
  if (null == i) return em.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
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
  (0, $.isWindows)() && v.attachToProcess(e, {
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
  for (let [e, n] of Object.entries(t)) n === ef.VideoToggleState.AUTO_PROBING && delete t[e];
  ti({
    videoToggleStateMap: t
  }, e, !1)
}

function tf(e) {
  let t = e4();
  Q.default.track(ef.AnalyticEvents.VOICE_PROCESSING, {
    echo_cancellation: t.echoCancellation,
    noise_cancellation: t.noiseCancellation,
    noise_suppression: t.noiseSuppression,
    automatic_gain_control: t.automaticGainControl,
    location: e
  })
}

function tE() {
  let e = e4(),
    t = e.inputDeviceId,
    n = es.default.hasEchoCancellation(t) || e.echoCancellation,
    i = es.default.hasNoiseSuppression(t) || e.noiseSuppression,
    r = es.default.hasAutomaticGainControl(t) || e.automaticGainControl,
    s = e.noiseCancellation;
  eC.setLoopback(e$, {
    echoCancellation: n,
    noiseSuppression: i,
    automaticGainControl: r,
    noiseCancellation: s
  })
}

function tp() {
  return eW || !1
}
async function th() {
  try {
    await et.default.ensureModule("discord_krisp"), et.default.requireModule("discord_krisp"), eW = !0, i.emitChange()
  } catch (t) {
    em.warn("Failed to load Krisp module: ".concat(t.message)), ee.default.captureException(t);
    let e = e_.NoiseCancellerError.INITIALIZED;
    if (t.message.includes(": ")) {
      let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
      e = isNaN(n) || 0 === n ? e_.NoiseCancellerError.INITIALIZED : n
    }
    Q.default.track(ef.AnalyticEvents.VOICE_PROCESSING, {
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
  return t === ef.UserSettingsSections.VOICE && tr(), !1
}

function tS(e) {
  eq = 0 === e ? ef.SoundshareEnableState.ENABLED : 5 === e ? ef.SoundshareEnableState.ENABLING : -1 === e || 4 === e ? ef.SoundshareEnableState.FAILED_TO_ENABLE : ef.SoundshareEnableState.NOT_ENABLED
}
async function tm() {
  if (eq === ef.SoundshareEnableState.ENABLING) return;
  eq = ef.SoundshareEnableState.ENABLING;
  let e = {};
  try {
    let t = await eC.enableSoundshare();
    tS(t.code), e = {
      status_code: t.code,
      message: t.message
    }
  } catch (t) {
    em.warn("Failed to enable macOS soundshare: ".concat(t)), tS(-1), e = {
      status_code: -1,
      message: "".concat(t)
    }
  } finally {
    i.emitChange(), Q.default.track(ef.AnalyticEvents.SOUNDSHARE_ENABLE, e)
  }
}
class tT extends S.default.Store {
  initialize() {
    eC.on(m.MediaEngineEvent.Connection, e => {
      let {
        maxSyncDelayOverride: t
      } = k.default.getCurrentConfig({
        location: "f627ab_3"
      }, {
        autoTrackExposure: !1
      });
      t > 0 && eC.setMaxSyncDelayOverride(t), e3(e), e5(e), e9(e);
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
      } = L.default.getCurrentConfig({
        location: "f627ab_10"
      }, {
        autoTrackExposure: !0
      });
      a && e.setExperimentFlag(e_.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
      let {
        allowSettingFullbandAndroid: o
      } = w.default.getCurrentConfig({
        location: "f627ab_14"
      }, {
        autoTrackExposure: !0
      });
      if (o && eC.setHasFullbandPerformance((0, D.hasPerformanceForKrispFullband)()), (0, N.default)(i)) {
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
      e.on(m.BaseConnectionEvent.Speaking, (t, n) => {
        I.default.dispatch({
          type: "SPEAKING",
          context: e.context,
          userId: t,
          speakingFlags: n
        })
      }), e.context === e_.MediaEngineContextTypes.DEFAULT && (ek = !1, e.on(m.BaseConnectionEvent.SpeakingWhileMuted, () => {
        ek = !0, i.emitChange()
      })), e.on(m.BaseConnectionEvent.DesktopSourceEnd, () => {
        I.default.dispatch({
          type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
          settings: {
            context: e.context
          }
        })
      }), e.on(m.BaseConnectionEvent.SoundshareAttached, () => {
        (null == s ? void 0 : s.desktopSource) != null && Q.default.track(ef.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, P.default)(null == s ? void 0 : s.desktopSource))
      }), e.on(m.BaseConnectionEvent.SoundshareFailed, e => {
        let {
          failureCode: t,
          failureReason: n,
          willRetry: i
        } = e;
        e8(null == s ? void 0 : s.desktopSource, t, n, i)
      }), e.on(m.BaseConnectionEvent.SoundshareSpeaking, () => {
        (null == s ? void 0 : s.desktopSource) != null && (Q.default.track(ef.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, P.default)(null == s ? void 0 : s.desktopSource)), null != el.default.getHookError(ef.MediaEngineHookTypes.SOUND) && I.default.wait(() => I.default.dispatch({
          type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
        })))
      });
      let l = new g.Timeout;
      e.on(m.BaseConnectionEvent.SoundshareTrace, e => {
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
            (null == s ? void 0 : s.desktopSource) != null && (e8(null == s ? void 0 : s.desktopSource, n, t, i), !i && (l.stop(), I.default.wait(() => I.default.dispatch({
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
        (null == s ? void 0 : s.desktopSource) != null && Q.default.track(ef.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
          backend: e,
          format: t,
          framebuffer_format: n,
          sample_count: i,
          success: r,
          reinitialization: a,
          ...(0, P.default)(null == s ? void 0 : s.desktopSource)
        })
      }), e.on(m.BaseConnectionEvent.NoiseCancellationError, e => {
        em.warn("noisecancellererror event: ".concat(e)), ez = !0, Q.default.track(ef.AnalyticEvents.VOICE_PROCESSING, {
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
        em.warn("voiceactivitydetectorerror event: ".concat(e)), Q.default.track(ef.AnalyticEvents.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), I.default.dispatch({
          type: "AUDIO_SET_MODE",
          context: e_.MediaEngineContextTypes.DEFAULT,
          mode: ef.InputModes.VOICE_ACTIVITY,
          options: {
            ...e4(e_.MediaEngineContextTypes.DEFAULT).modeOptions,
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
      }), e.setBitRate(er.default.bitrate), e.applyVideoQualityMode(ed.default.mode)
    }), eC.on(m.MediaEngineEvent.DeviceChange, (e, t, n) => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_DEVICES",
        inputDevices: e,
        outputDevices: t,
        videoDevices: n
      })
    }), eC.on(m.MediaEngineEvent.VolumeChange, (e, t) => {
      I.default.dispatch({
        type: "AUDIO_VOLUME_CHANGE",
        inputVolume: e,
        outputVolume: t
      })
    }), eC.on(m.MediaEngineEvent.DesktopSourceEnd, () => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: null
      })
    }), eC.on(m.MediaEngineEvent.AudioPermission, e => {
      eQ = !0, I.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "audio",
        granted: e
      })
    }), eC.on(m.MediaEngineEvent.VideoPermission, e => {
      I.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "video",
        granted: e
      })
    }), eC.on(m.MediaEngineEvent.WatchdogTimeout, async () => {
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
      em.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), Q.default.track(ef.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
        minidump_submission_error: e
      })
    }), eC.on(m.MediaEngineEvent.VideoInputInitialized, e => {
      Q.default.track(ef.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
        device_name: e.description.name,
        time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * J.default.Millis.SECOND),
        timed_out: e.initializationTimerExpired,
        activity: e.entropy
      })
    }), eC.on(m.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
      I.default.dispatch({
        type: "CLIPS_RESTART"
      })
    }), eC.on(m.MediaEngineEvent.ClipsInitFailure, (e, t) => {
      I.default.wait(() => {
        I.default.dispatch({
          type: "CLIPS_INIT_FAILURE",
          errMsg: e,
          applicationName: t
        })
      })
    }), eC.on(m.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
      var n, i;
      (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == s ? void 0 : null === (i = s.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && v.cancelAttachToProcess(t), a = null)
    }), tn.reset(), ! function() {
      var e;
      let t = T.default.get("audio");
      null != t && (T.default.set(eT, {
          [e_.MediaEngineContextTypes.DEFAULT]: t
        }), T.default.remove("audio")), ev = null !== (e = T.default.get(eT)) && void 0 !== e ? e : {}, p.each(ev, e => {
          if (p.defaultsDeep(e, eI()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, en.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
            var t;
            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
          }(0, $.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.av1EnabledSettingVersion && (e.av1EnabledSettingVersion = 1, e.av1Enabled = !0)
        }),
        function() {
          let e = e4();
          eC.setAudioInputDevice(e.inputDeviceId), eC.setAudioOutputDevice(e.outputDeviceId), e7(), eC.setInputVolume(e.inputVolume), eC.setOutputVolume(e.outputVolume), eC.setH264Enabled(e.openH264), eC.setAv1Enabled(e.av1Enabled), eC.setAecDump(e.aecDumpEnabled)
        }()
    }(), !(0, $.isDesktop)() || __OVERLAY__ || eY || eW ? (0, $.isWeb)() && eC.supports(e_.Features.NOISE_CANCELLATION) ? (eW = !0, i.emitChange()) : (0, $.isWeb)() && ti({
      noiseCancellation: !1
    }) : (eY = !0, th()), (0, $.isMac)() && eC.supports(e_.Features.SOUNDSHARE) ? eC.getSoundshareStatus().then(e => {
      tS(e)
    }).catch(e => {
      em.warn("Failed to check if soundshare is enabled: ".concat(e))
    }) : eq = ef.SoundshareEnableState.ENABLED, td(), e0 = {
      [e_.Features.VIDEO]: eC.supports(e_.Features.VIDEO),
      [e_.Features.DESKTOP_CAPTURE]: eC.supports(e_.Features.DESKTOP_CAPTURE),
      [e_.Features.HYBRID_VIDEO]: eC.supports(e_.Features.HYBRID_VIDEO)
    }, this.waitFor(ei.default, es.default, ea.default, el.default, eu.default, ec.default, K.default.storage, X.default, eo.default, R.default)
  }
  supports(e) {
    return eC.supports(e)
  }
  supportsInApp(e) {
    return e0[e] || eC.supports(e)
  }
  isSupported() {
    return eC.supported()
  }
  isExperimentalEncodersSupported() {
    return eC.supports(e_.Features.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return eC.supports(e_.Features.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return eW || !1
  }
  isNoiseCancellationError() {
    return ez
  }
  isAutomaticGainControlSupported() {
    return eC.supports(e_.Features.AUTOMATIC_GAIN_CONTROL)
  }
  isAdvancedVoiceActivitySupported() {
    return eW || !1
  }
  isAecDumpSupported() {
    return eC.supports(e_.Features.AEC_DUMP)
  }
  isSimulcastSupported() {
    return eC.supports(e_.Features.VIDEO) && eC.supports(e_.Features.SIMULCAST)
  }
  getAecDump() {
    return e4().aecDumpEnabled
  }
  getMediaEngine() {
    return eC
  }
  getVideoComponent() {
    return eC.supports(e_.Features.DIRECT_VIDEO) && eC.setUseDirectVideo(!0), eC.Video
  }
  getCameraComponent() {
    return eC.supports(e_.Features.DIRECT_VIDEO) && eC.setUseDirectVideo(!0), eC.Camera
  }
  isEnabled() {
    return eR
  }
  isMute() {
    return this.isSelfMute() || eL
  }
  isDeaf() {
    return this.isSelfDeaf() || eU
  }
  hasContext(e) {
    return null != ev[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.MediaEngineContextTypes.DEFAULT;
    return e === e_.MediaEngineContextTypes.DEFAULT && eb
  }
  isSelfMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.MediaEngineContextTypes.DEFAULT;
    return !this.isEnabled() || e4(e).mute || !K.default.didHavePermission(ep.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === e_.MediaEngineContextTypes.DEFAULT && eM
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
    return eG && eF
  }
  isVideoAvailable() {
    return Object.values(eP).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.MediaEngineContextTypes.STREAM;
    return eO === e && null != s
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.MediaEngineContextTypes.STREAM;
    return eO === t && null != s && (null === (e = s.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.MediaEngineContextTypes.DEFAULT;
    return e !== ei.default.getId() && (e4(t).localMutes[e] || !1)
  }
  supportsDisableLocalVideo() {
    return eC.supports(e_.Features.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e4(n).disabledLocalVideos[e]) && void 0 !== t && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e4(n).videoToggleStateMap[e]) && void 0 !== t ? t : ef.VideoToggleState.NONE
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
    return eX
  }
  isNativeAudioPermissionReady() {
    return eQ
  }
  getGoLiveSource() {
    return s
  }
  getGoLiveContext() {
    return eO
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.MediaEngineContextTypes.DEFAULT,
      n = e4(t).localPans[e];
    return null != n ? n : eg
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
    return p.each(ev, (t, n) => {
      let {
        mode: i,
        modeOptions: {
          shortcut: r
        }
      } = t;
      i === ef.InputModes.PUSH_TO_TALK && eA.has(n) && (e[n] = r)
    }), e
  }
  getInputDeviceId() {
    return to(eD, e4().inputDeviceId)
  }
  getOutputDeviceId() {
    return to(ey, e4().outputDeviceId)
  }
  getVideoDeviceId() {
    return to(eP, e4().videoDeviceId)
  }
  getInputDevices() {
    return eD
  }
  getOutputDevices() {
    return ey
  }
  getVideoDevices() {
    return eP
  }
  getEchoCancellation() {
    let e = e4();
    return es.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
  }
  getH265Enabled() {
    return e4().h265Enabled
  }
  getLoopback() {
    return eC.getLoopback()
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
    return eC.getDebugLogging()
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
    return eC.getAudioSubsystem()
  }
  getSettings() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.MediaEngineContextTypes.DEFAULT;
    return e4(e)
  }
  getState() {
    return {
      settingsByContext: ev,
      inputDevices: eD,
      outputDevices: ey,
      appSupported: e0,
      krispModuleLoaded: eW,
      goLiveSource: s,
      goLiveContext: eO
    }
  }
  getInputDetected() {
    return eV
  }
  getNoInputDetectedNotice() {
    return eH
  }
  getPacketDelay() {
    return $.isPlatformEmbedded || this.getMode() !== ef.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    eC.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return eN
  }
  getVideoHook() {
    return e4().videoHook
  }
  supportsVideoHook() {
    return eC.supports(e_.Features.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = e4().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == e || e)
  }
  supportsExperimentalSoundshare() {
    return eC.supports(e_.Features.EXPERIMENTAL_SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, eE.WINDOWS_SOUNDSHARE_VERSION)
  }
  getOpenH264() {
    return e4().openH264
  }
  getAv1Enabled() {
    return e4().av1Enabled
  }
  getEverSpeakingWhileMuted() {
    return ek
  }
  getSoundshareEnabled() {
    return eq
  }
  supportsEnableSoundshare() {
    return (0, $.isMac)() && eC.supports(e_.Features.SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, eE.DARWIN_SOUNDSHARE_VERSION) && !(_.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, eE.DARWIN_SCKIT_AUDIO_VERSION) && tt(!1))
  }
  supportsScreenSoundshare() {
    return (0, $.isMac)() && eC.supports(e_.Features.SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, eE.DARWIN_SCKIT_AUDIO_VERSION) && tt(!1) || (0, $.isWindows)() && eC.supports(e_.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
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
    let n = eC.getSupportedSecureFramesProtocolVersion(),
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
tT.displayName = "MediaEngineStore";
var tg = i = new tT(I.default, {
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
    }), eC.eachConnection(e5))
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      if (r === t.sessionId) {
        eL = t.mute || t.suppress, eU = t.deaf, eC.eachConnection(e5);
        let e = null != t.guildId && null != t.channelId && null != eK && eK !== t.channelId,
          n = !e && eG;
        return e7(n), eK = t.channelId, !0
      }
      return !__OVERLAY__ && t.userId === ei.default.getId() && null == eu.default.getChannelId() && e7(!1, null), e
    }, !1)
  },
  CONNECTION_OPEN: function(e) {
    r = e.sessionId, eL = !1, eU = !1, (0, z.shouldReadWriteAudioSettings)() && tl()
  },
  CONNECTION_CLOSED: function() {
    r = null
  },
  RTC_CONNECTION_STATE: function(e) {
    switch (e.state) {
      case ef.RTCConnectionStates.CONNECTING:
        tr();
        break;
      case ef.RTCConnectionStates.RTC_CONNECTING:
        eB = !1, eH = !1;
        break;
      case ef.RTCConnectionStates.RTC_CONNECTED:
        e7();
        break;
      case ef.RTCConnectionStates.DISCONNECTED:
        (function() {
          if (0 === eZ.size) return;
          let e = e_.MediaEngineContextTypes.DEFAULT,
            {
              disabledLocalVideos: t
            } = e4(e);
          eZ.forEach(n => {
            f(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eC.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
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
    eb = t, eC.eachConnection(e5)
  },
  AUDIO_TOGGLE_SELF_MUTE: function(e) {
    let {
      context: t
    } = e, {
      mute: n,
      deaf: i
    } = e4(t);
    if (t === e_.MediaEngineContextTypes.DEFAULT && (K.default.requestPermission(ep.NativePermissionTypes.AUDIO), eM)) return !1;
    !(n = !i && !n) && (i = !1), ti({
      mute: n,
      deaf: i
    }, t), eC.eachConnection(e5)
  },
  AUDIO_TOGGLE_SELF_DEAF: function(e) {
    let {
      context: t
    } = e, n = e4(t);
    ti({
      deaf: !n.deaf
    }, t), eC.eachConnection(e5)
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
    }, t), eC.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
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
    let p = c === ef.VideoToggleState.DISABLED,
      {
        disabledLocalVideos: h
      } = e4(l),
      _ = null !== (t = h[u]) && void 0 !== t && t,
      S = eZ.has(u),
      m = c === ef.VideoToggleState.AUTO_ENABLED || c === ef.VideoToggleState.MANUAL_ENABLED;
    em.info("disableVideo=".concat(p, " currentlyDisabled=").concat(_, " currentlyAutoDisabled=").concat(S, ", isVideoShown=").concat(m)), f(!(S && !_), "If you are auto-disabled, then you are also disabled.");
    let T = p !== _,
      g = l === e_.MediaEngineContextTypes.DEFAULT,
      I = E && T && g,
      C = d && T && g;
    em.info("changed=".concat(T, " isDefaultContext=").concat(g, " isUpdateCausedByVideoHealthManager=").concat(I, " isManualToggleByUser=").concat(C));
    let {
      videoToggleStateMap: v
    } = e4(l);
    if (v[u] === ef.VideoToggleState.AUTO_PROBING && c === ef.VideoToggleState.AUTO_ENABLED && (0, W.default)(u, p ? e_.VideoToggleReason.AUTO_DISABLE : e_.VideoToggleReason.AUTO_ENABLE, m), v[u] = c, ti({
        videoToggleStateMap: v
      }, l, d), c === ef.VideoToggleState.AUTO_PROBING ? null === (n = eu.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = eu.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !eJ && (em.info("isAutoDisableAllowed=".concat(eJ, " - disabling VideoHealthManager")), null === (s = eu.default.getRTCConnection()) || void 0 === s || null === (r = s.getVideoHealthManager()) || void 0 === r || r.disable()), I) {
      if (!p && !S || p && !eJ) return;
      (0, W.default)(u, p ? e_.VideoToggleReason.AUTO_DISABLE : e_.VideoToggleReason.AUTO_ENABLE, m), p ? eZ.add(u) : eZ.delete(u)
    } else C && (S && !p ? (em.info("disallowing auto-disable for this session because of manual override by user"), eJ = !1, null === (o = eu.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, W.default)(u, e_.VideoToggleReason.MANUAL_REENABLE, m)) : (0, W.default)(u, p ? e_.VideoToggleReason.MANUAL_DISABLE : e_.VideoToggleReason.MANUAL_ENABLE, m));
    g && !p && eZ.delete(u), p ? h[u] = !0 : delete h[u], ti({
      disabledLocalVideos: h
    }, l, d), eC.eachConnection(e => {
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
    if (n === ei.default.getId()) return;
    let r = t === e_.MediaEngineContextTypes.STREAM,
      s = r ? e_.DEFAULT_STREAM_VOLUME : e_.DEFAULT_VOLUME,
      {
        localVolumes: a
      } = e4(t);
    i === s ? delete a[n] : a[n] = i, ti({
      localVolumes: a
    }, t), eC.eachConnection(e => e.setLocalVolume(n, i), t)
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
    }, t), eC.eachConnection(e => e.setLocalPan(n, i, r), t)
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
    }, t), eC.eachConnection(e3), tn.update()
  },
  AUDIO_SET_INPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    ti({
      inputVolume: e6(t)
    }), eC.setInputVolume(t)
  },
  AUDIO_SET_OUTPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    ti({
      outputVolume: t
    }), eC.setOutputVolume(t)
  },
  AUDIO_SET_INPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ti({
      inputDeviceId: t = to(eD, t)
    }), eC.setAudioInputDevice(t)
  },
  AUDIO_SET_OUTPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ti({
      outputDeviceId: t = to(ey, t)
    }), eC.setAudioOutputDevice(t)
  },
  AUDIO_SET_ECHO_CANCELLATION: function(e) {
    let t = ti({
      echoCancellation: e.enabled
    });
    eC.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tE(), tf(e.location)
  },
  MEDIA_ENGINE_SET_H265: function(e) {
    let t = ti({
      h265Enabled: e.enabled
    });
    eC.setH265Enabled(t.h265Enabled)
  },
  AUDIO_SET_LOOPBACK: function(e) {
    let {
      enabled: t
    } = e;
    return e$ = t, tE()
  },
  AUDIO_SET_NOISE_SUPPRESSION: function(e) {
    let t = ti({
      noiseSuppression: e.enabled
    });
    eC.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tE(), tf(e.location)
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
    let t = ti({
      automaticGainControl: e.enabled
    });
    eC.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tE(), tf(e.location)
  },
  AUDIO_SET_NOISE_CANCELLATION: function(e) {
    let t = ti({
      noiseCancellation: e.enabled
    });
    eC.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tE(), tf(e.location)
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
    ti({
      silenceWarning: e.enabled
    }), tn.update()
  },
  AUDIO_SET_DEBUG_LOGGING: function(e) {
    eC.setDebugLogging(e.enabled)
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
    eC.eachConnection(e => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers))
  },
  AUDIO_SET_QOS: function(e) {
    let {
      enabled: t
    } = e;
    ti({
      qos: t
    }), eC.eachConnection(e => e.setQoS(t))
  },
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: n,
      videoDevices: i
    } = e;
    ! function(e) {
      let t = eD;
      if (eD = ta(e, eS.default.Messages.NO_INPUT_DEVICES), !p.isEqual(eD, t)) {
        let e = e4(),
          t = to(eD, e.inputDeviceId);
        eC.setAudioInputDevice(t)
      }
    }(t), ! function(e) {
      let t = ey;
      if (ey = ta(e, eS.default.Messages.NO_OUTPUT_DEVICES), !p.isEqual(ey, t)) {
        let e = e4(),
          t = to(ey, e.outputDeviceId);
        eC.setAudioOutputDevice(t)
      }
    }(n), ! function(e) {
      eF = e.length > 0;
      let t = eP;
      if (eP = ta(e, eS.default.Messages.NO_VIDEO_DEVICES), eG && !p.isEqual(eP, t)) {
        var n;
        let e = void 0 !== eP[ew],
          i = ew === e_.DEFAULT_DEVICE_ID && (null === (n = t[e_.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
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
    T.default.remove(eT), location.reload()
  },
  AUDIO_INPUT_DETECTED: function(e) {
    let {
      inputDetected: t
    } = e;
    eV = t, !eB && eV && (eB = !0, tn.update())
  },
  AUDIO_SET_SUBSYSTEM: function(e) {
    eC.setAudioSubsystem(e.subsystem)
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
    eR = e.enabled, e.unmute && ti({
      mute: !1,
      deaf: !1
    }), eC.eachConnection(e5)
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
    let {
      enabled: t
    } = e;
    K.default.requestPermission(ep.NativePermissionTypes.CAMERA), e7(t)
  },
  MEDIA_ENGINE_PERMISSION: function(e) {
    let {
      kind: t,
      granted: n
    } = e;
    if (!n) switch (t) {
      case "audio":
        eR = !1, eC.eachConnection(e5);
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
      } = tu(d), null != e && tc(e, i)), (a = u) !== eO && (null != s && eC.setGoLiveSource(null, eO), eO = a);
      let f = u === e_.MediaEngineContextTypes.STREAM && eG;
      e7(f, {
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
        s = e === e_.MediaEngineContextTypes.STREAM && eG,
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
    } else e7(eG, null)
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ti({
      videoDeviceId: t = to(eP, t)
    }), e7()
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
    let t = ti({
      experimentalEncoders: e.enabled
    });
    eC.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
  },
  MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
    return eN !== e.required && (eN = e.required, !e.required && eC.interact(), !0)
  },
  USER_SETTINGS_MODAL_INIT: t_,
  USER_SETTINGS_MODAL_SET_SECTION: t_,
  CERTIFIED_DEVICES_SET: function() {
    return eC.eachConnection(e9), !1
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
    ev = t.settingsByContext, eD = t.inputDevices, ey = t.outputDevices, e0 = t.appSupported, eW = t.krispModuleLoaded, eO = t.goLiveContext
  },
  MEDIA_ENGINE_SET_OPEN_H264: function(e) {
    let {
      enabled: t
    } = e, n = ti({
      openH264: t
    });
    eC.setH264Enabled(n.openH264)
  },
  MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
    let {
      enabled: t
    } = e, n = ti({
      hardwareH264: t
    });
    eC.eachConnection(e => e.setHardwareH264(n.hardwareH264))
  },
  MEDIA_ENGINE_SET_AV1: function(e) {
    let {
      enabled: t
    } = e, n = ti({
      av1Enabled: t
    });
    eC.setAv1Enabled(n.av1Enabled)
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e, n = y.default.isEnabled();
    if (t === ef.AppStates.BACKGROUND && eG && !n) ex = !0, e7(!1);
    else {
      if (t !== ef.AppStates.ACTIVE || !ex) return !1;
      ex = !1, e7(!0)
    }
    return !0
  },
  SET_CHANNEL_BITRATE: function(e) {
    eC.eachConnection(t => t.setBitRate(e.bitrate))
  },
  SET_VAD_PERMISSION: function(e) {
    let {
      hasPermission: t
    } = e, n = !t;
    if (n === eM) return !1;
    eM = n, eC.eachConnection(e5)
  },
  SET_NATIVE_PERMISSION: function(e) {
    let {
      state: t,
      permissionType: n
    } = e, i = t === ep.NativePermissionStates.ACCEPTED;
    switch (n) {
      case ep.NativePermissionTypes.AUDIO:
        eQ = !0, eC.eachConnection(e5);
        break;
      case ep.NativePermissionTypes.CAMERA:
        !i && eG && e7(!1);
        break;
      default:
        return !1
    }
  },
  SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
    eC.eachConnection(t => t.applyVideoQualityMode(e.mode))
  },
  MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
    let {
      enabled: t
    } = e, n = ti({
      aecDumpEnabled: t
    });
    eC.setAecDump(n.aecDumpEnabled)
  },
  CHANNEL_DELETE: function() {
    if (!eG && null == s || null != eu.default.getRTCConnectionId()) return !1;
    e7(!1, null)
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
    return !!ez && (ez = !1, !0)
  },
  MEDIA_ENGINE_ENABLE_SOUNDSHARE: function() {
    tm(), ! function() {
      var e, t;
      let n = i.isSoundSharing(),
        r = null === (e = i.getGoLiveSource()) || void 0 === e ? void 0 : e.desktopSource;
      if (null != r) {
        let e = null !== (t = r.soundshareId) && void 0 !== t ? t : 0,
          s = i.getExperimentalSoundshare();
        n && eC.setSoundshareSource(e, s, eO)
      }
    }()
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    eC.applyMediaFilterSettings(t).finally(() => {
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
    if (!(0, z.shouldReadWriteAudioSettings)() || t !== eh.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
    tl(!0)
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
    null != a && a.desktopSource.id !== d.desktopSource.id && (eC.setClipsSource(null), (0, $.isWindows)() && null != a.desktopSource.soundshareId && v.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && tc(l, u), a = d;
    let {
      useQuartzCapturer: f
    } = x.default.getCurrentConfig({
      location: "f627ab_11"
    }, {
      autoTrackExposure: !1
    }), {
      hdrCaptureMode: E
    } = G.default.getCurrentConfig({
      location: "f627ab_12"
    }, {
      autoTrackExposure: !1
    }), p = e4().videoHook, h = eC.supports(e_.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
      videoHookStaleFrameTimeoutMs: _
    } = B.default.getConfig(h && p, "e225cfdf5_vh2", !1), {
      graphicsCaptureStaleFrameTimeoutMs: S
    } = Y.default.getConfig(h && te(), "e225cfdf5_wgc2", !1);
    eC.setClipsSource({
      desktopDescription: {
        id: a.desktopSource.id,
        soundshareId: a.desktopSource.soundshareId,
        useVideoHook: p,
        useGraphicsCapture: te(),
        useLoopback: i.getExperimentalSoundshare(),
        useQuartzCapturer: f,
        allowScreenCaptureKit: tt(!1),
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
    !1 === t.decoupledClipsEnabled && (a = null, eC.setClipsSource(null))
  }
})