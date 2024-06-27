"use strict";
n.d(t, {
  C1: function() {
    return Z
  },
  Gh: function() {
    return H
  },
  N0: function() {
    return b
  },
  T1: function() {
    return G
  },
  Tm: function() {
    return F
  },
  UW: function() {
    return q
  },
  _Q: function() {
    return U
  },
  eL: function() {
    return Y
  },
  eU: function() {
    return B
  },
  em: function() {
    return y
  },
  jv: function() {
    return W
  },
  rO: function() {
    return z
  },
  sS: function() {
    return K
  },
  yg: function() {
    return P
  },
  yi: function() {
    return w
  },
  yl: function() {
    return x
  },
  zq: function() {
    return j
  }
}), n(47120), n(653041);
var i = n(46973),
  r = n(992774),
  s = n(381499),
  o = n(570140),
  a = n(579806),
  l = n(255914),
  u = n(594190),
  _ = n(569545),
  c = n(836157),
  d = n(441167),
  E = n(675478),
  I = n(361291),
  T = n(199902),
  h = n(314897),
  f = n(131951),
  S = n(959457),
  A = n(33039),
  N = n(626135),
  m = n(358085),
  O = n(557177),
  R = n(435064),
  p = n(61994),
  g = n(550351),
  C = n(659487),
  v = n(711644),
  L = n(259612),
  D = n(356659),
  M = n(981631);

function P(e) {
  let {
    allowVoiceRecording: t
  } = e;
  E.hW.updateAsync("clips", e => {
    e.allowVoiceRecording = s.D5.create({
      value: t
    })
  }, E.fy.INFREQUENT_USER_ACTION), N.default.track(M.rMx.CLIPS_SETTINGS_UPDATED, {
    allow_voice_recording: t
  })
}
async function y(e) {
  let {
    clipsEnabled: t,
    guildId: n,
    trackAnalytics: i = !1
  } = e;
  await o.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipsEnabled: t,
      ...!t && {
        decoupledClipsEnabled: !1
      }
    }
  }), i && N.default.track(M.rMx.CLIPS_SETTINGS_UPDATED, {
    clips_enabled: t,
    guild_id: n,
    ...!t && {
      decoupled_clips_enabled: !1
    }
  })
}

function U(e) {
  let {
    enabled: t,
    trackAnalytics: n = !1
  } = e;
  o.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      ...t && {
        clipsEnabled: !0
      },
      decoupledClipsEnabled: t
    }
  }), n && N.default.track(M.rMx.CLIPS_SETTINGS_UPDATED, {
    ...t && {
      clips_enabled: !0
    },
    decoupled_clips_enabled: t
  })
}

function b(e) {
  o.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      remindersEnabled: e
    }
  }), N.default.track(M.rMx.CLIPS_SETTINGS_UPDATED, {
    reminders_enabled: e
  })
}

function G(e) {
  o.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      storageLocation: e
    }
  })
}

function w(e) {
  o.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipsQuality: e
    }
  })
}

function B(e) {
  o.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipsLength: e
    }
  })
}

function x(e) {
  let {
    enabled: t,
    trackAnalytics: n = !1
  } = e;
  o.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      viewerClipsEnabled: t
    }
  }), n && N.default.track(M.rMx.CLIPS_SETTINGS_UPDATED, {
    viewer_clips_enabled: t
  })
}

