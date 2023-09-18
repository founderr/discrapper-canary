"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [78230], {
        154027: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => k
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(882723),
                s = n(567867),
                c = n(474717),
                u = n(855483),
                f = n(545758),
                d = n(284610),
                p = n(652591),
                m = n(120415),
                h = n(310126),
                y = n(2590),
                b = n(473708),
                v = n(36627),
                g = n.n(v),
                j = n(518280),
                O = n.n(j);

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function x(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function M(e) {
                M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return M(e)
            }

            function w(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && N(e, t)
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        S(e, t, n[t])
                    }))
                }
                return e
            }

            function A(e, t) {
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

            function T(e, t) {
                return !t || "object" !== C(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function N(e, t) {
                N = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return N(e, t)
            }

            function L(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
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
            var C = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
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
                    var n, r = M(e);
                    if (t) {
                        var o = M(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return T(this, n)
                }
            }
            var D = 104;

            function R(e) {
                var t, n, i = e.file,
                    l = L(o.useState(), 2),
                    s = l[0],
                    c = l[1],
                    u = L(o.useState(!1), 2),
                    f = u[0],
                    d = u[1],
                    p = L(o.useState({}), 2),
                    m = p[0],
                    h = p[1],
                    y = o.useRef(null);
                o.useEffect((function() {
                    null != y.current && d(!1);
                    if (null != i) {
                        var e = URL.createObjectURL(i);
                        c(e);
                        return function() {
                            c(void 0);
                            URL.revokeObjectURL(e)
                        }
                    }
                }), [i]);
                o.useLayoutEffect((function() {
                    var e = y.current;
                    null != e && (e.onload = function() {
                        var t = e.naturalWidth / e.naturalHeight,
                            n = Math.max(.66, Math.min(t, 4));
                        h(1 === n ? {
                            width: D,
                            height: D
                        } : n > 1 ? {
                            width: D * n,
                            height: void 0
                        } : {
                            width: void 0,
                            height: D / n
                        });
                        d(!0)
                    })
                }), []);
                var b, v, j = Math.max(16, (120 - (null !== (n = null === (t = y.current) || void 0 === t ? void 0 : t.width) && void 0 !== n ? n : 0)) / 2);
                return (0, r.jsx)("img", {
                    ref: y,
                    src: s,
                    className: a()(g().icon, S({}, g().image, !f)),
                    "aria-hidden": !0,
                    alt: "",
                    style: {
                        width: null !== (b = m.width) && void 0 !== b ? b : "initial",
                        height: null !== (v = m.height) && void 0 !== v ? v : D,
                        marginLeft: j,
                        marginRight: j,
                        marginTop: null != m.height ? D - m.height - 33 : -33
                    }
                })
            }
            var _ = function(e) {
                    w(n, e);
                    var t = I(n);

                    function n() {
                        x(this, n);
                        return t.apply(this, arguments)
                    }
                    n.prototype.render = function() {
                        return this.props.upload.item.platform !== c.ow.WEB ? null : this.props.upload.isImage ? (0, r.jsx)(R, {
                            file: this.props.upload.item.file
                        }) : (0, r.jsx)("div", {
                            className: a()(g().icon, S({}, g()[null !== (e = this.props.upload.classification) && void 0 !== e ? e : ""], !0))
                        });
                        var e
                    };
                    return n
                }(o.Component),
                Z = function(e) {
                    w(n, e);
                    var t = I(n);

                    function n(e) {
                        x(this, n);
                        var r, o, i, a;
                        (r = t.call(this, e)).cancelAll = function() {
                            s.Z.clearAll(r.props.channelId, r.props.draftType);
                            r.props.onClose()
                        };
                        r.cancel = function() {
                            r.props.onClose()
                        };
                        r.handleTextChange = function(e, t, n) {
                            r.setState({
                                textValue: t,
                                richValue: n
                            })
                        };
                        r.handleSubmit = function() {
                            var e = r.props,
                                t = e.upload,
                                n = e.onClose,
                                o = e.onSubmit,
                                i = r.state;
                            o({
                                upload: t,
                                name: i.filename,
                                description: i.description,
                                spoiler: i.hasSpoiler
                            });
                            n()
                        };
                        var l, c, f, p = e.ignoreDraft ? "" : d.Z.getDraft(r.props.channelId, e.draftType);
                        r.state = A(P({}, (0, u.eK)(p)), {
                            textFocused: !0,
                            hasSpoiler: null !== (l = null === (o = e.upload) || void 0 === o ? void 0 : o.spoiler) && void 0 !== l && l,
                            filename: null !== (c = null === (i = e.upload) || void 0 === i ? void 0 : i.filename) && void 0 !== c ? c : "",
                            contentWarningProps: null,
                            description: null !== (f = null === (a = e.upload) || void 0 === a ? void 0 : a.description) && void 0 !== f ? f : ""
                        });
                        return r
                    }
                    var i = n.prototype;
                    i.componentDidMount = function() {
                        var e;
                        (null === (e = this.props.upload) || void 0 === e ? void 0 : e.showLargeMessageDialog) && this.props.upload.item.platform === c.ow.WEB && p.default.track(y.rMx.OPEN_MODAL, {
                            type: "Upload Large Message",
                            message_content_length: this.props.upload.item.file.size
                        });
                        m.FB && h.ZP.focus()
                    };
                    i.shouldComponentUpdate = function(e) {
                        return null != e.upload
                    };
                    i.componentDidUpdate = function(e) {
                        var t, n;
                        if ((null === (t = e.upload) || void 0 === t ? void 0 : t.filename) !== (null === (n = this.props.upload) || void 0 === n ? void 0 : n.filename)) {
                            var r, o;
                            this.setState({
                                filename: null !== (o = null === (r = this.props.upload) || void 0 === r ? void 0 : r.filename) && void 0 !== o ? o : ""
                            })
                        }
                    };
                    i.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.upload,
                            i = t.transitionState,
                            s = t.messageMaxLength,
                            c = t.disableSpoiler,
                            u = this.state.hasSpoiler;
                        return (0, r.jsxs)(l.ModalRoot, {
                            "aria-label": b.Z.Messages.ATTACH_FILES,
                            size: l.ModalSize.DYNAMIC,
                            transitionState: i,
                            className: a()(g().uploadModal),
                            children: [(0, r.jsxs)("div", {
                                className: g().inner,
                                children: [(0, r.jsxs)("div", {
                                    className: a()(g().file, S({}, g().expandable, n.isImage)),
                                    children: [(0, r.jsx)(_, {
                                        upload: n
                                    }), (0, r.jsxs)("div", {
                                        className: g().description,
                                        children: [(0, r.jsx)("div", {
                                            className: g().filename,
                                            children: n.showLargeMessageDialog ? b.Z.Messages.LARGE_MESSAGE_UPLOAD_TITLE_MAX_LENGTH.format({
                                                maxLength: s
                                            }) : n.filename
                                        }), n.showLargeMessageDialog ? (0, r.jsx)("div", {
                                            className: g().subtitle,
                                            children: b.Z.Messages.LARGE_MESSAGE_UPLOAD_SUBTITLE
                                        }) : null]
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: g().comment,
                                    children: (0, r.jsxs)(o.Fragment, {
                                        children: [(0, r.jsx)("div", {
                                            className: g().label,
                                            children: (0, r.jsx)("span", {
                                                children: b.Z.Messages.UPLOAD_AREA_FILENAME
                                            })
                                        }), (0, r.jsx)(l.TextInput, {
                                            className: a()(g().channelTextAreaUpload, O().marginTop8),
                                            value: this.state.filename,
                                            onChange: function(t) {
                                                return e.setState({
                                                    filename: t
                                                })
                                            },
                                            onKeyDown: function(t) {
                                                if (t.which === y.yXg.ENTER) return e.handleSubmit()
                                            }
                                        }), n.isImage ? (0, r.jsxs)(o.Fragment, {
                                            children: [(0, r.jsx)("div", {
                                                className: g().label,
                                                children: (0, r.jsx)("span", {
                                                    children: b.Z.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_LABEL
                                                })
                                            }), (0, r.jsx)(l.TextInput, {
                                                className: a()(g().channelTextAreaUpload, O().marginTop8),
                                                placeholder: b.Z.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_PLACEHOLDER,
                                                value: this.state.description,
                                                onChange: function(t) {
                                                    return e.setState({
                                                        description: t
                                                    })
                                                },
                                                onKeyDown: function(t) {
                                                    if (t.which === y.yXg.ENTER) return e.handleSubmit()
                                                }
                                            })]
                                        }) : null, !0 !== c && (0, r.jsx)(l.Checkbox, {
                                            className: O().marginBottom20,
                                            value: u,
                                            onChange: function(t, n) {
                                                return e.setState({
                                                    hasSpoiler: n
                                                })
                                            },
                                            children: (0, r.jsx)(l.Text, {
                                                variant: "text-sm/normal",
                                                children: b.Z.Messages.SPOILER_MARK_SELECTED
                                            })
                                        })]
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: g().footer,
                                children: (0, r.jsxs)("div", {
                                    className: a()(g().hasSpoilers, g().footerRightAlign),
                                    children: [(0, r.jsx)(l.Button, {
                                        type: "button",
                                        look: l.Button.Looks.LINK,
                                        color: l.Button.Colors.PRIMARY,
                                        onClick: this.cancel,
                                        children: (0, r.jsx)("span", {
                                            children: b.Z.Messages.CANCEL
                                        })
                                    }), (0, r.jsx)(l.Button, {
                                        type: "submit",
                                        onClick: this.handleSubmit,
                                        children: (0, r.jsx)("span", {
                                            children: b.Z.Messages.ATTACHMENT_MODAL_SAVE
                                        })
                                    })]
                                })
                            })]
                        })
                    };
                    return n
                }(o.Component);

            function k(e) {
                var t = (0, f.Z)();
                return e.upload.item.platform !== c.ow.WEB ? null : (0, r.jsx)(Z, A(P({}, e), {
                    file: e.upload.item.file,
                    messageMaxLength: t
                }))
            }
        },
        631183: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(882723),
                s = n(668159),
                c = n(981099),
                u = n.n(c);

            function f(e) {
                var t = e.onClick,
                    n = e.children,
                    i = e.tooltip,
                    c = e.dangerous,
                    f = void 0 !== c && c,
                    d = e.className;
                return (0, r.jsx)(l.Tooltip, {
                    text: i,
                    hideOnClick: !0,
                    children: function(e) {
                        var l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            p = e.onClick;
                        return (0, r.jsx)(s.zx, {
                            onMouseEnter: l,
                            onMouseLeave: c,
                            onClick: function(e) {
                                e.stopPropagation();
                                null == p || p();
                                t(e)
                            },
                            dangerous: f,
                            "aria-label": i,
                            className: d,
                            children: o.Children.map(n, (function(e) {
                                return o.isValidElement(e) ? o.cloneElement(e, {
                                    className: a()(e.props.className, u().actionBarIcon)
                                }) : e
                            }))
                        })
                    }
                })
            }
        },
        873506: (e, t, n) => {
            n.d(t, {
                q: () => m,
                Z: () => M
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(457217),
                s = n(882723),
                c = n(567867),
                u = n(668159),
                f = n(930948);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var m, h = n(2590),
                y = n(473708),
                b = n(651898),
                v = n.n(b);

            function g(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        g(e, t, n[t])
                    }))
                }
                return e
            }

            function O(e, t) {
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
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }! function(e) {
                e[e.SMALL = 0] = "SMALL";
                e[e.MEDIUM = 1] = "MEDIUM"
            }(m || (m = {}));

            function x(e) {
                e.stopPropagation()
            }

            function S(e, t) {
                var n = e.id,
                    i = e.channelId,
                    d = e.className,
                    b = e.children,
                    S = e.actions,
                    M = e.handleEditModal,
                    w = e.keyboardModeEnabled,
                    P = e.onKeyDown,
                    A = e.draftType,
                    T = e.size,
                    N = void 0 === T ? m.MEDIUM : T,
                    L = (0, l.JA)(n),
                    C = L.onFocus,
                    I = E(L, ["onFocus"]),
                    D = function(e, t) {
                        var n = p((0, o.useState)(!1), 2),
                            r = n[0],
                            i = n[1];
                        return {
                            handleFocus: (0, o.useCallback)((function(t) {
                                (t.target === t.currentTarget || t.currentTarget.contains(document.activeElement)) && i(!0);
                                null != e && e(t)
                            }), [e]),
                            handleBlur: (0, o.useCallback)((function(e) {
                                e.target !== e.currentTarget && e.currentTarget.contains(document.activeElement) || i(!1);
                                null != t && t(e)
                            }), [t]),
                            isFocused: r
                        }
                    }(C),
                    R = D.handleFocus,
                    _ = D.handleBlur,
                    Z = N === m.SMALL,
                    k = null != S;
                return (0, r.jsx)(s.FocusRing, {
                    children: (0, r.jsx)("li", O(j({}, I), {
                        onFocus: R,
                        onBlur: _,
                        onKeyDown: function(e) {
                            if (w) {
                                switch (e.which) {
                                    case h.yXg.D:
                                        e.preventDefault();
                                        c.Z.remove(i, n, A);
                                        return;
                                    case h.yXg.E:
                                        if (null != M) {
                                            e.preventDefault();
                                            M(e)
                                        }
                                        return;
                                    case h.yXg.BACKSPACE:
                                        if (e.ctrlKey) {
                                            e.preventDefault();
                                            c.Z.clearAll(i, A)
                                        } else {
                                            e.preventDefault();
                                            c.Z.remove(i, n, A)
                                        }
                                        return;
                                    case h.yXg.ARROW_UP:
                                        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                                        e.preventDefault();
                                        f.S.dispatchToLastSubscribed(h.CkL.FOCUS_MESSAGES, {
                                            atEnd: !0
                                        })
                                }
                                null == P || P(e)
                            }
                        },
                        className: a()(v().upload, d),
                        ref: t,
                        children: (0, r.jsxs)("div", {
                            className: v().uploadContainer,
                            children: [b, k ? (0, r.jsx)("div", {
                                className: v().actionBarContainer,
                                children: (0, r.jsx)("div", {
                                    className: a()(v().actionBar, g({}, v().smallActionBar, Z)),
                                    onContextMenu: x,
                                    "aria-label": y.Z.Messages.ATTACHMENT_UTILITIES,
                                    children: (0, r.jsx)(u.ZP, {
                                        className: a()(g({}, v().miniPopover, Z)),
                                        children: S
                                    })
                                })
                            }) : null]
                        })
                    }))
                })
            }
            const M = o.forwardRef(S)
        },
        178230: (e, t, n) => {
            n.d(t, {
                r: () => L,
                Z: () => C
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(882723),
                s = n(567867),
                c = n(154027),
                u = n(474717),
                f = n(284610),
                d = n(507488),
                p = n(532378),
                m = n(310246),
                h = n(472034),
                y = n(813749),
                b = n(786170),
                v = n(631183),
                g = n(873506),
                j = n(473708),
                O = n(288514),
                E = n.n(O);

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function M(e, t) {
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

            function w(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return x(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var P = ["image/jpeg", "image/png", "image/webp", "image/gif", "video/quicktime", "video/mp4"];

            function A(e) {
                var t = e.alt,
                    n = e.spoiler,
                    i = e.renderContent,
                    a = w(o.useState(!1), 2),
                    l = a[0],
                    s = a[1];
                return (0,
                    r.jsx)(d.a.Provider, {
                    value: !n,
                    children: (0, r.jsx)(d.Z, {
                        type: d.Z.Types.ATTACHMENT,
                        onReveal: function() {
                            return s(!0)
                        },
                        className: E().spoilerContainer,
                        children: function(e) {
                            return (0, r.jsxs)("div", {
                                className: E().spoilerWrapper,
                                children: [i(e), (0, r.jsxs)("div", {
                                    className: E().tags,
                                    children: [null != t && "" !== t ? (0, r.jsx)("span", {
                                        className: E().altTag,
                                        children: j.Z.Messages.IMAGE_ALT
                                    }) : null, l && n ? (0, r.jsx)("span", {
                                        className: E().altTag,
                                        children: j.Z.Messages.SPOILER
                                    }) : null]
                                })]
                            })
                        }
                    })
                })
            }

            function T(e) {
                var t = e.file,
                    n = e.alt,
                    i = e.spoiler,
                    l = e.size,
                    s = void 0 === l ? g.q.MEDIUM : l,
                    c = e.onMouseEnter,
                    u = w(o.useState(), 2),
                    f = u[0],
                    d = u[1],
                    p = o.useRef(null),
                    m = s === g.q.SMALL;
                o.useEffect((function() {
                    if (null != t && !1 !== P.includes(t.type)) {
                        var e = URL.createObjectURL(t);
                        d(e);
                        return function() {
                            d(void 0);
                            URL.revokeObjectURL(e)
                        }
                    }
                }), [t]);
                return (0, r.jsx)("div", {
                    onMouseEnter: c,
                    className: a()(E().mediaContainer, S({}, E().imageSmall, m)),
                    children: (0, r.jsx)(A, {
                        alt: n,
                        spoiler: i,
                        renderContent: function(e) {
                            var t;
                            return (0, r.jsx)("img", {
                                ref: p,
                                src: f,
                                className: a()(E().media, (t = {}, S(t, E().spoiler, e), S(t, E().imageSmall, m), t)),
                                "aria-hidden": !0,
                                alt: null != n ? n : ""
                            })
                        }
                    })
                })
            }

            function N(e) {
                var t = e.file,
                    n = e.alt,
                    i = e.spoiler,
                    l = e.onMouseEnter,
                    s = e.onVideoLoadError,
                    c = w(o.useState(), 2),
                    u = c[0],
                    f = c[1],
                    d = o.useRef(null);
                o.useEffect((function() {
                    if (null != t) {
                        var e = URL.createObjectURL(t);
                        f(e);
                        return function() {
                            f(void 0);
                            URL.revokeObjectURL(e)
                        }
                    }
                }), [t]);
                return (0, r.jsx)("div", {
                    onMouseEnter: l,
                    className: E().mediaContainer,
                    children: (0, r.jsx)(A, {
                        alt: n,
                        spoiler: i,
                        renderContent: function(e) {
                            return (0, r.jsx)(b.Z, {
                                ref: d,
                                src: u,
                                className: a()(E().media, S({}, E().spoiler, e)),
                                onError: s,
                                preload: "none",
                                "aria-hidden": !0
                            })
                        }
                    })
                })
            }

            function L(e) {
                var t, n, i = e.upload,
                    l = e.size,
                    s = void 0 === l ? g.q.MEDIUM : l,
                    c = e.onMouseEnter,
                    f = w(o.useState(!1), 2),
                    d = f[0],
                    p = f[1],
                    m = s === g.q.SMALL;
                return i.isImage && i.item.platform === u.ow.WEB ? (0, r.jsx)(T, {
                    file: i.item.file,
                    alt: i.description,
                    spoiler: i.spoiler,
                    size: s,
                    onMouseEnter: c
                }) : !d && i.isVideo && i.item.platform === u.ow.WEB ? (0, r.jsx)(N, {
                    file: i.item.file,
                    alt: i.description,
                    spoiler: i.spoiler,
                    onMouseEnter: c,
                    onVideoLoadError: function() {
                        return p(!0)
                    }
                }) : (0, r.jsx)("div", {
                    onMouseEnter: c,
                    className: a()(E().icon, E().imageContainer, (n = {}, S(n, E()[null !== (t = i.classification) && void 0 !== t ? t : ""], !0), S(n, E().imageSmall, m), n)),
                    children: (0, r.jsx)("div", {
                        className: E().tags,
                        children: i.spoiler ? (0, r.jsx)("span", {
                            className: E().altTag,
                            children: j.Z.Messages.SPOILER
                        }) : null
                    })
                })
            }

            function C(e) {
                var t = e.channelId,
                    n = e.draftType,
                    i = e.upload,
                    u = e.keyboardModeEnabled,
                    d = e.label,
                    b = e.size,
                    O = void 0 === b ? g.q.MEDIUM : b,
                    x = e.canEdit,
                    w = void 0 === x || x,
                    P = e.hideFileName,
                    A = void 0 !== P && P,
                    T = O === g.q.SMALL,
                    N = function(e) {
                        e.stopPropagation();
                        (0, l.openModal)((function(e) {
                            return (0, r.jsx)(c.default, M(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        S(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                draftType: f.d.ChannelMessage,
                                upload: i,
                                channelId: t,
                                onSubmit: function(e) {
                                    var r = e.name,
                                        o = e.description,
                                        a = e.spoiler;
                                    s.Z.update(t, i.id, n, {
                                        filename: r,
                                        description: o,
                                        spoiler: a
                                    })
                                }
                            }))
                        }))
                    };
                return (0, r.jsxs)(g.Z, {
                    actions: (0, r.jsxs)(o.Fragment, {
                        children: [w ? (0, r.jsx)(v.Z, {
                            className: a()(S({}, E().action, T)),
                            tooltip: j.Z.Messages.ATTACHMENT_UTILITIES_SPOILER,
                            onClick: function() {
                                return s.Z.update(t, i.id, n, {
                                    spoiler: !i.spoiler
                                })
                            },
                            children: i.spoiler ? (0, r.jsx)(m.Z, {
                                className: a()(S({}, E().actionBarIcon, T))
                            }) : (0, r.jsx)(p.Z, {
                                className: a()(S({}, E().actionBarIcon, T))
                            })
                        }) : null, w ? (0, r.jsx)(v.Z, {
                            className: a()(S({}, E().action, T)),
                            tooltip: j.Z.Messages.ATTACHMENT_UTILITIES_MODIFY,
                            onClick: N,
                            children: (0, r.jsx)(h.Z, {
                                className: a()(S({}, E().actionBarIcon, T))
                            })
                        }) : null, (0, r.jsx)(v.Z, {
                            className: a()(S({}, E().action, T)),
                            tooltip: j.Z.Messages.ATTACHMENT_UTILITIES_REMOVE,
                            onClick: function() {
                                return s.Z.remove(t, i.id, n)
                            },
                            dangerous: !0,
                            children: (0, r.jsx)(y.Z, {
                                className: a()(S({}, E().actionBarIcon, T))
                            })
                        })]
                    }),
                    draftType: n,
                    id: i.id,
                    channelId: t,
                    handleEditModal: N,
                    keyboardModeEnabled: u,
                    size: O,
                    className: a()(S({}, E().attachmentItemSmall, T)),
                    children: [(0, r.jsx)(L, {
                        upload: i,
                        size: O
                    }), !A && (0, r.jsx)("div", {
                        className: E().filenameContainer,
                        children: (0, r.jsx)(l.Text, {
                            className: E().filename,
                            variant: "text-sm/normal",
                            children: null != d ? d : i.filename
                        })
                    })]
                })
            }
        },
        545758: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(202351),
                o = n(473903),
                i = n(116094),
                a = n(2590);

            function l() {
                return (0, r.e7)([o.default], (function() {
                    return i.ZP.canUseIncreasedMessageLength(o.default.getCurrentUser())
                })) ? a.en1 : a.J6R
            }
        },
        668159: (e, t, n) => {
            n.d(t, {
                Z0: () => d,
                zx: () => p,
                ZP: () => m
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = n(882723),
                l = n(524872),
                s = n.n(l);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
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

            function f(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function d(e) {
                var t = e.className;
                return (0, r.jsx)("div", {
                    className: i()(t, s().separator)
                })
            }

            function p(e) {
                var t, n = e.onClick,
                    o = e.onContextMenu,
                    l = e.className,
                    d = e.selected,
                    p = void 0 !== d && d,
                    m = e.children,
                    h = e.disabled,
                    y = void 0 !== h && h,
                    b = e.dangerous,
                    v = f(e, ["onClick", "onContextMenu", "className", "selected", "children", "disabled", "dangerous"]);
                return (0, r.jsx)(a.Clickable, u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            c(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    onClick: y ? void 0 : n,
                    onContextMenu: y ? void 0 : o,
                    className: i()(l, (t = {}, c(t, s().button, !0), c(t, s().selected, p), c(t, s().disabled, y), c(t, s().dangerous, b), t))
                }, v), {
                    children: m
                }))
            }
            const m = function(e) {
                var t = e.className,
                    n = e.children;
                return (0, r.jsx)("div", {
                    className: i()(t, s().wrapper),
                    children: n
                })
            }
        }
    }
]);