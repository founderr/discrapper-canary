(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40574"], {
        769174: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TrophyIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var o = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...c
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        779807: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                WarningIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var o = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...c
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M10 3.1a2.37 2.37 0 0 1 4 0l8.71 14.75c.84 1.41-.26 3.15-2 3.15H3.29c-1.74 0-2.84-1.74-2-3.15L9.99 3.1Zm3.25 14.65a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM13.06 14l.37-5.94a1 1 0 0 0-1-1.06h-.87a1 1 0 0 0-1 1.06l.38 5.94a1.06 1.06 0 0 0 2.12 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        170213: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SafetyHubView: function() {
                    return c
                },
                SafetyHubLinks: function() {
                    return N
                },
                SafetyHubPolicyNoticeKeys: function() {
                    return S
                },
                SafetySystemNotificationCtaType: function() {
                    return l
                },
                SafetySystemNotificationEmbedKeys: function() {
                    return A
                },
                SafetyHubAnalyticsActions: function() {
                    return u
                },
                SafetyHubAnalyticsActionSource: function() {
                    return d
                }
            });
            var i, o, a, r, s, c, l, u, d, f, E = n("49111");
            (i = c || (c = {})).SETTINGS = "SETTINGS", i.ACCOUNT_STANDING = "ACCOUNT_STANDING";
            class N {}
            N.TOS_LINK = "https://discord.com/terms", N.COMMUNITY_GUIDELINES = "https://discord.com/guidelines", N.APPEALS_LINK = "https://support.discord.com/hc/requests/new", N.WARNING_SYSTEM_HELPCENTER_LINK = "https://support.discord.com/hc/articles/18210965981847";
            class S {}
            S.CLASSIFICATION_ID = "classification_id", S.INCIDENT_TIMESTAMP = "incident_time", (o = l || (l = {})).POLICY_VIOLATION_DETAIL = "policy_violation_detail", o.LEARN_MORE_LINK = "learn_more_link";
            class A {}
            A.ICON_TYPE = "icon_type", A.HEADER = "header", A.BODY = "body", A.CTAS = "ctas", A.TIMESTAMP = "timestamp", A.THEME = "theme", A.CLIENT_VERSION_MESSAGE = "client_version_message", A.LEARN_MORE_LINK = "learn_more_link", A.CLASSIFICATION_ID = "classification_id", (a = u || (u = {}))[a.ViewViolationDetail = 0] = "ViewViolationDetail", a[a.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", a[a.ClickLetUsKnow = 2] = "ClickLetUsKnow", (r = d || (d = {}))[r.SystemDM = 0] = "SystemDM", r[r.StandingTab = 1] = "StandingTab", Object.freeze({
                SPEED_BUMP: E.AnalyticsSections.APPEAL_INGESTION_SPEED_BUMP,
                COLLECT_SIGNAL: E.AnalyticsSections.APPEAL_INGESTION_COLLECT_SIGNAL,
                CONFIRM_SUBMISSION: E.AnalyticsSections.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                REQUEST_SENT: E.AnalyticsSections.APPEAL_INGESTION_REQUEST_SENT,
                THANKS: E.AnalyticsSections.APPEAL_INGESTION_THANKS,
                SPAM: E.AnalyticsSections.APPEAL_INGESTION_SPAM
            }), (s = f || (f = {})).DIDNT_VIOLATE = "TODO i18n a", s.STRICT_OR_UNFAIR = "TODO i18n b", s.PENALTY = "TODO i18n c", s.SOMETHING_ELSE = "TODO i18n d"
        },
        736393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClassificationRelativeIncidentTime: function() {
                    return s
                },
                getAttachmentFilename: function() {
                    return c
                },
                parseMessageEmbedForProps: function() {
                    return l
                }
            }), n("808653");
            var i = n("866227"),
                o = n.n(i),
                a = n("170213"),
                r = n("894488");

            function s(e) {
                return o().to(o(e))
            }

            function c(e) {
                var t;
                return "".concat(r.SPOILER_ATTACHMENT_PREFIX, "_").concat(null !== (t = e.filename) && void 0 !== t ? t : ".png")
            }

            function l(e) {
                var t, n, i, o;
                if (null == e.fields) return;
                let r = e.fields.reduce((e, t) => (e[t.rawName] = t.rawValue, e), {});
                return {
                    header: null !== (t = r[a.SafetySystemNotificationEmbedKeys.HEADER]) && void 0 !== t ? t : "",
                    icon: r[a.SafetySystemNotificationEmbedKeys.ICON_TYPE],
                    body: null !== (n = r[a.SafetySystemNotificationEmbedKeys.BODY]) && void 0 !== n ? n : "",
                    ctas: (null !== (i = r[a.SafetySystemNotificationEmbedKeys.CTAS]) && void 0 !== i ? i : "").split(",").filter(e => "" !== e),
                    timestamp: parseFloat(null !== (o = r[a.SafetySystemNotificationEmbedKeys.TIMESTAMP]) && void 0 !== o ? o : 0),
                    theme: r[a.SafetySystemNotificationEmbedKeys.THEME],
                    learn_more_link: r[a.SafetySystemNotificationEmbedKeys.LEARN_MORE_LINK],
                    classification_id: r[a.SafetySystemNotificationEmbedKeys.CLASSIFICATION_ID]
                }
            }
            n("782340")
        },
        858839: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsSuspendedUserPageEnabled: function() {
                    return a
                }
            });
            var i = n("862205");
            let o = (0, i.createExperiment)({
                kind: "user",
                id: "2023-12_suspended_user_access_to_account_standing",
                label: "Suspended User Account Standing Page",
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

            function a(e) {
                return !!o.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        854908: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983"),
                o = n("884691"),
                a = n("65597"),
                r = n("77078"),
                s = n("437822"),
                c = n("789563"),
                l = n("393414"),
                u = n("489622"),
                d = n("858839"),
                f = n("861348"),
                E = n("170213"),
                N = n("49111"),
                S = n("782340"),
                A = n("876680");

            function _() {
                return (0, i.jsxs)(u.default, {
                    color: u.NoticeColors.DANGER,
                    className: A.nagbar,
                    children: [(0, i.jsx)(r.Text, {
                        tag: "span",
                        color: "always-white",
                        variant: "text-md/normal",
                        children: S.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR
                    }), (0, i.jsx)(u.NoticeButtonAnchor, {
                        href: E.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK,
                        children: (0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "always-white",
                            children: S.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA
                        })
                    })]
                })
            }

            function T() {
                return (0, i.jsx)("div", {
                    className: A.pageContainer,
                    children: (0, i.jsx)(f.default, {})
                })
            }

            function I() {
                let e = (0, a.default)([c.default], () => c.default.hasLoadedExperiments),
                    t = (0, d.useIsSuspendedUserPageEnabled)("standalone page");
                return (o.useEffect(() => {
                    e && !t ? (0, l.transitionTo)(N.Routes.ME) : !e && !t && s.default.getExperiments()
                }, [e, t]), e && t) ? (0, i.jsxs)("div", {
                    className: A.container,
                    children: [(0, i.jsx)(_, {}), (0, i.jsx)(T, {})]
                }) : null
            }
        },
        300113: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var o = n("469563"),
                a = n("769174"),
                r = n("75196"),
                s = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: o = "currentColor",
                        className: a,
                        foreground: s,
                        ...c
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(c),
                        className: a,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M17.722 3.00098H21C21.553 3.00098 22 3.44898 22 4.00098V8.00098C22 8.30498 21.861 8.59298 21.625 8.78198L16.696 12.724C15.794 13.86 14.49 14.659 13 14.911V16.001H15C15.553 16.001 16 16.449 16 17.001V19.001H8V17.001C8 16.449 8.447 16.001 9 16.001H11V14.911C9.51 14.659 8.206 13.86 7.304 12.724L2.375 8.78198C2.139 8.59298 2 8.30498 2 8.00098V4.00098C2 3.44898 2.447 3.00098 3 3.00098H6.278C6.625 2.40598 7.263 2.00098 8 2.00098H16C16.738 2.00098 17.375 2.40598 17.722 3.00098ZM4 5.00098V7.52098L6.006 9.12598C6.006 9.10435 6.00448 9.08348 6.00297 9.06274C6.00148 9.04224 6 9.02185 6 9.00098V5.00098H4ZM17.994 9.12698L20 7.52098V5.00098H18V9.00098C18 9.02173 17.9985 9.042 17.9971 9.0625C17.9955 9.08349 17.994 9.10472 17.994 9.12698ZM7 20.001H17V22.001H7V20.001Z"
                        })
                    })
                }, a.TrophyIcon, void 0, {
                    size: 24
                })
        },
        489622: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NoticeColors: function() {
                    return E
                },
                NoticeButton: function() {
                    return N
                },
                PrimaryCTANoticeButton: function() {
                    return S
                },
                NoticeButtonAnchor: function() {
                    return A
                },
                NoticeCloseButton: function() {
                    return _
                },
                default: function() {
                    return T
                }
            });
            var i = n("37983");
            n("884691");
            var o = n("414456"),
                a = n.n(o),
                r = n("394846"),
                s = n("77078"),
                c = n("945330"),
                l = n("599110"),
                u = n("49111"),
                d = n("782340"),
                f = n("105029");
            let E = Object.freeze({
                DEFAULT: f.colorDefault,
                NEUTRAL: f.colorNeutral,
                BRAND: f.colorBrand,
                WARNING: f.colorWarning,
                DANGER: f.colorDanger,
                INFO: f.colorInfo,
                STREAMER_MODE: f.colorStreamerMode,
                CUSTOM: f.colorCustom,
                SPOTIFY: f.colorSpotify,
                PLAYSTATION: f.colorPlayStation,
                PREMIUM_TIER_0: f.colorPremiumTier0,
                PREMIUM_TIER_1: f.colorPremiumTier1,
                PREMIUM_TIER_2: f.colorPremiumTier2
            });

            function N(e) {
                let {
                    children: t,
                    className: n,
                    minor: o = !1,
                    ...r
                } = e;
                return (0, i.jsx)(s.FocusRing, {
                    children: (0, i.jsx)("button", {
                        className: a(f.button, n, {
                            [f.buttonMinor]: o
                        }),
                        ...r,
                        children: t
                    })
                })
            }

            function S(e) {
                let {
                    children: t,
                    noticeType: n,
                    additionalTrackingProps: o,
                    ...a
                } = e;
                return (0, i.jsx)(N, {
                    ...a,
                    onClick: e => {
                        var t, i;
                        null != a.onClick && a.onClick(e), t = n, i = o, null != t && l.default.track(u.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
                            notice_type: t,
                            ...i
                        })
                    },
                    children: t
                })
            }

            function A(e) {
                let {
                    children: t,
                    href: n,
                    ...o
                } = e;
                return (0, i.jsx)(s.Anchor, {
                    ...o,
                    className: f.button,
                    href: n,
                    children: t
                })
            }

            function _(e) {
                let {
                    onClick: t,
                    noticeType: n
                } = e;
                return (0, i.jsx)(s.Clickable, {
                    focusProps: {
                        offset: 6
                    },
                    className: f.closeButton,
                    onClick: () => {
                        var e;
                        t(), null != (e = n) && l.default.track(u.AnalyticEvents.APP_NOTICE_CLOSED, {
                            notice_type: e
                        })
                    },
                    "aria-label": d.default.Messages.DISMISS,
                    children: (0, i.jsx)(c.default, {
                        className: f.closeIcon,
                        width: 18,
                        height: 18
                    })
                })
            }

            function T(e) {
                let {
                    color: t = E.DEFAULT,
                    className: n,
                    style: o,
                    children: s
                } = e;
                return (0, i.jsx)("div", {
                    className: a(f.notice, {
                        [f.isMobile]: r.isMobile
                    }, n, t),
                    style: null != o ? o : void 0,
                    children: s
                })
            }
        }
    }
]);