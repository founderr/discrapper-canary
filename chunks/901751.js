"use strict";
n.r(t), n.d(t, {
  HeartbeatDecision: function() {
    return i
  },
  generatePsuedoStreamKey: function() {
    return b
  },
  getPlaytimeQuestForActiveGames: function() {
    return w
  }
}), n("47120");
var i, r, s = n("147913"),
  a = n("317381"),
  o = n("594190"),
  l = n("569545"),
  u = n("199902"),
  d = n("314897"),
  _ = n("77498"),
  c = n("938475"),
  E = n("70956"),
  I = n("272008"),
  T = n("569984"),
  f = n("918701"),
  S = n("242755"),
  h = n("432945"),
  A = n("977156"),
  m = n("5881"),
  N = n("566078"),
  p = n("46140"),
  O = n("70722");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let R = 12 * E.default.Millis.HOUR,
  g = 1 * E.default.Millis.MINUTE,
  L = 1 * E.default.Millis.SECOND,
  v = 5 * E.default.Millis.SECOND,
  D = 1 * E.default.Millis.SECOND,
  M = E.default.Millis.DAY,
  y = 30 * E.default.Millis.MINUTE,
  P = 5 * E.default.Millis.MINUTE,
  U = (0, m.getQuestLogger)({
    location: p.QuestsExperimentLocations.QUESTS_MANAGER
  }),
  b = e => (0, l.encodeStreamKey)({
    streamType: O.StreamTypes.CALL,
    channelId: e,
    ownerId: "1"
  });

function G() {
  let e = u.default.getStreamerActiveStreamMetadata();
  if ((null == e ? void 0 : e.id) == null) return null;
  let t = _.default.getGameById(e.id);
  if ((null == t ? void 0 : t.id) == null) return null;
  let n = (0, f.getQuestByApplicationId)(T.default.quests, t.id);
  return null != n && V(n) ? n : null
}
let w = () => {
  for (let e of o.default.getRunningGames().map(e => e.id)) {
    if (null == e) continue;
    let t = (0, f.getPlaytimeQuestByApplicationId)(T.default.quests, e);
    if (null != t && V(t)) return t
  }
};

function k(e) {
  return null != e && (0, f.hasPlaytimeTaskVariant)({
    quest: e
  }) && (0, S.isEligibleForQuestPlaytime)({
    location: p.QuestsExperimentLocations.QUESTS_MANAGER
  })
}

function B(e) {
  return c.default.countVoiceStatesForChannel(e) >= 2
}

function V(e) {
  return !(0, f.isQuestExpired)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt
}

function x(e) {
  var t;
  let {
    questId: n,
    streamKey: i,
    applicationId: r
  } = e, {
    channelId: s
  } = (0, l.decodeStreamKey)(i), a = B(s), d = T.default.quests.get(n);
  if (null == d || !V(d)) return "STOP";
  let _ = null === (t = G()) || void 0 === t ? void 0 : t.config,
    c = null != u.default.getRTCStream(i) && null != _ && N.SharedQuestFields.build(_).application.id === r && a,
    {
      quest: E,
      activity: I
    } = F(),
    f = null == E ? void 0 : E.config,
    S = null != f && (null == E ? void 0 : E.id) === n && N.SharedQuestFields.build(f).application.id === r && a && (null == I ? void 0 : I.channelId) === s,
    h = o.default.getRunningGames().map(e => e.id),
    A = k(d) && h.includes(r);
  return c || S || A ? "BEAT" : "BEAT_TERMINAL"
}

