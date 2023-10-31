(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["33533"], {
        60266: function(t, n, e) {
            t.exports = function(t, n, e, i) {
                for (var a = -1, s = null == t ? 0 : t.length; ++a < s;) {
                    var c = t[a];
                    n(i, c, e(c), t)
                }
                return i
            }
        },
        581628: function(t, n, e) {
            var i = e("978603");
            t.exports = function(t, n, e, a) {
                return i(t, function(t, i, s) {
                    n(a, t, e(t), s)
                }), a
            }
        },
        278296: function(t, n, e) {
            var i = e("60266"),
                a = e("581628"),
                s = e("698273"),
                c = e("725502");
            t.exports = function(t, n) {
                return function(e, l) {
                    var o = c(e) ? i : a,
                        r = n ? n() : {};
                    return o(e, t, s(l, 2), r)
                }
            }
        },
        816494: function(t, n, e) {
            var i = e("766665"),
                a = e("278296")(function(t, n, e) {
                    i(t, e, n)
                });
            t.exports = a
        },
        49155: function(t, n, e) {
            "use strict";
            t.exports = e.p + "495fd0002d30e7c7e4f5.png"
        },
        167338: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                ChatAlertIcon: function() {
                    return c
                }
            });
            var i = e("37983");
            e("884691");
            var a = e("669491"),
                s = e("75196");
            let c = t => {
                let {
                    width: n = 24,
                    height: e = 24,
                    color: c = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: e,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        d: "M12.032 21.505c-.05.27-.269.495-.544.495H2.2c-.859 0-1.318-1.01-.753-1.657l2.066-2.369a.517.517 0 0 0 .041-.617A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 .542-.043 1.073-.126 1.591-.018.117-.17.142-.229.04-1.163-2.027-4.127-2.027-5.29 0l-3.96 6.897a3.069 3.069 0 0 0-.363.977Z",
                        className: l
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        fillRule: "evenodd",
                        d: "M18.09 14.627c.394-.688 1.426-.688 1.82 0l3.96 6.897c.38.664-.12 1.476-.911 1.476h-7.918c-.79 0-1.292-.812-.91-1.476l3.958-6.897Zm.464 1.873h.892a.5.5 0 0 1 .497.551l-.208 2.017c-.017.16-.177.262-.334.228A1.928 1.928 0 0 0 19 19.25c-.137 0-.274.019-.4.046-.158.034-.318-.068-.335-.228l-.208-2.017a.5.5 0 0 1 .497-.551ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: l
                    })]
                })
            }
        },
        781324: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                getSafetyHubData: function() {
                    return c
                },
                getSafetyHubDataForClassification: function() {
                    return l
                }
            });
            var i = e("872717"),
                a = e("913144"),
                s = e("49111");
            async function c() {
                a.default.dispatch({
                    type: "SAFETY_HUB_FETCH_START"
                }), await i.default.get({
                    url: s.Endpoints.SAFETY_HUB
                }).then(t => {
                    let {
                        body: n
                    } = t, {
                        classifications: e,
                        account_standing: i
                    } = n;
                    a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_SUCCESS",
                        classifications: e,
                        accountStanding: i
                    })
                }).catch(t => {
                    var n, e;
                    a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_FAILURE",
                        error: null !== (e = null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.message) && void 0 !== e ? e : "Unknown error"
                    })
                })
            }
            async function l(t) {
                a.default.dispatch({
                    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
                    classificationId: t
                }), await i.default.get({
                    url: s.Endpoints.SAFETY_HUB
                }).then(n => {
                    let {
                        body: e
                    } = n, {
                        classifications: i,
                        account_standing: s
                    } = e, c = i.find(n => n.id === t);
                    null != c ? a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                        classification: c,
                        accountStanding: s
                    }) : a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                        error: "Classification not found.",
                        classificationId: t
                    })
                }).catch(n => {
                    var e, i;
                    a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                        error: null !== (i = null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.message) && void 0 !== i ? i : "Unknown error",
                        classificationId: t
                    })
                })
            }
        },
        908539: function(t, n, e) {
            "use strict";
            var i, a, s, c, l, o, r, u;
            e.r(n), e.d(n, {
                ActionType: function() {
                    return a
                },
                AccountStandingState: function() {
                    return s
                },
                ClassificationRequestState: function() {
                    return c
                }
            }), (l = i || (i = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.UNKNOWN = 1] = "UNKNOWN", l[l.UNSOLICITED_PORNOGRAPHY = 100] = "UNSOLICITED_PORNOGRAPHY", l[l.NONCONSENSUAL_PORNOGRAPHY = 200] = "NONCONSENSUAL_PORNOGRAPHY", l[l.GLORIFYING_VIOLENCE = 210] = "GLORIFYING_VIOLENCE", l[l.HATE_SPEECH = 220] = "HATE_SPEECH", l[l.CRACKED_ACCOUNTS = 230] = "CRACKED_ACCOUNTS", l[l.ILLICIT_GOODS = 240] = "ILLICIT_GOODS", l[l.SOCIAL_ENGINEERING = 250] = "SOCIAL_ENGINEERING", l[l.TEST_CLASSIFICATION = 9e3] = "TEST_CLASSIFICATION", l[l.TEST_CLASSIFICATION_LOW = 9001] = "TEST_CLASSIFICATION_LOW", l[l.TEST_CLASSIFICATION_SEVERE = 9002] = "TEST_CLASSIFICATION_SEVERE", (o = a || (a = {}))[o.BAN = 0] = "BAN", o[o.TEMP_BAN = 1] = "TEMP_BAN", o[o.GLOBAL_QUARANTINE = 2] = "GLOBAL_QUARANTINE", o[o.REQUIRE_VERIFICATION = 3] = "REQUIRE_VERIFICATION", o[o.USER_WARNING = 4] = "USER_WARNING", o[o.USER_SPAMMER = 5] = "USER_SPAMMER", o[o.CHANNEL_SPAM = 6] = "CHANNEL_SPAM", o[o.MESSAGE_SPAM = 7] = "MESSAGE_SPAM", o[o.DISABLE_SUSPICIOUS_ACTIVITY = 8] = "DISABLE_SUSPICIOUS_ACTIVITY", o[o.LIMITED_ACCESS = 9] = "LIMITED_ACCESS", o[o.CHANNEL_SCHEDULE_DELETE = 10] = "CHANNEL_SCHEDULE_DELETE", o[o.MESSAGE_CONTENT_REMOVAL = 11] = "MESSAGE_CONTENT_REMOVAL", o[o.GUILD_DISABLE_INVITE = 12] = "GUILD_DISABLE_INVITE", o[o.USER_CONTENT_REMOVAL = 13] = "USER_CONTENT_REMOVAL", o[o.USER_USERNAME_MANGLE = 14] = "USER_USERNAME_MANGLE", o[o.GUILD_LIMITED_ACCESS = 15] = "GUILD_LIMITED_ACCESS", o[o.USER_MESSAGE_REMOVAL = 16] = "USER_MESSAGE_REMOVAL", (r = s || (s = {}))[r.ALL_GOOD = 100] = "ALL_GOOD", r[r.LIMITED = 200] = "LIMITED", r[r.VERY_LIMITED = 300] = "VERY_LIMITED", r[r.AT_RISK = 400] = "AT_RISK", r[r.SUSPENDED = 500] = "SUSPENDED", (u = c || (c = {}))[u.PENDING = 0] = "PENDING", u[u.SUCCESS = 1] = "SUCCESS", u[u.FAILED = 2] = "FAILED"
        },
        646356: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return I
                }
            });
            var i = e("816494"),
                a = e.n(i),
                s = e("446674"),
                c = e("913144"),
                l = e("908539");
            let o = {},
                r = {},
                u = {
                    state: l.AccountStandingState.ALL_GOOD
                },
                E = !1,
                S = !1,
                A = null;
            class d extends s.default.Store {
                isFetching() {
                    return E
                }
                getClassifications() {
                    return Object.values(o)
                }
                getClassification(t) {
                    return o[t]
                }
                getAccountStanding() {
                    return u
                }
                getFetchError() {
                    return A
                }
                isInitialized() {
                    return S
                }
                getClassificationRequestState(t) {
                    return r[t]
                }
            }
            d.displayName = "SafetyHubStore";
            var I = new d(c.default, {
                SAFETY_HUB_FETCH_START: function(t) {
                    E = !0
                },
                SAFETY_HUB_FETCH_SUCCESS: function(t) {
                    let {
                        classifications: n,
                        accountStanding: e
                    } = t;
                    o = a(n, "id"), u = e, E = !1, S = !0, A = null
                },
                SAFETY_HUB_FETCH_FAILURE: function(t) {
                    let {
                        error: n
                    } = t;
                    E = !1, S = !1, A = n
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_START: function(t) {
                    r[t.classificationId] = l.ClassificationRequestState.PENDING, E = !0
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(t) {
                    let {
                        classification: n,
                        accountStanding: e
                    } = t;
                    o[n.id] = n, r[n.id] = l.ClassificationRequestState.SUCCESS, u = e, E = !1, A = null
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(t) {
                    let {
                        error: n,
                        classificationId: e
                    } = t;
                    E = !1, A = n, r[e] = l.ClassificationRequestState.FAILED
                },
                LOGOUT: function() {
                    E = !1, o = {}, u = {
                        state: l.AccountStandingState.ALL_GOOD
                    }
                }
            })
        },
        132206: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                useSafetyHubAccountStanding: function() {
                    return s
                }
            });
            var i = e("446674"),
                a = e("646356");

            function s() {
                return (0, i.useStateFromStores)([a.default], () => a.default.getAccountStanding())
            }
        },
        698609: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                useSafetyHubClassification: function() {
                    return r
                },
                useActiveSafetyHubClassifications: function() {
                    return u
                },
                useExpiredSafetyHubClassifications: function() {
                    return E
                }
            });
            var i = e("884691"),
                a = e("446674"),
                s = e("299039"),
                c = e("781324"),
                l = e("646356");

            function o() {
                let t = (0, a.useStateFromStoresArray)([l.default], () => l.default.getClassifications());
                return t.sort((t, n) => s.default.extractTimestamp(n.id) - s.default.extractTimestamp(t.id))
            }

            function r(t) {
                let n = (0, a.useStateFromStores)([l.default], () => l.default.getClassification(t)),
                    e = (0, a.useStateFromStores)([l.default], () => l.default.getClassificationRequestState(t));
                return i.useEffect(() => {
                    void 0 === n && null == e && c.getSafetyHubDataForClassification(t)
                }, [t, n, e]), {
                    classification: n,
                    classificationRequestState: e
                }
            }

            function u() {
                let t = o(),
                    n = new Date;
                return t.filter(t => new Date(t.max_expiration_time) > n)
            }

            function E() {
                let t = o(),
                    n = new Date;
                return t.filter(t => new Date(t.max_expiration_time) <= n)
            }
        },
        792105: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return s
                }
            });
            var i = e("446674"),
                a = e("646356");

            function s() {
                let t = (0, i.useStateFromStores)([a.default], () => a.default.isFetching());
                return t
            }
        },
        573240: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return m
                }
            });
            var i = e("37983"),
                a = e("884691"),
                s = e("77078"),
                c = e("104359"),
                l = e("4845"),
                o = e("491401"),
                r = e("945330"),
                u = e("975743"),
                E = e("772280"),
                S = e("228220"),
                A = e("364719"),
                d = e("599110"),
                I = e("908539"),
                _ = e("132206"),
                f = e("698609"),
                C = e("170213"),
                T = e("49111"),
                N = e("782340"),
                L = e("190466");
            let x = {
                    [I.ActionType.BAN]: [c.default, L.redIcon],
                    [I.ActionType.GLOBAL_QUARANTINE]: [A.default, L.warningIcon],
                    [I.ActionType.DISABLE_SUSPICIOUS_ACTIVITY]: [A.default, L.warningIcon],
                    [I.ActionType.LIMITED_ACCESS]: [o.default, L.warningIcon],
                    [I.ActionType.REQUIRE_VERIFICATION]: [A.default, L.warningIcon],
                    [I.ActionType.TEMP_BAN]: [o.default, L.warningIcon],
                    [I.ActionType.USER_MESSAGE_REMOVAL]: [S.default, L.redIcon],
                    [I.ActionType.USER_SPAMMER]: [A.default, L.warningIcon],
                    [I.ActionType.USER_USERNAME_MANGLE]: [r.default, L.warningIcon],
                    [I.ActionType.USER_WARNING]: [l.default, L.warningIcon]
                },
                p = A.default,
                R = t => {
                    let {
                        classificationTypeText: n
                    } = t;
                    return (0, i.jsx)("div", {
                        className: L.classificationHeader,
                        children: (0, i.jsx)(s.Heading, {
                            variant: "heading-xl/normal",
                            children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format({
                                classification_type: n,
                                classificationHook: (t, n) => (0, i.jsx)("strong", {
                                    children: t
                                }, n)
                            })
                        })
                    })
                },
                U = t => {
                    let {
                        actions: n
                    } = t, e = n.filter(t => t.descriptions.length > 0);
                    return 0 === e.length ? null : (0, i.jsxs)("div", {
                        className: L.classificationActionsTakenContainer,
                        children: [(0, i.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
                        }), (0, i.jsx)("div", {
                            className: L.classificationActionsTakenCard,
                            children: n.map(t => (0, i.jsx)(O, {
                                action: t
                            }, t.id))
                        })]
                    })
                },
                O = t => {
                    let {
                        action: n
                    } = t, [e, a] = n.action_type in x ? x[n.action_type] : [p, L.warningIcon];
                    return (0, i.jsx)(i.Fragment, {
                        children: n.descriptions.map((t, n) => (0, i.jsxs)("div", {
                            className: L.classificationActionsTakenRow,
                            children: [(0, i.jsx)("div", {
                                className: L.classificationActionsTakenRowIcon,
                                children: (0, i.jsx)(e, {
                                    className: a,
                                    width: 15,
                                    height: 15
                                })
                            }), (0, i.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-normal",
                                children: t
                            })]
                        }, n))
                    })
                },
                h = t => {
                    let {
                        classificationTypeText: n,
                        policyExplainerLink: e
                    } = t;
                    return (0, i.jsxs)(s.Anchor, {
                        href: e,
                        className: L.classificationPolicyCard,
                        children: [(0, i.jsx)("div", {
                            className: L.classificationPolicyCardIcon,
                            children: (0, i.jsx)(u.default, {
                                className: L.shieldIcon,
                                width: 32,
                                height: 32
                            })
                        }), (0, i.jsxs)("div", {
                            className: L.classificationPolicyDescriptionContainer,
                            children: [(0, i.jsx)(s.Text, {
                                variant: "text-md/bold",
                                children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
                                    classificationDescription: n
                                })
                            }), (0, i.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_SUBTEXT
                            })]
                        }), (0, i.jsx)("div", {
                            className: L.classificationPolicyLinkIcon,
                            children: (0, i.jsx)(E.default, {
                                className: L.arrowIcon,
                                width: "24px",
                                height: "24px"
                            })
                        })]
                    })
                },
                F = t => {
                    let {
                        tosLink: n,
                        communityGuidelinesLink: e,
                        appealLink: a,
                        classificationTypeText: c,
                        policyExplainerLink: l,
                        letUsKnowClick: o
                    } = t;
                    return (0, i.jsxs)("div", {
                        className: L.classificationActionExplanationContainer,
                        children: [(0, i.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
                        }), (0, i.jsx)(s.Text, {
                            className: L.guidelinesExplanation,
                            variant: "text-sm/normal",
                            children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
                                tosLink: n,
                                communityGuidelinesLink: e
                            })
                        }), (0, i.jsx)(h, {
                            classificationTypeText: c,
                            policyExplainerLink: l
                        }), (0, i.jsx)("div", {
                            className: L.classificationLetUsKnowContainer,
                            children: (0, i.jsx)(s.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
                                    letUsKnowHook: (t, n) => (0, i.jsx)(s.Anchor, {
                                        href: a,
                                        onClick: o,
                                        children: t
                                    }, n)
                                })
                            })
                        })]
                    })
                },
                H = t => (0, i.jsxs)("div", {
                    className: L.classificationContainer,
                    children: [(0, i.jsx)(R, {
                        classificationTypeText: t.classificationTypeText
                    }), (0, i.jsx)(U, {
                        actions: t.actions
                    }), (0, i.jsx)(F, {
                        appealLink: t.appealLink,
                        communityGuidelinesLink: t.communityGuidelinesLink,
                        tosLink: t.tosLink,
                        classificationTypeText: t.classificationTypeText,
                        policyExplainerLink: t.policyExplainerLink,
                        letUsKnowClick: t.letUsKnowClick
                    })]
                });
            var m = t => {
                let {
                    classificationId: n,
                    source: e,
                    onError: s
                } = t, {
                    classification: c,
                    classificationRequestState: l
                } = (0, f.useSafetyHubClassification)(n), o = (0, _.useSafetyHubAccountStanding)();
                return (a.useEffect(() => {
                    d.default.track(T.AnalyticEvents.SAFETY_HUB_ACTION, {
                        action: C.SafetyHubAnalyticsActions.ViewViolationDetail,
                        account_standing: o.state,
                        classification_ids: [Number(n)],
                        source: e
                    })
                }, []), null == c && l === I.ClassificationRequestState.FAILED) ? (s(), null) : null == c ? null : (0, i.jsx)(H, {
                    actions: c.actions,
                    classificationTypeText: c.description,
                    tosLink: C.SafetyHubLinks.TOS_LINK,
                    communityGuidelinesLink: C.SafetyHubLinks.COMMUNITY_GUIDELINES,
                    appealLink: C.SafetyHubLinks.APPEALS_LINK,
                    policyExplainerLink: c.explainer_link,
                    letUsKnowClick: () => {
                        d.default.track(T.AnalyticEvents.SAFETY_HUB_ACTION, {
                            action: C.SafetyHubAnalyticsActions.ClickLetUsKnow,
                            account_standing: o.state,
                            classification_ids: [Number(n)],
                            source: e
                        })
                    }
                })
            }
        },
        825138: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return A
                }
            });
            var i = e("37983");
            e("884691");
            var a = e("77078"),
                s = e("79112"),
                c = e("792105"),
                l = e("573240"),
                o = e("170213"),
                r = e("49111"),
                u = e("782340"),
                E = e("581935"),
                S = e("49155"),
                A = t => {
                    let {
                        transitionState: n,
                        onClose: e,
                        classificationId: A,
                        source: d
                    } = t, I = (0, c.default)(), _ = () => {
                        e(), s.default.open(r.UserSettingsSections.PRIVACY_AND_SAFETY, o.SafetyHubView.ACCOUNT_STANDING)
                    };
                    return (0, i.jsxs)(a.ModalRoot, {
                        className: E.modalRoot,
                        transitionState: n,
                        children: [(0, i.jsxs)("div", {
                            className: E.modalHeader,
                            children: [(0, i.jsx)("img", {
                                className: E.image,
                                src: S,
                                alt: ""
                            }), (0, i.jsx)(a.ModalCloseButton, {
                                className: E.modalClose,
                                onClick: e
                            })]
                        }), (0, i.jsx)(a.ModalContent, {
                            className: E.modalContent,
                            children: I ? (0, i.jsx)(a.Spinner, {}) : (0, i.jsx)(l.default, {
                                classificationId: A,
                                source: d,
                                onError: _
                            })
                        }), (0, i.jsx)(a.ModalFooter, {
                            children: (0, i.jsx)(a.Button, {
                                className: E.button,
                                type: "button",
                                color: a.Button.Colors.BRAND,
                                onClick: _,
                                children: u.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT
                            })
                        })]
                    })
                }
        },
        104359: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return s
                }
            });
            var i = e("37983");
            e("884691");
            var a = e("75196");

            function s(t) {
                let {
                    width: n = 32,
                    height: e = 32,
                    color: s = "currentColor",
                    ...c
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, a.default)(c),
                    width: n,
                    height: e,
                    viewBox: "0 0 12 12",
                    fill: "none",
                    children: [(0, i.jsx)("path", {
                        d: "M7.25 1H4.75V7.25H7.25V1Z",
                        fill: s
                    }), (0, i.jsx)("path", {
                        d: "M4.75 9.75C4.75 10.4167 5.33333 11 6 11C6.66667 11 7.25 10.4167 7.25 9.75C7.25 9.08333 6.66667 8.5 6 8.5C5.33333 8.5 4.75 9.08333 4.75 9.75Z",
                        fill: s
                    })]
                })
            }
        },
        4845: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return l
                }
            });
            var i = e("37983");
            e("884691");
            var a = e("469563"),
                s = e("167338"),
                c = e("75196"),
                l = (0, a.replaceIcon)(function(t) {
                    let {
                        width: n = 24,
                        height: e = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...l
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, c.default)(l),
                        width: n,
                        height: e,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.jsx)("path", {
                            d: "M19.1989 4H4.79814C3.80539 4 2.99805 4.80734 2.99805 5.80009V16.6006C2.99805 17.5934 3.80539 18.4007 4.79814 18.4007H6.59823V22.0009L11.3982 18.4007H19.198C20.1907 18.4007 20.998 17.5934 20.998 16.6006V5.80009C20.9989 4.80734 20.1916 4 19.1989 4ZM11.9985 14.8005C11.5017 14.8005 11.0985 14.3982 11.0985 13.9005C11.0985 13.4028 11.5017 13.0005 11.9985 13.0005C12.4953 13.0005 12.8985 13.4028 12.8985 13.9005C12.8985 14.3982 12.4953 14.8005 11.9985 14.8005ZM12.8985 12.1004H11.0985V7.60018H12.8985V12.1004Z",
                            fill: a,
                            className: s
                        })
                    })
                }, s.ChatAlertIcon)
        },
        975743: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return l
                }
            });
            var i = e("37983");
            e("884691");
            var a = e("469563"),
                s = e("877585"),
                c = e("75196"),
                l = (0, a.replaceIcon)(function(t) {
                    let {
                        width: n = 24,
                        height: e = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...l
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, c.default)(l),
                        width: n,
                        height: e,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
                        })
                    })
                }, s.ShieldIcon)
        }
    }
]);