"use strict";
n.r(t), n("47120"), n("724458");
var a, s, l, i, r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("570140"),
  c = n("407570"),
  f = n("598077"),
  E = n("594174"),
  _ = n("388380");
let h = {},
  C = 0,
  m = !1,
  S = !1,
  I = new Set,
  T = new Set;

function p(e, t) {
  var n;
  let a = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
  return {
    key: e.suggested_user.id,
    name: null === (n = o().first(e.reasons)) || void 0 === n ? void 0 : n.name,
    user: new f.default(e.suggested_user),
    mutualFriendsCount: e.mutual_friends_count,
    contactNames: a,
    isUnseen: !t && !e.is_viewed
  }
}(0, r.debounce)(e => _.default.viewSuggestions(e), 15e3);
class g extends(a = u.default.Store) {
  initialize() {
    this.waitFor(E.default)
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
i = "FriendSuggestionStore", (l = "displayName") in(s = g) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new g(d.default, {
  CONNECTION_OPEN: function(e) {
    h = {}, (C = e.friendSuggestionCount) > 0 && (S = !0, m || !S || (m = !0, S = !1, _.default.fetch()))
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
    let t = p(e.suggestion);
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
    m = !1, h = function(e) {
      let t = e.reduce((e, t) => e + (t.is_viewed ? 0 : 1), 0) === e.length,
        n = !(0, c.isInFriendSuggestionSeenStateExperiment)() || t;
      return o().chain(e).map(e => p(e, n)).keyBy(e => e.key).value()
    }(e.suggestions), C = o().keys(h).length
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
    m = !1, h = {}
  },
  VIEWED_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    e.userIds.forEach(e => {
      I.add(e), T.delete(e)
    })
  }
})