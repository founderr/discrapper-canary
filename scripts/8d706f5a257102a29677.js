(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["47503"], {
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

            function a(e, t) {
                return !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            n.r(t), n.d(t, {
                _: function() {
                    return a
                }
            })
        },
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return s
                },
                categoryExpand: function() {
                    return l
                },
                categoryCollapseAll: function() {
                    return i
                },
                categoryExpandAll: function() {
                    return r
                }
            });
            var a = n("913144");

            function s(e) {
                a.default.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function l(e) {
                a.default.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function i(e) {
                a.default.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function r(e) {
                a.default.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        289867: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("913144"),
                s = {
                    toggleMembersSection() {
                        a.default.dispatch({
                            type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
                        })
                    },
                    toggleProfilePanelSection() {
                        a.default.dispatch({
                            type: "PROFILE_PANEL_TOGGLE_SECTION"
                        })
                    },
                    toggleSummariesSection() {
                        a.default.dispatch({
                            type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
                        })
                    }
                }
        },
        549825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("77078"),
                r = n("978970"),
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
                return (0, a.jsxs)("div", {
                    className: l(c.list, f),
                    children: [null != t && t.length > 0 ? (0, a.jsxs)(a.Fragment, {
                        children: [null != s ? (0, a.jsx)(i.FormTitle, {
                            className: c.permissionHeader,
                            children: s
                        }) : null, (0, a.jsx)("div", {
                            className: c.container,
                            children: t.map(e => (0, a.jsxs)("div", {
                                className: c.permission,
                                children: [(0, a.jsx)(u.default, {
                                    width: 16,
                                    height: 16,
                                    className: c.check
                                }), (0, a.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    children: (0, r.getPermissionName)(e)
                                })]
                            }, e.toString()))
                        })]
                    }) : null, null != n && n.length > 0 ? (0, a.jsxs)(a.Fragment, {
                        children: [null != d ? (0, a.jsx)(i.FormTitle, {
                            className: c.permissionHeader,
                            children: d
                        }) : null, (0, a.jsx)("div", {
                            className: c.container,
                            children: n.map(e => (0, a.jsxs)("div", {
                                className: c.permission,
                                children: [(0, a.jsx)(o.default, {
                                    width: 16,
                                    height: 16,
                                    className: c.cross
                                }), (0, a.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    children: (0, r.getPermissionName)(e)
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
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm16-9.59V13a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.59l-5.09 5.09-1.8-1.8a1 1 0 0 0-1.4 0l-4 4a1 1 0 1 0 1.4 1.42L9 13.4l1.8 1.8a1 1 0 0 0 1.4 0L18 9.4Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        7037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ArrowSmallUpIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z",
                        className: r
                    })
                })
            }
        },
        772279: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CompassIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: r
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z",
                        clipRule: "evenodd",
                        className: r
                    })]
                })
            }
        },
        823527: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GameControllerIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M20.97 4.06c0 .18.08.35.24.43.55.28.9.82 1.04 1.42.3 1.24.75 3.7.75 7.09v4.91a3.09 3.09 0 0 1-5.85 1.38l-1.76-3.51a1.09 1.09 0 0 0-1.23-.55c-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.11-1 .1-1.23.55l-1.76 3.51A3.09 3.09 0 0 1 1 17.91V13c0-3.38.46-5.85.75-7.1.15-.6.49-1.13 1.04-1.4a.47.47 0 0 0 .24-.44c0-.7.48-1.32 1.2-1.47l2.93-.62c.5-.1 1 .06 1.36.4.35.34.78.71 1.28.68a42.4 42.4 0 0 1 4.4 0c.5.03.93-.34 1.28-.69.35-.33.86-.5 1.36-.39l2.94.62c.7.15 1.19.78 1.19 1.47ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
                        className: r
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
                        clipRule: "evenodd",
                        className: r
                    })]
                })
            }
        },
        392646: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserCircleStatusIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M23 12.38c-.02.38-.45.58-.78.4a6.97 6.97 0 0 0-6.27-.08.54.54 0 0 1-.44 0 8.97 8.97 0 0 0-11.16 3.55c-.1.15-.1.35 0 .5.37.58.8 1.13 1.28 1.61.24.24.64.15.8-.15.19-.38.39-.73.58-1.02.14-.21.43-.1.4.15l-.19 1.96c-.02.19.07.37.23.47A8.96 8.96 0 0 0 12 21a.4.4 0 0 1 .38.27c.1.33.25.65.4.95.18.34-.02.76-.4.77L12 23a11 11 0 1 1 11-10.62ZM15.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
                        clipRule: "evenodd",
                        className: r
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
                        className: r
                    })]
                })
            }
        },
        533806: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h11.7a.5.5 0 0 0 .5-.55l-.27-2.6c-.02-.26.27-.37.41-.16.48.74 1.03 1.8 1.32 2.9.06.24.26.41.5.41h.22c.81 0 1.47-.66 1.47-1.47A9.53 9.53 0 0 0 12.47 11h-.94Z",
                        className: r
                    })
                })
            }
        },
        612039: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var a = n("884691"),
                s = n("775560"),
                l = n("862337");

            function i(e, t) {
                let [n, i] = (0, a.useState)(e), r = (0, s.useLazyValue)(() => new l.Timeout);
                (0, a.useEffect)(() => () => r.stop(), [r]);
                let u = (0, a.useCallback)(n => {
                    i(n), n !== e && r.start(t, () => i(e))
                }, [t, e, r]);
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
            var a = n("77078"),
                s = n("255397"),
                l = n("406189"),
                i = n("393027"),
                r = n("49111");

            function u(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                !(0, a.hasAnyModalOpen)() && (n && l.default.channelListScrollTo(e, t), u && null != t && s.default.updateChatOpen(t, !0), i.default.getState().updatePath(r.Routes.CHANNEL(e, t)))
            }

            function o(e) {
                !(0, a.hasAnyModalOpen)() && i.default.getState().updatePath(e)
            }
        },
        302437: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("974667"),
                s = n("446674"),
                l = n("206230");

            function i() {
                return Promise.resolve()
            }

            function r(e) {
                let t = document.querySelector(e);
                null != t && t.focus()
            }

            function u(e, t) {
                let n = (0, s.useStateFromStores)([l.default], () => l.default.keyboardModeEnabled);
                return (0, a.default)({
                    id: e,
                    isEnabled: n,
                    orientation: t,
                    setFocus: r,
                    scrollToStart: i,
                    scrollToEnd: i
                })
            }
        },
        765105: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("90915"),
                l = n("73749"),
                i = n("468560"),
                r = n("271081"),
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
                } = t.params, l = (0, i.default)(c.ApplicationDirectoryProfileSections, s);
                return (0, a.jsx)(u.default, {
                    applicationId: n,
                    initialSection: l
                })
            };

            function p() {
                return (0, a.jsxs)(s.Switch, {
                    children: [(0, a.jsx)(l.default, {
                        path: d.Routes.APPLICATION_DIRECTORY_SEARCH,
                        component: o.default
                    }), (0, a.jsx)(l.default, {
                        path: d.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?"),
                        render: f
                    }), (0, a.jsx)(l.default, {
                        path: d.Routes.APPLICATION_DIRECTORY,
                        component: r.default
                    })]
                })
            }
        },
        94973: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("617258"),
                i = n("446674"),
                r = n("769846"),
                u = n("77078"),
                o = n("598981"),
                c = n("682777"),
                d = n("577357"),
                f = n("393414"),
                p = n("160299"),
                h = n("153160"),
                I = n("271560"),
                E = n("650509"),
                _ = n("910861"),
                C = n("899604"),
                v = n("153335"),
                T = n("49111"),
                S = n("782340"),
                A = n("208961");
            let m = (0, l.cssValueToNumber)(r.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
                g = "start_application_subscription",
                R = e => {
                    let {
                        listing: t
                    } = e, n = t.image_asset;
                    if (null == n) return null;
                    let s = (0, I.getAssetURL)(t.application_id, n, m);
                    return (0, a.jsx)("div", {
                        children: (0, a.jsx)("img", {
                            src: s,
                            alt: "",
                            className: A.listingImage
                        })
                    })
                },
                N = e => {
                    let {
                        children: t
                    } = e;
                    return (0, a.jsx)(u.Button, {
                        look: u.Button.Looks.OUTLINED,
                        color: u.Button.Colors.PRIMARY,
                        disabled: !0,
                        size: u.Button.Sizes.SMALL,
                        children: t
                    })
                };

            function L(e) {
                let {
                    listing: t,
                    groupListingId: n,
                    guildId: l,
                    analyticsLocation: r,
                    onComplete: I,
                    forcesTransitionToGuild: m
                } = e, L = (0, i.useStateFromStores)([p.default], () => p.default.isSyncing), {
                    activeSubscription: y,
                    activeSubscriptionListing: x
                } = (0, E.useActiveSubscriptionListingForApplication)(t.application_id, l), {
                    openModal: P,
                    canOpenModal: M,
                    cannotOpenReason: O
                } = (0, v.default)({
                    listing: t,
                    guildId: l,
                    groupListingId: n,
                    showBenefitsFirst: !1,
                    analyticsLocation: r,
                    onComplete: I,
                    forcesTransitionToGuild: m
                }), w = t.subscription_plans[0], j = 0 === w.price, b = (null == x ? void 0 : x.id) === t.id, D = (0, o.default)(), U = D && !M || L, V = () => {
                    D ? P() : (0, c.redirectToLogin)({
                        [g]: "true"
                    })
                };
                return s.useEffect(() => {
                    let e = new URL(location.href);
                    if (D && !U && "true" === e.searchParams.get(g)) {
                        e.searchParams.delete(g);
                        let t = e.pathname + e.search;
                        (0, f.replaceWith)(t), P()
                    }
                }, [D, P, t, U]), (0, a.jsxs)("div", {
                    className: A.container,
                    children: [(0, a.jsxs)("div", {
                        className: A.cardHeader,
                        children: [(0, a.jsx)(R, {
                            listing: t
                        }), (0, a.jsx)(u.Text, {
                            variant: "text-lg/medium",
                            color: "interactive-active",
                            children: t.name
                        }), (0, a.jsxs)("div", {
                            className: A.priceAndButtonContainer,
                            children: [(0, a.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "interactive-normal",
                                children: j ? S.default.Messages.APPLICATION_SUBSCRIPTION_FREE : S.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
                                    amount: (0, h.formatPrice)(w.price, w.currency),
                                    period: (0, d.formatPlanInterval)(w)
                                })
                            }), (() => {
                                var e;
                                if (b) return (0, a.jsx)(N, {
                                    children: (null == y ? void 0 : y.status) === T.SubscriptionStatusTypes.CANCELED ? S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                });
                                if (j) return null == x ? (0, a.jsx)(N, {
                                    children: S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                }) : null;
                                return (0, a.jsx)(u.Tooltip, {
                                    tooltipClassName: A.subscribeButtonTooltip,
                                    text: M || !D ? null : O,
                                    "aria-label": null !== (e = !M && O) && void 0 !== e && e,
                                    children: e => (0, a.jsx)(_.default, {
                                        ...e,
                                        disabled: U,
                                        submitting: !1,
                                        onClick: V,
                                        children: S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
                                    })
                                })
                            })()]
                        })]
                    }), t.sku_benefits.benefits.length > 0 ? (0, a.jsx)("div", {
                        className: A.benefitsContainer,
                        children: t.sku_benefits.benefits.map((e, t) => (0, a.jsx)(C.default, {
                            benefit: e,
                            className: A.benefit
                        }, t))
                    }) : null]
                })
            }
        },
        913678: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("77078"),
                i = n("850068"),
                r = n("598981"),
                u = n("650509"),
                o = n("90592"),
                c = n("94973"),
                d = n("782340"),
                f = n("358261");

            function p(e) {
                let {
                    listing: t
                } = e, n = (0, o.isApplicationGuildSubscription)(t.sku_flags), s = (0, o.isApplicationUserSubscription)(t.sku_flags);
                return s || n ? (0, a.jsxs)("div", {
                    className: f.cta,
                    children: [(0, a.jsx)(l.Heading, {
                        variant: "heading-lg/bold",
                        children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                    }), (0, a.jsx)(l.Heading, {
                        color: "interactive-normal",
                        variant: "heading-md/normal",
                        children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
                            applicationName: t.name
                        })
                    })]
                }) : null
            }

            function h(e) {
                var t;
                let {
                    guildId: n,
                    applicationId: o,
                    applicationPrimarySkuId: d,
                    analyticsLocation: h,
                    onComplete: I,
                    forcesTransitionToGuild: E
                } = e, {
                    listingsLoaded: _
                } = (0, u.useFetchListingsForApplication)(o, d), {
                    entitlementsLoaded: C
                } = (0, u.useFetchEntitlementsForGuild)({
                    guildId: n
                }), {
                    subscriptionGroupListing: v
                } = (0, u.useActiveSubscriptionListingForApplication)(o, n), T = (0, r.default)();
                s.useEffect(() => {
                    T && i.fetchSubscriptions()
                }, [T]);
                let S = null == v ? void 0 : v.id,
                    A = null == v ? void 0 : null === (t = v.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
                return _ && (null == n || C) ? null == S || null == A || 0 === A.length ? null : (0, a.jsx)("div", {
                    className: f.container,
                    children: A.map(e => (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(p, {
                            listing: e
                        }, e.id), (0, a.jsx)(c.default, {
                            listing: e,
                            guildId: n,
                            groupListingId: S,
                            analyticsLocation: h,
                            onComplete: I,
                            forcesTransitionToGuild: E
                        }, e.id)]
                    }, e.id))
                }) : (0, a.jsx)("div", {
                    className: f.loadingContainer,
                    children: (0, a.jsx)(l.Spinner, {})
                })
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("845579"),
                i = n("662255"),
                r = n("306160");

            function u(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: u,
                    shiftId: o,
                    showIconFirst: c
                } = e, d = l.DeveloperMode.useSetting();
                if (__OVERLAY__ || !d || !r.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, a.jsx)(s.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != o && e.shiftKey ? o : t;
                        (0, r.copy)(n), null == u || u()
                    },
                    icon: i.default,
                    showIconFirst: c
                }, f)
            }
        },
        542827: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("881410"), n("222007"), n("424973");
            var a = n("917351"),
                s = n.n(a),
                l = n("267363"),
                i = n("863636"),
                r = n("401690"),
                u = n("923959"),
                o = n("660478"),
                c = n("599110"),
                d = n("49111"),
                f = n("133335");

            function p(e, t, n) {
                let a = s.flatMap(e, e => {
                    let t = u.default.getSelectableChannelIds(e),
                        n = u.default.getVocalChannelIds(e),
                        a = [...t, ...n],
                        s = r.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var l;
                        let t = null !== (l = s[e]) && void 0 !== l ? l : {};
                        for (let e in t) a.push(e)
                    }
                    return a
                }).map(e => ({
                    channelId: e,
                    readStateType: f.ReadStateTypes.CHANNEL,
                    messageId: o.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    a.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_EVENT,
                        messageId: o.default.lastMessageId(e, f.ReadStateTypes.GUILD_EVENT)
                    }), a.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: i.default.ackIdForGuild(e)
                    })
                }), c.default.track(d.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, l.bulkAck)(a, n)
            }
        },
        577357: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getBenefitKey: function() {
                    return i
                },
                formatPlanInterval: function() {
                    return r
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
            var a = n("677795"),
                s = n("646718"),
                l = n("782340");

            function i(e) {
                return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
            }

            function r(e) {
                let {
                    interval: t,
                    interval_count: n
                } = e;
                return (function(e) {
                    switch (e) {
                        case s.SubscriptionIntervalTypes.DAY:
                            return l.default.Messages.DAY;
                        case s.SubscriptionIntervalTypes.MONTH:
                            return l.default.Messages.MONTH;
                        case s.SubscriptionIntervalTypes.YEAR:
                            return l.default.Messages.YEAR
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
                        if (n > 0 && n % 7 == 0) return l.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
                            weeks: n / 7
                        });
                        return l.default.Messages.DURATION_DAYS_CAPITALIZE.format({
                            days: n
                        });
                    case s.SubscriptionIntervalTypes.MONTH:
                        return l.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
                            months: n
                        });
                    case s.SubscriptionIntervalTypes.YEAR:
                        return l.default.Messages.DURATION_YEARS_CAPITALIZE.format({
                            years: n
                        })
                }
            }

            function o(e) {
                return e.ref_type === a.GuildRoleSubscriptionBenefitTypes.CHANNEL
            }

            function c(e) {
                return e.ref_type === a.GuildRoleSubscriptionBenefitTypes.INTANGIBLE
            }
        },
        208021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("913144"),
                s = n("819689"),
                l = n("115718"),
                i = n("347895"),
                r = n("341329"),
                u = n("582713"),
                o = n("724210"),
                c = {
                    openPrivateChannelAsSidebar(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            baseChannelId: l,
                            hasSingleMessageRequest: i
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_MESSAGE_REQUEST,
                            baseChannelId: l,
                            channelId: t,
                            details: {
                                type: u.SidebarOpenDetailsType.MESSAGE_REQUEST,
                                hasSingleMessageRequest: i
                            }
                        }), null != n ? s.default.jumpToMessage({
                            channelId: t,
                            messageId: n,
                            flash: !0
                        }) : r.default.fetchMessages({
                            channelId: t
                        })
                    },
                    openChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n,
                            baseChannelId: i,
                            flash: o = !0,
                            details: c
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: i,
                            channelId: n,
                            details: c
                        });
                        let d = null == c ? void 0 : c.initialMessageId;
                        null != d ? s.default.jumpToMessage({
                            channelId: n,
                            messageId: d,
                            flash: o,
                            jumpType: l.JumpTypes.INSTANT
                        }) : r.default.fetchMessages({
                            guildId: t,
                            channelId: n
                        })
                    },
                    openResourceChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n
                        } = e;
                        null != t && ((0, i.selectHomeResourceChannel)(t, n, !1), a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: o.StaticChannelRoute.GUILD_HOME,
                            channelId: n
                        }))
                    },
                    openThreadAsSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            channelId: i,
                            flash: o = !0,
                            details: c
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_THREAD,
                            baseChannelId: n,
                            channelId: i,
                            details: c
                        }), (null == c ? void 0 : c.initialMessageId) != null ? s.default.jumpToMessage({
                            channelId: i,
                            messageId: c.initialMessageId,
                            flash: o,
                            jumpType: l.JumpTypes.INSTANT
                        }) : r.default.fetchMessages({
                            guildId: t,
                            channelId: i
                        })
                    },
                    closeChannelSidebar(e) {
                        a.default.dispatch({
                            type: "SIDEBAR_CLOSE",
                            baseChannelId: e
                        })
                    },
                    openGuildSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            sidebarType: s,
                            details: l
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_GUILD",
                            sidebarType: s,
                            baseChannelId: n,
                            guildId: t,
                            details: l
                        })
                    },
                    closeGuildSidebar(e) {
                        a.default.dispatch({
                            type: "SIDEBAR_CLOSE_GUILD",
                            guildId: e
                        })
                    }
                }
        },
        467094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchStickerPack: function() {
                    return v
                },
                fetchStickerPacks: function() {
                    return T
                },
                fetchSticker: function() {
                    return S
                },
                fetchGuildStickers: function() {
                    return A
                },
                deleteGuildSticker: function() {
                    return m
                },
                createGuildSticker: function() {
                    return g
                },
                updateGuildSticker: function() {
                    return R
                },
                addStickerPreview: function() {
                    return N
                },
                clearStickerPreview: function() {
                    return L
                },
                favoriteSticker: function() {
                    return x
                },
                unfavoriteSticker: function() {
                    return P
                }
            }), n("424973");
            var a = n("917351"),
                s = n.n(a),
                l = n("872717"),
                i = n("913144"),
                r = n("404118"),
                u = n("619443"),
                o = n("915639"),
                c = n("872173"),
                d = n("766274"),
                f = n("341542"),
                p = n("697218"),
                h = n("271560"),
                I = n("364685"),
                E = n("49111"),
                _ = n("397336"),
                C = n("782340");
            let v = async (e, t) => {
                let {
                    body: n
                } = await (0, h.httpGetWithCountryCodeQuery)(E.Endpoints.STICKER_PACK(e));
                return i.default.dispatch({
                    type: "STICKER_PACK_FETCH_SUCCESS",
                    packId: e,
                    pack: n,
                    ingestStickers: t
                }), n
            }, T = async function() {
                let {
                    locale: e = o.default.locale
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (I.default.isFetchingStickerPacks || I.default.hasLoadedStickerPacks) return;
                i.default.wait(() => {
                    i.default.dispatch({
                        type: "STICKER_PACKS_FETCH_START"
                    })
                });
                let {
                    body: {
                        sticker_packs: t
                    }
                } = await l.default.get({
                    url: E.Endpoints.STICKER_PACKS,
                    query: {
                        locale: e
                    }
                });
                i.default.dispatch({
                    type: "STICKER_PACKS_FETCH_SUCCESS",
                    packs: t
                })
            }, S = async e => {
                let {
                    body: t
                } = await l.default.get({
                    url: E.Endpoints.STICKER(e)
                });
                i.default.dispatch({
                    type: "STICKER_FETCH_SUCCESS",
                    sticker: t
                })
            }, A = async e => {
                let {
                    body: t
                } = await l.default.get({
                    url: E.Endpoints.GUILD_STICKER_PACKS(e)
                });
                i.default.dispatch({
                    type: "GUILD_STICKERS_FETCH_SUCCESS",
                    guildId: e,
                    stickers: t.map(e => null != e.user ? {
                        ...e,
                        user: new d.default(e.user)
                    } : e)
                })
            }, m = async e => {
                await l.default.delete({
                    url: E.Endpoints.GUILD_STICKER(e.guild_id, e.id)
                })
            }, g = async (e, t) => {
                let n = await l.default.post({
                    url: E.Endpoints.GUILD_STICKER_PACKS(e),
                    body: t
                });
                return i.default.dispatch({
                    type: "GUILD_STICKERS_CREATE_SUCCESS",
                    guildId: e,
                    sticker: {
                        ...n.body,
                        user: p.default.getCurrentUser()
                    }
                }), n.body
            }, R = async (e, t, n) => {
                let a = await l.default.patch({
                    url: E.Endpoints.GUILD_STICKER(e, t),
                    body: n
                });
                return a.body
            };

            function N(e, t, n) {
                i.default.dispatch({
                    type: "ADD_STICKER_PREVIEW",
                    channelId: e,
                    sticker: t,
                    draftType: n
                })
            }

            function L(e, t) {
                i.default.dispatch({
                    type: "CLEAR_STICKER_PREVIEW",
                    channelId: e,
                    draftType: t
                })
            }

            function y(e) {
                return f.default.totalUnavailableGuilds > 0 || !u.default.isConnected() ? e : e.filter(e => null != I.default.getStickerById(e))
            }

            function x(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = y(t.stickerIds), s.size(t.stickerIds) >= _.MAX_FAVORITES) ? (r.default.show({
                    title: C.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                    body: C.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                        count: _.MAX_FAVORITES
                    })
                }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), _.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function P(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
                    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = y(t.stickerIds)
                }, _.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        893980: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackProfilePanelViewed: function() {
                    return u
                },
                trackProfilePanelToggled: function() {
                    return o
                }
            });
            var a = n("373469"),
                s = n("824563"),
                l = n("27618"),
                i = n("599110"),
                r = n("49111");
            let u = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: a,
                        activity: s,
                        customStatusActivity: l,
                        status: u
                    } = e;
                    i.default.track(r.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != s && (null == s ? void 0 : s.type) !== r.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == s ? void 0 : s.type) === r.ActivityTypes.PLAYING,
                        load_duration_ms: a,
                        profile_user_status: u,
                        has_custom_status: null != l,
                        has_profile_effect: null != t.profileEffectId,
                        ...c(t)
                    })
                },
                o = (e, t) => {
                    i.default.track(r.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...c(e)
                    })
                },
                c = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        i = null != a.default.getAnyStreamForUser(n),
                        u = s.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return i ? t === r.ActivityTypes.PLAYING : t !== r.ActivityTypes.CUSTOM_STATUS
                        }),
                        o = null == u ? void 0 : u.assets,
                        c = l.default.isFriend(n);
                    return {
                        has_images: !!(null !== (t = null == o ? void 0 : o.large_image) && void 0 !== t ? t : null == o ? void 0 : o.small_image),
                        is_friend: c,
                        viewed_profile_user_id: n,
                        profile_has_nitro_customization: e.hasPremiumCustomization(),
                        profile_has_theme_color_customized: e.hasThemeColors(),
                        profile_has_theme_animation: null != e.popoutAnimationParticleType
                    }
                }
        },
        476108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("446674"),
                s = n("95410"),
                l = n("913144"),
                i = n("49111");
            let r = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                u = r,
                o = "LAST_VIEWED_PATH";
            class c extends a.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
                    u = null != e ? e : r
                }
                get defaultRoute() {
                    return i.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : i.Routes.ME
                }
                get fallbackRoute() {
                    return i.Routes.ME
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
            var d = new c(l.default, {
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
        287850: function(e, t, n) {
            "use strict";
            let a, s, l;
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007"), n("424973");
            var i, r, u = n("866227"),
                o = n.n(u),
                c = n("446674"),
                d = n("407846"),
                f = n("913144"),
                p = n("21121"),
                h = n("934306"),
                I = n("288518"),
                E = n("486503"),
                _ = n("233069"),
                C = n("42203"),
                v = n("305961"),
                T = n("660478"),
                S = n("282109"),
                A = n("697218"),
                m = n("299039"),
                g = n("724210");
            (r = i || (i = {})).DEFAULT = "DEFAULT", r.FAVORITE = "FAVORITE";
            let R = new d.default(e => {
                let {
                    isRequest: t,
                    isFavorite: n
                } = e;
                return t ? [] : [n ? "FAVORITE" : "DEFAULT"]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function N(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, n;
                    let a = null !== (n = null !== (t = T.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        s = e.isMessageRequestTimestamp;
                    if (null != s) {
                        let e = o(s).valueOf(),
                            t = m.default.fromTimestamp(e);
                        return m.default.compare(a, t) > 0 ? a : t
                    }
                    return a
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: S.default.isMessagesFavorite(e.id) && (0, p.isInMainTabsExperiment)(),
                    isRequest: I.default.isMessageRequest(e.id) || E.default.isSpam(e.id)
                }
            }

            function L() {
                R.clear(), Object.values(C.default.getMutablePrivateChannels()).forEach(e => {
                    R.set(e.id, N(e))
                }), (0, p.isInMainTabsExperiment)() && (0, h.isSplitMessagesTab)() && S.default.getAddedToMessages().forEach(e => {
                    let t = C.default.getChannel(e);
                    null != t && (0, _.isGuildTextChannelType)(t.type) && R.set(t.id, N(t))
                })
            }

            function y() {
                let e = C.default.getMutablePrivateChannels();
                for (let t in e) R.set(t, N(e[t]))
            }
            let x = (a = [], s = [], l = [], () => {
                let e = R.values("FAVORITE"),
                    t = R.values("DEFAULT");
                return (a !== e || s !== t) && (l = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return l.push(t)
                }), a = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return l.push(t)
                }), s = t), l
            });
            class P extends c.default.Store {
                initialize() {
                    this.waitFor(C.default, v.default, A.default, I.default, S.default), this.syncWith([S.default, I.default], L)
                }
                getPrivateChannelIds() {
                    return x()
                }
                getSortedChannels() {
                    return [R.values("FAVORITE"), R.values("DEFAULT")]
                }
                serializeForOverlay() {
                    let e = {};
                    return R.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: a
                        } = t;
                        e[n] = a
                    }), e
                }
            }
            P.displayName = "PrivateChannelSortStore";
            var M = new P(f.default, {
                CONNECTION_OPEN: L,
                CONNECTION_OPEN_SUPPLEMENTAL: L,
                OVERLAY_INITIALIZE: L,
                CACHE_LOADED: y,
                CACHE_LOADED_LAZY: y,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, _.isPrivate)(e.type) || R.has(e.id)) && R.set(e.id, N(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, _.isPrivate)(t.type) || t.id === g.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    R.set(t.id, N(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return R.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!R.has(t)) return !1;
                    let a = C.default.getChannel(t);
                    return null != a && R.set(t, N(a, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return R.delete(t)
                }
            })
        },
        137215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("546671"),
                u = n("341417");
            let o = {
                    UP: "up",
                    RIGHT: "right",
                    DOWN: "down",
                    LEFT: "left"
                },
                c = {
                    [o.UP]: u.up,
                    [o.RIGHT]: u.right,
                    [o.DOWN]: u.down,
                    [o.LEFT]: u.left
                };
            class d extends s.PureComponent {
                render() {
                    let {
                        direction: e,
                        className: t
                    } = this.props;
                    return (0, a.jsx)(r.default, {
                        className: i(u.arrow, t, {
                            [c[e]]: !0
                        })
                    })
                }
            }
            d.Directions = o;
            var f = d
        },
        944832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("561445"),
                r = e => {
                    let {
                        aspectRatio: t,
                        style: n,
                        className: s,
                        children: r
                    } = e;
                    return (0, a.jsx)("div", {
                        className: l(i.outer, s),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...n
                        },
                        children: (0, a.jsx)("div", {
                            className: i.inner,
                            children: r
                        })
                    })
                }
        },
        265836: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("862337");
            class i extends s.Component {
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
                    var n, a, s, l;
                    let {
                        props: i
                    } = this;
                    let r = (n = i, a = this.state, !n.disable && !(a.hovered && n.pauseOnHover));
                    let u = (s = e, l = t, !s.disable && !(l.hovered && s.pauseOnHover));
                    r && !u || e.interval !== i.interval ? this.startTimer() : !r && u && this.stopTimer()
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
                    return (0, a.jsx)("div", {
                        ...s,
                        className: t,
                        children: e
                    })
                }
                constructor(...e) {
                    super(...e), this.timer = new l.Interval, this.state = {
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
            i.defaultProps = {
                disable: !1,
                pauseOnHover: !1
            };
            var r = i
        },
        646240: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
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
                        inputClassName: l,
                        className: f,
                        onChange: p,
                        onFocus: h,
                        onBlur: I,
                        onKeyPress: E,
                        autoComplete: _,
                        forwardedRef: C,
                        closeIconClassName: v,
                        searchIconClassName: T,
                        cta: S
                    } = this.props, A = null != s && s.length > 0, m = null != C ? C : this._textInputRef;
                    return (0, a.jsx)(r.FocusRing, {
                        focusTarget: m,
                        ringTarget: this._containerRef,
                        children: (0, a.jsxs)("div", {
                            className: i(d.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, a.jsx)(r.TextInput, {
                                inputRef: m,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: d.searchBoxInputWrapper,
                                inputClassName: i(d.searchBoxInput, l),
                                onChange: p,
                                onFocus: h,
                                onBlur: I,
                                onKeyPress: E,
                                value: A ? s : "",
                                placeholder: n,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: _ ? "on" : "off"
                            }), null != S ? (0, a.jsx)(r.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: d.cta,
                                children: S
                            }) : null, A ? (0, a.jsx)(r.Clickable, {
                                onClick: this.handleClear,
                                className: d.clear,
                                "aria-label": c.default.Messages.SEARCH_CLEAR,
                                children: (0, a.jsx)(u.default, {
                                    className: i(d.clearIcon, v)
                                })
                            }) : (0, a.jsx)(o.default, {
                                className: i(d.searchIcon, T),
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
            var p = s.forwardRef((e, t) => (0, a.jsx)(f, {
                forwardedRef: t,
                ...e
            }))
        },
        546671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("7037"),
                i = n("246053"),
                r = (0, s.replaceIcon)(function(e) {
                    return (0, a.jsx)(i.default, {
                        ...e,
                        direction: i.default.Directions.UP
                    })
                }, l.ArrowSmallUpIcon)
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("35647"),
                i = n("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: l,
                        ...r
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: l,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, l.IdIcon, void 0, {
                    size: 24
                })
        },
        627490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("772279"),
                i = n("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        className: l,
                        foreground: r,
                        ...u
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(u),
                        className: l,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: r,
                            fill: s,
                            d: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
                        })
                    })
                }, l.CompassIcon, void 0, {
                    size: 24
                })
        },
        781896: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("533806"),
                i = n("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: l,
                        ...r
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M16.002 8.00598C16.002 10.211 14.208 12.006 12.002 12.006C9.79695 12.006 8.00195 10.211 8.00195 8.00598C8.00195 5.80098 9.79595 4.00598 12.002 4.00598C14.208 4.00598 16.002 5.80098 16.002 8.00598ZM4.00195 19.006C4.00195 15.473 7.29195 13.006 12.002 13.006C16.713 13.006 20.002 15.473 20.002 19.006V20.006H4.00195V19.006Z",
                            fill: s
                        })
                    })
                }, l.UserIcon, void 0, {
                    size: 24
                })
        },
        849483: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("392646"),
                i = n("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: l,
                        ...r
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            className: l,
                            children: [(0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M12 22C12.4883 22 12.9684 21.965 13.438 21.8974C12.5414 20.8489 12 19.4877 12 18C12 17.6593 12.0284 17.3252 12.083 17H6V16.0244C6 14.0732 10 13 12 13C12.6215 13 13.436 13.1036 14.2637 13.305C15.2888 12.4882 16.5874 12 18 12C19.4877 12 20.8489 12.5414 21.8974 13.438C21.965 12.9684 22 12.4883 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12Z",
                                fill: s
                            }), (0, a.jsx)("path", {
                                d: "M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z",
                                fill: s
                            })]
                        })
                    })
                }, l.UserCircleStatusIcon, void 0, {
                    size: 24
                })
        }
    }
]);