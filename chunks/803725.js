"use strict";
n.r(t), n.d(t, {
  updateAllowVoiceRecording: function() {
    return b
  },
  updateClipsEnabled: function() {
    return w
  },
  updateDecoupledClipsEnabled: function() {
    return O
  },
  updateRemindersEnabled: function() {
    return P
  },
  updateClipsStorageLocation: function() {
    return U
  },
  updateClipsQuality: function() {
    return G
  },
  updateClipsLength: function() {
    return F
  },
  updateViewerClipsEnabled: function() {
    return V
  },
  saveClip: function() {
    return q
  },
  dismissSaveClipAnimation: function() {
    return H
  },
  updateClipMetadata: function() {
    return W
  },
  clearClipsSession: function() {
    return B
  },
  clearNewClipIds: function() {
    return K
  },
  loadClipsDirectory: function() {
    return j
  },
  deleteClip: function() {
    return J
  },
  exportClip: function() {
    return z
  },
  dismissClipsUserEducation: function() {
    return Y
  }
}), n("222007"), n("424973");
var a = n("773364"),
  i = n("784063"),
  l = n("750028"),
  r = n("913144"),
  d = n("49671"),
  u = n("44642"),
  s = n("374014"),
  o = n("584687"),
  c = n("103979"),
  f = n("872173"),
  g = n("268491"),
  p = n("373469"),
  _ = n("271938"),
  m = n("42887"),
  E = n("568307"),
  h = n("205817"),
  S = n("555035"),
  v = n("599110"),
  I = n("773336"),
  y = n("709681"),
  C = n("386045"),
  A = n("13136"),
  T = n("881095"),
  D = n("997942"),
  N = n("310238"),
  M = n("430481"),
  R = n("80028"),
  L = n("49111");

function b(e) {
  let {
    allowVoiceRecording: t
  } = e;
  f.PreloadedUserSettingsActionCreators.updateAsync("clips", e => {
    e.allowVoiceRecording = l.BoolValue.create({
      value: t
    })
  }, f.UserSettingsDelay.INFREQUENT_USER_ACTION), v.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
    allow_voice_recording: t
  })
}
async function w(e) {
  let {
    clipsEnabled: t,
    guildId: n,
    trackAnalytics: a = !1
  } = e;
  await r.default.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipsEnabled: t,
      ...!t && {
        decoupledClipsEnabled: !1
      }
    }
  }), a && v.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
    clips_enabled: t,
    guild_id: n,
    ...!t && {
      decoupled_clips_enabled: !1
    }
  })
}

function O(e) {
  let {
    enabled: t,
    trackAnalytics: n = !1
  } = e;
  r.default.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      ...t && {
        clipsEnabled: !0
      },
      decoupledClipsEnabled: t
    }
  }), n && v.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
    ...t && {
      clips_enabled: !0
    },
    decoupled_clips_enabled: t
  })
}

function P(e) {
  r.default.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      remindersEnabled: e
    }
  })
}

function U(e) {
  r.default.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      storageLocation: e
    }
  })
}

function G(e) {
  r.default.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipsQuality: e
    }
  })
}

function F(e) {
  r.default.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipsLength: e
    }
  })
}

function V(e) {
  r.default.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      viewerClipsEnabled: e
    }
  })
}

