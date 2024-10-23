n(47120), n(724458), n(653041);
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
    E = n(601964),
    h = n(314897),
    m = n(592125),
    I = n(165630),
    p = n(430824),
    g = n(375954),
    T = n(306680),
    C = n(699516),
    f = n(9156),
    S = n(626135),
    N = n(70956),
    A = n(900849),
    v = n(761080),
    Z = n(584925),
    L = n(207205),
    R = n(981631),
    O = n(206583);
function x(e, t, n) {
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
let b = 1 * N.Z.Millis.DAY,
    M = 3 * N.Z.Millis.DAY,
    P = [],
    D = null,
    y = 0,
    j = [],
    U = [],
    G = [],
    w = [],
    k = {},
    B = {},
    H = {},
    V = {},
    F = {},
    Y = {},
    z = 0,
    W = !1,
    K = !1,
    q = !1,
    Q = null,
    X = null,
    J = 0,
    $ = [],
    ee = [],
    et = 0,
    en = [],
    ei = 0;
function ea(e) {
    return Date.now() - y > 6 * N.Z.Millis.HOUR && [...e, ...G, ...U].slice(0, 3).reduce((e, t) => e + t.score, 0) >= v.jp;
}
function es(e, t, n, i) {
    let a = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < a.length ? a.splice((t + 1) * i, 0, e) : a.push(e);
        }),
        a
    );
}
function er() {
    (function () {
        let e = p.Z.getGuildIds(),
            t = [];
        for (let i of e) {
            if (null != F[i] && F[i] < 0) continue;
            let e = u.ZP.getGuildScheduledEventsForGuild(i),
                a = 0;
            for (let i of e) {
                if (!(0, u.Z2)(i)) {
                    if ((0, u.BQ)(i, 2 * N.Z.Seconds.DAY) || (0, u.xt)(i)) {
                        var n;
                        if (
                            (null == H[i.id] &&
                                (H[i.id] = {
                                    id: i.id,
                                    type: v.Rr.GUILD_EVENT,
                                    score: 10,
                                    event_id: i.id
                                }),
                            t.push({
                                id: i.id,
                                type: v.Rr.GUILD_EVENT,
                                score: 10,
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
            let n = I.Z.getGuildAffinity(e.data.guild_id),
                i = I.Z.getGuildAffinity(t.data.guild_id);
            return (null != i ? i.score : 0) - (null != n ? n.score : 0);
        });
        let i = [],
            a = [];
        t.forEach((e) => {
            (B[e.id] = e), null != Z.Z.getReadTimestamp(e.id) ? a.push(e) : i.push(e);
        }),
            (U = i),
            ($ = es($, i, v.Rr.GUILD_EVENT, 7)),
            (ee = es(ee, a, v.Rr.GUILD_EVENT, 7));
    })(),
        (function () {
            var e, t;
            let n = new Set(),
                i = {},
                s = [],
                r = [],
                d = null !== (t = null === (e = l.Z.getFeed(O.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.entries) && void 0 !== t ? t : [];
            d.sort((e, t) => e.rank - t.rank),
                d.forEach((e) => {
                    if (n.has(e.content.id) || (e.content.content_type !== a.s.PLAYED_GAME && e.content.content_type !== a.s.CUSTOM_STATUS && e.content.content_type !== a.s.TOP_GAME) || (0, c.n2)(e.content)) return;
                    if ((0, o.dX)(e.content)) {
                        if ((null == i[e.content.author_id] && (i[e.content.author_id] = new Set()), i[e.content.author_id].has(e.content.extra.application_id))) return;
                        i[e.content.author_id].add(e.content.extra.application_id);
                    }
                    null == H[e.content.id] &&
                        (H[e.content.id] = {
                            id: e.content.id,
                            type: v.Rr.ACTIVITY,
                            score: 15,
                            activity: e.content
                        });
                    let t = {
                        id: e.content.id,
                        type: v.Rr.ACTIVITY,
                        score: 15,
                        data: {
                            user_id: e.content.author_id,
                            content_id: e.content.id
                        }
                    };
                    n.add(e.content.id), (B[t.id] = t), null != Z.Z.getReadTimestamp(t.id) ? r.push(t) : s.push(t);
                }),
                (G = s),
                ($ = es($, s, v.Rr.ACTIVITY, 5)),
                (ee = es(ee, r, v.Rr.ACTIVITY, 5));
        })(),
        el();
}
function el() {
    if ((($ = $.filter((e) => e.type !== v.Rr.RECOMMENDED_GUILDS)), (ee = ee.filter((e) => e.type !== v.Rr.RECOMMENDED_GUILDS)), 0 === en.length)) return;
    let e = 'recommendedGuilds',
        t = Object.values(p.Z.getGuilds()).filter((e) => e.isCommunity()).length >= 5,
        n = Z.Z.getReadTimestamp(e);
    if (t && null != n && Date.now() - ei > b && Date.now() - n < M) return;
    let i = {
        id: e,
        type: v.Rr.RECOMMENDED_GUILDS,
        score: 50
    };
    if (((H[i.id] = i), (B[i.id] = i), 0 === $.length)) ee = [i, ...ee];
    else if ((!t && $.length < 5) || (t && $.length < 10)) $ = [...$, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        $.splice(e, 0, i);
    } else $.splice(5, 0, i);
}
function eo(e) {
    if ((j.length > 0 && ((P = j), (j = []), (w = [])), z++, null != e)) ($ = e.newUnread), (ee = e.newRead);
    else {
        let [e, t] = ec(P);
        ($ = e), (ee = t);
    }
    if ((er(), null != k.load_id && D !== k.load_id)) {
        var t;
        S.default.track(R.rMx.FEED_LOADED, {
            ...k,
            unread_feed_item_ids: $.map((e) => e.id),
            read_feed_item_ids: ee.map((e) => e.id),
            home_session_id: 'gravity'
        }),
            (D = null !== (t = k.load_id) && void 0 !== t ? t : null),
            (k = {});
    }
    (et = 0), (0, L.em)([...$, ...ee], 0, v.xy);
}
function ec(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let a = null != Z.Z.getReadTimestamp(e.id);
            e.type === v.Rr.MESSAGE ? (a = a || !(0, L.$U)(e.data.channel_id, e.data.message_id)) : e.type === v.Rr.SUMMARY && (a = a || !(0, L.$U)(e.data.channel_id, e.data.summary_id)), a ? t.push(e) : e.type === v.Rr.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
        }),
        [[...i, ...n], t.sort((e, t) => (0, L.Rm)(e.id, t.id))]
    );
}
function ed(e, t) {
    let n = [],
        i = new Set(P.map((e) => e.id));
    for (let a of e) {
        if (!(a.type === v.Rr.RECOMMENDED_GUILDS || i.has(a.id)) && null == Z.Z.getReadTimestamp(a.id) && (a.type !== v.Rr.MESSAGE || (!!(0, L.$U)(a.data.channel_id, a.data.message_id) && a.data.channel_id !== t)) && (a.type !== v.Rr.SUMMARY || (!!(0, L.$U)(a.data.channel_id, a.data.summary_id) && a.data.channel_id !== t))) n.push(a);
    }
    return n;
}
function eu(e, t) {
    return e.filter((e) => (e.type !== v.Rr.MESSAGE && e.type !== v.Rr.SUMMARY && e.type !== v.Rr.GUILD_EVENT) || e.data.channel_id !== t);
}
function e_(e, t) {
    if ((0, L.jv)(t) === L.aL.MUTED) (P = eu(P, e)), ($ = eu($, e)), (ee = eu(ee, e)), (j = eu(j, e)), (w = eu(w, e));
}
function eE(e, t) {
    return e.filter((e) => (e.type !== v.Rr.MESSAGE && e.type !== v.Rr.SUMMARY && e.type !== v.Rr.GUILD_EVENT) || e.data.guild_id !== t);
}
function eh(e, t) {
    if ((0, L.jv)(t) === L.aL.MUTED) (P = eE(P, e)), ($ = eE($, e)), (ee = eE(ee, e)), (j = eE(j, e)), (w = eE(w, e));
}
function em(e) {
    let { type: t, messageId: n, userId: i, emoji: a, reactionType: s } = e,
        r = H[n];
    if (null == r || r.type !== v.Rr.MESSAGE) return !1;
    let l = h.default.getId() === i;
    'MESSAGE_REACTION_ADD' === t ? (r.message = r.message.addReaction(a, l, e.colors, s)) : (r.message = r.message.removeReaction(a, l, s));
}
function eI(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    $.forEach((e, a) => {
        (a > et || !q) && (e.type === v.Rr.MESSAGE || e.type === v.Rr.SUMMARY) && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let a = K,
        [s, r] = ec(j);
    if (((w = ed(s, t)), (K = q ? a && w.length >= v.Lb : a && ea(i)), 0 === n.length && a === K)) return !1;
    if (0 !== n.length) ($ = i), (ee = [...ee, ...n]);
}
class ep extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(g.Z, m.Z, T.ZP, d.Z, f.ZP, h.default, Z.Z, l.Z), null != e)) {
            var t, n, i, a, s, r;
            (P = null !== (t = e.dehydratedItems) && void 0 !== t ? t : []).forEach((e) => {
                B[e.id] = e;
            }),
                (F = null !== (n = e.customGuildScores) && void 0 !== n ? n : {}),
                (Y = null !== (i = e.customChannelScoresByGuild) && void 0 !== i ? i : {}),
                (J = null !== (a = e.numOpens) && void 0 !== a ? a : 0),
                (y = null !== (s = e.lastOpened) && void 0 !== s ? s : 0),
                (ei = null !== (r = e.lastJoinedRecommendedGuild) && void 0 !== r ? r : 0);
        }
    }
    getVersion() {
        return z;
    }
    getDehydratedItems() {
        return P;
    }
    getNewDehydratedItems() {
        return j;
    }
    getDehydratedItem(e) {
        var t;
        return null !== (t = B[e]) && void 0 !== t ? t : null;
    }
    getHydratedItem(e) {
        var t;
        return null !== (t = H[e]) && void 0 !== t ? t : null;
    }
    getMessage(e) {
        let t = H[e];
        return null == t || t.type !== v.Rr.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return H;
    }
    getUnreadDisplayItems() {
        return $;
    }
    getNewUnreadDehydratedItems() {
        return w;
    }
    getReadDisplayItems() {
        return ee;
    }
    getNextIndexToHydrate() {
        return et;
    }
    getMissingItems() {
        return V;
    }
    getCustomChannelScore(e, t) {
        return null == Y[e] || null == Y[e][t] ? L.aL.UNKNOWN : (0, L.jv)(Y[e][t]);
    }
    getCustomGuildScore(e) {
        var t;
        return null !== (t = F[e]) && void 0 !== t ? t : 0;
    }
    getCustomGuildScores() {
        return F;
    }
    hasNewContent() {
        return K;
    }
    getSelectedSummary(e) {
        return null == Q || Q.channelId !== e ? null : Q;
    }
    isGravitySelectedChannel(e) {
        return null != X && X === e;
    }
    getLoadId() {
        return D;
    }
    hasOpenedEnoughTimes() {
        return 5 === J;
    }
    hasOpened() {
        return q;
    }
    getDiscoverableGuilds() {
        return en;
    }
    getState() {
        return {
            dehydratedItems: P,
            numOpens: J,
            customGuildScores: F,
            customChannelScoresByGuild: Y,
            lastOpened: y,
            lastJoinedRecommendedGuild: ei
        };
    }
}
x(ep, 'displayName', 'GravityStore'),
    x(ep, 'persistKey', 'GravityStore'),
    (t.Z = new ep(r.Z, {
        POST_CONNECTION_OPEN: function () {
            if (P.length > 0 && (!q || 0 === z)) {
                let [e, t] = ec(P);
                ($ = e), (ee = t), er(), (et = 0), (0, L.em)([...$, ...ee], 0, v.xy);
            }
        },
        LOGOUT: function () {
            return !1;
        },
        LOAD_GRAVITY_FROM_NOTIFICATION: function (e) {
            let { messageItem: t } = e;
            if (null == t) return !1;
            let n = {
                id: t.message.id,
                type: v.Rr.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: R.d4z.GUILD_TEXT
                }
            };
            if (
                ((B[t.message.id] = n),
                (H[t.message.id] = {
                    ...n,
                    message: (0, _.e5)(t.message)
                }),
                null == D && null == k)
            ) {
                let [e, t] = ec((P = [n, ...P]));
                ($ = e), (ee = t);
            } else (j = [n, ...j]), eo();
        },
        LOAD_GRAVITY_DEHYDRATED: function (e) {
            let { items: t, loadId: n, startTime: i, isReloading: a } = e;
            (j = t.filter((e) => v.zd.has(e.type))),
                !(function () {
                    let e = new Set();
                    j.forEach((t) => {
                        e.add(t.id);
                    }),
                        j.forEach((e) => {
                            (B[e.id] = e), e.type === v.Rr.CUSTOM_STATUS && (C.Z.isBlocked(e.data.user_id) ? (V[e.id] = !0) : (H[e.id] = (0, L.mV)(e)));
                        });
                })(),
                (k = {
                    load_id: n,
                    load_time_millis: Date.now() - i,
                    feed_item_ids: j.map((e) => e.id)
                });
            let [s, r] = ec(j);
            if (((w = ed(s)), q && 0 !== z)) {
                let e = w.length > v.Lb;
                !a && (K = e), e && (0, L.em)([...s, ...r], 0, v.xy);
            } else
                (z = 0),
                    !q && ea(s) && ((K = !0), (W = !0)),
                    eo({
                        newUnread: s,
                        newRead: r
                    });
        },
        LOAD_GRAVITY_HYDRATED: function (e) {
            let { messageItems: t, summaryItems: n, activityItems: i, requestMessageItems: a, requestSummaryItems: s, requestActivityItems: r, startingIndex: l, endingIndex: o } = e;
            H = { ...H };
            let c = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
                d = n.reduce((e, t) => ((e[t.id] = t), e), {}),
                u = i.reduce((e, t) => ((e[t.id] = t), e), {});
            a.forEach((e) => {
                let t = c[e.message_id];
                if (null == t) {
                    V[e.message_id] = !0;
                    return;
                }
                let n = B[e.message_id];
                if (null == n) {
                    V[e.message_id] = !0;
                    return;
                }
                null != g.Z.getMessage(t.channel_id, t.message.id)
                    ? (H[t.message.id] = {
                          ...n,
                          message: g.Z.getMessage(t.channel_id, t.message.id)
                      })
                    : (H[t.message.id] = {
                          ...n,
                          message: (0, _.e5)(t.message)
                      });
            }),
                s.forEach((e) => {
                    let t = d[e.summary_id];
                    if (null == t) {
                        V[e.summary_id] = !0;
                        return;
                    }
                    let n = B[e.summary_id];
                    if (null == n || n.type !== v.Rr.SUMMARY || t.messages.length < 3) {
                        V[e.summary_id] = !0;
                        return;
                    }
                    H[t.id] = {
                        ...n,
                        summary: (0, L.wV)(t, n.data.guild_id)
                    };
                }),
                r.forEach((e) => {
                    let t = u[e.content_id];
                    if (null == t) {
                        V[e.content_id] = !0;
                        return;
                    }
                    let n = B[e.content_id];
                    if (null == n) {
                        V[e.content_id] = !0;
                        return;
                    }
                    H[t.id] = {
                        ...n,
                        activity: t
                    };
                }),
                l === et && (et = o);
        },
        LOAD_GRAVITY_CUSTOM_SCORES: function (e) {
            let { scores: t } = e;
            for (let e of t) for (let t of ((F[e.guild_id] = e.guild_score), eh(e.guild_id, e.guild_score), Object.keys(e.custom_channel_scores))) null == Y[e.guild_id] && (Y[e.guild_id] = {}), (Y[e.guild_id][t] = e.custom_channel_scores[t]), e_(t, e.custom_channel_scores[t]);
            (F = { ...F }), (Y = { ...Y });
        },
        LOAD_GRAVITY_RECOMMENDED_GUILDS: function (e) {
            let { guilds: t } = e;
            (en = t.map((e) => new E.ZP((0, A.PP)(e.guild)))), el();
        },
        GRAVITY_CUSTOM_SCORES_UPDATED: function (e) {
            let { channelScores: t, guildId: n, guildScore: i } = e;
            null != i && ((F[n] = i), eh(n, i), (F = { ...F })),
                null == t ||
                    t.forEach((e) => {
                        let { channelId: t, score: i } = e;
                        null == Y[n] && (Y[n] = {}), (Y[n][t] = i), e_(t, i), (Y = { ...Y });
                    });
        },
        RELOAD_GRAVITY: function () {
            if (0 === j.length) return !1;
            eo(), (K = !1);
        },
        GRAVITY_TAB_OPENED: function () {
            (q = !0), (y = Date.now()), W && ((W = !1), (K = !1)), J < 5 && J++;
        },
        GRAVITY_FEEDBACK_GIVEN: function () {
            J = 6;
        },
        SET_GRAVITY_SELECTED_SUMMARY: function (e) {
            if (null == e.summaryId) {
                Q = null;
                return;
            }
            let t = H[e.summaryId];
            if (null == t || t.type !== v.Rr.SUMMARY) {
                Q = null;
                return;
            }
            Q = t.summary;
        },
        SET_GRAVITY_SELECTED_CHANNEL: function (e) {
            X = e.channelId;
        },
        MESSAGE_REACTION_ADD: em,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { messageId: t, reactions: n } = e,
                i = H[t];
            if (null == i || i.type !== v.Rr.MESSAGE) return !1;
            let a = h.default.getId();
            i.message = i.message.addReactionBatch(n, a);
        },
        MESSAGE_REACTION_REMOVE: em,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { messageId: t } = e,
                n = H[t];
            if (null == n || n.type !== v.Rr.MESSAGE) return !1;
            n.message = n.message.set('reactions', []);
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { messageId: t, emoji: n } = e,
                i = H[t];
            if (null == i || i.type !== v.Rr.MESSAGE) return !1;
            i.message = i.message.removeReactionsForEmoji(n);
        },
        CHANNEL_ACK: eI,
        MESSAGE_ACK: eI,
        CONTENT_INVENTORY_SET_FEED: function (e) {
            let { feedId: t } = e;
            if (t !== O.YN.GLOBAL_FEED) return !1;
            if (!q) {
                let [e, t] = ec(P);
                ($ = e), (ee = t), er(), (K = ea(e));
            }
        },
        GRAVITY_JOINED_RECOMMENDED_GUILD: function () {
            ei = Date.now();
        }
    }));
