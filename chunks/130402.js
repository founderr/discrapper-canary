r.d(n, {
    n: function () {
        return u;
    },
    x: function () {
        return c;
    }
});
var i = r(47120);
var a = r(544891),
    s = r(570140),
    o = r(981631);
function l(e) {
    return (null == e ? void 0 : e.status) >= 400 && (null == e ? void 0 : e.status) <= 499;
}
async function u() {
    s.Z.dispatch({ type: 'EMOJI_CAPTIONS_FETCH' });
    try {
        let { body: e } = await a.tn.get({
                url: o.ANM.EMOJI_CAPTIONS_GET,
                rejectWithError: !1
            }),
            n = {};
        for (let r of e.items) n[r.emoji_id] = r.emoji_captions;
        s.Z.dispatch({
            type: 'EMOJI_CAPTIONS_FETCH_SUCCESS',
            emojiCaptions: n
        });
    } catch (e) {
        s.Z.dispatch({
            type: 'EMOJI_CAPTIONS_FETCH_ERROR',
            is4XXError: l(e.body)
        });
    }
}
function c(e) {
    s.Z.dispatch({
        type: 'EMOJI_INTERACTION_INITIATED',
        interaction: e
    });
}
