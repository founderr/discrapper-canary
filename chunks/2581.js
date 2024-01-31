"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var s = a("693566"),
  n = a.n(s),
  i = a("446674"),
  l = a("913144"),
  r = a("718517");
let o = {
    taken: null,
    error: void 0,
    rateLimited: !0
  },
  u = {
    validations: new n({
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
class d extends i.default.Store {
  isRateLimited() {
    return null != u.retryAfterTime && Date.now() < u.retryAfterTime
  }
  validate(e) {
    let t = u.validations.get(e);
    return this.isRateLimited() && (null == t || t.rateLimited) ? o : this.isRateLimited() || null == t || !t.rateLimited ? t : void 0
  }
  registrationUsernameSuggestion() {
    return u.suggestions.registration.suggestion.username
  }
  usernameSuggestion() {
    return u.suggestions.migration.suggestion.username
  }
  usernameSuggestionLoading() {
    return u.suggestions.migration.usernameSuggestionLoading
  }
  isCurrentUsernameInvalid() {
    return u.currentUsernameInvalid
  }
  wasRegistrationSuggestionFetched(e) {
    return u.suggestions.registration.source === e && u.suggestions.registration.fetched
  }
  wasSuggestionsFetched() {
    return u.suggestions.migration.fetched
  }
}
d.displayName = "PomeloStore";
var c = new d(l.default, {
  POMELO_ATTEMPT_SUCCESS: function(e) {
    let {
      username: t,
      taken: a
    } = e;
    u.validations.set(t, {
      taken: a
    })
  },
  POMELO_ATTEMPT_FAILURE: function(e) {
    let {
      username: t,
      error: a,
      statusCode: s,
      retryAfter: n
    } = e;
    429 === s ? u.validations.set(t, {
      taken: null,
      error: a,
      rateLimited: !0
    }, (null != n ? n : 7) * r.default.Millis.SECOND) : u.validations.set(t, {
      taken: null,
      error: a
    }), null != n && (u.retryAfterTime = Date.now() + n * r.default.Millis.SECOND)
  },
  POMELO_SUGGESTIONS_RESET: function() {
    u.suggestions.migration = {
      suggestion: {
        username: void 0
      },
      fetched: !1,
      usernameSuggestionLoading: !1
    }, u.suggestions.registration = {
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
    u.suggestions.migration = {
      suggestion: t,
      fetched: !0,
      usernameSuggestionLoading: !1
    }, (null == t ? void 0 : t.invalid_current_username) === !0 && (u.currentUsernameInvalid = !0)
  },
  POMELO_SUGGESTIONS_FETCH: function(e) {
    let {
      usernameSuggestionLoading: t
    } = e;
    u.suggestions.migration.usernameSuggestionLoading = t
  },
  POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function(e) {
    let {
      suggestion: t,
      source: a
    } = e;
    u.suggestions.registration = {
      suggestion: t,
      source: a,
      fetched: !0
    }, (null == t ? void 0 : t.username) != null && u.validations.set(t.username, {
      taken: !1
    })
  }
})