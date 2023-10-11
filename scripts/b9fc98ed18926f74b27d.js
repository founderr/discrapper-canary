"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [27477], {
        833874: (e, t, n) => {
            n.d(t, {
                Z: () => C
            });
            var r = n(785893),
                o = n(667294),
                a = n(496486),
                s = n.n(a),
                l = n(304548),
                u = n(634698),
                i = n(149660),
                c = n(441093),
                E = n(107364),
                f = n(443812),
                d = n(843133),
                b = n(98265),
                h = n(348592),
                p = n(629438),
                m = n(494579),
                T = n(473708),
                _ = n(839319),
                D = n.n(_);

            function v(e, t) {
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
                        var r, o, a = [],
                            s = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return a
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

            function L() {
                return (0, r.jsx)(l.Text, {
                    className: D().helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: T.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: h.Z.getSubmitRequestURL()
                    })
                })
            }

            function C(e) {
                var t = e.header,
                    n = e.body,
                    a = e.problems,
                    h = e.transitionState,
                    _ = e.feedbackProblems,
                    v = void 0 === _ ? [] : _,
                    C = e.otherKey,
                    g = e.hasCloseButton,
                    A = e.onSubmit,
                    I = e.onClose,
                    O = e.canDismissForever,
                    x = void 0 === O || O,
                    S = e.showHelpdeskLink,
                    M = void 0 === S || S,
                    Z = (0, u.Z)(a),
                    k = y(o.useState(!1), 2),
                    B = k[0],
                    j = k[1],
                    N = y(o.useState(null), 2),
                    R = N[0],
                    w = N[1],
                    F = y(o.useState(s().shuffle(a)), 2),
                    U = F[0],
                    G = F[1],
                    K = y(o.useState(""), 2),
                    P = K[0],
                    H = K[1],
                    z = (0,
                        f.Dt)(),
                    V = (0, d.Z)(B),
                    Y = (0, d.Z)(R),
                    W = (0, d.Z)(A),
                    q = (0, d.Z)(P),
                    $ = null != R && v.includes(R);
                o.useEffect((function() {
                    s().isEqual(Z, a) || G((0, p.B)(a, C))
                }), [a, Z, C]);
                o.useEffect((function() {
                    return function() {
                        W.current({
                            problem: Y.current,
                            dontShowAgain: V.current,
                            feedback: q.current
                        })
                    }
                }), []);
                return (0, r.jsxs)(l.ModalRoot, {
                    transitionState: h,
                    className: D().modalRoot,
                    "aria-labelledby": z,
                    children: [(0, r.jsx)(i.Z, {}), (0, r.jsxs)(l.ModalHeader, {
                        separator: !1,
                        className: D().headerContainer,
                        children: [(0, r.jsx)(b.Z, {
                            id: z,
                            className: D().header,
                            color: b.Z.Colors.CUSTOM,
                            size: b.Z.Sizes.SIZE_24,
                            children: t
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: D().ratingBody,
                            children: n
                        }), g ? (0, r.jsx)(l.ModalCloseButton, {
                            className: D().modalCloseButton,
                            onClick: I
                        }) : null]
                    }), (0, r.jsxs)(l.ModalContent, {
                        className: D().content,
                        children: [$ ? null : (0, r.jsx)(l.FormItem, {
                            className: D().problemInfo,
                            children: (0, r.jsx)(c.Z, {
                                options: U,
                                onClick: function(e) {
                                    var t = e.value;
                                    w(t);
                                    v.includes(t) || I()
                                }
                            })
                        }), $ ? (0, r.jsxs)(l.FormItem, {
                            title: T.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: D().problemInfo,
                            children: [(0, r.jsx)(l.TextArea, {
                                value: P,
                                maxLength: m.iF,
                                onChange: H
                            }), M ? (0, r.jsx)(L, {}) : null]
                        }) : null]
                    }), x || $ ? (0, r.jsx)(l.ModalFooter, {
                        className: D().footer,
                        direction: E.Z.Direction.HORIZONTAL,
                        children: $ ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(l.Button, {
                                size: l.Button.Sizes.SMALL,
                                look: l.Button.Looks.LINK,
                                color: l.Button.Colors.PRIMARY,
                                onClick: function() {
                                    w(null);
                                    H("")
                                },
                                children: T.Z.Messages.BACK
                            }), (0, r.jsx)(l.Button, {
                                size: l.Button.Sizes.SMALL,
                                onClick: I,
                                children: T.Z.Messages.SUBMIT
                            })]
                        }) : x ? (0, r.jsx)(l.Checkbox, {
                            size: 18,
                            type: l.Checkbox.Types.INVERTED,
                            value: B,
                            onChange: function() {
                                return j(!B)
                            },
                            children: (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: T.Z.Messages.DONT_SHOW_AGAIN
                            })
                        }) : null
                    }) : null]
                })
            }
        },
        149660: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(667294),
                o = n(792800),
                a = n(120415),
                s = n(473708);

            function l() {
                r.useEffect((function() {
                    a.FB || (0, o.EM)({
                        messages: [s.Z.Messages.GO_LIVE_HEY, s.Z.Messages.GO_LIVE_LOOK, s.Z.Messages.GO_LIVE_LISTEN],
                        interval: 600,
                        count: 20,
                        onlyWhenBlurred: !0
                    })
                }), []);
                return null
            }
        },
        527477: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => D
            });
            var r = n(785893),
                o = n(667294),
                a = n(989824),
                s = n(418705),
                l = n(304548),
                u = n(515169),
                i = n(833874),
                c = n(652591),
                E = n(2590);
            var f, d = n(473708);
            ! function(e) {
                e.TOO_HARD = "Too hard";
                e.TEST = "Testing purposes";
                e.ACCIDENT = "Created on accident";
                e.TEMPLATE = "Curious about server/template";
                e.LONELY = "Empty server";
                e.INACTIVE = "Inactive server";
                e.OTHER = "Other"
            }(f || (f = {}));

            function b() {
                return [{
                    value: f.TOO_HARD,
                    label: d.Z.Messages.GUILD_DELETE_FEEDBACK_TOO_HARD
                }, {
                    value: f.TEST,
                    label: d.Z.Messages.GUILD_DELETE_FEEDBACK_TEST
                }, {
                    value: f.ACCIDENT,
                    label: d.Z.Messages.GUILD_DELETE_FEEDBACK_ACCIDENT
                }, {
                    value: f.TEMPLATE,
                    label: d.Z.Messages.GUILD_DELETE_FEEDBACK_TEMPLATE
                }, {
                    value: f.LONELY,
                    label: d.Z.Messages.GUILD_DELETE_FEEDBACK_LONELY
                }, {
                    value: f.INACTIVE,
                    label: d.Z.Messages.GUILD_DELETE_FEEDBACK_INACTIVE
                }, {
                    value: f.OTHER,
                    label: d.Z.Messages.GUILD_DELETE_FEEDBACK_OTHER
                }]
            }

            function h(e, t, n, r, o, a, s) {
                try {
                    var l = e[a](s),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function s(e) {
                            h(a, r, o, s, l, "next", e)
                        }

                        function l(e) {
                            h(a, r, o, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
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
            var T = function(e, t) {
                    var n, r, o, a, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
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
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    (r = 0, o) && (a = [2 & a[0], o.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            s.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            s.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = s.ops.pop();
                                            s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                s.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && s.label < o[1]) {
                                                s.label = o[1];
                                                o = a;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2];
                                                s.ops.push(a);
                                                break
                                            }
                                            o[2] && s.ops.pop();
                                            s.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, s)
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
                            }([a, l])
                        }
                    }
                },
                _ = [f.OTHER];

            function D(e) {
                var t = e.transitionState,
                    h = e.onClose,
                    D = e.guildId,
                    v = (0, a.Z)(b);
                o.useEffect((function() {
                    c.default.track(E.rMx.OPEN_MODAL, {
                        type: "Guild Delete Report"
                    })
                }), []);
                return (0, r.jsx)(i.Z, {
                    header: d.Z.Messages.GUILD_DELETE_FEEDBACK_HEADER,
                    body: d.Z.Messages.GUILD_DELETE_FEEDBACK_BODY,
                    problems: v,
                    feedbackProblems: _,
                    onSubmit: function(e) {
                        var t = e.problem,
                            o = e.dontShowAgain,
                            a = e.feedback;
                        o && (0, u.EW)(s.z$.GUILD_DELETE_FEEDBACK);
                        var i = null == t;
                        ! function(e, t, n, r) {
                            c.default.track(E.rMx.USER_REPORT_SUBMITTED, {
                                report_name: "Guild Deletion",
                                guild_id: e,
                                reason: t,
                                feedback: n,
                                skipped: r
                            })
                        }(D, t, a, i);
                        i || (0, l.openModalLazy)(p((function() {
                            var e, t;
                            return T(this, (function(o) {
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
                                                        m(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({
                                                body: d.Z.Messages.GUILD_DELETE_FEEDBACK_REPORT
                                            }, e))
                                        }]
                                }
                            }))
                        })))
                    },
                    onClose: h,
                    transitionState: t,
                    otherKey: f.OTHER
                })
            }
        }
    }
]);