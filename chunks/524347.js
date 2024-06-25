var s, i, l, a, r = n(913527),
  o = n.n(r),
  c = n(442837),
  u = n(846519),
  d = n(570140),
  E = n(594190),
  _ = n(569545),
  I = n(314897),
  T = n(70956),
  m = n(960359),
  N = n(853197),
  h = n(702512);
let C = null,
  S = null,
  A = {},
  g = {},
  p = h._e.LOADING_INITIAL_PROGRESS,
  f = new u.V7,
  R = {
    completed: !1,
    initialProgressFetched: !1,
    interrupted: !1,
    retries: 0
  },
  O = e => {
    let {
      dropsQuestId: t,
      streamKey: n,
      game: s,
      completed: i,
      gameTitle: l
    } = R;
    if (!(null == t || null == l || i || null == s || null == n || f.isStarted())) e ? (0, m.m0)(t, n, s.pid) : f.start(1 * T.Z.Millis.MINUTE, () => {
      (0, m.m0)(t, n, s.pid)
    })
  },
  M = e => {
    R.retries = 0, R.completed = e.completed, R.initialProgressFetched = !0, R.progress = e.progress, R.lastCheckedAt = o().now(), p = R.completed ? h._e.QUEST_COMPLETION : h._e.TRACK_PROGRESS
  },
  x = (e, t, n) => {
    if (!R.completed || e.dropsQuestId !== R.dropsQuestId) R.game = t, R.dropsQuestId = e.dropsQuestId, R.gameTitle = e.title, R.completed = !1, R.interrupted = !1, R.streamKey = n, R.retries = 0, R.lastCheckedAt = o().now(), f.start(5e3, () => O(!0))
  };
class v extends(a = c.ZP.Store) {
  initialize() {
    this.waitFor(E.ZP)
  }
  getActivityPanelTooltipAction() {
    return p
  }
  getIsPartnerGameQuestComplete(e) {
    var t;
    let n = (0, N.BS)(e);
    if (null == n || null == S) return !1;
    let s = !!(null === (t = S[n.dropsQuestId]) || void 0 === t ? void 0 : t.completed_at);
    return R.completed && R.gameTitle === n.title || s
  }
  get serverEligibleByQuestIds() {
    return A
  }
  get platformAvailability() {
    return C
  }
  get userStatus() {
    return S
  }
  get activityPanelTooltipAction() {
    return p
  }
  get enrolledDropsByQuestId() {
    return g
  }
  get hasInitialProgressFetched() {
    return R.initialProgressFetched
  }
  get isCurrentQuestCompleted() {
    return R.completed
  }
  get isCurrentQuestInterrupted() {
    return R.interrupted
  }
  get currentDropQuestGameTitle() {
    return R.gameTitle
  }
  get currentDropQuestStreamProgress() {
    let e = R.progress;
    if (null == e || null == e.steps || 0 === e.steps.length) return 0;
    let t = e.steps.find(e => "stream_length" === e.name);
    return null == t ? 0 : t.percent
  }
}
l = "DropsStore", (i = "displayName") in(s = v) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = new v(d.Z, {
  DROPS_ELIGIBILITY_FETCH_SUCCESS: e => {
    A[e.dropsQuestId] = e.isEligible
  },
  DROPS_PLATFORM_AVAILABILITY_SUCCESS: e => {
    C = e.availablePlatforms.filter(e => h.El.includes(e))
  },
  DROPS_USER_STATUS_FETCH_SUCCESS: e => {
    var t;
    S = null !== (t = e.codes) && void 0 !== t ? t : {}
  },
  DROPS_USER_STATUS_FETCH_FAILURE: e => {
    S = {}
  },
  DROPS_ENROLLED_USER_FETCH_SUCCESS: e => {
    g[e.dropsQuestId] = {
      isEnrolled: e.isEnrolled,
      enrolledUser: e.enrolledUser
    }
  },
  DROPS_FETCH_PROGRESS_SUCCESS: M,
  DROPS_FETCH_PROGRESS_FAILURE: e => {
    if (!R.initialProgressFetched) R.initialProgressFetched = !0, p = h._e.STREAM_CTA
  },
  DROPS_HEARTBEAT_SUCCESS: e => {
    M(e), A[e.dropsQuestId] = !0, O()
  },
  DROPS_HEARTBEAT_FAILURE: e => {
    let {
      dropsQuestId: t,
      statusCode: n
    } = e;
    if (R.completed = !1, R.initialProgressFetched = !0, R.lastCheckedAt = o().now(), 429 === n && 0 === R.retries) {
      R.retries = R.retries + 1, O();
      return
    }
    p = h._e.STREAM_CTA, 403 === n ? A[t] = !1 : R.interrupted = !0
  },
  DROPS_UNENROLL_USER: e => {
    S = null, A = {
      ...A
    }, delete A[e.dropsQuestId], g = {
      ...g
    }, delete g[e.dropsQuestId], R.dropsQuestId === e.dropsQuestId && (R = {
      completed: !1,
      initialProgressFetched: !1,
      interrupted: !1,
      retries: 0
    })
  },
  STREAM_CLOSE: () => {
    R.completed && (p = h._e.QUEST_COMPLETION), R.interrupted = !1, R.retries = 0, f.stop()
  },
  STREAM_START: function(e) {
    var t;
    let {
      streamType: n,
      guildId: s,
      channelId: i,
      pid: l
    } = e, a = (0, _.V9)({
      streamType: n,
      guildId: s,
      channelId: i,
      ownerId: I.default.getId()
    });
    if (null == l) return;
    let r = E.ZP.getGameForPID(l);
    if (null == r) return;
    let o = Object.values(h.Zv).find(e => e.gameSearchTerm.find(e => {
      var t;
      return e.toLowerCase() === (null === (t = r.name) || void 0 === t ? void 0 : t.toLowerCase())
    }));
    if (null == o || (0, N.hM)(o)) return;
    let c = null === (t = (0, N.j7)(o)) || void 0 === t ? void 0 : t.getCurrentConfig({
      location: "1"
    }, {
      autoTrackExposure: !1
    });
    if (null == c || !c.dropsEnabled) return;
    let u = c.autoEnrollment;
    null != g[o.dropsQuestId] && g[o.dropsQuestId].isEnrolled || u ? x(o, r, a) : d.Z.wait(async () => {
      var e;
      await (0, m.BE)(o.dropsQuestId), (null === (e = g[o.dropsQuestId]) || void 0 === e ? void 0 : e.isEnrolled) && x(o, r, a)
    })
  },
  LOGOUT: function() {
    A = {}, g = {}, S = {}, f.stop()
  }
})