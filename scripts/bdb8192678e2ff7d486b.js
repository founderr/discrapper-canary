"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [18682], {
        18682: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => Te
            });
            var r = t(785893),
                i = t(667294),
                o = t(441143),
                a = t.n(o),
                u = t(202351),
                c = t(304548),
                s = t(971402),
                l = t(153686),
                f = t(19585),
                d = t(112897),
                b = t(324239),
                p = t(213793),
                h = t(809210),
                g = t(664625),
                y = t(5544),
                E = t(473903),
                O = t(294184),
                m = t.n(O),
                M = t(318715),
                v = t(418705),
                _ = t(77413),
                j = t(896490),
                S = t(245353),
                P = t(270946),
                x = t(703790),
                I = t(897436),
                A = t(768834),
                w = t(690296),
                Z = t(504366),
                L = t(944522),
                N = t(918124),
                T = t(784426),
                G = t(443812),
                R = t(406493),
                D = t(652591),
                C = t(694329),
                k = t(2590),
                U = t(753327),
                B = t(473708),
                V = t(583127),
                H = t.n(V);

            function Y(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function F(e, n, t, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function z(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            F(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            F(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function q(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function K(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        q(e, n, t[n])
                    }))
                }
                return e
            }

            function X(e, n) {
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

            function W(e, n) {
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
                    if ("string" == typeof e) return Y(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Y(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var $ = function(e, n) {
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
                        },
                        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
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
                J = function(e) {
                    var n, o = e.guild,
                        a = o.id,
                        u = (0, I.Xx)({
                            expressionSourceGuild: Z.Z.createFromGuildRecord(o)
                        }).collectEnabled,
                        s = (0, M.ZP)([E.default], (function() {
                            return (0, C.I5)(E.default.getCurrentUser())
                        })),
                        l = (0, M.Wu)([S.Z], (function() {
                            return S.Z.getGuildEmoji(o.id)
                        })),
                        f = (0, M.ZP)([w.Z], (function() {
                            return w.Z.getSortedPackIds().length < (0, p.MP)(s)
                        })),
                        d = (0, G.Dt)(),
                        b = W(i.useState(!1), 2),
                        h = b[0],
                        g = b[1],
                        y = (n = z((function() {
                            var e;
                            return $(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        e = L.Z.isLurking(a);
                                        if (!h) return [3, 2];
                                        D.default.track(k.rMx.INVENTORY_PACK_ACTION_COMPLETED, {
                                            type: N.$.ADD_PACK,
                                            inventory_pack_id: a,
                                            nonce: d
                                        });
                                        return [4, (0, A.dz)({
                                            packId: a
                                        })];
                                    case 1:
                                        n.sent();
                                        n.label = 2;
                                    case 2:
                                        return [4, x.Z.leaveGuild(a)];
                                    case 3:
                                        n.sent();
                                        e ? (0, T.uL)(k.Z5c.GUILD_DISCOVERY) : (0, j.un)(v.z$.GUILD_LEAVE_FEEDBACK) || (0, c.openModalLazy)(z((function() {
                                            var e, n;
                                            return $(this, (function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return [4, t.e(6578).then(t.bind(t, 706578))];
                                                    case 1:
                                                        e = i.sent(), n = e.default;
                                                        return [2, function(e) {
                                                            return (0, r.jsx)(n, X(K({}, e), {
                                                                guildId: a,
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
                    return (0, r.jsxs)(c.ConfirmModal, X(K({
                        className: m()(H().confirmModal, q({}, H().widthForAddPack, u)),
                        bodyClassName: m()(H().confirmModalBody, q({}, H().widthForAddPack, u)),
                        header: B.Z.Messages.LEAVE_SERVER_TITLE.format({
                            name: o.name
                        }),
                        confirmText: o.hasFeature(k.oNc.HUB) ? B.Z.Messages.LEAVE_HUB : B.Z.Messages.LEAVE_SERVER,
                        cancelText: B.Z.Messages.CANCEL,
                        onConfirm: y
                    }, e), {
                        children: [(0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            children: o.hasFeature(k.oNc.HUB) ? B.Z.Messages.LEAVE_HUB_BODY.format({
                                name: o.name
                            }) : B.Z.Messages.LEAVE_SERVER_BODY.format({
                                name: o.name
                            })
                        }), u && (0, r.jsxs)("div", {
                            className: H().addPackSection,
                            children: [(0, r.jsxs)(c.FormSwitch, {
                                className: H().addPackHeader,
                                value: h,
                                disabled: !f,
                                onChange: function(e) {
                                    g(e)
                                },
                                hideBorder: !0,
                                children: [B.Z.Messages.INVENTORY_ADD_PACK, " ", (0, r.jsx)(P.Z, {
                                    className: H().betaTag,
                                    color: "white"
                                })]
                            }), (0, r.jsxs)(c.Text, {
                                variant: "text-sm/medium",
                                className: H().inventoryLeaveServerDescription,
                                children: [(0, r.jsx)(R.Z, {
                                    className: H().nitroWheel
                                }), B.Z.Messages.INVENTORY_LEAVE_SERVER_DESCRIPTION]
                            }), f && l.map((function(e) {
                                return (0, r.jsx)(_.Z, {
                                    size: "jumbo"
                                }, e.id)
                            })), !f && !s && (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                className: H().maxPacksNoticeText,
                                children: B.Z.Messages.INVENTORY_ADD_NITRO_DESCRIPTION_WITH_PLURAL.format({
                                    maxFreePacks: U.Lv,
                                    maxPacks: U.CJ
                                })
                            })]
                        })]
                    }))
                },
                Q = t(434651),
                ee = t(206789),
                ne = t(889231),
                te = t(813869),
                re = t(33014);
            var ie = t(440997),
                oe = t(795308),
                ae = t(201459),
                ue = t(848422),
                ce = t(873936),
                se = t(998918),
                le = t(9430),
                fe = t(531441),
                de = t(35637),
                be = t.n(de);

            function pe(e, n, t, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function he(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            pe(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            pe(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function ge(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function ye(e, n) {
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
            var Ee = function(e, n) {
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

            function Oe() {
                return [{
                    setting: k.bL.ALL_MESSAGES,
                    label: B.Z.Messages.FORM_LABEL_ALL_MESSAGES
                }, {
                    setting: k.bL.ONLY_MENTIONS,
                    label: B.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                }, {
                    setting: k.bL.NO_MESSAGES,
                    label: B.Z.Messages.FORM_LABEL_NOTHING
                }]
            }

            function me(e) {
                var n, i, o = function(e) {
                        var n = function(n) {
                                ae.Z.updateGuildNotificationSettings(e.id, n)
                            },
                            t = (0, u.cj)([le.Z], (function() {
                                return {
                                    suppressEveryone: le.Z.isSuppressEveryoneEnabled(e.id),
                                    suppressRoles: le.Z.isSuppressRolesEnabled(e.id),
                                    mobilePush: le.Z.isMobilePushEnabled(e.id),
                                    messageNotifications: le.Z.getMessageNotifications(e.id),
                                    notifyHighlights: le.Z.getNotifyHighlights(e.id),
                                    isGuildUnreadsEnabled: le.Z.isGuildUnreadSettingEnabled(e.id)
                                }
                            }), [e.id]),
                            i = t.suppressEveryone,
                            o = t.suppressRoles,
                            a = t.mobilePush,
                            s = t.messageNotifications,
                            l = t.notifyHighlights,
                            f = t.isGuildUnreadsEnabled,
                            d = l === k.gLR.DISABLED,
                            b = (0, ue.Z)(e.id),
                            p = (0, se.RX)();
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(c.MenuGroup, {
                                children: Oe().map((function(e) {
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
                                        checked: t === s
                                    }, t)
                                }))
                            }), (0, r.jsxs)(c.MenuGroup, {
                                children: [p && (0, r.jsx)(c.MenuCheckboxItem, {
                                    id: "enable-unread-settings",
                                    label: (0, r.jsxs)(r.Fragment, {
                                        children: [B.Z.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN, (0, r.jsx)(fe.IG, {
                                            text: B.Z.Messages.BETA,
                                            color: oe.Z.unsafe_rawColors.BRAND_500.css,
                                            className: be().betaBadge
                                        })]
                                    }),
                                    action: function() {
                                        (0,
                                            ce.EQ)(e.id, !f)
                                    },
                                    checked: f
                                }), (0, r.jsx)(c.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: B.Z.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: function() {
                                        return n({
                                            suppress_everyone: !i
                                        })
                                    },
                                    checked: i
                                }), (0, r.jsx)(c.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: B.Z.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: function() {
                                        return n({
                                            suppress_roles: !o
                                        })
                                    },
                                    checked: o
                                }), (0, r.jsx)(c.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: B.Z.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: function() {
                                        n({
                                            notify_highlights: d ? k.gLR.ENABLED : k.gLR.DISABLED
                                        })
                                    },
                                    checked: d
                                }), b]
                            }), (0, r.jsx)(c.MenuGroup, {
                                children: (0, r.jsx)(c.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: B.Z.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
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
                    a = (0, u.e7)([le.Z], (function() {
                        return le.Z.getMessageNotifications(e.id)
                    }), [e.id]),
                    s = null === (i = null === (n = Oe()) || void 0 === n ? void 0 : n.find((function(e) {
                        return e.setting === a
                    }))) || void 0 === i ? void 0 : i.label;
                return null != o ? (0, r.jsx)(c.MenuItem, {
                    id: "guild-notifications",
                    label: B.Z.Messages.NOTIFICATION_SETTINGS,
                    subtext: s,
                    action: function() {
                        return (0, c.openModalLazy)(he((function() {
                            var n, i;
                            return Ee(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(7528)]).then(t.bind(t, 207528))];
                                    case 1:
                                        n = o.sent(), i = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, ye(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        ge(e, n, t[n])
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
            var Me = t(177179),
                ve = t(682776);
            var _e = t(854859);

            function je(e) {
                var n = function(n) {
                        x.Z.open(e.id, n)
                    },
                    t = (0, u.Wu)([y.ZP], (function() {
                        return y.ZP.getChannels(e.id).SELECTABLE
                    }), [e]),
                    i = function(e) {
                        var n = (0, u.cj)([ve.Z], (function() {
                                return {
                                    canManageGuild: ve.Z.can(k.Plq.MANAGE_GUILD, e),
                                    canManageRoles: ve.Z.can(k.Plq.MANAGE_ROLES, e),
                                    canBanMembers: ve.Z.can(k.Plq.BAN_MEMBERS, e),
                                    canManageNicknames: ve.Z.can(k.Plq.MANAGE_NICKNAMES, e),
                                    canCreateEmojisAndStickers: ve.Z.can(k.Plq.CREATE_GUILD_EXPRESSIONS, e),
                                    canManageEmojisAndStickers: ve.Z.can(k.Plq.MANAGE_GUILD_EXPRESSIONS, e),
                                    canManageWebhooks: ve.Z.can(k.Plq.MANAGE_WEBHOOKS, e),
                                    canViewAuditLog: ve.Z.can(k.Plq.VIEW_AUDIT_LOG, e)
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
                return __OVERLAY__ || !i ? null : (0, r.jsx)(c.MenuItem, {
                    id: "guild-settings",
                    label: B.Z.Messages.SERVER_SETTINGS,
                    action: function() {
                        return n()
                    },
                    children: (0, _e.t)(e, t).map((function(t) {
                        var i = t.section,
                            o = t.label;
                        if (null == o) return null;
                        switch (i) {
                            case k.pNK.DELETE:
                                return null;
                            case k.pNK.COMMUNITY:
                                return (0, r.jsx)(c.MenuItem, {
                                    id: i,
                                    action: function() {
                                        return n(i)
                                    },
                                    label: B.Z.Messages.GUILD_SETTINGS_COMMUNITY
                                }, i);
                            case k.pNK.APP_DIRECTORY:
                                return (0, r.jsx)(c.MenuItem, {
                                    id: i,
                                    action: function() {
                                        (0, Me.goToAppDirectory)({
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
            var Se = t(159431),
                Pe = t(753082);

            function xe(e, n, t, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(c) : Promise.resolve(c).then(r, i)
            }

            function Ie(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            xe(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            xe(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Ae(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function we(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Ae(e, n, t[n])
                    }))
                }
                return e
            }

            function Ze(e, n) {
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

            function Ne(e) {
                var n = e.guild,
                    i = e.onSelect,
                    o = e.hideSettings,
                    l = n.id,
                    f = y.ZP.getDefaultChannel(l),
                    O = (0, u.e7)([E.default], (function() {
                        var e = E.default.getCurrentUser();
                        a()(null != e, "GuildContextMenu: user cannot be undefined");
                        return n.isOwner(e)
                    }), [n]),
                    m = (0, Pe.Z)({
                        guild: n,
                        source: k.t4x.GUILD_CONTEXT_MENU,
                        channel: f
                    }),
                    M = (0, Se.Z)(l),
                    v = (0,
                        ie.Z)(n),
                    _ = me(n),
                    j = je(n),
                    S = (0, Q.Z)({
                        guildId: n.id,
                        userId: g.default.getId(),
                        analyticsLocation: {
                            page: k.ZY5.GUILD_CHANNEL,
                            section: k.jXE.CHAT_USERNAME,
                            object: k.qAy.CONTEXT_MENU_ITEM
                        }
                    }),
                    P = (0, ee.Z)(n),
                    x = (0, b.Z)(n.id),
                    I = (0, d.Z)({
                        id: n.id,
                        label: B.Z.Messages.COPY_ID_GUILD
                    }),
                    A = function(e, n) {
                        var t = e.id,
                            i = (0, u.e7)([te.Z], (function() {
                                return te.Z.getGuildHasUnreadIgnoreMuted(t)
                            }), [t]);
                        return (0, r.jsx)(c.MenuItem, {
                            id: "mark-guild-read",
                            label: B.Z.Messages.MARK_AS_READ,
                            icon: void 0,
                            action: function() {
                                return (0, re.Z)([t], n.section)
                            },
                            disabled: !i
                        })
                    }(n, {
                        section: k.jXE.GUILD_LIST
                    }),
                    w = (0, h.Z)(n.id),
                    Z = (0, ne.Z)(n);

                function L() {
                    return N.apply(this, arguments)
                }

                function N() {
                    return (N = Ie((function() {
                        return Le(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, (0, p.hu)("guild leave modal")];
                                case 1:
                                    e.sent();
                                    (0, c.openModal)((function(e) {
                                        return (0, r.jsx)(J, Ze(we({}, e), {
                                            guild: n
                                        }))
                                    }));
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                return n.hasFeature(k.oNc.HUB) ? (0, r.jsxs)(c.Menu, {
                    navId: "guild-context",
                    onClose: s.Zy,
                    "aria-label": B.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: i,
                    children: [(0, r.jsxs)(c.MenuGroup, {
                        children: [m, (0, r.jsx)(c.MenuItem, {
                            id: "privacy",
                            label: B.Z.Messages.HUB_PRIVACY_SETTINGS,
                            action: function() {
                                return (0, c.openModalLazy)(Ie((function() {
                                    var e, i;
                                    return Le(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(24561)]).then(t.bind(t, 124561))];
                                            case 1:
                                                e = o.sent(), i = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(i, Ze(we({}, e), {
                                                        guild: n
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }), S]
                    }), O ? null : (0, r.jsx)(c.MenuGroup, {
                        children: (0, r.jsx)(c.MenuItem, {
                            id: "leave-guild",
                            label: B.Z.Messages.LEAVE_HUB,
                            action: L,
                            color: "danger"
                        })
                    }), (0, r.jsx)(c.MenuGroup, {
                        children: I
                    })]
                }) : (0, r.jsxs)(c.Menu, {
                    navId: "guild-context",
                    onClose: s.Zy,
                    "aria-label": B.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: i,
                    children: [(0, r.jsx)(c.MenuGroup, {
                        children: A
                    }), (0, r.jsx)(c.MenuGroup, {
                        children: m
                    }), (0, r.jsxs)(c.MenuGroup, {
                        children: [v, __OVERLAY__ ? null : _, M, w]
                    }), (0, r.jsxs)(c.MenuGroup, {
                        children: [o ? null : j, __OVERLAY__ ? null : (0, r.jsx)(c.MenuItem, {
                            id: "privacy",
                            label: B.Z.Messages.PRIVACY_SETTINGS,
                            action: function() {
                                return (0, c.openModalLazy)(Ie((function() {
                                    var e, i;
                                    return Le(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(24561)]).then(t.bind(t, 124561))];
                                            case 1:
                                                e = o.sent(), i = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(i, Ze(we({}, e), {
                                                        guild: n
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }), S]
                    }), (0, r.jsxs)(c.MenuGroup, {
                        children: [P, x]
                    }), (0, r.jsxs)(c.MenuGroup, {
                        children: [Z, !O && (0, r.jsx)(c.MenuItem, {
                            id: "leave-guild",
                            label: B.Z.Messages.LEAVE_SERVER,
                            action: L,
                            color: "danger"
                        })]
                    }), (0, r.jsx)(c.MenuGroup, {
                        children: I
                    })]
                })
            }

            function Te(e) {
                var n = (0, f.Z)(l.Z.CONTEXT_MENU).AnalyticsLocationProvider;
                return (0, r.jsx)(n, {
                    children: (0, r.jsx)(Ne, we({}, e))
                })
            }
        },
        206789: (e, n, t) => {
            t.d(n, {
                Z: () => g
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(304548),
                a = t(682776),
                u = t(2590),
                c = t(485911),
                s = t(473708);

            function l(e, n, t, r, i, o, a) {
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
                            l(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            l(o, r, i, a, u, "throw", e)
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

            function g(e) {
                var n = (0, i.e7)([a.Z], (function() {
                    return a.Z.can(u.Plq.MANAGE_CHANNELS, e)
                }));
                return __OVERLAY__ ? null : e.id === c._ ? (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(o.MenuItem, {
                        id: "create-category",
                        label: s.Z.Messages.CREATE_CATEGORY,
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
                    label: s.Z.Messages.CREATE_CHANNEL,
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
                                            return (0,
                                                r.jsx)(i, p(b({}, n), {
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
                    label: s.Z.Messages.CREATE_CATEGORY,
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
                Z: () => s
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(304548),
                a = t(77705),
                u = t(9430),
                c = t(473708);

            function s(e) {
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
                Z: () => s
            });
            var r = t(785893),
                i = (t(667294),
                    t(202351)),
                o = t(304548),
                a = t(201459),
                u = t(9430),
                c = t(473708);

            function s(e) {
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