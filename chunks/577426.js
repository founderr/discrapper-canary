"use strict";
i.r(t), i.d(t, {
  default: function() {
    return m
  }
}), i("808653");
var n = i("716241"),
  r = i("385976"),
  a = i("42203"),
  o = i("18494"),
  u = i("402671"),
  s = i("255214"),
  l = i("352046"),
  E = i("49111"),
  d = i("958706"),
  c = i("13030");

function m(e) {
  var t;
  let {
    intention: i,
    containerWidth: m,
    rowSize: _,
    isBurstReaction: f,
    analyticsObject: I
  } = e, g = a.default.getChannel(o.default.getChannelId()), O = null == g ? void 0 : g.getGuildId(), C = r.default.emojiFrecencyWithoutFetchingLatest.frequently.slice(), T = null != g ? r.default.getDisambiguatedEmojiContext(g.getGuildId()).favoriteEmojisWithoutFetchingLatest : [], p = C.slice(0, r.default.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems), S = null != O ? r.default.getGuildEmoji(O) : [], y = null !== (t = r.default.getDisambiguatedEmojiContext(null == g ? void 0 : g.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}, j = Object.values(y).reduce((e, t) => e += t.length, 0), {
    topEmojis: h,
    newlyAddedEmojis: A
  } = (0, l.getTopAndNewlyAddedEmojis)({
    guildId: null == g ? void 0 : g.getGuildId(),
    pickerIntention: i
  }), {
    visibleTopEmojis: M,
    visibleNewlyAddedEmojis: R
  } = (0, s.getEmojiHotrail)({
    topEmojis: h,
    newlyAddedEmojis: A,
    rowSize: _
  });
  n.default.trackWithMetadata(i === d.EmojiIntention.REACTION ? E.AnalyticEvents.REACTION_PICKER_OPENED : E.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
    width: m,
    tab: c.ExpressionPickerViewType.EMOJI,
    badged: !1,
    num_expressions_favorites: T.length,
    num_animated_expressions_favorites: T.filter(e => null == e ? void 0 : e.animated).length,
    num_custom_expressions_favorites: T.filter(u.default.isCustomEmoji).length,
    num_standard_expressions_favorites: T.filter(e => null == e.id).length,
    num_expressions_frecent: p.length,
    num_animated_expressions_frecent: p.filter(e => null == e ? void 0 : e.animated).length,
    num_custom_expressions_frecent: p.filter(u.default.isCustomEmoji).length,
    num_standard_expressions_frecent: p.filter(e => null == e.id).length,
    num_current_guild_expressions: S.length,
    num_custom_expressions_total: j,
    num_expressions_top_server: M.length,
    num_animated_expressions_top_server: M.filter(e => e.animated).length,
    num_expressions_newly_added: R.length,
    num_animated_expressions_newly_added: R.filter(e => e.animated).length,
    ...i === d.EmojiIntention.REACTION && {
      is_burst: f
    },
    ...null != I && {
      location_object: I
    }
  })
}