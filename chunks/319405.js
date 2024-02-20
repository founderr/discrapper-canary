"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var i = n("689988"),
  a = n("374014"),
  l = n("373469"),
  s = n("271938"),
  r = n("568307"),
  o = n("718517"),
  u = n("448881"),
  d = n("374023"),
  c = n("2973"),
  f = n("227231"),
  E = n("166604");
let h = 5 * o.default.Millis.SECOND,
  _ = 12 * o.default.Millis.HOUR,
  C = 1 * o.default.Millis.MINUTE,
  S = 30 * o.default.Millis.SECOND;
class g extends i.default {
  maybeFetchCurrentQuests() {
    (0, d.getIsEligibleForQuests)({
      location: E.QuestsExperimentLocations.QUESTS_MANAGER,
      autoTrackExposure: !1
    }) && !c.default.isFetchingCurrentQuests && (0, u.fetchCurrentQuests)()
  }
  constructor(...e) {
    super(...e), this.instantiatedAt = Date.now(), this.sendHeartbeatIntervalIds = new Map, this.initiateHeartbeat = e => {
      let {
        questId: t,
        streamKey: n,
        applicationId: i
      } = e;
      window.clearTimeout(this.sendHeartbeatIntervalIds.get(n));
      let a = () => {
        (null != l.default.getRTCStream(n) || l.default.getViewerIds(n).length > 0) && (0, u.sendHeartbeat)({
          questId: t,
          streamKey: n,
          applicationId: i
        });
        let e = this.calculateHeartbeatDurationMs(i);
        this.sendHeartbeatIntervalIds.set(n, window.setTimeout(a, e))
      };
      a()
    }, this.calculateHeartbeatDurationMs = e => {
      let t = c.default.quests.get(e);
      if (null == t || null == t.config || null == t.userStatus) return C;
      let {
        streamProgressSeconds: n
      } = t.userStatus, i = 60 * t.config.streamDurationRequirementMinutes;
      return i - n <= .1 * i ? S : C
    }, this.terminateHeartbeat = e => {
      window.clearTimeout(this.sendHeartbeatIntervalIds.get(e)), this.sendHeartbeatIntervalIds.delete(e)
    }, this.handleEnrollmentSuccess = e => {
      let {
        enrolledQuestUserStatus: {
          questId: t
        }
      } = e, n = l.default.getStreamerActiveStreamMetadata();
      if (null == n || null == n.pid) return;
      let i = r.default.getGameForPID(n.pid);
      if (null == i || null == i.id) return;
      let s = (0, f.getQuestByApplicationId)(c.default.quests, i.id);
      if (null == s || s.id !== t) return;
      let o = l.default.getCurrentUserActiveStream();
      null != o && this.initiateHeartbeat({
        streamKey: (0, a.encodeStreamKey)(o),
        applicationId: s.config.applicationId,
        questId: s.id
      })
    }, this.handlePostConnectionOpen = () => {
      if (0 === c.default.lastFetchedCurrentQuests) window.setTimeout(this.maybeFetchCurrentQuests, Math.floor(Math.random() * h))
    }, this.handleSendHeartbeatSuccess = e => {
      let {
        streamKey: t,
        userStatus: n
      } = e;
      null != n.completedAt && this.terminateHeartbeat(t)
    }, this.handleRunningGamesChange = () => {
      !(this.instantiatedAt + _ > Date.now() || c.default.lastFetchedCurrentQuests + _ > Date.now()) && this.maybeFetchCurrentQuests()
    }, this.handleStreamStart = e => {
      var t, n;
      let {
        streamType: i,
        guildId: l,
        channelId: o,
        pid: u
      } = e, d = null != u ? r.default.getGameForPID(u) : null;
      if (null == d) return;
      let E = null != d.id ? (0, f.getQuestByApplicationId)(c.default.quests, d.id) : null;
      (null == E ? void 0 : null === (t = E.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null && (null == E ? void 0 : null === (n = E.userStatus) || void 0 === n ? void 0 : n.completedAt) == null && this.initiateHeartbeat({
        streamKey: (0, a.encodeStreamKey)({
          streamType: i,
          guildId: l,
          channelId: o,
          ownerId: s.default.getId()
        }),
        applicationId: E.config.applicationId,
        questId: E.id
      })
    }, this.handleStreamClose = e => {
      let {
        streamKey: t
      } = e;
      this.terminateHeartbeat(t)
    }, this.actions = {
      QUESTS_ENROLL_SUCCESS: this.handleEnrollmentSuccess,
      QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      STREAM_START: this.handleStreamStart,
      STREAM_CLOSE: this.handleStreamClose
    }
  }
}
var T = new g