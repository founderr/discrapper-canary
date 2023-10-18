"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [39814], {
        839814: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => x
            });
            var o, s = n(785893),
                r = n(667294),
                i = n(281110),
                a = n(70418),
                l = n(459940),
                c = n(107364),
                u = n(613677),
                d = n(691797),
                f = n(50137),
                I = n(2590),
                N = n(473708),
                h = n(306401),
                O = n.n(h);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var o, s, r = [],
                            i = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(i = (o = n.next()).done); i = !0) {
                                r.push(o.value);
                                if (t && r.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            s = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (a) throw s
                            }
                        }
                        return r
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
            }! function(e) {
                e.DOMAIN = "DOMAIN";
                e.PROOF_DNS = "PROOF_DNS";
                e.PROOF_HTTP = "PROOF_HTTP"
            }(o || (o = {}));

            function m(e) {
                var t = e.name,
                    n = e.value,
                    o = R(r.useState(l.u.DEFAULT), 2),
                    i = o[0],
                    c = o[1];
                return (0, s.jsxs)("div", {
                    className: O().infoRow,
                    children: [(0, s.jsx)(a.FormTitle, {
                        className: O().infoTitle,
                        children: t
                    }), (0, s.jsx)(l.Z, {
                        value: n,
                        mode: i,
                        supportsCopy: d.wS,
                        onCopy: function() {
                            (0, d.JG)(n);
                            c(l.u.SUCCESS)
                        }
                    })]
                })
            }

            function x(e) {
                var t = e.onClose,
                    n = e.transitionState,
                    l = R(r.useState(""), 2),
                    d = l[0],
                    h = l[1],
                    p = R(r.useState(""), 2),
                    x = p[0],
                    C = p[1],
                    v = R(r.useState(null), 2),
                    T = v[0],
                    j = v[1],
                    A = R(r.useState(!1), 2),
                    M = A[0],
                    y = A[1],
                    _ = R(r.useState(o.DOMAIN), 2),
                    E = _[0],
                    g = _[1],
                    S = function() {
                        y(!0);
                        j(null);
                        i.ZP.post({
                            url: I.ANM.CONNECTION(I.ABu.DOMAIN, d),
                            body: {}
                        }).then((function() {
                            t()
                        })).catch((function(e) {
                            var t;
                            if ((null === (t = e.body) || void 0 === t ? void 0 : t.proof) && E === o.DOMAIN) {
                                C(e.body.proof);
                                g(o.PROOF_DNS)
                            } else {
                                var n, s, r, i, a, l;
                                j((null === (n = e.body) || void 0 === n || null === (s = n.errors) || void 0 === s || null === (r = s.domain) || void 0 === r || null === (i = r._errors) || void 0 === i || null === (a = i[0]) || void 0 === a ? void 0 : a.message) || (null === (l = e.body) || void 0 === l ? void 0 : l.message) || e.message)
                            }
                        })).finally((function() {
                            y(!1)
                        }))
                    };
                return (0, s.jsxs)(a.ModalRoot, {
                    transitionState: n,
                    className: O().modal,
                    children: [(0, s.jsxs)(a.ModalHeader, {
                        direction: c.Z.Direction.VERTICAL,
                        className: O().header,
                        separator: !1,
                        children: [(0, s.jsx)(a.Heading, {
                            variant: "heading-xl/semibold",
                            children: N.Z.Messages.DOMAIN_VERIFICATION_HEADER
                        }), (0, s.jsx)(a.ModalCloseButton, {
                            className: O().closeButton,
                            onClick: t
                        })]
                    }), (0, s.jsxs)(a.Slides, {
                        activeSlide: E,
                        width: 440,
                        children: [(0, s.jsx)(a.Slide, {
                            id: o.DOMAIN,
                            children: (0, s.jsxs)("form", {
                                onSubmit: function(e) {
                                    e.preventDefault();
                                    S()
                                },
                                children: [(0, s.jsxs)(a.ModalContent, {
                                    className: O().content,
                                    children: [(0, s.jsx)(a.Text, {
                                        variant: "text-md/normal",
                                        color: "header-secondary",
                                        className: O().description,
                                        children: N.Z.Messages.DOMAIN_VERIFICATION_DESCRIPTION
                                    }), (0, s.jsx)(a.FormItem, {
                                        title: N.Z.Messages.DOMAIN_VERIFICATION_LABEL,
                                        error: T,
                                        children: (0, s.jsx)(a.TextInput, {
                                            onChange: h,
                                            placeholder: f.pL,
                                            maxLength: 253,
                                            value: d,
                                            disabled: M,
                                            autoFocus: !0
                                        })
                                    })]
                                }), (0, s.jsxs)(a.ModalFooter, {
                                    className: O().footer,
                                    children: [(0, s.jsx)(a.Button, {
                                        type: "submit",
                                        submitting: M,
                                        disabled: "" === d,
                                        children: N.Z.Messages.NEXT
                                    }), (0, s.jsx)(a.Button, {
                                        look: a.Button.Looks.LINK,
                                        color: a.Button.Colors.PRIMARY,
                                        onClick: t,
                                        children: N.Z.Messages.CANCEL
                                    })]
                                })]
                            })
                        }), (0, s.jsxs)(a.Slide, {
                            id: o.PROOF_DNS,
                            children: [(0, s.jsxs)(a.ModalContent, {
                                className: O().content,
                                children: [(0, s.jsxs)("ol", {
                                    className: O().list,
                                    children: [(0, s.jsx)("li", {
                                        children: (0, s.jsx)(a.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: N.Z.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_1
                                        })
                                    }), (0, s.jsxs)("li", {
                                        children: [(0, s.jsx)(a.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: N.Z.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_2
                                        }), (0, s.jsxs)("div", {
                                            className: O().dnsRecordContainer,
                                            children: [(0, s.jsx)(m, {
                                                name: N.Z.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
                                                value: (0, f.Qv)(d)
                                            }), (0, s.jsx)(m, {
                                                name: N.Z.Messages.DOMAIN_VERIFICATION_RECORD_TYPE,
                                                value: "TXT"
                                            }), (0, s.jsx)(m, {
                                                name: N.Z.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
                                                value: x
                                            })]
                                        })]
                                    })]
                                }), (0, s.jsx)(u.Z, {
                                    messageType: u.Q.INFO,
                                    className: O().text,
                                    children: N.Z.Messages.DOMAIN_VERIFICATION_DNS_WARNING
                                }), null != T && (0, s.jsx)(a.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-danger",
                                    className: O().text,
                                    children: T
                                })]
                            }), (0, s.jsxs)(a.ModalFooter, {
                                className: O().footer,
                                direction: c.Z.Direction.HORIZONTAL,
                                children: [(0, s.jsx)(a.Button, {
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    onClick: function() {
                                        g(o.DOMAIN);
                                        j(null)
                                    },
                                    children: N.Z.Messages.BACK
                                }), (0, s.jsxs)("div", {
                                    className: O().footerInner,
                                    children: [(0, s.jsx)(a.Button, {
                                        look: a.Button.Looks.LINK,
                                        color: a.Button.Colors.PRIMARY,
                                        onClick: function() {
                                            g(o.PROOF_HTTP);
                                            j(null)
                                        },
                                        className: O().switchButton,
                                        children: N.Z.Messages.DOMAIN_VERIFICATION_USE_HTTP
                                    }), (0, s.jsx)(a.Button, {
                                        submitting: M,
                                        onClick: S,
                                        children: N.Z.Messages.VERIFY
                                    })]
                                })]
                            })]
                        }), (0, s.jsxs)(a.Slide, {
                            id: o.PROOF_HTTP,
                            children: [(0, s.jsxs)(a.ModalContent, {
                                className: O().content,
                                children: [(0, s.jsx)(a.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    children: N.Z.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_HTTP
                                }), (0, s.jsxs)("div", {
                                    className: O().httpFileContainer,
                                    children: [(0, s.jsx)(m, {
                                        name: N.Z.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
                                        value: (0, f.F9)(d)
                                    }), (0, s.jsx)(m, {
                                        name: N.Z.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
                                        value: x
                                    })]
                                }), null != T && (0, s.jsx)(a.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-danger",
                                    className: O().text,
                                    children: T
                                })]
                            }), (0, s.jsxs)(a.ModalFooter, {
                                className: O().footer,
                                direction: c.Z.Direction.HORIZONTAL,
                                children: [(0, s.jsx)(a.Button, {
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    onClick: function() {
                                        g(o.DOMAIN);
                                        j(null)
                                    },
                                    children: N.Z.Messages.BACK
                                }), (0, s.jsxs)("div", {
                                    className: O().footerInner,
                                    children: [(0, s.jsx)(a.Button, {
                                        look: a.Button.Looks.LINK,
                                        color: a.Button.Colors.PRIMARY,
                                        onClick: function() {
                                            g(o.PROOF_DNS);
                                            j(null)
                                        },
                                        className: O().switchButton,
                                        children: N.Z.Messages.DOMAIN_VERIFICATION_USE_DNS
                                    }), (0, s.jsx)(a.Button, {
                                        submitting: M,
                                        onClick: S,
                                        children: N.Z.Messages.VERIFY
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
                Z: () => v,
                u: () => x
            });
            var o = n(785893),
                s = n(667294),
                r = n(294184),
                i = n.n(r),
                a = n(70418),
                l = n(990554),
                c = n(107364),
                u = n(473708),
                d = n(716523),
                f = n.n(d);

            function I(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function N(e, t, n) {
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

            function O(e, t) {
                return !t || "object" !== R(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }
            var R = function(e) {
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
                    var n, o = h(e);
                    if (t) {
                        var s = h(this).constructor;
                        n = Reflect.construct(o, arguments, s)
                    } else n = o.apply(this, arguments);
                    return O(this, n)
                }
            }
            var x = {
                    DEFAULT: "default",
                    SUCCESS: "success",
                    ERROR: "error"
                },
                C = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && p(e, t)
                    }(n, e);
                    var t = m(n);

                    function n() {
                        I(this, n);
                        var e;
                        (e = t.apply(this, arguments)).inputRef = s.createRef();
                        e.containerRef = s.createRef();
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
                    var r = n.prototype;
                    r.select = function() {
                        var e;
                        null === (e = this.inputRef.current) || void 0 === e || e.select()
                    };
                    r.renderInput = function(e) {
                        var t, n = this.props,
                            s = n.value,
                            r = n.mode,
                            a = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
                        return (0, o.jsx)("input", {
                            className: i()((0, l.l)(f(), "input", r), N({}, f().inputHidden, e)),
                            ref: this.inputRef,
                            type: "text",
                            value: s,
                            onClick: this.handleInputClick,
                            readOnly: !0,
                            "aria-labelledby": a
                        })
                    };
                    r.render = function() {
                        var e, t = this.props,
                            n = t.text,
                            s = void 0 === n ? u.Z.Messages.COPY : n,
                            r = t.mode,
                            d = t.hideMessage,
                            I = t.className,
                            N = t.buttonLook,
                            h = null != d;
                        switch (r) {
                            case x.SUCCESS:
                                e = a.ButtonColors.GREEN;
                                break;
                            case x.ERROR:
                                e = a.ButtonColors.RED;
                                break;
                            default:
                                e = this.props.buttonColor
                        }
                        return (0, o.jsx)(a.FocusRing, {
                            focusTarget: this.inputRef,
                            ringTarget: this.containerRef,
                            children: (0, o.jsx)("div", {
                                className: i()((0, l.l)(f(), "copyInput", r), I),
                                ref: this.containerRef,
                                children: (0, o.jsxs)(c.Z, {
                                    className: f().layout,
                                    children: [(0, o.jsxs)(c.Z, {
                                        className: f().inputWrapper,
                                        children: [this.renderInput(h), h ? (0, o.jsx)("div", {
                                            className: f().hiddenMessage,
                                            children: d
                                        }) : null]
                                    }), (0, o.jsx)(c.Z, {
                                        shrink: 1,
                                        grow: 0,
                                        style: {
                                            margin: 0
                                        },
                                        children: (0, o.jsx)(a.Button, {
                                            className: f().button,
                                            onClick: this.handleButtonClick,
                                            size: a.ButtonSizes.MIN,
                                            color: e,
                                            look: N,
                                            children: s
                                        })
                                    })]
                                })
                            })
                        })
                    };
                    return n
                }(s.PureComponent);
            C.contextType = a.FormContext;
            C.defaultProps = {
                supportsCopy: !0,
                buttonColor: a.ButtonColors.PRIMARY,
                buttonLook: a.ButtonLooks.FILLED,
                mode: x.DEFAULT
            };
            C.Modes = x;
            C.ButtonColors = a.ButtonColors;
            C.ButtonLooks = a.ButtonLooks;
            const v = C
        },
        613677: (e, t, n) => {
            n.d(t, {
                Q: () => o,
                Z: () => N
            });
            var o, s = n(785893),
                r = (n(667294), n(294184)),
                i = n.n(r),
                a = n(70418),
                l = n(621329),
                c = n(559968),
                u = n(386991),
                d = n(818417),
                f = n(153954),
                I = n.n(f);
            ! function(e) {
                e[e.WARNING = 0] = "WARNING";
                e[e.INFO = 1] = "INFO";
                e[e.ERROR = 2] = "ERROR";
                e[e.POSITIVE = 3] = "POSITIVE"
            }(o || (o = {}));
            const N = function(e) {
                var t = e.children,
                    n = e.messageType,
                    r = e.className,
                    f = e.textColor,
                    N = void 0 === f ? "text-normal" : f,
                    h = e.textVariant,
                    O = void 0 === h ? "text-sm/medium" : h,
                    p = function(e) {
                        switch (e) {
                            case o.WARNING:
                                return d.Z;
                            case o.INFO:
                                return u.Z;
                            case o.ERROR:
                                return c.Z;
                            case o.POSITIVE:
                                return l.Z
                        }
                    }(n),
                    R = function(e) {
                        switch (e) {
                            case o.WARNING:
                                return I().warning;
                            case o.INFO:
                                return I().info;
                            case o.ERROR:
                                return I().error;
                            case o.POSITIVE:
                                return I().positive
                        }
                    }(n);
                return (0, s.jsxs)("div", {
                    className: i()(I().container, R, r),
                    children: [(0, s.jsx)("div", {
                        className: I().iconDiv,
                        children: (0, s.jsx)(p, {
                            className: I().icon
                        })
                    }), (0, s.jsx)(a.Text, {
                        className: I().text,
                        color: N,
                        variant: O,
                        children: t
                    })]
                })
            }
        }
    }
]);