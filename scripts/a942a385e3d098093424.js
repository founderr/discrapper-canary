(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [89663], {
        244224: (e, n, t) => {
            e.exports = t.p + "c1b64035ca9a96e65e1a450302353a58.svg"
        },
        689663: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                default: () => Yn
            });
            var r = t(785893),
                a = t(667294),
                l = t(202351),
                o = t(70418),
                i = t(224813),
                s = t(316878),
                u = t(255875),
                c = t(919810),
                d = t(61209),
                f = t(281110),
                E = t(2590);

            function v(e, n, t, r, a, l, o) {
                try {
                    var i = e[l](o),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function h(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var l = e.apply(n, t);

                        function o(e) {
                            v(l, r, a, o, i, "next", e)
                        }

                        function i(e) {
                            v(l, r, a, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            var y = function(e, n) {
                var t, r, a, l, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function i(l) {
                    return function(i) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                (r = 0, a) && (l = [2 & l[0], a.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        a = l;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = l;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(l);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                l = n.call(e, o)
                            } catch (e) {
                                l = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, i])
                    }
                }
            };

            function g(e, n, t) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = h((function(e, n, t) {
                    return y(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, f.ZP.get({
                                    url: E.ANM.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
                                    query: {
                                        type: n,
                                        entity_id: t
                                    }
                                })];
                            case 1:
                                return [2, r.sent().body]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var m = t(612831);

            function T(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function I(e, n, t, r, a, l, o) {
                try {
                    var i = e[l](o),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function _(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return l
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
            var b = function(e, n) {
                    var t, r, a, l, o = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return l = {
                        next: i(0),
                        throw: i(1),
                        return: i(2)
                    }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                        return this
                    }), l;

                    function i(l) {
                        return function(i) {
                            return function(l) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                    (r = 0, a) && (l = [2 & l[0], a.value]);
                                    switch (l[0]) {
                                        case 0:
                                        case 1:
                                            a = l;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: l[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = l[1];
                                            l = [0];
                                            continue;
                                        case 7:
                                            l = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                                o.label = l[1];
                                                break
                                            }
                                            if (6 === l[0] && o.label < a[1]) {
                                                o.label = a[1];
                                                a = l;
                                                break
                                            }
                                            if (a && o.label < a[2]) {
                                                o.label = a[2];
                                                o.ops.push(l);
                                                break
                                            }
                                            a[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    l = n.call(e, o)
                                } catch (e) {
                                    l = [6, e];
                                    r = 0
                                } finally {
                                    t = a = 0
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                }
                            }([l, i])
                        }
                    }
                },
                x = {
                    can_broadcast: !1
                };

            function N(e, n, t) {
                var r = _(a.useState(x), 2),
                    o = r[0],
                    i = r[1],
                    s = _(a.useState(!1), 2),
                    u = s[0],
                    f = s[1],
                    v = a.useRef(!1),
                    h = null == e ? void 0 : e.id,
                    y = null == e ? void 0 : e.hasFeature(E.oNc.HAS_DIRECTORY_ENTRY);
                a.useEffect((function() {
                    if (y) {
                        if (!v.current && null != h) {
                            var e, t, r = (t = (e = function() {
                                var e;
                                return b(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            v.current = !0;
                                            t.label = 1;
                                        case 1:
                                            t.trys.push([1, 3, , 4]);
                                            return [4, g(h, m.C2.GUILD_SCHEDULED_EVENT, n)];
                                        case 2:
                                            e = t.sent();
                                            i(e);
                                            return [3, 4];
                                        case 3:
                                            t.sent();
                                            i(x);
                                            return [3, 4];
                                        case 4:
                                            v.current = !1;
                                            return [2]
                                    }
                                }))
                            }, function() {
                                var n = this,
                                    t = arguments;
                                return new Promise((function(r, a) {
                                    var l = e.apply(n, t);

                                    function o(e) {
                                        I(l, r, a, o, i, "next", e)
                                    }

                                    function i(e) {
                                        I(l, r, a, o, i, "throw", e)
                                    }
                                    o(void 0)
                                }))
                            }), function() {
                                return t.apply(this, arguments)
                            });
                            r()
                        }
                    } else i(x)
                }), [h, y, n]);
                a.useEffect((function() {
                    if (o.can_broadcast) {
                        var e;
                        f(null === (e = o.has_broadcast) || void 0 === e || e)
                    } else f(!1)
                }), [o]);
                var p = (0, l.e7)([d.Z], (function() {
                    return (0, c.wg)(t, [d.Z])
                }));
                return {
                    broadcastInfo: o,
                    broadcastToDirectoryChannels: p && u,
                    setBroadcastToDirectoryChannels: f,
                    canEveryoneRoleViewEvent: p
                }
            }
            var S = t(5544),
                A = t(567403),
                O = t(294184),
                C = t.n(O),
                j = t(98265),
                L = t(997586),
                D = t.n(L);

            function M(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Z(e) {
                var n = e.steps,
                    t = e.stepIndex,
                    a = e.onClick;
                return (0, r.jsx)("div", {
                    className: D().container,
                    children: n.map((function(e, n) {
                        var l = t === n;
                        return (0, r.jsxs)(o.Clickable, {
                            onClick: function() {
                                return a(n)
                            },
                            className: D().stepContainer,
                            children: [(0, r.jsx)("div", {
                                className: C()(D().progressBar, M({}, D().selectedProgressBar, l))
                            }), (0, r.jsx)(j.Z, {
                                color: l ? j.Z.Colors.BRAND : j.Z.Colors.MUTED,
                                size: j.Z.Sizes.SIZE_12,
                                children: e
                            })]
                        }, e)
                    }))
                })
            }
            var w = t(443812),
                P = t(786502),
                G = t(474236),
                R = t(269300),
                V = t(242735),
                U = t(787193),
                k = (t(766496), t(682776));
            t(79522);

            function B(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function H(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return B(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return B(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function F(e, n) {
                var t = H(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [S.ZP], 1),
                    r = t[0];
                if (null == n) return [];
                var a = r.getChannels(e)[S.Zb],
                    l = [],
                    o = !0,
                    i = !1,
                    s = void 0;
                try {
                    for (var u, c = a[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) {
                        var d = u.value.channel,
                            f = (0, U.Gw)(d),
                            E = f.canCreateGuildEvent,
                            v = f.canManageAllEvents,
                            h = E || v;
                        d.type === n && ((d.isGuildVoice() && h || d.isGuildStageVoice() && h) && l.push(d))
                    }
                } catch (e) {
                    i = !0;
                    s = e
                } finally {
                    try {
                        o || null == c.return || c.return()
                    } finally {
                        if (i) throw s
                    }
                }
                return l
            }

            function W(e, n) {
                return (0, l.Wu)([S.ZP], (function() {
                    return F(e, n, [S.ZP])
                }), [e, n])
            }
            var Y = t(445446),
                X = t(32421),
                z = t(197307),
                q = t(730381),
                K = t.n(q),
                $ = t(773011),
                Q = t(840922),
                J = t(473903),
                ee = t(746103),
                ne = t(755914),
                te = t(407558),
                re = t(565571),
                ae = t(804134),
                le = t(678545),
                oe = t(99539),
                ie = t(619584),
                se = t(422513),
                ue = t(115617),
                ce = t(473708),
                de = t(615544),
                fe = t.n(de),
                Ee = t(244224),
                ve = t.n(Ee),
                he = function() {
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(o.Text, {
                            color: "header-primary",
                            variant: "text-xs/normal",
                            className: fe().inlineText,
                            children: ce.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_1
                        }), (0, r.jsx)(o.Text, {
                            color: "header-primary",
                            variant: "text-xs/normal",
                            className: fe().inlineText,
                            children: ce.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_2
                        }), (0, r.jsx)(o.Text, {
                            color: "header-primary",
                            variant: "text-xs/normal",
                            className: fe().inlineText,
                            children: ce.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_3
                        }), (0, r.jsx)(o.Text, {
                            color: "header-primary",
                            variant: "text-xs/normal",
                            className: fe().inlineText,
                            children: ce.Z.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_4
                        })]
                    })
                };

            function ye(e) {
                var n = e.onClick;
                if ((0,
                        l.e7)([se.qc], (function() {
                        return !se.qc.hasHotspot(se.v6.STAGE_CHANNEL_UPSELL)
                    }))) return null;
                return (0, r.jsxs)("div", {
                    className: fe().container,
                    children: [(0, r.jsxs)("div", {
                        className: fe().content,
                        children: [(0, r.jsxs)("div", {
                            className: fe().textContainer,
                            children: [(0, r.jsx)(o.Heading, {
                                variant: "heading-md/semibold",
                                children: ce.Z.Messages.GUILD_EVENT_STAGE_UPSELL_TITLE
                            }), (0, r.jsx)(o.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                className: fe().descriptionText,
                                children: ce.Z.Messages.GUILD_EVENT_STAGE_TOOLTIP_BODY
                            }), (0, r.jsx)(o.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                children: ce.Z.Messages.GUILD_EVENT_STAGE_UPSELL.format({
                                    suggestionsHook: he
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: fe().image,
                            children: (0, r.jsx)("img", {
                                src: ve(),
                                alt: ce.Z.Messages.GUILD_EVENT_STAGE_UPSELL_ALT_IMAGE
                            })
                        })]
                    }), (0, r.jsxs)("div", {
                        className: fe().footer,
                        children: [(0, r.jsx)(o.Button, {
                            onClick: n,
                            color: o.Button.Colors.PRIMARY,
                            size: o.Button.Sizes.SMALL,
                            className: fe().button,
                            children: ce.Z.Messages.CREATE_STAGE_CHANNEL
                        }), (0, r.jsx)(o.Button, {
                            onClick: function() {
                                ue.Kw(se.v6.STAGE_CHANNEL_UPSELL)
                            },
                            color: o.Button.Colors.TRANSPARENT,
                            size: o.Button.Sizes.SMALL,
                            look: o.ButtonLooks.LINK,
                            children: ce.Z.Messages.DONT_SHOW_AGAIN
                        })]
                    })]
                })
            }
            var ge = t(3155),
                pe = t(456727),
                me = t.n(pe);

            function Te(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Ie(e, n, t, r, a, l, o) {
                try {
                    var i = e[l](o),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function _e(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var l = e.apply(n, t);

                        function o(e) {
                            Ie(l, r, a, o, i, "next", e)
                        }

                        function i(e) {
                            Ie(l, r, a, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function be(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function xe(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        be(e, n, t[n])
                    }))
                }
                return e
            }

            function Ne(e, n) {
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

            function Se(e) {
                return function(e) {
                    if (Array.isArray(e)) return Te(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Te(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Te(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ae = function(e, n) {
                    var t, r, a, l, o = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return l = {
                        next: i(0),
                        throw: i(1),
                        return: i(2)
                    }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                        return this
                    }), l;

                    function i(l) {
                        return function(i) {
                            return function(l) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                    (r = 0, a) && (l = [2 & l[0], a.value]);
                                    switch (l[0]) {
                                        case 0:
                                        case 1:
                                            a = l;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: l[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = l[1];
                                            l = [0];
                                            continue;
                                        case 7:
                                            l = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                                o.label = l[1];
                                                break
                                            }
                                            if (6 === l[0] && o.label < a[1]) {
                                                o.label = a[1];
                                                a = l;
                                                break
                                            }
                                            if (a && o.label < a[2]) {
                                                o.label = a[2];
                                                o.ops.push(l);
                                                break
                                            }
                                            a[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    l = n.call(e, o)
                                } catch (e) {
                                    l = [6, e];
                                    r = 0
                                } finally {
                                    t = a = 0
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                }
                            }([l, i])
                        }
                    }
                },
                Oe = function(e) {
                    return e === ge.WX.EXTERNAL
                },
                Ce = function(e) {
                    var n = e.guildId,
                        t = e.channelType,
                        a = e.channel,
                        l = e.onSelectChannel,
                        i = e.disabled,
                        s = e.entityType,
                        u = t === E.d4z.GUILD_STAGE_VOICE,
                        c = (0, ie.Q)(a, s),
                        f = W(n, t);
                    return (0, r.jsxs)(o.FormItem, {
                        title: u ? ce.Z.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : ce.Z.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
                        className: me().options,
                        disabled: i,
                        required: !0,
                        children: [(0, r.jsx)(o.SearchableSelect, {
                            value: null == a ? void 0 : a.id,
                            options: f.map((function(e) {
                                return {
                                    value: e.id,
                                    label: (0, $.F6)(e, J.default, Q.Z, !0)
                                }
                            })),
                            onChange: function(e) {
                                var n = f.find((function(n) {
                                    return n.id === e
                                }));
                                l(null != n ? n : void 0)
                            },
                            renderOptionPrefix: function(e) {
                                return function(e, n) {
                                    var t = d.Z.getChannel(e);
                                    if (null == t) return null;
                                    var a = t.type === E.d4z.GUILD_STAGE_VOICE,
                                        l = (0, ie.Q)(t, n),
                                        o = l ? ne.Z : te.Z,
                                        i = l ? re.Z : ae.Z,
                                        s = a ? i : o;
                                    return (0, r.jsx)(s, {
                                        height: 24,
                                        className: me().channelOptionIcon
                                    })
                                }(null == e ? void 0 : e.value, s)
                            },
                            isDisabled: i
                        }), !c && (0, r.jsx)(o.Text, {
                            color: "header-secondary",
                            className: me().channelPrivate,
                            variant: "text-sm/normal",
                            children: ce.Z.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
                        })]
                    })
                };

            function je(e, n, t, r) {
                return n ? {
                    disabled: !0,
                    tooltipText: ce.Z.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
                } : t ? 0 === r && e !== ge.WX.EXTERNAL ? {
                    disabled: !0,
                    tooltipText: ce.Z.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
                } : {
                    disabled: !1,
                    tooltipText: null
                } : {
                    disabled: !0,
                    tooltipText: ce.Z.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
                }
            }
            var Le = function(e, n) {
                return function(t) {
                    var r = t.value,
                        a = {
                            entityType: r,
                            scheduledEndTime: void 0
                        };
                    if (Oe(r)) {
                        var l, o = (null !== (l = K()(n.scheduledStartTime)) && void 0 !== l ? l : K()()).add(2, "hour");
                        a.scheduledEndTime = o.toISOString()
                    }
                    e(a)
                }
            };

            function De(e) {
                var n = e.guildId,
                    t = e.guildEvent,
                    i = e.onChange,
                    s = e.isFocusReady,
                    u = t.entityType,
                    c = t.channelId,
                    f = (0, l.e7)([d.Z], (function() {
                        return d.Z.getChannel(c)
                    }), [c]),
                    E = a.useRef(null);
                a.useEffect((function() {
                    if (s && Oe(u)) {
                        var e;
                        null === (e = E.current) || void 0 === e || e.focus()
                    }
                }), [s, u]);
                var v = function(e) {
                        return function(n) {
                            e({
                                entityMetadata: {
                                    location: n
                                }
                            })
                        }
                    }(i),
                    h = function(e) {
                        return function(n) {
                            var t;
                            e({
                                channelId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : null
                            })
                        }
                    }(i),
                    y = (0, X.xV)(t),
                    g = (0, X.xC)(u),
                    p = (0, R.xt)(t);
                return null == u || u === ge.WX.NONE ? null : Oe(u) ? (0, r.jsx)(o.FormItem, {
                    title: ce.Z.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
                    className: me().options,
                    required: !0,
                    children: (0, r.jsx)(o.TextInput, {
                        className: me().textInput,
                        onChange: v,
                        placeholder: ce.Z.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
                        maxLength: ge.gG,
                        value: null != y ? y : "",
                        inputRef: E
                    })
                }) : null == g ? null : (0, r.jsx)(Ce, {
                    guildId: n,
                    channelType: g,
                    onSelectChannel: h,
                    channel: f,
                    entityType: u,
                    disabled: p
                })
            }

            function Me(e) {
                var n = e.guildId,
                    t = e.guildEvent,
                    i = e.onChange,
                    s = (0, l.e7)([A.Z], (function() {
                        return A.Z.getGuild(n)
                    }), [n]),
                    u = (0, le.Z)(n, void 0),
                    c = (0, le.Z)(n, E.d4z.GUILD_VOICE),
                    d = (0, le.Z)(n, E.d4z.GUILD_STAGE_VOICE),
                    f = W(n, E.d4z.GUILD_VOICE),
                    v = (0, oe.q)(s),
                    h = null == s ? void 0 : s.hasFeature(E.oNc.COMMUNITY),
                    y = (0, R.xt)(t),
                    g = Le(i, t),
                    p = a.useMemo((function() {
                        var e = [xe({
                            name: ce.Z.Messages.VOICE_CHANNEL,
                            value: ge.WX.VOICE,
                            desc: ce.Z.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
                            icon: ne.Z
                        }, je(ge.WX.VOICE, y, c, f.length)), xe({
                            name: ce.Z.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
                            value: ge.WX.EXTERNAL,
                            desc: ce.Z.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
                            icon: ee.Z
                        }, je(ge.WX.EXTERNAL, y, u, 0))];
                        return h ? [xe({
                            name: ce.Z.Messages.STAGE_CHANNEL,
                            value: ge.WX.STAGE_INSTANCE,
                            desc: ce.Z.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
                            icon: re.Z
                        }, je(ge.WX.STAGE_INSTANCE, y, d, v.length))].concat(Se(e)) : e
                    }), [u, c, d, h, f.length, v.length, y]);
                return (0, r.jsx)(o.RadioGroup, {
                    value: t.entityType,
                    options: p,
                    onChange: g,
                    className: me().options
                })
            }

            function Ze(e) {
                var n = e.guildId,
                    a = e.guildEvent,
                    i = (e.validationErrorMessage, e.onChange),
                    s = e.isSlideReady,
                    u = void 0 !== s && s,
                    c = a.entityType,
                    d = (0, l.e7)([A.Z], (function() {
                        return A.Z.getGuild(n)
                    }), [n]),
                    f = (0, oe.q)(d),
                    v = (0, l.e7)([k.Z], (function() {
                        return k.Z.can(E.Plq.MANAGE_CHANNELS, d)
                    })),
                    h = null == d ? void 0 : d.hasFeature(E.oNc.COMMUNITY),
                    y = Le(i, a),
                    g = h && !Oe(c) && 0 === f.length && v && null != c;
                return (0, r.jsxs)("div", {
                    className: me().container,
                    children: [(0, r.jsx)(o.Heading, {
                        variant: "heading-xl/semibold",
                        className: me().header,
                        children: ce.Z.Messages.GUILD_EVENT_LOCATION_TITLE
                    }), (0, r.jsx)(o.Text, {
                        color: "header-secondary",
                        className: me().text,
                        variant: "text-sm/normal",
                        children: ce.Z.Messages.GUILD_EVENT_LOCATION_SUBTITLE
                    }), (0, r.jsx)(Me, {
                        guildId: n,
                        guildEvent: a,
                        onChange: i
                    }), (0, r.jsx)(De, {
                        guildId: n,
                        guildEvent: a,
                        isFocusReady: u,
                        onChange: i
                    }), g ? (0, r.jsx)(ye, {
                        onClick: function() {
                            y({
                                value: ge.WX.STAGE_INSTANCE,
                                name: ce.Z.Messages.STAGE_CHANNEL
                            });
                            (0, o.openModalLazy)(_e((function() {
                                var e, a;
                                return Ae(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return [4, Promise.all([t.e(40532), t.e(49518), t.e(58969), t.e(57645), t.e(18442), t.e(64960), t.e(98936)]).then(t.bind(t, 957645))];
                                        case 1:
                                            e = l.sent(), a = e.default;
                                            return [2, function(e) {
                                                return (0, r.jsx)(a, Ne(xe({}, e), {
                                                    channelType: E.d4z.GUILD_STAGE_VOICE,
                                                    guildId: n
                                                }))
                                            }]
                                    }
                                }))
                            })))
                        }
                    }) : null]
                })
            }
            var we = t(344832),
                Pe = t(944522),
                Ge = t(205316),
                Re = t(842783),
                Ve = t(881269),
                Ue = t.n(Ve);

            function ke(e) {
                var n, t, i = e.guildId,
                    s = e.guildEvent,
                    u = e.guildEventId,
                    c = e.error,
                    f = a.useMemo((function() {
                        return (0, Y.Gb)(s, i)
                    }), [s, i]),
                    E = f.channel_id,
                    v = f.name,
                    h = f.image,
                    y = f.description,
                    g = (0, l.e7)([d.Z], (function() {
                        return d.Z.getChannel(E)
                    }), [E]),
                    p = (0, l.e7)([A.Z], (function() {
                        return A.Z.getGuild(i)
                    }), [i]),
                    m = (0, X.cS)(f),
                    T = (0, l.e7)([J.default], (function() {
                        return null != s.creatorId ? J.default.getUser(s.creatorId) : J.default.getCurrentUser()
                    }), [s.creatorId]),
                    I = (0, l.e7)([Pe.Z], (function() {
                        return Pe.Z.isLurking(i)
                    }), [i]),
                    _ = (0, we.KS)(g, p);
                return (0, r.jsxs)("div", {
                    className: Ue().content,
                    children: [(0, r.jsx)(Re.Z, {
                        className: Ue().previewCard,
                        guild: p,
                        channel: g,
                        location: null != m ? m : void 0,
                        creator: T,
                        name: v,
                        description: y,
                        imageSource: function(e, n) {
                            return null == n && null == e.image ? null : null != n && /^data:/.test(n) ? n : (0, Ge.Z)(e)
                        }((0, Y.Gb)(s, i, u), h),
                        isActive: !1,
                        isUserLurking: I,
                        speakers: [],
                        speakerCount: 0,
                        rsvped: !0,
                        guildEventId: ge.Ku,
                        eventPreview: f
                    }), (0, r.jsxs)("div", {
                        className: Ue().textContainer,
                        children: [(0, r.jsx)(o.Heading, {
                            variant: "heading-xl/semibold",
                            children: ce.Z.Messages.GUILD_EVENT_PREVIEW_TITLE
                        }), (0, r.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: Ue().subheader,
                            children: null != location ? ce.Z.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : ce.Z.Messages.GUILD_EVENT_PREVIEW_BODY.format({
                                channelName: null !== (t = null == g ? void 0 : g.name) && void 0 !== t ? t : "",
                                channelHook: function() {
                                    return (0, r.jsxs)("div", {
                                        className: Ue().channelName,
                                        children: [null != _ ? (0, r.jsx)(_, {
                                            width: 20,
                                            height: 20,
                                            className: Ue().icon
                                        }) : (0, r.jsx)(ee.Z, {
                                            height: 18,
                                            width: 18,
                                            className: Ue().locationIcon
                                        }), null !== (n = null == g ? void 0 : g.name) && void 0 !== n ? n : m]
                                    })
                                }
                            })
                        }), null != c && (0, r.jsx)(o.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: Ue().subheader,
                            children: c.getAnyErrorMessage()
                        })]
                    })]
                })
            }
            var Be = t(876003),
                He = t(694755),
                Fe = t(426404),
                We = t(800455);
            const Ye = (0, t(260561).B)({
                kind: "guild",
                id: "2023-09_guild_events_auto_start",
                label: "Allow users to toggle automatically start events",
                defaultConfig: {
                    canUseEventsAutoStartToggle: !1
                },
                treatments: [{
                    id: 1,
                    label: "User can see autostart toggle",
                    config: {
                        canUseEventsAutoStartToggle: !0
                    }
                }]
            });
            var Xe = t(610030),
                ze = t(32111),
                qe = t(921431),
                Ke = t(79462),
                $e = t(225970),
                Qe = t.n($e);

            function Je(e, n, t, r, a, l, o) {
                try {
                    var i = e[l](o),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function en(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var l = e.apply(n, t);

                        function o(e) {
                            Je(l, r, a, o, i, "next", e)
                        }

                        function i(e) {
                            Je(l, r, a, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function nn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function tn(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        nn(e, n, t[n])
                    }))
                }
                return e
            }

            function rn(e, n) {
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
            var an = function(e, n) {
                var t, r, a, l, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function i(l) {
                    return function(i) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                (r = 0, a) && (l = [2 & l[0], a.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        a = l;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = l;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(l);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                l = n.call(e, o)
                            } catch (e) {
                                l = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, i])
                    }
                }
            };

            function ln(e) {
                var n = e.editBroadcastInfoData,
                    t = n.broadcastInfo,
                    a = n.broadcastToDirectoryChannels,
                    l = n.setBroadcastToDirectoryChannels,
                    i = n.canEveryoneRoleViewEvent;
                return t.can_broadcast ? (0, r.jsxs)(o.FormItem, {
                    title: ce.Z.Messages.CREATE_EVENT_PRIVACY_LABEL,
                    className: Qe().formItem,
                    children: [(0, r.jsx)(o.Tooltip, {
                        text: (0, r.jsx)(o.Text, {
                            className: Qe().broadcastInfoTooltip,
                            variant: "text-sm/normal",
                            children: ce.Z.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
                        }),
                        "aria-label": ce.Z.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
                        shouldShow: !i,
                        children: function(e) {
                            return (0, r.jsx)("div", rn(tn({}, e), {
                                children: (0, r.jsx)(o.Checkbox, {
                                    type: o.Checkbox.Types.INVERTED,
                                    disabled: !i,
                                    value: a,
                                    onChange: function(e, n) {
                                        return l(n)
                                    },
                                    children: (0, r.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        color: "interactive-active",
                                        children: ce.Z.Messages.HUB_EVENTS_SHARE_TITLE
                                    })
                                })
                            }))
                        }
                    }), (0, r.jsx)(o.Text, {
                        className: Qe().broadcastInfoDescription,
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: ce.Z.Messages.HUB_EVENTS_SHARE_DESCRIPTION
                    })]
                }) : null
            }

            function on(e) {
                var n = e.guildEvent,
                    l = e.guildEventId,
                    i = e.guildId,
                    s = e.editBroadcastInfoData,
                    u = e.error,
                    c = e.validationErrorMessage,
                    d = e.onChange,
                    f = e.canSetFocus,
                    E = void 0 !== f && f,
                    v = n.entityType,
                    h = n.channelId,
                    y = n.description,
                    g = n.name,
                    p = n.image,
                    m = n.scheduledEndTime,
                    T = n.scheduledStartTime,
                    I = n.autoStart,
                    _ = n.recurrenceRule,
                    b = Ye.useExperiment({
                        location: "Guild Events Modal",
                        guildId: null != i ? i : ""
                    }).canUseEventsAutoStartToggle,
                    x = (0, Fe._d)(h),
                    N = null != n && (0, R.xt)(n),
                    S = a.useMemo((function() {
                        var e = (0, Xe.v1)(n);
                        return null != e ? e : {
                            startDate: K()(T)
                        }
                    }), [n, T]),
                    A = a.useRef(null);
                a.useEffect((function() {
                    if (E) {
                        var e;
                        null === (e = A.current) || void 0 === e || e.focus()
                    }
                }), [E]);
                var O = function(e) {
                        d({
                            image: e
                        })
                    },
                    j = function(e, n) {
                        null != e && void 0 !== n ? (0, o.openModalLazy)(en((function() {
                            var a, l;
                            return an(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(91406), t.e(84959), t.e(17363), t.e(61054)]).then(t.bind(t, 17363))];
                                    case 1:
                                        a = o.sent(), l = a.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(l, tn({
                                                imgURI: e,
                                                file: n,
                                                onCrop: O,
                                                uploadType: qe.pC.SCHEDULED_EVENT_IMAGE,
                                                allowSkip: !0
                                            }, t))
                                        }]
                                }
                            }))
                        }))) : O(null)
                    };
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: Qe().blockedUsersContainer,
                        children: null != h && !N && x > 0 && (0, r.jsx)(We.mv, {
                            channelId: h
                        })
                    }), (0, r.jsxs)("div", {
                        className: Qe().form,
                        children: [(0, r.jsxs)(o.FormItem, {
                            title: ce.Z.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
                            className: Qe().topicFormItem,
                            required: !0,
                            children: [(0, r.jsx)(o.TextInput, {
                                className: Qe().textInput,
                                onChange: function(e) {
                                    d({
                                        name: e
                                    })
                                },
                                placeholder: ce.Z.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
                                maxLength: Ke.xA,
                                value: g,
                                autoComplete: "off",
                                inputRef: A
                            }), null != u ? (0, r.jsx)(o.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: Qe().warning,
                                children: u.getAnyErrorMessage()
                            }) : null]
                        }), (0, r.jsx)(ze.Z, {
                            className: Qe().formItem,
                            onScheduleChange: function(e) {
                                var n = e.startDate,
                                    t = e.endDate,
                                    r = {
                                        scheduledStartTime: null == n ? void 0 : n.toISOString(),
                                        scheduledEndTime: null == t ? void 0 : t.toISOString()
                                    };
                                null != n && null != m && (null == t ? void 0 : t.isBefore(n)) && (r.scheduledEndTime = n.add(1, "hour").toISOString());
                                d(r)
                            },
                            onRecurrenceChange: function(e) {
                                var n = S.startDate;
                                if (null != n) {
                                    var t = (0, Xe.mF)(e, n);
                                    d({
                                        recurrenceRule: t
                                    })
                                }
                            },
                            schedule: S,
                            recurrenceRule: _,
                            showEndDate: v === ge.WX.EXTERNAL,
                            requireEndDate: v === ge.WX.EXTERNAL,
                            disableStartDateTime: N,
                            guildId: i
                        }), null != c ? (0, r.jsx)(o.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: Qe().warning,
                            children: c
                        }) : null, b ? (0, r.jsx)(o.FormItem, {
                            className: C()(Qe().formItem, Qe().autoStartToggle),
                            children: (0, r.jsx)(o.Checkbox, {
                                type: o.Checkbox.Types.INVERTED,
                                value: I,
                                onChange: function(e, n) {
                                    d({
                                        autoStart: n
                                    })
                                },
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: ce.Z.Messages.GUILD_EVENT_AUTO_START_TOGGLE
                                })
                            })
                        }) : null, (0, r.jsx)(o.FormItem, {
                            title: ce.Z.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                            className: Qe().formItem,
                            children: (0, r.jsx)(o.TextArea, {
                                className: Qe().descriptionInput,
                                placeholder: ce.Z.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                value: y,
                                onChange: function(e) {
                                    d({
                                        description: e
                                    })
                                },
                                maxLength: ge.wm,
                                autosize: !0
                            })
                        }), (0, r.jsxs)(o.FormItem, {
                            title: ce.Z.Messages.GUILD_EVENT_IMAGE,
                            className: Qe().formItem,
                            children: [(0, r.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: Qe().addImageHint,
                                children: ce.Z.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
                            }), null != p ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(Be.Z, {
                                    className: Qe().imagePreview,
                                    iconWrapperClassName: Qe().imagePreviewInner,
                                    image: p,
                                    makeURL: function(e) {
                                        if (null == e) return null;
                                        if (null != i) {
                                            var t;
                                            return null !== (t = (0, Ge.Z)((0, Y.Gb)(n, i, l))) && void 0 !== t ? t : null
                                        }
                                    },
                                    onChange: j,
                                    hint: ce.Z.Messages.GUILD_EVENT_CHANGE_IMAGE,
                                    showRemoveButton: !1,
                                    enabled: !0
                                }), (0, r.jsx)(o.Button, {
                                    size: o.Button.Sizes.SMALL,
                                    onClick: function() {
                                        return O(null)
                                    },
                                    children: ce.Z.Messages.GUILD_EVENT_REMOVE_IMAGE
                                })]
                            }) : (0, r.jsxs)(o.Button, {
                                size: o.Button.Sizes.SMALL,
                                children: [ce.Z.Messages.GUILD_EVENT_ADD_IMAGE, (0, r.jsx)(He.ZP, {
                                    onChange: j
                                })]
                            })]
                        }), (0, r.jsx)(ln, {
                            editBroadcastInfoData: s
                        })]
                    })]
                })
            }
            var sn = t(766050),
                un = t.n(sn);

            function cn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function dn(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        cn(e, n, t[n])
                    }))
                }
                return e
            }

            function fn(e, n) {
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

            function En(e, n) {
                if (null == e) return {};
                var t, r, a = function(e, n) {
                    if (null == e) return {};
                    var t, r, a = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || (a[t] = e[t])
                    }
                    return a
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) {
                        t = l[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])
                    }
                }
                return a
            }

            function vn(e) {
                var n = e.isSlideReady,
                    t = En(e, ["isSlideReady"]);
                return (0, r.jsxs)("div", {
                    className: un().slideContainer,
                    children: [(0, r.jsxs)("div", {
                        className: un().header,
                        children: [(0, r.jsx)(o.Heading, {
                            variant: "heading-xl/semibold",
                            children: ce.Z.Messages.GUILD_EVENT_CREATE_HEADER
                        }), (0, r.jsx)(o.Text, {
                            color: "header-secondary",
                            className: un().text,
                            variant: "text-sm/normal",
                            children: ce.Z.Messages.GUILD_EVENT_CREATE_BODY
                        })]
                    }), (0, r.jsx)(on, fn(dn({}, t), {
                        canSetFocus: n
                    }))]
                })
            }
            var hn = t(641453),
                yn = t(855350),
                gn = t(625751),
                pn = t(811622),
                mn = t(832642),
                Tn = t(869160),
                In = t(890251),
                _n = t(189865),
                bn = t(652591),
                xn = t(691797),
                Nn = t(894692),
                Sn = t.n(Nn),
                An = P.ZP.INVITE_OPTIONS_7_DAYS,
                On = P.ZP.INVITE_OPTIONS_UNLIMITED;

            function Cn(e) {
                var n, t = e.onClose,
                    a = e.event,
                    i = null == a ? void 0 : a.guild_id,
                    s = (0, l.e7)([S.ZP], (function() {
                        var e;
                        return null != i ? null === (e = S.ZP.getDefaultChannel(i)) || void 0 === e ? void 0 : e.id : null
                    }), [i]),
                    u = (0, l.e7)([A.Z], (function() {
                        return A.Z.getGuild(i)
                    }), [i]),
                    c = null != (null == u ? void 0 : u.vanityURLCode) && (null == u ? void 0 : u.vanityURLCode.length) > 0,
                    d = yn.Z.useExperiment({
                        guildId: null != i ? i : "",
                        location: "bd50e8_1"
                    }, {
                        autoTrackExposure: c
                    }).enabled,
                    f = null != a ? a : {},
                    v = f.channel_id,
                    h = f.id,
                    y = (0, l.e7)([Tn.Z], (function() {
                        var e = null != v ? v : s;
                        return null == e ? null : Tn.Z.getInvite(e)
                    }), [v, s]);
                if (null == a) {
                    t();
                    return null
                }
                var g, p, m = d && null !== (n = null == u ? void 0 : u.vanityURLCode) && void 0 !== n ? n : null == y ? void 0 : y.code,
                    T = null != m ? (0, hn.tV)({
                        baseCode: m,
                        guildScheduledEventId: h
                    }) : null,
                    I = null == T || null == y,
                    _ = (0,
                        gn.Z)(null != T ? T : ""),
                    b = null !== (g = null == y ? void 0 : y.maxAge) && void 0 !== g ? g : An.value,
                    x = null !== (p = null == y ? void 0 : y.maxUses) && void 0 !== p ? p : On.value;
                return (0, r.jsxs)("div", {
                    className: Sn().container,
                    children: [(0, r.jsx)(o.Clickable, {
                        onClick: t,
                        className: Sn().close,
                        "aria-label": ce.Z.Messages.CLOSE,
                        children: (0, r.jsx)(_n.Z, {})
                    }), (0, r.jsx)(mn.Z, {
                        children: (0, r.jsx)("div", {
                            className: Sn().iconContainer,
                            children: (0, r.jsx)(In.Z, {
                                height: 30,
                                width: 30,
                                className: Sn().icon
                            })
                        })
                    }), (0, r.jsx)(o.Heading, {
                        variant: "heading-xl/semibold",
                        className: Sn().header,
                        children: ce.Z.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
                    }), (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: Sn().body,
                        children: ce.Z.Messages.GUILD_EVENT_CREATED_MODAL_BODY
                    }), (0, r.jsxs)("div", {
                        className: Sn().invite,
                        children: [(0, r.jsx)(pn.S, {
                            value: _,
                            autoFocus: !1,
                            onCopy: function(e) {
                                if (!I) {
                                    (0, xn.JG)(e);
                                    var n = (0, X.xC)(a.entity_type);
                                    bn.default.track(E.rMx.COPY_INSTANT_INVITE, {
                                        server: a.guild_id,
                                        channel: v,
                                        channel_type: n,
                                        location: E.t4x.GUILD_EVENTS,
                                        code: y.code,
                                        guild_scheduled_event_id: null == a ? void 0 : a.id
                                    })
                                }
                            }
                        }), null == (null == u ? void 0 : u.vanityURLCode) && (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: Sn().inviteDetail,
                            children: (0, P.Vg)(b, x)
                        })]
                    })]
                })
            }

            function jn(e) {
                var n = e.entityType,
                    t = e.channelId,
                    r = (0, X.xV)(e);
                return null == n ? "An event type must be specified." : null != r && "" !== r.trim() || null != t ? void 0 : "Either a location or channel must be specified."
            }

            function Ln(e, n) {
                var t = (0, Xe.v1)(e),
                    r = e.entityType;
                if (null == t || null == (null == t ? void 0 : t.startDate)) return ce.Z.Messages.GUILD_EVENT_START_DATE_REQUIRED;
                var a = t.startDate,
                    l = t.endDate;
                return r === ge.WX.EXTERNAL && null == l ? ce.Z.Messages.GUILD_EVENT_END_DATE_REQUIRED : !n && a.isBefore(K()()) ? ce.Z.Messages.GUILD_EVENT_PAST_START_DATE : null != l && null != a && l.isBefore(a) ? ce.Z.Messages.GUILD_EVENT_END_DATE_BEFORE_START_DATE : null != l && l.isBefore(K()()) ? ce.Z.Messages.GUILD_EVENT_PAST_END_DATE_1 : void 0
            }
            var Dn = t(161248),
                Mn = t.n(Dn);

            function Zn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function wn(e, n, t, r, a, l, o) {
                try {
                    var i = e[l](o),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function Pn(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var l = e.apply(n, t);

                        function o(e) {
                            wn(l, r, a, o, i, "next", e)
                        }

                        function i(e) {
                            wn(l, r, a, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function Gn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Rn(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Zn(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Zn(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Vn, Un = function(e, n) {
                    var t, r, a, l, o = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return l = {
                        next: i(0),
                        throw: i(1),
                        return: i(2)
                    }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                        return this
                    }), l;

                    function i(l) {
                        return function(i) {
                            return function(l) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                    (r = 0, a) && (l = [2 & l[0], a.value]);
                                    switch (l[0]) {
                                        case 0:
                                        case 1:
                                            a = l;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: l[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = l[1];
                                            l = [0];
                                            continue;
                                        case 7:
                                            l = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                                o.label = l[1];
                                                break
                                            }
                                            if (6 === l[0] && o.label < a[1]) {
                                                o.label = a[1];
                                                a = l;
                                                break
                                            }
                                            if (a && o.label < a[2]) {
                                                o.label = a[2];
                                                o.ops.push(l);
                                                break
                                            }
                                            a[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    l = n.call(e, o)
                                } catch (e) {
                                    l = [6, e];
                                    r = 0
                                } finally {
                                    t = a = 0
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                }
                            }([l, i])
                        }
                    }
                },
                kn = P.ZP.INVITE_OPTIONS_7_DAYS,
                Bn = P.ZP.INVITE_OPTIONS_UNLIMITED,
                Hn = 100;
            ! function(e) {
                e[e.ENTITY = 0] = "ENTITY";
                e[e.SETTINGS = 1] = "SETTINGS";
                e[e.PREVIEW = 2] = "PREVIEW";
                e[e.SUCCESS = 3] = "SUCCESS"
            }(Vn || (Vn = {}));

            function Fn(e) {
                var n = e.modal,
                    t = a.useContext(u.E).createMultipleConfetti;
                a.useEffect((function() {
                    var e = null == n ? void 0 : n.getScrollerNode();
                    if (null != e) {
                        var r = e.getBoundingClientRect();
                        t({
                            position: {
                                type: "static-random",
                                minValue: {
                                    x: r.left - Hn,
                                    y: r.top - Hn
                                },
                                maxValue: {
                                    x: r.left + Hn,
                                    y: r.top + Hn
                                }
                            },
                            velocity: {
                                type: "static-random",
                                minValue: {
                                    x: -20,
                                    y: -20
                                },
                                maxValue: {
                                    x: -60,
                                    y: -60
                                }
                            }
                        }, 80);
                        t({
                            position: {
                                type: "static-random",
                                minValue: {
                                    x: r.right - Hn,
                                    y: r.top - Hn
                                },
                                maxValue: {
                                    x: r.right + Hn,
                                    y: r.top + Hn
                                }
                            },
                            velocity: {
                                type: "static-random",
                                minValue: {
                                    x: 20,
                                    y: -20
                                },
                                maxValue: {
                                    x: 60,
                                    y: -60
                                }
                            }
                        }, 80)
                    }
                }), [t, n]);
                return null
            }

            function Wn(e) {
                var n = e.guildId,
                    t = e.guildEvent,
                    i = e.guildEventId,
                    u = e.editBroadcastInfoData,
                    c = e.isEdit,
                    d = e.formErrors,
                    f = e.transitionState,
                    E = e.loading,
                    v = e.error,
                    h = e.onChange,
                    y = e.onSave,
                    g = e.onClose,
                    p = e.createdEvent,
                    m = (0, w.Dt)(),
                    T = a.useMemo((function() {
                        return [{
                            slideId: Vn.ENTITY,
                            label: ce.Z.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
                            valid: null == d.entity,
                            userErrorMessage: d.entity
                        }, {
                            slideId: Vn.SETTINGS,
                            label: ce.Z.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
                            valid: null == d.schedule && null == d.topic,
                            userErrorMessage: d.schedule
                        }, {
                            slideId: Vn.PREVIEW,
                            label: ce.Z.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
                            valid: !0
                        }]
                    }), [d]),
                    I = Object.keys(Vn).length,
                    _ = (0, R.xt)(t) ? Vn.SETTINGS : Vn.ENTITY,
                    b = function(e) {
                        return Math.max(0, Math.min(e, I - 1))
                    },
                    x = Rn(a.useState(_), 2),
                    N = x[0],
                    S = x[1],
                    A = Rn(a.useState(!1), 2),
                    O = A[0],
                    C = A[1],
                    j = a.useMemo((function() {
                        return T.slice(0, N + 1).map((function(e) {
                            return e.valid
                        })).every(Boolean)
                    }), [T, N]),
                    L = N >= T.length ? Vn.SUCCESS : T[b(N)].slideId,
                    D = L === Vn.SUCCESS;
                (0, z.l)((function(e) {
                    return e.onUpdateCanCloseModal
                }))(D);
                var M = (0, l.e7)([s.Z], (function() {
                        return s.Z.useReducedMotion
                    })),
                    P = a.useRef(null),
                    G = function(e) {
                        C(!1);
                        S(b(e))
                    };
                a.useEffect((function() {
                    null != p && G(Vn.SUCCESS)
                }), [null == p ? void 0 : p.id, G]);
                var V = function() {
                        if (j) {
                            L === Vn.PREVIEW ? y() : D ? g() : G(N + 1)
                        }
                    },
                    U = function() {
                        G(N - 1)
                    },
                    k = ce.Z.Messages.NEXT;
                L === Vn.PREVIEW && (k = c ? ce.Z.Messages.SAVE_EVENT : ce.Z.Messages.SCHEDULE_EVENT);
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(o.ModalRoot, {
                        transitionState: f,
                        "aria-labelledby": m,
                        size: o.ModalSize.DYNAMIC,
                        children: [!M && D ? (0, r.jsx)(Fn, {
                            modal: P.current
                        }) : null, (0, r.jsxs)(o.ModalContent, {
                            className: Mn().content,
                            scrollerRef: P,
                            children: [!D && (0, r.jsx)(Z, {
                                steps: T.map((function(e) {
                                    return e.label
                                })),
                                stepIndex: N,
                                onClick: function(e) {
                                    e < N ? U() : e > N && V()
                                }
                            }), (0, r.jsxs)(o.Slides, {
                                activeSlide: L,
                                width: 440,
                                onSlideReady: function(e) {
                                    C(e === L)
                                },
                                children: [(0, r.jsx)(o.Slide, {
                                    id: Vn.ENTITY,
                                    children: (0, r.jsx)(Ze, {
                                        guildId: n,
                                        guildEvent: t,
                                        validationErrorMessage: d.entity,
                                        isSlideReady: O,
                                        onChange: h
                                    })
                                }), (0, r.jsx)(o.Slide, {
                                    id: Vn.SETTINGS,
                                    children: (0, r.jsx)(vn, {
                                        guildEvent: t,
                                        guildEventId: i,
                                        guildId: n,
                                        editBroadcastInfoData: u,
                                        onChange: h,
                                        error: v,
                                        validationErrorMessage: d.schedule,
                                        isSlideReady: O
                                    })
                                }), (0, r.jsx)(o.Slide, {
                                    id: Vn.PREVIEW,
                                    children: (0, r.jsx)(ke, {
                                        guildId: n,
                                        guildEvent: t,
                                        guildEventId: i,
                                        error: v
                                    })
                                }), (0, r.jsx)(o.Slide, {
                                    id: Vn.SUCCESS,
                                    children: (0, r.jsx)(Cn, {
                                        onClose: g,
                                        event: p
                                    })
                                })]
                            })]
                        }), !D && (0, r.jsxs)(o.ModalFooter, {
                            className: Mn().footer,
                            children: [(0, r.jsxs)("div", {
                                className: Mn().inline,
                                children: [(0, r.jsx)(o.Button, {
                                    color: o.Button.Colors.PRIMARY,
                                    onClick: g,
                                    children: ce.Z.Messages.CANCEL
                                }), (0, r.jsx)(o.Button, {
                                    onClick: V,
                                    disabled: !j,
                                    className: Mn().button,
                                    submitting: E,
                                    children: k
                                })]
                            }), L !== Vn.ENTITY && (0, r.jsx)(o.Button, {
                                look: o.Button.Looks.LINK,
                                size: o.Button.Sizes.MIN,
                                onClick: U,
                                color: o.Button.Colors.LINK,
                                children: ce.Z.Messages.BACK
                            })]
                        })]
                    })
                })
            }

            function Yn(e) {
                var n = e.guildId,
                    t = e.guildScheduledEventId,
                    o = e.transitionState,
                    s = e.onClose,
                    u = (0, l.e7)([A.Z], (function() {
                        return A.Z.getGuild(n)
                    })),
                    d = (0, l.e7)([R.ZP], (function() {
                        return R.ZP.getGuildScheduledEvent(t)
                    }), [t]),
                    f = (0, l.e7)([S.ZP], (function() {
                        return S.ZP.getDefaultChannel(n)
                    }), [n]),
                    v = (0, Y.j$)(u, d, f),
                    h = Rn(a.useState(v), 2),
                    y = h[0],
                    g = h[1],
                    p = Rn(a.useState((0, Y.Ql)(d)), 1)[0],
                    m = Rn(a.useState(null), 2),
                    T = m[0],
                    I = m[1],
                    _ = N(u, null == d ? void 0 : d.id, y),
                    b = Rn((0, G.Z)(Pn((function() {
                        var e, r;
                        return Un(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (null != T) return [2];
                                    e = {
                                        broadcastToDirectoryChannels: _.broadcastToDirectoryChannels
                                    };
                                    return p && null != t ? [4, V.Z.saveEvent(t, y, n, e)] : [3, 2];
                                case 1:
                                    a.sent();
                                    return [2, s()];
                                case 2:
                                    return [4, V.Z.createGuildEvent(y, n, e)];
                                case 3:
                                    ! function(e) {
                                        var n, t = (0, c.so)(e),
                                            r = null !== (n = e.channel_id) && void 0 !== n ? n : null == f ? void 0 : f.id;
                                        null != r && i.Z.createInvite(r, {
                                            max_age: kn.value,
                                            max_uses: Bn.value
                                        }, E.t4x.GUILD_EVENTS);
                                        t ? I(e) : s()
                                    }((r = a.sent()).body);
                                    return [2, r]
                            }
                        }))
                    }))), 2),
                    x = b[0],
                    O = b[1],
                    C = O.loading,
                    j = O.error,
                    L = a.useMemo((function() {
                        return function(e, n) {
                            return {
                                entity: jn(e),
                                schedule: Ln(e, n),
                                topic: (t = e, r = t.name, null == r || "" === r.trim() ? "Topic must be specified." : void 0)
                            };
                            var t, r
                        }(y, p)
                    }), [y, p]);
                return (0, r.jsx)(Wn, {
                    guildId: n,
                    guildEvent: y,
                    guildEventId: t,
                    editBroadcastInfoData: _,
                    isEdit: p,
                    formErrors: L,
                    transitionState: o,
                    loading: C,
                    error: j,
                    onChange: function(e) {
                        if (null != e.entityType) {
                            var t, r = (0, X.xC)(e.entityType),
                                a = Rn(F(n, r), 1)[0];
                            e.channelId = null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : null;
                            e.entityType !== ge.WX.EXTERNAL && y.entityType === ge.WX.EXTERNAL && (e.entityMetadata = null)
                        }
                        g((function(n) {
                            return function(e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        r = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))));
                                    r.forEach((function(n) {
                                        Gn(e, n, t[n])
                                    }))
                                }
                                return e
                            }({}, n, e)
                        }))
                    },
                    onSave: x,
                    onClose: s,
                    createdEvent: T
                })
            }
        },
        855350: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => r
            });
            const r = (0, t(260561).B)({
                kind: "guild",
                id: "2022-11_default_to_server_vanity_v2",
                label: "Default To Server Vanity v2",
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
            })
        },
        811622: (e, n, t) => {
            "use strict";
            t.d(n, {
                I: () => w,
                S: () => Z
            });
            var r = t(785893),
                a = t(667294),
                l = t(294184),
                o = t.n(l),
                i = t(816810),
                s = t(202351),
                u = t(513328),
                c = t(70418),
                d = t(464187),
                f = t(793461),
                E = t(652591),
                v = t(691797),
                h = t(661123),
                y = t(786502),
                g = t(703790),
                p = t(682776),
                m = t(2590),
                T = t(473708),
                I = t(138646),
                _ = t.n(I);

            function b(e) {
                var n = e.guild,
                    t = e.error,
                    l = e.onClose,
                    o = n.id,
                    i = a.useCallback((function() {
                        l();
                        g.Z.open(o, m.pNK.INSTANT_INVITES)
                    }), [o, l]),
                    s = a.useCallback((function(e) {
                        return (0, r.jsx)(c.Clickable, {
                            className: _().errorLink,
                            onClick: i,
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-link",
                                tag: "span",
                                children: e
                            })
                        })
                    }), [i]),
                    u = a.useCallback((function(e) {
                        return (0, r.jsx)(c.Anchor, {
                            href: m.EYA.INVITES_HELP,
                            target: "_blank",
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-link",
                                tag: "span",
                                children: e
                            })
                        })
                    }), []),
                    d = t.code === m.evJ.TOO_MANY_INVITES ? p.Z.can(m.Plq.MANAGE_GUILD, n) ? T.Z.Messages.TOO_MANY_INVITES_ERROR.format({
                        inviteListHook: s,
                        inviteHelpHook: u
                    }) : T.Z.Messages.TOO_MANY_INVITES_ERROR_MEMBER : t.getAnyErrorMessage();
                return (0, r.jsx)(c.Text, {
                    className: _().errorMessage,
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: d
                })
            }
            var x = t(718634),
                N = t(229481),
                S = t.n(N),
                A = t(3066),
                O = t.n(A),
                C = t(380203),
                j = t.n(C);

            function L(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function D(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function M(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return L(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return L(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Z = s.ZP.connectStores([f.Z], (function() {
                    return {
                        hideValue: f.Z.hideInstantInvites
                    }
                }))((function(e) {
                    var n = e.value,
                        t = e.autoFocus,
                        l = e.hideValue,
                        i = e.onCopy,
                        s = e.disabled,
                        d = M(a.useState(!1), 2),
                        f = d[0],
                        E = d[1],
                        h = M(a.useState(!1), 2),
                        y = h[0],
                        g = h[1],
                        p = a.useMemo((function() {
                            return new u.sW(1e3, (function() {
                                return g(!1)
                            }))
                        }), [g]);
                    a.useEffect((function() {
                        return function() {
                            p.cancel()
                        }
                    }), [p]);
                    var m;
                    return (0, r.jsxs)("div", {
                        className: o()(S().input, O().flexJustifyBetween, O().flexCenter, (m = {}, D(m, S().success, y), D(m, S().focused, f), m)),
                        children: [(0, r.jsx)(c.TextInput, {
                            className: _().copyInput,
                            name: "invite",
                            value: l ? T.Z.Messages.INSTANT_INVITE_HIDDEN : n,
                            editable: !1,
                            inputClassName: _().noBorder,
                            autoFocus: t,
                            onFocus: function() {
                                return t ? E(!0) : null
                            },
                            onBlur: function() {
                                return t ? E(!1) : null
                            },
                            spellCheck: "false",
                            onClick: function(e) {
                                return e.currentTarget.select()
                            },
                            "aria-label": T.Z.Messages.FORM_LABEL_INVITE_LINK,
                            disabled: s
                        }), v.wS ? (0, r.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            color: y ? c.Button.Colors.GREEN : c.Button.Colors.BRAND,
                            className: _().copyButton,
                            onClick: function() {
                                g(!0);
                                p.delay();
                                i(n)
                            },
                            disabled: s,
                            children: y ? T.Z.Messages.INVITE_COPIED : T.Z.Messages.COPY
                        }) : null]
                    })
                })),
                w = function(e) {
                    var n = e.guild,
                        t = e.noInvitesAvailable,
                        l = e.showFriends,
                        s = e.onClose,
                        u = e.modalState,
                        f = e.isGuestInviteCreationToggleEnabled,
                        g = e.inviteFlags,
                        p = e.setInviteFlags,
                        I = e.showGuestInviteToggleForCurrentVoiceChannel,
                        N = e.copyValue,
                        S = e.changePage,
                        A = e.inviteChannel,
                        O = e.source,
                        C = e.code,
                        L = e.guildScheduledEvent,
                        D = e.disabled,
                        M = u.maxAge,
                        w = u.maxUses,
                        P = u.networkError,
                        G = u.showVanityURL,
                        R = a.useCallback((function() {
                            (0, v.JG)(N);
                            E.default.track(m.rMx.COPY_INSTANT_INVITE, {
                                server: d.Z.getGuildId(),
                                channel: null == A ? void 0 : A.id,
                                channel_type: null == A ? void 0 : A.type,
                                location: O,
                                code: C,
                                guild_scheduled_event_id: null == L ? void 0 : L.id
                            })
                        }), [N, A, O, C, L]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(Z, {
                            value: N,
                            autoFocus: l,
                            onCopy: R,
                            disabled: D
                        }), f ? (0, r.jsx)("div", {
                            className: _().temporaryMembershipContainerBackground,
                            children: (0, r.jsx)(c.FormSwitch, {
                                className: _().temporaryMembershipContainer,
                                value: (0, h.yE)(g, i.$.IS_GUEST_INVITE),
                                onChange: function(e) {
                                    return p((0, h.mB)(g, i.$.IS_GUEST_INVITE, e))
                                },
                                note: T.Z.Messages.GUEST_MEMBERSHIP_EXPLANATION,
                                disabled: D,
                                hideBorder: !0,
                                children: I ? T.Z.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : T.Z.Messages.GRANT_GUEST_MEMBERSHIP
                            })
                        }) : null, t || G ? null : (0, r.jsxs)(c.Text, {
                            variant: "text-xs/normal",
                            className: o()(j().marginTop8, _().footerText),
                            children: [(0, y.Vg)(M, w), " ", l ? (0, r.jsx)(c.Anchor, {
                                onClick: function() {
                                    return S(x.RV.SETTINGS)
                                },
                                children: T.Z.Messages.INVITE_EDIT_LINK
                            }) : null]
                        }), !t && l && G ? (0, r.jsxs)(c.Text, {
                            variant: "text-xs/normal",
                            className: o()(j().marginTop8, _().footerText),
                            children: [T.Z.Messages.INVITE_VANITY_USED, " ", (0, r.jsx)(c.Anchor, {
                                onClick: function() {
                                    return S(x.RV.SETTINGS)
                                },
                                children: T.Z.Messages.INVITE_EDIT_LINK
                            })]
                        }) : null, null != P ? (0, r.jsx)(b, {
                            guild: n,
                            error: P,
                            onClose: s
                        }) : null]
                    })
                }
        },
        474236: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => u
            });
            var r = t(667294),
                a = t(347365);

            function l(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function o(e, n, t, r, a, l, o) {
                try {
                    var i = e[l](o),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, a)
            }

            function i(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return l(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = function(e, n) {
                var t, r, a, l, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function i(l) {
                    return function(i) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                (r = 0, a) && (l = [2 & l[0], a.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        a = l;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = l;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(l);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                l = n.call(e, o)
                            } catch (e) {
                                l = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, i])
                    }
                }
            };

            function u(e, n) {
                var t, l, u = i(r.useState(!1), 2),
                    c = u[0],
                    d = u[1],
                    f = i(r.useState(null), 2),
                    E = f[0],
                    v = f[1],
                    h = (l = (t = function() {
                        var t, r, l;
                        return s(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    d(!0);
                                    v(null);
                                    o.label = 1;
                                case 1:
                                    o.trys.push([1, 3, , 4]);
                                    return [4, e()];
                                case 2:
                                    t = o.sent();
                                    d(!1);
                                    v(null);
                                    return [2, t];
                                case 3:
                                    r = o.sent();
                                    l = new a.Hx(r);
                                    null == n || n(l);
                                    v(l);
                                    d(!1);
                                    return [2, null];
                                case 4:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, a) {
                            var l = t.apply(e, n);

                            function i(e) {
                                o(l, r, a, i, s, "next", e)
                            }

                            function s(e) {
                                o(l, r, a, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }), function() {
                        return l.apply(this, arguments)
                    });
                return [h, {
                    loading: c,
                    error: E
                }]
            }
        }
    }
]);