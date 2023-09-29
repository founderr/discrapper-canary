"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [20486], {
        647086: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var r = n(571657),
                o = n(281110),
                i = n(744564),
                a = n(347365),
                s = n(652591),
                u = n(391438),
                l = n(260561),
                c = (0, l.B)({
                    kind: "user",
                    label: "Pomelo Attempt",
                    id: "2023-04_pomelo_attempt",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                f = function() {
                    return c.getCurrentConfig({
                        location: "c22166_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled
                },
                d = (0, l.B)({
                    kind: "user",
                    label: "Pomelo Suggestions",
                    id: "2023-04_pomelo_suggestions",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                g = n(623236),
                E = n(2590),
                m = n(473708);
            n(355336);

            function v(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function _(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            v(i, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            v(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var h = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, s])
                    }
                }
            };

            function p(e) {
                return !1 === /^[A-Za-z0-9_.]*$/.test(e) ? m.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID : e.includes("..") ? m.Z.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT : e.length < 2 || e.length > 32 ? m.Z.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                    maxNum: 32,
                    minNum: 2
                }) : void 0
            }
            const y = {
                resetSuggestions: function() {
                    return i.Z.dispatch({
                        type: "POMELO_SUGGESTIONS_RESET"
                    })
                },
                fetchSuggestionsRegistration: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
                    return _((function() {
                        var n, r;
                        return h(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!(0, g.vc)()) return [2];
                                    i.Z.dispatch({
                                        type: "POMELO_SUGGESTIONS_RESET"
                                    });
                                    a.label = 1;
                                case 1:
                                    a.trys.push([1, 3, , 4]);
                                    return [4, o.ZP.get({
                                        url: E.ANM.POMELO_SUGGESTIONS_UNAUTHED,
                                        query: null == e ? void 0 : {
                                            global_name: e
                                        },
                                        timeout: t
                                    })];
                                case 2:
                                    return (r = a.sent()).ok && null != (null === (n = r.body) || void 0 === n ? void 0 : n.username) ? [2, i.Z.dispatch({
                                        type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
                                        suggestion: r.body,
                                        source: e
                                    })] : [3, 4];
                                case 3:
                                    a.sent();
                                    return [2];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                fetchSuggestions: function() {
                    return _((function() {
                        var e, t;
                        return h(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!d.getCurrentConfig({
                                            location: "1907ae_1"
                                        }, {
                                            autoTrackExposure: !1
                                        }).enabled) return [2];
                                    n.label = 1;
                                case 1:
                                    n.trys.push([1, 3, , 4]);
                                    return [4, o.ZP.get({
                                        url: E.ANM.POMELO_SUGGESTIONS
                                    })];
                                case 2:
                                    return (t = n.sent()).ok && null != (null === (e = t.body) || void 0 === e ? void 0 : e.username) ? [2, i.Z.dispatch({
                                        type: "POMELO_SUGGESTIONS_SUCCESS",
                                        suggestion: t.body
                                    })] : [3, 4];
                                case 3:
                                    n.sent();
                                    return [2];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                attemptPomelo: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return _((function() {
                        var o, l, c, d, g, m;
                        return h(this, (function(v) {
                            switch (v.label) {
                                case 0:
                                    if (null != (o = p(e))) {
                                        s.default.track(E.rMx.POMELO_ERRORS, {
                                            reason: o,
                                            username_error: !0,
                                            location: t
                                        });
                                        return [2, i.Z.dispatch({
                                            type: "POMELO_ATTEMPT_FAILURE",
                                            username: e,
                                            error: o
                                        })]
                                    }
                                    if (!f()) return [2];
                                    v.label = 1;
                                case 1:
                                    v.trys.push([1, 3, , 4]);
                                    return [4, u.Z.post({
                                        url: n ? E.ANM.POMELO_ATTEMPT_UNAUTHED : E.ANM.POMELO_ATTEMPT,
                                        body: {
                                            username: e
                                        },
                                        trackedActionData: {
                                            event: r.a9.POMELO_ATTEMPT,
                                            properties: {
                                                requested_username: e
                                            }
                                        }
                                    })];
                                case 2:
                                    (l = v.sent()).body.taken && s.default.track(E.rMx.POMELO_ERRORS, {
                                        reason: "already_taken",
                                        username_error: !0,
                                        location: t
                                    });
                                    i.Z.dispatch({
                                        type: "POMELO_ATTEMPT_SUCCESS",
                                        username: e,
                                        taken: l.body.taken
                                    });
                                    return [3, 4];
                                case 3:
                                    c = v.sent();
                                    d = new a.Hx(c);
                                    m = null !== (g = d.getAnyErrorMessage()) && void 0 !== g ? g : void 0;
                                    s.default.track(E.rMx.POMELO_ERRORS, {
                                        reason: m,
                                        username_error: !0,
                                        location: t
                                    });
                                    i.Z.dispatch({
                                        username: e,
                                        type: "POMELO_ATTEMPT_FAILURE",
                                        error: null != d.status && d.status < 500 && 401 !== d.status ? m : void 0,
                                        statusCode: d.status,
                                        retryAfter: d.retryAfter
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                createPomelo: function(e) {
                    return _((function() {
                        var t;
                        return h(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, u.Z.post({
                                        body: e,
                                        url: E.ANM.POMELO_CREATE,
                                        trackedActionData: {
                                            event: r.a9.POMELO_CREATE
                                        }
                                    })];
                                case 1:
                                    t = n.sent();
                                    i.Z.dispatch({
                                        type: "CURRENT_USER_UPDATE",
                                        user: t.body
                                    });
                                    return [2, t.body]
                            }
                        }))
                    }))()
                }
            }
        },
        355336: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(5387),
                o = n.n(r),
                i = n(202351),
                a = n(744564);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function l(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var g = {
                    taken: null,
                    error: void 0,
                    rateLimited: !0
                },
                E = {
                    validations: new(o())({
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
                            fetched: !1
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
            var m = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && c(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.isRateLimited = function() {
                    return null != E.retryAfterTime && Date.now() < E.retryAfterTime
                };
                r.validate = function(e) {
                    var t = E.validations.get(e);
                    return this.isRateLimited() && (null == t || t.rateLimited) ? g : this.isRateLimited() || null == t || !t.rateLimited ? t : void 0
                };
                r.registrationUsernameSuggestion = function() {
                    return E.suggestions.registration.suggestion.username
                };
                r.usernameSuggestion = function() {
                    return E.suggestions.migration.suggestion.username
                };
                r.isCurrentUsernameInvalid = function() {
                    return E.currentUsernameInvalid
                };
                r.wasRegistrationSuggestionFetched = function(e) {
                    return E.suggestions.registration.source === e && E.suggestions.registration.fetched
                };
                r.wasSuggestionsFetched = function() {
                    return E.suggestions.migration.fetched
                };
                return n
            }(i.ZP.Store);
            m.displayName = "PomeloStore";
            const v = new m(a.Z, {
                POMELO_ATTEMPT_SUCCESS: function(e) {
                    var t = e.username,
                        n = e.taken;
                    E.validations.set(t, {
                        taken: n
                    })
                },
                POMELO_ATTEMPT_FAILURE: function(e) {
                    var t = e.username,
                        n = e.error,
                        r = e.statusCode,
                        o = e.retryAfter;
                    429 === r ? E.validations.set(t, {
                        taken: null,
                        error: n,
                        rateLimited: !0
                    }, 1e3 * (null != o ? o : 7)) : E.validations.set(t, {
                        taken: null,
                        error: n
                    });
                    null != o && (E.retryAfterTime = Date.now() + 1e3 * o)
                },
                POMELO_SUGGESTIONS_RESET: function() {
                    E.suggestions.migration = {
                        suggestion: {
                            username: void 0
                        },
                        fetched: !1
                    };
                    E.suggestions.registration = {
                        suggestion: {
                            username: void 0
                        },
                        source: void 0,
                        fetched: !1
                    }
                },
                POMELO_SUGGESTIONS_SUCCESS: function(e) {
                    var t = e.suggestion;
                    E.suggestions.migration = {
                        suggestion: t,
                        fetched: !0
                    };
                    !0 === (null == t ? void 0 : t.invalid_current_username) && (E.currentUsernameInvalid = !0)
                },
                POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function(e) {
                    var t = e.suggestion,
                        n = e.source;
                    E.suggestions.registration = {
                        suggestion: t,
                        source: n,
                        fetched: !0
                    };
                    null != (null == t ? void 0 : t.username) && E.validations.set(t.username, {
                        taken: !1
                    })
                }
            })
        },
        189739: (e, t, n) => {
            n.d(t, {
                K: () => r
            });
            var r;
            ! function(e) {
                e.AVAILABLE = "AVAILABLE";
                e.ERROR = "ERROR";
                e.RATE_LIMIT = "RATE_LIMIT";
                e.INTERNAL_ERROR = "INTERNAL_ERROR"
            }(r || (r = {}))
        },
        987230: (e, t, n) => {
            n.d(t, {
                zV: () => d,
                e$: () => g,
                NX: () => _,
                R_: () => h,
                K9: () => p,
                ti: () => y
            });
            var r = n(730381),
                o = n.n(r),
                i = n(498964),
                a = n(775173),
                s = n(102921),
                u = n(421281),
                l = n(189739),
                c = n(705090),
                f = n(473708);

            function d(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return a.ZP.getUserAvatarURL({
                    id: e.id,
                    avatar: e.avatar,
                    bot: e.bot,
                    discriminator: "0000"
                }, t, 80)
            }

            function g(e) {
                var t = (0, u._I)(e.username).replace(c.RN, "").replace(c.iF, ".").toLowerCase();
                return "".concat(t).concat(e.discriminator).substring(0, 32)
            }
            var E = ["@", "#", ":"],
                m = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
                v = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

            function _(e) {
                var t, n, r = e.username.toLowerCase();
                if ((t = r, n = c.kt, t.split("").filter((function(e) {
                        return !n.includes(e.charCodeAt(0))
                    })).join("")).length < 2) return !0;
                var o = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, u = E[Symbol.iterator](); !(o = (s = u.next()).done); o = !0) {
                        var l = s.value;
                        if (r.includes(l)) return !0
                    }
                } catch (e) {
                    i = !0;
                    a = e
                } finally {
                    try {
                        o || null == u.return || u.return()
                    } finally {
                        if (i) throw a
                    }
                }
                var f = !0,
                    d = !1,
                    g = void 0;
                try {
                    for (var _, h = v[Symbol.iterator](); !(f = (_ = h.next()).done); f = !0) {
                        if (r === _.value.toLowerCase()) return !0
                    }
                } catch (e) {
                    d = !0;
                    g = e
                } finally {
                    try {
                        f || null == h.return || h.return()
                    } finally {
                        if (d) throw g
                    }
                }
                var p = !0,
                    y = !1,
                    O = void 0;
                try {
                    for (var R, b = m[Symbol.iterator](); !(p = (R = b.next()).done); p = !0) {
                        var T = R.value;
                        if (r.includes(T.toLowerCase())) return !0
                    }
                } catch (e) {
                    y = !0;
                    O = e
                } finally {
                    try {
                        p || null == b.return || b.return()
                    } finally {
                        if (y) throw O
                    }
                }
                return !1
            }

            function h(e) {
                return e.toLowerCase().replace(/\s/g, "").replace("@", "")
            }

            function p(e) {
                var t = s.Z.extractTimestamp(e);
                try {
                    return o()(new Date(t)).format("MMM DD, YYYY")
                } catch (e) {}
                return null
            }

            function y(e) {
                return (0, i.EQ)(e).with({
                    rateLimited: !0
                }, (function() {
                    return {
                        type: l.K.RATE_LIMIT,
                        message: f.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
                    }
                })).with({
                    error: i.P.not(i.P.nullish)
                }, (function(e) {
                    var t = e.error;
                    return {
                        type: l.K.ERROR,
                        message: t
                    }
                })).with({
                    taken: !1
                }, (function() {
                    return {
                        type: l.K.AVAILABLE,
                        message: f.Z.Messages.POMELO_EXISTING_FLOW_AVAILABLE
                    }
                })).with({
                    taken: !0
                }, (function() {
                    return {
                        type: l.K.ERROR,
                        message: f.Z.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
                    }
                })).with({
                    error: i.P.nullish
                }, (function() {
                    return {
                        type: l.K.INTERNAL_ERROR,
                        message: ""
                    }
                })).otherwise((function() {}))
            }
        },
        623236: (e, t, n) => {
            n.d(t, {
                F4: () => o,
                vc: () => i
            });
            var r = (0, n(260561).B)({
                    kind: "user",
                    id: "2023-06_unique_username_registration",
                    label: "Unique Username Registration",
                    defaultConfig: {
                        livecheckEnabled: !0,
                        suggestions: !0
                    },
                    treatments: [{
                        id: 1,
                        label: "Unique Username Registration enabled -livecheck -suggestions",
                        config: {
                            livecheckEnabled: !1,
                            suggestions: !1
                        }
                    }, {
                        id: 2,
                        label: "Unique Username Registration enabled -livecheck +suggestions",
                        config: {
                            livecheckEnabled: !1,
                            suggestions: !0
                        }
                    }, {
                        id: 3,
                        label: "Unique Username Registration enabled +livecheck -suggestions",
                        config: {
                            livecheckEnabled: !0,
                            suggestions: !1
                        }
                    }, {
                        id: 4,
                        label: "Unique Username Registration enabled +livecheck +suggestions",
                        config: {
                            livecheckEnabled: !0,
                            suggestions: !0
                        }
                    }]
                }),
                o = function() {
                    return r.useExperiment({
                        location: "83ca1a_3"
                    }, {
                        autoTrackExposure: !1
                    })
                },
                i = function() {
                    return r.getCurrentConfig({
                        location: "83ca1a_4"
                    }, {
                        autoTrackExposure: !1
                    }).suggestions
                }
        },
        120486: (e, t, n) => {
            n.d(t, {
                M: () => f
            });
            var r = n(667294),
                o = n(496486),
                i = n(318715),
                a = n(647086),
                s = (0, n(260561).B)({
                    kind: "user",
                    label: "Pomelo Debounce Delay",
                    id: "2023-03_pomelo_debounce_delay",
                    defaultConfig: {
                        delay: 600
                    },
                    treatments: [{
                        id: 1,
                        label: "600ms",
                        config: {
                            delay: 600
                        }
                    }, {
                        id: 2,
                        label: "700ms",
                        config: {
                            delay: 700
                        }
                    }, {
                        id: 3,
                        label: "800ms",
                        config: {
                            delay: 800
                        }
                    }, {
                        id: 4,
                        label: "900ms",
                        config: {
                            delay: 900
                        }
                    }, {
                        id: 5,
                        label: "1000ms",
                        config: {
                            delay: 1e3
                        }
                    }]
                }),
                u = function() {
                    return s.useExperiment({
                        location: "52560d_1"
                    }, {
                        autoTrackExposure: !1
                    }).delay
                },
                l = n(355336),
                c = n(987230),
                f = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        s = (0, i.ZP)([l.Z], (function() {
                            return l.Z.validate(e)
                        }), [e]),
                        f = (0, i.ZP)([l.Z], (function() {
                            return l.Z.isRateLimited()
                        })),
                        d = u(),
                        g = r.useMemo((function() {
                            return (0, o.debounce)((function(e) {
                                return a.Z.attemptPomelo(e, n ? "registration" : "modal", n)
                            }), d)
                        }), [d, n]);
                    r.useEffect((function() {
                        t && !f && null == s && "" !== e && g(e)
                    }), [t, f, s, e, g]);
                    return r.useMemo((function() {
                        return null != s ? (0, c.ti)(s) : void 0
                    }), [s])
                }
        }
    }
]);