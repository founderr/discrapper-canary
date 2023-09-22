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
        775428: (e, t, r) => {
            r.d(t, {
                d: () => l
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                c = r(633878);

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
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

            function s(e, t) {
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
            var l = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    l = e.height,
                    u = void 0 === l ? 24 : l,
                    d = e.color,
                    f = void 0 === d ? o.Z.colors.INTERACTIVE_NORMAL : d,
                    O = e.colorClass,
                    b = void 0 === O ? "" : O,
                    p = e.secondaryColor,
                    y = void 0 === p ? "transparent" : p,
                    h = e.secondaryColorClass,
                    g = void 0 === h ? "" : h,
                    j = s(e, ["width", "height", "color", "colorClass", "secondaryColor", "secondaryColorClass"]);
                return (0, n.jsxs)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(j)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.772 3.96a1 1 0 1 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: b
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof y ? y : y.css,
                        fillRule: "evenodd",
                        d: "M12.25 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm.478 2.71a1 1 0 0 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: g
                    })]
                }))
            }
        },
        722325: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => N
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
                p = r(473708),
                y = r(923155),
                h = r.n(y);

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function j(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function m(e, t) {
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

            function v(e, t) {
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
                    if ("string" == typeof e) return g(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return g(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function N(e) {
                var t, r = e.transitionState,
                    y = e.onClose,
                    g = (0, c.e7)([u.Z], (function() {
                        return u.Z.getKeybindForAction(b.kg4.SOUNDBOARD_HOLD)
                    })),
                    N = v(o.useState(null !== (t = null == g ? void 0 : g.shortcut) && void 0 !== t ? t : []), 2),
                    D = N[0],
                    w = N[1];
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
                            children: p.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
                        }), (0, n.jsx)(i.ModalCloseButton, {
                            className: h().closeButton,
                            onClick: y
                        })]
                    }), (0, n.jsxs)(i.ModalContent, {
                        className: h().content,
                        children: [(0, n.jsx)(d.Z, {
                            className: h().warning,
                            messageType: d.Q.WARNING,
                            children: p.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
                        }), (0, n.jsx)(i.Heading, {
                            className: h().formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: p.Z.Messages.USER_SETTINGS_KEYBINDS_ACTION
                        }), (0, n.jsx)(i.Text, {
                            className: h().action,
                            variant: "text-md/normal",
                            children: p.Z.Messages.KEYBIND_SOUNDBOARD_HOLD
                        }), (0, n.jsx)(i.Text, {
                            className: h().actionDescription,
                            variant: "text-sm/normal",
                            children: p.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
                        }), (0, n.jsx)(i.Heading, {
                            className: h().formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: p.Z.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
                        }), (0, n.jsx)(s.Z, {
                            defaultValue: D,
                            onChange: w
                        }), (0, n.jsx)(i.Anchor, {
                            className: h().resetButton,
                            onClick: function() {
                                return w((0, f.Kd)(O.D_))
                            },
                            children: p.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
                        })]
                    }), (0, n.jsxs)(i.ModalFooter, {
                        children: [(0, n.jsx)(i.Button, {
                            onClick: function() {
                                if (0 === D.length) {
                                    null != g && a.Z.deleteKeybind(g.id);
                                    return y()
                                }
                                null == g ? a.Z.addKeybind({
                                    action: b.kg4.SOUNDBOARD_HOLD,
                                    shortcut: D,
                                    enabled: !0,
                                    params: {}
                                }) : a.Z.setKeybind(m(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(r);
                                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                                        }))));
                                        n.forEach((function(t) {
                                            j(e, t, r[t])
                                        }))
                                    }
                                    return e
                                }({}, g), {
                                    shortcut: D
                                }));
                                y()
                            },
                            children: p.Z.Messages.SAVE
                        }), (0, n.jsx)(i.Button, {
                            onClick: y,
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.PRIMARY,
                            children: p.Z.Messages.CANCEL
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
                l = r(559968),
                u = r(386991),
                d = r(818417),
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
                    p = e.textVariant,
                    y = void 0 === p ? "text-sm/medium" : p,
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
                    g = function(e) {
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
                    className: i()(O().container, g, c),
                    children: [(0, o.jsx)("div", {
                        className: O().iconDiv,
                        children: (0, o.jsx)(h, {
                            className: O().icon
                        })
                    }), (0, o.jsx)(a.Text, {
                        className: O().text,
                        color: b,
                        variant: y,
                        children: t
                    })]
                })
            }
        },
        386991: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                c = r(775428),
                i = r(633878);

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function s(e, t) {
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

            function l(e, t) {
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
            const u = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    o = e.height,
                    c = void 0 === o ? 16 : o,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.foreground,
                    O = l(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(O)), {
                    width: r,
                    height: c,
                    viewBox: "0 0 12 12",
                    children: (0, n.jsx)("path", {
                        fill: d,
                        className: f,
                        d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                    })
                }))
            }), c.d, {}, {
                size: 16
            })
        }
    }
]);