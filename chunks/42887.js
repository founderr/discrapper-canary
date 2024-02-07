"use strict";
let i, s, r, a;
n.r(t), n.d(t, {
  default: function() {
    return tv
  }
}), n("222007"), n("808653"), n("506083"), n("424973"), n("256955");
var o, l, u, d, c = n("627445"),
  f = n.n(c),
  _ = n("917351"),
  h = n.n(_),
  g = n("570277"),
  m = n.n(g),
  E = n("446674"),
  p = n("773364"),
  v = n("95410"),
  S = n("862337"),
  T = n("913144"),
  I = n("49671"),
  C = n("6193"),
  A = n("386045"),
  y = n("18346"),
  N = n("605250"),
  R = n("808122"),
  D = n("733589"),
  O = n("933034"),
  P = n("746800"),
  b = n("584687"),
  L = n("636243"),
  M = n("705500"),
  U = n("238847"),
  w = n("981699"),
  k = n("140622"),
  V = n("16001"),
  G = n("631508"),
  F = n("368765"),
  x = n("403770"),
  B = n("940146"),
  H = n("353500"),
  Y = n("103979"),
  j = n("665862"),
  W = n("122530"),
  K = n("928609"),
  z = n("891760"),
  q = n("801290"),
  X = n("374363"),
  Q = n("599110"),
  Z = n("922932"),
  J = n("718517"),
  $ = n("773336"),
  ee = n("286235"),
  et = n("50885"),
  en = n("13798"),
  ei = n("271938"),
  es = n("366679"),
  er = n("881719"),
  ea = n("42203"),
  eo = n("760190"),
  el = n("855867"),
  eu = n("945956"),
  ed = n("568307"),
  ec = n("123647"),
  ef = n("49111"),
  e_ = n("706530"),
  eh = n("180524"),
  eg = n("397336"),
  em = n("353927"),
  eE = n("782340");
let ep = new N.default("MediaEngineStore");
(u = o || (o = {}))[u.DETACHED = 0] = "DETACHED", u[u.WAITING = 1] = "WAITING", u[u.ATTACHED = 2] = "ATTACHED", u[u.STARTED = 3] = "STARTED", u[u.PLAYING = 4] = "PLAYING", u[u.SILENCE = 5] = "SILENCE", (d = l || (l = {}))[d.FAILED = -1] = "FAILED", d[d.OK = 0] = "OK", d[d.ACE_INSTALL_FAILED = 4] = "ACE_INSTALL_FAILED", d[d.ACE_NOT_AUTHORIZED = 5] = "ACE_NOT_AUTHORIZED";
let ev = "MediaEngineStore",
  eS = {
    left: 1,
    right: 1
  };

function eT() {
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
    inputVolume: em.DEFAULT_VOLUME,
    outputVolume: em.DEFAULT_VOLUME,
    inputDeviceId: em.DEFAULT_DEVICE_ID,
    outputDeviceId: em.DEFAULT_DEVICE_ID,
    videoDeviceId: em.DEFAULT_DEVICE_ID,
    qos: !1,
    qosMigrated: !1,
    videoHook: eI.supports(em.Features.VIDEO_HOOK),
    experimentalSoundshare2: null,
    openH264: !0,
    av1Enabled: !0,
    h265Enabled: !0,
    vadThrehsoldMigrated: !1,
    aecDumpEnabled: !1
  };
  return e
}
let eI = (0, p.initializeMediaEngine)((0, p.determineMediaEngine)()),
  eC = {},
  eA = new Set([em.MediaEngineContextTypes.DEFAULT]),
  ey = eI.supports(em.Features.AUTO_ENABLE),
  eN = !1,
  eR = em.MediaEngineContextTypes.STREAM,
  eD = {
    [em.DEFAULT_DEVICE_ID]: tr(eE.default.Messages.NO_INPUT_DEVICES)
  },
  eO = {
    [em.DEFAULT_DEVICE_ID]: tr(eE.default.Messages.NO_OUTPUT_DEVICES)
  },
  eP = {
    [em.DEFAULT_DEVICE_ID]: tr(eE.default.Messages.NO_VIDEO_DEVICES)
  },
  eb = !1,
  eL = !1,
  eM = !1,
  eU = !1,
  ew = !1,
  ek = em.DISABLED_DEVICE_ID,
  eV = !1,
  eG = !1,
  eF = !1,
  ex = null,
  eB = !1,
  eH = !1,
  eY = !1,
  ej = !1,
  eW = !1,
  eK = null,
  ez = !1,
  eq = ef.SoundshareEnableState.NOT_ENABLED,
  eX = !1,
  eQ = !1;
K.default.hasPermission(eh.NativePermissionTypes.AUDIO, {
  showAuthorizationError: !1
}), K.default.hasPermission(eh.NativePermissionTypes.CAMERA, {
  showAuthorizationError: !1
});
let eZ = new Set,
  eJ = !1,
  e$ = !1,
  e0 = {},
  e1 = {},
  e2 = 5 * J.default.Millis.SECOND;

function e3() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT,
    t = eC[e];
  return null == t && (t = eT(), eC[e] = t), t
}

function e4(e) {
  let t = e3(e.context);
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
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.DEFAULT_VOLUME;
  return h.clamp(e, 0, t)
}

function e9(e) {
  let t = e3(e.context),
    n = !ey || t.mute || t.deaf;
  e.context === em.MediaEngineContextTypes.DEFAULT && (n = n || eb || eL || eM || !K.default.didHavePermission(eh.NativePermissionTypes.AUDIO)), e.setSelfMute(n), e.setSelfDeaf(t.deaf)
}

