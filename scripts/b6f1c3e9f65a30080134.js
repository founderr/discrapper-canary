(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [46208, 62593, 20486], {
        506907: e => {
            "use strict";
            e.exports = function(e) {
                e = String(e || "");
                if (r.test(e)) return "rtl";
                if (o.test(e)) return "ltr";
                return "neutral"
            };
            var t = "֑-߿יִ-﷽ﹰ-ﻼ",
                n = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                r = new RegExp("^[^" + n + "]*[" + t + "]"),
                o = new RegExp("^[^" + t + "]*[" + n + "]")
        },
        637849: (e, t, n) => {
            e.exports = n.p + "62fc691d2860dbf7dea5582aba20f051.svg"
        },
        837307: (e, t, n) => {
            e.exports = n.p + "0ee88820de68e9856408ac765a57198d.svg"
        },
        697694: (e, t, n) => {
            e.exports = n.p + "87f8416faec0691b96525d0bb3027809.svg"
        },
        709989: (e, t, n) => {
            e.exports = n.p + "e878f2c37767692b3936e707df01c1a4.svg"
        },
        955568: (e, t, n) => {
            e.exports = n.p + "bf852fd03dee12cf7ba1392884138f27.svg"
        },
        230978: (e, t, n) => {
            e.exports = n.p + "21c1c5faf97abcc71bf3bde30e57bf14.svg"
        },
        100539: (e, t, n) => {
            e.exports = n.p + "17192d3fe939ecf404e8cdd64b340469.svg"
        },
        639915: (e, t, n) => {
            e.exports = n.p + "1a06a76c7ea3e0facf0d6635e10c5898.svg"
        },
        143613: (e, t, n) => {
            e.exports = n.p + "ab4f6c12a1ced9de8b5d279056f21334.svg"
        },
        424286: (e, t, n) => {
            e.exports = n.p + "0e9718017ef813c08a592b0bbd8496dc.png"
        },
        819361: (e, t, n) => {
            e.exports = n.p + "14271875289ea86971326d281f681a64.svg"
        },
        882253: (e, t, n) => {
            e.exports = n.p + "0eeb095cd923afdf420687347dc673ff.svg"
        },
        340563: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(571657),
                o = n(165695),
                i = n(744564),
                a = n(391438),
                s = n(2590);

            function u(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            u(i, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            u(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var l = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1,
                                    r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                        }([i, s])
                    }
                }
            };
            const f = {
                signup: function(e, t) {
                    return a.Z.post({
                        url: s.ANM.HUB_WAITLIST_SIGNUP,
                        body: {
                            email: e,
                            school: t
                        },
                        trackedActionData: {
                            event: r.a9.HUB_WAITLIST_SIGNUP,
                            properties: function(e) {
                                var t, n = !1,
                                    r = null == e || null === (t = e.body) || void 0 === t ? void 0 : t.email_domain;
                                if (null != r) {
                                    n = -1 !== r.split(".").indexOf("edu")
                                }
                                return (0, o.iG)({
                                    is_edu_email: n
                                })
                            }
                        }
                    })
                },
                sendVerificationEmail: function(e, t, n) {
                    return c((function() {
                        return l(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, a.Z.post({
                                        url: s.ANM.HUB_EMAIL_VERIFY_SEND,
                                        body: {
                                            email: e,
                                            guild_id: n,
                                            allow_multiple_guilds: t,
                                            use_verification_code: !0
                                        },
                                        trackedActionData: {
                                            event: r.a9.HUB_EMAIL_VERIFY_SEND,
                                            properties: function(e) {
                                                var t, n = null == e || null === (t = e.body) || void 0 === t ? void 0 : t.has_matching_guild;
                                                return (0, o.iG)({
                                                    has_matching_guild: n
                                                })
                                            }
                                        }
                                    })];
                                case 1:
                                    return [2, i.sent().body]
                            }
                        }))
                    }))()
                },
                verify: function(e) {
                    return c((function() {
                        var t, n, o, u;
                        return l(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    if (null == e) return [3, 4];
                                    c.label = 1;
                                case 1:
                                    c.trys.push([1, 3, , 4]);
                                    return [4, a.Z.post({
                                        url: s.ANM.HUB_EMAIL_VERIFY,
                                        body: {
                                            token: e
                                        },
                                        trackedActionData: {
                                            event: r.a9.HUB_EMAIL_VERIFY
                                        }
                                    })];
                                case 2:
                                    n = c.sent();
                                    o = null === (t = n.body.guild) || void 0 === t ? void 0 : t.id;
                                    i.Z.dispatch({
                                        type: "HUB_VERIFY_EMAIL_SUCCESS",
                                        guildId: o
                                    });
                                    return [3, 4];
                                case 3:
                                    u = c.sent();
                                    i.Z.dispatch({
                                        type: "HUB_VERIFY_EMAIL_FAILURE",
                                        errors: u.body
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                verifyCode: function(e, t, n) {
                    return c((function() {
                        var o, u, c, f;
                        return l(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    if (null == e) return [3, 4];
                                    l.label = 1;
                                case 1:
                                    l.trys.push([1, 3, , 4]);
                                    return [4, a.Z.post({
                                        url: s.ANM.HUB_EMAIL_VERIFY_CODE,
                                        body: {
                                            code: e,
                                            guild_id: t,
                                            email: n
                                        },
                                        trackedActionData: {
                                            event: r.a9.HUB_EMAIL_VERIFY
                                        }
                                    })];
                                case 2:
                                    u = l.sent();
                                    c = null === (o = u.body.guild) || void 0 === o ? void 0 : o.id;
                                    i.Z.dispatch({
                                        type: "HUB_VERIFY_EMAIL_SUCCESS",
                                        guildId: c
                                    });
                                    return [2, u.body];
                                case 3:
                                    f = l.sent();
                                    i.Z.dispatch({
                                        type: "HUB_VERIFY_EMAIL_FAILURE",
                                        errors: f.body
                                    });
                                    throw f;
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                }
            }
        },
        314620: (e, t, n) => {
            "use strict";
            n.d(t, {
                b8: () => f,
                GR: () => p,
                ul: () => v
            });
            var r = n(281110),
                o = n(744564),
                i = n(200892),
                a = n(534681),
                s = n(2590);

            function u(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            u(i, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            u(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var l = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
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
                        }([i, s])
                    }
                }
            };

            function f() {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = c((function() {
                    var e, t;
                    return l(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                n.trys.push([0, 2, , 3]);
                                return [4, (0, a.Kb)({
                                    url: s.ANM.LIBRARY,
                                    oldFormErrors: !0
                                }, !1)];
                            case 1:
                                e = n.sent();
                                o.Z.dispatch({
                                    type: "LIBRARY_FETCH_SUCCESS",
                                    libraryApplications: e.body
                                });
                                return [3, 3];
                            case 2:
                                t = n.sent();
                                o.Z.dispatch({
                                    type: "LIBRARY_FETCH_FAIL",
                                    error: t
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(e) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = c((function(e) {
                    var t, n, a;
                    return l(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return null == (t = e.primarySkuId) ? [2] : [4, r.ZP.get({
                                    url: s.ANM.APPLICATION_BRANCH_LIST(e.id),
                                    oldFormErrors: !0
                                }).then((function(e) {
                                    return e.body
                                }))];
                            case 1:
                                n = u.sent();
                                a = n.map((function(n) {
                                    return i.Z.createForTestMode({
                                        id: e.id,
                                        skuId: t,
                                        branch: n
                                    })
                                }));
                                o.Z.dispatch({
                                    type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED",
                                    libraryApplications: a
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function v(e, t, n) {
                o.Z.dispatch({
                    type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
                    applicationId: e,
                    branchId: t,
                    launchOptionId: n
                })
            }
        },
        515107: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => li
            });
            var r = n(785893),
                o = n(667294),
                i = n(517563),
                a = n(571657),
                s = n(289283),
                u = n(202351),
                c = n(744564),
                l = n(84441),
                f = n(563726),
                d = n(224813),
                p = n(270012),
                h = n(113512);

            function v(e) {
                c.Z.dispatch({
                    type: "AUTH_INVITE_UPDATE",
                    invite: e
                })
            }
            var y = n(281110),
                m = n(686874),
                g = n(848285),
                b = n(536038),
                E = n(558820),
                _ = n(645106),
                O = n(2590),
                I = n(473708),
                T = n(380203),
                N = n.n(T);

            function S(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function A(e) {
                A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return A(e)
            }

            function j(e, t) {
                return !t || "object" !== x(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function P(e, t) {
                P = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return P(e, t)
            }
            var x = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function C(e) {
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
                    var n, r = A(e);
                    if (t) {
                        var o = A(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return j(this, n)
                }
            }
            u.ZP.initialize();
            var R = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && P(e, t)
                }(o, e);
                var t = C(o);

                function o() {
                    S(this, o);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        busy: !0,
                        success: !1,
                        guild: null
                    };
                    return e
                }
                var a = o.prototype;
                a.componentDidMount = function() {
                    var e = this,
                        t = (0, _.Z)(this.props.location),
                        n = (0, i.parse)(this.props.location.search);
                    y.ZP.post({
                        url: O.ANM.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                        body: {
                            token: t,
                            pixel_uuid: n.hash,
                            guild_id: n.guild_id
                        },
                        oldFormErrors: !0
                    }).then((function(t) {
                        var n = t.body.guild,
                            r = new g.Z(n);
                        e.setState({
                            success: !0,
                            busy: !1,
                            guild: r
                        })
                    }), (function() {
                        return e.setState({
                            success: !1,
                            busy: !1
                        })
                    }));
                    (0, m.e)("disable_server_highlight_notifications")
                };
                a.renderBusy = function() {
                    return (0, r.jsx)(E.ZP, {
                        children: (0, r.jsx)(E.Hh, {})
                    })
                };
                a.renderSuccess = function() {
                    var e = this.props,
                        t = e.defaultRoute,
                        n = e.transitionTo,
                        o = this.state.guild;
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_HEADER
                        }), (0, r.jsx)(E.DK, {
                            children: I.Z.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_BODY.format({
                                guildName: o.name
                            })
                        }), (0,
                            r.jsx)(E.zx, {
                            className: N().marginTop40,
                            onClick: function() {
                                return n(t)
                            },
                            children: I.Z.Messages.CONTINUE_TO_WEBAPP
                        }), (0, r.jsx)(E.zx, {
                            className: N().marginTop8,
                            color: E.zx.Colors.LINK,
                            look: E.zx.Looks.LINK,
                            onClick: function() {
                                n(O.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(o.id))
                            },
                            children: I.Z.Messages.SERVER_HIGHLIGHT_MANAGE_SETTINGS
                        })]
                    })
                };
                a.renderError = function() {
                    var e = this.props,
                        t = e.defaultRoute,
                        o = e.transitionTo;
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Ee, {
                            src: n(709989),
                            className: N().marginBottom20
                        }), (0, r.jsx)(E.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER
                        }), (0, r.jsx)(E.DK, {
                            children: I.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY
                        }), (0, r.jsx)(E.zx, {
                            className: N().marginTop40,
                            onClick: function() {
                                return o(t)
                            },
                            children: I.Z.Messages.CONTINUE_TO_WEBAPP
                        })]
                    })
                };
                a.render = function() {
                    var e = this.state,
                        t = e.busy,
                        n = e.success;
                    return t ? this.renderBusy() : n ? this.renderSuccess() : this.renderError()
                };
                return o
            }(o.PureComponent);
            R.defaultProps = {
                transitionTo: function(e) {
                    return n.g.location.assign(e)
                }
            };
            const w = u.ZP.connectStores([b.Z], (function() {
                return {
                    defaultRoute: b.Z.defaultRoute
                }
            }))(R);
            var Z = n(294184),
                L = n.n(Z),
                D = n(426797),
                M = n(53540),
                U = n(560837),
                k = n(78501),
                G = n(169649),
                B = n(58118),
                F = n(3066),
                V = n.n(F);

            function H(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function z(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function Y(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            z(i, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            z(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function K(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return H(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return H(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var W = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                        0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                        }([i, s])
                    }
                }
            };
            const q = function() {
                var e, t = K(o.useState(""), 2),
                    i = t[0],
                    a = t[1],
                    s = K(o.useState(""), 2),
                    c = s[0],
                    l = s[1],
                    f = K(o.useState(!1), 2),
                    d = f[0],
                    p = f[1],
                    h = K(o.useState(!1), 2),
                    v = h[0],
                    y = h[1],
                    m = K(o.useState(null), 2),
                    g = m[0],
                    b = m[1],
                    _ = K(o.useState(null), 2),
                    O = _[0],
                    T = _[1],
                    S = (0, u.e7)([U.Z], (function() {
                        return U.Z.getCountryCode()
                    })),
                    A = S.code.split(" ")[0],
                    j = (e = Y((function() {
                        var e;
                        return W(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    t.trys.push([0, 2, , 3]);
                                    return [4, D.Z.resendCode(i)];
                                case 1:
                                    t.sent();
                                    return [3, 3];
                                case 2:
                                    e = t.sent();
                                    T(e.body.message);
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    })), function() {
                        return e.apply(this, arguments)
                    }),
                    P = function() {
                        var e = Y((function() {
                            var e, t;
                            return W(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        p(!0);
                                        n.label = 1;
                                    case 1:
                                        n.trys.push([1, 3, 4, 5]);
                                        return [4, D.Z.verifyPhone(A + i, c)];
                                    case 2:
                                        e = n.sent().token;
                                        b(null);
                                        T(null);
                                        y(!0);
                                        D.Z.validatePhoneForSupport(e);
                                        return [3, 5];
                                    case 3:
                                        if ((t = n.sent()).body.message) {
                                            b(null);
                                            T(t.body.message)
                                        } else {
                                            b(t.body.phone);
                                            T(t.body.code)
                                        }
                                        return [3, 5];
                                    case 4:
                                        p(!1);
                                        return [7];
                                    case 5:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    x = (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Ee, {
                            src: n(882253)
                        }), (0, r.jsxs)(E.Dx, {
                            className: L()(N().marginTop20, V().flex, V().justifyCenter, V().alignCenter),
                            children: [I.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED, (0, r.jsx)(G.Z, {
                                className: N().marginLeft8
                            })]
                        })]
                    });
                return v ? x : (0,
                    r.jsxs)(E.ZP, {
                    children: [(0, r.jsx)(E.Dx, {
                        children: I.Z.Messages.ENTER_CODE
                    }), (0, r.jsx)(E.DK, {
                        className: N().marginTop8,
                        children: I.Z.Messages.VERIFY_PHONE_FOR_SUPPORT
                    }), (0, r.jsxs)(E.gO, {
                        className: N().marginTop20,
                        children: [(0, r.jsx)(k.Z, {
                            label: I.Z.Messages.FORM_LABEL_PHONE_NUMBER,
                            alpha2: S.alpha2,
                            countryCode: A,
                            value: i,
                            autoComplete: "off",
                            spellCheck: "false",
                            onChange: a,
                            forceMode: M.Nz.PHONE,
                            error: g
                        }), (0, r.jsx)(E.II, {
                            className: N().marginTop20,
                            label: I.Z.Messages.CONFIRMATION_CODE,
                            value: c,
                            onChange: l,
                            maxLength: B.z,
                            error: O
                        }), (0, r.jsx)(E.zx, {
                            size: E.zx.Sizes.SMALL,
                            look: E.zx.Looks.LINK,
                            onClick: j,
                            children: I.Z.Messages.RESEND_CODE
                        }), (0, r.jsx)(E.zx, {
                            className: N().marginTop20,
                            onClick: P,
                            submitting: d,
                            children: I.Z.Messages.DONE
                        })]
                    })]
                })
            };
            var X = n(158434),
                J = n(145739),
                $ = n(340563),
                Q = n(784426);

            function ee(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function te(e) {
                te = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return te(e)
            }

            function ne(e, t) {
                return !t || "object" !== oe(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function re(e, t) {
                re = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return re(e, t)
            }
            var oe = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function ie(e) {
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
                    var n, r = te(e);
                    if (t) {
                        var o = te(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ne(this, n)
                }
            }
            var ae = !1,
                se = null,
                ue = null;
            var ce = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && re(e, t)
                }(n, e);
                var t = ie(n);

                function n() {
                    ee(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.getState = function() {
                    return {
                        verifySuccess: ae,
                        verifyErrors: se,
                        redirectGuildId: ue
                    }
                };
                return n
            }(u.ZP.Store);
            ce.displayName = "HubEmailVerificationStore";
            const le = new ce(c.Z, {
                HUB_VERIFY_EMAIL_SUCCESS: function(e) {
                    var t = e.guildId;
                    ae = !0;
                    se = null;
                    ue = t
                },
                HUB_VERIFY_EMAIL_FAILURE: function(e) {
                    var t = e.errors;
                    ae = !1;
                    se = t
                }
            });
            var fe = n(441143),
                de = n.n(fe),
                pe = n(131795),
                he = n.n(pe),
                ve = n(125333),
                ye = n(58964),
                me = n(97245),
                ge = n(664625),
                be = n(652591),
                Ee = n(877815);

            function _e(e) {
                var t = function(e) {
                        var t, n = null === (t = he().os) || void 0 === t ? void 0 : t.family;
                        if ("Android" === n || "iOS" === n) {
                            var r = ge.default.getFingerprint(),
                                o = (0, ye.WS)();
                            de()(null != e, "generateAppPath: guildId cannot be null");
                            return (0, ye.ZP)((0, ve.z0)(e), {
                                utmSource: "verify_hub_email",
                                fingerprint: r,
                                attemptId: o
                            })
                        }
                        return "discord://"
                    }(e),
                    n = (0, ye.zS)(t);
                null != n && be.default.track(O.rMx.DEEP_LINK_CLICKED, {
                    fingerprint: (0, me.K)(n.fingerprint),
                    attempt_id: n.attemptId,
                    source: n.utmSource
                });
                Ee.Z.launch(t, (function(e) {
                    e || (0, Q.dL)(b.Z.fallbackRoute)
                }))
            }
            var Oe = n(920032),
                Ie = n.n(Oe);

            function Te(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ne(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Te(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Te(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            u.ZP.initialize();
            var Se = n(641453),
                Ae = n(248088),
                je = n(304548),
                Pe = n(795308),
                xe = n(107364),
                Ce = n(566991),
                Re = n.n(Ce);

            function we(e) {
                var t = e.text,
                    o = e.buttonCta,
                    i = e.onClick;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(E.Ee, {
                        src: n(819361)
                    }), (0, r.jsx)(E.Dx, {
                        className: L()(N().marginTop20, N().marginBottom8, V().flexCenter),
                        children: I.Z.Messages.DISCORD_DESC_SHORT
                    }), (0, r.jsx)(E.DK, {
                        className: N().marginBottom40,
                        children: I.Z.Messages.DISCORD_DESC_LONG
                    }), (0, r.jsxs)(je.Card, {
                        className: Re().card,
                        type: je.Card.Types.CUSTOM,
                        children: [(0, r.jsx)("img", {
                            alt: "",
                            className: Re().cardAccentLeft,
                            src: n(637849)
                        }), (0, r.jsx)("img", {
                            alt: "",
                            className: Re().cardAccentRight,
                            src: n(837307)
                        }), (0, r.jsxs)(xe.Z, {
                            className: Re().cardContents,
                            direction: xe.Z.Direction.VERTICAL,
                            align: xe.Z.Align.STRETCH,
                            grow: 0,
                            children: [(0, r.jsx)(je.Text, {
                                tag: "strong",
                                className: Re().buttonTitle,
                                variant: "text-md/normal",
                                style: {
                                    color: Pe.Z.unsafe_rawColors.PRIMARY_300.css
                                },
                                children: t
                            }), (0, r.jsx)(E.zx, {
                                className: Re().button,
                                onClick: i,
                                children: o
                            })]
                        })]
                    })]
                })
            }

            function Ze(e) {
                var t = e.text,
                    n = e.buttonCta,
                    o = e.theme,
                    i = void 0 === o ? O.BRd.DARK : o,
                    a = e.onClick;
                return (0, r.jsx)(E.ZP, {
                    theme: i,
                    children: (0, r.jsx)(we, {
                        text: t,
                        buttonCta: n,
                        onClick: a
                    })
                })
            }
            var Le = n(677681),
                De = n(730381),
                Me = n.n(De),
                Ue = n(260561),
                ke = (0, Ue.B)({
                    kind: "user",
                    id: "2021-03_expiration_notice_mobile_web",
                    label: "Show expiration notice on mobile web invite",
                    defaultConfig: {
                        showExpirationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show expiration notice",
                        config: {
                            showExpirationNotice: !0
                        }
                    }]
                }),
                Ge = ((0, Ue.B)({
                    kind: "user",
                    id: "2021-03_expiration_notice_ios",
                    label: "Show expiration notice on ios invite",
                    defaultConfig: {
                        showExpirationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show expiration notice",
                        config: {
                            showExpirationNotice: !0
                        }
                    }]
                }), (0, Ue.B)({
                    kind: "user",
                    id: "2021-03_expiration_notice_ios_embed",
                    label: "Show expiration notice on ios invite embed",
                    defaultConfig: {
                        showExpirationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show expiration notice",
                        config: {
                            showExpirationNotice: !0
                        }
                    }]
                }), n(457997)),
                Be = n(567403);
            const Fe = function(e) {
                var t = null == e ? void 0 : e.expires_at,
                    n = ! function(e) {
                        switch (null == e ? void 0 : e.state) {
                            case O.r2o.EXPIRED:
                            case O.r2o.BANNED:
                            case O.r2o.ERROR:
                            case O.r2o.RESOLVING:
                                return !1;
                            default:
                                return !0
                        }
                    }(e);
                return (0, u.e7)([Be.Z], (function() {
                    var t;
                    return null != Be.Z.getGuild(null == e || null === (t = e.guild) || void 0 === t ? void 0 : t.id)
                })) || n || null == t ? null : t
            };
            var Ve = n(961576),
                He = n.n(Ve),
                ze = function(e) {
                    var t = e.expiredAt,
                        n = e.className;
                    ke.trackExposure({
                        location: "29f711_1"
                    });
                    if (!ke.useExperiment({
                            location: "29f711_2"
                        }, {
                            autoTrackExposure: !1
                        }).showExpirationNotice) return null;
                    var o = Me()(t).fromNow(!0);
                    return (0, r.jsx)("div", {
                        className: L()(He().container, n),
                        children: (0, r.jsxs)("div", {
                            className: He().expirationContainer,
                            children: [(0,
                                r.jsx)(Ge.Z, {
                                color: Pe.Z.unsafe_rawColors.WHITE_500.css,
                                width: 14,
                                height: 14,
                                className: He().clock
                            }), (0, r.jsx)(je.Text, {
                                variant: "text-sm/normal",
                                color: "header-primary",
                                children: I.Z.Messages.INVITE_EXPIRATION_NOTICE.format({
                                    duration: o
                                })
                            })]
                        })
                    })
                };
            const Ye = function(e) {
                var t = e.invite,
                    n = e.className,
                    o = Fe(t);
                return null == o ? null : (0, r.jsx)(ze, {
                    expiredAt: o,
                    className: n
                })
            };
            var Ke = n(757753),
                We = n(775173),
                qe = n(72580),
                Xe = n(750203),
                Je = n(206986),
                $e = n(98265),
                Qe = n(749565),
                et = n(718634),
                tt = n(75025),
                nt = n(995434),
                rt = n.n(nt),
                ot = function(e) {
                    var t, n, r = {
                        onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
                        memberCount: null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0
                    };
                    return 0 === r.memberCount && 0 === r.memberCount ? null : r
                },
                it = function(e) {
                    return e.target_type === et.Iq.STREAM && null != e.target_user
                },
                at = function(e) {
                    var t;
                    return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === O.d4z.GROUP_DM
                },
                st = function(e) {
                    return null == e.channel && null == e.guild && null != e.inviter
                },
                ut = function(e) {
                    return e.state === O.r2o.ACCEPTED
                },
                ct = function(e) {
                    return null != e.guild_scheduled_event
                },
                lt = function(e) {
                    return !ct(e) && (!!st(e) || null != e.inviter && !ut(e) && ! function(e) {
                        var t, n = ot(e);
                        return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > 100
                    }(e))
                },
                ft = function(e) {
                    var t = e.guild,
                        n = e.user,
                        o = e.application;
                    return null != o ? (0, r.jsx)(Xe.Z, {
                        className: rt().appIcon,
                        game: o,
                        size: rt().appIconSize
                    }) : null != n ? (0, r.jsx)(E.qE, {
                        src: n.getAvatarURL(void 0, 100),
                        size: je.AvatarSizes.DEPRECATED_SIZE_100,
                        className: rt().avatar
                    }) : null != t ? (0, r.jsx)(E.Vj, {
                        guild: t,
                        size: E.Vj.Sizes.LARGER,
                        className: rt().guildIcon,
                        animate: !0
                    }) : null
                };

            function dt(e) {
                var t, n = e.invite,
                    o = e.textClassName,
                    i = e.className,
                    a = ot(n);
                return null == a || lt(n) || (null == n || null === (t = n.guild) || void 0 === t ? void 0 : t.id) === tt.fQ ? null : (0, r.jsx)(E.EJ, {
                    className: L()(rt().activityCount, i),
                    online: a.onlineCount,
                    total: a.memberCount,
                    textClassName: o,
                    flat: !0
                })
            }

            function pt(e) {
                var t = e.invite,
                    n = e.showBigUserIcon,
                    i = o.useMemo((function() {
                        return n ? null : it(t) && null != t.target_user ? We.ZP.getUserAvatarURL(t.target_user) : lt(t) && null != t.inviter ? We.ZP.getUserAvatarURL(t.inviter) : null
                    }), [t, n]),
                    a = I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN;
                if (at(t)) {
                    var s, u;
                    a = null != (null === (s = t.channel) || void 0 === s ? void 0 : s.name) && null != (null === (u = t.inviter) || void 0 === u ? void 0 : u.username) ? I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM_BY_USER.format({
                        username: t.inviter.username
                    }) : I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM
                } else it(t) && null != t.target_user ? a = I.Z.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                    username: t.target_user.username
                }) : ut(t) ? a = I.Z.Messages.INSTANT_INVITE_YOU_ARE_ALREADY_A_MEMBER_OF : lt(t) && null != t.inviter && (a = I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_BY_USER.format({
                    username: Qe.ZP.getFormattedName(t.inviter)
                }));
                return (0, r.jsxs)("div", {
                    className: rt().inviteJoinContainer,
                    children: [null != i && (0, r.jsx)("div", {
                        className: rt().inviterIconWrapper,
                        children: (0,
                            r.jsx)(E.qE, {
                            src: i,
                            size: je.AvatarSizes.SIZE_24
                        })
                    }), (0, r.jsx)(E.DK, {
                        className: rt().inviteJoinSubTitle,
                        children: a
                    })]
                })
            }

            function ht(e) {
                var t, n, o, i = e.user,
                    a = e.guild,
                    s = e.channel,
                    u = e.application,
                    c = e.showBigUserIcon;
                if (null != a) {
                    c && null == u && (t = (0, r.jsx)(E.Vj, {
                        guild: a,
                        size: E.Vj.Sizes.SMALL
                    }));
                    n = a.name;
                    if (null != u) {
                        n = u.name;
                        o = (0, r.jsxs)("div", {
                            className: rt().inviteJoinContainer,
                            children: [(0, r.jsx)(E.DK, {
                                className: rt().appIn,
                                children: I.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
                            }), (0, r.jsxs)("div", {
                                className: rt().guildContainer,
                                children: [(0, r.jsx)(E.Vj, {
                                    guild: a,
                                    size: E.Vj.Sizes.SMALL
                                }), (0, r.jsx)($e.Z, {
                                    className: rt().appGuildName,
                                    color: $e.Z.Colors.CUSTOM,
                                    tag: "span",
                                    size: $e.Z.Sizes.SIZE_24,
                                    children: a.name
                                })]
                            })]
                        })
                    }
                } else if (null != s) {
                    if (null == i) throw new Error("no inviter in group DM invite");
                    var l = Qe.ZP.getFormattedName(i);
                    if (null != s.name && "" !== s.name) {
                        n = s.name;
                        null != s.icon && (t = (0, r.jsx)(E.MC, {
                            channel: s,
                            size: je.AvatarSizes.SIZE_32
                        }))
                    } else n = l
                } else if (null != i) {
                    var f = Qe.ZP.getFormattedName(i);
                    n = I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                        username: f
                    });
                    o = (0, r.jsx)(E.DK, {
                        className: rt().directInviteSubTitle,
                        children: I.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                            username: f
                        })
                    })
                }
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(E.Dx, {
                        className: rt().title,
                        children: [null != a ? (0, r.jsx)(Je.Z, {
                            guild: a,
                            className: rt().guildBadge,
                            tooltipPosition: "left"
                        }) : null, t, n]
                    }), o]
                })
            }
            var vt = n(451936),
                yt = n(382060),
                mt = n(722406),
                gt = n(220109),
                bt = n(621634),
                Et = n(124251),
                _t = n(622680),
                Ot = n.n(_t);

            function It(e) {
                var t, n = e.guildScheduledEvent,
                    o = e.channel,
                    i = e.onAcceptInvite,
                    a = e.isSubmitting;
                return (0, r.jsxs)("div", {
                    className: Ot().guildEventCard,
                    children: [(0, r.jsx)(gt.ZP, {
                        name: n.name,
                        description: null !== (t = n.description) && void 0 !== t ? t : void 0,
                        headerVariant: "heading-md/medium",
                        descriptionClassName: Ot().channelDescription,
                        guildId: n.guild_id,
                        guildEventId: n.id,
                        eventPreview: n
                    }), null != o && (0, r.jsx)("div", {
                        className: Ot().channelInfo,
                        children: (0, r.jsx)(bt.Z, {
                            guildScheduledEvent: n,
                            channel: o
                        })
                    }), (0, r.jsx)(je.Button, {
                        className: Ot().acceptButton,
                        color: je.Button.Colors.GREEN,
                        onClick: i,
                        submitting: a,
                        children: I.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
                    })]
                })
            }

            function Tt(e) {
                var t, n = e.invite,
                    o = null != n.guild ? new g.Z(n.guild) : null;
                if (null == o) return null;
                var i = null !== (t = o.description) && void 0 !== t ? t : "";
                return (0, r.jsxs)("div", {
                    className: Ot().guildInfoCard,
                    children: [(0, r.jsx)(je.Heading, {
                        className: Ot().presentedBy,
                        variant: "text-sm/medium",
                        children: I.Z.Messages.STAGE_INVITE_GUILD_HEADER
                    }), (0, r.jsxs)("div", {
                        className: Ot().guildContainer,
                        children: [(0, r.jsx)(Et.Z, {
                            guild: o,
                            active: !0,
                            size: Et.Z.Sizes.MEDIUM
                        }), (0, r.jsxs)("div", {
                            className: Ot().guildDetailsContanier,
                            children: [(0, r.jsxs)(je.Text, {
                                className: Ot().guildName,
                                color: "header-primary",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [o.name, (0, r.jsx)(Je.Z, {
                                    guild: o,
                                    className: Ot().guildBadge,
                                    tooltipPosition: "left"
                                })]
                            }), (0, r.jsx)(dt, {
                                invite: n,
                                textClassName: Ot().guildInfoMemberCountText,
                                className: Ot().guildInfoMemberCount
                            })]
                        })]
                    }), i.length > 0 && (0, r.jsx)("details", {
                        className: Ot().guildDescriptionContainer,
                        children: (0, r.jsx)(je.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: i
                        })
                    })]
                })
            }

            function Nt(e) {
                var t = e.invite,
                    n = e.channel,
                    o = e.isSubmitting,
                    i = e.onAcceptInvite,
                    a = t.guild_scheduled_event;
                return null != a ? (0, r.jsx)(It, {
                    guildScheduledEvent: a,
                    channel: n,
                    isSubmitting: o,
                    onAcceptInvite: i
                }) : null
            }
            var St = n(747973),
                At = n.n(St);

            function jt(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Pt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        jt(e, t, n[t])
                    }))
                }
                return e
            }

            function xt(e, t) {
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

            function Ct(e) {
                var t = e.invite,
                    n = e.onAcceptInvite,
                    o = e.disableUser,
                    i = void 0 !== o && o;
                if (null == t) return null;
                var a = null != t.guild ? new g.Z(t.guild) : null,
                    s = null != t.channel ? (0, yt.jD)(t.channel) : null,
                    u = null != t.target_application ? new vt.Z(t.target_application) : null,
                    c = i || null == t.inviter ? null : new mt.Z(t.inviter),
                    l = !(null != t.approximate_member_count && t.approximate_member_count > 100 || null != a && a.hasFeature(O.oNc.COMMUNITY)) && null != c && at(t),
                    f = function(e) {
                        switch (e.state) {
                            case O.r2o.ACCEPTING:
                            case O.r2o.APP_OPENING:
                                return !0;
                            default:
                                return !1
                        }
                    }(t),
                    d = {
                        invite: t,
                        user: c,
                        guild: a,
                        channel: s,
                        application: u
                    };
                return ct(t) ? (0, r.jsx)(Nt, {
                    invite: t,
                    channel: s,
                    isSubmitting: f,
                    onAcceptInvite: n
                }) : (0, r.jsxs)("div", {
                    className: At().container,
                    children: [(0, r.jsx)(ft, {
                        application: u,
                        guild: a,
                        user: l || st(t) ? c : null
                    }), st(t) ? null : (0, r.jsx)(pt, xt(Pt({}, d), {
                        showBigUserIcon: l
                    })), (0, r.jsx)(ht, xt(Pt({}, d), {
                        showBigUserIcon: l
                    })), (0, r.jsx)(dt, Pt({}, d)), (0, r.jsx)(je.Button, {
                        onClick: n,
                        submitting: f,
                        className: At().acceptButton,
                        children: I.Z.Messages.INSTANT_INVITE_ACCEPT
                    })]
                })
            }
            var Rt = n(35628),
                wt = n.n(Rt);

            function Zt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Lt(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Dt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Lt(e, t, n[t])
                    }))
                }
                return e
            }

            function Mt(e, t) {
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

            function Ut(e, t) {
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

            function kt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Zt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Zt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Gt;

            function Bt() {
                return (0, r.jsx)("div", {
                    className: wt().centerFlex,
                    children: (0, r.jsx)(je.Spinner, {})
                })
            }! function(e) {
                e[e.LOADING = 0] = "LOADING";
                e[e.DETAILS = 1] = "DETAILS";
                e[e.ERROR = 2] = "ERROR"
            }(Gt || (Gt = {}));
            var Ft = function(e) {
                var t = null == (null == e ? void 0 : e.state) && null == (null == e ? void 0 : e.channel);
                if (null == e || null == e.state || t) return Gt.LOADING;
                var n = e.state;
                switch (n) {
                    case O.r2o.RESOLVED:
                    case O.r2o.ACCEPTED:
                    case O.r2o.APP_NOT_OPENED:
                    case O.r2o.APP_OPENED:
                    case O.r2o.ACCEPTING:
                    case O.r2o.APP_OPENING:
                        return Gt.DETAILS;
                    case O.r2o.EXPIRED:
                    case O.r2o.BANNED:
                    case O.r2o.ERROR:
                        return Gt.ERROR;
                    case O.r2o.RESOLVING:
                        return Gt.LOADING;
                    default:
                        (0, qe.vE)(n)
                }
            };

            function Vt(e) {
                var t = e.invite,
                    n = e.onAcceptInvite;
                return (null == t ? void 0 : t.state) === O.r2o.BANNED ? (0, r.jsx)(we, {
                    text: I.Z.Messages.AUTH_BANNED_INVITE_BODY,
                    buttonCta: I.Z.Messages.INVITE_INVALID_CTA,
                    onClick: n
                }) : (0, r.jsx)(we, {
                    text: I.Z.Messages.INVITE_INVALID_ERROR,
                    buttonCta: I.Z.Messages.INVITE_INVALID_CTA,
                    onClick: n
                })
            }

            function Ht(e) {
                var t = e.children,
                    n = e.cardChildren,
                    i = e.startAnimHeightPx,
                    a = e.innerStyle,
                    s = Ut(e, ["children", "cardChildren", "startAnimHeightPx", "innerStyle"]).invite,
                    u = kt(o.useState(Ft(s)), 2),
                    c = u[0],
                    l = u[1],
                    f = (0, Le.Z)(),
                    d = f.ref,
                    p = f.height,
                    h = (0, Ae.useSpring)({
                        height: "".concat(null != p && 0 !== p ? p : i, "px"),
                        config: Ae.config.stiff
                    });
                o.useEffect((function() {
                    var e = Ft(s);
                    e !== c && l(e)
                }), [s, c]);
                return (0, r.jsxs)(Ae.animated.div, {
                    className: wt().inviteCard,
                    style: h,
                    children: [(0, r.jsx)(Ae.animated.div, {
                        className: wt().inviteChildContainer,
                        style: h,
                        children: (0, r.jsx)("section", {
                            ref: d,
                            className: null == a ? void 0 : a(c),
                            children: t(c)
                        })
                    }), n]
                })
            }

            function zt(e) {
                var t = e.invite;
                if (null == t || !ct(t)) return null;
                return (0, r.jsx)(Ht, Mt(Dt({
                    startAnimHeightPx: 0,
                    innerStyle: function() {
                        return wt().guildInfoInner
                    },
                    cardChildren: (0, r.jsx)(Ye, {
                        invite: t,
                        className: wt().expirationNotice
                    })
                }, e), {
                    children: function(e) {
                        return function(e) {
                            return null == t ? null : e === Gt.DETAILS ? (0, r.jsx)(Tt, {
                                invite: t
                            }) : null
                        }(e)
                    }
                }))
            }

            function Yt(e) {
                var t, n = e.invite,
                    o = null != n && ct(n),
                    i = (Lt(t = {}, Gt.DETAILS, wt().inviteCardInner), Lt(t, Gt.ERROR, wt().inviteCardInnerError), Lt(t, Gt.LOADING, wt().inviteCardInnerLoading), t);
                return (0, r.jsx)(Ht, Mt(Dt({
                    startAnimHeightPx: 200,
                    innerStyle: function(e) {
                        return i[e]
                    },
                    cardChildren: o ? null : (0, r.jsx)(Ye, {
                        invite: n,
                        className: wt().expirationNotice
                    })
                }, e), {
                    children: function(t) {
                        return function(t) {
                            if (null == n) return (0, r.jsx)(Bt, {});
                            switch (t) {
                                case Gt.DETAILS:
                                    return (0, r.jsx)(Ct, Mt(Dt({}, e), {
                                        invite: n
                                    }));
                                case Gt.ERROR:
                                    return (0, r.jsx)(Vt, Mt(Dt({}, e), {
                                        invite: n
                                    }));
                                default:
                                    return (0, r.jsx)(Bt, {})
                            }
                        }(t)
                    }
                }))
            }

            function Kt(e) {
                var t = e.invite,
                    n = e.onAcceptInvite,
                    o = (null != t ? t : {}).guild,
                    i = {};
                if (null != (null == o ? void 0 : o.splash)) {
                    var a = We.ZP.getGuildSplashURL({
                        id: o.id,
                        splash: o.splash
                    });
                    if (null != a) {
                        i.backgroundImage = "url(".concat(a, ")");
                        i.backgroundSize = "cover"
                    }
                }
                return (0, r.jsxs)(E.ZP, {
                    theme: O.BRd.DARK,
                    className: wt().splashBackground,
                    style: i,
                    contentClassName: wt().centerAuthBoxContent,
                    children: [(0, r.jsx)(Yt, Mt(Dt({}, e), {
                        onAcceptInvite: n
                    })), (0, r.jsx)(zt, Dt({}, e))]
                })
            }
            var Wt = n(821229),
                qt = n(70321),
                Xt = n(3564),
                Jt = n(130585),
                $t = n(848303);
            const Qt = function() {
                return Date.now() - $t.mb
            };
            var en = n(872691),
                tn = n(928975),
                nn = n(734589);

            function rn(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function on(e) {
                on = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return on(e)
            }

            function an(e, t) {
                return !t || "object" !== un(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function sn(e, t) {
                sn = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return sn(e, t)
            }
            var un = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function cn(e) {
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
                    var n, r = on(e);
                    if (t) {
                        var o = on(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return an(this, n)
                }
            }
            u.ZP.initialize();
            var ln = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && sn(e, t)
                }(o, e);
                var t = cn(o);

                function o() {
                    rn(this, o);
                    return t.apply(this, arguments)
                }
                var i = o.prototype;
                i.componentDidMount = function() {
                    var e = (0, _.Z)(this.props.location);
                    null != e && l.Z.authorizeIPAddress(e);
                    (0, m.e)("authorize_ip")
                };
                i.renderLoginButton = function() {
                    if ("Android" === he().os.family || "iOS" === he().os.family) return null;
                    var e = this.props.transitionTo;
                    return (0, r.jsx)(E.zx, {
                        onClick: function() {
                            return e(O.Z5c.LOGIN)
                        },
                        children: I.Z.Messages._LOGIN
                    })
                };
                i.renderFailed = function() {
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)("img", {
                            alt: "",
                            src: n(955568),
                            className: N().marginBottom20
                        }), (0, r.jsx)(E.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.AUTHORIZATION_EXPIRED
                        }), (0, r.jsx)(E.DK, {
                            className: N().marginBottom40,
                            children: I.Z.Messages._AUTH_EXPIRED_SUGGESTION
                        }), this.renderLoginButton()]
                    })
                };
                i.renderSucceeded = function() {
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)("img", {
                            alt: "",
                            src: n(230978),
                            className: N().marginBottom20
                        }), (0, r.jsx)(E.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.IP_AUTHORIZATION_SUCCEEDED
                        }), (0, r.jsx)(E.DK, {
                            className: N().marginBottom40,
                            children: I.Z.Messages._AUTH_IP_AUTH_SUCCEEDED_SUGGESTION
                        }), this.renderLoginButton()]
                    })
                };
                i.renderDefault = function() {
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Hh, {}), (0, r.jsx)(E.Dx, {
                            children: I.Z.Messages.AUTHORIZING
                        })]
                    })
                };
                i.render = function() {
                    var e = this.props,
                        t = e.verifyFailed,
                        n = e.verifySucceeded;
                    return t ? this.renderFailed() : n ? this.renderSucceeded() : this.renderDefault()
                };
                return o
            }(o.PureComponent);
            ln.defaultProps = {
                transitionTo: function(e) {
                    return n.g.location.assign(e)
                }
            };
            const fn = u.ZP.connectStores([ge.default], (function() {
                return {
                    verifyFailed: ge.default.didVerifyFail(),
                    verifySucceeded: ge.default.didVerifySucceed()
                }
            }))(ln);
            const dn = function(e) {
                var t = e.location,
                    i = (0, u.cj)([ge.default], (function() {
                        return {
                            verifyFailed: ge.default.didVerifyFail(),
                            verifySucceeded: ge.default.didVerifySucceed()
                        }
                    })),
                    a = i.verifyFailed,
                    s = i.verifySucceeded;
                o.useEffect((function() {
                    var e = (0, _.Z)(t);
                    null != e && l.Z.authorizePayment(e);
                    (0, m.e)("authorize_payment")
                }), [t]);
                return a ? (0, r.jsxs)(E.ZP, {
                    children: [(0, r.jsx)("img", {
                        alt: "",
                        src: n(639915),
                        className: N().marginBottom20
                    }), (0, r.jsx)(E.Dx, {
                        className: N().marginBottom8,
                        children: I.Z.Messages.PAYMENT_AUTHORIZATION_EXPIRED
                    }), (0, r.jsx)(E.DK, {
                        className: N().marginBottom40,
                        children: I.Z.Messages.PAYMENT_AUTH_EXPIRED_SUGGESTION
                    })]
                }) : s ? (0, r.jsxs)(E.ZP, {
                    children: [(0, r.jsx)("img", {
                        alt: "",
                        src: n(143613),
                        className: N().marginBottom20
                    }), (0, r.jsx)(E.Dx, {
                        className: N().marginBottom8,
                        children: I.Z.Messages.PAYMENT_AUTHORIZATION_SUCCEEDED
                    }), (0, r.jsx)(E.DK, {
                        className: N().marginBottom40,
                        children: I.Z.Messages.PAYMENT_AUTH_SUCCEEDED_SUGGESTION
                    })]
                }) : (0, r.jsxs)(E.ZP, {
                    children: [(0, r.jsx)(E.Hh, {}), (0, r.jsx)(E.Dx, {
                        children: I.Z.Messages.PAYMENT_AUTHORIZING
                    })]
                })
            };
            var pn = n(412961),
                hn = n(384482),
                vn = n(926543);

            function yn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function mn(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function gn(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return yn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return yn(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var bn, En = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
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
                        }([i, s])
                    }
                }
            };
            ! function(e) {
                e[e.INITIAL = 0] = "INITIAL";
                e[e.RPC_CONNECTED = 1] = "RPC_CONNECTED";
                e[e.APP_OPENING = 2] = "APP_OPENING";
                e[e.APP_OPENED = 3] = "APP_OPENED"
            }(bn || (bn = {}));
            const _n = function(e) {
                var t = e.match,
                    n = e.location,
                    i = e.attemptDeepLink,
                    a = gn(o.useState(bn.INITIAL), 2),
                    s = a[0],
                    u = a[1];
                o.useEffect((function() {
                    hn.default.once("connected", (function() {
                        u(bn.RPC_CONNECTED)
                    }));
                    hn.default.once("disconnected", (function() {
                        (0, Q.uL)((0, vn.M)())
                    }));
                    hn.default.connect()
                }), []);
                o.useEffect((function() {
                    if (s === bn.INITIAL) {
                        var e = setTimeout((function() {
                            return (0, Q.uL)((0, vn.M)())
                        }), 3e3);
                        return function() {
                            return clearTimeout(e)
                        }
                    }
                }), [s]);
                var c, l, f = o.useCallback((l = (c = function(e, t) {
                    var n;
                    return En(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                r.trys.push([0, 2, , 3]);
                                u(bn.APP_OPENING);
                                return [4, i(e, t)];
                            case 1:
                                r.sent();
                                u(bn.APP_OPENED);
                                return [3, 3];
                            case 2:
                                n = r.sent();
                                console.error("Error opening deeplink", n);
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(n, r) {
                        var o = c.apply(e, t);

                        function i(e) {
                            mn(o, n, r, i, a, "next", e)
                        }

                        function a(e) {
                            mn(o, n, r, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }), function(e, t) {
                    return l.apply(this, arguments)
                }), [i]);
                if ((0, Q.DB)()) return null;
                switch (s) {
                    case bn.RPC_CONNECTED:
                        return (0, r.jsxs)(E.ZP, {
                            children: [(0, r.jsx)(E.Dx, {
                                className: N().marginBottom8,
                                children: I.Z.Messages.DEEPLINK_BROWSER_TITLE
                            }), (0, r.jsx)(E.DK, {
                                children: I.Z.Messages.DEEPLINK_BROWSER_PROMPT
                            }), (0, r.jsx)(E.zx, {
                                className: N().marginTop40,
                                onClick: function() {
                                    return f(t, n)
                                },
                                children: I.Z.Messages.OPEN_IN_APP
                            }), (0, r.jsx)(E.zx, {
                                className: L()(N().marginTop8, N().marginCenterHorz),
                                color: E.zx.Colors.LINK,
                                look: E.zx.Looks.LINK,
                                onClick: function() {
                                    return (0, Q.uL)((0, vn.M)())
                                },
                                children: I.Z.Messages.CONTINUE_IN_BROWSER
                            })]
                        });
                    case bn.INITIAL:
                    case bn.APP_OPENING:
                        return (0, r.jsxs)(E.ZP, {
                            children: [(0, r.jsx)(E.Dx, {
                                children: I.Z.Messages.APP_OPENING
                            }), (0, r.jsx)(E.Hh, {})]
                        });
                    case bn.APP_OPENED:
                        return (0, r.jsxs)(E.ZP, {
                            children: [(0, r.jsx)(E.Dx, {
                                className: N().marginBottom8,
                                children: I.Z.Messages.APP_OPENED_TITLE
                            }), (0, r.jsx)(E.DK, {
                                children: I.Z.Messages.DEEPLINK_BROWSER_APP_OPENED
                            })]
                        })
                }
            };

            function On(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            var In = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
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
                        }([i, s])
                    }
                }
            };
            const Tn = function(e) {
                var t, n, o = e.match,
                    i = e.location,
                    a = (n = (t = function(e, t) {
                            return In(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, (0, pn.s)(O.jEp.CHANNEL, {
                                            guildId: e.params.guildId,
                                            channelId: e.params.channelId,
                                            messageId: e.params.messageId,
                                            search: t.search
                                        })];
                                    case 1:
                                        n.sent();
                                        return [2]
                                }
                            }))
                        }, function() {
                            var e = this,
                                n = arguments;
                            return new Promise((function(r, o) {
                                var i = t.apply(e, n);

                                function a(e) {
                                    On(i, r, o, a, s, "next", e)
                                }

                                function s(e) {
                                    On(i, r, o, a, s, "throw", e)
                                }
                                a(void 0)
                            }))
                        }),
                        function(e, t) {
                            return n.apply(this, arguments)
                        });
                return (0, r.jsx)(_n, {
                    match: o,
                    location: i,
                    attemptDeepLink: a
                })
            };
            var Nn = n(42261);

            function Sn(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function An(e) {
                An = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return An(e)
            }

            function jn(e, t) {
                return !t || "object" !== xn(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Pn(e, t) {
                Pn = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Pn(e, t)
            }
            var xn = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Cn(e) {
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
                    var n, r = An(e);
                    if (t) {
                        var o = An(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return jn(this, n)
                }
            }
            u.ZP.initialize();
            var Rn = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Pn(e, t)
                }(o, e);
                var t = Cn(o);

                function o() {
                    Sn(this, o);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        busy: !0,
                        success: !1,
                        user: null,
                        category: null
                    };
                    return e
                }
                var a = o.prototype;
                a.componentDidMount = function() {
                    var e = this,
                        t = (0, _.Z)(this.props.location),
                        n = (0, i.parse)(this.props.location.search);
                    y.ZP.post({
                        url: O.ANM.DISABLE_EMAIL_NOTIFICATIONS,
                        body: {
                            token: t,
                            pixel_uuid: n.hash,
                            category: n.category,
                            email_type: n.email_type
                        },
                        oldFormErrors: !0
                    }).then((function(t) {
                        var r = t.body.user,
                            o = new mt.Z(r);
                        e.setState({
                            success: !0,
                            busy: !1,
                            user: o,
                            category: n.category
                        })
                    }), (function() {
                        return e.setState({
                            success: !1,
                            busy: !1
                        })
                    }));
                    (0, m.e)("disable_email_notifications")
                };
                a.renderBusy = function() {
                    return (0, r.jsx)(E.ZP, {
                        children: (0, r.jsx)(E.Hh, {})
                    })
                };
                a.renderCategorySuccess = function(e, t) {
                    var n = this.props,
                        o = n.defaultRoute,
                        i = n.transitionTo,
                        a = I.Z.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_EMAIL_BODY.format({
                            category: t
                        });
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_HEADER
                        }), (0, r.jsx)(E.DK, {
                            children: a
                        }), (0, r.jsx)(E.zx, {
                            className: N().marginTop20,
                            onClick: function() {
                                return i(o)
                            },
                            children: I.Z.Messages.CONTINUE_TO_WEBAPP
                        }), (0, r.jsx)(E.zx, {
                            className: N().marginTop8,
                            color: E.zx.Colors.LINK,
                            look: E.zx.Looks.LINK,
                            onClick: function() {
                                return i(O.Z5c.SETTINGS("notifications", Nn.vG))
                            },
                            children: I.Z.Messages.EMAIL_CATEGORY_MANAGE_SETTING_LABEL
                        })]
                    })
                };
                a.renderSuccess = function() {
                    var e = this.props,
                        t = e.defaultRoute,
                        n = e.transitionTo,
                        o = this.state,
                        i = o.user,
                        a = o.category;
                    if (null != a) {
                        var s = Nn.Od.find((function(e) {
                            return e.category === a
                        }));
                        if (null != s) return this.renderCategorySuccess(a, s.label())
                    }
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.qE, {
                            src: null == i ? void 0 : i.getAvatarURL(void 0, 100),
                            size: je.AvatarSizes.DEPRECATED_SIZE_100,
                            className: N().marginBottom20
                        }), (0, r.jsx)(E.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_HEADER
                        }), (0, r.jsx)(E.DK, {
                            children: I.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_BODY
                        }), (0, r.jsx)(E.zx, {
                            className: N().marginTop40,
                            onClick: function() {
                                return n(t)
                            },
                            children: I.Z.Messages.CONTINUE_TO_WEBAPP
                        })]
                    })
                };
                a.renderError = function() {
                    var e = this.props,
                        t = e.defaultRoute,
                        o = e.transitionTo;
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Ee, {
                            src: n(709989),
                            className: N().marginBottom20
                        }), (0, r.jsx)(E.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER
                        }), (0, r.jsx)(E.DK, {
                            children: I.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY
                        }), (0, r.jsx)(E.zx, {
                            className: N().marginTop40,
                            onClick: function() {
                                return o(t)
                            },
                            children: I.Z.Messages.CONTINUE_TO_WEBAPP
                        })]
                    })
                };
                a.render = function() {
                    var e = this.state,
                        t = e.busy,
                        n = e.success;
                    return t ? this.renderBusy() : n ? this.renderSuccess() : this.renderError()
                };
                return o
            }(o.PureComponent);
            Rn.defaultProps = {
                transitionTo: function(e) {
                    return n.g.location.assign(e)
                }
            };
            const wn = u.ZP.connectStores([b.Z], (function() {
                return {
                    defaultRoute: b.Z.defaultRoute
                }
            }))(Rn);
            var Zn = n(314620),
                Ln = n(285991);

            function Dn(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Mn(e) {
                Mn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Mn(e)
            }

            function Un(e, t) {
                return !t || "object" !== Gn(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function kn(e, t) {
                kn = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return kn(e, t)
            }
            var Gn = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Bn(e) {
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
                    var n, r = Mn(e);
                    if (t) {
                        var o = Mn(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Un(this, n)
                }
            }
            var Fn = {};
            var Vn = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && kn(e, t)
                }(n, e);
                var t = Bn(n);

                function n() {
                    Dn(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.getState = function(e) {
                    return Fn[e]
                };
                return n
            }(u.ZP.Store);
            Vn.displayName = "CodedLinkNativeAppStateStore";
            const Hn = new Vn(c.Z, {
                NATIVE_APP_MODAL_OPENING: function(e) {
                    var t = e.code;
                    Fn[t] = O.kEZ.OPENING
                },
                NATIVE_APP_MODAL_OPENED: function(e) {
                    var t = e.code;
                    Fn[t] = O.kEZ.OPEN
                },
                NATIVE_APP_MODAL_OPEN_FAILED: function(e) {
                    var t = e.code;
                    Fn[t] = O.kEZ.OPEN_FAIL
                }
            });
            var zn = n(761814),
                Yn = n(746974),
                Kn = n(644144),
                Wn = n(348592),
                qn = n(178232),
                Xn = n(682719),
                Jn = n(994653);

            function $n(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Qn(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function er(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            Qn(i, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            Qn(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function tr(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function nr(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function rr(e) {
                rr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return rr(e)
            }

            function or(e, t) {
                return !t || "object" !== ar(t) && "function" != typeof t ? $n(e) : t
            }

            function ir(e, t) {
                ir = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return ir(e, t)
            }
            var ar = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function sr(e) {
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
                    var n, r = rr(e);
                    if (t) {
                        var o = rr(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return or(this, n)
                }
            }
            var ur, cr = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
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
                        }([i, s])
                    }
                }
            };
            u.ZP.initialize();
            ! function(e) {
                e.REGISTER = "register";
                e.LOGIN = "login"
            }(ur || (ur = {}));
            var lr = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && ir(e, t)
                }(o, e);
                var t = sr(o);

                function o() {
                    tr(this, o);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        error: null,
                        continueOnWeb: !1,
                        currentUser: null,
                        sentVerification: !1,
                        fetchingUser: !1
                    };
                    e.refreshUser = function() {
                        e.setState({
                            fetchingUser: !0
                        });
                        Ln.k({
                            withAnalyticsToken: !0
                        }).then((function(t) {
                            return e.setState({
                                currentUser: t,
                                fetchingUser: !1
                            })
                        })).catch((function() {
                            return e.setState({
                                fetchingUser: !1
                            })
                        }))
                    };
                    e.handleLogout = function() {
                        var t = e.props.match.params.giftCode;
                        l.Z.logout(O.Z5c.GIFT_CODE_LOGIN(t))
                    };
                    e.handleResendVerification = function() {
                        l.Z.verifyResend();
                        e.setState({
                            sentVerification: !0
                        })
                    };
                    var n = $n(e);
                    e.handleAccept = er((function() {
                        var e, t, r, o;
                        return cr(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    e = n.props, t = e.transitionTo;
                                    if (null == e.giftCode) throw new Error("Trying to accept gift before resolve");
                                    r = n.getCode();
                                    i.label = 1;
                                case 1:
                                    i.trys.push([1, 3, , 4]);
                                    n.setState({
                                        error: null
                                    });
                                    return [4, f.Z.redeemGiftCode(r)];
                                case 2:
                                    i.sent();
                                    t(O.Z5c.APP);
                                    return [3, 4];
                                case 3:
                                    o = i.sent();
                                    n.setState({
                                        error: o
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    e.resolveGiftCode = function() {
                        var t = e.props.transitionTo,
                            n = e.getCode();
                        f.Z.resolveGiftCode(n, !0, !0).then((function(e) {
                            null != e && null != e.giftCode.promotion && t(O.Z5c.BILLING_PROMOTION_REDEMPTION(n))
                        }))
                    };
                    return e
                }
                var i = o.prototype;
                i.componentDidMount = function() {
                    var e = this.props,
                        t = e.authenticated,
                        n = e.isResolved;
                    t && this.handleAuthenticated();
                    n || this.resolveGiftCode();
                    (0, m.e)("gift_code")
                };
                i.componentDidUpdate = function(e) {
                    var t = this,
                        n = this.props,
                        r = n.authenticated;
                    n.isResolved || c.Z.wait((function() {
                        t.resolveGiftCode()
                    }));
                    r && !e.authenticated && this.handleAuthenticated();
                    !r && e.authenticated && this.setState({
                        currentUser: null
                    })
                };
                i.handleAuthenticated = function() {
                    var e = this.state.currentUser;
                    Zn.b8();
                    null == e && this.refreshUser()
                };
                i.getCode = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    return e.match.params.giftCode
                };
                i.getMode = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    return e.login ? ur.LOGIN : ur.REGISTER
                };
                i.getErrorMessage = function(e) {
                    var t = this.props.libraryApplication,
                        n = this.state.error,
                        r = null != n ? n.code : null;
                    return r === O.evJ.INVALID_GIFT_SELF_REDEMPTION ? I.Z.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT : null != t || r === O.evJ.INVALID_GIFT_REDEMPTION_OWNED ? I.Z.Messages.GIFT_CODE_AUTH_HELP_TEXT_OWNED.format({
                        libraryLink: O.Z5c.APPLICATION_LIBRARY
                    }) : e.isClaimed || r === O.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED ? I.Z.Messages.GIFT_CODE_AUTH_HELP_TEXT_CLAIMED : r === O.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? I.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT : void 0
                };
                i.renderSpinner = function(e) {
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Dx, {
                            children: e
                        }), (0, r.jsx)(E.Hh, {})]
                    })
                };
                i.renderExpiredInvite = function() {
                    var e = this.props,
                        t = e.defaultRoute,
                        o = e.transitionTo;
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Ee, {
                            src: n(211086),
                            className: N().marginBottom8
                        }), (0, r.jsx)(E.Dx, {
                            className: L()(N().marginTop8, N().marginBottom8),
                            children: I.Z.Messages.GIFT_CODE_AUTH_INVALID_TITLE
                        }), (0, r.jsx)(E.DK, {
                            children: I.Z.Messages.GIFT_CODE_AUTH_INVALID_BODY
                        }), (0, r.jsx)(E.zx, {
                            className: L()(N().marginTop40, N().marginBottom8),
                            onClick: function() {
                                return o(t)
                            },
                            children: I.Z.Messages.CONTINUE_TO_WEBAPP
                        }), (0, r.jsx)(E.zx, {
                            onClick: function() {
                                return window.open(Wn.Z.getArticleURL(O.BhN.GIFTING), "_blank")
                            },
                            look: E.zx.Looks.LINK,
                            color: E.zx.Colors.LINK,
                            children: I.Z.Messages.GIFT_CODE_AUTH_INVALID_TIP
                        })]
                    })
                };
                i.renderAppOpened = function() {
                    var e = this;
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.APP_OPENED_TITLE
                        }), (0, r.jsx)(E.DK, {
                            children: I.Z.Messages.APP_OPENED_BODY
                        }), (0, r.jsx)(E.zx, {
                            className: N().marginTop40,
                            onClick: function() {
                                return e.setState({
                                    continueOnWeb: !0
                                })
                            },
                            children: I.Z.Messages.GIFT_CODE_AUTH_CONTINUE_IN_BROWSER
                        })]
                    })
                };
                i.renderVerification = function(e) {
                    var t = this.state.sentVerification;
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Ee, {
                            src: n(100539),
                            className: N().marginBottom8
                        }), (0, r.jsx)(E.Dx, {
                            children: I.Z.Messages.GIFT_CODE_AUTH_VERIFICATION_TITLE.format({
                                username: e.username
                            })
                        }), (0, r.jsx)(E.DK, {
                            className: N().marginTop20,
                            children: I.Z.Messages.GIFT_CODE_AUTH_HELP_TEXT_VERIFICATION_REQUIRED
                        }), (0, r.jsx)(E.zx, {
                            disabled: t,
                            className: N().marginTop40,
                            onClick: this.handleResendVerification,
                            children: t ? I.Z.Messages.GIFT_CODE_AUTH_VERIFICATION_SENT : I.Z.Messages.RESEND_VERIFICATION_EMAIL
                        }), (0, r.jsx)(E.zx, {
                            look: E.zx.Looks.LINK,
                            color: E.zx.Colors.LINK,
                            onClick: this.refreshUser,
                            className: N().marginTop8,
                            children: I.Z.Messages.GIFT_CODE_AUTH_CHECK_VERIFICATION_AGAIN
                        })]
                    })
                };
                i.renderAuthenticated = function(e, t) {
                    var n = this.getErrorMessage(e),
                        o = null != n;
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(qn.Z, {
                            giftCode: e
                        }), (0, r.jsx)(E.zx, {
                            disabled: o,
                            className: N().marginTop40,
                            onClick: this.handleAccept,
                            children: I.Z.Messages.GIFT_CODE_AUTH_ACCEPT
                        }), null != n ? (0, r.jsx)(E.DK, {
                            className: N().marginTop20,
                            children: n
                        }) : (0, r.jsx)(E.i_, {
                            className: N().marginTop20,
                            children: I.Z.Messages.GIFT_CODE_AUTH_LOGGED_IN_AS.format({
                                userTag: Qe.ZP.getUserTag(t),
                                onLogoutClick: this.handleLogout
                            })
                        })]
                    })
                };
                i.render = function() {
                    var e = this.props,
                        t = e.nativeAppState,
                        n = e.sku,
                        o = e.authenticated,
                        i = e.giftCode,
                        a = e.isResolved,
                        s = e.isAccepting,
                        u = e.transitionTo,
                        c = e.location,
                        l = this.state,
                        f = l.fetchingUser,
                        d = l.continueOnWeb;
                    if (t === O.kEZ.OPEN && !d) return this.renderAppOpened();
                    if (t === O.kEZ.OPENING) return this.renderSpinner(I.Z.Messages.APP_OPENING);
                    if (s) return this.renderSpinner(I.Z.Messages.GIFT_CODE_AUTH_ACCEPTING);
                    if (null == i) return a ? this.renderExpiredInvite() : this.renderSpinner(I.Z.Messages.GIFT_CODE_AUTH_RESOLVING);
                    if (a) {
                        if (o) {
                            var p = this.state.currentUser;
                            return f || null == p ? this.renderSpinner(I.Z.Messages.GIFT_CODE_AUTH_FETCHING_USER) : this.requiresVerification && null != p ? this.renderVerification(p) : this.renderAuthenticated(i, p)
                        }
                        return this.getMode() === ur.LOGIN ? (0, r.jsx)(Xn.ZP, {
                            giftCodeSKU: n,
                            giftCode: i,
                            transitionTo: u,
                            location: c
                        }) : (0, r.jsx)(Jn.Z, {
                            giftCodeSKU: n,
                            giftCode: i,
                            transitionTo: u,
                            location: c
                        })
                    }
                    return null
                };
                ! function(e, t, n) {
                    t && nr(e.prototype, t);
                    n && nr(e, n)
                }(o, [{
                    key: "requiresVerification",
                    get: function() {
                        var e = this.state.currentUser;
                        return null != e && !e.verified
                    }
                }]);
                return o
            }(o.PureComponent);
            const fr = u.ZP.connectStores([qt.Z, zn.Z, ge.default, Yn.Z, b.Z, Hn], (function(e) {
                var t = e.match.params.giftCode,
                    n = qt.Z.get(t),
                    r = null != n ? Yn.Z.get(n.skuId) : null;
                return {
                    giftCode: n,
                    sku: r,
                    libraryApplication: null != r && null != n ? Kn.z2(n, r, zn.Z) : null,
                    authenticated: ge.default.isAuthenticated(),
                    defaultRoute: b.Z.defaultRoute,
                    isResolved: qt.Z.getIsResolved(t),
                    isAccepting: qt.Z.getIsAccepting(t),
                    libraryApplicationsFetched: zn.Z.fetched,
                    nativeAppState: Hn.getState(t)
                }
            }))(lr);
            var dr = n(985518),
                pr = n(281437),
                hr = n(256273),
                vr = n(226613),
                yr = n(415879),
                mr = n(247246),
                gr = n(335150),
                br = n(239527),
                Er = n(571680),
                _r = n(598363),
                Or = n(84405),
                Ir = n.n(Or);

            function Tr(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Nr(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Sr(e) {
                Sr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Sr(e)
            }

            function Ar(e, t) {
                return !t || "object" !== Pr(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function jr(e, t) {
                jr = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return jr(e, t)
            }
            var Pr = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function xr(e) {
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
                    var n, r = Sr(e);
                    if (t) {
                        var o = Sr(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Ar(this, n)
                }
            }
            u.ZP.initialize();
            var Cr = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && jr(e, t)
                }(o, e);
                var t = xr(o);

                function o() {
                    Tr(this, o);
                    var e;
                    (e = t.apply(this, arguments)).handleContinue = function() {
                        var t = e.props,
                            n = t.defaultRoute;
                        (0, t.transitionTo)(n)
                    };
                    return e
                }
                var i = o.prototype;
                i.componentDidMount = function() {
                    (0, m.e)("guildTemplate");
                    _r.KO || Ee.Z.launch("discord://" + O.Z5c.GUILD_TEMPLATE(this.props.code), (function() {}))
                };
                i.componentDidUpdate = function(e) {
                    this.props.code !== e.code && J.Z.resolveGuildTemplate(this.props.code)
                };
                i.renderButton = function(e, t) {
                    return _r.KO ? (0, r.jsx)(E.zx, {
                        className: N().marginTop40,
                        onClick: t,
                        children: e
                    }) : (0, r.jsx)(E.v6, {
                        className: N().marginTop40
                    })
                };
                i.renderSpinner = function(e) {
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Dx, {
                            children: e
                        }), (0, r.jsx)(E.Hh, {})]
                    })
                };
                i.renderInvalidGuildTemplate = function() {
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Ee, {
                            src: n(211086),
                            className: N().marginBottom8
                        }), (0, r.jsx)(E.Dx, {
                            className: L()(N().marginTop8, N().marginBottom8),
                            children: I.Z.Messages.GUILD_TEMPLATE_INVALID_TITLE
                        }), (0, r.jsx)(E.DK, {
                            children: I.Z.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
                        }), this.renderButton(I.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
                    })
                };
                i.renderAppOpened = function() {
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.APP_OPENED_TITLE
                        }), (0, r.jsx)(E.DK, {
                            children: I.Z.Messages.APP_OPENED_BODY
                        }), this.renderButton(I.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
                    })
                };
                i.renderAuthenticatedOrDownload = function() {
                    var e = this.props.guildTemplate;
                    de()(null != e, "guild template must not be null");
                    return e.state === gr.Rj.RESOLVING ? (0, r.jsx)(E.ZP, {
                        className: Ir().authBox,
                        children: (0, r.jsx)(hr.Z, {
                            guildTemplate: e
                        })
                    }) : (0, r.jsx)(Rr, {
                        guildTemplate: e
                    })
                };
                i.renderContinue = function() {
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Dx, {
                            children: I.Z.Messages.APP_NOT_OPENED
                        }), this.renderButton(I.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
                    })
                };
                i.render = function() {
                    var e = this.props,
                        t = e.guildTemplate,
                        n = e.nativeAppState,
                        o = e.authenticated,
                        i = e.transitionTo,
                        a = e.location;
                    if (null == t) return this.renderSpinner(I.Z.Messages.LOADING);
                    if (n === O.kEZ.OPEN) return this.renderAppOpened();
                    if (n === O.kEZ.OPENING) return this.renderSpinner(I.Z.Messages.APP_OPENING);
                    switch (t.state) {
                        case gr.Rj.RESOLVING:
                            return this.renderSpinner(I.Z.Messages.APP_OPENING);
                        case gr.Rj.RESOLVED:
                            return o || !_r.KO ? this.renderAuthenticatedOrDownload() : this.props.login ? (0, r.jsx)(Xn.ZP, {
                                guildTemplate: t,
                                transitionTo: i,
                                location: a
                            }) : (0, r.jsx)(Jn.Z, {
                                guildTemplate: t,
                                transitionTo: i,
                                location: a,
                                onRegister: function() {
                                    (0, vr.c)(br.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE);
                                    yr.Z.flowStart(Er.MK.ORGANIC_GUILD_TEMPLATES, Er.EW.NUF_STARTED)
                                }
                            });
                        case gr.Rj.EXPIRED:
                            return this.renderInvalidGuildTemplate();
                        default:
                            return null
                    }
                };
                return o
            }(o.PureComponent);

            function Rr(e) {
                var t = e.guildTemplate,
                    n = (0, dr.Z)(t, !1),
                    o = n.form,
                    i = n.handleSubmit;
                yr.Z.flowStep(Er.MK.ORGANIC_GUILD_TEMPLATES, Er.X2.GUILD_CREATE);
                var a = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(E.Dx, {
                        className: Ir().header,
                        children: I.Z.Messages.GUILD_TEMPLATE_SETUP_DISCORD
                    }), o, (0, r.jsx)(E.zx, {
                        className: Ir().createButton,
                        onClick: i,
                        children: I.Z.Messages.GUILD_TEMPLATE_CREATE_DISCORD
                    })]
                });
                return (0, r.jsx)(mr.Z, {
                    className: Ir().authBox,
                    children: function() {
                        return [(0, r.jsx)(pr.Z, {
                            guildTemplate: t
                        }, "template"), (0, r.jsx)("div", {
                            className: Ir().formContainer,
                            children: a
                        }, "contents")]
                    }
                })
            }
            u.ZP.initialize();

            function wr(e, t, n) {
                e.preventDefault();
                be.default.track(O.rMx.GUILD_TEMPLATE_APP_OPENED, {
                    guild_template_code: t,
                    guild_template_name: n.name,
                    guild_template_description: n.description,
                    guild_template_guild_id: n.sourceGuildId
                });
                var r = ge.default.getFingerprint(),
                    o = null != r ? r : ge.default.getId();
                J.Z.openMobileApp(n.state === gr.Rj.RESOLVED ? t : void 0, o)
            }

            function Zr(e) {
                var t = e.code,
                    n = (0, u.e7)([X.Z], (function() {
                        return X.Z.getGuildTemplate(t)
                    }));
                o.useEffect((function() {
                    (0, m.e)("guild_template_mobile")
                }), []);
                return null == n || n.state === gr.Rj.RESOLVING ? (0, r.jsx)(E.ZP, {
                    children: (0, r.jsx)(je.Spinner, {})
                }) : n.state === gr.Rj.RESOLVED ? (0, r.jsxs)(E.ZP, {
                    children: [(0, r.jsx)(hr.Z, {
                        guildTemplate: n,
                        tall: !0
                    }), (0, r.jsx)(E.zx, {
                        onClick: function(e) {
                            return wr(e, t, n)
                        },
                        className: N().marginTop20,
                        children: I.Z.Messages.GUILD_TEMPLATE_OPEN
                    })]
                }) : (0, r.jsx)(Ze, {
                    text: I.Z.Messages.GUILD_TEMPLATE_MOBILE_INVALID_ERROR,
                    buttonCta: I.Z.Messages.GUILD_TEMPLATE_MOBILE_INVALID_CTA,
                    onClick: function(e) {
                        return wr(e, t, n)
                    }
                })
            }
            var Lr = n(816810),
                Dr = n(256183),
                Mr = n(347365),
                Ur = n(553484),
                kr = n(14515),
                Gr = n(607739),
                Br = n(705214),
                Fr = n(661123),
                Vr = n(308921),
                Hr = n(308739),
                zr = n(199790);

            function Yr(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function Kr(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            Yr(i, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            Yr(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Wr(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function qr(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Xr(e) {
                Xr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Xr(e)
            }

            function Jr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        qr(e, t, n[t])
                    }))
                }
                return e
            }

            function $r(e, t) {
                return !t || "object" !== eo(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Qr(e, t) {
                Qr = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Qr(e, t)
            }
            var eo = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function to(e) {
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
                    var n, r = Xr(e);
                    if (t) {
                        var o = Xr(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return $r(this, n)
                }
            }
            var no = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
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
                        }([i, s])
                    }
                }
            };
            u.ZP.initialize();
            var ro = "Accept Invite Page",
                oo = "register",
                io = "login";

            function ao() {
                return (ao = Kr((function(e) {
                    var t;
                    return no(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, d.Z.resolveInvite(e, ro)];
                            case 1:
                                if (null == (t = n.sent().invite)) return [2];
                                v(t);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var so = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Qr(e, t)
                }(o, e);
                var t = to(o);

                function o() {
                    Wr(this, o);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        error: null
                    };
                    e.getAcceptInviteContext = function(t) {
                        return d.Z.getInviteContext(t, e.props.invite)
                    };
                    e.handleContinue = function(t) {
                        var n = e.props,
                            r = n.invite,
                            o = n.transitionTo;
                        if (null != r.channel || null != (null == t ? void 0 : t.channel)) {
                            var i;
                            null != (null === (i = r.guild) || void 0 === i ? void 0 : i.id) ? o(O.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(r.code)) : d.Z.transitionToInvite(null != t ? t : r, o)
                        }
                    };
                    e.handleAccept = function() {
                        e.setState({
                            error: null
                        });
                        var t = e.getInviteKey();
                        d.Z.acceptInvite({
                            inviteKey: t,
                            context: e.getAcceptInviteContext(ro),
                            skipOnboarding: !0,
                            callback: function(e) {
                                v(e);
                                null != e.channel && d.Z.openApp(t, e.channel.id)
                            }
                        }).catch((function(t) {
                            if (t instanceof Mr.yZ || t instanceof Mr.Hx) {
                                var n = (0, Vr.O)(t.code);
                                e.setState({
                                    error: {
                                        code: t.code,
                                        message: n
                                    }
                                })
                            } else e.setState({
                                error: {
                                    code: t.code,
                                    message: I.Z.Messages.INVITE_MODAL_ERROR_DEFAULT
                                }
                            })
                        }))
                    };
                    e.handleDefaultTransition = function() {
                        var t = e.props,
                            n = t.defaultRoute;
                        (0, t.transitionTo)(n)
                    };
                    e.renderButton = function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.handleDefaultTransition,
                            o = e.props.invite,
                            i = null != o.stage_instance || null != o.guild_scheduled_event;
                        return _r.KO ? (0, r.jsx)(E.zx, {
                            className: i ? N().marginTop20 : N().marginTop40,
                            onClick: n,
                            color: i ? E.zx.Colors.GREEN : E.zx.Colors.BRAND,
                            children: t
                        }) : (0, r.jsx)(E.v6, {
                            className: N().marginTop40
                        })
                    };
                    return e
                }
                var i = o.prototype;
                i.componentDidMount = function() {
                    var e = this.props,
                        t = e.isUnderage,
                        n = e.login,
                        r = e.inviteKey;
                    be.default.track(O.rMx.INVITE_VIEWED, {
                        invite_code: r
                    }, {
                        flush: !0
                    });
                    (0, m.e)("invite");
                    if (!_r.KO) {
                        var o = this.getInviteKey();
                        Ee.Z.launch("discord://" + O.Z5c.INVITE(o), (function() {}))
                    }
                    if (!n && t) {
                        var i = this.getInviteKey(),
                            a = (0, Se.fU)(i).baseCode;
                        (0, Q.dL)(O.Z5c.INVITE_LOGIN(a))
                    }
                };
                i.componentDidUpdate = function(e) {
                    var t = this.props,
                        n = t.invite,
                        r = t.nativeAppState,
                        o = t.authenticated,
                        i = t.transitionTo,
                        a = this.getInviteKey();
                    if (a !== this.getInviteKey(e)) ! function(e) {
                        ao.apply(this, arguments)
                    }(a);
                    else if (n.state === O.r2o.APP_NOT_OPENED) this.handleContinue();
                    else if (this.getMode() === io && o !== e.authenticated && o) {
                        var s = ge.default.getFingerprint();
                        if (null != s) {
                            var u = (0, me.s)(s);
                            this.track(O.rMx.INVITE_LOGIN_SUCCESSFUL, !0, {
                                prev_user_id: u
                            })
                        }
                        d.Z.acceptInvite({
                            inviteKey: a,
                            context: this.getAcceptInviteContext(ro),
                            skipOnboarding: !0,
                            callback: this.handleContinue
                        })
                    }
                    r !== e.nativeAppState && r === O.kEZ.OPEN && this.track(O.rMx.INVITE_APP_INVOKED, !1);
                    if (this.getMode() === oo && o && !e.authenticated) {
                        if (null != n.channel) {
                            (0, vr.c)(br.M5.INVITE_UNCLAIMED);
                            null != n.guild ? i(O.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(n.code)) : d.Z.transitionToInvite(n, i)
                        }
                    }
                };
                i.getInviteKey = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    return e.inviteKey
                };
                i.getMode = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    return zr.a ? oo : e.login ? io : oo
                };
                i.track = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        r = this.props.invite,
                        o = this.getInviteKey(),
                        i = (0, Se.jX)(o),
                        a = t ? {
                            guild_id: null != r.guild ? r.guild.id : null,
                            channel_id: null != r.channel ? r.channel.id : null,
                            inviter_id: null != r.inviter ? r.inviter.id : null,
                            invite_code: i
                        } : {
                            invite_code: i
                        };
                    be.default.track(e, Jr({}, a, n))
                };
                i.renderSpinner = function(e) {
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Dx, {
                            children: e
                        }), (0, r.jsx)(E.Hh, {})]
                    })
                };
                i.renderInvalidInvite = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Ee, {
                            src: n(211086),
                            className: N().marginBottom8
                        }), (0, r.jsx)(E.Dx, {
                            className: L()(N().marginTop8, N().marginBottom8),
                            children: I.Z.Messages.AUTH_INVALID_INVITE_TITLE
                        }), (0, r.jsx)(E.DK, {
                            children: e ? I.Z.Messages.AUTH_BANNED_INVITE_BODY : I.Z.Messages.AUTH_INVALID_INVITE_BODY
                        }), this.renderButton(I.Z.Messages.CONTINUE_TO_WEBAPP), (0, r.jsx)(E.zx, {
                            onClick: function() {
                                return window.open(Wn.Z.getArticleURL(O.BhN.INVALID_INVITES), "_blank")
                            },
                            look: E.zx.Looks.LINK,
                            color: E.zx.Colors.LINK,
                            className: N().marginTop8,
                            children: I.Z.Messages.AUTH_INVALID_INVITE_TIP
                        })]
                    })
                };
                i.renderErrorInvite = function() {
                    var e, t;
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(Hr.Z, {
                            invite: this.props.invite,
                            error: null === (e = this.state.error) || void 0 === e ? void 0 : e.message
                        }), (null === (t = this.state.error) || void 0 === t ? void 0 : t.code) === O.evJ.INVALID_CANNOT_FRIEND_SELF ? this.renderButton(I.Z.Messages.CONTINUE_TO_WEBAPP) : this.renderButton(I.Z.Messages.INSTANT_INVITE_ACCEPT, this.handleAccept)]
                    })
                };
                i.renderExpiredInvite = function() {
                    return this.renderInvalidInvite(!1)
                };
                i.renderBannedInvite = function() {
                    return this.renderInvalidInvite(!0)
                };
                i.renderAppOpened = function(e) {
                    var t = null != e ? e : this.handleContinue;
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.APP_OPENED_TITLE
                        }), (0, r.jsx)(E.DK, {
                            children: I.Z.Messages.APP_OPENED_BODY
                        }), this.renderButton(I.Z.Messages.CONTINUE_TO_WEBAPP, (function() {
                            return t()
                        }))]
                    })
                };
                i.renderAuthenticatedHeader = function() {
                    var e = this.props.invite;
                    return null != e.stage_instance && null != e.guild ? (0, r.jsx)(Gr.Z, {
                        stageInstance: e.stage_instance,
                        guild: e.guild
                    }) : null != e.guild_scheduled_event ? (0, r.jsx)(kr.r, {
                        channel: e.channel,
                        guildScheduledEvent: e.guild_scheduled_event
                    }) : (0, r.jsx)(Hr.Z, {
                        invite: e
                    })
                };
                i.renderAuthenicatedFooter = function() {
                    var e = this.props.invite;
                    return null == e.stage_instance && null == e.guild_scheduled_event || null == e.guild ? null : (0, r.jsx)(E.ZP, {
                        className: N().marginTop20,
                        children: (0, r.jsx)(Gr.y, {
                            guild: e.guild,
                            onlineCount: e.approximate_presence_count
                        })
                    })
                };
                i.renderAuthenticatedOrDownload = function() {
                    var e = null != this.props.invite.stage_instance ? I.Z.Messages.INSTANT_INVITE_ACCEPT_STAGE : I.Z.Messages.INSTANT_INVITE_ACCEPT;
                    return (0, r.jsxs)("div", {
                        children: [(0, r.jsxs)(E.ZP, {
                            children: [this.renderAuthenticatedHeader(), this.renderButton(e, this.handleAccept)]
                        }), this.renderAuthenicatedFooter()]
                    })
                };
                i.renderContinue = function() {
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Dx, {
                            children: I.Z.Messages.APP_NOT_OPENED
                        }), this.renderButton(I.Z.Messages.CONTINUE_TO_WEBAPP)]
                    })
                };
                i.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.invite,
                        o = t.nativeAppState,
                        i = t.authenticated,
                        a = t.transitionTo,
                        s = t.location;
                    if (o === O.kEZ.OPEN) return this.renderAppOpened();
                    switch (n.state) {
                        case O.r2o.APP_OPENED:
                            return this.renderAppOpened();
                        case O.r2o.APP_NOT_OPENED:
                            return this.renderContinue();
                        case O.r2o.RESOLVING:
                            return zr.a ? this.renderSpinner(I.Z.Messages.DEFAULT_INPUT_PLACEHOLDER) : this.renderSpinner(I.Z.Messages.APP_OPENING);
                        case O.r2o.APP_OPENING:
                            return this.renderSpinner(I.Z.Messages.APP_OPENING);
                        case O.r2o.RESOLVED:
                            var u;
                            if (i && (0, Fr.yE)(null !== (u = n.flags) && void 0 !== u ? u : 0, Lr.$.IS_GUEST_INVITE)) {
                                d.Z.openApp(n.code);
                                Dr.Z.set(Br.J, n.code);
                                return this.renderAppOpened((function() {
                                    return a(O.Z5c.APP)
                                }))
                            }
                            return i || !_r.KO ? this.renderAuthenticatedOrDownload() : this.getMode() === io ? (0, r.jsx)(Xn.ZP, {
                                invite: n,
                                transitionTo: a,
                                location: s
                            }) : (0, r.jsx)(Jn.Z, {
                                invite: n,
                                onLoginStart: function() {
                                    return e.track(O.rMx.INVITE_LOGIN, !0)
                                },
                                location: s,
                                transitionTo: a
                            });
                        case O.r2o.ACCEPTING:
                            return this.renderSpinner(I.Z.Messages.INSTANT_INVITE_ACCEPTING);
                        case O.r2o.EXPIRED:
                            return this.renderExpiredInvite();
                        case O.r2o.BANNED:
                            return this.renderBannedInvite();
                        case O.r2o.ERROR:
                            return this.renderErrorInvite();
                        case O.r2o.ACCEPTED:
                        default:
                            return null
                    }
                };
                return o
            }(o.PureComponent);
            const uo = u.ZP.connectStores([Ke.Z, b.Z, ge.default, Hn, Ur.Z], (function(e) {
                var t, n = e.inviteKey;
                return {
                    invite: null !== (t = Ke.Z.getInvite(n)) && void 0 !== t ? t : {},
                    nativeAppState: Hn.getState(n),
                    authenticated: ge.default.isAuthenticated(),
                    defaultRoute: b.Z.defaultRoute,
                    isUnderage: Ur.Z.isUnderageAnonymous()
                }
            }))(so);
            var co = n(793436);

            function lo(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            var fo = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
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
                        }([i, s])
                    }
                }
            };
            const po = function(e) {
                var t, n, o = e.match,
                    i = e.location,
                    a = (n = (t = function(e, t) {
                        return fo(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, (0, pn.s)(O.jEp.PICK_GUILD_SETTINGS, {
                                        section: e.params.section,
                                        subsection: e.params.subsection,
                                        search: t.search
                                    })];
                                case 1:
                                    n.sent();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = t.apply(e, n);

                            function a(e) {
                                lo(i, r, o, a, s, "next", e)
                            }

                            function s(e) {
                                lo(i, r, o, a, s, "throw", e)
                            }
                            a(void 0)
                        }))
                    }), function(e, t) {
                        return n.apply(this, arguments)
                    });
                return (0, r.jsx)(_n, {
                    match: o,
                    location: i,
                    attemptDeepLink: a
                })
            };
            var ho = n(144936),
                vo = n(354368),
                yo = (0, Ue.B)({
                    kind: "user",
                    id: "2023-09_iar_dsa_webform",
                    label: "Safety Experience Unauthenticated Report Form",
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
            var mo = n(155682),
                go = n.n(mo),
                bo = function(e) {
                    var t = e.onClick,
                        n = e.title;
                    return (0, r.jsx)("div", {
                        className: go().buttonColumn,
                        children: (0, r.jsx)(je.Button, {
                            className: N().reportButton,
                            fullWidth: !0,
                            color: je.Button.Colors.BRAND_NEW,
                            hover: je.Button.Colors.BRAND_NEW,
                            onClick: function() {
                                return t()
                            },
                            children: n
                        })
                    })
                };
            const Eo = function() {
                return function(e) {
                    return yo.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: !0
                    }).enabled
                }("URF - Landing Page") && (0, r.jsxs)(E.ZP, {
                    children: [(0, r.jsx)(E.Dx, {
                        className: N().marginBottom8,
                        children: I.Z.Messages.URF_LANDING_PAGE_TITLE
                    }), (0, r.jsx)(E.DK, {
                        className: N().marginBottom8,
                        children: I.Z.Messages.URF_LANDING_PAGE_SUBTITLE.format({
                            supportURL: Wn.Z.getArticleURL(O.BhN.COPYRIGHT_AND_IP_POLICY)
                        })
                    }), (0, r.jsxs)("div", {
                        className: go().container,
                        children: [(0, r.jsx)(bo, {
                            onClick: function() {
                                return (0, vo.eE)()
                            },
                            title: I.Z.Messages.URF_LANDING_PAGE_REPORT_MESSAGE_BUTTON
                        }), (0, r.jsx)(bo, {
                            onClick: function() {
                                return (0, vo.JM)()
                            },
                            title: I.Z.Messages.URF_LANDING_PAGE_REPORT_USER_PROFILE_BUTTON
                        })]
                    })]
                })
            };
            var _o = n(845882),
                Oo = n(83129),
                Io = n.n(Oo);

            function To(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function No(e) {
                No = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return No(e)
            }

            function So(e, t) {
                return !t || "object" !== jo(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Ao(e, t) {
                Ao = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Ao(e, t)
            }
            var jo = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Po(e) {
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
                    var n, r = No(e);
                    if (t) {
                        var o = No(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return So(this, n)
                }
            }
            u.ZP.initialize();
            var xo = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Ao(e, t)
                }(o, e);
                var t = Po(o);

                function o() {
                    To(this, o);
                    var e;
                    (e = t.apply(this, arguments)).handleVerify = function() {
                        var t = (0, _.Z)(e.props.location);
                        null != t && l.Z.verify(t)
                    };
                    e.handleLogin = function() {
                        (0, e.props.transitionTo)(O.Z5c.LOGIN)
                    };
                    e.handleOpenApp = function() {
                        var t = e.props.verifyingUserId;
                        be.default.track(O.rMx.VERIFY_ACCOUNT_APP_OPENED, {
                            verifying_user_id: t
                        });
                        (0, _o.Z)("verify_email")
                    };
                    return e
                }
                var i = o.prototype;
                i.componentDidMount = function() {
                    this.handleVerify();
                    (0, m.e)("verify_email")
                };
                i.renderVerifyFailed = function() {
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Ee, {
                            src: n(639915),
                            className: L()(Io().image, N().marginBottom20)
                        }), (0, r.jsx)(E.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.VERFICATION_EXPIRED
                        }), (0, r.jsx)(E.DK, {
                            className: N().marginBottom40,
                            children: I.Z.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
                        }), (0, r.jsx)(E.zx, {
                            onClick: this.handleLogin,
                            children: I.Z.Messages._LOGIN
                        })]
                    })
                };
                i.renderVerifySucceeded = function() {
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Ee, {
                            src: n(143613),
                            className: L()(Io().image, N().marginBottom20)
                        }), (0, r.jsx)(E.Dx, {
                            className: N().marginBottom40,
                            children: I.Z.Messages.VERIFICATION_VERIFIED
                        }), (0, r.jsx)(E.zx, {
                            onClick: this.handleOpenApp,
                            children: I.Z.Messages.VERIFICATION_OPEN_DISCORD
                        })]
                    })
                };
                i.renderVerifying = function() {
                    return (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Ee, {
                            src: n(100539),
                            className: L()(Io().image, N().marginBottom20)
                        }), (0, r.jsx)(E.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.VERIFICATION_VERIFYING
                        }), (0, r.jsx)(E.DK, {
                            className: N().marginBottom40,
                            children: I.Z.Messages.ACTION_MAY_TAKE_A_MOMENT
                        }), (0, r.jsx)(E.zx, {
                            submitting: !0,
                            color: E.zx.Colors.PRIMARY
                        })]
                    })
                };
                i.render = function() {
                    var e = this.props,
                        t = e.verifyFailed,
                        n = e.verifySucceeded;
                    return t ? this.renderVerifyFailed() : n ? this.renderVerifySucceeded() : this.renderVerifying()
                };
                return o
            }(o.PureComponent);
            xo.defaultProps = {
                transitionTo: function(e) {
                    return n.g.location.assign(e)
                }
            };
            const Co = u.ZP.connectStores([ge.default], (function() {
                return {
                    verifyFailed: ge.default.didVerifyFail(),
                    verifyErrors: ge.default.getVerifyErrors(),
                    verifySucceeded: ge.default.didVerifySucceed(),
                    fingerprint: ge.default.getFingerprint(),
                    verifyingUserId: ge.default.getVerifyingUserId()
                }
            }))(xo);
            n(88415);

            function Ro(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function wo(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function Zo(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Lo(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Do(e) {
                Do = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Do(e)
            }

            function Mo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Lo(e, t, n[t])
                    }))
                }
                return e
            }

            function Uo(e, t) {
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

            function ko(e, t) {
                return !t || "object" !== Fo(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Go(e, t) {
                Go = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Go(e, t)
            }

            function Bo(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ro(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ro(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Fo = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Vo(e) {
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
                    var n, r = Do(e);
                    if (t) {
                        var o = Do(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ko(this, n)
                }
            }
            var Ho = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
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
                        }([i, s])
                    }
                }
            };
            u.ZP.initialize();
            var zo = (0, tn.Z)(Xn.ZP),
                Yo = (0, tn.Z)(co.Z),
                Ko = (0, tn.Z)(uo),
                Wo = (0, tn.Z)((function(e) {
                    var t = {
                        guildTemplate: (0, u.e7)([X.Z], (function() {
                            return X.Z.getGuildTemplate(e.code)
                        })),
                        nativeAppState: (0, u.e7)([Hn], (function() {
                            return Hn.getState(e.code)
                        })),
                        authenticated: (0, u.e7)([ge.default], (function() {
                            return ge.default.isAuthenticated()
                        })),
                        defaultRoute: (0, u.e7)([b.Z], (function() {
                            return b.Z.defaultRoute
                        }))
                    };
                    return (0, r.jsx)(Cr, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                Nr(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, e, t))
                })),
                qo = (0, tn.Z)(fr),
                Xo = (0, tn.Z)((function(e) {
                    var t = e.inviteKey,
                        n = e.transitionTo,
                        i = (0, u.e7)([Ke.Z], (function() {
                            return Ke.Z.getInvite(t)
                        }));
                    o.useEffect((function() {
                        (0, m.e)("invite_mobile")
                    }), []);
                    o.useEffect((function() {
                        null != i && i.state === O.r2o.RESOLVED && be.default.track(O.rMx.INVITE_VIEWED, {
                            invite_code: t,
                            friends_count: null == i ? void 0 : i.friends_count
                        }, {
                            flush: !0
                        })
                    }), [i, t]);
                    return (0, r.jsx)(Kt, {
                        invite: i,
                        onAcceptInvite: function(e) {
                            ! function(e, t, n) {
                                var r, o, i;
                                null == e || e.preventDefault();
                                be.default.track(O.rMx.INVITE_APP_OPENED, {
                                    invite_code: (0, Se.jX)(t),
                                    guild_id: null == n || null === (r = n.guild) || void 0 === r ? void 0 : r.id,
                                    channel_id: null == n || null === (o = n.channel) || void 0 === o ? void 0 : o.id,
                                    inviter_id: null == n || null === (i = n.inviter) || void 0 === i ? void 0 : i.id
                                });
                                var a = null != n && n.state !== O.r2o.EXPIRED && n.state !== O.r2o.BANNED ? t : void 0,
                                    s = ge.default.getFingerprint(),
                                    u = null != s ? s : ge.default.getId(),
                                    c = null != n && null != (null == n ? void 0 : n.type) ? Number(null == n ? void 0 : n.type) : void 0;
                                d.Z.openApp(a, void 0, u, void 0, c)
                            }(e, t, i)
                        },
                        transitionTo: n
                    })
                })),
                Jo = (0, tn.Z)(Jn.Z),
                $o = (0, tn.Z)(fn),
                Qo = (0, tn.Z)(dn),
                ei = (0, tn.Z)(Co),
                ti = (0, tn.Z)(q),
                ni = (0, tn.Z)(ho.Z),
                ri = (0, tn.Z)(wn),
                oi = (0,
                    tn.Z)(w),
                ii = (0, tn.Z)((function(e) {
                    var t = e.location,
                        i = Ne(o.useState(!1), 2),
                        a = i[0],
                        s = i[1],
                        c = (0, u.e7)([le], (function() {
                            return le.getState()
                        })),
                        l = c.verifySuccess,
                        f = c.verifyErrors,
                        d = c.redirectGuildId;
                    o.useEffect((function() {
                        var e = (0, _.Z)(t);
                        $.Z.verify(e);
                        (0, m.e)("verify_hub_email")
                    }), [t]);
                    var p = function() {
                        _e(d);
                        s(!0)
                    };
                    return a ? (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Dx, {
                            className: Ie().title,
                            children: I.Z.Messages.APP_OPENED_TITLE
                        }), (0, r.jsx)(E.DK, {
                            className: Ie().subtitle,
                            children: I.Z.Messages.APP_OPENED_BODY
                        }), (0, r.jsx)(E.zx, {
                            className: Ie().spacedButton,
                            onClick: function() {
                                return (0, Q.uL)(O.Z5c.CHANNEL(d))
                            },
                            children: I.Z.Messages.CONTINUE_TO_WEBAPP
                        })]
                    }) : l ? (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Ee, {
                            className: Ie().image,
                            src: n(143613)
                        }), (0, r.jsx)(E.Dx, {
                            className: Ie().title,
                            children: I.Z.Messages.VERIFICATION_VERIFIED
                        }), (0, r.jsx)(E.zx, {
                            onClick: p,
                            children: I.Z.Messages.VERIFICATION_OPEN_DISCORD
                        })]
                    }) : null != f ? (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Ee, {
                            className: Ie().image,
                            src: n(639915)
                        }), (0, r.jsx)(E.Dx, {
                            className: Ie().title,
                            children: I.Z.Messages.VERFICATION_EXPIRED
                        }), (0, r.jsx)(E.DK, {
                            className: Ie().subtitle,
                            children: I.Z.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
                        }), (0, r.jsx)(E.zx, {
                            onClick: p,
                            children: I.Z.Messages.VERIFICATION_OPEN_DISCORD
                        })]
                    }) : (0, r.jsxs)(E.ZP, {
                        children: [(0, r.jsx)(E.Ee, {
                            className: Ie().image,
                            src: n(100539)
                        }), (0, r.jsx)(E.Dx, {
                            className: Ie().title,
                            children: I.Z.Messages.VERIFICATION_VERIFYING
                        }), (0, r.jsx)(E.DK, {
                            className: Ie().subtitle,
                            children: I.Z.Messages.ACTION_MAY_TAKE_A_MOMENT
                        }), (0, r.jsx)(E.zx, {
                            submitting: !0,
                            color: E.zx.Colors.PRIMARY
                        })]
                    })
                })),
                ai = (0, tn.Z)(Tn),
                si = (0, tn.Z)(po),
                ui = (0, tn.Z)(Eo),
                ci = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && Go(e, t)
                    }(n, e);
                    var t = Vo(n);

                    function n() {
                        Zo(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            splash: null,
                            redirectTo: null,
                            backgroundId: null
                        };
                        return e
                    }
                    var o = n.prototype;
                    o.componentDidMount = function() {
                        var e = this.props,
                            t = e.inviteKey,
                            n = e.hasLoadedExperiments,
                            r = e.isAuthenticated;
                        if (null != t) {
                            !n && r && l.Z.getExperiments(!0);
                            be.default.track(O.rMx.INVITE_OPENED, {
                                invite_code: (0, Se.jX)(t),
                                load_time: Qt()
                            }, {
                                flush: !0
                            })
                        }(n || zr.a) && this.resolveInvite();
                        this.resolveGiftCode();
                        this.resolveGuildTemplate();
                        p.Z.initialize()
                    };
                    o.componentDidUpdate = function(e) {
                        var t, n;
                        e.hasLoadedExperiments || !this.props.hasLoadedExperiments || zr.a || this.resolveInvite();
                        (null === (t = e.invite) || void 0 === t ? void 0 : t.state) !== (null === (n = this.props.invite) || void 0 === n ? void 0 : n.state) && this.maybeFetchApplicationSplash()
                    };
                    o.componentWillUnmount = function() {
                        p.Z.terminate()
                    };
                    o.maybeFetchApplicationSplash = function() {
                        var e = this,
                            t = this.props.invite;
                        if ((null == t ? void 0 : t.state) === O.r2o.RESOLVED) {
                            var n = t.target_application;
                            null != n && (0, Xt.hR)(n.id, ["embedded_splash"]).then((function(t) {
                                var n = Bo(t, 1)[0];
                                return e.setState({
                                    backgroundId: n
                                })
                            }))
                        }
                    };
                    o.resolveInvite = function() {
                        var e = this.props.inviteKey;
                        if (null != e) {
                            var t, n, r = (n = (t = function() {
                                var t;
                                return Ho(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, d.Z.resolveInvite(e, O.Usc.INVITE)];
                                        case 1:
                                            null != (t = n.sent().invite) && v(t);
                                            return [2]
                                    }
                                }))
                            }, function() {
                                var e = this,
                                    n = arguments;
                                return new Promise((function(r, o) {
                                    var i = t.apply(e, n);

                                    function a(e) {
                                        wo(i, r, o, a, s, "next", e)
                                    }

                                    function s(e) {
                                        wo(i, r, o, a, s, "throw", e)
                                    }
                                    a(void 0)
                                }))
                            }), function() {
                                return n.apply(this, arguments)
                            });
                            r();
                            d.Z.openNativeAppModal(e)
                        }
                    };
                    o.resolveGuildTemplate = function() {
                        var e = this.props.guildTemplateCode;
                        if (null != e) {
                            be.default.track(O.rMx.GUILD_TEMPLATE_OPENED, {
                                guild_template_code: e,
                                load_time: Qt()
                            }, {
                                flush: !0
                            });
                            J.Z.resolveGuildTemplate(e);
                            J.Z.openNativeAppModal(e)
                        }
                    };
                    o.resolveGiftCode = function() {
                        var e = this.props.giftCode;
                        null != e && f.Z.resolveGiftCode(e, !0, !0).then((function(t) {
                            null != t && null == t.giftCode.promotion && c.Z.wait((function() {
                                return f.Z.openNativeGiftCodeModal(e)
                            }))
                        }))
                    };
                    o.render = function() {
                        var e = this.state,
                            t = e.splash,
                            n = e.redirectTo,
                            o = this.props.inviteKey;
                        return (0, r.jsxs)(nn.Z, {
                            splash: t,
                            children: [(0, r.jsx)(h.Z, {
                                path: O.Z5c.LOGIN_HANDOFF,
                                render: function(e) {
                                    return (0, r.jsx)(Yo, Uo(Mo({}, e), {
                                        redirectTo: n
                                    }))
                                }
                            }), (0, r.jsx)(h.Z, {
                                impressionName: a.zs.USER_LOGIN,
                                path: O.Z5c.LOGIN,
                                render: function(e) {
                                    return (0, r.jsx)(zo, Uo(Mo({}, e), {
                                        redirectTo: n
                                    }))
                                }
                            }), (0, r.jsx)(h.Z, {
                                impressionName: a.zs.USER_REGISTRATION,
                                path: O.Z5c.REGISTER,
                                render: function(e) {
                                    return zr.a ? (0, r.jsx)(Ko, Uo(Mo({}, e), {
                                        redirectTo: n,
                                        inviteKey: o
                                    })) : (0, r.jsx)(Jo, Uo(Mo({}, e), {
                                        redirectTo: n
                                    }))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.GIFT_CODE_LOGIN(":giftCode"),
                                render: function(e) {
                                    return (0, r.jsx)(qo, Mo({
                                        login: !0
                                    }, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.GIFT_CODE(":giftCode"),
                                render: function(e) {
                                    return (0, r.jsx)(qo, Mo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: [O.Z5c.INVITE_LOGIN(":inviteCode"), O.Z5c.INVITE(":inviteCode")],
                                render: function(e) {
                                    var t = e.match,
                                        n = t.params.inviteCode,
                                        o = t.path,
                                        i = e.location,
                                        a = e.transitionTo,
                                        u = (0, Se.mb)(n, i.search);
                                    return s.tq || s.Em ? (0,
                                        r.jsx)(Xo, {
                                        inviteKey: u,
                                        transitionTo: a
                                    }, u) : (0, r.jsx)(Ko, {
                                        inviteKey: u,
                                        location: i,
                                        transitionTo: a,
                                        login: o === O.Z5c.INVITE_LOGIN(":inviteCode")
                                    })
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: [O.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), O.Z5c.GUILD_TEMPLATE(":guildTemplateCode")],
                                render: function(e) {
                                    var t = e.match,
                                        n = t.params.guildTemplateCode,
                                        o = t.path,
                                        i = e.location,
                                        a = e.transitionTo;
                                    return s.tq || s.Em ? (0, r.jsx)(Zr, {
                                        code: n
                                    }, n) : (0, r.jsx)(Wo, {
                                        code: n,
                                        location: i,
                                        transitionTo: a,
                                        login: o === O.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")
                                    })
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.VERIFY,
                                render: function(e) {
                                    return (0, r.jsx)(ei, Mo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.VERIFY_HUB_EMAIL,
                                render: function(e) {
                                    return (0, r.jsx)(ii, Mo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.VERIFY_REQUEST,
                                render: function(e) {
                                    return (0, r.jsx)(ti, Mo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                                render: function(e) {
                                    return (0, r.jsx)(ri, Mo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                                render: function(e) {
                                    return (0, r.jsx)(oi, Mo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.AUTHORIZE_IP,
                                render: function(e) {
                                    return (0, r.jsx)($o, Mo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.REJECT_IP,
                                render: function(e) {
                                    return (0, r.jsx)(ni, Mo({
                                        source: O.Z5c.REJECT_IP
                                    }, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.REJECT_MFA,
                                render: function(e) {
                                    return (0, r.jsx)(ni, Mo({
                                        source: O.Z5c.REJECT_MFA
                                    }, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.AUTHORIZE_PAYMENT,
                                render: function(e) {
                                    return (0, r.jsx)(Qo, Mo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.RESET,
                                render: function(e) {
                                    return (0, r.jsx)(ni, Mo({
                                        source: O.Z5c.RESET
                                    }, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                                render: function(e) {
                                    return (0, r.jsx)(si, Mo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?"),
                                render: function(e) {
                                    return (0, r.jsx)(ai, Mo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.REPORT,
                                render: function(e) {
                                    return (0, r.jsx)(ui, Mo({}, e))
                                }
                            })]
                        })
                    };
                    n.getDerivedStateFromProps = function(e, t) {
                        var n, r = e.invite,
                            o = e.location,
                            a = t.backgroundId,
                            s = null !== (n = (0, i.parse)(o.search).redirect_to) && void 0 !== n ? n : null;
                        null != s && "" !== s && (0, en.B)(s) && !s.startsWith(O.Z5c.ME) || (s = null);
                        var u = null;
                        if (null == r) u = (0, Jt.gK)(s);
                        else if ((null == r ? void 0 : r.state) === O.r2o.RESOLVED) {
                            var c = r.guild,
                                l = r.target_application;
                            null != l ? null != a && (u = (0, Xt.xF)(l.id, a, 1024)) : null != c && "string" == typeof c.splash && (u = We.ZP.getGuildSplashURL({
                                id: c.id,
                                splash: c.splash
                            }))
                        }
                        return {
                            redirectTo: s,
                            splash: u
                        }
                    };
                    return n
                }(o.PureComponent);
            const li = u.ZP.connectStores([ge.default, Ke.Z, qt.Z, Wt.Z, X.Z], (function(e) {
                var t, n, r, o = e.match,
                    i = e.location,
                    a = null == o || null === (t = o.params) || void 0 === t ? void 0 : t.inviteCode,
                    s = zr.a ? zr.Y : void 0,
                    u = null != a ? (0, Se.mb)(a, i.search) : s,
                    c = null == o || null === (n = o.params) || void 0 === n ? void 0 : n.giftCode,
                    l = null == o || null === (r = o.params) || void 0 === r ? void 0 : r.guildTemplateCode;
                return {
                    inviteKey: u,
                    isAuthenticated: ge.default.isAuthenticated(),
                    giftCode: c,
                    guildTemplateCode: l,
                    gift: null != c ? qt.Z.get(c) : null,
                    invite: null != u ? Ke.Z.getInvite(u) : null,
                    guildTemplate: null != l ? X.Z.getGuildTemplate(l) : null,
                    hasLoadedExperiments: Wt.Z.hasLoadedExperiments
                }
            }))(ci)
        },
        928975: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => S
            });
            var r = n(785893),
                o = n(667294),
                i = n(23279),
                a = n.n(i),
                s = n(853158),
                u = n(289283),
                c = n(142643),
                l = n(304548),
                f = n(421281),
                d = n(152804),
                p = n.n(d);

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        v(e, t, n[t])
                    }))
                }
                return e
            }

            function g(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
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
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }
            var O = (0, f.Mg)(c.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
                I = 0,
                T = 1,
                N = {
                    friction: 10,
                    tension: 130
                };
            const S = function(e) {
                return function(t) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && b(e, t)
                    }(o, t);
                    var n = _(o);

                    function o() {
                        h(this, o);
                        var e;
                        (e = n.apply(this, arguments)).anim = new s.Z.Value(I);
                        e.state = {
                            shouldAnimate: !u.tq
                        };
                        e.handleResize = function() {
                            var t = window.innerWidth > O;
                            !e.state.shouldAnimate && t && e.anim.setValue(T);
                            e.setState({
                                shouldAnimate: t
                            })
                        };
                        e.handleResizeDebounced = a()(e.handleResize, 60);
                        return e
                    }
                    var i = o.prototype;
                    i.componentDidMount = function() {
                        if (!u.tq) {
                            window.addEventListener("resize", this.handleResizeDebounced);
                            this.handleResize()
                        }
                    };
                    i.componentWillUnmount = function() {
                        clearTimeout(this.timeout);
                        window.removeEventListener("resize", this.handleResizeDebounced)
                    };
                    i.componentWillAppear = function(e) {
                        this.state.shouldAnimate ? this.animateTo(T, e) : e()
                    };
                    i.componentWillEnter = function(e) {
                        var t = this;
                        if (this.state.shouldAnimate) {
                            clearTimeout(this.timeout);
                            this.timeout = setTimeout((function() {
                                return t.animateTo(T, e)
                            }), 40)
                        } else e()
                    };
                    i.componentWillLeave = function(e) {
                        this.state.shouldAnimate ? this.animateTo(I, e) : e()
                    };
                    i.animateTo = function(e, t) {
                        s.Z.spring(this.anim, m({
                            toValue: e
                        }, N)).start(t)
                    };
                    i.getAnimatedStyle = function(e) {
                        return this.state.shouldAnimate ? {
                            opacity: this.anim,
                            transform: e ? void 0 : [{
                                scale: this.anim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1.05, 1]
                                })
                            }, {
                                translateY: this.anim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["-70px", "0px"]
                                })
                            }, {
                                translateZ: 0
                            }]
                        } : null
                    };
                    i.render = function() {
                        var t = this;
                        return (0, r.jsx)("div", {
                            className: p().wrapper,
                            children: (0, r.jsx)(l.AccessibilityPreferencesContext.Consumer, {
                                children: function(n) {
                                    var o = n.reducedMotion;
                                    return (0, r.jsx)(s.Z.div, {
                                        style: t.getAnimatedStyle(o.enabled),
                                        children: (0, r.jsx)(e, m({}, t.props))
                                    })
                                }
                            })
                        })
                    };
                    return o
                }(o.Component)
            }
        },
        734589: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => k
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                s = n(289283),
                u = n(304548),
                c = n(751615),
                l = n(443660);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        d(e, t, n[t])
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

            function y(e, t) {
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

            function m(e, t) {
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e, t) {
                g = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return g(e, t)
            }
            var b = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
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
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }
            var _ = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && g(e, t)
                }(n, e);
                var t = E(n);

                function n() {
                    f(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.render = function() {
                    var e = this.props,
                        t = e.children,
                        n = e.location,
                        i = e.history,
                        a = e.staticContext,
                        s = (e.match, y(e, ["children", "location", "history", "staticContext", "match"])),
                        u = null,
                        f = null;
                    o.Children.forEach(t, (function(e) {
                        if (null == u && o.isValidElement(e)) {
                            var t = e.props,
                                r = t.component,
                                s = t.render,
                                l = y(t, ["component", "render"]),
                                d = l.path || l.from;
                            if (null == (u = null != d ? (0, c.LX)(n.pathname, v(h({}, l), {
                                    path: d
                                })) : null)) return;
                            l = v(h({}, l), {
                                key: d,
                                location: n,
                                match: u,
                                history: i,
                                staticContext: a
                            });
                            null != r ? f = o.createElement(r, l) : null != s && (f = s(l))
                        }
                    }));
                    return (0, r.jsx)(l.Z, v(h({}, s), {
                        children: f
                    }))
                };
                return n
            }(o.Component);
            const O = (0, c.EN)(_);
            var I = n(784426),
                T = n(515510),
                N = n(630346),
                S = n(421281),
                A = n(465704),
                j = n(2590),
                P = n(863684),
                x = n.n(P);

            function C(e) {
                C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return C(e)
            }

            function R(e, t) {
                return !t || "object" !== Z(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function w(e, t) {
                w = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return w(e, t)
            }
            var Z = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function L(e) {
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
                    var n, r = C(e);
                    if (t) {
                        var o = C(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return R(this, n)
                }
            }
            var D = (0, S.Mg)(x().responsiveWidthMobile),
                M = [j.Z5c.LOGIN, j.Z5c.LOGIN_HANDOFF, j.Z5c.REGISTER, j.Z5c.INVITE(""), j.Z5c.GIFT_CODE(""), j.Z5c.GUILD_TEMPLATE_LOGIN(""), j.Z5c.GUILD_TEMPLATE(""), j.Z5c.DISABLE_EMAIL_NOTIFICATIONS, j.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, j.Z5c.BILLING_PREMIUM_SUBSCRIBE, j.Z5c.BILLING_PAYMENT_SOURCES_CREATE, j.Z5c.BILLING_PAYMENTS, j.Z5c.BILLING_PREMIUM_SWITCH_PLAN, j.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, j.Z5c.VERIFY, j.Z5c.VERIFY_HUB_EMAIL, j.Z5c.REJECT_IP, j.Z5c.REJECT_MFA, j.Z5c.AUTHORIZE_IP, j.Z5c.AUTHORIZE_PAYMENT, j.Z5c.RESET, j.Z5c.HANDOFF, j.Z5c.REPORT];

            function U(e) {
                return M.some((function(t) {
                    return e.startsWith(t)
                }))
            }
            const k = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && w(e, t)
                }(n, e);
                var t = L(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this, e)).handleResize = function() {
                        r.setState({
                            isMobileWidth: window.innerWidth <= D
                        })
                    };
                    r.state = {
                        isMobileWidth: window.innerWidth <= D
                    };
                    return r
                }
                var i = n.prototype;
                i.componentDidMount = function() {
                    window.addEventListener("resize", this.handleResize)
                };
                i.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.handleResize)
                };
                i.mobileTransitionTo = function(e, t) {
                    if (U(e))(0, I.uL)(e, t);
                    else {
                        var n = null != t && null != t.search ? t.search : null;
                        window.location = null == n ? e : "".concat(e, "?").concat(n)
                    }
                };
                i.mobileReplaceWith = function(e) {
                    U(e) ? (0, I.dL)(e) : window.location = e
                };
                i.renderDefault = function() {
                    var e = this.props.splash,
                        t = (0, r.jsx)(O, {
                            component: o.Fragment,
                            children: o.Children.map(this.props.children, (function(e) {
                                return o.cloneElement(e, {
                                    transitionTo: I.uL,
                                    replaceWith: I.dL
                                })
                            }))
                        });
                    return (0, r.jsx)("div", {
                        className: x().characterBackground,
                        children: (0, r.jsx)(u.HeadingLevel, {
                            forceLevel: 1,
                            children: null != e ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(T.Z, {
                                    show: !0,
                                    className: a()(x().logo)
                                }), (0, r.jsx)(N.h, {
                                    splash: e,
                                    children: t
                                })]
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(A.Z, {
                                    className: x().artwork,
                                    preserveAspectRatio: "xMinYMin slice"
                                }), t]
                            })
                        })
                    })
                };
                i.renderMobile = function() {
                    var e = this;
                    return (0, r.jsx)(O, {
                        component: o.Fragment,
                        children: o.Children.map(this.props.children, (function(t) {
                            return o.cloneElement(t, {
                                transitionTo: e.mobileTransitionTo,
                                replaceWith: e.mobileReplaceWith
                            })
                        }))
                    })
                };
                i.render = function() {
                    var e = this.state.isMobileWidth,
                        t = navigator.userAgent.includes("GameLauncher");
                    return e || s.tq || s.Em || t ? this.renderMobile() : this.renderDefault()
                };
                return n
            }(o.Component)
        },
        793436: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                o = n(667294),
                i = n(517563),
                a = n(751615),
                s = n(202351),
                u = n(84441),
                c = n(561177),
                l = n(110108),
                f = n(784426),
                d = n(664625),
                p = n(682719),
                h = n(2590),
                v = n(897196);

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function m(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e) {
                var t = function(e) {
                        var t = e.handoffKey,
                            n = e.handoffToken,
                            r = e.handoffSource;
                        (0, c.Yz)({
                            handoffKey: t,
                            handoffToken: n,
                            handoffSource: r
                        });
                        S(!1)
                    },
                    n = o.useCallback((function(t) {
                        if (function(e) {
                                var t, n = (0,
                                    a.LX)(e, {
                                    path: h.Z5c.CHANNEL(":guildId", ":channelId")
                                });
                                return (null == n || null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === v.oC.ROLE_SUBSCRIPTIONS
                            }(t)) f.dL(t);
                        else {
                            var n;
                            (null !== (n = e.transitionTo) && void 0 !== n ? n : f.uL)(t)
                        }
                    }), [e.transitionTo]),
                    y = (0, s.cj)([d.default], (function() {
                        return {
                            isAuthenticated: d.default.isAuthenticated(),
                            loginStatus: d.default.getLoginStatus()
                        }
                    })),
                    E = y.isAuthenticated,
                    _ = y.loginStatus,
                    O = e.location,
                    I = e.redirectTo,
                    T = b(o.useState(E), 2),
                    N = T[0],
                    S = T[1];
                o.useEffect((function() {
                    if (null != O) {
                        var e = (0, i.parse)(O.search),
                            n = e.handoff_key,
                            r = e.handoff_token;
                        if (null != n && null != r) {
                            var o = null != I ? (0, l.L)(I) : void 0;
                            N ? u.Z.logout(null).finally((function() {
                                t({
                                    handoffKey: n,
                                    handoffToken: r,
                                    handoffSource: o
                                })
                            })) : t({
                                handoffKey: n,
                                handoffToken: r,
                                handoffSource: o
                            })
                        }
                    }
                }), []);
                return N || _ === h.u34.LOGGING_IN ? (0, r.jsx)(p.q3, {}) : (0, r.jsx)(p.ZP, g(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            m(e, t, n[t])
                        }))
                    }
                    return e
                }({}, e), {
                    transitionTo: n
                }))
            }
        },
        994653: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => qe
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                s = n(517563),
                u = n(498964),
                c = n(571657),
                l = n(202351),
                f = n(513328),
                d = n(304548),
                p = n(84441),
                h = n(553484),
                v = n(784426),
                y = n(558820),
                m = n(348592),
                g = n(2590),
                b = n(473708),
                E = n(478602),
                _ = n.n(E),
                O = function() {
                    return (0, v.uL)(g.Z5c.LOGIN)
                };
            const I = function(e) {
                var t = e.authBoxClassName,
                    o = e.underageMessage;
                return (0, r.jsxs)(y.ZP, {
                    className: t,
                    children: [(0, r.jsx)("img", {
                        alt: "",
                        src: n(697694),
                        className: _().img
                    }), (0, r.jsx)(y.Dx, {
                        className: _().title,
                        children: b.Z.Messages.AGE_GATE_UNDERAGE_HEADER
                    }), (0, r.jsx)(y.DK, {
                        className: _().subtitle,
                        children: b.Z.Messages.AGE_GATE_UNDERAGE_BODY.format({
                            underageMessage: null != o ? o : b.Z.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
                            helpURL: m.Z.getArticleURL(g.BhN.AGE_GATE)
                        })
                    }), (0, r.jsx)(d.Button, {
                        fullWidth: !0,
                        onClick: O,
                        children: b.Z.Messages.AGE_GATE_UNDERAGE_BACK_TO_LOGIN
                    })]
                })
            };
            var T = n(852465),
                N = n(479373),
                S = n(527005);
            const A = (0, n(260561).B)({
                kind: "user",
                id: "2022-04_registration_copy_updates",
                label: "Registration Copy Updates",
                defaultConfig: {
                    enableNewCopy: !1,
                    hasCopyAboveButton: !1,
                    hasProminentCopy: !1
                },
                treatments: [{
                    id: 1,
                    label: "Continue / Copy Above Button / High Prominence Copy",
                    config: {
                        enableNewCopy: !0,
                        hasCopyAboveButton: !0,
                        hasProminentCopy: !0
                    }
                }, {
                    id: 2,
                    label: "Continue / Copy Below Button / High Prominence Copy",
                    config: {
                        enableNewCopy: !0,
                        hasCopyAboveButton: !1,
                        hasProminentCopy: !0
                    }
                }, {
                    id: 3,
                    label: "Continue / Copy Above Button / Normal Prominence Copy",
                    config: {
                        enableNewCopy: !0,
                        hasCopyAboveButton: !0,
                        hasProminentCopy: !1
                    }
                }]
            });
            var j = n(730381),
                P = n.n(j),
                x = n(744564),
                C = n(539381),
                R = n(520322),
                w = n(664625),
                Z = n(652591),
                L = n(391438),
                D = n(799663),
                M = n(561210);

            function U(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function k(e, t) {
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

            function G(e, t) {
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

            function B(e) {
                var t = e.invite,
                    n = void 0 === t ? null : t,
                    r = e.giftCodeSKUId,
                    o = void 0 === r ? null : r;
                return F(k(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            U(e, t, n[t])
                        }))
                    }
                    return e
                }({}, G(e, ["invite", "giftCodeSKUId"])), {
                    invite: n,
                    giftCodeSKUId: o
                }))
            }

            function F(e) {
                var t = e.email,
                    n = e.phoneToken,
                    r = e.username,
                    o = e.globalName,
                    i = e.consent,
                    a = e.password,
                    s = e.guildTemplateCode,
                    u = e.birthday,
                    l = e.invite,
                    f = void 0 === l ? null : l,
                    d = e.giftCodeSKUId,
                    p = void 0 === d ? null : d,
                    h = e.multiStep,
                    v = void 0 !== h && h,
                    y = e.promoEmailConsent,
                    m = void 0 === y ? null : y,
                    b = e.usedUsernameSuggestion,
                    E = void 0 === b ? null : b;
                x.Z.dispatch({
                    type: "REGISTER",
                    birthday: v ? u : null
                });
                if (null != u) {
                    (0, D.Z)(u, g.jXE.REGISTER);
                    Z.default.track(g.rMx.AGE_GATE_ACTION, {
                        source: M.L0.REGISTER,
                        action: M.Al.AGE_GATE_SUBMITTED
                    });
                    ! function(e) {
                        var t = P()().diff(e, "years");
                        if (!(t < 13)) {
                            var n;
                            n = t >= 13 && t <= 17 ? "13-17" : t >= 18 && t <= 22 ? "18-22" : "23+";
                            Z.default.track(g.rMx.USER_AGE_SUBMITTED, {
                                age_bucket: n
                            })
                        }
                    }(u)
                }
                return L.Z.post({
                    url: g.ANM.REGISTER,
                    body: {
                        fingerprint: w.default.getFingerprint(),
                        email: t,
                        username: r,
                        global_name: o,
                        password: a,
                        invite: f,
                        consent: i,
                        phone_token: n,
                        date_of_birth: null == u ? void 0 : u.format("YYYY-MM-DD"),
                        gift_code_sku_id: p,
                        guild_template_code: s,
                        promotional_email_opt_in: null == m ? void 0 : m.checked
                    },
                    trackedActionData: {
                        event: c.a9.USER_REGISTER,
                        properties: {
                            invite_code: f,
                            used_username_suggestion: E,
                            promotional_email_opt_in: null == m ? void 0 : m.checked,
                            promotional_email_pre_checked: null == m ? void 0 : m.preChecked,
                            was_unique_username: !0
                        }
                    }
                }).then((function(e) {
                    x.Z.dispatch({
                        type: "REGISTER_SUCCESS",
                        token: e.body.token
                    });
                    Z.default.track(g.rMx.AGE_GATE_ACTION, {
                        source: M.L0.REGISTER,
                        action: M.Al.AGE_GATE_SUCCESS
                    })
                }), (function(e) {
                    var t = new C.Z(e);
                    x.Z.dispatch({
                        type: "REGISTER_FAILURE",
                        error: t
                    });
                    null != t.getFieldErrors("date_of_birth") && R.wE(M.L0.REGISTER);
                    Z.default.track(g.rMx.REGISTER_SUBMIT_ERRORED, {
                        is_unique_username_registration: !0,
                        email_error_reason: t.getFirstFieldErrorMessage("email"),
                        phone_error_reason: t.getFirstFieldErrorMessage("phone"),
                        password_error_reason: t.getFirstFieldErrorMessage("password"),
                        username_error_reason: t.getFirstFieldErrorMessage("username"),
                        global_name_error_reason: t.getFirstFieldErrorMessage("global_name"),
                        date_of_birth_error_reason: t.getFirstFieldErrorMessage("date_of_birth")
                    });
                    throw e
                }))
            }
            var V = n(107364),
                H = n(472499),
                z = n.n(H),
                Y = n(380203),
                K = n.n(Y);

            function W(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function q(e) {
                var t = e.value,
                    n = e.onChange,
                    o = e.subText,
                    i = e.muted,
                    s = e.marginTopStyle;
                return (0, r.jsx)(V.Z, {
                    className: null != s ? s : K().marginTop20,
                    align: V.Z.Align.CENTER,
                    children: (0, r.jsx)(d.Checkbox, {
                        value: t,
                        type: d.Checkbox.Types.INVERTED,
                        onChange: function(e, t) {
                            return n(t)
                        },
                        className: z().checkbox,
                        children: (0, r.jsx)(y.i_, {
                            className: a()(W({}, z().subText, !i)),
                            children: o
                        })
                    })
                })
            }
            var X = n(14515);

            function J() {
                var e = (0,
                        S.MD)(),
                    t = e.required,
                    n = e.checked;
                return t ? (0, r.jsx)(q, {
                    value: n,
                    subText: b.Z.Messages.PROMOTIONAL_EMAIL_OPT_IN_CONSENT,
                    onChange: S.ZJ,
                    marginTopStyle: K().marginTop8,
                    muted: !0
                }) : null
            }
            var $ = n(607739),
                Q = n(310126);

            function ee(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function te(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            ee(i, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            ee(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var ne = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0,
                                    o) && (i = [2 & i[0], o.value]);
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
                        }([i, s])
                    }
                }
            };

            function re(e) {
                return oe.apply(this, arguments)
            }

            function oe() {
                return (oe = te((function(e) {
                    return ne(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                t.trys.push([0, 2, , 3]);
                                return [4, Q.ZP.getSetting("USERNAME_PREFIX", "")];
                            case 1:
                                return [2, t.sent() + e];
                            case 2:
                                t.sent();
                                return [3, 3];
                            case 3:
                                return [2, e]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var ie, ae, se = n(94340),
                ue = n(281437),
                ce = n(873553),
                le = n(226613),
                fe = n(560837),
                de = n(647086),
                pe = n(355336),
                he = n(189739),
                ve = n(623236),
                ye = n(91853),
                me = n(808748),
                ge = n(686874),
                be = n(31914),
                Ee = n(536038),
                _e = n(249697),
                Oe = n(930948),
                Ie = n(421281),
                Te = n(178232),
                Ne = n(308739),
                Se = n(247246);
            ! function(e) {
                e.VIEWED = "viewed";
                e.SUBMITTED = "submitted";
                e.RESEND_CODE = "resend_code";
                e.INPUT_ERROR = "input_error";
                e.RESPONSE_ERROR = "response_error";
                e.SUCCESS = "success"
            }(ie || (ie = {}));
            ! function(e) {
                e.IDENTITY = "identity";
                e.DISPLAY_NAME = "display_name";
                e.ACCOUNT_INFORMATION = "account_information";
                e.FULL = "full";
                e.AGE_GATE = "age_gate";
                e.INVITE = "invite";
                e.SMS_VERIFY = "sms_verify"
            }(ae || (ae = {}));
            var Ae = n(199790),
                je = n(239527),
                Pe = n(705090),
                xe = n(487384),
                Ce = n.n(xe);

            function Re(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function we(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function Ze(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            we(i, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            we(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Le(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function De(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Me(e) {
                Me = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Me(e)
            }

            function Ue(e) {
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

            function ke(e, t) {
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

            function Ge(e, t) {
                return !t || "object" !== Ve(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Be(e, t) {
                Be = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Be(e, t)
            }

            function Fe(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Re(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Re(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ve = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function He(e) {
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
                    var n, r = Me(e);
                    if (t) {
                        var o = Me(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Ge(this, n)
                }
            }
            var ze = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
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
                        }([i, s])
                    }
                }
            };
            l.ZP.initialize();
            var Ye = /\.$/,
                Ke = function(e) {
                    return Array.isArray(e) ? e.map((function(e) {
                        return e.replace(Ye, "")
                    })).join(". ").trim() : e
                },
                We = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && Be(e, t)
                    }(n, e);
                    var t = He(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var i;
                        (i = t.call(this, e)).dateOfBirthRef = o.createRef();
                        i._retryTimer = new f.V7;
                        i.handleGotoLogin = function(e) {
                            var t = i.state.email,
                                n = i.props,
                                r = n.giftCode,
                                o = n.guildTemplate,
                                a = n.invite,
                                u = n.location,
                                c = n.onLoginStart,
                                l = n.redirectTo,
                                f = n.transitionTo;
                            if (n.isMobileWebInviteRegistration) null == c || c(e);
                            else {
                                var d, h = null != u ? (0, s.parse)(u.search) : {};
                                if (null != a) d = g.Z5c.INVITE_LOGIN(a.code);
                                else if (null != r) d = g.Z5c.GIFT_CODE_LOGIN(r.code);
                                else if (null != o) d = g.Z5c.GUILD_TEMPLATE_LOGIN(o.code);
                                else if (null != l) {
                                    d = g.Z5c.LOGIN;
                                    h.redirect_to = l
                                } else {
                                    d = g.Z5c.LOGIN;
                                    "" !== t && (h = {
                                        email: t
                                    })
                                }
                                p.Z.loginReset();
                                f(d, {
                                    search: (0, s.stringify)(h)
                                });
                                null == c || c(e);
                                Oe.S.dispatch(g.CkL.WAVE_EMPHASIZE)
                            }
                        };
                        i.handleSubmit = function(e) {
                            null == e || e.preventDefault();
                            var t = i.state.parsedDateOfBirth,
                                n = i.props,
                                r = n.invite;
                            null !== n.consentRequired && (null == r && null == t || i.handleRegister())
                        };
                        i.handleBirthdayChange = function(e) {
                            i.setState({
                                parsedDateOfBirth: e
                            })
                        };
                        i.renderUsernameValidation = function() {
                            var e = i.state,
                                t = e.username,
                                n = e.globalName,
                                o = e.usernameFocused,
                                a = i.props,
                                s = a.usernameSuggestion,
                                u = a.uniqueUsernameRegistrationConfig.livecheckEnabled;
                            return (0, r.jsx)(Xe, {
                                username: t,
                                suggestion: s,
                                livecheckEnabled: u,
                                globalName: n,
                                isUsernameFocused: o,
                                onClickSuggestion: function() {
                                    null != i.usernameRef && i.usernameRef.focus();
                                    null != s && s.length > 0 && i.setState({
                                        username: s
                                    })
                                }
                            })
                        };
                        var a, u = null != e.location ? (0, s.parse)(e.location.search) : {};
                        i.state = {
                            email: null !== (a = u.email) && void 0 !== a ? a : "",
                            username: "",
                            globalName: "",
                            password: "",
                            parsedDateOfBirth: null,
                            consent: !e.consentRequired,
                            consentRequiredProp: e.consentRequired,
                            isRateLimited: !1,
                            globalNameFocused: !1,
                            usernameFocused: !1
                        };
                        return i
                    }
                    var i = n.prototype;
                    i.hasConsent = function() {
                        var e = this.props.consentRequired,
                            t = this.state.consent;
                        return null != e && t
                    };
                    i.componentDidMount = function() {
                        this.redirectIfAuthenticated();
                        A.trackExposure({
                            location: "0ba758_1"
                        });
                        var e = this.props,
                            t = e.giftCodeSKU,
                            n = e.invite;
                        Z.default.track(g.rMx.REGISTER_VIEWED, Ue({
                            location: null != n ? "Invite Register Page" : "Non-Invite Register Page",
                            registration_source: this.registrationSource
                        }, null != t ? (0, se.Z)(t, !1, !1) : {}), {
                            flush: !0
                        });
                        null == this.props.consentRequired && p.Z.getLocationMetadata();
                        (0, ge.e)("register")
                    };
                    i.componentWillUnmount = function() {
                        this._retryTimer.stop()
                    };
                    i.componentDidUpdate = function(e, t) {
                        var n = this,
                            r = this.props,
                            o = r.apiErrors,
                            i = r.authenticated,
                            a = r.isUnderage,
                            s = r.invite,
                            u = r.onChangeStep,
                            c = this.state.parsedDateOfBirth;
                        if (e.apiErrors !== o || t.parsedDateOfBirth !== c)
                            if (this.hasError("email") || this.hasError("phone")) null != this.emailRef && this.emailRef.focus();
                            else if (this.hasError("username")) null != this.usernameRef && this.usernameRef.focus();
                        else if (this.hasError("global_name")) null != this.globalNameRef && this.globalNameRef.focus();
                        else if (this.hasError("password")) null != this.passwordRef && this.passwordRef.focus();
                        else if (null == this.state.parsedDateOfBirth) null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus();
                        else if (this.hasError("retry_after") && "number" == typeof this.props.apiErrors.retry_after) {
                            this.setState({
                                isRateLimited: !0
                            });
                            this._retryTimer.start(1e3 * this.props.apiErrors.retry_after, (function() {
                                n.setState({
                                    isRateLimited: !1
                                })
                            }))
                        }
                        if (i && !e.authenticated) {
                            (0, le.c)(je.M5.ORGANIC_REGISTERED);
                            this.redirectIfAuthenticated()
                        }
                        var l = ae.FULL;
                        a || this.hasError("date_of_birth") ? l = ae.AGE_GATE : null == s || null == s.guild && null == s.channel || (l = ae.INVITE);
                        u(l)
                    };
                    i.redirectIfAuthenticated = function() {
                        var e = this.props,
                            t = e.authenticated,
                            n = e.transitionTo,
                            r = e.redirectTo;
                        t && n(null != r ? r : Ee.Z.defaultRoute)
                    };
                    i.handleRegister = function() {
                        var e = this;
                        return Ze((function() {
                            var t, n, r, o, i, a, s, u, c, l, f, d, p, h, v, y, m, b, E, _;
                            return ze(this, (function(O) {
                                switch (O.label) {
                                    case 0:
                                        t = e.state, n = t.email, r = t.username, o = t.globalName, i = t.password, a = t.consent, s = t.parsedDateOfBirth;
                                        u = e.props, c = u.invite, l = u.guildTemplate, f = u.giftCode, d = u.onRegister, p = u.usernameSuggestion, h = u.isMobileWebInviteRegistration;
                                        v = null != c ? c.code : null;
                                        y = null != f ? f.skuId : null;
                                        m = S.MD.getState();
                                        b = (0, Ie.Ew)(p) ? null : r === p;
                                        return Ae.a ? [4, re(r)] : [3, 2];
                                    case 1:
                                        _ = O.sent();
                                        return [3, 3];
                                    case 2:
                                        _ = r;
                                        O.label = 3;
                                    case 3:
                                        E = _;
                                        Oe.S.dispatch(g.CkL.WAVE_EMPHASIZE);
                                        O.label = 4;
                                    case 4:
                                        O.trys.push([4, 9, , 10]);
                                        return h || null == c ? [3, 6] : [4, B({
                                            consent: a,
                                            invite: v,
                                            giftCodeSKUId: y,
                                            usedUsernameSuggestion: b,
                                            globalName: o
                                        })];
                                    case 5:
                                        O.sent();
                                        return [3, 8];
                                    case 6:
                                        return [4, F({
                                            email: n,
                                            username: E,
                                            globalName: o,
                                            consent: a,
                                            password: i,
                                            invite: v,
                                            usedUsernameSuggestion: b,
                                            guildTemplateCode: null == l ? void 0 : l.code,
                                            giftCodeSKUId: y,
                                            birthday: s,
                                            promoEmailConsent: m.required ? m : null
                                        })];
                                    case 7:
                                        O.sent();
                                        O.label = 8;
                                    case 8:
                                        null == d || d();
                                        return [3, 10];
                                    case 9:
                                        O.sent();
                                        return [3, 10];
                                    case 10:
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    i.hasError = function(e) {
                        return null != this.props.apiErrors[e]
                    };
                    i.renderConsentComponents = function() {
                        var e = this,
                            t = this.state.consent,
                            n = this.props,
                            o = n.consentRequired,
                            i = n.registrationCopyExperimentConfig,
                            a = i.enableNewCopy,
                            s = i.hasProminentCopy,
                            u = null,
                            c = null;
                        o ? c = (0, r.jsx)(q, {
                            value: t,
                            onChange: function(t) {
                                return e.setState({
                                    consent: t
                                })
                            },
                            subText: b.Z.Messages.TERMS_PRIVACY_OPT_IN.format({
                                termsURL: g.EYA.TERMS,
                                privacyURL: g.EYA.PRIVACY
                            })
                        }) : u = (0, r.jsx)(y.i_, {
                            isProminent: !!s,
                            className: K().marginTop8,
                            children: a ? b.Z.Messages.TERMS_PRIVACY_ON_REGISTER.format({
                                buttonText: b.Z.Messages.CONTINUE,
                                termsURL: g.EYA.TERMS,
                                privacyURL: g.EYA.PRIVACY
                            }) : b.Z.Messages.TERMS_PRIVACY.format({
                                termsURL: g.EYA.TERMS,
                                privacyURL: g.EYA.PRIVACY
                            })
                        });
                        return {
                            subText: u,
                            consentText: c
                        }
                    };
                    i.renderInviteResolving = function() {
                        var e = this,
                            t = this.props.authBoxClassName,
                            n = function(t) {
                                e.setState({
                                    globalName: t
                                })
                            },
                            o = this.state.globalName;
                        return (0, r.jsxs)(y.ZP, {
                            className: t,
                            children: [(0, r.jsx)(Ne.R, {}), (0, r.jsxs)(y.gO, {
                                className: K().marginTop40,
                                children: [(0, r.jsx)(d.FormTitle, {
                                    children: b.Z.Messages.FORM_LABEL_USERNAME
                                }), (0, r.jsx)(d.Tooltip, {
                                    text: b.Z.Messages.AUTH_USERNAME_TOOLTIP,
                                    position: "right",
                                    color: d.Tooltip.Colors.BRAND,
                                    children: function(e) {
                                        var t = e.onMouseEnter,
                                            i = e.onMouseLeave;
                                        return (0, r.jsx)(y.II, {
                                            autoFocus: !0,
                                            className: K().marginBottom8,
                                            name: "username",
                                            value: o,
                                            placeholder: b.Z.Messages.FORM_PLACEHOLDER_USERNAME,
                                            onChange: n,
                                            onMouseEnter: t,
                                            onMouseLeave: i
                                        })
                                    }
                                }), (0, r.jsx)(y.zx, {
                                    className: K().marginTop20,
                                    disabled: !0,
                                    children: b.Z.Messages.CONTINUE
                                }), (0, r.jsx)(y.i_, {
                                    disabled: !0,
                                    className: K().marginTop8,
                                    children: b.Z.Messages.TERMS_PRIVACY.format({
                                        termsURL: g.EYA.TERMS,
                                        privacyURL: g.EYA.PRIVACY
                                    })
                                }), Ae.a ? null : (0, r.jsx)(y.zx, {
                                    look: y.zx.Looks.LINK,
                                    color: y.zx.Colors.LINK,
                                    disabled: !0,
                                    className: K().marginTop20,
                                    children: b.Z.Messages.ALREADY_HAVE_ACCOUNT
                                })]
                            })]
                        })
                    };
                    i.renderInviteHeader = function() {
                        var e = this.props.invite;
                        return null != (null == e ? void 0 : e.stage_instance) && null != e.guild ? (0, r.jsx)($.Z, {
                            stageInstance: e.stage_instance,
                            guild: e.guild
                        }) : null != (null == e ? void 0 : e.guild_scheduled_event) ? (0, r.jsx)(X.r, {
                            channel: e.channel,
                            guildScheduledEvent: e.guild_scheduled_event
                        }) : (0, r.jsx)(Ne.Z, {
                            invite: e
                        })
                    };
                    i.renderInviteButton = function() {
                        var e = this,
                            t = this.props,
                            n = t.invite,
                            o = t.registering,
                            i = t.consentRequired,
                            a = this.state.consent,
                            s = y.zx.Colors.BRAND,
                            u = b.Z.Messages.CONTINUE;
                        if (null != (null == n ? void 0 : n.stage_instance)) {
                            s = y.zx.Colors.GREEN;
                            u = b.Z.Messages.INSTANT_INVITE_ACCEPT_STAGE
                        }
                        return (0, r.jsx)(d.Tooltip, {
                            text: !a && i ? b.Z.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                            children: function(t) {
                                return (0, r.jsx)("div", ke(Ue({
                                    className: K().marginTop20
                                }, t), {
                                    children: (0,
                                        r.jsx)(y.zx, {
                                        type: "submit",
                                        submitting: o,
                                        disabled: !e.hasConsent(),
                                        color: s,
                                        children: u
                                    })
                                }))
                            }
                        })
                    };
                    i.renderInvite = function() {
                        var e = this,
                            t = this.props,
                            n = t.invite,
                            o = t.authBoxClassName,
                            i = t.apiErrors,
                            a = i.username,
                            s = i.global_name,
                            u = this.renderConsentComponents(),
                            c = u.subText,
                            l = u.consentText,
                            f = null != (null == n ? void 0 : n.stage_instance) || null != (null == n ? void 0 : n.guild_scheduled_event),
                            p = function(t) {
                                e.setState({
                                    globalName: t
                                })
                            },
                            h = this.state.globalName;
                        return (0, r.jsxs)("div", {
                            children: [(0, r.jsxs)(y.ZP, {
                                onSubmit: this.handleSubmit,
                                tag: "form",
                                className: o,
                                children: [this.renderInviteHeader(), f ? (0, r.jsx)("div", {
                                    className: Ce().divider
                                }) : null, (0, r.jsxs)(y.gO, {
                                    className: f ? void 0 : K().marginTop40,
                                    children: [(0, r.jsx)(d.FormTitle, {
                                        error: Ke(null != s ? s : a),
                                        children: b.Z.Messages.DISPLAY_NAME
                                    }), (0, r.jsx)(d.Tooltip, {
                                        text: b.Z.Messages.AUTH_USERNAME_TOOLTIP,
                                        position: "right",
                                        color: d.Tooltip.Colors.BRAND,
                                        children: function(e) {
                                            var t = e.onMouseEnter,
                                                n = e.onMouseLeave;
                                            return (0, r.jsx)(y.II, {
                                                autoFocus: !0,
                                                className: K().marginBottom8,
                                                name: "global_name",
                                                value: h,
                                                placeholder: b.Z.Messages.FORM_PLACEHOLDER_USERNAME,
                                                onChange: p,
                                                error: null != a || null != s ? "" : null,
                                                onMouseEnter: t,
                                                onMouseLeave: n
                                            })
                                        }
                                    }), (0, r.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "header-secondary",
                                        children: b.Z.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                                    }), this.renderInviteButton(), c, l, Ae.a ? null : (0, r.jsx)(y.zx, {
                                        look: y.zx.Looks.LINK,
                                        color: y.zx.Colors.LINK,
                                        onClick: this.handleGotoLogin,
                                        className: K().marginTop20,
                                        children: b.Z.Messages.ALREADY_HAVE_ACCOUNT
                                    })]
                                })]
                            }), null != n && f ? (0, r.jsx)(y.ZP, {
                                className: K().marginTop20,
                                children: (0, r.jsx)($.y, {
                                    guild: n.guild,
                                    onlineCount: n.approximate_presence_count
                                })
                            }) : null]
                        })
                    };
                    i.renderErrorMessage = function() {
                        var e = this.props.apiErrors.message;
                        return "string" != typeof e ? null : (0, r.jsx)(y.i_, {
                            className: a()(K().marginTop20, Ce().errorMessage),
                            children: e
                        })
                    };
                    i.renderFull = function(e, t) {
                        var n, i = this,
                            s = this.state,
                            u = s.email,
                            c = s.username,
                            l = s.globalName,
                            f = s.password,
                            p = s.consent,
                            h = s.parsedDateOfBirth,
                            v = s.globalNameFocused,
                            m = this.props,
                            g = m.registering,
                            E = m.consentRequired,
                            _ = m.isMobileWebInviteRegistration,
                            O = m.uniqueUsernameRegistrationConfig.suggestions,
                            I = m.authBoxClassName,
                            N = m.apiErrors,
                            S = void 0 === N ? {} : N,
                            A = S.email,
                            j = S.username,
                            P = S.global_name,
                            x = S.password,
                            C = S.date_of_birth,
                            R = m.hasLoggedInAccounts,
                            w = m.registrationCopyExperimentConfig.hasCopyAboveButton,
                            Z = this.renderConsentComponents(),
                            L = Z.subText,
                            D = Z.consentText,
                            M = this.renderErrorMessage(),
                            U = (0, r.jsx)(d.Tooltip, {
                                text: !p && E ? b.Z.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                                children: function(e) {
                                    return (0, r.jsx)("div", ke(Ue({
                                        className: K().marginTop20
                                    }, e), {
                                        children: (0, r.jsx)(y.zx, {
                                            type: "submit",
                                            submitting: g,
                                            disabled: !i.hasConsent() || i.state.isRateLimited,
                                            children: b.Z.Messages.CONTINUE
                                        })
                                    }))
                                }
                            }),
                            k = this,
                            G = (n = Ze((function() {
                                return ze(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            k.setState({
                                                usernameFocused: !0
                                            });
                                            return O && l.length > 0 && !pe.Z.wasRegistrationSuggestionFetched(l) ? [4, de.Z.fetchSuggestionsRegistration(l)] : [3, 2];
                                        case 1:
                                            e.sent();
                                            e.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                }))
                            })), function() {
                                return n.apply(this, arguments)
                            }),
                            B = null != e ? (0, r.jsx)(o.Fragment, {
                                children: e()
                            }, "custom-header") : (0, r.jsx)(y.Dx, {
                                children: b.Z.Messages.REGISTER_TITLE
                            }, "title"),
                            F = (0, r.jsxs)(y.gO, {
                                className: K().marginTop20,
                                children: [(0, r.jsx)(y.II, {
                                    autoFocus: !0,
                                    className: K().marginBottom20,
                                    label: b.Z.Messages.FORM_LABEL_EMAIL,
                                    name: "email",
                                    value: u,
                                    onChange: function(e) {
                                        return i.setState({
                                            email: e
                                        })
                                    },
                                    error: Ke(A),
                                    type: "email",
                                    setRef: function(e) {
                                        i.emailRef = e
                                    },
                                    required: !0
                                }), (0, r.jsx)(y.II, {
                                    label: b.Z.Messages.DISPLAY_NAME,
                                    className: K().marginBottom20,
                                    name: "global_name",
                                    value: l,
                                    onChange: function(e) {
                                        return i.setState({
                                            globalName: e
                                        })
                                    },
                                    error: Ke(P),
                                    maxLength: Pe.hy,
                                    setRef: function(e) {
                                        i.globalNameRef = e
                                    },
                                    onFocus: function() {
                                        return i.setState({
                                            globalNameFocused: !0
                                        })
                                    },
                                    onBlur: function() {
                                        return i.setState({
                                            globalNameFocused: !1
                                        })
                                    }
                                }), (0, r.jsx)(me.Z, {
                                    show: v,
                                    top: -12,
                                    bottom: 20,
                                    children: (0, r.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-normal",
                                        children: b.Z.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                                    })
                                }), (0, r.jsxs)("div", {
                                    onBlur: function() {
                                        return i.setState({
                                            usernameFocused: !1
                                        })
                                    },
                                    onFocus: G,
                                    tabIndex: -1,
                                    children: [(0, r.jsx)(y.II, {
                                        label: b.Z.Messages.FORM_LABEL_USERNAME,
                                        className: K().marginBottom20,
                                        name: "username",
                                        value: c,
                                        onChange: function(e) {
                                            i.setState({
                                                username: e.toLocaleLowerCase()
                                            })
                                        },
                                        error: Ke(j),
                                        setRef: function(e) {
                                            i.usernameRef = e
                                        },
                                        required: !0
                                    }), this.renderUsernameValidation()]
                                }), (0, r.jsx)(y.II, {
                                    label: b.Z.Messages.FORM_LABEL_PASSWORD,
                                    name: "password",
                                    value: f,
                                    onChange: function(e) {
                                        return i.setState({
                                            password: e
                                        })
                                    },
                                    error: Ke(x),
                                    type: "password",
                                    setRef: function(e) {
                                        i.passwordRef = e
                                    },
                                    required: !0
                                }), (0, r.jsx)(T.Z, {
                                    label: b.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
                                    wrapperClassName: K().marginTop20,
                                    name: "date_of_birth",
                                    onChange: this.handleBirthdayChange,
                                    ref: this.dateOfBirthRef,
                                    error: Ke(C),
                                    value: h,
                                    required: !0
                                }), w && L, (0, r.jsx)(J, {}), U, M, D, !w && L, Ae.a ? null : (0,
                                    r.jsx)(y.zx, {
                                    look: _ ? y.zx.Looks.FILLED : y.zx.Looks.LINK,
                                    color: _ ? y.zx.Colors.PRIMARY : y.zx.Colors.LINK,
                                    onClick: this.handleGotoLogin,
                                    className: K().marginTop20,
                                    children: b.Z.Messages.ALREADY_HAVE_ACCOUNT
                                })]
                            });
                        return t ? (0, r.jsx)(Se.Z, {
                            onSubmit: this.handleSubmit,
                            tag: "form",
                            className: a()(I, Ce().horizontalAuthBox),
                            children: function() {
                                return [B, (0, r.jsxs)("div", {
                                    className: Ce().flex,
                                    children: [(0, r.jsx)(y.Dx, {
                                        className: Ce().createAccountTemplateHeader,
                                        children: b.Z.Messages.REGISTER_TITLE
                                    }), F]
                                }, "register-title")]
                            }
                        }) : (0, r.jsxs)(y.ZP, {
                            onSubmit: this.handleSubmit,
                            tag: "form",
                            className: I,
                            children: [R && !_ ? (0, r.jsx)(y.zx, {
                                onClick: this.handleGotoLogin,
                                look: y.zx.Looks.LINK,
                                color: y.zx.Colors.PRIMARY,
                                className: Ce().goBackButton,
                                children: (0, r.jsxs)("div", {
                                    className: Ce().content,
                                    children: [(0, r.jsx)(_e.Z, {
                                        width: 16,
                                        height: 16,
                                        className: Ce().caret
                                    }), (0, r.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        children: b.Z.Messages.AGE_GATE_GO_BACK
                                    })]
                                })
                            }) : null, B, F]
                        })
                    };
                    i.render = function() {
                        var e = this.props,
                            t = e.isUnderage,
                            n = e.isMobileWebInviteRegistration;
                        if (t || this.hasError("date_of_birth")) return (0, r.jsx)(I, {});
                        var o = this.props,
                            i = o.invite,
                            a = o.giftCode,
                            s = o.guildTemplate,
                            u = null != i && null == i.guild && null == i.channel && null != i.inviter;
                        return null == i || u || n ? null != s ? this.renderFull((function() {
                            return (0, r.jsx)(ue.Z, {
                                guildTemplate: s
                            })
                        }), !0) : null != a ? this.renderFull((function() {
                            return (0, r.jsx)(Te.Z, {
                                giftCode: a
                            })
                        })) : null != i && u && i.state === g.r2o.RESOLVED && !n ? this.renderFull((function() {
                            return (0, r.jsx)(Ne.Z, {
                                invite: i,
                                isRegister: !0
                            })
                        })) : this.renderFull() : i.state === g.r2o.RESOLVING ? this.renderInviteResolving() : this.renderInvite()
                    };
                    n.getDerivedStateFromProps = function(e, t) {
                        var n = e.consentRequired;
                        return null == t.consentRequiredProp && null != n ? {
                            consent: !n,
                            consentRequiredProp: n
                        } : {
                            consentRequiredProp: n
                        }
                    };
                    ! function(e, t, n) {
                        t && Le(e.prototype, t);
                        n && Le(e, n)
                    }(n, [{
                        key: "registrationSource",
                        get: function() {
                            var e = this.props,
                                t = e.giftCode,
                                n = e.guildTemplate,
                                r = e.invite;
                            if (null != t) return "gift";
                            if (null != n) return "guild_template";
                            if (null != r) {
                                if (null != r.guild) return "guild_invite";
                                if (null != r.channel) return "dm_invite";
                                if (null != r.inviter) return "friend_invite"
                            }
                            return null
                        }
                    }]);
                    return n
                }(o.PureComponent);
            We.defaultProps = {
                giftCodeResolved: !1,
                transitionTo: function(e) {
                    return n.g.location.assign(e)
                }
            };

            function qe(e) {
                var t = (0, l.cj)([be.Z, w.default, h.Z, fe.Z, ce.Z], (function() {
                        return {
                            consentRequired: be.Z.getAuthenticationConsentRequired(),
                            registering: w.default.getRegisterStatus() === g.$ib.REGISTERING,
                            apiErrors: w.default.getErrors(),
                            authenticated: w.default.isAuthenticated(),
                            isUnderage: h.Z.isUnderageAnonymous(),
                            country: fe.Z.getCountryCode(),
                            hasLoggedInAccounts: ce.Z.getHasLoggedInAccounts()
                        }
                    })),
                    n = (0, ve.F4)(),
                    i = (0, l.e7)([pe.Z], (function() {
                        return pe.Z.registrationUsernameSuggestion()
                    })),
                    a = Fe(o.useState(ae.FULL), 2),
                    s = a[0],
                    u = a[1];
                (0, N.Z)({
                    type: c.nv.VIEW,
                    name: c.zs.USER_REGISTRATION,
                    properties: {
                        impression_group: c.AG.USER_REGISTRATION_FLOW,
                        step: s
                    }
                }, {}, [s]);
                return (0, r.jsx)(We, Ue({
                    onChangeStep: function(e) {
                        return u(e)
                    },
                    registrationCopyExperimentConfig: A.getCurrentConfig({
                        location: "0ba758_2"
                    }, {
                        autoTrackExposure: !1
                    }),
                    uniqueUsernameRegistrationConfig: n,
                    usernameSuggestion: i
                }, e, t))
            }

            function Xe(e) {
                var t, n = e.username,
                    o = e.suggestion,
                    i = e.globalName,
                    a = e.livecheckEnabled,
                    s = e.isUsernameFocused,
                    c = e.onClickSuggestion,
                    l = (0, ye.a)(n, a, !0),
                    f = a && n.length > 0;
                t = f ? (0, u.EQ)(l).with({
                    type: he.K.ERROR,
                    message: u.P.select()
                }, (function(e) {
                    return (0, r.jsx)(d.Text, {
                        className: Ce().messageNegative,
                        variant: "text-sm/normal",
                        children: e
                    })
                })).with({
                    type: he.K.AVAILABLE,
                    message: u.P.select()
                }, (function(e) {
                    return (0, r.jsx)(d.Text, {
                        className: Ce().messagePositive,
                        variant: "text-sm/normal",
                        children: e
                    })
                })).otherwise((function() {
                    return (0, r.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        children: b.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
                    })
                })) : null != o && o.length > 0 && i.length > 0 ? (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: b.Z.Messages.UU_REGISTER_SUGGESTION.format({
                        suggestion: o,
                        nameOnClick: c
                    })
                }) : (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: b.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
                });
                return (0, r.jsx)(me.Z, {
                    show: f && (null == l ? void 0 : l.type) === he.K.ERROR || s,
                    top: -12,
                    bottom: 20,
                    children: t
                })
            }
        },
        530847: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(694755),
                a = n(473708),
                s = n(407785),
                u = n.n(s);

            function c(e) {
                var t = e.icon,
                    n = e.onChange;
                return (0, r.jsx)(o.FocusRing, {
                    within: !0,
                    children: (0, r.jsxs)("div", {
                        className: u().iconContainer,
                        children: [null != t ? (0, r.jsx)("img", {
                            alt: "Your icon",
                            className: u().filledIcon,
                            src: t
                        }) : (0, r.jsxs)("svg", {
                            width: "80",
                            height: "80",
                            viewBox: "0 0 80 80",
                            fill: "none",
                            children: [(0, r.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M54.8694 2.85498C53.8065 2.4291 52.721 2.04752 51.6153 1.71253L51.3254 2.66957L51.0354 3.62661C51.9783 3.91227 52.9057 4.23362 53.8161 4.58911C54.1311 3.98753 54.4832 3.40847 54.8694 2.85498ZM75.4109 26.1839C76.0125 25.8689 76.5915 25.5168 77.145 25.1306C77.5709 26.1935 77.9525 27.279 78.2875 28.3847L77.3304 28.6746L76.3734 28.9646C76.0877 28.0217 75.7664 27.0943 75.4109 26.1839ZM78.8148 43.8253L79.8102 43.9222C79.9357 42.6318 80 41.3234 80 40C80 38.6766 79.9357 37.3682 79.8102 36.0778L78.8148 36.1747L77.8195 36.2715C77.9389 37.4977 78 38.7414 78 40C78 41.2586 77.9389 42.5023 77.8195 43.7285L78.8148 43.8253ZM43.8253 1.18515L43.9222 0.189853C42.6318 0.0642679 41.3234 0 40 0C38.6766 0 37.3682 0.064268 36.0778 0.189853L36.1747 1.18515L36.2715 2.18045C37.4977 2.06112 38.7414 2 40 2C41.2586 2 42.5023 2.06112 43.7285 2.18045L43.8253 1.18515ZM28.6746 2.66957L28.3847 1.71253C25.8549 2.47897 23.4312 3.48925 21.1408 4.71604L21.6129 5.59756L22.0851 6.47907C24.2606 5.3138 26.5624 4.35439 28.9646 3.62661L28.6746 2.66957ZM15.2587 9.85105L14.6239 9.0784C12.5996 10.7416 10.7416 12.5996 9.0784 14.6239L9.85105 15.2587L10.6237 15.8935C12.2042 13.9699 13.9699 12.2042 15.8935 10.6237L15.2587 9.85105ZM5.59756 21.6129L4.71604 21.1408C3.48925 23.4312 2.47897 25.8549 1.71253 28.3847L2.66957 28.6746L3.62661 28.9646C4.35439 26.5624 5.3138 24.2607 6.47907 22.0851L5.59756 21.6129ZM0 40C0 38.6766 0.0642679 37.3682 0.189853 36.0778L1.18515 36.1747L2.18045 36.2715C2.06112 37.4977 2 38.7414 2 40C2 41.2586 2.06112 42.5023 2.18045 43.7285L1.18515 43.8253L0.189853 43.9222C0.064268 42.6318 0 41.3234 0 40ZM2.66957 51.3254L1.71253 51.6153C2.47897 54.1451 3.48926 56.5688 4.71604 58.8592L5.59756 58.3871L6.47907 57.9149C5.3138 55.7394 4.35439 53.4376 3.62661 51.0354L2.66957 51.3254ZM9.85105 64.7413L9.0784 65.3761C10.7416 67.4004 12.5996 69.2584 14.6239 70.9216L15.2587 70.1489L15.8935 69.3763C13.9699 67.7958 12.2042 66.0301 10.6237 64.1065L9.85105 64.7413ZM21.6129 74.4024L21.1408 75.284C23.4312 76.5107 25.8549 77.521 28.3847 78.2875L28.6746 77.3304L28.9646 76.3734C26.5624 75.6456 24.2607 74.6862 22.0851 73.5209L21.6129 74.4024ZM36.1747 78.8148L36.0778 79.8102C37.3682 79.9357 38.6766 80 40 80C41.3234 80 42.6318 79.9357 43.9222 79.8102L43.8253 78.8148L43.7285 77.8195C42.5023 77.9389 41.2586 78 40 78C38.7414 78 37.4977 77.9389 36.2715 77.8195L36.1747 78.8148ZM51.3254 77.3304L51.6153 78.2875C54.1451 77.521 56.5688 76.5107 58.8592 75.284L58.3871 74.4024L57.9149 73.5209C55.7394 74.6862 53.4376 75.6456 51.0354 76.3734L51.3254 77.3304ZM64.7413 70.1489L65.3761 70.9216C67.4004 69.2584 69.2584 67.4004 70.9216 65.3761L70.1489 64.7413L69.3763 64.1065C67.7958 66.0301 66.0301 67.7958 64.1065 69.3763L64.7413 70.1489ZM74.4024 58.3871L75.284 58.8592C76.5107 56.5688 77.521 54.1451 78.2875 51.6153L77.3304 51.3254L76.3734 51.0354C75.6456 53.4375 74.6862 55.7393 73.5209 57.9149L74.4024 58.3871Z",
                                fill: "currentColor"
                            }), (0, r.jsx)("circle", {
                                cx: "68",
                                cy: "12",
                                r: "12",
                                fill: "#5865f2"
                            }), (0, r.jsx)("path", {
                                d: "M73.3332 11.4075H68.5924V6.66675H67.4072V11.4075H62.6665V12.5927H67.4072V17.3334H68.5924V12.5927H73.3332V11.4075Z",
                                fill: "white"
                            }), (0, r.jsx)("path", {
                                d: "M40 29C37.794 29 36 30.794 36 33C36 35.207 37.794 37 40 37C42.206 37 44 35.207 44 33C44 30.795 42.206 29 40 29Z",
                                fill: "currentColor"
                            }), (0, r.jsx)("path", {
                                d: "M48 26.001H46.07C45.402 26.001 44.777 25.667 44.406 25.111L43.594 23.891C43.223 23.335 42.598 23 41.93 23H38.07C37.402 23 36.777 23.335 36.406 23.89L35.594 25.11C35.223 25.667 34.598 26 33.93 26H32C30.895 26 30 26.896 30 28V39C30 40.104 30.895 41 32 41H48C49.104 41 50 40.104 50 39V28C50 26.897 49.104 26.001 48 26.001ZM40 39C36.691 39 34 36.309 34 33C34 29.692 36.691 27 40 27C43.309 27 46 29.692 46 33C46 36.31 43.309 39 40 39Z",
                                fill: "currentColor"
                            }), (0, r.jsx)("path", {
                                d: "M24.6097 52.712V47.72H22.5457V52.736C22.5457 53.792 22.0777 54.404 21.1417 54.404C20.2177 54.404 19.7377 53.78 19.7377 52.712V47.72H17.6737V52.724C17.6737 55.04 19.0897 56.132 21.1177 56.132C23.1217 56.132 24.6097 55.016 24.6097 52.712ZM26.0314 56H28.0834V53.252H28.6114C30.6154 53.252 31.9474 52.292 31.9474 50.42C31.9474 48.62 30.7114 47.72 28.6954 47.72H26.0314V56ZM29.9554 50.456C29.9554 51.308 29.4514 51.704 28.5394 51.704H28.0594V49.268H28.5754C29.4874 49.268 29.9554 49.664 29.9554 50.456ZM37.8292 56L37.5532 54.224H35.0092V47.72H32.9572V56H37.8292ZM45.9558 51.848C45.9558 49.292 44.4078 47.564 42.0078 47.564C39.6078 47.564 38.0478 49.304 38.0478 51.872C38.0478 54.428 39.6078 56.156 41.9838 56.156C44.3958 56.156 45.9558 54.404 45.9558 51.848ZM43.8918 51.86C43.8918 53.504 43.1958 54.548 41.9958 54.548C40.8078 54.548 40.0998 53.504 40.0998 51.86C40.0998 50.216 40.8078 49.172 41.9958 49.172C43.1958 49.172 43.8918 50.216 43.8918 51.86ZM52.2916 56.084L54.3676 55.748L51.4876 47.684H49.2316L46.2556 56H48.2716L48.8236 54.284H51.6916L52.2916 56.084ZM50.2516 49.796L51.1756 52.676H49.3156L50.2516 49.796ZM62.5174 51.848C62.5174 49.388 61.0174 47.72 58.1374 47.72H55.2814V56H58.1854C60.9814 56 62.5174 54.308 62.5174 51.848ZM60.4534 51.86C60.4534 53.636 59.5414 54.404 58.0774 54.404H57.3334V49.316H58.0774C59.4814 49.316 60.4534 50.12 60.4534 51.86Z",
                                fill: "currentColor"
                            })]
                        }), (0, r.jsx)(i.ZP, {
                            onChange: n,
                            multiple: !1,
                            tabIndex: 0,
                            "aria-label": a.Z.Messages.GUILD_CREATE_UPLOAD_ICON_BUTTON_TEXT
                        })]
                    })
                })
            }
        },
        627379: (e, t, n) => {
            "use strict";
            n.d(t, {
                O: () => c
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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

            function u(e, t) {
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
            var c = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    l = void 0 === c ? 24 : c,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    v = u(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", s(function(e) {
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
                }({}, (0, i.Z)(v)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }
        },
        321689: (e, t, n) => {
            "use strict";
            n.d(t, {
                V: () => c
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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

            function u(e, t) {
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
            var c = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    l = void 0 === c ? 24 : c,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    v = u(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", s(function(e) {
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
                }({}, (0, i.Z)(v)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 3a9 9 0 0 0-8.945 10h1.862a5 5 0 0 1 4.097 2.133L10.39 17.1a3.104 3.104 0 0 1-.17 3.782c-.821.973-2.279 1.448-3.551.742A10.997 10.997 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 4.143-2.29 7.75-5.67 9.624-1.272.707-2.73.23-3.55-.742a3.104 3.104 0 0 1-.17-3.782l1.377-1.967A5 5 0 0 1 19.082 13h1.862A9 9 0 0 0 12 3Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }
        },
        270012: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var r = n(281110),
                o = n(744564),
                i = n(84441),
                a = n(561177),
                s = n(110108),
                u = n(705429),
                c = n(652591),
                l = n(301928),
                f = n(2590);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function h(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
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
            var y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
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
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }

            function g(e, t) {
                c.default.track(f.rMx.BROWSER_HANDOFF_SUCCEEDED, {
                    authenticated: e,
                    handoff_source: t
                })
            }
            const b = new(function(e) {
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
                var t = m(n);

                function n() {
                    d(this, n);
                    var e;
                    (e = t.apply(this, arguments)).handleEnd = function(t) {
                        var n = t.handoffToken,
                            r = t.fingerprint,
                            o = u.Z.key;
                        if (null != o && u.Z.isHandoffAvailable()) e.handleHandoff({
                            handoffKey: o,
                            handoffToken: n,
                            fingerprint: r,
                            handoffSource: void 0
                        });
                        else {
                            i.Z.setFingerprint(null);
                            (0, a.by)()
                        }
                    };
                    return e
                }
                var l = n.prototype;
                l._initialize = function() {
                    o.Z.subscribe("BROWSER_HANDOFF_END", this.handleEnd);
                    o.Z.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
                };
                l._terminate = function() {
                    o.Z.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd);
                    o.Z.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
                };
                l.handleHandoff = function(e) {
                    var t = e.handoffKey,
                        n = e.handoffToken,
                        o = e.fingerprint,
                        u = e.handoffSource;
                    if (null != n) r.ZP.post({
                        url: f.ANM.HANDOFF_EXCHANGE,
                        body: {
                            key: t,
                            handoff_token: n
                        }
                    }).then((function(e) {
                        var t = e.body;
                        (0, a.Vb)(t.user);
                        i.Z.loginToken(t.token, !1);
                        g(!0, u)
                    }), (function(e) {
                        null != o && g(!1, u);
                        i.Z.setFingerprint(o);
                        (0, a.lx)();
                        if (u === s.F.ROLE_SUBSCRIPTION) {
                            var t;
                            c.default.track(f.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
                                reason: null !== (t = e.message) && void 0 !== t ? t : e.text,
                                handoff_source: u
                            })
                        }
                    }));
                    else if (null != o) {
                        i.Z.setFingerprint(o);
                        g(!1, u);
                        (0, a.lx)()
                    } else {
                        i.Z.setFingerprint(o);
                        (0, a.by)()
                    }
                };
                return n
            }(l.Z))
        },
        520322: (e, t, n) => {
            "use strict";
            n.d(t, {
                Av: () => c,
                wE: () => l,
                hp: () => f
            });
            var r = n(281110),
                o = n(744564),
                i = n(799663),
                a = n(652591),
                s = n(561210),
                u = n(2590);

            function c(e, t) {
                (0, i.Z)(e, t);
                a.default.track(u.rMx.AGE_GATE_ACTION, {
                    source: t,
                    action: s.Al.AGE_GATE_SUBMITTED
                });
                return r.ZP.patch({
                    url: u.ANM.ME,
                    oldFormErrors: !0,
                    body: {
                        date_of_birth: e.format("YYYY-MM-DD")
                    }
                }).then((function(e) {
                    var n = e.body;
                    o.Z.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: n
                    });
                    a.default.track(u.rMx.AGE_GATE_ACTION, {
                        source: t,
                        action: s.Al.AGE_GATE_SUCCESS
                    })
                }))
            }

            function l(e) {
                o.Z.dispatch({
                    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
                });
                a.default.track(u.rMx.AGE_GATE_ACTION, {
                    source: e,
                    action: s.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
                })
            }

            function f(e) {
                o.Z.dispatch({
                    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
                });
                a.default.track(u.rMx.AGE_GATE_ACTION, {
                    source: e,
                    action: s.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
                })
            }
        },
        553484: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r = n(676489),
                o = n(202351),
                i = n(744564),
                a = n(120415),
                s = n(561210);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function l(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    return l(this, n)
                }
            }
            var h = null,
                v = "underage";
            var y = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.isUnderageAnonymous = function() {
                    if (!a.FB) {
                        return null != r.parse(document.cookie).underage
                    }
                    return null != h && h + s.k0 > Date.now()
                };
                return n
            }(o.ZP.Store);
            y.displayName = "AgeGateStore";
            const m = new y(i.Z, {
                AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function() {
                    !0;
                    h = Date.now();
                    document.cookie = "".concat(v, "=1;path=/")
                },
                LOGIN_SUCCESS: function() {
                    !1;
                    h = null;
                    document.cookie = "".concat(v, "=1;path=/;max-age=0")
                }
            })
        },
        852465: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                s = n(730381),
                u = n.n(s),
                c = n(304548),
                l = n(737797),
                f = n(473708),
                d = n(108083),
                p = n.n(d);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var y = u()().localeData().months(),
                m = Array.from(Array(31).keys()).map((function(e) {
                    return {
                        value: e + 1,
                        label: "".concat(e + 1)
                    }
                })),
                g = Array.from(Array(12).keys()).map((function(e) {
                    return {
                        value: e + 1,
                        label: y[e]
                    }
                }));
            var b = /[a-zA-Z0-9]/;

            function E(e) {
                var t = e.options,
                    n = e.selectOption,
                    i = e.children,
                    a = v(o.useState(""), 2),
                    s = a[0],
                    u = a[1];
                o.useEffect((function() {
                    if ("" !== s) {
                        var e = setTimeout((function() {
                            return u("")
                        }), 1e3);
                        return function() {
                            return clearTimeout(e)
                        }
                    }
                }), [s, u]);
                var c = o.useCallback((function(e) {
                    if (b.test(e.key)) {
                        var r = "".concat(s).concat(e.key.toLowerCase()),
                            o = t.find((function(e) {
                                return e.label.toLowerCase().startsWith(r)
                            }));
                        null != o && n(o.value);
                        u(r)
                    }
                }), [n, u, s, t]);
                return (0, r.jsx)("div", {
                    onKeyDown: c,
                    children: i
                })
            }

            function _() {
                var e = u()().localeData().longDateFormat("L"),
                    t = e.indexOf("D"),
                    n = e.indexOf("M"),
                    r = e.indexOf("Y");
                if (-1 === t || -1 === n || -1 === r) {
                    t = 0;
                    n = 1;
                    r = 2
                }
                return [{
                    index: t,
                    type: "day"
                }, {
                    index: n,
                    type: "month"
                }, {
                    index: r,
                    type: "year"
                }].sort((function(e, t) {
                    return e.index < t.index ? -1 : 1
                }))
            }
            const O = o.forwardRef((function(e, t) {
                var n = function(e) {
                        switch (k[e].type) {
                            case "day":
                                B.push({
                                    key: "day",
                                    input: (0, r.jsx)(E, {
                                        options: m,
                                        selectOption: N,
                                        children: (0, r.jsx)(l.Z, {
                                            ref: D,
                                            className: p().inputDay,
                                            "aria-label": f.Z.Messages.AGE_GATE_DOB_DAY,
                                            menuPlacement: l.Z.MenuPlacements.TOP,
                                            placeholder: (0, r.jsx)("span", {
                                                "aria-hidden": !0,
                                                children: f.Z.Messages.AGE_GATE_DOB_DAY
                                            }),
                                            options: m,
                                            value: T,
                                            onChange: function(t) {
                                                var n = t.value;
                                                N(n);
                                                L(e + 1)
                                            },
                                            maxMenuHeight: 215
                                        })
                                    })
                                });
                                break;
                            case "month":
                                B.push({
                                    key: "month",
                                    input: (0, r.jsx)(E, {
                                        options: g,
                                        selectOption: A,
                                        children: (0, r.jsx)(l.Z, {
                                            ref: M,
                                            className: p().inputMonth,
                                            "aria-label": f.Z.Messages.AGE_GATE_DOB_MONTH,
                                            menuPlacement: l.Z.MenuPlacements.TOP,
                                            placeholder: (0, r.jsx)("span", {
                                                "aria-hidden": !0,
                                                children: f.Z.Messages.AGE_GATE_DOB_MONTH
                                            }),
                                            options: g,
                                            value: S,
                                            onChange: function(t) {
                                                var n = t.value;
                                                A(n);
                                                L(e + 1)
                                            },
                                            maxMenuHeight: 215
                                        })
                                    })
                                });
                                break;
                            case "year":
                                B.push({
                                    key: "year",
                                    input: (0, r.jsx)(E, {
                                        options: R,
                                        selectOption: P,
                                        children: (0, r.jsx)(l.Z, {
                                            ref: U,
                                            className: p().inputYear,
                                            "aria-label": f.Z.Messages.AGE_GATE_DOB_YEAR,
                                            menuPlacement: l.Z.MenuPlacements.TOP,
                                            placeholder: (0, r.jsx)("span", {
                                                "aria-hidden": !0,
                                                children: f.Z.Messages.AGE_GATE_DOB_YEAR
                                            }),
                                            options: R,
                                            value: j,
                                            onChange: function(t) {
                                                var n = t.value;
                                                P(n);
                                                L(e + 1)
                                            },
                                            maxMenuHeight: 215
                                        })
                                    })
                                })
                        }
                    },
                    i = e.value,
                    s = e.wrapperClassName,
                    d = e.onChange,
                    h = e.onPopulated,
                    y = e.error,
                    b = e.autoFocus,
                    O = e.required,
                    I = function(e) {
                        var t = null,
                            n = null,
                            r = null;
                        if (null != e) {
                            t = e.date();
                            n = e.month() + 1;
                            r = e.year()
                        }
                        var i = v(o.useState(t), 2),
                            a = i[0],
                            s = i[1],
                            u = v(o.useState(n), 2),
                            c = u[0],
                            l = u[1],
                            f = v(o.useState(r), 2);
                        return {
                            day: a,
                            setDay: s,
                            month: c,
                            setMonth: l,
                            year: f[0],
                            setYear: f[1]
                        }
                    }(i),
                    T = I.day,
                    N = I.setDay,
                    S = I.month,
                    A = I.setMonth,
                    j = I.year,
                    P = I.setYear,
                    x = o.useMemo((function() {
                        return null != T && null != S && null != j ? u()("".concat(T, "/").concat(S, "/").concat(j), "DD/MM/YYYY") : null
                    }), [T, S, j]);
                o.useEffect((function() {
                    d((null == x ? void 0 : x.isValid()) ? x : null)
                }), [x, d]);
                var C = y;
                null == x || x.isValid() || (C = f.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);
                var R = function() {
                        var e = (new Date).getFullYear(),
                            t = o.useRef(Array.from(Array(150).keys()).map((function(t) {
                                return {
                                    value: e - t - 3,
                                    label: "".concat(e - t - 3)
                                }
                            })));
                        o.useEffect((function() {
                            t.current = Array.from(Array(150).keys()).map((function(t) {
                                return {
                                    value: e - t - 3,
                                    label: "".concat(e - t - 3)
                                }
                            }))
                        }), [e]);
                        return t.current
                    }(),
                    w = v(o.useState(b ? 0 : -1), 2),
                    Z = w[0],
                    L = w[1],
                    D = o.useRef(null),
                    M = o.useRef(null),
                    U = o.useRef(null),
                    k = o.useMemo(_, []),
                    G = o.useCallback((function() {
                        var e;
                        switch (null === (e = k[Z]) || void 0 === e ? void 0 : e.type) {
                            case "day":
                                var t;
                                null === (t = D.current) || void 0 === t || t.focus();
                                break;
                            case "month":
                                var n;
                                null === (n = M.current) || void 0 === n || n.focus();
                                break;
                            case "year":
                                var r;
                                null === (r = U.current) || void 0 === r || r.focus()
                        }
                    }), [Z, D, M, U, k]);
                o.useEffect((function() {
                    setTimeout(G, 500)
                }), []);
                o.useEffect((function() {
                    Z >= k.length ? null == h || h() : G()
                }), [Z, G]);
                for (var B = [], F = 0; F < 3; F++) n(F);
                return (0,
                    r.jsxs)("fieldset", {
                    className: a()(p().container, s),
                    children: [(0, r.jsx)(c.FormTitle, {
                        tag: "legend",
                        required: O,
                        children: f.Z.Messages.AGE_GATE_DATE_OF_BIRTH
                    }), (0, r.jsx)("div", {
                        className: p().inputs,
                        children: B.map((function(e, t) {
                            var n = e.key,
                                o = e.input;
                            return (0, r.jsx)("div", {
                                tabIndex: t + 1,
                                className: p()[n],
                                children: o
                            }, n)
                        }))
                    }), (0, r.jsx)(c.Text, {
                        className: p().errors,
                        variant: "text-sm/normal",
                        children: C
                    })]
                })
            }))
        },
        926543: (e, t, n) => {
            "use strict";
            n.d(t, {
                M: () => u,
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(751615)),
                i = n(80783),
                a = n(2590),
                s = n(199790);

            function u() {
                var e = location.pathname + location.search;
                return s.a ? a.Z5c.REGISTER : (0, i.U)(e, !1)
            }
            const c = function() {
                return (0, r.jsx)(o.l_, {
                    to: u()
                })
            }
        },
        799663: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(730381),
                o = n.n(r),
                i = n(652591),
                a = n(2590);

            function s(e, t) {
                i.default.track(a.rMx.AGE_GATE_SUBMITTED, {
                    dob: o()().diff(e, "years") < 18 ? e.format("YYYY-MM-DD") : null,
                    dob_day: e.date(),
                    dob_month: e.month() + 1,
                    dob_year: e.year(),
                    source: {
                        section: t
                    }
                })
            }
        },
        14515: (e, t, n) => {
            "use strict";
            n.d(t, {
                r: () => l
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(344832),
                a = n(220109),
                s = n(230531),
                u = n.n(s);

            function c(e) {
                var t = e.channel,
                    n = (0, i.Th)(t.type);
                return (0, r.jsxs)("div", {
                    className: u().channelInfoContainer,
                    children: [null != n ? (0, r.jsx)(n, {
                        width: 20,
                        height: 20
                    }) : null, (0, r.jsx)(o.Text, {
                        className: u().channelInfoText,
                        color: "none",
                        variant: "text-sm/semibold",
                        children: t.name
                    })]
                })
            }

            function l(e) {
                var t = e.channel,
                    n = e.guildScheduledEvent;
                return (0, r.jsxs)("div", {
                    className: u().container,
                    children: [(0, r.jsx)(a.HZ, {
                        className: u().statusContainer,
                        guildId: n.guild_id,
                        guildEventId: n.id,
                        eventPreview: n
                    }), (0, r.jsx)(a.Rf, {
                        name: n.name,
                        description: n.description,
                        guildId: n.guild_id
                    }), null != t && n.channel_id === t.id ? (0, r.jsx)(c, {
                        channel: t
                    }) : null]
                })
            }
        },
        434149: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(667294),
                o = n(202351),
                i = n(327499),
                a = n(473903);

            function s(e) {
                var t = (0, o.e7)([a.default], (function() {
                    return a.default.getUser(null == e ? void 0 : e.creator_id)
                }), [e]);
                r.useEffect((function() {
                    null == t && null != (null == e ? void 0 : e.creator_id) && i.Z.requestMembersById(e.guild_id, e.creator_id)
                }), [e, t]);
                return t
            }
        },
        605013: (e, t, n) => {
            "use strict";
            n.d(t, {
                Qt: () => w,
                ZP: () => M
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                s = n(202351),
                u = n(304548),
                c = n(224813),
                l = n(116404),
                f = n(915840),
                d = n(848285),
                p = n(61209),
                h = n(567403),
                v = n(206986),
                y = n(606483),
                m = n(414392),
                g = n(621329),
                b = n(382840),
                E = n(269300),
                _ = n(242735),
                O = n(599467),
                I = n(434149),
                T = n(205316),
                N = n(699296),
                S = n(220109),
                A = n(81472),
                j = n(3155),
                P = n(473708),
                x = n(554715),
                C = n.n(x);

            function R(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var w = function(e, t) {
                    switch (null == e ? void 0 : e.entity_type) {
                        case j.WX.STAGE_INSTANCE:
                            return function(e, t) {
                                return function(n) {
                                    var r = p.Z.getChannel(e.channel_id);
                                    if (null != r) {
                                        n.stopPropagation();
                                        (0, f.Cq)(r);
                                        null == t || t(n)
                                    }
                                }
                            }(e, t);
                        case j.WX.VOICE:
                            return function(e, t) {
                                return function(n) {
                                    n.stopPropagation();
                                    l.default.selectVoiceChannel(e.channel_id, !1);
                                    null == t || t(n)
                                }
                            }(e, t)
                    }
                    return function() {}
                },
                Z = function(e, t) {
                    return t && [j.WX.STAGE_INSTANCE, j.WX.VOICE].includes(null == e ? void 0 : e.entity_type)
                },
                L = o.memo((function(e) {
                    var t = e.guild,
                        n = e.guildScheduledEvent,
                        i = e.channel,
                        a = e.isMember,
                        l = (0, s.e7)([h.Z], (function() {
                            return null == t ? null : null !== (e = h.Z.getGuild(t.id)) && void 0 !== e ? e : new d.Z(t);
                            var e
                        }), [t]),
                        f = (0, A.u)(n, i),
                        p = o.useCallback((function(e) {
                            if (a && null != n) {
                                e.stopPropagation();
                                (0, c.B)(n)
                            }
                        }), [a, n]),
                        m = o.useCallback((function(e) {
                            w(n)(e)
                        }), [n]);
                    if (null == l) return null;
                    var g, b = null == f ? void 0 : f.IconComponent,
                        E = (0, r.jsxs)(r.Fragment, {
                            children: [null != b && (0, r.jsx)(b, {
                                width: 16,
                                height: 16,
                                className: C().channelIcon
                            }), (0, r.jsx)(u.Text, {
                                className: C().channelDescription,
                                variant: "text-xs/normal",
                                children: (0, O.m)(null !== (g = null == f ? void 0 : f.locationName) && void 0 !== g ? g : "", !0)
                            })]
                        });
                    return (0, r.jsxs)("div", {
                        className: C().inviteDetailsContainer,
                        children: [(0, r.jsx)(y.Z.Icon, {
                            guild: l,
                            onClick: p
                        }), (0, r.jsxs)("div", {
                            className: C().verticalContainer,
                            children: [(0, r.jsxs)("div", {
                                className: C().guildChannelInfoContainer,
                                children: [(0, r.jsx)(v.Z, {
                                    guild: l,
                                    tooltipPosition: "top",
                                    tooltipColor: u.Tooltip.Colors.PRIMARY,
                                    size: 16,
                                    className: C().guildBadge
                                }), (0, r.jsx)(u.Clickable, {
                                    className: C().guildNameClickable,
                                    onClick: p,
                                    children: (0, r.jsx)(u.Heading, {
                                        className: a ? C().guildNameLinkable : C().guildName,
                                        variant: "text-sm/medium",
                                        children: l.name
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: C().channelInfoContainer,
                                children: Z(n, a) ? (0, r.jsx)(u.Clickable, {
                                    className: C().channelLocationLink,
                                    onClick: m,
                                    children: E
                                }) : E
                            })]
                        })]
                    })
                })),
                D = o.memo((function(e) {
                    var t = e.guildId,
                        n = e.guildScheduledEventId,
                        o = e.isActive,
                        i = e.isEnded,
                        a = e.isMember,
                        c = e.isExternal,
                        l = e.onAcceptInstantInvite,
                        f = e.onTransitionToInviteChannel,
                        d = (0, s.e7)([E.ZP], (function() {
                            return E.ZP.hasRsvp(n, t)
                        }), [t, n]),
                        p = function(e) {
                            e.stopPropagation();
                            a ? o && f() : l()
                        };
                    return a ? o ? (0, r.jsx)(u.Button, {
                        className: C().button,
                        size: u.Button.Sizes.SMALL,
                        onClick: function(e) {
                            c || p(e)
                        },
                        color: c ? u.Button.Colors.TRANSPARENT : u.Button.Colors.GREEN,
                        children: c ? P.Z.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : P.Z.Messages.JOIN_GUILD
                    }) : i ? (0, r.jsx)(u.Button, {
                        className: C().button,
                        size: u.Button.Sizes.SMALL,
                        disabled: !0,
                        color: u.Button.Colors.PRIMARY,
                        look: u.Button.Looks.OUTLINED,
                        children: P.Z.Messages.GUILD_EVENT_INVITE_COMPLETED
                    }) : (0, r.jsxs)(u.Button, {
                        className: C().button,
                        innerClassName: C().innerButton,
                        size: u.Button.Sizes.SMALL,
                        color: u.Button.Colors.PRIMARY,
                        look: d ? u.Button.Looks.OUTLINED : u.Button.Looks.FILLED,
                        onClick: function(e) {
                            e.stopPropagation();
                            d ? _.Z.deleteRsvpForGuildEvent(n, t) : _.Z.createRsvpForGuildEvent(n, t)
                        },
                        children: [d ? (0, r.jsx)(g.Z, {
                            width: 16,
                            height: 16,
                            className: C().buttonIcon
                        }) : (0, r.jsx)(m.Z, {
                            width: 16,
                            height: 16,
                            className: C().buttonIcon
                        }), P.Z.Messages.INDICATE_RSVP]
                    }) : (0, r.jsx)(u.Button, {
                        className: C().button,
                        size: u.Button.Sizes.SMALL,
                        onClick: p,
                        color: u.Button.Colors.GREEN,
                        children: P.Z.Messages.JOIN_GUILD
                    })
                }));
            const M = o.memo((function(e) {
                var t = e.guildScheduledEvent,
                    n = e.guild,
                    i = e.channel,
                    s = e.isMember,
                    c = e.onAcceptInstantInvite,
                    l = e.onTransitionToInviteChannel,
                    f = (0, I.Z)(t),
                    d = o.useCallback((function() {
                        s && null != t && (0, b.bO)({
                            eventId: t.id
                        })
                    }), [s, t]);
                if (null == t) return null;
                var p, h = (0, E.xt)(t),
                    v = (0, E.Z2)(t),
                    m = t.entity_type === j.WX.EXTERNAL;
                return (0, r.jsx)(y.Z, {
                    className: a()(R({}, C().clickable, s)),
                    children: (0, r.jsxs)(u.Clickable, {
                        onClick: d,
                        children: [null != t.image && (0, r.jsx)(N.Z, {
                            source: (0, T.Z)(t),
                            className: C().banner
                        }), (0, r.jsx)(S.ZP, {
                            name: t.name,
                            description: null !== (p = t.description) && void 0 !== p ? p : void 0,
                            descriptionClassName: C().eventDescription,
                            guildId: t.guild_id,
                            creator: f,
                            guildEventId: t.id,
                            eventPreview: t
                        }), (0, r.jsxs)("div", {
                            className: C().footerContainer,
                            children: [(0, r.jsx)(L, {
                                guild: n,
                                channel: i,
                                guildScheduledEvent: t,
                                isMember: s
                            }), (0, r.jsx)(D, {
                                isActive: h,
                                isEnded: v,
                                isMember: s,
                                guildId: t.guild_id,
                                guildScheduledEventId: t.id,
                                onAcceptInstantInvite: c,
                                onTransitionToInviteChannel: l,
                                isExternal: m
                            })]
                        })]
                    })
                })
            }))
        },
        621634: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = n(667294),
                i = n(304548),
                a = n(599467),
                s = n(605013),
                u = n(81472),
                c = n(3155),
                l = n(68921),
                f = n.n(l);

            function d(e) {
                var t = e.guildScheduledEvent,
                    n = e.channel,
                    l = e.onClose,
                    d = t.entity_type === c.WX.EXTERNAL,
                    p = o.useCallback((function(e) {
                        return (0, s.Qt)(t, l)(e)
                    }), [t, l]),
                    h = (0, u.u)(t, n);
                if (null == h) return null;
                var v = h.IconComponent,
                    y = h.locationName,
                    m = (0, r.jsxs)(r.Fragment, {
                        children: [null != v && (0, r.jsx)(v, {
                            width: 20,
                            height: 20,
                            className: f().channelIcon
                        }), (0, r.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: f().locationText,
                            children: (0, a.m)(y, !0)
                        })]
                    });
                return (0, r.jsx)("div", {
                    className: f().row,
                    children: null != p ? (0, r.jsx)(i.Clickable, {
                        className: d ? f().externalLocation : f().channelLocation,
                        onClick: p,
                        children: m
                    }) : m
                })
            }
        },
        81472: (e, t, n) => {
            "use strict";
            n.d(t, {
                u: () => a
            });
            var r = n(344832),
                o = n(746103),
                i = n(32421);

            function a(e, t) {
                if (null == e) return null;
                var n, a, s = (0, i.cS)(e);
                if (null != s) {
                    n = o.Z;
                    a = s
                } else {
                    if (null == t) return null;
                    n = (0, r.Th)(t.type);
                    a = t.name
                }
                return {
                    IconComponent: n,
                    locationName: a
                }
            }
        },
        985518: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => G
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                s = n(496486),
                u = n.n(s),
                c = n(547308),
                l = n(795308),
                f = n(304548),
                d = n(84441),
                p = n(285991),
                h = n(530847),
                v = n(473903),
                y = n(718831),
                m = n(436622),
                g = n(755914),
                b = n(281110),
                E = n(744564),
                _ = n(652555),
                O = n(934870),
                I = n(567403),
                T = n(2590);
            const N = function(e, t, n) {
                E.Z.dispatch({
                    type: "GUILD_TEMPLATE_ACCEPT",
                    code: e
                });
                return new Promise((function(r, o) {
                    b.ZP.post({
                        url: T.ANM.UNRESOLVED_GUILD_TEMPLATE(e),
                        body: {
                            name: t,
                            icon: n
                        },
                        oldFormErrors: !0
                    }).then((function(t) {
                        var n = t.body;
                        E.Z.dispatch({
                            type: "GUILD_TEMPLATE_ACCEPT_SUCCESS",
                            code: e,
                            guild: n
                        });
                        if (_.Z.isConnected()) I.Z.addConditionalChangeListener((function() {
                            if (null != I.Z.getGuild(n.id)) {
                                (0, O.X)(n.id);
                                r(n);
                                return !1
                            }
                        }));
                        else {
                            (0, O.X)(n.id);
                            r(n)
                        }
                    }), (function(t) {
                        E.Z.dispatch({
                            type: "GUILD_TEMPLATE_ACCEPT_FAILURE",
                            code: e
                        });
                        o(t.body)
                    }))
                }))
            };
            var S = n(267342),
                A = n(652591),
                j = n(335150);

            function P(e) {
                var t = o.useRef([]);
                o.useEffect((function() {
                    if (null != e && e.state !== j.Rj.RESOLVING && !t.current.includes(e.code)) {
                        t.current.push(e.code);
                        A.default.track(T.rMx.CREATE_GUILD_VIEWED, {
                            guild_template_code: e.code,
                            guild_template_name: e.name,
                            guild_template_description: e.description,
                            guild_template_guild_id: e.sourceGuildId
                        })
                    }
                }))
            }
            var x = n(256273),
                C = n(473708),
                R = n(458759),
                w = n.n(R);
            n(424286);

            function Z(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function L(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function D(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            L(i, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            L(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function M(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function U(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Z(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Z(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
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
                        }([i, s])
                    }
                }
            };

            function G(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = U(o.useState(""), 2),
                    i = n[0],
                    a = n[1],
                    s = U(o.useState(null), 2),
                    u = s[0],
                    c = s[1],
                    l = U(o.useState(null), 2),
                    y = l[0],
                    m = l[1],
                    g = (0, S.Z)(e.code);
                o.useEffect((function() {
                    function e() {
                        return (e = D((function() {
                            var e;
                            return k(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (null != (e = v.default.getCurrentUser())) return [3, 4];
                                        t.label = 1;
                                    case 1:
                                        t.trys.push([1, 3, , 4]);
                                        return [4, (0, p.k)()];
                                    case 2:
                                        e = t.sent();
                                        return [3, 4];
                                    case 3:
                                        t.sent();
                                        d.Z.verifySSOToken(null);
                                        return [3, 4];
                                    case 4:
                                        null != e && a(g.defaultName.format({
                                            username: e.username
                                        }));
                                        return [2]
                                }
                            }))
                        }))).apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }), [g.defaultName]);
                var b = function() {
                    return N(e.code, i, u).catch((function(e) {
                        return m(e)
                    }))
                };
                P(e);
                var E = (0, r.jsxs)(r.Fragment, {
                        children: [t ? (0, r.jsx)(x.Z, {
                            guildTemplate: e
                        }) : null, (0, r.jsx)("div", {
                            className: w().icon,
                            children: (0, r.jsx)(h.Z, {
                                icon: u,
                                onChange: c
                            })
                        }), (0, r.jsx)(f.FormItem, {
                            title: g.nameLabel,
                            children: (0, r.jsx)(f.TextInput, {
                                type: "text",
                                value: i,
                                maxLength: 100,
                                onChange: a,
                                error: null == y ? void 0 : y.name
                            })
                        }), (0, r.jsx)(f.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: w().guidelines,
                            children: g.terms.format({
                                guidelinesURL: T.EYA.GUIDELINES
                            })
                        })]
                    }),
                    _ = e.serializedSourceGuild.roles.filter((function(e) {
                        return "@everyone" !== e.name
                    })),
                    O = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: w().divider
                        }), (0, r.jsxs)(f.FormItem, {
                            className: w().previewSection,
                            title: C.Z.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_HEADER,
                            children: [(0, r.jsx)(B, {
                                channels: e.serializedSourceGuild.channels
                            }), (0, r.jsxs)(f.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: w().protip,
                                children: [(0, r.jsxs)("span", {
                                    className: w().protipText,
                                    children: [C.Z.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                                }), " ", C.Z.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_TIP]
                            })]
                        }), _.length > 0 ? (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(f.FormItem, {
                                className: w().previewSection,
                                title: C.Z.Messages.GUILD_TEMPLATE_MODAL_ROLES_HEADER2,
                                children: (0, r.jsx)(F, {
                                    roles: _
                                })
                            })
                        }) : null]
                    });
                return {
                    form: E,
                    preview: O,
                    handleSubmit: b
                }
            }

            function B(e) {
                var t = e.channels,
                    n = u()(t).sortBy((function(e) {
                        return null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id
                    })).map((function(e) {
                        var t = function(e) {
                            var t = e.type;
                            return t === T.d4z.GUILD_VOICE ? g.Z : t === T.d4z.GUILD_CATEGORY ? y.Z : m.Z
                        }(e);
                        return (0, r.jsxs)("div", {
                            className: a()(w().channel, M({}, w().category, e.type === T.d4z.GUILD_CATEGORY)),
                            children: [(0, r.jsx)(t, {
                                className: w().channelIcon
                            }), (0, r.jsx)(f.Text, {
                                className: w().channelText,
                                variant: "text-sm/normal",
                                children: e.name
                            })]
                        }, e.id)
                    })).value();
                return (0, r.jsx)("div", {
                    className: w().channelsWrapper,
                    children: n
                })
            }

            function F(e) {
                var t = e.roles.slice().reverse().map((function(e) {
                    return (0, r.jsx)(V, {
                        role: e
                    }, e.id)
                }));
                return (0, r.jsx)("ul", {
                    className: w().rolesWrapper,
                    children: t
                })
            }

            function V(e) {
                var t, n = e.role,
                    o = null == n.color ? l.Z.unsafe_rawColors.PRIMARY_300.css : (0, c.Rf)(n.color);
                return (0, r.jsxs)("li", {
                    className: w().role,
                    style: {
                        borderColor: null !== (t = (0, c.wK)(o, .6)) && void 0 !== t ? t : void 0
                    },
                    children: [(0,
                        r.jsx)(f.RoleCircle, {
                        className: w().roleCircle,
                        color: o
                    }), (0, r.jsx)("div", {
                        className: w().roleName,
                        children: n.name
                    })]
                })
            }
        },
        145739: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(125333),
                o = n(58964),
                i = n(97245),
                a = n(269823),
                s = n(652591),
                u = n(877815),
                c = n(873297),
                l = n(2590);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var d = "template";
            const p = function(e, t) {
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
            }(function(e) {
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
            }({}, c.Z), {
                openNativeAppModal: function(e) {
                    a.Z.openNativeAppModal(e, l.Etm.GUILD_TEMPLATE_BROWSER)
                },
                openMobileApp: function(e, t) {
                    if (!(null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1)) {
                        var n = null != e ? (0, r.Oh)(e) : (0, r.Gk)(),
                            a = (0, o.WS)(),
                            c = (0, o.ZP)(n, {
                                utmSource: d,
                                fingerprint: t,
                                attemptId: a
                            });
                        s.default.track(l.rMx.DEEP_LINK_CLICKED, {
                            fingerprint: (0, i.K)(t),
                            attempt_id: a,
                            source: d,
                            guild_template_code: e
                        });
                        u.Z.launch(c, (function() {}))
                    }
                }
            })
        },
        869854: (e, t, n) => {
            "use strict";
            n.d(t, {
                B0: () => c,
                kz: () => l,
                yr: () => f,
                OG: () => d
            });
            var r = n(281110),
                o = n(744564),
                i = n(2590);

            function a(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            a(i, r, o, s, u, "next", e)
                        }

                        function u(e) {
                            a(i, r, o, s, u, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var u = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
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
                        }([i, s])
                    }
                }
            };

            function c(e, t, n, r) {
                o.Z.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: r
                })
            }

            function l(e, t) {
                var n = t.data,
                    r = t.messageId,
                    i = t.onCreate,
                    a = t.onSuccess,
                    s = t.onFailure;
                o.Z.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: r,
                    onCreate: i,
                    onSuccess: a,
                    onFailure: s
                })
            }

            function f(e, t, n) {
                o.Z.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }

            function d(e, t) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = s((function(e, t) {
                    var n, a;
                    return u(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                return [4, r.ZP.get({
                                    url: i.ANM.MESSAGE_INTERACTION_DATA(e, t),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                if ((n = s.sent()).ok) {
                                    a = n.body;
                                    o.Z.dispatch({
                                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                                        channelId: e,
                                        messageId: t,
                                        interactionData: a
                                    })
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        838956: (e, t, n) => {
            "use strict";
            n.d(t, {
                rQ: () => S,
                $s: () => x,
                tM: () => T,
                t$: () => P,
                ow: () => _,
                Sg: () => j
            });
            var r = n(842227),
                o = n(281110),
                i = n(744564),
                a = n(720419),
                s = n(73904),
                u = n(671293),
                c = n(664625),
                l = n(869854),
                f = n(873934),
                d = n(457896),
                p = "_errors";

            function h(e) {
                return v(e, void 0)
            }

            function v(e, t) {
                var n = e._errors;
                if (null != n) return n[0];
                var r = Object.keys(e).filter((function(e) {
                    return e !== p
                }))[0];
                return null != r ? v(e[r], null != t ? t : r) : null
            }
            var y = n(2590);

            function m(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
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

            function b(e) {
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
            var E = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
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
                        }([i, s])
                    }
                }
            };

            function _(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : r.default.extractTimestamp(e) + 9e5
            }
            var O, I, T = (I = (O = function(e) {
                    var t, n, i, a, d, p, h, v, m, g, _;
                    return E(this, (function(E) {
                        switch (E.label) {
                            case 0:
                                t = e.componentType, n = e.messageId, i = e.messageFlags, a = e.customId, d = e.indices, p = e.applicationId, h = e.channelId, v = e.guildId, m = e.localState;
                                g = r.default.fromTimestamp(Date.now());
                                return f.Z.canQueueInteraction(n, g) ? [4, u.Z.unarchiveThreadIfNecessary(h)] : [2];
                            case 1:
                                E.sent();
                                (0, l.kz)(g, {
                                    messageId: n,
                                    data: {
                                        interactionType: s.B8.MESSAGE_COMPONENT,
                                        customId: a,
                                        indices: d
                                    },
                                    onFailure: function(e, t) {
                                        return A(h, e, t)
                                    }
                                });
                                null != m && (0, l.B0)(n, g, m, d);
                                _ = {
                                    type: s.B8.MESSAGE_COMPONENT,
                                    nonce: g,
                                    guild_id: v,
                                    channel_id: h,
                                    message_flags: i,
                                    message_id: n,
                                    application_id: p,
                                    session_id: c.default.getSessionId(),
                                    data: b({
                                        component_type: t,
                                        custom_id: a
                                    }, N(m))
                                };
                                return [4, o.ZP.post({
                                    url: y.ANM.INTERACTIONS,
                                    body: _,
                                    timeout: 3e3
                                }, (function(e) {
                                    j(g, h, v, e)
                                }))];
                            case 2:
                                E.sent();
                                return [2]
                        }
                    }))
                },
                function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(n, r) {
                        var o = O.apply(e, t);

                        function i(e) {
                            m(o, n, r, i, a, "next", e)
                        }

                        function a(e) {
                            m(o, n, r, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }), function(e) {
                return I.apply(this, arguments)
            });

            function N(e) {
                if (null == e) return null;
                if (e.type === s.re.STRING_SELECT || e.type === s.re.INPUT_TEXT) return e;
                var t = e.selectedOptions.map((function(e) {
                    return e.value
                }));
                return {
                    type: e.type,
                    values: t
                }
            }
            var S, A = function(e, t, n) {
                    null == n && null != t && a.Z.sendClydeError(e, t)
                },
                j = function(e, t, n, r) {
                    if (!r.ok) {
                        if (!r.hasErr) {
                            if (r.status >= 400 && r.status < 500 && r.body) {
                                if (r.body.code === y.evJ.INVALID_FORM_BODY && r.body.errors) {
                                    var o = h(r.body.errors);
                                    null == o || "INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" !== o.code && "INTERACTION_APPLICATION_COMMAND_INVALID" !== o.code || i.Z.dispatch({
                                        type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                        channelId: t,
                                        guildId: n
                                    });
                                    (0, l.yr)(e, void 0, null == o ? void 0 : o.message);
                                    return
                                }(0, l.yr)(e, void 0, r.body.message);
                                return
                            }
                            var a;
                            (0,
                                l.yr)(e, null === (a = r.body) || void 0 === a ? void 0 : a.code);
                            return
                        }(0, l.yr)(e)
                    }
                };
            ! function(e) {
                e[e.SENDING = 0] = "SENDING";
                e[e.CREATED = 1] = "CREATED";
                e[e.FAILED = 2] = "FAILED";
                e[e.TIMED_OUT = 3] = "TIMED_OUT"
            }(S || (S = {}));
            var P = function(e, t) {
                var n, o = null == t ? void 0 : t.state,
                    i = e.state === y.yb.SENT && _(e.id) < Date.now(),
                    a = e.state === y.yb.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : r.default.extractTimestamp(n) + 3e3) < Date.now(),
                    u = (null == t ? void 0 : t.data.interactionType) === s.B8.APPLICATION_COMMAND,
                    c = e.isCommandType();
                return u && o === d.F.QUEUED || c && e.state === y.yb.SENDING && null != t ? S.SENDING : u && o === d.F.CREATED || e.hasFlag(y.iLy.LOADING) && !i ? S.CREATED : null != e.interaction && e.hasFlag(y.iLy.LOADING) && i || null != e.interaction && !e.hasFlag(y.iLy.LOADING) && a ? S.TIMED_OUT : c && e.state === y.yb.SEND_FAILED ? S.FAILED : void 0
            };

            function x(e) {
                for (var t = e.options; 1 === (null == t ? void 0 : t.length) && (t[0].type === s.jw.SUB_COMMAND_GROUP || t[0].type === s.jw.SUB_COMMAND);) t = t[0].options;
                var n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = (null != t ? t : [])[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                        if (i.value.type === s.jw.ATTACHMENT) return !1
                    }
                } catch (e) {
                    r = !0;
                    o = e
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return !0
            }
        },
        223919: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(228721),
                o = n(281110),
                i = n(2590);

            function a(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            a(i, r, o, s, u, "next", e)
                        }

                        function u(e) {
                            a(i, r, o, s, u, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var u = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1,
                                    r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                        }([i, s])
                    }
                }
            };

            function c() {
                return (c = s((function(e) {
                    var t, n, r;
                    return u(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, o.ZP.post({
                                    url: i.ANM.HANDOFF,
                                    body: {
                                        key: e
                                    },
                                    oldFormErrors: !0,
                                    retries: 1
                                })];
                            case 1:
                                t = a.sent(), n = t.body;
                                if (null != (r = n.handoff_token)) return [2, r];
                                throw new Error("Missing handoff token!")
                        }
                    }))
                }))).apply(this, arguments)
            }
            const l = {
                generateNonce: function() {
                    return (0, r.Z)()
                },
                createHandoffToken: function(e) {
                    return c.apply(this, arguments)
                }
            }
        },
        196644: (e, t, n) => {
            "use strict";
            n.d(t, {
                HJ: () => h,
                yD: () => v,
                Zd: () => y
            });
            var r = n(541554),
                o = n(281110),
                i = n(744564),
                a = n(84441),
                s = n(296602),
                u = n(664625),
                c = n(873553),
                l = n(2590);

            function f(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            var d = function(e, t) {
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
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
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
                            }([i, s])
                        }
                    }
                },
                p = new s.Z("MultiAccountActionCreators");

            function h() {
                var e, t, n = u.default.getId();
                c.Z.getUsers().forEach((t = (e = function(e) {
                    var t, a, s, u, c;
                    return d(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                t = e.id;
                                if (null == (a = r.Z.getToken(t)) || "" === a) {
                                    i.Z.dispatch({
                                        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                                        userId: t
                                    });
                                    return [2]
                                }
                                i.Z.dispatch({
                                    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
                                    userId: t
                                });
                                f.label = 1;
                            case 1:
                                f.trys.push([1, 3, , 4]);
                                return [4, o.ZP.get({
                                    url: l.ANM.ME,
                                    headers: {
                                        authorization: a
                                    },
                                    retries: 3
                                })];
                            case 2:
                                s = f.sent();
                                return [3, 4];
                            case 3:
                                u = f.sent();
                                c = 401 === (null == u ? void 0 : u.status) || 403 === (null == u ? void 0 : u.status);
                                i.Z.dispatch({
                                    type: c ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                                    userId: t
                                });
                                return [2];
                            case 4:
                                i.Z.dispatch({
                                    type: n === t ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
                                    user: s.body
                                });
                                i.Z.dispatch({
                                    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                                    userId: t
                                });
                                return [2]
                        }
                    }))
                }, function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            f(i, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            f(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }), function(e) {
                    return t.apply(this, arguments)
                }))
            }

            function v(e, t) {
                p.log("Switching account to ".concat(e), {
                    switchSynchronously: t
                });
                var n = r.Z.getToken(e);
                if (null == n) {
                    p.log("Switching accounts failed because there was no token");
                    i.Z.dispatch({
                        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                        userId: e
                    });
                    return Promise.resolve()
                }
                return a.Z.switchAccountToken(n, t)
            }

            function y(e) {
                i.Z.dispatch({
                    type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
                    userId: e
                })
            }
        },
        22724: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => u
            });
            var r = n(667294),
                o = n(202351),
                i = n(744564),
                a = n(196644),
                s = n(873553);

            function u() {
                var e = (0, o.cj)([s.Z], (function() {
                    return {
                        isLoading: s.Z.getIsValidatingUsers(),
                        multiAccountUsers: s.Z.getUsers()
                    }
                }));
                r.useEffect((function() {
                    i.Z.wait((function() {
                        a.HJ()
                    }))
                }), []);
                return e
            }
        },
        226613: (e, t, n) => {
            "use strict";
            n.d(t, {
                c: () => o,
                H: () => i
            });
            var r = n(744564);

            function o(e) {
                r.Z.wait((function() {
                    return r.Z.dispatch({
                        type: "NUF_NEW_USER",
                        newUserType: e
                    })
                }))
            }

            function i() {
                r.Z.wait((function() {
                    return r.Z.dispatch({
                        type: "NUF_COMPLETE"
                    })
                }))
            }
        },
        239527: (e, t, n) => {
            "use strict";
            n.d(t, {
                M5: () => r
            });
            var r;
            ! function(e) {
                e[e.MARKETING_UNCLAIMED = 0] = "MARKETING_UNCLAIMED";
                e[e.INVITE_UNCLAIMED = 1] = "INVITE_UNCLAIMED";
                e[e.ORGANIC_REGISTERED = 2] = "ORGANIC_REGISTERED";
                e[e.ORGANIC_REGISTERED_GUILD_TEMPLATE = 3] = "ORGANIC_REGISTERED_GUILD_TEMPLATE"
            }(r || (r = {}))
        },
        88415: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function s(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return u(e, t)
            }
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function l(e) {
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
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }
            var f = null;
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
                    t && u(e, t)
                }(n, e);
                var t = l(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    var t;
                    f = null !== (t = null == e ? void 0 : e.type) && void 0 !== t ? t : null
                };
                r.getType = function() {
                    return f
                };
                r.getState = function() {
                    return {
                        type: f
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            d.displayName = "NewUserStore";
            d.persistKey = "nuf";
            const p = new d(o.Z, {
                NUF_NEW_USER: function(e) {
                    var t = e.newUserType;
                    f = t
                },
                NUF_COMPLETE: function() {
                    f = null
                }
            })
        },
        560837: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(202351),
                o = n(744564),
                i = n(335186);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function u(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
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
            var l, f = function(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var p = (0, i.K4)();

            function h(e) {
                var t = e.countryCode;
                if (null != t) {
                    var n;
                    p = null !== (n = (0, i.Zz)(t)) && void 0 !== n ? n : (0, i.K4)()
                }
            }
            var v = function(e) {
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
                var t = d(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    null != e && (l = e.selectedCountryCode)
                };
                r.getUserAgnosticState = function() {
                    return {
                        selectedCountryCode: l
                    }
                };
                r.getCountryCode = function() {
                    return null != l ? l : p
                };
                return n
            }(r.ZP.DeviceSettingsStore);
            v.displayName = "PhoneStore";
            v.persistKey = "PhoneStore";
            const y = new v(o.Z, {
                PHONE_SET_COUNTRY_CODE: function(e) {
                    var t = e.countryCode;
                    l = t
                },
                CONNECTION_OPEN: h,
                SET_LOCATION_METADATA: h
            })
        },
        376845: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => A
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                s = n(824390),
                u = n.n(s),
                c = n(496486),
                l = n.n(c),
                f = n(268335),
                d = n(304548),
                p = n(335186),
                h = n(107364),
                v = n(473708),
                y = n(886995),
                m = n.n(y),
                g = n(480798),
                b = n.n(g);

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function O(e, t) {
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

            function I(e, t) {
                return !t || "object" !== N(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function T(e, t) {
                T = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return T(e, t)
            }
            var N = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
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
                    var n, r = _(e);
                    if (t) {
                        var o = _(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }
            var A = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && T(e, t)
                }(n, e);
                var t = S(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this, e)).onChangeQuery = function(e) {
                        r.setState({
                            query: e
                        })
                    };
                    r.onClearQuery = function() {
                        r.setState({
                            query: ""
                        })
                    };
                    r.onClick = function(e) {
                        var t, n;
                        null === (n = (t = r.props).onClick) || void 0 === n || n.call(t, e)
                    };
                    r.state = {
                        query: ""
                    };
                    return r
                }
                var i = n.prototype;
                i.renderItems = function() {
                    var e = this,
                        t = this.state.query,
                        n = f.Z.flatMap((function(e, t) {
                            var n = e.alpha2,
                                o = e.phoneCountryCodes,
                                i = e.name,
                                a = (0, p.q9)(n);
                            return o.map((function(e) {
                                return {
                                    key: "".concat(t, "-").concat(e),
                                    name: i,
                                    translatedName: a,
                                    countryData: {
                                        name: i,
                                        alpha2: n,
                                        code: e
                                    },
                                    children: (0, r.jsxs)(h.Z, {
                                        className: m().countryItem,
                                        justify: h.Z.Justify.CENTER,
                                        align: h.Z.Align.CENTER,
                                        children: [(0, r.jsx)(h.Z.Child, {
                                            className: m().countryName,
                                            children: a
                                        }), (0, r.jsx)(h.Z.Child, {
                                            className: m().countryCode,
                                            grow: 0,
                                            shrink: 0,
                                            children: e
                                        })]
                                    })
                                }
                            }))
                        })),
                        i = l()(n).filter((function(e) {
                            return 0 === t.length || u()(t.toLowerCase(), e.name.toLowerCase()) || u()(t.toLowerCase(), e.translatedName.toLowerCase())
                        })).map((function(t) {
                            return (0, o.createElement)(d.PopoutList.Item, O(function(e) {
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
                            }({}, t), {
                                key: t.key,
                                onClick: function() {
                                    return e.onClick(t.countryData)
                                }
                            }))
                        })).value();
                    return 0 === i.length ? (0, r.jsx)(d.PopoutList.Empty, {
                        children: v.Z.Messages.NONE
                    }) : (0, r.jsx)(d.ScrollerAuto, {
                        className: m().phoneFieldScroller,
                        children: i
                    })
                };
                i.render = function() {
                    var e = this.props.className;
                    return (0, r.jsxs)(d.PopoutList, {
                        className: a()(m().phoneFieldPopout, b().elevationBorderLow, e),
                        children: [(0, r.jsx)(d.PopoutList.SearchBar, {
                            query: this.state.query,
                            placeholder: v.Z.Messages.SEARCH_COUNTRY,
                            onChange: this.onChangeQuery,
                            onClear: this.onClearQuery,
                            autoComplete: "off"
                        }), (0, r.jsx)(d.PopoutList.Divider, {}), this.renderItems()]
                    })
                };
                return n
            }(o.PureComponent)
        },
        367299: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(318715)),
                i = n(785085);

            function a(e) {
                var t = e.children,
                    n = e.confettiLocation;
                return (0, o.ZP)([i.Z], (function() {
                    return i.Z.isEnabled({
                        confettiLocation: n
                    })
                })) ? (0, r.jsx)(r.Fragment, {
                    children: t
                }) : null
            }
        },
        919031: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(667294),
                o = n(318715),
                i = n(255875),
                a = n(785085);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u() {
                var e = r.useContext(i.E).createMultipleConfettiAt,
                    t = (0, o.ZP)([a.Z], (function() {
                        return a.Z.getState()
                    })),
                    n = r.useCallback((function(e) {
                        return {
                            size: {
                                type: "static-random",
                                minValue: e.confettiSize - 7,
                                maxValue: e.confettiSize + 7
                            }
                        }
                    }), []),
                    u = r.useMemo((function() {
                        return {
                            fire: function(r, o, i) {
                                var a, u, c = null != (null == i ? void 0 : i.settings) ? function(e) {
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
                                    }({}, t, i.settings) : t,
                                    l = n(c);
                                e(r, o, l, (null !== (a = null == i ? void 0 : i.count) && void 0 !== a ? a : c.confettiCount) * (null !== (u = null == i ? void 0 : i.countMultiplier) && void 0 !== u ? u : 1), {
                                    sprite: null == i ? void 0 : i.sprite
                                })
                            }
                        }
                    }), [e, n, t]);
                return u
            }
        },
        647086: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(571657),
                o = n(281110),
                i = n(744564),
                a = n(347365),
                s = n(652591),
                u = n(391438),
                c = n(260561),
                l = (0, c.B)({
                    kind: "user",
                    label: "Pomelo Attempt",
                    id: "2023-04_pomelo_attempt",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                f = function() {
                    return l.getCurrentConfig({
                        location: "c22166_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled
                },
                d = (0, c.B)({
                    kind: "user",
                    label: "Pomelo Suggestions",
                    id: "2023-04_pomelo_suggestions",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                p = n(623236),
                h = n(2590),
                v = n(473708);
            n(355336);

            function y(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function m(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            y(i, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            y(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var g = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
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
                        }([i, s])
                    }
                }
            };

            function b(e) {
                return !1 === /^[A-Za-z0-9_.]*$/.test(e) ? v.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID : e.includes("..") ? v.Z.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT : e.length < 2 || e.length > 32 ? v.Z.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                    maxNum: 32,
                    minNum: 2
                }) : void 0
            }
            const E = {
                resetSuggestions: function() {
                    return i.Z.dispatch({
                        type: "POMELO_SUGGESTIONS_RESET"
                    })
                },
                fetchSuggestionsRegistration: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
                    return m((function() {
                        var n, r;
                        return g(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!(0, p.vc)()) return [2];
                                    i.Z.dispatch({
                                        type: "POMELO_SUGGESTIONS_RESET"
                                    });
                                    a.label = 1;
                                case 1:
                                    a.trys.push([1, 3, , 4]);
                                    return [4, o.ZP.get({
                                        url: h.ANM.POMELO_SUGGESTIONS_UNAUTHED,
                                        query: null == e ? void 0 : {
                                            global_name: e
                                        },
                                        timeout: t
                                    })];
                                case 2:
                                    return (r = a.sent()).ok && null != (null === (n = r.body) || void 0 === n ? void 0 : n.username) ? [2, i.Z.dispatch({
                                        type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
                                        suggestion: r.body,
                                        source: e
                                    })] : [3, 4];
                                case 3:
                                    a.sent();
                                    return [2];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                fetchSuggestions: function() {
                    return m((function() {
                        var e, t;
                        return g(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!d.getCurrentConfig({
                                            location: "1907ae_1"
                                        }, {
                                            autoTrackExposure: !1
                                        }).enabled) return [2];
                                    n.label = 1;
                                case 1:
                                    n.trys.push([1, 3, , 4]);
                                    return [4, o.ZP.get({
                                        url: h.ANM.POMELO_SUGGESTIONS
                                    })];
                                case 2:
                                    return (t = n.sent()).ok && null != (null === (e = t.body) || void 0 === e ? void 0 : e.username) ? [2, i.Z.dispatch({
                                        type: "POMELO_SUGGESTIONS_SUCCESS",
                                        suggestion: t.body
                                    })] : [3, 4];
                                case 3:
                                    n.sent();
                                    return [2];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                attemptPomelo: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return m((function() {
                        var o, c, l, d, p, v;
                        return g(this, (function(y) {
                            switch (y.label) {
                                case 0:
                                    if (null != (o = b(e))) {
                                        s.default.track(h.rMx.POMELO_ERRORS, {
                                            reason: o,
                                            username_error: !0,
                                            location: t
                                        });
                                        return [2, i.Z.dispatch({
                                            type: "POMELO_ATTEMPT_FAILURE",
                                            username: e,
                                            error: o
                                        })]
                                    }
                                    if (!f()) return [2];
                                    y.label = 1;
                                case 1:
                                    y.trys.push([1, 3, , 4]);
                                    return [4, u.Z.post({
                                        url: n ? h.ANM.POMELO_ATTEMPT_UNAUTHED : h.ANM.POMELO_ATTEMPT,
                                        body: {
                                            username: e
                                        },
                                        trackedActionData: {
                                            event: r.a9.POMELO_ATTEMPT,
                                            properties: {
                                                requested_username: e
                                            }
                                        }
                                    })];
                                case 2:
                                    (c = y.sent()).body.taken && s.default.track(h.rMx.POMELO_ERRORS, {
                                        reason: "already_taken",
                                        username_error: !0,
                                        location: t
                                    });
                                    i.Z.dispatch({
                                        type: "POMELO_ATTEMPT_SUCCESS",
                                        username: e,
                                        taken: c.body.taken
                                    });
                                    return [3, 4];
                                case 3:
                                    l = y.sent();
                                    d = new a.Hx(l);
                                    v = null !== (p = d.getAnyErrorMessage()) && void 0 !== p ? p : void 0;
                                    s.default.track(h.rMx.POMELO_ERRORS, {
                                        reason: v,
                                        username_error: !0,
                                        location: t
                                    });
                                    i.Z.dispatch({
                                        username: e,
                                        type: "POMELO_ATTEMPT_FAILURE",
                                        error: null != d.status && d.status < 500 && 401 !== d.status ? v : void 0,
                                        statusCode: d.status,
                                        retryAfter: d.retryAfter
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                createPomelo: function(e) {
                    return m((function() {
                        var t;
                        return g(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, u.Z.post({
                                        body: e,
                                        url: h.ANM.POMELO_CREATE,
                                        trackedActionData: {
                                            event: r.a9.POMELO_CREATE
                                        }
                                    })];
                                case 1:
                                    t = n.sent();
                                    i.Z.dispatch({
                                        type: "CURRENT_USER_UPDATE",
                                        user: t.body
                                    });
                                    return [2, t.body]
                            }
                        }))
                    }))()
                }
            }
        },
        355336: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(5387),
                o = n.n(r),
                i = n(202351),
                a = n(744564);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function c(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
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
                    var n, r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var p = {
                    taken: null,
                    error: void 0,
                    rateLimited: !0
                },
                h = {
                    validations: new(o())({
                        max: 100,
                        maxAge: 6e4
                    }),
                    currentUsernameInvalid: !1,
                    retryAfterTime: null,
                    suggestions: {
                        migration: {
                            suggestion: {
                                username: void 0
                            },
                            fetched: !1
                        },
                        registration: {
                            suggestion: {
                                username: void 0
                            },
                            source: void 0,
                            fetched: !1
                        }
                    }
                };
            var v = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.isRateLimited = function() {
                    return null != h.retryAfterTime && Date.now() < h.retryAfterTime
                };
                r.validate = function(e) {
                    var t = h.validations.get(e);
                    return this.isRateLimited() && (null == t || t.rateLimited) ? p : this.isRateLimited() || null == t || !t.rateLimited ? t : void 0
                };
                r.registrationUsernameSuggestion = function() {
                    return h.suggestions.registration.suggestion.username
                };
                r.usernameSuggestion = function() {
                    return h.suggestions.migration.suggestion.username
                };
                r.isCurrentUsernameInvalid = function() {
                    return h.currentUsernameInvalid
                };
                r.wasRegistrationSuggestionFetched = function(e) {
                    return h.suggestions.registration.source === e && h.suggestions.registration.fetched
                };
                r.wasSuggestionsFetched = function() {
                    return h.suggestions.migration.fetched
                };
                return n
            }(i.ZP.Store);
            v.displayName = "PomeloStore";
            const y = new v(a.Z, {
                POMELO_ATTEMPT_SUCCESS: function(e) {
                    var t = e.username,
                        n = e.taken;
                    h.validations.set(t, {
                        taken: n
                    })
                },
                POMELO_ATTEMPT_FAILURE: function(e) {
                    var t = e.username,
                        n = e.error,
                        r = e.statusCode,
                        o = e.retryAfter;
                    429 === r ? h.validations.set(t, {
                        taken: null,
                        error: n,
                        rateLimited: !0
                    }, 1e3 * (null != o ? o : 7)) : h.validations.set(t, {
                        taken: null,
                        error: n
                    });
                    null != o && (h.retryAfterTime = Date.now() + 1e3 * o)
                },
                POMELO_SUGGESTIONS_RESET: function() {
                    h.suggestions.migration = {
                        suggestion: {
                            username: void 0
                        },
                        fetched: !1
                    };
                    h.suggestions.registration = {
                        suggestion: {
                            username: void 0
                        },
                        source: void 0,
                        fetched: !1
                    }
                },
                POMELO_SUGGESTIONS_SUCCESS: function(e) {
                    var t = e.suggestion;
                    h.suggestions.migration = {
                        suggestion: t,
                        fetched: !0
                    };
                    !0 === (null == t ? void 0 : t.invalid_current_username) && (h.currentUsernameInvalid = !0)
                },
                POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function(e) {
                    var t = e.suggestion,
                        n = e.source;
                    h.suggestions.registration = {
                        suggestion: t,
                        source: n,
                        fetched: !0
                    };
                    null != (null == t ? void 0 : t.username) && h.validations.set(t.username, {
                        taken: !1
                    })
                }
            })
        },
        189739: (e, t, n) => {
            "use strict";
            n.d(t, {
                K: () => r
            });
            var r;
            ! function(e) {
                e.AVAILABLE = "AVAILABLE";
                e.ERROR = "ERROR";
                e.RATE_LIMIT = "RATE_LIMIT";
                e.INTERNAL_ERROR = "INTERNAL_ERROR"
            }(r || (r = {}))
        },
        987230: (e, t, n) => {
            "use strict";
            n.d(t, {
                zV: () => d,
                e$: () => p,
                NX: () => m,
                R_: () => g,
                K9: () => b,
                ti: () => E
            });
            var r = n(730381),
                o = n.n(r),
                i = n(498964),
                a = n(775173),
                s = n(102921),
                u = n(421281),
                c = n(189739),
                l = n(705090),
                f = n(473708);

            function d(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return a.ZP.getUserAvatarURL({
                    id: e.id,
                    avatar: e.avatar,
                    bot: e.bot,
                    discriminator: "0000"
                }, t, 80)
            }

            function p(e) {
                var t = (0, u._I)(e.username).replace(l.RN, "").replace(l.iF, ".").toLowerCase();
                return "".concat(t).concat(e.discriminator).substring(0, 32)
            }
            var h = ["@", "#", ":"],
                v = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
                y = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

            function m(e) {
                var t, n, r = e.username.toLowerCase();
                if ((t = r, n = l.kt, t.split("").filter((function(e) {
                        return !n.includes(e.charCodeAt(0))
                    })).join("")).length < 2) return !0;
                var o = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, u = h[Symbol.iterator](); !(o = (s = u.next()).done); o = !0) {
                        var c = s.value;
                        if (r.includes(c)) return !0
                    }
                } catch (e) {
                    i = !0;
                    a = e
                } finally {
                    try {
                        o || null == u.return || u.return()
                    } finally {
                        if (i) throw a
                    }
                }
                var f = !0,
                    d = !1,
                    p = void 0;
                try {
                    for (var m, g = y[Symbol.iterator](); !(f = (m = g.next()).done); f = !0) {
                        if (r === m.value.toLowerCase()) return !0
                    }
                } catch (e) {
                    d = !0;
                    p = e
                } finally {
                    try {
                        f || null == g.return || g.return()
                    } finally {
                        if (d) throw p
                    }
                }
                var b = !0,
                    E = !1,
                    _ = void 0;
                try {
                    for (var O, I = v[Symbol.iterator](); !(b = (O = I.next()).done); b = !0) {
                        var T = O.value;
                        if (r.includes(T.toLowerCase())) return !0
                    }
                } catch (e) {
                    E = !0;
                    _ = e
                } finally {
                    try {
                        b || null == I.return || I.return()
                    } finally {
                        if (E) throw _
                    }
                }
                return !1
            }

            function g(e) {
                return e.toLowerCase().replace(/\s/g, "").replace("@", "")
            }

            function b(e) {
                var t = s.Z.extractTimestamp(e);
                try {
                    return o()(new Date(t)).format("MMM DD, YYYY")
                } catch (e) {}
                return null
            }

            function E(e) {
                return (0, i.EQ)(e).with({
                    rateLimited: !0
                }, (function() {
                    return {
                        type: c.K.RATE_LIMIT,
                        message: f.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
                    }
                })).with({
                    error: i.P.not(i.P.nullish)
                }, (function(e) {
                    var t = e.error;
                    return {
                        type: c.K.ERROR,
                        message: t
                    }
                })).with({
                    taken: !1
                }, (function() {
                    return {
                        type: c.K.AVAILABLE,
                        message: f.Z.Messages.POMELO_EXISTING_FLOW_AVAILABLE
                    }
                })).with({
                    taken: !0
                }, (function() {
                    return {
                        type: c.K.ERROR,
                        message: f.Z.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
                    }
                })).with({
                    error: i.P.nullish
                }, (function() {
                    return {
                        type: c.K.INTERNAL_ERROR,
                        message: ""
                    }
                })).otherwise((function() {}))
            }
        },
        623236: (e, t, n) => {
            "use strict";
            n.d(t, {
                F4: () => o,
                vc: () => i
            });
            var r = (0, n(260561).B)({
                    kind: "user",
                    id: "2023-06_unique_username_registration",
                    label: "Unique Username Registration",
                    defaultConfig: {
                        livecheckEnabled: !0,
                        suggestions: !0
                    },
                    treatments: [{
                        id: 1,
                        label: "Unique Username Registration enabled -livecheck -suggestions",
                        config: {
                            livecheckEnabled: !1,
                            suggestions: !1
                        }
                    }, {
                        id: 2,
                        label: "Unique Username Registration enabled -livecheck +suggestions",
                        config: {
                            livecheckEnabled: !1,
                            suggestions: !0
                        }
                    }, {
                        id: 3,
                        label: "Unique Username Registration enabled +livecheck -suggestions",
                        config: {
                            livecheckEnabled: !0,
                            suggestions: !1
                        }
                    }, {
                        id: 4,
                        label: "Unique Username Registration enabled +livecheck +suggestions",
                        config: {
                            livecheckEnabled: !0,
                            suggestions: !0
                        }
                    }]
                }),
                o = function() {
                    return r.useExperiment({
                        location: "83ca1a_3"
                    }, {
                        autoTrackExposure: !1
                    })
                },
                i = function() {
                    return r.getCurrentConfig({
                        location: "83ca1a_4"
                    }, {
                        autoTrackExposure: !1
                    }).suggestions
                }
        },
        120486: (e, t, n) => {
            "use strict";
            n.d(t, {
                M: () => f
            });
            var r = n(667294),
                o = n(496486),
                i = n(318715),
                a = n(647086),
                s = (0, n(260561).B)({
                    kind: "user",
                    label: "Pomelo Debounce Delay",
                    id: "2023-03_pomelo_debounce_delay",
                    defaultConfig: {
                        delay: 600
                    },
                    treatments: [{
                        id: 1,
                        label: "600ms",
                        config: {
                            delay: 600
                        }
                    }, {
                        id: 2,
                        label: "700ms",
                        config: {
                            delay: 700
                        }
                    }, {
                        id: 3,
                        label: "800ms",
                        config: {
                            delay: 800
                        }
                    }, {
                        id: 4,
                        label: "900ms",
                        config: {
                            delay: 900
                        }
                    }, {
                        id: 5,
                        label: "1000ms",
                        config: {
                            delay: 1e3
                        }
                    }]
                }),
                u = function() {
                    return s.useExperiment({
                        location: "52560d_1"
                    }, {
                        autoTrackExposure: !1
                    }).delay
                },
                c = n(355336),
                l = n(987230),
                f = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        s = (0, i.ZP)([c.Z], (function() {
                            return c.Z.validate(e)
                        }), [e]),
                        f = (0, i.ZP)([c.Z], (function() {
                            return c.Z.isRateLimited()
                        })),
                        d = u(),
                        p = r.useMemo((function() {
                            return (0, o.debounce)((function(e) {
                                return a.Z.attemptPomelo(e, n ? "registration" : "modal", n)
                            }), d)
                        }), [d, n]);
                    r.useEffect((function() {
                        t && !f && null == s && "" !== e && p(e)
                    }), [t, f, s, e, p]);
                    return r.useMemo((function() {
                        return null != s ? (0, l.ti)(s) : void 0
                    }), [s])
                }
        },
        91853: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => s
            });
            var r = n(667294),
                o = n(120486);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
                    s = (0, o.M)(e, t, n),
                    u = a(r.useState(void 0), 2),
                    c = u[0],
                    l = u[1];
                r.useEffect((function() {
                    "" === e || e === i ? l(void 0) : null != s && l(s)
                }), [s, e, i]);
                return c
            }
        },
        808748: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = n(667294),
                i = n(248088),
                a = n(391033);

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(e) {
                var t = e.show,
                    n = e.children,
                    s = e.top,
                    c = void 0 === s ? 0 : s,
                    l = e.bottom,
                    f = void 0 === l ? 0 : l,
                    d = function() {
                        var e = o.useRef(null),
                            t = u(o.useState(0), 2),
                            n = t[0],
                            r = t[1],
                            i = o.useMemo((function() {
                                return new a.Z((function(e) {
                                    var t = u(e, 1)[0];
                                    return r(t.contentRect.height)
                                }))
                            }), []);
                        o.useLayoutEffect((function() {
                            null != e.current && i.observe(e.current);
                            return function() {
                                return i.disconnect()
                            }
                        }), [i]);
                        return {
                            ref: e,
                            height: n
                        }
                    }(),
                    p = d.ref,
                    h = d.height,
                    v = (0, i.useSpring)({
                        from: {
                            height: 0,
                            paddingBottom: "0px",
                            marginTop: "0px"
                        },
                        to: {
                            height: t ? h : 0,
                            paddingBottom: t ? "".concat(f, "px") : "0px",
                            marginTop: t ? "".concat(c, "px") : "0px"
                        },
                        config: {
                            tension: 170,
                            friction: 26
                        }
                    }),
                    y = (0, i.useSpring)({
                        from: {
                            opacity: 0
                        },
                        to: {
                            opacity: t ? 1 : 0
                        },
                        config: {
                            duration: 200,
                            easing: t ? function(e) {
                                return Math.pow(e, 4)
                            } : function(e) {
                                return e * (2 - e)
                            }
                        }
                    });
                return (0, r.jsx)(i.animated.div, {
                    style: {
                        overflow: "hidden",
                        height: v.height,
                        paddingBottom: v.paddingBottom,
                        marginTop: v.marginTop
                    },
                    children: (0, r.jsx)(i.animated.div, {
                        style: {
                            opacity: y.opacity
                        },
                        ref: p,
                        children: n
                    })
                })
            }
        },
        467345: (e, t, n) => {
            "use strict";
            n.d(t, {
                SR: () => d,
                _G: () => y,
                YD: () => m
            });
            var r = n(441143),
                o = n.n(r),
                i = n(761953),
                a = n(720419),
                s = n(30027),
                u = n(61209),
                c = n(644144),
                l = n(69427);

            function f(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            var d, p = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
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
                        }([i, s])
                    }
                }
            };
            ! function(e) {
                e.ACTION = "action";
                e.LOOP = "loop";
                e.IDLE = "idle"
            }(d || (d = {}));
            var h, v, y = function(e, t) {
                    var r;
                    switch (e) {
                        case l.Cj.SNOWGLOBE:
                            r = function() {
                                return n.e(92494).then(n.t.bind(n, 292494, 23)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case l.Cj.BOX:
                            r = function() {
                                return n.e(45555).then(n.t.bind(n, 245555, 23)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case l.Cj.CUP:
                            r = function() {
                                return n.e(21243).then(n.t.bind(n, 421243, 23)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case l.Cj.STANDARD_BOX:
                            switch (t) {
                                case d.IDLE:
                                    r = function() {
                                        return n.e(78901).then(n.t.bind(n, 278901, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                case d.LOOP:
                                    r = function() {
                                        return n.e(62252).then(n.t.bind(n, 162252, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                default:
                                    r = function() {
                                        return n.e(12955).then(n.t.bind(n, 112955, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    }
                            }
                            break;
                        case l.Cj.CAKE:
                            switch (t) {
                                case d.IDLE:
                                    r = function() {
                                        return n.e(77455).then(n.t.bind(n, 777455, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                case d.LOOP:
                                    r = function() {
                                        return n.e(96988).then(n.t.bind(n, 896988, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                default:
                                    r = function() {
                                        return n.e(55507).then(n.t.bind(n, 755507, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    }
                            }
                            break;
                        case l.Cj.CHEST:
                            switch (t) {
                                case d.IDLE:
                                    r = function() {
                                        return n.e(67090).then(n.t.bind(n, 54436, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                case d.LOOP:
                                    r = function() {
                                        return n.e(54682).then(n.t.bind(n, 454682, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                default:
                                    r = function() {
                                        return n.e(49537).then(n.t.bind(n, 349537, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    }
                            }
                            break;
                        case l.Cj.COFFEE:
                            switch (t) {
                                case d.IDLE:
                                    r = function() {
                                        return n.e(76803).then(n.t.bind(n, 76803, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                case d.LOOP:
                                    r = function() {
                                        return n.e(1133).then(n.t.bind(n, 101133, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    };
                                    break;
                                default:
                                    r = function() {
                                        return n.e(86636).then(n.t.bind(n, 86636, 23)).then((function(e) {
                                            return e.default
                                        }))
                                    }
                            }
                            break;
                        default:
                            r = function() {
                                return Promise.resolve("Error: Invalid giftStyle")
                            }
                    }
                    return r
                },
                m = (v = (h = function(e, t) {
                    var n, r;
                    return p(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                if (null == t) throw new Error("giftCode must be defined");
                                if (null == e) throw new Error("Recipient must be defined");
                                return [4, i.Z.openPrivateChannel(e.id).then((function(e) {
                                    var t = u.Z.getChannel(e);
                                    o()(null != t, "PrivateChannel is null");
                                    if (null == t) throw new Error("Channel must be defined");
                                    return t
                                }))];
                            case 1:
                                n = l.sent();
                                r = (0, c.Nz)(t);
                                return [2, a.Z.sendMessage(n.id, s.ZP.parse(n, r), void 0, {
                                    isGiftLinkSentOnBehalfOfUser: !0
                                })]
                        }
                    }))
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(n, r) {
                        var o = h.apply(e, t);

                        function i(e) {
                            f(o, n, r, i, a, "next", e)
                        }

                        function a(e) {
                            f(o, n, r, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }), function(e, t) {
                    return v.apply(this, arguments)
                })
        },
        821: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function u(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
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
            var l, f, d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }

            function h() {
                l = !1;
                f = null
            }
            h();
            var v = function(e) {
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
                var t = p(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }! function(e, t, n) {
                    t && a(e.prototype, t);
                    n && a(e, n)
                }(n, [{
                    key: "hasCompletedStepDuringSession",
                    get: function() {
                        return l
                    }
                }, {
                    key: "activeSubstep",
                    get: function() {
                        return f
                    }
                }]);
                return n
            }(r.ZP.Store);
            v.displayName = "PremiumTutorialSessionStore";
            const y = new v(o.Z, {
                SET_HAS_COMPLETED_STEP: function() {
                    l = !0
                },
                RESET_HAS_COMPLETED_STEP: function() {
                    l = !1
                },
                SET_ACTIVE_SUBSTEP: function(e) {
                    var t = e.substep;
                    f = t
                },
                LOGOUT: function() {
                    h()
                }
            })
        },
        882211: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                a = n(316878),
                s = n(776009),
                u = n(467345),
                c = n(69427);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function f(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e) {
                var t = e.giftStyle,
                    n = e.className,
                    l = e.shouldAnimate,
                    d = void 0 === l || l,
                    p = e.defaultAnimationState,
                    h = e.idleAnimationState,
                    v = (0, i.e7)([a.Z], (function() {
                        return a.Z.useReducedMotion
                    })),
                    y = f(o.useState(p), 2),
                    m = y[0],
                    g = y[1],
                    b = o.useRef((0, u._G)(t, m)),
                    E = f(o.useState(null == h), 2),
                    _ = E[0],
                    O = E[1],
                    I = f(o.useState(!1), 2),
                    T = I[0],
                    N = I[1],
                    S = f(o.useState(-1), 2),
                    A = S[0],
                    j = S[1],
                    P = function() {
                        b.current = (0, u._G)(t, m);
                        j((function(e) {
                            return e + 1
                        }))
                    };
                o.useEffect((function() {
                    null == h && g(p)
                }), [h, p]);
                o.useEffect((function() {
                    null != h && A >= 0 ? function() {
                        O(!1);
                        N(!0);
                        j(-1);
                        g(p)
                    }() : P()
                }), [t, h]);
                o.useEffect((function() {
                    T && null != h || P()
                }), [m]);
                o.useEffect((function() {
                    if (T) {
                        O(null == h);
                        N(!1);
                        P()
                    }
                }), [T]);
                if (!c.Cj.hasOwnProperty(t)) throw new Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(s.Z, {
                    importData: b.current,
                    shouldAnimate: !v && d,
                    className: n,
                    versionKey: A,
                    onComplete: null != h ? function() {
                        if (null != h) {
                            g(h);
                            O(!0)
                        }
                    } : void 0,
                    loop: _
                })
            }
        },
        686874: (e, t, n) => {
            "use strict";
            n.d(t, {
                e: () => f
            });
            var r = n(228721),
                o = n(306472),
                i = n(652591),
                a = n(2590);

            function s(e, t, n) {
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
            var c = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this.loadId = (0, r.Z)();
                        this.appUIViewed = !1
                    }
                    var t = e.prototype;
                    t.trackEvent = function(e, t) {
                        var n = this,
                            r = Date.now();
                        requestIdleCallback((function() {
                            i.default.track(e, u(function(e) {
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
                            }({}, function() {
                                var e, t, n, r = "--campaign-id=",
                                    i = null !== (n = null === o.Z || void 0 === o.Z || null === (e = o.Z.processUtils) || void 0 === e || null === (t = e.getMainArgvSync) || void 0 === t ? void 0 : t.call(e)) && void 0 !== n ? n : [],
                                    a = !0,
                                    s = !1,
                                    u = void 0;
                                try {
                                    for (var c, l = i[Symbol.iterator](); !(a = (c = l.next()).done); a = !0) {
                                        var f = c.value;
                                        if (f.startsWith(r)) return {
                                            referrer: f.substr(r.length)
                                        }
                                    }
                                } catch (e) {
                                    s = !0;
                                    u = e
                                } finally {
                                    try {
                                        a || null == l.return || l.return()
                                    } finally {
                                        if (s) throw u
                                    }
                                }
                                return {}
                            }(), function() {
                                var e = !1,
                                    t = {
                                        total_compressed_byte_size: 0,
                                        total_uncompressed_byte_size: 0,
                                        total_transfer_byte_size: 0,
                                        js_compressed_byte_size: 0,
                                        js_uncompressed_byte_size: 0,
                                        js_transfer_byte_size: 0,
                                        css_compressed_byte_size: 0,
                                        css_uncompressed_byte_size: 0,
                                        css_transfer_byte_size: 0
                                    };
                                null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach((function(n) {
                                    var r = null != n.encodedBodySize ? n.encodedBodySize : n.decodedBodySize,
                                        o = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                        i = n.transferSize;
                                    if (null != o && null != r) {
                                        e = !0;
                                        t.total_compressed_byte_size += r;
                                        t.total_uncompressed_byte_size += o;
                                        null != i && (t.total_uncompressed_byte_size += i);
                                        if ("resource" === n.entryType) {
                                            if ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/)) {
                                                t.js_compressed_byte_size += r;
                                                t.js_uncompressed_byte_size += o;
                                                null != i && (t.js_uncompressed_byte_size += i)
                                            }
                                            if ("link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/)) {
                                                t.css_compressed_byte_size += r;
                                                t.css_uncompressed_byte_size += o;
                                                null != i && (t.css_uncompressed_byte_size += i)
                                            }
                                        }
                                    }
                                }));
                                return e ? t : {}
                            }()), {
                                load_id: n.loadId,
                                screen_name: t,
                                duration_ms_since_app_opened: r - window.GLOBAL_ENV.HTML_TIMESTAMP
                            }))
                        }))
                    };
                    t.trackAppUIViewed = function(e) {
                        if (!this.appUIViewed) {
                            this.trackEvent(a.rMx.APP_UI_VIEWED, e);
                            this.appUIViewed = !0
                        }
                    };
                    return e
                }(),
                l = new c;

            function f(e) {
                l.trackAppUIViewed(e)
            }
        },
        571680: (e, t, n) => {
            "use strict";
            n.d(t, {
                MK: () => r,
                FF: () => o,
                mx: () => i,
                X2: () => a,
                EW: () => s
            });
            var r, o, i, a, s;
            ! function(e) {
                e.UNKNOWN = "unknown";
                e.ANY = "any";
                e.INVITE = "invite";
                e.ORGANIC = "organic_registration";
                e.ORGANIC_MARKETING = "organic_marketing";
                e.ORGANIC_GUILD_TEMPLATES = "organic_guild_template";
                e.CREATE_GUILD = "create_guild"
            }(r || (r = {}));
            ! function(e) {
                e.AGE_GATE = "age_gate";
                e.AGE_GATE_UNDERAGE = "age_gate_underage"
            }(o || (o = {}));
            ! function(e) {
                e.CLAIM_ACCOUNT = "claim_account";
                e.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"
            }(i || (i = {}));
            ! function(e) {
                e.GUILD_TEMPLATES = "guild_templates";
                e.GUILD_CREATE = "guild_create";
                e.CREATION_INTENT = "creation_intent";
                e.CHANNEL_PROMPT = "channel_prompt";
                e.JOIN_GUILD = "join_guild";
                e.SUCCESS = "create_success"
            }(a || (a = {}));
            ! function(e) {
                e.NUF_STARTED = "nuf_started";
                e.AGE_GATE = "age_gate";
                e.NUF_COMPLETE = "nuf_complete";
                e.HUB_CONNECTION = "hub_connection"
            }(s || (s = {}))
        },
        415879: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(38736),
                o = n(630631),
                i = n(296602),
                a = n(652591),
                s = n(571680),
                u = n(2590);

            function c(e, t, n) {
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
                        c(e, t, n[t])
                    }))
                }
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
                var t = function(e, t) {
                    if ("object" !== h(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== h(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === h(t) ? t : String(t)
            }
            var h = function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                },
                v = "UserFlowAnalyticsStore_current",
                y = "UserFlowAnalyticsStore";
            new i.Z("UserFlowAnalytics");

            function m(e) {
                if (e === s.MK.UNKNOWN) return null;
                var t = o.Z.get("".concat(y, "-").concat(e));
                if (null == t) return null;
                var n = t.version,
                    r = d(t, ["version"]);
                return 1 !== n ? null : r
            }
            var g = (0, r.Z)((function(e, t) {
                return c({
                    flows: {},
                    currentFlow: null
                }, "activeFlow", (function() {
                    var e, n = null !== (e = t().currentFlow) && void 0 !== e ? e : o.Z.get(v);
                    if (null == n) return null;
                    var r = t().flows[n],
                        i = null != r ? r : m(n);
                    return null != (null == i ? void 0 : i.currentStep) ? n : null
                }))
            }));
            g.subscribe((function(e) {
                var t;
                if (null != e) {
                    ! function(e) {
                        if (e.type !== s.MK.UNKNOWN) {
                            var t = "".concat(y, "-").concat(e.type);
                            if (e.ended) {
                                o.Z.remove(t);
                                o.Z.remove(v)
                            } else {
                                o.Z.set("".concat(y, "-").concat(e.type), f(l({}, e), {
                                    version: 1
                                }));
                                o.Z.set(v, e.type)
                            }
                        }
                    }(e);
                    a.default.track(u.rMx.NUO_TRANSITION, {
                        flow_type: e.type,
                        from_step: e.lastStep,
                        to_step: e.currentStep,
                        seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
                    }, {
                        flush: !0
                    });
                    if (e.ended) {
                        var n = l({}, g.getState().flows);
                        delete n[e.type];
                        g.setState({
                            flows: n,
                            currentFlow: null
                        })
                    }
                }
            }), (function(e) {
                return null != e.currentFlow ? e.flows[e.currentFlow] : void 0
            }));

            function b(e, t) {
                var n = g.getState().flows,
                    r = n[e],
                    o = d(n, [e].map(p)),
                    i = null != r ? r : m(e);
                if (null != (null == i ? void 0 : i.currentStep)) {
                    if (i.currentStep === t) return;
                    0
                }
                g.setState({
                    flows: f(l({}, o), c({}, e, {
                        type: e,
                        lastStep: null,
                        lastTimestamp: null,
                        currentStep: t,
                        currentTimestamp: new Date,
                        skipped: !1
                    })),
                    currentFlow: e
                })
            }

            function E(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = e;
                if (e === s.MK.ANY) {
                    var o;
                    r = null !== (o = g.getState().activeFlow()) && void 0 !== o ? o : s.MK.UNKNOWN
                }
                var i = g.getState().flows,
                    a = i[r],
                    u = d(i, [r].map(p)),
                    h = null != a ? a : m(r);
                null != h && null != h.currentStep && h.currentStep !== t && g.setState({
                    flows: f(l({}, u), c({}, r, f(l({}, h), {
                        lastStep: h.currentStep,
                        lastTimestamp: h.currentTimestamp,
                        currentStep: t,
                        currentTimestamp: new Date,
                        ended: n
                    }))),
                    currentFlow: r
                })
            }

            function _() {
                return null != g.getState().activeFlow()
            }
            const O = {
                flowStart: b,
                flowStepOrStart: function(e, t) {
                    _() ? E(e, t) : b(e, t)
                },
                flowStep: E,
                hasActiveFlow: _
            }
        },
        42261: (e, t, n) => {
            "use strict";
            n.d(t, {
                vG: () => i,
                $Z: () => r,
                M0: () => a,
                Od: () => s
            });
            var r, o = n(473708),
                i = "emails";
            ! function(e) {
                e.COMMUNICATION = "communication";
                e.SOCIAL = "social";
                e.TIPS = "tips";
                e.RECOMMENDATIONS_AND_EVENTS = "recommendations_and_events";
                e.UPDATES_AND_ANNOUNCEMENTS = "updates_and_announcements";
                e.FAMILY_CENTER_DIGEST = "family_center_digest"
            }(r || (r = {}));
            var a = [r.TIPS, r.RECOMMENDATIONS_AND_EVENTS, r.UPDATES_AND_ANNOUNCEMENTS],
                s = [{
                    category: r.COMMUNICATION,
                    label: function() {
                        return o.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION
                    },
                    subLabel: function() {
                        return o.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION_SUBLABEL
                    }
                }, {
                    category: r.SOCIAL,
                    label: function() {
                        return o.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL
                    },
                    subLabel: function() {
                        return o.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL_SUBLABEL
                    }
                }, {
                    category: r.UPDATES_AND_ANNOUNCEMENTS,
                    label: function() {
                        return o.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS
                    },
                    subLabel: function() {
                        return o.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS_SUBLABEL
                    }
                }, {
                    category: r.TIPS,
                    label: function() {
                        return o.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS
                    },
                    subLabel: function() {
                        return o.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS_SUBLABEL
                    }
                }, {
                    category: r.RECOMMENDATIONS_AND_EVENTS,
                    label: function() {
                        return o.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS
                    },
                    subLabel: function() {
                        return o.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS_SUBLABEL
                    }
                }]
        },
        536038: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var r = n(202351),
                o = n(630631),
                i = n(744564),
                a = n(2590);

            function s(e, t) {
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

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function l(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    return l(this, n)
                }
            }
            var h = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                v = h,
                y = "LAST_VIEWED_PATH";
            var m = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h;
                    v = null != e ? e : h
                };
                r.getState = function() {
                    return v
                };
                ! function(e, t, n) {
                    t && u(e.prototype, t);
                    n && u(e, n)
                }(n, [{
                    key: "defaultRoute",
                    get: function() {
                        return a.Z5c.ME
                    }
                }, {
                    key: "lastNonVoiceRoute",
                    get: function() {
                        var e;
                        return null !== (e = v.lastViewedNonVoicePath) && void 0 !== e ? e : a.Z5c.ME
                    }
                }, {
                    key: "fallbackRoute",
                    get: function() {
                        return a.Z5c.ME
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            m.displayName = "DefaultRouteStore";
            m.persistKey = "DefaultRouteStore";
            m.migrations = [function() {
                var e = o.Z.get(y, null);
                o.Z.remove(y);
                return {
                    lastViewedPath: e
                }
            }];
            const g = new m(i.Z, {
                SAVE_LAST_ROUTE: function(e) {
                    var t = e.path;
                    v.lastViewedPath = t;
                    return !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    var t = e.path;
                    v.lastViewedNonVoicePath = t;
                    return !0
                }
            })
        },
        836485: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                s = n(107364),
                u = n(69850),
                c = n.n(u);

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function d(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && h(e, t)
            }

            function p(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
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
                        var o = f(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var m = function(e) {
                d(n, e);
                var t = y(n);

                function n() {
                    l(this, n);
                    var e;
                    (e = t.apply(this, arguments)).setCodeBlockRef = function(t) {
                        e._codeBlockRef = t
                    };
                    e.handleKeyDown = function(t) {
                        var n = 8 === t.which || 37 === t.which || 39 === t.which,
                            r = t.which >= 48 && t.which <= 57 || t.keyCode >= 96 && t.keyCode <= 105;
                        n || r || t.preventDefault();
                        var o = e.props.onKeyDown;
                        null == o || o(t)
                    };
                    e.handleChange = function(t) {
                        var n = e.props.onChange;
                        null == n || n(t.currentTarget.value)
                    };
                    return e
                }
                var o = n.prototype;
                o.render = function() {
                    var e = this.props.className;
                    return (0, r.jsx)("input", {
                        ref: this.setCodeBlockRef,
                        className: a()(c().input, e),
                        maxLength: 1,
                        value: null != this.props.code ? this.props.code : void 0,
                        autoFocus: this.props.autoFocus,
                        onKeyDown: this.handleKeyDown,
                        onChange: this.handleChange
                    })
                };
                o.focus = function() {
                    var e;
                    null === (e = this._codeBlockRef) || void 0 === e || e.focus()
                };
                o.blur = function() {
                    var e;
                    null === (e = this._codeBlockRef) || void 0 === e || e.blur()
                };
                return n
            }(o.PureComponent);
            m.defaultProps = {
                autoFocus: !1
            };
            var g = function(e) {
                d(n, e);
                var t = y(n);

                function n(e) {
                    l(this, n);
                    var r;
                    (r = t.call(this, e))._codeBlockRefs = new Array(r.props.count);
                    r.state = {
                        codes: new Array(e.count)
                    };
                    return r
                }
                var o = n.prototype;
                o.render = function() {
                    for (var e = function(e) {
                            e === a.length / 2 && u.push((0, r.jsx)("div", {
                                className: c().spacer
                            }, "spacer"));
                            u.push((0, r.jsx)(m, {
                                ref: function(n) {
                                    return t.setCodeBlockRef(e, n)
                                },
                                code: a[e],
                                autoFocus: 0 === e,
                                onChange: function(n) {
                                    return t.handleChange(e, n)
                                },
                                onKeyDown: function(n) {
                                    return t.handleKeyDown(e, n)
                                },
                                className: i
                            }, e))
                        }, t = this, n = this.props, o = n.className, i = n.inputClassName, a = this.state.codes, u = [], l = 0; l < a.length; l++) e(l);
                    return (0, r.jsx)(s.Z, {
                        align: s.Z.Align.CENTER,
                        justify: s.Z.Justify.CENTER,
                        className: o,
                        children: u
                    })
                };
                o.setCodeBlockRef = function(e, t) {
                    this._codeBlockRefs[e] = t
                };
                o.handleChange = function(e, t) {
                    this.state.codes[e] = t;
                    var n = this.getCodeOrFirstEmptyIndex();
                    if ("string" == typeof n) this.submit(n);
                    else {
                        var r = this._codeBlockRefs[n];
                        null == r || r.focus()
                    }
                };
                o.handleKeyDown = function(e, t) {
                    var n = this.state.codes;
                    if (8 === t.which && e > 0 && (null == n[e] || 0 === n[e].length)) {
                        var r = e - 1;
                        n[r] = "";
                        var o = this._codeBlockRefs[r];
                        null == o || o.focus()
                    }
                };
                o.getCodeOrFirstEmptyIndex = function() {
                    for (var e = this.state.codes, t = "", n = 0; n < e.length; n++) {
                        if (isNaN(parseInt(e[n]))) return n;
                        t += e[n]
                    }
                    return t
                };
                o.submit = function(e) {
                    var t = this.props.onSubmit;
                    null == t || t(e)
                };
                return n
            }(o.PureComponent);
            g.defaultProps = {
                count: 6
            };
            const b = g
        },
        606483: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => M
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                s = n(304548),
                u = n(621647),
                c = n(773011),
                l = n(344832),
                f = n(874049),
                d = n(968449),
                p = n(775173),
                h = n(990554),
                v = n(107364),
                y = n(750203),
                m = n(124251),
                g = n(473708),
                b = n(459890),
                E = n.n(b);

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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

            function T(e, t) {
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

            function N(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
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
            var S = function(e) {
                    var t = e.text,
                        n = e.extra;
                    return (0, r.jsxs)(s.FormTitle, {
                        className: E().header,
                        children: [t, n]
                    })
                },
                A = function(e) {
                    var t = e.resolving,
                        n = e.children;
                    return (0, r.jsx)("div", {
                        className: E().content,
                        children: t ? (0, r.jsxs)("div", {
                            className: E().resolvingWrapper,
                            children: [(0, r.jsx)("div", {
                                className: E().resolving,
                                children: (0, r.jsx)("div", {
                                    className: E().resolvingBackground
                                })
                            }), (0, r.jsx)("div", {
                                className: E().resolvingFakeButton,
                                children: (0, r.jsx)("div", {
                                    className: E().resolvingBackground
                                })
                            })]
                        }) : n
                    })
                },
                j = function(e) {
                    var t, n = e.application,
                        o = e.guild,
                        i = e.channel,
                        l = e.onClick,
                        f = e.expired,
                        p = void 0 !== f && f,
                        v = e.user,
                        g = e.className,
                        b = null !== (t = (0, c.ZP)(i)) && void 0 !== t ? t : "",
                        _ = d.QK.useSetting();
                    if (p) return (0, r.jsx)("div", {
                        className: E().guildIconExpired
                    });
                    var O = null == o || null != o.icon,
                        I = a()((0, h.l)(E(), "guildIcon", O ? "Image" : "", null != l ? "Joined" : ""), g);
                    return null != n ? (0, r.jsx)(y.Z, {
                        game: n,
                        onClick: l,
                        size: E().applicationIcon,
                        className: I
                    }) : null != o ? (0, r.jsx)(m.Z, {
                        onClick: l,
                        active: !0,
                        guild: o,
                        className: I,
                        animate: _
                    }) : null != i ? (0, r.jsx)(s.Avatar, {
                        onClick: l,
                        src: (0, u.x)(i),
                        size: s.AvatarSizes.SIZE_56,
                        className: I,
                        "aria-label": b
                    }) : null != v ? (0, r.jsx)(s.Avatar, {
                        onClick: l,
                        src: v.getAvatarURL(null, 56),
                        size: s.AvatarSizes.SIZE_56,
                        className: I,
                        "aria-label": b
                    }) : null
                },
                P = function(e) {
                    var t = e.title,
                        n = e.onClick,
                        o = e.expired,
                        i = e.children,
                        a = (0, r.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            className: (0, h.l)(E(), "inviteDestination", o ? "Expired" : null != n ? "Joined" : ""),
                            children: t
                        });
                    return (0, r.jsxs)(v.Z, {
                        className: E().guildInfo,
                        direction: v.Z.Direction.VERTICAL,
                        justify: v.Z.Justify.CENTER,
                        children: [null == n ? a : (0, r.jsx)(s.Clickable, {
                            onClick: n,
                            children: a
                        }), (0, r.jsx)(s.Text, {
                            tag: "strong",
                            className: E().guildDetail,
                            variant: "text-sm/normal",
                            children: i
                        })]
                    })
                },
                x = function(e) {
                    var t = e.membersOnline,
                        n = e.members,
                        o = [];
                    null != t && t > 0 && o.push((0, r.jsxs)("div", {
                        className: E().statusWrapper,
                        children: [(0, r.jsx)("i", {
                            className: E().statusOnline
                        }), (0, r.jsx)("span", {
                            className: E().count,
                            children: g.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: t
                            })
                        })]
                    }, "onlineCount"));
                    null != n && o.push((0, r.jsxs)("div", {
                        className: E().statusWrapper,
                        children: [(0, r.jsx)("i", {
                            className: E().statusOffline
                        }), (0, r.jsx)("span", {
                            className: E().count,
                            children: g.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                count: n
                            })
                        })]
                    }, "memberCount"));
                    return (0, r.jsx)("div", {
                        className: E().statusCounts,
                        children: o
                    })
                },
                C = function(e) {
                    var t = e.channel,
                        n = e.guild,
                        o = (0, l.KS)(t, n);
                    return null == t || null == o ? null : (0, r.jsxs)("div", {
                        className: E().channel,
                        children: [(0,
                            r.jsx)(o, {
                            className: E().channelIcon,
                            width: 20,
                            height: 20
                        }), (0, r.jsx)("span", {
                            className: E().channelName,
                            children: t.name
                        })]
                    })
                },
                R = function(e) {
                    var t = e.children,
                        n = e.onClick,
                        o = e.className,
                        i = e.isDisabled,
                        u = T(e, ["children", "onClick", "className", "isDisabled"]);
                    return (0, r.jsx)(s.Button, I(function(e) {
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
                    }({}, u), {
                        disabled: i,
                        onClick: n,
                        size: E().buttonSize,
                        className: a()(E().button, o),
                        children: t
                    }))
                };
            R.Colors = s.Button.Colors;
            R.Looks = s.Button.Looks;
            R.defaultProps = {
                className: null,
                isDisabled: !1
            };
            var w = function(e) {
                    var t = e.children,
                        n = e.className,
                        o = e.containerRef;
                    return (0, r.jsx)("div", {
                        ref: o,
                        className: a()(E().wrapper, n),
                        children: t
                    })
                },
                Z = function(e) {
                    var t = e.guild,
                        n = N(o.useState(!1), 2),
                        i = n[0],
                        s = n[1],
                        u = p.ZP.getGuildSplashURL({
                            id: t.id,
                            splash: t.splash,
                            size: 400 * (0, f.x_)()
                        });
                    return null == u ? null : (0, r.jsx)("div", {
                        className: E().inviteSplash,
                        children: (0, r.jsx)("img", {
                            src: u,
                            alt: "",
                            className: a()(E().inviteSplashImage, O({}, E().inviteSplashImageLoaded, i)),
                            onLoad: function() {
                                return s(!0)
                            }
                        })
                    })
                },
                L = function(e) {
                    var t = e.guild;
                    return (0, r.jsx)("div", {
                        className: E().guildNameWrapper,
                        children: (0, r.jsx)("span", {
                            className: E().guildName,
                            children: t.name
                        })
                    })
                },
                D = function(e) {
                    var t = e.guildTemplate;
                    return (0, r.jsx)("div", {
                        className: E().guildNameWrapper,
                        children: (0, r.jsx)("span", {
                            className: E().guildName,
                            children: t.serializedSourceGuild.name
                        })
                    })
                };
            w.Header = S;
            w.Body = A;
            w.Icon = j;
            w.Info = P;
            w.Data = x;
            w.Channel = C;
            w.Button = R;
            w.GuildSplash = Z;
            w.GuildName = L;
            w.GuildTemplateName = D;
            S.displayName = "InviteButton.Header";
            A.displayName = "InviteButton.Body";
            j.displayName = "InviteButton.Icon";
            P.displayName = "InviteButton.Info";
            x.displayName = "InviteButton.Data";
            C.displayName = "InviteButton.Channel";
            R.displayName = "InviteButton.Button";
            Z.displayName = "InviteButton.GuildSplash";
            L.displayName = "InviteButton.GuildName";
            D.displayName = "InviteButton.GuildTemplateName";
            const M = w
        },
        737797: (e, t, n) => {
            "use strict";
            n.d(t, {
                v: () => T,
                Z: () => N
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                s = n(392224),
                u = n(304548),
                c = n(2590),
                l = n(473708),
                f = n(932440),
                d = n.n(f);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

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
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function y(e) {
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

            function g(e, t) {
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

            function b(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
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
            var _, O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
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
                    var n, r = v(e);
                    if (t) {
                        var o = v(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }! function(e) {
                e.TOP = "top";
                e.BOTTOM = "bottom"
            }(_ || (_ = {}));
            var T = {
                    container: function(e, t) {
                        var n = t.isDisabled;
                        return m(y({}, e), {
                            cursor: n ? "not-allowed" : void 0,
                            pointerEvents: void 0,
                            fontSize: 16,
                            fontWeight: 500,
                            width: "100%"
                        })
                    },
                    control: function(e, t) {
                        var n = t.isDisabled,
                            r = t.menuIsOpen;
                        return m(y({}, e), {
                            backgroundColor: "var(--input-background)",
                            borderColor: "var(--input-background)",
                            opacity: n ? .6 : 1,
                            boxShadow: void 0,
                            borderRadius: r ? "4px 4px 0 0" : "4px",
                            minHeight: 40,
                            transition: "border 0.15s ease",
                            cursor: n ? "not-allowed" : void 0,
                            pointerEvents: n ? "none" : void 0,
                            "&:hover": {
                                borderColor: "var(--input-background)"
                            }
                        })
                    },
                    singleValue: function(e, t) {
                        var n = t.isDisabled;
                        return m(y({}, e), {
                            color: "var(--interactive-normal)",
                            opacity: n ? .5 : 1
                        })
                    },
                    input: function(e) {
                        return m(y({}, e), {
                            color: "var(--interactive-normal)"
                        })
                    },
                    menu: function(e) {
                        return m(y({}, e), {
                            backgroundColor: "var(--background-secondary)",
                            border: "1px solid var(--background-tertiary)",
                            borderRadius: "0 0 4px 4px",
                            color: "var(--interactive-normal)",
                            marginTop: -1,
                            marginBottom: -1
                        })
                    },
                    clearIndicator: function(e, t) {
                        var n = t.isDisabled;
                        return m(y({}, e), {
                            color: "var(--interactive-normal)",
                            cursor: n ? void 0 : "pointer",
                            opacity: .3,
                            padding: "8px 0",
                            transform: "scale(0.8)",
                            ":hover": {
                                color: "var(--text-danger)",
                                opacity: 1
                            }
                        })
                    },
                    indicatorsContainer: function(e) {
                        return m(y({}, e), {
                            alignItems: "flex-start"
                        })
                    },
                    dropdownIndicator: function(e, t) {
                        var n = t.isDisabled;
                        return m(y({}, e), {
                            color: "var(--interactive-normal)",
                            cursor: n ? void 0 : "pointer",
                            opacity: n ? .3 : 1,
                            padding: "8px 8px 8px 0",
                            ":hover": {
                                color: "var(--interactive-hover)",
                                opacity: n ? .3 : 1
                            }
                        })
                    },
                    menuList: function(e) {
                        return m(y({}, e), {
                            padding: 0,
                            "&::-webkit-scrollbar": {
                                width: 8,
                                padding: "0px 2px"
                            },
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "var(--scrollbar-thin-thumb)",
                                border: "2px solid transparent",
                                backgroundClip: "padding-box",
                                borderRadius: 4
                            },
                            "&::-webkit-scrollbar-track-piece": {
                                backgroundColor: "transparent",
                                borderColor: "transparent"
                            }
                        })
                    },
                    option: function(e, t) {
                        var n = t.isSelected,
                            r = t.isFocused;
                        return m(y({}, e, n ? {
                            backgroundColor: "var(--background-modifier-selected)",
                            color: "var(--interactive-active)"
                        } : r ? {
                            backgroundColor: "var(--background-modifier-hover)",
                            color: "var(--interactive-hover)"
                        } : {
                            backgroundColor: "transparent",
                            color: "var(--interactive-normal)"
                        }), {
                            cursor: "pointer",
                            display: "flex",
                            padding: 12,
                            alignItems: "center",
                            minHeight: 40,
                            "&:active": {
                                backgroundColor: "var(--background-modifier-selected)",
                                color: "var(--interactive-active)"
                            }
                        })
                    },
                    placeholder: function(e) {
                        return m(y({}, e), {
                            color: "var(--text-muted)"
                        })
                    }
                },
                N = function(e) {
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
                    var t = I(n);

                    function n() {
                        p(this, n);
                        var e;
                        (e = t.apply(this, arguments))._selectRef = o.createRef();
                        e._containerRef = o.createRef();
                        e.state = {
                            isFocused: !1,
                            isOpen: !1
                        };
                        e.handleFocus = function(t) {
                            var n, r;
                            e.setState({
                                isFocused: !0
                            });
                            null === (r = (n = e.props).onFocus) || void 0 === r || r.call(n, t)
                        };
                        e.handleBlur = function(t) {
                            var n, r;
                            e.setState({
                                isFocused: !1
                            });
                            null === (r = (n = e.props).onBlur) || void 0 === r || r.call(n, t)
                        };
                        e.handleKeyDown = function(t) {
                            t.which === c.yXg.ESCAPE && e.state.isOpen && t.stopPropagation()
                        };
                        e.handleMenuOpen = function() {
                            e.setState({
                                isOpen: !0
                            })
                        };
                        e.handleMenuClose = function() {
                            e.setState({
                                isOpen: !1
                            })
                        };
                        return e
                    }
                    var i = n.prototype;
                    i.focus = function() {
                        var e;
                        null === (e = this._selectRef.current) || void 0 === e || e.focus()
                    };
                    i.render = function() {
                        var e = this.props,
                            t = e.className,
                            n = e.selectClassName,
                            o = e.error,
                            i = e.valueRenderer,
                            c = e.optionRenderer,
                            f = e.multiValueRenderer,
                            p = e.options,
                            v = e.value,
                            b = e.autofocus,
                            E = e.disabled,
                            _ = e.clearable,
                            O = e.searchable,
                            I = e.styleOverrides,
                            N = e.isMulti,
                            S = e.placeholder,
                            A = e.filterOption,
                            j = e.closeMenuOnSelect,
                            P = void 0 === j || j,
                            x = y({}, g(e, ["className", "selectClassName", "error", "valueRenderer", "optionRenderer", "multiValueRenderer", "options", "value", "autofocus", "disabled", "clearable", "searchable", "styleOverrides", "isMulti", "placeholder", "filterOption", "closeMenuOnSelect"]));
                        null != b && (x.autoFocus = b);
                        null != E && (x.isDisabled = E);
                        null != _ && (x.isClearable = _);
                        null != O && (x.isSearchable = O);
                        var C = {
                            IndicatorSeparator: function() {
                                return null
                            }
                        };
                        null != c && (C.Option = function(e) {
                            return (0, r.jsx)(s.wx.Option, m(y({}, e), {
                                children: c(e.data)
                            }))
                        });
                        null != i && (C.SingleValue = function(e) {
                            return (0, r.jsx)(s.wx.SingleValue, m(y({}, e), {
                                children: i(e.data)
                            }))
                        });
                        null != f && (C.MultiValue = function(e) {
                            return f(e.data)
                        });
                        var R, w = null != I ? I : T;
                        if (N && Array.isArray(v)) {
                            var Z = {};
                            p.forEach((function(e) {
                                Z[String(e.value)] = e
                            }));
                            R = v.map((function(e) {
                                return Z[String(e)]
                            }))
                        } else R = null != v ? p.find((function(e) {
                            return e.value === v
                        })) : null;
                        return (0, r.jsx)(u.FocusRing, {
                            focused: this.state.isFocused && !this.state.isOpen,
                            ringTarget: this._containerRef,
                            children: (0, r.jsxs)("div", {
                                className: a()(d().select, t, h({}, d().error, null != o)),
                                ref: this._containerRef,
                                children: [(0, r.jsx)(s.ZP, m(y({}, x), {
                                    className: n,
                                    ref: this._selectRef,
                                    isMulti: N,
                                    components: C,
                                    options: p,
                                    styles: w,
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onMenuOpen: this.handleMenuOpen,
                                    onMenuClose: this.handleMenuClose,
                                    closeMenuOnSelect: P,
                                    value: R,
                                    onKeyDown: this.handleKeyDown,
                                    placeholder: null != S ? S : l.Z.Messages.SELECT,
                                    noOptionsMessage: function() {
                                        return l.Z.Messages.NO_RESULTS_FOUND
                                    },
                                    filterOption: A
                                })), null != o ? (0, r.jsx)("div", {
                                    className: d().errorMessage,
                                    children: o
                                }) : null]
                            })
                        })
                    };
                    return n
                }(o.Component);
            N.MenuPlacements = _
        },
        223175: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                a = n(633878);

            function s(e, t, n) {
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

            function l(e, t, n) {
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
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    s = e.color,
                    u = void 0 === s ? "currentColor" : s,
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
                            l(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: u,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: c,
                        d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    l = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    v = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, a.Z)(v)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }))
        },
        457997: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(66541),
                a = n(633878);

            function s(e, t, n) {
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
            const l = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 20 : t,
                    o = e.height,
                    i = void 0 === o ? 20 : o,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    d = e.foreground,
                    p = c(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                    viewBox: "0 0 20 20",
                    children: (0, r.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, r.jsx)("path", {
                            className: d,
                            fill: f,
                            d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                        })
                    })
                }))
            }), i.T)
        },
        23727: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(321689),
                a = n(633878);

            function s(e, t, n) {
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
            const l = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    d = e.foreground,
                    p = c(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                    children: (0, r.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            d: "M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z",
                            className: d,
                            fill: f
                        })
                    })
                }))
            }), i.V)
        },
        816240: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(43338),
                a = n(633878);

            function s(e, t, n) {
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
            const l = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    d = e.foreground,
                    p = c(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: d,
                        d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                        fill: f
                    })
                }))
            }), i.X)
        },
        646161: (e, t, n) => {
            "use strict";
            n.d(t, {
                w4: () => E,
                DW: () => O,
                t3: () => I,
                Gn: () => T
            });
            var r, o = n(131795),
                i = n.n(o),
                a = n(58964),
                s = n(664625),
                u = n(2590);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var l = "Ubuntu",
                f = "Debian",
                d = "Fedora",
                p = "Red Hat",
                h = "SuSE",
                v = "Linux",
                y = "OS X",
                m = "win",
                g = "osx",
                b = "linux";

            function E(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = t ? "/ptb" : "",
                    o = null != n ? "&format=".concat(n) : "";
                return "".concat(u.fzT.DESKTOP).concat(r, "?platform=").concat(e).concat(o)
            }

            function _() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (r = i().os) || void 0 === r ? void 0 : r.family;
                return null == e ? m : -1 !== e.indexOf(l) || -1 !== e.indexOf(f) || -1 !== e.indexOf(d) || -1 !== e.indexOf(p) || -1 !== e.indexOf(h) || -1 !== e.indexOf(v) ? b : -1 !== e.indexOf(y) ? g : m
            }

            function O(e) {
                var t;
                return (c(t = {}, m, "Windows"), c(t, g, "Mac"), c(t, b, "Linux"), t)[_(e)]
            }

            function I() {
                var e = _();
                return E(e, !1, e === b ? "tar.gz" : null)
            }

            function T(e, t, n) {
                var r = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, a.ZP)(null != r ? r : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: s.default.getFingerprint(),
                            attemptId: (0, a.WS)()
                        });
                    case "Android":
                        return (0, a.ZP)(null != r ? r : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: s.default.getFingerprint(),
                            attemptId: (0, a.WS)()
                        });
                    default:
                        return null != r ? r : "https://www.discord.com"
                }
            }
        },
        308921: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => u,
                O: () => c
            });
            var r = n(473903),
                o = n(348592),
                i = n(116094),
                a = n(2590),
                s = n(473708);

            function u(e) {
                switch (e) {
                    case a.evJ.TOO_MANY_USER_GUILDS:
                        var t = r.default.getCurrentUser(),
                            n = i.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? a.tHP : a.DZw;
                        return {
                            title: s.Z.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({
                                quantity: n
                            }), description: s.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION
                        };
                    case a.evJ.GUILD_AT_CAPACITY:
                        return {
                            title: s.Z.Messages.SERVER_IS_CURRENTLY_FULL, description: s.Z.Messages.PLEASE_TRY_AGAIN_LATER
                        };
                    case a.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
                        return {
                            title: s.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING, description: s.Z.Messages.PLEASE_TRY_AGAIN_LATER
                        };
                    default:
                        return null
                }
            }

            function c(e) {
                switch (e) {
                    case a.evJ.TOO_MANY_USER_GUILDS:
                        return s.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
                    case a.evJ.GUILD_AT_CAPACITY:
                        return s.Z.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
                    case a.evJ.INVALID_COUNTRY_CODE:
                        return s.Z.Messages.INVALID_COUNTRY_CODE;
                    case a.evJ.INVALID_CANNOT_FRIEND_SELF:
                        return s.Z.Messages.INVALID_CANNOT_FRIEND_SELF;
                    case a.evJ.INVITES_DISABLED:
                        return s.Z.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({
                            articleLink: o.Z.getArticleURL(a.BhN.INVITE_DISABLED)
                        });
                    default:
                        return s.Z.Messages.INVITE_MODAL_ERROR_DEFAULT
                }
            }
        },
        530562: (e, t, n) => {
            "use strict";
            n.d(t, {
                yb: () => c,
                R4: () => l,
                GY: () => f,
                oE: () => d
            });
            var r = n(441143),
                o = n.n(r),
                i = n(810978),
                a = n(551778),
                s = n(2590),
                u = n(203600);

            function c(e) {
                return function(e) {
                    return e.items.map((function(e) {
                        var t = a.Z.get(e.planId);
                        o()(null != t, "Unable to fetch plan");
                        return t
                    }))
                }(e).map((function(e) {
                    return e.skuId
                }))
            }

            function l(e, t, n) {
                var r = e.getCurrentSubscriptionPlanIdForGroup(n);
                if (e.type === s.NYc.PREMIUM && null == r) return !0;
                o()(null != r, "Current subscription has no plan in group");
                o()(!(r === u.Xh.PREMIUM_YEAR_TIER_1 && t === u.Xh.PREMIUM_MONTH_TIER_2), "Unexpected plan switch");
                return n.indexOf(r) < n.indexOf(t)
            }

            function f(e, t, n) {
                return !l(e, t, n)
            }

            function d(e, t) {
                var n = a.Z.get(e);
                if (null == n) {
                    var r = u.GP[e];
                    o()(null != r, "Missing hardcoded subscriptionPlan: ".concat(e));
                    var s = r.skuId;
                    a.Z.isFetchingForSKU(s) || (0, i.GZ)(s, t)
                }
                return n
            }
        },
        412961: (e, t, n) => {
            "use strict";
            n.d(t, {
                T: () => l,
                s: () => f
            });
            var r = n(384482),
                o = n(784426),
                i = n(664625),
                a = n(120415),
                s = n(2590);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
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
            var l = a.FB ? s.dG4 : function(e, t) {
                    if (!(0, o.DB)()) return r.default.request(s.Etm.DEEP_LINK, {
                        type: e,
                        params: t
                    })
                },
                f = a.FB ? s.dG4 : function(e, t) {
                    if (!i.default.isAuthenticated()) return l(e, c(function(e) {
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
                    }({}, t || {}), {
                        fingerprint: i.default.getFingerprint()
                    }))
                }
        },
        816810: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => r
            });
            var r;
            ! function(e) {
                e[e.IS_GUEST_INVITE = 1] = "IS_GUEST_INVITE";
                e[e.IS_VIEWED = 2] = "IS_VIEWED";
                e[e.IS_ENHANCED = 4] = "IS_ENHANCED"
            }(r || (r = {}));
            new Set([1, 2, 4])
        },
        954358: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => r
            });
            var r;
            ! function(e) {
                e.USER = "user";
                e.ROLE = "role";
                e.CHANNEL = "channel"
            }(r || (r = {}))
        }
    }
]);