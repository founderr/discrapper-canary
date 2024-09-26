n.d(t, {
    Bg: function () {
        return a;
    },
    Ni: function () {
        return F;
    },
    YH: function () {
        return k;
    },
    ld: function () {
        return r;
    },
    rf: function () {
        return B;
    }
});
var r,
    i,
    a,
    o = n(47120);
var s = n(653041);
var l = n(470079),
    u = n(392711),
    c = n.n(u),
    d = n(772848),
    _ = n(442837),
    E = n(80932),
    f = n(339085),
    h = n(906411),
    p = n(689789),
    m = n(407477),
    I = n(633302),
    T = n(806966),
    g = n(28546),
    S = n(357156),
    A = n(984933),
    v = n(430824),
    N = n(914010),
    O = n(771845),
    R = n(594174),
    C = n(78839),
    y = n(176354),
    L = n(111361),
    b = n(111846),
    D = n(392552),
    M = n(543241),
    P = n(304852),
    U = n(199257),
    w = n(149203),
    x = n(185923),
    G = n(689938);
!(function (e) {
    (e[(e.EMOJI = 0)] = 'EMOJI'), (e[(e.CREATE_EMOJI = 1)] = 'CREATE_EMOJI'), (e[(e.EXPAND_OR_COLLAPSE_EMOJIS = 2)] = 'EXPAND_OR_COLLAPSE_EMOJIS');
})(r || (r = {})),
    !(function (e) {
        (e[(e.SECTION_HEADING = 0)] = 'SECTION_HEADING'), (e[(e.SECTION_ROW = 1)] = 'SECTION_ROW');
    })(i || (i = {}));
