n.d(t, {
    A3: function () {
        return w;
    },
    C1: function () {
        return Q;
    },
    DV: function () {
        return j;
    },
    Gn: function () {
        return F;
    },
    IP: function () {
        return $;
    },
    J1: function () {
        return V;
    },
    MZ: function () {
        return X;
    },
    NJ: function () {
        return z;
    },
    Nf: function () {
        return H;
    },
    PC: function () {
        return x;
    },
    Y1: function () {
        return Y;
    },
    fe: function () {
        return Z;
    },
    jA: function () {
        return G;
    },
    kI: function () {
        return U;
    },
    nV: function () {
        return J;
    },
    q5: function () {
        return K;
    },
    to: function () {
        return B;
    },
    wC: function () {
        return W;
    },
    y$: function () {
        return k;
    }
});
var r = n(733860);
var i = n(653041);
var a = n(47120);
var o = n(724458);
var s = n(627341);
var l = n(757143);
var u = n(470079),
    c = n(392711);
var d = n(278074),
    _ = n(442837),
    E = n(367907),
    f = n(339085),
    h = n(689789),
    p = n(407477);
n(353842);
var m = n(558217),
    I = n(675478),
    T = n(430824),
    g = n(771845),
    S = n(594174),
    A = n(626135),
    v = n(70956),
    N = n(176354),
    O = n(111361);
n(709054);
var R = n(304852),
    C = n(199257),
    y = n(149203),
    L = n(981631),
    b = n(185923),
    D = n(957825),
    M = n(474936),
    P = n(689938);
