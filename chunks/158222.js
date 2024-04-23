"use strict";
n.r(t), n.d(t, {
  dismissMediaPostSharePrompt: function() {
    return r
  },
  fetchMediaPostEmbed: function() {
    return o
  },
  unfurlEmbedUrl: function() {
    return u
  }
});
var s = n("544891"),
  l = n("570140"),
  a = n("881052"),
  i = n("981631");

function r(e) {
  l.default.dispatch({
    type: "DISMISS_MEDIA_POST_SHARE_PROMPT",
    threadId: e
  })
}
async function o(e) {
  l.default.dispatch({
    type: "MEDIA_POST_EMBED_FETCH",
    threadId: e
  });
  try {
    let t = (await s.HTTP.get({
      url: i.Endpoints.MEDIA_POST_RESHARE_GET_PREVIEW(e)
    })).body;
    l.default.dispatch({
      type: "MEDIA_POST_EMBED_FETCH_SUCCESS",
      threadId: e,
      mediaPostEmbed: t
    })
  } catch (t) {
    l.default.dispatch({
      type: "MEDIA_POST_EMBED_FETCH_FAILURE",
      threadId: e
    })
  }
}
async function u(e) {
  try {
    return (await s.HTTP.post({
      url: i.Endpoints.UNFURL_EMBED_URLS,
      body: {
        urls: e
      }
    })).body
  } catch (e) {
    throw new a.APIError(e)
  }
}