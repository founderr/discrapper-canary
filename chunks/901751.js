var r,
    i = n(47120);
var a = n(754700),
    o = n(147913),
    s = n(317381),
    l = n(594190),
    u = n(569545),
    c = n(199902),
    d = n(314897),
    _ = n(77498),
    E = n(938475),
    f = n(70956),
    h = n(272008),
    p = n(569984),
    m = n(918701),
    I = n(432945),
    T = n(5881),
    g = n(566078),
    S = n(46140),
    A = n(70722);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let N = 1 * f.Z.Millis.MINUTE,
    O = 2,
    R = 1 * f.Z.Millis.SECOND,
    C = (0, T.T)({ location: S.dr.QUESTS_MANAGER }),
    y = (e) =>
        (0, u.V9)({
            streamType: A.lo.CALL,
            channelId: e,
            ownerId: '1'
        });
function b() {
    let e = c.Z.getStreamerActiveStreamMetadata();
    if ((null == e ? void 0 : e.id) == null) return null;
    let t = _.Z.getDetectableGame(e.id);
    if ((null == t ? void 0 : t.id) == null) return null;
    let n = (0, m.lQ)(p.Z.quests, t.id);
    return null != n && D(n) ? n : null;
}
function L(e) {
    return E.ZP.countVoiceStatesForChannel(e) >= O;
}
function D(e) {
    return !(0, m.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function M(e) {
    var t;
    let { questId: n, streamKey: r, applicationId: i } = e,
        { channelId: a } = (0, u.my)(r),
        o = L(a),
        s = p.Z.quests.get(n);
    if (null == s || !D(s)) return 'STOP';
    let d = null === (t = b()) || void 0 === t ? void 0 : t.config,
        _ = null != c.Z.getRTCStream(r) && null != d && g.r.build(d).application.id === i && o,
        { quest: E, activity: f } = P(),
        h = null != (null == E ? void 0 : E.config) && (null == E ? void 0 : E.id) === n && (0, m.UZ)(i, E) && (null == f ? void 0 : f.channelId) === a,
        I = l.ZP.getRunningGames().map((e) => e.id),
        T = (0, m.$H)(s) && I.includes(i);
    return _ || h || T ? 'BEAT' : 'BEAT_TERMINAL';
}
function P(e) {
    let t = U(e);
    if (null != t) return t;
    let n = {
        quest: null,
        activity: null
    };
    if (
        !(0, I.S)({
            location: S.dr.QUESTS_MANAGER,
            autoTrackExposure: !1
        })
    )
        return n;
    for (let t of s.ZP.getSelfEmbeddedActivities().values()) {
        var r;
        if (null != e && t.channelId !== e) continue;
        let i = null !== (r = (0, m.lQ)(p.Z.quests, t.applicationId)) && void 0 !== r ? r : null;
        if (null != i && D(i))
            return {
                quest: i,
                activity: t
            };
        n = {
            quest: null,
            activity: t
        };
    }
    return n;
}
function U(e) {
    let t, n;
    for (let [e, n] of p.Z.quests)
        if ((0, m.KM)(n)) {
            t = n;
            break;
        }
    if (null == t) return;
    for (let t of s.ZP.getSelfEmbeddedActivities().values())
        if (null == e || t.channelId === e) {
            n = t;
            break;
        }
    if (null != n)
        return {
            quest: t,
            activity: n
        };
}
!(function (e) {
    (e.BEAT = 'BEAT'), (e.STOP = 'STOP'), (e.BEAT_TERMINAL = 'BEAT_TERMINAL');
})(r || (r = {}));
class w extends o.Z {
    constructor(...e) {
        super(...e),
            v(this, 'streamKeyToHeartbeatState', new Map()),
            v(this, 'initiateHeartbeat', (e) => {
                let { questId: t, streamKey: n, applicationId: r } = e;
                if (this.streamKeyToHeartbeatState.has(n)) {
                    C.log('~ initiateHeartbeat -> Heartbeat already initiated:', n);
                    return;
                }
                let i = () => {
                    let e = M({
                        questId: t,
                        streamKey: n,
                        applicationId: r
                    });
                    if ((C.log('~ initiateHeartbeat -> streamkey '.concat(n, '. heartbeat decision: '), e), 'BEAT' === e)) {
                        (0, h.m0)({
                            questId: t,
                            streamKey: n
                        });
                        let e = this.calculateHeartbeatDurationMs(t),
                            r = window.setTimeout(i, e);
                        this.streamKeyToHeartbeatState.set(n, {
                            heartbeatTimeoutId: r,
                            questId: t
                        });
                    } else
                        this.terminateHeartbeat({
                            streamKey: n,
                            sendTerminalHeartbeat: 'BEAT_TERMINAL' === e
                        });
                };
                i();
            }),
            v(this, 'calculateHeartbeatDurationMs', (e) => {
                let t = p.Z.quests.get(e);
                if (null == t || null == t.config || null == t.userStatus) return N;
                let { progressSeconds: n, targetSeconds: r } = (0, m.il)(t, a.T.DESKTOP),
                    i = Math.max(0, (r - n) * f.Z.Millis.SECOND);
                return i <= N ? i + R : N;
            }),
            v(this, 'terminateHeartbeat', (e) => {
                let { streamKey: t, sendTerminalHeartbeat: n } = e,
                    r = this.streamKeyToHeartbeatState.get(t);
                if (null != r) {
                    C.log('~ terminateHeartbeat -> Terminating heartbeat:', {
                        streamKey: t,
                        sendTerminalHeartbeat: n
                    });
                    let { questId: e, heartbeatTimeoutId: i } = r;
                    window.clearTimeout(i),
                        this.streamKeyToHeartbeatState.delete(t),
                        n &&
                            (0, h.m0)({
                                questId: e,
                                streamKey: t,
                                terminal: !0
                            });
                }
            }),
            v(this, 'handleEnrollmentSuccess', (e) => {
                let {
                        enrolledQuestUserStatus: { questId: t }
                    } = e,
                    n = c.Z.getCurrentUserActiveStream(),
                    r = b();
                if (null != n && null != r && r.id === t && D(r)) {
                    C.log('handleEnrollmentSuccess - initiating heartbeat for stream'),
                        this.initiateHeartbeat({
                            streamKey: (0, u.V9)(n),
                            applicationId: g.r.build(r.config).application.id,
                            questId: r.id
                        });
                    return;
                }
                let { quest: i, activity: a } = P();
                if (null != a && null != i && D(i) && i.id === t) {
                    C.log('handleEnrollmentSuccess - initiating heartbeat for activity'),
                        this.initiateHeartbeat({
                            streamKey: y(a.channelId),
                            applicationId: g.r.build(i.config).application.id,
                            questId: i.id
                        });
                    return;
                }
                l.ZP.getRunningGames().forEach((e) => {
                    if (null == e.id) return;
                    let t = (0, m.CE)(p.Z.quests, e.id);
                    if (null != t && D(t) && (0, m.$H)(t)) {
                        C.log('handleEnrollmentSuccess - initiating heartbeat for playtime task');
                        let e = y(t.id);
                        this.initiateHeartbeat({
                            streamKey: e,
                            applicationId: g.r.build(t.config).application.id,
                            questId: t.id
                        });
                    }
                });
            }),
            v(this, 'handleSendHeartbeatSuccess', (e) => {
                let { streamKey: t, userStatus: n } = e;
                C.log('~ handleSendHeartbeatSuccess -> Heartbeat succeeded:', t),
                    null != n.completedAt &&
                        this.terminateHeartbeat({
                            streamKey: t,
                            sendTerminalHeartbeat: !1
                        });
            }),
            v(this, 'handleSendHeartbeatFailure', (e) => {
                let { streamKey: t } = e;
                C.log('~ handleSendHeartbeatFailure -> Heartbeat failed:', t);
            }),
            v(this, 'handleQuestsFetchCurrentQuestsSuccess', (e) => {
                let { quests: t } = e;
                C.log('~ handleQuestsFetchCurrentQuestsSuccess -> Quests fetched:', t);
                let n = l.ZP.getRunningGames().map((e) => e.id);
                t.forEach((e) => {
                    if (D(e) && (0, m.$H)(e)) {
                        let t = y(e.id),
                            r = n.includes(g.r.build(e.config).application.id),
                            i = !this.streamKeyToHeartbeatState.has(t) && r;
                        this.streamKeyToHeartbeatState.has(t) && !r
                            ? this.terminateHeartbeat({
                                  streamKey: t,
                                  sendTerminalHeartbeat: !0
                              })
                            : i &&
                              (C.log('handleQuestsFetchCurrentQuestsSuccess - initiating heartbeat for playtime task'),
                              this.initiateHeartbeat({
                                  streamKey: t,
                                  applicationId: g.r.build(e.config).application.id,
                                  questId: e.id
                              }));
                    }
                });
            }),
            v(this, 'handleRunningGamesChange', (e) => {
                this._handlePlayOnDesktopQuestsUpdate(e);
            }),
            v(this, '_handlePlayOnDesktopQuestsUpdate', (e) => {
                let { removed: t, games: n } = e;
                C.log('~ handleRunningGamesChange -> Games detected:', {
                    runningGames: n,
                    removedGames: t
                }),
                    n.forEach((e) => {
                        if (null == e.id) return;
                        let t = (0, m.CE)(p.Z.quests, e.id);
                        if (null == t || !D(t)) return;
                        let n = y(t.id);
                        (0, m.$H)(t) &&
                            !this.streamKeyToHeartbeatState.has(n) &&
                            (C.log('handleRunningGamesChange - initiating heartbeat for playtime task'),
                            this.initiateHeartbeat({
                                streamKey: n,
                                applicationId: g.r.build(t.config).application.id,
                                questId: t.id
                            }));
                    }),
                    t.forEach((e) => {
                        if (null == e.id) return;
                        let t = (0, m.CE)(p.Z.quests, e.id);
                        if (null == t || !D(t)) return;
                        let n = y(t.id);
                        (0, m.$H)(t) &&
                            this.streamKeyToHeartbeatState.has(n) &&
                            this.terminateHeartbeat({
                                streamKey: n,
                                sendTerminalHeartbeat: !0
                            });
                    });
            }),
            v(this, 'handleVoiceStateChange', () => {
                let e = c.Z.getCurrentUserActiveStream(),
                    t = b();
                null != e &&
                    this._handleVoiceStateChange({
                        streamKey: (0, u.V9)(e),
                        channelId: e.channelId,
                        quest: t
                    });
            }),
            v(this, '_handleVoiceStateChange', (e) => {
                let { streamKey: t, channelId: n, quest: r } = e,
                    i = null == r || !L(n),
                    a = L(n) && !this.streamKeyToHeartbeatState.has(t) && null != r && D(r) && !(0, m.$H)(r);
                i
                    ? (C.log('handleVoiceStateChange - calling terminateHeartbeat for streamKey '.concat(t)),
                      this.terminateHeartbeat({
                          streamKey: t,
                          sendTerminalHeartbeat: !0
                      }))
                    : a &&
                      (C.log('handleVoiceStateChange - initiating heartbeat for stream task'),
                      this.initiateHeartbeat({
                          streamKey: t,
                          applicationId: g.r.build(r.config).application.id,
                          questId: r.id
                      }));
            }),
            v(this, 'handleEmbeddedActivityUpdate', (e) => {
                let { quest: t, activity: n } = P(e),
                    r = y(e),
                    i = (null == n || null == t) && this.streamKeyToHeartbeatState.has(r),
                    a = null != n && null != t && D(t) && !this.streamKeyToHeartbeatState.has(r);
                i
                    ? (C.log('handleEmbeddedActivityUpdate - terminating heartbeat'),
                      this.terminateHeartbeat({
                          streamKey: r,
                          sendTerminalHeartbeat: !0
                      }))
                    : a &&
                      (C.log('handleEmbeddedActivityUpdate - initiating heartbeat for activity task'),
                      this.initiateHeartbeat({
                          streamKey: r,
                          applicationId: g.r.build(t.config).application.id,
                          questId: t.id
                      }));
            }),
            v(this, 'handleStreamCreate', (e) => {
                let { streamKey: t } = e,
                    { channelId: n, ownerId: r } = (0, u.my)(t);
                if (r !== d.default.getId()) return;
                let i = b();
                if (null == i) {
                    C.log('handleStreamCreate - calling terminateHeartbeat for streamKey '.concat(t)),
                        this.terminateHeartbeat({
                            streamKey: t,
                            sendTerminalHeartbeat: !1
                        });
                    return;
                }
                L(n) &&
                    D(i) &&
                    !(0, m.$H)(i) &&
                    !this.streamKeyToHeartbeatState.has(t) &&
                    (C.log('handleStreamCreate - initiating heartbeat for stream task'),
                    this.initiateHeartbeat({
                        streamKey: t,
                        applicationId: g.r.build(i.config).application.id,
                        questId: i.id
                    }));
            }),
            v(this, 'handleStreamStart', (e) => {
                let { streamType: t, guildId: n, channelId: r } = e,
                    i = b(),
                    a = (0, u.V9)({
                        streamType: t,
                        guildId: n,
                        channelId: r,
                        ownerId: d.default.getId()
                    });
                null == i
                    ? (C.log('handleStreamStart - calling terminateHeartbeat for streamKey '.concat(a)),
                      this.terminateHeartbeat({
                          streamKey: a,
                          sendTerminalHeartbeat: !0
                      }))
                    : L(r) &&
                      D(i) &&
                      !(0, m.$H)(i) &&
                      !this.streamKeyToHeartbeatState.has(a) &&
                      (C.log('handleStreamStart - initiating heartbeat for stream task'),
                      this.initiateHeartbeat({
                          streamKey: a,
                          applicationId: g.r.build(i.config).application.id,
                          questId: i.id
                      }));
            }),
            v(this, 'handleStreamClose', (e) => {
                let { streamKey: t } = e;
                C.log('handleStreamClose - terminating heartbeat'),
                    this.terminateHeartbeat({
                        streamKey: t,
                        sendTerminalHeartbeat: !0
                    });
            }),
            v(this, 'actions', {
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
                EMBEDDED_ACTIVITY_UPDATE_V2: (e) => {
                    let { location: t } = e;
                    return this.handleEmbeddedActivityUpdate(t.channel_id);
                }
            });
    }
}
t.ZP = new w();