let U = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
        (0, m.O)(n);
        let r = (0, b.Gt)(e),
            i = W(n),
            a = K(n),
            { canSplitFrecencyList: o } = (0, h.S)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            }),
            s = (0, p.p3)({
                location: 'useEmojiCategories',
                autoTrackExposure: !0
            }),
            l = z(n),
            { topEmojis: c, newlyAddedEmojis: d } = (0, C.Z)(n, e),
            { allEmojis: E } = (0, R.Z)({
                topEmojis: c,
                newlyAddedEmojis: d
            }),
            I = (0, _.e7)([f.ZP], () => f.ZP.getDisambiguatedEmojiContext(n), [n]),
            A = (0, _.e7)([T.Z], () => {
                var e;
                return null === (e = T.Z.getGuild(n)) || void 0 === e ? void 0 : e.name;
            }),
            v = (0, _.e7)([S.default], () => S.default.getCurrentUser()),
            L = (0, O.I5)(v);
        return u.useMemo(() => {
            let u = I.getGroupedCustomEmoji(),
                c = g.ZP.getFlattenedGuildIds(),
                d = [],
                _ = (r, i) =>
                    N.ZP.getEmojiUnavailableReasons({
                        categoryEmojis: r,
                        channel: t,
                        guildId: n,
                        intention: e,
                        computeUnfiltered: i
                    });
            return (
                ((e, r) => {
                    for (let i of e) {
                        let e;
                        if ((r === y.En.GUILD && (e = T.Z.getGuild(i)), null == e)) continue;
                        let a = null == u ? void 0 : u[e.id];
                        if (null == a || 0 === a.length) continue;
                        let { emojisDisabled: o, emojisFilteredCount: s, emojisPremiumLockedCount: l, emojiNitroLocked: c } = _(a, !1);
                        if (null != t && a.length === s) continue;
                        let E = null;
                        r === y.En.GUILD &&
                            (E = {
                                type: y.En.GUILD,
                                guild: e,
                                isNitroLocked: !L && c && l === a.length,
                                emojis: a,
                                emojisDisabled: o
                            }),
                            null != E && (e.id === n ? d.unshift(E) : d.push(E));
                    }
                })(c, y.En.GUILD),
                f.ZP.categories.reduce((t, u) => {
                    if (u === y.UX.TOP_GUILD_EMOJI) {
                        let { emojisDisabled: e, emojisUnfiltered: n } = _(E, !0);
                        if (null == n || 0 === n.length) return t;
                        t.push({
                            type: y.En.TOP_GUILD_EMOJI,
                            id: u,
                            name: P.Z.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({ guildName: A }),
                            isNitroLocked: !1,
                            emojis: n,
                            emojisDisabled: e
                        });
                    } else if (u === y.UX.RECENT) {
                        let { emojisDisabled: n, emojisUnfiltered: r } = _(e === b.Hz.REACTION && (o || s) ? a : i, !0);
                        if (null == r || 0 === r.length) return t;
                        t.push({
                            type: y.En.RECENT,
                            id: u,
                            name: P.Z.Messages.EMOJI_CATEGORY_RECENT,
                            isNitroLocked: !1,
                            emojis: r,
                            emojisDisabled: n
                        });
                    } else if (u === y.UX.FAVORITES) {
                        let { emojisDisabled: e, emojisUnfiltered: n } = _(l, !0);
                        if (null == n || 0 === n.length) return t;
                        t.push({
                            type: y.En.FAVORITES,
                            id: u,
                            name: P.Z.Messages.CATEGORY_FAVORITE,
                            isNitroLocked: !1,
                            emojis: n,
                            emojisDisabled: e
                        });
                    } else if (u === y.UX.CUSTOM) {
                        let e = d;
                        !r && (e = d.filter((e) => e.type === y.En.GUILD && e.guild.id === n)), t.push(...e);
                    } else
                        t.push({
                            type: y.En.UNICODE,
                            id: u,
                            name: u,
                            isNitroLocked: !1
                        });
                    return t;
                }, [])
            );
        }, [I, t, n, e, L, E, A, o, s, a, i, l, r]);
    },
    w = (e) => {
        let t = (null == e ? void 0 : e.getGuildId()) != null;
        A.default.track(L.rMx.PREMIUM_PROMOTION_OPENED, {
            location_page: t ? L.ZY5.GUILD_CHANNEL : L.ZY5.DM_CHANNEL,
            location_section: null != e ? L.jXE.EMOJI_PICKER_POPOUT : L.jXE.CUSTOM_STATUS_MODAL
        });
    },
    x = (e, t) => {
        E.ZP.trackWithMetadata(L.rMx.SEARCH_STARTED, {
            search_type: null != t && t === b.Hz.REACTION ? L.aib.EMOJI_REACTION : L.aib.EMOJI,
            location: e
        });
    },
    G = (e, t, n, r, i) => {
        E.ZP.trackWithMetadata(L.rMx.SEARCH_RESULT_VIEWED, {
            search_type: null != i && i === b.Hz.REACTION ? L.aib.EMOJI_REACTION : L.aib.EMOJI,
            total_results: e,
            num_results_locked: t,
            query: r,
            location: n
        });
    },
    k = (e) => {
        var t, n, r;
        let { emoji: i, emojiSuggestions: a, searchQuery: o, isLocked: s, location: l, intention: u, index: c } = e,
            _ = null !== (r = i.uniqueName) && void 0 !== r ? r : i.name,
            f = (0, d.EQ)(u)
                .with(b.Hz.REACTION, () => L.aib.EMOJI_REACTION)
                .with(b.Hz.AUTO_SUGGESTION, () => L.aib.EMOJI_AUTO_SUGGESTION)
                .otherwise(() => L.aib.EMOJI);
        E.ZP.trackWithMetadata(L.rMx.SEARCH_RESULT_SELECTED, {
            search_type: f,
            location: l,
            expression_guild_id: i.guildId,
            emoji_id: i.id,
            emoji_name: _,
            is_custom: null != i.id,
            is_animated: i.animated,
            is_locked: s,
            query: o,
            index_num: c,
            load_id: null == a ? void 0 : a.loadId,
            total_results: null == a ? void 0 : null === (t = a.results) || void 0 === t ? void 0 : t.length,
            emoji_suggestion_ids:
                null == a
                    ? void 0
                    : null === (n = a.results) || void 0 === n
                      ? void 0
                      : n
                            .map((e) => {
                                let { emoji: t } = e;
                                return t.id;
                            })
                            .filter((e) => null != e)
        });
    },
    B = (e, t) => {
        E.ZP.trackWithMetadata(L.rMx.SEARCH_RESULT_EMPTY, {
            search_type: L.aib.EMOJI,
            query: t,
            location: e
        });
    },
    F = (e) => {
        let { emoji: t, subCategory: n, position: r, newlyAddedHighlight: i } = e;
        E.ZP.trackWithMetadata(L.rMx.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
            expression_section: null == n ? void 0 : n.toString(),
            newly_added_highlight: i,
            emoji_id: t.id,
            emoji_name: t.name,
            emoji_animated: t.animated,
            emoji_position: r
        });
    },
    Z = (e) => {
        var t;
        let n,
            { emoji: r, location: i, pickerIntention: a, category: o, subCategory: s = y.t0.NONE, position: l, newlyAddedHighlight: u, isBurstReaction: c } = e;
        switch (a) {
            case b.Hz.REACTION:
                n = c ? M.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : M.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                break;
            case b.Hz.STATUS:
                n = M.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                break;
            default:
                n = M.cd.EMOJI_PICKER_EMOJI_CLICKED;
        }
        let d = null !== (t = r.uniqueName) && void 0 !== t ? t : r.name;
        E.ZP.trackWithMetadata(L.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
            type: n,
            location: i,
            expression_id: r.id,
            expression_name: d,
            expression_guild_id: r.guildId,
            is_custom: null != r.id,
            is_animated: r.animated,
            expression_picker_section: o,
            expression_section: null == s ? void 0 : s.toString(),
            emoji_position: l,
            newly_added_highlight: u,
            is_burst: c
        });
    },
    V = (e) => {
        var t;
        let { emoji: n, location: r } = e,
            i = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
        E.ZP.trackWithMetadata(L.rMx.EXPRESSION_FAVORITED, {
            location: r,
            expression_type: D.X1.EMOJI,
            expression_id: n.id,
            expression_name: i,
            expression_guild_id: n.guildId,
            is_custom: null != n.id,
            is_animated: n.animated
        });
    };
