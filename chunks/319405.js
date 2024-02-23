"use strict";
E.r(_), E.d(_, {
  default: function() {
    return d
  }
}), E("222007");
var t = E("689988"),
  o = E("161454"),
  n = E("374014"),
  r = E("373469"),
  i = E("271938"),
  a = E("42203"),
  I = E("945956"),
  s = E("718517"),
  T = E("815496"),
  S = E("448881"),
  N = E("374023"),
  O = E("2973"),
  A = E("227231"),
  R = E("166604"),
  l = E("49111");
let u = 5 * s.default.Millis.SECOND,
  L = 12 * s.default.Millis.HOUR,
  C = 1 * s.default.Millis.MINUTE,
  D = 30 * s.default.Millis.SECOND;
class c extends t.default {
  maybeFetchCurrentQuests() {
    (0, N.getIsEligibleForQuests)({
      location: R.QuestsExperimentLocations.QUESTS_MANAGER,
      autoTrackExposure: !1
    }) && !O.default.isFetchingCurrentQuests && (0, S.fetchCurrentQuests)()
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
        (null != r.default.getRTCStream(E) || r.default.getViewerIds(E).length > 0) && (0, S.sendHeartbeat)({
          questId: _,
          streamKey: E,
          applicationId: t
        });
        let e = this.calculateHeartbeatDurationMs(t);
        this.sendHeartbeatIntervalIds.set(E, window.setTimeout(o, e))
      };
      o()
    }, this.calculateHeartbeatDurationMs = e => {
      let _ = O.default.quests.get(e);
      if (null == _ || null == _.config || null == _.userStatus) return C;
      let {
        streamProgressSeconds: E
      } = _.userStatus, t = 60 * _.config.streamDurationRequirementMinutes;
      return t - E <= .1 * t ? D : C
    }, this.terminateHeartbeat = e => {
      window.clearTimeout(this.sendHeartbeatIntervalIds.get(e)), this.sendHeartbeatIntervalIds.delete(e)
    }, this.handleEnrollmentSuccess = e => {
      let {
        enrolledQuestUserStatus: {
          questId: _
        }
      } = e, E = r.default.getStreamerActiveStreamMetadata();
      if (null == E || null == E.pid) return;
      let t = o.default.getGameForPID(E.pid);
      if (null == t || null == t.id) return;
      let i = (0, A.getQuestByApplicationId)(O.default.quests, t.id);
      if (null == i || i.id !== _) return;
      let a = r.default.getCurrentUserActiveStream();
      null != a && this.initiateHeartbeat({
        streamKey: (0, n.encodeStreamKey)(a),
        applicationId: i.config.applicationId,
        questId: i.id
      })
    }, this.handlePostConnectionOpen = () => {
      if (0 === O.default.lastFetchedCurrentQuests) window.setTimeout(this.maybeFetchCurrentQuests, Math.floor(Math.random() * u))
    }, this.handleSendHeartbeatSuccess = e => {
      let {
        streamKey: _,
        userStatus: E
      } = e;
      null != E.completedAt && this.terminateHeartbeat(_)
    }, this.handleRunningGamesChange = () => {
      !(this.instantiatedAt + L > Date.now() || O.default.lastFetchedCurrentQuests + L > Date.now()) && this.maybeFetchCurrentQuests()
    }, this.handleStreamStart = e => {
      var _, E, t;
      let {
        streamType: r,
        guildId: s,
        channelId: S,
        pid: N
      } = e, R = null != N ? o.default.getGameForPID(N) : null;
      if (null == R) return;
      let u = null != R.id ? (0, A.getQuestByApplicationId)(O.default.quests, R.id) : null;
      (null == u ? void 0 : null === (_ = u.userStatus) || void 0 === _ ? void 0 : _.enrolledAt) != null && (null == u ? void 0 : null === (E = u.userStatus) || void 0 === E ? void 0 : E.completedAt) == null && ((0, T.trackQuestEvent)(u.id, l.AnalyticEvents.QUEST_STREAMING_STARTED, {
        media_session_id: I.default.getMediaSessionId(),
        channel_type: null === (t = a.default.getChannel(S)) || void 0 === t ? void 0 : t.type,
        guild_id: s
      }), this.initiateHeartbeat({
        streamKey: (0, n.encodeStreamKey)({
          streamType: r,
          guildId: s,
          channelId: S,
          ownerId: i.default.getId()
        }),
        applicationId: u.config.applicationId,
        questId: u.id
      }))
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
var d = new c