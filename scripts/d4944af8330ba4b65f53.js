"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [42341], {
        786522: (e, t, n) => {
            n.d(t, {
                c4: () => o,
                mJ: () => i,
                N5: () => u,
                lc: () => a
            });
            var r = n(744564);

            function o(e) {
                r.Z.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function i(e) {
                r.Z.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function u(e) {
                r.Z.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function a(e) {
                r.Z.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        256204: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(882723),
                c = n(735885),
                s = n(734691),
                l = n(2590),
                f = n(473708),
                d = n(83790),
                p = n.n(d);

            function b(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function y(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function m(e, t) {
                m = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return m(e, t)
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = E(e);
                    if (t) {
                        var o = E(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            var M = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && m(e, t)
                }(n, e);
                var t = h(n);

                function n() {
                    b(this, n);
                    var e;
                    (e = t.apply(this, arguments)).handleClick = function() {
                        if (!e.props.disableButton) {
                            (0, c.jN)(l.S9g.USER_SETTINGS);
                            s.Z.setSection(l.oAB.STREAMER_MODE)
                        }
                    };
                    return e
                }
                n.prototype.render = function() {
                    return (0, r.jsxs)("div", {
                        className: p().streamerModeEnabled,
                        children: [(0, r.jsx)("div", {
                            className: p().streamerModeEnabledImage
                        }), (0, r.jsx)(a.Clickable, {
                            className: u()(p().streamerModeEnabledBtn, _({}, p().disabled, this.props.disableButton)),
                            onClick: this.handleClick,
                            children: f.Z.Messages.STREAMER_MODE_ENABLED
                        })]
                    })
                };
                return n
            }(o.Component);
            M.defaultProps = {
                disableButton: !1
            };
            const v = M
        },
        380477: (e, t, n) => {
            n.d(t, {
                k: () => m,
                ZP: () => O
            });
            var r = n(785893),
                o = (n(667294), n(730381)),
                i = n.n(o),
                u = n(202351),
                a = n(882723),
                c = n(786522),
                s = n(201459),
                l = n(70983),
                f = n(9430),
                d = n(773011),
                p = n(2590),
                b = n(247530),
                _ = n(473708);

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var m = function() {
                return [{
                    value: b.Oe.MINUTES_15,
                    label: _.Z.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: b.Oe.HOURS_1,
                    label: _.Z.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: b.Oe.HOURS_3,
                    label: _.Z.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: b.Oe.HOURS_8,
                    label: _.Z.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: b.Oe.HOURS_24,
                    label: _.Z.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: b.Oe.ALWAYS,
                    label: _.Z.Messages.MUTE_DURATION_ALWAYS
                }]
            };

            function O(e, t) {
                var n = function(n) {
                        e.type === p.d4z.GUILD_CATEGORY && (0, c.c4)(e.id);
                        var r = function(e) {
                            return {
                                muted: !0,
                                mute_config: {
                                    selected_time_window: e,
                                    end_time: e > 0 ? i()().add(e, "second").toISOString() : null
                                }
                            }
                        }(n);
                        s.Z.updateChannelOverrideSettings(e.guild_id, e.id, r, t)
                    },
                    o = function(t) {
                        t && e.type === p.d4z.GUILD_CATEGORY && (0, c.c4)(e.id);
                        s.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
                            muted: t
                        })
                    },
                    b = y((0, u.Wu)([f.Z], (function() {
                        return [f.Z.isChannelMuted(e.guild_id, e.id), f.Z.getChannelMuteConfig(e.guild_id, e.id)]
                    })), 2),
                    E = b[0],
                    O = b[1],
                    h = (0, l.U)(O),
                    M = (0, d.ZP)(e, !0),
                    v = _.Z.Messages.MUTE_CHANNEL_GENERIC,
                    N = _.Z.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case p.d4z.GUILD_CATEGORY:
                        v = _.Z.Messages.MUTE_CATEGORY;
                        N = _.Z.Messages.UNMUTE_CATEGORY;
                        break;
                    case p.d4z.GROUP_DM:
                        v = _.Z.Messages.MUTE_CONVERSATION;
                        N = _.Z.Messages.UNMUTE_CONVERSATION;
                        break;
                    case p.d4z.DM:
                        v = _.Z.Messages.MUTE_CHANNEL.format({
                            name: M
                        });
                        N = _.Z.Messages.UNMUTE_CHANNEL.format({
                            name: M
                        });
                        break;
                    default:
                        v = _.Z.Messages.MUTE_CHANNEL_GENERIC;
                        N = _.Z.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return E ? (0, r.jsx)(a.MenuItem, {
                    id: "unmute-channel",
                    label: N,
                    subtext: h,
                    action: function() {
                        return o(!1)
                    }
                }) : (0, r.jsx)(a.MenuItem, {
                    id: "mute-channel",
                    label: v,
                    action: function() {
                        return o(!0)
                    },
                    children: m().map((function(e) {
                        var t = e.value,
                            o = e.label;
                        return (0, r.jsx)(a.MenuItem, {
                            id: "".concat(t),
                            label: o,
                            action: function() {
                                return n(t)
                            }
                        }, t)
                    }))
                })
            }
        },
        874710: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(882723),
                u = n(487685),
                a = n(671293),
                c = n(473708);

            function s(e, t) {
                return (0, o.e7)([u.Z], (function() {
                    return u.Z.hasJoined(e.id)
                })) ? (0, r.jsx)(i.MenuItem, {
                    id: "leave-thread",
                    label: e.isForumPost() ? c.Z.Messages.LEAVE_FORUM_POST : c.Z.Messages.LEAVE_THREAD,
                    action: function() {
                        return a.Z.leaveThread(e, t)
                    }
                }) : (0,
                    r.jsx)(i.MenuItem, {
                    id: "join-thread",
                    label: e.isForumPost() ? c.Z.Messages.JOIN_FORUM_POST : c.Z.Messages.JOIN_THREAD,
                    action: function() {
                        return a.Z.joinThread(e, t)
                    }
                })
            }
        },
        218318: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                o = (n(667294), n(730381)),
                i = n.n(o),
                u = n(202351),
                a = n(882723),
                c = n(70983),
                s = n(487685),
                l = n(671293),
                f = n(380477),
                d = n(473708);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e) {
                var t = function(t) {
                        l.Z.setNotificationSettings(e, {
                            muted: t
                        })
                    },
                    n = b((0, u.Wu)([s.Z], (function() {
                        return [s.Z.isMuted(e.id), s.Z.getMuteConfig(e.id), s.Z.hasJoined(e.id)]
                    })), 3),
                    o = n[0],
                    p = n[1],
                    _ = n[2],
                    E = (0, c.U)(p);
                return _ ? o ? (0, r.jsx)(a.MenuItem, {
                    id: "unmute-channel",
                    label: e.isForumPost() ? d.Z.Messages.UNMUTE_FORUM_POST : d.Z.Messages.UNMUTE_THREAD,
                    subtext: E,
                    action: function() {
                        return t(!1)
                    }
                }) : (0, r.jsx)(a.MenuItem, {
                    id: "mute-channel",
                    label: e.isForumPost() ? d.Z.Messages.MUTE_FORUM_POST : d.Z.Messages.MUTE_THREAD,
                    action: function() {
                        return t(!0)
                    },
                    children: (0, f.k)().map((function(t) {
                        var n = t.value,
                            o = t.label;
                        return (0, r.jsx)(a.MenuItem, {
                            id: "".concat(n),
                            label: o,
                            action: function() {
                                return r = {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: t = n,
                                        end_time: t > 0 ? i()().add(t, "second").toISOString() : null
                                    }
                                }, void l.Z.setNotificationSettings(e, r);
                                var t, r
                            }
                        }, n)
                    }))
                }) : (0, r.jsx)(a.MenuItem, {
                    id: "mute-disabled",
                    label: e.isForumPost() ? d.Z.Messages.MUTE_FORUM_POST : d.Z.Messages.MUTE_THREAD,
                    disabled: !0
                })
            }
        },
        895058: (e, t, n) => {
            n.d(t, {
                n: () => i
            });
            var r = n(202351),
                o = n(615796);

            function i() {
                var e = (0, r.cj)([o.Z], (function() {
                        return {
                            localizedPricingPromo: o.Z.localizedPricingPromo,
                            hasError: o.Z.localizedPricingPromoHasError
                        }
                    })),
                    t = e.localizedPricingPromo;
                return e.hasError ? null : t
            }
        },
        201556: (e, t, n) => {
            n.d(t, {
                U: () => i
            });
            var r = n(993231),
                o = n(479373);

            function i(e, t) {
                (0, o.Z)({
                    type: r.nv.VIEW,
                    name: r.zs.LOCALIZED_PRICING_UPSELL_VIEWED,
                    properties: {
                        country_code: t,
                        action_location: e
                    }
                })
            }
        },
        665783: (e, t, n) => {
            n.d(t, {
                J: () => f,
                B: () => d
            });
            var r = n(202351),
                o = n(656793),
                i = n(61209),
                u = n(9430),
                a = n(661123),
                c = n(487685),
                s = n(379364),
                l = n(2590);

            function f(e) {
                var t = c.Z.flags(e.id);
                if (null == t) return s.iN.NO_MESSAGES;
                if ((0,
                        o.c)() && c.Z.isMuted(e.id)) return s.iN.NO_MESSAGES;
                if ((0, a.yE)(t, s.iN.ALL_MESSAGES)) return s.iN.ALL_MESSAGES;
                if ((0, a.yE)(t, s.iN.ONLY_MENTIONS)) return s.iN.ONLY_MENTIONS;
                if ((0, a.yE)(t, s.iN.NO_MESSAGES)) return s.iN.NO_MESSAGES;
                var n = i.Z.getChannel(e.parent_id);
                if (null == n) return s.iN.NO_MESSAGES;
                if (u.Z.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) return s.iN.NO_MESSAGES;
                var r = u.Z.resolvedMessageNotifications(n);
                return r === l.bL.NO_MESSAGES ? s.iN.NO_MESSAGES : r === l.bL.ONLY_MENTIONS ? s.iN.ONLY_MENTIONS : s.iN.ALL_MESSAGES
            }

            function d(e) {
                return (0, r.e7)([c.Z, u.Z, i.Z], (function() {
                    return f(e)
                }), [e])
            }
        },
        669426: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(882723),
                c = n(107364),
                s = n(718831),
                l = n(49032),
                f = n.n(l);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function _(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }
            var y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            const O = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && E(e, t)
                }(n, e);
                var t = m(n);

                function n() {
                    d(this, n);
                    var e;
                    (e = t.apply(this, arguments)).renderBreadcrumb = function(t, n) {
                        var o, i = e.props,
                            c = i.activeId,
                            l = i.onBreadcrumbClick,
                            d = i.breadcrumbs,
                            b = i.renderCustomBreadcrumb,
                            _ = i.separatorClassName,
                            E = t.id === c,
                            y = n === d.length - 1,
                            m = null != b ? b(t, E) : (0, r.jsx)("span", {
                                className: u()(f().breadcrumb, (o = {}, p(o, f().activeBreadcrumb, E), p(o, f().interactiveBreadcrumb, null != l), o)),
                                children: t.label
                            });
                        return (0, r.jsxs)("div", {
                            className: u()(f().breadcrumbWrapper, p({}, f().breadcrumbFinalWrapper, y)),
                            children: [null != l ? (0, r.jsx)(a.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(t)
                                },
                                className: f().breadcrumbClickWrapper,
                                children: m
                            }) : m, y ? null : (0, r.jsx)(s.Z, {
                                className: u()(f().breadcrumbArrow, _),
                                direction: s.Z.Directions.RIGHT
                            })]
                        }, t.id)
                    };
                    return e
                }
                var o = n.prototype;
                o.handleClick = function(e) {
                    var t = this.props.onBreadcrumbClick;
                    null != t && t(e)
                };
                o.render = function() {
                    var e = this.props,
                        t = e.breadcrumbs,
                        n = e.className,
                        o = t.map(this.renderBreadcrumb);
                    return (0, r.jsx)(c.Z, {
                        justify: c.Z.Justify.START,
                        className: u()(f().breadcrumbs, n),
                        children: o
                    })
                };
                return n
            }(o.PureComponent)
        },
        700223: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(882723),
                c = n(473708),
                s = n(736996),
                l = n.n(s);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = d(e);
                    if (t) {
                        var o = d(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var y = {
                    BLOCK: l().block,
                    INLINE: l().inline
                },
                m = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && b(e, t)
                    }(n, e);
                    var t = E(n);

                    function n() {
                        f(this, n);
                        return t.apply(this, arguments)
                    }
                    n.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.className,
                            o = e.textClassName,
                            i = e.type,
                            s = void 0 === i ? y.BLOCK : i,
                            f = e.style;
                        return (0,
                            r.jsxs)("div", {
                            className: u()(n, s),
                            style: f,
                            children: [(0, r.jsxs)(a.Text, {
                                variant: "text-sm/bold",
                                tag: "div",
                                color: "text-positive",
                                className: l().pro,
                                children: [c.Z.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                            }), (0, r.jsx)(a.Text, {
                                className: u()(l().tip, o),
                                variant: "text-sm/normal",
                                children: t
                            })]
                        })
                    };
                    return n
                }(o.PureComponent);
            m.Types = y;
            const O = m
        }
    }
]);