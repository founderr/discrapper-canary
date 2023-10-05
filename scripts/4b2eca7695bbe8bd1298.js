"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [79652, 88110, 96043, 53686, 71402], {
        152702: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(730381),
                i = n.n(r),
                o = n(327499);

            function u(e, t, n, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, i)
            }
            var l = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                        if (!(i = u.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
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
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };
            const a = {
                setCommunicationDisabledDuration: function(e, t, n, r, a) {
                    return (c = function() {
                        var u;
                        return l(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    u = null != n ? i()().add(n, "s").toISOString() : null;
                                    return [4, o.Z.setCommunicationDisabledUntil({
                                        guildId: e,
                                        userId: t,
                                        communicationDisabledUntilTimestamp: u,
                                        duration: n,
                                        reason: r,
                                        location: a
                                    })];
                                case 1:
                                    l.sent();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, r) {
                            var i = c.apply(e, t);

                            function o(e) {
                                u(i, n, r, o, l, "next", e)
                            }

                            function l(e) {
                                u(i, n, r, o, l, "throw", e)
                            }
                            o(void 0)
                        }))
                    })();
                    var c
                }
            }
        },
        971402: (e, t, n) => {
            n.d(t, {
                Zy: () => f,
                vq: () => d,
                jW: () => p
            });
            var r = n(744564),
                i = n(26468),
                o = n(120415),
                u = n(73105),
                l = n(2590);

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

            function s(e) {
                r.Z.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: e
                })
            }

            function f(e) {
                (0, n(973935).flushSync)((function() {
                    r.Z.wait((function() {
                        r.Z.dispatch({
                            type: "CONTEXT_MENU_CLOSE"
                        }).finally(e)
                    }))
                }))
            }

            function d(e, t, n, r) {
                e.stopPropagation();
                if (null == e.currentTarget.contains || e.currentTarget.contains(e.target)) {
                    var a, f, d = 0,
                        p = 0;
                    if ("pageX" in e) {
                        d = e.pageX;
                        p = e.pageY
                    }
                    if (0 === d && 0 === p) {
                        var E, _ = null === (E = e.target) || void 0 === E ? void 0 : E.getBoundingClientRect(),
                            O = null != _ ? _ : {},
                            h = O.left,
                            v = void 0 === h ? 0 : h,
                            g = O.top,
                            y = void 0 === g ? 0 : g,
                            I = O.width,
                            b = void 0 === I ? 0 : I,
                            T = O.height;
                        d = v + b / 2;
                        p = y + (void 0 === T ? 0 : T) / 2
                    }
                    var m = {
                        render: t,
                        renderLazy: r,
                        target: null !== (a = e.target) && void 0 !== a ? a : e.currentTarget,
                        rect: new DOMRect(d, p, 0, 0),
                        config: c({
                            context: __OVERLAY__ ? l.IlC.OVERLAY : null !== (f = (0, i.GB)()) && void 0 !== f ? f : l.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, o.nI)()) var S = (0, u.RD)((function() {
                        S();
                        s(m)
                    }));
                    else {
                        e.preventDefault();
                        s(m)
                    }
                }
            }

            function p(e, t, n) {
                d(e, void 0, n, t)
            }
        },
        623934: (e, t, n) => {
            n.d(t, {
                ym: () => o,
                w5: () => u,
                b8: () => l,
                TV: () => a
            });
            var r = n(744564),
                i = n(168024);

            function o(e, t) {
                r.Z.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function u(e, t) {
                r.Z.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function l(e, t, n) {
                r.Z.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function a(e) {
                var t = e.guildId,
                    n = e.channelId,
                    r = e.y,
                    o = e.height,
                    u = e.rowHeight,
                    a = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return Math.max(0, Math.ceil(Math.ceil(e / u)) + t)
                    },
                    c = function(e) {
                        var t = e + (i.dj - 1);
                        s.push([e, t]);
                        return t + 1
                    },
                    s = [],
                    f = a(.5 * o),
                    d = a(r, -f),
                    p = a(r + o, f);
                d > 0 && (d = Math.max(c(0), d));
                d = Math.floor(d / i.dj) * i.dj;
                for (; d <= p;) d = c(d);
                l(t, n, s)
            }
        },
        735885: (e, t, n) => {
            n.d(t, {
                jN: () => i,
                xf: () => o,
                Ou: () => u
            });
            var r = n(744564);

            function i(e) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function o() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function u() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        285991: (e, t, n) => {
            n.d(t, {
                k: () => h,
                Lr: () => v,
                mB: () => g,
                PR: () => y,
                In: () => I,
                Sr: () => T
            });
            var r = n(441143),
                i = n.n(r),
                o = n(495414),
                u = n(281110),
                l = n(744564),
                a = n(722406),
                c = n(473903),
                s = n(2590);

            function f(e, t, n, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, i)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            f(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            f(o, r, i, u, l, "throw", e)
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

            function E(e) {
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
            var _ = function(e, t) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                    o = t.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                O = new o.Z("UserProfileModalActionCreators");

            function h() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.withAnalyticsToken,
                    n = void 0 !== t && t;
                return u.ZP.get({
                    url: s.ANM.ME,
                    query: {
                        with_analytics_token: n
                    },
                    oldFormErrors: !0
                }).then((function(e) {
                    l.Z.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: e.body,
                        analyticsToken: n ? e.body.analytics_token : void 0
                    });
                    return new a.Z(e.body)
                }))
            }

            function v() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return u.ZP.patch({
                    url: s.ANM.USER_AGREEMENTS,
                    body: {
                        terms: e,
                        privacy: t
                    },
                    oldFormErrors: !0
                }).then((function() {
                    return !0
                }), (function() {
                    return !1
                }))
            }

            function g(e, t) {
                var n = c.default.getCurrentUser();
                i()(null != n, "setFlag: user cannot be undefined");
                var r = t ? n.flags | e : n.flags & ~e;
                return u.ZP.patch({
                    url: s.ANM.ME,
                    oldFormErrors: !0,
                    body: {
                        flags: r
                    }
                })
            }

            function y(e) {
                var t = c.default.getUser(e);
                return null != t ? Promise.resolve(t) : u.ZP.get({
                    url: s.ANM.USER(e),
                    oldFormErrors: !0
                }).then((function(t) {
                    l.Z.dispatch({
                        type: "USER_UPDATE",
                        user: t.body
                    });
                    return c.default.getUser(e)
                }))
            }

            function I(e) {
                return b.apply(this, arguments)
            }

            function b() {
                b = d((function(e) {
                    var t, n, r, i, o, a, c, f, d, p = arguments;
                    return _(this, (function(_) {
                        switch (_.label) {
                            case 0:
                                t = p.length > 1 && void 0 !== p[1] ? p[1] : {}, n = t.friendToken, r = t.withMutualGuilds, i = t.withMutualFriendsCount, o = t.guildId, a = t.connectionsRoleId, c = p.length > 2 ? p[2] : void 0;
                                l.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_START",
                                    userId: e
                                });
                                _.label = 1;
                            case 1:
                                _.trys.push([1, 3, , 4]);
                                return [4, u.ZP.get({
                                    url: s.ANM.USER_PROFILE(e),
                                    query: {
                                        friend_token: n,
                                        with_mutual_guilds: r,
                                        with_mutual_friends_count: i,
                                        guild_id: o,
                                        connections_role_id: a
                                    },
                                    oldFormErrors: !0
                                })];
                            case 2:
                                f = _.sent();
                                null == c || c(f.body, o);
                                l.Z.dispatch({
                                    type: "USER_UPDATE",
                                    user: f.body.user
                                });
                                l.Z.dispatch(E({
                                    type: "USER_PROFILE_FETCH_SUCCESS"
                                }, f.body));
                                null != o && null != f.body.guild_member && l.Z.dispatch({
                                    type: "GUILD_MEMBER_PROFILE_UPDATE",
                                    guildId: o,
                                    guildMember: f.body.guild_member
                                });
                                return [2, f.body];
                            case 3:
                                null != (d = _.sent()) && null != (null == d ? void 0 : d.body) && O.warn("fetchProfile error: ".concat(d.body.code, " - ").concat(d.body.message));
                                l.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_FAILURE",
                                    userId: e
                                });
                                throw d;
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return b.apply(this, arguments)
            }

            function T(e) {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = d((function(e) {
                    var t, n;
                    return _(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                l.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_START",
                                    userId: e
                                });
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, u.ZP.get({
                                    url: s.ANM.USER_RELATIONSHIPS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = r.sent();
                                l.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
                                    userId: e,
                                    mutualFriends: t.body
                                });
                                return [3, 4];
                            case 3:
                                null != (null == (n = r.sent()) ? void 0 : n.body) && O.warn("fetchMutualFriends error: ".concat(n.body.code, " - ").concat(n.body.message));
                                l.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_FAILURE",
                                    userId: e
                                });
                                throw n;
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        396179: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var r = n(281110),
                i = n(630631),
                o = n(744564),
                u = n(735885),
                l = n(2590);

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

            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                o.Z.dispatch(c({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t
                }, n));
                (0, u.jN)(l.S9g.USER_SETTINGS)
            }
            var f = n(223219),
                d = n(652591),
                p = n(775173),
                E = n(488110),
                _ = n(239620),
                O = n(473708);

            function h(e, t, n) {
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
                        h(e, t, n[t])
                    }))
                }
                return e
            }

            function g(e, t) {
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
            const y = {
                open: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    s(e, t, n)
                },
                init: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    o.Z.dispatch(v({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: e,
                        subsection: t
                    }, n))
                },
                close: function() {
                    var e = f.Z.onClose;
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != e && e()
                },
                setSection: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    o.Z.dispatch(v({
                        type: "USER_SETTINGS_MODAL_SET_SECTION",
                        section: e,
                        subsection: t
                    }, n))
                },
                clearSubsection: function(e) {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                        forSection: e
                    })
                },
                clearScrollPosition: function(e) {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                        forSection: e
                    })
                },
                updateAccount: function(e) {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                        settings: e
                    })
                },
                submitComplete: function() {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                    })
                },
                reset: function() {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_RESET"
                    })
                },
                saveAccountChanges: function(e, t) {
                    var n = this;
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT"
                    });
                    var u = e.username,
                        a = e.email,
                        c = e.emailToken,
                        s = e.password,
                        f = e.avatar,
                        h = e.newPassword,
                        y = e.discriminator,
                        I = t.close;
                    return (0, E.Z)((function(e) {
                        var t = g(v({
                                username: u,
                                email: a,
                                email_token: c,
                                password: s,
                                avatar: f,
                                new_password: h
                            }, e), {
                                discriminator: null != y && "" !== y ? y : void 0
                            }),
                            n = i.Z.get(l.JkL),
                            o = (0, _.xJ)();
                        if (null != o && null != n) {
                            t.push_provider = o;
                            t.push_token = n
                        }
                        var d = i.Z.get(l.scU);
                        if (null != _.mv && null != d) {
                            t.push_voip_provider = _.mv;
                            t.push_voip_token = d
                        }
                        return r.ZP.patch({
                            url: l.ANM.ME,
                            oldFormErrors: !0,
                            body: t
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: O.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                        },
                        hooks: {
                            onEarlyClose: function() {
                                return o.Z.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }
                    }).then((function(e) {
                        var t = e.body,
                            r = t.token;
                        d.default.track(l.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, p.xR)(t.avatar)
                        });
                        delete t.token;
                        o.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: r,
                            userId: t.id
                        });
                        o.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: t
                        });
                        null != h && o.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: h
                        });
                        null != s && null != h && o.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        I ? n.close() : n.submitComplete();
                        return e
                    }), (function(e) {
                        o.Z.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        });
                        return e
                    }))
                }
            }
        },
        213276: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                i = n(667294),
                o = n(468811),
                u = n.n(o),
                l = n(652591),
                a = n(295652),
                c = n(2590);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function d(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
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
                    var n, r = f(e);
                    if (t) {
                        var i = f(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var O = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && p(e, t)
                }(n, e);
                var t = _(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this, e))._loadId = null;
                    r._loadDate = r.props.root ? Date.now() : null;
                    r.getLocation = (0, a.oH)((function(e, t, n, r) {
                        var i = {};
                        null != e && (i.page = e);
                        null != t && (i.section = t);
                        null != n && (i.object = n);
                        null != r && (i.objectType = r);
                        return i
                    }));
                    r.mergeLocation = (0, a.oH)((function(e, t) {
                        return function(e) {
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
                        }({}, e, t)
                    }));
                    r.getContext = (0, a.oH)((function(e, t, n) {
                        return {
                            location: e,
                            loadDate: t,
                            loadId: n
                        }
                    }));
                    null != e.loadId ? r._loadId = e.loadId : e.root && (r._loadId = u().v4());
                    return r
                }
                var i = n.prototype;
                i.renderProvider = function(e) {
                    var t, n, i = this.props,
                        o = i.section,
                        u = i.page,
                        a = i.object,
                        c = i.objectType,
                        s = i.children,
                        f = this.mergeLocation(e.location, this.getLocation(u, o, a, c)),
                        d = this.getContext(f, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
                    return (0, r.jsx)(l.AnalyticsContext.Provider, {
                        value: d,
                        children: s
                    })
                };
                i.render = function() {
                    var e = this,
                        t = this.props.context;
                    return null != t ? this.renderProvider(t) : (0, r.jsx)(l.AnalyticsContext.Consumer, {
                        children: function(t) {
                            return e.renderProvider(t)
                        }
                    })
                };
                return n
            }(i.Component);
            O.Pages = c.ZY5;
            O.Sections = c.jXE;
            O.Objects = c.qAy;
            O.ObjectTypes = c.Qqv;
            O.defaultProps = {
                root: !1
            }
        },
        919244: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                u = n.n(o),
                l = n(304548),
                a = n(473708),
                c = n(949095),
                s = n.n(c);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }
            var _ = function(e) {
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
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var h = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && E(e, t)
                }(n, e);
                var t = O(n);

                function n() {
                    f(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    };
                    e.setRef = function(t) {
                        e._input = t
                    };
                    e.getLabelText = function() {
                        var t;
                        return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? a.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : a.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? a.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : a.Z.Messages.TWO_FA_AUTH_CODE
                    };
                    e.getPlaceholder = function() {
                        return e.props.forceNoPlaceholder ? null : null !== (t = e.props.placeholder) && void 0 !== t ? t : e.getSupportedCodeTypes();
                        var t
                    };
                    e.errorPresent = function() {
                        return null != e.props.error && "" !== e.props.error || null != e.state.errorMessage && "" !== e.state.errorMessage
                    };
                    e.handleRetry = function() {
                        var t = e.props.onRetry;
                        null == t || t().then((function() {
                            return e.setState({
                                retrySuccess: !0
                            })
                        }))
                    };
                    e.handleSubmit = function(t) {
                        t.preventDefault();
                        var n = e.props,
                            r = n.handleSubmit,
                            i = n.onError;
                        r(e.state.code).catch((function(t) {
                            if (null != t.body) {
                                null == i || i(t.body);
                                t.body.message && e.setState({
                                    errorMessage: t.body.message
                                })
                            }
                        }))
                    };
                    e.handleCancel = function() {
                        var t = e.props,
                            n = t.onClose,
                            r = t.handleEarlyClose;
                        n();
                        null == r || r()
                    };
                    e.handleCodeChange = function(t) {
                        e.setState({
                            code: t
                        })
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e, t = this.props,
                        n = t.title,
                        o = t.actionText,
                        c = t.children,
                        f = t.error,
                        d = t.isLoading,
                        p = t.maxLength,
                        E = t.transitionState,
                        _ = t.helpMessage,
                        O = t.retryPrompt,
                        h = t.retrySuccessMessage,
                        v = this.state,
                        g = v.code,
                        y = v.errorMessage,
                        I = v.retrySuccess,
                        b = i.Children.count(c) > 0 ? (0, r.jsx)(l.Card, {
                            type: l.Card.Types.WARNING,
                            className: s().card,
                            children: (0, r.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: c
                            })
                        }) : null,
                        T = null != O ? (0, r.jsxs)(l.Text, {
                            className: u()(s().submitText, s().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(l.Clickable, {
                                className: u()(s().spacing, s().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(l.Anchor, {
                                    children: O
                                })
                            })]
                        }) : null,
                        m = I ? (0, r.jsx)(l.Card, {
                            type: l.Card.Types.SUCCESS,
                            className: s().card,
                            children: (0, r.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: h
                            })
                        }) : null;
                    return (0, r.jsx)(l.ModalRoot, {
                        transitionState: E,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(l.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(l.ModalContent, {
                                children: [null != _ ? (0, r.jsx)(l.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s().spacing,
                                    children: _
                                }) : null, b, m, (0, r.jsxs)(l.FormItem, {
                                    title: this.getLabelText(),
                                    className: s().spacing,
                                    children: [(0, r.jsx)(l.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != p ? p : 10,
                                        value: g,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(l.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s().error,
                                        children: null != f ? f : y
                                    }) : null, T]
                                })]
                            }), (0, r.jsxs)(l.ModalFooter, {
                                children: [(0, r.jsx)(l.Button, {
                                    type: "submit",
                                    disabled: d || 0 === g.length,
                                    children: null != o ? o : a.Z.Messages.CONFIRM
                                }), (0, r.jsx)(l.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: l.Button.Looks.LINK,
                                    color: l.Button.Colors.PRIMARY,
                                    children: a.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(i.PureComponent);
            h.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const v = h
        },
        343639: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(213276));

            function o(e, t, n) {
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
                        o(e, t, n[t])
                    }))
                }
                return e
            }

            function l(e, t) {
                return function(n) {
                    return (0, r.jsx)(i.Z, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, r.jsx)(e, u({}, n))
                    })
                }
            }
        },
        567678: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(19585));

            function o(e, t, n) {
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
                        o(e, t, n[t])
                    }))
                }
                return e
            }

            function l(e, t) {
                return function(n) {
                    var o = (0, i.Z)(t).AnalyticsLocationProvider;
                    return (0, r.jsx)(o, {
                        children: (0, r.jsx)(e, u({}, n))
                    })
                }
            }
        },
        973889: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var r = n(281110),
                i = n(2590),
                o = n(473708);

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function l(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function a(e, t) {
                a = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return a(e, t)
            }
            var c = function(e) {
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
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var f = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && a(e, t)
                }(n, e);
                var t = s(n);

                function n(e, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return t.call(this, e, r, o.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        579581: (e, t, n) => {
            n.d(t, {
                O: () => o
            });
            var r = n(667294),
                i = n(652591),
                o = function() {
                    return r.useContext(i.AnalyticsContext)
                }
        },
        168024: (e, t, n) => {
            n.d(t, {
                dj: () => l,
                KV: () => a,
                ZP: () => s
            });
            var r = n(496486),
                i = n.n(r),
                o = n(5387),
                u = n.n(o);
            var l = 100,
                a = [
                    [0, l - 1]
                ];

            function c(e) {
                var t = {};
                e.forEach((function(e, n) {
                    t[n] = e
                }));
                return t
            }
            var s = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this._subscriptions = {};
                    this._onChange = t
                }
                var t = e.prototype;
                t.reset = function() {
                    this._subscriptions = {}
                };
                t.get = function(e) {
                    return c(this._get(e))
                };
                t._get = function(e) {
                    var t;
                    return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new(u())({
                        max: 5
                    })
                };
                t.clear = function(e) {
                    delete this._subscriptions[e]
                };
                t.subscribe = function(e, t, n) {
                    var r = this._get(e);
                    if (i().isEqual(r.get(t), n)) return !1;
                    r.set(t, n);
                    this._subscriptions[e] = r;
                    this._onChange(e, c(r));
                    return !0
                };
                return e
            }()
        },
        357088: (e, t, n) => {
            n.d(t, {
                $: () => l
            });
            n(785893);
            var r = n(667294),
                i = n(496486),
                o = n.n(i),
                u = n(623934);

            function l(e) {
                r.useEffect((function() {
                    o().forEach(e, (function(e, t) {
                        return (0, u.ym)(t, e)
                    }));
                    return function() {
                        o().forEach(e, (function(e, t) {
                            return (0, u.w5)(t, e)
                        }))
                    }
                }), [e])
            }
        },
        320142: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(120415);

            function i(e, t, n, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, i)
            }

            function o(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function l(e) {
                            i(u, r, o, l, a, "next", e)
                        }

                        function a(e) {
                            i(u, r, o, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var u = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function l(e, t) {
                return a.apply(this, arguments)
            }

            function a() {
                return (a = o((function(e, t) {
                    var i, o, l, a;
                    return u(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(39685), n.e(47007), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73727), n.e(52555), n.e(61953), n.e(84441), n.e(67367), n.e(33227), n.e(24501), n.e(17667)]).then(n.bind(n, 624501))];
                            case 1:
                                i = u.sent(), o = i.default;
                                if (null != (l = o(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) l(null);
                                else if (r.FB) window.open(e);
                                else {
                                    (a = document.createElement("a")).href = e;
                                    a.target = "_blank";
                                    a.rel = "noreferrer noopener";
                                    a.click()
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        83797: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(2590);

            function i(e) {
                return null != e && e.type !== r.IIU.CUSTOM_STATUS && (null != e.details || null != e.assets && (null != e.assets.large_image || null != e.assets.small_text) || null != e.party || null != e.secrets || null != e.state)
            }
        },
        153686: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r;
            ! function(e) {
                e.POPOUT_WINDOW = "popout window";
                e.OVERLAY = "overlay";
                e.NOTICE = "notice";
                e.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip";
                e.BADGE = "badge";
                e.USER_SETTINGS = "user settings";
                e.USER_SETTINGS_MENU = "user settings menu";
                e.ACCOUNT = "account";
                e.TEXT_AND_IMAGES = "text and images";
                e.GUILD_SETTINGS = "guild settings";
                e.OVERVIEW = "overview";
                e.STICKERS = "stickers";
                e.VANITY_URL = "vanity url";
                e.PREMIUM_MARKETING = "premium marketing";
                e.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison";
                e.PREMIUM_PAYMENT_MODAL = "premium payment modal";
                e.PREMIUM_UPSELL_ALERT = "premium upsell alert";
                e.PREMIUM_UPSELL_MODAL = "premium upsell modal";
                e.PREMIUM_SETTINGS = "premium settings";
                e.PAYMENT_FLOW_TEST_PAGE = "payment flow test page";
                e.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet";
                e.CHANNEL_CALL = "channel call";
                e.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen";
                e.RTC_PANEL = "rtc panel";
                e.SOUNDBOARD_BUTTON = "soundboard button";
                e.SOUNDBOARD_POPOUT = "soundboard popout";
                e.SOUNDBOARD_WHEEL = "soundboard wheel";
                e.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet";
                e.GIFT_BUTTON = "gift button";
                e.EXPRESSION_SUGGESTIONS = "expression suggestions";
                e.EMOJI_PICKER = "emoji picker";
                e.STICKER_PICKER = "sticker picker";
                e.STICKER_POPOUT = "sticker popout";
                e.PREMIUM_UPSELL = "premium upsell";
                e.EMPTY_STATE = "empty state";
                e.SUBSCRIPTION_DETAILS = "subscription details";
                e.SUBSCRIPTION_HEADER = "subscription header";
                e.ACCOUNT_CREDIT_BANNER = "account credit banner";
                e.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal";
                e.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner";
                e.STREAM_QUALITY_INDICATOR = "stream quality indicator";
                e.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice";
                e.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice";
                e.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal";
                e.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell";
                e.RPC = "rpc";
                e.BILLING_STANDALONE = "billing standalone";
                e.GUILD_CHANNEL_LIST = "guild channel list";
                e.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer";
                e.STICKER_MESSAGE = "sticker message";
                e.CHANNEL_TEXT_AREA = "channel text area";
                e.HEADER_BAR = "header bar";
                e.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal";
                e.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell";
                e.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal";
                e.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal";
                e.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice";
                e.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal";
                e.GUILD_HEADER = "guild header";
                e.GUILD_BANNER = "guild banner";
                e.GUILD_BANNER_NOTICE = "guild banner notice";
                e.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal";
                e.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal";
                e.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal";
                e.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar";
                e.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none";
                e.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1";
                e.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2";
                e.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3";
                e.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner";
                e.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display";
                e.GUILDS_LIST = "guilds list";
                e.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector";
                e.ACTIVITY_DIRECTORY = "activity directory";
                e.ACTIVITY_TILE = "activity tile";
                e.ACTIVITY_UPSELL = "activity upsell";
                e.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle";
                e.INSTANT_INVITE_MODAL = "instant invite modal";
                e.IMAGE_CROPPING_MODAL = "image cropping modal";
                e.GIF_PICKER = "gif picker";
                e.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal";
                e.INVITE_MODAL = "invite modal";
                e.INVITE_EMBED = "invite embed";
                e.NEW_GUILD_BUTTON = "new guild button";
                e.CHARACTER_COUNT = "character count";
                e.DM_CHANNEL = "dm channel";
                e.GUILD_CHANNEL = "guild channel";
                e.FORUM_CHANNEL = "forum channel";
                e.FILE_UPLOAD_POPOUT = "file upload popout";
                e.EMOJI = "emoji";
                e.PROFILE = "profile";
                e.PROFILE_MODAL = "profile modal";
                e.PROFILE_POPOUT = "profile popout";
                e.GUILD_PROFILE = "guild profile";
                e.EDIT_AVATAR = "edit avatar";
                e.EDIT_BANNER = "edit banner";
                e.CHAT_INPUT = "chat input";
                e.CREATE_THREAD = "create thread";
                e.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header";
                e.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay";
                e.SELECT_IMAGE_MODAL = "select image modal";
                e.VIDEO_BACKGROUND_OPTIONS = "video background options";
                e.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option";
                e.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell";
                e.CAMERA_PREVIEW = "camera preview";
                e.HOME_PAGE_PREMIUM_TAB = "home page premium tab";
                e.HOME_PAGE_SHOP_TAB = "home page shop tab";
                e.PREMIUM_MARKETING_SURFACE = "premium marketing surface";
                e.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta";
                e.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta";
                e.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta";
                e.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta";
                e.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card";
                e.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card";
                e.PREMIUM_MARKETING_FEATURE = "premium marketing feature";
                e.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table";
                e.PREMIUM_MARKETING_FOOTER = "premium marketing footer";
                e.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section";
                e.CHANNEL_CALL_ACTION_BAR = "channel call action bar";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo";
                e.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls";
                e.VOICE_CONTROL_TRAY = "voice control tray";
                e.ACTIVE_NOW_COLUMN = "active now column";
                e.CONTEXT_MENU = "context menu";
                e.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu";
                e.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu";
                e.CHANNEL_CATEGORY_MENU = "channel category menu";
                e.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu";
                e.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu";
                e.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu";
                e.CHANNEL_LIST_THREAD_MENU = "channel list thread menu";
                e.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu";
                e.CHANNEL_TITLE_MENU = "channel title menu";
                e.GROUP_DM_MENU = "group dm menu";
                e.AUDIT_LOG_USER_MENU = "audit log user menu";
                e.BANNED_USER_MENU = "banned user menu";
                e.DM_USER_MENU = "dm user menu";
                e.GROUP_DM_USER_MENU = "group dm user menu";
                e.GUILD_CHANNEL_USER_MENU = "guild channel user menu";
                e.GUILD_MODERATION_USER_MENU = "guild moderation user menu";
                e.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu";
                e.GUILD_SETTINGS_USER_MENU = "guild settings user menu";
                e.GUILD_USER_MENU = "guild user menu";
                e.THREAD_USER_MENU = "thread user menu";
                e.USER_GENERIC_MENU = "user generic menu";
                e.USER_PROFILE_ACTIONS_MENU = "user profile actions menu";
                e.VOICE_ACTION_SHEET = "voice action sheet";
                e.FOCUSED_VOICE_CONTROLS = "focused voice controls";
                e.MASKED_LINK = "masked link";
                e.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet";
                e.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet";
                e.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet";
                e.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell";
                e.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal";
                e.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal";
                e.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet";
                e.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal";
                e.ACCOUNT_PROFILE_POPOUT = "account profile popout";
                e.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet";
                e.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium";
                e.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro";
                e.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting";
                e.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022";
                e.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark";
                e.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip";
                e.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out";
                e.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker";
                e.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone";
                e.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night";
                e.STAGE_VIDEO_LIMIT = "stage video limit";
                e.ACTIVITIES_MINI_SHELF = "activities mini shelf";
                e.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner";
                e.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite";
                e.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion";
                e.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button";
                e.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark";
                e.APP_ICON_EDITOR = "app icon editor";
                e.CLIENT_THEMES_EDITOR = "client themes editor";
                e.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector";
                e.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert";
                e.SHARE_NITRO_EMBED = "share nitro embed";
                e.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message";
                e.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button";
                e.REFERRAL_TRIALS_POPOUT = "referral trials popout";
                e.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal";
                e.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner";
                e.ACTIVITY_BOOKMARK = "activity bookmark";
                e.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher";
                e.ACTIVITY_DETAIL_PAGE = "activity detail page";
                e.ACTIVITIES_PAGE = "activities page";
                e.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta";
                e.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile";
                e.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content";
                e.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky";
                e.ACTIVITIES_HAPPENING_NOW = "activities happening now";
                e.MEDIA_VIEWER = "media viewer";
                e.MESSAGE_LONG_PRESS_MENU = "message long press menu";
                e.COLLECTIBLES_SHOP = "collectibles shop";
                e.COLLECTIBLES_SHOP_CARD = "collectibles shop card";
                e.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button";
                e.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal";
                e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell";
                e.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell";
                e.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal";
                e.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal";
                e.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell";
                e.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell";
                e.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip";
                e.PREMIUM_BILLING_INFO = "premium billing info";
                e.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details";
                e.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview";
                e.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated";
                e.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal";
                e.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice";
                e.PREMIUM_PLAN_SELECT = "premium_plan_select";
                e.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview";
                e.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content";
                e.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview";
                e.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT";
                e.MEMBER_SAFETY_PAGE = "member safety page";
                e.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page";
                e.GUILD_MEMBER_MOD_VIEW = "guild member mod view";
                e.GUILD_PRODUCT_EMBED_CARD = "guild product embed card";
                e.GUILD_PRODUCT_INFO_MODAL = "guild product info modal";
                e.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal";
                e.GUILD_SHOP_PAGE = "guild shop page";
                e.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details";
                e.MESSAGE_REMIX_TAG = "message remix tag";
                e.MESSAGE_REMIX_BUTTON = "message remix button";
                e.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity";
                e.CLIPS_SETTINGS = "clips settings";
                e.CLIPS_GALLERY = "clips gallery";
                e.CLIPS_GALLERY_ITEM = "clips gallery item";
                e.CLIPS_EDITOR = "clips editor";
                e.CLIPS_SHARE_MODAL = "clips share modal";
                e.CHANNEL_ATTACH_BUTTON = "channel attach button";
                e.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet";
                e.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home";
                e.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal";
                e.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark"
            }(r || (r = {}));
            const i = r
        },
        396043: (e, t, n) => {
            n.d(t, {
                v_: () => M,
                JS: () => R,
                hH: () => P,
                AB: () => L,
                ZP: () => G,
                oG: () => j,
                kO: () => D,
                yw: () => w
            });
            var r = n(496486),
                i = n.n(r),
                o = n(940060),
                u = n(382060),
                l = n(664625),
                a = n(61209),
                c = n(5544),
                s = n(27851),
                f = n(21372),
                d = n(567403),
                p = n(964517),
                E = n(682776),
                _ = n(491260),
                O = n(563367),
                h = n(715107),
                v = n(464187),
                g = n(407561),
                y = n(652591),
                I = n(563135),
                b = n(671723);
            var T = n(2590),
                m = n(897196);

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        S(e, t, n[t])
                    }))
                }
                return e
            }

            function N(e) {
                var t = 0;
                for (var n in e) t += 1;
                return t
            }

            function P(e) {
                if (null == e) return null;
                var t = d.Z.getGuild(e);
                if (null == t) return null;
                var n, r = l.default.getId(),
                    i = f.ZP.getMember(e, r),
                    o = c.ZP.getChannels(e),
                    u = o[c.sH].length,
                    a = o[c.Zb].length,
                    p = g.Z.getVoiceStates(e);
                return {
                    guild_id: t.id,
                    guild_size_total: s.Z.getMemberCount(e),
                    guild_num_channels: u + a,
                    guild_num_text_channels: u,
                    guild_num_voice_channels: a,
                    guild_num_roles: N(t.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = E.Z.getGuildPermissions(t)) && void 0 !== n ? n : I.ZP.NONE),
                    guild_is_vip: t.hasFeature(T.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: N(p)
                }
            }

            function C(e, t) {
                return {
                    channel_static_route: t,
                    channel_hidden: !1
                }
            }

            function R(e) {
                if (null == e) return null;
                var t = a.Z.getChannel(e);
                return null == t ? null : M(t)
            }

            function M(e) {
                if (null == e) return null;
                var t, n = !1,
                    r = e.getGuildId();
                if (null != r) {
                    var i = function(e) {
                        if (null == e) return !1;
                        var t = e.permissionOverwrites[r];
                        return null != t && o.Z.has(t.deny, T.Plq.VIEW_CHANNEL)
                    };
                    n = u.Ec.has(e.type) && null != e.parent_id ? i(a.Z.getChannel(e.parent_id)) : i(e)
                }
                return {
                    channel_id: e.id,
                    channel_type: e.type,
                    channel_size_total: e.isPrivate() ? e.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (t = E.Z.getChannelPermissions(e)) && void 0 !== t ? t : I.ZP.NONE),
                    channel_hidden: n
                }
            }

            function L(e) {
                if (null == e) return null;
                var t = a.Z.getChannel(e);
                if (null == t) return null;
                var n, r = p.Z.isVideoEnabled(),
                    i = O.Z.getMediaSessionId();
                return A({
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.getGuildId(),
                    media_session_id: i
                }, D(t.getGuildId(), t.id, r), {
                    game_name: null != (n = b.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function U(e, t) {
                return null == e ? null != t ? t : null : e.isPrivate() ? null : null !== (r = null !== (n = e.getGuildId()) && void 0 !== n ? n : t) && void 0 !== r ? r : null;
                var n, r
            }

            function w(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!y.default.isThrottled(e)) {
                    var r = !("location" in t) || t.location !== T.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in t ? t.guild_id : r ? v.Z.getGuildId() : null,
                        o = "channel_id" in t ? t.channel_id : r ? h.Z.getChannelId(i) : null,
                        u = a.Z.getChannel(o),
                        l = U(u, i),
                        c = A({}, t, P(l), null != i && null != o && (0, m.AB)(o) ? C(0, o) : M(u));
                    y.default.track(e, c, {
                        flush: n
                    })
                }
            }

            function D(e, t, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                i()(g.Z.getVoiceStates(e)).filter((function(e) {
                    return e.channelId === t
                })).filter((function(e) {
                    return e.userId !== l.default.getId()
                })).forEach((function(e) {
                    r.voice_state_count++;
                    (e.selfVideo || e.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function j(e, t) {
                var n = {
                    custom_status_count: 0
                };
                i()(g.Z.getVoiceStates(e)).forEach((function(e) {
                    e.channelId === t && null != _.Z.findActivity(e.userId, (function(e) {
                        return e.type === T.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const G = {
                trackWithMetadata: w,
                getVoiceStateMetadata: D
            }
        },
        127624: (e, t, n) => {
            n.d(t, {
                WO: () => u,
                Lu: () => l,
                ak: () => a,
                bi: () => r,
                tn: () => c,
                hz: () => s,
                sZ: () => f,
                oQ: () => d,
                _n: () => p,
                Vd: () => E,
                lr: () => _,
                Mn: () => O,
                Fu: () => h,
                al: () => v
            });
            var r, i = n(73904),
                o = n(473708),
                u = "True",
                l = "False",
                a = [{
                    name: u,
                    displayName: u,
                    value: "true"
                }, {
                    name: l,
                    displayName: l,
                    value: "false"
                }];
            ! function(e) {
                e.BUILT_IN = "-1";
                e.FRECENCY = "-2"
            }(r || (r = {}));
            var c = 10,
                s = 5,
                f = 25,
                d = "\0",
                p = 100,
                E = 3,
                _ = 10,
                O = 1,
                h = 500;

            function v(e) {
                if (null != e.choices) return o.Z.Messages.COMMAND_VALIDATION_CHOICE_ERROR;
                switch (e.type) {
                    case i.jw.BOOLEAN:
                        return o.Z.Messages.COMMAND_VALIDATION_BOOLEAN_ERROR;
                    case i.jw.CHANNEL:
                        return o.Z.Messages.COMMAND_VALIDATION_CHANNEL_ERROR;
                    case i.jw.INTEGER:
                        return o.Z.Messages.COMMAND_VALIDATION_INTEGER_ERROR;
                    case i.jw.NUMBER:
                        return o.Z.Messages.COMMAND_VALIDATION_NUMBER_ERROR;
                    case i.jw.ROLE:
                        return o.Z.Messages.COMMAND_VALIDATION_ROLE_ERROR;
                    case i.jw.USER:
                        return o.Z.Messages.COMMAND_VALIDATION_USER_ERROR;
                    case i.jw.MENTIONABLE:
                        return o.Z.Messages.COMMAND_VALIDATION_MENTIONABLE_ERROR;
                    default:
                        return o.Z.Messages.COMMAND_VALIDATION_GENERAL_ERROR
                }
            }
        },
        525177: (e, t, n) => {
            n.d(t, {
                P: () => r,
                Z: () => o
            });
            var r, i = n(260561);
            ! function(e) {
                e[e.None = 0] = "None";
                e[e.DefaultOn = 1] = "DefaultOn";
                e[e.DefaultOff = 2] = "DefaultOff";
                e[e.ComingSoon = 3] = "ComingSoon";
                e[e.ClydeProfiles = 4] = "ClydeProfiles"
            }(r || (r = {}));
            const o = (0, i.B)({
                kind: "guild",
                id: "2023-03_clyde_ai",
                label: "ClydeAI",
                defaultConfig: {
                    experimentState: r.None
                },
                treatments: [{
                    id: 1,
                    label: "Enabled (Default Off)",
                    config: {
                        experimentState: r.DefaultOff
                    }
                }, {
                    id: 3,
                    label: "Enabled (Default On)",
                    config: {
                        experimentState: r.DefaultOn
                    }
                }, {
                    id: 4,
                    label: "Coming Soon",
                    config: {
                        experimentState: r.ComingSoon
                    }
                }, {
                    id: 5,
                    label: "Clyde Profiles",
                    config: {
                        experimentState: r.ClydeProfiles
                    }
                }]
            })
        },
        23925: (e, t, n) => {
            n.d(t, {
                g0: () => v,
                gJ: () => O,
                M9: () => h,
                Ib: () => p,
                lT: () => f,
                OR: () => d,
                GS: () => E
            });
            var r = n(667294),
                i = n(202351),
                o = n(567403),
                u = n(682776),
                l = n(525177),
                a = (0, n(260561).B)({
                    kind: "user",
                    id: "2023-06_clyde_ai_gdm",
                    label: "Clyde in DMs/GDMs",
                    defaultConfig: {
                        isClydeEnabledinGdms: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enable clyde in gdms",
                        config: {
                            isClydeEnabledinGdms: !0
                        }
                    }]
                });
            var c = n(2590),
                s = n(897196);

            function f(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    i = l.Z.useExperiment({
                        guildId: r,
                        location: "1e9ccc_1"
                    }, {
                        autoTrackExposure: n
                    }).experimentState;
                return i
            }

            function d(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = f(e, t);
                return n === l.P.ClydeProfiles
            }

            function p(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = f(e, n);
                return _(r, e, t)
            }

            function E() {
                var e = (0, i.Wu)([o.Z], o.Z.getGuildIds);
                return (0, r.useMemo)((function() {
                    return e.some((function(e) {
                        return g(o.Z.getGuild(e), !1) === l.P.ClydeProfiles
                    }))
                }), [e])
            }

            function _(e, t, n) {
                if (null == t) {
                    if (null != n && n.isPrivate()) {
                        return !!n.hasFlag(s.zZ.CLYDE_AI) || !!a.getCurrentConfig({
                            location: "38acdb_1"
                        }, {
                            autoTrackExposure: !1
                        }).isClydeEnabledinGdms && o.Z.getGuildIds().some((function(e) {
                            return h(o.Z.getGuild(e))
                        }))
                    }
                    return !1
                }
                return null != e && e !== l.P.None && u.Z.can(c.Plq.USE_CLYDE_AI, n)
            }

            function O(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
                    o = l.Z.getCurrentConfig({
                        guildId: i,
                        location: "1e9ccc_2"
                    }, {
                        autoTrackExposure: r
                    }).experimentState;
                return _(o, e, t)
            }

            function h(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = g(e, t);
                return n !== l.P.None
            }

            function v(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return g(e, t) === l.P.ClydeProfiles
            }

            function g(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e) return !1;
                var n = e.id;
                return l.Z.getCurrentConfig({
                    guildId: n,
                    location: "1e9ccc_4"
                }, {
                    autoTrackExposure: t
                }).experimentState
            }
        },
        112897: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                o = n(968449),
                u = n(416644),
                l = n(691797);

            function a(e) {
                var t = e.id,
                    n = e.label,
                    a = e.onSuccess,
                    c = e.shiftId,
                    s = e.showIconFirst,
                    f = o.Sb.useSetting();
                if (__OVERLAY__ || !f || !l.wS) return null;
                var d = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(i.MenuItem, {
                    id: d,
                    label: n,
                    action: function(e) {
                        var n = null != c && e.shiftKey ? c : t;
                        (0, l.JG)(n);
                        null == a || a()
                    },
                    icon: u.Z,
                    showIconFirst: s
                }, d)
            }
        },
        434651: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(785893),
                i = n(667294),
                o = n(202351),
                u = n(304548),
                l = n(357088),
                a = n(401080),
                c = n(736626),
                s = n(664625),
                f = n(21372),
                d = n(567403),
                p = n(682776),
                E = n(473903),
                _ = n(2590),
                O = n(473708),
                h = n(35637),
                v = n.n(h);

            function g(e, t, n, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, i)
            }

            function y(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            g(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            g(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function I(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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
            var T = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                        0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function m(e) {
                var t = e.guildId,
                    h = e.userId,
                    g = e.analyticsLocation,
                    m = e.analyticsLocations,
                    S = e.context,
                    A = e.icon,
                    N = d.Z.getGuild(t),
                    P = s.default.getId(),
                    C = (0, o.e7)([E.default], (function() {
                        return E.default.getUser(h)
                    })),
                    R = (0, o.e7)([f.ZP], (function() {
                        return f.ZP.isGuestOrLurker(t, h)
                    }), [t, h]);
                (0, o.e7)([p.Z], (function() {
                    return p.Z.getGuildVersion(t)
                }), [t]);
                var M = i.useMemo((function() {
                    return I({}, t, [h])
                }), [t, h]);
                (0, l.$)(M);
                var L = S === _.IlC.POPOUT,
                    U = (0, a.Z)({
                        guild: N,
                        analyticsLocation: g
                    });
                if (null == N || L) return null;
                var w = P === h && (p.Z.can(_.Plq.CHANGE_NICKNAME, N) || p.Z.can(_.Plq.MANAGE_NICKNAMES, N)),
                    D = P === h,
                    j = p.Z.canManageUser(_.Plq.MANAGE_NICKNAMES, h, N);
                if (!(w || j || D)) return null;
                if (null == C || R) return null;
                var G = N.hasFeature(_.oNc.HUB) ? O.Z.Messages.HUB_EDIT_PROFILE : O.Z.Messages.CHANGE_IDENTITY,
                    Z = D ? G : O.Z.Messages.CHANGE_NICKNAME;
                return (0, r.jsx)(u.MenuItem, {
                    id: "change-nickname",
                    label: (0, r.jsx)("div", {
                        className: v().labelWrapper,
                        children: (0, r.jsx)("span", {
                            className: v().label,
                            children: Z
                        })
                    }),
                    icon: A,
                    action: function() {
                        if (D) {
                            (0, c.Z)(C.id, C.getAvatarURL(t, 80), {
                                guildId: t
                            });
                            U()
                        } else(0, u.openModalLazy)(y((function() {
                            var e, i;
                            return T(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(33166)]).then(n.bind(n, 633166))];
                                    case 1:
                                        e = o.sent(), i = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(i, b(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        I(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({}, e), {
                                                guildId: t,
                                                user: C,
                                                analyticsSource: g,
                                                analyticsLocations: m
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
        },
        90003: (e, t, n) => {
            n.d(t, {
                z: () => s,
                q: () => f
            });
            var r = n(785893),
                i = (n(667294), n(304548));

            function o(e, t, n, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, i)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var u = e.apply(t, n);

                        function l(e) {
                            o(u, r, i, l, a, "next", e)
                        }

                        function a(e) {
                            o(u, r, i, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }
            var c = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                        if (!(i = u.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
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
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function s(e, t, o) {
                (0, i.openModalLazy)(u((function() {
                    var i, u;
                    return c(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(85157), n.e(62419), n.e(89975), n.e(27499), n.e(6331)]).then(n.bind(n, 736576))];
                            case 1:
                                i = l.sent(), u = i.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(u, a({
                                        guildId: e,
                                        userId: t,
                                        anaylticsLocations: o
                                    }, n))
                                }]
                        }
                    }))
                })))
            }

            function f(e, t, o) {
                (0, i.openModalLazy)(u((function() {
                    var i, u;
                    return c(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(85157), n.e(62419), n.e(89975), n.e(27499), n.e(76141)]).then(n.bind(n, 916782))];
                            case 1:
                                i = l.sent(), u = i.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(u, a({
                                        guildId: e,
                                        userId: t,
                                        anaylticsLocations: o
                                    }, n))
                                }]
                        }
                    }))
                })))
            }
        },
        777302: (e, t, n) => {
            n.d(t, {
                F: () => f,
                Z: () => d
            });
            var r = n(202351),
                i = n(567403),
                o = n(682776),
                u = n(473903),
                l = n(563135),
                a = n(2590);

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
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

            function f(e, t) {
                var n = s(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.default, i.Z, o.Z], 3),
                    r = n[0],
                    c = n[1],
                    f = n[2],
                    d = c.getGuild(e),
                    p = r.getUser(t);
                if (null == d || null == p) return !1;
                if (p.isNonUserBot()) return !1;
                var E = d.isOwner(p) || l.ZP.can({
                    permission: a.Plq.ADMINISTRATOR,
                    user: p,
                    context: d
                });
                return !E && f.canManageUser(a.Plq.MODERATE_MEMBERS, p, d)
            }

            function d(e, t) {
                return (0, r.e7)([u.default, i.Z, o.Z], (function() {
                    return f(e, t, [u.default, i.Z, o.Z])
                }), [e, t])
            }
        },
        773411: (e, t, n) => {
            n.d(t, {
                N2: () => f,
                YM: () => d,
                Dx: () => p,
                jD: () => E,
                bO: () => _,
                Xp: () => O,
                fV: () => h
            });
            var r = n(202351),
                i = n(747820),
                o = n(260561),
                u = n(283513),
                l = n(5544),
                a = n(567403),
                c = n(2590);

            function s(e, t, n) {
                return t.getChannels(e)[l.sH].filter((function(t) {
                    var r = t.channel;
                    return !n.isChannelGated(e, r.id)
                })).length > 5
            }

            function f(e) {
                var t = (0, r.e7)([l.ZP, i.Z], (function() {
                    return null != e && s(e.id, l.ZP, i.Z)
                }));
                return !__OVERLAY__ && (!!t && (null != e && e.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE)))
            }

            function d(e) {
                if (__OVERLAY__) return !1;
                if (e === c.ME || e === c.I_8) return !1;
                if ((0, u.cn)()) return !1;
                var t = a.Z.getGuild(e);
                return null != t && (!!s(e, l.ZP, i.Z) && t.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE))
            }
            var p = (0, o.B)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                E = (0, o.B)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                _ = (0, o.B)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                }),
                O = ((0,
                    o.B)({
                    kind: "user",
                    id: "2022-08_home_drawer_autoclose",
                    label: "Auto close home drawer",
                    defaultConfig: {
                        autoCloseDrawer: !1,
                        animation: !1,
                        delay: null
                    },
                    treatments: [{
                        id: 1,
                        label: "normal animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: null
                        }
                    }, {
                        id: 2,
                        label: "no animate",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !1,
                            delay: null
                        }
                    }, {
                        id: 3,
                        label: "150 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 150
                        }
                    }, {
                        id: 4,
                        label: "250 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 250
                        }
                    }, {
                        id: 5,
                        label: "500 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 500
                        }
                    }]
                }), (0, o.B)({
                    kind: "user",
                    id: "2022-09_welcome_header",
                    label: "Show welcome header for home",
                    defaultConfig: {
                        showWelcomeHeader: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show welcome header",
                        config: {
                            showWelcomeHeader: !0
                        }
                    }]
                }), (0, o.B)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                })),
                h = (0, o.B)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        482139: (e, t, n) => {
            n.d(t, {
                iq: () => s,
                HP: () => d,
                Fq: () => p,
                jR: () => E,
                It: () => _,
                I5: () => O,
                g_: () => h,
                Cf: () => v,
                ID: () => g,
                sr: () => y,
                z5: () => I,
                IO: () => b,
                pG: () => T,
                W3: () => m,
                b9: () => S,
                _V: () => A
            });
            var r = n(281110),
                i = n(744564),
                o = n(735885),
                u = n(2590);

            function l(e, t, n, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, i)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

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
            var c = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function s(e, t) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = a((function(e, t) {
                    var n, o, l, a, s, f;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                n = t.nick, o = t.avatar;
                                if (null == e) throw new Error("Need guildId");
                                i.Z.dispatch({
                                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                                });
                                l = {
                                    nick: n,
                                    avatar: o
                                };
                                c.label = 1;
                            case 1:
                                c.trys.push([1, 3, , 4]);
                                return [4, r.ZP.patch({
                                    url: u.ANM.SET_GUILD_MEMBER(e),
                                    body: l,
                                    oldFormErrors: !0
                                })];
                            case 2:
                                a = c.sent();
                                i.Z.dispatch({
                                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                                });
                                i.Z.dispatch({
                                    type: "GUILD_MEMBER_PROFILE_UPDATE",
                                    guildMember: a.body,
                                    guildId: e
                                });
                                return [2, a];
                            case 3:
                                s = c.sent();
                                if (null != (null == (f = s.body) ? void 0 : f.username)) {
                                    f.nick = f.username;
                                    delete f.username
                                }
                                i.Z.dispatch({
                                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                                    errors: s.body
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function d(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function p(e, t) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function E() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                });
                (0, o.xf)()
            }

            function _() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function O(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function h(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function v(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function g(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function y(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function I(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function b() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function T() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function m() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function S() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function A(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        825781: (e, t, n) => {
            n.d(t, {
                Z: () => C
            });
            var r = n(202351),
                i = n(744564),
                o = n(2590);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function a(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
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
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
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
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var d, p, E, _, O, h, v, g, y, I = o.QZA.CLOSED,
                b = {},
                T = !1;

            function m() {
                I = o.QZA.CLOSED;
                b = {};
                v = null;
                g = void 0;
                y = []
            }

            function S() {
                A();
                N();
                b = {};
                I = o.QZA.OPEN
            }

            function A() {
                d = void 0;
                O = void 0
            }

            function N() {
                p = void 0;
                E = void 0;
                _ = void 0;
                h = void 0
            }
            var P = function(e) {
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
                var t = f(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getFormState = function() {
                    return I
                };
                r.getErrors = function() {
                    return b
                };
                r.showNotice = function() {
                    return void 0 !== d || void 0 !== p || void 0 !== E || void 0 !== _ || void 0 !== O || void 0 !== h
                };
                r.getPendingAvatar = function() {
                    return d
                };
                r.getPendingBanner = function() {
                    return p
                };
                r.getPendingBio = function() {
                    return E
                };
                r.getPendingNickname = function() {
                    return O
                };
                r.getPendingPronouns = function() {
                    return _
                };
                r.getPendingAccentColor = function() {
                    return O
                };
                r.getPendingThemeColors = function() {
                    return h
                };
                r.getAllPending = function() {
                    return {
                        pendingAvatar: d,
                        pendingBanner: p,
                        pendingBio: E,
                        pendingPronouns: _,
                        pendingNickname: O,
                        pendingThemeColors: h
                    }
                };
                r.getGuild = function() {
                    return v
                };
                r.getSource = function() {
                    return g
                };
                r.getAnalyticsLocations = function() {
                    return y
                };
                r.getIsDisableSubmit = function() {
                    return T
                };
                return n
            }(r.ZP.Store);
            P.displayName = "GuildIdentitySettingsStore";
            const C = new P(i.Z, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    v = e.guild;
                    I = o.QZA.OPEN;
                    b = {};
                    g = e.source;
                    y = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: m,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    S();
                    m()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    v = e.guild;
                    b = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    I = o.QZA.SUBMITTING;
                    b = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    if (I !== o.QZA.SUBMITTING) return !1;
                    I = o.QZA.OPEN;
                    var t;
                    b = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    I = o.QZA.OPEN;
                    b = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    var t = e.avatar;
                    d = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    var t = e.banner;
                    p = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    var t = e.bio;
                    E = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    var t = e.pronouns;
                    _ = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    var t = e.nickname;
                    O = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    var t = e.themeColors;
                    h = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: A,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: N,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: S,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: S,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    b = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    var t = e.disable;
                    T = t
                }
            })
        },
        822003: (e, t, n) => {
            n.d(t, {
                gm: () => p,
                BG: () => E,
                aY: () => r,
                dW: () => _,
                jQ: () => i,
                sE: () => O
            });
            var r, i, o = n(667294),
                u = n(153686),
                l = n(396043),
                a = n(664625),
                c = n(652591),
                s = n(2590);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t, n) {
                var r, i = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            f(e, t, n[t])
                        }))
                    }
                    return e
                }({}, t, (0, l.hH)(null !== (r = t.guild_id) && void 0 !== r ? r : n));
                c.default.track(e, i)
            }

            function p(e) {
                return o.useCallback((function(t) {
                    ! function(e) {
                        var t = {
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        d(s.rMx.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }), [e])
            }

            function E(e) {
                return o.useCallback((function(t) {
                    ! function(e, t) {
                        var n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        d(s.rMx.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }), [e])
            }! function(e) {
                e.UNUSUAL_DM_ACTIVITY = "unusual_dm_activity";
                e.COMMUNICATION_DISABLED = "communication_disabled"
            }(r || (r = {}));

            function _(e) {
                return o.useCallback((function(t) {
                    ! function(e, t) {
                        var n = {
                            flag_type: t,
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        d(s.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(e, t)
                }), [e])
            }! function(e) {
                e.BAN = "ban";
                e.KICK = "kick";
                e.MUTE = "mute";
                e.TIMEOUT = "timeout";
                e.ADD_ROLE = "add_role";
                e.REMOVE_ROLE = "remove_role";
                e.COPY_ID = "copy_id";
                e.CHANGE_NICKNAME = "change_nickname"
            }(i || (i = {}));

            function O(e, t) {
                var n = t.location,
                    r = t.targetUserId,
                    i = t.targets;
                return o.useCallback((function(t) {
                    var o = {
                        action_type: t,
                        mod_user_id: a.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != r ? r : void 0,
                        targets: null != i ? i : void 0
                    };
                    d(s.rMx.MODERATION_ACTION, o)
                }), [e, n, r, i])
            }
        },
        414306: (e, t, n) => {
            n.d(t, {
                Z: () => c,
                $: () => s
            });
            var r = n(202351),
                i = n(747820),
                o = n(61209),
                u = n(682776),
                l = n(2590),
                a = {
                    needSubscriptionToAccess: !1,
                    isSubscriptionGated: !1
                };

            function c(e) {
                return (0, r.cj)([o.Z, i.Z, u.Z], (function() {
                    return s(e, o.Z, i.Z, u.Z)
                }), [e])
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.Z,
                    c = t.getChannel(e);
                if (null == c ? void 0 : c.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == c || !n.isChannelGated(c.guild_id, c.id)) return a;
                var s = c.isGuildVocal() ? !r.can(l.Plq.CONNECT, c) : !r.can(l.Plq.VIEW_CHANNEL, c);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: s
                }
            }
        },
        189651: (e, t, n) => {
            n.d(t, {
                iD: () => T,
                Zm: () => m,
                mL: () => S,
                zS: () => N,
                og: () => P,
                aq: () => C
            });
            var r = n(744564),
                i = n(396043),
                o = n(784426),
                u = n(61209),
                l = n(5544),
                a = n(21372),
                c = n(567403),
                s = n(682776),
                f = n(715107),
                d = n(9430),
                p = n(652591),
                E = n(861426),
                _ = n(557177),
                O = n(2590),
                h = n(897196);

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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

            function y(e) {
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

            function I(e, t) {
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

            function b(e) {
                return function(e) {
                    if (Array.isArray(e)) return v(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function T(e, t) {
                p.default.track(O.rMx.VIEW_AS_ROLES_SELECTED, I(y({
                    num_roles: Object.keys(t.roles).length
                }, (0, i.hH)(e)), {
                    is_viewing_as_member: t.type === _.z.NEW_MEMBER
                }));
                r.Z.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                });
                A(e)
            }

            function m(e, t) {
                var n = E.Z.getData(e);
                if (null != n && n.type === t.type) {
                    p.default.track(O.rMx.VIEW_AS_ROLES_SELECTED, I(y({
                        num_roles: Object.keys(n.roles).length
                    }, (0, i.hH)(e)), {
                        is_viewing_as_member: n.type === _.z.NEW_MEMBER
                    }));
                    r.Z.dispatch({
                        type: "IMPERSONATE_UPDATE",
                        guildId: e,
                        data: y({}, n, t)
                    });
                    A(e)
                }
            }

            function S(e) {
                r.Z.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function A(e) {
                var t = f.Z.getChannelId(e),
                    n = u.Z.getChannel(t);
                if (!(null != t && (0, h.AB)(t)) && !s.Z.can(O.Plq.VIEW_CHANNEL, n)) {
                    var r = l.ZP.getDefaultChannel(e);
                    null != r && (0, o.uL)(O.Z5c.CHANNEL(e, r.id))
                }
            }

            function N(e, t, n) {
                var r = new Set(d.Z.getOptedInChannels(e));
                t.forEach((function(e) {
                    return r.add(e)
                }));
                n.forEach((function(e) {
                    return r.delete(e)
                }));
                m(e, {
                    type: _.z.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function P(e, t) {
                var n = c.Z.getGuild(e);
                if (null != n) {
                    ! function(e, t) {
                        var n = b(l.ZP.getSelectableChannelIds(e)).concat(b(l.ZP.getVocalChannelIds(e))),
                            r = Array.from(t);
                        l.ZP.addConditionalChangeListener((function() {
                            var t = a.ZP.getSelfMember(e);
                            if (null == t) return !1;
                            if (r.some((function(e) {
                                    return !t.roles.includes(e)
                                }))) return !0;
                            var i = b(l.ZP.getSelectableChannelIds(e)).concat(b(l.ZP.getVocalChannelIds(e))).filter((function(e) {
                                return !n.includes(e)
                            }));
                            i.length > 0 && N(e, i, []);
                            return !1
                        }))
                    }(e, t);
                    var r = {};
                    t.forEach((function(e) {
                        return r[e] = n.roles[e]
                    }));
                    m(e, {
                        type: _.z.NEW_MEMBER,
                        roles: r
                    })
                }
            }

            function C(e, t) {
                m(e, y({
                    type: _.z.NEW_MEMBER
                }, t))
            }
        },
        327930: (e, t, n) => {
            n.d(t, {
                Jv: () => _,
                M0: () => O,
                Qj: () => h,
                Ao: () => v,
                YO: () => g,
                VO: () => y
            });
            var r = n(61209),
                i = n(567403),
                o = n(682776),
                u = n(968696),
                l = n(2590),
                a = n(897196),
                c = Array.from(a.Vg).map((function(e) {
                    return u.Z.escape(e)
                })).join("|"),
                s = new RegExp("^/channels/(\\d+|".concat(l.ME, ")(?:/)?(\\d+|").concat(c, ")?")),
                f = new RegExp("^/channels/(\\d+|".concat(l.ME, ")(?:/)(\\d+|").concat(c, ")(?:/)(\\d+)")),
                d = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                p = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                E = new RegExp("^/events/(\\d+)(?:/)(\\d+)?"),
                _ = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(l.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                O = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function h(e) {
                if (null == e) return null;
                var t = e.match(f);
                if (null != t && t.length > 3) return {
                    guildId: t[1],
                    channelId: t[2],
                    messageId: t[3]
                };
                var n = e.match(d);
                if (null != n && n.length > 4) return {
                    guildId: n[1],
                    channelId: n[2],
                    threadId: n[3],
                    messageId: n[4]
                };
                var r = e.match(s);
                if (null != r && r.length > 1) {
                    var i;
                    return {
                        guildId: r[1],
                        channelId: null !== (i = r[2]) && void 0 !== i ? i : void 0
                    }
                }
                var o = e.match(p);
                return null != o && o.length > 1 ? {
                    guildId: o[1]
                } : null
            }

            function v(e) {
                if (null == e) return null;
                var t = e.match(E);
                return null != t && t.length > 1 ? {
                    guildId: t[1],
                    guildEventId: t[2]
                } : null
            }

            function g(e) {
                return !!e.isPrivate() || o.Z.can(l.Plq.VIEW_CHANNEL, e)
            }

            function y(e) {
                var t = e.guildId,
                    n = e.channelId;
                if (null == i.Z.getGuild(t) && t !== l.ME) return !1;
                if (null == n) return !0;
                var o = r.Z.getChannel(n);
                return null != o && g(o)
            }
        },
        401080: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(667294),
                i = n(396179),
                o = n(19585),
                u = n(482139),
                l = (n(825781), n(2590)),
                a = n(131559);

            function c(e) {
                var t = e.guild,
                    n = e.scrollPosition,
                    c = e.analyticsLocation,
                    s = e.analyticsLocations,
                    f = e.openWithoutBackstack,
                    d = void 0 !== f && f,
                    p = (0, o.Z)().analyticsLocations;
                return (0, r.useCallback)((function() {
                    null != t && (0,
                        u.Fq)(t, null != s ? s : p);
                    i.Z.open(l.oAB.PROFILE_CUSTOMIZATION, null != t ? a.NB.GUILD : a.NB.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: c,
                        analyticsLocations: s,
                        openWithoutBackstack: d
                    })
                }), [t, n, c, s, d, p])
            }
        },
        239620: (e, t, n) => {
            n.d(t, {
                mv: () => o,
                xJ: () => u
            });
            var r, i = n(120415),
                o = null;

            function u() {
                return (0, i.Dt)(), null
            }! function(e) {
                e.REMINDER = "reminder";
                e.TOP_MESSAGE_PUSH = "top_messages_push";
                e.TRENDING_CONTENT_PUSH = "trending_content_push"
            }(r || (r = {}))
        },
        78551: (e, t, n) => {
            n.d(t, {
                Z: () => q
            });
            var r = n(17916),
                i = n(202351),
                o = n(744564),
                u = n(247075),
                l = n(114643);
            var a = new(n(296602).Z)("GuildStickers");
            const c = new(function() {
                function e() {
                    var t = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.actions = {
                        BACKGROUND_SYNC: function(e, n) {
                            return t.handleBackgroundSync(e, n)
                        },
                        CLEAR_GUILD_CACHE: function(e, n) {
                            return t.handleClearGuildCache(n)
                        },
                        CONNECTION_OPEN: function(e, n) {
                            return t.handleConnectionOpen(e, n)
                        },
                        GUILD_CREATE: function(e, n) {
                            return t.handleGuildCreate(e, n)
                        },
                        GUILD_DELETE: function(e, n) {
                            return t.handleGuildDelete(e, n)
                        },
                        GUILD_STICKERS_UPDATE: function(e, n) {
                            return t.handleGuildStickersUpdate(e, n)
                        },
                        GUILD_UPDATE: function(e, n) {
                            return t.handleGuildUpdate(e, n)
                        }
                    }
                }
                var t = e.prototype;
                t.getSync = function(e) {
                    var t = performance.now(),
                        n = u.Z.stickers(e).getMapEntriesSyncUnsafe(),
                        r = performance.now();
                    a.log("synchronously loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")"));
                    return n
                };
                t.handleConnectionOpen = function(e, t) {
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = e.guilds[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var l = o.value;
                            this.handleOneGuildCreate(l, t)
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                };
                t.handleGuildCreate = function(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                };
                t.handleGuildUpdate = function(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                };
                t.handleGuildDelete = function(e, t) {
                    this.delete(e.guild.id, t)
                };
                t.handleGuildStickersUpdate = function(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                };
                t.handleBackgroundSync = function(e, t) {
                    var n = this;
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map((function(e) {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        if ("full" === e.dataMode) {
                            a.log("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId));
                            n.replace(e.guildId, e.entities, t)
                        } else if (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) {
                            a.log("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId));
                            n.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t)
                        }
                    }))))
                };
                t.handleOneGuildCreate = function(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t);
                    null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                };
                t.handleClearGuildCache = function(e) {
                    this.clear(e)
                };
                t.handleReset = function() {};
                t.replace = function(e, t, n) {
                    u.Z.stickersTransaction(n).replaceAll(e, t)
                };
                t.delete = function(e, t) {
                    u.Z.stickersTransaction(t).delete(e)
                };
                t.clear = function(e) {
                    u.Z.stickersTransaction(e).delete()
                };
                t.update = function(e, t, n, r) {
                    var i = u.Z.stickersTransaction(r);
                    i.putAll(e, t);
                    var o = !0,
                        l = !1,
                        a = void 0;
                    try {
                        for (var c, s = n[Symbol.iterator](); !(o = (c = s.next()).done); o = !0) {
                            var f = c.value;
                            i.delete(e, f)
                        }
                    } catch (e) {
                        l = !0;
                        a = e
                    } finally {
                        try {
                            o || null == s.return || s.return()
                        } finally {
                            if (l) throw a
                        }
                    }
                };
                return e
            }());
            var s = n(135855),
                f = n(944522),
                d = n(848285),
                p = n(695895),
                E = n(567403),
                _ = n(514351),
                O = n(513586),
                h = n(2590);

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function g(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function I(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function T(e, t) {
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

            function m(e, t) {
                return !t || "object" !== C(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }

            function A(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || R(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function N(e) {
                return function(e) {
                    if (Array.isArray(e)) return v(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || R(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var P, C = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function R(e, t) {
                if (e) {
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(e, t) : void 0
                }
            }

            function M(e) {
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
                    var n, r = b(e);
                    if (t) {
                        var i = b(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }! function(e) {
                e[e.Unloaded = 0] = "Unloaded";
                e[e.MaybeLoaded = 1] = "MaybeLoaded";
                e[e.Loaded = 2] = "Loaded"
            }(P || (P = {}));
            var L = 2,
                U = new Map,
                w = new Map,
                D = null,
                j = [],
                G = null,
                Z = !1,
                k = new Map,
                B = function(e, t) {
                    k = new Map(k.set(e, t))
                },
                x = 1e3 * h.UF9.HOUR,
                F = function() {
                    if (0 === L) {
                        var e = u.Z.database();
                        if (null != e) {
                            L = 2;
                            var t = (0,
                                l.Pv)("StickerStore.loadSavedGuildStickers", (function() {
                                return r.Z.time("💾", "loadSavedGuildStickers", (function() {
                                    return c.getSync(e)
                                }))
                            }));
                            if (null != t) {
                                var n = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                                        var f = A(a.value, 2),
                                            d = f[0],
                                            _ = f[1];
                                        if (p.Z.isMember(d) && !k.has(d)) {
                                            var O = !0,
                                                h = !1,
                                                v = void 0;
                                            try {
                                                for (var g, y = _[Symbol.iterator](); !(O = (g = y.next()).done); O = !0) {
                                                    var I = g.value;
                                                    H(I, !0, E.Z.getGuild(d))
                                                }
                                            } catch (e) {
                                                h = !0;
                                                v = e
                                            } finally {
                                                try {
                                                    O || null == y.return || y.return()
                                                } finally {
                                                    if (h) throw v
                                                }
                                            }
                                            B(d, _)
                                        }
                                    }
                                } catch (e) {
                                    i = !0;
                                    o = e
                                } finally {
                                    try {
                                        n || null == s.return || s.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                            }
                        }
                    }
                },
                H = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    w.set(e.id, e);
                    t && V(e, n)
                },
                V = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null != D) {
                        var n = e.tags,
                            r = {
                                type: _.MO.STICKER_NAME,
                                value: e.name.trim().toLocaleLowerCase()
                            };
                        if ((0, O.jl)(e)) {
                            var i = j.find((function(t) {
                                    return t.id === e.pack_id
                                })),
                                o = [r].concat(N((null != n ? n : "").split(",").map((function(e) {
                                    return {
                                        type: _.MO.TAG,
                                        value: e.trim().toLocaleLowerCase()
                                    }
                                }))));
                            null != i && o.push({
                                type: _.MO.PACK_NAME,
                                value: i.name
                            });
                            D.set(e.id, o)
                        } else if ((0, O.J8)(e) && null != n) {
                            var u = s.ZP.getByName(n),
                                l = {
                                    type: _.MO.TAG,
                                    value: n.trim().toLocaleLowerCase()
                                },
                                a = [r, l];
                            if (null != t) {
                                var c = (t instanceof d.Z ? t.name : t.properties.name).trim().toLocaleLowerCase();
                                null != c && "" !== c && a.push({
                                    type: _.MO.GUILD_NAME,
                                    value: c
                                })
                            }
                            if (null == u) {
                                D.set(e.id, a);
                                return
                            }
                            a.push({
                                type: _.MO.CORRELATED_EMOJI,
                                value: u.surrogates
                            });
                            u.forEachDiversity((function(e) {
                                return a.push({
                                    type: _.MO.CORRELATED_EMOJI,
                                    value: e.surrogates
                                })
                            }));
                            D.set(e.id, a)
                        }
                    }
                },
                Y = function(e, t, n) {
                    U.set(e.id, e);
                    var r = N(j);
                    if (t) {
                        var i = r.findIndex((function(t) {
                            return t.id === e.id
                        })); - 1 !== i ? r[i] = e : r.push(e);
                        j = r
                    }(t || n) && e.stickers.forEach((function(e) {
                        return H(e)
                    }))
                };

            function K(e) {
                if (null != e.stickers) {
                    e.stickers.forEach((function(t) {
                        return H(t, !0, e)
                    }));
                    B(e.id, e.stickers)
                }
            }
            var W = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && S(e, t)
                }(n, e);
                var t = M(n);

                function n() {
                    g(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(u.Z, p.Z, E.Z)
                };
                r.getStickerById = function(e) {
                    w.has(e) || F();
                    return w.get(e)
                };
                r.getStickerPack = function(e) {
                    return U.get(e)
                };
                r.getPremiumPacks = function() {
                    return j
                };
                r.isPremiumPack = function(e) {
                    return j.some((function(t) {
                        return t.id === e
                    }))
                };
                r.getRawStickersByGuild = function() {
                    return k
                };
                r.getAllStickersIterator = function() {
                    F();
                    return w.values()
                };
                r.getAllGuildStickers = function() {
                    F();
                    return k
                };
                r.getStickersByGuildId = function(e) {
                    F();
                    return k.get(e)
                };
                ! function(e, t, n) {
                    t && y(e.prototype, t);
                    n && y(e, n)
                }(n, [{
                    key: "isLoaded",
                    get: function() {
                        return 0 !== L
                    }
                }, {
                    key: "stickerMetadata",
                    get: function() {
                        F();
                        if (null == D) {
                            D = new Map;
                            ! function() {
                                k.forEach((function(e, t) {
                                    var n = E.Z.getGuild(t);
                                    null != n && e.forEach((function(e) {
                                        return V(e, n)
                                    }))
                                }));
                                j.forEach((function(e) {
                                    e.stickers.forEach((function(e) {
                                        return V(e)
                                    }))
                                }))
                            }()
                        }
                        return D
                    }
                }, {
                    key: "hasLoadedStickerPacks",
                    get: function() {
                        return null != G && G + x > Date.now()
                    }
                }, {
                    key: "isFetchingStickerPacks",
                    get: function() {
                        return Z
                    }
                }]);
                return n
            }(i.ZP.Store);
            W.displayName = "StickersStore";
            const q = new W(o.Z, {
                BACKGROUND_SYNC: function() {
                    D = null;
                    w = new Map;
                    k = new Map;
                    L = 0
                },
                CONNECTION_OPEN: function(e) {
                    var t = e.guilds;
                    D = null;
                    w = new Map;
                    k = new Map;
                    t.forEach(K);
                    L = t.every((function(e) {
                        return null != e.stickers
                    })) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild;
                    if (!f.Z.isLurking(t.id)) {
                        K(t);
                        1 === L && null == t.stickers && null != t.stickerUpdates && (L = 0)
                    }
                },
                GUILD_DELETE: function(e) {
                    var t, n = e.guild;
                    (null !== (t = k.get(n.id)) && void 0 !== t ? t : []).forEach((function(e) {
                        null != D && D.delete(e.id);
                        w.delete(e.id)
                    }));
                    k.delete(n.id);
                    k = new Map(k)
                },
                LOGOUT: function() {
                    L = 0;
                    j = [];
                    w.clear();
                    U.clear();
                    D = null;
                    k.clear();
                    k = new Map(k);
                    Z = !1;
                    G = null
                },
                STICKER_PACKS_FETCH_START: function() {
                    Z = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: function(e) {
                    e.packs.forEach((function(e) {
                        return Y(e, !0)
                    }));
                    G = Date.now();
                    Z = !1
                },
                STICKER_PACK_FETCH_SUCCESS: function(e) {
                    var t = e.pack,
                        n = e.ingestStickers;
                    Y(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.stickers;
                    n.forEach((function(e) {
                        return H(e)
                    }));
                    B(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: function(e) {
                    var t, n, r = e.guildId,
                        i = e.sticker,
                        o = null !== (t = k.get(r)) && void 0 !== t ? t : [];
                    B(r, N(null !== (n = o.filter((function(e) {
                        return e.id !== i.id
                    }))) && void 0 !== n ? n : []).concat([i]));
                    H(i)
                },
                STICKER_FETCH_SUCCESS: function(e) {
                    var t = e.sticker;
                    H(t, !1)
                },
                GUILD_STICKERS_UPDATE: function(e) {
                    var t, n = e.guildId,
                        r = e.stickers,
                        i = function(e) {
                            var t, n = w.get(e.id);
                            null != n && (0, O.J8)(n) && (t = null != n.user ? n.user : void 0);
                            return T(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        I(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                user: t
                            })
                        };
                    (null !== (t = k.get(n)) && void 0 !== t ? t : []).filter((function(e) {
                        return null == r.find((function(t) {
                            return t.id === e.id
                        }))
                    })).forEach((function(e) {
                        w.delete(e.id);
                        null != D && D.delete(e.id)
                    }));
                    var o = r.map((function(e) {
                        return i(e)
                    }));
                    o.forEach((function(e) {
                        return H(e)
                    }));
                    B(n, o)
                }
            })
        },
        331055: (e, t, n) => {
            n.d(t, {
                vD: () => o,
                BH: () => u,
                ZP: () => l
            });
            var r = (0, n(260561).B)({
                    kind: "user",
                    id: "2023-01_silent_messages",
                    label: "Silent Messages",
                    defaultConfig: {
                        allowSending: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Allow sending @silent messages",
                        config: {
                            allowSending: !0
                        }
                    }]
                }),
                i = "@silent",
                o = new RegExp("^".concat(i, "(\\s|$)"));

            function u() {
                return r.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                }).allowSending
            }

            function l(e) {
                return u() ? null == e.match(o) ? [!1, e] : [!0, e.substring(i.length).trim()] : [!1, e]
            }
        },
        18882: (e, t, n) => {
            n.d(t, {
                Z: () => ae
            });
            var r = n(496486),
                i = n.n(r),
                o = n(842227),
                u = n(202351),
                l = n(744564),
                a = n(656793),
                c = n(382060),
                s = n(61209),
                f = n(567403),
                d = n(179913),
                p = n(715107),
                E = n(536945),
                _ = n(487685),
                O = n(102921);

            function h(e) {
                if (null == e.threadMetadata) return 0;
                var t = 60 * e.threadMetadata.autoArchiveDuration * 1e3;
                return function(e) {
                    if (null == e.threadMetadata) return 0;
                    var t, n = null !== (t = d.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.id,
                        r = O.Z.extractTimestamp(n),
                        i = null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0;
                    return Math.max(r, i)
                }(e) + t
            }
            var v = n(897196);

            function g(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function I(e) {
                I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return I(e)
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        y(e, t, n[t])
                    }))
                }
                return e
            }

            function T(e, t) {
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

            function m(e, t) {
                return !t || "object" !== A(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }
            var A = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function N(e) {
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
                    var n, r = I(e);
                    if (t) {
                        var i = I(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }
            var P = {},
                C = {},
                R = {},
                M = {},
                L = {},
                U = {},
                w = null,
                D = {};

            function j() {
                P = {};
                L = {};
                C = {};
                R = {};
                M = {};
                w = p.Z.getChannelId();
                for (var e in D) clearTimeout(D[e]);
                D = {};
                E.Z.forEachGuild((function(e) {
                    Z(e)
                }));
                k()
            }

            function G(e) {
                delete P[e];
                delete L[e];
                delete C[e];
                delete R[e];
                delete M[e];
                Z(e);
                for (var t in R[e]) x(e, t)
            }

            function Z(e) {
                var t = E.Z.getThreadsForGuild(e);
                for (var n in t)
                    for (var r in t[n]) {
                        Q(r);
                        var i = s.Z.getChannel(r);
                        if (null != i) {
                            var o = _.Z.joinTimestamp(r);
                            if (null != o) {
                                var u = {
                                        channel: i,
                                        joinTimestamp: o.getTime()
                                    },
                                    l = z(i),
                                    a = l.isUnread,
                                    c = l.isRelevant,
                                    f = l.isTimedRelevant;
                                X(P, i, u, !1);
                                X(L, i, c ? u : null, !1);
                                X(C, i, a ? u : null, !1);
                                f && J(i, !0)
                            } else {
                                X(R, i, i, !1);
                                var p = d.ZP.isForumPostUnread(i.id);
                                X(M, i, p ? i : null, !1)
                            }
                        }
                    }
            }

            function k() {
                U = {};
                for (var e in R)
                    for (var t in R[e]) x(e, t)
            }

            function B(e) {
                var t = s.Z.getBasicChannel(e);
                null != t && c.uC.has(t.type) && x(t.guild_id, t.id)
            }

            function x(e, t) {
                var n = s.Z.getChannel(t);
                if (null != n && n.isForumLikeChannel()) {
                    null == U[e] && (U[e] = {});
                    U[e][t] = 0;
                    if (null != R[e] && null != R[e][t]) {
                        var r = f.Z.getGuild(e);
                        if (null != r) {
                            var i = d.ZP.getTrackedAckMessageId(t);
                            if (null == i) {
                                var u = Date.now();
                                null != r.joinedAt && (r.joinedAt instanceof Date ? u = r.joinedAt.getTime() : "string" == typeof r.joinedAt && (u = new Date(r.joinedAt).getTime()));
                                i = o.default.fromTimestamp(u)
                            }
                            for (var l in R[e][t]) t === w ? d.ZP.isNewForumThread(l, t, r) && U[e][t]++ : o.default.compare(l, i) > 0 && !d.ZP.hasOpenedThread(l) && U[e][t]++
                        }
                    }
                }
            }

            function F(e, t, n) {
                if (null == t) return !1;
                var r = s.Z.getChannel(n),
                    i = _.Z.joinTimestamp(n);
                if (null != r && E.Z.isActive(e, t, n)) {
                    if (null != i) {
                        var o = {
                                channel: r,
                                joinTimestamp: i.getTime()
                            },
                            u = z(r),
                            l = u.isUnread,
                            a = u.isRelevant,
                            c = u.isTimedRelevant;
                        X(P, r, o, !0);
                        X(L, r, a ? o : null, !0);
                        X(C, r, l ? o : null, !0);
                        X(R, r, null, !0);
                        X(M, r, null, !0);
                        J(r, c)
                    } else {
                        var f = d.ZP.isForumPostUnread(r.id);
                        X(P, r, null, !0);
                        X(C, r, null, !0);
                        X(L, r, null, !0);
                        X(R, r, r, !0);
                        X(M, r, f ? r : null, !0);
                        Q(r.id)
                    }
                    x(e, t)
                } else {
                    $(P, e, t, n);
                    $(L, e, t, n);
                    $(C, e, t, n);
                    $(R, e, t, n);
                    $(M, e, t, n);
                    Q(n);
                    x(e, t)
                }
            }

            function H(e) {
                return F(e.channel.guild_id, e.channel.parent_id, e.channel.id)
            }

            function V(e, t) {
                if (null == t) return !1;
                var n = P[e],
                    r = null == n ? null : n[t];
                if (null != r)
                    for (var i in r)
                        if (r[i].channel.isNSFW()) return !0;
                var o = R[e],
                    u = null == o ? null : o[t];
                if (null != u)
                    for (var l in u)
                        if (u[l].isNSFW()) return !0;
                return !1
            }

            function Y(e) {
                var t = s.Z.getChannel(e.id);
                return !(null == t || !E.Z.isActive(e.guildId, t.parent_id, e.id)) && F(t.guild_id, t.parent_id, t.id)
            }

            function K(e) {
                var t = s.Z.getChannel(e.channelId);
                if (null == t) W();
                else {
                    var n = t.guild_id,
                        r = t.parent_id;
                    if (!c.Ec.has(t.type)) {
                        var i;
                        if (Number(null === (i = U[n]) || void 0 === i ? void 0 : i[t.id]) > 0) {
                            x(n, t.id);
                            return !0
                        }
                        return !1
                    }
                    if (null == r) return !1;
                    if (ee(P, t)) {
                        var o = z(t),
                            u = o.isUnread,
                            l = o.isRelevant;
                        J(t, o.isTimedRelevant);
                        var a = ee(C, t),
                            f = ee(L, t);
                        if (u === a && l === f) return !1;
                        var p = P[n][r][t.id],
                            E = l ? p : null;
                        X(C, t, u ? p : null, !0);
                        X(L, t, E, !0);
                        x(n, r)
                    } else {
                        var _ = ee(M, t),
                            O = d.ZP.isForumPostUnread(t.id);
                        if (O === _) return !1;
                        X(M, t, O ? t : null, !0)
                    }
                }
            }

            function W() {
                C = {};
                L = {};
                for (var e in P)
                    for (var t in P[e])
                        for (var n in P[e][t]) {
                            var r = P[e][t][n],
                                i = z(r.channel),
                                o = i.isUnread,
                                u = i.isRelevant,
                                l = i.isTimedRelevant;
                            o && X(C, r.channel, r, !1);
                            u && X(L, r.channel, r, !1);
                            J(r.channel, l)
                        }
                M = {};
                for (var a in R)
                    for (var c in R[a])
                        for (var s in R[a][c]) {
                            var f = R[a][c][s];
                            d.ZP.isForumPostUnread(s) && X(M, f, f, !1)
                        }
                k()
            }

            function q() {
                var e = w;
                if ((w = p.Z.getChannelId()) === e) return !1;
                B(e);
                B(w)
            }

            function z(e) {
                var t = d.ZP.getMentionCount(e.id) > 0,
                    n = d.ZP.hasRelevantUnread(e) && (!_.Z.isMuted(e.id) || t) || (0, a.c)() && t,
                    r = e.hasFlag(v.zZ.PINNED),
                    i = e.isActiveThread(),
                    o = i && h(e) > Date.now();
                return {
                    isUnread: (i || r) && n,
                    isRelevant: o || r || n,
                    isTimedRelevant: o
                }
            }

            function J(e, t) {
                Q(e.id);
                t && function(e) {
                    D[e.id] = setTimeout((function() {
                        var t = s.Z.getChannel(e.id);
                        null != t && l.Z.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        })
                    }), h(e) - Date.now() + 1)
                }(e)
            }

            function Q(e) {
                if (e in D) {
                    clearTimeout(D[e]);
                    delete D[e]
                }
            }

            function X(e, t, n, r) {
                var o = t.guild_id,
                    u = t.parent_id,
                    l = t.id;
                if (null != o && null != u && null != l) {
                    o in e || (e[o] = {});
                    u in e[o] || (e[o][u] = {});
                    r && (e[o] = T(b({}, e[o]), y({}, u, b({}, e[o][u]))));
                    if (null === n) {
                        delete e[o][u][l];
                        i().isEmpty(e[o][u]) && delete e[o][u]
                    } else e[o][u][l] = n
                }
            }

            function $(e, t, n, r) {
                if (null != t && null != n && null != r && te(e, t, n, r)) {
                    e[t] = T(b({}, e[t]), y({}, n, b({}, e[t][n])));
                    delete e[t][n][r];
                    i().isEmpty(e[t][n]) && delete e[t][n]
                }
            }

            function ee(e, t) {
                return te(e, t.guild_id, t.parent_id, t.id)
            }

            function te(e, t, n, r) {
                return t in e && n in e[t] && r in e[t][n]
            }
            var ne = {},
                re = {},
                ie = {},
                oe = {},
                ue = {},
                le = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && S(e, t)
                    }(n, e);
                    var t = N(n);

                    function n() {
                        g(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(E.Z, s.Z, _.Z, d.ZP);
                        this.syncWith([p.Z], q)
                    };
                    r.hasActiveJoinedUnreadThreads = function(e, t) {
                        return e in C && t in C[e]
                    };
                    r.getActiveUnjoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in R && null !== (n = R[e][t]) && void 0 !== n ? n : oe
                    };
                    r.getActiveJoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in P && null !== (n = P[e][t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = P[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = C[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedRelevantThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = L[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedRelevantThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveUnjoinedThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = R[e]) && void 0 !== t ? t : re
                    };
                    r.getActiveUnjoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = M[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveUnjoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getNewThreadCountsForGuild = function(e) {
                        var t;
                        return null !== (t = U[e]) && void 0 !== t ? t : ue
                    };
                    r.computeAllActiveJoinedThreads = function(e) {
                        var t = [];
                        for (var n in P)
                            if (n === e || null == e)
                                for (var r in P[n])
                                    for (var i in P[n][r]) t.push(P[n][r][i].channel);
                        return t
                    };
                    r.getNewThreadCount = function(e, t) {
                        var n, r;
                        return null !== (r = null === (n = U[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : 0
                    };
                    r.getActiveThreadCount = function(e, t) {
                        var n, r, o, u;
                        return i().size(null !== (o = null === (n = P[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== o ? o : {}) + i().size(null !== (u = null === (r = R[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== u ? u : {})
                    };
                    return n
                }(u.ZP.Store);
            le.displayName = "ActiveJoinedThreadsStore";
            const ae = new le(l.Z, {
                CONNECTION_OPEN: j,
                OVERLAY_INITIALIZE: j,
                THREAD_LIST_SYNC: function(e) {
                    return G(e.guildId)
                },
                LOAD_THREADS_SUCCESS: j,
                LOAD_ARCHIVED_THREADS_SUCCESS: j,
                SEARCH_FINISH: j,
                GUILD_CREATE: function(e) {
                    return G(e.guild.id)
                },
                GUILD_DELETE: j,
                CURRENT_USER_UPDATE: j,
                THREAD_CREATE: H,
                THREAD_UPDATE: H,
                THREAD_DELETE: H,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var l = o.value;
                            if (l.isNSFW() !== V(l.guild_id, l.parent_id)) {
                                j();
                                return
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return !1
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel,
                        n = !1;
                    if (null != t.guild_id && null != t.parent_id) {
                        if (t.guild_id in P && t.parent_id in P[t.guild_id]) {
                            delete P[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in C && t.parent_id in C[t.guild_id]) {
                            delete C[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in L && t.parent_id in L[t.guild_id]) {
                            Object.keys(L[t.guild_id][t.parent_id]).forEach(Q);
                            delete L[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in R && t.parent_id in R[t.guild_id]) {
                            delete R[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in M && t.parent_id in M[t.guild_id]) {
                            delete M[t.guild_id][t.parent_id];
                            n = !0
                        }
                        n && x(t.guild_id, t.parent_id)
                    }
                    return n
                },
                THREAD_MEMBER_UPDATE: Y,
                THREAD_MEMBERS_UPDATE: Y,
                LOAD_MESSAGES_SUCCESS: K,
                MESSAGE_CREATE: K,
                MESSAGE_DELETE: K,
                MESSAGE_DELETE_BULK: K,
                MESSAGE_ACK: K,
                CHANNEL_ACK: K,
                CHANNEL_LOCAL_ACK: K,
                CHANNEL_SELECT: function(e) {
                    K(e);
                    q()
                },
                PASSIVE_UPDATE_V1: function(e) {
                    null != e.channels && W()
                },
                WINDOW_FOCUS: W,
                UPDATE_CHANNEL_DIMENSIONS: W,
                DRAWER_OPEN: W,
                DRAWER_CLOSE: W,
                BULK_ACK: W
            })
        },
        190022: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => U
            });
            var r = n(785893),
                i = n(667294),
                o = n(202351),
                u = n(304548),
                l = n(971402),
                a = n(343639),
                c = n(567678),
                s = n(579581),
                f = n(153686),
                d = n(19585),
                p = n(112897),
                E = n(434651),
                _ = n(822003),
                O = n(21372),
                h = n(407561),
                v = n(430198),
                g = n(836448),
                y = n(93439),
                I = n(100856),
                b = n(362310),
                T = n(190084),
                m = n(11414),
                S = n(61209),
                A = n(352980),
                N = n(682776),
                P = n(2590),
                C = n(473708);
            var R = n(589675),
                M = n(536130),
                L = n(973424);
            const U = (0, c.Z)((0, a.Z)((function(e) {
                var t, n = e.user,
                    a = e.guildId,
                    c = e.channelId,
                    U = e.context,
                    w = e.onSelect,
                    D = e.moderationAlertId,
                    j = e.analyticsLocation,
                    G = e.analyticsLocations,
                    Z = e.onCloseContextMenu,
                    k = (0, d.Z)(f.Z.CONTEXT_MENU).analyticsLocations,
                    B = (0, s.O)(),
                    x = null !== (t = null == G ? void 0 : G[0]) && void 0 !== t ? t : k[0],
                    F = (0, _.sE)(a, {
                        location: x,
                        targetUserId: n.id
                    }),
                    H = (0, o.e7)([h.Z], (function() {
                        var e;
                        return null !== (e = h.Z.getUserVoiceChannelId(a, n.id)) && void 0 !== e ? e : void 0
                    }), [a, n.id]),
                    V = i.useCallback((function() {
                        F(_.jQ.COPY_ID)
                    }), [F]),
                    Y = (0, o.e7)([O.ZP], (function() {
                        return O.ZP.isMember(a, n.id)
                    }), [a, n.id]),
                    K = (0, M.Z)(n.id, a),
                    W = (0, y.Z)(n.id, U),
                    q = (0, E.Z)({
                        guildId: a,
                        userId: n.id,
                        analyticsLocation: null != j ? j : B.location,
                        analyticsLocations: [x],
                        context: U
                    }),
                    z = (0, g.Z)(n, x),
                    J = (0, v.Z)(n, a, null != c ? c : H, x),
                    Q = function(e, t) {
                        var n = (0, o.e7)([N.Z], (function() {
                                return null != e && N.Z.canWithPartialContext(P.Plq.MANAGE_MESSAGES, {
                                    channelId: e
                                })
                            }), [e]),
                            i = (0, o.e7)([S.Z], (function() {
                                return S.Z.getChannel(e)
                            }), [e]),
                            l = (0, o.e7)([A.Z], (function() {
                                return null != e && null != t ? A.Z.getMessage(e, t) : null
                            })),
                            a = (0, T.NK)(null != l ? l : null);
                        if (null == i || null == l) return null;
                        var c = null != a && a.actions.hasOwnProperty(b.d.SET_COMPLETED) ? b.d.UNSET_COMPLETED : b.d.SET_COMPLETED,
                            s = c === b.d.SET_COMPLETED ? C.Z.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : C.Z.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
                        return n && null != t ? (0, r.jsx)(u.MenuItem, {
                            id: "mark-automod-alert-completed",
                            label: s,
                            action: function() {
                                (0, m.Xx)(t, i, c)
                            }
                        }, "mark-automod-alert-completed") : null
                    }(c, D),
                    X = (0, R.Z)(n, a),
                    $ = (0, L.Z)(n.id, a, !1, x),
                    ee = (0, p.Z)({
                        id: n.id,
                        label: C.Z.Messages.COPY_ID_USER,
                        onSuccess: V
                    }),
                    te = (0,
                        I.Z)(n, a),
                    ne = Boolean(null == n ? void 0 : n.isNonUserBot());
                return (0, r.jsxs)(u.Menu, {
                    navId: "user-context",
                    onClose: function() {
                        (0, l.Zy)();
                        null == Z || Z()
                    },
                    "aria-label": C.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: w,
                    children: [!ne && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(u.MenuGroup, {
                            children: [K, W]
                        }), (0, r.jsxs)(u.MenuGroup, {
                            children: [q, z]
                        }), Y && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(u.MenuGroup, {
                                children: J
                            }), (0, r.jsxs)(u.MenuGroup, {
                                children: [$, te]
                            })]
                        }), null != D ? Q : null, null != X ? (0, r.jsx)(u.MenuGroup, {
                            children: X
                        }) : null]
                    }), (0, r.jsx)(u.MenuGroup, {
                        children: ee
                    })]
                })
            }), {
                object: P.qAy.CONTEXT_MENU
            }), [f.Z.CONTEXT_MENU, f.Z.GUILD_MODERATION_USER_MENU])
        },
        430198: (e, t, n) => {
            n.d(t, {
                Z: () => j
            });
            var r = n(785893),
                i = n(667294),
                o = n(202351),
                u = n(304548),
                l = n(152702),
                a = n(327499),
                c = n(357088),
                s = n(90003),
                f = n(777302),
                d = n(872017),
                p = n(822003),
                E = n(61209),
                _ = n(21372),
                O = n(567403),
                h = n(682776),
                v = n(473903),
                g = n(407561),
                y = n(661123),
                I = n(773148),
                b = n(2590),
                T = n(515222),
                m = n(589677),
                S = n(473708);

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function N(e, t, n, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, i)
            }

            function P(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            N(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            N(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function C(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        C(e, t, n[t])
                    }))
                }
                return e
            }

            function M(e, t) {
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

            function L(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || w(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(e) {
                return function(e) {
                    if (Array.isArray(e)) return A(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || w(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function w(e, t) {
                if (e) {
                    if ("string" == typeof e) return A(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? A(e, t) : void 0
                }
            }
            var D = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                        0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function j(e, t, A, N) {
                var w = i.useMemo((function() {
                        return C({}, t, [e.id])
                    }), [t, e.id]),
                    j = null != N ? [N] : [];
                (0, c.$)(w);
                (0, o.e7)([h.Z], (function() {
                    return h.Z.getGuildVersion(t)
                }), [t]);
                var G, Z = (0, o.e7)([O.Z], (function() {
                        return O.Z.getGuild(t)
                    }), [t]),
                    k = (0, o.e7)([v.default], (function() {
                        var t;
                        return (null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id
                    }), [e.id]),
                    B = (0, o.e7)([_.ZP], (function() {
                        return _.ZP.isGuestOrLurker(t, e.id)
                    }), [t, e.id]),
                    x = (0, o.e7)([E.Z], (function() {
                        return E.Z.getChannel(A)
                    }), [A]),
                    F = L((0, d.ZP)(e.id, t), 2)[1],
                    H = null == x ? void 0 : x.isGuildStageVoice(),
                    V = (0, o.cj)([g.Z], (function() {
                        var n, r, i, o = g.Z.getVoiceState(t, e.id);
                        return {
                            muted: null !== (n = null == o ? void 0 : o.mute) && void 0 !== n && n,
                            deafened: null !== (r = null == o ? void 0 : o.deaf) && void 0 !== r && r,
                            suppressed: null !== (i = null == o ? void 0 : o.suppress) && void 0 !== i && i,
                            voiceChannelId: null == o ? void 0 : o.channelId
                        }
                    })),
                    Y = V.muted,
                    K = V.deafened,
                    W = V.suppressed,
                    q = V.voiceChannelId,
                    z = (0, o.e7)([_.ZP], (function() {
                        return _.ZP.getMember(t, e.id)
                    })),
                    J = (0, p.sE)(t, {
                        location: N,
                        targetUserId: e.id
                    }),
                    Q = (0, f.Z)(t, e.id),
                    X = null != q && null != A && h.Z.canWithPartialContext(b.Plq.VIEW_CHANNEL, {
                        channelId: q
                    }) && !B ? [(!H || H && !W) && h.Z.canWithPartialContext(b.Plq.MUTE_MEMBERS, {
                        channelId: A
                    }) ? (0, r.jsx)(u.MenuCheckboxItem, {
                        id: "voice-mute",
                        label: S.Z.Messages.SERVER_VOICE_MUTE,
                        checked: Y,
                        color: "danger",
                        action: function() {
                            !1 === Y && J(p.jQ.MUTE);
                            a.Z.setServerMute(t, e.id, !Y)
                        }
                    }, "voice-mute") : null, (!H || H && !W) && h.Z.canWithPartialContext(b.Plq.DEAFEN_MEMBERS, {
                        channelId: A
                    }) ? (0, r.jsx)(u.MenuCheckboxItem, {
                        id: "voice-deafen",
                        label: S.Z.Messages.SERVER_DEAFEN,
                        checked: K,
                        color: "danger",
                        action: function() {
                            return a.Z.setServerDeaf(t, e.id, !K)
                        }
                    }, "voice-deafen") : null, !k && null != Z && h.Z.canWithPartialContext(b.Plq.MOVE_MEMBERS, {
                        channelId: A
                    }) ? (0, r.jsx)(u.MenuItem, {
                        id: "voice-disconnect",
                        label: k ? S.Z.Messages.DISCONNECT_SELF : S.Z.Messages.DISCONNECT_OTHER,
                        color: "danger",
                        action: function() {
                            return a.Z.setChannel(t, e.id, null)
                        }
                    }, "voice-disconnect") : null] : [],
                    $ = (G = P((function(t, n, r) {
                        var i;
                        return D(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    if (!t.ctrlKey && !t.metaKey) return [3, 4];
                                    o.label = 1;
                                case 1:
                                    o.trys.push([1, 3, , 4]);
                                    return [4, l.Z.setCommunicationDisabledDuration(n, r, T.UK.DURATION_60_SEC, null, N)];
                                case 2:
                                    o.sent();
                                    J(p.jQ.TIMEOUT);
                                    (0, u.showToast)((0,
                                        u.createToast)(S.Z.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
                                        user: null !== (i = I.ZP.getName(n, null, e)) && void 0 !== i ? i : ""
                                    }), u.ToastType.SUCCESS));
                                    return [3, 4];
                                case 3:
                                    o.sent();
                                    (0, u.showToast)((0, u.createToast)(S.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, u.ToastType.FAILURE));
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    })), function(e, t, n) {
                        return G.apply(this, arguments)
                    }),
                    ee = null;
                if (!k && null != Z && null != z && null != z.joinedAt && (h.Z.canManageUser(b.Plq.MODERATE_MEMBERS, e, Z) || h.Z.canManageUser(b.Plq.MANAGE_ROLES, e, Z)) && Z.hasFeature(b.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
                    var te;
                    if ((0, y.yE)(null !== (te = z.flags) && void 0 !== te ? te : 0, m.q.BYPASSES_VERIFICATION)) {
                        var ne;
                        ee = (0, r.jsx)(u.MenuItem, {
                            id: "verify",
                            label: S.Z.Messages.MANUALLY_UNVERIFY_MEMBER,
                            action: function() {
                                return a.Z.setMemberFlags(Z.id, e.id, (0, y.mB)(null !== (ne = z.flags) && void 0 !== ne ? ne : 0, m.q.BYPASSES_VERIFICATION, !1))
                            }
                        }, "verify")
                    } else {
                        var re;
                        ee = (0, r.jsx)(u.MenuItem, {
                            id: "verify",
                            label: S.Z.Messages.MANUALLY_VERIFY_MEMBER,
                            action: function() {
                                return a.Z.setMemberFlags(Z.id, e.id, (0, y.mB)(null !== (re = z.flags) && void 0 !== re ? re : 0, m.q.BYPASSES_VERIFICATION, !0))
                            }
                        }, "verify")
                    }
                }
                var ie = k || null == Z ? [] : [ee, Q && !B ? F ? (0, r.jsx)(u.MenuItem, {
                    id: "removetimeout",
                    label: S.Z.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: function() {
                        (0, s.q)(t, e.id, j)
                    }
                }, "removetimeout") : (0, r.jsx)(u.MenuItem, {
                    id: "timeout",
                    label: S.Z.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: function(n) {
                        if (n.ctrlKey || n.metaKey) return $(n, t, e.id);
                        (0, s.z)(t, e.id, j)
                    }
                }, "timeout") : null, h.Z.canManageUser(b.Plq.KICK_MEMBERS, e, Z) ? (0, r.jsx)(u.MenuItem, {
                    id: "kick",
                    label: S.Z.Messages.KICK_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: function() {
                        return (0, u.openModalLazy)(P((function() {
                            var i, o;
                            return D(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(11266)]).then(n.bind(n, 811266))];
                                    case 1:
                                        i = u.sent(), o = i.default;
                                        return [2, function(n) {
                                            return (0,
                                                r.jsx)(o, M(R({}, n), {
                                                location: N,
                                                guildId: t,
                                                user: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                }, "kick") : null, h.Z.canManageUser(b.Plq.BAN_MEMBERS, e, Z) ? (0, r.jsx)(u.MenuItem, {
                    id: "ban",
                    label: S.Z.Messages.BAN_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: function() {
                        return (0, u.openModalLazy)(P((function() {
                            var i, o;
                            return D(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(33970)]).then(n.bind(n, 333970))];
                                    case 1:
                                        i = u.sent(), o = i.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(o, M(R({}, n), {
                                                location: N,
                                                guildId: t,
                                                user: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                }, "ban") : null];
                return U(X).concat(U(ie))
            }
        },
        836448: (e, t, n) => {
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                u = n(560923),
                l = n(840922),
                a = n(473903),
                c = n(2590),
                s = n(473708);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        f(e, t, n[t])
                    }))
                }
                return e
            }

            function p(e, t) {
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

            function E(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
                    n = function() {
                        u.Z.addRelationship({
                            userId: f,
                            context: {
                                location: t
                            },
                            type: c.OGo.BLOCKED
                        })
                    },
                    f = e.id,
                    E = (0, i.e7)([a.default], (function() {
                        var e;
                        return (null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === f
                    }), [f]),
                    _ = (0,
                        i.e7)([l.Z], (function() {
                        return l.Z.isBlocked(f)
                    }), [f]);
                return E ? null : (0, r.jsx)(o.MenuItem, {
                    id: "block",
                    label: _ ? s.Z.Messages.UNBLOCK : s.Z.Messages.BLOCK,
                    action: function() {
                        return _ ? u.Z.unblockUser(f, {
                            location: t
                        }) : (0, o.openModal)((function(t) {
                            return (0, r.jsx)(o.ConfirmModal, p(d({
                                header: s.Z.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                                    name: e.username
                                }),
                                confirmText: s.Z.Messages.BLOCK,
                                cancelText: s.Z.Messages.CANCEL,
                                onConfirm: n
                            }, t), {
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    children: s.Z.Messages.CONFIRM_USER_BLOCK_BODY.format({
                                        name: e.username
                                    })
                                })
                            }))
                        }))
                    }
                })
            }
        },
        93439: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                i = (n(667294), n(304548)),
                o = n(761953),
                u = n(735885),
                l = n(664625),
                a = n(2590),
                c = n(473708);

            function s(e, t) {
                var n = l.default.getId(),
                    s = t === a.IlC.POPOUT;
                return n === e || s ? null : (0, r.jsx)(i.MenuItem, {
                    id: "message-user",
                    label: c.Z.Messages.USER_POPOUT_MESSAGE,
                    action: function() {
                        o.Z.openPrivateChannel(e);
                        (0, u.xf)()
                    }
                })
            }
        },
        100856: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var r = n(785893),
                i = (n(667294),
                    n(202351)),
                o = n(304548),
                u = n(327499),
                l = n(116404),
                a = n(773011),
                c = n(664625),
                s = n(61209),
                f = n(5544),
                d = n(21372),
                p = n(567403),
                E = n(682776),
                _ = n(840922),
                O = n(473903),
                h = n(407561),
                v = n(176758),
                g = n(563135),
                y = n(2590),
                I = n(473708);

            function b(e, t) {
                var n = (0, i.e7)([f.ZP], (function() {
                        return f.ZP.getChannels(t)[f.Zb]
                    }), [t]),
                    b = (0, i.e7)([h.Z, s.Z], (function() {
                        var n = h.Z.getUserVoiceChannelId(t, e.id);
                        return s.Z.getChannel(n)
                    }), [t, e.id]);
                if ((0, i.e7)([d.ZP], (function() {
                        return d.ZP.isGuestOrLurker(t, e.id)
                    }), [t, e.id])) return null;
                if (null == b) return null;
                var T = e.id === c.default.getId();
                if (!T && !E.Z.can(y.Plq.MOVE_MEMBERS, b)) return null;
                var m = n.filter((function(t) {
                    var n = t.channel;
                    return n.id !== b.id && (T ? E.Z.can(y.Plq.CONNECT, n) && !(0, v.rY)(n, h.Z, p.Z) : E.Z.can(y.Plq.MOVE_MEMBERS, n) && (E.Z.can(y.Plq.CONNECT, n) || g.ZP.can({
                        permission: y.Plq.CONNECT,
                        user: e,
                        context: n
                    })) && !(0, v.rY)(n, h.Z, p.Z))
                }));
                return 0 === m.length ? null : (0, r.jsx)(o.MenuItem, {
                    id: "voice-move",
                    label: I.Z.Messages.MOVE_TO,
                    children: m.map((function(n) {
                        var i = n.channel;
                        return (0,
                            r.jsx)(o.MenuItem, {
                            id: i.id,
                            action: function() {
                                return function(n) {
                                    e.id === c.default.getId() ? l.default.selectVoiceChannel(n.id) : u.Z.setChannel(t, e.id, n.id)
                                }(i)
                            },
                            label: (0, a.F6)(i, O.default, _.Z)
                        }, i.id)
                    }))
                })
            }
        },
        589675: (e, t, n) => {
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                i = (n(667294), n(202351)),
                o = n(304548),
                u = n(567403),
                l = n(473903),
                a = n(473708);

            function c(e, t, n, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, i)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            c(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            c(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function f(e, t, n) {
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
            var p = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function E(e, t) {
                var c = (0, i.e7)([l.default], (function() {
                        return l.default.getCurrentUser()
                    })),
                    E = (0, i.e7)([u.Z], (function() {
                        return u.Z.getGuild(t)
                    }));
                return null == E || null == c || e.id === E.ownerId || e.bot || !E.isOwnerWithRequiredMfaLevel(c) ? null : (0, r.jsx)(o.MenuItem, {
                    id: "transfer-ownership",
                    color: "danger",
                    label: a.Z.Messages.TRANSFER_OWNERSHIP,
                    action: function() {
                        return (0, o.openModalLazy)(s((function() {
                            var t, i;
                            return p(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(17586), n.e(46559)]).then(n.bind(n, 146559))];
                                    case 1:
                                        t = o.sent(), i = t.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(i, d(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        f(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({}, t), {
                                                guild: E,
                                                fromUser: c,
                                                toUser: e
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
        },
        536130: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var r = n(785893),
                i = n(667294),
                o = n(304548),
                u = n(26468),
                l = n(924417),
                a = n(652591),
                c = n(2590),
                s = n(473708);

            function f(e, t, n) {
                var f = i.useContext(a.AnalyticsContext),
                    d = (0, u.Aq)();
                return (0, r.jsx)(o.MenuItem, {
                    id: "user-profile",
                    label: s.Z.Messages.PROFILE,
                    action: function() {
                        (0, l.m)({
                            userId: e,
                            guildId: null != t ? t : void 0,
                            channelId: null != n ? n : void 0,
                            analyticsLocation: f.location
                        });
                        d.dispatch(c.CkL.POPOUT_CLOSE)
                    }
                })
            }
        },
        973424: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(785893),
                i = (n(667294), n(547308)),
                o = n(202351),
                u = n(304548),
                l = n(316878),
                a = n(822003),
                c = n(703790),
                s = n(21372),
                f = n(567403),
                d = n(682776),
                p = n(72580),
                E = n(2590),
                _ = n(473708),
                O = n(950677),
                h = n.n(O);

            function v(e, t) {
                var n, o;
                return (0, r.jsxs)("div", {
                    className: h().roleRow,
                    children: ["dot" === t ? (0, r.jsx)(u.RoleDot, {
                        className: h().roleDot,
                        color: null !== (n = e.colorString) && void 0 !== n ? n : (0, i.Rf)(E.p6O),
                        background: !1,
                        tooltip: !1
                    }) : (0, r.jsx)(u.RoleCircle, {
                        className: h().roleDot,
                        color: null !== (o = e.colorString) && void 0 !== o ? o : (0, i.Rf)(E.p6O)
                    }), (0, r.jsx)("div", {
                        children: e.name
                    })]
                })
            }

            function g(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    O = function(n) {
                        if (b.includes(n.id)) {
                            c.Z.updateMemberRoles(t, e, b.filter((function(e) {
                                return e !== n.id
                            })), [], [n.id]);
                            y(a.jQ.REMOVE_ROLE)
                        } else {
                            c.Z.updateMemberRoles(t, e, b.concat([n.id]), [n.id], []);
                            y(a.jQ.ADD_ROLE)
                        }
                    },
                    h = (0, o.e7)([f.Z], (function() {
                        return f.Z.getGuild(t)
                    }), [t]),
                    g = (0, o.e7)([l.Z], (function() {
                        return l.Z.roleStyle
                    })),
                    y = (0, a.sE)(t, {
                        location: i,
                        targetUserId: e
                    }),
                    I = (0, o.cj)([s.ZP, d.Z], (function() {
                        var n = s.ZP.getMember(t, e);
                        return {
                            userRoles: null != n ? n.roles : [],
                            isGuildMember: null != n,
                            canManageRoles: null != h && d.Z.can(E.Plq.MANAGE_ROLES, h)
                        }
                    }), [e, t, h]),
                    b = I.userRoles,
                    T = I.isGuildMember,
                    m = I.canManageRoles;
                if (__OVERLAY__) return null;
                if (null == b || null == h) return null;
                if (!T) return null;
                var S = d.Z.getHighestRole(h),
                    A = Object.values(h.roles).filter((function(e) {
                        return e.id !== h.id
                    })),
                    N = m ? A.map((function(e) {
                        var t = e.managed || !d.Z.isRoleHigher(h, S, e),
                            n = -1 !== b.indexOf(e.id);
                        return t && !n ? null : (0, r.jsx)(u.MenuCheckboxItem, {
                            id: e.id,
                            label: function() {
                                return v(e, g)
                            },
                            disabled: t,
                            action: function() {
                                return O(e)
                            },
                            checked: n
                        }, e.id)
                    })) : A.filter((function(e) {
                        return -1 !== b.indexOf(e.id)
                    })).map((function(e) {
                        return e.id === h.id ? null : (0, r.jsx)(u.MenuItem, {
                            id: e.id,
                            label: function() {
                                return v(e, g)
                            }
                        }, e.id)
                    }));
                return 0 === N.filter(p.lm).length ? null : n ? N : (0, r.jsx)(u.MenuItem, {
                    id: "roles",
                    label: _.Z.Messages.ROLES_LIST.format({
                        numRoles: N.length
                    }),
                    children: N
                })
            }
        },
        232806: (e, t, n) => {
            n.d(t, {
                xV: () => o,
                dp: () => u,
                X7: () => l,
                E1: () => a,
                f7: () => c,
                HE: () => s,
                SJ: () => f
            });

            function r(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function i(e, t) {
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
            var o, u;
            ! function(e) {
                e[e.BACKGROUND = 0] = "BACKGROUND"
            }(o || (o = {}));
            ! function(e) {
                e[e.OPTION_1 = 0] = "OPTION_1";
                e[e.OPTION_2 = 1] = "OPTION_2";
                e[e.OPTION_3 = 2] = "OPTION_3";
                e[e.OPTION_4 = 3] = "OPTION_4";
                e[e.OPTION_7 = 7] = "OPTION_7";
                e[e.OPTION_8 = 8] = "OPTION_8";
                e[e.OPTION_9 = 9] = "OPTION_9";
                e[e.OPTION_10 = 10] = "OPTION_10"
            }(u || (u = {}));
            var l = [u.OPTION_7, u.OPTION_8, u.OPTION_9, u.OPTION_10],
                a = [u.OPTION_7, u.OPTION_8, u.OPTION_9, u.OPTION_10, u.OPTION_1, u.OPTION_2, u.OPTION_3, u.OPTION_4].reduce((function(e, t, n) {
                    return i(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            i.forEach((function(t) {
                                r(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, e), r({}, t, n))
                }), {}),
                c = "blur",
                s = {
                    width: 1280,
                    height: 720
                },
                f = 10485760
        },
        424158: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(730381),
                i = n.n(r),
                o = n(169376);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function a(e, t) {
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
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
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
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var p = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = d(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this)).code = e.code || "";
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
                var r = n.prototype;
                r.isExpired = function() {
                    var e = this.maxAge;
                    if (e > 0) {
                        if (i()(this.createdAt).add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                };
                r.getExpiresAt = function() {
                    if (this.maxAge > 0) {
                        return i()(this.createdAt).add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                };
                r.toString = function() {
                    return this.code
                };
                n.createFromServer = function(e) {
                    var t;
                    return new n(a(function(e) {
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
                    }({}, e), {
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: i()(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    }))
                };
                return n
            }(o.Z)
        },
        491260: (e, t, n) => {
            n.d(t, {
                Z: () => x
            });
            var r = n(110251),
                i = n.n(r),
                o = n(496486),
                u = n.n(o),
                l = n(202351),
                a = n(744564),
                c = n(83797),
                s = n(664625),
                f = n(473903),
                d = n(2590);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function h(e, t) {
                return !t || "object" !== I(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function v(e, t) {
                v = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return v(e, t)
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || b(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(e) {
                return function(e) {
                    if (Array.isArray(e)) return p(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || b(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var I = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e, t) {
                if (e) {
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
                }
            }

            function T(e) {
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
                    var n, r = O(e);
                    if (t) {
                        var i = O(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var m = Object.freeze([]),
                S = {},
                A = {},
                N = {},
                P = {},
                C = {};

            function R(e, t) {
                var n = S[e];
                return null != n ? n[t] : null
            }
            var M = function(e) {
                switch (e.type) {
                    case d.IIU.CUSTOM_STATUS:
                        return 4;
                    case d.IIU.COMPETING:
                        return 3;
                    case d.IIU.STREAMING:
                        return 2;
                    case d.IIU.PLAYING:
                        return 1;
                    default:
                        return 0
                }
            };
            var L = function(e) {
                return (0, c.Z)(e) ? 1 : 0
            };

            function U(e, t) {
                return function(e, t) {
                    return M(t) - M(e)
                }(e, t) || function(e, t) {
                    return L(t) - L(e)
                }(e, t) || function(e, t) {
                    var n, r;
                    return (null !== (n = t.created_at) && void 0 !== n ? n : 0) - (null !== (r = e.created_at) && void 0 !== r ? r : 0)
                }(e, t)
            }

            function w(e) {
                delete A[e];
                delete N[e];
                delete P[e];
                if (null != S[e]) {
                    var t = g(u().sortBy(S[e], (function(e) {
                            return -e.timestamp
                        })), 1),
                        n = t[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        A[e] = n.status;
                        N[e] = n.activities;
                        null != n.clientStatus && (P[e] = n.clientStatus)
                    } else u().every(S[e], (function(e) {
                        return e.status === d.Skl.OFFLINE
                    })) && delete S[e]
                }
            }

            function D(e) {
                var t = S[e];
                if (null != t) {
                    var n = u().maxBy(Object.values(t), (function(e) {
                        return e.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        A[e] = n.status;
                        N[e] = n.activities;
                        null != n.clientStatus && (P[e] = n.clientStatus)
                    }
                }
            }

            function j(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    o = e.clientStatus,
                    u = e.activities;
                if (n === s.default.getId()) return !1;
                var l = S[n];
                if (null == l) {
                    if (r === d.Skl.OFFLINE) return !1;
                    l = S[n] = {}
                }
                if (r === d.Skl.OFFLINE) l[t] = {
                    status: r,
                    clientStatus: o,
                    activities: m,
                    timestamp: Date.now()
                };
                else {
                    var a = u.length > 1 ? y(u).sort(U) : u,
                        c = l[t];
                    u = null != c && i()(c.activities, a) ? c.activities : a;
                    l[t] = {
                        status: r,
                        clientStatus: o,
                        activities: u,
                        timestamp: Date.now()
                    }
                }
                delete C[n];
                w(n);
                return !0
            }

            function G(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    i = e.clientStatus,
                    o = e.activities,
                    u = e.timestamp;
                if (n !== s.default.getId()) {
                    var l = S[n];
                    if (null == l) {
                        if (r === d.Skl.OFFLINE) return;
                        l = S[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) l[t] = {
                        status: r,
                        clientStatus: i,
                        activities: m,
                        timestamp: Date.now()
                    };
                    else {
                        var a = o.length > 1 ? y(o).sort(U) : o;
                        l[t] = {
                            status: r,
                            clientStatus: i,
                            activities: a,
                            timestamp: u
                        }
                    }
                }
            }

            function Z(e, t) {
                if (t === s.default.getId()) return !1;
                var n = S[t];
                if (null == n || null == n[e]) return !1;
                delete n[e];
                0 === Object.keys(n).length && delete S[t];
                w(t)
            }

            function k(e) {
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, o = Object.keys(S)[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        Z(e, i.value)
                    }
                } catch (e) {
                    n = !0;
                    r = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (n) throw r
                    }
                }
            }
            var B = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && v(e, t)
                }(n, e);
                var t = T(n);

                function n() {
                    E(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(e, t) {
                    A[s.default.getId()] = e;
                    N[s.default.getId()] = t
                };
                r.getStatus = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Skl.OFFLINE,
                        r = f.default.getUser(e);
                    null != r && r.hasFlag(d.xW$.BOT_HTTP_INTERACTIONS) && (n = d.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return d.Skl.ONLINE;
                    if (null == t) {
                        var i;
                        return null !== (i = A[e]) && void 0 !== i ? i : n
                    }
                    var o, u = R(e, t);
                    return null !== (o = null == u ? void 0 : u.status) && void 0 !== o ? o : n
                };
                r.getActivities = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == t) {
                        var n;
                        return null !== (n = N[e]) && void 0 !== n ? n : m
                    }
                    var r = R(e, t);
                    return null == r || null == r.activities ? m : r.activities
                };
                r.getPrimaryActivity = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = this.getActivities(e, t);
                    return n[0]
                };
                r.getAllApplicationActivities = function(e) {
                    var t = [],
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = Object.keys(N)[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var l = o.value,
                                a = N[l],
                                c = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var d, p = a[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                                    var E = d.value;
                                    E.application_id === e && t.push({
                                        userId: l,
                                        activity: E
                                    })
                                }
                            } catch (e) {
                                s = !0;
                                f = e
                            } finally {
                                try {
                                    c || null == p.return || p.return()
                                } finally {
                                    if (s) throw f
                                }
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return t
                };
                r.getApplicationActivity = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.findActivity(e, (function(e) {
                        return e.application_id === t
                    }), n)
                };
                r.findActivity = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.getActivities(e, n).find(t)
                };
                r.getActivityMetadata = function(e) {
                    return C[e]
                };
                r.getUserIds = function() {
                    return Object.keys(N)
                };
                r.isMobileOnline = function(e) {
                    var t = P[e];
                    return null != t && t[d.X5t.MOBILE] === d.Skl.ONLINE && t[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: S,
                        statuses: A,
                        activities: N,
                        activityMetadata: C,
                        clientStatuses: P
                    }
                };
                return n
            }(l.ZP.Store);
            B.displayName = "PresenceStore";
            const x = new B(a.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    var t = e.guilds,
                        n = e.presences,
                        r = s.default.getId();
                    S = {};
                    C = {};
                    A = _({}, r, A[r]);
                    N = _({}, r, N[r]);
                    P = _({}, r, {});
                    var i = new Set,
                        o = Date.now();
                    t.forEach((function(e) {
                        e.presences.forEach((function(t) {
                            var n = t.user,
                                r = t.status,
                                u = t.clientStatus,
                                l = t.activities;
                            G({
                                guildId: e.id,
                                userId: n.id,
                                status: r,
                                clientStatus: u,
                                activities: l,
                                timestamp: o
                            });
                            i.add(n.id)
                        }))
                    }));
                    n.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            u = e.activities;
                        if (null != t) {
                            G({
                                guildId: d.ME,
                                userId: t.id,
                                status: n,
                                clientStatus: r,
                                activities: u,
                                timestamp: o
                            });
                            i.add(t.id)
                        }
                    }));
                    i.delete(r);
                    i.forEach(D)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.presences;
                    S = t.presencesForGuilds;
                    A = t.statuses;
                    N = t.activities;
                    C = t.activityMetadata
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild;
                    t.presences.forEach((function(e) {
                        var n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            o = e.activities;
                        j({
                            guildId: t.id,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    }))
                },
                GUILD_DELETE: function(e) {
                    k(e.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    return Z(e.guildId, e.user.id)
                },
                PRESENCE_UPDATES: function(e) {
                    return e.updates.map((function(e) {
                        var t = e.guildId,
                            n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            o = e.activities;
                        return j({
                            guildId: null != t ? t : d.ME,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    })).some((function(e) {
                        return e
                    }))
                },
                PRESENCES_REPLACE: function(e) {
                    var t = e.presences;
                    k(d.ME);
                    t.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            i = e.activities;
                        null != t && j({
                            guildId: d.ME,
                            userId: t.id,
                            status: n,
                            clientStatus: r,
                            activities: i
                        })
                    }))
                },
                ACTIVITY_METADATA_UPDATE: function(e) {
                    var t = e.userId,
                        n = e.metadata;
                    C[t] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    var t = e.guildId;
                    e.members.forEach((function(e) {
                        null != e.presence && j({
                            guildId: t,
                            userId: e.user_id,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        })
                    }))
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.addedMembers;
                    null == n || n.forEach((function(e) {
                        null != e.presence && j({
                            guildId: t,
                            userId: e.userId,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        })
                    }))
                },
                SELF_PRESENCE_STORE_UPDATE: function(e) {
                    var t = s.default.getId();
                    if (A[t] === e.status && N[t] === e.activities) return !1;
                    A[t] = e.status;
                    N[t] = e.activities;
                    delete C[t]
                }
            })
        },
        223219: (e, t, n) => {
            n.d(t, {
                Z: () => Z
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                u = n(744564),
                l = n(473903),
                a = n(2590);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        f(e, t, n[t])
                    }))
                }
                return e
            }

            function E(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
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
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var v = a.QZA.CLOSED,
                g = null,
                y = null,
                I = {},
                b = {},
                T = {},
                m = null,
                S = null,
                A = !1,
                N = !1,
                P = null,
                C = null,
                R = null,
                M = [],
                L = null,
                U = null;

            function w(e) {
                var t, n, r, i, o, u, c = l.default.getCurrentUser();
                if (null == c) return D();
                y = null !== (t = e.section) && void 0 !== t ? t : y;
                L = null !== (n = e.section) && void 0 !== n ? n : y;
                null != e.subsection && null != y && (I[y] = e.subsection);
                null != e.scrollPosition && null != y && (b[y] = e.scrollPosition);
                N = !!e.openWithoutBackstack;
                v = a.QZA.OPEN;
                T = {};
                m = f({}, a.oAB.ACCOUNT, {
                    userId: c.id,
                    username: c.username,
                    discriminator: c.discriminator,
                    email: c.email,
                    avatar: c.avatar,
                    password: "",
                    newPassword: null,
                    claimed: c.isClaimed()
                });
                S = p({}, m);
                C = null !== (r = e.onClose) && void 0 !== r ? r : null;
                R = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null;
                M = null !== (o = e.analyticsLocations) && void 0 !== o ? o : [];
                U = null !== (u = e.impressionSource) && void 0 !== u ? u : null
            }

            function D() {
                v = a.QZA.CLOSED;
                A = !1;
                m = null;
                L = null;
                S = null;
                g = null;
                y = null;
                I = {};
                b = {};
                C = null;
                R = null;
                M = [];
                U = null
            }

            function j() {
                v = a.QZA.OPEN;
                T = {}
            }
            var G = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && _(e, t)
                }(n, e);
                var t = h(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(l.default)
                };
                r.hasChanges = function() {
                    return null != S && null != m && (!(!this.isOpen() && P !== a.cII.USER_SETTINGS) && !i().isEqual(S, m))
                };
                r.isOpen = function() {
                    return A
                };
                r.getPreviousSection = function() {
                    return g
                };
                r.getSection = function() {
                    return y
                };
                r.getSubsection = function() {
                    return null != y ? I[y] : null
                };
                r.getScrollPosition = function() {
                    return null != y ? b[y] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return N
                };
                r.getProps = function() {
                    return {
                        submitting: v === a.QZA.SUBMITTING,
                        section: y,
                        subsection: null != y ? I[y] : null,
                        scrollPosition: null != y ? b[y] : null,
                        settings: S,
                        errors: T,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: N,
                        analyticsLocation: R,
                        analyticsLocations: M,
                        initialSection: L,
                        impressionSource: U
                    }
                };
                ! function(e, t, n) {
                    t && s(e.prototype, t);
                    n && s(e, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return C
                    }
                }]);
                return n
            }(o.ZP.Store);
            G.displayName = "UserSettingsModalStore";
            const Z = new G(u.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    A = !0;
                    w(e)
                },
                USER_SETTINGS_MODAL_INIT: w,
                USER_SETTINGS_MODAL_CLOSE: D,
                LOGOUT: D,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    v = a.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (v !== a.QZA.SUBMITTING) return !1;
                    v = a.QZA.OPEN;
                    y = a.oAB.ACCOUNT;
                    var t;
                    T = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    g = y;
                    y = e.section;
                    R = null;
                    var t;
                    M = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (I[y] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete I[t] : null != y && delete I[y]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete b[t] : null != y && delete b[y]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == S && (S = {});
                    var n = S[a.oAB.ACCOUNT];
                    S[a.oAB.ACCOUNT] = p({}, n, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: j,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = l.default.getCurrentUser();
                    j();
                    if (null != e) {
                        m = f({}, a.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        S = p({}, m)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    P = e.tab;
                    return null == y && P === a.cII.USER_SETTINGS && w({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        416644: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = (n(667294), n(168075)),
                o = n(795308),
                u = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
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
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            const p = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    c = e.foreground,
                    p = d(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
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
                }({}, (0, u.Z)(p)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: c,
                        fill: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    s = void 0 === i ? 24 : i,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    E = void 0 === p ? "" : p,
                    _ = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            l(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: E
                    })
                }))
            }))
        },
        691797: (e, t, n) => {
            n.d(t, {
                wS: () => u,
                JG: () => l
            });
            var r = n(482507),
                i = n(120415),
                o = n(310126),
                u = function() {
                    if (i.FB) return null != o.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (e) {
                        return !1
                    }
                }();

            function l(e) {
                if (!u) return !1;
                if (i.FB) {
                    o.ZP.copy(e);
                    return !0
                }
                return r.J(e)
            }
        },
        488110: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(473903),
                i = n(496486),
                o = function(e) {
                    return "function" == typeof e ? e() : e
                };
            n.n(i)().curry((function(e, t, n) {
                return o(t) ? e(n) : n({})
            }));

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
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
            }

            function a(e, t) {
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
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            var s, f, d = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                p = n(680918);
            s = p.showModal;
            d = p.updateModalProps;
            f = n(264817).Mr;

            function E(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    i = e.modalProps,
                    o = void 0 === i ? {} : i,
                    u = e.hooks,
                    c = (void 0 === u ? {} : u).onEarlyClose,
                    p = function() {
                        null == c || c()
                    },
                    E = function(e) {
                        f(v);
                        n(e)
                    },
                    O = function(e) {
                        f(v);
                        r(e)
                    },
                    h = function(e) {
                        var t = e.res;
                        d(v, g, p, a(l({}, o), {
                            error: t.body.message
                        }))
                    };
                if (null != s) var v = s(g, p, o);
                else null == c || c();

                function g(e) {
                    d(v, g, p, a(l({}, o), {
                        isLoading: !0
                    }));
                    return _({
                        promiseFn: t,
                        resolve: E,
                        reject: O,
                        code: e,
                        mfaCodeHandler: h,
                        isModalOpen: !0
                    })
                }
            }

            function _(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    i = e.code,
                    o = e.mfaCodeHandler,
                    u = void 0 === o ? E : o,
                    a = e.isModalOpen,
                    s = void 0 !== a && a,
                    f = c(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != i ? {
                    code: i
                } : {}).then(n, (function(e) {
                    if (function(e, t) {
                            return e.body && 60008 === e.body.code || t && 429 === e.status
                        }(e, s)) return u(l({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e
                    }, f));
                    r(e)
                }))
            }

            function O(e, t) {
                var n, i, u = null != t ? t : {},
                    a = u.checkEnabled,
                    s = void 0 === a ? null !== (i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i : a,
                    f = c(u, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (o(s) ? E : _)(l({
                        promiseFn: e,
                        resolve: t,
                        reject: n
                    }, f))
                }))
            }
        },
        73105: (e, t, n) => {
            n.d(t, {
                RD: () => W,
                WA: () => x,
                f5: () => k,
                Gb: () => U,
                Rs: () => H,
                _2: () => Y,
                gL: () => D,
                fG: () => G
            });
            var r = n(306472),
                i = n(737264),
                o = n(496486),
                u = n.n(o),
                l = n(809784),
                a = n(296602),
                c = n(384411),
                s = n(72580),
                f = n(310126);

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            var p = function() {
                function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this._shouldProcess = !1;
                    this._processing = !1;
                    this._minimumTimeRemaining = 5;
                    this._language = t;
                    this._languageHint = t;
                    this._onChange = n;
                    n(t)
                }
                var t = e.prototype;
                t.process = function(e) {
                    var t = this;
                    if (!this._processing) {
                        this._processing = !0;
                        requestIdleCallback((function(n) {
                            if (n.timeRemaining() <= t._minimumTimeRemaining) t._processEnd();
                            else {
                                e.length > 256 && (e = e.slice(0, 256));
                                (function(e, t) {
                                    return f.ZP.ensureModule("discord_spellcheck").then((function() {
                                        var n = f.ZP.requireModule("discord_spellcheck").cld;
                                        return new Promise((function(r, i) {
                                            n.detect(e, {
                                                httpHint: t,
                                                encodingHint: "UTF8"
                                            }, (function(e, t) {
                                                null != e ? i(new Error(e.message)) : !t.reliable || t.languages[0].percent < 90 || t.languages[0].score < 500 ? i(new Error("Not enough reliable text.")) : r(t.languages[0].code)
                                            }))
                                        }))
                                    }))
                                })(e, t._languageHint).then((function(e) {
                                    t.language = e;
                                    t._processEnd(n.didTimeout)
                                }), (function() {
                                    t._processEnd(n.didTimeout)
                                }))
                            }
                        }))
                    }
                };
                t._processEnd = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._processing = !1;
                    e && this._minimumTimeRemaining++
                };
                ! function(e, t, n) {
                    t && d(e.prototype, t);
                    n && d(e, n)
                }(e, [{
                    key: "language",
                    get: function() {
                        return this._language
                    },
                    set: function(e) {
                        if (this._language !== e) {
                            this._language = e;
                            this._onChange(e)
                        }
                    }
                }, {
                    key: "languageHint",
                    set: function(e) {
                        this._languageHint = e
                    }
                }]);
                return e
            }();
            const E = {
                aa: "aa-ET",
                af: "af-ZA",
                ak: "ak-GH",
                am: "am-ET",
                an: "an-ES",
                ar: "ar-MA",
                as: "as-IN",
                ay: "ay-PE",
                az: "az-AZ",
                be: "be-BY",
                bg: "bg-BG",
                bi: "bi-TV",
                bn: "bn-BD",
                bo: "bo-CN",
                br: "br-FR",
                bs: "bs-BA",
                ca: "ca-ES",
                ce: "ce-RU",
                cs: "cs-CZ",
                cv: "cv-RU",
                cy: "cy-GB",
                da: "da-DK",
                de: "de-DE",
                dv: "dv-MV",
                dz: "dz-BT",
                el: "el-GR",
                en: "en-US",
                es: "es-ES",
                et: "et-EE",
                eu: "eu-ES",
                fa: "fa-IR",
                ff: "ff-SN",
                fi: "fi-FI",
                fo: "fo-FO",
                fr: "fr-FR",
                fy: "fy-DE",
                ga: "ga-IE",
                gd: "gd-GB",
                gl: "gl-ES",
                gu: "gu-IN",
                gv: "gv-GB",
                ha: "ha-NG",
                he: "he-IL",
                hi: "hi-IN",
                hr: "hr-HR",
                ht: "ht-HT",
                hu: "hu-HU",
                hy: "hy-AM",
                ia: "ia-FR",
                id: "id-ID",
                ig: "ig-NG",
                ik: "ik-CA",
                is: "is-IS",
                it: "it-IT",
                iu: "iu-CA",
                ja: "ja-JP",
                ka: "ka-GE",
                kk: "kk-KZ",
                kl: "kl-GL",
                km: "km-KH",
                kn: "kn-IN",
                ko: "ko-KR",
                ks: "ks-IN",
                ku: "ku-TR",
                kw: "kw-GB",
                ky: "ky-KG",
                lb: "lb-LU",
                lg: "lg-UG",
                li: "li-BE",
                ln: "ln-CD",
                lo: "lo-LA",
                lt: "lt-LT",
                lv: "lv-LV",
                mg: "mg-MG",
                mh: "mh-MH",
                mi: "mi-NZ",
                mk: "mk-MK",
                ml: "ml-IN",
                mn: "mn-MN",
                mr: "mr-IN",
                ms: "ms-MY",
                mt: "mt-MT",
                my: "my-MM",
                nb: "nb-NO",
                ne: "ne-NP",
                nl: "nl-NL",
                nn: "nn-NO",
                nr: "nr-ZA",
                oc: "oc-FR",
                om: "om-KE",
                or: "or-IN",
                os: "os-RU",
                pa: "pa-PK",
                pl: "pl-PL",
                ps: "ps-AF",
                pt: "pt-PT",
                ro: "ro-RO",
                ru: "ru-RU",
                rw: "rw-RW",
                sa: "sa-IN",
                sc: "sc-IT",
                sd: "sd-IN",
                se: "se-NO",
                si: "si-LK",
                sk: "sk-SK",
                sl: "sl-SI",
                so: "so-SO",
                sq: "sq-AL",
                sr: "sr-RS",
                ss: "ss-ZA",
                st: "st-ZA",
                sv: "sv-SE",
                sw: "sw-KE",
                ta: "ta-IN",
                te: "te-IN",
                tg: "tg-TJ",
                th: "th-TH",
                ti: "ti-ER",
                tk: "tk-TM",
                tl: "tl-PH",
                tn: "tn-ZA",
                tr: "tr-TR",
                ts: "ts-ZA",
                tt: "tt-RU",
                ug: "ug-CN",
                uk: "uk-UA",
                ur: "ur-PK",
                uz: "uz-UZ",
                ve: "ve-ZA",
                vi: "vi-VN",
                wa: "wa-BE",
                wo: "wo-SN",
                xh: "xh-ZA",
                yi: "yi-US",
                yo: "yo-NG",
                zh: "zh-CN",
                zu: "zu-ZA"
            };

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t, n, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, i)
            }

            function h(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            O(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            O(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function v(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var y = function(e, t) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                            if (!(i = u.trys,
                                                    i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
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
                                    o = t.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                I = new a.Z("Spellchecker"),
                b = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function T(e) {
                var t;
                e = null !== (t = E[e]) && void 0 !== t ? t : e;
                var n = (0, i.Q)(e.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        o = r.language,
                        u = r.region;
                    return "".concat(o.language.toLowerCase(), "-").concat(u.toUpperCase())
                }
                I.error("".concat(e, " is not a valid locale."))
            }
            var m = function() {
                    function e(t) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = g(c.default.locale.split("-"), 2),
                            i = r[0],
                            o = r[1];
                        this.regionPreference = o;
                        var u = this.getAvailableLanguages(t);
                        this.languageDetector = new p(i, (function(e) {
                            var r = "".concat(e, "-").concat(n.regionPreference);
                            if (-1 !== t.indexOf(r)) n.setLocale(r);
                            else {
                                var o, l = null !== (o = u[e]) && void 0 !== o ? o : E[i];
                                null != l && n.setLocale(l)
                            }
                        }));
                        b.on("spellcheck-result", (function(e, t) {
                            n.misspelledWord = null != e ? e : "";
                            n.corrections = null != t ? t : []
                        }))
                    }
                    var t = e.prototype;
                    t.setLearnedWords = function(e) {
                        b.setLearnedWords(e)
                    };
                    t.setLocale = function(e) {
                        var t;
                        null === (t = b.setLocale(e)) || void 0 === t || t.then((function(t) {
                            I.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
                        }))
                    };
                    t.setAppLocale = function(e) {
                        this.regionPreference = e.split("-")[1]
                    };
                    t.detectLanguage = function(e) {
                        this.enabled && this.languageDetector.process(e)
                    };
                    t.getAvailableLanguages = function(e) {
                        var t = {};
                        e.forEach((function(e) {
                            var n, r = g(e.split("-"), 1)[0];
                            t[r] = null !== (n = t[r]) && void 0 !== n ? n : e
                        }));
                        return t
                    };
                    t.isMisspelled = function(e, t) {
                        return "" !== this.misspelledWord && e === this.misspelledWord
                    };
                    t.getCorrectionsForMisspelling = function(e, t) {
                        return this.isMisspelled(e, t) ? this.corrections : []
                    };
                    t.replaceMisspelling = function(e) {
                        b.replaceMisspelling(e)
                    };
                    ! function(e, t, n) {
                        t && v(e.prototype, t);
                        n && v(e, n)
                    }(e, [{
                        key: "enabled",
                        get: function() {
                            return this._enabled
                        },
                        set: function(e) {
                            this._enabled = e
                        }
                    }]);
                    return e
                }(),
                S = u().debounce((function(e, t) {
                    var n = function(e) {
                        if (null == e) return null;
                        if ((0, l.k)(e, HTMLInputElement) || (0, l.k)(e, HTMLTextAreaElement)) return e.value;
                        if ((0, l.k)(e) && e.hasAttribute("contenteditable")) return e.textContent
                    }(t);
                    null != n && e.detectLanguage(n)
                }), 250);

            function A(e) {
                null != document.body && document.body.addEventListener("beforeinput", (function(t) {
                    return S(e, t.target)
                }), !0)
            }

            function N() {
                return (N = h((function() {
                    var e, t, n, r;
                    return y(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, b.getAvailableDictionaries()];
                            case 1:
                                t = null !== (e = i.sent()) && void 0 !== e ? e : [];
                                n = t.map(T).filter(s.lm);
                                A(r = new m(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var P = n(120415);

            function C(e, t, n, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, i)
            }

            function R(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            C(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            C(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var M = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function L() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function U() {
                return (0, P.nI)() && L()
            }
            var w = U() ? function() {
                return N.apply(this, arguments)
            }() : null;

            function D(e) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = R((function(e) {
                    var t;
                    return M(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.enabled = e;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function G(e) {
                return Z.apply(this, arguments)
            }

            function Z() {
                return (Z = R((function(e) {
                    var t;
                    return M(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setLearnedWords(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function k(e) {
                return B.apply(this, arguments)
            }

            function B() {
                B = R((function(e) {
                    var t, n, r = arguments;
                    return M(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, w];
                            case 1:
                                return null == (n = i.sent()) ? [2, !1] : [2, n.isMisspelled(e, t)]
                        }
                    }))
                }));
                return B.apply(this, arguments)
            }

            function x(e) {
                return F.apply(this, arguments)
            }

            function F() {
                F = R((function(e) {
                    var t, n, r, i = arguments;
                    return M(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = i.length > 1 && void 0 !== i[1] && i[1], n = i.length > 2 && void 0 !== i[2] ? i[2] : 5;
                                return [4, w];
                            case 1:
                                return null == (r = o.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(e, t).slice(0, n)]
                        }
                    }))
                }));
                return F.apply(this, arguments)
            }

            function H(e) {
                return V.apply(this, arguments)
            }

            function V() {
                return (V = R((function(e) {
                    var t;
                    return M(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.replaceMisspelling(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Y(e) {
                return K.apply(this, arguments)
            }

            function K() {
                return (K = R((function(e) {
                    var t;
                    return M(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setAppLocale(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function W(e) {
                if (!L()) return function() {};
                var t = r.Z.spellCheck.on("spellcheck-result", e);
                return null != t ? t : function() {}
            }
        },
        391438: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(281110),
                i = n(652591);

            function o(e, t, n) {
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
                        o(e, t, n[t])
                    }))
                }
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function a(e, t, n) {
                var r = t.trackedActionData,
                    o = l(t, ["trackedActionData"]),
                    a = {
                        url: o.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(o).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, u({
                            status_code: e.status
                        }, a, n));
                        t(e)
                    })).catch((function(e) {
                        var t, o, l = r.properties;
                        "function" == typeof r.properties && (l = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, u({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (o = e.body) || void 0 === o ? void 0 : o.message
                        }, a, l));
                        n(e)
                    }))
                }))
            }
            const c = {
                get: function(e) {
                    return a(r.ZP.get, e, "get")
                },
                post: function(e) {
                    return a(r.ZP.post, e, "post")
                },
                put: function(e) {
                    return a(r.ZP.put, e, "put")
                },
                patch: function(e) {
                    return a(r.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return a(r.ZP.delete, e, "del")
                }
            }
        },
        680918: (e, t, n) => {
            n.r(t);
            n.d(t, {
                showModal: () => a,
                updateModalProps: () => c
            });
            var r = n(785893),
                i = (n(667294), n(264817)),
                o = n(919244);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var l = function(e, t, n) {
                return function(i) {
                    return (0, r.jsx)(o.Z, function(e) {
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
                    }({
                        handleSubmit: e,
                        handleEarlyClose: t
                    }, n, i))
                }
            };

            function a(e, t, n) {
                return (0, i.h7)(l(e, t, n), {
                    onCloseCallback: t
                })
            }

            function c(e, t, n, r) {
                return (0, i.o)(e, l(t, n, r))
            }
        }
    }
]);