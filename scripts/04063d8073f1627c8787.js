"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [82932, 21375], {
        720502: (e, t, n) => {
            n.d(t, {
                F: () => s
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var s = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    s = e.height,
                    u = void 0 === s ? 24 : s,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    h = void 0 === d ? "" : d,
                    v = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            c(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(v)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.667c0 .123-.335.174-.39.063C21.11 12.708 20.203 12 19 12a3 3 0 0 0-2.701 1.693c-.09.185-.356.23-.48.066l-.469-.626a2 2 0 0 0-3.2 0l-2.223 2.964-.506-.633a1.5 1.5 0 0 0-2.342 0l-1.854 2.318A.75.75 0 0 0 5.81 19h5.69c.276 0 .495.226.542.498.167.956.812 1.683 1.688 2.113.111.054.06.389-.063.389H5a3 3 0 0 1-3-3V5Zm8.204.977c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }
        },
        678545: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(667294),
                o = n(202351),
                i = n(787193),
                c = n(5544),
                a = n(567403),
                l = n(682776),
                s = n(2590);
            const u = function(e, t) {
                var n = (0, o.e7)([a.Z], (function() {
                        return a.Z.getGuild(e)
                    }), [e]),
                    u = (0, i.XJ)(n).canCreateGuildEvent,
                    f = (0, o.e7)([c.ZP], (function() {
                        return c.ZP.getChannels(e)[c.Zb]
                    }), [e]),
                    p = r.useMemo((function() {
                        return null != t ? f.filter((function(e) {
                            return e.channel.type === t
                        })) : f
                    }), [f, t]);
                return (0, o.e7)([l.Z], (function() {
                    if (l.Z.can(s.Plq.ADMINISTRATOR, n)) return !0;
                    if (u) return !0;
                    var e = !0,
                        t = !1,
                        r = void 0;
                    try {
                        for (var o, c = p[Symbol.iterator](); !(e = (o = c.next()).done); e = !0) {
                            var a = o.value.channel;
                            if ((0, i.Gw)(a).canCreateGuildEvent) return !0
                        }
                    } catch (e) {
                        t = !0;
                        r = e
                    } finally {
                        try {
                            e || null == c.return || c.return()
                        } finally {
                            if (t) throw r
                        }
                    }
                    return !1
                }), [p, n, u])
            }
        },
        383495: (e, t, n) => {
            n.d(t, {
                Q: () => Z,
                Z: () => _
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                c = n.n(i),
                a = n(202351),
                l = n(882723),
                s = n(296916),
                u = n(344832),
                f = n(787193),
                p = n(682776),
                d = n(124251),
                h = n(746103),
                v = n(599467),
                O = n(619584),
                b = n(951687),
                y = n(699296),
                g = n(220109),
                m = n(26601),
                j = n(173764),
                w = n(3155),
                C = n(2590),
                P = n(473708),
                E = n(780875),
                N = n.n(E);

            function x(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        x(e, t, n[t])
                    }))
                }
                return e
            }

            function I(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var Z;
            ! function(e) {
                e[e.BANNER = 0] = "BANNER";
                e[e.THUMBNAIL = 1] = "THUMBNAIL"
            }(Z || (Z = {}));

            function R(e) {
                var t = e.channel,
                    n = e.onClick,
                    i = (0, f.XJ)(t).canManageAllEvents,
                    d = (0,
                        a.e7)([p.Z], (function() {
                        return !t.isGuildVocal() || p.Z.can(C.Plq.CONNECT, t)
                    }), [t]),
                    h = o.useMemo((function() {
                        return (0, s.Z)(t)
                    }), [t]),
                    v = (0, u.KS)(t);
                return (0, r.jsx)(l.Tooltip, {
                    text: P.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !d && null != n,
                    children: function(e) {
                        var o;
                        return (0, r.jsxs)(l.Clickable, I(S({}, e), {
                            className: c()(N().inline, N().channelContainer, (o = {}, x(o, N().channelContainerEnabled, d && null != n), x(o, N().channelContainerDisabled, !d && null != n), o)),
                            onClick: n,
                            children: [(0, r.jsx)(l.Tooltip, {
                                text: P.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                                shouldShow: i && h && d && null != n,
                                children: function(e) {
                                    return null != v ? (0, r.jsx)(v, I(S({}, e), {
                                        width: 20,
                                        height: 20,
                                        className: N().icon
                                    })) : null
                                }
                            }), (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: N().channelLocation,
                                children: t.name
                            })]
                        }))
                    }
                })
            }

            function T(e) {
                var t = e.guild,
                    n = e.channel,
                    o = e.onJoinClick,
                    i = e.handleLocationClick,
                    a = e.location,
                    s = e.isExternal;
                return e.isHub ? null == t ? (0, r.jsx)("div", {}) : (0, r.jsxs)("div", {
                    className: N().inline,
                    children: [(0,
                        r.jsx)(d.Z, {
                        className: N().guildIcon,
                        size: d.Z.Sizes.MINI,
                        active: !0,
                        guild: t
                    }), (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == t ? void 0 : t.name
                    })]
                }) : null != n ? (0, r.jsx)(R, {
                    channel: n,
                    onClick: o
                }) : (0, r.jsxs)(l.Clickable, {
                    className: N().inline,
                    onClick: i,
                    children: [(0, r.jsx)(h.Z, {
                        height: 20,
                        width: 20,
                        className: c()(N().channelContainer, N().icon)
                    }), (0, r.jsx)(l.Text, {
                        className: s ? N().externalLocation : N().channelLocation,
                        variant: "text-sm/normal",
                        children: (0, v.m)(a, !0)
                    })]
                })
            }

            function _(e) {
                var t, n = e.className,
                    o = e.guild,
                    i = e.channel,
                    a = e.creator,
                    s = e.userCount,
                    u = e.name,
                    f = e.entityType,
                    p = e.description,
                    d = e.startTime,
                    h = e.imageLocation,
                    v = void 0 === h ? Z.BANNER : h,
                    C = e.imageSource,
                    P = e.isActive,
                    E = e.isUserLurking,
                    S = e.isEnded,
                    I = e.isJoined,
                    R = void 0 !== I && I,
                    _ = e.isMember,
                    k = void 0 !== _ && _,
                    A = e.isHub,
                    D = void 0 !== A && A,
                    L = e.speakers,
                    M = e.speakerCount,
                    H = e.rsvped,
                    V = e.canInvite,
                    U = e.location,
                    F = e.truncate,
                    B = e.onContextMenu,
                    G = e.onJoinClick,
                    z = e.onJoinGuildClick,
                    q = e.onGoToGuildClick,
                    J = e.onRsvpClick,
                    W = e.onStartClick,
                    Y = e.onInviteClick,
                    K = e.onEndClick,
                    X = e.onClick,
                    Q = e.isNew,
                    $ = (0, O.Q)(i, f),
                    ee = f === w.WX.EXTERNAL,
                    te = ee ? function(e) {
                        return e.stopPropagation()
                    } : void 0;
                return (0, r.jsxs)(l.ClickableContainer, {
                    "aria-label": u,
                    onClick: X,
                    onContextMenu: B,
                    className: c()(N().card, (t = {}, x(t, N().joined, R), x(t, N().lurking, E), t), n),
                    children: [v === Z.BANNER && (0, r.jsx)(y.Z, {
                        source: C
                    }), (0, r.jsx)(g.ZP, {
                        userCount: s,
                        creator: a,
                        name: u,
                        description: p,
                        startTime: d,
                        imageSource: v === Z.THUMBNAIL ? C : null,
                        isActive: P,
                        isEnded: S,
                        truncate: F,
                        guildId: null == o ? void 0 : o.id,
                        eventType: f,
                        isHub: D,
                        isNew: Q
                    }), P && null != o && null != L && M > 0 && (0, r.jsx)(j.Z, {
                        guild: o,
                        speakers: L,
                        speakerCount: M,
                        className: N().spacing
                    }), (0, r.jsx)("hr", {
                        className: N().divider
                    }), (0, r.jsxs)("div", {
                        className: c()(N().inline, N().footer),
                        children: [(0, r.jsx)(T, {
                            guild: o,
                            channel: i,
                            onJoinClick: G,
                            handleLocationClick: te,
                            location: U,
                            isExternal: ee,
                            isHub: D
                        }), D ? (0, r.jsx)(m.Z, {
                            isActive: P,
                            isUserLurking: E,
                            isMember: k,
                            rsvped: H,
                            onRsvpClick: J,
                            onJoinGuildClick: z,
                            onGoToGuildClick: q,
                            guildName: null == o ? void 0 : o.name,
                            canInvite: V,
                            isChannelPublic: $,
                            onInviteClick: Y
                        }) : (0, r.jsx)(b.ZP, {
                            entityType: f,
                            isJoined: R,
                            isActive: P,
                            isUserLurking: E,
                            rsvped: H,
                            canInvite: V,
                            isChannelPublic: $,
                            onContextMenu: B,
                            onJoinClick: G,
                            onRsvpClick: J,
                            onStartClick: W,
                            onInviteClick: Y,
                            onEndClick: K
                        })]
                    })]
                })
            }
        },
        173764: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(882723),
                a = n(961241),
                l = n(473708),
                s = n(549099),
                u = n.n(s);

            function f(e) {
                var t = e.guild,
                    n = e.speakers,
                    o = e.speakerCount,
                    s = e.className,
                    f = n.slice(0, 5),
                    p = f.map((function(e) {
                        var n, o;
                        return (0, r.jsxs)("div", {
                            className: u().speakerContainer,
                            children: [(0, r.jsx)(c.Avatar, {
                                src: null == e || null === (n = e.user) || void 0 === n ? void 0 : n.getAvatarURL(t.id, 20),
                                size: c.AvatarSizes.SIZE_20,
                                className: u().avatar,
                                "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                            }), (0, r.jsx)("div", {
                                className: u().textInGridContainer,
                                children: (0, r.jsx)(c.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    className: u().textInGrid,
                                    children: null == e ? void 0 : e.userNick
                                })
                            })]
                        }, null == e || null === (o = e.user) || void 0 === o ? void 0 : o.id)
                    })),
                    d = o - f.length;
                return (0, r.jsxs)("div", {
                    className: i()(u().grid, s),
                    children: [p, d > 0 && (0, r.jsxs)("div", {
                        className: u().speakerContainer,
                        children: [(0, r.jsx)("div", {
                            className: u().iconMicrophone,
                            children: (0, r.jsx)(a.Z, {
                                height: 12
                            })
                        }), (0, r.jsx)(c.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: u().textInGrid,
                            children: l.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: d
                            })
                        })]
                    })]
                })
            }
        },
        115617: (e, t, n) => {
            n.d(t, {
                Kw: () => c,
                hv: () => a,
                Po: () => l
            });
            var r = n(744564),
                o = n(652591),
                i = n(2590);

            function c(e) {
                o.default.track(i.rMx.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                });
                r.Z.wait((function() {
                    r.Z.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                }))
            }

            function a(e, t) {
                r.Z.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function l(e) {
                r.Z.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        550254: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(202351),
                o = n(744564),
                i = n(113469),
                c = n(199790);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function s(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return u(e, t)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }
            var d = new Set,
                h = {};
            var v = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && u(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    if (null != e) {
                        Array.isArray(e.hiddenHotspots) && (d = new Set(e.hiddenHotspots));
                        null != e.hotspotOverrides && (h = e.hotspotOverrides)
                    }
                };
                r.hasHotspot = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && h[e];
                    return !c.a && (!i.s.isDisallowPopupsSet() && (n || !d.has(e)))
                };
                r.hasHiddenHotspot = function(e) {
                    return d.has(e)
                };
                r.getHotspotOverride = function(e) {
                    return h[e]
                };
                r.getState = function() {
                    return {
                        hiddenHotspots: d,
                        hotspotOverrides: h
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            v.displayName = "HotspotStore";
            v.persistKey = "hotspots";
            v.migrations = [function(e) {
                return {
                    hiddenHotspots: null != e ? e : [],
                    hotspotOverrides: {}
                }
            }];
            const O = new v(o.Z, {
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.hiddenHotspots;
                    d = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    var t = e.location;
                    if (d.has(t)) return !1;
                    d.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    var t = e.location,
                        n = e.enabled;
                    h[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    var t = e.location;
                    if (null == h[t]) return !1;
                    delete h[t]
                }
            })
        },
        422513: (e, t, n) => {
            n.d(t, {
                v6: () => r.v,
                Po: () => o.Po,
                Kw: () => o.Kw,
                hv: () => o.hv,
                qc: () => i.Z
            });
            var r = n(630670),
                o = n(115617),
                i = n(550254)
        },
        876003: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(575945),
                a = n(74535),
                l = n(795470),
                s = n(912250),
                u = n(655402),
                f = n(888291),
                p = n(2590),
                d = n(240162),
                h = n.n(d);

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        v(e, t, n[t])
                    }))
                }
                return e
            }

            function b(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var y = p.Ilk.PRIMARY_400,
                g = p.Ilk.PRIMARY_500;

            function m(e) {
                var t, n = e.enabled,
                    o = e.imageClassName,
                    p = e.iconWrapperClassName,
                    d = b(e, ["enabled", "imageClassName", "iconWrapperClassName"]),
                    m = (0, a.ZP)(),
                    j = (0, c.wj)(m) ? y : g,
                    w = {
                        height: 18,
                        width: 18,
                        color: (0, l.Lq)(j)
                    };
                return (0, r.jsx)(f.Z, O({
                    className: i()((t = {}, v(t, h().avatarUploader, n), v(t, h().avatarUploaderDisabled, !n), t)),
                    imageClassName: i()(o, h().avatarUploaderInnerSquare, v({}, h().avatarUploaderInnerSquareDisabled, !n)),
                    icon: null != d.image && "" !== d.image ? (0, r.jsx)(s.Z, O({}, w)) : (0, r.jsx)(u.Z, O({}, w)),
                    iconClassName: i()(h().avatarUploadIcon, h().hideDefaultIcon),
                    iconWrapperClassName: p,
                    showIcon: !0,
                    showIconDisabled: !0,
                    hideSize: !0
                }, d))
            }
        },
        888291: (e, t, n) => {
            n.d(t, {
                S: () => E,
                Z: () => x
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                c = n.n(i),
                a = n(441143),
                l = n.n(a),
                s = n(882723),
                u = n(421281),
                f = n(694755),
                p = n(2590),
                d = n(473708),
                h = n(326726),
                v = n.n(h);

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        b(e, t, n[t])
                    }))
                }
                return e
            }

            function m(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function j(e, t) {
                return !t || "object" !== C(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function w(e, t) {
                w = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return w(e, t)
            }
            var C = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function P(e) {
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
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return j(this, n)
                }
            }

            function E(e) {
                var t = e.className,
                    n = e.icon,
                    o = void 0 === n ? null : n;
                return (0,
                    r.jsx)("div", {
                    className: c()(v().imageUploaderIcon, t),
                    children: o
                })
            }
            var N = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && w(e, t)
                }(n, e);
                var t = P(n);

                function n() {
                    O(this, n);
                    var e;
                    (e = t.apply(this, arguments)).inputRef = o.createRef();
                    e.handleRemove = function() {
                        e.props.onChange(null)
                    };
                    return e
                }
                var i = n.prototype;
                i.handleExternalFileChange = function(e) {
                    l()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted");
                    this.inputRef.current.handleFileChange(e)
                };
                i.render = function() {
                    var e, t, n, o, i, a = this.props,
                        l = a.image,
                        h = a.hint,
                        O = a.name,
                        b = a.makeURL,
                        y = a.disabled,
                        j = a.onChange,
                        w = a.showIcon,
                        C = a.showIconDisabled,
                        P = a.className,
                        N = a.imageClassName,
                        x = a.iconClassName,
                        S = a.iconWrapperClassName,
                        I = a.icon,
                        Z = a.hideSize,
                        R = a.imageStyle,
                        T = a.showRemoveButton,
                        _ = a.maxFileSizeBytes,
                        k = a.onFileSizeError,
                        A = a.onOpenImageSelectModal,
                        D = a["aria-label"];
                    null != (e = null != l && /^data:/.test(l) ? l : b(l)) ? t = 'url("'.concat(e, '")') : null != O && (n = (0, r.jsx)("div", {
                        className: v().imageUploaderAcronym,
                        children: (0, u.Zg)(O)
                    }));
                    if (y) return (0, r.jsx)("div", {
                        className: c()(v().imageUploader, v().disabled, P),
                        children: (0, r.jsxs)("div", {
                            className: c()(v().imageUploaderInner, N),
                            style: m(g({}, R), {
                                backgroundImage: t
                            }),
                            children: [n, C && (0, r.jsx)("div", {
                                className: c()(v().imageUploaderIcon, v().imageUploaderIconDisabled, x),
                                children: I
                            })]
                        })
                    });
                    null != l ? o = (0, r.jsx)(s.Anchor, {
                        className: v().removeButton,
                        onClick: this.handleRemove,
                        children: d.Z.Messages.REMOVE
                    }) : Z || (o = (0, r.jsx)("small", {
                        className: v().sizeInfo,
                        children: d.Z.Messages.MINIMUM_SIZE.format({
                            size: p.IXf
                        })
                    }));
                    var L = null !== (i = null != D ? D : h) && void 0 !== i ? i : d.Z.Messages.CHANGE_AVATAR;
                    return (0, r.jsxs)("div", {
                        className: c()(v().imageUploader, P),
                        children: [(0, r.jsx)(s.FocusRing, {
                            within: !0,
                            children: (0, r.jsxs)("div", {
                                className: w ? c()(v().imageUploaderIconWrapper, S) : void 0,
                                children: [(0, r.jsxs)("div", {
                                    className: c()(v().imageUploaderInner, N),
                                    style: m(g({}, R), {
                                        backgroundImage: t
                                    }),
                                    children: [(0, r.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: n
                                    }), null != A ? (0, r.jsx)(s.Clickable, {
                                        className: v().imageUploaderFileInput,
                                        "aria-label": L,
                                        onClick: A
                                    }) : (0, r.jsx)(f.ZP, {
                                        ref: this.inputRef,
                                        onChange: j,
                                        className: v().imageUploaderFileInput,
                                        "aria-label": L,
                                        tabIndex: 0,
                                        maxFileSizeBytes: _,
                                        onFileSizeError: k
                                    })]
                                }), null != h && (0, r.jsx)("div", {
                                    className: v().imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: h
                                }), w && (0, r.jsx)(E, {
                                    className: x,
                                    icon: I
                                })]
                            })
                        }), T ? o : null]
                    })
                };
                return n
            }(o.PureComponent);
            N.defaultProps = {
                name: "",
                makeURL: function(e) {
                    return e
                },
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            const x = N
        },
        796909: (e, t, n) => {
            n.d(t, {
                Z: () => L
            });
            var r = n(730381),
                o = n.n(r),
                i = n(202351),
                c = n(575626),
                a = n(744564),
                l = n(339432),
                s = n(112328),
                u = n(996344),
                f = n(48315),
                p = n(382060),
                d = n(61209),
                h = n(567403),
                v = n(179913),
                O = n(9430),
                b = n(473903),
                y = n(102921),
                g = n(897196);

            function m(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function j(e) {
                j = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return j(e)
            }

            function w(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function C(e, t) {
                C = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return C(e, t)
            }
            var P, E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function N(e) {
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
                    var n, r = j(e);
                    if (t) {
                        var o = j(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return w(this, n)
                }
            }! function(e) {
                e.DEFAULT = "DEFAULT";
                e.FAVORITE = "FAVORITE"
            }(P || (P = {}));
            var x = new c.Z((function(e) {
                var t = e.isRequest,
                    n = e.isFavorite;
                return t ? [] : [n ? P.FAVORITE : P.DEFAULT]
            }), (function(e) {
                return -e.lastMessageId
            }));

            function S(e) {
                var t, n, r = null !== (n = null !== (t = v.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                    i = e.isMessageRequestTimestamp;
                if (null != i) {
                    var c = o()(i).valueOf(),
                        a = y.Z.fromTimestamp(c);
                    return y.Z.compare(r, a) > 0 ? r : a
                }
                return r
            }

            function I(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: O.Z.isMessagesFavorite(e.id) && (0, l.cn)(),
                    isRequest: u.Z.isMessageRequest(e.id) || f.Z.isSpam(e.id)
                }
            }

            function Z() {
                x.clear();
                Object.values(d.Z.getMutablePrivateChannels()).forEach((function(e) {
                    x.set(e.id, I(e))
                }));
                (0, l.cn)() && (0, s.x7)() && O.Z.getAddedToMessages().forEach((function(e) {
                    var t = d.Z.getChannel(e);
                    null != t && (0, p.zi)(t.type) && x.set(t.id, I(t))
                }))
            }

            function R() {
                var e = d.Z.getMutablePrivateChannels();
                for (var t in e) x.set(t, I(e[t]))
            }
            var T, _, k, A = (T = [], _ = [], k = [], function() {
                    var e = x.values(P.FAVORITE),
                        t = x.values(P.DEFAULT);
                    if (T !== e || _ !== t) {
                        k = [];
                        e.forEach((function(e) {
                            var t = e.channelId;
                            return k.push(t)
                        }));
                        T = e;
                        t.forEach((function(e) {
                            var t = e.channelId;
                            return k.push(t)
                        }));
                        _ = t
                    }
                    return k
                }),
                D = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && C(e, t)
                    }(n, e);
                    var t = N(n);

                    function n() {
                        m(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(d.Z, h.Z, b.default, u.Z, O.Z);
                        this.syncWith([O.Z, u.Z], Z)
                    };
                    r.getPrivateChannelIds = function() {
                        return A()
                    };
                    r.getSortedChannels = function() {
                        return [x.values(P.FAVORITE), x.values(P.DEFAULT)]
                    };
                    r.serializeForOverlay = function() {
                        var e = {};
                        x.values().forEach((function(t) {
                            var n = t.channelId,
                                r = t.lastMessageId;
                            e[n] = r
                        }));
                        return e
                    };
                    return n
                }(i.ZP.Store);
            D.displayName = "PrivateChannelSortStore";
            const L = new D(a.Z, {
                CONNECTION_OPEN: Z,
                CONNECTION_OPEN_SUPPLEMENTAL: Z,
                OVERLAY_INITIALIZE: Z,
                CACHE_LOADED: R,
                CACHE_LOADED_LAZY: R,
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach((function(e) {
                        ((0, p.hv)(e.type) || x.has(e.id)) && x.set(e.id, I(e))
                    }))
                },
                CHANNEL_CREATE: function(e) {
                    var t = e.channel;
                    if (!(0, p.hv)(t.type)) return !1;
                    if (t.id === g.V) return !1;
                    x.set(t.id, I(t))
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    return x.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message;
                    if (!x.has(t)) return !1;
                    var r = d.Z.getChannel(t);
                    return null != r && x.set(t, I(r, n.id))
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild.id;
                    return x.delete(t)
                }
            })
        },
        912250: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(218790),
                c = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const u = (0, o.hN)((function(e) {
                var t = e.color,
                    n = void 0 === t ? "currentColor" : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.width,
                    f = void 0 === u ? 24 : u,
                    p = s(e, ["color", "height", "width"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(p)), {
                    width: f,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                        fill: n
                    })
                }))
            }), i.v)
        },
        655402: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(720502),
                c = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const u = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    p = s(e, ["width", "height", "color"]);
                return (0, r.jsxs)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                        fill: f
                    }), (0, r.jsx)("path", {
                        d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                        fill: f
                    })]
                }))
            }), i.F)
        },
        961241: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(238823),
                c = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const u = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    p = e.foreground,
                    d = s(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                        className: p,
                        fill: f
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                        className: p,
                        fill: f
                    })]
                }))
            }), i.S)
        },
        123017: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                c = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const u = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    c = e.color,
                    a = void 0 === c ? "currentColor" : c,
                    l = e.className,
                    s = e.foreground;
                return (0, r.jsx)("svg", {
                    className: l,
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: s,
                        fill: a,
                        d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                    })
                })
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    h = void 0 === d ? "" : d,
                    v = s(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(v)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }))
        },
        816810: (e, t, n) => {
            n.d(t, {
                $: () => r
            });
            var r;
            ! function(e) {
                e[e.IS_GUEST_INVITE = 1] = "IS_GUEST_INVITE";
                e[e.IS_VIEWED = 2] = "IS_VIEWED";
                e[e.IS_ENHANCED = 4] = "IS_ENHANCED"
            }(r || (r = {}));
            new Set([1, 2, 4])
        }
    }
]);