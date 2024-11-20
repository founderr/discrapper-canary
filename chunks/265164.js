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
    A = n(715035),
    b = n(761080),
    x = n(584925),
    Z = n(207205),
    L = n(981631),
    y = n(206583);
function O(e, t, n) {
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
let P = 1 * T.Z.Millis.DAY,
    R = 3 * T.Z.Millis.DAY,
    j = [],
    D = null,
    M = 0,
    w = [],
    k = [],
    U = [],
    G = [],
    B = {},
    H = {},
    V = {},
    F = {},
    z = {},
    W = {},
    Y = 0,
    K = !1,
    q = !1,
    X = !1,
    Q = null,
    J = null,
    $ = 0,
    ee = [],
    et = [],
    en = 0,
    ei = [],
    er = 0,
    el = !0,
    ea = !1;
function es(e) {
    return Date.now() - M > 6 * T.Z.Millis.HOUR && [...e, ...U, ...k].slice(0, 3).reduce((e, t) => e + t.score, 0) >= b.jp;
}
function eo(e) {
    if (!A.Z.filterStaffContent()) return !0;
    if (e.type === b.Rr.MESSAGE || e.type === b.Rr.SUMMARY) {
        let t = _.Z.getGuild(e.data.guild_id);
        if (null == t || t.hasFeature(L.oNc.INTERNAL_EMPLOYEE_ONLY)) return !1;
    }
    return !0;
}
function ec(e, t, n, i) {
    let r = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < r.length ? r.splice((t + 1) * i, 0, e) : r.push(e);
        }),
        r
    );
}
function ed() {
    (function () {
        let e = _.Z.getGuildIds(),
            t = [];
        for (let i of e) {
            if (null != z[i] && z[i] < 0) continue;
            let e = u.ZP.getGuildScheduledEventsForGuild(i),
                r = 0;
            for (let i of e) {
                if (!(0, u.Z2)(i)) {
                    if ((0, u.BQ)(i, 2 * T.Z.Seconds.DAY) || (0, u.xt)(i)) {
                        var n;
                        if (
                            (null == V[i.id] &&
                                (V[i.id] = {
                                    id: i.id,
                                    type: b.Rr.GUILD_EVENT,
                                    score: 10,
                                    event_id: i.id
                                }),
                            t.push({
                                id: i.id,
                                type: b.Rr.GUILD_EVENT,
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
            (H[e.id] = e), null != x.Z.getReadTimestamp(e.id) ? r.push(e) : i.push(e);
        }),
            (k = i),
            (ee = ec(ee, i, b.Rr.GUILD_EVENT, 7)),
            (et = ec(et, r, b.Rr.GUILD_EVENT, 7));
    })(),
        (function () {
            var e, t;
            let n = new Set(),
                i = {},
                l = [],
                a = [],
                d = null !== (t = null === (e = s.Z.getFeed(y.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.entries) && void 0 !== t ? t : [];
            d.sort((e, t) => e.rank - t.rank),
                d.forEach((e) => {
                    if (n.has(e.content.id) || (e.content.content_type !== r.s.PLAYED_GAME && e.content.content_type !== r.s.CUSTOM_STATUS && e.content.content_type !== r.s.TOP_GAME) || (0, c.n2)(e.content)) return;
                    if ((0, o.dX)(e.content)) {
                        if ((null == i[e.content.author_id] && (i[e.content.author_id] = new Set()), i[e.content.author_id].has(e.content.extra.application_id))) return;
                        i[e.content.author_id].add(e.content.extra.application_id);
                    }
                    null == V[e.content.id] &&
                        (V[e.content.id] = {
                            id: e.content.id,
                            type: b.Rr.ACTIVITY,
                            score: 15,
                            activity: e.content
                        });
                    let t = {
                        id: e.content.id,
                        type: b.Rr.ACTIVITY,
                        score: 15,
                        data: {
                            user_id: e.content.author_id,
                            content_id: e.content.id
                        }
                    };
                    n.add(e.content.id), (H[t.id] = t), null != x.Z.getReadTimestamp(t.id) ? a.push(t) : l.push(t);
                }),
                (U = l),
                (ee = ec(ee, l, b.Rr.ACTIVITY, 5)),
                (et = ec(et, a, b.Rr.ACTIVITY, 5));
        })(),
        eu();
}
function eu() {
    if (((ee = ee.filter((e) => e.type !== b.Rr.RECOMMENDED_GUILDS)), (et = et.filter((e) => e.type !== b.Rr.RECOMMENDED_GUILDS)), 0 === ei.length)) return;
    let e = 'recommendedGuilds',
        t = Object.values(_.Z.getGuilds()).filter((e) => e.isCommunity()).length >= 5,
        n = x.Z.getReadTimestamp(e);
    if (t && null != n && Date.now() - er > P && Date.now() - n < R) return;
    let i = {
        id: e,
        type: b.Rr.RECOMMENDED_GUILDS,
        score: 50
    };
    if (((V[i.id] = i), (H[i.id] = i), 0 === ee.length)) et = [i, ...et];
    else if ((!t && ee.length < 5) || (t && ee.length < 10)) ee = [...ee, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        ee.splice(e, 0, i);
    } else ee.splice(5, 0, i);
}
function eh(e) {
    if ((w.length > 0 && ((j = w), (w = []), (G = [])), Y++, null != e)) (ee = e.newUnread), (et = e.newRead);
    else {
        let [e, t] = em(j);
        (ee = e), (et = t);
    }
    if ((ed(), null != B.load_id && D !== B.load_id)) {
        var t;
        N.default.track(L.rMx.FEED_LOADED, {
            ...B,
            unread_feed_item_ids: ee.map((e) => e.id),
            read_feed_item_ids: et.map((e) => e.id),
            home_session_id: 'gravity',
            unread_feed_item_types: ee.map((e) => (0, b.v$)(e)),
            read_feed_item_types: et.map((e) => (0, b.v$)(e))
        }),
            (D = null !== (t = B.load_id) && void 0 !== t ? t : null),
            (B = {});
    }
    (en = 0), (0, Z.em)([...ee, ...et], 0, b.xy), (ea = !1);
}
function em(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let r = null != x.Z.getReadTimestamp(e.id);
            e.type === b.Rr.MESSAGE ? (r = r || !(0, Z.$U)(e.data.channel_id, e.data.message_id)) : e.type === b.Rr.SUMMARY && (r = r || !(0, Z.$U)(e.data.channel_id, e.data.summary_id)), r ? t.push(e) : e.type === b.Rr.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
        }),
        [[...i, ...n], t.sort((e, t) => (0, Z.Rm)(e.id, t.id))]
    );
}
function ep(e, t) {
    let n = [],
        i = new Set(j.map((e) => e.id));
    for (let r of e) {
        if (!(r.type === b.Rr.RECOMMENDED_GUILDS || i.has(r.id)) && null == x.Z.getReadTimestamp(r.id) && (r.type !== b.Rr.MESSAGE || (!!(0, Z.$U)(r.data.channel_id, r.data.message_id) && r.data.channel_id !== t)) && (r.type !== b.Rr.SUMMARY || (!!(0, Z.$U)(r.data.channel_id, r.data.summary_id) && r.data.channel_id !== t))) n.push(r);
    }
    return n;
}
function eg(e, t) {
    return e.filter((e) => (e.type !== b.Rr.MESSAGE && e.type !== b.Rr.SUMMARY && e.type !== b.Rr.GUILD_EVENT) || e.data.channel_id !== t);
}
function ef(e, t) {
    if ((0, Z.jv)(t) === Z.aL.MUTED) (j = eg(j, e)), (ee = eg(ee, e)), (et = eg(et, e)), (w = eg(w, e)), (G = eg(G, e));
}
function e_(e, t) {
    return e.filter((e) => (e.type !== b.Rr.MESSAGE && e.type !== b.Rr.SUMMARY && e.type !== b.Rr.GUILD_EVENT) || e.data.guild_id !== t);
}
function eE(e, t) {
    if ((0, Z.jv)(t) === Z.aL.MUTED) (j = e_(j, e)), (ee = e_(ee, e)), (et = e_(et, e)), (w = e_(w, e)), (G = e_(G, e));
}
function eI(e) {
    let { type: t, messageId: n, userId: i, emoji: r, reactionType: l } = e,
        a = V[n];
    if (null == a || a.type !== b.Rr.MESSAGE) return !1;
    let s = p.default.getId() === i;
    'MESSAGE_REACTION_ADD' === t ? (a.message = a.message.addReaction(r, s, e.colors, l)) : (a.message = a.message.removeReaction(r, s, l));
}
function eC(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    ee.forEach((e, r) => {
        (r > en || !X) && (e.type === b.Rr.MESSAGE || e.type === b.Rr.SUMMARY) && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let r = q,
        [l, a] = em(w);
    if (((G = ep(l, t)), (q = X ? r && G.length >= b.Lb : r && es(i)), 0 === n.length && r === q)) return !1;
    if (0 !== n.length) (ee = i), (et = [...et, ...n]);
}
class ev extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(E.Z, g.Z, I.ZP, d.Z, v.ZP, p.default, x.Z, s.Z, A.Z), null != e)) {
            var t, n, i, r, l, a;
            (j = null !== (t = e.dehydratedItems) && void 0 !== t ? t : []).forEach((e) => {
                H[e.id] = e;
            }),
                (z = null !== (n = e.customGuildScores) && void 0 !== n ? n : {}),
                (W = null !== (i = e.customChannelScoresByGuild) && void 0 !== i ? i : {}),
                ($ = null !== (r = e.numOpens) && void 0 !== r ? r : 0),
                (M = null !== (l = e.lastOpened) && void 0 !== l ? l : 0),
                (er = null !== (a = e.lastJoinedRecommendedGuild) && void 0 !== a ? a : 0);
        }
    }
    getVersion() {
        return Y;
    }
    getDehydratedItems() {
        return j;
    }
    getNewDehydratedItems() {
        return w;
    }
    getDehydratedItem(e) {
        var t;
        return null !== (t = H[e]) && void 0 !== t ? t : null;
    }
    getHydratedItem(e) {
        var t;
        return null !== (t = V[e]) && void 0 !== t ? t : null;
    }
    getMessage(e) {
        let t = V[e];
        return null == t || t.type !== b.Rr.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return V;
    }
    getUnreadDisplayItems() {
        return ee;
    }
    getNewUnreadDehydratedItems() {
        return G;
    }
    getReadDisplayItems() {
        return et;
    }
    getNextIndexToHydrate() {
        return en;
    }
    getMissingItems() {
        return F;
    }
    getCustomChannelScore(e, t) {
        return null == W[e] || null == W[e][t] ? Z.aL.UNKNOWN : (0, Z.jv)(W[e][t]);
    }
    getCustomGuildScore(e) {
        var t;
        return null !== (t = z[e]) && void 0 !== t ? t : 0;
    }
    getCustomGuildScores() {
        return z;
    }
    hasNewContent() {
        return q;
    }
    getSelectedSummary(e) {
        return null == Q || Q.channelId !== e ? null : Q;
    }
    isGravitySelectedChannel(e) {
        return null != J && J === e;
    }
    getLoadId() {
        return D;
    }
    hasOpenedEnoughTimes() {
        return 5 === $;
    }
    hasOpened() {
        return X;
    }
    getDiscoverableGuilds() {
        return ei;
    }
    videosMuted() {
        return el;
    }
    isRefreshing() {
        return ea;
    }
    getState() {
        return {
            dehydratedItems: j,
            numOpens: $,
            customGuildScores: z,
            customChannelScoresByGuild: W,
            lastOpened: M,
            lastJoinedRecommendedGuild: er
        };
    }
}
O(ev, 'displayName', 'GravityStore'),
    O(ev, 'persistKey', 'GravityStore'),
    (t.Z = new ev(a.Z, {
        POST_CONNECTION_OPEN: function () {
            if (j.length > 0 && (!X || 0 === Y)) {
                let [e, t] = em(j);
                (ee = e), (et = t), ed(), (en = 0), (0, Z.em)([...ee, ...et], 0, b.xy);
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
                type: b.Rr.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: L.d4z.GUILD_TEXT
                }
            };
            if (
                ((H[t.message.id] = n),
                (V[t.message.id] = {
                    ...n,
                    message: (0, h.e5)(t.message)
                }),
                null == D && null == B)
            ) {
                let [e, t] = em((j = [n, ...j]));
                (ee = e), (et = t);
            } else (w = [n, ...w]), eh();
        },
        LOAD_GRAVITY_DEHYDRATED: function (e) {
            let { items: t, loadId: n, startTime: i, isReloading: r } = e;
            (w = t.filter((e) => b.zd.has(e.type)).filter(eo)),
                !(function () {
                    let e = new Set();
                    w.forEach((t) => {
                        e.add(t.id);
                    }),
                        w.forEach((e) => {
                            (H[e.id] = e), e.type === b.Rr.CUSTOM_STATUS && (C.Z.isBlockedOrIgnored(e.data.user_id) ? (F[e.id] = !0) : (V[e.id] = (0, Z.mV)(e)));
                        });
                })(),
                (B = {
                    load_id: n,
                    load_time_millis: Date.now() - i,
                    feed_item_ids: w.map((e) => e.id)
                });
            let [l, a] = em(w);
            if (((G = ep(l)), X && 0 !== Y)) {
                let e = G.length > b.Lb;
                !r && (q = e), e && (0, Z.em)([...l, ...a], 0, b.xy);
            } else
                (Y = 0),
                    !X && es(l) && ((q = !0), (K = !0)),
                    eh({
                        newUnread: l,
                        newRead: a
                    });
        },
        LOAD_GRAVITY_HYDRATED: function (e) {
            let { messageItems: t, summaryItems: n, activityItems: i, requestMessageItems: r, requestSummaryItems: l, requestActivityItems: a, startingIndex: s, endingIndex: o } = e;
            V = { ...V };
            let c = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
                d = n.reduce((e, t) => ((e[t.id] = t), e), {}),
                u = i.reduce((e, t) => ((e[t.id] = t), e), {});
            r.forEach((e) => {
                let t = c[e.message_id];
                if (null == t) {
                    F[e.message_id] = !0;
                    return;
                }
                let n = H[e.message_id];
                null == n &&
                    (n = {
                        id: e.message_id,
                        type: b.Rr.MESSAGE,
                        score: -1,
                        data: {
                            guild_id: t.guild_id,
                            channel_id: t.channel_id,
                            message_id: t.message.id,
                            channel_type: L.d4z.GUILD_TEXT,
                            has_mention: !1
                        }
                    }),
                    null != E.Z.getMessage(t.channel_id, t.message.id)
                        ? (V[t.message.id] = {
                              ...n,
                              message: E.Z.getMessage(t.channel_id, t.message.id)
                          })
                        : (V[t.message.id] = {
                              ...n,
                              message: (0, h.e5)(t.message)
                          });
            }),
                l.forEach((e) => {
                    let t = d[e.summary_id];
                    if (null == t) {
                        F[e.summary_id] = !0;
                        return;
                    }
                    let n = H[e.summary_id];
                    if (null == n || n.type !== b.Rr.SUMMARY || t.messages.length < 3) {
                        F[e.summary_id] = !0;
                        return;
                    }
                    V[t.id] = {
                        ...n,
                        summary: (0, Z.wV)(t, n.data.guild_id)
                    };
                }),
                a.forEach((e) => {
                    let t = u[e.content_id];
                    if (null == t) {
                        F[e.content_id] = !0;
                        return;
                    }
                    let n = H[e.content_id];
                    if (null == n) {
                        F[e.content_id] = !0;
                        return;
                    }
                    V[t.id] = {
                        ...n,
                        activity: t
                    };
                }),
                s === en && (en = o);
        },
        LOAD_GRAVITY_CUSTOM_SCORES: function (e) {
            let { scores: t } = e;
            for (let e of t) for (let t of ((z[e.guild_id] = e.guild_score), eE(e.guild_id, e.guild_score), Object.keys(e.custom_channel_scores))) null == W[e.guild_id] && (W[e.guild_id] = {}), (W[e.guild_id][t] = e.custom_channel_scores[t]), ef(t, e.custom_channel_scores[t]);
            (z = { ...z }), (W = { ...W });
        },
        LOAD_GRAVITY_RECOMMENDED_GUILDS: function (e) {
            let { guilds: t } = e;
            (ei = t.map((e) => new m.ZP((0, S.PP)(e.guild)))), eu();
        },
        GRAVITY_CUSTOM_SCORES_UPDATED: function (e) {
            let { channelScores: t, guildId: n, guildScore: i } = e;
            null != i && ((z[n] = i), eE(n, i), (z = { ...z })),
                null == t ||
                    t.forEach((e) => {
                        let { channelId: t, score: i } = e;
                        null == W[n] && (W[n] = {}), (W[n][t] = i), ef(t, i), (W = { ...W });
                    });
        },
        RELOAD_GRAVITY: function () {
            if (0 === w.length) return !1;
            eh(), (q = !1);
        },
        GRAVITY_TAB_OPENED: function () {
            (X = !0), (M = Date.now()), K && ((K = !1), (q = !1)), $ < 5 && $++;
        },
        GRAVITY_FEEDBACK_GIVEN: function () {
            $ = 6;
        },
        SET_GRAVITY_SELECTED_SUMMARY: function (e) {
            if (null == e.summaryId) {
                Q = null;
                return;
            }
            let t = V[e.summaryId];
            if (null == t || t.type !== b.Rr.SUMMARY) {
                Q = null;
                return;
            }
            Q = t.summary;
        },
        SET_GRAVITY_SELECTED_CHANNEL: function (e) {
            J = e.channelId;
        },
        MESSAGE_REACTION_ADD: eI,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { messageId: t, reactions: n } = e,
                i = V[t];
            if (null == i || i.type !== b.Rr.MESSAGE) return !1;
            let r = p.default.getId();
            i.message = i.message.addReactionBatch(n, r);
        },
        MESSAGE_REACTION_REMOVE: eI,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { messageId: t } = e,
                n = V[t];
            if (null == n || n.type !== b.Rr.MESSAGE) return !1;
            n.message = n.message.set('reactions', []);
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { messageId: t, emoji: n } = e,
                i = V[t];
            if (null == i || i.type !== b.Rr.MESSAGE) return !1;
            i.message = i.message.removeReactionsForEmoji(n);
        },
        CHANNEL_ACK: eC,
        MESSAGE_ACK: eC,
        CONTENT_INVENTORY_SET_FEED: function (e) {
            let { feedId: t } = e;
            if (t !== y.YN.GLOBAL_FEED) return !1;
            if (!X) {
                let [e, t] = em(j);
                (ee = e), (et = t), ed(), (q = es(e));
            }
        },
        GRAVITY_JOINED_RECOMMENDED_GUILD: function () {
            er = Date.now();
        },
        GRAVITY_SET_VIDEOS_MUTED: function (e) {
            let { muted: t } = e;
            el = t;
        },
        GRAVITY_SET_REFRESHING: function (e) {
            let { refreshing: t } = e;
            ea = t;
        }
    }));
