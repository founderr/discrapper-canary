"use strict";
i.r(t), i.d(t, {
  useCategoryNitroLockedStates: function() {
    return S
  },
  useEmojiCategories: function() {
    return j
  },
  trackPremiumSettingsPaneOpened: function() {
    return h
  },
  trackEmojiSearchStart: function() {
    return A
  },
  trackEmojiSearchResultsViewed: function() {
    return M
  },
  trackEmojiSearchSelect: function() {
    return R
  },
  trackEmojiSearchEmpty: function() {
    return N
  },
  trackEmojiFocus: function() {
    return v
  },
  trackEmojiSelect: function() {
    return F
  },
  trackEmojiFavorited: function() {
    return P
  },
  getAriaIdForEmojiCategory: function() {
    return D
  },
  getStringForEmojiCategory: function() {
    return L
  },
  allowUnicodeEmojiForIntention: function() {
    return U
  },
  useEmojiSearchResults: function() {
    return G
  },
  useFrequentlyUsedEmojis: function() {
    return J
  },
  useFavoriteEmojis: function() {
    return k
  },
  useIsFavoriteEmoji: function() {
    return x
  },
  useEmojiInPriorityOrder: function() {
    return b
  },
  useTrackEmojiPickerOpened: function() {
    return w
  },
  getEmojiSubCategory: function() {
    return Y
  },
  dedupeUnicodeEmojis: function() {
    return W
  },
  getSearchPlaceholder: function() {
    return q
  }
}), i("843762"), i("424973"), i("222007"), i("808653"), i("794252"), i("781738");
var n = i("884691");
i("375128");
var r = i("506838"),
  o = i("446674"),
  a = i("716241"),
  u = i("385976"),
  s = i("630400"),
  l = i("872173"),
  E = i("305961"),
  d = i("677099"),
  c = i("599110"),
  m = i("402671"),
  _ = i("577426"),
  f = i("255214"),
  g = i("352046"),
  I = i("115279"),
  O = i("49111"),
  C = i("958706"),
  p = i("13030"),
  y = i("646718"),
  T = i("782340");
