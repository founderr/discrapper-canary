r.d(n, {
    Bg: function () {
        return s;
    },
    Ni: function () {
        return Z;
    },
    YH: function () {
        return B;
    },
    ld: function () {
        return i;
    },
    rf: function () {
        return G;
    }
});
var i,
    a,
    s,
    o = r(47120);
var l = r(653041);
var u = r(192379),
    c = r(392711),
    d = r.n(c),
    f = r(772848),
    _ = r(442837),
    h = r(80932),
    p = r(339085),
    m = r(906411),
    g = r(689789),
    E = r(407477),
    v = r(633302),
    I = r(806966),
    T = r(28546),
    b = r(357156),
    y = r(140465),
    S = r(984933),
    A = r(430824),
    N = r(914010),
    C = r(771845),
    R = r(594174),
    O = r(176354),
    D = r(111361),
    L = r(392552),
    x = r(543241),
    w = r(304852),
    P = r(199257),
    M = r(149203),
    k = r(185923),
    U = r(388032);
!(function (e) {
    (e[(e.EMOJI = 0)] = 'EMOJI'), (e[(e.CREATE_EMOJI = 1)] = 'CREATE_EMOJI'), (e[(e.EXPAND_OR_COLLAPSE_EMOJIS = 2)] = 'EXPAND_OR_COLLAPSE_EMOJIS');
})(i || (i = {})),
    !(function (e) {
        (e[(e.SECTION_HEADING = 0)] = 'SECTION_HEADING'), (e[(e.SECTION_ROW = 1)] = 'SECTION_ROW');
    })(a || (a = {}));
