n(47120), n(653041), n(733860), n(724458);
var i,
    a = n(876215),
    s = n(442837),
    r = n(570140),
    l = n(146282),
    o = n(26033),
    c = n(561308),
    d = n(353926),
    u = n(924301),
    _ = n(786761),
    E = n(314897),
    h = n(592125),
    m = n(165630),
    I = n(430824),
    g = n(375954),
    p = n(306680),
    T = n(699516),
    f = n(9156),
    S = n(626135),
    C = n(70956),
    N = n(709054),
    A = n(761080),
    v = n(584925),
    L = n(207205),
    Z = n(981631),
    O = n(206583);
function R(e, t, n) {
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
let x = [],
    b = null,
    P = 0,
    M = [],
    D = [],
    y = {},
    j = {},
    U = {},
    G = {},
    k = {},
    w = {},
    B = {},
    H = {},
    V = new Set(),
    F = 0,
    Y = !1,
    W = !1,
    z = !1,
    K = null,
    q = null,
    Q = 0,
    X = [],
    J = [],
    $ = 0;
function ee() {
    let e = I.Z.getGuildIds(),
        t = [];
    for (let i of e) {
        if (null != w[i] && w[i] < 0) continue;
        let e = u.ZP.getGuildScheduledEventsForGuild(i),
            a = 0;
        for (let i of e) {
            if (!(0, u.Z2)(i)) {
                if ((0, u.BQ)(i, 2 * C.Z.Seconds.DAY) || (0, u.xt)(i)) {
                    var n;
                    if (
                        (null == G[i.id] &&
                            (G[i.id] = {
                                id: i.id,
                                type: A.Rr.GUILD_EVENT,
                                score: 50,
                                event_id: i.id
                            }),
                        t.push({
                            id: i.id,
                            type: A.Rr.GUILD_EVENT,
                            score: 50,
                            data: {
                                guild_id: i.guild_id,
                                event_id: i.id,
                                channel_id: null !== (n = i.channel_id) && void 0 !== n ? n : void 0
                            }
                        }),
                        ++a >= 2)
                    )
                        break;
                }
            }
        }
    }
    t.sort((e, t) => {
        let n = m.Z.getGuildAffinity(e.data.guild_id),
            i = m.Z.getGuildAffinity(t.data.guild_id);
        return (null != i ? i.score : 0) - (null != n ? n.score : 0);
    });
    let i = [],
        a = [];
    t.forEach((e) => {
        (U[e.id] = e), null != v.Z.getReadTimestamp(e.id) ? a.push(e) : i.push(e);
    }),
        (X = et(X, i)),
        (J = et(J, a));
}
function et(e, t) {
    let n = e.filter((e) => e.type !== A.Rr.GUILD_EVENT);
    return (
        t.forEach((e, t) => {
            (t + 1) * 7 < n.length ? n.splice((t + 1) * 7, 0, e) : n.push(e);
        }),
        n
    );
}
function en(e) {
    var t, n;
    let i = e.filter((e) => e.type !== A.Rr.ACTIVITY),
        s = new Set(i.map((e) => e.id)),
        r = {},
        d = null !== (n = null === (t = l.Z.getFeed(O.YN.GLOBAL_FEED)) || void 0 === t ? void 0 : t.entries) && void 0 !== n ? n : [];
    return (
        d.sort((e, t) => e.rank - t.rank),
        d.forEach((e, t) => {
            if (s.has(e.content.id) || (e.content.content_type !== a.s.PLAYED_GAME && e.content.content_type !== a.s.CUSTOM_STATUS && e.content.content_type !== a.s.TOP_GAME) || (0, c.n2)(e.content)) return;
            if ((0, o.dX)(e.content)) {
                if ((null == r[e.content.author_id] && (r[e.content.author_id] = new Set()), r[e.content.author_id].has(e.content.extra.application_id))) return;
                r[e.content.author_id].add(e.content.extra.application_id);
            }
            null == G[e.content.id] &&
                (G[e.content.id] = {
                    id: e.content.id,
                    type: A.Rr.ACTIVITY,
                    score: 50,
                    activity: e.content
                });
            let n = {
                id: e.content.id,
                type: A.Rr.ACTIVITY,
                score: 50,
                data: {
                    user_id: e.content.author_id,
                    content_id: e.content.id
                }
            };
            (U[n.id] = n), (t + 1) * 5 < i.length ? i.splice((t + 1) * 5, 0, n) : i.push(n);
        }),
        i
    );
}
function ei(e) {
    if ((M.length > 0 && ((x = M), (M = []), (D = [])), F++, null != e)) (X = e.newUnread), (J = e.newRead);
    else {
        let [e, t] = ea(x);
        (X = e), (J = t);
    }
    if ((ee(), null != y.load_id && b !== y.load_id)) {
        var t;
        S.default.track(Z.rMx.FEED_LOADED, {
            ...y,
            unread_feed_item_ids: X.map((e) => e.id),
            read_feed_item_ids: J.map((e) => e.id),
            home_session_id: 'gravity'
        }),
            (b = null !== (t = y.load_id) && void 0 !== t ? t : null),
            (y = {});
    }
    ($ = 0), (0, L.em)([...X, ...J], 0, A.xy);
}
function ea(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let a = null != v.Z.getReadTimestamp(e.id);
            e.type === A.Rr.MESSAGE ? (a = a || !(0, L.$U)(e.data.channel_id, e.data.message_id)) : e.type === A.Rr.SUMMARY && (a = a || !(0, L.$U)(e.data.channel_id, e.data.summary_id)), a ? t.push(e) : e.type === A.Rr.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
        }),
        [[...i, ...n], t.sort((e, t) => (0, L.Rm)(e.id, t.id))]
    );
}
function es(e, t) {
    let n = [],
        i = new Set(x.map((e) => e.id));
    for (let a of e) {
        if (!i.has(a.id) && null == v.Z.getReadTimestamp(a.id) && (a.type !== A.Rr.MESSAGE || (!!(0, L.$U)(a.data.channel_id, a.data.message_id) && a.data.channel_id !== t)) && (a.type !== A.Rr.SUMMARY || (!!(0, L.$U)(a.data.channel_id, a.data.summary_id) && a.data.channel_id !== t))) n.push(a);
    }
    return n;
}
function er(e, t) {
    return e.filter((e) => (e.type !== A.Rr.MESSAGE && e.type !== A.Rr.SUMMARY && e.type !== A.Rr.GUILD_EVENT) || e.data.channel_id !== t);
}
function el(e, t) {
    if ((0, L.jv)(t) === L.aL.MUTED) (x = er(x, e)), (X = er(X, e)), (J = er(J, e)), (M = er(M, e)), (D = er(D, e));
}
function eo(e, t) {
    return e.filter((e) => (e.type !== A.Rr.MESSAGE && e.type !== A.Rr.SUMMARY && e.type !== A.Rr.GUILD_EVENT) || e.data.guild_id !== t);
}
function ec(e, t) {
    if ((0, L.jv)(t) === L.aL.MUTED) (x = eo(x, e)), (X = eo(X, e)), (J = eo(J, e)), (M = eo(M, e)), (D = eo(D, e));
}
function ed(e) {
    let { type: t, messageId: n, userId: i, emoji: a, reactionType: s } = e,
        r = G[n];
    if (null == r || r.type !== A.Rr.MESSAGE) return !1;
    let l = E.default.getId() === i;
    'MESSAGE_REACTION_ADD' === t ? (r.message = r.message.addReaction(a, l, e.colors, s)) : (r.message = r.message.removeReaction(a, l, s));
}
function eu(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    X.forEach((e, a) => {
        a > $ && (e.type === A.Rr.MESSAGE || e.type === A.Rr.SUMMARY) && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let a = W,
        [s, r] = ea(M);
    if (((D = es(s, t)), (W = z ? D.length >= A.Lb : i.length > 0), 0 === n.length && a === W)) return !1;
    if (0 !== n.length) (X = i), (J = [...J, ...n]);
}
class e_ extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(g.Z, h.Z, p.ZP, d.Z, f.ZP, E.default, v.Z, l.Z), null != e)) {
            var t, n, i, a, s, r;
            (x = null !== (t = e.dehydratedItems) && void 0 !== t ? t : []),
                (j = null !== (n = e.locallyAddedItems) && void 0 !== n ? n : {}),
                x.forEach((e) => {
                    U[e.id] = e;
                }),
                (w = null !== (i = e.customGuildScores) && void 0 !== i ? i : {}),
                (B = null !== (a = e.customChannelScoresByGuild) && void 0 !== a ? a : {}),
                (Q = null !== (s = e.numOpens) && void 0 !== s ? s : 0),
                (P = null !== (r = e.lastOpened) && void 0 !== r ? r : 0);
        }
    }
    getVersion() {
        return F;
    }
    getDehydratedItems() {
        return x;
    }
    getNewDehydratedItems() {
        return M;
    }
    getDehydratedItem(e) {
        var t;
        return null !== (t = U[e]) && void 0 !== t ? t : null;
    }
    getHydratedItem(e) {
        var t;
        return null !== (t = G[e]) && void 0 !== t ? t : null;
    }
    getMessage(e) {
        let t = G[e];
        return null == t || t.type !== A.Rr.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return G;
    }
    getUnreadDisplayItems() {
        return X;
    }
    getNewUnreadDehydratedItems() {
        return D;
    }
    getReadDisplayItems() {
        return J;
    }
    getNextIndexToHydrate() {
        return $;
    }
    getMissingItems() {
        return k;
    }
    getCustomChannelScore(e, t) {
        return null == B[e] || null == B[e][t] ? L.aL.UNKNOWN : (0, L.jv)(B[e][t]);
    }
    getCustomGuildScore(e) {
        var t;
        return null !== (t = w[e]) && void 0 !== t ? t : 0;
    }
    getCustomGuildScores() {
        return w;
    }
    getNumLocallyAddedItems() {
        return Object.keys(j).length;
    }
    hasNewContent() {
        return W;
    }
    getSelectedSummary(e) {
        return null == K || K.channelId !== e ? null : K;
    }
    isGravitySelectedChannel(e) {
        return null != q && q === e;
    }
    getLoadId() {
        return b;
    }
    hasOpenedEnoughTimes() {
        return 5 === Q;
    }
    hasOpened() {
        return z;
    }
    getState() {
        return {
            dehydratedItems: x,
            locallyAddedItems: j,
            numOpens: Q,
            customGuildScores: w,
            customChannelScoresByGuild: B,
            lastOpened: P
        };
    }
}
R(e_, 'displayName', 'GravityStore'),
    R(e_, 'persistKey', 'GravityStore'),
    (t.Z = new e_(r.Z, {
        POST_CONNECTION_OPEN: function () {
            if (x.length > 0) {
                let [e, t] = ea(x);
                (X = e), (J = t), ee(), ($ = 0), (0, L.em)([...X, ...J], 0, A.xy);
            }
        },
        LOGOUT: function () {
            return !1;
        },
        MESSAGE_CREATE: function (e) {
            var t, n;
            let { message: i, guildId: a, channelId: s } = e;
            if (!(0, L.rK)('GravityStore-handleMessageCreate') || null == a || (null === (t = i.author) || void 0 === t ? void 0 : t.id) === E.default.getId() || T.Z.isBlocked(null === (n = i.author) || void 0 === n ? void 0 : n.id) || (a in w && w[a] < 0) || (null != B[a] && s in B[a] && null != B[a][s] && B[a][s] < 0)) return !1;
            let r = h.Z.getChannel(s);
            if (null == r || r.type !== Z.d4z.GUILD_ANNOUNCEMENT || f.ZP.isChannelMuted(a, s)) return !1;
            let l = g.Z.getMessage(i.channel_id, i.id);
            null == l && (l = (0, _.e5)(i));
            let o = l.mentionEveryone;
            if (i.id in U) return !1;
            let c = {
                type: A.Rr.MESSAGE,
                id: i.id,
                score: Date.now(),
                data: {
                    channel_id: i.channel_id,
                    guild_id: a,
                    message_id: i.id,
                    channel_type: Z.d4z.GUILD_ANNOUNCEMENT,
                    has_mention: o
                }
            };
            o && (null == H[s] && (H[s] = 0), H[s]++, V.add(a)),
                null == (M = 0 === M.length ? [...x] : [...M]).find((e) => e.id === i.id) && ((M = [c, ...M]), (j[i.id] = c)),
                (0, L.$U)(s, i.id) && (D = [c, ...D]),
                D.length >= A.Lb && F > 0 && (W = !0),
                (U[i.id] = c),
                (G[i.id] = {
                    ...c,
                    message: l
                });
        },
        LOAD_GRAVITY_DEHYDRATED: function (e) {
            let { items: t, loadId: n, startTime: i } = e;
            (M = t.filter((e) => A.zd.has(e.type))),
                !(function () {
                    let e = new Set();
                    M.forEach((t) => {
                        e.add(t.id);
                    }),
                        Object.values(j).forEach((t) => {
                            A.zd.has(t.type) && (e.has(t.id) || N.default.age(t.id) > C.Z.Millis.DAY || (t.type === A.Rr.MESSAGE && f.ZP.isChannelMuted(t.data.guild_id, t.data.channel_id)) ? delete j[t.id] : !e.has(t.id) && (M.unshift(t), e.add(t.id)));
                        }),
                        M.forEach((e) => {
                            (U[e.id] = e), e.type === A.Rr.CUSTOM_STATUS && (T.Z.isBlocked(e.data.user_id) ? (k[e.id] = !0) : (G[e.id] = (0, L.mV)(e)));
                        });
                })(),
                (M = en(M)),
                (y = {
                    load_id: n,
                    load_time_millis: Date.now() - i,
                    feed_item_ids: M.map((e) => e.id)
                });
            let [a, s] = ea(M);
            if (((D = es(a)), z && 0 !== F)) {
                let e = D.length > A.Lb;
                (W = e), e && (0, L.em)([...a, ...s], 0, A.xy);
            } else
                (F = 0),
                    a.length > 0 && !z && Date.now() - P > 2 * C.Z.Millis.HOUR && ((W = !0), (Y = !0)),
                    ei({
                        newUnread: a,
                        newRead: s
                    });
        },
        LOAD_GRAVITY_HYDRATED: function (e) {
            let { messageItems: t, summaryItems: n, activityItems: i, requestMessageItems: a, requestSummaryItems: s, requestActivityItems: r, startingIndex: l, endingIndex: o } = e;
            G = { ...G };
            let c = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
                d = n.reduce((e, t) => ((e[t.id] = t), e), {}),
                u = i.reduce((e, t) => ((e[t.id] = t), e), {});
            a.forEach((e) => {
                let t = c[e.message_id];
                if (null == t) {
                    k[e.message_id] = !0;
                    return;
                }
                let n = U[e.message_id];
                if (null == n) {
                    k[e.message_id] = !0;
                    return;
                }
                null != g.Z.getMessage(t.channel_id, t.message.id)
                    ? (G[t.message.id] = {
                          ...n,
                          message: g.Z.getMessage(t.channel_id, t.message.id)
                      })
                    : (G[t.message.id] = {
                          ...n,
                          message: (0, _.e5)(t.message)
                      });
            }),
                s.forEach((e) => {
                    let t = d[e.summary_id];
                    if (null == t) {
                        k[e.summary_id] = !0;
                        return;
                    }
                    let n = U[e.summary_id];
                    if (null == n || n.type !== A.Rr.SUMMARY || t.messages.length < 3) {
                        k[e.summary_id] = !0;
                        return;
                    }
                    G[t.id] = {
                        ...n,
                        summary: (0, L.wV)(t, n.data.guild_id)
                    };
                }),
                r.forEach((e) => {
                    let t = u[e.content_id];
                    if (null == t) {
                        k[e.content_id] = !0;
                        return;
                    }
                    let n = U[e.content_id];
                    if (null == n) {
                        k[e.content_id] = !0;
                        return;
                    }
                    G[t.id] = {
                        ...n,
                        activity: t
                    };
                }),
                l === $ && ($ = o);
        },
        LOAD_GRAVITY_CUSTOM_SCORES: function (e) {
            let { scores: t } = e;
            for (let e of t) for (let t of ((w[e.guild_id] = e.guild_score), ec(e.guild_id, e.guild_score), Object.keys(e.custom_channel_scores))) null == B[e.guild_id] && (B[e.guild_id] = {}), (B[e.guild_id][t] = e.custom_channel_scores[t]), el(t, e.custom_channel_scores[t]);
            (w = { ...w }), (B = { ...B });
        },
        GRAVITY_CUSTOM_SCORES_UPDATED: function (e) {
            let { channelScores: t, guildId: n, guildScore: i } = e;
            null != i && ((w[n] = i), ec(n, i), (w = { ...w })),
                null == t ||
                    t.forEach((e) => {
                        let { channelId: t, score: i } = e;
                        null == B[n] && (B[n] = {}), (B[n][t] = i), el(t, i), (B = { ...B });
                    });
        },
        RELOAD_GRAVITY: function () {
            if (0 === M.length) return !1;
            ei(), (W = !1);
        },
        GRAVITY_TAB_OPENED: function () {
            (z = !0), (P = Date.now()), Y && ((Y = !1), (W = !1)), Q < 5 && Q++;
        },
        GRAVITY_FEEDBACK_GIVEN: function () {
            Q = 6;
        },
        SET_GRAVITY_SELECTED_SUMMARY: function (e) {
            if (null == e.summaryId) {
                K = null;
                return;
            }
            let t = G[e.summaryId];
            if (null == t || t.type !== A.Rr.SUMMARY) {
                K = null;
                return;
            }
            K = t.summary;
        },
        SET_GRAVITY_SELECTED_CHANNEL: function (e) {
            q = e.channelId;
        },
        MESSAGE_REACTION_ADD: ed,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { messageId: t, reactions: n } = e,
                i = G[t];
            if (null == i || i.type !== A.Rr.MESSAGE) return !1;
            let a = E.default.getId();
            i.message = i.message.addReactionBatch(n, a);
        },
        MESSAGE_REACTION_REMOVE: ed,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { messageId: t } = e,
                n = G[t];
            if (null == n || n.type !== A.Rr.MESSAGE) return !1;
            n.message = n.message.set('reactions', []);
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { messageId: t, emoji: n } = e,
                i = G[t];
            if (null == i || i.type !== A.Rr.MESSAGE) return !1;
            i.message = i.message.removeReactionsForEmoji(n);
        },
        CHANNEL_ACK: eu,
        MESSAGE_ACK: eu,
        CONTENT_INVENTORY_SET_FEED: function (e) {
            let { feedId: t } = e;
            if (t !== O.YN.GLOBAL_FEED) return !1;
            if (!z) {
                let [e, t] = ea((x = en(x)));
                (X = e), (J = t), ee();
            }
            let [n, i] = ea((M = en((M = 0 === M.length ? [...x] : M))));
            D = es(n);
        }
    }));
