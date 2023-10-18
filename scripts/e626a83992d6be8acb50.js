"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [12096, 21375], {
        720502: (e, n, t) => {
            t.d(n, {
                F: () => s
            });
            var r = t(785893),
                o = (t(667294), t(795308)),
                i = t(633878);

            function c(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e, n) {
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

            function a(e, n) {
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
            var s = function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    s = e.height,
                    u = void 0 === s ? 24 : s,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    b = a(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            c(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.667c0 .123-.335.174-.39.063C21.11 12.708 20.203 12 19 12a3 3 0 0 0-2.701 1.693c-.09.185-.356.23-.48.066l-.469-.626a2 2 0 0 0-3.2 0l-2.223 2.964-.506-.633a1.5 1.5 0 0 0-2.342 0l-1.854 2.318A.75.75 0 0 0 5.81 19h5.69c.276 0 .495.226.542.498.167.956.812 1.683 1.688 2.113.111.054.06.389-.063.389H5a3 3 0 0 1-3-3V5Zm8.204.977c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }
        },
        678545: (e, n, t) => {
            t.d(n, {
                Z: () => u
            });
            var r = t(667294),
                o = t(202351),
                i = t(787193),
                c = t(5544),
                l = t(567403),
                a = t(682776),
                s = t(2590);
            const u = function(e, n) {
                var t = (0, o.e7)([l.Z], (function() {
                        return l.Z.getGuild(e)
                    }), [e]),
                    u = (0, i.XJ)(t).canCreateGuildEvent,
                    f = (0, o.e7)([c.ZP], (function() {
                        return c.ZP.getChannels(e)[c.Zb]
                    }), [e]),
                    d = r.useMemo((function() {
                        return null != n ? f.filter((function(e) {
                            return e.channel.type === n
                        })) : f
                    }), [f, n]);
                return (0, o.e7)([a.Z], (function() {
                    if (a.Z.can(s.Plq.ADMINISTRATOR, t)) return !0;
                    if (u) return !0;
                    var e = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, c = d[Symbol.iterator](); !(e = (o = c.next()).done); e = !0) {
                            var l = o.value.channel;
                            if ((0, i.Gw)(l).canCreateGuildEvent) return !0
                        }
                    } catch (e) {
                        n = !0;
                        r = e
                    } finally {
                        try {
                            e || null == c.return || c.return()
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
                Z: () => A
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                c = t.n(i),
                l = t(202351),
                a = t(70418),
                s = t(296916),
                u = t(344832),
                f = t(787193),
                d = t(682776),
                p = t(124251),
                h = t(746103),
                b = t(599467),
                v = t(619584),
                O = t(951687),
                y = t(699296),
                g = t(220109),
                m = t(26601),
                j = t(173764),
                w = t(3155),
                C = t(2590),
                P = t(473708),
                E = t(919569),
                N = t.n(E);

            function x(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function I(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        x(e, n, t[n])
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

            function k(e) {
                var n = e.channel,
                    t = e.onClick,
                    i = (0, f.XJ)(n).canManageAllEvents,
                    p = (0,
                        l.e7)([d.Z], (function() {
                        return !n.isGuildVocal() || d.Z.can(C.Plq.CONNECT, n)
                    }), [n]),
                    h = o.useMemo((function() {
                        return (0, s.Z)(n)
                    }), [n]),
                    b = (0, u.KS)(n);
                return (0, r.jsx)(a.Tooltip, {
                    text: P.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !p && null != t,
                    children: function(e) {
                        var o;
                        return (0, r.jsxs)(a.Clickable, S(I({}, e), {
                            className: c()(N().inline, N().channelContainer, (o = {}, x(o, N().channelContainerEnabled, p && null != t), x(o, N().channelContainerDisabled, !p && null != t), o)),
                            onClick: t,
                            children: [(0, r.jsx)(a.Tooltip, {
                                text: P.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                                shouldShow: i && h && p && null != t,
                                children: function(e) {
                                    return null != b ? (0, r.jsx)(b, S(I({}, e), {
                                        width: 20,
                                        height: 20,
                                        className: N().icon
                                    })) : null
                                }
                            }), (0, r.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: N().channelLocation,
                                children: n.name
                            })]
                        }))
                    }
                })
            }

            function R(e) {
                var n = e.guild,
                    t = e.channel,
                    o = e.onJoinClick,
                    i = e.handleLocationClick,
                    l = e.location,
                    s = e.isExternal;
                return e.isHub ? null == n ? (0, r.jsx)("div", {}) : (0, r.jsxs)("div", {
                    className: N().inline,
                    children: [(0,
                        r.jsx)(p.Z, {
                        className: N().guildIcon,
                        size: p.Z.Sizes.MINI,
                        active: !0,
                        guild: n
                    }), (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == n ? void 0 : n.name
                    })]
                }) : null != t ? (0, r.jsx)(k, {
                    channel: t,
                    onClick: o
                }) : (0, r.jsxs)(a.Clickable, {
                    className: N().inline,
                    onClick: i,
                    children: [(0, r.jsx)(h.Z, {
                        height: 20,
                        width: 20,
                        className: c()(N().channelContainer, N().icon)
                    }), (0, r.jsx)(a.Text, {
                        className: s ? N().externalLocation : N().channelLocation,
                        variant: "text-sm/normal",
                        children: (0, b.m)(l, !0)
                    })]
                })
            }

            function A(e) {
                var n, t = e.className,
                    o = e.guild,
                    i = e.channel,
                    l = e.creator,
                    s = e.name,
                    u = e.entityType,
                    f = e.description,
                    d = e.imageLocation,
                    p = void 0 === d ? Z.BANNER : d,
                    h = e.imageSource,
                    b = e.isActive,
                    C = e.isUserLurking,
                    P = e.isJoined,
                    E = void 0 !== P && P,
                    I = e.isMember,
                    S = void 0 !== I && I,
                    k = e.isHub,
                    A = void 0 !== k && k,
                    D = e.speakers,
                    T = e.speakerCount,
                    M = e.rsvped,
                    L = e.canInvite,
                    _ = e.location,
                    V = e.truncate,
                    U = e.onContextMenu,
                    H = e.onJoinClick,
                    F = e.onJoinGuildClick,
                    B = e.onGoToGuildClick,
                    G = e.onRsvpClick,
                    z = e.onStartClick,
                    J = e.onInviteClick,
                    W = e.onEndClick,
                    q = e.onClick,
                    Y = e.isNew,
                    X = e.guildEventId,
                    K = e.eventPreview,
                    Q = (0, v.Q)(i, u),
                    $ = u === w.WX.EXTERNAL,
                    ee = $ ? function(e) {
                        return e.stopPropagation()
                    } : void 0;
                return (0, r.jsxs)(a.ClickableContainer, {
                    "aria-label": s,
                    onClick: q,
                    onContextMenu: U,
                    className: c()(N().card, (n = {}, x(n, N().joined, E), x(n, N().lurking, C), n), t),
                    children: [p === Z.BANNER && (0, r.jsx)(y.Z, {
                        source: h
                    }), (0, r.jsx)(g.ZP, {
                        creator: l,
                        name: s,
                        description: f,
                        imageSource: p === Z.THUMBNAIL ? h : null,
                        truncate: V,
                        guildId: null == o ? void 0 : o.id,
                        isHub: A,
                        isNew: Y,
                        guildEventId: X,
                        eventPreview: K
                    }), b && null != o && null != D && T > 0 && (0, r.jsx)(j.Z, {
                        guild: o,
                        speakers: D,
                        speakerCount: T,
                        className: N().spacing
                    }), (0, r.jsx)("hr", {
                        className: N().divider
                    }), (0, r.jsxs)("div", {
                        className: c()(N().inline, N().footer),
                        children: [(0, r.jsx)(R, {
                            guild: o,
                            channel: i,
                            onJoinClick: H,
                            handleLocationClick: ee,
                            location: _,
                            isExternal: $,
                            isHub: A
                        }), A ? (0, r.jsx)(m.Z, {
                            isActive: b,
                            isUserLurking: C,
                            isMember: S,
                            rsvped: M,
                            onRsvpClick: G,
                            onJoinGuildClick: F,
                            onGoToGuildClick: B,
                            guildName: null == o ? void 0 : o.name,
                            canInvite: L,
                            isChannelPublic: Q,
                            onInviteClick: J
                        }) : (0, r.jsx)(O.ZP, {
                            entityType: u,
                            isJoined: E,
                            isActive: b,
                            isUserLurking: C,
                            rsvped: M,
                            canInvite: L,
                            isChannelPublic: Q,
                            onContextMenu: U,
                            onJoinClick: H,
                            onRsvpClick: G,
                            onStartClick: z,
                            onInviteClick: J,
                            onEndClick: W
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
                c = t(70418),
                l = t(961241),
                a = t(473708),
                s = t(811948),
                u = t.n(s);

            function f(e) {
                var n = e.guild,
                    t = e.speakers,
                    o = e.speakerCount,
                    s = e.className,
                    f = t.slice(0, 5),
                    d = f.map((function(e) {
                        var t, o;
                        return (0,
                            r.jsxs)("div", {
                            className: u().speakerContainer,
                            children: [(0, r.jsx)(c.Avatar, {
                                src: null == e || null === (t = e.user) || void 0 === t ? void 0 : t.getAvatarURL(n.id, 20),
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
                    p = o - f.length;
                return (0, r.jsxs)("div", {
                    className: i()(u().grid, s),
                    children: [d, p > 0 && (0, r.jsxs)("div", {
                        className: u().speakerContainer,
                        children: [(0, r.jsx)("div", {
                            className: u().iconMicrophone,
                            children: (0, r.jsx)(l.Z, {
                                height: 12
                            })
                        }), (0, r.jsx)(c.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: u().textInGrid,
                            children: a.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: p
                            })
                        })]
                    })]
                })
            }
        },
        876003: (e, n, t) => {
            t.d(n, {
                Z: () => m
            });
            var r = t(785893),
                o = (t(667294),
                    t(294184)),
                i = t.n(o),
                c = t(575945),
                l = t(74535),
                a = t(795470),
                s = t(912250),
                u = t(655402),
                f = t(888291),
                d = t(2590),
                p = t(627962),
                h = t.n(p);

            function b(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function v(e) {
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

            function O(e, n) {
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
                g = d.Ilk.PRIMARY_500;

            function m(e) {
                var n, t = e.enabled,
                    o = e.imageClassName,
                    d = e.iconWrapperClassName,
                    p = O(e, ["enabled", "imageClassName", "iconWrapperClassName"]),
                    m = (0, l.ZP)(),
                    j = (0, c.wj)(m) ? y : g,
                    w = {
                        height: 18,
                        width: 18,
                        color: (0, a.Lq)(j)
                    };
                return (0, r.jsx)(f.Z, v({
                    className: i()((n = {}, b(n, h().avatarUploader, t), b(n, h().avatarUploaderDisabled, !t), n)),
                    imageClassName: i()(o, h().avatarUploaderInnerSquare, b({}, h().avatarUploaderInnerSquareDisabled, !t)),
                    icon: null != p.image && "" !== p.image ? (0, r.jsx)(s.Z, v({}, w)) : (0, r.jsx)(u.Z, v({}, w)),
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
                S: () => E,
                Z: () => x
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                c = t.n(i),
                l = t(441143),
                a = t.n(l),
                s = t(70418),
                u = t(421281),
                f = t(694755),
                d = t(2590),
                p = t(473708),
                h = t(307436),
                b = t.n(h);

            function v(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e, n, t) {
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

            function g(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        O(e, n, t[n])
                    }))
                }
                return e
            }

            function m(e, n) {
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
                return !n || "object" !== C(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function w(e, n) {
                w = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return w(e, n)
            }
            var C = function(e) {
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
                    var t, r = y(e);
                    if (n) {
                        var o = y(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return j(this, t)
                }
            }

            function E(e) {
                var n = e.className,
                    t = e.icon,
                    o = void 0 === t ? null : t;
                return (0, r.jsx)("div", {
                    className: c()(b().imageUploaderIcon, n),
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
                    n && w(e, n)
                }(t, e);
                var n = P(t);

                function t() {
                    v(this, t);
                    var e;
                    (e = n.apply(this, arguments)).inputRef = o.createRef();
                    e.handleRemove = function() {
                        e.props.onChange(null)
                    };
                    return e
                }
                var i = t.prototype;
                i.handleExternalFileChange = function(e) {
                    a()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted");
                    this.inputRef.current.handleFileChange(e)
                };
                i.render = function() {
                    var e, n, t, o, i, l = this.props,
                        a = l.image,
                        h = l.hint,
                        v = l.name,
                        O = l.makeURL,
                        y = l.disabled,
                        j = l.onChange,
                        w = l.showIcon,
                        C = l.showIconDisabled,
                        P = l.className,
                        N = l.imageClassName,
                        x = l.iconClassName,
                        I = l.iconWrapperClassName,
                        S = l.icon,
                        Z = l.hideSize,
                        k = l.imageStyle,
                        R = l.showRemoveButton,
                        A = l.maxFileSizeBytes,
                        D = l.onFileSizeError,
                        T = l.onOpenImageSelectModal,
                        M = l["aria-label"];
                    null != (e = null != a && /^data:/.test(a) ? a : O(a)) ? n = 'url("'.concat(e, '")') : null != v && (t = (0, r.jsx)("div", {
                        className: b().imageUploaderAcronym,
                        children: (0, u.Zg)(v)
                    }));
                    if (y) return (0, r.jsx)("div", {
                        className: c()(b().imageUploader, b().disabled, P),
                        children: (0, r.jsxs)("div", {
                            className: c()(b().imageUploaderInner, N),
                            style: m(g({}, k), {
                                backgroundImage: n
                            }),
                            children: [t, C && (0, r.jsx)("div", {
                                className: c()(b().imageUploaderIcon, b().imageUploaderIconDisabled, x),
                                children: S
                            })]
                        })
                    });
                    null != a ? o = (0, r.jsx)(s.Anchor, {
                        className: b().removeButton,
                        onClick: this.handleRemove,
                        children: p.Z.Messages.REMOVE
                    }) : Z || (o = (0, r.jsx)("small", {
                        className: b().sizeInfo,
                        children: p.Z.Messages.MINIMUM_SIZE.format({
                            size: d.IXf
                        })
                    }));
                    var L = null !== (i = null != M ? M : h) && void 0 !== i ? i : p.Z.Messages.CHANGE_AVATAR;
                    return (0, r.jsxs)("div", {
                        className: c()(b().imageUploader, P),
                        children: [(0, r.jsx)(s.FocusRing, {
                            within: !0,
                            children: (0, r.jsxs)("div", {
                                className: w ? c()(b().imageUploaderIconWrapper, I) : void 0,
                                children: [(0, r.jsxs)("div", {
                                    className: c()(b().imageUploaderInner, N),
                                    style: m(g({}, k), {
                                        backgroundImage: n
                                    }),
                                    children: [(0, r.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: t
                                    }), null != T ? (0, r.jsx)(s.Clickable, {
                                        className: b().imageUploaderFileInput,
                                        "aria-label": L,
                                        onClick: T
                                    }) : (0, r.jsx)(f.ZP, {
                                        ref: this.inputRef,
                                        onChange: j,
                                        className: b().imageUploaderFileInput,
                                        "aria-label": L,
                                        tabIndex: 0,
                                        maxFileSizeBytes: A,
                                        onFileSizeError: D
                                    })]
                                }), null != h && (0, r.jsx)("div", {
                                    className: b().imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: h
                                }), w && (0, r.jsx)(E, {
                                    className: x,
                                    icon: S
                                })]
                            })
                        }), R ? o : null]
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
            const x = N
        },
        796909: (e, n, t) => {
            t.d(n, {
                Z: () => L
            });
            var r = t(730381),
                o = t.n(r),
                i = t(202351),
                c = t(575626),
                l = t(744564),
                a = t(621696),
                s = t(999790),
                u = t(996344),
                f = t(48315),
                d = t(382060),
                p = t(61209),
                h = t(567403),
                b = t(179913),
                v = t(9430),
                O = t(473903),
                y = t(102921),
                g = t(897196);

            function m(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function j(e) {
                j = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return j(e)
            }

            function w(e, n) {
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
            var P, E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function N(e) {
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
                    var t, r = j(e);
                    if (n) {
                        var o = j(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return w(this, t)
                }
            }! function(e) {
                e.DEFAULT = "DEFAULT";
                e.FAVORITE = "FAVORITE"
            }(P || (P = {}));
            var x = new c.Z((function(e) {
                var n = e.isRequest,
                    t = e.isFavorite;
                return n ? [] : [t ? P.FAVORITE : P.DEFAULT]
            }), (function(e) {
                return -e.lastMessageId
            }));

            function I(e) {
                var n, t, r = null !== (t = null !== (n = b.ZP.lastMessageId(e.id)) && void 0 !== n ? n : e.lastMessageId) && void 0 !== t ? t : e.id,
                    i = e.isMessageRequestTimestamp;
                if (null != i) {
                    var c = o()(i).valueOf(),
                        l = y.Z.fromTimestamp(c);
                    return y.Z.compare(r, l) > 0 ? r : l
                }
                return r
            }

            function S(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(e);
                return {
                    channelId: e.id,
                    lastMessageId: n,
                    isFavorite: v.Z.isMessagesFavorite(e.id) && (0, a.cn)(),
                    isRequest: u.Z.isMessageRequest(e.id) || f.Z.isSpam(e.id)
                }
            }

            function Z() {
                x.clear();
                Object.values(p.Z.getMutablePrivateChannels()).forEach((function(e) {
                    x.set(e.id, S(e))
                }));
                (0, a.cn)() && (0, s.x7)() && v.Z.getAddedToMessages().forEach((function(e) {
                    var n = p.Z.getChannel(e);
                    null != n && (0, d.zi)(n.type) && x.set(n.id, S(n))
                }))
            }

            function k() {
                var e = p.Z.getMutablePrivateChannels();
                for (var n in e) x.set(n, S(e[n]))
            }
            var R, A, D, T = (R = [], A = [], D = [], function() {
                    var e = x.values(P.FAVORITE),
                        n = x.values(P.DEFAULT);
                    if (R !== e || A !== n) {
                        D = [];
                        e.forEach((function(e) {
                            var n = e.channelId;
                            return D.push(n)
                        }));
                        R = e;
                        n.forEach((function(e) {
                            var n = e.channelId;
                            return D.push(n)
                        }));
                        A = n
                    }
                    return D
                }),
                M = function(e) {
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
                    var n = N(t);

                    function t() {
                        m(this, t);
                        return n.apply(this, arguments)
                    }
                    var r = t.prototype;
                    r.initialize = function() {
                        this.waitFor(p.Z, h.Z, O.default, u.Z, v.Z);
                        this.syncWith([v.Z, u.Z], Z)
                    };
                    r.getPrivateChannelIds = function() {
                        return T()
                    };
                    r.getSortedChannels = function() {
                        return [x.values(P.FAVORITE), x.values(P.DEFAULT)]
                    };
                    r.serializeForOverlay = function() {
                        var e = {};
                        x.values().forEach((function(n) {
                            var t = n.channelId,
                                r = n.lastMessageId;
                            e[t] = r
                        }));
                        return e
                    };
                    return t
                }(i.ZP.Store);
            M.displayName = "PrivateChannelSortStore";
            const L = new M(l.Z, {
                CONNECTION_OPEN: Z,
                CONNECTION_OPEN_SUPPLEMENTAL: Z,
                OVERLAY_INITIALIZE: Z,
                CACHE_LOADED: k,
                CACHE_LOADED_LAZY: k,
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach((function(e) {
                        ((0, d.hv)(e.type) || x.has(e.id)) && x.set(e.id, S(e))
                    }))
                },
                CHANNEL_CREATE: function(e) {
                    var n = e.channel;
                    if (!(0, d.hv)(n.type)) return !1;
                    if (n.id === g.V) return !1;
                    x.set(n.id, S(n))
                },
                CHANNEL_DELETE: function(e) {
                    var n = e.channel;
                    return x.delete(n.id)
                },
                MESSAGE_CREATE: function(e) {
                    var n = e.channelId,
                        t = e.message;
                    if (!x.has(n)) return !1;
                    var r = p.Z.getChannel(n);
                    return null != r && x.set(n, S(r, t.id))
                },
                GUILD_CREATE: function(e) {
                    var n = e.guild.id;
                    return x.delete(n)
                }
            })
        },
        912250: (e, n, t) => {
            t.d(n, {
                Z: () => u
            });
            var r = t(785893),
                o = (t(667294), t(168075)),
                i = t(218790),
                c = t(633878);

            function l(e, n, t) {
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

            function s(e, n) {
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
            const u = (0, o.hN)((function(e) {
                var n = e.color,
                    t = void 0 === n ? "currentColor" : n,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.width,
                    f = void 0 === u ? 24 : u,
                    d = s(e, ["color", "height", "width"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            l(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(d)), {
                    width: f,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                        fill: t
                    })
                }))
            }), i.v)
        },
        655402: (e, n, t) => {
            t.d(n, {
                Z: () => u
            });
            var r = t(785893),
                o = (t(667294), t(168075)),
                i = t(720502),
                c = t(633878);

            function l(e, n, t) {
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

            function s(e, n) {
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
            const u = (0, o.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = s(e, ["width", "height", "color"]);
                return (0,
                    r.jsxs)("svg", a(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            l(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(d)), {
                    width: t,
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
        961241: (e, n, t) => {
            t.d(n, {
                Z: () => u
            });
            var r = t(785893),
                o = (t(667294), t(168075)),
                i = t(238823),
                c = t(633878);

            function l(e, n, t) {
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

            function s(e, n) {
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
            const u = (0, o.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = e.foreground,
                    p = s(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", a(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            l(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(p)), {
                    width: t,
                    height: i,
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
            }), i.S)
        },
        123017: (e, n, t) => {
            t.d(n, {
                Z: () => u
            });
            var r = t(785893),
                o = (t(667294), t(168075)),
                i = t(795308),
                c = t(633878);

            function l(e, n, t) {
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

            function s(e, n) {
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
            const u = (0, o.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 16 : n,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    c = e.color,
                    l = void 0 === c ? "currentColor" : c,
                    a = e.className,
                    s = e.foreground;
                return (0, r.jsx)("svg", {
                    className: a,
                    width: t,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: s,
                        fill: l,
                        d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                    })
                })
            }), (function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    b = s(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            l(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }))
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