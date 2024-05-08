"use strict";
n.r(t), n.d(t, {
  generatePsuedoStreamKey: function() {
    return L
  }
}), n("47120");
var i = n("147913"),
  r = n("317381"),
  a = n("569545"),
  s = n("199902"),
  o = n("314897"),
  l = n("77498"),
  u = n("938475"),
  d = n("70956"),
  _ = n("272008"),
  c = n("569984"),
  E = n("918701"),
  I = n("242755"),
  T = n("432945"),
  f = n("977156"),
  S = n("46140"),
  h = n("70722");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let m = 12 * d.default.Millis.HOUR,
  N = 1 * d.default.Millis.MINUTE,
  p = 1 * d.default.Millis.SECOND,
  O = 5 * d.default.Millis.SECOND,
  R = 1 * d.default.Millis.SECOND,
  C = d.default.Millis.DAY,
  g = 30 * d.default.Millis.MINUTE,
  L = e => (0, a.encodeStreamKey)({
    streamType: h.StreamTypes.CALL,
    channelId: e,
    ownerId: "1"
  });

function v() {
  var e, t;
  let n = s.default.getStreamerActiveStreamMetadata();
  if ((null == n ? void 0 : n.id) == null) return null;
  let i = l.default.getGameById(n.id);
  if ((null == i ? void 0 : i.id) == null) return null;
  let r = (0, E.getQuestByApplicationId)(c.default.quests, i.id);
  return (null == r ? void 0 : null === (e = r.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null || (null == r ? void 0 : null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null ? null : r
}

function D(e) {
  return u.default.countVoiceStatesForChannel(e) >= 2
}

function M(e) {
  var t;
  let {
    questId: n,
    streamKey: i,
    applicationId: r
  } = e, {
    channelId: o
  } = (0, a.decodeStreamKey)(i), u = D(o), d = c.default.quests.get(n), _ = null != s.default.getRTCStream(i) && (null === (t = v()) || void 0 === t ? void 0 : t.config.applicationId) === r && u && null != d && !(0, E.isQuestExpired)(d), {
    quest: T,
    activity: f
  } = y(), h = (null == T ? void 0 : T.id) === n && (null == T ? void 0 : T.config.applicationId) === r && u && (null == f ? void 0 : f.channelId) === o && !(0, E.isQuestExpired)(T), A = (0, I.isEligibleForQuestPlaytime)({
    location: S.QuestsExperimentLocations.QUESTS_MANAGER,
    autoTrackExposure: !1
  }), m = l.default.getGameById(r), N = null != d && A && (0, E.hasPlaytimeTaskVariant)({
    quest: d
  }) && m.id === r;
  return _ || h || N
}

function y(e) {
  let t = {
    quest: null,
    activity: null
  };
  if (!(0, T.getIsEligibleForActivityQuest)({
      location: S.QuestsExperimentLocations.QUESTS_MANAGER,
      autoTrackExposure: !1
    })) return t;
  for (let s of r.default.getSelfEmbeddedActivities().values()) {
    var n, i, a;
    if (null != e && s.channelId !== e) continue;
    let r = null !== (a = (0, E.getQuestByApplicationId)(c.default.quests, s.applicationId)) && void 0 !== a ? a : null;
    if (null != r && (null == r ? void 0 : null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && (null == r ? void 0 : null === (i = r.userStatus) || void 0 === i ? void 0 : i.completedAt) == null) return {
      quest: r,
      activity: s
    };
    t = {
      quest: null,
      activity: s
    }
  }
  return t
}
class P extends i.default {
  maybeFetchCurrentQuests() {
    (0, f.getIsEligibleForQuests)({
      location: S.QuestsExperimentLocations.QUESTS_MANAGER
    }) && !c.default.isFetchingCurrentQuests && (0, _.fetchCurrentQuests)()
  }
  constructor(...e) {
    super(...e), A(this, "instantiatedAt", Date.now()), A(this, "streamKeyToHeartbeatState", new Map), A(this, "optimisticProgressUpdateIntervalIds", new Map), A(this, "lastOptimisticallyUpdatedProgressMap", new Map), A(this, "questsInitialFetchTimerId", null), A(this, "questsRecurringFetchTimerId", null), A(this, "questsLastFetchAttemptedAt", 0), A(this, "initiateHeartbeat", e => {
      let {
        questId: t,
        streamKey: n,
        applicationId: i
      } = e;
      if (this.streamKeyToHeartbeatState.has(n)) return;
      let r = () => {
        if (M({
            questId: t,
            streamKey: n,
            applicationId: i
          })) {
          (0, _.sendHeartbeat)({
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
    }), A(this, "calculateHeartbeatDurationMs", e => {
      let t = c.default.quests.get(e);
      if (null == t || null == t.config || null == t.userStatus) return N;
      let {
        streamProgressSeconds: n
      } = t.userStatus, i = (60 * t.config.streamDurationRequirementMinutes - n) * d.default.Millis.SECOND;
      return i <= N ? i + p : N
    }), A(this, "terminateHeartbeat", e => {
      let {
        streamKey: t,
        sendTerminalHeartbeat: n
      } = e;
      this.terminateOptimisticProgressUpdateInterval(t);
      let i = this.streamKeyToHeartbeatState.get(t);
      if (null != i) {
        let {
          questId: e,
          heartbeatTimeoutId: r
        } = i;
        window.clearTimeout(r), this.streamKeyToHeartbeatState.delete(t), n && (0, _.sendHeartbeat)({
          questId: e,
          streamKey: t,
          terminal: !0
        })
      }
    }), A(this, "initiateOptimisticProgressUpdateInterval", e => {
      this.terminateOptimisticProgressUpdateInterval(e), this.optimisticProgressUpdateIntervalIds.set(e, window.setInterval(() => {
        var t;
        let n = v(),
          {
            quest: i
          } = y(),
          r = null !== (t = null != n ? n : i) && void 0 !== t ? t : null;
        if (null == r) {
          this.terminateOptimisticProgressUpdateInterval(e);
          return
        }
        let a = r.userStatus,
          s = r.config.streamDurationRequirementMinutes * d.default.Seconds.MINUTE,
          o = this.lastOptimisticallyUpdatedProgressMap.get(e);
        if (!M({
            questId: r.id,
            streamKey: e,
            applicationId: r.config.applicationId
          })) {
          this.terminateOptimisticProgressUpdateInterval(e);
          return
        }
        if (null == o) this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now());
        else if (null != a) {
          let t = (Date.now() - o) / d.default.Millis.SECOND,
            n = a.streamProgressSeconds + t;
          if (n <= s) {
            let t = {
              ...a,
              streamProgressSeconds: n
            };
            (0, _.optimisticallyUpdateQuestProgress)(t), this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now())
          }
        }
      }, R))
    }), A(this, "terminateOptimisticProgressUpdateInterval", e => {
      window.clearInterval(this.optimisticProgressUpdateIntervalIds.get(e)), this.optimisticProgressUpdateIntervalIds.delete(e), this.lastOptimisticallyUpdatedProgressMap.delete(e)
    }), A(this, "handleEnrollmentSuccess", e => {
      let {
        enrolledQuestUserStatus: {
          questId: t
        }
      } = e, n = s.default.getCurrentUserActiveStream(), i = v();
      if (null != n && (null == i ? void 0 : i.id) === t) {
        this.initiateHeartbeat({
          streamKey: (0, a.encodeStreamKey)(n),
          applicationId: i.config.applicationId,
          questId: i.id
        });
        return
      }
      let {
        quest: r,
        activity: o
      } = y();
      if (null != o && null != r && r.id === t) {
        this.initiateHeartbeat({
          streamKey: L(o.channelId),
          applicationId: r.config.applicationId,
          questId: r.id
        });
        return
      }
    }), A(this, "handleLogout", () => {
      window.clearTimeout(this.questsInitialFetchTimerId), window.clearTimeout(this.questsRecurringFetchTimerId), this.questsLastFetchAttemptedAt = 0
    }), A(this, "handleQuestsFetchCurrentQuestsBegin", () => {
      this.questsLastFetchAttemptedAt = Date.now()
    }), A(this, "handlePostConnectionOpen", () => {
      window.clearTimeout(this.questsInitialFetchTimerId), window.clearTimeout(this.questsRecurringFetchTimerId), this.questsRecurringFetchTimerId = window.setInterval(() => {
        Date.now() - this.questsLastFetchAttemptedAt > C && (this.questsLastFetchAttemptedAt = Date.now(), this.maybeFetchCurrentQuests())
      }, g), this.questsInitialFetchTimerId = window.setTimeout(() => {
        0 === c.default.lastFetchedCurrentQuests && this.maybeFetchCurrentQuests()
      }, Math.floor(Math.random() * O))
    }), A(this, "handleSendHeartbeatSuccess", e => {
      let {
        streamKey: t,
        userStatus: n
      } = e;
      this.terminateOptimisticProgressUpdateInterval(t), null != n.completedAt ? (this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !1
      }), this.terminateOptimisticProgressUpdateInterval(t)) : this.initiateOptimisticProgressUpdateInterval(t)
    }), A(this, "handleSendHeartbeatFailure", e => {
      let {
        streamKey: t
      } = e;
      this.terminateOptimisticProgressUpdateInterval(t)
    }), A(this, "handleRunningGamesChange", e => {
      let {
        added: t,
        removed: n
      } = e;
      (0, I.isEligibleForQuestPlaytime)({
        location: S.QuestsExperimentLocations.QUESTS_MANAGER,
        autoTrackExposure: !1
      }) && (t.forEach(e => {
        if (null == e.id) return;
        let t = (0, E.getQuestByApplicationId)(c.default.quests, e.id);
        if (null != t && (0, E.hasPlaytimeTaskVariant)({
            quest: t
          })) {
          let e = L(t.id);
          this.initiateHeartbeat({
            streamKey: e,
            applicationId: t.config.applicationId,
            questId: t.id
          })
        }
      }), n.forEach(e => {
        if (null == e.id) return;
        let t = (0, E.getQuestByApplicationId)(c.default.quests, e.id);
        if (null != t && (0, E.hasPlaytimeTaskVariant)({
            quest: t
          })) {
          let e = L(t.id);
          this.terminateHeartbeat({
            streamKey: e,
            sendTerminalHeartbeat: !0
          })
        }
      })), !(this.instantiatedAt + m > Date.now() || c.default.lastFetchedCurrentQuests + m > Date.now()) && this.maybeFetchCurrentQuests()
    }), A(this, "handleVoiceStateChange", () => {
      let e = s.default.getCurrentUserActiveStream(),
        t = v();
      null != e && this._handleVoiceStateChange({
        streamKey: (0, a.encodeStreamKey)(e),
        channelId: e.channelId,
        quest: t
      });
      let {
        quest: n,
        activity: i
      } = y();
      null != i && this._handleVoiceStateChange({
        streamKey: L(i.channelId),
        channelId: i.channelId,
        quest: n
      })
    }), A(this, "_handleVoiceStateChange", e => {
      let {
        streamKey: t,
        channelId: n,
        quest: i
      } = e, r = null == i || !D(n), a = D(n) && !this.streamKeyToHeartbeatState.has(t) && null != i;
      r ? this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !0
      }) : a && this.initiateHeartbeat({
        streamKey: t,
        applicationId: i.config.applicationId,
        questId: i.id
      })
    }), A(this, "handleEmbeddedActivityUpdate", e => {
      let {
        quest: t,
        activity: n
      } = y(e), i = L(e), r = (null == n || null == t) && this.streamKeyToHeartbeatState.has(i), a = null != n && null != t && D(e) && !this.streamKeyToHeartbeatState.has(i);
      r ? this.terminateHeartbeat({
        streamKey: i,
        sendTerminalHeartbeat: !0
      }) : a && this.initiateHeartbeat({
        streamKey: i,
        applicationId: t.config.applicationId,
        questId: t.id
      })
    }), A(this, "handleStreamCreate", e => {
      let {
        streamKey: t
      } = e, {
        channelId: n,
        ownerId: i
      } = (0, a.decodeStreamKey)(t);
      if (i !== o.default.getId()) return;
      let r = v();
      if (null == r) {
        this.terminateHeartbeat({
          streamKey: t,
          sendTerminalHeartbeat: !1
        });
        return
      }
      D(n) && !this.streamKeyToHeartbeatState.has(t) && this.initiateHeartbeat({
        streamKey: t,
        applicationId: r.config.applicationId,
        questId: r.id
      })
    }), A(this, "handleStreamStart", e => {
      let {
        streamType: t,
        guildId: n,
        channelId: i
      } = e, r = v(), s = (0, a.encodeStreamKey)({
        streamType: t,
        guildId: n,
        channelId: i,
        ownerId: o.default.getId()
      });
      null == r ? this.terminateHeartbeat({
        streamKey: s,
        sendTerminalHeartbeat: !0
      }) : D(i) && !this.streamKeyToHeartbeatState.has(s) && this.initiateHeartbeat({
        streamKey: s,
        applicationId: r.config.applicationId,
        questId: r.id
      })
    }), A(this, "handleStreamClose", e => {
      let {
        streamKey: t
      } = e;
      this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !0
      })
    }), A(this, "actions", {
      QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
      QUESTS_ENROLL_SUCCESS: this.handleEnrollmentSuccess,
      QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
      QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      STREAM_START: this.handleStreamStart,
      STREAM_CREATE: this.handleStreamCreate,
      STREAM_CLOSE: this.handleStreamClose,
      PASSIVE_UPDATE_V1: this.handleVoiceStateChange,
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
      LOGOUT: this.handleLogout
    })
  }
}
t.default = new P