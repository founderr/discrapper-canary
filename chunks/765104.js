let r, i, a, s;
n(536091), n(47120), n(653041), n(724458);
var o,
    l,
    u,
    c,
    d,
    f,
    _ = n(392711),
    p = n.n(_),
    h = n(442837),
    m = n(570140),
    g = n(902840),
    E = n(212819),
    v = n(353926),
    I = n(823385),
    b = n(592125),
    T = n(430824),
    S = n(306680),
    y = n(944486),
    A = n(9156),
    N = n(594174),
    C = n(70956),
    R = n(709054),
    O = n(418088),
    D = n(814249);
((u = o || (o = {})).FETCHING = 'fetching'), (u.OK = 'ok'), (u.ERROR = 'error');
let L = {},
    x = {},
    w = {},
    M = [],
    P = {},
    k = {
        status: 'ok',
        lastRequest: null,
        lastResponse: null
    },
    U = [],
    G = [];
function B() {
    U = I.Z.getProps()
        .results.filter((e) => e.type === E.h8.TEXT_CHANNEL && 0 === e.record.type)
        .map((e) => e.record.id);
}
class Z extends (l = h.ZP.PersistedStore) {
    getState() {
        return { shouldShowTopicsBar: r };
    }
    initialize(e) {
        var t;
        (r = null === (t = null == e ? void 0 : e.shouldShowTopicsBar) || void 0 === t || t), this.waitFor(b.Z, N.default, y.Z, T.Z, v.Z), this.syncWith([I.Z], B);
    }
    allSummaries() {
        return L;
    }
    topSummaries() {
        return Object.values(L)
            .flat()
            .filter((e) => e.people.length > 1 && R.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * C.Z.Millis.HOUR)
            .sort((e, t) => R.default.extractTimestamp(t.endId) - R.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        var t;
        return null !== (t = L[e]) && void 0 !== t ? t : G;
    }
    shouldShowTopicsBar() {
        return r;
    }
    findSummary(e, t) {
        var n;
        return null !== (n = this.summaries(e).find((e) => e.id === t)) && void 0 !== n ? n : null;
    }
    selectedSummary(e) {
        return null != s && s.channelId === e && null != s.summaryId ? this.findSummary(e, null == s ? void 0 : s.summaryId) : null;
    }
    summaryFeedback(e) {
        return null == e ? null : w[e.id];
    }
    isFetching(e, t) {
        var n, r;
        return null != t ? (null === (r = x[e]) || void 0 === r ? void 0 : r.summaryId) === t : (null === (n = x[e]) || void 0 === n ? void 0 : n.fetching) === !0;
    }
    status(e) {
        return x[e];
    }
    shouldFetch(e, t) {
        var n, r;
        let i = x[e],
            a = b.Z.getChannel(e);
        if (!(0, g.Lp)(a)) return !1;
        if (null != t) {
            let e = null !== (n = null == i ? void 0 : i.summaryIdLastRequestedAt) && void 0 !== n ? n : 0,
                r = Date.now() - e;
            return t !== (null == i ? void 0 : i.summaryId) || r > D.cS;
        }
        let s = null !== (r = null == i ? void 0 : i.lastReceivedAt) && void 0 !== r ? r : 0;
        return !(null == i ? void 0 : i.fetching) && 0 === s;
    }
    channelAffinities() {
        return M;
    }
    channelAffinitiesById(e) {
        return null == e ? P : P[e];
    }
    channelAffinitiesStatus() {
        return k;
    }
    shouldFetchChannelAffinities() {
        return !('fetching' === k.status || (null != k.lastResponse && Date.now() - k.lastResponse < 30 * C.Z.Millis.SECOND)) && !0;
    }
    defaultChannelIds(e) {
        let { withQuickSwitcher: t, withChannelAffinities: n, withUnreads: r, numChannels: i = 25 } = e,
            a = [];
        return (
            t && (a = a.concat(U)),
            n && (a = a.concat(M.map((e) => e.channel_id))),
            r &&
                (a = a.filter((e) => {
                    let t = b.Z.getChannel(e);
                    return null != t && !A.ZP.isChannelMuted(t.guild_id, e) && S.ZP.hasUnread(e);
                })),
            (a = a.filter((e) => {
                let t = b.Z.getChannel(e);
                return (0, g.Lp)(t, !1, !1);
            })).slice(0, i)
        );
    }
    visibleSummaryIndex() {
        return a;
    }
}
(f = 'SummaryStore'),
    (d = 'persistKey') in (c = Z)
        ? Object.defineProperty(c, d, {
              value: f,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[d] = f);
let F = new Z(m.Z, {
    CONNECTION_OPEN: () => !1,
    CHANNEL_SELECT(e) {
        let { channelId: t } = e;
        (null == s ? void 0 : s.channelId) !== t && (s = null);
    },
    TOGGLE_TOPICS_BAR() {
        r = !r;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
        var t, n;
        let { summary: r, channelId: i, error: a, receivedAt: s } = e;
        if (null != r && Object.keys(r).length > 0) {
            let e = (0, O.b)(r, i),
                n = [...(null !== (t = L[i]) && void 0 !== t ? t : [])],
                a = n.findIndex((t) => t.id === (null == e ? void 0 : e.id));
            a > -1 ? (n[a] = e) : n.push(e), (L[i] = n);
        }
        let o = {
            ...(null !== (n = x[i]) && void 0 !== n ? n : { fetching: !1 }),
            summaryId: void 0,
            summaryIdLastReceivedAt: s,
            summaryIdError: a
        };
        x[i] = o;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        var t;
        let { channelId: n, summaryId: r, requestedAt: i } = e;
        x[n] = {
            ...(null !== (t = x[n]) && void 0 !== t ? t : { fetching: !1 }),
            summaryId: r,
            summaryIdLastRequestedAt: i
        };
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: t, channelId: n, error: r, receivedAt: i } = e,
            a = t.filter((e) => Object.keys(e).length > 0).map((e) => (0, O.b)(e, n));
        if (null != s && s.channelId === n && !a.some((e) => e.id === (null == s ? void 0 : s.summaryId))) {
            var o;
            let e = (null !== (o = L[n]) && void 0 !== o ? o : []).find((e) => e.id === (null == s ? void 0 : s.summaryId));
            null != e && a.push(e);
        }
        L[n] = (0, _.sortBy)(a, (e) => R.default.extractTimestamp(e.startId)).reverse();
        let l = {
            ...x[n],
            fetching: !1,
            error: void 0,
            lastReceivedAt: i
        };
        null != r && (l.error = r), (x[n] = l);
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        var t;
        x[e.channelId] = {
            ...(null !== (t = x[e.channelId]) && void 0 !== t ? t : {}),
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
            let e = L[i.channelId];
            a = null == e ? void 0 : e.findIndex((e) => e.id === (null == i ? void 0 : i.summaryId));
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let t = y.Z.getChannelId();
        if (null != t) {
            if (null != i && i.channelId === t && null != i.summaryId) {
                let e = L[i.channelId];
                a = null == e ? void 0 : e.findIndex((e) => e.id === (null == i ? void 0 : i.summaryId));
            } else {
                var n;
                a =
                    null === (n = L[t]) || void 0 === n
                        ? void 0
                        : n.findIndex((t) => {
                              var n, r, i, a;
                              return (n = e.topVisibleMessage), (r = e.bottomVisibleMessage), (i = t.startId), (a = t.endId), !(null == n || n > a) && !(null == r || r < i);
                          });
            }
        }
    },
    SET_SELECTED_SUMMARY(e) {
        var t;
        let n = e.channelId;
        return null == n
            ? null
            : (n !== (null == s ? void 0 : s.channelId) || e.summaryId !== (null == s ? void 0 : s.summaryId)) &&
                  void (s = {
                      channelId: n,
                      summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
                  });
    },
    SET_SUMMARY_FEEDBACK(e) {
        let { summary: t, rating: n } = e;
        null != n ? (w[t.id] = n) : delete w[t.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
        k = {
            ...k,
            status: 'fetching',
            lastRequest: Date.now()
        };
    },
    RECEIVE_CHANNEL_AFFINITIES(e) {
        var t;
        let { affinities: n, error: r } = e;
        if (null != r) {
            (M = []),
                (P = {}),
                (k = {
                    ...k,
                    status: 'error',
                    lastResponse: Date.now()
                });
            return;
        }
        (M = null != n ? n : []),
            (P = null !== (t = null == n ? void 0 : n.reduce((e, t) => ((e[t.channel_id] = t.affinity), e), {})) && void 0 !== t ? t : {}),
            (k = {
                ...k,
                status: 'ok',
                lastResponse: Date.now()
            });
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
        let { channelIds: t, requestedAt: n } = e,
            r = t.reduce((e, t) => {
                var r;
                let i = null !== (r = x[t]) && void 0 !== r ? r : {};
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
        x = {
            ...x,
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
            a = p()
                .toPairs(t)
                .reduce((e, t) => {
                    let [n, r] = t,
                        i = p()
                            .chain(r.map((e) => (0, O.b)(e, n)))
                            .sortBy((e) => R.default.extractTimestamp(e.startId))
                            .takeRight(75)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return (e[n] = i), e;
                }, {}),
            s = i.reduce(
                (e, t) => {
                    var i;
                    let s = null !== (i = x[t]) && void 0 !== i ? i : {},
                        o = a[t];
                    return (
                        null != o && (e.summariesByChannel[t] = o),
                        (e.summaryFetchStatusByChannel[t] = {
                            ...s,
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
        (L = {
            ...L,
            ...s.summariesByChannel
        }),
            (x = {
                ...x,
                ...s.summaryFetchStatusByChannel
            });
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        var t, n, r;
        let { channel_id: i, summaries: a, guild_id: s } = e,
            o = Date.now(),
            l = p()
                .chain(a)
                .sortBy((e) => R.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => (0, O.b)(e, i))
                .reverse()
                .value(),
            u = null !== (n = L[i]) && void 0 !== n ? n : [],
            c = p()
                .chain(l)
                .concat(u)
                .sortBy((e) => R.default.extractTimestamp(e.startId))
                .takeRight(75)
                .uniqBy('id')
                .reverse()
                .value();
        (L[i] = c),
            (x[i] = {
                ...x[i],
                error: void 0,
                fetching: null !== (r = null === (t = x[i]) || void 0 === t ? void 0 : t.fetching) && void 0 !== r && r,
                lastReceivedAt: o
            });
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        (L = {}), (x = {});
    },
    DELETE_SUMMARY(e) {
        var t;
        let n = e.summary.channelId,
            r = (null !== (t = L[n]) && void 0 !== t ? t : []).indexOf(e.summary);
        -1 !== r && L[n].splice(r, 1);
    }
});
t.Z = F;
