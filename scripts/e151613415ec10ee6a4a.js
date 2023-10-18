"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [79885], {
        721376: (e, t, n) => {
            n.d(t, {
                Z: () => P
            });
            var r = n(785893),
                o = n(667294),
                i = n(349289),
                a = n(202351),
                u = n(70418),
                l = n(123398),
                c = n(910149),
                s = n(225386),
                d = n(940060),
                f = n(773411),
                p = n(567403),
                b = n(682776),
                _ = n(2590),
                g = d.Z.combine(_.Plq.VIEW_CHANNEL, _.Plq.MANAGE_MESSAGES, _.Plq.READ_MESSAGE_HISTORY);
            var m = n(473708);

            function y(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function h(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            y(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            y(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        O(e, t, n[t])
                    }))
                }
                return e
            }
            var v = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function P(e, t) {
                var d = e.guild_id,
                    y = o.useMemo((function() {
                        return {
                            guildId: d,
                            entity: e,
                            entityType: i.w.FORUM_POST
                        }
                    }), [d, e]),
                    O = (0, a.e7)([l.ZP], (function() {
                        return l.ZP.getIsItemFeatured(y)
                    }), [y]),
                    P = (0, s.Xb)(e),
                    S = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = e.getGuildId(),
                            r = (0, a.e7)([b.Z], (function() {
                                return b.Z.can(g, e)
                            }), [e]),
                            o = (0, a.e7)([p.Z], (function() {
                                return p.Z.getGuild(n)
                            }), [n]),
                            i = (0, f.N2)(o, !1);
                        return !!(r && null !== n && i && (null != e.parentChannelThreadType && _.TPd.GUILD_THREADS_ONLY.has(e.parentChannelThreadType) || t) && (0, c.fx)(e))
                    }(e);
                return P && S ? O ? (0, r.jsx)(u.MenuItem, {
                    id: "guild-feed-unfeature",
                    label: m.Z.Messages.GUILD_FEED_UNFEATURE_FORUM_POST,
                    action: function() {
                        return (0, u.openModalLazy)(h((function() {
                            var e;
                            return v(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(46464), n.e(49518), n.e(71575), n.e(2139), n.e(13255), n.e(43244), n.e(77179), n.e(55913), n.e(94736), n.e(92822), n.e(76188), n.e(87868), n.e(84715)]).then(n.bind(n, 846738))];
                                    case 1:
                                        e = t.sent().UnfeatureItemConfirmationModal;
                                        return [2, function(t) {
                                            return (0, r.jsx)(e, E({
                                                featureableItem: y,
                                                header: m.Z.Messages.GUILD_FEED_UNFEATURE_FORUM_POST_MODAL_HEADER,
                                                body: m.Z.Messages.GUILD_FEED_UNFEATURED_FORUM_POST_MODAL_BODY
                                            }, t))
                                        }]
                                }
                            }))
                        })))
                    }
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "guild-feed-feature",
                    label: m.Z.Messages.GUILD_FEED_FEATURE_FORUM_POST,
                    children: (0, c.DE)().map((function(o) {
                        var i = o.value,
                            a = o.timePeriod;
                        return (0, r.jsx)(u.MenuItem, {
                            id: "".concat(i),
                            label: (0, c.Vm)(a),
                            action: function() {
                                return (0, u.openModalLazy)(h((function() {
                                    var o;
                                    return v(this, (function(u) {
                                        switch (u.label) {
                                            case 0:
                                                return [4, Promise.all([n.e(40532), n.e(46464), n.e(49518), n.e(71575), n.e(2139), n.e(13255), n.e(43244), n.e(77179), n.e(55913), n.e(94736), n.e(92822), n.e(76188), n.e(87868), n.e(84715)]).then(n.bind(n, 846738))];
                                            case 1:
                                                o = u.sent().FeatureForumPostConfirmationModal;
                                                return [2, function(n) {
                                                    return (0, r.jsx)(o, E({
                                                        thread: e,
                                                        guildId: d,
                                                        expiresSeconds: i,
                                                        timePeriod: a,
                                                        options: t
                                                    }, n))
                                                }]
                                        }
                                    }))
                                })))
                            }
                        }, i)
                    }))
                }) : null
            }
        },
        489684: (e, t, n) => {
            n.d(t, {
                H7: () => f,
                o3: () => b,
                n7: () => s,
                Ac: () => _,
                ky: () => d,
                au: () => p,
                mZ: () => g,
                fh: () => m
            });
            var r = n(260561),
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
                i = (0, r.B)({
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
                u = (0, r.B)({
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
                l = (0, r.B)({
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
                c = (0, r.B)({
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

            function d(e) {
                return o.useExperiment({
                    guildId: e,
                    location: "988d4e_2"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }

            function f(e) {
                return i.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_3"
                }).enabled
            }

            function p(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = i.useExperiment({
                        guildId: e,
                        location: "988d4e_4"
                    }, {
                        autoTrackExposure: t
                    }).enabled;
                return n
            }

            function b(e) {
                return null != e && a.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_5"
                }).enabled
            }

            function _(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = u.useExperiment({
                        guildId: e,
                        location: "988d4e_6"
                    }, {
                        autoTrackExposure: t
                    }).enabled;
                return n
            }

            function g(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = l.useExperiment({
                        guildId: e,
                        location: "988d4e_7"
                    }, {
                        autoTrackExposure: t
                    }).enabled;
                return n
            }

            function m(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = c.useExperiment({
                        guildId: e,
                        location: "988d4e_8"
                    }, {
                        autoTrackExposure: t
                    }).enabled;
                return n
            }
        },
        798826: (e, t, n) => {
            n.d(t, {
                Iw: () => _,
                On: () => b,
                Yk: () => p,
                cQ: () => s,
                ev: () => c,
                m1: () => f,
                n8: () => d
            });
            var r = n(396043),
                o = n(652591),
                i = n(514351),
                a = n(2590),
                u = n(940581),
                l = n(203600),
                c = function(e) {
                    var t = e.containerWidth,
                        n = e.favoriteStickers,
                        o = e.frequentlyUsedStickers,
                        l = e.guildStickers,
                        c = e.stickersTotal;
                    r.ZP.trackWithMetadata(a.rMx.EXPRESSION_PICKER_OPENED, {
                        width: t,
                        tab: u.X1.STICKER,
                        badged: !1,
                        num_expressions_favorites: n.length,
                        num_animated_expressions_favorites: n.filter((function(e) {
                            return (0, i.aQ)(e.format_type)
                        })).length,
                        num_custom_expressions_favorites: n.filter((function(e) {
                            return (0, i.z)(e.type)
                        })).length,
                        num_standard_expressions_favorites: n.filter((function(e) {
                            return !(0, i.z)(e.type)
                        })).length,
                        num_expressions_frecent: o.length,
                        num_custom_expressions_frecent: o.filter((function(e) {
                            return (0, i.z)(e.type)
                        })).length,
                        num_animated_expressions_frecent: o.filter((function(e) {
                            return (0, i.aQ)(e.format_type)
                        })).length,
                        num_standard_expressions_frecent: o.filter((function(e) {
                            return !(0, i.z)(e.type)
                        })).length,
                        num_current_guild_expressions: l.length,
                        num_custom_expressions_total: c
                    })
                },
                s = function(e) {
                    var t, n = e.sticker,
                        o = e.location;
                    n.type === i.n0.GUILD && (t = n.guild_id);
                    r.ZP.trackWithMetadata(a.rMx.EXPRESSION_FAVORITED, {
                        location: o,
                        expression_type: u.X1.STICKER,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_guild_id: t,
                        is_animated: (0, i.aQ)(n.format_type),
                        is_custom: (0, i.z)(n.type)
                    })
                },
                d = function() {
                    o.default.track(a.rMx.SEARCH_STARTED, {
                        search_type: a.aib.STICKER
                    })
                },
                f = function(e, t, n) {
                    r.ZP.trackWithMetadata(a.rMx.SEARCH_RESULT_VIEWED, {
                        search_type: a.aib.STICKER,
                        total_results: t,
                        query: e,
                        is_suggestion: n
                    })
                },
                p = function(e, t, n) {
                    var o, u = e.sticker;
                    u.type === i.n0.GUILD && (o = u.guild_id);
                    r.ZP.trackWithMetadata(a.rMx.SEARCH_RESULT_SELECTED, {
                        load_id: u.id,
                        search_type: a.aib.STICKER,
                        source_object: "Sticker Picker",
                        total_results: n,
                        expression_guild_id: o,
                        sticker_id: u.id,
                        query: t
                    })
                },
                b = function(e) {
                    var t, n = e.sticker,
                        o = e.category;
                    n.type === i.n0.GUILD && (t = n.guild_id);
                    r.ZP.trackWithMetadata(a.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: l.cd.EMOJI_PICKER_STICKER_CLICKED,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_picker_section: o,
                        expression_guild_id: t,
                        is_animated: (0, i.aQ)(n.format_type),
                        is_custom: (0, i.z)(n.type)
                    })
                },
                _ = function(e) {
                    null != e && "" !== e && r.ZP.trackWithMetadata(a.rMx.SEARCH_RESULT_EMPTY, {
                        query: e,
                        search_type: a.aib.STICKER,
                        source_object: "Sticker Picker"
                    })
                }
        },
        659773: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                a = n(633878);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    l = void 0 === u ? "currentColor" : u,
                    c = e.foreground,
                    p = f(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", d(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: c,
                        fill: l,
                        d: "M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    d = e.color,
                    f = void 0 === d ? i.Z.colors.INTERACTIVE_NORMAL : d,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    _ = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M19.379 11.379a3 3 0 0 0 4.242 0l.025-.025a.5.5 0 0 0 0-.708L13.353.353a.5.5 0 0 0-.707 0l-.025.026a3 3 0 0 0 0 4.242L13 5l-2.917 2.917-3.65-.332a2 2 0 0 0-1.595.577l-.631.63a1 1 0 0 0 0 1.415l9.586 9.586a1 1 0 0 0 1.414 0l.63-.63a2 2 0 0 0 .578-1.596l-.332-3.65L19 11l.379.379Zm-10.31 5.69a.5.5 0 0 1-.077.77l-5.151 3.434a.5.5 0 0 1-.63-.063l-.421-.42a.5.5 0 0 1-.063-.631l3.435-5.152a.5.5 0 0 1 .77-.076l2.137 2.138Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        }
    }
]);