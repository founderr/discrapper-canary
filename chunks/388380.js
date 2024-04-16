"use strict";
a.r(t);
var n = a("544891"),
  s = a("570140"),
  l = a("407570"),
  i = a("981631");
t.default = {
  async fetch() {
    try {
      let e = await n.HTTP.get({
        url: i.Endpoints.FRIEND_SUGGESTIONS
      });
      s.default.dispatch({
        type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS",
        suggestions: e.body
      })
    } catch (e) {
      s.default.dispatch({
        type: "LOAD_FRIEND_SUGGESTIONS_FAILURE"
      })
    }
  },
  ignore(e) {
    n.HTTP.del(i.Endpoints.FRIEND_SUGGESTION(e))
  },
  async viewSuggestions(e) {
    if ((0, l.isInFriendSuggestionSeenStateExperiment)()) try {
      await n.HTTP.post({
        url: i.Endpoints.FRIEND_FINDER_VIEWED_SUGGESTIONS,
        body: {
          viewed_user_ids: e
        },
        retries: 1
      }), s.default.dispatch({
        type: "VIEWED_FRIEND_SUGGESTIONS_SUCCESS",
        userIds: e
      })
    } catch (e) {
      s.default.dispatch({
        type: "VIEWED_FRIEND_SUGGESTIONS_FAILURE"
      })
    }
  }
}