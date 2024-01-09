(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["62498"], {
        60266: function(t, e, a) {
            t.exports = function(t, e, a, n) {
                for (var i = -1, s = null == t ? 0 : t.length; ++i < s;) {
                    var l = t[i];
                    e(n, l, a(l), t)
                }
                return n
            }
        },
        581628: function(t, e, a) {
            var n = a("978603");
            t.exports = function(t, e, a, i) {
                return n(t, function(t, n, s) {
                    e(i, t, a(t), s)
                }), i
            }
        },
        278296: function(t, e, a) {
            var n = a("60266"),
                i = a("581628"),
                s = a("698273"),
                l = a("725502");
            t.exports = function(t, e) {
                return function(a, r) {
                    var c = l(a) ? n : i,
                        u = e ? e() : {};
                    return c(a, t, s(r, 2), u)
                }
            }
        },
        816494: function(t, e, a) {
            var n = a("766665"),
                i = a("278296")(function(t, e, a) {
                    n(t, a, e)
                });
            t.exports = i
        },
        781324: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                getSafetyHubData: function() {
                    return u
                },
                getSafetyHubDataForClassification: function() {
                    return o
                }
            });
            var n = a("872717"),
                i = a("913144"),
                s = a("651693"),
                l = a("234998"),
                r = a("736393"),
                c = a("49111");
            async function u() {
                i.default.dispatch({
                    type: "SAFETY_HUB_FETCH_START"
                }), await n.default.get({
                    url: c.Endpoints.SAFETY_HUB
                }).then(t => {
                    let {
                        body: e
                    } = t, {
                        classifications: a,
                        guild_classifications: n,
                        account_standing: s
                    } = e, l = a.map(t => (d(t), t));
                    i.default.dispatch({
                        type: "SAFETY_HUB_FETCH_SUCCESS",
                        classifications: l.concat(null != n ? n : []),
                        accountStanding: s
                    })
                }).catch(t => {
                    var e, a;
                    i.default.dispatch({
                        type: "SAFETY_HUB_FETCH_FAILURE",
                        error: null !== (a = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== a ? a : "Unknown error"
                    })
                })
            }
            async function o(t) {
                i.default.dispatch({
                    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
                    classificationId: t
                }), await n.default.get({
                    url: c.Endpoints.SAFETY_HUB
                }).then(e => {
                    let {
                        body: a
                    } = e, {
                        classifications: n,
                        account_standing: s,
                        is_dsa_eligible: l
                    } = a, r = n.find(e => e.id === t);
                    null != r ? (d(r), i.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                        classification: r,
                        accountStanding: s,
                        isDsaEligible: l
                    })) : i.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                        error: "Classification not found.",
                        classificationId: t
                    })
                }).catch(e => {
                    var a, n;
                    i.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                        error: null !== (n = null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : a.message) && void 0 !== n ? n : "Unknown error",
                        classificationId: t
                    })
                })
            }

            function d(t) {
                if (null != t.flagged_content && t.flagged_content.length > 0) {
                    let e = t.flagged_content[0];
                    e.attachments = e.attachments.filter(t => {
                        let {
                            filename: e
                        } = t;
                        return (0, s.isImageFile)(e)
                    }), e.attachments.forEach(t => (0, l.setMessageAttachmentDimensions)(t)), t.flagged_content = (0, r.isFlaggedContentEmpty)(e) ? [] : [e]
                }
            }
        },
        667963: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                useIsSafetyHubDisplayGuildViolationsEnabled: function() {
                    return s
                }
            });
            var n = a("862205");
            let i = (0, n.createExperiment)({
                kind: "user",
                id: "2024-01_safety_hub_display_guild_violations",
                label: "Safety Hub Display Guild Violations",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Display guild violations in account standing",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function s(t) {
                return !!i.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        234998: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                setMessageAttachmentDimensions: function() {
                    return s
                }
            });
            var n = a("651693"),
                i = a("170213");

            function s(t) {
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
                            t.width = i.DEFAULT_MEDIA_MAX_WIDTH, t.height = i.DEFAULT_MEDIA_MAX_HEIGHT
                        })
                    }, e.onerror = () => {
                        t.width = i.DEFAULT_MEDIA_MAX_WIDTH, t.height = i.DEFAULT_MEDIA_MAX_HEIGHT
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
                            t.width = i.DEFAULT_MEDIA_MAX_WIDTH, t.height = i.DEFAULT_MEDIA_MAX_HEIGHT
                        })
                    }
                }
            }
        },
        647149: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                useIsInappAppealIngestionEnabled: function() {
                    return s
                }
            });
            var n = a("862205");
            let i = (0, n.createExperiment)({
                kind: "user",
                id: "2023-11_safety_hub_inapp_appeal_ingestion",
                label: "In-app Appeal Ingestion",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function s() {
                return !!i.useExperiment({
                    location: "appeal-ingestion-link"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        646356: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return I
                }
            });
            var n = a("816494"),
                i = a.n(n),
                s = a("446674"),
                l = a("913144"),
                r = a("908539");
            let c = {},
                u = {},
                o = {
                    state: r.AccountStandingState.ALL_GOOD
                },
                d = !1,
                _ = !1,
                S = null,
                f = null,
                T = !1,
                E = null;
            class A extends s.default.Store {
                isFetching() {
                    return d
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
                    return S
                }
                isInitialized() {
                    return _
                }
                getClassificationRequestState(t) {
                    return u[t]
                }
                getAppealClassificationId() {
                    return f
                }
                getIsDsaEligible() {
                    return T
                }
                getAppealSignal() {
                    return E
                }
            }
            A.displayName = "SafetyHubStore";
            var I = new A(l.default, {
                SAFETY_HUB_FETCH_START: function(t) {
                    d = !0
                },
                SAFETY_HUB_FETCH_SUCCESS: function(t) {
                    let {
                        classifications: e,
                        accountStanding: a
                    } = t;
                    c = i(e, "id"), o = a, d = !1, _ = !0, S = null
                },
                SAFETY_HUB_FETCH_FAILURE: function(t) {
                    let {
                        error: e
                    } = t;
                    d = !1, _ = !1, S = e
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_START: function(t) {
                    u[t.classificationId] = r.ClassificationRequestState.PENDING, d = !0
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(t) {
                    let {
                        classification: e,
                        accountStanding: a,
                        isDsaEligible: n
                    } = t;
                    c[e.id] = e, u[e.id] = r.ClassificationRequestState.SUCCESS, o = a, d = !1, S = null, T = n
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(t) {
                    let {
                        error: e,
                        classificationId: a
                    } = t;
                    d = !1, S = e, u[a] = r.ClassificationRequestState.FAILED
                },
                SAFETY_HUB_APPEAL_OPEN: function(t) {
                    let {
                        classificationId: e
                    } = t;
                    f = e
                },
                SAFETY_HUB_APPEAL_CLOSE: function() {
                    f = null, E = null
                },
                SAFETY_HUB_APPEAL_SIGNAL_SELECT: function(t) {
                    let {
                        signal: e
                    } = t;
                    E = e
                },
                LOGOUT: function() {
                    d = !1, c = {}, o = {
                        state: r.AccountStandingState.ALL_GOOD
                    }, f = null, E = null
                }
            })
        },
        310888: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                useIsNewClassification: function() {
                    return i
                }
            });
            var n = a("249654");
            let i = t => {
                let e = n.default.extractTimestamp(t.id);
                return 864e5 > Math.abs(e - new Date().getTime())
            }
        },
        132206: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                useSafetyHubAccountStanding: function() {
                    return s
                }
            });
            var n = a("446674"),
                i = a("646356");

            function s() {
                return (0, n.useStateFromStores)([i.default], () => i.default.getAccountStanding())
            }
        },
        698609: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                useSafetyHubClassification: function() {
                    return o
                },
                useActiveSafetyHubClassifications: function() {
                    return d
                },
                useExpiredSafetyHubClassifications: function() {
                    return _
                }
            });
            var n = a("884691"),
                i = a("446674"),
                s = a("299039"),
                l = a("781324"),
                r = a("647149"),
                c = a("646356");

            function u() {
                let t = (0, i.useStateFromStoresArray)([c.default], () => c.default.getClassifications());
                return t.sort((t, e) => s.default.extractTimestamp(e.id) - s.default.extractTimestamp(t.id))
            }

            function o(t) {
                let e = (0, i.useStateFromStores)([c.default], () => c.default.getClassification(t)),
                    a = (0, i.useStateFromStores)([c.default], () => c.default.getClassificationRequestState(t)),
                    s = (0, i.useStateFromStores)([c.default], () => c.default.getIsDsaEligible()),
                    u = (0, r.useIsInappAppealIngestionEnabled)();
                return n.useEffect(() => {
                    void 0 === e && null == a && l.getSafetyHubDataForClassification(t)
                }, [t, e, a]), {
                    classification: e,
                    classificationRequestState: a,
                    isDsaEligible: s,
                    isAppealEligible: u && s && null != e && null == e.appeal_status
                }
            }

            function d() {
                let t = u(),
                    e = new Date;
                return t.filter(t => new Date(t.max_expiration_time) > e)
            }

            function _() {
                let t = u(),
                    e = new Date;
                return t.filter(t => new Date(t.max_expiration_time) <= e)
            }
        },
        333781: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                useSafetyHubFetchError: function() {
                    return s
                }
            });
            var n = a("446674"),
                i = a("646356");
            let s = () => (0, n.useStateFromStores)([i.default], () => i.default.getFetchError())
        },
        422671: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                useSafetyHubInitialized: function() {
                    return s
                }
            });
            var n = a("446674"),
                i = a("646356");

            function s() {
                let t = (0, n.useStateFromStores)([i.default], () => i.default.isInitialized());
                return t
            }
        },
        792105: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return s
                }
            });
            var n = a("446674"),
                i = a("646356");

            function s() {
                let t = (0, n.useStateFromStores)([i.default], () => i.default.isFetching());
                return t
            }
        },
        133479: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return g
                }
            }), a("222007");
            var n = a("37983"),
                i = a("884691"),
                s = a("917351"),
                l = a("446674"),
                r = a("669491"),
                c = a("891128"),
                u = a("165984"),
                o = a("505088"),
                d = a("77078"),
                _ = a("697218"),
                S = a("908539"),
                f = a("132206"),
                T = a("260883"),
                E = a("170213"),
                A = a("782340"),
                I = a("122698");

            function g() {
                let t = (0, f.useSafetyHubAccountStanding)(),
                    e = (0, l.useStateFromStores)([_.default], () => _.default.getCurrentUser()),
                    [a, g] = i.useState(36),
                    N = i.useRef({
                        [S.AccountStandingState.ALL_GOOD]: null,
                        [S.AccountStandingState.LIMITED]: null,
                        [S.AccountStandingState.VERY_LIMITED]: null,
                        [S.AccountStandingState.AT_RISK]: null,
                        [S.AccountStandingState.SUSPENDED]: null
                    }),
                    m = i.useCallback(() => {
                        let t = Math.max(...Object.values(N.current).map(t => {
                            var e;
                            return null !== (e = null == t ? void 0 : t.getBoundingClientRect().height) && void 0 !== e ? e : 36
                        }));
                        g(Math.max(t, 36))
                    }, []);
                i.useEffect(() => {
                    m();
                    let t = (0, s.debounce)(m, 100);
                    window.addEventListener("resize", t)
                }, [m]);
                let C = {
                        [S.AccountStandingState.ALL_GOOD]: {
                            title: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_TITLE,
                            description: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_DESCRIPTION.format({
                                termsOfService: E.SafetyHubLinks.TOS_LINK,
                                communityGuidelines: E.SafetyHubLinks.COMMUNITY_GUIDELINES
                            }),
                            status: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_SHORT,
                            Icon: c.CircleCheckIcon,
                            color: r.default.colors.STATUS_POSITIVE
                        },
                        [S.AccountStandingState.LIMITED]: {
                            title: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_TITLE,
                            description: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_DESCRIPTION,
                            status: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_SHORT,
                            Icon: u.CircleExclamationPointIcon,
                            color: r.default.colors.STATUS_WARNING
                        },
                        [S.AccountStandingState.VERY_LIMITED]: {
                            title: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_TITLE,
                            description: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_DESCRIPTION,
                            status: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_SHORT,
                            Icon: u.CircleExclamationPointIcon,
                            color: r.default.unsafe_rawColors.ORANGE_345
                        },
                        [S.AccountStandingState.AT_RISK]: {
                            title: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_TITLE,
                            description: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_DESCRIPTION,
                            status: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_SHORT,
                            Icon: u.CircleExclamationPointIcon,
                            color: r.default.colors.STATUS_DANGER
                        },
                        [S.AccountStandingState.SUSPENDED]: {
                            title: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_TITLE,
                            description: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_DESCRIPTION.format({
                                termsOfService: E.SafetyHubLinks.TOS_LINK,
                                communityGuidelines: E.SafetyHubLinks.COMMUNITY_GUIDELINES
                            }),
                            status: A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_SHORT,
                            Icon: o.CircleXIcon,
                            color: r.default.colors.ICON_MUTED
                        }
                    },
                    {
                        title: h,
                        description: x,
                        color: p,
                        Icon: H
                    } = C[t.state],
                    D = Object.keys(C).length;
                return (0, n.jsxs)(d.Card, {
                    className: I.container,
                    outline: !1,
                    children: [(0, n.jsx)("div", {
                        className: I.profile,
                        children: (0, n.jsx)(T.default, {
                            user: e,
                            size: d.AvatarSizes.SIZE_80
                        })
                    }), (0, n.jsxs)("div", {
                        className: I.status,
                        children: [(0, n.jsxs)("div", {
                            className: I.title,
                            children: [(0, n.jsx)(d.Heading, {
                                color: "header-primary",
                                variant: "heading-lg/normal",
                                children: h.format({
                                    hook: t => (0, n.jsx)(d.Text, {
                                        style: {
                                            color: p.css
                                        },
                                        variant: "heading-lg/bold",
                                        tag: "span",
                                        children: t
                                    })
                                })
                            }), (0, n.jsx)(d.Text, {
                                color: "text-normal",
                                variant: "text-sm/normal",
                                children: x
                            })]
                        }), (0, n.jsxs)("div", {
                            className: I.health,
                            style: {
                                height: a
                            },
                            children: [(0, n.jsx)("div", {
                                className: I.line
                            }), Object.entries(C).map((e, a) => {
                                let [i, s] = e, l = parseInt(i) === t.state;
                                return (0, n.jsxs)("div", {
                                    className: I.statusOption,
                                    ref: t => N.current[parseInt(i)] = t,
                                    children: [l ? (0, n.jsx)(H, {
                                        className: I.marker,
                                        color: s.color
                                    }) : (0, n.jsx)("div", {
                                        className: I.marker,
                                        style: {
                                            marginLeft: 0 === a ? -6 : 0,
                                            marginRight: a === D - 1 ? -6 : 0
                                        },
                                        children: (0, n.jsx)("div", {
                                            className: I.empty
                                        })
                                    }), s.status.format({
                                        hook: t => (0, n.jsx)(d.Text, {
                                            color: "text-normal",
                                            variant: "text-sm/normal",
                                            className: I.statusLabel,
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
            var i = a("77078"),
                s = a("130479"),
                l = a("53708");

            function r(t) {
                let {
                    user: e,
                    size: a
                } = t, r = (0, i.getAvatarSpecs)(a), c = null != e ? e.getAvatarURL(null, r.size) : l;
                return (0, n.jsx)("div", {
                    className: s.avatarBackground,
                    children: (0, n.jsx)("div", {
                        className: s.avatar,
                        style: {
                            width: r.size,
                            height: r.size
                        },
                        children: (0, n.jsx)(i.Avatar, {
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
                    return N
                }
            });
            var n = a("37983"),
                i = a("884691"),
                s = a("432710"),
                l = a("77078"),
                r = a("155084"),
                c = a("489622"),
                u = a("599110"),
                o = a("781324"),
                d = a("132206"),
                _ = a("333781"),
                S = a("422671"),
                f = a("792105"),
                T = a("133479"),
                E = a("966677"),
                A = a("49111"),
                I = a("782340"),
                g = a("302713");

            function N() {
                let t = (0, f.default)(),
                    e = (0, S.useSafetyHubInitialized)(),
                    a = (0, d.useSafetyHubAccountStanding)(),
                    N = (0, _.useSafetyHubFetchError)();
                return (i.useEffect(() => {
                    o.getSafetyHubData()
                }, []), i.useEffect(() => {
                    e && (u.default.track(A.AnalyticEvents.SAFETY_HUB_VIEWED, {
                        account_standing: a.state
                    }), r.default.increment({
                        name: s.MetricEvents.SAFETY_HUB_VIEW
                    }))
                }, [e]), t) ? (0, n.jsx)("div", {
                    children: (0, n.jsx)(l.Spinner, {})
                }) : null != N ? (0, n.jsxs)(c.default, {
                    color: c.NoticeColors.DANGER,
                    className: g.nagbar,
                    children: [I.default.Messages.SAFETY_HUB_ERROR_MESSAGE, (0, n.jsx)(c.NoticeButton, {
                        onClick: () => o.getSafetyHubData(),
                        children: I.default.Messages.SAFETY_HUB_ERROR_ACTION_BUTTON
                    })]
                }) : (0, n.jsxs)("div", {
                    className: g.container,
                    children: [(0, n.jsx)(T.default, {}), (0, n.jsx)(E.ConnectedSafetyHubViolationsContainer, {})]
                })
            }
        },
        966677: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                ConnectedSafetyHubViolationsContainer: function() {
                    return U
                }
            }), a("222007");
            var n = a("37983"),
                i = a("884691"),
                s = a("414456"),
                l = a.n(s),
                r = a("779807"),
                c = a("77078"),
                u = a("461380"),
                o = a("543289"),
                d = a("300113"),
                _ = a("599110"),
                S = a("299039"),
                f = a("667963"),
                T = a("736393"),
                E = a("310888"),
                A = a("132206"),
                I = a("698609"),
                g = a("170213"),
                N = a("49111"),
                m = a("782340"),
                C = a("231180");
            let h = t => {
                    let {
                        status: e,
                        onClick: a,
                        opened: i,
                        count: s
                    } = t;
                    return (0, n.jsxs)(c.Clickable, {
                        className: C.header,
                        onClick: a,
                        children: [(0, n.jsx)("div", {
                            className: C.headerIconWrapper,
                            children: (0, n.jsx)(r.WarningIcon, {
                                color: "active" === e ? c.tokens.colors.INTERACTIVE_ACTIVE : c.tokens.colors.INTERACTIVE_MUTED,
                                width: 24,
                                height: 24
                            })
                        }), (0, n.jsxs)("div", {
                            className: C.title,
                            children: [(0, n.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-normal",
                                children: "active" === e ? m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_ACTIVE.format({
                                    count: s.toString()
                                }) : m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_EXPIRED.format({
                                    count: s.toString()
                                })
                            }), (0, n.jsx)(c.Heading, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: "active" === e ? m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_ACTIVE : m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_EXPIRED
                            })]
                        }), (0, n.jsx)("div", {
                            className: C.caret,
                            children: (0, n.jsx)(u.default, {
                                width: 18,
                                height: 18,
                                direction: i ? u.default.Directions.UP : u.default.Directions.DOWN
                            })
                        })]
                    })
                },
                x = () => (0, n.jsxs)("div", {
                    className: C.emptyState,
                    children: [(0, n.jsxs)("div", {
                        className: C.iconContainer,
                        children: [(0, n.jsx)("div", {
                            className: C.iconBackground,
                            children: (0, n.jsx)(d.default, {
                                className: C.icon
                            })
                        }), (0, n.jsx)(o.default, {
                            className: C.stars
                        })]
                    }), (0, n.jsx)(c.Heading, {
                        variant: "heading-md/bold",
                        className: C.emptyStateText,
                        children: m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_ACTIVE
                    }), (0, n.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: C.emptyStateSubtext,
                        children: m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_SUBTEXT_ACTIVE
                    })]
                }),
                p = () => (0, n.jsx)("div", {
                    className: C.emptyState,
                    children: (0, n.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: C.emptyStateSubtext,
                        children: m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_EXPIRED
                    })
                }),
                H = t => {
                    let {
                        timestamp: e
                    } = t;
                    return (0, n.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: C.timestamp,
                        children: (0, T.getClassificationRelativeIncidentTime)(e)
                    })
                },
                D = () => (0, n.jsx)(c.Text, {
                    variant: "text-xs/bold",
                    className: C.newBadge,
                    children: m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_NEW
                }),
                O = t => {
                    var e;
                    let {
                        classification: i
                    } = t, {
                        id: s,
                        description: r,
                        max_expiration_time: u
                    } = i, o = S.default.extractTimestamp(s), d = (0, E.useIsNewClassification)(i), _ = (0, f.useIsSafetyHubDisplayGuildViolationsEnabled)("violations_container"), T = new Date(u), A = T.toDateString();
                    return (0, n.jsx)(c.Clickable, {
                        onClick: () => {
                            (0, c.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await a.el("825138").then(a.bind(a, "825138"));
                                return e => (0, n.jsx)(t, {
                                    classificationId: s,
                                    source: g.SafetyHubAnalyticsActionSource.StandingTab,
                                    ...e
                                })
                            })
                        },
                        className: l(C.itemDetail, {
                            [C.itemDetailNew]: d
                        }),
                        children: (0, n.jsxs)("div", {
                            className: C.descriptionContainer,
                            children: [d ? (0, n.jsx)(D, {}) : (0, n.jsx)(H, {
                                timestamp: o
                            }), (0, n.jsx)(c.Heading, {
                                variant: "heading-lg/normal",
                                children: _ && null != i.guild_metadata ? m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION_GUILD.format({
                                    guildName: null == i ? void 0 : null === (e = i.guild_metadata) || void 0 === e ? void 0 : e.guild_name,
                                    description: r,
                                    descriptionHook: t => (0, n.jsx)(c.Text, {
                                        tag: "span",
                                        variant: "heading-lg/bold",
                                        children: t
                                    })
                                }) : m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION.format({
                                    description: r,
                                    descriptionHook: t => (0, n.jsx)(c.Text, {
                                        tag: "span",
                                        variant: "heading-lg/bold",
                                        children: t
                                    })
                                })
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                className: C.expirationDate,
                                children: T > new Date ? m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_ACTIVE.format({
                                    expirationDate: A
                                }) : m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_EXPIRED.format({
                                    expirationDate: A
                                })
                            })]
                        })
                    }, s)
                },
                v = t => {
                    let {
                        status: e,
                        classifications: a
                    } = t, [s, l] = i.useState(!1), [r, u] = i.useState(3), o = (0, A.useSafetyHubAccountStanding)(), d = i.useMemo(() => a.slice(0, r), [a, r]);
                    i.useEffect(() => {
                        s && _.default.track(N.AnalyticEvents.SAFETY_HUB_ACTION, {
                            action: g.SafetyHubAnalyticsActions.ViewViolationsDropdown,
                            account_standing: o.state,
                            classification_ids: d.map(t => Number(t.id)),
                            source: g.SafetyHubAnalyticsActionSource.StandingTab,
                            is_violative_content_shown: !1
                        })
                    }, [s, o.state, d]);
                    let S = a.length - d.length > 3 ? 3 : a.length - d.length;
                    return (0, n.jsxs)("div", {
                        className: C.dropdown,
                        children: [(0, n.jsx)(h, {
                            status: e,
                            onClick: () => l(t => !t),
                            opened: s,
                            count: a.length
                        }), s && (0, n.jsxs)("div", {
                            className: C.items,
                            children: [(0, n.jsx)(c.TabBar.Separator, {
                                style: {
                                    height: "1px",
                                    width: "100%"
                                }
                            }), d.length > 0 && d.map(t => (0, n.jsx)(O, {
                                classification: t
                            }, t.id)), d.length < a.length && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(c.TabBar.Separator, {
                                    style: {
                                        height: "1px",
                                        width: "100%"
                                    }
                                }), (0, n.jsx)("button", {
                                    className: C.paginationButton,
                                    onClick: () => u(t => t + S),
                                    children: m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_PAGINATION_BUTTON.format({
                                        nextPageSize: S
                                    })
                                })]
                            }), 0 === d.length && "active" === e && (0, n.jsx)(x, {}), 0 === d.length && "expired" === e && (0, n.jsx)(p, {})]
                        })]
                    })
                },
                U = () => {
                    let t = (0, I.useActiveSafetyHubClassifications)(),
                        e = (0, I.useExpiredSafetyHubClassifications)();
                    return 0 === t.length && 0 === e.length ? null : (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(v, {
                            status: "active",
                            classifications: t
                        }), (0, n.jsx)(v, {
                            status: "expired",
                            classifications: e
                        })]
                    })
                }
        }
    }
]);