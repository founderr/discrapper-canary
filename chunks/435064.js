"use strict";
n(47120), n(789020);
var i, r = n(442837),
  s = n(570140),
  o = n(579806),
  a = n(594190),
  l = n(569545),
  u = n(314897),
  _ = n(630388),
  c = n(894694),
  d = n(356659),
  E = n(981631),
  I = n(37113);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = "default",
  S = [],
  f = [],
  N = [],
  A = 0,
  m = null,
  O = null,
  R = {},
  p = null,
  g = null,
  C = {},
  v = {
    clipsEnabled: !1,
    storageLocation: h,
    clipsQuality: {
      resolution: I.LY.RESOLUTION_1080,
      frameRate: I.ws.FPS_30
    },
    clipsLength: d.OT.SECONDS_30,
    remindersEnabled: !0,
    decoupledClipsEnabled: !1,
    viewerClipsEnabled: !0,
    viewerConnectivity: d.dJ.ALL
  },
  L = {
    clipsSettings: v,
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
  if (L.clipsSettings.storageLocation !== h || null == o.Z || null == o.Z.remoteApp) return;
  let e = await o.Z.remoteApp.getPath("documents");
  L.clipsSettings.storageLocation = e, P.emitChange()
}
class M extends(i = r.ZP.DeviceSettingsStore) {
  initialize(e) {
    null != e && (L = e), D(), this.waitFor(a.ZP)
  }
  getClips() {
    return f
  }
  getPendingClips() {
    return N
  }
  getUserAgnosticState() {
    return L
  }
  getSettings() {
    return L.clipsSettings
  }
  getLastClipsSession() {
    return O
  }
  getClipsWarningShown(e) {
    return m === e
  }
  getActiveAnimation() {
    return g
  }
  getStreamClipAnimations(e) {
    var t;
    return null !== (t = C[e]) && void 0 !== t ? t : S
  }
  hasAnyClipAnimations() {
    return Object.values(C).some(e => e.length > 0)
  }
  getHardwareClassification() {
    return L.hardwareClassification
  }
  getHardwareClassificationForDecoupled() {
    return L.hardwareClassificationForDecoupled
  }
  getHardwareClassificationVersion() {
    return L.hardwareClassificationVersion
  }
  getIsAtMaxSaveClipOperations() {
    return A >= d.Kw
  }
  getLastClipsError() {
    return p
  }
  isClipsEnabledForUser(e) {
    var t, n;
    return null !== (n = null === (t = R[e]) || void 0 === t ? void 0 : t.clipsEnabled) && void 0 !== n && n
  }
  isVoiceRecordingAllowedForUser(e) {
    var t, n;
    return null !== (n = null === (t = R[e]) || void 0 === t ? void 0 : t.allowVoiceRecording) && void 0 !== n && n
  }
  isViewerClippingAllowedForUser(e) {
    var t, n;
    return null !== (n = null === (t = R[e]) || void 0 === t ? void 0 : t.allowAnyViewerClips) && void 0 !== n && n
  }
  hasClips() {
    return L.hasClips
  }
  hasTakenDecoupledClip() {
    return L.hasTakenDecoupledClip
  }
  getNewClipIds() {
    return L.newClipIds
  }
}
T(M, "displayName", "ClipsStore"), T(M, "persistKey", "ClipsStore"), T(M, "migrations", [e => ({
  clipsSettings: null != e ? e : v,
  newClipsCount: 0
}), e => {
  let t = {
    ...v,
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
    decoupledClipsEnabled: v.decoupledClipsEnabled
  }
}), e => {
  var t;
  return {
    ...e,
    hardwareClassificationForDecoupled: null !== (t = e.hardwareClassificationForDecoupled) && void 0 !== t ? t : null
  }
}, e => {
  var t;
  let i = null === (t = n(131951).Z) || void 0 === t ? void 0 : t.getHardwareH264();
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
    clipsQuality: "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? v.clipsQuality : e.clipsSettings.clipsQuality
  }
}), e => {
  var t;
  return {
    ...e,
    clipsSettings: {
      ...e.clipsSettings,
      remindersEnabled: null !== (t = e.clipsSettings.remindersEnabled) && void 0 !== t ? t : v.remindersEnabled
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
})]);
let P = new M(s.Z, {
  CLIPS_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    L = {
      ...L,
      clipsSettings: {
        ...L.clipsSettings,
        ...t
      }
    }
  },
  CLIPS_SAVE_CLIP: function(e) {
    var t, n;
    let {
      clip: i
    } = e;
    A = Math.max(A - 1, 0), O = {
      applicationName: i.applicationName,
      ended: !1,
      ...O,
      newClipIds: [...null !== (t = null == O ? void 0 : O.newClipIds) && void 0 !== t ? t : [], i.id]
    }, L = {
      ...L,
      newClipIds: [...null !== (n = L.newClipIds) && void 0 !== n ? n : [], i.id]
    }, N = N.filter(e => {
      let {
        id: t
      } = e;
      return t !== i.id
    }), f = [i, ...f], L.hasClips = !0
  },
  CLIPS_SAVE_CLIP_PLACEHOLDER: function(e) {
    let {
      clip: t
    } = e;
    N = [t, ...N]
  },
  CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function(e) {
    let {
      clipId: t
    } = e;
    N = N.filter(e => {
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
    if (A += 1, L.hasTakenDecoupledClip = L.hasTakenDecoupledClip || t === d.X9.DECOUPLED, null != n && null != i) {
      var r;
      let e = Date.now();
      g = null != g ? g : e, C[n] = [...null !== (r = C[n]) && void 0 !== r ? r : [], {
        timestamp: e,
        thumbnail: i
      }]
    }
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    A = Math.max(A - 1, 0)
  },
  CLIPS_SAVE_ANIMATION_END: function(e) {
    let {
      streamKey: t,
      timestamp: n
    } = e;
    g === n && (g = null), null == n ? C[t] = [] : C[t] = C[t].filter(e => e.timestamp !== n)
  },
  STREAM_START: function(e) {
    let {
      sourceName: t,
      pid: n
    } = e;
    if (!L.clipsSettings.clipsEnabled) return !1;
    let i = t;
    if (null != n) {
      var r;
      let e = a.ZP.getGameForPID(n);
      i = null !== (r = null == e ? void 0 : e.name) && void 0 !== r ? r : i
    }
    if (null == i || "" === i) return !1;
    O = {
      applicationName: i,
      newClipIds: [],
      ended: !1
    }
  },
  STREAM_STOP: function(e) {
    let {
      streamKey: t
    } = e;
    if (g = null, C[t] = [], null == O || (0, l.my)(t).ownerId !== u.default.getId()) return !1;
    O = 0 === O.newClipIds.length ? null : {
      ...O,
      ended: !0
    }
  },
  CLIPS_CLEAR_CLIPS_SESSION: function() {
    if (null == O) return !1;
    O = null
  },
  CLIPS_CLEAR_NEW_CLIP_IDS: function() {
    L.newClipIds = []
  },
  CLIPS_LOAD_DIRECTORY_SUCCESS: function(e) {
    L.hasClips = e.clips.length > 0, f = e.clips
  },
  CLIPS_DELETE_CLIP: function(e) {
    0 === (f = f.filter(t => {
      let {
        filepath: n
      } = t;
      return n !== e.filepath
    })).length && (L.hasClips = !1)
  },
  CLIPS_UPDATE_METADATA: function(e) {
    let {
      clip: t
    } = e;
    for (let [e, n] of f.entries())
      if (n.id === t.id) {
        f[e] = t, f = [...f];
        return
      }
  },
  RTC_CONNECTION_FLAGS: function(e) {
    R[e.userId] = {
      clipsEnabled: (0, _.yE)(e.flags, E.BVn.CLIPS_ENABLED),
      allowVoiceRecording: (0, _.yE)(e.flags, E.BVn.ALLOW_VOICE_RECORDING),
      allowAnyViewerClips: (0, _.yE)(e.flags, E.BVn.ALLOW_ANY_VIEWER_CLIPS)
    }
  },
  CLIPS_SHOW_CALL_WARNING: function(e) {
    let {
      channelId: t
    } = e;
    m = t
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    t !== m && (m = null)
  },
  CLIPS_CLASSIFY_HARDWARE: function(e) {
    let {
      classification: t
    } = e, n = L.hardwareClassification;
    L.hardwareClassificationVersion = d.WM, L.hardwareClassification = t, L.hardwareClassification === c.x.MEETS_AUTO_ENABLE && n !== c.x.MEETS_AUTO_ENABLE && (L.clipsSettings.clipsEnabled = !0);
    let i = L.hardwareClassificationForDecoupled;
    L.hardwareClassificationForDecoupled = t, L.hardwareClassificationForDecoupled === c.x.MEETS_AUTO_ENABLE && i !== c.x.MEETS_AUTO_ENABLE && L.clipsSettings.clipsEnabled && (L.clipsSettings.decoupledClipsEnabled = !0)
  },
  CLIPS_INIT: function(e) {
    let {
      applicationName: t
    } = e;
    if (p = null, !L.clipsSettings.clipsEnabled) return !1;
    O = {
      applicationName: t,
      newClipIds: [],
      ended: !1
    }
  },
  CLIPS_INIT_FAILURE: function(e) {
    let {
      errMsg: t
    } = e;
    p = t
  },
  CLIPS_DISMISS_EDUCATION: function(e) {
    let {
      educationType: t
    } = e;
    switch (t) {
      case d.D5.Error:
        p = null;
        break;
      case d.D5.Disabled:
      case d.D5.Enabled:
        L.clipsEducationState.dismissedAt = Date.now(), L.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0, L.clipsEducationState.numberOfTimesDismissed += 1
    }
  },
  RUNNING_GAMES_CHANGE: function(e) {
    let {
      added: t
    } = e;
    t.length > 0 && (L.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1)
  }
});
t.Z = P