"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [51954], {
        638525: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => h
            });
            var r = n(785893),
                o = n(667294),
                u = n(809784),
                a = n(70418),
                c = n(971402),
                i = n(850188),
                l = n(620373),
                s = n(391212),
                f = n(120415),
                p = n(310126),
                d = n(473708);

            function b(e, t) {
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
                        var r, o, u = [],
                            a = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                u.push(r.value);
                                if (t && u.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (c) throw o
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
                    E = void 0 !== m && m,
                    g = o.useCallback((function() {
                        (0, c.Zy)();
                        if ((0, u.k)(n, HTMLElement)) {
                            n.focus();
                            setTimeout((function() {
                                return n.focus()
                            }), 0)
                        }
                    }), [n]),
                    v = y((0, s.Z)({
                        text: t,
                        target: n,
                        onHeightUpdate: b
                    }), 2),
                    O = v[0],
                    S = v[1],
                    j = (0, l.Z)();
                if (!f.FB) return null;
                if (!(0, u.k)(n, HTMLInputElement) && !(0, u.k)(n, HTMLTextAreaElement)) return null;
                var M = "" !== t ? [(0, r.jsx)(a.MenuItem, {
                    id: "copy",
                    label: d.Z.Messages.COPY,
                    hint: (0, f.V5)() ? "⌘C" : "Ctrl+C",
                    action: function() {
                        return p.ZP.copy(t)
                    }
                }, "copy"), (0, r.jsx)(a.MenuItem, {
                    id: "cut",
                    label: d.Z.Messages.CUT,
                    hint: (0, f.V5)() ? "⌘X" : "Ctrl+X",
                    action: function() {
                        return setTimeout((function() {
                            return p.ZP.cut()
                        }), 0)
                    }
                }, "cut")] : null;
                return (0, r.jsxs)(a.Menu, {
                    className: i.h,
                    navId: "textarea-context",
                    onClose: g,
                    "aria-label": d.Z.Messages.TEXTAREA_ACTIONS_MENU_LABEL,
                    onSelect: h,
                    children: [E && (0, r.jsx)(a.MenuGroup, {
                        children: j
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: O
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: S
                    }), (0, r.jsxs)(a.MenuGroup, {
                        children: [M, (0, r.jsx)(a.MenuItem, {
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
                u = n(19585),
                a = n(968449),
                c = n(652591),
                i = n(2590),
                l = n(473708);

            function s() {
                var e = a.up.useSetting(),
                    t = (0, u.Z)().analyticsLocations;
                return (0, r.jsx)(o.MenuCheckboxItem, {
                    id: "sticker-suggestions",
                    label: l.Z.Messages.SUGGEST_STICKERS,
                    checked: e,
                    action: function() {
                        c.default.track(i.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                            enabled: !e,
                            location: {
                                object: i.qAy.CONTEXT_MENU
                            },
                            location_stack: t
                        });
                        a.up.updateSetting(!e)
                    }
                })
            }
        },
        391212: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(785893),
                o = n(667294),
                u = n(809784),
                a = n(202351),
                c = n(70418),
                i = n(744564);
            var l = n(191677),
                s = n(348592),
                f = n(73105),
                p = n(2590),
                d = n(473708);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t, n) {
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
                        y(e, t, n[t])
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

            function E(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, u = [],
                            a = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                u.push(r.value);
                                if (t && u.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (c) throw o
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

            function g(e) {
                var t = e.text,
                    n = void 0 === t ? "" : t,
                    b = e.target,
                    y = (0, a.e7)([l.Z], (function() {
                        return l.Z.isEnabled()
                    })),
                    g = (0, a.e7)([l.Z], (function() {
                        return l.Z.hasLearnedWord(n)
                    }), [n]),
                    v = o.useRef(m(h({}, e), {
                        spellcheckEnabled: y
                    }));
                v.current = m(h({}, e), {
                    spellcheckEnabled: y
                });
                var O = o.useRef(!1),
                    S = E(o.useState(!1), 2),
                    j = S[0],
                    M = S[1],
                    C = E(o.useState([]), 2),
                    A = C[0],
                    x = C[1],
                    T = o.useCallback((function() {
                        var e = v.current,
                            t = e.spellcheckEnabled,
                            n = e.text,
                            r = e.onHeightUpdate;
                        t && (0, f.Gb)() && Promise.all([(0, f.f5)(n, !0), (0, f.WA)(n, !0)]).then((function(e) {
                            var t = E(e, 2),
                                n = t[0],
                                o = t[1];
                            if (O.current) {
                                M(n);
                                x(o);
                                r()
                            }
                        }))
                    }), []),
                    k = o.useCallback((function() {
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
                    var e = (0, f.RD)(T);
                    O.current = !0;
                    return function() {
                        O.current = !1;
                        e()
                    }
                }), [T]);
                o.useEffect((function() {
                    T()
                }), [n, y, T]);
                return (0, f.Gb)() ? [A.map((function(e, t) {
                    return (0, r.jsx)(c.MenuItem, {
                        id: "correction-".concat(t),
                        label: e,
                        action: function() {
                            (0, f.Rs)(e);
                            b.focus()
                        }
                    }, "correction-".concat(t))
                })), (0, r.jsxs)(r.Fragment, {
                    children: [j ? (0, r.jsx)(c.MenuItem, {
                        id: "add-to-dictionary",
                        label: d.Z.Messages.ADD_TO_DICTIONARY,
                        action: function() {
                            e = n, i.Z.dispatch({
                                type: "SPELLCHECK_LEARN_WORD",
                                word: e
                            });
                            var e;
                            k()
                        }
                    }) : null, g && (0, r.jsx)(c.MenuItem, {
                        id: "remove-from-dictionary",
                        label: d.Z.Messages.REMOVE_FROM_DICTIONARY,
                        action: function() {
                            e = n, i.Z.dispatch({
                                type: "SPELLCHECK_UNLEARN_WORD",
                                word: e
                            });
                            var e;
                            k()
                        }
                    }), (0, r.jsx)(c.MenuCheckboxItem, {
                        id: "spellcheck",
                        label: d.Z.Messages.SPELLCHECK,
                        checked: y,
                        action: function() {
                            i.Z.dispatch({
                                type: "SPELLCHECK_TOGGLE"
                            });
                            k()
                        }
                    }), y ? (0, r.jsx)(c.MenuItem, {
                        id: "languages",
                        label: d.Z.Messages.LANGUAGES,
                        action: function() {
                            return window.open(s.Z.getArticleURL(p.BhN.SPELLCHECK))
                        }
                    }) : null]
                })] : [null, null]
            }
        }
    }
]);