let S = function(e, t, i) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null == t ? void 0 : t.getGuildId(),
      r = (0, o.useStateFromStores)([u.default], () => u.default.getDisambiguatedEmojiContext(n), [n]),
      a = r.getGroupedCustomEmoji();
    return i.map(i => {
      if (i.type === I.EmojiCategoryTypes.GUILD) {
        let n = null == a ? void 0 : a[i.guild.id];
        return null != n && 0 !== n.length && m.default.isEmojiCategoryNitroLocked({
          categoryEmojis: n,
          channel: t,
          intention: e
        })
      }
      if (i.type === I.EmojiCategoryTypes.PREMIUM_UPSELL) return !0;
      return !1
    })
  },
  j = function(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
    (0, s.maybeFetchTopEmojisByGuild)(i);
    let r = (0, C.isExternalEmojiAllowedForIntention)(e),
      a = J(i),
      l = k(i),
      {
        topEmojis: c,
        newlyAddedEmojis: _
      } = (0, g.default)(i, e),
      {
        allEmojis: O
      } = (0, f.default)({
        topEmojis: c,
        newlyAddedEmojis: _
      }),
      p = (0, o.useStateFromStores)([u.default], () => u.default.getDisambiguatedEmojiContext(i), [i]),
      y = (0, o.useStateFromStores)([E.default], () => {
        var e;
        return null === (e = E.default.getGuild(i)) || void 0 === e ? void 0 : e.name
      }),
      S = n.useMemo(() => {
        let n = p.getGroupedCustomEmoji(),
          o = d.default.getFlattenedGuildIds(),
          s = [];
        return ((r, o) => {
          for (let a of r) {
            let r;
            if (o === I.EmojiCategoryTypes.GUILD && (r = E.default.getGuild(a)), null == r) continue;
            let u = null == n ? void 0 : n[r.id];
            if (null == u || 0 === u.length || null != t && u.every(i => m.default.isEmojiFiltered({
                emoji: i,
                channel: t,
                intention: e
              }))) continue;
            let l = null;
            o === I.EmojiCategoryTypes.GUILD && (l = {
              type: I.EmojiCategoryTypes.GUILD,
              guild: r
            }), null != l && (r.id === i ? s.unshift(l) : s.push(l))
          }
        })(o, I.EmojiCategoryTypes.GUILD), u.default.categories.reduce((t, n) => {
          if (n === I.EmojiCategories.TOP_GUILD_EMOJI) {
            if (0 === O.length) return t;
            t.push({
              type: I.EmojiCategoryTypes.TOP_GUILD_EMOJI,
              id: n,
              name: T.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                guildName: y
              })
            })
          } else if (n === I.EmojiCategories.RECENT) {
            if (0 === a.length) return t;
            t.push({
              type: I.EmojiCategoryTypes.RECENT,
              id: n,
              name: T.default.Messages.EMOJI_CATEGORY_RECENT
            })
          } else if (n === I.EmojiCategories.FAVORITES) {
            if (0 === l.length) return t;
            t.push({
              type: I.EmojiCategoryTypes.FAVORITES,
              id: n,
              name: T.default.Messages.CATEGORY_FAVORITE
            })
          } else if (n === I.EmojiCategories.CUSTOM) {
            let e = s;
            !r && (e = s.filter(e => e.type === I.EmojiCategoryTypes.GUILD && e.guild.id === i)), t.push(...e)
          } else if (U(e)) t.push({
            type: I.EmojiCategoryTypes.UNICODE,
            id: n,
            name: n
          });
          return t
        }, [])
      }, [p, t, i, e, O.length, y, a.length, l.length, r]);
    return S
  },
  h = e => {
    let t = (null == e ? void 0 : e.getGuildId()) != null;
    c.default.track(O.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
      location_page: t ? O.AnalyticsPages.GUILD_CHANNEL : O.AnalyticsPages.DM_CHANNEL,
      location_section: null != e ? O.AnalyticsSections.EMOJI_PICKER_POPOUT : O.AnalyticsSections.CUSTOM_STATUS_MODAL
    })
  },
  A = (e, t) => {
    a.default.trackWithMetadata(O.AnalyticEvents.SEARCH_STARTED, {
      search_type: null != t && t === C.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
      location: e
    })
  },
  M = (e, t, i, n, r) => {
    a.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_VIEWED, {
      search_type: null != r && r === C.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
      total_results: e,
      num_results_locked: t,
      query: n,
      location: i
    })
  },
  R = (e, t, i, n, o) => {
    var u;
    let s = null !== (u = e.uniqueName) && void 0 !== u ? u : e.name,
      l = (0, r.match)(n).with(C.EmojiIntention.REACTION, () => O.SearchTypes.EMOJI_REACTION).with(C.EmojiIntention.AUTO_SUGGESTION, () => O.SearchTypes.EMOJI_AUTO_SUGGESTION).otherwise(() => O.SearchTypes.EMOJI);
    a.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_SELECTED, {
      search_type: l,
      location: t,
      expression_guild_id: e.guildId,
      emoji_id: e.id,
      emoji_name: s,
      is_custom: null != e.id,
      is_animated: e.animated,
      query: i,
      index_num: o
    })
  },
  N = (e, t) => {
    a.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_EMPTY, {
      search_type: O.SearchTypes.EMOJI,
      query: t,
      location: e
    })
  },
  v = e => {
    let {
      emoji: t,
      subCategory: i,
      position: n,
      newlyAddedHighlight: r
    } = e;
    a.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
      expression_section: null == i ? void 0 : i.toString(),
      newly_added_highlight: r,
      emoji_id: t.id,
      emoji_name: t.name,
      emoji_animated: t.animated,
      emoji_position: n
    })
  },
  F = e => {
    var t;
    let i, {
      emoji: n,
      location: r,
      pickerIntention: o,
      category: u,
      subCategory: s = I.EmojiSubCategory.NONE,
      position: l,
      newlyAddedHighlight: E,
      isBurstReaction: d
    } = e;
    switch (o) {
      case C.EmojiIntention.REACTION:
        i = d ? y.PremiumUpsellTypes.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : y.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
        break;
      case C.EmojiIntention.STATUS:
        i = y.PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
        break;
      default:
        i = y.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED
    }
    let c = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
    a.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
      type: i,
      location: r,
      expression_id: n.id,
      expression_name: c,
      expression_guild_id: n.guildId,
      is_custom: null != n.id,
      is_animated: n.animated,
      expression_picker_section: u,
      expression_section: null == s ? void 0 : s.toString(),
      emoji_position: l,
      newly_added_highlight: E,
      is_burst: d
    })
  },
  P = e => {
    var t;
    let {
      emoji: i,
      location: n
    } = e, r = null !== (t = i.uniqueName) && void 0 !== t ? t : i.name;
    a.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_FAVORITED, {
      location: n,
      expression_type: p.ExpressionPickerViewType.EMOJI,
      expression_id: i.id,
      expression_name: r,
      expression_guild_id: i.guildId,
      is_custom: null != i.id,
      is_animated: i.animated
    })
  },
  D = (e, t) => {
    if (e.type === I.EmojiCategoryTypes.GUILD) return null != t ? t.toString() : "";
    return e.id
  },
  L = (e, t) => {
    switch (e) {
      case I.EmojiCategories.TOP_GUILD_EMOJI:
        return T.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
          guildName: t
        });
      case I.EmojiCategories.RECENT:
        return T.default.Messages.EMOJI_CATEGORY_RECENT;
      case I.EmojiCategories.FAVORITES:
        return T.default.Messages.CATEGORY_FAVORITE;
      case I.EmojiCategories.ACTIVITY:
        return T.default.Messages.EMOJI_CATEGORY_ACTIVITY;
      case I.EmojiCategories.FLAGS:
        return T.default.Messages.EMOJI_CATEGORY_FLAGS;
      case I.EmojiCategories.FOOD:
        return T.default.Messages.EMOJI_CATEGORY_FOOD;
      case I.EmojiCategories.NATURE:
        return T.default.Messages.EMOJI_CATEGORY_NATURE;
      case I.EmojiCategories.OBJECTS:
        return T.default.Messages.EMOJI_CATEGORY_OBJECTS;
      case I.EmojiCategories.PEOPLE:
        return T.default.Messages.EMOJI_CATEGORY_PEOPLE;
      case I.EmojiCategories.SYMBOLS:
        return T.default.Messages.EMOJI_CATEGORY_SYMBOLS;
      case I.EmojiCategories.TRAVEL:
        return T.default.Messages.EMOJI_CATEGORY_TRAVEL;
      case I.EmojiCategories.PREMIUM_UPSELL:
        return T.default.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
      default:
        return null != t ? t : e
    }
  },
  U = e => e !== C.EmojiIntention.COMMUNITY_CONTENT_ONLY;

