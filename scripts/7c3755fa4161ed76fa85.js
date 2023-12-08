(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["33533"], {
        60266: function(t, e, n) {
            t.exports = function(t, e, n, a) {
                for (var i = -1, s = null == t ? 0 : t.length; ++i < s;) {
                    var o = t[i];
                    e(a, o, n(o), t)
                }
                return a
            }
        },
        581628: function(t, e, n) {
            var a = n("978603");
            t.exports = function(t, e, n, i) {
                return a(t, function(t, a, s) {
                    e(i, t, n(t), s)
                }), i
            }
        },
        278296: function(t, e, n) {
            var a = n("60266"),
                i = n("581628"),
                s = n("698273"),
                o = n("725502");
            t.exports = function(t, e) {
                return function(n, l) {
                    var c = o(n) ? a : i,
                        r = e ? e() : {};
                    return c(n, t, s(l, 2), r)
                }
            }
        },
        816494: function(t, e, n) {
            var a = n("766665"),
                i = n("278296")(function(t, e, n) {
                    a(t, n, e)
                });
            t.exports = i
        },
        49155: function(t, e, n) {
            "use strict";
            t.exports = n.p + "495fd0002d30e7c7e4f5.png"
        },
        167338: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ChatAlertIcon: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let o = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...c
                } = t;
                return (0, a.jsxs)("svg", {
                    ...(0, s.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M12.03 21.5c-.05.28-.27.5-.54.5H2.2a1 1 0 0 1-.75-1.66l2.06-2.37a.52.52 0 0 0 .04-.61 10 10 0 1 1 18.32-3.77c-.01.12-.17.14-.22.04a3.06 3.06 0 0 0-5.3 0l-3.95 6.9c-.19.32-.3.65-.37.98Z",
                        className: l
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M18.09 14.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.93 1.93 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: l
                    })]
                })
            }
        },
        426383: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ChevronLargeRightIcon: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let o = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...c
                } = t;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M8.3 3.3a1 1 0 0 0 0 1.4l7.29 7.3-7.3 7.3a1 1 0 1 0 1.42 1.4l8-8a1 1 0 0 0 0-1.4l-8-8a1 1 0 0 0-1.42 0Z",
                        className: l
                    })
                })
            }
        },
        803027: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                CloseSmallIcon: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let o = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...c
                } = t;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z",
                        className: l
                    })
                })
            }
        },
        781324: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getSafetyHubData: function() {
                    return o
                },
                getSafetyHubDataForClassification: function() {
                    return l
                }
            });
            var a = n("872717"),
                i = n("913144"),
                s = n("49111");
            async function o() {
                i.default.dispatch({
                    type: "SAFETY_HUB_FETCH_START"
                }), await a.default.get({
                    url: s.Endpoints.SAFETY_HUB
                }).then(t => {
                    let {
                        body: e
                    } = t, {
                        classifications: n,
                        account_standing: a
                    } = e;
                    i.default.dispatch({
                        type: "SAFETY_HUB_FETCH_SUCCESS",
                        classifications: n,
                        accountStanding: a
                    })
                }).catch(t => {
                    var e, n;
                    i.default.dispatch({
                        type: "SAFETY_HUB_FETCH_FAILURE",
                        error: null !== (n = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== n ? n : "Unknown error"
                    })
                })
            }
            async function l(t) {
                i.default.dispatch({
                    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
                    classificationId: t
                }), await a.default.get({
                    url: s.Endpoints.SAFETY_HUB
                }).then(e => {
                    let {
                        body: n
                    } = e, {
                        classifications: a,
                        account_standing: s
                    } = n, o = a.find(e => e.id === t);
                    null != o ? i.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                        classification: o,
                        accountStanding: s
                    }) : i.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                        error: "Classification not found.",
                        classificationId: t
                    })
                }).catch(e => {
                    var n, a;
                    i.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                        error: null !== (a = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.message) && void 0 !== a ? a : "Unknown error",
                        classificationId: t
                    })
                })
            }
        },
        908539: function(t, e, n) {
            "use strict";
            var a, i, s, o, l, c, r, u, S, A;
            n.r(e), n.d(e, {
                ActionType: function() {
                    return s
                },
                AccountStandingState: function() {
                    return o
                },
                ClassificationRequestState: function() {
                    return l
                }
            }), (c = a || (a = {}))[c.REVIEW_PENDING = 1] = "REVIEW_PENDING", c[c.CLASSIFICATION_UPHELD = 2] = "CLASSIFICATION_UPHELD", c[c.CLASSIFICATION_INVALIDATED = 3] = "CLASSIFICATION_INVALIDATED", (r = i || (i = {}))[r.UNSPECIFIED = 0] = "UNSPECIFIED", r[r.UNKNOWN = 1] = "UNKNOWN", r[r.UNSOLICITED_PORNOGRAPHY = 100] = "UNSOLICITED_PORNOGRAPHY", r[r.NONCONSENSUAL_PORNOGRAPHY = 200] = "NONCONSENSUAL_PORNOGRAPHY", r[r.GLORIFYING_VIOLENCE = 210] = "GLORIFYING_VIOLENCE", r[r.HATE_SPEECH = 220] = "HATE_SPEECH", r[r.CRACKED_ACCOUNTS = 230] = "CRACKED_ACCOUNTS", r[r.ILLICIT_GOODS = 240] = "ILLICIT_GOODS", r[r.SOCIAL_ENGINEERING = 250] = "SOCIAL_ENGINEERING", r[r.TEST_CLASSIFICATION = 9e3] = "TEST_CLASSIFICATION", r[r.TEST_CLASSIFICATION_LOW = 9001] = "TEST_CLASSIFICATION_LOW", r[r.TEST_CLASSIFICATION_SEVERE = 9002] = "TEST_CLASSIFICATION_SEVERE", (u = s || (s = {}))[u.BAN = 0] = "BAN", u[u.TEMP_BAN = 1] = "TEMP_BAN", u[u.GLOBAL_QUARANTINE = 2] = "GLOBAL_QUARANTINE", u[u.REQUIRE_VERIFICATION = 3] = "REQUIRE_VERIFICATION", u[u.USER_WARNING = 4] = "USER_WARNING", u[u.USER_SPAMMER = 5] = "USER_SPAMMER", u[u.CHANNEL_SPAM = 6] = "CHANNEL_SPAM", u[u.MESSAGE_SPAM = 7] = "MESSAGE_SPAM", u[u.DISABLE_SUSPICIOUS_ACTIVITY = 8] = "DISABLE_SUSPICIOUS_ACTIVITY", u[u.LIMITED_ACCESS = 9] = "LIMITED_ACCESS", u[u.CHANNEL_SCHEDULE_DELETE = 10] = "CHANNEL_SCHEDULE_DELETE", u[u.MESSAGE_CONTENT_REMOVAL = 11] = "MESSAGE_CONTENT_REMOVAL", u[u.GUILD_DISABLE_INVITE = 12] = "GUILD_DISABLE_INVITE", u[u.USER_CONTENT_REMOVAL = 13] = "USER_CONTENT_REMOVAL", u[u.USER_USERNAME_MANGLE = 14] = "USER_USERNAME_MANGLE", u[u.GUILD_LIMITED_ACCESS = 15] = "GUILD_LIMITED_ACCESS", u[u.USER_MESSAGE_REMOVAL = 16] = "USER_MESSAGE_REMOVAL", (S = o || (o = {}))[S.ALL_GOOD = 100] = "ALL_GOOD", S[S.LIMITED = 200] = "LIMITED", S[S.VERY_LIMITED = 300] = "VERY_LIMITED", S[S.AT_RISK = 400] = "AT_RISK", S[S.SUSPENDED = 500] = "SUSPENDED", (A = l || (l = {}))[A.PENDING = 0] = "PENDING", A[A.SUCCESS = 1] = "SUCCESS", A[A.FAILED = 2] = "FAILED"
        },
        646356: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return I
                }
            });
            var a = n("816494"),
                i = n.n(a),
                s = n("446674"),
                o = n("913144"),
                l = n("908539");
            let c = {},
                r = {},
                u = {
                    state: l.AccountStandingState.ALL_GOOD
                },
                S = !1,
                A = !1,
                d = null;
            class E extends s.default.Store {
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
                    return u
                }
                getFetchError() {
                    return d
                }
                isInitialized() {
                    return A
                }
                getClassificationRequestState(t) {
                    return r[t]
                }
            }
            E.displayName = "SafetyHubStore";
            var I = new E(o.default, {
                SAFETY_HUB_FETCH_START: function(t) {
                    S = !0
                },
                SAFETY_HUB_FETCH_SUCCESS: function(t) {
                    let {
                        classifications: e,
                        accountStanding: n
                    } = t;
                    c = i(e, "id"), u = n, S = !1, A = !0, d = null
                },
                SAFETY_HUB_FETCH_FAILURE: function(t) {
                    let {
                        error: e
                    } = t;
                    S = !1, A = !1, d = e
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_START: function(t) {
                    r[t.classificationId] = l.ClassificationRequestState.PENDING, S = !0
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(t) {
                    let {
                        classification: e,
                        accountStanding: n
                    } = t;
                    c[e.id] = e, r[e.id] = l.ClassificationRequestState.SUCCESS, u = n, S = !1, d = null
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(t) {
                    let {
                        error: e,
                        classificationId: n
                    } = t;
                    S = !1, d = e, r[n] = l.ClassificationRequestState.FAILED
                },
                LOGOUT: function() {
                    S = !1, c = {}, u = {
                        state: l.AccountStandingState.ALL_GOOD
                    }
                }
            })
        },
        132206: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useSafetyHubAccountStanding: function() {
                    return s
                }
            });
            var a = n("446674"),
                i = n("646356");

            function s() {
                return (0, a.useStateFromStores)([i.default], () => i.default.getAccountStanding())
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
                    return S
                }
            });
            var a = n("884691"),
                i = n("446674"),
                s = n("299039"),
                o = n("781324"),
                l = n("646356");

            function c() {
                let t = (0, i.useStateFromStoresArray)([l.default], () => l.default.getClassifications());
                return t.sort((t, e) => s.default.extractTimestamp(e.id) - s.default.extractTimestamp(t.id))
            }

            function r(t) {
                let e = (0, i.useStateFromStores)([l.default], () => l.default.getClassification(t)),
                    n = (0, i.useStateFromStores)([l.default], () => l.default.getClassificationRequestState(t));
                return a.useEffect(() => {
                    void 0 === e && null == n && o.getSafetyHubDataForClassification(t)
                }, [t, e, n]), {
                    classification: e,
                    classificationRequestState: n
                }
            }

            function u() {
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
        792105: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var a = n("446674"),
                i = n("646356");

            function s() {
                let t = (0, a.useStateFromStores)([i.default], () => i.default.isFetching());
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
            var a = n("37983"),
                i = n("884691"),
                s = n("669491"),
                o = n("167338"),
                l = n("426383"),
                c = n("165984"),
                r = n("503420"),
                u = n("803027"),
                S = n("877585"),
                A = n("47693"),
                d = n("779807"),
                E = n("77078"),
                I = n("599110"),
                _ = n("908539"),
                T = n("132206"),
                f = n("698609"),
                C = n("380676"),
                N = n("170213"),
                L = n("49111"),
                h = n("782340"),
                R = n("383496");
            let m = {
                    [_.ActionType.BAN]: [c.CircleExclamationPointIcon, s.default.colors.STATUS_DANGER],
                    [_.ActionType.GLOBAL_QUARANTINE]: [d.WarningIcon, s.default.colors.STATUS_WARNING],
                    [_.ActionType.DISABLE_SUSPICIOUS_ACTIVITY]: [d.WarningIcon, s.default.colors.STATUS_WARNING],
                    [_.ActionType.LIMITED_ACCESS]: [r.ClockIcon, s.default.colors.STATUS_WARNING],
                    [_.ActionType.REQUIRE_VERIFICATION]: [d.WarningIcon, s.default.colors.STATUS_WARNING],
                    [_.ActionType.TEMP_BAN]: [r.ClockIcon, s.default.colors.STATUS_WARNING],
                    [_.ActionType.USER_MESSAGE_REMOVAL]: [A.TrashIcon, s.default.colors.STATUS_DANGER],
                    [_.ActionType.USER_SPAMMER]: [d.WarningIcon, s.default.colors.STATUS_WARNING],
                    [_.ActionType.USER_USERNAME_MANGLE]: [u.CloseSmallIcon, s.default.colors.STATUS_WARNING],
                    [_.ActionType.USER_WARNING]: [o.ChatAlertIcon, s.default.colors.STATUS_WARNING]
                },
                p = d.WarningIcon,
                U = t => {
                    let {
                        classificationTypeText: e
                    } = t;
                    return (0, a.jsx)("div", {
                        className: R.classificationHeader,
                        children: (0, a.jsx)(E.Heading, {
                            variant: "heading-xl/normal",
                            children: h.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format({
                                classification_type: e,
                                classificationHook: (t, e) => (0, a.jsx)("strong", {
                                    children: t
                                }, e)
                            })
                        })
                    })
                },
                g = t => {
                    let {
                        actions: e
                    } = t, n = e.filter(t => t.descriptions.length > 0);
                    return 0 === n.length ? null : (0, a.jsxs)("div", {
                        className: R.classificationActionsTakenContainer,
                        children: [(0, a.jsx)(E.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: h.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
                        }), (0, a.jsx)("div", {
                            className: R.classificationActionsTakenCard,
                            children: e.map(t => (0, a.jsx)(x, {
                                action: t
                            }, t.id))
                        })]
                    })
                },
                x = t => {
                    let {
                        action: e
                    } = t, [n, i] = e.action_type in m ? m[e.action_type] : [p, s.default.colors.STATUS_WARNING];
                    return (0, a.jsx)(a.Fragment, {
                        children: e.descriptions.map((t, e) => (0, a.jsxs)("div", {
                            className: R.classificationActionsTakenRow,
                            children: [(0, a.jsx)("div", {
                                className: R.classificationActionsTakenRowIcon,
                                children: (0, a.jsx)(n, {
                                    width: 15,
                                    height: 15,
                                    color: i,
                                    style: {
                                        marginLeft: 1
                                    }
                                })
                            }), (0, a.jsx)(E.Text, {
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
                    return (0, a.jsxs)(E.Anchor, {
                        href: n,
                        className: R.classificationPolicyCard,
                        useDefaultUnderlineStyles: !1,
                        children: [(0, a.jsx)("div", {
                            className: R.classificationPolicyCardIcon,
                            children: (0, a.jsx)(S.ShieldIcon, {
                                width: 32,
                                height: 32,
                                color: s.default.colors.FOCUS_PRIMARY
                            })
                        }), (0, a.jsxs)("div", {
                            className: R.classificationPolicyDescriptionContainer,
                            children: [(0, a.jsx)(E.Text, {
                                variant: "text-md/bold",
                                children: h.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
                                    classificationDescription: e
                                })
                            }), (0, a.jsx)(E.Text, {
                                variant: "text-sm/normal",
                                children: h.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_SUBTEXT
                            })]
                        }), (0, a.jsx)("div", {
                            className: R.classificationPolicyLinkIcon,
                            children: (0, a.jsx)(l.ChevronLargeRightIcon, {
                                width: 24,
                                height: 24,
                                color: s.default.colors.INTERACTIVE_NORMAL
                            })
                        })]
                    })
                },
                F = () => (0, a.jsx)(E.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: h.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
                }),
                v = t => (0, a.jsx)(E.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: h.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
                        letUsKnowHook: (e, n) => (0, a.jsx)(E.Anchor, {
                            href: t.appealLink,
                            onClick: t.letUsKnowClick,
                            children: e
                        }, n)
                    })
                }),
                D = t => (0, a.jsx)("div", {
                    className: R.classificationLetUsKnowContainer,
                    children: t.hasBeenAppealed ? (0, a.jsx)(F, {}) : (0, a.jsx)(v, {
                        appealLink: N.SafetyHubLinks.APPEALS_LINK,
                        letUsKnowClick: t.onLetUsKnowClick
                    })
                }),
                H = t => {
                    let {
                        tosLink: e,
                        communityGuidelinesLink: n,
                        classificationTypeText: i,
                        policyExplainerLink: s,
                        appealComponent: o
                    } = t;
                    return (0, a.jsxs)("div", {
                        className: R.classificationActionExplanationContainer,
                        children: [(0, a.jsx)(E.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: h.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
                        }), (0, a.jsx)(E.Text, {
                            className: R.guidelinesExplanation,
                            variant: "text-sm/normal",
                            children: h.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
                                tosLink: e,
                                communityGuidelinesLink: n
                            })
                        }), (0, a.jsx)(O, {
                            classificationTypeText: i,
                            policyExplainerLink: s
                        }), o]
                    })
                };
            var M = t => {
                var e;
                let {
                    classificationId: n,
                    source: s,
                    onError: o
                } = t, {
                    classification: l,
                    classificationRequestState: c
                } = (0, f.useSafetyHubClassification)(n), r = (0, T.useSafetyHubAccountStanding)();
                i.useEffect(() => {
                    I.default.track(L.AnalyticEvents.SAFETY_HUB_ACTION, {
                        action: N.SafetyHubAnalyticsActions.ViewViolationDetail,
                        account_standing: r.state,
                        classification_ids: [Number(n)],
                        source: s
                    })
                }, []);
                if (null == l && c === _.ClassificationRequestState.FAILED) return o(), null;
                if (null == l) return null;
                let u = null != l.flagged_content && l.flagged_content.length > 0;
                return (0, a.jsxs)("div", {
                    className: R.classificationContainer,
                    children: [(0, a.jsx)(U, {
                        classificationTypeText: l.description
                    }), u && (0, a.jsx)(C.ClassificationEvidence, {
                        flaggedContent: null !== (e = l.flagged_content) && void 0 !== e ? e : []
                    }), (0, a.jsx)(g, {
                        actions: l.actions
                    }), (0, a.jsx)(H, {
                        classificationTypeText: l.description,
                        tosLink: N.SafetyHubLinks.TOS_LINK,
                        communityGuidelinesLink: N.SafetyHubLinks.COMMUNITY_GUIDELINES,
                        policyExplainerLink: l.explainer_link,
                        appealComponent: (0, a.jsx)(D, {
                            hasBeenAppealed: null != l.appeal_status,
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
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("79112"),
                o = n("792105"),
                l = n("573240"),
                c = n("170213"),
                r = n("49111"),
                u = n("782340"),
                S = n("581935"),
                A = n("49155"),
                d = t => {
                    let {
                        transitionState: e,
                        onClose: n,
                        classificationId: d,
                        source: E
                    } = t, I = (0, o.default)(), _ = () => {
                        n(), s.default.open(r.UserSettingsSections.PRIVACY_AND_SAFETY, c.SafetyHubView.ACCOUNT_STANDING)
                    };
                    return (0, a.jsxs)(i.ModalRoot, {
                        className: S.modalRoot,
                        transitionState: e,
                        children: [(0, a.jsxs)("div", {
                            className: S.modalHeader,
                            children: [(0, a.jsx)("img", {
                                className: S.image,
                                src: A,
                                alt: ""
                            }), (0, a.jsx)(i.ModalCloseButton, {
                                className: S.modalClose,
                                onClick: n
                            })]
                        }), (0, a.jsx)(i.ModalContent, {
                            className: S.modalContent,
                            children: I ? (0, a.jsx)(i.Spinner, {}) : (0, a.jsx)(l.default, {
                                classificationId: d,
                                source: E,
                                onError: _
                            })
                        }), (0, a.jsx)(i.ModalFooter, {
                            children: (0, a.jsx)(i.Button, {
                                className: S.button,
                                type: "button",
                                color: i.Button.Colors.BRAND,
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
                    return m
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("917351"),
                s = n("249654"),
                o = n("446674"),
                l = n("77078"),
                c = n("692038"),
                r = n("815297"),
                u = n("933629"),
                S = n("39331"),
                A = n("596368"),
                d = n("227439"),
                E = n("697218"),
                I = n("780571"),
                _ = n("377502"),
                T = n("49111"),
                f = n("894488"),
                C = n("719347"),
                N = n("782340"),
                L = n("161730");
            let h = t => {
                    let e = t.attachments.map(t => {
                        var e, n;
                        return {
                            ...t,
                            filename: "".concat(f.SPOILER_ATTACHMENT_PREFIX, ".png"),
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
                R = t => {
                    let {
                        message: e
                    } = t;
                    return (0, a.jsx)(_.default, {
                        attachments: e.attachments.map(t => ({
                            attachment: t,
                            spoiler: !0,
                            message: e,
                            mediaLayoutType: C.MediaLayoutType.MOSAIC,
                            autoPlayGif: !1,
                            inlineMedia: !0,
                            canRemoveAttachment: !1,
                            isSingleMosaicItem: !0,
                            onRemoveAttachment: i.noop,
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
                m = t => {
                    var e;
                    let {
                        flaggedContent: n
                    } = t, i = (0, o.useStateFromStores)([E.default], () => E.default.getCurrentUser()), s = n[0], c = h(s), r = (0, S.default)(c, {
                        hideSimpleEmbedContent: !1,
                        allowList: !1,
                        allowHeading: !1,
                        allowLinks: !1,
                        previewLinkTarget: !1
                    });
                    return (0, a.jsxs)("div", {
                        className: L.classificationEvidenceContainer,
                        children: [(0, a.jsx)(l.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER
                        }), (0, a.jsx)("div", {
                            className: L.classificationEvidenceCard,
                            children: (0, a.jsx)("div", {
                                className: L.classificationEvidenceContent,
                                children: (0, a.jsx)(I.default, {
                                    compact: !1,
                                    childrenHeader: (0, d.default)({
                                        author: {
                                            ...i,
                                            colorString: "",
                                            nick: null !== (e = null == i ? void 0 : i.username) && void 0 !== e ? e : ""
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
                                    childrenAccessories: (0, a.jsx)(R, {
                                        message: c
                                    }),
                                    childrenMessageContent: (0, A.default)({
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