"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [32499], {
        343639: (e, n, t) => {
            t.d(n, {
                Z: () => u
            });
            var r = t(785893),
                o = (t(667294), t(213276));

            function i(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e) {
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
            }

            function u(e, n) {
                return function(t) {
                    return (0, r.jsx)(o.Z, {
                        page: n.page,
                        section: n.section,
                        object: n.object,
                        objectType: n.objectType,
                        children: (0, r.jsx)(e, l({}, t))
                    })
                }
            }
        },
        567678: (e, n, t) => {
            t.d(n, {
                Z: () => u
            });
            var r = t(785893),
                o = (t(667294), t(19585));

            function i(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e) {
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
            }

            function u(e, n) {
                return function(t) {
                    var i = (0, o.Z)(n).AnalyticsLocationProvider;
                    return (0, r.jsx)(i, {
                        children: (0, r.jsx)(e, l({}, t))
                    })
                }
            }
        },
        822003: (e, n, t) => {
            t.d(n, {
                BG: () => b,
                aY: () => r,
                dW: () => O,
                gm: () => _,
                jQ: () => o,
                sE: () => E
            });
            var r, o, i = t(667294),
                l = t(153686),
                u = t(396043),
                c = t(664625),
                a = t(652591),
                d = t(2590);

            function s(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function f(e, n, t) {
                var r, o = function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            s(e, n, t[n])
                        }))
                    }
                    return e
                }({}, n, (0, u.hH)(null !== (r = n.guild_id) && void 0 !== r ? r : t));
                a.default.track(e, o)
            }

            function _(e) {
                return i.useCallback((function(n) {
                    ! function(e) {
                        var n = {
                            guild_id: e,
                            location: l.Z.MEMBER_SAFETY_PAGE
                        };
                        f(d.rMx.MOD_DASH_SEARCH_MEMBERS, n)
                    }(e)
                }), [e])
            }

            function b(e) {
                return i.useCallback((function(n) {
                    ! function(e, n) {
                        var t = {
                            selected_role_count: n.size,
                            guild_id: e,
                            location: l.Z.MEMBER_SAFETY_PAGE
                        };
                        f(d.rMx.MOD_DASH_FILTER_ROLES, t)
                    }(e, n)
                }), [e])
            }! function(e) {
                e.UNUSUAL_DM_ACTIVITY = "unusual_dm_activity";
                e.COMMUNICATION_DISABLED = "communication_disabled"
            }(r || (r = {}));

            function O(e) {
                return i.useCallback((function(n) {
                    ! function(e, n) {
                        var t = {
                            flag_type: n,
                            guild_id: e,
                            location: l.Z.MEMBER_SAFETY_PAGE
                        };
                        f(d.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t)
                    }(e, n)
                }), [e])
            }! function(e) {
                e.BAN = "ban";
                e.KICK = "kick";
                e.MUTE = "mute";
                e.TIMEOUT = "timeout";
                e.ADD_ROLE = "add_role";
                e.REMOVE_ROLE = "remove_role";
                e.COPY_ID = "copy_id";
                e.CHANGE_NICKNAME = "change_nickname"
            }(o || (o = {}));

            function E(e, n) {
                var t = n.location,
                    r = n.targetUserId,
                    o = n.targets;
                return i.useCallback((function(n) {
                    var i = {
                        action_type: n,
                        mod_user_id: c.default.getId(),
                        guild_id: e,
                        location: t,
                        target_user_id: null != r ? r : void 0,
                        targets: null != o ? o : void 0
                    };
                    f(d.rMx.MODERATION_ACTION, i)
                }), [e, t, r, o])
            }
        },
        632499: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => _
            });
            var r = t(785893),
                o = (t(667294), t(70418)),
                i = t(971402),
                l = t(343639),
                u = t(567678),
                c = t(153686),
                a = t(19585),
                d = t(973424),
                s = t(2590),
                f = t(473708);
            const _ = (0, u.Z)((0, l.Z)((function(e) {
                var n, t = e.user,
                    l = e.guildId,
                    u = e.onSelect,
                    s = e.analyticsLocations,
                    _ = e.onCloseContextMenu,
                    b = (0, a.Z)(c.Z.CONTEXT_MENU).analyticsLocations,
                    O = null !== (n = null == s ? void 0 : s[0]) && void 0 !== n ? n : b[0],
                    E = (0, d.Z)(t.id, l, !0, O);
                return (0, r.jsx)(o.Menu, {
                    navId: "guild-moderation-roles",
                    onClose: function() {
                        (0, i.Zy)();
                        null == _ || _()
                    },
                    "aria-label": f.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: u,
                    children: (0, r.jsx)(o.MenuGroup, {
                        children: E
                    })
                })
            }), {
                object: s.qAy.CONTEXT_MENU
            }), [c.Z.CONTEXT_MENU, c.Z.GUILD_MODERATION_USER_MENU])
        },
        973424: (e, n, t) => {
            t.d(n, {
                Z: () => v
            });
            var r = t(785893),
                o = (t(667294), t(547308)),
                i = t(202351),
                l = t(70418),
                u = t(316878),
                c = t(822003),
                a = t(703790),
                d = t(21372),
                s = t(567403),
                f = t(682776),
                _ = t(72580),
                b = t(2590),
                O = t(473708),
                E = t(950677),
                g = t.n(E);

            function M(e, n) {
                var t, i;
                return (0, r.jsxs)("div", {
                    className: g().roleRow,
                    children: ["dot" === n ? (0, r.jsx)(l.RoleDot, {
                        className: g().roleDot,
                        color: null !== (t = e.colorString) && void 0 !== t ? t : (0, o.Rf)(b.p6O),
                        background: !1,
                        tooltip: !1
                    }) : (0, r.jsx)(l.RoleCircle, {
                        className: g().roleDot,
                        color: null !== (i = e.colorString) && void 0 !== i ? i : (0, o.Rf)(b.p6O)
                    }), (0, r.jsx)("div", {
                        children: e.name
                    })]
                })
            }

            function v(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    E = function(t) {
                        if (j.includes(t.id)) {
                            a.Z.updateMemberRoles(n, e, j.filter((function(e) {
                                return e !== t.id
                            })), [], [t.id]);
                            m(c.jQ.REMOVE_ROLE)
                        } else {
                            a.Z.updateMemberRoles(n, e, j.concat([t.id]), [t.id], []);
                            m(c.jQ.ADD_ROLE)
                        }
                    },
                    g = (0, i.e7)([s.Z], (function() {
                        return s.Z.getGuild(n)
                    }), [n]),
                    v = (0, i.e7)([u.Z], (function() {
                        return u.Z.roleStyle
                    })),
                    m = (0, c.sE)(n, {
                        location: o,
                        targetUserId: e
                    }),
                    p = (0, i.cj)([d.ZP, f.Z], (function() {
                        var t = d.ZP.getMember(n, e);
                        return {
                            userRoles: null != t ? t.roles : [],
                            isGuildMember: null != t,
                            canManageRoles: null != g && f.Z.can(b.Plq.MANAGE_ROLES, g)
                        }
                    }), [e, n, g]),
                    j = p.userRoles,
                    y = p.isGuildMember,
                    R = p.canManageRoles;
                if (__OVERLAY__) return null;
                if (null == j || null == g) return null;
                if (!y) return null;
                var A = f.Z.getHighestRole(g),
                    S = Object.values(g.roles).filter((function(e) {
                        return e.id !== g.id
                    })),
                    Z = R ? S.map((function(e) {
                        var n = e.managed || !f.Z.isRoleHigher(g, A, e),
                            t = -1 !== j.indexOf(e.id);
                        return n && !t ? null : (0, r.jsx)(l.MenuCheckboxItem, {
                            id: e.id,
                            label: function() {
                                return M(e, v)
                            },
                            disabled: n,
                            action: function() {
                                return E(e)
                            },
                            checked: t
                        }, e.id)
                    })) : S.filter((function(e) {
                        return -1 !== j.indexOf(e.id)
                    })).map((function(e) {
                        return e.id === g.id ? null : (0, r.jsx)(l.MenuItem, {
                            id: e.id,
                            label: function() {
                                return M(e, v)
                            }
                        }, e.id)
                    }));
                return 0 === Z.filter(_.lm).length ? null : t ? Z : (0, r.jsx)(l.MenuItem, {
                    id: "roles",
                    label: O.Z.Messages.ROLES_LIST.format({
                        numRoles: Z.length
                    }),
                    children: Z
                })
            }
        }
    }
]);