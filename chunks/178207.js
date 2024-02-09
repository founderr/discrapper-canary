"use strict";
i.r(t), i.d(t, {
  trackStickerPickerOpen: function() {
    return c
  },
  trackStickerFavorited: function() {
    return l
  },
  trackStickerSearchStart: function() {
    return d
  },
  trackStickerSearchResultsViewed: function() {
    return E
  },
  trackStickerSearchSelect: function() {
    return _
  },
  trackStickerSelect: function() {
    return f
  },
  trackStickerSearchEmpty: function() {
    return S
  }
});
var r = i("716241"),
  n = i("599110"),
  a = i("161585"),
  s = i("49111"),
  u = i("13030"),
  o = i("646718");
let c = e => {
    let {
      containerWidth: t,
      favoriteStickers: i,
      frequentlyUsedStickers: n,
      guildStickers: o,
      stickersTotal: c
    } = e;
    r.default.trackWithMetadata(s.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
      width: t,
      tab: u.ExpressionPickerViewType.STICKER,
      badged: !1,
      num_expressions_favorites: i.length,
      num_animated_expressions_favorites: i.filter(e => (0, a.isAnimatedSticker)(e.format_type)).length,
      num_custom_expressions_favorites: i.filter(e => (0, a.isCustomSticker)(e.type)).length,
      num_standard_expressions_favorites: i.filter(e => !(0, a.isCustomSticker)(e.type)).length,
      num_expressions_frecent: n.length,
      num_custom_expressions_frecent: n.filter(e => (0, a.isCustomSticker)(e.type)).length,
      num_animated_expressions_frecent: n.filter(e => (0, a.isAnimatedSticker)(e.format_type)).length,
      num_standard_expressions_frecent: n.filter(e => !(0, a.isCustomSticker)(e.type)).length,
      num_current_guild_expressions: o.length,
      num_custom_expressions_total: c
    })
  },
  l = e => {
    let t, {
      sticker: i,
      location: n
    } = e;
    i.type === a.MetaStickerType.GUILD && (t = i.guild_id), r.default.trackWithMetadata(s.AnalyticEvents.EXPRESSION_FAVORITED, {
      location: n,
      expression_type: u.ExpressionPickerViewType.STICKER,
      expression_id: i.id,
      expression_name: i.name,
      expression_guild_id: t,
      is_animated: (0, a.isAnimatedSticker)(i.format_type),
      is_custom: (0, a.isCustomSticker)(i.type)
    })
  },
  d = () => {
    n.default.track(s.AnalyticEvents.SEARCH_STARTED, {
      search_type: s.SearchTypes.STICKER
    })
  },
  E = (e, t, i) => {
    r.default.trackWithMetadata(s.AnalyticEvents.SEARCH_RESULT_VIEWED, {
      search_type: s.SearchTypes.STICKER,
      total_results: t,
      query: e,
      is_suggestion: i
    })
  },
  _ = (e, t, i) => {
    let n;
    let {
      sticker: u
    } = e;
    u.type === a.MetaStickerType.GUILD && (n = u.guild_id), r.default.trackWithMetadata(s.AnalyticEvents.SEARCH_RESULT_SELECTED, {
      load_id: u.id,
      search_type: s.SearchTypes.STICKER,
      source_object: "Sticker Picker",
      total_results: i,
      expression_guild_id: n,
      sticker_id: u.id,
      query: t
    })
  },
  f = e => {
    let t;
    let {
      sticker: i,
      category: n
    } = e;
    i.type === a.MetaStickerType.GUILD && (t = i.guild_id), r.default.trackWithMetadata(s.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
      type: o.PremiumUpsellTypes.EMOJI_PICKER_STICKER_CLICKED,
      expression_id: i.id,
      expression_name: i.name,
      expression_picker_section: n,
      expression_guild_id: t,
      is_animated: (0, a.isAnimatedSticker)(i.format_type),
      is_custom: (0, a.isCustomSticker)(i.type)
    })
  },
  S = e => {
    null != e && "" !== e && r.default.trackWithMetadata(s.AnalyticEvents.SEARCH_RESULT_EMPTY, {
      query: e,
      search_type: s.SearchTypes.STICKER,
      source_object: "Sticker Picker"
    })
  }