var s = n(544891),
  i = n(570140),
  l = n(981631);
t.Z = {
  async fetch() {
    try {
      let e = await s.tn.get({
        url: l.ANM.FRIEND_SUGGESTIONS
      });
      i.Z.dispatch({
        type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS",
        suggestions: e.body
      })
    } catch (e) {
      i.Z.dispatch({
        type: "LOAD_FRIEND_SUGGESTIONS_FAILURE"
      })
    }
  },
  ignore(e) {
    s.tn.del(l.ANM.FRIEND_SUGGESTION(e))
  }
}