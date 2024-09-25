n.d(t, {
    Qt: function () {
        return u;
    },
    _H: function () {
        return d;
    },
    a7: function () {
        return l;
    }
});
var r,
    i = n(367907),
    a = n(373228),
    o = n(626135),
    s = n(981631);
function l(e, t, n) {
    var r, a, l;
    o.default.track(s.rMx.CHANNEL_AUTOCOMPLETE_OPEN, {
        ...(0, i.v_)(t),
        ...(0, i.hH)(t.guild_id),
        autocomplete_type: e,
        num_emoji_results: null !== (r = null == n ? void 0 : n.numEmojiResults) && void 0 !== r ? r : 0,
        num_locked_emoji_results: null !== (a = null == n ? void 0 : n.numLockedEmojiResults) && void 0 !== a ? a : 0,
        num_sticker_results: null !== (l = null == n ? void 0 : n.numStickerResults) && void 0 !== l ? l : 0
    });
}
function u(e, t, n, r) {
    var a, l, u, c, d;
    o.default.track(s.rMx.CHANNEL_AUTOCOMPLETE_SELECTED, {
        ...(0, i.v_)(n),
        ...(0, i.hH)(n.guild_id),
        autocomplete_type: e,
        selection_type: t,
        emoji_id: null == r ? void 0 : r.emojiId,
        sticker_id: null == r ? void 0 : r.stickerId,
        num_emoji_results: null !== (a = null == r ? void 0 : r.numEmojiResults) && void 0 !== a ? a : 0,
        num_sticker_results: null !== (l = null == r ? void 0 : r.numStickerResults) && void 0 !== l ? l : 0,
        emoji_name: null !== (u = null == r ? void 0 : r.expressionName) && void 0 !== u ? u : '',
        is_custom: null !== (c = null == r ? void 0 : r.isCustom) && void 0 !== c && c,
        is_animated: null !== (d = null == r ? void 0 : r.isAnimated) && void 0 !== d && d
    });
}
function c(e) {
    switch (e) {
        case a.V0.AUTOCOMPLETE:
            return 'autocomplete';
        case a.V0.EXPRESSION_SUGGESTIONS:
            return 'autosuggest';
        case a.V0.STICKER_PICKER:
            return 'picker';
        case a.V0.BUILT_IN_INTEGRATION:
            return 'built_in_integration';
        default:
            return null;
    }
}
function d(e) {
    let { sticker: t, stickerSelectLocation: n, isReplacement: r, analyticsLocations: i } = e;
    o.default.track(s.rMx.STICKER_ATTACHED, {
        replaced: r,
        source: c(n),
        sticker_id: t.id,
        location_stack: i
    });
}
!(function (e) {
    (e.AUTOCOMPLETE = 'autocomplete'), (e.AUTOSUGGEST = 'autosuggest'), (e.STICKER_PICKER = 'picker'), (e.BUILT_IN_INTEGRATION = 'built_in_integration');
})(r || (r = {}));
