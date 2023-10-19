(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [78305], {
        483683: (e, n, t) => {
            e.exports = t.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, n, t) => {
            e.exports = t.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        79522: (e, n, t) => {
            "use strict";
            t.d(n, {
                AN: () => a,
                LK: () => u,
                TT: () => o
            });
            var r = t(940060),
                i = t(227202),
                l = t(2590),
                o = l.Plq.VIEW_CHANNEL,
                a = r.Z.combine(o, l.Plq.CONNECT),
                u = r.Z.combine(o, i.yP)
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
                o = t(70418),
                a = t(350403),
                u = t(944522),
                s = t(61209),
                c = t(443812),
                d = t(652591),
                f = t(474236),
                v = t(634080),
                h = t(269300),
                b = t(919810),
                p = t(158499),
                g = t(619584),
                m = t(205316),
                y = t(951687),
                E = t(699296),
                j = t(26601),
                x = t(294184),
                N = t.n(x),
                S = t(189865),
                I = t(3155),
                C = t(473708),
                O = t(422978),
                T = t.n(O);

            function _(e) {
                var n = e.onClose,
                    t = e.selectedTab,
                    l = e.onTabSelected,
                    a = e.rsvpCount,
                    u = e.hasBanner,
                    s = e.isHub,
                    c = void 0 !== s && s,
                    d = i.useRef(null);
                i.useEffect((function() {
                    var e, n, t;
                    return null === (e = d.current) || void 0 === e || null === (n = e.ref) || void 0 === n || null === (t = n.blur) || void 0 === t ? void 0 : t.call(n)
                }), []);
                var f = C.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
                        userCount: a
                    }),
                    v = [(0, r.jsx)(o.TabBar.Item, {
                        className: T().tabBarItem,
                        id: I.fL.EVENT_INFO,
                        children: C.Z.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
                    }, "event-details")];
                c || v.push((0, r.jsx)(o.TabBar.Item, {
                    className: T().tabBarItem,
                    id: I.fL.RSVP_LIST,
                    children: f
                }, "is-hub"));
                return (0, r.jsxs)("div", {
                    className: T().container,
                    children: [(0, r.jsx)(o.Clickable, {
                        ref: d,
                        onClick: n,
                        className: T().closeButton,
                        "aria-label": C.Z.Messages.CLOSE,
                        children: (0, r.jsx)(S.Z, {
                            className: N()(T().closeIcon, u && T().closeIconBanner)
                        })
                    }), (0, r.jsx)(o.TabBar, {
                        className: T().tabBar,
                        "aria-label": C.Z.Messages.OPTIONS,
                        selectedItem: t,
                        type: "top",
                        onItemSelect: l,
                        children: v
                    })]
                })
            }
            var Z = t(224813),
                w = t(924417),
                P = t(21372),
                A = t(567403),
                M = t(206986),
                k = t(124251),
                L = t(816132),
                R = t(749565),
                G = t(434149),
                U = t(314597),
                D = t(616918),
                V = t(621634),
                B = t(2590),
                H = t(68921),
                F = t.n(H);

            function z(e) {
                var n, t = e.creator,
                    i = e.guildId,
                    a = (0, l.e7)([P.ZP], (function() {
                        return P.ZP.getMember(i, t.id)
                    }), [t, i]);
                return (0, r.jsxs)("div", {
                    className: F().row,
                    children: [(0, r.jsx)(o.Avatar, {
                        size: o.AvatarSizes.SIZE_20,
                        src: t.getAvatarURL(i, 20),
                        "aria-label": null !== (n = null == a ? void 0 : a.nick) && void 0 !== n ? n : R.ZP.getName(t),
                        className: F().icon
                    }), (0, r.jsx)(o.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: C.Z.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
                            usernameHook: function() {
                                var e, n;
                                return (0, r.jsx)(o.Clickable, {
                                    onClick: function() {
                                        return (0, w.m)({
                                            userId: t.id,
                                            guildId: i,
                                            analyticsLocation: {
                                                section: B.jXE.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
                                            }
                                        })
                                    },
                                    className: F().creator,
                                    tag: "span",
                                    role: "link",
                                    children: (0, r.jsx)(o.NameWithRole, {
                                        name: null !== (e = null == a ? void 0 : a.nick) && void 0 !== e ? e : R.ZP.getName(t),
                                        color: null !== (n = null == a ? void 0 : a.colorString) && void 0 !== n ? n : void 0
                                    })
                                }, "open-user-profile")
                            }
                        })
                    })]
                })
            }

            function X(e) {
                var n = e.guild,
                    t = e.onClick,
                    l = e.onClose,
                    a = i.useCallback((function(e) {
                        null == t || t(e);
                        null != t && (null == l || l(e))
                    }), [t, l]),
                    u = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(k.Z, {
                            guild: n,
                            size: k.Z.Sizes.MINI,
                            active: !0,
                            className: N()(F().guildIcon, F().icon)
                        }), (0, r.jsx)(M.Z, {
                            guild: n,
                            tooltipPosition: "top",
                            tooltipColor: o.Tooltip.Colors.PRIMARY,
                            size: 16,
                            className: F().guildBadge
                        }), (0, r.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: F().linkText,
                            children: n.name
                        })]
                    });
                return (0, r.jsx)("div", {
                    className: F().row,
                    children: null != t ? (0, r.jsx)(o.Clickable, {
                        onClick: a,
                        className: F().clickable,
                        role: "link",
                        children: u
                    }) : u
                })
            }

            function W(e) {
                var n = e.userCount,
                    t = e.onClick;
                return (0, r.jsxs)("div", {
                    className: F().row,
                    children: [(0, r.jsx)(L.Z, {
                        width: 20,
                        height: 20,
                        className: F().icon
                    }), (0, r.jsx)(o.Clickable, {
                        onClick: t,
                        className: F().interestedCount,
                        children: (0, r.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: C.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                                count: n
                            })
                        })
                    })]
                })
            }

            function Y(e) {
                var n = e.guildEvent,
                    t = e.guild,
                    a = e.channel,
                    u = e.headerId,
                    s = e.onClose,
                    c = e.onClickInterestedCount,
                    d = e.isHub,
                    f = void 0 !== d && d,
                    h = e.containerRef,
                    b = n.user_count,
                    p = n.description,
                    g = (0, l.e7)([A.Z], (function() {
                        return null != A.Z.getGuild(t.id)
                    }), [t.id]),
                    m = i.useCallback((function(e) {
                        e.stopPropagation();
                        null != n && (0, Z.B)(n)
                    }), [n]),
                    y = (0, G.Z)(n);
                i.useEffect((function() {
                    v.Z.getGuildEventUserCounts(t.id);
                    v.Z.getGuildEventsForCurrentUser(t.id)
                }), [t.id]);
                return (0, r.jsxs)("div", {
                    ref: h,
                    children: [(0, r.jsxs)("div", {
                        className: F().header,
                        children: [(0, r.jsx)(D.z, {
                            startTime: n.scheduled_start_time,
                            endTime: n.scheduled_end_time,
                            status: n.status,
                            eventType: n.entity_type
                        }), (0, r.jsx)(o.Heading, {
                            id: u,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: F().title,
                            children: n.name
                        })]
                    }), (0, r.jsxs)("div", {
                        className: F().body,
                        children: [(0, r.jsx)(X, {
                            guild: t,
                            onClick: g ? m : void 0,
                            onClose: s
                        }), (0, r.jsx)(V.Z, {
                            guildScheduledEvent: n,
                            channel: a,
                            onClose: s
                        }), null != b && (0, r.jsx)(W, {
                            userCount: b,
                            onClick: c
                        }), !f && null != y && (0, r.jsx)(z, {
                            creator: y,
                            guildId: t.id
                        }, y.id), null != p && (0, r.jsx)("div", {
                            className: F().description,
                            children: (0, r.jsx)(U.Z, {
                                description: p,
                                truncate: !1,
                                guildId: t.id
                            })
                        })]
                    })]
                })
            }
            var q = t(971402),
                K = t(334835),
                $ = t(832642),
                J = t(736626),
                Q = t(203963),
                ee = t(664625),
                ne = t(491260),
                te = t(436154),
                re = t(500972),
                ie = t.n(re);

            function le(e, n, t, r, i, l, o) {
                try {
                    var a = e[l](o),
                        u = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(u) : Promise.resolve(u).then(r, i)
            }

            function oe(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var l = e.apply(n, t);

                        function o(e) {
                            le(l, r, i, o, a, "next", e)
                        }

                        function a(e) {
                            le(l, r, i, o, a, "throw", e)
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

            function ue(e) {
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
            }

            function se(e, n) {
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
                var t, r, i, l, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function a(l) {
                    return function(a) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & l[0] ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, l[1])).done) return i;
                                (r = 0,
                                    i) && (l = [2 & l[0], i.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        i = l;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = l;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(l);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                l = n.call(e, o)
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
                        }([l, a])
                    }
                }
            };

            function de(e) {
                var n = e.children;
                return (0, r.jsxs)("div", {
                    className: ie().emptyContainer,
                    children: [(0, r.jsx)($.Z, {
                        children: (0, r.jsx)("div", {
                            className: ie().circle,
                            children: (0, r.jsx)(L.Z, {
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
                    children: (0, r.jsx)(o.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: ie().title,
                        children: C.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
                    })
                })
            }

            function ve() {
                return (0, r.jsx)(de, {
                    children: (0, r.jsx)(o.Heading, {
                        color: "header-secondary",
                        variant: "heading-md/semibold",
                        className: ie().errorTitle,
                        children: C.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
                    })
                })
            }

            function he(e) {
                var n = e.count;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: ie().listRow,
                        children: [(0, r.jsx)("div", {
                            className: N()(ie().listRowCircle, ie().listAvatar),
                            children: (0, r.jsx)(L.Z, {
                                height: 14,
                                width: 14,
                                className: ie().icon
                            })
                        }), (0, r.jsx)(o.Text, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            children: C.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
                                userRemainCount: n
                            })
                        })]
                    })
                })
            }

            function be(e) {
                var n, t = e.rsvpUser,
                    i = e.onContextMenu,
                    a = t.user,
                    u = null === (n = t.guild_member) || void 0 === n ? void 0 : n.guildId,
                    s = (0, l.e7)([te.Z, ne.Z, ee.default], (function() {
                        return a.id === ee.default.getId() ? te.Z.getStatus() : ne.Z.getStatus(a.id, u)
                    }), [a.id, u]);
                return (0, r.jsx)(o.Popout, {
                    preload: function() {
                        return (0,
                            J.Z)(a.id, a.getAvatarURL(u, 80), {
                            guildId: u
                        })
                    },
                    renderPopout: function(e) {
                        return (0, r.jsx)(Q.Z, se(ue({}, e), {
                            userId: a.id,
                            guildId: u
                        }))
                    },
                    position: "left",
                    spacing: 16,
                    children: function(e, n) {
                        var l, u, c = n.isShown;
                        return (0, r.jsxs)(o.Clickable, se(ue({
                            className: N()(ie().listRow, ie().interactiveRow, ae({}, ie().selected, c)),
                            onContextMenu: function(e) {
                                return i(e, a)
                            }
                        }, e), {
                            children: [(0, r.jsx)(o.Avatar, {
                                src: a.getAvatarURL(null === (l = t.guild_member) || void 0 === l ? void 0 : l.guildId, 24),
                                "aria-label": a.username,
                                size: o.AvatarSizes.SIZE_24,
                                className: ie().listAvatar,
                                status: s
                            }), (0, r.jsx)(K.Z, {
                                user: a,
                                className: ie().listName,
                                discriminatorClass: ie().listDiscriminator,
                                nick: null === (u = t.guild_member) || void 0 === u ? void 0 : u.nick
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
                return (0, r.jsxs)(o.ScrollerThin, {
                    className: ie().listScroller,
                    children: [n.map((function(e) {
                        return (0, r.jsx)(be, {
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

            function me(e) {
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
                    a = e.loading,
                    u = e.error,
                    s = e.containerHeight;
                if (a && 0 === l.length) return (0, r.jsx)(me, {
                    height: s,
                    children: (0, r.jsx)(o.Spinner, {
                        type: o.Spinner.Type.SPINNING_CIRCLE,
                        className: ie().spinner
                    })
                });
                if (null != u && 0 === l.length) return (0, r.jsx)(me, {
                    height: s,
                    children: (0, r.jsx)(ve, {})
                });
                var c = null !== (n = null == i ? void 0 : i.user_count) && void 0 !== n ? n : 0,
                    d = 0;
                l.length >= I.rC && c > I.rC && (d = Math.max(c - l.length, 0));
                return 0 === l.length ? (0, r.jsx)(me, {
                    height: s,
                    children: (0, r.jsx)(fe, {})
                }) : (0, r.jsx)(ge, {
                    children: (0, r.jsx)(pe, {
                        rsvpUsers: l,
                        onContextMenu: function(e, n) {
                            (0, q.jW)(e, oe((function() {
                                var e, i;
                                return ce(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return [4, Promise.all([t.e(40532), t.e(49518), t.e(83329), t.e(71575), t.e(19045), t.e(10848)]).then(t.bind(t, 810848))];
                                        case 1:
                                            e = l.sent(),
                                                i = e.default;
                                            return [2, function(e) {
                                                return (0, r.jsx)(i, se(ue({}, e), {
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
            var Ee = t(85941),
                je = t(754082),
                xe = t.n(je);

            function Ne(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Se(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Ie(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Se(e, n, t[n])
                    }))
                }
                return e
            }

            function Ce(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, l = [],
                            o = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Ne(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ne(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Oe(e) {
                var n = e.guildEvent,
                    t = e.guild,
                    i = e.channel,
                    o = e.onActionTaken,
                    a = e.isHub,
                    s = e.isMember,
                    c = (0, h.xt)(n),
                    d = (0, l.e7)([h.ZP], (function() {
                        return h.ZP.hasRsvp(n.id, t.id)
                    }), [t.id, n]),
                    f = (0, b.ZP)(n),
                    v = (0, l.e7)([u.Z], (function() {
                        return u.Z.isLurking(t.id)
                    }), [t.id]),
                    p = (0, g.T)(null == i ? void 0 : i.id, n.id),
                    m = (0, Ee.Z)({
                        guild: t,
                        channel: i,
                        guildScheduledEvent: n,
                        isActive: c,
                        rsvped: d,
                        onActionTaken: o
                    }),
                    E = n.entity_type;
                return a ? (0,
                    r.jsx)(j.Z, Ie({
                    isActive: c,
                    isUserLurking: v,
                    rsvped: d,
                    isMember: s,
                    isDetailsView: !0,
                    guildName: null == t ? void 0 : t.name,
                    isChannelPublic: p,
                    canInvite: f
                }, m)) : (0, r.jsx)(y.ZP, Ie({
                    isActive: c,
                    isUserLurking: v,
                    rsvped: d,
                    isChannelPublic: p,
                    canInvite: f,
                    entityType: E
                }, m))
            }
            const Te = function(e) {
                var n = e.guildScheduledEventId,
                    t = e.parentGuildId,
                    u = e.transitionState,
                    b = e.onClose,
                    g = (0, l.e7)([h.ZP], (function() {
                        return h.ZP.getGuildScheduledEvent(n)
                    }), [n]),
                    y = null == g ? void 0 : g.id,
                    j = null == g ? void 0 : g.guild_id,
                    x = (0, p.Z)(j, y),
                    N = x.guild,
                    S = x.isMember,
                    C = (0, a.Z)(t),
                    O = null == g ? void 0 : g.channel_id,
                    T = (0, l.e7)([s.Z], (function() {
                        return s.Z.getChannel(O)
                    }), [O]),
                    Z = (0, c.Dt)(),
                    w = Ce(i.useState(I.fL.EVENT_INFO), 2),
                    P = w[0],
                    A = w[1],
                    M = (0, l.Wu)([h.ZP], (function() {
                        return Object.values(h.ZP.getUsersForGuildEvent(y))
                    }), [y]),
                    k = Ce((0, f.Z)((function() {
                        return v.Z.getGuildEventUsers(null == g ? void 0 : g.id, j)
                    })), 2),
                    L = k[0],
                    R = k[1],
                    G = R.loading,
                    U = R.error;
                i.useEffect((function() {
                    null == g ? b() : d.default.track(B.rMx.OPEN_MODAL, {
                        type: I.zw,
                        guild_id: g.guild_id
                    })
                }), [g, b]);
                var D = i.useRef(null),
                    V = Ce(i.useState(0), 2),
                    H = V[0],
                    F = V[1];
                i.useLayoutEffect((function() {
                    var e, n;
                    F(null !== (n = null == D || null === (e = D.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : 0)
                }), [D]);
                if (null == g || null == N || !S && !C) return null;
                var z, X = function(e) {
                        if (e !== P) {
                            e === I.fL.RSVP_LIST && L();
                            A(e)
                        }
                    },
                    W = null !== (z = null == g ? void 0 : g.user_count) && void 0 !== z ? z : 0,
                    q = {
                        height: H
                    };
                return (0, r.jsxs)(o.ModalRoot, {
                    size: o.ModalSize.MEDIUM,
                    transitionState: u,
                    "aria-labelledby": Z,
                    className: xe().root,
                    children: [null != (null == g ? void 0 : g.image) && (0, r.jsx)(E.Z, {
                        source: (0, m.Z)(g),
                        className: xe().banner
                    }), (0, r.jsx)(_, {
                        onClose: b,
                        selectedTab: P,
                        onTabSelected: X,
                        rsvpCount: W,
                        hasBanner: null != (null == g ? void 0 : g.image),
                        isHub: C
                    }), (0, r.jsx)("div", {
                        className: xe().container,
                        children: (0, r.jsx)(o.ModalContent, {
                            className: xe().contentContainer,
                            style: q,
                            children: (0, r.jsxs)(o.Slides, {
                                activeSlide: P,
                                width: 600,
                                centered: !1,
                                children: [(0, r.jsx)(o.Slide, {
                                    id: I.fL.EVENT_INFO,
                                    children: (0, r.jsx)(Y, {
                                        guildEvent: g,
                                        guild: N,
                                        channel: T,
                                        headerId: Z,
                                        onClose: b,
                                        onClickInterestedCount: function() {
                                            return X(I.fL.RSVP_LIST)
                                        },
                                        isHub: C,
                                        containerRef: D
                                    })
                                }), (0, r.jsx)(o.Slide, {
                                    id: I.fL.RSVP_LIST,
                                    children: (0, r.jsx)(ye, {
                                        guildEvent: g,
                                        rsvpUsers: M,
                                        loading: G,
                                        containerHeight: H,
                                        error: U
                                    })
                                })]
                            })
                        })
                    }), (0, r.jsx)(o.ModalFooter, {
                        className: xe().footer,
                        children: (0, r.jsx)(Oe, {
                            guildEvent: g,
                            isHub: C,
                            isMember: S,
                            guild: N,
                            channel: T,
                            onActionTaken: b
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
                o = t(599467),
                a = t(605013),
                u = t(81472),
                s = t(3155),
                c = t(68921),
                d = t.n(c);

            function f(e) {
                var n = e.guildScheduledEvent,
                    t = e.channel,
                    c = e.onClose,
                    f = n.entity_type === s.WX.EXTERNAL,
                    v = i.useCallback((function(e) {
                        return (0, a.Qt)(n, c)(e)
                    }), [n, c]),
                    h = (0, u.u)(n, t);
                if (null == h) return null;
                var b = h.IconComponent,
                    p = h.locationName,
                    g = (0, r.jsxs)(r.Fragment, {
                        children: [null != b && (0, r.jsx)(b, {
                            width: 20,
                            height: 20,
                            className: d().channelIcon
                        }), (0, r.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: d().locationText,
                            children: (0, o.m)(p, !0)
                        })]
                    });
                return (0,
                    r.jsx)("div", {
                    className: d().row,
                    children: null != v ? (0, r.jsx)(l.Clickable, {
                        className: f ? d().externalLocation : d().channelLocation,
                        onClick: v,
                        children: g
                    }) : g
                })
            }
        },
        350403: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => o
            });
            var r = t(202351),
                i = t(567403),
                l = t(2590);

            function o(e) {
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
                Gw: () => m,
                XJ: () => g,
                Yl: () => y
            });
            var r = t(667294),
                i = t(940060),
                l = t(202351),
                o = t(897436),
                a = t(848285),
                u = (t(5544), t(682776)),
                s = t(473903),
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
                            o = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (a) throw i
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
                b = function(e, n, t, r) {
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
                    var n = v(e instanceof a.Z ? [d.Pl.CREATE_EVENTS, d.Pl.MANAGE_EVENTS] : p(e), 2),
                        t = n[0],
                        i = n[1],
                        o = v((0, l.Wu)([u.Z], (function() {
                            return [u.Z.can(d.Pl.CREATE_GUILD_EXPRESSIONS, e), u.Z.can(d.Pl.MANAGE_GUILD_EXPRESSIONS, e), u.Z.can(t, e), u.Z.can(i, e)]
                        })), 4),
                        c = o[0],
                        f = o[1],
                        g = o[2],
                        m = o[3],
                        y = (0, l.e7)([s.default], (function() {
                            return s.default.getCurrentUser()
                        })),
                        E = r.useCallback((function(e) {
                            return b(e, y, f, c)
                        }), [c, f, y]),
                        j = r.useCallback((function(e) {
                            return b(e, y, m, g)
                        }), [m, g, y]);
                    return null == e ? h : {
                        canCreateExpressions: c,
                        canCreateGuildEvent: g,
                        canManageAllExpressions: f,
                        canManageAllEvents: m,
                        canManageGuildExpression: E,
                        canManageGuildEvent: j
                    }
                },
                m = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Z,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
                        r = v(e instanceof a.Z ? [d.Pl.CREATE_EVENTS, d.Pl.MANAGE_EVENTS] : p(e), 2),
                        i = r[0],
                        l = r[1],
                        o = n.can(d.Pl.CREATE_GUILD_EXPRESSIONS, e),
                        c = n.can(d.Pl.MANAGE_GUILD_EXPRESSIONS, e),
                        f = n.can(i, e),
                        g = n.can(l, e),
                        m = t.getCurrentUser();
                    return null == e ? h : {
                        canCreateExpressions: o,
                        canCreateGuildEvent: f,
                        canManageAllExpressions: c,
                        canManageAllEvents: g,
                        canManageGuildExpression: function(e) {
                            return b(e, m, c, o)
                        },
                        canManageGuildEvent: function(e) {
                            return b(e, m, g, f)
                        }
                    }
                },
                y = function(e) {
                    var n = (0, l.e7)([u.Z], (function() {
                            return u.Z.can(d.Pl.MANAGE_GUILD, e)
                        })),
                        t = (0, o.JY)({
                            guildId: null == e ? void 0 : e.id
                        }).showSettingsToggle;
                    return n && t
                }
        },
        367299: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => o
            });
            var r = t(785893),
                i = (t(667294), t(318715)),
                l = t(785085);

            function o(e) {
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
                Z: () => u
            });
            var r = t(667294),
                i = t(318715),
                l = t(255875),
                o = t(785085);

            function a(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function u() {
                var e = r.useContext(l.E).createMultipleConfettiAt,
                    n = (0, i.ZP)([o.Z], (function() {
                        return o.Z.getState()
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
                    u = r.useMemo((function() {
                        return {
                            fire: function(r, i, l) {
                                var o, u, s = null != (null == l ? void 0 : l.settings) ? function(e) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var t = null != arguments[n] ? arguments[n] : {},
                                                r = Object.keys(t);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                                            }))));
                                            r.forEach((function(n) {
                                                a(e, n, t[n])
                                            }))
                                        }
                                        return e
                                    }({}, n, l.settings) : n,
                                    c = t(s);
                                e(r, i, c, (null !== (o = null == l ? void 0 : l.count) && void 0 !== o ? o : s.confettiCount) * (null !== (u = null == l ? void 0 : l.countMultiplier) && void 0 !== u ? u : 1), {
                                    sprite: null == l ? void 0 : l.sprite
                                })
                            }
                        }
                    }), [e, t, n]);
                return u
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
                o = t(473708),
                a = t(300443),
                u = t.n(a),
                s = t(483683),
                c = t.n(s),
                d = t(63685),
                f = t.n(d);

            function v(e) {
                var n = e.className,
                    t = e.children;
                return (0, r.jsxs)("div", {
                    className: l()(u().container, n),
                    children: [(0, r.jsx)("img", {
                        alt: o.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: f(),
                        className: l()(u().sparkleIcon, u().sparkleBottom)
                    }), t, (0, r.jsx)("img", {
                        alt: o.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: c(),
                        className: l()(u().sparkleIcon, u().sparkleTop)
                    })]
                })
            }
        },
        457997: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                i = (t(667294), t(168075)),
                l = t(66541),
                o = t(633878);

            function a(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function u(e, n) {
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
                    v = s(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", u(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            a(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(v)), {
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
                Z: () => s
            });
            var r = t(667294),
                i = t(347365);

            function l(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function o(e, n, t, r, i, l, o) {
                try {
                    var a = e[l](o),
                        u = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(u) : Promise.resolve(u).then(r, i)
            }

            function a(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, l = [],
                            o = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (a) throw i
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
            var u = function(e, n) {
                var t, r, i, l, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function a(l) {
                    return function(a) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & l[0] ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, l[1])).done) return i;
                                (r = 0, i) && (l = [2 & l[0], i.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        i = l;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = l;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(l);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                l = n.call(e, o)
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
                        }([l, a])
                    }
                }
            };

            function s(e, n) {
                var t, l, s = a(r.useState(!1), 2),
                    c = s[0],
                    d = s[1],
                    f = a(r.useState(null), 2),
                    v = f[0],
                    h = f[1],
                    b = (l = (t = function() {
                        var t, r, l;
                        return u(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    d(!0);
                                    h(null);
                                    o.label = 1;
                                case 1:
                                    o.trys.push([1, 3, , 4]);
                                    return [4, e()];
                                case 2:
                                    t = o.sent();
                                    d(!1);
                                    h(null);
                                    return [2, t];
                                case 3:
                                    r = o.sent();
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

                            function a(e) {
                                o(l, r, i, a, u, "next", e)
                            }

                            function u(e) {
                                o(l, r, i, a, u, "throw", e)
                            }
                            a(void 0)
                        }))
                    }), function() {
                        return l.apply(this, arguments)
                    });
                return [b, {
                    loading: c,
                    error: v
                }]
            }
        }
    }
]);