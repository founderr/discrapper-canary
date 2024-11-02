var i,
    s,
    r,
    a,
    l = n(31775),
    o = n.n(l),
    u = n(442837),
    c = n(570140),
    d = n(70956);
let m = {
        taken: null,
        error: void 0,
        rateLimited: !0
    },
    g = {
        validations: new (o())({
            max: 100,
            maxAge: 60000
        }),
        currentUsernameInvalid: !1,
        retryAfterTime: null,
        suggestions: {
            migration: {
                suggestion: { username: void 0 },
                fetched: !1,
                usernameSuggestionLoading: !1
            },
            registration: {
                suggestion: { username: void 0 },
                source: void 0,
                fetched: !1
            }
        }
    };
class E extends (a = u.ZP.Store) {
    isRateLimited() {
        return null != g.retryAfterTime && Date.now() < g.retryAfterTime;
    }
    validate(e) {
        let t = g.validations.get(e);
        if (this.isRateLimited() && (null == t || t.rateLimited)) return m;
        if (!!this.isRateLimited() || null == t || !t.rateLimited) return t;
    }
    registrationUsernameSuggestion() {
        return g.suggestions.registration.suggestion.username;
    }
    usernameSuggestion() {
        return g.suggestions.migration.suggestion.username;
    }
    usernameSuggestionLoading() {
        return g.suggestions.migration.usernameSuggestionLoading;
    }
    isCurrentUsernameInvalid() {
        return g.currentUsernameInvalid;
    }
    wasRegistrationSuggestionFetched(e) {
        return g.suggestions.registration.source === e && g.suggestions.registration.fetched;
    }
    wasSuggestionsFetched() {
        return g.suggestions.migration.fetched;
    }
}
(r = 'PomeloStore'),
    (s = 'displayName') in (i = E)
        ? Object.defineProperty(i, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[s] = r),
    (t.Z = new E(c.Z, {
        POMELO_ATTEMPT_SUCCESS: function (e) {
            let { username: t, taken: n } = e;
            g.validations.set(t, { taken: n });
        },
        POMELO_ATTEMPT_FAILURE: function (e) {
            let { username: t, error: n, statusCode: i, retryAfter: s } = e;
            429 === i
                ? g.validations.set(
                      t,
                      {
                          taken: null,
                          error: n,
                          rateLimited: !0
                      },
                      (null != s ? s : 7) * d.Z.Millis.SECOND
                  )
                : g.validations.set(t, {
                      taken: null,
                      error: n
                  }),
                null != s && (g.retryAfterTime = Date.now() + s * d.Z.Millis.SECOND);
        },
        POMELO_SUGGESTIONS_RESET: function () {
            (g.suggestions.migration = {
                suggestion: { username: void 0 },
                fetched: !1,
                usernameSuggestionLoading: !1
            }),
                (g.suggestions.registration = {
                    suggestion: { username: void 0 },
                    source: void 0,
                    fetched: !1
                });
        },
        POMELO_SUGGESTIONS_SUCCESS: function (e) {
            let { suggestion: t } = e;
            (g.suggestions.migration = {
                suggestion: t,
                fetched: !0,
                usernameSuggestionLoading: !1
            }),
                (null == t ? void 0 : t.invalid_current_username) === !0 && (g.currentUsernameInvalid = !0);
        },
        POMELO_SUGGESTIONS_FETCH: function (e) {
            let { usernameSuggestionLoading: t } = e;
            g.suggestions.migration.usernameSuggestionLoading = t;
        },
        POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function (e) {
            let { suggestion: t, source: n } = e;
            (g.suggestions.registration = {
                suggestion: t,
                source: n,
                fetched: !0
            }),
                (null == t ? void 0 : t.username) != null && g.validations.set(t.username, { taken: !1 });
        }
    }));
