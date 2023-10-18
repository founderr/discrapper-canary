(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [78305], {
        483683: (e, n, t) => {
            e.exports = t.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, n, t) => {
            e.exports = t.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        621647: (e, n, t) => {
            "use strict";
            t.d(n, {
                x: () => u
            });
            var r = t(473903),
                i = t(775173),
                l = t(72580),
                a = t(2590);

            function o(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function s(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, l = [],
                            a = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    t = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case a.d4z.DM:
                        var o = s(e.recipients.map(r.default.getUser).filter(l.lm), 1),
                            u = o[0];
                        return null == u ? null : u.getAvatarURL(void 0, n, t);
                    case a.d4z.GROUP_DM:
                        return i.ZP.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: n
                        })
                }
            }
        },
        79522: (e, n, t) => {
            "use strict";
            t.d(n, {
                AN: () => o,
                LK: () => s,
                TT: () => a
            });
            var r = t(940060),
                i = t(227202),
                l = t(2590),
                a = l.Plq.VIEW_CHANNEL,
                o = r.Z.combine(a, l.Plq.CONNECT),
                s = r.Z.combine(a, i.yP)
        },
        434149: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => o
            });
            var r = t(667294),
                i = t(202351),
                l = t(327499),
                a = t(473903);

            function o(e) {
                var n = (0,
                    i.e7)([a.default], (function() {
                    return a.default.getUser(null == e ? void 0 : e.creator_id)
                }), [e]);
                r.useEffect((function() {
                    null == n && null != (null == e ? void 0 : e.creator_id) && l.Z.requestMembersById(e.guild_id, e.creator_id)
                }), [e, n]);
                return n
            }
        },
        605013: (e, n, t) => {
            "use strict";
            t.d(n, {
                Qt: () => w,
                ZP: () => R
            });
            var r = t(785893),
                i = t(667294),
                l = t(294184),
                a = t.n(l),
                o = t(202351),
                s = t(70418),
                u = t(224813),
                c = t(116404),
                d = t(915840),
                f = t(848285),
                v = t(61209),
                h = t(567403),
                m = t(206986),
                p = t(606483),
                g = t(414392),
                b = t(621329),
                y = t(382840),
                j = t(269300),
                N = t(242735),
                x = t(599467),
                E = t(434149),
                I = t(205316),
                C = t(699296),
                S = t(220109),
                O = t(81472),
                T = t(3155),
                _ = t(473708),
                Z = t(554715),
                A = t.n(Z);

            function P(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            var w = function(e, n) {
                    switch (null == e ? void 0 : e.entity_type) {
                        case T.WX.STAGE_INSTANCE:
                            return function(e, n) {
                                return function(t) {
                                    var r = v.Z.getChannel(e.channel_id);
                                    if (null != r) {
                                        t.stopPropagation();
                                        (0, d.Cq)(r);
                                        null == n || n(t)
                                    }
                                }
                            }(e, n);
                        case T.WX.VOICE:
                            return function(e, n) {
                                return function(t) {
                                    t.stopPropagation();
                                    c.default.selectVoiceChannel(e.channel_id, !1);
                                    null == n || n(t)
                                }
                            }(e, n)
                    }
                    return function() {}
                },
                k = function(e, n) {
                    return n && [T.WX.STAGE_INSTANCE, T.WX.VOICE].includes(null == e ? void 0 : e.entity_type)
                },
                L = i.memo((function(e) {
                    var n = e.guild,
                        t = e.guildScheduledEvent,
                        l = e.channel,
                        a = e.isMember,
                        c = (0, o.e7)([h.Z], (function() {
                            return null == n ? null : null !== (e = h.Z.getGuild(n.id)) && void 0 !== e ? e : new f.Z(n);
                            var e
                        }), [n]),
                        d = (0, O.u)(t, l),
                        v = i.useCallback((function(e) {
                            if (a && null != t) {
                                e.stopPropagation();
                                (0, u.B)(t)
                            }
                        }), [a, t]),
                        g = i.useCallback((function(e) {
                            w(t)(e)
                        }), [t]);
                    if (null == c) return null;
                    var b, y = null == d ? void 0 : d.IconComponent,
                        j = (0, r.jsxs)(r.Fragment, {
                            children: [null != y && (0, r.jsx)(y, {
                                width: 16,
                                height: 16,
                                className: A().channelIcon
                            }), (0, r.jsx)(s.Text, {
                                className: A().channelDescription,
                                variant: "text-xs/normal",
                                children: (0, x.m)(null !== (b = null == d ? void 0 : d.locationName) && void 0 !== b ? b : "", !0)
                            })]
                        });
                    return (0, r.jsxs)("div", {
                        className: A().inviteDetailsContainer,
                        children: [(0,
                            r.jsx)(p.Z.Icon, {
                            guild: c,
                            onClick: v
                        }), (0, r.jsxs)("div", {
                            className: A().verticalContainer,
                            children: [(0, r.jsxs)("div", {
                                className: A().guildChannelInfoContainer,
                                children: [(0, r.jsx)(m.Z, {
                                    guild: c,
                                    tooltipPosition: "top",
                                    tooltipColor: s.Tooltip.Colors.PRIMARY,
                                    size: 16,
                                    className: A().guildBadge
                                }), (0, r.jsx)(s.Clickable, {
                                    className: A().guildNameClickable,
                                    onClick: v,
                                    children: (0, r.jsx)(s.Heading, {
                                        className: a ? A().guildNameLinkable : A().guildName,
                                        variant: "text-sm/medium",
                                        children: c.name
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: A().channelInfoContainer,
                                children: k(t, a) ? (0, r.jsx)(s.Clickable, {
                                    className: A().channelLocationLink,
                                    onClick: g,
                                    children: j
                                }) : j
                            })]
                        })]
                    })
                })),
                M = i.memo((function(e) {
                    var n = e.guildId,
                        t = e.guildScheduledEventId,
                        i = e.isActive,
                        l = e.isEnded,
                        a = e.isMember,
                        u = e.isExternal,
                        c = e.onAcceptInstantInvite,
                        d = e.onTransitionToInviteChannel,
                        f = (0, o.e7)([j.ZP], (function() {
                            return j.ZP.hasRsvp(t, n)
                        }), [n, t]),
                        v = function(e) {
                            e.stopPropagation();
                            a ? i && d() : c()
                        };
                    return a ? i ? (0, r.jsx)(s.Button, {
                        className: A().button,
                        size: s.Button.Sizes.SMALL,
                        onClick: function(e) {
                            u || v(e)
                        },
                        color: u ? s.Button.Colors.TRANSPARENT : s.Button.Colors.GREEN,
                        children: u ? _.Z.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : _.Z.Messages.JOIN_GUILD
                    }) : l ? (0, r.jsx)(s.Button, {
                        className: A().button,
                        size: s.Button.Sizes.SMALL,
                        disabled: !0,
                        color: s.Button.Colors.PRIMARY,
                        look: s.Button.Looks.OUTLINED,
                        children: _.Z.Messages.GUILD_EVENT_INVITE_COMPLETED
                    }) : (0, r.jsxs)(s.Button, {
                        className: A().button,
                        innerClassName: A().innerButton,
                        size: s.Button.Sizes.SMALL,
                        color: s.Button.Colors.PRIMARY,
                        look: f ? s.Button.Looks.OUTLINED : s.Button.Looks.FILLED,
                        onClick: function(e) {
                            e.stopPropagation();
                            f ? N.Z.deleteRsvpForGuildEvent(t, n) : N.Z.createRsvpForGuildEvent(t, n)
                        },
                        children: [f ? (0, r.jsx)(b.Z, {
                            width: 16,
                            height: 16,
                            className: A().buttonIcon
                        }) : (0, r.jsx)(g.Z, {
                            width: 16,
                            height: 16,
                            className: A().buttonIcon
                        }), _.Z.Messages.INDICATE_RSVP]
                    }) : (0, r.jsx)(s.Button, {
                        className: A().button,
                        size: s.Button.Sizes.SMALL,
                        onClick: v,
                        color: s.Button.Colors.GREEN,
                        children: _.Z.Messages.JOIN_GUILD
                    })
                }));
            const R = i.memo((function(e) {
                var n = e.guildScheduledEvent,
                    t = e.guild,
                    l = e.channel,
                    o = e.isMember,
                    u = e.onAcceptInstantInvite,
                    c = e.onTransitionToInviteChannel,
                    d = (0, E.Z)(n),
                    f = i.useCallback((function() {
                        o && null != n && (0, y.bO)({
                            eventId: n.id
                        })
                    }), [o, n]);
                if (null == n) return null;
                var v, h = (0, j.xt)(n),
                    m = (0, j.Z2)(n),
                    g = n.entity_type === T.WX.EXTERNAL;
                return (0, r.jsx)(p.Z, {
                    className: a()(P({}, A().clickable, o)),
                    children: (0, r.jsxs)(s.Clickable, {
                        onClick: f,
                        children: [null != n.image && (0, r.jsx)(C.Z, {
                            source: (0, I.Z)(n),
                            className: A().banner
                        }), (0, r.jsx)(S.ZP, {
                            name: n.name,
                            description: null !== (v = n.description) && void 0 !== v ? v : void 0,
                            descriptionClassName: A().eventDescription,
                            guildId: n.guild_id,
                            creator: d,
                            guildEventId: n.id,
                            eventPreview: n
                        }), (0, r.jsxs)("div", {
                            className: A().footerContainer,
                            children: [(0, r.jsx)(L, {
                                guild: t,
                                channel: l,
                                guildScheduledEvent: n,
                                isMember: o
                            }), (0, r.jsx)(M, {
                                isActive: h,
                                isEnded: m,
                                isMember: o,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                onAcceptInstantInvite: u,
                                onTransitionToInviteChannel: c,
                                isExternal: g
                            })]
                        })]
                    })
                })
            }))
        },
        757337: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                default: () => Te
            });
            var r = t(785893),
                i = t(667294),
                l = t(202351),
                a = t(70418),
                o = t(350403),
                s = t(944522),
                u = t(61209),
                c = t(443812),
                d = t(652591),
                f = t(474236),
                v = t(634080),
                h = t(269300),
                m = t(919810),
                p = t(158499),
                g = t(619584),
                b = t(205316),
                y = t(951687),
                j = t(699296),
                N = t(26601),
                x = t(294184),
                E = t.n(x),
                I = t(189865),
                C = t(3155),
                S = t(473708),
                O = t(422978),
                T = t.n(O);

            function _(e) {
                var n = e.onClose,
                    t = e.selectedTab,
                    l = e.onTabSelected,
                    o = e.rsvpCount,
                    s = e.hasBanner,
                    u = e.isHub,
                    c = void 0 !== u && u,
                    d = i.useRef(null);
                i.useEffect((function() {
                    var e, n, t;
                    return null === (e = d.current) || void 0 === e || null === (n = e.ref) || void 0 === n || null === (t = n.blur) || void 0 === t ? void 0 : t.call(n)
                }), []);
                var f = S.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
                        userCount: o
                    }),
                    v = [(0, r.jsx)(a.TabBar.Item, {
                        className: T().tabBarItem,
                        id: C.fL.EVENT_INFO,
                        children: S.Z.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
                    }, "event-details")];
                c || v.push((0, r.jsx)(a.TabBar.Item, {
                    className: T().tabBarItem,
                    id: C.fL.RSVP_LIST,
                    children: f
                }, "is-hub"));
                return (0,
                    r.jsxs)("div", {
                    className: T().container,
                    children: [(0, r.jsx)(a.Clickable, {
                        ref: d,
                        onClick: n,
                        className: T().closeButton,
                        "aria-label": S.Z.Messages.CLOSE,
                        children: (0, r.jsx)(I.Z, {
                            className: E()(T().closeIcon, s && T().closeIconBanner)
                        })
                    }), (0, r.jsx)(a.TabBar, {
                        className: T().tabBar,
                        "aria-label": S.Z.Messages.OPTIONS,
                        selectedItem: t,
                        type: "top",
                        onItemSelect: l,
                        children: v
                    })]
                })
            }
            var Z = t(224813),
                A = t(924417),
                P = t(21372),
                w = t(567403),
                k = t(206986),
                L = t(124251),
                M = t(816132),
                R = t(749565),
                D = t(434149),
                G = t(314597),
                B = t(616918),
                U = t(621634),
                V = t(2590),
                z = t(68921),
                F = t.n(z);

            function H(e) {
                var n, t = e.creator,
                    i = e.guildId,
                    o = (0, l.e7)([P.ZP], (function() {
                        return P.ZP.getMember(i, t.id)
                    }), [t, i]);
                return (0, r.jsxs)("div", {
                    className: F().row,
                    children: [(0, r.jsx)(a.Avatar, {
                        size: a.AvatarSizes.SIZE_20,
                        src: t.getAvatarURL(i, 20),
                        "aria-label": null !== (n = null == o ? void 0 : o.nick) && void 0 !== n ? n : R.ZP.getName(t),
                        className: F().icon
                    }), (0, r.jsx)(a.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: S.Z.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
                            usernameHook: function() {
                                var e, n;
                                return (0, r.jsx)(a.Clickable, {
                                    onClick: function() {
                                        return (0, A.m)({
                                            userId: t.id,
                                            guildId: i,
                                            analyticsLocation: {
                                                section: V.jXE.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
                                            }
                                        })
                                    },
                                    className: F().creator,
                                    tag: "span",
                                    role: "link",
                                    children: (0, r.jsx)(a.NameWithRole, {
                                        name: null !== (e = null == o ? void 0 : o.nick) && void 0 !== e ? e : R.ZP.getName(t),
                                        color: null !== (n = null == o ? void 0 : o.colorString) && void 0 !== n ? n : void 0
                                    })
                                }, "open-user-profile")
                            }
                        })
                    })]
                })
            }

            function W(e) {
                var n = e.guild,
                    t = e.onClick,
                    l = e.onClose,
                    o = i.useCallback((function(e) {
                        null == t || t(e);
                        null != t && (null == l || l(e))
                    }), [t, l]),
                    s = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(L.Z, {
                            guild: n,
                            size: L.Z.Sizes.MINI,
                            active: !0,
                            className: E()(F().guildIcon, F().icon)
                        }), (0, r.jsx)(k.Z, {
                            guild: n,
                            tooltipPosition: "top",
                            tooltipColor: a.Tooltip.Colors.PRIMARY,
                            size: 16,
                            className: F().guildBadge
                        }), (0, r.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: F().linkText,
                            children: n.name
                        })]
                    });
                return (0, r.jsx)("div", {
                    className: F().row,
                    children: null != t ? (0,
                        r.jsx)(a.Clickable, {
                        onClick: o,
                        className: F().clickable,
                        role: "link",
                        children: s
                    }) : s
                })
            }

            function X(e) {
                var n = e.userCount,
                    t = e.onClick;
                return (0, r.jsxs)("div", {
                    className: F().row,
                    children: [(0, r.jsx)(M.Z, {
                        width: 20,
                        height: 20,
                        className: F().icon
                    }), (0, r.jsx)(a.Clickable, {
                        onClick: t,
                        className: F().interestedCount,
                        children: (0, r.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: S.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                                count: n
                            })
                        })
                    })]
                })
            }

            function Y(e) {
                var n = e.guildEvent,
                    t = e.guild,
                    o = e.channel,
                    s = e.headerId,
                    u = e.onClose,
                    c = e.onClickInterestedCount,
                    d = e.isHub,
                    f = void 0 !== d && d,
                    h = e.containerRef,
                    m = n.user_count,
                    p = n.description,
                    g = (0, l.e7)([w.Z], (function() {
                        return null != w.Z.getGuild(t.id)
                    }), [t.id]),
                    b = i.useCallback((function(e) {
                        e.stopPropagation();
                        null != n && (0, Z.B)(n)
                    }), [n]),
                    y = (0, D.Z)(n);
                i.useEffect((function() {
                    v.Z.getGuildEventUserCounts(t.id);
                    v.Z.getGuildEventsForCurrentUser(t.id)
                }), [t.id]);
                return (0, r.jsxs)("div", {
                    ref: h,
                    children: [(0, r.jsxs)("div", {
                        className: F().header,
                        children: [(0,
                            r.jsx)(B.z, {
                            startTime: n.scheduled_start_time,
                            endTime: n.scheduled_end_time,
                            status: n.status,
                            eventType: n.entity_type
                        }), (0, r.jsx)(a.Heading, {
                            id: s,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: F().title,
                            children: n.name
                        })]
                    }), (0, r.jsxs)("div", {
                        className: F().body,
                        children: [(0, r.jsx)(W, {
                            guild: t,
                            onClick: g ? b : void 0,
                            onClose: u
                        }), (0, r.jsx)(U.Z, {
                            guildScheduledEvent: n,
                            channel: o,
                            onClose: u
                        }), null != m && (0, r.jsx)(X, {
                            userCount: m,
                            onClick: c
                        }), !f && null != y && (0, r.jsx)(H, {
                            creator: y,
                            guildId: t.id
                        }, y.id), null != p && (0, r.jsx)("div", {
                            className: F().description,
                            children: (0, r.jsx)(G.Z, {
                                description: p,
                                truncate: !1,
                                guildId: t.id
                            })
                        })]
                    })]
                })
            }
            var J = t(971402),
                q = t(334835),
                K = t(832642),
                $ = t(736626),
                Q = t(203963),
                ee = t(664625),
                ne = t(491260),
                te = t(436154),
                re = t(500972),
                ie = t.n(re);

            function le(e, n, t, r, i, l, a) {
                try {
                    var o = e[l](a),
                        s = o.value
                } catch (e) {
                    t(e);
                    return
                }
                o.done ? n(s) : Promise.resolve(s).then(r, i)
            }

            function ae(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var l = e.apply(n, t);

                        function a(e) {
                            le(l, r, i, a, o, "next", e)
                        }

                        function o(e) {
                            le(l, r, i, a, o, "throw", e)
                        }
                        a(void 0)
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

            function se(e) {
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
                var t, r, i, l, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function o(l) {
                    return function(o) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & l[0] ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, l[1])).done) return i;
                                (r = 0, i) && (l = [2 & l[0], i.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        i = l;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                            a.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = l;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(l);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                l = n.call(e, a)
                            } catch (e) {
                                l = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, o])
                    }
                }
            };

            function de(e) {
                var n = e.children;
                return (0, r.jsxs)("div", {
                    className: ie().emptyContainer,
                    children: [(0, r.jsx)(K.Z, {
                        children: (0, r.jsx)("div", {
                            className: ie().circle,
                            children: (0, r.jsx)(M.Z, {
                                height: 40,
                                width: 40,
                                className: ie().icon
                            })
                        })
                    }), n]
                })
            }

            function fe() {
                return (0, r.jsx)(de, {
                    children: (0, r.jsx)(a.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: ie().title,
                        children: S.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
                    })
                })
            }

            function ve() {
                return (0, r.jsx)(de, {
                    children: (0, r.jsx)(a.Heading, {
                        color: "header-secondary",
                        variant: "heading-md/semibold",
                        className: ie().errorTitle,
                        children: S.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
                    })
                })
            }

            function he(e) {
                var n = e.count;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: ie().listRow,
                        children: [(0, r.jsx)("div", {
                            className: E()(ie().listRowCircle, ie().listAvatar),
                            children: (0, r.jsx)(M.Z, {
                                height: 14,
                                width: 14,
                                className: ie().icon
                            })
                        }), (0, r.jsx)(a.Text, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            children: S.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
                                userRemainCount: n
                            })
                        })]
                    })
                })
            }

            function me(e) {
                var n, t = e.rsvpUser,
                    i = e.onContextMenu,
                    o = t.user,
                    s = null === (n = t.guild_member) || void 0 === n ? void 0 : n.guildId,
                    u = (0, l.e7)([te.Z, ne.Z, ee.default], (function() {
                        return o.id === ee.default.getId() ? te.Z.getStatus() : ne.Z.getStatus(o.id, s)
                    }), [o.id, s]);
                return (0, r.jsx)(a.Popout, {
                    preload: function() {
                        return (0, $.Z)(o.id, o.getAvatarURL(s, 80), {
                            guildId: s
                        })
                    },
                    renderPopout: function(e) {
                        return (0, r.jsx)(Q.Z, ue(se({}, e), {
                            userId: o.id,
                            guildId: s
                        }))
                    },
                    position: "left",
                    spacing: 16,
                    children: function(e, n) {
                        var l, s, c = n.isShown;
                        return (0, r.jsxs)(a.Clickable, ue(se({
                            className: E()(ie().listRow, ie().interactiveRow, oe({}, ie().selected, c)),
                            onContextMenu: function(e) {
                                return i(e, o)
                            }
                        }, e), {
                            children: [(0, r.jsx)(a.Avatar, {
                                src: o.getAvatarURL(null === (l = t.guild_member) || void 0 === l ? void 0 : l.guildId, 24),
                                "aria-label": o.username,
                                size: a.AvatarSizes.SIZE_24,
                                className: ie().listAvatar,
                                status: u
                            }), (0,
                                r.jsx)(q.Z, {
                                user: o,
                                className: ie().listName,
                                discriminatorClass: ie().listDiscriminator,
                                nick: null === (s = t.guild_member) || void 0 === s ? void 0 : s.nick
                            })]
                        }))
                    }
                })
            }

            function pe(e) {
                var n = e.rsvpUsers,
                    t = e.usersNotShownCount,
                    i = void 0 === t ? 0 : t,
                    l = e.onContextMenu;
                return (0, r.jsxs)(a.ScrollerThin, {
                    className: ie().listScroller,
                    children: [n.map((function(e) {
                        return (0, r.jsx)(me, {
                            rsvpUser: e,
                            onContextMenu: l
                        }, e.user.id)
                    })), i > 0 && (0, r.jsx)(he, {
                        count: i
                    })]
                })
            }

            function ge(e) {
                var n = e.children,
                    t = e.style;
                return (0, r.jsx)("div", {
                    className: ie().container,
                    style: null != t ? t : {},
                    children: n
                })
            }

            function be(e) {
                var n = e.children,
                    t = e.height;
                return (0, r.jsx)(ge, {
                    style: {
                        height: t
                    },
                    children: n
                })
            }

            function ye(e) {
                var n, i = e.guildEvent,
                    l = e.rsvpUsers,
                    o = e.loading,
                    s = e.error,
                    u = e.containerHeight;
                if (o && 0 === l.length) return (0, r.jsx)(be, {
                    height: u,
                    children: (0, r.jsx)(a.Spinner, {
                        type: a.Spinner.Type.SPINNING_CIRCLE,
                        className: ie().spinner
                    })
                });
                if (null != s && 0 === l.length) return (0, r.jsx)(be, {
                    height: u,
                    children: (0, r.jsx)(ve, {})
                });
                var c = null !== (n = null == i ? void 0 : i.user_count) && void 0 !== n ? n : 0,
                    d = 0;
                l.length >= C.rC && c > C.rC && (d = Math.max(c - l.length, 0));
                return 0 === l.length ? (0, r.jsx)(be, {
                    height: u,
                    children: (0, r.jsx)(fe, {})
                }) : (0, r.jsx)(ge, {
                    children: (0, r.jsx)(pe, {
                        rsvpUsers: l,
                        onContextMenu: function(e, n) {
                            (0, J.jW)(e, ae((function() {
                                var e, i;
                                return ce(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return [4, Promise.all([t.e(40532), t.e(49518), t.e(83329), t.e(71575), t.e(19045), t.e(10848)]).then(t.bind(t, 810848))];
                                        case 1:
                                            e = l.sent(), i = e.default;
                                            return [2, function(e) {
                                                return (0, r.jsx)(i, ue(se({}, e), {
                                                    user: n
                                                }))
                                            }]
                                    }
                                }))
                            })))
                        },
                        usersNotShownCount: d
                    })
                })
            }
            var je = t(85941),
                Ne = t(754082),
                xe = t.n(Ne);

            function Ee(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Ie(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Ce(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Ie(e, n, t[n])
                    }))
                }
                return e
            }

            function Se(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, l = [],
                            a = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Ee(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ee(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Oe(e) {
                var n = e.guildEvent,
                    t = e.guild,
                    i = e.channel,
                    a = e.onActionTaken,
                    o = e.isHub,
                    u = e.isMember,
                    c = (0, h.xt)(n),
                    d = (0, l.e7)([h.ZP], (function() {
                        return h.ZP.hasRsvp(n.id, t.id)
                    }), [t.id, n]),
                    f = (0, m.ZP)(n),
                    v = (0, l.e7)([s.Z], (function() {
                        return s.Z.isLurking(t.id)
                    }), [t.id]),
                    p = (0, g.T)(null == i ? void 0 : i.id, n.id),
                    b = (0, je.Z)({
                        guild: t,
                        channel: i,
                        guildScheduledEvent: n,
                        isActive: c,
                        rsvped: d,
                        onActionTaken: a
                    }),
                    j = n.entity_type;
                return o ? (0, r.jsx)(N.Z, Ce({
                    isActive: c,
                    isUserLurking: v,
                    rsvped: d,
                    isMember: u,
                    isDetailsView: !0,
                    guildName: null == t ? void 0 : t.name,
                    isChannelPublic: p,
                    canInvite: f
                }, b)) : (0, r.jsx)(y.ZP, Ce({
                    isActive: c,
                    isUserLurking: v,
                    rsvped: d,
                    isChannelPublic: p,
                    canInvite: f,
                    entityType: j
                }, b))
            }
            const Te = function(e) {
                var n = e.guildScheduledEventId,
                    t = e.parentGuildId,
                    s = e.transitionState,
                    m = e.onClose,
                    g = (0, l.e7)([h.ZP], (function() {
                        return h.ZP.getGuildScheduledEvent(n)
                    }), [n]),
                    y = null == g ? void 0 : g.id,
                    N = null == g ? void 0 : g.guild_id,
                    x = (0, p.Z)(N, y),
                    E = x.guild,
                    I = x.isMember,
                    S = (0, o.Z)(t),
                    O = null == g ? void 0 : g.channel_id,
                    T = (0, l.e7)([u.Z], (function() {
                        return u.Z.getChannel(O)
                    }), [O]),
                    Z = (0, c.Dt)(),
                    A = Se(i.useState(C.fL.EVENT_INFO), 2),
                    P = A[0],
                    w = A[1],
                    k = (0, l.Wu)([h.ZP], (function() {
                        return Object.values(h.ZP.getUsersForGuildEvent(y))
                    }), [y]),
                    L = Se((0, f.Z)((function() {
                        return v.Z.getGuildEventUsers(null == g ? void 0 : g.id, N)
                    })), 2),
                    M = L[0],
                    R = L[1],
                    D = R.loading,
                    G = R.error;
                i.useEffect((function() {
                    null == g ? m() : d.default.track(V.rMx.OPEN_MODAL, {
                        type: C.zw,
                        guild_id: g.guild_id
                    })
                }), [g, m]);
                var B = i.useRef(null),
                    U = Se(i.useState(0), 2),
                    z = U[0],
                    F = U[1];
                i.useLayoutEffect((function() {
                    var e, n;
                    F(null !== (n = null == B || null === (e = B.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : 0)
                }), [B]);
                if (null == g || null == E || !I && !S) return null;
                var H, W = function(e) {
                        if (e !== P) {
                            e === C.fL.RSVP_LIST && M();
                            w(e)
                        }
                    },
                    X = null !== (H = null == g ? void 0 : g.user_count) && void 0 !== H ? H : 0,
                    J = {
                        height: z
                    };
                return (0, r.jsxs)(a.ModalRoot, {
                    size: a.ModalSize.MEDIUM,
                    transitionState: s,
                    "aria-labelledby": Z,
                    className: xe().root,
                    children: [null != (null == g ? void 0 : g.image) && (0, r.jsx)(j.Z, {
                        source: (0, b.Z)(g),
                        className: xe().banner
                    }), (0, r.jsx)(_, {
                        onClose: m,
                        selectedTab: P,
                        onTabSelected: W,
                        rsvpCount: X,
                        hasBanner: null != (null == g ? void 0 : g.image),
                        isHub: S
                    }), (0, r.jsx)("div", {
                        className: xe().container,
                        children: (0, r.jsx)(a.ModalContent, {
                            className: xe().contentContainer,
                            style: J,
                            children: (0, r.jsxs)(a.Slides, {
                                activeSlide: P,
                                width: 600,
                                centered: !1,
                                children: [(0, r.jsx)(a.Slide, {
                                    id: C.fL.EVENT_INFO,
                                    children: (0, r.jsx)(Y, {
                                        guildEvent: g,
                                        guild: E,
                                        channel: T,
                                        headerId: Z,
                                        onClose: m,
                                        onClickInterestedCount: function() {
                                            return W(C.fL.RSVP_LIST)
                                        },
                                        isHub: S,
                                        containerRef: B
                                    })
                                }), (0, r.jsx)(a.Slide, {
                                    id: C.fL.RSVP_LIST,
                                    children: (0, r.jsx)(ye, {
                                        guildEvent: g,
                                        rsvpUsers: k,
                                        loading: D,
                                        containerHeight: z,
                                        error: G
                                    })
                                })]
                            })
                        })
                    }), (0, r.jsx)(a.ModalFooter, {
                        className: xe().footer,
                        children: (0, r.jsx)(Oe, {
                            guildEvent: g,
                            isHub: S,
                            isMember: I,
                            guild: E,
                            channel: T,
                            onActionTaken: m
                        })
                    })]
                })
            }
        },
        621634: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => f
            });
            var r = t(785893),
                i = t(667294),
                l = t(70418),
                a = t(599467),
                o = t(605013),
                s = t(81472),
                u = t(3155),
                c = t(68921),
                d = t.n(c);

            function f(e) {
                var n = e.guildScheduledEvent,
                    t = e.channel,
                    c = e.onClose,
                    f = n.entity_type === u.WX.EXTERNAL,
                    v = i.useCallback((function(e) {
                        return (0, o.Qt)(n, c)(e)
                    }), [n, c]),
                    h = (0, s.u)(n, t);
                if (null == h) return null;
                var m = h.IconComponent,
                    p = h.locationName,
                    g = (0, r.jsxs)(r.Fragment, {
                        children: [null != m && (0, r.jsx)(m, {
                            width: 20,
                            height: 20,
                            className: d().channelIcon
                        }), (0, r.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: d().locationText,
                            children: (0, a.m)(p, !0)
                        })]
                    });
                return (0, r.jsx)("div", {
                    className: d().row,
                    children: null != v ? (0, r.jsx)(l.Clickable, {
                        className: f ? d().externalLocation : d().channelLocation,
                        onClick: v,
                        children: g
                    }) : g
                })
            }
        },
        81472: (e, n, t) => {
            "use strict";
            t.d(n, {
                u: () => a
            });
            var r = t(344832),
                i = t(746103),
                l = t(32421);

            function a(e, n) {
                if (null == e) return null;
                var t, a, o = (0, l.cS)(e);
                if (null != o) {
                    t = i.Z;
                    a = o
                } else {
                    if (null == n) return null;
                    t = (0, r.Th)(n.type);
                    a = n.name
                }
                return {
                    IconComponent: t,
                    locationName: a
                }
            }
        },
        350403: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => a
            });
            var r = t(202351),
                i = t(567403),
                l = t(2590);

            function a(e) {
                return (0, r.e7)([i.Z], (function() {
                    if (null == e) return !1;
                    var n, t = i.Z.getGuild(e);
                    return null !== (n = null == t ? void 0 : t.hasFeature(l.oNc.HUB)) && void 0 !== n && n
                }), [e])
            }
        },
        15970: (e, n, t) => {
            "use strict";
            t.d(n, {
                b: () => i
            });
            var r = t(2590);

            function i(e, n, t, i) {
                var l = null != t ? t : n;
                return null != l && e.can(r.Plq.CREATE_INSTANT_INVITE, l) || null != n && null != n.vanityURLCode || null != (null == i ? void 0 : i.invite_code)
            }
        },
        787193: (e, n, t) => {
            "use strict";
            t.d(n, {
                Gw: () => b,
                XJ: () => g,
                Yl: () => y
            });
            var r = t(667294),
                i = t(940060),
                l = t(202351),
                a = t(897436),
                o = t(848285),
                s = (t(5544), t(682776)),
                u = t(473903),
                c = (t(563135), t(79522)),
                d = t(520453);

            function f(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function v(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, l = [],
                            a = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return f(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var h = {
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
                m = function(e, n, t, r) {
                    if (null == e) return !1;
                    if (t) return !0;
                    if ("creator_id" in e) return r && null != n && e.creator_id === n.id;
                    if ("userId" in e) return r && null != n && e.userId === n.id;
                    if ("user" in e) {
                        var i;
                        return r && null != n && (null === (i = e.user) || void 0 === i ? void 0 : i.id) === n.id
                    }
                    return !1
                },
                p = function(e) {
                    if (null == e) return [d.Pl.CREATE_EVENTS, d.Pl.MANAGE_EVENTS];
                    var n = c.TT;
                    e.isGuildStageVoice() ? n = c.LK : e.isGuildVoice() && (n = c.AN);
                    return [i.Z.combine(n, d.Pl.CREATE_EVENTS), i.Z.combine(n, d.Pl.MANAGE_EVENTS)]
                },
                g = function(e) {
                    var n = v(e instanceof o.Z ? [d.Pl.CREATE_EVENTS, d.Pl.MANAGE_EVENTS] : p(e), 2),
                        t = n[0],
                        i = n[1],
                        a = v((0, l.Wu)([s.Z], (function() {
                            return [s.Z.can(d.Pl.CREATE_GUILD_EXPRESSIONS, e), s.Z.can(d.Pl.MANAGE_GUILD_EXPRESSIONS, e), s.Z.can(t, e), s.Z.can(i, e)]
                        })), 4),
                        c = a[0],
                        f = a[1],
                        g = a[2],
                        b = a[3],
                        y = (0, l.e7)([u.default], (function() {
                            return u.default.getCurrentUser()
                        })),
                        j = r.useCallback((function(e) {
                            return m(e, y, f, c)
                        }), [c, f, y]),
                        N = r.useCallback((function(e) {
                            return m(e, y, b, g)
                        }), [b, g, y]);
                    return null == e ? h : {
                        canCreateExpressions: c,
                        canCreateGuildEvent: g,
                        canManageAllExpressions: f,
                        canManageAllEvents: b,
                        canManageGuildExpression: j,
                        canManageGuildEvent: N
                    }
                },
                b = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Z,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default,
                        r = v(e instanceof o.Z ? [d.Pl.CREATE_EVENTS, d.Pl.MANAGE_EVENTS] : p(e), 2),
                        i = r[0],
                        l = r[1],
                        a = n.can(d.Pl.CREATE_GUILD_EXPRESSIONS, e),
                        c = n.can(d.Pl.MANAGE_GUILD_EXPRESSIONS, e),
                        f = n.can(i, e),
                        g = n.can(l, e),
                        b = t.getCurrentUser();
                    return null == e ? h : {
                        canCreateExpressions: a,
                        canCreateGuildEvent: f,
                        canManageAllExpressions: c,
                        canManageAllEvents: g,
                        canManageGuildExpression: function(e) {
                            return m(e, b, c, a)
                        },
                        canManageGuildEvent: function(e) {
                            return m(e, b, g, f)
                        }
                    }
                },
                y = function(e) {
                    var n = (0, l.e7)([s.Z], (function() {
                            return s.Z.can(d.Pl.MANAGE_GUILD, e)
                        })),
                        t = (0, a.JY)({
                            guildId: null == e ? void 0 : e.id
                        }).showSettingsToggle;
                    return n && t
                }
        },
        367299: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => a
            });
            var r = t(785893),
                i = (t(667294), t(318715)),
                l = t(785085);

            function a(e) {
                var n = e.children,
                    t = e.confettiLocation;
                return (0, i.ZP)([l.Z], (function() {
                    return l.Z.isEnabled({
                        confettiLocation: t
                    })
                })) ? (0, r.jsx)(r.Fragment, {
                    children: n
                }) : null
            }
        },
        919031: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => s
            });
            var r = t(667294),
                i = t(318715),
                l = t(255875),
                a = t(785085);

            function o(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function s() {
                var e = r.useContext(l.E).createMultipleConfettiAt,
                    n = (0, i.ZP)([a.Z], (function() {
                        return a.Z.getState()
                    })),
                    t = r.useCallback((function(e) {
                        return {
                            size: {
                                type: "static-random",
                                minValue: e.confettiSize - 7,
                                maxValue: e.confettiSize + 7
                            }
                        }
                    }), []),
                    s = r.useMemo((function() {
                        return {
                            fire: function(r, i, l) {
                                var a, s, u = null != (null == l ? void 0 : l.settings) ? function(e) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var t = null != arguments[n] ? arguments[n] : {},
                                                r = Object.keys(t);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                                            }))));
                                            r.forEach((function(n) {
                                                o(e, n, t[n])
                                            }))
                                        }
                                        return e
                                    }({}, n, l.settings) : n,
                                    c = t(u);
                                e(r, i, c, (null !== (a = null == l ? void 0 : l.count) && void 0 !== a ? a : u.confettiCount) * (null !== (s = null == l ? void 0 : l.countMultiplier) && void 0 !== s ? s : 1), {
                                    sprite: null == l ? void 0 : l.sprite
                                })
                            }
                        }
                    }), [e, t, n]);
                return s
            }
        },
        832642: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => v
            });
            var r = t(785893),
                i = (t(667294), t(294184)),
                l = t.n(i),
                a = t(473708),
                o = t(300443),
                s = t.n(o),
                u = t(483683),
                c = t.n(u),
                d = t(63685),
                f = t.n(d);

            function v(e) {
                var n = e.className,
                    t = e.children;
                return (0, r.jsxs)("div", {
                    className: l()(s().container, n),
                    children: [(0, r.jsx)("img", {
                        alt: a.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: f(),
                        className: l()(s().sparkleIcon, s().sparkleBottom)
                    }), t, (0, r.jsx)("img", {
                        alt: a.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: c(),
                        className: l()(s().sparkleIcon, s().sparkleTop)
                    })]
                })
            }
        },
        606483: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => R
            });
            var r = t(785893),
                i = t(667294),
                l = t(294184),
                a = t.n(l),
                o = t(70418),
                s = t(621647),
                u = t(773011),
                c = t(344832),
                d = t(874049),
                f = t(968449),
                v = t(775173),
                h = t(990554),
                m = t(107364),
                p = t(750203),
                g = t(124251),
                b = t(473708),
                y = t(459890),
                j = t.n(y);

            function N(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function x(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function E(e, n) {
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

            function I(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }

            function C(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, l = [],
                            a = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return N(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return N(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var S = function(e) {
                    var n = e.text,
                        t = e.extra;
                    return (0, r.jsxs)(o.FormTitle, {
                        className: j().header,
                        children: [n, t]
                    })
                },
                O = function(e) {
                    var n = e.resolving,
                        t = e.children;
                    return (0, r.jsx)("div", {
                        className: j().content,
                        children: n ? (0, r.jsxs)("div", {
                            className: j().resolvingWrapper,
                            children: [(0, r.jsx)("div", {
                                className: j().resolving,
                                children: (0, r.jsx)("div", {
                                    className: j().resolvingBackground
                                })
                            }), (0, r.jsx)("div", {
                                className: j().resolvingFakeButton,
                                children: (0, r.jsx)("div", {
                                    className: j().resolvingBackground
                                })
                            })]
                        }) : t
                    })
                },
                T = function(e) {
                    var n, t = e.application,
                        i = e.guild,
                        l = e.channel,
                        c = e.onClick,
                        d = e.expired,
                        v = void 0 !== d && d,
                        m = e.user,
                        b = e.className,
                        y = null !== (n = (0, u.ZP)(l)) && void 0 !== n ? n : "",
                        N = f.QK.useSetting();
                    if (v) return (0, r.jsx)("div", {
                        className: j().guildIconExpired
                    });
                    var x = null == i || null != i.icon,
                        E = a()((0, h.l)(j(), "guildIcon", x ? "Image" : "", null != c ? "Joined" : ""), b);
                    return null != t ? (0, r.jsx)(p.Z, {
                        game: t,
                        onClick: c,
                        size: j().applicationIcon,
                        className: E
                    }) : null != i ? (0, r.jsx)(g.Z, {
                        onClick: c,
                        active: !0,
                        guild: i,
                        className: E,
                        animate: N
                    }) : null != l ? (0, r.jsx)(o.Avatar, {
                        onClick: c,
                        src: (0, s.x)(l),
                        size: o.AvatarSizes.SIZE_56,
                        className: E,
                        "aria-label": y
                    }) : null != m ? (0, r.jsx)(o.Avatar, {
                        onClick: c,
                        src: m.getAvatarURL(null, 56),
                        size: o.AvatarSizes.SIZE_56,
                        className: E,
                        "aria-label": y
                    }) : null
                },
                _ = function(e) {
                    var n = e.title,
                        t = e.onClick,
                        i = e.expired,
                        l = e.children,
                        a = (0, r.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            className: (0, h.l)(j(), "inviteDestination", i ? "Expired" : null != t ? "Joined" : ""),
                            children: n
                        });
                    return (0, r.jsxs)(m.Z, {
                        className: j().guildInfo,
                        direction: m.Z.Direction.VERTICAL,
                        justify: m.Z.Justify.CENTER,
                        children: [null == t ? a : (0, r.jsx)(o.Clickable, {
                            onClick: t,
                            children: a
                        }), (0, r.jsx)(o.Text, {
                            tag: "strong",
                            className: j().guildDetail,
                            variant: "text-sm/normal",
                            children: l
                        })]
                    })
                },
                Z = function(e) {
                    var n = e.membersOnline,
                        t = e.members,
                        i = [];
                    null != n && n > 0 && i.push((0, r.jsxs)("div", {
                        className: j().statusWrapper,
                        children: [(0, r.jsx)("i", {
                            className: j().statusOnline
                        }), (0, r.jsx)("span", {
                            className: j().count,
                            children: b.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: n
                            })
                        })]
                    }, "onlineCount"));
                    null != t && i.push((0, r.jsxs)("div", {
                        className: j().statusWrapper,
                        children: [(0, r.jsx)("i", {
                            className: j().statusOffline
                        }), (0, r.jsx)("span", {
                            className: j().count,
                            children: b.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                count: t
                            })
                        })]
                    }, "memberCount"));
                    return (0, r.jsx)("div", {
                        className: j().statusCounts,
                        children: i
                    })
                },
                A = function(e) {
                    var n = e.channel,
                        t = e.guild,
                        i = (0, c.KS)(n, t);
                    return null == n || null == i ? null : (0, r.jsxs)("div", {
                        className: j().channel,
                        children: [(0, r.jsx)(i, {
                            className: j().channelIcon,
                            width: 20,
                            height: 20
                        }), (0, r.jsx)("span", {
                            className: j().channelName,
                            children: n.name
                        })]
                    })
                },
                P = function(e) {
                    var n = e.children,
                        t = e.onClick,
                        i = e.className,
                        l = e.isDisabled,
                        s = I(e, ["children", "onClick", "className", "isDisabled"]);
                    return (0, r.jsx)(o.Button, E(function(e) {
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
                    }({}, s), {
                        disabled: l,
                        onClick: t,
                        size: j().buttonSize,
                        className: a()(j().button, i),
                        children: n
                    }))
                };
            P.Colors = o.Button.Colors;
            P.Looks = o.Button.Looks;
            P.defaultProps = {
                className: null,
                isDisabled: !1
            };
            var w = function(e) {
                    var n = e.children,
                        t = e.className,
                        i = e.containerRef;
                    return (0, r.jsx)("div", {
                        ref: i,
                        className: a()(j().wrapper, t),
                        children: n
                    })
                },
                k = function(e) {
                    var n = e.guild,
                        t = C(i.useState(!1), 2),
                        l = t[0],
                        o = t[1],
                        s = v.ZP.getGuildSplashURL({
                            id: n.id,
                            splash: n.splash,
                            size: 400 * (0, d.x_)()
                        });
                    return null == s ? null : (0, r.jsx)("div", {
                        className: j().inviteSplash,
                        children: (0, r.jsx)("img", {
                            src: s,
                            alt: "",
                            className: a()(j().inviteSplashImage, x({}, j().inviteSplashImageLoaded, l)),
                            onLoad: function() {
                                return o(!0)
                            }
                        })
                    })
                },
                L = function(e) {
                    var n = e.guild;
                    return (0, r.jsx)("div", {
                        className: j().guildNameWrapper,
                        children: (0, r.jsx)("span", {
                            className: j().guildName,
                            children: n.name
                        })
                    })
                },
                M = function(e) {
                    var n = e.guildTemplate;
                    return (0, r.jsx)("div", {
                        className: j().guildNameWrapper,
                        children: (0, r.jsx)("span", {
                            className: j().guildName,
                            children: n.serializedSourceGuild.name
                        })
                    })
                };
            w.Header = S;
            w.Body = O;
            w.Icon = T;
            w.Info = _;
            w.Data = Z;
            w.Channel = A;
            w.Button = P;
            w.GuildSplash = k;
            w.GuildName = L;
            w.GuildTemplateName = M;
            S.displayName = "InviteButton.Header";
            O.displayName = "InviteButton.Body";
            T.displayName = "InviteButton.Icon";
            _.displayName = "InviteButton.Info";
            Z.displayName = "InviteButton.Data";
            A.displayName = "InviteButton.Channel";
            P.displayName = "InviteButton.Button";
            k.displayName = "InviteButton.GuildSplash";
            L.displayName = "InviteButton.GuildName";
            M.displayName = "InviteButton.GuildTemplateName";
            const R = w
        },
        457997: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                i = (t(667294), t(168075)),
                l = t(66541),
                a = t(633878);

            function o(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function s(e, n) {
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

            function u(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }
            const c = (0, i.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 20 : n,
                    i = e.height,
                    l = void 0 === i ? 20 : i,
                    c = e.color,
                    d = void 0 === c ? "currentColor" : c,
                    f = e.foreground,
                    v = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", s(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            o(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(v)), {
                    width: t,
                    height: l,
                    viewBox: "0 0 20 20",
                    children: (0, r.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, r.jsx)("path", {
                            className: f,
                            fill: d,
                            d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                        })
                    })
                }))
            }), l.T)
        },
        474236: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => u
            });
            var r = t(667294),
                i = t(347365);

            function l(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function a(e, n, t, r, i, l, a) {
                try {
                    var o = e[l](a),
                        s = o.value
                } catch (e) {
                    t(e);
                    return
                }
                o.done ? n(s) : Promise.resolve(s).then(r, i)
            }

            function o(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, l = [],
                            a = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return l(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = function(e, n) {
                var t, r, i, l, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function o(l) {
                    return function(o) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & l[0] ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, l[1])).done) return i;
                                (r = 0, i) && (l = [2 & l[0], i.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        i = l;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                            a.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = l;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(l);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                l = n.call(e, a)
                            } catch (e) {
                                l = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, o])
                    }
                }
            };

            function u(e, n) {
                var t, l, u = o(r.useState(!1), 2),
                    c = u[0],
                    d = u[1],
                    f = o(r.useState(null), 2),
                    v = f[0],
                    h = f[1],
                    m = (l = (t = function() {
                        var t, r, l;
                        return s(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    d(!0);
                                    h(null);
                                    a.label = 1;
                                case 1:
                                    a.trys.push([1, 3, , 4]);
                                    return [4, e()];
                                case 2:
                                    t = a.sent();
                                    d(!1);
                                    h(null);
                                    return [2, t];
                                case 3:
                                    r = a.sent();
                                    l = new i.Hx(r);
                                    null == n || n(l);
                                    h(l);
                                    d(!1);
                                    return [2, null];
                                case 4:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, i) {
                            var l = t.apply(e, n);

                            function o(e) {
                                a(l, r, i, o, s, "next", e)
                            }

                            function s(e) {
                                a(l, r, i, o, s, "throw", e)
                            }
                            o(void 0)
                        }))
                    }), function() {
                        return l.apply(this, arguments)
                    });
                return [m, {
                    loading: c,
                    error: v
                }]
            }
        }
    }
]);