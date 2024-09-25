n.d(t, {
    V6: function () {
        return u;
    },
    fn: function () {
        return s;
    },
    xP: function () {
        return l;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(881052),
    o = n(981631);
function s(e) {
    i.Z.dispatch({
        type: 'DISMISS_MEDIA_POST_SHARE_PROMPT',
        threadId: e
    });
}
async function l(e) {
    i.Z.dispatch({
        type: 'MEDIA_POST_EMBED_FETCH',
        threadId: e
    });
    try {
        let t = (await r.tn.get({ url: o.ANM.MEDIA_POST_RESHARE_GET_PREVIEW(e) })).body;
        i.Z.dispatch({
            type: 'MEDIA_POST_EMBED_FETCH_SUCCESS',
            threadId: e,
            mediaPostEmbed: t
        });
    } catch (t) {
        i.Z.dispatch({
            type: 'MEDIA_POST_EMBED_FETCH_FAILURE',
            threadId: e
        });
    }
}
async function u(e) {
    try {
        return (
            await r.tn.post({
                url: o.ANM.UNFURL_EMBED_URLS,
                body: { urls: e }
            })
        ).body;
    } catch (e) {
        throw new a.Hx(e);
    }
}
