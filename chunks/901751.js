"use strict";
n.r(t), n.d(t, {
  generatePsuedoStreamKey: function() {
    return P
  },
  getPlaytimeQuestForActiveGames: function() {
    return b
  }
}), n("47120");
var i = n("147913"),
  r = n("317381"),
  s = n("594190"),
  a = n("569545"),
  o = n("199902"),
  l = n("314897"),
  u = n("77498"),
  d = n("938475"),
  _ = n("70956"),
  c = n("272008"),
  E = n("569984"),
  I = n("918701"),
  T = n("242755"),
  f = n("432945"),
  S = n("977156"),
  h = n("5881"),
  A = n("566078"),
  m = n("46140"),
  N = n("70722");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let O = 12 * _.default.Millis.HOUR,
  C = 1 * _.default.Millis.MINUTE,
  R = 1 * _.default.Millis.SECOND,
  g = 5 * _.default.Millis.SECOND,
  L = 1 * _.default.Millis.SECOND,
  v = _.default.Millis.DAY,
  D = 30 * _.default.Millis.MINUTE,
  M = 5 * _.default.Millis.MINUTE,
  y = (0, h.getQuestLogger)({
    location: m.QuestsExperimentLocations.QUESTS_MANAGER
  }),
  P = e => (0, a.encodeStreamKey)({
    streamType: N.StreamTypes.CALL,
    channelId: e,
    ownerId: "1"
  });

