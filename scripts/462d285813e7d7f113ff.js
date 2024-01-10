(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75041"], {
        45299: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("907002"),
                i = n("669491"),
                u = n("77078"),
                d = n("659500"),
                o = n("49111"),
                r = n("782340"),
                c = n("317404"),
                f = function(e) {
                    var t;
                    let {
                        message: n,
                        errorMessage: f,
                        submitting: h,
                        onReset: m,
                        onSave: S,
                        onSaveText: g,
                        onResetText: x,
                        onSaveButtonColor: E,
                        disabled: T,
                        saveButtonTooltip: C
                    } = e, I = a.useRef(null), [{
                        spring: p
                    }, A] = (0, s.useSpring)(() => ({
                        spring: 0
                    }));
                    a.useEffect(() => {
                        function e() {
                            A({
                                spring: 1,
                                config: s.config.gentle
                            }), A({
                                spring: 0,
                                config: s.config.gentle,
                                delay: 1e3
                            })
                        }
                        return d.ComponentDispatch.subscribe(o.ComponentActions.EMPHASIZE_NOTICE, e), () => {
                            d.ComponentDispatch.unsubscribe(o.ComponentActions.EMPHASIZE_NOTICE, e)
                        }
                    }, [A]);
                    let N = p.to({
                            range: [0, 1],
                            output: [(0, u.useToken)(i.default.colors.TEXT_NORMAL).hex(), (0, u.useToken)(i.default.unsafe_rawColors.WHITE_500).hex()]
                        }),
                        j = p.to({
                            range: [0, 1],
                            output: [(0, u.useToken)(i.default.colors.BACKGROUND_FLOATING).hex(), (0, u.useToken)(i.default.colors.STATUS_DANGER).hex()]
                        }),
                        M = (0, u.useToken)(i.default.colors.TEXT_DANGER).hex();
                    return (0, l.jsx)(s.animated.div, {
                        className: c.container,
                        style: {
                            backgroundColor: j
                        },
                        children: (0, l.jsx)("div", {
                            className: c.flexContainer,
                            ref: I,
                            children: (0, l.jsxs)(u.FocusRingScope, {
                                containerRef: I,
                                children: [(0, l.jsx)("div", {
                                    className: c.shrinkingContainer,
                                    children: (0, l.jsx)(s.animated.div, {
                                        className: c.message,
                                        style: {
                                            color: null != f ? M : N
                                        },
                                        children: null !== (t = null != f ? f : n) && void 0 !== t ? t : r.default.Messages.SETTINGS_NOTICE_MESSAGE
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: c.actions,
                                    children: [null != m && (0, l.jsx)(u.Button, {
                                        className: c.resetButton,
                                        size: u.Button.Sizes.SMALL,
                                        color: u.Button.Colors.PRIMARY,
                                        look: u.Button.Looks.LINK,
                                        onClick: m,
                                        children: (0, l.jsx)(s.animated.span, {
                                            style: {
                                                color: N
                                            },
                                            children: null != x ? x : r.default.Messages.RESET
                                        })
                                    }), null != S ? (0, l.jsx)(u.Tooltip, {
                                        text: C,
                                        children: e => (0, l.jsx)(u.Button, {
                                            size: u.Button.Sizes.SMALL,
                                            color: null != E ? E : u.Button.Colors.GREEN,
                                            submitting: h,
                                            disabled: T,
                                            onClick: S,
                                            ...e,
                                            children: null != g ? g : r.default.Messages.SAVE_CHANGES
                                        })
                                    }) : null]
                                })]
                            })
                        })
                    })
                }
        },
        714247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("812204"),
                u = n("685665"),
                d = n("744568"),
                o = n("208021"),
                r = n("982108"),
                c = n("305961"),
                f = n("49111"),
                h = n("973033");

            function m(e) {
                let {
                    guildId: t
                } = e, n = (0, s.useStateFromStores)([c.default], () => c.default.getGuild(t)), {
                    AnalyticsLocationProvider: m
                } = (0, u.default)(i.default.MEMBER_SAFETY_PAGE), S = (0, s.useStateFromStores)([r.default], () => r.default.getGuildSidebarState(t), [t]), g = a.useCallback(() => {
                    o.default.closeGuildSidebar(t)
                }, [t]);
                return null != n && null != S && null != S ? (0, l.jsx)(m, {
                    children: (0, l.jsx)("div", {
                        className: h.sidebarContainer,
                        style: {
                            width: f.DEFAULT_CHAT_SIDEBAR_WIDTH
                        },
                        children: (0, l.jsx)(d.default, {
                            userId: S.details.userId,
                            guildId: S.details.guildId,
                            onClose: g
                        })
                    })
                }) : null
            }
        },
        112265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                u = n("446674"),
                d = n("77078"),
                o = n("812204"),
                r = n("685665"),
                c = n("69927"),
                f = n("994906"),
                h = n("459824"),
                m = n("41594"),
                S = n("539938"),
                g = n("393414"),
                x = n("401642"),
                E = n("982108"),
                T = n("42203"),
                C = n("923959"),
                I = n("305961"),
                p = n("18494"),
                A = n("98292"),
                N = n("155207"),
                j = n("466818"),
                M = n("914985"),
                _ = n("714247"),
                R = n("565556"),
                v = n("891222"),
                b = n("49111"),
                B = n("724210"),
                k = n("782340"),
                L = n("973033"),
                G = n("305794");

            function F(e) {
                let {
                    guild: t,
                    previousChannel: n
                } = e, s = k.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE, i = k.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE;
                return (0, c.usePageTitle)({
                    location: t.name,
                    subsection: s
                }), (0, l.jsxs)(S.default, {
                    className: L.header,
                    innerClassname: L.innerHeader,
                    channelId: B.StaticChannelRoute.MEMBER_SAFETY,
                    guildId: t.id,
                    hideSearch: !0,
                    toolbar: null != n ? (0, l.jsx)(d.Button, {
                        className: L.returnButton,
                        size: d.Button.Sizes.SMALL,
                        look: d.Button.Looks.OUTLINED,
                        color: d.Button.Colors.PRIMARY,
                        onClick: () => {
                            null != n && (0, g.transitionToGuild)(t.id, n.id)
                        },
                        children: (0, l.jsx)(d.Text, {
                            className: L.returnButtonText,
                            variant: "text-xs/medium",
                            color: "none",
                            children: k.default.Messages.RETURN_TO_CHANNEL.format({
                                channelNameHook: () => null == n ? null : (0, l.jsxs)(a.Fragment, {
                                    children: [(0, l.jsx)(m.ChannelItemIcon, {
                                        className: L.returnIcon,
                                        guild: t,
                                        channel: n
                                    }), (0, l.jsx)(A.default, {
                                        children: (0, l.jsx)(d.Text, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            children: n.name
                                        })
                                    })]
                                }, n.id)
                            })
                        })
                    }) : (0, l.jsx)("div", {}),
                    children: [(0, l.jsx)(S.default.Icon, {
                        icon: N.default,
                        "aria-hidden": !0
                    }), (0, l.jsx)(S.default.Title, {
                        children: i
                    })]
                })
            }

            function y(e) {
                let {
                    guildId: t
                } = e, n = (0, u.useStateFromStores)([I.default], () => I.default.getGuild(t)), {
                    AnalyticsLocationProvider: s
                } = (0, r.default)(o.default.MEMBER_SAFETY_PAGE), c = (0, j.useCanAccessMemberSafetyPage)(t), m = (0, h.useCanAccessGuildMemberModView)(t), S = (0, u.useStateFromStores)([p.default], () => p.default.getLastSelectedChannelId(t)), A = (0, u.useStateFromStores)([T.default], () => T.default.getChannel(S)), N = a.useRef(null);
                a.useEffect(() => {
                    if (!c && null != n) {
                        var e;
                        let t = null === (e = C.default.getDefaultChannel(n.id)) || void 0 === e ? void 0 : e.id;
                        (0, g.transitionToGuild)(n.id, t)
                    }
                }, [n, c]);
                let k = (0, u.useStateFromStores)([E.default], () => null != E.default.getGuildSidebarState(t), [t]),
                    y = a.useCallback(e => {
                        m ? (0, f.openGuildMemberModViewSidebar)(e.guildId, e.userId, B.StaticChannelRoute.MEMBER_SAFETY) : (0, x.openUserProfileModal)({
                            userId: e.userId,
                            guildId: e.guildId,
                            analyticsLocation: {
                                section: b.AnalyticsSections.MEMBER_SAFETY_PAGE
                            }
                        })
                    }, [m]);
                return null != n && c ? (0, l.jsxs)(s, {
                    children: [(0, l.jsxs)("div", {
                        className: i(G.chat, L.page, {
                            [G.threadSidebarOpen]: k
                        }),
                        children: [(0, l.jsx)(F, {
                            guild: n,
                            previousChannel: A
                        }), (0, l.jsx)(d.AdvancedScroller, {
                            className: i(L.scroller),
                            ref: N,
                            children: (0, l.jsxs)("div", {
                                className: i(G.content, L.container),
                                children: [(0, l.jsx)(M.default, {
                                    guild: n
                                }), (0, l.jsx)(v.default, {
                                    guild: n,
                                    onMemberSelect: y
                                })]
                            })
                        }), (0, l.jsx)(R.default, {
                            guildId: n.id
                        })]
                    }), m && (0, l.jsx)(_.default, {
                        guildId: n.id
                    })]
                }) : null
            }
        },
        891222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                u = n("907002"),
                d = n("65597"),
                o = n("804160"),
                r = n("178406"),
                c = n("553275"),
                f = n("691307"),
                h = n("314143"),
                m = n("721302"),
                S = n("888940");

            function g(e) {
                let {
                    guild: t
                } = e, n = (0, o.useIsMakingRequest)(t.id), a = (0, u.useSpring)({
                    height: n ? 3 : 0,
                    config: u.config.stiff
                });
                return (0, l.jsx)("div", {
                    className: S.loaderContainer,
                    children: (0, l.jsx)(u.animated.div, {
                        className: S.loaderBar,
                        style: a
                    })
                })
            }

            function x(e) {
                let {
                    guild: t,
                    className: n,
                    onPageChange: s,
                    onMemberSelect: u
                } = e, x = (0, d.default)([r.default], () => r.default.getEstimatedMemberSearchCountByGuildId(t.id), [t.id]), E = (0, o.useIsMakingRequest)(t.id), T = (0, o.useIsStillIndexing)(t.id), C = a.useCallback(e => {
                    null != e && (null == u || u(e))
                }, [u]), I = (0, c.getSearchState)(T, E, x), p = a.useRef(null), A = a.useCallback(() => {
                    var e;
                    null === (e = p.current) || void 0 === e || e.resetSearchText()
                }, []);
                return (0, l.jsxs)("div", {
                    className: i(S.mainTableContainer, n),
                    children: [(0, l.jsx)(m.default, {
                        guild: t,
                        ref: p
                    }), (0, l.jsx)(g, {
                        guild: t
                    }), (0, l.jsx)(f.default, {
                        guild: t,
                        onSelectRow: C,
                        searchState: I,
                        onResetForNewMembers: A
                    }), I !== c.SearchState.SUCCESS_STILL_INDEXING && (0, l.jsx)(h.default, {
                        guildId: t.id,
                        onPageChange: s
                    })]
                })
            }
        },
        965397: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                u = n("458960"),
                d = n("77078"),
                o = n("866893");
            let r = {
                friction: 7,
                tension: 60
            };
            class c extends a.Component {
                componentWillAppear(e) {
                    this.animateTo(1).start(e)
                }
                componentWillEnter(e) {
                    this.animateTo(1).start(e)
                }
                componentWillLeave(e) {
                    let {
                        reducedMotion: t
                    } = this.context;
                    t.enabled ? this.animateTo(0).start(e) : u.default.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
                }
                animateTo(e) {
                    return u.default.spring(this.animation, {
                        ...r,
                        toValue: e
                    })
                }
                getAnimatedStyle() {
                    let {
                        reducedMotion: e
                    } = this.context;
                    return u.default.accelerate({
                        opacity: this.animation,
                        transform: e.enabled ? void 0 : [{
                            translateY: this.animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["150%", "0%"]
                            })
                        }]
                    })
                }
                render() {
                    let {
                        className: e,
                        children: t
                    } = this.props;
                    return (0, l.jsx)(u.default.div, {
                        className: i(e, o.slider),
                        style: this.getAnimatedStyle(),
                        children: t
                    })
                }
                constructor(...e) {
                    super(...e), this.animation = new u.default.Value(0)
                }
            }
            c.contextType = d.AccessibilityPreferencesContext;
            var f = c
        }
    }
]);