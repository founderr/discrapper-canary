"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [89853], {
        383495: (e, n, t) => {
            t.d(n, {
                Q: () => w,
                Z: () => S
            });
            var r = t(785893),
                i = t(667294),
                a = t(294184),
                o = t.n(a),
                l = t(202351),
                c = t(70418),
                s = t(296916),
                u = t(344832),
                d = t(787193),
                f = t(682776),
                p = t(124251),
                v = t(746103),
                g = t(599467),
                h = t(619584),
                b = t(951687),
                m = t(699296),
                j = t(220109),
                E = t(26601),
                O = t(173764),
                y = t(3155),
                x = t(2590),
                N = t(473708),
                C = t(919569),
                k = t.n(C);

            function Z(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function P(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Z(e, n, t[n])
                    }))
                }
                return e
            }

            function I(e, n) {
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
            var w;
            ! function(e) {
                e[e.BANNER = 0] = "BANNER";
                e[e.THUMBNAIL = 1] = "THUMBNAIL"
            }(w || (w = {}));

            function T(e) {
                var n = e.channel,
                    t = e.onClick,
                    a = (0, d.XJ)(n).canManageAllEvents,
                    p = (0, l.e7)([f.Z], (function() {
                        return !n.isGuildVocal() || f.Z.can(x.Plq.CONNECT, n)
                    }), [n]),
                    v = i.useMemo((function() {
                        return (0, s.Z)(n)
                    }), [n]),
                    g = (0, u.KS)(n);
                return (0, r.jsx)(c.Tooltip, {
                    text: N.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !p && null != t,
                    children: function(e) {
                        var i;
                        return (0, r.jsxs)(c.Clickable, I(P({}, e), {
                            className: o()(k().inline, k().channelContainer, (i = {}, Z(i, k().channelContainerEnabled, p && null != t),
                                Z(i, k().channelContainerDisabled, !p && null != t), i)),
                            onClick: t,
                            children: [(0, r.jsx)(c.Tooltip, {
                                text: N.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                                shouldShow: a && v && p && null != t,
                                children: function(e) {
                                    return null != g ? (0, r.jsx)(g, I(P({}, e), {
                                        width: 20,
                                        height: 20,
                                        className: k().icon
                                    })) : null
                                }
                            }), (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: k().channelLocation,
                                children: n.name
                            })]
                        }))
                    }
                })
            }

            function _(e) {
                var n = e.guild,
                    t = e.channel,
                    i = e.onJoinClick,
                    a = e.handleLocationClick,
                    l = e.location,
                    s = e.isExternal;
                return e.isHub ? null == n ? (0, r.jsx)("div", {}) : (0, r.jsxs)("div", {
                    className: k().inline,
                    children: [(0, r.jsx)(p.Z, {
                        className: k().guildIcon,
                        size: p.Z.Sizes.MINI,
                        active: !0,
                        guild: n
                    }), (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == n ? void 0 : n.name
                    })]
                }) : null != t ? (0, r.jsx)(T, {
                    channel: t,
                    onClick: i
                }) : (0, r.jsxs)(c.Clickable, {
                    className: k().inline,
                    onClick: a,
                    children: [(0, r.jsx)(v.Z, {
                        height: 20,
                        width: 20,
                        className: o()(k().channelContainer, k().icon)
                    }), (0, r.jsx)(c.Text, {
                        className: s ? k().externalLocation : k().channelLocation,
                        variant: "text-sm/normal",
                        children: (0, g.m)(l, !0)
                    })]
                })
            }

            function S(e) {
                var n, t = e.className,
                    i = e.guild,
                    a = e.channel,
                    l = e.creator,
                    s = e.name,
                    u = e.entityType,
                    d = e.description,
                    f = e.imageLocation,
                    p = void 0 === f ? w.BANNER : f,
                    v = e.imageSource,
                    g = e.isActive,
                    x = e.isUserLurking,
                    N = e.isJoined,
                    C = void 0 !== N && N,
                    P = e.isMember,
                    I = void 0 !== P && P,
                    T = e.isHub,
                    S = void 0 !== T && T,
                    L = e.speakers,
                    M = e.speakerCount,
                    A = e.rsvped,
                    D = e.canInvite,
                    G = e.location,
                    U = e.truncate,
                    R = e.onContextMenu,
                    H = e.onJoinClick,
                    V = e.onJoinGuildClick,
                    B = e.onGoToGuildClick,
                    J = e.onRsvpClick,
                    z = e.onStartClick,
                    q = e.onInviteClick,
                    F = e.onEndClick,
                    K = e.onClick,
                    W = e.isNew,
                    Y = e.guildEventId,
                    Q = e.eventPreview,
                    X = (0, h.Q)(a, u),
                    $ = u === y.WX.EXTERNAL,
                    ee = $ ? function(e) {
                        return e.stopPropagation()
                    } : void 0;
                return (0, r.jsxs)(c.ClickableContainer, {
                    "aria-label": s,
                    onClick: K,
                    onContextMenu: R,
                    className: o()(k().card, (n = {}, Z(n, k().joined, C), Z(n, k().lurking, x), n), t),
                    children: [p === w.BANNER && (0, r.jsx)(m.Z, {
                        source: v
                    }), (0, r.jsx)(j.ZP, {
                        creator: l,
                        name: s,
                        description: d,
                        imageSource: p === w.THUMBNAIL ? v : null,
                        truncate: U,
                        guildId: null == i ? void 0 : i.id,
                        isHub: S,
                        isNew: W,
                        guildEventId: Y,
                        eventPreview: Q
                    }), g && null != i && null != L && M > 0 && (0, r.jsx)(O.Z, {
                        guild: i,
                        speakers: L,
                        speakerCount: M,
                        className: k().spacing
                    }), (0, r.jsx)("hr", {
                        className: k().divider
                    }), (0, r.jsxs)("div", {
                        className: o()(k().inline, k().footer),
                        children: [(0, r.jsx)(_, {
                            guild: i,
                            channel: a,
                            onJoinClick: H,
                            handleLocationClick: ee,
                            location: G,
                            isExternal: $,
                            isHub: S
                        }), S ? (0, r.jsx)(E.Z, {
                            isActive: g,
                            isUserLurking: x,
                            isMember: I,
                            rsvped: A,
                            onRsvpClick: J,
                            onJoinGuildClick: V,
                            onGoToGuildClick: B,
                            guildName: null == i ? void 0 : i.name,
                            canInvite: D,
                            isChannelPublic: X,
                            onInviteClick: q
                        }) : (0, r.jsx)(b.ZP, {
                            entityType: u,
                            isJoined: C,
                            isActive: g,
                            isUserLurking: x,
                            rsvped: A,
                            canInvite: D,
                            isChannelPublic: X,
                            onContextMenu: R,
                            onJoinClick: H,
                            onRsvpClick: J,
                            onStartClick: z,
                            onInviteClick: q,
                            onEndClick: F
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
                a = t(496486),
                o = t.n(a),
                l = t(842227),
                c = t(202351),
                s = t(70418),
                u = t(496916),
                d = t(937119),
                f = t(172028),
                p = t(5544),
                v = t(984216),
                g = t(567403),
                h = t(179913),
                b = t(443812),
                m = t(890251),
                j = t(189865),
                E = t(652591),
                O = t(72580),
                y = t(634080),
                x = t(678545),
                N = t(201441),
                C = t(350403),
                k = t(944522),
                Z = t(808194),
                P = t(766496),
                I = t(61209),
                w = t(682776),
                T = t(563367),
                _ = t(473903),
                S = t(382840),
                L = t(269300),
                M = t(919810),
                A = t(442812);
            var D = t(158499),
                G = t(32421),
                U = t(205316),
                R = t(383495),
                H = t(85941),
                V = t(2590);

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
                    a = e.truncate,
                    o = e.onActionTaken,
                    l = e.className,
                    s = e.isNew,
                    u = t.id,
                    d = t.guild_id,
                    f = t.channel_id,
                    p = t.creator_id,
                    v = t.name,
                    h = t.description,
                    b = t.entity_type,
                    m = t.image,
                    j = (0, c.e7)([L.ZP], (function() {
                        return L.ZP.hasRsvp(u, d)
                    }), [u, d]),
                    E = (0, c.e7)([k.Z], (function() {
                        return k.Z.isLurking(d)
                    }), [d]),
                    O = (0, c.e7)([P.Z], (function() {
                        return P.Z.getStageInstanceByChannel(f)
                    }), [f]),
                    y = (0, c.e7)([I.Z], (function() {
                        return I.Z.getChannel(f)
                    }), [f]),
                    x = (0, c.e7)([_.default], (function() {
                        return _.default.getUser(p)
                    }), [p]),
                    N = function(e) {
                        var n = e.id,
                            t = e.data,
                            r = t.guild,
                            i = t.instance,
                            a = t.speakers,
                            o = t.participantCount,
                            l = e.context,
                            s = (0, c.e7)([g.Z, I.Z], (function() {
                                var e;
                                return g.Z.getGuild(null === (e = I.Z.getChannel(n)) || void 0 === e ? void 0 : e.getGuildId())
                            }), [n]),
                            u = (0, c.e7)([P.Z], (function() {
                                return P.Z.getStageInstanceByChannel(n)
                            }), [n]),
                            d = (0, A.w8)(n, Z.pV.SPEAKER),
                            f = (0,
                                A.Rk)(n),
                            p = null != s ? s : r,
                            v = null != u ? u : i,
                            h = null != u ? d : a,
                            b = (null != u ? f : o) - h.length;
                        return {
                            channelId: n,
                            guild: p,
                            stage: v,
                            speakers: h,
                            audienceCount: b,
                            context: l
                        }
                    }({
                        id: f,
                        data: {
                            guild: null,
                            instance: O,
                            speakers: [],
                            participantCount: 0
                        },
                        context: {
                            guildId: d,
                            instance: O
                        }
                    }).speakers,
                    z = (0, c.e7)([T.Z], (function() {
                        return T.Z.getChannelId()
                    })),
                    q = (0, L.xt)(t),
                    F = z === f && null != z && q,
                    K = N.filter((function(e) {
                        return e.type === Z.Ui.VOICE
                    })),
                    W = K.length,
                    Y = (0, c.e7)([w.Z], (function() {
                        return w.Z.can(V.Plq.CONNECT, y)
                    }), [y]),
                    Q = (0, M.ZP)(t),
                    X = (0, D.Z)(d, u),
                    $ = X.isMember,
                    ee = X.guild,
                    ne = (0, H.Z)({
                        guild: ee,
                        channel: y,
                        guildScheduledEvent: t,
                        isActive: q,
                        rsvped: j,
                        onActionTaken: o
                    }),
                    te = (0, C.Z)(i),
                    re = E ? void 0 : function() {
                        return (0, S.bO)({
                            eventId: u,
                            parentGuildId: i
                        })
                    };
                return (0, r.jsx)(R.Z, J(function(e) {
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
                    guild: ee,
                    channel: y,
                    creator: x,
                    name: v,
                    entityType: b,
                    description: null != h ? h : void 0,
                    location: null !== (n = (0, G.cS)(t)) && void 0 !== n ? n : void 0,
                    imageSource: null != m ? (0, U.Z)(t) : void 0,
                    imageLocation: R.Q.THUMBNAIL,
                    isActive: q,
                    isUserLurking: E,
                    isJoined: F,
                    isMember: $,
                    isHub: te,
                    speakers: K,
                    canConnect: Y,
                    speakerCount: W,
                    rsvped: j,
                    canInvite: Q
                }, ne), {
                    className: l,
                    onClick: re,
                    truncate: a,
                    isNew: s,
                    guildEventId: u
                }))
            }
            var q = t(703790),
                F = t(832642),
                K = t(473708),
                W = t(596113),
                Y = t.n(W);

            function Q(e) {
                var n = e.guildId,
                    t = e.onClose,
                    i = f.Z.useExperiment({
                        guildId: n,
                        location: "6597ca_1"
                    }, {
                        autoTrackExposure: !1
                    }).showHubEventsList,
                    a = (0, c.e7)([g.Z, w.Z], (function() {
                        var e = g.Z.getGuild(n);
                        return w.Z.can(V.Plq.MANAGE_ROLES, e)
                    }), [n]),
                    o = (0, c.e7)([g.Z], (function() {
                        var e = g.Z.getGuild(n);
                        return i && (null == e ? void 0 : e.hasFeature(V.oNc.HUB))
                    }), [n, i]);
                return (0, r.jsxs)("div", {
                    className: Y().container,
                    children: [(0, r.jsx)(F.Z, {
                        children: (0, r.jsx)("div", {
                            className: Y().circle,
                            children: (0, r.jsx)(m.Z, {
                                height: 40,
                                width: 40,
                                className: Y().icon
                            })
                        })
                    }), (0, r.jsx)(s.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: Y().title,
                        children: o ? K.Z.Messages.HUB_EVENTS_HEADER_TITLE : K.Z.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE
                    }), (0, r.jsx)(s.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: Y().subtitle,
                        children: o ? K.Z.Messages.HUB_EVENTS_HEADER_DESCRIPTION : K.Z.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE
                    }), a && (0, r.jsx)(s.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: Y().roleTip,
                        children: K.Z.Messages.GUILD_EVENT_ROLE_TIP.format({
                            onClick: function() {
                                q.Z.open(n, V.pNK.ROLES);
                                t()
                            }
                        })
                    })]
                })
            }
            var X = t(360703),
                $ = t(3155),
                ee = t(290679),
                ne = t(555175),
                te = t.n(ne);

            function re(e, n, t, r, i, a, o) {
                try {
                    var l = e[a](o),
                        c = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function ie(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);

                        function o(e) {
                            re(a, r, i, o, l, "next", e)
                        }

                        function l(e) {
                            re(a, r, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function ae(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function oe(e, n) {
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
            var le = function(e, n) {
                var t, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1,
                                    r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };

            function ce(e) {
                var n = e.transitionState,
                    a = e.onClose,
                    C = e.guildId,
                    k = (0, b.Dt)(),
                    Z = (0, c.e7)([g.Z], (function() {
                        return g.Z.getGuild(C)
                    })),
                    P = (0, x.Z)(null == Z ? void 0 : Z.id),
                    I = (0, N.ZP)(C),
                    w = i.useRef(h.ZP.ackMessageId(C, ee.W.GUILD_EVENT)),
                    T = (0, X.Z)();
                i.useEffect((function() {
                    y.Z.getGuildEventUserCounts(C);
                    y.Z.getGuildEventsForCurrentUser(C)
                }), [C]);
                i.useEffect((function() {
                    var e = g.Z.getGuild(C);
                    if (null == e ? void 0 : e.hasFeature(V.oNc.HUB)) {
                        if (f.Z.getCurrentConfig({
                                guildId: C,
                                location: "d3755f_1"
                            }).showHubEventsList) {
                            var n = p.ZP.getDefaultChannel(C);
                            null != n && d.c(n.id)
                        }
                    }
                }), [C]);
                i.useEffect((function() {
                    E.default.track(V.rMx.OPEN_MODAL, {
                        type: $.zw,
                        guild_id: C,
                        guild_events_count: I.length
                    })
                }), []);
                i.useEffect((function() {
                    o()(I).map((function(e) {
                        return e.creator_id
                    })).filter(O.lm).uniq().forEach((function(e) {
                        v.Z.requestMember(C, e)
                    }))
                }), [C, I]);
                i.useEffect((function() {
                    null != C && (0, u.Ju)(C, ee.W.GUILD_EVENT)
                }), [C]);
                return (0, r.jsxs)(s.ModalRoot, {
                    size: s.ModalSize.MEDIUM,
                    transitionState: n,
                    "aria-labelledby": k,
                    children: [(0, r.jsxs)(s.ModalHeader, {
                        className: te().header,
                        children: [(0, r.jsx)(m.Z, {
                            className: te().icon
                        }), (0, r.jsx)(s.Heading, {
                            id: k,
                            variant: "heading-md/semibold",
                            children: I.length > 0 ? K.Z.Messages.GUILD_EVENTS_PLURAL.format({
                                number: I.length
                            }) : K.Z.Messages.GUILD_EVENTS
                        }), P && (0,
                            r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: te().divider,
                                children: "|"
                            }), (0, r.jsx)(s.Button, {
                                size: s.Button.Sizes.MIN,
                                onClick: function() {
                                    (0, s.openModalLazy)(ie((function() {
                                        var e, n;
                                        return le(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return [4, Promise.all([t.e(40532), t.e(86502), t.e(10523), t.e(38501), t.e(21375)]).then(t.bind(t, 738501))];
                                                case 1:
                                                    e = i.sent(), n = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(n, oe(function(e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var t = null != arguments[n] ? arguments[n] : {},
                                                                    r = Object.keys(t);
                                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                                }))));
                                                                r.forEach((function(n) {
                                                                    ae(e, n, t[n])
                                                                }))
                                                            }
                                                            return e
                                                        }({}, e), {
                                                            guildId: C
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })), T)
                                },
                                innerClassName: te().button,
                                children: K.Z.Messages.SCHEDULE_EVENT
                            })]
                        }), (0, r.jsx)(s.Clickable, {
                            onClick: a,
                            className: te().iconButton,
                            "aria-label": K.Z.Messages.CLOSE,
                            children: (0, r.jsx)(j.Z, {
                                className: te().icon
                            })
                        })]
                    }), (0,
                        r.jsx)(s.ModalContent, {
                        className: te().content,
                        children: I.length > 0 ? I.map((function(e) {
                            return (0, r.jsx)(z, {
                                guildEvent: e,
                                guildId: C,
                                onActionTaken: a,
                                className: te().eventCard,
                                isNew: null != w.current && l.default.compare(e.id, w.current) > 0
                            }, e.id)
                        })) : (0, r.jsx)(Q, {
                            guildId: C,
                            onClose: a
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
                a = t.n(i),
                o = t(70418),
                l = t(961241),
                c = t(473708),
                s = t(811948),
                u = t.n(s);

            function d(e) {
                var n = e.guild,
                    t = e.speakers,
                    i = e.speakerCount,
                    s = e.className,
                    d = t.slice(0, 5),
                    f = d.map((function(e) {
                        var t, i;
                        return (0, r.jsxs)("div", {
                            className: u().speakerContainer,
                            children: [(0, r.jsx)(o.Avatar, {
                                src: null == e || null === (t = e.user) || void 0 === t ? void 0 : t.getAvatarURL(n.id, 20),
                                size: o.AvatarSizes.SIZE_20,
                                className: u().avatar,
                                "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                            }), (0, r.jsx)("div", {
                                className: u().textInGridContainer,
                                children: (0, r.jsx)(o.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    className: u().textInGrid,
                                    children: null == e ? void 0 : e.userNick
                                })
                            })]
                        }, null == e || null === (i = e.user) || void 0 === i ? void 0 : i.id)
                    })),
                    p = i - d.length;
                return (0, r.jsxs)("div", {
                    className: a()(u().grid, s),
                    children: [f, p > 0 && (0, r.jsxs)("div", {
                        className: u().speakerContainer,
                        children: [(0, r.jsx)("div", {
                            className: u().iconMicrophone,
                            children: (0, r.jsx)(l.Z, {
                                height: 12
                            })
                        }), (0, r.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: u().textInGrid,
                            children: c.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: p
                            })
                        })]
                    })]
                })
            }
        }
    }
]);