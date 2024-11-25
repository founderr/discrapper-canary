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
    S = n(626135),
    N = n(70956),
    T = n(900849),
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
let R = 1 * N.Z.Millis.DAY,
    P = 3 * N.Z.Millis.DAY,
    j = [],
    D = null,
    M = 0,
    w = [],
    k = [],
    U = [],
    G = [],
    B = {},
    V = {},
    H = {},
    F = {},
    z = {},
    Y = {},
    W = 0,
    K = !1,
    q = !1,
    X = !1,
    Q = null,
    J = null,
    $ = null,
    ee = 0,
    et = [],
    en = [],
    ei = 0,
    er = [],
    el = 0,
    ea = !0,
    es = !1;
function eo(e) {
    return Date.now() - M > 6 * N.Z.Millis.HOUR && [...e, ...U, ...k].slice(0, 3).reduce((e, t) => e + t.score, 0) >= b.jp;
}
function ec(e) {
    if (!A.Z.filterStaffContent()) return !0;
    if (e.type === b.Rr.MESSAGE || e.type === b.Rr.SUMMARY) {
        let t = _.Z.getGuild(e.data.guild_id);
        if (null == t || t.hasFeature(L.oNc.INTERNAL_EMPLOYEE_ONLY)) return !1;
    }
    return !0;
}
function ed(e, t, n, i) {
    let r = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < r.length ? r.splice((t + 1) * i, 0, e) : r.push(e);
        }),
        r
    );
}
function eu() {
    (function () {
        let e = _.Z.getGuildIds(),
            t = [];
        for (let i of e) {
            if (null != z[i] && z[i] < 0) continue;
            let e = u.ZP.getGuildScheduledEventsForGuild(i),
                r = 0;
            for (let i of e) {
                if (!(0, u.Z2)(i)) {
                    if ((0, u.BQ)(i, 2 * N.Z.Seconds.DAY) || (0, u.xt)(i)) {
                        var n;
                        if (
                            (null == H[i.id] &&
                                (H[i.id] = {
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
            (V[e.id] = e), null != x.Z.getReadTimestamp(e.id) ? r.push(e) : i.push(e);
        }),
            (k = i),
            (et = ed(et, i, b.Rr.GUILD_EVENT, 7)),
            (en = ed(en, r, b.Rr.GUILD_EVENT, 7));
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
                    null == H[e.content.id] &&
                        (H[e.content.id] = {
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
                    n.add(e.content.id), (V[t.id] = t), null != x.Z.getReadTimestamp(t.id) ? a.push(t) : l.push(t);
                }),
                (U = l),
                (et = ed(et, l, b.Rr.ACTIVITY, 5)),
                (en = ed(en, a, b.Rr.ACTIVITY, 5));
        })(),
        eh();
}
function eh() {
    if (((et = et.filter((e) => e.type !== b.Rr.RECOMMENDED_GUILDS)), (en = en.filter((e) => e.type !== b.Rr.RECOMMENDED_GUILDS)), 0 === er.length)) return;
    let e = 'recommendedGuilds',
        t = Object.values(_.Z.getGuilds()).filter((e) => e.isCommunity()).length >= 5,
        n = x.Z.getReadTimestamp(e);
    if (t && null != n && Date.now() - el > R && Date.now() - n < P) return;
    let i = {
        id: e,
        type: b.Rr.RECOMMENDED_GUILDS,
        score: 50
    };
    if (((H[i.id] = i), (V[i.id] = i), 0 === et.length)) en = [i, ...en];
    else if ((!t && et.length < 5) || (t && et.length < 10)) et = [...et, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        et.splice(e, 0, i);
    } else et.splice(5, 0, i);
}
function em() {
    let e = new Set();
    null != $ && (w = [$, ...w]),
        w.forEach((t) => {
            e.add(t.id);
        }),
        w.forEach((e) => {
            (V[e.id] = e), e.type === b.Rr.CUSTOM_STATUS && (C.Z.isBlockedOrIgnored(e.data.user_id) ? (F[e.id] = !0) : (H[e.id] = (0, Z.mV)(e)));
        });
}
function ep(e) {
    if ((w.length > 0 && ((j = w), (w = []), (G = [])), W++, null != e)) (et = e.newUnread), (en = e.newRead);
    else {
        let [e, t] = eg(j);
        (et = e), (en = t);
    }
    if ((eu(), null != B.load_id && D !== B.load_id)) {
        var t;
        S.default.track(L.rMx.FEED_LOADED, {
            ...B,
            unread_feed_item_ids: et.map((e) => e.id),
            read_feed_item_ids: en.map((e) => e.id),
            home_session_id: 'gravity',
            unread_feed_item_types: et.map((e) => (0, b.v$)(e)),
            read_feed_item_types: en.map((e) => (0, b.v$)(e))
        }),
            (D = null !== (t = B.load_id) && void 0 !== t ? t : null),
            (B = {});
    }
    (ei = 0), (0, Z.em)([...et, ...en], 0, b.xy), (es = !1);
}
function eg(e) {
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
function ef(e, t) {
    let n = [],
        i = new Set(j.map((e) => e.id));
    for (let r of e) {
        if (!(r.type === b.Rr.RECOMMENDED_GUILDS || i.has(r.id)) && null == x.Z.getReadTimestamp(r.id) && (r.type !== b.Rr.MESSAGE || (!!(0, Z.$U)(r.data.channel_id, r.data.message_id) && r.data.channel_id !== t)) && (r.type !== b.Rr.SUMMARY || (!!(0, Z.$U)(r.data.channel_id, r.data.summary_id) && r.data.channel_id !== t))) n.push(r);
    }
    return n;
}
function e_(e, t) {
    return e.filter((e) => (e.type !== b.Rr.MESSAGE && e.type !== b.Rr.SUMMARY && e.type !== b.Rr.GUILD_EVENT) || e.data.channel_id !== t);
}
function eE(e, t) {
    if ((0, Z.jv)(t) === Z.aL.MUTED) (j = e_(j, e)), (et = e_(et, e)), (en = e_(en, e)), (w = e_(w, e)), (G = e_(G, e));
}
function eI(e, t) {
    return e.filter((e) => (e.type !== b.Rr.MESSAGE && e.type !== b.Rr.SUMMARY && e.type !== b.Rr.GUILD_EVENT) || e.data.guild_id !== t);
}
function eC(e, t) {
    if ((0, Z.jv)(t) === Z.aL.MUTED) (j = eI(j, e)), (et = eI(et, e)), (en = eI(en, e)), (w = eI(w, e)), (G = eI(G, e));
}
function ev(e) {
    let { type: t, messageId: n, userId: i, emoji: r, reactionType: l } = e,
        a = H[n];
    if (null == a || a.type !== b.Rr.MESSAGE) return !1;
    let s = p.default.getId() === i;
    'MESSAGE_REACTION_ADD' === t ? (a.message = a.message.addReaction(r, s, e.colors, l)) : (a.message = a.message.removeReaction(r, s, l));
}
function eS(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    et.forEach((e, r) => {
        (r > ei || !X) && (e.type === b.Rr.MESSAGE || e.type === b.Rr.SUMMARY) && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let r = q,
        [l, a] = eg(w);
    if (((G = ef(l, t)), (q = X ? r && G.length >= b.Lb : r && eo(i)), 0 === n.length && r === q)) return !1;
    if (0 !== n.length) (et = i), (en = [...en, ...n]);
}
class eN extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(E.Z, g.Z, I.ZP, d.Z, v.ZP, p.default, x.Z, s.Z, A.Z), null != e)) {
            var t, n, i, r, l, a;
            (j = null !== (t = e.dehydratedItems) && void 0 !== t ? t : []).forEach((e) => {
                V[e.id] = e;
            }),
                (z = null !== (n = e.customGuildScores) && void 0 !== n ? n : {}),
                (Y = null !== (i = e.customChannelScoresByGuild) && void 0 !== i ? i : {}),
                (ee = null !== (r = e.numOpens) && void 0 !== r ? r : 0),
                (M = null !== (l = e.lastOpened) && void 0 !== l ? l : 0),
                (el = null !== (a = e.lastJoinedRecommendedGuild) && void 0 !== a ? a : 0);
        }
    }
    getVersion() {
        return W;
    }
    getDehydratedItems() {
        return j;
    }
    getNewDehydratedItems() {
        return w;
    }
    getDehydratedItem(e) {
        var t;
        return null !== (t = V[e]) && void 0 !== t ? t : null;
    }
    getHydratedItem(e) {
        var t;
        return null !== (t = H[e]) && void 0 !== t ? t : null;
    }
    getMessage(e) {
        let t = H[e];
        return null == t || t.type !== b.Rr.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return H;
    }
    getUnreadDisplayItems() {
        return et;
    }
    getNewUnreadDehydratedItems() {
        return G;
    }
    getReadDisplayItems() {
        return en;
    }
    getNextIndexToHydrate() {
        return ei;
    }
    getMissingItems() {
        return F;
    }
    getCustomChannelScore(e, t) {
        return null == Y[e] || null == Y[e][t] ? Z.aL.UNKNOWN : (0, Z.jv)(Y[e][t]);
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
        return 5 === ee;
    }
    hasOpened() {
        return X;
    }
    getDiscoverableGuilds() {
        return er;
    }
    videosMuted() {
        return ea;
    }
    isRefreshing() {
        return es;
    }
    notificationItem() {
        return $;
    }
    getState() {
        return {
            dehydratedItems: j,
            numOpens: ee,
            customGuildScores: z,
            customChannelScoresByGuild: Y,
            lastOpened: M,
            lastJoinedRecommendedGuild: el
        };
    }
}
O(eN, 'displayName', 'GravityStore'),
    O(eN, 'persistKey', 'GravityStore'),
    (t.Z = new eN(a.Z, {
        POST_CONNECTION_OPEN: function () {
            if (j.length > 0 && (!X || 0 === W)) {
                let [e, t] = eg(j);
                (et = e), (en = t), eu(), (ei = 0), (0, Z.em)([...et, ...en], 0, b.xy);
            }
        },
        LOGOUT: function () {
            return !1;
        },
        LOAD_GRAVITY_FROM_NOTIFICATION: function (e) {
            let { messageItem: t, customStatusItem: n } = e;
            if (null != n) return ($ = n), null != D && ((w = w.length > 0 ? w : [...j]), em(), ep()), !0;
            if (null != t) {
                let e = {
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
                    ((V[t.message.id] = e),
                    (H[t.message.id] = {
                        ...e,
                        message: (0, h.e5)(t.message)
                    }),
                    null == D && null == B)
                ) {
                    let [t, n] = eg((j = [e, ...j]));
                    (et = t), (en = n);
                } else (w = [e, ...w]), ep();
                return !0;
            }
            return !1;
        },
        LOAD_GRAVITY_DEHYDRATED: function (e) {
            let { items: t, loadId: n, startTime: i, isReloading: r } = e;
            (w = t.filter((e) => b.zd.has(e.type)).filter(ec)),
                em(),
                (B = {
                    load_id: n,
                    load_time_millis: Date.now() - i,
                    feed_item_ids: w.map((e) => e.id)
                });
            let [l, a] = eg(w);
            if (((G = ef(l)), X && 0 !== W)) {
                let e = G.length > b.Lb;
                !r && (q = e), e && (0, Z.em)([...l, ...a], 0, b.xy);
            } else
                (W = 0),
                    !X && eo(l) && ((q = !0), (K = !0)),
                    ep({
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
                    F[e.message_id] = !0;
                    return;
                }
                let n = V[e.message_id];
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
                        F[e.summary_id] = !0;
                        return;
                    }
                    let n = V[e.summary_id];
                    if (null == n || n.type !== b.Rr.SUMMARY || t.messages.length < 3) {
                        F[e.summary_id] = !0;
                        return;
                    }
                    H[t.id] = {
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
                    let n = V[e.content_id];
                    if (null == n) {
                        F[e.content_id] = !0;
                        return;
                    }
                    H[t.id] = {
                        ...n,
                        activity: t
                    };
                }),
                s === ei && (ei = o);
        },
        LOAD_GRAVITY_CUSTOM_SCORES: function (e) {
            let { scores: t } = e;
            for (let e of t) for (let t of ((z[e.guild_id] = e.guild_score), eC(e.guild_id, e.guild_score), Object.keys(e.custom_channel_scores))) null == Y[e.guild_id] && (Y[e.guild_id] = {}), (Y[e.guild_id][t] = e.custom_channel_scores[t]), eE(t, e.custom_channel_scores[t]);
            (z = { ...z }), (Y = { ...Y });
        },
        LOAD_GRAVITY_RECOMMENDED_GUILDS: function (e) {
            let { guilds: t } = e;
            (er = t.map((e) => new m.ZP((0, T.PP)(e.guild)))), eh();
        },
        GRAVITY_CUSTOM_SCORES_UPDATED: function (e) {
            let { channelScores: t, guildId: n, guildScore: i } = e;
            null != i && ((z[n] = i), eC(n, i), (z = { ...z })),
                null == t ||
                    t.forEach((e) => {
                        let { channelId: t, score: i } = e;
                        null == Y[n] && (Y[n] = {}), (Y[n][t] = i), eE(t, i), (Y = { ...Y });
                    });
        },
        RELOAD_GRAVITY: function () {
            if (0 === w.length) return !1;
            ep(), (q = !1);
        },
        GRAVITY_TAB_OPENED: function () {
            (X = !0), (M = Date.now()), K && ((K = !1), (q = !1)), ee < 5 && ee++;
        },
        GRAVITY_FEEDBACK_GIVEN: function () {
            ee = 6;
        },
        SET_GRAVITY_SELECTED_SUMMARY: function (e) {
            if (null == e.summaryId) {
                Q = null;
                return;
            }
            let t = H[e.summaryId];
            if (null == t || t.type !== b.Rr.SUMMARY) {
                Q = null;
                return;
            }
            Q = t.summary;
        },
        SET_GRAVITY_SELECTED_CHANNEL: function (e) {
            J = e.channelId;
        },
        MESSAGE_REACTION_ADD: ev,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { messageId: t, reactions: n } = e,
                i = H[t];
            if (null == i || i.type !== b.Rr.MESSAGE) return !1;
            let r = p.default.getId();
            i.message = i.message.addReactionBatch(n, r);
        },
        MESSAGE_REACTION_REMOVE: ev,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { messageId: t } = e,
                n = H[t];
            if (null == n || n.type !== b.Rr.MESSAGE) return !1;
            n.message = n.message.set('reactions', []);
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { messageId: t, emoji: n } = e,
                i = H[t];
            if (null == i || i.type !== b.Rr.MESSAGE) return !1;
            i.message = i.message.removeReactionsForEmoji(n);
        },
        CHANNEL_ACK: eS,
        MESSAGE_ACK: eS,
        CONTENT_INVENTORY_SET_FEED: function (e) {
            let { feedId: t } = e;
            if (t !== y.YN.GLOBAL_FEED) return !1;
            if (!X) {
                let [e, t] = eg(j);
                (et = e), (en = t), eu(), (q = eo(e));
            }
        },
        GRAVITY_JOINED_RECOMMENDED_GUILD: function () {
            el = Date.now();
        },
        GRAVITY_SET_VIDEOS_MUTED: function (e) {
            let { muted: t } = e;
            ea = t;
        },
        GRAVITY_SET_REFRESHING: function (e) {
            let { refreshing: t } = e;
            es = t;
        }
    }));
