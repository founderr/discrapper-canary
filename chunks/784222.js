n.d(t, {
    Bg: function () {
        return a;
    },
    Ni: function () {
        return Z;
    },
    YH: function () {
        return B;
    },
    ld: function () {
        return r;
    },
    rf: function () {
        return G;
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
    u = n(192379),
    c = n(392711),
    d = n.n(c),
    f = n(772848),
    _ = n(442837),
    p = n(80932),
    h = n(339085),
    m = n(906411),
    g = n(689789),
    E = n(407477),
    v = n(633302),
    I = n(806966),
    T = n(28546),
    b = n(357156),
    S = n(140465),
    y = n(984933),
    A = n(430824),
    N = n(914010),
    C = n(771845),
    R = n(594174),
    O = n(176354),
    D = n(111361),
    L = n(392552),
    x = n(543241),
    w = n(304852),
    P = n(199257),
    M = n(149203),
    k = n(185923),
    U = n(388032);
((s = r || (r = {}))[(s.EMOJI = 0)] = 'EMOJI'), (s[(s.CREATE_EMOJI = 1)] = 'CREATE_EMOJI'), (s[(s.EXPAND_OR_COLLAPSE_EMOJIS = 2)] = 'EXPAND_OR_COLLAPSE_EMOJIS'), ((o = i || (i = {}))[(o.SECTION_HEADING = 0)] = 'SECTION_HEADING'), (o[(o.SECTION_ROW = 1)] = 'SECTION_ROW');
let B = (e) => {
    let { channel: t, collapsedSections: n, includeCreateEmojiButton: r = !0, pickerIntention: i, emojiSearchResults: a, gridWidth: s, emojiPaddingHorizontal: o, emojiSpriteSize: l } = e,
        c = (0, _.e7)([h.ZP], () => h.ZP.categories),
        p = (0, _.e7)([A.Z], () => A.Z.getGuild(null == t ? void 0 : t.getGuildId()), [t]),
        I = null == t ? null : t.getGuildId(),
        T = (0, _.e7)([h.ZP], () => h.ZP.getDisambiguatedEmojiContext(I), [I]),
        B = (0, x.NJ)(I),
        G = (0, x.wC)(I),
        Z = (0, x.q5)(I),
        { canSplitFrecencyList: F } = (0, g.S)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        }),
        V = (0, E.p3)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        });
    E.Xb.useExperiment({ location: 'useEmojiGrid' }, { autoTrackExposure: !0 });
    let { topEmojis: j, newlyAddedEmojis: H } = (0, P.Z)(I, i),
        Y = (0, _.Wu)([C.ZP], () => C.ZP.getFlattenedGuildIds(), []),
        W = (0, _.e7)([h.ZP], () => h.ZP.expandedSectionsByGuildIds),
        { canCreateExpressions: K } = (0, b.XJ)(p),
        z = (0, _.e7)([R.default], () => R.default.getCurrentUser()),
        q = (0, D.I5)(z),
        Q = (0, S.x8)('useEmojiGrid'),
        X = T.getCustomEmoji(),
        J = (e) => {
            if (e.type === m.B.GUILD) return e.guildId;
        },
        $ = u.useMemo(() => d().groupBy(X, J), [X]),
        { enabled: ee, treatment: et } = L.Z.useExperiment(
            { location: 'EmojiPicker' },
            {
                autoTrackExposure: !0,
                disable: !K
            }
        );
    return u.useMemo(() => {
        let e = [],
            u = [],
            _ = [],
            h = [],
            m = 0,
            g = 0;
        if (null != T && null != s) {
            let E = Math.floor(s / (l + 2 * o)),
                I = 3 * E,
                T = (a, s) => {
                    let o = new Map(),
                        c = n.has(s.sectionId),
                        [f, p] = d().partition(a, (e) => {
                            let n = O.ZP.isEmojiDisabled({
                                emoji: e,
                                channel: t,
                                intention: i
                            });
                            return o.set(e, n), !n;
                        }),
                        v = f.concat(p),
                        T = s.guild,
                        b = N.Z.getGuildId(),
                        S = s.sectionId === M.En.TOP_GUILD_EMOJI,
                        y = !S && null != T && b === T.id && v.length < T.getMaxEmojiSlots(),
                        A = S && v.length < E && !ee,
                        C = null != T && S && ee && et === L.B.WITH_TOP_LIST && $[T.id].length < T.getMaxEmojiSlots(),
                        R = r && K && null != T && (y || A || C);
                    R && C && v.length === E && v.shift();
                    let D = v.length > I && null != T && s.isNitroLocked,
                        w = D && !W.has(T.id);
                    w && v.splice(I - 1);
                    let P = ee && R && !c,
                        k = Math.ceil((R || D ? v.length + 1 : v.length) / E),
                        B = [];
                    for (let e = 0; e < k; e++) {
                        let t = 0 === e,
                            n = e * E - (P && e > 0 ? 1 : 0),
                            r = n + E - (P && t ? 1 : 0),
                            i = v.slice(n, r).map((e, n) => {
                                var r, i;
                                return {
                                    type: 0,
                                    emoji: e,
                                    size: l,
                                    isDisabled: o.get(e),
                                    rowIndex: g,
                                    columnIndex: P && t ? n + 1 : n,
                                    visibleRowIndex: m,
                                    category: s.type,
                                    subCategory: s.sectionId === M.En.TOP_GUILD_EMOJI ? (0, x.IP)(j, H, null !== (i = null !== (r = e.id) && void 0 !== r ? r : e.uniqueName) && void 0 !== i ? i : e.name) : M.t0.NONE
                                };
                            });
                        if (
                            (P &&
                                t &&
                                !c &&
                                (i = [
                                    {
                                        type: 1,
                                        guildId: T.id,
                                        name: U.intl.string(U.t['Z/r7IS']),
                                        size: l,
                                        rowIndex: g,
                                        columnIndex: 0,
                                        visibleRowIndex: m
                                    },
                                    ...i
                                ]),
                            B.push(i),
                            !c)
                        ) {
                            if (!ee && R && e === k - 1) {
                                let t = B[e];
                                t.push({
                                    type: 1,
                                    guildId: T.id,
                                    name: U.intl.string(U.t['Z/r7IS']),
                                    size: l,
                                    rowIndex: e,
                                    columnIndex: t.length,
                                    visibleRowIndex: m
                                });
                            }
                            if (D && e === k - 1) {
                                let t = B[e];
                                t.push({
                                    type: 2,
                                    guildId: T.id,
                                    name: U.intl.string(U.t.NZI2Zm),
                                    size: l,
                                    rowIndex: e,
                                    columnIndex: t.length,
                                    visibleRowIndex: m,
                                    sectionCollapsedToThreeRows: w
                                });
                            }
                            h.push(i.length), _.push(i), m++;
                        }
                        g++;
                    }
                    let G = {
                        ...s,
                        count: a.length
                    };
                    u.push(G), e.push(c ? 0 : k);
                };
            if (null != a)
                0 !== a.unlocked.length &&
                    T(a.unlocked, {
                        type: M.En.SEARCH_RESULTS,
                        sectionId: M.En.SEARCH_RESULTS,
                        count: a.unlocked.length,
                        isNitroLocked: !1
                    }),
                    0 !== a.locked.length &&
                        T(a.locked, {
                            type: M.En.PREMIUM_UPSELL,
                            categoryId: M.UX.PREMIUM_UPSELL,
                            sectionId: M.En.PREMIUM_UPSELL,
                            count: a.locked.length,
                            isNitroLocked: !q
                        });
            else
                for (let e of c)
                    if (e === M.UX.CUSTOM) {
                        let n = (n) => {
                            let r = $[n];
                            if (null == r) return;
                            let a = r.filter(
                                (e) =>
                                    O.ZP.getEmojiUnavailableReason({
                                        emoji: e,
                                        channel: null != t ? t : y.ZP.getDefaultChannel(n),
                                        intention: i
                                    }) !== k.Z5.DISALLOW_EXTERNAL
                            );
                            if (0 === a.length) return;
                            let s = A.Z.getGuild(n),
                                o =
                                    Q ||
                                    (!q &&
                                        O.ZP.isEmojiCategoryNitroLocked({
                                            categoryEmojis: a,
                                            channel: t,
                                            intention: i
                                        }));
                            T(a, {
                                categoryId: e,
                                guild: s,
                                type: M.En.GUILD,
                                sectionId: null != s ? s.id : (0, f.Z)(),
                                count: a.length,
                                isNitroLocked: o
                            });
                        };
                        if ((null != p && n(p.id), (0, k.Gt)(i))) for (let e of Y) (null == p || p.id !== e) && n(e);
                    } else if (e === M.UX.TOP_GUILD_EMOJI) {
                        if (null != p) {
                            let { allEmojis: t } = (0, w.J)({
                                topEmojis: j,
                                newlyAddedEmojis: H
                            });
                            t.length > 0 &&
                                T(t, {
                                    categoryId: e,
                                    guild: A.Z.getGuild(p.id),
                                    type: M.En.TOP_GUILD_EMOJI,
                                    sectionId: M.En.TOP_GUILD_EMOJI,
                                    count: t.length,
                                    isNitroLocked: !1
                                });
                        }
                    } else if (e === M.UX.RECENT) {
                        let n = (i === k.Hz.REACTION && (F || V) ? Z : G).filter(
                            (e) =>
                                !O.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: t,
                                    intention: i
                                })
                        );
                        T(n, {
                            categoryId: e,
                            type: M.En.RECENT,
                            sectionId: M.En.RECENT,
                            count: n.length,
                            isNitroLocked: !1
                        });
                    } else if (e === M.UX.FAVORITES) {
                        let n = B.filter(
                            (e) =>
                                !O.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: t,
                                    intention: i
                                })
                        );
                        0 !== n.length &&
                            T(n, {
                                categoryId: e,
                                type: M.En.FAVORITES,
                                sectionId: M.En.FAVORITES,
                                count: n.length,
                                isNitroLocked: !1
                            });
                    } else {
                        let t = v.ZP.getByCategory(e);
                        null != t &&
                            T(t, {
                                categoryId: e,
                                type: M.En.UNICODE,
                                sectionId: e,
                                count: t.length,
                                isNitroLocked: !1
                            });
                    }
        }
        return {
            columnCounts: h,
            emojiGrid: _,
            rowCountBySection: e,
            sectionDescriptors: u
        };
    }, [T, s, l, o, a, n, ee, et, $, r, K, W, t, i, j, H, q, c, p, Y, F, V, Z, G, B, Q]);
};
((l = a || (a = {}))[(l.PREMIUM = 0)] = 'PREMIUM'), (l[(l.ROLE_SUBSCRIPTION = 1)] = 'ROLE_SUBSCRIPTION');
let G = (e) => {
        let { pickerIntention: t, selectedChannel: n, onSelectEmoji: r, setUpsellConfigs: i, emojiSelectAnalytics: a, trackEmojiFavorited: s } = e,
            o = (0, _.e7)([h.ZP], () => h.ZP.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
        return u.useCallback(
            (e, l) => {
                switch (e.type) {
                    case 1:
                        r(void 0, l.isFinalSelection, l.isBurst);
                        return;
                    case 0: {
                        let { emoji: u } = e;
                        if (null == u) return;
                        let c = O.ZP.getEmojiUnavailableReason({
                            emoji: u,
                            channel: n,
                            intention: t
                        });
                        if (l.toggleFavorite) {
                            o.isFavoriteEmojiWithoutFetchingLatest(u) || null != c ? (0, p.Xe)(u) : (null == s || s(e), (0, p.$K)(u));
                            return;
                        }
                        if (c === k.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (c === k.Z5.PREMIUM_LOCKED) {
                            i({
                                type: 0,
                                emojiDescriptor: e
                            });
                            return;
                        }
                        if (c === k.Z5.ROLE_SUBSCRIPTION_LOCKED && u.type === m.B.GUILD) {
                            i({
                                type: 1,
                                guildId: u.guildId,
                                emojiId: u.id
                            });
                            return;
                        }
                        if (c === k.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
                        null == a || a(e), r(u, l.isFinalSelection, l.isBurst);
                    }
                }
            },
            [n, t, r, i, o, a, s]
        );
    },
    Z = (e) => {
        let { emojiListRef: t } = e,
            n = (0, T.Iu)((e) => e.searchQuery),
            r = u.useCallback(
                (e) => {
                    var n;
                    return null === (n = t.current) || void 0 === n ? void 0 : n.scrollToSectionTop(e);
                },
                [t]
            );
        return u.useCallback(
            (e) => {
                '' !== n ? ((0, T.ql)(''), I.kJ.setActiveCategoryIndex(e)) : r(e);
            },
            [r, n]
        );
    };
