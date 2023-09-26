"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [13255], {
        599467: (e, t, r) => {
            r.d(t, {
                m: () => f
            });
            var n = r(883064),
                i = r(21825),
                o = r(25978);

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        a(e, t, r[t])
                    }))
                }
                return e
            }

            function s(e, t) {
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
            var l = s(c({}, n.Z.guildEventRules.link), {
                    react: (0, o.Z)({
                        enableBuildOverrides: !1,
                        mustConfirmExternalLink: !0
                    }).react
                }),
                u = s(c({}, n.Z.guildEventRules.channelMention), {
                    react: (0, i.Z)({
                        enableBuildOverrides: !1,
                        shouldCloseDefaultModals: !0,
                        shouldStopPropagation: !0
                    }).react
                }),
                f = n.Z.reactParserFor(s(c({}, n.Z.guildEventRules), {
                    link: l,
                    channelMention: u
                }))
        },
        32421: (e, t, r) => {
            r.d(t, {
                cS: () => o,
                xV: () => a,
                xC: () => c
            });
            r(61209);
            var n = r(3155);

            function i(e, t) {
                var r = null;
                e === n.WX.EXTERNAL && null != t && "location" in t && (r = t.location);
                return r
            }

            function o(e) {
                return i(e.entity_type, e.entity_metadata)
            }

            function a(e) {
                return i(e.entityType, e.entityMetadata)
            }

            function c(e) {
                return e === n.WX.VOICE || e === n.WX.STAGE_INSTANCE ? n.nz[e] : void 0
            }
        },
        371188: (e, t, r) => {
            r.d(t, {
                G3: () => o,
                Ib: () => a,
                ib: () => c,
                ub: () => u,
                v1: () => d,
                me: () => b
            });
            var n = r(730381),
                i = r.n(n),
                o = (r(3155), 365),
                a = o + 1,
                c = function() {
                    var e = i()().add(1, "hour"),
                        t = e.hour();
                    e.minutes() >= 30 && (t += 1);
                    return e.hour(t).minutes(0).seconds(0)
                };
            var s = function(e, t) {
                    return e.format(e.get("years") === t.get("years") ? "ddd MMM Do · LT" : "ddd MMM Do, YYYY · LT")
                },
                l = function(e, t) {
                    return e.diff(t, "days") > 1 ? s(e, t) : e.calendar(t)
                };

            function u(e, t, r) {
                null == r && (r = i()());
                var n = i()(e),
                    o = null != t && "" !== t ? i()(t) : void 0,
                    a = null != t && n.isSame(o, "day");
                return {
                    startDateTimeString: l(n, r),
                    endDateTimeString: null != o ? a ? o.format("LT") : s(o, r) : void 0,
                    currentOrPastEvent: n <= r,
                    upcomingEvent: n <= i()().add(1, "hour"),
                    withinStartWindow: n <= i()().add(15, "minute"),
                    diffMinutes: n.diff(r, "minutes")
                }
            }

            function f(e, t) {
                var r;
                if (null != e) {
                    r = {
                        startDate: i()(e),
                        endDate: void 0
                    };
                    null != t && (r.endDate = i()(t))
                }
                return r
            }

            function d(e) {
                return f(e.scheduledStartTime, e.scheduledEndTime)
            }

            function b(e) {
                return f(e.scheduled_start_time, e.scheduled_end_time)
            }
        },
        205316: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(874049),
                i = r(2590),
                o = r(734155);

            function a(e, t) {
                if (null == e.image) return null;
                null == t && (t = window.screen.width * (0, n.x_)());
                t = (0, n.oO)(t);
                var r, a = window.GLOBAL_ENV.CDN_HOST;
                if (null != a) {
                    var c;
                    r = "".concat(null !== (c = o.env.API_PROTOCOL) && void 0 !== c ? c : location.protocol, "//").concat(a, "/guild-events/").concat(e.id, "/").concat(e.image)
                } else r = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + i.ANM.GUILD_EVENT_IMAGE(e.id, e.image, "png");
                return r += "?size=".concat(t)
            }
        },
        314597: (e, t, r) => {
            r.d(t, {
                Z: () => b
            });
            var n = r(785893),
                i = r(667294),
                o = r(294184),
                a = r.n(o),
                c = r(599467),
                s = r(808985),
                l = r.n(s),
                u = r(169595),
                f = r.n(u);

            function d(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function b(e) {
                var t = e.description,
                    r = e.className,
                    o = e.guildId,
                    s = e.truncate,
                    u = void 0 === s || s,
                    b = i.useMemo((function() {
                        return (0, c.m)(t, !0, {
                            guildId: o
                        })
                    }), [t, o]);
                return (0, n.jsx)("div", {
                    className: a()(l().descriptionText, r, f().markup, d({}, l().truncate, u)),
                    children: b
                })
            }
        },
        699296: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                i = (r(667294), r(294184)),
                o = r.n(i),
                a = r(134104),
                c = r.n(a);

            function s(e) {
                var t = e.source,
                    r = e.className;
                return null == t ? null : (0, n.jsx)("div", {
                    className: o()(c().container, r),
                    style: {
                        backgroundImage: "url(".concat(t, ")")
                    }
                })
            }
        },
        220109: (e, t, r) => {
            r.d(t, {
                HZ: () => j,
                Rf: () => h,
                ZP: () => w
            });
            var n = r(785893),
                i = (r(667294), r(294184)),
                o = r.n(i),
                a = r(202351),
                c = r(304548),
                s = r(21372),
                l = r(816132),
                u = r(749565),
                f = r(314597),
                d = r(699296),
                b = r(616918),
                p = r(473708),
                O = r(876997),
                v = r.n(O);

            function m(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        m(e, t, r[t])
                    }))
                }
                return e
            }

            function g(e, t) {
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

            function j(e) {
                var t = e.className,
                    r = e.userCount,
                    i = e.creator,
                    f = e.startTime,
                    d = e.isActive,
                    O = e.isEnded,
                    m = e.guildId,
                    j = e.eventType,
                    h = e.isNew,
                    w = e.isHub,
                    x = void 0 !== w && w,
                    N = (0, a.e7)([s.ZP], (function() {
                        return s.ZP.getNick(m, null == i ? void 0 : i.id)
                    }), [m, i]);
                return (0, n.jsxs)("div", {
                    className: o()(v().statusContainer, t),
                    children: [(0, n.jsx)(b.z, {
                        startTime: f,
                        isActive: d,
                        isEnded: O,
                        eventType: j,
                        isNew: h
                    }), (0, n.jsx)("div", {
                        className: v().spacer
                    }), !x && null != i && (0, n.jsx)(c.Tooltip, {
                        text: p.Z.Messages.GUILD_EVENT_CREATED_BY.format({
                            username: null != N ? N : u.ZP.getName(i)
                        }),
                        children: function(e) {
                            return (0, n.jsx)(c.Avatar, g(y({}, e), {
                                src: i.getAvatarURL(m, 20),
                                size: c.AvatarSizes.SIZE_20,
                                "aria-label": null != N ? N : i.username,
                                className: v().creator
                            }))
                        }
                    }), null != r && (0,
                        n.jsx)(c.Tooltip, {
                        text: p.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                            count: r
                        }),
                        children: function(e) {
                            return (0, n.jsxs)("div", g(y({
                                className: v().rsvpCount
                            }, e), {
                                children: [(0, n.jsx)(l.Z, {
                                    width: 12,
                                    height: 12,
                                    className: v().rsvpIcon
                                }), (0, n.jsx)(c.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: r
                                })]
                            }))
                        }
                    })]
                })
            }

            function h(e) {
                var t = e.headerVariant,
                    r = void 0 === t ? "heading-lg/medium" : t,
                    i = e.descriptionClassName,
                    a = e.name,
                    s = e.description,
                    l = e.truncate,
                    u = e.guildId,
                    b = e.imageSource;
                return (0, n.jsxs)("div", {
                    className: o()(m({}, v().withThumbnail, null != b)),
                    children: [(0, n.jsxs)("div", {
                        className: o()(m({}, v().descriptionWithThumbnail, null != b)),
                        children: [(0, n.jsx)(c.Heading, {
                            variant: r,
                            selectable: !0,
                            className: v().eventName,
                            children: a
                        }), null != s && (0, n.jsx)(f.Z, {
                            description: s,
                            className: o()(i, v().description),
                            truncate: l,
                            guildId: u
                        })]
                    }), null != b && (0, n.jsx)("div", {
                        className: v().thumbnailContainer,
                        children: (0, n.jsx)(d.Z, {
                            source: b,
                            className: v().thumbnail
                        })
                    })]
                })
            }

            function w(e) {
                var t = e.headerVariant,
                    r = e.descriptionClassName,
                    i = e.userCount,
                    o = e.creator,
                    a = e.name,
                    c = e.description,
                    s = e.startTime,
                    l = e.imageSource,
                    u = e.isEnded,
                    f = e.eventType,
                    d = e.isActive,
                    b = e.isHub,
                    p = void 0 !== b && b,
                    O = e.truncate,
                    m = e.guildId,
                    y = e.isNew;
                return (0, n.jsxs)("div", {
                    className: v().container,
                    children: [(0, n.jsx)(j, {
                        className: v().eventInfoStatusContainer,
                        userCount: i,
                        creator: o,
                        startTime: s,
                        isActive: d,
                        isEnded: u,
                        guildId: m,
                        eventType: f,
                        isHub: p,
                        isNew: y
                    }), (0, n.jsx)(h, {
                        name: a,
                        description: c,
                        headerVariant: t,
                        descriptionClassName: r,
                        truncate: O,
                        guildId: m,
                        imageSource: l
                    })]
                })
            }
        },
        616918: (e, t, r) => {
            r.d(t, {
                z: () => E
            });
            var n = r(785893),
                i = r(667294),
                o = r(294184),
                a = r.n(o),
                c = r(795308),
                s = r(304548),
                l = r(890251),
                u = r(457997),
                f = r(531441),
                d = r(371188),
                b = r(3155),
                p = r(473708),
                O = r(215737),
                v = r.n(O);

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
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

            function g(e, t) {
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

            function j(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            a = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            i = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (c) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return m(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var h = 20;

            function w() {
                return (0, n.jsx)(f.IG, {
                    className: v().newBadge,
                    color: c.Z.unsafe_rawColors.BRAND_260.css,
                    text: (0, n.jsx)(s.Text, {
                        className: v().newBadgeText,
                        variant: "text-xs/bold",
                        children: p.Z.Messages.NEW
                    })
                })
            }

            function x(e) {
                var t = e.children,
                    r = e.className,
                    i = e.tooltipText;
                return (0, n.jsx)("div", {
                    className: v().eventStatusContainer,
                    children: (0, n.jsx)(s.Tooltip, {
                        position: "right",
                        text: i,
                        shouldShow: null != i,
                        children: function(e) {
                            return (0, n.jsx)("div", g(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    }))));
                                    n.forEach((function(t) {
                                        y(e, t, r[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                className: a()(v().eventStatusContainer, r),
                                children: t
                            }))
                        }
                    })
                })
            }

            function N(e) {
                var t = e.text,
                    r = e.endDateTimeString,
                    i = e.textVariant,
                    o = e.className,
                    a = e.isNew,
                    c = t;
                null != r && "" !== r && (c = p.Z.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                    start: t,
                    startHook: function(e) {
                        return (0, n.jsx)(s.Text, {
                            color: "text-positive",
                            variant: "text-sm/semibold",
                            className: v().liveEventEndTime,
                            children: e
                        })
                    },
                    end: r
                }));
                return (0, n.jsxs)(x, {
                    className: o,
                    children: [a ? (0, n.jsx)(w, {}) : (0, n.jsx)(l.Z, {
                        className: v().eventStatusGreen,
                        width: h,
                        height: h
                    }), (0, n.jsx)(s.Text, {
                        color: null == r ? "text-positive" : void 0,
                        variant: i,
                        className: v().eventStatusLabel,
                        children: c
                    })]
                })
            }

            function P(e) {
                var t = e.textVariant,
                    r = e.startDateTimeString,
                    i = e.className,
                    o = e.isNew;
                return (0, n.jsxs)(x, {
                    className: i,
                    tooltipText: r,
                    children: [o ? (0, n.jsx)(w, {}) : (0, n.jsx)(u.Z, {
                        className: v().eventStatusBrand,
                        width: h,
                        height: h
                    }), (0, n.jsx)(s.Text, {
                        color: "text-brand",
                        variant: t,
                        className: v().eventStatusLabel,
                        children: p.Z.Messages.STARTING_SOON
                    })]
                })
            }

            function S(e) {
                var t = e.minutesUntilStart,
                    r = e.textVariant,
                    i = e.className,
                    o = e.startDateTimeString,
                    a = e.isNew;
                return (0, n.jsxs)(x, {
                    className: i,
                    tooltipText: o,
                    children: [a ? (0, n.jsx)(w, {}) : (0, n.jsx)(l.Z, {
                        className: v().eventStatusBrand,
                        width: h,
                        height: h
                    }), (0, n.jsx)(s.Text, {
                        color: "text-brand",
                        variant: r,
                        className: v().eventStatusLabel,
                        children: t > 0 ? p.Z.Messages.STARTING_IN_MINUTES.format({
                            minutes: t
                        }) : p.Z.Messages.STARTING_SOON
                    })]
                })
            }

            function T(e) {
                var t = e.text,
                    r = e.textVariant,
                    i = e.className,
                    o = e.isNew;
                return (0, n.jsxs)(x, {
                    className: i,
                    children: [o ? (0, n.jsx)(w, {}) : (0, n.jsx)(l.Z, {
                        className: v().eventStatusBrand,
                        width: h,
                        height: h
                    }), (0, n.jsx)(s.Text, {
                        color: "header-secondary",
                        variant: r,
                        className: v().eventStatusLabel,
                        children: t
                    })]
                })
            }

            function E(e) {
                var t = e.startTime,
                    r = e.isActive,
                    o = e.isEnded,
                    a = e.eventType,
                    c = e.className,
                    s = e.endTime,
                    l = e.liveText,
                    u = e.textVariant,
                    f = void 0 === u ? "text-sm/semibold" : u,
                    O = e.isNew;
                null == l && (l = a === b.WX.EXTERNAL ? p.Z.Messages.STAGE_CHANNEL_HAPPENING_NOW : p.Z.Messages.STAGE_CHANNEL_LIVE_NOW);
                var v = j(i.useState((0, d.ub)(t, s)), 2),
                    m = v[0],
                    y = m.startDateTimeString,
                    g = m.endDateTimeString,
                    h = m.currentOrPastEvent,
                    w = m.upcomingEvent,
                    x = m.diffMinutes,
                    E = v[1];
                i.useEffect((function() {
                    E((0, d.ub)(t, s));
                    var e = setInterval((function() {
                        return E((0, d.ub)(t, s))
                    }), 1e3);
                    return function() {
                        clearInterval(e)
                    }
                }), [t, s]);
                var D = y;
                null != g && "" !== g && (D = p.Z.Messages.START_DATE_TO_END_DATE.format({
                    start: y,
                    end: g
                }));
                return r ? (0, n.jsx)(N, {
                    text: null != l ? l : "",
                    endDateTimeString: g,
                    textVariant: f,
                    className: c,
                    isNew: O
                }) : o ? (0, n.jsx)(T, {
                    text: D,
                    textVariant: f,
                    className: c
                }) : h ? (0, n.jsx)(P, {
                    startDateTimeString: y,
                    textVariant: f,
                    className: c,
                    isNew: O
                }) : w ? (0, n.jsx)(S, {
                    minutesUntilStart: x,
                    startDateTimeString: y,
                    textVariant: f,
                    className: c,
                    isNew: O
                }) : (0, n.jsx)(T, {
                    text: D,
                    textVariant: f,
                    className: c,
                    isNew: O
                })
            }
        },
        414392: (e, t, r) => {
            r.d(t, {
                Z: () => b
            });
            var n = r(785893),
                i = (r(667294), r(450520)),
                o = r(795308),
                a = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function s(e, t) {
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

            function l(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
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

            function d(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            const b = (0, i.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    c = e.color,
                    s = void 0 === c ? "currentColor" : c,
                    l = e.foreground,
                    b = d(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", f(function(e) {
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
                }({}, (0, a.Z)(b)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        className: l,
                        fill: s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    u = void 0 === i ? 24 : i,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    b = e.colorClass,
                    p = void 0 === b ? "" : b,
                    O = l(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M9.693 2.889a.623.623 0 0 0 .381-.43 2 2 0 0 1 3.852 0c.054.195.19.363.38.43A7.003 7.003 0 0 1 19 9.5v2.086a.5.5 0 0 0 .128.334l1.102 1.224a3 3 0 0 1 .77 2.007v.279c0 .668-.336 1.29-.946 1.564-1.315.593-4 1.506-8.054 1.506-4.055 0-6.74-.913-8.054-1.506C3.336 16.72 3 16.098 3 15.43v-.279a3 3 0 0 1 .77-2.007l1.102-1.224A.5.5 0 0 0 5 11.586V9.5a7.003 7.003 0 0 1 4.693-6.611Zm-.512 16.955A.16.16 0 0 0 9 20a3 3 0 1 0 6 0 .16.16 0 0 0-.18-.156c-.852.097-1.792.156-2.82.156a24.86 24.86 0 0 1-2.82-.156Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }))
        },
        746103: (e, t, r) => {
            r.d(t, {
                Z: () => b
            });
            var n = r(785893),
                i = (r(667294), r(450520)),
                o = r(795308),
                a = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function s(e, t) {
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

            function l(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
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

            function d(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            const b = (0, i.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    c = e.color,
                    s = void 0 === c ? "currentColor" : c,
                    l = d(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", f(function(e) {
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
                }({}, (0, a.Z)(l)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, n.jsx)("path", {
                        d: "M17 15.54V17.44C18.828 17.807 20 18.368 20 19C20 20.106 16.419 21 12 21C7.581 21 4 20.106 4 19C4 18.368 5.173 17.807 7 17.44V15.54C4.014 16.231 2 17.52 2 19C2 21.21 6.477 23 12 23C17.523 23 22 21.21 22 19C22 17.52 19.986 16.231 17 15.54Z",
                        fill: s
                    }), (0, n.jsx)("path", {
                        d: "M18 9C18 5.687 15.314 3 12 3C8.686 3 6 5.687 6 9C6 13 12 20 12 20C12 20 18 13 18 9ZM10 9C10 7.896 10.896 7 12 7C13.104 7 14 7.896 14 9C14 10.104 13.104 11 12 11C10.896 11 10 10.104 10 9Z",
                        fill: s
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    u = void 0 === i ? 24 : i,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    b = e.colorClass,
                    p = void 0 === b ? "" : b,
                    O = l(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 23c3 0 9-8.03 9-13a9 9 0 1 0-18 0c0 4.97 6 13 9 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }))
        }
    }
]);