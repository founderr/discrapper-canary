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
    return f
  },
  trackStickerSelect: function() {
    return _
  },
  trackStickerSearchEmpty: function() {
    return p
  }
});
var n = i("716241"),
  r = i("599110"),
  a = i("161585"),
  s = i("49111"),
  o = i("13030"),
  u = i("646718");
let c = e => {
    let {
      containerWidth: t,
      favoriteStickers: i,
      frequentlyUsedStickers: r,
      guildStickers: u,
      stickersTotal: c
    } = e;
    n.default.trackWithMetadata(s.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
      width: t,
      tab: o.ExpressionPickerViewType.STICKER,
      badged: !1,
      num_expressions_favorites: i.length,
      num_animated_expressions_favorites: i.filter(e => (0, a.isAnimatedSticker)(e.format_type)).length,
      num_custom_expressions_favorites: i.filter(e => (0, a.isCustomSticker)(e.type)).length,
      num_standard_expressions_favorites: i.filter(e => !(0, a.isCustomSticker)(e.type)).length,
      num_expressions_frecent: r.length,
      num_custom_expressions_frecent: r.filter(e => (0, a.isCustomSticker)(e.type)).length,
      num_animated_expressions_frecent: r.filter(e => (0, a.isAnimatedSticker)(e.format_type)).length,
      num_standard_expressions_frecent: r.filter(e => !(0, a.isCustomSticker)(e.type)).length,
      num_current_guild_expressions: u.length,
      num_custom_expressions_total: c
    })
  },
  l = e => {
    let t, {
      sticker: i,
      location: r
    } = e;
    i.type === a.MetaStickerType.GUILD && (t = i.guild_id), n.default.trackWithMetadata(s.AnalyticEvents.EXPRESSION_FAVORITED, {
      location: r,
      expression_type: o.ExpressionPickerViewType.STICKER,
      expression_id: i.id,
      expression_name: i.name,
      expression_guild_id: t,
      is_animated: (0, a.isAnimatedSticker)(i.format_type),
      is_custom: (0, a.isCustomSticker)(i.type)
    })
  },
  d = () => {
    r.default.track(s.AnalyticEvents.SEARCH_STARTED, {
      search_type: s.SearchTypes.STICKER
    })
  },
  E = (e, t, i) => {
    n.default.trackWithMetadata(s.AnalyticEvents.SEARCH_RESULT_VIEWED, {
      search_type: s.SearchTypes.STICKER,
      total_results: t,
      query: e,
      is_suggestion: i
    })
  },
  f = (e, t, i) => {
    let r;
    let {
      sticker: o
    } = e;
    o.type === a.MetaStickerType.GUILD && (r = o.guild_id), n.default.trackWithMetadata(s.AnalyticEvents.SEARCH_RESULT_SELECTED, {
      load_id: o.id,
      search_type: s.SearchTypes.STICKER,
      source_object: "Sticker Picker",
      total_results: i,
      expression_guild_id: r,
      sticker_id: o.id,
      query: t
    })
  },
  _ = e => {
    let t;
    let {
      sticker: i,
      category: r
    } = e;
    i.type === a.MetaStickerType.GUILD && (t = i.guild_id), n.default.trackWithMetadata(s.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
      type: u.PremiumUpsellTypes.EMOJI_PICKER_STICKER_CLICKED,
      expression_id: i.id,
      expression_name: i.name,
      expression_picker_section: r,
      expression_guild_id: t,
      is_animated: (0, a.isAnimatedSticker)(i.format_type),
      is_custom: (0, a.isCustomSticker)(i.type)
    })
  },
  p = e => {
    null != e && "" !== e && n.default.trackWithMetadata(s.AnalyticEvents.SEARCH_RESULT_EMPTY, {
      query: e,
      search_type: s.SearchTypes.STICKER,
      source_object: "Sticker Picker"
    })
  }