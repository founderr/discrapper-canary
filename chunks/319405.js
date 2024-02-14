"use strict";
E.r(_), E.d(_, {
  default: function() {
    return L
  }
}), E("222007");
var t = E("689988"),
  o = E("374014"),
  n = E("373469"),
  a = E("271938"),
  r = E("568307"),
  i = E("718517"),
  I = E("448881"),
  T = E("374023"),
  s = E("2973"),
  S = E("227231"),
  N = E("166604");
let O = 5 * i.default.Millis.SECOND,
  A = 12 * i.default.Millis.HOUR,
  R = 1 * i.default.Millis.MINUTE;
class l extends t.default {
  maybeFetchCurrentQuests() {
    (0, T.getIsEligibleForQuests)({
      location: N.QuestsExperimentLocations.QUESTS_MANAGER,
      autoTrackExposure: !1
    }) && !s.default.isFetchingCurrentQuests && (0, I.fetchCurrentQuests)()
  }
  constructor(...e) {
    super(...e), this.instantiatedAt = Date.now(), this.sendHeartbeatIntervalIds = new Map, this.initiateHeartbeat = e => {
      let {
        questId: _,
        streamKey: E,
        applicationId: t
      } = e;

      function o() {
        null != n.default.getRTCStream(E) && 0 !== n.default.getViewerIds(E).length && (0, I.sendHeartbeat)({
          questId: _,
          streamKey: E,
          applicationId: t
        })
      }
      window.clearInterval(this.sendHeartbeatIntervalIds.get(E)), o(), this.sendHeartbeatIntervalIds.set(E, window.setInterval(o, R))
    }, this.terminateHeartbeat = e => {
      window.clearInterval(this.sendHeartbeatIntervalIds.get(e)), this.sendHeartbeatIntervalIds.delete(e)
    }, this.handleEnrollmentSuccess = e => {
      let {
        enrolledQuestUserStatus: {
          questId: _
        }
      } = e, E = n.default.getStreamerActiveStreamMetadata();
      if (null == E || null == E.pid) return;
      let t = r.default.getGameForPID(E.pid);
      if (null == t || null == t.id) return;
      let a = (0, S.getQuestByApplicationId)(s.default.quests, t.id);
      if (null == a || a.id !== _) return;
      let i = n.default.getCurrentUserActiveStream();
      null != i && this.initiateHeartbeat({
        streamKey: (0, o.encodeStreamKey)(i),
        applicationId: a.config.applicationId,
        questId: a.id
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
      !(this.instantiatedAt + A > Date.now() || s.default.lastFetchedCurrentQuests + A > Date.now()) && this.maybeFetchCurrentQuests()
    }, this.handleStreamStart = e => {
      var _, E;
      let {
        streamType: t,
        guildId: n,
        channelId: i,
        pid: I
      } = e, T = null != I ? r.default.getGameForPID(I) : null;
      if (null == T) return;
      let N = null != T.id ? (0, S.getQuestByApplicationId)(s.default.quests, T.id) : null;
      (null == N ? void 0 : null === (_ = N.userStatus) || void 0 === _ ? void 0 : _.enrolledAt) != null && (null == N ? void 0 : null === (E = N.userStatus) || void 0 === E ? void 0 : E.completedAt) == null && this.initiateHeartbeat({
        streamKey: (0, o.encodeStreamKey)({
          streamType: t,
          guildId: n,
          channelId: i,
          ownerId: a.default.getId()
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
var L = new l