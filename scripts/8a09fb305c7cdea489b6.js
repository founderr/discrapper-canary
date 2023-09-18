"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [6578], {
        833874: (e, t, n) => {
            n.d(t, {
                Z: () => T
            });
            var r = n(785893),
                o = n(667294),
                a = n(496486),
                l = n.n(a),
                s = n(882723),
                u = n(634698),
                i = n(149660),
                c = n(441093),
                E = n(107364),
                f = n(443812),
                d = n(843133),
                b = n(98265),
                h = n(348592),
                I = n(629438),
                C = n(494579),
                m = n(473708),
                A = n(424529),
                p = n.n(A);

            function _(e, t) {
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
                        var r, o, a = [],
                            l = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return a
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

            function D() {
                return (0, r.jsx)(s.Text, {
                    className: p().helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: m.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: h.Z.getSubmitRequestURL()
                    })
                })
            }

            function T(e) {
                var t = e.header,
                    n = e.body,
                    a = e.problems,
                    h = e.transitionState,
                    A = e.feedbackProblems,
                    _ = void 0 === A ? [] : A,
                    T = e.otherKey,
                    y = e.hasCloseButton,
                    L = e.onSubmit,
                    S = e.onClose,
                    N = e.canDismissForever,
                    O = void 0 === N || N,
                    g = e.showHelpdeskLink,
                    M = void 0 === g || g,
                    x = (0, u.Z)(a),
                    R = v(o.useState(!1), 2),
                    B = R[0],
                    Z = R[1],
                    U = v(o.useState(null), 2),
                    V = U[0],
                    k = U[1],
                    j = v(o.useState(l().shuffle(a)), 2),
                    F = j[0],
                    w = j[1],
                    G = v(o.useState(""), 2),
                    K = G[0],
                    P = G[1],
                    H = (0,
                        f.Dt)(),
                    z = (0, d.Z)(B),
                    W = (0, d.Z)(V),
                    Y = (0, d.Z)(L),
                    q = (0, d.Z)(K),
                    $ = null != V && _.includes(V);
                o.useEffect((function() {
                    l().isEqual(x, a) || w((0, I.B)(a, T))
                }), [a, x, T]);
                o.useEffect((function() {
                    return function() {
                        Y.current({
                            problem: W.current,
                            dontShowAgain: z.current,
                            feedback: q.current
                        })
                    }
                }), []);
                return (0, r.jsxs)(s.ModalRoot, {
                    transitionState: h,
                    className: p().modalRoot,
                    "aria-labelledby": H,
                    children: [(0, r.jsx)(i.Z, {}), (0, r.jsxs)(s.ModalHeader, {
                        separator: !1,
                        className: p().headerContainer,
                        children: [(0, r.jsx)(b.Z, {
                            id: H,
                            className: p().header,
                            color: b.Z.Colors.CUSTOM,
                            size: b.Z.Sizes.SIZE_24,
                            children: t
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: p().ratingBody,
                            children: n
                        }), y ? (0, r.jsx)(s.ModalCloseButton, {
                            className: p().modalCloseButton,
                            onClick: S
                        }) : null]
                    }), (0, r.jsxs)(s.ModalContent, {
                        className: p().content,
                        children: [$ ? null : (0, r.jsx)(s.FormItem, {
                            className: p().problemInfo,
                            children: (0, r.jsx)(c.Z, {
                                options: F,
                                onClick: function(e) {
                                    var t = e.value;
                                    k(t);
                                    _.includes(t) || S()
                                }
                            })
                        }), $ ? (0, r.jsxs)(s.FormItem, {
                            title: m.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: p().problemInfo,
                            children: [(0, r.jsx)(s.TextArea, {
                                value: K,
                                maxLength: C.iF,
                                onChange: P
                            }), M ? (0, r.jsx)(D, {}) : null]
                        }) : null]
                    }), O || $ ? (0, r.jsx)(s.ModalFooter, {
                        className: p().footer,
                        direction: E.Z.Direction.HORIZONTAL,
                        children: $ ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(s.Button, {
                                size: s.Button.Sizes.SMALL,
                                look: s.Button.Looks.LINK,
                                color: s.Button.Colors.PRIMARY,
                                onClick: function() {
                                    k(null);
                                    P("")
                                },
                                children: m.Z.Messages.BACK
                            }), (0, r.jsx)(s.Button, {
                                size: s.Button.Sizes.SMALL,
                                onClick: S,
                                children: m.Z.Messages.SUBMIT
                            })]
                        }) : O ? (0, r.jsx)(s.Checkbox, {
                            size: 18,
                            type: s.Checkbox.Types.INVERTED,
                            value: B,
                            onChange: function() {
                                return Z(!B)
                            },
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: m.Z.Messages.DONT_SHOW_AGAIN
                            })
                        }) : null
                    }) : null]
                })
            }
        },
        149660: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(667294),
                o = n(792800),
                a = n(120415),
                l = n(473708);

            function s() {
                r.useEffect((function() {
                    a.FB || (0, o.EM)({
                        messages: [l.Z.Messages.GO_LIVE_HEY, l.Z.Messages.GO_LIVE_LOOK, l.Z.Messages.GO_LIVE_LISTEN],
                        interval: 600,
                        count: 20,
                        onlyWhenBlurred: !0
                    })
                }), []);
                return null
            }
        },
        706578: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => A
            });
            var r = n(785893),
                o = n(667294),
                a = n(989824),
                l = n(418705),
                s = n(882723),
                u = n(896490),
                i = n(833874),
                c = n(652591),
                E = n(2590);
            var f, d = n(473708);
            ! function(e) {
                e.UNINTERESTED = "UNINTERESTED";
                e.ACCIDENT = "ACCIDENT";
                e.INACTIVE = "INACTIVE";
                e.UNCOMFORTABLE = "UNCOMFORTABLE";
                e.DISRUPTIVE = "DISRUPTIVE";
                e.OVERACTIVE = "OVERACTIVE";
                e.CONFUSING = "CONFUSING";
                e.OTHER = "OTHER"
            }(f || (f = {}));

            function b() {
                return [{
                    value: f.UNINTERESTED,
                    label: d.Z.Messages.GUILD_LEAVE_FEEDBACK_UNINTERESTED
                }, {
                    value: f.ACCIDENT,
                    label: d.Z.Messages.GUILD_LEAVE_FEEDBACK_ACCIDENT
                }, {
                    value: f.INACTIVE,
                    label: d.Z.Messages.GUILD_LEAVE_FEEDBACK_INACTIVE
                }, {
                    value: f.UNCOMFORTABLE,
                    label: d.Z.Messages.GUILD_LEAVE_FEEDBACK_UNCOMFORTABLE
                }, {
                    value: f.DISRUPTIVE,
                    label: d.Z.Messages.GUILD_LEAVE_FEEDBACK_DISRUPTIVE
                }, {
                    value: f.OVERACTIVE,
                    label: d.Z.Messages.GUILD_LEAVE_FEEDBACK_OVERACTIVE
                }, {
                    value: f.CONFUSING,
                    label: d.Z.Messages.GUILD_LEAVE_FEEDBACK_CONFUSING
                }, {
                    value: f.OTHER,
                    label: d.Z.Messages.GUILD_DELETE_FEEDBACK_OTHER
                }]
            }

            function h(e, t, n, r, o, a, l) {
                try {
                    var s = e[a](l),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function I(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function l(e) {
                            h(a, r, o, l, s, "next", e)
                        }

                        function s(e) {
                            h(a, r, o, l, s, "throw", e)
                        }
                        l(void 0)
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
            var m = function(e, t) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function s(a) {
                    return function(s) {
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
                        }([a, s])
                    }
                }
            };

            function A(e) {
                var t = e.transitionState,
                    h = e.onClose,
                    A = e.guildId,
                    p = e.guildName,
                    _ = (0, a.Z)(b);
                o.useEffect((function() {
                    c.default.track(E.rMx.OPEN_MODAL, {
                        type: "Guild Leave Report"
                    })
                }), []);
                return (0, r.jsx)(i.Z, {
                    header: d.Z.Messages.GUILD_LEAVE_FEEDBACK_HEADER,
                    body: d.Z.Messages.GUILD_LEAVE_FEEDBACK_BODY.format({
                        server: p
                    }),
                    problems: _,
                    onSubmit: function(e) {
                        var t = e.problem,
                            o = e.dontShowAgain,
                            a = e.feedback;
                        o && (0, u.EW)(l.z$.GUILD_LEAVE_FEEDBACK);
                        var i = null == t;
                        ! function(e, t, n, r) {
                            c.default.track(E.rMx.USER_REPORT_SUBMITTED, {
                                report_name: "Guild Leave",
                                guild_id: e,
                                reason: t,
                                feedback: n,
                                skipped: r
                            })
                        }(A, t, a, i);
                        i || (0, s.openModalLazy)(I((function() {
                            var e, t;
                            return m(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(21786)]).then(n.bind(n, 521786))];
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
                                                        C(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({
                                                body: d.Z.Messages.GUILD_LEAVE_FEEDBACK_REPORT
                                            }, e))
                                        }]
                                }
                            }))
                        })))
                    },
                    onClose: h,
                    transitionState: t,
                    otherKey: f.OTHER,
                    hasCloseButton: !0
                })
            }
        }
    }
]);
//# sourceMappingURL=8a09fb305c7cdea489b6.js.map