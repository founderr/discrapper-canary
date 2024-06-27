"use strict";
let i;
n.d(t, {
  i6: function() {
    return R
  }
}), n(47120), n(653041), n(51350);
var r, s = n(442837),
  o = n(570140),
  a = n(911969),
  l = n(314897),
  u = n(592125),
  _ = n(944486),
  c = n(594174),
  d = n(585483),
  E = n(358085),
  I = n(139143),
  T = n(155268),
  h = n(613611),
  f = n(761122),
  S = n(917107),
  A = n(918559),
  N = n(981631);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let O = {
    everLaunchedActivities: new Set,
    seenNewActivities: {},
    seenUpdatedActivities: {},
    shouldShowNewActivityIndicator: !1
  },
  R = [],
  p = new Map,
  g = new Map,
  C = new Map,
  v = new Map,
  L = !1,
  D = new Map,
  M = new Map,
  P = new Map,
  y = new Map,
  U = new Map,
  b = new Map,
  G = new Map;
let w = A.Ez.DISCONNECTED,
  B = A.MI.RESIZABLE;

function x(e) {
  return null != e ? e : "0"
}

function k(e) {
  var t, n, i;
  let {
    guildId: r,
    channelId: s,
    location: o,
    applicationId: a,
    launchId: u,
    compositeInstanceId: _,
    participants: c,
    analyticsActivitySessionId: E
  } = e, f = (0, T.Z)(a);
  if (null == f) return;
  let S = c.map(e => e.userId),
    A = l.default.getId(),
    m = S.some(e => e === A),
    O = null === (t = c.find(e => e.userId === A)) || void 0 === t ? void 0 : t.sessionId,
    R = c.some(e => (0, h.J)(e)),
    L = null == _,
    D = p.get(a),
    M = {
      analyticsActivitySessionId: null != E ? E : void 0,
      applicationId: a,
      channelId: s,
      guildId: r,
      location: null != o ? o : void 0,
      launchId: u,
      compositeInstanceId: _,
      url: f,
      userIds: new Set(S),
      participants: c
    };
  m && null != D && p.set(D.applicationId, {
    ...D,
    ...M
  });
  null != D && s === D.channelId && a === (null == D ? void 0 : D.applicationId) && (!m && Array.from(D.userIds).some(e => e === A) || !L && !R) ? v.get(s) === a ? v.delete(s) : (p.delete(a), d.S.dispatch(N.CkL.RELEASE_ACTIVITY_WEB_VIEW)) : m && (null == D || D.applicationId !== a || D.channelId !== s) && (O === l.default.getSessionId() && !L || (0, I.$)("EmbeddedActivitiesStore")) && (Z({
    channelId: s,
    applicationId: a,
    launchId: u,
    compositeInstanceId: _
  }), d.S.dispatch(N.CkL.OPEN_EMBEDDED_ACTIVITY, {
    channelId: s
  }));
  let P = (null !== (n = C.get(s)) && void 0 !== n ? n : []).filter(e => e.applicationId !== a),
    y = x(r),
    U = (null !== (i = g.get(y)) && void 0 !== i ? i : []).filter(e => !(e.applicationId === a && e.channelId === s));
  S.length > 0 && (P.push(M), U.push(M)), C.set(s, P), g.set(y, U)
}

function V(e) {
  e.embedded_activities.forEach(t => {
    let {
      channel_id: n,
      embedded_activity: i,
      connections: r
    } = t;
    k({
      guildId: e.id,
      channelId: n,
      applicationId: i.application_id,
      launchId: i.activity_id,
      compositeInstanceId: void 0,
      participants: r.map(e => ({
        userId: e.user_id
      })),
      analyticsActivitySessionId: i.activity_id
    })
  })
}

function Z(e) {
  var t, n;
  let {
    channelId: r,
    applicationId: s,
    launchId: o,
    compositeInstanceId: a
  } = e, d = (0, T.Z)(s), E = l.default.getSessionId();
  if (null == d || null == E || (null === (t = p.get(s)) || void 0 === t ? void 0 : t.channelId) === r) return !1;
  let I = u.Z.getChannel(r),
    h = null == I ? void 0 : I.getGuildId(),
    f = c.default.getCurrentUser();
  if (null == h && !(null !== (n = null == I ? void 0 : I.isPrivate()) && void 0 !== n && n) || null == f) return !1;
  i = r, p.set(s, {
    guildId: h,
    channelId: r,
    applicationId: s,
    url: d,
    userIds: new Set([f.id]),
    connectedSince: Date.now(),
    launchId: o,
    compositeInstanceId: a
  }), w = i !== _.Z.getChannelId() || (0, S.Z)(r) ? A.Ez.PIP : A.Ez.PANEL, G.set(F(r, s), Date.now())
}

function H() {
  L = !1
}

