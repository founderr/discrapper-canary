"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [68912], {
        567678: (e, n, r) => {
            r.d(n, {
                Z: () => u
            });
            var t = r(785893),
                l = (r(667294), r(19585));

            function i(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function o(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        i(e, n, r[n])
                    }))
                }
                return e
            }

            function u(e, n) {
                return function(r) {
                    var i = (0, l.Z)(n).AnalyticsLocationProvider;
                    return (0, t.jsx)(i, {
                        children: (0, t.jsx)(e, o({}, r))
                    })
                }
            }
        },
        268912: (e, n, r) => {
            r.r(n);
            r.d(n, {
                default: () => b
            });
            var t = r(785893),
                l = (r(667294), r(70418)),
                i = r(971402),
                o = r(213276),
                u = r(567678),
                s = r(153686),
                c = r(112897),
                a = r(93439),
                d = r(536130),
                f = r(973424),
                O = r(2590),
                Z = r(473708);
            const b = (0, u.Z)((function(e) {
                var n = e.user,
                    r = e.guildId,
                    u = e.analyticsContext,
                    s = e.onSelect,
                    b = (0, d.Z)(n.id),
                    g = (0, f.Z)(n.id, r),
                    v = (0, c.Z)({
                        id: n.id,
                        label: Z.Z.Messages.COPY_ID_USER
                    }),
                    M = (0, a.Z)(n.id),
                    h = n.isNonUserBot();
                return (0, t.jsx)(o.Z, {
                    context: u,
                    object: O.qAy.CONTEXT_MENU,
                    children: (0, t.jsxs)(l.Menu, {
                        navId: "user-context",
                        onClose: i.Zy,
                        "aria-label": Z.Z.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: s,
                        children: [(0, t.jsxs)(l.MenuGroup, {
                            children: [!h && b, !h && M]
                        }), (0, t.jsx)(l.MenuGroup, {
                            children: !h && g
                        }), (0, t.jsx)(l.MenuGroup, {
                            children: v
                        })]
                    })
                })
            }), [s.Z.CONTEXT_MENU, s.Z.AUDIT_LOG_USER_MENU])
        },
        93439: (e, n, r) => {
            r.d(n, {
                Z: () => a
            });
            var t = r(785893),
                l = (r(667294), r(70418)),
                i = r(761953),
                o = r(735885),
                u = r(664625),
                s = r(2590),
                c = r(473708);

            function a(e, n) {
                var r = u.default.getId(),
                    a = n === s.IlC.POPOUT;
                return r === e || a ? null : (0, t.jsx)(l.MenuItem, {
                    id: "message-user",
                    label: c.Z.Messages.USER_POPOUT_MESSAGE,
                    action: function() {
                        i.Z.openPrivateChannel(e);
                        (0, o.xf)()
                    }
                })
            }
        },
        536130: (e, n, r) => {
            r.d(n, {
                Z: () => d
            });
            var t = r(785893),
                l = r(667294),
                i = r(70418),
                o = r(26468),
                u = r(924417),
                s = r(652591),
                c = r(2590),
                a = r(473708);

            function d(e, n, r) {
                var d = l.useContext(s.AnalyticsContext),
                    f = (0, o.Aq)();
                return (0, t.jsx)(i.MenuItem, {
                    id: "user-profile",
                    label: a.Z.Messages.PROFILE,
                    action: function() {
                        (0, u.m)({
                            userId: e,
                            guildId: null != n ? n : void 0,
                            channelId: null != r ? r : void 0,
                            analyticsLocation: d.location
                        });
                        f.dispatch(c.CkL.POPOUT_CLOSE)
                    }
                })
            }
        },
        973424: (e, n, r) => {
            r.d(n, {
                Z: () => h
            });
            var t = r(785893),
                l = (r(667294), r(547308)),
                i = r(202351),
                o = r(70418),
                u = r(316878),
                s = r(822003),
                c = r(703790),
                a = r(21372),
                d = r(567403),
                f = r(682776),
                O = r(72580),
                Z = r(2590),
                b = r(473708),
                g = r(950677),
                v = r.n(g);

            function M(e, n) {
                var r, i;
                return (0, t.jsxs)("div", {
                    className: v().roleRow,
                    children: ["dot" === n ? (0, t.jsx)(o.RoleDot, {
                        className: v().roleDot,
                        color: null !== (r = e.colorString) && void 0 !== r ? r : (0, l.Rf)(Z.p6O),
                        background: !1,
                        tooltip: !1
                    }) : (0, t.jsx)(o.RoleCircle, {
                        className: v().roleDot,
                        color: null !== (i = e.colorString) && void 0 !== i ? i : (0, l.Rf)(Z.p6O)
                    }), (0, t.jsx)("div", {
                        children: e.name
                    })]
                })
            }

            function h(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    g = function(r) {
                        if (p.includes(r.id)) {
                            c.Z.updateMemberRoles(n, e, p.filter((function(e) {
                                return e !== r.id
                            })), [], [r.id]);
                            j(s.jQ.REMOVE_ROLE)
                        } else {
                            c.Z.updateMemberRoles(n, e, p.concat([r.id]), [r.id], []);
                            j(s.jQ.ADD_ROLE)
                        }
                    },
                    v = (0, i.e7)([d.Z], (function() {
                        return d.Z.getGuild(n)
                    }), [n]),
                    h = (0, i.e7)([u.Z], (function() {
                        return u.Z.roleStyle
                    })),
                    j = (0, s.sE)(n, {
                        location: l,
                        targetUserId: e
                    }),
                    m = (0, i.cj)([a.ZP, f.Z], (function() {
                        var r = a.ZP.getMember(n, e);
                        return {
                            userRoles: null != r ? r.roles : [],
                            isGuildMember: null != r,
                            canManageRoles: null != v && f.Z.can(Z.Plq.MANAGE_ROLES, v)
                        }
                    }), [e, n, v]),
                    p = m.userRoles,
                    x = m.isGuildMember,
                    E = m.canManageRoles;
                if (__OVERLAY__) return null;
                if (null == p || null == v) return null;
                if (!x) return null;
                var R = f.Z.getHighestRole(v),
                    _ = Object.values(v.roles).filter((function(e) {
                        return e.id !== v.id
                    })),
                    I = E ? _.map((function(e) {
                        var n = e.managed || !f.Z.isRoleHigher(v, R, e),
                            r = -1 !== p.indexOf(e.id);
                        return n && !r ? null : (0, t.jsx)(o.MenuCheckboxItem, {
                            id: e.id,
                            label: function() {
                                return M(e, h)
                            },
                            disabled: n,
                            action: function() {
                                return g(e)
                            },
                            checked: r
                        }, e.id)
                    })) : _.filter((function(e) {
                        return -1 !== p.indexOf(e.id)
                    })).map((function(e) {
                        return e.id === v.id ? null : (0, t.jsx)(o.MenuItem, {
                            id: e.id,
                            label: function() {
                                return M(e, h)
                            }
                        }, e.id)
                    }));
                return 0 === I.filter(O.lm).length ? null : r ? I : (0, t.jsx)(o.MenuItem, {
                    id: "roles",
                    label: b.Z.Messages.ROLES_LIST.format({
                        numRoles: I.length
                    }),
                    children: I
                })
            }
        }
    }
]);