(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [16051], {
        483683: (e, t, r) => {
            e.exports = r.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, t, r) => {
            e.exports = r.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        238823: (e, t, r) => {
            "use strict";
            r.d(t, {
                S: () => a
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
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

            function u(e, t) {
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
            var a = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    a = e.height,
                    s = void 0 === a ? 24 : a,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    O = u(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", l(function(e) {
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
                }({}, (0, i.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Zm-6 8a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }
        },
        937119: (e, t, r) => {
            "use strict";
            r.d(t, {
                c: () => p
            });
            var n = r(23279),
                o = r.n(n),
                i = r(281110),
                c = r(744564),
                l = r(612831),
                u = r(2590);

            function a(e, t, r, n, o, i, c) {
                try {
                    var l = e[i](c),
                        u = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(n, o)
            }
            var s, f, d = function(e, t) {
                    var r, n, o, i, c = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function l(i) {
                        return function(l) {
                            return function(i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    (n = 0,
                                        o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            c.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            c.label++;
                                            n = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = c.ops.pop();
                                            c.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                c.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && c.label < o[1]) {
                                                c.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && c.label < o[2]) {
                                                c.label = o[2];
                                                c.ops.push(i);
                                                break
                                            }
                                            o[2] && c.ops.pop();
                                            c.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, c)
                                } catch (e) {
                                    i = [6, e];
                                    n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, l])
                        }
                    }
                },
                p = o()((f = (s = function(e) {
                    var t;
                    return d(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                r.trys.push([0, 2, , 3]);
                                c.Z.dispatch({
                                    type: "EVENT_DIRECTORY_FETCH_START"
                                });
                                return [4, i.ZP.get({
                                    url: u.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
                                    query: {
                                        type: l.C2.GUILD_SCHEDULED_EVENT
                                    }
                                })];
                            case 1:
                                t = r.sent();
                                c.Z.dispatch({
                                    type: "EVENT_DIRECTORY_FETCH_SUCCESS",
                                    channelId: e,
                                    entries: t.body
                                });
                                return [3, 3];
                            case 2:
                                r.sent();
                                c.Z.dispatch({
                                    type: "EVENT_DIRECTORY_FETCH_FAILURE"
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(r, n) {
                        var o = s.apply(e, t);

                        function i(e) {
                            a(o, r, n, i, c, "next", e)
                        }

                        function c(e) {
                            a(o, r, n, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                }), function(e) {
                    return f.apply(this, arguments)
                }), 200)
        },
        79522: (e, t, r) => {
            "use strict";
            r.d(t, {
                AN: () => l,
                LK: () => u,
                TT: () => c
            });
            var n = r(940060),
                o = r(227202),
                i = r(2590),
                c = i.Plq.VIEW_CHANNEL,
                l = n.Z.combine(c, i.Plq.CONNECT),
                u = n.Z.combine(c, o.yP)
        },
        599467: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => f
            });
            var n = r(883064),
                o = r(21825),
                i = r(25978);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e) {
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
            var a = u(l({}, n.Z.guildEventRules.link), {
                    react: (0, i.Z)({
                        enableBuildOverrides: !1,
                        mustConfirmExternalLink: !0
                    }).react
                }),
                s = u(l({}, n.Z.guildEventRules.channelMention), {
                    react: (0, o.Z)({
                        enableBuildOverrides: !1,
                        shouldCloseDefaultModals: !0,
                        shouldStopPropagation: !0
                    }).react
                }),
                f = n.Z.reactParserFor(u(l({}, n.Z.guildEventRules), {
                    link: a,
                    channelMention: s
                }))
        },
        678545: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var n = r(667294),
                o = r(202351),
                i = r(787193),
                c = r(5544),
                l = r(567403),
                u = r(682776),
                a = r(2590);
            const s = function(e, t) {
                var r = (0, o.e7)([l.Z], (function() {
                        return l.Z.getGuild(e)
                    }), [e]),
                    s = (0, i.XJ)(r).canCreateGuildEvent,
                    f = (0, o.e7)([c.ZP], (function() {
                        return c.ZP.getChannels(e)[c.Zb]
                    }), [e]),
                    d = n.useMemo((function() {
                        return null != t ? f.filter((function(e) {
                            return e.channel.type === t
                        })) : f
                    }), [f, t]);
                return (0, o.e7)([u.Z], (function() {
                    if (u.Z.can(a.Plq.ADMINISTRATOR, r)) return !0;
                    if (s) return !0;
                    var e = !0,
                        t = !1,
                        n = void 0;
                    try {
                        for (var o, c = d[Symbol.iterator](); !(e = (o = c.next()).done); e = !0) {
                            var l = o.value.channel;
                            if ((0, i.Gw)(l).canCreateGuildEvent) return !0
                        }
                    } catch (e) {
                        t = !0;
                        n = e
                    } finally {
                        try {
                            e || null == c.return || c.return()
                        } finally {
                            if (t) throw n
                        }
                    }
                    return !1
                }), [d, r, s])
            }
        },
        205316: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => c
            });
            var n = r(874049),
                o = r(2590),
                i = r(734155);

            function c(e, t) {
                if (null == e.image) return null;
                null == t && (t = window.screen.width * (0, n.x_)());
                t = (0, n.oO)(t);
                var r, c = window.GLOBAL_ENV.CDN_HOST;
                if (null != c) {
                    var l;
                    r = "".concat(null !== (l = i.env.API_PROTOCOL) && void 0 !== l ? l : location.protocol, "//").concat(c, "/guild-events/").concat(e.id, "/").concat(e.image)
                } else r = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + o.ANM.GUILD_EVENT_IMAGE(e.id, e.image, "png");
                return r += "?size=".concat(t)
            }
        },
        314597: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                c = r.n(i),
                l = r(599467),
                u = r(808985),
                a = r.n(u),
                s = r(169595),
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

            function p(e) {
                var t = e.description,
                    r = e.className,
                    i = e.guildId,
                    u = e.truncate,
                    s = void 0 === u || u,
                    p = o.useMemo((function() {
                        return (0, l.m)(t, !0, {
                            guildId: i
                        })
                    }), [t, i]);
                return (0, n.jsx)("div", {
                    className: c()(a().descriptionText, r, f().markup, d({}, a().truncate, s)),
                    children: p
                })
            }
        },
        699296: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = r(134104),
                l = r.n(c);

            function u(e) {
                var t = e.source,
                    r = e.className;
                return null == t ? null : (0, n.jsx)("div", {
                    className: i()(l().container, r),
                    style: {
                        backgroundImage: "url(".concat(t, ")")
                    }
                })
            }
        },
        220109: (e, t, r) => {
            "use strict";
            r.d(t, {
                HZ: () => m,
                Rf: () => E,
                ZP: () => w
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = r(202351),
                l = r(70418),
                u = r(21372),
                a = r(816132),
                s = r(749565),
                f = r(269300),
                d = r(314597),
                p = r(699296),
                b = r(616918),
                O = r(473708),
                v = r(876997),
                y = r.n(v);

            function g(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        g(e, t, r[t])
                    }))
                }
                return e
            }

            function j(e, t) {
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

            function m(e) {
                var t = e.className,
                    r = e.creator,
                    o = e.guildId,
                    d = e.isNew,
                    p = e.isHub,
                    v = void 0 !== p && p,
                    g = e.guildEventId,
                    m = e.eventPreview,
                    E = (0, c.e7)([f.ZP], (function() {
                        return f.ZP.getGuildScheduledEvent(g)
                    })),
                    w = null != E ? E : m,
                    P = (0, c.e7)([u.ZP], (function() {
                        return u.ZP.getNick(o, null == r ? void 0 : r.id)
                    }), [o, r]);
                if (null == w) return null;
                var C = w.entity_type,
                    N = w.status,
                    S = w.scheduled_start_time,
                    T = w.user_count,
                    x = void 0 === T ? 1 : T,
                    D = w.recurrence_rule;
                return (0, n.jsxs)("div", {
                    className: i()(y().statusContainer, t),
                    children: [(0, n.jsx)(b.z, {
                        startTime: S,
                        status: N,
                        eventType: C,
                        isNew: d,
                        recurrenceRule: D
                    }), (0, n.jsx)("div", {
                        className: y().spacer
                    }), !v && null != r && (0, n.jsx)(l.Tooltip, {
                        text: O.Z.Messages.GUILD_EVENT_CREATED_BY.format({
                            username: null != P ? P : s.ZP.getName(r)
                        }),
                        children: function(e) {
                            return (0, n.jsx)(l.Avatar, j(h({}, e), {
                                src: r.getAvatarURL(o, 20),
                                size: l.AvatarSizes.SIZE_20,
                                "aria-label": null != P ? P : r.username,
                                className: y().creator
                            }))
                        }
                    }), null != x && (0, n.jsx)(l.Tooltip, {
                        text: O.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                            count: x
                        }),
                        children: function(e) {
                            return (0, n.jsxs)("div", j(h({
                                className: y().rsvpCount
                            }, e), {
                                children: [(0, n.jsx)(a.Z, {
                                    width: 12,
                                    height: 12,
                                    className: y().rsvpIcon
                                }), (0, n.jsx)(l.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: x
                                })]
                            }))
                        }
                    })]
                })
            }

            function E(e) {
                var t = e.headerVariant,
                    r = void 0 === t ? "heading-lg/medium" : t,
                    o = e.descriptionClassName,
                    c = e.name,
                    u = e.description,
                    a = e.truncate,
                    s = e.guildId,
                    f = e.imageSource;
                return (0, n.jsxs)("div", {
                    className: i()(g({}, y().withThumbnail, null != f)),
                    children: [(0, n.jsxs)("div", {
                        className: i()(g({}, y().descriptionWithThumbnail, null != f)),
                        children: [(0, n.jsx)(l.Heading, {
                            variant: r,
                            selectable: !0,
                            className: y().eventName,
                            children: c
                        }), null != u && (0, n.jsx)(d.Z, {
                            description: u,
                            className: i()(o, y().description),
                            truncate: a,
                            guildId: s
                        })]
                    }), null != f && (0, n.jsx)("div", {
                        className: y().thumbnailContainer,
                        children: (0, n.jsx)(p.Z, {
                            source: f,
                            className: y().thumbnail
                        })
                    })]
                })
            }

            function w(e) {
                var t = e.headerVariant,
                    r = e.descriptionClassName,
                    o = e.creator,
                    i = e.name,
                    c = e.description,
                    l = e.imageSource,
                    u = e.isHub,
                    a = void 0 !== u && u,
                    s = e.truncate,
                    f = e.guildId,
                    d = e.isNew,
                    p = e.guildEventId,
                    b = e.eventPreview;
                return (0, n.jsxs)("div", {
                    className: y().container,
                    children: [(0, n.jsx)(m, {
                        className: y().eventInfoStatusContainer,
                        creator: o,
                        guildId: f,
                        isHub: a,
                        isNew: d,
                        guildEventId: p,
                        eventPreview: b
                    }), (0, n.jsx)(E, {
                        name: i,
                        description: c,
                        headerVariant: t,
                        descriptionClassName: r,
                        truncate: s,
                        guildId: f,
                        imageSource: l
                    })]
                })
            }
        },
        197307: (e, t, r) => {
            "use strict";
            r.d(t, {
                l: () => n
            });
            var n = (0, r(38736).Z)((function(e) {
                return {
                    canCloseModal: !0,
                    onUpdateCanCloseModal: function(t) {
                        e({
                            canCloseModal: t
                        })
                    }
                }
            }))
        },
        616918: (e, t, r) => {
            "use strict";
            r.d(t, {
                z: () => N
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                c = r.n(i),
                l = r(795308),
                u = r(70418),
                a = r(795470),
                s = r(890251),
                f = r(457997),
                d = r(531441),
                p = r(610030),
                b = r(3155),
                O = r(520453),
                v = r(473708),
                y = r(215737),
                g = r.n(y);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function j(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function m(e, t) {
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

            function E(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            c = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(c = (n = r.next()).done); c = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var w;
            ! function(e) {
                e[e.SCHEDULED = 0] = "SCHEDULED";
                e[e.STARTING_SOON = 1] = "STARTING_SOON";
                e[e.READY = 2] = "READY";
                e[e.STARTED = 3] = "STARTED";
                e[e.ENDED = 4] = "ENDED"
            }(w || (w = {}));

            function P() {
                return (0, n.jsx)(d.IG, {
                    className: g().newBadge,
                    color: l.Z.unsafe_rawColors.BRAND_260.css,
                    text: (0, n.jsx)(u.Text, {
                        className: g().newBadgeText,
                        variant: "text-xs/bold",
                        children: v.Z.Messages.NEW
                    })
                })
            }

            function C(e) {
                var t = e.children,
                    r = e.className,
                    o = e.tooltipText;
                return (0, n.jsx)("div", {
                    className: g().eventStatusContainer,
                    children: (0, n.jsx)(u.Tooltip, {
                        position: "right",
                        text: o,
                        shouldShow: null != o,
                        children: function(e) {
                            return (0, n.jsx)("div", m(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    }))));
                                    n.forEach((function(t) {
                                        j(e, t, r[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                className: c()(g().eventStatusContainer, r),
                                children: t
                            }))
                        }
                    })
                })
            }

            function N(e) {
                var t = e.startTime,
                    r = e.status,
                    i = e.eventType,
                    l = e.className,
                    d = e.endTime,
                    y = e.liveText,
                    h = e.textVariant,
                    m = void 0 === h ? "text-sm/semibold" : h,
                    N = e.isNew,
                    S = e.recurrenceRule,
                    T = (0, a.O0)(O.tP.TEXT_BRAND),
                    x = (0, a.O0)(O.tP.TEXT_POSITIVE);
                null == y && (y = i === b.WX.EXTERNAL ? v.Z.Messages.STAGE_CHANNEL_HAPPENING_NOW : v.Z.Messages.STAGE_CHANNEL_LIVE_NOW);
                var D = E(o.useState((0, p.ub)(t, d)), 2),
                    A = D[0],
                    Z = A.startDateTimeString,
                    I = A.endDateTimeString,
                    _ = A.currentOrPastEvent,
                    R = A.upcomingEvent,
                    M = A.diffMinutes,
                    V = D[1];
                o.useEffect((function() {
                    V((0,
                        p.ub)(t, d));
                    var e = setInterval((function() {
                        return V((0, p.ub)(t, d))
                    }), 1e3);
                    return function() {
                        clearInterval(e)
                    }
                }), [t, d]);
                var k = Z;
                null != I && "" !== I && (k = v.Z.Messages.START_DATE_TO_END_DATE.format({
                    start: Z,
                    end: I
                }));
                var G = o.useMemo((function() {
                        return r === b.p1.ACTIVE ? w.STARTED : b.$I.has(r) ? w.ENDED : _ ? w.READY : R ? w.STARTING_SOON : w.SCHEDULED
                    }), [r, _, R]),
                    L = function(e, t, r, o, i) {
                        switch (e) {
                            case w.STARTING_SOON:
                                return i > 0 ? v.Z.Messages.STARTING_IN_MINUTES.format({
                                    minutes: i
                                }) : v.Z.Messages.STARTING_SOON;
                            case w.READY:
                                return v.Z.Messages.STARTING_SOON;
                            case w.STARTED:
                                return null != o && "" !== o ? v.Z.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                                    start: r,
                                    startHook: function(e) {
                                        return (0, n.jsx)(u.Text, {
                                            color: "text-positive",
                                            variant: "text-sm/semibold",
                                            className: g().liveEventEndTime,
                                            children: e
                                        })
                                    },
                                    end: o
                                }) : null != r ? r : "";
                            default:
                                return t
                        }
                    }(G, k, y, I, M),
                    H = o.useMemo((function() {
                        return function(e, t, r, n, o) {
                            var i, c = s.Z,
                                l = t,
                                u = "header-secondary";
                            switch (e) {
                                case w.STARTED:
                                    l = r;
                                    u = null != n ? void 0 : "text-positive";
                                    break;
                                case w.ENDED:
                                    c = f.Z;
                                    break;
                                case w.READY:
                                case w.STARTING_SOON:
                                    u = "text-brand";
                                    i = o
                            }
                            return {
                                Icon: c,
                                iconColor: l.hex,
                                textColor: u,
                                tooltipText: i
                            }
                        }(G, T, x, I, Z)
                    }), [G, T, x, I, Z]),
                    U = H.Icon,
                    B = H.iconColor,
                    F = H.textColor,
                    X = H.tooltipText,
                    Y = null;
                if (null != S) {
                    var z = (0, p.Ho)(S);
                    Y = v.Z.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
                        recurrenceRule: z.toText()
                    })
                }
                return (0, n.jsxs)(C, {
                    className: c()(l, j({}, g().isRecurring, null != Y)),
                    tooltipText: X,
                    children: [N ? (0, n.jsx)(P, {}) : (0, n.jsx)(U, {
                        color: B,
                        width: 20,
                        height: 20
                    }), (0, n.jsxs)("div", {
                        className: g().eventStatusLabel,
                        children: [(0, n.jsx)(u.Text, {
                            color: F,
                            variant: m,
                            children: L
                        }), null != Y && (0, n.jsx)(u.Text, {
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            children: Y
                        })]
                    })]
                })
            }
        },
        360703: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => u
            });
            var n = r(70418),
                o = r(26468),
                i = r(197307),
                c = r(2590),
                l = "guild-event-modal";
            const u = function() {
                var e = (0, o.bp)() === c.IlC.POPOUT ? n.POPOUT_MODAL_CONTEXT : n.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: l,
                    contextKey: e,
                    onCloseRequest: function() {
                        i.l.getState().canCloseModal && (0,
                            n.closeModal)(l, e)
                    }
                }
            }
        },
        172028: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = (0, r(260561).B)({
                kind: "guild",
                id: "2021-11_hub_events",
                label: "Hub Events",
                defaultConfig: {
                    showHubEventsList: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show Hub Events List",
                    config: {
                        showHubEventsList: !0
                    }
                }]
            })
        },
        350403: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => c
            });
            var n = r(202351),
                o = r(567403),
                i = r(2590);

            function c(e) {
                return (0, n.e7)([o.Z], (function() {
                    if (null == e) return !1;
                    var t, r = o.Z.getGuild(e);
                    return null !== (t = null == r ? void 0 : r.hasFeature(i.oNc.HUB)) && void 0 !== t && t
                }), [e])
            }
        },
        15970: (e, t, r) => {
            "use strict";
            r.d(t, {
                b: () => o
            });
            var n = r(2590);

            function o(e, t, r, o) {
                var i = null != r ? r : t;
                return null != i && e.can(n.Plq.CREATE_INSTANT_INVITE, i) || null != t && null != t.vanityURLCode || null != (null == o ? void 0 : o.invite_code)
            }
        },
        787193: (e, t, r) => {
            "use strict";
            r.d(t, {
                Gw: () => g,
                XJ: () => y,
                Yl: () => h
            });
            var n = r(667294),
                o = r(940060),
                i = r(202351),
                c = r(897436),
                l = r(848285),
                u = (r(5544), r(682776)),
                a = r(473903),
                s = (r(563135), r(79522)),
                f = r(520453);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function p(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            c = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(c = (n = r.next()).done); c = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
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
            var b = {
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
                        var o;
                        return n && null != t && (null === (o = e.user) || void 0 === o ? void 0 : o.id) === t.id
                    }
                    return !1
                },
                v = function(e) {
                    if (null == e) return [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS];
                    var t = s.TT;
                    e.isGuildStageVoice() ? t = s.LK : e.isGuildVoice() && (t = s.AN);
                    return [o.Z.combine(t, f.Pl.CREATE_EVENTS), o.Z.combine(t, f.Pl.MANAGE_EVENTS)]
                },
                y = function(e) {
                    var t = p(e instanceof l.Z ? [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS] : v(e), 2),
                        r = t[0],
                        o = t[1],
                        c = p((0, i.Wu)([u.Z], (function() {
                            return [u.Z.can(f.Pl.CREATE_GUILD_EXPRESSIONS, e), u.Z.can(f.Pl.MANAGE_GUILD_EXPRESSIONS, e), u.Z.can(r, e), u.Z.can(o, e)]
                        })), 4),
                        s = c[0],
                        d = c[1],
                        y = c[2],
                        g = c[3],
                        h = (0, i.e7)([a.default], (function() {
                            return a.default.getCurrentUser()
                        })),
                        j = n.useCallback((function(e) {
                            return O(e, h, d, s)
                        }), [s, d, h]),
                        m = n.useCallback((function(e) {
                            return O(e, h, g, y)
                        }), [g, y, h]);
                    return null == e ? b : {
                        canCreateExpressions: s,
                        canCreateGuildEvent: y,
                        canManageAllExpressions: d,
                        canManageAllEvents: g,
                        canManageGuildExpression: j,
                        canManageGuildEvent: m
                    }
                },
                g = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Z,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.default,
                        n = p(e instanceof l.Z ? [f.Pl.CREATE_EVENTS, f.Pl.MANAGE_EVENTS] : v(e), 2),
                        o = n[0],
                        i = n[1],
                        c = t.can(f.Pl.CREATE_GUILD_EXPRESSIONS, e),
                        s = t.can(f.Pl.MANAGE_GUILD_EXPRESSIONS, e),
                        d = t.can(o, e),
                        y = t.can(i, e),
                        g = r.getCurrentUser();
                    return null == e ? b : {
                        canCreateExpressions: c,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: s,
                        canManageAllEvents: y,
                        canManageGuildExpression: function(e) {
                            return O(e, g, s, c)
                        },
                        canManageGuildEvent: function(e) {
                            return O(e, g, y, d)
                        }
                    }
                },
                h = function(e) {
                    var t = (0, i.e7)([u.Z], (function() {
                            return u.Z.can(f.Pl.MANAGE_GUILD, e)
                        })),
                        r = (0, c.JY)({
                            guildId: null == e ? void 0 : e.id
                        }).showSettingsToggle;
                    return t && r
                }
        },
        367299: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => c
            });
            var n = r(785893),
                o = (r(667294), r(318715)),
                i = r(785085);

            function c(e) {
                var t = e.children,
                    r = e.confettiLocation;
                return (0, o.ZP)([i.Z], (function() {
                    return i.Z.isEnabled({
                        confettiLocation: r
                    })
                })) ? (0, n.jsx)(n.Fragment, {
                    children: t
                }) : null
            }
        },
        919031: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => u
            });
            var n = r(667294),
                o = r(318715),
                i = r(255875),
                c = r(785085);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u() {
                var e = n.useContext(i.E).createMultipleConfettiAt,
                    t = (0, o.ZP)([c.Z], (function() {
                        return c.Z.getState()
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
                    u = n.useMemo((function() {
                        return {
                            fire: function(n, o, i) {
                                var c, u, a = null != (null == i ? void 0 : i.settings) ? function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                l(e, t, r[t])
                                            }))
                                        }
                                        return e
                                    }({}, t, i.settings) : t,
                                    s = r(a);
                                e(n, o, s, (null !== (c = null == i ? void 0 : i.count) && void 0 !== c ? c : a.confettiCount) * (null !== (u = null == i ? void 0 : i.countMultiplier) && void 0 !== u ? u : 1), {
                                    sprite: null == i ? void 0 : i.sprite
                                })
                            }
                        }
                    }), [e, r, t]);
                return u
            }
        },
        832642: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = r(473708),
                l = r(300443),
                u = r.n(l),
                a = r(483683),
                s = r.n(a),
                f = r(63685),
                d = r.n(f);

            function p(e) {
                var t = e.className,
                    r = e.children;
                return (0, n.jsxs)("div", {
                    className: i()(u().container, t),
                    children: [(0, n.jsx)("img", {
                        alt: c.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: d(),
                        className: i()(u().sparkleIcon, u().sparkleBottom)
                    }), r, (0, n.jsx)("img", {
                        alt: c.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: s(),
                        className: i()(u().sparkleIcon, u().sparkleTop)
                    })]
                })
            }
        },
        414392: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(795308),
                c = r(633878);

            function l(e, t, r) {
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

            function s(e, t, r) {
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
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    u = void 0 === l ? "currentColor" : l,
                    a = e.foreground,
                    p = d(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            s(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(p)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        className: a,
                        fill: u,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    O = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M9.693 2.889a.623.623 0 0 0 .381-.43 2 2 0 0 1 3.852 0c.054.195.19.363.38.43A7.003 7.003 0 0 1 19 9.5v2.086a.5.5 0 0 0 .128.334l1.102 1.224a3 3 0 0 1 .77 2.007v.279c0 .668-.336 1.29-.946 1.564-1.315.593-4 1.506-8.054 1.506-4.055 0-6.74-.913-8.054-1.506C3.336 16.72 3 16.098 3 15.43v-.279a3 3 0 0 1 .77-2.007l1.102-1.224A.5.5 0 0 0 5 11.586V9.5a7.003 7.003 0 0 1 4.693-6.611Zm-.512 16.955A.16.16 0 0 0 9 20a3 3 0 1 0 6 0 .16.16 0 0 0-.18-.156c-.852.097-1.792.156-2.82.156a24.86 24.86 0 0 1-2.82-.156Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        },
        457997: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(66541),
                c = r(633878);

            function l(e, t, r) {
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
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 20 : t,
                    o = e.height,
                    i = void 0 === o ? 20 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(p)), {
                    width: r,
                    height: i,
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
            }), i.T)
        },
        746103: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(795308),
                c = r(633878);

            function l(e, t, r) {
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

            function s(e, t, r) {
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
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    u = void 0 === l ? "currentColor" : l,
                    a = d(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            s(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(a)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, n.jsx)("path", {
                        d: "M17 15.54V17.44C18.828 17.807 20 18.368 20 19C20 20.106 16.419 21 12 21C7.581 21 4 20.106 4 19C4 18.368 5.173 17.807 7 17.44V15.54C4.014 16.231 2 17.52 2 19C2 21.21 6.477 23 12 23C17.523 23 22 21.21 22 19C22 17.52 19.986 16.231 17 15.54Z",
                        fill: u
                    }), (0, n.jsx)("path", {
                        d: "M18 9C18 5.687 15.314 3 12 3C8.686 3 6 5.687 6 9C6 13 12 20 12 20C12 20 18 13 18 9ZM10 9C10 7.896 10.896 7 12 7C13.104 7 14 7.896 14 9C14 10.104 13.104 11 12 11C10.896 11 10 10.104 10 9Z",
                        fill: u
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    O = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 23c3 0 9-8.03 9-13a9 9 0 1 0-18 0c0 4.97 6 13 9 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        },
        961241: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(238823),
                c = r(633878);

            function l(e, t, r) {
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
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(p)), {
                    width: r,
                    height: i,
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
            }), i.S)
        }
    }
]);