"use strict";
n.r(t), n.d(t, {
  EmojiGridItemTypes: function() {
    return l
  },
  useEmojiGrid: function() {
    return j
  },
  EmojiUpsellType: function() {
    return a
  },
  useEmojiSelectHandler: function() {
    return U
  },
  useCategorySelectHandler: function() {
    return D
  }
}), n("222007"), n("424973");
var l, i, a, s, r, o, u = n("884691"),
  d = n("917351"),
  c = n.n(d),
  f = n("748820"),
  m = n("446674"),
  p = n("150021"),
  h = n("385976"),
  E = n("858619"),
  g = n("867805"),
  S = n("986632"),
  C = n("538282"),
  T = n("817963"),
  v = n("923959"),
  I = n("305961"),
  _ = n("162771"),
  N = n("677099"),
  A = n("697218"),
  y = n("402671"),
  x = n("764364"),
  O = n("788506"),
  R = n("255214"),
  M = n("352046"),
  L = n("115279"),
  P = n("958706"),
  b = n("782340");
(s = l || (l = {}))[s.EMOJI = 0] = "EMOJI", s[s.CREATE_EMOJI = 1] = "CREATE_EMOJI", (r = i || (i = {}))[r.SECTION_HEADING = 0] = "SECTION_HEADING", r[r.SECTION_ROW = 1] = "SECTION_ROW";
let j = e => {
  let {
    channel: t,
    collapsedSections: n,
    includeCreateEmojiButton: l = !0,
    pickerIntention: i,
    emojiSearchResults: a,
    gridWidth: s,
    emojiPaddingHorizontal: r,
    emojiSpriteSize: o
  } = e, d = (0, m.useStateFromStores)([h.default], () => h.default.categories), p = (0, m.useStateFromStores)([I.default], () => I.default.getGuild(null == t ? void 0 : t.getGuildId()), [t]), S = null == t ? null : t.getGuildId(), C = (0, m.useStateFromStores)([h.default], () => h.default.getDisambiguatedEmojiContext(S), [S]), j = (0, O.useFavoriteEmojis)(S), U = (0, O.useFrequentlyUsedEmojis)(S), {
    topEmojis: D,
    newlyAddedEmojis: k
  } = (0, M.default)(S, i), w = (0, m.useStateFromStoresArray)([N.default], () => N.default.getFlattenedGuildIds(), []), {
    canCreateExpressions: F
  } = (0, T.useManageResourcePermissions)(p), B = (0, m.useStateFromStores)([A.default], () => A.default.getCurrentUser()), G = (0, x.isPremium)(B), H = C.getCustomEmoji(), V = e => {
    if (e.type === E.EmojiTypes.GUILD) return e.guildId
  }, K = u.useMemo(() => c.groupBy(H, V), [H]);
  return u.useMemo(() => {
    let e = [],
      u = [],
      m = [],
      h = [],
      E = 0,
      S = 0;
    if (null != C && null != s) {
      let C = Math.floor(s / (o + 2 * r)),
        T = (a, s) => {
          let r = new Map,
            d = n.has(s.sectionId),
            [f, p] = c.partition(a, e => {
              let n = y.default.isEmojiDisabled({
                emoji: e,
                channel: t,
                intention: i
              });
              return r.set(e, n), !n
            }),
            g = f.concat(p),
            T = s.guild,
            v = _.default.getGuildId(),
            I = g.length;
          null != T && v === T.id && F && l && (g.length < T.getMaxEmojiSlots() && s.sectionId !== L.EmojiCategoryTypes.TOP_GUILD_EMOJI || g.length < 9 && s.sectionId === L.EmojiCategoryTypes.TOP_GUILD_EMOJI) && I++;
          let N = Math.ceil(I / C),
            A = [];
          for (let e = 0; e < N; e++) {
            let t = e * C,
              n = g.slice(t, t + C).map((e, t) => {
                var n, l;
                return {
                  type: 0,
                  emoji: e,
                  size: o,
                  isDisabled: r.get(e),
                  rowIndex: S,
                  columnIndex: t,
                  visibleRowIndex: E,
                  category: s.type,
                  subCategory: s.sectionId === L.EmojiCategoryTypes.TOP_GUILD_EMOJI ? (0, O.getEmojiSubCategory)(D, k, null !== (l = null !== (n = e.id) && void 0 !== n ? n : e.uniqueName) && void 0 !== l ? l : e.name) : L.EmojiSubCategory.NONE
                }
              });
            if (A.push(n), !d) {
              if (e === N - 1 && null != T && I > g.length) {
                let e = A.length - 1,
                  t = A[e];
                t.push({
                  type: 1,
                  guildId: T.id,
                  name: b.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                  size: o,
                  rowIndex: e,
                  columnIndex: t.length,
                  visibleRowIndex: E
                })
              }
              h.push(n.length), m.push(n), E++
            }
            S++
          }
          let x = {
            ...s,
            count: a.length
          };
          u.push(x), e.push(d ? 0 : N)
        };
      if (null != a) 0 !== a.unlocked.length && T(a.unlocked, {
        type: L.EmojiCategoryTypes.SEARCH_RESULTS,
        sectionId: L.EmojiCategoryTypes.SEARCH_RESULTS,
        count: a.unlocked.length,
        isNitroLocked: !1
      }), 0 !== a.locked.length && T(a.locked, {
        type: L.EmojiCategoryTypes.PREMIUM_UPSELL,
        categoryId: L.EmojiCategories.PREMIUM_UPSELL,
        sectionId: L.EmojiCategoryTypes.PREMIUM_UPSELL,
        count: a.locked.length,
        isNitroLocked: !G
      });
      else
        for (let e of d)
          if (e === L.EmojiCategories.CUSTOM) {
            let n = n => {
              let l = K[n];
              if (null == l) return;
              let a = l.filter(e => y.default.getEmojiUnavailableReason({
                emoji: e,
                channel: null != t ? t : v.default.getDefaultChannel(n),
                intention: i
              }) !== P.EmojiDisabledReasons.DISALLOW_EXTERNAL);
              if (0 === a.length) return;
              let s = I.default.getGuild(n),
                r = !G && y.default.isEmojiCategoryNitroLocked({
                  categoryEmojis: a,
                  channel: t,
                  intention: i
                });
              T(a, {
                categoryId: e,
                guild: s,
                type: L.EmojiCategoryTypes.GUILD,
                sectionId: null != s ? s.id : (0, f.v4)(),
                count: a.length,
                isNitroLocked: r
              })
            };
            if (null != p && n(p.id), (0, P.isExternalEmojiAllowedForIntention)(i))
              for (let e of w)(null == p || p.id !== e) && n(e)
          } else if (e === L.EmojiCategories.TOP_GUILD_EMOJI) {
        if (null != p) {
          let {
            allEmojis: t
          } = (0, R.getEmojiHotrail)({
            topEmojis: D,
            newlyAddedEmojis: k
          });
          if (t.length > 0) {
            let n = I.default.getGuild(p.id);
            T(t, {
              categoryId: e,
              guild: n,
              type: L.EmojiCategoryTypes.TOP_GUILD_EMOJI,
              sectionId: L.EmojiCategoryTypes.TOP_GUILD_EMOJI,
              count: t.length,
              isNitroLocked: !1
            })
          }
        }
      } else if (e === L.EmojiCategories.RECENT) {
        let n = (0, O.dedupeUnicodeEmojis)(U).filter(e => !y.default.isEmojiFiltered({
          emoji: e,
          channel: t,
          intention: i
        }));
        T(n, {
          categoryId: e,
          type: L.EmojiCategoryTypes.RECENT,
          sectionId: L.EmojiCategoryTypes.RECENT,
          count: n.length,
          isNitroLocked: !1
        })
      } else if (e === L.EmojiCategories.FAVORITES) {
        let n = (0, O.dedupeUnicodeEmojis)(j).filter(e => !y.default.isEmojiFiltered({
          emoji: e,
          channel: t,
          intention: i
        }));
        0 !== n.length && T(n, {
          categoryId: e,
          type: L.EmojiCategoryTypes.FAVORITES,
          sectionId: L.EmojiCategoryTypes.FAVORITES,
          count: n.length,
          isNitroLocked: !1
        })
      } else if ((0, O.allowUnicodeEmojiForIntention)(i)) {
        let t = g.default.getByCategory(e);
        null != t && T(t, {
          categoryId: e,
          type: L.EmojiCategoryTypes.UNICODE,
          sectionId: e,
          count: t.length,
          isNitroLocked: !1
        })
      }
    }
    return {
      columnCounts: h,
      emojiGrid: m,
      rowCountBySection: e,
      sectionDescriptors: u
    }
  }, [C, s, o, r, a, n, t, i, d, p, K, w, k, D, U, j, F, l, G])
};
(o = a || (a = {}))[o.PREMIUM = 0] = "PREMIUM", o[o.ROLE_SUBSCRIPTION = 1] = "ROLE_SUBSCRIPTION";
let U = e => {
    let {
      pickerIntention: t,
      selectedChannel: n,
      onSelectEmoji: l,
      setUpsellConfigs: i,
      emojiSelectAnalytics: a,
      trackEmojiFavorited: s
    } = e, r = (0, m.useStateFromStores)([h.default], () => h.default.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
    return u.useCallback((e, o) => {
      switch (e.type) {
        case 1:
          l(void 0, o.isFinalSelection, o.isBurst);
          return;
        case 0: {
          let {
            emoji: u
          } = e;
          if (null == u) return;
          let d = y.default.getEmojiUnavailableReason({
            emoji: u,
            channel: n,
            intention: t
          });
          if (o.toggleFavorite) {
            r.isFavoriteEmojiWithoutFetchingLatest(u) || null != d ? (0, p.unfavoriteEmoji)(u) : (null == s || s(e), (0, p.favoriteEmoji)(u));
            return
          }
          if (d === P.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
          if (d === P.EmojiDisabledReasons.PREMIUM_LOCKED) {
            i({
              type: 0,
              emojiDescriptor: e
            });
            return
          }
          if (d === P.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && u.type === E.EmojiTypes.GUILD) {
            i({
              type: 1,
              guildId: u.guildId,
              emojiId: u.id
            });
            return
          }
          if (d === P.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
          null == a || a(e), l(u, o.isFinalSelection, o.isBurst)
        }
      }
    }, [n, t, l, i, r, a, s])
  },
  D = e => {
    let {
      emojiListRef: t
    } = e, n = (0, C.useExpressionPickerStore)(e => e.searchQuery), l = u.useCallback(e => {
      var n;
      return null === (n = t.current) || void 0 === n ? void 0 : n.scrollToSectionTop(e)
    }, [t]);
    return u.useCallback(e => {
      "" !== n ? ((0, C.setSearchQuery)(""), S.EmojiPickerStore.setActiveCategoryIndex(e)) : l(e)
    }, [l, n])
  }