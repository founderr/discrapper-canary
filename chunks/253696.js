"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  },
  useTrackOnEmojiPickerOpenedForReactions: function() {
    return I
  }
}), n("724458");
var i = n("470079"),
  r = n("367907"),
  s = n("339085"),
  a = n("592125"),
  o = n("944486"),
  l = n("176354"),
  u = n("304852"),
  d = n("199257"),
  _ = n("981631"),
  c = n("185923"),
  E = n("957825");

function I(e) {
  let t = i.useRef(e);
  i.useEffect(() => {
    t.current.intention === c.EmojiIntention.REACTION && T(t.current)
  }, [])
}

function T(e) {
  var t;
  let {
    intention: n,
    containerWidth: i,
    rowSize: I,
    isBurstReaction: T,
    analyticsObject: f
  } = e, S = a.default.getChannel(o.default.getChannelId()), h = null == S ? void 0 : S.getGuildId(), A = s.default.emojiFrecencyWithoutFetchingLatest.frequently.slice(), m = null != S ? s.default.getDisambiguatedEmojiContext(S.getGuildId()).favoriteEmojisWithoutFetchingLatest : [], N = A.slice(0, s.default.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems), p = null != h ? s.default.getGuildEmoji(h) : [], O = Object.values(null !== (t = s.default.getDisambiguatedEmojiContext(null == S ? void 0 : S.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}).reduce((e, t) => e += t.length, 0), {
    topEmojis: C,
    newlyAddedEmojis: R
  } = (0, d.getTopAndNewlyAddedEmojis)({
    guildId: null == S ? void 0 : S.getGuildId(),
    pickerIntention: n
  }), {
    visibleTopEmojis: g,
    visibleNewlyAddedEmojis: L
  } = (0, u.getEmojiHotrail)({
    topEmojis: C,
    newlyAddedEmojis: R,
    rowSize: I
  });
  r.default.trackWithMetadata(n === c.EmojiIntention.REACTION ? _.AnalyticEvents.REACTION_PICKER_OPENED : _.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
    width: i,
    tab: E.ExpressionPickerViewType.EMOJI,
    badged: !1,
    num_expressions_favorites: m.length,
    num_animated_expressions_favorites: m.filter(e => null == e ? void 0 : e.animated).length,
    num_custom_expressions_favorites: m.filter(l.default.isCustomEmoji).length,
    num_standard_expressions_favorites: m.filter(e => null == e.id).length,
    num_expressions_frecent: N.length,
    num_animated_expressions_frecent: N.filter(e => null == e ? void 0 : e.animated).length,
    num_custom_expressions_frecent: N.filter(l.default.isCustomEmoji).length,
    num_standard_expressions_frecent: N.filter(e => null == e.id).length,
    num_current_guild_expressions: p.length,
    num_custom_expressions_total: O,
    num_expressions_top_server: g.length,
    num_animated_expressions_top_server: g.filter(e => e.animated).length,
    num_expressions_newly_added: L.length,
    num_animated_expressions_newly_added: L.filter(e => e.animated).length,
    ...n === c.EmojiIntention.REACTION && {
      is_burst: T
    },
    ...null != f && {
      location_object: f
    }
  })
}