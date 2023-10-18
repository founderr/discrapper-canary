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
                c = n(809784),
                u = n(70418),
                a = n(971402),
                i = n(850188),
                l = n(620373),
                s = n(391212),
                f = n(120415),
                p = n(310126),
                d = n(473708);

            function y(e, t) {
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
                        var r, o, c = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                c.push(r.value);
                                if (t && c.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return c
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e) {
                var t = e.text,
                    n = e.target,
                    y = e.onHeightUpdate,
                    h = e.onSelect,
                    E = e.isChannelTextArea,
                    m = void 0 !== E && E,
                    v = o.useCallback((function() {
                        (0, a.Zy)();
                        if ((0, c.k)(n, HTMLElement)) {
                            n.focus();
                            setTimeout((function() {
                                return n.focus()
                            }), 0)
                        }
                    }), [n]),
                    O = b((0, s.Z)({
                        text: t,
                        target: n,
                        onHeightUpdate: y
                    }), 2),
                    S = O[0],
                    g = O[1],
                    C = (0, l.Z)();
                if (!f.FB) return null;
                if (!(0, c.k)(n, HTMLInputElement) && !(0, c.k)(n, HTMLTextAreaElement)) return null;
                var L = "" !== t ? [(0, r.jsx)(u.MenuItem, {
                    id: "copy",
                    label: d.Z.Messages.COPY,
                    hint: (0, f.V5)() ? "⌘C" : "Ctrl+C",
                    action: function() {
                        return p.ZP.copy(t)
                    }
                }, "copy"), (0, r.jsx)(u.MenuItem, {
                    id: "cut",
                    label: d.Z.Messages.CUT,
                    hint: (0, f.V5)() ? "⌘X" : "Ctrl+X",
                    action: function() {
                        return setTimeout((function() {
                            return p.ZP.cut()
                        }), 0)
                    }
                }, "cut")] : null;
                return (0, r.jsxs)(u.Menu, {
                    className: i.h,
                    navId: "textarea-context",
                    onClose: v,
                    "aria-label": d.Z.Messages.TEXTAREA_ACTIONS_MENU_LABEL,
                    onSelect: h,
                    children: [m && (0, r.jsx)(u.MenuGroup, {
                        children: C
                    }), (0, r.jsx)(u.MenuGroup, {
                        children: S
                    }), (0, r.jsx)(u.MenuGroup, {
                        children: g
                    }), (0, r.jsxs)(u.MenuGroup, {
                        children: [L, (0, r.jsx)(u.MenuItem, {
                            id: "paste",
                            label: d.Z.Messages.PASTE,
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
                o = (n(667294), n(70418)),
                c = n(19585),
                u = n(968449),
                a = n(652591),
                i = n(2590),
                l = n(473708);

            function s() {
                var e = u.up.useSetting(),
                    t = (0, c.Z)().analyticsLocations;
                return (0, r.jsx)(o.MenuCheckboxItem, {
                    id: "sticker-suggestions",
                    label: l.Z.Messages.SUGGEST_STICKERS,
                    checked: e,
                    action: function() {
                        a.default.track(i.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                            enabled: !e,
                            location: {
                                object: i.qAy.CONTEXT_MENU
                            },
                            location_stack: t
                        });
                        u.up.updateSetting(!e)
                    }
                })
            }
        },
        391212: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                o = n(667294),
                c = n(809784),
                u = n(202351),
                a = n(70418),
                i = n(744564);
            var l = n(191677),
                s = n(348592),
                f = n(73105),
                p = n(2590),
                d = n(473708);

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t, n) {
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
                        b(e, t, n[t])
                    }))
                }
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

            function m(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, c = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                c.push(r.value);
                                if (t && c.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return c
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e) {
                var t = e.text,
                    n = void 0 === t ? "" : t,
                    y = e.target,
                    b = (0, u.e7)([l.Z], (function() {
                        return l.Z.isEnabled()
                    })),
                    v = (0, u.e7)([l.Z], (function() {
                        return l.Z.hasLearnedWord(n)
                    }), [n]),
                    O = o.useRef(E(h({}, e), {
                        spellcheckEnabled: b
                    }));
                O.current = E(h({}, e), {
                    spellcheckEnabled: b
                });
                var S = o.useRef(!1),
                    g = m(o.useState(!1), 2),
                    C = g[0],
                    L = g[1],
                    j = m(o.useState([]), 2),
                    w = j[0],
                    _ = j[1],
                    M = o.useCallback((function() {
                        var e = O.current,
                            t = e.spellcheckEnabled,
                            n = e.text,
                            r = e.onHeightUpdate;
                        t && (0, f.Gb)() && Promise.all([(0, f.f5)(n, !0), (0, f.WA)(n, !0)]).then((function(e) {
                            var t = m(e, 2),
                                n = t[0],
                                o = t[1];
                            if (S.current) {
                                L(n);
                                _(o);
                                r()
                            }
                        }))
                    }), []),
                    A = o.useCallback((function() {
                        if ((0, c.k)(y, HTMLInputElement) || (0, c.k)(y, HTMLTextAreaElement)) {
                            var e = y.selectionStart,
                                t = y.selectionEnd,
                                n = y.value;
                            y.value = "";
                            y.value = n;
                            if ("email" !== y.type) {
                                y.selectionStart = e;
                                y.selectionEnd = t
                            }
                        }
                    }), [y]);
                o.useEffect((function() {
                    var e = (0, f.RD)(M);
                    S.current = !0;
                    return function() {
                        S.current = !1;
                        e()
                    }
                }), [M]);
                o.useEffect((function() {
                    M()
                }), [n, b, M]);
                return (0, f.Gb)() ? [w.map((function(e, t) {
                    return (0, r.jsx)(a.MenuItem, {
                        id: "correction-".concat(t),
                        label: e,
                        action: function() {
                            (0, f.Rs)(e);
                            y.focus()
                        }
                    }, "correction-".concat(t))
                })), (0, r.jsxs)(r.Fragment, {
                    children: [C ? (0, r.jsx)(a.MenuItem, {
                        id: "add-to-dictionary",
                        label: d.Z.Messages.ADD_TO_DICTIONARY,
                        action: function() {
                            e = n, i.Z.dispatch({
                                type: "SPELLCHECK_LEARN_WORD",
                                word: e
                            });
                            var e;
                            A()
                        }
                    }) : null, v && (0, r.jsx)(a.MenuItem, {
                        id: "remove-from-dictionary",
                        label: d.Z.Messages.REMOVE_FROM_DICTIONARY,
                        action: function() {
                            e = n, i.Z.dispatch({
                                type: "SPELLCHECK_UNLEARN_WORD",
                                word: e
                            });
                            var e;
                            A()
                        }
                    }), (0, r.jsx)(a.MenuCheckboxItem, {
                        id: "spellcheck",
                        label: d.Z.Messages.SPELLCHECK,
                        checked: b,
                        action: function() {
                            i.Z.dispatch({
                                type: "SPELLCHECK_TOGGLE"
                            });
                            A()
                        }
                    }), b ? (0, r.jsx)(a.MenuItem, {
                        id: "languages",
                        label: d.Z.Messages.LANGUAGES,
                        action: function() {
                            return window.open(s.Z.getArticleURL(p.BhN.SPELLCHECK))
                        }
                    }) : null]
                })] : [null, null]
            }
        },
        191677: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(202351),
                o = n(630631),
                c = n(744564),
                u = n(73105);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e) {
                i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return i(e)
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
                    var n, r = i(e);
                    if (t) {
                        var o = i(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var d = "SpellcheckStore",
                y = !0,
                b = new Set;

            function h() {
                o.Z.set(d, {
                    enabled: y,
                    learnedWords: b
                })
            }
            var E = function(e) {
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
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    var e = o.Z.get(d);
                    if (null != e) {
                        y = e.enabled;
                        b = new Set(e.learnedWords);
                        (0, u.gL)(y);
                        (0, u.fG)(b)
                    }
                };
                r.isEnabled = function() {
                    return y
                };
                r.hasLearnedWord = function(e) {
                    return b.has(e.toLocaleLowerCase())
                };
                return n
            }(r.ZP.Store);
            E.displayName = "SpellcheckStore";
            const m = new E(c.Z, {
                SPELLCHECK_TOGGLE: function() {
                    y = !y;
                    (0, u.gL)(y);
                    h()
                },
                SPELLCHECK_LEARN_WORD: function(e) {
                    var t = e.word;
                    b.add(t.toLocaleLowerCase());
                    (0, u.fG)(b);
                    h()
                },
                SPELLCHECK_UNLEARN_WORD: function(e) {
                    var t = e.word;
                    b.delete(t.toLocaleLowerCase());
                    (0, u.fG)(b);
                    h()
                },
                I18N_LOAD_SUCCESS: function(e) {
                    var t = e.locale;
                    (0, u._2)(t)
                }
            })
        }
    }
]);