function G(e, t, i) {
  n.useEffect(() => {
    l.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []);
  let r = (0, C.isExternalEmojiAllowedForIntention)(i);
  return (0, o.useStateFromStores)([u.default], () => {
    let n = e.replace(/^:/, "").replace(/:$/, "");
    return "" === n ? null : u.default.searchWithoutFetchingLatest({
      channel: t,
      query: n,
      count: 0,
      intention: i,
      includeExternalGuilds: r
    })
  }, [t, i, e, r], o.statesWillNeverBeEqual)
}

function J(e) {
  return n.useEffect(() => {
    l.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, o.useStateFromStoresArray)([u.default], () => u.default.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
}

function k(e) {
  return n.useEffect(() => {
    l.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, o.useStateFromStoresArray)([u.default], () => u.default.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
}

function x(e, t) {
  return n.useEffect(() => {
    l.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, o.useStateFromStores)([u.default], () => null != t && u.default.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
}

function b(e) {
  return n.useEffect(() => {
    l.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, o.useStateFromStoresArray)([u.default], () => u.default.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
}

function w(e) {
  let t = n.useCallback(() => {
    (0, _.default)(e)
  }, [e]);
  return n.useEffect(() => {
    e.intention === C.EmojiIntention.REACTION && t()
  }, []), {
    trackOnPickerOpen: t
  }
}

function Y(e, t, i) {
  if (null == i) return I.EmojiSubCategory.NONE;
  let n = e.map(e => {
      var t, i;
      return null !== (i = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== i ? i : e.name
    }),
    r = t.map(e => e.id);
  return n.includes(i) ? I.EmojiSubCategory.TOP_GUILD_EMOJI : r.includes(i) ? I.EmojiSubCategory.NEWLY_ADDED_EMOJI : I.EmojiSubCategory.NONE
}

function W(e) {
  let t = new Set,
    i = e.filter(e => null == e.uniqueName || (t.has(e.optionallyDiverseSequence) ? void 0 : (t.add(e.optionallyDiverseSequence), !0)));
  return i
}

function q(e, t) {
  return e === C.EmojiIntention.REACTION ? t ? T.default.Messages.SEARCH_FOR_SUPER_REACTION : T.default.Messages.SEARCH_FOR_REACTION : T.default.Messages.SEARCH_FOR_EMOJI
}