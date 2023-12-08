(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["97627"], {
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

            function i(e, t) {
                return !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            n.r(t), n.d(t, {
                _: function() {
                    return i
                }
            })
        },
        289867: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("913144"),
                r = {
                    toggleMembersSection() {
                        i.default.dispatch({
                            type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
                        })
                    },
                    toggleProfilePanelSection() {
                        i.default.dispatch({
                            type: "PROFILE_PANEL_TOGGLE_SECTION"
                        })
                    },
                    toggleSummariesSection() {
                        i.default.dispatch({
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
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                l = n("77078"),
                a = n("978970"),
                u = n("36694"),
                o = n("945330"),
                c = n("705179");

            function d(e) {
                let {
                    grantedPermissions: t,
                    disabledPermissions: n,
                    grantedPermissionsHeader: r,
                    disabledPermissionsHeader: d,
                    className: f
                } = e;
                return (0, i.jsxs)("div", {
                    className: s(c.list, f),
                    children: [null != t && t.length > 0 ? (0, i.jsxs)(i.Fragment, {
                        children: [null != r ? (0, i.jsx)(l.FormTitle, {
                            className: c.permissionHeader,
                            children: r
                        }) : null, (0, i.jsx)("div", {
                            className: c.container,
                            children: t.map(e => (0, i.jsxs)("div", {
                                className: c.permission,
                                children: [(0, i.jsx)(u.default, {
                                    width: 16,
                                    height: 16,
                                    className: c.check
                                }), (0, i.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    children: (0, a.getPermissionName)(e)
                                })]
                            }, e.toString()))
                        })]
                    }) : null, null != n && n.length > 0 ? (0, i.jsxs)(i.Fragment, {
                        children: [null != d ? (0, i.jsx)(l.FormTitle, {
                            className: c.permissionHeader,
                            children: d
                        }) : null, (0, i.jsx)("div", {
                            className: c.container,
                            children: n.map(e => (0, i.jsxs)("div", {
                                className: c.permission,
                                children: [(0, i.jsx)(o.default, {
                                    width: 16,
                                    height: 16,
                                    className: c.cross
                                }), (0, i.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    children: (0, a.getPermissionName)(e)
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
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm16-9.59V13a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.59l-5.09 5.09-1.8-1.8a1 1 0 0 0-1.4 0l-4 4a1 1 0 1 0 1.4 1.42L9 13.4l1.8 1.8a1 1 0 0 0 1.4 0L18 9.4Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        7037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ArrowSmallUpIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z",
                        className: a
                    })
                })
            }
        },
        772279: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CompassIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z",
                        clipRule: "evenodd",
                        className: a
                    })]
                })
            }
        },
        823527: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GameControllerIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M20.97 4.06c0 .18.08.35.24.43.55.28.9.82 1.04 1.42.3 1.24.75 3.7.75 7.09v4.91a3.09 3.09 0 0 1-5.85 1.38l-1.76-3.51a1.09 1.09 0 0 0-1.23-.55c-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.11-1 .1-1.23.55l-1.76 3.51A3.09 3.09 0 0 1 1 17.91V13c0-3.38.46-5.85.75-7.1.15-.6.49-1.13 1.04-1.4a.47.47 0 0 0 .24-.44c0-.7.48-1.32 1.2-1.47l2.93-.62c.5-.1 1 .06 1.36.4.35.34.78.71 1.28.68a42.4 42.4 0 0 1 4.4 0c.5.03.93-.34 1.28-.69.35-.33.86-.5 1.36-.39l2.94.62c.7.15 1.19.78 1.19 1.47ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
                        clipRule: "evenodd",
                        className: a
                    })]
                })
            }
        },
        392646: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserCircleStatusIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M23 12.38c-.02.38-.45.58-.78.4a6.97 6.97 0 0 0-6.27-.08.54.54 0 0 1-.44 0 8.97 8.97 0 0 0-11.16 3.55c-.1.15-.1.35 0 .5.37.58.8 1.13 1.28 1.61.24.24.64.15.8-.15.19-.38.39-.73.58-1.02.14-.21.43-.1.4.15l-.19 1.96c-.02.19.07.37.23.47A8.96 8.96 0 0 0 12 21a.4.4 0 0 1 .38.27c.1.33.25.65.4.95.18.34-.02.76-.4.77L12 23a11 11 0 1 1 11-10.62ZM15.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
                        className: a
                    })]
                })
            }
        },
        533806: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h11.7a.5.5 0 0 0 .5-.55l-.27-2.6c-.02-.26.27-.37.41-.16.48.74 1.03 1.8 1.32 2.9.06.24.26.41.5.41h.22c.81 0 1.47-.66 1.47-1.47A9.53 9.53 0 0 0 12.47 11h-.94Z",
                        className: a
                    })
                })
            }
        },
        612039: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var i = n("884691"),
                r = n("775560"),
                s = n("862337");

            function l(e, t) {
                let [n, l] = (0, i.useState)(e), a = (0, r.useLazyValue)(() => new s.Timeout);
                (0, i.useEffect)(() => () => a.stop(), [a]);
                let u = (0, i.useCallback)(n => {
                    l(n), n !== e && a.start(t, () => l(e))
                }, [t, e, a]);
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
            var i = n("77078"),
                r = n("255397"),
                s = n("406189"),
                l = n("393027"),
                a = n("49111");

            function u(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                !(0, i.hasAnyModalOpen)() && (n && s.default.channelListScrollTo(e, t), u && null != t && r.default.updateChatOpen(t, !0), l.default.getState().updatePath(a.Routes.CHANNEL(e, t)))
            }

            function o(e) {
                !(0, i.hasAnyModalOpen)() && l.default.getState().updatePath(e)
            }
        },
        302437: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("974667"),
                r = n("446674"),
                s = n("206230");

            function l() {
                return Promise.resolve()
            }

            function a(e) {
                let t = document.querySelector(e);
                null != t && t.focus()
            }

            function u(e, t) {
                let n = (0, r.useStateFromStores)([s.default], () => s.default.keyboardModeEnabled);
                return (0, i.default)({
                    id: e,
                    isEnabled: n,
                    orientation: t,
                    setFocus: a,
                    scrollToStart: l,
                    scrollToEnd: l
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
            var i = n("37983");
            n("884691");
            var r = n("90915"),
                s = n("73749"),
                l = n("468560"),
                a = n("271081"),
                u = n("298557"),
                o = n("176162"),
                c = n("750947"),
                d = n("49111");
            let f = function(e) {
                let {
                    match: t
                } = e, {
                    applicationId: n,
                    section: r
                } = t.params, s = (0, l.default)(c.ApplicationDirectoryProfileSections, r);
                return (0, i.jsx)(u.default, {
                    applicationId: n,
                    initialSection: s
                })
            };

            function h() {
                return (0, i.jsxs)(r.Switch, {
                    children: [(0, i.jsx)(s.default, {
                        path: d.Routes.APPLICATION_DIRECTORY_SEARCH,
                        component: o.default
                    }), (0, i.jsx)(s.default, {
                        path: d.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?"),
                        render: f
                    }), (0, i.jsx)(s.default, {
                        path: d.Routes.APPLICATION_DIRECTORY,
                        component: a.default
                    })]
                })
            }
        },
        94973: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("617258"),
                l = n("446674"),
                a = n("769846"),
                u = n("77078"),
                o = n("598981"),
                c = n("682777"),
                d = n("577357"),
                f = n("393414"),
                h = n("160299"),
                p = n("153160"),
                I = n("271560"),
                v = n("650509"),
                E = n("910861"),
                _ = n("899604"),
                C = n("153335"),
                m = n("49111"),
                T = n("782340"),
                g = n("208961");
            let S = (0, s.cssValueToNumber)(a.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
                A = "start_application_subscription",
                R = e => {
                    let {
                        listing: t
                    } = e, n = t.image_asset;
                    if (null == n) return null;
                    let r = (0, I.getAssetURL)(t.application_id, n, S);
                    return (0, i.jsx)("div", {
                        children: (0, i.jsx)("img", {
                            src: r,
                            alt: "",
                            className: g.listingImage
                        })
                    })
                },
                N = e => {
                    let {
                        children: t
                    } = e;
                    return (0, i.jsx)(u.Button, {
                        look: u.Button.Looks.OUTLINED,
                        color: u.Button.Colors.PRIMARY,
                        disabled: !0,
                        size: u.Button.Sizes.SMALL,
                        children: t
                    })
                };

            function x(e) {
                let {
                    listing: t,
                    groupListingId: n,
                    guildId: s,
                    analyticsLocation: a,
                    onComplete: I,
                    forcesTransitionToGuild: S
                } = e, x = (0, l.useStateFromStores)([h.default], () => h.default.isSyncing), {
                    activeSubscription: L,
                    activeSubscriptionListing: P
                } = (0, v.useActiveSubscriptionListingForApplication)(t.application_id, s), {
                    openModal: y,
                    canOpenModal: M,
                    cannotOpenReason: O
                } = (0, C.default)({
                    listing: t,
                    guildId: s,
                    groupListingId: n,
                    showBenefitsFirst: !1,
                    analyticsLocation: a,
                    onComplete: I,
                    forcesTransitionToGuild: S
                }), j = t.subscription_plans[0], w = 0 === j.price, b = (null == P ? void 0 : P.id) === t.id, U = (0, o.default)(), V = U && !M || x, D = () => {
                    U ? y() : (0, c.redirectToLogin)({
                        [A]: "true"
                    })
                };
                return r.useEffect(() => {
                    let e = new URL(location.href);
                    if (U && !V && "true" === e.searchParams.get(A)) {
                        e.searchParams.delete(A);
                        let t = e.pathname + e.search;
                        (0, f.replaceWith)(t), y()
                    }
                }, [U, y, t, V]), (0, i.jsxs)("div", {
                    className: g.container,
                    children: [(0, i.jsxs)("div", {
                        className: g.cardHeader,
                        children: [(0, i.jsx)(R, {
                            listing: t
                        }), (0, i.jsx)(u.Text, {
                            variant: "text-lg/medium",
                            color: "interactive-active",
                            children: t.name
                        }), (0, i.jsxs)("div", {
                            className: g.priceAndButtonContainer,
                            children: [(0, i.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "interactive-normal",
                                children: w ? T.default.Messages.APPLICATION_SUBSCRIPTION_FREE : T.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
                                    amount: (0, p.formatPrice)(j.price, j.currency),
                                    period: (0, d.formatPlanInterval)(j)
                                })
                            }), (() => {
                                var e;
                                if (b) return (0, i.jsx)(N, {
                                    children: (null == L ? void 0 : L.status) === m.SubscriptionStatusTypes.CANCELED ? T.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : T.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                });
                                if (w) return null == P ? (0, i.jsx)(N, {
                                    children: T.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                }) : null;
                                return (0, i.jsx)(u.Tooltip, {
                                    tooltipClassName: g.subscribeButtonTooltip,
                                    text: M || !U ? null : O,
                                    "aria-label": null !== (e = !M && O) && void 0 !== e && e,
                                    children: e => (0, i.jsx)(E.default, {
                                        ...e,
                                        disabled: V,
                                        submitting: !1,
                                        onClick: D,
                                        children: T.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
                                    })
                                })
                            })()]
                        })]
                    }), t.sku_benefits.benefits.length > 0 ? (0, i.jsx)("div", {
                        className: g.benefitsContainer,
                        children: t.sku_benefits.benefits.map((e, t) => (0, i.jsx)(_.default, {
                            benefit: e,
                            className: g.benefit
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
            var i = n("37983"),
                r = n("884691"),
                s = n("77078"),
                l = n("850068"),
                a = n("598981"),
                u = n("650509"),
                o = n("90592"),
                c = n("94973"),
                d = n("782340"),
                f = n("358261");

            function h(e) {
                let {
                    listing: t
                } = e, n = (0, o.isApplicationGuildSubscription)(t.sku_flags), r = (0, o.isApplicationUserSubscription)(t.sku_flags);
                return r || n ? (0, i.jsxs)("div", {
                    className: f.cta,
                    children: [(0, i.jsx)(s.Heading, {
                        variant: "heading-lg/bold",
                        children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                    }), (0, i.jsx)(s.Heading, {
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
                    listingsLoaded: E
                } = (0, u.useFetchListingsForApplication)(o, d), {
                    entitlementsLoaded: _
                } = (0, u.useFetchEntitlementsForGuild)({
                    guildId: n
                }), {
                    subscriptionGroupListing: C
                } = (0, u.useActiveSubscriptionListingForApplication)(o, n), m = (0, a.default)();
                r.useEffect(() => {
                    m && l.fetchSubscriptions()
                }, [m]);
                let T = null == C ? void 0 : C.id,
                    g = null == C ? void 0 : null === (t = C.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
                return E && (null == n || _) ? null == T || null == g || 0 === g.length ? null : (0, i.jsx)("div", {
                    className: f.container,
                    children: g.map(e => (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(h, {
                            listing: e
                        }, e.id), (0, i.jsx)(c.default, {
                            listing: e,
                            guildId: n,
                            groupListingId: T,
                            analyticsLocation: p,
                            onComplete: I,
                            forcesTransitionToGuild: v
                        }, e.id)]
                    }, e.id))
                }) : (0, i.jsx)("div", {
                    className: f.loadingContainer,
                    children: (0, i.jsx)(s.Spinner, {})
                })
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function i() {
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

            function r(e) {
                return {
                    textValue: e,
                    richValue: l(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return i
                },
                createState: function() {
                    return r
                },
                toRichValue: function() {
                    return l
                },
                voidToOptionValue: function() {
                    return a
                }
            }), n("70102");
            let s = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function l(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : s
            }

            function a(e) {
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
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("845579"),
                l = n("662255"),
                a = n("306160");

            function u(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: u,
                    shiftId: o,
                    showIconFirst: c
                } = e, d = s.DeveloperMode.useSetting();
                if (__OVERLAY__ || !d || !a.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, i.jsx)(r.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != o && e.shiftKey ? o : t;
                        (0, a.copy)(n), null == u || u()
                    },
                    icon: l.default,
                    showIconFirst: c
                }, f)
            }
        },
        577357: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getBenefitKey: function() {
                    return l
                },
                formatPlanInterval: function() {
                    return a
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
            var i = n("677795"),
                r = n("646718"),
                s = n("782340");

            function l(e) {
                return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
            }

            function a(e) {
                let {
                    interval: t,
                    interval_count: n
                } = e;
                return (function(e) {
                    switch (e) {
                        case r.SubscriptionIntervalTypes.DAY:
                            return s.default.Messages.DAY;
                        case r.SubscriptionIntervalTypes.MONTH:
                            return s.default.Messages.MONTH;
                        case r.SubscriptionIntervalTypes.YEAR:
                            return s.default.Messages.YEAR
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
                    case r.SubscriptionIntervalTypes.DAY:
                        if (n > 0 && n % 7 == 0) return s.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
                            weeks: n / 7
                        });
                        return s.default.Messages.DURATION_DAYS_CAPITALIZE.format({
                            days: n
                        });
                    case r.SubscriptionIntervalTypes.MONTH:
                        return s.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
                            months: n
                        });
                    case r.SubscriptionIntervalTypes.YEAR:
                        return s.default.Messages.DURATION_YEARS_CAPITALIZE.format({
                            years: n
                        })
                }
            }

            function o(e) {
                return e.ref_type === i.GuildRoleSubscriptionBenefitTypes.CHANNEL
            }

            function c(e) {
                return e.ref_type === i.GuildRoleSubscriptionBenefitTypes.INTANGIBLE
            }
        },
        467094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchStickerPack: function() {
                    return C
                },
                fetchStickerPacks: function() {
                    return m
                },
                fetchSticker: function() {
                    return T
                },
                fetchGuildStickers: function() {
                    return g
                },
                deleteGuildSticker: function() {
                    return S
                },
                createGuildSticker: function() {
                    return A
                },
                updateGuildSticker: function() {
                    return R
                },
                addStickerPreview: function() {
                    return N
                },
                clearStickerPreview: function() {
                    return x
                },
                favoriteSticker: function() {
                    return P
                },
                unfavoriteSticker: function() {
                    return y
                }
            }), n("424973");
            var i = n("917351"),
                r = n.n(i),
                s = n("872717"),
                l = n("913144"),
                a = n("404118"),
                u = n("619443"),
                o = n("915639"),
                c = n("872173"),
                d = n("766274"),
                f = n("341542"),
                h = n("697218"),
                p = n("271560"),
                I = n("364685"),
                v = n("49111"),
                E = n("397336"),
                _ = n("782340");
            let C = async (e, t) => {
                let {
                    body: n
                } = await (0, p.httpGetWithCountryCodeQuery)(v.Endpoints.STICKER_PACK(e));
                return l.default.dispatch({
                    type: "STICKER_PACK_FETCH_SUCCESS",
                    packId: e,
                    pack: n,
                    ingestStickers: t
                }), n
            }, m = async function() {
                let {
                    locale: e = o.default.locale
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (I.default.isFetchingStickerPacks || I.default.hasLoadedStickerPacks) return;
                l.default.wait(() => {
                    l.default.dispatch({
                        type: "STICKER_PACKS_FETCH_START"
                    })
                });
                let {
                    body: {
                        sticker_packs: t
                    }
                } = await s.default.get({
                    url: v.Endpoints.STICKER_PACKS,
                    query: {
                        locale: e
                    }
                });
                l.default.dispatch({
                    type: "STICKER_PACKS_FETCH_SUCCESS",
                    packs: t
                })
            }, T = async e => {
                let {
                    body: t
                } = await s.default.get({
                    url: v.Endpoints.STICKER(e)
                });
                l.default.dispatch({
                    type: "STICKER_FETCH_SUCCESS",
                    sticker: t
                })
            }, g = async e => {
                let {
                    body: t
                } = await s.default.get({
                    url: v.Endpoints.GUILD_STICKER_PACKS(e)
                });
                l.default.dispatch({
                    type: "GUILD_STICKERS_FETCH_SUCCESS",
                    guildId: e,
                    stickers: t.map(e => null != e.user ? {
                        ...e,
                        user: new d.default(e.user)
                    } : e)
                })
            }, S = async e => {
                await s.default.delete({
                    url: v.Endpoints.GUILD_STICKER(e.guild_id, e.id)
                })
            }, A = async (e, t) => {
                let n = await s.default.post({
                    url: v.Endpoints.GUILD_STICKER_PACKS(e),
                    body: t
                });
                return l.default.dispatch({
                    type: "GUILD_STICKERS_CREATE_SUCCESS",
                    guildId: e,
                    sticker: {
                        ...n.body,
                        user: h.default.getCurrentUser()
                    }
                }), n.body
            }, R = async (e, t, n) => {
                let i = await s.default.patch({
                    url: v.Endpoints.GUILD_STICKER(e, t),
                    body: n
                });
                return i.body
            };

            function N(e, t, n) {
                l.default.dispatch({
                    type: "ADD_STICKER_PREVIEW",
                    channelId: e,
                    sticker: t,
                    draftType: n
                })
            }

            function x(e, t) {
                l.default.dispatch({
                    type: "CLEAR_STICKER_PREVIEW",
                    channelId: e,
                    draftType: t
                })
            }

            function L(e) {
                return f.default.totalUnavailableGuilds > 0 || !u.default.isConnected() ? e : e.filter(e => null != I.default.getStickerById(e))
            }

            function P(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = L(t.stickerIds), r.size(t.stickerIds) >= E.MAX_FAVORITES) ? (a.default.show({
                    title: _.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                    body: _.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                        count: E.MAX_FAVORITES
                    })
                }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), E.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function y(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
                    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = L(t.stickerIds)
                }, E.UserSettingsDelay.INFREQUENT_USER_ACTION)
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
            var i = n("373469"),
                r = n("824563"),
                s = n("27618"),
                l = n("599110"),
                a = n("49111");
            let u = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: i,
                        activity: r,
                        customStatusActivity: s,
                        status: u
                    } = e;
                    l.default.track(a.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != r && (null == r ? void 0 : r.type) !== a.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == r ? void 0 : r.type) === a.ActivityTypes.PLAYING,
                        load_duration_ms: i,
                        profile_user_status: u,
                        has_custom_status: null != s,
                        has_profile_effect: null != t.profileEffectID,
                        ...c(t)
                    })
                },
                o = (e, t) => {
                    l.default.track(a.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...c(e)
                    })
                },
                c = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        l = null != i.default.getAnyStreamForUser(n),
                        u = r.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return l ? t === a.ActivityTypes.PLAYING : t !== a.ActivityTypes.CUSTOM_STATUS
                        }),
                        o = null == u ? void 0 : u.assets,
                        c = s.default.isFriend(n);
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
            var i = n("446674"),
                r = n("95410"),
                s = n("913144"),
                l = n("49111");
            let a = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                u = a,
                o = "LAST_VIEWED_PATH";
            class c extends i.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
                    u = null != e ? e : a
                }
                get defaultRoute() {
                    return l.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : l.Routes.ME
                }
                get fallbackRoute() {
                    return l.Routes.ME
                }
                getState() {
                    return u
                }
            }
            c.displayName = "DefaultRouteStore", c.persistKey = "DefaultRouteStore", c.migrations = [() => {
                let e = r.default.get(o, null);
                return r.default.remove(o), {
                    lastViewedPath: e
                }
            }];
            var d = new c(s.default, {
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
            var i = n("446674"),
                r = n("913144"),
                s = n("149022"),
                l = n("884351"),
                a = n("845579"),
                u = n("377253");
            let o = {};
            class c extends i.default.Store {
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
            var d = new c(r.default, {
                MESSAGE_START_EDIT: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        content: i
                    } = e, r = a.UseLegacyChatInput.getSetting(), u = l.default.unparse(i, t);
                    o[t] = {
                        channelId: t,
                        messageId: n,
                        textValue: u,
                        richValue: (0, s.toRichValue)(r ? u : i)
                    }
                },
                MESSAGE_UPDATE_EDIT: function(e) {
                    let {
                        channelId: t,
                        textValue: n,
                        richValue: i
                    } = e, r = o[t];
                    if (null == r) return !1;
                    o[t] = {
                        ...r,
                        textValue: n,
                        richValue: i
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
        287850: function(e, t, n) {
            "use strict";
            let i, r, s;
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007"), n("424973");
            var l, a, u = n("866227"),
                o = n.n(u),
                c = n("446674"),
                d = n("407846"),
                f = n("913144"),
                h = n("21121"),
                p = n("934306"),
                I = n("288518"),
                v = n("486503"),
                E = n("233069"),
                _ = n("42203"),
                C = n("305961"),
                m = n("660478"),
                T = n("282109"),
                g = n("697218"),
                S = n("299039"),
                A = n("724210");
            (a = l || (l = {})).DEFAULT = "DEFAULT", a.FAVORITE = "FAVORITE";
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
                    let i = null !== (n = null !== (t = m.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        r = e.isMessageRequestTimestamp;
                    if (null != r) {
                        let e = o(r).valueOf(),
                            t = S.default.fromTimestamp(e);
                        return S.default.compare(i, t) > 0 ? i : t
                    }
                    return i
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: T.default.isMessagesFavorite(e.id) && (0, h.isInMainTabsExperiment)(),
                    isRequest: I.default.isMessageRequest(e.id) || v.default.isSpam(e.id)
                }
            }

            function x() {
                R.clear(), Object.values(_.default.getMutablePrivateChannels()).forEach(e => {
                    R.set(e.id, N(e))
                }), (0, h.isInMainTabsExperiment)() && (0, p.isSplitMessagesTab)() && T.default.getAddedToMessages().forEach(e => {
                    let t = _.default.getChannel(e);
                    null != t && (0, E.isGuildTextChannelType)(t.type) && R.set(t.id, N(t))
                })
            }

            function L() {
                let e = _.default.getMutablePrivateChannels();
                for (let t in e) R.set(t, N(e[t]))
            }
            let P = (i = [], r = [], s = [], () => {
                let e = R.values("FAVORITE"),
                    t = R.values("DEFAULT");
                return (i !== e || r !== t) && (s = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return s.push(t)
                }), i = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return s.push(t)
                }), r = t), s
            });
            class y extends c.default.Store {
                initialize() {
                    this.waitFor(_.default, C.default, g.default, I.default, T.default), this.syncWith([T.default, I.default], x)
                }
                getPrivateChannelIds() {
                    return P()
                }
                getSortedChannels() {
                    return [R.values("FAVORITE"), R.values("DEFAULT")]
                }
                serializeForOverlay() {
                    let e = {};
                    return R.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: i
                        } = t;
                        e[n] = i
                    }), e
                }
            }
            y.displayName = "PrivateChannelSortStore";
            var M = new y(f.default, {
                CONNECTION_OPEN: x,
                CONNECTION_OPEN_SUPPLEMENTAL: x,
                OVERLAY_INITIALIZE: x,
                CACHE_LOADED: L,
                CACHE_LOADED_LAZY: L,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, E.isPrivate)(e.type) || R.has(e.id)) && R.set(e.id, N(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, E.isPrivate)(t.type) || t.id === A.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
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
                    let i = _.default.getChannel(t);
                    return null != i && R.set(t, N(i, n.id))
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
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                l = n.n(s),
                a = n("546671"),
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
            class d extends r.PureComponent {
                render() {
                    let {
                        direction: e,
                        className: t
                    } = this.props;
                    return (0, i.jsx)(a.default, {
                        className: l(u.arrow, t, {
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                l = n("561445"),
                a = e => {
                    let {
                        aspectRatio: t,
                        style: n,
                        className: r,
                        children: a
                    } = e;
                    return (0, i.jsx)("div", {
                        className: s(l.outer, r),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...n
                        },
                        children: (0, i.jsx)("div", {
                            className: l.inner,
                            children: a
                        })
                    })
                }
        },
        265836: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("862337");
            class l extends r.Component {
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
                    var n, i, r, s;
                    let {
                        props: l
                    } = this;
                    let a = (n = l, i = this.state, !n.disable && !(i.hovered && n.pauseOnHover));
                    let u = (r = e, s = t, !r.disable && !(s.hovered && r.pauseOnHover));
                    a && !u || e.interval !== l.interval ? this.startTimer() : !a && u && this.stopTimer()
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
                    } = this.props, r = n ? null : {
                        onMouseEnter: this.handlePause,
                        onFocus: this.handlePause,
                        onMouseLeave: this.handleResume,
                        onBlur: this.handleResume
                    };
                    return (0, i.jsx)("div", {
                        ...r,
                        className: t,
                        children: e
                    })
                }
                constructor(...e) {
                    super(...e), this.timer = new s.Interval, this.state = {
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
            l.defaultProps = {
                disable: !1,
                pauseOnHover: !1
            };
            var a = l
        },
        646240: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                l = n.n(s),
                a = n("77078"),
                u = n("381546"),
                o = n("229915"),
                c = n("782340"),
                d = n("913893");
            class f extends r.Component {
                render() {
                    let {
                        autoFocus: e,
                        label: t,
                        placeholder: n,
                        searchTerm: r,
                        inputClassName: s,
                        className: f,
                        onChange: h,
                        onFocus: p,
                        onBlur: I,
                        onKeyPress: v,
                        autoComplete: E,
                        forwardedRef: _,
                        closeIconClassName: C,
                        searchIconClassName: m,
                        cta: T
                    } = this.props, g = null != r && r.length > 0, S = null != _ ? _ : this._textInputRef;
                    return (0, i.jsx)(a.FocusRing, {
                        focusTarget: S,
                        ringTarget: this._containerRef,
                        children: (0, i.jsxs)("div", {
                            className: l(d.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, i.jsx)(a.TextInput, {
                                inputRef: S,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: d.searchBoxInputWrapper,
                                inputClassName: l(d.searchBoxInput, s),
                                onChange: h,
                                onFocus: p,
                                onBlur: I,
                                onKeyPress: v,
                                value: g ? r : "",
                                placeholder: n,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: E ? "on" : "off"
                            }), null != T ? (0, i.jsx)(a.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: d.cta,
                                children: T
                            }) : null, g ? (0, i.jsx)(a.Clickable, {
                                onClick: this.handleClear,
                                className: d.clear,
                                "aria-label": c.default.Messages.SEARCH_CLEAR,
                                children: (0, i.jsx)(u.default, {
                                    className: l(d.clearIcon, C)
                                })
                            }) : (0, i.jsx)(o.default, {
                                className: l(d.searchIcon, m),
                                "aria-label": c.default.Messages.SEARCH
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._textInputRef = r.createRef(), this._containerRef = r.createRef(), this.handleClear = () => {
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
            var h = r.forwardRef((e, t) => (0, i.jsx)(f, {
                forwardedRef: t,
                ...e
            }))
        },
        546671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                s = n("7037"),
                l = n("246053"),
                a = (0, r.replaceIcon)(function(e) {
                    return (0, i.jsx)(l.default, {
                        ...e,
                        direction: l.default.Directions.UP
                    })
                }, s.ArrowSmallUpIcon)
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                s = n("35647"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, s.IdIcon, void 0, {
                    size: 24
                })
        },
        627490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                s = n("772279"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        className: s,
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(u),
                        className: s,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: r,
                            d: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
                        })
                    })
                }, s.CompassIcon, void 0, {
                    size: 24
                })
        },
        781896: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                s = n("533806"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: s,
                            d: "M16.002 8.00598C16.002 10.211 14.208 12.006 12.002 12.006C9.79695 12.006 8.00195 10.211 8.00195 8.00598C8.00195 5.80098 9.79595 4.00598 12.002 4.00598C14.208 4.00598 16.002 5.80098 16.002 8.00598ZM4.00195 19.006C4.00195 15.473 7.29195 13.006 12.002 13.006C16.713 13.006 20.002 15.473 20.002 19.006V20.006H4.00195V19.006Z",
                            fill: r
                        })
                    })
                }, s.UserIcon, void 0, {
                    size: 24
                })
        },
        849483: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                s = n("392646"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsxs)("g", {
                            fill: "none",
                            className: s,
                            children: [(0, i.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M12 22C12.4883 22 12.9684 21.965 13.438 21.8974C12.5414 20.8489 12 19.4877 12 18C12 17.6593 12.0284 17.3252 12.083 17H6V16.0244C6 14.0732 10 13 12 13C12.6215 13 13.436 13.1036 14.2637 13.305C15.2888 12.4882 16.5874 12 18 12C19.4877 12 20.8489 12.5414 21.8974 13.438C21.965 12.9684 22 12.4883 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12Z",
                                fill: r
                            }), (0, i.jsx)("path", {
                                d: "M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z",
                                fill: r
                            })]
                        })
                    })
                }, s.UserCircleStatusIcon, void 0, {
                    size: 24
                })
        }
    }
]);