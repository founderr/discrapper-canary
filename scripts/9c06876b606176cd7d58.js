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
                s = n("884691"),
                a = n("907002"),
                i = n("669491"),
                u = n("77078"),
                r = n("659500"),
                d = n("49111"),
                o = n("782340"),
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
                    } = e, p = s.useRef(null), [{
                        spring: I
                    }, M] = (0, a.useSpring)(() => ({
                        spring: 0
                    }));
                    s.useEffect(() => {
                        function e() {
                            M({
                                spring: 1,
                                config: a.config.gentle
                            }), M({
                                spring: 0,
                                config: a.config.gentle,
                                delay: 1e3
                            })
                        }
                        return r.ComponentDispatch.subscribe(d.ComponentActions.EMPHASIZE_NOTICE, e), () => {
                            r.ComponentDispatch.unsubscribe(d.ComponentActions.EMPHASIZE_NOTICE, e)
                        }
                    }, [M]);
                    let b = I.to({
                            range: [0, 1],
                            output: [(0, u.useToken)(i.default.colors.TEXT_NORMAL).hex(), (0, u.useToken)(i.default.unsafe_rawColors.WHITE_500).hex()]
                        }),
                        A = I.to({
                            range: [0, 1],
                            output: [(0, u.useToken)(i.default.colors.BACKGROUND_FLOATING).hex(), (0, u.useToken)(i.default.colors.STATUS_DANGER).hex()]
                        }),
                        N = (0, u.useToken)(i.default.colors.TEXT_DANGER).hex();
                    return (0, l.jsx)(a.animated.div, {
                        className: c.container,
                        style: {
                            backgroundColor: A
                        },
                        children: (0, l.jsx)("div", {
                            className: c.flexContainer,
                            ref: p,
                            children: (0, l.jsxs)(u.FocusRingScope, {
                                containerRef: p,
                                children: [(0, l.jsx)("div", {
                                    className: c.shrinkingContainer,
                                    children: (0, l.jsx)(a.animated.div, {
                                        className: c.message,
                                        style: {
                                            color: null != f ? N : b
                                        },
                                        children: null !== (t = null != f ? f : n) && void 0 !== t ? t : o.default.Messages.SETTINGS_NOTICE_MESSAGE
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: c.actions,
                                    children: [null != m && (0, l.jsx)(u.Button, {
                                        className: c.resetButton,
                                        size: u.Button.Sizes.SMALL,
                                        color: u.Button.Colors.PRIMARY,
                                        look: u.Button.Looks.LINK,
                                        onClick: m,
                                        children: (0, l.jsx)(a.animated.span, {
                                            style: {
                                                color: b
                                            },
                                            children: null != x ? x : o.default.Messages.RESET
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
                                            children: null != g ? g : o.default.Messages.SAVE_CHANGES
                                        })
                                    }) : null]
                                })]
                            })
                        })
                    })
                }
        },
        485810: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeToGuildMemberUpdates: function() {
                    return a
                }
            });
            var l = n("884691"),
                s = n("666020");

            function a(e) {
                l.useEffect(() => (s.subscribeToMemberUpdates(e), () => {
                    s.unsubscribeFromMemberUpdates(e)
                }), [e])
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
                s = n("884691"),
                a = n("446674"),
                i = n("812204"),
                u = n("685665"),
                r = n("744568"),
                d = n("208021"),
                o = n("982108"),
                c = n("305961"),
                f = n("49111"),
                h = n("973033");

            function m(e) {
                let {
                    guildId: t
                } = e, n = (0, a.useStateFromStores)([c.default], () => c.default.getGuild(t)), {
                    AnalyticsLocationProvider: m
                } = (0, u.default)(i.default.MEMBER_SAFETY_PAGE), S = (0, a.useStateFromStores)([o.default], () => o.default.getGuildSidebarState(t), [t]), g = s.useCallback(() => {
                    d.default.closeGuildSidebar(t)
                }, [t]);
                return null != n && null != S && null != S ? (0, l.jsx)(m, {
                    children: (0, l.jsx)("div", {
                        className: h.sidebarContainer,
                        style: {
                            width: f.DEFAULT_CHAT_SIDEBAR_WIDTH
                        },
                        children: (0, l.jsx)(r.default, {
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
                    return P
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                i = n.n(a),
                u = n("446674"),
                r = n("77078"),
                d = n("812204"),
                o = n("685665"),
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
                p = n("305961"),
                I = n("18494"),
                M = n("98292"),
                b = n("155207"),
                A = n("466818"),
                N = n("485810"),
                j = n("914985"),
                _ = n("714247"),
                v = n("565556"),
                R = n("891222"),
                B = n("49111"),
                k = n("724210"),
                G = n("782340"),
                L = n("973033"),
                F = n("305794");

            function y(e) {
                let {
                    guild: t,
                    previousChannel: n
                } = e, a = G.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE, i = G.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE;
                return (0, c.usePageTitle)({
                    location: t.name,
                    subsection: a
                }), (0, l.jsxs)(S.default, {
                    className: L.header,
                    innerClassname: L.innerHeader,
                    channelId: k.StaticChannelRoute.MEMBER_SAFETY,
                    guildId: t.id,
                    hideSearch: !0,
                    toolbar: null != n ? (0, l.jsx)(r.Button, {
                        className: L.returnButton,
                        size: r.Button.Sizes.SMALL,
                        look: r.Button.Looks.OUTLINED,
                        color: r.Button.Colors.PRIMARY,
                        onClick: () => {
                            null != n && (0, g.transitionToGuild)(t.id, n.id)
                        },
                        children: (0, l.jsx)(r.Text, {
                            className: L.returnButtonText,
                            variant: "text-xs/medium",
                            color: "none",
                            children: G.default.Messages.RETURN_TO_CHANNEL.format({
                                channelNameHook: () => null == n ? null : (0, l.jsxs)(s.Fragment, {
                                    children: [(0, l.jsx)(m.ChannelItemIcon, {
                                        className: L.returnIcon,
                                        guild: t,
                                        channel: n
                                    }), (0, l.jsx)(M.default, {
                                        children: (0, l.jsx)(r.Text, {
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
                        icon: b.default,
                        "aria-hidden": !0
                    }), (0, l.jsx)(S.default.Title, {
                        children: i
                    })]
                })
            }

            function P(e) {
                let {
                    guildId: t
                } = e, n = (0, u.useStateFromStores)([p.default], () => p.default.getGuild(t)), {
                    AnalyticsLocationProvider: a
                } = (0, o.default)(d.default.MEMBER_SAFETY_PAGE), c = (0, A.useCanAccessMemberSafetyPage)(t), m = (0, h.useCanAccessGuildMemberModView)(t), S = (0, u.useStateFromStores)([I.default], () => I.default.getLastSelectedChannelId(t)), M = (0, u.useStateFromStores)([T.default], () => T.default.getChannel(S)), b = s.useRef(null);
                (0, N.useSubscribeToGuildMemberUpdates)(t), s.useEffect(() => {
                    if (!c && null != n) {
                        var e;
                        let t = null === (e = C.default.getDefaultChannel(n.id)) || void 0 === e ? void 0 : e.id;
                        (0, g.transitionToGuild)(n.id, t)
                    }
                }, [n, c]);
                let G = (0, u.useStateFromStores)([E.default], () => null != E.default.getGuildSidebarState(t), [t]),
                    P = s.useCallback(e => {
                        m ? (0, f.openGuildMemberModViewSidebar)(e.guildId, e.userId, k.StaticChannelRoute.MEMBER_SAFETY) : (0, x.openUserProfileModal)({
                            userId: e.userId,
                            guildId: e.guildId,
                            analyticsLocation: {
                                section: B.AnalyticsSections.MEMBER_SAFETY_PAGE
                            }
                        })
                    }, [m]);
                return null != n && c ? (0, l.jsxs)(a, {
                    children: [(0, l.jsxs)("div", {
                        className: i(F.chat, L.page, {
                            [F.threadSidebarOpen]: G
                        }),
                        children: [(0, l.jsx)(y, {
                            guild: n,
                            previousChannel: M
                        }), (0, l.jsx)(r.AdvancedScroller, {
                            className: i(L.scroller),
                            ref: b,
                            children: (0, l.jsxs)("div", {
                                className: i(F.content, L.container),
                                children: [(0, l.jsx)(j.default, {
                                    guild: n
                                }), (0, l.jsx)(R.default, {
                                    guild: n,
                                    onMemberSelect: P
                                })]
                            })
                        }), (0, l.jsx)(v.default, {
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
                s = n("884691"),
                a = n("414456"),
                i = n.n(a),
                u = n("907002"),
                r = n("65597"),
                d = n("804160"),
                o = n("178406"),
                c = n("553275"),
                f = n("691307"),
                h = n("314143"),
                m = n("721302"),
                S = n("888940");

            function g(e) {
                let {
                    guild: t
                } = e, n = (0, d.useIsMakingRequest)(t.id), s = (0, u.useSpring)({
                    height: n ? 3 : 0,
                    config: u.config.stiff
                });
                return (0, l.jsx)("div", {
                    className: S.loaderContainer,
                    children: (0, l.jsx)(u.animated.div, {
                        className: S.loaderBar,
                        style: s
                    })
                })
            }

            function x(e) {
                let {
                    guild: t,
                    className: n,
                    onPageChange: a,
                    onMemberSelect: u
                } = e, x = (0, r.default)([o.default], () => o.default.getEstimatedMemberSearchCountByGuildId(t.id), [t.id]), E = (0, d.useIsMakingRequest)(t.id), T = (0, d.useIsStillIndexing)(t.id), C = s.useCallback(e => {
                    null != e && (null == u || u(e))
                }, [u]), p = (0, c.getSearchState)(T, E, x), I = s.useRef(null), M = s.useCallback(() => {
                    var e;
                    null === (e = I.current) || void 0 === e || e.resetSearchText()
                }, []);
                return (0, l.jsxs)("div", {
                    className: i(S.mainTableContainer, n),
                    children: [(0, l.jsx)(m.default, {
                        guild: t,
                        ref: I
                    }), (0, l.jsx)(g, {
                        guild: t
                    }), (0, l.jsx)(f.default, {
                        guild: t,
                        onSelectRow: C,
                        searchState: p,
                        onResetForNewMembers: M
                    }), p !== c.SearchState.SUCCESS_STILL_INDEXING && (0, l.jsx)(h.default, {
                        guildId: t.id,
                        onPageChange: a
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
                s = n("884691"),
                a = n("414456"),
                i = n.n(a),
                u = n("458960"),
                r = n("77078"),
                d = n("866893");
            let o = {
                friction: 7,
                tension: 60
            };
            class c extends s.Component {
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
                        ...o,
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
                        className: i(e, d.slider),
                        style: this.getAnimatedStyle(),
                        children: t
                    })
                }
                constructor(...e) {
                    super(...e), this.animation = new u.default.Value(0)
                }
            }
            c.contextType = r.AccessibilityPreferencesContext;
            var f = c
        }
    }
]);