"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [67068], {
        567068: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => O
            });
            var r = n(785893),
                o = n(667294),
                u = n(857793),
                i = n(202351),
                a = n(70418),
                c = n(971402),
                l = n(770272),
                s = n(316878),
                f = n(620373),
                d = n(391212),
                b = n(968449),
                p = n(652591),
                y = n(120415),
                h = n(310126),
                m = n(556635),
                S = n(2590),
                g = n(473708);

            function E(e, t) {
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
                        var r, o, u = [],
                            i = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                u.push(r.value);
                                if (t && u.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return u
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(e) {
                var t, n, E, O, M, T, j, A = e.text,
                    C = e.editor,
                    I = e.target,
                    k = e.onHeightUpdate,
                    x = e.onSelect,
                    Z = o.useCallback((function() {
                        (0, c.Zy)((function() {
                            u.F3.focus(C);
                            setTimeout((function() {
                                return m.bN.focus(C)
                            }), 0)
                        }))
                    }), [C]),
                    _ = v((0, d.Z)({
                        text: A,
                        target: I,
                        onHeightUpdate: k
                    }), 2),
                    L = _[0],
                    w = _[1],
                    N = (0, i.e7)([s.Z], (function() {
                        return s.Z.isSubmitButtonEnabled
                    })),
                    G = (0, f.Z)(),
                    P = b.Xk.useSetting();
                if (!y.FB) return null;
                var U, R, D = null !== (j = null === (t = C.chatInputType) || void 0 === t || null === (n = t.commands) || void 0 === n ? void 0 : n.enabled) && void 0 !== j && j,
                    H = null !== (U = null === (E = C.chatInputType) || void 0 === E || null === (O = E.stickers) || void 0 === O ? void 0 : O.autoSuggest) && void 0 !== U && U,
                    X = null !== (R = null === (M = C.chatInputType) || void 0 === M || null === (T = M.submit) || void 0 === T ? void 0 : T.button) && void 0 !== R && R,
                    B = D || H,
                    K = "" !== A ? [(0, r.jsx)(a.MenuItem, {
                        id: "copy",
                        label: g.Z.Messages.COPY,
                        hint: (0, y.V5)() ? "⌘C" : "Ctrl+C",
                        action: function() {
                            return setTimeout((function() {
                                return h.ZP.copy()
                            }), 0)
                        }
                    }, "copy"), (0, r.jsx)(a.MenuItem, {
                        id: "cut",
                        label: g.Z.Messages.CUT,
                        hint: (0, y.V5)() ? "⌘X" : "Ctrl+X",
                        action: function() {
                            return setTimeout((function() {
                                return h.ZP.cut()
                            }), 0)
                        }
                    }, "cut")] : null,
                    V = (0, r.jsx)(a.MenuCheckboxItem, {
                        id: "command-suggestions",
                        label: g.Z.Messages.SUGGEST_SLASH_COMMANDS,
                        checked: P,
                        action: function() {
                            var e = !P;
                            b.Xk.updateSetting(e);
                            p.default.track(S.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                                enabled: e,
                                location: {
                                    object: S.qAy.CONTEXT_MENU
                                }
                            })
                        }
                    });
                return (0,
                    r.jsxs)(a.Menu, {
                    navId: "textarea-context",
                    onClose: Z,
                    "aria-label": g.Z.Messages.TEXTAREA_ACTIONS_MENU_LABEL,
                    onSelect: x,
                    children: [B && (0, r.jsxs)(a.MenuItem, {
                        id: "suggestions",
                        label: g.Z.Messages.TEXTAREA_ACTIONS_SUGGESTIONS,
                        children: [H && G, D && V]
                    }), X && (0, r.jsx)(a.MenuCheckboxItem, {
                        id: "submit-button",
                        label: g.Z.Messages.TEXTAREA_ACTIONS_SUBMIT_BUTTON,
                        checked: N,
                        action: function() {
                            (0, l.eN)()
                        }
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: L
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: w
                    }), (0, r.jsxs)(a.MenuGroup, {
                        children: [K, (0, r.jsx)(a.MenuItem, {
                            id: "paste",
                            label: g.Z.Messages.PASTE,
                            hint: (0, y.V5)() ? "⌘V" : "Ctrl+V",
                            action: function() {
                                return setTimeout((function() {
                                    return h.ZP.paste()
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
                i = n(968449),
                a = n(652591),
                c = n(2590),
                l = n(473708);

            function s() {
                var e = i.up.useSetting(),
                    t = (0, u.Z)().analyticsLocations;
                return (0, r.jsx)(o.MenuCheckboxItem, {
                    id: "sticker-suggestions",
                    label: l.Z.Messages.SUGGEST_STICKERS,
                    checked: e,
                    action: function() {
                        a.default.track(c.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                            enabled: !e,
                            location: {
                                object: c.qAy.CONTEXT_MENU
                            },
                            location_stack: t
                        });
                        i.up.updateSetting(!e)
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
                i = n(202351),
                a = n(70418),
                c = n(744564);
            var l = n(191677),
                s = n(348592),
                f = n(73105),
                d = n(2590),
                b = n(473708);

            function p(e, t) {
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

            function S(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, u = [],
                            i = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                u.push(r.value);
                                if (t && u.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return u
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e) {
                var t = e.text,
                    n = void 0 === t ? "" : t,
                    p = e.target,
                    y = (0, i.e7)([l.Z], (function() {
                        return l.Z.isEnabled()
                    })),
                    g = (0, i.e7)([l.Z], (function() {
                        return l.Z.hasLearnedWord(n)
                    }), [n]),
                    E = o.useRef(m(h({}, e), {
                        spellcheckEnabled: y
                    }));
                E.current = m(h({}, e), {
                    spellcheckEnabled: y
                });
                var v = o.useRef(!1),
                    O = S(o.useState(!1), 2),
                    M = O[0],
                    T = O[1],
                    j = S(o.useState([]), 2),
                    A = j[0],
                    C = j[1],
                    I = o.useCallback((function() {
                        var e = E.current,
                            t = e.spellcheckEnabled,
                            n = e.text,
                            r = e.onHeightUpdate;
                        t && (0, f.Gb)() && Promise.all([(0, f.f5)(n, !0), (0, f.WA)(n, !0)]).then((function(e) {
                            var t = S(e, 2),
                                n = t[0],
                                o = t[1];
                            if (v.current) {
                                T(n);
                                C(o);
                                r()
                            }
                        }))
                    }), []),
                    k = o.useCallback((function() {
                        if ((0, u.k)(p, HTMLInputElement) || (0, u.k)(p, HTMLTextAreaElement)) {
                            var e = p.selectionStart,
                                t = p.selectionEnd,
                                n = p.value;
                            p.value = "";
                            p.value = n;
                            if ("email" !== p.type) {
                                p.selectionStart = e;
                                p.selectionEnd = t
                            }
                        }
                    }), [p]);
                o.useEffect((function() {
                    var e = (0, f.RD)(I);
                    v.current = !0;
                    return function() {
                        v.current = !1;
                        e()
                    }
                }), [I]);
                o.useEffect((function() {
                    I()
                }), [n, y, I]);
                return (0, f.Gb)() ? [A.map((function(e, t) {
                    return (0, r.jsx)(a.MenuItem, {
                        id: "correction-".concat(t),
                        label: e,
                        action: function() {
                            (0, f.Rs)(e);
                            p.focus()
                        }
                    }, "correction-".concat(t))
                })), (0, r.jsxs)(r.Fragment, {
                    children: [M ? (0, r.jsx)(a.MenuItem, {
                        id: "add-to-dictionary",
                        label: b.Z.Messages.ADD_TO_DICTIONARY,
                        action: function() {
                            e = n, c.Z.dispatch({
                                type: "SPELLCHECK_LEARN_WORD",
                                word: e
                            });
                            var e;
                            k()
                        }
                    }) : null, g && (0, r.jsx)(a.MenuItem, {
                        id: "remove-from-dictionary",
                        label: b.Z.Messages.REMOVE_FROM_DICTIONARY,
                        action: function() {
                            e = n, c.Z.dispatch({
                                type: "SPELLCHECK_UNLEARN_WORD",
                                word: e
                            });
                            var e;
                            k()
                        }
                    }), (0, r.jsx)(a.MenuCheckboxItem, {
                        id: "spellcheck",
                        label: b.Z.Messages.SPELLCHECK,
                        checked: y,
                        action: function() {
                            c.Z.dispatch({
                                type: "SPELLCHECK_TOGGLE"
                            });
                            k()
                        }
                    }), y ? (0,
                        r.jsx)(a.MenuItem, {
                        id: "languages",
                        label: b.Z.Messages.LANGUAGES,
                        action: function() {
                            return window.open(s.Z.getArticleURL(d.BhN.SPELLCHECK))
                        }
                    }) : null]
                })] : [null, null]
            }
        }
    }
]);