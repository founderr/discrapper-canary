let r, i, a, s;
n(47120), n(653041), n(724458);
var o,
    l,
    u,
    c,
    d = n(442837),
    f = n(570140),
    _ = n(258609),
    h = n(594190),
    p = n(569545),
    m = n(382182),
    g = n(139656),
    E = n(855403),
    v = n(314897),
    I = n(592125),
    S = n(430824),
    T = n(131951),
    b = n(496675),
    y = n(19780),
    A = n(944486),
    N = n(979651),
    C = n(981631),
    R = n(70722);
let O = null,
    D = {},
    L = null;
function x() {
    (r = new Map()), (i = {}), (a = {}), (s = {}), (D = {});
}
x();
function w(e) {
    r.delete(e);
}
function M() {
    let e = [];
    for (let t in i) {
        let n = i[t];
        for (let r in n) e.push(i[t][r]);
    }
    return e;
}
function P(e) {
    let { streamKey: t, region: n, viewerIds: i, paused: s } = e;
    r.set(t, {
        ...(0, p.my)(t),
        state: s ? C.jm8.PAUSED : C.jm8.ACTIVE
    }),
        (a[t] = {
            streamKey: t,
            region: n,
            viewerIds: i
        });
}
function k(e, t) {
    let n = I.Z.getBasicChannel(t);
    return e === R.lo.CALL || (null != n && b.Z.canBasicChannel(C.S7T.VIEW_CHANNEL, n));
}
function U(e) {
    if (k(e.streamType, e.channelId)) return !0;
    let t = I.Z.getBasicChannel(e.channelId);
    return null != t && (0, m.p9)(t, N.Z, S.Z, b.Z, _.Z)[0];
}
class G extends (o = d.ZP.Store) {
    initialize() {
        this.syncWith([b.Z], () => !0), this.waitFor(h.ZP, b.Z);
    }
    isSelfStreamHidden(e) {
        var t;
        return null !== (t = D[e]) && void 0 !== t && t;
    }
    getLastActiveStream() {
        var e;
        return (0, g.Z)(T.Z) ? (null !== (e = Array.from(r.values()).pop()) && void 0 !== e ? e : null) : null;
    }
    getAllActiveStreams() {
        return (0, g.Z)(T.Z) ? Array.from(r.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, g.Z)(T.Z) ? Array.from(r.values()).filter((t) => t.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        var t;
        return (0, g.Z)(T.Z) ? (null !== (t = r.get(e)) && void 0 !== t ? t : null) : null;
    }
    getActiveStreamForApplicationStream(e) {
        var t;
        if (!(0, g.Z)(T.Z) || null == e) return null;
        let n = (0, p.V9)(e);
        return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null;
    }
    getCurrentUserActiveStream() {
        let e = A.Z.getVoiceChannelId(),
            t = I.Z.getChannel(e);
        return null == t ? null : this.getActiveStreamForUser(v.default.getId(), t.getGuildId());
    }
    getActiveStreamForUser(e, t) {
        var n;
        let r = this.getStreamForUser(e, t);
        return null != r ? this.getActiveStreamForApplicationStream(r) : null !== (n = this.getAllActiveStreams().find((t) => t.ownerId === e)) && void 0 !== n ? n : null;
    }
    getStreamerActiveStreamMetadata() {
        var e;
        let t = A.Z.getVoiceChannelId(),
            n = I.Z.getChannel(t);
        if (null == n) return null;
        let r = this.getActiveStreamForUser(v.default.getId(), n.getGuildId());
        return null == r ? null : null !== (e = s[(0, p.V9)(r)]) && void 0 !== e ? e : null;
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
        if (!(0, g.Z)(T.Z)) return null;
        let n = i[e];
        return null == n ? null : null !== (t = Object.values(n).find((e) => U(e))) && void 0 !== t ? t : null;
    }
    getAnyDiscoverableStreamForUser(e) {
        var t;
        if (!(0, g.Z)(T.Z)) return null;
        let n = i[e];
        return null == n ? null : null !== (t = Object.values(n).find((e) => U(e) && !1 !== e.discoverable)) && void 0 !== t ? t : null;
    }
    getStreamForUser(e, t) {
        var n;
        if (!(0, g.Z)(T.Z)) return null;
        let r = null === (n = i[e]) || void 0 === n ? void 0 : n[null != t ? t : C.kod];
        return null != r && U(r) ? r : null;
    }
    getRTCStream(e) {
        var t;
        return (0, g.Z)(T.Z) ? (null !== (t = a[e]) && void 0 !== t ? t : null) : null;
    }
    getAllApplicationStreams() {
        return (0, g.Z)(T.Z) ? M().filter((e) => null != e && k(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, g.Z)(T.Z) ? M().filter((t) => null != t && t.channelId === e && k(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, g.Z)(T.Z)) return [];
        let t = null,
            n = null != (t = 'string' == typeof e ? e : (0, p.V9)(e)) ? a[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return L;
    }
    getState() {
        return (0, g.Z)(T.Z)
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
(c = 'ApplicationStreamingStore'),
    (u = 'displayName') in (l = G)
        ? Object.defineProperty(l, u, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[u] = c),
    (t.Z = new G(f.Z, {
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
                                    streamType: null != r ? R.lo.GUILD : R.lo.CALL,
                                    ownerId: n,
                                    guildId: r,
                                    channelId: a,
                                    discoverable: l
                                }).ownerId
                            ] && (i[u.ownerId] = {}),
                        (i[u.ownerId][null !== (c = u.guildId) && void 0 !== c ? c : C.kod] = u),
                        !0
                    );
                }
                {
                    let t = v.default.getSessionId();
                    return n === v.default.getId() && s !== t && null != y.Z.getChannelId()
                        ? e
                        : (function (e, t) {
                              var n;
                              let r = null != t ? t : C.kod;
                              return (null === (n = i[e]) || void 0 === n ? void 0 : n[r]) != null && (delete i[e][r], !0);
                          })(n, r) || e;
                }
            }, !1);
        },
        STREAM_WATCH: function (e) {
            let { streamKey: t } = e,
                n = (0, p.my)(t);
            r.delete(t),
                r.set(t, {
                    ...n,
                    state: C.jm8.CONNECTING
                }),
                n.ownerId === v.default.getId() && (D[n.channelId] = !1);
        },
        STREAM_START: function (e) {
            var t;
            let { streamType: n, guildId: i, channelId: a, pid: o, sourceName: l, sourceId: u, previewDisabled: c } = e,
                d = (0, p.V9)({
                    streamType: n,
                    guildId: i,
                    channelId: a,
                    ownerId: v.default.getId()
                }),
                f = null !== (t = null != o ? h.ZP.getGameForPID(o) : null != u ? h.ZP.getRunningGames().find((e) => (0, E.Z)(u, e.windowHandle)) : null) && void 0 !== t ? t : null;
            (s[d] = {
                id: null == f ? void 0 : f.id,
                pid: o,
                sourceName: l,
                previewDisabled: c
            }),
                r.delete(d),
                r.set(d, {
                    streamType: n,
                    guildId: i,
                    channelId: a,
                    ownerId: v.default.getId(),
                    state: C.jm8.CONNECTING
                });
        },
        STREAM_STOP: function (e) {
            let { streamKey: t } = e;
            s[t] = null;
        },
        STREAM_CREATE: P,
        STREAM_UPDATE: P,
        STREAM_TIMED_OUT: function (e) {
            let { streamKey: t } = e,
                n = r.get(t);
            if (null == n) return !1;
            r.set(t, {
                ...n,
                state: C.jm8.FAILED
            });
        },
        STREAM_DELETE: function (e) {
            let { streamKey: t, unavailable: i, reason: s } = e;
            delete a[t];
            let o = r.get(t);
            if (null == o) return !1;
            let l = C.jm8.ENDED;
            if (i) l = C.jm8.RECONNECTING;
            else if (s === C.si2.UNAUTHORIZED) l = C.jm8.FAILED;
            else if (s === C.si2.SAFETY_GUILD_RATE_LIMITED) {
                let { guildId: e } = (0, p.my)(t);
                n
                    .e('76731')
                    .then(n.bind(n, 626892))
                    .then((t) => {
                        let { default: n } = t;
                        n(e);
                    }),
                    (l = C.jm8.ENDED);
            }
            r.set(t, {
                ...o,
                state: l
            }),
                l === C.jm8.ENDED && O !== t && w(t);
        },
        STREAM_CLOSE: function (e) {
            let { streamKey: t } = e;
            w(t);
        },
        STREAM_UPDATE_SELF_HIDDEN: function (e) {
            let { channelId: t, selfStreamHidden: n } = e;
            (0, p.DB)(O) && (null == O ? void 0 : O.includes(v.default.getId())) && !1 === D[t] && !0 === n && (O = null), (D[t] = n);
        },
        SET_STREAM_APP_INTENT: function (e) {
            let { intent: t } = e;
            L = t;
        },
        RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n } = e;
            if (null == t) return !1;
            let i = r.get(t);
            if (null == i || i.state === C.jm8.ENDED) return !1;
            let a = i.state;
            switch (n) {
                case C.hes.DISCONNECTED:
                    a = C.jm8.RECONNECTING;
                    break;
                case C.hes.RTC_CONNECTED:
                    a = C.jm8.ACTIVE;
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
                ((O = t),
                Array.from(r.values()).forEach((e) => {
                    (0, p.V9)(e) !== O && e.state === C.jm8.ENDED && w((0, p.V9)(e));
                }),
                null != t)
            )
                (0, p.DB)(t) && t.includes(v.default.getId()) && (D[n] = !1);
        },
        CONNECTION_OPEN: x,
        CONNECTION_CLOSED: x,
        LOGOUT: x
    }));
