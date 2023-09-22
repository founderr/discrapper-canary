"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [39814], {
        775428: (e, t, r) => {
            r.d(t, {
                d: () => a
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                l = r(633878);

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function i(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var a = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    d = e.color,
                    f = void 0 === d ? o.Z.colors.INTERACTIVE_NORMAL : d,
                    p = e.colorClass,
                    O = void 0 === p ? "" : p,
                    h = e.secondaryColor,
                    y = void 0 === h ? "transparent" : h,
                    b = e.secondaryColorClass,
                    v = void 0 === b ? "" : b,
                    m = c(e, ["width", "height", "color", "colorClass", "secondaryColor", "secondaryColorClass"]);
                return (0, n.jsxs)("svg", i(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            s(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(m)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.772 3.96a1 1 0 1 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: O
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof y ? y : y.css,
                        fillRule: "evenodd",
                        d: "M12.25 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm.478 2.71a1 1 0 0 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: v
                    })]
                }))
            }
        },
        839814: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => j
            });
            var n, o = r(785893),
                l = r(667294),
                s = r(281110),
                i = r(882723),
                c = r(459940),
                a = r(107364),
                u = r(613677),
                d = r(691797),
                f = r(50137),
                p = r(2590),
                O = r(473708),
                h = r(87711),
                y = r.n(h);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, l = [],
                            s = !0,
                            i = !1;
                        try {
                            for (r = r.call(e); !(s = (n = r.next()).done); s = !0) {
                                l.push(n.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            o = e
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return b(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return b(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }! function(e) {
                e.DOMAIN = "DOMAIN";
                e.PROOF_DNS = "PROOF_DNS";
                e.PROOF_HTTP = "PROOF_HTTP"
            }(n || (n = {}));

            function m(e) {
                var t = e.name,
                    r = e.value,
                    n = v(l.useState(c.u.DEFAULT), 2),
                    s = n[0],
                    a = n[1];
                return (0, o.jsxs)("div", {
                    className: y().infoRow,
                    children: [(0, o.jsx)(i.FormTitle, {
                        className: y().infoTitle,
                        children: t
                    }), (0, o.jsx)(c.Z, {
                        value: r,
                        mode: s,
                        supportsCopy: d.wS,
                        onCopy: function() {
                            (0, d.JG)(r);
                            a(c.u.SUCCESS)
                        }
                    })]
                })
            }

            function j(e) {
                var t = e.onClose,
                    r = e.transitionState,
                    c = v(l.useState(""), 2),
                    d = c[0],
                    h = c[1],
                    b = v(l.useState(""), 2),
                    j = b[0],
                    g = b[1],
                    N = v(l.useState(null), 2),
                    I = N[0],
                    x = N[1],
                    R = v(l.useState(!1), 2),
                    C = R[0],
                    w = R[1],
                    P = v(l.useState(n.DOMAIN), 2),
                    S = P[0],
                    E = P[1],
                    M = function() {
                        w(!0);
                        x(null);
                        s.ZP.post({
                            url: p.ANM.CONNECTION(p.ABu.DOMAIN, d),
                            body: {}
                        }).then((function() {
                            t()
                        })).catch((function(e) {
                            var t;
                            if ((null === (t = e.body) || void 0 === t ? void 0 : t.proof) && S === n.DOMAIN) {
                                g(e.body.proof);
                                E(n.PROOF_DNS)
                            } else {
                                var r, o, l, s, i, c;
                                x((null === (r = e.body) || void 0 === r || null === (o = r.errors) || void 0 === o || null === (l = o.domain) || void 0 === l || null === (s = l._errors) || void 0 === s || null === (i = s[0]) || void 0 === i ? void 0 : i.message) || (null === (c = e.body) || void 0 === c ? void 0 : c.message) || e.message)
                            }
                        })).finally((function() {
                            w(!1)
                        }))
                    };
                return (0, o.jsxs)(i.ModalRoot, {
                    transitionState: r,
                    className: y().modal,
                    children: [(0, o.jsxs)(i.ModalHeader, {
                        direction: a.Z.Direction.VERTICAL,
                        className: y().header,
                        separator: !1,
                        children: [(0, o.jsx)(i.Heading, {
                            variant: "heading-xl/semibold",
                            children: O.Z.Messages.DOMAIN_VERIFICATION_HEADER
                        }), (0, o.jsx)(i.ModalCloseButton, {
                            className: y().closeButton,
                            onClick: t
                        })]
                    }), (0, o.jsxs)(i.Slides, {
                        activeSlide: S,
                        width: 440,
                        children: [(0, o.jsx)(i.Slide, {
                            id: n.DOMAIN,
                            children: (0, o.jsxs)("form", {
                                onSubmit: function(e) {
                                    e.preventDefault();
                                    M()
                                },
                                children: [(0, o.jsxs)(i.ModalContent, {
                                    className: y().content,
                                    children: [(0, o.jsx)(i.Text, {
                                        variant: "text-md/normal",
                                        color: "header-secondary",
                                        className: y().description,
                                        children: O.Z.Messages.DOMAIN_VERIFICATION_DESCRIPTION
                                    }), (0, o.jsx)(i.FormItem, {
                                        title: O.Z.Messages.DOMAIN_VERIFICATION_LABEL,
                                        error: I,
                                        children: (0, o.jsx)(i.TextInput, {
                                            onChange: h,
                                            placeholder: f.pL,
                                            maxLength: 253,
                                            value: d,
                                            disabled: C,
                                            autoFocus: !0
                                        })
                                    })]
                                }), (0, o.jsxs)(i.ModalFooter, {
                                    className: y().footer,
                                    children: [(0, o.jsx)(i.Button, {
                                        type: "submit",
                                        submitting: C,
                                        disabled: "" === d,
                                        children: O.Z.Messages.NEXT
                                    }), (0, o.jsx)(i.Button, {
                                        look: i.Button.Looks.LINK,
                                        color: i.Button.Colors.PRIMARY,
                                        onClick: t,
                                        children: O.Z.Messages.CANCEL
                                    })]
                                })]
                            })
                        }), (0, o.jsxs)(i.Slide, {
                            id: n.PROOF_DNS,
                            children: [(0, o.jsxs)(i.ModalContent, {
                                className: y().content,
                                children: [(0, o.jsxs)("ol", {
                                    className: y().list,
                                    children: [(0, o.jsx)("li", {
                                        children: (0, o.jsx)(i.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: O.Z.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_1
                                        })
                                    }), (0, o.jsxs)("li", {
                                        children: [(0, o.jsx)(i.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: O.Z.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_2
                                        }), (0, o.jsxs)("div", {
                                            className: y().dnsRecordContainer,
                                            children: [(0, o.jsx)(m, {
                                                name: O.Z.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
                                                value: (0, f.Qv)(d)
                                            }), (0, o.jsx)(m, {
                                                name: O.Z.Messages.DOMAIN_VERIFICATION_RECORD_TYPE,
                                                value: "TXT"
                                            }), (0, o.jsx)(m, {
                                                name: O.Z.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
                                                value: j
                                            })]
                                        })]
                                    })]
                                }), (0, o.jsx)(u.Z, {
                                    messageType: u.Q.INFO,
                                    className: y().text,
                                    children: O.Z.Messages.DOMAIN_VERIFICATION_DNS_WARNING
                                }), null != I && (0, o.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-danger",
                                    className: y().text,
                                    children: I
                                })]
                            }), (0, o.jsxs)(i.ModalFooter, {
                                className: y().footer,
                                direction: a.Z.Direction.HORIZONTAL,
                                children: [(0, o.jsx)(i.Button, {
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.PRIMARY,
                                    onClick: function() {
                                        E(n.DOMAIN);
                                        x(null)
                                    },
                                    children: O.Z.Messages.BACK
                                }), (0, o.jsxs)("div", {
                                    className: y().footerInner,
                                    children: [(0, o.jsx)(i.Button, {
                                        look: i.Button.Looks.LINK,
                                        color: i.Button.Colors.PRIMARY,
                                        onClick: function() {
                                            E(n.PROOF_HTTP);
                                            x(null)
                                        },
                                        className: y().switchButton,
                                        children: O.Z.Messages.DOMAIN_VERIFICATION_USE_HTTP
                                    }), (0,
                                        o.jsx)(i.Button, {
                                        submitting: C,
                                        onClick: M,
                                        children: O.Z.Messages.VERIFY
                                    })]
                                })]
                            })]
                        }), (0, o.jsxs)(i.Slide, {
                            id: n.PROOF_HTTP,
                            children: [(0, o.jsxs)(i.ModalContent, {
                                className: y().content,
                                children: [(0, o.jsx)(i.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    children: O.Z.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_HTTP
                                }), (0, o.jsxs)("div", {
                                    className: y().httpFileContainer,
                                    children: [(0, o.jsx)(m, {
                                        name: O.Z.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
                                        value: (0, f.F9)(d)
                                    }), (0, o.jsx)(m, {
                                        name: O.Z.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
                                        value: j
                                    })]
                                }), null != I && (0, o.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-danger",
                                    className: y().text,
                                    children: I
                                })]
                            }), (0, o.jsxs)(i.ModalFooter, {
                                className: y().footer,
                                direction: a.Z.Direction.HORIZONTAL,
                                children: [(0, o.jsx)(i.Button, {
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.PRIMARY,
                                    onClick: function() {
                                        E(n.DOMAIN);
                                        x(null)
                                    },
                                    children: O.Z.Messages.BACK
                                }), (0, o.jsxs)("div", {
                                    className: y().footerInner,
                                    children: [(0, o.jsx)(i.Button, {
                                        look: i.Button.Looks.LINK,
                                        color: i.Button.Colors.PRIMARY,
                                        onClick: function() {
                                            E(n.PROOF_DNS);
                                            x(null)
                                        },
                                        className: y().switchButton,
                                        children: O.Z.Messages.DOMAIN_VERIFICATION_USE_DNS
                                    }), (0, o.jsx)(i.Button, {
                                        submitting: C,
                                        onClick: M,
                                        children: O.Z.Messages.VERIFY
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        459940: (e, t, r) => {
            r.d(t, {
                u: () => j,
                Z: () => N
            });
            var n = r(785893),
                o = r(667294),
                l = r(294184),
                s = r.n(l),
                i = r(882723),
                c = r(990554),
                a = r(107364),
                u = r(473708),
                d = r(592934),
                f = r.n(d);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function y(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
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
                    var r, n = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return y(this, r)
                }
            }
            var j = {
                    DEFAULT: "default",
                    SUCCESS: "success",
                    ERROR: "error"
                },
                g = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && b(e, t)
                    }(r, e);
                    var t = m(r);

                    function r() {
                        p(this, r);
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
                    var l = r.prototype;
                    l.select = function() {
                        var e;
                        null === (e = this.inputRef.current) || void 0 === e || e.select()
                    };
                    l.renderInput = function(e) {
                        var t, r = this.props,
                            o = r.value,
                            l = r.mode,
                            i = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
                        return (0, n.jsx)("input", {
                            className: s()((0, c.l)(f(), "input", l), O({}, f().inputHidden, e)),
                            ref: this.inputRef,
                            type: "text",
                            value: o,
                            onClick: this.handleInputClick,
                            readOnly: !0,
                            "aria-labelledby": i
                        })
                    };
                    l.render = function() {
                        var e, t = this.props,
                            r = t.text,
                            o = void 0 === r ? u.Z.Messages.COPY : r,
                            l = t.mode,
                            d = t.hideMessage,
                            p = t.className,
                            O = t.buttonLook,
                            h = null != d;
                        switch (l) {
                            case j.SUCCESS:
                                e = i.ButtonColors.GREEN;
                                break;
                            case j.ERROR:
                                e = i.ButtonColors.RED;
                                break;
                            default:
                                e = this.props.buttonColor
                        }
                        return (0, n.jsx)(i.FocusRing, {
                            focusTarget: this.inputRef,
                            ringTarget: this.containerRef,
                            children: (0, n.jsx)("div", {
                                className: s()((0, c.l)(f(), "copyInput", l), p),
                                ref: this.containerRef,
                                children: (0, n.jsxs)(a.Z, {
                                    className: f().layout,
                                    children: [(0, n.jsxs)(a.Z, {
                                        className: f().inputWrapper,
                                        children: [this.renderInput(h), h ? (0, n.jsx)("div", {
                                            className: f().hiddenMessage,
                                            children: d
                                        }) : null]
                                    }), (0, n.jsx)(a.Z, {
                                        shrink: 1,
                                        grow: 0,
                                        style: {
                                            margin: 0
                                        },
                                        children: (0, n.jsx)(i.Button, {
                                            className: f().button,
                                            onClick: this.handleButtonClick,
                                            size: i.ButtonSizes.MIN,
                                            color: e,
                                            look: O,
                                            children: o
                                        })
                                    })]
                                })
                            })
                        })
                    };
                    return r
                }(o.PureComponent);
            g.contextType = i.FormContext;
            g.defaultProps = {
                supportsCopy: !0,
                buttonColor: i.ButtonColors.PRIMARY,
                buttonLook: i.ButtonLooks.FILLED,
                mode: j.DEFAULT
            };
            g.Modes = j;
            g.ButtonColors = i.ButtonColors;
            g.ButtonLooks = i.ButtonLooks;
            const N = g
        },
        613677: (e, t, r) => {
            r.d(t, {
                Q: () => n,
                Z: () => O
            });
            var n, o = r(785893),
                l = (r(667294), r(294184)),
                s = r.n(l),
                i = r(882723),
                c = r(621329),
                a = r(559968),
                u = r(386991),
                d = r(818417),
                f = r(231361),
                p = r.n(f);
            ! function(e) {
                e[e.WARNING = 0] = "WARNING";
                e[e.INFO = 1] = "INFO";
                e[e.ERROR = 2] = "ERROR";
                e[e.POSITIVE = 3] = "POSITIVE"
            }(n || (n = {}));
            const O = function(e) {
                var t = e.children,
                    r = e.messageType,
                    l = e.className,
                    f = e.textColor,
                    O = void 0 === f ? "text-normal" : f,
                    h = e.textVariant,
                    y = void 0 === h ? "text-sm/medium" : h,
                    b = function(e) {
                        switch (e) {
                            case n.WARNING:
                                return d.Z;
                            case n.INFO:
                                return u.Z;
                            case n.ERROR:
                                return a.Z;
                            case n.POSITIVE:
                                return c.Z
                        }
                    }(r),
                    v = function(e) {
                        switch (e) {
                            case n.WARNING:
                                return p().warning;
                            case n.INFO:
                                return p().info;
                            case n.ERROR:
                                return p().error;
                            case n.POSITIVE:
                                return p().positive
                        }
                    }(r);
                return (0, o.jsxs)("div", {
                    className: s()(p().container, v, l),
                    children: [(0, o.jsx)("div", {
                        className: p().iconDiv,
                        children: (0, o.jsx)(b, {
                            className: p().icon
                        })
                    }), (0, o.jsx)(i.Text, {
                        className: p().text,
                        color: O,
                        variant: y,
                        children: t
                    })]
                })
            }
        },
        559968: (e, t, r) => {
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                l = r(795308),
                s = r(633878);

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function d(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    l = void 0 === o ? 24 : o,
                    i = e.color,
                    c = void 0 === i ? "currentColor" : i,
                    a = e.foreground,
                    p = e.backgroundColor,
                    O = f(e, ["width", "height", "color", "foreground", "backgroundColor"]);
                return (0, n.jsxs)("svg", d(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            u(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, s.Z)(O)), {
                    width: r,
                    height: l,
                    viewBox: "0 0 14 14",
                    children: [null != p ? (0, n.jsx)("circle", {
                        r: 5,
                        cx: 7,
                        cy: 7,
                        fill: p
                    }) : null, (0, n.jsx)("path", {
                        fill: c,
                        className: a,
                        d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    d = e.color,
                    f = void 0 === d ? l.Z.colors.INTERACTIVE_NORMAL : d,
                    p = e.colorClass,
                    O = void 0 === p ? "" : p,
                    h = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0,
                    s.Z)(h)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }))
        },
        386991: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                l = r(775428),
                s = r(633878);

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const u = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    o = e.height,
                    l = void 0 === o ? 16 : o,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, s.Z)(p)), {
                    width: r,
                    height: l,
                    viewBox: "0 0 12 12",
                    children: (0, n.jsx)("path", {
                        fill: d,
                        className: f,
                        d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                    })
                }))
            }), l.d, {}, {
                size: 16
            })
        },
        691797: (e, t, r) => {
            r.d(t, {
                wS: () => s,
                JG: () => i
            });
            var n = r(482507),
                o = r(120415),
                l = r(310126),
                s = function() {
                    if (o.FB) return null != l.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (e) {
                        return !1
                    }
                }();

            function i(e) {
                if (!s) return !1;
                if (o.FB) {
                    l.ZP.copy(e);
                    return !0
                }
                return n.J(e)
            }
        },
        990554: (e, t, r) => {
            r.d(t, {
                l: () => o
            });
            var n = r(421281);

            function o(e, t) {
                for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), l = 2; l < r; l++) o[l - 2] = arguments[l];
                var s = o.reduce((function(e, t) {
                        return e + (0, n.De)(t)
                    }), ""),
                    i = "".concat(t).concat(s),
                    c = e[i];
                if (null != c) return c;
                0
            }
        },
        482507: (e, t, r) => {
            r.d(t, {
                J: () => n
            });

            function n(e) {
                var t = document.body;
                if (null == t) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var r = document.createRange(),
                    n = window.getSelection(),
                    o = document.createElement("textarea");
                o.value = e;
                o.contentEditable = "true";
                o.style.visibility = "none";
                t.appendChild(o);
                r.selectNodeContents(o);
                null == n || n.removeAllRanges();
                null == n || n.addRange(r);
                o.focus();
                o.setSelectionRange(0, e.length);
                var l = document.execCommand("copy");
                t.removeChild(o);
                return l
            }
        }
    }
]);