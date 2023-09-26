"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [35579], {
        650332: (e, t, E) => {
            E.d(t, {
                Fj: () => C,
                BK: () => P,
                ZP: () => G
            });
            var n = E(785893),
                s = E(667294),
                r = E(294184),
                S = E.n(r),
                a = E(304548),
                _ = E(124251),
                o = E(155349),
                i = E(926054),
                I = E(463473),
                l = E(2590),
                O = E(473708),
                R = E(544064),
                u = E.n(R);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function T(e, t, E) {
                t in e ? Object.defineProperty(e, t, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = E;
                return e
            }

            function N(e) {
                N = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return N(e)
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var E = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(E);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(E).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(E, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        T(e, t, E[t])
                    }))
                }
                return e
            }

            function A(e, t) {
                return !t || "object" !== D(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e, t) {
                d = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return d(e, t)
            }
            var D = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
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
                    var E, n = N(e);
                    if (t) {
                        var s = N(this).constructor;
                        E = Reflect.construct(n, arguments, s)
                    } else E = n.apply(this, arguments);
                    return A(this, E)
                }
            }
            var C, f = Object.freeze({
                SMALL: u().small,
                MEDIUM: u().medium,
                LARGE: u().large
            });
            ! function(e) {
                e.MEMBER = "MEMBER";
                e.ROLE = "ROLE";
                e.CHANNEL = "CHANNEL";
                e.GUILD = "GUILD";
                e.USER = "USER"
            }(C || (C = {}));
            var P = function(e) {
                    var t, E, s = e.hasContent,
                        r = e.onClear,
                        _ = e.className,
                        l = e.themeOverride,
                        R = e.size,
                        c = void 0 === R ? f.SMALL : R;
                    return (0, n.jsx)(a.Clickable, {
                        className: S()(_, u().iconLayout, c, (0, I.Q)(l), T({}, u().clear, s)),
                        onClick: function(e) {
                            e.stopPropagation();
                            null != r && r(e)
                        },
                        onMouseDown: function(e) {
                            e.preventDefault();
                            e.stopPropagation()
                        },
                        tabIndex: s ? 0 : -1,
                        "aria-hidden": !s,
                        "aria-label": O.Z.Messages.SEARCH_CLEAR,
                        focusProps: {
                            offset: 4
                        },
                        children: (0, n.jsxs)("div", {
                            className: u().iconContainer,
                            children: [(0, n.jsx)(i.Z, {
                                className: S()((t = {}, T(t, u().icon, !0), T(t, u().visible, !s), t))
                            }), (0, n.jsx)(o.Z, {
                                className: S()((E = {}, T(E, u().icon, !0), T(E, u().visible, s), E))
                            })]
                        })
                    })
                },
                L = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && d(e, t)
                    }(E, e);
                    var t = g(E);

                    function E() {
                        c(this, E);
                        var e;
                        (e = t.apply(this, arguments)).defaultInputProps = {
                            role: "combobox",
                            "aria-haspopup": "listbox",
                            "aria-autocomplete": "list"
                        };
                        e.ref = s.createRef();
                        e.containerRef = s.createRef();
                        e.handleKeyDown = function(t) {
                            var E = e.props,
                                n = E.onActivate,
                                s = E.onKeyDown,
                                r = E.onQueryChange,
                                S = E.useKeyboardNavigation;
                            null != s && s(t);
                            var a = e.ref.current;
                            if (null != a && null == n)
                                if (t.keyCode === l.yXg.ESCAPE && null != a.value && "" !== a.value && a.value.length > 0) {
                                    a.value = "";
                                    null != r && r("")
                                } else S && (e.props.gridResults ? e.handleKeyDownGrid(t) : e.handleKeyDownList(t));
                            else t.keyCode !== l.yXg.TAB && null != n && n(t)
                        };
                        e.handleChange = function(t) {
                            var E = e.props.onQueryChange;
                            null != E && E(t.currentTarget.value)
                        };
                        e.handleFocus = function(t) {
                            var E = e.props.onFocus;
                            null != E && E(t)
                        };
                        e.handleClear = function() {
                            var t = e.props.onClear,
                                E = e.ref.current;
                            null != t && t();
                            null != E && E.focus()
                        };
                        e.handleRemoveTag = function(t) {
                            var E = e.props.onRemoveTag;
                            null == E || E(t)
                        };
                        e.focus = function() {
                            var t = e.ref.current;
                            null != t && t.focus()
                        };
                        return e
                    }
                    var r = E.prototype;
                    r.componentDidUpdate = function(e) {
                        var t = this.props,
                            E = t.focusAfterReady,
                            n = t.isReady;
                        E && !e.isReady && n && this.focus()
                    };
                    r.handleKeyDownGrid = function(e) {
                        var t = this.props,
                            E = t.selectedRow,
                            n = t.selectedColumn,
                            s = t.sections,
                            r = t.query,
                            S = t.tags,
                            a = t.onSelectionChange,
                            _ = t.onSelect,
                            o = t.onRemoveTag,
                            i = t.preventEscapePropagation;
                        if (0 !== s.length) {
                            switch (e.keyCode) {
                                case l.yXg.BACKSPACE:
                                    if ((null == r || 0 === r.length) && null != S && S.length > 0) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        null == o || o(S.length - 1)
                                    }
                                    break;
                                case l.yXg.ARROW_DOWN:
                                    e.preventDefault();
                                    e.stopPropagation();
                                    if (-1 === E) {
                                        E = 0;
                                        n = 0
                                    } else {
                                        (E += 1) >= s.length && (E = s.length - 1);
                                        n >= s[E] && (n = s[E] - 1)
                                    }
                                    break;
                                case l.yXg.ARROW_UP:
                                    e.preventDefault();
                                    e.stopPropagation();
                                    if ((E -= 1) < 0) {
                                        E = 0;
                                        n = 0
                                    } else n >= s[E] && (n = s[E] - 1);
                                    break;
                                case l.yXg.ARROW_LEFT:
                                    e.preventDefault();
                                    e.stopPropagation(); - 1 === E && (E = 0);
                                    if ((n -= 1) < 0)
                                        if ((E -= 1) >= 0) n = s[E] - 1;
                                        else if (E < 0) {
                                        E = 0;
                                        n = 0
                                    }
                                    break;
                                case l.yXg.ARROW_RIGHT:
                                    e.preventDefault();
                                    e.stopPropagation(); - 1 === E && (E = 0);
                                    if ((n += 1) >= s[E]) {
                                        n = 0;
                                        (E += 1) >= s.length && (n = s[E = s.length - 1] - 1)
                                    }
                                    break;
                                case l.yXg.ENTER:
                                    e.preventDefault();
                                    e.stopPropagation(); - 1 === E && (E = 0); - 1 === n && (n = 0);
                                    if (E >= s.length || n >= s[E]) return;
                                    null != _ && _(E, n, e);
                                    return;
                                case l.yXg.ESCAPE:
                                    e.preventDefault();
                                    i && e.stopPropagation();
                                    null != _ && _(null, null, e);
                                    return;
                                default:
                                    return
                            }
                            null != a && a(E, n)
                        }
                    };
                    r.handleKeyDownList = function(e) {
                        var t = this.props,
                            E = t.sections,
                            n = t.selectedSection,
                            s = t.selectedRow,
                            r = t.onSelect,
                            S = t.onSelectionChange,
                            a = t.query,
                            _ = t.tags,
                            o = t.preventEscapePropagation,
                            i = this.ref.current;
                        if (null != i) switch (e.keyCode) {
                            case l.yXg.BACKSPACE:
                                if ((null == a || 0 === a.length) && null != _ && _.length > 0) {
                                    var I, O;
                                    e.preventDefault();
                                    e.stopPropagation();
                                    null === (O = (I = this.props).onRemoveTag) || void 0 === O || O.call(I, _.length - 1)
                                }
                                break;
                            case l.yXg.ARROW_DOWN:
                                e.preventDefault();
                                e.stopPropagation();
                                if (E.length > n && ++s >= E[n]) {
                                    ++n >= E.length && (n = 0);
                                    s = 0
                                }
                                null == S || S(n, s);
                                break;
                            case l.yXg.ARROW_UP:
                                e.preventDefault();
                                e.stopPropagation();
                                if (--s < 0) {
                                    --n < 0 && (n = E.length - 1);
                                    s = E[n] - 1
                                }
                                null == S || S(n, s);
                                break;
                            case l.yXg.ENTER:
                                e.preventDefault();
                                e.stopPropagation();
                                E.length > n && E[n] > s && (null == r || r(n, s, e));
                                break;
                            case l.yXg.ESCAPE:
                                e.preventDefault();
                                o && e.stopPropagation();
                                null == r || r(null, null, e);
                                i.blur()
                        }
                    };
                    r.render = function() {
                        var e = this,
                            t = this.props,
                            E = t.autoFocus,
                            s = t.query,
                            r = t.placeholder,
                            i = void 0 === r ? O.Z.Messages.DM_SEARCH_PLACEHOLDER : r,
                            l = t.themeOverride,
                            R = t.disabled,
                            c = t.onClear,
                            N = t.size,
                            A = t.maxHeight,
                            d = t.tags,
                            D = t.onActivate,
                            g = t.className,
                            f = t.inputProps,
                            L = t.focusAfterReady,
                            G = null != s && s.length > 0,
                            p = !1,
                            U = [];
                        if (null != d && d.length > 0)
                            if ("string" == typeof d[0]) {
                                d.forEach((function(t, E) {
                                    return U.push((0, n.jsxs)(a.Anchor, {
                                        focusProps: {
                                            offset: 4
                                        },
                                        className: u().tag,
                                        onClick: e.handleRemoveTag.bind(e, E),
                                        children: [t, (0, n.jsx)(o.Z, {
                                            className: u().close,
                                            "aria-label": O.Z.Messages.REMOVE
                                        })]
                                    }, E))
                                }))
                            } else {
                                p = !0;
                                d.forEach((function(t, E) {
                                    return U.push((0, n.jsxs)(a.Anchor, {
                                        className: S()(u().tag, u().richTag),
                                        onClick: e.handleRemoveTag.bind(e, E),
                                        children: [(t.type === C.MEMBER || t.type === C.USER) && null != t.avatar && (0, n.jsx)(a.Avatar, {
                                            src: t.avatar,
                                            "aria-hidden": !0,
                                            size: a.AvatarSizes.SIZE_16
                                        }), t.type === C.ROLE && null != t.color && (0,
                                            n.jsx)("span", {
                                            className: u().tagRoleColor,
                                            style: {
                                                backgroundColor: t.color
                                            }
                                        }), t.type === C.GUILD && null != t.guild && (0, n.jsx)(_.Z, {
                                            guild: t.guild,
                                            active: !0,
                                            size: _.Z.Sizes.SMOL
                                        }), (0, n.jsx)("span", {
                                            className: u().tagLabel,
                                            children: t.label
                                        }), (0, n.jsx)(o.Z, {
                                            className: u().close,
                                            "aria-label": O.Z.Messages.REMOVE
                                        })]
                                    }, E))
                                }))
                            } return (0, n.jsx)(a.FocusRing, {
                            focusTarget: this.ref,
                            ringTarget: this.containerRef,
                            children: (0, n.jsx)("div", {
                                ref: this.containerRef,
                                className: S()(g, u().container, N, (0, I.Q)(l), T({}, u().disabled, R)),
                                children: (0, n.jsxs)(a.ScrollerThin, {
                                    className: u().inner,
                                    style: {
                                        maxHeight: A
                                    },
                                    children: [U, (0, n.jsx)("input", M({
                                        className: S()(u().input, T({}, u().richTagInput, p)),
                                        type: "text",
                                        ref: this.ref,
                                        spellCheck: "false",
                                        placeholder: i,
                                        value: s,
                                        onChange: this.handleChange,
                                        onKeyDown: this.handleKeyDown,
                                        onFocus: this.handleFocus,
                                        disabled: R,
                                        "aria-disabled": R,
                                        autoFocus: !L && E,
                                        onMouseDown: D
                                    }, this.defaultInputProps, f)), null != c ? (0, n.jsx)(P, {
                                        size: N,
                                        themeOverride: l,
                                        hasContent: G,
                                        onClear: this.handleClear
                                    }) : null]
                                })
                            })
                        })
                    };
                    return E
                }(s.Component);
            L.Sizes = f;
            L.defaultProps = {
                size: f.SMALL,
                query: "",
                sections: [],
                selectedSection: 0,
                selectedRow: -1,
                selectedColumn: -1,
                gridResults: !1,
                disabled: !1,
                autoFocus: !1,
                preventEscapePropagation: !0,
                useKeyboardNavigation: !0
            };
            const G = L
        },
        911486: (e, t, E) => {
            E.d(t, {
                l: () => o
            });
            var n = E(785893),
                s = (E(667294), E(795308)),
                r = E(633878);

            function S(e, t, E) {
                t in e ? Object.defineProperty(e, t, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = E;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var E = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        E.push.apply(E, n)
                    }
                    return E
                }(Object(t)).forEach((function(E) {
                    Object.defineProperty(e, E, Object.getOwnPropertyDescriptor(t, E))
                }));
                return e
            }

            function _(e, t) {
                if (null == e) return {};
                var E, n, s = function(e, t) {
                    if (null == e) return {};
                    var E, n, s = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) {
                        E = r[n];
                        t.indexOf(E) >= 0 || (s[E] = e[E])
                    }
                    return s
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) {
                        E = r[n];
                        t.indexOf(E) >= 0 || Object.prototype.propertyIsEnumerable.call(e, E) && (s[E] = e[E])
                    }
                }
                return s
            }
            var o = function(e) {
                var t = e.width,
                    E = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    I = e.color,
                    l = void 0 === I ? s.Z.colors.INTERACTIVE_NORMAL : I,
                    O = e.colorClass,
                    R = void 0 === O ? "" : O,
                    u = _(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var E = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(E);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(E).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(E, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            S(e, t, E[t])
                        }))
                    }
                    return e
                }({}, (0, r.Z)(u)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: E,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M3.473 5.182c.268-.403.64-.739 1.09-.964l6.095-3.047a3 3 0 0 1 2.684 0l6.095 3.047A2.828 2.828 0 0 1 21 6.748V9.78a14.167 14.167 0 0 1-1.831 6.972 14.176 14.176 0 0 1-6.593 5.99 1.419 1.419 0 0 1-1.152 0 14.176 14.176 0 0 1-8.421-12.67A14.253 14.253 0 0 1 3 9.781V6.748a2.826 2.826 0 0 1 .473-1.566Zm2.945 10.305A12.179 12.179 0 0 0 12 20.808a12.179 12.179 0 0 0 5.582-5.321A9.49 9.49 0 0 0 12.467 14h-.934a9.489 9.489 0 0 0-5.115 1.487ZM12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: R
                    })
                }))
            }
        },
        673646: (e, t, E) => {
            E.d(t, {
                Z: () => o
            });
            var n = E(667294),
                s = E(202351),
                r = E(61209),
                S = E(473903),
                a = E(983512),
                _ = E(717037);

            function o(e) {
                var t, E, o = (0, s.e7)([S.default], (function() {
                        return S.default.getCurrentUser()
                    })),
                    i = (0, s.e7)([r.Z], (function() {
                        return r.Z.getChannel(e)
                    })),
                    I = (0, s.e7)([a.Z], (function() {
                        return null != e ? a.Z.getBroadcastByChannel(e) : null
                    })),
                    l = (0, _.ZP)(),
                    O = n.useMemo((function() {
                        var e;
                        return null !== (t = null == i || null === (e = i.recipients) || void 0 === e ? void 0 : e.map((function(e) {
                            return S.default.getUser(e)
                        })).filter((function(e) {
                            return null != e && e.id !== (null == I ? void 0 : I.userId)
                        }))) && void 0 !== t ? t : []
                    }), [null == I ? void 0 : I.userId, null == i ? void 0 : i.recipients]);
                return null == o ? [] : l ? O : null !== (E = O.length > 0 ? [o].concat(O) : null == I ? void 0 : I.viewers) && void 0 !== E ? E : []
            }
        },
        871042: (e, t, E) => {
            E.r(t);
            E.d(t, {
                default: () => Ee
            });
            var n = E(785893),
                s = E(667294),
                r = E(496486),
                S = E(202351),
                a = E(970168),
                _ = E(304548),
                o = E(396043),
                i = E(118442),
                I = E(968449),
                l = E(917019),
                O = E(567403),
                R = E(607556),
                u = E(968696),
                c = E(673646),
                T = E(717037),
                N = E(441143),
                M = E.n(N),
                A = E(842227),
                d = E(650332),
                D = E(664625),
                g = E(61209),
                C = E(27851),
                f = E(21372),
                P = E(840922),
                L = E(107218),
                G = E(473903),
                p = E(749565),
                U = 200,
                h = E(449518);

            function Z(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var E = 0, n = new Array(t); E < t; E++) n[E] = e[E];
                return n
            }

            function v(e, t, E) {
                t in e ? Object.defineProperty(e, t, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = E;
                return e
            }

            function y(e) {
                return function(e) {
                    if (Array.isArray(e)) return Z(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Z(e, t);
                    var E = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === E && e.constructor && (E = e.constructor.name);
                    if ("Map" === E || "Set" === E) return Array.from(E);
                    if ("Arguments" === E || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)) return Z(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e) {
                var t;
                e.rowType === h.aC.USER ? t = {
                    type: d.Fj.USER,
                    label: e.name,
                    avatar: e.avatarURL
                } : e.rowType === h.aC.GUILD && (t = {
                    type: d.Fj.GUILD,
                    label: e.name,
                    guild: e.guild
                });
                M()(null != t, "RowData must be a guild or a user");
                return {
                    display: t,
                    row: e
                }
            }

            function b(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                        return !0
                    },
                    E = (0,
                        S.Wu)([O.Z, C.Z], (function() {
                        var E = [];
                        e.forEach((function(e) {
                            var n, s = O.Z.getGuild(e),
                                r = null !== (n = C.Z.getMemberCount(e)) && void 0 !== n ? n : U;
                            null != s && r < U && (null == t ? void 0 : t(s.name)) && E.push(s)
                        }));
                        return E
                    }), [e, t]);
                return E
            }

            function w(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                        return !0
                    },
                    E = b(e, t),
                    n = s.useMemo((function() {
                        return E.map((function(e) {
                            return {
                                rowType: h.aC.GUILD,
                                name: e.name,
                                id: e.id,
                                disabled: !1,
                                guild: e,
                                key: "".concat(h.aC.GUILD, ":").concat(e.id)
                            }
                        }))
                    }), [E]);
                return n
            }

            function H(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                        return !0
                    },
                    E = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return e.filter((function(e) {
                    return null != e && (null == t ? void 0 : t(e.username))
                })).map((function(e) {
                    return {
                        rowType: h.aC.USER,
                        name: p.ZP.getUserTag(e),
                        id: e.id,
                        disabled: E && P.Z.isFriend(e.id),
                        avatarURL: e.getAvatarURL(null, 24),
                        key: "".concat(h.aC.USER, ":").concat(e.id)
                    }
                }))
            }

            function x() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
                        return !0
                    },
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    E = arguments.length > 2 ? arguments[2] : void 0,
                    n = (0, S.Wu)([P.Z], (function() {
                        return P.Z.getFriendIDs()
                    })),
                    r = b(t),
                    a = (0, S.e7)([D.default], (function() {
                        return D.default.getId()
                    })),
                    _ = (0, S.e7)([f.ZP], (function() {
                        return f.ZP.getMemberVersion()
                    })),
                    o = s.useMemo((function() {
                        var e = new Set(n);
                        r.forEach((function(t) {
                            f.ZP.getMemberIds(t.id).forEach((function(t) {
                                e.has(t) || P.Z.isBlocked(t) || e.add(t)
                            }))
                        }));
                        return e
                    }), [r, n, _]),
                    i = (0, S.Wu)([G.default], (function() {
                        return y(o).map((function(e) {
                            return G.default.getUser(e)
                        }))
                    }), [o]),
                    I = i.filter((function(e) {
                        return null != e && !e.bot && e.id !== a
                    })).sort((function(e, t) {
                        var E = g.Z.getChannel(g.Z.getDMFromUserId(null == e ? void 0 : e.id)),
                            n = g.Z.getChannel(g.Z.getDMFromUserId(null == t ? void 0 : t.id));
                        return A.default.compare(null == E ? void 0 : E.lastMessageId, null == n ? void 0 : n.lastMessageId) > 0 ? -1 : 1
                    }));
                return H(I, e, E)
            }
            var Y = E(294184),
                V = E.n(Y),
                j = E(377463),
                z = E(58838),
                B = E(473708),
                q = E(36545),
                F = E.n(q);

            function X(e, t, E) {
                t in e ? Object.defineProperty(e, t, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = E;
                return e
            }

            function k(e) {
                var t = e.selectedTags,
                    E = e.title,
                    s = e.hintText,
                    r = e.placeholderText,
                    S = e.expanded,
                    a = e.setExpanded,
                    o = e.users,
                    I = e.guilds,
                    l = e.query,
                    O = e.maxCount,
                    R = e.onQueryChange,
                    u = e.onClickRow,
                    c = e.onRemoveTag;
                return (0, n.jsx)(_.Collapsible, {
                    className: F().collapsible,
                    isExpanded: S,
                    collapsibleContent: (0, n.jsx)("div", {
                        className: V()(F().collapsibleContent, X({}, F().visible, S)),
                        children: (0, n.jsx)(i.Z, {
                            listClassName: F().list,
                            pendingAdditions: t,
                            query: l,
                            onQueryChange: R,
                            onClickRow: u,
                            onRemovePendingAddition: c,
                            users: o,
                            guilds: I,
                            renderEmptyText: function(e) {
                                return B.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format({
                                    query: e
                                })
                            },
                            hintText: s,
                            placeholderText: r,
                            disabledText: B.Z.Messages.BROADCASTING_SETTINGS_MODAL_DISABLED_DESCRIPTION,
                            maxCount: O,
                            hideRowLabel: !0
                        })
                    }),
                    children: function(e) {
                        var t = e.onClick;
                        return (0, n.jsxs)(_.Clickable, {
                            className: F().content,
                            onClick: function(e) {
                                a(!S);
                                t(e)
                            },
                            children: [(0, n.jsx)(_.Heading, {
                                variant: "text-sm/normal",
                                children: E
                            }), S ? (0, n.jsx)(z.Z, {}) : (0, n.jsx)(j.Z, {})]
                        })
                    }
                })
            }
            var K = E(2590),
                W = E(582634),
                Q = E.n(W);

            function J(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var E = 0, n = new Array(t); E < t; E++) n[E] = e[E];
                return n
            }

            function $(e, t, E) {
                t in e ? Object.defineProperty(e, t, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = E;
                return e
            }

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var E = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(E);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(E).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(E, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        $(e, t, E[t])
                    }))
                }
                return e
            }

            function te(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var E = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != E) {
                        var n, s, r = [],
                            S = !0,
                            a = !1;
                        try {
                            for (E = E.call(e); !(S = (n = E.next()).done); S = !0) {
                                r.push(n.value);
                                if (t && r.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            s = e
                        } finally {
                            try {
                                S || null == E.return || E.return()
                            } finally {
                                if (a) throw s
                            }
                        }
                        return r
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return J(e, t);
                    var E = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === E && e.constructor && (E = e.constructor.name);
                    if ("Map" === E || "Set" === E) return Array.from(E);
                    if ("Arguments" === E || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)) return J(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ee(e) {
                var t = e.headerText,
                    E = void 0 === t ? B.Z.Messages.BROADCASTING_SETTINGS : t,
                    N = e.buttonCTA,
                    M = void 0 === N ? B.Z.Messages.BROADCAST_SETTINGS_SAVE : N,
                    A = e.transitionState,
                    d = e.onClose,
                    g = e.onSave,
                    P = function() {
                        null == g || g();
                        var e, t = te(Y(), 2),
                            E = t[0],
                            n = t[1];
                        o.ZP.trackWithMetadata(K.rMx.BROADCAST_SETTINGS_UPDATED, {
                            auto_broadcast: Se,
                            broadcast_to_all_friends: Ee,
                            num_allowed_users_in_broadcast: n.length,
                            allowed_users: n,
                            num_guilds_in_broadcast: E.length,
                            guilds: E,
                            num_viewers_in_broadcast: ue.length,
                            current_viewers: null !== (e = ue.map((function(e) {
                                return e.id
                            }))) && void 0 !== e ? e : [],
                            started_broadcast: Ne
                        })
                    },
                    p = function(e) {
                        W(e)
                    },
                    Z = function(e, t) {
                        var E = (0, i.G)(t);
                        q((function(n) {
                            var s = ee({}, n);
                            s[e] = ee({}, s[e]);
                            E in s[e] ? delete s[e][E] : s[e][E] = m(t);
                            return s
                        }))
                    },
                    y = function(e, t) {
                        q((function(E) {
                            var n = ee({}, E);
                            n[e] = ee({}, n[e]);
                            delete n[e][t];
                            return n
                        }))
                    },
                    Y = function() {
                        var e = new Set,
                            t = new Set;
                        Object.values(z[h.aC.USER]).forEach((function(e) {
                            var E = e.row;
                            return t.add(E.id)
                        }));
                        Object.values(z[h.aC.GUILD]).forEach((function(t) {
                            var E = t.row;
                            return e.add(E.id)
                        }));
                        var E = function(e) {
                            var t, E = D.default.getId(),
                                n = e;
                            n.length > 10 && (n = n.slice(0, 10));
                            return n.filter((function(e) {
                                return f.ZP.isMember(e, E) && (null !== (t = C.Z.getMemberCount(e)) && void 0 !== t ? t : U) < U
                            }))
                        }(Array.from(e));
                        return [E, function(e) {
                            var t = e;
                            t.length > 10 && (t = t.slice(0, 10));
                            return t
                        }(Array.from(t))]
                    },
                    V = function() {
                        var e, t = I.MI.useSetting(),
                            E = I.GA.useSetting(),
                            n = {},
                            s = {};
                        w(t).forEach((function(e) {
                            var t = (0, i.G)(e);
                            n[t] = m(e)
                        }));
                        E.length > 0 && H(E.map((function(e) {
                            return G.default.getUser(e)
                        })).filter((function(e) {
                            return null != e
                        }))).map((function(e) {
                            var t = (0, i.G)(e);
                            s[t] = m(e)
                        }));
                        return v(e = {}, h.aC.GUILD, n), v(e, h.aC.USER, s), e
                    }(),
                    j = te(s.useState(V), 2),
                    z = j[0],
                    q = j[1],
                    F = te(s.useState(""), 2),
                    X = F[0],
                    W = F[1],
                    J = I.Uc.useSetting(),
                    $ = te(s.useState(null == J || J), 2),
                    Ee = $[0],
                    ne = $[1],
                    se = I.xd.useSetting(),
                    re = te(s.useState(se), 2),
                    Se = re[0],
                    ae = re[1],
                    _e = te(s.useState(!1), 2),
                    oe = _e[0],
                    ie = _e[1],
                    Ie = te(s.useState(!1), 2),
                    le = Ie[0],
                    Oe = Ie[1],
                    Re = (0, T._n)(),
                    ue = (0, c.Z)(null == Re ? void 0 : Re.channelId),
                    ce = null != Re,
                    Te = s.useMemo((function() {
                        return J !== Ee || !(0, r.isEqual)(V, z) || se !== Se
                    }), [J, Ee, V, z, se, Se]),
                    Ne = null != g,
                    Me = s.useMemo((function() {
                        return Ee || Object.keys(z[h.aC.USER]).length > 0 || Object.keys(z[h.aC.GUILD]).length > 0
                    }), [Ee, z]),
                    Ae = !Me && ce || !Me && Ne || !Te && !Ne,
                    de = s.useMemo((function() {
                        return "@" === X.trim().charAt(0)
                    }), [X]),
                    De = b((0, S.Wu)([O.Z], (function() {
                        return O.Z.getGuildIds()
                    }))),
                    ge = s.useMemo((function() {
                        return De.map((function(e) {
                            return e.id
                        }))
                    }), [De]),
                    Ce = te(function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                                return !0
                            },
                            E = arguments.length > 2 ? arguments[2] : void 0,
                            n = (0, S.e7)([L.Z], (function() {
                                return L.Z.getFlattenedGuildIds()
                            })),
                            s = w(n, t);
                        return [x(t, n, E), e ? [] : s]
                    }(de, (function(e) {
                        var t = function(e, t) {
                            return t ? e.slice(1) : e
                        }(X.trim(), de);
                        return new RegExp("".concat(u.Z.escape(t)), "i").test(e)
                    }), Ee), 2),
                    fe = Ce[0],
                    Pe = Ce[1];
                s.useEffect((function() {
                    o.ZP.trackWithMetadata(K.rMx.OPEN_MODAL, {
                        type: Ne ? "Start Broadcast" : "Update Broadcast"
                    })
                }), [Ne]);
                s.useEffect((function() {
                    (0, r.chunk)(ge, 100).forEach((function(e) {
                        R.Z.requestMembers(e, X.trim())
                    }))
                }), [ge, X]);
                return (0, n.jsxs)(_.ModalRoot, {
                    transitionState: A,
                    children: [(0, n.jsx)(_.Heading, {
                        variant: "heading-xl/semibold",
                        className: Q().header,
                        children: E
                    }), (0, n.jsx)(_.ModalCloseButton, {
                        onClick: d,
                        className: Q().close
                    }), (0, n.jsxs)(_.ModalContent, {
                        className: Q().content,
                        paddingFix: !1,
                        children: [(0, n.jsx)(_.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: Q().description,
                            children: B.Z.Messages.BROADCASTING_DESCRIPTION
                        }), (0, n.jsx)(_.FormTitle, {
                            tag: _.FormTitleTags.H5,
                            className: Q().title,
                            children: B.Z.Messages.BROADCASTING_SETTINGS_MODAL_AUDIENCE_TITLE
                        }), (0, n.jsxs)("div", {
                            className: Q().switch,
                            children: [(0, n.jsx)(_.Text, {
                                variant: "text-sm/normal",
                                children: B.Z.Messages.BROADCASTING_SETTINGS_MODAL_FRIENDS
                            }), (0, n.jsx)(_.Switch, {
                                checked: Ee,
                                onChange: function(e) {
                                    ne(e)
                                }
                            })]
                        }), (0, n.jsx)(k, {
                            selectedTags: z[h.aC.USER],
                            query: X,
                            onQueryChange: p,
                            onClickRow: function(e) {
                                return Z(h.aC.USER, e)
                            },
                            onRemoveTag: function(e) {
                                return y(h.aC.USER, e)
                            },
                            title: B.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS,
                            hintText: B.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS_HINT.format({
                                count: 10
                            }),
                            placeholderText: B.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_USERS,
                            users: fe,
                            expanded: oe,
                            setExpanded: function(e) {
                                p("");
                                ie(e);
                                Oe(!1)
                            },
                            maxCount: 10
                        }), (0, n.jsx)(k, {
                            selectedTags: z[h.aC.GUILD],
                            query: X,
                            onQueryChange: p,
                            onClickRow: function(e) {
                                return Z(h.aC.GUILD, e)
                            },
                            onRemoveTag: function(e) {
                                return y(h.aC.GUILD, e)
                            },
                            title: B.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS,
                            hintText: B.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS_HINT.format({
                                count: 10
                            }),
                            placeholderText: B.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_GUILDS,
                            guilds: Pe,
                            expanded: le,
                            setExpanded: function(e) {
                                p("");
                                Oe(e);
                                ie(!1)
                            },
                            maxCount: 10
                        }), (0, n.jsx)(_.FormTitle, {
                            tag: _.FormTitleTags.H5,
                            className: Q().title,
                            children: B.Z.Messages.BROADCASTING_SETTINGS_MODAL_BEHAVIOR_TITLE
                        }), (0, n.jsxs)("div", {
                            className: Q().switch,
                            children: [(0, n.jsx)(_.Text, {
                                variant: "text-sm/normal",
                                children: B.Z.Messages.AUTO_BROADCAST_TOGGLE
                            }), (0, n.jsx)(_.Switch, {
                                checked: Se,
                                onChange: ae
                            })]
                        })]
                    }), (0, n.jsx)(_.ModalFooter, {
                        children: (0, n.jsx)(_.Button, {
                            disabled: Ae,
                            onClick: function() {
                                if (!Ae)
                                    if (Te) {
                                        var e = te(Y(), 2),
                                            t = e[0],
                                            E = e[1];
                                        l.hW.updateAsync("broadcast", (function(e) {
                                            e.allowedGuildIds = t;
                                            e.allowedUserIds = E;
                                            e.allowFriends = a.D5.create({
                                                value: Ee
                                            });
                                            e.autoBroadcast = a.D5.create({
                                                value: Se
                                            });
                                            P();
                                            d()
                                        }), l.fy.INFREQUENT_USER_ACTION)
                                    } else {
                                        P();
                                        d()
                                    }
                            },
                            children: M
                        })
                    })]
                })
            }
        },
        449518: (e, t, E) => {
            E.d(t, {
                kf: () => A,
                m$: () => O,
                EQ: () => M,
                aC: () => l,
                IG: () => d
            });
            var n = E(734691),
                s = E(785893),
                r = (E(667294), E(304548)),
                S = E(818417),
                a = E(473708),
                _ = function(e, t) {
                    return (0, s.jsxs)(r.Text, {
                        color: "text-danger",
                        style: {
                            display: "flex",
                            gap: "4px",
                            margin: "8px 0 4px 0",
                            alignItems: "center"
                        },
                        variant: "text-sm/normal",
                        children: [(0, s.jsx)(S.Z, {
                            width: 14,
                            height: 14
                        }), e]
                    }, t)
                };
            const o = {
                getForumChannelPermissionText: function() {
                    return a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: _
                    })
                }
            };
            var i = function(e, t) {
                return (0, s.jsxs)(r.Text, {
                    color: "text-danger",
                    style: {
                        display: "flex",
                        gap: "4px",
                        margin: "8px 0 4px 0",
                        alignItems: "center"
                    },
                    variant: "text-sm/normal",
                    children: [(0, s.jsx)(S.Z, {
                        width: 14,
                        height: 14
                    }), e]
                }, t)
            };
            const I = {
                getTextInVoiceSendMessageChannelPermissionText: function(e) {
                    return e ? a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: i
                    }) : a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
                },
                getTextInVoiceReadMessageHistoryChannelPermissionText: function(e) {
                    return e ? a.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: i
                    }) : a.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
                }
            };
            var l, O, R = E(348592),
                u = E(2590);

            function c(e, t, E) {
                t in e ? Object.defineProperty(e, t, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = E;
                return e
            }! function(e) {
                e[e.EMPTY_STATE = 0] = "EMPTY_STATE";
                e[e.ADMINISTRATOR = 1] = "ADMINISTRATOR";
                e[e.ROLE = 2] = "ROLE";
                e[e.OWNER = 3] = "OWNER";
                e[e.MEMBER = 4] = "MEMBER";
                e[e.USER = 5] = "USER";
                e[e.GUILD = 6] = "GUILD"
            }(l || (l = {}));
            ! function(e) {
                e[e.ROLES = 0] = "ROLES";
                e[e.MEMBERS = 1] = "MEMBERS";
                e[e.USERS = 2] = "USERS";
                e[e.GUILDS = 3] = "GUILDS"
            }(O || (O = {}));
            var T, N, M = 20,
                A = "channelPermissionSettingsAdvancedModeOn";
            ! function(e) {
                e.SETTINGS_PAGE = "settings-page";
                e.MEMBERS_LIST = "members-list";
                e.EMPTY_STATE = "empty-state";
                e.CREATE_CHANNEL = "create-channel"
            }(T || (T = {}));
            ! function(e) {
                e.BASIC = "basic";
                e.ADVANCED = "advanced"
            }(N || (N = {}));

            function d(e, t, E, s) {
                var r, S = e.type;
                return c(r = {}, u.Plq.VIEW_CHANNEL.toString(), {
                        title: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL : a.Z.Messages.VIEW_CHANNEL,
                        description: function() {
                            if (t) switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY_EVERYONE;
                                case u.d4z.GUILD_VOICE:
                                case u.d4z.GUILD_STAGE_VOICE:
                                    return a.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_VOICE_EVERYONE;
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_TEXT_EVERYONE
                            }
                            return S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CHANNEL
                        }(),
                        flag: u.Plq.VIEW_CHANNEL
                    }),
                    c(r, u.Plq.MANAGE_CHANNELS.toString(), {
                        title: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.MANAGE_CHANNELS : a.Z.Messages.MANAGE_CHANNEL,
                        description: function() {
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_CATEGORY;
                                case u.d4z.GUILD_VOICE:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_VOICE;
                                case u.d4z.GUILD_STAGE_VOICE:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_STAGE;
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: u.Plq.MANAGE_CHANNELS
                    }), c(r, u.Plq.MANAGE_ROLES.toString(), {
                        title: a.Z.Messages.MANAGE_PERMISSIONS,
                        description: function() {
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CATEGORY;
                                case u.d4z.GUILD_STAGE_VOICE:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_STAGE;
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CHANNEL
                            }
                        }(),
                        flag: u.Plq.MANAGE_ROLES
                    }),
                    c(r, u.Plq.MANAGE_WEBHOOKS.toString(), {
                        title: a.Z.Messages.MANAGE_WEBHOOKS,
                        description: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CHANNEL,
                        flag: u.Plq.MANAGE_WEBHOOKS
                    }), c(r, u.Plq.CREATE_INSTANT_INVITE.toString(), {
                        title: a.Z.Messages.CREATE_INSTANT_INVITE,
                        description: function() {
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_CATEGORY;
                                case u.d4z.GUILD_VOICE:
                                case u.d4z.GUILD_STAGE_VOICE:
                                    return a.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_VOICE;
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: u.Plq.CREATE_INSTANT_INVITE
                    }), c(r, u.Plq.SEND_MESSAGES.toString(), {
                        title: u.TPd.GUILD_THREADS_ONLY.has(S) ? a.Z.Messages.CREATE_FORUM_POSTS : E && S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : a.Z.Messages.SEND_MESSAGES,
                        description: function() {
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return E ? a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_CATEGORY;
                                case u.d4z.GUILD_FORUM:
                                    return (null == s ? void 0 : s.createPostsDisabled) && !e.isMediaChannel() ? o.getForumChannelPermissionText() : a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                                case u.d4z.GUILD_MEDIA:
                                    return a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                                case u.d4z.GUILD_ANNOUNCEMENT:
                                    return a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                        articleURL: R.Z.getArticleURL(u.BhN.ANNOUNCEMENT_CHANNELS)
                                    });
                                case u.d4z.GUILD_VOICE:
                                    return I.getTextInVoiceSendMessageChannelPermissionText(null == s ? void 0 : s.sendMessagesDisabled);
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: u.Plq.SEND_MESSAGES
                    }), c(r, u.Plq.EMBED_LINKS.toString(), {
                        title: a.Z.Messages.EMBED_LINKS,
                        description: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_TEXT,
                        flag: u.Plq.EMBED_LINKS
                    }), c(r, u.Plq.ATTACH_FILES.toString(), {
                        title: a.Z.Messages.ATTACH_FILES,
                        description: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_TEXT,
                        flag: u.Plq.ATTACH_FILES
                    }), c(r, u.Plq.ADD_REACTIONS.toString(), {
                        title: a.Z.Messages.ADD_REACTIONS,
                        description: function() {
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_CATEGORY;
                                case u.d4z.GUILD_VOICE:
                                    return a.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT_WITH_VOICE_CHANNEL_EFFECTS;
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: u.Plq.ADD_REACTIONS
                    }), c(r, u.Plq.USE_EXTERNAL_EMOJIS.toString(), {
                        title: a.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
                        description: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_TEXT,
                        flag: u.Plq.USE_EXTERNAL_EMOJIS
                    }), c(r, u.Plq.USE_EXTERNAL_STICKERS.toString(), {
                        title: a.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
                        description: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_TEXT,
                        flag: u.Plq.USE_EXTERNAL_STICKERS
                    }), c(r, u.Plq.MENTION_EVERYONE.toString(), {
                        title: S === u.d4z.GUILD_STAGE_VOICE ? a.Z.Messages.MENTION_EVERYONE_STAGE : a.Z.Messages.MENTION_EVERYONE,
                        description: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_CATEGORY : S === u.d4z.GUILD_STAGE_VOICE ? a.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_STAGE : a.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_TEXT,
                        flag: u.Plq.MENTION_EVERYONE
                    }), c(r, u.Plq.MANAGE_MESSAGES.toString(), {
                        title: a.Z.Messages.MANAGE_MESSAGES,
                        description: function() {
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_CATEGORY;
                                case u.d4z.GUILD_ANNOUNCEMENT:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                        articleURL: R.Z.getArticleURL(u.BhN.ANNOUNCEMENT_CHANNELS)
                                    });
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: u.Plq.MANAGE_MESSAGES
                    }), c(r, u.Plq.READ_MESSAGE_HISTORY.toString(), {
                        title: u.TPd.GUILD_THREADS_ONLY.has(S) ? a.Z.Messages.READ_POST_HISTORY : a.Z.Messages.READ_MESSAGE_HISTORY,
                        description: function() {
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_CATEGORY;
                                case u.d4z.GUILD_VOICE:
                                    return I.getTextInVoiceReadMessageHistoryChannelPermissionText(null == s ? void 0 : s.readMessageHistoryDisabled);
                                case u.d4z.GUILD_FORUM:
                                case u.d4z.GUILD_MEDIA:
                                    return a.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_FORUM_CHANNEL;
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: u.Plq.READ_MESSAGE_HISTORY
                    }), c(r, u.Plq.SEND_TTS_MESSAGES.toString(), {
                        title: a.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
                        description: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_TEXT,
                        flag: u.Plq.SEND_TTS_MESSAGES
                    }), c(r, u.Plq.USE_APPLICATION_COMMANDS.toString(), {
                        title: a.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
                        description: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_TEXT,
                        flag: u.Plq.USE_APPLICATION_COMMANDS
                    }), c(r, u.Plq.SEND_VOICE_MESSAGES.toString(), {
                        title: a.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
                        description: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_TEXT,
                        flag: u.Plq.SEND_VOICE_MESSAGES
                    }), c(r, u.Plq.USE_CLYDE_AI.toString(), {
                        title: a.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
                        description: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION : a.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_CHANNEL_DESCRIPTION,
                        flag: u.Plq.USE_CLYDE_AI
                    }), c(r, u.Plq.CONNECT.toString(), {
                        title: a.Z.Messages.CONNECT,
                        description: function() {
                            if (t) switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY_EVERYONE;
                                case u.d4z.GUILD_STAGE_VOICE:
                                    return a.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE_EVERYONE;
                                case u.d4z.GUILD_TEXT:
                                case u.d4z.GUILD_FORUM:
                                case u.d4z.GUILD_MEDIA:
                                    return a.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS_EVERYONE;
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE_EVERYONE
                            }
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY;
                                case u.d4z.GUILD_STAGE_VOICE:
                                    return a.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE;
                                case u.d4z.GUILD_TEXT:
                                case u.d4z.GUILD_FORUM:
                                case u.d4z.GUILD_MEDIA:
                                    return a.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS;
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: u.Plq.CONNECT
                    }), c(r, u.Plq.SPEAK.toString(), {
                        title: a.Z.Messages.SPEAK,
                        description: function() {
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_CATEGORY;
                                case u.d4z.GUILD_STAGE_VOICE:
                                    return a.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_STAGE;
                                case u.d4z.GUILD_TEXT:
                                case u.d4z.GUILD_FORUM:
                                case u.d4z.GUILD_MEDIA:
                                    return a.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_THREADS;
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: u.Plq.SPEAK
                    }), c(r, u.Plq.STREAM.toString(), {
                        title: a.Z.Messages.VIDEO,
                        description: function() {
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_CATEGORY;
                                case u.d4z.GUILD_TEXT:
                                case u.d4z.GUILD_FORUM:
                                case u.d4z.GUILD_MEDIA:
                                    return a.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_THREADS;
                                case u.d4z.GUILD_STAGE_VOICE:
                                    return a.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_STAGE;
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: u.Plq.STREAM
                    }), c(r, u.Plq.USE_EMBEDDED_ACTIVITIES.toString(), {
                        title: a.Z.Messages.USE_EMBEDDED_ACTIVITIES,
                        description: function() {
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CATEGORY;
                                case u.d4z.GUILD_FORUM:
                                case u.d4z.GUILD_MEDIA:
                                    return a.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_THREADS;
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CHANNEL
                            }
                        }(),
                        flag: u.Plq.USE_EMBEDDED_ACTIVITIES
                    }), c(r, u.Plq.USE_SOUNDBOARD.toString(), {
                        title: a.Z.Messages.USE_SOUNDBOARD,
                        description: function() {
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_CATEGORY.format({
                                        helpCenterArticle: R.Z.getArticleURL(u.BhN.SOUNDBOARD)
                                    });
                                case u.d4z.GUILD_TEXT:
                                case u.d4z.GUILD_FORUM:
                                case u.d4z.GUILD_MEDIA:
                                    return a.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_THREADS.format({
                                        helpCenterArticle: R.Z.getArticleURL(u.BhN.SOUNDBOARD)
                                    });
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_VOICE.format({
                                        helpCenterArticle: R.Z.getArticleURL(u.BhN.SOUNDBOARD)
                                    })
                            }
                        }(),
                        flag: u.Plq.USE_SOUNDBOARD
                    }), c(r, u.Plq.USE_EXTERNAL_SOUNDS.toString(), {
                        title: a.Z.Messages.USE_EXTERNAL_SOUNDS,
                        description: a.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
                        flag: u.Plq.USE_EXTERNAL_SOUNDS
                    }), c(r, u.Plq.USE_VAD.toString(), {
                        title: a.Z.Messages.USE_VAD,
                        description: function() {
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_CATEGORY;
                                case u.d4z.GUILD_STAGE_VOICE:
                                    return a.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_STAGE;
                                case u.d4z.GUILD_TEXT:
                                case u.d4z.GUILD_FORUM:
                                case u.d4z.GUILD_MEDIA:
                                    return a.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_THREADS;
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: u.Plq.USE_VAD
                    }), c(r, u.Plq.PRIORITY_SPEAKER.toString(), {
                        title: a.Z.Messages.PRIORITY_SPEAKER,
                        description: function() {
                            0;
                            var e = {
                                keybind: a.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
                                onClick: function() {
                                    n.Z.open(u.oAB.KEYBINDS)
                                }
                            };
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_CATEGORY.format(e);
                                case u.d4z.GUILD_TEXT:
                                case u.d4z.GUILD_FORUM:
                                case u.d4z.GUILD_MEDIA:
                                    return a.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_THREADS.format(e);
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_VOICE.format(e)
                            }
                        }(),
                        flag: u.Plq.PRIORITY_SPEAKER
                    }), c(r, u.Plq.MUTE_MEMBERS.toString(), {
                        title: a.Z.Messages.MUTE_MEMBERS,
                        description: function() {
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_CATEGORY;
                                case u.d4z.GUILD_STAGE_VOICE:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_STAGE;
                                case u.d4z.GUILD_TEXT:
                                case u.d4z.GUILD_FORUM:
                                case u.d4z.GUILD_MEDIA:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: u.Plq.MUTE_MEMBERS
                    }), c(r, u.Plq.DEAFEN_MEMBERS.toString(), {
                        title: a.Z.Messages.DEAFEN_MEMBERS,
                        description: function() {
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_CATEGORY;
                                case u.d4z.GUILD_TEXT:
                                case u.d4z.GUILD_FORUM:
                                case u.d4z.GUILD_MEDIA:
                                    return a.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: u.Plq.DEAFEN_MEMBERS
                    }), c(r, u.Plq.MOVE_MEMBERS.toString(), {
                        title: a.Z.Messages.MOVE_MEMBERS,
                        description: function() {
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_CATEGORY;
                                case u.d4z.GUILD_STAGE_VOICE:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_STAGE;
                                case u.d4z.GUILD_TEXT:
                                case u.d4z.GUILD_FORUM:
                                case u.d4z.GUILD_MEDIA:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_VOICE
                            }
                        }(),
                        flag: u.Plq.MOVE_MEMBERS
                    }), c(r, u.Plq.REQUEST_TO_SPEAK.toString(), {
                        title: a.Z.Messages.REQUEST_TO_SPEAK,
                        description: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_STAGE,
                        flag: u.Plq.REQUEST_TO_SPEAK
                    }), c(r, u.Plq.MANAGE_THREADS.toString(), {
                        title: u.TPd.GUILD_THREADS_ONLY.has(S) ? a.Z.Messages.MANAGE_FORUM_POSTS : E && S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.MANAGE_THREADS_AND_FORUM_POSTS : a.Z.Messages.MANAGE_THREADS,
                        description: function() {
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return E ? a.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_CATEGORY;
                                case u.d4z.GUILD_FORUM:
                                case u.d4z.GUILD_MEDIA:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_TEXT;
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: u.Plq.MANAGE_THREADS
                    }), c(r, u.Plq.CREATE_PUBLIC_THREADS.toString(), {
                        title: a.Z.Messages.CREATE_PUBLIC_THREADS,
                        description: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_TEXT,
                        flag: u.Plq.CREATE_PUBLIC_THREADS
                    }), c(r, u.Plq.CREATE_PRIVATE_THREADS.toString(), {
                        title: a.Z.Messages.CREATE_PRIVATE_THREADS,
                        description: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_TEXT,
                        flag: u.Plq.CREATE_PRIVATE_THREADS
                    }),
                    c(r, u.Plq.SEND_MESSAGES_IN_THREADS.toString(), {
                        title: u.TPd.GUILD_THREADS_ONLY.has(S) ? a.Z.Messages.SEND_MESSAGES_IN_FORUM_POSTS : E && S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : a.Z.Messages.SEND_MESSAGES_IN_THREADS,
                        description: function() {
                            switch (S) {
                                case u.d4z.GUILD_CATEGORY:
                                    return E ? a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_CATEGORY;
                                case u.d4z.GUILD_FORUM:
                                case u.d4z.GUILD_MEDIA:
                                    return a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_TEXT;
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_TEXT
                            }
                        }(),
                        flag: u.Plq.SEND_MESSAGES_IN_THREADS
                    }), c(r, u.Plq.MANAGE_EVENTS.toString(), {
                        title: a.Z.Messages.MANAGE_EVENTS,
                        description: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CHANNEL,
                        flag: u.Plq.MANAGE_EVENTS
                    }), c(r, u.Plq.CREATE_EVENTS.toString(), {
                        title: a.Z.Messages.CREATE_EVENTS,
                        description: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CHANNEL,
                        flag: u.Plq.CREATE_EVENTS
                    }), c(r, u.Plq.SET_VOICE_CHANNEL_STATUS.toString(), {
                        title: a.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
                        description: a.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
                        flag: u.Plq.SET_VOICE_CHANNEL_STATUS
                    }), r
            }
        },
        855595: (e, t, E) => {
            E.d(t, {
                Z: () => i
            });
            var n = E(785893),
                s = (E(667294), E(450520)),
                r = E(911486),
                S = E(633878);

            function a(e, t, E) {
                t in e ? Object.defineProperty(e, t, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = E;
                return e
            }

            function _(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var E = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        E.push.apply(E, n)
                    }
                    return E
                }(Object(t)).forEach((function(E) {
                    Object.defineProperty(e, E, Object.getOwnPropertyDescriptor(t, E))
                }));
                return e
            }

            function o(e, t) {
                if (null == e) return {};
                var E, n, s = function(e, t) {
                    if (null == e) return {};
                    var E, n, s = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) {
                        E = r[n];
                        t.indexOf(E) >= 0 || (s[E] = e[E])
                    }
                    return s
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) {
                        E = r[n];
                        t.indexOf(E) >= 0 || Object.prototype.propertyIsEnumerable.call(e, E) && (s[E] = e[E])
                    }
                }
                return s
            }
            const i = (0, s.hN)((function(e) {
                var t = e.width,
                    E = void 0 === t ? 20 : t,
                    s = e.height,
                    r = void 0 === s ? 23 : s,
                    i = e.color,
                    I = void 0 === i ? "currentColor" : i,
                    l = e.foreground,
                    O = o(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", _(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var E = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(E);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(E).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(E, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, E[t])
                        }))
                    }
                    return e
                }({}, (0, S.Z)(O)), {
                    width: E,
                    height: r,
                    viewBox: "0 0 20 23",
                    children: (0, n.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, n.jsx)("path", {
                            className: l,
                            fill: I,
                            d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                        })
                    })
                }))
            }), r.l)
        }
    }
]);