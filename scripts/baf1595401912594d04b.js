"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [68690], {
        876003: (e, r, t) => {
            t.d(r, {
                Z: () => j
            });
            var n = t(785893),
                o = (t(667294), t(294184)),
                i = t.n(o),
                a = t(575945),
                l = t(74535),
                c = t(795470),
                s = t(912250),
                u = t(655402),
                f = t(888291),
                p = t(2590),
                d = t(240162),
                b = t.n(d);

            function h(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function y(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        h(e, r, t[r])
                    }))
                }
                return e
            }

            function O(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            var m = p.Ilk.PRIMARY_400,
                g = p.Ilk.PRIMARY_500;

            function j(e) {
                var r, t = e.enabled,
                    o = e.imageClassName,
                    p = e.iconWrapperClassName,
                    d = O(e, ["enabled", "imageClassName", "iconWrapperClassName"]),
                    j = (0, l.ZP)(),
                    v = (0, a.wj)(j) ? m : g,
                    w = {
                        height: 18,
                        width: 18,
                        color: (0, c.Lq)(v)
                    };
                return (0, n.jsx)(f.Z, y({
                    className: i()((r = {}, h(r, b().avatarUploader, t), h(r, b().avatarUploaderDisabled, !t), r)),
                    imageClassName: i()(o, b().avatarUploaderInnerSquare, h({}, b().avatarUploaderInnerSquareDisabled, !t)),
                    icon: null != d.image && "" !== d.image ? (0, n.jsx)(s.Z, y({}, w)) : (0, n.jsx)(u.Z, y({}, w)),
                    iconClassName: i()(b().avatarUploadIcon, b().hideDefaultIcon),
                    iconWrapperClassName: p,
                    showIcon: !0,
                    showIconDisabled: !0,
                    hideSize: !0
                }, d))
            }
        },
        888291: (e, r, t) => {
            t.d(r, {
                S: () => I,
                Z: () => x
            });
            var n = t(785893),
                o = t(667294),
                i = t(294184),
                a = t.n(i),
                l = t(441143),
                c = t.n(l),
                s = t(882723),
                u = t(421281),
                f = t(694755),
                p = t(2590),
                d = t(473708),
                b = t(326726),
                h = t.n(b);

            function y(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function m(e) {
                m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return m(e)
            }

            function g(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        O(e, r, t[r])
                    }))
                }
                return e
            }

            function j(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function v(e, r) {
                return !r || "object" !== P(r) && "function" != typeof r ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : r
            }

            function w(e, r) {
                w = Object.setPrototypeOf || function(e, r) {
                    e.__proto__ = r;
                    return e
                };
                return w(e, r)
            }
            var P = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function C(e) {
                var r = function() {
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
                    var t, n = m(e);
                    if (r) {
                        var o = m(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return v(this, t)
                }
            }

            function I(e) {
                var r = e.className,
                    t = e.icon,
                    o = void 0 === t ? null : t;
                return (0,
                    n.jsx)("div", {
                    className: a()(h().imageUploaderIcon, r),
                    children: o
                })
            }
            var S = function(e) {
                ! function(e, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    r && w(e, r)
                }(t, e);
                var r = C(t);

                function t() {
                    y(this, t);
                    var e;
                    (e = r.apply(this, arguments)).inputRef = o.createRef();
                    e.handleRemove = function() {
                        e.props.onChange(null)
                    };
                    return e
                }
                var i = t.prototype;
                i.handleExternalFileChange = function(e) {
                    c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted");
                    this.inputRef.current.handleFileChange(e)
                };
                i.render = function() {
                    var e, r, t, o, i, l = this.props,
                        c = l.image,
                        b = l.hint,
                        y = l.name,
                        O = l.makeURL,
                        m = l.disabled,
                        v = l.onChange,
                        w = l.showIcon,
                        P = l.showIconDisabled,
                        C = l.className,
                        S = l.imageClassName,
                        x = l.iconClassName,
                        N = l.iconWrapperClassName,
                        E = l.icon,
                        R = l.hideSize,
                        D = l.imageStyle,
                        Z = l.showRemoveButton,
                        k = l.maxFileSizeBytes,
                        U = l.onFileSizeError,
                        _ = l.onOpenImageSelectModal,
                        V = l["aria-label"];
                    null != (e = null != c && /^data:/.test(c) ? c : O(c)) ? r = 'url("'.concat(e, '")') : null != y && (t = (0, n.jsx)("div", {
                        className: h().imageUploaderAcronym,
                        children: (0, u.Zg)(y)
                    }));
                    if (m) return (0, n.jsx)("div", {
                        className: a()(h().imageUploader, h().disabled, C),
                        children: (0, n.jsxs)("div", {
                            className: a()(h().imageUploaderInner, S),
                            style: j(g({}, D), {
                                backgroundImage: r
                            }),
                            children: [t, P && (0, n.jsx)("div", {
                                className: a()(h().imageUploaderIcon, h().imageUploaderIconDisabled, x),
                                children: E
                            })]
                        })
                    });
                    null != c ? o = (0, n.jsx)(s.Anchor, {
                        className: h().removeButton,
                        onClick: this.handleRemove,
                        children: d.Z.Messages.REMOVE
                    }) : R || (o = (0, n.jsx)("small", {
                        className: h().sizeInfo,
                        children: d.Z.Messages.MINIMUM_SIZE.format({
                            size: p.IXf
                        })
                    }));
                    var M = null !== (i = null != V ? V : b) && void 0 !== i ? i : d.Z.Messages.CHANGE_AVATAR;
                    return (0, n.jsxs)("div", {
                        className: a()(h().imageUploader, C),
                        children: [(0, n.jsx)(s.FocusRing, {
                            within: !0,
                            children: (0, n.jsxs)("div", {
                                className: w ? a()(h().imageUploaderIconWrapper, N) : void 0,
                                children: [(0, n.jsxs)("div", {
                                    className: a()(h().imageUploaderInner, S),
                                    style: j(g({}, D), {
                                        backgroundImage: r
                                    }),
                                    children: [(0, n.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: t
                                    }), null != _ ? (0, n.jsx)(s.Clickable, {
                                        className: h().imageUploaderFileInput,
                                        "aria-label": M,
                                        onClick: _
                                    }) : (0, n.jsx)(f.ZP, {
                                        ref: this.inputRef,
                                        onChange: v,
                                        className: h().imageUploaderFileInput,
                                        "aria-label": M,
                                        tabIndex: 0,
                                        maxFileSizeBytes: k,
                                        onFileSizeError: U
                                    })]
                                }), null != b && (0, n.jsx)("div", {
                                    className: h().imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: b
                                }), w && (0, n.jsx)(I, {
                                    className: x,
                                    icon: E
                                })]
                            })
                        }), Z ? o : null]
                    })
                };
                return t
            }(o.PureComponent);
            S.defaultProps = {
                name: "",
                makeURL: function(e) {
                    return e
                },
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            const x = S
        },
        912250: (e, r, t) => {
            t.d(r, {
                Z: () => c
            });
            var n = t(785893),
                o = (t(667294), t(633878));

            function i(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function a(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function l(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function c(e) {
                var r = e.color,
                    t = void 0 === r ? "currentColor" : r,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    u = e.width,
                    f = void 0 === u ? 24 : u,
                    p = l(e, ["color", "height", "width"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            i(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: f,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                        fill: t
                    })
                }))
            }
        },
        655402: (e, r, t) => {
            t.d(r, {
                Z: () => c
            });
            var n = t(785893),
                o = (t(667294), t(633878));

            function i(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function a(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function l(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function c(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    p = l(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", a(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            i(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: t,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                        fill: f
                    }), (0, n.jsx)("path", {
                        d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                        fill: f
                    })]
                }))
            }
        },
        553480: (e, r, t) => {
            t.d(r, {
                Z: () => o
            });
            var n = t(785893);
            t(667294);

            function o(e) {
                var r = e.width,
                    t = void 0 === r ? 16 : r,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    a = e.color,
                    l = void 0 === a ? "currentColor" : a,
                    c = e.className,
                    s = e.foreground;
                return (0, n.jsx)("svg", {
                    className: c,
                    width: t,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        className: s,
                        fill: l,
                        d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                    })
                })
            }
        },
        816810: (e, r, t) => {
            t.d(r, {
                $: () => n
            });
            var n;
            ! function(e) {
                e[e.IS_GUEST_INVITE = 1] = "IS_GUEST_INVITE";
                e[e.IS_VIEWED = 2] = "IS_VIEWED";
                e[e.IS_ENHANCED = 4] = "IS_ENHANCED"
            }(n || (n = {}));
            new Set([1, 2, 4])
        }
    }
]);