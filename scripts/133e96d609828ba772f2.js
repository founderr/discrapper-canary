"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [21375], {
        720502: (e, r, t) => {
            t.d(r, {
                F: () => s
            });
            var n = t(785893),
                o = (t(667294), t(795308)),
                i = t(633878);

            function c(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function l(e, r) {
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

            function a(e, r) {
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
            var s = function(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    s = e.height,
                    u = void 0 === s ? 24 : s,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    b = e.colorClass,
                    O = void 0 === b ? "" : b,
                    d = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", l(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            c(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(d)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.667c0 .123-.335.174-.39.063C21.11 12.708 20.203 12 19 12a3 3 0 0 0-2.701 1.693c-.09.185-.356.23-.48.066l-.469-.626a2 2 0 0 0-3.2 0l-2.223 2.964-.506-.633a1.5 1.5 0 0 0-2.342 0l-1.854 2.318A.75.75 0 0 0 5.81 19h5.69c.276 0 .495.226.542.498.167.956.812 1.683 1.688 2.113.111.054.06.389-.063.389H5a3 3 0 0 1-3-3V5Zm8.204.977c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }
        },
        876003: (e, r, t) => {
            t.d(r, {
                Z: () => j
            });
            var n = t(785893),
                o = (t(667294),
                    t(294184)),
                i = t.n(o),
                c = t(575945),
                l = t(74535),
                a = t(795470),
                s = t(912250),
                u = t(655402),
                f = t(888291),
                p = t(2590),
                b = t(627962),
                O = t.n(b);

            function d(e, r, t) {
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
                        d(e, r, t[r])
                    }))
                }
                return e
            }

            function h(e, r) {
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
            var g = p.Ilk.PRIMARY_400,
                v = p.Ilk.PRIMARY_500;

            function j(e) {
                var r, t = e.enabled,
                    o = e.imageClassName,
                    p = e.iconWrapperClassName,
                    b = h(e, ["enabled", "imageClassName", "iconWrapperClassName"]),
                    j = (0, l.ZP)(),
                    m = (0, c.wj)(j) ? g : v,
                    w = {
                        height: 18,
                        width: 18,
                        color: (0, a.Lq)(m)
                    };
                return (0, n.jsx)(f.Z, y({
                    className: i()((r = {}, d(r, O().avatarUploader, t), d(r, O().avatarUploaderDisabled, !t), r)),
                    imageClassName: i()(o, O().avatarUploaderInnerSquare, d({}, O().avatarUploaderInnerSquareDisabled, !t)),
                    icon: null != b.image && "" !== b.image ? (0, n.jsx)(s.Z, y({}, w)) : (0, n.jsx)(u.Z, y({}, w)),
                    iconClassName: i()(O().avatarUploadIcon, O().hideDefaultIcon),
                    iconWrapperClassName: p,
                    showIcon: !0,
                    showIconDisabled: !0,
                    hideSize: !0
                }, b))
            }
        },
        888291: (e, r, t) => {
            t.d(r, {
                S: () => x,
                Z: () => I
            });
            var n = t(785893),
                o = t(667294),
                i = t(294184),
                c = t.n(i),
                l = t(441143),
                a = t.n(l),
                s = t(304548),
                u = t(421281),
                f = t(694755),
                p = t(2590),
                b = t(473708),
                O = t(307436),
                d = t.n(O);

            function y(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function v(e) {
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

            function m(e, r) {
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

            function S(e) {
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
                    var t, n = g(e);
                    if (r) {
                        var o = g(this).constructor;
                        t = Reflect.construct(n, arguments, o)
                    } else t = n.apply(this, arguments);
                    return m(this, t)
                }
            }

            function x(e) {
                var r = e.className,
                    t = e.icon,
                    o = void 0 === t ? null : t;
                return (0, n.jsx)("div", {
                    className: c()(d().imageUploaderIcon, r),
                    children: o
                })
            }
            var C = function(e) {
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
                var r = S(t);

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
                    a()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted");
                    this.inputRef.current.handleFileChange(e)
                };
                i.render = function() {
                    var e, r, t, o, i, l = this.props,
                        a = l.image,
                        O = l.hint,
                        y = l.name,
                        h = l.makeURL,
                        g = l.disabled,
                        m = l.onChange,
                        w = l.showIcon,
                        P = l.showIconDisabled,
                        S = l.className,
                        C = l.imageClassName,
                        I = l.iconClassName,
                        N = l.iconWrapperClassName,
                        E = l.icon,
                        R = l.hideSize,
                        D = l.imageStyle,
                        Z = l.showRemoveButton,
                        k = l.maxFileSizeBytes,
                        M = l.onFileSizeError,
                        V = l.onOpenImageSelectModal,
                        _ = l["aria-label"];
                    null != (e = null != a && /^data:/.test(a) ? a : h(a)) ? r = 'url("'.concat(e, '")') : null != y && (t = (0, n.jsx)("div", {
                        className: d().imageUploaderAcronym,
                        children: (0, u.Zg)(y)
                    }));
                    if (g) return (0, n.jsx)("div", {
                        className: c()(d().imageUploader, d().disabled, S),
                        children: (0, n.jsxs)("div", {
                            className: c()(d().imageUploaderInner, C),
                            style: j(v({}, D), {
                                backgroundImage: r
                            }),
                            children: [t, P && (0, n.jsx)("div", {
                                className: c()(d().imageUploaderIcon, d().imageUploaderIconDisabled, I),
                                children: E
                            })]
                        })
                    });
                    null != a ? o = (0, n.jsx)(s.Anchor, {
                        className: d().removeButton,
                        onClick: this.handleRemove,
                        children: b.Z.Messages.REMOVE
                    }) : R || (o = (0, n.jsx)("small", {
                        className: d().sizeInfo,
                        children: b.Z.Messages.MINIMUM_SIZE.format({
                            size: p.IXf
                        })
                    }));
                    var U = null !== (i = null != _ ? _ : O) && void 0 !== i ? i : b.Z.Messages.CHANGE_AVATAR;
                    return (0, n.jsxs)("div", {
                        className: c()(d().imageUploader, S),
                        children: [(0, n.jsx)(s.FocusRing, {
                            within: !0,
                            children: (0, n.jsxs)("div", {
                                className: w ? c()(d().imageUploaderIconWrapper, N) : void 0,
                                children: [(0, n.jsxs)("div", {
                                    className: c()(d().imageUploaderInner, C),
                                    style: j(v({}, D), {
                                        backgroundImage: r
                                    }),
                                    children: [(0, n.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: t
                                    }), null != V ? (0, n.jsx)(s.Clickable, {
                                        className: d().imageUploaderFileInput,
                                        "aria-label": U,
                                        onClick: V
                                    }) : (0, n.jsx)(f.ZP, {
                                        ref: this.inputRef,
                                        onChange: m,
                                        className: d().imageUploaderFileInput,
                                        "aria-label": U,
                                        tabIndex: 0,
                                        maxFileSizeBytes: k,
                                        onFileSizeError: M
                                    })]
                                }), null != O && (0, n.jsx)("div", {
                                    className: d().imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: O
                                }), w && (0, n.jsx)(x, {
                                    className: I,
                                    icon: E
                                })]
                            })
                        }), Z ? o : null]
                    })
                };
                return t
            }(o.PureComponent);
            C.defaultProps = {
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
            const I = C
        },
        912250: (e, r, t) => {
            t.d(r, {
                Z: () => u
            });
            var n = t(785893),
                o = (t(667294), t(450520)),
                i = t(218790),
                c = t(633878);

            function l(e, r, t) {
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

            function s(e, r) {
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
            const u = (0, o.hN)((function(e) {
                var r = e.color,
                    t = void 0 === r ? "currentColor" : r,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.width,
                    f = void 0 === u ? 24 : u,
                    p = s(e, ["color", "height", "width"]);
                return (0,
                    n.jsx)("svg", a(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            l(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(p)), {
                    width: f,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                        fill: t
                    })
                }))
            }), i.v)
        },
        655402: (e, r, t) => {
            t.d(r, {
                Z: () => u
            });
            var n = t(785893),
                o = (t(667294), t(450520)),
                i = t(720502),
                c = t(633878);

            function l(e, r, t) {
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

            function s(e, r) {
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
            const u = (0, o.hN)((function(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    p = s(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", a(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            l(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(p)), {
                    width: t,
                    height: i,
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
            }), i.F)
        },
        123017: (e, r, t) => {
            t.d(r, {
                Z: () => u
            });
            var n = t(785893),
                o = (t(667294), t(450520)),
                i = t(795308),
                c = t(633878);

            function l(e, r, t) {
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

            function s(e, r) {
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
            const u = (0, o.hN)((function(e) {
                var r = e.width,
                    t = void 0 === r ? 16 : r,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    c = e.color,
                    l = void 0 === c ? "currentColor" : c,
                    a = e.className,
                    s = e.foreground;
                return (0, n.jsx)("svg", {
                    className: a,
                    width: t,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        className: s,
                        fill: l,
                        d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                    })
                })
            }), (function(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    b = e.colorClass,
                    O = void 0 === b ? "" : b,
                    d = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            l(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(d)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }))
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