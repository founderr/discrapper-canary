"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [17326], {
        557233: (e, t, n) => {
            n.d(t, {
                C4: () => R,
                Fi: () => m,
                KK: () => I,
                f6: () => O,
                n: () => v
            });
            var r = n(730381),
                o = n.n(r),
                a = n(281110),
                l = n(396043),
                i = n(703790),
                u = n(567403),
                c = n(652591),
                s = n(980813),
                f = n(2590);

            function d(e, t, n, r, o, a, l) {
                try {
                    var i = e[a](l),
                        u = i.value
                } catch (e) {
                    n(e);
                    return
                }
                i.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function l(e) {
                            d(a, r, o, l, i, "next", e)
                        }

                        function i(e) {
                            d(a, r, o, l, i, "throw", e)
                        }
                        l(void 0)
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
            var _ = function(e, t) {
                var n, r, o, a, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function i(a) {
                    return function(i) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            l.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(a);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                a = t.call(e, l)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, i])
                    }
                }
            };

            function I(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && c.default.track(f.rMx.GUILD_RAID_REPORTED, b(y({}, (0, l.hH)(e)), {
                    guild_id: e,
                    raid_types: t
                }))
            }

            function O(e, t) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = p((function(e, t) {
                    var n;
                    return _(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                (n = new Set(e.features)).has(f.oNc.COMMUNITY) ? t ? n.delete(f.oNc.RAID_ALERTS_DISABLED) : n.add(f.oNc.RAID_ALERTS_DISABLED) : t ? n.add(f.oNc.NON_COMMUNITY_RAID_ALERTS) : n.delete(f.oNc.NON_COMMUNITY_RAID_ALERTS);
                                return [4, i.Z.saveGuild(e.id, {
                                    features: n
                                }, {
                                    throwErr: !0
                                })];
                            case 1:
                                r.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function v(e, t, n, r) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = p((function(e, t, n, r) {
                    var l, i;
                    return _(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                l = o()().add(r, "hours").toISOString();
                                i = {
                                    invites_disabled_until: t ? l : null,
                                    dms_disabled_until: n ? l : null
                                };
                                return [4, a.ZP.put({
                                    url: f.ANM.GUILD_INCIDENT_ACTIONS(e),
                                    body: i
                                })];
                            case 1:
                                return [2, u.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function m(e, t, n) {
                return D.apply(this, arguments)
            }

            function D() {
                return (D = p((function(e, t, n) {
                    var r, o, l;
                    return _(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                r = (0, s.jy)(e).showAlertMode;
                                o = u.Z.getGuild(e);
                                l = null == o ? void 0 : o.getSafetyAlertsChannelId();
                                return r && null != l ? [4, a.ZP.post({
                                    url: f.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                                    body: {
                                        alert_message_id: t,
                                        reason: n
                                    }
                                })] : [2, null];
                            case 1:
                                return [2, i.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function R(e) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = p((function(e) {
                    var t, n, r;
                    return _(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = (0, s.jy)(e).showAlertMode;
                                n = u.Z.getGuild(e);
                                r = null == n ? void 0 : n.getSafetyAlertsChannelId();
                                return t && null != r ? [4, a.ZP.post({
                                    url: f.ANM.GUILD_INCIDENT_REPORT_RAID(e)
                                })] : [2, null];
                            case 1:
                                return [2, o.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        217326: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => m
            });
            var r = n(785893),
                o = n(667294),
                a = n(294184),
                l = n.n(a),
                i = n(70418),
                u = n(396043),
                c = n(557233),
                s = n(65162),
                f = n(2590),
                d = n(473708),
                p = n(737577),
                h = n.n(p);

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t, n, r, o, a, l) {
                try {
                    var i = e[a](l),
                        u = i.value
                } catch (e) {
                    n(e);
                    return
                }
                i.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function _(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function l(e) {
                            b(a, r, o, l, i, "next", e)
                        }

                        function i(e) {
                            b(a, r, o, l, i, "throw", e)
                        }
                        l(void 0)
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

            function O(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            l = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || v(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e) {
                return function(e) {
                    if (Array.isArray(e)) return y(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || v(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e, t) {
                if (e) {
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0
                }
            }
            var E = function(e, t) {
                var n, r, o, a, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function i(a) {
                    return function(i) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r),
                                        0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            l.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(a);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                a = t.call(e, l)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, i])
                    }
                }
            };

            function m(e) {
                var t = e.guildId,
                    a = e.messageId,
                    p = e.transitionState,
                    y = e.onClose,
                    b = function(e) {
                        var t = m.includes(e);
                        D(t ? function(t) {
                            return t.filter((function(t) {
                                return t !== e
                            }))
                        } : function(t) {
                            return A(t).concat([e])
                        })
                    },
                    v = O(o.useState([]), 2),
                    m = v[0],
                    D = v[1],
                    R = O(o.useState(), 2),
                    g = R[0],
                    T = R[1],
                    w = o.useCallback((function() {
                        var e = {
                            raid_alert_type: s.wR.JOIN_RAID,
                            raid_alert_id: a,
                            false_alarm_type: m.map((function(e) {
                                return e.toString()
                            })),
                            false_alarm_other_reason: g,
                            guild_id: t
                        };
                        (0, u.yw)(f.rMx.GUILD_RAID_FEEDBACK, e);
                        (0, c.Fi)(t, a, (0, s.J$)(m));
                        y();
                        (0, i.openModalLazy)(_((function() {
                            var e, t;
                            return E(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(16841)]).then(n.bind(n, 916841))];
                                    case 1:
                                        e = o.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, function(e) {
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
                                            }({}, e))
                                        }]
                                }
                            }))
                        })))
                    }), [y, a, t, g, m]),
                    N = [{
                        text: d.Z.Messages.GUILD_ANTIRAID_RESOLVE_REASON_LEGITIMATE_ACTIVITY,
                        value: s.$l.LEGITIMATE_ACTIVITY
                    }, {
                        text: d.Z.Messages.GUILD_ANTIRAID_RESOLVE_REASON_DM_SPAM,
                        value: s.$l.DM_SPAM
                    }, {
                        text: d.Z.Messages.GUILD_ANTIRAID_RESOLVE_REASON_JOIN_RAID,
                        value: s.$l.JOIN_RAID
                    }, {
                        text: d.Z.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_OTHER,
                        value: s.$l.OTHER
                    }];
                return (0, r.jsxs)(i.ModalRoot, {
                    transitionState: p,
                    size: i.ModalSize.SMALL,
                    children: [(0, r.jsx)(i.ModalHeader, {
                        separator: !1,
                        className: h().center,
                        children: (0, r.jsx)(i.Heading, {
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: d.Z.Messages.GUILD_ANTIRAID_RESOLVE_TITLE
                        })
                    }), (0, r.jsxs)(i.ModalContent, {
                        className: h().center,
                        children: [(0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: h().textCenter,
                            children: d.Z.Messages.GUILD_ANTIRAID_RESOLVE_DESCRIPTION
                        }), (0, r.jsx)("div", {
                            className: h().options,
                            children: N.map((function(e) {
                                var t = e.text,
                                    n = e.value;
                                return (0, r.jsxs)("div", {
                                    className: l()(h().optionContainer, I({}, h().optionContainerOther, n === s.$l.OTHER)),
                                    children: [(0, r.jsxs)(i.Clickable, {
                                        className: h().optionText,
                                        onClick: function() {
                                            return b(n)
                                        },
                                        children: [(0, r.jsx)("div", {
                                            children: (0, r.jsx)(i.Checkbox, {
                                                type: i.Checkbox.Types.INVERTED,
                                                size: 20,
                                                value: m.includes(n),
                                                onChange: function() {
                                                    return b(n)
                                                }
                                            })
                                        }), (0, r.jsx)(i.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: t
                                        })]
                                    }), n === s.$l.OTHER && m.includes(s.$l.OTHER) && (0, r.jsx)("div", {
                                        className: h().textboxContainer,
                                        children: (0, r.jsx)(i.TextArea, {
                                            className: h().falseAlarmReasonText,
                                            placeholder: d.Z.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                                            onChange: function(e) {
                                                return T(e)
                                            },
                                            value: g,
                                            rows: 2,
                                            autoFocus: !0,
                                            flex: !0
                                        })
                                    })]
                                }, n)
                            }))
                        })]
                    }), (0, r.jsxs)(i.ModalFooter, {
                        className: h().modalFooter,
                        children: [(0, r.jsx)("div", {
                            className: h().button,
                            children: (0, r.jsx)(i.Button, {
                                onClick: w,
                                color: i.Button.Colors.BRAND_NEW,
                                look: i.Button.Looks.FILLED,
                                children: d.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED
                            })
                        }), (0, r.jsx)(i.Button, {
                            onClick: y,
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.LINK,
                            children: d.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);