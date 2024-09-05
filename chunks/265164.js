n(653041), n(47120), n(724458);
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
    h = n(314897),
    E = n(592125),
    m = n(165630),
    I = n(430824),
    g = n(375954),
    p = n(306680),
    T = n(699516),
    S = n(9156),
    C = n(626135),
    f = n(70956),
    N = n(761080),
    A = n(584925),
    v = n(207205),
    L = n(981631),
    Z = n(206583);
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
let O = [],
    x = null,
    b = 0,
    P = [],
    M = [],
    D = {},
    y = {},
    j = {},
    U = {},
    G = {},
    w = {},
    k = 0,
    B = !1,
    H = !1,
    V = !1,
    F = null,
    Y = null,
    W = 0,
    z = [],
    K = [],
    q = 0;
function Q() {
    let e = I.Z.getGuildIds(),
        t = [];
    for (let i of e) {
        if (null != G[i] && G[i] < 0) continue;
        let e = u.ZP.getGuildScheduledEventsForGuild(i),
            a = 0;
        for (let i of e) {
            if (!(0, u.Z2)(i)) {
                if ((0, u.BQ)(i, 2 * f.Z.Seconds.DAY) || (0, u.xt)(i)) {
                    var n;
                    if (
                        (null == j[i.id] &&
                            (j[i.id] = {
                                id: i.id,
                                type: N.Rr.GUILD_EVENT,
                                score: 50,
                                event_id: i.id
                            }),
                        t.push({
                            id: i.id,
                            type: N.Rr.GUILD_EVENT,
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
        (y[e.id] = e), null != A.Z.getReadTimestamp(e.id) ? a.push(e) : i.push(e);
    }),
        (z = X(z, i)),
        (K = X(K, a));
}
function X(e, t) {
    let n = e.filter((e) => e.type !== N.Rr.GUILD_EVENT);
    return (
        t.forEach((e, t) => {
            (t + 1) * 7 < n.length ? n.splice((t + 1) * 7, 0, e) : n.push(e);
        }),
        n
    );
}
function J(e) {
    var t, n;
    let i = e.filter((e) => e.type !== N.Rr.ACTIVITY),
        s = new Set(i.map((e) => e.id)),
        r = {},
        d = null !== (n = null === (t = l.Z.getFeed(Z.YN.GLOBAL_FEED)) || void 0 === t ? void 0 : t.entries) && void 0 !== n ? n : [];
    return (
        d.sort((e, t) => e.rank - t.rank),
        d.forEach((e, t) => {
            if (s.has(e.content.id) || (e.content.content_type !== a.s.PLAYED_GAME && e.content.content_type !== a.s.CUSTOM_STATUS && e.content.content_type !== a.s.TOP_GAME) || (0, c.n2)(e.content)) return;
            if ((0, o.dX)(e.content)) {
                if ((null == r[e.content.author_id] && (r[e.content.author_id] = new Set()), r[e.content.author_id].has(e.content.extra.application_id))) return;
                r[e.content.author_id].add(e.content.extra.application_id);
            }
            null == j[e.content.id] &&
                (j[e.content.id] = {
                    id: e.content.id,
                    type: N.Rr.ACTIVITY,
                    score: 50,
                    activity: e.content
                });
            let n = {
                id: e.content.id,
                type: N.Rr.ACTIVITY,
                score: 50,
                data: {
                    user_id: e.content.author_id,
                    content_id: e.content.id
                }
            };
            (y[n.id] = n), (t + 1) * 5 < i.length ? i.splice((t + 1) * 5, 0, n) : i.push(n);
        }),
        i
    );
}
function $(e) {
    if ((P.length > 0 && ((O = P), (P = []), (M = [])), k++, null != e)) (z = e.newUnread), (K = e.newRead);
    else {
        let [e, t] = ee(O);
        (z = e), (K = t);
    }
    if ((Q(), null != D.load_id && x !== D.load_id)) {
        var t;
        C.default.track(L.rMx.FEED_LOADED, {
            ...D,
            unread_feed_item_ids: z.map((e) => e.id),
            read_feed_item_ids: K.map((e) => e.id),
            home_session_id: 'gravity'
        }),
            (x = null !== (t = D.load_id) && void 0 !== t ? t : null),
            (D = {});
    }
    (q = 0), (0, v.em)([...z, ...K], 0, N.xy);
}
function ee(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let a = null != A.Z.getReadTimestamp(e.id);
            e.type === N.Rr.MESSAGE ? (a = a || !(0, v.$U)(e.data.channel_id, e.data.message_id)) : e.type === N.Rr.SUMMARY && (a = a || !(0, v.$U)(e.data.channel_id, e.data.summary_id)), a ? t.push(e) : e.type === N.Rr.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
        }),
        [[...i, ...n], t.sort((e, t) => (0, v.Rm)(e.id, t.id))]
    );
}
function et(e, t) {
    let n = [],
        i = new Set(O.map((e) => e.id));
    for (let a of e) {
        if (!i.has(a.id) && null == A.Z.getReadTimestamp(a.id) && (a.type !== N.Rr.MESSAGE || (!!(0, v.$U)(a.data.channel_id, a.data.message_id) && a.data.channel_id !== t)) && (a.type !== N.Rr.SUMMARY || (!!(0, v.$U)(a.data.channel_id, a.data.summary_id) && a.data.channel_id !== t))) n.push(a);
    }
    return n;
}
function en(e, t) {
    return e.filter((e) => (e.type !== N.Rr.MESSAGE && e.type !== N.Rr.SUMMARY && e.type !== N.Rr.GUILD_EVENT) || e.data.channel_id !== t);
}
function ei(e, t) {
    if ((0, v.jv)(t) === v.aL.MUTED) (O = en(O, e)), (z = en(z, e)), (K = en(K, e)), (P = en(P, e)), (M = en(M, e));
}
function ea(e, t) {
    return e.filter((e) => (e.type !== N.Rr.MESSAGE && e.type !== N.Rr.SUMMARY && e.type !== N.Rr.GUILD_EVENT) || e.data.guild_id !== t);
}
function es(e, t) {
    if ((0, v.jv)(t) === v.aL.MUTED) (O = ea(O, e)), (z = ea(z, e)), (K = ea(K, e)), (P = ea(P, e)), (M = ea(M, e));
}
function er(e) {
    let { type: t, messageId: n, userId: i, emoji: a, reactionType: s } = e,
        r = j[n];
    if (null == r || r.type !== N.Rr.MESSAGE) return !1;
    let l = h.default.getId() === i;
    'MESSAGE_REACTION_ADD' === t ? (r.message = r.message.addReaction(a, l, e.colors, s)) : (r.message = r.message.removeReaction(a, l, s));
}
function el(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    z.forEach((e, a) => {
        a > q && (e.type === N.Rr.MESSAGE || e.type === N.Rr.SUMMARY) && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let a = H,
        [s, r] = ee(P);
    if (((M = et(s, t)), (H = V ? M.length >= N.Lb : H && i.length > 0), 0 === n.length && a === H)) return !1;
    if (0 !== n.length) (z = i), (K = [...K, ...n]);
}
class eo extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(g.Z, E.Z, p.ZP, d.Z, S.ZP, h.default, A.Z, l.Z), null != e)) {
            var t, n, i, a, s;
            (O = null !== (t = e.dehydratedItems) && void 0 !== t ? t : []).forEach((e) => {
                y[e.id] = e;
            }),
                (G = null !== (n = e.customGuildScores) && void 0 !== n ? n : {}),
                (w = null !== (i = e.customChannelScoresByGuild) && void 0 !== i ? i : {}),
                (W = null !== (a = e.numOpens) && void 0 !== a ? a : 0),
                (b = null !== (s = e.lastOpened) && void 0 !== s ? s : 0);
        }
    }
    getVersion() {
        return k;
    }
    getDehydratedItems() {
        return O;
    }
    getNewDehydratedItems() {
        return P;
    }
    getDehydratedItem(e) {
        var t;
        return null !== (t = y[e]) && void 0 !== t ? t : null;
    }
    getHydratedItem(e) {
        var t;
        return null !== (t = j[e]) && void 0 !== t ? t : null;
    }
    getMessage(e) {
        let t = j[e];
        return null == t || t.type !== N.Rr.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return j;
    }
    getUnreadDisplayItems() {
        return z;
    }
    getNewUnreadDehydratedItems() {
        return M;
    }
    getReadDisplayItems() {
        return K;
    }
    getNextIndexToHydrate() {
        return q;
    }
    getMissingItems() {
        return U;
    }
    getCustomChannelScore(e, t) {
        return null == w[e] || null == w[e][t] ? v.aL.UNKNOWN : (0, v.jv)(w[e][t]);
    }
    getCustomGuildScore(e) {
        var t;
        return null !== (t = G[e]) && void 0 !== t ? t : 0;
    }
    getCustomGuildScores() {
        return G;
    }
    hasNewContent() {
        return H;
    }
    getSelectedSummary(e) {
        return null == F || F.channelId !== e ? null : F;
    }
    isGravitySelectedChannel(e) {
        return null != Y && Y === e;
    }
    getLoadId() {
        return x;
    }
    hasOpenedEnoughTimes() {
        return 5 === W;
    }
    hasOpened() {
        return V;
    }
    getState() {
        return {
            dehydratedItems: O,
            numOpens: W,
            customGuildScores: G,
            customChannelScoresByGuild: w,
            lastOpened: b
        };
    }
}
R(eo, 'displayName', 'GravityStore'),
    R(eo, 'persistKey', 'GravityStore'),
    (t.Z = new eo(r.Z, {
        POST_CONNECTION_OPEN: function () {
            if (O.length > 0) {
                let [e, t] = ee(O);
                (z = e), (K = t), Q(), (q = 0), (0, v.em)([...z, ...K], 0, N.xy);
            }
        },
        LOGOUT: function () {
            return !1;
        },
        LOAD_GRAVITY_DEHYDRATED: function (e) {
            let { items: t, loadId: n, startTime: i, isReloading: a } = e;
            (P = t.filter((e) => N.zd.has(e.type))),
                !(function () {
                    let e = new Set();
                    P.forEach((t) => {
                        e.add(t.id);
                    }),
                        P.forEach((e) => {
                            (y[e.id] = e), e.type === N.Rr.CUSTOM_STATUS && (T.Z.isBlocked(e.data.user_id) ? (U[e.id] = !0) : (j[e.id] = (0, v.mV)(e)));
                        });
                })(),
                (P = J(P)),
                (D = {
                    load_id: n,
                    load_time_millis: Date.now() - i,
                    feed_item_ids: P.map((e) => e.id)
                });
            let [s, r] = ee(P);
            if (((M = et(s)), V && 0 !== k)) {
                let e = M.length > N.Lb;
                !a && (H = e), e && (0, v.em)([...s, ...r], 0, N.xy);
            } else
                (k = 0),
                    s.length > 0 && !V && Date.now() - b > 2 * f.Z.Millis.HOUR && ((H = !0), (B = !0)),
                    $({
                        newUnread: s,
                        newRead: r
                    });
        },
        LOAD_GRAVITY_HYDRATED: function (e) {
            let { messageItems: t, summaryItems: n, activityItems: i, requestMessageItems: a, requestSummaryItems: s, requestActivityItems: r, startingIndex: l, endingIndex: o } = e;
            j = { ...j };
            let c = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
                d = n.reduce((e, t) => ((e[t.id] = t), e), {}),
                u = i.reduce((e, t) => ((e[t.id] = t), e), {});
            a.forEach((e) => {
                let t = c[e.message_id];
                if (null == t) {
                    U[e.message_id] = !0;
                    return;
                }
                let n = y[e.message_id];
                if (null == n) {
                    U[e.message_id] = !0;
                    return;
                }
                null != g.Z.getMessage(t.channel_id, t.message.id)
                    ? (j[t.message.id] = {
                          ...n,
                          message: g.Z.getMessage(t.channel_id, t.message.id)
                      })
                    : (j[t.message.id] = {
                          ...n,
                          message: (0, _.e5)(t.message)
                      });
            }),
                s.forEach((e) => {
                    let t = d[e.summary_id];
                    if (null == t) {
                        U[e.summary_id] = !0;
                        return;
                    }
                    let n = y[e.summary_id];
                    if (null == n || n.type !== N.Rr.SUMMARY || t.messages.length < 3) {
                        U[e.summary_id] = !0;
                        return;
                    }
                    j[t.id] = {
                        ...n,
                        summary: (0, v.wV)(t, n.data.guild_id)
                    };
                }),
                r.forEach((e) => {
                    let t = u[e.content_id];
                    if (null == t) {
                        U[e.content_id] = !0;
                        return;
                    }
                    let n = y[e.content_id];
                    if (null == n) {
                        U[e.content_id] = !0;
                        return;
                    }
                    j[t.id] = {
                        ...n,
                        activity: t
                    };
                }),
                l === q && (q = o);
        },
        LOAD_GRAVITY_CUSTOM_SCORES: function (e) {
            let { scores: t } = e;
            for (let e of t) for (let t of ((G[e.guild_id] = e.guild_score), es(e.guild_id, e.guild_score), Object.keys(e.custom_channel_scores))) null == w[e.guild_id] && (w[e.guild_id] = {}), (w[e.guild_id][t] = e.custom_channel_scores[t]), ei(t, e.custom_channel_scores[t]);
            (G = { ...G }), (w = { ...w });
        },
        GRAVITY_CUSTOM_SCORES_UPDATED: function (e) {
            let { channelScores: t, guildId: n, guildScore: i } = e;
            null != i && ((G[n] = i), es(n, i), (G = { ...G })),
                null == t ||
                    t.forEach((e) => {
                        let { channelId: t, score: i } = e;
                        null == w[n] && (w[n] = {}), (w[n][t] = i), ei(t, i), (w = { ...w });
                    });
        },
        RELOAD_GRAVITY: function () {
            if (0 === P.length) return !1;
            $(), (H = !1);
        },
        GRAVITY_TAB_OPENED: function () {
            (V = !0), (b = Date.now()), B && ((B = !1), (H = !1)), W < 5 && W++;
        },
        GRAVITY_FEEDBACK_GIVEN: function () {
            W = 6;
        },
        SET_GRAVITY_SELECTED_SUMMARY: function (e) {
            if (null == e.summaryId) {
                F = null;
                return;
            }
            let t = j[e.summaryId];
            if (null == t || t.type !== N.Rr.SUMMARY) {
                F = null;
                return;
            }
            F = t.summary;
        },
        SET_GRAVITY_SELECTED_CHANNEL: function (e) {
            Y = e.channelId;
        },
        MESSAGE_REACTION_ADD: er,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { messageId: t, reactions: n } = e,
                i = j[t];
            if (null == i || i.type !== N.Rr.MESSAGE) return !1;
            let a = h.default.getId();
            i.message = i.message.addReactionBatch(n, a);
        },
        MESSAGE_REACTION_REMOVE: er,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { messageId: t } = e,
                n = j[t];
            if (null == n || n.type !== N.Rr.MESSAGE) return !1;
            n.message = n.message.set('reactions', []);
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { messageId: t, emoji: n } = e,
                i = j[t];
            if (null == i || i.type !== N.Rr.MESSAGE) return !1;
            i.message = i.message.removeReactionsForEmoji(n);
        },
        CHANNEL_ACK: el,
        MESSAGE_ACK: el,
        CONTENT_INVENTORY_SET_FEED: function (e) {
            let { feedId: t } = e;
            if (t !== Z.YN.GLOBAL_FEED) return !1;
            if (!V) {
                let [e, t] = ee((O = J(O)));
                (z = e), (K = t), Q();
            }
            let [n, i] = ee((P = J((P = 0 === P.length ? [...O] : P))));
            M = et(n);
        }
    }));
