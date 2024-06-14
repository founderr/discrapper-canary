"use strict";
n.r(t), n.d(t, {
  getAriaIdForEmojiCategory: function() {
    return G
  },
  getEmojiSubCategory: function() {
    return H
  },
  getSearchPlaceholder: function() {
    return Y
  },
  getStringForEmojiCategory: function() {
    return w
  },
  trackEmojiFavorited: function() {
    return b
  },
  trackEmojiFocus: function() {
    return P
  },
  trackEmojiSearchEmpty: function() {
    return y
  },
  trackEmojiSearchResultsViewed: function() {
    return D
  },
  trackEmojiSearchSelect: function() {
    return M
  },
  trackEmojiSearchStart: function() {
    return v
  },
  trackEmojiSelect: function() {
    return U
  },
  trackPremiumSettingsPaneOpened: function() {
    return L
  },
  useEmojiCategories: function() {
    return g
  },
  useEmojiInPriorityOrder: function() {
    return F
  },
  useEmojiSearchResults: function() {
    return k
  },
  useFavoriteEmojis: function() {
    return V
  },
  useFrequentlyUsedEmojis: function() {
    return B
  },
  useIsFavoriteEmoji: function() {
    return x
  }
}), n("733860"), n("653041"), n("47120"), n("724458"), n("627341"), n("757143");
var i = n("470079"),
  r = n("392711"),
  s = n("278074"),
  a = n("442837"),
  o = n("367907"),
  l = n("339085");
n("353842");
var u = n("558217"),
  d = n("675478"),
  _ = n("430824"),
  c = n("771845"),
  E = n("594174"),
  I = n("626135"),
  T = n("70956"),
  f = n("176354"),
  S = n("111361");
n("709054");
var h = n("304852"),
  A = n("199257"),
  m = n("149203"),
  N = n("981631"),
  p = n("185923"),
  O = n("957825"),
  C = n("474936"),
  R = n("689938");
