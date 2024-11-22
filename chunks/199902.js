let r, i, a, s;
n(47120), n(653041), n(724458);
var o,
    l = n(442837),
    u = n(570140),
    c = n(258609),
    d = n(594190),
    f = n(569545),
    _ = n(102172),
    p = n(139656),
    h = n(855403),
    m = n(314897),
    g = n(592125),
    E = n(430824),
    v = n(131951),
    I = n(496675),
    b = n(19780),
    T = n(944486),
    S = n(979651),
    y = n(981631),
    A = n(70722);
function N(e, t, n) {
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
let C = null,
    R = {},
    O = null;
function D() {
    (r = new Map()), (i = {}), (a = {}), (s = {});
}
D();
function L(e) {
    r.delete(e);
}
function x() {
    let e = [];
    for (let t in i) {
        let n = i[t];
        for (let r in n) e.push(i[t][r]);
    }
    return e;
}
function w(e) {
    let { streamKey: t, region: n, viewerIds: i, paused: s } = e;
    r.set(t, {
        ...(0, f.my)(t),
        state: s ? y.jm8.PAUSED : y.jm8.ACTIVE
    }),
        (a[t] = {
            streamKey: t,
            region: n,
            viewerIds: i
        });
}
function M(e, t) {
    let n = g.Z.getBasicChannel(t);
    return e === A.lo.CALL || (null != n && I.Z.canBasicChannel(y.S7T.VIEW_CHANNEL, n));
}
function P(e) {
    if (M(e.streamType, e.channelId)) return !0;
    let t = g.Z.getBasicChannel(e.channelId);
    return null != t && (0, _.p9)(t, S.Z, E.Z, I.Z, c.Z)[0];
}
class k extends (o = l.ZP.PersistedStore) {
    initialize(e) {
        this.syncWith([I.Z], () => !0), this.waitFor(d.ZP, I.Z), (null == e ? void 0 : e.selfStreamParticipantsHidden) !== void 0 && Object.assign(R, null == e ? void 0 : e.selfStreamParticipantsHidden);
    }
    getState() {
        return { selfStreamParticipantsHidden: R };
    }
    isSelfStreamHidden(e) {
        var t;
        return null !== (t = R[e]) && void 0 !== t && t;
    }
    getLastActiveStream() {
        var e;
        return (0, p.Z)(v.Z) ? (null !== (e = Array.from(r.values()).pop()) && void 0 !== e ? e : null) : null;
    }
    getAllActiveStreams() {
        return (0, p.Z)(v.Z) ? Array.from(r.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, p.Z)(v.Z) ? Array.from(r.values()).filter((t) => t.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        var t;
        return (0, p.Z)(v.Z) ? (null !== (t = r.get(e)) && void 0 !== t ? t : null) : null;
    }
    getActiveStreamForApplicationStream(e) {
        var t;
        if (!(0, p.Z)(v.Z) || null == e) return null;
        let n = (0, f.V9)(e);
        return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null;
    }
    getCurrentUserActiveStream() {
        let e = T.Z.getVoiceChannelId(),
            t = g.Z.getChannel(e);
        return null == t ? null : this.getActiveStreamForUser(m.default.getId(), t.getGuildId());
    }
    getActiveStreamForUser(e, t) {
        var n;
        let r = this.getStreamForUser(e, t);
        return null != r ? this.getActiveStreamForApplicationStream(r) : null !== (n = this.getAllActiveStreams().find((t) => t.ownerId === e)) && void 0 !== n ? n : null;
    }
    getStreamerActiveStreamMetadata() {
        var e;
        let t = T.Z.getVoiceChannelId(),
            n = g.Z.getChannel(t);
        if (null == n) return null;
        let r = this.getActiveStreamForUser(m.default.getId(), n.getGuildId());
        return null == r ? null : null !== (e = s[(0, f.V9)(r)]) && void 0 !== e ? e : null;
    }
    getStreamerActiveStreamMetadataForStream(e) {
        var t;
        return null !== (t = s[e]) && void 0 !== t ? t : null;
    }
    getIsActiveStreamPreviewDisabled(e) {
        var t;
        let n = s[e];
        return null !== (t = null == n ? void 0 : n.previewDisabled) && void 0 !== t && t;
    }
    getAnyStreamForUser(e) {
        var t;
        if (!(0, p.Z)(v.Z)) return null;
        let n = i[e];
        return null == n ? null : null !== (t = Object.values(n).find((e) => P(e))) && void 0 !== t ? t : null;
    }
    getAnyDiscoverableStreamForUser(e) {
        var t;
        if (!(0, p.Z)(v.Z)) return null;
        let n = i[e];
        return null == n ? null : null !== (t = Object.values(n).find((e) => P(e) && !1 !== e.discoverable)) && void 0 !== t ? t : null;
    }
    getStreamForUser(e, t) {
        var n;
        if (!(0, p.Z)(v.Z)) return null;
        let r = null === (n = i[e]) || void 0 === n ? void 0 : n[null != t ? t : y.kod];
        return null != r && P(r) ? r : null;
    }
    getRTCStream(e) {
        var t;
        return (0, p.Z)(v.Z) ? (null !== (t = a[e]) && void 0 !== t ? t : null) : null;
    }
    getAllApplicationStreams() {
        return (0, p.Z)(v.Z) ? x().filter((e) => null != e && M(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, p.Z)(v.Z) ? x().filter((t) => null != t && t.channelId === e && M(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, p.Z)(v.Z)) return [];
        let t = null,
            n = null != (t = 'string' == typeof e ? e : (0, f.V9)(e)) ? a[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return O;
    }
    getStreamingState() {
        return (0, p.Z)(v.Z)
            ? {
                  activeStreams: Array.from(r.entries()),
                  streamsByUserAndGuild: i,
                  rtcStreams: a,
                  streamerActiveStreamMetadatas: s
              }
            : {
                  activeStreams: [],
                  streamsByUserAndGuild: {},
                  rtcStreams: {},
                  streamerActiveStreamMetadatas: {}
              };
    }
}
N(k, 'displayName', 'ApplicationStreamingStore'),
    N(k, 'persistKey', 'ApplicationStreamingStore'),
    (t.Z = new k(u.Z, {
        OVERLAY_INITIALIZE: function (e) {
            let { applicationStreamState: t } = e;
            (i = t.streamsByUserAndGuild), (r = new Map(t.activeStreams)), (a = t.rtcStreams), (s = t.streamerActiveStreamMetadatas);
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                let { userId: n, guildId: r, channelId: a, sessionId: s, selfStream: o, discoverable: l } = t;
                if (o && null != a) {
                    var u, c;
                    return (
                        null ==
                            i[
                                (u = {
                                    streamType: null != r ? A.lo.GUILD : A.lo.CALL,
                                    ownerId: n,
                                    guildId: r,
                                    channelId: a,
                                    discoverable: l
                                }).ownerId
                            ] && (i[u.ownerId] = {}),
                        (i[u.ownerId][null !== (c = u.guildId) && void 0 !== c ? c : y.kod] = u),
                        !0
                    );
                }
                {
                    let t = m.default.getSessionId();
                    return n === m.default.getId() && s !== t && null != b.Z.getChannelId()
                        ? e
                        : (function (e, t) {
                              var n;
                              let r = null != t ? t : y.kod;
                              return (null === (n = i[e]) || void 0 === n ? void 0 : n[r]) != null && (delete i[e][r], !0);
                          })(n, r) || e;
                }
            }, !1);
        },
        STREAM_WATCH: function (e) {
            let { streamKey: t } = e,
                n = (0, f.my)(t);
            r.delete(t),
                r.set(t, {
                    ...n,
                    state: y.jm8.CONNECTING
                }),
                n.ownerId === m.default.getId() && (R[n.channelId] = !1);
        },
        STREAM_START: function (e) {
            var t;
            let { streamType: n, guildId: i, channelId: a, pid: o, sourceName: l, sourceId: u, previewDisabled: c } = e,
                _ = (0, f.V9)({
                    streamType: n,
                    guildId: i,
                    channelId: a,
                    ownerId: m.default.getId()
                }),
                p = null !== (t = null != o ? d.ZP.getGameForPID(o) : null != u ? d.ZP.getRunningGames().find((e) => (0, h.Z)(u, e.windowHandle)) : null) && void 0 !== t ? t : null;
            (s[_] = {
                id: null == p ? void 0 : p.id,
                pid: o,
                sourceName: l,
                previewDisabled: c
            }),
                r.delete(_),
                r.set(_, {
                    streamType: n,
                    guildId: i,
                    channelId: a,
                    ownerId: m.default.getId(),
                    state: y.jm8.CONNECTING
                });
        },
        STREAM_STOP: function (e) {
            let { streamKey: t } = e;
            s[t] = null;
        },
        STREAM_CREATE: w,
        STREAM_UPDATE: w,
        STREAM_TIMED_OUT: function (e) {
            let { streamKey: t } = e,
                n = r.get(t);
            if (null == n) return !1;
            r.set(t, {
                ...n,
                state: y.jm8.FAILED
            });
        },
        STREAM_DELETE: function (e) {
            let { streamKey: t, unavailable: i, reason: s } = e;
            delete a[t];
            let o = r.get(t);
            if (null == o) return !1;
            let l = y.jm8.ENDED;
            if (i) l = y.jm8.RECONNECTING;
            else if (s === y.si2.UNAUTHORIZED) l = y.jm8.FAILED;
            else if (s === y.si2.SAFETY_GUILD_RATE_LIMITED) {
                let { guildId: e } = (0, f.my)(t);
                n
                    .e('76731')
                    .then(n.bind(n, 626892))
                    .then((t) => {
                        let { default: n } = t;
                        n(e);
                    }),
                    (l = y.jm8.ENDED);
            }
            r.set(t, {
                ...o,
                state: l
            }),
                l === y.jm8.ENDED && C !== t && L(t);
        },
        STREAM_CLOSE: function (e) {
            let { streamKey: t } = e;
            L(t);
        },
        STREAM_UPDATE_SELF_HIDDEN: function (e) {
            let { channelId: t, selfStreamHidden: n } = e;
            (0, f.DB)(C) && (null == C ? void 0 : C.includes(m.default.getId())) && !1 === R[t] && !0 === n && (C = null), (R[t] = n);
        },
        SET_STREAM_APP_INTENT: function (e) {
            let { intent: t } = e;
            O = t;
        },
        RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n } = e;
            if (null == t) return !1;
            let i = r.get(t);
            if (null == i || i.state === y.jm8.ENDED) return !1;
            let a = i.state;
            switch (n) {
                case y.hes.DISCONNECTED:
                    a = y.jm8.RECONNECTING;
                    break;
                case y.hes.RTC_CONNECTED:
                    a = y.jm8.ACTIVE;
            }
            if (a === i.state) return !1;
            r.set(t, {
                ...i,
                state: a
            });
        },
        CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
            let { id: t, channelId: n } = e;
            if (
                ((C = t),
                Array.from(r.values()).forEach((e) => {
                    (0, f.V9)(e) !== C && e.state === y.jm8.ENDED && L((0, f.V9)(e));
                }),
                null != t)
            )
                (0, f.DB)(t) && t.includes(m.default.getId()) && (R[n] = !1);
        },
        CONNECTION_OPEN: D,
        CONNECTION_CLOSED: D,
        LOGOUT: D
    }));
