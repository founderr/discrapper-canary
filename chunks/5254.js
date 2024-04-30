"use strict";
a.r(t), a("47120");
var n, s, l, i, r = a("392711"),
  o = a.n(r),
  u = a("442837"),
  d = a("570140"),
  c = a("598077"),
  f = a("594174");
let E = {},
  h = 0,
  _ = !1,
  C = !1;

function m(e) {
  var t;
  let a = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
  return {
    key: e.suggested_user.id,
    name: null === (t = o().first(e.reasons)) || void 0 === t ? void 0 : t.name,
    user: new c.default(e.suggested_user),
    mutualFriendsCount: e.mutual_friends_count,
    contactNames: a,
    isUnseen: !e.is_viewed
  }
}
class S extends(n = u.default.Store) {
  initialize() {
    this.waitFor(f.default)
  }
  getSuggestionCount() {
    return h
  }
  getSuggestions() {
    return Object.entries(E).map(e => {
      let [t, a] = e;
      return a
    })
  }
  getSuggestion(e) {
    return E[e]
  }
}
i = "FriendSuggestionStore", (l = "displayName") in(s = S) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new S(d.default, {
  CONNECTION_OPEN: function(e) {
    E = {}, (h = e.friendSuggestionCount) > 0 && (C = !0, _ || !C || (_ = !0, C = !1))
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
    let t = m(e.suggestion);
    if (null != E[t.key]) return !1;
    h++, E = {
      ...E,
      [t.key]: t
    }
  },
  FRIEND_SUGGESTION_DELETE: function(e) {
    h = Math.max(0, --h), delete E[e.suggestedUserId]
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    var t;
    _ = !1, t = e.suggestions, E = o().chain(t).map(e => m(e)).keyBy(e => e.key).value(), h = o().keys(E).length
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
    _ = !1, E = {}
  }
})