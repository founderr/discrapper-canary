(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [33970, 80372], {
        806872: (e, t, n) => {
            e.exports = n.p + "6b3cc6ff5c09de83cc37561a43304dee.mp4"
        },
        364142: (e, t, n) => {
            e.exports = n.p + "b6508869eb1b93a8e54729ac86985599.png"
        },
        850811: (e, t, n) => {
            e.exports = n.p + "62ac6016dc438a1fe4926ed43d3fe280.webm"
        },
        333970: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => N
            });
            var r, o = n(785893),
                a = n(667294),
                s = n(304548),
                l = n(327499),
                u = n(822003),
                i = n(136317),
                c = n(786170),
                f = n(773148),
                O = n(2590),
                d = n(473708),
                E = n(806683),
                p = n.n(E);

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t) {
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
                }(e, t) || m(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(e) {
                return function(e) {
                    if (Array.isArray(e)) return A(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || m(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, t) {
                if (e) {
                    if ("string" == typeof e) return A(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? A(e, t) : void 0
                }
            }! function(e) {
                e[e.INITIAL = 0] = "INITIAL";
                e[e.OTHER_REASON = 1] = "OTHER_REASON"
            }(r || (r = {}));

            function y() {
                return [{
                    value: 0,
                    label: d.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE
                }, {
                    value: 1 * O.UF9.HOUR,
                    label: d.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR
                }, {
                    value: 6 * O.UF9.HOUR,
                    label: d.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR
                }, {
                    value: 12 * O.UF9.HOUR,
                    label: d.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR
                }, {
                    value: 1 * O.UF9.DAY,
                    label: d.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR
                }, {
                    value: 3 * O.UF9.DAY,
                    label: d.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D
                }, {
                    value: 7 * O.UF9.DAY,
                    label: d.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D
                }]
            }
            var I = y()[1].value;

            function N(e) {
                var t = e.guildId,
                    E = e.user,
                    A = e.location,
                    m = e.userIds,
                    N = e.onBanMultiple,
                    _ = e.transitionState,
                    h = e.onClose,
                    g = e.canBulkBan,
                    v = void 0 !== g && g,
                    R = b(a.useState(I), 2),
                    T = R[0],
                    M = R[1],
                    j = b(a.useState(""), 2),
                    C = j[0],
                    L = j[1],
                    x = b(a.useState(r.INITIAL), 2),
                    P = x[0],
                    B = x[1],
                    H = b(a.useState(!1), 2),
                    w = H[0],
                    Z = H[1],
                    k = (0, u.sE)(t, {
                        location: A,
                        targetUserId: null == E ? void 0 : E.id,
                        targets: m
                    }),
                    D = a.useCallback((function() {
                        if (null != N) {
                            if (!(null != m && (null == m ? void 0 : m.size) > 0 && v) || w) return;
                            if ("" === C.trim() && !w) {
                                Z(!0);
                                return
                            }
                            N(t, S(m), T, C)
                        } else {
                            if (null == E) return;
                            l.Z.banUser(t, null == E ? void 0 : E.id, T, C)
                        }
                        k(u.jQ.BAN);
                        h()
                    }), [N, k, h, m, v, w, C, t, T, E]),
                    F = a.useCallback((function(e) {
                        M(e)
                    }), []),
                    U = a.useCallback((function(e) {
                        var t = e.value;
                        L(t);
                        Z(!1)
                    }), []),
                    Y = a.useCallback((function(e) {
                        L(e);
                        w && Z(!1)
                    }), [w]),
                    G = a.useCallback((function() {
                        L("");
                        B(r.OTHER_REASON)
                    }), []),
                    z = a.useCallback((function() {
                        B(r.INITIAL)
                    }), []),
                    K = [{
                        name: d.Z.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT,
                        value: d.Z.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT
                    }, {
                        name: d.Z.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT,
                        value: d.Z.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT
                    }, {
                        name: d.Z.Messages.BAN_REASON_OPTION_BREAKING_RULES,
                        value: d.Z.Messages.BAN_REASON_OPTION_BREAKING_RULES
                    }],
                    V = null != N && null != m ? d.Z.Messages.BAN_MULTIPLE_CONFIRM_TITLE.format({
                        count: null == m ? void 0 : m.size
                    }) : null == E ? "" : d.Z.Messages.BAN_CONFIRM_TITLE.format({
                        username: "@".concat(f.ZP.getName(t, null, E))
                    });
                return (0, o.jsxs)(s.ModalRoot, {
                    transitionState: _,
                    children: [(0, o.jsx)(s.ModalHeader, {
                        separator: !1,
                        children: (0, o.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            children: V
                        })
                    }), (0, o.jsxs)(s.ModalContent, {
                        className: p().modalContent,
                        children: [(0, o.jsxs)(c.Z, {
                            autoPlay: !0,
                            loop: !0,
                            className: p().spacing,
                            width: 400,
                            children: [(0, o.jsx)("source", {
                                src: n(850811),
                                type: "video/webm"
                            }), (0, o.jsx)("source", {
                                src: n(806872),
                                type: "video/mp4"
                            }), (0, o.jsx)("img", {
                                alt: "",
                                src: n(364142)
                            })]
                        }), (0, o.jsxs)(s.FormItem, {
                            title: d.Z.Messages.FORM_LABEL_REASON_BAN,
                            className: p().spacing,
                            children: [w && (0, o.jsx)(s.FormErrorBlock, {
                                className: p().error,
                                children: d.Z.Messages.BAN_REASON_REQUIRED_ERROR
                            }), (0, o.jsx)(s.Sequencer, {
                                steps: [r.INITIAL, r.OTHER_REASON],
                                step: P,
                                children: function(e) {
                                    switch (P) {
                                        case r.INITIAL:
                                            return (0, o.jsxs)(o.Fragment, {
                                                children: [(0, o.jsx)(s.RadioGroup, {
                                                    value: C,
                                                    options: e,
                                                    onChange: U,
                                                    radioItemClassName: p().radioItemStyles
                                                }), (0, o.jsxs)(s.Clickable, {
                                                    onClick: G,
                                                    className: p().banReasonOtherClickable,
                                                    children: [(0, o.jsx)(s.Text, {
                                                        variant: "text-md/medium",
                                                        color: "none",
                                                        children: d.Z.Messages.OTHER
                                                    }), (0, o.jsx)(i.Z, {
                                                        width: "16",
                                                        height: "16"
                                                    })]
                                                })]
                                            });
                                        case r.OTHER_REASON:
                                            return (0, o.jsx)(s.TextArea, {
                                                maxLength: O.GNZ,
                                                onChange: Y,
                                                value: C,
                                                rows: 5,
                                                autoFocus: !0
                                            })
                                    }
                                }(K)
                            })]
                        }), (0, o.jsx)(s.FormItem, {
                            title: d.Z.Messages.FORM_LABEL_DELETE_MESSAGE_HISTORY,
                            className: p().spacing,
                            children: (0, o.jsx)(s.SingleSelect, {
                                options: y(),
                                value: T,
                                onChange: F
                            })
                        })]
                    }), function() {
                        switch (P) {
                            case r.INITIAL:
                                return (0, o.jsxs)(s.ModalFooter, {
                                    className: p().footer,
                                    children: [(0, o.jsx)(s.Button, {
                                        type: "button",
                                        look: s.Button.Looks.LINK,
                                        color: s.Button.Colors.PRIMARY,
                                        onClick: h,
                                        children: d.Z.Messages.CANCEL
                                    }), (0, o.jsx)(s.Button, {
                                        type: "submit",
                                        color: s.Button.Colors.RED,
                                        size: s.Button.Sizes.SMALL,
                                        onClick: D,
                                        children: d.Z.Messages.BAN
                                    })]
                                });
                            case r.OTHER_REASON:
                                return (0, o.jsxs)(s.ModalFooter, {
                                    className: p().footerStepped,
                                    children: [(0, o.jsx)(s.Button, {
                                        className: p().cancel,
                                        innerClassName: p().cancel,
                                        type: "button",
                                        look: s.Button.Looks.LINK,
                                        color: s.Button.Colors.PRIMARY,
                                        size: s.Button.Sizes.SMALL,
                                        onClick: z,
                                        children: d.Z.Messages.BACK
                                    }), (0, o.jsx)(s.Button, {
                                        type: "submit",
                                        color: s.Button.Colors.RED,
                                        size: s.Button.Sizes.SMALL,
                                        onClick: D,
                                        children: d.Z.Messages.BAN
                                    })]
                                })
                        }
                    }()]
                })
            }
        },
        939198: (e, t, n) => {
            "use strict";
            n.d(t, {
                mT: () => o,
                Jj: () => a,
                OF: () => s,
                hV: () => r,
                WW: () => l
            });
            var r, o = 550,
                a = 350,
                s = 40;
            ! function(e) {
                e.STATIC = "STATIC";
                e.RESPONSIVE = "RESPONSIVE";
                e.MOSAIC = "MOSAIC"
            }(r || (r = {}));
            var l = 20
        },
        786170: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                o = n(667294),
                a = n(809784),
                s = n(202351),
                l = n(316878),
                u = n(939198);

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        i(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
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

            function O(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var d = function(e) {
                var t = function() {
                        var e;
                        E && (null == m || null === (e = m.current) || void 0 === e || e.play())
                    },
                    n = function() {
                        var e;
                        E && (null == m || null === (e = m.current) || void 0 === e || e.pause())
                    },
                    i = function() {
                        return {
                            maxWidth: b.width,
                            maxHeight: b.height,
                            width: "100%",
                            height: "100%"
                        }
                    },
                    f = e.externalRef,
                    d = e.autoPlay,
                    E = e.playOnHover,
                    p = e.responsive,
                    A = e.mediaLayoutType,
                    b = O(e, ["externalRef", "autoPlay", "playOnHover", "responsive", "mediaLayoutType"]),
                    S = !(0, s.e7)([l.Z], (function() {
                        return l.Z.useReducedMotion
                    })) && !E && d,
                    m = o.useRef(null);
                o.useLayoutEffect((function() {
                    return function() {
                        var e = m.current;
                        null != e && function(e) {
                            e.removeAttribute("src");
                            Array.from(e.children).forEach((function(e) {
                                if ((0, a.k)(e, HTMLSourceElement)) {
                                    e.removeAttribute("src");
                                    e.removeAttribute("type")
                                }(0, a.k)(e, HTMLImageElement) && e.removeAttribute("src")
                            }));
                            try {
                                e.load()
                            } catch (e) {}
                        }(e)
                    }
                }), []);
                o.useLayoutEffect((function() {
                    if ("function" == typeof f) {
                        f(null);
                        f(m.current)
                    } else null != f && (f.current = m.current);
                    return function() {
                        "function" == typeof f ? f(null) : null != f && (f.current = null)
                    }
                }), [f, m]);
                return (0, r.jsx)("video", c({
                    ref: m,
                    autoPlay: S,
                    onMouseEnter: t,
                    onMouseLeave: n,
                    onFocus: t,
                    onBlur: n,
                    style: A === u.hV.MOSAIC ? {
                        width: "100%",
                        height: "100%",
                        maxHeight: "inherit",
                        objectFit: "cover"
                    } : p ? i() : {}
                }, b))
            };
            const E = o.forwardRef((function(e, t) {
                return (0, r.jsx)(d, f(c({}, e), {
                    externalRef: t
                }))
            }))
        }
    }
]);