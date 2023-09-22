(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [27059], {
        119678: (e, n, r) => {
            e.exports = r.p + "19797c1d1c85ec897bc844a23e229781.svg"
        },
        572908: (e, n, r) => {
            e.exports = r.p + "99fe0389068b0acf22fceaba855195a1.svg"
        },
        10871: (e, n, r) => {
            e.exports = r.p + "b5c69abd7b9962ba027e4c8739876068.svg"
        },
        412038: (e, n, r) => {
            e.exports = r.p + "739f5b88fcae93e1a0edd5e69a114c5d.svg"
        },
        707840: (e, n, r) => {
            e.exports = r.p + "25fdc9b420544e4a76c1cdb0eb58119c.svg"
        },
        279838: (e, n, r) => {
            e.exports = r.p + "c2c8c069dd00b94bfc3e60022297108b.svg"
        },
        64089: (e, n, r) => {
            "use strict";
            r.d(n, {
                w: () => y,
                Z: () => S
            });
            var t, a = r(785893),
                s = r(667294),
                o = r(882723),
                i = r(737797),
                l = r(260843),
                u = r(473708),
                c = r(566108),
                E = r.n(c),
                d = r(621376),
                f = r.n(d);

            function p(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function A(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function h(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        A(e, n, r[n])
                    }))
                }
                return e
            }

            function m(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        r.push.apply(r, t)
                    }
                    return r
                }(Object(n)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }));
                return e
            }

            function T(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, a, s = [],
                            o = !0,
                            i = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                s.push(t.value);
                                if (n && s.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return s
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return p(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }! function(e) {
                e.EMAIL = "email";
                e.NAME = "name"
            }(t || (t = {}));

            function N(e) {
                var n, r, i = e.onChange,
                    c = e.billingAddressInfo,
                    d = e.error,
                    f = T(s.useState({}), 2),
                    p = f[0],
                    N = f[1],
                    b = T(s.useState({}), 2),
                    y = b[0],
                    S = b[1],
                    _ = (A(n = {}, t.EMAIL, {
                        name: t.EMAIL,
                        title: function() {
                            return u.Z.Messages.EMAIL
                        },
                        autoComplete: "cc-name",
                        placeholder: function() {
                            return u.Z.Messages.EMAIL
                        },
                        getClassNameForLayout: function() {
                            return E().width100
                        },
                        renderInput: function(e) {
                            return (0, a.jsx)(o.TextInput, h({}, e))
                        }
                    }), A(n, t.NAME, {
                        name: t.NAME,
                        title: function() {
                            return u.Z.Messages.CREDIT_CARD_NAME
                        },
                        autoComplete: "cc-name",
                        placeholder: function() {
                            return u.Z.Messages.CREDIT_CARD_NAME
                        },
                        getClassNameForLayout: function() {
                            return E().width100
                        },
                        renderInput: function(e) {
                            return (0, a.jsx)(o.TextInput, h({}, e))
                        }
                    }), n),
                    P = [{
                        fields: [_[t.EMAIL]]
                    }, {
                        fields: [_[t.NAME]]
                    }];
                return (0, a.jsx)(l.Z, {
                    form: P,
                    errors: y,
                    formError: d,
                    values: (r = {}, A(r, t.NAME, c.name), A(r, t.EMAIL, c.email), r),
                    onFieldChange: function(e, n) {
                        if (null != n) {
                            p[n] || "" === e || N((function(e) {
                                e[n] = !0;
                                return e
                            }));
                            p[n] && "" === e ? S((function(e) {
                                n === t.EMAIL && (e[n] = u.Z.Messages.PAYMENT_SOURCE_EMAIL_ERROR_REQUIRED);
                                n === t.NAME && (e[n] = u.Z.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED);
                                return e
                            })) : S((function(e) {
                                delete e[n];
                                return e
                            }));
                            var r, a = (A(r = {}, t.NAME, c.name), A(r, t.EMAIL, c.email), r);
                            i(m(h({}, a), A({}, n, e)))
                        }
                    }
                })
            }
            var b = [{
                label: "Alior Bank",
                value: "alior_bank"
            }, {
                label: "Bank Millenium",
                value: "bank_millennium"
            }, {
                label: "Bank Nowy BFG S.A.",
                value: "bank_nowy_bfg_sa"
            }, {
                label: "Bank PEKAO S.A",
                value: "bank_pekao_sa"
            }, {
                label: "Banki SpBdzielcze",
                value: "banki_spbdzielcze"
            }, {
                label: "Blik via redirect",
                value: "blik"
            }, {
                label: "BNP Paribas",
                value: "bnp_paribas"
            }, {
                label: "BOZ",
                value: "boz"
            }, {
                label: "CitiHandlowy",
                value: "citi_handlowy"
            }, {
                label: "Credit Agricole",
                value: "credit_agricole"
            }, {
                label: "EnveloBank",
                value: "envelobank"
            }, {
                label: "e-Transfer Poctowy24",
                value: "etransfer_pocztowy24"
            }, {
                label: "Getin Bank",
                value: "getin_bank"
            }, {
                label: "IdeaBank",
                value: "ideabank"
            }, {
                label: "ING",
                value: "ing"
            }, {
                label: "inteligo",
                value: "inteligo"
            }, {
                label: "mBank-mtransfer",
                value: "mbank_mtransfer"
            }, {
                label: "Nest Przelew",
                value: "nest_przelew"
            }, {
                label: "Noble Pay",
                value: "noble_pay"
            }, {
                label: "PBac z iPKO (PKO+BP)",
                value: "pbac_z_ipko"
            }, {
                label: "Plus Bank",
                value: "plus_bank"
            }, {
                label: "Santander-przelew24",
                value: "santander_przelew24"
            }, {
                label: "T-Mobile Usbugi Bankowe",
                value: "tmobile_usbugi_bankowe"
            }, {
                label: "Toyota Bank",
                value: "toyota_bank"
            }, {
                label: "Volkswagen Bank",
                value: "volkswagen_bank"
            }];

            function y(e) {
                var n = e.onDetailsChange,
                    r = e.onP24BankChange,
                    t = e.error,
                    o = e.billingAddressInfo,
                    c = e.p24BankValue,
                    d = T(s.useState(c), 2),
                    p = d[0],
                    h = d[1],
                    m = "p24Bank",
                    y = {
                        name: m,
                        title: function() {
                            return u.Z.Messages.PAYMENT_SOURCE_PRZELEWY24_BANK_LABEL
                        },
                        getClassNameForLayout: function() {
                            return E().width100
                        },
                        renderInput: function(e) {
                            return (0, a.jsx)(i.Z, {
                                maxMenuHeight: 190,
                                menuPlacement: i.Z.MenuPlacements.TOP,
                                clearable: !1,
                                options: b,
                                value: e.value,
                                onChange: function(e) {
                                    var n = e.value;
                                    r(n);
                                    h(n)
                                }
                            })
                        }
                    },
                    S = [{
                        fields: [y]
                    }];
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(N, {
                        error: t,
                        billingAddressInfo: o,
                        onChange: n
                    }), (0, a.jsx)(l.Z, {
                        className: f().p24Form,
                        form: S,
                        errors: {},
                        formError: t,
                        values: A({}, m, p)
                    })]
                })
            }
            const S = N
        },
        554189: (e, n, r) => {
            "use strict";
            r.d(n, {
                F: () => c,
                b: () => E
            });
            var t = r(785893),
                a = (r(667294), r(441143)),
                s = r.n(a),
                o = r(882723),
                i = r(782786),
                l = r(383861),
                u = r(473708),
                c = function(e) {
                    var n = e.className;
                    return (0, t.jsx)(o.FormSection, {
                        className: n,
                        children: (0, t.jsx)(o.FormTitle, {
                            children: u.Z.Messages.PAYMENT_WAITING_FOR_AUTHENTICATION
                        })
                    })
                };

            function E(e) {
                var n = e.steps,
                    r = e.currentStep,
                    a = e.paymentError,
                    o = e.className,
                    u = (0, i.usePaymentContext)(),
                    E = u.steps,
                    d = u.step,
                    f = u.paymentError;
                n = null != n ? n : E;
                null == r && null != d && (r = d);
                s()(r, "step should be set");
                s()(n, "step should be set");
                a = null != a ? a : f;
                return (0, t.jsx)(l.Z, {
                    steps: n,
                    currentStep: r,
                    paymentError: a,
                    body: (0, t.jsx)(c, {
                        className: o
                    }),
                    footer: null
                })
            }
        },
        128059: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => p
            });
            var t = r(785893),
                a = (r(667294), r(294184)),
                s = r.n(a),
                o = r(818103),
                i = r(669426),
                l = r(644144),
                u = r(782786),
                c = r(83471),
                E = r(473708),
                d = r(14346),
                f = r.n(d);

            function p(e) {
                var n, r = e.className,
                    a = e.isEligibleForTrial,
                    d = void 0 !== a && a,
                    p = (0, u.usePaymentContext)(),
                    A = p.step,
                    h = p.breadcrumbs,
                    m = p.startedPaymentFlowWithPaymentSourcesRef,
                    T = p.isGift,
                    N = p.selectedSkuId,
                    b = p.giftRecipient;
                if (null == h || 0 === h.length || (0, l.a8)(b)) return null;
                n = (0, o.Wt)({
                    isTrial: d,
                    isGift: T,
                    selectedSkuId: N
                }).enabled ? [{
                    id: c.h8.REVIEW,
                    label: E.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT
                }] : h.filter((function(e) {
                    var n = e.id !== c.h8.ADD_PAYMENT_STEPS,
                        r = e.id === c.h8.ADD_PAYMENT_STEPS && !m.current;
                    return !d || d && (n || r)
                }));
                return (0, t.jsx)("div", {
                    className: s()("breadcrumb", f().wrapper, r),
                    children: (0, t.jsx)(i.Z, {
                        activeId: A,
                        breadcrumbs: n
                    })
                })
            }
        },
        328535: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => A
            });
            var t = r(785893),
                a = (r(667294), r(294184)),
                s = r.n(a),
                o = r(882723),
                i = r(347365),
                l = r(414094),
                u = r(782786),
                c = r(83471),
                E = r(2590),
                d = r(473708),
                f = r(56901),
                p = r.n(f);

            function A(e) {
                var n = e.planError,
                    r = e.purchaseErrorBlockRef,
                    a = e.className,
                    f = (0, u.usePaymentContext)(),
                    A = f.currencies,
                    h = f.paymentError,
                    m = f.purchaseError,
                    T = null;
                null != h && null == (0, c.ly)(h) ? T = h : null != m ? T = m : null != n && (T = n);
                var N = A.length > 1,
                    b = null != T ? T.message : "";
                if (null != T && T instanceof i.HF) {
                    T.code === l.SM.CARD_DECLINED && N && (b += " ".concat(d.Z.Messages.BILLING_ERROR_TRY_ANOTHER));
                    T.code === l.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (b = d.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT);
                    T.code === E.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (b = d.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)
                }
                return null == T ? null : (0, t.jsx)("div", {
                    className: s()(p().errorBlockWrapper, a),
                    children: (0, t.jsx)(o.FormErrorBlock, {
                        ref: r,
                        children: b
                    })
                })
            }
        },
        470387: (e, n, r) => {
            "use strict";
            r.d(n, {
                R: () => t,
                Z: () => s
            });
            var t, a = r(260561);
            ! function(e) {
                e[e.NONE = 0] = "NONE";
                e[e.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL";
                e[e.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW"
            }(t || (t = {}));
            const s = (0, a.B)({
                id: "2023-08_checkout_v2_parent",
                label: "Checkout V2 Parent",
                kind: "user",
                defaultConfig: {
                    experiment: t.NONE
                },
                treatments: [{
                    id: 1,
                    label: "Browser Autofill",
                    config: {
                        experiment: t.BROWSER_AUTOFILL
                    }
                }, {
                    id: 2,
                    label: "Merge Plan Select to Review",
                    config: {
                        experiment: t.MERGE_PLAN_SELECT_TO_REVIEW
                    }
                }]
            })
        },
        818103: (e, n, r) => {
            "use strict";
            r.d(n, {
                Wt: () => l,
                $g: () => u,
                D3: () => c
            });
            var t = r(260561),
                a = r(116094),
                s = r(470387),
                o = r(203600),
                i = (0, t.B)({
                    id: "2023-07_move_plan_select_to_review",
                    label: "Move plan select to review step",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1,
                        defaultToMonthlyPlan: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled with monthly default",
                        config: {
                            enabled: !0,
                            defaultToMonthlyPlan: !0
                        }
                    }, {
                        id: 2,
                        label: "Enabled with yearly default",
                        config: {
                            enabled: !0,
                            defaultToMonthlyPlan: !1
                        }
                    }]
                });

            function l(e) {
                var n = e.isTrial,
                    r = e.isGift,
                    t = e.selectedSkuId;
                if (n || r || null == t || !o.YQ.includes(t)) return {
                    enabled: !1,
                    defaultToMonthlyPlan: !1
                };
                if (s.Z.getCurrentConfig({
                        location: "fa931a_1"
                    }).experiment === s.R.MERGE_PLAN_SELECT_TO_REVIEW) {
                    return i.getCurrentConfig({
                        location: "fa931a_2"
                    }, {
                        autoTrackExposure: !0
                    })
                }
                return {
                    enabled: !1,
                    defaultToMonthlyPlan: !1
                }
            }

            function u(e, n, r) {
                var t = !1;
                if (e && null != n) {
                    null == n.invoiceItems.find((function(e) {
                        return e.subscriptionPlanId === r.id
                    })) && (t = !0)
                }
                return t
            }

            function c(e, n, r, t) {
                var s = e.defaultToMonthlyPlan,
                    i = null != r ? (0, a.Af)(r) : null,
                    l = s ? o.IW[n] : o.mn[n],
                    u = null != t ? t : l;
                null != i ? u === i.planId && u === o.IW[n] ? u = o.mn[n] : u === i.planId && u === o.mn[n] ? u = o.IW[n] : i.planId !== o.Xh.PREMIUM_YEAR_TIER_0 && i.planId !== o.Xh.PREMIUM_YEAR_TIER_1 || u !== o.Xh.PREMIUM_MONTH_TIER_2 || (u = o.Xh.PREMIUM_YEAR_TIER_2) : u === o.Xh.PREMIUM_YEAR_TIER_1 && (u = o.Xh.PREMIUM_MONTH_TIER_1);
                return u
            }
        },
        27059: (e, n, r) => {
            "use strict";
            r.d(n, {
                vP: () => we,
                kx: () => Be,
                fL: () => Fe
            });
            var t = r(785893),
                a = r(667294),
                s = r(886664),
                o = r(441143),
                i = r.n(o),
                l = r(202351),
                u = r(882723),
                c = r(744564),
                E = r(673679),
                d = r(872589),
                f = r(933599),
                p = r(842257),
                A = r(773262),
                h = r(64089),
                m = r(520983),
                T = r(387652),
                N = r(554189),
                b = r(886433),
                y = r(608452),
                S = r(575945),
                _ = r(74535),
                P = r(520453),
                I = r(473708),
                O = r(329508),
                R = r.n(O),
                M = r(119678),
                g = r.n(M),
                v = r(572908),
                C = r.n(v),
                k = r(10871),
                D = r.n(k),
                Y = r(412038),
                j = r.n(Y),
                x = r(707840),
                Z = r.n(x),
                L = r(279838),
                B = r.n(L);

            function w(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function F(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, a, s = [],
                            o = !0,
                            i = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                s.push(t.value);
                                if (n && s.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return s
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return w(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return w(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const H = function(e) {
                var n = (0, _.ZP)(),
                    r = a.useRef(null),
                    o = F(a.useState({}), 2),
                    i = o[0],
                    l = o[1];
                a.useLayoutEffect((function() {
                    var e = r.current;
                    if (null != e) {
                        var n = window.getComputedStyle(e),
                            t = window.getComputedStyle(e, "::placeholder"),
                            a = n.getPropertyValue("font-family"),
                            s = n.getPropertyValue("font-weight"),
                            o = n.getPropertyValue("color"),
                            i = n.getPropertyValue("font-size"),
                            u = n.getPropertyValue("background-color");
                        l({
                            base: {
                                fontFamily: a,
                                fontWeight: s,
                                color: o,
                                fontSize: i,
                                backgroundColor: u,
                                padding: "12px",
                                "::placeholder": {
                                    color: t.getPropertyValue("color")
                                }
                            }
                        })
                    }
                }), [r]);
                switch (e.type) {
                    case P.He.PRZELEWY24:
                        var c = (0, S.wj)(n) ? Z() : B(),
                            E = e.onNameChange,
                            d = e.onEmailChange,
                            f = e.onP24BankChange,
                            p = e.p24BankValue,
                            A = e.billingAddressInfo;
                        return (0, t.jsxs)("div", {
                            className: R().body,
                            children: [(0, t.jsx)(u.FormSection, {
                                title: I.Z.Messages.EMAIL,
                                children: (0, t.jsx)(u.TextInput, {
                                    inputRef: r,
                                    name: I.Z.Messages.EMAIL,
                                    placeholder: I.Z.Messages.EMAIL,
                                    onChange: function(e) {
                                        return d(e)
                                    },
                                    value: A.email
                                })
                            }), (0, t.jsx)(u.FormSection, {
                                className: R().nonTopInputWrapper,
                                title: I.Z.Messages.CREDIT_CARD_NAME,
                                children: (0, t.jsx)(u.TextInput, {
                                    name: I.Z.Messages.CREDIT_CARD_NAME,
                                    placeholder: I.Z.Messages.CREDIT_CARD_NAME,
                                    onChange: function(e) {
                                        return E(e)
                                    },
                                    value: A.name
                                })
                            }), (0, t.jsxs)(u.FormSection, {
                                className: R().nonTopInputWrapper,
                                title: I.Z.Messages.PAYMENT_SOURCE_PRZELEWY24_BANK_LABEL,
                                children: [(0, t.jsx)(s.P24BankElement, {
                                    options: {
                                        value: p,
                                        style: i
                                    },
                                    onChange: function(e) {
                                        return f(e.value)
                                    }
                                }), (0, t.jsx)("div", {
                                    className: R().bankSelectionStub,
                                    children: (0, t.jsx)("img", {
                                        src: c,
                                        alt: "Przelewy24"
                                    })
                                })]
                            })]
                        });
                    case P.He.EPS:
                        var h = e.onAccountHolderNameChange,
                            m = e.onEPSBankChange,
                            T = e.epsBankValue,
                            N = e.billingAddressInfo,
                            b = (0, S.wj)(n) ? g() : C();
                        return (0, t.jsxs)("div", {
                            className: R().body,
                            children: [(0, t.jsx)(u.FormSection, {
                                title: I.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                                children: (0, t.jsx)(u.TextInput, {
                                    inputRef: r,
                                    name: I.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                                    placeholder: I.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                                    onChange: function(e) {
                                        return h(e)
                                    },
                                    value: N.name
                                })
                            }), (0, t.jsxs)(u.FormSection, {
                                className: R().nonTopInputWrapper,
                                title: I.Z.Messages.PAYMENT_SOURCE_EPS_BANK_LABEL,
                                children: [(0, t.jsx)(s.EpsBankElement, {
                                    options: {
                                        value: T,
                                        style: i
                                    },
                                    onChange: function(e) {
                                        return m(e.value)
                                    }
                                }), (0, t.jsx)("div", {
                                    className: R().bankSelectionStub,
                                    children: (0, t.jsx)("img", {
                                        src: b,
                                        alt: "EPS"
                                    })
                                })]
                            })]
                        });
                    case P.He.IDEAL:
                        var y = e.onAccountHolderNameChange,
                            O = e.onIdealBankChange,
                            M = e.idealBankValue,
                            v = e.billingAddressInfo,
                            k = (0, S.wj)(n) ? D() : j();
                        return (0, t.jsxs)("div", {
                            className: R().body,
                            children: [(0, t.jsx)(u.FormSection, {
                                title: I.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                                children: (0, t.jsx)(u.TextInput, {
                                    inputRef: r,
                                    name: I.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                                    placeholder: I.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                                    onChange: function(e) {
                                        return y(e)
                                    },
                                    value: v.name
                                })
                            }), (0, t.jsxs)(u.FormSection, {
                                className: R().nonTopInputWrapper,
                                title: I.Z.Messages.PAYMENT_SOURCE_IDEAL_BANK_LABEL,
                                children: [(0, t.jsx)(s.IdealBankElement, {
                                    options: {
                                        value: M,
                                        style: i
                                    },
                                    onChange: function(e) {
                                        return O(e.value)
                                    }
                                }), (0, t.jsx)("div", {
                                    className: R().bankSelectionStub,
                                    children: (0, t.jsx)("img", {
                                        src: k,
                                        alt: "iDeal"
                                    })
                                })]
                            })]
                        });
                    default:
                        throw new Error("unknown payment source type")
                }
            };
            var U = r(296602),
                V = r(782786),
                W = r(83471),
                G = r(128059),
                z = r(456893),
                K = r(149096),
                X = r(443258),
                q = r(328535),
                Q = r(615796),
                J = r(856281),
                $ = r(458823),
                ee = r(711531),
                ne = r(909365),
                re = r(120415),
                te = r(799105),
                ae = r(785531),
                se = r(383861),
                oe = r(260726),
                ie = r.n(oe),
                le = r(152221),
                ue = r.n(le);

            function ce(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function Ee(e, n, r, t, a, s, o) {
                try {
                    var i = e[s](o),
                        l = i.value
                } catch (e) {
                    r(e);
                    return
                }
                i.done ? n(l) : Promise.resolve(l).then(t, a)
            }

            function de(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, a) {
                        var s = e.apply(n, r);

                        function o(e) {
                            Ee(s, t, a, o, i, "next", e)
                        }

                        function i(e) {
                            Ee(s, t, a, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function fe(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function pe(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        fe(e, n, r[n])
                    }))
                }
                return e
            }

            function Ae(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        r.push.apply(r, t)
                    }
                    return r
                }(Object(n)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }));
                return e
            }

            function he(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, a, s = [],
                            o = !0,
                            i = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                s.push(t.value);
                                if (n && s.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return s
                    }
                }(e, n) || Te(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function me(e) {
                return function(e) {
                    if (Array.isArray(e)) return ce(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Te(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Te(e, n) {
                if (e) {
                    if ("string" == typeof e) return ce(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    return "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ce(e, n) : void 0
                }
            }
            var Ne = function(e, n) {
                    var r, t, a, s, o = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                        next: i(0),
                        throw: i(1),
                        return: i(2)
                    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                        return this
                    }), s;

                    function i(s) {
                        return function(i) {
                            return function(s) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (r = 1, t && (a = 2 & s[0] ? t.return : s[0] ? t.throw || ((a = t.return) && a.call(t), 0) : t.next) && !(a = a.call(t, s[1])).done) return a;
                                    (t = 0, a) && (s = [2 & s[0], a.value]);
                                    switch (s[0]) {
                                        case 0:
                                        case 1:
                                            a = s;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: s[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            t = s[1];
                                            s = [0];
                                            continue;
                                        case 7:
                                            s = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                                o.label = s[1];
                                                break
                                            }
                                            if (6 === s[0] && o.label < a[1]) {
                                                o.label = a[1];
                                                a = s;
                                                break
                                            }
                                            if (a && o.label < a[2]) {
                                                o.label = a[2];
                                                o.ops.push(s);
                                                break
                                            }
                                            a[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    s = n.call(e, o)
                                } catch (e) {
                                    s = [6, e];
                                    t = 0
                                } finally {
                                    r = a = 0
                                }
                                if (5 & s[0]) throw s[1];
                                return {
                                    value: s[0] ? s[1] : void 0,
                                    done: !0
                                }
                            }([s, i])
                        }
                    }
                },
                be = new U.Z("AddPaymentStep.tsx"),
                ye = [W.h8.PAYMENT_TYPE],
                Se = [W.h8.PAYMENT_TYPE, W.h8.CREDIT_CARD_INFORMATION, W.h8.ADDRESS],
                _e = [W.h8.PAYMENT_TYPE, W.h8.PAYPAL_INFORMATION, W.h8.ADDRESS],
                Pe = [W.h8.PAYMENT_TYPE, W.h8.VENMO_INFORMATION, W.h8.ADDRESS],
                Ie = [W.h8.PAYMENT_TYPE, W.h8.SOFORT_INFORMATION, W.h8.ADDRESS],
                Oe = (W.h8.PAYMENT_TYPE, W.h8.PAYMENT_REQUEST_INFORMATION, W.h8.ADDRESS, [W.h8.PAYMENT_TYPE, W.h8.PRZELEWY24_INFORMATION, W.h8.ADDRESS]),
                Re = [W.h8.PAYMENT_TYPE, W.h8.EPS_INFORMATION, W.h8.ADDRESS],
                Me = [W.h8.PAYMENT_TYPE, W.h8.IDEAL_INFORMATION, W.h8.ADDRESS],
                ge = [W.h8.PAYMENT_TYPE, W.h8.ADDRESS],
                ve = {
                    name: "",
                    cardNumber: "",
                    expirationDate: "",
                    cvc: ""
                },
                Ce = {
                    email: "",
                    name: "",
                    country: "",
                    line1: "",
                    line2: "",
                    city: "",
                    postalCode: "",
                    state: ""
                };

            function ke(e) {
                var n, r = e.onChooseType,
                    a = e.onPaymentRequestSourceReceived,
                    s = e.onPaymentRequestSourceFailed,
                    o = e.analyticsLocation,
                    i = e.isEligibleForTrial;
                return (0, t.jsx)("div", {
                    className: ie().body,
                    children: (0, t.jsx)(p.Z, {
                        onChooseType: r,
                        allowStripeRequestPayments: !re.FB,
                        onStripePaymentMethodReceived: (n = de((function(e) {
                            var n, r;
                            return Ne(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        (0, f.Xt)(e);
                                        if (null == e) {
                                            s();
                                            return [2]
                                        }
                                        t.label = 1;
                                    case 1:
                                        t.trys.push([1, 3, , 4]);
                                        return [4, (0, E.i6)(e, void 0, o)];
                                    case 2:
                                        n = t.sent();
                                        r = (0, te.az)(e).billingAddressInfo;
                                        a(n, r);
                                        return [3, 4];
                                    case 3:
                                        t.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        })), function(e) {
                            return n.apply(this, arguments)
                        }),
                        isEligibleForTrial: i
                    })
                })
            }

            function De(e) {
                var n = e.onCardInfoChange,
                    r = (0, l.e7)([J.Z], (function() {
                        return J.Z.error
                    }));
                return (0, t.jsx)("div", {
                    className: ie().body,
                    children: (0, t.jsx)(b.j, {
                        billingError: r,
                        onCardInfoChange: n
                    })
                })
            }

            function Ye() {
                return (0, t.jsx)("div", {
                    className: ie().body,
                    children: (0, t.jsx)(A.Z, {})
                })
            }

            function je() {
                return (0, t.jsx)("div", {
                    className: ie().body,
                    children: (0, t.jsx)(m.Z, {})
                })
            }

            function xe() {
                var e = (0, l.e7)([Q.Z], (function() {
                        return Q.Z.isBusy
                    })),
                    n = (0, l.e7)([J.Z], (function() {
                        return J.Z.stripePaymentMethod
                    }));
                return (0, t.jsx)(y.k, {
                    className: ie().body,
                    stripePaymentMethod: n,
                    submitting: e
                })
            }

            function Ze(e) {
                var n = e.billingAddressInfo,
                    r = e.onBillingAddressChange,
                    a = e.paymentSourceType,
                    s = (0, l.e7)([J.Z], (function() {
                        return J.Z.error
                    }));
                return (0, t.jsx)("div", {
                    className: ie().body,
                    children: (0, t.jsx)(T.P, {
                        billingAddressInfo: n,
                        billingError: s,
                        onBillingAddressChange: r,
                        paymentSourceType: a
                    })
                })
            }

            function Le() {
                return (0, t.jsx)(N.F, {
                    className: ie().body
                })
            }

            function Be(e) {
                var n = e.breadcrumbSteps,
                    r = (0, V.usePaymentContext)(),
                    t = r.step,
                    a = r.setStep,
                    s = r.paymentSources,
                    o = r.paymentSourceId,
                    l = r.setPaymentSourceId,
                    u = r.purchaseError,
                    c = r.setPurchaseError,
                    E = r.purchaseErrorBlockRef,
                    d = r.paymentAuthenticationState,
                    f = Ae(pe({}, Fe()), {
                        paymentSources: s,
                        paymentSourceId: o,
                        setPaymentSourceId: l,
                        purchaseError: u,
                        setPurchaseError: c,
                        purchaseErrorBlockRef: E,
                        paymentAuthenticationState: d
                    });
                i()(t, "Step should be set here");
                return we({
                    paymentModalArgs: f,
                    initialStep: W.h8.PAYMENT_TYPE,
                    prependSteps: [W.h8.PROMOTION_INFO],
                    appendSteps: [W.h8.REVIEW, W.h8.CONFIRM],
                    breadcrumpSteps: n,
                    currentBreadcrumpStep: t,
                    onReturn: function() {
                        return a(W.h8.REVIEW)
                    },
                    onComplete: function() {
                        return a(W.h8.REVIEW)
                    },
                    onStepChange: function() {}
                })
            }

            function we(e) {
                var n = e.paymentModalArgs,
                    r = e.initialStep,
                    o = e.prependSteps,
                    c = e.appendSteps,
                    p = e.onReturn,
                    A = e.onComplete,
                    m = e.onStepChange,
                    T = e.breadcrumpSteps,
                    N = e.currentBreadcrumpStep,
                    b = e.header,
                    y = e.analyticsLocation,
                    S = e.hideBreadcrumbs,
                    _ = void 0 !== S && S,
                    O = e.usePaymentModalStep,
                    R = void 0 !== O && O,
                    M = e.isEligibleForTrial,
                    g = void 0 !== M && M,
                    v = function(e) {
                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        Q(e);
                        n && m({
                            currentStep: U,
                            toStep: e
                        })
                    },
                    C = function(e) {
                        Ee(e.id);
                        ! function(e) {
                            A(U, e);
                            v(r, !1)
                        }(e)
                    },
                    k = {
                        steps: me(o).concat(me(Se), me(c)),
                        methodType: P.He.CARD
                    },
                    D = {
                        steps: me(o).concat(me(ye), me(c)),
                        methodType: P.He.PAYMENT_REQUEST
                    },
                    Y = {
                        steps: me(o).concat(me(_e), me(c)),
                        methodType: P.He.PAYPAL
                    },
                    j = {
                        steps: me(o).concat(me(Pe), me(c)),
                        methodType: P.He.VENMO
                    },
                    x = {
                        steps: me(o).concat(me(ye), me(c))
                    },
                    Z = {
                        steps: me(o).concat(me(Ie), me(c)),
                        methodType: P.He.SOFORT
                    },
                    L = {
                        steps: me(o).concat(me(Oe), me(c)),
                        methodType: P.He.PRZELEWY24
                    },
                    B = {
                        steps: me(o).concat(me(Re), me(c)),
                        methodType: P.He.EPS
                    },
                    w = {
                        steps: me(o).concat(me(Me), me(c)),
                        methodType: P.He.IDEAL
                    },
                    F = he(a.useState(r), 2),
                    U = F[0],
                    Q = F[1],
                    $ = he(a.useState(null == T ? k : {
                        steps: [W.h8.ADD_PAYMENT_STEPS]
                    }), 2),
                    ne = $[0],
                    re = $[1],
                    te = (0, V.usePaymentContext)().stripe,
                    ae = (0, l.e7)([J.Z], (function() {
                        return J.Z.redirectedPaymentSourceId
                    }));
                a.useEffect((function() {
                    ! function() {
                        if (null != ae) {
                            var e = ee.Z.getPaymentSource(ae);
                            if (null != e) {
                                C(e);
                                He(!1)
                            }
                        }
                    }()
                }), [ae]);
                var oe, le, ce, Ee = n.setPaymentSourceId,
                    fe = n.creditCardState,
                    Te = n.setCreditCardState,
                    ve = n.tokenState,
                    Ce = n.setTokenState,
                    Be = n.isSubmittingCurrentStep,
                    we = n.billingAddressState,
                    Fe = n.setBillingAddressState,
                    He = n.setIsSubmittingCurrentStep,
                    Ue = n.hasRedirectURL,
                    Ve = n.setHasRedirectURL,
                    We = n.braintreeEmail,
                    Ge = n.braintreeNonce,
                    ze = n.venmoUsername,
                    Ke = n.isAuthenticating,
                    Xe = n.epsBankState,
                    qe = n.setEpsBankState,
                    Qe = n.idealBankState,
                    Je = n.setIdealBankState,
                    $e = n.p24BankState,
                    en = n.setP24BankState;
                switch (U) {
                    case W.h8.PAYMENT_TYPE:
                        oe = (0, t.jsx)(ke, {
                            onChooseType: function(e) {
                                switch (e) {
                                    case P.He.CARD:
                                        re(k);
                                        v(W.h8.CREDIT_CARD_INFORMATION);
                                        break;
                                    case P.He.PAYPAL:
                                        re(Y);
                                        v(W.h8.PAYPAL_INFORMATION);
                                        break;
                                    case P.He.VENMO:
                                        re(j);
                                        v(W.h8.VENMO_INFORMATION);
                                        break;
                                    case P.He.PAYMENT_REQUEST:
                                        re(D);
                                        v(W.h8.PAYMENT_REQUEST_INFORMATION);
                                        break;
                                    case P.He.SOFORT:
                                        re(Z);
                                        v(W.h8.SOFORT_INFORMATION);
                                        break;
                                    case P.He.PRZELEWY24:
                                        re(L);
                                        v(W.h8.PRZELEWY24_INFORMATION);
                                        break;
                                    case P.He.EPS:
                                        re(B);
                                        v(W.h8.EPS_INFORMATION);
                                        break;
                                    case P.He.IDEAL:
                                        re(w);
                                        v(W.h8.IDEAL_INFORMATION);
                                        break;
                                    case P.He.GIROPAY:
                                    case P.He.PAYSAFE_CARD:
                                    case P.He.GCASH:
                                    case P.He.GRABPAY_MY:
                                    case P.He.MOMO_WALLET:
                                    case P.He.KAKAOPAY:
                                    case P.He.GOPAY_WALLET:
                                    case P.He.BANCONTACT:
                                        re({
                                            steps: me(o).concat(me(ge), me(c)),
                                            methodType: e
                                        });
                                        v(W.h8.ADDRESS)
                                }
                                null != J.Z.error && (0, f.fw)()
                            },
                            onPaymentRequestSourceReceived: function(e, n) {
                                Fe((function(e) {
                                    return Ae(pe({}, e), {
                                        info: n
                                    })
                                }));
                                re(D);
                                C(e)
                            },
                            onPaymentRequestSourceFailed: function() {
                                re(x);
                                v(W.h8.PAYMENT_TYPE)
                            },
                            analyticsLocation: y,
                            isEligibleForTrial: g
                        });
                        le = (0, t.jsx)(z.Z, {
                            onBack: p
                        });
                        break;
                    case W.h8.CREDIT_CARD_INFORMATION:
                        var nn = 2 === (0, X._)().bucket,
                            rn = (ce = de((function(e) {
                                var n, r, t, a;
                                return Ne(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            He(!0);
                                            s.label = 1;
                                        case 1:
                                            s.trys.push([1, 9, 10, 11]);
                                            return [4, (0, E.qv)(te, e)];
                                        case 2:
                                            n = s.sent();
                                            Ce({
                                                token: n
                                            });
                                            (0, f.fw)();
                                            if (!nn) return [3, 7];
                                            s.label = 3;
                                        case 3:
                                            s.trys.push([3, 5, , 6]);
                                            return [4, (0, E.f0)(te, n, we.info, y)];
                                        case 4:
                                            r = s.sent();
                                            C(r);
                                            return [3, 6];
                                        case 5:
                                            s.sent();
                                            return [3, 6];
                                        case 6:
                                            return [3, 8];
                                        case 7:
                                            v(W.h8.ADDRESS);
                                            s.label = 8;
                                        case 8:
                                            return [3, 11];
                                        case 9:
                                            t = s.sent();
                                            be.error(null !== (a = t.message) && void 0 !== a ? a : JSON.stringify(t));
                                            return [3, 11];
                                        case 10:
                                            He(!1);
                                            return [7];
                                        case 11:
                                            return [2]
                                    }
                                }))
                            })), function(e) {
                                return ce.apply(this, arguments)
                            });
                        oe = (0, t.jsx)(De, {
                            onCardInfoChange: function(e, n) {
                                Te({
                                    info: e,
                                    isValid: n
                                });
                                Fe((function(n) {
                                    var r = Ae(pe({}, n), {
                                        info: Ae(pe({}, n.info), {
                                            name: e.name
                                        })
                                    });
                                    if (nn) {
                                        var t, a;
                                        r.info.country = null !== (t = e.country) && void 0 !== t ? t : "";
                                        r.info.postalCode = null !== (a = e.postalCode) && void 0 !== a ? a : ""
                                    }
                                    return r
                                }))
                            }
                        });
                        le = (0,
                            t.jsx)(s.ElementsConsumer, {
                            children: function(e) {
                                var n = e.elements;
                                return (0, t.jsx)(z.Z, {
                                    onBack: function() {
                                        return v(W.h8.PAYMENT_TYPE)
                                    },
                                    primaryCTA: z.Z.CTAType.CONTINUE,
                                    primaryType: "submit",
                                    primaryText: I.Z.Messages.NEXT,
                                    primarySubmitting: Be,
                                    primaryDisabled: nn ? !fe.isValid || Ke : !fe.isValid,
                                    onPrimary: function() {
                                        return rn(n)
                                    }
                                })
                            }
                        });
                        break;
                    case W.h8.SOFORT_INFORMATION:
                        var tn = we.info;
                        oe = (0, t.jsx)("div", {
                            className: ie().body,
                            children: (0, t.jsx)(h.Z, {
                                billingAddressInfo: tn,
                                onChange: function(e) {
                                    Fe({
                                        info: pe({}, tn, e),
                                        isValid: !1
                                    })
                                },
                                error: J.Z.error
                            })
                        });
                        le = (0, t.jsx)(z.Z, {
                            onBack: function() {
                                return v(W.h8.PAYMENT_TYPE)
                            },
                            primaryCTA: z.Z.CTAType.CONTINUE,
                            primaryText: I.Z.Messages.NEXT,
                            primaryDisabled: "" === tn.name || "" === tn.email || void 0 === tn.email,
                            onPrimary: function() {
                                return v(W.h8.ADDRESS)
                            }
                        });
                        break;
                    case W.h8.EPS_INFORMATION:
                        oe = (0, t.jsx)(H, {
                            type: P.He.EPS,
                            onAccountHolderNameChange: function(e) {
                                return Fe({
                                    info: Ae(pe({}, we.info), {
                                        name: e
                                    }),
                                    isValid: we.isValid
                                })
                            },
                            onEPSBankChange: function(e) {
                                return qe(e)
                            },
                            epsBankValue: Xe,
                            billingAddressInfo: we.info
                        });
                        le = (0, t.jsx)(z.Z, {
                            onBack: function() {
                                return v(W.h8.PAYMENT_TYPE)
                            },
                            primaryCTA: z.Z.CTAType.CONTINUE,
                            primaryText: I.Z.Messages.NEXT,
                            primaryDisabled: void 0 === Xe || "" === Xe || "" === we.info.name,
                            onPrimary: function() {
                                return v(W.h8.ADDRESS)
                            }
                        });
                        break;
                    case W.h8.IDEAL_INFORMATION:
                        oe = (0, t.jsx)(H, {
                            type: P.He.IDEAL,
                            onAccountHolderNameChange: function(e) {
                                return Fe({
                                    info: Ae(pe({}, we.info), {
                                        name: e
                                    }),
                                    isValid: we.isValid
                                })
                            },
                            onIdealBankChange: function(e) {
                                return Je(e)
                            },
                            idealBankValue: Qe,
                            billingAddressInfo: we.info
                        });
                        le = (0, t.jsx)(z.Z, {
                            onBack: function() {
                                return v(W.h8.PAYMENT_TYPE)
                            },
                            primaryCTA: z.Z.CTAType.CONTINUE,
                            primaryText: I.Z.Messages.NEXT,
                            primaryDisabled: void 0 === Qe || "" === Qe || "" === we.info.name,
                            onPrimary: function() {
                                return v(W.h8.ADDRESS)
                            }
                        });
                        break;
                    case W.h8.PRZELEWY24_INFORMATION:
                        oe = (0, t.jsx)(H, {
                            type: P.He.PRZELEWY24,
                            onNameChange: function(e) {
                                return Fe({
                                    info: Ae(pe({}, we.info), {
                                        name: e
                                    }),
                                    isValid: we.isValid
                                })
                            },
                            onEmailChange: function(e) {
                                return Fe({
                                    info: Ae(pe({}, we.info), {
                                        email: e
                                    }),
                                    isValid: we.isValid
                                })
                            },
                            onP24BankChange: function(e) {
                                en(e)
                            },
                            p24BankValue: $e,
                            billingAddressInfo: we.info
                        });
                        le = (0, t.jsx)(z.Z, {
                            onBack: function() {
                                return v(W.h8.PAYMENT_TYPE)
                            },
                            primaryCTA: z.Z.CTAType.CONTINUE,
                            primaryText: I.Z.Messages.NEXT,
                            primaryDisabled: void 0 === we.info.name || "" === we.info.name || void 0 === we.info.email || "" === we.info.email || void 0 === $e || "" === $e,
                            onPrimary: function() {
                                return v(W.h8.ADDRESS)
                            }
                        });
                        break;
                    case W.h8.PAYPAL_INFORMATION:
                        var an = 0 !== We.length && null != Ge;
                        oe = (0, t.jsx)(Ye, {});
                        le = (0, t.jsx)(z.Z, {
                            onBack: function() {
                                return v(W.h8.PAYMENT_TYPE)
                            },
                            primaryCTA: z.Z.CTAType.CONTINUE,
                            primaryText: an ? I.Z.Messages.NEXT : I.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL,
                            onPrimary: function() {
                                return an ? v(W.h8.ADDRESS) : (0, d.i0)()
                            }
                        });
                        break;
                    case W.h8.VENMO_INFORMATION:
                        var sn = 0 !== ze.length && null != Ge;
                        oe = (0, t.jsx)(je, {});
                        le = (0, t.jsx)(z.Z, {
                            onBack: function() {
                                return v(W.h8.PAYMENT_TYPE)
                            },
                            primaryCTA: z.Z.CTAType.CONTINUE,
                            primaryText: sn ? I.Z.Messages.NEXT : I.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO,
                            onPrimary: function() {
                                return sn ? v(W.h8.ADDRESS) : (0, d.og)()
                            }
                        });
                        break;
                    case W.h8.PAYMENT_REQUEST_INFORMATION:
                        oe = (0, t.jsx)(xe, {});
                        le = (0, t.jsx)(z.Z, {
                            onBack: function() {
                                return v(W.h8.PAYMENT_TYPE)
                            }
                        });
                        break;
                    case W.h8.ADDRESS:
                        var on, ln, un = function() {
                            var e = de((function() {
                                var e, n, r, t, a, s, o, l, u, c, d, f;
                                return Ne(this, (function(p) {
                                    switch (p.label) {
                                        case 0:
                                            He(!0);
                                            switch (e = ne.methodType) {
                                                case P.He.CARD:
                                                    return [3, 1];
                                                case P.He.VENMO:
                                                case P.He.PAYPAL:
                                                    return [3, 5];
                                                case P.He.SOFORT:
                                                    return [3, 9];
                                                case P.He.EPS:
                                                    return [3, 13];
                                                case P.He.IDEAL:
                                                    return [3, 17];
                                                case P.He.PRZELEWY24:
                                                    return [3, 21];
                                                case P.He.PAYSAFE_CARD:
                                                case P.He.GRABPAY_MY:
                                                    return [3, 25];
                                                case P.He.GCASH:
                                                case P.He.MOMO_WALLET:
                                                case P.He.KAKAOPAY:
                                                case P.He.GOPAY_WALLET:
                                                    return [3, 29];
                                                case P.He.GIROPAY:
                                                case P.He.BANCONTACT:
                                                    return [3, 33]
                                            }
                                            return [3, 37];
                                        case 1:
                                            p.trys.push([1, 3, , 4]);
                                            return [4, (0, E.f0)(te, ve.token, we.info, y)];
                                        case 2:
                                            n = p.sent();
                                            C(n);
                                            return [3, 4];
                                        case 3:
                                            p.sent();
                                            return [3, 4];
                                        case 4:
                                        case 8:
                                        case 12:
                                        case 16:
                                        case 20:
                                        case 24:
                                        case 28:
                                        case 32:
                                        case 36:
                                            return [3, 38];
                                        case 5:
                                            p.trys.push([5, 7, , 8]);
                                            i()(null != Ge, "Missing braintreeNonce");
                                            return [4, (0, E.lP)(Ge, we.info, y)];
                                        case 6:
                                            r = p.sent();
                                            C(r);
                                            return [3, 8];
                                        case 7:
                                            p.sent();
                                            return [3, 8];
                                        case 9:
                                            p.trys.push([9, 11, , 12]);
                                            return [4, (0, E.av)(te, we.info, y)];
                                        case 10:
                                            t = p.sent();
                                            C(t);
                                            return [3, 12];
                                        case 11:
                                            p.sent();
                                            return [3, 12];
                                        case 13:
                                            p.trys.push([13, 15, , 16]);
                                            return [4, (0, E.YQ)(te, Xe, we.info, y)];
                                        case 14:
                                            a = p.sent();
                                            C(a);
                                            return [3, 16];
                                        case 15:
                                            s = p.sent();
                                            be.warn(s);
                                            return [3, 16];
                                        case 17:
                                            p.trys.push([17, 19, , 20]);
                                            return [4, (0, E.aN)(te, Qe, we.info, y)];
                                        case 18:
                                            o = p.sent();
                                            C(o);
                                            return [3, 20];
                                        case 19:
                                            l = p.sent();
                                            be.warn(l);
                                            return [3, 20];
                                        case 21:
                                            p.trys.push([21, 23, , 24]);
                                            if (void 0 === $e) throw (0, E.SQ)("Bank required for Przelewy24");
                                            return [4, (0, E.pF)(te, {
                                                p24Bank: $e
                                            }, we.info, y)];
                                        case 22:
                                            u = p.sent();
                                            C(u);
                                            return [3, 24];
                                        case 23:
                                            p.sent();
                                            return [3, 24];
                                        case 25:
                                            p.trys.push([25, 27, , 28]);
                                            return [4, (0, E.sF)(we.info, e, y)];
                                        case 26:
                                            c = p.sent();
                                            C(c);
                                            return [3, 28];
                                        case 27:
                                            p.sent();
                                            return [3, 28];
                                        case 29:
                                            p.trys.push([29, 31, , 32]);
                                            return [4, (0, E.Dk)(we.info, e, y)];
                                        case 30:
                                            d = p.sent().redirectConfirmation;
                                            Ve(d);
                                            return [3, 32];
                                        case 31:
                                            p.sent();
                                            return [3, 32];
                                        case 33:
                                            p.trys.push([33, 35, , 36]);
                                            return [4, (0, E.GV)(te, we.info, e, y)];
                                        case 34:
                                            f = p.sent();
                                            C(f);
                                            return [3, 36];
                                        case 35:
                                            p.sent();
                                            return [3, 36];
                                        case 37:
                                            throw new Error("unknown step not handled");
                                        case 38:
                                            Ue || He(!1);
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        switch (ne.methodType) {
                            case P.He.CARD:
                                ln = W.h8.CREDIT_CARD_INFORMATION;
                                on = P.He.CARD;
                                break;
                            case P.He.PAYPAL:
                                ln = W.h8.PAYPAL_INFORMATION;
                                on = P.He.PAYPAL;
                                break;
                            case P.He.VENMO:
                                ln = W.h8.VENMO_INFORMATION;
                                on = P.He.VENMO;
                                break;
                            case P.He.GIROPAY:
                                ln = W.h8.PAYMENT_TYPE;
                                on = P.He.GIROPAY;
                                break;
                            case P.He.SOFORT:
                                ln = W.h8.SOFORT_INFORMATION;
                                on = P.He.SOFORT;
                                break;
                            case P.He.PAYSAFE_CARD:
                            case P.He.GCASH:
                            case P.He.GRABPAY_MY:
                            case P.He.MOMO_WALLET:
                            case P.He.KAKAOPAY:
                            case P.He.GOPAY_WALLET:
                            case P.He.BANCONTACT:
                                ln = W.h8.PAYMENT_TYPE;
                                on = ne.methodType;
                                break;
                            case P.He.EPS:
                                ln = W.h8.EPS_INFORMATION;
                                on = P.He.EPS;
                                break;
                            case P.He.IDEAL:
                                ln = W.h8.IDEAL_INFORMATION;
                                on = P.He.IDEAL;
                                break;
                            case P.He.PRZELEWY24:
                                ln = W.h8.PRZELEWY24_INFORMATION;
                                on = P.He.PRZELEWY24;
                                break;
                            default:
                                ln = W.h8.PAYMENT_TYPE;
                                on = P.He.CARD
                        }
                        oe = (0, t.jsx)(Ze, {
                            billingAddressInfo: we.info,
                            onBillingAddressChange: function(e, n) {
                                Fe({
                                    info: pe({}, we.info, e),
                                    isValid: n
                                })
                            },
                            paymentSourceType: on
                        });
                        le = (0, t.jsx)(z.Z, {
                            onBack: function() {
                                return v(ln)
                            },
                            primaryCTA: z.Z.CTAType.CONTINUE,
                            primaryText: I.Z.Messages.NEXT,
                            primarySubmitting: Be,
                            primaryDisabled: !we.isValid || Ke,
                            onPrimary: un
                        });
                        break;
                    case W.h8.AWAITING_AUTHENTICATION:
                        oe = (0, t.jsx)(Le, {});
                        break;
                    default:
                        throw new Error("Unexpected step: ".concat(U))
                }
                var cn = (0, t.jsx)(u.Sequencer, {
                        className: ue().sequencer,
                        staticClassName: ue().sequencerStatic,
                        animatedNodeClassName: ue().sequencerAnimatedNode,
                        fillParent: !0,
                        step: U,
                        steps: ne.steps,
                        sideMargin: 20,
                        children: oe
                    }),
                    En = U === W.h8.PAYMENT_TYPE && 0 === o.length ? null : le;
                return R ? (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(q.Z, {
                        className: ie().paymentModalError
                    }), g && (0, t.jsx)(G.Z, {
                        className: ie().paymentModalBreadcrumbs,
                        isEligibleForTrial: g
                    }), (0, t.jsx)(K.C3, {
                        children: cn
                    }), (0, t.jsx)(K.O3, {
                        children: En
                    })]
                }) : (0, t.jsx)(se.Z, {
                    steps: null != T ? T : ne.steps,
                    currentStep: null != N ? N : U,
                    paymentError: n.paymentError,
                    header: b,
                    hideBreadcrumbs: _,
                    body: cn,
                    footer: En
                })
            }

            function Fe(e) {
                var n = (0, l.cj)([ee.Z], (function() {
                        return {
                            defaultPaymentSourceId: void 0 !== e ? e : ee.Z.defaultPaymentSourceId,
                            paymentSources: ee.Z.paymentSources,
                            hasFetchedPaymentSources: ee.Z.hasFetchedPaymentSources
                        }
                    })),
                    r = n.defaultPaymentSourceId,
                    t = n.paymentSources,
                    s = n.hasFetchedPaymentSources;
                a.useEffect((function() {
                    (0, d.eI)();
                    s || (0, E.tZ)()
                }), []);
                var o = he(a.useState(r), 2),
                    i = o[0],
                    u = o[1];
                null != r && null == i && u(r);
                var p = he(a.useState((function() {
                        return {
                            info: ve,
                            isValid: !1
                        }
                    })), 2),
                    A = p[0],
                    h = p[1],
                    m = he(a.useState((function() {
                        return {
                            info: Ce,
                            isValid: !1
                        }
                    })), 2),
                    T = m[0],
                    N = m[1],
                    b = he(a.useState(""), 2),
                    y = b[0],
                    S = b[1],
                    _ = he(a.useState(""), 2),
                    P = _[0],
                    I = _[1],
                    O = he(a.useState(""), 2),
                    R = O[0],
                    M = O[1],
                    g = he(a.useState((function() {
                        return {
                            token: null
                        }
                    })), 2),
                    v = g[0],
                    C = g[1],
                    k = he((0, l.Wu)([J.Z], (function() {
                        return [J.Z.braintreeEmail, J.Z.braintreeNonce, J.Z.error, J.Z.venmoUsername]
                    })), 4),
                    D = k[0],
                    Y = k[1],
                    j = k[2],
                    x = k[3],
                    Z = he((0, l.Wu)([$.Z], (function() {
                        return [$.Z.error, $.Z.isAwaitingAuthentication]
                    })), 2),
                    L = Z[0],
                    B = Z[1];
                a.useEffect((function() {
                    var e = function(e) {
                        var n = e.billingAddress;
                        N({
                            info: n,
                            isValid: n.country.length > 0
                        })
                    };
                    c.Z.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e);
                    return function() {
                        c.Z.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e);
                        (0, f.fw)()
                    }
                }), []);
                var w = he(a.useState(!1), 2),
                    F = w[0],
                    H = w[1],
                    U = he(a.useState(!1), 2),
                    V = U[0],
                    W = U[1],
                    G = he(a.useState(null), 2),
                    z = G[0],
                    K = G[1],
                    X = a.useRef(null),
                    q = (0, l.e7)([$.Z], (function() {
                        return $.Z.isAwaitingAuthentication
                    })),
                    Q = he((0, l.Wu)([ne.Z], (function() {
                        return [ne.Z.purchaseTokenAuthState, ne.Z.purchaseTokenHash]
                    })), 2),
                    re = Q[0],
                    te = Q[1];
                a.useEffect((function() {
                    null != z && null != X.current && X.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }), [z]);
                return {
                    paymentSources: t,
                    paymentSourceId: i,
                    hasFetchedPaymentSources: s,
                    setPaymentSourceId: u,
                    creditCardState: A,
                    setCreditCardState: h,
                    tokenState: v,
                    setTokenState: C,
                    billingAddressState: T,
                    setBillingAddressState: N,
                    isSubmittingCurrentStep: F,
                    setIsSubmittingCurrentStep: H,
                    hasRedirectURL: V,
                    setHasRedirectURL: W,
                    braintreeEmail: D,
                    braintreeNonce: Y,
                    venmoUsername: x,
                    paymentError: null != L ? L : j,
                    paymentAuthenticationState: B ? ae.wr.PENDING : null != L ? ae.wr.ERROR : ae.wr.NONE,
                    purchaseError: z,
                    setPurchaseError: K,
                    purchaseErrorBlockRef: X,
                    isAuthenticating: q,
                    purchaseTokenAuthState: re,
                    purchaseTokenHash: te,
                    epsBankState: P,
                    setEpsBankState: I,
                    idealBankState: R,
                    setIdealBankState: M,
                    p24BankState: y,
                    setP24BankState: S
                }
            }
        },
        383861: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => _
            });
            var t = r(785893),
                a = r(667294),
                s = r(886664),
                o = r(294184),
                i = r.n(o),
                l = r(513328),
                u = r(882723),
                c = r(19120),
                E = r(347365),
                d = r(414094),
                f = r(782786),
                p = r(83471),
                A = (r(128059), r(149096), r(669426)),
                h = r(832520),
                m = r(264628),
                T = r(2590),
                N = r(473708),
                b = r(152221),
                y = r.n(b),
                S = new Set([p.h8.SKU_SELECT, p.h8.AWAITING_AUTHENTICATION, p.h8.AWAITING_PURCHASE_TOKEN_AUTH, p.h8.CONFIRM]);

            function _(e) {
                var n = e.steps,
                    r = e.currentStep,
                    o = e.body,
                    b = e.paymentError,
                    _ = e.header,
                    P = e.footer,
                    I = e.isGift,
                    O = void 0 !== I && I,
                    R = e.giftMessage,
                    M = void 0 === R ? N.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : R,
                    g = e.isSeasonalGift,
                    v = void 0 !== g && g,
                    C = e.hideBreadcrumbs,
                    k = void 0 !== C && C,
                    D = e.isLoading,
                    Y = void 0 !== D && D,
                    j = e.purchaseError,
                    x = e.purchaseErrorBlockRef,
                    Z = e.planError,
                    L = e.onScroll,
                    B = e.scrollerClassName,
                    w = e.hasCurrencies,
                    F = void 0 !== w && w,
                    H = null;
                null != b && null == (0, p.ly)(b) ? H = b : null != j ? H = j : null != Z && (H = Z);
                var U = null != H ? H.message : "";
                if (null != H && H instanceof E.HF) {
                    H.code === d.SM.CARD_DECLINED && F && (U += " ".concat(N.Z.Messages.BILLING_ERROR_TRY_ANOTHER));
                    H.code === d.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (U = N.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT);
                    H.code === T.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (U = N.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)
                }
                var V = (0, f.usePaymentContext)().stripe;
                Y = Y || null == V;
                var W = a.useRef(new l.V7);
                a.useEffect((function() {
                    var e = W.current;
                    null != V || e.isStarted() ? null != V && e.stop() : e.start(1e4, (function() {
                        var e = new Error("Stripe took too long to load");
                        (0, m.q2)(e)
                    }));
                    return function() {
                        e.stop()
                    }
                }), [V]);
                var G = n.includes(p.h8.PAYMENT_TYPE) ? p.h8.PAYMENT_TYPE : p.h8.ADD_PAYMENT_STEPS;
                return (0, t.jsxs)(s.Elements, {
                    options: T.OBo,
                    stripe: V,
                    children: [_, (0, t.jsxs)("div", {
                        className: i()("paymentModalContent", y().content),
                        children: [O && !v && r !== p.h8.CONFIRM ? (0, t.jsx)(c.Z, {
                            className: y().paymentNote,
                            iconSize: c.Z.Sizes.SMALL,
                            icon: h.Z,
                            color: null == M ? c.Z.Colors.PRIMARY : c.Z.Colors.SECONDARY,
                            children: M
                        }) : null, k ? null : (0, t.jsx)("div", {
                            className: y().breadcrumbsWrapper,
                            children: (0, t.jsx)(A.Z, {
                                activeId: p.Ck.has(r) ? G : r,
                                breadcrumbs: n.filter((function(e) {
                                    return !p.Ck.has(e) && !S.has(e)
                                })).map((function(e) {
                                    return {
                                        id: e,
                                        label: (0, p.DJ)(e)
                                    }
                                }))
                            })
                        }), (0, t.jsxs)("div", {
                            className: y().bodyWrapper,
                            children: [null == H ? null : (0, t.jsx)("div", {
                                className: y().errorBlockWrapper,
                                children: (0, t.jsx)(u.FormErrorBlock, {
                                    ref: x,
                                    children: U
                                })
                            }), Y ? (0, t.jsx)(u.Spinner, {
                                className: y().loadingBlock
                            }) : (0, t.jsx)(u.Sequencer, {
                                className: y().sequencer,
                                staticClassName: y().sequencerStatic,
                                animatedNodeClassName: y().sequencerAnimatedNode,
                                fillParent: !0,
                                step: r,
                                steps: n,
                                sideMargin: 20,
                                children: (0, t.jsx)(u.AdvancedScrollerThin, {
                                    onScroll: L,
                                    className: i()(y().scroller, B),
                                    children: o
                                })
                            })]
                        })]
                    }), P]
                })
            }
        }
    }
]);