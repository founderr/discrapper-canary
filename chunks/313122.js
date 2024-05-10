"use strict";
n.r(t), n.d(t, {
  generatePsuedoStreamKey: function() {
    return v
  }
}), n("47120");
var i = n("147913"),
  r = n("317381"),
  a = n("594190"),
  s = n("569545"),
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
  h = n("46140"),
  A = n("70722");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = 12 * _.default.Millis.HOUR,
  p = 1 * _.default.Millis.MINUTE,
  O = 1 * _.default.Millis.SECOND,
  C = 5 * _.default.Millis.SECOND,
  R = 1 * _.default.Millis.SECOND,
  g = _.default.Millis.DAY,
  L = 30 * _.default.Millis.MINUTE,
  v = e => (0, s.encodeStreamKey)({
    streamType: A.StreamTypes.CALL,
    channelId: e,
    ownerId: "1"
  });

function D() {
  var e, t;
  let n = o.default.getStreamerActiveStreamMetadata();
  if ((null == n ? void 0 : n.id) == null) return null;
  let i = u.default.getGameById(n.id);
  if ((null == i ? void 0 : i.id) == null) return null;
  let r = (0, I.getQuestByApplicationId)(E.default.quests, i.id);
  return (null == r ? void 0 : null === (e = r.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null || (null == r ? void 0 : null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null ? null : r
}

function M(e) {
  return d.default.countVoiceStatesForChannel(e) >= 2
}

function y(e) {
  var t;
  let {
    questId: n,
    streamKey: i,
    applicationId: r
  } = e, {
    channelId: a
  } = (0, s.decodeStreamKey)(i), l = M(a), d = E.default.quests.get(n), _ = null != o.default.getRTCStream(i) && (null === (t = D()) || void 0 === t ? void 0 : t.config.applicationId) === r && l && null != d && !(0, I.isQuestExpired)(d), {
    quest: c,
    activity: f
  } = P(), S = (null == c ? void 0 : c.id) === n && (null == c ? void 0 : c.config.applicationId) === r && l && (null == f ? void 0 : f.channelId) === a && !(0, I.isQuestExpired)(c), A = (0, T.isEligibleForQuestPlaytime)({
    location: h.QuestsExperimentLocations.QUESTS_MANAGER
  }), m = u.default.getGameById(r), N = null != d && A && (0, I.hasPlaytimeTaskVariant)({
    quest: d
  }) && m.id === r;
  return _ || S || N
}

function P(e) {
  let t = {
    quest: null,
    activity: null
  };
  if (!(0, f.getIsEligibleForActivityQuest)({
      location: h.QuestsExperimentLocations.QUESTS_MANAGER,
      autoTrackExposure: !1
    })) return t;
  for (let s of r.default.getSelfEmbeddedActivities().values()) {
    var n, i, a;
    if (null != e && s.channelId !== e) continue;
    let r = null !== (a = (0, I.getQuestByApplicationId)(E.default.quests, s.applicationId)) && void 0 !== a ? a : null;
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
class U extends i.default {
  maybeFetchCurrentQuests() {
    (0, S.getIsEligibleForQuests)({
      location: h.QuestsExperimentLocations.QUESTS_MANAGER
    }) && !E.default.isFetchingCurrentQuests && (0, c.fetchCurrentQuests)()
  }
  constructor(...e) {
    super(...e), m(this, "instantiatedAt", Date.now()), m(this, "streamKeyToHeartbeatState", new Map), m(this, "optimisticProgressUpdateIntervalIds", new Map), m(this, "lastOptimisticallyUpdatedProgressMap", new Map), m(this, "questsInitialFetchTimerId", null), m(this, "questsRecurringFetchTimerId", null), m(this, "questsLastFetchAttemptedAt", 0), m(this, "initiateHeartbeat", e => {
      let {
        questId: t,
        streamKey: n,
        applicationId: i
      } = e;
      if (this.streamKeyToHeartbeatState.has(n)) return;
      let r = () => {
        if (y({
            questId: t,
            streamKey: n,
            applicationId: i
          })) {
          (0, c.sendHeartbeat)({
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
    }), m(this, "calculateHeartbeatDurationMs", e => {
      let t = E.default.quests.get(e);
      if (null == t || null == t.config || null == t.userStatus) return p;
      let {
        streamProgressSeconds: n
      } = t.userStatus, i = (60 * t.config.streamDurationRequirementMinutes - n) * _.default.Millis.SECOND;
      return i <= p ? i + O : p
    }), m(this, "terminateHeartbeat", e => {
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
        window.clearTimeout(r), this.streamKeyToHeartbeatState.delete(t), n && (0, c.sendHeartbeat)({
          questId: e,
          streamKey: t,
          terminal: !0
        })
      }
    }), m(this, "initiateOptimisticProgressUpdateInterval", e => {
      this.terminateOptimisticProgressUpdateInterval(e), this.optimisticProgressUpdateIntervalIds.set(e, window.setInterval(() => {
        var t;
        let n = D(),
          {
            quest: i
          } = P(),
          r = null !== (t = null != n ? n : i) && void 0 !== t ? t : null;
        if (null == r) {
          this.terminateOptimisticProgressUpdateInterval(e);
          return
        }
        let a = r.userStatus,
          s = r.config.streamDurationRequirementMinutes * _.default.Seconds.MINUTE,
          o = this.lastOptimisticallyUpdatedProgressMap.get(e);
        if (!y({
            questId: r.id,
            streamKey: e,
            applicationId: r.config.applicationId
          })) {
          this.terminateOptimisticProgressUpdateInterval(e);
          return
        }
        if (null == o) this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now());
        else if (null != a) {
          let t = (Date.now() - o) / _.default.Millis.SECOND,
            n = a.streamProgressSeconds + t;
          if (n <= s) {
            let t = {
              ...a,
              streamProgressSeconds: n
            };
            (0, c.optimisticallyUpdateQuestProgress)(t), this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now())
          }
        }
      }, R))
    }), m(this, "terminateOptimisticProgressUpdateInterval", e => {
      window.clearInterval(this.optimisticProgressUpdateIntervalIds.get(e)), this.optimisticProgressUpdateIntervalIds.delete(e), this.lastOptimisticallyUpdatedProgressMap.delete(e)
    }), m(this, "handleEnrollmentSuccess", e => {
      let {
        enrolledQuestUserStatus: {
          questId: t
        }
      } = e, n = o.default.getCurrentUserActiveStream(), i = D();
      if (null != n && (null == i ? void 0 : i.id) === t) {
        this.initiateHeartbeat({
          streamKey: (0, s.encodeStreamKey)(n),
          applicationId: i.config.applicationId,
          questId: i.id
        });
        return
      }
      let {
        quest: r,
        activity: l
      } = P();
      if (null != l && null != r && r.id === t) {
        this.initiateHeartbeat({
          streamKey: v(l.channelId),
          applicationId: r.config.applicationId,
          questId: r.id
        });
        return
      }
      let u = a.default.getRunningGames();
      (0, T.isEligibleForQuestPlaytime)({
        location: h.QuestsExperimentLocations.QUESTS_MANAGER
      }) && u.forEach(e => {
        if (null == e.id) return;
        let t = (0, I.getQuestByApplicationId)(E.default.quests, e.id);
        if (null != t && (0, I.hasPlaytimeTaskVariant)({
            quest: t
          })) {
          let e = v(t.id);
          this.initiateHeartbeat({
            streamKey: e,
            applicationId: t.config.applicationId,
            questId: t.id
          })
        }
      })
    }), m(this, "handleLogout", () => {
      window.clearTimeout(this.questsInitialFetchTimerId), window.clearTimeout(this.questsRecurringFetchTimerId), this.questsLastFetchAttemptedAt = 0
    }), m(this, "handleQuestsFetchCurrentQuestsBegin", () => {
      this.questsLastFetchAttemptedAt = Date.now()
    }), m(this, "handlePostConnectionOpen", () => {
      window.clearTimeout(this.questsInitialFetchTimerId), window.clearTimeout(this.questsRecurringFetchTimerId), this.questsRecurringFetchTimerId = window.setInterval(() => {
        Date.now() - this.questsLastFetchAttemptedAt > g && (this.questsLastFetchAttemptedAt = Date.now(), this.maybeFetchCurrentQuests())
      }, L), this.questsInitialFetchTimerId = window.setTimeout(() => {
        0 === E.default.lastFetchedCurrentQuests && this.maybeFetchCurrentQuests()
      }, Math.floor(Math.random() * C))
    }), m(this, "handleSendHeartbeatSuccess", e => {
      let {
        streamKey: t,
        userStatus: n
      } = e;
      this.terminateOptimisticProgressUpdateInterval(t), null != n.completedAt ? (this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !1
      }), this.terminateOptimisticProgressUpdateInterval(t)) : this.initiateOptimisticProgressUpdateInterval(t)
    }), m(this, "handleSendHeartbeatFailure", e => {
      let {
        streamKey: t
      } = e;
      this.terminateOptimisticProgressUpdateInterval(t)
    }), m(this, "handleRunningGamesChange", e => {
      let {
        added: t,
        removed: n
      } = e;
      (0, T.isEligibleForQuestPlaytime)({
        location: h.QuestsExperimentLocations.QUESTS_MANAGER
      }) && (t.forEach(e => {
        if (null == e.id) return;
        let t = (0, I.getQuestByApplicationId)(E.default.quests, e.id);
        if (null != t && (0, I.hasPlaytimeTaskVariant)({
            quest: t
          })) {
          let e = v(t.id);
          this.initiateHeartbeat({
            streamKey: e,
            applicationId: t.config.applicationId,
            questId: t.id
          })
        }
      }), n.forEach(e => {
        if (null == e.id) return;
        let t = (0, I.getQuestByApplicationId)(E.default.quests, e.id);
        if (null != t && (0, I.hasPlaytimeTaskVariant)({
            quest: t
          })) {
          let e = v(t.id);
          this.terminateHeartbeat({
            streamKey: e,
            sendTerminalHeartbeat: !0
          })
        }
      })), !(this.instantiatedAt + N > Date.now() || E.default.lastFetchedCurrentQuests + N > Date.now()) && this.maybeFetchCurrentQuests()
    }), m(this, "handleVoiceStateChange", () => {
      let e = o.default.getCurrentUserActiveStream(),
        t = D();
      null != e && this._handleVoiceStateChange({
        streamKey: (0, s.encodeStreamKey)(e),
        channelId: e.channelId,
        quest: t
      });
      let {
        quest: n,
        activity: i
      } = P();
      null != i && this._handleVoiceStateChange({
        streamKey: v(i.channelId),
        channelId: i.channelId,
        quest: n
      })
    }), m(this, "_handleVoiceStateChange", e => {
      let {
        streamKey: t,
        channelId: n,
        quest: i
      } = e, r = null == i || !M(n), a = M(n) && !this.streamKeyToHeartbeatState.has(t) && null != i;
      r ? this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !0
      }) : a && this.initiateHeartbeat({
        streamKey: t,
        applicationId: i.config.applicationId,
        questId: i.id
      })
    }), m(this, "handleEmbeddedActivityUpdate", e => {
      let {
        quest: t,
        activity: n
      } = P(e), i = v(e), r = (null == n || null == t) && this.streamKeyToHeartbeatState.has(i), a = null != n && null != t && M(e) && !this.streamKeyToHeartbeatState.has(i);
      r ? this.terminateHeartbeat({
        streamKey: i,
        sendTerminalHeartbeat: !0
      }) : a && this.initiateHeartbeat({
        streamKey: i,
        applicationId: t.config.applicationId,
        questId: t.id
      })
    }), m(this, "handleStreamCreate", e => {
      let {
        streamKey: t
      } = e, {
        channelId: n,
        ownerId: i
      } = (0, s.decodeStreamKey)(t);
      if (i !== l.default.getId()) return;
      let r = D();
      if (null == r) {
        this.terminateHeartbeat({
          streamKey: t,
          sendTerminalHeartbeat: !1
        });
        return
      }
      M(n) && !this.streamKeyToHeartbeatState.has(t) && this.initiateHeartbeat({
        streamKey: t,
        applicationId: r.config.applicationId,
        questId: r.id
      })
    }), m(this, "handleStreamStart", e => {
      let {
        streamType: t,
        guildId: n,
        channelId: i
      } = e, r = D(), a = (0, s.encodeStreamKey)({
        streamType: t,
        guildId: n,
        channelId: i,
        ownerId: l.default.getId()
      });
      null == r ? this.terminateHeartbeat({
        streamKey: a,
        sendTerminalHeartbeat: !0
      }) : M(i) && !this.streamKeyToHeartbeatState.has(a) && this.initiateHeartbeat({
        streamKey: a,
        applicationId: r.config.applicationId,
        questId: r.id
      })
    }), m(this, "handleStreamClose", e => {
      let {
        streamKey: t
      } = e;
      this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !0
      })
    }), m(this, "actions", {
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
t.default = new U