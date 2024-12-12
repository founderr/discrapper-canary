r.d(n, {
    Z: function () {
        return v;
    },
    b: function () {
        return E;
    }
});
var i = r(724458);
var a = r(192379),
    s = r(367907),
    o = r(339085),
    l = r(689789),
    u = r(407477),
    c = r(592125),
    d = r(944486),
    f = r(176354),
    _ = r(304852),
    h = r(199257),
    p = r(981631),
    m = r(185923),
    g = r(957825);
function E(e) {
    let n = a.useRef(e);
    a.useEffect(() => {
        if (n.current.intention === m.Hz.REACTION) v(n.current);
    }, []);
}
function v(e) {
    var n;
    let { intention: r, containerWidth: i, rowSize: a, isBurstReaction: E, analyticsObject: v } = e,
        I = c.Z.getChannel(d.Z.getChannelId()),
        T = null == I ? void 0 : I.getGuildId(),
        { canSplitFrecencyList: b } = l.Z.getCurrentConfig({ location: 'trackOnEmojiPickerOpened' }, { autoTrackExposure: !0 }),
        y = (0, u.E2)({
            location: 'trackOnEmojiPickerOpened',
            autoTrackExposure: !0
        });
    u.Xb.trackExposure({ location: 'trackOnEmojiPickerOpened' });
    let S = (b || y) && r === m.Hz.REACTION ? o.ZP.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice() : o.ZP.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        A = null != I ? o.ZP.getDisambiguatedEmojiContext(I.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        N = (b || y) && r === m.Hz.REACTION ? o.ZP.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems : o.ZP.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        C = S.slice(0, N),
        R = null != T ? o.ZP.getGuildEmoji(T) : [],
        O = Object.values(null !== (n = o.ZP.getDisambiguatedEmojiContext(null == I ? void 0 : I.getGuildId()).groupedCustomEmojis) && void 0 !== n ? n : {}).reduce((e, n) => (e += n.length), 0),
        { topEmojis: D, newlyAddedEmojis: L } = (0, h._)({
            guildId: null == I ? void 0 : I.getGuildId(),
            pickerIntention: r
        }),
        { visibleTopEmojis: x, visibleNewlyAddedEmojis: w } = (0, _.J)({
            topEmojis: D,
            newlyAddedEmojis: L,
            rowSize: a
        });
    s.ZP.trackWithMetadata(r === m.Hz.REACTION ? p.rMx.REACTION_PICKER_OPENED : p.rMx.EXPRESSION_PICKER_OPENED, {
        width: i,
        tab: g.X1.EMOJI,
        badged: !1,
        num_expressions_favorites: A.length,
        num_animated_expressions_favorites: A.filter((e) => (null == e ? void 0 : e.animated)).length,
        num_custom_expressions_favorites: A.filter(f.ZP.isCustomEmoji).length,
        num_standard_expressions_favorites: A.filter((e) => null == e.id).length,
        num_expressions_frecent: C.length,
        num_animated_expressions_frecent: C.filter((e) => (null == e ? void 0 : e.animated)).length,
        num_custom_expressions_frecent: C.filter(f.ZP.isCustomEmoji).length,
        num_standard_expressions_frecent: C.filter((e) => null == e.id).length,
        num_current_guild_expressions: R.length,
        num_custom_expressions_total: O,
        num_expressions_top_server: x.length,
        num_animated_expressions_top_server: x.filter((e) => e.animated).length,
        num_expressions_newly_added: w.length,
        num_animated_expressions_newly_added: w.filter((e) => e.animated).length,
        ...(r === m.Hz.REACTION && { is_burst: E }),
        ...(null != v && { location_object: v })
    });
}
