"use strict";
n.r(t), n.d(t, {
  getEmojiCaptionsForUser: function() {
    return i
  },
  initiateEmojiInteraction: function() {
    return r
  }
}), n("222007");
var l = n("872717"),
  a = n("913144"),
  s = n("49111");
async function i() {
  a.default.dispatch({
    type: "EMOJI_CAPTIONS_FETCH"
  });
  try {
    let {
      body: e
    } = await l.default.get({
      url: s.Endpoints.EMOJI_CAPTIONS_GET
    }), t = {};
    for (let n of e.items) t[n.emoji_id] = n.emoji_captions;
    a.default.dispatch({
      type: "EMOJI_CAPTIONS_FETCH_SUCCESS",
      emojiCaptions: t
    })
  } catch (t) {
    var e;
    a.default.dispatch({
      type: "EMOJI_CAPTIONS_FETCH_ERROR",
      is4XXError: (null == (e = t.body) ? void 0 : e.status) >= 400 && (null == e ? void 0 : e.status) <= 499
    })
  }
}

function r(e) {
  a.default.dispatch({
    type: "EMOJI_INTERACTION_INITIATED",
    interaction: e
  })
}