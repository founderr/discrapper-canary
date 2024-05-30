"use strict";
n.r(t), n.d(t, {
  getAriaIdForEmojiCategory: function() {
    return w
  },
  getEmojiSubCategory: function() {
    return j
  },
  getSearchPlaceholder: function() {
    return W
  },
  getStringForEmojiCategory: function() {
    return k
  },
  trackEmojiFavorited: function() {
    return G
  },
  trackEmojiFocus: function() {
    return U
  },
  trackEmojiSearchEmpty: function() {
    return P
  },
  trackEmojiSearchResultsViewed: function() {
    return M
  },
  trackEmojiSearchSelect: function() {
    return y
  },
  trackEmojiSearchStart: function() {
    return D
  },
  trackEmojiSelect: function() {
    return b
  },
  trackPremiumSettingsPaneOpened: function() {
    return v
  },
  useEmojiCategories: function() {
    return L
  },
  useEmojiInPriorityOrder: function() {
    return H
  },
  useEmojiSearchResults: function() {
    return B
  },
  useFavoriteEmojis: function() {
    return x
  },
  useFrequentlyUsedEmojis: function() {
    return V
  },
  useIsFavoriteEmoji: function() {
    return F
  },
  useTrackEmojiPickerOpened: function() {
    return Y
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
var h = n("253696"),
  A = n("304852"),
  m = n("199257"),
  N = n("149203"),
  p = n("981631"),
  O = n("185923"),
  C = n("957825"),
  R = n("474936"),
  g = n("689938");
let L = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
    (0, u.maybeFetchTopEmojisByGuild)(n);
    let r = (0, O.isExternalEmojiAllowedForIntention)(e),
      s = V(n),
      o = x(n),
      {
        topEmojis: d,
        newlyAddedEmojis: I
      } = (0, m.default)(n, e),
      {
        allEmojis: T
      } = (0, A.default)({
        topEmojis: d,
        newlyAddedEmojis: I
      }),
      h = (0, a.useStateFromStores)([l.default], () => l.default.getDisambiguatedEmojiContext(n), [n]),
      p = (0, a.useStateFromStores)([_.default], () => {
        var e;
        return null === (e = _.default.getGuild(n)) || void 0 === e ? void 0 : e.name
      }),
      C = (0, a.useStateFromStores)([E.default], () => E.default.getCurrentUser()),
      R = (0, S.isPremium)(C);
    return i.useMemo(() => {
      let i = h.getGroupedCustomEmoji(),
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
          if (r === N.EmojiCategoryTypes.GUILD && (e = _.default.getGuild(s)), null == e) continue;
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
          r === N.EmojiCategoryTypes.GUILD && (I = {
            type: N.EmojiCategoryTypes.GUILD,
            guild: e,
            isNitroLocked: !R && E && c === a.length,
            emojis: a,
            emojisDisabled: o
          }), null != I && (e.id === n ? u.unshift(I) : u.push(I))
        }
      })(a, N.EmojiCategoryTypes.GUILD), l.default.categories.reduce((e, t) => {
        if (t === N.EmojiCategories.TOP_GUILD_EMOJI) {
          let {
            emojisDisabled: n,
            emojisUnfiltered: i
          } = d(T, !0);
          if (null == i || 0 === i.length) return e;
          e.push({
            type: N.EmojiCategoryTypes.TOP_GUILD_EMOJI,
            id: t,
            name: g.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
              guildName: p
            }),
            isNitroLocked: !1,
            emojis: i,
            emojisDisabled: n
          })
        } else if (t === N.EmojiCategories.RECENT) {
          let {
            emojisDisabled: n,
            emojisUnfiltered: i
          } = d(s, !0);
          if (null == i || 0 === i.length) return e;
          e.push({
            type: N.EmojiCategoryTypes.RECENT,
            id: t,
            name: g.default.Messages.EMOJI_CATEGORY_RECENT,
            isNitroLocked: !1,
            emojis: i,
            emojisDisabled: n
          })
        } else if (t === N.EmojiCategories.FAVORITES) {
          let {
            emojisDisabled: n,
            emojisUnfiltered: i
          } = d(o, !0);
          if (null == i || 0 === i.length) return e;
          e.push({
            type: N.EmojiCategoryTypes.FAVORITES,
            id: t,
            name: g.default.Messages.CATEGORY_FAVORITE,
            isNitroLocked: !1,
            emojis: i,
            emojisDisabled: n
          })
        } else if (t === N.EmojiCategories.CUSTOM) {
          let t = u;
          !r && (t = u.filter(e => e.type === N.EmojiCategoryTypes.GUILD && e.guild.id === n)), e.push(...t)
        } else e.push({
          type: N.EmojiCategoryTypes.UNICODE,
          id: t,
          name: t,
          isNitroLocked: !1
        });
        return e
      }, [])
    }, [h, t, n, e, T, p, s, o, r, R])
  },
  v = e => {
    let t = (null == e ? void 0 : e.getGuildId()) != null;
    I.default.track(p.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
      location_page: t ? p.AnalyticsPages.GUILD_CHANNEL : p.AnalyticsPages.DM_CHANNEL,
      location_section: null != e ? p.AnalyticsSections.EMOJI_PICKER_POPOUT : p.AnalyticsSections.CUSTOM_STATUS_MODAL
    })
  },
  D = (e, t) => {
    o.default.trackWithMetadata(p.AnalyticEvents.SEARCH_STARTED, {
      search_type: null != t && t === O.EmojiIntention.REACTION ? p.SearchTypes.EMOJI_REACTION : p.SearchTypes.EMOJI,
      location: e
    })
  },
  M = (e, t, n, i, r) => {
    o.default.trackWithMetadata(p.AnalyticEvents.SEARCH_RESULT_VIEWED, {
      search_type: null != r && r === O.EmojiIntention.REACTION ? p.SearchTypes.EMOJI_REACTION : p.SearchTypes.EMOJI,
      total_results: e,
      num_results_locked: t,
      query: i,
      location: n
    })
  },
  y = e => {
    var t, n, i;
    let {
      emoji: r,
      emojiSuggestions: a,
      searchQuery: l,
      isLocked: u,
      location: d,
      intention: _,
      index: c
    } = e, E = null !== (i = r.uniqueName) && void 0 !== i ? i : r.name, I = (0, s.match)(_).with(O.EmojiIntention.REACTION, () => p.SearchTypes.EMOJI_REACTION).with(O.EmojiIntention.AUTO_SUGGESTION, () => p.SearchTypes.EMOJI_AUTO_SUGGESTION).otherwise(() => p.SearchTypes.EMOJI);
    o.default.trackWithMetadata(p.AnalyticEvents.SEARCH_RESULT_SELECTED, {
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
  P = (e, t) => {
    o.default.trackWithMetadata(p.AnalyticEvents.SEARCH_RESULT_EMPTY, {
      search_type: p.SearchTypes.EMOJI,
      query: t,
      location: e
    })
  },
  U = e => {
    let {
      emoji: t,
      subCategory: n,
      position: i,
      newlyAddedHighlight: r
    } = e;
    o.default.trackWithMetadata(p.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
      expression_section: null == n ? void 0 : n.toString(),
      newly_added_highlight: r,
      emoji_id: t.id,
      emoji_name: t.name,
      emoji_animated: t.animated,
      emoji_position: i
    })
  },
  b = e => {
    var t;
    let n, {
      emoji: i,
      location: r,
      pickerIntention: s,
      category: a,
      subCategory: l = N.EmojiSubCategory.NONE,
      position: u,
      newlyAddedHighlight: d,
      isBurstReaction: _
    } = e;
    switch (s) {
      case O.EmojiIntention.REACTION:
        n = _ ? R.PremiumUpsellTypes.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : R.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
        break;
      case O.EmojiIntention.STATUS:
        n = R.PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
        break;
      default:
        n = R.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED
    }
    let c = null !== (t = i.uniqueName) && void 0 !== t ? t : i.name;
    o.default.trackWithMetadata(p.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
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
  G = e => {
    var t;
    let {
      emoji: n,
      location: i
    } = e, r = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
    o.default.trackWithMetadata(p.AnalyticEvents.EXPRESSION_FAVORITED, {
      location: i,
      expression_type: C.ExpressionPickerViewType.EMOJI,
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
  o.default.trackWithMetadata(p.AnalyticEvents.AUTO_SUGGEST_DISPLAYED, {
    suggestion_type: p.AutoCompleteResultTypes.EMOJI,
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
let w = (e, t) => {
    if (e.type === N.EmojiCategoryTypes.GUILD) return null != t ? t.toString() : "";
    return e.id
  },
  k = (e, t) => {
    switch (e) {
      case N.EmojiCategories.TOP_GUILD_EMOJI:
        return g.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
          guildName: t
        });
      case N.EmojiCategories.RECENT:
        return g.default.Messages.EMOJI_CATEGORY_RECENT;
      case N.EmojiCategories.FAVORITES:
        return g.default.Messages.CATEGORY_FAVORITE;
      case N.EmojiCategories.ACTIVITY:
        return g.default.Messages.EMOJI_CATEGORY_ACTIVITY;
      case N.EmojiCategories.FLAGS:
        return g.default.Messages.EMOJI_CATEGORY_FLAGS;
      case N.EmojiCategories.FOOD:
        return g.default.Messages.EMOJI_CATEGORY_FOOD;
      case N.EmojiCategories.NATURE:
        return g.default.Messages.EMOJI_CATEGORY_NATURE;
      case N.EmojiCategories.OBJECTS:
        return g.default.Messages.EMOJI_CATEGORY_OBJECTS;
      case N.EmojiCategories.PEOPLE:
        return g.default.Messages.EMOJI_CATEGORY_PEOPLE;
      case N.EmojiCategories.SYMBOLS:
        return g.default.Messages.EMOJI_CATEGORY_SYMBOLS;
      case N.EmojiCategories.TRAVEL:
        return g.default.Messages.EMOJI_CATEGORY_TRAVEL;
      case N.EmojiCategories.PREMIUM_UPSELL:
        return g.default.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
      default:
        return null != t ? t : e
    }
  };

function B(e, t, n) {
  i.useEffect(() => {
    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []);
  let r = (0, O.isExternalEmojiAllowedForIntention)(n);
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

function V(e) {
  return i.useEffect(() => {
    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, a.useStateFromStoresArray)([l.default], () => l.default.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
}

function x(e) {
  return i.useEffect(() => {
    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, a.useStateFromStoresArray)([l.default], () => l.default.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
}

function F(e, t) {
  return i.useEffect(() => {
    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, a.useStateFromStores)([l.default], () => null != t && l.default.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
}

function H(e) {
  return i.useEffect(() => {
    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, a.useStateFromStoresArray)([l.default], () => l.default.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
}

function Y(e) {
  let t = i.useCallback(() => {
    (0, h.default)(e)
  }, [e]);
  return i.useEffect(() => {
    e.intention === O.EmojiIntention.REACTION && t()
  }, []), {
    trackOnPickerOpen: t
  }
}

function j(e, t, n) {
  if (null == n) return N.EmojiSubCategory.NONE;
  let i = e.map(e => {
      var t, n;
      return null !== (n = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== n ? n : e.name
    }),
    r = t.map(e => e.id);
  return i.includes(n) ? N.EmojiSubCategory.TOP_GUILD_EMOJI : r.includes(n) ? N.EmojiSubCategory.NEWLY_ADDED_EMOJI : N.EmojiSubCategory.NONE
}

function W(e, t) {
  return e === O.EmojiIntention.REACTION ? t ? g.default.Messages.SEARCH_FOR_SUPER_REACTION : g.default.Messages.SEARCH_FOR_REACTION : g.default.Messages.SEARCH_FOR_EMOJI
}