"use strict";
a.r(t);
var s, i, n, l, o = a("31775"),
  r = a.n(o),
  d = a("442837"),
  u = a("570140"),
  c = a("70956");
let E = {
    taken: null,
    error: void 0,
    rateLimited: !0
  },
  m = {
    validations: new(r())({
      max: 100,
      maxAge: 6e4
    }),
    currentUsernameInvalid: !1,
    retryAfterTime: null,
    suggestions: {
      migration: {
        suggestion: {
          username: void 0
        },
        fetched: !1,
        usernameSuggestionLoading: !1
      },
      registration: {
        suggestion: {
          username: void 0
        },
        source: void 0,
        fetched: !1
      }
    }
  };
class S extends(l = d.default.Store) {
  isRateLimited() {
    return null != m.retryAfterTime && Date.now() < m.retryAfterTime
  }
  validate(e) {
    let t = m.validations.get(e);
    return this.isRateLimited() && (null == t || t.rateLimited) ? E : this.isRateLimited() || null == t || !t.rateLimited ? t : void 0
  }
  registrationUsernameSuggestion() {
    return m.suggestions.registration.suggestion.username
  }
  usernameSuggestion() {
    return m.suggestions.migration.suggestion.username
  }
  usernameSuggestionLoading() {
    return m.suggestions.migration.usernameSuggestionLoading
  }
  isCurrentUsernameInvalid() {
    return m.currentUsernameInvalid
  }
  wasRegistrationSuggestionFetched(e) {
    return m.suggestions.registration.source === e && m.suggestions.registration.fetched
  }
  wasSuggestionsFetched() {
    return m.suggestions.migration.fetched
  }
}
n = "PomeloStore", (i = "displayName") in(s = S) ? Object.defineProperty(s, i, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = n, t.default = new S(u.default, {
  POMELO_ATTEMPT_SUCCESS: function(e) {
    let {
      username: t,
      taken: a
    } = e;
    m.validations.set(t, {
      taken: a
    })
  },
  POMELO_ATTEMPT_FAILURE: function(e) {
    let {
      username: t,
      error: a,
      statusCode: s,
      retryAfter: i
    } = e;
    429 === s ? m.validations.set(t, {
      taken: null,
      error: a,
      rateLimited: !0
    }, (null != i ? i : 7) * c.default.Millis.SECOND) : m.validations.set(t, {
      taken: null,
      error: a
    }), null != i && (m.retryAfterTime = Date.now() + i * c.default.Millis.SECOND)
  },
  POMELO_SUGGESTIONS_RESET: function() {
    m.suggestions.migration = {
      suggestion: {
        username: void 0
      },
      fetched: !1,
      usernameSuggestionLoading: !1
    }, m.suggestions.registration = {
      suggestion: {
        username: void 0
      },
      source: void 0,
      fetched: !1
    }
  },
  POMELO_SUGGESTIONS_SUCCESS: function(e) {
    let {
      suggestion: t
    } = e;
    m.suggestions.migration = {
      suggestion: t,
      fetched: !0,
      usernameSuggestionLoading: !1
    }, (null == t ? void 0 : t.invalid_current_username) === !0 && (m.currentUsernameInvalid = !0)
  },
  POMELO_SUGGESTIONS_FETCH: function(e) {
    let {
      usernameSuggestionLoading: t
    } = e;
    m.suggestions.migration.usernameSuggestionLoading = t
  },
  POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function(e) {
    let {
      suggestion: t,
      source: a
    } = e;
    m.suggestions.registration = {
      suggestion: t,
      source: a,
      fetched: !0
    }, (null == t ? void 0 : t.username) != null && m.validations.set(t.username, {
      taken: !1
    })
  }
})