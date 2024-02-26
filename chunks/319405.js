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
    super(...e), this.instantiatedAt = Date.now(), this.sendHeartbeatTimeoutIds = new Map, this.initiateHeartbeat = e => {
      let {
        questId: _,
        streamKey: E,
        applicationId: t
      } = e;
      window.clearTimeout(this.sendHeartbeatTimeoutIds.get(E));
      let o = () => {
        (null != r.default.getRTCStream(E) || r.default.getViewerIds(E).length > 0) && (0, S.sendHeartbeat)({
          questId: _,
          streamKey: E,
          applicationId: t
        });
        let e = this.calculateHeartbeatDurationMs(t);
        this.sendHeartbeatTimeoutIds.set(E, window.setTimeout(o, e))
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
      window.clearTimeout(this.sendHeartbeatTimeoutIds.get(e)), this.sendHeartbeatTimeoutIds.delete(e)
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
    }, this.handleStreamUpdate = e => {
      var _, E;
      let {
        streamKey: t,
        viewerIds: n
      } = e, i = r.default.getStreamerActiveStreamMetadataForStream(t);
      if (null == i || null == i.pid) return;
      let a = o.default.getGameForPID(i.pid);
      if (null == a || null == a.id) return;
      let I = (0, A.getQuestByApplicationId)(O.default.quests, a.id);
      if ((null == I ? void 0 : null === (_ = I.userStatus) || void 0 === _ ? void 0 : _.enrolledAt) != null && (null == I ? void 0 : null === (E = I.userStatus) || void 0 === E ? void 0 : E.completedAt) == null) {
        if (0 === n.length) {
          this.sendHeartbeatTimeoutIds.has(t) && ((0, S.sendHeartbeat)({
            questId: I.id,
            streamKey: t,
            applicationId: a.id
          }), this.terminateHeartbeat(t));
          return
        }
        this.initiateHeartbeat({
          streamKey: t,
          applicationId: I.config.applicationId,
          questId: I.id
        })
      }
    }, this.handleStreamStart = e => {
      var _, E, t;
      let {
        streamType: s,
        guildId: S,
        channelId: N,
        pid: R
      } = e, u = null != R ? o.default.getGameForPID(R) : null;
      if (null == u) return;
      let L = null != u.id ? (0, A.getQuestByApplicationId)(O.default.quests, u.id) : null;
      if ((null == L ? void 0 : null === (_ = L.userStatus) || void 0 === _ ? void 0 : _.enrolledAt) == null || (null == L ? void 0 : null === (E = L.userStatus) || void 0 === E ? void 0 : E.completedAt) != null) return;
      (0, T.trackQuestEvent)(L.id, l.AnalyticEvents.QUEST_STREAMING_STARTED, {
        media_session_id: I.default.getMediaSessionId(),
        channel_type: null === (t = a.default.getChannel(N)) || void 0 === t ? void 0 : t.type,
        guild_id: S
      });
      let C = (0, n.encodeStreamKey)({
        streamType: s,
        guildId: S,
        channelId: N,
        ownerId: i.default.getId()
      });
      0 !== r.default.getViewerIds(C).length && this.initiateHeartbeat({
        streamKey: C,
        applicationId: L.config.applicationId,
        questId: L.id
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
      STREAM_CLOSE: this.handleStreamClose,
      STREAM_UPDATE: this.handleStreamUpdate
    }
  }
}
var d = new c