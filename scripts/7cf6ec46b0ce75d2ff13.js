"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [66240], {
        166240: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => ie
            });
            var r = t(785893),
                i = (t(667294), t(441143)),
                o = t.n(i),
                u = t(202351),
                a = t(70418),
                c = t(971402),
                s = t(153686),
                l = t(19585),
                f = t(112897),
                d = t(324239),
                b = t(179156),
                p = t(809210),
                g = t(664625),
                h = t(5544),
                E = t(473903),
                y = t(811518),
                M = t(434651),
                O = t(206789),
                _ = t(889231),
                j = t(813869),
                v = t(33014),
                S = t(473708);
            var m = t(440997),
                I = t(795308),
                L = t(201459),
                P = t(848422),
                Z = t(873936),
                A = t(998918),
                x = t(9430),
                N = t(531441),
                w = t(2590),
                G = t(35637),
                T = t.n(G);

            function R(e, n, t, r, i, o, u) {
                try {
                    var a = e[o](u),
                        c = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function C(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function u(e) {
                            R(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            R(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function D(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function k(e, n) {
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
                        }([o, a])
                    }
                }
            };

            function B() {
                return [{
                    setting: w.bL.ALL_MESSAGES,
                    label: S.Z.Messages.FORM_LABEL_ALL_MESSAGES
                }, {
                    setting: w.bL.ONLY_MENTIONS,
                    label: S.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                }, {
                    setting: w.bL.NO_MESSAGES,
                    label: S.Z.Messages.FORM_LABEL_NOTHING
                }]
            }

            function H(e) {
                var n, i, o = function(e) {
                        var n = function(n) {
                                L.Z.updateGuildNotificationSettings(e.id, n)
                            },
                            t = (0, u.cj)([x.Z], (function() {
                                return {
                                    suppressEveryone: x.Z.isSuppressEveryoneEnabled(e.id),
                                    suppressRoles: x.Z.isSuppressRolesEnabled(e.id),
                                    mobilePush: x.Z.isMobilePushEnabled(e.id),
                                    messageNotifications: x.Z.getMessageNotifications(e.id),
                                    notifyHighlights: x.Z.getNotifyHighlights(e.id),
                                    isGuildUnreadsEnabled: x.Z.isGuildUnreadSettingEnabled(e.id)
                                }
                            }), [e.id]),
                            i = t.suppressEveryone,
                            o = t.suppressRoles,
                            c = t.mobilePush,
                            s = t.messageNotifications,
                            l = t.notifyHighlights,
                            f = t.isGuildUnreadsEnabled,
                            d = l === w.gLR.DISABLED,
                            b = (0, P.Z)(e.id),
                            p = (0, A.RX)();
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(a.MenuGroup, {
                                children: B().map((function(e) {
                                    var t = e.setting,
                                        i = e.label;
                                    return (0, r.jsx)(a.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: i,
                                        action: function() {
                                            return n({
                                                message_notifications: t
                                            })
                                        },
                                        checked: t === s
                                    }, t)
                                }))
                            }), (0, r.jsxs)(a.MenuGroup, {
                                children: [p && (0, r.jsx)(a.MenuCheckboxItem, {
                                    id: "enable-unread-settings",
                                    label: (0, r.jsxs)(r.Fragment, {
                                        children: [S.Z.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN, (0, r.jsx)(N.IG, {
                                            text: S.Z.Messages.BETA,
                                            color: I.Z.unsafe_rawColors.BRAND_500.css,
                                            className: T().betaBadge
                                        })]
                                    }),
                                    action: function() {
                                        (0, Z.EQ)(e.id, !f)
                                    },
                                    checked: f
                                }), (0, r.jsx)(a.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: S.Z.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: function() {
                                        return n({
                                            suppress_everyone: !i
                                        })
                                    },
                                    checked: i
                                }), (0, r.jsx)(a.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: S.Z.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: function() {
                                        return n({
                                            suppress_roles: !o
                                        })
                                    },
                                    checked: o
                                }), (0, r.jsx)(a.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: S.Z.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: function() {
                                        n({
                                            notify_highlights: d ? w.gLR.ENABLED : w.gLR.DISABLED
                                        })
                                    },
                                    checked: d
                                }), b]
                            }), (0, r.jsx)(a.MenuGroup, {
                                children: (0, r.jsx)(a.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: S.Z.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: function() {
                                        return n({
                                            mobile_push: !c
                                        })
                                    },
                                    checked: c
                                })
                            })]
                        })
                    }(e),
                    c = (0, u.e7)([x.Z], (function() {
                        return x.Z.getMessageNotifications(e.id)
                    }), [e.id]),
                    s = null === (i = null === (n = B()) || void 0 === n ? void 0 : n.find((function(e) {
                        return e.setting === c
                    }))) || void 0 === i ? void 0 : i.label;
                return null != o ? (0, r.jsx)(a.MenuItem, {
                    id: "guild-notifications",
                    label: S.Z.Messages.NOTIFICATION_SETTINGS,
                    subtext: s,
                    action: function() {
                        return (0, a.openModalLazy)(C((function() {
                            var n, i;
                            return U(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(7528)]).then(t.bind(t, 207528))];
                                    case 1:
                                        n = o.sent(), i = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, k(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        D(e, n, t[n])
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
                    children: o
                }) : null
            }
            var Y = t(300272),
                F = t(177179),
                V = t(703790),
                q = t(682776);
            var X = t(486805);

            function z(e) {
                var n = function(n) {
                        V.Z.open(e.id, n)
                    },
                    t = (0, u.Wu)([h.ZP], (function() {
                        return h.ZP.getChannels(e.id).SELECTABLE
                    }), [e]),
                    i = function(e) {
                        var n = (0, u.cj)([q.Z], (function() {
                                return {
                                    canManageGuild: q.Z.can(w.Plq.MANAGE_GUILD, e),
                                    canManageRoles: q.Z.can(w.Plq.MANAGE_ROLES, e),
                                    canBanMembers: q.Z.can(w.Plq.BAN_MEMBERS, e),
                                    canManageNicknames: q.Z.can(w.Plq.MANAGE_NICKNAMES, e),
                                    canCreateEmojisAndStickers: q.Z.can(w.Plq.CREATE_GUILD_EXPRESSIONS, e),
                                    canManageEmojisAndStickers: q.Z.can(w.Plq.MANAGE_GUILD_EXPRESSIONS, e),
                                    canManageWebhooks: q.Z.can(w.Plq.MANAGE_WEBHOOKS, e),
                                    canViewAuditLog: q.Z.can(w.Plq.VIEW_AUDIT_LOG, e)
                                }
                            }), [e]),
                            t = n.canManageGuild,
                            r = n.canManageRoles,
                            i = n.canBanMembers,
                            o = n.canManageNicknames,
                            a = n.canCreateEmojisAndStickers,
                            c = n.canManageEmojisAndStickers,
                            s = n.canManageWebhooks,
                            l = n.canViewAuditLog;
                        return t || r || i || o || a || c || s || l
                    }(e);
                return __OVERLAY__ || !i ? null : (0, r.jsx)(a.MenuItem, {
                    id: "guild-settings",
                    label: S.Z.Messages.SERVER_SETTINGS,
                    action: function() {
                        return n()
                    },
                    children: (0, X.t)(e, t).map((function(t) {
                        var i = t.section,
                            o = t.label;
                        if (null == o) return null;
                        switch (i) {
                            case w.pNK.DELETE:
                                return null;
                            case w.pNK.COMMUNITY:
                                return (0, r.jsx)(a.MenuItem, {
                                    id: i,
                                    action: function() {
                                        return n(i)
                                    },
                                    label: S.Z.Messages.GUILD_SETTINGS_COMMUNITY
                                }, i);
                            case w.pNK.APP_DIRECTORY:
                                return (0, r.jsx)(a.MenuItem, {
                                    id: i,
                                    action: function() {
                                        (0, F.goToAppDirectory)({
                                            guildId: e.id,
                                            entrypoint: {
                                                name: Y.n3.GUILD_CONTEXT_MENU
                                            }
                                        })
                                    },
                                    label: o
                                }, i);
                            default:
                                return (0, r.jsx)(a.MenuItem, {
                                    id: i,
                                    action: function() {
                                        return n(i)
                                    },
                                    label: o
                                }, i)
                        }
                    }))
                })
            }
            var K = t(159431),
                W = t(753082);

            function Q(e, n, t, r, i, o, u) {
                try {
                    var a = e[o](u),
                        c = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function J(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function u(e) {
                            Q(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            Q(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function $(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function ee(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        $(e, n, t[n])
                    }))
                }
                return e
            }

            function ne(e, n) {
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
            var te = function(e, n) {
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
                            for (; u;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0,
                                    i) && (o = [2 & o[0], i.value]);
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
                        }([o, a])
                    }
                }
            };

            function re(e) {
                var n = e.guild,
                    i = e.onSelect,
                    s = e.hideSettings,
                    l = function() {
                        (0, a.openModal)((function(e) {
                            return (0, r.jsx)(y.g, ne(ee({}, e), {
                                guild: n,
                                discoverableGuildData: P
                            }))
                        }))
                    },
                    I = n.id,
                    L = h.ZP.getDefaultChannel(I),
                    P = (0, b.oe)(n),
                    Z = (0, u.e7)([E.default], (function() {
                        var e = E.default.getCurrentUser();
                        o()(null != e, "GuildContextMenu: user cannot be undefined");
                        return n.isOwner(e)
                    }), [n]),
                    A = (0, W.Z)({
                        guild: n,
                        source: w.t4x.GUILD_CONTEXT_MENU,
                        channel: L
                    }),
                    x = (0, K.Z)(I),
                    N = (0, m.Z)(n),
                    G = H(n),
                    T = z(n),
                    R = (0, M.Z)({
                        guildId: n.id,
                        userId: g.default.getId(),
                        analyticsLocation: {
                            page: w.ZY5.GUILD_CHANNEL,
                            section: w.jXE.CHAT_USERNAME,
                            object: w.qAy.CONTEXT_MENU_ITEM
                        }
                    }),
                    C = (0, O.Z)(n),
                    D = (0, d.Z)(n.id),
                    k = (0, f.Z)({
                        id: n.id,
                        label: S.Z.Messages.COPY_ID_GUILD
                    }),
                    U = function(e, n) {
                        var t = e.id,
                            i = (0, u.e7)([j.Z], (function() {
                                return j.Z.getGuildHasUnreadIgnoreMuted(t)
                            }), [t]);
                        return (0, r.jsx)(a.MenuItem, {
                            id: "mark-guild-read",
                            label: S.Z.Messages.MARK_AS_READ,
                            icon: void 0,
                            action: function() {
                                return (0, v.Z)([t], n.section)
                            },
                            disabled: !i
                        })
                    }(n, {
                        section: w.jXE.GUILD_LIST
                    }),
                    B = (0, p.Z)(n.id),
                    Y = (0, _.Z)(n);
                return n.hasFeature(w.oNc.HUB) ? (0, r.jsxs)(a.Menu, {
                    navId: "guild-context",
                    onClose: c.Zy,
                    "aria-label": S.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: i,
                    children: [(0, r.jsxs)(a.MenuGroup, {
                        children: [A, (0, r.jsx)(a.MenuItem, {
                            id: "privacy",
                            label: S.Z.Messages.HUB_PRIVACY_SETTINGS,
                            action: function() {
                                return (0, a.openModalLazy)(J((function() {
                                    var e, i;
                                    return te(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(24561)]).then(t.bind(t, 124561))];
                                            case 1:
                                                e = o.sent(), i = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(i, ne(ee({}, e), {
                                                        guild: n
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }), R]
                    }), Z ? null : (0, r.jsx)(a.MenuGroup, {
                        children: (0, r.jsx)(a.MenuItem, {
                            id: "leave-guild",
                            label: S.Z.Messages.LEAVE_HUB,
                            action: l,
                            color: "danger"
                        })
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: k
                    })]
                }) : (0, r.jsxs)(a.Menu, {
                    navId: "guild-context",
                    onClose: c.Zy,
                    "aria-label": S.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: i,
                    children: [(0, r.jsx)(a.MenuGroup, {
                        children: U
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: A
                    }), (0, r.jsxs)(a.MenuGroup, {
                        children: [N, __OVERLAY__ ? null : G, x, B]
                    }), (0, r.jsxs)(a.MenuGroup, {
                        children: [s ? null : T, __OVERLAY__ ? null : (0, r.jsx)(a.MenuItem, {
                            id: "privacy",
                            label: S.Z.Messages.PRIVACY_SETTINGS,
                            action: function() {
                                return (0, a.openModalLazy)(J((function() {
                                    var e, i;
                                    return te(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(24561)]).then(t.bind(t, 124561))];
                                            case 1:
                                                e = o.sent(), i = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(i, ne(ee({}, e), {
                                                        guild: n
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }), R]
                    }), (0, r.jsxs)(a.MenuGroup, {
                        children: [C, D]
                    }), (0, r.jsxs)(a.MenuGroup, {
                        children: [Y, !Z && (0, r.jsx)(a.MenuItem, {
                            id: "leave-guild",
                            label: S.Z.Messages.LEAVE_SERVER,
                            action: l,
                            color: "danger"
                        })]
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: k
                    })]
                })
            }

            function ie(e) {
                var n = (0, l.Z)(s.Z.CONTEXT_MENU).AnalyticsLocationProvider;
                return (0, r.jsx)(n, {
                    children: (0, r.jsx)(re, ee({}, e))
                })
            }
        },
        206789: (e, n, t) => {
            t.d(n, {
                Z: () => h
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(70418),
                u = t(682776),
                a = t(2590),
                c = t(485911),
                s = t(473708);

            function l(e, n, t, r, i, o, u) {
                try {
                    var a = e[o](u),
                        c = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function f(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function u(e) {
                            l(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            l(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function d(e, n, t) {
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
                        d(e, n, t[n])
                    }))
                }
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
            var g = function(e, n) {
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
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    },
                    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                function a(o) {
                    return function(a) {
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
                        }([o, a])
                    }
                }
            };

            function h(e) {
                var n = (0, i.e7)([u.Z], (function() {
                    return u.Z.can(a.Plq.MANAGE_CHANNELS, e)
                }));
                return __OVERLAY__ ? null : e.id === c._ ? (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(o.MenuItem, {
                        id: "create-category",
                        label: s.Z.Messages.CREATE_CATEGORY,
                        action: function() {
                            return (0, o.openModalLazy)(f((function() {
                                var e, n;
                                return g(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, Promise.all([t.e(40532), t.e(84680)]).then(t.bind(t, 631199))];
                                        case 1:
                                            e = i.sent(), n = e.default;
                                            return [2, function(e) {
                                                return (0, r.jsx)(n, b({}, e))
                                            }]
                                    }
                                }))
                            })))
                        }
                    })
                }) : n ? [(0, r.jsx)(o.MenuItem, {
                    id: "create-channel",
                    label: s.Z.Messages.CREATE_CHANNEL,
                    action: function() {
                        return (0, o.openModalLazy)(f((function() {
                            var n, i;
                            return g(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(57645)]).then(t.bind(t, 957645))];
                                    case 1:
                                        n = o.sent(), i = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, p(b({}, n), {
                                                channelType: a.d4z.GUILD_TEXT,
                                                guildId: e.id
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                }, "create-channel"), (0, r.jsx)(o.MenuItem, {
                    id: "create-category",
                    label: s.Z.Messages.CREATE_CATEGORY,
                    action: function() {
                        return (0,
                            o.openModalLazy)(f((function() {
                            var n, i;
                            return g(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(57645)]).then(t.bind(t, 957645))];
                                    case 1:
                                        n = o.sent(), i = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, p(b({}, n), {
                                                channelType: a.d4z.GUILD_CATEGORY,
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
                i = (t(667294), t(202351)),
                o = t(70418),
                u = t(77705),
                a = t(9430),
                c = t(473708);

            function s(e) {
                var n = (0, i.e7)([a.Z], (function() {
                    return a.Z.isGuildCollapsed(e)
                }), [e]);
                return (0, r.jsx)(o.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: c.Z.Messages.HIDE_MUTED_CHANNELS,
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
                i = (t(667294), t(202351)),
                o = t(70418),
                u = t(201459),
                a = t(9430),
                c = t(473708);

            function s(e) {
                var n = (0, i.e7)([a.Z], (function() {
                    return a.Z.isMuteScheduledEventsEnabled(e)
                }), [e]);
                return (0, r.jsx)(o.MenuCheckboxItem, {
                    id: "mute-events",
                    label: c.Z.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                    action: function() {
                        return t = {
                            mute_scheduled_events: !n
                        }, void u.Z.updateGuildNotificationSettings(e, t);
                        var t
                    },
                    checked: n
                })
            }
        }
    }
]);