let g = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
    (0, u.maybeFetchTopEmojisByGuild)(n);
    let r = (0, p.isExternalEmojiAllowedForIntention)(e),
      s = B(n),
      o = V(n),
      {
        topEmojis: d,
        newlyAddedEmojis: I
      } = (0, A.default)(n, e),
      {
        allEmojis: T
      } = (0, h.default)({
        topEmojis: d,
        newlyAddedEmojis: I
      }),
      N = (0, a.useStateFromStores)([l.default], () => l.default.getDisambiguatedEmojiContext(n), [n]),
      O = (0, a.useStateFromStores)([_.default], () => {
        var e;
        return null === (e = _.default.getGuild(n)) || void 0 === e ? void 0 : e.name
      }),
      C = (0, a.useStateFromStores)([E.default], () => E.default.getCurrentUser()),
      g = (0, S.isPremium)(C);
    return i.useMemo(() => {
      let i = N.getGroupedCustomEmoji(),
        a = c.default.getFlattenedGuildIds(),
        u = [],
        d = (i, r) => f.default.getEmojiUnavailableReasons({
          categoryEmojis: i,
          channel: t,
          guildId: n,
          intention: e,
          computeUnfiltered: r
        });
      return ((e, r) => {
        for (let s of e) {
          let e;
          if (r === m.EmojiCategoryTypes.GUILD && (e = _.default.getGuild(s)), null == e) continue;
          let a = null == i ? void 0 : i[e.id];
          if (null == a || 0 === a.length) continue;
          let {
            emojisDisabled: o,
            emojisFilteredCount: l,
            emojisPremiumLockedCount: c,
            emojiNitroLocked: E
          } = d(a, !1);
          if (null != t && a.length === l) continue;
          let I = null;
          r === m.EmojiCategoryTypes.GUILD && (I = {
            type: m.EmojiCategoryTypes.GUILD,
            guild: e,
            isNitroLocked: !g && E && c === a.length,
            emojis: a,
            emojisDisabled: o
          }), null != I && (e.id === n ? u.unshift(I) : u.push(I))
        }
      })(a, m.EmojiCategoryTypes.GUILD), l.default.categories.reduce((e, t) => {
        if (t === m.EmojiCategories.TOP_GUILD_EMOJI) {
          let {
            emojisDisabled: n,
            emojisUnfiltered: i
          } = d(T, !0);
          if (null == i || 0 === i.length) return e;
          e.push({
            type: m.EmojiCategoryTypes.TOP_GUILD_EMOJI,
            id: t,
            name: R.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
              guildName: O
            }),
            isNitroLocked: !1,
            emojis: i,
            emojisDisabled: n
          })
        } else if (t === m.EmojiCategories.RECENT) {
          let {
            emojisDisabled: n,
            emojisUnfiltered: i
          } = d(s, !0);
          if (null == i || 0 === i.length) return e;
          e.push({
            type: m.EmojiCategoryTypes.RECENT,
            id: t,
            name: R.default.Messages.EMOJI_CATEGORY_RECENT,
            isNitroLocked: !1,
            emojis: i,
            emojisDisabled: n
          })
        } else if (t === m.EmojiCategories.FAVORITES) {
          let {
            emojisDisabled: n,
            emojisUnfiltered: i
          } = d(o, !0);
          if (null == i || 0 === i.length) return e;
          e.push({
            type: m.EmojiCategoryTypes.FAVORITES,
            id: t,
            name: R.default.Messages.CATEGORY_FAVORITE,
            isNitroLocked: !1,
            emojis: i,
            emojisDisabled: n
          })
        } else if (t === m.EmojiCategories.CUSTOM) {
          let t = u;
          !r && (t = u.filter(e => e.type === m.EmojiCategoryTypes.GUILD && e.guild.id === n)), e.push(...t)
        } else e.push({
          type: m.EmojiCategoryTypes.UNICODE,
          id: t,
          name: t,
          isNitroLocked: !1
        });
        return e
      }, [])
    }, [N, t, n, e, T, O, s, o, r, g])
  },
  L = e => {
    let t = (null == e ? void 0 : e.getGuildId()) != null;
    I.default.track(N.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
      location_page: t ? N.AnalyticsPages.GUILD_CHANNEL : N.AnalyticsPages.DM_CHANNEL,
      location_section: null != e ? N.AnalyticsSections.EMOJI_PICKER_POPOUT : N.AnalyticsSections.CUSTOM_STATUS_MODAL
    })
  },
  v = (e, t) => {
    o.default.trackWithMetadata(N.AnalyticEvents.SEARCH_STARTED, {
      search_type: null != t && t === p.EmojiIntention.REACTION ? N.SearchTypes.EMOJI_REACTION : N.SearchTypes.EMOJI,
      location: e
    })
  },
  D = (e, t, n, i, r) => {
    o.default.trackWithMetadata(N.AnalyticEvents.SEARCH_RESULT_VIEWED, {
      search_type: null != r && r === p.EmojiIntention.REACTION ? N.SearchTypes.EMOJI_REACTION : N.SearchTypes.EMOJI,
      total_results: e,
      num_results_locked: t,
      query: i,
      location: n
    })
  },
  M = e => {
    var t, n, i;
    let {
      emoji: r,
      emojiSuggestions: a,
      searchQuery: l,
      isLocked: u,
      location: d,
      intention: _,
      index: c
    } = e, E = null !== (i = r.uniqueName) && void 0 !== i ? i : r.name, I = (0, s.match)(_).with(p.EmojiIntention.REACTION, () => N.SearchTypes.EMOJI_REACTION).with(p.EmojiIntention.AUTO_SUGGESTION, () => N.SearchTypes.EMOJI_AUTO_SUGGESTION).otherwise(() => N.SearchTypes.EMOJI);
    o.default.trackWithMetadata(N.AnalyticEvents.SEARCH_RESULT_SELECTED, {
      search_type: I,
      location: d,
      expression_guild_id: r.guildId,
      emoji_id: r.id,
      emoji_name: E,
      is_custom: null != r.id,
      is_animated: r.animated,
      is_locked: u,
      query: l,
      index_num: c,
      load_id: null == a ? void 0 : a.loadId,
      total_results: null == a ? void 0 : null === (t = a.results) || void 0 === t ? void 0 : t.length,
      emoji_suggestion_ids: null == a ? void 0 : null === (n = a.results) || void 0 === n ? void 0 : n.map(e => {
        let {
          emoji: t
        } = e;
        return t.id
      }).filter(e => null != e)
    })
  },
  y = (e, t) => {
    o.default.trackWithMetadata(N.AnalyticEvents.SEARCH_RESULT_EMPTY, {
      search_type: N.SearchTypes.EMOJI,
      query: t,
      location: e
    })
  },
  P = e => {
    let {
      emoji: t,
      subCategory: n,
      position: i,
      newlyAddedHighlight: r
    } = e;
    o.default.trackWithMetadata(N.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
      expression_section: null == n ? void 0 : n.toString(),
      newly_added_highlight: r,
      emoji_id: t.id,
      emoji_name: t.name,
      emoji_animated: t.animated,
      emoji_position: i
    })
  },
  U = e => {
    var t;
    let n, {
      emoji: i,
      location: r,
      pickerIntention: s,
      category: a,
      subCategory: l = m.EmojiSubCategory.NONE,
      position: u,
      newlyAddedHighlight: d,
      isBurstReaction: _
    } = e;
    switch (s) {
      case p.EmojiIntention.REACTION:
        n = _ ? C.PremiumUpsellTypes.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : C.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
        break;
      case p.EmojiIntention.STATUS:
        n = C.PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
        break;
      default:
        n = C.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED
    }
    let c = null !== (t = i.uniqueName) && void 0 !== t ? t : i.name;
    o.default.trackWithMetadata(N.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
      type: n,
      location: r,
      expression_id: i.id,
      expression_name: c,
      expression_guild_id: i.guildId,
      is_custom: null != i.id,
      is_animated: i.animated,
      expression_picker_section: a,
      expression_section: null == l ? void 0 : l.toString(),
      emoji_position: u,
      newly_added_highlight: d,
      is_burst: _
    })
  },
  b = e => {
    var t;
    let {
      emoji: n,
      location: i
    } = e, r = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
    o.default.trackWithMetadata(N.AnalyticEvents.EXPRESSION_FAVORITED, {
      location: i,
      expression_type: O.ExpressionPickerViewType.EMOJI,
      expression_id: n.id,
      expression_name: r,
      expression_guild_id: n.guildId,
      is_custom: null != n.id,
      is_animated: n.animated
    })
  };
