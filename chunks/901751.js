"use strict";
n.r(t), n.d(t, {
  HeartbeatDecision: function() {
    return i
  },
  generatePsuedoStreamKey: function() {
    return v
  },
  getPlayOnDesktopQuestForActiveGames: function() {
    return M
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
  A = n("5881"),
  m = n("566078"),
  N = n("46140"),
  p = n("70722");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let C = 1 * E.default.Millis.MINUTE,
  R = 1 * E.default.Millis.SECOND,
  g = 1 * E.default.Millis.SECOND,
  L = (0, A.getQuestLogger)({
    location: N.QuestsExperimentLocations.QUESTS_MANAGER
  }),
  v = e => (0, l.encodeStreamKey)({
    streamType: p.StreamTypes.CALL,
    channelId: e,
    ownerId: "1"
  });

function D() {
  let e = u.default.getStreamerActiveStreamMetadata();
  if ((null == e ? void 0 : e.id) == null) return null;
  let t = _.default.getGameById(e.id);
  if ((null == t ? void 0 : t.id) == null) return null;
  let n = (0, f.getQuestByApplicationId)(T.default.quests, t.id);
  return null != n && P(n) ? n : null
}
let M = () => {
  for (let e of o.default.getRunningGames().map(e => e.id)) {
    if (null == e) continue;
    let t = (0, f.getPlayOnDesktopQuestByApplicationId)(T.default.quests, e);
    if (null != t && P(t)) return t
  }
};

function y(e) {
  return c.default.countVoiceStatesForChannel(e) >= 2
}

function P(e) {
  return !(0, f.isQuestExpired)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt
}

function U(e) {
  var t;
  let {
    questId: n,
    streamKey: i,
    applicationId: r
  } = e, {
    channelId: s
  } = (0, l.decodeStreamKey)(i), a = y(s), d = T.default.quests.get(n);
  if (null == d || !P(d)) return "STOP";
  let _ = null === (t = D()) || void 0 === t ? void 0 : t.config,
    c = null != u.default.getRTCStream(i) && null != _ && m.SharedQuestFields.build(_).application.id === r && a,
    {
      quest: E,
      activity: I
    } = b(),
    S = null == E ? void 0 : E.config,
    h = null != S && (null == E ? void 0 : E.id) === n && m.SharedQuestFields.build(S).application.id === r && a && (null == I ? void 0 : I.channelId) === s,
    A = o.default.getRunningGames().map(e => e.id),
    p = (0, f.shouldUsePlayOnDesktopTask)({
      quest: d,
      location: N.QuestsExperimentLocations.QUESTS_MANAGER
    }) && A.includes(r);
  return c || h || p ? "BEAT" : "BEAT_TERMINAL"
}

function b(e) {
  let t = {
    quest: null,
    activity: null
  };
  if (!(0, h.getIsEligibleForActivityQuest)({
      location: N.QuestsExperimentLocations.QUESTS_MANAGER,
      autoTrackExposure: !1
    })) return t;
  for (let i of a.default.getSelfEmbeddedActivities().values()) {
    var n;
    if (null != e && i.channelId !== e) continue;
    let r = null !== (n = (0, f.getQuestByApplicationId)(T.default.quests, i.applicationId)) && void 0 !== n ? n : null;
    if (null != r && P(r)) return {
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
class G extends s.default {
  constructor(...e) {
    super(...e), O(this, "streamKeyToHeartbeatState", new Map), O(this, "optimisticProgressUpdateIntervalIds", new Map), O(this, "lastOptimisticallyUpdatedProgressMap", new Map), O(this, "initiateHeartbeat", e => {
      let {
        questId: t,
        streamKey: n,
        applicationId: i
      } = e;
      if (this.streamKeyToHeartbeatState.has(n)) {
        L.log("~ initiateHeartbeat -> Heartbeat already initiated:", n);
        return
      }
      let r = () => {
        let e = U({
          questId: t,
          streamKey: n,
          applicationId: i
        });
        if (L.log("~ initiateHeartbeat -> heartbeat decision: ", e), "BEAT" === e) {
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
    }), O(this, "calculateHeartbeatDurationMs", e => {
      let t = T.default.quests.get(e);
      if (null == t || null == t.config || null == t.userStatus) return C;
      let {
        progressSeconds: n,
        targetSeconds: i
      } = (0, f.getQuestTaskDetails)({
        quest: t,
        location: N.QuestsExperimentLocations.QUESTS_MANAGER
      }), r = Math.max(0, (i - n) * E.default.Millis.SECOND);
      return r <= C ? r + R : C
    }), O(this, "terminateHeartbeat", e => {
      let {
        streamKey: t,
        sendTerminalHeartbeat: n
      } = e;
      this.terminateOptimisticProgressUpdateInterval(t);
      let i = this.streamKeyToHeartbeatState.get(t);
      if (null != i) {
        L.log("~ terminateHeartbeat -> Terminating heartbeat:", {
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
    }), O(this, "initiateOptimisticProgressUpdateInterval", e => {
      this.terminateOptimisticProgressUpdateInterval(e), this.optimisticProgressUpdateIntervalIds.set(e, window.setInterval(() => {
        var t, n;
        let i = D(),
          r = M(),
          {
            quest: s
          } = b(),
          a = null !== (n = null !== (t = null != i ? i : s) && void 0 !== t ? t : r) && void 0 !== n ? n : null;
        if (null == a) {
          this.terminateOptimisticProgressUpdateInterval(e);
          return
        }
        let o = m.SharedQuestFields.build(a.config),
          l = a.userStatus,
          u = this.lastOptimisticallyUpdatedProgressMap.get(e);
        if ("BEAT" !== U({
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
            location: N.QuestsExperimentLocations.QUESTS_MANAGER
          }), r = (Date.now() - u) / E.default.Millis.SECOND, s = t + r;
          if (L.log("~ initiateOptimisticProgressUpdateInterval -> Updating optimistic progress:", {
              streamKey: e,
              progressToAdd: r,
              existingProgress: t,
              newProgress: s
            }), s <= n) {
            let t = {
              ...l,
              streamProgressSeconds: s
            };
            t.progress[i] = {
              ...t.progress[i],
              eventName: i,
              value: s
            }, (0, I.optimisticallyUpdateQuestProgress)(t), this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now())
          }
        }
      }, g))
    }), O(this, "terminateOptimisticProgressUpdateInterval", e => {
      L.log("~ terminateOptimisticProgressUpdateInterval -> Terminating/Resetting Interval", e), window.clearInterval(this.optimisticProgressUpdateIntervalIds.get(e)), this.optimisticProgressUpdateIntervalIds.delete(e), this.lastOptimisticallyUpdatedProgressMap.delete(e)
    }), O(this, "handleEnrollmentSuccess", e => {
      let {
        enrolledQuestUserStatus: {
          questId: t
        }
      } = e, n = u.default.getCurrentUserActiveStream(), i = D();
      if (null != n && null != i && i.id === t && P(i)) {
        L.log("handleEnrollmentSuccess - initiating heartbeat for stream"), this.initiateHeartbeat({
          streamKey: (0, l.encodeStreamKey)(n),
          applicationId: m.SharedQuestFields.build(i.config).application.id,
          questId: i.id
        });
        return
      }
      let {
        quest: r,
        activity: s
      } = b();
      if (null != s && null != r && P(r) && r.id === t) {
        L.log("handleEnrollmentSuccess - initiating heartbeat for activity"), this.initiateHeartbeat({
          streamKey: v(s.channelId),
          applicationId: m.SharedQuestFields.build(r.config).application.id,
          questId: r.id
        });
        return
      }
      o.default.getRunningGames().forEach(e => {
        if (null == e.id) return;
        let t = (0, f.getPlayOnDesktopQuestByApplicationId)(T.default.quests, e.id);
        if (null != t && P(t) && (0, f.shouldUsePlayOnDesktopTask)({
            quest: t,
            location: N.QuestsExperimentLocations.QUESTS_MANAGER
          })) {
          L.log("handleEnrollmentSuccess - initiating heartbeat for playtime task");
          let e = v(t.id);
          this.initiateHeartbeat({
            streamKey: e,
            applicationId: m.SharedQuestFields.build(t.config).application.id,
            questId: t.id
          })
        }
      })
    }), O(this, "handleSendHeartbeatSuccess", e => {
      let {
        streamKey: t,
        userStatus: n
      } = e;
      L.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded:", t), this.terminateOptimisticProgressUpdateInterval(t), null != n.completedAt ? (this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !1
      }), this.terminateOptimisticProgressUpdateInterval(t)) : this.initiateOptimisticProgressUpdateInterval(t)
    }), O(this, "handleSendHeartbeatFailure", e => {
      let {
        streamKey: t
      } = e;
      L.log("~ handleSendHeartbeatFailure -> Heartbeat failed:", t), this.terminateOptimisticProgressUpdateInterval(t)
    }), O(this, "handleQuestsFetchCurrentQuestsSuccess", e => {
      let {
        quests: t
      } = e;
      L.log("~ handleQuestsFetchCurrentQuestsSuccess -> Quests fetched:", t);
      let n = o.default.getRunningGames().map(e => e.id);
      t.forEach(e => {
        if (P(e) && (0, f.shouldUsePlayOnDesktopTask)({
            quest: e,
            location: N.QuestsExperimentLocations.QUESTS_MANAGER
          })) {
          let t = v(e.id),
            i = n.includes(m.SharedQuestFields.build(e.config).application.id),
            r = !this.streamKeyToHeartbeatState.has(t) && i;
          this.streamKeyToHeartbeatState.has(t) && !i ? this.terminateHeartbeat({
            streamKey: t,
            sendTerminalHeartbeat: !0
          }) : r && (L.log("handleQuestsFetchCurrentQuestsSuccess - initiating heartbeat for playtime task"), this.initiateHeartbeat({
            streamKey: t,
            applicationId: m.SharedQuestFields.build(e.config).application.id,
            questId: e.id
          }))
        }
      })
    }), O(this, "handleRunningGamesChange", e => {
      (0, S.isEligibleForQuestPlaytime)({
        location: N.QuestsExperimentLocations.QUESTS_MANAGER
      }) && this._handlePlayOnDesktopQuestsUpdate(e)
    }), O(this, "_handlePlayOnDesktopQuestsUpdate", e => {
      let {
        removed: t,
        games: n
      } = e;
      L.log("~ handleRunningGamesChange -> Games detected:", {
        runningGames: n,
        removedGames: t
      }), n.forEach(e => {
        if (null == e.id) return;
        let t = (0, f.getPlayOnDesktopQuestByApplicationId)(T.default.quests, e.id);
        if (null == t || !P(t)) return;
        let n = v(t.id);
        (0, f.shouldUsePlayOnDesktopTask)({
          quest: t,
          location: N.QuestsExperimentLocations.QUESTS_MANAGER
        }) && !this.streamKeyToHeartbeatState.has(n) && (L.log("handleRunningGamesChange - initiating heartbeat for playtime task"), this.initiateHeartbeat({
          streamKey: n,
          applicationId: m.SharedQuestFields.build(t.config).application.id,
          questId: t.id
        }))
      }), t.forEach(e => {
        if (null == e.id) return;
        let t = (0, f.getPlayOnDesktopQuestByApplicationId)(T.default.quests, e.id);
        if (null == t || !P(t)) return;
        let n = v(t.id);
        (0, f.shouldUsePlayOnDesktopTask)({
          quest: t,
          location: N.QuestsExperimentLocations.QUESTS_MANAGER
        }) && this.streamKeyToHeartbeatState.has(n) && this.terminateHeartbeat({
          streamKey: n,
          sendTerminalHeartbeat: !0
        })
      })
    }), O(this, "handleVoiceStateChange", () => {
      let e = u.default.getCurrentUserActiveStream(),
        t = D();
      null != e && this._handleVoiceStateChange({
        streamKey: (0, l.encodeStreamKey)(e),
        channelId: e.channelId,
        quest: t
      });
      let {
        quest: n,
        activity: i
      } = b();
      null != i && this._handleVoiceStateChange({
        streamKey: v(i.channelId),
        channelId: i.channelId,
        quest: n
      })
    }), O(this, "_handleVoiceStateChange", e => {
      let {
        streamKey: t,
        channelId: n,
        quest: i
      } = e, r = null == i || !y(n), s = y(n) && !this.streamKeyToHeartbeatState.has(t) && null != i && P(i) && !(0, f.shouldUsePlayOnDesktopTask)({
        quest: i,
        location: N.QuestsExperimentLocations.QUESTS_MANAGER
      });
      r ? this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !0
      }) : s && (L.log("handleVoiceStateChange - initiating heartbeat for stream task"), this.initiateHeartbeat({
        streamKey: t,
        applicationId: m.SharedQuestFields.build(i.config).application.id,
        questId: i.id
      }))
    }), O(this, "handleEmbeddedActivityUpdate", e => {
      let {
        quest: t,
        activity: n
      } = b(e), i = v(e), r = (null == n || null == t) && this.streamKeyToHeartbeatState.has(i), s = null != n && null != t && P(t) && y(e) && !this.streamKeyToHeartbeatState.has(i);
      r ? this.terminateHeartbeat({
        streamKey: i,
        sendTerminalHeartbeat: !0
      }) : s && (L.log("handleRunningGamesChange - initiating heartbeat for activity task"), this.initiateHeartbeat({
        streamKey: i,
        applicationId: m.SharedQuestFields.build(t.config).application.id,
        questId: t.id
      }))
    }), O(this, "handleStreamCreate", e => {
      let {
        streamKey: t
      } = e, {
        channelId: n,
        ownerId: i
      } = (0, l.decodeStreamKey)(t);
      if (i !== d.default.getId()) return;
      let r = D();
      if (null == r) {
        this.terminateHeartbeat({
          streamKey: t,
          sendTerminalHeartbeat: !1
        });
        return
      }
      y(n) && P(r) && !(0, f.shouldUsePlayOnDesktopTask)({
        quest: r,
        location: N.QuestsExperimentLocations.QUESTS_MANAGER
      }) && !this.streamKeyToHeartbeatState.has(t) && (L.log("handleStreamCreate - initiating heartbeat for stream task"), this.initiateHeartbeat({
        streamKey: t,
        applicationId: m.SharedQuestFields.build(r.config).application.id,
        questId: r.id
      }))
    }), O(this, "handleStreamStart", e => {
      let {
        streamType: t,
        guildId: n,
        channelId: i
      } = e, r = D(), s = (0, l.encodeStreamKey)({
        streamType: t,
        guildId: n,
        channelId: i,
        ownerId: d.default.getId()
      });
      null == r ? this.terminateHeartbeat({
        streamKey: s,
        sendTerminalHeartbeat: !0
      }) : y(i) && P(r) && !(0, f.shouldUsePlayOnDesktopTask)({
        quest: r,
        location: N.QuestsExperimentLocations.QUESTS_MANAGER
      }) && !this.streamKeyToHeartbeatState.has(s) && (L.log("handleStreamStart - initiating heartbeat for stream task"), this.initiateHeartbeat({
        streamKey: s,
        applicationId: m.SharedQuestFields.build(r.config).application.id,
        questId: r.id
      }))
    }), O(this, "handleStreamClose", e => {
      let {
        streamKey: t
      } = e;
      this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !0
      })
    }), O(this, "actions", {
      QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: this.handleQuestsFetchCurrentQuestsSuccess,
      QUESTS_ENROLL_SUCCESS: this.handleEnrollmentSuccess,
      QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
      QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
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
      }
    })
  }
}
t.default = new G