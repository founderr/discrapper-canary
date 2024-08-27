n(47120), n(653041), n(733860), n(724458);
var i,
    a = n(876215),
    s = n(442837),
    r = n(570140),
    l = n(146282),
    o = n(26033),
    c = n(561308),
    d = n(353926),
    u = n(786761),
    _ = n(314897),
    h = n(592125),
    E = n(375954),
    m = n(306680),
    I = n(699516),
    g = n(9156),
    p = n(626135),
    T = n(70956),
    S = n(709054),
    f = n(761080),
    C = n(584925),
    N = n(207205),
    A = n(981631),
    v = n(206583);
function Z(e, t, n) {
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
let L = [],
    O = null,
    R = 0,
    x = [],
    b = [],
    P = {},
    M = {},
    D = {},
    y = {},
    j = {},
    U = {},
    G = {},
    k = {},
    w = new Set(),
    B = 0,
    H = !1,
    V = !1,
    F = !1,
    Y = null,
    W = null,
    z = 0,
    K = [],
    q = [],
    Q = 0;
function X(e) {
    var t, n;
    let i = e.filter((e) => e.type !== f.Rr.ACTIVITY),
        s = new Set(i.map((e) => e.id)),
        r = {},
        d = null !== (n = null === (t = l.Z.getFeed(v.YN.GLOBAL_FEED)) || void 0 === t ? void 0 : t.entries) && void 0 !== n ? n : [];
    return (
        d.sort((e, t) => e.rank - t.rank),
        d.forEach((e, t) => {
            if (s.has(e.content.id) || (e.content.content_type !== a.s.PLAYED_GAME && e.content.content_type !== a.s.CUSTOM_STATUS && e.content.content_type !== a.s.TOP_GAME) || (0, c.n2)(e.content)) return;
            if ((0, o.dX)(e.content)) {
                if ((null == r[e.content.author_id] && (r[e.content.author_id] = new Set()), r[e.content.author_id].has(e.content.extra.application_id))) return;
                r[e.content.author_id].add(e.content.extra.application_id);
            }
            null == y[e.content.id] &&
                (y[e.content.id] = {
                    id: e.content.id,
                    type: f.Rr.ACTIVITY,
                    score: 50,
                    activity: e.content
                });
            let n = {
                id: e.content.id,
                type: f.Rr.ACTIVITY,
                score: 50,
                data: {
                    user_id: e.content.author_id,
                    content_id: e.content.id
                }
            };
            (D[n.id] = n), (t + 1) * 5 < i.length ? i.splice((t + 1) * 5, 0, n) : i.push(n);
        }),
        i
    );
}
function J(e) {
    if ((x.length > 0 && ((L = x), (x = []), (b = [])), B++, null != e)) (K = e.newUnread), (q = e.newRead);
    else {
        let [e, t] = $(L);
        (K = e), (q = t);
    }
    if (null != P.load_id && O !== P.load_id) {
        var t;
        p.default.track(A.rMx.FEED_LOADED, {
            ...P,
            unread_feed_item_ids: K.map((e) => e.id),
            read_feed_item_ids: q.map((e) => e.id),
            home_session_id: 'gravity'
        }),
            (O = null !== (t = P.load_id) && void 0 !== t ? t : null),
            (P = {});
    }
    (Q = 0), (0, N.em)([...K, ...q], 0, f.xy);
}
function $(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let a = null != C.Z.getReadTimestamp(e.id);
            e.type === f.Rr.MESSAGE ? (a = a || !(0, N.$U)(e.data.channel_id, e.data.message_id)) : e.type === f.Rr.SUMMARY && (a = a || !(0, N.$U)(e.data.channel_id, e.data.summary_id)), a ? t.push(e) : e.type === f.Rr.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
        }),
        [[...i, ...n], t.sort((e, t) => (0, N.Rm)(e.id, t.id))]
    );
}
function ee(e, t) {
    let n = [],
        i = new Set(L.map((e) => e.id));
    for (let a of e) {
        if (!i.has(a.id) && null == C.Z.getReadTimestamp(a.id) && (a.type !== f.Rr.MESSAGE || (!!(0, N.$U)(a.data.channel_id, a.data.message_id) && a.data.channel_id !== t)) && (a.type !== f.Rr.SUMMARY || (!!(0, N.$U)(a.data.channel_id, a.data.summary_id) && a.data.channel_id !== t))) n.push(a);
    }
    return n;
}
function et(e, t) {
    if ((0, N.jv)(t) === N.aL.MUTED) (L = L.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.channel_id !== e)), (K = K.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.channel_id !== e)), (q = q.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.channel_id !== e)), (x = x.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.channel_id !== e)), (b = b.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.channel_id !== e));
}
function en(e, t) {
    if ((0, N.jv)(t) === N.aL.MUTED) (L = L.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.guild_id !== e)), (K = K.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.guild_id !== e)), (q = q.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.guild_id !== e)), (x = x.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.guild_id !== e)), (b = b.filter((t) => (t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY) || t.data.guild_id !== e));
}
function ei(e) {
    let { type: t, messageId: n, userId: i, emoji: a, reactionType: s } = e,
        r = y[n];
    if (null == r || r.type !== f.Rr.MESSAGE) return !1;
    let l = _.default.getId() === i;
    'MESSAGE_REACTION_ADD' === t ? (r.message = r.message.addReaction(a, l, e.colors, s)) : (r.message = r.message.removeReaction(a, l, s));
}
function ea(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    K.forEach((e, a) => {
        a > Q && (e.type === f.Rr.MESSAGE || e.type === f.Rr.SUMMARY) && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let a = V,
        [s, r] = $(x);
    if (((b = ee(s, t)), (V = F ? b.length >= f.Lb : i.length > 0), 0 === n.length && a === V)) return !1;
    if (0 !== n.length) (K = i), (q = [...q, ...n]);
}
class es extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(E.Z, h.Z, m.ZP, d.Z, g.ZP, _.default, C.Z, l.Z), null != e)) {
            var t, n, i, a, s, r;
            (L = null !== (t = e.dehydratedItems) && void 0 !== t ? t : []),
                (M = null !== (n = e.locallyAddedItems) && void 0 !== n ? n : {}),
                L.forEach((e) => {
                    D[e.id] = e;
                }),
                (U = null !== (i = e.customGuildScores) && void 0 !== i ? i : {}),
                (G = null !== (a = e.customChannelScoresByGuild) && void 0 !== a ? a : {}),
                (z = null !== (s = e.numOpens) && void 0 !== s ? s : 0),
                (R = null !== (r = e.lastOpened) && void 0 !== r ? r : 0);
        }
    }
    getVersion() {
        return B;
    }
    getDehydratedItems() {
        return L;
    }
    getNewDehydratedItems() {
        return x;
    }
    getDehydratedItem(e) {
        var t;
        return null !== (t = D[e]) && void 0 !== t ? t : null;
    }
    getHydratedItem(e) {
        var t;
        return null !== (t = y[e]) && void 0 !== t ? t : null;
    }
    getMessage(e) {
        let t = y[e];
        return null == t || t.type !== f.Rr.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return y;
    }
    getUnreadDisplayItems() {
        return K;
    }
    getNewUnreadDehydratedItems() {
        return b;
    }
    getReadDisplayItems() {
        return q;
    }
    getNextIndexToHydrate() {
        return Q;
    }
    getMissingItems() {
        return j;
    }
    getCustomChannelScore(e, t) {
        return null == G[e] || null == G[e][t] ? N.aL.UNKNOWN : (0, N.jv)(G[e][t]);
    }
    getCustomGuildScore(e) {
        var t;
        return null !== (t = U[e]) && void 0 !== t ? t : 0;
    }
    getCustomGuildScores() {
        return U;
    }
    getNumLocallyAddedItems() {
        return Object.keys(M).length;
    }
    hasNewContent() {
        return V;
    }
    getSelectedSummary(e) {
        return null == Y || Y.channelId !== e ? null : Y;
    }
    isGravitySelectedChannel(e) {
        return null != W && W === e;
    }
    getLoadId() {
        return O;
    }
    hasOpenedEnoughTimes() {
        return 5 === z;
    }
    hasOpened() {
        return F;
    }
    getState() {
        return {
            dehydratedItems: L,
            locallyAddedItems: M,
            numOpens: z,
            customGuildScores: U,
            customChannelScoresByGuild: G,
            lastOpened: R
        };
    }
}
Z(es, 'displayName', 'GravityStore'),
    Z(es, 'persistKey', 'GravityStore'),
    (t.Z = new es(r.Z, {
        POST_CONNECTION_OPEN: function () {
            if (L.length > 0) {
                let [e, t] = $(L);
                (K = e), (q = t), (Q = 0), (0, N.em)([...K, ...q], 0, f.xy);
            }
        },
        LOGOUT: function () {
            return !1;
        },
        MESSAGE_CREATE: function (e) {
            var t, n;
            let { message: i, guildId: a, channelId: s } = e;
            if (!(0, N.rK)('GravityStore-handleMessageCreate') || null == a || (null === (t = i.author) || void 0 === t ? void 0 : t.id) === _.default.getId() || I.Z.isBlocked(null === (n = i.author) || void 0 === n ? void 0 : n.id) || (a in U && U[a] < 0) || (null != G[a] && s in G[a] && null != G[a][s] && G[a][s] < 0)) return !1;
            let r = h.Z.getChannel(s);
            if (null == r || r.type !== A.d4z.GUILD_ANNOUNCEMENT || g.ZP.isChannelMuted(a, s)) return !1;
            let l = E.Z.getMessage(i.channel_id, i.id);
            null == l && (l = (0, u.e5)(i));
            let o = l.mentionEveryone;
            if (i.id in D) return !1;
            let c = {
                type: f.Rr.MESSAGE,
                id: i.id,
                score: Date.now(),
                data: {
                    channel_id: i.channel_id,
                    guild_id: a,
                    message_id: i.id,
                    channel_type: A.d4z.GUILD_ANNOUNCEMENT,
                    has_mention: o
                }
            };
            o && (null == k[s] && (k[s] = 0), k[s]++, w.add(a)),
                null == (x = 0 === x.length ? [...L] : [...x]).find((e) => e.id === i.id) && ((x = [c, ...x]), (M[i.id] = c)),
                (0, N.$U)(s, i.id) && (b = [c, ...b]),
                b.length >= f.Lb && B > 0 && (V = !0),
                (D[i.id] = c),
                (y[i.id] = {
                    ...c,
                    message: l
                });
        },
        LOAD_GRAVITY_DEHYDRATED: function (e) {
            let { items: t, loadId: n, startTime: i } = e;
            (x = t.filter((e) => f.zd.has(e.type))),
                !(function () {
                    let e = new Set();
                    x.forEach((t) => {
                        e.add(t.id);
                    }),
                        Object.values(M).forEach((t) => {
                            f.zd.has(t.type) && (e.has(t.id) || S.default.age(t.id) > T.Z.Millis.DAY || (t.type === f.Rr.MESSAGE && g.ZP.isChannelMuted(t.data.guild_id, t.data.channel_id)) ? delete M[t.id] : !e.has(t.id) && (x.unshift(t), e.add(t.id)));
                        }),
                        x.forEach((e) => {
                            (D[e.id] = e), e.type === f.Rr.CUSTOM_STATUS && (I.Z.isBlocked(e.data.user_id) ? (j[e.id] = !0) : (y[e.id] = (0, N.mV)(e)));
                        });
                })(),
                (x = X(x)),
                (P = {
                    load_id: n,
                    load_time_millis: Date.now() - i,
                    feed_item_ids: x.map((e) => e.id)
                });
            let [a, s] = $(x);
            if (((b = ee(a)), F && 0 !== B)) {
                let e = b.length > f.Lb;
                (V = e), e && (0, N.em)([...a, ...s], 0, f.xy);
            } else
                (B = 0),
                    a.length > 0 && !F && Date.now() - R > 2 * T.Z.Millis.HOUR && ((V = !0), (H = !0)),
                    J({
                        newUnread: a,
                        newRead: s
                    });
        },
        LOAD_GRAVITY_HYDRATED: function (e) {
            let { messageItems: t, summaryItems: n, activityItems: i, requestMessageItems: a, requestSummaryItems: s, requestActivityItems: r, startingIndex: l, endingIndex: o } = e;
            y = { ...y };
            let c = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
                d = n.reduce((e, t) => ((e[t.id] = t), e), {}),
                _ = i.reduce((e, t) => ((e[t.id] = t), e), {});
            a.forEach((e) => {
                let t = c[e.message_id];
                if (null == t) {
                    j[e.message_id] = !0;
                    return;
                }
                let n = D[e.message_id];
                if (null == n) {
                    j[e.message_id] = !0;
                    return;
                }
                null != E.Z.getMessage(t.channel_id, t.message.id)
                    ? (y[t.message.id] = {
                          ...n,
                          message: E.Z.getMessage(t.channel_id, t.message.id)
                      })
                    : (y[t.message.id] = {
                          ...n,
                          message: (0, u.e5)(t.message)
                      });
            }),
                s.forEach((e) => {
                    let t = d[e.summary_id];
                    if (null == t) {
                        j[e.summary_id] = !0;
                        return;
                    }
                    let n = D[e.summary_id];
                    if (null == n || n.type !== f.Rr.SUMMARY || t.messages.length < 3) {
                        j[e.summary_id] = !0;
                        return;
                    }
                    y[t.id] = {
                        ...n,
                        summary: (0, N.wV)(t, n.data.guild_id)
                    };
                }),
                r.forEach((e) => {
                    let t = _[e.content_id];
                    if (null == t) {
                        j[e.content_id] = !0;
                        return;
                    }
                    let n = D[e.content_id];
                    if (null == n) {
                        j[e.content_id] = !0;
                        return;
                    }
                    y[t.id] = {
                        ...n,
                        activity: t
                    };
                }),
                l === Q && (Q = o);
        },
        LOAD_GRAVITY_CUSTOM_SCORES: function (e) {
            let { scores: t } = e;
            for (let e of t) for (let t of ((U[e.guild_id] = e.guild_score), en(e.guild_id, e.guild_score), Object.keys(e.custom_channel_scores))) null == G[e.guild_id] && (G[e.guild_id] = {}), (G[e.guild_id][t] = e.custom_channel_scores[t]), et(t, e.custom_channel_scores[t]);
            (U = { ...U }), (G = { ...G });
        },
        GRAVITY_CUSTOM_SCORES_UPDATED: function (e) {
            let { channelScores: t, guildId: n, guildScore: i } = e;
            null != i && ((U[n] = i), en(n, i), (U = { ...U })),
                null == t ||
                    t.forEach((e) => {
                        let { channelId: t, score: i } = e;
                        null == G[n] && (G[n] = {}), (G[n][t] = i), et(t, i), (G = { ...G });
                    });
        },
        RELOAD_GRAVITY: function () {
            if (0 === x.length) return !1;
            J(), (V = !1);
        },
        GRAVITY_TAB_OPENED: function () {
            (F = !0), (R = Date.now()), H && ((H = !1), (V = !1)), z < 5 && z++;
        },
        GRAVITY_FEEDBACK_GIVEN: function () {
            z = 6;
        },
        SET_GRAVITY_SELECTED_SUMMARY: function (e) {
            if (null == e.summaryId) {
                Y = null;
                return;
            }
            let t = y[e.summaryId];
            if (null == t || t.type !== f.Rr.SUMMARY) {
                Y = null;
                return;
            }
            Y = t.summary;
        },
        SET_GRAVITY_SELECTED_CHANNEL: function (e) {
            W = e.channelId;
        },
        MESSAGE_REACTION_ADD: ei,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { messageId: t, reactions: n } = e,
                i = y[t];
            if (null == i || i.type !== f.Rr.MESSAGE) return !1;
            let a = _.default.getId();
            i.message = i.message.addReactionBatch(n, a);
        },
        MESSAGE_REACTION_REMOVE: ei,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { messageId: t } = e,
                n = y[t];
            if (null == n || n.type !== f.Rr.MESSAGE) return !1;
            n.message = n.message.set('reactions', []);
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { messageId: t, emoji: n } = e,
                i = y[t];
            if (null == i || i.type !== f.Rr.MESSAGE) return !1;
            i.message = i.message.removeReactionsForEmoji(n);
        },
        CHANNEL_ACK: ea,
        MESSAGE_ACK: ea,
        CONTENT_INVENTORY_SET_FEED: function (e) {
            let { feedId: t } = e;
            if (t !== v.YN.GLOBAL_FEED) return !1;
            if (!F) {
                let [e, t] = $((L = X(L)));
                (K = e), (q = t);
            }
            let [n, i] = $((x = X((x = 0 === x.length ? [...L] : x))));
            b = ee(n);
        }
    }));
