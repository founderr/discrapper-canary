(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [46208, 62593], {
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
            var r = n(993231),
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
                ul: () => y
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
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
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

            function y(e, t, n) {
                o.Z.dispatch({
                    type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
                    applicationId: e,
                    branchId: t,
                    launchOptionId: n
                })
            }
        },
        924102: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => ai
            });
            var r = n(785893),
                o = n(667294),
                i = n(517563),
                a = n(993231),
                s = n(289283),
                u = n(202351),
                c = n(744564),
                l = n(84441),
                f = n(563726),
                d = n(667569),
                p = n(270012),
                h = n(113512);

            function y(e) {
                c.Z.dispatch({
                    type: "AUTH_INVITE_UPDATE",
                    invite: e
                })
            }
            var v = n(281110),
                m = n(686874),
                g = n(848285),
                E = n(536038),
                _ = n(558820),
                b = n(645106),
                O = n(2590),
                I = n(473708),
                T = n(518280),
                N = n.n(T);

            function A(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function S(e) {
                S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return S(e)
            }

            function x(e, t) {
                return !t || "object" !== C(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function j(e, t) {
                j = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return j(e, t)
            }
            var C = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function P(e) {
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
                    var n, r = S(e);
                    if (t) {
                        var o = S(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return x(this, n)
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
                    t && j(e, t)
                }(o, e);
                var t = P(o);

                function o() {
                    A(this, o);
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
                        t = (0, b.Z)(this.props.location),
                        n = (0,
                            i.parse)(this.props.location.search);
                    v.ZP.post({
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
                    return (0, r.jsx)(_.ZP, {
                        children: (0, r.jsx)(_.Hh, {})
                    })
                };
                a.renderSuccess = function() {
                    var e = this.props,
                        t = e.defaultRoute,
                        n = e.transitionTo,
                        o = this.state.guild;
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_HEADER
                        }), (0, r.jsx)(_.DK, {
                            children: I.Z.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_BODY.format({
                                guildName: o.name
                            })
                        }), (0, r.jsx)(_.zx, {
                            className: N().marginTop40,
                            onClick: function() {
                                return n(t)
                            },
                            children: I.Z.Messages.CONTINUE_TO_WEBAPP
                        }), (0, r.jsx)(_.zx, {
                            className: N().marginTop8,
                            color: _.zx.Colors.LINK,
                            look: _.zx.Looks.LINK,
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
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Ee, {
                            src: n(709989),
                            className: N().marginBottom20
                        }), (0, r.jsx)(_.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER
                        }), (0, r.jsx)(_.DK, {
                            children: I.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY
                        }), (0, r.jsx)(_.zx, {
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
            const w = u.ZP.connectStores([E.Z], (function() {
                return {
                    defaultRoute: E.Z.defaultRoute
                }
            }))(R);
            var Z = n(294184),
                D = n.n(Z),
                M = n(426797),
                L = n(53540),
                U = n(560837),
                G = n(78501),
                k = n(83623),
                B = n(58118),
                F = n(913957),
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
                    y = h[0],
                    v = h[1],
                    m = K(o.useState(null), 2),
                    g = m[0],
                    E = m[1],
                    b = K(o.useState(null), 2),
                    O = b[0],
                    T = b[1],
                    A = (0, u.e7)([U.Z], (function() {
                        return U.Z.getCountryCode()
                    })),
                    S = A.code.split(" ")[0],
                    x = (e = Y((function() {
                        var e;
                        return W(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    t.trys.push([0, 2, , 3]);
                                    return [4, M.Z.resendCode(i)];
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
                    j = function() {
                        var e = Y((function() {
                            var e, t;
                            return W(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        p(!0);
                                        n.label = 1;
                                    case 1:
                                        n.trys.push([1, 3, 4, 5]);
                                        return [4, M.Z.verifyPhone(S + i, c)];
                                    case 2:
                                        e = n.sent().token;
                                        E(null);
                                        T(null);
                                        v(!0);
                                        M.Z.validatePhoneForSupport(e);
                                        return [3, 5];
                                    case 3:
                                        if ((t = n.sent()).body.message) {
                                            E(null);
                                            T(t.body.message)
                                        } else {
                                            E(t.body.phone);
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
                    C = (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Ee, {
                            src: n(882253)
                        }), (0, r.jsxs)(_.Dx, {
                            className: D()(N().marginTop20, V().flex, V().justifyCenter, V().alignCenter),
                            children: [I.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED, (0, r.jsx)(k.Z, {
                                className: N().marginLeft8
                            })]
                        })]
                    });
                return y ? C : (0, r.jsxs)(_.ZP, {
                    children: [(0, r.jsx)(_.Dx, {
                        children: I.Z.Messages.ENTER_CODE
                    }), (0, r.jsx)(_.DK, {
                        className: N().marginTop8,
                        children: I.Z.Messages.VERIFY_PHONE_FOR_SUPPORT
                    }), (0, r.jsxs)(_.gO, {
                        className: N().marginTop20,
                        children: [(0, r.jsx)(G.Z, {
                            label: I.Z.Messages.FORM_LABEL_PHONE_NUMBER,
                            alpha2: A.alpha2,
                            countryCode: S,
                            value: i,
                            autoComplete: "off",
                            spellCheck: "false",
                            onChange: a,
                            forceMode: L.Nz.PHONE,
                            error: g
                        }), (0, r.jsx)(_.II, {
                            className: N().marginTop20,
                            label: I.Z.Messages.CONFIRMATION_CODE,
                            value: c,
                            onChange: l,
                            maxLength: B.z,
                            error: O
                        }), (0, r.jsx)(_.zx, {
                            size: _.zx.Sizes.SMALL,
                            look: _.zx.Looks.LINK,
                            onClick: x,
                            children: I.Z.Messages.RESEND_CODE
                        }), (0, r.jsx)(_.zx, {
                            className: N().marginTop20,
                            onClick: j,
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
                var r = n.prototype;
                r.getState = function() {
                    return {
                        verifySuccess: ae,
                        verifyErrors: se,
                        redirectGuildId: ue
                    }
                };
                r.__getLocalVars = function() {
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
                ye = n(125333),
                ve = n(58964),
                me = n(97245),
                ge = n(664625),
                Ee = n(652591),
                _e = n(877815);

            function be(e) {
                var t = function(e) {
                        var t, n = null === (t = he().os) || void 0 === t ? void 0 : t.family;
                        if ("Android" === n || "iOS" === n) {
                            var r = ge.default.getFingerprint(),
                                o = (0, ve.WS)();
                            de()(null != e, "generateAppPath: guildId cannot be null");
                            return (0, ve.ZP)((0, ye.z0)(e), {
                                utmSource: "verify_hub_email",
                                fingerprint: r,
                                attemptId: o
                            })
                        }
                        return "discord://"
                    }(e),
                    n = (0, ve.zS)(t);
                null != n && Ee.default.track(O.rMx.DEEP_LINK_CLICKED, {
                    fingerprint: (0, me.K)(n.fingerprint),
                    attempt_id: n.attemptId,
                    source: n.utmSource
                });
                _e.Z.launch(t, (function(e) {
                    e || (0, Q.dL)(E.Z.fallbackRoute)
                }))
            }
            var Oe = n(539889),
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
            var Ae = n(641453),
                Se = n(248088),
                xe = n(882723),
                je = n(795308),
                Ce = n(107364),
                Pe = n(746850),
                Re = n.n(Pe);

            function we(e) {
                var t = e.text,
                    o = e.buttonCta,
                    i = e.onClick;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(_.Ee, {
                        src: n(819361)
                    }), (0, r.jsx)(_.Dx, {
                        className: D()(N().marginTop20, N().marginBottom8, V().flexCenter),
                        children: I.Z.Messages.DISCORD_DESC_SHORT
                    }), (0, r.jsx)(_.DK, {
                        className: N().marginBottom40,
                        children: I.Z.Messages.DISCORD_DESC_LONG
                    }), (0, r.jsxs)(xe.Card, {
                        className: Re().card,
                        type: xe.Card.Types.CUSTOM,
                        children: [(0, r.jsx)("img", {
                            alt: "",
                            className: Re().cardAccentLeft,
                            src: n(637849)
                        }), (0, r.jsx)("img", {
                            alt: "",
                            className: Re().cardAccentRight,
                            src: n(837307)
                        }), (0, r.jsxs)(Ce.Z, {
                            className: Re().cardContents,
                            direction: Ce.Z.Direction.VERTICAL,
                            align: Ce.Z.Align.STRETCH,
                            grow: 0,
                            children: [(0, r.jsx)(xe.Text, {
                                tag: "strong",
                                className: Re().buttonTitle,
                                variant: "text-md/normal",
                                style: {
                                    color: je.Z.unsafe_rawColors.PRIMARY_300.css
                                },
                                children: t
                            }), (0, r.jsx)(_.zx, {
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
                return (0, r.jsx)(_.ZP, {
                    theme: i,
                    children: (0, r.jsx)(we, {
                        text: t,
                        buttonCta: n,
                        onClick: a
                    })
                })
            }
            var De = n(677681),
                Me = n(260561),
                Le = (0, Me.B)({
                    kind: "user",
                    id: "2023-07_friend_finder_auto_redirect_invite",
                    label: "Friend Finder Auto Redirect Invite Experiment",
                    defaultConfig: {
                        enabled: !1,
                        redirectDelayMs: 0
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable auto redirect when reaching an invite page for friends",
                        config: {
                            enabled: !0,
                            redirectDelayMs: 0
                        }
                    }, {
                        id: 2,
                        label: "Enable redirect after 2.5 seconds when reaching an invite page for friends",
                        config: {
                            enabled: !0,
                            redirectDelayMs: 2500
                        }
                    }]
                }),
                Ue = n(730381),
                Ge = n.n(Ue),
                ke = (0, Me.B)({
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
                Be = ((0, Me.B)({
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
                }), (0, Me.B)({
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
                Fe = n(567403);
            const Ve = function(e) {
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
                return (0, u.e7)([Fe.Z], (function() {
                    var t;
                    return null != Fe.Z.getGuild(null == e || null === (t = e.guild) || void 0 === t ? void 0 : t.id)
                })) || n || null == t ? null : t
            };
            var He = n(777883),
                ze = n.n(He),
                Ye = function(e) {
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
                    var o = Ge()(t).fromNow(!0);
                    return (0, r.jsx)("div", {
                        className: D()(ze().container, n),
                        children: (0, r.jsxs)("div", {
                            className: ze().expirationContainer,
                            children: [(0, r.jsx)(Be.Z, {
                                color: je.Z.unsafe_rawColors.WHITE_500.css,
                                width: 14,
                                height: 14,
                                className: ze().clock
                            }), (0, r.jsx)(xe.Text, {
                                variant: "text-sm/normal",
                                color: "header-primary",
                                children: I.Z.Messages.INVITE_EXPIRATION_NOTICE.format({
                                    duration: o
                                })
                            })]
                        })
                    })
                };
            const Ke = function(e) {
                var t = e.invite,
                    n = e.className,
                    o = Ve(t);
                return null == o ? null : (0, r.jsx)(Ye, {
                    expiredAt: o,
                    className: n
                })
            };
            var We = n(757753),
                qe = n(775173),
                Xe = n(72580),
                Je = n(641277),
                $e = n(206986),
                Qe = n(98265),
                et = n(749565),
                tt = n(718634),
                nt = n(75025),
                rt = n(114505),
                ot = n.n(rt),
                it = function(e) {
                    var t, n, r = {
                        onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
                        memberCount: null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0
                    };
                    return 0 === r.memberCount && 0 === r.memberCount ? null : r
                },
                at = function(e) {
                    return e.target_type === tt.Iq.STREAM && null != e.target_user
                },
                st = function(e) {
                    var t;
                    return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === O.d4z.GROUP_DM
                },
                ut = function(e) {
                    return null == e.channel && null == e.guild && null != e.inviter
                },
                ct = function(e) {
                    return e.state === O.r2o.ACCEPTED
                },
                lt = function(e) {
                    return null != e.guild_scheduled_event
                },
                ft = function(e) {
                    return !lt(e) && (!!ut(e) || null != e.inviter && !ct(e) && ! function(e) {
                        var t, n = it(e);
                        return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > 100
                    }(e))
                },
                dt = function(e) {
                    var t = e.guild,
                        n = e.user,
                        o = e.application;
                    return null != o ? (0, r.jsx)(Je.Z, {
                        className: ot().appIcon,
                        game: o,
                        size: ot().appIconSize
                    }) : null != n ? (0, r.jsx)(_.qE, {
                        src: n.getAvatarURL(void 0, 100),
                        size: xe.AvatarSizes.DEPRECATED_SIZE_100,
                        className: ot().avatar
                    }) : null != t ? (0, r.jsx)(_.Vj, {
                        guild: t,
                        size: _.Vj.Sizes.LARGER,
                        className: ot().guildIcon,
                        animate: !0
                    }) : null
                };

            function pt(e) {
                var t, n = e.invite,
                    o = e.textClassName,
                    i = e.className,
                    a = it(n);
                return null == a || ft(n) || (null == n || null === (t = n.guild) || void 0 === t ? void 0 : t.id) === nt.fQ ? null : (0, r.jsx)(_.EJ, {
                    className: D()(ot().activityCount, i),
                    online: a.onlineCount,
                    total: a.memberCount,
                    textClassName: o,
                    flat: !0
                })
            }

            function ht(e) {
                var t = e.invite,
                    n = e.showBigUserIcon,
                    i = o.useMemo((function() {
                        return n ? null : at(t) && null != t.target_user ? qe.ZP.getUserAvatarURL(t.target_user) : ft(t) && null != t.inviter ? qe.ZP.getUserAvatarURL(t.inviter) : null
                    }), [t, n]),
                    a = I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN;
                if (st(t)) {
                    var s, u;
                    a = null != (null === (s = t.channel) || void 0 === s ? void 0 : s.name) && null != (null === (u = t.inviter) || void 0 === u ? void 0 : u.username) ? I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM_BY_USER.format({
                        username: t.inviter.username
                    }) : I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM
                } else at(t) && null != t.target_user ? a = I.Z.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                    username: t.target_user.username
                }) : ct(t) ? a = I.Z.Messages.INSTANT_INVITE_YOU_ARE_ALREADY_A_MEMBER_OF : ft(t) && null != t.inviter && (a = I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_BY_USER.format({
                    username: et.ZP.getFormattedName(t.inviter)
                }));
                return (0, r.jsxs)("div", {
                    className: ot().inviteJoinContainer,
                    children: [null != i && (0, r.jsx)("div", {
                        className: ot().inviterIconWrapper,
                        children: (0, r.jsx)(_.qE, {
                            src: i,
                            size: xe.AvatarSizes.SIZE_24
                        })
                    }), (0, r.jsx)(_.DK, {
                        className: ot().inviteJoinSubTitle,
                        children: a
                    })]
                })
            }

            function yt(e) {
                var t, n, o, i = e.invite,
                    a = e.user,
                    s = e.guild,
                    u = e.channel,
                    c = e.application,
                    l = e.autoRedirectInviteEnabled,
                    f = e.showBigUserIcon;
                if (null != s) {
                    f && null == c && (t = (0, r.jsx)(_.Vj, {
                        guild: s,
                        size: _.Vj.Sizes.SMALL
                    }));
                    n = s.name;
                    if (null != c) {
                        n = c.name;
                        o = (0, r.jsxs)("div", {
                            className: ot().inviteJoinContainer,
                            children: [(0, r.jsx)(_.DK, {
                                className: ot().appIn,
                                children: I.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
                            }), (0,
                                r.jsxs)("div", {
                                className: ot().guildContainer,
                                children: [(0, r.jsx)(_.Vj, {
                                    guild: s,
                                    size: _.Vj.Sizes.SMALL
                                }), (0, r.jsx)(Qe.Z, {
                                    className: ot().appGuildName,
                                    color: Qe.Z.Colors.CUSTOM,
                                    tag: "span",
                                    size: Qe.Z.Sizes.SIZE_24,
                                    children: s.name
                                })]
                            })]
                        })
                    }
                } else if (null != u) {
                    if (null == a) throw new Error("no inviter in group DM invite");
                    var d = et.ZP.getFormattedName(a);
                    if (null != u.name && "" !== u.name) {
                        n = u.name;
                        null != u.icon && (t = (0, r.jsx)(_.MC, {
                            channel: u,
                            size: xe.AvatarSizes.SIZE_32
                        }))
                    } else n = d
                } else if (null != a) {
                    var p = et.ZP.getFormattedName(a);
                    n = I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                        username: p
                    });
                    o = (0, r.jsx)(_.DK, {
                        className: ot().directInviteSubTitle,
                        children: I.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                            username: p
                        })
                    });
                    l && null != i.friends_count && i.friends_count > 0 && (o = (0, r.jsx)(_.DK, {
                        className: ot().directInviteSubTitle,
                        children: I.Z.Messages.INSTANT_INVITE_FRIENDS_COUNT.format({
                            count: i.friends_count
                        })
                    }))
                }
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(_.Dx, {
                        className: ot().title,
                        children: [null != s ? (0, r.jsx)($e.Z, {
                            guild: s,
                            className: ot().guildBadge,
                            tooltipPosition: "left"
                        }) : null, t, n]
                    }), o]
                })
            }
            var vt = n(451936),
                mt = n(382060),
                gt = n(722406),
                Et = n(269300),
                _t = n(220109),
                bt = n(621634),
                Ot = n(124251),
                It = n(248304),
                Tt = n.n(It);

            function Nt(e) {
                var t, n = e.guildScheduledEvent,
                    o = e.channel,
                    i = e.onAcceptInvite,
                    a = e.isSubmitting,
                    s = (0, Et.xt)(n),
                    u = (0, Et.Z2)(n);
                return (0, r.jsxs)("div", {
                    className: Tt().guildEventCard,
                    children: [(0, r.jsx)(_t.ZP, {
                        userCount: n.user_count,
                        startTime: n.scheduled_start_time,
                        name: n.name,
                        description: null !== (t = n.description) && void 0 !== t ? t : void 0,
                        isActive: s,
                        isEnded: u,
                        headerVariant: "heading-md/medium",
                        descriptionClassName: Tt().channelDescription,
                        guildId: n.guild_id,
                        eventType: n.entity_type
                    }), null != o && (0, r.jsx)("div", {
                        className: Tt().channelInfo,
                        children: (0, r.jsx)(bt.Z, {
                            guildScheduledEvent: n,
                            channel: o
                        })
                    }), (0, r.jsx)(xe.Button, {
                        className: Tt().acceptButton,
                        color: xe.Button.Colors.GREEN,
                        onClick: i,
                        submitting: a,
                        children: I.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
                    })]
                })
            }

            function At(e) {
                var t, n = e.invite,
                    o = null != n.guild ? new g.Z(n.guild) : null;
                if (null == o) return null;
                var i = null !== (t = o.description) && void 0 !== t ? t : "";
                return (0, r.jsxs)("div", {
                    className: Tt().guildInfoCard,
                    children: [(0, r.jsx)(xe.Heading, {
                        className: Tt().presentedBy,
                        variant: "text-sm/medium",
                        children: I.Z.Messages.STAGE_INVITE_GUILD_HEADER
                    }), (0, r.jsxs)("div", {
                        className: Tt().guildContainer,
                        children: [(0, r.jsx)(Ot.Z, {
                            guild: o,
                            active: !0,
                            size: Ot.Z.Sizes.MEDIUM
                        }), (0, r.jsxs)("div", {
                            className: Tt().guildDetailsContanier,
                            children: [(0, r.jsxs)(xe.Text, {
                                className: Tt().guildName,
                                color: "header-primary",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [o.name, (0, r.jsx)($e.Z, {
                                    guild: o,
                                    className: Tt().guildBadge,
                                    tooltipPosition: "left"
                                })]
                            }), (0, r.jsx)(pt, {
                                invite: n,
                                textClassName: Tt().guildInfoMemberCountText,
                                className: Tt().guildInfoMemberCount
                            })]
                        })]
                    }), i.length > 0 && (0, r.jsx)("details", {
                        className: Tt().guildDescriptionContainer,
                        children: (0, r.jsx)(xe.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: i
                        })
                    })]
                })
            }

            function St(e) {
                var t = e.invite,
                    n = e.channel,
                    o = e.isSubmitting,
                    i = e.onAcceptInvite,
                    a = t.guild_scheduled_event;
                return null != a ? (0, r.jsx)(Nt, {
                    guildScheduledEvent: a,
                    channel: n,
                    isSubmitting: o,
                    onAcceptInvite: i
                }) : null
            }
            var xt = n(611072),
                jt = n.n(xt);

            function Ct(e, t, n) {
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
                        Ct(e, t, n[t])
                    }))
                }
                return e
            }

            function Rt(e, t) {
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

            function wt(e) {
                var t = e.invite,
                    n = e.onAcceptInvite,
                    o = e.disableUser,
                    i = void 0 !== o && o,
                    a = Le.useExperiment({
                        location: "Mobile Invite Landing Page"
                    }, {
                        autoTrackExposure: !0
                    }).enabled;
                if (null == t) return null;
                var s = null != t.guild ? new g.Z(t.guild) : null,
                    u = null != t.channel ? (0, mt.jD)(t.channel) : null,
                    c = null != t.target_application ? new vt.Z(t.target_application) : null,
                    l = i || null == t.inviter ? null : new gt.Z(t.inviter),
                    f = !(null != t.approximate_member_count && t.approximate_member_count > 100 || null != s && s.hasFeature(O.oNc.COMMUNITY)) && null != l && st(t),
                    d = function(e) {
                        switch (e.state) {
                            case O.r2o.ACCEPTING:
                            case O.r2o.APP_OPENING:
                                return !0;
                            default:
                                return !1
                        }
                    }(t),
                    p = {
                        invite: t,
                        user: l,
                        guild: s,
                        channel: u,
                        application: c
                    };
                return lt(t) ? (0, r.jsx)(St, {
                    invite: t,
                    channel: u,
                    isSubmitting: d,
                    onAcceptInvite: n
                }) : (0, r.jsxs)("div", {
                    className: jt().container,
                    children: [(0, r.jsx)(dt, {
                        application: c,
                        guild: s,
                        user: f || ut(t) ? l : null
                    }), ut(t) ? null : (0, r.jsx)(ht, Rt(Pt({}, p), {
                        showBigUserIcon: f
                    })), (0, r.jsx)(yt, Rt(Pt({}, p), {
                        autoRedirectInviteEnabled: a,
                        showBigUserIcon: f
                    })), (0, r.jsx)(pt, Pt({}, p)), (0, r.jsx)(xe.Button, {
                        onClick: n,
                        submitting: d,
                        className: jt().acceptButton,
                        children: a && t.is_contact ? I.Z.Messages.INSTANT_INVITE_SEE_MESSAGES : I.Z.Messages.INSTANT_INVITE_ACCEPT
                    }), a && (0, r.jsx)(_.DK, {
                        className: jt().redirectingText,
                        children: I.Z.Messages.INSTANT_INVITE_REDIRECTING
                    })]
                })
            }
            var Zt = n(553073),
                Dt = n.n(Zt);

            function Mt(e, t) {
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

            function Ut(e) {
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

            function Gt(e, t) {
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

            function kt(e, t) {
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

            function Bt(e, t) {
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
                    if ("string" == typeof e) return Mt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Mt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ft;

            function Vt(e, t, n) {
                var r, o, i;
                null == e || e.preventDefault();
                Ee.default.track(O.rMx.INVITE_APP_OPENED, {
                    invite_code: (0, Ae.jX)(t),
                    guild_id: null == n || null === (r = n.guild) || void 0 === r ? void 0 : r.id,
                    channel_id: null == n || null === (o = n.channel) || void 0 === o ? void 0 : o.id,
                    inviter_id: null == n || null === (i = n.inviter) || void 0 === i ? void 0 : i.id
                });
                var a = null != n && n.state !== O.r2o.EXPIRED && n.state !== O.r2o.BANNED ? t : void 0,
                    s = ge.default.getFingerprint(),
                    u = null != s ? s : ge.default.getId(),
                    c = null != n && null != (null == n ? void 0 : n.type) ? Number(null == n ? void 0 : n.type) : void 0;
                d.Z.openApp(a, undefined, u, void 0, c)
            }

            function Ht() {
                return (0, r.jsx)("div", {
                    className: Dt().centerFlex,
                    children: (0, r.jsx)(xe.Spinner, {})
                })
            }! function(e) {
                e[e.LOADING = 0] = "LOADING";
                e[e.DETAILS = 1] = "DETAILS";
                e[e.ERROR = 2] = "ERROR"
            }(Ft || (Ft = {}));
            var zt = function(e) {
                var t = null == (null == e ? void 0 : e.state) && null == (null == e ? void 0 : e.channel);
                if (null == e || null == e.state || t) return Ft.LOADING;
                var n = e.state;
                switch (n) {
                    case O.r2o.RESOLVED:
                    case O.r2o.ACCEPTED:
                    case O.r2o.APP_NOT_OPENED:
                    case O.r2o.APP_OPENED:
                    case O.r2o.ACCEPTING:
                    case O.r2o.APP_OPENING:
                        return Ft.DETAILS;
                    case O.r2o.EXPIRED:
                    case O.r2o.BANNED:
                    case O.r2o.ERROR:
                        return Ft.ERROR;
                    case O.r2o.RESOLVING:
                        return Ft.LOADING;
                    default:
                        (0, Xe.vE)(n)
                }
            };

            function Yt(e) {
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

            function Kt(e) {
                var t = e.children,
                    n = e.cardChildren,
                    i = e.startAnimHeightPx,
                    a = e.innerStyle,
                    s = kt(e, ["children", "cardChildren", "startAnimHeightPx", "innerStyle"]).invite,
                    u = Bt(o.useState(zt(s)), 2),
                    c = u[0],
                    l = u[1],
                    f = (0, De.Z)(),
                    d = f.ref,
                    p = f.height,
                    h = (0, Se.useSpring)({
                        height: "".concat(null != p && 0 !== p ? p : i, "px"),
                        config: Se.config.stiff
                    });
                o.useEffect((function() {
                    var e = zt(s);
                    e !== c && l(e)
                }), [s, c]);
                return (0, r.jsxs)(Se.animated.div, {
                    className: Dt().inviteCard,
                    style: h,
                    children: [(0, r.jsx)(Se.animated.div, {
                        className: Dt().inviteChildContainer,
                        style: h,
                        children: (0, r.jsx)("section", {
                            ref: d,
                            className: null == a ? void 0 : a(c),
                            children: t(c)
                        })
                    }), n]
                })
            }

            function Wt(e) {
                var t = e.invite;
                if (null == t || !lt(t)) return null;
                return (0, r.jsx)(Kt, Gt(Ut({
                    startAnimHeightPx: 0,
                    innerStyle: function() {
                        return Dt().guildInfoInner
                    },
                    cardChildren: (0, r.jsx)(Ke, {
                        invite: t,
                        className: Dt().expirationNotice
                    })
                }, e), {
                    children: function(e) {
                        return function(e) {
                            return null == t ? null : e === Ft.DETAILS ? (0, r.jsx)(At, {
                                invite: t
                            }) : null
                        }(e)
                    }
                }))
            }

            function qt(e) {
                var t, n = e.invite,
                    o = null != n && lt(n),
                    i = (Lt(t = {}, Ft.DETAILS, Dt().inviteCardInner), Lt(t, Ft.ERROR, Dt().inviteCardInnerError), Lt(t, Ft.LOADING, Dt().inviteCardInnerLoading), t);
                return (0, r.jsx)(Kt, Gt(Ut({
                    startAnimHeightPx: 200,
                    innerStyle: function(e) {
                        return i[e]
                    },
                    cardChildren: o ? null : (0, r.jsx)(Ke, {
                        invite: n,
                        className: Dt().expirationNotice
                    })
                }, e), {
                    children: function(t) {
                        return function(t) {
                            if (null == n) return (0, r.jsx)(Ht, {});
                            switch (t) {
                                case Ft.DETAILS:
                                    return (0, r.jsx)(wt, Gt(Ut({}, e), {
                                        invite: n
                                    }));
                                case Ft.ERROR:
                                    return (0, r.jsx)(Yt, Gt(Ut({}, e), {
                                        invite: n
                                    }));
                                default:
                                    return (0, r.jsx)(Ht, {})
                            }
                        }(t)
                    }
                }))
            }

            function Xt(e) {
                var t = e.invite,
                    n = e.onAcceptInvite,
                    o = (null != t ? t : {}).guild,
                    i = {};
                if (null != (null == o ? void 0 : o.splash)) {
                    var a = qe.ZP.getGuildSplashURL({
                        id: o.id,
                        splash: o.splash
                    });
                    if (null != a) {
                        i.backgroundImage = "url(".concat(a, ")");
                        i.backgroundSize = "cover"
                    }
                }
                return (0, r.jsxs)(_.ZP, {
                    theme: O.BRd.DARK,
                    className: Dt().splashBackground,
                    style: i,
                    contentClassName: Dt().centerAuthBoxContent,
                    children: [(0, r.jsx)(qt, Gt(Ut({}, e), {
                        onAcceptInvite: n
                    })), (0, r.jsx)(Wt, Ut({}, e))]
                })
            }
            var Jt = n(821229),
                $t = n(70321),
                Qt = n(3564),
                en = n(130585),
                tn = n(790690);
            const nn = function() {
                return Date.now() - tn.mb
            };
            var rn = n(872691),
                on = n(928975),
                an = n(734589);

            function sn(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function un(e) {
                un = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return un(e)
            }

            function cn(e, t) {
                return !t || "object" !== fn(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function ln(e, t) {
                ln = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return ln(e, t)
            }
            var fn = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function dn(e) {
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
                    var n, r = un(e);
                    if (t) {
                        var o = un(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return cn(this, n)
                }
            }
            u.ZP.initialize();
            var pn = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && ln(e, t)
                }(o, e);
                var t = dn(o);

                function o() {
                    sn(this, o);
                    return t.apply(this, arguments)
                }
                var i = o.prototype;
                i.componentDidMount = function() {
                    var e = (0,
                        b.Z)(this.props.location);
                    null != e && l.Z.authorizeIPAddress(e);
                    (0, m.e)("authorize_ip")
                };
                i.renderLoginButton = function() {
                    if ("Android" === he().os.family || "iOS" === he().os.family) return null;
                    var e = this.props.transitionTo;
                    return (0, r.jsx)(_.zx, {
                        onClick: function() {
                            return e(O.Z5c.LOGIN)
                        },
                        children: I.Z.Messages._LOGIN
                    })
                };
                i.renderFailed = function() {
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)("img", {
                            alt: "",
                            src: n(955568),
                            className: N().marginBottom20
                        }), (0, r.jsx)(_.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.AUTHORIZATION_EXPIRED
                        }), (0, r.jsx)(_.DK, {
                            className: N().marginBottom40,
                            children: I.Z.Messages._AUTH_EXPIRED_SUGGESTION
                        }), this.renderLoginButton()]
                    })
                };
                i.renderSucceeded = function() {
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)("img", {
                            alt: "",
                            src: n(230978),
                            className: N().marginBottom20
                        }), (0, r.jsx)(_.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.IP_AUTHORIZATION_SUCCEEDED
                        }), (0, r.jsx)(_.DK, {
                            className: N().marginBottom40,
                            children: I.Z.Messages._AUTH_IP_AUTH_SUCCEEDED_SUGGESTION
                        }), this.renderLoginButton()]
                    })
                };
                i.renderDefault = function() {
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Hh, {}), (0, r.jsx)(_.Dx, {
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
            pn.defaultProps = {
                transitionTo: function(e) {
                    return n.g.location.assign(e)
                }
            };
            const hn = u.ZP.connectStores([ge.default], (function() {
                return {
                    verifyFailed: ge.default.didVerifyFail(),
                    verifySucceeded: ge.default.didVerifySucceed()
                }
            }))(pn);
            const yn = function(e) {
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
                    var e = (0, b.Z)(t);
                    null != e && l.Z.authorizePayment(e);
                    (0, m.e)("authorize_payment")
                }), [t]);
                return a ? (0, r.jsxs)(_.ZP, {
                    children: [(0, r.jsx)("img", {
                        alt: "",
                        src: n(639915),
                        className: N().marginBottom20
                    }), (0,
                        r.jsx)(_.Dx, {
                        className: N().marginBottom8,
                        children: I.Z.Messages.PAYMENT_AUTHORIZATION_EXPIRED
                    }), (0, r.jsx)(_.DK, {
                        className: N().marginBottom40,
                        children: I.Z.Messages.PAYMENT_AUTH_EXPIRED_SUGGESTION
                    })]
                }) : s ? (0, r.jsxs)(_.ZP, {
                    children: [(0, r.jsx)("img", {
                        alt: "",
                        src: n(143613),
                        className: N().marginBottom20
                    }), (0, r.jsx)(_.Dx, {
                        className: N().marginBottom8,
                        children: I.Z.Messages.PAYMENT_AUTHORIZATION_SUCCEEDED
                    }), (0, r.jsx)(_.DK, {
                        className: N().marginBottom40,
                        children: I.Z.Messages.PAYMENT_AUTH_SUCCEEDED_SUGGESTION
                    })]
                }) : (0, r.jsxs)(_.ZP, {
                    children: [(0, r.jsx)(_.Hh, {}), (0, r.jsx)(_.Dx, {
                        children: I.Z.Messages.PAYMENT_AUTHORIZING
                    })]
                })
            };
            var vn = n(412961),
                mn = n(384482),
                gn = n(926543);

            function En(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _n(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function bn(e, t) {
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
                    if ("string" == typeof e) return En(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return En(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var On, In = function(e, t) {
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
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
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
            }(On || (On = {}));
            const Tn = function(e) {
                var t = e.match,
                    n = e.location,
                    i = e.attemptDeepLink,
                    a = bn(o.useState(On.INITIAL), 2),
                    s = a[0],
                    u = a[1];
                o.useEffect((function() {
                    mn.default.once("connected", (function() {
                        u(On.RPC_CONNECTED)
                    }));
                    mn.default.once("disconnected", (function() {
                        (0, Q.uL)((0, gn.M)())
                    }));
                    mn.default.connect()
                }), []);
                o.useEffect((function() {
                    if (s === On.INITIAL) {
                        var e = setTimeout((function() {
                            return (0, Q.uL)((0, gn.M)())
                        }), 3e3);
                        return function() {
                            return clearTimeout(e)
                        }
                    }
                }), [s]);
                var c, l, f = o.useCallback((l = (c = function(e, t) {
                    var n;
                    return In(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                r.trys.push([0, 2, , 3]);
                                u(On.APP_OPENING);
                                return [4, i(e, t)];
                            case 1:
                                r.sent();
                                u(On.APP_OPENED);
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
                            _n(o, n, r, i, a, "next", e)
                        }

                        function a(e) {
                            _n(o, n, r, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }), function(e, t) {
                    return l.apply(this, arguments)
                }), [i]);
                if ((0, Q.DB)()) return null;
                switch (s) {
                    case On.RPC_CONNECTED:
                        return (0, r.jsxs)(_.ZP, {
                            children: [(0, r.jsx)(_.Dx, {
                                className: N().marginBottom8,
                                children: I.Z.Messages.DEEPLINK_BROWSER_TITLE
                            }), (0, r.jsx)(_.DK, {
                                children: I.Z.Messages.DEEPLINK_BROWSER_PROMPT
                            }), (0, r.jsx)(_.zx, {
                                className: N().marginTop40,
                                onClick: function() {
                                    return f(t, n)
                                },
                                children: I.Z.Messages.OPEN_IN_APP
                            }), (0, r.jsx)(_.zx, {
                                className: D()(N().marginTop8, N().marginCenterHorz),
                                color: _.zx.Colors.LINK,
                                look: _.zx.Looks.LINK,
                                onClick: function() {
                                    return (0, Q.uL)((0, gn.M)())
                                },
                                children: I.Z.Messages.CONTINUE_IN_BROWSER
                            })]
                        });
                    case On.INITIAL:
                    case On.APP_OPENING:
                        return (0, r.jsxs)(_.ZP, {
                            children: [(0, r.jsx)(_.Dx, {
                                children: I.Z.Messages.APP_OPENING
                            }), (0, r.jsx)(_.Hh, {})]
                        });
                    case On.APP_OPENED:
                        return (0, r.jsxs)(_.ZP, {
                            children: [(0, r.jsx)(_.Dx, {
                                className: N().marginBottom8,
                                children: I.Z.Messages.APP_OPENED_TITLE
                            }), (0, r.jsx)(_.DK, {
                                children: I.Z.Messages.DEEPLINK_BROWSER_APP_OPENED
                            })]
                        })
                }
            };

            function Nn(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            var An = function(e, t) {
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
            const Sn = function(e) {
                var t, n, o = e.match,
                    i = e.location,
                    a = (n = (t = function(e, t) {
                        return An(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, (0, vn.s)(O.jEp.CHANNEL, {
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
                                Nn(i, r, o, a, s, "next", e)
                            }

                            function s(e) {
                                Nn(i, r, o, a, s, "throw", e)
                            }
                            a(void 0)
                        }))
                    }), function(e, t) {
                        return n.apply(this, arguments)
                    });
                return (0, r.jsx)(Tn, {
                    match: o,
                    location: i,
                    attemptDeepLink: a
                })
            };
            var xn = n(42261);

            function jn(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Cn(e) {
                Cn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Cn(e)
            }

            function Pn(e, t) {
                return !t || "object" !== wn(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Rn(e, t) {
                Rn = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Rn(e, t)
            }
            var wn = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Zn(e) {
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
                    var n, r = Cn(e);
                    if (t) {
                        var o = Cn(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Pn(this, n)
                }
            }
            u.ZP.initialize();
            var Dn = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Rn(e, t)
                }(o, e);
                var t = Zn(o);

                function o() {
                    jn(this, o);
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
                        t = (0, b.Z)(this.props.location),
                        n = (0, i.parse)(this.props.location.search);
                    v.ZP.post({
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
                            o = new gt.Z(r);
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
                    return (0, r.jsx)(_.ZP, {
                        children: (0, r.jsx)(_.Hh, {})
                    })
                };
                a.renderCategorySuccess = function(e, t) {
                    var n = this.props,
                        o = n.defaultRoute,
                        i = n.transitionTo,
                        a = I.Z.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_EMAIL_BODY.format({
                            category: t
                        });
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_HEADER
                        }), (0, r.jsx)(_.DK, {
                            children: a
                        }), (0, r.jsx)(_.zx, {
                            className: N().marginTop20,
                            onClick: function() {
                                return i(o)
                            },
                            children: I.Z.Messages.CONTINUE_TO_WEBAPP
                        }), (0, r.jsx)(_.zx, {
                            className: N().marginTop8,
                            color: _.zx.Colors.LINK,
                            look: _.zx.Looks.LINK,
                            onClick: function() {
                                return i(O.Z5c.SETTINGS("notifications", xn.vG))
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
                        var s = xn.Od.find((function(e) {
                            return e.category === a
                        }));
                        if (null != s) return this.renderCategorySuccess(a, s.label())
                    }
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.qE, {
                            src: null == i ? void 0 : i.getAvatarURL(void 0, 100),
                            size: xe.AvatarSizes.DEPRECATED_SIZE_100,
                            className: N().marginBottom20
                        }), (0, r.jsx)(_.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_HEADER
                        }), (0, r.jsx)(_.DK, {
                            children: I.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_BODY
                        }), (0, r.jsx)(_.zx, {
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
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Ee, {
                            src: n(709989),
                            className: N().marginBottom20
                        }), (0, r.jsx)(_.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER
                        }), (0, r.jsx)(_.DK, {
                            children: I.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY
                        }), (0, r.jsx)(_.zx, {
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
            Dn.defaultProps = {
                transitionTo: function(e) {
                    return n.g.location.assign(e)
                }
            };
            const Mn = u.ZP.connectStores([E.Z], (function() {
                return {
                    defaultRoute: E.Z.defaultRoute
                }
            }))(Dn);
            var Ln = n(314620),
                Un = n(285991);

            function Gn(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function kn(e) {
                kn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return kn(e)
            }

            function Bn(e, t) {
                return !t || "object" !== Vn(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Fn(e, t) {
                Fn = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Fn(e, t)
            }
            var Vn = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Hn(e) {
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
                    var n, r = kn(e);
                    if (t) {
                        var o = kn(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Bn(this, n)
                }
            }
            var zn = {};
            var Yn = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Fn(e, t)
                }(n, e);
                var t = Hn(n);

                function n() {
                    Gn(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getState = function(e) {
                    return zn[e]
                };
                r.__getLocalVars = function() {
                    return {
                        states: zn
                    }
                };
                return n
            }(u.ZP.Store);
            Yn.displayName = "CodedLinkNativeAppStateStore";
            const Kn = new Yn(c.Z, {
                NATIVE_APP_MODAL_OPENING: function(e) {
                    var t = e.code;
                    zn[t] = O.kEZ.OPENING
                },
                NATIVE_APP_MODAL_OPENED: function(e) {
                    var t = e.code;
                    zn[t] = O.kEZ.OPEN
                },
                NATIVE_APP_MODAL_OPEN_FAILED: function(e) {
                    var t = e.code;
                    zn[t] = O.kEZ.OPEN_FAIL
                }
            });
            var Wn = n(761814),
                qn = n(746974),
                Xn = n(644144),
                Jn = n(348592),
                $n = n(178232),
                Qn = n(682719),
                er = n(994653);

            function tr(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function nr(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function rr(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            nr(i, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            nr(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function or(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function ir(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function ar(e) {
                ar = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return ar(e)
            }

            function sr(e, t) {
                return !t || "object" !== cr(t) && "function" != typeof t ? tr(e) : t
            }

            function ur(e, t) {
                ur = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return ur(e, t)
            }
            var cr = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function lr(e) {
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
                    var n, r = ar(e);
                    if (t) {
                        var o = ar(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return sr(this, n)
                }
            }
            var fr, dr = function(e, t) {
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
            u.ZP.initialize();
            ! function(e) {
                e.REGISTER = "register";
                e.LOGIN = "login"
            }(fr || (fr = {}));
            var pr = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && ur(e, t)
                }(o, e);
                var t = lr(o);

                function o() {
                    or(this, o);
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
                        Un.k({
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
                    var n = tr(e);
                    e.handleAccept = rr((function() {
                        var e, t, r, o;
                        return dr(this, (function(i) {
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
                    Ln.b8();
                    null == e && this.refreshUser()
                };
                i.getCode = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    return e.match.params.giftCode
                };
                i.getMode = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    return e.login ? fr.LOGIN : fr.REGISTER
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
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Dx, {
                            children: e
                        }), (0, r.jsx)(_.Hh, {})]
                    })
                };
                i.renderExpiredInvite = function() {
                    var e = this.props,
                        t = e.defaultRoute,
                        o = e.transitionTo;
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Ee, {
                            src: n(211086),
                            className: N().marginBottom8
                        }), (0, r.jsx)(_.Dx, {
                            className: D()(N().marginTop8, N().marginBottom8),
                            children: I.Z.Messages.GIFT_CODE_AUTH_INVALID_TITLE
                        }), (0, r.jsx)(_.DK, {
                            children: I.Z.Messages.GIFT_CODE_AUTH_INVALID_BODY
                        }), (0, r.jsx)(_.zx, {
                            className: D()(N().marginTop40, N().marginBottom8),
                            onClick: function() {
                                return o(t)
                            },
                            children: I.Z.Messages.CONTINUE_TO_WEBAPP
                        }), (0, r.jsx)(_.zx, {
                            onClick: function() {
                                return window.open(Jn.Z.getArticleURL(O.BhN.GIFTING), "_blank")
                            },
                            look: _.zx.Looks.LINK,
                            color: _.zx.Colors.LINK,
                            children: I.Z.Messages.GIFT_CODE_AUTH_INVALID_TIP
                        })]
                    })
                };
                i.renderAppOpened = function() {
                    var e = this;
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.APP_OPENED_TITLE
                        }), (0, r.jsx)(_.DK, {
                            children: I.Z.Messages.APP_OPENED_BODY
                        }), (0, r.jsx)(_.zx, {
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
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Ee, {
                            src: n(100539),
                            className: N().marginBottom8
                        }), (0, r.jsx)(_.Dx, {
                            children: I.Z.Messages.GIFT_CODE_AUTH_VERIFICATION_TITLE.format({
                                username: e.username
                            })
                        }), (0, r.jsx)(_.DK, {
                            className: N().marginTop20,
                            children: I.Z.Messages.GIFT_CODE_AUTH_HELP_TEXT_VERIFICATION_REQUIRED
                        }), (0, r.jsx)(_.zx, {
                            disabled: t,
                            className: N().marginTop40,
                            onClick: this.handleResendVerification,
                            children: t ? I.Z.Messages.GIFT_CODE_AUTH_VERIFICATION_SENT : I.Z.Messages.RESEND_VERIFICATION_EMAIL
                        }), (0, r.jsx)(_.zx, {
                            look: _.zx.Looks.LINK,
                            color: _.zx.Colors.LINK,
                            onClick: this.refreshUser,
                            className: N().marginTop8,
                            children: I.Z.Messages.GIFT_CODE_AUTH_CHECK_VERIFICATION_AGAIN
                        })]
                    })
                };
                i.renderAuthenticated = function(e, t) {
                    var n = this.getErrorMessage(e),
                        o = null != n;
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)($n.Z, {
                            giftCode: e
                        }), (0, r.jsx)(_.zx, {
                            disabled: o,
                            className: N().marginTop40,
                            onClick: this.handleAccept,
                            children: I.Z.Messages.GIFT_CODE_AUTH_ACCEPT
                        }), null != n ? (0, r.jsx)(_.DK, {
                            className: N().marginTop20,
                            children: n
                        }) : (0, r.jsx)(_.i_, {
                            className: N().marginTop20,
                            children: I.Z.Messages.GIFT_CODE_AUTH_LOGGED_IN_AS.format({
                                userTag: et.ZP.getUserTag(t),
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
                        return this.getMode() === fr.LOGIN ? (0, r.jsx)(Qn.ZP, {
                            giftCodeSKU: n,
                            giftCode: i,
                            transitionTo: u,
                            location: c
                        }) : (0, r.jsx)(er.Z, {
                            giftCodeSKU: n,
                            giftCode: i,
                            transitionTo: u,
                            location: c
                        })
                    }
                    return null
                };
                ! function(e, t, n) {
                    t && ir(e.prototype, t);
                    n && ir(e, n)
                }(o, [{
                    key: "requiresVerification",
                    get: function() {
                        var e = this.state.currentUser;
                        return null != e && !e.verified
                    }
                }]);
                return o
            }(o.PureComponent);
            const hr = u.ZP.connectStores([$t.Z, Wn.Z, ge.default, qn.Z, E.Z, Kn], (function(e) {
                var t = e.match.params.giftCode,
                    n = $t.Z.get(t),
                    r = null != n ? qn.Z.get(n.skuId) : null;
                return {
                    giftCode: n,
                    sku: r,
                    libraryApplication: null != r && null != n ? Xn.z2(n, r, Wn.Z) : null,
                    authenticated: ge.default.isAuthenticated(),
                    defaultRoute: E.Z.defaultRoute,
                    isResolved: $t.Z.getIsResolved(t),
                    isAccepting: $t.Z.getIsAccepting(t),
                    libraryApplicationsFetched: Wn.Z.fetched,
                    nativeAppState: Kn.getState(t)
                }
            }))(pr);
            var yr = n(985518),
                vr = n(281437),
                mr = n(256273),
                gr = n(226613),
                Er = n(415879),
                _r = n(247246),
                br = n(335150),
                Or = n(239527),
                Ir = n(571680),
                Tr = n(598363),
                Nr = n(520574),
                Ar = n.n(Nr);

            function Sr(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function xr(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function jr(e) {
                jr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return jr(e)
            }

            function Cr(e, t) {
                return !t || "object" !== Rr(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Pr(e, t) {
                Pr = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Pr(e, t)
            }
            var Rr = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function wr(e) {
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
                    var n, r = jr(e);
                    if (t) {
                        var o = jr(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Cr(this, n)
                }
            }
            u.ZP.initialize();
            var Zr = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Pr(e, t)
                }(o, e);
                var t = wr(o);

                function o() {
                    Sr(this, o);
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
                    Tr.KO || _e.Z.launch("discord://" + O.Z5c.GUILD_TEMPLATE(this.props.code), (function() {}))
                };
                i.componentDidUpdate = function(e) {
                    this.props.code !== e.code && J.Z.resolveGuildTemplate(this.props.code)
                };
                i.renderButton = function(e, t) {
                    return Tr.KO ? (0, r.jsx)(_.zx, {
                        className: N().marginTop40,
                        onClick: t,
                        children: e
                    }) : (0, r.jsx)(_.v6, {
                        className: N().marginTop40
                    })
                };
                i.renderSpinner = function(e) {
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Dx, {
                            children: e
                        }), (0, r.jsx)(_.Hh, {})]
                    })
                };
                i.renderInvalidGuildTemplate = function() {
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Ee, {
                            src: n(211086),
                            className: N().marginBottom8
                        }), (0, r.jsx)(_.Dx, {
                            className: D()(N().marginTop8, N().marginBottom8),
                            children: I.Z.Messages.GUILD_TEMPLATE_INVALID_TITLE
                        }), (0, r.jsx)(_.DK, {
                            children: I.Z.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
                        }), this.renderButton(I.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
                    })
                };
                i.renderAppOpened = function() {
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.APP_OPENED_TITLE
                        }), (0, r.jsx)(_.DK, {
                            children: I.Z.Messages.APP_OPENED_BODY
                        }), this.renderButton(I.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
                    })
                };
                i.renderAuthenticatedOrDownload = function() {
                    var e = this.props.guildTemplate;
                    de()(null != e, "guild template must not be null");
                    return e.state === br.Rj.RESOLVING ? (0, r.jsx)(_.ZP, {
                        className: Ar().authBox,
                        children: (0, r.jsx)(mr.Z, {
                            guildTemplate: e
                        })
                    }) : (0, r.jsx)(Dr, {
                        guildTemplate: e
                    })
                };
                i.renderContinue = function() {
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Dx, {
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
                        case br.Rj.RESOLVING:
                            return this.renderSpinner(I.Z.Messages.APP_OPENING);
                        case br.Rj.RESOLVED:
                            return o || !Tr.KO ? this.renderAuthenticatedOrDownload() : this.props.login ? (0, r.jsx)(Qn.ZP, {
                                guildTemplate: t,
                                transitionTo: i,
                                location: a
                            }) : (0, r.jsx)(er.Z, {
                                guildTemplate: t,
                                transitionTo: i,
                                location: a,
                                onRegister: function() {
                                    (0, gr.c)(Or.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE);
                                    Er.Z.flowStart(Ir.MK.ORGANIC_GUILD_TEMPLATES, Ir.EW.NUF_STARTED)
                                }
                            });
                        case br.Rj.EXPIRED:
                            return this.renderInvalidGuildTemplate();
                        default:
                            return null
                    }
                };
                return o
            }(o.PureComponent);

            function Dr(e) {
                var t = e.guildTemplate,
                    n = (0,
                        yr.Z)(t, !1),
                    o = n.form,
                    i = n.handleSubmit;
                Er.Z.flowStep(Ir.MK.ORGANIC_GUILD_TEMPLATES, Ir.X2.GUILD_CREATE);
                var a = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(_.Dx, {
                        className: Ar().header,
                        children: I.Z.Messages.GUILD_TEMPLATE_SETUP_DISCORD
                    }), o, (0, r.jsx)(_.zx, {
                        className: Ar().createButton,
                        onClick: i,
                        children: I.Z.Messages.GUILD_TEMPLATE_CREATE_DISCORD
                    })]
                });
                return (0, r.jsx)(_r.Z, {
                    className: Ar().authBox,
                    children: function() {
                        return [(0, r.jsx)(vr.Z, {
                            guildTemplate: t
                        }, "template"), (0, r.jsx)("div", {
                            className: Ar().formContainer,
                            children: a
                        }, "contents")]
                    }
                })
            }
            u.ZP.initialize();

            function Mr(e, t, n) {
                e.preventDefault();
                Ee.default.track(O.rMx.GUILD_TEMPLATE_APP_OPENED, {
                    guild_template_code: t,
                    guild_template_name: n.name,
                    guild_template_description: n.description,
                    guild_template_guild_id: n.sourceGuildId
                });
                var r = ge.default.getFingerprint(),
                    o = null != r ? r : ge.default.getId();
                J.Z.openMobileApp(n.state === br.Rj.RESOLVED ? t : void 0, o)
            }

            function Lr(e) {
                var t = e.code,
                    n = (0, u.e7)([X.Z], (function() {
                        return X.Z.getGuildTemplate(t)
                    }));
                o.useEffect((function() {
                    (0, m.e)("guild_template_mobile")
                }), []);
                return null == n || n.state === br.Rj.RESOLVING ? (0, r.jsx)(_.ZP, {
                    children: (0, r.jsx)(xe.Spinner, {})
                }) : n.state === br.Rj.RESOLVED ? (0, r.jsxs)(_.ZP, {
                    children: [(0, r.jsx)(mr.Z, {
                        guildTemplate: n,
                        tall: !0
                    }), (0, r.jsx)(_.zx, {
                        onClick: function(e) {
                            return Mr(e, t, n)
                        },
                        className: N().marginTop20,
                        children: I.Z.Messages.GUILD_TEMPLATE_OPEN
                    })]
                }) : (0, r.jsx)(Ze, {
                    text: I.Z.Messages.GUILD_TEMPLATE_MOBILE_INVALID_ERROR,
                    buttonCta: I.Z.Messages.GUILD_TEMPLATE_MOBILE_INVALID_CTA,
                    onClick: function(e) {
                        return Mr(e, t, n)
                    }
                })
            }
            var Ur = n(816810),
                Gr = n(256183),
                kr = n(347365),
                Br = n(553484),
                Fr = n(14515),
                Vr = n(607739),
                Hr = n(705214),
                zr = n(661123),
                Yr = n(308921),
                Kr = n(308739),
                Wr = n(199790);

            function qr(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function Xr(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            qr(i, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            qr(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Jr(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function $r(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Qr(e) {
                Qr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Qr(e)
            }

            function eo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        $r(e, t, n[t])
                    }))
                }
                return e
            }

            function to(e, t) {
                return !t || "object" !== ro(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function no(e, t) {
                no = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return no(e, t)
            }
            var ro = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function oo(e) {
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
                    var n, r = Qr(e);
                    if (t) {
                        var o = Qr(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return to(this, n)
                }
            }
            var io = function(e, t) {
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
            u.ZP.initialize();
            var ao = "Accept Invite Page",
                so = "register",
                uo = "login";

            function co() {
                return (co = Xr((function(e) {
                    var t;
                    return io(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, d.Z.resolveInvite(e, ao)];
                            case 1:
                                if (null == (t = n.sent().invite)) return [2];
                                y(t);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var lo = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && no(e, t)
                }(o, e);
                var t = oo(o);

                function o() {
                    Jr(this, o);
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
                            context: e.getAcceptInviteContext(ao),
                            skipOnboarding: !0,
                            callback: function(e) {
                                y(e);
                                null != e.channel && d.Z.openApp(t, e.channel.id)
                            }
                        }).catch((function(t) {
                            if (t instanceof kr.yZ || t instanceof kr.Hx) {
                                var n = (0, Yr.O)(t.code);
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
                        return Tr.KO ? (0, r.jsx)(_.zx, {
                            className: i ? N().marginTop20 : N().marginTop40,
                            onClick: n,
                            color: i ? _.zx.Colors.GREEN : _.zx.Colors.BRAND,
                            children: t
                        }) : (0, r.jsx)(_.v6, {
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
                    Ee.default.track(O.rMx.INVITE_VIEWED, {
                        invite_code: r
                    }, {
                        flush: !0
                    });
                    (0, m.e)("invite");
                    if (!Tr.KO) {
                        var o = this.getInviteKey();
                        _e.Z.launch("discord://" + O.Z5c.INVITE(o), (function() {}))
                    }
                    if (!n && t) {
                        var i = this.getInviteKey(),
                            a = (0, Ae.fU)(i).baseCode;
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
                        co.apply(this, arguments)
                    }(a);
                    else if (n.state === O.r2o.APP_NOT_OPENED) this.handleContinue();
                    else if (this.getMode() === uo && o !== e.authenticated && o) {
                        var s = ge.default.getFingerprint();
                        if (null != s) {
                            var u = (0, me.s)(s);
                            this.track(O.rMx.INVITE_LOGIN_SUCCESSFUL, !0, {
                                prev_user_id: u
                            })
                        }
                        d.Z.acceptInvite({
                            inviteKey: a,
                            context: this.getAcceptInviteContext(ao),
                            skipOnboarding: !0,
                            callback: this.handleContinue
                        })
                    }
                    r !== e.nativeAppState && r === O.kEZ.OPEN && this.track(O.rMx.INVITE_APP_INVOKED, !1);
                    if (this.getMode() === so && o && !e.authenticated) {
                        if (null != n.channel) {
                            (0, gr.c)(Or.M5.INVITE_UNCLAIMED);
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
                    return Wr.a ? so : e.login ? uo : so
                };
                i.track = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        r = this.props.invite,
                        o = this.getInviteKey(),
                        i = (0, Ae.jX)(o),
                        a = t ? {
                            guild_id: null != r.guild ? r.guild.id : null,
                            channel_id: null != r.channel ? r.channel.id : null,
                            inviter_id: null != r.inviter ? r.inviter.id : null,
                            invite_code: i
                        } : {
                            invite_code: i
                        };
                    Ee.default.track(e, eo({}, a, n))
                };
                i.renderSpinner = function(e) {
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Dx, {
                            children: e
                        }), (0, r.jsx)(_.Hh, {})]
                    })
                };
                i.renderInvalidInvite = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Ee, {
                            src: n(211086),
                            className: N().marginBottom8
                        }), (0, r.jsx)(_.Dx, {
                            className: D()(N().marginTop8, N().marginBottom8),
                            children: I.Z.Messages.AUTH_INVALID_INVITE_TITLE
                        }), (0, r.jsx)(_.DK, {
                            children: e ? I.Z.Messages.AUTH_BANNED_INVITE_BODY : I.Z.Messages.AUTH_INVALID_INVITE_BODY
                        }), this.renderButton(I.Z.Messages.CONTINUE_TO_WEBAPP), (0, r.jsx)(_.zx, {
                            onClick: function() {
                                return window.open(Jn.Z.getArticleURL(O.BhN.INVALID_INVITES), "_blank")
                            },
                            look: _.zx.Looks.LINK,
                            color: _.zx.Colors.LINK,
                            className: N().marginTop8,
                            children: I.Z.Messages.AUTH_INVALID_INVITE_TIP
                        })]
                    })
                };
                i.renderErrorInvite = function() {
                    var e, t;
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(Kr.Z, {
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
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.APP_OPENED_TITLE
                        }), (0, r.jsx)(_.DK, {
                            children: I.Z.Messages.APP_OPENED_BODY
                        }), this.renderButton(I.Z.Messages.CONTINUE_TO_WEBAPP, (function() {
                            return t()
                        }))]
                    })
                };
                i.renderAuthenticatedHeader = function() {
                    var e = this.props.invite;
                    return null != e.stage_instance && null != e.guild ? (0, r.jsx)(Vr.Z, {
                        stageInstance: e.stage_instance,
                        guild: e.guild
                    }) : null != e.guild_scheduled_event ? (0, r.jsx)(Fr.r, {
                        channel: e.channel,
                        guildScheduledEvent: e.guild_scheduled_event
                    }) : (0, r.jsx)(Kr.Z, {
                        invite: e
                    })
                };
                i.renderAuthenicatedFooter = function() {
                    var e = this.props.invite;
                    return null == e.stage_instance && null == e.guild_scheduled_event || null == e.guild ? null : (0, r.jsx)(_.ZP, {
                        className: N().marginTop20,
                        children: (0, r.jsx)(Vr.y, {
                            guild: e.guild,
                            onlineCount: e.approximate_presence_count
                        })
                    })
                };
                i.renderAuthenticatedOrDownload = function() {
                    var e = null != this.props.invite.stage_instance ? I.Z.Messages.INSTANT_INVITE_ACCEPT_STAGE : I.Z.Messages.INSTANT_INVITE_ACCEPT;
                    return (0, r.jsxs)("div", {
                        children: [(0, r.jsxs)(_.ZP, {
                            children: [this.renderAuthenticatedHeader(), this.renderButton(e, this.handleAccept)]
                        }), this.renderAuthenicatedFooter()]
                    })
                };
                i.renderContinue = function() {
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Dx, {
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
                            return Wr.a ? this.renderSpinner(I.Z.Messages.DEFAULT_INPUT_PLACEHOLDER) : this.renderSpinner(I.Z.Messages.APP_OPENING);
                        case O.r2o.APP_OPENING:
                            return this.renderSpinner(I.Z.Messages.APP_OPENING);
                        case O.r2o.RESOLVED:
                            var u;
                            if (i && (0, zr.yE)(null !== (u = n.flags) && void 0 !== u ? u : 0, Ur.$.IS_GUEST_INVITE)) {
                                d.Z.openApp(n.code);
                                Gr.Z.set(Hr.J, n.code);
                                return this.renderAppOpened((function() {
                                    return a(O.Z5c.APP)
                                }))
                            }
                            return i || !Tr.KO ? this.renderAuthenticatedOrDownload() : this.getMode() === uo ? (0, r.jsx)(Qn.ZP, {
                                invite: n,
                                transitionTo: a,
                                location: s
                            }) : (0, r.jsx)(er.Z, {
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
            const fo = u.ZP.connectStores([We.Z, E.Z, ge.default, Kn, Br.Z], (function(e) {
                var t, n = e.inviteKey;
                return {
                    invite: null !== (t = We.Z.getInvite(n)) && void 0 !== t ? t : {},
                    nativeAppState: Kn.getState(n),
                    authenticated: ge.default.isAuthenticated(),
                    defaultRoute: E.Z.defaultRoute,
                    isUnderage: Br.Z.isUnderageAnonymous()
                }
            }))(lo);
            var po = n(793436);

            function ho(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            var yo = function(e, t) {
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
            const vo = function(e) {
                var t, n, o = e.match,
                    i = e.location,
                    a = (n = (t = function(e, t) {
                        return yo(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, (0, vn.s)(O.jEp.PICK_GUILD_SETTINGS, {
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
                                ho(i, r, o, a, s, "next", e)
                            }

                            function s(e) {
                                ho(i, r, o, a, s, "throw", e)
                            }
                            a(void 0)
                        }))
                    }), function(e, t) {
                        return n.apply(this, arguments)
                    });
                return (0, r.jsx)(Tn, {
                    match: o,
                    location: i,
                    attemptDeepLink: a
                })
            };
            var mo = n(144936),
                go = n(845882),
                Eo = n(807572),
                _o = n.n(Eo);

            function bo(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Oo(e) {
                Oo = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Oo(e)
            }

            function Io(e, t) {
                return !t || "object" !== No(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function To(e, t) {
                To = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return To(e, t)
            }
            var No = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Ao(e) {
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
                    var n, r = Oo(e);
                    if (t) {
                        var o = Oo(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Io(this, n)
                }
            }
            u.ZP.initialize();
            var So = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && To(e, t)
                }(o, e);
                var t = Ao(o);

                function o() {
                    bo(this, o);
                    var e;
                    (e = t.apply(this, arguments)).handleVerify = function() {
                        var t = (0, b.Z)(e.props.location);
                        null != t && l.Z.verify(t)
                    };
                    e.handleLogin = function() {
                        (0, e.props.transitionTo)(O.Z5c.LOGIN)
                    };
                    e.handleOpenApp = function() {
                        var t = e.props.verifyingUserId;
                        Ee.default.track(O.rMx.VERIFY_ACCOUNT_APP_OPENED, {
                            verifying_user_id: t
                        });
                        (0, go.Z)("verify_email")
                    };
                    return e
                }
                var i = o.prototype;
                i.componentDidMount = function() {
                    this.handleVerify();
                    (0, m.e)("verify_email")
                };
                i.renderVerifyFailed = function() {
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Ee, {
                            src: n(639915),
                            className: D()(_o().image, N().marginBottom20)
                        }), (0, r.jsx)(_.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.VERFICATION_EXPIRED
                        }), (0, r.jsx)(_.DK, {
                            className: N().marginBottom40,
                            children: I.Z.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
                        }), (0, r.jsx)(_.zx, {
                            onClick: this.handleLogin,
                            children: I.Z.Messages._LOGIN
                        })]
                    })
                };
                i.renderVerifySucceeded = function() {
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Ee, {
                            src: n(143613),
                            className: D()(_o().image, N().marginBottom20)
                        }), (0, r.jsx)(_.Dx, {
                            className: N().marginBottom40,
                            children: I.Z.Messages.VERIFICATION_VERIFIED
                        }), (0, r.jsx)(_.zx, {
                            onClick: this.handleOpenApp,
                            children: I.Z.Messages.VERIFICATION_OPEN_DISCORD
                        })]
                    })
                };
                i.renderVerifying = function() {
                    return (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Ee, {
                            src: n(100539),
                            className: D()(_o().image, N().marginBottom20)
                        }), (0, r.jsx)(_.Dx, {
                            className: N().marginBottom8,
                            children: I.Z.Messages.VERIFICATION_VERIFYING
                        }), (0, r.jsx)(_.DK, {
                            className: N().marginBottom40,
                            children: I.Z.Messages.ACTION_MAY_TAKE_A_MOMENT
                        }), (0, r.jsx)(_.zx, {
                            submitting: !0,
                            color: _.zx.Colors.PRIMARY
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
            So.defaultProps = {
                transitionTo: function(e) {
                    return n.g.location.assign(e)
                }
            };
            const xo = u.ZP.connectStores([ge.default], (function() {
                return {
                    verifyFailed: ge.default.didVerifyFail(),
                    verifyErrors: ge.default.getVerifyErrors(),
                    verifySucceeded: ge.default.didVerifySucceed(),
                    fingerprint: ge.default.getFingerprint(),
                    verifyingUserId: ge.default.getVerifyingUserId()
                }
            }))(So);
            n(88415);

            function jo(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Co(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function Po(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Ro(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function wo(e) {
                wo = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return wo(e)
            }

            function Zo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Ro(e, t, n[t])
                    }))
                }
                return e
            }

            function Do(e, t) {
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

            function Mo(e, t) {
                return !t || "object" !== Go(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Lo(e, t) {
                Lo = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Lo(e, t)
            }

            function Uo(e, t) {
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
                    if ("string" == typeof e) return jo(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return jo(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Go = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function ko(e) {
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
                    var n, r = wo(e);
                    if (t) {
                        var o = wo(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Mo(this, n)
                }
            }
            var Bo = function(e, t) {
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
            var Fo = (0, on.Z)(Qn.ZP),
                Vo = (0, on.Z)(po.Z),
                Ho = (0, on.Z)(fo),
                zo = (0, on.Z)((function(e) {
                    var t = {
                        guildTemplate: (0, u.e7)([X.Z], (function() {
                            return X.Z.getGuildTemplate(e.code)
                        })),
                        nativeAppState: (0, u.e7)([Kn], (function() {
                            return Kn.getState(e.code)
                        })),
                        authenticated: (0, u.e7)([ge.default], (function() {
                            return ge.default.isAuthenticated()
                        })),
                        defaultRoute: (0, u.e7)([E.Z], (function() {
                            return E.Z.defaultRoute
                        }))
                    };
                    return (0, r.jsx)(Zr, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                xr(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, e, t))
                })),
                Yo = (0, on.Z)(hr),
                Ko = (0, on.Z)((function(e) {
                    var t = e.inviteKey,
                        n = e.transitionTo,
                        i = (0, u.e7)([We.Z], (function() {
                            return We.Z.getInvite(t)
                        })),
                        a = Le.useExperiment({
                            location: "Mobile Invite Landing Page"
                        }, {
                            autoTrackExposure: !0
                        }),
                        s = a.enabled,
                        c = a.redirectDelayMs;
                    o.useEffect((function() {
                        (0, m.e)("invite_mobile")
                    }), []);
                    o.useEffect((function() {
                        null != i && i.state === O.r2o.RESOLVED && Ee.default.track(O.rMx.INVITE_VIEWED, {
                            invite_code: t,
                            friends_count: null == i ? void 0 : i.friends_count
                        }, {
                            flush: !0
                        }).then((function() {
                            s && setTimeout((function() {
                                return Vt(null, t, i)
                            }), c)
                        }))
                    }), [s, i, t, c]);
                    return (0, r.jsx)(Xt, {
                        invite: i,
                        onAcceptInvite: function(e) {
                            Vt(e, t, i)
                        },
                        transitionTo: n
                    })
                })),
                Wo = (0, on.Z)(er.Z),
                qo = (0, on.Z)(hn),
                Xo = (0, on.Z)(yn),
                Jo = (0, on.Z)(xo),
                $o = (0, on.Z)(q),
                Qo = (0, on.Z)(mo.Z),
                ei = (0, on.Z)(Mn),
                ti = (0,
                    on.Z)(w),
                ni = (0, on.Z)((function(e) {
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
                        var e = (0, b.Z)(t);
                        $.Z.verify(e);
                        (0, m.e)("verify_hub_email")
                    }), [t]);
                    var p = function() {
                        be(d);
                        s(!0)
                    };
                    return a ? (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Dx, {
                            className: Ie().title,
                            children: I.Z.Messages.APP_OPENED_TITLE
                        }), (0, r.jsx)(_.DK, {
                            className: Ie().subtitle,
                            children: I.Z.Messages.APP_OPENED_BODY
                        }), (0, r.jsx)(_.zx, {
                            className: Ie().spacedButton,
                            onClick: function() {
                                return (0, Q.uL)(O.Z5c.CHANNEL(d))
                            },
                            children: I.Z.Messages.CONTINUE_TO_WEBAPP
                        })]
                    }) : l ? (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Ee, {
                            className: Ie().image,
                            src: n(143613)
                        }), (0, r.jsx)(_.Dx, {
                            className: Ie().title,
                            children: I.Z.Messages.VERIFICATION_VERIFIED
                        }), (0, r.jsx)(_.zx, {
                            onClick: p,
                            children: I.Z.Messages.VERIFICATION_OPEN_DISCORD
                        })]
                    }) : null != f ? (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Ee, {
                            className: Ie().image,
                            src: n(639915)
                        }), (0, r.jsx)(_.Dx, {
                            className: Ie().title,
                            children: I.Z.Messages.VERFICATION_EXPIRED
                        }), (0, r.jsx)(_.DK, {
                            className: Ie().subtitle,
                            children: I.Z.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
                        }), (0, r.jsx)(_.zx, {
                            onClick: p,
                            children: I.Z.Messages.VERIFICATION_OPEN_DISCORD
                        })]
                    }) : (0, r.jsxs)(_.ZP, {
                        children: [(0, r.jsx)(_.Ee, {
                            className: Ie().image,
                            src: n(100539)
                        }), (0, r.jsx)(_.Dx, {
                            className: Ie().title,
                            children: I.Z.Messages.VERIFICATION_VERIFYING
                        }), (0, r.jsx)(_.DK, {
                            className: Ie().subtitle,
                            children: I.Z.Messages.ACTION_MAY_TAKE_A_MOMENT
                        }), (0, r.jsx)(_.zx, {
                            submitting: !0,
                            color: _.zx.Colors.PRIMARY
                        })]
                    })
                })),
                ri = (0, on.Z)(Sn),
                oi = (0, on.Z)(vo),
                ii = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && Lo(e, t)
                    }(n, e);
                    var t = ko(n);

                    function n() {
                        Po(this, n);
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
                            Ee.default.track(O.rMx.INVITE_OPENED, {
                                invite_code: (0, Ae.jX)(t),
                                load_time: nn()
                            }, {
                                flush: !0
                            })
                        }(n || Wr.a) && this.resolveInvite();
                        this.resolveGiftCode();
                        this.resolveGuildTemplate();
                        p.Z.initialize()
                    };
                    o.componentDidUpdate = function(e) {
                        var t, n;
                        e.hasLoadedExperiments || !this.props.hasLoadedExperiments || Wr.a || this.resolveInvite();
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
                            null != n && (0, Qt.hR)(n.id, ["embedded_splash"]).then((function(t) {
                                var n = Uo(t, 1)[0];
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
                                return Bo(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, d.Z.resolveInvite(e, O.Usc.INVITE)];
                                        case 1:
                                            null != (t = n.sent().invite) && y(t);
                                            return [2]
                                    }
                                }))
                            }, function() {
                                var e = this,
                                    n = arguments;
                                return new Promise((function(r, o) {
                                    var i = t.apply(e, n);

                                    function a(e) {
                                        Co(i, r, o, a, s, "next", e)
                                    }

                                    function s(e) {
                                        Co(i, r, o, a, s, "throw", e)
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
                            Ee.default.track(O.rMx.GUILD_TEMPLATE_OPENED, {
                                guild_template_code: e,
                                load_time: nn()
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
                        return (0, r.jsxs)(an.Z, {
                            splash: t,
                            children: [(0, r.jsx)(h.Z, {
                                path: O.Z5c.LOGIN_HANDOFF,
                                render: function(e) {
                                    return (0, r.jsx)(Vo, Do(Zo({}, e), {
                                        redirectTo: n
                                    }))
                                }
                            }), (0, r.jsx)(h.Z, {
                                impressionName: a.zs.USER_LOGIN,
                                path: O.Z5c.LOGIN,
                                render: function(e) {
                                    return (0, r.jsx)(Fo, Do(Zo({}, e), {
                                        redirectTo: n
                                    }))
                                }
                            }), (0, r.jsx)(h.Z, {
                                impressionName: a.zs.USER_REGISTRATION,
                                path: O.Z5c.REGISTER,
                                render: function(e) {
                                    return Wr.a ? (0, r.jsx)(Ho, Do(Zo({}, e), {
                                        redirectTo: n,
                                        inviteKey: o
                                    })) : (0, r.jsx)(Wo, Do(Zo({}, e), {
                                        redirectTo: n
                                    }))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.GIFT_CODE_LOGIN(":giftCode"),
                                render: function(e) {
                                    return (0, r.jsx)(Yo, Zo({
                                        login: !0
                                    }, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.GIFT_CODE(":giftCode"),
                                render: function(e) {
                                    return (0, r.jsx)(Yo, Zo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: [O.Z5c.INVITE_LOGIN(":inviteCode"), O.Z5c.INVITE(":inviteCode")],
                                render: function(e) {
                                    var t = e.match,
                                        n = t.params.inviteCode,
                                        o = t.path,
                                        i = e.location,
                                        a = e.transitionTo,
                                        u = (0, Ae.mb)(n, i.search);
                                    return s.tq || s.Em ? (0, r.jsx)(Ko, {
                                        inviteKey: u,
                                        transitionTo: a
                                    }, u) : (0, r.jsx)(Ho, {
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
                                    return s.tq || s.Em ? (0, r.jsx)(Lr, {
                                        code: n
                                    }, n) : (0, r.jsx)(zo, {
                                        code: n,
                                        location: i,
                                        transitionTo: a,
                                        login: o === O.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")
                                    })
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.VERIFY,
                                render: function(e) {
                                    return (0, r.jsx)(Jo, Zo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.VERIFY_HUB_EMAIL,
                                render: function(e) {
                                    return (0, r.jsx)(ni, Zo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.VERIFY_REQUEST,
                                render: function(e) {
                                    return (0, r.jsx)($o, Zo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                                render: function(e) {
                                    return (0, r.jsx)(ei, Zo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                                render: function(e) {
                                    return (0, r.jsx)(ti, Zo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.AUTHORIZE_IP,
                                render: function(e) {
                                    return (0, r.jsx)(qo, Zo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.REJECT_IP,
                                render: function(e) {
                                    return (0, r.jsx)(Qo, Zo({
                                        source: O.Z5c.REJECT_IP
                                    }, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.REJECT_MFA,
                                render: function(e) {
                                    return (0, r.jsx)(Qo, Zo({
                                        source: O.Z5c.REJECT_MFA
                                    }, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.AUTHORIZE_PAYMENT,
                                render: function(e) {
                                    return (0, r.jsx)(Xo, Zo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.RESET,
                                render: function(e) {
                                    return (0, r.jsx)(Qo, Zo({
                                        source: O.Z5c.RESET
                                    }, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                                render: function(e) {
                                    return (0, r.jsx)(oi, Zo({}, e))
                                }
                            }), (0, r.jsx)(h.Z, {
                                path: O.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?"),
                                render: function(e) {
                                    return (0, r.jsx)(ri, Zo({}, e))
                                }
                            })]
                        })
                    };
                    n.getDerivedStateFromProps = function(e, t) {
                        var n, r = e.invite,
                            o = e.location,
                            a = t.backgroundId,
                            s = null !== (n = (0, i.parse)(o.search).redirect_to) && void 0 !== n ? n : null;
                        null != s && "" !== s && (0, rn.B)(s) && !s.startsWith(O.Z5c.ME) || (s = null);
                        var u = null;
                        if (null == r) u = (0, en.gK)(s);
                        else if ((null == r ? void 0 : r.state) === O.r2o.RESOLVED) {
                            var c = r.guild,
                                l = r.target_application;
                            null != l ? null != a && (u = (0, Qt.xF)(l.id, a, 1024)) : null != c && "string" == typeof c.splash && (u = qe.ZP.getGuildSplashURL({
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
            const ai = u.ZP.connectStores([ge.default, We.Z, $t.Z, Jt.Z, X.Z], (function(e) {
                var t, n, r, o = e.match,
                    i = e.location,
                    a = null == o || null === (t = o.params) || void 0 === t ? void 0 : t.inviteCode,
                    s = Wr.a ? Wr.Y : void 0,
                    u = null != a ? (0, Ae.mb)(a, i.search) : s,
                    c = null == o || null === (n = o.params) || void 0 === n ? void 0 : n.giftCode,
                    l = null == o || null === (r = o.params) || void 0 === r ? void 0 : r.guildTemplateCode;
                return {
                    inviteKey: u,
                    isAuthenticated: ge.default.isAuthenticated(),
                    giftCode: c,
                    guildTemplateCode: l,
                    gift: null != c ? $t.Z.get(c) : null,
                    invite: null != u ? We.Z.getInvite(u) : null,
                    guildTemplate: null != l ? X.Z.getGuildTemplate(l) : null,
                    hasLoadedExperiments: Jt.Z.hasLoadedExperiments
                }
            }))(ii)
        },
        928975: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => A
            });
            var r = n(785893),
                o = n(667294),
                i = n(23279),
                a = n.n(i),
                s = n(853158),
                u = n(289283),
                c = n(142643),
                l = n(882723),
                f = n(421281),
                d = n(95070),
                p = n.n(d);

            function h(e, t) {
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

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function m(e) {
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

            function g(e, t) {
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

            function b(e) {
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
            const A = function(e) {
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
                        t && E(e, t)
                    }(o, t);
                    var n = b(o);

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
                Z: () => G
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                s = n(289283),
                u = n(882723),
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

            function y(e, t) {
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

            function v(e, t) {
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
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
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
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }
            var b = function(e) {
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
                var t = _(n);

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
                        s = (e.match, v(e, ["children", "location", "history", "staticContext", "match"])),
                        u = null,
                        f = null;
                    o.Children.forEach(t, (function(e) {
                        if (null == u && o.isValidElement(e)) {
                            var t = e.props,
                                r = t.component,
                                s = t.render,
                                l = v(t, ["component", "render"]),
                                d = l.path || l.from;
                            if (null == (u = null != d ? (0, c.LX)(n.pathname, y(h({}, l), {
                                    path: d
                                })) : null)) return;
                            l = y(h({}, l), {
                                key: d,
                                location: n,
                                match: u,
                                history: i,
                                staticContext: a
                            });
                            null != r ? f = o.createElement(r, l) : null != s && (f = s(l))
                        }
                    }));
                    return (0, r.jsx)(l.Z, y(h({}, s), {
                        children: f
                    }))
                };
                return n
            }(o.Component);
            const O = (0, c.EN)(b);
            var I = n(784426),
                T = n(515510),
                N = n(630346),
                A = n(421281),
                S = n(465704),
                x = n(2590),
                j = n(567477),
                C = n.n(j);

            function P(e) {
                P = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return P(e)
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

            function D(e) {
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
                    var n, r = P(e);
                    if (t) {
                        var o = P(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return R(this, n)
                }
            }
            var M = (0, A.Mg)(C().responsiveWidthMobile),
                L = [x.Z5c.LOGIN, x.Z5c.LOGIN_HANDOFF, x.Z5c.REGISTER, x.Z5c.INVITE(""), x.Z5c.GIFT_CODE(""), x.Z5c.GUILD_TEMPLATE_LOGIN(""), x.Z5c.GUILD_TEMPLATE(""), x.Z5c.DISABLE_EMAIL_NOTIFICATIONS, x.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, x.Z5c.BILLING_PREMIUM_SUBSCRIBE, x.Z5c.BILLING_PAYMENT_SOURCES_CREATE, x.Z5c.BILLING_PAYMENTS, x.Z5c.BILLING_PREMIUM_SWITCH_PLAN, x.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, x.Z5c.VERIFY, x.Z5c.VERIFY_HUB_EMAIL, x.Z5c.REJECT_IP, x.Z5c.REJECT_MFA, x.Z5c.AUTHORIZE_IP, x.Z5c.AUTHORIZE_PAYMENT, x.Z5c.RESET, x.Z5c.HANDOFF];

            function U(e) {
                return L.some((function(t) {
                    return e.startsWith(t)
                }))
            }
            const G = function(e) {
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
                var t = D(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this, e)).handleResize = function() {
                        r.setState({
                            isMobileWidth: window.innerWidth <= M
                        })
                    };
                    r.state = {
                        isMobileWidth: window.innerWidth <= M
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
                        className: C().characterBackground,
                        children: (0,
                            r.jsx)(u.HeadingLevel, {
                            forceLevel: 1,
                            children: null != e ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(T.Z, {
                                    show: !0,
                                    className: a()(C().logo)
                                }), (0, r.jsx)(N.h, {
                                    splash: e,
                                    children: t
                                })]
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(S.Z, {
                                    className: C().artwork,
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
                Z: () => _
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
                y = n(897196);

            function v(e, t) {
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

            function E(e, t) {
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
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e) {
                var t = function(e) {
                        var t = e.handoffKey,
                            n = e.handoffToken,
                            r = e.handoffSource;
                        (0, c.Yz)({
                            handoffKey: t,
                            handoffToken: n,
                            handoffSource: r
                        });
                        A(!1)
                    },
                    n = o.useCallback((function(t) {
                        if (function(e) {
                                var t, n = (0, a.LX)(e, {
                                    path: h.Z5c.CHANNEL(":guildId", ":channelId")
                                });
                                return (null == n || null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === y.oC.ROLE_SUBSCRIPTIONS
                            }(t)) f.dL(t);
                        else {
                            var n;
                            (null !== (n = e.transitionTo) && void 0 !== n ? n : f.uL)(t)
                        }
                    }), [e.transitionTo]),
                    v = (0, s.cj)([d.default], (function() {
                        return {
                            isAuthenticated: d.default.isAuthenticated(),
                            loginStatus: d.default.getLoginStatus()
                        }
                    })),
                    _ = v.isAuthenticated,
                    b = v.loginStatus,
                    O = e.location,
                    I = e.redirectTo,
                    T = E(o.useState(_), 2),
                    N = T[0],
                    A = T[1];
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
                return N || b === h.u34.LOGGING_IN ? (0, r.jsx)(p.q3, {}) : (0, r.jsx)(p.ZP, g(function(e) {
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
                c = n(993231),
                l = n(202351),
                f = n(513328),
                d = n(882723),
                p = n(84441),
                h = n(553484),
                y = n(784426),
                v = n(558820),
                m = n(348592),
                g = n(2590),
                E = n(473708),
                _ = n(565462),
                b = n.n(_),
                O = function() {
                    return (0, y.uL)(g.Z5c.LOGIN)
                };
            const I = function(e) {
                var t = e.authBoxClassName,
                    o = e.underageMessage;
                return (0, r.jsxs)(v.ZP, {
                    className: t,
                    children: [(0, r.jsx)("img", {
                        alt: "",
                        src: n(697694),
                        className: b().img
                    }), (0, r.jsx)(v.Dx, {
                        className: b().title,
                        children: E.Z.Messages.AGE_GATE_UNDERAGE_HEADER
                    }), (0, r.jsx)(v.DK, {
                        className: b().subtitle,
                        children: E.Z.Messages.AGE_GATE_UNDERAGE_BODY.format({
                            underageMessage: null != o ? o : E.Z.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
                            helpURL: m.Z.getArticleURL(g.BhN.AGE_GATE)
                        })
                    }), (0, r.jsx)(d.Button, {
                        fullWidth: !0,
                        onClick: O,
                        children: E.Z.Messages.AGE_GATE_UNDERAGE_BACK_TO_LOGIN
                    })]
                })
            };
            var T = n(852465),
                N = n(479373),
                A = n(527005);
            const S = (0, n(260561).B)({
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
            var x = n(730381),
                j = n.n(x),
                C = n(744564),
                P = n(539381),
                R = n(520322),
                w = n(664625),
                Z = n(652591),
                D = n(391438),
                M = n(799663),
                L = n(561210);

            function U(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function G(e, t) {
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

            function k(e, t) {
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
                return F(G(function(e) {
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
                }({}, k(e, ["invite", "giftCodeSKUId"])), {
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
                    y = void 0 !== h && h,
                    v = e.promoEmailConsent,
                    m = void 0 === v ? null : v,
                    E = e.usedUsernameSuggestion,
                    _ = void 0 === E ? null : E,
                    b = e.uniqueUsernameRegistration,
                    O = void 0 !== b && b;
                C.Z.dispatch({
                    type: "REGISTER",
                    birthday: y ? u : null
                });
                if (null != u) {
                    (0, M.Z)(u, g.jXE.REGISTER);
                    Z.default.track(g.rMx.AGE_GATE_ACTION, {
                        source: L.L0.REGISTER,
                        action: L.Al.AGE_GATE_SUBMITTED
                    });
                    ! function(e) {
                        var t = j()().diff(e, "years");
                        if (!(t < 13)) {
                            var n;
                            n = t >= 13 && t <= 17 ? "13-17" : t >= 18 && t <= 22 ? "18-22" : "23+";
                            Z.default.track(g.rMx.USER_AGE_SUBMITTED, {
                                age_bucket: n
                            })
                        }
                    }(u)
                }
                return D.Z.post({
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
                        promotional_email_opt_in: null == m ? void 0 : m.checked,
                        unique_username_registration: O
                    },
                    trackedActionData: {
                        event: c.a9.USER_REGISTER,
                        properties: {
                            invite_code: f,
                            used_username_suggestion: _,
                            promotional_email_opt_in: null == m ? void 0 : m.checked,
                            promotional_email_pre_checked: null == m ? void 0 : m.preChecked,
                            was_unique_username: O
                        }
                    }
                }).then((function(e) {
                    C.Z.dispatch({
                        type: "REGISTER_SUCCESS",
                        token: e.body.token
                    });
                    Z.default.track(g.rMx.AGE_GATE_ACTION, {
                        source: L.L0.REGISTER,
                        action: L.Al.AGE_GATE_SUCCESS
                    })
                }), (function(e) {
                    var t = new P.Z(e);
                    C.Z.dispatch({
                        type: "REGISTER_FAILURE",
                        error: t
                    });
                    null != t.getFieldErrors("date_of_birth") && R.wE(L.L0.REGISTER);
                    Z.default.track(g.rMx.REGISTER_SUBMIT_ERRORED, {
                        is_unique_username_registration: O,
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
                H = n(347148),
                z = n.n(H),
                Y = n(518280),
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
                        children: (0, r.jsx)(v.i_, {
                            className: a()(W({}, z().subText, !i)),
                            children: o
                        })
                    })
                })
            }
            var X = n(14515);

            function J() {
                var e = (0, A.MD)(),
                    t = e.required,
                    n = e.checked;
                return t ? (0, r.jsx)(q, {
                    value: n,
                    subText: E.Z.Messages.PROMOTIONAL_EMAIL_OPT_IN_CONSENT,
                    onChange: A.ZJ,
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
                ye = n(623236),
                ve = n(91853),
                me = n(808748),
                ge = n(686874),
                Ee = n(31914),
                _e = n(536038),
                be = n(249697),
                Oe = n(930948),
                Ie = n(421281),
                Te = n(178232),
                Ne = n(308739),
                Ae = n(247246);
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
            var Se = n(199790),
                xe = n(239527),
                je = n(705090),
                Ce = n(717764),
                Pe = n.n(Ce);

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

            function De(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function Me(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Le(e) {
                Le = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Le(e)
            }

            function Ue(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Me(e, t, n[t])
                    }))
                }
                return e
            }

            function Ge(e, t) {
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

            function ke(e, t) {
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
                    var n, r = Le(e);
                    if (t) {
                        var o = Le(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ke(this, n)
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
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
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
                            uniqueUsernameRegistration: !1,
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
                        S.trackExposure({
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
                            (0, le.c)(xe.M5.ORGANIC_REGISTERED);
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
                        t && n(null != r ? r : _e.Z.defaultRoute)
                    };
                    i.handleRegister = function() {
                        var e = this;
                        return Ze((function() {
                            var t, n, r, o, i, a, s, u, c, l, f, d, p, h, y, v, m, E, _, b, O, I;
                            return ze(this, (function(T) {
                                switch (T.label) {
                                    case 0:
                                        t = e.state, n = t.email, r = t.username, o = t.globalName, i = t.password, a = t.consent, s = t.parsedDateOfBirth;
                                        u = e.props, c = u.invite, l = u.guildTemplate, f = u.giftCode, d = u.onRegister, p = u.usernameSuggestion, h = u.isMobileWebInviteRegistration, y = u.uniqueUsernameRegistrationConfig, v = y.enabled;
                                        m = null != c ? c.code : null;
                                        E = null != f ? f.skuId : null;
                                        _ = A.MD.getState();
                                        b = (0, Ie.Ew)(p) ? null : r === p;
                                        return Se.a ? [4, re(r)] : [3, 2];
                                    case 1:
                                        I = T.sent();
                                        return [3, 3];
                                    case 2:
                                        I = r;
                                        T.label = 3;
                                    case 3:
                                        O = I;
                                        Oe.S.dispatch(g.CkL.WAVE_EMPHASIZE);
                                        T.label = 4;
                                    case 4:
                                        T.trys.push([4, 9, , 10]);
                                        return h || null == c ? [3, 6] : [4, B(Ue({
                                            consent: a,
                                            invite: m,
                                            giftCodeSKUId: E,
                                            usedUsernameSuggestion: b,
                                            uniqueUsernameRegistration: v
                                        }, v ? {
                                            globalName: o
                                        } : {
                                            username: O
                                        }))];
                                    case 5:
                                        T.sent();
                                        return [3, 8];
                                    case 6:
                                        return [4, F({
                                            email: n,
                                            username: O,
                                            globalName: o,
                                            consent: a,
                                            password: i,
                                            invite: m,
                                            usedUsernameSuggestion: b,
                                            guildTemplateCode: null == l ? void 0 : l.code,
                                            giftCodeSKUId: E,
                                            birthday: s,
                                            promoEmailConsent: _.required ? _ : null,
                                            uniqueUsernameRegistration: v
                                        })];
                                    case 7:
                                        T.sent();
                                        T.label = 8;
                                    case 8:
                                        null == d || d();
                                        return [3, 10];
                                    case 9:
                                        T.sent();
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
                            subText: E.Z.Messages.TERMS_PRIVACY_OPT_IN.format({
                                termsURL: g.EYA.TERMS,
                                privacyURL: g.EYA.PRIVACY
                            })
                        }) : u = (0, r.jsx)(v.i_, {
                            isProminent: !!s,
                            className: K().marginTop8,
                            children: a ? E.Z.Messages.TERMS_PRIVACY_ON_REGISTER.format({
                                buttonText: E.Z.Messages.CONTINUE,
                                termsURL: g.EYA.TERMS,
                                privacyURL: g.EYA.PRIVACY
                            }) : E.Z.Messages.TERMS_PRIVACY.format({
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
                            t = this.props,
                            n = t.authBoxClassName,
                            o = t.uniqueUsernameRegistrationConfig.enabled,
                            i = function(t) {
                                o ? e.setState({
                                    globalName: t
                                }) : e.setState({
                                    username: t
                                })
                            },
                            a = o ? this.state.globalName : this.state.username;
                        return (0, r.jsxs)(v.ZP, {
                            className: n,
                            children: [(0, r.jsx)(Ne.R, {}), (0, r.jsxs)(v.gO, {
                                className: K().marginTop40,
                                children: [(0, r.jsx)(d.FormTitle, {
                                    children: E.Z.Messages.FORM_LABEL_USERNAME
                                }), (0, r.jsx)(d.Tooltip, {
                                    text: E.Z.Messages.AUTH_USERNAME_TOOLTIP,
                                    position: "right",
                                    color: d.Tooltip.Colors.BRAND,
                                    children: function(e) {
                                        var t = e.onMouseEnter,
                                            n = e.onMouseLeave;
                                        return (0, r.jsx)(v.II, {
                                            autoFocus: !0,
                                            className: K().marginBottom8,
                                            name: "username",
                                            value: a,
                                            placeholder: E.Z.Messages.FORM_PLACEHOLDER_USERNAME,
                                            onChange: i,
                                            onMouseEnter: t,
                                            onMouseLeave: n
                                        })
                                    }
                                }), (0, r.jsx)(v.zx, {
                                    className: K().marginTop20,
                                    disabled: !0,
                                    children: E.Z.Messages.CONTINUE
                                }), (0, r.jsx)(v.i_, {
                                    disabled: !0,
                                    className: K().marginTop8,
                                    children: E.Z.Messages.TERMS_PRIVACY.format({
                                        termsURL: g.EYA.TERMS,
                                        privacyURL: g.EYA.PRIVACY
                                    })
                                }), Se.a ? null : (0, r.jsx)(v.zx, {
                                    look: v.zx.Looks.LINK,
                                    color: v.zx.Colors.LINK,
                                    disabled: !0,
                                    className: K().marginTop20,
                                    children: E.Z.Messages.ALREADY_HAVE_ACCOUNT
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
                            s = v.zx.Colors.BRAND,
                            u = E.Z.Messages.CONTINUE;
                        if (null != (null == n ? void 0 : n.stage_instance)) {
                            s = v.zx.Colors.GREEN;
                            u = E.Z.Messages.INSTANT_INVITE_ACCEPT_STAGE
                        }
                        return (0, r.jsx)(d.Tooltip, {
                            text: !a && i ? E.Z.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                            children: function(t) {
                                return (0, r.jsx)("div", Ge(Ue({
                                    className: K().marginTop20
                                }, t), {
                                    children: (0, r.jsx)(v.zx, {
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
                            u = t.uniqueUsernameRegistrationConfig.enabled,
                            c = this.renderConsentComponents(),
                            l = c.subText,
                            f = c.consentText,
                            p = null != (null == n ? void 0 : n.stage_instance) || null != (null == n ? void 0 : n.guild_scheduled_event),
                            h = function(t) {
                                u ? e.setState({
                                    globalName: t
                                }) : e.setState({
                                    username: t
                                })
                            },
                            y = u ? this.state.globalName : this.state.username;
                        return (0, r.jsxs)("div", {
                            children: [(0, r.jsxs)(v.ZP, {
                                onSubmit: this.handleSubmit,
                                tag: "form",
                                className: o,
                                children: [this.renderInviteHeader(), p ? (0, r.jsx)("div", {
                                    className: Pe().divider
                                }) : null, (0, r.jsxs)(v.gO, {
                                    className: p ? void 0 : K().marginTop40,
                                    children: [(0, r.jsx)(d.FormTitle, {
                                        error: Ke(u && null != s ? s : a),
                                        children: u ? E.Z.Messages.DISPLAY_NAME : E.Z.Messages.FORM_LABEL_USERNAME
                                    }), (0, r.jsx)(d.Tooltip, {
                                        text: E.Z.Messages.AUTH_USERNAME_TOOLTIP,
                                        position: "right",
                                        color: d.Tooltip.Colors.BRAND,
                                        children: function(e) {
                                            var t = e.onMouseEnter,
                                                n = e.onMouseLeave;
                                            return (0, r.jsx)(v.II, {
                                                autoFocus: !0,
                                                className: K().marginBottom8,
                                                name: u ? "global_name" : "username",
                                                value: y,
                                                placeholder: E.Z.Messages.FORM_PLACEHOLDER_USERNAME,
                                                onChange: h,
                                                error: null != a || null != s ? "" : null,
                                                onMouseEnter: t,
                                                onMouseLeave: n
                                            })
                                        }
                                    }), u && (0, r.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "header-secondary",
                                        children: E.Z.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                                    }), this.renderInviteButton(), l, f, Se.a ? null : (0, r.jsx)(v.zx, {
                                        look: v.zx.Looks.LINK,
                                        color: v.zx.Colors.LINK,
                                        onClick: this.handleGotoLogin,
                                        className: K().marginTop20,
                                        children: E.Z.Messages.ALREADY_HAVE_ACCOUNT
                                    })]
                                })]
                            }), null != n && p ? (0, r.jsx)(v.ZP, {
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
                        return "string" != typeof e ? null : (0, r.jsx)(v.i_, {
                            className: a()(K().marginTop20, Pe().errorMessage),
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
                            y = s.globalNameFocused,
                            m = this.props,
                            g = m.registering,
                            _ = m.consentRequired,
                            b = m.isMobileWebInviteRegistration,
                            O = m.uniqueUsernameRegistrationConfig,
                            I = O.enabled,
                            N = O.suggestions,
                            A = m.authBoxClassName,
                            S = m.apiErrors,
                            x = void 0 === S ? {} : S,
                            j = x.email,
                            C = x.username,
                            P = x.global_name,
                            R = x.password,
                            w = x.date_of_birth,
                            Z = m.hasLoggedInAccounts,
                            D = m.registrationCopyExperimentConfig.hasCopyAboveButton,
                            M = this.renderConsentComponents(),
                            L = M.subText,
                            U = M.consentText,
                            G = this.renderErrorMessage(),
                            k = (0, r.jsx)(d.Tooltip, {
                                text: !p && _ ? E.Z.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                                children: function(e) {
                                    return (0, r.jsx)("div", Ge(Ue({
                                        className: K().marginTop20
                                    }, e), {
                                        children: (0, r.jsx)(v.zx, {
                                            type: "submit",
                                            submitting: g,
                                            disabled: !i.hasConsent() || i.state.isRateLimited,
                                            children: E.Z.Messages.CONTINUE
                                        })
                                    }))
                                }
                            }),
                            B = this,
                            F = (n = Ze((function() {
                                return ze(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            B.setState({
                                                usernameFocused: !0
                                            });
                                            return N && l.length > 0 && !pe.Z.wasRegistrationSuggestionFetched(l) ? [4, de.Z.fetchSuggestionsRegistration(l)] : [3, 2];
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
                            V = null != e ? (0, r.jsx)(o.Fragment, {
                                children: e()
                            }, "custom-header") : (0, r.jsx)(v.Dx, {
                                children: E.Z.Messages.REGISTER_TITLE
                            }, "title"),
                            H = (0, r.jsxs)(v.gO, {
                                className: K().marginTop20,
                                children: [(0, r.jsx)(v.II, {
                                    autoFocus: !0,
                                    className: K().marginBottom20,
                                    label: E.Z.Messages.FORM_LABEL_EMAIL,
                                    name: "email",
                                    value: u,
                                    onChange: function(e) {
                                        return i.setState({
                                            email: e
                                        })
                                    },
                                    error: Ke(j),
                                    type: "email",
                                    setRef: function(e) {
                                        i.emailRef = e
                                    },
                                    required: I
                                }), I && (0, r.jsx)(v.II, {
                                    label: E.Z.Messages.DISPLAY_NAME,
                                    className: K().marginBottom20,
                                    name: "global_name",
                                    value: l,
                                    onChange: function(e) {
                                        return i.setState({
                                            globalName: e
                                        })
                                    },
                                    error: Ke(P),
                                    maxLength: je.hy,
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
                                }), I && (0, r.jsx)(me.Z, {
                                    show: y,
                                    top: -12,
                                    bottom: 20,
                                    children: (0, r.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-normal",
                                        children: E.Z.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                                    })
                                }), (0, r.jsxs)("div", {
                                    onBlur: function() {
                                        return i.setState({
                                            usernameFocused: !1
                                        })
                                    },
                                    onFocus: F,
                                    tabIndex: -1,
                                    children: [(0, r.jsx)(v.II, {
                                        label: E.Z.Messages.FORM_LABEL_USERNAME,
                                        className: K().marginBottom20,
                                        name: "username",
                                        value: c,
                                        onChange: function(e) {
                                            I ? i.setState({
                                                username: e.toLocaleLowerCase()
                                            }) : i.setState({
                                                username: e
                                            })
                                        },
                                        error: Ke(C),
                                        setRef: function(e) {
                                            i.usernameRef = e
                                        },
                                        required: I
                                    }), I && this.renderUsernameValidation()]
                                }), (0, r.jsx)(v.II, {
                                    label: E.Z.Messages.FORM_LABEL_PASSWORD,
                                    name: "password",
                                    value: f,
                                    onChange: function(e) {
                                        return i.setState({
                                            password: e
                                        })
                                    },
                                    error: Ke(R),
                                    type: "password",
                                    setRef: function(e) {
                                        i.passwordRef = e
                                    },
                                    required: I
                                }), (0, r.jsx)(T.Z, {
                                    label: E.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
                                    wrapperClassName: K().marginTop20,
                                    name: "date_of_birth",
                                    onChange: this.handleBirthdayChange,
                                    ref: this.dateOfBirthRef,
                                    error: Ke(w),
                                    value: h,
                                    required: I
                                }), D && L, (0, r.jsx)(J, {}), k, G, U, !D && L, Se.a ? null : (0, r.jsx)(v.zx, {
                                    look: b ? v.zx.Looks.FILLED : v.zx.Looks.LINK,
                                    color: b ? v.zx.Colors.PRIMARY : v.zx.Colors.LINK,
                                    onClick: this.handleGotoLogin,
                                    className: K().marginTop20,
                                    children: E.Z.Messages.ALREADY_HAVE_ACCOUNT
                                })]
                            });
                        return t ? (0, r.jsx)(Ae.Z, {
                            onSubmit: this.handleSubmit,
                            tag: "form",
                            className: a()(A, Pe().horizontalAuthBox),
                            children: function() {
                                return [V, (0, r.jsxs)("div", {
                                    className: Pe().flex,
                                    children: [(0, r.jsx)(v.Dx, {
                                        className: Pe().createAccountTemplateHeader,
                                        children: E.Z.Messages.REGISTER_TITLE
                                    }), H]
                                }, "register-title")]
                            }
                        }) : (0, r.jsxs)(v.ZP, {
                            onSubmit: this.handleSubmit,
                            tag: "form",
                            className: A,
                            children: [Z && !b ? (0, r.jsx)(v.zx, {
                                onClick: this.handleGotoLogin,
                                look: v.zx.Looks.LINK,
                                color: v.zx.Colors.PRIMARY,
                                className: Pe().goBackButton,
                                children: (0, r.jsxs)("div", {
                                    className: Pe().content,
                                    children: [(0, r.jsx)(be.Z, {
                                        width: 16,
                                        height: 16,
                                        className: Pe().caret
                                    }), (0, r.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        children: E.Z.Messages.AGE_GATE_GO_BACK
                                    })]
                                })
                            }) : null, V, H]
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
                        t && De(e.prototype, t);
                        n && De(e, n)
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
                var t = (0, l.cj)([Ee.Z, w.default, h.Z, fe.Z, ce.Z], (function() {
                        return {
                            consentRequired: Ee.Z.getAuthenticationConsentRequired(),
                            registering: w.default.getRegisterStatus() === g.$ib.REGISTERING,
                            apiErrors: w.default.getErrors(),
                            authenticated: w.default.isAuthenticated(),
                            isUnderage: h.Z.isUnderageAnonymous(),
                            country: fe.Z.getCountryCode(),
                            hasLoggedInAccounts: ce.Z.getHasLoggedInAccounts()
                        }
                    })),
                    n = (0, ye.F4)(),
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
                    registrationCopyExperimentConfig: S.getCurrentConfig({
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
                    l = (0, ve.a)(n, a, !0),
                    f = a && n.length > 0;
                t = f ? (0, u.EQ)(l).with({
                    type: he.K.ERROR,
                    message: u.P.select()
                }, (function(e) {
                    return (0, r.jsx)(d.Text, {
                        className: Pe().messageNegative,
                        variant: "text-sm/normal",
                        children: e
                    })
                })).with({
                    type: he.K.AVAILABLE,
                    message: u.P.select()
                }, (function(e) {
                    return (0, r.jsx)(d.Text, {
                        className: Pe().messagePositive,
                        variant: "text-sm/normal",
                        children: e
                    })
                })).otherwise((function() {
                    return (0, r.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        children: E.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
                    })
                })) : null != o && o.length > 0 && i.length > 0 ? (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: E.Z.Messages.UU_REGISTER_SUGGESTION.format({
                        suggestion: o,
                        nameOnClick: c
                    })
                }) : (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: E.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
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
                o = (n(667294), n(882723)),
                i = n(694755),
                a = n(473708),
                s = n(203181),
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
        270012: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
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
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function y(e, t) {
                y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return y(e, t)
            }
            var v = function(e) {
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
            const E = new(function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && y(e, t)
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
                l.__getLocalVars = function() {
                    return {}
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
                Z: () => g
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
            var h = !1,
                y = null,
                v = "underage";
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
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var o = n.prototype;
                o.isUnderageAnonymous = function() {
                    if (!a.FB) {
                        return null != r.parse(document.cookie).underage
                    }
                    return null != y && y + s.k0 > Date.now()
                };
                o.__getLocalVars = function() {
                    return {
                        isUnderageAnonymous: h,
                        failedRegisterAtTimestamp: y,
                        UNDERAGE_SESSION_COOKIE: v
                    }
                };
                return n
            }(o.ZP.Store);
            m.displayName = "AgeGateStore";
            const g = new m(i.Z, {
                AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function() {
                    h = !0;
                    y = Date.now();
                    document.cookie = "".concat(v, "=1;path=/")
                },
                LOGIN_SUCCESS: function() {
                    h = !1;
                    y = null;
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
                c = n(882723),
                l = n(737797),
                f = n(473708),
                d = n(645522),
                p = n.n(d);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t) {
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
            var v = u()().localeData().months(),
                m = Array.from(Array(31).keys()).map((function(e) {
                    return {
                        value: e + 1,
                        label: "".concat(e + 1)
                    }
                })),
                g = Array.from(Array(12).keys()).map((function(e) {
                    return {
                        value: e + 1,
                        label: v[e]
                    }
                }));
            var E = /[a-zA-Z0-9]/;

            function _(e) {
                var t = e.options,
                    n = e.selectOption,
                    i = e.children,
                    a = y(o.useState(""), 2),
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
                    if (E.test(e.key)) {
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

            function b() {
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
                        switch (G[e].type) {
                            case "day":
                                B.push({
                                    key: "day",
                                    input: (0, r.jsx)(_, {
                                        options: m,
                                        selectOption: N,
                                        children: (0, r.jsx)(l.Z, {
                                            ref: M,
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
                                                D(e + 1)
                                            },
                                            maxMenuHeight: 215
                                        })
                                    })
                                });
                                break;
                            case "month":
                                B.push({
                                    key: "month",
                                    input: (0, r.jsx)(_, {
                                        options: g,
                                        selectOption: S,
                                        children: (0, r.jsx)(l.Z, {
                                            ref: L,
                                            className: p().inputMonth,
                                            "aria-label": f.Z.Messages.AGE_GATE_DOB_MONTH,
                                            menuPlacement: l.Z.MenuPlacements.TOP,
                                            placeholder: (0, r.jsx)("span", {
                                                "aria-hidden": !0,
                                                children: f.Z.Messages.AGE_GATE_DOB_MONTH
                                            }),
                                            options: g,
                                            value: A,
                                            onChange: function(t) {
                                                var n = t.value;
                                                S(n);
                                                D(e + 1)
                                            },
                                            maxMenuHeight: 215
                                        })
                                    })
                                });
                                break;
                            case "year":
                                B.push({
                                    key: "year",
                                    input: (0, r.jsx)(_, {
                                        options: R,
                                        selectOption: j,
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
                                            value: x,
                                            onChange: function(t) {
                                                var n = t.value;
                                                j(n);
                                                D(e + 1)
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
                    v = e.error,
                    E = e.autoFocus,
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
                        var i = y(o.useState(t), 2),
                            a = i[0],
                            s = i[1],
                            u = y(o.useState(n), 2),
                            c = u[0],
                            l = u[1],
                            f = y(o.useState(r), 2);
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
                    A = I.month,
                    S = I.setMonth,
                    x = I.year,
                    j = I.setYear,
                    C = o.useMemo((function() {
                        return null != T && null != A && null != x ? u()("".concat(T, "/").concat(A, "/").concat(x), "DD/MM/YYYY") : null
                    }), [T, A, x]);
                o.useEffect((function() {
                    d((null == C ? void 0 : C.isValid()) ? C : null)
                }), [C, d]);
                var P = v;
                null == C || C.isValid() || (P = f.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);
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
                    w = y(o.useState(E ? 0 : -1), 2),
                    Z = w[0],
                    D = w[1],
                    M = o.useRef(null),
                    L = o.useRef(null),
                    U = o.useRef(null),
                    G = o.useMemo(b, []),
                    k = o.useCallback((function() {
                        var e;
                        switch (null === (e = G[Z]) || void 0 === e ? void 0 : e.type) {
                            case "day":
                                var t;
                                null === (t = M.current) || void 0 === t || t.focus();
                                break;
                            case "month":
                                var n;
                                null === (n = L.current) || void 0 === n || n.focus();
                                break;
                            case "year":
                                var r;
                                null === (r = U.current) || void 0 === r || r.focus()
                        }
                    }), [Z, M, L, U, G]);
                o.useEffect((function() {
                    setTimeout(k, 500)
                }), []);
                o.useEffect((function() {
                    Z >= G.length ? null == h || h() : k()
                }), [Z, k]);
                for (var B = [], F = 0; F < 3; F++) n(F);
                return (0, r.jsxs)("fieldset", {
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
                        children: P
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
                r: () => f
            });
            var r = n(785893),
                o = (n(667294), n(882723)),
                i = n(239813),
                a = n(269300),
                s = n(220109),
                u = n(33397),
                c = n.n(u);

            function l(e) {
                var t = e.channel,
                    n = (0,
                        i.Th)(t.type);
                return (0, r.jsxs)("div", {
                    className: c().channelInfoContainer,
                    children: [null != n ? (0, r.jsx)(n, {
                        width: 20,
                        height: 20
                    }) : null, (0, r.jsx)(o.Text, {
                        className: c().channelInfoText,
                        color: "none",
                        variant: "text-sm/semibold",
                        children: t.name
                    })]
                })
            }

            function f(e) {
                var t = e.channel,
                    n = e.guildScheduledEvent;
                return (0, r.jsxs)("div", {
                    className: c().container,
                    children: [(0, r.jsx)(s.HZ, {
                        className: c().statusContainer,
                        userCount: n.user_count,
                        startTime: n.scheduled_start_time,
                        isActive: (0, a.xt)(n),
                        isEnded: (0, a.Z2)(n),
                        guildId: n.guild_id,
                        eventType: n.entity_type
                    }), (0, r.jsx)(s.Rf, {
                        name: n.name,
                        description: n.description,
                        guildId: n.guild_id
                    }), null != t && n.channel_id === t.id ? (0, r.jsx)(l, {
                        channel: t
                    }) : null]
                })
            }
        },
        621634: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = n(667294),
                i = n(882723),
                a = n(599467),
                s = n(605013),
                u = n(81472),
                c = n(3155),
                l = n(436393),
                f = n.n(l);

            function d(e) {
                var t = e.guildScheduledEvent,
                    n = e.channel,
                    l = e.onClose,
                    d = t.entity_type === c.WX.EXTERNAL,
                    p = o.useCallback((function(e) {
                        return (0, s.Qt)(t, l)(e)
                    }), [t, l]),
                    h = (0,
                        u.u)(t, n);
                if (null == h) return null;
                var y = h.IconComponent,
                    v = h.locationName,
                    m = (0, r.jsxs)(r.Fragment, {
                        children: [null != y && (0, r.jsx)(y, {
                            width: 20,
                            height: 20,
                            className: f().channelIcon
                        }), (0, r.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: f().locationText,
                            children: (0, a.m)(v, !0)
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
        985518: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => k
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                s = n(496486),
                u = n.n(s),
                c = n(547308),
                l = n(795308),
                f = n(882723),
                d = n(84441),
                p = n(285991),
                h = n(530847),
                y = n(473903),
                v = n(718831),
                m = n(436622),
                g = n(796938),
                E = n(281110),
                _ = n(744564),
                b = n(652555),
                O = n(934870),
                I = n(567403),
                T = n(2590);
            const N = function(e, t, n) {
                _.Z.dispatch({
                    type: "GUILD_TEMPLATE_ACCEPT",
                    code: e
                });
                return new Promise((function(r, o) {
                    E.ZP.post({
                        url: T.ANM.UNRESOLVED_GUILD_TEMPLATE(e),
                        body: {
                            name: t,
                            icon: n
                        },
                        oldFormErrors: !0
                    }).then((function(t) {
                        var n = t.body;
                        _.Z.dispatch({
                            type: "GUILD_TEMPLATE_ACCEPT_SUCCESS",
                            code: e,
                            guild: n
                        });
                        if (b.Z.isConnected()) I.Z.addConditionalChangeListener((function() {
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
                        _.Z.dispatch({
                            type: "GUILD_TEMPLATE_ACCEPT_FAILURE",
                            code: e
                        });
                        o(t.body)
                    }))
                }))
            };
            var A = n(267342),
                S = n(652591),
                x = n(335150);

            function j(e) {
                var t = o.useRef([]);
                o.useEffect((function() {
                    if (null != e && e.state !== x.Rj.RESOLVING && !t.current.includes(e.code)) {
                        t.current.push(e.code);
                        S.default.track(T.rMx.CREATE_GUILD_VIEWED, {
                            guild_template_code: e.code,
                            guild_template_name: e.name,
                            guild_template_description: e.description,
                            guild_template_guild_id: e.sourceGuildId
                        })
                    }
                }))
            }
            var C = n(256273),
                P = n(473708),
                R = n(456124),
                w = n.n(R);
            n(424286);

            function Z(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function D(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function M(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            D(i, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            D(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function L(e, t, n) {
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
            var G = function(e, t) {
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

            function k(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = U(o.useState(""), 2),
                    i = n[0],
                    a = n[1],
                    s = U(o.useState(null), 2),
                    u = s[0],
                    c = s[1],
                    l = U(o.useState(null), 2),
                    v = l[0],
                    m = l[1],
                    g = (0, A.Z)(e.code);
                o.useEffect((function() {
                    function e() {
                        return (e = M((function() {
                            var e;
                            return G(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (null != (e = y.default.getCurrentUser())) return [3, 4];
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
                var E = function() {
                    return N(e.code, i, u).catch((function(e) {
                        return m(e)
                    }))
                };
                j(e);
                var _ = (0, r.jsxs)(r.Fragment, {
                        children: [t ? (0, r.jsx)(C.Z, {
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
                                error: null == v ? void 0 : v.name
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
                    b = e.serializedSourceGuild.roles.filter((function(e) {
                        return "@everyone" !== e.name
                    })),
                    O = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: w().divider
                        }), (0, r.jsxs)(f.FormItem, {
                            className: w().previewSection,
                            title: P.Z.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_HEADER,
                            children: [(0, r.jsx)(B, {
                                channels: e.serializedSourceGuild.channels
                            }), (0, r.jsxs)(f.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: w().protip,
                                children: [(0, r.jsxs)("span", {
                                    className: w().protipText,
                                    children: [P.Z.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                                }), " ", P.Z.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_TIP]
                            })]
                        }), b.length > 0 ? (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(f.FormItem, {
                                className: w().previewSection,
                                title: P.Z.Messages.GUILD_TEMPLATE_MODAL_ROLES_HEADER2,
                                children: (0, r.jsx)(F, {
                                    roles: b
                                })
                            })
                        }) : null]
                    });
                return {
                    form: _,
                    preview: O,
                    handleSubmit: E
                }
            }

            function B(e) {
                var t = e.channels,
                    n = u()(t).sortBy((function(e) {
                        return null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id
                    })).map((function(e) {
                        var t = function(e) {
                            var t = e.type;
                            return t === T.d4z.GUILD_VOICE ? g.Z : t === T.d4z.GUILD_CATEGORY ? v.Z : m.Z
                        }(e);
                        return (0, r.jsxs)("div", {
                            className: a()(w().channel, L({}, w().category, e.type === T.d4z.GUILD_CATEGORY)),
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
                    children: [(0, r.jsx)(f.RoleCircle, {
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
        223919: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(468811),
                o = n.n(r),
                i = n(281110),
                a = n(2590);

            function s(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            s(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            s(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var c = function(e, t) {
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

            function l() {
                return (l = u((function(e) {
                    var t, n, r;
                    return c(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, i.ZP.post({
                                    url: a.ANM.HANDOFF,
                                    body: {
                                        key: e
                                    },
                                    oldFormErrors: !0,
                                    retries: 1
                                })];
                            case 1:
                                t = o.sent(), n = t.body;
                                if (null != (r = n.handoff_token)) return [2, r];
                                throw new Error("Missing handoff token!")
                        }
                    }))
                }))).apply(this, arguments)
            }
            const f = {
                generateNonce: function() {
                    return o().v4()
                },
                createHandoffToken: function(e) {
                    return l.apply(this, arguments)
                }
            }
        },
        196644: (e, t, n) => {
            "use strict";
            n.d(t, {
                HJ: () => h,
                yD: () => y,
                Zd: () => v
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

            function y(e, t) {
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

            function v(e) {
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
                r.__getLocalVars = function() {
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
                Z: () => v
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
                r.__getLocalVars = function() {
                    return {
                        selectedCountryCode: l,
                        defaultCountryCode: p
                    }
                };
                return n
            }(r.ZP.DeviceSettingsStore);
            y.displayName = "PhoneStore";
            y.persistKey = "PhoneStore";
            const v = new y(o.Z, {
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
                Z: () => S
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
                d = n(882723),
                p = n(335186),
                h = n(107364),
                y = n(473708),
                v = n(2270),
                m = n.n(v),
                g = n(637678),
                E = n.n(g);

            function _(e, t, n) {
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

            function A(e) {
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
                        var o = b(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }
            var S = function(e) {
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
                var t = A(n);

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
                                        _(e, t, n[t])
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
                        children: y.Z.Messages.NONE
                    }) : (0, r.jsx)(d.ScrollerAuto, {
                        className: m().phoneFieldScroller,
                        children: i
                    })
                };
                i.render = function() {
                    var e = this.props.className;
                    return (0, r.jsxs)(d.PopoutList, {
                        className: a()(m().phoneFieldPopout, E().elevationBorderLow, e),
                        children: [(0, r.jsx)(d.PopoutList.SearchBar, {
                            query: this.state.query,
                            placeholder: y.Z.Messages.SEARCH_COUNTRY,
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
        623236: (e, t, n) => {
            "use strict";
            n.d(t, {
                $5: () => o,
                F4: () => i,
                vc: () => a
            });
            var r = (0, n(260561).B)({
                    kind: "user",
                    id: "2023-06_unique_username_registration",
                    label: "Unique Username Registration",
                    defaultConfig: {
                        enabled: !1,
                        livecheckEnabled: !1,
                        suggestions: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Unique Username Registration enabled -livecheck -suggestions",
                        config: {
                            enabled: !0,
                            livecheckEnabled: !1,
                            suggestions: !1
                        }
                    }, {
                        id: 2,
                        label: "Unique Username Registration enabled -livecheck +suggestions",
                        config: {
                            enabled: !0,
                            livecheckEnabled: !1,
                            suggestions: !0
                        }
                    }, {
                        id: 3,
                        label: "Unique Username Registration enabled +livecheck -suggestions",
                        config: {
                            enabled: !0,
                            livecheckEnabled: !0,
                            suggestions: !1
                        }
                    }, {
                        id: 4,
                        label: "Unique Username Registration enabled +livecheck +suggestions",
                        config: {
                            enabled: !0,
                            livecheckEnabled: !0,
                            suggestions: !0
                        }
                    }]
                }),
                o = function() {
                    return r.useExperiment({
                        location: "83ca1a_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled
                },
                i = function() {
                    return r.useExperiment({
                        location: "83ca1a_3"
                    }, {
                        autoTrackExposure: !1
                    })
                },
                a = function() {
                    return r.getCurrentConfig({
                        location: "83ca1a_4"
                    }, {
                        autoTrackExposure: !1
                    }).suggestions
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
                    y = (0, i.useSpring)({
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
                    v = (0, i.useSpring)({
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
                        height: y.height,
                        paddingBottom: y.paddingBottom,
                        marginTop: y.marginTop
                    },
                    children: (0, r.jsx)(i.animated.div, {
                        style: {
                            opacity: v.opacity
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
                _: () => y,
                Y: () => v
            });
            var r = n(441143),
                o = n.n(r),
                i = n(761953),
                a = n(716239),
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
            var d, p, h = function(e, t) {
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
                y = function(e) {
                    var t;
                    switch (e) {
                        case l.Cj.SNOWGLOBE:
                            t = function() {
                                return n.e(87430).then(n.t.bind(n, 887430, 19)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case l.Cj.BOX:
                            t = function() {
                                return n.e(85318).then(n.t.bind(n, 785318, 19)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case l.Cj.CUP:
                            t = function() {
                                return n.e(58525).then(n.t.bind(n, 158525, 19)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case l.Cj.STANDARD_BOX:
                            t = function() {
                                return n.e(52216).then(n.t.bind(n, 252216, 19)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case l.Cj.CAKE:
                            t = function() {
                                return n.e(60652).then(n.t.bind(n, 60652, 19)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case l.Cj.CHEST:
                            t = function() {
                                return n.e(59218).then(n.t.bind(n, 459218, 19)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        case l.Cj.COFFEE:
                            t = function() {
                                return n.e(62800).then(n.t.bind(n, 362800, 19)).then((function(e) {
                                    return e.default
                                }))
                            };
                            break;
                        default:
                            t = function() {
                                return Promise.resolve("Error: Invalid giftStyle")
                            }
                    }
                    return t
                },
                v = (p = (d = function(e, t) {
                    var n, r;
                    return h(this, (function(l) {
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
                        var o = d.apply(e, t);

                        function i(e) {
                            f(o, n, r, i, a, "next", e)
                        }

                        function a(e) {
                            f(o, n, r, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }), function(e, t) {
                    return p.apply(this, arguments)
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
                    p = (0, i.e7)([a.Z], (function() {
                        return a.Z.useReducedMotion
                    })),
                    h = o.useRef(null != t ? (0, u._)(t) : function() {
                        return Promise.resolve()
                    }),
                    y = f(o.useState(0), 2),
                    v = y[0],
                    m = y[1];
                o.useEffect((function() {
                    if (null != t) {
                        h.current = (0, u._)(t);
                        m((function(e) {
                            return e + 1
                        }))
                    }
                }), [t]);
                if (null != t && !c.Cj.hasOwnProperty(t)) throw new Error("Unexpected giftStyle ".concat(t));
                return null == t ? null : (0, r.jsx)(s.Z, {
                    importData: h.current,
                    shouldAnimate: !p && d,
                    className: n,
                    versionKey: v
                })
            }
        },
        686874: (e, t, n) => {
            "use strict";
            n.d(t, {
                e: () => d
            });
            var r = n(468811),
                o = n.n(r),
                i = n(306472),
                a = n(652591),
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
            var l = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this.loadId = o().v4();
                        this.appUIViewed = !1
                    }
                    var t = e.prototype;
                    t.trackEvent = function(e, t) {
                        var n = this,
                            r = Date.now();
                        requestIdleCallback((function() {
                            a.default.track(e, c(function(e) {
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
                            }({}, function() {
                                var e, t, n, r = "--campaign-id=",
                                    o = null !== (n = null === i.Z || void 0 === i.Z || null === (e = i.Z.processUtils) || void 0 === e || null === (t = e.getMainArgvSync) || void 0 === t ? void 0 : t.call(e)) && void 0 !== n ? n : [],
                                    a = !0,
                                    s = !1,
                                    u = void 0;
                                try {
                                    for (var c, l = o[Symbol.iterator](); !(a = (c = l.next()).done); a = !0) {
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
                            this.trackEvent(s.rMx.APP_UI_VIEWED, e);
                            this.appUIViewed = !0
                        }
                    };
                    return e
                }(),
                f = new l;

            function d(e) {
                f.trackAppUIViewed(e)
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
                y = "UserFlowAnalyticsStore_current",
                v = "UserFlowAnalyticsStore";
            new i.Z("UserFlowAnalytics");

            function m(e) {
                if (e === s.MK.UNKNOWN) return null;
                var t = o.Z.get("".concat(v, "-").concat(e));
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
                    var e, n = null !== (e = t().currentFlow) && void 0 !== e ? e : o.Z.get(y);
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
                            var t = "".concat(v, "-").concat(e.type);
                            if (e.ended) {
                                o.Z.remove(t);
                                o.Z.remove(y)
                            } else {
                                o.Z.set("".concat(v, "-").concat(e.type), f(l({}, e), {
                                    version: 1
                                }));
                                o.Z.set(y, e.type)
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

            function E(e, t) {
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

            function _(e, t) {
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

            function b() {
                return null != g.getState().activeFlow()
            }
            const O = {
                flowStart: E,
                flowStepOrStart: function(e, t) {
                    b() ? _(e, t) : E(e, t)
                },
                flowStep: _,
                hasActiveFlow: b
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
                y = h,
                v = "LAST_VIEWED_PATH";
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
                    y = null != e ? e : h
                };
                r.getState = function() {
                    return y
                };
                r.__getLocalVars = function() {
                    return {
                        initialState: h,
                        state: y,
                        LEGACY_STORAGE_KEY: v
                    }
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
                        return null !== (e = y.lastViewedNonVoicePath) && void 0 !== e ? e : a.Z5c.ME
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
                var e = o.Z.get(v, null);
                o.Z.remove(v);
                return {
                    lastViewedPath: e
                }
            }];
            const g = new m(i.Z, {
                SAVE_LAST_ROUTE: function(e) {
                    var t = e.path;
                    y.lastViewedPath = t;
                    return !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    var t = e.path;
                    y.lastViewedNonVoicePath = t;
                    return !0
                }
            })
        },
        836485: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                s = n(107364),
                u = n(304404),
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
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
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
            var y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e) {
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
                var t = v(n);

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
                var t = v(n);

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
            const E = g
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
                u = n(882723),
                c = n(2590),
                l = n(473708),
                f = n(105227),
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

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
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
            var b, O = function(e) {
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
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }! function(e) {
                e.TOP = "top";
                e.BOTTOM = "bottom"
            }(b || (b = {}));
            var T = {
                    container: function(e, t) {
                        var n = t.isDisabled;
                        return m(v({}, e), {
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
                        return m(v({}, e), {
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
                        return m(v({}, e), {
                            color: "var(--interactive-normal)",
                            opacity: n ? .5 : 1
                        })
                    },
                    input: function(e) {
                        return m(v({}, e), {
                            color: "var(--interactive-normal)"
                        })
                    },
                    menu: function(e) {
                        return m(v({}, e), {
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
                        return m(v({}, e), {
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
                        return m(v({}, e), {
                            alignItems: "flex-start"
                        })
                    },
                    dropdownIndicator: function(e, t) {
                        var n = t.isDisabled;
                        return m(v({}, e), {
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
                        return m(v({}, e), {
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
                        return m(v({}, e, n ? {
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
                        return m(v({}, e), {
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
                        t && _(e, t)
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
                            y = e.value,
                            E = e.autofocus,
                            _ = e.disabled,
                            b = e.clearable,
                            O = e.searchable,
                            I = e.styleOverrides,
                            N = e.isMulti,
                            A = e.placeholder,
                            S = e.filterOption,
                            x = e.closeMenuOnSelect,
                            j = void 0 === x || x,
                            C = v({}, g(e, ["className", "selectClassName", "error", "valueRenderer", "optionRenderer", "multiValueRenderer", "options", "value", "autofocus", "disabled", "clearable", "searchable", "styleOverrides", "isMulti", "placeholder", "filterOption", "closeMenuOnSelect"]));
                        null != E && (C.autoFocus = E);
                        null != _ && (C.isDisabled = _);
                        null != b && (C.isClearable = b);
                        null != O && (C.isSearchable = O);
                        var P = {
                            IndicatorSeparator: function() {
                                return null
                            }
                        };
                        null != c && (P.Option = function(e) {
                            return (0, r.jsx)(s.wx.Option, m(v({}, e), {
                                children: c(e.data)
                            }))
                        });
                        null != i && (P.SingleValue = function(e) {
                            return (0, r.jsx)(s.wx.SingleValue, m(v({}, e), {
                                children: i(e.data)
                            }))
                        });
                        null != f && (P.MultiValue = function(e) {
                            return f(e.data)
                        });
                        var R, w = null != I ? I : T;
                        if (N && Array.isArray(y)) {
                            var Z = {};
                            p.forEach((function(e) {
                                Z[String(e.value)] = e
                            }));
                            R = y.map((function(e) {
                                return Z[String(e)]
                            }))
                        } else R = null != y ? p.find((function(e) {
                            return e.value === y
                        })) : null;
                        return (0, r.jsx)(u.FocusRing, {
                            focused: this.state.isFocused && !this.state.isOpen,
                            ringTarget: this._containerRef,
                            children: (0, r.jsxs)("div", {
                                className: a()(d().select, t, h({}, d().error, null != o)),
                                ref: this._containerRef,
                                children: [(0, r.jsx)(s.ZP, m(v({}, C), {
                                    className: n,
                                    ref: this._selectRef,
                                    isMulti: N,
                                    components: P,
                                    options: p,
                                    styles: w,
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onMenuOpen: this.handleMenuOpen,
                                    onMenuClose: this.handleMenuClose,
                                    closeMenuOnSelect: j,
                                    value: R,
                                    onKeyDown: this.handleKeyDown,
                                    placeholder: null != A ? A : l.Z.Messages.SELECT,
                                    noOptionsMessage: function() {
                                        return l.Z.Messages.NO_RESULTS_FOUND
                                    },
                                    filterOption: S
                                })), null != o ? (0, r.jsx)("div", {
                                    className: d().errorMessage,
                                    children: o
                                }) : null]
                            })
                        })
                    };
                    return n
                }(o.Component);
            N.MenuPlacements = b
        },
        457997: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                o = (n(667294),
                    n(633878));

            function i(e, t, n) {
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

            function s(e, t) {
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

            function u(e) {
                var t = e.width,
                    n = void 0 === t ? 20 : t,
                    u = e.height,
                    c = void 0 === u ? 20 : u,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    d = e.foreground,
                    p = s(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", a(function(e) {
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
                    height: c,
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
            }
        },
        23727: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
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

            function s(e, t) {
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

            function u(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    u = e.height,
                    c = void 0 === u ? 24 : u,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    d = e.foreground,
                    p = s(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", a(function(e) {
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
                    height: c,
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
            }
        },
        646161: (e, t, n) => {
            "use strict";
            n.d(t, {
                w4: () => _,
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
                y = "Linux",
                v = "OS X",
                m = "win",
                g = "osx",
                E = "linux";

            function _(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = t ? "/ptb" : "",
                    o = null != n ? "&format=".concat(n) : "";
                return "".concat(u.fzT.DESKTOP).concat(r, "?platform=").concat(e).concat(o)
            }

            function b() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (r = i().os) || void 0 === r ? void 0 : r.family;
                return null == e ? m : -1 !== e.indexOf(l) || -1 !== e.indexOf(f) || -1 !== e.indexOf(d) || -1 !== e.indexOf(p) || -1 !== e.indexOf(h) || -1 !== e.indexOf(y) ? E : -1 !== e.indexOf(v) ? g : m
            }

            function O(e) {
                var t;
                return (c(t = {}, m, "Windows"), c(t, g, "Mac"), c(t, E, "Linux"), t)[b(e)]
            }

            function I() {
                var e = b();
                return _(e, !1, e === E ? "tar.gz" : null)
            }

            function T(e, t, n) {
                var r = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0,
                            a.ZP)(null != r ? r : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
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
        }
    }
]);
//# sourceMappingURL=3ab90d291bebadd8db16.js.map