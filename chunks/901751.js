"use strict";
n.r(t), n.d(t, {
  HeartbeatDecision: function() {
    return i
  },
  generatePsuedoStreamKey: function() {
    return b
  },
  getPlayOnDesktopQuestForActiveGames: function() {
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
  return null != n && B(n) ? n : null
}
let w = () => {
  for (let e of o.default.getRunningGames().map(e => e.id)) {
    if (null == e) continue;
    let t = (0, f.getPlayOnDesktopQuestByApplicationId)(T.default.quests, e);
    if (null != t && B(t)) return t
  }
};

function k(e) {
  return c.default.countVoiceStatesForChannel(e) >= 2
}

function B(e) {
  return !(0, f.isQuestExpired)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt
}

function V(e) {
  var t;
  let {
    questId: n,
    streamKey: i,
    applicationId: r
  } = e, {
    channelId: s
  } = (0, l.decodeStreamKey)(i), a = k(s), d = T.default.quests.get(n);
  if (null == d || !B(d)) return "STOP";
  let _ = null === (t = G()) || void 0 === t ? void 0 : t.config,
    c = null != u.default.getRTCStream(i) && null != _ && N.SharedQuestFields.build(_).application.id === r && a,
    {
      quest: E,
      activity: I
    } = x(),
    S = null == E ? void 0 : E.config,
    h = null != S && (null == E ? void 0 : E.id) === n && N.SharedQuestFields.build(S).application.id === r && a && (null == I ? void 0 : I.channelId) === s,
    A = o.default.getRunningGames().map(e => e.id),
    m = (0, f.shouldUsePlayOnDesktopTask)({
      quest: d,
      location: p.QuestsExperimentLocations.QUESTS_MANAGER
    }) && A.includes(r);
  return c || h || m ? "BEAT" : "BEAT_TERMINAL"
}

function x(e) {
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
    if (null != r && B(r)) return {
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
class F extends s.default {
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
        let e = V({
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
      let t = T.default.quests.get(e);
      if (null == t || null == t.config || null == t.userStatus) return g;
      let {
        progressSeconds: n,
        targetSeconds: i
      } = (0, f.getQuestTaskDetails)({
        quest: t,
        location: p.QuestsExperimentLocations.QUESTS_MANAGER
      }), r = Math.max(0, (i - n) * E.default.Millis.SECOND);
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
        var t, n;
        let i = G(),
          r = w(),
          {
            quest: s
          } = x(),
          a = null !== (n = null !== (t = null != i ? i : s) && void 0 !== t ? t : r) && void 0 !== n ? n : null;
        if (null == a) {
          this.terminateOptimisticProgressUpdateInterval(e);
          return
        }
        let o = N.SharedQuestFields.build(a.config),
          l = a.userStatus,
          u = this.lastOptimisticallyUpdatedProgressMap.get(e);
        if ("BEAT" !== V({
            questId: a.id,
            streamKey: e,
            applicationId: o.application.id
          })) {
          this.terminateOptimisticProgressUpdateInterval(e);
          return
        }
        if (null == u) this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now());
        else if (null != l) {
          let {
            progressSeconds: t,
            targetSeconds: n,
            taskType: i
          } = (0, f.getQuestTaskDetails)({
            quest: a,
            location: p.QuestsExperimentLocations.QUESTS_MANAGER
          }), r = (Date.now() - u) / E.default.Millis.SECOND, s = t + r;
          if (U.log("~ initiateOptimisticProgressUpdateInterval -> Updating optimistic progress:", {
              streamKey: e,
              progressToAdd: r,
              existingProgress: t,
              newProgress: s
            }), s <= n) {
            let t = {
              ...l,
              streamProgressSeconds: s
            };
            i && (t.progress[i] = {
              ...t.progress[i],
              eventName: i,
              value: s
            }), (0, I.optimisticallyUpdateQuestProgress)(t), this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now())
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
      if (null != n && null != i && i.id === t && B(i)) {
        U.log("handleEnrollmentSuccess - initiating heartbeat for stream"), this.initiateHeartbeat({
          streamKey: (0, l.encodeStreamKey)(n),
          applicationId: N.SharedQuestFields.build(i.config).application.id,
          questId: i.id
        });
        return
      }
      let {
        quest: r,
        activity: s
      } = x();
      if (null != s && null != r && B(r) && r.id === t) {
        U.log("handleEnrollmentSuccess - initiating heartbeat for activity"), this.initiateHeartbeat({
          streamKey: b(s.channelId),
          applicationId: N.SharedQuestFields.build(r.config).application.id,
          questId: r.id
        });
        return
      }
      o.default.getRunningGames().forEach(e => {
        if (null == e.id) return;
        let t = (0, f.getPlayOnDesktopQuestByApplicationId)(T.default.quests, e.id);
        if (null != t && B(t) && (0, f.shouldUsePlayOnDesktopTask)({
            quest: t,
            location: p.QuestsExperimentLocations.QUESTS_MANAGER
          })) {
          U.log("handleEnrollmentSuccess - initiating heartbeat for playtime task");
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
        if (B(e) && (0, f.shouldUsePlayOnDesktopTask)({
            quest: e,
            location: p.QuestsExperimentLocations.QUESTS_MANAGER
          })) {
          let t = b(e.id),
            i = n.includes(N.SharedQuestFields.build(e.config).application.id),
            r = !this.streamKeyToHeartbeatState.has(t) && i;
          this.streamKeyToHeartbeatState.has(t) && !i ? this.terminateHeartbeat({
            streamKey: t,
            sendTerminalHeartbeat: !0
          }) : r && (U.log("handleQuestsFetchCurrentQuestsSuccess - initiating heartbeat for playtime task"), this.initiateHeartbeat({
            streamKey: t,
            applicationId: N.SharedQuestFields.build(e.config).application.id,
            questId: e.id
          }))
        }
      })
    }), C(this, "handleRunningGamesChange", e => {
      (0, S.isEligibleForQuestPlaytime)({
        location: p.QuestsExperimentLocations.QUESTS_MANAGER
      }) && this._handlePlayOnDesktopQuestsUpdate(e), !(this.instantiatedAt + R > Date.now() || T.default.lastFetchedCurrentQuests + R > Date.now()) && this.maybeFetchCurrentQuests()
    }), C(this, "_handlePlayOnDesktopQuestsUpdate", e => {
      let {
        removed: t,
        games: n
      } = e;
      U.log("~ handleRunningGamesChange -> Games detected:", {
        runningGames: n,
        removedGames: t
      }), n.forEach(e => {
        if (null == e.id) return;
        let t = (0, f.getPlayOnDesktopQuestByApplicationId)(T.default.quests, e.id);
        if (null == t || !B(t)) return;
        let n = b(t.id);
        (0, f.shouldUsePlayOnDesktopTask)({
          quest: t,
          location: p.QuestsExperimentLocations.QUESTS_MANAGER
        }) && !this.streamKeyToHeartbeatState.has(n) && (U.log("handleRunningGamesChange - initiating heartbeat for playtime task"), this.initiateHeartbeat({
          streamKey: n,
          applicationId: N.SharedQuestFields.build(t.config).application.id,
          questId: t.id
        }))
      }), t.forEach(e => {
        if (null == e.id) return;
        let t = (0, f.getPlayOnDesktopQuestByApplicationId)(T.default.quests, e.id);
        if (null == t || !B(t)) return;
        let n = b(t.id);
        (0, f.shouldUsePlayOnDesktopTask)({
          quest: t,
          location: p.QuestsExperimentLocations.QUESTS_MANAGER
        }) && this.streamKeyToHeartbeatState.has(n) && this.terminateHeartbeat({
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
      } = x();
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
      } = e, r = null == i || !k(n), s = k(n) && !this.streamKeyToHeartbeatState.has(t) && null != i && B(i) && !(0, f.shouldUsePlayOnDesktopTask)({
        quest: i,
        location: p.QuestsExperimentLocations.QUESTS_MANAGER
      });
      r ? this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !0
      }) : s && (U.log("handleVoiceStateChange - initiating heartbeat for stream task"), this.initiateHeartbeat({
        streamKey: t,
        applicationId: N.SharedQuestFields.build(i.config).application.id,
        questId: i.id
      }))
    }), C(this, "handleEmbeddedActivityUpdate", e => {
      let {
        quest: t,
        activity: n
      } = x(e), i = b(e), r = (null == n || null == t) && this.streamKeyToHeartbeatState.has(i), s = null != n && null != t && B(t) && k(e) && !this.streamKeyToHeartbeatState.has(i);
      r ? this.terminateHeartbeat({
        streamKey: i,
        sendTerminalHeartbeat: !0
      }) : s && (U.log("handleRunningGamesChange - initiating heartbeat for activity task"), this.initiateHeartbeat({
        streamKey: i,
        applicationId: N.SharedQuestFields.build(t.config).application.id,
        questId: t.id
      }))
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
      k(n) && B(r) && !(0, f.shouldUsePlayOnDesktopTask)({
        quest: r,
        location: p.QuestsExperimentLocations.QUESTS_MANAGER
      }) && !this.streamKeyToHeartbeatState.has(t) && (U.log("handleStreamCreate - initiating heartbeat for stream task"), this.initiateHeartbeat({
        streamKey: t,
        applicationId: N.SharedQuestFields.build(r.config).application.id,
        questId: r.id
      }))
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
      }) : k(i) && B(r) && !(0, f.shouldUsePlayOnDesktopTask)({
        quest: r,
        location: p.QuestsExperimentLocations.QUESTS_MANAGER
      }) && !this.streamKeyToHeartbeatState.has(s) && (U.log("handleStreamStart - initiating heartbeat for stream task"), this.initiateHeartbeat({
        streamKey: s,
        applicationId: N.SharedQuestFields.build(r.config).application.id,
        questId: r.id
      }))
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
t.default = new F