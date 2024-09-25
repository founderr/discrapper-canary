n.d(t, {
    n: function () {
        return l;
    },
    x: function () {
        return u;
    }
});
var r = n(47120);
var i = n(544891),
    a = n(570140),
    o = n(981631);
function s(e) {
    return (null == e ? void 0 : e.status) >= 400 && (null == e ? void 0 : e.status) <= 499;
}
async function l() {
    a.Z.dispatch({ type: 'EMOJI_CAPTIONS_FETCH' });
    try {
        let { body: e } = await i.tn.get({ url: o.ANM.EMOJI_CAPTIONS_GET }),
            t = {};
        for (let n of e.items) t[n.emoji_id] = n.emoji_captions;
        a.Z.dispatch({
            type: 'EMOJI_CAPTIONS_FETCH_SUCCESS',
            emojiCaptions: t
        });
    } catch (e) {
        a.Z.dispatch({
            type: 'EMOJI_CAPTIONS_FETCH_ERROR',
            is4XXError: s(e.body)
        });
    }
}
function u(e) {
    a.Z.dispatch({
        type: 'EMOJI_INTERACTION_INITIATED',
        interaction: e
    });
}
