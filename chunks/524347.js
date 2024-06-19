var s, i, l, a, r = n(913527),
  o = n.n(r),
  c = n(442837),
  u = n(846519),
  d = n(570140),
  E = n(594190),
  _ = n(569545),
  I = n(314897),
  T = n(70956),
  N = n(960359),
  m = n(853197),
  h = n(702512);
let C = null,
  S = null,
  A = {},
  p = {},
  g = h._e.LOADING_INITIAL_PROGRESS,
  f = new u.V7,
  O = {
    completed: !1,
    initialProgressFetched: !1,
    interrupted: !1,
    retries: 0
  },
  R = e => {
    let {
      dropsQuestId: t,
      streamKey: n,
      game: s,
      completed: i,
      gameTitle: l
    } = O;
    if (!(null == t || null == l || i || null == s || null == n || f.isStarted())) e ? (0, N.m0)(t, n, s.pid) : f.start(1 * T.Z.Millis.MINUTE, () => {
      (0, N.m0)(t, n, s.pid)
    })
  },
  M = e => {
    O.retries = 0, O.completed = e.completed, O.initialProgressFetched = !0, O.progress = e.progress, O.lastCheckedAt = o().now(), g = O.completed ? h._e.QUEST_COMPLETION : h._e.TRACK_PROGRESS
  },
  x = (e, t, n) => {
    if (!O.completed || e.dropsQuestId !== O.dropsQuestId) O.game = t, O.dropsQuestId = e.dropsQuestId, O.gameTitle = e.title, O.completed = !1, O.interrupted = !1, O.streamKey = n, O.retries = 0, O.lastCheckedAt = o().now(), f.start(5e3, () => R(!0))
  };
class v extends(a = c.ZP.Store) {
  initialize() {
    this.waitFor(E.ZP)
  }
  getActivityPanelTooltipAction() {
    return g
  }
  getIsPartnerGameQuestComplete(e) {
    var t;
    let n = (0, m.BS)(e);
    if (null == n || null == S) return !1;
    let s = !!(null === (t = S[n.dropsQuestId]) || void 0 === t ? void 0 : t.completed_at);
    return O.completed && O.gameTitle === n.title || s
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
    return g
  }
  get enrolledDropsByQuestId() {
    return p
  }
  get hasInitialProgressFetched() {
    return O.initialProgressFetched
  }
  get isCurrentQuestCompleted() {
    return O.completed
  }
  get isCurrentQuestInterrupted() {
    return O.interrupted
  }
  get currentDropQuestGameTitle() {
    return O.gameTitle
  }
  get currentDropQuestStreamProgress() {
    let e = O.progress;
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
    p[e.dropsQuestId] = {
      isEnrolled: e.isEnrolled,
      enrolledUser: e.enrolledUser
    }
  },
  DROPS_FETCH_PROGRESS_SUCCESS: M,
  DROPS_FETCH_PROGRESS_FAILURE: e => {
    if (!O.initialProgressFetched) O.initialProgressFetched = !0, g = h._e.STREAM_CTA
  },
  DROPS_HEARTBEAT_SUCCESS: e => {
    M(e), A[e.dropsQuestId] = !0, R()
  },
  DROPS_HEARTBEAT_FAILURE: e => {
    let {
      dropsQuestId: t,
      statusCode: n
    } = e;
    if (O.completed = !1, O.initialProgressFetched = !0, O.lastCheckedAt = o().now(), 429 === n && 0 === O.retries) {
      O.retries = O.retries + 1, R();
      return
    }
    g = h._e.STREAM_CTA, 403 === n ? A[t] = !1 : O.interrupted = !0
  },
  DROPS_UNENROLL_USER: e => {
    S = null, A = {
      ...A
    }, delete A[e.dropsQuestId], p = {
      ...p
    }, delete p[e.dropsQuestId], O.dropsQuestId === e.dropsQuestId && (O = {
      completed: !1,
      initialProgressFetched: !1,
      interrupted: !1,
      retries: 0
    })
  },
  STREAM_CLOSE: () => {
    O.completed && (g = h._e.QUEST_COMPLETION), O.interrupted = !1, O.retries = 0, f.stop()
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
    if (null == o || (0, m.hM)(o)) return;
    let c = null === (t = (0, m.j7)(o)) || void 0 === t ? void 0 : t.getCurrentConfig({
      location: "1"
    }, {
      autoTrackExposure: !1
    });
    if (null == c || !c.dropsEnabled) return;
    let u = c.autoEnrollment;
    null != p[o.dropsQuestId] && p[o.dropsQuestId].isEnrolled || u ? x(o, r, a) : d.Z.wait(async () => {
      var e;
      await (0, N.BE)(o.dropsQuestId), (null === (e = p[o.dropsQuestId]) || void 0 === e ? void 0 : e.isEnrolled) && x(o, r, a)
    })
  },
  LOGOUT: function() {
    A = {}, p = {}, S = {}, f.stop()
  }
})