"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("222007"), n("702976");
var i = n("446674"),
  s = n("913144"),
  r = n("49671"),
  a = n("374014"),
  o = n("271938"),
  l = n("42887"),
  u = n("568307"),
  d = n("568734"),
  c = n("30591"),
  f = n("80028"),
  _ = n("49111"),
  h = n("686298");
let g = "default",
  m = [],
  E = [],
  p = [],
  v = 0,
  S = null,
  T = null,
  I = {},
  C = null,
  A = null,
  y = {},
  N = {
    clipsEnabled: !1,
    storageLocation: g,
    clipsQuality: {
      resolution: h.ApplicationStreamResolutions.RESOLUTION_1080,
      frameRate: h.ApplicationStreamFPS.FPS_30
    },
    clipsLength: f.ClipsLengthSettings.SECONDS_30,
    remindersEnabled: !0,
    decoupledClipsEnabled: !1,
    viewerClipsEnabled: !0,
    viewerConnectivity: f.ClipsViewerConnectivitySettings.ALL
  },
  R = {
    clipsSettings: N,
    hardwareClassification: null,
    hardwareClassificationForDecoupled: null,
    hardwareClassificationVersion: 0,
    newClipIds: [],
    hasClips: !1,
    hasTakenDecoupledClip: !1,
    clipsEducationState: {
      dismissedAt: null,
      numberOfGamesLaunchedSinceDismissal: 0,
      numberOfTimesDismissed: 0
    }
  };
