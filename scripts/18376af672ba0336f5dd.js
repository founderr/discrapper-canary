"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [80844], {
        201521: (e, n, t) => {
            t.d(n, {
                Z: () => l,
                e: () => a
            });
            var r = t(202351),
                o = t(464187),
                i = t(419051),
                u = t(2590);

            function l(e) {
                var n = (0, r.e7)([o.Z], (function() {
                    return o.Z.getGuildId()
                }));
                return null != n ? n : e.getGuildId()
            }

            function a(e) {
                return o.Z.getGuildId() !== u.I_8 ? e.getGuildId() : i.Z.isFavorite(e.id) || e.isThread() && i.Z.isFavorite(e.parent_id) ? u.I_8 : e.getGuildId()
            }
        },
        20170: (e, n, t) => {
            t.d(n, {
                C: () => b,
                u: () => O
            });
            var r = t(940060),
                o = t(105783),
                i = t(703790),
                u = t(567403),
                l = t(888236),
                a = t(404741),
                c = t(185219),
                s = t(322008),
                f = t(2590),
                d = t(473708);

            function p(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function v(e, n, t, r, o, i, u) {
                try {
                    var l = e[i](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function h(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            v(i, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            v(i, r, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function y(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            u = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(u = (r = t.next()).done); u = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                u || null == t.return || t.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return p(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = function(e, n) {
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
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
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
                        }([i, l])
                    }
                }
            };

            function b(e, n) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = h((function(e, n) {
                    return _(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return null == e ? [2, !0] : [4, g(e, n, {
                                    removingView: !0,
                                    removingChat: !0
                                })];
                            case 1:
                                return [2, t.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function g(e, n, t) {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = h((function(e, n, t) {
                    var r, o, i, d, p, v, h, b, E;
                    return _(this, (function(_) {
                        switch (_.label) {
                            case 0:
                                return null == (o = u.Z.getGuild(e)) ? [2, !0] : (i = null != o && (null === (r = o.features) || void 0 === r ? void 0 : r.has(f.oNc.GUILD_ONBOARDING))) ? i && a.Z.shouldFetchPrompts(e) ? [4, (0, l.eM)(e)] : [3, 2] : [2, !0];
                            case 1:
                                _.sent();
                                _.label = 2;
                            case 2:
                                d = a.Z.getDefaultChannelIds(e);
                                p = y((0, c.d9)(e, d), 2), v = p[0], h = p[1];
                                if (!d.includes(n)) return [2, !0];
                                b = t.removingView && h.length - 1 < s.md;
                                E = (t.removingChat || t.removingView) && v.length - 1 < s.X;
                                return [2, !b && !E]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(e, n, t) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = h((function(e, n, t) {
                    var u, l, a, c;
                    return _(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                if (null == (u = e.getGuildId())) return [2, !0];
                                null != t && (n = r.Z.filter(n, r.Z.invert(t)));
                                l = e.permissionOverwrites[u];
                                a = null != l ? r.Z.filter(l.deny, r.Z.invert(l.allow)) : r.Z.deserialize(0);
                                c = {
                                    removingView: r.Z.has(n, f.Plq.VIEW_CHANNEL) && !r.Z.has(a, f.Plq.VIEW_CHANNEL),
                                    removingChat: !1
                                };
                                e.isForumLikeChannel() ? c.removingChat = r.Z.has(n, f.Plq.SEND_MESSAGES_IN_THREADS) && !r.Z.has(a, f.Plq.SEND_MESSAGES_IN_THREADS) : c.removingChat = r.Z.has(n, f.Plq.SEND_MESSAGES) && !r.Z.has(a, f.Plq.SEND_MESSAGES);
                                return c.removingChat || c.removingView ? [4, g(u, e.id, c)] : [2, !0];
                            case 1:
                                if (!s.sent()) {
                                    o.Z.show({
                                        title: d.Z.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
                                        body: d.Z.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                                            onClick: function() {
                                                o.Z.close();
                                                i.Z.open(u, f.pNK.ONBOARDING)
                                            }
                                        })
                                    });
                                    return [2, !1]
                                }
                                return [2, !0]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        888236: (e, n, t) => {
            t.d(n, {
                rj: () => m,
                eM: () => O,
                rK: () => I,
                I1: () => P
            });
            var r = t(281110),
                o = t(744564),
                i = t(396043),
                u = t(664625),
                l = t(21372),
                a = t(567403),
                c = t(652591),
                s = t(661123),
                f = t(404741),
                d = t(322008),
                p = t(2590),
                v = t(589677);

            function h(e, n, t, r, o, i, u) {
                try {
                    var l = e[i](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function y(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            h(i, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            h(i, r, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function _(e, n, t) {
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
                        _(e, n, t[n])
                    }))
                }
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
            var g = function(e, n) {
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
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
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
                        }([i, l])
                    }
                }
            };

            function m(e) {
                c.default.track(p.rMx.GUILD_ONBOARDING_LOADED, E(b({}, (0, i.hH)(e)), {
                    has_new_prompts: !1,
                    number_of_prompts: 0
                }))
            }

            function O(e) {
                o.Z.dispatch({
                    type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
                    guildId: e
                });
                return r.ZP.get({
                    url: p.ANM.GUILD_ONBOARDING(e)
                }).then((function(n) {
                    var t = n.body,
                        r = (0, d.cf)(t);
                    return o.Z.dispatch(b({
                        type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
                        guildId: e
                    }, r)).then((function() {
                        return r.prompts
                    }))
                }), (function(n) {
                    o.Z.dispatch({
                        type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
                        guildId: e
                    });
                    return n
                }))
            }

            function I(e) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = y((function(e) {
                    var n, t, r, o, i, c, d, h;
                    return g(this, (function(y) {
                        switch (y.label) {
                            case 0:
                                t = u.default.getId();
                                o = (0, s.yE)(null !== (r = null === (n = l.ZP.getMember(e, t)) || void 0 === n ? void 0 : n.flags) && void 0 !== r ? r : 0, v.q.COMPLETED_ONBOARDING);
                                if (null == (i = a.Z.getGuild(e)) || !i.hasFeature(p.oNc.GUILD_ONBOARDING)) return [2, Promise.resolve()];
                                c = f.Z.shouldFetchPrompts(e);
                                d = f.Z.getOnboardingPrompts(e);
                                if (!c && d.length > 0) {
                                    if (d.every((function(e) {
                                            return !e.inOnboarding
                                        }))) {
                                        N(e);
                                        return [2, Promise.resolve()]
                                    }
                                    o || P(e);
                                    return [2, Promise.resolve()]
                                }
                                return [4, O(e)];
                            case 1:
                                h = y.sent();
                                if (Array.isArray(h) && h.every((function(e) {
                                        return !e.inOnboarding
                                    }))) {
                                    N(e);
                                    return [2, Promise.resolve()]
                                }
                                o || P(e);
                                return [2, h]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function P(e) {
                o.Z.dispatch({
                    type: "GUILD_ONBOARDING_START",
                    guildId: e
                })
            }

            function N(e) {
                c.default.track(p.rMx.GUILD_ONBOARDING_STEP_VIEWED, E(b({}, (0, i.hH)(e)), {
                    step: -2,
                    required: !0
                }));
                c.default.track(p.rMx.GUILD_ONBOARDING_STEP_COMPLETED, E(b({}, (0, i.hH)(e)), {
                    step: -2,
                    skipped: !1,
                    is_final_step: !0,
                    in_onboarding: !0
                }))
            }
        },
        322008: (e, n, t) => {
            t.d(n, {
                iU: () => s,
                NE: () => f,
                NO: () => d,
                YW: () => p,
                M$: () => v,
                qm: () => h,
                b3: () => y,
                md: () => _,
                X: () => b,
                fY: () => E,
                l7: () => l,
                FN: () => a,
                Un: () => c,
                RF: () => g,
                ae: () => m,
                yZ: () => O,
                dr: () => I,
                cf: () => P,
                Oq: () => N
            });
            var r = t(110251),
                o = t.n(r),
                i = t(473708);

            function u(e, n) {
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
            var l, a, c, s = 100,
                f = 50,
                d = 100,
                p = 15,
                v = 12,
                h = 50,
                y = 4,
                _ = 7,
                b = 5,
                E = 13;
            ! function(e) {
                e[e.CUSTOMIZE = 0] = "CUSTOMIZE";
                e[e.BROWSE = 1] = "BROWSE"
            }(l || (l = {}));
            ! function(e) {
                e[e.MULTIPLE_CHOICE = 0] = "MULTIPLE_CHOICE";
                e[e.DROPDOWN = 1] = "DROPDOWN"
            }(a || (a = {}));
            ! function(e) {
                e[e.ONBOARDING_DEFAULT = 0] = "ONBOARDING_DEFAULT";
                e[e.ONBOARDING_ADVANCED = 1] = "ONBOARDING_ADVANCED"
            }(c || (c = {}));

            function g(e) {
                if (e.options.length > 0) return !1;
                var n = m(),
                    t = (n.id, u(n, ["id"])),
                    r = (e.id, u(e, ["id"]));
                return o()(t, r)
            }

            function m() {
                return {
                    id: String(Date.now()),
                    title: i.Z.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE,
                    options: [],
                    singleSelect: !1,
                    required: !1,
                    inOnboarding: !0,
                    type: a.MULTIPLE_CHOICE
                }
            }

            function O(e) {
                return {
                    id: String(Date.now()),
                    title: "",
                    options: [],
                    singleSelect: !1,
                    required: !1,
                    inOnboarding: e,
                    type: a.MULTIPLE_CHOICE
                }
            }

            function I(e) {
                return {
                    id: e.id,
                    options: e.options.map((function(e) {
                        var n, t, r;
                        return {
                            id: e.id,
                            channel_ids: e.channelIds,
                            role_ids: e.roleIds,
                            emoji: e.emoji,
                            emoji_id: null === (n = e.emoji) || void 0 === n ? void 0 : n.id,
                            emoji_name: null === (t = e.emoji) || void 0 === t ? void 0 : t.name,
                            emoji_animated: null === (r = e.emoji) || void 0 === r ? void 0 : r.animated,
                            title: e.title,
                            description: e.description
                        }
                    })),
                    title: e.title,
                    single_select: e.singleSelect,
                    disabled: e.disabled,
                    required: e.required,
                    in_onboarding: e.inOnboarding,
                    type: e.type
                }
            }

            function S(e) {
                var n;
                return {
                    id: e.id,
                    options: e.options.map((function(e) {
                        return {
                            id: e.id,
                            channelIds: e.channel_ids,
                            roleIds: e.role_ids,
                            emoji: e.emoji,
                            title: e.title,
                            description: null !== (n = e.description) && void 0 !== n ? n : ""
                        }
                    })),
                    title: e.title,
                    singleSelect: e.single_select,
                    disabled: e.disabled,
                    required: e.required,
                    inOnboarding: e.in_onboarding,
                    type: e.type
                }
            }

            function P(e) {
                var n, t, r;
                return {
                    prompts: e.prompts.map(S),
                    defaultChannelIds: e.default_channel_ids,
                    responses: null !== (n = e.responses) && void 0 !== n ? n : [],
                    mode: e.mode,
                    enabled: e.enabled,
                    onboardingPromptsSeen: null !== (t = e.onboarding_prompts_seen) && void 0 !== t ? t : {},
                    onboardingResponsesSeen: null !== (r = e.onboarding_responses_seen) && void 0 !== r ? r : {},
                    belowRequirements: e.below_requirements
                }
            }

            function N(e) {
                return null == e || null == e.id && null == e.name
            }
        },
        404741: (e, n, t) => {
            t.d(n, {
                Z: () => R
            });
            var r = t(496486),
                o = t.n(r),
                i = t(202351),
                u = t(744564),
                l = t(861426),
                a = t(61209),
                c = t(53452),
                s = t(102921),
                f = t(734260),
                d = t(189827),
                p = t(322008);

            function v(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function _(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        h(e, n, t[n])
                    }))
                }
                return e
            }

            function b(e, n) {
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

            function E(e, n) {
                return !n || "object" !== m(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function g(e, n) {
                g = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return g(e, n)
            }
            var m = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
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
                    var t, r = y(e);
                    if (n) {
                        var o = y(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return E(this, t)
                }
            }
            var I = {},
                S = {},
                P = {},
                N = !1;

            function w(e, n, t) {
                return e.map((function(e) {
                    return function(e, n, t) {
                        for (var r = !1, o = [], i = 0; i < e.options.length; i++) {
                            var u = e.options[i],
                                l = null == t[u.id];
                            l && (r = !0);
                            o.push(b(_({}, u), {
                                isUnseen: l
                            }))
                        }
                        return b(_({}, e), {
                            options: o,
                            hasNewAnswers: r,
                            isNew: null == n[e.id]
                        })
                    }(e, n, t)
                }))
            }

            function C(e) {
                var n, t, r, o, i, u, l, a, c, s = e.guildId,
                    f = e.updates,
                    d = null !== (i = null !== (o = f.onboardingPromptsSeen) && void 0 !== o ? o : null === (n = I[s]) || void 0 === n ? void 0 : n.onboardingPromptsSeen) && void 0 !== i ? i : {},
                    p = null !== (l = null !== (u = f.onboardingResponsesSeen) && void 0 !== u ? u : null === (t = I[s]) || void 0 === t ? void 0 : t.onboardingResponsesSeen) && void 0 !== l ? l : {},
                    v = w(null !== (c = null !== (a = f.prompts) && void 0 !== a ? a : null === (r = I[s]) || void 0 === r ? void 0 : r.prompts) && void 0 !== c ? c : [], d, p);
                I[s] = b(_({}, I[s], f), {
                    prompts: v
                })
            }

            function A(e, n) {
                if (null != S[e]) {
                    var t = {};
                    Object.keys(S[e]).forEach((function(r) {
                        !n.includes(r) && S[e][r] ? t[r] = !0 : n.includes(r) && !1 === S[e][r] && (t[r] = !1)
                    }));
                    S[e] = t;
                    var r = n.filter((function(e) {
                        return null == t[e] || !0 === t[e]
                    }));
                    Object.keys(t).forEach((function(e) {
                        !0 !== t[e] || n.includes(e) || r.push(e)
                    }));
                    I[e] = b(_({}, I[e]), {
                        responses: r
                    })
                }
            }
            var D = [],
                T = [],
                Z = [],
                M = function(e) {
                    ! function(e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        n && g(e, n)
                    }(t, e);
                    var n = O(t);

                    function t() {
                        v(this, t);
                        return n.apply(this, arguments)
                    }
                    var r = t.prototype;
                    r.initialize = function() {
                        this.waitFor(a.Z, d.ZP, l.Z)
                    };
                    r.getOnboardingPromptsForOnboarding = function(e) {
                        var n, t;
                        return null !== (t = null === (n = I[e]) || void 0 === n ? void 0 : n.onboardingPrompts) && void 0 !== t ? t : D
                    };
                    r.getOnboardingPrompts = function(e) {
                        var n, t;
                        return null !== (t = null === (n = I[e]) || void 0 === n ? void 0 : n.prompts) && void 0 !== t ? t : D
                    };
                    r.getOnboardingResponses = function(e) {
                        var n, t;
                        if (l.Z.isFullServerPreview(e)) {
                            var r;
                            return Array.from(null !== (r = l.Z.getOnboardingResponses(e)) && void 0 !== r ? r : T)
                        }
                        return null !== (t = null === (n = I[e]) || void 0 === n ? void 0 : n.responses) && void 0 !== t ? t : T
                    };
                    r.getSelectedOptions = function(e) {
                        var n = this.getOnboardingResponses(e);
                        return this.getOnboardingPrompts(e).map((function(e) {
                            return e.options
                        })).flat().filter((function(e) {
                            return n.includes(e.id)
                        }))
                    };
                    r.getOnboardingResponsesForPrompt = function(e, n) {
                        var t = I[e];
                        if (null == t) return T;
                        var r = t.prompts.find((function(e) {
                            return e.id === n
                        }));
                        return null == r ? T : o().intersection(r.options.map((function(e) {
                            return e.id
                        })), this.getOnboardingResponses(e))
                    };
                    r.getEnabledOnboardingPrompts = function(e) {
                        var n, t = I[e];
                        if (l.Z.isFullServerPreview(e)) {
                            var r;
                            return null !== (r = null == t ? void 0 : t.prompts) && void 0 !== r ? r : D
                        }
                        return null != t && t.enabled && null !== (n = t.prompts) && void 0 !== n ? n : D
                    };
                    r.getDefaultChannelIds = function(e) {
                        var n, t;
                        return null !== (t = null === (n = I[e]) || void 0 === n ? void 0 : n.defaultChannelIds) && void 0 !== t ? t : Z
                    };
                    r.getEnabled = function(e) {
                        var n, t;
                        return l.Z.isFullServerPreview(e) ? null != I[e] : null !== (t = null === (n = I[e]) || void 0 === n ? void 0 : n.enabled) && void 0 !== t && t
                    };
                    r.getOnboardingPrompt = function(e) {
                        return Object.values(I).map((function(e) {
                            return e.prompts
                        })).flat().find((function(n) {
                            return n.id === e
                        }))
                    };
                    r.isLoading = function() {
                        return N
                    };
                    r.shouldFetchPrompts = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Z.Millis.HOUR;
                        if (N) return !1;
                        var t = P[e];
                        return null == t || Date.now() - t > n
                    };
                    r.getPendingResponseOptions = function(e) {
                        return S[e]
                    };
                    r.ackIdForGuild = function(e) {
                        var n = this.getEnabledOnboardingPrompts(e),
                            t = "0";
                        n.forEach((function(e) {
                            e.options.forEach((function(e) {
                                s.Z.compare(e.id, t) > 0 && (t = e.id)
                            }));
                            s.Z.compare(e.id, t) > 0 && (t = e.id)
                        }));
                        return t
                    };
                    r.lastFetchedAt = function(e) {
                        return P[e]
                    };
                    r.isAdvancedMode = function(e) {
                        var n;
                        return null != e && (null === (n = I[e]) || void 0 === n ? void 0 : n.mode) === p.Un.ONBOARDING_ADVANCED
                    };
                    return t
                }(i.ZP.Store);
            M.displayName = "GuildOnboardingPromptsStore";
            const R = new M(u.Z, {
                CONNECTION_OPEN: function() {
                    N = !1;
                    I = {}
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_START: function() {
                    N = !0
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function(e) {
                    var n = e.guildId,
                        t = e.prompts,
                        r = e.defaultChannelIds,
                        o = e.enabled,
                        i = e.responses,
                        u = e.onboardingPromptsSeen,
                        l = e.onboardingResponsesSeen,
                        a = e.mode,
                        c = e.belowRequirements;
                    N = !1;
                    var s = d.ZP.getOnboardingStatus(n) === d.uX.READY,
                        p = w(t, u, l);
                    I[n] = {
                        enabled: o,
                        mode: a,
                        belowRequirements: c,
                        prompts: p,
                        onboardingPrompts: p.filter((function(e) {
                            return e.inOnboarding
                        })),
                        defaultChannelIds: r.filter((function(e) {
                            return (0, f.s)(n, e)
                        })),
                        responses: s ? [] : i,
                        onboardingPromptsSeen: u,
                        onboardingResponsesSeen: l
                    };
                    s || A(n, i);
                    P[n] = Date.now()
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function() {
                    N = !1
                },
                GUILD_ONBOARDING_SELECT_OPTION: function(e) {
                    var n = e.guildId,
                        t = e.optionId,
                        r = e.selected,
                        i = e.removedOptionIds;
                    if (l.Z.isFullServerPreview(n)) return !0;
                    if (null == I[n]) return !1;
                    null != i && i.length > 0 && o().pullAll(I[n].responses, i);
                    r ? I[n].responses.push(t) : o().pull(I[n].responses, t);
                    null == S[n] && (S[n] = {});
                    S[n][t] = r;
                    null != i && i.forEach((function(e) {
                        return S[n][e] = !1
                    }));
                    S[n] = _({}, S[n]);
                    return !0
                },
                GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function(e) {
                    var n = e.guildId,
                        t = e.options,
                        r = e.prompts_seen,
                        o = e.options_seen;
                    A(n, t);
                    var i = I[n];
                    if (null == i) return !1;
                    var u = w(i.prompts, r, o);
                    I[n] = b(_({}, i), {
                        prompts: u,
                        onboardingPrompts: u.filter((function(e) {
                            return e.inOnboarding
                        })),
                        onboardingPromptsSeen: r,
                        onboardingResponsesSeen: o
                    })
                },
                GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: C,
                GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: C,
                GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function(e) {
                    var n = e.guildId,
                        t = e.channelIds;
                    I[n] = b(_({}, I[n]), {
                        defaultChannelIds: t
                    })
                },
                GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
                    var n = e.guildId,
                        t = e.mode,
                        r = I[n];
                    null != r && (r.mode = t)
                }
            })
        },
        347005: (e, n, t) => {
            t.d(n, {
                cP: () => g,
                Fg: () => m,
                C3: () => O,
                gp: () => I,
                Oh: () => S,
                UT: () => P
            });
            var r = t(281110),
                o = t(744564),
                i = t(720419),
                u = t(828439),
                l = t(861426),
                a = t(451458),
                c = t(61209),
                s = t(652591),
                f = t(386531),
                d = t(185161),
                p = t(689175),
                v = t(848465),
                h = t(2590);

            function y(e, n, t, r, o, i, u) {
                try {
                    var l = e[i](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function _(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            y(i, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            y(i, r, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var b, E = function(e, n) {
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
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function l(i) {
                        return function(l) {
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
                            }([i, l])
                        }
                    }
                },
                g = (b = _((function(e) {
                    var n, t;
                    return E(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "GUILD_HOME_SETTINGS_FETCH_START",
                                    guildId: e
                                });
                                i.label = 1;
                            case 1:
                                i.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: h.ANM.GUILD_HOME_SETTINGS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                n = i.sent();
                                t = (0, d.tB)(n.body);
                                o.Z.dispatch({
                                    type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                                    guildId: e,
                                    homeSettings: t
                                });
                                return [2, t];
                            case 3:
                                i.sent();
                                o.Z.dispatch({
                                    type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
                                    guildId: e
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                })), function(e) {
                    return b.apply(this, arguments)
                }),
                m = function() {
                    var e = _((function(e) {
                        var n, t;
                        return E(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    if (l.Z.isFullServerPreview(e)) return [2];
                                    o.Z.dispatch({
                                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
                                        guildId: e
                                    });
                                    i.label = 1;
                                case 1:
                                    i.trys.push([1, 3, , 4]);
                                    return [4, r.ZP.get({
                                        url: h.ANM.GUILD_MEMBER_ACTIONS(e),
                                        oldFormErrors: !0
                                    })];
                                case 2:
                                    n = i.sent();
                                    t = (0, d.rk)(n.body);
                                    o.Z.dispatch({
                                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                                        guildId: e,
                                        memberActions: t
                                    });
                                    return [2, t];
                                case 3:
                                    i.sent();
                                    o.Z.dispatch({
                                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                                        guildId: e
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                O = (function() {
                    var e = _((function(e) {
                        return E(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    o.Z.dispatch({
                                        type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_START",
                                        guildId: e
                                    });
                                    n.label = 1;
                                case 1:
                                    n.trys.push([1, 3, , 4]);
                                    return [4, r.ZP.delete({
                                        url: h.ANM.GUILD_MEMBER_ACTIONS(e),
                                        oldFormErrors: !0
                                    })];
                                case 2:
                                    n.sent();
                                    o.Z.dispatch({
                                        type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS",
                                        guildId: e
                                    });
                                    return [3, 4];
                                case 3:
                                    n.sent();
                                    o.Z.dispatch({
                                        type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_FAIL",
                                        guildId: e
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }(), function(e, n) {
                    var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    o.Z.dispatch({
                        type: "SELECT_HOME_RESOURCE_CHANNEL",
                        guildId: e,
                        channelId: n
                    });
                    if (null != n) {
                        var r = c.Z.getChannel(n),
                            d = f.Z.getResourceForChannel(e, n);
                        null == e || l.Z.isFullServerPreview(e) || null == r || null == d || s.default.track(h.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
                            guild_id: e,
                            channel_id: r.id,
                            server_guide_channel_type: "resource",
                            channel_action_type: -1
                        });
                        t && (0, a.Kh)(n);
                        i.Z.jumpToMessage({
                            channelId: n,
                            messageId: n,
                            flash: !1,
                            jumpType: u.S.INSTANT
                        })
                    }
                }),
                I = function(e, n) {
                    o.Z.dispatch({
                        type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
                        guildId: e,
                        channelId: n
                    });
                    var t = c.Z.getChannel(n),
                        r = f.Z.getActionForChannel(e, n);
                    null == e || l.Z.isFullServerPreview(e) || null == t || null == r || s.default.track(h.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
                        guild_id: e,
                        channel_id: t.id,
                        server_guide_channel_type: "member action",
                        channel_action_type: r.actionType
                    });
                    (0, a.Kh)(n)
                },
                S = function(e, n) {
                    o.Z.dispatch({
                        type: "COMPLETE_NEW_MEMBER_ACTION",
                        guildId: e,
                        channelId: n
                    });
                    if (!l.Z.isFullServerPreview(e)) {
                        var t = c.Z.getChannel(n),
                            i = f.Z.getActionForChannel(e, n);
                        if (null != t && null != i) {
                            var u, a, d = Object.keys(null !== (u = p.Z.getCompletedActions(e)) && void 0 !== u ? u : {}),
                                v = null !== (a = f.Z.getNewMemberActions(e)) && void 0 !== a ? a : [];
                            s.default.track(h.rMx.SERVER_GUIDE_ACTION_COMPLETED, {
                                guild_id: t.guild_id,
                                channel_id: t.id,
                                channel_action_type: i.actionType,
                                has_completed_all: v.reduce((function(e, n) {
                                    return e && d.includes(n.channelId)
                                }), !0)
                            })
                        }
                        r.ZP.post({
                            url: h.ANM.GUILD_MEMBER_ACTION_UPDATE(e, n)
                        })
                    }
                };

            function P(e, n) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = _((function(e, n) {
                    var t;
                    return E(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return null == e ? [2, !1] : (0, v.s)(e) ? (t = f.Z.getSettings(e)) !== f.P ? [3, 2] : [4, g(e)] : [2, !1];
                            case 1:
                                r.sent();
                                t = f.Z.getSettings(e);
                                r.label = 2;
                            case 2:
                                return t === f.P || null == t ? [2, !1] : null != t.newMemberActions && null != t.newMemberActions.find((function(e) {
                                    return e.channelId === n
                                })) ? [2, "todo"] : null != t.resourceChannels && null != t.resourceChannels.find((function(e) {
                                    return e.channelId === n
                                })) ? [2, "resource"] : [2, !1]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        185161: (e, n, t) => {
            t.d(n, {
                ZR: () => a,
                W4: () => c,
                Wz: () => s,
                Z3: () => f,
                O9: () => d,
                n: () => p,
                am: () => v,
                Vu: () => h,
                x3: () => y,
                oi: () => r,
                cq: () => _,
                vD: () => b,
                tB: () => E,
                HH: () => g,
                rk: () => m,
                pw: () => O,
                av: () => I,
                uo: () => S,
                k3: () => P,
                kb: () => N
            });
            var r, o = t(61209),
                i = t(72580),
                u = t(563135),
                l = t(2590),
                a = 7,
                c = 300,
                s = 7,
                f = 60,
                d = 5,
                p = 1,
                v = 30,
                h = 200,
                y = 7;
            ! function(e) {
                e[e.VIEW = 0] = "VIEW";
                e[e.CHAT = 1] = "CHAT"
            }(r || (r = {}));

            function _(e) {
                var n;
                return {
                    channelId: e.channel_id,
                    actionType: e.action_type,
                    title: e.title,
                    description: e.description,
                    emoji: null == e.emoji ? null : {
                        id: e.emoji.id,
                        name: e.emoji.name,
                        animated: e.emoji.animated
                    },
                    icon: null !== (n = e.icon) && void 0 !== n ? n : null
                }
            }

            function b(e) {
                var n, t;
                return {
                    channelId: e.channel_id,
                    title: e.title,
                    description: null !== (n = e.description) && void 0 !== n ? n : "",
                    emoji: null == e.emoji ? null : {
                        id: e.emoji.id,
                        name: e.emoji.name,
                        animated: e.emoji.animated
                    },
                    icon: null !== (t = e.icon) && void 0 !== t ? t : null
                }
            }

            function E(e) {
                if (null == e) return null;
                var n = e.welcome_message,
                    t = e.new_member_actions,
                    r = e.resource_channels,
                    u = e.enabled;
                return {
                    welcomeMessage: {
                        authorIds: n.author_ids,
                        message: n.message
                    },
                    newMemberActions: t.filter((function(e) {
                        return (0, i.lm)(o.Z.getChannel(e.channel_id))
                    })).map(_),
                    resourceChannels: r.filter((function(e) {
                        return (0, i.lm)(o.Z.getChannel(e.channel_id))
                    })).map(b),
                    enabled: u
                }
            }

            function g(e, n) {
                if (null == n) return null;
                var t, r, u, l, a, c, s, f, d, p, v = n.welcomeMessage,
                    h = n.newMemberActions,
                    y = n.resourceChannels,
                    _ = n.enabled,
                    b = {
                        author_ids: null !== (t = null == v ? void 0 : v.authorIds) && void 0 !== t ? t : [],
                        message: null !== (r = null == v ? void 0 : v.message) && void 0 !== r ? r : ""
                    },
                    E = (null != h ? h : []).filter((function(e) {
                        return (0, i.lm)(o.Z.getChannel(e.channelId))
                    })).map((function(e) {
                        var n, t, r;
                        return {
                            channel_id: e.channelId,
                            action_type: e.actionType,
                            title: e.title,
                            description: e.description,
                            emoji: {
                                id: null !== (u = null === (n = e.emoji) || void 0 === n ? void 0 : n.id) && void 0 !== u ? u : void 0,
                                name: null !== (l = null === (t = e.emoji) || void 0 === t ? void 0 : t.name) && void 0 !== l ? l : void 0,
                                animated: null !== (a = null === (r = e.emoji) || void 0 === r ? void 0 : r.animated) && void 0 !== a ? a : void 0
                            },
                            icon: null !== (c = e.icon) && void 0 !== c ? c : void 0
                        }
                    })),
                    g = (null != y ? y : []).filter((function(e) {
                        return (0, i.lm)(o.Z.getChannel(e.channelId))
                    })).map((function(e) {
                        var n, t, r;
                        return {
                            channel_id: e.channelId,
                            title: e.title,
                            description: e.description,
                            emoji: {
                                id: null !== (s = null === (n = e.emoji) || void 0 === n ? void 0 : n.id) && void 0 !== s ? s : void 0,
                                name: null !== (f = null === (t = e.emoji) || void 0 === t ? void 0 : t.name) && void 0 !== f ? f : void 0,
                                animated: null !== (d = null === (r = e.emoji) || void 0 === r ? void 0 : r.animated) && void 0 !== d ? d : void 0
                            },
                            icon: null !== (p = e.icon) && void 0 !== p ? p : void 0
                        }
                    }));
                return {
                    guild_id: e,
                    welcome_message: b,
                    new_member_actions: E,
                    resource_channels: g,
                    enabled: _
                }
            }
            var m = function(e) {
                if (null == e) return null;
                var n = {};
                for (var t in e.channel_actions) n[t] = e.channel_actions[t].completed;
                return n
            };

            function O(e) {
                return null == e || !(null != e.message && e.message.length > 0) && !(null != e.authorIds && e.authorIds.length > 0)
            }

            function I(e) {
                return null == e || !!O(e.welcomeMessage) && (!(null != e.newMemberActions && e.newMemberActions.length > 0) && !(null != e.resourceChannels && e.resourceChannels.length > 0))
            }

            function S(e) {
                var n, t;
                return null != e && (!!I(e) || !(null == (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.message) || e.welcomeMessage.message.length < a) && (null != (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.authorIds) && 0 !== e.welcomeMessage.authorIds.length && !(null == e.newMemberActions || e.newMemberActions.length < 3)))
            }

            function P(e) {
                return e.type === l.d4z.GUILD_TEXT && !u.ZP.canEveryoneRole(l.Plq.SEND_MESSAGES, e) && u.ZP.canEveryoneRole(l.Plq.VIEW_CHANNEL, e)
            }

            function N(e) {
                switch (e.type) {
                    case l.d4z.GUILD_TEXT:
                    case l.d4z.GUILD_ANNOUNCEMENT:
                    case l.d4z.GUILD_FORUM:
                    case l.d4z.GUILD_MEDIA:
                        return u.ZP.canEveryoneRole(l.Plq.VIEW_CHANNEL, e);
                    default:
                        return !1
                }
            }
        },
        689175: (e, n, t) => {
            t.d(n, {
                Z: () => b
            });
            var r = t(202351),
                o = t(744564);

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

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function a(e) {
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

            function c(e, n) {
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
                return !n || "object" !== d(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function f(e, n) {
                f = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return f(e, n)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    var t, r = l(e);
                    if (n) {
                        var o = l(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return s(this, t)
                }
            }
            var v = {},
                h = {},
                y = new Set;
            var _ = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && f(e, n)
                }(t, e);
                var n = p(t);

                function t() {
                    i(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.getCompletedActions = function(e) {
                    return null == e ? null : h[e]
                };
                r.hasCompletedActionForChannel = function(e, n) {
                    var t = this.getCompletedActions(e);
                    return null != t && null != t[n]
                };
                r.getState = function(e) {
                    return null == e ? {} : {
                        completedActions: h[e],
                        loading: y.has(e)
                    }
                };
                return t
            }(r.ZP.Store);
            _.displayName = "GuildOnboardingMemberActionStore";
            const b = new _(o.Z, {
                GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function(e) {
                    var n = e.guildId;
                    y.add(n)
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function(e) {
                    var n = e.memberActions,
                        t = e.guildId;
                    if (null != n) {
                        h[t] = n;
                        y.delete(t)
                    } else h[t] = v
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function(e) {
                    var n = e.guildId;
                    y.delete(n)
                },
                GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function(e) {
                    var n = e.guildId;
                    if (null == h[n]) return !1;
                    delete h[n]
                },
                COMPLETE_NEW_MEMBER_ACTION: function(e) {
                    var n = e.guildId,
                        t = e.channelId;
                    h = c(a({}, h), u({}, n, c(a({}, h[n]), u({}, t, !0))))
                },
                GUILD_DELETE: function(e) {
                    var n = e.guild;
                    if (null == h[n.id]) return !1;
                    delete h[n.id]
                }
            })
        },
        134954: (e, n, t) => {
            t.d(n, {
                Z: () => a
            });
            var r = t(667294),
                o = t(202351),
                i = t(302685),
                u = t(664731),
                l = {};

            function a(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    t = (0, o.e7)([u.Z], (function() {
                        return u.Z.getRoleMemberCount(e)
                    }));
                r.useEffect((function() {
                    if (null != e) {
                        var t = l[e];
                        if (!(null != t && n > 0 && Date.now() - t < n)) {
                            l[e] = Date.now();
                            i.E(e)
                        }
                    }
                }), [e, n]);
                return t
            }
        },
        201441: (e, n, t) => {
            t.d(n, {
                ZP: () => b,
                qY: () => E,
                gM: () => g,
                k5: () => m,
                u1: () => O,
                eF: () => I,
                sz: () => S
            });
            var r = t(667294),
                o = t(202351),
                i = t(826945),
                u = t(61209),
                l = t(5544),
                a = t(567403),
                c = t(682776),
                s = t(72580),
                f = t(269300),
                d = t(371188),
                p = t(3155),
                v = t(2590);

            function h(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function y(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            u = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(u = (r = t.next()).done); u = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                u || null == t.return || t.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return h(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = [];

            function b(e, n) {
                return (0, o.Wu)([a.Z, i.Z, f.ZP, c.Z, u.Z, l.ZP], (function() {
                    var t = a.Z.getGuild(e);
                    if (null == t) return _;
                    if (t.hasFeature(v.oNc.HUB)) {
                        var r, o, d = null === (r = l.ZP.getDefaultChannel(t.id)) || void 0 === r ? void 0 : r.id;
                        return (null !== (o = i.Z.getEventDirectoryEntries(d)) && void 0 !== o ? o : []).map((function(e) {
                            var n = e.scheduledEventId,
                                t = f.ZP.getGuildScheduledEvent(n);
                            return null != t ? t : i.Z.getCachedGuildScheduledEventById(n)
                        })).filter(s.lm)
                    }
                    return f.ZP.getGuildScheduledEventsByIndex(null != n ? n : f.bN.GUILD_EVENT_UPCOMING(t.id)).filter((function(e) {
                        var n = e.channel_id;
                        if (null == n) return !0;
                        var t = u.Z.getChannel(n);
                        return c.Z.can(v.Plq.VIEW_CHANNEL, t)
                    }))
                }), [n, e])
            }

            function E(e) {
                return (0, o.e7)([f.ZP, u.Z, c.Z], (function() {
                    var n = u.Z.getChannel(e);
                    if (!c.Z.can(v.Plq.VIEW_CHANNEL, n)) return null;
                    if (null == (null == n ? void 0 : n.guild_id)) return null;
                    var t = f.ZP.getGuildScheduledEventsByIndex(f.bN.CHANNEL_EVENT_ACTIVE(e));
                    return t.length > 0 ? t[0] : null
                }), [e])
            }

            function g(e) {
                var n = (0, o.Wu)([f.ZP], (function() {
                    return f.ZP.getGuildScheduledEventsForGuild(e)
                }), [e]);
                return r.useMemo((function() {
                    var e = new Map;
                    n.forEach((function(n) {
                        var t = n.channel_id;
                        null != t && e.set(t, n)
                    }));
                    return e
                }), [n])
            }

            function m(e) {
                return (0, o.e7)([f.ZP, u.Z, c.Z], (function() {
                    return f.ZP.getGuildScheduledEventsByIndex(f.bN.GUILD_EVENT_ACTIVE(e)).find((function(e) {
                        if (e.entity_type === p.WX.NONE || !(0, f.xt)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        var n = u.Z.getChannel(e.channel_id);
                        return c.Z.can(v.Plq.VIEW_CHANNEL, n)
                    }))
                }), [e])
            }

            function O(e) {
                return (0, o.e7)([f.ZP], (function() {
                    return f.ZP.getGuildScheduledEventsByIndex(f.bN.CHANNEL_EVENT_UPCOMING(e))
                }), [e])
            }

            function I(e) {
                return (0, o.e7)([u.Z, f.ZP], (function() {
                    var n = f.ZP.getGuildScheduledEventsByIndex(f.bN.GUILD_EVENT_ACTIVE(e)).find((function(e) {
                        return null != u.Z.getChannel(e.channel_id)
                    }));
                    return u.Z.getChannel(null == n ? void 0 : n.channel_id)
                }), [e])
            }

            function S(e) {
                var n = y(r.useState((function() {
                        return Date.now()
                    })), 2),
                    t = n[0],
                    i = n[1];
                r.useEffect((function() {
                    var e = setInterval((function() {
                        i(Date.now())
                    }), 9e5);
                    return function() {
                        return clearInterval(e)
                    }
                }), []);
                var u = (0, o.e7)([f.ZP], (function() {
                        return null == e ? [] : f.ZP.getGuildScheduledEventsByIndex(f.bN.CHANNEL_EVENT_UPCOMING(e))
                    }), [e, t]),
                    l = r.useMemo((function() {
                        return u.filter((function(e) {
                            var n = (0, d.ub)(e.scheduled_start_time, e.scheduled_end_time),
                                t = n.withinStartWindow,
                                r = n.diffMinutes;
                            return e.status !== p.p1.ACTIVE && t && r < 15
                        }))
                    }), [u]);
                return l
            }
        },
        371188: (e, n, t) => {
            t.d(n, {
                G3: () => i,
                Ib: () => u,
                ib: () => l,
                ub: () => s,
                v1: () => d,
                me: () => p
            });
            var r = t(730381),
                o = t.n(r),
                i = (t(3155), 365),
                u = i + 1,
                l = function() {
                    var e = o()().add(1, "hour"),
                        n = e.hour();
                    e.minutes() >= 30 && (n += 1);
                    return e.hour(n).minutes(0).seconds(0)
                };
            var a = function(e, n) {
                    return e.format(e.get("years") === n.get("years") ? "ddd MMM Do · LT" : "ddd MMM Do, YYYY · LT")
                },
                c = function(e, n) {
                    return e.diff(n, "days") > 1 ? a(e, n) : e.calendar(n)
                };

            function s(e, n, t) {
                null == t && (t = o()());
                var r = o()(e),
                    i = null != n && "" !== n ? o()(n) : void 0,
                    u = null != n && r.isSame(i, "day");
                return {
                    startDateTimeString: c(r, t),
                    endDateTimeString: null != i ? u ? i.format("LT") : a(i, t) : void 0,
                    currentOrPastEvent: r <= t,
                    upcomingEvent: r <= o()().add(1, "hour"),
                    withinStartWindow: r <= o()().add(15, "minute"),
                    diffMinutes: r.diff(t, "minutes")
                }
            }

            function f(e, n) {
                var t;
                if (null != e) {
                    t = {
                        startDate: o()(e),
                        endDate: void 0
                    };
                    null != n && (t.endDate = o()(n))
                }
                return t
            }

            function d(e) {
                return f(e.scheduledStartTime, e.scheduledEndTime)
            }

            function p(e) {
                return f(e.scheduled_start_time, e.scheduled_end_time)
            }
        },
        302685: (e, n, t) => {
            t.d(n, {
                E: () => h,
                H: () => E
            });
            var r = t(5387),
                o = t.n(r),
                i = t(281110),
                u = t(744564),
                l = t(327499),
                a = t(664731),
                c = t(2590);

            function s(e, n, t, r, o, i, u) {
                try {
                    var l = e[i](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function f(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            s(i, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            s(i, r, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var d = function(e, n) {
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
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
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
                        }([i, l])
                    }
                }
            };

            function p(e) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = f((function(e) {
                    var n, t;
                    return d(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                r.trys.push([0, 2, , 3]);
                                u.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                                    guildId: e
                                });
                                return [4, i.ZP.get({
                                    url: c.ANM.GUILD_ROLE_MEMBER_COUNTS(e)
                                })];
                            case 1:
                                n = r.sent();
                                t = n.body;
                                u.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                                    guildId: e,
                                    roleMemberCount: t
                                });
                                return [3, 3];
                            case 2:
                                r.sent();
                                u.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                                    guildId: e
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function h(e) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = f((function(e) {
                    return d(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return a.Z.shouldFetch(e) ? [4, p(e)] : [3, 2];
                            case 1:
                                n.sent();
                                n.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var _ = new(o())({
                maxAge: 1e4
            });

            function b(e, n) {
                return i.ZP.get({
                    url: c.ANM.GUILD_ROLE_MEMBER_IDS(e, n)
                }).then((function(n) {
                    l.Z.requestMembersById(e, n.body, !1);
                    return n.body.length
                }))
            }

            function E(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = "".concat(e, "-").concat(n);
                if (!t || null == _.get(r)) {
                    _.set(r, !0);
                    return b(e, n)
                }
                return Promise.resolve(null)
            }
        },
        664731: (e, n, t) => {
            t.d(n, {
                Z: () => v
            });
            var r = t(202351),
                o = t(744564);

            function i(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function l(e, n) {
                return !n || "object" !== c(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function a(e, n) {
                a = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return a(e, n)
            }
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
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
                    var t, r = u(e);
                    if (n) {
                        var o = u(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return l(this, t)
                }
            }
            var f = {},
                d = {};
            var p = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && a(e, n)
                }(t, e);
                var n = s(t);

                function t() {
                    i(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.getRoleMemberCount = function(e) {
                    return null != e ? f[e] : null
                };
                r.shouldFetch = function(e) {
                    if (null == e) return !1;
                    var n = d[e];
                    return null == n || Date.now() - n > 12e4
                };
                return t
            }(r.ZP.Store);
            p.displayName = "GuildRoleMemberCountStore";
            const v = new p(o.Z, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    var n = e.guildId,
                        t = e.roleMemberCount;
                    f[n] = t;
                    d[n] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    var n = e.guildId,
                        t = e.roleId,
                        r = e.count,
                        o = f[n];
                    if (null == o) return !1;
                    o[t] = r
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    var n = e.guildId,
                        t = e.roleId,
                        r = e.added,
                        o = f[n];
                    if (null == o) return !1;
                    if (null == o[t]) return !1;
                    var i = Object.keys(r).length;
                    o[t] += i
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    var n = e.guildId,
                        t = e.roleId,
                        r = f[n];
                    if (null == r) return !1;
                    if (null == r[t]) return !1;
                    r[t] = r[t] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    var n = e.guildId,
                        t = e.roleId,
                        r = f[n];
                    if (null == r) return !1;
                    if (null == r[t]) return !1;
                    r[t] = Math.max(r[t] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    var n = e.guildId,
                        t = e.role;
                    null == f[n] && (f[n] = {});
                    f[n][t.id] = 0
                },
                GUILD_DELETE: function(e) {
                    var n = e.guild;
                    delete f[n.id];
                    delete d[n.id]
                }
            })
        },
        189651: (e, n, t) => {
            t.d(n, {
                iD: () => I,
                Zm: () => S,
                mL: () => P,
                zS: () => w,
                og: () => C,
                aq: () => A
            });
            var r = t(744564),
                o = t(396043),
                i = t(784426),
                u = t(61209),
                l = t(5544),
                a = t(21372),
                c = t(567403),
                s = t(682776),
                f = t(715107),
                d = t(9430),
                p = t(652591),
                v = t(861426),
                h = t(557177),
                y = t(2590),
                _ = t(897196);

            function b(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function E(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function g(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        E(e, n, t[n])
                    }))
                }
                return e
            }

            function m(e, n) {
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

            function O(e) {
                return function(e) {
                    if (Array.isArray(e)) return b(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return b(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return b(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(e, n) {
                p.default.track(y.rMx.VIEW_AS_ROLES_SELECTED, m(g({
                    num_roles: Object.keys(n.roles).length
                }, (0, o.hH)(e)), {
                    is_viewing_as_member: n.type === h.z.NEW_MEMBER
                }));
                r.Z.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: n
                });
                N(e)
            }

            function S(e, n) {
                var t = v.Z.getData(e);
                if (null != t && t.type === n.type) {
                    p.default.track(y.rMx.VIEW_AS_ROLES_SELECTED, m(g({
                        num_roles: Object.keys(t.roles).length
                    }, (0, o.hH)(e)), {
                        is_viewing_as_member: t.type === h.z.NEW_MEMBER
                    }));
                    r.Z.dispatch({
                        type: "IMPERSONATE_UPDATE",
                        guildId: e,
                        data: g({}, t, n)
                    });
                    N(e)
                }
            }

            function P(e) {
                r.Z.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function N(e) {
                var n = f.Z.getChannelId(e),
                    t = u.Z.getChannel(n);
                if (!(null != n && (0, _.AB)(n)) && !s.Z.can(y.Plq.VIEW_CHANNEL, t)) {
                    var r = l.ZP.getDefaultChannel(e);
                    null != r && (0, i.uL)(y.Z5c.CHANNEL(e, r.id))
                }
            }

            function w(e, n, t) {
                var r = new Set(d.Z.getOptedInChannels(e));
                n.forEach((function(e) {
                    return r.add(e)
                }));
                t.forEach((function(e) {
                    return r.delete(e)
                }));
                S(e, {
                    type: h.z.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function C(e, n) {
                var t = c.Z.getGuild(e);
                if (null != t) {
                    ! function(e, n) {
                        var t = O(l.ZP.getSelectableChannelIds(e)).concat(O(l.ZP.getVocalChannelIds(e))),
                            r = Array.from(n);
                        l.ZP.addConditionalChangeListener((function() {
                            var n = a.ZP.getSelfMember(e);
                            if (null == n) return !1;
                            if (r.some((function(e) {
                                    return !n.roles.includes(e)
                                }))) return !0;
                            var o = O(l.ZP.getSelectableChannelIds(e)).concat(O(l.ZP.getVocalChannelIds(e))).filter((function(e) {
                                return !t.includes(e)
                            }));
                            o.length > 0 && w(e, o, []);
                            return !1
                        }))
                    }(e, n);
                    var r = {};
                    n.forEach((function(e) {
                        return r[e] = t.roles[e]
                    }));
                    S(e, {
                        type: h.z.NEW_MEMBER,
                        roles: r
                    })
                }
            }

            function A(e, n) {
                S(e, g({
                    type: h.z.NEW_MEMBER
                }, n))
            }
        },
        451458: (e, n, t) => {
            t.d(n, {
                Kh: () => s,
                ad: () => f,
                gt: () => d,
                jd: () => p
            });
            var r = t(441143),
                o = t.n(r),
                i = t(761953),
                u = t(201521),
                l = t(61209),
                a = t(784426),
                c = t(2590);

            function s(e, n, t) {
                var r = l.Z.getChannel(e);
                if (null != r) {
                    var o = (0, u.e)(r);
                    i.Z.preload(r.guild_id, r.id);
                    (0, a.uL)(c.Z5c.CHANNEL(o, r.id), n, t)
                }
            }

            function f(e, n) {
                o()(null != e.parent_id, "Thread must have a parent ID.");
                var t = (0, u.e)(e);
                (0, a.uL)(c.Z5c.CHANNEL(t, e.id), void 0, n)
            }

            function d(e, n, t) {
                o()(null != e.parent_id, "Thread must have a parent ID.");
                var r = (0, u.e)(e);
                (0, a.uL)(c.Z5c.CHANNEL(r, e.id, n), void 0, t)
            }

            function p(e, n, t, r) {
                var o = l.Z.getChannel(e);
                if (null != o) {
                    var i = (0, u.e)(o);
                    (0, a.uL)(c.Z5c.CHANNEL(i, o.id, n), t, r)
                }
            }
        },
        424158: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var r = t(730381),
                o = t.n(r),
                i = t(169376);

            function u(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
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

            function c(e, n) {
                return !n || "object" !== f(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function s(e, n) {
                s = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return s(e, n)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
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
                    var t, r = l(e);
                    if (n) {
                        var o = l(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return c(this, t)
                }
            }
            var p = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && s(e, n)
                }(t, e);
                var n = d(t);

                function t(e) {
                    ! function(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r;
                    (r = n.call(this)).code = e.code || "";
                    r.temporary = e.temporary || !1;
                    r.revoked = e.revoked || !1;
                    r.uses = e.uses || 0;
                    r.maxUses = e.maxUses || 0;
                    r.maxAge = e.maxAge || 0;
                    r.createdAt = e.createdAt || new Date;
                    r.channel = e.channel;
                    r.guild = e.guild;
                    r.inviter = e.inviter || null;
                    r.targetType = e.targetType || null;
                    r.targetUser = e.targetUser || null;
                    r.targetApplication = e.targetApplication || null;
                    r.type = e.type || null;
                    r.flags = e.flags || 0;
                    return r
                }
                var r = t.prototype;
                r.isExpired = function() {
                    var e = this.maxAge;
                    if (e > 0) {
                        if (o()(this.createdAt).add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                };
                r.getExpiresAt = function() {
                    if (this.maxAge > 0) {
                        return o()(this.createdAt).add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                };
                r.toString = function() {
                    return this.code
                };
                t.createFromServer = function(e) {
                    var n;
                    return new t(a(function(e) {
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
                    }({}, e), {
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: o()(null !== (n = e.created_at) && void 0 !== n ? n : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    }))
                };
                return t
            }(i.Z)
        }
    }
]);