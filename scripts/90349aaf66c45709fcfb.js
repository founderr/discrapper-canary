"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [90561], {
        79522: (e, t, r) => {
            r.d(t, {
                TT: () => a,
                AN: () => c,
                LK: () => l
            });
            var n = r(940060),
                i = r(227202),
                o = r(2590),
                a = o.Plq.VIEW_CHANNEL,
                c = n.Z.combine(a, o.Plq.CONNECT),
                l = n.Z.combine(a, i.yP)
        },
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

            function l(e, t) {
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
            var u = l(c({}, n.Z.guildEventRules.link), {
                    react: (0, o.Z)({
                        enableBuildOverrides: !1,
                        mustConfirmExternalLink: !0
                    }).react
                }),
                s = l(c({}, n.Z.guildEventRules.channelMention), {
                    react: (0, i.Z)({
                        enableBuildOverrides: !1,
                        shouldCloseDefaultModals: !0,
                        shouldStopPropagation: !0
                    }).react
                }),
                f = n.Z.reactParserFor(l(c({}, n.Z.guildEventRules), {
                    link: u,
                    channelMention: s
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
                ub: () => s,
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
            var l = function(e, t) {
                    return e.format(e.get("years") === t.get("years") ? "ddd MMM Do · LT" : "ddd MMM Do, YYYY · LT")
                },
                u = function(e, t) {
                    return e.diff(t, "days") > 1 ? l(e, t) : e.calendar(t)
                };

            function s(e, t, r) {
                null == r && (r = i()());
                var n = i()(e),
                    o = null != t && "" !== t ? i()(t) : void 0,
                    a = null != t && n.isSame(o, "day");
                return {
                    startDateTimeString: u(n, r),
                    endDateTimeString: null != o ? a ? o.format("LT") : l(o, r) : void 0,
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
                l = r(34637),
                u = r.n(l),
                s = r(913198),
                f = r.n(s);

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
                    l = e.truncate,
                    s = void 0 === l || l,
                    b = i.useMemo((function() {
                        return (0, c.m)(t, !0, {
                            guildId: o
                        })
                    }), [t, o]);
                return (0, n.jsx)("div", {
                    className: a()(u().descriptionText, r, f().markup, d({}, u().truncate, s)),
                    children: b
                })
            }
        },
        699296: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                i = (r(667294), r(294184)),
                o = r.n(i),
                a = r(828490),
                c = r.n(a);

            function l(e) {
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
                c = r(882723),
                l = r(21372),
                u = r(363582),
                s = r(749565),
                f = r(314597),
                d = r(699296),
                b = r(616918),
                p = r(473708),
                O = r(980216),
                v = r.n(O);

            function y(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function m(e) {
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
                    y = e.guildId,
                    j = e.eventType,
                    h = e.isNew,
                    w = e.isHub,
                    E = void 0 !== w && w,
                    P = (0, a.e7)([l.ZP], (function() {
                        return l.ZP.getNick(y, null == i ? void 0 : i.id)
                    }), [y, i]);
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
                    }), !E && null != i && (0, n.jsx)(c.Tooltip, {
                        text: p.Z.Messages.GUILD_EVENT_CREATED_BY.format({
                            username: null != P ? P : s.ZP.getName(i)
                        }),
                        children: function(e) {
                            return (0,
                                n.jsx)(c.Avatar, g(m({}, e), {
                                src: i.getAvatarURL(y, 20),
                                size: c.AvatarSizes.SIZE_20,
                                "aria-label": null != P ? P : i.username,
                                className: v().creator
                            }))
                        }
                    }), null != r && (0, n.jsx)(c.Tooltip, {
                        text: p.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                            count: r
                        }),
                        children: function(e) {
                            return (0, n.jsxs)("div", g(m({
                                className: v().rsvpCount
                            }, e), {
                                children: [(0, n.jsx)(u.Z, {
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
                    l = e.description,
                    u = e.truncate,
                    s = e.guildId,
                    b = e.imageSource;
                return (0, n.jsxs)("div", {
                    className: o()(y({}, v().withThumbnail, null != b)),
                    children: [(0, n.jsxs)("div", {
                        className: o()(y({}, v().descriptionWithThumbnail, null != b)),
                        children: [(0, n.jsx)(c.Heading, {
                            variant: r,
                            selectable: !0,
                            className: v().eventName,
                            children: a
                        }), null != l && (0, n.jsx)(f.Z, {
                            description: l,
                            className: o()(i, v().description),
                            truncate: u,
                            guildId: s
                        })]
                    }), null != b && (0,
                        n.jsx)("div", {
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
                    l = e.startTime,
                    u = e.imageSource,
                    s = e.isEnded,
                    f = e.eventType,
                    d = e.isActive,
                    b = e.isHub,
                    p = void 0 !== b && b,
                    O = e.truncate,
                    y = e.guildId,
                    m = e.isNew;
                return (0, n.jsxs)("div", {
                    className: v().container,
                    children: [(0, n.jsx)(j, {
                        className: v().eventInfoStatusContainer,
                        userCount: i,
                        creator: o,
                        startTime: l,
                        isActive: d,
                        isEnded: s,
                        guildId: y,
                        eventType: f,
                        isHub: p,
                        isNew: m
                    }), (0, n.jsx)(h, {
                        name: a,
                        description: c,
                        headerVariant: t,
                        descriptionClassName: r,
                        truncate: O,
                        guildId: y,
                        imageSource: u
                    })]
                })
            }
        },
        616918: (e, t, r) => {
            r.d(t, {
                z: () => C
            });
            var n = r(785893),
                i = r(667294),
                o = r(294184),
                a = r.n(o),
                c = r(795308),
                l = r(882723),
                u = r(570202),
                s = r(457997),
                f = r(531441),
                d = r(371188),
                b = r(3155),
                p = r(473708),
                O = r(488589),
                v = r.n(O);

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function m(e, t, r) {
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
                    if ("string" == typeof e) return y(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var h = 20;

            function w() {
                return (0, n.jsx)(f.IG, {
                    className: v().newBadge,
                    color: c.Z.unsafe_rawColors.BRAND_260.css,
                    text: (0, n.jsx)(l.Text, {
                        className: v().newBadgeText,
                        variant: "text-xs/bold",
                        children: p.Z.Messages.NEW
                    })
                })
            }

            function E(e) {
                var t = e.children,
                    r = e.className,
                    i = e.tooltipText;
                return (0, n.jsx)("div", {
                    className: v().eventStatusContainer,
                    children: (0, n.jsx)(l.Tooltip, {
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
                                        m(e, t, r[t])
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

            function P(e) {
                var t = e.text,
                    r = e.endDateTimeString,
                    i = e.textVariant,
                    o = e.className,
                    a = e.isNew,
                    c = t;
                null != r && "" !== r && (c = p.Z.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                    start: t,
                    startHook: function(e) {
                        return (0, n.jsx)(l.Text, {
                            color: "text-positive",
                            variant: "text-sm/semibold",
                            className: v().liveEventEndTime,
                            children: e
                        })
                    },
                    end: r
                }));
                return (0, n.jsxs)(E, {
                    className: o,
                    children: [a ? (0, n.jsx)(w, {}) : (0, n.jsx)(u.Z, {
                        className: v().eventStatusGreen,
                        width: h,
                        height: h
                    }), (0, n.jsx)(l.Text, {
                        color: null == r ? "text-positive" : void 0,
                        variant: i,
                        className: v().eventStatusLabel,
                        children: c
                    })]
                })
            }

            function x(e) {
                var t = e.textVariant,
                    r = e.startDateTimeString,
                    i = e.className,
                    o = e.isNew;
                return (0,
                    n.jsxs)(E, {
                    className: i,
                    tooltipText: r,
                    children: [o ? (0, n.jsx)(w, {}) : (0, n.jsx)(s.Z, {
                        className: v().eventStatusBrand,
                        width: h,
                        height: h
                    }), (0, n.jsx)(l.Text, {
                        color: "text-brand",
                        variant: t,
                        className: v().eventStatusLabel,
                        children: p.Z.Messages.STARTING_SOON
                    })]
                })
            }

            function N(e) {
                var t = e.minutesUntilStart,
                    r = e.textVariant,
                    i = e.className,
                    o = e.startDateTimeString,
                    a = e.isNew;
                return (0, n.jsxs)(E, {
                    className: i,
                    tooltipText: o,
                    children: [a ? (0, n.jsx)(w, {}) : (0, n.jsx)(u.Z, {
                        className: v().eventStatusBrand,
                        width: h,
                        height: h
                    }), (0, n.jsx)(l.Text, {
                        color: "text-brand",
                        variant: r,
                        className: v().eventStatusLabel,
                        children: t > 0 ? p.Z.Messages.STARTING_IN_MINUTES.format({
                            minutes: t
                        }) : p.Z.Messages.STARTING_SOON
                    })]
                })
            }

            function S(e) {
                var t = e.text,
                    r = e.textVariant,
                    i = e.className,
                    o = e.isNew;
                return (0, n.jsxs)(E, {
                    className: i,
                    children: [o ? (0, n.jsx)(w, {}) : (0, n.jsx)(u.Z, {
                        className: v().eventStatusBrand,
                        width: h,
                        height: h
                    }), (0, n.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: r,
                        className: v().eventStatusLabel,
                        children: t
                    })]
                })
            }

            function C(e) {
                var t = e.startTime,
                    r = e.isActive,
                    o = e.isEnded,
                    a = e.eventType,
                    c = e.className,
                    l = e.endTime,
                    u = e.liveText,
                    s = e.textVariant,
                    f = void 0 === s ? "text-sm/semibold" : s,
                    O = e.isNew;
                null == u && (u = a === b.WX.EXTERNAL ? p.Z.Messages.STAGE_CHANNEL_HAPPENING_NOW : p.Z.Messages.STAGE_CHANNEL_LIVE_NOW);
                var v = j(i.useState((0, d.ub)(t, l)), 2),
                    y = v[0],
                    m = y.startDateTimeString,
                    g = y.endDateTimeString,
                    h = y.currentOrPastEvent,
                    w = y.upcomingEvent,
                    E = y.diffMinutes,
                    C = v[1];
                i.useEffect((function() {
                    C((0, d.ub)(t, l));
                    var e = setInterval((function() {
                        return C((0, d.ub)(t, l))
                    }), 1e3);
                    return function() {
                        clearInterval(e)
                    }
                }), [t, l]);
                var T = m;
                null != g && "" !== g && (T = p.Z.Messages.START_DATE_TO_END_DATE.format({
                    start: m,
                    end: g
                }));
                return r ? (0, n.jsx)(P, {
                    text: null != u ? u : "",
                    endDateTimeString: g,
                    textVariant: f,
                    className: c,
                    isNew: O
                }) : o ? (0, n.jsx)(S, {
                    text: T,
                    textVariant: f,
                    className: c
                }) : h ? (0, n.jsx)(x, {
                    startDateTimeString: m,
                    textVariant: f,
                    className: c,
                    isNew: O
                }) : w ? (0, n.jsx)(N, {
                    minutesUntilStart: E,
                    startDateTimeString: m,
                    textVariant: f,
                    className: c,
                    isNew: O
                }) : (0, n.jsx)(S, {
                    text: T,
                    textVariant: f,
                    className: c,
                    isNew: O
                })
            }
        },
        787193: (e, t, r) => {
            r.d(t, {
                XJ: () => y,
                Gw: () => m,
                Yl: () => g
            });
            var n = r(667294),
                i = r(940060),
                o = r(202351),
                a = r(897436),
                c = r(848285),
                l = (r(5544), r(682776)),
                u = r(473903),
                s = (r(563135), r(79522)),
                f = r(520453);

            function d(e, t) {
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
                    if ("string" == typeof e) return d(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: function() {
                        return !1
                    },
                    canManageGuildEvent: function() {
                        return !1
                    }
                },
                O = function(e, t, r, n) {
                    if (null == e) return !1;
                    if (r) return !0;
                    if ("creator_id" in e) return n && null != t && e.creator_id === t.id;
                    if ("userId" in e) return n && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var i;
                        return n && null != t && (null === (i = e.user) || void 0 === i ? void 0 : i.id) === t.id
                    }
                    return !1
                },
                v = function(e) {
                    if (null == e) return [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS];
                    var t = s.TT;
                    e.isGuildStageVoice() ? t = s.LK : e.isGuildVoice() && (t = s.AN);
                    return [i.Z.combine(t, f.Pl.CREATE_EVENTS), i.Z.combine(t, f.Pl.MANAGE_EVENTS)]
                },
                y = function(e) {
                    var t = b(e instanceof c.Z ? [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS] : v(e), 2),
                        r = t[0],
                        i = t[1],
                        a = b((0, o.Wu)([l.Z], (function() {
                            return [l.Z.can(f.Pl.CREATE_GUILD_EXPRESSIONS, e), l.Z.can(f.Pl.MANAGE_GUILD_EXPRESSIONS, e), l.Z.can(r, e), l.Z.can(i, e)]
                        })), 4),
                        s = a[0],
                        d = a[1],
                        y = a[2],
                        m = a[3],
                        g = (0, o.e7)([u.default], (function() {
                            return u.default.getCurrentUser()
                        })),
                        j = n.useCallback((function(e) {
                            return O(e, g, d, s)
                        }), [s, d, g]),
                        h = n.useCallback((function(e) {
                            return O(e, g, m, y)
                        }), [m, y, g]);
                    return null == e ? p : {
                        canCreateExpressions: s,
                        canCreateGuildEvent: y,
                        canManageAllExpressions: d,
                        canManageAllEvents: m,
                        canManageGuildExpression: j,
                        canManageGuildEvent: h
                    }
                },
                m = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default,
                        n = b(e instanceof c.Z ? [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS] : v(e), 2),
                        i = n[0],
                        o = n[1],
                        a = t.can(f.Pl.CREATE_GUILD_EXPRESSIONS, e),
                        s = t.can(f.Pl.MANAGE_GUILD_EXPRESSIONS, e),
                        d = t.can(i, e),
                        y = t.can(o, e),
                        m = r.getCurrentUser();
                    return null == e ? p : {
                        canCreateExpressions: a,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: s,
                        canManageAllEvents: y,
                        canManageGuildExpression: function(e) {
                            return O(e, m, s, a)
                        },
                        canManageGuildEvent: function(e) {
                            return O(e, m, y, d)
                        }
                    }
                },
                g = function(e) {
                    var t = (0, o.e7)([l.Z], (function() {
                            return l.Z.can(f.Pl.MANAGE_GUILD, e)
                        })),
                        r = (0, a.JY)(null == e ? void 0 : e.id).showSettingsToggle;
                    return t && r
                }
        },
        367299: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                i = (r(667294), r(318715)),
                o = r(785085);

            function a(e) {
                var t = e.children,
                    r = e.confettiLocation;
                return (0, i.ZP)([o.Z], (function() {
                    return o.Z.isEnabled({
                        confettiLocation: r
                    })
                })) ? (0, n.jsx)(n.Fragment, {
                    children: t
                }) : null
            }
        },
        919031: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(667294),
                i = r(318715),
                o = r(255875),
                a = r(785085);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l() {
                var e = n.useContext(o.E).createMultipleConfettiAt,
                    t = (0, i.ZP)([a.Z], (function() {
                        return a.Z.getState()
                    })),
                    r = n.useCallback((function(e) {
                        return {
                            size: {
                                type: "static-random",
                                minValue: e.confettiSize - 7,
                                maxValue: e.confettiSize + 7
                            }
                        }
                    }), []),
                    l = n.useMemo((function() {
                        return {
                            fire: function(n, i, o) {
                                var a, l, u = null != (null == o ? void 0 : o.settings) ? function(e) {
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
                                    }({}, t, o.settings) : t,
                                    s = r(u);
                                e(n, i, s, (null !== (a = null == o ? void 0 : o.count) && void 0 !== a ? a : u.confettiCount) * (null !== (l = null == o ? void 0 : o.countMultiplier) && void 0 !== l ? l : 1), {
                                    sprite: null == o ? void 0 : o.sprite
                                })
                            }
                        }
                    }), [e, r, t]);
                return l
            }
        },
        312682: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                i = (r(667294), r(633878));

            function o(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
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

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    l = e.height,
                    u = void 0 === l ? 24 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    b = c(e, ["width", "height", "color", "foreground"]);
                return (0,
                    n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            o(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(b)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        className: d,
                        fill: f,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"
                    })
                }))
            }
        },
        457997: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                i = (r(667294), r(633878));

            function o(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
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

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 20 : t,
                    l = e.height,
                    u = void 0 === l ? 20 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    b = c(e, ["width", "height", "color", "foreground"]);
                return (0,
                    n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            o(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(b)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 20 20",
                    children: (0, n.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, n.jsx)("path", {
                            className: d,
                            fill: f,
                            d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                        })
                    })
                }))
            }
        },
        710674: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                i = (r(667294), r(633878));

            function o(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
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

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    l = e.height,
                    u = void 0 === l ? 24 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = c(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            o(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(d)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, n.jsx)("path", {
                        d: "M17 15.54V17.44C18.828 17.807 20 18.368 20 19C20 20.106 16.419 21 12 21C7.581 21 4 20.106 4 19C4 18.368 5.173 17.807 7 17.44V15.54C4.014 16.231 2 17.52 2 19C2 21.21 6.477 23 12 23C17.523 23 22 21.21 22 19C22 17.52 19.986 16.231 17 15.54Z",
                        fill: f
                    }), (0, n.jsx)("path", {
                        d: "M18 9C18 5.687 15.314 3 12 3C8.686 3 6 5.687 6 9C6 13 12 20 12 20C12 20 18 13 18 9ZM10 9C10 7.896 10.896 7 12 7C13.104 7 14 7.896 14 9C14 10.104 13.104 11 12 11C10.896 11 10 10.104 10 9Z",
                        fill: f
                    })]
                }))
            }
        },
        961241: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                i = (r(667294), r(633878));

            function o(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
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

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    l = e.height,
                    u = void 0 === l ? 24 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    b = c(e, ["width", "height", "color", "foreground"]);
                return (0,
                    n.jsxs)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            o(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(b)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                        className: d,
                        fill: f
                    }), (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                        className: d,
                        fill: f
                    })]
                }))
            }
        }
    }
]);