(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [82686, 70801], {
        483683: (e, t, n) => {
            e.exports = n.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, t, n) => {
            e.exports = n.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        294882: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(785893),
                o = n(667294),
                i = n(248088),
                c = n(795308),
                a = n(70418),
                s = n(930948),
                l = n(2590),
                u = n(473708),
                f = n(701784),
                d = n.n(f);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e, t) {
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

            function O(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            c = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(c = (r = n.next()).done); c = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
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
            }
            const y = function(e) {
                var t = e.message,
                    n = e.errorMessage,
                    f = e.submitting,
                    p = e.onReset,
                    y = e.onSave,
                    g = e.onSaveText,
                    m = e.onResetText,
                    v = e.onSaveButtonColor,
                    j = e.disabled,
                    E = e.saveButtonTooltip,
                    P = o.useRef(null),
                    w = O((0, i.useSpring)((function() {
                        return {
                            spring: 0
                        }
                    })), 2),
                    x = w[0].spring,
                    _ = w[1];
                o.useEffect((function() {
                    var e = function() {
                        _({
                            spring: 1,
                            config: i.config.gentle
                        });
                        _({
                            spring: 0,
                            config: i.config.gentle,
                            delay: 1e3
                        })
                    };
                    s.S.subscribe(l.CkL.EMPHASIZE_NOTICE, e);
                    return function() {
                        s.S.unsubscribe(l.CkL.EMPHASIZE_NOTICE, e)
                    }
                }), [_]);
                var C, N = x.to({
                        range: [0, 1],
                        output: [(0, a.useToken)(c.Z.colors.TEXT_NORMAL).hex(), (0, a.useToken)(c.Z.unsafe_rawColors.WHITE_500).hex()]
                    }),
                    S = x.to({
                        range: [0, 1],
                        output: [(0, a.useToken)(c.Z.colors.BACKGROUND_FLOATING).hex(), (0, a.useToken)(c.Z.colors.STATUS_DANGER).hex()]
                    }),
                    T = (0, a.useToken)(c.Z.colors.TEXT_DANGER).hex();
                return (0, r.jsx)(i.animated.div, {
                    className: d().container,
                    style: {
                        backgroundColor: S
                    },
                    children: (0, r.jsx)("div", {
                        className: d().flexContainer,
                        ref: P,
                        children: (0, r.jsxs)(a.FocusRingScope, {
                            containerRef: P,
                            children: [(0, r.jsx)("div", {
                                className: d().shrinkingContainer,
                                children: (0, r.jsx)(i.animated.div, {
                                    className: d().message,
                                    style: {
                                        color: null != n ? T : N
                                    },
                                    children: null !== (C = null != n ? n : t) && void 0 !== C ? C : u.Z.Messages.SETTINGS_NOTICE_MESSAGE
                                })
                            }), (0, r.jsxs)("div", {
                                className: d().actions,
                                children: [null != p && (0, r.jsx)(a.Button, {
                                    className: d().resetButton,
                                    size: a.Button.Sizes.SMALL,
                                    color: a.Button.Colors.PRIMARY,
                                    look: a.Button.Looks.LINK,
                                    onClick: p,
                                    children: (0, r.jsx)(i.animated.span, {
                                        style: {
                                            color: N
                                        },
                                        children: null != m ? m : u.Z.Messages.RESET
                                    })
                                }), null != y ? (0, r.jsx)(a.Tooltip, {
                                    text: E,
                                    children: function(e) {
                                        return (0, r.jsx)(a.Button, b(function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))));
                                                r.forEach((function(t) {
                                                    h(e, t, n[t])
                                                }))
                                            }
                                            return e
                                        }({
                                            size: a.Button.Sizes.SMALL,
                                            color: null != v ? v : a.Button.Colors.GREEN,
                                            submitting: f,
                                            disabled: j,
                                            onClick: y
                                        }, e), {
                                            children: null != g ? g : u.Z.Messages.SAVE_CHANGES
                                        }))
                                    }
                                }) : null]
                            })]
                        })
                    })
                })
            }
        },
        895657: (e, t, n) => {
            "use strict";
            n.d(t, {
                OA: () => c,
                _C: () => s,
                kT: () => a
            });
            var r = n(72580),
                o = n(886391),
                i = n(198181),
                c = function(e) {
                    var t = e.required,
                        n = e.response,
                        i = e.field_type;
                    if (!t) return !0;
                    if (null == n) return !1;
                    switch (i) {
                        case o.QJ.TERMS:
                        case o.QJ.VERIFICATION:
                            return Boolean(n);
                        case o.QJ.TEXT_INPUT:
                        case o.QJ.PARAGRAPH:
                            return "string" == typeof n && "" !== n.trim();
                        case o.QJ.MULTIPLE_CHOICE:
                            return "number" == typeof n;
                        default:
                            return (0, r.vE)(i)
                    }
                };

            function a(e) {
                return i.lI.has(null == e ? void 0 : e.field_type)
            }

            function s(e) {
                return i.hZ.has(null == e ? void 0 : e.field_type)
            }
        },
        370801: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => m
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                c = n(443660),
                a = n(70418),
                s = n(294882),
                l = n(698011),
                u = n(443812),
                f = n(976685),
                d = n(770393),
                p = n(680068),
                h = n(198181),
                b = n(473708),
                O = n(133766),
                y = n.n(O),
                g = function() {
                    return (0, r.jsx)(s.Z, {
                        submitting: !1,
                        message: b.Z.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_TITLE,
                        onReset: function() {
                            (0, d.PE)(!1)
                        },
                        onResetText: b.Z.Messages.CANCEL,
                        onSave: function() {
                            (0, d.PE)(!1);
                            (0, a.closeModal)(h.Pn)
                        },
                        onSaveText: b.Z.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_CONTINUE,
                        onSaveButtonColor: a.ButtonColors.RED
                    })
                };
            const m = function(e) {
                var t = e.guildId,
                    n = e.transitionState,
                    s = e.onClose,
                    h = e.onComplete,
                    b = e.isPreview,
                    O = void 0 !== b && b,
                    m = (0, d.rb)((function(e) {
                        return e.shouldShowWarning
                    })),
                    v = (0, i.e7)([f.Z], (function() {
                        return f.Z.get(t)
                    })),
                    j = (0, u.Dt)();
                o.useEffect((function() {
                    v === f.t && s()
                }), [s, v]);
                return v === f.t ? null : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(a.ModalRoot, {
                        size: a.ModalSize.MEDIUM,
                        className: y().container,
                        transitionState: n,
                        "aria-labelledby": j,
                        children: [(0, r.jsx)(a.ModalCloseButton, {
                            onClick: function() {
                                return s(!1)
                            },
                            className: y().closeButton
                        }), (0, r.jsx)(p.Z, {
                            headerId: j,
                            guildId: t,
                            onClose: s,
                            onComplete: h,
                            isPreview: O
                        })]
                    }), (0, r.jsx)(c.Z, {
                        children: !0 === m && (0, r.jsx)(l.Z, {
                            className: y().notice,
                            children: (0, r.jsx)(g, {})
                        })
                    })]
                })
            }
        },
        668844: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ih: () => f,
                PU: () => d,
                hK: () => u
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(70418),
                c = n(169649),
                a = n(559968),
                s = n(978707),
                l = n.n(s);

            function u(e) {
                var t = e.title,
                    n = e.children;
                return (0, r.jsxs)("div", {
                    className: l().questionContainer,
                    children: [(0, r.jsx)(i.Text, {
                        className: l().questionTitle,
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: t
                    }), n]
                })
            }

            function f(e) {
                var t = e.icon,
                    n = e.text,
                    s = e.meetsRequirement;
                return (0, r.jsxs)("div", {
                    className: l().requirementContainer,
                    children: [(0, r.jsx)(t, {
                        className: l().requirementIcon,
                        height: 20,
                        width: 20
                    }), (0, r.jsx)(i.Text, {
                        className: l().requirementText,
                        variant: "text-md/normal",
                        children: n
                    }), s ? (0, r.jsx)(c.Z, {
                        width: 24,
                        height: 24,
                        className: l().requirementSuccess,
                        backgroundColor: o.Z.unsafe_rawColors.WHITE_500.css
                    }) : (0, r.jsx)(a.Z, {
                        width: 24,
                        height: 24,
                        className: l().requirementFailure,
                        backgroundColor: o.Z.unsafe_rawColors.WHITE_500.css
                    })]
                })
            }

            function d(e) {
                var t = e.icon,
                    n = e.text,
                    a = e.footnote,
                    s = e.meetsRequirement,
                    u = e.children;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: l().requirementContainer,
                        children: [(0, r.jsx)(t, {
                            className: l().requirementIcon,
                            height: 20,
                            width: 20
                        }), (0, r.jsx)(i.Text, {
                            className: l().requirementText,
                            variant: "text-md/normal",
                            children: n
                        }), s ? (0, r.jsx)(c.Z, {
                            width: 24,
                            height: 24,
                            className: l().requirementSuccess,
                            backgroundColor: o.Z.unsafe_rawColors.WHITE_500.css
                        }) : u]
                    }), null != a && (0, r.jsx)(i.Text, {
                        color: "header-secondary",
                        className: l().footnote,
                        variant: "text-xs/normal",
                        children: a
                    })]
                })
            }
        },
        448124: (e, t, n) => {
            "use strict";
            n.d(t, {
                BO: () => d,
                QH: () => p,
                sp: () => h
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                c = n.n(i),
                a = n(70418),
                s = n(668844),
                l = n(880213),
                u = n(732231),
                f = n.n(u);

            function d(e) {
                var t = e.disabled,
                    n = e.field,
                    i = e.value,
                    s = e.radioItemClassName,
                    l = e.radioItemIconClassName,
                    u = e.onChange,
                    d = n.choices,
                    p = o.useMemo((function() {
                        return d.map((function(e, t) {
                            return {
                                name: e,
                                value: t,
                                radioItemIconClassName: c()(f().multipleChoiceIcon, l)
                            }
                        }))
                    }), [d, l]);
                return (0, r.jsx)(a.RadioGroup, {
                    disabled: t,
                    options: p,
                    value: i,
                    onChange: u,
                    radioItemClassName: s,
                    withTransparentBackground: !0
                })
            }

            function p(e) {
                var t = e.formField,
                    n = null != t.response ? t.choices[t.response] : "";
                return (0, r.jsx)(s.hK, {
                    title: t.label,
                    children: (0, r.jsx)(l.Gi, {
                        className: f().fieldBackground,
                        value: n,
                        disabled: !0
                    })
                })
            }

            function h(e) {
                var t = e.formField,
                    n = e.onChange;
                return (0, r.jsx)(s.hK, {
                    title: t.label,
                    children: (0, r.jsx)(d, {
                        radioItemClassName: f().fieldBackground,
                        field: t,
                        value: t.response,
                        onChange: n
                    })
                })
            }
        },
        434823: (e, t, n) => {
            "use strict";
            n.d(t, {
                Q8: () => f,
                jn: () => d,
                lX: () => p
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(70418),
                a = n(668844),
                s = n(198181),
                l = n(732231),
                u = n.n(l);

            function f(e) {
                var t = e.value,
                    n = e.placeholder,
                    o = e.onChange,
                    a = e.disabled,
                    l = e.className;
                return (0, r.jsx)(c.TextArea, {
                    className: i()(u().paragraphFieldBody, l),
                    maxLength: s.RS,
                    value: null != t ? t : "",
                    placeholder: null != n ? n : "",
                    onChange: o,
                    disabled: a,
                    autosize: !0
                })
            }

            function d(e) {
                var t = e.formField;
                return (0, r.jsx)(a.hK, {
                    title: t.label,
                    children: (0, r.jsx)(f, {
                        className: u().fieldBackground,
                        value: t.response,
                        disabled: !0
                    })
                })
            }

            function p(e) {
                var t = e.formField,
                    n = e.onChange;
                return (0, r.jsx)(a.hK, {
                    title: t.label,
                    children: (0, r.jsx)(f, {
                        className: u().fieldBackground,
                        value: t.response,
                        onChange: n
                    })
                })
            }
        },
        388025: (e, t, n) => {
            "use strict";
            n.d(t, {
                EK: () => p,
                G0: () => h,
                QC: () => b,
                dd: () => O
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(70418),
                a = n(883064),
                s = n(120491),
                l = n(668844),
                u = n(473708),
                f = n(732231),
                d = n.n(f);

            function p(e) {
                var t = e.terms,
                    n = e.channelId,
                    o = e.className;
                return (0, r.jsx)("div", {
                    className: i()(d().termsFieldBody, o),
                    children: t.map((function(e, t) {
                        return (0, r.jsxs)("div", {
                            className: d().termsRow,
                            children: [(0, r.jsx)(c.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: "".concat(t + 1, ".")
                            }), (0, r.jsx)(c.Text, {
                                variant: "text-md/normal",
                                className: d().termsRowContent,
                                children: a.Z.parseGuildVerificationFormRule(e, !0, {
                                    channelId: n
                                })
                            })]
                        }, "term-".concat(t))
                    }))
                })
            }

            function h(e) {
                var t = e.onChange,
                    n = e.checked,
                    o = e.disabled;
                return (0, r.jsx)(c.Checkbox, {
                    size: 20,
                    type: c.Checkbox.Types.INVERTED,
                    value: n,
                    onChange: t,
                    disabled: o,
                    style: {
                        borderWidth: 2
                    },
                    className: d().checkbox,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        children: u.Z.Messages.MEMBER_VERIFICATION_READ_RULES
                    })
                })
            }

            function b(e) {
                var t = e.formField;
                return (0, r.jsx)(l.Ih, {
                    icon: s.Z,
                    text: u.Z.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
                    meetsRequirement: !!t.response
                })
            }
            var O = function(e) {
                var t = e.channelId,
                    n = e.formField,
                    o = e.onChange;
                return (0, r.jsxs)(l.hK, {
                    title: u.Z.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
                    children: [(0, r.jsx)(p, {
                        className: d().fieldBackground,
                        terms: n.values,
                        channelId: t
                    }), (0, r.jsx)(h, {
                        onChange: o,
                        checked: n.response
                    })]
                })
            }
        },
        880213: (e, t, n) => {
            "use strict";
            n.d(t, {
                Gi: () => f,
                YJ: () => d,
                zY: () => p
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(70418),
                a = n(668844),
                s = n(198181),
                l = n(732231),
                u = n.n(l);

            function f(e) {
                var t = e.value,
                    n = e.placeholder,
                    o = e.onChange,
                    a = e.disabled,
                    l = e.className;
                return (0, r.jsx)(c.TextInput, {
                    inputClassName: i()(u().textInputFieldBodyInput, l),
                    maxLength: s.tL,
                    value: null != t ? t : "",
                    placeholder: n,
                    onChange: o,
                    disabled: a
                })
            }

            function d(e) {
                var t = e.formField;
                return (0, r.jsx)(a.hK, {
                    title: t.label,
                    children: (0, r.jsx)(f, {
                        className: u().fieldBackground,
                        value: t.response,
                        disabled: !0
                    })
                })
            }

            function p(e) {
                var t = e.formField,
                    n = e.onChange;
                return (0, r.jsx)(a.hK, {
                    title: t.label,
                    children: (0, r.jsx)(f, {
                        className: u().fieldBackground,
                        onChange: n,
                        value: t.response
                    })
                })
            }
        },
        426797: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => g,
                Z: () => v
            });
            var r = n(571657),
                o = n(281110),
                i = n(744564),
                c = (0, n(260561).B)({
                    kind: "user",
                    id: "2023-02_mfa_remove_phone",
                    label: "Safety Experience MFA Remove Phone",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });
            const a = c;
            var s = n(664625),
                l = n(488110),
                u = n(391438),
                f = n(58118),
                d = n(2590),
                p = n(473708);

            function h(e, t, n, r, o, i, c) {
                try {
                    var a = e[i](c),
                        s = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function b(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            h(i, r, o, c, a, "next", e)
                        }

                        function a(e) {
                            h(i, r, o, c, a, "throw", e)
                        }
                        c(void 0)
                    }))
                }
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

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        O(e, t, n[t])
                    }))
                }
                return e
            }
            var g, m = function(e, t) {
                var n, r, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };
            ! function(e) {
                e.USER_ACTION_REQUIRED = "user_action_required";
                e.USER_SETTINGS_UPDATE = "user_settings_update";
                e.GUILD_PHONE_REQUIRED = "guild_phone_required";
                e.MFA_PHONE_UPDATE = "mfa_phone_update";
                e.CONTACT_SYNC = "contact_sync"
            }(g || (g = {}));
            const v = {
                setCountryCode: function(e) {
                    i.Z.dispatch({
                        type: "PHONE_SET_COUNTRY_CODE",
                        countryCode: e
                    })
                },
                removePhone: function(e, t) {
                    return a.getCurrentConfig({
                        location: "81427d_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled ? (0, l.Z)((function(n) {
                        return o.ZP.delete({
                            url: d.ANM.PHONE,
                            body: y({
                                password: e,
                                change_phone_reason: t
                            }, n),
                            oldFormErrors: !0
                        })
                    }), {
                        modalProps: {
                            title: p.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON,
                            actionText: p.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON
                        },
                        checkEnabled: !1
                    }) : o.ZP.delete({
                        url: d.ANM.PHONE,
                        body: {
                            password: e,
                            change_phone_reason: t
                        },
                        oldFormErrors: !0
                    })
                },
                resendCode: function(e) {
                    var t = {},
                        n = s.default.getFingerprint();
                    null != n && "" !== n && (t["X-Fingerprint"] = n);
                    return o.ZP.post({
                        url: d.ANM.RESEND_PHONE,
                        headers: t,
                        body: {
                            phone: e
                        }
                    })
                },
                beginAddPhone: function(e, t) {
                    return o.ZP.post({
                        url: d.ANM.PHONE,
                        body: {
                            phone: e,
                            change_phone_reason: t
                        }
                    })
                },
                addPhone: function(e, t, n) {
                    return o.ZP.post({
                        url: d.ANM.PHONE,
                        body: {
                            phone_token: e,
                            password: t,
                            change_phone_reason: n
                        },
                        oldFormErrors: !0
                    })
                },
                addPhoneWithoutPassword: function(e) {
                    return o.ZP.post({
                        url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
                        body: {
                            code: e
                        }
                    })
                },
                beginReverifyPhone: function(e, t) {
                    return o.ZP.post({
                        url: d.ANM.PHONE_REVERIFY,
                        body: {
                            phone: e,
                            change_phone_reason: t
                        }
                    })
                },
                reverifyPhone: function(e, t, n) {
                    return o.ZP.post({
                        url: d.ANM.PHONE_REVERIFY,
                        body: {
                            phone_token: e,
                            password: t,
                            change_phone_reason: n
                        },
                        oldFormErrors: !0
                    })
                },
                validatePhoneForSupport: function(e) {
                    return o.ZP.post({
                        url: d.ANM.VERIFY_PHONE_FOR_TICKET,
                        body: {
                            token: e
                        },
                        oldFormErrors: !0
                    })
                },
                verifyPhone: function(e, t) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return b((function() {
                        var c, a, l;
                        return m(this, (function(p) {
                            switch (p.label) {
                                case 0:
                                    c = {};
                                    null != (a = s.default.getFingerprint()) && "" !== a && (c["X-Fingerprint"] = a);
                                    o && (c.authorization = "");
                                    return [4, u.Z.post({
                                        url: d.ANM.VERIFY_PHONE,
                                        headers: c,
                                        body: {
                                            phone: e,
                                            code: t
                                        },
                                        oldFormErrors: !0,
                                        trackedActionData: {
                                            event: r.a9.USER_VERIFY_PHONE
                                        }
                                    })];
                                case 1:
                                    l = p.sent();
                                    n && i.Z.dispatch({
                                        type: "MODAL_POP",
                                        key: f.M
                                    });
                                    return [2, l.body]
                            }
                        }))
                    }))()
                }
            }
        },
        58118: (e, t, n) => {
            "use strict";
            n.d(t, {
                M: () => r,
                z: () => o
            });
            var r = "PHONE_VERIFICATION_MODAL_KEY",
                o = 6
        },
        367299: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(318715)),
                i = n(785085);

            function c(e) {
                var t = e.children,
                    n = e.confettiLocation;
                return (0, o.ZP)([i.Z], (function() {
                    return i.Z.isEnabled({
                        confettiLocation: n
                    })
                })) ? (0, r.jsx)(r.Fragment, {
                    children: t
                }) : null
            }
        },
        919031: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(667294),
                o = n(318715),
                i = n(255875),
                c = n(785085);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s() {
                var e = r.useContext(i.E).createMultipleConfettiAt,
                    t = (0, o.ZP)([c.Z], (function() {
                        return c.Z.getState()
                    })),
                    n = r.useCallback((function(e) {
                        return {
                            size: {
                                type: "static-random",
                                minValue: e.confettiSize - 7,
                                maxValue: e.confettiSize + 7
                            }
                        }
                    }), []),
                    s = r.useMemo((function() {
                        return {
                            fire: function(r, o, i) {
                                var c, s, l = null != (null == i ? void 0 : i.settings) ? function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                a(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, t, i.settings) : t,
                                    u = n(l);
                                e(r, o, u, (null !== (c = null == i ? void 0 : i.count) && void 0 !== c ? c : l.confettiCount) * (null !== (s = null == i ? void 0 : i.countMultiplier) && void 0 !== s ? s : 1), {
                                    sprite: null == i ? void 0 : i.sprite
                                })
                            }
                        }
                    }), [e, n, t]);
                return s
            }
        },
        698011: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => j
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                c = n.n(i),
                a = n(853158),
                s = n(70418),
                l = n(773940),
                u = n.n(l);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function h(e, t) {
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

            function b(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }
            var y = function(e) {
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
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }
            var m = {
                    friction: 7,
                    tension: 60
                },
                v = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && O(e, t)
                    }(n, e);
                    var t = g(n);

                    function n() {
                        f(this, n);
                        var e;
                        (e = t.apply(this, arguments)).animation = new a.Z.Value(0);
                        return e
                    }
                    var o = n.prototype;
                    o.componentWillAppear = function(e) {
                        this.animateTo(1).start(e)
                    };
                    o.componentWillEnter = function(e) {
                        this.animateTo(1).start(e)
                    };
                    o.componentWillLeave = function(e) {
                        this.context.reducedMotion.enabled ? this.animateTo(0).start(e) : a.Z.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
                    };
                    o.animateTo = function(e) {
                        return a.Z.spring(this.animation, h(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    d(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, m), {
                            toValue: e
                        }))
                    };
                    o.getAnimatedStyle = function() {
                        var e = this.context.reducedMotion;
                        return a.Z.accelerate({
                            opacity: this.animation,
                            transform: e.enabled ? void 0 : [{
                                translateY: this.animation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["150%", "0%"]
                                })
                            }]
                        })
                    };
                    o.render = function() {
                        var e = this.props,
                            t = e.className,
                            n = e.children;
                        return (0, r.jsx)(a.Z.div, {
                            className: c()(t, u().slider),
                            style: this.getAnimatedStyle(),
                            children: n
                        })
                    };
                    return n
                }(o.Component);
            v.contextType = s.AccessibilityPreferencesContext;
            const j = v
        },
        269175: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                c = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e, t) {
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

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
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

            function d(e, t) {
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
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    s = void 0 === a ? "currentColor" : a,
                    l = e.foreground,
                    p = d(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, r.jsx)("path", {
                        d: "M12.0002 10.823L20.9652 5.26C20.6772 5.1 20.3522 5 20.0002 5H4.00016C3.64816 5 3.32216 5.1 3.03516 5.26L12.0002 10.823Z",
                        fill: s,
                        className: l
                    }), (0, r.jsx)("path", {
                        d: "M12.527 12.8489C12.366 12.9489 12.183 12.9999 12 12.9999C11.817 12.9999 11.634 12.9489 11.473 12.8499L2.003 6.97292C2.003 6.98192 2 6.99092 2 6.99892V15.9989C2 17.1009 2.897 17.9989 4 17.9989H20C21.103 17.9989 22 17.1009 22 15.9989V6.99892C22 6.98992 21.997 6.98092 21.997 6.97192L12.527 12.8489Z",
                        fill: s,
                        className: l
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    b = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsxs)("svg", s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M5 2a3 3 0 0 0-3 3v.596a1 1 0 0 0 .445.832L12 12.798l9.555-6.37A1 1 0 0 0 22 5.596V5a3 3 0 0 0-3-3H5Z",
                        className: h
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M22 9.47a.5.5 0 0 0-.777-.417l-8.53 5.687c-.42.28-.966.28-1.386 0l-8.53-5.687A.5.5 0 0 0 2 9.47V19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9.47Z",
                        className: h
                    })]
                }))
            }))
        },
        252761: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                c = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e, t) {
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

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
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

            function d(e, t) {
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
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    a = e.color,
                    s = void 0 === a ? "currentColor" : a,
                    l = d(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(l)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, r.jsx)("path", {
                            fill: s,
                            d: "M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"
                        })
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    b = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8Zm2 2a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2h-4Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }))
        }
    }
]);