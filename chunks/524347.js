"use strict";
n.r(t);
var s, a, l, i, r = n("913527"),
  o = n.n(r),
  u = n("442837"),
  d = n("846519"),
  c = n("570140"),
  f = n("594190"),
  E = n("569545"),
  _ = n("314897"),
  m = n("70956"),
  T = n("960359"),
  I = n("853197"),
  p = n("702512");
let h = null,
  N = null,
  S = {},
  C = {},
  g = p.TooltipActions.LOADING_INITIAL_PROGRESS,
  A = new d.Timeout,
  M = {
    completed: !1,
    initialProgressFetched: !1,
    interrupted: !1,
    retries: 0
  },
  v = e => {
    let {
      dropsQuestId: t,
      streamKey: n,
      game: s,
      completed: a,
      gameTitle: l
    } = M;
    !(null == t || null == l || a || null == s || null == n || A.isStarted()) && (e ? (0, T.sendHeartbeat)(t, n, s.pid) : A.start(1 * m.default.Millis.MINUTE, () => {
      (0, T.sendHeartbeat)(t, n, s.pid)
    }))
  },
  R = e => {
    M.retries = 0, M.completed = e.completed, M.initialProgressFetched = !0, M.progress = e.progress, M.lastCheckedAt = o().now(), g = M.completed ? p.TooltipActions.QUEST_COMPLETION : p.TooltipActions.TRACK_PROGRESS
  },
  O = (e, t, n) => {
    (!M.completed || e.dropsQuestId !== M.dropsQuestId) && (M.game = t, M.dropsQuestId = e.dropsQuestId, M.gameTitle = e.title, M.completed = !1, M.interrupted = !1, M.streamKey = n, M.retries = 0, M.lastCheckedAt = o().now(), A.start(5e3, () => v(!0)))
  };
class x extends(i = u.default.Store) {
  initialize() {
    this.waitFor(f.default)
  }
  getActivityPanelTooltipAction() {
    return g
  }
  getIsPartnerGameQuestComplete(e) {
    var t;
    let n = (0, I.getDrop)(e);
    if (null == n || null == N) return !1;
    let s = !!(null === (t = N[n.dropsQuestId]) || void 0 === t ? void 0 : t.completed_at);
    return M.completed && M.gameTitle === n.title || s
  }
  get serverEligibleByQuestIds() {
    return S
  }
  get platformAvailability() {
    return h
  }
  get userStatus() {
    return N
  }
  get activityPanelTooltipAction() {
    return g
  }
  get enrolledDropsByQuestId() {
    return C
  }
  get hasInitialProgressFetched() {
    return M.initialProgressFetched
  }
  get isCurrentQuestCompleted() {
    return M.completed
  }
  get isCurrentQuestInterrupted() {
    return M.interrupted
  }
  get currentDropQuestGameTitle() {
    return M.gameTitle
  }
  get currentDropQuestStreamProgress() {
    let e = M.progress;
    if (null == e || null == e.steps || 0 === e.steps.length) return 0;
    let t = e.steps.find(e => "stream_length" === e.name);
    return null == t ? 0 : t.percent
  }
}
l = "DropsStore", (a = "displayName") in(s = x) ? Object.defineProperty(s, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = l, t.default = new x(c.default, {
  DROPS_ELIGIBILITY_FETCH_SUCCESS: e => {
    S[e.dropsQuestId] = e.isEligible
  },
  DROPS_PLATFORM_AVAILABILITY_SUCCESS: e => {
    h = e.availablePlatforms.filter(e => p.DROPS_PLATFORMS.includes(e))
  },
  DROPS_USER_STATUS_FETCH_SUCCESS: e => {
    var t;
    N = null !== (t = e.codes) && void 0 !== t ? t : {}
  },
  DROPS_USER_STATUS_FETCH_FAILURE: e => {
    N = {}
  },
  DROPS_ENROLLED_USER_FETCH_SUCCESS: e => {
    C[e.dropsQuestId] = {
      isEnrolled: e.isEnrolled,
      enrolledUser: e.enrolledUser
    }
  },
  DROPS_FETCH_PROGRESS_SUCCESS: R,
  DROPS_FETCH_PROGRESS_FAILURE: e => {
    !M.initialProgressFetched && (M.initialProgressFetched = !0, g = p.TooltipActions.STREAM_CTA)
  },
  DROPS_HEARTBEAT_SUCCESS: e => {
    R(e), S[e.dropsQuestId] = !0, v()
  },
  DROPS_HEARTBEAT_FAILURE: e => {
    let {
      dropsQuestId: t,
      statusCode: n
    } = e;
    if (M.completed = !1, M.initialProgressFetched = !0, M.lastCheckedAt = o().now(), 429 === n && 0 === M.retries) {
      M.retries = M.retries + 1, v();
      return
    }
    g = p.TooltipActions.STREAM_CTA, 403 === n ? S[t] = !1 : M.interrupted = !0
  },
  DROPS_UNENROLL_USER: e => {
    N = null, S = {
      ...S
    }, delete S[e.dropsQuestId], C = {
      ...C
    }, delete C[e.dropsQuestId], M.dropsQuestId === e.dropsQuestId && (M = {
      completed: !1,
      initialProgressFetched: !1,
      interrupted: !1,
      retries: 0
    })
  },
  STREAM_CLOSE: () => {
    M.completed && (g = p.TooltipActions.QUEST_COMPLETION), M.interrupted = !1, M.retries = 0, A.stop()
  },
  STREAM_START: function(e) {
    var t;
    let {
      streamType: n,
      guildId: s,
      channelId: a,
      pid: l
    } = e, i = (0, E.encodeStreamKey)({
      streamType: n,
      guildId: s,
      channelId: a,
      ownerId: _.default.getId()
    });
    if (null == l) return;
    let r = f.default.getGameForPID(l);
    if (null == r) return;
    let o = Object.values(p.DROPS_GAMES).find(e => e.gameSearchTerm.find(e => {
      var t;
      return e.toLowerCase() === (null === (t = r.name) || void 0 === t ? void 0 : t.toLowerCase())
    }));
    if (null == o || (0, I.getDropExpired)(o)) return;
    let u = null === (t = (0, I.getDropsExperimentForDrop)(o)) || void 0 === t ? void 0 : t.getCurrentConfig({
      location: "1"
    }, {
      autoTrackExposure: !1
    });
    if (null == u || !u.dropsEnabled) return;
    let d = u.autoEnrollment;
    null != C[o.dropsQuestId] && C[o.dropsQuestId].isEnrolled || d ? O(o, r, i) : c.default.wait(async () => {
      var e;
      await (0, T.fetchEnrolledUser)(o.dropsQuestId), (null === (e = C[o.dropsQuestId]) || void 0 === e ? void 0 : e.isEnrolled) && O(o, r, i)
    })
  },
  LOGOUT: function() {
    S = {}, C = {}, N = {}, A.stop()
  }
})