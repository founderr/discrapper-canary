(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["10141"], {
        856670: function(e, t, s) {
            "use strict";
            e.exports = s.p + "018197f71e03e53562e7.svg"
        },
        693029: function(e, t, s) {
            "use strict";
            e.exports = s.p + "7e5dd7f59f96cc264184.svg"
        },
        243704: function(e, t, s) {
            "use strict";
            e.exports = s.p + "6418419524dd1e583beb.svg"
        },
        274456: function(e, t, s) {
            "use strict";
            e.exports = s.p + "15f331c71c4a92929dd6.svg"
        },
        193919: function(e, t, s) {
            "use strict";
            e.exports = s.p + "799c4384055c8514120b.svg"
        },
        133403: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("414456"),
                r = s.n(l),
                o = s("77078"),
                i = s("782340"),
                a = s("239636");
            let u = Object.freeze({
                DEFAULT: a.default,
                FILLED: a.filled
            });

            function c(e) {
                let {
                    className: t,
                    onClick: s,
                    "aria-label": l,
                    look: c = u.DEFAULT
                } = e;
                return (0, n.jsx)(o.Clickable, {
                    "aria-label": null != l ? l : i.default.Messages.REMOVE,
                    className: r(a.button, c, t),
                    onClick: s
                })
            }
            c.Looks = u
        },
        913801: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var n = s("37983"),
                l = s("884691"),
                r = s("414456"),
                o = s.n(r),
                i = s("862337"),
                a = s("77078"),
                u = s("188525"),
                c = s("306160"),
                d = s("782340"),
                f = s("166392");
            class C extends l.PureComponent {
                componentWillUnmount() {
                    this._timeout.stop()
                }
                render() {
                    let {
                        isVertical: e,
                        value: t,
                        text: s,
                        className: l,
                        inputClassName: r
                    } = this.props, {
                        mode: i
                    } = this.state, c = i === u.default.Modes.SUCCESS ? d.default.Messages.COPIED : s;
                    return e ? (0, n.jsxs)("div", {
                        className: o(l, i),
                        children: [(0, n.jsx)(a.TextInput, {
                            value: t,
                            inputClassName: r
                        }), (0, n.jsx)(a.Button, {
                            className: f.button,
                            onClick: this.handleCopy,
                            size: a.Button.Sizes.MIN,
                            color: this.getVerticalButtonColor(i),
                            look: a.Button.Looks.FILLED,
                            children: c
                        })]
                    }) : (0, n.jsx)(u.default, {
                        ...this.props,
                        onCopy: this.handleCopy,
                        mode: i,
                        text: c
                    })
                }
                handleCopy() {
                    let {
                        onCopy: e,
                        value: t,
                        delay: s
                    } = this.props, n = (0, c.copy)(t);
                    this.setState({
                        mode: n ? u.default.Modes.SUCCESS : u.default.Modes.ERROR
                    }), this._timeout.start(s, () => this.setState({
                        mode: u.default.Modes.DEFAULT
                    })), null == e || e()
                }
                getVerticalButtonColor(e) {
                    switch (e) {
                        case u.default.Modes.SUCCESS:
                            return a.Button.Colors.GREEN;
                        case u.default.Modes.ERROR:
                            return a.Button.Colors.RED;
                        default:
                            return a.Button.Colors.BRAND
                    }
                }
                constructor(e) {
                    super(e), this.state = {
                        mode: u.default.Modes.DEFAULT
                    }, this._timeout = new i.Timeout, this.handleCopy = this.handleCopy.bind(this)
                }
            }
            C.defaultProps = {
                isVertical: !1,
                delay: 300
            };
            var E = C
        },
        45299: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            }), s("222007");
            var n = s("37983"),
                l = s("884691"),
                r = s("301165"),
                o = s("669491"),
                i = s("77078"),
                a = s("659500"),
                u = s("49111"),
                c = s("782340"),
                d = s("317404"),
                f = function(e) {
                    var t;
                    let {
                        message: s,
                        errorMessage: f,
                        submitting: C,
                        onReset: E,
                        onSave: L,
                        onSaveText: _,
                        onResetText: I,
                        onSaveButtonColor: h,
                        disabled: N,
                        saveButtonTooltip: p
                    } = e, g = l.useRef(null), [{
                        spring: m
                    }, T] = (0, r.useSpring)(() => ({
                        spring: 0
                    }));
                    l.useEffect(() => {
                        function e() {
                            T({
                                spring: 1,
                                config: r.config.gentle
                            }), T({
                                spring: 0,
                                config: r.config.gentle,
                                delay: 1e3
                            })
                        }
                        return a.ComponentDispatch.subscribe(u.ComponentActions.EMPHASIZE_NOTICE, e), () => {
                            a.ComponentDispatch.unsubscribe(u.ComponentActions.EMPHASIZE_NOTICE, e)
                        }
                    }, [T]);
                    let R = m.to({
                            range: [0, 1],
                            output: [(0, i.useToken)(o.default.colors.TEXT_NORMAL).hex(), (0, i.useToken)(o.default.unsafe_rawColors.WHITE_500).hex()]
                        }),
                        v = m.to({
                            range: [0, 1],
                            output: [(0, i.useToken)(o.default.colors.BACKGROUND_FLOATING).hex(), (0, i.useToken)(o.default.colors.STATUS_DANGER).hex()]
                        }),
                        M = (0, i.useToken)(o.default.colors.TEXT_DANGER).hex();
                    return (0, n.jsx)(r.animated.div, {
                        className: d.container,
                        style: {
                            backgroundColor: v
                        },
                        children: (0, n.jsx)("div", {
                            className: d.flexContainer,
                            ref: g,
                            children: (0, n.jsxs)(i.FocusRingScope, {
                                containerRef: g,
                                children: [(0, n.jsx)("div", {
                                    className: d.shrinkingContainer,
                                    children: (0, n.jsx)(r.animated.div, {
                                        className: d.message,
                                        style: {
                                            color: null != f ? M : R
                                        },
                                        children: null !== (t = null != f ? f : s) && void 0 !== t ? t : c.default.Messages.SETTINGS_NOTICE_MESSAGE
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: d.actions,
                                    children: [null != E && (0, n.jsx)(i.Button, {
                                        className: d.resetButton,
                                        size: i.Button.Sizes.SMALL,
                                        color: i.Button.Colors.PRIMARY,
                                        look: i.Button.Looks.LINK,
                                        onClick: E,
                                        children: (0, n.jsx)(r.animated.span, {
                                            style: {
                                                color: R
                                            },
                                            children: null != I ? I : c.default.Messages.RESET
                                        })
                                    }), null != L ? (0, n.jsx)(i.Tooltip, {
                                        text: p,
                                        children: e => (0, n.jsx)(i.Button, {
                                            size: i.Button.Sizes.SMALL,
                                            color: null != h ? h : i.Button.Colors.GREEN,
                                            submitting: C,
                                            disabled: N,
                                            onClick: L,
                                            ...e,
                                            children: null != _ ? _ : c.default.Messages.SAVE_CHANGES
                                        })
                                    }) : null]
                                })]
                            })
                        })
                    })
                }
        },
        859670: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                BoostTier1Icon: function() {
                    return o
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("669491"),
                r = s("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...a
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M13.0543 1.40062C12.4019 0.866461 11.5981 0.866461 10.9457 1.40062L6.05429 5.4055C5.40189 5.93965 5 6.92681 5 7.99512V16.0049C5 17.0732 5.40189 18.0604 6.05429 18.5945L10.9457 22.5994C11.5981 23.1335 12.4019 23.1335 13.0543 22.5994L17.9457 18.5945C18.5981 18.0604 19 17.0732 19 16.0049V7.99512C19 6.92681 18.5981 5.93965 17.9457 5.4055L13.0543 1.40062ZM12 4.41468L8.05615 7.64374C8.02912 7.71545 8 7.83796 8 7.99512V16.0049C8 16.162 8.02912 16.2846 8.05615 16.3563L12 19.5853L15.9439 16.3563C15.9709 16.2846 16 16.162 16 16.0049V7.99512C16 7.83796 15.9709 7.71545 15.9439 7.64374L12 4.41468Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: i
                    })
                })
            }
        },
        372167: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                BoostTier2Icon: function() {
                    return o
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("669491"),
                r = s("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...a
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        d: "M11.6464 6.35355L9.29289 8.70711C9.10536 8.89464 9 9.149 9 9.41421V14.5858C9 14.851 9.10536 15.1054 9.29289 15.2929L11.6464 17.6464C11.8417 17.8417 12.1583 17.8417 12.3536 17.6464L14.7071 15.2929C14.8946 15.1054 15 14.851 15 14.5858V9.41421C15 9.149 14.8946 8.89464 14.7071 8.70711L12.3536 6.35355C12.1583 6.15829 11.8417 6.15829 11.6464 6.35355Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: i
                    }), (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.9457 1.40062C11.5981 0.866461 12.4019 0.866461 13.0543 1.40062L17.9457 5.4055C18.5981 5.93965 19 6.92681 19 7.99512V16.0049C19 17.0732 18.5981 18.0604 17.9457 18.5945L13.0543 22.5994C12.4019 23.1335 11.5981 23.1335 10.9457 22.5994L6.05429 18.5945C5.40189 18.0604 5 17.0732 5 16.0049V7.99512C5 6.92681 5.40189 5.93965 6.05429 5.4055L10.9457 1.40062ZM7.3213 6.95297L12 3.12226L16.6787 6.95297C16.7475 7.00927 17 7.35241 17 7.99512V16.0049C17 16.6476 16.7475 16.9907 16.6787 17.047L12 20.8777L7.3213 17.047C7.25254 16.9907 7 16.6476 7 16.0049V7.99512C7 7.3524 7.25254 7.00927 7.3213 6.95297Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: i
                    })]
                })
            }
        },
        860942: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                BoostTier3Icon: function() {
                    return o
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("669491"),
                r = s("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...a
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        d: "M13.1889 2.49285C13.4801 2.26214 13.5408 1.79894 13.2533 1.56359L13.0543 1.40062C12.4019 0.866461 11.5981 0.866461 10.9457 1.40062L6.05429 5.4055C5.40189 5.93965 5 6.92681 5 7.99512V16.0049C5 17.0732 5.40189 18.0604 6.05429 18.5945L10.9457 22.5994C11.5981 23.1335 12.4019 23.1335 13.0543 22.5994L17.9457 18.5945C18.5981 18.0604 19 17.0732 19 16.0049V12.5C19 12.2239 18.7749 12.0039 18.5019 11.9626C18.2975 11.9317 18.0957 11.8816 17.9 11.8124C17.5061 11.6732 17 11.9315 17 12.3493V16.0049C17 16.6476 16.7475 16.9907 16.6787 17.047L12.3168 20.6184C12.1325 20.7692 11.8675 20.7692 11.6832 20.6184L7.3213 17.047C7.25254 16.9907 7 16.6476 7 16.0049V7.99512C7 7.3524 7.25254 7.00927 7.3213 6.95297L11.8421 3.25151C11.934 3.17634 12.066 3.17634 12.1579 3.25151C12.2789 3.35057 12.4597 3.31452 12.5473 3.18494C12.7202 2.92894 12.9341 2.69479 13.1889 2.49285Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: i
                    }), (0, n.jsx)("path", {
                        d: "M9.29289 8.70711L11.6464 6.35355C11.8417 6.15829 12.1583 6.15829 12.3536 6.35355L14.7071 8.70711C14.8946 8.89464 15 9.149 15 9.41421V14.5858C15 14.851 14.8946 15.1054 14.7071 15.2929L12.3536 17.6464C12.1583 17.8417 11.8417 17.8417 11.6464 17.6464L9.29289 15.2929C9.10536 15.1054 9 14.851 9 14.5858V9.41421C9 9.149 9.10536 8.89464 9.29289 8.70711Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: i
                    }), (0, n.jsx)("path", {
                        d: "M17.8614 0.792728C18.2525 -0.264243 19.7475 -0.264243 20.1386 0.792728L20.6483 2.1701C20.8508 2.71754 21.2825 3.14916 21.8299 3.35173L23.2073 3.8614C24.2642 4.25252 24.2642 5.74748 23.2073 6.1386L21.8299 6.64827C21.2825 6.85084 20.8508 7.28246 20.6483 7.8299L20.1386 9.20727C19.7475 10.2642 18.2525 10.2642 17.8614 9.20727L17.3517 7.8299C17.1492 7.28246 16.7175 6.85084 16.1701 6.64827L14.7927 6.1386C13.7358 5.74748 13.7358 4.25252 14.7927 3.8614L16.1701 3.35173C16.7175 3.14916 17.1492 2.71754 17.3517 2.1701L17.8614 0.792728Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: i
                    })]
                })
            }
        },
        639055: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                EyeDropperIcon: function() {
                    return o
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("669491"),
                r = s("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...a
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, r.default)(a),
                    width: t,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        d: "M16.25 2.24999L14.25 4.24999L13.6213 3.62131C12.4498 2.44974 10.5503 2.44974 9.37869 3.62131L8.53034 4.46966C8.23745 4.76255 8.23745 5.23743 8.53034 5.53032L18.4697 15.4697C18.7626 15.7626 19.2374 15.7626 19.5303 15.4697L20.3787 14.6213C21.5503 13.4497 21.5503 11.5502 20.3787 10.3787L19.75 9.74999L21.75 7.74999C23.2688 6.2312 23.2688 3.76877 21.75 2.24999C20.2312 0.731206 17.7688 0.731205 16.25 2.24999Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: i
                    }), (0, n.jsx)("path", {
                        d: "M9.29289 9.70708C9.68342 9.31655 10.3166 9.31655 10.7071 9.70708L14.2929 13.2929C14.6834 13.6834 14.6834 14.3166 14.2929 14.7071L9.46447 19.5355C8.72503 20.2749 7.77783 20.7589 6.76008 20.9304C6.29265 21.0092 5.90009 21.3476 5.66137 21.7572C5.2281 22.5004 4.42238 23 3.5 23C2.11929 23 1 21.8807 1 20.5C1 19.5776 1.49953 18.7719 2.24281 18.3386C2.65234 18.0999 2.99075 17.7073 3.06954 17.2399C3.24111 16.2221 3.72503 15.2749 4.46446 14.5355L9.29289 9.70708Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: i
                    })]
                })
            }
        },
        248559: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            }), s("222007");
            var n = s("884691"),
                l = () => {
                    let [e, t] = (0, n.useState)(null);
                    return (0, n.useEffect)(() => {
                        var e;
                        (null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) != null && t(new window.EyeDropper)
                    }, []), e
                }
        },
        866561: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("446674"),
                r = s("77078"),
                o = s("626301"),
                i = s("400307"),
                a = s("697218"),
                u = s("719923"),
                c = s("646718"),
                d = s("782340"),
                f = s("157997");
            let C = e => {
                let {
                    onOpenPremiumClick: t
                } = e, s = (0, n.jsx)(r.Button, {
                    className: f.tier0Button,
                    color: r.Button.Colors.BRAND,
                    look: r.Button.Looks.INVERTED,
                    onClick: () => {
                        (0, o.navigateToPremiumMarketingPage)(), null != t && t()
                    },
                    children: d.default.Messages.LEARN_MORE
                });
                return (0, n.jsxs)("div", {
                    className: f.tier0Container,
                    children: [(0, n.jsx)(r.Heading, {
                        className: f.tier0Heading,
                        variant: "heading-xxl/extrabold",
                        children: d.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_HEADING_SECONDARY
                    }), (0, n.jsx)(i.Tier2Card, {
                        className: f.tier0Card,
                        ctaButton: s,
                        featureSet: i.Tier2FeatureSet.BOOSTING,
                        showWumpus: !0,
                        showYearlyPrice: !0
                    })]
                })
            };
            var E = e => {
                let {
                    onOpenPremiumClick: t
                } = e, s = (0, l.useStateFromStores)([a.default], () => a.default.getCurrentUser());
                return u.default.isPremium(s, c.PremiumTypes.TIER_2) ? null : (0, n.jsx)(C, {
                    onOpenPremiumClick: t
                })
            }
        },
        656142: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("414456"),
                r = s.n(l),
                o = s("446674"),
                i = s("77078"),
                a = s("915639"),
                u = s("697218"),
                c = s("10514"),
                d = s("521012"),
                f = s("719923"),
                C = s("153160"),
                E = s("646718"),
                L = s("782340"),
                _ = s("545627"),
                I = e => {
                    var t;
                    let {
                        className: s
                    } = e, l = (0, o.useStateFromStores)([u.default], () => u.default.getCurrentUser()), I = (0, o.useStateFromStores)([a.default], () => a.default.locale), h = (0, o.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()), N = (0, o.useStateFromStores)([c.default], () => null != h ? c.default.get(h.planId) : void 0), p = null !== (t = (0, o.useStateFromStores)([c.default], () => null != N ? c.default.getForSkuAndInterval(E.PremiumSubscriptionSKUs.GUILD, N.interval, N.intervalCount) : void 0)) && void 0 !== t ? t : E.SubscriptionPlanInfo[E.SubscriptionPlans.PREMIUM_MONTH_GUILD];
                    return (0, n.jsxs)("div", {
                        className: r(_.wrapper, s),
                        children: [(0, n.jsx)(i.Heading, {
                            className: _.heading,
                            variant: "heading-xl/semibold",
                            children: L.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_HEADING_PRIMARY
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: function(e) {
                                let {
                                    currentUser: t,
                                    locale: s,
                                    guildBoostingPlanId: l,
                                    interval: r,
                                    intervalCount: o
                                } = e, i = f.default.getDefaultPrice(l, f.default.isPremium(t)), a = f.default.getDefaultPrice(l, !1), u = (0, C.formatRate)((0, C.formatPrice)(i.amount, i.currency), r, o), c = (0, C.formatRate)((0, C.formatPrice)(a.amount, a.currency), r, o);
                                return f.default.isPremium(t, E.PremiumTypes.TIER_2) ? L.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING_TIER_2.format({
                                    price: u,
                                    originalPrice: c,
                                    originalPriceHook: (e, t) => (0, n.jsx)("span", {
                                        className: _.originalPrice,
                                        children: e
                                    }, t),
                                    freeSubscriptionCount: E.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                                    discountPercent: (0, C.formatPercent)(s, E.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                                }) : f.default.isPremium(t, E.PremiumTypes.TIER_1) ? L.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING_TIER_1.format({
                                    price: u,
                                    originalPrice: c,
                                    originalPriceHook: (e, t) => (0, n.jsx)("span", {
                                        className: _.originalPrice,
                                        children: e
                                    }, t),
                                    discountPercent: (0, C.formatPercent)(s, E.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                                }) : L.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING.format({
                                    price: u
                                })
                            }({
                                currentUser: l,
                                locale: I,
                                guildBoostingPlanId: p.id,
                                interval: p.interval,
                                intervalCount: p.intervalCount
                            })
                        })]
                    })
                }
        },
        352807: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                openActionCompleteSuccessModal: function() {
                    return d
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("77078"),
                r = s("191814"),
                o = s("430677"),
                i = s("476765"),
                a = s("782340"),
                u = s("937769");

            function c(e) {
                let {
                    transitionState: t,
                    Icon: s,
                    title: c,
                    body: d,
                    onClose: f
                } = e, C = (0, i.useUID)();
                return (0, n.jsxs)(l.ModalRoot, {
                    className: u.container,
                    transitionState: t,
                    "aria-labelledby": C,
                    children: [(0, n.jsxs)(l.ModalContent, {
                        children: [(0, n.jsx)(o.default, {
                            Icon: s
                        }), (0, n.jsx)(r.default, {
                            size: 24
                        }), (0, n.jsx)(l.Heading, {
                            id: C,
                            className: u.title,
                            variant: "heading-xl/semibold",
                            children: c
                        }), (0, n.jsx)(r.default, {
                            size: 8
                        }), (0, n.jsx)(l.Text, {
                            className: u.body,
                            variant: "text-sm/normal",
                            children: d
                        })]
                    }), (0, n.jsx)(r.default, {
                        size: 24
                    }), (0, n.jsx)(l.Button, {
                        size: l.Button.Sizes.MEDIUM,
                        grow: !1,
                        onClick: f,
                        children: a.default.Messages.GOT_IT
                    })]
                })
            }

            function d(e) {
                (0, l.openModal)(t => (0, n.jsx)(c, {
                    ...t,
                    ...e
                }))
            }
        },
        306073: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("37983"),
                l = s("884691");
            let r = e => t => {
                null == t || t.stopPropagation(), e()
            };

            function o(e) {
                let {
                    onClick: t,
                    className: s,
                    children: o
                } = e, i = l.useRef(null);
                return (0, n.jsx)("div", {
                    onClick: t,
                    ref: i,
                    className: s,
                    children: o({
                        areaRef: i,
                        handleStopPropagation: r
                    })
                })
            }
        },
        223984: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MessageBlockColors: function() {
                    return a
                },
                default: function() {
                    return u
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("414456"),
                r = s.n(l),
                o = s("77078"),
                i = s("53895");
            let a = {
                RED: i.redMessageBlock,
                YELLOW: i.yellowMessageBlock,
                BROWN: i.brownMessageBlock
            };

            function u(e) {
                let {
                    color: t,
                    icon: s,
                    children: l,
                    className: a
                } = e;
                return (0, n.jsx)(o.FormErrorBlock, {
                    icon: e => (0, n.jsx)(s, {
                        height: 20,
                        width: 20,
                        ...e
                    }),
                    iconClassName: i.messageBlockIcon,
                    className: r(t, a),
                    children: l
                })
            }
        },
        417186: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("423487"),
                r = s("223984");

            function o(e) {
                let {
                    children: t,
                    className: s,
                    color: o = r.MessageBlockColors.YELLOW
                } = e;
                return (0, n.jsx)(r.default, {
                    className: s,
                    color: o,
                    icon: l.default,
                    children: t
                })
            }
        },
        264742: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                WarningBlockButtonPosition: function() {
                    return f
                },
                default: function() {
                    return C
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("414456"),
                r = s.n(l),
                o = s("819855"),
                i = s("77078"),
                a = s("841098"),
                u = s("223984"),
                c = s("417186"),
                d = s("946790");
            let f = {
                RIGHT: d.horizontalStatusWarningBlock,
                BOTTOM: d.verticalStatusWarningBlock
            };

            function C(e) {
                let {
                    className: t,
                    color: s = u.MessageBlockColors.YELLOW,
                    buttonPosition: l = f.BOTTOM,
                    notice: C,
                    ctaLabel: E,
                    ctaLoading: L,
                    ctaDisabled: _,
                    ctaClassName: I,
                    onClick: h
                } = e, N = (0, a.default)();
                return (0, n.jsx)(c.default, {
                    className: r(d.statusWarningBlock, {
                        [d.statusWarningBlockWithCta]: null != E
                    }, t),
                    color: (0, o.isThemeDark)(N) ? s : u.MessageBlockColors.BROWN,
                    children: (0, n.jsxs)("div", {
                        className: l,
                        children: [(0, n.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "interactive-active",
                            children: C
                        }), null != E && null != h && (0, n.jsx)("div", {
                            className: d.ctaButtonContainer,
                            children: (0, n.jsx)(i.Button, {
                                className: r(d.ctaButton, (0, o.isThemeDark)(N) ? void 0 : d.ctaBlackButton, I),
                                color: (0, o.isThemeDark)(N) ? i.Button.Colors.WHITE : i.Button.Colors.CUSTOM,
                                size: i.ButtonSizes.MEDIUM,
                                onClick: h,
                                disabled: _,
                                submitting: L,
                                children: (0, n.jsx)(i.Text, {
                                    className: d.ctaButtonText,
                                    variant: "text-sm/medium",
                                    children: E
                                })
                            })
                        })]
                    })
                })
            }
        },
        797944: function(e, t, s) {
            "use strict";
            var n, l;
            s.r(t), s.d(t, {
                HighlightColors: function() {
                    return n
                }
            }), (l = n || (n = {})).ACCENT = "accent", l.GREEN = "statusGreen", l.YELLOW = "statusYellow", l.ORANGE = "statusOrange", l.RED = "statusRed", l.NONE = "transparent"
        },
        973262: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                DefaultColorButton: function() {
                    return g
                },
                CustomColorButton: function() {
                    return m
                },
                CustomColorPicker: function() {
                    return T
                },
                default: function() {
                    return R
                }
            }), s("222007");
            var n = s("37983"),
                l = s("884691"),
                r = s("414456"),
                o = s.n(r),
                i = s("974667"),
                a = s("509043"),
                u = s("77078"),
                c = s("248559"),
                d = s("449918"),
                f = s("526975"),
                C = s("36694"),
                E = s("422403"),
                L = s("664336"),
                _ = s("49111"),
                I = s("782340"),
                h = s("169225");
            let N = () => Promise.resolve();

            function p(e) {
                let {
                    color: t,
                    isDefault: s = !1,
                    isCustom: l = !1,
                    isSelected: r = !1,
                    disabled: c = !1,
                    style: f = {},
                    onClick: L,
                    "aria-label": I
                } = e, N = (0, i.useListItem)("color-".concat(t)), p = null != t ? (0, a.int2hex)(t) : f.backgroundColor, g = !1;
                return l && !r ? g = !0 : (l || r) && (g = (0, a.getDarkness)(t) > .1), (0, n.jsx)(u.FocusRing, {
                    offset: -2,
                    children: (0, n.jsxs)("button", {
                        type: "button",
                        className: o(h.colorPickerSwatch, {
                            [h.disabled]: c,
                            [h.default]: s,
                            [h.custom]: l,
                            [h.noColor]: null == t
                        }),
                        disabled: c,
                        onClick: () => null == L ? void 0 : L(t),
                        style: {
                            ...f,
                            backgroundColor: p
                        },
                        "aria-label": null != I ? I : p,
                        ...N,
                        children: [l ? (0, n.jsx)(E.default, {
                            className: h.colorPickerDropper,
                            foreground: h.colorPickerDropperFg,
                            width: 14,
                            height: 14,
                            color: (0, d.getColor)(g ? _.Color.WHITE_500 : _.Color.BLACK_500)
                        }) : null, function() {
                            let e = 16,
                                t = 16;
                            if ((l || s) && (e = 32, t = 24), r) return (0, n.jsx)(C.default, {
                                width: e,
                                height: t,
                                color: (0, d.getColor)(g ? _.Color.WHITE_500 : _.Color.BLACK_500)
                            })
                        }()]
                    })
                })
            }
            class g extends l.PureComponent {
                render() {
                    let {
                        color: e,
                        onChange: t,
                        value: s,
                        disabled: l
                    } = this.props;
                    return (0, n.jsx)(p, {
                        isDefault: !0,
                        color: e,
                        isSelected: e === s || 0 === s,
                        onClick: t,
                        disabled: l
                    })
                }
            }
            class m extends l.PureComponent {
                render() {
                    let {
                        customColor: e,
                        value: t,
                        disabled: s,
                        "aria-label": l
                    } = this.props;
                    return (0, n.jsx)(p, {
                        isCustom: !0,
                        color: e,
                        isSelected: t === e,
                        disabled: s,
                        "aria-label": l
                    })
                }
            }
            let T = l.memo(e => {
                let {
                    value: t,
                    onChange: s,
                    onClose: r,
                    suggestedColors: o,
                    middle: i,
                    footer: d,
                    showEyeDropper: C
                } = e, _ = (0, c.default)(), [N, p] = l.useState(() => {
                    let e = null != t ? t : 0,
                        s = (0, a.int2hex)(e);
                    return {
                        current: e,
                        pending: s,
                        input: s
                    }
                });
                l.useEffect(() => {
                    if (null == t || t === N.current) return;
                    let e = (0, a.int2hex)(t);
                    p({
                        current: t,
                        pending: e,
                        input: e
                    })
                }, [t, N]), l.useEffect(() => r, [r]);
                let g = e => {
                        let t = "#" === e[0] ? e : "#".concat(e);
                        if (!(0, a.isValidHex)(t)) {
                            p(e => ({
                                ...e,
                                input: t
                            }));
                            return
                        }
                        let n = (0, a.hex2int)(t);
                        p({
                            current: n,
                            pending: t,
                            input: t
                        }), s(n)
                    },
                    m = async () => {
                        if (null != _) try {
                            let {
                                sRGBHex: e
                            } = await _.open();
                            g(e)
                        } catch {}
                    }, T = e => {
                        p(t => ({
                            ...t,
                            pending: e,
                            input: e
                        }))
                    }, R = e => {
                        s((0, a.hex2int)(e))
                    };
                return (0, n.jsxs)(u.Dialog, {
                    "aria-label": I.default.Messages.PICK_A_COLOR,
                    className: h.customColorPicker,
                    children: [(0, n.jsx)(f.default, {
                        onChange: e => {
                            let {
                                hex: t
                            } = e;
                            return T(t)
                        },
                        onChangeComplete: e => {
                            let {
                                hex: t
                            } = e;
                            return R(t)
                        },
                        color: N.pending
                    }), i, (0, n.jsxs)("div", {
                        className: h.customColorPickerInputContainer,
                        children: [C && null != _ && (0, n.jsx)(L.Icon, {
                            onClick: m,
                            tooltip: I.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
                            tooltipPosition: "top",
                            className: h.customColorPickerEyeDropper,
                            icon: E.default
                        }), (0, n.jsx)(u.TextInput, {
                            className: h.customColorPickerInput,
                            value: N.input,
                            onChange: g,
                            maxLength: 7
                        })]
                    }), null != o && o.length > 0 && (0, n.jsx)("div", {
                        className: h.suggestedColors,
                        children: o.map((e, t) => (0, n.jsx)(u.Clickable, {
                            "aria-label": "",
                            style: {
                                backgroundColor: e
                            },
                            className: h.suggestedColor,
                            onClick: () => g(e)
                        }, "".concat(e, "-").concat(t)))
                    }), d]
                })
            });

            function R(e) {
                let {
                    className: t,
                    defaultColor: s,
                    customColor: l,
                    colors: r,
                    value: a,
                    disabled: u,
                    onChange: c,
                    renderDefaultButton: d,
                    renderCustomButton: f,
                    colorContainerClassName: C
                } = e, E = e => (0, n.jsx)("div", {
                    className: h.colorPickerRow,
                    children: e.map(e => (0, n.jsx)(p, {
                        color: e,
                        isSelected: e === a,
                        onClick: c,
                        disabled: u
                    }, e))
                }), L = r.slice(0, r.length / 2), _ = r.slice(r.length / 2, r.length), I = (0, i.default)({
                    id: "color-picker",
                    isEnabled: !0,
                    scrollToStart: N,
                    scrollToEnd: N
                });
                return (0, n.jsx)(i.ListNavigatorProvider, {
                    navigator: I,
                    children: (0, n.jsx)(i.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: r,
                                ...i
                            } = e;
                            return (0, n.jsxs)("div", {
                                className: o(h.container, t),
                                ref: r,
                                ...i,
                                children: [(0, n.jsx)("div", {
                                    className: o(h.defaultContainer, C),
                                    children: d({
                                        value: a,
                                        color: s,
                                        onChange: c,
                                        disabled: u
                                    })
                                }), (0, n.jsx)("div", {
                                    className: o(h.customContainer, C),
                                    children: f({
                                        value: a,
                                        customColor: l,
                                        disabled: u
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: h.presets,
                                    children: [E(L), E(_)]
                                })]
                            })
                        }
                    })
                })
            }
        },
        526975: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var n = s("37983"),
                l = s("884691"),
                r = s("266937"),
                o = s("286458"),
                i = s("29799");
            let a = (0, r.CustomPicker)(e => (0, n.jsxs)("div", {
                className: i.wrapper,
                children: [(0, n.jsx)("div", {
                    className: i.saturation,
                    children: (0, n.jsx)(o.Saturation, {
                        ...e
                    })
                }), (0, n.jsx)("div", {
                    className: i.hue,
                    children: (0, n.jsx)(o.Hue, {
                        ...e,
                        direction: "horizontal"
                    })
                })]
            }));
            var u = l.memo(a)
        },
        188525: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CopyInputModes: function() {
                    return f
                },
                default: function() {
                    return E
                }
            }), s("222007");
            var n = s("37983"),
                l = s("884691"),
                r = s("414456"),
                o = s.n(r),
                i = s("77078"),
                a = s("474293"),
                u = s("145131"),
                c = s("782340"),
                d = s("863448");
            let f = {
                DEFAULT: "default",
                SUCCESS: "success",
                ERROR: "error"
            };
            class C extends l.PureComponent {
                select() {
                    var e;
                    null === (e = this.inputRef.current) || void 0 === e || e.select()
                }
                renderInput(e) {
                    var t;
                    let {
                        value: s,
                        mode: l
                    } = this.props, r = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
                    return (0, n.jsx)("input", {
                        className: o((0, a.getClass)(d, "input", l), {
                            [d.inputHidden]: e
                        }),
                        ref: this.inputRef,
                        type: "text",
                        value: s,
                        onClick: this.handleInputClick,
                        readOnly: !0,
                        "aria-labelledby": r
                    })
                }
                render() {
                    let e;
                    let {
                        text: t = c.default.Messages.COPY,
                        mode: s,
                        hideMessage: l,
                        className: r,
                        buttonLook: C
                    } = this.props, E = null != l;
                    switch (s) {
                        case f.SUCCESS:
                            e = i.ButtonColors.GREEN;
                            break;
                        case f.ERROR:
                            e = i.ButtonColors.RED;
                            break;
                        default:
                            e = this.props.buttonColor
                    }
                    return (0, n.jsx)(i.FocusRing, {
                        focusTarget: this.inputRef,
                        ringTarget: this.containerRef,
                        children: (0, n.jsx)("div", {
                            className: o((0, a.getClass)(d, "copyInput", s), r),
                            ref: this.containerRef,
                            children: (0, n.jsxs)(u.default, {
                                className: d.layout,
                                children: [(0, n.jsxs)(u.default, {
                                    className: d.inputWrapper,
                                    children: [this.renderInput(E), E ? (0, n.jsx)("div", {
                                        className: d.hiddenMessage,
                                        children: l
                                    }) : null]
                                }), (0, n.jsx)(u.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, n.jsx)(i.Button, {
                                        className: d.button,
                                        onClick: this.handleButtonClick,
                                        size: i.ButtonSizes.MIN,
                                        color: e,
                                        look: C,
                                        children: t
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = l.createRef(), this.containerRef = l.createRef(), this.handleButtonClick = () => {
                        this.select();
                        let {
                            onCopy: e,
                            value: t
                        } = this.props;
                        e(t)
                    }, this.handleInputClick = () => {
                        this.select()
                    }
                }
            }
            C.contextType = i.FormContext, C.defaultProps = {
                supportsCopy: !0,
                buttonColor: i.ButtonColors.PRIMARY,
                buttonLook: i.ButtonLooks.FILLED,
                mode: f.DEFAULT
            }, C.Modes = f, C.ButtonColors = i.ButtonColors, C.ButtonLooks = i.ButtonLooks;
            var E = C
        },
        430677: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("414456"),
                r = s.n(l),
                o = s("839966"),
                i = s("274456"),
                a = s("193919");

            function u(e) {
                let {
                    Icon: t,
                    className: s
                } = e;
                return (0, n.jsx)("div", {
                    className: r(o.container, s),
                    children: (0, n.jsxs)("div", {
                        className: o.innerContainer,
                        children: [(0, n.jsx)("img", {
                            src: a,
                            alt: "",
                            className: o.star
                        }), (0, n.jsx)("div", {
                            className: o.iconWrapper,
                            children: (0, n.jsx)(t, {
                                width: 40,
                                height: 40
                            })
                        }), (0, n.jsx)("img", {
                            src: i,
                            alt: "",
                            className: o.sparkle
                        })]
                    })
                })
            }
        },
        912702: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            }), s("70102");
            var n = s("37983");
            s("884691");
            var l = s("394716"),
                r = s("216773"),
                o = s("507006"),
                i = s("49111");

            function a(e) {
                let {
                    tier: t,
                    ...s
                } = e;
                switch (t) {
                    case i.BoostedGuildTiers.TIER_1:
                        return (0, n.jsx)(l.default, {
                            ...s
                        });
                    case i.BoostedGuildTiers.TIER_2:
                        return (0, n.jsx)(r.default, {
                            ...s
                        });
                    case i.BoostedGuildTiers.TIER_3:
                        return (0, n.jsx)(o.default, {
                            ...s
                        });
                    case i.BoostedGuildTiers.NONE:
                        return null;
                    default:
                        throw Error("Not a valid tier type")
                }
            }
        },
        394716: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("469563"),
                r = s("859670"),
                o = s("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, o.default)(i),
                        width: t,
                        height: s,
                        viewBox: "0 0 32 32",
                        children: (0, n.jsx)("path", {
                            fill: l,
                            className: r,
                            d: "M16 1L7 10V22L16 31L25 22V10L16 1ZM20.62 11.27L16.5 7.16V2.91L23.62 10.03L20.62 11.27ZM12 19.93V12.07L16 8.07L20 12.07V19.93L16 23.93L12 19.93ZM15.5 7.16L11.38 11.28L8.38 10.04L15.5 2.91V7.16ZM11 12.2V19.8L8 21.04V10.96L11 12.2ZM11.38 20.73L15.5 24.85V29.09L8.38 21.97L11.38 20.73ZM16.5 24.84L20.62 20.72L23.62 21.96L16.5 29.09V24.84ZM21 19.8V12.2L24 10.96V21.05L21 19.8Z"
                        })
                    })
                }, r.BoostTier1Icon, void 0, {
                    size: 24
                })
        },
        216773: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("469563"),
                r = s("372167"),
                o = s("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, o.default)(i),
                        width: t,
                        height: s,
                        viewBox: "0 0 32 32",
                        children: (0, n.jsx)("path", {
                            fill: l,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.5 1.46002L24.62 9.58002L20.62 11.23L16.5 7.12002V1.46002ZM11 12.16L7 10.5V21.42L11 19.76V12.16ZM16.5 24.8001V30.4601L24.62 22.3401L20.62 20.6801L16.5 24.8001ZM15.5 7.12004V1.46004L7.38 9.58004L11.38 11.23L15.5 7.12004ZM15.5 30.46L7.38 22.34L11.38 20.68L15.5 24.8V30.46ZM21 19.76L25 21.42V10.5L21 12.16V19.76ZM16 8.03003L20 12.03V19.89L16 23.89L12 19.89V12.03L16 8.03003Z"
                        })
                    })
                }, r.BoostTier2Icon, void 0, {
                    size: 24
                })
        },
        507006: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("469563"),
                r = s("860942"),
                o = s("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, o.default)(i),
                        width: t,
                        height: s,
                        viewBox: "0 0 32 32",
                        children: (0, n.jsx)("path", {
                            fill: l,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M29 2C29 2.55 28.55 3 28 3C27.45 3 27 2.55 27 2V1C27 0.45 27.45 0 28 0C28.55 0 29 0.45 29 1V2ZM2.94 25.94L4 24L5.06 25.94L7 27L5.06 28.06L4 30L2.94 28.06L1 27L2.94 25.94ZM28 5C27.45 5 27 5.45 27 6V7C27 7.55 27.45 8 28 8C28.55 8 29 7.55 29 7V6C29 5.45 28.56 5 28 5ZM30 3H31C31.56 3 32 3.45 32 4C32 4.55 31.55 5 31 5H30C29.45 5 29 4.55 29 4C29 3.45 29.45 3 30 3ZM26 3H25C24.45 3 24 3.45 24 4C24 4.55 24.45 5 25 5H26C26.55 5 27 4.55 27 4C27 3.45 26.56 3 26 3ZM15.6201 1.46002V7.12002L11.5001 11.23L7.50012 9.58002L15.6201 1.46002ZM24.7401 9.58002L16.6201 1.46002V7.12002L20.7401 11.23L24.7401 9.58002ZM7.12012 10.5L11.1201 12.16V19.76L7.12012 21.42V10.5ZM16.6201 24.8V30.46L24.7401 22.34L20.7401 20.68L16.6201 24.8ZM15.6201 30.46L7.50012 22.34L11.5001 20.68L15.6201 24.8V30.46ZM21.1201 19.76L25.1201 21.42V10.5L21.1201 12.16V19.76ZM19.7301 11.64L20.1201 12.03V19.89L16.1201 23.89L12.1201 19.89V19.38L19.7301 11.64ZM12.1201 17.95L19.0201 10.93L18.2401 10.15L12.1201 16.38V17.95ZM17.5301 9.44002L12.1201 14.95V12.03L16.1201 8.03002L17.5301 9.44002Z"
                        })
                    })
                }, r.BoostTier3Icon, void 0, {
                    size: 24
                })
        },
        422403: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("469563"),
                r = s("639055"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: l = "currentColor",
                        className: r,
                        foreground: o
                    } = e;
                    return (0, n.jsx)("svg", {
                        className: r,
                        width: t,
                        height: s,
                        viewBox: "0 0 16 16",
                        children: (0, n.jsxs)("g", {
                            fill: "none",
                            children: [(0, n.jsx)("path", {
                                d: "M-4-4h24v24H-4z"
                            }), (0, n.jsx)("path", {
                                className: o,
                                fill: l,
                                d: "M14.994 1.006C13.858-.257 11.904-.3 10.72.89L8.637 2.975l-.696-.697-1.387 1.388 5.557 5.557 1.387-1.388-.697-.697 1.964-1.964c1.13-1.13 1.3-2.985.23-4.168zm-13.25 10.25c-.225.224-.408.48-.55.764L.02 14.37l1.39 1.39 2.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813 4.803z"
                            })]
                        })
                    })
                }, r.EyeDropperIcon, void 0, {
                    size: 16
                })
        },
        818643: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("469563"),
                r = s("851298"),
                o = s("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: l = "currentColor",
                        ...r
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, o.default)(r),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                            fill: l
                        }), (0, n.jsx)("path", {
                            d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                            fill: l
                        })]
                    })
                }, r.ImagePlusIcon, void 0, {
                    size: 24
                })
        },
        468759: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("469563"),
                r = s("833222"),
                o = s("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: l = "currentColor",
                        className: r,
                        foreground: i,
                        ...a
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, o.default)(a),
                        className: r,
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("path", {
                            d: "M0 0h24v24H0z",
                            fill: "none"
                        }), (0, n.jsx)("path", {
                            className: i,
                            fill: l,
                            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"
                        })]
                    })
                }, r.DenyIcon, void 0, {
                    size: 24
                })
        },
        62418: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                mapOptionToHighlightedRowOptions: function() {
                    return u
                },
                generateVerificationLevelOptions: function() {
                    return c
                },
                generateContentFilterHighlightedOptions: function() {
                    return d
                },
                generateDmSpamOptions: function() {
                    return f
                },
                generateExplicitImageOptions: function() {
                    return C
                }
            });
            var n = s("151426");
            s("854588");
            var l = s("669491"),
                r = s("797944"),
                o = s("49111"),
                i = s("568456"),
                a = s("782340");

            function u(e) {
                return e.map(e => ({
                    title: e.name,
                    description: e.desc,
                    highlightColor: function(e) {
                        switch (e) {
                            case E("PRIMARY_400"):
                                return r.HighlightColors.ACCENT;
                            case E("GREEN_360"):
                                return r.HighlightColors.GREEN;
                            case E("YELLOW_360"):
                                return r.HighlightColors.YELLOW;
                            case E("ORANGE_345"):
                                return r.HighlightColors.ORANGE;
                            case E("RED_400"):
                                return r.HighlightColors.RED;
                            default:
                                return r.HighlightColors.NONE
                        }
                    }(e.color),
                    value: e.value,
                    disabled: e.disabled
                }))
            }

            function c() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return [{
                    name: a.default.Messages.VERIFICATION_LEVEL_NONE,
                    desc: a.default.Messages.VERIFICATION_LEVEL_NONE_CRITERIA,
                    value: o.VerificationLevels.NONE,
                    disabled: e,
                    tooltipText: e ? a.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null
                }, {
                    name: a.default.Messages.VERIFICATION_LEVEL_LOW,
                    desc: a.default.Messages.VERIFICATION_LEVEL_LOW_CRITERIA,
                    value: o.VerificationLevels.LOW,
                    color: t ? void 0 : E("GREEN_360")
                }, {
                    name: a.default.Messages.VERIFICATION_LEVEL_MEDIUM,
                    desc: a.default.Messages.VERIFICATION_LEVEL_MEDIUM_CRITERIA.format({
                        min: o.VerificationCriteria.ACCOUNT_AGE
                    }),
                    value: o.VerificationLevels.MEDIUM,
                    color: t ? void 0 : E("YELLOW_360")
                }, {
                    name: a.default.Messages.VERIFICATION_LEVEL_HIGH,
                    desc: a.default.Messages.VERIFICATION_LEVEL_HIGH_CRITERIA.format({
                        min: o.VerificationCriteria.MEMBER_AGE
                    }),
                    value: o.VerificationLevels.HIGH,
                    color: t ? void 0 : E("ORANGE_345")
                }, {
                    name: a.default.Messages.VERIFICATION_LEVEL_VERY_HIGH,
                    desc: a.default.Messages.VERIFICATION_LEVEL_VERY_HIGH_CRITERIA,
                    value: o.VerificationLevels.VERY_HIGH,
                    color: t ? void 0 : E("RED_400")
                }]
            }

            function d() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return [{
                    name: a.default.Messages.EXPLICIT_CONTENT_FILTER_HIGH_V2,
                    desc: a.default.Messages.EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION_V2,
                    value: o.GuildExplicitContentFilterTypes.ALL_MEMBERS,
                    color: E("RED_400")
                }, {
                    name: a.default.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_V2,
                    desc: a.default.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION_V2,
                    value: o.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES,
                    disabled: e,
                    tooltipText: e ? a.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
                    color: E("YELLOW_360")
                }, {
                    name: a.default.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_V2,
                    desc: a.default.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION_V2,
                    value: o.GuildExplicitContentFilterTypes.DISABLED,
                    disabled: e,
                    tooltipText: e ? a.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
                    color: E("PRIMARY_400")
                }]
            }

            function f() {
                return [{
                    name: a.default.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS,
                    desc: a.default.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP,
                    value: n.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS,
                    color: E("GREEN_360")
                }, {
                    name: a.default.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS,
                    desc: a.default.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP,
                    value: n.DmSpamFilterV2.NON_FRIENDS,
                    color: E("YELLOW_360")
                }, {
                    name: a.default.Messages.USER_DM_SPAM_FILTER_DISABLED,
                    desc: a.default.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP,
                    value: n.DmSpamFilterV2.DISABLED,
                    color: E("RED_400")
                }]
            }

            function C() {
                return [{
                    name: a.default.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_V2,
                    desc: a.default.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2,
                    value: i.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS,
                    color: E("GREEN_360")
                }, {
                    name: a.default.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_V2,
                    desc: a.default.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP_V2,
                    value: i.ExplicitContentFilterTypes.NON_FRIENDS,
                    color: E("YELLOW_360")
                }, {
                    name: a.default.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_V2,
                    desc: a.default.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP_V2,
                    value: i.ExplicitContentFilterTypes.DISABLED,
                    color: E("RED_400")
                }]
            }

            function E(e) {
                return l.default.unsafe_rawColors[e].css
            }
        }
    }
]);