"use strict";
n.r(t);
var s, l, a, i, r = n("913527"),
  o = n.n(r),
  u = n("442837"),
  d = n("846519"),
  c = n("570140"),
  E = n("594190"),
  f = n("569545"),
  _ = n("314897"),
  T = n("70956"),
  I = n("960359"),
  m = n("853197"),
  N = n("702512");
let p = null,
  S = null,
  C = {},
  A = {},
  h = N.TooltipActions.LOADING_INITIAL_PROGRESS,
  g = new d.Timeout,
  M = {
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
      completed: l,
      gameTitle: a
    } = M;
    !(null == t || null == a || l || null == s || null == n || g.isStarted()) && (e ? (0, I.sendHeartbeat)(t, n, s.pid) : g.start(1 * T.default.Millis.MINUTE, () => {
      (0, I.sendHeartbeat)(t, n, s.pid)
    }))
  },
  R = e => {
    M.retries = 0, M.completed = e.completed, M.initialProgressFetched = !0, M.progress = e.progress, M.lastCheckedAt = o().now(), h = M.completed ? N.TooltipActions.QUEST_COMPLETION : N.TooltipActions.TRACK_PROGRESS
  },
  v = (e, t, n) => {
    (!M.completed || e.dropsQuestId !== M.dropsQuestId) && (M.game = t, M.dropsQuestId = e.dropsQuestId, M.gameTitle = e.title, M.completed = !1, M.interrupted = !1, M.streamKey = n, M.retries = 0, M.lastCheckedAt = o().now(), g.start(5e3, () => O(!0)))
  };
class L extends(i = u.default.Store) {
  initialize() {
    this.waitFor(E.default)
  }
  getActivityPanelTooltipAction() {
    return h
  }
  getIsPartnerGameQuestComplete(e) {
    var t;
    let n = (0, m.getDrop)(e);
    if (null == n || null == S) return !1;
    let s = !!(null === (t = S[n.dropsQuestId]) || void 0 === t ? void 0 : t.completed_at);
    return M.completed && M.gameTitle === n.title || s
  }
  get serverEligibleByQuestIds() {
    return C
  }
  get platformAvailability() {
    return p
  }
  get userStatus() {
    return S
  }
  get activityPanelTooltipAction() {
    return h
  }
  get enrolledDropsByQuestId() {
    return A
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
a = "DropsStore", (l = "displayName") in(s = L) ? Object.defineProperty(s, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = a, t.default = new L(c.default, {
  DROPS_ELIGIBILITY_FETCH_SUCCESS: e => {
    C[e.dropsQuestId] = e.isEligible
  },
  DROPS_PLATFORM_AVAILABILITY_SUCCESS: e => {
    p = e.availablePlatforms.filter(e => N.DROPS_PLATFORMS.includes(e))
  },
  DROPS_USER_STATUS_FETCH_SUCCESS: e => {
    var t;
    S = null !== (t = e.codes) && void 0 !== t ? t : {}
  },
  DROPS_USER_STATUS_FETCH_FAILURE: e => {
    S = {}
  },
  DROPS_ENROLLED_USER_FETCH_SUCCESS: e => {
    A[e.dropsQuestId] = {
      isEnrolled: e.isEnrolled,
      enrolledUser: e.enrolledUser
    }
  },
  DROPS_FETCH_PROGRESS_SUCCESS: R,
  DROPS_FETCH_PROGRESS_FAILURE: e => {
    !M.initialProgressFetched && (M.initialProgressFetched = !0, h = N.TooltipActions.STREAM_CTA)
  },
  DROPS_HEARTBEAT_SUCCESS: e => {
    R(e), C[e.dropsQuestId] = !0, O()
  },
  DROPS_HEARTBEAT_FAILURE: e => {
    let {
      dropsQuestId: t,
      statusCode: n
    } = e;
    if (M.completed = !1, M.initialProgressFetched = !0, M.lastCheckedAt = o().now(), 429 === n && 0 === M.retries) {
      M.retries = M.retries + 1, O();
      return
    }
    h = N.TooltipActions.STREAM_CTA, 403 === n ? C[t] = !1 : M.interrupted = !0
  },
  DROPS_UNENROLL_USER: e => {
    S = null, C = {
      ...C
    }, delete C[e.dropsQuestId], A = {
      ...A
    }, delete A[e.dropsQuestId], M.dropsQuestId === e.dropsQuestId && (M = {
      completed: !1,
      initialProgressFetched: !1,
      interrupted: !1,
      retries: 0
    })
  },
  STREAM_CLOSE: () => {
    M.completed && (h = N.TooltipActions.QUEST_COMPLETION), M.interrupted = !1, M.retries = 0, g.stop()
  },
  STREAM_START: function(e) {
    var t;
    let {
      streamType: n,
      guildId: s,
      channelId: l,
      pid: a
    } = e, i = (0, f.encodeStreamKey)({
      streamType: n,
      guildId: s,
      channelId: l,
      ownerId: _.default.getId()
    });
    if (null == a) return;
    let r = E.default.getGameForPID(a);
    if (null == r) return;
    let o = Object.values(N.DROPS_GAMES).find(e => e.gameSearchTerm.find(e => {
      var t;
      return e.toLowerCase() === (null === (t = r.name) || void 0 === t ? void 0 : t.toLowerCase())
    }));
    if (null == o || (0, m.getDropExpired)(o)) return;
    let u = null === (t = (0, m.getDropsExperimentForDrop)(o)) || void 0 === t ? void 0 : t.getCurrentConfig({
      location: "1"
    }, {
      autoTrackExposure: !1
    });
    if (null == u || !u.dropsEnabled) return;
    let d = u.autoEnrollment;
    null != A[o.dropsQuestId] && A[o.dropsQuestId].isEnrolled || d ? v(o, r, i) : c.default.wait(async () => {
      var e;
      await (0, I.fetchEnrolledUser)(o.dropsQuestId), (null === (e = A[o.dropsQuestId]) || void 0 === e ? void 0 : e.isEnrolled) && v(o, r, i)
    })
  },
  LOGOUT: function() {
    C = {}, A = {}, S = {}, g.stop()
  }
})