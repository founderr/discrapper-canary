var i,
    a = r(47120);
var s = r(754700),
    o = r(147913),
    l = r(317381),
    u = r(594190),
    c = r(569545),
    d = r(199902),
    f = r(314897),
    _ = r(77498),
    h = r(938475),
    p = r(70956),
    m = r(272008),
    g = r(569984),
    E = r(918701),
    v = r(432945),
    I = r(5881),
    T = r(566078),
    b = r(46140),
    y = r(70722);
function S(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let A = 1 * p.Z.Millis.MINUTE,
    N = 2,
    C = 1 * p.Z.Millis.SECOND,
    R = (0, I.T)({ location: b.dr.QUESTS_MANAGER }),
    O = (e) =>
        (0, c.V9)({
            streamType: y.lo.CALL,
            channelId: e,
            ownerId: '1'
        });
function D() {
    let e = d.Z.getStreamerActiveStreamMetadata();
    if ((null == e ? void 0 : e.id) == null) return null;
    let n = _.Z.getDetectableGame(e.id);
    if ((null == n ? void 0 : n.id) == null) return null;
    let r = (0, E.lQ)(g.Z.quests, n.id);
    return null != r && x(r) ? r : null;
}
function L(e) {
    return h.ZP.countVoiceStatesForChannel(e) >= N;
}
function x(e) {
    return !(0, E.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function w(e) {
    var n;
    let { questId: r, streamKey: i, applicationId: a } = e,
        { channelId: s } = (0, c.my)(i),
        o = L(s),
        l = g.Z.quests.get(r);
    if (null == l || !x(l)) return 'STOP';
    let f = null === (n = D()) || void 0 === n ? void 0 : n.config,
        _ = null != d.Z.getRTCStream(i) && null != f && T.r.build(f).application.id === a && o,
        { quest: h, activity: p } = P(),
        m = null != (null == h ? void 0 : h.config) && (null == h ? void 0 : h.id) === r && (0, E.UZ)(a, h) && (null == p ? void 0 : p.channelId) === s,
        v = u.ZP.getRunningGames().map((e) => e.id),
        I = (0, E.$H)(l) && v.includes(a);
    return _ || m || I ? 'BEAT' : 'BEAT_TERMINAL';
}
function P(e) {
    let n = {
        quest: null,
        activity: null
    };
    if (
        !(0, v.S)({
            location: b.dr.QUESTS_MANAGER,
            autoTrackExposure: !1
        })
    )
        return n;
    for (let i of l.ZP.getSelfEmbeddedActivities().values()) {
        var r;
        if (null != e && i.channelId !== e) continue;
        let a = null !== (r = (0, E.tF)(g.Z.quests, i)) && void 0 !== r ? r : null;
        if (null != a && x(a))
            return {
                quest: a,
                activity: i
            };
        n = {
            quest: null,
            activity: i
        };
    }
    return n;
}
!(function (e) {
    (e.BEAT = 'BEAT'), (e.STOP = 'STOP'), (e.BEAT_TERMINAL = 'BEAT_TERMINAL');
})(i || (i = {}));
class M extends o.Z {
    constructor(...e) {
        super(...e),
            S(this, 'streamKeyToHeartbeatState', new Map()),
            S(this, 'initiateHeartbeat', (e) => {
                let { questId: n, streamKey: r, applicationId: i } = e;
                if (this.streamKeyToHeartbeatState.has(r)) {
                    R.log('~ initiateHeartbeat -> Heartbeat already initiated:', r);
                    return;
                }
                let a = () => {
                    let e = w({
                        questId: n,
                        streamKey: r,
                        applicationId: i
                    });
                    if ((R.log('~ initiateHeartbeat -> streamkey '.concat(r, '. heartbeat decision: '), e), 'BEAT' === e)) {
                        (0, m.m0)({
                            questId: n,
                            streamKey: r
                        });
                        let e = this.calculateHeartbeatDurationMs(n),
                            i = window.setTimeout(a, e);
                        this.streamKeyToHeartbeatState.set(r, {
                            heartbeatTimeoutId: i,
                            questId: n
                        });
                    } else
                        this.terminateHeartbeat({
                            streamKey: r,
                            sendTerminalHeartbeat: 'BEAT_TERMINAL' === e
                        });
                };
                a();
            }),
            S(this, 'calculateHeartbeatDurationMs', (e) => {
                let n = g.Z.quests.get(e);
                if (null == n || null == n.config || null == n.userStatus) return A;
                let { progressSeconds: r, targetSeconds: i } = (0, E.il)(n, s.T.DESKTOP),
                    a = Math.max(0, (i - r) * p.Z.Millis.SECOND);
                return a <= A ? a + C : A;
            }),
            S(this, 'terminateHeartbeat', (e) => {
                let { streamKey: n, sendTerminalHeartbeat: r } = e,
                    i = this.streamKeyToHeartbeatState.get(n);
                if (null != i) {
                    R.log('~ terminateHeartbeat -> Terminating heartbeat:', {
                        streamKey: n,
                        sendTerminalHeartbeat: r
                    });
                    let { questId: e, heartbeatTimeoutId: a } = i;
                    window.clearTimeout(a),
                        this.streamKeyToHeartbeatState.delete(n),
                        r &&
                            (0, m.m0)({
                                questId: e,
                                streamKey: n,
                                terminal: !0
                            });
                }
            }),
            S(this, 'terminateHeartbeatForQuestId', (e) => {
                let { previewQuestUserStatus: n } = e,
                    { questId: r, enrolledAt: i, completedAt: a } = n;
                (null === i || null === a) &&
                    this.streamKeyToHeartbeatState.forEach((e, n) => {
                        e.questId === r &&
                            (R.log('terminateHeartbeatForQuestId - terminating heartbeat for quest ID '.concat(r)),
                            this.terminateHeartbeat({
                                streamKey: n,
                                sendTerminalHeartbeat: !0
                            }));
                    });
            }),
            S(this, 'handleEnrollmentSuccess', (e) => {
                let {
                        enrolledQuestUserStatus: { questId: n }
                    } = e,
                    r = d.Z.getCurrentUserActiveStream(),
                    i = D();
                if (null != r && null != i && i.id === n && x(i)) {
                    R.log('handleEnrollmentSuccess - initiating heartbeat for stream'),
                        this.initiateHeartbeat({
                            streamKey: (0, c.V9)(r),
                            applicationId: T.r.build(i.config).application.id,
                            questId: i.id
                        });
                    return;
                }
                let { quest: a, activity: s } = P();
                if (null != s && null != a && x(a) && a.id === n) {
                    R.log('handleEnrollmentSuccess - initiating heartbeat for activity'),
                        this.initiateHeartbeat({
                            streamKey: O(s.channelId),
                            applicationId: T.r.build(a.config).application.id,
                            questId: a.id
                        });
                    return;
                }
                u.ZP.getRunningGames().forEach((e) => {
                    if (null != e.id) {
                        for (let n of (0, E.dh)(g.Z.quests, e.id))
                            if (null != n && x(n) && (0, E.$H)(n)) {
                                R.log('handleEnrollmentSuccess - initiating heartbeat for playtime task');
                                let e = O(n.id);
                                this.initiateHeartbeat({
                                    streamKey: e,
                                    applicationId: T.r.build(n.config).application.id,
                                    questId: n.id
                                });
                            }
                    }
                });
            }),
            S(this, 'handleSendHeartbeatSuccess', (e) => {
                let { streamKey: n, userStatus: r } = e;
                R.log('~ handleSendHeartbeatSuccess -> Heartbeat succeeded:', n),
                    null != r.completedAt &&
                        this.terminateHeartbeat({
                            streamKey: n,
                            sendTerminalHeartbeat: !1
                        });
            }),
            S(this, 'handleSendHeartbeatFailure', (e) => {
                let { streamKey: n } = e;
                R.log('~ handleSendHeartbeatFailure -> Heartbeat failed:', n);
            }),
            S(this, 'handleQuestsFetchCurrentQuestsSuccess', (e) => {
                let { quests: n } = e;
                R.log('~ handleQuestsFetchCurrentQuestsSuccess -> Quests fetched:', n);
                let r = u.ZP.getRunningGames().map((e) => e.id);
                n.forEach((e) => {
                    if (x(e) && (0, E.$H)(e)) {
                        let n = O(e.id),
                            i = r.includes(T.r.build(e.config).application.id),
                            a = !this.streamKeyToHeartbeatState.has(n) && i;
                        this.streamKeyToHeartbeatState.has(n) && !i
                            ? this.terminateHeartbeat({
                                  streamKey: n,
                                  sendTerminalHeartbeat: !0
                              })
                            : a &&
                              (R.log('handleQuestsFetchCurrentQuestsSuccess - initiating heartbeat for playtime task'),
                              this.initiateHeartbeat({
                                  streamKey: n,
                                  applicationId: T.r.build(e.config).application.id,
                                  questId: e.id
                              }));
                    }
                });
            }),
            S(this, 'handleRunningGamesChange', (e) => {
                let { removed: n, games: r } = e;
                R.log('~ handleRunningGamesChange -> Games detected:', {
                    runningGames: r,
                    removedGames: n
                }),
                    r.forEach((e) => {
                        if (null != e.id)
                            for (let n of (0, E.dh)(g.Z.quests, e.id)) {
                                if (!x(n)) continue;
                                let e = O(n.id);
                                (0, E.$H)(n) &&
                                    !this.streamKeyToHeartbeatState.has(e) &&
                                    (R.log('handleRunningGamesChange - initiating heartbeat for playtime task'),
                                    this.initiateHeartbeat({
                                        streamKey: e,
                                        applicationId: T.r.build(n.config).application.id,
                                        questId: n.id
                                    }));
                            }
                    }),
                    n.forEach((e) => {
                        if (null != e.id)
                            for (let n of (0, E.dh)(g.Z.quests, e.id)) {
                                if (!x(n)) continue;
                                let e = O(n.id);
                                (0, E.$H)(n) &&
                                    this.streamKeyToHeartbeatState.has(e) &&
                                    this.terminateHeartbeat({
                                        streamKey: e,
                                        sendTerminalHeartbeat: !0
                                    });
                            }
                    });
            }),
            S(this, 'handleVoiceStateChange', () => {
                let e = d.Z.getCurrentUserActiveStream(),
                    n = D();
                null != e &&
                    this._handleVoiceStateChange({
                        streamKey: (0, c.V9)(e),
                        channelId: e.channelId,
                        quest: n
                    });
            }),
            S(this, '_handleVoiceStateChange', (e) => {
                let { streamKey: n, channelId: r, quest: i } = e,
                    a = null == i || !L(r),
                    s = L(r) && !this.streamKeyToHeartbeatState.has(n) && null != i && x(i) && !(0, E.$H)(i);
                a
                    ? (R.log('handleVoiceStateChange - calling terminateHeartbeat for streamKey '.concat(n)),
                      this.terminateHeartbeat({
                          streamKey: n,
                          sendTerminalHeartbeat: !0
                      }))
                    : s &&
                      (R.log('handleVoiceStateChange - initiating heartbeat for stream task'),
                      this.initiateHeartbeat({
                          streamKey: n,
                          applicationId: T.r.build(i.config).application.id,
                          questId: i.id
                      }));
            }),
            S(this, 'handleEmbeddedActivityUpdate', (e) => {
                if (null == e) return;
                let { quest: n, activity: r } = P(e),
                    i = O(e),
                    a = (null == r || null == n) && this.streamKeyToHeartbeatState.has(i),
                    s = null != r && null != n && x(n) && !this.streamKeyToHeartbeatState.has(i);
                a
                    ? (R.log('handleEmbeddedActivityUpdate - terminating heartbeat'),
                      this.terminateHeartbeat({
                          streamKey: i,
                          sendTerminalHeartbeat: !0
                      }))
                    : s &&
                      (R.log('handleEmbeddedActivityUpdate - initiating heartbeat for activity task'),
                      this.initiateHeartbeat({
                          streamKey: i,
                          applicationId: T.r.build(n.config).application.id,
                          questId: n.id
                      }));
            }),
            S(this, 'handleStreamCreate', (e) => {
                let { streamKey: n } = e,
                    { channelId: r, ownerId: i } = (0, c.my)(n);
                if (i !== f.default.getId()) return;
                let a = D();
                if (null == a) {
                    R.log('handleStreamCreate - calling terminateHeartbeat for streamKey '.concat(n)),
                        this.terminateHeartbeat({
                            streamKey: n,
                            sendTerminalHeartbeat: !1
                        });
                    return;
                }
                L(r) &&
                    x(a) &&
                    !(0, E.$H)(a) &&
                    !this.streamKeyToHeartbeatState.has(n) &&
                    (R.log('handleStreamCreate - initiating heartbeat for stream task'),
                    this.initiateHeartbeat({
                        streamKey: n,
                        applicationId: T.r.build(a.config).application.id,
                        questId: a.id
                    }));
            }),
            S(this, 'handleStreamStart', (e) => {
                let { streamType: n, guildId: r, channelId: i } = e,
                    a = D(),
                    s = (0, c.V9)({
                        streamType: n,
                        guildId: r,
                        channelId: i,
                        ownerId: f.default.getId()
                    });
                null == a
                    ? (R.log('handleStreamStart - calling terminateHeartbeat for streamKey '.concat(s)),
                      this.terminateHeartbeat({
                          streamKey: s,
                          sendTerminalHeartbeat: !0
                      }))
                    : L(i) &&
                      x(a) &&
                      !(0, E.$H)(a) &&
                      !this.streamKeyToHeartbeatState.has(s) &&
                      (R.log('handleStreamStart - initiating heartbeat for stream task'),
                      this.initiateHeartbeat({
                          streamKey: s,
                          applicationId: T.r.build(a.config).application.id,
                          questId: a.id
                      }));
            }),
            S(this, 'handleStreamClose', (e) => {
                let { streamKey: n } = e;
                R.log('handleStreamClose - terminating heartbeat'),
                    this.terminateHeartbeat({
                        streamKey: n,
                        sendTerminalHeartbeat: !0
                    });
            }),
            S(this, 'actions', {
                QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: this.handleQuestsFetchCurrentQuestsSuccess,
                QUESTS_ENROLL_SUCCESS: this.handleEnrollmentSuccess,
                QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
                QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
                QUESTS_PREVIEW_UPDATE_SUCCESS: this.terminateHeartbeatForQuestId,
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                STREAM_START: this.handleStreamStart,
                STREAM_CREATE: this.handleStreamCreate,
                STREAM_CLOSE: this.handleStreamClose,
                PASSIVE_UPDATE_V2: this.handleVoiceStateChange,
                VOICE_STATE_UPDATES: this.handleVoiceStateChange,
                EMBEDDED_ACTIVITY_UPDATE_V2: (e) => {
                    let { location: n } = e;
                    return this.handleEmbeddedActivityUpdate(n.channel_id);
                }
            });
    }
}
n.ZP = new M();
