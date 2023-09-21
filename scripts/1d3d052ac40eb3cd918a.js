"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [73177], {
        496916: (n, e, t) => {
            t.d(e, {
                In: () => p,
                U6: () => _,
                y5: () => v,
                iV: () => g,
                CZ: () => h,
                jT: () => b,
                Ju: () => O,
                FT: () => y
            });
            var r = t(842227),
                i = t(744564),
                o = t(18882),
                l = t(382060),
                u = t(61209),
                a = t(877475),
                c = t(473903),
                s = t(2590);

            function d(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function f(n) {
                return function(n) {
                    if (Array.isArray(n)) return d(n)
                }(n) || function(n) {
                    if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || function(n, e) {
                    if (!n) return;
                    if ("string" == typeof n) return d(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return d(n, e)
                }(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    o = arguments.length > 4 ? arguments[4] : void 0;
                i.Z.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: n,
                    messageId: r,
                    immediate: e,
                    force: t,
                    context: s.e3s,
                    location: o
                })
            }

            function _(n) {
                n.isCategory() ? function(n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = u.Z.getChannel(n);
                    if (null != r && null != r.guild_id) {
                        var i = a.Z.getCategories(r.guild_id);
                        if (null != i[n]) {
                            var c = i[n].filter((function(n) {
                                    var e = n.channel;
                                    return (0, l.vc)(e.type)
                                })).map((function(n) {
                                    return n.channel.id
                                })),
                                s = f(c);
                            c.forEach((function(n) {
                                var e = o.Z.getActiveJoinedThreadsForParent(r.guild_id, n);
                                for (var t in e) s.push(t)
                            }));
                            var d = !0,
                                _ = !1,
                                v = void 0;
                            try {
                                for (var g, h = s[Symbol.iterator](); !(d = (g = h.next()).done); d = !0) {
                                    p(g.value, e, t)
                                }
                            } catch (n) {
                                _ = !0;
                                v = n
                            } finally {
                                try {
                                    d || null == h.return || h.return()
                                } finally {
                                    if (_) throw v
                                }
                            }
                        }
                    }
                }(n.id, !0, !0) : n.isForumLikeChannel() ? p(n.id, !0, !0, r.default.fromTimestamp(Date.now())) : p(n.id, !0, !0)
            }

            function v(n) {
                i.Z.dispatch({
                    type: "BULK_ACK",
                    channels: n,
                    context: s.e3s
                })
            }

            function g(n) {
                i.Z.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: n
                })
            }

            function h(n, e) {
                i.Z.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: n,
                    windowId: e
                })
            }

            function b(n, e) {
                i.Z.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: n,
                    windowId: e
                })
            }

            function O(n, e, t) {
                i.Z.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: n,
                    ackType: e,
                    ackedId: t,
                    local: !1
                })
            }

            function y(n, e) {
                var t;
                null != (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && i.Z.dispatch({
                    type: "USER_NON_CHANNEL_ACK",
                    ackType: n,
                    ackedId: e,
                    local: !1
                })
            }
        },
        914716: (n, e, t) => {
            t.d(e, {
                Z: () => l
            });
            t(701456);
            var r = t(744564);

            function i(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function o(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    var t = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            l = !0,
                            u = !1;
                        try {
                            for (t = t.call(n); !(l = (r = t.next()).done); l = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (n) {
                            u = !0;
                            i = n
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(n, e) || function(n, e) {
                    if (!n) return;
                    if ("string" == typeof n) return i(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return i(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var l = function() {
                function n() {
                    ! function(n, e) {
                        if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    this.initializedCount = 0;
                    this.actions = {};
                    this.stores = new Map
                }
                var e = n.prototype;
                e.initialize = function() {
                    this.initializedCount++;
                    if (!(this.initializedCount > 1)) {
                        this._initialize();
                        Object.entries(this.actions).forEach((function(n) {
                            var e = o(n, 2),
                                t = e[0],
                                i = e[1];
                            r.Z.subscribe(t, "function" == typeof i ? i : i.callback)
                        }));
                        this.stores.forEach((function(n, e) {
                            e.addChangeListener(n);
                            n()
                        }))
                    }
                };
                e.terminate = function(n) {
                    if (!(this.initializedCount <= 0)) {
                        n ? this.initializedCount = 0 : this.initializedCount--;
                        if (0 === this.initializedCount) {
                            this._terminate();
                            Object.entries(this.actions).forEach((function(n) {
                                var e = o(n, 2),
                                    t = e[0],
                                    i = e[1];
                                r.Z.unsubscribe(t, "function" == typeof i ? i : i.callback)
                            }))
                        }
                    }
                };
                e._initialize = function() {};
                e._terminate = function() {};
                return n
            }()
        },
        777158: (n, e, t) => {
            t.d(e, {
                Z: () => o
            });
            var r = t(496486),
                i = t.n(r);

            function o(n, e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
                    return !0
                };
                return i()(n).map((function(n) {
                    return "null" === n.channel.id ? e[n.channel.id] : [n, e[n.channel.id]]
                })).flattenDeep().filter(t).value()
            }
        },
        648195: (n, e, t) => {
            t.d(e, {
                e: () => a
            });
            var r = t(281110),
                i = t(744564),
                o = t(189651),
                l = t(861426),
                u = t(2590);

            function a(n, e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!l.Z.isFullServerPreview(n)) {
                    i.Z.dispatch({
                        type: "GUILD_MEMBER_UPDATE_LOCAL",
                        guildId: n,
                        roles: e.roles,
                        flags: e.flags
                    });
                    return r.ZP.patch({
                        url: u.ANM.SET_GUILD_MEMBER(n),
                        body: e,
                        oldFormErrors: !!t || void 0
                    })
                }(0, o.aq)(n, {
                    memberOptions: e
                })
            }
        },
        47635: (n, e, t) => {
            t.d(e, {
                Z: () => j
            });
            var r = t(496486),
                i = t.n(r),
                o = t(842227),
                l = t(281110),
                u = t(744564),
                a = t(496916),
                c = t(396043),
                s = t(648195),
                d = t(189651),
                f = t(861426),
                p = t(347834),
                _ = t(61209),
                v = t(21372),
                g = t(473903),
                h = t(652591),
                b = t(661123),
                O = t(72580),
                y = t(22176),
                E = t(404741),
                m = t(185219),
                S = t(457586),
                I = t(2590),
                P = t(589677),
                A = t(290679);

            function N(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function T(n, e, t, r, i, o, l) {
                try {
                    var u = n[o](l),
                        a = u.value
                } catch (n) {
                    t(n);
                    return
                }
                u.done ? e(a) : Promise.resolve(a).then(r, i)
            }

            function D(n, e, t) {
                e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t;
                return n
            }

            function C(n, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : function(n, e) {
                    var t = Object.keys(n);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(n);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(e)).forEach((function(t) {
                    Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
                }));
                return n
            }

            function w(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    var t = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            l = !0,
                            u = !1;
                        try {
                            for (t = t.call(n); !(l = (r = t.next()).done); l = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (n) {
                            u = !0;
                            i = n
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(n, e) || L(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function R(n) {
                return function(n) {
                    if (Array.isArray(n)) return N(n)
                }(n) || function(n) {
                    if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || L(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function L(n, e) {
                if (n) {
                    if ("string" == typeof n) return N(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? N(n, e) : void 0
                }
            }
            var U = function(n, e) {
                var t, r, i, o, l = {
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
                            for (; l;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = e.call(n, l)
                            } catch (n) {
                                o = [6, n];
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

            function Z(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!f.Z.isFullServerPreview(n)) {
                    var t = e ? E.Z.getOnboardingPromptsForOnboarding(n) : E.Z.getOnboardingPrompts(n),
                        r = E.Z.getOnboardingResponses(n),
                        i = t.map((function(n) {
                            return n.options.filter((function(n) {
                                return r.includes(n.id)
                            }))
                        })).flat(),
                        o = {},
                        a = {};
                    t.forEach((function(n) {
                        o[n.id] = Date.now();
                        n.options.forEach((function(n) {
                            return a[n.id] = Date.now()
                        }))
                    }));
                    return e ? l.ZP.post({
                        url: I.ANM.GUILD_ONBOARDING_RESPONSES(n),
                        body: {
                            onboarding_responses: i.map((function(n) {
                                return n.id
                            })),
                            onboarding_prompts_seen: o,
                            onboarding_responses_seen: a
                        }
                    }).then((function(e) {
                        null != e.body && u.Z.dispatch({
                            type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                            guildId: n,
                            options: e.body.onboarding_responses,
                            prompts_seen: e.body.onboarding_prompts_seen,
                            options_seen: e.body.onboarding_responses_seen
                        })
                    })).catch((function(n) {
                        return y.Z.captureException(n)
                    })) : l.ZP.put({
                        url: I.ANM.GUILD_ONBOARDING_RESPONSES(n),
                        body: {
                            onboarding_responses: i.map((function(n) {
                                return n.id
                            })),
                            onboarding_prompts_seen: o,
                            onboarding_responses_seen: a
                        }
                    }).then((function(e) {
                        null != e.body && u.Z.dispatch({
                            type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                            guildId: n,
                            options: e.body.onboarding_responses,
                            prompts_seen: e.body.onboarding_prompts_seen,
                            options_seen: e.body.onboarding_responses_seen
                        })
                    })).catch((function(n) {
                        return y.Z.captureException(n)
                    }))
                }
            }
            const j = {
                selectOption: function(n, e, t, r) {
                    var o = E.Z.getOnboardingPrompt(e);
                    if (null != o) {
                        var l = o.singleSelect ? i().without(i().map(o.options, "id"), t) : [];
                        u.Z.dispatch({
                            type: "GUILD_ONBOARDING_SELECT_OPTION",
                            guildId: n,
                            promptId: e,
                            optionId: t,
                            selected: r,
                            removedOptionIds: l
                        })
                    }
                },
                updateOnboardingResponses: i().debounce(Z, 1e3),
                updateRolesLocal: function(n, e, t) {
                    var r, o, l = null !== (o = null === (r = v.ZP.getSelfMember(n)) || void 0 === r ? void 0 : r.roles) && void 0 !== o ? o : [];
                    f.Z.isViewingRoles(n) ? (0, d.og)(n, i().difference(i().union(l, e), t)) : (e.length > 0 || t.length > 0) && u.Z.dispatch({
                        type: "GUILD_MEMBER_UPDATE_LOCAL",
                        guildId: n,
                        roles: i().difference(i().union(l, e), t),
                        addedRoleIds: e,
                        removedRoleIds: t
                    })
                },
                completeOnboarding: function(n, e) {
                    var t = e.length > 0 ? e[e.length - 1] : null,
                        r = E.Z.getSelectedOptions(n),
                        i = (0, m.L6)(r),
                        l = (0, m.dX)(r),
                        u = E.Z.getEnabled(n) ? E.Z.getDefaultChannelIds(n) : [],
                        s = w((0, m.Ee)(n, e, u), 2),
                        p = s[0],
                        y = s[1],
                        N = R(l).concat(R(u)),
                        T = N.map((function(n) {
                            return _.Z.getChannel(n)
                        })).filter(O.lm),
                        L = (0, S.v)(n, new Set(N), T, !0).length,
                        U = null == t ? [] : t.options.map((function(n) {
                            return n.id
                        }));
                    h.default.track(I.rMx.GUILD_ONBOARDING_STEP_COMPLETED, C(function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                                return Object.getOwnPropertyDescriptor(t, n).enumerable
                            }))));
                            r.forEach((function(e) {
                                D(n, e, t[e])
                            }))
                        }
                        return n
                    }({}, (0, c.hH)(n)), {
                        step: e.length - 1,
                        options_selected: null == t ? 0 : r.filter((function(n) {
                            return U.includes(n.id)
                        })).length,
                        skipped: U.length > 0,
                        back: !1,
                        in_onboarding: !0,
                        is_final_step: !0,
                        roles_granted: i.size,
                        channels_granted: L,
                        guild_onboarding_covered_channel_ids: p.map((function(n) {
                            return n.id
                        })),
                        guild_onboarding_uncovered_channel_ids: y.map((function(n) {
                            return n.id
                        }))
                    }));
                    (0, a.Ju)(n, A.W.GUILD_ONBOARDING_QUESTION, o.default.fromTimestamp(Date.now()));
                    Z(n, !0);
                    if (f.Z.isFullServerPreview(n)) {
                        (0, d.zS)(n, N, []);
                        (0, d.aq)(n, {
                            optInEnabled: !0
                        });
                        (0, d.og)(n, Array.from(i));
                        var j = g.default.getCurrentUser();
                        if (null != j) {
                            var G, M, F = null !== (M = null === (G = v.ZP.getMember(n, j.id)) || void 0 === G ? void 0 : G.flags) && void 0 !== M ? M : 0;
                            (0, d.aq)(n, {
                                memberOptions: {
                                    flags: (0, b.mB)(F, P.q.COMPLETED_ONBOARDING, !0)
                                }
                            })
                        }
                    }
                },
                onboardExistingMember: function(n, e) {
                    var t = new Set(e);
                    (E.Z.getEnabled(n) ? E.Z.getDefaultChannelIds(n) : []).forEach((function(n) {
                        return t.add(n)
                    }));
                    t.size > 0 && (0, p.Mo)(n, Array.from(t), !0, {
                        page: I.ZY5.GUILD_ONBOARDING
                    })
                },
                finishOnboarding: function(n) {
                    u.Z.dispatch({
                        type: "GUILD_ONBOARDING_COMPLETE",
                        guildId: n
                    })
                },
                setUserOnboardingStep: function(n, e) {
                    u.Z.dispatch({
                        type: "GUILD_ONBOARDING_SET_STEP",
                        guildId: n,
                        step: e
                    })
                },
                resetOnboarding: function(n) {
                    return (e = function() {
                        var e, t, r, i;
                        return U(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    if (null == (e = g.default.getCurrentUser())) return [3, 2];
                                    i = null !== (r = null === (t = v.ZP.getMember(n, e.id)) || void 0 === t ? void 0 : t.flags) && void 0 !== r ? r : 0;
                                    return [4, (0, s.e)(n, {
                                        flags: (0, b.mB)(i, P.q.COMPLETED_ONBOARDING, !1)
                                    })];
                                case 1:
                                    o.sent();
                                    o.label = 2;
                                case 2:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var n = this,
                            t = arguments;
                        return new Promise((function(r, i) {
                            var o = e.apply(n, t);

                            function l(n) {
                                T(o, r, i, l, u, "next", n)
                            }

                            function u(n) {
                                T(o, r, i, l, u, "throw", n)
                            }
                            l(void 0)
                        }))
                    })();
                    var e
                }
            }
        },
        888236: (n, e, t) => {
            t.d(e, {
                rj: () => E,
                eM: () => m,
                rK: () => S,
                I1: () => P
            });
            var r = t(281110),
                i = t(744564),
                o = t(396043),
                l = t(664625),
                u = t(21372),
                a = t(567403),
                c = t(652591),
                s = t(661123),
                d = t(404741),
                f = t(322008),
                p = t(2590),
                _ = t(589677);

            function v(n, e, t, r, i, o, l) {
                try {
                    var u = n[o](l),
                        a = u.value
                } catch (n) {
                    t(n);
                    return
                }
                u.done ? e(a) : Promise.resolve(a).then(r, i)
            }

            function g(n) {
                return function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = n.apply(e, t);

                        function l(n) {
                            v(o, r, i, l, u, "next", n)
                        }

                        function u(n) {
                            v(o, r, i, l, u, "throw", n)
                        }
                        l(void 0)
                    }))
                }
            }

            function h(n, e, t) {
                e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t;
                return n
            }

            function b(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))));
                    r.forEach((function(e) {
                        h(n, e, t[e])
                    }))
                }
                return n
            }

            function O(n, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : function(n, e) {
                    var t = Object.keys(n);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(n);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(e)).forEach((function(t) {
                    Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
                }));
                return n
            }
            var y = function(n, e) {
                var t, r, i, o, l = {
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
                            for (; l;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = e.call(n, l)
                            } catch (n) {
                                o = [6, n];
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

            function E(n) {
                c.default.track(p.rMx.GUILD_ONBOARDING_LOADED, O(b({}, (0, o.hH)(n)), {
                    has_new_prompts: !1,
                    number_of_prompts: 0
                }))
            }

            function m(n) {
                i.Z.dispatch({
                    type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
                    guildId: n
                });
                return r.ZP.get({
                    url: p.ANM.GUILD_ONBOARDING(n)
                }).then((function(e) {
                    var t = e.body,
                        r = (0, f.cf)(t);
                    return i.Z.dispatch(b({
                        type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
                        guildId: n
                    }, r)).then((function() {
                        return r.prompts
                    }))
                }), (function(e) {
                    i.Z.dispatch({
                        type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
                        guildId: n
                    });
                    return e
                }))
            }

            function S(n) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = g((function(n) {
                    var e, t, r, i, o, c, f, v;
                    return y(this, (function(g) {
                        switch (g.label) {
                            case 0:
                                t = l.default.getId();
                                i = (0, s.yE)(null !== (r = null === (e = u.ZP.getMember(n, t)) || void 0 === e ? void 0 : e.flags) && void 0 !== r ? r : 0, _.q.COMPLETED_ONBOARDING);
                                if (null == (o = a.Z.getGuild(n)) || !o.hasFeature(p.oNc.GUILD_ONBOARDING)) return [2, Promise.resolve()];
                                c = d.Z.shouldFetchPrompts(n);
                                f = d.Z.getOnboardingPrompts(n);
                                if (!c && f.length > 0) {
                                    if (f.every((function(n) {
                                            return !n.inOnboarding
                                        }))) {
                                        A(n);
                                        return [2, Promise.resolve()]
                                    }
                                    i || P(n);
                                    return [2, Promise.resolve()]
                                }
                                return [4, m(n)];
                            case 1:
                                v = g.sent();
                                if (Array.isArray(v) && v.every((function(n) {
                                        return !n.inOnboarding
                                    }))) {
                                    A(n);
                                    return [2, Promise.resolve()]
                                }
                                i || P(n);
                                return [2, v]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function P(n) {
                i.Z.dispatch({
                    type: "GUILD_ONBOARDING_START",
                    guildId: n
                })
            }

            function A(n) {
                c.default.track(p.rMx.GUILD_ONBOARDING_STEP_VIEWED, O(b({}, (0, o.hH)(n)), {
                    step: -2,
                    required: !0
                }));
                c.default.track(p.rMx.GUILD_ONBOARDING_STEP_COMPLETED, O(b({}, (0, o.hH)(n)), {
                    step: -2,
                    skipped: !1,
                    is_final_step: !0,
                    in_onboarding: !0
                }))
            }
        },
        322008: (n, e, t) => {
            t.d(e, {
                iU: () => s,
                NE: () => d,
                NO: () => f,
                YW: () => p,
                M$: () => _,
                qm: () => v,
                b3: () => g,
                md: () => h,
                X: () => b,
                fY: () => O,
                l7: () => u,
                FN: () => a,
                Un: () => c,
                RF: () => y,
                ae: () => E,
                yZ: () => m,
                dr: () => S,
                cf: () => P,
                Oq: () => A
            });
            var r = t(110251),
                i = t.n(r),
                o = t(473708);

            function l(n, e) {
                if (null == n) return {};
                var t, r, i = function(n, e) {
                    if (null == n) return {};
                    var t, r, i = {},
                        o = Object.keys(n);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        e.indexOf(t) >= 0 || (i[t] = n[t])
                    }
                    return i
                }(n, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(n);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (i[t] = n[t])
                    }
                }
                return i
            }
            var u, a, c, s = 100,
                d = 50,
                f = 100,
                p = 15,
                _ = 12,
                v = 50,
                g = 4,
                h = 7,
                b = 5,
                O = 13;
            ! function(n) {
                n[n.CUSTOMIZE = 0] = "CUSTOMIZE";
                n[n.BROWSE = 1] = "BROWSE"
            }(u || (u = {}));
            ! function(n) {
                n[n.MULTIPLE_CHOICE = 0] = "MULTIPLE_CHOICE";
                n[n.DROPDOWN = 1] = "DROPDOWN"
            }(a || (a = {}));
            ! function(n) {
                n[n.ONBOARDING_DEFAULT = 0] = "ONBOARDING_DEFAULT";
                n[n.ONBOARDING_ADVANCED = 1] = "ONBOARDING_ADVANCED"
            }(c || (c = {}));

            function y(n) {
                if (n.options.length > 0) return !1;
                var e = E(),
                    t = (e.id, l(e, ["id"])),
                    r = (n.id, l(n, ["id"]));
                return i()(t, r)
            }

            function E() {
                return {
                    id: String(Date.now()),
                    title: o.Z.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE,
                    options: [],
                    singleSelect: !1,
                    required: !1,
                    inOnboarding: !0,
                    type: a.MULTIPLE_CHOICE
                }
            }

            function m(n) {
                return {
                    id: String(Date.now()),
                    title: "",
                    options: [],
                    singleSelect: !1,
                    required: !1,
                    inOnboarding: n,
                    type: a.MULTIPLE_CHOICE
                }
            }

            function S(n) {
                return {
                    id: n.id,
                    options: n.options.map((function(n) {
                        var e, t, r;
                        return {
                            id: n.id,
                            channel_ids: n.channelIds,
                            role_ids: n.roleIds,
                            emoji: n.emoji,
                            emoji_id: null === (e = n.emoji) || void 0 === e ? void 0 : e.id,
                            emoji_name: null === (t = n.emoji) || void 0 === t ? void 0 : t.name,
                            emoji_animated: null === (r = n.emoji) || void 0 === r ? void 0 : r.animated,
                            title: n.title,
                            description: n.description
                        }
                    })),
                    title: n.title,
                    single_select: n.singleSelect,
                    disabled: n.disabled,
                    required: n.required,
                    in_onboarding: n.inOnboarding,
                    type: n.type
                }
            }

            function I(n) {
                var e;
                return {
                    id: n.id,
                    options: n.options.map((function(n) {
                        return {
                            id: n.id,
                            channelIds: n.channel_ids,
                            roleIds: n.role_ids,
                            emoji: n.emoji,
                            title: n.title,
                            description: null !== (e = n.description) && void 0 !== e ? e : ""
                        }
                    })),
                    title: n.title,
                    singleSelect: n.single_select,
                    disabled: n.disabled,
                    required: n.required,
                    inOnboarding: n.in_onboarding,
                    type: n.type
                }
            }

            function P(n) {
                var e, t, r;
                return {
                    prompts: n.prompts.map(I),
                    defaultChannelIds: n.default_channel_ids,
                    responses: null !== (e = n.responses) && void 0 !== e ? e : [],
                    mode: n.mode,
                    enabled: n.enabled,
                    onboardingPromptsSeen: null !== (t = n.onboarding_prompts_seen) && void 0 !== t ? t : {},
                    onboardingResponsesSeen: null !== (r = n.onboarding_responses_seen) && void 0 !== r ? r : {},
                    belowRequirements: n.below_requirements
                }
            }

            function A(n) {
                return null == n || null == n.id && null == n.name
            }
        },
        404741: (n, e, t) => {
            t.d(e, {
                Z: () => U
            });
            var r = t(496486),
                i = t.n(r),
                o = t(202351),
                l = t(744564),
                u = t(861426),
                a = t(61209),
                c = t(53452),
                s = t(102921),
                d = t(734260),
                f = t(189827),
                p = t(322008);

            function _(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function v(n, e, t) {
                e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t;
                return n
            }

            function g(n) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                    return n.__proto__ || Object.getPrototypeOf(n)
                };
                return g(n)
            }

            function h(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))));
                    r.forEach((function(e) {
                        v(n, e, t[e])
                    }))
                }
                return n
            }

            function b(n, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : function(n, e) {
                    var t = Object.keys(n);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(n);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(e)).forEach((function(t) {
                    Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
                }));
                return n
            }

            function O(n, e) {
                return !e || "object" !== E(e) && "function" != typeof e ? function(n) {
                    if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return n
                }(n) : e
            }

            function y(n, e) {
                y = Object.setPrototypeOf || function(n, e) {
                    n.__proto__ = e;
                    return n
                };
                return y(n, e)
            }
            var E = function(n) {
                return n && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n
            };

            function m(n) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (n) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = g(n);
                    if (e) {
                        var i = g(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return O(this, t)
                }
            }
            var S = {},
                I = {},
                P = {},
                A = !1;

            function N(n, e, t) {
                return n.map((function(n) {
                    return function(n, e, t) {
                        for (var r = !1, i = [], o = 0; o < n.options.length; o++) {
                            var l = n.options[o],
                                u = null == t[l.id];
                            u && (r = !0);
                            i.push(b(h({}, l), {
                                isUnseen: u
                            }))
                        }
                        return b(h({}, n), {
                            options: i,
                            hasNewAnswers: r,
                            isNew: null == e[n.id]
                        })
                    }(n, e, t)
                }))
            }

            function T(n) {
                var e, t, r, i, o, l, u, a, c, s = n.guildId,
                    d = n.updates,
                    f = null !== (o = null !== (i = d.onboardingPromptsSeen) && void 0 !== i ? i : null === (e = S[s]) || void 0 === e ? void 0 : e.onboardingPromptsSeen) && void 0 !== o ? o : {},
                    p = null !== (u = null !== (l = d.onboardingResponsesSeen) && void 0 !== l ? l : null === (t = S[s]) || void 0 === t ? void 0 : t.onboardingResponsesSeen) && void 0 !== u ? u : {},
                    _ = N(null !== (c = null !== (a = d.prompts) && void 0 !== a ? a : null === (r = S[s]) || void 0 === r ? void 0 : r.prompts) && void 0 !== c ? c : [], f, p);
                S[s] = b(h({}, S[s], d), {
                    prompts: _
                })
            }

            function D(n, e) {
                if (null != I[n]) {
                    var t = {};
                    Object.keys(I[n]).forEach((function(r) {
                        !e.includes(r) && I[n][r] ? t[r] = !0 : e.includes(r) && !1 === I[n][r] && (t[r] = !1)
                    }));
                    I[n] = t;
                    var r = e.filter((function(n) {
                        return null == t[n] || !0 === t[n]
                    }));
                    Object.keys(t).forEach((function(n) {
                        !0 !== t[n] || e.includes(n) || r.push(n)
                    }));
                    S[n] = b(h({}, S[n]), {
                        responses: r
                    })
                }
            }
            var C = [],
                w = [],
                R = [],
                L = function(n) {
                    ! function(n, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        n.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: n,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        e && y(n, e)
                    }(t, n);
                    var e = m(t);

                    function t() {
                        _(this, t);
                        return e.apply(this, arguments)
                    }
                    var r = t.prototype;
                    r.initialize = function() {
                        this.waitFor(a.Z, f.ZP, u.Z)
                    };
                    r.getOnboardingPromptsForOnboarding = function(n) {
                        var e, t;
                        return null !== (t = null === (e = S[n]) || void 0 === e ? void 0 : e.onboardingPrompts) && void 0 !== t ? t : C
                    };
                    r.getOnboardingPrompts = function(n) {
                        var e, t;
                        return null !== (t = null === (e = S[n]) || void 0 === e ? void 0 : e.prompts) && void 0 !== t ? t : C
                    };
                    r.getOnboardingResponses = function(n) {
                        var e, t;
                        if (u.Z.isFullServerPreview(n)) {
                            var r;
                            return Array.from(null !== (r = u.Z.getOnboardingResponses(n)) && void 0 !== r ? r : w)
                        }
                        return null !== (t = null === (e = S[n]) || void 0 === e ? void 0 : e.responses) && void 0 !== t ? t : w
                    };
                    r.getSelectedOptions = function(n) {
                        var e = this.getOnboardingResponses(n);
                        return this.getOnboardingPrompts(n).map((function(n) {
                            return n.options
                        })).flat().filter((function(n) {
                            return e.includes(n.id)
                        }))
                    };
                    r.getOnboardingResponsesForPrompt = function(n, e) {
                        var t = S[n];
                        if (null == t) return w;
                        var r = t.prompts.find((function(n) {
                            return n.id === e
                        }));
                        return null == r ? w : i().intersection(r.options.map((function(n) {
                            return n.id
                        })), this.getOnboardingResponses(n))
                    };
                    r.getEnabledOnboardingPrompts = function(n) {
                        var e, t = S[n];
                        if (u.Z.isFullServerPreview(n)) {
                            var r;
                            return null !== (r = null == t ? void 0 : t.prompts) && void 0 !== r ? r : C
                        }
                        return null != t && t.enabled && null !== (e = t.prompts) && void 0 !== e ? e : C
                    };
                    r.getDefaultChannelIds = function(n) {
                        var e, t;
                        return null !== (t = null === (e = S[n]) || void 0 === e ? void 0 : e.defaultChannelIds) && void 0 !== t ? t : R
                    };
                    r.getEnabled = function(n) {
                        var e, t;
                        return u.Z.isFullServerPreview(n) ? null != S[n] : null !== (t = null === (e = S[n]) || void 0 === e ? void 0 : e.enabled) && void 0 !== t && t
                    };
                    r.getOnboardingPrompt = function(n) {
                        return Object.values(S).map((function(n) {
                            return n.prompts
                        })).flat().find((function(e) {
                            return e.id === n
                        }))
                    };
                    r.isLoading = function() {
                        return A
                    };
                    r.shouldFetchPrompts = function(n) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Z.Millis.HOUR;
                        if (A) return !1;
                        var t = P[n];
                        return null == t || Date.now() - t > e
                    };
                    r.getPendingResponseOptions = function(n) {
                        return I[n]
                    };
                    r.ackIdForGuild = function(n) {
                        var e = this.getEnabledOnboardingPrompts(n),
                            t = "0";
                        e.forEach((function(n) {
                            n.options.forEach((function(n) {
                                s.Z.compare(n.id, t) > 0 && (t = n.id)
                            }));
                            s.Z.compare(n.id, t) > 0 && (t = n.id)
                        }));
                        return t
                    };
                    r.lastFetchedAt = function(n) {
                        return P[n]
                    };
                    r.isAdvancedMode = function(n) {
                        var e;
                        return null != n && (null === (e = S[n]) || void 0 === e ? void 0 : e.mode) === p.Un.ONBOARDING_ADVANCED
                    };
                    r.__getLocalVars = function() {
                        return {
                            onboardingByGuildId: S,
                            pendingOptionChanges: I,
                            lastFetchedAtByGuildId: P,
                            loading: A,
                            EMPTY_PROMPTS: C,
                            EMPTY_RESPONSES: w,
                            EMPTY_DEFAULT_CHANNEL_IDS: R
                        }
                    };
                    return t
                }(o.ZP.Store);
            L.displayName = "GuildOnboardingPromptsStore";
            const U = new L(l.Z, {
                CONNECTION_OPEN: function() {
                    A = !1;
                    S = {}
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_START: function() {
                    A = !0
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function(n) {
                    var e = n.guildId,
                        t = n.prompts,
                        r = n.defaultChannelIds,
                        i = n.enabled,
                        o = n.responses,
                        l = n.onboardingPromptsSeen,
                        u = n.onboardingResponsesSeen,
                        a = n.mode,
                        c = n.belowRequirements;
                    A = !1;
                    var s = f.ZP.getOnboardingStatus(e) === f.uX.READY,
                        p = N(t, l, u);
                    S[e] = {
                        enabled: i,
                        mode: a,
                        belowRequirements: c,
                        prompts: p,
                        onboardingPrompts: p.filter((function(n) {
                            return n.inOnboarding
                        })),
                        defaultChannelIds: r.filter((function(n) {
                            return (0, d.s)(e, n)
                        })),
                        responses: s ? [] : o,
                        onboardingPromptsSeen: l,
                        onboardingResponsesSeen: u
                    };
                    s || D(e, o);
                    P[e] = Date.now()
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function() {
                    A = !1
                },
                GUILD_ONBOARDING_SELECT_OPTION: function(n) {
                    var e = n.guildId,
                        t = n.optionId,
                        r = n.selected,
                        o = n.removedOptionIds;
                    if (u.Z.isFullServerPreview(e)) return !0;
                    if (null == S[e]) return !1;
                    null != o && o.length > 0 && i().pullAll(S[e].responses, o);
                    r ? S[e].responses.push(t) : i().pull(S[e].responses, t);
                    null == I[e] && (I[e] = {});
                    I[e][t] = r;
                    null != o && o.forEach((function(n) {
                        return I[e][n] = !1
                    }));
                    I[e] = h({}, I[e]);
                    return !0
                },
                GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function(n) {
                    var e = n.guildId,
                        t = n.options,
                        r = n.prompts_seen,
                        i = n.options_seen;
                    D(e, t);
                    var o = S[e];
                    if (null == o) return !1;
                    var l = N(o.prompts, r, i);
                    S[e] = b(h({}, o), {
                        prompts: l,
                        onboardingPrompts: l.filter((function(n) {
                            return n.inOnboarding
                        })),
                        onboardingPromptsSeen: r,
                        onboardingResponsesSeen: i
                    })
                },
                GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: T,
                GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: T,
                GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function(n) {
                    var e = n.guildId,
                        t = n.channelIds;
                    S[e] = b(h({}, S[e]), {
                        defaultChannelIds: t
                    })
                },
                GUILD_SETTINGS_ONBOARDING_SET_MODE: function(n) {
                    var e = n.guildId,
                        t = n.mode,
                        r = S[e];
                    null != r && (r.mode = t)
                }
            })
        },
        788533: (n, e, t) => {
            t.r(e);
            t.d(e, {
                default: () => E,
                discardOnboardingPromise: () => y,
                isOnboardingActiveForGuild: () => I,
                openAndWaitForOnboarding: () => S
            });
            var r = t(441143),
                i = t.n(r),
                o = t(882723),
                l = t(327499),
                u = t(784426),
                a = t(47635),
                c = t(888236),
                s = t(189827),
                d = t(21372),
                f = t(661123),
                p = t(589677);
            var _ = t(2590),
                v = t(897196);

            function g(n, e, t, r, i, o, l) {
                try {
                    var u = n[o](l),
                        a = u.value
                } catch (n) {
                    t(n);
                    return
                }
                u.done ? e(a) : Promise.resolve(a).then(r, i)
            }

            function h(n) {
                return function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = n.apply(e, t);

                        function l(n) {
                            g(o, r, i, l, u, "next", n)
                        }

                        function u(n) {
                            g(o, r, i, l, u, "throw", n)
                        }
                        l(void 0)
                    }))
                }
            }
            var b = function(n, e) {
                    var t, r, i, o, l = {
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
                                for (; l;) try {
                                    if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                l.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && l.label < i[1]) {
                                                l.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2];
                                                l.ops.push(o);
                                                break
                                            }
                                            i[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    o = e.call(n, l)
                                } catch (n) {
                                    o = [6, n];
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
                O = {};

            function y(n) {
                O[n] = null
            }

            function E(n) {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = h((function(n) {
                    var e, t, r, a, d;
                    return b(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                e = n.guildId, t = n.returnChannelId, r = n.isPreview, a = void 0 !== r && r;
                                (0, o.closeAllModals)();
                                i()(null == O[e], "should not double-join guilds");
                                return [4, (0, l.V)(e)];
                            case 1:
                                if (!(d = f.sent()).hasFeature(_.oNc.COMMUNITY)) return [2];
                                if (!a) return [3, 2];
                                (0, c.I1)(e);
                                return [3, 4];
                            case 2:
                                return d.hasFeature(_.oNc.GUILD_ONBOARDING) ? [4, (0, c.rK)(e)] : [2];
                            case 3:
                                f.sent();
                                f.label = 4;
                            case 4:
                                return s.ZP.shouldShowOnboarding(e) ? [4, S(e)] : [3, 6];
                            case 5:
                                f.sent();
                                null != t && (0, u.uL)(_.Z5c.CHANNEL(e, t));
                                f.label = 6;
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function S(n) {
                return new Promise((function(e) {
                    O[n] = e;
                    (function(n) {
                        return new Promise((function(e) {
                            d.ZP.addConditionalChangeListener((function() {
                                var t, r = d.ZP.getSelfMember(n);
                                if ((0, f.yE)(null !== (t = null == r ? void 0 : r.flags) && void 0 !== t ? t : 0, p.q.COMPLETED_ONBOARDING)) {
                                    a.Z.finishOnboarding(n);
                                    e();
                                    return !1
                                }
                                return !0
                            }))
                        }))
                    })(n).then((function() {
                        ! function(n) {
                            var e;
                            null === (e = O[n]) || void 0 === e || e.call(O);
                            O[n] = null
                        }(n);
                        a.Z.finishOnboarding(n)
                    }));
                    (0, u.uL)(_.Z5c.CHANNEL(n, v.oC.GUILD_ONBOARDING))
                }))
            }

            function I(n) {
                return null != O[n]
            }
        },
        457586: (n, e, t) => {
            t.d(e, {
                v: () => s,
                b: () => d
            });
            var r = t(496486),
                i = t.n(r),
                o = t(202351),
                l = t(61209),
                u = t(72580);

            function a(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function c(n) {
                return function(n) {
                    if (Array.isArray(n)) return a(n)
                }(n) || function(n) {
                    if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || function(n, e) {
                    if (!n) return;
                    if ("string" == typeof n) return a(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(n, e)
                }(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(n, e, t) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    o = i()(l.Z.getMutableGuildChannelsForGuild(n)).values().groupBy("parent_id").value(),
                    a = i()(t).map((function(n) {
                        return n.isCategory() ? n.id : n.parent_id
                    })).filter(u.lm).uniq().map((function(n) {
                        return l.Z.getChannel(n)
                    })).filter(u.lm).sortBy("position").value(),
                    s = new Set(a.map((function(n) {
                        return n.id
                    }))),
                    d = t.filter((function(n) {
                        return !(n.isCategory() || null != n.parent_id && s.has(n.parent_id))
                    }));
                d = i().sortBy(d, (function(n) {
                    return n.isGuildVocal() ? n.position + 1e4 : n.position
                }));
                var f = !0,
                    p = !1,
                    _ = void 0;
                try {
                    for (var v, g = function() {
                            var n, l = v.value;
                            r || d.push(l);
                            var u = e.has(l.id) ? o[l.id] : t.filter((function(n) {
                                return n.parent_id === l.id
                            }));
                            u = i().sortBy(null != u ? u : [], (function(n) {
                                return n.isGuildVocal() ? n.position + 1e4 : n.position
                            }));
                            (n = d).push.apply(n, c(u))
                        }, h = a[Symbol.iterator](); !(f = (v = h.next()).done); f = !0) g()
                } catch (n) {
                    p = !0;
                    _ = n
                } finally {
                    try {
                        f || null == h.return || h.return()
                    } finally {
                        if (p) throw _
                    }
                }
                return d
            }

            function d(n, e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = (0, o.Wu)([l.Z], (function() {
                        var r = Array.from(e).map((function(n) {
                            return l.Z.getChannel(n)
                        })).filter(u.lm);
                        return s(n, e, r, t)
                    }));
                return r
            }
        },
        347834: (n, e, t) => {
            t.d(e, {
                XQ: () => P,
                k$: () => A,
                C1: () => T,
                Mo: () => D,
                QG: () => C,
                dM: () => w,
                _U: () => L
            });
            var r = t(496486),
                i = t(418705),
                o = t(744564),
                l = t(201459),
                u = t(396043),
                a = t(189651),
                c = t(861426),
                s = t(52317),
                d = t(917019),
                f = t(61209),
                p = t(9430),
                _ = t(652591),
                v = t(661123),
                g = t(171940),
                h = t(2590),
                b = t(131559);

            function O(n, e, t, r, i, o, l) {
                try {
                    var u = n[o](l),
                        a = u.value
                } catch (n) {
                    t(n);
                    return
                }
                u.done ? e(a) : Promise.resolve(a).then(r, i)
            }

            function y(n) {
                return function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = n.apply(e, t);

                        function l(n) {
                            O(o, r, i, l, u, "next", n)
                        }

                        function u(n) {
                            O(o, r, i, l, u, "throw", n)
                        }
                        l(void 0)
                    }))
                }
            }

            function E(n, e, t) {
                e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t;
                return n
            }

            function m(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))));
                    r.forEach((function(e) {
                        E(n, e, t[e])
                    }))
                }
                return n
            }

            function S(n, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : function(n, e) {
                    var t = Object.keys(n);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(n);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(e)).forEach((function(t) {
                    Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
                }));
                return n
            }
            var I = function(n, e) {
                var t, r, i, o, l = {
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
                            for (; l;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = e.call(n, l)
                            } catch (n) {
                                o = [6, n];
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

            function P(n, e, t, r) {
                if (null != n)
                    if (c.Z.isFullServerPreview(n))(0, a.zS)(n, t ? [e] : [], t ? [] : [e]);
                    else {
                        var i = p.Z.getGuildChannelFlags(n, e);
                        t || (i = (0, v.mB)(i, b.ic.FAVORITED, !1));
                        var l = (0, g.I)(n, e),
                            d = {
                                flags: (0, v.mB)(i, b.ic.OPT_IN_ENABLED, t)
                            },
                            O = {
                                channel_overrides: E({}, e, d)
                            };
                        s.Z.saveUserGuildSettingsBulk(E({}, n, O));
                        o.Z.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: n,
                            channelId: e,
                            settings: d
                        });
                        (0, g.jz)(n, e, d, l, r);
                        R(n);
                        _.default.track(h.rMx.CHANNEL_LIST_UPDATED, S(m({}, (0, u.hH)(n), (0, u.v_)(f.Z.getChannel(e))), {
                            action_type: t ? "add" : "remove",
                            location: r
                        }))
                    }
            }

            function A(n, e, t, r) {
                if (null != n)
                    if (c.Z.isFullServerPreview(n)) {
                        (0, a.zS)(n, t ? [e] : [], t ? [] : [e]);
                        (0, a.aq)(n, {
                            optInEnabled: !0
                        })
                    } else {
                        var i = p.Z.getGuildChannelFlags(n, e);
                        t || (i = (0, v.mB)(i, b.ic.FAVORITED, !1));
                        var l = (0, g.I)(n, e),
                            d = {
                                flags: (0, v.mB)(i, b.ic.OPT_IN_ENABLED, t)
                            };
                        if (!p.Z.isOptInEnabled(n)) {
                            var O = (0, v.mB)(p.Z.getGuildFlags(n), b.vc.OPT_IN_CHANNELS_ON, !0);
                            s.Z.saveUserGuildSettingsBulk(E({}, n, {
                                channel_overrides: E({}, e, d),
                                flags: O
                            }))
                        }
                        o.Z.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: n,
                            channelId: e,
                            settings: d
                        });
                        (0, g.jz)(n, e, d, l, r);
                        R(n);
                        _.default.track(h.rMx.CHANNEL_LIST_UPDATED, S(m({}, (0, u.hH)(n), (0, u.v_)(f.Z.getChannel(e))), {
                            action_type: t ? "add" : "remove",
                            location: r
                        }))
                    }
            }

            function N() {
                return (N = y((function(n, e) {
                    var t;
                    return I(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (null == n) return [2];
                                if (c.Z.isFullServerPreview(n)) return [2];
                                t = {
                                    channel_overrides: e
                                };
                                return [4, s.Z.saveUserGuildSettingsBulk(E({}, n, t))];
                            case 1:
                                r.sent();
                                o.Z.dispatch({
                                    type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES",
                                    guildId: n,
                                    updates: e
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var T = (0, r.debounce)((function(n, e) {
                return function(n, e) {
                    return N.apply(this, arguments)
                }(n, e)
            }), 1e3);

            function D(n, e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 ? arguments[3] : void 0;
                if (null != n)
                    if (c.Z.isFullServerPreview(n)) {
                        (0, a.zS)(n, e, []);
                        t && (0, a.aq)(n, {
                            optInEnabled: !0
                        })
                    } else {
                        var i = {};
                        e.forEach((function(e) {
                            var t = p.Z.getGuildChannelFlags(n, e);
                            i[e] = {
                                flags: (0, v.mB)(t, b.ic.OPT_IN_ENABLED, !0)
                            }
                        }));
                        if (t) {
                            var o = (0, v.mB)(p.Z.getGuildFlags(n), b.vc.OPT_IN_CHANNELS_ON, !0);
                            l.Z.updateGuildAndChannelNotificationSettings(n, {
                                flags: o,
                                channel_overrides: i
                            });
                            _.default.track(h.rMx.CHANNEL_LIST_UPDATED, S(m({}, (0, u.hH)(n)), {
                                action_type: "add_many_and_enable_guild",
                                location: r
                            }))
                        } else {
                            l.Z.updateChannelOverrideSettingsBulk(n, i);
                            _.default.track(h.rMx.CHANNEL_LIST_UPDATED, S(m({}, (0, u.hH)(n)), {
                                action_type: "add_many",
                                location: r
                            }))
                        }
                    }
            }

            function C(n, e, t) {
                if (c.Z.isFullServerPreview(n))(0, a.aq)(n, {
                    optInEnabled: e
                });
                else {
                    var r = p.Z.getGuildFlags(n);
                    l.Z.updateGuildNotificationSettings(n, {
                        flags: (0, v.mB)(r, b.vc.OPT_IN_CHANNELS_ON, e)
                    });
                    _.default.track(h.rMx.CHANNEL_LIST_UPDATED, S(m({}, (0, u.hH)(n)), {
                        action_type: e ? "guild_enabled" : "guild_disabled",
                        location: t
                    }))
                }
            }

            function w(n, e, t, r) {
                if (null != n && !c.Z.isFullServerPreview(n)) {
                    var i = p.Z.getGuildChannelFlags(n, e);
                    !(0, v.yE)(i, b.ic.OPT_IN_ENABLED) && t && (i = (0, v.mB)(i, b.ic.OPT_IN_ENABLED, !0));
                    l.Z.updateChannelOverrideSettings(n, e, {
                        flags: (0, v.mB)(i, b.ic.FAVORITED, t)
                    });
                    _.default.track(h.rMx.CHANNEL_LIST_UPDATED, S(m({}, (0, u.hH)(n)), {
                        action_type: t ? "favorited" : "unfavorited",
                        location: r
                    }))
                }
            }

            function R(n) {
                (0, d.PS)(n, (function(n) {
                    if ((0, v.yE)(n.guildOnboardingProgress, i.nI.GUILD_NOTICE_CLEARED) && !(0, v.yE)(n.guildOnboardingProgress, i.nI.GUILD_NOTICE_SHOWN)) return !1;
                    n.guildOnboardingProgress = (0, v.pj)(n.guildOnboardingProgress, i.nI.GUILD_NOTICE_CLEARED);
                    n.guildOnboardingProgress = (0, v.mB)(n.guildOnboardingProgress, i.nI.GUILD_NOTICE_SHOWN, !1);
                    return !0
                }), d.fy.INFREQUENT_USER_ACTION)
            }

            function L(n, e) {
                o.Z.dispatch({
                    type: "DISMISS_FAVORITE_SUGGESTION",
                    guildId: n,
                    channelId: e
                })
            }
        },
        18882: (n, e, t) => {
            t.d(e, {
                Z: () => cn
            });
            var r = t(496486),
                i = t.n(r),
                o = t(842227),
                l = t(202351),
                u = t(744564),
                a = t(656793),
                c = t(382060),
                s = t(61209),
                d = t(567403),
                f = t(179913),
                p = t(715107),
                _ = t(536945),
                v = t(487685),
                g = t(102921);

            function h(n) {
                if (null == n.threadMetadata) return 0;
                var e = 60 * n.threadMetadata.autoArchiveDuration * 1e3;
                return function(n) {
                    if (null == n.threadMetadata) return 0;
                    var e, t = null !== (e = f.ZP.lastMessageId(n.id)) && void 0 !== e ? e : n.id,
                        r = g.Z.extractTimestamp(t),
                        i = null != n.threadMetadata.archiveTimestamp ? new Date(n.threadMetadata.archiveTimestamp).getTime() : 0;
                    return Math.max(r, i)
                }(n) + e
            }
            var b = t(897196);

            function O(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function y(n, e, t) {
                e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t;
                return n
            }

            function E(n) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                    return n.__proto__ || Object.getPrototypeOf(n)
                };
                return E(n)
            }

            function m(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))));
                    r.forEach((function(e) {
                        y(n, e, t[e])
                    }))
                }
                return n
            }

            function S(n, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : function(n, e) {
                    var t = Object.keys(n);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(n);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(e)).forEach((function(t) {
                    Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
                }));
                return n
            }

            function I(n, e) {
                return !e || "object" !== A(e) && "function" != typeof e ? function(n) {
                    if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return n
                }(n) : e
            }

            function P(n, e) {
                P = Object.setPrototypeOf || function(n, e) {
                    n.__proto__ = e;
                    return n
                };
                return P(n, e)
            }
            var A = function(n) {
                return n && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n
            };

            function N(n) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (n) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = E(n);
                    if (e) {
                        var i = E(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return I(this, t)
                }
            }
            var T = {},
                D = {},
                C = {},
                w = {},
                R = {},
                L = {},
                U = null,
                Z = {};

            function j() {
                T = {};
                R = {};
                D = {};
                C = {};
                w = {};
                U = p.Z.getChannelId();
                for (var n in Z) clearTimeout(Z[n]);
                Z = {};
                _.Z.forEachGuild((function(n) {
                    M(n)
                }));
                F()
            }

            function G(n) {
                delete T[n];
                delete R[n];
                delete D[n];
                delete C[n];
                delete w[n];
                M(n);
                for (var e in C[n]) H(n, e)
            }

            function M(n) {
                var e = _.Z.getThreadsForGuild(n);
                for (var t in e)
                    for (var r in e[t]) {
                        $(r);
                        var i = s.Z.getChannel(r);
                        if (null != i) {
                            var o = v.Z.joinTimestamp(r);
                            if (null != o) {
                                var l = {
                                        channel: i,
                                        joinTimestamp: o.getTime()
                                    },
                                    u = K(i),
                                    a = u.isUnread,
                                    c = u.isRelevant,
                                    d = u.isTimedRelevant;
                                Q(T, i, l, !1);
                                Q(R, i, c ? l : null, !1);
                                Q(D, i, a ? l : null, !1);
                                d && Y(i, !0)
                            } else {
                                Q(C, i, i, !1);
                                var p = f.ZP.isForumPostUnread(i.id);
                                Q(w, i, p ? i : null, !1)
                            }
                        }
                    }
            }

            function F() {
                L = {};
                for (var n in C)
                    for (var e in C[n]) H(n, e)
            }

            function B(n) {
                var e = s.Z.getBasicChannel(n);
                null != e && c.uC.has(e.type) && H(e.guild_id, e.id)
            }

            function H(n, e) {
                var t = s.Z.getChannel(e);
                if (null != t && t.isForumLikeChannel()) {
                    null == L[n] && (L[n] = {});
                    L[n][e] = 0;
                    if (null != C[n] && null != C[n][e]) {
                        var r = d.Z.getGuild(n);
                        if (null != r) {
                            var i = f.ZP.getTrackedAckMessageId(e);
                            if (null == i) {
                                var l = Date.now();
                                null != r.joinedAt && (r.joinedAt instanceof Date ? l = r.joinedAt.getTime() : "string" == typeof r.joinedAt && (l = new Date(r.joinedAt).getTime()));
                                i = o.default.fromTimestamp(l)
                            }
                            for (var u in C[n][e]) e === U ? f.ZP.isNewForumThread(u, e, r) && L[n][e]++ : o.default.compare(u, i) > 0 && !f.ZP.hasOpenedThread(u) && L[n][e]++
                        }
                    }
                }
            }

            function k(n, e, t) {
                if (null == e) return !1;
                var r = s.Z.getChannel(t),
                    i = v.Z.joinTimestamp(t);
                if (null != r && _.Z.isActive(n, e, t)) {
                    if (null != i) {
                        var o = {
                                channel: r,
                                joinTimestamp: i.getTime()
                            },
                            l = K(r),
                            u = l.isUnread,
                            a = l.isRelevant,
                            c = l.isTimedRelevant;
                        Q(T, r, o, !0);
                        Q(R, r, a ? o : null, !0);
                        Q(D, r, u ? o : null, !0);
                        Q(C, r, null, !0);
                        Q(w, r, null, !0);
                        Y(r, c)
                    } else {
                        var d = f.ZP.isForumPostUnread(r.id);
                        Q(T, r, null, !0);
                        Q(D, r, null, !0);
                        Q(R, r, null, !0);
                        Q(C, r, r, !0);
                        Q(w, r, d ? r : null, !0);
                        $(r.id)
                    }
                    H(n, e)
                } else {
                    X(T, n, e, t);
                    X(R, n, e, t);
                    X(D, n, e, t);
                    X(C, n, e, t);
                    X(w, n, e, t);
                    $(t);
                    H(n, e)
                }
            }

            function x(n) {
                return k(n.channel.guild_id, n.channel.parent_id, n.channel.id)
            }

            function V(n, e) {
                if (null == e) return !1;
                var t = T[n],
                    r = null == t ? null : t[e];
                if (null != r)
                    for (var i in r)
                        if (r[i].channel.isNSFW()) return !0;
                var o = C[n],
                    l = null == o ? null : o[e];
                if (null != l)
                    for (var u in l)
                        if (l[u].isNSFW()) return !0;
                return !1
            }

            function z(n) {
                var e = s.Z.getChannel(n.id);
                return !(null == e || !_.Z.isActive(n.guildId, e.parent_id, n.id)) && k(e.guild_id, e.parent_id, e.id)
            }

            function W(n) {
                var e = s.Z.getChannel(n.channelId);
                if (null == e) q();
                else {
                    var t = e.guild_id,
                        r = e.parent_id;
                    if (!c.Ec.has(e.type)) {
                        var i;
                        if (Number(null === (i = L[t]) || void 0 === i ? void 0 : i[e.id]) > 0) {
                            H(t, e.id);
                            return !0
                        }
                        return !1
                    }
                    if (null == r) return !1;
                    if (nn(T, e)) {
                        var o = K(e),
                            l = o.isUnread,
                            u = o.isRelevant;
                        Y(e, o.isTimedRelevant);
                        var a = nn(D, e),
                            d = nn(R, e);
                        if (l === a && u === d) return !1;
                        var p = T[t][r][e.id],
                            _ = u ? p : null;
                        Q(D, e, l ? p : null, !0);
                        Q(R, e, _, !0);
                        H(t, r)
                    } else {
                        var v = nn(w, e),
                            g = f.ZP.isForumPostUnread(e.id);
                        if (g === v) return !1;
                        Q(w, e, g ? e : null, !0)
                    }
                }
            }

            function q() {
                D = {};
                R = {};
                for (var n in T)
                    for (var e in T[n])
                        for (var t in T[n][e]) {
                            var r = T[n][e][t],
                                i = K(r.channel),
                                o = i.isUnread,
                                l = i.isRelevant,
                                u = i.isTimedRelevant;
                            o && Q(D, r.channel, r, !1);
                            l && Q(R, r.channel, r, !1);
                            Y(r.channel, u)
                        }
                w = {};
                for (var a in C)
                    for (var c in C[a])
                        for (var s in C[a][c]) {
                            var d = C[a][c][s];
                            f.ZP.isForumPostUnread(s) && Q(w, d, d, !1)
                        }
                F()
            }

            function J() {
                var n = U;
                if ((U = p.Z.getChannelId()) === n) return !1;
                B(n);
                B(U)
            }

            function K(n) {
                var e = f.ZP.getMentionCount(n.id) > 0,
                    t = f.ZP.hasRelevantUnread(n) && (!v.Z.isMuted(n.id) || e) || (0, a.c)() && e,
                    r = n.hasFlag(b.zZ.PINNED),
                    i = n.isActiveThread(),
                    o = i && h(n) > Date.now();
                return {
                    isUnread: (i || r) && t,
                    isRelevant: o || r || t,
                    isTimedRelevant: o
                }
            }

            function Y(n, e) {
                $(n.id);
                e && function(n) {
                    Z[n.id] = setTimeout((function() {
                        var e = s.Z.getChannel(n.id);
                        null != e && u.Z.dispatch({
                            type: "THREAD_UPDATE",
                            channel: e
                        })
                    }), h(n) - Date.now() + 1)
                }(n)
            }

            function $(n) {
                if (n in Z) {
                    clearTimeout(Z[n]);
                    delete Z[n]
                }
            }

            function Q(n, e, t, r) {
                var o = e.guild_id,
                    l = e.parent_id,
                    u = e.id;
                if (null != o && null != l && null != u) {
                    o in n || (n[o] = {});
                    l in n[o] || (n[o][l] = {});
                    r && (n[o] = S(m({}, n[o]), y({}, l, m({}, n[o][l]))));
                    if (null === t) {
                        delete n[o][l][u];
                        i().isEmpty(n[o][l]) && delete n[o][l]
                    } else n[o][l][u] = t
                }
            }

            function X(n, e, t, r) {
                if (null != e && null != t && null != r && en(n, e, t, r)) {
                    n[e] = S(m({}, n[e]), y({}, t, m({}, n[e][t])));
                    delete n[e][t][r];
                    i().isEmpty(n[e][t]) && delete n[e][t]
                }
            }

            function nn(n, e) {
                return en(n, e.guild_id, e.parent_id, e.id)
            }

            function en(n, e, t, r) {
                return e in n && t in n[e] && r in n[e][t]
            }
            var tn = {},
                rn = {},
                on = {},
                ln = {},
                un = {},
                an = function(n) {
                    ! function(n, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        n.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: n,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        e && P(n, e)
                    }(t, n);
                    var e = N(t);

                    function t() {
                        O(this, t);
                        return e.apply(this, arguments)
                    }
                    var r = t.prototype;
                    r.initialize = function() {
                        this.waitFor(_.Z, s.Z, v.Z, f.ZP);
                        this.syncWith([p.Z], J)
                    };
                    r.hasActiveJoinedUnreadThreads = function(n, e) {
                        return n in D && e in D[n]
                    };
                    r.getActiveUnjoinedThreadsForParent = function(n, e) {
                        var t;
                        return n in C && null !== (t = C[n][e]) && void 0 !== t ? t : ln
                    };
                    r.getActiveJoinedThreadsForParent = function(n, e) {
                        var t;
                        return n in T && null !== (t = T[n][e]) && void 0 !== t ? t : on
                    };
                    r.getActiveJoinedThreadsForGuild = function(n) {
                        var e;
                        return null !== (e = T[n]) && void 0 !== e ? e : tn
                    };
                    r.getActiveJoinedUnreadThreadsForGuild = function(n) {
                        var e;
                        return null !== (e = D[n]) && void 0 !== e ? e : tn
                    };
                    r.getActiveJoinedUnreadThreadsForParent = function(n, e) {
                        var t;
                        return null !== (t = this.getActiveJoinedUnreadThreadsForGuild(n)[e]) && void 0 !== t ? t : on
                    };
                    r.getActiveJoinedRelevantThreadsForGuild = function(n) {
                        var e;
                        return null !== (e = R[n]) && void 0 !== e ? e : tn
                    };
                    r.getActiveJoinedRelevantThreadsForParent = function(n, e) {
                        var t;
                        return null !== (t = this.getActiveJoinedRelevantThreadsForGuild(n)[e]) && void 0 !== t ? t : on
                    };
                    r.getActiveUnjoinedThreadsForGuild = function(n) {
                        var e;
                        return null !== (e = C[n]) && void 0 !== e ? e : rn
                    };
                    r.getActiveUnjoinedUnreadThreadsForGuild = function(n) {
                        var e;
                        return null !== (e = w[n]) && void 0 !== e ? e : tn
                    };
                    r.getActiveUnjoinedUnreadThreadsForParent = function(n, e) {
                        var t;
                        return null !== (t = this.getActiveUnjoinedUnreadThreadsForGuild(n)[e]) && void 0 !== t ? t : on
                    };
                    r.getNewThreadCountsForGuild = function(n) {
                        var e;
                        return null !== (e = L[n]) && void 0 !== e ? e : un
                    };
                    r.computeAllActiveJoinedThreads = function(n) {
                        var e = [];
                        for (var t in T)
                            if (t === n || null == n)
                                for (var r in T[t])
                                    for (var i in T[t][r]) e.push(T[t][r][i].channel);
                        return e
                    };
                    r.getNewThreadCount = function(n, e) {
                        var t, r;
                        return null !== (r = null === (t = L[n]) || void 0 === t ? void 0 : t[e]) && void 0 !== r ? r : 0
                    };
                    r.getActiveThreadCount = function(n, e) {
                        var t, r, o, l;
                        return i().size(null !== (o = null === (t = T[n]) || void 0 === t ? void 0 : t[e]) && void 0 !== o ? o : {}) + i().size(null !== (l = null === (r = C[n]) || void 0 === r ? void 0 : r[e]) && void 0 !== l ? l : {})
                    };
                    r.__getLocalVars = function() {
                        return {
                            activeJoinedThreads: T,
                            activeJoinedUnreadThreads: D,
                            activeUnjoinedThreads: C,
                            activeUnjoinedUnreadThreads: w,
                            activeJoinedRelevantThreads: R,
                            newThreadCounts: L,
                            selectedChannelId: U,
                            timers: Z,
                            NO_GUILD_UNJOINED_THREADS: rn,
                            NO_JOINED_THREADS: on,
                            NO_UNJOINED_THREADS: ln,
                            NO_NEW_THREADS: un
                        }
                    };
                    return t
                }(l.ZP.Store);
            an.displayName = "ActiveJoinedThreadsStore";
            const cn = new an(u.Z, {
                CONNECTION_OPEN: j,
                OVERLAY_INITIALIZE: j,
                THREAD_LIST_SYNC: function(n) {
                    return G(n.guildId)
                },
                LOAD_THREADS_SUCCESS: j,
                LOAD_ARCHIVED_THREADS_SUCCESS: j,
                SEARCH_FINISH: j,
                GUILD_CREATE: function(n) {
                    return G(n.guild.id)
                },
                GUILD_DELETE: j,
                CURRENT_USER_UPDATE: j,
                THREAD_CREATE: x,
                THREAD_UPDATE: x,
                THREAD_DELETE: x,
                CHANNEL_UPDATES: function(n) {
                    var e = n.channels,
                        t = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(t = (o = l.next()).done); t = !0) {
                            var u = o.value;
                            if (u.isNSFW() !== V(u.guild_id, u.parent_id)) {
                                j();
                                return
                            }
                        }
                    } catch (n) {
                        r = !0;
                        i = n
                    } finally {
                        try {
                            t || null == l.return || l.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return !1
                },
                CHANNEL_DELETE: function(n) {
                    var e = n.channel,
                        t = !1;
                    if (null != e.guild_id && null != e.parent_id) {
                        if (e.guild_id in T && e.parent_id in T[e.guild_id]) {
                            delete T[e.guild_id][e.parent_id];
                            t = !0
                        }
                        if (e.guild_id in D && e.parent_id in D[e.guild_id]) {
                            delete D[e.guild_id][e.parent_id];
                            t = !0
                        }
                        if (e.guild_id in R && e.parent_id in R[e.guild_id]) {
                            Object.keys(R[e.guild_id][e.parent_id]).forEach($);
                            delete R[e.guild_id][e.parent_id];
                            t = !0
                        }
                        if (e.guild_id in C && e.parent_id in C[e.guild_id]) {
                            delete C[e.guild_id][e.parent_id];
                            t = !0
                        }
                        if (e.guild_id in w && e.parent_id in w[e.guild_id]) {
                            delete w[e.guild_id][e.parent_id];
                            t = !0
                        }
                        t && H(e.guild_id, e.parent_id)
                    }
                    return t
                },
                THREAD_MEMBER_UPDATE: z,
                THREAD_MEMBERS_UPDATE: z,
                LOAD_MESSAGES_SUCCESS: W,
                MESSAGE_CREATE: W,
                MESSAGE_DELETE: W,
                MESSAGE_DELETE_BULK: W,
                MESSAGE_ACK: W,
                CHANNEL_ACK: W,
                CHANNEL_LOCAL_ACK: W,
                CHANNEL_SELECT: function(n) {
                    W(n);
                    J()
                },
                PASSIVE_UPDATE_V1: function(n) {
                    null != n.channels && q()
                },
                WINDOW_FOCUS: q,
                UPDATE_CHANNEL_DIMENSIONS: q,
                DRAWER_OPEN: q,
                DRAWER_CLOSE: q,
                BULK_ACK: q
            })
        },
        877475: (n, e, t) => {
            t.d(e, {
                Z: () => w
            });
            var r = t(202351),
                i = t(744564),
                o = t(777158),
                l = t(419051),
                u = t(664625),
                a = t(61209),
                c = t(5544),
                s = t(567403),
                d = t(2590);

            function f(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function p(n) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                    return n.__proto__ || Object.getPrototypeOf(n)
                };
                return p(n)
            }

            function _(n, e) {
                return !e || "object" !== g(e) && "function" != typeof e ? function(n) {
                    if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return n
                }(n) : e
            }

            function v(n, e) {
                v = Object.setPrototypeOf || function(n, e) {
                    n.__proto__ = e;
                    return n
                };
                return v(n, e)
            }
            var g = function(n) {
                return n && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n
            };

            function h(n) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (n) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = p(n);
                    if (e) {
                        var i = p(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return _(this, t)
                }
            }
            var b = null,
                O = {},
                y = null;
            var E = {
                _categories: [],
                null: []
            };

            function m(n, e) {
                n.index = e
            }

            function S(n) {
                var e = c.ZP.getChannels(n),
                    t = {
                        _categories: [],
                        null: []
                    },
                    r = function(n) {
                        var e, r = n.channel;
                        (null !== (e = t[null != r.parent_id ? r.parent_id : "null"]) && void 0 !== e ? e : t.null).push({
                            channel: r,
                            index: -1
                        })
                    };
                e[d.d4z.GUILD_CATEGORY].forEach((function(n) {
                    var e = n.channel;
                    t._categories.push({
                        channel: e,
                        index: -1
                    });
                    t[e.id] = []
                }));
                e[c.sH].forEach(r);
                e[c.Zb].forEach(r);
                (0, o.Z)(t._categories, t).forEach(m);
                O[n] = t;
                return t
            }

            function I() {
                O = {};
                null != b && S(b)
            }

            function P(n) {
                var e = n.guild.id;
                O[e] = void 0;
                b === e && S(e)
            }

            function A(n) {
                var e = n.channel.guild_id;
                if (null == e) return !1;
                O[e] = void 0;
                b === e && S(e)
            }

            function N(n) {
                var e = n.guildId;
                O[e] = void 0;
                e === b && S(e)
            }

            function T(n, e) {
                y = e;
                if (null == n || null == n.getGuildId()) return !1;
                var t = n.getGuildId();
                if (null == t) return !1;
                O[t] = void 0;
                t === b && S(t);
                return !0
            }

            function D() {
                S(d.I_8)
            }
            var C = function(n) {
                ! function(n, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    n.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: n,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && v(n, e)
                }(t, n);
                var e = h(t);

                function t() {
                    f(this, t);
                    return e.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function() {
                    this.waitFor(c.ZP, s.Z, u.default, a.Z, l.Z);
                    this.syncWith([l.Z], D)
                };
                r.getCategories = function(n) {
                    return null != n ? function(n) {
                        var e = O[n];
                        return null != e ? e : S(n)
                    }(n) : E
                };
                r.__getLocalVars = function() {
                    return {
                        selectedGuildId: b,
                        guilds: O,
                        selectedVoiceChannelId: y,
                        EMPTY_CATEGORY_LISTS: E
                    }
                };
                return t
            }(r.ZP.Store);
            C.displayName = "GuildCategoryStore";
            const w = new C(i.Z, {
                CHANNEL_SELECT: function(n) {
                    var e = n.guildId;
                    b = null != e ? e : null;
                    if (null == e) return !1;
                    if (null != O[e]) return !1;
                    S(e)
                },
                CONNECTION_OPEN: I,
                OVERLAY_INITIALIZE: I,
                CACHE_LOADED_LAZY: I,
                GUILD_CREATE: P,
                GUILD_UPDATE: P,
                GUILD_DELETE: function(n) {
                    var e = n.guild.id;
                    delete O[e]
                },
                CHANNEL_CREATE: A,
                CHANNEL_DELETE: A,
                CHANNEL_UPDATES: function(n) {
                    var e = n.channels,
                        t = !1,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var l, u = e[Symbol.iterator](); !(r = (l = u.next()).done); r = !0) {
                            var a = l.value.guild_id;
                            if (null != a) {
                                O[a] = void 0;
                                t = !0;
                                b === a && S(a)
                            }
                        }
                    } catch (n) {
                        i = !0;
                        o = n
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return t
                },
                GUILD_MEMBER_UPDATE: function(n) {
                    var e = n.guildId,
                        t = n.user;
                    if (u.default.getId() !== t.id) return !1;
                    O[e] = void 0;
                    e === b && S(e)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == b) return !1;
                    S(b)
                },
                GUILD_ROLE_CREATE: N,
                GUILD_ROLE_UPDATE: N,
                GUILD_ROLE_DELETE: N,
                IMPERSONATE_UPDATE: N,
                IMPERSONATE_STOP: N,
                VOICE_CHANNEL_SELECT: function(n) {
                    var e = n.channelId;
                    return null == e && null != y ? T(a.Z.getChannel(y), null) : T(a.Z.getChannel(e), e)
                },
                VOICE_STATE_UPDATES: function(n) {
                    return n.voiceStates.reduce((function(n, e) {
                        var t = e.channelId,
                            r = e.sessionId;
                        return u.default.getSessionId() !== r ? n : T(a.Z.getChannel(t), t) || n
                    }), !1)
                }
            })
        },
        171940: (n, e, t) => {
            t.d(e, {
                $R: () => _,
                Wq: () => v,
                sK: () => h,
                jz: () => b,
                GA: () => O,
                rU: () => y,
                I: () => E,
                wK: () => m
            });
            var r, i, o = t(396043),
                l = t(61209),
                u = t(9430),
                a = t(661123),
                c = t(2590),
                s = t(131559);

            function d(n, e, t) {
                e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t;
                return n
            }

            function f(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))));
                    r.forEach((function(e) {
                        d(n, e, t[e])
                    }))
                }
                return n
            }

            function p(n, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : function(n, e) {
                    var t = Object.keys(n);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(n);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(e)).forEach((function(t) {
                    Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
                }));
                return n
            }! function(n) {
                n.GUILD = "guild";
                n.CHANNEL = "channel"
            }(r || (r = {}));
            var _ = Object.freeze((d(i = {}, c.bL.ALL_MESSAGES, "All"), d(i, c.bL.ONLY_MENTIONS, "Mentions"), d(i, c.bL.NO_MESSAGES, "Nothing"), d(i, c.bL.NULL, null), i));

            function v(n, e, t, i) {
                var l, u, d = function(n) {
                        var e, t, r, i, o, l, u, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            c = null != a.mute_config && null != a.mute_config.end_time ? new Date(a.mute_config.end_time).getTime() : n.guild_muted_until,
                            s = null != a.message_notifications ? _[a.message_notifications] : n.guild_message_notification_settings;
                        return {
                            guild_muted_until: c,
                            guild_flags: null !== (e = a.flags) && void 0 !== e ? e : n.guild_flags,
                            guild_is_muted: null !== (t = a.muted) && void 0 !== t ? t : n.guild_is_muted,
                            guild_message_notification_settings: s,
                            guild_suppress_roles: null !== (r = a.suppress_roles) && void 0 !== r ? r : n.guild_suppress_roles,
                            guild_receive_mobile_push: null !== (i = a.mobile_push) && void 0 !== i ? i : n.guild_receive_mobile_push,
                            guild_notify_highlights: null !== (o = a.notify_highlights) && void 0 !== o ? o : n.guild_notify_highlights,
                            guild_suppress_everyone: null !== (l = a.suppress_everyone) && void 0 !== l ? l : n.guild_suppress_everyone,
                            guild_scheduled_events_muted: null !== (u = a.mute_scheduled_events) && void 0 !== u ? u : n.guild_scheduled_events_muted
                        }
                    },
                    v = d(t),
                    h = d(O(n), e),
                    b = g(v, h, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    y = null !== (l = b("guild_flags")) && void 0 !== l ? l : 0,
                    E = (null !== (u = h.guild_flags) && void 0 !== u ? u : 0) ^ y,
                    m = 0 === (0, a.M1)(E, s.vc.OPT_IN_CHANNELS_OFF, s.vc.OPT_IN_CHANNELS_ON);
                o.ZP.trackWithMetadata(c.rMx.NOTIFICATION_SETTINGS_UPDATED, p(f({}, h), {
                    location: i,
                    guild_id: n,
                    update_type: r.GUILD,
                    guild_flags_old: b("guild_flags"),
                    guild_is_muted_old: b("guild_is_muted"),
                    guild_suppress_roles_old: b("guild_suppress_roles"),
                    guild_notify_highlights_old: b("guild_notify_highlights"),
                    guild_suppress_everyone_old: b("guild_suppress_everyone"),
                    guild_receive_mobile_push_old: b("guild_receive_mobile_push"),
                    guild_scheduled_events_muted_old: b("guild_scheduled_events_muted"),
                    guild_message_notification_settings_old: b("guild_message_notification_settings"),
                    is_opt_in_only_change: m
                }))
            }

            function g(n, e, t) {
                return function(r) {
                    if ("RETURN_PREVIOUS_WHEN_CHANGED" === t) return n[r] !== e[r] ? n[r] : void 0
                }
            }

            function h(n) {
                return null != n && null != n.end_time ? new Date(n.end_time).getTime() : null
            }

            function b(n, e, t, i, u) {
                var d, v, b = function(e) {
                        var t, r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = null !== (t = i.muted) && void 0 !== t ? t : null == e ? void 0 : e.channel_is_muted,
                            l = null != i.message_notifications ? _[i.message_notifications] : null == e ? void 0 : e.channel_message_notification_settings,
                            u = null == n ? null : !0 === o || null != l;
                        return {
                            channel_is_muted: o,
                            channel_is_overridden: u,
                            channel_flags: null !== (r = i.flags) && void 0 !== r ? r : null == e ? void 0 : e.channel_flags,
                            channel_message_notification_settings: l,
                            channel_muted_until: h(i.mute_config)
                        }
                    },
                    O = b(i),
                    y = b(E(n, e), t),
                    m = g(O, y, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    S = l.Z.getChannel(e),
                    I = null !== (d = m("channel_flags")) && void 0 !== d ? d : 0,
                    P = (null !== (v = y.channel_flags) && void 0 !== v ? v : 0) ^ I,
                    A = 0 === (0, a.M1)(P, s.ic.FAVORITED, s.ic.OPT_IN_ENABLED);
                o.ZP.trackWithMetadata(c.rMx.NOTIFICATION_SETTINGS_UPDATED, p(f({}, y), {
                    location: u,
                    guild_id: n,
                    channel_id: e,
                    update_type: r.CHANNEL,
                    parent_id: null != S ? S.parent_id : null,
                    channel_flags_old: m("channel_flags"),
                    channel_is_muted_old: m("channel_is_muted"),
                    channel_muted_until_old: m("channel_muted_until"),
                    channel_is_overridden_old: m("channel_is_overridden"),
                    channel_message_notification_settings_old: m("channel_message_notification_settings"),
                    is_opt_in_only_change: A
                }))
            }

            function O(n) {
                var e = u.Z.isMuted(n),
                    t = u.Z.getMuteConfig(n);
                return {
                    guild_suppress_everyone: u.Z.isSuppressEveryoneEnabled(n),
                    guild_suppress_roles: u.Z.isSuppressRolesEnabled(n),
                    guild_scheduled_events_muted: u.Z.isMuteScheduledEventsEnabled(n),
                    guild_is_muted: e,
                    guild_muted_until: null != t && null != t.end_time ? new Date(t.end_time).getTime() : null,
                    guild_receive_mobile_push: u.Z.isMobilePushEnabled(n),
                    guild_message_notification_settings: _[u.Z.getMessageNotifications(n)],
                    guild_notify_highlights: u.Z.getNotifyHighlights(n),
                    guild_flags: u.Z.getGuildFlags(n)
                }
            }

            function y(n) {
                var e = new Map;
                n.forEach((function(n) {
                    return e.set(n, O(n))
                }));
                return e
            }

            function E(n, e) {
                var t = u.Z.isChannelMuted(n, e),
                    r = u.Z.getChannelMuteConfig(n, e);
                return {
                    channel_is_muted: t,
                    channel_muted_until: null != r && null != r.end_time ? new Date(r.end_time).getTime() : null,
                    channel_message_notification_settings: _[u.Z.getChannelMessageNotifications(n, e)],
                    channel_flags: u.Z.getGuildChannelFlags(n, e)
                }
            }

            function m(n, e) {
                var t = new Map;
                e.forEach((function(e) {
                    return t.set(e, E(n, e))
                }));
                return t
            }
        }
    }
]);