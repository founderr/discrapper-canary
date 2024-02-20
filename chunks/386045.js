"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("222007"), n("702976");
var i = n("446674"),
  r = n("913144"),
  s = n("49671"),
  a = n("374014"),
  o = n("271938"),
  l = n("568307"),
  u = n("568734"),
  c = n("30591"),
  d = n("80028"),
  p = n("49111"),
  h = n("686298");
let f = "default",
  E = [],
  _ = [],
  m = [],
  S = 0,
  g = null,
  T = null,
  I = {},
  v = null,
  C = null,
  A = {},
  R = {
    clipsEnabled: !1,
    storageLocation: f,
    clipsQuality: {
      resolution: h.ApplicationStreamResolutions.RESOLUTION_1080,
      frameRate: h.ApplicationStreamFPS.FPS_30
    },
    clipsLength: d.ClipsLengthSettings.SECONDS_30,
    remindersEnabled: !0,
    decoupledClipsEnabled: !1,
    viewerClipsEnabled: !0,
    viewerConnectivity: d.ClipsViewerConnectivitySettings.ALL
  },
  N = {
    clipsSettings: R,
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
async function y() {
  if (N.clipsSettings.storageLocation !== f || null == s.default || null == s.default.remoteApp) return;
  let e = await s.default.remoteApp.getPath("documents");
  N.clipsSettings.storageLocation = e, D.emitChange()
}
class O extends i.default.DeviceSettingsStore {
  initialize(e) {
    null != e && (N = e), y(), this.waitFor(l.default)
  }
  getClips() {
    return _
  }
  getPendingClips() {
    return m
  }
  getUserAgnosticState() {
    return N
  }
  getSettings() {
    return N.clipsSettings
  }
  getLastClipsSession() {
    return T
  }
  getClipsWarningShown(e) {
    return g === e
  }
  getActiveAnimation() {
    return C
  }
  getStreamClipAnimations(e) {
    var t;
    return null !== (t = A[e]) && void 0 !== t ? t : E
  }
  hasAnyClipAnimations() {
    return Object.values(A).some(e => e.length > 0)
  }
  getHardwareClassification() {
    return N.hardwareClassification
  }
  getHardwareClassificationForDecoupled() {
    return N.hardwareClassificationForDecoupled
  }
  getHardwareClassificationVersion() {
    return N.hardwareClassificationVersion
  }
  getIsAtMaxSaveClipOperations() {
    return S >= d.MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS
  }
  getLastClipsError() {
    return v
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
    return N.hasClips
  }
  hasTakenDecoupledClip() {
    return N.hasTakenDecoupledClip
  }
  getNewClipIds() {
    return N.newClipIds
  }
}
O.displayName = "ClipsStore", O.persistKey = "ClipsStore", O.migrations = [e => ({
  clipsSettings: null != e ? e : R,
  newClipsCount: 0
}), e => {
  let t = {
    ...R,
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
    decoupledClipsEnabled: R.decoupledClipsEnabled
  }
}), e => {
  var t;
  return {
    ...e,
    hardwareClassificationForDecoupled: null !== (t = e.hardwareClassificationForDecoupled) && void 0 !== t ? t : null
  }
}, e => {
  var t;
  let i = null === (t = n("42887").default) || void 0 === t ? void 0 : t.getHardwareH264();
  return {
    ...e,
    clipsSettings: {
      ...e.clipsSettings,
      clipsEnabled: !!i && e.clipsSettings.clipsEnabled,
      decoupledClipsEnabled: !!i && e.clipsSettings.decoupledClipsEnabled
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
    clipsQuality: "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? R.clipsQuality : e.clipsSettings.clipsQuality
  }
}), e => {
  var t;
  return {
    ...e,
    clipsSettings: {
      ...e.clipsSettings,
      remindersEnabled: null !== (t = e.clipsSettings.remindersEnabled) && void 0 !== t ? t : R.remindersEnabled
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
let D = new O(r.default, {
  CLIPS_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    N = {
      ...N,
      clipsSettings: {
        ...N.clipsSettings,
        ...t
      }
    }
  },
  CLIPS_SAVE_CLIP: function(e) {
    var t, n;
    let {
      clip: i
    } = e;
    S = Math.max(S - 1, 0), T = {
      applicationName: i.applicationName,
      ended: !1,
      ...T,
      newClipIds: [...null !== (t = null == T ? void 0 : T.newClipIds) && void 0 !== t ? t : [], i.id]
    }, N = {
      ...N,
      newClipIds: [...null !== (n = N.newClipIds) && void 0 !== n ? n : [], i.id]
    }, m = m.filter(e => {
      let {
        id: t
      } = e;
      return t !== i.id
    }), _ = [i, ..._], N.hasClips = !0
  },
  CLIPS_SAVE_CLIP_PLACEHOLDER: function(e) {
    let {
      clip: t
    } = e;
    m = [t, ...m]
  },
  CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function(e) {
    let {
      clipId: t
    } = e;
    m = m.filter(e => {
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
    if (S += 1, N.hasTakenDecoupledClip = N.hasTakenDecoupledClip || t === d.ClipSaveTypes.DECOUPLED, null != n && null != i) {
      var r;
      let e = Date.now();
      C = null != C ? C : e, A[n] = [...null !== (r = A[n]) && void 0 !== r ? r : [], {
        timestamp: e,
        thumbnail: i
      }]
    }
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    S = Math.max(S - 1, 0)
  },
  CLIPS_SAVE_ANIMATION_END: function(e) {
    let {
      streamKey: t,
      timestamp: n
    } = e;
    C === n && (C = null), null == n ? A[t] = [] : A[t] = A[t].filter(e => e.timestamp !== n)
  },
  STREAM_START: function(e) {
    let {
      sourceName: t,
      pid: n
    } = e;
    if (!N.clipsSettings.clipsEnabled) return !1;
    let i = t;
    if (null != n) {
      var r;
      let e = l.default.getGameForPID(n);
      i = null !== (r = null == e ? void 0 : e.name) && void 0 !== r ? r : i
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
    if (C = null, A[t] = [], null == T || (0, a.decodeStreamKey)(t).ownerId !== o.default.getId()) return !1;
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
    N.newClipIds = []
  },
  CLIPS_LOAD_DIRECTORY_SUCCESS: function(e) {
    N.hasClips = e.clips.length > 0, _ = e.clips
  },
  CLIPS_DELETE_CLIP: function(e) {
    0 === (_ = _.filter(t => {
      let {
        filepath: n
      } = t;
      return n !== e.filepath
    })).length && (N.hasClips = !1)
  },
  CLIPS_UPDATE_METADATA: function(e) {
    let {
      clip: t
    } = e;
    for (let [e, n] of _.entries())
      if (n.id === t.id) {
        _[e] = t, _ = [..._];
        return
      }
  },
  RTC_CONNECTION_FLAGS: function(e) {
    I[e.userId] = {
      clipsEnabled: (0, u.hasFlag)(e.flags, p.VoiceFlags.CLIPS_ENABLED),
      allowVoiceRecording: (0, u.hasFlag)(e.flags, p.VoiceFlags.ALLOW_VOICE_RECORDING),
      allowAnyViewerClips: (0, u.hasFlag)(e.flags, p.VoiceFlags.ALLOW_ANY_VIEWER_CLIPS)
    }
  },
  CLIPS_SHOW_CALL_WARNING: function(e) {
    let {
      channelId: t
    } = e;
    g = t
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    t !== g && (g = null)
  },
  CLIPS_CLASSIFY_HARDWARE: function(e) {
    let {
      classification: t
    } = e, n = N.hardwareClassification;
    N.hardwareClassificationVersion = d.CLIPS_HARDWARE_CLASSIFICATION_VERSION, N.hardwareClassification = t, N.hardwareClassification === c.ClipsHardwareClassification.MEETS_AUTO_ENABLE && n !== c.ClipsHardwareClassification.MEETS_AUTO_ENABLE && (N.clipsSettings.clipsEnabled = !0);
    let i = N.hardwareClassificationForDecoupled;
    N.hardwareClassificationForDecoupled = t, N.hardwareClassificationForDecoupled === c.ClipsHardwareClassification.MEETS_AUTO_ENABLE && i !== c.ClipsHardwareClassification.MEETS_AUTO_ENABLE && N.clipsSettings.clipsEnabled && (N.clipsSettings.decoupledClipsEnabled = !0)
  },
  CLIPS_INIT: function(e) {
    let {
      applicationName: t
    } = e;
    if (v = null, !N.clipsSettings.clipsEnabled) return !1;
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
    v = t
  },
  CLIPS_DISMISS_EDUCATION: function(e) {
    let {
      educationType: t
    } = e;
    switch (t) {
      case d.ClipsUserEducationType.Error:
        v = null;
        break;
      case d.ClipsUserEducationType.Disabled:
      case d.ClipsUserEducationType.Enabled:
        N.clipsEducationState.dismissedAt = Date.now(), N.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0, N.clipsEducationState.numberOfTimesDismissed += 1
    }
  },
  RUNNING_GAMES_CHANGE: function(e) {
    let {
      added: t
    } = e;
    t.length > 0 && (N.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1)
  }
});
var b = D