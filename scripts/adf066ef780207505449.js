"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [70409], {
        552480: (e, t, n) => {
            n.d(t, {
                t: () => u
            });
            var r = n(113609),
                o = n(632685),
                i = n(749106),
                u = (0, r.Xz)({
                    id: o.Z.IN_APP_REPORTING,
                    title: "2020-29 Exp: Report TOS violating messages in-app via new modal",
                    description: ["An experiment that tests if in-app reporting is useful for Trust & Safety", "Control: No changes", "Treatment 1: Add menu options to report message"],
                    buckets: [i.NZ.CONTROL, i.NZ.TREATMENT_1]
                })
        },
        632685: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r;
            ! function(e) {
                e.IN_APP_REPORTING = "2020-01_in_app_reporting";
                e.LOCAL_MESSAGE_CACHING_EXPERIMENT = "2020-08_ios_persist_local_messages"
            }(r || (r = {}));
            const o = r
        },
        131461: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(667294),
                o = n(202351),
                i = n(22176),
                u = n(113609),
                a = n(264076),
                c = n(749106);

            function l(e) {
                var t = e.id,
                    n = (0, o.e7)([a.Z], (function() {
                        return a.Z.getUserExperimentDescriptor(t)
                    }), [t]);
                (0, r.useEffect)((function() {
                    null != n && (0, u.W9)(t, n)
                }), [t, n]);
                if (null != n) {
                    Date.now() < 0 && i.Z.addBreadcrumb({
                        category: "experiments",
                        message: "Experiment Configuration",
                        data: {
                            id: t,
                            kind: "user",
                            bucket: n.bucket
                        }
                    });
                    return n.bucket
                }
                return c.NZ.NOT_ELIGIBLE
            }
        },
        503213: (e, t, n) => {
            n.d(t, {
                qR: () => i,
                U5: () => u
            });
            var r = n(292327);

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function i(e) {
                var t = u();
                return Array.from(e.defaultActionTypes).map((function(e) {
                    return t[e]
                }))
            }

            function u() {
                var e;
                return o(e = {}, r.jj.BLOCK_MESSAGE, {
                    type: r.jj.BLOCK_MESSAGE,
                    metadata: {
                        customMessage: void 0
                    }
                }), o(e, r.jj.FLAG_TO_CHANNEL, {
                    type: r.jj.FLAG_TO_CHANNEL,
                    metadata: {
                        channelId: void 0
                    }
                }), o(e, r.jj.USER_COMMUNICATION_DISABLED, {
                    type: r.jj.USER_COMMUNICATION_DISABLED,
                    metadata: {
                        durationSeconds: 60
                    }
                }), o(e, r.jj.QUARANTINE_USER, {
                    type: r.jj.QUARANTINE_USER,
                    metadata: {}
                }), e
            }
        },
        926649: (e, t, n) => {
            n.d(t, {
                DO: () => d,
                vo: () => p,
                Fn: () => O,
                nC: () => b,
                o8: () => y,
                Jq: () => E,
                ep: () => g,
                km: () => v,
                QO: () => h,
                Vb: () => _,
                YN: () => m,
                ZF: () => S,
                Ar: () => M
            });
            var r = n(248046),
                o = n(664625),
                i = n(503213),
                u = n(201891),
                a = n(691385),
                c = n(320042),
                l = n(292327),
                s = n(473708),
                f = function(e, t) {
                    return "".concat(e, "-").concat(t, "-new-rule")
                },
                d = function(e) {
                    return (null == e ? void 0 : e.triggerType) === l.fX.KEYWORD
                },
                p = function(e) {
                    return (null == e ? void 0 : e.triggerType) === l.fX.ML_SPAM
                },
                O = function(e) {
                    return (null == e ? void 0 : e.triggerType) === l.fX.DEFAULT_KEYWORD_LIST
                },
                b = function(e) {
                    return (null == e ? void 0 : e.triggerType) === l.fX.MENTION_SPAM
                },
                y = function(e) {
                    return (null == e ? void 0 : e.triggerType) === l.fX.SERVER_POLICY
                },
                E = function(e) {
                    return (null == e ? void 0 : e.triggerType) === l.fX.USER_PROFILE
                };

            function g(e, t) {
                var n = c.I6[t],
                    r = (0, c.jp)(t, e),
                    u = {
                        id: f(e, t),
                        name: n.getDefaultRuleName(),
                        guildId: e,
                        eventType: n.eventType,
                        triggerType: t,
                        triggerMetadata: r,
                        enabled: !0,
                        creatorId: o.default.getId(),
                        actions: (0, i.qR)(n),
                        position: 0,
                        exemptChannels: new Set,
                        exemptRoles: new Set
                    };
                if (_(u)) throw new Error(s.Z.Messages.GUILD_AUTOMOD_NEW_RULE_ERROR);
                var l = (0, a.mY)(e, t);
                l > 0 && (u.name += " ".concat(l + 1));
                return u
            }

            function v(e, t) {
                if (e.length > t) throw new Error(s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_KEYWORDS.format({
                    limit: t
                }));
                e.forEach((function(e) {
                    if (e.length > l.hu || e.length < l.Vk) throw new u.V6(s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_INVALID_KEYWORD_LENGTH.format({
                        keyword: e,
                        max: l.hu,
                        min: l.Vk
                    }))
                }))
            }

            function h(e) {
                if (d(e)) {
                    var t, n, r = null !== (t = e.triggerMetadata.keywordFilter) && void 0 !== t ? t : [],
                        o = null !== (n = e.triggerMetadata.regexPatterns) && void 0 !== n ? n : [];
                    if (0 === r.length && 0 === o.length) throw new Error(s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_NO_KEYWORDS_OR_REGEX);
                    v(r, l.RH);
                    ! function(e) {
                        if (e.length > l.VW) throw new Error(s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_REGEX.format({
                            limit: l.VW
                        }));
                        e.forEach((function(e) {
                            if (e.length > l.aj || e.length < l.uE) throw new u.uS(s.Z.Messages.GUILD_AUTOMOD_REGEX_ERROR_INVALID_REGEX_LENGTH.format({
                                regex: e,
                                max: l.aj,
                                min: l.uE
                            }))
                        }))
                    }(o)
                }
                if (0 === e.actions.length) throw new Error(s.Z.Messages.GUILD_AUTOMOD_ERROR_NO_ACTIONS)
            }

            function _(e) {
                var t;
                return (0,
                    r.BH)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "INVALID_SNOWFLAKE")
            }

            function m(e) {
                return e === l.q4.MESSAGE_SEND ? s.Z.Messages.GUILD_AUTOMOD_EVENT_TYPE_MESSAGE_SEND : s.Z.Messages.GUILD_AUTOMOD_UNKNOWN
            }

            function S(e) {
                switch (e) {
                    case l.jj.BLOCK_MESSAGE:
                        return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
                    case l.jj.FLAG_TO_CHANNEL:
                        return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
                    default:
                        return s.Z.Messages.GUILD_AUTOMOD_UNKNOWN
                }
            }

            function M(e) {
                switch (e) {
                    case l.fX.KEYWORD:
                        return s.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;
                    case l.fX.ML_SPAM:
                        return s.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME;
                    case l.fX.DEFAULT_KEYWORD_LIST:
                        return s.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME;
                    default:
                        return s.Z.Messages.GUILD_AUTOMOD_UNKNOWN
                }
            }
        },
        691385: (e, t, n) => {
            n.d(t, {
                mY: () => m,
                I2: () => S,
                RD: () => M,
                pH: () => A
            });
            var r = n(667294),
                o = n(38736),
                i = n(503528),
                u = n(347365),
                a = n(11414),
                c = n(502589),
                l = n(292327);

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function f(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            f(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            f(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        p(e, t, n[t])
                    }))
                }
                return e
            }

            function b(e, t) {
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

            function y(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || g(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e) {
                return function(e) {
                    if (Array.isArray(e)) return s(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || g(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e, t) {
                if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
                }
            }
            var v = function(e, t) {
                    var n, r, o, i, u = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                            0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                    i = t.call(e, u)
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
                            }([i, a])
                        }
                    }
                },
                h = {};
            var _ = (0, o.Z)((function(e, t) {
                    return {
                        rules: {},
                        fetching: !1,
                        error: null,
                        updateRule: function(n) {
                            var r, o, i = n.guildId,
                                u = n.id,
                                a = n.triggerType,
                                l = t().rules,
                                s = null !== (r = l[i]) && void 0 !== r ? r : {},
                                f = null !== (o = s[a]) && void 0 !== o ? o : [],
                                d = f.some((function(e) {
                                    return e.id === u
                                })),
                                y = f.filter((function(e) {
                                    return !(0, c.U)(e.id) || e.triggerType !== a
                                })),
                                g = d ? y.map((function(e) {
                                    return e.id === u ? n : e
                                })) : E(y).concat([n]);
                            e({
                                rules: b(O({}, l), p({}, i, b(O({}, s), p({}, a, g)))),
                                error: null
                            })
                        },
                        removeRule: function(n, r) {
                            var o = t().rules,
                                i = o[r],
                                u = Object.keys(i).reduce((function(e, t) {
                                    var r, o = Number(t),
                                        u = null !== (r = i[o]) && void 0 !== r ? r : [];
                                    e[o] = u.filter((function(e) {
                                        return e.id !== n
                                    }));
                                    return e
                                }), i);
                            e({
                                rules: b(O({}, o), p({}, r, u)),
                                error: null
                            })
                        },
                        syncRules: (n = d((function(n) {
                            var r, o, i, c, s;
                            return v(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        if (! function(e) {
                                                var t;
                                                return Date.now() - (null !== (t = h[e]) && void 0 !== t ? t : 0) > 2e4
                                            }(n)) return [2];
                                        h[n] = Date.now();
                                        f.label = 1;
                                    case 1:
                                        f.trys.push([1, 3, , 4]);
                                        return [4, (0, a.$Y)(n)];
                                    case 2:
                                        r = f.sent();
                                        o = function(e) {
                                            var t, n = (p(t = {}, l.fX.KEYWORD, []), p(t, l.fX.ML_SPAM, []), p(t, l.fX.DEFAULT_KEYWORD_LIST, []), p(t, l.fX.MENTION_SPAM, []), p(t, l.fX.USER_PROFILE, []), p(t, l.fX.SERVER_POLICY, []), t);
                                            e.forEach((function(e) {
                                                var t, r = e.triggerType;
                                                null === (t = n[r]) || void 0 === t || t.push(e)
                                            }));
                                            return n
                                        }(r);
                                        i = t().rules;
                                        e({
                                            rules: b(O({}, i), p({}, n, o)),
                                            error: null
                                        });
                                        return [3, 4];
                                    case 3:
                                        c = f.sent();
                                        s = new u.Hx(c);
                                        e({
                                            error: s
                                        });
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        })), function(e) {
                            return n.apply(this, arguments)
                        })
                    };
                    var n
                })),
                m = function(e, t) {
                    var n, r;
                    return (null !== (r = null === (n = _.getState().rules[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : []).length
                };

            function S(e) {
                var t = y(r.useState(!1), 2),
                    n = t[0],
                    o = t[1],
                    u = y(_((function(e) {
                        return [e.syncRules, e.fetching]
                    }), i.Z), 2),
                    a = u[0],
                    c = u[1];
                return [n, r.useCallback(d((function() {
                    return v(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                if (c || null == e) return [2];
                                t.label = 1;
                            case 1:
                                t.trys.push([1, , 3, 4]);
                                o(!0);
                                return [4, a(e)];
                            case 2:
                                t.sent();
                                return [3, 4];
                            case 3:
                                o(!1);
                                return [7];
                            case 4:
                                return [2]
                        }
                    }))
                })), [e, c, a])]
            }

            function M(e) {
                var t = y(S(e), 2),
                    n = t[0],
                    o = t[1];
                r.useEffect((function() {
                    d((function() {
                        return v(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, o()];
                                case 1:
                                    e.sent();
                                    return [2]
                            }
                        }))
                    }))()
                }), [e, o]);
                return [n, o]
            }

            function A(e) {
                return _((function(t) {
                    var n;
                    return {
                        rulesByTriggerType: null !== (n = t.rules[null != e ? e : ""]) && void 0 !== n ? n : {},
                        updateRule: t.updateRule,
                        removeRule: t.removeRule
                    }
                }))
            }
        },
        320042: (e, t, n) => {
            n.d(t, {
                vT: () => r,
                I6: () => p,
                vh: () => f,
                r5: () => b,
                V9: () => y,
                yU: () => E,
                Z6: () => g,
                jp: () => v
            });
            var r, o, i = n(667294),
                u = n(489684),
                a = n(830001),
                c = n(292327),
                l = n(473708);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e.NEW = "new";
                e.RECOMMENDED = "recommended";
                e.BETA = "beta";
                e.ALPHA = "alpha"
            }(r || (r = {}));
            var f, d, p = (s(o = {}, c.fX.SPAM_LINK, {
                getDefaultRuleName: function() {
                    return l.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME
                },
                type: c.fX.SPAM_LINK,
                eventType: c.q4.MESSAGE_SEND,
                perGuildMaxCount: 0,
                availableActionTypes: new Set,
                flags: new Set,
                defaultActionTypes: new Set
            }), s(o, c.fX.KEYWORD, {
                getDefaultRuleName: function() {
                    return l.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME
                },
                type: c.fX.KEYWORD,
                eventType: c.q4.MESSAGE_SEND,
                perGuildMaxCount: 6,
                availableActionTypes: new Set([c.jj.BLOCK_MESSAGE, c.jj.FLAG_TO_CHANNEL, c.jj.USER_COMMUNICATION_DISABLED]),
                flags: new Set,
                defaultActionTypes: new Set([c.jj.BLOCK_MESSAGE])
            }), s(o, c.fX.ML_SPAM, {
                getDefaultRuleName: function() {
                    return l.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME
                },
                type: c.fX.ML_SPAM,
                eventType: c.q4.MESSAGE_SEND,
                perGuildMaxCount: 1,
                availableActionTypes: new Set([c.jj.BLOCK_MESSAGE, c.jj.FLAG_TO_CHANNEL]),
                flags: new Set([]),
                defaultActionTypes: new Set([c.jj.BLOCK_MESSAGE])
            }), s(o, c.fX.DEFAULT_KEYWORD_LIST, {
                getDefaultRuleName: function() {
                    return l.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME
                },
                type: c.fX.DEFAULT_KEYWORD_LIST,
                eventType: c.q4.MESSAGE_SEND,
                perGuildMaxCount: 1,
                availableActionTypes: new Set([c.jj.BLOCK_MESSAGE, c.jj.FLAG_TO_CHANNEL]),
                flags: new Set([]),
                defaultActionTypes: new Set([c.jj.BLOCK_MESSAGE])
            }), s(o, c.fX.MENTION_SPAM, {
                getDefaultRuleName: function() {
                    return l.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_NAME
                },
                type: c.fX.MENTION_SPAM,
                eventType: c.q4.MESSAGE_SEND,
                perGuildMaxCount: 1,
                availableActionTypes: new Set([c.jj.BLOCK_MESSAGE, c.jj.FLAG_TO_CHANNEL, c.jj.USER_COMMUNICATION_DISABLED]),
                flags: new Set([]),
                defaultActionTypes: new Set([c.jj.BLOCK_MESSAGE])
            }), s(o, c.fX.USER_PROFILE, {
                getDefaultRuleName: function() {
                    return l.Z.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_NAME
                },
                type: c.fX.USER_PROFILE,
                eventType: c.q4.GUILD_MEMBER_JOIN_OR_UPDATE,
                perGuildMaxCount: 1,
                availableActionTypes: new Set([c.jj.QUARANTINE_USER, c.jj.FLAG_TO_CHANNEL]),
                flags: new Set([r.BETA]),
                defaultActionTypes: new Set([c.jj.QUARANTINE_USER])
            }), s(o, c.fX.SERVER_POLICY, {
                getDefaultRuleName: function() {
                    return l.Z.Messages.GUILD_AUTOMOD_SERVER_POLICY_FILTER_NAME
                },
                type: c.fX.SERVER_POLICY,
                eventType: c.q4.MESSAGE_SEND,
                perGuildMaxCount: 1,
                availableActionTypes: new Set([c.jj.FLAG_TO_CHANNEL]),
                flags: new Set([r.ALPHA]),
                defaultActionTypes: new Set
            }), o);
            ! function(e) {
                e.MEMBERS = "members";
                e.CONTENT = "content"
            }(f || (f = {}));
            var O = (s(d = {}, f.MEMBERS, [p[c.fX.USER_PROFILE]]), s(d, f.CONTENT, [p[c.fX.SERVER_POLICY], p[c.fX.MENTION_SPAM], p[c.fX.ML_SPAM], p[c.fX.DEFAULT_KEYWORD_LIST], p[c.fX.KEYWORD]]), d),
                b = function(e, t) {
                    return p[e].flags.has(t)
                };

            function y(e) {
                return Array.from(p[e].availableActionTypes)
            }

            function E(e, t) {
                var n = e.id,
                    r = e.eventType,
                    o = e.triggerType,
                    i = e.actions,
                    u = p[o];
                if (t.filter((function(e) {
                        return n !== e.id && e.triggerType === o
                    })).length > u.perGuildMaxCount) throw new Error("You have exceeded the maximum number of rules of type ".concat(o));
                if (i.some((function(e) {
                        return !u.availableActionTypes.has(e.type)
                    }))) throw new Error("You have provided an action that is not available for this trigger type");
                if (r !== u.eventType) throw new Error("You have provided an event type that is not available for this trigger type")
            }

            function g(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = (0, a.oA)(e, t),
                    r = (0, u.mZ)(e);
                return i.useMemo((function() {
                    var e, t = (s(e = {}, f.MEMBERS, []), s(e, f.CONTENT, []), e);
                    return Object.keys(O).reduce((function(e, t) {
                        var o = O[t].filter((function(e) {
                            return !(e.type === c.fX.SERVER_POLICY && !r) && (!(e.type === c.fX.USER_PROFILE && !n) && e.perGuildMaxCount > 0)
                        })).map((function(e) {
                            return e.type
                        }));
                        e[t] = o;
                        return e
                    }), t)
                }), [n, r])
            }

            function v(e, t) {
                var n = (0, u.H7)(t);
                switch (e) {
                    case c.fX.DEFAULT_KEYWORD_LIST:
                        return {
                            allowList: [], presets: []
                        };
                    case c.fX.USER_PROFILE:
                    case c.fX.KEYWORD:
                        return {
                            keywordFilter: [], regexPatterns: [], allowList: []
                        };
                    case c.fX.MENTION_SPAM:
                        return {
                            mentionTotalLimit: c.Ic, mentionRaidProtectionEnabled: n
                        };
                    case c.fX.ML_SPAM:
                    case c.fX.SERVER_POLICY:
                    default:
                        return
                }
            }
        },
        727974: (e, t, n) => {
            n.d(t, {
                Ac: () => u,
                Ze: () => a,
                cb: () => c,
                se: () => l,
                kU: () => s
            });
            var r = /[\t\n,]/g,
                o = /\s{2,}/g,
                i = /[*"']/g;

            function u(e) {
                return e.split(r).map((function(e) {
                    return e.replace(o, " ").trim()
                })).filter((function(e) {
                    return e.length > 0
                }))
            }

            function a(e) {
                var t = new Set(e);
                return Array.from(t)
            }

            function c(e) {
                return e.sort((function(e, t) {
                    var n = e.replaceAll(i, ""),
                        r = t.replaceAll(i, "");
                    return n.localeCompare(r)
                }))
            }

            function l(e) {
                return e.join(", ")
            }

            function s(e) {
                return e.includes("\n") || e.includes(",")
            }
        },
        830001: (e, t, n) => {
            n.d(t, {
                ze: () => f,
                Nb: () => d,
                pr: () => p,
                LK: () => O,
                oA: () => b,
                sG: () => y
            });
            var r = n(202351),
                o = n(567403),
                i = n(682776),
                u = n(489684),
                a = n(2590);

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, i.Z],
                    n = l(t, 2),
                    r = n[0],
                    c = n[1],
                    s = r.getGuild(e);
                if (null == s) return !1;
                var f = s.hasFeature(a.oNc.COMMUNITY) || (0, u.n7)(e);
                return f && c.can(a.Plq.MANAGE_GUILD, s)
            };

            function f(e) {
                return null != e && s(e)
            }

            function d(e) {
                return s(e)
            }

            function p(e) {
                return (0, r.e7)([o.Z, i.Z], (function() {
                    return s(e, [o.Z, i.Z])
                }), [e])
            }

            function O(e) {
                var t, n = (0, r.e7)([i.Z], (function() {
                    return i.Z.can(a.Plq.MANAGE_GUILD, e)
                }), [e]);
                return (0, u.Ac)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", !1) && n
            }

            function b(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = (0, r.e7)([o.Z], (function() {
                        var n;
                        return null !== (t = null === (n = o.Z.getGuild(e)) || void 0 === n ? void 0 : n.hasFeature(a.oNc.AUTOMOD_TRIGGER_USER_PROFILE)) && void 0 !== t && t
                    }), [e]),
                    c = (0, u.fh)(e, n);
                return c || i
            }

            function y(e) {
                var t, n, r = b(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", !0),
                    o = p(null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "");
                return r && o
            }
        },
        502589: (e, t, n) => {
            n.d(t, {
                U: () => o
            });
            var r = new Set(["1030554520465440818"]);

            function o(e) {
                return null != e && r.has(e)
            }
        },
        355248: (e, t, n) => {
            n.d(t, {
                w: () => M,
                V: () => A
            });
            var r = n(496486),
                o = n.n(r),
                i = n(38736),
                u = n(347365),
                a = n(72580),
                c = n(201891),
                l = n(926649),
                s = n(320042),
                f = n(11414),
                d = n(727974),
                p = n(502589),
                O = n(2590),
                b = n(473708);

            function y(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        E(e, t, n[t])
                    }))
                }
                return e
            }

            function v(e, t) {
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
            var h = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                        if (!(o = u.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
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
                                i = t.call(e, u)
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
                        }([i, a])
                    }
                }
            };

            function _(e) {
                if (e.code === O.evJ.INVALID_FORM_BODY) {
                    var t, n;
                    if (null != (null === (t = e.errors) || void 0 === t || null === (n = t.trigger_metadata) || void 0 === n ? void 0 : n.regex_patterns)) return b.Z.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR
                }
                return e.getAnyErrorMessage()
            }
            var m = Object.freeze({
                    editingRule: null,
                    hasChanges: !1,
                    isLoading: !1,
                    errorMessage: null
                }),
                S = (0, i.Z)((function(e, t) {
                    return {
                        editingRule: null,
                        hasChanges: !1,
                        setEditingRule: function(n) {
                            var r = t().editingRule,
                                i = null != n && null != r && n.id === r.id,
                                u = o().cloneDeep(n);
                            null != u && (u = v(g({}, u), {
                                actions: u.actions.filter(a.lm)
                            }));
                            e({
                                editingRule: u,
                                hasChanges: i,
                                errorMessage: null
                            })
                        },
                        createNewEditingRule: function(t, n, r) {
                            var o = g({}, (0, l.ep)(t, n), null != r ? r : {});
                            e({
                                editingRule: o,
                                hasChanges: !1
                            });
                            return o
                        },
                        isLoading: !1,
                        errorMessage: null,
                        cancelEditingRule: function() {
                            e(g({}, m))
                        },
                        saveRule: (r = (n = function(t, n) {
                            var r, o, i, a, O, y;
                            return h(this, (function(E) {
                                switch (E.label) {
                                    case 0:
                                        if (null == t) {
                                            e(g({}, m));
                                            return [2, null]
                                        }
                                        try {
                                            if ((0, l.DO)(t)) {
                                                t.triggerMetadata.keywordFilter = (0, d.cb)((0, d.Ze)(null !== (r = t.triggerMetadata.keywordFilter) && void 0 !== r ? r : []));
                                                t.triggerMetadata.allowList = (0, d.cb)((0, d.Ze)(null !== (o = t.triggerMetadata.allowList) && void 0 !== o ? o : []))
                                            }(0, l.Fn)(t) && (t.triggerMetadata.allowList = (0, d.cb)((0, d.Ze)(null !== (i = t.triggerMetadata.allowList) && void 0 !== i ? i : [])));
                                            (0, s.yU)(t, n);
                                            (0, l.QO)(t)
                                        } catch (t) {
                                            t instanceof c.V6 ? e({
                                                errorMessage: b.Z.Messages.GUILD_AUTOMOD_KEYWORD_GENERIC_SAVE_ERROR,
                                                isLoading: !1
                                            }) : t instanceof c.uS ? e({
                                                errorMessage: b.Z.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR,
                                                isLoading: !1
                                            }) : e({
                                                errorMessage: t.message,
                                                isLoading: !1
                                            });
                                            return [2, null]
                                        }
                                        E.label = 1;
                                    case 1:
                                        E.trys.push([1, 6, , 7]);
                                        e({
                                            isLoading: !0
                                        });
                                        a = null;
                                        return !(0, l.Vb)(t) || (0, p.U)(t.id) ? [3, 3] : [4, (0, f.Je)(t)];
                                    case 2:
                                        a = E.sent();
                                        return [3, 5];
                                    case 3:
                                        return [4, (0, f.JK)(t)];
                                    case 4:
                                        a = E.sent();
                                        E.label = 5;
                                    case 5:
                                        e(g({}, m));
                                        return [2, a];
                                    case 6:
                                        O = E.sent();
                                        y = new u.Hx(O);
                                        e({
                                            isLoading: !1,
                                            errorMessage: _(y)
                                        });
                                        return [3, 7];
                                    case 7:
                                        return [2, null]
                                }
                            }))
                        }, function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, o) {
                                var i = n.apply(e, t);

                                function u(e) {
                                    y(i, r, o, u, a, "next", e)
                                }

                                function a(e) {
                                    y(i, r, o, u, a, "throw", e)
                                }
                                u(void 0)
                            }))
                        }), function(e, t) {
                            return r.apply(this, arguments)
                        }),
                        saveEditingRule: function(e) {
                            var n = t(),
                                r = n.editingRule;
                            return (0, n.saveRule)(r, e)
                        }
                    };
                    var n, r
                }));

            function M() {
                return S((function(e) {
                    return {
                        hasChanges: e.hasChanges,
                        editingRule: e.editingRule,
                        isLoading: e.isLoading,
                        errorMessage: e.errorMessage,
                        saveRule: e.saveRule,
                        saveEditingRule: e.saveEditingRule,
                        cancelEditingRule: e.cancelEditingRule
                    }
                }))
            }

            function A() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = S((function(e) {
                        return {
                            hasChanges: e.hasChanges,
                            editingRule: e.editingRule,
                            setEditingRule: e.setEditingRule,
                            createNewEditingRule: e.createNewEditingRule
                        }
                    }));
                null != e && t.setEditingRule(e);
                return t
            }
        },
        628177: (e, t, n) => {
            n.d(t, {
                c: () => M
            });
            var r = n(773011),
                o = n(61209),
                i = n(840922),
                u = n(473903),
                a = n(436622),
                c = n(785893),
                l = (n(667294), n(633878));

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
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

            function d(e, t) {
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

            function p(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    r = e.height,
                    o = void 0 === r ? 24 : r,
                    i = e.color,
                    u = void 0 === i ? "currentColor" : i,
                    a = d(e, ["width", "height", "color"]);
                return (0, c.jsxs)("svg", f(function(e) {
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
                }({}, (0, l.Z)(a)), {
                    width: n,
                    height: o,
                    fill: "None",
                    viewBox: "0 0 24 24",
                    children: [(0, c.jsx)("path", {
                        d: "M4.25947 16.5917C3.14082 14.7059 2.74905 12.4766 3.15775 10.3224C3.56644 8.16824 4.74748 6.23734 6.47909 4.89231C8.2107 3.54728 10.3738 2.88064 12.5621 3.01758C14.7504 3.15452 16.8135 4.08562 18.3639 5.63603C19.9144 7.18644 20.8455 9.24952 20.9824 11.4379C21.1194 13.6262 20.4527 15.7893 19.1077 17.5209C17.7627 19.2525 15.8318 20.4335 13.6776 20.8422C11.5234 21.2509 9.29412 20.8592 7.40833 19.7405L7.40835 19.7405L4.29862 20.6289C4.16996 20.6657 4.03381 20.6674 3.90428 20.6338C3.77475 20.6003 3.65655 20.5327 3.56194 20.4381C3.46732 20.3434 3.39973 20.2252 3.36616 20.0957C3.3326 19.9662 3.33429 19.83 3.37105 19.7014L4.25954 16.5916L4.25947 16.5917Z",
                        stroke: u,
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }), (0, c.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.30605 8.30602C7.89802 8.71404 7.89802 9.37558 8.30605 9.78361L10.5224 12L8.30606 14.2164C7.89803 14.6244 7.89803 15.2859 8.30606 15.694C8.71409 16.102 9.37563 16.102 9.78365 15.694L12 13.4776L14.2164 15.694C14.6244 16.102 15.286 16.102 15.694 15.694C16.102 15.2859 16.102 14.6244 15.694 14.2164L13.4776 12L15.694 9.78361C16.102 9.37558 16.102 8.71404 15.694 8.30602C15.286 7.89799 14.6244 7.89799 14.2164 8.30602L12 10.5224L9.78364 8.30602C9.37562 7.89799 8.71408 7.89799 8.30605 8.30602Z",
                        fill: u
                    })]
                }))
            }
            var O = n(357566),
                b = n(127661),
                y = n(292327),
                E = n(515222),
                g = n(473708),
                v = function(e) {
                    return e !== y.jj.QUARANTINE_USER
                },
                h = function(e) {
                    switch (e) {
                        case y.jj.BLOCK_MESSAGE:
                            return g.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
                        case y.jj.FLAG_TO_CHANNEL:
                            return g.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
                        case y.jj.USER_COMMUNICATION_DISABLED:
                            return g.Z.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
                        case y.jj.QUARANTINE_USER:
                            return g.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER
                    }
                },
                _ = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.fX.KEYWORD;
                    switch (e) {
                        case y.jj.BLOCK_MESSAGE:
                            switch (t) {
                                case y.fX.MENTION_SPAM:
                                    return g.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
                                case y.fX.ML_SPAM:
                                    return g.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
                                default:
                                    return g.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION
                            }
                        case y.jj.FLAG_TO_CHANNEL:
                            return g.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
                        case y.jj.USER_COMMUNICATION_DISABLED:
                            return g.Z.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
                        case y.jj.QUARANTINE_USER:
                            return g.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION
                    }
                },
                m = function(e, t) {
                    switch (e) {
                        case y.jj.QUARANTINE_USER:
                        case y.jj.BLOCK_MESSAGE:
                            return null;
                        case y.jj.FLAG_TO_CHANNEL:
                            var n, a = null == t || null === (n = t.metadata) || void 0 === n ? void 0 : n.channelId;
                            if (null == a) return null;
                            var c = o.Z.getChannel(a);
                            if (null == c) return null;
                            var l = (0, r.F6)(c, u.default, i.Z);
                            return g.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({
                                channelName: l
                            });
                        case y.jj.USER_COMMUNICATION_DISABLED:
                            var s, f, d = null !== (f = null == t || null === (s = t.metadata) || void 0 === s ? void 0 : s.durationSeconds) && void 0 !== f ? f : 0,
                                p = (0, E.L9)(d);
                            return null == p ? null : g.Z.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({
                                duration: p
                            })
                    }
                },
                S = function(e) {
                    switch (e) {
                        case y.jj.BLOCK_MESSAGE:
                            return b.Z;
                        case y.jj.FLAG_TO_CHANNEL:
                            return a.Z;
                        case y.jj.USER_COMMUNICATION_DISABLED:
                            return O.Z;
                        case y.jj.QUARANTINE_USER:
                            return p
                    }
                };

            function M(e, t, n) {
                return function(e) {
                    switch (e) {
                        case y.jj.BLOCK_MESSAGE:
                        case y.jj.FLAG_TO_CHANNEL:
                        case y.jj.USER_COMMUNICATION_DISABLED:
                        case y.jj.QUARANTINE_USER:
                            return !0;
                        default:
                            return !1
                    }
                }(e) ? {
                    headerText: null !== (r = h(e)) && void 0 !== r ? r : "",
                    descriptionText: null !== (o = _(e, n)) && void 0 !== o ? o : "",
                    helperText: null !== (i = m(e, t)) && void 0 !== i ? i : null,
                    icon: null !== (u = S(e)) && void 0 !== u ? u : b.Z,
                    isEditable: v(e)
                } : null;
                var r, o, i, u
            }
        },
        539530: (e, t, n) => {
            n.d(t, {
                gK: () => d,
                XN: () => p,
                af: () => O
            });
            var r = n(785893),
                o = (n(667294), n(882723));

            function i(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function a(e) {
                            i(u, r, o, a, c, "next", e)
                        }

                        function c(e) {
                            i(u, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        a(e, t, n[t])
                    }))
                }
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
            var s = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                i = t.call(e, u)
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
                        }([i, a])
                    }
                }
            };

            function f(e) {
                return new Promise((function(t) {
                    (0, o.openModalLazy)((function() {
                        return e((function() {
                            t(!0)
                        }), (function(e) {
                            t(!1);
                            return e()
                        }))
                    }))
                }))
            }
            var d = function(e) {
                    return f((t = u((function(t, o) {
                        var i, u;
                        return s(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, n.e(27134).then(n.bind(n, 927134))];
                                case 1:
                                    i = a.sent(), u = i.default;
                                    return [2, function(n) {
                                        return (0, r.jsx)(u, l(c({}, n), {
                                            ruleName: e,
                                            onConfirm: t,
                                            onClose: function() {
                                                return o(n.onClose)
                                            },
                                            onCancel: function() {
                                                return o(n.onClose)
                                            }
                                        }))
                                    }]
                            }
                        }))
                    })), function(e, n) {
                        return t.apply(this, arguments)
                    }));
                    var t
                },
                p = function(e, t) {
                    return f((o = u((function(o, i) {
                        var u, a;
                        return s(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return [4, n.e(93953).then(n.bind(n, 393953))];
                                case 1:
                                    u = s.sent(), a = u.default;
                                    return [2, function(n) {
                                        return (0, r.jsx)(a, l(c({}, n), {
                                            ruleName: e,
                                            keyword: t,
                                            onConfirm: o,
                                            onClose: function() {
                                                return i(n.onClose)
                                            },
                                            onCancel: function() {
                                                return i(n.onClose)
                                            }
                                        }))
                                    }]
                            }
                        }))
                    })), function(e, t) {
                        return o.apply(this, arguments)
                    }));
                    var o
                },
                O = function(e) {
                    return function(t) {
                        return f((o = u((function(o, i) {
                            var u, a, f;
                            return s(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return [4, n.e(45313).then(n.bind(n, 445313))];
                                    case 1:
                                        u = s.sent(), a = u.default;
                                        f = function() {
                                            t();
                                            o()
                                        };
                                        return [2, function(t) {
                                            return (0, r.jsx)(a, l(c({
                                                ruleName: e
                                            }, t), {
                                                onConfirm: f,
                                                onClose: function() {
                                                    return i(t.onClose)
                                                },
                                                onCancel: function() {
                                                    return i(t.onClose)
                                                }
                                            }))
                                        }]
                                }
                            }))
                        })), function(e, t) {
                            return o.apply(this, arguments)
                        }));
                        var o
                    }
                }
        },
        530607: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function a(e, t) {
                return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }
            var l = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
                var t = function() {
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
                    var n, r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var f = {};
            var d = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && c(e, t)
                }(n, e);
                var t = s(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getOptions = function(e) {
                    return f[e]
                };
                r.__getLocalVars = function() {
                    return {
                        options: f
                    }
                };
                return n
            }(r.ZP.Store);
            d.displayName = "SendMessageOptionsStore";
            const p = new d(o.Z, {
                MESSAGE_CREATE: function(e) {
                    var t = e.message,
                        n = e.sendMessageOptions;
                    null != n && (f[t.id] = n);
                    null != t.nonce && t.nonce in f && delete f[t.nonce]
                }
            })
        },
        618738: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(225386),
                o = n(791707),
                i = n(2590);

            function u(e, t, n) {
                return !t.isSystemDM() && !(0, o.Z)(e) && (n || t.isPrivate()) && (0, r.RG)(t) && t.type !== i.d4z.GUILD_VOICE && t.type !== i.d4z.GUILD_STAGE_VOICE
            }
        },
        92517: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(720419),
                o = n(698847);

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        i(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                r.Z.deleteMessage(e.id, t.id, !0);
                if (t.isCommandType()) null != t.interactionData && null != i.applicationId && (0, o.d)(t, e, i.applicationId);
                else {
                    var a = t.content,
                        c = t.tts,
                        l = t.flags,
                        s = t.nonce;
                    r.Z.sendMessage(e.id, {
                        content: a,
                        tts: c,
                        invalidEmojis: [],
                        validNonShortcutEmojis: []
                    }, void 0, u({
                        nonce: s,
                        flags: l
                    }, i))
                }
            }
        },
        272112: (e, t, n) => {
            n.d(t, {
                zW: () => w,
                F4: () => T,
                fB: () => R,
                $Z: () => P,
                Hd: () => N,
                B8: () => D,
                rY: () => L,
                Xl: () => C,
                mG: () => Z,
                op: () => U,
                HH: () => G,
                gK: () => x,
                qe: () => k,
                W1: () => F,
                l9: () => K
            });
            var r = n(785893),
                o = (n(667294),
                    n(882723)),
                i = n(933818),
                u = n(720419),
                a = n(913928),
                c = n(148815),
                l = n(703790),
                s = (n(354368), n(931893)),
                f = n(28862),
                d = n(367406),
                p = n(664625),
                O = n(61209),
                b = n(652591),
                y = n(176758),
                E = n(691797),
                g = n(930948),
                v = n(530607),
                h = n(847839),
                _ = n(92517),
                m = n(2590);

            function S(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function M(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            S(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            S(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function A(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function j(e, t) {
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
            var I = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                i = t.call(e, u)
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
                        }([i, a])
                    }
                }
            };

            function w(e) {
                var t = e.getGuildId();
                null != t && l.Z.open(t, m.pNK.OVERVIEW)
            }

            function T(e, t, n) {
                (0, E.JG)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
            }

            function R(e, t) {
                b.default.track(m.rMx.MESSAGE_LINK_COPIED, {
                    message_id: t.id,
                    channel: t.channel_id
                });
                (0, E.JG)((0, y.wR)(e.guild_id, e.id, t.id))
            }

            function P(e, t, n) {
                t.state === m.yb.SEND_FAILED || n.shiftKey ? u.Z.deleteMessage(e.id, t.id, t.state === m.yb.SEND_FAILED) : a.Z.confirmDelete(e, t)
            }

            function N(e, t) {
                u.Z.startEditMessage(e.id, t.id, t.content)
            }

            function D(e, t) {
                (0, h.Z)(e.id, t.id)
            }

            function L(e, t, n) {
                !1 !== t.pinned ? n.shiftKey ? i.Z.unpinMessage(e, t.id) : a.Z.confirmUnpin(e, t) : n.shiftKey ? i.Z.pinMessage(e, t.id) : a.Z.confirmPin(e, t)
            }

            function C(e, t) {
                (0, c.Z)(e.id, t.id)
            }

            function Z(e, t) {
                (0, _.Z)(e, t, void 0, v.Z.getOptions(t.id))
            }

            function U(e, t) {
                (0,
                    o.openModalLazy)(M((function() {
                    var e, o;
                    return I(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.resolve().then(n.bind(n, 275865))];
                            case 1:
                                e = i.sent(), o = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(o, j(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                A(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, e), {
                                        message: t
                                    }))
                                }]
                        }
                    }))
                })))
            }

            function G(e, t, n) {
                var r = e.isPrivate(),
                    o = t.author.id === p.default.getId();
                (0, f.fE)({
                    channel: e,
                    message: t,
                    shouldMention: !n.shiftKey && !o,
                    showMentionToggle: !r && !o
                });
                g.S.dispatchToLastSubscribed(m.CkL.TEXTAREA_FOCUS)
            }

            function x(e, t) {
                (0, d.R6)(e, t, "Message")
            }

            function k(e, t) {
                var n = O.Z.getChannel(t.id);
                null != n && (0, d.ok)(n)
            }

            function F(e, t) {
                (0, s.BW)(t)
            }

            function K(e, t) {
                (0, s.Kp)(t.id)
            }
        },
        70409: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => pt,
                useMessageMenu: () => Ot
            });
            var r = n(785893),
                o = n(667294),
                i = n(809784),
                u = n(882723),
                a = n(971402),
                c = n(516217),
                l = n(73904),
                s = n(552480),
                f = n(112897),
                d = n(131461),
                p = n(446419),
                O = n(893516),
                b = n(480657),
                y = n(269083),
                E = n(699050),
                g = n(841150),
                v = n(691385),
                h = n(320042),
                _ = n(830001),
                m = n(355248),
                S = n(628177),
                M = n(539530),
                A = n(703790),
                j = n(2590),
                I = n(292327),
                w = n(473708),
                T = n(146143),
                R = n.n(T);

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function N(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function D(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        D(e, t, n[t])
                    }))
                }
                return e
            }

            function C(e, t) {
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

            function Z(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || G(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(e) {
                return function(e) {
                    if (Array.isArray(e)) return P(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || G(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function G(e, t) {
                if (e) {
                    if ("string" == typeof e) return P(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? P(e, t) : void 0
                }
            }
            var x = function(e, t) {
                    var n, r, o, i, u = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        },
                        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                    i = t.call(e, u)
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
                            }([i, a])
                        }
                    }
                },
                k = I.fX.KEYWORD;

            function F(e, t) {
                var n = h.I6[k].perGuildMaxCount,
                    i = (0,
                        m.w)(),
                    c = i.isLoading,
                    l = i.saveRule,
                    s = (0, m.V)().createNewEditingRule,
                    f = Z(o.useState(!1), 2),
                    d = f[0],
                    p = f[1],
                    O = Z((0, v.I2)(t), 2),
                    b = O[0],
                    y = O[1],
                    E = (0, v.pH)(t),
                    g = E.rulesByTriggerType,
                    I = E.updateRule,
                    T = o.useMemo((function() {
                        var e;
                        return null !== (e = g[k]) && void 0 !== e ? e : []
                    }), [g]),
                    P = 0 === T.length,
                    D = n > T.length && !P;
                if (!o.useMemo((function() {
                        return (0, _.ze)(t)
                    }), [t]) || null == e || 0 === e.length || null == t) return null;
                var G, F, K = e.split(" ").length,
                    B = function() {
                        if (null != t) {
                            (0, a.Zy)();
                            A.Z.open(t, j.pNK.GUILD_AUTOMOD);
                            setTimeout((function() {
                                s(t, k, {
                                    triggerMetadata: {
                                        keywordFilter: [e],
                                        regexPatterns: [],
                                        allowList: []
                                    }
                                })
                            }), 400)
                        }
                    },
                    X = (F = (G = function(t) {
                        var n, r, o;
                        return x(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    (0, a.Zy)();
                                    return [4, (0, M.XN)(t.name, e)];
                                case 1:
                                    if (!i.sent()) return [2];
                                    o = C(L({}, t), {
                                        triggerMetadata: C(L({}, t.triggerMetadata), {
                                            keywordFilter: U(null !== (r = null === (n = t.triggerMetadata) || void 0 === n ? void 0 : n.keywordFilter) && void 0 !== r ? r : []).concat([e])
                                        })
                                    });
                                    return [4, l(o, T)];
                                case 2:
                                    i.sent();
                                    I(o);
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, r) {
                            var o = G.apply(e, t);

                            function i(e) {
                                N(o, n, r, i, u, "next", e)
                            }

                            function u(e) {
                                N(o, n, r, i, u, "throw", e)
                            }
                            i(void 0)
                        }))
                    }), function(e) {
                        return F.apply(this, arguments)
                    }),
                    H = (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(u.MenuItem, {
                            id: "automod-rules-loading",
                            label: w.Z.Messages.LOADING
                        })
                    });
                b || (H = (0, r.jsxs)(r.Fragment, {
                    children: [P && (0, r.jsx)(u.MenuItem, {
                        id: "add-first-rule",
                        label: w.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
                        action: B,
                        disabled: c
                    }), T.map((function(e) {
                        var t = (0, h.V9)(k).reduce((function(t, n) {
                            var r = e.actions.find((function(e) {
                                var t = e.type;
                                return n === t
                            }));
                            if (null == r) return t;
                            var o = (0, S.c)(n, r);
                            return t += ", ".concat(null == o ? void 0 : o.headerText)
                        }), "");
                        return (0, r.jsx)(u.MenuRadioItem, {
                            id: e.id,
                            label: e.name,
                            subtext: (0, r.jsx)(u.Text, {
                                color: "text-muted",
                                className: R().actionTextHeader,
                                variant: "text-xs/normal",
                                children: t.slice(2)
                            }),
                            group: "automod-rule-selection",
                            checked: !1,
                            disabled: c,
                            action: function() {
                                return X(e)
                            }
                        }, e.id)
                    })), D && (0,
                        r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(u.MenuSeparator, {}), (0, r.jsx)(u.MenuItem, {
                            id: "add-another-rule",
                            label: w.Z.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
                            action: B,
                            disabled: c
                        })]
                    })]
                }));
                return (0, r.jsx)(u.MenuItem, {
                    id: "guild-automod-add-selection",
                    label: w.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
                        keywordCount: K
                    }),
                    onFocus: function() {
                        if (!d) {
                            p(!0);
                            y()
                        }
                    },
                    children: H
                })
            }
            var K = n(274903),
                B = n(294184),
                X = n.n(B),
                H = n(202351),
                V = n(589503),
                Y = n(897436),
                W = n(38602),
                q = n(163082),
                z = n(330768),
                J = n(225386),
                $ = n(968449),
                Q = n(682776),
                ee = n(473903),
                te = n(856450),
                ne = n(799944),
                re = n(263725),
                oe = n(95891),
                ie = n(775173),
                ue = n(930948),
                ae = n(38004),
                ce = n(636795),
                le = n(97011),
                se = n(833589),
                fe = n(254807),
                de = n(213424),
                pe = n(203600),
                Oe = n(776277),
                be = n.n(Oe);

            function ye(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ee(e, t) {
                var n, i, a, c, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.O.NORMAL,
                    s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    f = o.useContext(u.AccessibilityPreferencesContext).reducedMotion,
                    d = (0, J.$R)(t),
                    p = (0, H.e7)([Q.Z], (function() {
                        return (t.isPrivate() || Q.Z.can(j.Plq.ADD_REACTIONS, t)) && d
                    }), [t, d]),
                    O = (0, V.MZ)(t.getGuildId()),
                    b = (0, H.e7)([se.Z], (function() {
                        return se.Z.remainingBurstCurrency
                    })),
                    y = (0, Y.Xx)({
                        autoTrackExposure: !1
                    }),
                    E = y.viewAndUseEnabled,
                    v = l === g.O.BURST,
                    h = v && b < 1,
                    _ = ee.default.getCurrentUser(),
                    m = (0, ce.I5)(_);
                if (!$.nc.getSetting() || !p || e.type === j.uaV.GUILD_INVITE_REMINDER) return null;
                var S = O.filter((function(e) {
                    return !ae.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: t,
                        intention: de.Hz.REACTION,
                        canViewAndUsePackEmoji: E
                    })
                })).slice(0, 12).map((function(o, l) {
                    return (0, r.jsx)(u.MenuItem, {
                        color: v ? "premium-gradient" : "default",
                        id: null !== (a = null !== (i = null !== (n = o.id) && void 0 !== n ? n : o.optionallyDiverseSequence) && void 0 !== i ? i : o.name) && void 0 !== a ? a : ":".concat(o.name, ":"),
                        label: null == o.id ? o.name : ":".concat(o.name, ":"),
                        disabled: h,
                        imageUrl: function(e) {
                            var t = e.isFocused;
                            return null != o.id ? ie.ZP.getEmojiURL({
                                id: o.id,
                                animated: o.animated && (!f.enabled || t),
                                size: 18
                            }) : ae.ZP.getURL(null !== (c = o.optionallyDiverseSequence) && void 0 !== c ? c : "")
                        },
                        action: function() {
                            (0, q.rU)(t.id, e.id, (0, z.g1)(o), void 0, {
                                burst: v
                            })
                        },
                        dontCloseOnActionIfHoldingShiftKey: !0
                    }, l)
                }));
                return (0, r.jsx)(u.MenuItem, {
                    id: "add-reaction-".concat(l),
                    icon: v && !m ? oe.Z : void 0,
                    label: v ? m || b > 0 ? w.Z.Messages.ADD_BURST_REACTION : w.Z.Messages.GET_SUPER_REACTIONS : w.Z.Messages.ADD_REACTION,
                    action: function() {
                        if (h) {
                            if (m) {
                                (0, fe.openOutOfBurstsModal)();
                                return
                            }(0, W.openBurstReactionsUpsellModal)({
                                analytics: {
                                    type: pe.cd.BURST_REACTION_UPSELL,
                                    page: null != t.getGuildId() ? j.ZY5.GUILD_CHANNEL : j.ZY5.DM_CHANNEL,
                                    section: (0, z.s4)(t),
                                    object: j.qAy.REACTION_RIGHT_CLICK_MENU_UPSELL
                                }
                            })
                        } else if (!v || s) {
                            (0, le.r5)(v);
                            ue.S.dispatchKeyed(j.LPv.TOGGLE_REACTION_POPOUT, e.id, {
                                emojiPicker: !v,
                                emojiBurstPicker: v
                            })
                        } else {
                            (0, le.r5)(!0);
                            ue.S.dispatchKeyed(j.LPv.TOGGLE_REACTION_POPOUT, e.id, {
                                emojiPicker: !0,
                                emojiBurstPicker: !1
                            })
                        }
                    },
                    color: v ? "premium-gradient" : "default",
                    subMenuClassName: X()(ye({}, be().isBurstReactionPicker, v)),
                    children: v && b < 1 ? null : (0, r.jsxs)(r.Fragment, {
                        children: [v ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(u.MenuItem, {
                                id: "add-burst-reaction-count",
                                navigable: !1,
                                render: function() {
                                    return (0, r.jsxs)("div", {
                                        className: be().burstCount,
                                        children: [(0, r.jsx)(ne.Z, {
                                            width: 16,
                                            height: 16,
                                            className: be().burstIcon
                                        }), (0, r.jsx)(u.Heading, {
                                            variant: "heading-sm/bold",
                                            color: "text-normal",
                                            children: w.Z.Messages.SUPER_REACTIONS_LEFT_WITH_PLURAL.format({
                                                count: b
                                            })
                                        })]
                                    })
                                }
                            }), (0, r.jsx)(u.MenuSeparator, {})]
                        }) : null, S, (0, r.jsx)(u.MenuSeparator, {}), (0, r.jsx)(u.MenuItem, {
                            color: v ? "premium-gradient" : "default",
                            id: "other-reactions",
                            label: w.Z.Messages.VIEW_MORE,
                            icon: v ? re.Z : te.Z,
                            disabled: h,
                            action: function() {
                                if (!v || s) {
                                    (0, le.r5)(v);
                                    ue.S.dispatchKeyed(j.LPv.TOGGLE_REACTION_POPOUT, e.id, {
                                        emojiPicker: !v,
                                        emojiBurstPicker: v
                                    })
                                } else {
                                    (0, le.r5)(!0);
                                    ue.S.dispatchKeyed(j.LPv.TOGGLE_REACTION_POPOUT, e.id, {
                                        emojiPicker: !0,
                                        emojiBurstPicker: !1
                                    })
                                }
                            }
                        })]
                    })
                })
            }
            var ge = n(9506),
                ve = n(272112);
            var he = n(979498),
                _e = n(188084),
                me = n(691797);
            var Se = n(443),
                Me = n(720419),
                Ae = n(664625),
                je = n(472034),
                Ie = n(635012);
            var we = n(734777),
                Te = n(880994),
                Re = n(75197),
                Pe = n(164014),
                Ne = n.n(Pe);

            function De(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        De(e, t, n[t])
                    }))
                }
                return e
            }

            function Ce(e, t) {
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
            var Ze = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

            function Ue(e) {
                var t, n = e.emoji,
                    o = e.isFocused,
                    i = n.animated,
                    a = n.src,
                    c = n.surrogates;
                null == a && null != n.id ? a = ie.ZP.getEmojiURL({
                    id: n.id,
                    animated: !!i,
                    size: 20
                }) : null == a && (a = ae.ZP.getURL(c));
                return (0, r.jsx)(u.Tooltip, {
                    text: n.allNamesString,
                    hideOnClick: !0,
                    spacing: 16,
                    forceOpen: o,
                    children: function(e) {
                        return (0, r.jsx)("div", Ce(Le({
                            "aria-label": w.Z.Messages.ADD_REACTION_NAMED.format({
                                emojiName: n.name
                            }),
                            className: X()(Ne().button, De({}, Ne().focused, o))
                        }, e), {
                            children: null == a || "" === a.trim() ? (0, r.jsx)("span", Ce(Le({
                                className: X()("emoji", "emoji-text", Ne().icon)
                            }, e), {
                                children: c
                            })) : (0, r.jsx)("img", {
                                className: Ne().icon,
                                src: a,
                                alt: ""
                            })
                        }))
                    }
                }, null !== (t = n.id) && void 0 !== t ? t : n.name)
            }

            function Ge(e, t) {
                var n = (0,
                        V.MZ)(t.guild_id),
                    o = (0, Y.Xx)({
                        autoTrackExposure: !1
                    }).viewAndUseEnabled,
                    i = n.filter((function(e) {
                        var n;
                        return !(e.useSpriteSheet && Ze.indexOf(null !== (n = e.uniqueName) && void 0 !== n ? n : "") >= 0) && !ae.ZP.isEmojiPremiumLocked({
                            emoji: e,
                            channel: t,
                            intention: de.Hz.REACTION,
                            canViewAndUsePackEmoji: o
                        })
                    }));
                i.length > 4 && (i.length = 4);
                var a, c = $.nc.useSetting(),
                    l = (0, J.$R)(t),
                    s = (0, H.e7)([Q.Z], (function() {
                        return c && l && (t.isPrivate() || Q.Z.can(j.Plq.ADD_REACTIONS, t))
                    }), [t, l, c]);
                return s && i.length > 0 ? (0, r.jsx)(u.MenuGroup, {
                    className: Ne().wrapper,
                    children: i.map((function(n, o) {
                        return (0, r.jsx)(u.MenuItem, {
                            id: "quickreact-".concat(null !== (a = n.id) && void 0 !== a ? a : o),
                            render: function(e) {
                                var t = e.isFocused;
                                return (0, r.jsx)(Ue, {
                                    emoji: n,
                                    isFocused: t
                                })
                            },
                            action: function() {
                                return function(n) {
                                    (0, q.rU)(t.id, e.id, (0, z.g1)(n), void 0)
                                }(n)
                            },
                            dontCloseOnActionIfHoldingShiftKey: !0
                        }, o)
                    }))
                }) : null
            }
            var xe = n(264542);

            function ke(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function Fe(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            ke(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            ke(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function Ke(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Be(e, t) {
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
            var Xe = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                i = t.call(e, u)
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
                        }([i, a])
                    }
                }
            };

            function He(e) {
                return null == e.reactions || 0 === e.reactions.length ? null : (0, r.jsx)(u.MenuItem, {
                    id: "reactions",
                    label: w.Z.Messages.VIEW_REACTIONS,
                    icon: xe.Z,
                    action: function() {
                        return (0, u.openModalLazy)(Fe((function() {
                            var t, o;
                            return Xe(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.resolve().then(n.bind(n, 275865))];
                                    case 1:
                                        t = i.sent(), o = t.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(o, Be(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        Ke(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({}, t), {
                                                message: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
            var Ve = n(502575),
                Ye = n(105783);

            function We(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function qe(e) {
                return function(e) {
                    if (Array.isArray(e)) return We(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return We(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return We(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ze(e, t) {
                var n, i, a, c = o.useContext(u.AccessibilityPreferencesContext).reducedMotion,
                    l = (0, J.$R)(t),
                    s = (0, H.e7)([Q.Z], (function() {
                        return Q.Z.can(j.Plq.MANAGE_MESSAGES, t) && l
                    }), [t, l]),
                    f = e.reactions.reduce((function(e, t) {
                        return null != e.find((function(e) {
                            return null != e.id && e.id === t.emoji.id || e.name === t.emoji.name
                        })) ? e : qe(e).concat([t.emoji])
                    }), []);
                return s && null != e.reactions && 0 !== e.reactions.length ? (0, r.jsx)(u.MenuItem, {
                    id: "remove-emoji-reactions",
                    label: w.Z.Messages.REMOVE_EMOJI_REACTIONS,
                    color: "danger",
                    children: f.map((function(o) {
                        return (0, r.jsx)(u.MenuItem, {
                            id: "remove-emoji-reactions-".concat(null !== (n = o.name) && void 0 !== n ? n : o.id),
                            label: null == o.id ? o.name : ":".concat(o.name, ":"),
                            action: function(n) {
                                return function(n, r) {
                                    n.shiftKey ? (0, q.$E)(t.id, e.id, r) : Ye.Z.show({
                                        title: w.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_TITLE,
                                        body: w.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_BODY,
                                        confirmText: w.Z.Messages.YES_TEXT,
                                        cancelText: w.Z.Messages.NO_TEXT,
                                        onConfirm: function() {
                                            (0, q.$E)(t.id, e.id, r)
                                        }
                                    })
                                }(n, o)
                            },
                            imageUrl: function(e) {
                                var t = e.isFocused;
                                return null != o.id ? ie.ZP.getEmojiURL({
                                    id: o.id,
                                    animated: o.animated && (!c.enabled || t),
                                    size: 18
                                }) : ae.ZP.getURL(null !== (i = o.name) && void 0 !== i ? i : "")
                            },
                            dontCloseOnActionIfHoldingShiftKey: !0
                        }, null !== (a = o.name) && void 0 !== a ? a : o.id)
                    }))
                }) : null
            }
            var Je = n(209752),
                $e = n(156146);
            var Qe = n(354368),
                et = n(528334),
                tt = n(254082);
            var nt = n(530607),
                rt = n(92517);
            var ot = n(307648),
                it = n(813216),
                ut = n(633878);

            function at(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ct(e, t) {
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

            function lt(e, t) {
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

            function st(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    a = void 0 === u ? "currentColor" : u,
                    c = e.foreground,
                    l = lt(e, ["width", "height", "color", "foreground"]);
                return (0,
                    r.jsx)("svg", ct(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            at(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, ut.Z)(l)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: c,
                        fill: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2.99805 4.8C2.99805 3.8055 3.80445 3 4.79805 3H19.198C20.1925 3 20.998 3.8055 20.998 4.8V15.6C20.998 16.5936 20.1925 17.4 19.198 17.4H11.098L7.49805 21V17.4H4.79805C3.80445 17.4 2.99805 16.5936 2.99805 15.6V4.8ZM11.5737 5.16264C11.7336 5.00375 11.9739 4.95652 12.183 5.04208C12.3921 5.12708 12.5279 5.33098 12.5279 5.55487V14.444C12.5279 14.669 12.3921 14.8718 12.183 14.9579C11.9739 15.0435 11.7336 14.9963 11.5737 14.8374L9.1739 12.2217H7.4969C7.18945 12.2217 6.9379 11.9717 6.9379 11.6662V8.33273C6.9379 8.02772 7.18945 7.77716 7.4969 7.77716H9.1739L11.5737 5.16264ZM13.6459 7.22159V6.11044C15.8037 6.11044 17.5589 7.85549 17.5589 9.99944C17.5589 12.1445 15.8037 13.8884 13.6459 13.8884V12.7773C15.1871 12.7773 16.4409 11.5312 16.4409 9.99944C16.4409 8.46829 15.1871 7.22159 13.6459 7.22159ZM15.3229 9.99944C15.3229 9.08108 14.5705 8.33273 13.6459 8.33273V9.44387C13.9539 9.44387 14.2049 9.69332 14.2049 9.99944C14.2049 10.3056 13.9539 10.555 13.6459 10.555V11.6662C14.5705 11.6662 15.3229 10.9189 15.3229 9.99944Z"
                    })
                }))
            }
            var ft = n(890592);
            var dt = n(749106);

            function pt(e) {
                var t, n, r, o, u, c, l = e.channel,
                    f = e.message,
                    p = e.target,
                    O = e.attachment,
                    b = e.shouldHideMediaOptions,
                    y = e.onSelect,
                    E = e.onHeightUpdate,
                    g = (0, d.Z)(s.t),
                    v = p,
                    h = p.getAttribute("data-type"),
                    _ = p.getAttribute("data-id"),
                    m = p.getAttribute("data-name");
                if (null != O) r = n = o = O.url;
                else
                    for (;
                        (0, i.k)(v);) {
                        (0, i.k)(v, HTMLImageElement) && null != v.src && (r = v.src);
                        if ((0, i.k)(v, HTMLAnchorElement) && null != v.href) {
                            n = v.href;
                            u = v.textContent;
                            if (null == r && "img" === v.getAttribute("data-role")) {
                                r = n;
                                v.hasAttribute("data-safe-src") && "" !== v.getAttribute("data-safe-src") && (o = v.getAttribute("data-safe-src"))
                            }
                        }
                        v = v.parentNode
                    }
                return Ot({
                    message: f,
                    channel: l,
                    textSelection: null !== (c = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== c ? c : "",
                    favoriteableType: h,
                    favoriteableId: _,
                    favoriteableName: m,
                    itemHref: n,
                    itemSrc: r,
                    itemSafeSrc: o,
                    itemTextContent: u,
                    canReport: g === dt.NZ.TREATMENT_1,
                    onHeightUpdate: E,
                    onSelect: y,
                    onClose: a.Zy,
                    navId: "message",
                    ariaLabel: w.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    shouldHideMediaOptions: b
                })
            }

            function Ot(e) {
                var t = e.message,
                    n = e.channel,
                    o = e.textSelection,
                    i = e.favoriteableType,
                    a = e.favoriteableId,
                    s = e.favoriteableName,
                    d = e.itemHref,
                    v = e.itemSrc,
                    h = e.itemSafeSrc,
                    _ = e.itemTextContent,
                    m = e.canReport,
                    S = e.onHeightUpdate,
                    M = e.onSelect,
                    A = e.onClose,
                    I = e.navId,
                    T = e.ariaLabel,
                    R = e.shouldHideMediaOptions,
                    P = void 0 !== R && R,
                    N = (0, c.Qd)(n.getGuildId()),
                    D = N.enabled,
                    L = N.hasTwoButtonEntryPoint,
                    C = (0, p.Z)(o),
                    Z = (0, y.Z)(o),
                    U = Ge(t, n),
                    G = Ee(t, n),
                    x = Ee(t, n, g.O.BURST, L),
                    k = function(e, t) {
                        var n = (0, H.e7)([Ae.default], (function() {
                                return Ae.default.getId()
                            })),
                            o = (0, J.$R)(t),
                            i = (0, J.Gu)(t);
                        return (0, Ie.Z)(e, n) && o && !i ? (0, r.jsx)(u.MenuItem, {
                            id: "edit",
                            label: w.Z.Messages.EDIT_MESSAGE,
                            action: function() {
                                return Me.Z.startEditMessage(t.id, e.id, e.content)
                            },
                            icon: je.Z
                        }) : null
                    }(t, n),
                    B = (0, Re.Z)(t, n),
                    X = (0, we.Z)({
                        type: i,
                        id: a,
                        name: s
                    }),
                    V = function(e, t) {
                        return e.state !== j.yb.SEND_FAILED ? null : (0, r.jsx)(u.MenuItem, {
                            id: "resend",
                            label: w.Z.Messages.RESEND_MESSAGE,
                            action: function() {
                                return (0, rt.Z)(t, e, void 0, nt.Z.getOptions(e.id))
                            }
                        })
                    }(t, n),
                    Y = (0, Te.Z)(t, n),
                    W = He(t),
                    z = function(e, t) {
                        var n = t.getGuildId();
                        return null == n || e.type !== j.uaV.USER_JOIN && e.type !== j.uaV.GUILD_INVITE_REMINDER || !Q.Z.canWithPartialContext(j.Plq.MANAGE_GUILD, {
                            guildId: n
                        }) ? null : (0, r.jsx)(u.MenuItem, {
                            id: "configure",
                            label: w.Z.Messages.CONFIGURE,
                            icon: ge.Z,
                            action: function() {
                                return (0, ve.zW)(t)
                            }
                        })
                    }(t, n),
                    $ = (0, he.Z)(t, n),
                    ee = function(e, t) {
                        var n = (0, J.$R)(t);
                        return (0, H.e7)([Q.Z], (function() {
                            return Q.Z.can(j.Plq.MANAGE_MESSAGES, t) && n
                        }), [t, n]) && null != e.reactions && 0 !== e.reactions.length ? (0, r.jsx)(u.MenuItem, {
                            id: "remove-reactions",
                            label: w.Z.Messages.REMOVE_ALL_REACTIONS,
                            action: function(n) {
                                n.shiftKey ? (0, q.wX)(t.id, e.id) : Ye.Z.show({
                                    title: w.Z.Messages.REMOVE_ALL_REACTIONS_CONFIRM_TITLE,
                                    body: w.Z.Messages.REMOVE_ALL_REACTIONS_CONFIRM_BODY,
                                    confirmText: w.Z.Messages.YES_TEXT,
                                    cancelText: w.Z.Messages.NO_TEXT,
                                    onConfirm: function() {
                                        (0, q.wX)(t.id, e.id)
                                    }
                                })
                            },
                            color: "danger"
                        }) : null
                    }(t, n),
                    te = ze(t, n),
                    ne = (0,
                        Se.Z)(t, n),
                    re = function(e) {
                        return (0, tt.a4)(e) ? (0, r.jsx)(u.MenuItem, {
                            id: "report",
                            label: w.Z.Messages.REPORT_MESSAGE_MENU_OPTION,
                            action: function() {
                                return (0, Qe.ak)(e)
                            },
                            icon: et.Z,
                            color: "danger"
                        }) : null
                    }(t),
                    oe = function(e, t) {
                        var n = (0, H.e7)([it.Z], (function() {
                            return it.Z.isSpeakingMessage(t.id, e.id)
                        }), [t, e]);
                        return "" === e.content ? null : (0, r.jsx)(u.MenuItem, {
                            id: "tts",
                            label: n ? w.Z.Messages.STOP_SPEAKING_MESSAGE : w.Z.Messages.SPEAK_MESSAGE,
                            icon: st,
                            action: function() {
                                return n ? (0, ot.NB)() : (0, ot.LA)(t, e)
                            }
                        })
                    }(t, n),
                    ie = (0, b.Z)(null != d ? d : v, _, t, {
                        shouldHideMediaOptions: P
                    }),
                    ue = (0, O.Z)(h, t, {
                        shouldHideMediaOptions: P
                    }),
                    ae = (0, f.Z)({
                        id: t.id,
                        label: w.Z.Messages.COPY_ID_MESSAGE,
                        shiftId: "".concat(t.channel_id, "-").concat(t.id)
                    }),
                    ce = function(e, t) {
                        return (0, Je.U)(t, e) ? (0, r.jsx)(u.MenuItem, {
                            id: "reply",
                            label: w.Z.Messages.MESSAGE_ACTION_REPLY,
                            icon: $e.Z,
                            action: function(n) {
                                (0, ve.HH)(t, e, n)
                            }
                        }) : null
                    }(t, n),
                    le = function(e, t) {
                        return (0, J.NE)(t, e) ? (0, r.jsx)(u.MenuItem, {
                            id: "thread",
                            label: w.Z.Messages.CREATE_THREAD,
                            icon: ft.Z,
                            action: function() {
                                (0, ve.gK)(t, e)
                            }
                        }) : null
                    }(t, n),
                    se = (0, K.Z)(t, n, {
                        hoist: !0
                    }),
                    fe = F(o, n.getGuildId()),
                    de = (0, Ve.Z)(t),
                    pe = function(e) {
                        return me.wS ? (0, r.jsx)(u.MenuItem, {
                            id: "copy-text",
                            label: w.Z.Messages.COPY_TEXT,
                            icon: _e.Z,
                            action: function() {
                                (0, me.JG)(e.content)
                            }
                        }) : null
                    }(t),
                    Oe = (0, E.Z)({
                        commandType: l.yU.MESSAGE,
                        commandTargetId: t.id,
                        channel: n,
                        guildId: void 0,
                        location: "MessageMenu",
                        onShow: S
                    });
                return (0, r.jsxs)(u.Menu, {
                    navId: I,
                    onClose: A,
                    "aria-label": T,
                    onSelect: M,
                    children: [(0, r.jsx)(u.MenuGroup, {
                        children: C
                    }), (0, r.jsx)(u.MenuGroup, {
                        children: Z
                    }), (0, r.jsxs)(u.MenuGroup, {
                        children: ["" === o ? U : null, G, D && x, W, k, B, X, ce, le, pe, Oe, V, Y, de, z, $, oe, se, te, ee, ne, m && re]
                    }), null != fe && (0, r.jsx)(u.MenuGroup, {
                        children: fe
                    }), (0, r.jsx)(u.MenuGroup, {
                        children: ue
                    }), (0, r.jsx)(u.MenuGroup, {
                        children: ie
                    }), (0, r.jsx)(u.MenuGroup, {
                        children: ae
                    })]
                })
            }
        },
        274903: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(785893),
                o = (n(667294),
                    n(349289)),
                i = n(202351),
                u = n(882723),
                a = n(721376),
                c = n(123398),
                l = n(910149),
                s = n(940060),
                f = n(773411),
                d = n(682776),
                p = n(2590),
                O = s.Z.combine(p.Plq.VIEW_CHANNEL, p.Plq.MANAGE_MESSAGES, p.Plq.READ_MESSAGE_HISTORY);
            var b = n(473708);

            function y(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function E(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            y(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            y(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function g(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        g(e, t, n[t])
                    }))
                }
                return e
            }

            function h(e, t) {
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
            var _ = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                i = t.call(e, u)
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
                        }([i, a])
                    }
                }
            };

            function m(e, t, s) {
                var y = t.getGuildId(),
                    g = (0, i.e7)([c.ZP], (function() {
                        return null !== y && c.ZP.getIsItemFeatured({
                            guildId: y,
                            entity: e,
                            entityType: o.w.MESSAGE
                        })
                    }), [e, y]),
                    m = (0, a.Z)(t, s);
                if (e.isFirstMessageInForumPost(t)) return m;
                var S = function(e, t) {
                    var n = e.getGuildId();
                    return !!(null !== n && (0, f.YM)(n) && p.TPd.GUILD_FEED_FEATURABLE_MESSAGES.has(e.type) && (0, l.fx)(e) && (0, l.XY)(t) && d.Z.can(O, e))
                }(t, e);
                return S ? g ? (0, r.jsx)(u.MenuItem, {
                    id: "guild-feed-unfeature",
                    label: b.Z.Messages.GUILD_FEED_UNFEATURE_MESSAGE,
                    action: function() {
                        return null == y ? null : (0, u.openModalLazy)(E((function() {
                            var t;
                            return _(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(46738), n.e(85293)]).then(n.bind(n, 846738))];
                                    case 1:
                                        t = i.sent().UnfeatureItemConfirmationModal;
                                        return [2, function(n) {
                                            return (0, r.jsx)(t, h(v({}, n), {
                                                featureableItem: {
                                                    guildId: y,
                                                    entity: e,
                                                    entityType: o.w.MESSAGE
                                                },
                                                header: b.Z.Messages.GUILD_FEED_UNFEATURED_MESSAGE_MODAL_HEADER,
                                                body: b.Z.Messages.GUILD_FEED_UNFEATURED_MESSAGE_MODAL_BODY
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "guild-feed-feature",
                    label: b.Z.Messages.GUILD_FEED_FEATURE_MESSAGE,
                    children: (0, l.DE)().map((function(o) {
                        var i = o.value,
                            a = o.timePeriod;
                        return (0, r.jsx)(u.MenuItem, {
                            id: "".concat(i),
                            label: (0, l.Vm)(a),
                            action: function() {
                                return null == y ? null : (0, u.openModalLazy)(E((function() {
                                    var o;
                                    return _(this, (function(u) {
                                        switch (u.label) {
                                            case 0:
                                                return [4, Promise.all([n.e(40532), n.e(46738), n.e(85293)]).then(n.bind(n, 846738))];
                                            case 1:
                                                o = u.sent().FeatureMessageConfirmationModal;
                                                return [2, function(n) {
                                                    return (0, r.jsx)(o, h(v({}, n), {
                                                        message: e,
                                                        channel: t,
                                                        guildId: y,
                                                        expiresSeconds: i,
                                                        timePeriod: a,
                                                        options: s
                                                    }))
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
        734777: (e, t, n) => {
            n.d(t, {
                Z: () => M
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                u = n(882723),
                a = n(91500),
                c = n(579581),
                l = n(589503),
                s = n(245353),
                f = n(135855),
                d = n(879913),
                p = n(840598),
                O = n(798826),
                b = n(217544),
                y = n(78551),
                E = n(513586),
                g = n(2590),
                v = n(473708);

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        h(e, t, n[t])
                    }))
                }
                return e
            }

            function m(e, t) {
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

            function S(e) {
                return f.ZP.getByName(e.replace(/(^:|:$)/g, ""))
            }

            function M(e) {
                var t = e.type,
                    n = e.id,
                    h = e.name,
                    M = e.isInExpressionPicker,
                    A = void 0 !== M && M,
                    j = (0, c.O)().location,
                    I = o.useMemo((function() {
                        return m(_({}, j), {
                            section: A ? g.jXE.EXPRESSION_PICKER : g.jXE.CONTEXT_MENU
                        })
                    }), [j, A]),
                    w = (0, b.Go)(),
                    T = (0, i.e7)([y.Z], (function() {
                        return t === d.S.STICKER && null != n ? y.Z.getStickerById(n) : null
                    })),
                    R = null != T && w.includes(T.id),
                    P = (0, i.e7)([s.Z], (function() {
                        if (t === d.S.EMOJI) {
                            if (null != n) return s.Z.getDisambiguatedEmojiContext().getById(n);
                            if (null != h) {
                                var e;
                                return null !== (e = S(h)) && void 0 !== e ? e : S(f.ZP.convertSurrogateToName(h))
                            }
                        }
                    })),
                    N = (0, l.C1)(null, P);
                return null != T && t === d.S.STICKER ? (0, E.J8)(T) && !(0, E.V9)(T) ? null : R ? (0, r.jsx)(u.MenuItem, {
                    id: "unfavorite",
                    action: function() {
                        return (0, p.hW)(T.id)
                    },
                    label: v.Z.Messages.UNFAVORITE_ITEM
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "favorite",
                    action: function() {
                        (0, O.cQ)({
                            sticker: T,
                            location: m(_({}, I), {
                                object: g.qAy.STICKER
                            })
                        });
                        (0, p.SA)(null == T ? void 0 : T.id)
                    },
                    label: v.Z.Messages.FAVORITE_ITEM
                }) : null != P && t === d.S.EMOJI ? N ? (0, r.jsx)(u.MenuItem, {
                    id: "unfavorite",
                    action: function() {
                        return (0, a.Xe)(P)
                    },
                    label: v.Z.Messages.UNFAVORITE_ITEM
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "favorite",
                    action: function() {
                        (0, l.J1)({
                            emoji: P,
                            location: m(_({}, I), {
                                object: g.qAy.EMOJI
                            })
                        });
                        (0, a.$K)(P)
                    },
                    label: v.Z.Messages.FAVORITE_ITEM
                }) : void 0
            }
        },
        75197: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(882723),
                u = n(933818),
                a = n(913928),
                c = n(682776),
                l = n(715173),
                s = n(618738),
                f = n(2590),
                d = n(473708);

            function p(e, t) {
                var n = (0, o.e7)([c.Z], (function() {
                    return c.Z.can(f.Plq.MANAGE_MESSAGES, t)
                }), [t]);
                return e.state === f.yb.SEND_FAILED ? null : (0, s.Z)(e, t, n) ? !1 === e.pinned ? (0, r.jsx)(i.MenuItem, {
                    id: "pin",
                    action: function(n) {
                        n.shiftKey ? u.Z.pinMessage(t, e.id) : a.Z.confirmPin(t, e)
                    },
                    label: d.Z.Messages.PIN_MESSAGE,
                    icon: l.Z
                }) : (0, r.jsx)(i.MenuItem, {
                    id: "unpin",
                    action: function(n) {
                        n.shiftKey ? u.Z.unpinMessage(t, e.id) : a.Z.confirmUnpin(t, e)
                    },
                    label: d.Z.Messages.UNPIN_MESSAGE,
                    icon: l.Z
                }) : null
            }
        },
        502575: (e, t, n) => {
            n.d(t, {
                Z: () => O,
                W: () => b
            });
            var r = n(785893),
                o = (n(667294), n(730381)),
                i = n.n(o),
                u = n(202351),
                a = n(882723),
                c = n(931893),
                l = n(229633),
                s = n(489981),
                f = n(343318),
                d = n(431089),
                p = n(473708);

            function O(e) {
                var t = l.Z.useExperiment({
                        location: "a65531_1"
                    }, {
                        autoTrackExposure: !1
                    }).showReminders,
                    n = (0, u.e7)([s.Z], (function() {
                        return null != s.Z.getMessageReminders().find((function(t) {
                            return t.messageId === e.id
                        }))
                    })),
                    o = b(e, (function(t) {
                        return (0, c.BW)(e, i()().add(t, "millisecond").toDate())
                    }));
                return t ? (0, r.jsx)(a.MenuItem, {
                    id: "mark-todo",
                    label: n ? p.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : p.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
                    icon: n ? d.Z : void 0,
                    action: function() {
                        return n ? (0, c.Kp)(e.id) : (0, c.BW)(e)
                    },
                    children: n ? null : o
                }) : null
            }

            function b(e, t) {
                return f.BS.map((function(e) {
                    var n = e.duration,
                        o = e.getLabel;
                    return (0, r.jsx)(a.MenuItem, {
                        id: "mark-todo-".concat(n),
                        label: o(),
                        action: function() {
                            return t(n)
                        }
                    }, n)
                }))
            }
        },
        893516: (e, t, n) => {
            n.d(t, {
                Z: () => T
            });
            var r = n(785893),
                o = (n(667294), n(882723)),
                i = n(105783),
                u = n(440922),
                a = n(356845),
                c = n(652591),
                l = n(120415),
                s = n(22176),
                f = n(310126),
                d = n(220461),
                p = n(2590),
                O = n(473708);

            function b(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function y(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            b(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            b(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        E(e, t, n[t])
                    }))
                }
                return e
            }
            var v = function(e, t) {
                    var n, r, o, i, u = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                    i = t.call(e, u)
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
                            }([i, a])
                        }
                    }
                },
                h = "https://media.discordapp.net",
                _ = /^.*\.discordapp\.net$/,
                m = "https://cdn.discordapp.com",
                S = "".concat(h, "/stickers"),
                M = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
                A = new Set(["jpg", "jpeg", "png"]),
                j = function(e) {
                    var t;
                    return null === (t = new URL(e).pathname.split(".").pop()) || void 0 === t ? void 0 : t.toLowerCase()
                };

            function I(e) {
                var t = j(e);
                return null != t && A.has(t)
            }

            function w(e, t) {
                i.Z.show({
                    title: O.Z.Messages.ERROR,
                    body: e
                });
                s.Z.captureException(t)
            }

            function T(e, t, n) {
                var i, s, b;
                if ((0, a.Z)(null == t ? void 0 : t.getChannelId()) || !0 === (null == n ? void 0 : n.shouldHideMediaOptions)) return null;
                if (!l.FB || null == e || !(i = e, s = new URL(i), b = j(i), (_.test(s.hostname) || s.origin === m) && !i.startsWith(S) && !(0, u.zt)(i) && null != b && M.has(b))) return null;
                var E, A = function(e) {
                        var t = new URL(e);
                        if (t.origin === m) return e;
                        if (t.origin === h) return m + t.pathname;
                        t.searchParams.delete("width");
                        t.searchParams.delete("height");
                        t.searchParams.set("quality", "lossless");
                        return t.toString()
                    }(e),
                    T = (E = y((function() {
                        var e;
                        return v(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    t.trys.push([0, 2, , 3]);
                                    return [4, f.ZP.saveImage(A)];
                                case 1:
                                    t.sent();
                                    c.default.track(p.rMx.CONTEXT_MENU_IMAGE_SAVED, g({}, (0, d.v)()));
                                    return [3, 3];
                                case 2:
                                    e = t.sent();
                                    c.default.track(p.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, g({}, (0, d.v)()));
                                    w(O.Z.Messages.ERROR_SAVING_IMAGE, e);
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    })), function() {
                        return E.apply(this, arguments)
                    }),
                    R = function() {
                        var e = y((function() {
                            var e;
                            return v(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        t.trys.push([0, 2, , 3]);
                                        return [4, f.ZP.copyImage(A)];
                                    case 1:
                                        t.sent();
                                        c.default.track(p.rMx.CONTEXT_MENU_IMAGE_COPIED, g({}, (0, d.v)()));
                                        return [3, 3];
                                    case 2:
                                        e = t.sent();
                                        w(O.Z.Messages.ERROR_COPYING_IMAGE, e);
                                        c.default.track(p.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, g({}, (0, d.v)()));
                                        return [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return [f.ZP.canCopyImage() && I(e) ? (0, r.jsx)(o.MenuItem, {
                    id: "copy-image",
                    label: O.Z.Messages.COPY_IMAGE_MENU_ITEM,
                    action: R
                }, "copy-image") : null, (0, r.jsx)(o.MenuItem, {
                    id: "save-image",
                    label: O.Z.Messages.SAVE_IMAGE_MENU_ITEM,
                    action: T
                }, "save-image")]
            }
        },
        209752: (e, t, n) => {
            n.d(t, {
                o: () => E,
                U: () => y
            });
            var r = n(141780),
                o = n(202351),
                i = n(872017);
            const u = (0, n(260561).B)({
                kind: "guild",
                id: "2023-07_allow_welcome_message_replies",
                label: "Allow replies to welcome messages",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var a = n(791707),
                c = n(225386),
                l = n(682776),
                s = n(2590),
                f = n(520453);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(e, t, n) {
                var o;
                o = e.isPrivate() ? !e.isSystemDM() : n.can(f.Pl.SEND_MESSAGES, e) && n.can(f.Pl.READ_MESSAGE_HISTORY, e);
                var i = !(0, a.Z)(t),
                    c = r.V.REPLYABLE.has(t.type),
                    l = u.getCurrentConfig({
                        guildId: e.guild_id,
                        location: "51c7ba_1"
                    }, {
                        autoTrackExposure: t.type === r.u.USER_JOIN
                    }).enabled;
                return o && (l ? c : i)
            }

            function b(e, t, n, r, o) {
                var i = t.hasFlag(s.iLy.EPHEMERAL),
                    u = t.state === s.yb.SENT,
                    a = !e.isArchivedThread() || o;
                return n && u && !i && !r && a
            }

            function y(e, t) {
                var n, r = (0, c.tc)(e),
                    u = p((0, i.AB)(null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : void 0), 2)[1],
                    a = (0, o.e7)([l.Z], (function() {
                        return null != e && null != t && O(e, t, l.Z)
                    }));
                return null != e && null != t && b(e, t, a, u, r)
            }

            function E(e, t) {
                var n, r = (0, c.kn)(e),
                    o = O(e, t, l.Z),
                    u = p((0, i.s5)(null !== (n = e.getGuildId()) && void 0 !== n ? n : void 0), 2);
                return b(e, t, o, u[1], r)
            }
        },
        307648: (e, t, n) => {
            n.d(t, {
                cP: () => o,
                LA: () => i,
                Bo: () => u,
                NB: () => a,
                Ct: () => c
            });
            var r = n(744564);

            function o(e, t, n, o, i) {
                r.Z.dispatch({
                    type: "SPEAK_TEXT",
                    text: e,
                    interrupt: t,
                    maxLength: n,
                    onStart: o,
                    onEnd: i
                })
            }

            function i(e, t) {
                r.Z.dispatch({
                    type: "SPEAK_MESSAGE",
                    channel: e,
                    message: t
                })
            }

            function u(e, t) {
                r.Z.dispatch({
                    type: "SPEAKING_MESSAGE",
                    channelId: e,
                    messageId: t
                })
            }

            function a() {
                r.Z.dispatch({
                    type: "STOP_SPEAKING"
                })
            }

            function c(e) {
                r.Z.dispatch({
                    type: "SET_TTS_SPEECH_RATE",
                    speechRate: e
                })
            }
        },
        813216: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        a(e, t, n[t])
                    }))
                }
                return e
            }

            function s(e, t) {
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
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e, t) {
                d = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return d(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
                var t = function() {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var b = {
                    speechRate: 1,
                    currentMessage: null
                },
                y = b;
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && d(e, t)
                }(n, e);
                var t = O(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    y = l({}, b, null != e ? e : null)
                };
                r.isSpeakingMessage = function(e, t) {
                    var n = y.currentMessage;
                    return null !== n && n.channelId === e && n.messageId === t
                };
                r.getUserAgnosticState = function() {
                    return y
                };
                r.__getLocalVars = function() {
                    return {
                        initialState: b,
                        state: y
                    }
                };
                ! function(e, t, n) {
                    t && u(e.prototype, t);
                    n && u(e, n)
                }(n, [{
                    key: "currentMessage",
                    get: function() {
                        return y.currentMessage
                    }
                }, {
                    key: "speechRate",
                    get: function() {
                        return y.speechRate
                    }
                }]);
                return n
            }(r.ZP.DeviceSettingsStore);
            E.displayName = "TTSStore";
            E.persistKey = "TTSStore";
            E.migrations = [];
            const g = new E(o.Z, __OVERLAY__ ? {} : {
                SPEAKING_MESSAGE: function(e) {
                    var t = e.messageId,
                        n = e.channelId;
                    y = s(l({}, y), {
                        currentMessage: {
                            messageId: t,
                            channelId: n
                        }
                    })
                },
                STOP_SPEAKING: function() {
                    y = s(l({}, y), {
                        currentMessage: null
                    })
                },
                SET_TTS_SPEECH_RATE: function(e) {
                    y = s(l({}, y), {
                        speechRate: e.speechRate
                    })
                }
            })
        },
        264542: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
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

            function a(e, t) {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    l = void 0 === c ? 24 : c,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: l,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: f,
                        className: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.522 17.523 22 12 22C6.477 22 2 17.522 2 12ZM6.375 12.8713C7.41054 12.8713 8.25 12.0318 8.25 10.9963C8.25 9.96073 7.41053 9.12128 6.375 9.12128C5.33947 9.12128 4.5 9.96073 4.5 10.9963C4.5 12.0318 5.33946 12.8713 6.375 12.8713ZM19.5 10.9963C19.5 12.0318 18.6605 12.8713 17.625 12.8713C16.5895 12.8713 15.75 12.0318 15.75 10.9963C15.75 9.96073 16.5895 9.12128 17.625 9.12128C18.6605 9.12128 19.5 9.96073 19.5 10.9963ZM10.4867 14.825C10.3576 14.3236 9.8465 14.0217 9.34508 14.1508C8.84365 14.2798 8.54179 14.791 8.67085 15.2924C9.0524 16.7748 10.397 17.8712 12 17.8712C13.603 17.8712 14.9476 16.7748 15.3291 15.2924C15.4582 14.791 15.1563 14.2798 14.6549 14.1508C14.1535 14.0217 13.6424 14.3236 13.5133 14.825C13.3398 15.4991 12.7268 15.9962 12 15.9962C11.2732 15.9962 10.6602 15.4991 10.4867 14.825Z"
                    })
                }))
            }
        },
        156146: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(785893);
            n(667294);

            function o(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    a = void 0 === u ? "currentColor" : u,
                    c = e.className,
                    l = e.foreground;
                return (0, r.jsx)("svg", {
                    className: c,
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        d: "M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z",
                        className: l,
                        fill: a
                    })
                })
            }
        }
    }
]);