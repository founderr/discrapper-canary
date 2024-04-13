"use strict";
a.r(t), a("47120"), a("724458");
var n, s, l, i, r = a("392711"),
  o = a.n(r),
  u = a("442837"),
  d = a("570140"),
  c = a("407570"),
  f = a("598077"),
  E = a("594174"),
  h = a("388380");
let _ = {},
  C = 0,
  m = !1,
  S = !1,
  I = new Set,
  p = new Set;

function T(e, t) {
  var a;
  let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
  return {
    key: e.suggested_user.id,
    name: null === (a = o().first(e.reasons)) || void 0 === a ? void 0 : a.name,
    user: new f.default(e.suggested_user),
    mutualFriendsCount: e.mutual_friends_count,
    contactNames: n,
    isUnseen: !t && !e.is_viewed
  }
}(0, r.debounce)(e => h.default.viewSuggestions(e), 15e3);
class g extends(n = u.default.Store) {
  initialize() {
    this.waitFor(E.default)
  }
  getSuggestionCount() {
    return C
  }
  getSuggestions() {
    return Object.entries(_).map(e => {
      let [t, a] = e;
      return a
    })
  }
  getSuggestion(e) {
    return _[e]
  }
}
i = "FriendSuggestionStore", (l = "displayName") in(s = g) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new g(d.default, {
  CONNECTION_OPEN: function(e) {
    _ = {}, (C = e.friendSuggestionCount) > 0 && (S = !0, m || !S || (m = !0, S = !1, h.default.fetch()))
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
    let t = T(e.suggestion);
    if (null != _[t.key]) return !1;
    C++, _ = {
      ..._,
      [t.key]: t
    }
  },
  FRIEND_SUGGESTION_DELETE: function(e) {
    C = Math.max(0, --C), delete _[e.suggestedUserId]
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    m = !1, _ = function(e) {
      let t = e.reduce((e, t) => e + (t.is_viewed ? 0 : 1), 0) === e.length,
        a = !(0, c.isInFriendSuggestionSeenStateExperiment)() || t;
      return o().chain(e).map(e => T(e, a)).keyBy(e => e.key).value()
    }(e.suggestions), C = o().keys(_).length
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
    m = !1, _ = {}
  },
  VIEWED_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    e.userIds.forEach(e => {
      I.add(e), p.delete(e)
    })
  }
})