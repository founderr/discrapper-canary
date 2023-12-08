(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["76656"], {
        373807: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getSeasonalGiftingBody: function() {
                    return F
                },
                default: function() {
                    return m
                }
            });
            var i = s("37983"),
                o = s("884691"),
                n = s("446674"),
                l = s("151426"),
                C = s("77078"),
                a = s("509802"),
                r = s("977591"),
                d = s("778588"),
                u = s("841792"),
                c = s("599110"),
                f = s("49111"),
                p = s("994428"),
                x = s("782340"),
                h = s("843011");

            function F(e, t) {
                return e || t ? x.default.Messages.SEASONAL_GIFTING_DM_POPUP_BODY : x.default.Messages.SEASONAL_GIFTING_MAKE_SOMEONES_DAY_TOOLTIP
            }

            function j(e) {
                let {
                    onComplete: t,
                    onDMCheckItOutClick: n,
                    isDM: l
                } = e;
                o.useEffect(() => {
                    c.default.track(f.AnalyticEvents.PREMIUM_GIFT_UPSELL_VIEWED, {
                        type: "holiday_gifting_tip"
                    })
                }, []);
                let {
                    enabled: a
                } = r.ExpandedGiftingRevampExperiment.useExperiment({
                    location: "ChannelPremiumGiftButton"
                }, {
                    autoTrackExposure: !1
                }), d = o.useMemo(() => [() => s.el("540902").then(s.t.bind(s, "540902", 19)), () => s.el("915604").then(s.t.bind(s, "915604", 19)), () => s.el("166505").then(s.t.bind(s, "166505", 19))], []), p = l || a, j = p ? x.default.Messages.SEASONAL_GIFTING_DM_POPUP_HEADER : x.default.Messages.SEASONAL_GIFTING_POPUP_HEADER, m = p ? x.default.Messages.SEASONAL_GIFTING_DM_POPUP_CTA : x.default.Messages.SEASONAL_GIFTING_SEND_GIFT_CTA;
                return (0, i.jsxs)("div", {
                    className: h.container,
                    children: [(0, i.jsx)(u.default, {
                        className: h.image,
                        animationData: d
                    }), (0, i.jsxs)("div", {
                        className: h.body,
                        children: [(0, i.jsx)(C.Heading, {
                            className: h.text,
                            variant: "heading-sm/semibold",
                            children: j
                        }), (0, i.jsx)(C.Text, {
                            className: h.text,
                            variant: "text-sm/normal",
                            children: F(l, a)
                        })]
                    }), (0, i.jsxs)("div", {
                        className: h.dmButtonContainer,
                        children: [(0, i.jsx)(C.Button, {
                            className: h.dmButton,
                            look: C.Button.Looks.FILLED,
                            color: C.Button.Colors.BRAND,
                            onClick: () => t(),
                            children: x.default.Messages.GOT_IT
                        }), (0, i.jsx)(C.Button, {
                            className: h.dmButton,
                            look: C.Button.Looks.INVERTED,
                            color: C.Button.Colors.BRAND,
                            onClick: () => n(),
                            children: m
                        })]
                    }), (0, i.jsx)("div", {
                        className: h.pointer
                    })]
                })
            }

            function m(e) {
                let {
                    onComplete: t,
                    onDMCheckItOutClick: s,
                    isDM: o
                } = e, r = (0, n.useStateFromStores)([d.default], () => !(null === d.default || void 0 === d.default ? void 0 : d.default.hasLayers()));
                return r ? (0, i.jsx)(a.default, {
                    contentTypes: [l.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023],
                    children: e => {
                        let {
                            visibleContent: n,
                            markAsDismissed: a
                        } = e;
                        return n === l.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023 ? (0, i.jsx)(C.Popout, {
                            spacing: 0,
                            shouldShow: !0,
                            position: "top",
                            align: "center",
                            renderPopout: e => (0, i.jsx)(j, {
                                ...e,
                                onComplete: () => {
                                    t(), a(p.ContentDismissActionType.USER_DISMISS)
                                },
                                onDMCheckItOutClick: () => {
                                    s(), t(), a(p.ContentDismissActionType.TAKE_ACTION)
                                },
                                isDM: o
                            }),
                            onRequestClose: () => void 0,
                            closeOnScroll: !1,
                            ignoreModalClicks: !0,
                            children: () => (0, i.jsx)("div", {
                                className: h.popoutTarget
                            })
                        }) : null
                    }
                }) : null
            }
        },
        108486: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                SeasonalGiftIcon: function() {
                    return w
                },
                default: function() {
                    return R
                }
            }), s("222007");
            var i = s("37983"),
                o = s("884691"),
                n = s("907002"),
                l = s("249654"),
                C = s("446674"),
                a = s("151426"),
                r = s("819855"),
                d = s("77078"),
                u = s("373807"),
                c = s("841098"),
                f = s("812204"),
                p = s("685665"),
                x = s("10641"),
                h = s("393171"),
                F = s("649844"),
                j = s("53253"),
                m = s("977591"),
                L = s("697218"),
                M = s("551305"),
                b = s("978679"),
                _ = s("953957"),
                E = s("762974"),
                A = s("718517"),
                N = s("158998"),
                D = s("49111"),
                v = s("994428"),
                g = s("646718"),
                T = s("782340"),
                S = s("426068"),
                B = s("537461");
            let I = [{
                    box: "#FFD89E",
                    ribbon: "#FF7476"
                }, {
                    box: "#17B5E2",
                    ribbon: "#FFFFFF"
                }, {
                    box: "#EED169",
                    ribbon: "#51A1EB"
                }, {
                    box: "#509C65",
                    ribbon: "#FFC96E"
                }, {
                    box: "#E4578A",
                    ribbon: "#BEC4FF"
                }, {
                    box: "#AFE0FC",
                    ribbon: "#FF9356"
                }, {
                    box: "#DB6D6D",
                    ribbon: "#67DA9C"
                }],
                k = [{
                    box: "#EABB75",
                    ribbon: "#E4595C"
                }, {
                    box: "#2D7AA5",
                    ribbon: "#64C7C2"
                }, {
                    box: "#ECBF21",
                    ribbon: "#51A1EB"
                }, {
                    box: "#439359",
                    ribbon: "#D5A24C"
                }, {
                    box: "#FC90C4",
                    ribbon: "#777FCE"
                }, {
                    box: "#549DC6",
                    ribbon: "#FF9356"
                }, {
                    box: "#DB6F6F",
                    ribbon: "#81C29F"
                }],
                y = 1 / 300,
                O = A.default.Millis.DAYS_30,
                Z = (0, n.animated)(_.default),
                G = (0, n.animated)(E.default),
                H = (0, n.animated)(b.default);

            function w(e) {
                let {
                    themeOverride: t,
                    hovered: s,
                    isContentDismissed: l,
                    boxColors: C = {
                        dark: I,
                        light: k
                    }
                } = e, a = (0, c.default)(), [d, u] = function(e) {
                    let [t, s] = o.useState(!1), [i, n] = o.useState(Math.floor(7 * Math.random()));
                    return o.useEffect(() => {
                        if (e) return;
                        let t = Math.random() <= y;
                        if (s(t), !t) {
                            let e;
                            do e = Math.floor(7 * Math.random()); while (e === i);
                            n(e)
                        }
                    }, [e]), [t, i]
                }(s), f = (0, n.useSpring)({
                    reverse: !s,
                    reset: !0,
                    from: {
                        scale: 1
                    },
                    to: {
                        scale: 1.14
                    },
                    config: {
                        tension: 800,
                        friction: 24
                    }
                }), p = l ? u : 0, x = (0, r.isThemeDark)(null != t ? t : a) ? C.dark[p] : C.light[p];
                return !s && l ? (0, i.jsx)(H, {}) : l && d ? (0, i.jsx)(G, {
                    isDark: (0, r.isThemeDark)(a),
                    style: f
                }) : (0, i.jsx)(Z, {
                    boxColor: x.box,
                    ribbonColor: x.ribbon,
                    style: f
                })
            }
            var R = o.memo(function(e) {
                let {
                    disabled: t,
                    channel: s
                } = e, {
                    analyticsLocations: n
                } = (0, p.default)(f.default.GIFT_BUTTON), [r, c] = o.useState(!1), b = (0, h.useIsDismissibleContentTypeDismissed)(a.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023), _ = (0, C.useStateFromStores)([L.default], () => L.default.getCurrentUser()), E = null != _ ? l.default.age(_.id) : 0, {
                    enabled: A
                } = j.SeasonalGiftingMarketingExperiment.useExperiment({
                    location: "ChannelPremiumGiftButton"
                }, {
                    autoTrackExposure: !1
                }), I = (0, N.useDirectMessageRecipient)(s), k = null != I, {
                    enabled: y
                } = m.ExpandedGiftingRevampExperiment.useExperiment({
                    location: "ChannelPremiumGiftButton"
                }, {
                    autoTrackExposure: !1
                }), Z = A && !t && !b && E >= O;
                if (t) return null;
                let G = () => {
                        (0, F.default)({
                            isGift: !0,
                            giftRecipient: null == I ? void 0 : I,
                            initialPlanId: null,
                            subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
                            analyticsLocations: n,
                            analyticsObject: {
                                page: s.isPrivate() ? D.AnalyticsPages.DM_CHANNEL : D.AnalyticsPages.GUILD_CHANNEL,
                                section: D.AnalyticsSections.CHANNEL_TEXT_AREA,
                                object: D.AnalyticsObjects.SEASONAL_BUTTON_ICON,
                                objectType: D.AnalyticsObjectTypes.GIFT
                            }
                        })
                    },
                    H = (0, i.jsxs)("div", {
                        className: S.container,
                        onMouseEnter: () => {
                            !r && c(!0)
                        },
                        onMouseLeave: () => {
                            c(!1)
                        },
                        children: [Z && (0, i.jsx)(u.default, {
                            onComplete: () => c(!1),
                            onDMCheckItOutClick: G,
                            isDM: k
                        }), (0, i.jsx)(M.default, {
                            innerClassName: B.button,
                            "aria-label": T.default.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                            isActive: !1,
                            onClick: () => {
                                c(!1), (0, x.markDismissibleContentAsDismissed)(a.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023, {
                                    dismissAction: v.ContentDismissActionType.TAKE_ACTION
                                }), G()
                            },
                            children: (0, i.jsx)(w, {
                                hovered: r,
                                isContentDismissed: !Z
                            })
                        })]
                    });
                return Z ? H : (0, i.jsx)(d.TooltipContainer, {
                    className: S.container,
                    text: (0, u.getSeasonalGiftingBody)(k, y),
                    children: H
                })
            })
        },
        393171: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useIsDismissibleContentTypeDismissed: function() {
                    return C
                }
            });
            var i = s("446674"),
                o = s("374363"),
                n = s("674268"),
                l = s("846614");

            function C(e) {
                let t = (0, l.useNewUserDismissibleContent)([e]),
                    s = (0, i.useStateFromStores)([o.default], () => {
                        var e;
                        return null === (e = o.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                    });
                return 0 === t.length || null != s && (0, n.hasBit)(s, e)
            }
        },
        841792: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            }), s("222007");
            var i = s("37983"),
                o = s("884691"),
                n = s("446674"),
                l = s("206230"),
                C = s("491605");

            function a(e) {
                let {
                    animationData: t,
                    className: s
                } = e, [a, r] = (0, o.useState)(0), d = (0, n.useStateFromStores)([l.default], () => l.default.useReducedMotion);
                return (0, o.useEffect)(() => {
                    let e = a + 1;
                    e < t.length && t[e]()
                }, [a, t]), (0, i.jsx)(C.default, {
                    importData: t[a],
                    className: s,
                    shouldAnimate: !d,
                    versionKey: a,
                    onComplete: () => {
                        a < t.length - 1 && r(a + 1)
                    },
                    loop: a === t.length - 1
                })
            }
        },
        551305: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                NotificationTypes: function() {
                    return o
                },
                default: function() {
                    return h
                }
            });
            var i, o, n = s("37983"),
                l = s("884691"),
                C = s("414456"),
                a = s.n(C),
                r = s("907002"),
                d = s("77078"),
                u = s("128295"),
                c = s("414868"),
                f = s("587974"),
                p = s("299341");
            (i = o || (o = {}))[i.UPDATE = 0] = "UPDATE", i[i.NEW = 1] = "NEW";
            let x = {
                config: {
                    friction: 26,
                    tension: 700,
                    mass: 1
                },
                initial: {
                    scale: 1,
                    opacity: 1
                },
                from: {
                    scale: .6,
                    opacity: 0
                },
                enter: {
                    scale: 1,
                    opacity: 1
                },
                leave: {
                    scale: .6,
                    opacity: 0
                }
            };
            var h = l.memo(function(e) {
                let {
                    className: t,
                    disabled: s = !1,
                    innerClassName: i,
                    childClassName: o,
                    iconClassName: l,
                    icon: C,
                    children: h,
                    onClick: F,
                    isActive: j,
                    onMouseEnter: m,
                    onMouseLeave: L,
                    onFocus: M,
                    onBlur: b,
                    pulse: _,
                    sparkle: E,
                    notification: A,
                    "aria-label": N,
                    "aria-expanded": D,
                    "aria-haspopup": v,
                    "aria-controls": g
                } = e, T = (0, r.useTransition)(null != h, {
                    ...x,
                    keys: e => e ? "children" : "icon"
                }), S = e => {
                    let {
                        component: t
                    } = e;
                    return null != A ? (0, n.jsxs)("div", {
                        className: p.buttonContent,
                        children: [(0, n.jsx)(f.default, {
                            className: p.iconMask,
                            mask: f.MaskIDs.CHAT_INPUT_BUTTON_NOTIFICATION,
                            width: 24,
                            height: 24,
                            children: t
                        }), (0, n.jsx)("span", {
                            className: p.notificationDot
                        })]
                    }) : t
                };
                return (0, n.jsxs)(d.Button, {
                    look: d.Button.Looks.BLANK,
                    size: d.Button.Sizes.NONE,
                    "aria-label": N,
                    "aria-expanded": D,
                    "aria-haspopup": v,
                    "aria-controls": g,
                    disabled: s,
                    className: a(t, {
                        [p.active]: j
                    }),
                    innerClassName: a(p.button, i, {
                        [p.pulseButton]: _
                    }),
                    onClick: F,
                    onMouseEnter: m,
                    onMouseLeave: L,
                    onFocus: M,
                    onBlur: b,
                    focusProps: {
                        offset: {
                            top: 4,
                            bottom: 4
                        }
                    },
                    children: [T((e, t, s) => {
                        let {
                            key: i
                        } = s;
                        return t ? (0, n.jsx)(r.animated.div, {
                            style: e,
                            className: a(p.buttonWrapper, o),
                            children: S({
                                component: h
                            })
                        }, i) : null != C ? (0, n.jsx)(r.animated.div, {
                            style: e,
                            className: a(p.buttonWrapper, o),
                            children: S({
                                component: (0, n.jsx)(C, {
                                    className: a(p.icon, l, {
                                        [p.pulseIcon]: _
                                    })
                                })
                            })
                        }, i) : void 0
                    }), E && (0, n.jsxs)("div", {
                        className: p.sparkleContainer,
                        children: [(0, n.jsx)(c.default, {
                            className: p.sparkleStar
                        }), (0, n.jsx)(u.default, {
                            className: p.sparklePlus
                        })]
                    })]
                })
            })
        },
        953957: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var i = s("37983");

            function o(e) {
                let {
                    width: t = 24,
                    height: s = 24,
                    boxColor: o,
                    ribbonColor: n,
                    style: l
                } = e;
                return (0, i.jsxs)("svg", {
                    style: l,
                    width: t,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3Z",
                        fill: o
                    }), (0, i.jsx)("path", {
                        d: "M13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z",
                        fill: o
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M20 7.99882H16.886C17.337 7.76382 17.764 7.47682 18.121 7.12082C19.29 5.95182 19.29 4.04882 18.121 2.87682C16.986 1.74582 15.014 1.74482 13.879 2.87782C12.242 4.51482 12.022 7.59582 12.002 7.94182C12 7.96182 12.01 7.97882 12.01 7.99882H11.99C11.99 7.97882 12 7.96182 11.998 7.94082C11.979 7.59482 11.758 4.51382 10.121 2.87682C8.986 1.74582 7.012 1.74582 5.879 2.87882C4.709 4.04782 4.709 5.95082 5.879 7.12082C6.236 7.47682 6.663 7.76382 7.114 7.99882H4C2.897 7.99882 2 8.89582 2 9.99882V11.9988H22V9.99882C22 8.89582 21.104 7.99882 20 7.99882ZM7.293 4.29182C6.903 4.68182 6.903 5.31582 7.293 5.70682C7.879 6.29282 8.945 6.63882 9.825 6.82182C9.641 5.93982 9.297 4.88182 8.707 4.29182C8.519 4.10282 8.268 3.99982 8 3.99982C7.732 3.99982 7.481 4.10282 7.293 4.29182ZM15.293 4.29282C14.702 4.88282 14.359 5.94082 14.174 6.82382C15.057 6.64182 16.116 6.29782 16.707 5.70682C17.097 5.31582 17.096 4.68182 16.706 4.29082C16.519 4.10282 16.268 3.99982 16 3.99982C15.732 3.99982 15.481 4.10282 15.293 4.29282Z",
                        fill: o
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.8861 7.99882C17.3371 7.76382 17.7641 7.47682 18.1211 7.12082C19.2901 5.95182 19.2901 4.04882 18.1211 2.87682C16.9861 1.74582 15.0141 1.74482 13.8791 2.87782C12.2421 4.51482 12.0221 7.59582 12.0021 7.94182C12.0001 7.96182 12.0101 7.97882 12.0101 7.99882H11.9901C11.9901 7.97882 12.0001 7.96182 11.9981 7.94082C11.9791 7.59482 11.7581 4.51382 10.1211 2.87682C8.98606 1.74582 7.01206 1.74582 5.87906 2.87882C4.70906 4.04782 4.70906 5.95082 5.87906 7.12082C6.23606 7.47682 6.66306 7.76382 7.11406 7.99882C-3.67757 7.99882 23.9877 7.99882 16.8861 7.99882ZM7.29306 4.29182C6.90306 4.68182 6.90306 5.31582 7.29306 5.70682C7.87906 6.29282 8.94506 6.63882 9.82506 6.82182C9.64106 5.93982 9.29706 4.88182 8.70706 4.29182C8.51906 4.10282 8.26806 3.99982 8.00006 3.99982C7.73206 3.99982 7.48106 4.10282 7.29306 4.29182ZM15.2931 4.29282C14.7021 4.88282 14.3591 5.94082 14.1741 6.82382C15.0571 6.64182 16.1161 6.29782 16.7071 5.70682C17.0971 5.31582 17.0961 4.68182 16.7061 4.29082C16.5191 4.10282 16.2681 3.99982 16.0001 3.99982C15.7321 3.99982 15.4811 4.10282 15.2931 4.29282Z",
                        fill: n
                    }), (0, i.jsx)("rect", {
                        x: "3",
                        y: "12",
                        width: "18",
                        height: "2",
                        fill: n
                    }), (0, i.jsx)("rect", {
                        x: "11",
                        y: "8",
                        width: "2",
                        height: "4",
                        fill: n
                    }), (0, i.jsx)("rect", {
                        x: "11",
                        y: "14",
                        width: "2",
                        height: "8",
                        fill: n
                    })]
                })
            }
            s("884691")
        },
        128295: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var i = s("37983");
            s("884691");
            var o = s("75196");

            function n(e) {
                let {
                    width: t = 12,
                    height: s = 12,
                    color: n = "currentColor",
                    foreground: l,
                    ...C
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, o.default)(C),
                    width: t,
                    height: s,
                    viewBox: "0 0 12 12",
                    children: [(0, i.jsx)("path", {
                        className: l,
                        d: "M7.00168 1.08381C7.00168 0.485238 6.51645 0 5.91788 0C5.31931 0 4.83408 0.485238 4.83408 1.08381V2.18568C4.83408 2.78425 5.31931 3.26949 5.91788 3.26949C6.51645 3.26949 7.00168 2.78425 7.00168 2.18568V1.08381Z",
                        fill: n
                    }), (0, i.jsx)("path", {
                        className: l,
                        d: "M7.00159 9.81428C7.00159 9.21571 6.51636 8.73047 5.91779 8.73047C5.31922 8.73047 4.83398 9.21571 4.83398 9.81428V10.9161C4.83398 11.5147 5.31922 12 5.91779 12C6.51636 12 7.00159 11.5147 7.00159 10.9161V9.81428Z",
                        fill: n
                    }), (0, i.jsx)("path", {
                        className: l,
                        d: "M10.9162 7.10561C11.5148 7.10561 12 6.62037 12 6.0218C12 5.42323 11.5148 4.93799 10.9162 4.93799H9.81433C9.21576 4.93799 8.73053 5.42323 8.73053 6.0218C8.73053 6.62037 9.21576 7.10561 9.81433 7.10561H10.9162Z",
                        fill: n
                    }), (0, i.jsx)("path", {
                        className: l,
                        d: "M2.18573 7.04555C2.7843 7.04555 3.26953 6.56031 3.26953 5.96174C3.26953 5.36317 2.7843 4.87793 2.18573 4.87793H1.08386C0.485292 4.87793 5.67436e-05 5.36317 5.67436e-05 5.96174C5.67436e-05 6.56031 0.485292 7.04555 1.08386 7.04555H2.18573Z",
                        fill: n
                    })]
                })
            }
        },
        414868: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var i = s("37983");
            s("884691");
            var o = s("75196");

            function n(e) {
                let {
                    width: t = 10,
                    height: s = 10,
                    color: n = "currentColor",
                    foreground: l,
                    ...C
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, o.default)(C),
                    width: t,
                    height: s,
                    viewBox: "0 0 10 10",
                    children: (0, i.jsx)("path", {
                        className: l,
                        d: "M4.59185 1.69642L1.32007 0.0611887C1.14437 -0.00404167 0.953613 -0.0174513 0.770466 0.0225611C0.587319 0.0625734 0.419488 0.154328 0.286908 0.286908C0.154328 0.419488 0.0625738 0.587318 0.0225614 0.770466C-0.0174511 0.953613 -0.00404127 1.14437 0.0611893 1.32007L1.69642 4.59185C1.78832 4.83513 1.78825 5.10365 1.69623 5.34698L0.122153 8.68254C0.0375916 8.84984 0.00799916 9.03955 0.0375831 9.2246C0.0671671 9.40965 0.154425 9.58061 0.286913 9.7131C0.419402 9.84559 0.59035 9.93283 0.775402 9.96242C0.960453 9.992 1.15016 9.96241 1.31746 9.87785L4.65302 8.30377C4.89635 8.21175 5.16487 8.21168 5.40815 8.30358L8.67993 9.93881C8.85563 10.004 9.04639 10.0175 9.22953 9.97744C9.41268 9.93743 9.58051 9.84567 9.71309 9.71309C9.84567 9.58051 9.93743 9.41268 9.97744 9.22953C10.0175 9.04639 10.004 8.85563 9.93881 8.67993L8.30358 5.40815C8.24152 5.292 8.20906 5.16233 8.2091 5.03061C8.20913 4.89889 8.24165 4.7692 8.30377 4.65302L9.87785 1.31746C9.96241 1.15016 9.992 0.960453 9.96242 0.775401C9.93283 0.59035 9.84559 0.419401 9.7131 0.286913C9.58061 0.154424 9.40965 0.0671663 9.2246 0.0375824C9.03955 0.00799847 8.84984 0.037591 8.68254 0.122152L5.34698 1.69623C5.2308 1.75835 5.10111 1.79087 4.96939 1.7909C4.83767 1.79094 4.708 1.75848 4.59185 1.69642Z",
                        fill: n
                    })
                })
            }
        },
        762974: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var i = s("37983");

            function o(e) {
                let {
                    isDark: t,
                    style: s
                } = e;
                return t ? (0, i.jsxs)("svg", {
                    style: s,
                    width: "24",
                    height: "27",
                    viewBox: "0 0 24 27",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.9565 5.2944L14.0303 6.35946C14.3737 5.98438 14.6768 5.56864 14.8905 5.11201C15.5892 3.61369 14.9383 1.82545 13.439 1.12395C11.9856 0.449355 10.1322 1.12288 9.45316 2.57574C8.47477 4.67391 9.3218 7.64434 9.42134 7.97632C9.4263 7.9958 9.44151 8.00835 9.44836 8.02715L9.42956 8.03399C9.42272 8.01519 9.4263 7.9958 9.41724 7.97675C9.28105 7.65811 8.01961 4.83851 5.92145 3.86012C4.46807 3.18552 2.61312 3.86066 1.93596 5.31284C1.23634 6.81151 1.8872 8.59974 3.38681 9.29902C3.84403 9.51145 4.34344 9.6351 4.84762 9.70168L1.92142 10.7667C0.884936 11.144 0.348823 12.2937 0.726071 13.3302L1.41011 15.2095L20.204 8.36913L19.5199 6.48975C19.1427 5.45327 17.9939 4.91681 16.9565 5.2944ZM3.74796 6.15701C3.51486 6.65688 3.7317 7.25265 4.23191 7.48668C4.983 7.83691 6.10305 7.79746 6.99257 7.66844C6.518 6.90256 5.83289 6.02602 5.07668 5.6734C4.83538 5.5601 4.56429 5.54915 4.31245 5.64082C4.06061 5.73248 3.85998 5.91511 3.74796 6.15701ZM11.2658 3.42179C10.9123 4.17834 10.9518 5.28985 11.08 6.18287C11.8475 5.70985 12.725 5.02439 13.0782 4.2669C13.3109 3.76609 13.0932 3.17067 12.5929 2.93664C12.3529 2.82393 12.0818 2.81299 11.83 2.90465C11.5782 2.99632 11.3775 3.17895 11.2658 3.42179Z",
                        fill: "url(#paint0_linear_2683_16702)"
                    }), (0, i.jsx)("path", {
                        d: "M21.9355 8.82275C21.3596 13.7273 19.056 16.7554 19.056 16.7554",
                        stroke: "#5865F2",
                        strokeWidth: "3",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round"
                    }), (0, i.jsx)("path", {
                        d: "M19.4857 12.5113L18.9294 12.5444C18.8015 12.552 18.6819 12.61 18.5968 12.7058C18.5118 12.8016 18.4682 12.9273 18.4758 13.0552L18.7061 16.9311C18.7099 16.996 18.7268 17.0595 18.7557 17.1177C18.7847 17.1759 18.8251 17.2277 18.8745 17.27C18.9239 17.3122 18.9814 17.344 19.0434 17.3636C19.1054 17.3831 19.1708 17.3898 19.2355 17.3835L19.7918 17.3504C20.0968 17.3323 20.382 17.1938 20.5848 16.9654C20.7877 16.7369 20.8914 16.4373 20.8733 16.1323L20.7224 13.5917C20.7042 13.2867 20.5657 13.0015 20.3373 12.7987C20.1089 12.5959 19.8092 12.4921 19.5043 12.5102L19.4857 12.5113Z",
                        fill: "#7196FF"
                    }), (0, i.jsx)("path", {
                        d: "M8.06376 10.3064L17.1137 9.76874C18.5271 9.68477 19.741 10.7625 19.825 12.1759L20.0622 16.1686C20.1461 17.582 19.0684 18.7959 17.655 18.8799L8.60506 19.4176C7.19165 19.5015 5.97779 18.4238 5.89381 17.0104L5.6566 13.0177C5.57263 11.6042 6.65035 10.3904 8.06376 10.3064Z",
                        fill: "#7196FF"
                    }), (0, i.jsx)("path", {
                        d: "M18.1642 14.0981C17.7332 14.0981 17.3839 13.7488 17.3839 13.3179C17.3839 12.8869 17.7332 12.5376 18.1642 12.5376C18.5951 12.5376 18.9444 12.8869 18.9444 13.3179C18.9444 13.7488 18.5951 14.0981 18.1642 14.0981Z",
                        fill: "black"
                    }), (0, i.jsx)("path", {
                        d: "M7.33246 13.2305L5.05143 13.366C4.7514 13.3838 4.47075 13.5201 4.2712 13.7448C4.07166 13.9696 3.96957 14.2644 3.98739 14.5644L4.14054 17.1422C4.15836 17.4422 4.29464 17.7229 4.5194 17.9224C4.74415 18.122 5.03897 18.224 5.33899 18.2062L7.62002 18.0707L7.33246 13.2305Z",
                        fill: "#7196FF"
                    }), (0, i.jsx)("path", {
                        d: "M6.12411 13.8623L5.47504 13.9009C5.33733 13.909 5.2085 13.9716 5.11691 14.0748C5.02531 14.1779 4.97845 14.3133 4.98663 14.451L5.10452 16.4353C5.1127 16.573 5.17526 16.7018 5.27842 16.7934C5.38159 16.885 5.51691 16.9319 5.65463 16.9237L6.3037 16.8851L6.12411 13.8623Z",
                        fill: "#B8CDFF"
                    }), (0, i.jsx)("path", {
                        d: "M9.54422 14.6749C9.08252 14.6749 8.70823 14.3006 8.70823 13.8389C8.70823 13.3772 9.08252 13.0029 9.54422 13.0029C10.0059 13.0029 10.3802 13.3772 10.3802 13.8389C10.3802 14.3006 10.0059 14.6749 9.54422 14.6749Z",
                        fill: "black"
                    }), (0, i.jsx)("path", {
                        d: "M16.7178 11.9692L11.822 12.2601C11.7148 12.2665 11.6099 12.2939 11.5134 12.3408C11.4168 12.3877 11.3304 12.4531 11.2592 12.5334C11.1879 12.6137 11.1331 12.7072 11.098 12.8086C11.0629 12.9101 11.0481 13.0174 11.0545 13.1246L11.1734 15.1274C11.2053 15.6635 11.4488 16.165 11.8504 16.5216C12.252 16.8782 12.7788 17.0606 13.3149 17.0287L16.0781 16.8646C16.3095 16.8508 16.5359 16.7916 16.7444 16.6904C16.9529 16.5892 17.1394 16.4479 17.2932 16.2745C17.4471 16.1012 17.5654 15.8993 17.6412 15.6803C17.717 15.4613 17.749 15.2295 17.7352 14.9981L17.6019 12.7542C17.5979 12.6437 17.5715 12.5353 17.5244 12.4353C17.4773 12.3354 17.4104 12.246 17.3278 12.1726C17.2451 12.0993 17.1485 12.0434 17.0436 12.0084C16.9388 11.9735 16.828 11.9602 16.7178 11.9692Z",
                        fill: "#B8CDFF"
                    }), (0, i.jsx)("path", {
                        d: "M16.195 15.8076H16.548C16.5952 15.8079 16.6419 15.7982 16.6851 15.7791C16.7283 15.7601 16.767 15.732 16.7986 15.6969C16.8302 15.6618 16.854 15.6204 16.8684 15.5755C16.8829 15.5305 16.8876 15.483 16.8824 15.4361C16.8827 15.3889 16.8729 15.3421 16.8539 15.2989C16.8348 15.2557 16.8068 15.217 16.7717 15.1855C16.7366 15.1539 16.6952 15.1301 16.6502 15.1156C16.6052 15.1012 16.5577 15.0964 16.5108 15.1017H16.1578C16.1106 15.1014 16.0639 15.1111 16.0207 15.1302C15.9775 15.1493 15.9388 15.1773 15.9072 15.2124C15.8756 15.2475 15.8518 15.2889 15.8374 15.3338C15.8229 15.3788 15.8182 15.4263 15.8234 15.4732C15.8231 15.5205 15.8329 15.5672 15.8519 15.6104C15.871 15.6536 15.899 15.6923 15.9341 15.7239C15.9692 15.7555 16.0106 15.7793 16.0556 15.7937C16.1005 15.8081 16.1481 15.8129 16.195 15.8076Z",
                        fill: "#7196FF"
                    }), (0, i.jsx)("path", {
                        d: "M13.8913 15.9565L14.5601 15.9008C14.6073 15.9011 14.654 15.8914 14.6972 15.8723C14.7404 15.8532 14.7791 15.8252 14.8107 15.7901C14.8423 15.755 14.8661 15.7136 14.8805 15.6687C14.895 15.6237 14.8997 15.5762 14.8945 15.5292C14.8921 15.4829 14.8806 15.4374 14.8606 15.3955C14.8407 15.3536 14.8126 15.316 14.7781 15.2849C14.7436 15.2539 14.7033 15.2299 14.6595 15.2145C14.6157 15.199 14.5693 15.1923 14.5229 15.1948L13.8541 15.232C13.8078 15.2344 13.7623 15.2459 13.7204 15.2659C13.6785 15.2858 13.6409 15.3139 13.6098 15.3484C13.5788 15.3829 13.5548 15.4232 13.5394 15.467C13.5239 15.5108 13.5172 15.5572 13.5197 15.6036C13.5286 15.6973 13.5711 15.7847 13.6394 15.8496C13.7077 15.9145 13.7972 15.9525 13.8913 15.9565Z",
                        fill: "#7196FF"
                    }), (0, i.jsx)("path", {
                        d: "M1.51869 10.0304L1.55585 9.95605L1.51869 10.0304Z",
                        fill: "#C5ECFF"
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3 23.8394V17.8394H11V25.8394H5C3.897 25.8394 3 24.9424 3 23.8394ZM13 25.8394V17.8394H21V23.8394C21 24.9424 20.104 25.8394 19 25.8394H13Z",
                        fill: "url(#paint1_linear_2683_16702)"
                    }), (0, i.jsx)("rect", {
                        x: "11",
                        y: "17.8403",
                        width: "2",
                        height: "8",
                        fill: "#40444B"
                    }), (0, i.jsxs)("defs", {
                        children: [(0, i.jsxs)("linearGradient", {
                            id: "paint0_linear_2683_16702",
                            x1: "-0.468018",
                            y1: "10.0494",
                            x2: "18.3258",
                            y2: "3.20901",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, i.jsx)("stop", {
                                stopColor: "#FF6D6D"
                            }), (0, i.jsx)("stop", {
                                offset: "0.177083",
                                stopColor: "#FFB359"
                            }), (0, i.jsx)("stop", {
                                offset: "0.356007",
                                stopColor: "#E6F820"
                            }), (0, i.jsx)("stop", {
                                offset: "0.578487",
                                stopColor: "#42FE8D"
                            }), (0, i.jsx)("stop", {
                                offset: "0.769035",
                                stopColor: "#3EA2FF"
                            }), (0, i.jsx)("stop", {
                                offset: "0.951531",
                                stopColor: "#B66DFF"
                            })]
                        }), (0, i.jsxs)("linearGradient", {
                            id: "paint1_linear_2683_16702",
                            x1: "3",
                            y1: "21.4333",
                            x2: "21",
                            y2: "21.4333",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, i.jsx)("stop", {
                                stopColor: "#FF6D6D"
                            }), (0, i.jsx)("stop", {
                                offset: "0.177083",
                                stopColor: "#FFB359"
                            }), (0, i.jsx)("stop", {
                                offset: "0.356007",
                                stopColor: "#E6F820"
                            }), (0, i.jsx)("stop", {
                                offset: "0.578487",
                                stopColor: "#42FE8D"
                            }), (0, i.jsx)("stop", {
                                offset: "0.769035",
                                stopColor: "#3EA2FF"
                            }), (0, i.jsx)("stop", {
                                offset: "0.951531",
                                stopColor: "#B66DFF"
                            })]
                        })]
                    })]
                }) : (0, i.jsxs)("svg", {
                    style: s,
                    width: "24",
                    height: "27",
                    viewBox: "0 0 24 27",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.9565 5.2944L14.0303 6.35946C14.3737 5.98438 14.6768 5.56864 14.8905 5.11201C15.5892 3.61369 14.9383 1.82545 13.439 1.12395C11.9856 0.449355 10.1322 1.12288 9.45316 2.57574C8.47477 4.67391 9.3218 7.64434 9.42134 7.97632C9.4263 7.9958 9.44151 8.00835 9.44836 8.02715L9.42956 8.03399C9.42272 8.01519 9.4263 7.9958 9.41724 7.97675C9.28105 7.65811 8.01961 4.83851 5.92145 3.86012C4.46807 3.18552 2.61312 3.86066 1.93596 5.31284C1.23634 6.81151 1.8872 8.59974 3.38681 9.29902C3.84403 9.51145 4.34344 9.6351 4.84762 9.70168L1.92142 10.7667C0.884936 11.144 0.348823 12.2937 0.726071 13.3302L1.41011 15.2095L20.204 8.36913L19.5199 6.48975C19.1427 5.45327 17.9939 4.91681 16.9565 5.2944ZM3.74796 6.15701C3.51486 6.65688 3.7317 7.25265 4.23191 7.48668C4.983 7.83691 6.10305 7.79746 6.99257 7.66844C6.518 6.90256 5.83289 6.02602 5.07668 5.6734C4.83538 5.5601 4.56429 5.54915 4.31245 5.64082C4.06061 5.73248 3.85998 5.91511 3.74796 6.15701ZM11.2658 3.42179C10.9123 4.17834 10.9518 5.28985 11.08 6.18287C11.8475 5.70985 12.725 5.02439 13.0782 4.2669C13.3109 3.76609 13.0932 3.17067 12.5929 2.93664C12.3529 2.82393 12.0818 2.81299 11.83 2.90465C11.5782 2.99632 11.3775 3.17895 11.2658 3.42179Z",
                        fill: "url(#paint0_linear_2683_16682)"
                    }), (0, i.jsx)("path", {
                        d: "M21.9355 8.82275C21.3596 13.7273 19.056 16.7554 19.056 16.7554",
                        stroke: "#5865F2",
                        strokeWidth: "3",
                        strokeMiterlimit: "10",
                        strokeLinecap: "round"
                    }), (0, i.jsx)("path", {
                        d: "M19.4857 12.5113L18.9294 12.5444C18.8015 12.552 18.6819 12.61 18.5968 12.7058C18.5118 12.8016 18.4682 12.9273 18.4758 13.0552L18.7061 16.9311C18.7099 16.996 18.7268 17.0595 18.7557 17.1177C18.7847 17.1759 18.8251 17.2277 18.8745 17.27C18.9239 17.3122 18.9814 17.344 19.0434 17.3636C19.1054 17.3831 19.1708 17.3898 19.2355 17.3835L19.7918 17.3504C20.0968 17.3323 20.382 17.1938 20.5848 16.9654C20.7877 16.7369 20.8914 16.4373 20.8733 16.1323L20.7224 13.5917C20.7042 13.2867 20.5657 13.0015 20.3373 12.7987C20.1089 12.5959 19.8092 12.4921 19.5043 12.5102L19.4857 12.5113Z",
                        fill: "#7196FF"
                    }), (0, i.jsx)("path", {
                        d: "M8.06376 10.3064L17.1137 9.76874C18.5271 9.68477 19.741 10.7625 19.825 12.1759L20.0622 16.1686C20.1461 17.582 19.0684 18.7959 17.655 18.8799L8.60506 19.4176C7.19165 19.5015 5.97779 18.4238 5.89381 17.0104L5.6566 13.0177C5.57263 11.6042 6.65035 10.3904 8.06376 10.3064Z",
                        fill: "#7196FF"
                    }), (0, i.jsx)("path", {
                        d: "M18.1642 14.0981C17.7332 14.0981 17.3839 13.7488 17.3839 13.3179C17.3839 12.8869 17.7332 12.5376 18.1642 12.5376C18.5951 12.5376 18.9444 12.8869 18.9444 13.3179C18.9444 13.7488 18.5951 14.0981 18.1642 14.0981Z",
                        fill: "black"
                    }), (0, i.jsx)("path", {
                        d: "M7.33246 13.2305L5.05143 13.366C4.7514 13.3838 4.47075 13.5201 4.2712 13.7448C4.07166 13.9696 3.96957 14.2644 3.98739 14.5644L4.14054 17.1422C4.15836 17.4422 4.29464 17.7229 4.5194 17.9224C4.74415 18.122 5.03897 18.224 5.33899 18.2062L7.62002 18.0707L7.33246 13.2305Z",
                        fill: "#7196FF"
                    }), (0, i.jsx)("path", {
                        d: "M6.12411 13.8623L5.47504 13.9009C5.33733 13.909 5.2085 13.9716 5.11691 14.0748C5.02531 14.1779 4.97845 14.3133 4.98663 14.451L5.10452 16.4353C5.1127 16.573 5.17526 16.7018 5.27842 16.7934C5.38159 16.885 5.51691 16.9319 5.65463 16.9237L6.3037 16.8851L6.12411 13.8623Z",
                        fill: "#B8CDFF"
                    }), (0, i.jsx)("path", {
                        d: "M9.54422 14.6749C9.08252 14.6749 8.70823 14.3006 8.70823 13.8389C8.70823 13.3772 9.08252 13.0029 9.54422 13.0029C10.0059 13.0029 10.3802 13.3772 10.3802 13.8389C10.3802 14.3006 10.0059 14.6749 9.54422 14.6749Z",
                        fill: "black"
                    }), (0, i.jsx)("path", {
                        d: "M16.7178 11.9692L11.822 12.2601C11.7148 12.2665 11.6099 12.2939 11.5134 12.3408C11.4168 12.3877 11.3304 12.4531 11.2592 12.5334C11.1879 12.6137 11.1331 12.7072 11.098 12.8086C11.0629 12.9101 11.0481 13.0174 11.0545 13.1246L11.1734 15.1274C11.2053 15.6635 11.4488 16.165 11.8504 16.5216C12.252 16.8782 12.7788 17.0606 13.3149 17.0287L16.0781 16.8646C16.3095 16.8508 16.5359 16.7916 16.7444 16.6904C16.9529 16.5892 17.1394 16.4479 17.2932 16.2745C17.4471 16.1012 17.5654 15.8993 17.6412 15.6803C17.717 15.4613 17.749 15.2295 17.7352 14.9981L17.6019 12.7542C17.5979 12.6437 17.5715 12.5353 17.5244 12.4353C17.4773 12.3354 17.4104 12.246 17.3278 12.1726C17.2451 12.0993 17.1485 12.0434 17.0436 12.0084C16.9388 11.9735 16.828 11.9602 16.7178 11.9692Z",
                        fill: "#B8CDFF"
                    }), (0, i.jsx)("path", {
                        d: "M16.195 15.8076H16.548C16.5952 15.8079 16.6419 15.7982 16.6851 15.7791C16.7283 15.7601 16.767 15.732 16.7986 15.6969C16.8302 15.6618 16.854 15.6204 16.8684 15.5755C16.8829 15.5305 16.8876 15.483 16.8824 15.4361C16.8827 15.3889 16.8729 15.3421 16.8539 15.2989C16.8348 15.2557 16.8068 15.217 16.7717 15.1855C16.7366 15.1539 16.6952 15.1301 16.6502 15.1156C16.6052 15.1012 16.5577 15.0964 16.5108 15.1017H16.1578C16.1106 15.1014 16.0639 15.1111 16.0207 15.1302C15.9775 15.1493 15.9388 15.1773 15.9072 15.2124C15.8756 15.2475 15.8518 15.2889 15.8374 15.3338C15.8229 15.3788 15.8182 15.4263 15.8234 15.4732C15.8231 15.5205 15.8329 15.5672 15.8519 15.6104C15.871 15.6536 15.899 15.6923 15.9341 15.7239C15.9692 15.7555 16.0106 15.7793 16.0556 15.7937C16.1005 15.8081 16.1481 15.8129 16.195 15.8076Z",
                        fill: "#7196FF"
                    }), (0, i.jsx)("path", {
                        d: "M13.8913 15.9565L14.5601 15.9008C14.6073 15.9011 14.654 15.8914 14.6972 15.8723C14.7404 15.8532 14.7791 15.8252 14.8107 15.7901C14.8423 15.755 14.8661 15.7136 14.8805 15.6687C14.895 15.6237 14.8997 15.5762 14.8945 15.5292C14.8921 15.4829 14.8806 15.4374 14.8606 15.3955C14.8407 15.3536 14.8126 15.316 14.7781 15.2849C14.7436 15.2539 14.7033 15.2299 14.6595 15.2145C14.6157 15.199 14.5693 15.1923 14.5229 15.1948L13.8541 15.232C13.8078 15.2344 13.7623 15.2459 13.7204 15.2659C13.6785 15.2858 13.6409 15.3139 13.6098 15.3484C13.5788 15.3829 13.5548 15.4232 13.5394 15.467C13.5239 15.5108 13.5172 15.5572 13.5197 15.6036C13.5286 15.6973 13.5711 15.7847 13.6394 15.8496C13.7077 15.9145 13.7972 15.9525 13.8913 15.9565Z",
                        fill: "#7196FF"
                    }), (0, i.jsx)("path", {
                        d: "M1.51869 10.0304L1.55585 9.95605L1.51869 10.0304Z",
                        fill: "#C5ECFF"
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3 23.8394V17.8394H11V25.8394H5C3.897 25.8394 3 24.9424 3 23.8394ZM13 25.8394V17.8394H21V23.8394C21 24.9424 20.104 25.8394 19 25.8394H13Z",
                        fill: "url(#paint1_linear_2683_16682)"
                    }), (0, i.jsx)("rect", {
                        x: "11",
                        y: "17.8403",
                        width: "2",
                        height: "8",
                        fill: "#EBEDEF"
                    }), (0, i.jsxs)("defs", {
                        children: [(0, i.jsxs)("linearGradient", {
                            id: "paint0_linear_2683_16682",
                            x1: "-0.468018",
                            y1: "10.0494",
                            x2: "18.3258",
                            y2: "3.20901",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, i.jsx)("stop", {
                                stopColor: "#D64949"
                            }), (0, i.jsx)("stop", {
                                offset: "0.177083",
                                stopColor: "#F28300"
                            }), (0, i.jsx)("stop", {
                                offset: "0.364583",
                                stopColor: "#B5C500"
                            }), (0, i.jsx)("stop", {
                                offset: "0.578487",
                                stopColor: "#06CC55"
                            }), (0, i.jsx)("stop", {
                                offset: "0.769035",
                                stopColor: "#2094FF"
                            }), (0, i.jsx)("stop", {
                                offset: "0.951531",
                                stopColor: "#AC59FF"
                            })]
                        }), (0, i.jsxs)("linearGradient", {
                            id: "paint1_linear_2683_16682",
                            x1: "3",
                            y1: "21.4333",
                            x2: "21",
                            y2: "21.4333",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, i.jsx)("stop", {
                                stopColor: "#D64949"
                            }), (0, i.jsx)("stop", {
                                offset: "0.177083",
                                stopColor: "#F28300"
                            }), (0, i.jsx)("stop", {
                                offset: "0.364583",
                                stopColor: "#B5C500"
                            }), (0, i.jsx)("stop", {
                                offset: "0.578487",
                                stopColor: "#06CC55"
                            }), (0, i.jsx)("stop", {
                                offset: "0.769035",
                                stopColor: "#2094FF"
                            }), (0, i.jsx)("stop", {
                                offset: "0.951531",
                                stopColor: "#AC59FF"
                            })]
                        })]
                    })]
                })
            }
            s("884691")
        }
    }
]);