function x(e, t) {
  var n, a, i, l, r, d, s, o, c, f;
  let p = new Map;
  for (let e in t.framesEncodedByEncoder) {
    let a = t.framesEncodedByEncoder[e],
      i = (0, u.parseEncoder)(e),
      l = null !== (n = p.get(i)) && void 0 !== n ? n : 0;
    p.set(i, l + a)
  }
  return {
    ...e,
    frames_encoded_nvidia_cuda: null !== (a = p.get(u.Encoders.NVIDIA_CUDA)) && void 0 !== a ? a : 0,
    frames_encoded_nvidia_direct3d: null !== (i = p.get(u.Encoders.NVIDIA_DIRECT_3D)) && void 0 !== i ? i : 0,
    frames_encoded_openh264: null !== (l = p.get(u.Encoders.OPENH264)) && void 0 !== l ? l : 0,
    frames_encoded_videotoolbox: null !== (r = p.get(u.Encoders.VIDEOTOOLBOX)) && void 0 !== r ? r : 0,
    frames_encoded_amd_direct3d: null !== (d = p.get(u.Encoders.AMD_DIRECT_3D)) && void 0 !== d ? d : 0,
    frames_encoded_intel: null !== (s = p.get(u.Encoders.INTEL)) && void 0 !== s ? s : 0,
    frames_encoded_intel_direct3d: null !== (o = p.get(u.Encoders.INTEL_DIRECT_3D)) && void 0 !== o ? o : 0,
    frames_encoded_uncategorized: null !== (c = p.get(u.Encoders.UNCATEGORIZED)) && void 0 !== c ? c : 0,
    frames_encoded_unknown: null !== (f = p.get(u.Encoders.UNKNOWN)) && void 0 !== f ? f : 0,
    frames_submitted: t.framesSubmitted,
    frames_submitted_during_clip: t.framesSubmittedDuringClip,
    frames_encoded: t.framesEncoded,
    frames_encoded_during_clip: t.framesEncodedDuringClip,
    frames_dropped: t.framesDropped,
    frames_dropped_during_clip: t.framesDroppedDuringClip,
    clip_duration_setting: C.default.getSettings().clipsLength,
    clip_duration: t.clipDuration,
    clip_resolution_width: t.clipResolutionWidth,
    clip_resolution_height: t.clipResolutionHeight,
    min_fps: t.minFps,
    max_fps: t.maxFps,
    submitted_fps: t.submittedFps,
    target_fps: g.default.getState().fps,
    audio_track_count: t.audioTrackCount,
    saved_at: t.savedAt
  }
}
async function k(e) {
  let t = C.default.getSettings(),
    n = t.storageLocation,
    a = (0, T.default)(e),
    i = "".concat((0, A.default)(a.applicationName.substring(0, 20)), "_").concat(a.id, ".mp4"),
    l = d.default.fileManager.join(n, i),
    u = m.default.getMediaEngine(),
    o = JSON.stringify(a),
    c = null != e ? (0, s.decodeStreamKey)(e).ownerId : void 0,
    f = function(e) {
      var t;
      let n, a, i;
      if (null != e) {
        n = null != e ? h.default.getRTCConnection(e) : null;
        let t = (0, s.decodeStreamKey)(e);
        a = t.guildId, i = t.channelId
      } else {
        let e = _.default.getId(),
          t = p.default.getActiveStreamForUser(e, null);
        n = null != t ? h.default.getRTCConnection((0, s.encodeStreamKey)(t)) : null, a = null == t ? void 0 : t.guildId, i = null == t ? void 0 : t.channelId
      }
      let l = null == n ? void 0 : null === (t = n.analyticsContext) || void 0 === t ? void 0 : t.streamApplication;
      return {
        rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
        media_session_id: null == n ? void 0 : n.getMediaSessionId(),
        parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
        guild_id: a,
        channel_id: i,
        application_id: null == l ? void 0 : l.id,
        application_name: null == l ? void 0 : l.name
      }
    }(e);
  null != e && r.default.dispatch({
    type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
    clip: {
      ...a,
      filepath: l
    }
  });
  try {
    var g;
    let {
      duration: e,
      thumbnail: t,
      clipStats: n
    } = await (null != c ? u.saveClipForUser(c, l, o) : u.saveClip(l, o)), i = x(f, n);
    i.clip_save_time_ms = n.clipSaveTimeMs, i.clip_size_bytes = n.clipSizeBytes, null != n.viewerDecodeFps && (i.decode_fps_during_clip = n.viewerDecodeFps, i.encode_fps_during_clip = n.viewerEncodeFps, i.target_fps = null), v.default.track(L.AnalyticEvents.CLIP_SAVED, i);
    let r = await (null != d.default.clips.getClipProtocolURLFromPath ? (0, M.createThumbnailFromVideo)(d.default.clips.getClipProtocolURLFromPath(l), 0) : (0, M.createImageFromUint8Array)(t));
    return a.thumbnail = r, a.length = e, R.ClipsLogger.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(null !== (g = null == r ? void 0 : r.length) && void 0 !== g ? g : 0, " bytes thumbnail.")), await u.updateClipMetadata(l, JSON.stringify(a)), {
      ...a,
      filepath: l
    }
  } catch (n) {
    if (null != e && r.default.dispatch({
        type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
        clipId: a.id
      }), !("errorMessage" in n)) throw v.default.track(L.AnalyticEvents.CLIP_SAVE_FAILURE, f), n;
    let t = x(f, n);
    throw t.error_at = n.errorAt, t.error_message = n.errorMessage, v.default.track(L.AnalyticEvents.CLIP_SAVE_FAILURE, t), n.errorMessage
  }
}
async function q(e) {
  var t;
  let {
    enableDecoupledGameClipping: n
  } = o.default.getCurrentConfig({
    location: "8ac9d1_1"
  }, {
    autoTrackExposure: !1
  }), {
    enableViewerClipping: l
  } = c.default.getCurrentConfig({
    location: "SaveClip"
  }, {
    autoTrackExposure: !1
  });
  if (C.default.getIsAtMaxSaveClipOperations()) return;
  let d = C.default.getSettings().clipsEnabled && null != p.default.getCurrentUserActiveStream(),
    u = n && C.default.getSettings().decoupledClipsEnabled && (null === (t = E.default.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && m.default.hasClipsSource(),
    f = null != e && null != p.default.getActiveStreamForStreamKey(e) && l;
  if (!d && !u && !f) return;
  let g = p.default.getCurrentUserActiveStream(),
    h = null != g ? (0, s.encodeStreamKey)(g) : void 0,
    v = null != e ? e : h,
    I = (() => {
      let e = null != v ? (0, s.decodeStreamKey)(v).ownerId : void 0;
      return e === _.default.getId() ? R.ClipSaveTypes.STREAMER : null != e ? R.ClipSaveTypes.VIEWER : R.ClipSaveTypes.DECOUPLED
    })(),
    A = await (async () => {
      if (null == v) return;
      let {
        ownerId: e,
        guildId: t
      } = (0, s.decodeStreamKey)(v), n = S.default.getStreamId(e, t, a.MediaEngineContextTypes.STREAM);
      if (null != n) try {
        let e = (0, i.getVoiceEngine)(),
          t = await e.getNextVideoOutputFrame(n);
        return (0, M.createImageFromImageData)(t)
      } catch (e) {
        return
      }
    })();
  r.default.dispatch({
    type: "CLIPS_SAVE_CLIP_START",
    clipType: I,
    streamKey: v,
    thumbnail: A
  });
  let T = (0, y.playSound)("clip_save", .5),
    D = performance.now();
  try {
    let e = await k(v);
    r.default.dispatch({
      type: "CLIPS_SAVE_CLIP",
      clip: e
    })
  } catch (e) {
    R.ClipsLogger.error("Clip Failed to Save", e), null == T || T.stop(), (0, y.playSound)("clip_error", .5), r.default.dispatch({
      type: "CLIPS_SAVE_CLIP_ERROR"
    })
  }
  R.ClipsLogger.info("".concat(C.default.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - D), "ms"))
}

function H(e, t) {
  r.default.dispatch({
    type: "CLIPS_SAVE_ANIMATION_END",
    streamKey: e,
    timestamp: t
  })
}
async function W(e, t) {
  let n = C.default.getClips().find(t => t.id === e);
  if (null == n) return;
  let a = {
      ...n,
      ...t
    },
    i = await (0, D.validateClipMetadata)(a);
  null != i && (await m.default.getMediaEngine().updateClipMetadata(a.filepath, JSON.stringify(a)), v.default.track(L.AnalyticEvents.CLIP_EDITED, {
    clip_id: a.id
  }), r.default.dispatch({
    type: "CLIPS_UPDATE_METADATA",
    clip: a
  }))
}

function B() {
  r.default.dispatch({
    type: "CLIPS_CLEAR_CLIPS_SESSION"
  })
}

function K() {
  r.default.dispatch({
    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
  })
}
async function j(e) {
  var t;
  if (!(0, I.isDesktop)() || (null === (t = d.default.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
  let n = await d.default.clips.loadClipsDirectory(e),
    a = [];
  for (let e of n) {
    let t = await (0, D.validateClipMetadata)({
      ...e.metadata,
      filepath: e.filepath
    });
    null != t && a.push(t)
  }
  r.default.dispatch({
    type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
    clips: a
  })
}
async function J(e) {
  var t;
  (0, I.isDesktop)() && (null === (t = d.default.clips) || void 0 === t ? void 0 : t.deleteClip) != null && (await d.default.clips.deleteClip(e), r.default.dispatch({
    type: "CLIPS_DELETE_CLIP",
    filepath: e
  }))
}
async function z(e, t) {
  let n = m.default.getMediaEngine(),
    a = await n.exportClip(e.filepath, t);
  return (0, N.default)(a)
}

function Y(e) {
  r.default.dispatch({
    type: "CLIPS_DISMISS_EDUCATION",
    educationType: e
  })
}