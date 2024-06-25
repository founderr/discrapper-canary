"use strict";
let i, r, s, o;
n(47120), n(724458), n(773603), n(653041), n(337869);
var a, l, u, _ = n(512722),
  c = n.n(_),
  d = n(392711),
  E = n.n(d),
  I = n(553813),
  T = n.n(I),
  h = n(442837),
  f = n(46973),
  S = n(433517),
  A = n(846519),
  N = n(570140),
  m = n(579806),
  O = n(887278),
  p = n(547727),
  R = n(565885),
  g = n(435064),
  C = n(779618),
  v = n(710845),
  L = n(811660),
  D = n(353926),
  M = n(646047),
  P = n(594190),
  y = n(502286),
  U = n(227196),
  b = n(12898),
  G = n(294473),
  w = n(706629),
  x = n(926951),
  B = n(836157),
  k = n(498600),
  V = n(631610),
  Z = n(951958),
  H = n(529558),
  F = n(874785),
  Y = n(636458),
  j = n(441167),
  W = n(338336),
  K = n(751571),
  z = n(815016),
  q = n(725380),
  X = n(581883),
  Q = n(626135),
  J = n(12647),
  $ = n(70956),
  ee = n(358085),
  et = n(960048),
  en = n(998502),
  ei = n(13140),
  er = n(314897),
  es = n(967368),
  eo = n(463395),
  ea = n(592125),
  el = n(858340),
  eu = n(19780),
  e_ = n(704806),
  ec = n(631768),
  ed = n(981631),
  eE = n(70722),
  eI = n(761274),
  eT = n(526761),
  eh = n(65154),
  ef = n(689938);

function eS(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eA = new v.Z("MediaEngineStore");
(u = a || (a = {}))[u.DETACHED = 0] = "DETACHED", u[u.WAITING = 1] = "WAITING", u[u.ATTACHED = 2] = "ATTACHED", u[u.STARTED = 3] = "STARTED", u[u.PLAYING = 4] = "PLAYING", u[u.SILENCE = 5] = "SILENCE";
let eN = "MediaEngineStore",
  em = {
    left: 1,
    right: 1
  },
  eO = 5 * $.Z.Millis.SECOND;

function ep() {
  return {
    mode: ed.pM4.VOICE_ACTIVITY,
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
    inputVolume: eh.Qx,
    outputVolume: eh.Qx,
    inputDeviceId: eh.w5,
    outputDeviceId: eh.w5,
    videoDeviceId: eh.w5,
    qos: !1,
    qosMigrated: !1,
    videoHook: eR.supports(eh.AN.VIDEO_HOOK),
    experimentalSoundshare2: null,
    openH264: !0,
    h265Enabled: !0,
    vadThrehsoldMigrated: !1,
    aecDumpEnabled: !1
  }
}
let eR = (0, f.Mt)((0, f.jj)()),
  eg = {},
  eC = new Set([eh.Yn.DEFAULT]),
  ev = eR.supports(eh.AN.AUTO_ENABLE),
  eL = !1,
  eD = eh.Yn.STREAM,
  eM = {
    [eh.w5]: tu(ef.Z.Messages.NO_INPUT_DEVICES)
  },
  eP = {
    [eh.w5]: tu(ef.Z.Messages.NO_OUTPUT_DEVICES)
  },
  ey = {
    [eh.w5]: tu(ef.Z.Messages.NO_VIDEO_DEVICES)
  },
  eU = !1,
  eb = !1,
  eG = !1,
  ew = !1,
  ex = !1,
  eB = eh.Av,
  ek = !1,
  eV = !1,
  eZ = !1,
  eH = !1,
  eF = null,
  eY = !1,
  ej = !1,
  eW = !1,
  eK = !1,
  ez = !1,
  eq = null,
  eX = !1,
  eQ = !1,
  eJ = !1;
K.Z.hasPermission(eI.Eu.AUDIO, {
  showAuthorizationError: !1
}), K.Z.hasPermission(eI.Eu.CAMERA, {
  showAuthorizationError: !1
});
let e$ = new Set,
  e0 = !1,
  e1 = !1,
  e2 = {},
  e3 = null,
  e4 = {},
  e7 = 5 * $.Z.Millis.SECOND;

function e5() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT,
    t = eg[e];
  return null == t && (t = ep(), eg[e] = t), t
}

function e6(e) {
  let t = e5(e.context);
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

function e8(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Qx;
  return E().clamp(e, 0, t)
}

function e9(e) {
  let t = e5(e.context),
    n = !ev || t.mute || t.deaf;
  e.context === eh.Yn.DEFAULT ? n = n || eU || eb || eG || !K.Z.didHavePermission(eI.Eu.AUDIO) : e.context === eh.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eh.Yn.DEFAULT && p.Z.updateNativeMute()
}

function te() {
  var e, t, n;
  let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex,
    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
    a = s;
  if ((null == a ? void 0 : a.desktopSource) != null && a.desktopSource.id !== (null == o ? void 0 : null === (e = o.desktopSource) || void 0 === e ? void 0 : e.id) && (null != a.desktopSource.soundshareId && (0, ee.isWindows)() && O.pn(a.desktopSource.soundshareId), eR.setGoLiveSource(null, eD)), (null == a ? void 0 : a.cameraSource) != null && (a.cameraSource.videoDeviceGuid !== (null == o ? void 0 : null === (t = o.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || a.cameraSource.audioDeviceGuid !== (null == o ? void 0 : null === (n = o.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eR.setGoLiveSource(null, eD), (ex || r) && (eB = (ex = r) ? tc(ey, e5().videoDeviceId) : eh.Av, eR.setVideoInputDevice(eB)), s = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let {
        hdrCaptureMode: t
      } = k.Z.getCurrentConfig({
        location: "f627ab_2"
      }, {
        autoTrackExposure: !1
      }), n = e5().videoHook;
      eR.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: n,
          useGraphicsCapture: ti(),
          useLoopback: i.getExperimentalSoundshare(),
          useQuartzCapturer: !0,
          allowScreenCaptureKit: tr(),
          videoHookStaleFrameTimeoutMs: 500,
          graphicsCaptureStaleFrameTimeoutMs: eO,
          hdrCaptureMode: t
        },
        quality: e
      }, eD)
    }
    null != o.cameraSource && eR.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: e
    }, eD)
  }
}