function U() {
  var e, t;
  let n = o.default.getStreamerActiveStreamMetadata();
  if ((null == n ? void 0 : n.id) == null) return null;
  let i = u.default.getGameById(n.id);
  if ((null == i ? void 0 : i.id) == null) return null;
  let r = (0, I.getQuestByApplicationId)(E.default.quests, i.id);
  return (null == r ? void 0 : null === (e = r.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null || (null == r ? void 0 : null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null ? null : r
}
let b = () => {
  for (let n of s.default.getRunningGames().map(e => e.id)) {
    var e, t;
    if (null == n) continue;
    let i = (0, I.getPlaytimeQuestByApplicationId)(E.default.quests, n);
    if (null != i && (null === (e = i.userStatus) || void 0 === e ? void 0 : e.enrolledAt) != null && (null === (t = i.userStatus) || void 0 === t ? void 0 : t.completedAt) == null) return i
  }
};

function G(e) {
  return null != e && (0, I.hasPlaytimeTaskVariant)({
    quest: e
  }) && (0, T.isEligibleForQuestPlaytime)({
    location: m.QuestsExperimentLocations.QUESTS_MANAGER
  })
}

function w(e) {
  return d.default.countVoiceStatesForChannel(e) >= 2
}

function k(e) {
  var t, n;
  let {
    questId: i,
    streamKey: r,
    applicationId: l
  } = e, {
    channelId: u
  } = (0, a.decodeStreamKey)(r), d = w(u), _ = E.default.quests.get(i);
  if ((null == _ ? void 0 : null === (t = _.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null) return !1;
  let c = null === (n = U()) || void 0 === n ? void 0 : n.config,
    T = null != o.default.getRTCStream(r) && null != c && A.SharedQuestFields.build(c).application.id === l && d && null != _ && !(0, I.isQuestExpired)(_),
    {
      quest: f,
      activity: S
    } = B(),
    h = null == f ? void 0 : f.config,
    m = null != h && (null == f ? void 0 : f.id) === i && A.SharedQuestFields.build(h).application.id === l && d && (null == S ? void 0 : S.channelId) === u && !(0, I.isQuestExpired)(f),
    N = s.default.getRunningGames().map(e => e.id),
    p = null != _ && G(_) && N.includes(l);
  return T || m || p
}

function B(e) {
  let t = {
    quest: null,
    activity: null
  };
  if (!(0, f.getIsEligibleForActivityQuest)({
      location: m.QuestsExperimentLocations.QUESTS_MANAGER,
      autoTrackExposure: !1
    })) return t;
  for (let a of r.default.getSelfEmbeddedActivities().values()) {
    var n, i, s;
    if (null != e && a.channelId !== e) continue;
    let r = null !== (s = (0, I.getQuestByApplicationId)(E.default.quests, a.applicationId)) && void 0 !== s ? s : null;
    if (null != r && (null == r ? void 0 : null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && (null == r ? void 0 : null === (i = r.userStatus) || void 0 === i ? void 0 : i.completedAt) == null) return {
      quest: r,
      activity: a
    };
    t = {
      quest: null,
      activity: a
    }
  }
  return t
}
class V extends i.default {
  maybeFetchCurrentQuests() {
    (0, S.getIsEligibleForQuests)({
      location: m.QuestsExperimentLocations.QUESTS_MANAGER
    }) && !E.default.isFetchingCurrentQuests && (0, c.fetchCurrentQuests)()
  }
  constructor(...e) {
    super(...e), p(this, "instantiatedAt", Date.now()), p(this, "streamKeyToHeartbeatState", new Map), p(this, "optimisticProgressUpdateIntervalIds", new Map), p(this, "lastOptimisticallyUpdatedProgressMap", new Map), p(this, "questsInitialFetchTimerId", null), p(this, "questsRecurringFetchTimerId", null), p(this, "questsLastFetchAttemptedAt", 0), p(this, "lastFetchedQuestForLocaleChangeAt", 0), p(this, "initiateHeartbeat", e => {
      let {
        questId: t,
        streamKey: n,
        applicationId: i
      } = e;
      if (this.streamKeyToHeartbeatState.has(n)) {
        y.log("~ initiateHeartbeat -> Heartbeat already initiated:", n);
        return
      }
      let r = () => {
        if (k({
            questId: t,
            streamKey: n,
            applicationId: i
          })) {
          y.log("~ initiateHeartbeat -> Initiating heartbeat for Quest:", t), (0, c.sendHeartbeat)({
            questId: t,
            streamKey: n
          });
          let e = this.calculateHeartbeatDurationMs(t),
            i = window.setTimeout(r, e);
          this.streamKeyToHeartbeatState.set(n, {
            heartbeatTimeoutId: i,
            questId: t
          })
        } else this.terminateHeartbeat({
          streamKey: n,
          sendTerminalHeartbeat: !0
        })
      };
      r()
    }), p(this, "calculateHeartbeatDurationMs", e => {
      var t;
      let n = E.default.quests.get(e);
      if (null == n || null == n.config || null == n.userStatus) return C;
      let {
        streamProgressSeconds: i
      } = n.userStatus, r = Math.max(0, ((null !== (t = A.SharedQuestFields.build(n.config).streamTargetSeconds) && void 0 !== t ? t : 0) - i) * _.default.Millis.SECOND);
      return r <= C ? r + R : C
    }), p(this, "terminateHeartbeat", e => {
      let {
        streamKey: t,
        sendTerminalHeartbeat: n
      } = e;
      this.terminateOptimisticProgressUpdateInterval(t);
      let i = this.streamKeyToHeartbeatState.get(t);
      if (null != i) {
        y.log("~ terminateHeartbeat -> Terminating heartbeat:", {
          streamKey: t,
          sendTerminalHeartbeat: n
        });
        let {
          questId: e,
          heartbeatTimeoutId: r
        } = i;
        window.clearTimeout(r), this.streamKeyToHeartbeatState.delete(t), n && (0, c.sendHeartbeat)({
          questId: e,
          streamKey: t,
          terminal: !0
        })
      }
    }), p(this, "initiateOptimisticProgressUpdateInterval", e => {
      this.terminateOptimisticProgressUpdateInterval(e), this.optimisticProgressUpdateIntervalIds.set(e, window.setInterval(() => {
        var t, n, i;
        let r = U(),
          s = b(),
          {
            quest: a
          } = B(),
          o = null !== (n = null !== (t = null != r ? r : a) && void 0 !== t ? t : s) && void 0 !== n ? n : null;
        if (null == o) {
          this.terminateOptimisticProgressUpdateInterval(e);
          return
        }
        let l = A.SharedQuestFields.build(o.config),
          u = null !== (i = l.streamTargetSeconds) && void 0 !== i ? i : 0,
          d = o.userStatus,
          E = this.lastOptimisticallyUpdatedProgressMap.get(e);
        if (!k({
            questId: o.id,
            streamKey: e,
            applicationId: l.application.id
          })) {
          this.terminateOptimisticProgressUpdateInterval(e);
          return
        }
        if (null == E) this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now());
        else if (null != d) {
          let t = (Date.now() - E) / _.default.Millis.SECOND,
            n = d.streamProgressSeconds,
            i = n + t;
          if (y.log("~ initiateOptimisticProgressUpdateInterval -> Updating optimistic progress:", {
              streamKey: e,
              progressToAdd: t,
              existingProgress: n,
              newProgress: i
            }), i <= u) {
            let t = {
              ...d,
              streamProgressSeconds: i
            };
            (0, c.optimisticallyUpdateQuestProgress)(t), this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now())
          }
        }
      }, L))
    }), p(this, "terminateOptimisticProgressUpdateInterval", e => {
      y.log("~ terminateOptimisticProgressUpdateInterval -> Terminating/Resetting Interval", e), window.clearInterval(this.optimisticProgressUpdateIntervalIds.get(e)), this.optimisticProgressUpdateIntervalIds.delete(e), this.lastOptimisticallyUpdatedProgressMap.delete(e)
    }), p(this, "handleEnrollmentSuccess", e => {
      let {
        enrolledQuestUserStatus: {
          questId: t
        }
      } = e, n = o.default.getCurrentUserActiveStream(), i = U();
      if (null != n && (null == i ? void 0 : i.id) === t) {
        this.initiateHeartbeat({
          streamKey: (0, a.encodeStreamKey)(n),
          applicationId: A.SharedQuestFields.build(i.config).application.id,
          questId: i.id
        });
        return
      }
      let {
        quest: r,
        activity: l
      } = B();
      if (null != l && null != r && r.id === t) {
        this.initiateHeartbeat({
          streamKey: P(l.channelId),
          applicationId: A.SharedQuestFields.build(r.config).application.id,
          questId: r.id
        });
        return
      }
      s.default.getRunningGames().forEach(e => {
        if (null == e.id) return;
        let t = (0, I.getPlaytimeQuestByApplicationId)(E.default.quests, e.id);
        if (null != t && G(t)) {
          y.log("~ handleEnrollmentSuccess -> Quest accepted, initializing...");
          let e = P(t.id);
          this.initiateHeartbeat({
            streamKey: e,
            applicationId: A.SharedQuestFields.build(t.config).application.id,
            questId: t.id
          })
        }
      })
    }), p(this, "handleLogout", () => {
      window.clearTimeout(this.questsInitialFetchTimerId), window.clearTimeout(this.questsRecurringFetchTimerId), this.questsLastFetchAttemptedAt = 0, this.lastFetchedQuestForLocaleChangeAt = 0
    }), p(this, "handleQuestsFetchCurrentQuestsBegin", () => {
      this.questsLastFetchAttemptedAt = Date.now()
    }), p(this, "handlePostConnectionOpen", () => {
      window.clearTimeout(this.questsInitialFetchTimerId), window.clearTimeout(this.questsRecurringFetchTimerId), this.questsRecurringFetchTimerId = window.setInterval(() => {
        Date.now() - this.questsLastFetchAttemptedAt > v && (this.questsLastFetchAttemptedAt = Date.now(), this.maybeFetchCurrentQuests())
      }, D), this.questsInitialFetchTimerId = window.setTimeout(() => {
        0 === E.default.lastFetchedCurrentQuests && this.maybeFetchCurrentQuests()
      }, Math.floor(Math.random() * g))
    }), p(this, "handleSendHeartbeatSuccess", e => {
      let {
        streamKey: t,
        userStatus: n
      } = e;
      y.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded:", t), this.terminateOptimisticProgressUpdateInterval(t), null != n.completedAt ? (this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !1
      }), this.terminateOptimisticProgressUpdateInterval(t)) : this.initiateOptimisticProgressUpdateInterval(t)
    }), p(this, "handleSendHeartbeatFailure", e => {
      let {
        streamKey: t
      } = e;
      y.log("~ handleSendHeartbeatFailure -> Heartbeat failed:", t), this.terminateOptimisticProgressUpdateInterval(t)
    }), p(this, "handleQuestsFetchCurrentQuestsSuccess", e => {
      let {
        quests: t
      } = e;
      y.log("~ handleQuestsFetchCurrentQuestsSuccess -> Quests fetched:", t);
      let n = s.default.getRunningGames().map(e => e.id);
      t.forEach(e => {
        if (G(e)) {
          let t = P(e.id),
            i = n.includes(A.SharedQuestFields.build(e.config).application.id),
            r = !this.streamKeyToHeartbeatState.has(t) && i;
          this.streamKeyToHeartbeatState.has(t) && !i ? this.terminateHeartbeat({
            streamKey: t,
            sendTerminalHeartbeat: !0
          }) : r && this.initiateHeartbeat({
            streamKey: t,
            applicationId: A.SharedQuestFields.build(e.config).application.id,
            questId: e.id
          })
        }
      })
    }), p(this, "handleRunningGamesChange", e => {
      (0, T.isEligibleForQuestPlaytime)({
        location: m.QuestsExperimentLocations.QUESTS_MANAGER
      }) && this._handlePlaytimeQuestsUpdate(e), !(this.instantiatedAt + O > Date.now() || E.default.lastFetchedCurrentQuests + O > Date.now()) && this.maybeFetchCurrentQuests()
    }), p(this, "_handlePlaytimeQuestsUpdate", e => {
      let {
        removed: t,
        games: n
      } = e;
      y.log("~ handleRunningGamesChange -> Games detected:", {
        runningGames: n,
        removedGames: t
      }), n.forEach(e => {
        var t;
        if (null == e.id) return;
        let n = (0, I.getPlaytimeQuestByApplicationId)(E.default.quests, e.id);
        if (null == n || (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return;
        let i = P(n.id);
        G(n) && !this.streamKeyToHeartbeatState.has(i) && this.initiateHeartbeat({
          streamKey: i,
          applicationId: A.SharedQuestFields.build(n.config).application.id,
          questId: n.id
        })
      }), t.forEach(e => {
        var t;
        if (null == e.id) return;
        let n = (0, I.getPlaytimeQuestByApplicationId)(E.default.quests, e.id);
        if (null == n || (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return;
        let i = P(n.id);
        G(n) && this.streamKeyToHeartbeatState.has(i) && this.terminateHeartbeat({
          streamKey: i,
          sendTerminalHeartbeat: !0
        })
      })
    }), p(this, "handleVoiceStateChange", () => {
      let e = o.default.getCurrentUserActiveStream(),
        t = U();
      null != e && this._handleVoiceStateChange({
        streamKey: (0, a.encodeStreamKey)(e),
        channelId: e.channelId,
        quest: t
      });
      let {
        quest: n,
        activity: i
      } = B();
      null != i && this._handleVoiceStateChange({
        streamKey: P(i.channelId),
        channelId: i.channelId,
        quest: n
      })
    }), p(this, "_handleVoiceStateChange", e => {
      let {
        streamKey: t,
        channelId: n,
        quest: i
      } = e, r = null == i || !w(n), s = w(n) && !this.streamKeyToHeartbeatState.has(t) && null != i && !G(i);
      r ? this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !0
      }) : s && this.initiateHeartbeat({
        streamKey: t,
        applicationId: A.SharedQuestFields.build(i.config).application.id,
        questId: i.id
      })
    }), p(this, "handleEmbeddedActivityUpdate", e => {
      let {
        quest: t,
        activity: n
      } = B(e), i = P(e), r = (null == n || null == t) && this.streamKeyToHeartbeatState.has(i), s = null != n && null != t && w(e) && !this.streamKeyToHeartbeatState.has(i);
      r ? this.terminateHeartbeat({
        streamKey: i,
        sendTerminalHeartbeat: !0
      }) : s && this.initiateHeartbeat({
        streamKey: i,
        applicationId: A.SharedQuestFields.build(t.config).application.id,
        questId: t.id
      })
    }), p(this, "handleStreamCreate", e => {
      let {
        streamKey: t
      } = e, {
        channelId: n,
        ownerId: i
      } = (0, a.decodeStreamKey)(t);
      if (i !== l.default.getId()) return;
      let r = U();
      if (null == r) {
        this.terminateHeartbeat({
          streamKey: t,
          sendTerminalHeartbeat: !1
        });
        return
      }
      w(n) && !this.streamKeyToHeartbeatState.has(t) && !G(r) && this.initiateHeartbeat({
        streamKey: t,
        applicationId: A.SharedQuestFields.build(r.config).application.id,
        questId: r.id
      })
    }), p(this, "handleStreamStart", e => {
      let {
        streamType: t,
        guildId: n,
        channelId: i
      } = e, r = U(), s = (0, a.encodeStreamKey)({
        streamType: t,
        guildId: n,
        channelId: i,
        ownerId: l.default.getId()
      });
      null == r ? this.terminateHeartbeat({
        streamKey: s,
        sendTerminalHeartbeat: !0
      }) : w(i) && !this.streamKeyToHeartbeatState.has(s) && !G(r) && this.initiateHeartbeat({
        streamKey: s,
        applicationId: A.SharedQuestFields.build(r.config).application.id,
        questId: r.id
      })
    }), p(this, "handleStreamClose", e => {
      let {
        streamKey: t
      } = e;
      this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !0
      })
    }), p(this, "handleUserSettingsProtoUpdate", e => {
      let {
        partial: t,
        settings: n,
        wasSaved: i
      } = e;
      if ("localization" in n.proto && !!t && !i) !(Date.now() - this.lastFetchedQuestForLocaleChangeAt <= M) && (this.lastFetchedQuestForLocaleChangeAt = Date.now(), this.maybeFetchCurrentQuests())
    }), p(this, "actions", {
      QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
      QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: this.handleQuestsFetchCurrentQuestsSuccess,
      QUESTS_ENROLL_SUCCESS: this.handleEnrollmentSuccess,
      QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
      QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      STREAM_START: this.handleStreamStart,
      STREAM_CREATE: this.handleStreamCreate,
      STREAM_CLOSE: this.handleStreamClose,
      PASSIVE_UPDATE_V2: this.handleVoiceStateChange,
      VOICE_STATE_UPDATES: this.handleVoiceStateChange,
      EMBEDDED_ACTIVITY_UPDATE: e => {
        let {
          channelId: t
        } = e;
        return this.handleEmbeddedActivityUpdate(t)
      },
      EMBEDDED_ACTIVITY_UPDATE_V2: e => {
        let {
          location: t
        } = e;
        return this.handleEmbeddedActivityUpdate(t.channel_id)
      },
      USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
      LOGOUT: this.handleLogout
    })
  }
}
t.default = new V