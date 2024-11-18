n.d(t, {
    V6: function () {
        return c;
    },
    fn: function () {
        return o;
    },
    xP: function () {
        return s;
    }
});
var i = n(544891),
    r = n(570140),
    l = n(881052),
    a = n(981631);
function o(e) {
    r.Z.dispatch({
        type: 'DISMISS_MEDIA_POST_SHARE_PROMPT',
        threadId: e
    });
}
async function s(e) {
    r.Z.dispatch({
        type: 'MEDIA_POST_EMBED_FETCH',
        threadId: e
    });
    try {
        let t = (
            await i.tn.get({
                url: a.ANM.MEDIA_POST_RESHARE_GET_PREVIEW(e),
                rejectWithError: !1
            })
        ).body;
        r.Z.dispatch({
            type: 'MEDIA_POST_EMBED_FETCH_SUCCESS',
            threadId: e,
            mediaPostEmbed: t
        });
    } catch (t) {
        r.Z.dispatch({
            type: 'MEDIA_POST_EMBED_FETCH_FAILURE',
            threadId: e
        });
    }
}
async function c(e) {
    try {
        return (
            await i.tn.post({
                url: a.ANM.UNFURL_EMBED_URLS,
                body: { urls: e },
                rejectWithError: !1
            })
        ).body;
    } catch (e) {
        throw new l.Hx(e);
    }
}
