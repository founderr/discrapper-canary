"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [89853, 39023], {
        919810: (e, n, t) => {
            t.d(n, {
                wg: () => b,
                so: () => y,
                ZP: () => E
            });
            var r = t(202351),
                i = t(15970),
                o = t(766496),
                l = t(61209),
                a = t(5544),
                c = t(567403),
                u = t(682776),
                s = t(563135),
                d = t(269300),
                f = t(3155),
                p = t(2590);

            function v(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function g(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return v(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e) {
                return "entity_type" in e ? {
                    entityType: e.entity_type,
                    channelId: e.channel_id
                } : e
            }

            function b(e) {
                var n = g(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Z], 1),
                    t = n[0],
                    r = h(e),
                    i = r.entityType,
                    o = r.channelId,
                    a = i === f.WX.EXTERNAL;
                if (a) return !0;
                var c = t.getChannel(o);
                return null != c && s.ZP.canEveryoneRole(p.Plq.VIEW_CHANNEL, c)
            }

            function y(e) {
                var n = g(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.ZP, l.Z, c.Z, o.Z], 4),
                    t = n[0],
                    r = n[1],
                    s = n[2],
                    p = n[3];
                if ((0, d.Z2)(e)) return !1;
                var v = e.guild_id,
                    h = e.channel_id,
                    y = e.entity_type === f.WX.EXTERNAL,
                    E = y ? t.getDefaultChannel(e.guild_id) : r.getChannel(h),
                    m = s.getGuild(v),
                    j = p.getStageInstanceByChannel(h);
                return !!(0, i.b)(u.Z, m, E, j) && (null != E && b(e, [r]))
            }

            function E(e) {
                return (0,
                    r.e7)([a.ZP, l.Z, c.Z, o.Z], (function() {
                    return y(e, [a.ZP, l.Z, c.Z, o.Z])
                }), [e])
            }
        },
        158499: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(202351),
                i = t(826945),
                o = t(567403);

            function l(e, n) {
                return (0, r.cj)([o.Z, i.Z], (function() {
                    var t = o.Z.getGuild(e),
                        r = null != t;
                    null == t && null != n && (t = i.Z.getCachedGuildByEventId(n));
                    return {
                        isMember: r,
                        guild: t
                    }
                }), [e, n])
            }
        },
        383495: (e, n, t) => {
            t.d(n, {
                Q: () => T,
                Z: () => M
            });
            var r = t(785893),
                i = t(667294),
                o = t(294184),
                l = t.n(o),
                a = t(202351),
                c = t(304548),
                u = t(296916),
                s = t(344832),
                d = t(787193),
                f = t(682776),
                p = t(124251),
                v = t(746103),
                g = t(599467),
                h = t(619584),
                b = t(951687),
                y = t(699296),
                E = t(220109),
                m = t(26601),
                j = t(173764),
                O = t(3155),
                C = t(2590),
                Z = t(473708),
                N = t(919569),
                x = t.n(N);

            function P(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function k(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        P(e, n, t[n])
                    }))
                }
                return e
            }

            function _(e, n) {
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
            var T;
            ! function(e) {
                e[e.BANNER = 0] = "BANNER";
                e[e.THUMBNAIL = 1] = "THUMBNAIL"
            }(T || (T = {}));

            function w(e) {
                var n = e.channel,
                    t = e.onClick,
                    o = (0, d.XJ)(n).canManageAllEvents,
                    p = (0, a.e7)([f.Z], (function() {
                        return !n.isGuildVocal() || f.Z.can(C.Plq.CONNECT, n)
                    }), [n]),
                    v = i.useMemo((function() {
                        return (0, u.Z)(n)
                    }), [n]),
                    g = (0, s.KS)(n);
                return (0, r.jsx)(c.Tooltip, {
                    text: Z.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !p && null != t,
                    children: function(e) {
                        var i;
                        return (0,
                            r.jsxs)(c.Clickable, _(k({}, e), {
                            className: l()(x().inline, x().channelContainer, (i = {}, P(i, x().channelContainerEnabled, p && null != t), P(i, x().channelContainerDisabled, !p && null != t), i)),
                            onClick: t,
                            children: [(0, r.jsx)(c.Tooltip, {
                                text: Z.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                                shouldShow: o && v && p && null != t,
                                children: function(e) {
                                    return null != g ? (0, r.jsx)(g, _(k({}, e), {
                                        width: 20,
                                        height: 20,
                                        className: x().icon
                                    })) : null
                                }
                            }), (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: x().channelLocation,
                                children: n.name
                            })]
                        }))
                    }
                })
            }

            function I(e) {
                var n = e.guild,
                    t = e.channel,
                    i = e.onJoinClick,
                    o = e.handleLocationClick,
                    a = e.location,
                    u = e.isExternal;
                return e.isHub ? null == n ? (0, r.jsx)("div", {}) : (0, r.jsxs)("div", {
                    className: x().inline,
                    children: [(0, r.jsx)(p.Z, {
                        className: x().guildIcon,
                        size: p.Z.Sizes.MINI,
                        active: !0,
                        guild: n
                    }), (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == n ? void 0 : n.name
                    })]
                }) : null != t ? (0, r.jsx)(w, {
                    channel: t,
                    onClick: i
                }) : (0, r.jsxs)(c.Clickable, {
                    className: x().inline,
                    onClick: o,
                    children: [(0, r.jsx)(v.Z, {
                        height: 20,
                        width: 20,
                        className: l()(x().channelContainer, x().icon)
                    }), (0, r.jsx)(c.Text, {
                        className: u ? x().externalLocation : x().channelLocation,
                        variant: "text-sm/normal",
                        children: (0, g.m)(a, !0)
                    })]
                })
            }

            function M(e) {
                var n, t = e.className,
                    i = e.guild,
                    o = e.channel,
                    a = e.creator,
                    u = e.userCount,
                    s = e.name,
                    d = e.entityType,
                    f = e.description,
                    p = e.startTime,
                    v = e.imageLocation,
                    g = void 0 === v ? T.BANNER : v,
                    C = e.imageSource,
                    Z = e.isActive,
                    N = e.isUserLurking,
                    k = e.status,
                    _ = e.isJoined,
                    w = void 0 !== _ && _,
                    M = e.isMember,
                    L = void 0 !== M && M,
                    S = e.isHub,
                    D = void 0 !== S && S,
                    A = e.speakers,
                    G = e.speakerCount,
                    R = e.rsvped,
                    U = e.canInvite,
                    V = e.location,
                    H = e.truncate,
                    B = e.onContextMenu,
                    J = e.onJoinClick,
                    z = e.onJoinGuildClick,
                    X = e.onGoToGuildClick,
                    F = e.onRsvpClick,
                    W = e.onStartClick,
                    q = e.onInviteClick,
                    K = e.onEndClick,
                    Y = e.onClick,
                    Q = e.isNew,
                    $ = (0, h.Q)(o, d),
                    ee = d === O.WX.EXTERNAL,
                    ne = ee ? function(e) {
                        return e.stopPropagation()
                    } : void 0;
                return (0, r.jsxs)(c.ClickableContainer, {
                    "aria-label": s,
                    onClick: Y,
                    onContextMenu: B,
                    className: l()(x().card, (n = {}, P(n, x().joined, w),
                        P(n, x().lurking, N), n), t),
                    children: [g === T.BANNER && (0, r.jsx)(y.Z, {
                        source: C
                    }), (0, r.jsx)(E.ZP, {
                        userCount: u,
                        creator: a,
                        name: s,
                        description: f,
                        startTime: p,
                        imageSource: g === T.THUMBNAIL ? C : null,
                        status: k,
                        truncate: H,
                        guildId: null == i ? void 0 : i.id,
                        eventType: d,
                        isHub: D,
                        isNew: Q
                    }), Z && null != i && null != A && G > 0 && (0, r.jsx)(j.Z, {
                        guild: i,
                        speakers: A,
                        speakerCount: G,
                        className: x().spacing
                    }), (0, r.jsx)("hr", {
                        className: x().divider
                    }), (0, r.jsxs)("div", {
                        className: l()(x().inline, x().footer),
                        children: [(0, r.jsx)(I, {
                            guild: i,
                            channel: o,
                            onJoinClick: J,
                            handleLocationClick: ne,
                            location: V,
                            isExternal: ee,
                            isHub: D
                        }), D ? (0, r.jsx)(m.Z, {
                            isActive: Z,
                            isUserLurking: N,
                            isMember: L,
                            rsvped: R,
                            onRsvpClick: F,
                            onJoinGuildClick: z,
                            onGoToGuildClick: X,
                            guildName: null == i ? void 0 : i.name,
                            canInvite: U,
                            isChannelPublic: $,
                            onInviteClick: q
                        }) : (0, r.jsx)(b.ZP, {
                            entityType: d,
                            isJoined: w,
                            isActive: Z,
                            isUserLurking: N,
                            rsvped: R,
                            canInvite: U,
                            isChannelPublic: $,
                            onContextMenu: B,
                            onJoinClick: J,
                            onRsvpClick: F,
                            onStartClick: W,
                            onInviteClick: q,
                            onEndClick: K
                        })]
                    })]
                })
            }
        },
        389853: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => ce
            });
            var r = t(785893),
                i = t(667294),
                o = t(496486),
                l = t.n(o),
                a = t(842227),
                c = t(202351),
                u = t(304548),
                s = t(496916),
                d = t(937119),
                f = t(172028),
                p = t(5544),
                v = t(984216),
                g = t(567403),
                h = t(179913),
                b = t(443812),
                y = t(890251),
                E = t(189865),
                m = t(652591),
                j = t(72580),
                O = t(634080),
                C = t(678545),
                Z = t(201441),
                N = t(350403),
                x = t(944522),
                P = t(808194),
                k = t(766496),
                _ = t(61209),
                T = t(682776),
                w = t(563367),
                I = t(473903),
                M = t(382840),
                L = t(269300),
                S = t(919810),
                D = t(442812);
            var A = t(158499),
                G = t(32421),
                R = t(205316),
                U = t(383495),
                V = t(85941),
                H = t(2590);

            function B(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function J(e, n) {
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

            function z(e) {
                var n, t = e.guildEvent,
                    i = e.guildId,
                    o = e.truncate,
                    l = e.onActionTaken,
                    a = e.className,
                    u = e.isNew,
                    s = t.id,
                    d = t.guild_id,
                    f = t.channel_id,
                    p = t.creator_id,
                    v = t.name,
                    h = t.description,
                    b = t.scheduled_start_time,
                    y = t.user_count,
                    E = t.entity_type,
                    m = t.image,
                    j = (0, c.e7)([L.ZP], (function() {
                        return L.ZP.hasRsvp(s, d)
                    }), [s, d]),
                    O = (0, c.e7)([x.Z], (function() {
                        return x.Z.isLurking(d)
                    }), [d]),
                    C = (0, c.e7)([k.Z], (function() {
                        return k.Z.getStageInstanceByChannel(f)
                    }), [f]),
                    Z = (0, c.e7)([_.Z], (function() {
                        return _.Z.getChannel(f)
                    }), [f]),
                    z = (0, c.e7)([I.default], (function() {
                        return I.default.getUser(p)
                    }), [p]),
                    X = function(e) {
                        var n = e.id,
                            t = e.data,
                            r = t.guild,
                            i = t.instance,
                            o = t.speakers,
                            l = t.participantCount,
                            a = e.context,
                            u = (0, c.e7)([g.Z, _.Z], (function() {
                                var e;
                                return g.Z.getGuild(null === (e = _.Z.getChannel(n)) || void 0 === e ? void 0 : e.getGuildId())
                            }), [n]),
                            s = (0, c.e7)([k.Z], (function() {
                                return k.Z.getStageInstanceByChannel(n)
                            }), [n]),
                            d = (0, D.w8)(n, P.pV.SPEAKER),
                            f = (0,
                                D.Rk)(n),
                            p = null != u ? u : r,
                            v = null != s ? s : i,
                            h = null != s ? d : o,
                            b = (null != s ? f : l) - h.length;
                        return {
                            channelId: n,
                            guild: p,
                            stage: v,
                            speakers: h,
                            audienceCount: b,
                            context: a
                        }
                    }({
                        id: f,
                        data: {
                            guild: null,
                            instance: C,
                            speakers: [],
                            participantCount: 0
                        },
                        context: {
                            guildId: d,
                            instance: C
                        }
                    }).speakers,
                    F = (0, c.e7)([w.Z], (function() {
                        return w.Z.getChannelId()
                    })),
                    W = (0, L.xt)(t),
                    q = F === f && null != F && W,
                    K = X.filter((function(e) {
                        return e.type === P.Ui.VOICE
                    })),
                    Y = K.length,
                    Q = (0, c.e7)([T.Z], (function() {
                        return T.Z.can(H.Plq.CONNECT, Z)
                    }), [Z]),
                    $ = (0, S.ZP)(t),
                    ee = (0, A.Z)(d, s),
                    ne = ee.isMember,
                    te = ee.guild,
                    re = (0, V.Z)({
                        guild: te,
                        channel: Z,
                        guildScheduledEvent: t,
                        isActive: W,
                        rsvped: j,
                        onActionTaken: l
                    }),
                    ie = (0, N.Z)(i),
                    oe = O ? void 0 : function() {
                        return (0, M.bO)({
                            eventId: s,
                            parentGuildId: i
                        })
                    };
                return (0, r.jsx)(U.Z, J(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            B(e, n, t[n])
                        }))
                    }
                    return e
                }({
                    guild: te,
                    channel: Z,
                    creator: z,
                    userCount: y,
                    name: v,
                    entityType: E,
                    description: null != h ? h : void 0,
                    location: null !== (n = (0, G.cS)(t)) && void 0 !== n ? n : void 0,
                    startTime: b,
                    imageSource: null != m ? (0, R.Z)(t) : void 0,
                    imageLocation: U.Q.THUMBNAIL,
                    isActive: W,
                    isUserLurking: O,
                    status: t.status,
                    isJoined: q,
                    isMember: ne,
                    isHub: ie,
                    speakers: K,
                    canConnect: Q,
                    speakerCount: Y,
                    rsvped: j,
                    canInvite: $
                }, re), {
                    className: a,
                    onClick: oe,
                    truncate: o,
                    isNew: u
                }))
            }
            var X = t(703790),
                F = t(832642),
                W = t(473708),
                q = t(596113),
                K = t.n(q);

            function Y(e) {
                var n = e.guildId,
                    t = e.onClose,
                    i = f.Z.useExperiment({
                        guildId: n,
                        location: "6597ca_1"
                    }, {
                        autoTrackExposure: !1
                    }).showHubEventsList,
                    o = (0, c.e7)([g.Z, T.Z], (function() {
                        var e = g.Z.getGuild(n);
                        return T.Z.can(H.Plq.MANAGE_ROLES, e)
                    }), [n]),
                    l = (0, c.e7)([g.Z], (function() {
                        var e = g.Z.getGuild(n);
                        return i && (null == e ? void 0 : e.hasFeature(H.oNc.HUB))
                    }), [n, i]);
                return (0, r.jsxs)("div", {
                    className: K().container,
                    children: [(0, r.jsx)(F.Z, {
                        children: (0, r.jsx)("div", {
                            className: K().circle,
                            children: (0, r.jsx)(y.Z, {
                                height: 40,
                                width: 40,
                                className: K().icon
                            })
                        })
                    }), (0, r.jsx)(u.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: K().title,
                        children: l ? W.Z.Messages.HUB_EVENTS_HEADER_TITLE : W.Z.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE
                    }), (0, r.jsx)(u.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: K().subtitle,
                        children: l ? W.Z.Messages.HUB_EVENTS_HEADER_DESCRIPTION : W.Z.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE
                    }), o && (0, r.jsx)(u.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: K().roleTip,
                        children: W.Z.Messages.GUILD_EVENT_ROLE_TIP.format({
                            onClick: function() {
                                X.Z.open(n, H.pNK.ROLES);
                                t()
                            }
                        })
                    })]
                })
            }
            var Q = t(360703),
                $ = t(3155),
                ee = t(290679),
                ne = t(555175),
                te = t.n(ne);

            function re(e, n, t, r, i, o, l) {
                try {
                    var a = e[o](l),
                        c = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function ie(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function l(e) {
                            re(o, r, i, l, a, "next", e)
                        }

                        function a(e) {
                            re(o, r, i, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function oe(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function le(e, n) {
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
            var ae = function(e, n) {
                var t, r, i, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = n.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function ce(e) {
                var n = e.transitionState,
                    o = e.onClose,
                    N = e.guildId,
                    x = (0, b.Dt)(),
                    P = (0, c.e7)([g.Z], (function() {
                        return g.Z.getGuild(N)
                    })),
                    k = (0, C.Z)(null == P ? void 0 : P.id),
                    _ = (0, Z.ZP)(N),
                    T = i.useRef(h.ZP.ackMessageId(N, ee.W.GUILD_EVENT)),
                    w = (0, Q.Z)();
                i.useEffect((function() {
                    O.Z.getGuildEventUserCounts(N);
                    O.Z.getGuildEventsForCurrentUser(N)
                }), [N]);
                i.useEffect((function() {
                    var e = g.Z.getGuild(N);
                    if (null == e ? void 0 : e.hasFeature(H.oNc.HUB)) {
                        if (f.Z.getCurrentConfig({
                                guildId: N,
                                location: "d3755f_1"
                            }).showHubEventsList) {
                            var n = p.ZP.getDefaultChannel(N);
                            null != n && d.c(n.id)
                        }
                    }
                }), [N]);
                i.useEffect((function() {
                    m.default.track(H.rMx.OPEN_MODAL, {
                        type: $.zw,
                        guild_id: N,
                        guild_events_count: _.length
                    })
                }), []);
                i.useEffect((function() {
                    l()(_).map((function(e) {
                        return e.creator_id
                    })).filter(j.lm).uniq().forEach((function(e) {
                        v.Z.requestMember(N, e)
                    }))
                }), [N, _]);
                i.useEffect((function() {
                    null != N && (0, s.Ju)(N, ee.W.GUILD_EVENT)
                }), [N]);
                return (0, r.jsxs)(u.ModalRoot, {
                    size: u.ModalSize.MEDIUM,
                    transitionState: n,
                    "aria-labelledby": x,
                    children: [(0, r.jsxs)(u.ModalHeader, {
                        className: te().header,
                        children: [(0, r.jsx)(y.Z, {
                            className: te().icon
                        }), (0, r.jsx)(u.Heading, {
                            id: x,
                            variant: "heading-md/semibold",
                            children: _.length > 0 ? W.Z.Messages.GUILD_EVENTS_PLURAL.format({
                                number: _.length
                            }) : W.Z.Messages.GUILD_EVENTS
                        }), k && (0,
                            r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: te().divider,
                                children: "|"
                            }), (0, r.jsx)(u.Button, {
                                size: u.Button.Sizes.MIN,
                                onClick: function() {
                                    (0, u.openModalLazy)(ie((function() {
                                        var e, n;
                                        return ae(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return [4, Promise.all([t.e(40532), t.e(86502), t.e(10523), t.e(38501), t.e(21375)]).then(t.bind(t, 738501))];
                                                case 1:
                                                    e = i.sent(), n = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(n, le(function(e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var t = null != arguments[n] ? arguments[n] : {},
                                                                    r = Object.keys(t);
                                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                                }))));
                                                                r.forEach((function(n) {
                                                                    oe(e, n, t[n])
                                                                }))
                                                            }
                                                            return e
                                                        }({}, e), {
                                                            guildId: N
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })), w)
                                },
                                innerClassName: te().button,
                                children: W.Z.Messages.SCHEDULE_EVENT
                            })]
                        }), (0, r.jsx)(u.Clickable, {
                            onClick: o,
                            className: te().iconButton,
                            "aria-label": W.Z.Messages.CLOSE,
                            children: (0, r.jsx)(E.Z, {
                                className: te().icon
                            })
                        })]
                    }), (0,
                        r.jsx)(u.ModalContent, {
                        className: te().content,
                        children: _.length > 0 ? _.map((function(e) {
                            return (0, r.jsx)(z, {
                                guildEvent: e,
                                guildId: N,
                                onActionTaken: o,
                                className: te().eventCard,
                                isNew: null != T.current && a.default.compare(e.id, T.current) > 0
                            }, e.id)
                        })) : (0, r.jsx)(Y, {
                            guildId: N,
                            onClose: o
                        })
                    })]
                })
            }
        },
        173764: (e, n, t) => {
            t.d(n, {
                Z: () => d
            });
            var r = t(785893),
                i = (t(667294), t(294184)),
                o = t.n(i),
                l = t(304548),
                a = t(961241),
                c = t(473708),
                u = t(811948),
                s = t.n(u);

            function d(e) {
                var n = e.guild,
                    t = e.speakers,
                    i = e.speakerCount,
                    u = e.className,
                    d = t.slice(0, 5),
                    f = d.map((function(e) {
                        var t, i;
                        return (0, r.jsxs)("div", {
                            className: s().speakerContainer,
                            children: [(0, r.jsx)(l.Avatar, {
                                src: null == e || null === (t = e.user) || void 0 === t ? void 0 : t.getAvatarURL(n.id, 20),
                                size: l.AvatarSizes.SIZE_20,
                                className: s().avatar,
                                "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                            }), (0, r.jsx)("div", {
                                className: s().textInGridContainer,
                                children: (0, r.jsx)(l.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    className: s().textInGrid,
                                    children: null == e ? void 0 : e.userNick
                                })
                            })]
                        }, null == e || null === (i = e.user) || void 0 === i ? void 0 : i.id)
                    })),
                    p = i - d.length;
                return (0, r.jsxs)("div", {
                    className: o()(s().grid, u),
                    children: [f, p > 0 && (0, r.jsxs)("div", {
                        className: s().speakerContainer,
                        children: [(0, r.jsx)("div", {
                            className: s().iconMicrophone,
                            children: (0, r.jsx)(a.Z, {
                                height: 12
                            })
                        }), (0, r.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: s().textInGrid,
                            children: c.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: p
                            })
                        })]
                    })]
                })
            }
        },
        85941: (e, n, t) => {
            t.d(n, {
                Z: () => w
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(304548),
                l = t(971402),
                a = t(327499),
                c = t(276985),
                u = t(716371),
                s = t(787193),
                d = t(784426),
                f = t(915840),
                p = t(5544),
                v = t(567403),
                g = t(682776),
                h = t(652591),
                b = t(691797),
                y = t(242735),
                E = t(919810),
                m = t(619584),
                j = t(371188),
                O = t(3155),
                C = t(2590),
                Z = t(473708);

            function N(e, n, t, r, i, o, l) {
                try {
                    var a = e[o](l),
                        c = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function x(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function l(e) {
                            N(o, r, i, l, a, "next", e)
                        }

                        function a(e) {
                            N(o, r, i, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function P(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function k(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        P(e, n, t[n])
                    }))
                }
                return e
            }

            function _(e, n) {
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
            var T = function(e, n) {
                var t, r, i, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = n.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function w(e) {
                var n = e.guild,
                    N = e.channel,
                    P = e.guildScheduledEvent,
                    w = e.isActive,
                    I = e.rsvped,
                    M = e.onActionTaken,
                    L = function(e) {
                        e.stopPropagation();
                        I ? y.Z.deleteRsvpForGuildEvent(A, R) : y.Z.createRsvpForGuildEvent(A, R)
                    },
                    S = function(e) {
                        e.stopPropagation();
                        var n = p.ZP.getDefaultChannel(R);
                        (0, o.closeAllModals)();
                        (0, d.XU)(R, null == n ? void 0 : n.id)
                    },
                    D = P.scheduled_start_time,
                    A = P.id,
                    G = P.entity_type,
                    R = P.guild_id,
                    U = (0, (0, s.XJ)(null != N ? N : n).canManageGuildEvent)(P),
                    V = (0, E.ZP)(P),
                    H = (0, m.T)(null == N ? void 0 : N.id, P.id),
                    B = (0, j.ub)(D).withinStartWindow,
                    J = (0, i.e7)([g.Z], (function() {
                        return !(null == N ? void 0 : N.isGuildVocal()) || g.Z.can(C.Plq.CONNECT, N)
                    }), [N]),
                    z = (0, u.J)(R);

                function X() {
                    return (X = x((function(e) {
                        return T(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    e.stopPropagation();
                                    return [4, a.Z.joinGuild(R)];
                                case 1:
                                    n.sent();
                                    v.Z.addConditionalChangeListener((function() {
                                        if (null == v.Z.getGuild(R)) return !0;
                                        w || L(e);
                                        S(e);
                                        return !1
                                    }));
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                return {
                    onDeleteClick: U ? function(e) {
                        e.stopPropagation();
                        U && !w && (0, o.openModal)((function(e) {
                            return (0, r.jsx)(o.ConfirmModal, _(k({}, e), {
                                header: Z.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                                confirmText: Z.Z.Messages.DELETE,
                                cancelText: Z.Z.Messages.CANCEL,
                                onConfirm: function() {
                                    return y.Z.deleteGuildEvent(A, R)
                                },
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    children: Z.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                                })
                            }))
                        }))
                    } : void 0,
                    onContextMenu: function(e) {
                        e.stopPropagation();
                        null != n && (0, l.jW)(e, x((function() {
                            var e, i;
                            return T(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(19887), t.e(71718), t.e(71575), t.e(91406), t.e(43244), t.e(54368), t.e(65278), t.e(1441), t.e(10573)]).then(t.bind(t, 171037))];
                                    case 1:
                                        e = o.sent(), i = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(i, k({
                                                guildEventId: A,
                                                channel: N,
                                                guild: n
                                            }, e))
                                        }]
                                }
                            }))
                        })))
                    },
                    onJoinClick: J || z ? function(e) {
                        e.stopPropagation();
                        if (z) {
                            null == M || M();
                            (0, c.hk)(R)
                        } else if (null == N ? void 0 : N.isGuildStageVoice()) {
                            (0,
                                f.Cq)(N);
                            null == M || M()
                        } else if (null == N ? void 0 : N.isGuildVoice()) {
                            y.Z.joinVoiceEvent(N.guild_id, N.id);
                            null == M || M()
                        }
                    } : void 0,
                    onRsvpClick: L,
                    onStartClick: U && B ? function(e) {
                        e.stopPropagation();
                        (0, o.openModalLazy)(x((function() {
                            var e, n;
                            return T(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(71575), t.e(74544), t.e(1459), t.e(78158)]).then(t.bind(t, 874544))];
                                    case 1:
                                        e = i.sent(), n = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(n, _(k({}, e), {
                                                event: P,
                                                onSuccess: M
                                            }))
                                        }]
                                }
                            }))
                        })))
                    } : void 0,
                    onInviteClick: function(e) {
                        e.stopPropagation();
                        if (null != n)
                            if (V && H)(0, o.openModalLazy)(x((function() {
                                var e, i;
                                return T(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, Promise.all([t.e(40532), t.e(86502), t.e(67551), t.e(75442), t.e(89005)]).then(t.bind(t, 167551))];
                                        case 1:
                                            e = o.sent(), i = e.default;
                                            return [2, function(e) {
                                                return (0, r.jsx)(i, _(k({}, e), {
                                                    guild: n,
                                                    channel: N,
                                                    guildScheduledEvent: P,
                                                    source: C.t4x.GUILD_EVENTS
                                                }))
                                            }]
                                    }
                                }))
                            })));
                            else {
                                var i = function(e) {
                                    var n = e.guildId,
                                        t = e.guildEventId;
                                    return "https://discord.com/events/".concat(n, "/").concat(t)
                                }({
                                    guildId: R,
                                    guildEventId: A
                                });
                                (0, b.JG)(i);
                                h.default.track(C.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                                    guild_id: R,
                                    guild_scheduled_event_id: A
                                })
                            }
                    },
                    onEndClick: U && G === O.WX.EXTERNAL && w ? function(e) {
                        e.stopPropagation();
                        if (U) {
                            var n = function() {
                                y.Z.endEvent(A, R);
                                (0, o.closeAllModals)()
                            };
                            (0, o.openModal)((function(e) {
                                return (0, r.jsx)(o.ConfirmModal, _(k({}, e), {
                                    header: Z.Z.Messages.END_EVENT,
                                    confirmText: Z.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                                    cancelText: Z.Z.Messages.CANCEL,
                                    onConfirm: n,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        children: Z.Z.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                                    })
                                }))
                            }))
                        }
                    } : void 0,
                    onJoinGuildClick: function(e) {
                        return X.apply(this, arguments)
                    },
                    onGoToGuildClick: S
                }
            }
        }
    }
]);