function tt(e, t, n, i) {
  var r;
  let s = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : "";
  null == e4[s] && (e4[s] = new Set);
  let o = null != t && !e4[s].has(t);
  o && e4[s].add(t), (null == t || o) && Q.default.track(ed.rMx.SOUNDSHARE_FAILED, {
    soundshare_failure_code: t,
    soundshare_failure_reason: n,
    soundshare_failure_will_retry: i,
    ...(0, y.Z)(e)
  })
}

function tn(e) {
  let t = e5(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(eo.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eo.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(eo.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, ee.isWeb)()) {
    let n = t.noiseCancellation ? -150 : -100;
    e.setSilenceThreshold(n)
  }
}

function ti() {
  return (0, ee.isWindows)() && T().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, eE.nz)
}

function tr() {
  return (0, ee.isMac)() && eR.supports(eh.AN.SCREEN_CAPTURE_KIT) && T().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, eE.C7)
}

function ts() {
  return x.Z.supportsSimulcast()
}
let to = new class {
  start() {
    !this.started && (this.started = !0, eR.on(f.aB.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eR.removeListener(f.aB.Silence, this.handleSilence), N.Z.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = e5();
    !eY && eu.Z.getState() === ed.hes.RTC_CONNECTED && e.mode === ed.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    eS(this, "stateChangeTimeout", void 0), eS(this, "noVoiceTimeout", 5e3), eS(this, "voiceTimeout", 1500), eS(this, "started", !1), eS(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (N.Z.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (ej = !0))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function ta(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = e5(t);
  return Object.assign(i, e), !__OVERLAY__ && n && S.K.set(eN, eg), i
}

function tl() {
  !ev && eR.enable().then(() => N.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: !0,
    unmute: !1
  }))
}

function tu(e) {
  return {
    id: eh.w5,
    index: 0,
    name: e,
    disabled: !0
  }
}

function t_(e, t) {
  if (0 === e.length) {
    let e = tu(t);
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

function tc(e, t) {
  var n;
  let i = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
  return null != i ? i.id : t
}

function td() {
  var e, t;
  let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    i = null !== (e = X.Z.settings.audioContextSettings) && void 0 !== e ? e : {
      user: {},
      stream: {}
    };
  for (let e of Object.keys(i)) {
    let r = e === eT.u0.USER ? eh.Yn.DEFAULT : eh.Yn.STREAM,
      s = r === eh.Yn.STREAM ? eh.Yh : eh.Qx,
      o = null !== (t = i[e]) && void 0 !== t ? t : {},
      {
        localMutes: a,
        localVolumes: l
      } = e5(r);
    for (let [e, t] of Object.entries(o)) null == (0, q.Ky)(r, e) && (t.muted ? a[e] = !0 : delete a[e], t.volume !== s ? l[e] = t.volume : delete l[e], eR.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, r));
    if (n)
      for (let e of new Set([...Object.keys(a), ...Object.keys(l)])) null == o[e] && (delete a[e], delete l[e], eR.eachConnection(t => {
        t.setLocalVolume(e, s), t.setLocalMute(e, !1)
      }, r));
    ta({
      localMutes: a,
      localVolumes: l
    }, r)
  }
}

function tE(e) {
  if (null == i) return eA.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = i.getExperimentalSoundshare() ? e : J.Z.getAudioPid(e),
      n = "";
    return null != t && (n = J.Z.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function tI(e, t) {
  (0, ee.isWindows)() && O.YT(e, {
    soundshare_session: t
  }).then(t => {
    null != t && !P.ZP.shouldContinueWithoutElevatedProcessForPID(e) && N.Z.wait(() => {
      N.Z.dispatch({
        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
        errorMessage: t
      })
    })
  })
}

function tT() {
  let e = eh.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = e5(e);
  for (let [e, n] of Object.entries(t)) n === ed.ZUi.AUTO_PROBING && delete t[e];
  ta({
    videoToggleStateMap: t
  }, e, !1)
}

function th(e) {
  let t = e5();
  Q.default.track(ed.rMx.VOICE_PROCESSING, {
    echo_cancellation: t.echoCancellation,
    noise_cancellation: t.noiseCancellation,
    noise_suppression: t.noiseSuppression,
    automatic_gain_control: t.automaticGainControl,
    location: e
  })
}

function tf() {
  let e = e5(),
    t = e.inputDeviceId,
    n = eo.Z.hasEchoCancellation(t) || e.echoCancellation,
    i = eo.Z.hasNoiseSuppression(t) || e.noiseSuppression,
    r = eo.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
    s = e.noiseCancellation;
  eR.setLoopback(e1, {
    echoCancellation: n,
    noiseSuppression: i,
    automaticGainControl: r,
    noiseCancellation: s
  })
}

function tS() {
  return ez || !1
}
async function tA() {
  try {
    await en.ZP.ensureModule("discord_krisp"), en.ZP.requireModule("discord_krisp"), ez = !0, i.emitChange()
  } catch (t) {
    eA.warn("Failed to load Krisp module: ".concat(t.message)), et.Z.captureException(t);
    let e = eh.H3.INITIALIZED;
    if (t.message.includes(": ")) {
      let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
      e = isNaN(n) || 0 === n ? eh.H3.INITIALIZED : n
    }
    Q.default.track(ed.rMx.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), ta({
      noiseCancellation: !1
    })
  } finally {
    eK = !1
  }
}

function tN(e) {
  let {
    section: t
  } = e;
  return t === ed.oAB.VOICE && tl(), !1
}
class tm extends(l = h.ZP.Store) {
  initialize() {
    eR.on(f.aB.Connection, e => {
      var t, n;
      let {
        maxSyncDelayOverride: r
      } = Z.Z.getCurrentConfig({
        location: "f627ab_3"
      }, {
        autoTrackExposure: !1
      });
      r > 0 && eR.setMaxSyncDelayOverride(r), e6(e), e9(e), tn(e);
      let o = e5();
      e.setAttenuation(o.attenuation, o.attenuateWhileSpeakingSelf, o.attenuateWhileSpeakingOthers), e.setQoS(o.qos), e.setExperimentalEncoders(o.experimentalEncoders), e.setHardwareH264(null === (t = o.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = o.openH264) || void 0 === n || n);
      let {
        useExperimentalRateControl: a
      } = Y.Z.getCurrentConfig({
        location: "f627ab_4"
      }, {
        autoTrackExposure: !1
      });
      a && e.setExperimentFlag(eh.V8.VIDEOTOOLBOX_RATE_CONTROL, !0);
      let l = eu.Z.getGuildId(),
        {
          muteBeforeProcessing: u,
          pttBeforeProcessing: _,
          skipEncode: c
        } = (null != l ? w.Z : G.Z).getCurrentConfig({
          location: "setupMediaEngine",
          ...null != l && {
            guildId: l
          }
        }, {
          autoTrackExposure: !0
        });
      u && e.setExperimentFlag(eh.V8.MUTE_BEFORE_PROCESSING, !0), _ && e.setExperimentFlag(eh.V8.PTT_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(eh.V8.SKIP_ENCODE, !0);
      let {
        resetOnErrors: d,
        fallbackOnErrors: E,
        fallbackOnConsecutiveErrors: I
      } = F.Z.getCurrentConfig({
        location: "setupMediaEngine"
      }, {
        autoTrackExposure: !0
      });
      d && e.setExperimentFlag(eh.V8.RESET_DECODER_ON_ERRORS, !0), E && e.setExperimentFlag(eh.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), I && e.setExperimentFlag(eh.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
      e.context === eh.Yn.STREAM && ts() && e.setExperimentFlag(eh.V8.GOLIVE_SIMULCAST, !0), (0, ee.isWindows)() ? (null == e3 ? void 0 : e3.startsWith("NVIDIA")) ? e.setExperimentFlag(eh.V8.SIGNAL_AV1, !0) : (null == e3 ? void 0 : e3.startsWith("AMD")) && b.Z.getCurrentConfig({
        location: "setupMediaEngine"
      }, {
        autoTrackExposure: !0
      }).signalAV1Support ? e.setExperimentFlag(eh.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eh.V8.SIGNAL_AV1_DECODE, !0) : ((0, ee.isMac)() || (0, ee.isLinux)()) && e.setExperimentFlag(eh.V8.SIGNAL_AV1_DECODE, !0), (0, ee.isWindows)() && e.setExperimentFlag(eh.V8.SIGNAL_AV1_HARDWARE_DECODE, !0);
      let {
        allowSettingFullbandAndroid: T
      } = V.Z.getCurrentConfig({
        location: "f627ab_14"
      }, {
        autoTrackExposure: !0
      });
      if (T && eR.setHasFullbandPerformance((0, L.b)()), e.setRemoteAudioHistory(0), (0, C.Z)(i)) {
        let t = g.Z.getSettings();
        e.setExperimentFlag(eh.V8.STREAMER_CLIP, t.clipsEnabled);
        let {
          enableViewerClipping: n
        } = j.Z.getCurrentConfig({
          location: "f627ab_15"
        }, {
          autoTrackExposure: !1
        });
        e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eh.ux);
        let {
          allowQualityDecoupling: i
        } = R.Z.getCurrentConfig({
          location: "MediaEngineStore_setupMediaEngine"
        }, {
          autoTrackExposure: !0
        });
        e.setQualityDecoupling(i)
      }
      for (let t of (o = e5(e.context), e.setPostponeDecodeLevel(100), Object.keys(o.localMutes))) t !== er.default.getId() && e.setLocalMute(t, o.localMutes[t]);
      for (let t of Object.keys(o.localVolumes)) t !== er.default.getId() && e.setLocalVolume(t, o.localVolumes[t]);
      for (let t of Object.keys(o.localPans)) {
        let n = o.localPans[t];
        e.setLocalPan(t, n.left, n.right)
      }
      for (let t of Object.keys(o.disabledLocalVideos)) e.setLocalVideoDisabled(t, o.disabledLocalVideos[t]);
      e.on(f.Sh.Speaking, (t, n) => {
        N.Z.dispatch({
          type: "SPEAKING",
          context: e.context,
          userId: t,
          speakingFlags: n
        })
      }), e.context === eh.Yn.DEFAULT && (eV = !1, e.on(f.Sh.SpeakingWhileMuted, () => {
        eV = !0, i.emitChange()
      })), e.on(f.Sh.DesktopSourceEnd, () => {
        N.Z.dispatch({
          type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
          settings: {
            context: e.context
          }
        })
      }), e.on(f.Sh.SoundshareAttached, () => {
        (null == s ? void 0 : s.desktopSource) != null && Q.default.track(ed.rMx.SOUNDSHARE_ATTACHED, (0, y.Z)(null == s ? void 0 : s.desktopSource))
      }), e.on(f.Sh.SoundshareFailed, e => {
        let {
          failureCode: t,
          failureReason: n,
          willRetry: i
        } = e;
        tt(null == s ? void 0 : s.desktopSource, t, n, i)
      }), e.on(f.Sh.SoundshareSpeaking, () => {
        (null == s ? void 0 : s.desktopSource) != null && (Q.default.track(ed.rMx.SOUNDSHARE_TRANSMITTING, (0, y.Z)(null == s ? void 0 : s.desktopSource)), null != el.Z.getHookError(ed.K3D.SOUND) && N.Z.wait(() => N.Z.dispatch({
          type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
        })))
      });
      let h = new A.V7;
      e.on(f.Sh.SoundshareTrace, e => {
        switch (e.type) {
          case "soundshare_attach_requested":
            h.start(e7, () => {
              N.Z.dispatch({
                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                errorMessage: "Sound Hook Failed"
              })
            });
            break;
          case "soundshare_recv_failed":
            let t = e.reason,
              n = e.code,
              i = e.retry;
            (null == s ? void 0 : s.desktopSource) != null && (tt(null == s ? void 0 : s.desktopSource, n, t, i), !i && (h.stop(), N.Z.wait(() => N.Z.dispatch({
              type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
              errorMessage: t,
              errorCode: n
            }))));
            break;
          case "soundshare_state_transition":
            4 === e.newState && (h.stop(), N.Z.wait(() => N.Z.dispatch({
              type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
            })))
        }
      }), e.on(f.Sh.InteractionRequired, e => {
        N.Z.dispatch({
          type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
          required: e
        })
      }), e.on(f.Sh.VideoHookInitialize, (e, t, n, i, r, o) => {
        (null == s ? void 0 : s.desktopSource) != null && Q.default.track(ed.rMx.VIDEOHOOK_INITIALIZED, {
          backend: e,
          format: t,
          framebuffer_format: n,
          sample_count: i,
          success: r,
          reinitialization: o,
          ...(0, y.Z)(null == s ? void 0 : s.desktopSource)
        })
      }), e.on(f.Sh.NoiseCancellationError, e => {
        eA.warn("noisecancellererror event: ".concat(e)), eX = !0, Q.default.track(ed.rMx.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), N.Z.dispatch({
          type: "AUDIO_SET_NOISE_SUPPRESSION",
          enabled: !0
        }), N.Z.dispatch({
          type: "AUDIO_SET_NOISE_CANCELLATION",
          enabled: !1
        }), N.Z.dispatch({
          type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
          code: e
        })
      }), e.on(f.Sh.VoiceActivityDetectorError, e => {
        eA.warn("voiceactivitydetectorerror event: ".concat(e)), Q.default.track(ed.rMx.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), N.Z.dispatch({
          type: "AUDIO_SET_MODE",
          context: eh.Yn.DEFAULT,
          mode: ed.pM4.VOICE_ACTIVITY,
          options: {
            ...e5(eh.Yn.DEFAULT).modeOptions,
            vadUseKrisp: !1
          }
        }), N.Z.dispatch({
          type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
          code: e
        })
      }), e.on(f.Sh.VideoState, t => {
        N.Z.dispatch({
          type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
          videoState: t,
          context: e.context
        })
      }), e.on(f.Sh.Destroy, () => {
        h.stop()
      }), e.setBitRate(es.Z.bitrate), e.applyVideoQualityMode(ec.Z.mode)
    }), eR.on(f.aB.DeviceChange, (e, t, n) => {
      N.Z.dispatch({
        type: "MEDIA_ENGINE_DEVICES",
        inputDevices: e,
        outputDevices: t,
        videoDevices: n
      })
    }), eR.on(f.aB.VolumeChange, (e, t) => {
      N.Z.dispatch({
        type: "AUDIO_VOLUME_CHANGE",
        inputVolume: e,
        outputVolume: t
      })
    }), eR.on(f.aB.DesktopSourceEnd, () => {
      N.Z.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: null
      })
    }), eR.on(f.aB.AudioPermission, e => {
      eJ = !0, N.Z.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "audio",
        granted: e
      })
    }), eR.on(f.aB.VideoPermission, e => {
      N.Z.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "video",
        granted: e
      })
    }), eR.on(f.aB.WatchdogTimeout, async () => {
      let e;
      try {
        await J.Z.submitLiveCrashReport({
          message: {
            message: "Voice Watchdog Timeout"
          }
        })
      } catch (t) {
        "number" == typeof t.status && (e = t.status)
      }
      eA.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), Q.default.track(ed.rMx.VOICE_WATCHDOG_TIMEOUT, {
        minidump_submission_error: e
      })
    }), eR.on(f.aB.VideoInputInitialized, e => {
      Q.default.track(ed.rMx.VIDEO_INPUT_INITIALIZED, {
        device_name: e.description.name,
        time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * $.Z.Millis.SECOND),
        timed_out: e.initializationTimerExpired,
        activity: e.entropy
      })
    }), eR.on(f.aB.ClipsRecordingRestartNeeded, () => {
      N.Z.dispatch({
        type: "CLIPS_RESTART"
      })
    }), eR.on(f.aB.ClipsInitFailure, (e, t) => {
      N.Z.wait(() => {
        N.Z.dispatch({
          type: "CLIPS_INIT_FAILURE",
          errMsg: e,
          applicationName: t
        })
      })
    }), eR.on(f.aB.ClipsRecordingEnded, (e, t) => {
      var n, i;
      (null == o ? void 0 : null === (n = o.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == s ? void 0 : null === (i = s.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && O.pn(t), o = null)
    }), to.reset(), (0, e_.q)().then(e => {
      null != e && (e3 = e.gpu_brand)
    }), ! function() {
      var e;
      let t = S.K.get("audio");
      null != t && (S.K.set(eN, {
          [eh.Yn.DEFAULT]: t
        }), S.K.remove("audio")), eg = null !== (e = S.K.get(eN)) && void 0 !== e ? e : {}, E().each(eg, e => {
          if (E().defaultsDeep(e, ep()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ei.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
            var t;
            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
          }(0, ee.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.hardwareEnabledVersion && (e.hardwareH264 = !0, e.hardwareEnabledVersion = 1), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264)
        }),
        function() {
          var e, t, n;
          let i = e5();
          eR.setAudioInputDevice(i.inputDeviceId), eR.setAudioOutputDevice(i.outputDeviceId), te(), eR.setInputVolume(i.inputVolume), eR.setOutputVolume(i.outputVolume), eR.setH264Enabled(null === (e = i.hardwareEncoding) || void 0 === e || e || i.openH264), eR.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t), eR.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n), eR.setAecDump(i.aecDumpEnabled)
        }()
    }(), ((0, ee.isWindows)() || (0, ee.isLinux)() || (0, ee.isMac)() && T().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, ">=21.0.0")) && !__OVERLAY__ && !eK && !ez ? (eK = !0, tA()) : (0, ee.isWeb)() && eR.supports(eh.AN.NOISE_CANCELLATION) ? (ez = !0, i.emitChange()) : (0, ee.isWeb)() && ta({
      noiseCancellation: !1
    }), tT(), e2 = {
      [eh.AN.VIDEO]: eR.supports(eh.AN.VIDEO),
      [eh.AN.DESKTOP_CAPTURE]: eR.supports(eh.AN.DESKTOP_CAPTURE),
      [eh.AN.HYBRID_VIDEO]: eR.supports(eh.AN.HYBRID_VIDEO)
    }, this.waitFor(er.default, eo.Z, ea.Z, el.Z, eu.Z, P.ZP, K.Z.storage, X.Z, D.Z, g.Z)
  }
  supports(e) {
    return eR.supports(e)
  }
  supportsInApp(e) {
    return e2[e] || eR.supports(e)
  }
  isSupported() {
    return eR.supported()
  }
  isExperimentalEncodersSupported() {
    return eR.supports(eh.AN.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return eR.supports(eh.AN.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return ez || !1
  }
  isNoiseCancellationError() {
    return eX
  }
  isAutomaticGainControlSupported() {
    return eR.supports(eh.AN.AUTOMATIC_GAIN_CONTROL)
  }
  isAdvancedVoiceActivitySupported() {
    return ez || !1
  }
  isAecDumpSupported() {
    return eR.supports(eh.AN.AEC_DUMP)
  }
  isSimulcastSupported() {
    return eR.supports(eh.AN.VIDEO) && eR.supports(eh.AN.SIMULCAST)
  }
  getAecDump() {
    return e5().aecDumpEnabled
  }
  getMediaEngine() {
    return eR
  }
  getVideoComponent() {
    return eR.supports(eh.AN.DIRECT_VIDEO) && eR.setUseDirectVideo(!0), eR.Video
  }
  getCameraComponent() {
    return eR.supports(eh.AN.DIRECT_VIDEO) && eR.setUseDirectVideo(!0), eR.Camera
  }
  isEnabled() {
    return ev
  }
  isMute() {
    return this.isSelfMute() || eU
  }
  isDeaf() {
    return this.isSelfDeaf() || ew
  }
  hasContext(e) {
    return null != eg[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
    return e === eh.Yn.DEFAULT && eb
  }
  isSelfMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
    return !this.isEnabled() || e5(e).mute || !K.Z.didHavePermission(eI.Eu.AUDIO) || this.isSelfDeaf(e) || e === eh.Yn.DEFAULT && eG
  }
  shouldSkipMuteUnmuteSound() {
    let {
      airpodsMuteSupported: e
    } = U.Z.getCurrentConfig({
      location: "shouldSkipMuteUnmuteSound"
    }, {
      autoTrackExposure: !0
    });
    return !!e && ek
  }
  notifyMuteUnmuteSoundWasSkipped() {
    ek = !1
  }
  isHardwareMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(e) && eo.Z.isHardwareMute(this.getInputDeviceId())
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
    return !this.isSupported() || e5(e).deaf
  }
  isVideoEnabled() {
    return ex && eH
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
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.STREAM;
    return eD === e && null != s
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.STREAM;
    return eD === t && null != s && (null === (e = s.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
    return e !== er.default.getId() && (e5(t).localMutes[e] || !1)
  }
  supportsDisableLocalVideo() {
    return eR.supports(eh.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
    return null !== (t = e5(n).disabledLocalVideos[e]) && void 0 !== t && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
    return null !== (t = e5(n).videoToggleStateMap[e]) && void 0 !== t ? t : ed.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
    return t === eh.Yn.DEFAULT && e$.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
    return e === eh.Yn.DEFAULT && e$.size > 0
  }
  isMediaFilterSettingLoading() {
    return eQ
  }
  isNativeAudioPermissionReady() {
    return eJ
  }
  getGoLiveSource() {
    return s
  }
  getGoLiveContext() {
    return eD
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
      n = e5(t).localPans[e];
    return null != n ? n : em
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
      n = t === eh.Yn.STREAM ? eh.Yh : eh.Qx,
      i = e5(t).localVolumes[e];
    return null != i ? i : n
  }
  getInputVolume() {
    return e5().inputVolume
  }
  getOutputVolume() {
    return e5().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
    return e5(e).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
    return e5(e).modeOptions
  }
  getShortcuts() {
    let e = {};
    return E().each(eg, (t, n) => {
      let {
        mode: i,
        modeOptions: {
          shortcut: r
        }
      } = t;
      i === ed.pM4.PUSH_TO_TALK && eC.has(n) && (e[n] = r)
    }), e
  }
  getInputDeviceId() {
    return tc(eM, e5().inputDeviceId)
  }
  getOutputDeviceId() {
    return tc(eP, e5().outputDeviceId)
  }
  getVideoDeviceId() {
    return tc(ey, e5().videoDeviceId)
  }
  getInputDevices() {
    return eM
  }
  getOutputDevices() {
    return eP
  }
  getVideoDevices() {
    return ey
  }
  getEchoCancellation() {
    let e = e5();
    return eo.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
  }
  getH265Enabled() {
    return e5().h265Enabled
  }
  getLoopback() {
    return eR.getLoopback()
  }
  getNoiseSuppression() {
    let e = e5();
    return eo.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = e5();
    return eo.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
  }
  getNoiseCancellation() {
    return e5().noiseCancellation
  }
  getExperimentalEncoders() {
    return e5().experimentalEncoders
  }
  getHardwareEncoding() {
    var e;
    return null === (e = e5().hardwareEncoding) || void 0 === e || e
  }
  getEnableSilenceWarning() {
    return e5().silenceWarning
  }
  getDebugLogging() {
    return eR.getDebugLogging()
  }
  getQoS() {
    return e5().qos
  }
  getAttenuation() {
    return e5().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return e5().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return e5().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return eR.getAudioSubsystem()
  }
  getSettings() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
    return e5(e)
  }
  getState() {
    return {
      settingsByContext: eg,
      inputDevices: eM,
      outputDevices: eP,
      appSupported: e2,
      krispModuleLoaded: ez,
      goLiveSource: s,
      goLiveContext: eD
    }
  }
  getInputDetected() {
    return eF
  }
  getNoInputDetectedNotice() {
    return ej
  }
  getPacketDelay() {
    return ee.isPlatformEmbedded || this.getMode() !== ed.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    eR.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return eL
  }
  getVideoHook() {
    return e5().videoHook
  }
  supportsVideoHook() {
    return eR.supports(eh.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = e5().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == e || e)
  }
  supportsExperimentalSoundshare() {
    return eR.supports(eh.AN.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, eE.I9)
  }
  getOpenH264() {
    return e5().openH264
  }
  getEverSpeakingWhileMuted() {
    return eV
  }
  supportsScreenSoundshare() {
    return (0, ee.isMac)() && eR.supports(eh.AN.SOUNDSHARE) && T().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, eE.yG) && tr() || (0, ee.isWindows)() && eR.supports(eh.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
  }
  getVideoStreamParameters() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT,
      t = this.supports(eh.AN.VIDEO) ? [{
        rid: "100",
        type: e === eh.Yn.DEFAULT ? eh.Tr.VIDEO : eh.Tr.SCREEN,
        quality: 100
      }] : [];
    return this.isSimulcastSupported() && (e === eh.Yn.DEFAULT || ts()) && t.push({
      rid: "50",
      type: e === eh.Yn.DEFAULT ? eh.Tr.VIDEO : eh.Tr.SCREEN,
      quality: 50
    }), t
  }
  getSupportedSecureFramesProtocolVersion(e) {
    var t;
    let n = eR.getSupportedSecureFramesProtocolVersion(),
      i = H.m.getCurrentConfig({
        location: "MediaEngineStore"
      }),
      r = null != e ? H.N.getCurrentConfig({
        guildId: e,
        location: "MediaEngineStore"
      }) : null,
      s = i.canSupportSecureFrames || (null == r ? void 0 : r.canSupportSecureFrames),
      o = i.canSupportMls || (null == r ? void 0 : r.canSupportMls),
      a = Math.max(i.protocolVersionFloor, null !== (t = null == r ? void 0 : r.protocolVersionFloor) && void 0 !== t ? t : 0);
    return s && n % 100 >= a ? o ? n : n % 100 : 0
  }
  hasClipsSource() {
    return null != o
  }
}
eS(tm, "displayName", "MediaEngineStore"), i = new tm(N.Z, {
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n,
      currentVoiceChannelId: i,
      video: r
    } = e;
    if (i !== n && te(r, null), null != t || null == n) {
      eW = !1;
      return
    }
    if (eW) return;
    eW = !0;
    let s = e5();
    (s.mute || s.deaf) && (ta({
      deaf: !1,
      mute: !1
    }), eR.eachConnection(e9))
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => r === t.sessionId ? (eU = t.mute || t.suppress, ew = t.deaf, eR.eachConnection(e9), te(!(null != t.guildId && null != t.channelId && null != eq && eq !== t.channelId) && ex), eq = t.channelId, !0) : (!__OVERLAY__ && t.userId === er.default.getId() && null == eu.Z.getChannelId() && te(!1, null), e), !1)
  },
  CONNECTION_OPEN: function(e) {
    r = e.sessionId, eU = !1, ew = !1, (0, z.R)() && td()
  },
  CONNECTION_CLOSED: function() {
    r = null
  },
  RTC_CONNECTION_STATE: function(e) {
    switch (e.state) {
      case ed.hes.CONNECTING:
        tl();
        break;
      case ed.hes.RTC_CONNECTING:
        eY = !1, ej = !1;
        break;
      case ed.hes.RTC_CONNECTED:
        te();
        break;
      case ed.hes.DISCONNECTED:
        (function() {
          if (0 === e$.size) return;
          let e = eh.Yn.DEFAULT,
            {
              disabledLocalVideos: t
            } = e5(e);
          e$.forEach(n => {
            c()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eR.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
          }), e$.clear(), ta({
            disabledLocalVideos: t
          }, e, !1)
        })(), tT()
    }
    to.update()
  },
  AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
    let {
      mute: t
    } = e;
    eb = t, eR.eachConnection(e9)
  },
  AUDIO_TOGGLE_SELF_MUTE: function(e) {
    let {
      context: t,
      skipMuteUnmuteSoundEffect: n
    } = e, {
      mute: i,
      deaf: r
    } = e5(t);
    if (t === eh.Yn.DEFAULT && (K.Z.requestPermission(eI.Eu.AUDIO), eG)) return !1;
    !(i = !r && !i) && (r = !1), n && (ek = !0), ta({
      mute: i,
      deaf: r
    }, t), eR.eachConnection(e9)
  },
  AUDIO_SET_SELF_MUTE: function(e) {
    let {
      context: t,
      mute: n
    } = e;
    ta({
      mute: n
    }, t), eR.eachConnection(e9)
  },
  AUDIO_TOGGLE_SELF_DEAF: function(e) {
    let {
      context: t
    } = e;
    ta({
      deaf: !e5(t).deaf
    }, t), eR.eachConnection(e9)
  },
  AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
    let {
      context: t,
      userId: n
    } = e;
    if (n === er.default.getId()) return;
    let {
      localMutes: i
    } = e5(t);
    i[n] ? delete i[n] : i[n] = !0, ta({
      localMutes: i
    }, t), eR.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
    var t, n, i, r, s, o, a;
    let {
      context: l,
      userId: u,
      videoToggleState: _,
      persist: d,
      isAutomatic: E
    } = e;
    c()(!(d && E), "These are not allowed to both be true.");
    let I = _ === ed.ZUi.DISABLED,
      {
        disabledLocalVideos: T
      } = e5(l),
      h = null !== (t = T[u]) && void 0 !== t && t,
      f = e$.has(u),
      S = _ === ed.ZUi.AUTO_ENABLED || _ === ed.ZUi.MANUAL_ENABLED;
    eA.info("disableVideo=".concat(I, " currentlyDisabled=").concat(h, " currentlyAutoDisabled=").concat(f, ", isVideoShown=").concat(S)), c()(!(f && !h), "If you are auto-disabled, then you are also disabled.");
    let A = I !== h,
      N = l === eh.Yn.DEFAULT,
      m = E && A && N,
      O = d && A && N;
    eA.info("changed=".concat(A, " isDefaultContext=").concat(N, " isUpdateCausedByVideoHealthManager=").concat(m, " isManualToggleByUser=").concat(O));
    let {
      videoToggleStateMap: p
    } = e5(l);
    if (p[u] === ed.ZUi.AUTO_PROBING && _ === ed.ZUi.AUTO_ENABLED && (0, W.Z)(u, I ? eh.fC.AUTO_DISABLE : eh.fC.AUTO_ENABLE, S), p[u] = _, ta({
        videoToggleStateMap: p
      }, l, d), _ === ed.ZUi.AUTO_PROBING ? null === (n = eu.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = eu.Z.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !e0 && (eA.info("isAutoDisableAllowed=".concat(e0, " - disabling VideoHealthManager")), null === (s = eu.Z.getRTCConnection()) || void 0 === s || null === (r = s.getVideoHealthManager()) || void 0 === r || r.disable()), m) {
      if (!I && !f || I && !e0) return;
      (0, W.Z)(u, I ? eh.fC.AUTO_DISABLE : eh.fC.AUTO_ENABLE, S), I ? e$.add(u) : e$.delete(u)
    } else O && (f && !I ? (eA.info("disallowing auto-disable for this session because of manual override by user"), e0 = !1, null === (a = eu.Z.getRTCConnection()) || void 0 === a || null === (o = a.getVideoHealthManager()) || void 0 === o || o.disable(), (0, W.Z)(u, eh.fC.MANUAL_REENABLE, S)) : (0, W.Z)(u, I ? eh.fC.MANUAL_DISABLE : eh.fC.MANUAL_ENABLE, S));
    N && !I && e$.delete(u), I ? T[u] = !0 : delete T[u], ta({
      disabledLocalVideos: T
    }, l, d), eR.eachConnection(e => {
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
    let r = t === eh.Yn.STREAM ? eh.Yh : eh.Qx,
      {
        localVolumes: s
      } = e5(t);
    i === r ? delete s[n] : s[n] = i, ta({
      localVolumes: s
    }, t), eR.eachConnection(e => e.setLocalVolume(n, i), t)
  },
  AUDIO_SET_LOCAL_PAN: function(e) {
    let {
      context: t,
      userId: n,
      left: i,
      right: r
    } = e, {
      localPans: s
    } = e5(t);
    s[n] = {
      left: i,
      right: r
    }, ta({
      localPans: s
    }, t), eR.eachConnection(e => e.setLocalPan(n, i, r), t)
  },
  AUDIO_SET_MODE: function(e) {
    let {
      context: t,
      mode: n,
      options: i
    } = e;
    ta({
      mode: n,
      modeOptions: i
    }, t), eR.eachConnection(e6), to.update()
  },
  AUDIO_SET_INPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    ta({
      inputVolume: e8(t)
    }), eR.setInputVolume(t)
  },
  AUDIO_SET_OUTPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    ta({
      outputVolume: t
    }), eR.setOutputVolume(t)
  },
  AUDIO_SET_INPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ta({
      inputDeviceId: t = tc(eM, t)
    }), eR.setAudioInputDevice(t)
  },
  AUDIO_SET_OUTPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ta({
      outputDeviceId: t = tc(eP, t)
    }), eR.setAudioOutputDevice(t)
  },
  AUDIO_SET_ECHO_CANCELLATION: function(e) {
    let t = ta({
      echoCancellation: e.enabled
    });
    eR.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tf(), th(e.location)
  },
  AUDIO_SET_LOOPBACK: function(e) {
    let {
      enabled: t
    } = e;
    return e1 = t, tf()
  },
  AUDIO_SET_NOISE_SUPPRESSION: function(e) {
    let t = ta({
      noiseSuppression: e.enabled
    });
    eR.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tf(), th(e.location)
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
    let t = ta({
      automaticGainControl: e.enabled
    });
    eR.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tf(), th(e.location)
  },
  AUDIO_SET_NOISE_CANCELLATION: function(e) {
    let t = ta({
      noiseCancellation: e.enabled
    });
    eR.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tf(), th(e.location)
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
    ta({
      silenceWarning: e.enabled
    }), to.update()
  },
  AUDIO_SET_DEBUG_LOGGING: function(e) {
    eR.setDebugLogging(e.enabled)
  },
  MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
    ta({
      videoHook: e.enabled
    })
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
    ta({
      experimentalSoundshare2: e.enabled
    })
  },
  AUDIO_SET_ATTENUATION: function(e) {
    let {
      attenuation: t,
      attenuateWhileSpeakingSelf: n,
      attenuateWhileSpeakingOthers: i
    } = e, r = ta({
      attenuation: t,
      attenuateWhileSpeakingSelf: n,
      attenuateWhileSpeakingOthers: i
    });
    eR.eachConnection(e => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers))
  },
  AUDIO_SET_QOS: function(e) {
    let {
      enabled: t
    } = e;
    ta({
      qos: t
    }), eR.eachConnection(e => e.setQoS(t))
  },
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: n,
      videoDevices: i
    } = e;
    ! function(e) {
      let t = eM;
      if (eM = t_(e, ef.Z.Messages.NO_INPUT_DEVICES), !E().isEqual(eM, t)) {
        let e = e5(),
          t = tc(eM, e.inputDeviceId);
        eR.setAudioInputDevice(t)
      }
    }(t), ! function(e) {
      let t = eP;
      if (eP = t_(e, ef.Z.Messages.NO_OUTPUT_DEVICES), !E().isEqual(eP, t)) {
        let e = e5(),
          t = tc(eP, e.outputDeviceId);
        eR.setAudioOutputDevice(t)
      }
    }(n), ! function(e) {
      eH = e.length > 0;
      let t = ey;
      if (ey = t_(e, ef.Z.Messages.NO_VIDEO_DEVICES), ex && !E().isEqual(ey, t)) {
        var n;
        let e = void 0 !== ey[eB],
          i = eB === eh.w5 && (null === (n = t[eh.w5]) || void 0 === n ? void 0 : n.disabled);
        te(e || i)
      }
    }(i)
  },
  AUDIO_VOLUME_CHANGE: function(e) {
    let {
      inputVolume: t,
      outputVolume: n
    } = e;
    ta({
      inputVolume: e8(t),
      outputVolume: n
    })
  },
  AUDIO_RESET: function() {
    S.K.remove(eN), location.reload()
  },
  AUDIO_INPUT_DETECTED: function(e) {
    let {
      inputDetected: t
    } = e;
    eF = t, !eY && eF && (eY = !0, to.update())
  },
  AUDIO_SET_SUBSYSTEM: function(e) {
    eR.setAudioSubsystem(e.subsystem)
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
    ev = e.enabled, e.unmute && ta({
      mute: !1,
      deaf: !1
    }), eR.eachConnection(e9)
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
    let {
      enabled: t
    } = e;
    K.Z.requestPermission(eI.Eu.CAMERA), te(t)
  },
  MEDIA_ENGINE_PERMISSION: function(e) {
    let {
      kind: t,
      granted: n
    } = e;
    if (!n) switch (t) {
      case "audio":
        ev = !1, eR.eachConnection(e9);
        break;
      case "video":
        te(!1)
    }
  },
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
    var t, n, i, r;
    let {
      settings: o
    } = e;
    if ((null == o ? void 0 : o.desktopSettings) != null) {
      let e = null,
        i = null,
        {
          sourceId: r,
          sound: a
        } = o.desktopSettings,
        l = null !== (t = o.context) && void 0 !== t ? t : eh.Yn.DEFAULT,
        u = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
          resolution: 720,
          frameRate: 30
        },
        _ = J.Z.getPidFromDesktopSource(r);
      ee.isPlatformEmbedded && !0 === a && ({
        soundshareId: e,
        soundshareSession: i
      } = tE(_), null != e && tI(e, i)), ! function(e) {
        if (e !== eD) null != s && eR.setGoLiveSource(null, eD), eD = e
      }(l), te(l === eh.Yn.STREAM && ex, {
        desktopSource: {
          id: r,
          sourcePid: _,
          soundshareId: e,
          soundshareSession: i
        },
        quality: {
          resolution: u.resolution,
          frameRate: u.frameRate
        }
      })
    } else if ((null == o ? void 0 : o.cameraSettings) != null) {
      let e = null !== (i = o.context) && void 0 !== i ? i : eh.Yn.DEFAULT,
        {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        } = o.cameraSettings,
        s = e === eh.Yn.STREAM && ex,
        a = null !== (r = o.qualityOptions) && void 0 !== r ? r : {
          resolution: 720,
          frameRate: 30
        };
      te(s, {
        cameraSource: {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        },
        quality: {
          resolution: a.resolution,
          frameRate: a.frameRate
        }
      })
    } else te(ex, null)
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ta({
      videoDeviceId: t = tc(ey, t)
    }), te()
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
    let t = ta({
      experimentalEncoders: e.enabled
    });
    eR.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
  },
  MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
    return eL !== e.required && (eL = e.required, !e.required && eR.interact(), !0)
  },
  USER_SETTINGS_MODAL_INIT: tN,
  USER_SETTINGS_MODAL_SET_SECTION: tN,
  CERTIFIED_DEVICES_SET: function() {
    return eR.eachConnection(tn), !1
  },
  RPC_APP_CONNECTED: function(e) {
    let {
      application: t
    } = e;
    eC.add(t.id)
  },
  RPC_APP_DISCONNECTED: function(e) {
    let {
      application: t
    } = e;
    eC.delete(t.id)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      mediaEngineState: t
    } = e;
    eg = t.settingsByContext, eM = t.inputDevices, eP = t.outputDevices, e2 = t.appSupported, ez = t.krispModuleLoaded, eD = t.goLiveContext
  },
  MEDIA_ENGINE_SET_OPEN_H264: function(e) {
    let {
      enabled: t
    } = e, n = ta({
      openH264: t
    });
    eR.setH264Enabled(n.hardwareEncoding || n.openH264), eR.eachConnection(e => {
      var t;
      return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t)
    })
  },
  MEDIA_ENGINE_SET_HARDWARE_ENCODING: function(e) {
    var t, n;
    let {
      enabled: i
    } = e, r = ta({
      hardwareEncoding: i
    });
    eR.eachConnection(e => {
      var t;
      return e.setHardwareH264(null === (t = r.hardwareEncoding) || void 0 === t || t)
    }), eR.setH264Enabled(r.hardwareEncoding || r.openH264), eR.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t), eR.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n)
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e, n = M.Z.isEnabled();
    if (t === ed.$7l.BACKGROUND && ex && !n) eZ = !0, te(!1);
    else {
      if (t !== ed.$7l.ACTIVE || !eZ) return !1;
      eZ = !1, te(!0)
    }
    return !0
  },
  SET_CHANNEL_BITRATE: function(e) {
    eR.eachConnection(t => t.setBitRate(e.bitrate))
  },
  SET_VAD_PERMISSION: function(e) {
    let {
      hasPermission: t
    } = e, n = !t;
    if (n === eG) return !1;
    eG = n, eR.eachConnection(e9)
  },
  SET_NATIVE_PERMISSION: function(e) {
    let {
      state: t,
      permissionType: n
    } = e, i = t === eI.PQ.ACCEPTED;
    switch (n) {
      case eI.Eu.AUDIO:
        eJ = !0, eR.eachConnection(e9);
        break;
      case eI.Eu.CAMERA:
        !i && ex && te(!1);
        break;
      default:
        return !1
    }
  },
  SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
    eR.eachConnection(t => t.applyVideoQualityMode(e.mode))
  },
  MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
    let {
      enabled: t
    } = e, n = ta({
      aecDumpEnabled: t
    });
    eR.setAecDump(n.aecDumpEnabled)
  },
  CHANNEL_DELETE: function() {
    if (!ex && null == s || null != eu.Z.getRTCConnectionId()) return !1;
    te(!1, null)
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
    return !!eX && (eX = !1, !0)
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    eR.applyMediaFilterSettings(t).finally(() => {
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
    if (!(0, z.R)() || t !== eT.yP.PRELOADED_USER_SETTINGS || n || null != i) return !1;
    td(!0)
  },
  CLIPS_INIT: function(e) {
    let {
      sourceId: t,
      applicationName: n,
      quality: r
    } = e, {
      enableDecoupledGameClipping: s
    } = B.Z.getCurrentConfig({
      location: "handleClipsInit"
    }, {
      autoTrackExposure: !0
    }), a = g.Z.getSettings().decoupledClipsEnabled;
    if (!s || !a || null == m.Z) return;
    let l = null,
      u = null,
      _ = J.Z.getPidFromDesktopSource(t);
    ({
      soundshareId: l,
      soundshareSession: u
    } = tE(_));
    let c = {
      desktopSource: {
        id: t,
        sourcePid: _,
        soundshareId: l,
        soundshareSession: u
      },
      quality: r
    };
    null != o && o.desktopSource.id !== c.desktopSource.id && (eR.setClipsSource(null), (0, ee.isWindows)() && null != o.desktopSource.soundshareId && O.pn(o.desktopSource.soundshareId)), null != l && tI(l, u), o = c;
    let {
      hdrCaptureMode: d
    } = k.Z.getCurrentConfig({
      location: "f627ab_12"
    }, {
      autoTrackExposure: !1
    }), E = e5().videoHook;
    eR.setClipsSource({
      desktopDescription: {
        id: o.desktopSource.id,
        soundshareId: o.desktopSource.soundshareId,
        useVideoHook: E,
        useGraphicsCapture: ti(),
        useLoopback: i.getExperimentalSoundshare(),
        useQuartzCapturer: !0,
        allowScreenCaptureKit: tr(),
        videoHookStaleFrameTimeoutMs: 500,
        graphicsCaptureStaleFrameTimeoutMs: eO,
        hdrCaptureMode: d
      },
      quality: r,
      applicationName: n
    })
  },
  CLIPS_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    !1 === t.decoupledClipsEnabled && (o = null, eR.setClipsSource(null))
  }
}), t.Z = i