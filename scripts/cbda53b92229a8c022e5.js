"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [69836], {
        69836: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => v
            });
            var r = n(785893),
                a = n(667294),
                o = n(70418),
                l = n(517454),
                i = n(443812),
                s = n(652591),
                u = n(2590);
            var c = n(494579),
                f = n(473708),
                d = n(120705),
                h = n.n(d);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t, n, r, a, o, l) {
                try {
                    var i = e[o](l),
                        s = i.value
                } catch (e) {
                    n(e);
                    return
                }
                i.done ? t(s) : Promise.resolve(s).then(r, a)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function l(e) {
                            y(o, r, a, l, i, "next", e)
                        }

                        function i(e) {
                            y(o, r, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function m(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o = [],
                            l = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
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
                        next: i(0),
                        throw: i(1),
                        return: i(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function i(o) {
                        return function(i) {
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
                            }([o, i])
                        }
                    }
                },
                S = [{
                    className: h().emojiThumbsUp,
                    rating: c.aZ.GOOD,
                    classNameSelected: h().selected
                }, {
                    className: h().emojiThumbsDown,
                    rating: c.aZ.BAD,
                    classNameSelected: h().selected
                }];

            function v(e) {
                var t = function(t) {
                        if (null != t) {
                            ! function(e) {
                                var t = e.rating,
                                    n = void 0 === t ? null : t;
                                s.default.track(u.rMx.SAFETY_USER_SENTIMENT_FEEDBACK_SUBMITTED, {
                                    rating: n
                                })
                            }({
                                rating: t
                            });
                            e.onClose();
                            (0, o.openModalLazy)(p((function() {
                                var e, t;
                                return g(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return [4, Promise.all([n.e(40532), n.e(21786)]).then(n.bind(n, 521786))];
                                        case 1:
                                            e = a.sent(), t = e.default;
                                            return [2, function(e) {
                                                return (0, r.jsx)(t, function(e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                        }))));
                                                        r.forEach((function(t) {
                                                            E(e, t, n[t])
                                                        }))
                                                    }
                                                    return e
                                                }({
                                                    body: f.Z.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_CONFIRMATION
                                                }, e))
                                            }]
                                    }
                                }))
                            })))
                        }
                    },
                    c = m(a.useState(null), 2),
                    d = c[0],
                    b = c[1],
                    y = (0, i.Dt)();
                return (0, r.jsxs)(o.ModalRoot, {
                    transitionState: e.transitionState,
                    "aria-labelledby": y,
                    children: [(0, r.jsxs)(o.ModalHeader, {
                        separator: !1,
                        className: h().headerContainer,
                        children: [(0, r.jsx)(o.Heading, {
                            id: y,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: f.Z.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_PROMPT
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            className: h().ratingBody,
                            children: f.Z.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_SUBHEADER
                        })]
                    }), (0, r.jsx)(o.ModalContent, {
                        className: h().modalBody,
                        children: (0, r.jsx)(l.L, {
                            ratingConfigs: S,
                            className: h().ratingsSelector,
                            selectedRating: d,
                            onChangeRating: function(e) {
                                b(e);
                                t(e)
                            }
                        })
                    }), (0, r.jsx)(o.ModalFooter, {
                        className: h().ratingsFooter,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: f.Z.Messages.SAFETY_USER_SENTIMENT_FOOTER.format({
                                safetyCenterUrl: u.EYA.SAFETY_CENTER
                            })
                        })
                    })]
                })
            }
        }
    }
]);