"use strict";
i.r(t), i.d(t, {
  EmojiGridItemTypes: function() {
    return n
  },
  useEmojiGrid: function() {
    return L
  },
  EmojiUpsellType: function() {
    return l
  },
  useEmojiSelectHandler: function() {
    return P
  },
  useCategorySelectHandler: function() {
    return D
  }
}), i("222007"), i("424973");
var n, s, l, r, a, o, u = i("884691"),
  c = i("917351"),
  d = i.n(c),
  f = i("748820"),
  E = i("446674"),
  m = i("150021"),
  I = i("385976"),
  p = i("858619"),
  g = i("867805"),
  _ = i("986632"),
  S = i("538282"),
  h = i("817963"),
  C = i("923959"),
  T = i("305961"),
  N = i("162771"),
  v = i("677099"),
  A = i("402671"),
  y = i("788506"),
  R = i("255214"),
  j = i("352046"),
  O = i("115279"),
  M = i("958706"),
  x = i("782340");
(r = n || (n = {}))[r.EMOJI = 0] = "EMOJI", r[r.CREATE_EMOJI = 1] = "CREATE_EMOJI", (a = s || (s = {}))[a.SECTION_HEADING = 0] = "SECTION_HEADING", a[a.SECTION_ROW = 1] = "SECTION_ROW";
let L = e => {
  let {
    channel: t,
    collapsedSections: i,
    includeCreateEmojiButton: n = !0,
    pickerIntention: s,
    emojiSearchResults: l,
    gridWidth: r,
    emojiPaddingHorizontal: a,
    emojiSpriteSize: o
  } = e, c = (0, E.useStateFromStores)([I.default], () => I.default.categories), m = (0, E.useStateFromStores)([T.default], () => T.default.getGuild(null == t ? void 0 : t.getGuildId()), [t]), _ = null == t ? null : t.getGuildId(), S = (0, E.useStateFromStores)([I.default], () => I.default.getDisambiguatedEmojiContext(_), [_]), L = (0, y.useFavoriteEmojis)(_), P = (0, y.useFrequentlyUsedEmojis)(_), {
    topEmojis: D,
    newlyAddedEmojis: b
  } = (0, j.default)(_, s), U = (0, E.useStateFromStoresArray)([v.default], () => v.default.getFlattenedGuildIds(), []), {
    canCreateExpressions: w
  } = (0, h.useManageResourcePermissions)(m), G = S.getCustomEmoji(), k = e => {
    if (e.type === p.EmojiTypes.GUILD) return e.guildId
  }, V = u.useMemo(() => d.groupBy(G, k), [G]);
  return u.useMemo(() => {
    let e = [],
      u = [],
      E = [],
      I = [],
      p = 0,
      _ = 0;
    if (null != S && null != r) {
      let S = Math.floor(r / (o + 2 * a)),
        h = (l, r) => {
          let a = new Map,
            c = i.has(r.sectionId),
            [f, m] = d.partition(l, e => {
              let i = A.default.isEmojiDisabled({
                emoji: e,
                channel: t,
                intention: s
              });
              return a.set(e, i), !i
            }),
            g = f.concat(m),
            h = r.guild,
            C = N.default.getGuildId(),
            T = g.length;
          null != h && C === h.id && w && n && (g.length < h.getMaxEmojiSlots() && r.sectionId !== O.EmojiCategoryTypes.TOP_GUILD_EMOJI || g.length < 9 && r.sectionId === O.EmojiCategoryTypes.TOP_GUILD_EMOJI) && T++;
          let v = Math.ceil(T / S),
            R = [];
          for (let e = 0; e < v; e++) {
            let t = e * S,
              i = g.slice(t, t + S).map((e, t) => {
                var i, n;
                return {
                  type: 0,
                  emoji: e,
                  size: o,
                  isDisabled: a.get(e),
                  rowIndex: _,
                  columnIndex: t,
                  visibleRowIndex: p,
                  category: r.type,
                  subCategory: r.sectionId === O.EmojiCategoryTypes.TOP_GUILD_EMOJI ? (0, y.getEmojiSubCategory)(D, b, null !== (n = null !== (i = e.id) && void 0 !== i ? i : e.uniqueName) && void 0 !== n ? n : e.name) : O.EmojiSubCategory.NONE
                }
              });
            if (R.push(i), !c) {
              if (e === v - 1 && null != h && T > g.length) {
                let e = R.length - 1,
                  t = R[e];
                t.push({
                  type: 1,
                  guildId: h.id,
                  name: x.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                  size: o,
                  rowIndex: e,
                  columnIndex: t.length,
                  visibleRowIndex: p
                })
              }
              I.push(i.length), E.push(i), p++
            }
            _++
          }
          let j = {
            ...r,
            count: l.length
          };
          u.push(j), e.push(c ? 0 : v)
        };
      if (null != l) 0 !== l.unlocked.length && h(l.unlocked, {
        type: O.EmojiCategoryTypes.SEARCH_RESULTS,
        sectionId: O.EmojiCategoryTypes.SEARCH_RESULTS,
        count: l.unlocked.length
      }), 0 !== l.locked.length && h(l.locked, {
        type: O.EmojiCategoryTypes.PREMIUM_UPSELL,
        categoryId: O.EmojiCategories.PREMIUM_UPSELL,
        sectionId: O.EmojiCategoryTypes.PREMIUM_UPSELL,
        count: l.locked.length
      });
      else
        for (let e of c)
          if (e === O.EmojiCategories.CUSTOM) {
            let i = i => {
              let n = V[i];
              if (null == n) return;
              let l = n.filter(e => A.default.getEmojiUnavailableReason({
                emoji: e,
                channel: null != t ? t : C.default.getDefaultChannel(i),
                intention: s
              }) !== M.EmojiDisabledReasons.DISALLOW_EXTERNAL);
              if (0 === l.length) return;
              let r = T.default.getGuild(i);
              h(l, {
                categoryId: e,
                guild: r,
                type: O.EmojiCategoryTypes.GUILD,
                sectionId: null != r ? r.id : (0, f.v4)(),
                count: l.length
              })
            };
            if (null != m && i(m.id), (0, M.isExternalEmojiAllowedForIntention)(s))
              for (let e of U)(null == m || m.id !== e) && i(e)
          } else if (e === O.EmojiCategories.TOP_GUILD_EMOJI) {
        if (null != m) {
          let {
            allEmojis: t
          } = (0, R.getEmojiHotrail)({
            topEmojis: D,
            newlyAddedEmojis: b
          });
          if (t.length > 0) {
            let i = T.default.getGuild(m.id);
            h(t, {
              categoryId: e,
              guild: i,
              type: O.EmojiCategoryTypes.TOP_GUILD_EMOJI,
              sectionId: O.EmojiCategoryTypes.TOP_GUILD_EMOJI,
              count: t.length
            })
          }
        }
      } else if (e === O.EmojiCategories.RECENT) {
        let i = (0, y.dedupeUnicodeEmojis)(P).filter(e => !A.default.isEmojiFiltered({
          emoji: e,
          channel: t,
          intention: s
        }));
        h(i, {
          categoryId: e,
          type: O.EmojiCategoryTypes.RECENT,
          sectionId: O.EmojiCategoryTypes.RECENT,
          count: i.length
        })
      } else if (e === O.EmojiCategories.FAVORITES) {
        let i = (0, y.dedupeUnicodeEmojis)(L).filter(e => !A.default.isEmojiFiltered({
          emoji: e,
          channel: t,
          intention: s
        }));
        0 !== i.length && h(i, {
          categoryId: e,
          type: O.EmojiCategoryTypes.FAVORITES,
          sectionId: O.EmojiCategoryTypes.FAVORITES,
          count: i.length
        })
      } else if ((0, y.allowUnicodeEmojiForIntention)(s)) {
        let t = g.default.getByCategory(e);
        null != t && h(t, {
          categoryId: e,
          type: O.EmojiCategoryTypes.UNICODE,
          sectionId: e,
          count: t.length
        })
      }
    }
    return {
      columnCounts: I,
      emojiGrid: E,
      rowCountBySection: e,
      sectionDescriptors: u
    }
  }, [S, r, o, a, l, i, t, s, c, m, V, U, b, D, P, L, w, n])
};
(o = l || (l = {}))[o.PREMIUM = 0] = "PREMIUM", o[o.ROLE_SUBSCRIPTION = 1] = "ROLE_SUBSCRIPTION";
let P = e => {
    let {
      pickerIntention: t,
      selectedChannel: i,
      onSelectEmoji: n,
      setUpsellConfigs: s,
      emojiSelectAnalytics: l,
      trackEmojiFavorited: r
    } = e, a = (0, E.useStateFromStores)([I.default], () => I.default.getDisambiguatedEmojiContext(null == i ? void 0 : i.getGuildId()), [i]);
    return u.useCallback((e, o) => {
      switch (e.type) {
        case 1:
          n(void 0, o.isFinalSelection, o.isBurst);
          return;
        case 0: {
          let {
            emoji: u
          } = e;
          if (null == u) return;
          let c = A.default.getEmojiUnavailableReason({
            emoji: u,
            channel: i,
            intention: t
          });
          if (o.toggleFavorite) {
            a.isFavoriteEmojiWithoutFetchingLatest(u) || null != c ? (0, m.unfavoriteEmoji)(u) : (null == r || r(e), (0, m.favoriteEmoji)(u));
            return
          }
          if (c === M.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
          if (c === M.EmojiDisabledReasons.PREMIUM_LOCKED) {
            s({
              type: 0,
              emojiDescriptor: e
            });
            return
          }
          if (c === M.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && u.type === p.EmojiTypes.GUILD) {
            s({
              type: 1,
              guildId: u.guildId,
              emojiId: u.id
            });
            return
          }
          if (c === M.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
          null == l || l(e), n(u, o.isFinalSelection, o.isBurst)
        }
      }
    }, [i, t, n, s, a, l, r])
  },
  D = e => {
    let {
      emojiListRef: t
    } = e, i = (0, S.useExpressionPickerStore)(e => e.searchQuery), n = u.useCallback(e => {
      var i;
      return null === (i = t.current) || void 0 === i ? void 0 : i.scrollToSectionTop(e)
    }, [t]);
    return u.useCallback(e => {
      "" !== i ? ((0, S.setSearchQuery)(""), _.EmojiPickerStore.setActiveCategoryIndex(e)) : n(e)
    }, [n, i])
  }