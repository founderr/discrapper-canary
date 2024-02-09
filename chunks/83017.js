"use strict";
n.r(t), n.d(t, {
  EmojiGridItemTypes: function() {
    return l
  },
  useEmojiGrid: function() {
    return P
  },
  EmojiUpsellType: function() {
    return a
  },
  useEmojiSelectHandler: function() {
    return b
  },
  useCategorySelectHandler: function() {
    return j
  }
}), n("222007"), n("424973");
var l, i, a, s, r, o, u = n("884691"),
  d = n("917351"),
  c = n.n(d),
  f = n("748820"),
  p = n("446674"),
  m = n("150021"),
  h = n("385976"),
  E = n("858619"),
  g = n("867805"),
  S = n("986632"),
  C = n("538282"),
  T = n("817963"),
  v = n("923959"),
  I = n("305961"),
  _ = n("162771"),
  y = n("677099"),
  A = n("402671"),
  N = n("788506"),
  x = n("255214"),
  O = n("352046"),
  R = n("115279"),
  M = n("958706"),
  L = n("782340");
(s = l || (l = {}))[s.EMOJI = 0] = "EMOJI", s[s.CREATE_EMOJI = 1] = "CREATE_EMOJI", (r = i || (i = {}))[r.SECTION_HEADING = 0] = "SECTION_HEADING", r[r.SECTION_ROW = 1] = "SECTION_ROW";
let P = e => {
  let {
    channel: t,
    collapsedSections: n,
    includeCreateEmojiButton: l = !0,
    pickerIntention: i,
    emojiSearchResults: a,
    gridWidth: s,
    emojiPaddingHorizontal: r,
    emojiSpriteSize: o
  } = e, d = (0, p.useStateFromStores)([h.default], () => h.default.categories), m = (0, p.useStateFromStores)([I.default], () => I.default.getGuild(null == t ? void 0 : t.getGuildId()), [t]), S = null == t ? null : t.getGuildId(), C = (0, p.useStateFromStores)([h.default], () => h.default.getDisambiguatedEmojiContext(S), [S]), P = (0, N.useFavoriteEmojis)(S), b = (0, N.useFrequentlyUsedEmojis)(S), {
    topEmojis: j,
    newlyAddedEmojis: U
  } = (0, O.default)(S, i), D = (0, p.useStateFromStoresArray)([y.default], () => y.default.getFlattenedGuildIds(), []), {
    canCreateExpressions: k
  } = (0, T.useManageResourcePermissions)(m), w = C.getCustomEmoji(), F = e => {
    if (e.type === E.EmojiTypes.GUILD) return e.guildId
  }, G = u.useMemo(() => c.groupBy(w, F), [w]);
  return u.useMemo(() => {
    let e = [],
      u = [],
      p = [],
      h = [],
      E = 0,
      S = 0;
    if (null != C && null != s) {
      let C = Math.floor(s / (o + 2 * r)),
        T = (a, s) => {
          let r = new Map,
            d = n.has(s.sectionId),
            [f, m] = c.partition(a, e => {
              let n = A.default.isEmojiDisabled({
                emoji: e,
                channel: t,
                intention: i
              });
              return r.set(e, n), !n
            }),
            g = f.concat(m),
            T = s.guild,
            v = _.default.getGuildId(),
            I = g.length;
          null != T && v === T.id && k && l && (g.length < T.getMaxEmojiSlots() && s.sectionId !== R.EmojiCategoryTypes.TOP_GUILD_EMOJI || g.length < 9 && s.sectionId === R.EmojiCategoryTypes.TOP_GUILD_EMOJI) && I++;
          let y = Math.ceil(I / C),
            x = [];
          for (let e = 0; e < y; e++) {
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
                  subCategory: s.sectionId === R.EmojiCategoryTypes.TOP_GUILD_EMOJI ? (0, N.getEmojiSubCategory)(j, U, null !== (l = null !== (n = e.id) && void 0 !== n ? n : e.uniqueName) && void 0 !== l ? l : e.name) : R.EmojiSubCategory.NONE
                }
              });
            if (x.push(n), !d) {
              if (e === y - 1 && null != T && I > g.length) {
                let e = x.length - 1,
                  t = x[e];
                t.push({
                  type: 1,
                  guildId: T.id,
                  name: L.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                  size: o,
                  rowIndex: e,
                  columnIndex: t.length,
                  visibleRowIndex: E
                })
              }
              h.push(n.length), p.push(n), E++
            }
            S++
          }
          let O = {
            ...s,
            count: a.length
          };
          u.push(O), e.push(d ? 0 : y)
        };
      if (null != a) 0 !== a.unlocked.length && T(a.unlocked, {
        type: R.EmojiCategoryTypes.SEARCH_RESULTS,
        sectionId: R.EmojiCategoryTypes.SEARCH_RESULTS,
        count: a.unlocked.length
      }), 0 !== a.locked.length && T(a.locked, {
        type: R.EmojiCategoryTypes.PREMIUM_UPSELL,
        categoryId: R.EmojiCategories.PREMIUM_UPSELL,
        sectionId: R.EmojiCategoryTypes.PREMIUM_UPSELL,
        count: a.locked.length
      });
      else
        for (let e of d)
          if (e === R.EmojiCategories.CUSTOM) {
            let n = n => {
              let l = G[n];
              if (null == l) return;
              let a = l.filter(e => A.default.getEmojiUnavailableReason({
                emoji: e,
                channel: null != t ? t : v.default.getDefaultChannel(n),
                intention: i
              }) !== M.EmojiDisabledReasons.DISALLOW_EXTERNAL);
              if (0 === a.length) return;
              let s = I.default.getGuild(n);
              T(a, {
                categoryId: e,
                guild: s,
                type: R.EmojiCategoryTypes.GUILD,
                sectionId: null != s ? s.id : (0, f.v4)(),
                count: a.length
              })
            };
            if (null != m && n(m.id), (0, M.isExternalEmojiAllowedForIntention)(i))
              for (let e of D)(null == m || m.id !== e) && n(e)
          } else if (e === R.EmojiCategories.TOP_GUILD_EMOJI) {
        if (null != m) {
          let {
            allEmojis: t
          } = (0, x.getEmojiHotrail)({
            topEmojis: j,
            newlyAddedEmojis: U
          });
          if (t.length > 0) {
            let n = I.default.getGuild(m.id);
            T(t, {
              categoryId: e,
              guild: n,
              type: R.EmojiCategoryTypes.TOP_GUILD_EMOJI,
              sectionId: R.EmojiCategoryTypes.TOP_GUILD_EMOJI,
              count: t.length
            })
          }
        }
      } else if (e === R.EmojiCategories.RECENT) {
        let n = (0, N.dedupeUnicodeEmojis)(b).filter(e => !A.default.isEmojiFiltered({
          emoji: e,
          channel: t,
          intention: i
        }));
        T(n, {
          categoryId: e,
          type: R.EmojiCategoryTypes.RECENT,
          sectionId: R.EmojiCategoryTypes.RECENT,
          count: n.length
        })
      } else if (e === R.EmojiCategories.FAVORITES) {
        let n = (0, N.dedupeUnicodeEmojis)(P).filter(e => !A.default.isEmojiFiltered({
          emoji: e,
          channel: t,
          intention: i
        }));
        0 !== n.length && T(n, {
          categoryId: e,
          type: R.EmojiCategoryTypes.FAVORITES,
          sectionId: R.EmojiCategoryTypes.FAVORITES,
          count: n.length
        })
      } else if ((0, N.allowUnicodeEmojiForIntention)(i)) {
        let t = g.default.getByCategory(e);
        null != t && T(t, {
          categoryId: e,
          type: R.EmojiCategoryTypes.UNICODE,
          sectionId: e,
          count: t.length
        })
      }
    }
    return {
      columnCounts: h,
      emojiGrid: p,
      rowCountBySection: e,
      sectionDescriptors: u
    }
  }, [C, s, o, r, a, n, t, i, d, m, G, D, U, j, b, P, k, l])
};
(o = a || (a = {}))[o.PREMIUM = 0] = "PREMIUM", o[o.ROLE_SUBSCRIPTION = 1] = "ROLE_SUBSCRIPTION";
let b = e => {
    let {
      pickerIntention: t,
      selectedChannel: n,
      onSelectEmoji: l,
      setUpsellConfigs: i,
      emojiSelectAnalytics: a,
      trackEmojiFavorited: s
    } = e, r = (0, p.useStateFromStores)([h.default], () => h.default.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
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
          let d = A.default.getEmojiUnavailableReason({
            emoji: u,
            channel: n,
            intention: t
          });
          if (o.toggleFavorite) {
            r.isFavoriteEmojiWithoutFetchingLatest(u) || null != d ? (0, m.unfavoriteEmoji)(u) : (null == s || s(e), (0, m.favoriteEmoji)(u));
            return
          }
          if (d === M.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
          if (d === M.EmojiDisabledReasons.PREMIUM_LOCKED) {
            i({
              type: 0,
              emojiDescriptor: e
            });
            return
          }
          if (d === M.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && u.type === E.EmojiTypes.GUILD) {
            i({
              type: 1,
              guildId: u.guildId,
              emojiId: u.id
            });
            return
          }
          if (d === M.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
          null == a || a(e), l(u, o.isFinalSelection, o.isBurst)
        }
      }
    }, [n, t, l, i, r, a, s])
  },
  j = e => {
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