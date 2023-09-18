(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [54368], {
        513157: (e, n, r) => {
            e.exports = r.p + "c8d8bfacc6311892e73219a74e9cd164.svg"
        },
        726196: (e, n, r) => {
            "use strict";
            r.d(n, {
                b: () => t
            });
            var t;
            ! function(e) {
                e.GUILD = "guild";
                e.GUILD_DISCOVERY = "guild_discovery";
                e.GUILD_DIRECTORY_ENTRY = "guild_directory_entry";
                e.MESSAGE = "message";
                e.STAGE_CHANNEL = "stage_channel";
                e.GUILD_SCHEDULED_EVENT = "guild_scheduled_event";
                e.FIRST_DM = "first_dm";
                e.USER = "user"
            }(t || (t = {}))
        },
        354368: (e, n, r) => {
            "use strict";
            r.d(n, {
                lt: () => b,
                WL: () => g,
                sq: () => h,
                d$: () => p,
                ak: () => v,
                ic: () => y,
                pX: () => x,
                zd: () => _
            });
            var t = r(396043),
                i = r(766496),
                a = (0, r(260561).B)({
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
            var o = r(726196),
                l = r(753698),
                c = r(2590);

            function s(e, n, r, t, i, a, o) {
                try {
                    var l = e[a](o),
                        c = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? n(c) : Promise.resolve(c).then(t, i)
            }

            function u(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, i) {
                        var a = e.apply(n, r);

                        function o(e) {
                            s(a, t, i, o, l, "next", e)
                        }

                        function l(e) {
                            s(a, t, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function d(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }
            var f, m = function(e, n) {
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
            f = r(461092).Z;

            function b(e, n) {
                j(o.b.GUILD_DISCOVERY, {
                    guild_id: e.id
                });
                f({
                    name: o.b.GUILD_DISCOVERY,
                    record: e
                }, {}, n)
            }

            function h(e, n) {
                j(o.b.GUILD_DIRECTORY_ENTRY, {
                    channel_id: e.channelId,
                    guild_id: e.guildId
                });
                f({
                    name: o.b.GUILD_DIRECTORY_ENTRY,
                    record: e
                }, {}, n)
            }

            function v(e, n) {
                j(o.b.MESSAGE, {
                    message_id: e.id,
                    channel_id: e.channel_id
                });
                var r = a.getCurrentConfig({
                    location: "159afe_2"
                }, {
                    autoTrackExposure: !0
                }).showFraudMenuVariant;
                f({
                    name: o.b.MESSAGE,
                    record: e
                }, {
                    variant: r ? "4" : void 0
                }, n)
            }

            function y(e, n) {
                var r = i.Z.getStageInstanceByChannel(e.id);
                if (null != r) {
                    j(o.b.STAGE_CHANNEL, {
                        stage_instance_id: r.id,
                        channel_id: r.channel_id,
                        guild_id: r.guild_id
                    });
                    f({
                        name: o.b.STAGE_CHANNEL,
                        record: r
                    }, {}, n)
                }
            }

            function p(e, n) {
                var r;
                j(o.b.GUILD_SCHEDULED_EVENT, {
                    guild_scheduled_event_id: e.id,
                    guild_id: e.guild_id,
                    channel_id: null !== (r = e.channel_id) && void 0 !== r ? r : void 0
                });
                f({
                    name: o.b.GUILD_SCHEDULED_EVENT,
                    record: e
                }, {}, n)
            }

            function g(e, n) {
                j(o.b.FIRST_DM, {
                    message_id: e.id,
                    channel_id: e.channel_id
                });
                f({
                    name: o.b.FIRST_DM,
                    record: e
                }, {}, n, void 0, !1)
            }

            function _(e, n) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = u((function(e, n) {
                    return m(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                r.trys.push([0, 2, , 3]);
                                return [4, (0, l.ox)({
                                    name: o.b.FIRST_DM,
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

            function x(e, n) {
                j(o.b.USER, {
                    user_id: e.id
                });
                f({
                    name: o.b.USER,
                    record: e
                }, {}, n, void 0, !1)
            }

            function j(e, n) {
                t.ZP.trackWithMetadata(c.rMx.IAR_MODAL_OPEN, function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {},
                            t = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        t.forEach((function(n) {
                            d(e, n, r[n])
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
                Nt: () => b,
                ox: () => v,
                ZD: () => p,
                k8: () => _,
                X: () => E
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

            function b(e, n) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = s((function(e, n) {
                    var r, i;
                    return m(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, t.ZP.get({
                                    url: l.ANM.GET_REPORT_MENU(e),
                                    query: null != (null == n ? void 0 : n.variant) ? {
                                        variant: n.variant
                                    } : void 0
                                })];
                            case 1:
                                r = a.sent();
                                return [2, null !== (i = r.body) && void 0 !== i ? i : JSON.parse(r.text)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function v(e, n) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = s((function(e, n) {
                    var r;
                    return m(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, b(e.name, n)];
                            case 1:
                                r = i.sent();
                                return [4, t.ZP.post({
                                    url: l.ANM.SUBMIT_REPORT_MENU(e.name),
                                    body: g(r, e, [{
                                        nodeRef: r.root_node_id,
                                        destination: ["", r.success_node_id]
                                    }])
                                })];
                            case 2:
                                i.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(e, n, r) {
                return t.ZP.post({
                    url: l.ANM.SUBMIT_REPORT_MENU(n.name),
                    body: g(e, n, r)
                })
            }
            var g = function(e, n, r) {
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
                    var b = n.record.id;
                    return f(d({}, l), {
                        name: n.name,
                        channel_id: void 0,
                        message_id: void 0,
                        stage_instance_id: void 0,
                        guild_id: b,
                        guild_scheduled_event_id: void 0,
                        user_id: void 0
                    })
                }
                if (n.name === o.b.GUILD_DIRECTORY_ENTRY) {
                    var h = n.record,
                        v = h.guildId,
                        y = h.channelId;
                    return f(d({}, l), {
                        name: n.name,
                        channel_id: y,
                        message_id: void 0,
                        stage_instance_id: void 0,
                        guild_id: v,
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
                return n.name === o.b.USER ? f(d({}, l), {
                    name: n.name,
                    user_id: n.record.id,
                    channel_id: void 0,
                    message_id: void 0,
                    guild_id: void 0,
                    stage_instance_id: void 0,
                    guild_scheduled_event_id: void 0
                }) : null
            };

            function _(e, n, r) {
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

            function E(e, n) {
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
                a = r(882723),
                o = r(753698),
                l = r(396043),
                c = r(443812),
                s = r(726196),
                u = r(107364),
                d = r(473708),
                f = r(242130),
                m = r.n(f);
            const b = function(e) {
                var n = e.button,
                    r = e.submitting,
                    o = e.disableNext,
                    l = e.onClick,
                    c = e.canNavigateBack,
                    s = e.onBackClicked,
                    f = i.useRef(null),
                    b = null != n && "cancel" !== n.type,
                    h = c && "done" !== (null == n ? void 0 : n.type),
                    v = b || h;
                i.useEffect((function() {
                    if ("submit" === (null == n ? void 0 : n.type) || "done" === (null == n ? void 0 : n.type)) {
                        var e;
                        null === (e = f.current) || void 0 === e || e.focus()
                    }
                }), [null == n ? void 0 : n.type]);
                if (!v) return null;
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
                    children: [h && (0, t.jsx)(a.Button, {
                        onClick: s,
                        color: a.Button.Colors.TRANSPARENT,
                        disabled: r,
                        children: d.Z.Messages.BACK
                    }), b && (0, t.jsx)(a.Button, {
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
            var h = r(202351),
                v = r(560923),
                y = r(840922),
                p = r(473903),
                g = r(2590),
                _ = r(918450),
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
                    m = (0, h.e7)([p.default], (function() {
                        return p.default.getUser(n)
                    }), [n]),
                    b = (0, h.e7)([y.Z], (function() {
                        return y.Z.getRelationshipType(n)
                    }), [n]) === g.OGo.BLOCKED;
                i.useEffect((function() {
                    f(b)
                }), [b]);
                var _ = i.useCallback((function() {
                    f(!0);
                    l.ZP.trackWithMetadata(g.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                        other_user_id: n,
                        report_id: r
                    });
                    v.Z.addRelationship({
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
                I = r(116139),
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
                C = r(505774),
                A = r.n(C);

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
                    className: A().childButton,
                    onClick: function() {
                        return r(n)
                    },
                    children: [(0, t.jsx)(a.Text, {
                        className: A().childText,
                        variant: "text-md/semibold",
                        children: i
                    }), (0, t.jsx)(P.Z, {
                        className: A().childIcon,
                        direction: P.Z.Directions.RIGHT
                    })]
                })
            };
            const L = function(e) {
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
                    className: A().childrenContainer,
                    children: i
                })
            };
            var Z = r(716239),
                B = r(61209),
                U = r(682776),
                G = r(83388),
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
                        Z.Z.deleteMessage(n.getChannelId(), n.id)
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
            var W = r(265367),
                Y = r(89602),
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
                q = r(824456),
                Q = r(73995),
                J = r.n(Q),
                ee = function(e) {
                    var n = e.data,
                        r = n.url,
                        i = n.link_text,
                        o = n.link_description;
                    if (!n.is_localized) return null;
                    return (0, t.jsxs)(a.Clickable, {
                        role: "link",
                        className: J().linkButton,
                        onClick: function() {
                            (0, X.Z)(r)
                        },
                        children: [(0, t.jsxs)("div", {
                            className: J().linkTextContainer,
                            children: [(0, t.jsx)(a.Text, {
                                className: J().linkText,
                                variant: "text-md/semibold",
                                children: i
                            }), null != o && "" !== o && (0, t.jsx)(a.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: o
                            })]
                        }), (0, t.jsx)(q.Z, {
                            className: J().linkIcon
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
                    i = null != n.find((function(e) {
                        return e.data.is_header_hidden
                    }));
                return (0, t.jsxs)("div", {
                    className: J().linksContainer,
                    children: [!i && (0, t.jsx)(a.Heading, {
                        variant: "heading-sm/semibold",
                        color: "header-secondary",
                        className: J().header,
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
                le = r(776903),
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
                fe = r(384865),
                me = r.n(fe);
            const be = function(e) {
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
            var he = r(356559),
                ve = r.n(he);
            const ye = function(e) {
                var n = e.event,
                    r = (0, h.e7)([ae.Z], (function() {
                        return ae.Z.getGuild(n.guild_id)
                    }));
                return null == r ? null : (0, t.jsxs)("div", {
                    className: ve().container,
                    children: [(0, t.jsx)(a.Heading, {
                        className: ve().header,
                        variant: "heading-sm/semibold",
                        children: d.Z.Messages.MOBILE_REPORTS_EVENT_PREVIEW_TITLE
                    }), (0, t.jsxs)("div", {
                        className: ve().guildContainer,
                        children: [(0, t.jsxs)("div", {
                            className: ve().guildInfo,
                            children: [(0, t.jsx)(oe.Z, {
                                guild: r,
                                size: oe.Z.Sizes.MINI,
                                className: ve().guildIcon
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
                xe = r(815606),
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
                Te = r(214052),
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
            const Ce = function(e) {
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
            var Ae = r(703790),
                Me = r(216682),
                De = r.n(Me);

            function ke(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function Le(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function Ze(e, n) {
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
                    Ae.Z.leaveGuild(n)
                }), [n, r]);
                if (null == u) return null;
                var b = function() {
                    (0, a.openModal)((function(e) {
                        return (0, t.jsx)(a.ConfirmModal, Ze(function(e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var r = null != arguments[n] ? arguments[n] : {},
                                    t = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                t.forEach((function(n) {
                                    Le(e, n, r[n])
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
                                return b()
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
                Fe = r(423337),
                We = r(763536),
                Ye = r(939198),
                Ke = r(659802),
                $e = r.n(Ke);
            const Xe = function(e) {
                var n = e.message,
                    r = (0, Ge.ZP)(n),
                    i = (0, h.e7)([B.Z], (function() {
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
            var qe = r(236076),
                Qe = r.n(qe);

            function Je(e, n) {
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
                    if ("string" == typeof e) return Je(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Je(e, n)
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
                    className: Qe().checkboxRow,
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
            var tn = r(142972),
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
            var ln = r(591044),
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
                bn = r(327899),
                hn = r.n(bn);

            function vn(e, n) {
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
                    if ("string" == typeof e) return vn(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vn(e, n)
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
                    className: hn().container,
                    children: [(0, t.jsx)(a.Heading, {
                        variant: "heading-sm/semibold",
                        color: "header-secondary",
                        className: hn().header,
                        children: r
                    }), (0, t.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        className: hn().bodyText,
                        children: m.current(o)
                    }), (0, t.jsx)("div", {
                        className: hn().smsInfoContainer,
                        children: (0, t.jsxs)("div", {
                            className: fn()(hn().smsNumberContainer, yn({}, hn().copied, u)),
                            children: [(0, t.jsx)(a.Text, {
                                variant: "text-md/normal",
                                selectable: !0,
                                className: hn().smsNumberText,
                                children: l
                            }), (0, t.jsx)(a.Button, {
                                size: a.Button.Sizes.SMALL,
                                className: hn().trailingButton,
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
                En = r(537351),
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
                Sn = r(140151),
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
            const Cn = function(e) {
                var n, r = e.node,
                    o = e.reportType,
                    l = e.history,
                    c = e.onSelectChild,
                    s = e.onModalClose,
                    f = e.multiSelect,
                    m = e.reportId,
                    h = e.freeText,
                    v = Rn(i.useState(!1), 2),
                    y = v[0],
                    p = v[1],
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
                    C = (n = "external_link", r.elements.filter((function(e) {
                        return e.type === n
                    }))),
                    A = wn(r, "free_text"),
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
                    null != h && T(h)
                }), [f, h]);
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
                        }), (0, t.jsx)(Ce, {
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
                        }), null != wn(r, "guild_discovery_preview") && "guild_discovery" === o.name && (0, t.jsx)(be, {
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
                            element: A,
                            onChange: T
                        }), (0, t.jsx)(L, {
                            node: r,
                            onSelectChild: M
                        }), null != C && C.length > 0 ? (0, t.jsx)(ne, {
                            elements: C
                        }) : null, (0, t.jsx)($, {
                            hasError: _,
                            onClose: function() {
                                E(!1)
                            }
                        })]
                    }), (0, t.jsx)(b, {
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
            var An = r(90406),
                Mn = r.n(An);

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

            function Ln(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function Zn(e, n) {
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
            const Hn = function(e) {
                var n, r, u = e.reportType,
                    d = e.menu,
                    f = e.modalProps,
                    m = e.onSubmit,
                    b = e.onNavigate,
                    h = (0, c.Dt)(),
                    v = d.nodes,
                    y = d.root_node_id,
                    p = d.success_node_id,
                    _ = d.fail_node_id,
                    E = Bn(i.useState(y), 2),
                    x = E[0],
                    j = E[1],
                    O = Bn(i.useState(void 0), 2),
                    S = O[0],
                    I = O[1],
                    N = Bn(i.useState(void 0), 2),
                    T = N[0],
                    R = N[1],
                    w = Bn(i.useState([]), 2),
                    P = w[0],
                    C = w[1],
                    A = Bn(i.useState(void 0), 2),
                    M = A[0],
                    D = A[1],
                    k = function(e) {
                        var n, r = Bn(e.destination, 2)[1],
                            t = v[r];
                        if (t.elements.some((function(e) {
                                return "skip" === e.type
                            })) && "next" === (null === (n = t.button) || void 0 === n ? void 0 : n.type)) return k(Zn(function(e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var r = null != arguments[n] ? arguments[n] : {},
                                    t = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                t.forEach((function(n) {
                                    Ln(e, n, r[n])
                                }))
                            }
                            return e
                        }({}, e), {
                            destination: ["", t.button.target]
                        }));
                        C(Un(P).concat([e]));
                        null != t.key && (null == b || b(t.key));
                        I(void 0);
                        R(void 0);
                        if (u.name === s.b.MESSAGE || u.name === s.b.FIRST_DM) {
                            var i = u.record.id;
                            l.ZP.trackWithMetadata(g.rMx.IAR_NAVIGATE, {
                                message_id: i,
                                content_type: u.name,
                                report_sub_type: t.report_type,
                                current_node: v[x].id,
                                next_node: t.id
                            })
                        }
                        j(r)
                    },
                    L = (r = (n = function(e) {
                        var n, r, t;
                        return Vn(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, (0, o.ZD)(d, u, Un(P).concat([e]))];
                                case 1:
                                    r = i.sent();
                                    null != (t = null == r || null === (n = r.body) || void 0 === n ? void 0 : n.report_id) && D(t);
                                    null == m || m(t);
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
                    Z = function() {
                        var e;
                        if (!(P.length < 1)) {
                            var n, r = Un(P),
                                t = r.pop(),
                                i = null !== (n = null == t ? void 0 : t.nodeRef) && void 0 !== n ? n : y;
                            if (u.name === s.b.MESSAGE || u.name === s.b.FIRST_DM) {
                                var a = u.record.id;
                                l.ZP.trackWithMetadata(g.rMx.IAR_NAVIGATE, {
                                    message_id: a,
                                    content_type: u.name,
                                    report_sub_type: v[i].report_type,
                                    current_node: v[x].id,
                                    next_node: v[i].id
                                })
                            }
                            I(null == t || null === (e = t.multiSelect) || void 0 === e ? void 0 : e.state);
                            R(null == t ? void 0 : t.freeText);
                            j(i);
                            C(r);
                            null == b || b("..")
                        }
                    },
                    B = [];
                for (var U in v) {
                    var G, V = v[U];
                    if (V.id !== p && V.id !== _ && V.id !== y) {
                        B.push(V);
                        if ("next" === (null === (G = V.button) || void 0 === G ? void 0 : G.type)) {
                            var H, z = null === (H = V.button) || void 0 === H ? void 0 : H.target,
                                F = B.indexOf(v[z]);
                            if (-1 !== F) {
                                B.splice(F, 1);
                                B.push(v[z])
                            }
                        }
                    }
                }
                var W = [v[y]].concat(Un(B), [v[p], v[_]]);
                return (0, t.jsx)(a.ModalRoot, {
                    transitionState: f.transitionState,
                    "aria-labelledby": h,
                    children: (0, t.jsx)(a.Slides, {
                        width: 440,
                        activeSlide: x,
                        centered: !1,
                        children: W.map((function(e) {
                            return (0, t.jsx)(a.Slide, {
                                id: e.id,
                                children: (0, t.jsx)("div", {
                                    className: Mn().slideContainer,
                                    children: (0, t.jsx)(Cn, {
                                        node: e,
                                        reportType: u,
                                        history: P,
                                        onModalClose: f.onClose,
                                        onSelectChild: k,
                                        onNavigateBack: Z,
                                        multiSelect: S,
                                        freeText: T,
                                        successNodeId: p,
                                        failNodeId: _,
                                        onSubmit: L,
                                        reportId: M
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

            function Yn(e, n, r, t) {
                return Kn.apply(this, arguments)
            }

            function Kn() {
                Kn = Fn((function(e, n, r, i) {
                    var l, c, s, u, d, f, m, b = arguments;
                    return Wn(this, (function(h) {
                        switch (h.label) {
                            case 0:
                                l = !(b.length > 4 && void 0 !== b[4]) || b[4];
                                c = (0, a.getInteractingModalContext)();
                                h.label = 1;
                            case 1:
                                h.trys.push([1, 3, , 4]);
                                return [4, (0, o.Nt)(e.name, n)];
                            case 2:
                                s = h.sent();
                                u = [];
                                d = void 0;
                                f = function(e) {
                                    u.push(e)
                                };
                                m = function(e) {
                                    d = e;
                                    null == r || r()
                                };
                                (0, a.openModal)((function(n) {
                                    return (0, t.jsx)(Hn, {
                                        menu: s,
                                        reportType: e,
                                        modalProps: n,
                                        onNavigate: f,
                                        onSubmit: m
                                    })
                                }), {
                                    onCloseCallback: function() {
                                        (0, o.k8)(e, u, d);
                                        null == i || i();
                                        l && (0, o.X)(e, null != d ? d : null)
                                    }
                                }, c);
                                return [3, 4];
                            case 3:
                                h.sent();
                                return [3, 4];
                            case 4:
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
                Z: () => b
            });
            var t, i = r(785893),
                a = (r(667294), r(294184)),
                o = r.n(a),
                l = r(882723),
                c = r(621329),
                s = r(127661),
                u = r(386991),
                d = r(265367),
                f = r(231361),
                m = r.n(f);
            ! function(e) {
                e[e.WARNING = 0] = "WARNING";
                e[e.INFO = 1] = "INFO";
                e[e.ERROR = 2] = "ERROR";
                e[e.POSITIVE = 3] = "POSITIVE"
            }(t || (t = {}));
            const b = function(e) {
                var n = e.children,
                    r = e.messageType,
                    a = e.className,
                    f = e.textColor,
                    b = void 0 === f ? "text-normal" : f,
                    h = e.textVariant,
                    v = void 0 === h ? "text-sm/medium" : h,
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
                        color: b,
                        variant: v,
                        children: n
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=a43227544592acce36d2.js.map