let B = (e) => {
    let { channel: n, collapsedSections: r, includeCreateEmojiButton: i = !0, pickerIntention: a, emojiSearchResults: s, gridWidth: o, emojiPaddingHorizontal: l, emojiSpriteSize: c } = e,
        h = (0, _.e7)([p.ZP], () => p.ZP.categories),
        I = (0, _.e7)([A.Z], () => A.Z.getGuild(null == n ? void 0 : n.getGuildId()), [n]),
        T = null == n ? null : n.getGuildId(),
        B = (0, _.e7)([p.ZP], () => p.ZP.getDisambiguatedEmojiContext(T), [T]),
        G = (0, x.NJ)(T),
        Z = (0, x.wC)(T),
        F = (0, x.q5)(T),
        { canSplitFrecencyList: V } = (0, g.S)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        }),
        j = (0, E.p3)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        });
    E.Xb.useExperiment({ location: 'useEmojiGrid' }, { autoTrackExposure: !0 });
    let { topEmojis: H, newlyAddedEmojis: Y } = (0, P.Z)(T, a),
        W = (0, _.Wu)([C.ZP], () => C.ZP.getFlattenedGuildIds(), []),
        K = (0, _.e7)([p.ZP], () => p.ZP.expandedSectionsByGuildIds),
        { canCreateExpressions: z } = (0, b.XJ)(I),
        q = (0, _.e7)([R.default], () => R.default.getCurrentUser()),
        Q = (0, D.I5)(q),
        X = (0, y.x8)('useEmojiGrid'),
        J = B.getCustomEmoji(),
        $ = (e) => {
            if (e.type === m.B.GUILD) return e.guildId;
        },
        ee = u.useMemo(() => d().groupBy(J, $), [J]),
        { enabled: et, treatment: en } = L.Z.useExperiment(
            { location: 'EmojiPicker' },
            {
                autoTrackExposure: !0,
                disable: !z
            }
        );
    return u.useMemo(() => {
        let e = [],
            u = [],
            _ = [],
            p = [],
            m = 0,
            g = 0;
        if (null != B && null != o) {
            let E = Math.floor(o / (c + 2 * l)),
                T = 3 * E,
                b = (s, o) => {
                    let l = new Map(),
                        f = r.has(o.sectionId),
                        [h, v] = d().partition(s, (e) => {
                            let r = O.ZP.isEmojiDisabled({
                                emoji: e,
                                channel: n,
                                intention: a
                            });
                            return l.set(e, r), !r;
                        }),
                        I = h.concat(v),
                        b = o.guild,
                        y = N.Z.getGuildId(),
                        S = o.sectionId === M.En.TOP_GUILD_EMOJI,
                        A = !S && null != b && y === b.id && I.length < b.getMaxEmojiSlots(),
                        C = S && I.length < E && !et,
                        R = null != b && S && et && en === L.B.WITH_TOP_LIST && ee[b.id].length < b.getMaxEmojiSlots(),
                        D = i && z && null != b && (A || C || R);
                    D && R && I.length === E && I.shift();
                    let w = I.length > T && null != b && o.isNitroLocked,
                        P = w && !K.has(b.id);
                    P && I.splice(T - 1);
                    let k = et && D && !f,
                        B = Math.ceil((D || w ? I.length + 1 : I.length) / E),
                        G = [];
                    for (let e = 0; e < B; e++) {
                        let n = 0 === e,
                            r = e * E - (k && e > 0 ? 1 : 0),
                            i = r + E - (k && n ? 1 : 0),
                            a = I.slice(r, i).map((e, r) => {
                                var i, a;
                                return {
                                    type: 0,
                                    emoji: e,
                                    size: c,
                                    isDisabled: l.get(e),
                                    rowIndex: g,
                                    columnIndex: k && n ? r + 1 : r,
                                    visibleRowIndex: m,
                                    category: o.type,
                                    subCategory: o.sectionId === M.En.TOP_GUILD_EMOJI ? (0, x.IP)(H, Y, null !== (a = null !== (i = e.id) && void 0 !== i ? i : e.uniqueName) && void 0 !== a ? a : e.name) : M.t0.NONE
                                };
                            });
                        if (
                            (k &&
                                n &&
                                !f &&
                                (a = [
                                    {
                                        type: 1,
                                        guildId: b.id,
                                        name: U.intl.string(U.t['Z/r7IS']),
                                        size: c,
                                        rowIndex: g,
                                        columnIndex: 0,
                                        visibleRowIndex: m
                                    },
                                    ...a
                                ]),
                            G.push(a),
                            !f)
                        ) {
                            if (!et && D && e === B - 1) {
                                let n = G[e];
                                n.push({
                                    type: 1,
                                    guildId: b.id,
                                    name: U.intl.string(U.t['Z/r7IS']),
                                    size: c,
                                    rowIndex: e,
                                    columnIndex: n.length,
                                    visibleRowIndex: m
                                });
                            }
                            if (w && e === B - 1) {
                                let n = G[e];
                                n.push({
                                    type: 2,
                                    guildId: b.id,
                                    name: U.intl.string(U.t.NZI2Zm),
                                    size: c,
                                    rowIndex: e,
                                    columnIndex: n.length,
                                    visibleRowIndex: m,
                                    sectionCollapsedToThreeRows: P
                                });
                            }
                            p.push(a.length), _.push(a), m++;
                        }
                        g++;
                    }
                    let Z = f ? 0 : B,
                        F = {
                            ...o,
                            count: s.length
                        };
                    u.push(F), e.push(Z);
                };
            if (null != s)
                0 !== s.unlocked.length &&
                    b(s.unlocked, {
                        type: M.En.SEARCH_RESULTS,
                        sectionId: M.En.SEARCH_RESULTS,
                        count: s.unlocked.length,
                        isNitroLocked: !1
                    }),
                    0 !== s.locked.length &&
                        b(s.locked, {
                            type: M.En.PREMIUM_UPSELL,
                            categoryId: M.UX.PREMIUM_UPSELL,
                            sectionId: M.En.PREMIUM_UPSELL,
                            count: s.locked.length,
                            isNitroLocked: !Q
                        });
            else
                for (let e of h)
                    if (e === M.UX.CUSTOM) {
                        let r = (r) => {
                            let i = ee[r];
                            if (null == i) return;
                            let s = i.filter(
                                (e) =>
                                    O.ZP.getEmojiUnavailableReason({
                                        emoji: e,
                                        channel: null != n ? n : S.ZP.getDefaultChannel(r),
                                        intention: a
                                    }) !== k.Z5.DISALLOW_EXTERNAL
                            );
                            if (0 === s.length) return;
                            let o = A.Z.getGuild(r),
                                l =
                                    X ||
                                    (!Q &&
                                        O.ZP.isEmojiCategoryNitroLocked({
                                            categoryEmojis: s,
                                            channel: n,
                                            intention: a
                                        }));
                            b(s, {
                                categoryId: e,
                                guild: o,
                                type: M.En.GUILD,
                                sectionId: null != o ? o.id : (0, f.Z)(),
                                count: s.length,
                                isNitroLocked: l
                            });
                        };
                        if ((null != I && r(I.id), (0, k.Gt)(a))) for (let e of W) (null == I || I.id !== e) && r(e);
                    } else if (e === M.UX.TOP_GUILD_EMOJI) {
                        if (null != I) {
                            let { allEmojis: n } = (0, w.J)({
                                topEmojis: H,
                                newlyAddedEmojis: Y
                            });
                            n.length > 0 &&
                                b(n, {
                                    categoryId: e,
                                    guild: A.Z.getGuild(I.id),
                                    type: M.En.TOP_GUILD_EMOJI,
                                    sectionId: M.En.TOP_GUILD_EMOJI,
                                    count: n.length,
                                    isNitroLocked: !1
                                });
                        }
                    } else if (e === M.UX.RECENT) {
                        let r = (a === k.Hz.REACTION && (V || j) ? F : Z).filter(
                            (e) =>
                                !O.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: n,
                                    intention: a
                                })
                        );
                        b(r, {
                            categoryId: e,
                            type: M.En.RECENT,
                            sectionId: M.En.RECENT,
                            count: r.length,
                            isNitroLocked: !1
                        });
                    } else if (e === M.UX.FAVORITES) {
                        let r = G.filter(
                            (e) =>
                                !O.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: n,
                                    intention: a
                                })
                        );
                        0 !== r.length &&
                            b(r, {
                                categoryId: e,
                                type: M.En.FAVORITES,
                                sectionId: M.En.FAVORITES,
                                count: r.length,
                                isNitroLocked: !1
                            });
                    } else {
                        let n = v.ZP.getByCategory(e);
                        null != n &&
                            b(n, {
                                categoryId: e,
                                type: M.En.UNICODE,
                                sectionId: e,
                                count: n.length,
                                isNitroLocked: !1
                            });
                    }
        }
        return {
            columnCounts: p,
            emojiGrid: _,
            rowCountBySection: e,
            sectionDescriptors: u
        };
    }, [B, o, c, l, s, r, et, en, ee, i, z, K, n, a, H, Y, Q, h, I, W, V, j, F, Z, G, X]);
};
!(function (e) {
    (e[(e.PREMIUM = 0)] = 'PREMIUM'), (e[(e.ROLE_SUBSCRIPTION = 1)] = 'ROLE_SUBSCRIPTION');
})(s || (s = {}));
let G = (e) => {
        let { pickerIntention: n, selectedChannel: r, onSelectEmoji: i, setUpsellConfigs: a, emojiSelectAnalytics: s, trackEmojiFavorited: o } = e,
            l = (0, _.e7)([p.ZP], () => p.ZP.getDisambiguatedEmojiContext(null == r ? void 0 : r.getGuildId()), [r]);
        return u.useCallback(
            (e, u) => {
                switch (e.type) {
                    case 1:
                        i(void 0, u.isFinalSelection, u.isBurst);
                        return;
                    case 0: {
                        let { emoji: c } = e;
                        if (null == c) return;
                        let d = O.ZP.getEmojiUnavailableReason({
                            emoji: c,
                            channel: r,
                            intention: n
                        });
                        if (u.toggleFavorite) {
                            l.isFavoriteEmojiWithoutFetchingLatest(c) || null != d ? (0, h.Xe)(c) : (null == o || o(e), (0, h.$K)(c));
                            return;
                        }
                        if (d === k.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (d === k.Z5.PREMIUM_LOCKED) {
                            a({
                                type: 0,
                                emojiDescriptor: e
                            });
                            return;
                        }
                        if (d === k.Z5.ROLE_SUBSCRIPTION_LOCKED && c.type === m.B.GUILD) {
                            a({
                                type: 1,
                                guildId: c.guildId,
                                emojiId: c.id
                            });
                            return;
                        }
                        if (d === k.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
                        null == s || s(e), i(c, u.isFinalSelection, u.isBurst);
                    }
                }
            },
            [r, n, i, a, l, s, o]
        );
    },
    Z = (e) => {
        let { emojiListRef: n } = e,
            r = (0, T.Iu)((e) => e.searchQuery),
            i = u.useCallback(
                (e) => {
                    var r;
                    return null === (r = n.current) || void 0 === r ? void 0 : r.scrollToSectionTop(e);
                },
                [n]
            );
        return u.useCallback(
            (e) => {
                '' !== r ? ((0, T.ql)(''), I.kJ.setActiveCategoryIndex(e)) : i(e);
            },
            [i, r]
        );
    };
