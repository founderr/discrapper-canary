"use strict";
n.r(t), n("47120");
var a, s, l, i, r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("570140"),
  c = n("598077"),
  f = n("594174"),
  E = n("388380");
let h = {},
  C = 0,
  _ = !1,
  m = !1;

function S(e) {
  var t;
  let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
  return {
    key: e.suggested_user.id,
    name: null === (t = o().first(e.reasons)) || void 0 === t ? void 0 : t.name,
    user: new c.default(e.suggested_user),
    mutualFriendsCount: e.mutual_friends_count,
    contactNames: n
  }
}
class p extends(a = u.default.Store) {
  initialize() {
    this.waitFor(f.default)
  }
  getSuggestionCount() {
    return C
  }
  getSuggestions() {
    return Object.entries(h).map(e => {
      let [t, n] = e;
      return n
    })
  }
  getSuggestion(e) {
    return h[e]
  }
}
i = "FriendSuggestionStore", (l = "displayName") in(s = p) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new p(d.default, {
  CONNECTION_OPEN: function(e) {
    h = {}, (C = e.friendSuggestionCount) > 0 && (m = !0, _ || !m || (_ = !0, m = !1, E.default.fetch()))
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
    let t = S(e.suggestion);
    if (null != h[t.key]) return !1;
    C++, h = {
      ...h,
      [t.key]: t
    }
  },
  FRIEND_SUGGESTION_DELETE: function(e) {
    C = Math.max(0, --C), delete h[e.suggestedUserId]
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    var t;
    _ = !1, t = e.suggestions, h = o().chain(t).map(e => S(e)).keyBy(e => e.key).value(), C = o().keys(h).length
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
    _ = !1, h = {}
  }
})