"use strict";
n.d(t, {
  Z: function() {
    return T
  },
  b: function() {
    return I
  }
}), n(724458);
var i = n(470079),
  r = n(367907),
  s = n(339085),
  o = n(592125),
  a = n(944486),
  l = n(176354),
  u = n(304852),
  _ = n(199257),
  c = n(981631),
  d = n(185923),
  E = n(957825);

function I(e) {
  let t = i.useRef(e);
  i.useEffect(() => {
    if (t.current.intention === d.Hz.REACTION) T(t.current)
  }, [])
}

function T(e) {
  var t;
  let {
    intention: n,
    containerWidth: i,
    rowSize: I,
    isBurstReaction: T,
    analyticsObject: h
  } = e, f = o.Z.getChannel(a.Z.getChannelId()), S = null == f ? void 0 : f.getGuildId(), A = s.Z.emojiFrecencyWithoutFetchingLatest.frequently.slice(), N = null != f ? s.Z.getDisambiguatedEmojiContext(f.getGuildId()).favoriteEmojisWithoutFetchingLatest : [], m = A.slice(0, s.Z.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems), O = null != S ? s.Z.getGuildEmoji(S) : [], R = Object.values(null !== (t = s.Z.getDisambiguatedEmojiContext(null == f ? void 0 : f.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}).reduce((e, t) => e += t.length, 0), {
    topEmojis: p,
    newlyAddedEmojis: g
  } = (0, _._)({
    guildId: null == f ? void 0 : f.getGuildId(),
    pickerIntention: n
  }), {
    visibleTopEmojis: C,
    visibleNewlyAddedEmojis: v
  } = (0, u.J)({
    topEmojis: p,
    newlyAddedEmojis: g,
    rowSize: I
  });
  r.ZP.trackWithMetadata(n === d.Hz.REACTION ? c.rMx.REACTION_PICKER_OPENED : c.rMx.EXPRESSION_PICKER_OPENED, {
    width: i,
    tab: E.X1.EMOJI,
    badged: !1,
    num_expressions_favorites: N.length,
    num_animated_expressions_favorites: N.filter(e => null == e ? void 0 : e.animated).length,
    num_custom_expressions_favorites: N.filter(l.ZP.isCustomEmoji).length,
    num_standard_expressions_favorites: N.filter(e => null == e.id).length,
    num_expressions_frecent: m.length,
    num_animated_expressions_frecent: m.filter(e => null == e ? void 0 : e.animated).length,
    num_custom_expressions_frecent: m.filter(l.ZP.isCustomEmoji).length,
    num_standard_expressions_frecent: m.filter(e => null == e.id).length,
    num_current_guild_expressions: O.length,
    num_custom_expressions_total: R,
    num_expressions_top_server: C.length,
    num_animated_expressions_top_server: C.filter(e => e.animated).length,
    num_expressions_newly_added: v.length,
    num_animated_expressions_newly_added: v.filter(e => e.animated).length,
    ...n === d.Hz.REACTION && {
      is_burst: T
    },
    ...null != h && {
      location_object: h
    }
  })
}