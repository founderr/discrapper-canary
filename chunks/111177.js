"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007");
var i, a = n("773364"),
  l = n("913144"),
  s = n("689988"),
  r = n("49671"),
  o = n("374014"),
  u = n("103979"),
  d = n("271938"),
  c = n("42887"),
  f = n("945956"),
  E = n("205817"),
  h = n("599110"),
  _ = n("773336"),
  C = n("56947"),
  S = n("386045"),
  g = n("30591"),
  T = n("18346"),
  m = n("80028"),
  p = n("49111"),
  I = n("706530");
i = class extends s.default {
  handleRTCConnectionState(e) {
    let {
      context: t,
      state: n,
      streamKey: i
    } = e;
    if (!(0, C.areClipsEnabled)() || n !== p.RTCConnectionStates.RTC_CONNECTED) return;
    let l = d.default.getId();
    if (t === a.MediaEngineContextTypes.DEFAULT) return this.applyUserVoiceRecording(l);
    if (t === a.MediaEngineContextTypes.STREAM && null != i) {
      let {
        ownerId: e
      } = (0, o.decodeStreamKey)(i);
      if (e !== l) return;
      let t = E.default.getRTCConnection(i);
      if (null == t) return;
      this.applyStreamRecording(l, t)
    }
  }
  handleRTCUserCreate(e) {
    let {
      userId: t,
      context: n
    } = e;
    n === a.MediaEngineContextTypes.DEFAULT && this.applyUserVoiceRecording(t)
  }
  handleRTCConnectionFlags(e) {
    let {
      userId: t,
      channelId: n,
      guildId: i
    } = e;
    this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t);
    let a = E.default.getRTCConnection(o.encodeStreamKey({
      streamType: null != i ? I.StreamTypes.GUILD : I.StreamTypes.CALL,
      ownerId: t,
      channelId: n,
      guildId: i
    }));
    null != a && this.applyStreamRecording(t, a)
  }
  handleClipsInitFailure(e) {
    let {
      applicationName: t,
      errMsg: n
    } = e;
    h.default.track(p.AnalyticEvents.CLIPS_INIT_FAILURE, {
      application_name: t,
      error_message: n
    })
  }
  maybeShowClipsWarning(e) {
    let t = f.default.getChannelId();
    if (!(null == t || S.default.getClipsWarningShown(t)) && e !== d.default.getId()) S.default.isClipsEnabledForUser(e) && (l.default.dispatch({
      type: "CLIPS_SHOW_CALL_WARNING",
      channelId: t
    }), this.showClipsToast())
  }
  handlePostConnectionOpen() {
    if (!(0, T.default)(c.default)) return;
    this.applyNativeClipsSettings();
    let e = (0, C.areClipsEnabled)();
    if (!e) {
      let e = S.default.getSettings();
      e.clipsEnabled && this.disableClips();
      return
    }(null == S.default.getHardwareClassification() || null == S.default.getHardwareClassificationForDecoupled() || S.default.getHardwareClassificationVersion() !== m.CLIPS_HARDWARE_CLASSIFICATION_VERSION) && this.classifyHardwareAndTrack().then(e => {
      l.default.dispatch({
        type: "CLIPS_CLASSIFY_HARDWARE",
        classification: e
      })
    })
  }
  handleRTCConnectionVideo(e) {
    let {
      userId: t,
      context: n,
      channelId: i,
      guildId: l
    } = e;
    if (n !== a.MediaEngineContextTypes.STREAM || !(0, T.default)(c.default)) return;
    let s = E.default.getRTCConnection(o.encodeStreamKey({
      streamType: null != l ? I.StreamTypes.GUILD : I.StreamTypes.CALL,
      ownerId: t,
      channelId: i,
      guildId: l
    }));
    null != s && this.applyStreamRecording(t, s)
  }
  async classifyHardwareAndTrack() {
    try {
      let e = await r.default.processUtils.getSystemInfo(),
        t = this.classifyHardware(e);
      return h.default.track(p.AnalyticEvents.CLIPS_HARDWARE_CLASSIFICATION, {
        classification: t,
        version: m.CLIPS_HARDWARE_CLASSIFICATION_VERSION,
        gpu_models: e.gpus.map(e => {
          let {
            model: t
          } = e;
          return t
        })
      }), t
    } catch (e) {
      return g.ClipsHardwareClassification.UNKNOWN
    }
  }
  classifyHardware(e) {
    if ((0, _.isWindows)()) {
      let t = e.gpus.some(e => {
          let {
            model: t
          } = e;
          return m.WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX.test(t)
        }),
        n = e.gpus.some(e => {
          let {
            model: t
          } = e;
          return m.WINDOWS_HARDWARE_MINIMUM_GPU_REGEX.test(t)
        });
      return t ? g.ClipsHardwareClassification.MEETS_AUTO_ENABLE : n ? g.ClipsHardwareClassification.MEETS_MINIMUM : g.ClipsHardwareClassification.BELOW_MINIMUM
    }
    if ((0, _.isMac)()) {
      let t = e.gpus.some(e => {
        let {
          model: t
        } = e;
        return m.OSX_HARDWARE_AUTO_ENABLE_GPU_REGEX.test(t)
      });
      return t ? g.ClipsHardwareClassification.MEETS_AUTO_ENABLE : g.ClipsHardwareClassification.MEETS_MINIMUM
    }
    return g.ClipsHardwareClassification.UNKNOWN
  }
  applyUserVoiceRecording(e) {
    if (!(0, T.default)(c.default)) return;
    let t = f.default.getRTCConnection();
    if (null == t) return;
    if (e === d.default.getId()) {
      t.setClipRecordUser(e, "audio", S.default.getSettings().clipsEnabled);
      return
    }
    let n = S.default.isVoiceRecordingAllowedForUser(e);
    t.setClipRecordUser(e, "audio", n)
  }
  applyStreamRecording(e, t) {
    if (!(0, T.default)(c.default)) return;
    if (d.default.getId() === e) {
      let {
        clipsEnabled: n
      } = S.default.getSettings(), i = (0, C.areClipsEnabled)();
      t.setClipRecordUser(e, "audio", i && n), t.setClipRecordUser(e, "video", i && n);
      return
    }
    let {
      enableViewerClipping: n,
      ignoreSenderPreference: i
    } = u.default.getCurrentConfig({
      location: "ClipsManager:applyStreamRecording"
    });
    if (!n) return;
    let a = i || S.default.isViewerClippingAllowedForUser(e);
    this.applyNativeClipsSettings(), t.setClipRecordUser(e, "audio", a), t.setClipRecordUser(e, "video", a)
  }
  disableClips() {}
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: e => this.handlePostConnectionOpen(),
      RTC_CONNECTION_FLAGS: e => this.handleRTCConnectionFlags(e),
      RTC_CONNECTION_USER_CREATE: e => this.handleRTCUserCreate(e),
      CLIPS_INIT_FAILURE: e => this.handleClipsInitFailure(e),
      CLIPS_SETTINGS_UPDATE: e => this.applyNativeClipsSettings(e),
      STREAM_START: () => this.applyNativeClipsSettings(),
      RUNNING_GAME_TOGGLE_DETECTION: e => this.handleClipsInitOnToggleDetection(e),
      RUNNING_GAMES_CHANGE: e => this.handleClipsInitOnGamesChange(e),
      CLIPS_RESTART: () => this.fireClipsInitEvent(),
      RTC_CONNECTION_VIDEO: e => this.handleRTCConnectionVideo(e),
      RTC_CONNECTION_STATE: e => this.handleRTCConnectionState(e),
      MEDIA_ENGINE_SET_HARDWARE_H264: e => this.handleMediaEngineSetHardwareH264(e)
    }
  }
}