function k(e, t) {
  var n, i, r, s, o, a, u, _, c, d;
  let E = new Map;
  for (let e in t.framesEncodedByEncoder) {
    let i = t.framesEncodedByEncoder[e],
      r = (0, l.lG)(e),
      s = null !== (n = E.get(r)) && void 0 !== n ? n : 0;
    E.set(r, s + i)
  }
  return {
    ...e,
    frames_encoded_nvidia_cuda: null !== (i = E.get(l.Su.NVIDIA_CUDA)) && void 0 !== i ? i : 0,
    frames_encoded_nvidia_direct3d: null !== (r = E.get(l.Su.NVIDIA_DIRECT_3D)) && void 0 !== r ? r : 0,
    frames_encoded_openh264: null !== (s = E.get(l.Su.OPENH264)) && void 0 !== s ? s : 0,
    frames_encoded_videotoolbox: null !== (o = E.get(l.Su.VIDEOTOOLBOX)) && void 0 !== o ? o : 0,
    frames_encoded_amd_direct3d: null !== (a = E.get(l.Su.AMD_DIRECT_3D)) && void 0 !== a ? a : 0,
    frames_encoded_intel: null !== (u = E.get(l.Su.INTEL)) && void 0 !== u ? u : 0,
    frames_encoded_intel_direct3d: null !== (_ = E.get(l.Su.INTEL_DIRECT_3D)) && void 0 !== _ ? _ : 0,
    frames_encoded_uncategorized: null !== (c = E.get(l.Su.UNCATEGORIZED)) && void 0 !== c ? c : 0,
    frames_encoded_unknown: null !== (d = E.get(l.Su.UNKNOWN)) && void 0 !== d ? d : 0,
    frames_submitted: t.framesSubmitted,
    frames_submitted_during_clip: t.framesSubmittedDuringClip,
    frames_encoded: t.framesEncoded,
    frames_encoded_during_clip: t.framesEncodedDuringClip,
    frames_dropped: t.framesDropped,
    frames_dropped_during_clip: t.framesDroppedDuringClip,
    clip_duration_setting: R.Z.getSettings().clipsLength,
    clip_duration: t.clipDuration,
    clip_resolution_width: t.clipResolutionWidth,
    clip_resolution_height: t.clipResolutionHeight,
    min_fps: t.minFps,
    max_fps: t.maxFps,
    submitted_fps: t.submittedFps,
    target_fps: I.Z.getState().fps,
    audio_track_count: t.audioTrackCount,
    saved_at: t.savedAt
  }
}
async function V(e) {
  let t = R.Z.getSettings().storageLocation,
    n = (0, g.Z)(e),
    i = "".concat((0, p.Z)(n.applicationName.substring(0, 20)), "_").concat(n.id, ".mp4"),
    r = a.Z.fileManager.join(t, i),
    s = f.Z.getMediaEngine(),
    l = JSON.stringify(n),
    u = null != e ? (0, _.my)(e).ownerId : void 0,
    c = function(e) {
      var t;
      let n, i, r;
      if (null != e) {
        n = null != e ? S.Z.getRTCConnection(e) : null;
        let t = (0, _.my)(e);
        i = t.guildId, r = t.channelId
      } else {
        let e = h.default.getId(),
          t = T.Z.getActiveStreamForUser(e, null);
        n = null != t ? S.Z.getRTCConnection((0, _.V9)(t)) : null, i = null == t ? void 0 : t.guildId, r = null == t ? void 0 : t.channelId
      }
      let s = null == n ? void 0 : null === (t = n.analyticsContext) || void 0 === t ? void 0 : t.streamApplication;
      return {
        rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
        media_session_id: null == n ? void 0 : n.getMediaSessionId(),
        parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
        guild_id: i,
        channel_id: r,
        application_id: null == s ? void 0 : s.id,
        application_name: null == s ? void 0 : s.name
      }
    }(e);
  null != e && o.Z.dispatch({
    type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
    clip: {
      ...n,
      filepath: r
    }
  });
  try {
    var d;
    let {
      duration: e,
      clipStats: t
    } = await (null != u ? s.saveClipForUser(u, r, l) : s.saveClip(r, l)), i = k(c, t);
    i.clip_save_time_ms = t.clipSaveTimeMs, i.clip_size_bytes = t.clipSizeBytes, null != t.viewerDecodeFps && (i.decode_fps_during_clip = t.viewerDecodeFps, i.encode_fps_during_clip = t.viewerEncodeFps, i.target_fps = null), N.default.track(M.rMx.CLIP_SAVED, i);
    let o = await (0, L.R)(a.Z.clips.getClipProtocolURLFromPath(r), 0);
    return n.thumbnail = o, n.length = e, D.jF.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(null !== (d = null == o ? void 0 : o.length) && void 0 !== d ? d : 0, " bytes thumbnail.")), await s.updateClipMetadata(r, JSON.stringify(n)), {
      ...n,
      filepath: r
    }
  } catch (i) {
    if (null != e && o.Z.dispatch({
        type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
        clipId: n.id
      }), !("errorMessage" in i)) throw N.default.track(M.rMx.CLIP_SAVE_FAILURE, c), i;
    let t = k(c, i);
    throw t.error_at = i.errorAt, t.error_message = i.errorMessage, N.default.track(M.rMx.CLIP_SAVE_FAILURE, t), i.errorMessage
  }
}
async function Z(e) {
  var t;
  let {
    enableDecoupledGameClipping: n
  } = c.Z.getCurrentConfig({
    location: "8ac9d1_1"
  }, {
    autoTrackExposure: !1
  }), {
    enableViewerClipping: s
  } = d.Z.getCurrentConfig({
    location: "SaveClip"
  }, {
    autoTrackExposure: !1
  });
  if (R.Z.getIsAtMaxSaveClipOperations()) return;
  let a = R.Z.getSettings().clipsEnabled && null != T.Z.getCurrentUserActiveStream(),
    l = n && R.Z.getSettings().decoupledClipsEnabled && (null === (t = u.ZP.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && f.Z.hasClipsSource(),
    E = null != e && null != T.Z.getActiveStreamForStreamKey(e) && s;
  if (!a && !l && !E) return;
  let I = T.Z.getCurrentUserActiveStream(),
    S = null != I ? (0, _.V9)(I) : void 0,
    N = null != e ? e : S,
    m = (() => {
      let e = null != N ? (0, _.my)(N).ownerId : void 0;
      return e === h.default.getId() ? D.X9.STREAMER : null != e ? D.X9.VIEWER : D.X9.DECOUPLED
    })(),
    p = await (async () => {
      if (null == N) return;
      let {
        ownerId: e,
        guildId: t
      } = (0, _.my)(N), n = A.Z.getStreamId(e, t, i.Yn.STREAM);
      if (null != n) try {
        let e = (0, r.zS)(),
          t = await e.getNextVideoOutputFrame(n);
        return (0, L.W)(t)
      } catch (e) {
        return
      }
    })();
  o.Z.dispatch({
    type: "CLIPS_SAVE_CLIP_START",
    clipType: m,
    streamKey: N,
    thumbnail: p
  });
  let g = (0, O.GN)("clip_save", .5),
    C = performance.now();
  try {
    let e = await V(N);
    o.Z.dispatch({
      type: "CLIPS_SAVE_CLIP",
      clip: e
    })
  } catch (e) {
    D.jF.error("Clip Failed to Save", e), null == g || g.stop(), (0, O.GN)("clip_error", .5), o.Z.dispatch({
      type: "CLIPS_SAVE_CLIP_ERROR"
    })
  }
  D.jF.info("".concat(R.Z.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - C), "ms"))
}

function H(e, t) {
  o.Z.dispatch({
    type: "CLIPS_SAVE_ANIMATION_END",
    streamKey: e,
    timestamp: t
  })
}
async function F(e, t) {
  let n = R.Z.getClips().find(t => t.id === e);
  if (null == n) return;
  let i = {
    ...n,
    ...t
  };
  null != await (0, C.w)(i) && (await f.Z.getMediaEngine().updateClipMetadata(i.filepath, JSON.stringify(i)), N.default.track(M.rMx.CLIP_EDITED, {
    clip_id: i.id
  }), o.Z.dispatch({
    type: "CLIPS_UPDATE_METADATA",
    clip: i
  }))
}

function Y() {
  o.Z.dispatch({
    type: "CLIPS_CLEAR_CLIPS_SESSION"
  })
}

function j() {
  o.Z.dispatch({
    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
  })
}
async function W(e) {
  var t;
  if (!(0, m.isDesktop)() || (null === (t = a.Z.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
  let n = await a.Z.clips.loadClipsDirectory(e),
    i = [];
  for (let e of n) {
    let t = await (0, C.w)({
      ...e.metadata,
      filepath: e.filepath
    });
    null != t && i.push(t)
  }
  o.Z.dispatch({
    type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
    clips: i
  })
}
async function K(e) {
  var t;
  if (!!(0, m.isDesktop)() && (null === (t = a.Z.clips) || void 0 === t ? void 0 : t.deleteClip) != null) await a.Z.clips.deleteClip(e), o.Z.dispatch({
    type: "CLIPS_DELETE_CLIP",
    filepath: e
  })
}
async function z(e, t) {
  let n = f.Z.getMediaEngine(),
    i = await n.exportClip(e.filepath, t);
  return (0, v.Z)(i)
}

function q(e) {
  o.Z.dispatch({
    type: "CLIPS_DISMISS_EDUCATION",
    educationType: e
  })
}