"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [89178, 66240], {
        166240: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => re
            });
            var r = t(785893),
                o = (t(667294), t(441143)),
                i = t.n(o),
                u = t(202351),
                c = t(304548),
                a = t(971402),
                s = t(153686),
                l = t(19585),
                f = t(112897),
                p = t(324239),
                b = t(179156),
                d = t(809210),
                y = t(664625),
                h = t(5544),
                O = t(473903),
                g = t(811518),
                v = t(434651),
                j = t(206789),
                m = t(889231),
                E = t(813869),
                w = t(33014),
                P = t(473708);
            var M = t(440997),
                _ = t(795308),
                S = t(201459),
                Z = t(848422),
                x = t(873936),
                I = t(998918),
                L = t(9430),
                N = t(531441),
                A = t(2590),
                D = t(35637),
                R = t.n(D);

            function T(e, n, t, r, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value
                } catch (e) {
                    t(e);
                    return
                }
                c.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function G(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            T(i, r, o, u, c, "next", e)
                        }

                        function c(e) {
                            T(i, r, o, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function k(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function C(e, n) {
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
            var U = function(e, n) {
                var t, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };

            function B() {
                return [{
                    setting: A.bL.ALL_MESSAGES,
                    label: P.Z.Messages.FORM_LABEL_ALL_MESSAGES
                }, {
                    setting: A.bL.ONLY_MENTIONS,
                    label: P.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                }, {
                    setting: A.bL.NO_MESSAGES,
                    label: P.Z.Messages.FORM_LABEL_NOTHING
                }]
            }

            function H(e) {
                var n, o, i = function(e) {
                        var n = function(n) {
                                S.Z.updateGuildNotificationSettings(e.id, n)
                            },
                            t = (0, u.cj)([L.Z], (function() {
                                return {
                                    suppressEveryone: L.Z.isSuppressEveryoneEnabled(e.id),
                                    suppressRoles: L.Z.isSuppressRolesEnabled(e.id),
                                    mobilePush: L.Z.isMobilePushEnabled(e.id),
                                    messageNotifications: L.Z.getMessageNotifications(e.id),
                                    notifyHighlights: L.Z.getNotifyHighlights(e.id),
                                    isGuildUnreadsEnabled: L.Z.isGuildUnreadSettingEnabled(e.id)
                                }
                            }), [e.id]),
                            o = t.suppressEveryone,
                            i = t.suppressRoles,
                            a = t.mobilePush,
                            s = t.messageNotifications,
                            l = t.notifyHighlights,
                            f = t.isGuildUnreadsEnabled,
                            p = l === A.gLR.DISABLED,
                            b = (0, Z.Z)(e.id),
                            d = (0, I.RX)();
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(c.MenuGroup, {
                                children: B().map((function(e) {
                                    var t = e.setting,
                                        o = e.label;
                                    return (0, r.jsx)(c.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: o,
                                        action: function() {
                                            return n({
                                                message_notifications: t
                                            })
                                        },
                                        checked: t === s
                                    }, t)
                                }))
                            }), (0, r.jsxs)(c.MenuGroup, {
                                children: [d && (0, r.jsx)(c.MenuCheckboxItem, {
                                    id: "enable-unread-settings",
                                    label: (0, r.jsxs)(r.Fragment, {
                                        children: [P.Z.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN, (0, r.jsx)(N.IG, {
                                            text: P.Z.Messages.BETA,
                                            color: _.Z.unsafe_rawColors.BRAND_500.css,
                                            className: R().betaBadge
                                        })]
                                    }),
                                    action: function() {
                                        (0, x.EQ)(e.id, !f)
                                    },
                                    checked: f
                                }), (0, r.jsx)(c.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: P.Z.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: function() {
                                        return n({
                                            suppress_everyone: !o
                                        })
                                    },
                                    checked: o
                                }), (0, r.jsx)(c.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: P.Z.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: function() {
                                        return n({
                                            suppress_roles: !i
                                        })
                                    },
                                    checked: i
                                }), (0, r.jsx)(c.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: P.Z.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: function() {
                                        n({
                                            notify_highlights: p ? A.gLR.ENABLED : A.gLR.DISABLED
                                        })
                                    },
                                    checked: p
                                }), b]
                            }), (0, r.jsx)(c.MenuGroup, {
                                children: (0, r.jsx)(c.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: P.Z.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: function() {
                                        return n({
                                            mobile_push: !a
                                        })
                                    },
                                    checked: a
                                })
                            })]
                        })
                    }(e),
                    a = (0, u.e7)([L.Z], (function() {
                        return L.Z.getMessageNotifications(e.id)
                    }), [e.id]),
                    s = null === (o = null === (n = B()) || void 0 === n ? void 0 : n.find((function(e) {
                        return e.setting === a
                    }))) || void 0 === o ? void 0 : o.label;
                return null != i ? (0, r.jsx)(c.MenuItem, {
                    id: "guild-notifications",
                    label: P.Z.Messages.NOTIFICATION_SETTINGS,
                    subtext: s,
                    action: function() {
                        return (0, c.openModalLazy)(G((function() {
                            var n, o;
                            return U(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(7528)]).then(t.bind(t, 207528))];
                                    case 1:
                                        n = i.sent(), o = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(o, C(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        k(e, n, t[n])
                                                    }))
                                                }
                                                return e
                                            }({}, n), {
                                                guildId: e.id
                                            }))
                                        }]
                                }
                            }))
                        })))
                    },
                    children: i
                }) : null
            }
            var F = t(177179),
                V = t(703790),
                Y = t(682776);
            var q = t(584685);

            function X(e) {
                var n = function(n) {
                        V.Z.open(e.id, n)
                    },
                    t = (0, u.Wu)([h.ZP], (function() {
                        return h.ZP.getChannels(e.id).SELECTABLE
                    }), [e]),
                    o = function(e) {
                        var n = (0, u.cj)([Y.Z], (function() {
                                return {
                                    canManageGuild: Y.Z.can(A.Plq.MANAGE_GUILD, e),
                                    canManageRoles: Y.Z.can(A.Plq.MANAGE_ROLES, e),
                                    canBanMembers: Y.Z.can(A.Plq.BAN_MEMBERS, e),
                                    canManageNicknames: Y.Z.can(A.Plq.MANAGE_NICKNAMES, e),
                                    canCreateEmojisAndStickers: Y.Z.can(A.Plq.CREATE_GUILD_EXPRESSIONS, e),
                                    canManageEmojisAndStickers: Y.Z.can(A.Plq.MANAGE_GUILD_EXPRESSIONS, e),
                                    canManageWebhooks: Y.Z.can(A.Plq.MANAGE_WEBHOOKS, e),
                                    canViewAuditLog: Y.Z.can(A.Plq.VIEW_AUDIT_LOG, e)
                                }
                            }), [e]),
                            t = n.canManageGuild,
                            r = n.canManageRoles,
                            o = n.canBanMembers,
                            i = n.canManageNicknames,
                            c = n.canCreateEmojisAndStickers,
                            a = n.canManageEmojisAndStickers,
                            s = n.canManageWebhooks,
                            l = n.canViewAuditLog;
                        return t || r || o || i || c || a || s || l
                    }(e);
                return __OVERLAY__ || !o ? null : (0, r.jsx)(c.MenuItem, {
                    id: "guild-settings",
                    label: P.Z.Messages.SERVER_SETTINGS,
                    action: function() {
                        return n()
                    },
                    children: (0, q.t)(e, t).map((function(t) {
                        var o = t.section,
                            i = t.label;
                        if (null == i) return null;
                        switch (o) {
                            case A.pNK.DELETE:
                                return null;
                            case A.pNK.COMMUNITY:
                                return (0, r.jsx)(c.MenuItem, {
                                    id: o,
                                    action: function() {
                                        return n(o)
                                    },
                                    label: P.Z.Messages.GUILD_SETTINGS_COMMUNITY
                                }, o);
                            case A.pNK.APP_DIRECTORY:
                                return (0, r.jsx)(c.MenuItem, {
                                    id: o,
                                    action: function() {
                                        (0, F.goToAppDirectory)({
                                            guildId: e.id,
                                            entrypoint: "Guild Settings"
                                        })
                                    },
                                    label: i
                                }, o);
                            default:
                                return (0, r.jsx)(c.MenuItem, {
                                    id: o,
                                    action: function() {
                                        return n(o)
                                    },
                                    label: i
                                }, o)
                        }
                    }))
                })
            }
            var z = t(159431),
                W = t(753082);

            function K(e, n, t, r, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value
                } catch (e) {
                    t(e);
                    return
                }
                c.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function Q(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            K(i, r, o, u, c, "next", e)
                        }

                        function c(e) {
                            K(i, r, o, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function J(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function $(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        J(e, n, t[n])
                    }))
                }
                return e
            }

            function ee(e, n) {
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
            var ne = function(e, n) {
                var t, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };

            function te(e) {
                var n = e.guild,
                    o = e.onSelect,
                    s = e.hideSettings,
                    l = function() {
                        (0, c.openModal)((function(e) {
                            return (0, r.jsx)(g.g, ee($({}, e), {
                                guild: n,
                                discoverableGuildData: Z
                            }))
                        }))
                    },
                    _ = n.id,
                    S = h.ZP.getDefaultChannel(_),
                    Z = (0, b.oe)(n),
                    x = (0, u.e7)([O.default], (function() {
                        var e = O.default.getCurrentUser();
                        i()(null != e, "GuildContextMenu: user cannot be undefined");
                        return n.isOwner(e)
                    }), [n]),
                    I = (0, W.Z)({
                        guild: n,
                        source: A.t4x.GUILD_CONTEXT_MENU,
                        channel: S
                    }),
                    L = (0, z.Z)(_),
                    N = (0, M.Z)(n),
                    D = H(n),
                    R = X(n),
                    T = (0, v.Z)({
                        guildId: n.id,
                        userId: y.default.getId(),
                        analyticsLocation: {
                            page: A.ZY5.GUILD_CHANNEL,
                            section: A.jXE.CHAT_USERNAME,
                            object: A.qAy.CONTEXT_MENU_ITEM
                        }
                    }),
                    G = (0, j.Z)(n),
                    k = (0, p.Z)(n.id),
                    C = (0, f.Z)({
                        id: n.id,
                        label: P.Z.Messages.COPY_ID_GUILD
                    }),
                    U = function(e, n) {
                        var t = e.id,
                            o = (0, u.e7)([E.Z], (function() {
                                return E.Z.getGuildHasUnreadIgnoreMuted(t)
                            }), [t]);
                        return (0, r.jsx)(c.MenuItem, {
                            id: "mark-guild-read",
                            label: P.Z.Messages.MARK_AS_READ,
                            icon: void 0,
                            action: function() {
                                return (0, w.Z)([t], n.section)
                            },
                            disabled: !o
                        })
                    }(n, {
                        section: A.jXE.GUILD_LIST
                    }),
                    B = (0, d.Z)(n.id),
                    F = (0, m.Z)(n);
                return n.hasFeature(A.oNc.HUB) ? (0, r.jsxs)(c.Menu, {
                    navId: "guild-context",
                    onClose: a.Zy,
                    "aria-label": P.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: o,
                    children: [(0, r.jsxs)(c.MenuGroup, {
                        children: [I, (0, r.jsx)(c.MenuItem, {
                            id: "privacy",
                            label: P.Z.Messages.HUB_PRIVACY_SETTINGS,
                            action: function() {
                                return (0, c.openModalLazy)(Q((function() {
                                    var e, o;
                                    return ne(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(24561)]).then(t.bind(t, 124561))];
                                            case 1:
                                                e = i.sent(), o = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(o, ee($({}, e), {
                                                        guild: n
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }), T]
                    }), x ? null : (0, r.jsx)(c.MenuGroup, {
                        children: (0, r.jsx)(c.MenuItem, {
                            id: "leave-guild",
                            label: P.Z.Messages.LEAVE_HUB,
                            action: l,
                            color: "danger"
                        })
                    }), (0, r.jsx)(c.MenuGroup, {
                        children: C
                    })]
                }) : (0, r.jsxs)(c.Menu, {
                    navId: "guild-context",
                    onClose: a.Zy,
                    "aria-label": P.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: o,
                    children: [(0, r.jsx)(c.MenuGroup, {
                        children: U
                    }), (0, r.jsx)(c.MenuGroup, {
                        children: I
                    }), (0, r.jsxs)(c.MenuGroup, {
                        children: [N, __OVERLAY__ ? null : D, L, B]
                    }), (0, r.jsxs)(c.MenuGroup, {
                        children: [s ? null : R, __OVERLAY__ ? null : (0, r.jsx)(c.MenuItem, {
                            id: "privacy",
                            label: P.Z.Messages.PRIVACY_SETTINGS,
                            action: function() {
                                return (0, c.openModalLazy)(Q((function() {
                                    var e, o;
                                    return ne(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(24561)]).then(t.bind(t, 124561))];
                                            case 1:
                                                e = i.sent(), o = e.default;
                                                return [2, function(e) {
                                                    return (0,
                                                        r.jsx)(o, ee($({}, e), {
                                                        guild: n
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }), T]
                    }), (0, r.jsxs)(c.MenuGroup, {
                        children: [G, k]
                    }), (0, r.jsxs)(c.MenuGroup, {
                        children: [F, !x && (0, r.jsx)(c.MenuItem, {
                            id: "leave-guild",
                            label: P.Z.Messages.LEAVE_SERVER,
                            action: l,
                            color: "danger"
                        })]
                    }), (0, r.jsx)(c.MenuGroup, {
                        children: C
                    })]
                })
            }

            function re(e) {
                var n = (0, l.Z)(s.Z.CONTEXT_MENU).AnalyticsLocationProvider;
                return (0, r.jsx)(n, {
                    children: (0, r.jsx)(te, $({}, e))
                })
            }
        },
        206789: (e, n, t) => {
            t.d(n, {
                Z: () => h
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(304548),
                u = t(682776),
                c = t(2590),
                a = t(485911),
                s = t(473708);

            function l(e, n, t, r, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value
                } catch (e) {
                    t(e);
                    return
                }
                c.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function f(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            l(i, r, o, u, c, "next", e)
                        }

                        function c(e) {
                            l(i, r, o, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function p(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function b(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        p(e, n, t[n])
                    }))
                }
                return e
            }

            function d(e, n) {
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
            var y = function(e, n) {
                var t, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };

            function h(e) {
                var n = (0, o.e7)([u.Z], (function() {
                    return u.Z.can(c.Plq.MANAGE_CHANNELS, e)
                }));
                return __OVERLAY__ ? null : e.id === a._ ? (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(i.MenuItem, {
                        id: "create-category",
                        label: s.Z.Messages.CREATE_CATEGORY,
                        action: function() {
                            return (0, i.openModalLazy)(f((function() {
                                var e, n;
                                return y(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, Promise.all([t.e(40532), t.e(84680)]).then(t.bind(t, 631199))];
                                        case 1:
                                            e = o.sent(), n = e.default;
                                            return [2, function(e) {
                                                return (0, r.jsx)(n, b({}, e))
                                            }]
                                    }
                                }))
                            })))
                        }
                    })
                }) : n ? [(0, r.jsx)(i.MenuItem, {
                    id: "create-channel",
                    label: s.Z.Messages.CREATE_CHANNEL,
                    action: function() {
                        return (0, i.openModalLazy)(f((function() {
                            var n, o;
                            return y(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(57645)]).then(t.bind(t, 957645))];
                                    case 1:
                                        n = i.sent(), o = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(o, d(b({}, n), {
                                                channelType: c.d4z.GUILD_TEXT,
                                                guildId: e.id
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                }, "create-channel"), (0, r.jsx)(i.MenuItem, {
                    id: "create-category",
                    label: s.Z.Messages.CREATE_CATEGORY,
                    action: function() {
                        return (0, i.openModalLazy)(f((function() {
                            var n, o;
                            return y(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(57645)]).then(t.bind(t, 957645))];
                                    case 1:
                                        n = i.sent(), o = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(o, d(b({}, n), {
                                                channelType: c.d4z.GUILD_CATEGORY,
                                                guildId: e.id
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                }, "create-category")] : null
            }
        },
        159431: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(304548),
                u = t(77705),
                c = t(9430),
                a = t(473708);

            function s(e) {
                var n = (0, o.e7)([c.Z], (function() {
                    return c.Z.isGuildCollapsed(e)
                }), [e]);
                return (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: a.Z.Messages.HIDE_MUTED_CHANNELS,
                    action: function() {
                        return u.Z.toggleCollapseGuild(e)
                    },
                    checked: n
                })
            }
        },
        848422: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(304548),
                u = t(201459),
                c = t(9430),
                a = t(473708);

            function s(e) {
                var n = (0, o.e7)([c.Z], (function() {
                    return c.Z.isMuteScheduledEventsEnabled(e)
                }), [e]);
                return (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "mute-events",
                    label: a.Z.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                    action: function() {
                        return t = {
                                mute_scheduled_events: !n
                            },
                            void u.Z.updateGuildNotificationSettings(e, t);
                        var t
                    },
                    checked: n
                })
            }
        },
        677483: (e, n, t) => {
            t.d(n, {
                Z: () => m
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                u = t.n(i),
                c = t(653593),
                a = t(676415),
                s = t.n(a);

            function l(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function b(e, n) {
                return !n || "object" !== y(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function d(e, n) {
                d = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return d(e, n)
            }
            var y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
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
                    var t, r = p(e);
                    if (n) {
                        var o = p(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return b(this, t)
                }
            }
            var O, g = {
                    UP: "up",
                    RIGHT: "right",
                    DOWN: "down",
                    LEFT: "left"
                },
                v = (f(O = {}, g.UP, s().up), f(O, g.RIGHT, s().right), f(O, g.DOWN, s().down), f(O, g.LEFT, s().left), O),
                j = function(e) {
                    ! function(e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        n && d(e, n)
                    }(t, e);
                    var n = h(t);

                    function t() {
                        l(this, t);
                        return n.apply(this, arguments)
                    }
                    t.prototype.render = function() {
                        var e = this.props,
                            n = e.direction,
                            t = e.className;
                        return (0, r.jsx)(c.Z, {
                            className: u()(s().arrow, t, f({}, v[n], !0))
                        })
                    };
                    return t
                }(o.PureComponent);
            j.Directions = g;
            const m = j
        },
        653593: (e, n, t) => {
            t.d(n, {
                Z: () => b
            });
            var r = t(785893),
                o = (t(667294), t(168075)),
                i = t(795308),
                u = t(633878);

            function c(e, n, t) {
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
            var l = t(873308);

            function f(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function p(e, n) {
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
            const b = (0, o.hN)((function(e) {
                return (0, r.jsx)(l.Z, p(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            f(e, n, t[n])
                        }))
                    }
                    return e
                }({}, e), {
                    direction: l.Z.Directions.UP
                }))
            }), (function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    o = e.height,
                    l = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    b = e.colorClass,
                    d = void 0 === b ? "" : b,
                    y = s(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
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
                }({}, (0, u.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M12.707 3.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 6.414V20a1 1 0 1 0 2 0V6.414l3.293 3.293a1 1 0 0 0 1.414-1.414l-5-5Z",
                        clipRule: "evenodd",
                        className: d
                    })
                }))
            }))
        },
        300330: (e, n, t) => {
            t.d(n, {
                ZP: () => b
            });
            var r = t(853158);

            function o(e, n, t, r, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value
                } catch (e) {
                    t(e);
                    return
                }
                c.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function i(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function c(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        u(e, n, t[n])
                    }))
                }
                return e
            }
            var a = function(e, n) {
                    var t, r, o, i, u = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function c(i) {
                        return function(c) {
                            return function(i) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                u.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && u.label < o[1]) {
                                                u.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && u.label < o[2]) {
                                                u.label = o[2];
                                                u.ops.push(i);
                                                break
                                            }
                                            o[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    i = n.call(e, u)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    t = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, c])
                        }
                    }
                },
                s = function() {
                    function e(n) {
                        i(this, e);
                        this.animation = n
                    }
                    var n = e.prototype;
                    n.start = function() {
                        var e = this;
                        return new Promise((function(n) {
                            e.animation.start((function() {
                                n()
                            }))
                        }))
                    };
                    n.stop = function() {
                        this.animation.stop()
                    };
                    return e
                }(),
                l = function() {
                    function e(n) {
                        i(this, e);
                        this.animations = n
                    }
                    var n = e.prototype;
                    n._map = function(e) {
                        return this.animations.map(e)
                    };
                    n.start = function() {
                        var e = this;
                        return new Promise((function(n) {
                            return Promise.all(e._map((function(e) {
                                return e.start()
                            }))).then((function() {
                                return n()
                            }))
                        }))
                    };
                    n.stop = function() {
                        this._map((function(e) {
                            return e.stop()
                        }))
                    };
                    return e
                }(),
                f = function() {
                    function e(n) {
                        i(this, e);
                        this.stopped = !1;
                        this.animations = n
                    }
                    var n = e.prototype;
                    n.start = function() {
                        var e, n = this;
                        return (e = function() {
                            var e, t, r, o, i, u, c;
                            return a(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        n.stopped = !1;
                                        e = !0, t = !1, r = void 0;
                                        a.label = 1;
                                    case 1:
                                        a.trys.push([1, 6, 7, 8]);
                                        o = n.animations[Symbol.iterator]();
                                        a.label = 2;
                                    case 2:
                                        if (e = (i = o.next()).done) return [3, 5];
                                        u = i.value;
                                        return n.stopped ? [2] : [4, u.start()];
                                    case 3:
                                        a.sent();
                                        a.label = 4;
                                    case 4:
                                        e = !0;
                                        return [3, 2];
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        c = a.sent();
                                        t = !0;
                                        r = c;
                                        return [3, 8];
                                    case 7:
                                        try {
                                            e || null == o.return || o.return()
                                        } finally {
                                            if (t) throw r
                                        }
                                        return [7];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }, function() {
                            var n = this,
                                t = arguments;
                            return new Promise((function(r, i) {
                                var u = e.apply(n, t);

                                function c(e) {
                                    o(u, r, i, c, a, "next", e)
                                }

                                function a(e) {
                                    o(u, r, i, c, a, "throw", e)
                                }
                                c(void 0)
                            }))
                        })()
                    };
                    n.stop = function() {
                        this.stopped = !0;
                        this.animations.map((function(e) {
                            return e.stop()
                        }))
                    };
                    return e
                }();

            function p(e, n, t) {
                var r = t(e, c({}, n));
                return new s(r)
            }
            const b = function(e, n) {
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
            }(c({}, r.Z), {
                timing: function(e, n) {
                    return p(e, n, r.Z.timing)
                },
                spring: function(e, n) {
                    return p(e, n, r.Z.spring)
                },
                parallel: function(e) {
                    return new l(e)
                },
                sequence: function(e) {
                    return new f(e)
                }
            })
        },
        698425: (e, n, t) => {
            t.d(n, {
                T: () => r
            });
            var r;
            ! function(e) {
                e.ADMIN = "admin";
                e.DEVELOPER = "developer";
                e.READ_ONLY = "read_only"
            }(r || (r = {}))
        },
        731988: (e, n, t) => {
            t.d(n, {
                o: () => o
            });
            var r = t(805829),
                o = function(e, n) {
                    var t = Math.round(10 * e) / 10;
                    if (e < 1e6) return new Intl.NumberFormat(n, {
                        maximumFractionDigits: t % 1 == 0 ? 0 : 1
                    }).format(e);
                    var o = Math.round(e / 1e6 * 10) / 10,
                        i = new Intl.NumberFormat(n, {
                            maximumFractionDigits: o % 1 == 0 ? 0 : 1
                        }).format(e / 1e6);
                    return r.Z.Messages.NumberAbbreviations.MILLION.format({
                        num: i
                    })
                }
        },
        685269: (e, n, t) => {
            t.d(n, {
                Z: () => i
            });
            var r = t(667294);
            var o = [];

            function i(e, n) {
                var t = (0, r.useRef)(),
                    i = (0, r.useRef)(o);
                if (i.current === o) {
                    t.current = e();
                    i.current = n
                } else if (! function(e, n) {
                        if (e.length !== n.length) return !1;
                        for (var t = 0; t < n.length && t < e.length; t++)
                            if (!Object.is(e[t], n[t])) return !1;
                        return !0
                    }(n, i.current)) {
                    t.current = e();
                    i.current = n
                }
                return t.current
            }
        }
    }
]);