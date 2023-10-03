"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [18682], {
        18682: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => Ze
            });
            var r = t(785893),
                i = t(667294),
                o = t(441143),
                a = t.n(o),
                u = t(202351),
                c = t(304548),
                l = t(971402),
                s = t(153686),
                f = t(19585),
                d = t(112897),
                b = t(245353),
                p = t(324239),
                h = t(897436),
                y = t(213793),
                g = t(504366),
                E = t(809210),
                m = t(664625),
                O = t(5544),
                v = t(473903),
                M = t(294184),
                j = t.n(M),
                _ = t(418705),
                S = t(896490),
                P = t(270946),
                x = t(703790),
                A = t(768834),
                w = t(179156),
                I = t(944522),
                L = t(918124),
                N = t(784426),
                Z = t(443812),
                T = t(406493),
                G = t(652591),
                R = t(2590),
                D = t(753327),
                k = t(473708),
                C = t(583127),
                U = t.n(C);

            function B(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function V(e, n, t, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function H(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            V(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            V(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Y(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function F(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Y(e, n, t[n])
                    }))
                }
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

            function q(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return B(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return B(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var K = function(e, n) {
                    var t, r, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function u(o) {
                        return function(u) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2];
                                                a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    o = n.call(e, a)
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
                            }([o, u])
                        }
                    }
                },
                X = function(e) {
                    var n, o = e.guild,
                        a = e.discoverableGuildData,
                        u = o.id,
                        l = (0, w.Hb)({
                            expressionSourceGuild: a
                        }),
                        s = l.isPremium,
                        f = l.collectEnabled,
                        d = l.hasReachedMaxPacksCollected,
                        b = (0, Z.Dt)(),
                        p = q(i.useState(!1), 2),
                        h = p[0],
                        y = p[1],
                        g = (n = H((function() {
                            var e;
                            return K(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        e = I.Z.isLurking(u);
                                        if (!h) return [3, 2];
                                        G.default.track(R.rMx.INVENTORY_PACK_ACTION_COMPLETED, {
                                            type: L.$.ADD_PACK,
                                            inventory_pack_id: u,
                                            nonce: b
                                        });
                                        return [4, (0, A.dz)({
                                            packId: u
                                        })];
                                    case 1:
                                        n.sent();
                                        n.label = 2;
                                    case 2:
                                        return [4, x.Z.leaveGuild(u)];
                                    case 3:
                                        n.sent();
                                        e ? (0, N.uL)(R.Z5c.GUILD_DISCOVERY) : (0, S.un)(_.z$.GUILD_LEAVE_FEEDBACK) || (0, c.openModalLazy)(H((function() {
                                            var e, n;
                                            return K(this, (function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return [4, t.e(6578).then(t.bind(t, 706578))];
                                                    case 1:
                                                        e = i.sent(), n = e.default;
                                                        return [2, function(e) {
                                                            return (0, r.jsx)(n, z(F({}, e), {
                                                                guildId: u,
                                                                guildName: o.name
                                                            }))
                                                        }]
                                                }
                                            }))
                                        })));
                                        return [2]
                                }
                            }))
                        })), function() {
                            return n.apply(this, arguments)
                        });
                    return (0, r.jsxs)(c.ConfirmModal, z(F({
                        className: j()(U().confirmModal, Y({}, U().widthForAddPack, f)),
                        bodyClassName: j()(U().confirmModalBody, Y({}, U().widthForAddPack, f)),
                        header: k.Z.Messages.LEAVE_SERVER_TITLE.format({
                            name: o.name
                        }),
                        confirmText: o.hasFeature(R.oNc.HUB) ? k.Z.Messages.LEAVE_HUB : k.Z.Messages.LEAVE_SERVER,
                        cancelText: k.Z.Messages.CANCEL,
                        onConfirm: g
                    }, e), {
                        children: [(0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            children: o.hasFeature(R.oNc.HUB) ? k.Z.Messages.LEAVE_HUB_BODY.format({
                                name: o.name
                            }) : k.Z.Messages.LEAVE_SERVER_BODY.format({
                                name: o.name
                            })
                        }), f && (0, r.jsxs)("div", {
                            className: U().addPackSection,
                            children: [(0, r.jsxs)(c.FormSwitch, {
                                className: U().addPackHeader,
                                value: h,
                                disabled: d,
                                onChange: function(e) {
                                    y(e)
                                },
                                hideBorder: !0,
                                children: [k.Z.Messages.INVENTORY_ADD_PACK, " ", (0, r.jsx)(P.Z, {
                                    className: U().betaTag,
                                    color: "white"
                                })]
                            }), (0, r.jsxs)(c.Text, {
                                variant: "text-sm/medium",
                                className: U().inventoryLeaveServerDescription,
                                children: [(0, r.jsx)(T.Z, {
                                    className: U().nitroWheel
                                }), k.Z.Messages.INVENTORY_LEAVE_SERVER_DESCRIPTION]
                            }), d && !s && (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                className: U().maxPacksNoticeText,
                                children: k.Z.Messages.INVENTORY_ADD_NITRO_DESCRIPTION_WITH_PLURAL.format({
                                    maxFreePacks: D.Lv,
                                    maxPacks: D.CJ
                                })
                            })]
                        })]
                    }))
                },
                W = t(434651),
                $ = t(206789),
                J = t(889231),
                Q = t(813869),
                ee = t(33014);
            var ne = t(440997),
                te = t(795308),
                re = t(201459),
                ie = t(848422),
                oe = t(873936),
                ae = t(998918),
                ue = t(9430),
                ce = t(531441),
                le = t(35637),
                se = t.n(le);

            function fe(e, n, t, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function de(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            fe(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            fe(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function be(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function pe(e, n) {
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
            var he = function(e, n) {
                var t, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
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
                        }([o, u])
                    }
                }
            };

            function ye() {
                return [{
                    setting: R.bL.ALL_MESSAGES,
                    label: k.Z.Messages.FORM_LABEL_ALL_MESSAGES
                }, {
                    setting: R.bL.ONLY_MENTIONS,
                    label: k.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                }, {
                    setting: R.bL.NO_MESSAGES,
                    label: k.Z.Messages.FORM_LABEL_NOTHING
                }]
            }

            function ge(e) {
                var n, i, o = function(e) {
                        var n = function(n) {
                                re.Z.updateGuildNotificationSettings(e.id, n)
                            },
                            t = (0, u.cj)([ue.Z], (function() {
                                return {
                                    suppressEveryone: ue.Z.isSuppressEveryoneEnabled(e.id),
                                    suppressRoles: ue.Z.isSuppressRolesEnabled(e.id),
                                    mobilePush: ue.Z.isMobilePushEnabled(e.id),
                                    messageNotifications: ue.Z.getMessageNotifications(e.id),
                                    notifyHighlights: ue.Z.getNotifyHighlights(e.id),
                                    isGuildUnreadsEnabled: ue.Z.isGuildUnreadSettingEnabled(e.id)
                                }
                            }), [e.id]),
                            i = t.suppressEveryone,
                            o = t.suppressRoles,
                            a = t.mobilePush,
                            l = t.messageNotifications,
                            s = t.notifyHighlights,
                            f = t.isGuildUnreadsEnabled,
                            d = s === R.gLR.DISABLED,
                            b = (0, ie.Z)(e.id),
                            p = (0, ae.RX)();
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(c.MenuGroup, {
                                children: ye().map((function(e) {
                                    var t = e.setting,
                                        i = e.label;
                                    return (0, r.jsx)(c.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: i,
                                        action: function() {
                                            return n({
                                                message_notifications: t
                                            })
                                        },
                                        checked: t === l
                                    }, t)
                                }))
                            }), (0, r.jsxs)(c.MenuGroup, {
                                children: [p && (0, r.jsx)(c.MenuCheckboxItem, {
                                    id: "enable-unread-settings",
                                    label: (0, r.jsxs)(r.Fragment, {
                                        children: [k.Z.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN, (0, r.jsx)(ce.IG, {
                                            text: k.Z.Messages.BETA,
                                            color: te.Z.unsafe_rawColors.BRAND_500.css,
                                            className: se().betaBadge
                                        })]
                                    }),
                                    action: function() {
                                        (0, oe.EQ)(e.id, !f)
                                    },
                                    checked: f
                                }), (0, r.jsx)(c.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: k.Z.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: function() {
                                        return n({
                                            suppress_everyone: !i
                                        })
                                    },
                                    checked: i
                                }), (0, r.jsx)(c.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: k.Z.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: function() {
                                        return n({
                                            suppress_roles: !o
                                        })
                                    },
                                    checked: o
                                }), (0, r.jsx)(c.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: k.Z.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: function() {
                                        n({
                                            notify_highlights: d ? R.gLR.ENABLED : R.gLR.DISABLED
                                        })
                                    },
                                    checked: d
                                }), b]
                            }), (0, r.jsx)(c.MenuGroup, {
                                children: (0, r.jsx)(c.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: k.Z.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
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
                    a = (0, u.e7)([ue.Z], (function() {
                        return ue.Z.getMessageNotifications(e.id)
                    }), [e.id]),
                    l = null === (i = null === (n = ye()) || void 0 === n ? void 0 : n.find((function(e) {
                        return e.setting === a
                    }))) || void 0 === i ? void 0 : i.label;
                return null != o ? (0, r.jsx)(c.MenuItem, {
                    id: "guild-notifications",
                    label: k.Z.Messages.NOTIFICATION_SETTINGS,
                    subtext: l,
                    action: function() {
                        return (0, c.openModalLazy)(de((function() {
                            var n, i;
                            return he(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(7528)]).then(t.bind(t, 207528))];
                                    case 1:
                                        n = o.sent(), i = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, pe(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        be(e, n, t[n])
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
            var Ee = t(177179),
                me = t(682776);
            var Oe = t(854859);

            function ve(e) {
                var n = function(n) {
                        x.Z.open(e.id, n)
                    },
                    t = (0, u.Wu)([O.ZP], (function() {
                        return O.ZP.getChannels(e.id).SELECTABLE
                    }), [e]),
                    i = function(e) {
                        var n = (0, u.cj)([me.Z], (function() {
                                return {
                                    canManageGuild: me.Z.can(R.Plq.MANAGE_GUILD, e),
                                    canManageRoles: me.Z.can(R.Plq.MANAGE_ROLES, e),
                                    canBanMembers: me.Z.can(R.Plq.BAN_MEMBERS, e),
                                    canManageNicknames: me.Z.can(R.Plq.MANAGE_NICKNAMES, e),
                                    canCreateEmojisAndStickers: me.Z.can(R.Plq.CREATE_GUILD_EXPRESSIONS, e),
                                    canManageEmojisAndStickers: me.Z.can(R.Plq.MANAGE_GUILD_EXPRESSIONS, e),
                                    canManageWebhooks: me.Z.can(R.Plq.MANAGE_WEBHOOKS, e),
                                    canViewAuditLog: me.Z.can(R.Plq.VIEW_AUDIT_LOG, e)
                                }
                            }), [e]),
                            t = n.canManageGuild,
                            r = n.canManageRoles,
                            i = n.canBanMembers,
                            o = n.canManageNicknames,
                            a = n.canCreateEmojisAndStickers,
                            c = n.canManageEmojisAndStickers,
                            l = n.canManageWebhooks,
                            s = n.canViewAuditLog;
                        return t || r || i || o || a || c || l || s
                    }(e);
                return __OVERLAY__ || !i ? null : (0, r.jsx)(c.MenuItem, {
                    id: "guild-settings",
                    label: k.Z.Messages.SERVER_SETTINGS,
                    action: function() {
                        return n()
                    },
                    children: (0, Oe.t)(e, t).map((function(t) {
                        var i = t.section,
                            o = t.label;
                        if (null == o) return null;
                        switch (i) {
                            case R.pNK.DELETE:
                                return null;
                            case R.pNK.COMMUNITY:
                                return (0, r.jsx)(c.MenuItem, {
                                    id: i,
                                    action: function() {
                                        return n(i)
                                    },
                                    label: k.Z.Messages.GUILD_SETTINGS_COMMUNITY
                                }, i);
                            case R.pNK.APP_DIRECTORY:
                                return (0, r.jsx)(c.MenuItem, {
                                    id: i,
                                    action: function() {
                                        (0, Ee.goToAppDirectory)({
                                            guildId: e.id,
                                            entrypoint: "Guild Settings"
                                        })
                                    },
                                    label: o
                                }, i);
                            default:
                                return (0, r.jsx)(c.MenuItem, {
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
            var Me = t(159431),
                je = t(753082);

            function _e(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Se(e, n, t, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function Pe(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            Se(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            Se(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function xe(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Ae(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        xe(e, n, t[n])
                    }))
                }
                return e
            }

            function we(e, n) {
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

            function Ie(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return _e(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return _e(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Le = function(e, n) {
                var t, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
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
                        }([o, u])
                    }
                }
            };

            function Ne(e) {
                var n = e.guild,
                    o = e.onSelect,
                    s = e.hideSettings,
                    f = n.id,
                    M = O.ZP.getDefaultChannel(f),
                    j = (0, h.Xx)({
                        expressionSourceGuild: g.Z.createFromGuildRecord(n),
                        autoTrackExposure: !1
                    }),
                    _ = (0, h.JY)({
                        guildId: n.id,
                        autoTrackExposure: !1
                    }),
                    S = j.collectEnabled && _.allowCollection,
                    P = (0, u.e7)([b.Z], (function() {
                        var e = b.Z.getGuildEmoji(f).filter((function(e) {
                            return 0 === e.roles.length && e.available && !e.managed
                        }));
                        return 0 === e.length ? null : e[0].id
                    })),
                    x = Ie(i.useState(null), 2),
                    A = x[0],
                    w = x[1];
                i.useEffect((function() {
                    var e, n = (e = Pe((function(e) {
                        return Le(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, g.Z.getGuildFromEmojiId(e)];
                                case 1:
                                    w.apply(void 0, [n.sent()]);
                                    return [2]
                            }
                        }))
                    })), function(n) {
                        return e.apply(this, arguments)
                    });
                    S && null != P && n(P)
                }), []);
                var I = (0, u.e7)([v.default], (function() {
                        var e = v.default.getCurrentUser();
                        a()(null != e, "GuildContextMenu: user cannot be undefined");
                        return n.isOwner(e)
                    }), [n]),
                    L = (0, je.Z)({
                        guild: n,
                        source: R.t4x.GUILD_CONTEXT_MENU,
                        channel: M
                    }),
                    N = (0, Me.Z)(f),
                    Z = (0, ne.Z)(n),
                    T = ge(n),
                    G = ve(n),
                    D = (0, W.Z)({
                        guildId: n.id,
                        userId: m.default.getId(),
                        analyticsLocation: {
                            page: R.ZY5.GUILD_CHANNEL,
                            section: R.jXE.CHAT_USERNAME,
                            object: R.qAy.CONTEXT_MENU_ITEM
                        }
                    }),
                    C = (0, $.Z)(n),
                    U = (0, p.Z)(n.id),
                    B = (0, d.Z)({
                        id: n.id,
                        label: k.Z.Messages.COPY_ID_GUILD
                    }),
                    V = function(e, n) {
                        var t = e.id,
                            i = (0, u.e7)([Q.Z], (function() {
                                return Q.Z.getGuildHasUnreadIgnoreMuted(t)
                            }), [t]);
                        return (0, r.jsx)(c.MenuItem, {
                            id: "mark-guild-read",
                            label: k.Z.Messages.MARK_AS_READ,
                            icon: void 0,
                            action: function() {
                                return (0, ee.Z)([t], n.section)
                            },
                            disabled: !i
                        })
                    }(n, {
                        section: R.jXE.GUILD_LIST
                    }),
                    H = (0, E.Z)(n.id),
                    Y = (0, J.Z)(n);

                function F() {
                    return z.apply(this, arguments)
                }

                function z() {
                    return (z = Pe((function() {
                        return Le(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, (0, y.hu)("guild leave modal")];
                                case 1:
                                    e.sent();
                                    (0, c.openModal)((function(e) {
                                        return (0, r.jsx)(X, we(Ae({}, e), {
                                            guild: n,
                                            discoverableGuildData: A
                                        }))
                                    }));
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                return n.hasFeature(R.oNc.HUB) ? (0, r.jsxs)(c.Menu, {
                    navId: "guild-context",
                    onClose: l.Zy,
                    "aria-label": k.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: o,
                    children: [(0, r.jsxs)(c.MenuGroup, {
                        children: [L, (0, r.jsx)(c.MenuItem, {
                            id: "privacy",
                            label: k.Z.Messages.HUB_PRIVACY_SETTINGS,
                            action: function() {
                                return (0, c.openModalLazy)(Pe((function() {
                                    var e, i;
                                    return Le(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(24561)]).then(t.bind(t, 124561))];
                                            case 1:
                                                e = o.sent(), i = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(i, we(Ae({}, e), {
                                                        guild: n
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }), D]
                    }), I ? null : (0, r.jsx)(c.MenuGroup, {
                        children: (0,
                            r.jsx)(c.MenuItem, {
                            id: "leave-guild",
                            label: k.Z.Messages.LEAVE_HUB,
                            action: F,
                            color: "danger"
                        })
                    }), (0, r.jsx)(c.MenuGroup, {
                        children: B
                    })]
                }) : (0, r.jsxs)(c.Menu, {
                    navId: "guild-context",
                    onClose: l.Zy,
                    "aria-label": k.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: o,
                    children: [(0, r.jsx)(c.MenuGroup, {
                        children: V
                    }), (0, r.jsx)(c.MenuGroup, {
                        children: L
                    }), (0, r.jsxs)(c.MenuGroup, {
                        children: [Z, __OVERLAY__ ? null : T, N, H]
                    }), (0, r.jsxs)(c.MenuGroup, {
                        children: [s ? null : G, __OVERLAY__ ? null : (0, r.jsx)(c.MenuItem, {
                            id: "privacy",
                            label: k.Z.Messages.PRIVACY_SETTINGS,
                            action: function() {
                                return (0, c.openModalLazy)(Pe((function() {
                                    var e, i;
                                    return Le(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(24561)]).then(t.bind(t, 124561))];
                                            case 1:
                                                e = o.sent(), i = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(i, we(Ae({}, e), {
                                                        guild: n
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }), D]
                    }), (0, r.jsxs)(c.MenuGroup, {
                        children: [C, U]
                    }), (0, r.jsxs)(c.MenuGroup, {
                        children: [Y, !I && (0, r.jsx)(c.MenuItem, {
                            id: "leave-guild",
                            label: k.Z.Messages.LEAVE_SERVER,
                            action: F,
                            color: "danger"
                        })]
                    }), (0, r.jsx)(c.MenuGroup, {
                        children: B
                    })]
                })
            }

            function Ze(e) {
                var n = (0, f.Z)(s.Z.CONTEXT_MENU).AnalyticsLocationProvider;
                return (0, r.jsx)(n, {
                    children: (0, r.jsx)(Ne, Ae({}, e))
                })
            }
        },
        206789: (e, n, t) => {
            t.d(n, {
                Z: () => y
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(304548),
                a = t(682776),
                u = t(2590),
                c = t(485911),
                l = t(473708);

            function s(e, n, t, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function f(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            s(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            s(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
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
            var h = function(e, n) {
                var t, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                        0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
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
                        }([o, u])
                    }
                }
            };

            function y(e) {
                var n = (0, i.e7)([a.Z], (function() {
                    return a.Z.can(u.Plq.MANAGE_CHANNELS, e)
                }));
                return __OVERLAY__ ? null : e.id === c._ ? (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(o.MenuItem, {
                        id: "create-category",
                        label: l.Z.Messages.CREATE_CATEGORY,
                        action: function() {
                            return (0, o.openModalLazy)(f((function() {
                                var e, n;
                                return h(this, (function(i) {
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
                    label: l.Z.Messages.CREATE_CHANNEL,
                    action: function() {
                        return (0, o.openModalLazy)(f((function() {
                            var n, i;
                            return h(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(57645)]).then(t.bind(t, 957645))];
                                    case 1:
                                        n = o.sent(), i = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, p(b({}, n), {
                                                channelType: u.d4z.GUILD_TEXT,
                                                guildId: e.id
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                }, "create-channel"), (0, r.jsx)(o.MenuItem, {
                    id: "create-category",
                    label: l.Z.Messages.CREATE_CATEGORY,
                    action: function() {
                        return (0, o.openModalLazy)(f((function() {
                            var n, i;
                            return h(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(57645)]).then(t.bind(t, 957645))];
                                    case 1:
                                        n = o.sent(), i = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, p(b({}, n), {
                                                channelType: u.d4z.GUILD_CATEGORY,
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
                Z: () => l
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(304548),
                a = t(77705),
                u = t(9430),
                c = t(473708);

            function l(e) {
                var n = (0, i.e7)([u.Z], (function() {
                    return u.Z.isGuildCollapsed(e)
                }), [e]);
                return (0, r.jsx)(o.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: c.Z.Messages.HIDE_MUTED_CHANNELS,
                    action: function() {
                        return a.Z.toggleCollapseGuild(e)
                    },
                    checked: n
                })
            }
        },
        848422: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(304548),
                a = t(201459),
                u = t(9430),
                c = t(473708);

            function l(e) {
                var n = (0, i.e7)([u.Z], (function() {
                    return u.Z.isMuteScheduledEventsEnabled(e)
                }), [e]);
                return (0, r.jsx)(o.MenuCheckboxItem, {
                    id: "mute-events",
                    label: c.Z.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                    action: function() {
                        return t = {
                            mute_scheduled_events: !n
                        }, void a.Z.updateGuildNotificationSettings(e, t);
                        var t
                    },
                    checked: n
                })
            }
        }
    }
]);