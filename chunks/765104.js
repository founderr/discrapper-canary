let r, i, a, o;
var s,
    l,
    u = n(536091);
var c = n(47120);
var d = n(653041);
var _ = n(724458);
var E = n(392711),
    f = n.n(E),
    h = n(442837),
    p = n(570140),
    m = n(902840),
    I = n(212819),
    T = n(353926),
    g = n(823385),
    S = n(592125),
    A = n(430824),
    v = n(306680),
    N = n(944486),
    O = n(9156),
    R = n(594174),
    C = n(70956),
    y = n(709054),
    b = n(418088),
    L = n(814249);
function D(e, t, n) {
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
!(function (e) {
    (e.FETCHING = 'fetching'), (e.OK = 'ok'), (e.ERROR = 'error');
})(s || (s = {}));
let M = {},
    P = {},
    U = {},
    w = [],
    x = {},
    G = {
        status: 'ok',
        lastRequest: null,
        lastResponse: null
    },
    k = [],
    B = [],
    F = 75,
    Z = 25;
function V() {
    k = g.Z.getProps()
        .results.filter((e) => e.type === I.h8.TEXT_CHANNEL && 0 === e.record.type)
        .map((e) => e.record.id);
}
class H extends (l = h.ZP.PersistedStore) {
    getState() {
        return { shouldShowTopicsBar: r };
    }
    initialize(e) {
        var t;
        (r = null === (t = null == e ? void 0 : e.shouldShowTopicsBar) || void 0 === t || t), this.waitFor(S.Z, R.default, N.Z, A.Z, T.Z), this.syncWith([g.Z], V);
    }
    allSummaries() {
        return M;
    }
    topSummaries() {
        return Object.values(M)
            .flat()
            .filter((e) => e.people.length > 1 && y.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * C.Z.Millis.HOUR)
            .sort((e, t) => y.default.extractTimestamp(t.endId) - y.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        var t;
        return null !== (t = M[e]) && void 0 !== t ? t : B;
    }
    shouldShowTopicsBar() {
        return r;
    }
    findSummary(e, t) {
        var n;
        return null !== (n = this.summaries(e).find((e) => e.id === t)) && void 0 !== n ? n : null;
    }
    selectedSummary(e) {
        return null != o && o.channelId === e && null != o.summaryId ? this.findSummary(e, null == o ? void 0 : o.summaryId) : null;
    }
    summaryFeedback(e) {
        return null == e ? null : U[e.id];
    }
    isFetching(e, t) {
        var n, r;
        return null != t ? (null === (r = P[e]) || void 0 === r ? void 0 : r.summaryId) === t : (null === (n = P[e]) || void 0 === n ? void 0 : n.fetching) === !0;
    }
    status(e) {
        return P[e];
    }
    shouldFetch(e, t) {
        var n, r;
        let i = P[e],
            a = S.Z.getChannel(e);
        if (!(0, m.Lp)(a)) return !1;
        if (null != t) {
            let e = null !== (n = null == i ? void 0 : i.summaryIdLastRequestedAt) && void 0 !== n ? n : 0,
                r = Date.now() - e;
            return t !== (null == i ? void 0 : i.summaryId) || r > L.cS;
        }
        let o = null !== (r = null == i ? void 0 : i.lastReceivedAt) && void 0 !== r ? r : 0;
        return !(null == i ? void 0 : i.fetching) && 0 === o;
    }
    channelAffinities() {
        return w;
    }
    channelAffinitiesById(e) {
        return null == e ? x : x[e];
    }
    channelAffinitiesStatus() {
        return G;
    }
    shouldFetchChannelAffinities() {
        return !('fetching' === G.status || (null != G.lastResponse && Date.now() - G.lastResponse < 30 * C.Z.Millis.SECOND)) && !0;
    }
    defaultChannelIds(e) {
        let { withQuickSwitcher: t, withChannelAffinities: n, withUnreads: r, numChannels: i = Z } = e,
            a = [];
        return (
            t && (a = a.concat(k)),
            n && (a = a.concat(w.map((e) => e.channel_id))),
            r &&
                (a = a.filter((e) => {
                    let t = S.Z.getChannel(e);
                    return null != t && !O.ZP.isChannelMuted(t.guild_id, e) && v.ZP.hasUnread(e);
                })),
            (a = a.filter((e) => {
                let t = S.Z.getChannel(e);
                return (0, m.Lp)(t, !1, !1);
            })).slice(0, i)
        );
    }
    visibleSummaryIndex() {
        return a;
    }
}
function Y(e, t, n, r) {
    let i = null == t || t < n;
    return !(null == e || e > r) && !i;
}
D(H, 'persistKey', 'SummaryStore');
let j = new H(p.Z, {
    CONNECTION_OPEN: () => !1,
    CHANNEL_SELECT(e) {
        let { channelId: t } = e;
        (null == o ? void 0 : o.channelId) !== t && (o = null);
    },
    TOGGLE_TOPICS_BAR() {
        r = !r;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
        var t, n;
        let { summary: r, channelId: i, error: a, receivedAt: o } = e;
        if (null != r && Object.keys(r).length > 0) {
            let e = (0, b.b)(r, i),
                n = [...(null !== (t = M[i]) && void 0 !== t ? t : [])],
                a = n.findIndex((t) => t.id === (null == e ? void 0 : e.id));
            a > -1 ? (n[a] = e) : n.push(e), (M[i] = n);
        }
        let s = {
            ...(null !== (n = P[i]) && void 0 !== n ? n : { fetching: !1 }),
            summaryId: void 0,
            summaryIdLastReceivedAt: o,
            summaryIdError: a
        };
        P[i] = s;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        var t;
        let { channelId: n, summaryId: r, requestedAt: i } = e;
        P[n] = {
            ...(null !== (t = P[n]) && void 0 !== t ? t : { fetching: !1 }),
            summaryId: r,
            summaryIdLastRequestedAt: i
        };
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: t, channelId: n, error: r, receivedAt: i } = e,
            a = t.filter((e) => Object.keys(e).length > 0).map((e) => (0, b.b)(e, n));
        if (null != o && o.channelId === n && !a.some((e) => e.id === (null == o ? void 0 : o.summaryId))) {
            var s;
            let e = (null !== (s = M[n]) && void 0 !== s ? s : []).find((e) => e.id === (null == o ? void 0 : o.summaryId));
            null != e && a.push(e);
        }
        M[n] = (0, E.sortBy)(a, (e) => y.default.extractTimestamp(e.startId)).reverse();
        let l = {
            ...P[n],
            fetching: !1,
            error: void 0,
            lastReceivedAt: i
        };
        null != r && (l.error = r), (P[n] = l);
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        var t;
        P[e.channelId] = {
            ...(null !== (t = P[e.channelId]) && void 0 !== t ? t : {}),
            fetching: !0,
            lastRequestedAt: e.requestedAt
        };
    },
    SET_HIGHLIGHTED_SUMMARY(e) {
        var t;
        if ((null == i && null == e.channelId) || (e.channelId === (null == i ? void 0 : i.channelId) && e.summaryId === (null == i ? void 0 : i.summaryId))) return !1;
        if (
            null !=
                (i =
                    null != e.channelId
                        ? {
                              channelId: e.channelId,
                              summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
                          }
                        : null) &&
            i.channelId === e.channelId &&
            null != i.summaryId
        ) {
            let e = M[i.channelId];
            a = null == e ? void 0 : e.findIndex((e) => e.id === (null == i ? void 0 : i.summaryId));
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let t = N.Z.getChannelId();
        if (null != t) {
            if (null != i && i.channelId === t && null != i.summaryId) {
                let e = M[i.channelId];
                a = null == e ? void 0 : e.findIndex((e) => e.id === (null == i ? void 0 : i.summaryId));
            } else {
                var n;
                a = null === (n = M[t]) || void 0 === n ? void 0 : n.findIndex((t) => Y(e.topVisibleMessage, e.bottomVisibleMessage, t.startId, t.endId));
            }
        }
    },
    SET_SELECTED_SUMMARY(e) {
        var t;
        let n = e.channelId;
        return null == n
            ? null
            : (n !== (null == o ? void 0 : o.channelId) || e.summaryId !== (null == o ? void 0 : o.summaryId)) &&
                  void (o = {
                      channelId: n,
                      summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
                  });
    },
    SET_SUMMARY_FEEDBACK(e) {
        let { summary: t, rating: n } = e;
        null != n ? (U[t.id] = n) : delete U[t.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
        G = {
            ...G,
            status: 'fetching',
            lastRequest: Date.now()
        };
    },
    RECEIVE_CHANNEL_AFFINITIES(e) {
        var t;
        let { affinities: n, error: r } = e;
        if (null != r) {
            (w = []),
                (x = {}),
                (G = {
                    ...G,
                    status: 'error',
                    lastResponse: Date.now()
                });
            return;
        }
        (w = null != n ? n : []),
            (x = null !== (t = null == n ? void 0 : n.reduce((e, t) => ((e[t.channel_id] = t.affinity), e), {})) && void 0 !== t ? t : {}),
            (G = {
                ...G,
                status: 'ok',
                lastResponse: Date.now()
            });
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
        let { channelIds: t, requestedAt: n } = e,
            r = t.reduce((e, t) => {
                var r;
                let i = null !== (r = P[t]) && void 0 !== r ? r : {};
                return (
                    (e[t] = {
                        ...i,
                        fetching: !0,
                        lastRequestedAt: n,
                        error: void 0
                    }),
                    e
                );
            }, {});
        P = {
            ...P,
            ...r
        };
    },
    RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
        let {
                summaries: t,
                receivedAt: n,
                error: r,
                requestArgs: { channelIds: i }
            } = e,
            a = f()
                .toPairs(t)
                .reduce((e, t) => {
                    let [n, r] = t,
                        i = f()
                            .chain(r.map((e) => (0, b.b)(e, n)))
                            .sortBy((e) => y.default.extractTimestamp(e.startId))
                            .takeRight(F)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return (e[n] = i), e;
                }, {}),
            o = i.reduce(
                (e, t) => {
                    var i;
                    let o = null !== (i = P[t]) && void 0 !== i ? i : {},
                        s = a[t];
                    return (
                        null != s && (e.summariesByChannel[t] = s),
                        (e.summaryFetchStatusByChannel[t] = {
                            ...o,
                            fetching: !1,
                            error: r,
                            lastReceivedAt: n
                        }),
                        e
                    );
                },
                {
                    summariesByChannel: {},
                    summaryFetchStatusByChannel: {}
                }
            );
        (M = {
            ...M,
            ...o.summariesByChannel
        }),
            (P = {
                ...P,
                ...o.summaryFetchStatusByChannel
            });
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        var t, n, r;
        let { channel_id: i, summaries: a, guild_id: o } = e,
            s = Date.now(),
            l = f()
                .chain(a)
                .sortBy((e) => y.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => (0, b.b)(e, i))
                .reverse()
                .value(),
            u = null !== (n = M[i]) && void 0 !== n ? n : [],
            c = f()
                .chain(l)
                .concat(u)
                .sortBy((e) => y.default.extractTimestamp(e.startId))
                .takeRight(F)
                .uniqBy('id')
                .reverse()
                .value();
        (M[i] = c),
            (P[i] = {
                ...P[i],
                error: void 0,
                fetching: null !== (r = null === (t = P[i]) || void 0 === t ? void 0 : t.fetching) && void 0 !== r && r,
                lastReceivedAt: s
            });
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        (M = {}), (P = {});
    },
    DELETE_SUMMARY(e) {
        var t;
        let n = e.summary.channelId,
            r = (null !== (t = M[n]) && void 0 !== t ? t : []).indexOf(e.summary);
        -1 !== r && M[n].splice(r, 1);
    }
});
t.Z = j;
