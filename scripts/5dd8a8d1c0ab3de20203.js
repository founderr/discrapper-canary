"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [20182, 68690], {
        678545: (e, n, t) => {
            t.d(n, {
                Z: () => u
            });
            var r = t(667294),
                o = t(202351),
                i = t(787193),
                a = t(5544),
                c = t(567403),
                l = t(682776),
                s = t(2590);
            const u = function(e, n) {
                var t = (0, o.e7)([c.Z], (function() {
                        return c.Z.getGuild(e)
                    }), [e]),
                    u = (0, i.XJ)(t).canCreateGuildEvent,
                    f = (0, o.e7)([a.ZP], (function() {
                        return a.ZP.getChannels(e)[a.Zb]
                    }), [e]),
                    d = r.useMemo((function() {
                        return null != n ? f.filter((function(e) {
                            return e.channel.type === n
                        })) : f
                    }), [f, n]);
                return (0, o.e7)([l.Z], (function() {
                    if (l.Z.can(s.Plq.ADMINISTRATOR, t)) return !0;
                    if (u) return !0;
                    var e = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, a = d[Symbol.iterator](); !(e = (o = a.next()).done); e = !0) {
                            var c = o.value.channel;
                            if ((0, i.Gw)(c).canCreateGuildEvent) return !0
                        }
                    } catch (e) {
                        n = !0;
                        r = e
                    } finally {
                        try {
                            e || null == a.return || a.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                    return !1
                }), [d, t, u])
            }
        },
        383495: (e, n, t) => {
            t.d(n, {
                Q: () => Z,
                Z: () => _
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                a = t.n(i),
                c = t(202351),
                l = t(882723),
                s = t(296916),
                u = t(239813),
                f = t(787193),
                d = t(682776),
                p = t(124251),
                h = t(710674),
                v = t(599467),
                O = t(619584),
                b = t(951687),
                y = t(699296),
                m = t(220109),
                g = t(26601),
                j = t(173764),
                C = t(3155),
                E = t(2590),
                w = t(473708),
                P = t(780875),
                N = t.n(P);

            function I(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function x(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        I(e, n, t[n])
                    }))
                }
                return e
            }

            function S(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            var Z;
            ! function(e) {
                e[e.BANNER = 0] = "BANNER";
                e[e.THUMBNAIL = 1] = "THUMBNAIL"
            }(Z || (Z = {}));

            function R(e) {
                var n = e.channel,
                    t = e.onClick,
                    i = (0, f.XJ)(n).canManageAllEvents,
                    p = (0, c.e7)([d.Z], (function() {
                        return !n.isGuildVocal() || d.Z.can(E.Plq.CONNECT, n)
                    }), [n]),
                    h = o.useMemo((function() {
                        return (0, s.Z)(n)
                    }), [n]),
                    v = (0, u.KS)(n);
                return (0, r.jsx)(l.Tooltip, {
                    text: w.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !p && null != t,
                    children: function(e) {
                        var o;
                        return (0, r.jsxs)(l.Clickable, S(x({}, e), {
                            className: a()(N().inline, N().channelContainer, (o = {}, I(o, N().channelContainerEnabled, p && null != t), I(o, N().channelContainerDisabled, !p && null != t), o)),
                            onClick: t,
                            children: [(0, r.jsx)(l.Tooltip, {
                                text: w.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                                shouldShow: i && h && p && null != t,
                                children: function(e) {
                                    return null != v ? (0, r.jsx)(v, S(x({}, e), {
                                        width: 20,
                                        height: 20,
                                        className: N().icon
                                    })) : null
                                }
                            }), (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: N().channelLocation,
                                children: n.name
                            })]
                        }))
                    }
                })
            }

            function T(e) {
                var n = e.guild,
                    t = e.channel,
                    o = e.onJoinClick,
                    i = e.handleLocationClick,
                    c = e.location,
                    s = e.isExternal;
                return e.isHub ? null == n ? (0, r.jsx)("div", {}) : (0, r.jsxs)("div", {
                    className: N().inline,
                    children: [(0, r.jsx)(p.Z, {
                        className: N().guildIcon,
                        size: p.Z.Sizes.MINI,
                        active: !0,
                        guild: n
                    }), (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == n ? void 0 : n.name
                    })]
                }) : null != t ? (0, r.jsx)(R, {
                    channel: t,
                    onClick: o
                }) : (0, r.jsxs)(l.Clickable, {
                    className: N().inline,
                    onClick: i,
                    children: [(0, r.jsx)(h.Z, {
                        height: 20,
                        width: 20,
                        className: a()(N().channelContainer, N().icon)
                    }), (0, r.jsx)(l.Text, {
                        className: s ? N().externalLocation : N().channelLocation,
                        variant: "text-sm/normal",
                        children: (0, v.m)(c, !0)
                    })]
                })
            }

            function _(e) {
                var n, t = e.className,
                    o = e.guild,
                    i = e.channel,
                    c = e.creator,
                    s = e.userCount,
                    u = e.name,
                    f = e.entityType,
                    d = e.description,
                    p = e.startTime,
                    h = e.imageLocation,
                    v = void 0 === h ? Z.BANNER : h,
                    E = e.imageSource,
                    w = e.isActive,
                    P = e.isUserLurking,
                    x = e.isEnded,
                    S = e.isJoined,
                    R = void 0 !== S && S,
                    _ = e.isMember,
                    k = void 0 !== _ && _,
                    A = e.isHub,
                    L = void 0 !== A && A,
                    D = e.speakers,
                    H = e.speakerCount,
                    M = e.rsvped,
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
                    ee = f === C.WX.EXTERNAL,
                    ne = ee ? function(e) {
                        return e.stopPropagation()
                    } : void 0;
                return (0, r.jsxs)(l.ClickableContainer, {
                    "aria-label": u,
                    onClick: X,
                    onContextMenu: B,
                    className: a()(N().card, (n = {}, I(n, N().joined, R), I(n, N().lurking, P), n), t),
                    children: [v === Z.BANNER && (0, r.jsx)(y.Z, {
                        source: E
                    }), (0, r.jsx)(m.ZP, {
                        userCount: s,
                        creator: c,
                        name: u,
                        description: d,
                        startTime: p,
                        imageSource: v === Z.THUMBNAIL ? E : null,
                        isActive: w,
                        isEnded: x,
                        truncate: F,
                        guildId: null == o ? void 0 : o.id,
                        eventType: f,
                        isHub: L,
                        isNew: Q
                    }), w && null != o && null != D && H > 0 && (0, r.jsx)(j.Z, {
                        guild: o,
                        speakers: D,
                        speakerCount: H,
                        className: N().spacing
                    }), (0, r.jsx)("hr", {
                        className: N().divider
                    }), (0, r.jsxs)("div", {
                        className: a()(N().inline, N().footer),
                        children: [(0, r.jsx)(T, {
                            guild: o,
                            channel: i,
                            onJoinClick: G,
                            handleLocationClick: ne,
                            location: U,
                            isExternal: ee,
                            isHub: L
                        }), L ? (0, r.jsx)(g.Z, {
                            isActive: w,
                            isUserLurking: P,
                            isMember: k,
                            rsvped: M,
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
                            isActive: w,
                            isUserLurking: P,
                            rsvped: M,
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
        173764: (e, n, t) => {
            t.d(n, {
                Z: () => f
            });
            var r = t(785893),
                o = (t(667294), t(294184)),
                i = t.n(o),
                a = t(882723),
                c = t(961241),
                l = t(473708),
                s = t(549099),
                u = t.n(s);

            function f(e) {
                var n = e.guild,
                    t = e.speakers,
                    o = e.speakerCount,
                    s = e.className,
                    f = t.slice(0, 5),
                    d = f.map((function(e) {
                        var t, o;
                        return (0, r.jsxs)("div", {
                            className: u().speakerContainer,
                            children: [(0, r.jsx)(a.Avatar, {
                                src: null == e || null === (t = e.user) || void 0 === t ? void 0 : t.getAvatarURL(n.id, 20),
                                size: a.AvatarSizes.SIZE_20,
                                className: u().avatar,
                                "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                            }), (0, r.jsx)("div", {
                                className: u().textInGridContainer,
                                children: (0, r.jsx)(a.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    className: u().textInGrid,
                                    children: null == e ? void 0 : e.userNick
                                })
                            })]
                        }, null == e || null === (o = e.user) || void 0 === o ? void 0 : o.id)
                    })),
                    p = o - f.length;
                return (0, r.jsxs)("div", {
                    className: i()(u().grid, s),
                    children: [d, p > 0 && (0, r.jsxs)("div", {
                        className: u().speakerContainer,
                        children: [(0, r.jsx)("div", {
                            className: u().iconMicrophone,
                            children: (0, r.jsx)(c.Z, {
                                height: 12
                            })
                        }), (0, r.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: u().textInGrid,
                            children: l.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: p
                            })
                        })]
                    })]
                })
            }
        },
        115617: (e, n, t) => {
            t.d(n, {
                Kw: () => a,
                hv: () => c,
                Po: () => l
            });
            var r = t(744564),
                o = t(652591),
                i = t(2590);

            function a(e) {
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

            function c(e, n) {
                r.Z.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: n
                })
            }

            function l(e) {
                r.Z.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        550254: (e, n, t) => {
            t.d(n, {
                Z: () => O
            });
            var r = t(202351),
                o = t(744564),
                i = t(113469),
                a = t(199790);

            function c(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function s(e, n) {
                return !n || "object" !== f(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function u(e, n) {
                u = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return u(e, n)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
                var n = function() {
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
                    var t, r = l(e);
                    if (n) {
                        var o = l(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return s(this, t)
                }
            }
            var p = new Set,
                h = {};
            var v = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && u(e, n)
                }(t, e);
                var n = d(t);

                function t() {
                    c(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function(e) {
                    if (null != e) {
                        Array.isArray(e.hiddenHotspots) && (p = new Set(e.hiddenHotspots));
                        null != e.hotspotOverrides && (h = e.hotspotOverrides)
                    }
                };
                r.hasHotspot = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        t = !n && h[e];
                    return !a.a && (!i.s.isDisallowPopupsSet() && (t || !p.has(e)))
                };
                r.hasHiddenHotspot = function(e) {
                    return p.has(e)
                };
                r.getHotspotOverride = function(e) {
                    return h[e]
                };
                r.getState = function() {
                    return {
                        hiddenHotspots: p,
                        hotspotOverrides: h
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        hiddenHotspots: p,
                        hotspotOverrides: h
                    }
                };
                return t
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
                    var n = e.hiddenHotspots;
                    p = new Set(n)
                },
                HOTSPOT_HIDE: function(e) {
                    var n = e.location;
                    if (p.has(n)) return !1;
                    p.add(n)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    var n = e.location,
                        t = e.enabled;
                    h[n] = t
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    var n = e.location;
                    if (null == h[n]) return !1;
                    delete h[n]
                }
            })
        },
        422513: (e, n, t) => {
            t.d(n, {
                v6: () => r.v,
                Po: () => o.Po,
                Kw: () => o.Kw,
                hv: () => o.hv,
                qc: () => i.Z
            });
            var r = t(630670),
                o = t(115617),
                i = t(550254)
        },
        876003: (e, n, t) => {
            t.d(n, {
                Z: () => g
            });
            var r = t(785893),
                o = (t(667294), t(294184)),
                i = t.n(o),
                a = t(575945),
                c = t(74535),
                l = t(795470),
                s = t(912250),
                u = t(655402),
                f = t(888291),
                d = t(2590),
                p = t(240162),
                h = t.n(p);

            function v(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function O(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        v(e, n, t[n])
                    }))
                }
                return e
            }

            function b(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            var y = d.Ilk.PRIMARY_400,
                m = d.Ilk.PRIMARY_500;

            function g(e) {
                var n, t = e.enabled,
                    o = e.imageClassName,
                    d = e.iconWrapperClassName,
                    p = b(e, ["enabled", "imageClassName", "iconWrapperClassName"]),
                    g = (0, c.ZP)(),
                    j = (0, a.wj)(g) ? y : m,
                    C = {
                        height: 18,
                        width: 18,
                        color: (0, l.Lq)(j)
                    };
                return (0, r.jsx)(f.Z, O({
                    className: i()((n = {}, v(n, h().avatarUploader, t), v(n, h().avatarUploaderDisabled, !t), n)),
                    imageClassName: i()(o, h().avatarUploaderInnerSquare, v({}, h().avatarUploaderInnerSquareDisabled, !t)),
                    icon: null != p.image && "" !== p.image ? (0, r.jsx)(s.Z, O({}, C)) : (0, r.jsx)(u.Z, O({}, C)),
                    iconClassName: i()(h().avatarUploadIcon, h().hideDefaultIcon),
                    iconWrapperClassName: d,
                    showIcon: !0,
                    showIconDisabled: !0,
                    hideSize: !0
                }, p))
            }
        },
        888291: (e, n, t) => {
            t.d(n, {
                S: () => P,
                Z: () => I
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                a = t.n(i),
                c = t(441143),
                l = t.n(c),
                s = t(882723),
                u = t(421281),
                f = t(694755),
                d = t(2590),
                p = t(473708),
                h = t(326726),
                v = t.n(h);

            function O(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function b(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function m(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        b(e, n, t[n])
                    }))
                }
                return e
            }

            function g(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function j(e, n) {
                return !n || "object" !== E(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function C(e, n) {
                C = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return C(e, n)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function w(e) {
                var n = function() {
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
                    var t, r = y(e);
                    if (n) {
                        var o = y(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return j(this, t)
                }
            }

            function P(e) {
                var n = e.className,
                    t = e.icon,
                    o = void 0 === t ? null : t;
                return (0, r.jsx)("div", {
                    className: a()(v().imageUploaderIcon, n),
                    children: o
                })
            }
            var N = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && C(e, n)
                }(t, e);
                var n = w(t);

                function t() {
                    O(this, t);
                    var e;
                    (e = n.apply(this, arguments)).inputRef = o.createRef();
                    e.handleRemove = function() {
                        e.props.onChange(null)
                    };
                    return e
                }
                var i = t.prototype;
                i.handleExternalFileChange = function(e) {
                    l()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted");
                    this.inputRef.current.handleFileChange(e)
                };
                i.render = function() {
                    var e, n, t, o, i, c = this.props,
                        l = c.image,
                        h = c.hint,
                        O = c.name,
                        b = c.makeURL,
                        y = c.disabled,
                        j = c.onChange,
                        C = c.showIcon,
                        E = c.showIconDisabled,
                        w = c.className,
                        N = c.imageClassName,
                        I = c.iconClassName,
                        x = c.iconWrapperClassName,
                        S = c.icon,
                        Z = c.hideSize,
                        R = c.imageStyle,
                        T = c.showRemoveButton,
                        _ = c.maxFileSizeBytes,
                        k = c.onFileSizeError,
                        A = c.onOpenImageSelectModal,
                        L = c["aria-label"];
                    null != (e = null != l && /^data:/.test(l) ? l : b(l)) ? n = 'url("'.concat(e, '")') : null != O && (t = (0, r.jsx)("div", {
                        className: v().imageUploaderAcronym,
                        children: (0, u.Zg)(O)
                    }));
                    if (y) return (0, r.jsx)("div", {
                        className: a()(v().imageUploader, v().disabled, w),
                        children: (0, r.jsxs)("div", {
                            className: a()(v().imageUploaderInner, N),
                            style: g(m({}, R), {
                                backgroundImage: n
                            }),
                            children: [t, E && (0, r.jsx)("div", {
                                className: a()(v().imageUploaderIcon, v().imageUploaderIconDisabled, I),
                                children: S
                            })]
                        })
                    });
                    null != l ? o = (0, r.jsx)(s.Anchor, {
                        className: v().removeButton,
                        onClick: this.handleRemove,
                        children: p.Z.Messages.REMOVE
                    }) : Z || (o = (0, r.jsx)("small", {
                        className: v().sizeInfo,
                        children: p.Z.Messages.MINIMUM_SIZE.format({
                            size: d.IXf
                        })
                    }));
                    var D = null !== (i = null != L ? L : h) && void 0 !== i ? i : p.Z.Messages.CHANGE_AVATAR;
                    return (0, r.jsxs)("div", {
                        className: a()(v().imageUploader, w),
                        children: [(0, r.jsx)(s.FocusRing, {
                            within: !0,
                            children: (0, r.jsxs)("div", {
                                className: C ? a()(v().imageUploaderIconWrapper, x) : void 0,
                                children: [(0, r.jsxs)("div", {
                                    className: a()(v().imageUploaderInner, N),
                                    style: g(m({}, R), {
                                        backgroundImage: n
                                    }),
                                    children: [(0, r.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: t
                                    }), null != A ? (0, r.jsx)(s.Clickable, {
                                        className: v().imageUploaderFileInput,
                                        "aria-label": D,
                                        onClick: A
                                    }) : (0, r.jsx)(f.ZP, {
                                        ref: this.inputRef,
                                        onChange: j,
                                        className: v().imageUploaderFileInput,
                                        "aria-label": D,
                                        tabIndex: 0,
                                        maxFileSizeBytes: _,
                                        onFileSizeError: k
                                    })]
                                }), null != h && (0, r.jsx)("div", {
                                    className: v().imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: h
                                }), C && (0, r.jsx)(P, {
                                    className: I,
                                    icon: S
                                })]
                            })
                        }), T ? o : null]
                    })
                };
                return t
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
            const I = N
        },
        796909: (e, n, t) => {
            t.d(n, {
                Z: () => L
            });
            var r = t(730381),
                o = t.n(r),
                i = t(202351),
                a = t(575626),
                c = t(744564),
                l = t(339432),
                s = t(996344),
                u = t(48315),
                f = t(382060),
                d = t(61209),
                p = t(567403),
                h = t(717091),
                v = t(9430),
                O = t(473903),
                b = t(102921),
                y = t(897196);

            function m(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function j(e, n) {
                return !n || "object" !== w(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function C(e, n) {
                C = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return C(e, n)
            }
            var E, w = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function P(e) {
                var n = function() {
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
                    var t, r = g(e);
                    if (n) {
                        var o = g(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return j(this, t)
                }
            }! function(e) {
                e.DEFAULT = "DEFAULT";
                e.FAVORITE = "FAVORITE"
            }(E || (E = {}));
            var N = new a.Z((function(e) {
                var n = e.isRequest,
                    t = e.isFavorite;
                return n ? [] : [t ? E.FAVORITE : E.DEFAULT]
            }), (function(e) {
                return -e.lastMessageId
            }));

            function I(e) {
                var n, t, r = null !== (t = null !== (n = h.ZP.lastMessageId(e.id)) && void 0 !== n ? n : e.lastMessageId) && void 0 !== t ? t : e.id,
                    i = e.isMessageRequestTimestamp;
                if (null != i) {
                    var a = o()(i).valueOf(),
                        c = b.Z.fromTimestamp(a);
                    return b.Z.compare(r, c) > 0 ? r : c
                }
                return r
            }

            function x(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(e);
                return {
                    channelId: e.id,
                    lastMessageId: n,
                    isFavorite: v.Z.isMessagesFavorite(e.id) && (0, l.cn)(),
                    isRequest: s.Z.isMessageRequest(e.id) || u.Z.isSpam(e.id)
                }
            }

            function S() {
                N.clear();
                Object.values(d.Z.getMutablePrivateChannels()).forEach((function(e) {
                    N.set(e.id, x(e))
                }));
                (0, l.cn)() && v.Z.getAddedToMessages().forEach((function(e) {
                    var n = d.Z.getChannel(e);
                    null != n && (0, f.zi)(n.type) && N.set(n.id, x(n))
                }))
            }

            function Z() {
                var e = d.Z.getMutablePrivateChannels();
                for (var n in e) N.set(n, x(e[n]))
            }
            var R, T, _, k = (R = [], T = [], _ = [], function() {
                    var e = N.values(E.FAVORITE),
                        n = N.values(E.DEFAULT);
                    if (R !== e || T !== n) {
                        _ = [];
                        e.forEach((function(e) {
                            var n = e.channelId;
                            return _.push(n)
                        }));
                        R = e;
                        n.forEach((function(e) {
                            var n = e.channelId;
                            return _.push(n)
                        }));
                        T = n
                    }
                    return _
                }),
                A = function(e) {
                    ! function(e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        n && C(e, n)
                    }(t, e);
                    var n = P(t);

                    function t() {
                        m(this, t);
                        return n.apply(this, arguments)
                    }
                    var r = t.prototype;
                    r.initialize = function() {
                        this.waitFor(d.Z, p.Z, O.default, s.Z, v.Z);
                        this.syncWith([v.Z, s.Z], S)
                    };
                    r.getPrivateChannelIds = function() {
                        return k()
                    };
                    r.getSortedChannels = function() {
                        return [N.values(E.FAVORITE), N.values(E.DEFAULT)]
                    };
                    r.serializeForOverlay = function() {
                        var e = {};
                        N.values().forEach((function(n) {
                            var t = n.channelId,
                                r = n.lastMessageId;
                            e[t] = r
                        }));
                        return e
                    };
                    r.__getLocalVars = function() {
                        return {
                            SortedChannelType: E,
                            data: N,
                            getPrivateChannelIds: k
                        }
                    };
                    return t
                }(i.ZP.Store);
            A.displayName = "PrivateChannelSortStore";
            const L = new A(c.Z, {
                CONNECTION_OPEN: S,
                CONNECTION_OPEN_SUPPLEMENTAL: S,
                OVERLAY_INITIALIZE: S,
                CACHE_LOADED: Z,
                CACHE_LOADED_LAZY: Z,
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach((function(e) {
                        ((0, f.hv)(e.type) || N.has(e.id)) && N.set(e.id, x(e))
                    }))
                },
                CHANNEL_CREATE: function(e) {
                    var n = e.channel;
                    if (!(0, f.hv)(n.type)) return !1;
                    if (n.id === y.V) return !1;
                    N.set(n.id, x(n))
                },
                CHANNEL_DELETE: function(e) {
                    var n = e.channel;
                    return N.delete(n.id)
                },
                MESSAGE_CREATE: function(e) {
                    var n = e.channelId,
                        t = e.message;
                    if (!N.has(n)) return !1;
                    var r = d.Z.getChannel(n);
                    return null != r && N.set(n, x(r, t.id))
                },
                GUILD_CREATE: function(e) {
                    var n = e.guild.id;
                    return N.delete(n)
                }
            })
        },
        912250: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                o = (t(667294), t(633878));

            function i(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function a(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function c(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function l(e) {
                var n = e.color,
                    t = void 0 === n ? "currentColor" : n,
                    l = e.height,
                    s = void 0 === l ? 24 : l,
                    u = e.width,
                    f = void 0 === u ? 24 : u,
                    d = c(e, ["color", "height", "width"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            i(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: f,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                        fill: t
                    })
                }))
            }
        },
        655402: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                o = (t(667294), t(633878));

            function i(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function a(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function c(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function l(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    l = e.height,
                    s = void 0 === l ? 24 : l,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = c(e, ["width", "height", "color"]);
                return (0, r.jsxs)("svg", a(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            i(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: t,
                    height: s,
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
            }
        },
        961241: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                o = (t(667294), t(633878));

            function i(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function a(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function c(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function l(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    l = e.height,
                    s = void 0 === l ? 24 : l,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = e.foreground,
                    p = c(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", a(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            i(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: t,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                        className: d,
                        fill: f
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                        className: d,
                        fill: f
                    })]
                }))
            }
        },
        553480: (e, n, t) => {
            t.d(n, {
                Z: () => o
            });
            var r = t(785893);
            t(667294);

            function o(e) {
                var n = e.width,
                    t = void 0 === n ? 16 : n,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    a = e.color,
                    c = void 0 === a ? "currentColor" : a,
                    l = e.className,
                    s = e.foreground;
                return (0, r.jsx)("svg", {
                    className: l,
                    width: t,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: s,
                        fill: c,
                        d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                    })
                })
            }
        },
        816810: (e, n, t) => {
            t.d(n, {
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
//# sourceMappingURL=5dd8a8d1c0ab3de20203.js.map