function e8() {
  var e, t, n;
  let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew,
    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
    o = r;
  if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, $.isWindows)() && C.cancelAttachToProcess(o.desktopSource.soundshareId), eI.setGoLiveSource(null, eR)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eI.setGoLiveSource(null, eR), (ew || s) && (ek = (ew = s) ? to(eP, e3().videoDeviceId) : em.DISABLED_DEVICE_ID, eI.setVideoInputDevice(ek)), r = a, null != a) {
    let e = {
      resolution: a.quality.resolution,
      frameRate: a.quality.frameRate
    };
    if (null != a.desktopSource) {
      let {
        useQuartzCapturer: t
      } = G.default.getCurrentConfig({
        location: "f627ab_1"
      }, {
        autoTrackExposure: !1
      }), {
        hdrCaptureMode: n
      } = w.default.getCurrentConfig({
        location: "f627ab_2"
      }, {
        autoTrackExposure: !1
      }), s = e3().videoHook, r = eI.supports(em.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
        videoHookStaleFrameTimeoutMs: o
      } = B.default.getConfig(r && s, "e225cfdf5_vh1", !0), {
        graphicsCaptureStaleFrameTimeoutMs: l
      } = j.default.getConfig(r && te(), "e225cfdf5_wgc2", !0);
      eI.setGoLiveSource({
        desktopDescription: {
          id: a.desktopSource.id,
          soundshareId: a.desktopSource.soundshareId,
          useVideoHook: s,
          useGraphicsCapture: te(),
          useLoopback: i.getExperimentalSoundshare(),
          useQuartzCapturer: t,
          allowScreenCaptureKit: tt(!0),
          videoHookStaleFrameTimeoutMs: o,
          graphicsCaptureStaleFrameTimeoutMs: l,
          hdrCaptureMode: n
        },
        quality: e
      }, eR)
    }
    null != a.cameraSource && eI.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: a.cameraSource.videoDeviceGuid,
        audioDeviceGuid: a.cameraSource.audioDeviceGuid
      },
      quality: e
    }, eR)
  }
}

function e7(e, t, n, i) {
  var s;
  let r = null !== (s = null == e ? void 0 : e.soundshareSession) && void 0 !== s ? s : "";
  null == e1[r] && (e1[r] = new Set);
  let a = null != t && !e1[r].has(t);
  a && e1[r].add(t), (null == t || a) && Q.default.track(ef.AnalyticEvents.SOUNDSHARE_FAILED, {
    soundshare_failure_code: t,
    soundshare_failure_reason: n,
    soundshare_failure_will_retry: i,
    ...(0, O.default)(e)
  })
}

function e5(e) {
  let t = e3(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(er.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(er.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(er.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, $.isWeb)()) {
    let n = t.noiseCancellation ? -150 : -100;
    e.setSilenceThreshold(n)
  }
}

function te() {
  return (0, $.isWindows)() && m.satisfies(null === I.default || void 0 === I.default ? void 0 : I.default.os.release, e_.WINDOWS_GRAPHICS_CAPTURE_VERSION)
}

function tt(e) {
  return !!((0, $.isMac)() && eI.supports(em.Features.SCREEN_CAPTURE_KIT) && m.satisfies(null === I.default || void 0 === I.default ? void 0 : I.default.os.release, e_.DARWIN_SCKIT_VERSION)) && F.default.getCurrentConfig({
    location: "screenCaptureKitEnabled"
  }, {
    autoTrackExposure: e
  }).allowScreenCaptureKit
}
let tn = new class {
  start() {
    !this.started && (this.started = !0, eI.on(p.MediaEngineEvent.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eI.removeListener(p.MediaEngineEvent.Silence, this.handleSilence), T.default.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = e3();
    !eB && eu.default.getState() === ef.RTCConnectionStates.RTC_CONNECTED && e.mode === ef.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    this.noVoiceTimeout = 5e3, this.voiceTimeout = 1500, this.started = !1, this.handleSilence = e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (T.default.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (eH = !0))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    }
  }
};

function ti(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT,
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = e3(t);
  return Object.assign(i, e), !__OVERLAY__ && n && v.default.set(ev, eC), i
}

function ts() {
  !ey && eI.enable().then(() => T.default.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: !0,
    unmute: !1
  }))
}

function tr(e) {
  return {
    id: em.DEFAULT_DEVICE_ID,
    index: 0,
    name: e,
    disabled: !0
  }
}

function ta(e, t) {
  if (0 === e.length) {
    let e = tr(t);
    return {
      [e.id]: e
    }
  }
  return h(e).map(e => ({
    id: e.id,
    index: e.index,
    name: e.name,
    disabled: !1
  })).keyBy("id").value()
}

function to(e, t) {
  var n;
  let i = null !== (n = e[t]) && void 0 !== n ? n : h(e).values().first();
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
    let s = e === eg.ProtoAudioSettingsContextTypes.USER ? em.MediaEngineContextTypes.DEFAULT : em.MediaEngineContextTypes.STREAM,
      r = s === em.MediaEngineContextTypes.STREAM ? em.DEFAULT_STREAM_VOLUME : em.DEFAULT_VOLUME,
      a = null !== (t = i[e]) && void 0 !== t ? t : {},
      {
        localMutes: o,
        localVolumes: l
      } = e3(s);
    for (let [e, t] of Object.entries(a)) null == (0, q.getPendingAudioSettings)(e, s) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== r ? l[e] = t.volume : delete l[e], eI.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, s));
    if (n) {
      let e = new Set([...Object.keys(o), ...Object.keys(l)]);
      for (let t of e) null == a[t] && (delete o[t], delete l[t], eI.eachConnection(e => {
        e.setLocalVolume(t, r), e.setLocalMute(t, !1)
      }, s))
    }
    ti({
      localMutes: o,
      localVolumes: l
    }, s)
  }
}

