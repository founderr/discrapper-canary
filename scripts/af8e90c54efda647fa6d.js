(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [54368], {
        513157: (e, n, r) => {
            e.exports = r.p + "c8d8bfacc6311892e73219a74e9cd164.svg"
        },
        726196: (e, n, r) => {
            "use strict";
            r.d(n, {
                b: () => t,
                B: () => i
            });
            var t, i;
            ! function(e) {
                e.GUILD = "guild";
                e.GUILD_DISCOVERY = "guild_discovery";
                e.GUILD_DIRECTORY_ENTRY = "guild_directory_entry";
                e.MESSAGE = "message";
                e.STAGE_CHANNEL = "stage_channel";
                e.GUILD_SCHEDULED_EVENT = "guild_scheduled_event";
                e.FIRST_DM = "first_dm";
                e.USER = "user"
            }(t || (t = {}));
            ! function(e) {
                e.MESSAGE = "message_urf";
                e.USER = "user_urf"
            }(i || (i = {}))
        },
        354368: (e, n, r) => {
            "use strict";
            r.d(n, {
                lt: () => h,
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
            var t = r(396043),
                i = r(766496),
                a = r(4798),
                o = r(722406),
                l = (0, r(260561).B)({
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
            var c = r(726196),
                s = r(753698),
                u = r(2590);

            function d(e, n, r, t, i, a, o) {
                try {
                    var l = e[a](o),
                        c = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? n(c) : Promise.resolve(c).then(t, i)
            }

            function f(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, i) {
                        var a = e.apply(n, r);

                        function o(e) {
                            d(a, t, i, o, l, "next", e)
                        }

                        function l(e) {
                            d(a, t, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function m(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }
            var v, b = function(e, n) {
                var r, t, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, t && (i = 2 & a[0] ? t.return : a[0] ? t.throw || ((i = t.return) && i.call(t), 0) : t.next) && !(i = i.call(t, a[1])).done) return i;
                                (t = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        t = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                t = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };
            v = r(461092).Z;

            function h(e, n) {
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
                var r = l.getCurrentConfig({
                    location: "159afe_2"
                }, {
                    autoTrackExposure: !0
                }).showFraudMenuVariant;
                v({
                    name: c.b.MESSAGE,
                    record: e
                }, {
                    variant: r ? "4" : void 0
                }, n)
            }

            function g(e, n) {
                var r = i.Z.getStageInstanceByChannel(e.id);
                if (null != r) {
                    N(c.b.STAGE_CHANNEL, {
                        stage_instance_id: r.id,
                        channel_id: r.channel_id,
                        guild_id: r.guild_id
                    });
                    v({
                        name: c.b.STAGE_CHANNEL,
                        record: r
                    }, {}, n)
                }
            }

            function _(e, n) {
                var r;
                N(c.b.GUILD_SCHEDULED_EVENT, {
                    guild_scheduled_event_id: e.id,
                    guild_id: e.guild_id,
                    channel_id: null !== (r = e.channel_id) && void 0 !== r ? r : void 0
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
                    return b(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                r.trys.push([0, 2, , 3]);
                                return [4, (0, s.ox)({
                                    name: c.b.FIRST_DM,
                                    record: e
                                }, {
                                    variant: "_first_dm_ham_v1"
                                })];
                            case 1:
                                r.sent();
                                null == n || n();
                                return [3, 3];
                            case 2:
                                r.sent();
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(e, n, r) {
                N(c.b.USER, {
                    reported_user_id: e.id
                });
                v({
                    name: c.b.USER,
                    record: e,
                    contextualGuildId: n
                }, {}, r, void 0, !1)
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
                var n = new a.Z({});
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
                t.ZP.trackWithMetadata(u.rMx.IAR_MODAL_OPEN, function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {},
                            t = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        t.forEach((function(n) {
                            m(e, n, r[n])
                        }))
                    }
                    return e
                }({
                    report_type: e
                }, n))
            }
        },
        753698: (e, n, r) => {
            "use strict";
            r.d(n, {
                Nt: () => v,
                B0: () => h,
                ox: () => p,
                ZD: () => _,
                fw: () => E,
                k8: () => S,
                X: () => I
            });
            var t = r(281110),
                i = r(744564),
                a = r(396043),
                o = r(726196),
                l = r(2590);

            function c(e, n, r, t, i, a, o) {
                try {
                    var l = e[a](o),
                        c = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? n(c) : Promise.resolve(c).then(t, i)
            }

            function s(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, i) {
                        var a = e.apply(n, r);

                        function o(e) {
                            c(a, t, i, o, l, "next", e)
                        }

                        function l(e) {
                            c(a, t, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function u(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function d(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        u(e, n, r[n])
                    }))
                }
                return e
            }

            function f(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        r.push.apply(r, t)
                    }
                    return r
                }(Object(n)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }));
                return e
            }
            var m = function(e, n) {
                var r, t, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, t && (i = 2 & a[0] ? t.return : a[0] ? t.throw || ((i = t.return) && i.call(t), 0) : t.next) && !(i = i.call(t, a[1])).done) return i;
                                (t = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        t = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                t = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };

            function v(e, n) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = s((function(e, n) {
                    var r, i, a;
                    return m(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                r = j(e);
                                return [4, t.ZP.get({
                                    url: l.ANM.GET_REPORT_MENU(r),
                                    query: null != (null == n ? void 0 : n.variant) ? {
                                        variant: n.variant
                                    } : void 0
                                })];
                            case 1:
                                i = o.sent();
                                return [2, null !== (a = i.body) && void 0 !== a ? a : JSON.parse(i.text)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function h(e, n) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = s((function(e, n) {
                    var r, i, a;
                    return m(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                r = x(e);
                                return [4, t.ZP.get({
                                    url: l.ANM.GET_UNAUTHENTICATED_REPORT_MENU(r),
                                    query: null != (null == n ? void 0 : n.variant) ? {
                                        variant: n.variant
                                    } : void 0
                                })];
                            case 1:
                                i = o.sent();
                                return [2, null !== (a = i.body) && void 0 !== a ? a : JSON.parse(i.text)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(e, n) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = s((function(e, n) {
                    var r, i;
                    return m(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                r = j(e);
                                return [4, v(e, n)];
                            case 1:
                                i = a.sent();
                                return [4, t.ZP.post({
                                    url: l.ANM.SUBMIT_REPORT_MENU(r),
                                    body: O(i, e, [{
                                        nodeRef: i.root_node_id,
                                        destination: ["", i.success_node_id]
                                    }])
                                })];
                            case 2:
                                a.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function _(e, n, r) {
                return t.ZP.post({
                    url: l.ANM.SUBMIT_REPORT_MENU(j(n)),
                    body: O(e, n, r)
                })
            }

            function E(e, n, r) {
                var i = x(n);
                return t.ZP.post({
                    url: l.ANM.SUBMIT_UNAUTHENTICATED_REPORT_MENU(i),
                    body: O(e, n, r)
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
            var O = function(e, n, r) {
                var t = e.version,
                    i = e.variant,
                    a = e.language,
                    l = {
                        version: t,
                        variant: i,
                        language: null != a ? a : "en",
                        breadcrumbs: r.map((function(e) {
                            return e.nodeRef
                        })),
                        elements: r.reduce((function(e, n) {
                            var r = n.multiSelect;
                            return null == r ? e : f(d({}, e), u({}, r.name, Object.keys(r.state)))
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
                    var b = n.record,
                        h = b.guildId,
                        y = b.channelId;
                    return f(d({}, l), {
                        name: n.name,
                        channel_id: y,
                        message_id: void 0,
                        stage_instance_id: void 0,
                        guild_id: h,
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

            function S(e, n, r) {
                a.ZP.trackWithMetadata(l.rMx.IAR_MODAL_CLOSE, {
                    report_type: e.name,
                    report_id: r,
                    navigation_history: n,
                    message_id: e.name === o.b.MESSAGE || e.name === o.b.FIRST_DM ? e.record.id : void 0,
                    stage_instance_id: e.name === o.b.STAGE_CHANNEL ? e.record.id : void 0,
                    guild_scheduled_event_id: e.name === o.b.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
                    guild_id: e.name === o.b.GUILD || e.name === o.b.GUILD_DISCOVERY ? e.record.id : e.name === o.b.GUILD_DIRECTORY_ENTRY ? e.record.guildId : e.name === o.b.GUILD_SCHEDULED_EVENT ? e.record.guild_id : void 0,
                    channel_id: e.name === o.b.GUILD_SCHEDULED_EVENT ? e.record.channel_id : e.name === o.b.GUILD_DIRECTORY_ENTRY ? e.record.channelId : void 0
                })
            }

            function I(e, n) {
                i.Z.dispatch({
                    type: "IN_APP_REPORTS_SHOW_FEEDBACK",
                    reportId: n,
                    reportType: e.name
                })
            }
        },
        461092: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => Yn
            });
            var t = r(785893),
                i = r(667294),
                a = r(304548),
                o = r(753698),
                l = r(396043),
                c = r(443812),
                s = r(726196),
                u = r(107364),
                d = r(473708),
                f = r(172386),
                m = r.n(f);
            const v = function(e) {
                var n = e.button,
                    r = e.submitting,
                    o = e.disableNext,
                    l = e.onClick,
                    c = e.canNavigateBack,
                    s = e.onBackClicked,
                    f = i.useRef(null),
                    v = null != n && "cancel" !== n.type,
                    b = c && "done" !== (null == n ? void 0 : n.type),
                    h = v || b;
                i.useEffect((function() {
                    if ("submit" === (null == n ? void 0 : n.type) || "done" === (null == n ? void 0 : n.type)) {
                        var e;
                        null === (e = f.current) || void 0 === e || e.focus()
                    }
                }), [null == n ? void 0 : n.type]);
                if (!h) return null;
                var y, p = d.Z.Messages.DONE;
                if ("submit" === (null == n ? void 0 : n.type)) {
                    p = d.Z.Messages.MOBILE_REPORTS_SUBMIT_REPORT;
                    y = a.Button.Colors.RED
                } else if ("next" === (null == n ? void 0 : n.type)) p = d.Z.Messages.NEXT;
                else if ("cancel" === (null == n ? void 0 : n.type)) {
                    p = d.Z.Messages.CANCEL;
                    y = a.Button.Colors.TRANSPARENT
                }
                return (0, t.jsxs)(a.ModalFooter, {
                    direction: u.Z.Direction.HORIZONTAL,
                    children: [b && (0, t.jsx)(a.Button, {
                        onClick: s,
                        color: a.Button.Colors.TRANSPARENT,
                        disabled: r,
                        children: d.Z.Messages.BACK
                    }), v && (0, t.jsx)(a.Button, {
                        onClick: function() {
                            null != n && l(n)
                        },
                        color: y,
                        className: m().actionButton,
                        disabled: r || o,
                        buttonRef: f,
                        children: p
                    })]
                })
            };
            var b = r(202351),
                h = r(560923),
                y = r(840922),
                p = r(473903),
                g = r(2590),
                _ = r(330446),
                E = r.n(_);

            function x(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function j(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return x(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return x(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const O = function(e) {
                var n = e.userId,
                    r = e.reportId,
                    o = e.reportName,
                    c = j(i.useState(!1), 2),
                    u = c[0],
                    f = c[1],
                    m = (0, b.e7)([p.default], (function() {
                        return p.default.getUser(n)
                    }), [n]),
                    v = (0, b.e7)([y.Z], (function() {
                        return y.Z.getRelationshipType(n)
                    }), [n]) === g.OGo.BLOCKED;
                i.useEffect((function() {
                    f(v)
                }), [v]);
                var _ = i.useCallback((function() {
                    f(!0);
                    l.ZP.trackWithMetadata(g.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                        other_user_id: n,
                        report_id: r
                    });
                    h.Z.addRelationship({
                        userId: n,
                        context: {
                            location: "ReportMenuBlockUser-iOS"
                        },
                        type: g.OGo.BLOCKED
                    })
                }), [n, r]);
                return null == m ? null : (0, t.jsxs)("div", {
                    className: E().container,
                    children: [(0, t.jsx)(a.Text, {
                        className: E().description,
                        variant: "text-sm/normal",
                        children: o === s.b.USER ? d.Z.Messages.REPORTS_BLOCK_USER_ELEMENT_DESCRIPTION : d.Z.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_DESCRIPTION
                    }), (0, t.jsxs)("div", {
                        className: E().userContainer,
                        children: [(0, t.jsxs)("div", {
                            className: E().userInfo,
                            children: [(0, t.jsx)(a.Avatar, {
                                size: a.AvatarSizes.SIZE_32,
                                src: m.getAvatarURL(void 0, 32),
                                className: E().avatar,
                                "aria-label": m.username
                            }), (0, t.jsx)(a.Text, {
                                className: E().userName,
                                variant: "text-sm/semibold",
                                children: m.username
                            }), !m.isPomelo() && (0, t.jsxs)(a.Text, {
                                variant: "text-sm/normal",
                                children: ["#", m.discriminator]
                            })]
                        }), (0, t.jsx)(a.Button, {
                            onClick: function() {
                                return _()
                            },
                            disabled: u,
                            size: a.Button.Sizes.SMALL,
                            color: a.Button.Colors.RED,
                            children: u ? d.Z.Messages.BLOCKED : d.Z.Messages.BLOCK
                        })]
                    })]
                })
            };
            var S = r(496486),
                I = r(580143),
                N = r.n(I);

            function T(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function R(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return T(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return T(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const w = function(e) {
                var n = (0, S.flatMap)(e.history, (function(e) {
                    var n, r = R(e.destination, 1)[0],
                        t = e.multiSelect,
                        i = e.freeText,
                        a = [null, null],
                        o = Object.values(null !== (n = null == t ? void 0 : t.state) && void 0 !== n ? n : {});
                    o.length > 0 && (a[0] = o.join(", "));
                    null != i && "" !== i && (a[0] = i);
                    "" !== r && (a[1] = r);
                    return a
                })).filter((function(e) {
                    return null != e
                }));
                return 0 === n.length ? null : (0, t.jsxs)("div", {
                    className: N().container,
                    children: [(0, t.jsx)(a.Heading, {
                        className: N().breadcrumbsHeader,
                        color: "header-secondary",
                        variant: "heading-sm/semibold",
                        children: d.Z.Messages.MOBILE_REPORTS_BREADCRUMBS_TITLE
                    }), n.map((function(e, n) {
                        return (0, t.jsxs)("div", {
                            className: N().breadcrumbContainer,
                            children: [(0, t.jsx)("div", {
                                className: N().breadcrumbDot
                            }), (0, t.jsx)(a.Text, {
                                variant: "text-md/normal",
                                className: N().breadcrumbText,
                                children: e
                            })]
                        }, "".concat(e, "+").concat(n))
                    }))]
                })
            };
            var P = r(718831),
                A = r(352811),
                C = r.n(A);

            function M(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function D(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return M(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return M(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = function(e) {
                var n = e.child,
                    r = e.onClick,
                    i = D(n, 1)[0];
                return (0, t.jsxs)(a.Clickable, {
                    className: C().childButton,
                    onClick: function() {
                        return r(n)
                    },
                    children: [(0, t.jsx)(a.Text, {
                        className: C().childText,
                        variant: "text-md/semibold",
                        children: i
                    }), (0, t.jsx)(P.Z, {
                        className: C().childIcon,
                        direction: P.Z.Directions.RIGHT
                    })]
                })
            };
            const Z = function(e) {
                var n = e.node.children,
                    r = e.onSelectChild;
                if (null == n || 0 === n.length) return null;
                var i = n.map((function(e) {
                    var n = D(e, 2),
                        i = n[0],
                        a = n[1];
                    return (0, t.jsx)(k, {
                        child: e,
                        onClick: r
                    }, "".concat(i, "+").concat(a))
                }));
                return (0, t.jsx)("div", {
                    className: C().childrenContainer,
                    children: i
                })
            };
            var L = r(720419),
                B = r(61209),
                U = r(682776),
                G = r(268853),
                V = r.n(G);

            function H(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function z(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return H(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return H(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const F = function(e) {
                var n = e.message,
                    r = e.reportId,
                    o = z(i.useState(!1), 2),
                    c = o[0],
                    s = o[1],
                    u = i.useCallback((function() {
                        s(!0);
                        l.ZP.trackWithMetadata(g.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, {
                            report_id: r
                        });
                        L.Z.deleteMessage(n.getChannelId(), n.id)
                    }), [n, r]),
                    f = i.useMemo((function() {
                        var e = B.Z.getChannel(n.getChannelId());
                        return null != e && (e.type !== g.d4z.DM && e.type !== g.d4z.GROUP_DM && U.Z.canWithPartialContext(g.Plq.MANAGE_MESSAGES, {
                            channelId: e.id
                        }))
                    }), [n]);
                return null != n && f ? (0, t.jsx)("div", {
                    className: V().container,
                    children: (0, t.jsxs)("div", {
                        className: V().messageContainer,
                        children: [(0, t.jsx)("div", {
                            className: V().description,
                            children: (0, t.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                children: d.Z.Messages.MOBILE_REPORTS_DELETE_MESSAGE_ELEMENT_DESCRIPTION
                            })
                        }), (0, t.jsx)(a.Button, {
                            onClick: function() {
                                return u()
                            },
                            disabled: c,
                            size: a.Button.Sizes.SMALL,
                            color: a.Button.Colors.RED,
                            children: c ? d.Z.Messages.DELETED : d.Z.Messages.DELETE
                        })]
                    })
                }) : null
            };
            var W = r(818417),
                Y = r(281094),
                K = r.n(Y);
            const $ = function(e) {
                var n = e.hasError,
                    r = e.onClose;
                if (!n) return null;
                return (0, t.jsxs)("div", {
                    className: K().errorContainer,
                    children: [(0, t.jsx)(W.Z, {
                        width: 20,
                        height: 20,
                        className: K().errorIcon
                    }), (0, t.jsx)(a.Text, {
                        className: K().errorText,
                        variant: "text-sm/normal",
                        children: d.Z.Messages.MOBILE_REPORTS_SUBMIT_FAILED
                    }), (0, t.jsx)(a.Clickable, {
                        onClick: function() {
                            r()
                        },
                        "aria-label": d.Z.Messages.DISMISS,
                        className: K().closeIcon
                    })]
                })
            };
            var X = r(320142),
                q = r(956054),
                J = r(374003),
                Q = r.n(J),
                ee = function(e) {
                    var n = e.data,
                        r = n.url,
                        i = n.link_text,
                        o = n.link_description;
                    if (!n.is_localized) return null;
                    return (0, t.jsxs)(a.Clickable, {
                        role: "link",
                        className: Q().linkButton,
                        onClick: function() {
                            (0, X.Z)(r)
                        },
                        children: [(0, t.jsxs)("div", {
                            className: Q().linkTextContainer,
                            children: [(0, t.jsx)(a.Text, {
                                className: Q().linkText,
                                variant: "text-md/semibold",
                                children: i
                            }), null != o && "" !== o && (0, t.jsx)(a.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: o
                            })]
                        }), (0, t.jsx)(q.Z, {
                            className: Q().linkIcon
                        })]
                    })
                };

            function ne(e) {
                var n = e.elements;
                if (null == n || 0 === n.length || null == n.find((function(e) {
                        return e.data.is_localized
                    }))) return null;
                var r = n.map((function(e, n) {
                        var r = e.data;
                        return (0, t.jsx)(ee, {
                            data: r
                        }, "external-link+".concat(n))
                    })),
                    i = n.some((function(e) {
                        return e.data.is_header_hidden
                    }));
                return (0, t.jsxs)("div", {
                    className: Q().linksContainer,
                    children: [!i && (0, t.jsx)(a.Heading, {
                        variant: "heading-sm/semibold",
                        color: "header-secondary",
                        className: Q().header,
                        children: d.Z.Messages.LEARN_MORE
                    }), r]
                })
            }

            function re(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function te(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return re(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return re(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const ie = function(e) {
                var n = e.element,
                    r = e.onChange,
                    o = te(i.useState(""), 2),
                    l = o[0],
                    c = o[1],
                    s = i.useCallback((function(e) {
                        c(e);
                        null != n && r(e)
                    }), [r, n]);
                return "free_text" !== (null == n ? void 0 : n.type) ? null : (0, t.jsx)("div", {
                    children: (0, t.jsx)(a.TextArea, {
                        maxLength: g.GNZ,
                        onChange: s,
                        value: l,
                        rows: 5,
                        placeholder: d.Z.Messages.REPORTS_FREE_TEXT_PLACEHOLDER,
                        autoFocus: !0
                    })
                })
            };
            var ae = r(567403),
                oe = r(124251),
                le = r(633782),
                ce = r.n(le);
            const se = function(e) {
                var n = e.entry,
                    r = B.Z.getChannel(n.channelId);
                if (null == r) return null;
                var i = ae.Z.getGuild(r.guild_id);
                return null == i ? null : (0, t.jsxs)("div", {
                    className: ce().container,
                    children: [(0, t.jsx)(a.Heading, {
                        className: ce().header,
                        variant: "heading-sm/semibold",
                        children: d.Z.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER
                    }), (0, t.jsxs)("div", {
                        className: ce().guildContainer,
                        children: [(0, t.jsxs)("div", {
                            className: ce().hubInfo,
                            children: [(0, t.jsx)(oe.Z, {
                                guild: i,
                                size: oe.Z.Sizes.MINI,
                                className: ce().hubIcon
                            }), (0, t.jsx)(a.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: i.name
                            })]
                        }), (0, t.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: n.name
                        })]
                    })]
                })
            };
            var ue = r(211482),
                de = r(775173),
                fe = r(477024),
                me = r.n(fe);
            const ve = function(e) {
                var n, r = e.entry,
                    i = r.id,
                    o = r.icon,
                    l = r.name,
                    c = null !== (n = de.ZP.getGuildIconURL({
                        id: i,
                        icon: o,
                        size: 32
                    })) && void 0 !== n ? n : void 0;
                return (0, t.jsxs)("div", {
                    className: me().container,
                    children: [(0, t.jsx)(a.Heading, {
                        className: me().header,
                        variant: "heading-sm/semibold",
                        children: d.Z.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER
                    }), (0, t.jsx)("div", {
                        className: me().guildContainer,
                        children: (0, t.jsxs)("div", {
                            className: me().guildInfo,
                            children: [(0, t.jsx)(ue.ZP, {
                                mask: ue.ZP.Masks.SQUIRCLE,
                                width: 32,
                                height: 32,
                                className: me().guildIconMask,
                                children: (0, t.jsx)("img", {
                                    src: c,
                                    alt: "",
                                    className: me().guildIcon
                                })
                            }), (0, t.jsx)(a.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: l
                            })]
                        })
                    })]
                })
            };
            var be = r(194619),
                he = r.n(be);
            const ye = function(e) {
                var n = e.event,
                    r = (0, b.e7)([ae.Z], (function() {
                        return ae.Z.getGuild(n.guild_id)
                    }));
                return null == r ? null : (0, t.jsxs)("div", {
                    className: he().container,
                    children: [(0, t.jsx)(a.Heading, {
                        className: he().header,
                        variant: "heading-sm/semibold",
                        children: d.Z.Messages.MOBILE_REPORTS_EVENT_PREVIEW_TITLE
                    }), (0, t.jsxs)("div", {
                        className: he().guildContainer,
                        children: [(0, t.jsxs)("div", {
                            className: he().guildInfo,
                            children: [(0, t.jsx)(oe.Z, {
                                guild: r,
                                size: oe.Z.Sizes.MINI,
                                className: he().guildIcon
                            }), (0, t.jsx)(a.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: r.name
                            })]
                        }), (0, t.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: n.name
                        })]
                    })]
                })
            };
            var pe = r(883064),
                ge = r(120053);

            function _e(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }
            var Ee = function(e, n) {
                    n = null != n ? n : {};
                    Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var t = Object.getOwnPropertySymbols(e);
                            n && (t = t.filter((function(n) {
                                return Object.getOwnPropertyDescriptor(e, n).enumerable
                            })));
                            r.push.apply(r, t)
                        }
                        return r
                    }(Object(n)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                    }));
                    return e
                }(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {},
                            t = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        t.forEach((function(n) {
                            _e(e, n, r[n])
                        }))
                    }
                    return e
                }({}, r.n(ge)().defaultRules.link), {
                    react: function(e, n, r) {
                        return (0, t.jsx)(a.Anchor, {
                            href: e.target,
                            target: "_blank",
                            children: n(e.content, r)
                        })
                    }
                }),
                xe = r(938340),
                je = r.n(xe);

            function Oe(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function Se(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        r.push.apply(r, t)
                    }
                    return r
                }(Object(n)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }));
                return e
            }
            const Ie = function(e) {
                var n = e.node,
                    r = n.header,
                    o = n.subheader,
                    l = n.button,
                    c = "submit" === (null == l ? void 0 : l.type),
                    s = i.useRef(pe.Z.reactParserFor(Se(function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var r = null != arguments[n] ? arguments[n] : {},
                                t = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))));
                            t.forEach((function(n) {
                                Oe(e, n, r[n])
                            }))
                        }
                        return e
                    }({}, pe.Z.defaultRules), {
                        link: Ee
                    })));
                return (0, t.jsxs)("div", {
                    className: je().headerContainer,
                    children: [null != r && "" !== r ? (0, t.jsx)(a.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        children: r
                    }) : null, null != o && "" !== r ? (0, t.jsx)(a.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: s.current(o)
                    }) : null, c && (0, t.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        children: d.Z.Messages.MOBILE_REPORTS_SUBMIT_INFO_TEXT.format()
                    })]
                })
            };
            var Ne = r(613677),
                Te = r(528004),
                Re = r.n(Te);

            function we(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function Pe(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        r.push.apply(r, t)
                    }
                    return r
                }(Object(n)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }));
                return e
            }
            const Ae = function(e) {
                var n = e.node.info,
                    r = i.useRef(pe.Z.reactParserFor(Pe(function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var r = null != arguments[n] ? arguments[n] : {},
                                t = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))));
                            t.forEach((function(n) {
                                we(e, n, r[n])
                            }))
                        }
                        return e
                    }({}, pe.Z.defaultRules), {
                        link: Ee
                    })));
                return null == n ? null : (0, t.jsx)(Ne.Z, {
                    className: Re().infoBox,
                    messageType: Ne.Q.INFO,
                    children: r.current(n)
                })
            };
            var Ce = r(703790),
                Me = r(908890),
                De = r.n(Me);

            function ke(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function Ze(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function Le(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        r.push.apply(r, t)
                    }
                    return r
                }(Object(n)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }));
                return e
            }

            function Be(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return ke(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ke(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const Ue = function(e) {
                var n = e.guildId,
                    r = e.reportId,
                    o = Be(i.useState(!1), 2),
                    c = o[0],
                    s = o[1],
                    u = ae.Z.getGuild(n),
                    f = null != u;
                i.useEffect((function() {
                    s(!f)
                }), [f]);
                var m = i.useCallback((function() {
                    s(!0);
                    l.ZP.trackWithMetadata(g.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                        guild_id: n,
                        report_id: r
                    });
                    Ce.Z.leaveGuild(n)
                }), [n, r]);
                if (null == u) return null;
                var v = function() {
                    (0, a.openModal)((function(e) {
                        return (0, t.jsx)(a.ConfirmModal, Le(function(e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var r = null != arguments[n] ? arguments[n] : {},
                                    t = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                t.forEach((function(n) {
                                    Ze(e, n, r[n])
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
                            children: (0, t.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: d.Z.Messages.LEAVE_SERVER_BODY.format({
                                    name: u.name
                                })
                            })
                        }))
                    }))
                };
                return (0, t.jsxs)("div", {
                    className: De().container,
                    children: [(0, t.jsx)(a.Text, {
                        className: De().description,
                        variant: "text-sm/normal",
                        children: d.Z.Messages.MOBILE_REPORTS_LEAVE_ELEMENT_DESCRIPTION
                    }), (0, t.jsxs)("div", {
                        className: De().guildContainer,
                        children: [(0, t.jsxs)("div", {
                            className: De().guildInfo,
                            children: [(0, t.jsx)(oe.Z, {
                                guild: u,
                                showBadge: !1,
                                animate: !1,
                                size: oe.Z.Sizes.SMALL,
                                "aria-label": u.name,
                                className: De().icon,
                                active: !0
                            }), (0, t.jsx)(a.Text, {
                                className: De().guildName,
                                variant: "text-sm/semibold",
                                children: u.name
                            })]
                        }), (0, t.jsx)(a.Button, {
                            onClick: function() {
                                return v()
                            },
                            disabled: c,
                            size: a.Button.Sizes.SMALL,
                            color: a.Button.Colors.RED,
                            children: c ? d.Z.Messages.MOBILE_REPORTS_LEFT_SERVER : d.Z.Messages.LEAVE_SERVER
                        })]
                    })]
                })
            };
            var Ge = r(550131),
                Ve = r(283285),
                He = r(508754),
                ze = r(723876),
                Fe = r(728118),
                We = r(763536),
                Ye = r(939198),
                Ke = r(139452),
                $e = r.n(Ke);
            const Xe = function(e) {
                var n = e.message,
                    r = (0, Ge.ZP)(n),
                    i = (0, b.e7)([B.Z], (function() {
                        return B.Z.getChannel(n.channel_id)
                    })),
                    o = (0, Ve.Z)(n, {
                        hideSimpleEmbedContent: !1
                    }).content;
                if (null == i) return null;
                return (0, t.jsxs)("div", {
                    className: $e().container,
                    children: [(0, t.jsx)(a.Heading, {
                        className: $e().header,
                        variant: "heading-sm/semibold",
                        children: d.Z.Messages.MOBILE_REPORTS_MESSAGE_PREVIEW_TITLE
                    }), (0, t.jsx)(a.Scroller, {
                        className: $e().messagePreviewContainer,
                        children: (0, t.jsx)(He.Z, {
                            childrenMessageContent: function() {
                                if (null == o || "" === o || Array.isArray(o) && 0 === o.length) {
                                    return (0, We.f)(n, o, !1, "", {
                                        iconClass: $e().attachmentIcon,
                                        iconSize: Ye.WW
                                    }).icon
                                }
                                return (0, t.jsx)(ze.ZP, {
                                    message: n,
                                    content: o
                                })
                            }(),
                            childrenHeader: (0, t.jsx)(Fe.ZP, {
                                message: n,
                                channel: i,
                                author: r,
                                guildId: i.guild_id
                            }),
                            disableInteraction: !0
                        })
                    })]
                })
            };
            var qe = r(287163),
                Je = r.n(qe);

            function Qe(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function en(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Qe(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qe(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var nn = function(e) {
                var n = e.onChange,
                    r = e.label,
                    i = e.subtitle,
                    o = e.selected;
                return (0, t.jsx)("div", {
                    className: Je().checkboxRow,
                    children: (0, t.jsxs)(a.Checkbox, {
                        type: a.Checkbox.Types.INVERTED,
                        onChange: function() {
                            return n()
                        },
                        value: o,
                        children: [(0, t.jsx)(a.Text, {
                            color: "interactive-active",
                            variant: "text-md/semibold",
                            children: r
                        }), (0, t.jsx)(a.Text, {
                            color: "interactive-active",
                            variant: "text-sm/normal",
                            children: i
                        })]
                    })
                })
            };
            const rn = function(e) {
                var n = e.element,
                    r = e.state,
                    i = e.onChange;
                if ("checkbox" !== (null == n ? void 0 : n.type)) return null;
                var a = n.data;
                return (0, t.jsx)("div", {
                    children: a.map((function(e, n) {
                        var a = en(e, 3),
                            o = a[0],
                            l = a[1],
                            c = a[2];
                        return (0, t.jsx)(nn, {
                            onChange: function() {
                                return i(o, l)
                            },
                            selected: o in r,
                            label: l,
                            subtitle: c
                        }, "".concat(n, "+button"))
                    }))
                })
            };
            var tn = r(490405),
                an = r.n(tn);
            const on = function(e) {
                var n = e.stageInstance,
                    r = ae.Z.getGuild(n.guild_id);
                return null == r ? null : (0, t.jsxs)("div", {
                    className: an().container,
                    children: [(0, t.jsx)(a.Heading, {
                        className: an().header,
                        variant: "heading-sm/semibold",
                        children: d.Z.Messages.MOBILE_REPORTS_STAGE_CHANNEL_PREVIEW_TITLE
                    }), (0, t.jsxs)("div", {
                        className: an().guildContainer,
                        children: [(0, t.jsxs)("div", {
                            className: an().guildInfo,
                            children: [(0, t.jsx)(oe.Z, {
                                guild: r,
                                size: oe.Z.Sizes.MINI,
                                className: an().guildIcon
                            }), (0, t.jsx)(a.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: r.name
                            })]
                        }), (0, t.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: n.topic
                        })]
                    })]
                })
            };
            var ln = r(802435),
                cn = r.n(ln),
                sn = r(513157);
            const un = function(e) {
                var n = e.element;
                return "success" !== (null == n ? void 0 : n.type) ? null : (0, t.jsx)("img", {
                    alt: "",
                    src: sn,
                    className: cn().successImg
                })
            };
            var dn = r(294184),
                fn = r.n(dn),
                mn = r(691797),
                vn = r(371568),
                bn = r.n(vn);

            function hn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function yn(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function pn(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return hn(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hn(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function gn(e) {
                var n = e.element.data,
                    r = n.title,
                    o = n.body,
                    l = n.sms,
                    c = n.is_localized,
                    s = pn(i.useState(!1), 2),
                    u = s[0],
                    f = s[1],
                    m = i.useRef(pe.Z.reactParserFor(pe.Z.defaultRules));
                if (!c) return null;
                return (0, t.jsxs)("div", {
                    className: bn().container,
                    children: [(0, t.jsx)(a.Heading, {
                        variant: "heading-sm/semibold",
                        color: "header-secondary",
                        className: bn().header,
                        children: r
                    }), (0, t.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        className: bn().bodyText,
                        children: m.current(o)
                    }), (0, t.jsx)("div", {
                        className: bn().smsInfoContainer,
                        children: (0, t.jsxs)("div", {
                            className: fn()(bn().smsNumberContainer, yn({}, bn().copied, u)),
                            children: [(0, t.jsx)(a.Text, {
                                variant: "text-md/normal",
                                selectable: !0,
                                className: bn().smsNumberText,
                                children: l
                            }), (0, t.jsx)(a.Button, {
                                size: a.Button.Sizes.SMALL,
                                className: bn().trailingButton,
                                onClick: function() {
                                    (0, mn.JG)(l) && f(!0)
                                },
                                color: a.Button.Colors.PRIMARY,
                                children: u ? d.Z.Messages.COPIED : d.Z.Messages.COPY
                            })]
                        })
                    })]
                })
            }
            var _n = r(385028),
                En = r(281321),
                xn = r.n(En);
            const jn = function(e) {
                var n = e.user;
                return (0, t.jsxs)("div", {
                    className: xn().container,
                    children: [(0, t.jsx)(a.Heading, {
                        className: xn().header,
                        variant: "heading-sm/semibold",
                        children: d.Z.Messages.REPORTS_USER_PREVIEW_TITLE
                    }), (0, t.jsx)("div", {
                        className: xn().userContainer,
                        children: (0, t.jsxs)("div", {
                            className: xn().userInfo,
                            children: [(0, t.jsx)(_n.Z, {
                                className: xn().userIcon,
                                user: n,
                                size: a.AvatarSizes.SIZE_40
                            }), (0, t.jsxs)("div", {
                                children: [null != n.globalName && (0, t.jsx)(a.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: n.globalName
                                }), (0, t.jsx)(a.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: n.username
                                })]
                            })]
                        })
                    })]
                })
            };
            var On = ["block_users", "leave_guild", "delete_message"],
                Sn = r(635971),
                In = r.n(Sn);

            function Nn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function Tn(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function Rn(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Nn(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Nn(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function wn(e, n) {
                return e.elements.find((function(e) {
                    return e.type === n
                }))
            }

            function Pn(e) {
                return e.elements.some((function(e) {
                    var n = e.type;
                    return On.includes(n)
                }))
            }
            const An = function(e) {
                var n, r = e.node,
                    o = e.reportType,
                    l = e.history,
                    c = e.onSelectChild,
                    s = e.onModalClose,
                    f = e.multiSelect,
                    m = e.reportId,
                    b = e.freeText,
                    h = Rn(i.useState(!1), 2),
                    y = h[0],
                    p = h[1],
                    g = Rn(i.useState(!1), 2),
                    _ = g[0],
                    E = g[1],
                    x = Rn(i.useState((function() {
                        return {}
                    })), 2),
                    j = x[0],
                    S = x[1],
                    I = Rn(i.useState((function() {
                        return ""
                    })), 2),
                    N = I[0],
                    T = I[1],
                    R = wn(r, "checkbox"),
                    P = wn(r, "text_line_resource"),
                    A = (n = "external_link", r.elements.filter((function(e) {
                        return e.type === n
                    }))),
                    C = wn(r, "free_text"),
                    M = i.useMemo((function() {
                        return function(e) {
                            c({
                                nodeRef: r.id,
                                destination: e,
                                freeText: N,
                                multiSelect: null != R ? {
                                    name: R.name,
                                    state: j
                                } : void 0
                            })
                        }
                    }), [r, c, R, j, N]);
                i.useEffect((function() {
                    null != f && S(f);
                    null != b && T(b)
                }), [f, b]);
                return (0, t.jsxs)("div", {
                    className: In().container,
                    children: [(0, t.jsxs)(a.ModalHeader, {
                        separator: !1,
                        direction: u.Z.Direction.VERTICAL,
                        className: In().header,
                        children: [(0, t.jsx)(un, {
                            element: wn(r, "success")
                        }), (0, t.jsx)(Ie, {
                            node: r
                        }), (0, t.jsx)(Ae, {
                            node: r
                        })]
                    }), (0, t.jsxs)(a.ModalContent, {
                        className: In().body,
                        children: [null != P ? (0, t.jsx)(gn, {
                            element: P
                        }) : null, null != wn(r, "breadcrumbs") && (0, t.jsx)(w, {
                            history: l
                        }), null != wn(r, "message_preview") && ("message" === o.name || "first_dm" === o.name) && (0, t.jsx)(Xe, {
                            message: o.record
                        }), null != wn(r, "user_preview") && "user" === o.name ? (0, t.jsx)(jn, {
                            user: o.record
                        }) : null, Pn(r) && (0, t.jsx)(a.Heading, {
                            className: In().remediationElementsHeader,
                            variant: "heading-sm/semibold",
                            children: d.Z.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_HEADER
                        }), null != wn(r, "block_users") && ("message" === o.name || "first_dm" === o.name || "user" === o.name) && (0, t.jsx)(O, {
                            userId: "user" === o.name ? o.record.id : o.record.author.id,
                            reportId: m,
                            reportName: o.name
                        }), null != wn(r, "delete_message") && "message" === o.name && (0, t.jsx)(F, {
                            message: o.record,
                            reportId: m
                        }), null != wn(r, "leave_guild") && "guild" === o.name && (0, t.jsx)(Ue, {
                            guildId: o.record.id,
                            reportId: m
                        }), null != wn(r, "channel_preview") && "stage_channel" === o.name && (0, t.jsx)(on, {
                            stageInstance: o.record
                        }), null != wn(r, "guild_scheduled_event_preview") && "guild_scheduled_event" === o.name && (0, t.jsx)(ye, {
                            event: o.record
                        }), null != wn(r, "guild_directory_entry_preview") && "guild_directory_entry" === o.name && (0, t.jsx)(se, {
                            entry: o.record
                        }), null != wn(r, "guild_discovery_preview") && "guild_discovery" === o.name && (0, t.jsx)(ve, {
                            entry: o.record
                        }), null != R && (0, t.jsx)(rn, {
                            element: R,
                            onChange: function(e, n) {
                                var r = function(e) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var r = null != arguments[n] ? arguments[n] : {},
                                            t = Object.keys(r);
                                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                                        }))));
                                        t.forEach((function(n) {
                                            Tn(e, n, r[n])
                                        }))
                                    }
                                    return e
                                }({}, j);
                                e in j ? delete r[e] : r[e] = n;
                                S(r)
                            },
                            state: j
                        }), null != wn(r, "free_text") && "user" === o.name && (0, t.jsx)(ie, {
                            element: C,
                            onChange: T
                        }), (0, t.jsx)(Z, {
                            node: r,
                            onSelectChild: M
                        }), null != A && A.length > 0 ? (0, t.jsx)(ne, {
                            elements: A
                        }) : null, (0, t.jsx)($, {
                            hasError: _,
                            onClose: function() {
                                E(!1)
                            }
                        })]
                    }), (0, t.jsx)(v, {
                        button: r.button,
                        submitting: y,
                        disableNext: !0 === r.is_multi_select_required && 0 === Object.keys(j).length,
                        onClick: function(n) {
                            switch (n.type) {
                                case "done":
                                case "cancel":
                                    s();
                                    break;
                                case "next":
                                    M(["", n.target]);
                                    break;
                                case "submit":
                                    p(!0);
                                    e.onSubmit({
                                        nodeRef: r.id,
                                        destination: ["", e.successNodeId]
                                    }).then((function() {
                                        E(!1);
                                        M(["", e.successNodeId])
                                    })).catch((function() {
                                        E(!0)
                                    })).finally((function() {
                                        p(!1)
                                    }))
                            }
                        },
                        onBackClicked: e.onNavigateBack,
                        canNavigateBack: l.length > 0
                    }), (0, t.jsx)(a.ModalCloseButton, {
                        className: In().closeButton,
                        onClick: s
                    })]
                })
            };
            var Cn = r(413671),
                Mn = r.n(Cn);

            function Dn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function kn(e, n, r, t, i, a, o) {
                try {
                    var l = e[a](o),
                        c = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? n(c) : Promise.resolve(c).then(t, i)
            }

            function Zn(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function Ln(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        r.push.apply(r, t)
                    }
                    return r
                }(Object(n)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }));
                return e
            }

            function Bn(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || Gn(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Un(e) {
                return function(e) {
                    if (Array.isArray(e)) return Dn(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Gn(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Gn(e, n) {
                if (e) {
                    if ("string" == typeof e) return Dn(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    return "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Dn(e, n) : void 0
                }
            }
            var Vn = function(e, n) {
                var r, t, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, t && (i = 2 & a[0] ? t.return : a[0] ? t.throw || ((i = t.return) && i.call(t),
                                        0) : t.next) && !(i = i.call(t, a[1])).done) return i;
                                (t = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        t = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                t = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };
            const Hn = function(e) {
                var n, r, u = e.reportType,
                    d = e.menu,
                    f = e.modalProps,
                    m = e.onSubmit,
                    v = e.onNavigate,
                    b = e.isAuthenticated,
                    h = void 0 === b || b,
                    y = (0,
                        c.Dt)(),
                    p = d.nodes,
                    _ = d.root_node_id,
                    E = d.success_node_id,
                    x = d.fail_node_id,
                    j = Bn(i.useState(_), 2),
                    O = j[0],
                    S = j[1],
                    I = Bn(i.useState(void 0), 2),
                    N = I[0],
                    T = I[1],
                    R = Bn(i.useState(void 0), 2),
                    w = R[0],
                    P = R[1],
                    A = Bn(i.useState([]), 2),
                    C = A[0],
                    M = A[1],
                    D = Bn(i.useState(void 0), 2),
                    k = D[0],
                    Z = D[1],
                    L = function(e) {
                        var n, r = Bn(e.destination, 2)[1],
                            t = p[r];
                        if (t.elements.some((function(e) {
                                return "skip" === e.type
                            })) && "next" === (null === (n = t.button) || void 0 === n ? void 0 : n.type)) return L(Ln(function(e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var r = null != arguments[n] ? arguments[n] : {},
                                    t = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                t.forEach((function(n) {
                                    Zn(e, n, r[n])
                                }))
                            }
                            return e
                        }({}, e), {
                            destination: ["", t.button.target]
                        }));
                        M(Un(C).concat([e]));
                        null != t.key && (null == v || v(t.key));
                        T(void 0);
                        P(void 0);
                        if (u.name === s.b.MESSAGE || u.name === s.b.FIRST_DM) {
                            var i = u.record.id;
                            l.ZP.trackWithMetadata(g.rMx.IAR_NAVIGATE, {
                                message_id: i,
                                content_type: u.name,
                                report_sub_type: t.report_type,
                                current_node: p[O].id,
                                next_node: t.id
                            })
                        }
                        S(r)
                    },
                    B = (r = (n = function(e) {
                        var n, r, t, i;
                        return Vn(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return h ? [4, (0, o.ZD)(d, u, Un(C).concat([e]))] : [3, 2];
                                case 1:
                                    t = a.sent();
                                    return [3, 4];
                                case 2:
                                    return [4, (0, o.fw)(d, u, Un(C).concat([e]))];
                                case 3:
                                    t = a.sent();
                                    a.label = 4;
                                case 4:
                                    null != (i = null == (r = t) || null === (n = r.body) || void 0 === n ? void 0 : n.report_id) && Z(i);
                                    null == m || m(i);
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            r = arguments;
                        return new Promise((function(t, i) {
                            var a = n.apply(e, r);

                            function o(e) {
                                kn(a, t, i, o, l, "next", e)
                            }

                            function l(e) {
                                kn(a, t, i, o, l, "throw", e)
                            }
                            o(void 0)
                        }))
                    }), function(e) {
                        return r.apply(this, arguments)
                    }),
                    U = function() {
                        var e;
                        if (!(C.length < 1)) {
                            var n, r = Un(C),
                                t = r.pop(),
                                i = null !== (n = null == t ? void 0 : t.nodeRef) && void 0 !== n ? n : _;
                            if (u.name === s.b.MESSAGE || u.name === s.b.FIRST_DM) {
                                var a = u.record.id;
                                l.ZP.trackWithMetadata(g.rMx.IAR_NAVIGATE, {
                                    message_id: a,
                                    content_type: u.name,
                                    report_sub_type: p[i].report_type,
                                    current_node: p[O].id,
                                    next_node: p[i].id
                                })
                            }
                            T(null == t || null === (e = t.multiSelect) || void 0 === e ? void 0 : e.state);
                            P(null == t ? void 0 : t.freeText);
                            S(i);
                            M(r);
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
                var K = [p[_]].concat(Un(G), [p[E], p[x]]);
                return (0, t.jsx)(a.ModalRoot, {
                    transitionState: f.transitionState,
                    "aria-labelledby": y,
                    children: (0, t.jsx)(a.Slides, {
                        width: 440,
                        activeSlide: O,
                        centered: !1,
                        children: K.map((function(e) {
                            return (0, t.jsx)(a.Slide, {
                                id: e.id,
                                children: (0, t.jsx)("div", {
                                    className: Mn().slideContainer,
                                    children: (0, t.jsx)(An, {
                                        node: e,
                                        reportType: u,
                                        history: C,
                                        onModalClose: f.onClose,
                                        onSelectChild: L,
                                        onNavigateBack: U,
                                        multiSelect: N,
                                        freeText: w,
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

            function zn(e, n, r, t, i, a, o) {
                try {
                    var l = e[a](o),
                        c = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? n(c) : Promise.resolve(c).then(t, i)
            }

            function Fn(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, i) {
                        var a = e.apply(n, r);

                        function o(e) {
                            zn(a, t, i, o, l, "next", e)
                        }

                        function l(e) {
                            zn(a, t, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            var Wn = function(e, n) {
                var r, t, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, t && (i = 2 & a[0] ? t.return : a[0] ? t.throw || ((i = t.return) && i.call(t), 0) : t.next) && !(i = i.call(t, a[1])).done) return i;
                                (t = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        t = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                t = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };

            function Yn(e, n, r, t) {
                return Kn.apply(this, arguments)
            }

            function Kn() {
                Kn = Fn((function(e, n, r, i) {
                    var l, c, s, u, d, f, m, v, b, h = arguments;
                    return Wn(this, (function(y) {
                        switch (y.label) {
                            case 0:
                                l = !(h.length > 4 && void 0 !== h[4]) || h[4], c = !(h.length > 5 && void 0 !== h[5]) || h[5];
                                s = (0, a.getInteractingModalContext)();
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
                                b = function(e) {
                                    m = e;
                                    null == r || r()
                                };
                                (0, a.openModal)((function(n) {
                                    return (0, t.jsx)(Hn, {
                                        menu: u,
                                        reportType: e,
                                        modalProps: n,
                                        onNavigate: v,
                                        onSubmit: b,
                                        isAuthenticated: c
                                    })
                                }), {
                                    onCloseCallback: function() {
                                        (0, o.k8)(e, f, m);
                                        null == i || i();
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
                return Kn.apply(this, arguments)
            }
        },
        613677: (e, n, r) => {
            "use strict";
            r.d(n, {
                Q: () => t,
                Z: () => v
            });
            var t, i = r(785893),
                a = (r(667294), r(294184)),
                o = r.n(a),
                l = r(304548),
                c = r(621329),
                s = r(559968),
                u = r(386991),
                d = r(818417),
                f = r(153954),
                m = r.n(f);
            ! function(e) {
                e[e.WARNING = 0] = "WARNING";
                e[e.INFO = 1] = "INFO";
                e[e.ERROR = 2] = "ERROR";
                e[e.POSITIVE = 3] = "POSITIVE"
            }(t || (t = {}));
            const v = function(e) {
                var n = e.children,
                    r = e.messageType,
                    a = e.className,
                    f = e.textColor,
                    v = void 0 === f ? "text-normal" : f,
                    b = e.textVariant,
                    h = void 0 === b ? "text-sm/medium" : b,
                    y = function(e) {
                        switch (e) {
                            case t.WARNING:
                                return d.Z;
                            case t.INFO:
                                return u.Z;
                            case t.ERROR:
                                return s.Z;
                            case t.POSITIVE:
                                return c.Z
                        }
                    }(r),
                    p = function(e) {
                        switch (e) {
                            case t.WARNING:
                                return m().warning;
                            case t.INFO:
                                return m().info;
                            case t.ERROR:
                                return m().error;
                            case t.POSITIVE:
                                return m().positive
                        }
                    }(r);
                return (0, i.jsxs)("div", {
                    className: o()(m().container, p, a),
                    children: [(0, i.jsx)("div", {
                        className: m().iconDiv,
                        children: (0, i.jsx)(y, {
                            className: m().icon
                        })
                    }), (0, i.jsx)(l.Text, {
                        className: m().text,
                        color: v,
                        variant: h,
                        children: n
                    })]
                })
            }
        }
    }
]);