"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [67368, 71775], {
        71775: (e, n, t) => {
            t.d(n, {
                Z: () => u
            });
            var r = t(667294),
                i = t(202351),
                o = t(269300);

            function u(e, n) {
                var t = (0, i.Wu)([o.ZP], (function() {
                    var e, t;
                    return null !== (t = null === (e = o.ZP.getGuildScheduledEvent(n)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== t ? t : []
                }));
                return r.useMemo((function() {
                    return null == t ? void 0 : t.find((function(n) {
                        return n.event_exception_id === e
                    }))
                }), [t, e])
            }
        },
        389853: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => ae
            });
            var r = t(785893),
                i = t(667294),
                o = t(496486),
                u = t.n(o),
                c = t(842227),
                a = t(202351),
                l = t(70418),
                s = t(496916),
                d = t(937119),
                f = t(172028),
                p = t(5544),
                g = t(984216),
                b = t(567403),
                v = t(179913),
                h = t(443812),
                E = t(890251),
                y = t(189865),
                m = t(652591),
                O = t(72580),
                Z = t(634080),
                j = t(678545),
                P = t(201441),
                _ = t(350403),
                w = t(944522),
                x = t(808194),
                N = t(766496),
                I = t(61209),
                C = t(682776),
                k = t(563367),
                S = t(473903),
                T = t(382840),
                M = t(269300),
                D = t(919810),
                L = t(442812);
            var U = t(158499),
                G = t(32421),
                A = t(205316),
                H = t(842783),
                R = t(85941),
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

            function z(e, n) {
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

            function q(e) {
                var n, t = e.guildEvent,
                    i = e.guildId,
                    o = e.truncate,
                    u = e.onActionTaken,
                    c = e.className,
                    l = e.isNew,
                    s = t.id,
                    d = t.guild_id,
                    f = t.channel_id,
                    p = t.creator_id,
                    g = t.name,
                    v = t.description,
                    h = t.entity_type,
                    E = t.image,
                    y = t.recurrence_rule,
                    m = (0, a.e7)([M.ZP], (function() {
                        return M.ZP.hasRsvp(s, d)
                    }), [s, d]),
                    O = (0, a.e7)([w.Z], (function() {
                        return w.Z.isLurking(d)
                    }), [d]),
                    Z = (0, a.e7)([N.Z], (function() {
                        return N.Z.getStageInstanceByChannel(f)
                    }), [f]),
                    j = (0, a.e7)([I.Z], (function() {
                        return I.Z.getChannel(f)
                    }), [f]),
                    P = (0, a.e7)([S.default], (function() {
                        return S.default.getUser(p)
                    }), [p]),
                    q = function(e) {
                        var n = e.id,
                            t = e.data,
                            r = t.guild,
                            i = t.instance,
                            o = t.speakers,
                            u = t.participantCount,
                            c = e.context,
                            l = (0, a.e7)([b.Z, I.Z], (function() {
                                var e;
                                return b.Z.getGuild(null === (e = I.Z.getChannel(n)) || void 0 === e ? void 0 : e.getGuildId())
                            }), [n]),
                            s = (0, a.e7)([N.Z], (function() {
                                return N.Z.getStageInstanceByChannel(n)
                            }), [n]),
                            d = (0, L.w8)(n, x.pV.SPEAKER),
                            f = (0, L.Rk)(n),
                            p = null != l ? l : r,
                            g = null != s ? s : i,
                            v = null != s ? d : o,
                            h = (null != s ? f : u) - v.length;
                        return {
                            channelId: n,
                            guild: p,
                            stage: g,
                            speakers: v,
                            audienceCount: h,
                            context: c
                        }
                    }({
                        id: f,
                        data: {
                            guild: null,
                            instance: Z,
                            speakers: [],
                            participantCount: 0
                        },
                        context: {
                            guildId: d,
                            instance: Z
                        }
                    }).speakers,
                    F = (0, a.e7)([k.Z], (function() {
                        return k.Z.getChannelId()
                    })),
                    W = (0, M.xt)(t),
                    J = F === f && null != F && W,
                    K = q.filter((function(e) {
                        return e.type === x.Ui.VOICE
                    })),
                    Y = K.length,
                    Q = (0, a.e7)([C.Z], (function() {
                        return C.Z.can(V.Plq.CONNECT, j)
                    }), [j]),
                    X = (0, D.ZP)(t),
                    $ = (0, U.Z)(d, s),
                    ee = $.isMember,
                    ne = $.guild,
                    te = (0, R.Z)({
                        guild: ne,
                        channel: j,
                        guildScheduledEvent: t,
                        isActive: W,
                        rsvped: m,
                        onActionTaken: u
                    }),
                    re = (0, _.Z)(i),
                    ie = O ? void 0 : function(e) {
                        return (0, T.bO)({
                            eventId: s,
                            parentGuildId: i,
                            recurrenceId: e
                        })
                    };
                return (0, r.jsx)(H.Z, z(function(e) {
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
                    guild: ne,
                    channel: j,
                    creator: P,
                    name: g,
                    entityType: h,
                    description: null != v ? v : void 0,
                    location: null !== (n = (0, G.cS)(t)) && void 0 !== n ? n : void 0,
                    imageSource: null != E ? (0, A.Z)(t) : void 0,
                    imageLocation: H.Q.THUMBNAIL,
                    isActive: W,
                    isUserLurking: O,
                    isJoined: J,
                    isMember: ee,
                    isHub: re,
                    speakers: K,
                    canConnect: Q,
                    speakerCount: Y,
                    rsvped: m,
                    canInvite: X
                }, te), {
                    className: c,
                    onClick: ie,
                    truncate: o,
                    isNew: l,
                    guildEventId: s,
                    recurrenceRule: y
                }))
            }
            var F = t(703790),
                W = t(832642),
                J = t(473708),
                K = t(596113),
                Y = t.n(K);

            function Q(e) {
                var n = e.guildId,
                    t = e.onClose,
                    i = f.Z.useExperiment({
                        guildId: n,
                        location: "6597ca_1"
                    }, {
                        autoTrackExposure: !1
                    }).showHubEventsList,
                    o = (0, a.e7)([b.Z, C.Z], (function() {
                        var e = b.Z.getGuild(n);
                        return C.Z.can(V.Plq.MANAGE_ROLES, e)
                    }), [n]),
                    u = (0, a.e7)([b.Z], (function() {
                        var e = b.Z.getGuild(n);
                        return i && (null == e ? void 0 : e.hasFeature(V.oNc.HUB))
                    }), [n, i]);
                return (0, r.jsxs)("div", {
                    className: Y().container,
                    children: [(0, r.jsx)(W.Z, {
                        children: (0, r.jsx)("div", {
                            className: Y().circle,
                            children: (0, r.jsx)(E.Z, {
                                height: 40,
                                width: 40,
                                className: Y().icon
                            })
                        })
                    }), (0, r.jsx)(l.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: Y().title,
                        children: u ? J.Z.Messages.HUB_EVENTS_HEADER_TITLE : J.Z.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE
                    }), (0, r.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: Y().subtitle,
                        children: u ? J.Z.Messages.HUB_EVENTS_HEADER_DESCRIPTION : J.Z.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE
                    }), o && (0, r.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: Y().roleTip,
                        children: J.Z.Messages.GUILD_EVENT_ROLE_TIP.format({
                            onClick: function() {
                                F.Z.open(n, V.pNK.ROLES);
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

            function re(e, n, t, r, i, o, u) {
                try {
                    var c = e[o](u),
                        a = c.value
                } catch (e) {
                    t(e);
                    return
                }
                c.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function ie(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function u(e) {
                            re(o, r, i, u, c, "next", e)
                        }

                        function c(e) {
                            re(o, r, i, u, c, "throw", e)
                        }
                        u(void 0)
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

            function ue(e, n) {
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
            var ce = function(e, n) {
                var t, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function c(o) {
                    return function(c) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = n.call(e, u)
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
                        }([o, c])
                    }
                }
            };

            function ae(e) {
                var n = e.transitionState,
                    o = e.onClose,
                    _ = e.guildId,
                    w = (0, h.Dt)(),
                    x = (0, a.e7)([b.Z], (function() {
                        return b.Z.getGuild(_)
                    })),
                    N = (0, j.Z)(null == x ? void 0 : x.id),
                    I = (0, P.ZP)(_),
                    C = i.useRef(v.ZP.ackMessageId(_, ee.W.GUILD_EVENT)),
                    k = (0, X.Z)();
                i.useEffect((function() {
                    Z.Z.getGuildEventUserCounts(_);
                    Z.Z.getGuildEventsForCurrentUser(_)
                }), [_]);
                i.useEffect((function() {
                    var e = b.Z.getGuild(_);
                    if (null == e ? void 0 : e.hasFeature(V.oNc.HUB)) {
                        if (f.Z.getCurrentConfig({
                                guildId: _,
                                location: "d3755f_1"
                            }).showHubEventsList) {
                            var n = p.ZP.getDefaultChannel(_);
                            null != n && d.c(n.id)
                        }
                    }
                }), [_]);
                i.useEffect((function() {
                    m.default.track(V.rMx.OPEN_MODAL, {
                        type: $.zw,
                        guild_id: _,
                        guild_events_count: I.length
                    })
                }), []);
                i.useEffect((function() {
                    u()(I).map((function(e) {
                        return e.creator_id
                    })).filter(O.lm).uniq().forEach((function(e) {
                        g.Z.requestMember(_, e)
                    }))
                }), [_, I]);
                i.useEffect((function() {
                    null != _ && (0, s.Ju)(_, ee.W.GUILD_EVENT)
                }), [_]);
                return (0, r.jsxs)(l.ModalRoot, {
                    size: l.ModalSize.MEDIUM,
                    transitionState: n,
                    "aria-labelledby": w,
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        className: te().header,
                        children: [(0, r.jsx)(E.Z, {
                            className: te().icon
                        }), (0, r.jsx)(l.Heading, {
                            id: w,
                            variant: "heading-md/semibold",
                            children: I.length > 0 ? J.Z.Messages.GUILD_EVENTS_PLURAL.format({
                                number: I.length
                            }) : J.Z.Messages.GUILD_EVENTS
                        }), N && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: te().divider,
                                children: "|"
                            }), (0, r.jsx)(l.Button, {
                                size: l.Button.Sizes.MIN,
                                onClick: function() {
                                    (0, l.openModalLazy)(ie((function() {
                                        var e, n;
                                        return ce(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return [4, Promise.all([t.e(40532), t.e(86502), t.e(10523), t.e(14688), t.e(89663), t.e(21375)]).then(t.bind(t, 689663))];
                                                case 1:
                                                    e = i.sent(), n = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(n, ue(function(e) {
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
                                                            guildId: _
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })), k)
                                },
                                innerClassName: te().button,
                                children: J.Z.Messages.SCHEDULE_EVENT
                            })]
                        }), (0, r.jsx)(l.Clickable, {
                            onClick: o,
                            className: te().iconButton,
                            "aria-label": J.Z.Messages.CLOSE,
                            children: (0, r.jsx)(y.Z, {
                                className: te().icon
                            })
                        })]
                    }), (0, r.jsx)(l.ModalContent, {
                        className: te().content,
                        children: I.length > 0 ? I.map((function(e) {
                            return (0, r.jsx)(q, {
                                guildEvent: e,
                                guildId: _,
                                onActionTaken: o,
                                isNew: null != C.current && c.default.compare(e.id, C.current) > 0
                            }, e.id)
                        })) : (0, r.jsx)(Q, {
                            guildId: _,
                            onClose: o
                        })
                    })]
                })
            }
        }
    }
]);