(0, c.throttle)(
    (e) => {
        let { emojiSuggestions: t, analyticsLocation: n } = e;
        E.ZP.trackWithMetadata(L.rMx.AUTO_SUGGEST_DISPLAYED, {
            suggestion_type: L.Z9p.EMOJI,
            suggestion_quantity: t.results.length,
            custom_quantity: t.results.filter((e) => {
                let { emoji: t } = e;
                return null != t.id;
            }).length,
            load_id: t.loadId,
            location: n
        });
    },
    v.Z.Millis.HALF_SECOND,
    {
        leading: !1,
        trailing: !0
    }
);
let H = (e, t) => {
        if (e.type === y.En.GUILD) return null != t ? t.toString() : '';
        return e.id;
    },
    Y = (e, t) => {
        switch (e) {
            case y.UX.TOP_GUILD_EMOJI:
                return P.Z.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({ guildName: t });
            case y.UX.RECENT:
                return P.Z.Messages.EMOJI_CATEGORY_RECENT;
            case y.UX.FAVORITES:
                return P.Z.Messages.CATEGORY_FAVORITE;
            case y.UX.ACTIVITY:
                return P.Z.Messages.EMOJI_CATEGORY_ACTIVITY;
            case y.UX.FLAGS:
                return P.Z.Messages.EMOJI_CATEGORY_FLAGS;
            case y.UX.FOOD:
                return P.Z.Messages.EMOJI_CATEGORY_FOOD;
            case y.UX.NATURE:
                return P.Z.Messages.EMOJI_CATEGORY_NATURE;
            case y.UX.OBJECTS:
                return P.Z.Messages.EMOJI_CATEGORY_OBJECTS;
            case y.UX.PEOPLE:
                return P.Z.Messages.EMOJI_CATEGORY_PEOPLE;
            case y.UX.SYMBOLS:
                return P.Z.Messages.EMOJI_CATEGORY_SYMBOLS;
            case y.UX.TRAVEL:
                return P.Z.Messages.EMOJI_CATEGORY_TRAVEL;
            case y.UX.PREMIUM_UPSELL:
                return P.Z.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
            default:
                return null != t ? t : e;
        }
    };
function j(e, t, n) {
    u.useEffect(() => {
        I.DZ.loadIfNecessary();
    }, []);
    let r = (0, b.Gt)(n);
    return (0, _.e7)(
        [f.ZP],
        () => {
            let i = e.replace(/^:/, '').replace(/:$/, '');
            return '' === i
                ? null
                : f.ZP.searchWithoutFetchingLatest({
                      channel: t,
                      query: i,
                      count: 0,
                      intention: n,
                      includeExternalGuilds: r
                  });
        },
        [t, n, e, r],
        _.pF
    );
}
function W(e) {
    return (
        u.useEffect(() => {
            I.DZ.loadIfNecessary();
        }, []),
        (0, _.Wu)([f.ZP], () => f.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function K(e) {
    return (
        u.useEffect(() => {
            I.DZ.loadIfNecessary();
        }, []),
        (0, _.Wu)([f.ZP], () => f.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest())
    );
}
function z(e) {
    return (
        u.useEffect(() => {
            I.DZ.loadIfNecessary();
        }, []),
        (0, _.Wu)([f.ZP], () => f.ZP.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
let q = (e) => {
    let { emoji: t, channel: n, guildId: r } = e;
    if (
        !EmojiUtils.isEmojiPremiumLocked({
            emoji: t,
            channel: n,
            intention: EmojiIntention.CHAT,
            guildId: r
        })
    )
        return {
            emoji: t,
            nitroLocked: !1,
            roleSubscriptionLocked: !1
        };
    let i = EmojiUtils.getEmojiUnavailableReason({
        emoji: t,
        channel: n,
        intention: EmojiIntention.CHAT
    });
    return null == i
        ? {
              emoji: t,
              nitroLocked: !1,
              roleSubscriptionLocked: !1
          }
        : i === EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED
          ? {
                emoji: t,
                nitroLocked: !1,
                roleSubscriptionLocked: !0
            }
          : {
                emoji: t,
                nitroLocked: !0,
                roleSubscriptionLocked: !1
            };
};
function Q(e, t) {
    return (
        u.useEffect(() => {
            I.DZ.loadIfNecessary();
        }, []),
        (0, _.e7)([f.ZP], () => null != t && f.ZP.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
    );
}
function X(e) {
    return (
        u.useEffect(() => {
            I.DZ.loadIfNecessary();
        }, []),
        (0, _.Wu)([f.ZP], () => f.ZP.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function $(e, t, n) {
    if (null == n) return y.t0.NONE;
    let r = e.map((e) => {
            var t, n;
            return null !== (n = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== n ? n : e.name;
        }),
        i = t.map((e) => e.id);
    return r.includes(n) ? y.t0.TOP_GUILD_EMOJI : i.includes(n) ? y.t0.NEWLY_ADDED_EMOJI : y.t0.NONE;
}
function J(e, t) {
    return e === b.Hz.REACTION ? (t ? P.Z.Messages.SEARCH_FOR_SUPER_REACTION : P.Z.Messages.SEARCH_FOR_REACTION) : P.Z.Messages.SEARCH_FOR_EMOJI;
}
