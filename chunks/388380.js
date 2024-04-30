"use strict";
a.r(t);
var n = a("544891"),
  s = a("570140"),
  l = a("981631");
t.default = {
  async fetch() {
    try {
      let e = await n.HTTP.get({
        url: l.Endpoints.FRIEND_SUGGESTIONS
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
    n.HTTP.del(l.Endpoints.FRIEND_SUGGESTION(e))
  }
}