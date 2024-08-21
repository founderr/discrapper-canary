n.d(t, {
    Bg: function () {
        return a;
    },
    Ni: function () {
        return V;
    },
    YH: function () {
        return B;
    },
    ld: function () {
        return r;
    },
    rf: function () {
        return F;
    }
}),
    n(47120),
    n(653041);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(470079),
    c = n(392711),
    d = n.n(c),
    _ = n(772848),
    E = n(442837),
    f = n(80932),
    h = n(339085),
    p = n(906411),
    I = n(689789),
    m = n(633302),
    T = n(806966),
    g = n(28546),
    S = n(364742),
    A = n(889161),
    N = n(984933),
    v = n(430824),
    O = n(914010),
    R = n(771845),
    C = n(594174),
    y = n(78839),
    D = n(176354),
    L = n(111361),
    b = n(111846),
    M = n(392552),
    P = n(543241),
    U = n(304852),
    w = n(199257),
    x = n(149203),
    G = n(185923),
    k = n(689938);
((s = r || (r = {}))[(s.EMOJI = 0)] = 'EMOJI'), (s[(s.CREATE_EMOJI = 1)] = 'CREATE_EMOJI'), (s[(s.EXPAND_OR_COLLAPSE_EMOJIS = 2)] = 'EXPAND_OR_COLLAPSE_EMOJIS'), ((o = i || (i = {}))[(o.SECTION_HEADING = 0)] = 'SECTION_HEADING'), (o[(o.SECTION_ROW = 1)] = 'SECTION_ROW');
let B = (e) => {
    let { channel: t, collapsedSections: n, includeCreateEmojiButton: r = !0, pickerIntention: i, emojiSearchResults: a, gridWidth: s, emojiPaddingHorizontal: o, emojiSpriteSize: l } = e,
        c = (0, E.e7)([h.ZP], () => h.ZP.categories),
        f = (0, E.e7)([v.Z], () => v.Z.getGuild(null == t ? void 0 : t.getGuildId()), [t]),
        T = null == t ? null : t.getGuildId(),
        g = (0, E.e7)([h.ZP], () => h.ZP.getDisambiguatedEmojiContext(T), [T]),
        B = (0, P.NJ)(T),
        F = (0, P.wC)(T),
        V = (0, P.q5)(T),
        { canSplitFrecencyList: H } = (0, I.S)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        }),
        { canShowReactionsOnMessageHover: Z } = S.Z.useExperiment({ location: 'useEmojiGrid' }, { autoTrackExposure: !0 }),
        { topEmojis: Y, newlyAddedEmojis: j } = (0, w.Z)(T, i),
        W = (0, E.Wu)([R.ZP], () => R.ZP.getFlattenedGuildIds(), []),
        K = (0, E.e7)([h.ZP], () => h.ZP.expandedSectionsByGuildIds),
        { canCreateExpressions: z } = (0, A.XJ)(f),
        q = (0, E.e7)([C.default], () => C.default.getCurrentUser()),
        Q = (0, L.I5)(q),
        X = (0, E.e7)([y.ZP], () => y.ZP.inReverseTrial()),
        $ = g.getCustomEmoji(),
        J = (e) => {
            if (e.type === p.B.GUILD) return e.guildId;
        },
        ee = u.useMemo(() => d().groupBy($, J), [$]),
        { enabled: et, treatment: en } = M.Z.useExperiment(
            { location: 'EmojiPicker' },
            {
                autoTrackExposure: !0,
                disable: !z
            }
        ),
        { enabled: er } = b.Z.getCurrentConfig(
            { location: 'useEmojiGrid' },
            {
                autoTrackExposure: !Q,
                disable: Q
            }
        );
    return u.useMemo(() => {
        let e = [],
            u = [],
            E = [],
            h = [],
            p = 0,
            I = 0;
        if (null != g && null != s) {
            let T = Math.floor(s / (l + 2 * o)),
                g = 3 * T,
                S = (a, s) => {
                    let o = new Map(),
                        c = n.has(s.sectionId),
                        [_, f] = d().partition(a, (e) => {
                            let n = D.ZP.isEmojiDisabled({
                                emoji: e,
                                channel: t,
                                intention: i
                            });
                            return o.set(e, n), !n;
                        }),
                        m = _.concat(f),
                        S = s.guild,
                        A = O.Z.getGuildId(),
                        N = s.sectionId === x.En.TOP_GUILD_EMOJI,
                        v = !N && null != S && A === S.id && m.length < S.getMaxEmojiSlots(),
                        R = N && m.length < T && !et,
                        C = null != S && N && et && en === M.B.WITH_TOP_LIST && ee[S.id].length < S.getMaxEmojiSlots(),
                        y = r && z && null != S && (v || R || C);
                    y && C && m.length === T && m.shift();
                    let L = m.length > g && null != S && S.id !== A,
                        b = er && L && !K.has(S.id);
                    b && m.splice(g - 1);
                    let U = et && y && !c,
                        w = Math.ceil((y ? m.length + 1 : m.length) / T),
                        G = [];
                    for (let e = 0; e < w; e++) {
                        let t = 0 === e,
                            n = e * T - (U && e > 0 ? 1 : 0),
                            r = n + T - (U && t ? 1 : 0),
                            i = m.slice(n, r).map((e, n) => {
                                var r, i;
                                return {
                                    type: 0,
                                    emoji: e,
                                    size: l,
                                    isDisabled: o.get(e),
                                    rowIndex: I,
                                    columnIndex: U && t ? n + 1 : n,
                                    visibleRowIndex: p,
                                    category: s.type,
                                    subCategory: s.sectionId === x.En.TOP_GUILD_EMOJI ? (0, P.IP)(Y, j, null !== (i = null !== (r = e.id) && void 0 !== r ? r : e.uniqueName) && void 0 !== i ? i : e.name) : x.t0.NONE
                                };
                            });
                        if (
                            (U &&
                                t &&
                                !c &&
                                (i = [
                                    {
                                        type: 1,
                                        guildId: S.id,
                                        name: k.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                        size: l,
                                        rowIndex: I,
                                        columnIndex: 0,
                                        visibleRowIndex: p
                                    },
                                    ...i
                                ]),
                            G.push(i),
                            !c)
                        ) {
                            if (!et && y && e === w - 1) {
                                let t = G[e];
                                t.push({
                                    type: 1,
                                    guildId: S.id,
                                    name: k.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                    size: l,
                                    rowIndex: e,
                                    columnIndex: t.length,
                                    visibleRowIndex: p
                                });
                            }
                            if (er && e === w - 1 && L) {
                                let t = G[e];
                                t.push({
                                    type: 2,
                                    guildId: S.id,
                                    name: k.Z.Messages.EMOJI_PICKER_EXPAND_EMOJI_SECTION,
                                    size: l,
                                    rowIndex: e,
                                    columnIndex: t.length,
                                    visibleRowIndex: p,
                                    sectionCollapsedToThreeRows: b
                                });
                            }
                            h.push(i.length), E.push(i), p++;
                        }
                        I++;
                    }
                    let B = {
                        ...s,
                        count: a.length
                    };
                    u.push(B), e.push(c ? 0 : w);
                };
            if (null != a)
                0 !== a.unlocked.length &&
                    S(a.unlocked, {
                        type: x.En.SEARCH_RESULTS,
                        sectionId: x.En.SEARCH_RESULTS,
                        count: a.unlocked.length,
                        isNitroLocked: !1
                    }),
                    0 !== a.locked.length &&
                        S(a.locked, {
                            type: x.En.PREMIUM_UPSELL,
                            categoryId: x.UX.PREMIUM_UPSELL,
                            sectionId: x.En.PREMIUM_UPSELL,
                            count: a.locked.length,
                            isNitroLocked: !Q
                        });
            else
                for (let e of c)
                    if (e === x.UX.CUSTOM) {
                        let n = (n) => {
                            let r = ee[n];
                            if (null == r) return;
                            let a = r.filter(
                                (e) =>
                                    D.ZP.getEmojiUnavailableReason({
                                        emoji: e,
                                        channel: null != t ? t : N.ZP.getDefaultChannel(n),
                                        intention: i
                                    }) !== G.Z5.DISALLOW_EXTERNAL
                            );
                            if (0 === a.length) return;
                            let s = v.Z.getGuild(n),
                                o =
                                    X ||
                                    (!Q &&
                                        D.ZP.isEmojiCategoryNitroLocked({
                                            categoryEmojis: a,
                                            channel: t,
                                            intention: i
                                        }));
                            S(a, {
                                categoryId: e,
                                guild: s,
                                type: x.En.GUILD,
                                sectionId: null != s ? s.id : (0, _.Z)(),
                                count: a.length,
                                isNitroLocked: o
                            });
                        };
                        if ((null != f && n(f.id), (0, G.Gt)(i))) for (let e of W) (null == f || f.id !== e) && n(e);
                    } else if (e === x.UX.TOP_GUILD_EMOJI) {
                        if (null != f) {
                            let { allEmojis: t } = (0, U.J)({
                                topEmojis: Y,
                                newlyAddedEmojis: j
                            });
                            t.length > 0 &&
                                S(t, {
                                    categoryId: e,
                                    guild: v.Z.getGuild(f.id),
                                    type: x.En.TOP_GUILD_EMOJI,
                                    sectionId: x.En.TOP_GUILD_EMOJI,
                                    count: t.length,
                                    isNitroLocked: !1
                                });
                        }
                    } else if (e === x.UX.RECENT) {
                        let n = (i === G.Hz.REACTION && (H || Z) ? V : F).filter(
                            (e) =>
                                !D.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: t,
                                    intention: i
                                })
                        );
                        S(n, {
                            categoryId: e,
                            type: x.En.RECENT,
                            sectionId: x.En.RECENT,
                            count: n.length,
                            isNitroLocked: !1
                        });
                    } else if (e === x.UX.FAVORITES) {
                        let n = B.filter(
                            (e) =>
                                !D.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: t,
                                    intention: i
                                })
                        );
                        0 !== n.length &&
                            S(n, {
                                categoryId: e,
                                type: x.En.FAVORITES,
                                sectionId: x.En.FAVORITES,
                                count: n.length,
                                isNitroLocked: !1
                            });
                    } else {
                        let t = m.ZP.getByCategory(e);
                        null != t &&
                            S(t, {
                                categoryId: e,
                                type: x.En.UNICODE,
                                sectionId: e,
                                count: t.length,
                                isNitroLocked: !1
                            });
                    }
        }
        return {
            columnCounts: h,
            emojiGrid: E,
            rowCountBySection: e,
            sectionDescriptors: u
        };
    }, [g, s, l, o, a, n, et, en, ee, r, z, er, K, t, i, Y, j, Q, c, f, W, H, Z, V, F, B, X]);
};
((l = a || (a = {}))[(l.PREMIUM = 0)] = 'PREMIUM'), (l[(l.ROLE_SUBSCRIPTION = 1)] = 'ROLE_SUBSCRIPTION');
let F = (e) => {
        let { pickerIntention: t, selectedChannel: n, onSelectEmoji: r, setUpsellConfigs: i, emojiSelectAnalytics: a, trackEmojiFavorited: s } = e,
            o = (0, E.e7)([h.ZP], () => h.ZP.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
        return u.useCallback(
            (e, l) => {
                switch (e.type) {
                    case 1:
                        r(void 0, l.isFinalSelection, l.isBurst);
                        return;
                    case 0: {
                        let { emoji: u } = e;
                        if (null == u) return;
                        let c = D.ZP.getEmojiUnavailableReason({
                            emoji: u,
                            channel: n,
                            intention: t
                        });
                        if (l.toggleFavorite) {
                            o.isFavoriteEmojiWithoutFetchingLatest(u) || null != c ? (0, f.Xe)(u) : (null == s || s(e), (0, f.$K)(u));
                            return;
                        }
                        if (c === G.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (c === G.Z5.PREMIUM_LOCKED) {
                            i({
                                type: 0,
                                emojiDescriptor: e
                            });
                            return;
                        }
                        if (c === G.Z5.ROLE_SUBSCRIPTION_LOCKED && u.type === p.B.GUILD) {
                            i({
                                type: 1,
                                guildId: u.guildId,
                                emojiId: u.id
                            });
                            return;
                        }
                        if (c === G.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
                        null == a || a(e), r(u, l.isFinalSelection, l.isBurst);
                    }
                }
            },
            [n, t, r, i, o, a, s]
        );
    },
    V = (e) => {
        let { emojiListRef: t } = e,
            n = (0, g.Iu)((e) => e.searchQuery),
            r = u.useCallback(
                (e) => {
                    var n;
                    return null === (n = t.current) || void 0 === n ? void 0 : n.scrollToSectionTop(e);
                },
                [t]
            );
        return u.useCallback(
            (e) => {
                '' !== n ? ((0, g.ql)(''), T.kJ.setActiveCategoryIndex(e)) : r(e);
            },
            [r, n]
        );
    };