function F(e) {
  let t = {
    quest: null,
    activity: null
  };
  if (!(0, h.getIsEligibleForActivityQuest)({
      location: p.QuestsExperimentLocations.QUESTS_MANAGER,
      autoTrackExposure: !1
    })) return t;
  for (let i of a.default.getSelfEmbeddedActivities().values()) {
    var n;
    if (null != e && i.channelId !== e) continue;
    let r = null !== (n = (0, f.getQuestByApplicationId)(T.default.quests, i.applicationId)) && void 0 !== n ? n : null;
    if (null != r && V(r)) return {
      quest: r,
      activity: i
    };
    t = {
      quest: null,
      activity: i
    }
  }
  return t
}(r = i || (i = {})).BEAT = "BEAT", r.STOP = "STOP", r.BEAT_TERMINAL = "BEAT_TERMINAL";
class H extends s.default {
  maybeFetchCurrentQuests() {
    (0, A.getIsEligibleForQuests)({
      location: p.QuestsExperimentLocations.QUESTS_MANAGER
    }) && !T.default.isFetchingCurrentQuests && (0, I.fetchCurrentQuests)()
  }
  constructor(...e) {
    super(...e), C(this, "instantiatedAt", Date.now()), C(this, "streamKeyToHeartbeatState", new Map), C(this, "optimisticProgressUpdateIntervalIds", new Map), C(this, "lastOptimisticallyUpdatedProgressMap", new Map), C(this, "questsInitialFetchTimerId", null), C(this, "questsRecurringFetchTimerId", null), C(this, "questsLastFetchAttemptedAt", 0), C(this, "lastFetchedQuestForLocaleChangeAt", 0), C(this, "initiateHeartbeat", e => {
      let {
        questId: t,
        streamKey: n,
        applicationId: i
      } = e;
      if (this.streamKeyToHeartbeatState.has(n)) {
        U.log("~ initiateHeartbeat -> Heartbeat already initiated:", n);
        return
      }
      let r = () => {
        let e = x({
          questId: t,
          streamKey: n,
          applicationId: i
        });
        if (U.log("~ initiateHeartbeat -> heartbeat decision: ", e), "BEAT" === e) {
          (0, I.sendHeartbeat)({
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
          sendTerminalHeartbeat: "BEAT_TERMINAL" === e
        })
      };
      r()
    }), C(this, "calculateHeartbeatDurationMs", e => {
      var t;
      let n = T.default.quests.get(e);
      if (null == n || null == n.config || null == n.userStatus) return g;
      let {
        streamProgressSeconds: i
      } = n.userStatus, r = Math.max(0, ((null !== (t = N.SharedQuestFields.build(n.config).streamTargetSeconds) && void 0 !== t ? t : 0) - i) * E.default.Millis.SECOND);
      return r <= g ? r + L : g
    }), C(this, "terminateHeartbeat", e => {
      let {
        streamKey: t,
        sendTerminalHeartbeat: n
      } = e;
      this.terminateOptimisticProgressUpdateInterval(t);
      let i = this.streamKeyToHeartbeatState.get(t);
      if (null != i) {
        U.log("~ terminateHeartbeat -> Terminating heartbeat:", {
          streamKey: t,
          sendTerminalHeartbeat: n
        });
        let {
          questId: e,
          heartbeatTimeoutId: r
        } = i;
        window.clearTimeout(r), this.streamKeyToHeartbeatState.delete(t), n && (0, I.sendHeartbeat)({
          questId: e,
          streamKey: t,
          terminal: !0
        })
      }
    }), C(this, "initiateOptimisticProgressUpdateInterval", e => {
      this.terminateOptimisticProgressUpdateInterval(e), this.optimisticProgressUpdateIntervalIds.set(e, window.setInterval(() => {
        var t, n, i;
        let r = G(),
          s = w(),
          {
            quest: a
          } = F(),
          o = null !== (n = null !== (t = null != r ? r : a) && void 0 !== t ? t : s) && void 0 !== n ? n : null;
        if (null == o) {
          this.terminateOptimisticProgressUpdateInterval(e);
          return
        }
        let l = N.SharedQuestFields.build(o.config),
          u = null !== (i = l.streamTargetSeconds) && void 0 !== i ? i : 0,
          d = o.userStatus,
          _ = this.lastOptimisticallyUpdatedProgressMap.get(e);
        if ("BEAT" !== x({
            questId: o.id,
            streamKey: e,
            applicationId: l.application.id
          })) {
          this.terminateOptimisticProgressUpdateInterval(e);
          return
        }
        if (null == _) this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now());
        else if (null != d) {
          let t = (Date.now() - _) / E.default.Millis.SECOND,
            n = d.streamProgressSeconds,
            i = n + t;
          if (U.log("~ initiateOptimisticProgressUpdateInterval -> Updating optimistic progress:", {
              streamKey: e,
              progressToAdd: t,
              existingProgress: n,
              newProgress: i
            }), i <= u) {
            let t = {
              ...d,
              streamProgressSeconds: i
            };
            (0, I.optimisticallyUpdateQuestProgress)(t), this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now())
          }
        }
      }, D))
    }), C(this, "terminateOptimisticProgressUpdateInterval", e => {
      U.log("~ terminateOptimisticProgressUpdateInterval -> Terminating/Resetting Interval", e), window.clearInterval(this.optimisticProgressUpdateIntervalIds.get(e)), this.optimisticProgressUpdateIntervalIds.delete(e), this.lastOptimisticallyUpdatedProgressMap.delete(e)
    }), C(this, "handleEnrollmentSuccess", e => {
      let {
        enrolledQuestUserStatus: {
          questId: t
        }
      } = e, n = u.default.getCurrentUserActiveStream(), i = G();
      if (null != n && null != i && i.id === t && V(i)) {
        this.initiateHeartbeat({
          streamKey: (0, l.encodeStreamKey)(n),
          applicationId: N.SharedQuestFields.build(i.config).application.id,
          questId: i.id
        });
        return
      }
      let {
        quest: r,
        activity: s
      } = F();
      if (null != s && null != r && V(r) && r.id === t) {
        this.initiateHeartbeat({
          streamKey: b(s.channelId),
          applicationId: N.SharedQuestFields.build(r.config).application.id,
          questId: r.id
        });
        return
      }
      o.default.getRunningGames().forEach(e => {
        if (null == e.id) return;
        let t = (0, f.getPlaytimeQuestByApplicationId)(T.default.quests, e.id);
        if (null != t && V(t) && k(t)) {
          U.log("~ handleEnrollmentSuccess -> Quest accepted, initializing...");
          let e = b(t.id);
          this.initiateHeartbeat({
            streamKey: e,
            applicationId: N.SharedQuestFields.build(t.config).application.id,
            questId: t.id
          })
        }
      })
    }), C(this, "handleLogout", () => {
      window.clearTimeout(this.questsInitialFetchTimerId), window.clearTimeout(this.questsRecurringFetchTimerId), this.questsLastFetchAttemptedAt = 0, this.lastFetchedQuestForLocaleChangeAt = 0
    }), C(this, "handleQuestsFetchCurrentQuestsBegin", () => {
      this.questsLastFetchAttemptedAt = Date.now()
    }), C(this, "handlePostConnectionOpen", () => {
      window.clearTimeout(this.questsInitialFetchTimerId), window.clearTimeout(this.questsRecurringFetchTimerId), this.questsRecurringFetchTimerId = window.setInterval(() => {
        Date.now() - this.questsLastFetchAttemptedAt > M && (this.questsLastFetchAttemptedAt = Date.now(), this.maybeFetchCurrentQuests())
      }, y), this.questsInitialFetchTimerId = window.setTimeout(() => {
        0 === T.default.lastFetchedCurrentQuests && this.maybeFetchCurrentQuests()
      }, Math.floor(Math.random() * v))
    }), C(this, "handleSendHeartbeatSuccess", e => {
      let {
        streamKey: t,
        userStatus: n
      } = e;
      U.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded:", t), this.terminateOptimisticProgressUpdateInterval(t), null != n.completedAt ? (this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !1
      }), this.terminateOptimisticProgressUpdateInterval(t)) : this.initiateOptimisticProgressUpdateInterval(t)
    }), C(this, "handleSendHeartbeatFailure", e => {
      let {
        streamKey: t
      } = e;
      U.log("~ handleSendHeartbeatFailure -> Heartbeat failed:", t), this.terminateOptimisticProgressUpdateInterval(t)
    }), C(this, "handleQuestsFetchCurrentQuestsSuccess", e => {
      let {
        quests: t
      } = e;
      U.log("~ handleQuestsFetchCurrentQuestsSuccess -> Quests fetched:", t);
      let n = o.default.getRunningGames().map(e => e.id);
      t.forEach(e => {
        if (V(e) && k(e)) {
          let t = b(e.id),
            i = n.includes(N.SharedQuestFields.build(e.config).application.id),
            r = !this.streamKeyToHeartbeatState.has(t) && i;
          this.streamKeyToHeartbeatState.has(t) && !i ? this.terminateHeartbeat({
            streamKey: t,
            sendTerminalHeartbeat: !0
          }) : r && this.initiateHeartbeat({
            streamKey: t,
            applicationId: N.SharedQuestFields.build(e.config).application.id,
            questId: e.id
          })
        }
      })
    }), C(this, "handleRunningGamesChange", e => {
      (0, S.isEligibleForQuestPlaytime)({
        location: p.QuestsExperimentLocations.QUESTS_MANAGER
      }) && this._handlePlaytimeQuestsUpdate(e), !(this.instantiatedAt + R > Date.now() || T.default.lastFetchedCurrentQuests + R > Date.now()) && this.maybeFetchCurrentQuests()
    }), C(this, "_handlePlaytimeQuestsUpdate", e => {
      let {
        removed: t,
        games: n
      } = e;
      U.log("~ handleRunningGamesChange -> Games detected:", {
        runningGames: n,
        removedGames: t
      }), n.forEach(e => {
        if (null == e.id) return;
        let t = (0, f.getPlaytimeQuestByApplicationId)(T.default.quests, e.id);
        if (null == t || !V(t)) return;
        let n = b(t.id);
        k(t) && !this.streamKeyToHeartbeatState.has(n) && this.initiateHeartbeat({
          streamKey: n,
          applicationId: N.SharedQuestFields.build(t.config).application.id,
          questId: t.id
        })
      }), t.forEach(e => {
        if (null == e.id) return;
        let t = (0, f.getPlaytimeQuestByApplicationId)(T.default.quests, e.id);
        if (null == t || !V(t)) return;
        let n = b(t.id);
        k(t) && this.streamKeyToHeartbeatState.has(n) && this.terminateHeartbeat({
          streamKey: n,
          sendTerminalHeartbeat: !0
        })
      })
    }), C(this, "handleVoiceStateChange", () => {
      let e = u.default.getCurrentUserActiveStream(),
        t = G();
      null != e && this._handleVoiceStateChange({
        streamKey: (0, l.encodeStreamKey)(e),
        channelId: e.channelId,
        quest: t
      });
      let {
        quest: n,
        activity: i
      } = F();
      null != i && this._handleVoiceStateChange({
        streamKey: b(i.channelId),
        channelId: i.channelId,
        quest: n
      })
    }), C(this, "_handleVoiceStateChange", e => {
      let {
        streamKey: t,
        channelId: n,
        quest: i
      } = e, r = null == i || !B(n), s = B(n) && !this.streamKeyToHeartbeatState.has(t) && null != i && V(i) && !k(i);
      r ? this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !0
      }) : s && this.initiateHeartbeat({
        streamKey: t,
        applicationId: N.SharedQuestFields.build(i.config).application.id,
        questId: i.id
      })
    }), C(this, "handleEmbeddedActivityUpdate", e => {
      let {
        quest: t,
        activity: n
      } = F(e), i = b(e), r = (null == n || null == t) && this.streamKeyToHeartbeatState.has(i), s = null != n && null != t && V(t) && B(e) && !this.streamKeyToHeartbeatState.has(i);
      r ? this.terminateHeartbeat({
        streamKey: i,
        sendTerminalHeartbeat: !0
      }) : s && this.initiateHeartbeat({
        streamKey: i,
        applicationId: N.SharedQuestFields.build(t.config).application.id,
        questId: t.id
      })
    }), C(this, "handleStreamCreate", e => {
      let {
        streamKey: t
      } = e, {
        channelId: n,
        ownerId: i
      } = (0, l.decodeStreamKey)(t);
      if (i !== d.default.getId()) return;
      let r = G();
      if (null == r) {
        this.terminateHeartbeat({
          streamKey: t,
          sendTerminalHeartbeat: !1
        });
        return
      }
      B(n) && V(r) && !k(r) && !this.streamKeyToHeartbeatState.has(t) && this.initiateHeartbeat({
        streamKey: t,
        applicationId: N.SharedQuestFields.build(r.config).application.id,
        questId: r.id
      })
    }), C(this, "handleStreamStart", e => {
      let {
        streamType: t,
        guildId: n,
        channelId: i
      } = e, r = G(), s = (0, l.encodeStreamKey)({
        streamType: t,
        guildId: n,
        channelId: i,
        ownerId: d.default.getId()
      });
      null == r ? this.terminateHeartbeat({
        streamKey: s,
        sendTerminalHeartbeat: !0
      }) : B(i) && V(r) && !k(r) && !this.streamKeyToHeartbeatState.has(s) && this.initiateHeartbeat({
        streamKey: s,
        applicationId: N.SharedQuestFields.build(r.config).application.id,
        questId: r.id
      })
    }), C(this, "handleStreamClose", e => {
      let {
        streamKey: t
      } = e;
      this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !0
      })
    }), C(this, "handleUserSettingsProtoUpdate", e => {
      let {
        partial: t,
        settings: n,
        wasSaved: i
      } = e;
      if ("localization" in n.proto && !!t && !i) !(Date.now() - this.lastFetchedQuestForLocaleChangeAt <= P) && (this.lastFetchedQuestForLocaleChangeAt = Date.now(), this.maybeFetchCurrentQuests())
    }), C(this, "actions", {
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
t.default = new H