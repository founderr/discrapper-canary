"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [35579], {
        650332: (e, t, E) => {
            E.d(t, {
                Fj: () => g,
                BK: () => f,
                ZP: () => G
            });
            var n = E(785893),
                s = E(667294),
                r = E(294184),
                S = E.n(r),
                a = E(882723),
                _ = E(124251),
                I = E(189865),
                i = E(361674),
                o = E(463473),
                l = E(2590),
                R = E(473708),
                O = E(539734),
                u = E.n(O);

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
                return !t || "object" !== C(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function D(e, t) {
                D = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return D(e, t)
            }
            var C = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
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
            var g, P = Object.freeze({
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
            }(g || (g = {}));
            var f = function(e) {
                    var t, E, s = e.hasContent,
                        r = e.onClear,
                        _ = e.className,
                        l = e.themeOverride,
                        O = e.size,
                        c = void 0 === O ? P.SMALL : O;
                    return (0, n.jsx)(a.Clickable, {
                        className: S()(_, u().iconLayout, c, (0, o.Q)(l), T({}, u().clear, s)),
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
                        "aria-label": R.Z.Messages.SEARCH_CLEAR,
                        focusProps: {
                            offset: 4
                        },
                        children: (0, n.jsxs)("div", {
                            className: u().iconContainer,
                            children: [(0, n.jsx)(i.Z, {
                                className: S()((t = {}, T(t, u().icon, !0), T(t, u().visible, !s), t))
                            }), (0, n.jsx)(I.Z, {
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
                        t && D(e, t)
                    }(E, e);
                    var t = d(E);

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
                            I = t.onRemoveTag,
                            i = t.preventEscapePropagation;
                        if (0 !== s.length) {
                            switch (e.keyCode) {
                                case l.yXg.BACKSPACE:
                                    if ((null == r || 0 === r.length) && null != S && S.length > 0) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        null == I || I(S.length - 1)
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
                            I = t.preventEscapePropagation,
                            i = this.ref.current;
                        if (null != i) switch (e.keyCode) {
                            case l.yXg.BACKSPACE:
                                if ((null == a || 0 === a.length) && null != _ && _.length > 0) {
                                    var o, R;
                                    e.preventDefault();
                                    e.stopPropagation();
                                    null === (R = (o = this.props).onRemoveTag) || void 0 === R || R.call(o, _.length - 1)
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
                                I && e.stopPropagation();
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
                            i = void 0 === r ? R.Z.Messages.DM_SEARCH_PLACEHOLDER : r,
                            l = t.themeOverride,
                            O = t.disabled,
                            c = t.onClear,
                            N = t.size,
                            A = t.maxHeight,
                            D = t.tags,
                            C = t.onActivate,
                            d = t.className,
                            P = t.inputProps,
                            L = t.focusAfterReady,
                            G = null != s && s.length > 0,
                            U = !1,
                            p = [];
                        if (null != D && D.length > 0)
                            if ("string" == typeof D[0]) {
                                D.forEach((function(t, E) {
                                    return p.push((0, n.jsxs)(a.Anchor, {
                                        focusProps: {
                                            offset: 4
                                        },
                                        className: u().tag,
                                        onClick: e.handleRemoveTag.bind(e, E),
                                        children: [t, (0, n.jsx)(I.Z, {
                                            className: u().close,
                                            "aria-label": R.Z.Messages.REMOVE
                                        })]
                                    }, E))
                                }))
                            } else {
                                U = !0;
                                D.forEach((function(t, E) {
                                    return p.push((0, n.jsxs)(a.Anchor, {
                                        className: S()(u().tag, u().richTag),
                                        onClick: e.handleRemoveTag.bind(e, E),
                                        children: [(t.type === g.MEMBER || t.type === g.USER) && null != t.avatar && (0, n.jsx)(a.Avatar, {
                                            src: t.avatar,
                                            "aria-hidden": !0,
                                            size: a.AvatarSizes.SIZE_16
                                        }), t.type === g.ROLE && null != t.color && (0,
                                            n.jsx)("span", {
                                            className: u().tagRoleColor,
                                            style: {
                                                backgroundColor: t.color
                                            }
                                        }), t.type === g.GUILD && null != t.guild && (0, n.jsx)(_.Z, {
                                            guild: t.guild,
                                            active: !0,
                                            size: _.Z.Sizes.SMOL
                                        }), (0, n.jsx)("span", {
                                            className: u().tagLabel,
                                            children: t.label
                                        }), (0, n.jsx)(I.Z, {
                                            className: u().close,
                                            "aria-label": R.Z.Messages.REMOVE
                                        })]
                                    }, E))
                                }))
                            } return (0, n.jsx)(a.FocusRing, {
                            focusTarget: this.ref,
                            ringTarget: this.containerRef,
                            children: (0, n.jsx)("div", {
                                ref: this.containerRef,
                                className: S()(d, u().container, N, (0, o.Q)(l), T({}, u().disabled, O)),
                                children: (0, n.jsxs)(a.ScrollerThin, {
                                    className: u().inner,
                                    style: {
                                        maxHeight: A
                                    },
                                    children: [p, (0, n.jsx)("input", M({
                                        className: S()(u().input, T({}, u().richTagInput, U)),
                                        type: "text",
                                        ref: this.ref,
                                        spellCheck: "false",
                                        placeholder: i,
                                        value: s,
                                        onChange: this.handleChange,
                                        onKeyDown: this.handleKeyDown,
                                        onFocus: this.handleFocus,
                                        disabled: O,
                                        "aria-disabled": O,
                                        autoFocus: !L && E,
                                        onMouseDown: C
                                    }, this.defaultInputProps, P)), null != c ? (0, n.jsx)(f, {
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
            L.Sizes = P;
            L.defaultProps = {
                size: P.SMALL,
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
        673646: (e, t, E) => {
            E.d(t, {
                Z: () => I
            });
            var n = E(667294),
                s = E(202351),
                r = E(61209),
                S = E(473903),
                a = E(983512),
                _ = E(717037);

            function I(e) {
                var t, E, I = (0, s.e7)([S.default], (function() {
                        return S.default.getCurrentUser()
                    })),
                    i = (0, s.e7)([r.Z], (function() {
                        return r.Z.getChannel(e)
                    })),
                    o = (0, s.e7)([a.Z], (function() {
                        return null != e ? a.Z.getBroadcastByChannel(e) : null
                    })),
                    l = (0, _.ZP)(),
                    R = n.useMemo((function() {
                        var e;
                        return null !== (t = null == i || null === (e = i.recipients) || void 0 === e ? void 0 : e.map((function(e) {
                            return S.default.getUser(e)
                        })).filter((function(e) {
                            return null != e && e.id !== (null == o ? void 0 : o.userId)
                        }))) && void 0 !== t ? t : []
                    }), [null == o ? void 0 : o.userId, null == i ? void 0 : i.recipients]);
                return null == I ? [] : l ? R : null !== (E = R.length > 0 ? [I].concat(R) : null == o ? void 0 : o.viewers) && void 0 !== E ? E : []
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
                _ = E(882723),
                I = E(396043),
                i = E(118442),
                o = E(968449),
                l = E(917019),
                R = E(567403),
                O = E(607556),
                u = E(968696),
                c = E(673646),
                T = E(717037),
                N = E(441143),
                M = E.n(N),
                A = E(842227),
                D = E(650332),
                C = E(664625),
                d = E(61209),
                g = E(27851),
                P = E(21372),
                f = E(840922),
                L = E(107218),
                G = E(473903),
                U = E(749565),
                p = 200,
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

            function m(e) {
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

            function y(e) {
                var t;
                e.rowType === h.aC.USER ? t = {
                    type: D.Fj.USER,
                    label: e.name,
                    avatar: e.avatarURL
                } : e.rowType === h.aC.GUILD && (t = {
                    type: D.Fj.GUILD,
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
                    E = (0, S.Wu)([R.Z, g.Z], (function() {
                        var E = [];
                        e.forEach((function(e) {
                            var n, s = R.Z.getGuild(e),
                                r = null !== (n = g.Z.getMemberCount(e)) && void 0 !== n ? n : p;
                            null != s && r < p && (null == t ? void 0 : t(s.name)) && E.push(s)
                        }));
                        return E
                    }), [e, t]);
                return E
            }

            function H(e) {
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

            function Y(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                        return !0
                    },
                    E = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return e.filter((function(e) {
                    return null != e && (null == t ? void 0 : t(e.username))
                })).map((function(e) {
                    return {
                        rowType: h.aC.USER,
                        name: U.ZP.getUserTag(e),
                        id: e.id,
                        disabled: E && f.Z.isFriend(e.id),
                        avatarURL: e.getAvatarURL(null, 24),
                        key: "".concat(h.aC.USER, ":").concat(e.id)
                    }
                }))
            }

            function V() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
                        return !0
                    },
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    E = arguments.length > 2 ? arguments[2] : void 0,
                    n = (0, S.Wu)([f.Z], (function() {
                        return f.Z.getFriendIDs()
                    })),
                    r = b(t),
                    a = (0, S.e7)([C.default], (function() {
                        return C.default.getId()
                    })),
                    _ = (0, S.e7)([P.ZP], (function() {
                        return P.ZP.getMemberVersion()
                    })),
                    I = s.useMemo((function() {
                        var e = new Set(n);
                        r.forEach((function(t) {
                            P.ZP.getMemberIds(t.id).forEach((function(t) {
                                e.has(t) || f.Z.isBlocked(t) || e.add(t)
                            }))
                        }));
                        return e
                    }), [r, n, _]),
                    i = (0, S.Wu)([G.default], (function() {
                        return m(I).map((function(e) {
                            return G.default.getUser(e)
                        }))
                    }), [I]),
                    o = i.filter((function(e) {
                        return null != e && !e.bot && e.id !== a
                    })).sort((function(e, t) {
                        var E = d.Z.getChannel(d.Z.getDMFromUserId(null == e ? void 0 : e.id)),
                            n = d.Z.getChannel(d.Z.getDMFromUserId(null == t ? void 0 : t.id));
                        return A.default.compare(null == E ? void 0 : E.lastMessageId, null == n ? void 0 : n.lastMessageId) > 0 ? -1 : 1
                    }));
                return Y(o, e, E)
            }
            var x = E(294184),
                w = E.n(x),
                z = E(377463),
                B = E(58838),
                j = E(473708),
                q = E(704567),
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
                    I = e.users,
                    o = e.guilds,
                    l = e.query,
                    R = e.maxCount,
                    O = e.onQueryChange,
                    u = e.onClickRow,
                    c = e.onRemoveTag;
                return (0, n.jsx)(_.Collapsible, {
                    className: F().collapsible,
                    isExpanded: S,
                    collapsibleContent: (0, n.jsx)("div", {
                        className: w()(F().collapsibleContent, X({}, F().visible, S)),
                        children: (0, n.jsx)(i.Z, {
                            listClassName: F().list,
                            pendingAdditions: t,
                            query: l,
                            onQueryChange: O,
                            onClickRow: u,
                            onRemovePendingAddition: c,
                            users: I,
                            guilds: o,
                            renderEmptyText: function(e) {
                                return j.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format({
                                    query: e
                                })
                            },
                            hintText: s,
                            placeholderText: r,
                            disabledText: j.Z.Messages.BROADCASTING_SETTINGS_MODAL_DISABLED_DESCRIPTION,
                            maxCount: R,
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
                            }), S ? (0, n.jsx)(B.Z, {}) : (0, n.jsx)(z.Z, {})]
                        })
                    }
                })
            }
            var K = E(2590),
                W = E(314433),
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
                    E = void 0 === t ? j.Z.Messages.BROADCASTING_SETTINGS : t,
                    N = e.buttonCTA,
                    M = void 0 === N ? j.Z.Messages.BROADCAST_SETTINGS_SAVE : N,
                    A = e.transitionState,
                    D = e.onClose,
                    d = e.onSave,
                    f = function() {
                        null == d || d();
                        var e, t = te(x(), 2),
                            E = t[0],
                            n = t[1];
                        I.ZP.trackWithMetadata(K.rMx.BROADCAST_SETTINGS_UPDATED, {
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
                    U = function(e) {
                        W(e)
                    },
                    Z = function(e, t) {
                        var E = (0, i.G)(t);
                        q((function(n) {
                            var s = ee({}, n);
                            s[e] = ee({}, s[e]);
                            E in s[e] ? delete s[e][E] : s[e][E] = y(t);
                            return s
                        }))
                    },
                    m = function(e, t) {
                        q((function(E) {
                            var n = ee({}, E);
                            n[e] = ee({}, n[e]);
                            delete n[e][t];
                            return n
                        }))
                    },
                    x = function() {
                        var e = new Set,
                            t = new Set;
                        Object.values(B[h.aC.USER]).forEach((function(e) {
                            var E = e.row;
                            return t.add(E.id)
                        }));
                        Object.values(B[h.aC.GUILD]).forEach((function(t) {
                            var E = t.row;
                            return e.add(E.id)
                        }));
                        var E = function(e) {
                            var t, E = C.default.getId(),
                                n = e;
                            n.length > 10 && (n = n.slice(0, 10));
                            return n.filter((function(e) {
                                return P.ZP.isMember(e, E) && (null !== (t = g.Z.getMemberCount(e)) && void 0 !== t ? t : p) < p
                            }))
                        }(Array.from(e));
                        return [E, function(e) {
                            var t = e;
                            t.length > 10 && (t = t.slice(0, 10));
                            return t
                        }(Array.from(t))]
                    },
                    w = function() {
                        var e, t = o.MI.useSetting(),
                            E = o.GA.useSetting(),
                            n = {},
                            s = {};
                        H(t).forEach((function(e) {
                            var t = (0, i.G)(e);
                            n[t] = y(e)
                        }));
                        E.length > 0 && Y(E.map((function(e) {
                            return G.default.getUser(e)
                        })).filter((function(e) {
                            return null != e
                        }))).map((function(e) {
                            var t = (0, i.G)(e);
                            s[t] = y(e)
                        }));
                        return v(e = {}, h.aC.GUILD, n), v(e, h.aC.USER, s), e
                    }(),
                    z = te(s.useState(w), 2),
                    B = z[0],
                    q = z[1],
                    F = te(s.useState(""), 2),
                    X = F[0],
                    W = F[1],
                    J = o.Uc.useSetting(),
                    $ = te(s.useState(null == J || J), 2),
                    Ee = $[0],
                    ne = $[1],
                    se = o.xd.useSetting(),
                    re = te(s.useState(se), 2),
                    Se = re[0],
                    ae = re[1],
                    _e = te(s.useState(!1), 2),
                    Ie = _e[0],
                    ie = _e[1],
                    oe = te(s.useState(!1), 2),
                    le = oe[0],
                    Re = oe[1],
                    Oe = (0, T._n)(),
                    ue = (0, c.Z)(null == Oe ? void 0 : Oe.channelId),
                    ce = null != Oe,
                    Te = s.useMemo((function() {
                        return J !== Ee || !(0, r.isEqual)(w, B) || se !== Se
                    }), [J, Ee, w, B, se, Se]),
                    Ne = null != d,
                    Me = s.useMemo((function() {
                        return Ee || Object.keys(B[h.aC.USER]).length > 0 || Object.keys(B[h.aC.GUILD]).length > 0
                    }), [Ee, B]),
                    Ae = !Me && ce || !Me && Ne || !Te && !Ne,
                    De = s.useMemo((function() {
                        return "@" === X.trim().charAt(0)
                    }), [X]),
                    Ce = b((0, S.Wu)([R.Z], (function() {
                        return R.Z.getGuildIds()
                    }))),
                    de = s.useMemo((function() {
                        return Ce.map((function(e) {
                            return e.id
                        }))
                    }), [Ce]),
                    ge = te(function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                                return !0
                            },
                            E = arguments.length > 2 ? arguments[2] : void 0,
                            n = (0, S.e7)([L.Z], (function() {
                                return L.Z.getFlattenedGuildIds()
                            })),
                            s = H(n, t);
                        return [V(t, n, E), e ? [] : s]
                    }(De, (function(e) {
                        var t = function(e, t) {
                            return t ? e.slice(1) : e
                        }(X.trim(), De);
                        return new RegExp("".concat(u.Z.escape(t)), "i").test(e)
                    }), Ee), 2),
                    Pe = ge[0],
                    fe = ge[1];
                s.useEffect((function() {
                    I.ZP.trackWithMetadata(K.rMx.OPEN_MODAL, {
                        type: Ne ? "Start Broadcast" : "Update Broadcast"
                    })
                }), [Ne]);
                s.useEffect((function() {
                    (0, r.chunk)(de, 100).forEach((function(e) {
                        O.Z.requestMembers(e, X.trim())
                    }))
                }), [de, X]);
                return (0, n.jsxs)(_.ModalRoot, {
                    transitionState: A,
                    children: [(0, n.jsx)(_.Heading, {
                        variant: "heading-xl/semibold",
                        className: Q().header,
                        children: E
                    }), (0, n.jsx)(_.ModalCloseButton, {
                        onClick: D,
                        className: Q().close
                    }), (0, n.jsxs)(_.ModalContent, {
                        className: Q().content,
                        paddingFix: !1,
                        children: [(0, n.jsx)(_.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: Q().description,
                            children: j.Z.Messages.BROADCASTING_DESCRIPTION
                        }), (0, n.jsx)(_.FormTitle, {
                            tag: _.FormTitleTags.H5,
                            className: Q().title,
                            children: j.Z.Messages.BROADCASTING_SETTINGS_MODAL_AUDIENCE_TITLE
                        }), (0, n.jsxs)("div", {
                            className: Q().switch,
                            children: [(0, n.jsx)(_.Text, {
                                variant: "text-sm/normal",
                                children: j.Z.Messages.BROADCASTING_SETTINGS_MODAL_FRIENDS
                            }), (0, n.jsx)(_.Switch, {
                                checked: Ee,
                                onChange: function(e) {
                                    ne(e)
                                }
                            })]
                        }), (0, n.jsx)(k, {
                            selectedTags: B[h.aC.USER],
                            query: X,
                            onQueryChange: U,
                            onClickRow: function(e) {
                                return Z(h.aC.USER, e)
                            },
                            onRemoveTag: function(e) {
                                return m(h.aC.USER, e)
                            },
                            title: j.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS,
                            hintText: j.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS_HINT.format({
                                count: 10
                            }),
                            placeholderText: j.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_USERS,
                            users: Pe,
                            expanded: Ie,
                            setExpanded: function(e) {
                                U("");
                                ie(e);
                                Re(!1)
                            },
                            maxCount: 10
                        }), (0, n.jsx)(k, {
                            selectedTags: B[h.aC.GUILD],
                            query: X,
                            onQueryChange: U,
                            onClickRow: function(e) {
                                return Z(h.aC.GUILD, e)
                            },
                            onRemoveTag: function(e) {
                                return m(h.aC.GUILD, e)
                            },
                            title: j.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS,
                            hintText: j.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS_HINT.format({
                                count: 10
                            }),
                            placeholderText: j.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_GUILDS,
                            guilds: fe,
                            expanded: le,
                            setExpanded: function(e) {
                                U("");
                                Re(e);
                                ie(!1)
                            },
                            maxCount: 10
                        }), (0, n.jsx)(_.FormTitle, {
                            tag: _.FormTitleTags.H5,
                            className: Q().title,
                            children: j.Z.Messages.BROADCASTING_SETTINGS_MODAL_BEHAVIOR_TITLE
                        }), (0, n.jsxs)("div", {
                            className: Q().switch,
                            children: [(0, n.jsx)(_.Text, {
                                variant: "text-sm/normal",
                                children: j.Z.Messages.AUTO_BROADCAST_TOGGLE
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
                                        var e = te(x(), 2),
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
                                            f();
                                            D()
                                        }), l.fy.INFREQUENT_USER_ACTION)
                                    } else {
                                        f();
                                        D()
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
                m$: () => R,
                EQ: () => M,
                aC: () => l,
                IG: () => D
            });
            var n = E(734691),
                s = E(785893),
                r = (E(667294), E(882723)),
                S = E(265367),
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
            const I = {
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
            const o = {
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
            var l, R, O = E(348592),
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
            }(R || (R = {}));
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

            function D(e, t, E, s) {
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
                    }), c(r, u.Plq.MANAGE_CHANNELS.toString(), {
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
                    }), c(r, u.Plq.MANAGE_WEBHOOKS.toString(), {
                        title: a.Z.Messages.MANAGE_WEBHOOKS,
                        description: S === u.d4z.GUILD_CATEGORY ? a.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CATEGORY : a.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CHANNEL,
                        flag: u.Plq.MANAGE_WEBHOOKS
                    }),
                    c(r, u.Plq.CREATE_INSTANT_INVITE.toString(), {
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
                                    return (null == s ? void 0 : s.createPostsDisabled) && !e.isMediaChannel() ? I.getForumChannelPermissionText() : a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                                case u.d4z.GUILD_MEDIA:
                                    return a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                                case u.d4z.GUILD_ANNOUNCEMENT:
                                    return a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                        articleURL: O.Z.getArticleURL(u.BhN.ANNOUNCEMENT_CHANNELS)
                                    });
                                case u.d4z.GUILD_VOICE:
                                    return o.getTextInVoiceSendMessageChannelPermissionText(null == s ? void 0 : s.sendMessagesDisabled);
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
                                        articleURL: O.Z.getArticleURL(u.BhN.ANNOUNCEMENT_CHANNELS)
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
                                    return o.getTextInVoiceReadMessageHistoryChannelPermissionText(null == s ? void 0 : s.readMessageHistoryDisabled);
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
                                        helpCenterArticle: O.Z.getArticleURL(u.BhN.SOUNDBOARD)
                                    });
                                case u.d4z.GUILD_TEXT:
                                case u.d4z.GUILD_FORUM:
                                case u.d4z.GUILD_MEDIA:
                                    return a.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_THREADS.format({
                                        helpCenterArticle: O.Z.getArticleURL(u.BhN.SOUNDBOARD)
                                    });
                                default:
                                    return a.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_VOICE.format({
                                        helpCenterArticle: O.Z.getArticleURL(u.BhN.SOUNDBOARD)
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
                    }), c(r, u.Plq.SEND_MESSAGES_IN_THREADS.toString(), {
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
                    }),
                    c(r, u.Plq.SET_VOICE_CHANNEL_STATUS.toString(), {
                        title: a.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
                        description: a.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
                        flag: u.Plq.SET_VOICE_CHANNEL_STATUS
                    }), r
            }
        },
        855595: (e, t, E) => {
            E.d(t, {
                Z: () => _
            });
            var n = E(785893),
                s = (E(667294), E(633878));

            function r(e, t, E) {
                t in e ? Object.defineProperty(e, t, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = E;
                return e
            }

            function S(e, t) {
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

            function a(e, t) {
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

            function _(e) {
                var t = e.width,
                    E = void 0 === t ? 20 : t,
                    _ = e.height,
                    I = void 0 === _ ? 23 : _,
                    i = e.color,
                    o = void 0 === i ? "currentColor" : i,
                    l = e.foreground,
                    R = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", S(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var E = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(E);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(E).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(E, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            r(e, t, E[t])
                        }))
                    }
                    return e
                }({}, (0, s.Z)(R)), {
                    width: E,
                    height: I,
                    viewBox: "0 0 20 23",
                    children: (0, n.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, n.jsx)("path", {
                            className: l,
                            fill: o,
                            d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                        })
                    })
                }))
            }
        }
    }
]);