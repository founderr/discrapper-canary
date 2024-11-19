n(47120), n(724458), n(653041);
var i,
    r = n(876215),
    l = n(442837),
    a = n(570140),
    s = n(146282),
    o = n(26033),
    c = n(561308),
    d = n(353926),
    u = n(924301),
    h = n(786761),
    m = n(601964),
    p = n(314897),
    g = n(592125),
    f = n(165630),
    _ = n(430824),
    E = n(375954),
    I = n(306680),
    C = n(699516),
    v = n(9156),
    N = n(626135),
    T = n(70956),
    S = n(900849),
    A = n(761080),
    b = n(584925),
    x = n(207205),
    Z = n(981631),
    L = n(206583);
function y(e, t, n) {
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
let O = 1 * T.Z.Millis.DAY,
    P = 3 * T.Z.Millis.DAY,
    R = [],
    j = null,
    D = 0,
    M = [],
    w = [],
    k = [],
    U = [],
    G = {},
    B = {},
    H = {},
    V = {},
    F = {},
    z = {},
    W = 0,
    Y = !1,
    K = !1,
    q = !1,
    X = null,
    Q = null,
    J = 0,
    $ = [],
    ee = [],
    et = 0,
    en = [],
    ei = 0,
    er = !0,
    el = !1;
function ea(e) {
    return Date.now() - D > 6 * T.Z.Millis.HOUR && [...e, ...k, ...w].slice(0, 3).reduce((e, t) => e + t.score, 0) >= A.jp;
}
function es(e, t, n, i) {
    let r = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < r.length ? r.splice((t + 1) * i, 0, e) : r.push(e);
        }),
        r
    );
}
function eo() {
    (function () {
        let e = _.Z.getGuildIds(),
            t = [];
        for (let i of e) {
            if (null != F[i] && F[i] < 0) continue;
            let e = u.ZP.getGuildScheduledEventsForGuild(i),
                r = 0;
            for (let i of e) {
                if (!(0, u.Z2)(i)) {
                    if ((0, u.BQ)(i, 2 * T.Z.Seconds.DAY) || (0, u.xt)(i)) {
                        var n;
                        if (
                            (null == H[i.id] &&
                                (H[i.id] = {
                                    id: i.id,
                                    type: A.Rr.GUILD_EVENT,
                                    score: 10,
                                    event_id: i.id
                                }),
                            t.push({
                                id: i.id,
                                type: A.Rr.GUILD_EVENT,
                                score: 10,
                                data: {
                                    guild_id: i.guild_id,
                                    event_id: i.id,
                                    channel_id: null !== (n = i.channel_id) && void 0 !== n ? n : void 0
                                }
                            }),
                            ++r >= 2)
                        )
                            break;
                    }
                }
            }
        }
        t.sort((e, t) => {
            let n = f.Z.getGuildAffinity(e.data.guild_id),
                i = f.Z.getGuildAffinity(t.data.guild_id);
            return (null != i ? i.score : 0) - (null != n ? n.score : 0);
        });
        let i = [],
            r = [];
        t.forEach((e) => {
            (B[e.id] = e), null != b.Z.getReadTimestamp(e.id) ? r.push(e) : i.push(e);
        }),
            (w = i),
            ($ = es($, i, A.Rr.GUILD_EVENT, 7)),
            (ee = es(ee, r, A.Rr.GUILD_EVENT, 7));
    })(),
        (function () {
            var e, t;
            let n = new Set(),
                i = {},
                l = [],
                a = [],
                d = null !== (t = null === (e = s.Z.getFeed(L.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.entries) && void 0 !== t ? t : [];
            d.sort((e, t) => e.rank - t.rank),
                d.forEach((e) => {
                    if (n.has(e.content.id) || (e.content.content_type !== r.s.PLAYED_GAME && e.content.content_type !== r.s.CUSTOM_STATUS && e.content.content_type !== r.s.TOP_GAME) || (0, c.n2)(e.content)) return;
                    if ((0, o.dX)(e.content)) {
                        if ((null == i[e.content.author_id] && (i[e.content.author_id] = new Set()), i[e.content.author_id].has(e.content.extra.application_id))) return;
                        i[e.content.author_id].add(e.content.extra.application_id);
                    }
                    null == H[e.content.id] &&
                        (H[e.content.id] = {
                            id: e.content.id,
                            type: A.Rr.ACTIVITY,
                            score: 15,
                            activity: e.content
                        });
                    let t = {
                        id: e.content.id,
                        type: A.Rr.ACTIVITY,
                        score: 15,
                        data: {
                            user_id: e.content.author_id,
                            content_id: e.content.id
                        }
                    };
                    n.add(e.content.id), (B[t.id] = t), null != b.Z.getReadTimestamp(t.id) ? a.push(t) : l.push(t);
                }),
                (k = l),
                ($ = es($, l, A.Rr.ACTIVITY, 5)),
                (ee = es(ee, a, A.Rr.ACTIVITY, 5));
        })(),
        ec();
}
function ec() {
    if ((($ = $.filter((e) => e.type !== A.Rr.RECOMMENDED_GUILDS)), (ee = ee.filter((e) => e.type !== A.Rr.RECOMMENDED_GUILDS)), 0 === en.length)) return;
    let e = 'recommendedGuilds',
        t = Object.values(_.Z.getGuilds()).filter((e) => e.isCommunity()).length >= 5,
        n = b.Z.getReadTimestamp(e);
    if (t && null != n && Date.now() - ei > O && Date.now() - n < P) return;
    let i = {
        id: e,
        type: A.Rr.RECOMMENDED_GUILDS,
        score: 50
    };
    if (((H[i.id] = i), (B[i.id] = i), 0 === $.length)) ee = [i, ...ee];
    else if ((!t && $.length < 5) || (t && $.length < 10)) $ = [...$, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        $.splice(e, 0, i);
    } else $.splice(5, 0, i);
}
function ed(e) {
    if ((M.length > 0 && ((R = M), (M = []), (U = [])), W++, null != e)) ($ = e.newUnread), (ee = e.newRead);
    else {
        let [e, t] = eu(R);
        ($ = e), (ee = t);
    }
    if ((eo(), null != G.load_id && j !== G.load_id)) {
        var t;
        N.default.track(Z.rMx.FEED_LOADED, {
            ...G,
            unread_feed_item_ids: $.map((e) => e.id),
            read_feed_item_ids: ee.map((e) => e.id),
            home_session_id: 'gravity',
            unread_feed_item_types: $.map((e) => (0, A.v$)(e)),
            read_feed_item_types: ee.map((e) => (0, A.v$)(e))
        }),
            (j = null !== (t = G.load_id) && void 0 !== t ? t : null),
            (G = {});
    }
    (et = 0), (0, x.em)([...$, ...ee], 0, A.xy), (el = !1);
}
function eu(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let r = null != b.Z.getReadTimestamp(e.id);
            e.type === A.Rr.MESSAGE ? (r = r || !(0, x.$U)(e.data.channel_id, e.data.message_id)) : e.type === A.Rr.SUMMARY && (r = r || !(0, x.$U)(e.data.channel_id, e.data.summary_id)), r ? t.push(e) : e.type === A.Rr.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
        }),
        [[...i, ...n], t.sort((e, t) => (0, x.Rm)(e.id, t.id))]
    );
}
function eh(e, t) {
    let n = [],
        i = new Set(R.map((e) => e.id));
    for (let r of e) {
        if (!(r.type === A.Rr.RECOMMENDED_GUILDS || i.has(r.id)) && null == b.Z.getReadTimestamp(r.id) && (r.type !== A.Rr.MESSAGE || (!!(0, x.$U)(r.data.channel_id, r.data.message_id) && r.data.channel_id !== t)) && (r.type !== A.Rr.SUMMARY || (!!(0, x.$U)(r.data.channel_id, r.data.summary_id) && r.data.channel_id !== t))) n.push(r);
    }
    return n;
}
function em(e, t) {
    return e.filter((e) => (e.type !== A.Rr.MESSAGE && e.type !== A.Rr.SUMMARY && e.type !== A.Rr.GUILD_EVENT) || e.data.channel_id !== t);
}
function ep(e, t) {
    if ((0, x.jv)(t) === x.aL.MUTED) (R = em(R, e)), ($ = em($, e)), (ee = em(ee, e)), (M = em(M, e)), (U = em(U, e));
}
function eg(e, t) {
    return e.filter((e) => (e.type !== A.Rr.MESSAGE && e.type !== A.Rr.SUMMARY && e.type !== A.Rr.GUILD_EVENT) || e.data.guild_id !== t);
}
function ef(e, t) {
    if ((0, x.jv)(t) === x.aL.MUTED) (R = eg(R, e)), ($ = eg($, e)), (ee = eg(ee, e)), (M = eg(M, e)), (U = eg(U, e));
}
function e_(e) {
    let { type: t, messageId: n, userId: i, emoji: r, reactionType: l } = e,
        a = H[n];
    if (null == a || a.type !== A.Rr.MESSAGE) return !1;
    let s = p.default.getId() === i;
    'MESSAGE_REACTION_ADD' === t ? (a.message = a.message.addReaction(r, s, e.colors, l)) : (a.message = a.message.removeReaction(r, s, l));
}
function eE(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    $.forEach((e, r) => {
        (r > et || !q) && (e.type === A.Rr.MESSAGE || e.type === A.Rr.SUMMARY) && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let r = K,
        [l, a] = eu(M);
    if (((U = eh(l, t)), (K = q ? r && U.length >= A.Lb : r && ea(i)), 0 === n.length && r === K)) return !1;
    if (0 !== n.length) ($ = i), (ee = [...ee, ...n]);
}
class eI extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(E.Z, g.Z, I.ZP, d.Z, v.ZP, p.default, b.Z, s.Z), null != e)) {
            var t, n, i, r, l, a;
            (R = null !== (t = e.dehydratedItems) && void 0 !== t ? t : []).forEach((e) => {
                B[e.id] = e;
            }),
                (F = null !== (n = e.customGuildScores) && void 0 !== n ? n : {}),
                (z = null !== (i = e.customChannelScoresByGuild) && void 0 !== i ? i : {}),
                (J = null !== (r = e.numOpens) && void 0 !== r ? r : 0),
                (D = null !== (l = e.lastOpened) && void 0 !== l ? l : 0),
                (ei = null !== (a = e.lastJoinedRecommendedGuild) && void 0 !== a ? a : 0);
        }
    }
    getVersion() {
        return W;
    }
    getDehydratedItems() {
        return R;
    }
    getNewDehydratedItems() {
        return M;
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
        return null == t || t.type !== A.Rr.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return H;
    }
    getUnreadDisplayItems() {
        return $;
    }
    getNewUnreadDehydratedItems() {
        return U;
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
        return null == z[e] || null == z[e][t] ? x.aL.UNKNOWN : (0, x.jv)(z[e][t]);
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
        return null == X || X.channelId !== e ? null : X;
    }
    isGravitySelectedChannel(e) {
        return null != Q && Q === e;
    }
    getLoadId() {
        return j;
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
    videosMuted() {
        return er;
    }
    isRefreshing() {
        return el;
    }
    getState() {
        return {
            dehydratedItems: R,
            numOpens: J,
            customGuildScores: F,
            customChannelScoresByGuild: z,
            lastOpened: D,
            lastJoinedRecommendedGuild: ei
        };
    }
}
y(eI, 'displayName', 'GravityStore'),
    y(eI, 'persistKey', 'GravityStore'),
    (t.Z = new eI(a.Z, {
        POST_CONNECTION_OPEN: function () {
            if (R.length > 0 && (!q || 0 === W)) {
                let [e, t] = eu(R);
                ($ = e), (ee = t), eo(), (et = 0), (0, x.em)([...$, ...ee], 0, A.xy);
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
                type: A.Rr.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: Z.d4z.GUILD_TEXT
                }
            };
            if (
                ((B[t.message.id] = n),
                (H[t.message.id] = {
                    ...n,
                    message: (0, h.e5)(t.message)
                }),
                null == j && null == G)
            ) {
                let [e, t] = eu((R = [n, ...R]));
                ($ = e), (ee = t);
            } else (M = [n, ...M]), ed();
        },
        LOAD_GRAVITY_DEHYDRATED: function (e) {
            let { items: t, loadId: n, startTime: i, isReloading: r } = e;
            (M = t.filter((e) => A.zd.has(e.type))),
                !(function () {
                    let e = new Set();
                    M.forEach((t) => {
                        e.add(t.id);
                    }),
                        M.forEach((e) => {
                            (B[e.id] = e), e.type === A.Rr.CUSTOM_STATUS && (C.Z.isBlockedOrIgnored(e.data.user_id) ? (V[e.id] = !0) : (H[e.id] = (0, x.mV)(e)));
                        });
                })(),
                (G = {
                    load_id: n,
                    load_time_millis: Date.now() - i,
                    feed_item_ids: M.map((e) => e.id)
                });
            let [l, a] = eu(M);
            if (((U = eh(l)), q && 0 !== W)) {
                let e = U.length > A.Lb;
                !r && (K = e), e && (0, x.em)([...l, ...a], 0, A.xy);
            } else
                (W = 0),
                    !q && ea(l) && ((K = !0), (Y = !0)),
                    ed({
                        newUnread: l,
                        newRead: a
                    });
        },
        LOAD_GRAVITY_HYDRATED: function (e) {
            let { messageItems: t, summaryItems: n, activityItems: i, requestMessageItems: r, requestSummaryItems: l, requestActivityItems: a, startingIndex: s, endingIndex: o } = e;
            H = { ...H };
            let c = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
                d = n.reduce((e, t) => ((e[t.id] = t), e), {}),
                u = i.reduce((e, t) => ((e[t.id] = t), e), {});
            r.forEach((e) => {
                let t = c[e.message_id];
                if (null == t) {
                    V[e.message_id] = !0;
                    return;
                }
                let n = B[e.message_id];
                null == n &&
                    (n = {
                        id: e.message_id,
                        type: A.Rr.MESSAGE,
                        score: -1,
                        data: {
                            guild_id: t.guild_id,
                            channel_id: t.channel_id,
                            message_id: t.message.id,
                            channel_type: Z.d4z.GUILD_TEXT,
                            has_mention: !1
                        }
                    }),
                    null != E.Z.getMessage(t.channel_id, t.message.id)
                        ? (H[t.message.id] = {
                              ...n,
                              message: E.Z.getMessage(t.channel_id, t.message.id)
                          })
                        : (H[t.message.id] = {
                              ...n,
                              message: (0, h.e5)(t.message)
                          });
            }),
                l.forEach((e) => {
                    let t = d[e.summary_id];
                    if (null == t) {
                        V[e.summary_id] = !0;
                        return;
                    }
                    let n = B[e.summary_id];
                    if (null == n || n.type !== A.Rr.SUMMARY || t.messages.length < 3) {
                        V[e.summary_id] = !0;
                        return;
                    }
                    H[t.id] = {
                        ...n,
                        summary: (0, x.wV)(t, n.data.guild_id)
                    };
                }),
                a.forEach((e) => {
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
                s === et && (et = o);
        },
        LOAD_GRAVITY_CUSTOM_SCORES: function (e) {
            let { scores: t } = e;
            for (let e of t) for (let t of ((F[e.guild_id] = e.guild_score), ef(e.guild_id, e.guild_score), Object.keys(e.custom_channel_scores))) null == z[e.guild_id] && (z[e.guild_id] = {}), (z[e.guild_id][t] = e.custom_channel_scores[t]), ep(t, e.custom_channel_scores[t]);
            (F = { ...F }), (z = { ...z });
        },
        LOAD_GRAVITY_RECOMMENDED_GUILDS: function (e) {
            let { guilds: t } = e;
            (en = t.map((e) => new m.ZP((0, S.PP)(e.guild)))), ec();
        },
        GRAVITY_CUSTOM_SCORES_UPDATED: function (e) {
            let { channelScores: t, guildId: n, guildScore: i } = e;
            null != i && ((F[n] = i), ef(n, i), (F = { ...F })),
                null == t ||
                    t.forEach((e) => {
                        let { channelId: t, score: i } = e;
                        null == z[n] && (z[n] = {}), (z[n][t] = i), ep(t, i), (z = { ...z });
                    });
        },
        RELOAD_GRAVITY: function () {
            if (0 === M.length) return !1;
            ed(), (K = !1);
        },
        GRAVITY_TAB_OPENED: function () {
            (q = !0), (D = Date.now()), Y && ((Y = !1), (K = !1)), J < 5 && J++;
        },
        GRAVITY_FEEDBACK_GIVEN: function () {
            J = 6;
        },
        SET_GRAVITY_SELECTED_SUMMARY: function (e) {
            if (null == e.summaryId) {
                X = null;
                return;
            }
            let t = H[e.summaryId];
            if (null == t || t.type !== A.Rr.SUMMARY) {
                X = null;
                return;
            }
            X = t.summary;
        },
        SET_GRAVITY_SELECTED_CHANNEL: function (e) {
            Q = e.channelId;
        },
        MESSAGE_REACTION_ADD: e_,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { messageId: t, reactions: n } = e,
                i = H[t];
            if (null == i || i.type !== A.Rr.MESSAGE) return !1;
            let r = p.default.getId();
            i.message = i.message.addReactionBatch(n, r);
        },
        MESSAGE_REACTION_REMOVE: e_,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { messageId: t } = e,
                n = H[t];
            if (null == n || n.type !== A.Rr.MESSAGE) return !1;
            n.message = n.message.set('reactions', []);
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { messageId: t, emoji: n } = e,
                i = H[t];
            if (null == i || i.type !== A.Rr.MESSAGE) return !1;
            i.message = i.message.removeReactionsForEmoji(n);
        },
        CHANNEL_ACK: eE,
        MESSAGE_ACK: eE,
        CONTENT_INVENTORY_SET_FEED: function (e) {
            let { feedId: t } = e;
            if (t !== L.YN.GLOBAL_FEED) return !1;
            if (!q) {
                let [e, t] = eu(R);
                ($ = e), (ee = t), eo(), (K = ea(e));
            }
        },
        GRAVITY_JOINED_RECOMMENDED_GUILD: function () {
            ei = Date.now();
        },
        GRAVITY_SET_VIDEOS_MUTED: function (e) {
            let { muted: t } = e;
            er = t;
        },
        GRAVITY_SET_REFRESHING: function (e) {
            let { refreshing: t } = e;
            el = t;
        }
    }));