async function D() {
  if (R.clipsSettings.storageLocation !== g || null == r.default || null == r.default.remoteApp) return;
  let e = await r.default.remoteApp.getPath("documents");
  R.clipsSettings.storageLocation = e, P.emitChange()
}
class O extends i.default.DeviceSettingsStore {
  initialize(e) {
    null != e && (R = e), D(), this.waitFor(u.default)
  }
  getClips() {
    return E
  }
  getPendingClips() {
    return p
  }
  getUserAgnosticState() {
    return R
  }
  getSettings() {
    return R.clipsSettings
  }
  getLastClipsSession() {
    return T
  }
  getClipsWarningShown(e) {
    return S === e
  }
  getActiveAnimation() {
    return A
  }
  getStreamClipAnimations(e) {
    var t;
    return null !== (t = y[e]) && void 0 !== t ? t : m
  }
  hasAnyClipAnimations() {
    return Object.values(y).some(e => e.length > 0)
  }
  getHardwareClassification() {
    return R.hardwareClassification
  }
  getHardwareClassificationForDecoupled() {
    return R.hardwareClassificationForDecoupled
  }
  getHardwareClassificationVersion() {
    return R.hardwareClassificationVersion
  }
  getIsAtMaxSaveClipOperations() {
    return v >= f.MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS
  }
  getLastClipsError() {
    return C
  }
  isClipsEnabledForUser(e) {
    var t, n;
    return null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.clipsEnabled) && void 0 !== n && n
  }
  isVoiceRecordingAllowedForUser(e) {
    var t, n;
    return null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.allowVoiceRecording) && void 0 !== n && n
  }
  isViewerClippingAllowedForUser(e) {
    var t, n;
    return null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.allowAnyViewerClips) && void 0 !== n && n
  }
  hasClips() {
    return R.hasClips
  }
  hasTakenDecoupledClip() {
    return R.hasTakenDecoupledClip
  }
  getNewClipIds() {
    return R.newClipIds
  }
}
O.displayName = "ClipsStore", O.persistKey = "ClipsStore", O.migrations = [e => ({
  clipsSettings: null != e ? e : N,
  newClipsCount: 0
}), e => {
  let t = {
    ...N,
    ...e.clipsSettings
  };
  return {
    ...e,
    clipsSettings: t
  }
}, e => {
  var t;
  return {
    ...e,
    newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : []
  }
}, e => {
  var t, n;
  return {
    ...e,
    hardwareClassification: null !== (t = e.hardwareClassification) && void 0 !== t ? t : null,
    hardwareClassificationVersion: null !== (n = e.hardwareClassificationVersion) && void 0 !== n ? n : 0
  }
}, e => {
  var t;
  return {
    ...e,
    hasClips: null !== (t = e.hasClips) && void 0 !== t && t
  }
}, e => ({
  ...e,
  clipsSettings: {
    ...e.clipsSettings,
    decoupledClipsEnabled: N.decoupledClipsEnabled
  }
}), e => {
  var t;
  return {
    ...e,
    hardwareClassificationForDecoupled: null !== (t = e.hardwareClassificationForDecoupled) && void 0 !== t ? t : null
  }
}, e => {
  let t = null != l.default && l.default.getHardwareH264();
  return {
    ...e,
    clipsSettings: {
      ...e.clipsSettings,
      clipsEnabled: !!t && e.clipsSettings.clipsEnabled,
      decoupledClipsEnabled: !!t && e.clipsSettings.decoupledClipsEnabled
    }
  }
}, e => {
  var t;
  return {
    ...e,
    newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : [],
    newClipIDs: void 0
  }
}, e => ({
  ...e,
  clipsSettings: {
    ...e.clipsSettings,
    clipsQuality: "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? N.clipsQuality : e.clipsSettings.clipsQuality
  }
}), e => {
  var t;
  return {
    ...e,
    clipsSettings: {
      ...e.clipsSettings,
      remindersEnabled: null !== (t = e.clipsSettings.remindersEnabled) && void 0 !== t ? t : N.remindersEnabled
    }
  }
}, e => ({
  ...e,
  hasTakenDecoupledClip: !1,
  clipsEducationState: {
    dismissedAt: null,
    numberOfGamesLaunchedSinceDismissal: 0,
    numberOfTimesDismissed: 0
  }
})];
let P = new O(s.default, {
  CLIPS_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    R = {
      ...R,
      clipsSettings: {
        ...R.clipsSettings,
        ...t
      }
    }
  },
  CLIPS_SAVE_CLIP: function(e) {
    var t, n;
    let {
      clip: i
    } = e;
    v = Math.max(v - 1, 0), T = {
      applicationName: i.applicationName,
      ended: !1,
      ...T,
      newClipIds: [...null !== (t = null == T ? void 0 : T.newClipIds) && void 0 !== t ? t : [], i.id]
    }, R = {
      ...R,
      newClipIds: [...null !== (n = R.newClipIds) && void 0 !== n ? n : [], i.id]
    }, p = p.filter(e => {
      let {
        id: t
      } = e;
      return t !== i.id
    }), E = [i, ...E], R.hasClips = !0
  },
  CLIPS_SAVE_CLIP_PLACEHOLDER: function(e) {
    let {
      clip: t
    } = e;
    p = [t, ...p]
  },
  CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function(e) {
    let {
      clipId: t
    } = e;
    p = p.filter(e => {
      let {
        id: n
      } = e;
      return n !== t
    })
  },
  CLIPS_SAVE_CLIP_START: function(e) {
    let {
      clipType: t,
      streamKey: n,
      thumbnail: i
    } = e;
    if (v += 1, R.hasTakenDecoupledClip = R.hasTakenDecoupledClip || t === f.ClipSaveTypes.DECOUPLED, null != n && null != i) {
      var s;
      let e = Date.now();
      A = null != A ? A : e, y[n] = [...null !== (s = y[n]) && void 0 !== s ? s : [], {
        timestamp: e,
        thumbnail: i
      }]
    }
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    v = Math.max(v - 1, 0)
  },
  CLIPS_SAVE_ANIMATION_END: function(e) {
    let {
      streamKey: t,
      timestamp: n
    } = e;
    A === n && (A = null), null == n ? y[t] = [] : y[t] = y[t].filter(e => e.timestamp !== n)
  },
  STREAM_START: function(e) {
    let {
      sourceName: t,
      pid: n
    } = e;
    if (!R.clipsSettings.clipsEnabled) return !1;
    let i = t;
    if (null != n) {
      var s;
      let e = u.default.getGameForPID(n);
      i = null !== (s = null == e ? void 0 : e.name) && void 0 !== s ? s : i
    }
    if (null == i || "" === i) return !1;
    T = {
      applicationName: i,
      newClipIds: [],
      ended: !1
    }
  },
  STREAM_STOP: function(e) {
    let {
      streamKey: t
    } = e;
    if (A = null, y[t] = [], null == T || (0, a.decodeStreamKey)(t).ownerId !== o.default.getId()) return !1;
    T = 0 === T.newClipIds.length ? null : {
      ...T,
      ended: !0
    }
  },
  CLIPS_CLEAR_CLIPS_SESSION: function() {
    if (null == T) return !1;
    T = null
  },
  CLIPS_CLEAR_NEW_CLIP_IDS: function() {
    R.newClipIds = []
  },
  CLIPS_LOAD_DIRECTORY_SUCCESS: function(e) {
    R.hasClips = e.clips.length > 0, E = e.clips
  },
  CLIPS_DELETE_CLIP: function(e) {
    0 === (E = E.filter(t => {
      let {
        filepath: n
      } = t;
      return n !== e.filepath
    })).length && (R.hasClips = !1)
  },
  CLIPS_UPDATE_METADATA: function(e) {
    let {
      clip: t
    } = e;
    for (let [e, n] of E.entries())
      if (n.id === t.id) {
        E[e] = t, E = [...E];
        return
      }
  },
  RTC_CONNECTION_FLAGS: function(e) {
    I[e.userId] = {
      clipsEnabled: (0, d.hasFlag)(e.flags, _.VoiceFlags.CLIPS_ENABLED),
      allowVoiceRecording: (0, d.hasFlag)(e.flags, _.VoiceFlags.ALLOW_VOICE_RECORDING),
      allowAnyViewerClips: (0, d.hasFlag)(e.flags, _.VoiceFlags.ALLOW_ANY_VIEWER_CLIPS)
    }
  },
  CLIPS_SHOW_CALL_WARNING: function(e) {
    let {
      channelId: t
    } = e;
    S = t
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    t !== S && (S = null)
  },
  CLIPS_CLASSIFY_HARDWARE: function(e) {
    let {
      classification: t
    } = e, n = R.hardwareClassification;
    R.hardwareClassificationVersion = f.CLIPS_HARDWARE_CLASSIFICATION_VERSION, R.hardwareClassification = t, R.hardwareClassification === c.ClipsHardwareClassification.MEETS_AUTO_ENABLE && n !== c.ClipsHardwareClassification.MEETS_AUTO_ENABLE && (R.clipsSettings.clipsEnabled = !0);
    let i = R.hardwareClassificationForDecoupled;
    R.hardwareClassificationForDecoupled = t, R.hardwareClassificationForDecoupled === c.ClipsHardwareClassification.MEETS_AUTO_ENABLE && i !== c.ClipsHardwareClassification.MEETS_AUTO_ENABLE && R.clipsSettings.clipsEnabled && (R.clipsSettings.decoupledClipsEnabled = !0)
  },
  CLIPS_INIT: function(e) {
    let {
      applicationName: t
    } = e;
    if (C = null, !R.clipsSettings.clipsEnabled) return !1;
    T = {
      applicationName: t,
      newClipIds: [],
      ended: !1
    }
  },
  CLIPS_INIT_FAILURE: function(e) {
    let {
      errMsg: t
    } = e;
    C = t
  },
  CLIPS_DISMISS_EDUCATION: function(e) {
    let {
      educationType: t
    } = e;
    switch (t) {
      case f.ClipsUserEducationType.Error:
        C = null;
        break;
      case f.ClipsUserEducationType.Disabled:
      case f.ClipsUserEducationType.Enabled:
        R.clipsEducationState.dismissedAt = Date.now(), R.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0, R.clipsEducationState.numberOfTimesDismissed += 1
    }
  },
  RUNNING_GAMES_CHANGE: function(e) {
    let {
      added: t
    } = e;
    t.length > 0 && (R.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1)
  }
});
var b = P