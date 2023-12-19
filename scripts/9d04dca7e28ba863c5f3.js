(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["33533"], {
        60266: function(t, e, n) {
            t.exports = function(t, e, n, i) {
                for (var a = -1, s = null == t ? 0 : t.length; ++a < s;) {
                    var l = t[a];
                    e(i, l, n(l), t)
                }
                return i
            }
        },
        581628: function(t, e, n) {
            var i = n("978603");
            t.exports = function(t, e, n, a) {
                return i(t, function(t, i, s) {
                    e(a, t, n(t), s)
                }), a
            }
        },
        278296: function(t, e, n) {
            var i = n("60266"),
                a = n("581628"),
                s = n("698273"),
                l = n("725502");
            t.exports = function(t, e) {
                return function(n, o) {
                    var c = l(n) ? i : a,
                        r = e ? e() : {};
                    return c(n, t, s(o, 2), r)
                }
            }
        },
        816494: function(t, e, n) {
            var i = n("766665"),
                a = n("278296")(function(t, e, n) {
                    i(t, n, e)
                });
            t.exports = a
        },
        49155: function(t, e, n) {
            "use strict";
            t.exports = n.p + "495fd0002d30e7c7e4f5.png"
        },
        167338: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ChatAlertIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let l = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M12.03 21.5c-.05.28-.27.5-.54.5H2.2a1 1 0 0 1-.75-1.66l2.06-2.37a.52.52 0 0 0 .04-.61 10 10 0 1 1 18.32-3.77c-.01.12-.17.14-.22.04a3.06 3.06 0 0 0-5.3 0l-3.95 6.9c-.19.32-.3.65-.37.98Z",
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M18.09 14.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.93 1.93 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        426383: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ChevronLargeRightIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let l = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = t;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M8.3 3.3a1 1 0 0 0 0 1.4l7.29 7.3-7.3 7.3a1 1 0 1 0 1.42 1.4l8-8a1 1 0 0 0 0-1.4l-8-8a1 1 0 0 0-1.42 0Z",
                        className: o
                    })
                })
            }
        },
        803027: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                CloseSmallIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let l = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = t;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z",
                        className: o
                    })
                })
            }
        },
        781324: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getSafetyHubData: function() {
                    return l
                },
                getSafetyHubDataForClassification: function() {
                    return o
                }
            });
            var i = n("872717"),
                a = n("913144"),
                s = n("49111");
            async function l() {
                a.default.dispatch({
                    type: "SAFETY_HUB_FETCH_START"
                }), await i.default.get({
                    url: s.Endpoints.SAFETY_HUB
                }).then(t => {
                    let {
                        body: e
                    } = t, {
                        classifications: n,
                        account_standing: i
                    } = e;
                    a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_SUCCESS",
                        classifications: n,
                        accountStanding: i
                    })
                }).catch(t => {
                    var e, n;
                    a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_FAILURE",
                        error: null !== (n = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== n ? n : "Unknown error"
                    })
                })
            }
            async function o(t) {
                a.default.dispatch({
                    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
                    classificationId: t
                }), await i.default.get({
                    url: s.Endpoints.SAFETY_HUB
                }).then(e => {
                    let {
                        body: n
                    } = e, {
                        classifications: i,
                        account_standing: s,
                        is_dsa_eligible: l
                    } = n, o = i.find(e => e.id === t);
                    null != o ? a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                        classification: o,
                        accountStanding: s,
                        isDsaEligible: l
                    }) : a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                        error: "Classification not found.",
                        classificationId: t
                    })
                }).catch(e => {
                    var n, i;
                    a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                        error: null !== (i = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : "Unknown error",
                        classificationId: t
                    })
                })
            }
        },
        908539: function(t, e, n) {
            "use strict";
            var i, a, s, l, o, c, r, u, A, S;
            n.r(e), n.d(e, {
                ActionType: function() {
                    return s
                },
                AccountStandingState: function() {
                    return l
                },
                ClassificationRequestState: function() {
                    return o
                }
            }), (c = i || (i = {}))[c.REVIEW_PENDING = 1] = "REVIEW_PENDING", c[c.CLASSIFICATION_UPHELD = 2] = "CLASSIFICATION_UPHELD", c[c.CLASSIFICATION_INVALIDATED = 3] = "CLASSIFICATION_INVALIDATED", (r = a || (a = {}))[r.UNSPECIFIED = 0] = "UNSPECIFIED", r[r.UNKNOWN = 1] = "UNKNOWN", r[r.UNSOLICITED_PORNOGRAPHY = 100] = "UNSOLICITED_PORNOGRAPHY", r[r.NONCONSENSUAL_PORNOGRAPHY = 200] = "NONCONSENSUAL_PORNOGRAPHY", r[r.GLORIFYING_VIOLENCE = 210] = "GLORIFYING_VIOLENCE", r[r.HATE_SPEECH = 220] = "HATE_SPEECH", r[r.CRACKED_ACCOUNTS = 230] = "CRACKED_ACCOUNTS", r[r.ILLICIT_GOODS = 240] = "ILLICIT_GOODS", r[r.SOCIAL_ENGINEERING = 250] = "SOCIAL_ENGINEERING", r[r.TEST_CLASSIFICATION = 9e3] = "TEST_CLASSIFICATION", r[r.TEST_CLASSIFICATION_LOW = 9001] = "TEST_CLASSIFICATION_LOW", r[r.TEST_CLASSIFICATION_SEVERE = 9002] = "TEST_CLASSIFICATION_SEVERE", (u = s || (s = {}))[u.BAN = 0] = "BAN", u[u.TEMP_BAN = 1] = "TEMP_BAN", u[u.GLOBAL_QUARANTINE = 2] = "GLOBAL_QUARANTINE", u[u.REQUIRE_VERIFICATION = 3] = "REQUIRE_VERIFICATION", u[u.USER_WARNING = 4] = "USER_WARNING", u[u.USER_SPAMMER = 5] = "USER_SPAMMER", u[u.CHANNEL_SPAM = 6] = "CHANNEL_SPAM", u[u.MESSAGE_SPAM = 7] = "MESSAGE_SPAM", u[u.DISABLE_SUSPICIOUS_ACTIVITY = 8] = "DISABLE_SUSPICIOUS_ACTIVITY", u[u.LIMITED_ACCESS = 9] = "LIMITED_ACCESS", u[u.CHANNEL_SCHEDULE_DELETE = 10] = "CHANNEL_SCHEDULE_DELETE", u[u.MESSAGE_CONTENT_REMOVAL = 11] = "MESSAGE_CONTENT_REMOVAL", u[u.GUILD_DISABLE_INVITE = 12] = "GUILD_DISABLE_INVITE", u[u.USER_CONTENT_REMOVAL = 13] = "USER_CONTENT_REMOVAL", u[u.USER_USERNAME_MANGLE = 14] = "USER_USERNAME_MANGLE", u[u.GUILD_LIMITED_ACCESS = 15] = "GUILD_LIMITED_ACCESS", u[u.USER_MESSAGE_REMOVAL = 16] = "USER_MESSAGE_REMOVAL", (A = l || (l = {}))[A.ALL_GOOD = 100] = "ALL_GOOD", A[A.LIMITED = 200] = "LIMITED", A[A.VERY_LIMITED = 300] = "VERY_LIMITED", A[A.AT_RISK = 400] = "AT_RISK", A[A.SUSPENDED = 500] = "SUSPENDED", (S = o || (o = {}))[S.PENDING = 0] = "PENDING", S[S.SUCCESS = 1] = "SUCCESS", S[S.FAILED = 2] = "FAILED"
        },
        646356: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var i = n("816494"),
                a = n.n(i),
                s = n("446674"),
                l = n("913144"),
                o = n("908539");
            let c = {},
                r = {},
                u = {
                    state: o.AccountStandingState.ALL_GOOD
                },
                A = !1,
                S = !1,
                d = null,
                E = null,
                I = !1;
            class _ extends s.default.Store {
                isFetching() {
                    return A
                }
                getClassifications() {
                    return Object.values(c)
                }
                getClassification(t) {
                    return c[t]
                }
                getAccountStanding() {
                    return u
                }
                getFetchError() {
                    return d
                }
                isInitialized() {
                    return S
                }
                getClassificationRequestState(t) {
                    return r[t]
                }
                getAppealClassificationId() {
                    return E
                }
                getIsDsaEligible() {
                    return I
                }
            }
            _.displayName = "SafetyHubStore";
            var f = new _(l.default, {
                SAFETY_HUB_FETCH_START: function(t) {
                    A = !0
                },
                SAFETY_HUB_FETCH_SUCCESS: function(t) {
                    let {
                        classifications: e,
                        accountStanding: n
                    } = t;
                    c = a(e, "id"), u = n, A = !1, S = !0, d = null
                },
                SAFETY_HUB_FETCH_FAILURE: function(t) {
                    let {
                        error: e
                    } = t;
                    A = !1, S = !1, d = e
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_START: function(t) {
                    r[t.classificationId] = o.ClassificationRequestState.PENDING, A = !0
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(t) {
                    let {
                        classification: e,
                        accountStanding: n,
                        isDsaEligible: i
                    } = t;
                    c[e.id] = e, r[e.id] = o.ClassificationRequestState.SUCCESS, u = n, A = !1, d = null, I = i
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(t) {
                    let {
                        error: e,
                        classificationId: n
                    } = t;
                    A = !1, d = e, r[n] = o.ClassificationRequestState.FAILED
                },
                SAFETY_HUB_APPEAL_OPEN: function(t) {
                    let {
                        classificationId: e
                    } = t;
                    E = e
                },
                SAFETY_HUB_APPEAL_CLOSE: function() {
                    E = null
                },
                LOGOUT: function() {
                    A = !1, c = {}, u = {
                        state: o.AccountStandingState.ALL_GOOD
                    }, E = null
                }
            })
        },
        736393: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getClassificationRelativeIncidentTime: function() {
                    return l
                },
                getAttachmentFilename: function() {
                    return o
                }
            });
            var i = n("866227"),
                a = n.n(i),
                s = n("894488");

            function l(t) {
                return a().to(a(t))
            }

            function o(t) {
                var e;
                return "".concat(s.SPOILER_ATTACHMENT_PREFIX, "_").concat(null !== (e = t.filename) && void 0 !== e ? e : ".png")
            }
        },
        132206: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useSafetyHubAccountStanding: function() {
                    return s
                }
            });
            var i = n("446674"),
                a = n("646356");

            function s() {
                return (0, i.useStateFromStores)([a.default], () => a.default.getAccountStanding())
            }
        },
        698609: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useSafetyHubClassification: function() {
                    return r
                },
                useActiveSafetyHubClassifications: function() {
                    return u
                },
                useExpiredSafetyHubClassifications: function() {
                    return A
                }
            });
            var i = n("884691"),
                a = n("446674"),
                s = n("299039"),
                l = n("781324"),
                o = n("646356");

            function c() {
                let t = (0, a.useStateFromStoresArray)([o.default], () => o.default.getClassifications());
                return t.sort((t, e) => s.default.extractTimestamp(e.id) - s.default.extractTimestamp(t.id))
            }

            function r(t) {
                let e = (0, a.useStateFromStores)([o.default], () => o.default.getClassification(t)),
                    n = (0, a.useStateFromStores)([o.default], () => o.default.getClassificationRequestState(t)),
                    s = (0, a.useStateFromStores)([o.default], () => o.default.getIsDsaEligible());
                return i.useEffect(() => {
                    void 0 === e && null == n && l.getSafetyHubDataForClassification(t)
                }, [t, e, n]), {
                    classification: e,
                    classificationRequestState: n,
                    isDsaEligible: s
                }
            }

            function u() {
                let t = c(),
                    e = new Date;
                return t.filter(t => new Date(t.max_expiration_time) > e)
            }

            function A() {
                let t = c(),
                    e = new Date;
                return t.filter(t => new Date(t.max_expiration_time) <= e)
            }
        },
        792105: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var i = n("446674"),
                a = n("646356");

            function s() {
                let t = (0, i.useStateFromStores)([a.default], () => a.default.isFetching());
                return t
            }
        },
        573240: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return M
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                s = n("669491"),
                l = n("167338"),
                o = n("426383"),
                c = n("165984"),
                r = n("503420"),
                u = n("803027"),
                A = n("877585"),
                S = n("47693"),
                d = n("779807"),
                E = n("77078"),
                I = n("599110"),
                _ = n("908539"),
                f = n("132206"),
                T = n("698609"),
                C = n("380676"),
                N = n("170213"),
                L = n("49111"),
                m = n("782340"),
                h = n("383496");
            let R = {
                    [_.ActionType.BAN]: [c.CircleExclamationPointIcon, s.default.colors.STATUS_DANGER],
                    [_.ActionType.GLOBAL_QUARANTINE]: [d.WarningIcon, s.default.colors.STATUS_WARNING],
                    [_.ActionType.DISABLE_SUSPICIOUS_ACTIVITY]: [d.WarningIcon, s.default.colors.STATUS_WARNING],
                    [_.ActionType.LIMITED_ACCESS]: [r.ClockIcon, s.default.colors.STATUS_WARNING],
                    [_.ActionType.REQUIRE_VERIFICATION]: [d.WarningIcon, s.default.colors.STATUS_WARNING],
                    [_.ActionType.TEMP_BAN]: [r.ClockIcon, s.default.colors.STATUS_WARNING],
                    [_.ActionType.USER_MESSAGE_REMOVAL]: [S.TrashIcon, s.default.colors.STATUS_DANGER],
                    [_.ActionType.USER_SPAMMER]: [d.WarningIcon, s.default.colors.STATUS_WARNING],
                    [_.ActionType.USER_USERNAME_MANGLE]: [u.CloseSmallIcon, s.default.colors.STATUS_WARNING],
                    [_.ActionType.USER_WARNING]: [l.ChatAlertIcon, s.default.colors.STATUS_WARNING]
                },
                p = d.WarningIcon,
                g = t => {
                    let {
                        classificationTypeText: e
                    } = t;
                    return (0, i.jsx)("div", {
                        className: h.classificationHeader,
                        children: (0, i.jsx)(E.Heading, {
                            variant: "heading-xl/normal",
                            children: m.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format({
                                classification_type: e,
                                classificationHook: (t, e) => (0, i.jsx)("strong", {
                                    children: t
                                }, e)
                            })
                        })
                    })
                },
                U = t => {
                    let {
                        actions: e
                    } = t, n = e.filter(t => t.descriptions.length > 0);
                    return 0 === n.length ? null : (0, i.jsxs)("div", {
                        className: h.classificationActionsTakenContainer,
                        children: [(0, i.jsx)(E.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: m.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
                        }), (0, i.jsx)("div", {
                            className: h.classificationActionsTakenCard,
                            children: e.map(t => (0, i.jsx)(x, {
                                action: t
                            }, t.id))
                        })]
                    })
                },
                x = t => {
                    let {
                        action: e
                    } = t, [n, a] = e.action_type in R ? R[e.action_type] : [p, s.default.colors.STATUS_WARNING];
                    return (0, i.jsx)(i.Fragment, {
                        children: e.descriptions.map((t, e) => (0, i.jsxs)("div", {
                            className: h.classificationActionsTakenRow,
                            children: [(0, i.jsx)("div", {
                                className: h.classificationActionsTakenRowIcon,
                                children: (0, i.jsx)(n, {
                                    width: 15,
                                    height: 15,
                                    color: a,
                                    style: {
                                        marginLeft: 1
                                    }
                                })
                            }), (0, i.jsx)(E.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-normal",
                                children: t
                            })]
                        }, e))
                    })
                },
                O = t => {
                    let {
                        classificationTypeText: e,
                        policyExplainerLink: n
                    } = t;
                    return (0, i.jsxs)(E.Anchor, {
                        href: n,
                        className: h.classificationPolicyCard,
                        useDefaultUnderlineStyles: !1,
                        children: [(0, i.jsx)("div", {
                            className: h.classificationPolicyCardIcon,
                            children: (0, i.jsx)(A.ShieldIcon, {
                                width: 32,
                                height: 32,
                                color: s.default.colors.FOCUS_PRIMARY
                            })
                        }), (0, i.jsxs)("div", {
                            className: h.classificationPolicyDescriptionContainer,
                            children: [(0, i.jsx)(E.Text, {
                                variant: "text-md/bold",
                                children: m.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
                                    classificationDescription: e
                                })
                            }), (0, i.jsx)(E.Text, {
                                variant: "text-sm/normal",
                                children: m.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_SUBTEXT
                            })]
                        }), (0, i.jsx)("div", {
                            className: h.classificationPolicyLinkIcon,
                            children: (0, i.jsx)(o.ChevronLargeRightIcon, {
                                width: 24,
                                height: 24,
                                color: s.default.colors.INTERACTIVE_NORMAL
                            })
                        })]
                    })
                },
                F = () => (0, i.jsx)(E.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: m.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
                }),
                v = t => (0, i.jsx)(E.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: m.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
                        letUsKnowHook: (e, n) => (0, i.jsx)(E.Anchor, {
                            href: t.appealLink,
                            onClick: t.letUsKnowClick,
                            children: e
                        }, n)
                    })
                }),
                D = t => (0, i.jsx)("div", {
                    className: h.classificationLetUsKnowContainer,
                    children: t.hasBeenAppealed ? (0, i.jsx)(F, {}) : (0, i.jsx)(v, {
                        appealLink: N.SafetyHubLinks.APPEALS_LINK,
                        letUsKnowClick: t.onLetUsKnowClick
                    })
                }),
                H = t => {
                    let {
                        tosLink: e,
                        communityGuidelinesLink: n,
                        classificationTypeText: a,
                        policyExplainerLink: s,
                        appealComponent: l
                    } = t;
                    return (0, i.jsxs)("div", {
                        className: h.classificationActionExplanationContainer,
                        children: [(0, i.jsx)(E.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: m.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
                        }), (0, i.jsx)(E.Text, {
                            className: h.guidelinesExplanation,
                            variant: "text-sm/normal",
                            children: m.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
                                tosLink: e,
                                communityGuidelinesLink: n
                            })
                        }), (0, i.jsx)(O, {
                            classificationTypeText: a,
                            policyExplainerLink: s
                        }), l]
                    })
                };
            var M = t => {
                var e;
                let {
                    classificationId: n,
                    source: s,
                    onError: l
                } = t, {
                    classification: o,
                    classificationRequestState: c
                } = (0, T.useSafetyHubClassification)(n), r = (0, f.useSafetyHubAccountStanding)();
                a.useEffect(() => {
                    I.default.track(L.AnalyticEvents.SAFETY_HUB_ACTION, {
                        action: N.SafetyHubAnalyticsActions.ViewViolationDetail,
                        account_standing: r.state,
                        classification_ids: [Number(n)],
                        source: s
                    })
                }, []);
                if (null == o && c === _.ClassificationRequestState.FAILED) return l(), null;
                if (null == o) return null;
                let u = null != o.flagged_content && o.flagged_content.length > 0;
                return (0, i.jsxs)("div", {
                    className: h.classificationContainer,
                    children: [(0, i.jsx)(g, {
                        classificationTypeText: o.description
                    }), u && (0, i.jsx)(C.ClassificationEvidence, {
                        flaggedContent: null !== (e = o.flagged_content) && void 0 !== e ? e : []
                    }), (0, i.jsx)(U, {
                        actions: o.actions
                    }), (0, i.jsx)(H, {
                        classificationTypeText: o.description,
                        tosLink: N.SafetyHubLinks.TOS_LINK,
                        communityGuidelinesLink: N.SafetyHubLinks.COMMUNITY_GUIDELINES,
                        policyExplainerLink: o.explainer_link,
                        appealComponent: (0, i.jsx)(D, {
                            hasBeenAppealed: null != o.appeal_status,
                            onLetUsKnowClick: () => {
                                I.default.track(L.AnalyticEvents.SAFETY_HUB_ACTION, {
                                    action: N.SafetyHubAnalyticsActions.ClickLetUsKnow,
                                    account_standing: r.state,
                                    classification_ids: [Number(n)],
                                    source: s
                                })
                            }
                        })
                    })]
                })
            }
        },
        825138: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("79112"),
                l = n("792105"),
                o = n("573240"),
                c = n("170213"),
                r = n("49111"),
                u = n("782340"),
                A = n("581935"),
                S = n("49155"),
                d = t => {
                    let {
                        transitionState: e,
                        onClose: n,
                        classificationId: d,
                        source: E
                    } = t, I = (0, l.default)(), _ = () => {
                        n(), s.default.open(r.UserSettingsSections.PRIVACY_AND_SAFETY, c.SafetyHubView.ACCOUNT_STANDING)
                    };
                    return (0, i.jsxs)(a.ModalRoot, {
                        className: A.modalRoot,
                        transitionState: e,
                        children: [(0, i.jsxs)("div", {
                            className: A.modalHeader,
                            children: [(0, i.jsx)("img", {
                                className: A.image,
                                src: S,
                                alt: ""
                            }), (0, i.jsx)(a.ModalCloseButton, {
                                className: A.modalClose,
                                onClick: n
                            })]
                        }), (0, i.jsx)(a.ModalContent, {
                            className: A.modalContent,
                            children: I ? (0, i.jsx)(a.Spinner, {}) : (0, i.jsx)(o.default, {
                                classificationId: d,
                                source: E,
                                onError: _
                            })
                        }), (0, i.jsx)(a.ModalFooter, {
                            children: (0, i.jsx)(a.Button, {
                                className: A.button,
                                type: "button",
                                color: a.Button.Colors.BRAND,
                                onClick: _,
                                children: u.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT
                            })
                        })]
                    })
                }
        },
        380676: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ClassificationEvidence: function() {
                    return R
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("917351"),
                s = n("249654"),
                l = n("446674"),
                o = n("77078"),
                c = n("692038"),
                r = n("815297"),
                u = n("933629"),
                A = n("39331"),
                S = n("596368"),
                d = n("227439"),
                E = n("697218"),
                I = n("780571"),
                _ = n("377502"),
                f = n("736393"),
                T = n("49111"),
                C = n("719347"),
                N = n("782340"),
                L = n("161730");
            let m = t => {
                    let e = t.attachments.map(t => {
                        var e, n;
                        return {
                            ...t,
                            filename: (0, f.getAttachmentFilename)(t),
                            size: 0,
                            width: null !== (e = t.width) && void 0 !== e ? e : 100,
                            height: null !== (n = t.height) && void 0 !== n ? n : 100,
                            proxy_url: t.url
                        }
                    });
                    return (0, c.createMessageRecord)({
                        ...(0, r.default)({
                            nonce: t.id,
                            content: t.content,
                            type: T.MessageTypes.DEFAULT,
                            channelId: ""
                        }),
                        timestamp: new Date(s.default.extractTimestamp(t.id)).toISOString(),
                        attachments: e,
                        state: T.MessageStates.SENT
                    })
                },
                h = t => {
                    let {
                        message: e
                    } = t;
                    return (0, i.jsx)(_.default, {
                        attachments: e.attachments.map(t => ({
                            attachment: t,
                            spoiler: !0,
                            message: e,
                            mediaLayoutType: C.MediaLayoutType.MOSAIC,
                            autoPlayGif: !1,
                            inlineMedia: !0,
                            canRemoveAttachment: !1,
                            isSingleMosaicItem: !0,
                            onRemoveAttachment: a.noop,
                            renderVideoComponent: u.renderVideoComponent,
                            renderImageComponent: t => (0, u.renderImageComponent)({
                                hiddenSpoilers: !0,
                                shouldHideMediaOptions: !0,
                                shouldLink: !1,
                                ...t
                            }),
                            renderAudioComponent: u.renderAudioComponent,
                            renderPlaintextFilePreview: u.renderPlaintextFilePreview,
                            gifFavoriteButton: () => null
                        }))
                    })
                },
                R = t => {
                    var e;
                    let {
                        flaggedContent: n
                    } = t, a = (0, l.useStateFromStores)([E.default], () => E.default.getCurrentUser()), s = n[0], c = m(s), r = (0, A.default)(c, {
                        hideSimpleEmbedContent: !1,
                        allowList: !1,
                        allowHeading: !1,
                        allowLinks: !1,
                        previewLinkTarget: !1
                    });
                    return (0, i.jsxs)("div", {
                        className: L.classificationEvidenceContainer,
                        children: [(0, i.jsx)(o.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER
                        }), (0, i.jsx)("div", {
                            className: L.classificationEvidenceCard,
                            children: (0, i.jsx)("div", {
                                className: L.classificationEvidenceContent,
                                children: (0, i.jsx)(I.default, {
                                    compact: !1,
                                    childrenHeader: (0, d.default)({
                                        author: {
                                            ...a,
                                            colorString: "",
                                            nick: null !== (e = null == a ? void 0 : a.username) && void 0 !== e ? e : ""
                                        },
                                        message: c,
                                        channel: void 0,
                                        guildId: void 0,
                                        compact: !1,
                                        animateAvatar: !1,
                                        isGroupStart: !0,
                                        roleIcon: void 0,
                                        hideTimestamp: !1
                                    }),
                                    childrenAccessories: (0, i.jsx)(h, {
                                        message: c
                                    }),
                                    childrenMessageContent: (0, S.default)({
                                        message: c
                                    }, r.content),
                                    hasThread: !1,
                                    hasReply: !1
                                })
                            })
                        })]
                    })
                }
        }
    }
]);