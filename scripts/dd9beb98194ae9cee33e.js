"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [22325, 516], {
        731503: (e, t, r) => {
            r.d(t, {
                Z: () => o
            });
            var n = r(744564);
            const o = {
                addKeybind: function(e) {
                    n.Z.dispatch({
                        type: "KEYBINDS_ADD_KEYBIND",
                        keybind: e
                    })
                },
                setKeybind: function(e) {
                    n.Z.dispatch({
                        type: "KEYBINDS_SET_KEYBIND",
                        keybind: e
                    })
                },
                deleteKeybind: function(e) {
                    n.Z.dispatch({
                        type: "KEYBINDS_DELETE_KEYBIND",
                        id: e
                    })
                },
                enableAll: function(e) {
                    n.Z.dispatch({
                        type: "KEYBINDS_ENABLE_ALL_KEYBINDS",
                        enable: e
                    })
                }
            }
        },
        722325: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => m
            });
            var n = r(785893),
                o = r(667294),
                c = r(202351),
                i = r(882723),
                a = r(731503),
                s = r(164045),
                l = r(241166),
                u = r(138049),
                d = r(613677),
                f = r(79251),
                O = r(460214),
                b = r(2590),
                y = r(473708),
                p = r(923155),
                h = r.n(p);

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function g(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function D(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function j(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, c = [],
                            i = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(i = (n = r.next()).done); i = !0) {
                                c.push(n.value);
                                if (t && c.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return c
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return N(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return N(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e) {
                var t, r = e.transitionState,
                    p = e.onClose,
                    N = (0, c.e7)([u.Z], (function() {
                        return u.Z.getKeybindForAction(b.kg4.SOUNDBOARD_HOLD)
                    })),
                    m = j(o.useState(null !== (t = null == N ? void 0 : N.shortcut) && void 0 !== t ? t : []), 2),
                    E = m[0],
                    S = m[1];
                o.useEffect((function() {
                    l.Z.disable();
                    return function() {
                        l.Z.enable()
                    }
                }), []);
                return (0, n.jsxs)(i.ModalRoot, {
                    transitionState: r,
                    children: [(0, n.jsxs)(i.ModalHeader, {
                        separator: !1,
                        children: [(0, n.jsx)(i.Heading, {
                            className: h().header,
                            variant: "heading-xl/semibold",
                            children: y.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
                        }), (0, n.jsx)(i.ModalCloseButton, {
                            className: h().closeButton,
                            onClick: p
                        })]
                    }), (0, n.jsxs)(i.ModalContent, {
                        className: h().content,
                        children: [(0, n.jsx)(d.Z, {
                            className: h().warning,
                            messageType: d.Q.WARNING,
                            children: y.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
                        }), (0, n.jsx)(i.Heading, {
                            className: h().formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: y.Z.Messages.USER_SETTINGS_KEYBINDS_ACTION
                        }), (0, n.jsx)(i.Text, {
                            className: h().action,
                            variant: "text-md/normal",
                            children: y.Z.Messages.KEYBIND_SOUNDBOARD_HOLD
                        }), (0, n.jsx)(i.Text, {
                            className: h().actionDescription,
                            variant: "text-sm/normal",
                            children: y.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
                        }), (0, n.jsx)(i.Heading, {
                            className: h().formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: y.Z.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
                        }), (0, n.jsx)(s.Z, {
                            defaultValue: E,
                            onChange: S
                        }), (0, n.jsx)(i.Anchor, {
                            className: h().resetButton,
                            onClick: function() {
                                return S((0, f.Kd)(O.D_))
                            },
                            children: y.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
                        })]
                    }), (0, n.jsxs)(i.ModalFooter, {
                        children: [(0, n.jsx)(i.Button, {
                            onClick: function() {
                                if (0 === E.length) {
                                    null != N && a.Z.deleteKeybind(N.id);
                                    return p()
                                }
                                null == N ? a.Z.addKeybind({
                                    action: b.kg4.SOUNDBOARD_HOLD,
                                    shortcut: E,
                                    enabled: !0,
                                    params: {}
                                }) : a.Z.setKeybind(D(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(r);
                                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                                        }))));
                                        n.forEach((function(t) {
                                            g(e, t, r[t])
                                        }))
                                    }
                                    return e
                                }({}, N), {
                                    shortcut: E
                                }));
                                p()
                            },
                            children: y.Z.Messages.SAVE
                        }), (0, n.jsx)(i.Button, {
                            onClick: p,
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.PRIMARY,
                            children: y.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        613677: (e, t, r) => {
            r.d(t, {
                Q: () => n,
                Z: () => b
            });
            var n, o = r(785893),
                c = (r(667294), r(294184)),
                i = r.n(c),
                a = r(882723),
                s = r(621329),
                l = r(127661),
                u = r(386991),
                d = r(265367),
                f = r(231361),
                O = r.n(f);
            ! function(e) {
                e[e.WARNING = 0] = "WARNING";
                e[e.INFO = 1] = "INFO";
                e[e.ERROR = 2] = "ERROR";
                e[e.POSITIVE = 3] = "POSITIVE"
            }(n || (n = {}));
            const b = function(e) {
                var t = e.children,
                    r = e.messageType,
                    c = e.className,
                    f = e.textColor,
                    b = void 0 === f ? "text-normal" : f,
                    y = e.textVariant,
                    p = void 0 === y ? "text-sm/medium" : y,
                    h = function(e) {
                        switch (e) {
                            case n.WARNING:
                                return d.Z;
                            case n.INFO:
                                return u.Z;
                            case n.ERROR:
                                return l.Z;
                            case n.POSITIVE:
                                return s.Z
                        }
                    }(r),
                    N = function(e) {
                        switch (e) {
                            case n.WARNING:
                                return O().warning;
                            case n.INFO:
                                return O().info;
                            case n.ERROR:
                                return O().error;
                            case n.POSITIVE:
                                return O().positive
                        }
                    }(r);
                return (0, o.jsxs)("div", {
                    className: i()(O().container, N, c),
                    children: [(0, o.jsx)("div", {
                        className: O().iconDiv,
                        children: (0, o.jsx)(h, {
                            className: O().icon
                        })
                    }), (0, o.jsx)(a.Text, {
                        className: O().text,
                        color: b,
                        variant: p,
                        children: t
                    })]
                })
            }
        },
        386991: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function i(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function s(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    s = e.height,
                    l = void 0 === s ? 16 : s,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.foreground,
                    O = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", i(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(O)), {
                    width: r,
                    height: l,
                    viewBox: "0 0 12 12",
                    children: (0, n.jsx)("path", {
                        fill: d,
                        className: f,
                        d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                    })
                }))
            }
        }
    }
]);
//# sourceMappingURL=dd9beb98194ae9cee33e.js.map