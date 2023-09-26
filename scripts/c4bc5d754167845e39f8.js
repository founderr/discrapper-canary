"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [81640], {
        383950: (e, n, t) => {
            t.d(n, {
                N8: () => _,
                BT: () => A,
                MR: () => f,
                WR: () => I
            });
            var r = t(667294),
                o = t(202351),
                l = t(489684),
                a = t(682776),
                i = t(980813),
                u = t(743219),
                d = t(922763),
                s = t(46396),
                c = t(2590);

            function _(e) {
                var n, t = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
                    l = u.r.useExperiment({
                        guildId: t,
                        location: "4467c7_1"
                    }, {
                        autoTrackExposure: !1
                    }).enableRaidReporting,
                    i = (0, o.e7)([a.Z], (function() {
                        return function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z;
                            return n.can(c.Plq.BAN_MEMBERS, e) || n.can(c.Plq.KICK_MEMBERS, e) || n.can(c.Plq.MANAGE_GUILD, e)
                        }(e, a.Z)
                    }), [e]),
                    _ = (0, o.e7)([s.Z], (function() {
                        return null != e ? s.Z.getGuildIncident(e.id) : null
                    }), [e]),
                    A = null != _ && (0, d.i9)(_);
                r.useEffect((function() {
                    !A && i && u.r.trackExposure({
                        guildId: t,
                        location: "4467c7_2"
                    })
                }), [A, i, t]);
                return !A && i && l
            }

            function A(e) {
                var n, t = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
                    r = (0, o.e7)([a.Z], (function() {
                        return function(e) {
                            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z).can(c.Plq.MANAGE_GUILD, e)
                        }(e, a.Z)
                    }), [e]),
                    l = u.l.useExperiment({
                        guildId: t,
                        location: "4467c7_3"
                    }, {
                        autoTrackExposure: r
                    }).enableRaidAlerts,
                    d = (0, i.sw)(t).showAlertMode;
                return r && (l || d)
            }

            function f(e) {
                var n = A(e),
                    t = !0 === (null == e ? void 0 : e.hasFeature(c.oNc.RAID_ALERTS_DISABLED));
                return n && t
            }

            function I(e) {
                var n, t = (0, o.e7)([a.Z], (function() {
                    return function(e) {
                        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z).can(c.Plq.MANAGE_GUILD, e)
                    }(e, a.Z)
                }), [e]);
                return (0, l.au)(null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "", !1) && t
            }
        },
        181640: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => C
            });
            var r = t(785893),
                o = t(667294),
                l = t(210595),
                a = t(202351),
                i = t(304548),
                u = t(396043),
                d = t(773011),
                s = t(65162),
                c = t(703790),
                _ = t(5544),
                A = t(567403),
                f = t(840922),
                I = t(473903),
                E = t(557233),
                T = t(383950),
                m = t(2590),
                b = t(473708),
                h = t(433924),
                N = t.n(h);

            function S(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function M(e, n, t, r, o, l, a) {
                try {
                    var i = e[l](a),
                        u = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(u) : Promise.resolve(u).then(r, o)
            }

            function g(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, l = [],
                            a = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            o = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return l
                    }
                }(e, n) || R(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return S(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || R(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function R(e, n) {
                if (e) {
                    if ("string" == typeof e) return S(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? S(e, n) : void 0
                }
            }
            var p = function(e, n) {
                var t, r, o, l, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function i(l) {
                    return function(i) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (o = 2 & l[0] ? r.return : l[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, l[1])).done) return o;
                                (r = 0, o) && (l = [2 & l[0], o.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        o = l;
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
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!o || l[1] > o[0] && l[1] < o[3])) {
                                            a.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = l;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(l);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                l = n.call(e, a)
                            } catch (e) {
                                l = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, i])
                    }
                }
            };

            function C(e) {
                var n, t, h, S, R = e.guildId,
                    C = e.transitionState,
                    y = e.onClose,
                    L = (0, a.e7)([A.Z], (function() {
                        return A.Z.getGuild(R)
                    }), [R]),
                    D = null !== (n = null == L ? void 0 : L.safetyAlertsChannelId) && void 0 !== n ? n : null,
                    x = g(o.useState(!!(null == L ? void 0 : L.hasFeature(m.oNc.RAID_ALERTS_DISABLED))), 2),
                    G = x[0],
                    O = x[1],
                    k = (0, T.BT)(L),
                    P = g(o.useState(null != D ? D : null !== (t = null == L ? void 0 : L.publicUpdatesChannelId) && void 0 !== t ? t : null), 2),
                    U = P[0],
                    Z = P[1],
                    w = g(o.useState(!1), 2),
                    B = w[0],
                    j = w[1],
                    H = (0,
                        a.Wu)([_.ZP, I.default, f.Z], (function() {
                        var e = _.ZP.getChannels(R)[_.sH].filter((function(e) {
                            return e.channel.type === l.d.GUILD_TEXT
                        })).map((function(e) {
                            var n = e.channel;
                            return {
                                value: n.id,
                                label: (0, d.F6)(n, I.default, f.Z, !0)
                            }
                        }));
                        return null != D ? e : v(e)
                    }), [R, D]),
                    F = (S = (h = function() {
                        var e, n;
                        return p(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    if (null == L) {
                                        (0, i.showToast)((0, i.createToast)(b.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, i.ToastType.FAILURE));
                                        return [2]
                                    }
                                    t.label = 1;
                                case 1:
                                    t.trys.push([1, 6, 7, 8]);
                                    j(!0);
                                    return G === L.hasFeature(m.oNc.RAID_ALERTS_DISABLED) ? [3, 3] : [4, (0, E.f6)(L, !G)];
                                case 2:
                                    t.sent();
                                    t.label = 3;
                                case 3:
                                    return U === D ? [3, 5] : [4, c.Z.saveGuild(R, {
                                        safetyAlertsChannelId: U
                                    }, {
                                        throwErr: !0
                                    })];
                                case 4:
                                    t.sent();
                                    c.Z.updateGuild({
                                        safetyAlertsChannelId: U
                                    });
                                    t.label = 5;
                                case 5:
                                    if (null != (e = null != U ? U : D)) {
                                        n = {
                                            raid_alert_type: s.wR.JOIN_RAID,
                                            enabled: G,
                                            raid_alert_channel_id: e,
                                            guild_id: R,
                                            channel_id: e
                                        };
                                        (0, u.yw)(m.rMx.GUILD_RAID_ALERTS_SETUP, n)
                                    }
                                    y();
                                    return [3, 8];
                                case 6:
                                    t.sent();
                                    (0, i.showToast)((0,
                                        i.createToast)(b.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, i.ToastType.FAILURE));
                                    return [3, 8];
                                case 7:
                                    j(!1);
                                    return [7];
                                case 8:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(t, r) {
                            var o = h.apply(e, n);

                            function l(e) {
                                M(o, t, r, l, a, "next", e)
                            }

                            function a(e) {
                                M(o, t, r, l, a, "throw", e)
                            }
                            l(void 0)
                        }))
                    }), function() {
                        return S.apply(this, arguments)
                    });
                return (0, r.jsxs)(i.ModalRoot, {
                    transitionState: C,
                    size: i.ModalSize.SMALL,
                    children: [(0, r.jsx)(i.ModalHeader, {
                        separator: !1,
                        children: (0, r.jsx)(i.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children: b.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_TITLE
                        })
                    }), (0, r.jsxs)(i.ModalContent, {
                        children: [(0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: b.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_DESCRIPTION
                        }), (0, r.jsx)("div", {
                            className: N().mainChannelContainer,
                            children: (0, r.jsxs)(i.Clickable, {
                                className: N().enableAlertsContainer,
                                onClick: function() {
                                    k && O(!G)
                                },
                                children: [(0, r.jsx)(i.Text, {
                                    variant: "text-md/medium",
                                    color: "text-normal",
                                    children: b.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS
                                }), (0, r.jsx)(i.Checkbox, {
                                    value: !G,
                                    className: N().enabledAlertsCheckbox,
                                    type: i.Checkbox.Types.INVERTED,
                                    disabled: !k
                                })]
                            })
                        }), (0, r.jsxs)("div", {
                            className: N().mainChannelContainer,
                            children: [(0, r.jsx)(i.Text, {
                                variant: "eyebrow",
                                color: "text-muted",
                                children: b.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
                            }), (0, r.jsx)(i.SearchableSelect, {
                                options: H,
                                onChange: function(e) {
                                    Z(e)
                                },
                                value: U,
                                className: N().channelSelect,
                                maxVisibleItems: 4
                            }), (0, r.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: b.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_CHANNEL_PERMISSIONS_NOTICE
                            })]
                        })]
                    }), (0, r.jsxs)(i.ModalFooter, {
                        children: [(0, r.jsx)(i.Button, {
                            onClick: F,
                            color: i.Button.Colors.BRAND_NEW,
                            look: i.Button.Looks.FILLED,
                            submitting: B,
                            children: b.Z.Messages.SAVE
                        }), (0, r.jsx)(i.Button, {
                            onClick: y,
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.LINK,
                            disabled: B,
                            children: b.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        65162: (e, n, t) => {
            t.d(n, {
                x2: () => r,
                wR: () => o,
                $l: () => l,
                J$: () => i,
                C2: () => a
            });
            var r, o, l, a;
            t(473708);
            ! function(e) {
                e.BUG = "BUG";
                e.ALLOWED = "ALLOWED";
                e.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION"
            }(r || (r = {}));
            ! function(e) {
                e.JOIN_RAID = "JOIN_RAID";
                e.MENTION_RAID = "MENTION_RAID"
            }(o || (o = {}));
            ! function(e) {
                e.LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY";
                e.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS";
                e.LEGITIMATE_DMS = "LEGITIMATE_DMS";
                e.DM_SPAM = "DM_SPAM";
                e.JOIN_RAID = "JOIN_RAID";
                e.OTHER = "OTHER"
            }(l || (l = {}));

            function i(e) {
                return e.includes(l.LEGITIMATE_ACTIVITY) ? l.LEGITIMATE_ACTIVITY : e.includes(l.DM_SPAM) ? l.DM_SPAM : e.includes(l.JOIN_RAID) ? l.JOIN_RAID : l.OTHER
            }! function(e) {
                e.DM_SPAM = "DM_SPAM";
                e.MENTION_SPAM = "MENTION_SPAM";
                e.CHANNEL_SPAM = "CHANNEL_SPAM";
                e.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS";
                e.CHANGING_SETTINGS = "CHANGING_SETTINGS";
                e.OTHER = "OTHER"
            }(a || (a = {}))
        },
        489684: (e, n, t) => {
            t.d(n, {
                H7: () => _,
                o3: () => f,
                n7: () => s,
                Ac: () => I,
                ky: () => c,
                au: () => A,
                mZ: () => E,
                fh: () => T
            });
            var r = t(260561),
                o = (0, r.B)({
                    kind: "guild",
                    id: "2022-11_automod_non_community_guilds_release",
                    label: "Automod Non-Community Guilds Release",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Non-Community Guilds Release",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = (0, r.B)({
                    kind: "guild",
                    id: "2022-12_mention_raid_limit",
                    label: "Automod Mention Raid Limit",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Mention Raid Limit",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                a = (0, r.B)({
                    kind: "guild",
                    id: "2023-01_mention_raid_notice",
                    label: "Automod Mention Raid Notice",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Mention Raid Notice",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                i = (0, r.B)({
                    kind: "guild",
                    id: "2023-02_automod_custom_message",
                    label: "Automod Custom Message",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Custom Message",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                u = (0, r.B)({
                    kind: "guild",
                    id: "2023-02_free_form",
                    label: "Automod Server Policy",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Server Policy",
                        config: {
                            enabled: !0
                        }
                    }, {
                        id: 10,
                        label: "Automod Server Policy Rules Summarization",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                d = (0, r.B)({
                    kind: "guild",
                    id: "2023-05_automod_user_profile_ab",
                    label: "Automod on User Profile A/B",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod on User Profile enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function s(e) {
                return o.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_1"
                }).enabled
            }

            function c(e) {
                return o.useExperiment({
                    guildId: e,
                    location: "988d4e_2"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }

            function _(e) {
                return l.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_3"
                }).enabled
            }

            function A(e) {
                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    t = l.useExperiment({
                        guildId: e,
                        location: "988d4e_4"
                    }, {
                        autoTrackExposure: n
                    }).enabled;
                return t
            }

            function f(e) {
                return null != e && a.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_5"
                }).enabled
            }

            function I(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = i.useExperiment({
                        guildId: e,
                        location: "988d4e_6"
                    }, {
                        autoTrackExposure: n
                    }).enabled;
                return t
            }

            function E(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = u.useExperiment({
                        guildId: e,
                        location: "988d4e_7"
                    }, {
                        autoTrackExposure: n
                    }).enabled;
                return t
            }

            function T(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = d.useExperiment({
                        guildId: e,
                        location: "988d4e_8"
                    }, {
                        autoTrackExposure: n
                    }).enabled;
                return t
            }
        }
    }
]);