(0, r.throttle)(e => {
  let {
    emojiSuggestions: t,
    analyticsLocation: n
  } = e;
  o.default.trackWithMetadata(N.AnalyticEvents.AUTO_SUGGEST_DISPLAYED, {
    suggestion_type: N.AutoCompleteResultTypes.EMOJI,
    suggestion_quantity: t.results.length,
    custom_quantity: t.results.filter(e => {
      let {
        emoji: t
      } = e;
      return null != t.id
    }).length,
    load_id: t.loadId,
    location: n
  })
}, T.default.Millis.HALF_SECOND, {
  leading: !1,
  trailing: !0
});
let G = (e, t) => {
    if (e.type === m.EmojiCategoryTypes.GUILD) return null != t ? t.toString() : "";
    return e.id
  },
  w = (e, t) => {
    switch (e) {
      case m.EmojiCategories.TOP_GUILD_EMOJI:
        return R.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
          guildName: t
        });
      case m.EmojiCategories.RECENT:
        return R.default.Messages.EMOJI_CATEGORY_RECENT;
      case m.EmojiCategories.FAVORITES:
        return R.default.Messages.CATEGORY_FAVORITE;
      case m.EmojiCategories.ACTIVITY:
        return R.default.Messages.EMOJI_CATEGORY_ACTIVITY;
      case m.EmojiCategories.FLAGS:
        return R.default.Messages.EMOJI_CATEGORY_FLAGS;
      case m.EmojiCategories.FOOD:
        return R.default.Messages.EMOJI_CATEGORY_FOOD;
      case m.EmojiCategories.NATURE:
        return R.default.Messages.EMOJI_CATEGORY_NATURE;
      case m.EmojiCategories.OBJECTS:
        return R.default.Messages.EMOJI_CATEGORY_OBJECTS;
      case m.EmojiCategories.PEOPLE:
        return R.default.Messages.EMOJI_CATEGORY_PEOPLE;
      case m.EmojiCategories.SYMBOLS:
        return R.default.Messages.EMOJI_CATEGORY_SYMBOLS;
      case m.EmojiCategories.TRAVEL:
        return R.default.Messages.EMOJI_CATEGORY_TRAVEL;
      case m.EmojiCategories.PREMIUM_UPSELL:
        return R.default.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
      default:
        return null != t ? t : e
    }
  };

function k(e, t, n) {
  i.useEffect(() => {
    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []);
  let r = (0, p.isExternalEmojiAllowedForIntention)(n);
  return (0, a.useStateFromStores)([l.default], () => {
    let i = e.replace(/^:/, "").replace(/:$/, "");
    return "" === i ? null : l.default.searchWithoutFetchingLatest({
      channel: t,
      query: i,
      count: 0,
      intention: n,
      includeExternalGuilds: r
    })
  }, [t, n, e, r], a.statesWillNeverBeEqual)
}

function B(e) {
  return i.useEffect(() => {
    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, a.useStateFromStoresArray)([l.default], () => l.default.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
}

function V(e) {
  return i.useEffect(() => {
    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, a.useStateFromStoresArray)([l.default], () => l.default.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
}

function x(e, t) {
  return i.useEffect(() => {
    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, a.useStateFromStores)([l.default], () => null != t && l.default.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
}

function F(e) {
  return i.useEffect(() => {
    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, a.useStateFromStoresArray)([l.default], () => l.default.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
}

function H(e, t, n) {
  if (null == n) return m.EmojiSubCategory.NONE;
  let i = e.map(e => {
      var t, n;
      return null !== (n = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== n ? n : e.name
    }),
    r = t.map(e => e.id);
  return i.includes(n) ? m.EmojiSubCategory.TOP_GUILD_EMOJI : r.includes(n) ? m.EmojiSubCategory.NEWLY_ADDED_EMOJI : m.EmojiSubCategory.NONE
}

function Y(e, t) {
  return e === p.EmojiIntention.REACTION ? t ? R.default.Messages.SEARCH_FOR_SUPER_REACTION : R.default.Messages.SEARCH_FOR_REACTION : R.default.Messages.SEARCH_FOR_EMOJI
}