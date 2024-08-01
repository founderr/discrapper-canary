var i, a, s, r, l = n(913527),
  o = n.n(l),
  c = n(442837),
  u = n(846519),
  d = n(570140),
  _ = n(594190),
  E = n(569545),
  I = n(314897),
  m = n(70956),
  T = n(960359),
  h = n(853197),
  N = n(702512);
let f = null,
  C = null,
  p = {},
  g = {},
  S = N._e.LOADING_INITIAL_PROGRESS,
  A = new u.V7(),
  M = {
completed: !1,
initialProgressFetched: !1,
interrupted: !1,
retries: 0
  },
  R = e => {
let {
  dropsQuestId: t,
  streamKey: n,
  game: i,
  completed: a,
  gameTitle: s
} = M;
if (!(null == t || null == s || a || null == i || null == n || A.isStarted()))
  e ? (0, T.m0)(t, n, i.pid) : A.start(1 * m.Z.Millis.MINUTE, () => {
    (0, T.m0)(t, n, i.pid);
  });
  },
  O = e => {
M.retries = 0, M.completed = e.completed, M.initialProgressFetched = !0, M.progress = e.progress, M.lastCheckedAt = o().now(), S = M.completed ? N._e.QUEST_COMPLETION : N._e.TRACK_PROGRESS;
  },
  x = (e, t, n) => {
if (!M.completed || e.dropsQuestId !== M.dropsQuestId)
  M.game = t, M.dropsQuestId = e.dropsQuestId, M.gameTitle = e.title, M.completed = !1, M.interrupted = !1, M.streamKey = n, M.retries = 0, M.lastCheckedAt = o().now(), A.start(5000, () => R(!0));
  };
class v extends(r = c.ZP.Store) {
  initialize() {
this.waitFor(_.ZP);
  }
  getActivityPanelTooltipAction() {
return S;
  }
  getIsPartnerGameQuestComplete(e) {
var t;
let n = (0, h.BS)(e);
if (null == n || null == C)
  return !1;
let i = !!(null === (t = C[n.dropsQuestId]) || void 0 === t ? void 0 : t.completed_at);
return M.completed && M.gameTitle === n.title || i;
  }
  get serverEligibleByQuestIds() {
return p;
  }
  get platformAvailability() {
return f;
  }
  get userStatus() {
return C;
  }
  get activityPanelTooltipAction() {
return S;
  }
  get enrolledDropsByQuestId() {
return g;
  }
  get hasInitialProgressFetched() {
return M.initialProgressFetched;
  }
  get isCurrentQuestCompleted() {
return M.completed;
  }
  get isCurrentQuestInterrupted() {
return M.interrupted;
  }
  get currentDropQuestGameTitle() {
return M.gameTitle;
  }
  get currentDropQuestStreamProgress() {
let e = M.progress;
if (null == e || null == e.steps || 0 === e.steps.length)
  return 0;
let t = e.steps.find(e => 'stream_length' === e.name);
return null == t ? 0 : t.percent;
  }
}
s = 'DropsStore', (a = 'displayName') in(i = v) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new v(d.Z, {
  DROPS_ELIGIBILITY_FETCH_SUCCESS: e => {
p[e.dropsQuestId] = e.isEligible;
  },
  DROPS_PLATFORM_AVAILABILITY_SUCCESS: e => {
f = e.availablePlatforms.filter(e => N.El.includes(e));
  },
  DROPS_USER_STATUS_FETCH_SUCCESS: e => {
var t;
C = null !== (t = e.codes) && void 0 !== t ? t : {};
  },
  DROPS_USER_STATUS_FETCH_FAILURE: e => {
C = {};
  },
  DROPS_ENROLLED_USER_FETCH_SUCCESS: e => {
g[e.dropsQuestId] = {
  isEnrolled: e.isEnrolled,
  enrolledUser: e.enrolledUser
};
  },
  DROPS_FETCH_PROGRESS_SUCCESS: O,
  DROPS_FETCH_PROGRESS_FAILURE: e => {
if (!M.initialProgressFetched)
  M.initialProgressFetched = !0, S = N._e.STREAM_CTA;
  },
  DROPS_HEARTBEAT_SUCCESS: e => {
O(e), p[e.dropsQuestId] = !0, R();
  },
  DROPS_HEARTBEAT_FAILURE: e => {
let {
  dropsQuestId: t,
  statusCode: n
} = e;
if (M.completed = !1, M.initialProgressFetched = !0, M.lastCheckedAt = o().now(), 429 === n && 0 === M.retries) {
  M.retries = M.retries + 1, R();
  return;
}
S = N._e.STREAM_CTA, 403 === n ? p[t] = !1 : M.interrupted = !0;
  },
  DROPS_UNENROLL_USER: e => {
C = null, p = {
  ...p
}, delete p[e.dropsQuestId], g = {
  ...g
}, delete g[e.dropsQuestId], M.dropsQuestId === e.dropsQuestId && (M = {
  completed: !1,
  initialProgressFetched: !1,
  interrupted: !1,
  retries: 0
});
  },
  STREAM_CLOSE: () => {
M.completed && (S = N._e.QUEST_COMPLETION), M.interrupted = !1, M.retries = 0, A.stop();
  },
  STREAM_START: function(e) {
var t;
let {
  streamType: n,
  guildId: i,
  channelId: a,
  pid: s
} = e, r = (0, E.V9)({
  streamType: n,
  guildId: i,
  channelId: a,
  ownerId: I.default.getId()
});
if (null == s)
  return;
let l = _.ZP.getGameForPID(s);
if (null == l)
  return;
let o = Object.values(N.Zv).find(e => e.gameSearchTerm.find(e => {
  var t;
  return e.toLowerCase() === (null === (t = l.name) || void 0 === t ? void 0 : t.toLowerCase());
}));
if (null == o || (0, h.hM)(o))
  return;
let c = null === (t = (0, h.j7)(o)) || void 0 === t ? void 0 : t.getCurrentConfig({
  location: '1'
}, {
  autoTrackExposure: !1
});
if (null == c || !c.dropsEnabled)
  return;
let u = c.autoEnrollment;
null != g[o.dropsQuestId] && g[o.dropsQuestId].isEnrolled || u ? x(o, l, r) : d.Z.wait(async () => {
  var e;
  await (0, T.BE)(o.dropsQuestId), (null === (e = g[o.dropsQuestId]) || void 0 === e ? void 0 : e.isEnrolled) && x(o, l, r);
});
  },
  LOGOUT: function() {
p = {}, g = {}, C = {}, A.stop();
  }
});