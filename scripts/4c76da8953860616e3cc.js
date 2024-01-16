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
                E = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...l
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, E.default)(l),
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
                E = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...l
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, E.default)(l),
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
                    return A
                },
                SafetyHubPolicyNoticeKeys: function() {
                    return T
                },
                SafetySystemNotificationCtaType: function() {
                    return a
                },
                SafetySystemNotificationEmbedKeys: function() {
                    return d
                },
                SafetyHubAnalyticsActions: function() {
                    return S
                },
                SafetyHubAnalyticsActionSource: function() {
                    return I
                },
                AppealIngestionSignal: function() {
                    return u
                },
                DEFAULT_MEDIA_MAX_WIDTH: function() {
                    return C
                },
                DEFAULT_MEDIA_MAX_HEIGHT: function() {
                    return f
                },
                AppealIngestionSlideTypes: function() {
                    return N
                },
                SlidesOrderDsaEligible: function() {
                    return L
                },
                SlidesOrderNonDsaEligible: function() {
                    return O
                }
            });
            var i, o, E, r, s, l, c, a, S, I, u, N, _ = n("49111");
            (i = c || (c = {})).SETTINGS = "SETTINGS", i.ACCOUNT_STANDING = "ACCOUNT_STANDING";
            class A {}
            A.TOS_LINK = "https://discord.com/terms", A.COMMUNITY_GUIDELINES = "https://discord.com/guidelines", A.APPEALS_LINK = "https://support.discord.com/hc/requests/new", A.WARNING_SYSTEM_HELPCENTER_LINK = "https://support.discord.com/hc/articles/18210965981847", A.AGE_VERIFICATION_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731", A.SPAM_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__";
            class T {}
            T.CLASSIFICATION_ID = "classification_id", T.INCIDENT_TIMESTAMP = "incident_time", (o = a || (a = {})).POLICY_VIOLATION_DETAIL = "policy_violation_detail", o.LEARN_MORE_LINK = "learn_more_link";
            class d {}
            d.ICON_TYPE = "icon_type", d.HEADER = "header", d.BODY = "body", d.CTAS = "ctas", d.TIMESTAMP = "timestamp", d.THEME = "theme", d.CLIENT_VERSION_MESSAGE = "client_version_message", d.LEARN_MORE_LINK = "learn_more_link", d.CLASSIFICATION_ID = "classification_id", (E = S || (S = {}))[E.ViewViolationDetail = 0] = "ViewViolationDetail", E[E.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", E[E.ClickLetUsKnow = 2] = "ClickLetUsKnow", (r = I || (I = {}))[r.SystemDM = 0] = "SystemDM", r[r.StandingTab = 1] = "StandingTab", Object.freeze({
                SPEED_BUMP: _.AnalyticsSections.APPEAL_INGESTION_SPEED_BUMP,
                COLLECT_SIGNAL: _.AnalyticsSections.APPEAL_INGESTION_COLLECT_SIGNAL,
                CONFIRM_SUBMISSION: _.AnalyticsSections.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                REQUEST_SENT: _.AnalyticsSections.APPEAL_INGESTION_REQUEST_SENT,
                THANKS: _.AnalyticsSections.APPEAL_INGESTION_THANKS,
                SPAM: _.AnalyticsSections.APPEAL_INGESTION_SPAM
            }), (s = u || (u = {}))[s.DIDNT_VIOLATE_POLICY = 0] = "DIDNT_VIOLATE_POLICY", s[s.TOO_STRICT_UNFAIR = 1] = "TOO_STRICT_UNFAIR", s[s.DONT_AGREE_PENALTY = 2] = "DONT_AGREE_PENALTY", s[s.SOMETHING_ELSE = 3] = "SOMETHING_ELSE";
            let C = 372,
                f = 279;
            (l = N || (N = {})).SPEED_BUMP = "speed-bump", l.COLLECT_SIGNAL = "collect-signal", l.CONFIRM_SUBMISSION = "confirm-submission", l.REQUEST_SENT = "request-sent", l.THANKS = "thanks";
            let L = {
                    "speed-bump": {
                        next: "collect-signal",
                        prev: null
                    },
                    "collect-signal": {
                        next: "confirm-submission",
                        prev: "speed-bump"
                    },
                    "confirm-submission": {
                        next: "request-sent",
                        prev: "collect-signal"
                    },
                    "request-sent": {
                        next: null,
                        prev: null
                    }
                },
                O = {
                    "collect-signal": {
                        next: "thanks",
                        prev: null
                    },
                    thanks: {
                        next: null,
                        prev: null
                    }
                }
        },
        908539: function(e, t, n) {
            "use strict";
            var i, o, E, r, s, l, c, a, S, I, u;
            n.r(t), n.d(t, {
                ContentIdType: function() {
                    return i
                },
                AccountStandingState: function() {
                    return s
                },
                ClassificationRequestState: function() {
                    return l
                }
            }), (i || (i = {})).MESSAGE = "message", (c = o || (o = {}))[c.REVIEW_PENDING = 1] = "REVIEW_PENDING", c[c.CLASSIFICATION_UPHELD = 2] = "CLASSIFICATION_UPHELD", c[c.CLASSIFICATION_INVALIDATED = 3] = "CLASSIFICATION_INVALIDATED", (a = E || (E = {}))[a.UNSPECIFIED = 0] = "UNSPECIFIED", a[a.UNKNOWN = 1] = "UNKNOWN", a[a.UNSOLICITED_PORNOGRAPHY = 100] = "UNSOLICITED_PORNOGRAPHY", a[a.NONCONSENSUAL_PORNOGRAPHY = 200] = "NONCONSENSUAL_PORNOGRAPHY", a[a.GLORIFYING_VIOLENCE = 210] = "GLORIFYING_VIOLENCE", a[a.HATE_SPEECH = 220] = "HATE_SPEECH", a[a.CRACKED_ACCOUNTS = 230] = "CRACKED_ACCOUNTS", a[a.ILLICIT_GOODS = 240] = "ILLICIT_GOODS", a[a.SOCIAL_ENGINEERING = 250] = "SOCIAL_ENGINEERING", a[a.TEST_CLASSIFICATION = 9e3] = "TEST_CLASSIFICATION", a[a.TEST_CLASSIFICATION_LOW = 9001] = "TEST_CLASSIFICATION_LOW", a[a.TEST_CLASSIFICATION_SEVERE = 9002] = "TEST_CLASSIFICATION_SEVERE", (S = r || (r = {}))[S.BAN = 0] = "BAN", S[S.TEMP_BAN = 1] = "TEMP_BAN", S[S.GLOBAL_QUARANTINE = 2] = "GLOBAL_QUARANTINE", S[S.REQUIRE_VERIFICATION = 3] = "REQUIRE_VERIFICATION", S[S.USER_WARNING = 4] = "USER_WARNING", S[S.USER_SPAMMER = 5] = "USER_SPAMMER", S[S.CHANNEL_SPAM = 6] = "CHANNEL_SPAM", S[S.MESSAGE_SPAM = 7] = "MESSAGE_SPAM", S[S.DISABLE_SUSPICIOUS_ACTIVITY = 8] = "DISABLE_SUSPICIOUS_ACTIVITY", S[S.LIMITED_ACCESS = 9] = "LIMITED_ACCESS", S[S.CHANNEL_SCHEDULE_DELETE = 10] = "CHANNEL_SCHEDULE_DELETE", S[S.MESSAGE_CONTENT_REMOVAL = 11] = "MESSAGE_CONTENT_REMOVAL", S[S.GUILD_DISABLE_INVITE = 12] = "GUILD_DISABLE_INVITE", S[S.USER_CONTENT_REMOVAL = 13] = "USER_CONTENT_REMOVAL", S[S.USER_USERNAME_MANGLE = 14] = "USER_USERNAME_MANGLE", S[S.GUILD_LIMITED_ACCESS = 15] = "GUILD_LIMITED_ACCESS", S[S.USER_MESSAGE_REMOVAL = 16] = "USER_MESSAGE_REMOVAL", (I = s || (s = {}))[I.ALL_GOOD = 100] = "ALL_GOOD", I[I.LIMITED = 200] = "LIMITED", I[I.VERY_LIMITED = 300] = "VERY_LIMITED", I[I.AT_RISK = 400] = "AT_RISK", I[I.SUSPENDED = 500] = "SUSPENDED", (u = l || (l = {}))[u.PENDING = 0] = "PENDING", u[u.SUCCESS = 1] = "SUCCESS", u[u.FAILED = 2] = "FAILED"
        },
        736393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClassificationRelativeIncidentTime: function() {
                    return c
                },
                getAttachmentFilename: function() {
                    return a
                },
                parseMessageEmbedForProps: function() {
                    return S
                },
                isFlaggedContentEmpty: function() {
                    return I
                }
            }), n("808653");
            var i = n("866227"),
                o = n.n(i),
                E = n("651693"),
                r = n("908539"),
                s = n("170213"),
                l = n("894488");

            function c(e) {
                return o().to(o(e))
            }

            function a(e) {
                var t, n;
                return (0, E.isImageFile)(e.filename) ? "".concat(l.SPOILER_ATTACHMENT_PREFIX).concat(null !== (t = e.filename) && void 0 !== t ? t : ".png") : null !== (n = e.filename) && void 0 !== n ? n : ""
            }

            function S(e) {
                var t, n, i, o;
                if (null == e.fields) return;
                let E = e.fields.reduce((e, t) => (e[t.rawName] = t.rawValue, e), {});
                return {
                    header: null !== (t = E[s.SafetySystemNotificationEmbedKeys.HEADER]) && void 0 !== t ? t : "",
                    icon: E[s.SafetySystemNotificationEmbedKeys.ICON_TYPE],
                    body: null !== (n = E[s.SafetySystemNotificationEmbedKeys.BODY]) && void 0 !== n ? n : "",
                    ctas: (null !== (i = E[s.SafetySystemNotificationEmbedKeys.CTAS]) && void 0 !== i ? i : "").split(",").filter(e => "" !== e),
                    timestamp: parseFloat(null !== (o = E[s.SafetySystemNotificationEmbedKeys.TIMESTAMP]) && void 0 !== o ? o : 0),
                    theme: E[s.SafetySystemNotificationEmbedKeys.THEME],
                    learn_more_link: E[s.SafetySystemNotificationEmbedKeys.LEARN_MORE_LINK],
                    classification_id: E[s.SafetySystemNotificationEmbedKeys.CLASSIFICATION_ID]
                }
            }

            function I(e) {
                if (e.type === r.ContentIdType.MESSAGE) return "" === e.content && 0 === e.attachments.length;
                return !0
            }
            n("782340")
        },
        858839: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsSuspendedUserPageEnabled: function() {
                    return E
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

            function E(e) {
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
                    return C
                }
            });
            var i = n("37983"),
                o = n("884691"),
                E = n("65597"),
                r = n("77078"),
                s = n("437822"),
                l = n("789563"),
                c = n("393414"),
                a = n("489622"),
                S = n("858839"),
                I = n("861348"),
                u = n("170213"),
                N = n("49111"),
                _ = n("782340"),
                A = n("876680");

            function T() {
                return (0, i.jsxs)(a.default, {
                    color: a.NoticeColors.DANGER,
                    className: A.nagbar,
                    children: [(0, i.jsx)(r.Text, {
                        tag: "span",
                        color: "always-white",
                        variant: "text-md/normal",
                        children: _.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR
                    }), (0, i.jsx)(a.NoticeButtonAnchor, {
                        href: u.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK,
                        children: (0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "always-white",
                            children: _.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA
                        })
                    })]
                })
            }

            function d() {
                return (0, i.jsx)("div", {
                    className: A.pageContainer,
                    children: (0, i.jsx)(I.default, {})
                })
            }

            function C() {
                let e = (0, E.default)([l.default], () => l.default.hasLoadedExperiments),
                    t = (0, S.useIsSuspendedUserPageEnabled)("standalone page");
                return (o.useEffect(() => {
                    e && !t ? (0, c.transitionTo)(N.Routes.ME) : !e && !t && s.default.getExperiments()
                }, [e, t]), e && t) ? (0, i.jsxs)("div", {
                    className: A.container,
                    children: [(0, i.jsx)(T, {}), (0, i.jsx)(d, {})]
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
                E = n("769174"),
                r = n("75196"),
                s = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: o = "currentColor",
                        className: E,
                        foreground: s,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(l),
                        className: E,
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
                }, E.TrophyIcon, void 0, {
                    size: 24
                })
        },
        489622: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NoticeColors: function() {
                    return u
                },
                NoticeButton: function() {
                    return N
                },
                PrimaryCTANoticeButton: function() {
                    return _
                },
                NoticeButtonAnchor: function() {
                    return A
                },
                NoticeCloseButton: function() {
                    return T
                },
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var o = n("414456"),
                E = n.n(o),
                r = n("394846"),
                s = n("77078"),
                l = n("945330"),
                c = n("599110"),
                a = n("49111"),
                S = n("782340"),
                I = n("105029");
            let u = Object.freeze({
                DEFAULT: I.colorDefault,
                NEUTRAL: I.colorNeutral,
                BRAND: I.colorBrand,
                WARNING: I.colorWarning,
                DANGER: I.colorDanger,
                INFO: I.colorInfo,
                STREAMER_MODE: I.colorStreamerMode,
                CUSTOM: I.colorCustom,
                SPOTIFY: I.colorSpotify,
                PLAYSTATION: I.colorPlayStation,
                PREMIUM_TIER_0: I.colorPremiumTier0,
                PREMIUM_TIER_1: I.colorPremiumTier1,
                PREMIUM_TIER_2: I.colorPremiumTier2
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
                        className: E(I.button, n, {
                            [I.buttonMinor]: o
                        }),
                        ...r,
                        children: t
                    })
                })
            }

            function _(e) {
                let {
                    children: t,
                    noticeType: n,
                    additionalTrackingProps: o,
                    ...E
                } = e;
                return (0, i.jsx)(N, {
                    ...E,
                    onClick: e => {
                        var t, i;
                        null != E.onClick && E.onClick(e), t = n, i = o, null != t && c.default.track(a.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
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
                    className: I.button,
                    href: n,
                    children: t
                })
            }

            function T(e) {
                let {
                    onClick: t,
                    noticeType: n
                } = e;
                return (0, i.jsx)(s.Clickable, {
                    focusProps: {
                        offset: 6
                    },
                    className: I.closeButton,
                    onClick: () => {
                        var e;
                        t(), null != (e = n) && c.default.track(a.AnalyticEvents.APP_NOTICE_CLOSED, {
                            notice_type: e
                        })
                    },
                    "aria-label": S.default.Messages.DISMISS,
                    children: (0, i.jsx)(l.default, {
                        className: I.closeIcon,
                        width: 18,
                        height: 18
                    })
                })
            }

            function d(e) {
                let {
                    color: t = u.DEFAULT,
                    className: n,
                    style: o,
                    children: s
                } = e;
                return (0, i.jsx)("div", {
                    className: E(I.notice, {
                        [I.isMobile]: r.isMobile
                    }, n, t),
                    style: null != o ? o : void 0,
                    children: s
                })
            }
        }
    }
]);