let k = (e) => {
    let { channel: t, collapsedSections: n, includeCreateEmojiButton: r = !0, pickerIntention: i, emojiSearchResults: a, gridWidth: o, emojiPaddingHorizontal: s, emojiSpriteSize: u } = e,
        E = (0, _.e7)([f.ZP], () => f.ZP.categories),
        T = (0, _.e7)([v.Z], () => v.Z.getGuild(null == t ? void 0 : t.getGuildId()), [t]),
        g = null == t ? null : t.getGuildId(),
        k = (0, _.e7)([f.ZP], () => f.ZP.getDisambiguatedEmojiContext(g), [g]),
        B = (0, M.NJ)(g),
        F = (0, M.wC)(g),
        Z = (0, M.q5)(g),
        { canSplitFrecencyList: V } = (0, p.S)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        }),
        H = (0, m.p3)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        }),
        { topEmojis: Y, newlyAddedEmojis: j } = (0, U.Z)(g, i),
        W = (0, _.Wu)([O.ZP], () => O.ZP.getFlattenedGuildIds(), []),
        K = (0, _.e7)([f.ZP], () => f.ZP.expandedSectionsByGuildIds),
        { canCreateExpressions: z } = (0, S.X)(T),
        q = (0, _.e7)([R.default], () => R.default.getCurrentUser()),
        Q = (0, L.I5)(q),
        X = (0, _.e7)([C.ZP], () => C.ZP.inReverseTrial()),
        $ = k.getCustomEmoji(),
        J = (e) => {
            if (e.type === h.B.GUILD) return e.guildId;
        },
        ee = l.useMemo(() => c().groupBy($, J), [$]),
        { enabled: et, treatment: en } = D.Z.useExperiment(
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
    return l.useMemo(() => {
        let e = [],
            l = [],
            _ = [],
            f = [],
            h = 0,
            p = 0;
        if (null != k && null != o) {
            let m = Math.floor(o / (u + 2 * s)),
                g = 3 * m,
                S = (a, o) => {
                    let s = new Map(),
                        d = n.has(o.sectionId),
                        [E, I] = c().partition(a, (e) => {
                            let n = y.ZP.isEmojiDisabled({
                                emoji: e,
                                channel: t,
                                intention: i
                            });
                            return s.set(e, n), !n;
                        }),
                        T = E.concat(I),
                        S = o.guild,
                        A = N.Z.getGuildId(),
                        v = o.sectionId === w.En.TOP_GUILD_EMOJI,
                        O = !v && null != S && A === S.id && T.length < S.getMaxEmojiSlots(),
                        R = v && T.length < m && !et,
                        C = null != S && v && et && en === D.B.WITH_TOP_LIST && ee[S.id].length < S.getMaxEmojiSlots(),
                        L = r && z && null != S && (O || R || C);
                    L && C && T.length === m && T.shift();
                    let b = T.length > g,
                        P = er && b && null != S && o.isNitroLocked,
                        U = P && !K.has(S.id);
                    U && T.splice(g - 1);
                    let x = et && L && !d,
                        k = Math.ceil((L || P ? T.length + 1 : T.length) / m),
                        B = [];
                    for (let e = 0; e < k; e++) {
                        let t = 0 === e,
                            n = e * m - (x && e > 0 ? 1 : 0),
                            r = n + m - (x && t ? 1 : 0),
                            i = T.slice(n, r).map((e, n) => {
                                var r, i;
                                return {
                                    type: 0,
                                    emoji: e,
                                    size: u,
                                    isDisabled: s.get(e),
                                    rowIndex: p,
                                    columnIndex: x && t ? n + 1 : n,
                                    visibleRowIndex: h,
                                    category: o.type,
                                    subCategory: o.sectionId === w.En.TOP_GUILD_EMOJI ? (0, M.IP)(Y, j, null !== (i = null !== (r = e.id) && void 0 !== r ? r : e.uniqueName) && void 0 !== i ? i : e.name) : w.t0.NONE
                                };
                            });
                        if (
                            (x &&
                                t &&
                                !d &&
                                (i = [
                                    {
                                        type: 1,
                                        guildId: S.id,
                                        name: G.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                        size: u,
                                        rowIndex: p,
                                        columnIndex: 0,
                                        visibleRowIndex: h
                                    },
                                    ...i
                                ]),
                            B.push(i),
                            !d)
                        ) {
                            if (!et && L && e === k - 1) {
                                let t = B[e];
                                t.push({
                                    type: 1,
                                    guildId: S.id,
                                    name: G.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                    size: u,
                                    rowIndex: e,
                                    columnIndex: t.length,
                                    visibleRowIndex: h
                                });
                            }
                            if (P && e === k - 1) {
                                let t = B[e];
                                t.push({
                                    type: 2,
                                    guildId: S.id,
                                    name: G.Z.Messages.EMOJI_PICKER_EXPAND_EMOJI_SECTION,
                                    size: u,
                                    rowIndex: e,
                                    columnIndex: t.length,
                                    visibleRowIndex: h,
                                    sectionCollapsedToThreeRows: U
                                });
                            }
                            f.push(i.length), _.push(i), h++;
                        }
                        p++;
                    }
                    let F = d ? 0 : k,
                        Z = {
                            ...o,
                            count: a.length
                        };
                    l.push(Z), e.push(F);
                };
            if (null != a)
                0 !== a.unlocked.length &&
                    S(a.unlocked, {
                        type: w.En.SEARCH_RESULTS,
                        sectionId: w.En.SEARCH_RESULTS,
                        count: a.unlocked.length,
                        isNitroLocked: !1
                    }),
                    0 !== a.locked.length &&
                        S(a.locked, {
                            type: w.En.PREMIUM_UPSELL,
                            categoryId: w.UX.PREMIUM_UPSELL,
                            sectionId: w.En.PREMIUM_UPSELL,
                            count: a.locked.length,
                            isNitroLocked: !Q
                        });
            else
                for (let e of E)
                    if (e === w.UX.CUSTOM) {
                        let n = (n) => {
                            let r = ee[n];
                            if (null == r) return;
                            let a = r.filter(
                                (e) =>
                                    y.ZP.getEmojiUnavailableReason({
                                        emoji: e,
                                        channel: null != t ? t : A.ZP.getDefaultChannel(n),
                                        intention: i
                                    }) !== x.Z5.DISALLOW_EXTERNAL
                            );
                            if (0 === a.length) return;
                            let o = v.Z.getGuild(n),
                                s =
                                    X ||
                                    (!Q &&
                                        y.ZP.isEmojiCategoryNitroLocked({
                                            categoryEmojis: a,
                                            channel: t,
                                            intention: i
                                        }));
                            S(a, {
                                categoryId: e,
                                guild: o,
                                type: w.En.GUILD,
                                sectionId: null != o ? o.id : (0, d.Z)(),
                                count: a.length,
                                isNitroLocked: s
                            });
                        };
                        if ((null != T && n(T.id), (0, x.Gt)(i))) for (let e of W) (null == T || T.id !== e) && n(e);
                    } else if (e === w.UX.TOP_GUILD_EMOJI) {
                        if (null != T) {
                            let { allEmojis: t } = (0, P.J)({
                                topEmojis: Y,
                                newlyAddedEmojis: j
                            });
                            t.length > 0 &&
                                S(t, {
                                    categoryId: e,
                                    guild: v.Z.getGuild(T.id),
                                    type: w.En.TOP_GUILD_EMOJI,
                                    sectionId: w.En.TOP_GUILD_EMOJI,
                                    count: t.length,
                                    isNitroLocked: !1
                                });
                        }
                    } else if (e === w.UX.RECENT) {
                        let n = (i === x.Hz.REACTION && (V || H) ? Z : F).filter(
                            (e) =>
                                !y.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: t,
                                    intention: i
                                })
                        );
                        S(n, {
                            categoryId: e,
                            type: w.En.RECENT,
                            sectionId: w.En.RECENT,
                            count: n.length,
                            isNitroLocked: !1
                        });
                    } else if (e === w.UX.FAVORITES) {
                        let n = B.filter(
                            (e) =>
                                !y.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: t,
                                    intention: i
                                })
                        );
                        0 !== n.length &&
                            S(n, {
                                categoryId: e,
                                type: w.En.FAVORITES,
                                sectionId: w.En.FAVORITES,
                                count: n.length,
                                isNitroLocked: !1
                            });
                    } else {
                        let t = I.ZP.getByCategory(e);
                        null != t &&
                            S(t, {
                                categoryId: e,
                                type: w.En.UNICODE,
                                sectionId: e,
                                count: t.length,
                                isNitroLocked: !1
                            });
                    }
        }
        return {
            columnCounts: f,
            emojiGrid: _,
            rowCountBySection: e,
            sectionDescriptors: l
        };
    }, [k, o, u, s, a, n, et, en, ee, r, z, er, K, t, i, Y, j, Q, E, T, W, V, H, Z, F, B, X]);
};
!(function (e) {
    (e[(e.PREMIUM = 0)] = 'PREMIUM'), (e[(e.ROLE_SUBSCRIPTION = 1)] = 'ROLE_SUBSCRIPTION');
})(a || (a = {}));
let B = (e) => {
        let { pickerIntention: t, selectedChannel: n, onSelectEmoji: r, setUpsellConfigs: i, emojiSelectAnalytics: a, trackEmojiFavorited: o } = e,
            s = (0, _.e7)([f.ZP], () => f.ZP.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
        return l.useCallback(
            (e, l) => {
                switch (e.type) {
                    case 1:
                        r(void 0, l.isFinalSelection, l.isBurst);
                        return;
                    case 0: {
                        let { emoji: u } = e;
                        if (null == u) return;
                        let c = y.ZP.getEmojiUnavailableReason({
                            emoji: u,
                            channel: n,
                            intention: t
                        });
                        if (l.toggleFavorite) {
                            s.isFavoriteEmojiWithoutFetchingLatest(u) || null != c ? (0, E.Xe)(u) : (null == o || o(e), (0, E.$K)(u));
                            return;
                        }
                        if (c === x.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (c === x.Z5.PREMIUM_LOCKED) {
                            i({
                                type: 0,
                                emojiDescriptor: e
                            });
                            return;
                        }
                        if (c === x.Z5.ROLE_SUBSCRIPTION_LOCKED && u.type === h.B.GUILD) {
                            i({
                                type: 1,
                                guildId: u.guildId,
                                emojiId: u.id
                            });
                            return;
                        }
                        if (c === x.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
                        null == a || a(e), r(u, l.isFinalSelection, l.isBurst);
                    }
                }
            },
            [n, t, r, i, s, a, o]
        );
    },
    F = (e) => {
        let { emojiListRef: t } = e,
            n = (0, g.Iu)((e) => e.searchQuery),
            r = l.useCallback(
                (e) => {
                    var n;
                    return null === (n = t.current) || void 0 === n ? void 0 : n.scrollToSectionTop(e);
                },
                [t]
            );
        return l.useCallback(
            (e) => {
                '' !== n ? ((0, g.ql)(''), T.kJ.setActiveCategoryIndex(e)) : r(e);
            },
            [r, n]
        );
    };
