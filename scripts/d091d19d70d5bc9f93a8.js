(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["9711"], {
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return i
                },
                popLayer: function() {
                    return a
                },
                popAllLayers: function() {
                    return o
                }
            });
            var r = n("913144");

            function i(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function a() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function o() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                a = n("414456"),
                o = n.n(a),
                s = n("77078"),
                l = n("782340"),
                u = n("347129");
            class d extends i.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: a,
                        error: d,
                        isLoading: c,
                        maxLength: _,
                        transitionState: E,
                        helpMessage: f,
                        retryPrompt: I,
                        retrySuccessMessage: A
                    } = this.props, {
                        code: S,
                        errorMessage: h,
                        retrySuccess: R
                    } = this.state, N = i.Children.count(a) > 0 ? (0, r.jsx)(s.Card, {
                        type: s.Card.Types.WARNING,
                        className: u.card,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: a
                        })
                    }) : null, p = null != I ? (0, r.jsxs)(s.Text, {
                        className: o(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(s.Clickable, {
                            className: o(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(s.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, T = R ? (0, r.jsx)(s.Card, {
                        type: s.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: A
                        })
                    }) : null;
                    return (0, r.jsx)(s.ModalRoot, {
                        transitionState: E,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(s.ModalContent, {
                                children: [null != f ? (0, r.jsx)(s.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: f
                                }) : null, N, T, (0, r.jsxs)(s.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, r.jsx)(s.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != _ ? _ : 10,
                                        value: S,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(s.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : h
                                    }) : null, p]
                                })]
                            }), (0, r.jsxs)(s.ModalFooter, {
                                children: [(0, r.jsx)(s.Button, {
                                    type: "submit",
                                    disabled: c || 0 === S.length,
                                    children: null != n ? n : l.default.Messages.CONFIRM
                                }), (0, r.jsx)(s.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
                                    children: l.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? l.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : l.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? l.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : l.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var c = d
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...l
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, i = n("872717"),
                a = n("49111"),
                o = n("782340");
            r = class extends i.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: a.Links.STATUS,
                        details: "".concat(t)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: a.Links.STATUS
                    }))
                }
            }
        },
        79489: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("888400"),
                i = n("333805"),
                a = n("782340");
            class o extends i.default {
                _getMessageFromRateLimit(e) {
                    let t = e.body.retry_after,
                        n = (0, r.diffAsUnits)(0, 1e3 * t);
                    return (0, r.unitsAsStrings)(n, {
                        days: a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
                        hours: a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
                        minutes: a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
                    })
                }
                constructor(e, t) {
                    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
                }
            }
            var s = o
        },
        736978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ErrorCodes: function() {
                    return r
                },
                parseV8BillingAddressSkemaErrorToBillingError: function() {
                    return p
                },
                default: function() {
                    return g
                }
            }), n("222007");
            var r, i, a, o, s, l, u, d, c = n("486196"),
                _ = n("614247"),
                E = n("821879"),
                f = n("333805"),
                I = n("782340");
            (s = r || (r = {}))[s.UNKNOWN = 0] = "UNKNOWN", s[s.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", s[s.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", s[s.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", s[s.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", s[s.INVALID_PLAN = 100005] = "INVALID_PLAN", s[s.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", s[s.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", s[s.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", s[s.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", s[s.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", s[s.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", s[s.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", s[s.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", s[s.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", s[s.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", s[s.CARD_DECLINED = 100054] = "CARD_DECLINED", s[s.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", s[s.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", s[s.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", s[s.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", s[s.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", s[s.BILLING_TRIAL_REDEMPTION_DISABLED = 100078] = "BILLING_TRIAL_REDEMPTION_DISABLED", s[s.BILLING_PAUSE_DISABLED = 100079] = "BILLING_PAUSE_DISABLED", s[s.BILLING_PAUSE_PENDING_ALREADY_SET = 100080] = "BILLING_PAUSE_PENDING_ALREADY_SET", s[s.BILLING_PAUSE_NOT_ELIGIBLE = 100081] = "BILLING_PAUSE_NOT_ELIGIBLE", s[s.BILLING_PAUSE_INVALID_INTERVAL = 100082] = "BILLING_PAUSE_INVALID_INTERVAL", s[s.BILLING_ALREADY_PAUSED = 100083] = "BILLING_ALREADY_PAUSED", (l = i || (i = {})).CARD_NUMBER = "cardNumber", l.CARD_CVC = "cvc", l.CARD_EXPIRATION_DATE = "expirationDate", l.CARD_NAME = "name", l.ADDRESS_NAME = "name", l.ADDRESS_LINE_1 = "line1", l.ADDRESS_LINE_2 = "line2", l.ADDRESS_CITY = "city", l.ADDRESS_STATE = "state", l.ADDRESS_POSTAL_CODE = "postalCode", l.ADDRESS_COUNTRY = "country", (u = a || (a = {})).ADDRESS_LINE_1 = "address_line1", u.ADDRESS_LINE_2 = "address_line2", u.ADDRESS_CITY = "address_city", u.ADDRESS_STATE = "address_state", u.ADDRESS_ZIP = "address_zip", u.ADDRESS_COUNTRY = "address_country", u.CARD_NUMBER = "number", u.CARD_EXPIRATION_DATE = "exp", u.CARD_EXPIRATION_MONTH = "exp_month", u.CARD_EXPIRATION_YEAR = "exp_year";
            let A = Object.freeze({
                    address_line1: "line1",
                    address_line2: "line2",
                    address_city: "city",
                    address_state: "state",
                    address_zip: "postalCode",
                    address_country: "country",
                    number: "cardNumber",
                    exp: "expirationDate",
                    exp_month: "expirationDate",
                    exp_year: "expirationDate"
                }),
                S = Object.freeze({
                    line_1: "line1",
                    line_2: "line2",
                    postal_code: "postalCode"
                });
            (d = o || (o = {})).CARD = "card", d.ADDRESS = "address";
            let h = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
                R = new Set(["cardNumber", "cvc", "expirationDate", "name", "postalCode", "country", "line1", "city", "state"]),
                N = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);

            function p(e) {
                var t, n, r, i, a;
                if ("string" != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === c.INVALID_FORM_BODY_ERROR_CODE) {
                    if (!Array.isArray(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.errors) && (null == e ? void 0 : null === (i = e.body) || void 0 === i ? void 0 : null === (r = i.errors) || void 0 === r ? void 0 : r.billing_address) != null) {
                        for (let t in e.body.errors.billing_address) {
                            let n = e.body.errors.billing_address[t];
                            delete e.body.errors.billing_address[t], e.body.errors[t] = n
                        }
                        delete e.body.errors.billing_address
                    }(null === (a = e.body) || void 0 === a ? void 0 : a.errors) != null && (e.body = (0, _.default)(e.body.errors))
                }
                return new T(e)
            }
            class T extends f.default {
                _isInFieldSet(e) {
                    for (let t in this.fields)
                        if (e.has(t)) return !0
                }
                hasCardError() {
                    return 2 === (0, E.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(R) : this._isInFieldSet(h)
                }
                hasAddressError() {
                    return this._isInFieldSet(N)
                }
                constructor(e, t) {
                    for (let n in super(e, t), this.paymentId = null, 100027 === this.code ? this.message = I.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : 50048 === this.code ? this.message = I.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : 100002 === this.code ? this.message = I.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : 100042 === this.code ? this.message = I.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 100078 === this.code ? this.message = I.default.Messages.BILLING_TRIAL_REDEMPTION_DISABLED : 429 === this.status ? this.message = I.default.Messages.BILLING_ERROR_RATE_LIMIT : 0 === this.code ? this.message = I.default.Messages.BILLING_ERROR_GENERIC : 400 === this.status && null != this.fields.captcha_key && (this.message = I.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields) {
                        let e = A[n] || S[n];
                        if (null != e) {
                            let t = this.fields[n];
                            delete this.fields[n], this.fields[e] = t
                        }
                    }
                    null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id)
                }
            }
            T.ErrorCodes = r, T.Fields = i, T.Sections = o, T.CARD_ERRORS = h, T.ADDRESS_ERRORS = N;
            var g = T
        },
        852766: function(e, t, n) {
            "use strict";
            n.r(t), n("736978")
        },
        927367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadErrorCodes: function() {
                    return i
                },
                default: function() {
                    return o
                }
            });
            var r, i, a = n("782340");
            (r = i || (i = {}))[r.GENERAL = 0] = "GENERAL", r[r.NO_FILE = 1] = "NO_FILE", r[r.PROGRESS = 2] = "PROGRESS", r[r.UPLOAD = 3] = "UPLOAD", r[r.READ = 4] = "READ";
            var o = class e {
                get displayMessage() {
                    switch (this.code) {
                        case 1:
                            return a.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
                        case 2:
                            return a.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
                        case 3:
                            return a.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
                        case 4:
                            return a.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
                        default:
                            return a.default.Messages.UPLOAD_DEBUG_LOG_FAILURE
                    }
                }
                constructor(e) {
                    this.code = e
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, i = n("872717"),
                a = n("49111"),
                o = n("782340");
            r = class extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: a.Links.STATUS,
                        details: "".concat(t)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: a.Links.STATUS
                    }))
                }
            }
        },
        448993: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                V6OrEarlierAPIError: function() {
                    return r.default
                },
                APIError: function() {
                    return i.default
                },
                BillingError: function() {
                    return a.default
                },
                AppliedGuildBoostError: function() {
                    return o.default
                },
                UploadVoiceDebugLogsError: function() {
                    return s.default
                },
                UploadErrorCodes: function() {
                    return s.UploadErrorCodes
                }
            });
            var r = n("333805"),
                i = n("599417"),
                a = n("736978");
            n("852766"), n("846071");
            var o = n("79489"),
                s = n("927367")
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("70102"), n("222007"), n("704744");
            var r, i = n("913144");
            r = class {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("773336");
            async function i(e, t) {
                let {
                    default: i
                } = await n.el("572544").then(n.bind(n, "572544")), a = i(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != a) a(null);
                else if (r.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var r, i, a, o;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (a = r || (r = {}))[a.GAME = 1] = "GAME", a[a.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", a[a.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (o = i || (i = {}))[o.BOT = 0] = "BOT", o[o.SERVER = 1] = "SERVER", o[o.SYSTEM_DM = 2] = "SYSTEM_DM", o[o.OFFICIAL = 3] = "OFFICIAL", o[o.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", o[o.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", o[o.AI = 6] = "AI", o[o.REMIX = 7] = "REMIX"
        },
        616265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = {
                openCreateGuildModal: e => {
                    n.el("297267").then(n.bind(n, "297267")).then(t => {
                        let {
                            openCreateGuildModal: n
                        } = t;
                        return n(e)
                    })
                },
                updateCreateGuildModal: e => {
                    n.el("297267").then(n.bind(n, "297267")).then(t => {
                        let {
                            updateCreateGuildModal: n
                        } = t;
                        return n(e)
                    })
                }
            }
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return c
                },
                replaceRoleIconSourceSize: function() {
                    return _
                },
                isRoleIconAssetUrl: function() {
                    return f
                },
                canGuildUseRoleIcons: function() {
                    return I
                }
            }), n("781738");
            var r = n("867805"),
                i = n("407063"),
                a = n("315102"),
                o = n("773336"),
                s = n("49111");
            let l = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, o.isAndroid)(),
                c = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? r.default.getByName(r.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: E(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                _ = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)()))),
                E = (e, t) => {
                    let {
                        id: n,
                        icon: r
                    } = e;
                    if (null == r) return;
                    if (r.startsWith("data:")) return r;
                    let o = a.SUPPORTS_WEBP ? "webp" : "png",
                        c = "",
                        _ = "quality=lossless";
                    return (null != t && (c = "size=" + (0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)()), _ = d ? "" : "&" + _), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(l, "/").concat(n, "/").concat(r, ".").concat(o, "?").concat(c).concat(_) : "".concat(u).concat(s.Endpoints.ROLE_ICON(n, r), "?").concat(c)
                },
                f = e => e.startsWith(l) || e.startsWith("".concat(u, "/roles")) && e.includes("/icons/"),
                I = (e, t) => {
                    var n;
                    let r = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return r || e.features.has(s.GuildFeatures.ROLE_ICONS)
                }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r = n("872717"),
                i = n("913144"),
                a = n("479756"),
                o = n("38654"),
                s = n("9294"),
                l = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let _ = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    a = d.default.getCurrentUser(),
                    o = !l.default.isMember(e, null == a ? void 0 : a.id);
                try {
                    let t = await r.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: o,
                            invite_code: null != n ? (0, s.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: a
                    } = t;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: a.version,
                            description: a.description,
                            formFields: a.form_fields,
                            guild: a.guild
                        }
                    }), a
                } catch (t) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await r.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, f = async (e, t) => {
                let n = await r.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, I = async (e, t) => {
                await r.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, A = async (e, t) => {
                if (o.default.isFullServerPreview(e)) {
                    (0, a.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await r.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: a
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: a
                    }), a
                } catch (e) {
                    throw e
                }
            };
            var S = {
                fetchVerificationForm: _,
                updateVerificationForm: E,
                updateVerificationFormDescription: f,
                enableVerificationForm: I,
                submitVerificationForm: A
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return o
                },
                MAX_FORM_ELEMENTS: function() {
                    return s
                },
                MAX_NUM_RULES: function() {
                    return l
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return _
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return E
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return f
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return I
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return A
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return S
                }
            }), n("222007");
            var r, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let a = new Set([i.VerificationFormFieldTypes.TERMS]),
                o = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                s = 5,
                l = 16,
                u = 300,
                d = 300,
                c = 8,
                _ = 150,
                E = 150,
                f = 1e3,
                I = 300,
                A = "Membership Gating",
                S = "in-app-member-verification";
            (r || (r = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return i
                }
            }), r = n("453265").default;
            let i = r.openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return s
                },
                setHasUnsubmittedChanges: function() {
                    return l
                },
                setShowWarning: function() {
                    return u
                }
            });
            var r = n("308503"),
                i = n("659500"),
                a = n("49111");
            let o = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                s = (0, r.default)(e => o),
                l = e => {
                    s.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    s.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(a.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                a = n("599110"),
                o = n("50926"),
                s = n("347977"),
                l = n("394294"),
                u = n("49111");
            let d = () => {
                    a.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: l.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    a.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: l.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var _ = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let a = async t => {
                        await o.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: a,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, s.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, s.setShowWarning)(!0) : (0, i.closeModal)(l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, i.closeModal)(l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return h
                },
                updateImpersonating: function() {
                    return R
                },
                stopImpersonating: function() {
                    return N
                },
                updateImpersonatedChannels: function() {
                    return T
                },
                updateImpersonatedRoles: function() {
                    return g
                },
                updateImpersonatedData: function() {
                    return O
                }
            }), n("222007");
            var r = n("913144"),
                i = n("716241"),
                a = n("393414"),
                o = n("42203"),
                s = n("923959"),
                l = n("26989"),
                u = n("305961"),
                d = n("957255"),
                c = n("18494"),
                _ = n("282109"),
                E = n("599110"),
                f = n("38654"),
                I = n("507950"),
                A = n("49111"),
                S = n("724210");

            function h(e, t) {
                E.default.track(A.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), p(e)
            }

            function R(e, t) {
                let n = f.default.getData(e);
                null != n && n.type === t.type && (E.default.track(A.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), p(e))
            }

            function N(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function p(e) {
                let t = c.default.getChannelId(e),
                    n = o.default.getChannel(t),
                    r = null != t && (0, S.isStaticChannelRoute)(t);
                if (!r && !d.default.can(A.Permissions.VIEW_CHANNEL, n)) {
                    let t = s.default.getDefaultChannel(e);
                    null != t && (0, a.transitionTo)(A.Routes.CHANNEL(e, t.id))
                }
            }

            function T(e, t, n) {
                let r = new Set(_.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), R(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function g(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                        r = Array.from(t);
                    s.default.addConditionalChangeListener(() => {
                        let t = l.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (r.some(e => !t.roles.includes(e))) return !0;
                        let i = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                            a = i.filter(e => !n.includes(e));
                        return a.length > 0 && T(e, a, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), R(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function O(e, t) {
                R(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return o
                },
                generateInviteKeyFromExtraData: function() {
                    return s
                },
                parseExtraDataFromInviteKey: function() {
                    return l
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            }), n("222007");
            var r = n("522632"),
                i = n("833858");
            let a = "event";

            function o(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[a])
                    } catch (e) {
                        return
                    }
                }(t);
                return s({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function s(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(a, "=").concat(n)
            }

            function l(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let o = r.parse(n),
                    s = (0, i.getFirstQueryStringValue)(o[a]);
                return {
                    baseCode: t,
                    guildScheduledEventId: s
                }
            }

            function u(e) {
                let [t] = e.split("?");
                return t
            }
        },
        153498: function(e, t, n) {
            "use strict";

            function r(e) {
                let {} = e;
                return !1
            }

            function i(e, t) {
                return !1
            }

            function a(e) {
                return !1
            }

            function o() {
                return !1
            }

            function s() {
                return !1
            }

            function l(e) {
                let {} = e;
                return !1
            }

            function u(e, t) {
                return !1
            }

            function d() {
                return !1
            }

            function c(e) {}

            function _(e) {}

            function E(e) {}

            function f(e) {
                return !1
            }
            n.r(t), n.d(t, {
                navigateToChannel: function() {
                    return r
                },
                navigateToMemberVerification: function() {
                    return i
                },
                navigateToRootTab: function() {
                    return a
                },
                resetToAuthRoute: function() {
                    return o
                },
                resetToPanelsUI: function() {
                    return s
                },
                pushModal: function() {
                    return l
                },
                popModal: function() {
                    return u
                },
                popAllModals: function() {
                    return d
                },
                coerceChannelRoute: function() {
                    return c
                },
                coerceGuildsRoute: function() {
                    return _
                },
                coerceModalRoute: function() {
                    return E
                },
                useIsModalOpen: function() {
                    return f
                }
            })
        },
        467475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("65597"),
                i = n("42203"),
                a = n("724210");

            function o(e) {
                let t = (0, r.default)([i.default], () => {
                    let t = i.default.getChannel(e);
                    return (null == t ? void 0 : t.parent_id) != null && t.isForumPost() ? i.default.getChannel(null == t ? void 0 : t.parent_id) : null
                });
                return (null == t ? void 0 : t.hasFlag(a.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
            }
        },
        651693: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isImageFile: function() {
                    return o
                },
                isAnimatedImageUrl: function() {
                    return l
                },
                isVideoUrl: function() {
                    return d
                },
                isVideoFile: function() {
                    return c
                }
            }), n("222007");
            var r = n("773336");
            let i = (e, t) => {
                    if (null == e) return !1;
                    let [n, r] = e.split(/\?/, 1);
                    return t.test(n)
                },
                a = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
                o = e => null != e && a.test(e),
                s = /\.(webp|gif)$/i,
                l = e => i(e, s),
                u = (0, r.isIOS)() ? /\.(mp4|mov)$/i : ((0, r.isAndroid)(), /\.(mp4|webm|mov)$/i),
                d = e => i(e, u),
                c = e => null != e && u.test(e)
        },
        155084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007"), n("424973");
            var r = n("615361"),
                i = n("872717"),
                a = n("773336"),
                o = n("827032"),
                s = n("49111");
            let l = new Set(["darwin", "linux", "win32", "ios", "android"]);
            var u = new class e {
                increment(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            name: n,
                            tags: i
                        } = e,
                        s = {
                            name: n,
                            tags: (0, o.getGlobalTagsArray)()
                        };
                    null != i && i.forEach(e => {
                        s.tags.push(e)
                    });
                    let u = function() {
                        if ((0, a.isWeb)()) return "web";
                        {
                            let e = (0, a.getPlatformName)();
                            return l.has(e) ? e : null
                        }
                    }();
                    null != u && s.tags.push("platform:".concat(u));
                    let d = function() {
                        let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
                        return r.ReleaseChannelsSets.ALL.has(e) ? e : null
                    }();
                    null != d && s.tags.push("release_channel:".concat(d)), this._metrics.push(s), (t || this._metrics.length >= 100) && this._flush()
                }
                _flush() {
                    if (this._metrics.length > 0) {
                        let e = [...this._metrics];
                        i.default.post({
                            url: s.Endpoints.METRICS,
                            body: {
                                metrics: e
                            },
                            retries: 1
                        }).catch(t => {
                            this._metrics.length + e.length < 100 && (this._metrics = [...this._metrics, ...e])
                        })
                    }
                    this._metrics = []
                }
                constructor() {
                    this._metrics = [], this._intervalId = setInterval(() => {
                        this._flush()
                    }, 12e4)
                }
            }
        },
        146574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNativeContextMenuChannelAnalytics: function() {
                    return a
                }
            });
            var r = n("18494"),
                i = n("724210");

            function a() {
                var e;
                let t = null !== (e = r.default.getCurrentlySelectedChannelId()) && void 0 !== e ? e : void 0;
                return null != t && (0, i.isStaticChannelRoute)(t) ? {
                    channel_static_route: t
                } : {
                    channel_id: t
                }
            }
        },
        399758: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("272030"),
                o = n("773336"),
                s = n("26051"),
                l = n("782340");

            function u(e) {
                let {
                    href: t,
                    textContent: n,
                    onSelect: u
                } = e, d = (0, s.default)(t, n);
                return o.isPlatformEmbedded && null != d ? (0, r.jsx)(i.Menu, {
                    navId: "image-context",
                    onClose: a.closeContextMenu,
                    "aria-label": l.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
                    onSelect: u,
                    children: (0, r.jsx)(i.MenuGroup, {
                        children: d
                    })
                }) : null
            }
        },
        26051: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("689226"),
                o = n("467475"),
                s = n("24373"),
                l = n("48703"),
                u = n("599110"),
                d = n("128259"),
                c = n("773336"),
                _ = n("50885"),
                E = n("146574"),
                f = n("49111"),
                I = n("782340");

            function A(e, t, n, A) {
                let S = (0, o.default)(null == n ? void 0 : n.getChannelId());
                if (!c.isPlatformEmbedded || null == e || "" === e || S || (null == A ? void 0 : A.shouldHideMediaOptions) === !0 || null != e && null != (0, s.isStickerAssetUrl)(e) || null != e && (0, a.isRoleIconAssetUrl)(e)) return null;
                let h = (0, l.getHostname)(e),
                    R = n => {
                        u.default.track(f.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
                            hostname: h,
                            ...(0, E.getNativeContextMenuChannelAnalytics)()
                        }), (0, d.handleClick)({
                            href: e,
                            trusted: (0, d.isLinkTrusted)(e, t),
                            shouldConfirm: !0
                        }, n)
                    };
                return [(0, r.jsx)(i.MenuItem, {
                    id: "copy-native-link",
                    label: I.default.Messages.COPY_LINK,
                    action: () => {
                        u.default.track(f.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
                            hostname: h,
                            ...(0, E.getNativeContextMenuChannelAnalytics)()
                        }), _.default.copy(e)
                    }
                }, "copy-native-link"), (0, r.jsx)(i.MenuItem, {
                    id: "open-native-link",
                    label: I.default.Messages.OPEN_LINK,
                    action: e => R(e)
                }, "open-native-link")]
            }
        },
        821879: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                reducedPaymentInfoExperiment: function() {
                    return a
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                id: "2023-06_reduced_payment_method_address_info",
                label: "Reduced Payment Method Address Info",
                kind: "user",
                defaultConfig: {
                    bucket: 0,
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Simplify address form",
                    config: {
                        bucket: 1,
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "Partial address in card form",
                    config: {
                        bucket: 2,
                        enabled: !0
                    }
                }]
            });

            function a() {
                let {
                    autoTrackExposure: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    autoTrackExposure: !0
                }, t = i.getCurrentConfig({
                    location: "2b69fe_1"
                }, {
                    autoTrackExposure: e
                });
                return t
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return o
                },
                getDevicePushProvider: function() {
                    return s
                }
            });
            var r, i, a = n("773336");
            let o = null;

            function s() {
                return (0, a.isAndroid)(), null
            }(r = i || (i = {})).REMINDER = "reminder", r.TOP_MESSAGE_PUSH = "top_messages_push", r.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        846325: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return a
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return o
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return s
                },
                SoundboardWheelSize: function() {
                    return l
                },
                DEFAULT_KEYBIND: function() {
                    return u
                },
                EMPTY_SOUND_LIST: function() {
                    return d
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return c
                },
                NUM_RECENTLY_HEARD_SOUNDS: function() {
                    return _
                },
                NUM_FREQUENTLY_USED_SOUNDS: function() {
                    return E
                }
            }), n("222007");
            let a = 32,
                o = 5,
                s = "DEFAULT";
            (i = r || (r = {}))[i.SUCCESS = 0] = "SUCCESS", i[i.INTERRUPTED = 1] = "INTERRUPTED";
            let l = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                u = "ctrl+`",
                d = [],
                c = "0",
                _ = 6,
                E = 6
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("222007"), n("424973"), n("834022");
            var r, i, a = n("917351"),
                o = n.n(a),
                s = n("446674"),
                l = n("913144"),
                u = n("845579"),
                d = n("374363"),
                c = n("697218"),
                _ = n("599110"),
                E = n("829536"),
                f = n("846325"),
                I = n("49111"),
                A = n("397336");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let S = new Map,
                h = new Map,
                R = new Set,
                N = 0,
                p = 0,
                T = new Set,
                g = new Map,
                O = !1;

            function D(e) {
                let {
                    sound: t
                } = e, n = S.get(t.guildId), r = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != r && -1 !== r ? (n[r] = t, S.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), S.set(t.guildId, [...n]))
            }
            let m = o.debounce(e => {
                _.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, E.amplitudeToPerceptual)(e))
                }), u.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function v(e) {
                var t, n;
                let r = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(r)) t.soundboardMuted ? R.add(e) : R.delete(e);
                for (let e of R.keys()) null == r[e] && R.delete(e)
            }
            class C extends s.default.Store {
                initialize() {
                    this.waitFor(d.default), v(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(S),
                        favoritedSoundIds: Array.from(T),
                        localSoundboardMutes: Array.from(R)
                    }
                }
                getSounds() {
                    return S
                }
                getSoundsForGuild(e) {
                    return S.get(e)
                }
                getSound(e, t) {
                    var n;
                    let r = null !== (n = S.get(e)) && void 0 !== n ? n : [];
                    return r.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(S.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return 1 === p
                }
                isFetchingDefaultSounds() {
                    return 1 === N
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return 0 === N
                }
                hasFetchedDefaultSounds() {
                    return 2 === N
                }
                isUserPlayingSounds(e) {
                    let t = g.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != h.get(e)
                }
                isFavoriteSound(e) {
                    return T.has(e)
                }
                getFavorites() {
                    return T
                }
                isLocalSoundboardMuted(e) {
                    return R.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return O
                }
                hasFetchedAllSounds() {
                    return 2 === p && 2 === N
                }
            }
            C.displayName = "SoundboardStore";
            var L = new C(l.default, {
                LOGOUT: function() {
                    S.clear(), h.clear(), g.clear(), O = !1, p = 0, N = 0
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    p = 1
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: D,
                GUILD_SOUNDBOARD_SOUND_UPDATE: D,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    S.delete(t);
                    let r = S.get(n),
                        i = null == r ? void 0 : r.findIndex(e => e.soundId === t);
                    null != r && null != i && !(i < 0) && (r.splice(i, 1), S.set(n, [...r]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, r;
                    let {
                        soundId: i,
                        userId: a
                    } = e, o = (null !== (n = h.get(i)) && void 0 !== n ? n : 0) + 1, s = (null !== (r = g.get(a)) && void 0 !== r ? r : 0) + 1;
                    h.set(i, o), g.set(a, s), a !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (O = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: r,
                        userId: i
                    } = e, a = (null !== (t = h.get(r)) && void 0 !== t ? t : 0) - 1, o = (null !== (n = g.get(i)) && void 0 !== n ? n : 0) - 1;
                    a <= 0 ? h.delete(r) : h.set(r, a), o <= 0 ? g.delete(i) : g.set(i, o)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    m(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    h.clear(), g.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: r
                    } = t;
                    if (n === A.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var i, a;
                        T = new Set(null !== (a = null == r ? void 0 : null === (i = r.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== a ? a : [])
                    } else n === A.UserSettingsTypes.PRELOADED_USER_SETTINGS && v(r)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    N = 1
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    S.set(f.DEFAULT_SOUND_GUILD_ID, t), N = 2
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        S.set(t, n)
                    }), p = 2
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    S.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    R.has(t) ? R.delete(t) : R.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    S = new Map(Object.entries(t.soundboardSounds)), T = new Set(t.favoritedSoundIds), R = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    S.set(t, n)
                }
            })
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("702976");
            var r, i = n("866227"),
                a = n.n(i),
                o = n("666038");
            r = class e extends o.default {
                static createFromServer(t) {
                    var n;
                    return new e({
                        ...t,
                        maxUses: t.max_uses,
                        maxAge: t.max_age,
                        createdAt: a(null !== (n = t.created_at) && void 0 !== n ? n : void 0),
                        targetType: t.target_type,
                        targetUser: t.target_user,
                        targetApplication: t.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = a(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = a(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("702976");
            var r = n("446674"),
                i = n("913144"),
                a = n("9294"),
                o = n("49111");
            let s = {},
                l = {},
                u = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, a.parseExtraDataFromInviteKey)(e),
                    i = s[e],
                    l = null != i ? {
                        state: o.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: o.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(l), s = {
                    ...s,
                    [e]: l
                }, (null === (n = l.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [l.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? o.InviteStates.BANNED : o.InviteStates.EXPIRED
                })
            }
            class _ extends r.default.Store {
                getInvite(e) {
                    return s[e]
                }
                getInviteError(e) {
                    return l[e]
                }
                getInvites() {
                    return s
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            _.displayName = "InviteStore";
            var E = new _(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, a.parseExtraDataFromInviteKey)(t);
                    s = {
                        ...s,
                        [t]: {
                            code: n.baseCode,
                            state: o.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, r;
                        t.state = o.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = o.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = o.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, r;
                        t.state = o.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = o.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = o.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return l[e.code] = e.error, d(e.code, e => {
                        e.state = o.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = o.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = o.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = o.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var r = n("627445"),
                i = n.n(r),
                a = n("446674"),
                o = n("913144"),
                s = n("816454");
            let l = new Map;

            function u(e) {
                let t = l.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class d extends a.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return l.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(o.default, {
                WINDOW_INIT: function(e) {
                    i(!l.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: r,
                        focused: a
                    } = e;
                    return l.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: r,
                        focused: a
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = u(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (l.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = u(e.windowId);
                    return t.focused !== e.focused && (l.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = u(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (l.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return l.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = c.isFocused() ? "focused" : "unfocused"
                })
            });
            var _ = c
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("276825"),
                o = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, o.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, a.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return u
                },
                zoomFit: function() {
                    return d
                },
                getRatio: function() {
                    return c
                },
                getCoverRatio: function() {
                    return _
                },
                makeCssUrlString: function() {
                    return E
                },
                getPalette: function() {
                    return I
                },
                getPaletteForAvatar: function() {
                    return A
                },
                readFileAsBase64: function() {
                    return h
                },
                dataUriFileSize: function() {
                    return R
                },
                dataUrlToFile: function() {
                    return N
                },
                isPNGAnimated: function() {
                    return p
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var r = n("627445"),
                i = n.n(r),
                a = n("917351"),
                o = n.n(a),
                s = n("48648"),
                l = n.n(s);

            function u(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i,
                    minWidth: a = 0,
                    minHeight: o = 0
                } = e;
                if (t !== r || n !== i) {
                    let e = t > r ? r / t : 1;
                    t = Math.max(Math.round(t * e), a), n = Math.max(Math.round(n * e), o);
                    let s = n > i ? i / n : 1;
                    t = Math.max(Math.round(t * s), a), n = Math.max(Math.round(n * s), o)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    r = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return u({
                    width: e,
                    height: t,
                    maxWidth: r,
                    maxHeight: n
                })
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = e, a = 1;
                t > r && (a = r / t), t = Math.round(t * a);
                let o = 1;
                return (n = Math.round(n * a)) > i && (o = i / n), Math.min(a * o, 1)
            }

            function _(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = e;
                return t === n ? 1 : Math.min(Math.max(r / t, i / n), 1)
            }

            function E(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let f = [
                [0, 0, 0]
            ];

            function I(e, t, n) {
                let r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return f;
                let a = r.width = 0 === e.width ? 128 : e.width,
                    o = r.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, a, o);
                let s = i.getImageData(0, 0, a, o).data,
                    u = function(e, t, n) {
                        let r = [];
                        for (let i = 0, a, o, s, l, u; i < t; i += n) o = e[(a = 4 * i) + 0], s = e[a + 1], l = e[a + 2], (void 0 === (u = e[a + 3]) || u >= 125) && !(o > 250 && s > 250 && l > 250) && r.push([o, s, l]);
                        return r
                    }(s, a * o, n),
                    d = l(u, t);
                return "boolean" == typeof d ? f : d.palette()
            }
            let A = e => "number" == typeof e ? null : S(e),
                S = o.memoize(e => new Promise((t, n) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.onerror = e => {
                        n(e), r.onerror = r.onload = null, r = null
                    }, r.onload = () => {
                        t(I(r, 5, 10)), r.onerror = r.onload = null, r = null
                    }, r.src = e
                }));

            function h(e) {
                return new Promise((t, n) => {
                    let r = new FileReader;
                    r.readAsDataURL(e), r.onload = () => {
                        i("string" == typeof r.result, "Result must be a string"), t(r.result)
                    }, r.onerror = e => n(e)
                })
            }

            function R(e) {
                let t = e.split(";base64,");
                return i(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function N(e, t, n) {
                let r = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            r = new Uint8Array(t.length);
                        for (var i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
                        return new Blob([r], {
                            type: n
                        })
                    }(e),
                    i = await r.arrayBuffer();
                return new File([i], t, {
                    type: n
                })
            }
            async function p(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let r = await e.text(),
                    i = r.indexOf("IDAT");
                return !!(i > 0) && -1 !== r.substring(0, i).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return a
                }
            });
            var r = n("917351"),
                i = n.n(r);
            let a = e => "function" == typeof e ? e() : e;
            i.curry((e, t, n) => a(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("70102");
            var a = n("697218"),
                o = n("615931");
            let s = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, s = e.updateModalProps, i = n("551042").closeModal
            }

            function l(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: a,
                    modalProps: o = {},
                    hooks: {
                        onEarlyClose: l
                    } = {}
                } = e;
                if (null == r) {
                    null == l || l();
                    return
                }
                let d = r(f, c, o);

                function c() {
                    null == l || l()
                }

                function _(e) {
                    i(d), n(e)
                }

                function E(e) {
                    i(d), a(e)
                }

                function f(e) {
                    return s(d, f, c, {
                        ...o,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: _,
                        reject: E,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    s(d, f, c, {
                        ...o,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    code: i,
                    mfaCodeHandler: a = l,
                    isModalOpen: o = !1,
                    ...s
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, l;
                    if (i = e, l = o, i.body && 60008 === i.body.code || l && 429 === i.status) return a({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...s
                    });
                    r(e)
                })
            }

            function d(e, t) {
                var n, r;
                let {
                    checkEnabled: i = null !== (r = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...s
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, o.resolveThunk)(i) ? l : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...s
                    })
                })
            }
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return r
                },
                amplitudeToPerceptual: function() {
                    return i
                }
            });

            function r(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let r = 20 * Math.log10(e / n);
                return n * (t = r > 0 ? r / 6 + 1 : (50 + r) / 50)
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function r(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("781738");
            var r = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("872717"),
                i = n("599110");

            function a(e, t, n) {
                let {
                    trackedActionData: r,
                    ...a
                } = t, o = {
                    url: a.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(a).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...o,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, a;
                        let s = r.properties;
                        "function" == typeof r.properties && (s = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message,
                            ...o,
                            ...s
                        }), n(e)
                    })
                })
            }
            var o = {
                get: function(e) {
                    return a(r.default.get, e, "get")
                },
                post: function(e) {
                    return a(r.default.post, e, "post")
                },
                put: function(e) {
                    return a(r.default.put, e, "put")
                },
                patch: function(e) {
                    return a(r.default.patch, e, "patch")
                },
                delete: function(e) {
                    return a(r.default.delete, e, "del")
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return s
                },
                updateModalProps: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                a = n("920636");
            let o = (e, t, n) => function(i) {
                return (0, r.jsx)(a.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function s(e, t, n) {
                return (0, i.openModal)(o(e, t, n), {
                    onCloseCallback: t
                })
            }

            function l(e, t, n, r) {
                return (0, i.updateModal)(e, o(t, n, r))
            }
        },
        432710: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                MetricEvents: function() {
                    return r
                }
            }), n("222007"), (i = r || (r = {})).APP_CRASHED = "app_crashed", i.SOCKET_CRASHED = "socket_crashed", i.MESSAGE_REQUEST_VIEW = "message_request_view", i.SPAM_MESSAGE_REQUEST_VIEW = "spam_message_request_view", i.SPAM_MESSAGE_REQUEST_ERROR_VIEW = "spam_message_request_error_view", i.FAMILY_CENTER_VIEW = "family_center_view", i.SAFETY_HUB_VIEW = "safety_hub_view", i.MESSAGE_REQUEST_COUNT_DRIFT = "message_request_count_drift", i.FORUM_CHANNEL_GRID_AUTO_ENABLED = "forum_channel_grid_auto_enabled", i.REMIX_FONT_LOADING_ERROR = "remix_font_loading_error", i.AFK_NOT_IDLE = "afk_not_idle", i.CAPTCHA_EVENT = "captcha_event", i.SAFETY_WARNING_VIEW = "safety_warning_view", i.SAFETY_WARNING_MODAL_VIEW = "safety_warning_modal_view", i.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT = "explicit_media_scan_client_timed_out", i.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING = "explicit_media_scan_client_timing", i.OTA_CHECK_ATTEMPT = "OtaCheckAttempt", i.OTA_ASSET_DOWNLOAD_ATTEMPT = "OtaAssetDownloadAttempt", i.OTA_UPDATE_CHECK = "ota_update_check", i.OTA_ASSET_DOWNLOAD = "ota_asset_download", i.DEBUG_OTA_200_TIMEOUT = "debug_ota_200_timeout"
        },
        615361: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                ReleaseChannelsSets: function() {
                    return a
                }
            }), n("222007"), (i = r || (r = {})).STABLE = "stable", i.BETA = "beta", i.ALPHA = "alpha", i.PTB = "ptb", i.CANARY = "canary", i.STAGING = "staging", i.DEVELOPMENT = "development";
            let a = {
                ALL: new Set(["alpha", "beta", "canary", "development", "ptb", "stable", "staging"])
            }
        }
    }
]);