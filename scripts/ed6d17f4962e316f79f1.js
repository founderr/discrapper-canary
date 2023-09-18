"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [39814], {
        839814: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => I
            });
            var r, o = n(785893),
                s = n(667294),
                i = n(281110),
                l = n(882723),
                c = n(459940),
                a = n(107364),
                u = n(613677),
                d = n(691797),
                f = n(50137),
                p = n(2590),
                O = n(473708),
                h = n(87711),
                m = n.n(h);

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function N(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, s = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                s.push(r.value);
                                if (t && s.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return s
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
            }! function(e) {
                e.DOMAIN = "DOMAIN";
                e.PROOF_DNS = "PROOF_DNS";
                e.PROOF_HTTP = "PROOF_HTTP"
            }(r || (r = {}));

            function v(e) {
                var t = e.name,
                    n = e.value,
                    r = N(s.useState(c.u.DEFAULT), 2),
                    i = r[0],
                    a = r[1];
                return (0, o.jsxs)("div", {
                    className: m().infoRow,
                    children: [(0, o.jsx)(l.FormTitle, {
                        className: m().infoTitle,
                        children: t
                    }), (0, o.jsx)(c.Z, {
                        value: n,
                        mode: i,
                        supportsCopy: d.wS,
                        onCopy: function() {
                            (0, d.JG)(n);
                            a(c.u.SUCCESS)
                        }
                    })]
                })
            }

            function I(e) {
                var t = e.onClose,
                    n = e.transitionState,
                    c = N(s.useState(""), 2),
                    d = c[0],
                    h = c[1],
                    y = N(s.useState(""), 2),
                    I = y[0],
                    b = y[1],
                    j = N(s.useState(null), 2),
                    g = j[0],
                    x = j[1],
                    R = N(s.useState(!1), 2),
                    C = R[0],
                    S = R[1],
                    A = N(s.useState(r.DOMAIN), 2),
                    E = A[0],
                    M = A[1],
                    T = function() {
                        S(!0);
                        x(null);
                        i.ZP.post({
                            url: p.ANM.CONNECTION(p.ABu.DOMAIN, d),
                            body: {}
                        }).then((function() {
                            t()
                        })).catch((function(e) {
                            var t;
                            if ((null === (t = e.body) || void 0 === t ? void 0 : t.proof) && E === r.DOMAIN) {
                                b(e.body.proof);
                                M(r.PROOF_DNS)
                            } else {
                                var n, o, s, i, l, c;
                                x((null === (n = e.body) || void 0 === n || null === (o = n.errors) || void 0 === o || null === (s = o.domain) || void 0 === s || null === (i = s._errors) || void 0 === i || null === (l = i[0]) || void 0 === l ? void 0 : l.message) || (null === (c = e.body) || void 0 === c ? void 0 : c.message) || e.message)
                            }
                        })).finally((function() {
                            S(!1)
                        }))
                    };
                return (0, o.jsxs)(l.ModalRoot, {
                    transitionState: n,
                    className: m().modal,
                    children: [(0, o.jsxs)(l.ModalHeader, {
                        direction: a.Z.Direction.VERTICAL,
                        className: m().header,
                        separator: !1,
                        children: [(0, o.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            children: O.Z.Messages.DOMAIN_VERIFICATION_HEADER
                        }), (0, o.jsx)(l.ModalCloseButton, {
                            className: m().closeButton,
                            onClick: t
                        })]
                    }), (0, o.jsxs)(l.Slides, {
                        activeSlide: E,
                        width: 440,
                        children: [(0, o.jsx)(l.Slide, {
                            id: r.DOMAIN,
                            children: (0, o.jsxs)("form", {
                                onSubmit: function(e) {
                                    e.preventDefault();
                                    T()
                                },
                                children: [(0, o.jsxs)(l.ModalContent, {
                                    className: m().content,
                                    children: [(0, o.jsx)(l.Text, {
                                        variant: "text-md/normal",
                                        color: "header-secondary",
                                        className: m().description,
                                        children: O.Z.Messages.DOMAIN_VERIFICATION_DESCRIPTION
                                    }), (0, o.jsx)(l.FormItem, {
                                        title: O.Z.Messages.DOMAIN_VERIFICATION_LABEL,
                                        error: g,
                                        children: (0, o.jsx)(l.TextInput, {
                                            onChange: h,
                                            placeholder: f.pL,
                                            maxLength: 253,
                                            value: d,
                                            disabled: C,
                                            autoFocus: !0
                                        })
                                    })]
                                }), (0, o.jsxs)(l.ModalFooter, {
                                    className: m().footer,
                                    children: [(0, o.jsx)(l.Button, {
                                        type: "submit",
                                        submitting: C,
                                        disabled: "" === d,
                                        children: O.Z.Messages.NEXT
                                    }), (0, o.jsx)(l.Button, {
                                        look: l.Button.Looks.LINK,
                                        color: l.Button.Colors.PRIMARY,
                                        onClick: t,
                                        children: O.Z.Messages.CANCEL
                                    })]
                                })]
                            })
                        }), (0, o.jsxs)(l.Slide, {
                            id: r.PROOF_DNS,
                            children: [(0, o.jsxs)(l.ModalContent, {
                                className: m().content,
                                children: [(0, o.jsxs)("ol", {
                                    className: m().list,
                                    children: [(0, o.jsx)("li", {
                                        children: (0, o.jsx)(l.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: O.Z.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_1
                                        })
                                    }), (0, o.jsxs)("li", {
                                        children: [(0, o.jsx)(l.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: O.Z.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_2
                                        }), (0, o.jsxs)("div", {
                                            className: m().dnsRecordContainer,
                                            children: [(0, o.jsx)(v, {
                                                name: O.Z.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
                                                value: (0, f.Qv)(d)
                                            }), (0, o.jsx)(v, {
                                                name: O.Z.Messages.DOMAIN_VERIFICATION_RECORD_TYPE,
                                                value: "TXT"
                                            }), (0, o.jsx)(v, {
                                                name: O.Z.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
                                                value: I
                                            })]
                                        })]
                                    })]
                                }), (0, o.jsx)(u.Z, {
                                    messageType: u.Q.INFO,
                                    className: m().text,
                                    children: O.Z.Messages.DOMAIN_VERIFICATION_DNS_WARNING
                                }), null != g && (0, o.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-danger",
                                    className: m().text,
                                    children: g
                                })]
                            }), (0, o.jsxs)(l.ModalFooter, {
                                className: m().footer,
                                direction: a.Z.Direction.HORIZONTAL,
                                children: [(0, o.jsx)(l.Button, {
                                    look: l.Button.Looks.LINK,
                                    color: l.Button.Colors.PRIMARY,
                                    onClick: function() {
                                        M(r.DOMAIN);
                                        x(null)
                                    },
                                    children: O.Z.Messages.BACK
                                }), (0, o.jsxs)("div", {
                                    className: m().footerInner,
                                    children: [(0, o.jsx)(l.Button, {
                                        look: l.Button.Looks.LINK,
                                        color: l.Button.Colors.PRIMARY,
                                        onClick: function() {
                                            M(r.PROOF_HTTP);
                                            x(null)
                                        },
                                        className: m().switchButton,
                                        children: O.Z.Messages.DOMAIN_VERIFICATION_USE_HTTP
                                    }), (0, o.jsx)(l.Button, {
                                        submitting: C,
                                        onClick: T,
                                        children: O.Z.Messages.VERIFY
                                    })]
                                })]
                            })]
                        }), (0, o.jsxs)(l.Slide, {
                            id: r.PROOF_HTTP,
                            children: [(0, o.jsxs)(l.ModalContent, {
                                className: m().content,
                                children: [(0, o.jsx)(l.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    children: O.Z.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_HTTP
                                }), (0, o.jsxs)("div", {
                                    className: m().httpFileContainer,
                                    children: [(0, o.jsx)(v, {
                                        name: O.Z.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
                                        value: (0, f.F9)(d)
                                    }), (0, o.jsx)(v, {
                                        name: O.Z.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
                                        value: I
                                    })]
                                }), null != g && (0, o.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-danger",
                                    className: m().text,
                                    children: g
                                })]
                            }), (0, o.jsxs)(l.ModalFooter, {
                                className: m().footer,
                                direction: a.Z.Direction.HORIZONTAL,
                                children: [(0, o.jsx)(l.Button, {
                                    look: l.Button.Looks.LINK,
                                    color: l.Button.Colors.PRIMARY,
                                    onClick: function() {
                                        M(r.DOMAIN);
                                        x(null)
                                    },
                                    children: O.Z.Messages.BACK
                                }), (0, o.jsxs)("div", {
                                    className: m().footerInner,
                                    children: [(0, o.jsx)(l.Button, {
                                        look: l.Button.Looks.LINK,
                                        color: l.Button.Colors.PRIMARY,
                                        onClick: function() {
                                            M(r.PROOF_DNS);
                                            x(null)
                                        },
                                        className: m().switchButton,
                                        children: O.Z.Messages.DOMAIN_VERIFICATION_USE_DNS
                                    }), (0, o.jsx)(l.Button, {
                                        submitting: C,
                                        onClick: T,
                                        children: O.Z.Messages.VERIFY
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        459940: (e, t, n) => {
            n.d(t, {
                u: () => I,
                Z: () => j
            });
            var r = n(785893),
                o = n(667294),
                s = n(294184),
                i = n.n(s),
                l = n(882723),
                c = n(990554),
                a = n(107364),
                u = n(473708),
                d = n(592934),
                f = n.n(d);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function m(e, t) {
                return !t || "object" !== N(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function y(e, t) {
                y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return y(e, t)
            }
            var N = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e) {
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
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }
            var I = {
                    DEFAULT: "default",
                    SUCCESS: "success",
                    ERROR: "error"
                },
                b = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && y(e, t)
                    }(n, e);
                    var t = v(n);

                    function n() {
                        p(this, n);
                        var e;
                        (e = t.apply(this, arguments)).inputRef = o.createRef();
                        e.containerRef = o.createRef();
                        e.handleButtonClick = function() {
                            e.select();
                            var t = e.props;
                            (0, t.onCopy)(t.value)
                        };
                        e.handleInputClick = function() {
                            e.select()
                        };
                        return e
                    }
                    var s = n.prototype;
                    s.select = function() {
                        var e;
                        null === (e = this.inputRef.current) || void 0 === e || e.select()
                    };
                    s.renderInput = function(e) {
                        var t, n = this.props,
                            o = n.value,
                            s = n.mode,
                            l = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
                        return (0, r.jsx)("input", {
                            className: i()((0, c.l)(f(), "input", s), O({}, f().inputHidden, e)),
                            ref: this.inputRef,
                            type: "text",
                            value: o,
                            onClick: this.handleInputClick,
                            readOnly: !0,
                            "aria-labelledby": l
                        })
                    };
                    s.render = function() {
                        var e, t = this.props,
                            n = t.text,
                            o = void 0 === n ? u.Z.Messages.COPY : n,
                            s = t.mode,
                            d = t.hideMessage,
                            p = t.className,
                            O = t.buttonLook,
                            h = null != d;
                        switch (s) {
                            case I.SUCCESS:
                                e = l.ButtonColors.GREEN;
                                break;
                            case I.ERROR:
                                e = l.ButtonColors.RED;
                                break;
                            default:
                                e = this.props.buttonColor
                        }
                        return (0, r.jsx)(l.FocusRing, {
                            focusTarget: this.inputRef,
                            ringTarget: this.containerRef,
                            children: (0, r.jsx)("div", {
                                className: i()((0, c.l)(f(), "copyInput", s), p),
                                ref: this.containerRef,
                                children: (0, r.jsxs)(a.Z, {
                                    className: f().layout,
                                    children: [(0, r.jsxs)(a.Z, {
                                        className: f().inputWrapper,
                                        children: [this.renderInput(h), h ? (0, r.jsx)("div", {
                                            className: f().hiddenMessage,
                                            children: d
                                        }) : null]
                                    }), (0, r.jsx)(a.Z, {
                                        shrink: 1,
                                        grow: 0,
                                        style: {
                                            margin: 0
                                        },
                                        children: (0, r.jsx)(l.Button, {
                                            className: f().button,
                                            onClick: this.handleButtonClick,
                                            size: l.ButtonSizes.MIN,
                                            color: e,
                                            look: O,
                                            children: o
                                        })
                                    })]
                                })
                            })
                        })
                    };
                    return n
                }(o.PureComponent);
            b.contextType = l.FormContext;
            b.defaultProps = {
                supportsCopy: !0,
                buttonColor: l.ButtonColors.PRIMARY,
                buttonLook: l.ButtonLooks.FILLED,
                mode: I.DEFAULT
            };
            b.Modes = I;
            b.ButtonColors = l.ButtonColors;
            b.ButtonLooks = l.ButtonLooks;
            const j = b
        },
        613677: (e, t, n) => {
            n.d(t, {
                Q: () => r,
                Z: () => O
            });
            var r, o = n(785893),
                s = (n(667294), n(294184)),
                i = n.n(s),
                l = n(882723),
                c = n(621329),
                a = n(127661),
                u = n(386991),
                d = n(265367),
                f = n(231361),
                p = n.n(f);
            ! function(e) {
                e[e.WARNING = 0] = "WARNING";
                e[e.INFO = 1] = "INFO";
                e[e.ERROR = 2] = "ERROR";
                e[e.POSITIVE = 3] = "POSITIVE"
            }(r || (r = {}));
            const O = function(e) {
                var t = e.children,
                    n = e.messageType,
                    s = e.className,
                    f = e.textColor,
                    O = void 0 === f ? "text-normal" : f,
                    h = e.textVariant,
                    m = void 0 === h ? "text-sm/medium" : h,
                    y = function(e) {
                        switch (e) {
                            case r.WARNING:
                                return d.Z;
                            case r.INFO:
                                return u.Z;
                            case r.ERROR:
                                return a.Z;
                            case r.POSITIVE:
                                return c.Z
                        }
                    }(n),
                    N = function(e) {
                        switch (e) {
                            case r.WARNING:
                                return p().warning;
                            case r.INFO:
                                return p().info;
                            case r.ERROR:
                                return p().error;
                            case r.POSITIVE:
                                return p().positive
                        }
                    }(n);
                return (0, o.jsxs)("div", {
                    className: i()(p().container, N, s),
                    children: [(0, o.jsx)("div", {
                        className: p().iconDiv,
                        children: (0, o.jsx)(y, {
                            className: p().icon
                        })
                    }), (0, o.jsx)(l.Text, {
                        className: p().text,
                        color: O,
                        variant: m,
                        children: t
                    })]
                })
            }
        },
        127661: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(633878));

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

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) {
                        n = s[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) {
                        n = s[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    a = void 0 === c ? 24 : c,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.foreground,
                    p = e.backgroundColor,
                    O = l(e, ["width", "height", "color", "foreground", "backgroundColor"]);
                return (0, r.jsxs)("svg", i(function(e) {
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
                }({}, (0, o.Z)(O)), {
                    width: n,
                    height: a,
                    viewBox: "0 0 14 14",
                    children: [null != p ? (0, r.jsx)("circle", {
                        r: 5,
                        cx: 7,
                        cy: 7,
                        fill: p
                    }) : null, (0, r.jsx)("path", {
                        fill: d,
                        className: f,
                        d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                    })]
                }))
            }
        },
        386991: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(633878));

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

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) {
                        n = s[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) {
                        n = s[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    c = e.height,
                    a = void 0 === c ? 16 : c,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.foreground,
                    p = l(e, ["width", "height", "color", "foreground"]);
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
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: a,
                    viewBox: "0 0 12 12",
                    children: (0, r.jsx)("path", {
                        fill: d,
                        className: f,
                        d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                    })
                }))
            }
        },
        691797: (e, t, n) => {
            n.d(t, {
                wS: () => i,
                JG: () => l
            });
            var r = n(482507),
                o = n(120415),
                s = n(310126),
                i = function() {
                    if (o.FB) return null != s.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (e) {
                        return !1
                    }
                }();

            function l(e) {
                if (!i) return !1;
                if (o.FB) {
                    s.ZP.copy(e);
                    return !0
                }
                return r.J(e)
            }
        },
        990554: (e, t, n) => {
            n.d(t, {
                l: () => o
            });
            var r = n(421281);

            function o(e, t) {
                for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) o[s - 2] = arguments[s];
                var i = o.reduce((function(e, t) {
                        return e + (0, r.De)(t)
                    }), ""),
                    l = "".concat(t).concat(i),
                    c = e[l];
                if (null != c) return c;
                0
            }
        },
        482507: (e, t, n) => {
            n.d(t, {
                J: () => r
            });

            function r(e) {
                var t = document.body;
                if (null == t) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var n = document.createRange(),
                    r = window.getSelection(),
                    o = document.createElement("textarea");
                o.value = e;
                o.contentEditable = "true";
                o.style.visibility = "none";
                t.appendChild(o);
                n.selectNodeContents(o);
                null == r || r.removeAllRanges();
                null == r || r.addRange(n);
                o.focus();
                o.setSelectionRange(0, e.length);
                var s = document.execCommand("copy");
                t.removeChild(o);
                return s
            }
        }
    }
]);
//# sourceMappingURL=ed6d17f4962e316f79f1.js.map