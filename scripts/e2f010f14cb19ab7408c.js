(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["62498"], {
        60266: function(t, e, a) {
            t.exports = function(t, e, a, n) {
                for (var s = -1, i = null == t ? 0 : t.length; ++s < i;) {
                    var l = t[s];
                    e(n, l, a(l), t)
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
                l = a("725502");
            t.exports = function(t, e) {
                return function(a, r) {
                    var c = l(a) ? n : s,
                        u = e ? e() : {};
                    return c(a, t, i(r, 2), u)
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
                    return r
                },
                getSafetyHubDataForClassification: function() {
                    return c
                }
            });
            var n = a("872717"),
                s = a("913144"),
                i = a("234998"),
                l = a("49111");
            async function r() {
                s.default.dispatch({
                    type: "SAFETY_HUB_FETCH_START"
                }), await n.default.get({
                    url: l.Endpoints.SAFETY_HUB
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
                    url: l.Endpoints.SAFETY_HUB
                }).then(e => {
                    let {
                        body: a
                    } = e, {
                        classifications: n,
                        account_standing: l,
                        is_dsa_eligible: r
                    } = a, c = n.find(e => e.id === t);
                    if (null != c) {
                        if (null != c.flagged_content && c.flagged_content.length > 0) {
                            let t = c.flagged_content[0];
                            t.attachments.forEach(t => (0, i.setMessageAttachmentDimensions)(t))
                        }
                        s.default.dispatch({
                            type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                            classification: c,
                            accountStanding: l,
                            isDsaEligible: r
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
                            t.width = s.DEFAULT_MEDIA_MAX_WIDTH, t.height = s.DEFAULT_MEDIA_MAX_HEIGHT
                        })
                    }
                } else if ((0, n.isVideoFile)(t.filename)) {
                    let e = document.createElement("video");
                    e.src = t.url, e.onloadedmetadata = () => {
                        let a = e.videoWidth,
                            n = e.videoHeight;
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
                            t.width = s.DEFAULT_MEDIA_MAX_WIDTH, t.height = s.DEFAULT_MEDIA_MAX_HEIGHT
                        })
                    }
                }
            }
        },
        908539: function(t, e, a) {
            "use strict";
            var n, s, i, l, r, c, u, o, S, E;
            a.r(e), a.d(e, {
                AccountStandingState: function() {
                    return l
                },
                ClassificationRequestState: function() {
                    return r
                }
            }), (c = n || (n = {}))[c.REVIEW_PENDING = 1] = "REVIEW_PENDING", c[c.CLASSIFICATION_UPHELD = 2] = "CLASSIFICATION_UPHELD", c[c.CLASSIFICATION_INVALIDATED = 3] = "CLASSIFICATION_INVALIDATED", (u = s || (s = {}))[u.UNSPECIFIED = 0] = "UNSPECIFIED", u[u.UNKNOWN = 1] = "UNKNOWN", u[u.UNSOLICITED_PORNOGRAPHY = 100] = "UNSOLICITED_PORNOGRAPHY", u[u.NONCONSENSUAL_PORNOGRAPHY = 200] = "NONCONSENSUAL_PORNOGRAPHY", u[u.GLORIFYING_VIOLENCE = 210] = "GLORIFYING_VIOLENCE", u[u.HATE_SPEECH = 220] = "HATE_SPEECH", u[u.CRACKED_ACCOUNTS = 230] = "CRACKED_ACCOUNTS", u[u.ILLICIT_GOODS = 240] = "ILLICIT_GOODS", u[u.SOCIAL_ENGINEERING = 250] = "SOCIAL_ENGINEERING", u[u.TEST_CLASSIFICATION = 9e3] = "TEST_CLASSIFICATION", u[u.TEST_CLASSIFICATION_LOW = 9001] = "TEST_CLASSIFICATION_LOW", u[u.TEST_CLASSIFICATION_SEVERE = 9002] = "TEST_CLASSIFICATION_SEVERE", (o = i || (i = {}))[o.BAN = 0] = "BAN", o[o.TEMP_BAN = 1] = "TEMP_BAN", o[o.GLOBAL_QUARANTINE = 2] = "GLOBAL_QUARANTINE", o[o.REQUIRE_VERIFICATION = 3] = "REQUIRE_VERIFICATION", o[o.USER_WARNING = 4] = "USER_WARNING", o[o.USER_SPAMMER = 5] = "USER_SPAMMER", o[o.CHANNEL_SPAM = 6] = "CHANNEL_SPAM", o[o.MESSAGE_SPAM = 7] = "MESSAGE_SPAM", o[o.DISABLE_SUSPICIOUS_ACTIVITY = 8] = "DISABLE_SUSPICIOUS_ACTIVITY", o[o.LIMITED_ACCESS = 9] = "LIMITED_ACCESS", o[o.CHANNEL_SCHEDULE_DELETE = 10] = "CHANNEL_SCHEDULE_DELETE", o[o.MESSAGE_CONTENT_REMOVAL = 11] = "MESSAGE_CONTENT_REMOVAL", o[o.GUILD_DISABLE_INVITE = 12] = "GUILD_DISABLE_INVITE", o[o.USER_CONTENT_REMOVAL = 13] = "USER_CONTENT_REMOVAL", o[o.USER_USERNAME_MANGLE = 14] = "USER_USERNAME_MANGLE", o[o.GUILD_LIMITED_ACCESS = 15] = "GUILD_LIMITED_ACCESS", o[o.USER_MESSAGE_REMOVAL = 16] = "USER_MESSAGE_REMOVAL", (S = l || (l = {}))[S.ALL_GOOD = 100] = "ALL_GOOD", S[S.LIMITED = 200] = "LIMITED", S[S.VERY_LIMITED = 300] = "VERY_LIMITED", S[S.AT_RISK = 400] = "AT_RISK", S[S.SUSPENDED = 500] = "SUSPENDED", (E = r || (r = {}))[E.PENDING = 0] = "PENDING", E[E.SUCCESS = 1] = "SUCCESS", E[E.FAILED = 2] = "FAILED"
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
                l = a("913144"),
                r = a("908539");
            let c = {},
                u = {},
                o = {
                    state: r.AccountStandingState.ALL_GOOD
                },
                S = !1,
                E = !1,
                _ = null,
                d = null,
                A = !1;
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
                    return d
                }
                getIsDsaEligible() {
                    return A
                }
            }
            I.displayName = "SafetyHubStore";
            var T = new I(l.default, {
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
                    u[t.classificationId] = r.ClassificationRequestState.PENDING, S = !0
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(t) {
                    let {
                        classification: e,
                        accountStanding: a,
                        isDsaEligible: n
                    } = t;
                    c[e.id] = e, u[e.id] = r.ClassificationRequestState.SUCCESS, o = a, S = !1, _ = null, A = n
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(t) {
                    let {
                        error: e,
                        classificationId: a
                    } = t;
                    S = !1, _ = e, u[a] = r.ClassificationRequestState.FAILED
                },
                SAFETY_HUB_APPEAL_OPEN: function(t) {
                    let {
                        classificationId: e
                    } = t;
                    d = e
                },
                SAFETY_HUB_APPEAL_CLOSE: function() {
                    d = null
                },
                LOGOUT: function() {
                    S = !1, c = {}, o = {
                        state: r.AccountStandingState.ALL_GOOD
                    }, d = null
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
                l = a("781324"),
                r = a("646356");

            function c() {
                let t = (0, s.useStateFromStoresArray)([r.default], () => r.default.getClassifications());
                return t.sort((t, e) => i.default.extractTimestamp(e.id) - i.default.extractTimestamp(t.id))
            }

            function u(t) {
                let e = (0, s.useStateFromStores)([r.default], () => r.default.getClassification(t)),
                    a = (0, s.useStateFromStores)([r.default], () => r.default.getClassificationRequestState(t)),
                    i = (0, s.useStateFromStores)([r.default], () => r.default.getIsDsaEligible());
                return n.useEffect(() => {
                    void 0 === e && null == a && l.getSafetyHubDataForClassification(t)
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
                l = a("446674"),
                r = a("669491"),
                c = a("891128"),
                u = a("165984"),
                o = a("505088"),
                S = a("77078"),
                E = a("697218"),
                _ = a("908539"),
                d = a("132206"),
                A = a("260883"),
                I = a("170213"),
                T = a("782340"),
                N = a("122698");

            function f() {
                let t = (0, d.useSafetyHubAccountStanding)(),
                    e = (0, l.useStateFromStores)([E.default], () => E.default.getCurrentUser()),
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
                            color: r.default.colors.STATUS_POSITIVE
                        },
                        [_.AccountStandingState.LIMITED]: {
                            title: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_TITLE,
                            description: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_DESCRIPTION,
                            status: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_SHORT,
                            Icon: u.CircleExclamationPointIcon,
                            color: r.default.colors.STATUS_WARNING
                        },
                        [_.AccountStandingState.VERY_LIMITED]: {
                            title: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_TITLE,
                            description: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_DESCRIPTION,
                            status: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_SHORT,
                            Icon: u.CircleExclamationPointIcon,
                            color: r.default.unsafe_rawColors.ORANGE_345
                        },
                        [_.AccountStandingState.AT_RISK]: {
                            title: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_TITLE,
                            description: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_DESCRIPTION,
                            status: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_SHORT,
                            Icon: u.CircleExclamationPointIcon,
                            color: r.default.colors.STATUS_DANGER
                        },
                        [_.AccountStandingState.SUSPENDED]: {
                            title: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_TITLE,
                            description: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_DESCRIPTION.format({
                                termsOfService: I.SafetyHubLinks.TOS_LINK,
                                communityGuidelines: I.SafetyHubLinks.COMMUNITY_GUIDELINES
                            }),
                            status: T.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_SHORT,
                            Icon: o.CircleXIcon,
                            color: r.default.colors.ICON_MUTED
                        }
                    },
                    {
                        title: D,
                        description: m,
                        color: h,
                        Icon: L
                    } = g[t.state],
                    U = Object.keys(g).length;
                return (0, n.jsxs)(S.Card, {
                    className: N.container,
                    outline: !1,
                    children: [(0, n.jsx)("div", {
                        className: N.profile,
                        children: (0, n.jsx)(A.default, {
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
                                children: D.format({
                                    hook: t => (0, n.jsx)(S.Text, {
                                        style: {
                                            color: h.css
                                        },
                                        variant: "heading-lg/bold",
                                        tag: "span",
                                        children: t
                                    })
                                })
                            }), (0, n.jsx)(S.Text, {
                                color: "text-normal",
                                variant: "text-sm/normal",
                                children: m
                            })]
                        }), (0, n.jsxs)("div", {
                            className: N.health,
                            style: {
                                height: a
                            },
                            children: [(0, n.jsx)("div", {
                                className: N.line
                            }), Object.entries(g).map((e, a) => {
                                let [s, i] = e, l = parseInt(s) === t.state;
                                return (0, n.jsxs)("div", {
                                    className: N.statusOption,
                                    ref: t => C.current[parseInt(s)] = t,
                                    children: [l ? (0, n.jsx)(L, {
                                        className: N.marker,
                                        color: i.color
                                    }) : (0, n.jsx)("div", {
                                        className: N.marker,
                                        style: {
                                            marginLeft: 0 === a ? -6 : 0,
                                            marginRight: a === U - 1 ? -6 : 0
                                        },
                                        children: (0, n.jsx)("div", {
                                            className: N.empty
                                        })
                                    }), i.status.format({
                                        hook: t => (0, n.jsx)(S.Text, {
                                            color: "text-normal",
                                            variant: "text-sm/normal",
                                            className: N.statusLabel,
                                            children: t
                                        })
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
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("77078"),
                i = a("130479"),
                l = a("53708");

            function r(t) {
                let {
                    user: e,
                    size: a
                } = t, r = (0, s.getAvatarSpecs)(a), c = null != e ? e.getAvatarURL(null, r.size) : l;
                return (0, n.jsx)("div", {
                    className: i.avatarBackground,
                    children: (0, n.jsx)("div", {
                        className: i.avatar,
                        style: {
                            width: r.size,
                            height: r.size
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
                l = a("77078"),
                r = a("155084"),
                c = a("489622"),
                u = a("599110"),
                o = a("781324"),
                S = a("132206"),
                E = a("333781"),
                _ = a("422671"),
                d = a("792105"),
                A = a("133479"),
                I = a("966677"),
                T = a("49111"),
                N = a("782340"),
                f = a("302713");

            function C() {
                let t = (0, d.default)(),
                    e = (0, _.useSafetyHubInitialized)(),
                    a = (0, S.useSafetyHubAccountStanding)(),
                    C = (0, E.useSafetyHubFetchError)();
                return (s.useEffect(() => {
                    o.getSafetyHubData()
                }, []), s.useEffect(() => {
                    e && (u.default.track(T.AnalyticEvents.SAFETY_HUB_VIEWED, {
                        account_standing: a.state
                    }), r.default.increment({
                        name: i.MetricEvents.SAFETY_HUB_VIEW
                    }))
                }, [e]), t) ? (0, n.jsx)("div", {
                    children: (0, n.jsx)(l.Spinner, {})
                }) : null != C ? (0, n.jsxs)(c.default, {
                    color: c.NoticeColors.DANGER,
                    className: f.nagbar,
                    children: [N.default.Messages.SAFETY_HUB_ERROR_MESSAGE, (0, n.jsx)(c.NoticeButton, {
                        onClick: () => o.getSafetyHubData(),
                        children: N.default.Messages.SAFETY_HUB_ERROR_ACTION_BUTTON
                    })]
                }) : (0, n.jsxs)("div", {
                    className: f.container,
                    children: [(0, n.jsx)(A.default, {}), (0, n.jsx)(I.ConnectedSafetyHubViolationsContainer, {})]
                })
            }
        },
        966677: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                ConnectedSafetyHubViolationsContainer: function() {
                    return R
                }
            }), a("222007");
            var n = a("37983"),
                s = a("884691"),
                i = a("414456"),
                l = a.n(i),
                r = a("779807"),
                c = a("77078"),
                u = a("461380"),
                o = a("543289"),
                S = a("300113"),
                E = a("599110"),
                _ = a("299039"),
                d = a("736393"),
                A = a("310888"),
                I = a("132206"),
                T = a("698609"),
                N = a("170213"),
                f = a("49111"),
                C = a("782340"),
                O = a("231180");
            let g = t => {
                    let {
                        status: e,
                        onClick: a,
                        opened: s,
                        count: i
                    } = t;
                    return (0, n.jsxs)(c.Clickable, {
                        className: O.header,
                        onClick: a,
                        children: [(0, n.jsx)("div", {
                            className: O.headerIconWrapper,
                            children: (0, n.jsx)(r.WarningIcon, {
                                color: "active" === e ? c.tokens.colors.INTERACTIVE_ACTIVE : c.tokens.colors.INTERACTIVE_MUTED,
                                width: 24,
                                height: 24
                            })
                        }), (0, n.jsxs)("div", {
                            className: O.title,
                            children: [(0, n.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-normal",
                                children: "active" === e ? C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_ACTIVE.format({
                                    count: i.toString()
                                }) : C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_EXPIRED.format({
                                    count: i.toString()
                                })
                            }), (0, n.jsx)(c.Heading, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: "active" === e ? C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_ACTIVE : C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_EXPIRED
                            })]
                        }), (0, n.jsx)("div", {
                            className: O.caret,
                            children: (0, n.jsx)(u.default, {
                                width: 18,
                                height: 18,
                                direction: s ? u.default.Directions.UP : u.default.Directions.DOWN
                            })
                        })]
                    })
                },
                D = () => (0, n.jsxs)("div", {
                    className: O.emptyState,
                    children: [(0, n.jsxs)("div", {
                        className: O.iconContainer,
                        children: [(0, n.jsx)("div", {
                            className: O.iconBackground,
                            children: (0, n.jsx)(S.default, {
                                className: O.icon
                            })
                        }), (0, n.jsx)(o.default, {
                            className: O.stars
                        })]
                    }), (0, n.jsx)(c.Heading, {
                        variant: "heading-md/bold",
                        className: O.emptyStateText,
                        children: C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_ACTIVE
                    }), (0, n.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: O.emptyStateSubtext,
                        children: C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_SUBTEXT_ACTIVE
                    })]
                }),
                m = () => (0, n.jsx)("div", {
                    className: O.emptyState,
                    children: (0, n.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: O.emptyStateSubtext,
                        children: C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_EXPIRED
                    })
                }),
                h = t => {
                    let {
                        timestamp: e
                    } = t;
                    return (0, n.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: O.timestamp,
                        children: (0, d.getClassificationRelativeIncidentTime)(e)
                    })
                },
                L = () => (0, n.jsx)(c.Text, {
                    variant: "text-xs/bold",
                    className: O.newBadge,
                    children: C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_NEW
                }),
                U = t => {
                    let {
                        classification: e
                    } = t, {
                        id: s,
                        description: i,
                        max_expiration_time: r
                    } = e, u = _.default.extractTimestamp(s), o = (0, A.useIsNewClassification)(e), S = new Date(r), E = S.toDateString();
                    return (0, n.jsx)(c.Clickable, {
                        onClick: () => {
                            (0, c.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await a.el("825138").then(a.bind(a, "825138"));
                                return e => (0, n.jsx)(t, {
                                    classificationId: s,
                                    source: N.SafetyHubAnalyticsActionSource.StandingTab,
                                    ...e
                                })
                            })
                        },
                        className: l(O.itemDetail, {
                            [O.itemDetailNew]: o
                        }),
                        children: (0, n.jsxs)("div", {
                            className: O.descriptionContainer,
                            children: [o ? (0, n.jsx)(L, {}) : (0, n.jsx)(h, {
                                timestamp: u
                            }), (0, n.jsx)(c.Heading, {
                                variant: "heading-lg/normal",
                                children: C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION.format({
                                    description: i,
                                    descriptionHook: t => (0, n.jsx)(c.Text, {
                                        tag: "span",
                                        variant: "heading-lg/bold",
                                        children: t
                                    })
                                })
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                className: O.expirationDate,
                                children: S > new Date ? C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_ACTIVE.format({
                                    expirationDate: E
                                }) : C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_EXPIRED.format({
                                    expirationDate: E
                                })
                            })]
                        })
                    }, s)
                },
                H = t => {
                    let {
                        status: e,
                        classifications: a
                    } = t, [i, l] = s.useState(!1), [r, u] = s.useState(3), o = (0, I.useSafetyHubAccountStanding)(), S = s.useMemo(() => a.slice(0, r), [a, r]);
                    s.useEffect(() => {
                        i && E.default.track(f.AnalyticEvents.SAFETY_HUB_ACTION, {
                            action: N.SafetyHubAnalyticsActions.ViewViolationsDropdown,
                            account_standing: o.state,
                            classification_ids: S.map(t => Number(t.id)),
                            source: N.SafetyHubAnalyticsActionSource.StandingTab
                        })
                    }, [i, o.state, S]);
                    let _ = a.length - S.length > 3 ? 3 : a.length - S.length;
                    return (0, n.jsxs)("div", {
                        className: O.dropdown,
                        children: [(0, n.jsx)(g, {
                            status: e,
                            onClick: () => l(t => !t),
                            opened: i,
                            count: a.length
                        }), i && (0, n.jsxs)("div", {
                            className: O.items,
                            children: [(0, n.jsx)(c.TabBar.Separator, {
                                style: {
                                    height: "1px",
                                    width: "100%"
                                }
                            }), S.length > 0 && S.map(t => (0, n.jsx)(U, {
                                classification: t
                            }, t.id)), S.length < a.length && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(c.TabBar.Separator, {
                                    style: {
                                        height: "1px",
                                        width: "100%"
                                    }
                                }), (0, n.jsx)("button", {
                                    className: O.paginationButton,
                                    onClick: () => u(t => t + _),
                                    children: C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_PAGINATION_BUTTON.format({
                                        nextPageSize: _
                                    })
                                })]
                            }), 0 === S.length && "active" === e && (0, n.jsx)(D, {}), 0 === S.length && "expired" === e && (0, n.jsx)(m, {})]
                        })]
                    })
                },
                R = () => {
                    let t = (0, T.useActiveSafetyHubClassifications)(),
                        e = (0, T.useExpiredSafetyHubClassifications)();
                    return 0 === t.length && 0 === e.length ? null : (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(H, {
                            status: "active",
                            classifications: t
                        }), (0, n.jsx)(H, {
                            status: "expired",
                            classifications: e
                        })]
                    })
                }
        }
    }
]);