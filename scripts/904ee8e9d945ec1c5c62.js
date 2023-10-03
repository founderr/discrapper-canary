"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [33600], {
        133600: (t, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => q
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                s = n.n(o),
                a = n(202351),
                c = n(304548),
                l = n(875700),
                u = n(563726),
                p = n(316878),
                f = n(255875),
                d = n(784426),
                h = n(959207),
                y = n(70321),
                g = n(761814),
                b = n(473903),
                m = n(551778),
                v = n(746974),
                O = n(750203),
                C = n(443812),
                S = n(652591),
                I = n(644144),
                w = n(530562),
                P = n(749565),
                j = n(467345),
                x = n(882211),
                _ = n(203600),
                T = n(2590),
                G = n(473708),
                Z = n(245879),
                k = n.n(Z);

            function M(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function N(t, e, n, r, i, o, s) {
                try {
                    var a = t[o](s),
                        c = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(c) : Promise.resolve(c).then(r, i)
            }

            function E(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function s(t) {
                            N(o, r, i, s, a, "next", t)
                        }

                        function a(t) {
                            N(o, r, i, s, a, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }

            function R(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function A(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function L(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function D(t) {
                D = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return D(t)
            }

            function F(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function U(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }

            function H(t, e) {
                return !e || "object" !== z(e) && "function" != typeof e ? M(t) : e
            }

            function B(t, e) {
                B = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return B(t, e)
            }
            var z = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function V(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = D(t);
                    if (e) {
                        var i = D(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return H(this, n)
                }
            }
            var Y = function(t, e) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            s.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            s.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = s.ops.pop();
                                            s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = s.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                s.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && s.label < i[1]) {
                                                s.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2];
                                                s.ops.push(o);
                                                break
                                            }
                                            i[2] && s.ops.pop();
                                            s.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, s)
                                } catch (t) {
                                    o = [6, t];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                Q = function(t) {
                    var e = t.openedGift,
                        n = i.useContext(f.E).createMultipleConfettiAt;
                    i.useEffect((function() {
                        e && n(window.innerWidth / 2, window.innerHeight / 4)
                    }), [n, e]);
                    return null
                },
                W = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        e && B(t, e)
                    }(n, t);
                    var e = V(n);

                    function n() {
                        R(this, n);
                        var t;
                        (t = e.apply(this, arguments)).state = {
                            error: null,
                            accepted: !1,
                            opened: !1,
                            isCustomGift: !1,
                            step: void 0
                        };
                        t.handleOpen = function() {
                            t.setState({
                                opened: !0
                            })
                        };
                        var r = M(t);
                        t.handleAccept = E((function() {
                            var t, e, n, i;
                            return Y(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        t = r.props, e = t.giftCode, n = t.channelContext;
                                        if (null == e) throw new Error("GiftCode is null at acceptance.");
                                        o.label = 1;
                                    case 1:
                                        o.trys.push([1, 3, , 4]);
                                        return [4, u.Z.redeemGiftCode(e.code, {
                                            channelId: n
                                        })];
                                    case 2:
                                        o.sent();
                                        r.setState({
                                            accepted: !0
                                        });
                                        return [3, 4];
                                    case 3:
                                        i = o.sent();
                                        r.setState({
                                            error: i
                                        });
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        t.handleGoToLibrary = function() {
                            var e = t.props,
                                n = e.onClose,
                                r = e.libraryApplication;
                            (0, d.uL)(T.Z5c.APPLICATION_LIBRARY, {
                                state: {
                                    applicationId: null != r ? r.id : null
                                }
                            });
                            n()
                        };
                        t.getAnimationStatus = function() {
                            return t.step === T.wZ8.OPEN ? j.SR.IDLE : j.SR.ACTION
                        };
                        return t
                    }
                    var i = n.prototype;
                    i.componentDidMount = function() {
                        var t = this.props,
                            e = t.application,
                            n = t.sku,
                            r = t.customGiftMessage,
                            i = t.giftCode;
                        null == e && null != n && l.Z.fetchApplication(n.applicationId);
                        var o = null != r || null != i.giftStyle;
                        this.setState({
                            isCustomGift: o
                        });
                        this.trackStepAnalytics()
                    };
                    i.trackStepAnalytics = function() {
                        var t = this.props,
                            e = t.giftCode,
                            n = t.customGiftMessage,
                            r = this.state.isCustomGift;
                        S.default.track(T.rMx.GIFT_ACCEPT_STEP, {
                            to_step: this.step,
                            has_custom_message: r,
                            is_custom_message_edited: r && n !== G.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE,
                            gift_style: e.giftStyle,
                            gift_code: e.code
                        })
                    };
                    i.render = function() {
                        var t, e, n = this,
                            i = this.props,
                            o = i.application,
                            a = i.accepting,
                            l = i.onClose,
                            u = i.giftCode,
                            p = i.headerId,
                            f = i.transitionState,
                            d = i.useReducedMotion,
                            h = i.onComplete,
                            y = i.customGiftMessage,
                            g = b.default.getUser(u.userId),
                            m = this.state,
                            v = m.isCustomGift,
                            C = m.accepted,
                            S = m.opened,
                            I = b.default.getCurrentUser(),
                            w = null != (null == u ? void 0 : u.userId) && null != I && null != (null == I ? void 0 : I.id) && u.userId === I.id;
                        switch (this.step) {
                            case T.wZ8.ERROR:
                                null == h || h(u, !1);
                                break;
                            case T.wZ8.SUCCESS:
                                null == h || h(u, !0)
                        }
                        return (0, r.jsxs)("div", {
                            children: [(0, r.jsxs)(c.ModalRoot, {
                                transitionState: f,
                                size: c.ModalSize.SMALL,
                                className: k().modal,
                                "aria-labelledby": p,
                                children: [null != u.giftStyle && !v && (0, r.jsx)(x.Z, {
                                    defaultAnimationState: this.getAnimationStatus(),
                                    giftStyle: u.giftStyle,
                                    className: k().seasonalGiftIcon
                                }), (0, r.jsx)("div", {
                                    className: v ? void 0 : k().backSplash
                                }), (0, r.jsxs)(c.ModalContent, {
                                    className: s()((t = {}, L(t, k().content, !v), L(t, k().contentCustomGift, v), t)),
                                    children: [(0, r.jsx)(c.ModalCloseButton, {
                                        onClick: l,
                                        className: k().closeButton
                                    }), (null == u.giftStyle || v && C) && (0, r.jsx)(O.Z, {
                                        size: O.Z.Sizes.LARGE,
                                        game: o,
                                        skuId: u.skuId
                                    }), (0, r.jsxs)(c.Heading, {
                                        id: p,
                                        className: s()((e = {}, L(e, k().customGiftHeader, v && !C), L(e, k().header, !v || C), e)),
                                        variant: "heading-sm/semibold",
                                        children: [(0, r.jsx)("div", {
                                            className: s()(L({}, k().customGiftHeaderText, v)),
                                            children: this.firstHeaderText
                                        }), (0, r.jsx)("div", {
                                            children: this.secondHeaderText
                                        })]
                                    }), !(v && !C) && (0, r.jsx)(c.Text, {
                                        className: k().body,
                                        variant: "text-sm/normal",
                                        children: this.bodyText
                                    }), v && null != u.giftStyle && !C && (0, r.jsx)(x.Z, {
                                        defaultAnimationState: this.getAnimationStatus(),
                                        className: k().giftAnimation,
                                        giftStyle: u.giftStyle
                                    }), v && this.state.opened && !this.state.accepted && null != y && "" !== y && !w && (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)(c.FormTitle, {
                                            children: G.Z.Messages.GIFT_SENDER_INFO.format({
                                                senderDisplayName: P.ZP.getName(g)
                                            })
                                        }), (0, r.jsx)(c.Heading, {
                                            id: p,
                                            className: k().customMessage,
                                            variant: "heading-sm/bold",
                                            children: this.props.customGiftMessage
                                        })]
                                    }), (0,
                                        r.jsx)(c.Button, {
                                        submitting: a,
                                        onClick: function() {
                                            n.trackStepAnalytics();
                                            n.handleClick()
                                        },
                                        children: this.buttonText
                                    })]
                                })]
                            }), null != u.giftStyle && !d && (0, r.jsx)(Q, {
                                openedGift: S && !C && !a
                            })]
                        })
                    };
                    ! function(t, e, n) {
                        e && A(t.prototype, e);
                        n && A(t, n)
                    }(n, [{
                        key: "step",
                        get: function() {
                            var t = this.props,
                                e = t.libraryApplication,
                                n = t.accepting,
                                r = t.giftCode,
                                i = this.state,
                                o = i.error,
                                s = i.accepted,
                                a = i.opened,
                                c = i.isCustomGift;
                            return (0, I.TO)(e, r, o, s, n, a, c)
                        }
                    }, {
                        key: "buttonText",
                        get: function() {
                            return (0, I.L2)(this.step, this.props.giftCode, this.state.isCustomGift)
                        }
                    }, {
                        key: "firstHeaderText",
                        get: function() {
                            var t = this.state,
                                e = t.isCustomGift,
                                n = t.opened,
                                r = t.accepted,
                                i = this.props,
                                o = i.giftCode,
                                s = i.subscriptionPlan;
                            if (e && !r) {
                                if (n) {
                                    var a = b.default.getUser(o.userId);
                                    return G.Z.Messages.GIFT_SUBSCRIPTION_INFO.format({
                                        senderDisplayName: P.ZP.getName(a),
                                        timeInterval: (null == s ? void 0 : s.interval) === _.rV.MONTH ? G.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH : G.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                                    })
                                }
                                return G.Z.Messages.GIFT_RECIPIENT_INFO.format({
                                    recipientDisplayName: P.ZP.getName(b.default.getCurrentUser())
                                })
                            }
                            return null == this.props.sku ? null : (0, I.dQ)(this.step, this.props.giftCode, this.props.sku)
                        }
                    }, {
                        key: "secondHeaderText",
                        get: function() {
                            if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
                            var t = b.default.getUser(this.props.giftCode.userId);
                            return G.Z.Messages.GIFT_SENDER_INFO.format({
                                senderDisplayName: P.ZP.getName(t)
                            })
                        }
                    }, {
                        key: "bodyText",
                        get: function() {
                            var t = this.props,
                                e = t.sku,
                                n = t.accepting,
                                r = t.libraryApplication,
                                i = t.subscriptionPlan;
                            if (null == e) return null;
                            var o = this.state,
                                s = o.error,
                                a = o.accepted,
                                c = o.isCustomGift;
                            return !o.opened && c ? null : (0, I.iM)({
                                step: this.step,
                                sku: e,
                                libraryApplication: r,
                                error: s,
                                accepted: a,
                                accepting: n,
                                onGoToLibrary: this.handleGoToLibrary,
                                subscriptionPlan: i
                            })
                        }
                    }, {
                        key: "errorMessage",
                        get: function() {
                            var t = this.props,
                                e = t.libraryApplication,
                                n = t.accepting,
                                r = this.state,
                                i = r.error,
                                o = r.accepted;
                            return (0, I.e$)(e, i, o, n, this.handleGoToLibrary)
                        }
                    }, {
                        key: "handleClick",
                        get: function() {
                            var t = this.props,
                                e = t.giftCode,
                                n = t.onClose;
                            switch (this.step) {
                                case T.wZ8.ERROR:
                                    return n;
                                case T.wZ8.SUCCESS:
                                    return __OVERLAY__ || null != e.subscriptionPlanId ? n : this.handleGoToLibrary;
                                case T.wZ8.OPEN:
                                    return this.handleOpen;
                                case T.wZ8.CONFIRM:
                                default:
                                    return this.handleAccept
                            }
                        }
                    }]);
                    return n
                }(i.Component),
                $ = a.ZP.connectStores([g.Z, v.Z, h.Z, y.Z, m.Z, p.Z], (function(t) {
                    var e = t.giftCode,
                        n = v.Z.get(e.skuId),
                        r = null != n ? h.Z.getGame(n.applicationId) : null,
                        i = p.Z.useReducedMotion;
                    return {
                        sku: n,
                        libraryApplication: null != n ? (0, I.z2)(e, n, g.Z) : null,
                        application: r,
                        subscriptionPlan: null != e.subscriptionPlanId ? (0, w.oE)(e.subscriptionPlanId) : null,
                        accepting: y.Z.getIsAccepting(e.code),
                        useReducedMotion: i
                    }
                }))(W);
            const q = function(t) {
                var e = t.channelContext,
                    n = t.code,
                    i = t.customGiftMessage,
                    o = U(t, ["channelContext", "code", "customGiftMessage"]),
                    s = (0, C.Dt)(),
                    c = (0, a.e7)([y.Z], (function() {
                        return y.Z.get(n)
                    }));
                return null == c ? null : (0, r.jsx)($, F(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            L(t, e, n[e])
                        }))
                    }
                    return t
                }({}, o), {
                    customGiftMessage: i,
                    channelContext: e,
                    giftCode: c,
                    headerId: s
                }))
            }
        }
    }
]);