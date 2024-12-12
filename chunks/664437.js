r.d(n, {
    Zg: function () {
        return u;
    },
    pj: function () {
        return o;
    },
    pr: function () {
        return l;
    }
});
var i = r(544891),
    a = r(570140),
    s = r(981631);
function o(e) {
    a.Z.dispatch({
        type: 'TOP_EMOJIS_FETCH',
        guildId: e
    }),
        i.tn
            .get({
                url: s.ANM.TOP_EMOJIS_FOR_GUILD(e),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (n) =>
                    a.Z.dispatch({
                        type: 'TOP_EMOJIS_FETCH_SUCCESS',
                        guildId: e,
                        topEmojisMetadata: n.body.items
                            .map((e) => ({
                                emojiId: e.emoji_id,
                                rank: e.emoji_rank
                            }))
                            .sort((e, n) => e.rank - n.rank)
                    }),
                () =>
                    a.Z.dispatch({
                        type: 'TOP_EMOJIS_FETCH_FAILURE',
                        guildId: e
                    })
            );
}
function l(e, n) {
    a.Z.dispatch({ type: 'NEWLY_ADDED_EMOJI_SEEN_UPDATED' }),
        null != e &&
            null != n &&
            a.Z.dispatch({
                type: 'NEWLY_ADDED_EMOJI_SEEN_PENDING',
                guildId: e,
                emojiId: n
            });
}
function u(e, n) {
    null != e &&
        null != n &&
        a.Z.dispatch({
            type: 'NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED',
            guildId: e,
            emojiId: n
        });
}
