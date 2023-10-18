"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [42341], {
        256204: (e, t, r) => {
            r.d(t, {
                Z: () => _
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                u = r.n(i),
                c = r(70418),
                a = r(735885),
                s = r(396179),
                l = r(2590),
                f = r(473708),
                d = r(904201),
                p = r.n(d);

            function b(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function h(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
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
            var v = function(e) {
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
                    var r, n = O(e);
                    if (t) {
                        var o = O(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return h(this, r)
                }
            }
            var g = function(e) {
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
                }(r, e);
                var t = E(r);

                function r() {
                    b(this, r);
                    var e;
                    (e = t.apply(this, arguments)).handleClick = function() {
                        if (!e.props.disableButton) {
                            (0, a.jN)(l.S9g.USER_SETTINGS);
                            s.Z.setSection(l.oAB.STREAMER_MODE)
                        }
                    };
                    return e
                }
                r.prototype.render = function() {
                    return (0, n.jsxs)("div", {
                        className: p().streamerModeEnabled,
                        children: [(0, n.jsx)("div", {
                            className: p().streamerModeEnabledImage
                        }), (0, n.jsx)(c.Clickable, {
                            className: u()(p().streamerModeEnabledBtn, y({}, p().disabled, this.props.disableButton)),
                            onClick: this.handleClick,
                            children: f.Z.Messages.STREAMER_MODE_ENABLED
                        })]
                    })
                };
                return r
            }(o.Component);
            g.defaultProps = {
                disableButton: !1
            };
            const _ = g
        },
        478079: (e, t, r) => {
            r.d(t, {
                d: () => s
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(633878);

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var s = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    s = e.height,
                    l = void 0 === s ? 24 : s,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    y = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            u(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 1a4.985 4.985 0 0 0-3.308 1.25 1 1 0 0 0 1.324 1.5A3 3 0 0 1 15 6v2H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6a5 5 0 0 0-5-5Zm1 14.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }
        },
        380477: (e, t, r) => {
            r.d(t, {
                ZP: () => v,
                k: () => m
            });
            var n = r(785893),
                o = (r(667294), r(730381)),
                i = r.n(o),
                u = r(202351),
                c = r(70418),
                a = r(786522),
                s = r(201459),
                l = r(70983),
                f = r(9430),
                d = r(773011),
                p = r(2590),
                b = r(247530),
                y = r(473708);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function h(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            u = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(u = (n = r.next()).done); u = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                u || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return O(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var m = function() {
                return [{
                    value: b.Oe.MINUTES_15,
                    label: y.Z.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: b.Oe.HOURS_1,
                    label: y.Z.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: b.Oe.HOURS_3,
                    label: y.Z.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: b.Oe.HOURS_8,
                    label: y.Z.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: b.Oe.HOURS_24,
                    label: y.Z.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: b.Oe.ALWAYS,
                    label: y.Z.Messages.MUTE_DURATION_ALWAYS
                }]
            };

            function v(e, t) {
                var r = function(r) {
                        e.type === p.d4z.GUILD_CATEGORY && (0, a.c4)(e.id);
                        var n = function(e) {
                            return {
                                muted: !0,
                                mute_config: {
                                    selected_time_window: e,
                                    end_time: e > 0 ? i()().add(e, "second").toISOString() : null
                                }
                            }
                        }(r);
                        s.Z.updateChannelOverrideSettings(e.guild_id, e.id, n, t)
                    },
                    o = function(t) {
                        t && e.type === p.d4z.GUILD_CATEGORY && (0, a.c4)(e.id);
                        s.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
                            muted: t
                        })
                    },
                    b = h((0, u.Wu)([f.Z], (function() {
                        return [f.Z.isChannelMuted(e.guild_id, e.id), f.Z.getChannelMuteConfig(e.guild_id, e.id)]
                    })), 2),
                    O = b[0],
                    v = b[1],
                    E = (0, l.U)(v),
                    g = (0, d.ZP)(e, !0),
                    _ = y.Z.Messages.MUTE_CHANNEL_GENERIC,
                    M = y.Z.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case p.d4z.GUILD_CATEGORY:
                        _ = y.Z.Messages.MUTE_CATEGORY;
                        M = y.Z.Messages.UNMUTE_CATEGORY;
                        break;
                    case p.d4z.GROUP_DM:
                        _ = y.Z.Messages.MUTE_CONVERSATION;
                        M = y.Z.Messages.UNMUTE_CONVERSATION;
                        break;
                    case p.d4z.DM:
                        _ = y.Z.Messages.MUTE_CHANNEL.format({
                            name: g
                        });
                        M = y.Z.Messages.UNMUTE_CHANNEL.format({
                            name: g
                        });
                        break;
                    default:
                        _ = y.Z.Messages.MUTE_CHANNEL_GENERIC;
                        M = y.Z.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return O ? (0, n.jsx)(c.MenuItem, {
                    id: "unmute-channel",
                    label: M,
                    subtext: E,
                    action: function() {
                        return o(!1)
                    }
                }) : (0, n.jsx)(c.MenuItem, {
                    id: "mute-channel",
                    label: _,
                    action: function() {
                        return o(!0)
                    },
                    children: m().map((function(e) {
                        var t = e.value,
                            o = e.label;
                        return (0, n.jsx)(c.MenuItem, {
                            id: "".concat(t),
                            label: o,
                            action: function() {
                                return r(t)
                            }
                        }, t)
                    }))
                })
            }
        },
        874710: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                o = (r(667294), r(202351)),
                i = r(70418),
                u = r(487685),
                c = r(457581),
                a = r(473708);

            function s(e, t) {
                return (0, o.e7)([u.Z], (function() {
                    return u.Z.hasJoined(e.id)
                })) ? (0, n.jsx)(i.MenuItem, {
                    id: "leave-thread",
                    label: e.isForumPost() ? a.Z.Messages.LEAVE_FORUM_POST : a.Z.Messages.LEAVE_THREAD,
                    action: function() {
                        return c.Z.leaveThread(e, t)
                    }
                }) : (0, n.jsx)(i.MenuItem, {
                    id: "join-thread",
                    label: e.isForumPost() ? a.Z.Messages.JOIN_FORUM_POST : a.Z.Messages.JOIN_THREAD,
                    action: function() {
                        return c.Z.joinThread(e, t)
                    }
                })
            }
        },
        218318: (e, t, r) => {
            r.d(t, {
                Z: () => y
            });
            var n = r(785893),
                o = (r(667294),
                    r(730381)),
                i = r.n(o),
                u = r(202351),
                c = r(70418),
                a = r(70983),
                s = r(487685),
                l = r(457581),
                f = r(380477),
                d = r(473708);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            u = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(u = (n = r.next()).done); u = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                u || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return p(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(e) {
                var t = function(t) {
                        l.Z.setNotificationSettings(e, {
                            muted: t
                        })
                    },
                    r = b((0, u.Wu)([s.Z], (function() {
                        return [s.Z.isMuted(e.id), s.Z.getMuteConfig(e.id), s.Z.hasJoined(e.id)]
                    })), 3),
                    o = r[0],
                    p = r[1],
                    y = r[2],
                    O = (0, a.U)(p);
                return y ? o ? (0, n.jsx)(c.MenuItem, {
                    id: "unmute-channel",
                    label: e.isForumPost() ? d.Z.Messages.UNMUTE_FORUM_POST : d.Z.Messages.UNMUTE_THREAD,
                    subtext: O,
                    action: function() {
                        return t(!1)
                    }
                }) : (0, n.jsx)(c.MenuItem, {
                    id: "mute-channel",
                    label: e.isForumPost() ? d.Z.Messages.MUTE_FORUM_POST : d.Z.Messages.MUTE_THREAD,
                    action: function() {
                        return t(!0)
                    },
                    children: (0, f.k)().map((function(t) {
                        var r = t.value,
                            o = t.label;
                        return (0, n.jsx)(c.MenuItem, {
                            id: "".concat(r),
                            label: o,
                            action: function() {
                                return n = {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: t = r,
                                        end_time: t > 0 ? i()().add(t, "second").toISOString() : null
                                    }
                                }, void l.Z.setNotificationSettings(e, n);
                                var t, n
                            }
                        }, r)
                    }))
                }) : (0, n.jsx)(c.MenuItem, {
                    id: "mute-disabled",
                    label: e.isForumPost() ? d.Z.Messages.MUTE_FORUM_POST : d.Z.Messages.MUTE_THREAD,
                    disabled: !0
                })
            }
        },
        895058: (e, t, r) => {
            r.d(t, {
                n: () => i
            });
            var n = r(202351),
                o = r(615796);

            function i() {
                var e = (0, n.cj)([o.Z], (function() {
                        return {
                            localizedPricingPromo: o.Z.localizedPricingPromo,
                            hasError: o.Z.localizedPricingPromoHasError
                        }
                    })),
                    t = e.localizedPricingPromo;
                return e.hasError ? null : t
            }
        },
        201556: (e, t, r) => {
            r.d(t, {
                U: () => i
            });
            var n = r(571657),
                o = r(479373);

            function i(e, t) {
                (0, o.Z)({
                    type: n.nv.VIEW,
                    name: n.zs.LOCALIZED_PRICING_UPSELL_VIEWED,
                    properties: {
                        country_code: t,
                        action_location: e
                    }
                })
            }
        },
        665783: (e, t, r) => {
            r.d(t, {
                B: () => d,
                J: () => f
            });
            var n = r(202351),
                o = r(656793),
                i = r(61209),
                u = r(9430),
                c = r(661123),
                a = r(487685),
                s = r(379364),
                l = r(2590);

            function f(e) {
                var t = a.Z.flags(e.id);
                if (null == t) return s.iN.NO_MESSAGES;
                if ((0, o.c)() && a.Z.isMuted(e.id)) return s.iN.NO_MESSAGES;
                if ((0, c.yE)(t, s.iN.ALL_MESSAGES)) return s.iN.ALL_MESSAGES;
                if ((0, c.yE)(t, s.iN.ONLY_MENTIONS)) return s.iN.ONLY_MENTIONS;
                if ((0,
                        c.yE)(t, s.iN.NO_MESSAGES)) return s.iN.NO_MESSAGES;
                var r = i.Z.getChannel(e.parent_id);
                if (null == r) return s.iN.NO_MESSAGES;
                if (u.Z.isGuildOrCategoryOrChannelMuted(r.guild_id, r.id)) return s.iN.NO_MESSAGES;
                var n = u.Z.resolvedMessageNotifications(r);
                return n === l.bL.NO_MESSAGES ? s.iN.NO_MESSAGES : n === l.bL.ONLY_MENTIONS ? s.iN.ONLY_MENTIONS : s.iN.ALL_MESSAGES
            }

            function d(e) {
                return (0, n.e7)([a.Z, u.Z, i.Z], (function() {
                    return f(e)
                }), [e])
            }
        },
        669426: (e, t, r) => {
            r.d(t, {
                Z: () => v
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                u = r.n(i),
                c = r(70418),
                a = r(107364),
                s = r(718831),
                l = r(70821),
                f = r.n(l);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function y(e, t) {
                return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }
            var h = function(e) {
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
                    var r, n = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return y(this, r)
                }
            }
            const v = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && O(e, t)
                }(r, e);
                var t = m(r);

                function r() {
                    d(this, r);
                    var e;
                    (e = t.apply(this, arguments)).renderBreadcrumb = function(t, r) {
                        var o, i = e.props,
                            a = i.activeId,
                            l = i.onBreadcrumbClick,
                            d = i.breadcrumbs,
                            b = i.renderCustomBreadcrumb,
                            y = i.separatorClassName,
                            O = t.id === a,
                            h = r === d.length - 1,
                            m = null != b ? b(t, O) : (0, n.jsx)("span", {
                                className: u()(f().breadcrumb, (o = {}, p(o, f().activeBreadcrumb, O), p(o, f().interactiveBreadcrumb, null != l), o)),
                                children: t.label
                            });
                        return (0, n.jsxs)("div", {
                            className: u()(f().breadcrumbWrapper, p({}, f().breadcrumbFinalWrapper, h)),
                            children: [null != l ? (0, n.jsx)(c.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(t)
                                },
                                className: f().breadcrumbClickWrapper,
                                children: m
                            }) : m, h ? null : (0, n.jsx)(s.Z, {
                                className: u()(f().breadcrumbArrow, y),
                                direction: s.Z.Directions.RIGHT
                            })]
                        }, t.id)
                    };
                    return e
                }
                var o = r.prototype;
                o.handleClick = function(e) {
                    var t = this.props.onBreadcrumbClick;
                    null != t && t(e)
                };
                o.render = function() {
                    var e = this.props,
                        t = e.breadcrumbs,
                        r = e.className,
                        o = t.map(this.renderBreadcrumb);
                    return (0, n.jsx)(a.Z, {
                        justify: a.Z.Justify.START,
                        className: u()(f().breadcrumbs, r),
                        children: o
                    })
                };
                return r
            }(o.PureComponent)
        },
        700223: (e, t, r) => {
            r.d(t, {
                Z: () => v
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                u = r.n(i),
                c = r(70418),
                a = r(473708),
                s = r(911290),
                l = r.n(s);

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
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
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
            var y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
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
                    var r, n = d(e);
                    if (t) {
                        var o = d(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return p(this, r)
                }
            }
            var h = {
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
                    }(r, e);
                    var t = O(r);

                    function r() {
                        f(this, r);
                        return t.apply(this, arguments)
                    }
                    r.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            r = e.className,
                            o = e.textClassName,
                            i = e.type,
                            s = void 0 === i ? h.BLOCK : i,
                            f = e.style;
                        return (0, n.jsxs)("div", {
                            className: u()(r, s),
                            style: f,
                            children: [(0, n.jsxs)(c.Text, {
                                variant: "text-sm/bold",
                                tag: "div",
                                color: "text-positive",
                                className: l().pro,
                                children: [a.Z.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                            }), (0, n.jsx)(c.Text, {
                                className: u()(l().tip, o),
                                variant: "text-sm/normal",
                                children: t
                            })]
                        })
                    };
                    return r
                }(o.PureComponent);
            m.Types = h;
            const v = m
        },
        413297: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function a(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    a = e.height,
                    s = void 0 === a ? 24 : a,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    d = e.foreground,
                    p = c(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({
                    viewBox: "0 0 24 24"
                }, (0, o.Z)(p)), {
                    width: r,
                    height: s,
                    children: [(0, n.jsx)("path", {
                        fill: f,
                        className: d,
                        d: "M9.09091 12C9.09091 13.5786 10.3935 14.8571 12 14.8571C13.6065 14.8571 14.9091 13.5786 14.9091 12C14.9091 10.4214 13.6065 9.14286 12 9.14286C10.3935 9.14286 9.09091 10.4214 9.09091 12ZM13.3402 12C13.3402 12.789 12.689 13.4286 11.8857 13.4286C11.0823 13.4286 10.4311 12.789 10.4311 12C10.4311 11.211 11.0823 10.5714 11.8857 10.5714C12.689 10.5714 13.3402 11.211 13.3402 12Z"
                    }), (0, n.jsx)("path", {
                        fill: f,
                        className: d,
                        d: "M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM4 12C4 12 7.38036 7 12 7C16.6196 7 20 12 20 12C20 12 16.6196 17 12 17C7.38036 17 4 12 4 12Z"
                    })]
                }))
            }
        }
    }
]);