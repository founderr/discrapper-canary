"use strict";
let i;
n.r(t), n.d(t, {
  NO_ACTIVITIES: function() {
    return C
  }
}), n("47120"), n("653041"), n("51350");
var r, s = n("442837"),
  a = n("570140"),
  o = n("911969"),
  l = n("314897"),
  u = n("592125"),
  d = n("496675"),
  _ = n("944486"),
  c = n("594174"),
  E = n("585483"),
  I = n("358085"),
  T = n("139143"),
  f = n("155268"),
  S = n("613611"),
  h = n("761122"),
  A = n("917107"),
  m = n("918559"),
  N = n("981631");

function p(e, t, n) {
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
  C = [],
  R = new Map,
  g = new Map,
  L = new Map,
  v = new Map,
  D = !1,
  M = new Map,
  y = new Map,
  P = new Map,
  U = new Map,
  b = new Map,
  G = new Map,
  w = new Map;
let k = m.ActivityPanelModes.DISCONNECTED,
  B = m.FocusedActivityLayouts.RESIZABLE;

function V(e) {
  return null != e ? e : "0"
}

function x(e) {
  var t, n, i;
  let {
    guildId: r,
    channelId: s,
    location: a,
    applicationId: o,
    launchId: _,
    compositeInstanceId: c,
    participants: I,
    analyticsActivitySessionId: h
  } = e, A = (0, f.default)(o);
  if (null == A) return;
  let m = u.default.getBasicChannel(s);
  if (!(null != m && d.default.canBasicChannel(N.BasicPermissions.CONNECT, m) || (null == m ? void 0 : m.type) === N.ChannelTypes.DM || (null == m ? void 0 : m.type) === N.ChannelTypes.GROUP_DM)) return;
  let p = I.map(e => e.userId),
    O = l.default.getId(),
    C = p.some(e => e === O),
    D = null === (t = I.find(e => e.userId === O)) || void 0 === t ? void 0 : t.sessionId,
    M = I.some(e => (0, S.isActivityParticipantCurrentUserCurrentSession)(e)),
    y = null == D,
    P = R.get(o),
    U = {
      analyticsActivitySessionId: null != h ? h : "",
      applicationId: o,
      channelId: s,
      guildId: r,
      location: null != a ? a : void 0,
      launchId: _,
      compositeInstanceId: c,
      url: A,
      userIds: new Set(p),
      participants: I
    };
  C && null != P && R.set(P.applicationId, {
    ...P,
    ...U
  });
  null != P && s === P.channelId && o === (null == P ? void 0 : P.applicationId) && (!C && Array.from(P.userIds).some(e => e === O) || !y && !M) ? v.get(s) === o ? v.delete(s) : R.delete(o) : C && (null == P || P.applicationId !== o || P.channelId !== s) && (D === l.default.getSessionId() && !y || (0, T.shouldMountActivityIFrameFromGatewayUpdateWithoutSessionIdCheck)("EmbeddedActivitiesStore")) && (H({
    channelId: s,
    applicationId: o,
    launchId: _,
    compositeInstanceId: c
  }), E.ComponentDispatch.dispatch(N.ComponentActions.OPEN_EMBEDDED_ACTIVITY, {
    channelId: s
  }));
  let b = (null !== (n = L.get(s)) && void 0 !== n ? n : []).filter(e => e.applicationId !== o),
    G = V(r),
    w = (null !== (i = g.get(G)) && void 0 !== i ? i : []).filter(e => !(e.applicationId === o && e.channelId === s));
  p.length > 0 && (b.push(U), w.push(U)), L.set(s, b), g.set(G, w)
}

function F(e) {
  e.embedded_activities.forEach(t => {
    let {
      channel_id: n,
      embedded_activity: i,
      connections: r
    } = t;
    x({
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

function H(e) {
  var t, n;
  let {
    channelId: r,
    applicationId: s,
    launchId: a,
    compositeInstanceId: o
  } = e, d = (0, f.default)(s), E = l.default.getSessionId();
  if (null == d || null == E || (null === (t = R.get(s)) || void 0 === t ? void 0 : t.channelId) === r) return !1;
  let I = u.default.getChannel(r),
    T = null == I ? void 0 : I.getGuildId(),
    S = c.default.getCurrentUser();
  if (null == T && !(null !== (n = null == I ? void 0 : I.isPrivate()) && void 0 !== n && n) || null == S) return !1;
  i = r, R.set(s, {
    guildId: T,
    channelId: r,
    applicationId: s,
    url: d,
    userIds: new Set([S.id]),
    connectedSince: Date.now(),
    launchId: a,
    compositeInstanceId: o
  }), k = i !== _.default.getChannelId() || (0, A.default)(r) ? m.ActivityPanelModes.PIP : m.ActivityPanelModes.PANEL, w.set(j(r, s), Date.now())
}

function Y() {
  D = !1
}

function j(e, t) {
  return "".concat(e, ":").concat(t)
}
class W extends(r = s.default.PersistedStore) {
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
    return null !== (t = Array.from(R.values()).find(t => {
      let {
        channelId: n
      } = t;
      return e === n
    })) && void 0 !== t ? t : null
  }
  getSelfEmbeddedActivities() {
    return R
  }
  getEmbeddedActivitiesForGuild(e) {
    var t;
    return null !== (t = g.get(e)) && void 0 !== t ? t : C
  }
  getEmbeddedActivitiesForChannel(e) {
    var t;
    return null !== (t = L.get(e)) && void 0 !== t ? t : C
  }
  getEmbeddedActivitiesByChannel() {
    return L
  }
  getEmbeddedActivityDurationMs(e, t) {
    let n = w.get(j(e, t));
    return null == n ? null : Date.now() - n
  }
  isLaunchingActivity() {
    return D
  }
  getShelfActivities(e) {
    var t;
    let n = V(e);
    return null !== (t = M.get(n)) && void 0 !== t ? t : []
  }
  getShelfFetchStatus(e) {
    let t = V(e);
    return y.get(t)
  }
  shouldFetchShelf(e) {
    var t, n;
    let i = V(e),
      r = null !== (t = y.get(i)) && void 0 !== t ? t : {
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
    return null !== (t = U.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e)
  }
  getGridOrientationLockStateForApp(e) {
    var t, n;
    return null !== (n = null !== (t = b.get(e)) && void 0 !== t ? t : U.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e)
  }
  getLayoutModeForApp(e) {
    return G.get(e)
  }
  getConnectedActivityChannelId() {
    return i
  }
  getActivityPanelMode() {
    return k
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
      e: for (let [i, r] of L)
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
p(W, "displayName", "EmbeddedActivitiesStore"), p(W, "persistKey", "EmbeddedActivities"), p(W, "migrations", [e => ({
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
let K = new W(a.default, {
  ACTIVITY_LAYOUT_MODE_UPDATE: function(e) {
    let {
      applicationId: t,
      layoutMode: n
    } = e;
    G.set(t, n)
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t
    } = e;
    L.clear(), g.clear(), t.forEach(e => F(e))
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    F(t)
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
        x({
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
    L.set(t.id, []);
    let n = t.guild_id;
    if (null != n) {
      var i;
      let e = V(n),
        r = (null !== (i = g.get(e)) && void 0 !== i ? i : []).filter(e => e.channelId !== t.id);
      g.set(e, r)
    }
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function() {
    D = !0
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function(e) {
    let {
      applicationId: t
    } = e;
    O.everLaunchedActivities.add(t),
      function() {
        D = !1
      }()
  },
  EMBEDDED_ACTIVITY_LAUNCH_FAIL: function() {
    (function() {
      D = !1
    })()
  },
  EMBEDDED_ACTIVITY_OPEN: function(e) {
    let {
      channelId: t,
      applicationId: n
    } = e;
    H({
      channelId: t,
      applicationId: n
    })
  },
  EMBEDDED_ACTIVITY_CLOSE: function(e) {
    let {
      applicationId: t
    } = e, n = R.get(t);
    R.delete(t), (null == n ? void 0 : n.channelId) === i && (i = void 0)
  },
  EMBEDDED_ACTIVITY_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      embeddedActivity: i,
      connections: r
    } = e;
    x({
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
    null != u.default.getChannel(r.channel_id) && x({
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
    let i = R.get(null !== (t = n.application_id) && void 0 !== t ? t : "");
    if (null == i) return !1;
    R.set(i.applicationId, {
      ...i
    })
  },
  EMBEDDED_ACTIVITY_SET_CONFIG: function(e) {
    let {
      applicationId: t,
      config: n
    } = e, i = R.get(t);
    null != i && R.set(i.applicationId, {
      ...i,
      config: n
    })
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF: function(e) {
    let {
      guildId: t
    } = e, n = V(t), i = y.get(n);
    y.set(n, {
      isFetching: !0,
      lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
    })
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
    let {
      guildId: t,
      activities: n
    } = e, i = V(t);
    M.set(i, n);
    let r = Date.now();
    ! function(e) {
      let {
        activities: t,
        now: n
      } = e;
      t.forEach(e => {
        let t = e.application_id,
          i = e.client_platform_config[(0, h.default)((0, I.getOS)())];
        if (null == i.label_until) return;
        let r = new Date(i.label_until).getTime();
        if (r < n) return;
        let s = O.seenNewActivities[t],
          a = Object.hasOwn(O.seenNewActivities, t),
          l = new Date(s).getTime() < r;
        i.label_type === o.EmbeddedActivityLabelTypes.NEW && (!a || l) && (O.shouldShowNewActivityIndicator = !0, O.seenNewActivities[t] = i.label_until);
        let u = O.seenUpdatedActivities[t],
          d = Object.hasOwn(O.seenUpdatedActivities, t),
          _ = new Date(u).getTime() < r;
        i.label_type === o.EmbeddedActivityLabelTypes.UPDATED && (!d || _) && (O.shouldShowNewActivityIndicator = !0, O.seenUpdatedActivities[t] = i.label_until)
      })
    }({
      activities: n,
      now: r
    }), y.set(i, {
      isFetching: !1,
      lastFetchTimestampMs: r
    })
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function(e) {
    let {
      guildId: t
    } = e, n = V(t), i = y.get(n);
    y.set(n, {
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
    null == n ? P.delete(t) : P.set(t, n), null === i ? U.delete(t) : void 0 !== i && U.set(t, i), null === r ? b.delete(t) : void 0 !== r && b.set(t, r)
  },
  EMBEDDED_ACTIVITY_SET_PANEL_MODE: function(e) {
    let {
      activityPanelMode: t
    } = e;
    k = t
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
    i !== t && k === m.ActivityPanelModes.PANEL && (k = m.ActivityPanelModes.PIP)
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
    e.code === N.RPCCloseCodes.CLOSE_ABNORMAL && (i = void 0, R.clear(), D = !1, k = m.ActivityPanelModes.DISCONNECTED)
  },
  CHANNEL_CALL_POPOUT_WINDOW_OPEN: function(e) {
    let {
      channel: t
    } = e, n = Array.from(R.values()).find(e => {
      let {
        channelId: n
      } = e;
      return t.id === n
    });
    void 0 !== n && v.set(t.id, n.applicationId)
  }
});
t.default = K