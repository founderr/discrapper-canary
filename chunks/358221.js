"use strict";
n(653041), n(724458), n(47120);
var i, r, s, o, a = n(512722),
  l = n.n(a),
  u = n(392711),
  _ = n.n(u),
  c = n(442837),
  d = n(570140),
  E = n(317381),
  I = n(710845),
  T = n(258609),
  h = n(569545),
  f = n(199902),
  S = n(314897),
  A = n(523746),
  N = n(592125),
  m = n(944486),
  O = n(606304),
  p = n(594174),
  R = n(33039),
  g = n(979651),
  C = n(413523),
  v = n(354459),
  L = n(981631);
let D = new I.Z("ChannelRTCStore"),
  M = Object.freeze([]),
  P = [],
  y = {},
  U = {},
  b = {},
  G = {},
  w = {},
  x = {},
  B = {},
  k = {},
  V = {},
  Z = {};

function H(e) {
  let t = y[e];
  return null == t && (t = new C.ZP(e), y[e] = t), t
}

function F(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P;
  return t.reduce((t, n) => e(H(n)) ? (function(e) {
    let t = H(e);
    if (0 === t.size()) return;
    let n = er(e) || q(t) ? L.WtW.VIDEO : L.WtW.VOICE;
    n === L.WtW.VOICE ? (delete G[e], delete w[e]) : G[e] = n
  }(n), function(e) {
    let t = S.default.getId(),
      n = H(e);
    if (0 === n.size() || m.Z.getVoiceChannelId() !== e) {
      z(e, null);
      return
    }
    let i = v.dF.NONE,
      r = n.toArray(C.sI.STREAM).find(e => e.type === v.fO.STREAM && f.Z.getActiveStreamForStreamKey(e.id));
    if (null != r) l()(r.type === v.fO.STREAM, "Impossible condition"), i = r.id;
    else if (1 === n.size()) i = t;
    else if (1 === n.size(C.sI.VIDEO)) {
      let [e] = n.toArray(C.sI.VIDEO);
      i = e.id
    } else {
      var s;
      let e = n.toArray().find(e => e.type === v.fO.USER && e.id !== t && !e.ringing);
      i = null !== (s = null == e ? void 0 : e.id) && void 0 !== s ? s : t
    }
    let [o] = j(e);
    if (o !== v.dF.AUTO && o !== v.dF.NONE) {
      let e = n.getParticipant(o);
      (null == e || e.type === v.fO.STREAM && null == f.Z.getActiveStreamForStreamKey(e.id)) && (o = v.dF.NONE)
    }
    z(e, [o, i])
  }(n), !0) : t, !1)
}

function Y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P;
  return F(t => t.updateParticipant(e), t)
}

function j(e) {
  var t;
  let n = N.Z.getChannel(e),
    i = (null == n ? void 0 : n.isDM()) ? v.dF.AUTO : v.dF.NONE;
  return null !== (t = U[e]) && void 0 !== t ? t : [i, v.dF.NONE]
}

function W(e) {
  if (null == U[e]) return !1;
  let [t] = U[e];
  return t !== v.dF.NONE
}

function K(e) {
  null == b[e] && (b[e] = {
    gridDurationMs: 0,
    focusDurationMs: 0,
    toggleCount: 0,
    lastUpdate: 0
  });
  let t = b[e],
    n = performance.now(),
    i = W(e);
  if (t.lastUpdate > 0) {
    let e = n - t.lastUpdate;
    t[i ? "focusDurationMs" : "gridDurationMs"] += e
  }
  t.lastUpdate = n
}

function z(e, t) {
  K(e);
  let n = W(e);
  null == t ? delete U[e] : U[e] = t, n !== W(e) && b[e].toggleCount++
}

function q(e) {
  return e.size(C.sI.STREAM) > 0 || e.size(C.sI.VIDEO) > 0 || e.hasEmbeddedActivity()
}

function X(e) {
  delete y[e], delete U[e], delete G[e], delete w[e]
}

function Q() {
  return F(e => e.rebuild(), function() {
    let e = [],
      t = m.Z.getChannelId();
    null != t && e.push(t);
    let n = m.Z.getVoiceChannelId();
    null != n && !e.includes(n) && e.push(n);
    let i = T.Z.getRemoteSessionId(),
      r = g.Z.getVoiceStateForSession(S.default.getId(), i);
    (null == r ? void 0 : r.channelId) != null && e.push(null == r ? void 0 : r.channelId), _().difference(P, e).forEach(X);
    let s = _().difference(e, P);
    return P = e, s
  }())
}