function F(e, t) {
  return "".concat(e, ":").concat(t)
}
class Y extends(r = s.ZP.PersistedStore) {
  initialize(e) {
    var t;
    let n = new Set(null !== (t = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== t ? t : []);
    null != e && (O = {
      ...e,
      everLaunchedActivities: n
    })
  }
  getState() {
    return O
  }
  getSelfEmbeddedActivityForChannel(e) {
    var t;
    return null !== (t = Array.from(p.values()).find(t => {
      let {
        channelId: n
      } = t;
      return e === n
    })) && void 0 !== t ? t : null
  }
  getSelfEmbeddedActivities() {
    return p
  }
  getEmbeddedActivitiesForGuild(e) {
    var t;
    return null !== (t = g.get(e)) && void 0 !== t ? t : R
  }
  getEmbeddedActivitiesForChannel(e) {
    var t;
    return null !== (t = C.get(e)) && void 0 !== t ? t : R
  }
  getEmbeddedActivitiesByChannel() {
    return C
  }
  getEmbeddedActivityDurationMs(e, t) {
    let n = G.get(F(e, t));
    return null == n ? null : Date.now() - n
  }
  isLaunchingActivity() {
    return L
  }
  getShelfActivities(e) {
    var t;
    let n = x(e);
    return null !== (t = D.get(n)) && void 0 !== t ? t : []
  }
  getShelfFetchStatus(e) {
    let t = x(e);
    return M.get(t)
  }
  shouldFetchShelf(e) {
    var t, n;
    let i = x(e),
      r = null !== (t = M.get(i)) && void 0 !== t ? t : {
        isFetching: !1
      },
      s = Date.now() - (null !== (n = null == r ? void 0 : r.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 216e5;
    return !(null == r ? void 0 : r.isFetching) && s
  }
  getOrientationLockStateForApp(e) {
    var t;
    return null !== (t = P.get(e)) && void 0 !== t ? t : null
  }
  getPipOrientationLockStateForApp(e) {
    var t;
    return null !== (t = y.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e)
  }
  getGridOrientationLockStateForApp(e) {
    var t, n;
    return null !== (n = null !== (t = U.get(e)) && void 0 !== t ? t : y.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e)
  }
  getLayoutModeForApp(e) {
    return b.get(e)
  }
  getConnectedActivityChannelId() {
    return i
  }
  getActivityPanelMode() {
    return w
  }
  getFocusedLayout() {
    return B
  }
  getCurrentEmbeddedActivity() {
    var e;
    let t = this.getConnectedActivityChannelId();
    if (null != t) return null !== (e = this.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0
  }
  getEmbeddedActivityForUserId(e, t) {
    let n;
    if (void 0 !== t) {
      e: for (let [i, r] of C)
        for (let i of r)
          if (i.applicationId === t && i.userIds.has(e)) {
            n = i;
            break e
          }return n
    }
  }
  hasActivityEverBeenLaunched(e) {
    return O.everLaunchedActivities.has(e)
  }
}
m(Y, "displayName", "EmbeddedActivitiesStore"), m(Y, "persistKey", "EmbeddedActivities"), m(Y, "migrations", [e => ({
  ...e,
  seenFeaturedActivities: [],
  shouldShowNewActivityIndicator: !1
}), e => (delete e.seenFeaturedActivities, {
  ...e
}), e => (delete e.seenActivities, {
  ...e
}), e => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, {
  ...e
}), e => ({
  ...e,
  seenNewActivities: {},
  seenUpdatedActivities: {}
}), e => {
  var t;
  let n = new Set(null !== (t = e.everLaunchedActivities) && void 0 !== t ? t : []);
  return {
    ...e,
    everLaunchedActivities: n
  }
}, e => (delete e.usersHavePlayedByApp, {
  ...e
})]);
let j = new Y(o.Z, {
  ACTIVITY_LAYOUT_MODE_UPDATE: function(e) {
    let {
      applicationId: t,
      layoutMode: n
    } = e;
    b.set(t, n)
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t
    } = e;
    C.clear(), g.clear(), t.forEach(e => V(e))
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    V(t)
  },
  CALL_CREATE: function(e) {
    let {
      channelId: t,
      embeddedActivities: n
    } = e;
    ! function(e, t) {
      t.forEach(e => {
        let {
          channel_id: t,
          embedded_activity: n,
          connections: i
        } = e;
        k({
          guildId: null,
          channelId: t,
          applicationId: n.application_id,
          launchId: n.activity_id,
          compositeInstanceId: void 0,
          participants: i.map(e => ({
            userId: e.user_id
          })),
          analyticsActivitySessionId: n.activity_id
        })
      })
    }(0, n)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    C.set(t.id, []);
    let n = t.guild_id;
    if (null != n) {
      var i;
      let e = x(n),
        r = (null !== (i = g.get(e)) && void 0 !== i ? i : []).filter(e => e.channelId !== t.id);
      g.set(e, r)
    }
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function() {
    L = !0
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function(e) {
    let {
      applicationId: t
    } = e;
    O.everLaunchedActivities.add(t),
      function() {
        L = !1
      }()
  },
  EMBEDDED_ACTIVITY_LAUNCH_FAIL: function() {
    (function() {
      L = !1
    })()
  },
  EMBEDDED_ACTIVITY_OPEN: function(e) {
    let {
      channelId: t,
      applicationId: n
    } = e;
    Z({
      channelId: t,
      applicationId: n
    })
  },
  EMBEDDED_ACTIVITY_CLOSE: function(e) {
    let {
      applicationId: t
    } = e, n = p.get(t);
    p.delete(t), (null == n ? void 0 : n.channelId) === i && (i = void 0)
  },
  EMBEDDED_ACTIVITY_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      embeddedActivity: i,
      connections: r
    } = e;
    k({
      guildId: t,
      channelId: n,
      applicationId: i.application_id,
      launchId: i.activity_id,
      compositeInstanceId: void 0,
      participants: r.map(e => ({
        userId: e.user_id
      })),
      analyticsActivitySessionId: i.activity_id
    })
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function(e) {
    let {
      applicationId: t,
      launchId: n,
      compositeInstanceId: i,
      location: r,
      participants: s
    } = e;
    null != u.Z.getChannel(r.channel_id) && k({
      guildId: r.guild_id,
      channelId: r.channel_id,
      location: r,
      applicationId: t,
      launchId: n,
      compositeInstanceId: i,
      participants: s.map(e => ({
        userId: e.user_id,
        sessionId: e.session_id
      }))
    })
  },
  LOCAL_ACTIVITY_UPDATE: function(e) {
    var t;
    let {
      activity: n
    } = e;
    if (null == n) return !1;
    let i = p.get(null !== (t = n.application_id) && void 0 !== t ? t : "");
    if (null == i) return !1;
    p.set(i.applicationId, {
      ...i
    })
  },
  EMBEDDED_ACTIVITY_SET_CONFIG: function(e) {
    let {
      applicationId: t,
      config: n
    } = e, i = p.get(t);
    null != i && p.set(i.applicationId, {
      ...i,
      config: n
    })
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF: function(e) {
    let {
      guildId: t
    } = e, n = x(t), i = M.get(n);
    M.set(n, {
      isFetching: !0,
      lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
    })
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
    let {
      guildId: t,
      activities: n
    } = e, i = x(t);
    D.set(i, n);
    let r = Date.now();
    ! function(e) {
      let {
        activities: t,
        now: n
      } = e;
      t.forEach(e => {
        let t = e.application_id,
          i = e.client_platform_config[(0, f.Z)((0, E.getOS)())];
        if (null == i.label_until) return;
        let r = new Date(i.label_until).getTime();
        if (r < n) return;
        let s = O.seenNewActivities[t],
          o = Object.hasOwn(O.seenNewActivities, t),
          l = new Date(s).getTime() < r;
        i.label_type === a.ww.NEW && (!o || l) && (O.shouldShowNewActivityIndicator = !0, O.seenNewActivities[t] = i.label_until);
        let u = O.seenUpdatedActivities[t],
          _ = Object.hasOwn(O.seenUpdatedActivities, t),
          c = new Date(u).getTime() < r;
        i.label_type === a.ww.UPDATED && (!_ || c) && (O.shouldShowNewActivityIndicator = !0, O.seenUpdatedActivities[t] = i.label_until)
      })
    }({
      activities: n,
      now: r
    }), M.set(i, {
      isFetching: !1,
      lastFetchTimestampMs: r
    })
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function(e) {
    let {
      guildId: t
    } = e, n = x(t), i = M.get(n);
    M.set(n, {
      isFetching: !1,
      lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
    })
  },
  EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: () => {
    O.shouldShowNewActivityIndicator = !1
  },
  EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function(e) {
    let {
      applicationId: t,
      lockState: n,
      pictureInPictureLockState: i,
      gridLockState: r
    } = e;
    null == n ? P.delete(t) : P.set(t, n), null === i ? y.delete(t) : void 0 !== i && y.set(t, i), null === r ? U.delete(t) : void 0 !== r && U.set(t, r)
  },
  EMBEDDED_ACTIVITY_SET_PANEL_MODE: function(e) {
    let {
      activityPanelMode: t
    } = e;
    w = t
  },
  EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function(e) {
    let {
      focusedActivityLayout: t
    } = e;
    B = t
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    i !== t && w === A.Ez.PANEL && (w = A.Ez.PIP)
  },
  EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
    let {
      channelId: t,
      applicationId: n,
      isRejoiningFromCurrentSession: i
    } = e;
    i && v.set(t, n)
  },
  CONNECTION_INTERRUPTED: function(e) {
    e.code === N.$VG.CLOSE_ABNORMAL && (i = void 0, p.clear(), L = !1, w = A.Ez.DISCONNECTED)
  },
  CHANNEL_CALL_POPOUT_WINDOW_OPEN: function(e) {
    let {
      channel: t
    } = e, n = Array.from(p.values()).find(e => {
      let {
        channelId: n
      } = e;
      return t.id === n
    });
    void 0 !== n && v.set(t.id, n.applicationId)
  }
});
t.ZP = j