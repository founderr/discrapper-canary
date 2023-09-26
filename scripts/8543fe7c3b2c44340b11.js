"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [38525, 51954], {
        638525: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => h
            });
            var r = n(785893),
                o = n(667294),
                u = n(809784),
                c = n(304548),
                i = n(971402),
                a = n(850188),
                l = n(620373),
                s = n(391212),
                f = n(120415),
                p = n(310126),
                y = n(473708);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, u = [],
                            c = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(c = (r = n.next()).done); c = !0) {
                                u.push(r.value);
                                if (t && u.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            o = e
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return u
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

            function h(e) {
                var t = e.text,
                    n = e.target,
                    b = e.onHeightUpdate,
                    h = e.onSelect,
                    m = e.isChannelTextArea,
                    v = void 0 !== m && m,
                    E = o.useCallback((function() {
                        (0, i.Zy)();
                        if ((0, u.k)(n, HTMLElement)) {
                            n.focus();
                            setTimeout((function() {
                                return n.focus()
                            }), 0)
                        }
                    }), [n]),
                    S = d((0, s.Z)({
                        text: t,
                        target: n,
                        onHeightUpdate: b
                    }), 2),
                    g = S[0],
                    O = S[1],
                    j = (0, l.Z)();
                if (!f.FB) return null;
                if (!(0, u.k)(n, HTMLInputElement) && !(0, u.k)(n, HTMLTextAreaElement)) return null;
                var C = "" !== t ? [(0, r.jsx)(c.MenuItem, {
                    id: "copy",
                    label: y.Z.Messages.COPY,
                    hint: (0, f.V5)() ? "⌘C" : "Ctrl+C",
                    action: function() {
                        return p.ZP.copy(t)
                    }
                }, "copy"), (0, r.jsx)(c.MenuItem, {
                    id: "cut",
                    label: y.Z.Messages.CUT,
                    hint: (0, f.V5)() ? "⌘X" : "Ctrl+X",
                    action: function() {
                        return setTimeout((function() {
                            return p.ZP.cut()
                        }), 0)
                    }
                }, "cut")] : null;
                return (0, r.jsxs)(c.Menu, {
                    className: a.h,
                    navId: "textarea-context",
                    onClose: E,
                    "aria-label": y.Z.Messages.TEXTAREA_ACTIONS_MENU_LABEL,
                    onSelect: h,
                    children: [v && (0, r.jsx)(c.MenuGroup, {
                        children: j
                    }), (0, r.jsx)(c.MenuGroup, {
                        children: g
                    }), (0, r.jsx)(c.MenuGroup, {
                        children: O
                    }), (0, r.jsxs)(c.MenuGroup, {
                        children: [C, (0, r.jsx)(c.MenuItem, {
                            id: "paste",
                            label: y.Z.Messages.PASTE,
                            hint: (0, f.V5)() ? "⌘V" : "Ctrl+V",
                            action: function() {
                                return setTimeout((function() {
                                    return p.ZP.paste()
                                }), 0)
                            }
                        })]
                    })]
                })
            }
        },
        620373: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                u = n(19585),
                c = n(968449),
                i = n(652591),
                a = n(2590),
                l = n(473708);

            function s() {
                var e = c.up.useSetting(),
                    t = (0, u.Z)().analyticsLocations;
                return (0, r.jsx)(o.MenuCheckboxItem, {
                    id: "sticker-suggestions",
                    label: l.Z.Messages.SUGGEST_STICKERS,
                    checked: e,
                    action: function() {
                        i.default.track(a.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                            enabled: !e,
                            location: {
                                object: a.qAy.CONTEXT_MENU
                            },
                            location_stack: t
                        });
                        c.up.updateSetting(!e)
                    }
                })
            }
        },
        391212: (e, t, n) => {
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                o = n(667294),
                u = n(809784),
                c = n(202351),
                i = n(304548),
                a = n(744564);
            var l = n(191677),
                s = n(348592),
                f = n(73105),
                p = n(2590),
                y = n(473708);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        d(e, t, n[t])
                    }))
                }
                return e
            }

            function m(e, t) {
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

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, u = [],
                            c = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(c = (r = n.next()).done); c = !0) {
                                u.push(r.value);
                                if (t && u.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            o = e
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return u
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

            function E(e) {
                var t = e.text,
                    n = void 0 === t ? "" : t,
                    b = e.target,
                    d = (0, c.e7)([l.Z], (function() {
                        return l.Z.isEnabled()
                    })),
                    E = o.useRef(m(h({}, e), {
                        spellcheckEnabled: d
                    }));
                E.current = m(h({}, e), {
                    spellcheckEnabled: d
                });
                var S = o.useRef(!1),
                    g = v(o.useState(!1), 2),
                    O = g[0],
                    j = g[1],
                    C = v(o.useState([]), 2),
                    w = C[0],
                    L = C[1],
                    A = o.useCallback((function() {
                        var e = E.current,
                            t = e.spellcheckEnabled,
                            n = e.text,
                            r = e.onHeightUpdate;
                        t && (0, f.Gb)() && Promise.all([(0, f.f5)(n, !0), (0, f.WA)(n, !0)]).then((function(e) {
                            var t = v(e, 2),
                                n = t[0],
                                o = t[1];
                            if (S.current) {
                                j(n);
                                L(o);
                                r()
                            }
                        }))
                    }), []),
                    M = o.useCallback((function() {
                        if ((0, u.k)(b, HTMLInputElement) || (0, u.k)(b, HTMLTextAreaElement)) {
                            var e = b.selectionStart,
                                t = b.selectionEnd,
                                n = b.value;
                            b.value = "";
                            b.value = n;
                            if ("email" !== b.type) {
                                b.selectionStart = e;
                                b.selectionEnd = t
                            }
                        }
                    }), [b]);
                o.useEffect((function() {
                    var e = (0, f.RD)(A);
                    S.current = !0;
                    return function() {
                        S.current = !1;
                        e()
                    }
                }), [A]);
                o.useEffect((function() {
                    A()
                }), [n, d, A]);
                return (0, f.Gb)() ? [w.map((function(e, t) {
                    return (0, r.jsx)(i.MenuItem, {
                        id: "correction-".concat(t),
                        label: e,
                        action: function() {
                            (0, f.Rs)(e);
                            b.focus()
                        }
                    }, "correction-".concat(t))
                })), (0, r.jsxs)(r.Fragment, {
                    children: [O ? (0, r.jsx)(i.MenuItem, {
                        id: "add-to-dictionary",
                        label: y.Z.Messages.ADD_TO_DICTIONARY,
                        action: function() {
                            e = n, a.Z.dispatch({
                                type: "SPELLCHECK_LEARN_WORD",
                                word: e
                            });
                            var e;
                            M()
                        }
                    }) : null, (0, r.jsx)(i.MenuCheckboxItem, {
                        id: "spellcheck",
                        label: y.Z.Messages.SPELLCHECK,
                        checked: d,
                        action: function() {
                            a.Z.dispatch({
                                type: "SPELLCHECK_TOGGLE"
                            });
                            M()
                        }
                    }), d ? (0, r.jsx)(i.MenuItem, {
                        id: "languages",
                        label: y.Z.Messages.LANGUAGES,
                        action: function() {
                            return window.open(s.Z.getArticleURL(p.BhN.SPELLCHECK))
                        }
                    }) : null]
                })] : [null, null]
            }
        },
        191677: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(202351),
                o = n(630631),
                u = n(744564),
                c = n(73105);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function l(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var y = "SpellcheckStore",
                b = !0,
                d = new Set;

            function h() {
                o.Z.set(y, {
                    enabled: b,
                    learnedWords: d
                })
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    var e = o.Z.get(y);
                    if (null != e) {
                        b = e.enabled;
                        d = new Set(e.learnedWords);
                        (0, c.gL)(b);
                        (0, c.fG)(d)
                    }
                };
                r.isEnabled = function() {
                    return b
                };
                return n
            }(r.ZP.Store);
            m.displayName = "SpellcheckStore";
            const v = new m(u.Z, {
                SPELLCHECK_TOGGLE: function() {
                    b = !b;
                    (0, c.gL)(b);
                    h()
                },
                SPELLCHECK_LEARN_WORD: function(e) {
                    var t = e.word;
                    d.add(t.toLocaleLowerCase());
                    (0, c.fG)(d);
                    h()
                },
                I18N_LOAD_SUCCESS: function(e) {
                    var t = e.locale;
                    (0, c._2)(t)
                }
            })
        }
    }
]);