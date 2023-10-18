"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [64960], {
        650332: (e, t, n) => {
            n.d(t, {
                BK: () => w,
                Fj: () => j,
                ZP: () => S
            });
            var r = n(785893),
                o = n(667294),
                a = n(294184),
                l = n.n(a),
                s = n(70418),
                i = n(124251),
                c = n(189865),
                u = n(926054),
                f = n(463473),
                p = n(2590),
                h = n(473708),
                g = n(544064),
                d = n.n(g);

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        v(e, t, n[t])
                    }))
                }
                return e
            }

            function R(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function C(e, t) {
                C = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return C(e, t)
            }
            var m = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function P(e) {
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
                    var n, r = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return R(this, n)
                }
            }
            var j, E = Object.freeze({
                SMALL: d().small,
                MEDIUM: d().medium,
                LARGE: d().large
            });
            ! function(e) {
                e.MEMBER = "MEMBER";
                e.ROLE = "ROLE";
                e.CHANNEL = "CHANNEL";
                e.GUILD = "GUILD";
                e.USER = "USER"
            }(j || (j = {}));
            var w = function(e) {
                    var t, n, o = e.hasContent,
                        a = e.onClear,
                        i = e.className,
                        p = e.themeOverride,
                        g = e.size,
                        y = void 0 === g ? E.SMALL : g;
                    return (0, r.jsx)(s.Clickable, {
                        className: l()(i, d().iconLayout, y, (0, f.Q)(p), v({}, d().clear, o)),
                        onClick: function(e) {
                            e.stopPropagation();
                            null != a && a(e)
                        },
                        onMouseDown: function(e) {
                            e.preventDefault();
                            e.stopPropagation()
                        },
                        tabIndex: o ? 0 : -1,
                        "aria-hidden": !o,
                        "aria-label": h.Z.Messages.SEARCH_CLEAR,
                        focusProps: {
                            offset: 4
                        },
                        children: (0, r.jsxs)("div", {
                            className: d().iconContainer,
                            children: [(0, r.jsx)(u.Z, {
                                className: l()((t = {}, v(t, d().icon, !0), v(t, d().visible, !o), t))
                            }), (0, r.jsx)(c.Z, {
                                className: l()((n = {}, v(n, d().icon, !0), v(n, d().visible, o), n))
                            })]
                        })
                    })
                },
                D = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && C(e, t)
                    }(n, e);
                    var t = P(n);

                    function n() {
                        y(this, n);
                        var e;
                        (e = t.apply(this, arguments)).defaultInputProps = {
                            role: "combobox",
                            "aria-haspopup": "listbox",
                            "aria-autocomplete": "list"
                        };
                        e.ref = o.createRef();
                        e.containerRef = o.createRef();
                        e.handleKeyDown = function(t) {
                            var n = e.props,
                                r = n.onActivate,
                                o = n.onKeyDown,
                                a = n.onQueryChange,
                                l = n.useKeyboardNavigation;
                            null != o && o(t);
                            var s = e.ref.current;
                            if (null != s && null == r)
                                if (t.keyCode === p.yXg.ESCAPE && null != s.value && "" !== s.value && s.value.length > 0) {
                                    s.value = "";
                                    null != a && a("")
                                } else l && (e.props.gridResults ? e.handleKeyDownGrid(t) : e.handleKeyDownList(t));
                            else t.keyCode !== p.yXg.TAB && null != r && r(t)
                        };
                        e.handleChange = function(t) {
                            var n = e.props.onQueryChange;
                            null != n && n(t.currentTarget.value)
                        };
                        e.handleFocus = function(t) {
                            var n = e.props.onFocus;
                            null != n && n(t)
                        };
                        e.handleClear = function() {
                            var t = e.props.onClear,
                                n = e.ref.current;
                            null != t && t();
                            null != n && n.focus()
                        };
                        e.handleRemoveTag = function(t) {
                            var n = e.props.onRemoveTag;
                            null == n || n(t)
                        };
                        e.focus = function() {
                            var t = e.ref.current;
                            null != t && t.focus()
                        };
                        return e
                    }
                    var a = n.prototype;
                    a.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.focusAfterReady,
                            r = t.isReady;
                        n && !e.isReady && r && this.focus()
                    };
                    a.handleKeyDownGrid = function(e) {
                        var t = this.props,
                            n = t.selectedRow,
                            r = t.selectedColumn,
                            o = t.sections,
                            a = t.query,
                            l = t.tags,
                            s = t.onSelectionChange,
                            i = t.onSelect,
                            c = t.onRemoveTag,
                            u = t.preventEscapePropagation;
                        if (0 !== o.length) {
                            switch (e.keyCode) {
                                case p.yXg.BACKSPACE:
                                    if ((null == a || 0 === a.length) && null != l && l.length > 0) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        null == c || c(l.length - 1)
                                    }
                                    break;
                                case p.yXg.ARROW_DOWN:
                                    e.preventDefault();
                                    e.stopPropagation();
                                    if (-1 === n) {
                                        n = 0;
                                        r = 0
                                    } else {
                                        (n += 1) >= o.length && (n = o.length - 1);
                                        r >= o[n] && (r = o[n] - 1)
                                    }
                                    break;
                                case p.yXg.ARROW_UP:
                                    e.preventDefault();
                                    e.stopPropagation();
                                    if ((n -= 1) < 0) {
                                        n = 0;
                                        r = 0
                                    } else r >= o[n] && (r = o[n] - 1);
                                    break;
                                case p.yXg.ARROW_LEFT:
                                    e.preventDefault();
                                    e.stopPropagation(); - 1 === n && (n = 0);
                                    if ((r -= 1) < 0)
                                        if ((n -= 1) >= 0) r = o[n] - 1;
                                        else if (n < 0) {
                                        n = 0;
                                        r = 0
                                    }
                                    break;
                                case p.yXg.ARROW_RIGHT:
                                    e.preventDefault();
                                    e.stopPropagation(); - 1 === n && (n = 0);
                                    if ((r += 1) >= o[n]) {
                                        r = 0;
                                        (n += 1) >= o.length && (r = o[n = o.length - 1] - 1)
                                    }
                                    break;
                                case p.yXg.ENTER:
                                    e.preventDefault();
                                    e.stopPropagation(); - 1 === n && (n = 0); - 1 === r && (r = 0);
                                    if (n >= o.length || r >= o[n]) return;
                                    null != i && i(n, r, e);
                                    return;
                                case p.yXg.ESCAPE:
                                    e.preventDefault();
                                    u && e.stopPropagation();
                                    null != i && i(null, null, e);
                                    return;
                                default:
                                    return
                            }
                            null != s && s(n, r)
                        }
                    };
                    a.handleKeyDownList = function(e) {
                        var t = this.props,
                            n = t.sections,
                            r = t.selectedSection,
                            o = t.selectedRow,
                            a = t.onSelect,
                            l = t.onSelectionChange,
                            s = t.query,
                            i = t.tags,
                            c = t.preventEscapePropagation,
                            u = this.ref.current;
                        if (null != u) switch (e.keyCode) {
                            case p.yXg.BACKSPACE:
                                if ((null == s || 0 === s.length) && null != i && i.length > 0) {
                                    var f, h;
                                    e.preventDefault();
                                    e.stopPropagation();
                                    null === (h = (f = this.props).onRemoveTag) || void 0 === h || h.call(f, i.length - 1)
                                }
                                break;
                            case p.yXg.ARROW_DOWN:
                                e.preventDefault();
                                e.stopPropagation();
                                if (n.length > r && ++o >= n[r]) {
                                    ++r >= n.length && (r = 0);
                                    o = 0
                                }
                                null == l || l(r, o);
                                break;
                            case p.yXg.ARROW_UP:
                                e.preventDefault();
                                e.stopPropagation();
                                if (--o < 0) {
                                    --r < 0 && (r = n.length - 1);
                                    o = n[r] - 1
                                }
                                null == l || l(r, o);
                                break;
                            case p.yXg.ENTER:
                                e.preventDefault();
                                e.stopPropagation();
                                n.length > r && n[r] > o && (null == a || a(r, o, e));
                                break;
                            case p.yXg.ESCAPE:
                                e.preventDefault();
                                c && e.stopPropagation();
                                null == a || a(null, null, e);
                                u.blur()
                        }
                    };
                    a.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.autoFocus,
                            o = t.query,
                            a = t.placeholder,
                            u = void 0 === a ? h.Z.Messages.DM_SEARCH_PLACEHOLDER : a,
                            p = t.themeOverride,
                            g = t.disabled,
                            y = t.onClear,
                            b = t.size,
                            R = t.maxHeight,
                            C = t.tags,
                            m = t.onActivate,
                            P = t.className,
                            E = t.inputProps,
                            D = t.focusAfterReady,
                            S = null != o && o.length > 0,
                            A = !1,
                            x = [];
                        if (null != C && C.length > 0)
                            if ("string" == typeof C[0]) {
                                C.forEach((function(t, n) {
                                    return x.push((0, r.jsxs)(s.Anchor, {
                                        focusProps: {
                                            offset: 4
                                        },
                                        className: d().tag,
                                        onClick: e.handleRemoveTag.bind(e, n),
                                        children: [t, (0, r.jsx)(c.Z, {
                                            className: d().close,
                                            "aria-label": h.Z.Messages.REMOVE
                                        })]
                                    }, n))
                                }))
                            } else {
                                A = !0;
                                C.forEach((function(t, n) {
                                    return x.push((0, r.jsxs)(s.Anchor, {
                                        className: l()(d().tag, d().richTag),
                                        onClick: e.handleRemoveTag.bind(e, n),
                                        children: [(t.type === j.MEMBER || t.type === j.USER) && null != t.avatar && (0, r.jsx)(s.Avatar, {
                                            src: t.avatar,
                                            "aria-hidden": !0,
                                            size: s.AvatarSizes.SIZE_16
                                        }), t.type === j.ROLE && null != t.color && (0,
                                            r.jsx)("span", {
                                            className: d().tagRoleColor,
                                            style: {
                                                backgroundColor: t.color
                                            }
                                        }), t.type === j.GUILD && null != t.guild && (0, r.jsx)(i.Z, {
                                            guild: t.guild,
                                            active: !0,
                                            size: i.Z.Sizes.SMOL
                                        }), (0, r.jsx)("span", {
                                            className: d().tagLabel,
                                            children: t.label
                                        }), (0, r.jsx)(c.Z, {
                                            className: d().close,
                                            "aria-label": h.Z.Messages.REMOVE
                                        })]
                                    }, n))
                                }))
                            } return (0, r.jsx)(s.FocusRing, {
                            focusTarget: this.ref,
                            ringTarget: this.containerRef,
                            children: (0, r.jsx)("div", {
                                ref: this.containerRef,
                                className: l()(P, d().container, b, (0, f.Q)(p), v({}, d().disabled, g)),
                                children: (0, r.jsxs)(s.ScrollerThin, {
                                    className: d().inner,
                                    style: {
                                        maxHeight: R
                                    },
                                    children: [x, (0, r.jsx)("input", O({
                                        className: l()(d().input, v({}, d().richTagInput, A)),
                                        type: "text",
                                        ref: this.ref,
                                        spellCheck: "false",
                                        placeholder: u,
                                        value: o,
                                        onChange: this.handleChange,
                                        onKeyDown: this.handleKeyDown,
                                        onFocus: this.handleFocus,
                                        disabled: g,
                                        "aria-disabled": g,
                                        autoFocus: !D && n,
                                        onMouseDown: m
                                    }, this.defaultInputProps, E)), null != y ? (0, r.jsx)(w, {
                                        size: b,
                                        themeOverride: p,
                                        hasContent: S,
                                        onClear: this.handleClear
                                    }) : null]
                                })
                            })
                        })
                    };
                    return n
                }(o.Component);
            D.Sizes = E;
            D.defaultProps = {
                size: E.SMALL,
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
            const S = D
        },
        855595: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                a = n(911486),
                l = n(633878);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function i(e, t) {
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

            function c(e, t) {
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
            const u = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 20 : t,
                    o = e.height,
                    a = void 0 === o ? 23 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    p = e.foreground,
                    h = c(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", i(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(h)), {
                    width: n,
                    height: a,
                    viewBox: "0 0 20 23",
                    children: (0, r.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, r.jsx)("path", {
                            className: p,
                            fill: f,
                            d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                        })
                    })
                }))
            }), a.l)
        }
    }
]);