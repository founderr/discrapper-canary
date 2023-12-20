(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["62498"], {
        60266: function(t, e, a) {
            t.exports = function(t, e, a, n) {
                for (var s = -1, i = null == t ? 0 : t.length; ++s < i;) {
                    var r = t[s];
                    e(n, r, a(r), t)
                }
                return n
            }
        },
        581628: function(t, e, a) {
            var n = a("978603");
            t.exports = function(t, e, a, s) {
                return n(t, function(t, n, i) {
                    e(s, t, a(t), i)
                }), s
            }
        },
        278296: function(t, e, a) {
            var n = a("60266"),
                s = a("581628"),
                i = a("698273"),
                r = a("725502");
            t.exports = function(t, e) {
                return function(a, l) {
                    var c = r(a) ? n : s,
                        u = e ? e() : {};
                    return c(a, t, i(l, 2), u)
                }
            }
        },
        816494: function(t, e, a) {
            var n = a("766665"),
                s = a("278296")(function(t, e, a) {
                    n(t, a, e)
                });
            t.exports = s
        },
        781324: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                getSafetyHubData: function() {
                    return l
                },
                getSafetyHubDataForClassification: function() {
                    return c
                }
            });
            var n = a("872717"),
                s = a("913144"),
                i = a("234998"),
                r = a("49111");
            async function l() {
                s.default.dispatch({
                    type: "SAFETY_HUB_FETCH_START"
                }), await n.default.get({
                    url: r.Endpoints.SAFETY_HUB
                }).then(t => {
                    let {
                        body: e
                    } = t, {
                        classifications: a,
                        account_standing: n
                    } = e;
                    a.forEach(t => {
                        if (null != t.flagged_content && t.flagged_content.length > 0) {
                            let e = t.flagged_content[0];
                            e.attachments.forEach(t => (0, i.setMessageAttachmentDimensions)(t))
                        }
                    }), s.default.dispatch({
                        type: "SAFETY_HUB_FETCH_SUCCESS",
                        classifications: a,
                        accountStanding: n
                    })
                }).catch(t => {
                    var e, a;
                    s.default.dispatch({
                        type: "SAFETY_HUB_FETCH_FAILURE",
                        error: null !== (a = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== a ? a : "Unknown error"
                    })
                })
            }
            async function c(t) {
                s.default.dispatch({
                    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
                    classificationId: t
                }), await n.default.get({
                    url: r.Endpoints.SAFETY_HUB
                }).then(e => {
                    let {
                        body: a
                    } = e, {
                        classifications: n,
                        account_standing: r,
                        is_dsa_eligible: l
                    } = a, c = n.find(e => e.id === t);
                    if (null != c) {
                        if (null != c.flagged_content && c.flagged_content.length > 0) {
                            let t = c.flagged_content[0];
                            t.attachments.forEach(t => (0, i.setMessageAttachmentDimensions)(t))
                        }
                        s.default.dispatch({
                            type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                            classification: c,
                            accountStanding: r,
                            isDsaEligible: l
                        })
                    } else s.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                        error: "Classification not found.",
                        classificationId: t
                    })
                }).catch(e => {
                    var a, n;
                    s.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                        error: null !== (n = null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : a.message) && void 0 !== n ? n : "Unknown error",
                        classificationId: t
                    })
                })
            }
        },
        234998: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                setMessageAttachmentDimensions: function() {
                    return i
                }
            });
            var n = a("651693"),
                s = a("170213");

            function i(t) {
                if ((0, n.isImageFile)(t.filename)) {
                    let e = new Image;
                    e.src = t.url, e.onload = () => {
                        let a = e.naturalWidth,
                            n = e.naturalHeight;
                        Promise.resolve({
                            width: a,
                            height: n
                        }).then(e => {
                            let {
                                width: a,
                                height: n
                            } = e;
                            t.width = a, t.height = n
                        }).catch(() => {
                            t.width = s.DEFAULT_IMAGE_MAX_WIDTH, t.height = s.DEFAULT_IMAGE_MAX_HEIGHT
                        })
                    }
                }
            }
        },
        908539: function(t, e, a) {
            "use strict";
            var n, s, i, r, l, c, u, o, S, E;
            a.r(e), a.d(e, {
                ActionType: function() {
                    return i
                },
                AccountStandingState: function() {
                    return r
                },
                ClassificationRequestState: function() {
                    return l
                }
            }), (c = n || (n = {}))[c.REVIEW_PENDING = 1] = "REVIEW_PENDING", c[c.CLASSIFICATION_UPHELD = 2] = "CLASSIFICATION_UPHELD", c[c.CLASSIFICATION_INVALIDATED = 3] = "CLASSIFICATION_INVALIDATED", (u = s || (s = {}))[u.UNSPECIFIED = 0] = "UNSPECIFIED", u[u.UNKNOWN = 1] = "UNKNOWN", u[u.UNSOLICITED_PORNOGRAPHY = 100] = "UNSOLICITED_PORNOGRAPHY", u[u.NONCONSENSUAL_PORNOGRAPHY = 200] = "NONCONSENSUAL_PORNOGRAPHY", u[u.GLORIFYING_VIOLENCE = 210] = "GLORIFYING_VIOLENCE", u[u.HATE_SPEECH = 220] = "HATE_SPEECH", u[u.CRACKED_ACCOUNTS = 230] = "CRACKED_ACCOUNTS", u[u.ILLICIT_GOODS = 240] = "ILLICIT_GOODS", u[u.SOCIAL_ENGINEERING = 250] = "SOCIAL_ENGINEERING", u[u.TEST_CLASSIFICATION = 9e3] = "TEST_CLASSIFICATION", u[u.TEST_CLASSIFICATION_LOW = 9001] = "TEST_CLASSIFICATION_LOW", u[u.TEST_CLASSIFICATION_SEVERE = 9002] = "TEST_CLASSIFICATION_SEVERE", (o = i || (i = {}))[o.BAN = 0] = "BAN", o[o.TEMP_BAN = 1] = "TEMP_BAN", o[o.GLOBAL_QUARANTINE = 2] = "GLOBAL_QUARANTINE", o[o.REQUIRE_VERIFICATION = 3] = "REQUIRE_VERIFICATION", o[o.USER_WARNING = 4] = "USER_WARNING", o[o.USER_SPAMMER = 5] = "USER_SPAMMER", o[o.CHANNEL_SPAM = 6] = "CHANNEL_SPAM", o[o.MESSAGE_SPAM = 7] = "MESSAGE_SPAM", o[o.DISABLE_SUSPICIOUS_ACTIVITY = 8] = "DISABLE_SUSPICIOUS_ACTIVITY", o[o.LIMITED_ACCESS = 9] = "LIMITED_ACCESS", o[o.CHANNEL_SCHEDULE_DELETE = 10] = "CHANNEL_SCHEDULE_DELETE", o[o.MESSAGE_CONTENT_REMOVAL = 11] = "MESSAGE_CONTENT_REMOVAL", o[o.GUILD_DISABLE_INVITE = 12] = "GUILD_DISABLE_INVITE", o[o.USER_CONTENT_REMOVAL = 13] = "USER_CONTENT_REMOVAL", o[o.USER_USERNAME_MANGLE = 14] = "USER_USERNAME_MANGLE", o[o.GUILD_LIMITED_ACCESS = 15] = "GUILD_LIMITED_ACCESS", o[o.USER_MESSAGE_REMOVAL = 16] = "USER_MESSAGE_REMOVAL", (S = r || (r = {}))[S.ALL_GOOD = 100] = "ALL_GOOD", S[S.LIMITED = 200] = "LIMITED", S[S.VERY_LIMITED = 300] = "VERY_LIMITED", S[S.AT_RISK = 400] = "AT_RISK", S[S.SUSPENDED = 500] = "SUSPENDED", (E = l || (l = {}))[E.PENDING = 0] = "PENDING", E[E.SUCCESS = 1] = "SUCCESS", E[E.FAILED = 2] = "FAILED"
        },
        646356: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return T
                }
            });
            var n = a("816494"),
                s = a.n(n),
                i = a("446674"),
                r = a("913144"),
                l = a("908539");
            let c = {},
                u = {},
                o = {
                    state: l.AccountStandingState.ALL_GOOD
                },
                S = !1,
                E = !1,
                _ = null,
                A = null,
                d = !1;
            class I extends i.default.Store {
                isFetching() {
                    return S
                }
                getClassifications() {
                    return Object.values(c)
                }
                getClassification(t) {
                    return c[t]
                }
                getAccountStanding() {
                    return o
                }
                getFetchError() {
                    return _
                }
                isInitialized() {
                    return E
                }
                getClassificationRequestState(t) {
                    return u[t]
                }
                getAppealClassificationId() {
                    return A
                }
                getIsDsaEligible() {
                    return d
                }
            }
            I.displayName = "SafetyHubStore";
            var T = new I(r.default, {
                SAFETY_HUB_FETCH_START: function(t) {
                    S = !0
                },
                SAFETY_HUB_FETCH_SUCCESS: function(t) {
                    let {
                        classifications: e,
                        accountStanding: a
                    } = t;
                    c = s(e, "id"), o = a, S = !1, E = !0, _ = null
                },
                SAFETY_HUB_FETCH_FAILURE: function(t) {
                    let {
                        error: e
                    } = t;
                    S = !1, E = !1, _ = e
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_START: function(t) {
                    u[t.classificationId] = l.ClassificationRequestState.PENDING, S = !0
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(t) {
                    let {
                        classification: e,
                        accountStanding: a,
                        isDsaEligible: n
                    } = t;
                    c[e.id] = e, u[e.id] = l.ClassificationRequestState.SUCCESS, o = a, S = !1, _ = null, d = n
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(t) {
                    let {
                        error: e,
                        classificationId: a
                    } = t;
                    S = !1, _ = e, u[a] = l.ClassificationRequestState.FAILED
                },
                SAFETY_HUB_APPEAL_OPEN: function(t) {
                    let {
                        classificationId: e
                    } = t;
                    A = e
                },
                SAFETY_HUB_APPEAL_CLOSE: function() {
                    A = null
                },
                LOGOUT: function() {
                    S = !1, c = {}, o = {
                        state: l.AccountStandingState.ALL_GOOD
                    }, A = null
                }
            })
        },
        310888: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                useIsNewClassification: function() {
                    return s
                }
            });
            var n = a("249654");
            let s = t => {
                let e = n.default.extractTimestamp(t.id);
                return 864e5 > Math.abs(e - new Date().getTime())
            }
        },
        132206: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                useSafetyHubAccountStanding: function() {
                    return i
                }
            });
            var n = a("446674"),
                s = a("646356");

            function i() {
                return (0, n.useStateFromStores)([s.default], () => s.default.getAccountStanding())
            }
        },
        698609: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                useSafetyHubClassification: function() {
                    return u
                },
                useActiveSafetyHubClassifications: function() {
                    return o
                },
                useExpiredSafetyHubClassifications: function() {
                    return S
                }
            });
            var n = a("884691"),
                s = a("446674"),
                i = a("299039"),
                r = a("781324"),
                l = a("646356");

            function c() {
                let t = (0, s.useStateFromStoresArray)([l.default], () => l.default.getClassifications());
                return t.sort((t, e) => i.default.extractTimestamp(e.id) - i.default.extractTimestamp(t.id))
            }

            function u(t) {
                let e = (0, s.useStateFromStores)([l.default], () => l.default.getClassification(t)),
                    a = (0, s.useStateFromStores)([l.default], () => l.default.getClassificationRequestState(t)),
                    i = (0, s.useStateFromStores)([l.default], () => l.default.getIsDsaEligible());
                return n.useEffect(() => {
                    void 0 === e && null == a && r.getSafetyHubDataForClassification(t)
                }, [t, e, a]), {
                    classification: e,
                    classificationRequestState: a,
                    isDsaEligible: i
                }
            }

            function o() {
                let t = c(),
                    e = new Date;
                return t.filter(t => new Date(t.max_expiration_time) > e)
            }

            function S() {
                let t = c(),
                    e = new Date;
                return t.filter(t => new Date(t.max_expiration_time) <= e)
            }
        },
        333781: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                useSafetyHubFetchError: function() {
                    return i
                }
            });
            var n = a("446674"),
                s = a("646356");
            let i = () => (0, n.useStateFromStores)([s.default], () => s.default.getFetchError())
        },
        422671: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                useSafetyHubInitialized: function() {
                    return i
                }
            });
            var n = a("446674"),
                s = a("646356");

            function i() {
                let t = (0, n.useStateFromStores)([s.default], () => s.default.isInitialized());
                return t
            }
        },
        792105: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return i
                }
            });
            var n = a("446674"),
                s = a("646356");

            function i() {
                let t = (0, n.useStateFromStores)([s.default], () => s.default.isFetching());
                return t
            }
        },
        133479: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return f
                }
            }), a("222007");
            var n = a("37983"),
                s = a("884691"),
                i = a("917351"),
                r = a("446674"),
                l = a("669491"),
                c = a("891128"),
                u = a("165984"),
                o = a("505088"),
                S = a("77078"),
                E = a("697218"),
                _ = a("908539"),
                A = a("132206"),
                d = a("260883"),
                I = a("170213"),
                T = a("782340"),
                N = a("122698");

            function f() {
                let t = (0, A.useSafetyHubAccountStanding)(),
                    e = (0, r.useStateFromStores)([E.default], () => E.default.getCurrentUser()),
                    [a, f] = s.useState(36),
                    C = s.useRef({
                        [_.AccountStandingState.ALL_GOOD]: null,
                        [_.AccountStandingState.LIMITED]: null,
                        [_.AccountStandingState.VERY_LIMITED]: null,
                        [_.AccountStandingState.AT_RISK]: null,
                        [_.AccountStandingState.SUSPENDED]: null
                    }),
                    O = s.useCallback(() => {
                        let t = Math.max(...Object.values(C.current).map(t => {
                            var e;
                            return null !== (e = null == t ? void 0 : t.getBoundingClientRect().height) && void 0 !== e ? e : 36
                        }));
                        f(Math.max(t, 36))
                    }, []);
                s.useEffect(() => {
                    O();
                    let t = (0, i.debounce)(O, 100);
                    window.addEventListener("resize", t)
                }, [O]);
                let g = {
                        [_.AccountStandingState.ALL_GOOD]: {
                            title: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_TITLE,
                            description: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_DESCRIPTION.format({
                                termsOfService: I.SafetyHubLinks.TOS_LINK,
                                communityGuidelines: I.SafetyHubLinks.COMMUNITY_GUIDELINES
                            }),
                            status: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_SHORT,
                            Icon: c.CircleCheckIcon,
                            color: l.default.colors.STATUS_POSITIVE
                        },
                        [_.AccountStandingState.LIMITED]: {
                            title: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_TITLE,
                            description: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_DESCRIPTION,
                            status: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_SHORT,
                            Icon: u.CircleExclamationPointIcon,
                            color: l.default.unsafe_rawColors.YELLOW_260
                        },
                        [_.AccountStandingState.VERY_LIMITED]: {
                            title: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_TITLE,
                            description: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_DESCRIPTION,
                            status: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_SHORT,
                            Icon: u.CircleExclamationPointIcon,
                            color: l.default.unsafe_rawColors.ORANGE_345
                        },
                        [_.AccountStandingState.AT_RISK]: {
                            title: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_TITLE,
                            description: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_DESCRIPTION,
                            status: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_SHORT,
                            Icon: u.CircleExclamationPointIcon,
                            color: l.default.colors.STATUS_DANGER
                        },
                        [_.AccountStandingState.SUSPENDED]: {
                            title: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_TITLE,
                            description: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_DESCRIPTION.format({
                                termsOfService: I.SafetyHubLinks.TOS_LINK,
                                communityGuidelines: I.SafetyHubLinks.COMMUNITY_GUIDELINES
                            }),
                            status: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_SHORT,
                            Icon: o.CircleXIcon,
                            color: l.default.colors.STATUS_DANGER
                        }
                    },
                    {
                        title: L,
                        description: D,
                        color: U,
                        Icon: m
                    } = g[t.state],
                    h = Object.keys(g).length;
                return (0, n.jsxs)(S.Card, {
                    className: N.container,
                    outline: !1,
                    children: [(0, n.jsx)("div", {
                        className: N.profile,
                        children: (0, n.jsx)(d.default, {
                            user: e,
                            size: S.AvatarSizes.SIZE_80
                        })
                    }), (0, n.jsxs)("div", {
                        className: N.status,
                        children: [(0, n.jsxs)("div", {
                            className: N.title,
                            children: [(0, n.jsx)(S.Heading, {
                                color: "header-primary",
                                variant: "heading-lg/normal",
                                children: L.format({
                                    hook: t => (0, n.jsx)(S.Text, {
                                        style: {
                                            color: U.css
                                        },
                                        variant: "heading-lg/bold",
                                        tag: "span",
                                        children: t
                                    })
                                })
                            }), (0, n.jsx)(S.Text, {
                                color: "interactive-normal",
                                variant: "text-xs/normal",
                                children: D
                            })]
                        }), (0, n.jsxs)("div", {
                            className: N.health,
                            style: {
                                height: a
                            },
                            children: [(0, n.jsx)("div", {
                                className: N.line
                            }), Object.entries(g).map((e, a) => {
                                let [s, i] = e, r = parseInt(s) === t.state;
                                return (0, n.jsxs)("div", {
                                    className: N.statusOption,
                                    ref: t => C.current[parseInt(s)] = t,
                                    children: [r ? (0, n.jsx)(m, {
                                        className: N.marker,
                                        color: i.color
                                    }) : (0, n.jsx)("div", {
                                        className: N.marker,
                                        style: {
                                            marginLeft: 0 === a ? -6 : 0,
                                            marginRight: a === h - 1 ? -6 : 0
                                        },
                                        children: (0, n.jsx)("div", {
                                            className: N.empty
                                        })
                                    }), i.status.format({
                                        hook: t => {
                                            let e = {
                                                color: "interactive-normal",
                                                variant: "text-xs/normal"
                                            };
                                            return r && (e = {
                                                style: {
                                                    color: i.color.css
                                                },
                                                variant: "text-xs/bold"
                                            }), (0, n.jsx)(S.Text, {
                                                className: N.statusLabel,
                                                ...e,
                                                children: t
                                            })
                                        }
                                    })]
                                }, a)
                            })]
                        })]
                    })]
                })
            }
        },
        260883: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return l
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("77078"),
                i = a("130479"),
                r = a("53708");

            function l(t) {
                let {
                    user: e,
                    size: a
                } = t, l = (0, s.getAvatarSpecs)(a), c = null != e ? e.getAvatarURL(null, l.size) : r;
                return (0, n.jsx)("div", {
                    className: i.avatarBackground,
                    children: (0, n.jsx)("div", {
                        className: i.avatar,
                        style: {
                            width: l.size,
                            height: l.size
                        },
                        children: (0, n.jsx)(s.Avatar, {
                            src: c,
                            "aria-hidden": !0,
                            size: a
                        })
                    })
                })
            }
        },
        861348: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return C
                }
            });
            var n = a("37983"),
                s = a("884691"),
                i = a("432710"),
                r = a("77078"),
                l = a("155084"),
                c = a("489622"),
                u = a("599110"),
                o = a("781324"),
                S = a("132206"),
                E = a("333781"),
                _ = a("422671"),
                A = a("792105"),
                d = a("133479"),
                I = a("966677"),
                T = a("49111"),
                N = a("782340"),
                f = a("302713");

            function C() {
                let t = (0, A.default)(),
                    e = (0, _.useSafetyHubInitialized)(),
                    a = (0, S.useSafetyHubAccountStanding)(),
                    C = (0, E.useSafetyHubFetchError)();
                return (s.useEffect(() => {
                    o.getSafetyHubData()
                }, []), s.useEffect(() => {
                    e && (u.default.track(T.AnalyticEvents.SAFETY_HUB_VIEWED, {
                        account_standing: a.state
                    }), l.default.increment({
                        name: i.MetricEvents.SAFETY_HUB_VIEW
                    }))
                }, [e]), t) ? (0, n.jsx)("div", {
                    children: (0, n.jsx)(r.Spinner, {})
                }) : null != C ? (0, n.jsxs)(c.default, {
                    color: c.NoticeColors.DANGER,
                    className: f.nagbar,
                    children: [N.default.Messages.SAFETY_HUB_ERROR_MESSAGE, (0, n.jsx)(c.NoticeButton, {
                        onClick: () => o.getSafetyHubData(),
                        children: N.default.Messages.SAFETY_HUB_ERROR_ACTION_BUTTON
                    })]
                }) : (0, n.jsxs)("div", {
                    className: f.container,
                    children: [(0, n.jsx)(d.default, {}), (0, n.jsx)(I.ConnectedSafetyHubViolationsContainer, {})]
                })
            }
        },
        966677: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                ConnectedSafetyHubViolationsContainer: function() {
                    return h
                }
            }), a("222007");
            var n = a("37983"),
                s = a("884691"),
                i = a("779807"),
                r = a("77078"),
                l = a("461380"),
                c = a("543289"),
                u = a("300113"),
                o = a("599110"),
                S = a("299039"),
                E = a("736393"),
                _ = a("310888"),
                A = a("132206"),
                d = a("698609"),
                I = a("170213"),
                T = a("49111"),
                N = a("782340"),
                f = a("231180");
            let C = t => {
                    let {
                        status: e,
                        onClick: a,
                        opened: s,
                        count: c
                    } = t;
                    return (0, n.jsxs)(r.Clickable, {
                        className: f.header,
                        onClick: a,
                        children: [(0, n.jsx)("div", {
                            className: f.headerIconWrapper,
                            children: (0, n.jsx)(i.WarningIcon, {
                                color: "active" === e ? r.tokens.colors.INTERACTIVE_ACTIVE : r.tokens.colors.INTERACTIVE_MUTED,
                                width: 16,
                                height: 16
                            })
                        }), (0, n.jsxs)("div", {
                            className: f.title,
                            children: [(0, n.jsx)(r.Heading, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: "active" === e ? N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_ACTIVE.format({
                                    count: c.toString()
                                }) : N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_EXPIRED.format({
                                    count: c.toString()
                                })
                            }), (0, n.jsx)(r.Heading, {
                                variant: "text-sm/medium",
                                color: "header-muted",
                                children: "active" === e ? N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_ACTIVE : N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_EXPIRED
                            })]
                        }), (0, n.jsx)("div", {
                            className: f.caret,
                            children: (0, n.jsx)(l.default, {
                                width: 18,
                                height: 18,
                                direction: s ? l.default.Directions.UP : l.default.Directions.DOWN
                            })
                        })]
                    })
                },
                O = () => (0, n.jsxs)("div", {
                    className: f.emptyState,
                    children: [(0, n.jsxs)("div", {
                        className: f.iconContainer,
                        children: [(0, n.jsx)("div", {
                            className: f.iconBackground,
                            children: (0, n.jsx)(u.default, {
                                className: f.icon
                            })
                        }), (0, n.jsx)(c.default, {
                            className: f.stars
                        })]
                    }), (0, n.jsx)(r.Heading, {
                        variant: "heading-md/bold",
                        className: f.emptyStateText,
                        children: N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_ACTIVE
                    }), (0, n.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        className: f.emptyStateSubtext,
                        children: N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_SUBTEXT_ACTIVE
                    })]
                }),
                g = () => (0, n.jsx)("div", {
                    className: f.emptyState,
                    children: (0, n.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        className: f.emptyStateSubtext,
                        children: N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_EXPIRED
                    })
                }),
                L = t => {
                    let {
                        timestamp: e
                    } = t;
                    return (0, n.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        className: f.timestamp,
                        children: (0, E.getClassificationRelativeIncidentTime)(e)
                    })
                },
                D = () => (0, n.jsx)(r.Text, {
                    variant: "text-xs/bold",
                    className: f.newBadge,
                    children: N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_NEW
                }),
                U = t => {
                    let {
                        classification: e
                    } = t, {
                        id: s,
                        description: i,
                        max_expiration_time: l
                    } = e, c = S.default.extractTimestamp(s), u = (0, _.useIsNewClassification)(e), o = new Date(l), E = o.toDateString();
                    return (0, n.jsx)(r.Clickable, {
                        onClick: () => {
                            (0, r.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await a.el("825138").then(a.bind(a, "825138"));
                                return e => (0, n.jsx)(t, {
                                    classificationId: s,
                                    source: I.SafetyHubAnalyticsActionSource.StandingTab,
                                    ...e
                                })
                            })
                        },
                        className: [u ? f.itemDetailNew : "", f.itemDetail].join(" "),
                        children: (0, n.jsxs)("div", {
                            className: f.descriptionContainer,
                            children: [u ? (0, n.jsx)(D, {}) : (0, n.jsx)(L, {
                                timestamp: c
                            }), (0, n.jsx)(r.Heading, {
                                variant: "heading-lg/normal",
                                children: N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION.format({
                                    description: i,
                                    descriptionHook: t => (0, n.jsx)(r.Text, {
                                        tag: "span",
                                        variant: "heading-lg/bold",
                                        children: t
                                    })
                                })
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                className: f.expirationDate,
                                children: o > new Date ? N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_ACTIVE.format({
                                    expirationDate: E
                                }) : N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_EXPIRED.format({
                                    expirationDate: E
                                })
                            })]
                        })
                    }, s)
                },
                m = t => {
                    let {
                        status: e,
                        classifications: a
                    } = t, [i, l] = s.useState(!1), [c, u] = s.useState(3), S = (0, A.useSafetyHubAccountStanding)(), E = s.useMemo(() => a.slice(0, c), [a, c]);
                    s.useEffect(() => {
                        i && o.default.track(T.AnalyticEvents.SAFETY_HUB_ACTION, {
                            action: I.SafetyHubAnalyticsActions.ViewViolationsDropdown,
                            account_standing: S.state,
                            classification_ids: E.map(t => Number(t.id)),
                            source: I.SafetyHubAnalyticsActionSource.StandingTab
                        })
                    }, [i, S.state, E]);
                    let _ = a.length - E.length > 3 ? 3 : a.length - E.length;
                    return (0, n.jsxs)("div", {
                        className: f.dropdown,
                        children: [(0, n.jsx)(C, {
                            status: e,
                            onClick: () => l(t => !t),
                            opened: i,
                            count: a.length
                        }), i && (0, n.jsxs)("div", {
                            className: f.items,
                            children: [(0, n.jsx)(r.TabBar.Separator, {
                                style: {
                                    height: "1px",
                                    width: "100%"
                                }
                            }), E.length > 0 && E.map(t => (0, n.jsx)(U, {
                                classification: t
                            }, t.id)), E.length < a.length && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(r.TabBar.Separator, {
                                    style: {
                                        height: "1px",
                                        width: "100%"
                                    }
                                }), (0, n.jsx)("button", {
                                    className: f.paginationButton,
                                    onClick: () => u(t => t + _),
                                    children: N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_PAGINATION_BUTTON.format({
                                        nextPageSize: _
                                    })
                                })]
                            }), 0 === E.length && "active" === e && (0, n.jsx)(O, {}), 0 === E.length && "expired" === e && (0, n.jsx)(g, {})]
                        })]
                    })
                },
                h = () => {
                    let t = (0, d.useActiveSafetyHubClassifications)(),
                        e = (0, d.useExpiredSafetyHubClassifications)();
                    return 0 === t.length && 0 === e.length ? null : (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(m, {
                            status: "active",
                            classifications: t
                        }), (0, n.jsx)(m, {
                            status: "expired",
                            classifications: e
                        })]
                    })
                }
        }
    }
]);