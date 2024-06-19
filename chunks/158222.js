n.d(t, {
  V6: function() {
    return c
  },
  fn: function() {
    return r
  },
  xP: function() {
    return o
  }
});
var s = n(544891),
  i = n(570140),
  l = n(881052),
  a = n(981631);

function r(e) {
  i.Z.dispatch({
    type: "DISMISS_MEDIA_POST_SHARE_PROMPT",
    threadId: e
  })
}
async function o(e) {
  i.Z.dispatch({
    type: "MEDIA_POST_EMBED_FETCH",
    threadId: e
  });
  try {
    let t = (await s.tn.get({
      url: a.ANM.MEDIA_POST_RESHARE_GET_PREVIEW(e)
    })).body;
    i.Z.dispatch({
      type: "MEDIA_POST_EMBED_FETCH_SUCCESS",
      threadId: e,
      mediaPostEmbed: t
    })
  } catch (t) {
    i.Z.dispatch({
      type: "MEDIA_POST_EMBED_FETCH_FAILURE",
      threadId: e
    })
  }
}
async function c(e) {
  try {
    return (await s.tn.post({
      url: a.ANM.UNFURL_EMBED_URLS,
      body: {
        urls: e
      }
    })).body
  } catch (e) {
    throw new l.Hx(e)
  }
}