function J() {
  return F(e => e.updateEmbeddedActivities())
}

function $(e) {
  let {
    userId: t
  } = e;
  return F(e => e.updateParticipantSpeaking(t))
}

function ee(e) {
  let {
    user: t
  } = e;
  return Y(t.id)
}

function et(e) {
  let {
    channelId: t
  } = e;
  return F(e => e.rebuild(), [t])
}

function en(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  return delete k[t], delete V[t], X(t)
}

function ei(e) {
  let {
    streamKey: t
  } = e, {
    channelId: n,
    ownerId: i
  } = (0, h.my)(t);
  return Y(i, [n])
}

function er(e) {
  var t;
  return !!(null === (t = N.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal())
}
class es extends(i = c.ZP.Store) {
  initialize() {
    this.waitFor(f.Z, S.default, A.Z, N.Z, E.ZP, m.Z, O.Z, p.default, R.Z, g.Z), this.syncWith([E.ZP], J), this.syncWith([T.Z], Q)
  }
  getParticipantsVersion(e) {
    return H(e).version
  }
  getParticipants(e) {
    var t;
    return null !== (t = H(e).toArray()) && void 0 !== t ? t : M
  }
  getSpeakingParticipants(e) {
    var t;
    return null !== (t = H(e).toArray(C.sI.SPEAKING)) && void 0 !== t ? t : M
  }
  getFilteredParticipants(e) {
    return B[e] ? H(e).toArray(C.sI.FILTERED) : H(e).toArray()
  }
  getVideoParticipants(e) {
    var t;
    return null !== (t = H(e).toArray(C.sI.VIDEO)) && void 0 !== t ? t : M
  }
  getStreamParticipants(e) {
    var t;
    return null !== (t = H(e).toArray(C.sI.STREAM)) && void 0 !== t ? t : M
  }
  getActivityParticipants(e) {
    var t;
    return null !== (t = H(e).toArray(C.sI.ACTIVITY)) && void 0 !== t ? t : M
  }
  getParticipant(e, t) {
    return H(e).getParticipant(t)
  }
  getUserParticipantCount(e) {
    let t = H(e);
    return t.size() - t.size(C.sI.STREAM) - t.size(C.sI.ACTIVITY)
  }
  getParticipantsOpen(e) {
    var t;
    return null === (t = x[e]) || void 0 === t || t
  }
  getVoiceParticipantsHidden(e) {
    var t;
    return null !== (t = B[e]) && void 0 !== t && t
  }
  getSelectedParticipantId(e) {
    let [t, n] = j(e);
    return t === v.dF.NONE ? null : t !== v.dF.AUTO ? t : n === v.dF.NONE || n === v.dF.AUTO ? null : n
  }
  getSelectedParticipant(e) {
    let t = this.getSelectedParticipantId(e);
    return null == t ? null : H(e).getParticipant(t)
  }
  getSelectedParticipantStats(e) {
    let t = b[e];
    return null == t ? {} : {
      view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
      view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
      view_mode_toggle_count: t.toggleCount
    }
  }
  getMode(e) {
    var t;
    return null !== (t = G[e]) && void 0 !== t ? t : er(e) ? L.WtW.VIDEO : L.WtW.VOICE
  }
  getLayout(e) {
    var t, n;
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L.IlC.APP;
    if (__OVERLAY__) return L.AEg.NORMAL;
    let r = N.Z.getChannel(e),
      s = er(e) || (null == r ? void 0 : r.isBroadcastChannel());
    return null !== (n = null === (t = w[e]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : s ? L.AEg.NO_CHAT : L.AEg.NORMAL
  }
  getChatOpen(e) {
    var t;
    return null !== (t = k[e]) && void 0 !== t && t
  }
  isFullscreenInContext() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L.IlC.APP;
    return Object.values(w).some(t => t[e] === L.AEg.FULL_SCREEN)
  }
  getStageStreamSize(e) {
    return V[e]
  }
  getStageVideoLimitBoostUpsellDismissed(e) {
    return Z[e]
  }
}
o = "ChannelRTCStore", (s = "displayName") in(r = es) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new es(d.Z, {
  CONNECTION_OPEN: Q,
  CONNECTION_OPEN_SUPPLEMENTAL: Q,
  THREAD_LIST_SYNC: Q,
  OVERLAY_INITIALIZE: Q,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t,
      currentVoiceChannelId: n
    } = e;
    return null != t ? delete b[t] : null != n && (delete k[n], delete V[n], K(n)), Q()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t,
      messageId: n
    } = e, i = Q(), r = N.Z.getChannel(t);
    return null == t || null == n || (null == r ? void 0 : r.type) !== L.d4z.GUILD_VOICE && (null == r ? void 0 : r.type) !== L.d4z.GUILD_STAGE_VOICE || k[t] ? i : (k[t] = !0, !0)
  },
  CHANNEL_RTC_ACTIVE_CHANNELS: Q,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t,
      initial: n
    } = e;
    return t.reduce((e, t) => {
      let {
        userId: i,
        channelId: r
      } = t;
      return n && null != r && !P.includes(r) ? e : Y(i) || e
    }, !1)
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (t.type === L.d4z.GROUP_DM) {
      let e = t.originChannelId;
      if (null != e) {
        var n, i;
        return w[t.id] = {
          [L.IlC.APP]: null !== (i = null === (n = w[e]) || void 0 === n ? void 0 : n[L.IlC.APP]) && void 0 !== i ? i : L.AEg.NORMAL
        }, !0
      }
      t.isBroadcastChannel() && (w[t.id] = {
        [L.IlC.APP]: L.AEg.NO_CHAT
      })
    }
    return !1
  },
  CHANNEL_DELETE: en,
  THREAD_DELETE: en,
  CALL_CREATE: et,
  CALL_UPDATE: et,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    return X(t)
  },
  CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
    let {
      channelId: t,
      id: n
    } = e, i = H(t);
    null == n && i.toArray(C.sI.STREAM).forEach(e => {
      (0, v._5)(e) && i.updateParticipant(e.user.id)
    });
    let [, r] = j(t);
    if (z(t, [null != n ? n : v.dF.NONE, r]), (0, h.DB)(n)) {
      try {
        let {
          ownerId: e
        } = (0, h.my)(n);
        e === S.default.getId() && Y(e, [t])
      } catch (e) {
        D.warn("INVALID STREAM KEY FORMAT ".concat(n), e)
      }!q(i) && (x[t] = !1)
    }
  },
  CHANNEL_RTC_UPDATE_LAYOUT: function(e) {
    let {
      channelId: t,
      layout: n,
      appContext: i
    } = e;
    w[t] = {
      ...w[t],
      [i]: n
    }
  },
  CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function(e) {
    let {
      channelId: t,
      participantsOpen: n
    } = e;
    x[t] = n
  },
  CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function(e) {
    let {
      channelId: t,
      voiceParticipantsHidden: n
    } = e;
    B[t] = n
  },
  CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function(e) {
    let {
      channelId: t,
      large: n
    } = e;
    V[t] = n
  },
  CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function(e) {
    let {
      channelId: t,
      dismissed: n
    } = e;
    Z[t] = n
  },
  STREAM_UPDATE_SELF_HIDDEN: function(e) {
    let {
      channelId: t,
      selfStreamHidden: n
    } = e, i = S.default.getId();
    if (n) {
      let [e] = j(t);
      (0, h.DB)(e) && e.includes(i) && z(t, null)
    }
    Y(i, [t])
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
    let {
      channelId: t,
      chatOpen: n
    } = e;
    k[t] = n
  },
  RTC_CONNECTION_VIDEO: function(e) {
    let {
      channelId: t,
      userId: n
    } = e;
    return Y(n, [t])
  },
  RTC_CONNECTION_PLATFORM: function(e) {
    let {
      channelId: t,
      userId: n
    } = e;
    return Y(n, [t])
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
    let {
      userId: t
    } = e;
    return Y(t)
  },
  MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function(e) {
    let {
      channelId: t,
      senderUserId: n,
      maxResolution: i,
      maxFrameRate: r
    } = e;
    return F(e => e.updateParticipantQuality(n, i, r), [t])
  },
  STREAM_CLOSE: ei,
  STREAM_DELETE: ei,
  STREAM_WATCH: function(e) {
    let {
      streamKey: t
    } = e, {
      channelId: n,
      ownerId: i
    } = (0, h.my)(t);
    return Y(i, [n])
  },
  SPEAKING: $,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: $,
  GUILD_SOUNDBOARD_SOUND_PLAY_END: $,
  USER_UPDATE: ee,
  GUILD_MEMBER_UPDATE: ee,
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e, n = [];
    if (_().forEach(P, e => {
        let i = N.Z.getChannel(e);
        (null == i || i.getGuildId() === t.id) && n.push(e)
      }), 0 === n.length) return !1;
    _().forEach(n, e => X(e))
  }
})