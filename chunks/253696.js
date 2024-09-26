n.d(t, {
    Z: function () {
        return I;
    },
    b: function () {
        return m;
    }
});
var r = n(724458);
var i = n(470079),
    a = n(367907),
    o = n(339085),
    s = n(689789),
    l = n(407477),
    u = n(592125),
    c = n(944486),
    d = n(176354),
    _ = n(304852),
    E = n(199257),
    f = n(981631),
    h = n(185923),
    p = n(957825);
function m(e) {
    let t = i.useRef(e);
    i.useEffect(() => {
        if (t.current.intention === h.Hz.REACTION) I(t.current);
    }, []);
}
function I(e) {
    var t;
    let { intention: n, containerWidth: r, rowSize: i, isBurstReaction: m, analyticsObject: I } = e,
        T = u.Z.getChannel(c.Z.getChannelId()),
        g = null == T ? void 0 : T.getGuildId(),
        { canSplitFrecencyList: S } = s.Z.getCurrentConfig({ location: 'trackOnEmojiPickerOpened' }, { autoTrackExposure: !0 }),
        A = (0, l.E2)({
            location: 'trackOnEmojiPickerOpened',
            autoTrackExposure: !0
        }),
        v = (S || A) && n === h.Hz.REACTION ? o.ZP.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice() : o.ZP.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        N = null != T ? o.ZP.getDisambiguatedEmojiContext(T.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        O = (S || A) && n === h.Hz.REACTION ? o.ZP.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems : o.ZP.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        R = v.slice(0, O),
        C = null != g ? o.ZP.getGuildEmoji(g) : [],
        y = Object.values(null !== (t = o.ZP.getDisambiguatedEmojiContext(null == T ? void 0 : T.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}).reduce((e, t) => (e += t.length), 0),
        { topEmojis: L, newlyAddedEmojis: b } = (0, E._)({
            guildId: null == T ? void 0 : T.getGuildId(),
            pickerIntention: n
        }),
        { visibleTopEmojis: D, visibleNewlyAddedEmojis: M } = (0, _.J)({
            topEmojis: L,
            newlyAddedEmojis: b,
            rowSize: i
        });
    a.ZP.trackWithMetadata(n === h.Hz.REACTION ? f.rMx.REACTION_PICKER_OPENED : f.rMx.EXPRESSION_PICKER_OPENED, {
        width: r,
        tab: p.X1.EMOJI,
        badged: !1,
        num_expressions_favorites: N.length,
        num_animated_expressions_favorites: N.filter((e) => (null == e ? void 0 : e.animated)).length,
        num_custom_expressions_favorites: N.filter(d.ZP.isCustomEmoji).length,
        num_standard_expressions_favorites: N.filter((e) => null == e.id).length,
        num_expressions_frecent: R.length,
        num_animated_expressions_frecent: R.filter((e) => (null == e ? void 0 : e.animated)).length,
        num_custom_expressions_frecent: R.filter(d.ZP.isCustomEmoji).length,
        num_standard_expressions_frecent: R.filter((e) => null == e.id).length,
        num_current_guild_expressions: C.length,
        num_custom_expressions_total: y,
        num_expressions_top_server: D.length,
        num_animated_expressions_top_server: D.filter((e) => e.animated).length,
        num_expressions_newly_added: M.length,
        num_animated_expressions_newly_added: M.filter((e) => e.animated).length,
        ...(n === h.Hz.REACTION && { is_burst: m }),
        ...(null != I && { location_object: I })
    });
}
