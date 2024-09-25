var s,
    i,
    a,
    r,
    o = n(31775),
    l = n.n(o),
    u = n(442837),
    d = n(570140),
    c = n(70956);
let E = {
        taken: null,
        error: void 0,
        rateLimited: !0
    },
    _ = {
        validations: new (l())({
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
class m extends (r = u.ZP.Store) {
    isRateLimited() {
        return null != _.retryAfterTime && Date.now() < _.retryAfterTime;
    }
    validate(e) {
        let t = _.validations.get(e);
        if (this.isRateLimited() && (null == t || t.rateLimited)) return E;
        if (!!this.isRateLimited() || null == t || !t.rateLimited) return t;
    }
    registrationUsernameSuggestion() {
        return _.suggestions.registration.suggestion.username;
    }
    usernameSuggestion() {
        return _.suggestions.migration.suggestion.username;
    }
    usernameSuggestionLoading() {
        return _.suggestions.migration.usernameSuggestionLoading;
    }
    isCurrentUsernameInvalid() {
        return _.currentUsernameInvalid;
    }
    wasRegistrationSuggestionFetched(e) {
        return _.suggestions.registration.source === e && _.suggestions.registration.fetched;
    }
    wasSuggestionsFetched() {
        return _.suggestions.migration.fetched;
    }
}
(a = 'PomeloStore'),
    (i = 'displayName') in (s = m)
        ? Object.defineProperty(s, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[i] = a),
    (t.Z = new m(d.Z, {
        POMELO_ATTEMPT_SUCCESS: function (e) {
            let { username: t, taken: n } = e;
            _.validations.set(t, { taken: n });
        },
        POMELO_ATTEMPT_FAILURE: function (e) {
            let { username: t, error: n, statusCode: s, retryAfter: i } = e;
            429 === s
                ? _.validations.set(
                      t,
                      {
                          taken: null,
                          error: n,
                          rateLimited: !0
                      },
                      (null != i ? i : 7) * c.Z.Millis.SECOND
                  )
                : _.validations.set(t, {
                      taken: null,
                      error: n
                  }),
                null != i && (_.retryAfterTime = Date.now() + i * c.Z.Millis.SECOND);
        },
        POMELO_SUGGESTIONS_RESET: function () {
            (_.suggestions.migration = {
                suggestion: { username: void 0 },
                fetched: !1,
                usernameSuggestionLoading: !1
            }),
                (_.suggestions.registration = {
                    suggestion: { username: void 0 },
                    source: void 0,
                    fetched: !1
                });
        },
        POMELO_SUGGESTIONS_SUCCESS: function (e) {
            let { suggestion: t } = e;
            (_.suggestions.migration = {
                suggestion: t,
                fetched: !0,
                usernameSuggestionLoading: !1
            }),
                (null == t ? void 0 : t.invalid_current_username) === !0 && (_.currentUsernameInvalid = !0);
        },
        POMELO_SUGGESTIONS_FETCH: function (e) {
            let { usernameSuggestionLoading: t } = e;
            _.suggestions.migration.usernameSuggestionLoading = t;
        },
        POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function (e) {
            let { suggestion: t, source: n } = e;
            (_.suggestions.registration = {
                suggestion: t,
                source: n,
                fetched: !0
            }),
                (null == t ? void 0 : t.username) != null && _.validations.set(t.username, { taken: !1 });
        }
    }));
