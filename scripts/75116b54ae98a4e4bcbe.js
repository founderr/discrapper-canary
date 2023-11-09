(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["91959"], {
        68422: function(e, t, n) {
            "use strict";
            e.exports = n.p + "467602d632b5f9c1ce4b.svg"
        },
        578817: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d4d9f2bff23beec65b1f.svg"
        },
        926607: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            n.r(t), n.d(t, {
                _: function() {
                    return r
                }
            })
        },
        549825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                a = n("77078"),
                l = n("978970"),
                u = n("36694"),
                o = n("945330"),
                c = n("705179");

            function d(e) {
                let {
                    grantedPermissions: t,
                    disabledPermissions: n,
                    grantedPermissionsHeader: s,
                    disabledPermissionsHeader: d,
                    className: f
                } = e;
                return (0, r.jsxs)("div", {
                    className: i(c.list, f),
                    children: [null != t && t.length > 0 ? (0, r.jsxs)(r.Fragment, {
                        children: [null != s ? (0, r.jsx)(a.FormTitle, {
                            className: c.permissionHeader,
                            children: s
                        }) : null, (0, r.jsx)("div", {
                            className: c.container,
                            children: t.map(e => (0, r.jsxs)("div", {
                                className: c.permission,
                                children: [(0, r.jsx)(u.default, {
                                    width: 16,
                                    height: 16,
                                    className: c.check
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-sm/normal",
                                    children: (0, l.getPermissionName)(e)
                                })]
                            }, e.toString()))
                        })]
                    }) : null, null != n && n.length > 0 ? (0, r.jsxs)(r.Fragment, {
                        children: [null != d ? (0, r.jsx)(a.FormTitle, {
                            className: c.permissionHeader,
                            children: d
                        }) : null, (0, r.jsx)("div", {
                            className: c.container,
                            children: n.map(e => (0, r.jsxs)("div", {
                                className: c.permission,
                                children: [(0, r.jsx)(o.default, {
                                    width: 16,
                                    height: 16,
                                    className: c.cross
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-sm/normal",
                                    children: (0, l.getPermissionName)(e)
                                })]
                            }, e.toString()))
                        })]
                    }) : null]
                })
            }
        },
        308472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm16-9.586V13a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.586L11.5 13.086l-1.793-1.793a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L9 13.414l1.793 1.793a1 1 0 0 0 1.414 0L18 9.414Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        772279: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CompassIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: l
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM7.739 9.307A2 2 0 0 1 9.307 7.74l7.222-1.445a1 1 0 0 1 1.177 1.177l-1.444 7.222a2 2 0 0 1-1.57 1.569l-7.221 1.444a1 1 0 0 1-1.177-1.177L7.74 9.307Z",
                        clipRule: "evenodd",
                        className: l
                    })]
                })
            }
        },
        823527: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GameControllerIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M20.968 4.063c0 .177.083.35.241.43.554.28.894.812 1.038 1.416C22.543 7.152 23 9.62 23 13v4.912a3.089 3.089 0 0 1-5.854 1.38l-1.758-3.516c-.223-.445-.74-.66-1.225-.549-.572.132-1.367.273-2.163.273-.796 0-1.591-.14-2.163-.273-.485-.112-1.002.104-1.225.549l-1.758 3.516A3.09 3.09 0 0 1 1 17.912V13c0-3.381.457-5.848.753-7.09.144-.605.484-1.137 1.038-1.417a.472.472 0 0 0 .241-.43 1.5 1.5 0 0 1 1.189-1.468l2.934-.624a1.499 1.499 0 0 1 1.36.394c.356.346.784.716 1.28.69A42.392 42.392 0 0 1 12 3c.793 0 1.526.02 2.205.055.496.026.924-.344 1.28-.69.347-.338.85-.502 1.36-.394l2.934.624a1.5 1.5 0 0 1 1.189 1.468ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15.298 14.48c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        className: l
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Z",
                        clipRule: "evenodd",
                        className: l
                    })]
                })
            }
        },
        392646: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserCircleStatusIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M22.994 12.38c-.013.377-.439.577-.774.403A6.97 6.97 0 0 0 19 12c-1.093 0-2.127.25-3.048.697a.539.539 0 0 1-.445.012A8.971 8.971 0 0 0 12 12a8.994 8.994 0 0 0-7.647 4.252.47.47 0 0 0 0 .496 9.038 9.038 0 0 0 1.281 1.614c.239.239.635.148.788-.153.194-.38.397-.726.588-1.021.135-.21.43-.095.406.153l-.196 1.96a.484.484 0 0 0 .233.467A8.958 8.958 0 0 0 12 21a.4.4 0 0 1 .376.27c.113.329.25.646.407.95.174.335-.026.76-.403.774A10.954 10.954 0 0 1 7 21.8l-.008-.004a11.067 11.067 0 0 1-4.114-3.646A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 .127-.002.254-.006.38ZM15.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
                        className: l
                    })]
                })
            }
        },
        533806: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.533 11A9.533 9.533 0 0 0 2 20.533C2 21.343 2.657 22 3.467 22h.22c.24 0 .445-.17.504-.403.285-1.113.84-2.17 1.32-2.91.134-.208.43-.094.405.154l-.261 2.61a.5.5 0 0 0 .497.549h11.695a.5.5 0 0 0 .498-.55l-.26-2.609c-.026-.248.27-.362.405-.153.479.74 1.034 1.796 1.319 2.909.06.232.264.403.504.403h.22c.81 0 1.467-.657 1.467-1.467A9.533 9.533 0 0 0 12.467 11h-.934Z",
                        className: l
                    })
                })
            }
        },
        612039: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var r = n("884691"),
                s = n("775560"),
                i = n("862337");

            function a(e, t) {
                let [n, a] = (0, r.useState)(e), l = (0, s.useLazyValue)(() => new i.Timeout);
                (0, r.useEffect)(() => () => l.stop(), [l]);
                let u = (0, r.useCallback)(n => {
                    a(n), n !== e && l.start(t, () => a(e))
                }, [t, e, l]);
                return [n, u]
            }
        },
        722525: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                transitionToChannel: function() {
                    return u
                },
                transitionToPage: function() {
                    return o
                }
            });
            var r = n("77078"),
                s = n("255397"),
                i = n("406189"),
                a = n("393027"),
                l = n("49111");

            function u(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                !(0, r.hasAnyModalOpen)() && (n && i.default.channelListScrollTo(e, t), u && null != t && s.default.updateChatOpen(t, !0), a.default.getState().updatePath(l.Routes.CHANNEL(e, t)))
            }

            function o(e) {
                !(0, r.hasAnyModalOpen)() && a.default.getState().updatePath(e)
            }
        },
        302437: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("974667"),
                s = n("446674"),
                i = n("206230");

            function a() {
                return Promise.resolve()
            }

            function l(e) {
                let t = document.querySelector(e);
                null != t && t.focus()
            }

            function u(e, t) {
                let n = (0, s.useStateFromStores)([i.default], () => i.default.keyboardModeEnabled);
                return (0, r.default)({
                    id: e,
                    isEnabled: n,
                    orientation: t,
                    setFocus: l,
                    scrollToStart: a,
                    scrollToEnd: a
                })
            }
        },
        765105: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("90915"),
                i = n("73749"),
                a = n("468560"),
                l = n("271081"),
                u = n("298557"),
                o = n("176162"),
                c = n("750947"),
                d = n("49111");
            let f = function(e) {
                let {
                    match: t
                } = e, {
                    applicationId: n,
                    section: s
                } = t.params, i = (0, a.default)(c.ApplicationDirectoryProfileSections, s);
                return (0, r.jsx)(u.default, {
                    applicationId: n,
                    initialSection: i
                })
            };

            function h() {
                return (0, r.jsxs)(s.Switch, {
                    children: [(0, r.jsx)(i.default, {
                        path: d.Routes.APPLICATION_DIRECTORY_SEARCH,
                        component: o.default
                    }), (0, r.jsx)(i.default, {
                        path: d.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?"),
                        render: f
                    }), (0, r.jsx)(i.default, {
                        path: d.Routes.APPLICATION_DIRECTORY,
                        component: l.default
                    })]
                })
            }
        },
        94973: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("617258"),
                a = n("446674"),
                l = n("769846"),
                u = n("77078"),
                o = n("598981"),
                c = n("682777"),
                d = n("577357"),
                f = n("393414"),
                h = n("160299"),
                p = n("153160"),
                I = n("271560"),
                v = n("650509"),
                C = n("910861"),
                m = n("899604"),
                S = n("153335"),
                E = n("49111"),
                g = n("782340"),
                T = n("208961");
            let _ = (0, i.cssValueToNumber)(l.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
                R = "start_application_subscription",
                A = e => {
                    let {
                        listing: t
                    } = e, n = t.image_asset;
                    if (null == n) return null;
                    let s = (0, I.getAssetURL)(t.application_id, n, _);
                    return (0, r.jsx)("div", {
                        children: (0, r.jsx)("img", {
                            src: s,
                            alt: "",
                            className: T.listingImage
                        })
                    })
                },
                x = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)(u.Button, {
                        look: u.Button.Looks.OUTLINED,
                        color: u.Button.Colors.PRIMARY,
                        disabled: !0,
                        size: u.Button.Sizes.SMALL,
                        children: t
                    })
                };

            function N(e) {
                let {
                    listing: t,
                    groupListingId: n,
                    guildId: i,
                    analyticsLocation: l,
                    onComplete: I,
                    forcesTransitionToGuild: _
                } = e, N = (0, a.useStateFromStores)([h.default], () => h.default.isSyncing), {
                    activeSubscription: j,
                    activeSubscriptionListing: P
                } = (0, v.useActiveSubscriptionListingForApplication)(t.application_id, i), {
                    openModal: y,
                    canOpenModal: M,
                    cannotOpenReason: L
                } = (0, S.default)({
                    listing: t,
                    guildId: i,
                    groupListingId: n,
                    showBenefitsFirst: !1,
                    analyticsLocation: l,
                    onComplete: I,
                    forcesTransitionToGuild: _
                }), w = t.subscription_plans[0], O = 0 === w.price, b = (null == P ? void 0 : P.id) === t.id, V = (0, o.default)(), U = V && !M || N, k = () => {
                    V ? y() : (0, c.redirectToLogin)({
                        [R]: "true"
                    })
                };
                return s.useEffect(() => {
                    let e = new URL(location.href);
                    if (V && !U && "true" === e.searchParams.get(R)) {
                        e.searchParams.delete(R);
                        let t = e.pathname + e.search;
                        (0, f.replaceWith)(t), y()
                    }
                }, [V, y, t, U]), (0, r.jsxs)("div", {
                    className: T.container,
                    children: [(0, r.jsxs)("div", {
                        className: T.cardHeader,
                        children: [(0, r.jsx)(A, {
                            listing: t
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-lg/medium",
                            color: "interactive-active",
                            children: t.name
                        }), (0, r.jsxs)("div", {
                            className: T.priceAndButtonContainer,
                            children: [(0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "interactive-normal",
                                children: O ? g.default.Messages.APPLICATION_SUBSCRIPTION_FREE : g.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
                                    amount: (0, p.formatPrice)(w.price, w.currency),
                                    period: (0, d.formatPlanInterval)(w)
                                })
                            }), (() => {
                                var e;
                                if (b) return (0, r.jsx)(x, {
                                    children: (null == j ? void 0 : j.status) === E.SubscriptionStatusTypes.CANCELED ? g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                });
                                if (O) return null == P ? (0, r.jsx)(x, {
                                    children: g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                }) : null;
                                return (0, r.jsx)(u.Tooltip, {
                                    tooltipClassName: T.subscribeButtonTooltip,
                                    text: M || !V ? null : L,
                                    "aria-label": null !== (e = !M && L) && void 0 !== e && e,
                                    children: e => (0, r.jsx)(C.default, {
                                        ...e,
                                        disabled: U,
                                        submitting: !1,
                                        onClick: k,
                                        children: g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
                                    })
                                })
                            })()]
                        })]
                    }), t.sku_benefits.benefits.length > 0 ? (0, r.jsx)("div", {
                        className: T.benefitsContainer,
                        children: t.sku_benefits.benefits.map((e, t) => (0, r.jsx)(m.default, {
                            benefit: e,
                            className: T.benefit
                        }, t))
                    }) : null]
                })
            }
        },
        913678: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("37983"),
                s = n("884691"),
                i = n("77078"),
                a = n("850068"),
                l = n("598981"),
                u = n("650509"),
                o = n("90592"),
                c = n("94973"),
                d = n("782340"),
                f = n("358261");

            function h(e) {
                let {
                    listing: t
                } = e, n = (0, o.isApplicationGuildSubscription)(t.sku_flags), s = (0, o.isApplicationUserSubscription)(t.sku_flags);
                return s || n ? (0, r.jsxs)("div", {
                    className: f.cta,
                    children: [(0, r.jsx)(i.Heading, {
                        variant: "heading-lg/bold",
                        children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                    }), (0, r.jsx)(i.Heading, {
                        color: "interactive-normal",
                        variant: "heading-md/normal",
                        children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
                            applicationName: t.name
                        })
                    })]
                }) : null
            }

            function p(e) {
                var t;
                let {
                    guildId: n,
                    applicationId: o,
                    applicationPrimarySkuId: d,
                    analyticsLocation: p,
                    onComplete: I,
                    forcesTransitionToGuild: v
                } = e, {
                    listingsLoaded: C
                } = (0, u.useFetchListingsForApplication)(o, d), {
                    entitlementsLoaded: m
                } = (0, u.useFetchEntitlementsForGuild)({
                    guildId: n
                }), {
                    subscriptionGroupListing: S
                } = (0, u.useActiveSubscriptionListingForApplication)(o, n), E = (0, l.default)();
                s.useEffect(() => {
                    E && a.fetchSubscriptions()
                }, [E]);
                let g = null == S ? void 0 : S.id,
                    T = null == S ? void 0 : null === (t = S.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
                return C && (null == n || m) ? null == g || null == T || 0 === T.length ? null : (0, r.jsx)("div", {
                    className: f.container,
                    children: T.map(e => (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(h, {
                            listing: e
                        }, e.id), (0, r.jsx)(c.default, {
                            listing: e,
                            guildId: n,
                            groupListingId: g,
                            analyticsLocation: p,
                            onComplete: I,
                            forcesTransitionToGuild: v
                        }, e.id)]
                    }, e.id))
                }) : (0, r.jsx)("div", {
                    className: f.loadingContainer,
                    children: (0, r.jsx)(i.Spinner, {})
                })
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function r() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function s(e) {
                return {
                    textValue: e,
                    richValue: a(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return r
                },
                createState: function() {
                    return s
                },
                toRichValue: function() {
                    return a
                },
                voidToOptionValue: function() {
                    return l
                }
            }), n("70102");
            let i = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function a(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : i
            }

            function l(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("845579"),
                a = n("662255"),
                l = n("306160");

            function u(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: u,
                    shiftId: o,
                    showIconFirst: c
                } = e, d = i.DeveloperMode.useSetting();
                if (__OVERLAY__ || !d || !l.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(s.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != o && e.shiftKey ? o : t;
                        (0, l.copy)(n), null == u || u()
                    },
                    icon: a.default,
                    showIconFirst: c
                }, f)
            }
        },
        577357: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getBenefitKey: function() {
                    return a
                },
                formatPlanInterval: function() {
                    return l
                },
                formatPlanIntervalDuration: function() {
                    return u
                },
                isChannelBenefit: function() {
                    return o
                },
                isIntangibleBenefit: function() {
                    return c
                }
            });
            var r = n("677795"),
                s = n("646718"),
                i = n("782340");

            function a(e) {
                return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
            }

            function l(e) {
                let {
                    interval: t,
                    interval_count: n
                } = e;
                return (function(e) {
                    switch (e) {
                        case s.SubscriptionIntervalTypes.DAY:
                            return i.default.Messages.DAY;
                        case s.SubscriptionIntervalTypes.MONTH:
                            return i.default.Messages.MONTH;
                        case s.SubscriptionIntervalTypes.YEAR:
                            return i.default.Messages.YEAR
                    }
                })(t).format({
                    count: n
                })
            }

            function u(e) {
                let {
                    interval: t,
                    interval_count: n
                } = e;
                switch (t) {
                    case s.SubscriptionIntervalTypes.DAY:
                        if (n > 0 && n % 7 == 0) return i.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
                            weeks: n / 7
                        });
                        return i.default.Messages.DURATION_DAYS_CAPITALIZE.format({
                            days: n
                        });
                    case s.SubscriptionIntervalTypes.MONTH:
                        return i.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
                            months: n
                        });
                    case s.SubscriptionIntervalTypes.YEAR:
                        return i.default.Messages.DURATION_YEARS_CAPITALIZE.format({
                            years: n
                        })
                }
            }

            function o(e) {
                return e.ref_type === r.GuildRoleSubscriptionBenefitTypes.CHANNEL
            }

            function c(e) {
                return e.ref_type === r.GuildRoleSubscriptionBenefitTypes.INTANGIBLE
            }
        },
        467094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchStickerPack: function() {
                    return S
                },
                fetchStickerPacks: function() {
                    return E
                },
                fetchSticker: function() {
                    return g
                },
                fetchGuildStickers: function() {
                    return T
                },
                deleteGuildSticker: function() {
                    return _
                },
                createGuildSticker: function() {
                    return R
                },
                updateGuildSticker: function() {
                    return A
                },
                addStickerPreview: function() {
                    return x
                },
                clearStickerPreview: function() {
                    return N
                },
                favoriteSticker: function() {
                    return P
                },
                unfavoriteSticker: function() {
                    return y
                }
            }), n("424973");
            var r = n("917351"),
                s = n.n(r),
                i = n("872717"),
                a = n("913144"),
                l = n("404118"),
                u = n("619443"),
                o = n("915639"),
                c = n("872173"),
                d = n("766274"),
                f = n("341542"),
                h = n("697218"),
                p = n("271560"),
                I = n("364685"),
                v = n("49111"),
                C = n("397336"),
                m = n("782340");
            let S = async (e, t) => {
                let {
                    body: n
                } = await (0, p.httpGetWithCountryCodeQuery)(v.Endpoints.STICKER_PACK(e));
                return a.default.dispatch({
                    type: "STICKER_PACK_FETCH_SUCCESS",
                    packId: e,
                    pack: n,
                    ingestStickers: t
                }), n
            }, E = async function() {
                let {
                    locale: e = o.default.locale
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (I.default.isFetchingStickerPacks || I.default.hasLoadedStickerPacks) return;
                a.default.wait(() => {
                    a.default.dispatch({
                        type: "STICKER_PACKS_FETCH_START"
                    })
                });
                let {
                    body: {
                        sticker_packs: t
                    }
                } = await (0, p.httpGetWithCountryCodeQuery)({
                    url: v.Endpoints.STICKER_PACKS,
                    query: {
                        locale: e
                    }
                });
                a.default.dispatch({
                    type: "STICKER_PACKS_FETCH_SUCCESS",
                    packs: t
                })
            }, g = async e => {
                let {
                    body: t
                } = await i.default.get({
                    url: v.Endpoints.STICKER(e)
                });
                a.default.dispatch({
                    type: "STICKER_FETCH_SUCCESS",
                    sticker: t
                })
            }, T = async e => {
                let {
                    body: t
                } = await i.default.get({
                    url: v.Endpoints.GUILD_STICKER_PACKS(e)
                });
                a.default.dispatch({
                    type: "GUILD_STICKERS_FETCH_SUCCESS",
                    guildId: e,
                    stickers: t.map(e => null != e.user ? {
                        ...e,
                        user: new d.default(e.user)
                    } : e)
                })
            }, _ = async e => {
                await i.default.delete({
                    url: v.Endpoints.GUILD_STICKER(e.guild_id, e.id)
                })
            }, R = async (e, t) => {
                let n = await i.default.post({
                    url: v.Endpoints.GUILD_STICKER_PACKS(e),
                    body: t
                });
                return a.default.dispatch({
                    type: "GUILD_STICKERS_CREATE_SUCCESS",
                    guildId: e,
                    sticker: {
                        ...n.body,
                        user: h.default.getCurrentUser()
                    }
                }), n.body
            }, A = async (e, t, n) => {
                let r = await i.default.patch({
                    url: v.Endpoints.GUILD_STICKER(e, t),
                    body: n
                });
                return r.body
            };

            function x(e, t, n) {
                a.default.dispatch({
                    type: "ADD_STICKER_PREVIEW",
                    channelId: e,
                    sticker: t,
                    draftType: n
                })
            }

            function N(e, t) {
                a.default.dispatch({
                    type: "CLEAR_STICKER_PREVIEW",
                    channelId: e,
                    draftType: t
                })
            }

            function j(e) {
                return f.default.totalUnavailableGuilds > 0 || !u.default.isConnected() ? e : e.filter(e => null != I.default.getStickerById(e))
            }

            function P(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = j(t.stickerIds), s.size(t.stickerIds) >= C.MAX_FAVORITES) ? (l.default.show({
                    title: m.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                    body: m.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                        count: C.MAX_FAVORITES
                    })
                }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), C.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function y(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
                    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = j(t.stickerIds)
                }, C.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        476108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("446674"),
                s = n("95410"),
                i = n("913144"),
                a = n("49111");
            let l = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                u = l,
                o = "LAST_VIEWED_PATH";
            class c extends r.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
                    u = null != e ? e : l
                }
                get defaultRoute() {
                    return a.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : a.Routes.ME
                }
                get fallbackRoute() {
                    return a.Routes.ME
                }
                getState() {
                    return u
                }
            }
            c.displayName = "DefaultRouteStore", c.persistKey = "DefaultRouteStore", c.migrations = [() => {
                let e = s.default.get(o, null);
                return s.default.remove(o), {
                    lastViewedPath: e
                }
            }];
            var d = new c(i.default, {
                SAVE_LAST_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return u.lastViewedPath = t, !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return u.lastViewedNonVoicePath = t, !0
                }
            })
        },
        836417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("446674"),
                s = n("913144"),
                i = n("149022"),
                a = n("884351"),
                l = n("845579"),
                u = n("377253");
            let o = {};
            class c extends r.default.Store {
                isEditing(e, t) {
                    var n;
                    return (null === (n = o[e]) || void 0 === n ? void 0 : n.messageId) === t
                }
                isEditingAny(e) {
                    return null != o[e]
                }
                getEditingTextValue(e) {
                    var t;
                    return null === (t = o[e]) || void 0 === t ? void 0 : t.textValue
                }
                getEditingRichValue(e) {
                    var t;
                    return null === (t = o[e]) || void 0 === t ? void 0 : t.richValue
                }
                getEditingMessageId(e) {
                    var t;
                    return null === (t = o[e]) || void 0 === t ? void 0 : t.messageId
                }
                getEditingMessage(e) {
                    let t = o[e];
                    return null != t && null != t.messageId ? u.default.getMessage(e, t.messageId) : null
                }
            }
            c.displayName = "EditMessageStore";
            var d = new c(s.default, {
                MESSAGE_START_EDIT: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        content: r
                    } = e, s = l.UseLegacyChatInput.getSetting(), u = a.default.unparse(r, t);
                    o[t] = {
                        channelId: t,
                        messageId: n,
                        textValue: u,
                        richValue: (0, i.toRichValue)(s ? u : r)
                    }
                },
                MESSAGE_UPDATE_EDIT: function(e) {
                    let {
                        channelId: t,
                        textValue: n,
                        richValue: r
                    } = e, s = o[t];
                    if (null == s) return !1;
                    o[t] = {
                        ...s,
                        textValue: n,
                        richValue: r
                    }
                },
                MESSAGE_END_EDIT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || null == o[t]) return !1;
                    delete o[t]
                }
            })
        },
        944832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                a = n("561445"),
                l = e => {
                    let {
                        aspectRatio: t,
                        style: n,
                        className: s,
                        children: l
                    } = e;
                    return (0, r.jsx)("div", {
                        className: i(a.outer, s),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...n
                        },
                        children: (0, r.jsx)("div", {
                            className: a.inner,
                            children: l
                        })
                    })
                }
        },
        265836: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("862337");
            class a extends s.Component {
                static getDerivedStateFromProps(e) {
                    return e.disable ? {
                        hovered: !1
                    } : null
                }
                componentDidMount() {
                    let {
                        pauseOnHover: e,
                        disable: t
                    } = this.props, n = this.state.hovered && e;
                    !t && !n && this.startTimer()
                }
                componentWillUnmount() {
                    this.stopTimer()
                }
                componentDidUpdate(e, t) {
                    var n, r, s, i;
                    let {
                        props: a
                    } = this;
                    let l = (n = a, r = this.state, !n.disable && !(r.hovered && n.pauseOnHover));
                    let u = (s = e, i = t, !s.disable && !(i.hovered && s.pauseOnHover));
                    l && !u || e.interval !== a.interval ? this.startTimer() : !l && u && this.stopTimer()
                }
                startTimer() {
                    let {
                        interval: e,
                        onInterval: t,
                        disable: n
                    } = this.props;
                    !n && this.timer.start(e, () => {
                        t()
                    })
                }
                stopTimer() {
                    this.timer.stop()
                }
                render() {
                    let {
                        children: e,
                        className: t,
                        disable: n
                    } = this.props, s = n ? null : {
                        onMouseEnter: this.handlePause,
                        onFocus: this.handlePause,
                        onMouseLeave: this.handleResume,
                        onBlur: this.handleResume
                    };
                    return (0, r.jsx)("div", {
                        ...s,
                        className: t,
                        children: e
                    })
                }
                constructor(...e) {
                    super(...e), this.timer = new i.Interval, this.state = {
                        hovered: !1
                    }, this.handlePause = () => {
                        !this.state.hovered && this.setState({
                            hovered: !0
                        })
                    }, this.handleResume = () => {
                        this.setState({
                            hovered: !1
                        })
                    }
                }
            }
            a.defaultProps = {
                disable: !1,
                pauseOnHover: !1
            };
            var l = a
        },
        646240: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("414456"),
                a = n.n(i),
                l = n("77078"),
                u = n("381546"),
                o = n("229915"),
                c = n("782340"),
                d = n("913893");
            class f extends s.Component {
                render() {
                    let {
                        autoFocus: e,
                        label: t,
                        placeholder: n,
                        searchTerm: s,
                        inputClassName: i,
                        className: f,
                        onChange: h,
                        onFocus: p,
                        onBlur: I,
                        onKeyPress: v,
                        autoComplete: C,
                        forwardedRef: m,
                        closeIconClassName: S,
                        searchIconClassName: E,
                        cta: g
                    } = this.props, T = null != s && s.length > 0, _ = null != m ? m : this._textInputRef;
                    return (0, r.jsx)(l.FocusRing, {
                        focusTarget: _,
                        ringTarget: this._containerRef,
                        children: (0, r.jsxs)("div", {
                            className: a(d.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, r.jsx)(l.TextInput, {
                                inputRef: _,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: d.searchBoxInputWrapper,
                                inputClassName: a(d.searchBoxInput, i),
                                onChange: h,
                                onFocus: p,
                                onBlur: I,
                                onKeyPress: v,
                                value: T ? s : "",
                                placeholder: n,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: C ? "on" : "off"
                            }), null != g ? (0, r.jsx)(l.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: d.cta,
                                children: g
                            }) : null, T ? (0, r.jsx)(l.Clickable, {
                                onClick: this.handleClear,
                                className: d.clear,
                                "aria-label": c.default.Messages.SEARCH_CLEAR,
                                children: (0, r.jsx)(u.default, {
                                    className: a(d.clearIcon, S)
                                })
                            }) : (0, r.jsx)(o.default, {
                                className: a(d.searchIcon, E),
                                "aria-label": c.default.Messages.SEARCH
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._textInputRef = s.createRef(), this._containerRef = s.createRef(), this.handleClear = () => {
                        let {
                            onClear: e,
                            forwardedRef: t
                        } = this.props, {
                            current: n
                        } = null != t ? t : this._textInputRef;
                        null != n && n.focus(), null != e && e()
                    }
                }
            }
            f.defaultProps = {
                autoComplete: !1
            };
            var h = s.forwardRef((e, t) => (0, r.jsx)(f, {
                forwardedRef: t,
                ...e
            }))
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("35647"),
                a = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: i,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, i.IdIcon)
        },
        627490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("772279"),
                a = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        className: i,
                        foreground: l,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(u),
                        className: i,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: s,
                            d: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
                        })
                    })
                }, i.CompassIcon)
        },
        781896: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("533806"),
                a = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: i,
                            d: "M16.002 8.00598C16.002 10.211 14.208 12.006 12.002 12.006C9.79695 12.006 8.00195 10.211 8.00195 8.00598C8.00195 5.80098 9.79595 4.00598 12.002 4.00598C14.208 4.00598 16.002 5.80098 16.002 8.00598ZM4.00195 19.006C4.00195 15.473 7.29195 13.006 12.002 13.006C16.713 13.006 20.002 15.473 20.002 19.006V20.006H4.00195V19.006Z",
                            fill: s
                        })
                    })
                }, i.UserIcon)
        },
        849483: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("392646"),
                a = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsxs)("g", {
                            fill: "none",
                            className: i,
                            children: [(0, r.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M12 22C12.4883 22 12.9684 21.965 13.438 21.8974C12.5414 20.8489 12 19.4877 12 18C12 17.6593 12.0284 17.3252 12.083 17H6V16.0244C6 14.0732 10 13 12 13C12.6215 13 13.436 13.1036 14.2637 13.305C15.2888 12.4882 16.5874 12 18 12C19.4877 12 20.8489 12.5414 21.8974 13.438C21.965 12.9684 22 12.4883 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12Z",
                                fill: s
                            }), (0, r.jsx)("path", {
                                d: "M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z",
                                fill: s
                            })]
                        })
                    })
                }, i.UserCircleStatusIcon)
        }
    }
]);