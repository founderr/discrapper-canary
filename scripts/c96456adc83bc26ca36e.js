"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [47966], {
        737264: e => {
            e.exports.Q = function(e) {
                var t, r = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!r) return null;
                r.shift();
                var n = null,
                    o = [];
                if (r[2]) {
                    n = (t = r[2].split("-")).shift();
                    o = t
                }
                var i = [];
                r[5] && (i = r[5].split("-")).shift();
                var a = [];
                if (r[6]) {
                    (t = r[6].split("-")).shift();
                    for (var l, c = []; t.length;) {
                        var u = t.shift();
                        if (1 === u.length)
                            if (l) {
                                a.push({
                                    singleton: l,
                                    extension: c
                                });
                                l = u;
                                c = []
                            } else l = u;
                        else c.push(u)
                    }
                    a.push({
                        singleton: l,
                        extension: c
                    })
                }
                var s = [];
                if (r[7]) {
                    (s = r[7].split("-")).shift();
                    s.shift()
                }
                var _ = [];
                r[8] && (_ = r[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: n,
                            extlang: o
                        },
                        script: r[3] || null,
                        region: r[4] || null,
                        variant: i,
                        extension: a,
                        privateuse: s
                    },
                    privateuse: _,
                    grandfathered: {
                        irregular: r[0] || null,
                        regular: r[1] || null
                    }
                }
            }
        },
        735885: (e, t, r) => {
            r.d(t, {
                jN: () => o,
                xf: () => i,
                Ou: () => a
            });
            var n = r(744564);

            function o(e) {
                n.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function i() {
                n.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
                n.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        213276: (e, t, r) => {
            r.d(t, {
                Z: () => d
            });
            var n = r(785893),
                o = r(667294),
                i = r(468811),
                a = r.n(i),
                l = r(652591),
                c = r(295652),
                u = r(2590);

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function f(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
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
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
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
                    var r, n = _(e);
                    if (t) {
                        var o = _(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return f(this, r)
                }
            }
            var d = function(e) {
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
                }(r, e);
                var t = O(r);

                function r(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r);
                    var n;
                    (n = t.call(this, e))._loadId = null;
                    n._loadDate = n.props.root ? Date.now() : null;
                    n.getLocation = (0, c.oH)((function(e, t, r, n) {
                        var o = {};
                        null != e && (o.page = e);
                        null != t && (o.section = t);
                        null != r && (o.object = r);
                        null != n && (o.objectType = n);
                        return o
                    }));
                    n.mergeLocation = (0, c.oH)((function(e, t) {
                        return function(e) {
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
                        }({}, e, t)
                    }));
                    n.getContext = (0, c.oH)((function(e, t, r) {
                        return {
                            location: e,
                            loadDate: t,
                            loadId: r
                        }
                    }));
                    null != e.loadId ? n._loadId = e.loadId : e.root && (n._loadId = a().v4());
                    return n
                }
                var o = r.prototype;
                o.renderProvider = function(e) {
                    var t, r, o = this.props,
                        i = o.section,
                        a = o.page,
                        c = o.object,
                        u = o.objectType,
                        s = o.children,
                        _ = this.mergeLocation(e.location, this.getLocation(a, i, c, u)),
                        f = this.getContext(_, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (r = this._loadId) && void 0 !== r ? r : e.loadId);
                    return (0, n.jsx)(l.AnalyticsContext.Provider, {
                        value: f,
                        children: s
                    })
                };
                o.render = function() {
                    var e = this,
                        t = this.props.context;
                    return null != t ? this.renderProvider(t) : (0, n.jsx)(l.AnalyticsContext.Consumer, {
                        children: function(t) {
                            return e.renderProvider(t)
                        }
                    })
                };
                return r
            }(o.Component);
            d.Pages = u.ZY5;
            d.Sections = u.jXE;
            d.Objects = u.qAy;
            d.ObjectTypes = u.Qqv;
            d.defaultProps = {
                root: !1
            }
        },
        919244: (e, t, r) => {
            r.d(t, {
                Z: () => T
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                a = r.n(i),
                l = r(882723),
                c = r(473708),
                u = r(775823),
                s = r.n(u);

            function _(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function p(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
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
                    var r, n = f(e);
                    if (t) {
                        var o = f(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return p(this, r)
                }
            }
            var I = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && E(e, t)
                }(r, e);
                var t = d(r);

                function r() {
                    _(this, r);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    };
                    e.setRef = function(t) {
                        e._input = t
                    };
                    e.getLabelText = function() {
                        var t;
                        return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? c.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : c.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? c.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : c.Z.Messages.TWO_FA_AUTH_CODE
                    };
                    e.getPlaceholder = function() {
                        return e.props.forceNoPlaceholder ? null : null !== (t = e.props.placeholder) && void 0 !== t ? t : e.getSupportedCodeTypes();
                        var t
                    };
                    e.errorPresent = function() {
                        return null != e.props.error && "" !== e.props.error || null != e.state.errorMessage && "" !== e.state.errorMessage
                    };
                    e.handleRetry = function() {
                        var t = e.props.onRetry;
                        null == t || t().then((function() {
                            return e.setState({
                                retrySuccess: !0
                            })
                        }))
                    };
                    e.handleSubmit = function(t) {
                        t.preventDefault();
                        var r = e.props,
                            n = r.handleSubmit,
                            o = r.onError;
                        n(e.state.code).catch((function(t) {
                            if (null != t.body) {
                                null == o || o(t.body);
                                t.body.message && e.setState({
                                    errorMessage: t.body.message
                                })
                            }
                        }))
                    };
                    e.handleCancel = function() {
                        var t = e.props,
                            r = t.onClose,
                            n = t.handleEarlyClose;
                        r();
                        null == n || n()
                    };
                    e.handleCodeChange = function(t) {
                        e.setState({
                            code: t
                        })
                    };
                    return e
                }
                r.prototype.render = function() {
                    var e, t = this.props,
                        r = t.title,
                        i = t.actionText,
                        u = t.children,
                        _ = t.error,
                        f = t.isLoading,
                        p = t.maxLength,
                        E = t.transitionState,
                        O = t.helpMessage,
                        d = t.retryPrompt,
                        I = t.retrySuccessMessage,
                        T = this.state,
                        b = T.code,
                        m = T.errorMessage,
                        A = T.retrySuccess,
                        y = o.Children.count(u) > 0 ? (0, n.jsx)(l.Card, {
                            type: l.Card.Types.WARNING,
                            className: s().card,
                            children: (0, n.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: u
                            })
                        }) : null,
                        h = null != d ? (0, n.jsxs)(l.Text, {
                            className: a()(s().submitText, s().spacing),
                            variant: "text-sm/normal",
                            children: [(0, n.jsx)("br", {}), (0, n.jsx)(l.Clickable, {
                                className: a()(s().spacing, s().link),
                                onClick: this.handleRetry,
                                children: (0, n.jsx)(l.Anchor, {
                                    children: d
                                })
                            })]
                        }) : null,
                        g = A ? (0, n.jsx)(l.Card, {
                            type: l.Card.Types.SUCCESS,
                            className: s().card,
                            children: (0, n.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: I
                            })
                        }) : null;
                    return (0, n.jsx)(l.ModalRoot, {
                        transitionState: E,
                        children: (0, n.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, n.jsx)(l.ModalHeader, {
                                separator: !1,
                                children: (0, n.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: r
                                })
                            }), (0, n.jsxs)(l.ModalContent, {
                                children: [null != O ? (0, n.jsx)(l.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s().spacing,
                                    children: O
                                }) : null, y, g, (0, n.jsxs)(l.FormItem, {
                                    title: this.getLabelText(),
                                    className: s().spacing,
                                    children: [(0, n.jsx)(l.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != p ? p : 10,
                                        value: b,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, n.jsx)(l.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s().error,
                                        children: null != _ ? _ : m
                                    }) : null, h]
                                })]
                            }), (0, n.jsxs)(l.ModalFooter, {
                                children: [(0,
                                    n.jsx)(l.Button, {
                                    type: "submit",
                                    disabled: f || 0 === b.length,
                                    children: null != i ? i : c.Z.Messages.CONFIRM
                                }), (0, n.jsx)(l.Button, {
                                    onClick: this.handleCancel,
                                    disabled: f,
                                    look: l.Button.Looks.LINK,
                                    color: l.Button.Colors.PRIMARY,
                                    children: c.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return r
            }(o.PureComponent);
            I.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const T = I
        },
        343639: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                o = (r(667294), r(213276));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e) {
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
            }

            function l(e, t) {
                return function(r) {
                    return (0, n.jsx)(o.Z, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, n.jsx)(e, a({}, r))
                    })
                }
            }
        },
        567678: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                o = (r(667294), r(19585));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e) {
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
            }

            function l(e, t) {
                return function(r) {
                    var i = (0, o.Z)(t).AnalyticsLocationProvider;
                    return (0, n.jsx)(i, {
                        children: (0, n.jsx)(e, a({}, r))
                    })
                }
            }
        },
        973889: (e, t, r) => {
            r.d(t, {
                Z: () => _
            });
            var n = r(281110),
                o = r(2590),
                i = r(473708);

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function l(e, t) {
                return !t || "object" !== u(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }
            var u = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
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
                    var r, n = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return l(this, r)
                }
            }
            var _ = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && c(e, t)
                }(r, e);
                var t = s(r);

                function r(e, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r);
                    return t.call(this, e, n, i.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: o.yXt.STATUS
                    }))
                }
                return r
            }(n.ZP.V6OrEarlierAPIError)
        },
        153686: (e, t, r) => {
            r.d(t, {
                Z: () => o
            });
            var n;
            ! function(e) {
                e.POPOUT_WINDOW = "popout window";
                e.OVERLAY = "overlay";
                e.NOTICE = "notice";
                e.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip";
                e.BADGE = "badge";
                e.USER_SETTINGS = "user settings";
                e.USER_SETTINGS_MENU = "user settings menu";
                e.ACCOUNT = "account";
                e.TEXT_AND_IMAGES = "text and images";
                e.GUILD_SETTINGS = "guild settings";
                e.OVERVIEW = "overview";
                e.STICKERS = "stickers";
                e.VANITY_URL = "vanity url";
                e.PREMIUM_MARKETING = "premium marketing";
                e.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison";
                e.PREMIUM_PAYMENT_MODAL = "premium payment modal";
                e.PREMIUM_UPSELL_ALERT = "premium upsell alert";
                e.PREMIUM_UPSELL_MODAL = "premium upsell modal";
                e.PREMIUM_SETTINGS = "premium settings";
                e.PAYMENT_FLOW_TEST_PAGE = "payment flow test page";
                e.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet";
                e.CHANNEL_CALL = "channel call";
                e.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen";
                e.RTC_PANEL = "rtc panel";
                e.SOUNDBOARD_BUTTON = "soundboard button";
                e.SOUNDBOARD_POPOUT = "soundboard popout";
                e.SOUNDBOARD_WHEEL = "soundboard wheel";
                e.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet";
                e.GIFT_BUTTON = "gift button";
                e.EXPRESSION_SUGGESTIONS = "expression suggestions";
                e.EMOJI_PICKER = "emoji picker";
                e.STICKER_PICKER = "sticker picker";
                e.STICKER_POPOUT = "sticker popout";
                e.PREMIUM_UPSELL = "premium upsell";
                e.EMPTY_STATE = "empty state";
                e.SUBSCRIPTION_DETAILS = "subscription details";
                e.SUBSCRIPTION_HEADER = "subscription header";
                e.ACCOUNT_CREDIT_BANNER = "account credit banner";
                e.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal";
                e.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner";
                e.STREAM_QUALITY_INDICATOR = "stream quality indicator";
                e.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice";
                e.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice";
                e.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal";
                e.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell";
                e.RPC = "rpc";
                e.BILLING_STANDALONE = "billing standalone";
                e.GUILD_CHANNEL_LIST = "guild channel list";
                e.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer";
                e.STICKER_MESSAGE = "sticker message";
                e.CHANNEL_TEXT_AREA = "channel text area";
                e.HEADER_BAR = "header bar";
                e.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal";
                e.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell";
                e.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal";
                e.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal";
                e.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice";
                e.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal";
                e.GUILD_HEADER = "guild header";
                e.GUILD_BANNER = "guild banner";
                e.GUILD_BANNER_NOTICE = "guild banner notice";
                e.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal";
                e.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal";
                e.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal";
                e.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar";
                e.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none";
                e.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1";
                e.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2";
                e.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3";
                e.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner";
                e.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display";
                e.GUILDS_LIST = "guilds list";
                e.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector";
                e.ACTIVITY_DIRECTORY = "activity directory";
                e.ACTIVITY_TILE = "activity tile";
                e.ACTIVITY_UPSELL = "activity upsell";
                e.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle";
                e.INSTANT_INVITE_MODAL = "instant invite modal";
                e.IMAGE_CROPPING_MODAL = "image cropping modal";
                e.GIF_PICKER = "gif picker";
                e.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal";
                e.INVITE_MODAL = "invite modal";
                e.INVITE_EMBED = "invite embed";
                e.NEW_GUILD_BUTTON = "new guild button";
                e.CHARACTER_COUNT = "character count";
                e.DM_CHANNEL = "dm channel";
                e.GUILD_CHANNEL = "guild channel";
                e.FORUM_CHANNEL = "forum channel";
                e.FILE_UPLOAD_POPOUT = "file upload popout";
                e.EMOJI = "emoji";
                e.PROFILE = "profile";
                e.PROFILE_MODAL = "profile modal";
                e.PROFILE_POPOUT = "profile popout";
                e.GUILD_PROFILE = "guild profile";
                e.EDIT_AVATAR = "edit avatar";
                e.EDIT_BANNER = "edit banner";
                e.CHAT_INPUT = "chat input";
                e.CREATE_THREAD = "create thread";
                e.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header";
                e.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay";
                e.SELECT_IMAGE_MODAL = "select image modal";
                e.VIDEO_BACKGROUND_OPTIONS = "video background options";
                e.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option";
                e.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell";
                e.CAMERA_PREVIEW = "camera preview";
                e.HOME_PAGE_PREMIUM_TAB = "home page premium tab";
                e.PREMIUM_MARKETING_SURFACE = "premium marketing surface";
                e.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta";
                e.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta";
                e.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta";
                e.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta";
                e.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card";
                e.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card";
                e.PREMIUM_MARKETING_FEATURE = "premium marketing feature";
                e.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table";
                e.PREMIUM_MARKETING_FOOTER = "premium marketing footer";
                e.CHANNEL_CALL_ACTION_BAR = "channel call action bar";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo";
                e.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls";
                e.VOICE_CONTROL_TRAY = "voice control tray";
                e.ACTIVE_NOW_COLUMN = "active now column";
                e.CONTEXT_MENU = "context menu";
                e.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu";
                e.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu";
                e.CHANNEL_CATEGORY_MENU = "channel category menu";
                e.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu";
                e.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu";
                e.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu";
                e.CHANNEL_LIST_THREAD_MENU = "channel list thread menu";
                e.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu";
                e.CHANNEL_TITLE_MENU = "channel title menu";
                e.GROUP_DM_MENU = "group dm menu";
                e.AUDIT_LOG_USER_MENU = "audit log user menu";
                e.BANNED_USER_MENU = "banned user menu";
                e.DM_USER_MENU = "dm user menu";
                e.GROUP_DM_USER_MENU = "group dm user menu";
                e.GUILD_CHANNEL_USER_MENU = "guild channel user menu";
                e.GUILD_MODERATION_USER_MENU = "guild moderation user menu";
                e.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu";
                e.GUILD_SETTINGS_USER_MENU = "guild settings user menu";
                e.GUILD_USER_MENU = "guild user menu";
                e.THREAD_USER_MENU = "thread user menu";
                e.USER_GENERIC_MENU = "user generic menu";
                e.USER_PROFILE_ACTIONS_MENU = "user profile actions menu";
                e.VOICE_ACTION_SHEET = "voice action sheet";
                e.FOCUSED_VOICE_CONTROLS = "focused voice controls";
                e.MASKED_LINK = "masked link";
                e.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet";
                e.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet";
                e.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet";
                e.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell";
                e.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal";
                e.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal";
                e.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet";
                e.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal";
                e.ACCOUNT_PROFILE_POPOUT = "account profile popout";
                e.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet";
                e.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium";
                e.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro";
                e.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting";
                e.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022";
                e.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark";
                e.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip";
                e.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out";
                e.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker";
                e.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone";
                e.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night";
                e.STAGE_VIDEO_LIMIT = "stage video limit";
                e.ACTIVITIES_MINI_SHELF = "activities mini shelf";
                e.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner";
                e.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite";
                e.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion";
                e.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button";
                e.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark";
                e.CLIENT_THEMES_EDITOR = "client themes editor";
                e.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector";
                e.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert";
                e.SHARE_NITRO_EMBED = "share nitro embed";
                e.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message";
                e.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button";
                e.REFERRAL_TRIALS_POPOUT = "referral trials popout";
                e.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal";
                e.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner";
                e.ACTIVITY_BOOKMARK = "activity bookmark";
                e.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher";
                e.ACTIVITY_DETAIL_PAGE = "activity detail page";
                e.ACTIVITIES_PAGE = "activities page";
                e.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta";
                e.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile";
                e.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content";
                e.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky";
                e.ACTIVITIES_HAPPENING_NOW = "activities happening now";
                e.MEDIA_VIEWER = "media viewer";
                e.MESSAGE_LONG_PRESS_MENU = "message long press menu";
                e.COLLECTIBLES_SHOP = "collectibles shop";
                e.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal";
                e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell";
                e.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal";
                e.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal";
                e.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell";
                e.PREMIUM_BILLING_INFO = "premium billing info";
                e.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details";
                e.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview";
                e.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated";
                e.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal";
                e.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice";
                e.PREMIUM_PLAN_SELECT = "premium_plan_select";
                e.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview";
                e.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content";
                e.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview";
                e.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT";
                e.MEMBER_SAFETY_PAGE = "member safety page";
                e.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page";
                e.GUILD_MEMBER_MOD_VIEW = "guild member mod view";
                e.GUILD_PRODUCT_EMBED_CARD = "guild product embed card";
                e.GUILD_PRODUCT_INFO_MODAL = "guild product info modal";
                e.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal";
                e.GUILD_SHOP_PAGE = "guild shop page";
                e.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details";
                e.MESSAGE_REMIX_TAG = "message remix tag";
                e.MESSAGE_REMIX_BUTTON = "message remix button";
                e.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity";
                e.CLIPS_SETTINGS = "clips settings";
                e.CLIPS_GALLERY = "clips gallery";
                e.CLIPS_GALLERY_ITEM = "clips gallery item";
                e.CLIPS_EDITOR = "clips editor";
                e.CLIPS_SHARE_MODAL = "clips share modal";
                e.CHANNEL_ATTACH_BUTTON = "channel attach button";
                e.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet"
            }(n || (n = {}));
            const o = n
        },
        980813: (e, t, r) => {
            r.d(t, {
                Oq: () => u,
                sw: () => _,
                jy: () => f
            });
            var n = r(940060),
                o = r(202351),
                i = r(260561),
                a = r(567403),
                l = r(682776),
                c = r(982358),
                u = (0, i.B)({
                    kind: "guild",
                    id: "2023-04_guild_alert_mode",
                    label: "Guild Alert Mode",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !0
                        }
                    }]
                }),
                s = (0, i.B)({
                    kind: "guild",
                    id: "2023-08_guild_alert_mode_friend_server",
                    label: "Guild Alert Mode (friend servers only)",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }]
                });

            function _(e) {
                var t = (0, o.e7)([a.Z], (function() {
                        return a.Z.getGuild(e)
                    })),
                    r = (0, o.e7)([l.Z], (function() {
                        return null != t && n.Z.hasAny(l.Z.computePermissions(t), c.cv)
                    })),
                    i = u.useExperiment({
                        guildId: e,
                        location: "c3fae3_1"
                    }, {
                        disable: !r,
                        autoTrackExposure: !0
                    }),
                    _ = s.useExperiment({
                        guildId: e,
                        location: "c3fae3_2"
                    }, {
                        disable: !r,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: i.showAlertMode || _.showAlertMode,
                    alsoShowMemberSafety: i.alsoShowMemberSafety || _.alsoShowMemberSafety
                }
            }

            function f(e) {
                var t = a.Z.getGuild(e),
                    r = null != t && n.Z.hasAny(l.Z.computePermissions(t), c.cv),
                    o = u.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_3"
                    }, {
                        disable: !r,
                        autoTrackExposure: !0
                    }),
                    i = s.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_4"
                    }, {
                        disable: !r,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: o.showAlertMode || i.showAlertMode,
                    alsoShowMemberSafety: o.alsoShowMemberSafety || i.alsoShowMemberSafety
                }
            }
        },
        557233: (e, t, r) => {
            r.d(t, {
                KK: () => T,
                f6: () => b,
                n: () => A,
                Fi: () => h,
                C4: () => R
            });
            var n = r(730381),
                o = r.n(n),
                i = r(281110),
                a = r(396043),
                l = r(703790),
                c = r(567403),
                u = r(652591),
                s = r(980813),
                _ = r(2590);

            function f(e, t, r, n, o, i, a) {
                try {
                    var l = e[i](a),
                        c = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function p(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function a(e) {
                            f(i, n, o, a, l, "next", e)
                        }

                        function l(e) {
                            f(i, n, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function E(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        E(e, t, r[t])
                    }))
                }
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
            var I = function(e, t) {
                var r, n, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function T(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && u.default.track(_.rMx.GUILD_RAID_REPORTED, d(O({}, (0, a.hH)(e)), {
                    guild_id: e,
                    raid_types: t
                }))
            }

            function b(e, t) {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = p((function(e, t) {
                    var r;
                    return I(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                (r = new Set(e.features)).has(_.oNc.COMMUNITY) ? t ? r.delete(_.oNc.RAID_ALERTS_DISABLED) : r.add(_.oNc.RAID_ALERTS_DISABLED) : t ? r.add(_.oNc.NON_COMMUNITY_RAID_ALERTS) : r.delete(_.oNc.NON_COMMUNITY_RAID_ALERTS);
                                return [4, l.Z.saveGuild(e.id, {
                                    features: r
                                }, {
                                    throwErr: !0
                                })];
                            case 1:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function A(e, t, r, n) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = p((function(e, t, r, n) {
                    var a, l;
                    return I(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                a = o()().add(n, "hours").toISOString();
                                l = {
                                    invites_disabled_until: t ? a : null,
                                    dms_disabled_until: r ? a : null
                                };
                                return [4, i.ZP.put({
                                    url: _.ANM.GUILD_INCIDENT_ACTIONS(e),
                                    body: l
                                })];
                            case 1:
                                return [2, c.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function h(e, t, r) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = p((function(e, t, r) {
                    var n, o, a;
                    return I(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                n = (0, s.jy)(e).showAlertMode;
                                o = c.Z.getGuild(e);
                                a = null == o ? void 0 : o.getSafetyAlertsChannelId();
                                return n && null != a ? [4, i.ZP.post({
                                    url: _.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                                    body: {
                                        alert_message_id: t,
                                        reason: r
                                    }
                                })] : [2, null];
                            case 1:
                                return [2, l.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function R(e) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = p((function(e) {
                    var t, r, n;
                    return I(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = (0, s.jy)(e).showAlertMode;
                                r = c.Z.getGuild(e);
                                n = null == r ? void 0 : r.getSafetyAlertsChannelId();
                                return t && null != n ? [4, i.ZP.post({
                                    url: _.ANM.GUILD_INCIDENT_REPORT_RAID(e)
                                })] : [2, null];
                            case 1:
                                return [2, o.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        982358: (e, t, r) => {
            r.d(t, {
                lp: () => a,
                Fl: () => l,
                c1: () => c,
                cv: () => u
            });
            var n = r(940060),
                o = r(520453),
                i = r(473708),
                a = 2,
                l = 2,
                c = function() {
                    return [{
                        value: 1,
                        label: i.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_1_HOUR
                    }, {
                        value: 2,
                        label: i.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_2_HOURS
                    }, {
                        value: 4,
                        label: i.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_4_HOURS
                    }, {
                        value: 6,
                        label: i.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_6_HOURS
                    }, {
                        value: 12,
                        label: i.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_12_HOURS
                    }, {
                        value: 24,
                        label: i.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_24_HOURS
                    }]
                },
                u = n.Z.combine(o.Pl.ADMINISTRATOR, o.Pl.MANAGE_GUILD, o.Pl.BAN_MEMBERS, o.Pl.KICK_MEMBERS, o.Pl.MODERATE_MEMBERS)
        },
        665458: (e, t, r) => {
            r.d(t, {
                J: () => _,
                K: () => f
            });
            var n = r(785893),
                o = (r(667294), r(882723));

            function i(e, t, r, n, o, i, a) {
                try {
                    var l = e[i](a),
                        c = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function a(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function l(e) {
                            i(a, n, o, l, c, "next", e)
                        }

                        function c(e) {
                            i(a, n, o, l, c, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        l(e, t, r[t])
                    }))
                }
                return e
            }

            function u(e, t) {
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
            var s = function(e, t) {
                var r, n, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function _(e) {
                (0, o.openModalLazy)(a((function() {
                    var t, o;
                    return s(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([r.e(40532), r.e(4070)]).then(r.bind(r, 204070))];
                            case 1:
                                t = i.sent(), o = t.default;
                                return [2, function(t) {
                                    return (0, n.jsx)(o, u(c({}, t), {
                                        guildId: e
                                    }))
                                }]
                        }
                    }))
                })))
            }

            function f(e) {
                (0, o.openModalLazy)(a((function() {
                    var t, o;
                    return s(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([r.e(40532), r.e(81640)]).then(r.bind(r, 181640))];
                            case 1:
                                t = i.sent(), o = t.default;
                                return [2, function(t) {
                                    return (0, n.jsx)(o, u(c({}, t), {
                                        guildId: e
                                    }))
                                }]
                        }
                    }))
                })))
            }
        },
        189651: (e, t, r) => {
            r.d(t, {
                iD: () => h,
                Zm: () => g,
                mL: () => R,
                zS: () => S,
                og: () => P,
                aq: () => L
            });
            var n = r(744564),
                o = r(396043),
                i = r(784426),
                a = r(61209),
                l = r(5544),
                c = r(21372),
                u = r(567403),
                s = r(682776),
                _ = r(715107),
                f = r(9430),
                p = r(652591),
                E = r(861426),
                O = r(557177),
                d = r(2590),
                I = r(897196);

            function T(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function b(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        b(e, t, r[t])
                    }))
                }
                return e
            }

            function A(e, t) {
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

            function y(e) {
                return function(e) {
                    if (Array.isArray(e)) return T(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return T(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return T(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e, t) {
                p.default.track(d.rMx.VIEW_AS_ROLES_SELECTED, A(m({
                    num_roles: Object.keys(t.roles).length
                }, (0, o.hH)(e)), {
                    is_viewing_as_member: t.type === O.z.NEW_MEMBER
                }));
                n.Z.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                });
                N(e)
            }

            function g(e, t) {
                var r = E.Z.getData(e);
                if (null != r && r.type === t.type) {
                    p.default.track(d.rMx.VIEW_AS_ROLES_SELECTED, A(m({
                        num_roles: Object.keys(r.roles).length
                    }, (0, o.hH)(e)), {
                        is_viewing_as_member: r.type === O.z.NEW_MEMBER
                    }));
                    n.Z.dispatch({
                        type: "IMPERSONATE_UPDATE",
                        guildId: e,
                        data: m({}, r, t)
                    });
                    N(e)
                }
            }

            function R(e) {
                n.Z.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function N(e) {
                var t = _.Z.getChannelId(e),
                    r = a.Z.getChannel(t);
                if (!(null != t && (0, I.AB)(t)) && !s.Z.can(d.Plq.VIEW_CHANNEL, r)) {
                    var n = l.ZP.getDefaultChannel(e);
                    null != n && (0, i.uL)(d.Z5c.CHANNEL(e, n.id))
                }
            }

            function S(e, t, r) {
                var n = new Set(f.Z.getOptedInChannels(e));
                t.forEach((function(e) {
                    return n.add(e)
                }));
                r.forEach((function(e) {
                    return n.delete(e)
                }));
                g(e, {
                    type: O.z.NEW_MEMBER,
                    optInChannels: n
                })
            }

            function P(e, t) {
                var r = u.Z.getGuild(e);
                if (null != r) {
                    ! function(e, t) {
                        var r = y(l.ZP.getSelectableChannelIds(e)).concat(y(l.ZP.getVocalChannelIds(e))),
                            n = Array.from(t);
                        l.ZP.addConditionalChangeListener((function() {
                            var t = c.ZP.getSelfMember(e);
                            if (null == t) return !1;
                            if (n.some((function(e) {
                                    return !t.roles.includes(e)
                                }))) return !0;
                            var o = y(l.ZP.getSelectableChannelIds(e)).concat(y(l.ZP.getVocalChannelIds(e))).filter((function(e) {
                                return !r.includes(e)
                            }));
                            o.length > 0 && S(e, o, []);
                            return !1
                        }))
                    }(e, t);
                    var n = {};
                    t.forEach((function(e) {
                        return n[e] = r.roles[e]
                    }));
                    g(e, {
                        type: O.z.NEW_MEMBER,
                        roles: n
                    })
                }
            }

            function L(e, t) {
                g(e, m({
                    type: O.z.NEW_MEMBER
                }, t))
            }
        },
        7194: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => C
            });
            var n = r(785893),
                o = r(667294),
                i = r(882723),
                a = r(971402),
                l = r(343639),
                c = r(567678),
                u = r(153686),
                s = r(735885),
                _ = r(703790),
                f = r(2590),
                p = r(473708);
            var E = r(202351),
                O = r(980813),
                d = r(557233),
                I = r(588895),
                T = r(922763),
                b = r(46396),
                m = r(85039),
                A = r(567403);

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function h(e, t, r, n, o, i, a) {
                try {
                    var l = e[i](a),
                        c = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function g(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function a(e) {
                            h(i, n, o, a, l, "next", e)
                        }

                        function l(e) {
                            h(i, n, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function R(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function N(e, t) {
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

            function S(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var P = function(e, t) {
                var r, n, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function L(e, t) {
                var l, c = t === f.IlC.POPOUT,
                    u = (0, E.e7)([A.Z], (function() {
                        return A.Z.getGuild(e)
                    }), [e]),
                    s = S(o.useState(!1), 2),
                    _ = s[0],
                    y = s[1],
                    h = (0, O.sw)(e).showAlertMode,
                    L = (0, E.e7)([b.Z], (function() {
                        return null != u ? b.Z.getGuildIncident(u.id) : null
                    })),
                    M = (null == u ? void 0 : u.hasFeature(f.oNc.INVITES_DISABLED)) || h && null != (null == L ? void 0 : L.invitesDisabledUntil) && new Date(L.invitesDisabledUntil) > new Date,
                    C = S(o.useState(M), 2),
                    v = C[0],
                    U = C[1],
                    D = (l = g((function(t) {
                        var o;
                        return P(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    if (_ || null == u) return [2];
                                    y(!0);
                                    l.label = 1;
                                case 1:
                                    l.trys.push([1, 8, 9, 10]);
                                    U(t);
                                    if (!h) return [3, 5];
                                    if (!t) return [3, 2];
                                    o = {
                                        source: I.Zu.MESSAGE,
                                        alertType: (0, T.T1)(L)
                                    };
                                    (0, i.openModalLazy)(g((function() {
                                        var t, i;
                                        return P(this, (function(a) {
                                            switch (a.label) {
                                                case 0:
                                                    return [4, Promise.all([r.e(40532), r.e(17586), r.e(18554)]).then(r.bind(r, 318554))];
                                                case 1:
                                                    t = a.sent(), i = t.default;
                                                    return [2, function(t) {
                                                        return (0, n.jsx)(i, N(function(e) {
                                                            for (var t = 1; t < arguments.length; t++) {
                                                                var r = null != arguments[t] ? arguments[t] : {},
                                                                    n = Object.keys(r);
                                                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                                                }))));
                                                                n.forEach((function(t) {
                                                                    R(e, t, r[t])
                                                                }))
                                                            }
                                                            return e
                                                        }({}, t), {
                                                            guildId: e,
                                                            analyticsData: o
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })));
                                    return [3, 4];
                                case 2:
                                    return [4, (0, d.n)(u.id, !1, !1)];
                                case 3:
                                    l.sent();
                                    l.label = 4;
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return [4, (0, m.AG)(u, t)];
                                case 6:
                                    l.sent();
                                    l.label = 7;
                                case 7:
                                    return [3, 10];
                                case 8:
                                    l.sent();
                                    U(!t);
                                    return [3, 10];
                                case 9:
                                    y(!1);
                                    (0, a.Zy)();
                                    return [7];
                                case 10:
                                    return [2]
                            }
                        }))
                    })), function(e) {
                        return l.apply(this, arguments)
                    });
                return c ? null : (0, n.jsx)(i.MenuCheckboxItem, {
                    id: "pause-invites",
                    label: p.Z.Messages.DISABLE_INVITES,
                    action: function() {
                        D(!v)
                    },
                    checked: v
                })
            }
            var M = r(665458);
            const C = (0, c.Z)((0, l.Z)((function(e) {
                var t = e.guildId,
                    r = e.context,
                    o = e.onSelect,
                    l = function(e, t) {
                        return t === f.IlC.POPOUT ? null : (0, n.jsx)(i.MenuItem, {
                            id: "report-raid",
                            label: p.Z.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
                            action: function() {
                                (0, s.xf)();
                                (0, M.J)(e)
                            }
                        })
                    }(t, r),
                    c = L(t, r),
                    u = function(e, t) {
                        return t === f.IlC.POPOUT ? null : (0, n.jsx)(i.MenuItem, {
                            id: "nav-server-settings",
                            label: p.Z.Messages.SERVER_SETTINGS,
                            action: function() {
                                (0, s.xf)();
                                _.Z.open(e, f.pNK.MODERATION)
                            }
                        })
                    }(t, r);
                return (0, n.jsxs)(i.Menu, {
                    navId: "moderation-raid-context",
                    onClose: a.Zy,
                    "aria-label": p.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: o,
                    children: [(0, n.jsx)(i.MenuGroup, {
                        children: c
                    }), (0, n.jsxs)(i.MenuGroup, {
                        children: [u, l]
                    })]
                })
            }), {
                object: f.qAy.CONTEXT_MENU
            }), [u.Z.CONTEXT_MENU, u.Z.GUILD_MODERATION_RAID_MENU])
        },
        424158: (e, t, r) => {
            r.d(t, {
                Z: () => p
            });
            var n = r(730381),
                o = r.n(n),
                i = r(169376);

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
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

            function u(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
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
                    var r, n = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return u(this, r)
                }
            }
            var p = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(r, e);
                var t = f(r);

                function r(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r);
                    var n;
                    (n = t.call(this)).code = e.code || "";
                    n.temporary = e.temporary || !1;
                    n.revoked = e.revoked || !1;
                    n.uses = e.uses || 0;
                    n.maxUses = e.maxUses || 0;
                    n.maxAge = e.maxAge || 0;
                    n.createdAt = e.createdAt || new Date;
                    n.channel = e.channel;
                    n.guild = e.guild;
                    n.inviter = e.inviter || null;
                    n.targetType = e.targetType || null;
                    n.targetUser = e.targetUser || null;
                    n.targetApplication = e.targetApplication || null;
                    n.type = e.type || null;
                    n.flags = e.flags || 0;
                    return n
                }
                var n = r.prototype;
                n.isExpired = function() {
                    var e = this.maxAge;
                    if (e > 0) {
                        if (o()(this.createdAt).add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                };
                n.getExpiresAt = function() {
                    if (this.maxAge > 0) {
                        return o()(this.createdAt).add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                };
                n.toString = function() {
                    return this.code
                };
                r.createFromServer = function(e) {
                    var t;
                    return new r(c(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))));
                            n.forEach((function(t) {
                                a(e, t, r[t])
                            }))
                        }
                        return e
                    }({}, e), {
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: o()(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    }))
                };
                return r
            }(i.Z)
        },
        488110: (e, t, r) => {
            r.d(t, {
                Z: () => d
            });
            var n = r(473903),
                o = r(496486),
                i = function(e) {
                    return "function" == typeof e ? e() : e
                };
            r.n(o)().curry((function(e, t, r) {
                return i(t) ? e(r) : r({})
            }));

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        a(e, t, r[t])
                    }))
                }
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

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var s, _, f = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                p = r(680918);
            s = p.showModal;
            f = p.updateModalProps;
            _ = r(264817).Mr;

            function E(e) {
                var t = e.promiseFn,
                    r = e.resolve,
                    n = e.reject,
                    o = e.modalProps,
                    i = void 0 === o ? {} : o,
                    a = e.hooks,
                    u = (void 0 === a ? {} : a).onEarlyClose,
                    p = function() {
                        null == u || u()
                    },
                    E = function(e) {
                        _(T);
                        r(e)
                    },
                    d = function(e) {
                        _(T);
                        n(e)
                    },
                    I = function(e) {
                        var t = e.res;
                        f(T, b, p, c(l({}, i), {
                            error: t.body.message
                        }))
                    };
                if (null != s) var T = s(b, p, i);
                else null == u || u();

                function b(e) {
                    f(T, b, p, c(l({}, i), {
                        isLoading: !0
                    }));
                    return O({
                        promiseFn: t,
                        resolve: E,
                        reject: d,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }
            }

            function O(e) {
                var t = e.promiseFn,
                    r = e.resolve,
                    n = e.reject,
                    o = e.code,
                    i = e.mfaCodeHandler,
                    a = void 0 === i ? E : i,
                    c = e.isModalOpen,
                    s = void 0 !== c && c,
                    _ = u(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != o ? {
                    code: o
                } : {}).then(r, (function(e) {
                    if (function(e, t) {
                            return e.body && 60008 === e.body.code || t && 429 === e.status
                        }(e, s)) return a(l({
                        promiseFn: t,
                        resolve: r,
                        reject: n,
                        res: e
                    }, _));
                    n(e)
                }))
            }

            function d(e, t) {
                var r, o, a = null != t ? t : {},
                    c = a.checkEnabled,
                    s = void 0 === c ? null !== (o = null === (r = n.default.getCurrentUser()) || void 0 === r ? void 0 : r.mfaEnabled) && void 0 !== o && o : c,
                    _ = u(a, ["checkEnabled"]);
                return new Promise((function(t, r) {
                    (i(s) ? E : O)(l({
                        promiseFn: e,
                        resolve: t,
                        reject: r
                    }, _))
                }))
            }
        },
        391438: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(281110),
                o = r(652591);

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e) {
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
            }

            function l(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function c(e, t, r) {
                var n = t.trackedActionData,
                    i = l(t, ["trackedActionData"]),
                    c = {
                        url: i.url,
                        request_method: r
                    };
                return new Promise((function(t, r) {
                    e(i).then((function(e) {
                        var r = n.properties;
                        "function" == typeof n.properties && (r = n.properties(e));
                        (0,
                            o.trackNetworkAction)(n.event, a({
                            status_code: e.status
                        }, c, r));
                        t(e)
                    })).catch((function(e) {
                        var t, i, l = n.properties;
                        "function" == typeof n.properties && (l = n.properties(e));
                        (0, o.trackNetworkAction)(n.event, a({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message
                        }, c, l));
                        r(e)
                    }))
                }))
            }
            const u = {
                get: function(e) {
                    return c(n.ZP.get, e, "get")
                },
                post: function(e) {
                    return c(n.ZP.post, e, "post")
                },
                put: function(e) {
                    return c(n.ZP.put, e, "put")
                },
                patch: function(e) {
                    return c(n.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return c(n.ZP.delete, e, "del")
                }
            }
        },
        680918: (e, t, r) => {
            r.r(t);
            r.d(t, {
                showModal: () => c,
                updateModalProps: () => u
            });
            var n = r(785893),
                o = (r(667294), r(264817)),
                i = r(919244);

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            var l = function(e, t, r) {
                return function(o) {
                    return (0, n.jsx)(i.Z, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))));
                            n.forEach((function(t) {
                                a(e, t, r[t])
                            }))
                        }
                        return e
                    }({
                        handleSubmit: e,
                        handleEarlyClose: t
                    }, r, o))
                }
            };

            function c(e, t, r) {
                return (0, o.h7)(l(e, t, r), {
                    onCloseCallback: t
                })
            }

            function u(e, t, r, n) {
                return (0, o.o)(e, l(t, r, n))
            }
        }
    }
]);
//# sourceMappingURL=c96456adc83bc26ca36e.js.map