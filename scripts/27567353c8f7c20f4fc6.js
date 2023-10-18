(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [54368], {
        513157: (e, n, t) => {
            e.exports = t.p + "c8d8bfacc6311892e73219a74e9cd164.svg"
        },
        726196: (e, n, t) => {
            "use strict";
            t.d(n, {
                B: () => a,
                b: () => r
            });
            var r, a;
            ! function(e) {
                e.GUILD = "guild";
                e.GUILD_DISCOVERY = "guild_discovery";
                e.GUILD_DIRECTORY_ENTRY = "guild_directory_entry";
                e.MESSAGE = "message";
                e.STAGE_CHANNEL = "stage_channel";
                e.GUILD_SCHEDULED_EVENT = "guild_scheduled_event";
                e.FIRST_DM = "first_dm";
                e.USER = "user"
            }(r || (r = {}));
            ! function(e) {
                e.MESSAGE = "message_urf";
                e.USER = "user_urf"
            }(a || (a = {}))
        },
        354368: (e, n, t) => {
            "use strict";
            t.d(n, {
                lt: () => b,
                WL: () => E,
                sq: () => y,
                d$: () => _,
                ak: () => p,
                ic: () => g,
                pX: () => O,
                eE: () => I,
                JM: () => S,
                zd: () => x
            });
            var r = t(396043),
                a = t(766496),
                i = t(4798),
                o = t(722406),
                l = (0, t(260561).B)({
                    kind: "user",
                    id: "2023-08_iar_fraud_impersonation",
                    label: "In App Reports Fruad & Impersonation",
                    defaultConfig: {
                        showFraudMenuVariant: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            showFraudMenuVariant: !0
                        }
                    }]
                });
            var c = t(726196),
                s = t(753698),
                u = t(2590);

            function d(e, n, t, r, a, i, o) {
                try {
                    var l = e[i](o),
                        c = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(c) : Promise.resolve(c).then(r, a)
            }

            function f(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(n, t);

                        function o(e) {
                            d(i, r, a, o, l, "next", e)
                        }

                        function l(e) {
                            d(i, r, a, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function m(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            var v, h = function(e, n) {
                var t, r, a, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
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
                            for (; o;) try {
                                if (t = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                                (r = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            o.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(i);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                i = n.call(e, o)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
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
            v = t(990750).Z;

            function b(e, n) {
                N(c.b.GUILD_DISCOVERY, {
                    guild_id: e.id
                });
                v({
                    name: c.b.GUILD_DISCOVERY,
                    record: e
                }, {}, n)
            }

            function y(e, n) {
                N(c.b.GUILD_DIRECTORY_ENTRY, {
                    channel_id: e.channelId,
                    guild_id: e.guildId
                });
                v({
                    name: c.b.GUILD_DIRECTORY_ENTRY,
                    record: e
                }, {}, n)
            }

            function p(e, n) {
                N(c.b.MESSAGE, {
                    message_id: e.id,
                    channel_id: e.channel_id
                });
                var t = l.getCurrentConfig({
                    location: "159afe_2"
                }, {
                    autoTrackExposure: !0
                }).showFraudMenuVariant;
                v({
                    name: c.b.MESSAGE,
                    record: e
                }, {
                    variant: t ? "4" : void 0
                }, n)
            }

            function g(e, n) {
                var t = a.Z.getStageInstanceByChannel(e.id);
                if (null != t) {
                    N(c.b.STAGE_CHANNEL, {
                        stage_instance_id: t.id,
                        channel_id: t.channel_id,
                        guild_id: t.guild_id
                    });
                    v({
                        name: c.b.STAGE_CHANNEL,
                        record: t
                    }, {}, n)
                }
            }

            function _(e, n) {
                var t;
                N(c.b.GUILD_SCHEDULED_EVENT, {
                    guild_scheduled_event_id: e.id,
                    guild_id: e.guild_id,
                    channel_id: null !== (t = e.channel_id) && void 0 !== t ? t : void 0
                });
                v({
                    name: c.b.GUILD_SCHEDULED_EVENT,
                    record: e
                }, {}, n)
            }

            function E(e, n) {
                N(c.b.FIRST_DM, {
                    message_id: e.id,
                    channel_id: e.channel_id
                });
                v({
                    name: c.b.FIRST_DM,
                    record: e
                }, {}, n, void 0, !1)
            }

            function x(e, n) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = f((function(e, n) {
                    return h(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                t.trys.push([0, 2, , 3]);
                                return [4, (0, s.ox)({
                                    name: c.b.FIRST_DM,
                                    record: e
                                }, {
                                    variant: "_first_dm_ham_v1"
                                })];
                            case 1:
                                t.sent();
                                null == n || n();
                                return [3, 3];
                            case 2:
                                t.sent();
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(e, n, t) {
                N(c.b.USER, {
                    reported_user_id: e.id
                });
                v({
                    name: c.b.USER,
                    record: e,
                    contextualGuildId: n
                }, {}, t, void 0, !1)
            }

            function S(e) {
                var n = new o.Z({});
                N(c.B.USER, {
                    reported_user_id: n.id
                });
                v({
                    name: c.B.USER,
                    record: n
                }, {}, e, void 0, !1, !1)
            }

            function I(e) {
                var n = new i.Z({});
                N(c.B.MESSAGE, {
                    message_id: void 0,
                    channel_id: void 0
                });
                v({
                    name: c.B.MESSAGE,
                    record: n
                }, {}, e, void 0, !1, !1)
            }

            function N(e, n) {
                r.ZP.trackWithMetadata(u.rMx.IAR_MODAL_OPEN, function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            m(e, n, t[n])
                        }))
                    }
                    return e
                }({
                    report_type: e
                }, n))
            }
        },
        753698: (e, n, t) => {
            "use strict";
            t.d(n, {
                B0: () => b,
                Nt: () => v,
                X: () => I,
                ZD: () => _,
                fw: () => E,
                k8: () => S,
                ox: () => p
            });
            var r = t(281110),
                a = t(744564),
                i = t(396043),
                o = t(726196),
                l = t(2590);

            function c(e, n, t, r, a, i, o) {
                try {
                    var l = e[i](o),
                        c = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(c) : Promise.resolve(c).then(r, a)
            }

            function s(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(n, t);

                        function o(e) {
                            c(i, r, a, o, l, "next", e)
                        }

                        function l(e) {
                            c(i, r, a, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
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

            function d(e) {
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

            function f(e, n) {
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
            var m = function(e, n) {
                var t, r, a, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
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
                            for (; o;) try {
                                if (t = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                                (r = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            o.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(i);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                i = n.call(e, o)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
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

            function v(e, n) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = s((function(e, n) {
                    var t, a, i;
                    return m(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = j(e);
                                return [4, r.ZP.get({
                                    url: l.ANM.GET_REPORT_MENU(t),
                                    query: null != (null == n ? void 0 : n.variant) ? {
                                        variant: n.variant
                                    } : void 0
                                })];
                            case 1:
                                a = o.sent();
                                return [2, null !== (i = a.body) && void 0 !== i ? i : JSON.parse(a.text)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function b(e, n) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = s((function(e, n) {
                    var t, a, i;
                    return m(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = x(e);
                                return [4, r.ZP.get({
                                    url: l.ANM.GET_UNAUTHENTICATED_REPORT_MENU(t),
                                    query: null != (null == n ? void 0 : n.variant) ? {
                                        variant: n.variant
                                    } : void 0
                                })];
                            case 1:
                                a = o.sent();
                                return [2, null !== (i = a.body) && void 0 !== i ? i : JSON.parse(a.text)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(e, n) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = s((function(e, n) {
                    var t, a;
                    return m(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = j(e);
                                return [4, v(e, n)];
                            case 1:
                                a = i.sent();
                                return [4, r.ZP.post({
                                    url: l.ANM.SUBMIT_REPORT_MENU(t),
                                    body: O(a, e, [{
                                        nodeRef: a.root_node_id,
                                        destination: ["", a.success_node_id]
                                    }])
                                })];
                            case 2:
                                i.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function _(e, n, t) {
                return r.ZP.post({
                    url: l.ANM.SUBMIT_REPORT_MENU(j(n)),
                    body: O(e, n, t)
                })
            }

            function E(e, n, t) {
                var a = x(n);
                return r.ZP.post({
                    url: l.ANM.SUBMIT_UNAUTHENTICATED_REPORT_MENU(a),
                    body: O(e, n, t)
                })
            }

            function x(e) {
                var n = e.name;
                if (!Object.values(o.B).includes(n)) throw new Error("Invalid report type ".concat(e.name));
                return n
            }

            function j(e) {
                var n = e.name;
                if (!Object.values(o.b).includes(n)) throw new Error("Invalid report type ".concat(e.name));
                return n
            }
            var O = function(e, n, t) {
                var r = e.version,
                    a = e.variant,
                    i = e.language,
                    l = {
                        version: r,
                        variant: a,
                        language: null != i ? i : "en",
                        breadcrumbs: t.map((function(e) {
                            return e.nodeRef
                        })),
                        elements: t.reduce((function(e, n) {
                            var t = n.multiSelect;
                            return null == t ? e : f(d({}, e), u({}, t.name, Object.keys(t.state)))
                        }), {})
                    };
                if (n.name === o.b.MESSAGE || n.name === o.b.FIRST_DM) {
                    var c = n.record,
                        s = c.channel_id,
                        m = c.id;
                    return f(d({}, l), {
                        name: n.name,
                        channel_id: s,
                        message_id: m,
                        guild_id: void 0,
                        stage_instance_id: void 0,
                        guild_scheduled_event_id: void 0,
                        user_id: void 0
                    })
                }
                if (n.name === o.b.GUILD || n.name === o.b.GUILD_DISCOVERY) {
                    var v = n.record.id;
                    return f(d({}, l), {
                        name: n.name,
                        channel_id: void 0,
                        message_id: void 0,
                        stage_instance_id: void 0,
                        guild_id: v,
                        guild_scheduled_event_id: void 0,
                        user_id: void 0
                    })
                }
                if (n.name === o.b.GUILD_DIRECTORY_ENTRY) {
                    var h = n.record,
                        b = h.guildId,
                        y = h.channelId;
                    return f(d({}, l), {
                        name: n.name,
                        channel_id: y,
                        message_id: void 0,
                        stage_instance_id: void 0,
                        guild_id: b,
                        guild_scheduled_event_id: void 0,
                        user_id: void 0
                    })
                }
                if (n.name === o.b.STAGE_CHANNEL) {
                    var p = n.record,
                        g = p.id,
                        _ = p.guild_id,
                        E = p.channel_id;
                    return f(d({}, l), {
                        name: n.name,
                        channel_id: E,
                        message_id: void 0,
                        guild_id: _,
                        stage_instance_id: g,
                        guild_scheduled_event_id: void 0,
                        user_id: void 0
                    })
                }
                if (n.name === o.b.GUILD_SCHEDULED_EVENT) {
                    var x = n.record,
                        j = x.id,
                        O = x.guild_id;
                    return f(d({}, l), {
                        name: n.name,
                        channel_id: void 0,
                        message_id: void 0,
                        guild_id: O,
                        stage_instance_id: void 0,
                        guild_scheduled_event_id: j,
                        user_id: void 0
                    })
                }
                return n.name === o.b.USER || n.name === o.B.USER ? f(d({}, l), {
                    name: n.name,
                    user_id: n.record.id,
                    channel_id: void 0,
                    message_id: void 0,
                    guild_id: n.contextualGuildId,
                    stage_instance_id: void 0,
                    guild_scheduled_event_id: void 0
                }) : n.name === o.B.MESSAGE ? f(d({}, l), {
                    name: n.name,
                    user_id: void 0,
                    channel_id: void 0,
                    message_id: n.record.id,
                    guild_id: void 0,
                    stage_instance_id: void 0,
                    guild_scheduled_event_id: void 0
                }) : null
            };

            function S(e, n, t) {
                i.ZP.trackWithMetadata(l.rMx.IAR_MODAL_CLOSE, {
                    report_type: e.name,
                    report_id: t,
                    navigation_history: n,
                    message_id: e.name === o.b.MESSAGE || e.name === o.b.FIRST_DM ? e.record.id : void 0,
                    stage_instance_id: e.name === o.b.STAGE_CHANNEL ? e.record.id : void 0,
                    guild_scheduled_event_id: e.name === o.b.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
                    guild_id: e.name === o.b.GUILD || e.name === o.b.GUILD_DISCOVERY ? e.record.id : e.name === o.b.GUILD_DIRECTORY_ENTRY ? e.record.guildId : e.name === o.b.GUILD_SCHEDULED_EVENT ? e.record.guild_id : void 0,
                    channel_id: e.name === o.b.GUILD_SCHEDULED_EVENT ? e.record.channel_id : e.name === o.b.GUILD_DIRECTORY_ENTRY ? e.record.channelId : void 0
                })
            }

            function I(e, n) {
                a.Z.dispatch({
                    type: "IN_APP_REPORTS_SHOW_FEEDBACK",
                    reportId: n,
                    reportType: e.name
                })
            }
        },
        990750: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => nt
            });
            var r = t(785893),
                a = t(667294),
                i = t(70418),
                o = t(753698),
                l = t(396043),
                c = t(443812),
                s = t(726196),
                u = t(107364),
                d = t(473708),
                f = t(172386),
                m = t.n(f);
            const v = function(e) {
                var n = e.button,
                    t = e.submitting,
                    o = e.disableNext,
                    l = e.onClick,
                    c = e.canNavigateBack,
                    s = e.onBackClicked,
                    f = a.useRef(null),
                    v = null != n && "cancel" !== n.type,
                    h = c && "done" !== (null == n ? void 0 : n.type),
                    b = v || h;
                a.useEffect((function() {
                    if ("submit" === (null == n ? void 0 : n.type) || "done" === (null == n ? void 0 : n.type)) {
                        var e;
                        null === (e = f.current) || void 0 === e || e.focus()
                    }
                }), [null == n ? void 0 : n.type]);
                if (!b) return null;
                var y, p = d.Z.Messages.DONE;
                if ("submit" === (null == n ? void 0 : n.type)) {
                    p = d.Z.Messages.MOBILE_REPORTS_SUBMIT_REPORT;
                    y = i.Button.Colors.RED
                } else if ("next" === (null == n ? void 0 : n.type)) p = d.Z.Messages.NEXT;
                else if ("cancel" === (null == n ? void 0 : n.type)) {
                    p = d.Z.Messages.CANCEL;
                    y = i.Button.Colors.TRANSPARENT
                }
                return (0, r.jsxs)(i.ModalFooter, {
                    direction: u.Z.Direction.HORIZONTAL,
                    children: [h && (0, r.jsx)(i.Button, {
                        onClick: s,
                        color: i.Button.Colors.TRANSPARENT,
                        disabled: t,
                        children: d.Z.Messages.BACK
                    }), v && (0, r.jsx)(i.Button, {
                        onClick: function() {
                            null != n && l(n)
                        },
                        color: y,
                        className: m().actionButton,
                        disabled: t || o,
                        buttonRef: f,
                        children: p
                    })]
                })
            };
            var h = t(202351),
                b = t(560923),
                y = t(840922),
                p = t(473903),
                g = t(2590),
                _ = t(330446),
                E = t.n(_);

            function x(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function j(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return x(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return x(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const O = function(e) {
                var n = e.userId,
                    t = e.reportId,
                    o = e.reportName,
                    c = j(a.useState(!1), 2),
                    u = c[0],
                    f = c[1],
                    m = (0, h.e7)([p.default], (function() {
                        return p.default.getUser(n)
                    }), [n]),
                    v = (0, h.e7)([y.Z], (function() {
                        return y.Z.getRelationshipType(n)
                    }), [n]) === g.OGo.BLOCKED;
                a.useEffect((function() {
                    f(v)
                }), [v]);
                var _ = a.useCallback((function() {
                    f(!0);
                    l.ZP.trackWithMetadata(g.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                        other_user_id: n,
                        report_id: t
                    });
                    b.Z.addRelationship({
                        userId: n,
                        context: {
                            location: "ReportMenuBlockUser-iOS"
                        },
                        type: g.OGo.BLOCKED
                    })
                }), [n, t]);
                return null == m ? null : (0, r.jsxs)("div", {
                    className: E().container,
                    children: [(0, r.jsx)(i.Text, {
                        className: E().description,
                        variant: "text-sm/normal",
                        children: o === s.b.USER ? d.Z.Messages.REPORTS_BLOCK_USER_ELEMENT_DESCRIPTION : d.Z.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_DESCRIPTION
                    }), (0, r.jsxs)("div", {
                        className: E().userContainer,
                        children: [(0, r.jsxs)("div", {
                            className: E().userInfo,
                            children: [(0, r.jsx)(i.Avatar, {
                                size: i.AvatarSizes.SIZE_32,
                                src: m.getAvatarURL(void 0, 32),
                                className: E().avatar,
                                "aria-label": m.username
                            }), (0, r.jsx)(i.Text, {
                                className: E().userName,
                                variant: "text-sm/semibold",
                                children: m.username
                            }), !m.isPomelo() && (0, r.jsxs)(i.Text, {
                                variant: "text-sm/normal",
                                children: ["#", m.discriminator]
                            })]
                        }), (0, r.jsx)(i.Button, {
                            onClick: function() {
                                return _()
                            },
                            disabled: u,
                            size: i.Button.Sizes.SMALL,
                            color: i.Button.Colors.RED,
                            children: u ? d.Z.Messages.BLOCKED : d.Z.Messages.BLOCK
                        })]
                    })]
                })
            };
            var S = t(496486),
                I = t(580143),
                N = t.n(I);

            function T(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function w(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return T(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return T(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const R = function(e) {
                var n = (0, S.flatMap)(e.history, (function(e) {
                    var n, t = w(e.destination, 1)[0],
                        r = e.multiSelect,
                        a = e.textInput,
                        i = [null, null],
                        o = Object.values(null !== (n = null == r ? void 0 : r.state) && void 0 !== n ? n : {});
                    o.length > 0 && (i[0] = o.join(", "));
                    var l = Object.entries(null != a ? a : {});
                    l.length > 0 && (i[0] = l.map((function(e) {
                        var n = w(e, 2),
                            t = n[0],
                            r = n[1];
                        return "".concat(t, "=").concat(r)
                    })).join(", "));
                    "" !== t && (i[1] = t);
                    return i
                })).filter((function(e) {
                    return null != e
                }));
                return 0 === n.length ? null : (0, r.jsxs)("div", {
                    className: N().container,
                    children: [(0, r.jsx)(i.Heading, {
                        className: N().breadcrumbsHeader,
                        color: "header-secondary",
                        variant: "heading-sm/semibold",
                        children: d.Z.Messages.MOBILE_REPORTS_BREADCRUMBS_TITLE
                    }), n.map((function(e, n) {
                        return (0, r.jsxs)("div", {
                            className: N().breadcrumbContainer,
                            children: [(0, r.jsx)("div", {
                                className: N().breadcrumbDot
                            }), (0,
                                r.jsx)(i.Text, {
                                variant: "text-md/normal",
                                className: N().breadcrumbText,
                                children: e
                            })]
                        }, "".concat(e, "+").concat(n))
                    }))]
                })
            };
            var A = t(718831),
                P = t(352811),
                C = t.n(P);

            function M(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function D(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return M(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return M(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = function(e) {
                var n = e.child,
                    t = e.onClick,
                    a = D(n, 1)[0];
                return (0, r.jsxs)(i.Clickable, {
                    className: C().childButton,
                    onClick: function() {
                        return t(n)
                    },
                    children: [(0, r.jsx)(i.Text, {
                        className: C().childText,
                        variant: "text-md/semibold",
                        children: a
                    }), (0, r.jsx)(A.Z, {
                        className: C().childIcon,
                        direction: A.Z.Directions.RIGHT
                    })]
                })
            };
            const Z = function(e) {
                var n = e.node.children,
                    t = e.onSelectChild;
                if (null == n || 0 === n.length) return null;
                var a = n.map((function(e) {
                    var n = D(e, 2),
                        a = n[0],
                        i = n[1];
                    return (0, r.jsx)(k, {
                        child: e,
                        onClick: t
                    }, "".concat(a, "+").concat(i))
                }));
                return (0, r.jsx)("div", {
                    className: C().childrenContainer,
                    children: a
                })
            };
            var L = t(720419),
                B = t(61209),
                U = t(682776),
                G = t(268853),
                V = t.n(G);

            function H(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function z(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return H(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return H(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const F = function(e) {
                var n = e.message,
                    t = e.reportId,
                    o = z(a.useState(!1), 2),
                    c = o[0],
                    s = o[1],
                    u = a.useCallback((function() {
                        s(!0);
                        l.ZP.trackWithMetadata(g.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, {
                            report_id: t
                        });
                        L.Z.deleteMessage(n.getChannelId(), n.id)
                    }), [n, t]),
                    f = a.useMemo((function() {
                        var e = B.Z.getChannel(n.getChannelId());
                        return null != e && (e.type !== g.d4z.DM && e.type !== g.d4z.GROUP_DM && U.Z.canWithPartialContext(g.Plq.MANAGE_MESSAGES, {
                            channelId: e.id
                        }))
                    }), [n]);
                return null != n && f ? (0, r.jsx)("div", {
                    className: V().container,
                    children: (0, r.jsxs)("div", {
                        className: V().messageContainer,
                        children: [(0, r.jsx)("div", {
                            className: V().description,
                            children: (0, r.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: d.Z.Messages.MOBILE_REPORTS_DELETE_MESSAGE_ELEMENT_DESCRIPTION
                            })
                        }), (0, r.jsx)(i.Button, {
                            onClick: function() {
                                return u()
                            },
                            disabled: c,
                            size: i.Button.Sizes.SMALL,
                            color: i.Button.Colors.RED,
                            children: c ? d.Z.Messages.DELETED : d.Z.Messages.DELETE
                        })]
                    })
                }) : null
            };
            var W = t(380203),
                Y = t.n(W);

            function K(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function $(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return K(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return K(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var X = function(e) {
                var n = e.element,
                    t = e.onChange,
                    o = $(a.useState(""), 2),
                    l = o[0],
                    c = o[1],
                    s = n.name,
                    u = n.data,
                    d = u.title,
                    f = u.options,
                    m = a.useCallback((function(e) {
                        if (null != e) {
                            c(e);
                            t(e)
                        }
                    }), [t]);
                return (0, r.jsxs)("div", {
                    className: Y().marginBottom8,
                    children: [null != d && (0, r.jsx)("div", {
                        className: Y().marginBottom8,
                        children: (0, r.jsx)(i.Text, {
                            variant: "text-sm/bold",
                            children: d
                        })
                    }), (0, r.jsx)(i.SingleSelect, {
                        value: l,
                        onChange: m,
                        options: f
                    })]
                }, s)
            };
            const q = function(e) {
                var n = e.elements,
                    t = e.onChange,
                    a = n.map((function(e) {
                        var n = e.name;
                        return (0, r.jsx)(X, {
                            element: e,
                            onChange: function(e) {
                                return t(n, e)
                            }
                        }, n)
                    }));
                return (0, r.jsx)("div", {
                    children: a
                })
            };
            var J = t(818417),
                Q = t(281094),
                ee = t.n(Q);
            const ne = function(e) {
                var n = e.hasError,
                    t = e.onClose;
                if (!n) return null;
                return (0, r.jsxs)("div", {
                    className: ee().errorContainer,
                    children: [(0, r.jsx)(J.Z, {
                        width: 20,
                        height: 20,
                        className: ee().errorIcon
                    }), (0, r.jsx)(i.Text, {
                        className: ee().errorText,
                        variant: "text-sm/normal",
                        children: d.Z.Messages.MOBILE_REPORTS_SUBMIT_FAILED
                    }), (0, r.jsx)(i.Clickable, {
                        onClick: function() {
                            t()
                        },
                        "aria-label": d.Z.Messages.DISMISS,
                        className: ee().closeIcon
                    })]
                })
            };
            var te = t(320142),
                re = t(956054),
                ae = t(374003),
                ie = t.n(ae),
                oe = function(e) {
                    var n = e.data,
                        t = n.url,
                        a = n.link_text,
                        o = n.link_description;
                    if (!n.is_localized) return null;
                    return (0, r.jsxs)(i.Clickable, {
                        role: "link",
                        className: ie().linkButton,
                        onClick: function() {
                            (0, te.Z)(t)
                        },
                        children: [(0, r.jsxs)("div", {
                            className: ie().linkTextContainer,
                            children: [(0, r.jsx)(i.Text, {
                                className: ie().linkText,
                                variant: "text-md/semibold",
                                children: a
                            }), null != o && "" !== o && (0, r.jsx)(i.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: o
                            })]
                        }), (0, r.jsx)(re.Z, {
                            className: ie().linkIcon
                        })]
                    })
                };

            function le(e) {
                var n = e.elements;
                if (null == n || 0 === n.length || null == n.find((function(e) {
                        return e.data.is_localized
                    }))) return null;
                var t = n.map((function(e, n) {
                        var t = e.data;
                        return (0, r.jsx)(oe, {
                            data: t
                        }, "external-link+".concat(n))
                    })),
                    a = n.some((function(e) {
                        return e.data.is_header_hidden
                    }));
                return (0, r.jsxs)("div", {
                    className: ie().linksContainer,
                    children: [!a && (0, r.jsx)(i.Heading, {
                        variant: "heading-sm/semibold",
                        color: "header-secondary",
                        className: ie().header,
                        children: d.Z.Messages.LEARN_MORE
                    }), t]
                })
            }

            function ce(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function se(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return ce(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ce(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ue = function(e) {
                var n = e.data,
                    t = n.title,
                    o = n.subtitle,
                    l = n.placeholder,
                    c = n.rows,
                    s = n.character_limit,
                    u = n.pattern,
                    f = e.onChange,
                    m = e.initialText,
                    v = se(a.useState(""), 2),
                    h = v[0],
                    b = v[1],
                    y = se(a.useState(""), 2),
                    p = y[0],
                    g = y[1];
                a.useEffect((function() {
                    b(null != m ? m : "")
                }), [m]);
                var _ = a.useCallback((function(e) {
                    var n = null != u ? new RegExp(u) : null;
                    null != n && null == n.exec(e) ? g(d.Z.Messages.IN_APP_REPORTING_FREE_TEXT_INPUT_ERROR) : g("");
                    if (null != e) {
                        b(e);
                        f(e)
                    }
                }), [f, u]);
                return (0, r.jsxs)("div", {
                    className: Y().marginBottom8,
                    children: [null != t && (0, r.jsx)("div", {
                        className: Y().marginBottom8,
                        children: (0, r.jsx)(i.Text, {
                            variant: "text-sm/bold",
                            children: t
                        })
                    }), (0, r.jsx)(i.TextArea, {
                        maxLength: s,
                        onChange: _,
                        value: h,
                        error: p,
                        rows: c,
                        placeholder: l,
                        autoFocus: !0
                    }), null != o && (0, r.jsx)("div", {
                        children: (0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: o
                        })
                    })]
                })
            };
            const de = function(e) {
                var n = e.elements,
                    t = e.onChange,
                    a = e.state,
                    i = n.map((function(e) {
                        var n, i = e.name;
                        return (0, r.jsx)(ue, {
                            data: e.data,
                            onChange: function(e) {
                                return t(i, e)
                            },
                            initialText: null !== (n = null == a ? void 0 : a[i]) && void 0 !== n ? n : void 0
                        }, i)
                    }));
                return (0, r.jsx)("div", {
                    children: i
                })
            };
            var fe = t(567403),
                me = t(124251),
                ve = t(633782),
                he = t.n(ve);
            const be = function(e) {
                var n = e.entry,
                    t = B.Z.getChannel(n.channelId);
                if (null == t) return null;
                var a = fe.Z.getGuild(t.guild_id);
                return null == a ? null : (0, r.jsxs)("div", {
                    className: he().container,
                    children: [(0, r.jsx)(i.Heading, {
                        className: he().header,
                        variant: "heading-sm/semibold",
                        children: d.Z.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER
                    }), (0, r.jsxs)("div", {
                        className: he().guildContainer,
                        children: [(0, r.jsxs)("div", {
                            className: he().hubInfo,
                            children: [(0, r.jsx)(me.Z, {
                                guild: a,
                                size: me.Z.Sizes.MINI,
                                className: he().hubIcon
                            }), (0, r.jsx)(i.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: a.name
                            })]
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: n.name
                        })]
                    })]
                })
            };
            var ye = t(211482),
                pe = t(775173),
                ge = t(477024),
                _e = t.n(ge);
            const Ee = function(e) {
                var n, t = e.entry,
                    a = t.id,
                    o = t.icon,
                    l = t.name,
                    c = null !== (n = pe.ZP.getGuildIconURL({
                        id: a,
                        icon: o,
                        size: 32
                    })) && void 0 !== n ? n : void 0;
                return (0, r.jsxs)("div", {
                    className: _e().container,
                    children: [(0, r.jsx)(i.Heading, {
                        className: _e().header,
                        variant: "heading-sm/semibold",
                        children: d.Z.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER
                    }), (0, r.jsx)("div", {
                        className: _e().guildContainer,
                        children: (0, r.jsxs)("div", {
                            className: _e().guildInfo,
                            children: [(0, r.jsx)(ye.ZP, {
                                mask: ye.ZP.Masks.SQUIRCLE,
                                width: 32,
                                height: 32,
                                className: _e().guildIconMask,
                                children: (0, r.jsx)("img", {
                                    src: c,
                                    alt: "",
                                    className: _e().guildIcon
                                })
                            }), (0, r.jsx)(i.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: l
                            })]
                        })
                    })]
                })
            };
            var xe = t(194619),
                je = t.n(xe);
            const Oe = function(e) {
                var n = e.event,
                    t = (0, h.e7)([fe.Z], (function() {
                        return fe.Z.getGuild(n.guild_id)
                    }));
                return null == t ? null : (0, r.jsxs)("div", {
                    className: je().container,
                    children: [(0, r.jsx)(i.Heading, {
                        className: je().header,
                        variant: "heading-sm/semibold",
                        children: d.Z.Messages.MOBILE_REPORTS_EVENT_PREVIEW_TITLE
                    }), (0, r.jsxs)("div", {
                        className: je().guildContainer,
                        children: [(0,
                            r.jsxs)("div", {
                            className: je().guildInfo,
                            children: [(0, r.jsx)(me.Z, {
                                guild: t,
                                size: me.Z.Sizes.MINI,
                                className: je().guildIcon
                            }), (0, r.jsx)(i.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: t.name
                            })]
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: n.name
                        })]
                    })]
                })
            };
            var Se = t(883064),
                Ie = t(120053);

            function Ne(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            var Te = function(e, n) {
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
                }(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            Ne(e, n, t[n])
                        }))
                    }
                    return e
                }({}, t.n(Ie)().defaultRules.link), {
                    react: function(e, n, t) {
                        return (0, r.jsx)(i.Anchor, {
                            href: e.target,
                            target: "_blank",
                            children: n(e.content, t)
                        })
                    }
                }),
                we = t(938340),
                Re = t.n(we);

            function Ae(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Pe(e, n) {
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
            const Ce = function(e) {
                var n = e.node,
                    t = n.header,
                    o = n.subheader,
                    l = n.button,
                    c = "submit" === (null == l ? void 0 : l.type),
                    s = a.useRef(Se.Z.reactParserFor(Pe(function(e) {
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
                    }({}, Se.Z.defaultRules), {
                        link: Te
                    })));
                return (0, r.jsxs)("div", {
                    className: Re().headerContainer,
                    children: [null != t && "" !== t ? (0, r.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        children: t
                    }) : null, null != o && "" !== t ? (0, r.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: s.current(o)
                    }) : null, c && (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: d.Z.Messages.MOBILE_REPORTS_SUBMIT_INFO_TEXT.format()
                    })]
                })
            };
            var Me = t(613677),
                De = t(528004),
                ke = t.n(De);

            function Ze(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Le(e, n) {
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
            const Be = function(e) {
                var n = e.node.info,
                    t = a.useRef(Se.Z.reactParserFor(Le(function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))));
                            r.forEach((function(n) {
                                Ze(e, n, t[n])
                            }))
                        }
                        return e
                    }({}, Se.Z.defaultRules), {
                        link: Te
                    })));
                return null == n ? null : (0, r.jsx)(Me.Z, {
                    className: ke().infoBox,
                    messageType: Me.Q.INFO,
                    children: t.current(n)
                })
            };
            var Ue = t(703790),
                Ge = t(908890),
                Ve = t.n(Ge);

            function He(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function ze(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Fe(e, n) {
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

            function We(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return He(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return He(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const Ye = function(e) {
                var n = e.guildId,
                    t = e.reportId,
                    o = We(a.useState(!1), 2),
                    c = o[0],
                    s = o[1],
                    u = fe.Z.getGuild(n),
                    f = null != u;
                a.useEffect((function() {
                    s(!f)
                }), [f]);
                var m = a.useCallback((function() {
                    s(!0);
                    l.ZP.trackWithMetadata(g.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                        guild_id: n,
                        report_id: t
                    });
                    Ue.Z.leaveGuild(n)
                }), [n, t]);
                if (null == u) return null;
                var v = function() {
                    (0, i.openModal)((function(e) {
                        return (0, r.jsx)(i.ConfirmModal, Fe(function(e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    r = Object.keys(t);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                                }))));
                                r.forEach((function(n) {
                                    ze(e, n, t[n])
                                }))
                            }
                            return e
                        }({
                            header: d.Z.Messages.LEAVE_SERVER_TITLE.format({
                                name: u.name
                            }),
                            confirmText: d.Z.Messages.LEAVE_SERVER,
                            cancelText: d.Z.Messages.CANCEL,
                            onConfirm: m
                        }, e), {
                            children: (0, r.jsx)(i.Text, {
                                variant: "text-md/normal",
                                children: d.Z.Messages.LEAVE_SERVER_BODY.format({
                                    name: u.name
                                })
                            })
                        }))
                    }))
                };
                return (0, r.jsxs)("div", {
                    className: Ve().container,
                    children: [(0, r.jsx)(i.Text, {
                        className: Ve().description,
                        variant: "text-sm/normal",
                        children: d.Z.Messages.MOBILE_REPORTS_LEAVE_ELEMENT_DESCRIPTION
                    }), (0, r.jsxs)("div", {
                        className: Ve().guildContainer,
                        children: [(0, r.jsxs)("div", {
                            className: Ve().guildInfo,
                            children: [(0, r.jsx)(me.Z, {
                                guild: u,
                                showBadge: !1,
                                animate: !1,
                                size: me.Z.Sizes.SMALL,
                                "aria-label": u.name,
                                className: Ve().icon,
                                active: !0
                            }), (0, r.jsx)(i.Text, {
                                className: Ve().guildName,
                                variant: "text-sm/semibold",
                                children: u.name
                            })]
                        }), (0, r.jsx)(i.Button, {
                            onClick: function() {
                                return v()
                            },
                            disabled: c,
                            size: i.Button.Sizes.SMALL,
                            color: i.Button.Colors.RED,
                            children: c ? d.Z.Messages.MOBILE_REPORTS_LEFT_SERVER : d.Z.Messages.LEAVE_SERVER
                        })]
                    })]
                })
            };
            var Ke = t(550131),
                $e = t(283285),
                Xe = t(508754),
                qe = t(723876),
                Je = t(728118),
                Qe = t(763536),
                en = t(939198),
                nn = t(139452),
                tn = t.n(nn);
            const rn = function(e) {
                var n = e.message,
                    t = (0, Ke.ZP)(n),
                    a = (0, h.e7)([B.Z], (function() {
                        return B.Z.getChannel(n.channel_id)
                    })),
                    o = (0, $e.Z)(n, {
                        hideSimpleEmbedContent: !1
                    }).content;
                if (null == a) return null;
                return (0, r.jsxs)("div", {
                    className: tn().container,
                    children: [(0, r.jsx)(i.Heading, {
                        className: tn().header,
                        variant: "heading-sm/semibold",
                        children: d.Z.Messages.MOBILE_REPORTS_MESSAGE_PREVIEW_TITLE
                    }), (0, r.jsx)(i.Scroller, {
                        className: tn().messagePreviewContainer,
                        children: (0, r.jsx)(Xe.Z, {
                            childrenMessageContent: function() {
                                if (null == o || "" === o || Array.isArray(o) && 0 === o.length) {
                                    return (0, Qe.f)(n, o, !1, "", {
                                        iconClass: tn().attachmentIcon,
                                        iconSize: en.WW
                                    }).icon
                                }
                                return (0, r.jsx)(qe.ZP, {
                                    message: n,
                                    content: o
                                })
                            }(),
                            childrenHeader: (0, r.jsx)(Je.ZP, {
                                message: n,
                                channel: a,
                                author: t,
                                guildId: a.guild_id
                            }),
                            disableInteraction: !0
                        })
                    })]
                })
            };
            var an = t(287163),
                on = t.n(an);

            function ln(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function cn(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return ln(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ln(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var sn = function(e) {
                var n = e.onChange,
                    t = e.label,
                    a = e.subtitle,
                    o = e.selected;
                return (0, r.jsx)("div", {
                    className: on().checkboxRow,
                    children: (0, r.jsxs)(i.Checkbox, {
                        type: i.Checkbox.Types.INVERTED,
                        onChange: function() {
                            return n()
                        },
                        value: o,
                        children: [(0, r.jsx)(i.Text, {
                            color: "interactive-active",
                            variant: "text-md/semibold",
                            children: t
                        }), (0, r.jsx)(i.Text, {
                            color: "interactive-active",
                            variant: "text-sm/normal",
                            children: a
                        })]
                    })
                })
            };
            const un = function(e) {
                var n = e.element,
                    t = e.state,
                    a = e.onChange;
                if ("checkbox" !== (null == n ? void 0 : n.type)) return null;
                var i = n.data;
                return (0, r.jsx)("div", {
                    children: i.map((function(e, n) {
                        var i = cn(e, 3),
                            o = i[0],
                            l = i[1],
                            c = i[2];
                        return (0, r.jsx)(sn, {
                            onChange: function() {
                                return a(o, l)
                            },
                            selected: o in t,
                            label: l,
                            subtitle: c
                        }, "".concat(n, "+button"))
                    }))
                })
            };
            var dn = t(490405),
                fn = t.n(dn);
            const mn = function(e) {
                var n = e.stageInstance,
                    t = fe.Z.getGuild(n.guild_id);
                return null == t ? null : (0, r.jsxs)("div", {
                    className: fn().container,
                    children: [(0, r.jsx)(i.Heading, {
                        className: fn().header,
                        variant: "heading-sm/semibold",
                        children: d.Z.Messages.MOBILE_REPORTS_STAGE_CHANNEL_PREVIEW_TITLE
                    }), (0, r.jsxs)("div", {
                        className: fn().guildContainer,
                        children: [(0, r.jsxs)("div", {
                            className: fn().guildInfo,
                            children: [(0, r.jsx)(me.Z, {
                                guild: t,
                                size: me.Z.Sizes.MINI,
                                className: fn().guildIcon
                            }), (0, r.jsx)(i.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: t.name
                            })]
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: n.topic
                        })]
                    })]
                })
            };
            var vn = t(802435),
                hn = t.n(vn),
                bn = t(513157);
            const yn = function(e) {
                var n = e.element;
                return "success" !== (null == n ? void 0 : n.type) ? null : (0, r.jsx)("img", {
                    alt: "",
                    src: bn,
                    className: hn().successImg
                })
            };
            var pn = t(294184),
                gn = t.n(pn),
                _n = t(691797),
                En = t(371568),
                xn = t.n(En);

            function jn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function On(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Sn(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return jn(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return jn(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function In(e) {
                var n = e.element.data,
                    t = n.title,
                    o = n.body,
                    l = n.sms,
                    c = n.is_localized,
                    s = Sn(a.useState(!1), 2),
                    u = s[0],
                    f = s[1],
                    m = a.useRef(Se.Z.reactParserFor(Se.Z.defaultRules));
                if (!c) return null;
                return (0, r.jsxs)("div", {
                    className: xn().container,
                    children: [(0, r.jsx)(i.Heading, {
                        variant: "heading-sm/semibold",
                        color: "header-secondary",
                        className: xn().header,
                        children: t
                    }), (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        className: xn().bodyText,
                        children: m.current(o)
                    }), (0, r.jsx)("div", {
                        className: xn().smsInfoContainer,
                        children: (0, r.jsxs)("div", {
                            className: gn()(xn().smsNumberContainer, On({}, xn().copied, u)),
                            children: [(0, r.jsx)(i.Text, {
                                variant: "text-md/normal",
                                selectable: !0,
                                className: xn().smsNumberText,
                                children: l
                            }), (0, r.jsx)(i.Button, {
                                size: i.Button.Sizes.SMALL,
                                className: xn().trailingButton,
                                onClick: function() {
                                    (0, _n.JG)(l) && f(!0)
                                },
                                color: i.Button.Colors.PRIMARY,
                                children: u ? d.Z.Messages.COPIED : d.Z.Messages.COPY
                            })]
                        })
                    })]
                })
            }
            var Nn = t(385028),
                Tn = t(281321),
                wn = t.n(Tn);
            const Rn = function(e) {
                var n = e.user;
                return (0, r.jsxs)("div", {
                    className: wn().container,
                    children: [(0, r.jsx)(i.Heading, {
                        className: wn().header,
                        variant: "heading-sm/semibold",
                        children: d.Z.Messages.REPORTS_USER_PREVIEW_TITLE
                    }), (0, r.jsx)("div", {
                        className: wn().userContainer,
                        children: (0, r.jsxs)("div", {
                            className: wn().userInfo,
                            children: [(0, r.jsx)(Nn.Z, {
                                className: wn().userIcon,
                                user: n,
                                size: i.AvatarSizes.SIZE_40
                            }), (0, r.jsxs)("div", {
                                children: [null != n.globalName && (0, r.jsx)(i.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: n.globalName
                                }), (0, r.jsx)(i.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: n.username
                                })]
                            })]
                        })
                    })]
                })
            };
            var An = ["block_users", "leave_guild", "delete_message"],
                Pn = t(635971),
                Cn = t.n(Pn);

            function Mn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Dn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function kn(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Dn(e, n, t[n])
                    }))
                }
                return e
            }

            function Zn(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Mn(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Mn(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ln(e, n) {
                return e.elements.find((function(e) {
                    return e.type === n
                }))
            }

            function Bn(e, n) {
                return e.elements.filter((function(e) {
                    return e.type === n
                }))
            }
            const Un = function(e) {
                var n = e.node,
                    t = e.reportType,
                    o = e.history,
                    l = e.onSelectChild,
                    c = e.onModalClose,
                    s = e.multiSelect,
                    f = e.reportId,
                    m = e.textInput,
                    h = Zn(a.useState(!1), 2),
                    b = h[0],
                    y = h[1],
                    p = Zn(a.useState(!1), 2),
                    g = p[0],
                    _ = p[1],
                    E = Zn(a.useState((function() {
                        return {}
                    })), 2),
                    x = E[0],
                    j = E[1],
                    S = Zn(a.useState((function() {
                        return {}
                    })), 2),
                    I = S[0],
                    N = S[1],
                    T = Ln(n, "checkbox"),
                    w = Ln(n, "text_line_resource"),
                    A = Bn(n, "external_link"),
                    P = Bn(n, "free_text"),
                    C = Bn(n, "dropdown"),
                    M = function(e, n) {
                        var t = kn({}, I);
                        t[e] = n;
                        N(t)
                    },
                    D = a.useMemo((function() {
                        return function(e) {
                            l({
                                nodeRef: n.id,
                                destination: e,
                                textInput: null != P || null != C ? I : void 0,
                                multiSelect: null != T ? {
                                    name: T.name,
                                    state: x
                                } : void 0
                            })
                        }
                    }), [n, l, T, x, I, P, C]);
                a.useEffect((function() {
                    null != s && j(s);
                    null != m && N(m)
                }), [s, m]);
                var k;
                return (0, r.jsxs)("div", {
                    className: Cn().container,
                    children: [(0, r.jsxs)(i.ModalHeader, {
                        separator: !1,
                        direction: u.Z.Direction.VERTICAL,
                        className: Cn().header,
                        children: [(0, r.jsx)(yn, {
                            element: Ln(n, "success")
                        }), (0, r.jsx)(Ce, {
                            node: n
                        }), (0, r.jsx)(Be, {
                            node: n
                        })]
                    }), (0, r.jsxs)(i.ModalContent, {
                        className: Cn().body,
                        children: [null != w ? (0, r.jsx)(In, {
                            element: w
                        }) : null, null != Ln(n, "breadcrumbs") && (0, r.jsx)(R, {
                            history: o
                        }), null != Ln(n, "message_preview") && ("message" === t.name || "first_dm" === t.name) && (0, r.jsx)(rn, {
                            message: t.record
                        }), null != Ln(n, "user_preview") && "user" === t.name ? (0, r.jsx)(Rn, {
                            user: t.record
                        }) : null, (k = n, k.elements.some((function(e) {
                            var n = e.type;
                            return An.includes(n)
                        }))) && (0, r.jsx)(i.Heading, {
                            className: Cn().remediationElementsHeader,
                            variant: "heading-sm/semibold",
                            children: d.Z.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_HEADER
                        }), null != Ln(n, "block_users") && ("message" === t.name || "first_dm" === t.name || "user" === t.name) && (0, r.jsx)(O, {
                            userId: "user" === t.name ? t.record.id : t.record.author.id,
                            reportId: f,
                            reportName: t.name
                        }), null != Ln(n, "delete_message") && "message" === t.name && (0, r.jsx)(F, {
                            message: t.record,
                            reportId: f
                        }), null != Ln(n, "leave_guild") && "guild" === t.name && (0, r.jsx)(Ye, {
                            guildId: t.record.id,
                            reportId: f
                        }), null != Ln(n, "channel_preview") && "stage_channel" === t.name && (0, r.jsx)(mn, {
                            stageInstance: t.record
                        }), null != Ln(n, "guild_scheduled_event_preview") && "guild_scheduled_event" === t.name && (0, r.jsx)(Oe, {
                            event: t.record
                        }), null != Ln(n, "guild_directory_entry_preview") && "guild_directory_entry" === t.name && (0, r.jsx)(be, {
                            entry: t.record
                        }), null != Ln(n, "guild_discovery_preview") && "guild_discovery" === t.name && (0, r.jsx)(Ee, {
                            entry: t.record
                        }), null != T && (0, r.jsx)(un, {
                            element: T,
                            onChange: function(e, n) {
                                var t = kn({}, x);
                                e in x ? delete t[e] : t[e] = n;
                                j(t)
                            },
                            state: x
                        }), ("user_urf" === t.name || "message_urf" === t.name) && null != C && C.length > 0 && (0, r.jsx)(q, {
                            elements: C,
                            onChange: M
                        }), ("user_urf" === t.name || "message_urf" === t.name) && null != P && P.length > 0 && (0, r.jsx)(de, {
                            elements: P,
                            onChange: M,
                            state: I
                        }), (0, r.jsx)(Z, {
                            node: n,
                            onSelectChild: D
                        }), null != A && A.length > 0 ? (0, r.jsx)(le, {
                            elements: A
                        }) : null, (0, r.jsx)(ne, {
                            hasError: g,
                            onClose: function() {
                                _(!1)
                            }
                        })]
                    }), (0, r.jsx)(v, {
                        button: n.button,
                        submitting: b,
                        disableNext: !0 === n.is_multi_select_required && 0 === Object.keys(x).length,
                        onClick: function(t) {
                            switch (t.type) {
                                case "done":
                                case "cancel":
                                    c();
                                    break;
                                case "next":
                                    D(["", t.target]);
                                    break;
                                case "submit":
                                    y(!0);
                                    e.onSubmit({
                                        nodeRef: n.id,
                                        destination: ["", e.successNodeId]
                                    }).then((function() {
                                        _(!1);
                                        D(["", e.successNodeId])
                                    })).catch((function() {
                                        _(!0)
                                    })).finally((function() {
                                        y(!1)
                                    }))
                            }
                        },
                        onBackClicked: e.onNavigateBack,
                        canNavigateBack: o.length > 0
                    }), (0, r.jsx)(i.ModalCloseButton, {
                        className: Cn().closeButton,
                        onClick: c
                    })]
                })
            };
            var Gn = t(413671),
                Vn = t.n(Gn);

            function Hn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function zn(e, n, t, r, a, i, o) {
                try {
                    var l = e[i](o),
                        c = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(c) : Promise.resolve(c).then(r, a)
            }

            function Fn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Wn(e, n) {
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

            function Yn(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || $n(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Kn(e) {
                return function(e) {
                    if (Array.isArray(e)) return Hn(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || $n(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function $n(e, n) {
                if (e) {
                    if ("string" == typeof e) return Hn(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Hn(e, n) : void 0
                }
            }
            var Xn = function(e, n) {
                var t, r, a, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
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
                            for (; o;) try {
                                if (t = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                                (r = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            o.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(i);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                i = n.call(e, o)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
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
            const qn = function(e) {
                var n, t, u = e.reportType,
                    d = e.menu,
                    f = e.modalProps,
                    m = e.onSubmit,
                    v = e.onNavigate,
                    h = e.isAuthenticated,
                    b = void 0 === h || h,
                    y = (0, c.Dt)(),
                    p = d.nodes,
                    _ = d.root_node_id,
                    E = d.success_node_id,
                    x = d.fail_node_id,
                    j = Yn(a.useState(_), 2),
                    O = j[0],
                    S = j[1],
                    I = Yn(a.useState(void 0), 2),
                    N = I[0],
                    T = I[1],
                    w = Yn(a.useState(void 0), 2),
                    R = w[0],
                    A = w[1],
                    P = Yn(a.useState([]), 2),
                    C = P[0],
                    M = P[1],
                    D = Yn(a.useState(void 0), 2),
                    k = D[0],
                    Z = D[1],
                    L = function(e) {
                        var n, t = Yn(e.destination, 2)[1],
                            r = p[t];
                        if (r.elements.some((function(e) {
                                return "skip" === e.type
                            })) && "next" === (null === (n = r.button) || void 0 === n ? void 0 : n.type)) return L(Wn(function(e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    r = Object.keys(t);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                                }))));
                                r.forEach((function(n) {
                                    Fn(e, n, t[n])
                                }))
                            }
                            return e
                        }({}, e), {
                            destination: ["", r.button.target]
                        }));
                        M(Kn(C).concat([e]));
                        null != r.key && (null == v || v(r.key));
                        T(void 0);
                        A(void 0);
                        if (u.name === s.b.MESSAGE || u.name === s.b.FIRST_DM) {
                            var a = u.record.id;
                            l.ZP.trackWithMetadata(g.rMx.IAR_NAVIGATE, {
                                message_id: a,
                                content_type: u.name,
                                report_sub_type: r.report_type,
                                current_node: p[O].id,
                                next_node: r.id
                            })
                        }
                        S(t)
                    },
                    B = (t = (n = function(e) {
                        var n, t, r, a;
                        return Xn(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return b ? [4, (0, o.ZD)(d, u, Kn(C).concat([e]))] : [3, 2];
                                case 1:
                                    r = i.sent();
                                    return [3, 4];
                                case 2:
                                    return [4, (0, o.fw)(d, u, Kn(C).concat([e]))];
                                case 3:
                                    r = i.sent();
                                    i.label = 4;
                                case 4:
                                    null != (a = null == (t = r) || null === (n = t.body) || void 0 === n ? void 0 : n.report_id) && Z(a);
                                    null == m || m(a);
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, a) {
                            var i = n.apply(e, t);

                            function o(e) {
                                zn(i, r, a, o, l, "next", e)
                            }

                            function l(e) {
                                zn(i, r, a, o, l, "throw", e)
                            }
                            o(void 0)
                        }))
                    }), function(e) {
                        return t.apply(this, arguments)
                    }),
                    U = function() {
                        var e;
                        if (!(C.length < 1)) {
                            var n, t = Kn(C),
                                r = t.pop(),
                                a = null !== (n = null == r ? void 0 : r.nodeRef) && void 0 !== n ? n : _;
                            if (u.name === s.b.MESSAGE || u.name === s.b.FIRST_DM) {
                                var i = u.record.id;
                                l.ZP.trackWithMetadata(g.rMx.IAR_NAVIGATE, {
                                    message_id: i,
                                    content_type: u.name,
                                    report_sub_type: p[a].report_type,
                                    current_node: p[O].id,
                                    next_node: p[a].id
                                })
                            }
                            T(null == r || null === (e = r.multiSelect) || void 0 === e ? void 0 : e.state);
                            A(null == r ? void 0 : r.textInput);
                            S(a);
                            M(t);
                            null == v || v("..")
                        }
                    },
                    G = [];
                for (var V in p) {
                    var H, z = p[V];
                    if (z.id !== E && z.id !== x && z.id !== _) {
                        G.push(z);
                        if ("next" === (null === (H = z.button) || void 0 === H ? void 0 : H.type)) {
                            var F, W = null === (F = z.button) || void 0 === F ? void 0 : F.target,
                                Y = G.indexOf(p[W]);
                            if (-1 !== Y) {
                                G.splice(Y, 1);
                                G.push(p[W])
                            }
                        }
                    }
                }
                var K = [p[_]].concat(Kn(G), [p[E], p[x]]);
                return (0, r.jsx)(i.ModalRoot, {
                    transitionState: f.transitionState,
                    "aria-labelledby": y,
                    children: (0, r.jsx)(i.Slides, {
                        width: 440,
                        activeSlide: O,
                        centered: !1,
                        children: K.map((function(e) {
                            return (0, r.jsx)(i.Slide, {
                                id: e.id,
                                children: (0, r.jsx)("div", {
                                    className: Vn().slideContainer,
                                    children: (0, r.jsx)(Un, {
                                        node: e,
                                        reportType: u,
                                        history: C,
                                        onModalClose: f.onClose,
                                        onSelectChild: L,
                                        onNavigateBack: U,
                                        multiSelect: N,
                                        textInput: R,
                                        successNodeId: E,
                                        failNodeId: x,
                                        onSubmit: B,
                                        reportId: k
                                    })
                                })
                            }, e.id)
                        }))
                    })
                })
            };

            function Jn(e, n, t, r, a, i, o) {
                try {
                    var l = e[i](o),
                        c = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(c) : Promise.resolve(c).then(r, a)
            }

            function Qn(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(n, t);

                        function o(e) {
                            Jn(i, r, a, o, l, "next", e)
                        }

                        function l(e) {
                            Jn(i, r, a, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            var et = function(e, n) {
                var t, r, a, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
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
                            for (; o;) try {
                                if (t = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                                (r = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            o.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(i);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                i = n.call(e, o)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
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

            function nt(e, n, t, r) {
                return tt.apply(this, arguments)
            }

            function tt() {
                tt = Qn((function(e, n, t, a) {
                    var l, c, s, u, d, f, m, v, h, b = arguments;
                    return et(this, (function(y) {
                        switch (y.label) {
                            case 0:
                                l = !(b.length > 4 && void 0 !== b[4]) || b[4], c = !(b.length > 5 && void 0 !== b[5]) || b[5];
                                s = (0, i.getInteractingModalContext)();
                                y.label = 1;
                            case 1:
                                y.trys.push([1, 6, , 7]);
                                return c ? [4, (0, o.Nt)(e, n)] : [3, 3];
                            case 2:
                                d = y.sent();
                                return [3, 5];
                            case 3:
                                return [4, (0, o.B0)(e, n)];
                            case 4:
                                d = y.sent();
                                y.label = 5;
                            case 5:
                                u = d;
                                f = [];
                                m = void 0;
                                v = function(e) {
                                    f.push(e)
                                };
                                h = function(e) {
                                    m = e;
                                    null == t || t()
                                };
                                (0, i.openModal)((function(n) {
                                    return (0, r.jsx)(qn, {
                                        menu: u,
                                        reportType: e,
                                        modalProps: n,
                                        onNavigate: v,
                                        onSubmit: h,
                                        isAuthenticated: c
                                    })
                                }), {
                                    onCloseCallback: function() {
                                        (0, o.k8)(e, f, m);
                                        null == a || a();
                                        l && (0, o.X)(e, null != m ? m : null)
                                    }
                                }, s);
                                return [3, 7];
                            case 6:
                                y.sent();
                                return [3, 7];
                            case 7:
                                return [2]
                        }
                    }))
                }));
                return tt.apply(this, arguments)
            }
        },
        613677: (e, n, t) => {
            "use strict";
            t.d(n, {
                Q: () => r,
                Z: () => v
            });
            var r, a = t(785893),
                i = (t(667294), t(294184)),
                o = t.n(i),
                l = t(70418),
                c = t(621329),
                s = t(559968),
                u = t(386991),
                d = t(818417),
                f = t(153954),
                m = t.n(f);
            ! function(e) {
                e[e.WARNING = 0] = "WARNING";
                e[e.INFO = 1] = "INFO";
                e[e.ERROR = 2] = "ERROR";
                e[e.POSITIVE = 3] = "POSITIVE"
            }(r || (r = {}));
            const v = function(e) {
                var n = e.children,
                    t = e.messageType,
                    i = e.className,
                    f = e.textColor,
                    v = void 0 === f ? "text-normal" : f,
                    h = e.textVariant,
                    b = void 0 === h ? "text-sm/medium" : h,
                    y = function(e) {
                        switch (e) {
                            case r.WARNING:
                                return d.Z;
                            case r.INFO:
                                return u.Z;
                            case r.ERROR:
                                return s.Z;
                            case r.POSITIVE:
                                return c.Z
                        }
                    }(t),
                    p = function(e) {
                        switch (e) {
                            case r.WARNING:
                                return m().warning;
                            case r.INFO:
                                return m().info;
                            case r.ERROR:
                                return m().error;
                            case r.POSITIVE:
                                return m().positive
                        }
                    }(t);
                return (0, a.jsxs)("div", {
                    className: o()(m().container, p, i),
                    children: [(0, a.jsx)("div", {
                        className: m().iconDiv,
                        children: (0, a.jsx)(y, {
                            className: m().icon
                        })
                    }), (0, a.jsx)(l.Text, {
                        className: m().text,
                        color: v,
                        variant: b,
                        children: n
                    })]
                })
            }
        }
    }
]);