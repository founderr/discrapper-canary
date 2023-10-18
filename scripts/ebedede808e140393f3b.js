"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [80686, 19810], {
        919810: (e, n, t) => {
            t.d(n, {
                ZP: () => O,
                so: () => g,
                wg: () => m
            });
            var r = t(202351),
                o = t(15970),
                a = t(766496),
                i = t(61209),
                l = t(5544),
                c = t(567403),
                u = t(682776),
                s = t(563135),
                f = t(269300),
                p = t(3155),
                d = t(2590);

            function y(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function b(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return y(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e) {
                return "entity_type" in e ? {
                    entityType: e.entity_type,
                    channelId: e.channel_id
                } : e
            }

            function m(e) {
                var n = b(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.Z], 1),
                    t = n[0],
                    r = h(e),
                    o = r.entityType,
                    a = r.channelId,
                    l = o === p.WX.EXTERNAL;
                if (l) return !0;
                var c = t.getChannel(a);
                return null != c && s.ZP.canEveryoneRole(d.Plq.VIEW_CHANNEL, c)
            }

            function g(e) {
                var n = b(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.ZP, i.Z, c.Z, a.Z], 4),
                    t = n[0],
                    r = n[1],
                    s = n[2],
                    d = n[3];
                if ((0, f.Z2)(e)) return !1;
                var y = e.guild_id,
                    h = e.channel_id,
                    g = e.entity_type === p.WX.EXTERNAL,
                    O = g ? t.getDefaultChannel(e.guild_id) : r.getChannel(h),
                    v = s.getGuild(y),
                    j = d.getStageInstanceByChannel(h);
                return !!(0, o.b)(u.Z, v, O, j) && (null != O && m(e, [r]))
            }

            function O(e) {
                return (0,
                    r.e7)([l.ZP, i.Z, c.Z, a.Z], (function() {
                    return g(e, [l.ZP, i.Z, c.Z, a.Z])
                }), [e])
            }
        },
        876003: (e, n, t) => {
            t.d(n, {
                Z: () => v
            });
            var r = t(785893),
                o = (t(667294), t(294184)),
                a = t.n(o),
                i = t(575945),
                l = t(74535),
                c = t(795470),
                u = t(912250),
                s = t(655402),
                f = t(888291),
                p = t(2590),
                d = t(627962),
                y = t.n(d);

            function b(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function h(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        b(e, n, t[n])
                    }))
                }
                return e
            }

            function m(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        t = a[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        t = a[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            var g = p.Ilk.PRIMARY_400,
                O = p.Ilk.PRIMARY_500;

            function v(e) {
                var n, t = e.enabled,
                    o = e.imageClassName,
                    p = e.iconWrapperClassName,
                    d = m(e, ["enabled", "imageClassName", "iconWrapperClassName"]),
                    v = (0, l.ZP)(),
                    j = (0, i.wj)(v) ? g : O,
                    w = {
                        height: 18,
                        width: 18,
                        color: (0, c.Lq)(j)
                    };
                return (0, r.jsx)(f.Z, h({
                    className: a()((n = {}, b(n, y().avatarUploader, t), b(n, y().avatarUploaderDisabled, !t), n)),
                    imageClassName: a()(o, y().avatarUploaderInnerSquare, b({}, y().avatarUploaderInnerSquareDisabled, !t)),
                    icon: null != d.image && "" !== d.image ? (0, r.jsx)(u.Z, h({}, w)) : (0, r.jsx)(s.Z, h({}, w)),
                    iconClassName: a()(y().avatarUploadIcon, y().hideDefaultIcon),
                    iconWrapperClassName: p,
                    showIcon: !0,
                    showIconDisabled: !0,
                    hideSize: !0
                }, d))
            }
        },
        888291: (e, n, t) => {
            t.d(n, {
                S: () => I,
                Z: () => x
            });
            var r = t(785893),
                o = t(667294),
                a = t(294184),
                i = t.n(a),
                l = t(441143),
                c = t.n(l),
                u = t(70418),
                s = t(421281),
                f = t(694755),
                p = t(2590),
                d = t(473708),
                y = t(307436),
                b = t.n(y);

            function h(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function O(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        m(e, n, t[n])
                    }))
                }
                return e
            }

            function v(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function j(e, n) {
                return !n || "object" !== P(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function w(e, n) {
                w = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return w(e, n)
            }
            var P = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function C(e) {
                var n = function() {
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
                    var t, r = g(e);
                    if (n) {
                        var o = g(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return j(this, t)
                }
            }

            function I(e) {
                var n = e.className,
                    t = e.icon,
                    o = void 0 === t ? null : t;
                return (0,
                    r.jsx)("div", {
                    className: i()(b().imageUploaderIcon, n),
                    children: o
                })
            }
            var S = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && w(e, n)
                }(t, e);
                var n = C(t);

                function t() {
                    h(this, t);
                    var e;
                    (e = n.apply(this, arguments)).inputRef = o.createRef();
                    e.handleRemove = function() {
                        e.props.onChange(null)
                    };
                    return e
                }
                var a = t.prototype;
                a.handleExternalFileChange = function(e) {
                    c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted");
                    this.inputRef.current.handleFileChange(e)
                };
                a.render = function() {
                    var e, n, t, o, a, l = this.props,
                        c = l.image,
                        y = l.hint,
                        h = l.name,
                        m = l.makeURL,
                        g = l.disabled,
                        j = l.onChange,
                        w = l.showIcon,
                        P = l.showIconDisabled,
                        C = l.className,
                        S = l.imageClassName,
                        x = l.iconClassName,
                        Z = l.iconWrapperClassName,
                        N = l.icon,
                        R = l.hideSize,
                        E = l.imageStyle,
                        k = l.showRemoveButton,
                        _ = l.maxFileSizeBytes,
                        U = l.onFileSizeError,
                        D = l.onOpenImageSelectModal,
                        A = l["aria-label"];
                    null != (e = null != c && /^data:/.test(c) ? c : m(c)) ? n = 'url("'.concat(e, '")') : null != h && (t = (0, r.jsx)("div", {
                        className: b().imageUploaderAcronym,
                        children: (0, s.Zg)(h)
                    }));
                    if (g) return (0, r.jsx)("div", {
                        className: i()(b().imageUploader, b().disabled, C),
                        children: (0, r.jsxs)("div", {
                            className: i()(b().imageUploaderInner, S),
                            style: v(O({}, E), {
                                backgroundImage: n
                            }),
                            children: [t, P && (0, r.jsx)("div", {
                                className: i()(b().imageUploaderIcon, b().imageUploaderIconDisabled, x),
                                children: N
                            })]
                        })
                    });
                    null != c ? o = (0, r.jsx)(u.Anchor, {
                        className: b().removeButton,
                        onClick: this.handleRemove,
                        children: d.Z.Messages.REMOVE
                    }) : R || (o = (0, r.jsx)("small", {
                        className: b().sizeInfo,
                        children: d.Z.Messages.MINIMUM_SIZE.format({
                            size: p.IXf
                        })
                    }));
                    var M = null !== (a = null != A ? A : y) && void 0 !== a ? a : d.Z.Messages.CHANGE_AVATAR;
                    return (0, r.jsxs)("div", {
                        className: i()(b().imageUploader, C),
                        children: [(0, r.jsx)(u.FocusRing, {
                            within: !0,
                            children: (0, r.jsxs)("div", {
                                className: w ? i()(b().imageUploaderIconWrapper, Z) : void 0,
                                children: [(0, r.jsxs)("div", {
                                    className: i()(b().imageUploaderInner, S),
                                    style: v(O({}, E), {
                                        backgroundImage: n
                                    }),
                                    children: [(0, r.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: t
                                    }), null != D ? (0, r.jsx)(u.Clickable, {
                                        className: b().imageUploaderFileInput,
                                        "aria-label": M,
                                        onClick: D
                                    }) : (0, r.jsx)(f.ZP, {
                                        ref: this.inputRef,
                                        onChange: j,
                                        className: b().imageUploaderFileInput,
                                        "aria-label": M,
                                        tabIndex: 0,
                                        maxFileSizeBytes: _,
                                        onFileSizeError: U
                                    })]
                                }), null != y && (0, r.jsx)("div", {
                                    className: b().imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: y
                                }), w && (0, r.jsx)(I, {
                                    className: x,
                                    icon: N
                                })]
                            })
                        }), k ? o : null]
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
        655402: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                o = (t(667294), t(168075)),
                a = t(720502),
                i = t(633878);

            function l(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function c(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function u(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        t = a[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        t = a[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    o = e.height,
                    a = void 0 === o ? 24 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = u(e, ["width", "height", "color"]);
                return (0, r.jsxs)("svg", c(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            l(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(p)), {
                    width: t,
                    height: a,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                        fill: f
                    }), (0, r.jsx)("path", {
                        d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                        fill: f
                    })]
                }))
            }), a.F)
        }
    }
]);