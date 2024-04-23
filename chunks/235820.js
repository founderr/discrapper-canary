"use strict";
n.r(t);
var s = n("544891"),
  l = n("570140"),
  a = n("981631");
t.default = {
  setGuildFilter(e) {
    let {
      guildFilter: t,
      roleFilter: n,
      everyoneFilter: s
    } = e;
    l.default.dispatch({
      type: "SET_RECENT_MENTIONS_FILTER",
      guildFilter: t,
      roleFilter: n,
      everyoneFilter: s
    })
  },
  clearMentions() {
    l.default.dispatch({
      type: "CLEAR_MENTIONS"
    })
  },
  truncateMentions(e) {
    l.default.dispatch({
      type: "TRUNCATE_MENTIONS",
      size: e
    })
  },
  fetchRecentMentions(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.MAX_MENTIONS_PER_FETCH,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
      r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
    l.default.dispatch({
      type: "LOAD_RECENT_MENTIONS",
      guildId: n
    }), s.HTTP.get({
      url: a.Endpoints.MENTIONS,
      query: {
        before: e,
        limit: t,
        guild_id: n,
        roles: i,
        everyone: r
      },
      retries: 2,
      oldFormErrors: !0
    }).then(t => {
      let {
        body: n
      } = t;
      l.default.dispatch({
        type: "LOAD_RECENT_MENTIONS_SUCCESS",
        messages: n,
        isAfter: null != e,
        hasMoreAfter: n.length >= a.MAX_MENTIONS_PER_FETCH
      })
    }, () => {
      l.default.dispatch({
        type: "LOAD_RECENT_MENTIONS_FAILURE"
      })
    })
  },
  deleteRecentMention(e) {
    s.HTTP.del({
      url: a.Endpoints.MENTIONS_MESSAGE_ID(e),
      retries: 2,
      oldFormErrors: !0
    }), l.default.dispatch({
      type: "RECENT_MENTION_DELETE",
      id: e
    })
  },
  setRecentMentionsStale() {
    l.default.dispatch({
      type: "SET_RECENT_MENTIONS_STALE"
    })
  }
}