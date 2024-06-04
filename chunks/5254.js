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
  _ = 0,
  C = !1,
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
    return _
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
    h = {}, (_ = e.friendSuggestionCount) > 0 && (m = !0, C || !m || (C = !0, m = !1, E.default.fetch()))
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
    let t = S(e.suggestion);
    if (null != h[t.key]) return !1;
    _++, h = {
      ...h,
      [t.key]: t
    }
  },
  FRIEND_SUGGESTION_DELETE: function(e) {
    _ = Math.max(0, --_), delete h[e.suggestedUserId]
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    var t;
    C = !1, t = e.suggestions, h = o().chain(t).map(e => S(e)).keyBy(e => e.key).value(), _ = o().keys(h).length
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
    C = !1, h = {}
  }
})