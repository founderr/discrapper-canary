"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [95839], {
        859980: (e, t, n) => {
            n.d(t, {
                Z_: () => u,
                hY: () => c,
                sd: () => l
            });
            var r = n(281110),
                i = n(744564),
                o = n(491260),
                a = n(2590);

            function u(e, t) {
                i.Z.dispatch({
                    type: "ACTIVITY_SYNC",
                    activity: e,
                    userId: t
                })
            }

            function c(e, t) {
                l(e, t).then((function(n) {
                    return i.Z.dispatch({
                        type: "ACTIVITY_PLAY",
                        activity: e,
                        userId: t,
                        metadata: n
                    })
                })).catch((function() {
                    return i.Z.dispatch({
                        type: "ACTIVITY_PLAY",
                        activity: e,
                        userId: t
                    })
                }))
            }

            function l(e, t) {
                var n = e.metadata;
                if (null != n) return Promise.resolve(n);
                var u = o.Z.getActivityMetadata(t);
                return null != u ? Promise.resolve(u) : null == e.session_id ? Promise.reject(new Error("null/undefined session_id")) : r.ZP.get({
                    url: a.ANM.USER_ACTIVITY_METADATA(t, e.session_id, e.application_id),
                    oldFormErrors: !0
                }).then((function(e) {
                    var n = e.body;
                    i.Z.dispatch({
                        type: "ACTIVITY_METADATA_UPDATE",
                        metadata: n,
                        userId: t
                    });
                    return n
                }))
            }
        },
        623945: (e, t, n) => {
            n.d(t, {
                t: () => i,
                H: () => o
            });
            var r = n(744564);

            function i(e) {
                r.Z.dispatch({
                    type: "ACTIVITY_SHELF_MARK_ACTIVITY_USED",
                    applicationId: e,
                    timestamp: (new Date).getTime()
                })
            }

            function o(e) {
                r.Z.dispatch({
                    type: "ACTIVITY_SHELF_SET_ORDER",
                    order: e
                })
            }
        },
        97393: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var r = n(202351),
                i = n(744564);

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function c(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
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
                    var n, r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var d = {
                usageByApplicationId: {},
                shelfOrder: []
            };
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
                    t && l(e, t)
                }(n, e);
                var t = f(n);

                function n() {
                    o(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    d = function(e) {
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
                    }({}, {
                        usageByApplicationId: {},
                        shelfOrder: []
                    }, null != e ? e : {})
                };
                r.getState = function() {
                    return d
                };
                r.__getLocalVars = function() {
                    return {
                        kUsageEntriesPerApplicationMax: 64,
                        state: d
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            p.displayName = "ActivityShelfStore";
            p.persistKey = "ActivityShelfStore";
            const _ = new p(i.Z, {
                LOGOUT: function() {
                    d = {
                        usageByApplicationId: {},
                        shelfOrder: []
                    }
                },
                ACTIVITY_SHELF_MARK_ACTIVITY_USED: function(e) {
                    var t = e.applicationId,
                        n = e.timestamp,
                        r = d.usageByApplicationId[t];
                    if (null != r) {
                        r.length >= 64 && r.splice(0, r.length - 64 + 1);
                        r.push(n)
                    } else d.usageByApplicationId[t] = [n]
                },
                ACTIVITY_SHELF_SET_ORDER: function(e) {
                    var t = e.order;
                    d.shelfOrder = t
                }
            })
        },
        122012: (e, t, n) => {
            n.d(t, {
                d: () => i,
                Y$: () => o,
                jS: () => a,
                tZ: () => u,
                a8: () => c
            });
            var r = n(744564);

            function i() {
                r.Z.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_ENABLED"
                })
            }

            function o() {
                r.Z.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE"
                })
            }

            function a(e) {
                r.Z.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE",
                    activityUrlOverride: e
                })
            }

            function u(e) {
                r.Z.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
                    applicationId: e,
                    timestamp: (new Date).getTime()
                })
            }

            function c(e) {
                r.Z.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER",
                    filter: e
                })
            }
        },
        469141: (e, t, n) => {
            n.d(t, {
                C: () => d
            });
            var r = n(785893),
                i = (n(667294), n(882723)),
                o = n(63509),
                a = n(2590);

            function u(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            u(o, r, i, a, c, "next", e)
                        }

                        function c(e) {
                            u(o, r, i, a, c, "throw", e)
                        }
                        a(void 0)
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
            var f = function(e, t) {
                var n, r, i, o, a = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = t.call(e, a)
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
                        }([o, u])
                    }
                }
            };

            function d(e) {
                var t = e.application,
                    u = e.onAgree,
                    d = e.onDisagree,
                    p = o.Z.getWindowOpen(a.KJ3.CHANNEL_CALL_POPOUT) ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
                (0, i.openModalLazy)(c((function() {
                    var e;
                    return f(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(2461)]).then(n.bind(n, 502461))];
                            case 1:
                                e = i.sent().ActivityAgeGateModal;
                                return [2, function(n) {
                                    return (0, r.jsx)(e, s(function(e) {
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
                                    }({}, n), {
                                        application: t,
                                        onAgree: u,
                                        onDisagree: d
                                    }))
                                }]
                        }
                    }))
                })), {
                    modalKey: "activity-age-gate",
                    contextKey: p
                });
                return Promise.resolve()
            }
        },
        771514: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(105783),
                i = n(473708);

            function o(e, t, n, o) {
                var a, u;
                r.Z.show({
                    title: i.Z.Messages.EMBEDDED_ACTIVITY_CHANGE_CONFIRM_TITLE,
                    cancelText: i.Z.Messages.CANCEL,
                    confirmText: i.Z.Messages.CONFIRM,
                    onConfirm: n,
                    onCancel: o,
                    body: i.Z.Messages.EMBEDDED_ACTIVITY_CHANGE_CONFIRM_BODY.format({
                        currentApplicationName: null !== (a = null == e ? void 0 : e.name) && void 0 !== a ? a : i.Z.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_DEFAULT,
                        targetApplicationName: null !== (u = null == t ? void 0 : t.name) && void 0 !== u ? u : i.Z.Messages.EMBEDDED_ACTIVITY_TARGET_APPLICATION_DEFAULT
                    })
                })
            }
        },
        255627: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(959207);

            function i(e) {
                var t, n = e.applicationId,
                    i = e.activityConfigs,
                    o = e.applications,
                    a = null !== (t = null == o ? void 0 : o.find((function(e) {
                        return e.id === n
                    }))) && void 0 !== t ? t : r.Z.getGame(n),
                    u = i.find((function(e) {
                        return e.application_id === n
                    }));
                return null == u || null == a ? null : {
                    activity: u,
                    application: a
                }
            }
        },
        61040: (e, t, n) => {
            n.d(t, {
                Z: () => A
            });
            var r = n(875700),
                i = n(451936),
                o = n(61209),
                a = n(959207),
                u = n(715107),
                c = n(473903),
                l = n(456826),
                s = n(469141),
                f = n(771514),
                d = n(624889),
                p = n(375342),
                _ = n(765524),
                v = n(2590);

            function y(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function h(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            y(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            y(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var I = function(e, t) {
                var n, r, i, o, a = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = t.call(e, a)
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
                        }([o, u])
                    }
                }
            };

            function E(e, t, n, r, i) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = h((function(e, t, n, r, i) {
                    var a, u, s;
                    return I(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                a = o.Z.getChannel(t);
                                u = null == a ? void 0 : a.getGuildId();
                                s = c.default.getCurrentUser();
                                return null == a || null == t || null == u && !a.isPrivate() || null == s ? [2, !1] : [4, (0, d.Z)({
                                    channelId: a.id,
                                    bypassChangeModal: i
                                })];
                            case 1:
                                if (!f.sent()) return [2, !1];
                                (0, _.Z)(u, t);
                                (0, l.J$)(t, {
                                    application_id: e.application_id
                                }, r);
                                (0, p.Z)({
                                    type: v.q5t.JOIN,
                                    userId: s.id,
                                    applicationId: e.application_id,
                                    locationObject: n,
                                    analyticsLocations: r
                                });
                                return [2, !0]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function A(e) {
                var t = e.activity,
                    n = e.currentEmbeddedApplication,
                    l = e.activityChannelId,
                    d = e.locationObject,
                    p = e.embeddedActivitiesManager,
                    v = e.analyticsLocations,
                    y = o.Z.getChannel(l),
                    b = null == y ? void 0 : y.getGuildId(),
                    A = null == b || "" === b,
                    C = c.default.getCurrentUser();
                if (null == y || A && !y.isPrivate() || null == l) return Promise.resolve(!1);
                if (u.Z.getVoiceChannelId() === l && (null == n ? void 0 : n.id) === t.application_id) {
                    (0, _.Z)(b, l);
                    return Promise.resolve(!0)
                }
                var T, O = (T = h((function() {
                    var e, n, o, u, c, f, p = arguments;
                    return I(this, (function(_) {
                        switch (_.label) {
                            case 0:
                                e = (p.length > 0 && void 0 !== p[0] ? p[0] : {
                                    bypassChangeVcModal: !1
                                }).bypassChangeVcModal;
                                if (null != (null == C ? void 0 : C.nsfwAllowed)) return [3, 4];
                                if (null === (o = a.Z.getGame(t.application_id)) || void 0 === o) return [3, 1];
                                c = o;
                                return [3, 3];
                            case 1:
                                f = i.Z.createFromServer;
                                return [4, r.Z.fetchApplication(t.application_id)];
                            case 2:
                                c = f.apply(i.Z, [_.sent()]);
                                _.label = 3;
                            case 3:
                                if (!0 === (null === (n = (u = c).embeddedActivityConfig) || void 0 === n ? void 0 : n.requires_age_gate)) return [2, new Promise((function(n) {
                                    (0, s.C)({
                                        application: u,
                                        onAgree: function() {
                                            n(E(t, l, d, v, e))
                                        },
                                        onDisagree: function() {
                                            return n(!1)
                                        }
                                    })
                                }))];
                                _.label = 4;
                            case 4:
                                return [2, E(t, l, d, v, e)]
                        }
                    }))
                })), function() {
                    return T.apply(this, arguments)
                });
                return null != n ? new Promise((function(e) {
                    (0, f.Z)(n, t, (function() {
                        p.leaveActivity({
                            channelId: l,
                            applicationId: n.id
                        });
                        O({
                            bypassChangeVcModal: !0
                        })
                    }), (function() {
                        return e(!0)
                    }))
                })) : O()
            }
        },
        706148: (e, t, n) => {
            n.d(t, {
                Z: () => T
            });
            var r = n(565909),
                i = n(61209),
                o = n(567403),
                a = n(682776),
                u = n(473903),
                c = n(930948),
                l = n(623945),
                s = n(122012),
                f = n(456826),
                d = n(469141),
                p = n(771514),
                _ = n(59732),
                v = n(624889),
                y = n(375342),
                h = n(765524),
                I = n(436771),
                E = n(2590);

            function b(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function A(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            b(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            b(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var C = function(e, t) {
                var n, r, i, o, a = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0,
                                    i) && (o = [2 & o[0], i.value]);
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
                                o = t.call(e, a)
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
                        }([o, u])
                    }
                }
            };

            function T(e) {
                var t = e.activityItem,
                    n = e.currentActivity,
                    l = e.locationObject,
                    s = e.channelId,
                    f = e.guildId,
                    v = e.embeddedActivitiesManager,
                    y = e.analyticsLocations,
                    h = o.Z.getGuild(f),
                    b = u.default.getCurrentUser();
                if (null == h && !(0, I.I)(s) || null == b || null == t) return Promise.resolve(!1);
                var A = t.application,
                    C = t.activity;
                if (null == A) return Promise.resolve(!1);
                if (null == s) {
                    c.S.dispatch(E.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
                        applicationId: A.id
                    });
                    return Promise.resolve(!1)
                }
                var T = null != s ? (0, _.e4)({
                    channelId: s,
                    ChannelStore: i.Z,
                    GuildStore: o.Z,
                    PermissionStore: a.Z
                }) : _.jy.NO_CHANNEL;
                if (T !== _.jy.CAN_LAUNCH) {
                    T === _.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION && (0, r.w)();
                    return Promise.resolve(!1)
                }
                var S = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            bypassChangeVcModal: !1
                        }).bypassChangeVcModal,
                        t = C.requires_age_gate && null == b.nsfwAllowed;
                    return t ? new Promise((function(t) {
                        (0, d.C)({
                            application: A,
                            onAgree: function() {
                                return t(O({
                                    channelId: s,
                                    guildId: null == h ? void 0 : h.id,
                                    locationObject: l,
                                    application: A,
                                    analyticsLocations: y,
                                    bypassChangeVcModal: e
                                }))
                            },
                            onDisagree: function() {
                                return t(!1)
                            }
                        })
                    })) : O({
                        channelId: s,
                        guildId: null == h ? void 0 : h.id,
                        locationObject: l,
                        application: A,
                        analyticsLocations: y,
                        bypassChangeVcModal: e
                    })
                };
                return null != n ? new Promise((function(e) {
                    (0, p.Z)(n, A, (function() {
                        v.leaveActivity({
                            channelId: s,
                            applicationId: n.id
                        });
                        e(S({
                            bypassChangeVcModal: !0
                        }))
                    }), (function() {
                        return e(!1)
                    }))
                })) : S()
            }

            function O(e) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = A((function(e) {
                    var t, n, r, o, a, c, d, p;
                    return C(this, (function(_) {
                        switch (_.label) {
                            case 0:
                                t = e.channelId, n = e.guildId, r = e.locationObject, o = e.application, a = e.analyticsLocations, c = e.bypassChangeVcModal;
                                d = u.default.getCurrentUser();
                                p = i.Z.getChannel(t);
                                return null == d || null == p ? [2, !1] : [4, (0, v.Z)({
                                    channelId: t,
                                    bypassChangeModal: c
                                })];
                            case 1:
                                if (!_.sent()) return [2, !1];
                                f.J$(t, {
                                    application_id: o.id,
                                    name: o.name
                                }, a);
                                (0, h.Z)(n, t);
                                (0, y.Z)({
                                    type: E.q5t.LAUNCH,
                                    userId: d.id,
                                    applicationId: o.id,
                                    locationObject: r,
                                    analyticsLocations: a
                                });
                                l.t(o.id);
                                s.tZ(o.id);
                                return [2, !0]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        120819: (e, t, n) => {
            n.d(t, {
                z: () => o,
                a: () => a
            });
            var r = n(289283);

            function i() {
                return !r.tq && !r.Em
            }

            function o() {
                return i()
            }

            function a() {
                return i()
            }
        },
        774189: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(120415),
                i = n(120819),
                o = n(322422),
                a = n(545580),
                u = n(2590);

            function c(e) {
                var t = e.user,
                    n = e.activity,
                    c = e.application,
                    l = e.channelId,
                    s = e.currentUser,
                    f = e.isEmbedded,
                    d = e.ChannelStore,
                    p = e.GuildStore,
                    _ = e.GuildMemberCountStore,
                    v = e.RelationshipStore,
                    y = e.SelectedChannelStore,
                    h = e.VoiceStateStore,
                    I = e.PermissionStore,
                    E = (0, i.a)();
                if (null == t) return !1;
                if (f) return (0, o.ZP)({
                    userId: t.id,
                    activity: n,
                    channelId: l,
                    currentUser: s,
                    application: c,
                    isActivitiesEnabledForCurrentPlatform: E,
                    ChannelStore: d,
                    VoiceStateStore: h,
                    PermissionStore: I,
                    GuildStore: p
                }) === o.Fw.CAN_JOIN;
                if (!(0, r.nI)()) return !1;
                if ((0, a.Z)(n, u.xjy.PARTY_PRIVACY_FRIENDS) && v.isFriend(t.id)) return !0;
                if ((0, a.Z)(n, u.xjy.PARTY_PRIVACY_VOICE_CHANNEL)) {
                    var b = d.getChannel(y.getVoiceChannelId());
                    if (null == b || !h.isInChannel(b.id, t.id)) return !1;
                    switch (b.type) {
                        case u.d4z.DM:
                        case u.d4z.GROUP_DM:
                            return !0
                    }
                    var A = p.getGuild(b.getGuildId());
                    if (null == A || A.hasFeature(u.oNc.COMMUNITY)) return !1;
                    var C = _.getMemberCount(A.id);
                    return null != C && C < 100
                }
                return !1
            }
        },
        322422: (e, t, n) => {
            n.d(t, {
                Fw: () => r,
                ZP: () => _,
                s5: () => v
            });
            var r, i = n(202351),
                o = n(61209),
                a = n(567403),
                u = n(682776),
                c = n(473903),
                l = n(407561),
                s = n(176758),
                f = n(120819),
                d = n(235819),
                p = n(2590);
            ! function(e) {
                e[e.CAN_JOIN = 0] = "CAN_JOIN";
                e[e.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION";
                e[e.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION";
                e[e.CHANNEL_FULL = 3] = "CHANNEL_FULL";
                e[e.NO_CHANNEL = 4] = "NO_CHANNEL";
                e[e.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS";
                e[e.ACTIVITY_NOT_SUPPORTED_ON_OS = 6] = "ACTIVITY_NOT_SUPPORTED_ON_OS";
                e[e.ACTIVITY_AGE_GATED = 7] = "ACTIVITY_AGE_GATED";
                e[e.NO_USER = 8] = "NO_USER";
                e[e.IS_AFK_CHANNEL = 9] = "IS_AFK_CHANNEL";
                e[e.NO_GUILD = 10] = "NO_GUILD"
            }(r || (r = {}));

            function _(e) {
                var t, n, i, o = e.userId,
                    a = e.activity,
                    u = e.application,
                    c = e.channelId,
                    l = e.currentUser,
                    f = e.isActivitiesEnabledForCurrentPlatform,
                    _ = e.ChannelStore,
                    v = e.VoiceStateStore,
                    y = e.PermissionStore,
                    h = e.GuildStore;
                if (null == o) return r.NO_USER;
                if (!1 === (null == l ? void 0 : l.nsfwAllowed) && !0 === (null == u || null === (t = u.embeddedActivityConfig) || void 0 === t ? void 0 : t.requires_age_gate)) return r.ACTIVITY_AGE_GATED;
                if (!f) return r.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                if (!(0, d.Z)(null == u || null === (n = u.embeddedActivityConfig) || void 0 === n ? void 0 : n.supported_platforms)) return r.ACTIVITY_NOT_SUPPORTED_ON_OS;
                var I = null != c ? c : null === (i = v.getVoiceStateForSession(o, null == a ? void 0 : a.session_id)) || void 0 === i ? void 0 : i.channelId;
                if (null == I) return r.NO_CHANNEL;
                var E = _.getChannel(c);
                if (null == E) return r.NO_CHANNEL;
                var b = E.getGuildId();
                if (!E.isPrivate()) {
                    if (null == b) return r.NO_GUILD;
                    var A = h.getGuild(b);
                    if ((null == A ? void 0 : A.afkChannelId) === E.id) return r.IS_AFK_CHANNEL;
                    var C = v.getCurrentClientVoiceChannelId(E.getGuildId()) === I,
                        T = (0, s.rY)(E, v, h),
                        O = y.can(p.Plq.CONNECT, E);
                    if (!y.can(p.Plq.USE_EMBEDDED_ACTIVITIES, E)) return r.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                    if (!C) {
                        if (T) return r.CHANNEL_FULL;
                        if (!O) return r.NO_CHANNEL_CONNECT_PERMISSION
                    }
                }
                return r.CAN_JOIN
            }

            function v(e) {
                var t = e.userId,
                    n = e.activity,
                    r = e.channelId,
                    s = e.application,
                    d = (0, f.z)(),
                    p = (0, i.e7)([c.default], (function() {
                        return c.default.getCurrentUser()
                    }));
                return (0, i.e7)([o.Z, l.Z, u.Z, a.Z], (function() {
                    return _({
                        userId: t,
                        activity: n,
                        application: s,
                        channelId: r,
                        currentUser: p,
                        isActivitiesEnabledForCurrentPlatform: d,
                        ChannelStore: o.Z,
                        VoiceStateStore: l.Z,
                        PermissionStore: u.Z,
                        GuildStore: a.Z
                    })
                }), [n, s, r, p, d, t])
            }
        },
        59732: (e, t, n) => {
            n.d(t, {
                jy: () => r,
                e4: () => f,
                KF: () => d,
                g5: () => p
            });
            var r, i = n(202351),
                o = n(61209),
                a = n(567403),
                u = n(682776),
                c = n(436771),
                l = n(2590),
                s = n(473708);
            ! function(e) {
                e[e.CAN_LAUNCH = 0] = "CAN_LAUNCH";
                e[e.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION";
                e[e.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION";
                e[e.NO_CHANNEL = 3] = "NO_CHANNEL";
                e[e.NO_GUILD = 4] = "NO_GUILD";
                e[e.IS_AFK_CHANNEL = 5] = "IS_AFK_CHANNEL"
            }(r || (r = {}));

            function f(e) {
                var t = e.channelId,
                    n = e.ChannelStore,
                    i = e.GuildStore,
                    o = e.PermissionStore,
                    a = n.getChannel(t);
                if (null == a) return r.NO_CHANNEL;
                if (!(0,
                        c.I)(a.id)) {
                    var u = a.getGuildId();
                    if (null == u) return r.NO_GUILD;
                    var s = i.getGuild(u);
                    if ((null == s ? void 0 : s.afkChannelId) === a.id) return r.IS_AFK_CHANNEL;
                    if (!o.can(l.Plq.CONNECT, a)) return r.NO_CHANNEL_CONNECT_PERMISSION;
                    if (!o.can(l.Plq.USE_EMBEDDED_ACTIVITIES, a)) return r.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                }
                return r.CAN_LAUNCH
            }

            function d(e) {
                return (0, i.e7)([o.Z, a.Z, u.Z], (function() {
                    return f({
                        channelId: e,
                        ChannelStore: o.Z,
                        GuildStore: a.Z,
                        PermissionStore: u.Z
                    })
                }), [e])
            }

            function p(e) {
                switch (e) {
                    case r.CAN_LAUNCH:
                        return s.Z.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY;
                    case r.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                        return s.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                    default:
                        return s.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL
                }
            }
        },
        101604: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(88067);

            function i(e) {
                if (null != e && null != e.url && r.Fr.test(e.url)) return e.url
            }
        },
        545580: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(2590);

            function i(e, t) {
                return t !== r.xjy.INSTANCE && (null != e && null != e.flags && Boolean(e.flags & t))
            }
        },
        599055: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(312242);

            function i(e) {
                return null == e.premium_tier_requirement || (0, r.Z)(e)
            }
        },
        312242: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });

            function r(e) {
                var t = Date.now(),
                    n = null != e.free_period_starts_at ? Date.parse(e.free_period_starts_at) : null,
                    r = null != e.free_period_ends_at ? Date.parse(e.free_period_ends_at) : null;
                return (null != n || null != r) && (null == n && null != r ? t < r : null != n && null == r ? t >= n : null != n && null != r && t >= n && t < r)
            }
        },
        235819: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(73904),
                i = n(120415);

            function o(e) {
                var t, n;
                t = (0, i.gn)() ? r.C3.IOS : (0, i.Dt)() ? r.C3.ANDROID : r.C3.WEB;
                return null !== (n = null == e ? void 0 : e.includes(t)) && void 0 !== n && n
            }
        },
        71854: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(545580),
                i = n(2590);

            function o(e) {
                return (0, r.Z)(e, i.xjy.EMBEDDED)
            }
        },
        624889: (e, t, n) => {
            n.d(t, {
                Z: () => T
            });
            var r = n(747820),
                i = n(14096),
                o = n(414306),
                a = n(61209),
                u = n(682776),
                c = n(715107),
                l = n(407561);

            function s(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function f(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

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

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
                    return !0
                } catch (e) {
                    return !1
                }
            }

            function _(e, t, n) {
                _ = p() ? Reflect.construct : function(e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    var i = new(Function.bind.apply(e, r));
                    n && h(i, n.prototype);
                    return i
                };
                return _.apply(null, arguments)
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function y(e, t) {
                return !t || "object" !== I(t) && "function" != typeof t ? function(e) {
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
            var I = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                E = function(e) {
                    if (null === e || !(n = e, -1 !== Function.toString.call(n).indexOf("[native code]"))) return e;
                    var n;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, r)
                    }

                    function r() {
                        return _(e, arguments, v(this).constructor)
                    }
                    r.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    return h(r, e)
                };
                return E(e)
            }

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
                        var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            var A = function(e, t) {
                    var n, r, i, o, a = {
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
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                    o = t.call(e, a)
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
                            }([o, u])
                        }
                    }
                },
                C = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && h(e, t)
                    }(n, e);
                    var t = b(n);

                    function n() {
                        d(this, n);
                        return t.apply(this, arguments)
                    }
                    return n
                }(E(Error));

            function T(e) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = f((function(e) {
                    var t, n, s, f, d, p, _, v;
                    return A(this, (function(y) {
                        switch (y.label) {
                            case 0:
                                t = e.channelId, n = e.timeoutMs, s = void 0 === n ? 1e4 : n, f = e.bypassChangeModal, d = void 0 !== f && f;
                                return null == (p = a.Z.getChannel(t)) ? [2, !1] : [4, i.Z.handleVoiceConnect({
                                    bypassGuildIdCheck: !0,
                                    bypassChangeModal: d,
                                    channel: p,
                                    connected: l.Z.isInChannel(t),
                                    needSubscriptionToAccess: (0, o.$)(t, a.Z, r.Z, u.Z).needSubscriptionToAccess
                                })];
                            case 1:
                                if (!y.sent()) return [2, !1];
                                _ = new Promise((function(e, n) {
                                    var r = setTimeout((function() {
                                        n(new C("Joining voice channel has timed out."))
                                    }), s);
                                    c.Z.addConditionalChangeListener((function() {
                                        if (c.Z.getVoiceChannelId() === t) {
                                            clearTimeout(r);
                                            e();
                                            return !1
                                        }
                                        return !0
                                    }))
                                }));
                                y.label = 2;
                            case 2:
                                y.trys.push([2, 4, , 5]);
                                return [4, _];
                            case 3:
                                y.sent();
                                return [3, 5];
                            case 4:
                                if ((v = y.sent()) instanceof C) return [2, !1];
                                throw v;
                            case 5:
                                return [2, !0]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        375342: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(652591),
                i = n(2590);

            function o(e) {
                var t = e.type,
                    n = e.source,
                    o = e.userId,
                    a = e.applicationId,
                    u = e.partyId,
                    c = e.messageId,
                    l = e.locationObject,
                    s = e.analyticsLocations;
                r.default.track(i.rMx.APPLICATION_OPENED, {
                    type: t,
                    source: n,
                    application_id: a,
                    party_id: null != u ? u : void 0,
                    other_user_id: o,
                    message_id: c,
                    location: l,
                    location_stack: s
                })
            }
        },
        765524: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(979197),
                i = n(625797),
                o = n(784426),
                a = n(2590);

            function u(e, t) {
                r.Z.getWindowOpen(a.KJ3.CHANNEL_CALL_POPOUT) ? (0, i.Z)(a.KJ3.CHANNEL_CALL_POPOUT) : (0, o.uL)(a.Z5c.CHANNEL(e, t))
            }
        },
        195034: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(202351),
                i = n(715107),
                o = n(258104);

            function a() {
                return (0, r.e7)([o.ZP, i.Z], (function() {
                    var e = i.Z.getVoiceChannelId();
                    if (null != e) {
                        var t;
                        return null !== (t = o.ZP.getSelfEmbeddedActivityForChannel(e)) && void 0 !== t ? t : void 0
                    }
                }))
            }
        },
        483535: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(28661),
                i = n(195034);

            function o(e, t) {
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
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u() {
                var e = (0, i.Z)(),
                    t = a((0, r.Z)(null == e ? [] : [e.application_id]), 1)[0];
                return null != t ? t : void 0
            }
        },
        436771: (e, t, n) => {
            n.d(t, {
                Z: () => a,
                I: () => u
            });
            var r = n(318715),
                i = n(61209),
                o = n(609145);

            function a(e) {
                var t, n = (0, o.g$)(),
                    a = (0, r.ZP)([i.Z], (function() {
                        return i.Z.getChannel(e)
                    })),
                    u = null !== (t = null == a ? void 0 : a.isPrivate()) && void 0 !== t && t;
                return n && u
            }

            function u(e) {
                if (null == e) return !1;
                var t, n = i.Z.getChannel(e),
                    r = null !== (t = null == n ? void 0 : n.isPrivate()) && void 0 !== t && t;
                return o.tF.getCurrentConfig({
                    location: "f31c95_1"
                }, {
                    autoTrackExposure: !1
                }).isActivitiesInGdmEnabled && r
            }
        },
        595258: (e, t, n) => {
            n.d(t, {
                Z: () => ge
            });
            var r = n(785893),
                i = (n(667294), n(882723)),
                o = n(744564),
                a = n(895303),
                u = n(456826),
                c = n(247250),
                l = n(875700),
                s = n(301928),
                f = n(566706),
                d = n(705711),
                p = n(664625),
                _ = n(61209),
                v = n(959207),
                y = n(563367),
                h = n(715107),
                I = n(473903),
                E = n(652591),
                b = n(120415),
                A = n(97393),
                C = n(258104),
                T = n(255627),
                O = n(105783),
                S = n(565909),
                g = n(451936),
                N = n(567403),
                m = n(682776),
                D = n(407561),
                P = n(61040),
                Z = n(322422),
                w = n(473708);

            function L(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function M(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            L(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            L(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var R = function(e, t) {
                var n, r, i, o, a = {
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
                    }),
                    o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = t.call(e, a)
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
                        }([o, u])
                    }
                }
            };

            function V(e) {
                var t = e.embeddedActivityJoinability,
                    n = e.handleCanJoin;
                switch (t) {
                    case Z.Fw.CAN_JOIN:
                        null == n || n();
                        break;
                    case Z.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                        (0, S.w)();
                        break;
                    case Z.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                        O.Z.show({
                            title: w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                            body: w.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                            hideActionSheet: !1
                        });
                        break;
                    case Z.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
                        O.Z.show({
                            title: w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                            body: w.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS,
                            hideActionSheet: !1
                        });
                        break;
                    case Z.Fw.ACTIVITY_AGE_GATED:
                        O.Z.show({
                            title: w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                            body: w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE,
                            hideActionSheet: !1
                        });
                        break;
                    case Z.Fw.NO_CHANNEL_CONNECT_PERMISSION:
                    case Z.Fw.CHANNEL_FULL:
                    case Z.Fw.NO_CHANNEL:
                    case Z.Fw.NO_USER:
                        O.Z.show({
                            title: w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                            body: w.Z.Messages.ACTIVITIES_GENERIC_LAUNCH_FAILURE_DIALOG_BODY,
                            hideActionSheet: !1
                        })
                }
            }

            function U(e) {
                return F.apply(this, arguments)
            }

            function F() {
                F = M((function(e) {
                    var t, n, r, i, o, a, u, c, s, f, d, p, y, h, E, b;

                    function A() {
                        return T.apply(this, arguments)
                    }

                    function T() {
                        return (T = M((function() {
                            return R(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return null == c ? [2] : [4, (0, P.Z)({
                                            activity: c,
                                            currentEmbeddedApplication: b,
                                            activityChannelId: t,
                                            locationObject: {},
                                            embeddedActivitiesManager: a,
                                            analyticsLocations: o
                                        })];
                                    case 1:
                                        e.sent();
                                        return [2]
                                }
                            }))
                        }))).apply(this, arguments)
                    }
                    return R(this, (function(T) {
                        switch (T.label) {
                            case 0:
                                t = e.channelId, n = e.applicationId, r = e.activityId, i = e.inputApplication, o = e.analyticsLocations, a = e.embeddedActivitiesManager;
                                u = C.ZP.getEmbeddedActivitiesForChannel(t);
                                c = u.find((function(e) {
                                    return e.application_id === n && (null == r || e.activity_id === r)
                                }));
                                return null != (s = i) ? [3, 2] : [4, l.Z.fetchApplication(n)];
                            case 1:
                                f = T.sent();
                                s = g.Z.createFromServer(f);
                                T.label = 2;
                            case 2:
                                if (null == c || null == s) return [2];
                                d = I.default.getCurrentUser();
                                p = (0, Z.ZP)({
                                    userId: null == d ? void 0 : d.id,
                                    activity: c,
                                    application: s,
                                    channelId: t,
                                    currentUser: d,
                                    isActivitiesEnabledForCurrentPlatform: !0,
                                    ChannelStore: _.Z,
                                    VoiceStateStore: D.Z,
                                    PermissionStore: m.Z,
                                    GuildStore: N.Z
                                });
                                y = C.ZP.getSelfEmbeddedActivityForChannel(t);
                                h = null == y ? void 0 : y.application_id;
                                b = null != h && null !== (E = v.Z.getGame(h)) && void 0 !== E ? E : void 0;
                                V({
                                    embeddedActivityJoinability: p,
                                    handleCanJoin: A
                                });
                                return [2]
                        }
                    }))
                }));
                return F.apply(this, arguments)
            }
            var Y = n(706148),
                j = n(120819),
                k = n(838733),
                G = n(599055),
                B = n(312242),
                x = n(235819),
                H = n(88067),
                J = n(2590);

            function K(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function W(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function q(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            W(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            W(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function z(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function $(e) {
                $ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return $(e)
            }

            function X(e, t) {
                return !t || "object" !== ee(t) && "function" != typeof t ? K(e) : t
            }

            function Q(e, t) {
                Q = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Q(e, t)
            }
            var ee = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function te(e) {
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
                    var n, r = $(e);
                    if (t) {
                        var i = $(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return X(this, n)
                }
            }
            var ne = function(e, t) {
                    var n, r, i, o, a = {
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
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                    o = t.call(e, a)
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
                            }([o, u])
                        }
                    }
                },
                re = {},
                ie = {};

            function oe(e) {
                var t;
                return {
                    isPremiumActivity: null != (null == e ? void 0 : e.activity) ? !(0, G.Z)(null == e ? void 0 : e.activity) : void 0,
                    isFreePeriod: null != (null == e ? void 0 : e.activity) ? (0, B.Z)(null == e ? void 0 : e.activity) : void 0,
                    releasePhase: null == e || null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, k.Z)((0, b.Ij)())].release_phase
                }
            }

            function ae(e) {
                return ue.apply(this, arguments)
            }

            function ue() {
                return (ue = q((function(e) {
                    var t, n, r, i, o, a, u, c, l, s, p, v, y, h, b, O, S;
                    return ne(this, (function(g) {
                        switch (g.label) {
                            case 0:
                                t = e.channelId, n = e.embeddedActivity, r = e.analyticsLocations;
                                i = n.application_id;
                                o = _.Z.getChannel(t);
                                a = null == o ? void 0 : o.getGuildId();
                                u = I.default.getCurrentUser();
                                if (null == o || null == u) return [2];
                                c = C.ZP.getShelfActivities(a);
                                l = A.Z.getState().shelfOrder;
                                s = 0 === C.ZP.getEmbeddedActivitiesForChannel(t).filter((function(e) {
                                    return e.application_id === i
                                })).length;
                                p = (0, T.Z)({
                                    applicationId: i,
                                    activityConfigs: c
                                });
                                v = l.findIndex((function(e) {
                                    return e === i
                                }));
                                y = oe(p), h = y.isPremiumActivity, b = y.isFreePeriod, O = y.releasePhase;
                                return [4, (0, d.Z)()];
                            case 1:
                                S = g.sent();
                                ie[i] = function(e) {
                                    var t, n;
                                    re[i] = e;
                                    E.default.track(J.rMx.ACTIVITY_SESSION_JOINED, {
                                        channel_id: o.id,
                                        guild_id: o.getGuildId(),
                                        media_session_id: e.mediaSessionId,
                                        activity_session_id: e.activitySessionId,
                                        application_id: i,
                                        location_stack: r,
                                        user_premium_tier: u.premiumType,
                                        is_premium_activity: h,
                                        is_free_period: b,
                                        raw_thermal_state: S,
                                        n_participants: f.Z.getUserParticipantCount(o.id),
                                        is_activity_start: s,
                                        release_phase: O,
                                        activity_premium_tier_requirement: null == p || null === (t = p.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
                                        shelf_rank: null == p || null === (n = p.activity) || void 0 === n ? void 0 : n.shelf_rank,
                                        shelf_sorted_rank: -1 !== v ? v : null
                                    })
                                };
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function ce(e) {
                return null == e ? void 0 : e.activity_id
            }

            function le(e) {
                return se.apply(this, arguments)
            }

            function se() {
                return (se = q((function(e) {
                    var t, n, r, i, o, a, u, c, l, s, f, p, v, y, h, b;
                    return ne(this, (function(A) {
                        switch (A.label) {
                            case 0:
                                t = e.channelId, n = e.applicationId;
                                o = re[n];
                                a = _.Z.getChannel(t);
                                u = C.ZP.getEmbeddedActivityDurationMs(t, n);
                                c = I.default.getCurrentUser();
                                l = null == a ? void 0 : a.getGuildId();
                                if (null == o || null == a || null == c) return [2];
                                s = C.ZP.getShelfActivities(l);
                                f = (0, T.Z)({
                                    applicationId: n,
                                    activityConfigs: s
                                });
                                p = oe(f), v = p.isPremiumActivity, y = p.isFreePeriod, h = p.releasePhase;
                                return [4, (0, d.Z)()];
                            case 1:
                                b = A.sent();
                                E.default.track(J.rMx.ACTIVITY_SESSION_LEFT, {
                                    channel_id: a.id,
                                    guild_id: a.getGuildId(),
                                    media_session_id: o.mediaSessionId,
                                    activity_session_id: o.activitySessionId,
                                    application_id: n,
                                    duration_ms: u,
                                    user_premium_tier: c.premiumType,
                                    is_premium_activity: v,
                                    is_free_period: y,
                                    raw_thermal_state: b,
                                    release_phase: h,
                                    activity_premium_tier_requirement: null == f || null === (r = f.activity) || void 0 === r ? void 0 : r.premium_tier_requirement,
                                    shelf_rank: null == f || null === (i = f.activity) || void 0 === i ? void 0 : i.shelf_rank
                                });
                                delete ie[n];
                                delete re[n];
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function fe(e) {
                var t, n, r = e.channelId,
                    i = e.embeddedActivity,
                    o = e.connections,
                    a = e.updateCode,
                    u = p.default.getId(),
                    l = C.ZP.getEmbeddedActivitiesForChannel(r),
                    s = _.Z.getChannel(r);
                a === H.m2.ACTIVITY_STARTED && null !== (n = null == s ? void 0 : s.isPrivate()) && void 0 !== n && n && l.length <= 1 && void 0 === o.find((function(e) {
                    return e.user_id === u
                })) && c.Z.selectParticipant(r, null);
                if (o.some((function(e) {
                        return e.user_id === u
                    }))) {
                    var f = y.Z.getMediaSessionId(),
                        d = i.application_id,
                        v = ce(i);
                    if (null != d && null != v && null != f) {
                        null === (t = ie[d]) || void 0 === t || t.call(ie, {
                            mediaSessionId: f,
                            activitySessionId: v
                        });
                        delete ie[d]
                    }
                }
            }

            function de(e) {
                var t = e.mediaSessionId,
                    n = y.Z.getChannelId();
                if (null != t && null != n) {
                    var r = C.ZP.getSelfEmbeddedActivityForChannel(n),
                        i = null == r ? void 0 : r.application_id,
                        o = ce(r);
                    if (null != i && null != t && null != o) {
                        var a;
                        null === (a = ie[i]) || void 0 === a || a.call(ie, {
                            mediaSessionId: t,
                            activitySessionId: o
                        });
                        delete ie[i]
                    }
                }
            }
            var pe = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && Q(e, t)
                }(n, e);
                var t = te(n);

                function n() {
                    z(this, n);
                    var e;
                    (e = t.apply(this, arguments)).handleSelectedChannelUpdate = function() {
                        var t = h.Z.getVoiceChannelId(),
                            n = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var o, a = C.ZP.getSelfEmbeddedActivities().values()[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                var c = o.value,
                                    l = c.channelId,
                                    s = c.application_id;
                                l !== t && e.leaveActivity({
                                    channelId: l,
                                    applicationId: s
                                })
                            }
                        } catch (e) {
                            r = !0;
                            i = e
                        } finally {
                            try {
                                n || null == a.return || a.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                        if (null != t) {
                            var f = C.ZP.getEmbeddedActivitiesForChannel(t),
                                d = p.default.getId();
                            f.forEach((function(e) {
                                if (e.connections.has(d)) {
                                    null == C.ZP.getSelfEmbeddedActivityForChannel(e.channelId) && (0, u.rp)(e.channelId, e.application_id)
                                }
                            }))
                        }
                    };
                    e.handleActivityLaunchFail = function(t) {
                        var n = t.error;
                        if (null != t.guildId) {
                            var r = w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                            switch (n.code) {
                                case J.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                                    r = w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
                                    break;
                                case J.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                                    r = w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
                                    break;
                                case J.evJ.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                                    r = w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
                                    break;
                                case J.evJ.INVALID_PERMISSIONS:
                                    r = w.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                                    break;
                                case J.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                                    r = w.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                                    break;
                                case J.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                                    r = w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE
                            }
                            e.showLaunchErrorModal(r)
                        }
                    };
                    e.superHandleRPCDisconnect = function(t) {
                        var n = t.reason,
                            r = t.application.id;
                        if (null != r && null != n) {
                            var i = !0,
                                o = !1,
                                a = void 0;
                            try {
                                for (var u, c = C.ZP.getSelfEmbeddedActivities().values()[Symbol.iterator](); !(i = (u = c.next()).done); i = !0) {
                                    var l = u.value,
                                        s = l.application_id,
                                        f = l.channelId;
                                    s === r && e.leaveActivity({
                                        channelId: f,
                                        applicationId: r
                                    })
                                }
                            } catch (e) {
                                o = !0;
                                a = e
                            } finally {
                                try {
                                    i || null == c.return || c.return()
                                } finally {
                                    if (o) throw a
                                }
                            }
                            n.code !== J.$VG.CLOSE_NORMAL && e.showErrorModal(n, r)
                        }
                    };
                    var r, i = K(e);
                    e.handleDeferredOpen = (r = q((function(e) {
                        var t, n, r, o, a, c, s, f, d, p, y, I, E, b, A, O, S, g, N;
                        return ne(this, (function(m) {
                            switch (m.label) {
                                case 0:
                                    t = e.channelId, n = e.applicationId, r = e.analyticsLocations;
                                    return h.Z.getVoiceChannelId() !== t || (null == (c = C.ZP.getSelfEmbeddedActivityForChannel(t)) ? void 0 : c.application_id) === n ? [2] : [4, l.Z.fetchApplication(n)];
                                case 1:
                                    s = m.sent();
                                    if (!(0, j.a)()) {
                                        i.showLaunchErrorModal(w.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                                        return [2]
                                    }
                                    if (!(0, x.Z)(null == s || null === (o = s.embedded_activity_config) || void 0 === o ? void 0 : o.supported_platforms)) {
                                        i.showLaunchErrorModal(w.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
                                        return [2]
                                    }
                                    f = null == c ? void 0 : c.application_id;
                                    d = void 0;
                                    return null == f ? [3, 3] : [4, l.Z.fetchApplication(f)];
                                case 2:
                                    m.sent();
                                    d = v.Z.getGame(f);
                                    m.label = 3;
                                case 3:
                                    p = _.Z.getChannel(t);
                                    I = null !== (y = null == p ? void 0 : p.getGuildId()) && void 0 !== y ? y : void 0;
                                    return [4, (0, u.w1)({
                                        guildId: I
                                    })];
                                case 4:
                                    E = m.sent(), b = E.activityConfigs, A = E.applications;
                                    return null != (O = (0, T.Z)({
                                        applicationId: n,
                                        activityConfigs: b,
                                        applications: A
                                    })) ? [3, 6] : [4, (0, u.w1)({
                                        guildId: I,
                                        force: !0
                                    })];
                                case 5:
                                    S = m.sent();
                                    O = (0, T.Z)({
                                        applicationId: n,
                                        activityConfigs: S.activityConfigs,
                                        applications: S.applications
                                    });
                                    m.label = 6;
                                case 6:
                                    g = C.ZP.getEmbeddedActivitiesForChannel(t).find((function(e) {
                                        return e.application_id === n
                                    }));
                                    if (!((null !== (N = null == g || null === (a = g.connections) || void 0 === a ? void 0 : a.size) && void 0 !== N ? N : 0) > 0)) return [3, 7];
                                    U({
                                        channelId: t,
                                        applicationId: n,
                                        activityId: null,
                                        inputApplication: null,
                                        analyticsLocations: r,
                                        embeddedActivitiesManager: i
                                    });
                                    return [3, 9];
                                case 7:
                                    return [4, (0, Y.Z)({
                                        activityItem: O,
                                        currentActivity: d,
                                        channelId: t,
                                        guildId: I,
                                        embeddedActivitiesManager: i,
                                        analyticsLocations: r
                                    })];
                                case 8:
                                    m.sent();
                                    m.label = 9;
                                case 9:
                                    return [2]
                            }
                        }))
                    })), function(e) {
                        return r.apply(this, arguments)
                    });
                    return e
                }
                var r = n.prototype;
                r._initialize = function() {
                    h.Z.addChangeListener(this.handleSelectedChannelUpdate);
                    o.Z.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail);
                    o.Z.subscribe("EMBEDDED_ACTIVITY_OPEN", ae);
                    o.Z.subscribe("EMBEDDED_ACTIVITY_CLOSE", le);
                    o.Z.subscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", fe);
                    o.Z.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen);
                    o.Z.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect);
                    o.Z.subscribe("MEDIA_SESSION_JOINED", de)
                };
                r._terminate = function() {
                    h.Z.removeChangeListener(this.handleSelectedChannelUpdate);
                    o.Z.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail);
                    o.Z.unsubscribe("EMBEDDED_ACTIVITY_OPEN", ae);
                    o.Z.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", le);
                    o.Z.unsubscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", fe);
                    o.Z.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen);
                    o.Z.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect);
                    o.Z.unsubscribe("MEDIA_SESSION_JOINED", de)
                };
                return n
            }(s.Z);

            function _e(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function ve(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            _e(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            _e(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function ye(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function he(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ie(e) {
                Ie = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Ie(e)
            }

            function Ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        he(e, t, n[t])
                    }))
                }
                return e
            }

            function be(e, t) {
                return !t || "object" !== Ce(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Ae(e, t) {
                Ae = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Ae(e, t)
            }
            var Ce = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Te(e) {
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
                    var n, r = Ie(e);
                    if (t) {
                        var i = Ie(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return be(this, n)
                }
            }
            var Oe = function(e, t) {
                    var n, r, i, o, a = {
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
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1,
                                        r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                    o = t.call(e, a)
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
                            }([o, u])
                        }
                    }
                },
                Se = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && Ae(e, t)
                    }(n, e);
                    var t = Te(n);

                    function n() {
                        ye(this, n);
                        var e;
                        (e = t.apply(this, arguments)).handleRPCDisconnect = function(t) {
                            var n = t.reason,
                                r = t.application;
                            e.superHandleRPCDisconnect({
                                reason: n,
                                application: r
                            })
                        };
                        return e
                    }
                    var c = n.prototype;
                    c.showErrorModal = function(e) {
                        var t = e.code,
                            n = e.message;
                        (0, i.openModalLazy)(ve((function() {
                            return Oe(this, (function(e) {
                                return [2, function(e) {
                                    return (0, r.jsx)(a.default, Ee({
                                        title: w.Z.Messages.EMBEDDED_ACTIVITIES_ERROR_TITLE.format({
                                            code: t
                                        }),
                                        body: n
                                    }, e))
                                }]
                            }))
                        })))
                    };
                    c.showLaunchErrorModal = function(e) {
                        (0, i.openModalLazy)(ve((function() {
                            return Oe(this, (function(t) {
                                return [2, function(t) {
                                    return (0, r.jsx)(a.default, Ee({
                                        title: w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                        body: e
                                    }, t))
                                }]
                            }))
                        })))
                    };
                    c.leaveActivity = function(e) {
                        var t = e.channelId,
                            n = e.applicationId;
                        o.Z.wait((function() {
                            return (0, u.mW)({
                                channelId: t,
                                applicationId: n
                            })
                        }))
                    };
                    return n
                }(pe);
            const ge = new Se
        },
        28661: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(667294),
                i = n(202351),
                o = n(199731),
                a = n(875700),
                u = n(959207);

            function c(e, t) {
                return e.length === t.length && !e.some((function(e, n) {
                    return !(0,
                        o.Z)(t[n], e)
                }))
            }

            function l(e) {
                r.useEffect((function() {
                    a.Z.fetchApplications(e, !1)
                }), [e]);
                var t = (0, i.e7)([u.Z], (function() {
                    return e.map((function(e) {
                        return {
                            id: e,
                            application: u.Z.getGame(e),
                            fetching: u.Z.isFetching(e),
                            failed: u.Z.didFetchingFail(e)
                        }
                    }))
                }), [e], c);
                return r.useMemo((function() {
                    return t.map((function(e) {
                        return e.application
                    }))
                }), [t])
            }
        },
        14096: (e, t, n) => {
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                i = (n(667294), n(882723)),
                o = n(116404),
                a = n(409125),
                u = n(784426),
                c = n(487685),
                l = n(671293),
                s = n(664625),
                f = n(715107),
                d = n(407561),
                p = n(728998),
                _ = n(2590);

            function v(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function y(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            v(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            v(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
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
            var I = function(e, t) {
                var n, r, i, o, a = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = t.call(e, a)
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
                        }([o, u])
                    }
                }
            };
            const E = {
                handleVoiceConnect: function(e) {
                    var t = e.channel,
                        v = e.connected,
                        E = e.needSubscriptionToAccess,
                        b = e.locked,
                        A = void 0 !== b && b,
                        C = e.routeDirectlyToChannel,
                        T = void 0 !== C && C,
                        O = e.bypassChangeModal,
                        S = e.bypassGuildIdCheck,
                        g = void 0 !== S && S;
                    return y((function() {
                        var e, b, C, S, N;
                        return I(this, (function(m) {
                            switch (m.label) {
                                case 0:
                                    e = this;
                                    return t.isThread() ? [4, l.Z.unarchiveThreadIfNecessary(t.id)] : [3, 3];
                                case 1:
                                    m.sent();
                                    return c.Z.hasJoined(t.id) ? [3, 3] : [4, l.Z.joinThread(t, "Join Voice")];
                                case 2:
                                    m.sent();
                                    m.label = 3;
                                case 3:
                                    b = a.Z.getRemoteSessionId();
                                    C = d.Z.getVoiceStateForSession(s.default.getId(), b);
                                    S = (null == C ? void 0 : C.channelId) === t.id;
                                    N = S || f.Z.getChannelId() === d.Z.getCurrentClientVoiceChannelId(t.guild_id);
                                    if (!O && !A && (0, p._)(t)) return [2, new Promise((function(o) {
                                        var a = e;
                                        (0, i.openModalLazy)(y((function() {
                                            var e, i;
                                            return I(this, (function(u) {
                                                switch (u.label) {
                                                    case 0:
                                                        return [4, n.e(51562).then(n.bind(n, 851562))];
                                                    case 1:
                                                        e = u.sent(), i = e.default;
                                                        return [2, function(e) {
                                                            return (0, r.jsx)(i, function(e) {
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
                                                            }({
                                                                channel: t,
                                                                onConfirm: function() {
                                                                    return o(a.handleVoiceConnect({
                                                                        channel: t,
                                                                        connected: v,
                                                                        needSubscriptionToAccess: E,
                                                                        routeDirectlyToChannel: T,
                                                                        locked: A,
                                                                        bypassChangeModal: !0
                                                                    }))
                                                                }
                                                            }, e))
                                                        }]
                                                }
                                            }))
                                        })))
                                    }))];
                                    A || v || o.default.selectVoiceChannel(t.id);
                                    !__OVERLAY__ && (v || N || E || T) && function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                            n = e.getGuildId();
                                        if (null == n && !t) throw new Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                                        (0, u.uL)(_.Z5c.CHANNEL(n, e.id))
                                    }(t, g);
                                    return [2, !0]
                            }
                        }))
                    })).apply(this)
                }
            }
        },
        517019: (e, t, n) => {
            n.d(t, {
                PY: () => s,
                KV: () => f,
                Wo: () => d,
                yp: () => p
            });
            var r = n(265688),
                i = n(671723),
                o = n(597287),
                a = n(972725),
                u = n(73727),
                c = n(966334),
                l = n(2590);

            function s(e) {
                return null != e.getActiveSocketAndDevice() || a.Z.isProtocolRegistered()
            }

            function f() {
                var e = u.Z.getActiveSocketAndDevice();
                if (null != e) return Promise.resolve(e);
                if (!a.Z.isProtocolRegistered()) return Promise.reject(new Error("protocol is not registered"));
                var t = u.Z.getPlayableComputerDevices();
                if (i.ZP.isObservedAppRunning(r.Z.get(l.ABu.SPOTIFY).name) && t.length > 0) {
                    var n = t[0],
                        s = n.socket,
                        f = n.device;
                    (0, o.Tu)(s.accountId, f.id);
                    return Promise.resolve({
                        socket: s,
                        device: f
                    })
                }
                return new Promise((function(e, n) {
                    var r = setTimeout((function() {
                            u.Z.removeChangeListener(i);
                            n(new Error("timeout launching spotify"))
                        }), 3e4),
                        i = function() {
                            var n = u.Z.getPlayableComputerDevices(),
                                a = !0,
                                c = !1,
                                l = void 0;
                            try {
                                for (var s, f = function() {
                                        var n = s.value,
                                            a = n.socket,
                                            c = n.device;
                                        if (null == t.find((function(e) {
                                                return e.device.id === c.id
                                            }))) {
                                            clearTimeout(r);
                                            u.Z.removeChangeListener(i);
                                            setImmediate((function() {
                                                (0, o.Tu)(a.accountId, c.id);
                                                e({
                                                    socket: a,
                                                    device: c
                                                })
                                            }))
                                        }
                                    }, d = n[Symbol.iterator](); !(a = (s = d.next()).done); a = !0) f()
                            } catch (e) {
                                c = !0;
                                l = e
                            } finally {
                                try {
                                    a || null == d.return || d.return()
                                } finally {
                                    if (c) throw l
                                }
                            }
                        };
                    u.Z.addChangeListener(i);
                    window.open("".concat(c.M5, ":"))
                }))
            }

            function d() {
                var e = u.Z.getActiveSocketAndDevice();
                return null == e ? null : e.socket.isPremium
            }

            function p() {
                var e = u.Z.getActiveSocketAndDevice();
                if (null == e) return Promise.reject(new Error("no active profile"));
                var t = e.socket;
                return t.isPremium ? Promise.resolve() : (0, o.Ai)(t.accountId, t.accessToken).then((function() {
                    if (!t.isPremium) return Promise.reject(new Error("spotify account is not premium"))
                }))
            }
        },
        511720: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(652591),
                i = n(517019),
                o = n(966334),
                a = n(2590),
                u = [o.kG.USER_ACTIVITY_SYNC, o.kG.EMBED_SYNC];

            function c(e, t, n, o) {
                r.default.track(a.rMx.SPOTIFY_BUTTON_CLICKED, {
                    type: e,
                    source: o,
                    is_premium: (0, i.Wo)(),
                    party_id: u.includes(e) && null != (null == n ? void 0 : n.party) ? n.party.id : null,
                    other_user_id: t.id
                })
            }
        },
        572080: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(497842),
                i = n(2590);

            function o(e) {
                if (e) return !0;
                (0, r.Z)(i.ABu.SPOTIFY, "Spotify Button");
                return !1
            }
        },
        598007: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(966334),
                i = n(473708);

            function o(e, t) {
                switch (t) {
                    case r.kG.USER_ACTIVITY_PLAY:
                        return e.hasSpotifyAccount ? i.Z.Messages.USER_ACTIVITY_PLAY_ON_PLATFORM.format({
                            platform: r.ai
                        }) : i.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                            platform: r.ai
                        });
                    case r.kG.EMBED_SYNC:
                        return e.hasSpotifyAccount ? e.syncingWithUser || e.syncingWithParty ? i.Z.Messages.INVITE_EMBED_JOINED : i.Z.Messages.JOIN : i.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                            platform: r.ai
                        });
                    case r.kG.USER_ACTIVITY_SYNC:
                    default:
                        return
                }
            }
        },
        557162: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(749565),
                i = n(966334),
                o = n(473708);

            function a(e, t, n) {
                switch (t) {
                    case i.kG.USER_ACTIVITY_PLAY:
                        return e.isCurrentUser ? o.Z.Messages.USER_ACTIVITY_CANNOT_PLAY_SELF : e.playingSameTrack ? o.Z.Messages.USER_ACTIVITY_ALREADY_PLAYING : e.notPlayable ? o.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                            name: i.ai
                        }) : void 0;
                    case i.kG.USER_ACTIVITY_SYNC:
                        return e.isCurrentUser ? o.Z.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF : e.syncingWithUser || e.syncingWithParty ? o.Z.Messages.USER_ACTIVITY_ALREADY_SYNCING : o.Z.Messages.USER_ACTIVITY_LISTEN_ALONG_DESCRIPTION.format({
                            name: null != n ? n : r.ZP.getName(e.user)
                        });
                    case i.kG.EMBED_SYNC:
                        return e.isCurrentUser ? o.Z.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF : e.syncingWithUser || e.syncingWithParty ? o.Z.Messages.USER_ACTIVITY_ALREADY_SYNCING : e.notPlayable ? o.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                            name: i.ai
                        }) : void 0;
                    default:
                        return
                }
            }
        },
        47038: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(517019);

            function i(e, t, n, i) {
                var o, a, u, c = e.hasConnectedAccount(),
                    l = (0, r.PY)(e),
                    s = e.getTrack(),
                    f = e.getSyncingWith(),
                    d = e.getActivity(),
                    p = null !== (u = null !== (a = null == s ? void 0 : s.id) && void 0 !== a ? a : null == d ? void 0 : d.sync_id) && void 0 !== u ? u : e.getLastPlayedTrackId();
                return {
                    user: n,
                    activity: i,
                    hasSpotifyAccount: c,
                    canPlaySpotify: l,
                    notPlayable: c && !l,
                    syncingWithParty: null != (null == d ? void 0 : d.party) && (null == i || null === (o = i.party) || void 0 === o ? void 0 : o.id) === d.party.id,
                    syncingWithUser: null != (null == f ? void 0 : f.userId) && (null == f ? void 0 : f.userId) === n.id,
                    isCurrentUser: n.id === t.getId(),
                    currentUserTrackId: p,
                    playingSameTrack: null != p && p === (null == i ? void 0 : i.sync_id)
                }
            }
        },
        304493: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                i = (n(667294), n(882723)),
                o = n(859980),
                a = n(517019),
                u = n(511720),
                c = n(572080);

            function l(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

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
            var p = function(e, t) {
                var n, r, i, o, a = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = t.call(e, a)
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
                        }([o, u])
                    }
                }
            };

            function _(e, t, n) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = s((function(e, t, l) {
                    var f, _, v;
                    return p(this, (function(y) {
                        switch (y.label) {
                            case 0:
                                f = e.hasSpotifyAccount, _ = e.activity, v = e.user;
                                return (0, c.Z)(f) && null != _ && null != _.sync_id ? [4, (0, a.KV)()] : [2];
                            case 1:
                                y.sent();
                                return [4, (0, a.yp)().catch((function(e) {
                                    (0, i.openModalLazy)(s((function() {
                                        var e, t;
                                        return p(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return [4, Promise.all([n.e(40532), n.e(89938)]).then(n.bind(n, 789938))];
                                                case 1:
                                                    e = i.sent(), t = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(t, d({}, e))
                                                    }]
                                            }
                                        }))
                                    })));
                                    return Promise.reject(e)
                                }))];
                            case 2:
                                y.sent();
                                o.Z_(_, v.id);
                                (0, u.Z)(t, v, _, l);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        979965: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(859980),
                i = n(517019),
                o = n(511720),
                a = n(572080);

            function u(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            u(o, r, i, a, c, "next", e)
                        }

                        function c(e) {
                            u(o, r, i, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var l = function(e, t) {
                var n, r, i, o, a = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = t.call(e, a)
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
                        }([o, u])
                    }
                }
            };

            function s(e, t, n) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = c((function(e, t, n) {
                    var u, c, s;
                    return l(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                u = e.hasSpotifyAccount, c = e.activity, s = e.user;
                                return (0, a.Z)(u) && null != c && null != c.sync_id ? [4, (0, i.KV)()] : [2];
                            case 1:
                                l.sent();
                                r.hY(c, s.id);
                                (0, o.Z)(t, s, c, n);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        960412: (e, t, n) => {
            n.d(t, {
                oh: () => r,
                y0: () => i,
                jC: () => a
            });
            var r, i, o = n(2590);
            ! function(e) {
                e.USER_INFO = "USER_INFO";
                e.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS";
                e.ACTIVITY = "ACTIVITY";
                e.MUTUAL_GUILDS = "MUTUAL_GUILDS";
                e.MUTUAL_FRIENDS = "MUTUAL_FRIENDS";
                e.BOT_DATA_ACCESS = "BOT_DATA_ACCESS"
            }(r || (r = {}));
            ! function(e) {
                e.POPOUT = "POPOUT";
                e.MODAL = "MODAL";
                e.SETTINGS = "SETTINGS";
                e.PANEL = "PANEL";
                e.CARD = "CARD";
                e.POMELO_POPOUT = "POMELO_POPOUT";
                e.CANCEL_MODAL = "CANCEL_MODAL"
            }(i || (i = {}));

            function a(e) {
                var t = window.GLOBAL_ENV,
                    n = t.API_ENDPOINT,
                    r = t.CDN_HOST;
                return null != r ? "".concat(location.protocol, "//").concat(r, "/badge-icons/").concat(e, ".png") : "".concat(location.protocol).concat(n).concat(o.ANM.BADGE_ICON(e))
            }
        },
        942492: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(667294),
                i = n(202351),
                o = n(281110),
                a = n(744564),
                u = n(279812),
                c = n(2590);

            function l(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

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
            var f = function(e, t) {
                var n, r, i, o, a = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = t.call(e, a)
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
                        }([o, u])
                    }
                }
            };

            function d(e) {
                var t = (0, i.e7)([u.Z], (function() {
                    return u.Z.getNote(e)
                }));
                r.useEffect((function() {
                    null == t && function(e) {
                        p.apply(this, arguments)
                    }(e)
                }), [t, e]);
                return null != t ? t : {
                    loading: !0,
                    note: null
                }
            }

            function p() {
                return (p = s((function(e) {
                    var t, n;
                    return f(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                a.Z.dispatch({
                                    type: "USER_NOTE_LOAD_START",
                                    userId: e
                                });
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, o.ZP.get({
                                    url: c.ANM.NOTE(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = r.sent(), n = t.body;
                                a.Z.dispatch({
                                    type: "USER_NOTE_LOADED",
                                    userId: e,
                                    note: n
                                });
                                return [3, 4];
                            case 3:
                                r.sent();
                                a.Z.dispatch({
                                    type: "USER_NOTE_LOADED",
                                    userId: e
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        565909: (e, t, n) => {
            n.d(t, {
                w: () => o
            });
            var r = n(105783),
                i = n(473708),
                o = function() {
                    r.Z.show({
                        title: i.Z.Messages.NO_EMBEDDED_ACTIVITY_PERMISSION_DIALOG_TITLE,
                        body: i.Z.Messages.NO_EMBEDDED_ACTIVITY_PERMISSION_DIALOG_BODY,
                        hideActionSheet: !1
                    })
                }
        },
        279812: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var r = n(202351),
                i = n(744564);

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function u(e, t) {
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
                    var n, r = a(e);
                    if (t) {
                        var i = a(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var f = {};

            function d() {
                f = {}
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
                    t && c(e, t)
                }(n, e);
                var t = s(n);

                function n() {
                    o(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getNote = function(e) {
                    return f[e]
                };
                r.__getLocalVars = function() {
                    return {
                        notes: f
                    }
                };
                return n
            }(r.ZP.Store);
            p.displayName = "NoteStore";
            const _ = new p(i.Z, {
                CONNECTION_OPEN: d,
                OVERLAY_INITIALIZE: d,
                USER_NOTE_UPDATE: function(e) {
                    f[e.id] = {
                        loading: !1,
                        note: e.note
                    }
                },
                USER_NOTE_LOAD_START: function(e) {
                    var t = e.userId;
                    f[t] = {
                        loading: !0,
                        note: null
                    }
                },
                USER_NOTE_LOADED: function(e) {
                    var t = e.userId,
                        n = e.note;
                    f[t] = {
                        loading: !1,
                        note: null == n ? void 0 : n.note
                    }
                }
            })
        },
        453007: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var r = n(202351),
                i = n(513328),
                o = n(744564),
                a = n(2590);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

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
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function s(e, t) {
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
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }
            var _ = {},
                v = {},
                y = 12e4;

            function h(e, t, n) {
                var r, u = n.applicationId,
                    c = null !== (r = _[u]) && void 0 !== r ? r : {};
                c[t] = e;
                _[u] = c;
                if (!__OVERLAY__ && e === a.OcF.FAILED) {
                    null != v[u] && v[u].stop();
                    var l = new i.V7;
                    l.start(y, (function() {
                        return o.Z.dispatch({
                            type: "ACTIVITY_LAUNCH_FAIL",
                            applicationId: u,
                            activityType: t
                        })
                    }));
                    v[u] = l
                }
            }

            function I(e) {
                return h(a.OcF.COMPLETE, a.mFx.JOIN, e)
            }
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
                    t && f(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getState = function(e, t) {
                    var n = _[e];
                    return null == n ? void 0 : n[t]
                };
                r.getStates = function() {
                    return _
                };
                r.__getLocalVars = function() {
                    return {
                        states: _,
                        clearTimeouts: v,
                        CLEAR_LAUNCH_TIME: y
                    }
                };
                return n
            }(r.ZP.Store);
            E.displayName = "ActivityLauncherStore";
            const b = new E(o.Z, {
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.activityLauncherStates;
                    _ = function(e) {
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
                    }({}, t)
                },
                ACTIVITY_JOIN_LOADING: function(e) {
                    return h(a.OcF.LOADING, a.mFx.JOIN, e)
                },
                ACTIVITY_JOIN_FAILED: function(e) {
                    return h(a.OcF.FAILED, a.mFx.JOIN, e)
                },
                ACTIVITY_JOIN: I,
                EMBEDDED_ACTIVITY_CLOSE: I,
                ACTIVITY_LAUNCH_FAIL: function(e) {
                    var t = e.applicationId,
                        n = e.activityType,
                        r = _[t];
                    if (null == r || r[n] !== a.OcF.FAILED) return !1;
                    delete r[n]
                }
            })
        }
    }
]);