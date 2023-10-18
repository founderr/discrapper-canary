"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [23853], {
        423853: (t, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => J
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                s = n.n(o),
                a = n(202351),
                l = n(70418),
                c = n(875700),
                u = n(563726),
                f = n(316878),
                p = n(255875),
                d = n(784426),
                h = n(959207),
                g = n(70321),
                y = n(761814),
                m = n(473903),
                b = n(551778),
                v = n(746974),
                O = n(750203),
                S = n(443812),
                C = n(652591),
                I = n(38004),
                P = n(644144),
                w = n(530562),
                j = n(749565),
                x = n(467345);
            n(652411), n(4958);
            var _ = n(882211),
                R = n(203600),
                Z = n(2590),
                T = n(473708),
                G = n(245879),
                k = n.n(G);

            function A(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function N(t, e, n, r, i, o, s) {
                try {
                    var a = t[o](s),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, i)
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

            function M(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function L(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function D(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function U(t) {
                U = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return U(t)
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

            function H(t, e) {
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

            function B(t, e) {
                return !e || "object" !== V(e) && "function" != typeof e ? A(t) : e
            }

            function z(t, e) {
                z = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return z(t, e)
            }
            var V = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function Y(t) {
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
                    var n, r = U(t);
                    if (e) {
                        var i = U(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return B(this, n)
                }
            }
            var Q = function(t, e) {
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
                W = function(t) {
                    var e = t.openedGift,
                        n = i.useContext(p.E).createMultipleConfettiAt;
                    i.useEffect((function() {
                        e && n(window.innerWidth / 2, window.innerHeight / 4)
                    }), [n, e]);
                    return null
                },
                $ = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        e && z(t, e)
                    }(n, t);
                    var e = Y(n);

                    function n() {
                        M(this, n);
                        var t;
                        (t = e.apply(this, arguments)).state = {
                            error: null,
                            accepted: !1,
                            opened: !1,
                            isCustomGift: !1,
                            step: void 0,
                            emojiURL: I.ZP.getURL("😀")
                        };
                        t.modalRef = i.createRef();
                        t.handleOpen = function() {
                            t.setState({
                                opened: !0
                            })
                        };
                        var r = A(t);
                        t.handleAccept = E((function() {
                            var t, e, n, i;
                            return Q(this, (function(o) {
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
                            (0, d.uL)(Z.Z5c.APPLICATION_LIBRARY, {
                                state: {
                                    applicationId: null != r ? r.id : null
                                }
                            });
                            n()
                        };
                        t.getDefaultAnimationStatus = function() {
                            return t.step === Z.wZ8.OPEN ? x.SR.IDLE : x.SR.ACTION
                        };
                        t.getIdleAnimationStatus = function() {
                            if (t.step !== Z.wZ8.OPEN) return x.SR.LOOP
                        };
                        return t
                    }
                    var o = n.prototype;
                    o.componentDidMount = function() {
                        var t = this.props,
                            e = t.application,
                            n = t.sku,
                            r = t.customGiftMessage,
                            i = t.giftCode;
                        null == e && null != n && c.Z.fetchApplication(n.applicationId);
                        var o = null != r || null != i.giftStyle;
                        this.setState({
                            isCustomGift: o
                        });
                        this.trackStepAnalytics()
                    };
                    o.trackStepAnalytics = function() {
                        var t = this.props,
                            e = t.giftCode,
                            n = t.customGiftMessage,
                            r = this.state.isCustomGift;
                        C.default.track(Z.rMx.GIFT_ACCEPT_STEP, {
                            to_step: this.step,
                            has_custom_message: r,
                            is_custom_message_edited: r && n !== T.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE,
                            gift_style: e.giftStyle,
                            gift_code: e.code
                        })
                    };
                    o.render = function() {
                        var t, e, n = this,
                            i = this.props,
                            o = i.application,
                            a = i.accepting,
                            c = i.onClose,
                            u = i.giftCode,
                            f = i.headerId,
                            p = i.transitionState,
                            d = i.useReducedMotion,
                            h = i.onComplete,
                            g = i.customGiftMessage,
                            y = m.default.getUser(u.userId),
                            b = this.state,
                            v = b.isCustomGift,
                            S = b.accepted,
                            C = b.opened,
                            I = (b.emojiURL, m.default.getCurrentUser()),
                            P = null != (null == u ? void 0 : u.userId) && null != I && null != (null == I ? void 0 : I.id) && u.userId === I.id;
                        switch (this.step) {
                            case Z.wZ8.ERROR:
                                null == h || h(u, !1);
                                break;
                            case Z.wZ8.SUCCESS:
                                null == h || h(u, !0)
                        }
                        return (0, r.jsxs)("div", {
                            ref: this.modalRef,
                            children: [(0, r.jsxs)(l.ModalRoot, {
                                transitionState: p,
                                size: l.ModalSize.SMALL,
                                className: k().modal,
                                "aria-labelledby": f,
                                children: [null != u.giftStyle && !v && (0, r.jsx)(_.Z, {
                                    defaultAnimationState: this.getDefaultAnimationStatus(),
                                    idleAnimationState: this.getIdleAnimationStatus(),
                                    giftStyle: u.giftStyle,
                                    className: k().seasonalGiftIcon
                                }), (0, r.jsx)("div", {
                                    className: v ? void 0 : k().backSplash
                                }), (0, r.jsxs)(l.ModalContent, {
                                    className: s()((t = {}, D(t, k().content, !v), D(t, k().contentCustomGift, v), t)),
                                    children: [(0, r.jsx)(l.ModalCloseButton, {
                                        onClick: c,
                                        className: k().closeButton
                                    }), (null == u.giftStyle || v && S) && (0, r.jsx)(O.Z, {
                                        size: O.Z.Sizes.LARGE,
                                        game: o,
                                        skuId: u.skuId
                                    }), (0, r.jsxs)(l.Heading, {
                                        id: f,
                                        className: s()((e = {}, D(e, k().customGiftHeader, v && !S), D(e, k().header, !v || S), e)),
                                        variant: "heading-sm/semibold",
                                        children: [(0, r.jsx)("div", {
                                            className: s()(D({}, k().customGiftHeaderText, v)),
                                            children: this.firstHeaderText
                                        }), (0, r.jsx)("div", {
                                            children: this.secondHeaderText
                                        })]
                                    }), !(v && !S) && (0, r.jsx)(l.Text, {
                                        className: k().body,
                                        variant: "text-sm/normal",
                                        children: this.bodyText
                                    }), v && null != u.giftStyle && !S && (0, r.jsx)(_.Z, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: k().giftAnimation,
                                        giftStyle: u.giftStyle
                                    }), v && this.state.opened && !this.state.accepted && null != g && "" !== g && !P && (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)(l.FormTitle, {
                                            children: T.Z.Messages.GIFT_SENDER_INFO.format({
                                                senderDisplayName: j.ZP.getName(y)
                                            })
                                        }), (0, r.jsx)(l.Heading, {
                                            id: f,
                                            className: k().customMessage,
                                            variant: "heading-sm/bold",
                                            children: this.props.customGiftMessage
                                        })]
                                    }), (0, r.jsx)(l.Button, {
                                        submitting: a,
                                        onClick: function() {
                                            n.trackStepAnalytics();
                                            n.handleClick()
                                        },
                                        children: this.buttonText
                                    })]
                                })]
                            }), null != u.giftStyle && !d && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(W, {
                                    openedGift: C && !S && !a
                                }), !S && !a && C && false]
                            })]
                        })
                    };
                    ! function(t, e, n) {
                        e && L(t.prototype, e);
                        n && L(t, n)
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
                                l = i.isCustomGift;
                            return (0, P.TO)(e, r, o, s, n, a, l)
                        }
                    }, {
                        key: "buttonText",
                        get: function() {
                            return (0, P.L2)(this.step, this.props.giftCode, this.state.isCustomGift)
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
                                    var a = m.default.getUser(o.userId);
                                    return T.Z.Messages.GIFT_SUBSCRIPTION_INFO.format({
                                        senderDisplayName: j.ZP.getName(a),
                                        timeInterval: (null == s ? void 0 : s.interval) === R.rV.MONTH ? T.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH : T.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                                    })
                                }
                                return T.Z.Messages.GIFT_RECIPIENT_INFO.format({
                                    recipientDisplayName: j.ZP.getName(m.default.getCurrentUser())
                                })
                            }
                            return null == this.props.sku ? null : (0, P.dQ)(this.step, this.props.giftCode, this.props.sku)
                        }
                    }, {
                        key: "secondHeaderText",
                        get: function() {
                            if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
                            var t = m.default.getUser(this.props.giftCode.userId);
                            return T.Z.Messages.GIFT_SENDER_INFO.format({
                                senderDisplayName: j.ZP.getName(t)
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
                                l = o.isCustomGift;
                            return !o.opened && l ? null : (0, P.iM)({
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
                            return (0, P.e$)(e, i, o, n, this.handleGoToLibrary)
                        }
                    }, {
                        key: "handleClick",
                        get: function() {
                            var t = this.props,
                                e = t.giftCode,
                                n = t.onClose;
                            switch (this.step) {
                                case Z.wZ8.ERROR:
                                    return n;
                                case Z.wZ8.SUCCESS:
                                    return __OVERLAY__ || null != e.subscriptionPlanId ? n : this.handleGoToLibrary;
                                case Z.wZ8.OPEN:
                                    return this.handleOpen;
                                case Z.wZ8.CONFIRM:
                                default:
                                    return this.handleAccept
                            }
                        }
                    }]);
                    return n
                }(i.Component),
                q = a.ZP.connectStores([y.Z, v.Z, h.Z, g.Z, b.Z, f.Z], (function(t) {
                    var e = t.giftCode,
                        n = v.Z.get(e.skuId),
                        r = null != n ? h.Z.getGame(n.applicationId) : null,
                        i = f.Z.useReducedMotion;
                    return {
                        sku: n,
                        libraryApplication: null != n ? (0, P.z2)(e, n, y.Z) : null,
                        application: r,
                        subscriptionPlan: null != e.subscriptionPlanId ? (0, w.oE)(e.subscriptionPlanId) : null,
                        accepting: g.Z.getIsAccepting(e.code),
                        useReducedMotion: i
                    }
                }))($);
            const J = function(t) {
                var e = t.channelContext,
                    n = t.code,
                    i = t.customGiftMessage,
                    o = H(t, ["channelContext", "code", "customGiftMessage"]),
                    s = (0, S.Dt)(),
                    l = (0, a.e7)([g.Z], (function() {
                        return g.Z.get(n)
                    }));
                return null == l ? null : (0, r.jsx)(q, F(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            D(t, e, n[e])
                        }))
                    }
                    return t
                }({}, o), {
                    customGiftMessage: i,
                    channelContext: e,
                    giftCode: l,
                    headerId: s
                }))
            }
        }
    }
]);