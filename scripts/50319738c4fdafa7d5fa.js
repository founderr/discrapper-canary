"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [22325, 516], {
        731503: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(744564);
            const a = {
                addKeybind: function(e) {
                    r.Z.dispatch({
                        type: "KEYBINDS_ADD_KEYBIND",
                        keybind: e
                    })
                },
                setKeybind: function(e) {
                    r.Z.dispatch({
                        type: "KEYBINDS_SET_KEYBIND",
                        keybind: e
                    })
                },
                deleteKeybind: function(e) {
                    r.Z.dispatch({
                        type: "KEYBINDS_DELETE_KEYBIND",
                        id: e
                    })
                },
                enableAll: function(e) {
                    r.Z.dispatch({
                        type: "KEYBINDS_ENABLE_ALL_KEYBINDS",
                        enable: e
                    })
                }
            }
        },
        722325: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => m
            });
            var r = n(785893),
                a = n(667294),
                o = n(202351),
                s = n(70418),
                i = n(731503),
                c = n(164045),
                l = n(241166),
                u = n(138049),
                d = n(613677),
                f = n(79251),
                O = n(460214),
                N = n(2590),
                y = n(473708),
                D = n(838886),
                b = n.n(D);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e, t) {
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

            function I(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o = [],
                            s = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e) {
                var t, n = e.transitionState,
                    D = e.onClose,
                    h = (0, o.e7)([u.Z], (function() {
                        return u.Z.getKeybindForAction(N.kg4.SOUNDBOARD_HOLD)
                    })),
                    m = I(a.useState(null !== (t = null == h ? void 0 : h.shortcut) && void 0 !== t ? t : []), 2),
                    S = m[0],
                    g = m[1];
                a.useEffect((function() {
                    l.Z.disable();
                    return function() {
                        l.Z.enable()
                    }
                }), []);
                return (0, r.jsxs)(s.ModalRoot, {
                    transitionState: n,
                    children: [(0, r.jsxs)(s.ModalHeader, {
                        separator: !1,
                        children: [(0, r.jsx)(s.Heading, {
                            className: b().header,
                            variant: "heading-xl/semibold",
                            children: y.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
                        }), (0, r.jsx)(s.ModalCloseButton, {
                            className: b().closeButton,
                            onClick: D
                        })]
                    }), (0, r.jsxs)(s.ModalContent, {
                        className: b().content,
                        children: [(0, r.jsx)(d.Z, {
                            className: b().warning,
                            messageType: d.Q.WARNING,
                            children: y.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
                        }), (0, r.jsx)(s.Heading, {
                            className: b().formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: y.Z.Messages.USER_SETTINGS_KEYBINDS_ACTION
                        }), (0, r.jsx)(s.Text, {
                            className: b().action,
                            variant: "text-md/normal",
                            children: y.Z.Messages.KEYBIND_SOUNDBOARD_HOLD
                        }), (0, r.jsx)(s.Text, {
                            className: b().actionDescription,
                            variant: "text-sm/normal",
                            children: y.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
                        }), (0, r.jsx)(s.Heading, {
                            className: b().formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: y.Z.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
                        }), (0, r.jsx)(c.Z, {
                            defaultValue: S,
                            onChange: g
                        }), (0, r.jsx)(s.Anchor, {
                            className: b().resetButton,
                            onClick: function() {
                                return g((0, f.Kd)(O.D_))
                            },
                            children: y.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
                        })]
                    }), (0, r.jsxs)(s.ModalFooter, {
                        children: [(0, r.jsx)(s.Button, {
                            onClick: function() {
                                if (0 === S.length) {
                                    null != h && i.Z.deleteKeybind(h.id);
                                    return D()
                                }
                                null == h ? i.Z.addKeybind({
                                    action: N.kg4.SOUNDBOARD_HOLD,
                                    shortcut: S,
                                    enabled: !0,
                                    params: {}
                                }) : i.Z.setKeybind(E(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))));
                                        r.forEach((function(t) {
                                            p(e, t, n[t])
                                        }))
                                    }
                                    return e
                                }({}, h), {
                                    shortcut: S
                                }));
                                D()
                            },
                            children: y.Z.Messages.SAVE
                        }), (0, r.jsx)(s.Button, {
                            onClick: D,
                            look: s.Button.Looks.LINK,
                            color: s.Button.Colors.PRIMARY,
                            children: y.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        613677: (e, t, n) => {
            n.d(t, {
                Q: () => r,
                Z: () => N
            });
            var r, a = n(785893),
                o = (n(667294), n(294184)),
                s = n.n(o),
                i = n(70418),
                c = n(621329),
                l = n(559968),
                u = n(386991),
                d = n(818417),
                f = n(153954),
                O = n.n(f);
            ! function(e) {
                e[e.WARNING = 0] = "WARNING";
                e[e.INFO = 1] = "INFO";
                e[e.ERROR = 2] = "ERROR";
                e[e.POSITIVE = 3] = "POSITIVE"
            }(r || (r = {}));
            const N = function(e) {
                var t = e.children,
                    n = e.messageType,
                    o = e.className,
                    f = e.textColor,
                    N = void 0 === f ? "text-normal" : f,
                    y = e.textVariant,
                    D = void 0 === y ? "text-sm/medium" : y,
                    b = function(e) {
                        switch (e) {
                            case r.WARNING:
                                return d.Z;
                            case r.INFO:
                                return u.Z;
                            case r.ERROR:
                                return l.Z;
                            case r.POSITIVE:
                                return c.Z
                        }
                    }(n),
                    h = function(e) {
                        switch (e) {
                            case r.WARNING:
                                return O().warning;
                            case r.INFO:
                                return O().info;
                            case r.ERROR:
                                return O().error;
                            case r.POSITIVE:
                                return O().positive
                        }
                    }(n);
                return (0, a.jsxs)("div", {
                    className: s()(O().container, h, o),
                    children: [(0, a.jsx)("div", {
                        className: O().iconDiv,
                        children: (0, a.jsx)(b, {
                            className: O().icon
                        })
                    }), (0, a.jsx)(i.Text, {
                        className: O().text,
                        color: N,
                        variant: D,
                        children: t
                    })]
                })
            }
        }
    }
]);