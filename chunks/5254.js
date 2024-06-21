n(47120);
var i, s, l, a, r = n(392711),
  o = n.n(r),
  c = n(442837),
  u = n(570140),
  d = n(598077),
  E = n(594174),
  h = n(388380);
let _ = {},
  I = 0,
  m = !1,
  g = !1;

function p(e) {
  var t;
  let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
  return {
    key: e.suggested_user.id,
    name: null === (t = o().first(e.reasons)) || void 0 === t ? void 0 : t.name,
    user: new d.Z(e.suggested_user),
    mutualFriendsCount: e.mutual_friends_count,
    contactNames: n
  }
}
class N extends(i = c.ZP.Store) {
  initialize() {
    this.waitFor(E.default)
  }
  getSuggestionCount() {
    return I
  }
  getSuggestions() {
    return Object.entries(_).map(e => {
      let [t, n] = e;
      return n
    })
  }
  getSuggestion(e) {
    return _[e]
  }
}
a = "FriendSuggestionStore", (l = "displayName") in(s = N) ? Object.defineProperty(s, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = a, t.Z = new N(u.Z, {
  CONNECTION_OPEN: function(e) {
    _ = {}, (I = e.friendSuggestionCount) > 0 && (g = !0, m || !g || (m = !0, g = !1, h.Z.fetch()))
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
    let t = p(e.suggestion);
    if (null != _[t.key]) return !1;
    I++, _ = {
      ..._,
      [t.key]: t
    }
  },
  FRIEND_SUGGESTION_DELETE: function(e) {
    I = Math.max(0, --I), delete _[e.suggestedUserId]
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    var t;
    m = !1, t = e.suggestions, _ = o().chain(t).map(e => p(e)).keyBy(e => e.key).value(), I = o().keys(_).length
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
    m = !1, _ = {}
  }
})