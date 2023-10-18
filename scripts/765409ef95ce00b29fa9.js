"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [36576], {
        152702: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(730381),
                a = n.n(r),
                o = n(327499);

            function l(e, t, n, r, a, o, l) {
                try {
                    var s = e[o](l),
                        i = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(i) : Promise.resolve(i).then(r, a)
            }
            var s = function(e, t) {
                var n, r, a, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                (r = 0, a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = l.trys,
                                                a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < a[1]) {
                                            l.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && l.label < a[2]) {
                                            l.label = a[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        a[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = t.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };
            const i = {
                setCommunicationDisabledDuration: function(e, t, n, r, i) {
                    return (u = function() {
                        var l;
                        return s(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    l = null != n ? a()().add(n, "s").toISOString() : null;
                                    return [4, o.Z.setCommunicationDisabledUntil({
                                        guildId: e,
                                        userId: t,
                                        communicationDisabledUntilTimestamp: l,
                                        duration: n,
                                        reason: r,
                                        location: i
                                    })];
                                case 1:
                                    s.sent();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, r) {
                            var a = u.apply(e, t);

                            function o(e) {
                                l(a, n, r, o, s, "next", e)
                            }

                            function s(e) {
                                l(a, n, r, o, s, "throw", e)
                            }
                            o(void 0)
                        }))
                    })();
                    var u
                }
            }
        },
        736576: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => S
            });
            var r = n(785893),
                a = n(667294),
                o = n(202351),
                l = n(70418),
                s = n(152702),
                i = n(19585),
                u = n(822003),
                c = n(473903),
                d = n(68543),
                f = n(443812),
                h = n(189865),
                b = n(652591),
                p = n(773148),
                v = n(515222),
                m = n(2590),
                I = n(473708),
                y = n(943799),
                _ = n.n(y);

            function C(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function N(e, t, n, r, a, o, l) {
                try {
                    var s = e[o](l),
                        i = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(i) : Promise.resolve(i).then(r, a)
            }

            function x(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function l(e) {
                            N(o, r, a, l, s, "next", e)
                        }

                        function s(e) {
                            N(o, r, a, l, s, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function U(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o = [],
                            l = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return C(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = function(e, t) {
                var n, r, a, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                (r = 0,
                                    a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = l.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < a[1]) {
                                            l.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && l.label < a[2]) {
                                            l.label = a[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        a[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = t.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };

            function A(e) {
                return {
                    value: e,
                    get label() {
                        var t;
                        return null === (t = (0, v.L9)(e)) || void 0 === t ? void 0 : t.toLocaleUpperCase()
                    }
                }
            }
            var T = [A(v.UK.DURATION_60_SEC), A(v.UK.DURATION_5_MIN), A(v.UK.DURATION_10_MIN), A(v.UK.DURATION_1_HOUR), A(v.UK.DURATION_1_DAY), A(v.UK.DURATION_1_WEEK)];

            function S(e) {
                var t, n, y = e.guildId,
                    C = e.userId,
                    N = e.anaylticsLocations,
                    A = e.transitionState,
                    S = e.onClose,
                    D = (0, f.Dt)(),
                    E = (0,
                        i.Z)().analyticsLocations,
                    O = null !== (n = null !== (t = null == N ? void 0 : N[0]) && void 0 !== t ? t : null == E ? void 0 : E[0]) && void 0 !== n ? n : null,
                    M = (0, o.e7)([c.default], (function() {
                        return c.default.getUser(C)
                    }), [C]),
                    w = U(a.useState(v.UK.DURATION_60_SEC), 2),
                    L = w[0],
                    R = w[1],
                    k = (0, u.sE)(y, {
                        location: O,
                        targetUserId: C
                    }),
                    j = U(a.useState(""), 2),
                    Z = j[0],
                    B = j[1],
                    P = U(a.useState(!1), 2),
                    G = P[0],
                    K = P[1],
                    H = a.useCallback(x((function() {
                        return g(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    if (null == M) return [2];
                                    K(!0);
                                    e.label = 1;
                                case 1:
                                    e.trys.push([1, 3, 4, 5]);
                                    return [4, s.Z.setCommunicationDisabledDuration(y, C, L, Z, O)];
                                case 2:
                                    e.sent();
                                    k(u.jQ.TIMEOUT);
                                    (0, l.showToast)((0, l.createToast)(I.Z.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
                                        user: p.ZP.getName(y, null, M)
                                    }), l.ToastType.SUCCESS));
                                    S();
                                    return [3, 5];
                                case 3:
                                    e.sent();
                                    (0, l.showToast)((0, l.createToast)(I.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, l.ToastType.FAILURE));
                                    return [3, 5];
                                case 4:
                                    K(!1);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    })), [y, M, C, S, L, Z, O, k]);
                a.useEffect((function() {
                    null != M && b.default.track(m.rMx.OPEN_MODAL, {
                        type: v.Cl,
                        guild_id: y,
                        other_user_id: M.id
                    })
                }), []);
                a.useEffect((function() {
                    null != M && null != y || S()
                }), [y, M, S]);
                return null == M || null == y ? null : (0, r.jsxs)(l.ModalRoot, {
                    transitionState: A,
                    "aria-labelledby": D,
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        className: _().header,
                        separator: !1,
                        children: [(0, r.jsx)(l.Heading, {
                            id: D,
                            variant: "heading-lg/semibold",
                            children: I.Z.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
                                user: p.ZP.getName(y, null, M)
                            })
                        }), (0, r.jsx)(l.Clickable, {
                            onClick: S,
                            className: _().closeButton,
                            "aria-label": I.Z.Messages.CLOSE,
                            children: (0, r.jsx)(h.Z, {
                                className: _().closeIcon,
                                width: 16,
                                height: 16
                            })
                        })]
                    }), (0, r.jsxs)(l.ModalContent, {
                        className: _().contentContainer,
                        children: [(0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            children: I.Z.Messages.DISABLE_GUILD_COMMUNICATION_BODY_HEADER.format({
                                helpdeskArticle: v.cu
                            })
                        }), (0, r.jsx)(l.Text, {
                            className: _().selectorHeader,
                            variant: "text-xs/semibold",
                            color: "interactive-normal",
                            children: I.Z.Messages.GUILD_COMMUNICATION_DISABLED_DURATION
                        }), (0, r.jsx)(d.Z, {
                            buttons: T.map((function(e) {
                                return function(e, t, n) {
                                    var a = e.value,
                                        o = e.label;
                                    return {
                                        content: (0, r.jsx)(l.Text, {
                                            variant: "text-xs/normal",
                                            className: t ? _().selectorTextSelected : _().selectorText,
                                            children: o
                                        }),
                                        className: t ? _().selectorButtonSelected : _().selectorButton,
                                        onClick: function() {
                                            return n(a)
                                        }
                                    }
                                }(e, e.value === L, R)
                            }))
                        }), (0, r.jsx)(l.Text, {
                            className: _().selectorHeader,
                            variant: "text-xs/semibold",
                            color: "interactive-normal",
                            children: I.Z.Messages.GUILD_COMMUNICATION_DISABLED_REASON
                        }), (0, r.jsx)(l.TextArea, {
                            value: Z,
                            onChange: function(e) {
                                return B(e)
                            },
                            placeholder: I.Z.Messages.GUILD_COMMUNICATION_DISABLED_REASON_PLACEHOLDER,
                            rows: 2,
                            maxLength: v.GN
                        })]
                    }), (0, r.jsxs)(l.ModalFooter, {
                        children: [(0, r.jsx)(l.Button, {
                            onClick: H,
                            color: l.Button.Colors.BRAND_NEW,
                            submitting: G,
                            children: I.Z.Messages.TIMEOUT_SUBMIT
                        }), (0, r.jsx)(l.Button, {
                            type: "button",
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            onClick: S,
                            children: I.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        68543: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                a = (n(667294), n(294184)),
                o = n.n(a),
                l = n(70418),
                s = n(237702),
                i = n.n(s),
                u = function(e) {
                    var t = e.data,
                        n = e.disabled,
                        a = t.content,
                        s = t.className,
                        u = t.onClick,
                        c = t.disabled;
                    return (0, r.jsx)(l.FocusRing, {
                        children: (0, r.jsx)("button", {
                            type: "button",
                            className: o()(i().item, s),
                            onClick: u,
                            disabled: n || c,
                            children: a
                        })
                    })
                };
            const c = function(e) {
                var t = e.buttons,
                    n = e.disabled,
                    a = e.className;
                return (0, r.jsx)("div", {
                    role: "group",
                    className: o()(i().group, a),
                    children: t.map((function(e, t) {
                        return (0, r.jsx)(u, {
                            data: e,
                            disabled: n
                        }, t)
                    }))
                })
            }
        }
    }
]);