function tu(e) {
  if (null == i) return ep.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
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

function td(e, t) {
  (0, $.isWindows)() && C.attachToProcess(e, {
    soundshare_session: t
  }).then(t => {
    null != t && !ed.default.shouldContinueWithoutElevatedProcessForPID(e) && T.default.wait(() => {
      T.default.dispatch({
        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
        errorMessage: t
      })
    })
  })
}

function tc(e) {
  let t = e3();
  Q.default.track(ef.AnalyticEvents.VOICE_PROCESSING, {
    echo_cancellation: t.echoCancellation,
    noise_cancellation: t.noiseCancellation,
    noise_suppression: t.noiseSuppression,
    automatic_gain_control: t.automaticGainControl,
    location: e
  })
}

function tf() {
  let e = e3(),
    t = e.inputDeviceId,
    n = er.default.hasEchoCancellation(t) || e.echoCancellation,
    i = er.default.hasNoiseSuppression(t) || e.noiseSuppression,
    s = er.default.hasAutomaticGainControl(t) || e.automaticGainControl,
    r = e.noiseCancellation;
  eI.setLoopback(e$, {
    echoCancellation: n,
    noiseSuppression: i,
    automaticGainControl: s,
    noiseCancellation: r
  })
}

function t_() {
  return eW || !1
}
async function th() {
  try {
    await et.default.ensureModule("discord_krisp"), et.default.requireModule("discord_krisp"), eW = !0, i.emitChange()
  } catch (t) {
    ep.warn("Failed to load Krisp module: ".concat(t.message)), ee.default.captureException(t);
    let e = em.NoiseCancellerError.INITIALIZED;
    if (t.message.includes(": ")) {
      let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
      e = isNaN(n) || 0 === n ? em.NoiseCancellerError.INITIALIZED : n
    }
    Q.default.track(ef.AnalyticEvents.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), ti({
      noiseCancellation: !1
    })
  } finally {
    ej = !1
  }
}

function tg(e) {
  let {
    section: t
  } = e;
  return t === ef.UserSettingsSections.VOICE && ts(), !1
}

function tm(e) {
  eq = 0 === e ? ef.SoundshareEnableState.ENABLED : 5 === e ? ef.SoundshareEnableState.ENABLING : -1 === e || 4 === e ? ef.SoundshareEnableState.FAILED_TO_ENABLE : ef.SoundshareEnableState.NOT_ENABLED
}
async function tE() {
  if (eq === ef.SoundshareEnableState.ENABLING) return;
  eq = ef.SoundshareEnableState.ENABLING;
  let e = {};
  try {
    let t = await eI.enableSoundshare();
    tm(t.code), e = {
      status_code: t.code,
      message: t.message
    }
  } catch (t) {
    ep.warn("Failed to enable macOS soundshare: ".concat(t)), tm(-1), e = {
      status_code: -1,
      message: "".concat(t)
    }
  } finally {
    i.emitChange(), Q.default.track(ef.AnalyticEvents.SOUNDSHARE_ENABLE, e)
  }
}
class tp extends E.default.Store {
  initialize() {
    eI.on(p.MediaEngineEvent.Connection, e => {
      let {
        maxSyncDelayOverride: t
      } = V.default.getCurrentConfig({
        location: "f627ab_3"
      }, {
        autoTrackExposure: !1
      });
      t > 0 && eI.setMaxSyncDelayOverride(t), e4(e), e9(e), e5(e);
      let n = e3();
      e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
      let {
        useExperimentalRateControl: s
      } = H.default.getCurrentConfig({
        location: "f627ab_4"
      }, {
        autoTrackExposure: !1
      });
      s && e.setExperimentFlag(em.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
      {
        let {
          signalH265DesktopDecode: t
        } = L.default.getCurrentConfig({
          location: "MediaEngineStore_setupMediaEngine"
        }, {
          autoTrackExposure: !0
        });
        t && e.setExperimentFlag(em.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0);
        let {
          signalH265SupportMacOS: n
        } = M.default.getCurrentConfig({
          location: "f627ab_8"
        }, {
          autoTrackExposure: !0
        });
        n && e.setExperimentFlag(em.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
        let {
          signalH265SupportNvenc: i
        } = U.default.getCurrentConfig({
          location: "f627ab_9"
        }, {
          autoTrackExposure: !0
        });
        i && e.setExperimentFlag(em.ExperimentFlags.SIGNAL_H265_SUPPORT, !0)
      }
      let {
        signalAV1Support: a
      } = P.default.getCurrentConfig({
        location: "f627ab_10"
      }, {
        autoTrackExposure: !0
      });
      a && e.setExperimentFlag(em.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
      let {
        allowSettingFullbandAndroid: o
      } = k.default.getCurrentConfig({
        location: "f627ab_14"
      }, {
        autoTrackExposure: !0
      });
      if (o && eI.setHasFullbandPerformance((0, R.hasPerformanceForKrispFullband)()), (0, y.default)(i)) {
        let t = A.default.getSettings();
        e.setExperimentFlag(em.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
        let {
          enableViewerClipping: n
        } = Y.default.getCurrentConfig({
          location: "f627ab_15"
        }, {
          autoTrackExposure: !1
        });
        e.setViewerSideClip(n), e.setClipsKeyFrameInterval(em.VIEWERSIDE_CLIP_KFI_MS)
      }
      for (let t of (n = e3(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== ei.default.getId() && e.setLocalMute(t, n.localMutes[t]);
      for (let t of Object.keys(n.localVolumes)) t !== ei.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
      for (let t of Object.keys(n.localPans)) {
        let i = n.localPans[t];
        e.setLocalPan(t, i.left, i.right)
      }
      for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
      e.on(p.BaseConnectionEvent.Speaking, (t, n) => {
        T.default.dispatch({
          type: "SPEAKING",
          context: e.context,
          userId: t,
          speakingFlags: n
        })
      }), e.context === em.MediaEngineContextTypes.DEFAULT && (eV = !1, e.on(p.BaseConnectionEvent.SpeakingWhileMuted, () => {
        eV = !0, i.emitChange()
      })), e.on(p.BaseConnectionEvent.DesktopSourceEnd, () => {
        T.default.dispatch({
          type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
          settings: {
            context: e.context
          }
        })
      }), e.on(p.BaseConnectionEvent.SoundshareAttached, () => {
        (null == r ? void 0 : r.desktopSource) != null && Q.default.track(ef.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, O.default)(null == r ? void 0 : r.desktopSource))
      }), e.on(p.BaseConnectionEvent.SoundshareFailed, e => {
        let {
          failureCode: t,
          failureReason: n,
          willRetry: i
        } = e;
        e7(null == r ? void 0 : r.desktopSource, t, n, i)
      }), e.on(p.BaseConnectionEvent.SoundshareSpeaking, () => {
        (null == r ? void 0 : r.desktopSource) != null && (Q.default.track(ef.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, O.default)(null == r ? void 0 : r.desktopSource)), null != el.default.getHookError(ef.MediaEngineHookTypes.SOUND) && T.default.wait(() => T.default.dispatch({
          type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
        })))
      });
      let l = new S.Timeout;
      e.on(p.BaseConnectionEvent.SoundshareTrace, e => {
        switch (e.type) {
          case "soundshare_attach_requested":
            l.start(e2, () => {
              T.default.dispatch({
                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                errorMessage: "Sound Hook Failed"
              })
            });
            break;
          case "soundshare_recv_failed":
            let t = e.reason,
              n = e.code,
              i = e.retry;
            (null == r ? void 0 : r.desktopSource) != null && (e7(null == r ? void 0 : r.desktopSource, n, t, i), !i && (l.stop(), T.default.wait(() => T.default.dispatch({
              type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
              errorMessage: t,
              errorCode: n
            }))));
            break;
          case "soundshare_state_transition":
            4 === e.newState && (l.stop(), T.default.wait(() => T.default.dispatch({
              type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
            })))
        }
      }), e.on(p.BaseConnectionEvent.InteractionRequired, e => {
        T.default.dispatch({
          type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
          required: e
        })
      }), e.on(p.BaseConnectionEvent.VideoHookInitialize, (e, t, n, i, s, a) => {
        (null == r ? void 0 : r.desktopSource) != null && Q.default.track(ef.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
          backend: e,
          format: t,
          framebuffer_format: n,
          sample_count: i,
          success: s,
          reinitialization: a,
          ...(0, O.default)(null == r ? void 0 : r.desktopSource)
        })
      }), e.on(p.BaseConnectionEvent.NoiseCancellationError, e => {
        ep.warn("noisecancellererror event: ".concat(e)), ez = !0, Q.default.track(ef.AnalyticEvents.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), T.default.dispatch({
          type: "AUDIO_SET_NOISE_SUPPRESSION",
          enabled: !0
        }), T.default.dispatch({
          type: "AUDIO_SET_NOISE_CANCELLATION",
          enabled: !1
        }), T.default.dispatch({
          type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
          code: e
        })
      }), e.on(p.BaseConnectionEvent.VoiceActivityDetectorError, e => {
        ep.warn("voiceactivitydetectorerror event: ".concat(e)), Q.default.track(ef.AnalyticEvents.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), T.default.dispatch({
          type: "AUDIO_SET_MODE",
          context: em.MediaEngineContextTypes.DEFAULT,
          mode: ef.InputModes.VOICE_ACTIVITY,
          options: {
            ...e3(em.MediaEngineContextTypes.DEFAULT).modeOptions,
            vadUseKrisp: !1
          }
        }), T.default.dispatch({
          type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
          code: e
        })
      }), e.on(p.BaseConnectionEvent.VideoState, t => {
        T.default.dispatch({
          type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
          videoState: t,
          context: e.context
        })
      }), e.on(p.BaseConnectionEvent.Destroy, () => {
        l.stop()
      }), e.setBitRate(es.default.bitrate), e.applyVideoQualityMode(ec.default.mode)
    }), eI.on(p.MediaEngineEvent.DeviceChange, (e, t, n) => {
      T.default.dispatch({
        type: "MEDIA_ENGINE_DEVICES",
        inputDevices: e,
        outputDevices: t,
        videoDevices: n
      })
    }), eI.on(p.MediaEngineEvent.VolumeChange, (e, t) => {
      T.default.dispatch({
        type: "AUDIO_VOLUME_CHANGE",
        inputVolume: e,
        outputVolume: t
      })
    }), eI.on(p.MediaEngineEvent.DesktopSourceEnd, () => {
      T.default.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: null
      })
    }), eI.on(p.MediaEngineEvent.AudioPermission, e => {
      eQ = !0, T.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "audio",
        granted: e
      })
    }), eI.on(p.MediaEngineEvent.VideoPermission, e => {
      T.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "video",
        granted: e
      })
    }), eI.on(p.MediaEngineEvent.WatchdogTimeout, async () => {
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
      ep.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), Q.default.track(ef.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
        minidump_submission_error: e
      })
    }), eI.on(p.MediaEngineEvent.VideoInputInitialized, e => {
      Q.default.track(ef.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
        device_name: e.description.name,
        time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * J.default.Millis.SECOND),
        timed_out: e.initializationTimerExpired,
        activity: e.entropy
      })
    }), eI.on(p.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
      T.default.dispatch({
        type: "CLIPS_RESTART"
      })
    }), eI.on(p.MediaEngineEvent.ClipsInitFailure, (e, t) => {
      T.default.wait(() => {
        T.default.dispatch({
          type: "CLIPS_INIT_FAILURE",
          errMsg: e,
          applicationName: t
        })
      })
    }), eI.on(p.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
      var n, i;
      (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == r ? void 0 : null === (i = r.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && C.cancelAttachToProcess(t), a = null)
    }), tn.reset(), ! function() {
      var e;
      let t = v.default.get("audio");
      null != t && (v.default.set(ev, {
          [em.MediaEngineContextTypes.DEFAULT]: t
        }), v.default.remove("audio")), eC = null !== (e = v.default.get(ev)) && void 0 !== e ? e : {}, h.each(eC, e => {
          if (h.defaultsDeep(e, eT()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, en.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
            var t;
            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
          }(0, $.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.av1EnabledSettingVersion && (e.av1EnabledSettingVersion = 1, e.av1Enabled = !0)
        }),
        function() {
          let e = e3();
          eI.setAudioInputDevice(e.inputDeviceId), eI.setAudioOutputDevice(e.outputDeviceId), e8(), eI.setInputVolume(e.inputVolume), eI.setOutputVolume(e.outputVolume), eI.setH264Enabled(e.openH264), eI.setAv1Enabled(e.av1Enabled), eI.setAecDump(e.aecDumpEnabled)
        }()
    }(), !(0, $.isDesktop)() || __OVERLAY__ || ej || eW ? (0, $.isWeb)() && eI.supports(em.Features.NOISE_CANCELLATION) ? (eW = !0, i.emitChange()) : (0, $.isWeb)() && ti({
      noiseCancellation: !1
    }) : (ej = !0, th()), (0, $.isMac)() && eI.supports(em.Features.SOUNDSHARE) ? eI.getSoundshareStatus().then(e => {
      tm(e)
    }).catch(e => {
      ep.warn("Failed to check if soundshare is enabled: ".concat(e))
    }) : eq = ef.SoundshareEnableState.ENABLED, e0 = {
      [em.Features.VIDEO]: eI.supports(em.Features.VIDEO),
      [em.Features.DESKTOP_CAPTURE]: eI.supports(em.Features.DESKTOP_CAPTURE),
      [em.Features.HYBRID_VIDEO]: eI.supports(em.Features.HYBRID_VIDEO)
    }, this.waitFor(ei.default, er.default, ea.default, el.default, eu.default, ed.default, K.default.storage, X.default, eo.default, A.default)
  }
  supports(e) {
    return eI.supports(e)
  }
  supportsInApp(e) {
    return e0[e] || eI.supports(e)
  }
  isSupported() {
    return eI.supported()
  }
  isExperimentalEncodersSupported() {
    return eI.supports(em.Features.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return eI.supports(em.Features.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return eW || !1
  }
  isNoiseCancellationError() {
    return ez
  }
  isAutomaticGainControlSupported() {
    return eI.supports(em.Features.AUTOMATIC_GAIN_CONTROL)
  }
  isAdvancedVoiceActivitySupported() {
    return eW || !1
  }
  isAecDumpSupported() {
    return eI.supports(em.Features.AEC_DUMP)
  }
  isSimulcastSupported() {
    return eI.supports(em.Features.VIDEO) && eI.supports(em.Features.SIMULCAST)
  }
  getAecDump() {
    return e3().aecDumpEnabled
  }
  getMediaEngine() {
    return eI
  }
  getVideoComponent() {
    return eI.supports(em.Features.DIRECT_VIDEO) && eI.setUseDirectVideo(!0), eI.Video
  }
  getCameraComponent() {
    return eI.supports(em.Features.DIRECT_VIDEO) && eI.setUseDirectVideo(!0), eI.Camera
  }
  isEnabled() {
    return ey
  }
  isMute() {
    return this.isSelfMute() || eb
  }
  isDeaf() {
    return this.isSelfDeaf() || eU
  }
  hasContext(e) {
    return null != eC[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
    return e === em.MediaEngineContextTypes.DEFAULT && eL
  }
  isSelfMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
    return !this.isEnabled() || e3(e).mute || !K.default.didHavePermission(eh.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === em.MediaEngineContextTypes.DEFAULT && eM
  }
  isHardwareMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(e) && er.default.isHardwareMute(this.getInputDeviceId())
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
    return !this.isSupported() || e3(e).deaf
  }
  isVideoEnabled() {
    return ew && eF
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
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.STREAM;
    return eR === e && null != r
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.STREAM;
    return eR === t && null != r && (null === (e = r.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT;
    return e !== ei.default.getId() && (e3(t).localMutes[e] || !1)
  }
  supportsDisableLocalVideo() {
    return eI.supports(em.Features.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e3(n).disabledLocalVideos[e]) && void 0 !== t && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e3(n).videoToggleStateMap[e]) && void 0 !== t ? t : ef.VideoToggleState.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT;
    return t === em.MediaEngineContextTypes.DEFAULT && eZ.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
    return e === em.MediaEngineContextTypes.DEFAULT && eZ.size > 0
  }
  isMediaFilterSettingLoading() {
    return eX
  }
  isNativeAudioPermissionReady() {
    return eQ
  }
  getGoLiveSource() {
    return r
  }
  getGoLiveContext() {
    return eR
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT,
      n = e3(t).localPans[e];
    return null != n ? n : eS
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT,
      n = t === em.MediaEngineContextTypes.STREAM,
      i = n ? em.DEFAULT_STREAM_VOLUME : em.DEFAULT_VOLUME,
      s = e3(t).localVolumes[e];
    return null != s ? s : i
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
    return h.each(eC, (t, n) => {
      let {
        mode: i,
        modeOptions: {
          shortcut: s
        }
      } = t;
      i === ef.InputModes.PUSH_TO_TALK && eA.has(n) && (e[n] = s)
    }), e
  }
  getInputDeviceId() {
    return to(eD, e3().inputDeviceId)
  }
  getOutputDeviceId() {
    return to(eO, e3().outputDeviceId)
  }
  getVideoDeviceId() {
    return to(eP, e3().videoDeviceId)
  }
  getInputDevices() {
    return eD
  }
  getOutputDevices() {
    return eO
  }
  getVideoDevices() {
    return eP
  }
  getEchoCancellation() {
    let e = e3();
    return er.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
  }
  getH265Enabled() {
    return e3().h265Enabled
  }
  getLoopback() {
    return eI.getLoopback()
  }
  getNoiseSuppression() {
    let e = e3();
    return er.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = e3();
    return er.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
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
    return eI.getDebugLogging()
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
    return eI.getAudioSubsystem()
  }
  getSettings() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
    return e3(e)
  }
  getState() {
    return {
      settingsByContext: eC,
      inputDevices: eD,
      outputDevices: eO,
      appSupported: e0,
      krispModuleLoaded: eW,
      goLiveSource: r,
      goLiveContext: eR
    }
  }
  getInputDetected() {
    return ex
  }
  getNoInputDetectedNotice() {
    return eH
  }
  getPacketDelay() {
    return $.isPlatformEmbedded || this.getMode() !== ef.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    eI.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return eN
  }
  getVideoHook() {
    return e3().videoHook
  }
  supportsVideoHook() {
    return eI.supports(em.Features.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = e3().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == e || e)
  }
  supportsExperimentalSoundshare() {
    return eI.supports(em.Features.EXPERIMENTAL_SOUNDSHARE) && m.satisfies(null === I.default || void 0 === I.default ? void 0 : I.default.os.release, e_.WINDOWS_SOUNDSHARE_VERSION)
  }
  getOpenH264() {
    return e3().openH264
  }
  getAv1Enabled() {
    return e3().av1Enabled
  }
  getEverSpeakingWhileMuted() {
    return eV
  }
  getSoundshareEnabled() {
    return eq
  }
  supportsEnableSoundshare() {
    return (0, $.isMac)() && eI.supports(em.Features.SOUNDSHARE) && m.satisfies(null === I.default || void 0 === I.default ? void 0 : I.default.os.release, e_.DARWIN_SOUNDSHARE_VERSION) && !(m.satisfies(null === I.default || void 0 === I.default ? void 0 : I.default.os.release, e_.DARWIN_SCKIT_AUDIO_VERSION) && tt(!1))
  }
  supportsScreenSoundshare() {
    return (0, $.isMac)() && eI.supports(em.Features.SOUNDSHARE) && m.satisfies(null === I.default || void 0 === I.default ? void 0 : I.default.os.release, e_.DARWIN_SCKIT_AUDIO_VERSION) && tt(!1) || (0, $.isWindows)() && eI.supports(em.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
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
    let n = eI.getSupportedSecureFramesProtocolVersion(),
      i = x.SecureFramesUserExperiment.getCurrentConfig({
        location: "MediaEngineStore"
      }),
      s = null != e ? x.SecureFramesGuildExperiment.getCurrentConfig({
        guildId: e,
        location: "MediaEngineStore"
      }) : null,
      r = i.canSupportSecureFrames || (null == s ? void 0 : s.canSupportSecureFrames),
      a = !(0, $.isIOS)() && !(0, $.isAndroid)() && (i.canSupportMls || (null == s ? void 0 : s.canSupportMls)),
      o = Math.max(i.protocolVersionFloor, null !== (t = null == s ? void 0 : s.protocolVersionFloor) && void 0 !== t ? t : 0);
    return r && n % 100 >= o ? a ? n : n % 100 : 0
  }
  hasClipsSource() {
    return null != a
  }
}
tp.displayName = "MediaEngineStore";
var tv = i = new tp(T.default, {
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n,
      currentVoiceChannelId: i,
      video: s
    } = e;
    if (i !== n && e8(s, null), null != t || null == n) {
      eY = !1;
      return
    }
    if (eY) return;
    eY = !0;
    let r = e3();
    (r.mute || r.deaf) && (ti({
      deaf: !1,
      mute: !1
    }), eI.eachConnection(e9))
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      if (s === t.sessionId) {
        eb = t.mute || t.suppress, eU = t.deaf, eI.eachConnection(e9);
        let e = null != t.guildId && null != t.channelId && null != eK && eK !== t.channelId,
          n = !e && ew;
        return e8(n), eK = t.channelId, !0
      }
      return !__OVERLAY__ && t.userId === ei.default.getId() && null == eu.default.getChannelId() && e8(!1, null), e
    }, !1)
  },
  CONNECTION_OPEN: function(e) {
    s = e.sessionId, eb = !1, eU = !1, (0, z.shouldReadWriteAudioSettings)() && tl()
  },
  CONNECTION_CLOSED: function() {
    s = null
  },
  RTC_CONNECTION_STATE: function(e) {
    switch (e.state) {
      case ef.RTCConnectionStates.CONNECTING:
        ts();
        break;
      case ef.RTCConnectionStates.RTC_CONNECTING:
        eB = !1, eH = !1;
        break;
      case ef.RTCConnectionStates.RTC_CONNECTED:
        e8();
        break;
      case ef.RTCConnectionStates.DISCONNECTED:
        (function() {
          if (0 === eZ.size) return;
          let e = em.MediaEngineContextTypes.DEFAULT,
            {
              disabledLocalVideos: t
            } = e3(e);
          eZ.forEach(n => {
            f(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eI.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
          }), eZ.clear(), ti({
            disabledLocalVideos: t
          }, e, !1)
        })()
    }
    tn.update()
  },
  AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
    let {
      mute: t
    } = e;
    eL = t, eI.eachConnection(e9)
  },
  AUDIO_TOGGLE_SELF_MUTE: function(e) {
    let {
      context: t
    } = e, {
      mute: n,
      deaf: i
    } = e3(t);
    if (t === em.MediaEngineContextTypes.DEFAULT && (K.default.requestPermission(eh.NativePermissionTypes.AUDIO), eM)) return !1;
    !(n = !i && !n) && (i = !1), ti({
      mute: n,
      deaf: i
    }, t), eI.eachConnection(e9)
  },
  AUDIO_TOGGLE_SELF_DEAF: function(e) {
    let {
      context: t
    } = e, n = e3(t);
    ti({
      deaf: !n.deaf
    }, t), eI.eachConnection(e9)
  },
  AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
    let {
      context: t,
      userId: n
    } = e;
    if (n === ei.default.getId()) return;
    let {
      localMutes: i
    } = e3(t);
    i[n] ? delete i[n] : i[n] = !0, ti({
      localMutes: i
    }, t), eI.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
    var t, n, i, s, r, a, o;
    let {
      context: l,
      userId: u,
      videoToggleState: d,
      persist: c,
      isAutomatic: _
    } = e;
    f(!(c && _), "These are not allowed to both be true.");
    let h = d === ef.VideoToggleState.DISABLED,
      {
        disabledLocalVideos: g
      } = e3(l),
      m = null !== (t = g[u]) && void 0 !== t && t,
      E = eZ.has(u),
      p = d === ef.VideoToggleState.AUTO_ENABLED || d === ef.VideoToggleState.MANUAL_ENABLED;
    ep.info("disableVideo=".concat(h, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(E, ", isVideoShown=").concat(p)), f(!(E && !m), "If you are auto-disabled, then you are also disabled.");
    let v = h !== m,
      S = l === em.MediaEngineContextTypes.DEFAULT,
      T = _ && v && S,
      I = c && v && S;
    ep.info("changed=".concat(v, " isDefaultContext=").concat(S, " isUpdateCausedByVideoHealthManager=").concat(T, " isManualToggleByUser=").concat(I));
    let {
      videoToggleStateMap: C
    } = e3(l);
    if (C[u] === ef.VideoToggleState.AUTO_PROBING && d === ef.VideoToggleState.AUTO_ENABLED && (0, W.default)(u, h ? em.VideoToggleReason.AUTO_DISABLE : em.VideoToggleReason.AUTO_ENABLE, p), C[u] = d, ti({
        videoToggleStateMap: C
      }, l, c), d === ef.VideoToggleState.AUTO_PROBING ? null === (n = eu.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = eu.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !eJ && (ep.info("isAutoDisableAllowed=".concat(eJ, " - disabling VideoHealthManager")), null === (r = eu.default.getRTCConnection()) || void 0 === r || null === (s = r.getVideoHealthManager()) || void 0 === s || s.disable()), T) {
      if (!h && !E || h && !eJ) return;
      (0, W.default)(u, h ? em.VideoToggleReason.AUTO_DISABLE : em.VideoToggleReason.AUTO_ENABLE, p), h ? eZ.add(u) : eZ.delete(u)
    } else I && (E && !h ? (ep.info("disallowing auto-disable for this session because of manual override by user"), eJ = !1, null === (o = eu.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, W.default)(u, em.VideoToggleReason.MANUAL_REENABLE, p)) : (0, W.default)(u, h ? em.VideoToggleReason.MANUAL_DISABLE : em.VideoToggleReason.MANUAL_ENABLE, p));
    S && !h && eZ.delete(u), h ? g[u] = !0 : delete g[u], ti({
      disabledLocalVideos: g
    }, l, c), eI.eachConnection(e => {
      var t;
      return e.setLocalVideoDisabled(u, null !== (t = g[u]) && void 0 !== t && t)
    }, l)
  },
  AUDIO_SET_LOCAL_VOLUME: function(e) {
    let {
      context: t,
      userId: n,
      volume: i
    } = e;
    if (n === ei.default.getId()) return;
    let s = t === em.MediaEngineContextTypes.STREAM,
      r = s ? em.DEFAULT_STREAM_VOLUME : em.DEFAULT_VOLUME,
      {
        localVolumes: a
      } = e3(t);
    i === r ? delete a[n] : a[n] = i, ti({
      localVolumes: a
    }, t), eI.eachConnection(e => e.setLocalVolume(n, i), t)
  },
  AUDIO_SET_LOCAL_PAN: function(e) {
    let {
      context: t,
      userId: n,
      left: i,
      right: s
    } = e, {
      localPans: r
    } = e3(t);
    r[n] = {
      left: i,
      right: s
    }, ti({
      localPans: r
    }, t), eI.eachConnection(e => e.setLocalPan(n, i, s), t)
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
    }, t), eI.eachConnection(e4), tn.update()
  },
  AUDIO_SET_INPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    ti({
      inputVolume: e6(t)
    }), eI.setInputVolume(t)
  },
  AUDIO_SET_OUTPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    ti({
      outputVolume: t
    }), eI.setOutputVolume(t)
  },
  AUDIO_SET_INPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ti({
      inputDeviceId: t = to(eD, t)
    }), eI.setAudioInputDevice(t)
  },
  AUDIO_SET_OUTPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ti({
      outputDeviceId: t = to(eO, t)
    }), eI.setAudioOutputDevice(t)
  },
  AUDIO_SET_ECHO_CANCELLATION: function(e) {
    let t = ti({
      echoCancellation: e.enabled
    });
    eI.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tf(), tc(e.location)
  },
  MEDIA_ENGINE_SET_H265: function(e) {
    let t = ti({
      h265Enabled: e.enabled
    });
    eI.setH265Enabled(t.h265Enabled)
  },
  AUDIO_SET_LOOPBACK: function(e) {
    let {
      enabled: t
    } = e;
    return e$ = t, tf()
  },
  AUDIO_SET_NOISE_SUPPRESSION: function(e) {
    let t = ti({
      noiseSuppression: e.enabled
    });
    eI.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tf(), tc(e.location)
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
    let t = ti({
      automaticGainControl: e.enabled
    });
    eI.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tf(), tc(e.location)
  },
  AUDIO_SET_NOISE_CANCELLATION: function(e) {
    let t = ti({
      noiseCancellation: e.enabled
    });
    eI.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tf(), tc(e.location)
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
    ti({
      silenceWarning: e.enabled
    }), tn.update()
  },
  AUDIO_SET_DEBUG_LOGGING: function(e) {
    eI.setDebugLogging(e.enabled)
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
    } = e, s = ti({
      attenuation: t,
      attenuateWhileSpeakingSelf: n,
      attenuateWhileSpeakingOthers: i
    });
    eI.eachConnection(e => e.setAttenuation(s.attenuation, s.attenuateWhileSpeakingSelf, s.attenuateWhileSpeakingOthers))
  },
  AUDIO_SET_QOS: function(e) {
    let {
      enabled: t
    } = e;
    ti({
      qos: t
    }), eI.eachConnection(e => e.setQoS(t))
  },
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: n,
      videoDevices: i
    } = e;
    ! function(e) {
      let t = eD;
      if (eD = ta(e, eE.default.Messages.NO_INPUT_DEVICES), !h.isEqual(eD, t)) {
        let e = e3(),
          t = to(eD, e.inputDeviceId);
        eI.setAudioInputDevice(t)
      }
    }(t), ! function(e) {
      let t = eO;
      if (eO = ta(e, eE.default.Messages.NO_OUTPUT_DEVICES), !h.isEqual(eO, t)) {
        let e = e3(),
          t = to(eO, e.outputDeviceId);
        eI.setAudioOutputDevice(t)
      }
    }(n), ! function(e) {
      eF = e.length > 0;
      let t = eP;
      if (eP = ta(e, eE.default.Messages.NO_VIDEO_DEVICES), ew && !h.isEqual(eP, t)) {
        var n;
        let e = void 0 !== eP[ek],
          i = ek === em.DEFAULT_DEVICE_ID && (null === (n = t[em.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
        e8(e || i)
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
    v.default.remove(ev), location.reload()
  },
  AUDIO_INPUT_DETECTED: function(e) {
    let {
      inputDetected: t
    } = e;
    ex = t, !eB && ex && (eB = !0, tn.update())
  },
  AUDIO_SET_SUBSYSTEM: function(e) {
    eI.setAudioSubsystem(e.subsystem)
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
    ey = e.enabled, e.unmute && ti({
      mute: !1,
      deaf: !1
    }), eI.eachConnection(e9)
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
    let {
      enabled: t
    } = e;
    K.default.requestPermission(eh.NativePermissionTypes.CAMERA), e8(t)
  },
  MEDIA_ENGINE_PERMISSION: function(e) {
    let {
      kind: t,
      granted: n
    } = e;
    if (!n) switch (t) {
      case "audio":
        ey = !1, eI.eachConnection(e9);
        break;
      case "video":
        e8(!1)
    }
  },
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
    var t, n, i, s, a;
    let {
      settings: o
    } = e;
    if ((null == o ? void 0 : o.desktopSettings) != null) {
      ;
      let e = null,
        i = null,
        {
          sourceId: s,
          sound: l
        } = o.desktopSettings,
        u = null !== (t = o.context) && void 0 !== t ? t : em.MediaEngineContextTypes.DEFAULT,
        d = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
          resolution: 720,
          frameRate: 30
        },
        c = Z.default.getPidFromDesktopSource(s);
      $.isPlatformEmbedded && !0 === l && ({
        soundshareId: e,
        soundshareSession: i
      } = tu(c), null != e && td(e, i)), (a = u) !== eR && (null != r && eI.setGoLiveSource(null, eR), eR = a);
      let f = u === em.MediaEngineContextTypes.STREAM && ew;
      e8(f, {
        desktopSource: {
          id: s,
          sourcePid: c,
          soundshareId: e,
          soundshareSession: i
        },
        quality: {
          resolution: d.resolution,
          frameRate: d.frameRate
        }
      })
    } else if ((null == o ? void 0 : o.cameraSettings) != null) {
      let e = null !== (i = o.context) && void 0 !== i ? i : em.MediaEngineContextTypes.DEFAULT,
        {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        } = o.cameraSettings,
        r = e === em.MediaEngineContextTypes.STREAM && ew,
        a = null !== (s = o.qualityOptions) && void 0 !== s ? s : {
          resolution: 720,
          frameRate: 30
        };
      e8(r, {
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
    ti({
      videoDeviceId: t = to(eP, t)
    }), e8()
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
    let t = ti({
      experimentalEncoders: e.enabled
    });
    eI.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
  },
  MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
    return eN !== e.required && (eN = e.required, !e.required && eI.interact(), !0)
  },
  USER_SETTINGS_MODAL_INIT: tg,
  USER_SETTINGS_MODAL_SET_SECTION: tg,
  CERTIFIED_DEVICES_SET: function() {
    return eI.eachConnection(e5), !1
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
    eC = t.settingsByContext, eD = t.inputDevices, eO = t.outputDevices, e0 = t.appSupported, eW = t.krispModuleLoaded, eR = t.goLiveContext
  },
  MEDIA_ENGINE_SET_OPEN_H264: function(e) {
    let {
      enabled: t
    } = e, n = ti({
      openH264: t
    });
    eI.setH264Enabled(n.openH264)
  },
  MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
    let {
      enabled: t
    } = e, n = ti({
      hardwareH264: t
    });
    eI.eachConnection(e => e.setHardwareH264(n.hardwareH264))
  },
  MEDIA_ENGINE_SET_AV1: function(e) {
    let {
      enabled: t
    } = e, n = ti({
      av1Enabled: t
    });
    eI.setAv1Enabled(n.av1Enabled)
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e, n = D.default.isEnabled();
    if (t === ef.AppStates.BACKGROUND && ew && !n) eG = !0, e8(!1);
    else {
      if (t !== ef.AppStates.ACTIVE || !eG) return !1;
      eG = !1, e8(!0)
    }
    return !0
  },
  SET_CHANNEL_BITRATE: function(e) {
    eI.eachConnection(t => t.setBitRate(e.bitrate))
  },
  SET_VAD_PERMISSION: function(e) {
    let {
      hasPermission: t
    } = e, n = !t;
    if (n === eM) return !1;
    eM = n, eI.eachConnection(e9)
  },
  SET_NATIVE_PERMISSION: function(e) {
    let {
      state: t,
      permissionType: n
    } = e, i = t === eh.NativePermissionStates.ACCEPTED;
    switch (n) {
      case eh.NativePermissionTypes.AUDIO:
        eQ = !0, eI.eachConnection(e9);
        break;
      case eh.NativePermissionTypes.CAMERA:
        !i && ew && e8(!1);
        break;
      default:
        return !1
    }
  },
  SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
    eI.eachConnection(t => t.applyVideoQualityMode(e.mode))
  },
  MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
    let {
      enabled: t
    } = e, n = ti({
      aecDumpEnabled: t
    });
    eI.setAecDump(n.aecDumpEnabled)
  },
  CHANNEL_DELETE: function() {
    if (!ew && null == r || null != eu.default.getRTCConnectionId()) return !1;
    e8(!1, null)
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
    return !!ez && (ez = !1, !0)
  },
  MEDIA_ENGINE_ENABLE_SOUNDSHARE: function() {
    tE(), ! function() {
      var e, t;
      let n = i.isSoundSharing(),
        s = null === (e = i.getGoLiveSource()) || void 0 === e ? void 0 : e.desktopSource;
      if (null != s) {
        let e = null !== (t = s.soundshareId) && void 0 !== t ? t : 0,
          r = i.getExperimentalSoundshare();
        n && eI.setSoundshareSource(e, r, eR)
      }
    }()
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    eI.applyMediaFilterSettings(t).finally(() => {
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
    if (!(0, z.shouldReadWriteAudioSettings)() || t !== eg.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
    tl(!0)
  },
  CLIPS_INIT: function(e) {
    let {
      sourceId: t,
      applicationName: n,
      quality: s
    } = e, {
      enableDecoupledGameClipping: r
    } = b.default.getCurrentConfig({
      location: "handleClipsInit"
    }, {
      autoTrackExposure: !0
    }), o = A.default.getSettings().decoupledClipsEnabled;
    if (!r || !o || null == I.default) return;
    let l = null,
      u = null,
      d = Z.default.getPidFromDesktopSource(t);
    ({
      soundshareId: l,
      soundshareSession: u
    } = tu(d));
    let c = {
      desktopSource: {
        id: t,
        sourcePid: d,
        soundshareId: l,
        soundshareSession: u
      },
      quality: s
    };
    null != a && a.desktopSource.id !== c.desktopSource.id && (eI.setClipsSource(null), (0, $.isWindows)() && null != a.desktopSource.soundshareId && C.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && td(l, u), a = c;
    let {
      useQuartzCapturer: f
    } = G.default.getCurrentConfig({
      location: "f627ab_11"
    }, {
      autoTrackExposure: !1
    }), {
      hdrCaptureMode: _
    } = w.default.getCurrentConfig({
      location: "f627ab_12"
    }, {
      autoTrackExposure: !1
    }), h = e3().videoHook, g = eI.supports(em.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
      videoHookStaleFrameTimeoutMs: m
    } = B.default.getConfig(g && h, "e225cfdf5_vh2", !1), {
      graphicsCaptureStaleFrameTimeoutMs: E
    } = j.default.getConfig(g && te(), "e225cfdf5_wgc2", !1);
    eI.setClipsSource({
      desktopDescription: {
        id: a.desktopSource.id,
        soundshareId: a.desktopSource.soundshareId,
        useVideoHook: h,
        useGraphicsCapture: te(),
        useLoopback: i.getExperimentalSoundshare(),
        useQuartzCapturer: f,
        allowScreenCaptureKit: tt(!1),
        videoHookStaleFrameTimeoutMs: m,
        graphicsCaptureStaleFrameTimeoutMs: E,
        hdrCaptureMode: _
      },
      quality: s,
      applicationName: n
    })
  },
  CLIPS_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    !1 === t.decoupledClipsEnabled && (a = null, eI.setClipsSource(null))
  }
})