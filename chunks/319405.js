"use strict";
E.r(_), E.d(_, {
  default: function() {
    return L
  }
}), E("222007");
var t = E("689988"),
  o = E("374014"),
  n = E("373469"),
  r = E("271938"),
  i = E("568307"),
  a = E("718517"),
  I = E("448881"),
  s = E("374023"),
  T = E("2973"),
  S = E("227231"),
  N = E("166604");
let O = 5 * a.default.Millis.SECOND,
  A = 12 * a.default.Millis.HOUR,
  R = 1 * a.default.Millis.MINUTE,
  l = 30 * a.default.Millis.SECOND;
class u extends t.default {
  maybeFetchCurrentQuests() {
    (0, s.getIsEligibleForQuests)({
      location: N.QuestsExperimentLocations.QUESTS_MANAGER,
      autoTrackExposure: !1
    }) && !T.default.isFetchingCurrentQuests && (0, I.fetchCurrentQuests)()
  }
  constructor(...e) {
    super(...e), this.instantiatedAt = Date.now(), this.sendHeartbeatIntervalIds = new Map, this.initiateHeartbeat = e => {
      let {
        questId: _,
        streamKey: E,
        applicationId: t
      } = e;
      window.clearTimeout(this.sendHeartbeatIntervalIds.get(E));
      let o = () => {
        (null != n.default.getRTCStream(E) || n.default.getViewerIds(E).length > 0) && (0, I.sendHeartbeat)({
          questId: _,
          streamKey: E,
          applicationId: t
        });
        let e = this.calculateHeartbeatDurationMs(t);
        this.sendHeartbeatIntervalIds.set(E, window.setTimeout(o, e))
      };
      o()
    }, this.calculateHeartbeatDurationMs = e => {
      let _ = T.default.quests.get(e);
      if (null == _ || null == _.config || null == _.userStatus) return R;
      let {
        streamProgressSeconds: E
      } = _.userStatus, t = 60 * _.config.streamDurationRequirementMinutes;
      return t - E <= .1 * t ? l : R
    }, this.terminateHeartbeat = e => {
      window.clearTimeout(this.sendHeartbeatIntervalIds.get(e)), this.sendHeartbeatIntervalIds.delete(e)
    }, this.handleEnrollmentSuccess = e => {
      let {
        enrolledQuestUserStatus: {
          questId: _
        }
      } = e, E = n.default.getStreamerActiveStreamMetadata();
      if (null == E || null == E.pid) return;
      let t = i.default.getGameForPID(E.pid);
      if (null == t || null == t.id) return;
      let r = (0, S.getQuestByApplicationId)(T.default.quests, t.id);
      if (null == r || r.id !== _) return;
      let a = n.default.getCurrentUserActiveStream();
      null != a && this.initiateHeartbeat({
        streamKey: (0, o.encodeStreamKey)(a),
        applicationId: r.config.applicationId,
        questId: r.id
      })
    }, this.handlePostConnectionOpen = () => {
      window.setTimeout(this.maybeFetchCurrentQuests, Math.floor(Math.random() * O))
    }, this.handleSendHeartbeatSuccess = e => {
      let {
        streamKey: _,
        userStatus: E
      } = e;
      null != E.completedAt && this.terminateHeartbeat(_)
    }, this.handleRunningGamesChange = () => {
      !(this.instantiatedAt + A > Date.now() || T.default.lastFetchedCurrentQuests + A > Date.now()) && this.maybeFetchCurrentQuests()
    }, this.handleStreamStart = e => {
      var _, E;
      let {
        streamType: t,
        guildId: n,
        channelId: a,
        pid: I
      } = e, s = null != I ? i.default.getGameForPID(I) : null;
      if (null == s) return;
      let N = null != s.id ? (0, S.getQuestByApplicationId)(T.default.quests, s.id) : null;
      (null == N ? void 0 : null === (_ = N.userStatus) || void 0 === _ ? void 0 : _.enrolledAt) != null && (null == N ? void 0 : null === (E = N.userStatus) || void 0 === E ? void 0 : E.completedAt) == null && this.initiateHeartbeat({
        streamKey: (0, o.encodeStreamKey)({
          streamType: t,
          guildId: n,
          channelId: a,
          ownerId: r.default.getId()
        }),
        applicationId: N.config.applicationId,
        questId: N.id
      })
    }, this.handleStreamClose = e => {
      let {
        streamKey: _
      } = e;
      this.terminateHeartbeat(_)
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
var L = new u