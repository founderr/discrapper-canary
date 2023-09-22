"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [33600], {
        133600: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => W
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                s = n.n(o),
                a = n(202351),
                c = n(882723),
                l = n(875700),
                u = n(563726),
                p = n(316878),
                f = n(255875),
                d = n(784426),
                h = n(959207),
                y = n(70321),
                b = n(761814),
                g = n(473903),
                m = n(551778),
                v = n(746974),
                O = n(750203),
                C = n(443812),
                w = n(644144),
                j = n(530562),
                S = n(749565),
                I = n(882211),
                P = n(203600),
                x = n(2590),
                Z = n(473708),
                N = n(231594),
                k = n.n(N);

            function T(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function G(e, t, n, r, i, o, s) {
                try {
                    var a = e[o](s),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function M(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function s(e) {
                            G(o, r, i, s, a, "next", e)
                        }

                        function a(e) {
                            G(o, r, i, s, a, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function R(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function A(e) {
                A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return A(e)
            }

            function L(e, t) {
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

            function D(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function F(e, t) {
                return !t || "object" !== U(t) && "function" != typeof t ? T(e) : t
            }

            function H(e, t) {
                H = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return H(e, t)
            }
            var U = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function B(e) {
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
                    var n, r = A(e);
                    if (t) {
                        var i = A(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return F(this, n)
                }
            }
            var z = function(e, t) {
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
                                o = t.call(e, s)
                            } catch (e) {
                                o = [6, e];
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
            };

            function V() {
                var e = i.useContext(f.E).createMultipleConfettiAt;
                i.useEffect((function() {
                    e(window.innerWidth / 2, window.innerHeight / 2)
                }), [e]);
                return null
            }
            var Y = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && H(e, t)
                    }(n, e);
                    var t = B(n);

                    function n() {
                        R(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            error: null,
                            accepted: !1,
                            opened: !1,
                            isCustomGift: !1
                        };
                        e.handleOpen = function() {
                            e.setState({
                                opened: !0
                            })
                        };
                        var r = T(e);
                        e.handleAccept = M((function() {
                            var e, t, n, i;
                            return z(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        e = r.props, t = e.giftCode, n = e.channelContext;
                                        if (null == t) throw new Error("GiftCode is null at acceptance.");
                                        o.label = 1;
                                    case 1:
                                        o.trys.push([1, 3, , 4]);
                                        return [4, u.Z.redeemGiftCode(t.code, {
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
                        e.handleGoToLibrary = function() {
                            var t = e.props,
                                n = t.onClose,
                                r = t.libraryApplication;
                            (0, d.uL)(x.Z5c.APPLICATION_LIBRARY, {
                                state: {
                                    applicationId: null != r ? r.id : null
                                }
                            });
                            n()
                        };
                        return e
                    }
                    var i = n.prototype;
                    i.componentDidMount = function() {
                        var e = this.props,
                            t = e.application,
                            n = e.sku,
                            r = e.customGiftMessage;
                        null == t && null != n && l.Z.fetchApplication(n.applicationId);
                        this.setState({
                            isCustomGift: null != r
                        })
                    };
                    i.render = function() {
                        var e, t, n = this.props,
                            i = n.application,
                            o = n.accepting,
                            a = n.onClose,
                            l = n.giftCode,
                            u = n.headerId,
                            p = n.transitionState,
                            f = n.useReducedMotion,
                            d = n.onComplete,
                            h = n.customGiftMessage,
                            y = g.default.getUser(l.userId),
                            b = this.state,
                            m = b.isCustomGift,
                            v = b.accepted;
                        switch (this.step) {
                            case x.wZ8.ERROR:
                                null == d || d(l, !1);
                                break;
                            case x.wZ8.SUCCESS:
                                null == d || d(l, !0)
                        }
                        return (0, r.jsxs)("div", {
                            children: [(0, r.jsxs)(c.ModalRoot, {
                                transitionState: p,
                                size: c.ModalSize.SMALL,
                                className: k().modal,
                                "aria-labelledby": u,
                                children: [null != l.giftStyle && !m && (0, r.jsx)(I.Z, {
                                    giftStyle: l.giftStyle,
                                    className: k().seasonalGiftIcon
                                }), (0, r.jsx)("div", {
                                    className: m ? void 0 : k().backSplash
                                }), (0, r.jsxs)(c.ModalContent, {
                                    className: s()((e = {}, _(e, k().content, !m), _(e, k().contentCustomGift, m), e)),
                                    children: [(0, r.jsx)(c.ModalCloseButton, {
                                        onClick: a,
                                        className: k().closeButton
                                    }), (null == l.giftStyle || m && this.state.accepted) && (0, r.jsx)(O.Z, {
                                        size: O.Z.Sizes.LARGE,
                                        game: i,
                                        skuId: l.skuId
                                    }), (0, r.jsxs)(c.Heading, {
                                        id: u,
                                        className: s()((t = {}, _(t, k().customGiftHeader, m && !v), _(t, k().header, !m || v), t)),
                                        variant: "heading-sm/semibold",
                                        children: [(0, r.jsx)("div", {
                                            className: s()(_({}, k().customGiftHeaderText, m)),
                                            children: this.firstHeaderText
                                        }), (0, r.jsx)("div", {
                                            children: this.secondHeaderText
                                        })]
                                    }), !(m && !this.state.accepted) && (0, r.jsx)(c.Text, {
                                        className: k().body,
                                        variant: "text-sm/normal",
                                        children: this.bodyText
                                    }), m && null != l.giftStyle && !this.state.accepted && (0, r.jsx)(I.Z, {
                                        className: k().giftAnimation,
                                        giftStyle: l.giftStyle
                                    }), m && this.state.opened && !this.state.accepted && null != h && "" !== h && (0, r.jsxs)(r.Fragment, {
                                        children: [(0,
                                            r.jsx)(c.FormTitle, {
                                            children: Z.Z.Messages.GIFT_SENDER_INFO.format({
                                                senderDisplayName: S.ZP.getName(y)
                                            })
                                        }), (0, r.jsx)(c.Heading, {
                                            id: u,
                                            className: k().customMessage,
                                            variant: "heading-sm/bold",
                                            children: this.props.customGiftMessage
                                        })]
                                    }), (0, r.jsx)(c.Button, {
                                        submitting: o,
                                        onClick: this.handleClick,
                                        children: this.buttonText
                                    })]
                                })]
                            }), null == l.giftStyle || f ? null : (0, r.jsx)(V, {})]
                        })
                    };
                    ! function(e, t, n) {
                        t && E(e.prototype, t);
                        n && E(e, n)
                    }(n, [{
                        key: "step",
                        get: function() {
                            var e = this.props,
                                t = e.libraryApplication,
                                n = e.accepting,
                                r = e.giftCode,
                                i = this.state,
                                o = i.error,
                                s = i.accepted,
                                a = i.opened,
                                c = i.isCustomGift;
                            return (0, w.TO)(t, r, o, s, n, a, c)
                        }
                    }, {
                        key: "buttonText",
                        get: function() {
                            return (0, w.L2)(this.step, this.props.giftCode, this.state.isCustomGift)
                        }
                    }, {
                        key: "firstHeaderText",
                        get: function() {
                            var e = this.state,
                                t = e.isCustomGift,
                                n = e.opened,
                                r = e.accepted,
                                i = this.props,
                                o = i.giftCode,
                                s = i.subscriptionPlan;
                            if (t && !r) {
                                if (n) {
                                    var a = g.default.getUser(o.userId);
                                    return Z.Z.Messages.GIFT_SUBSCRIPTION_INFO.format({
                                        senderDisplayName: S.ZP.getName(a),
                                        timeInterval: (null == s ? void 0 : s.interval) === P.rV.MONTH ? Z.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH : Z.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                                    })
                                }
                                return Z.Z.Messages.GIFT_RECIPIENT_INFO.format({
                                    recipientDisplayName: S.ZP.getName(g.default.getCurrentUser())
                                })
                            }
                            return null == this.props.sku ? null : (0, w.dQ)(this.step, this.props.giftCode, this.props.sku)
                        }
                    }, {
                        key: "secondHeaderText",
                        get: function() {
                            if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
                            var e = g.default.getUser(this.props.giftCode.userId);
                            return Z.Z.Messages.GIFT_SENDER_INFO.format({
                                senderDisplayName: S.ZP.getName(e)
                            })
                        }
                    }, {
                        key: "bodyText",
                        get: function() {
                            var e = this.props,
                                t = e.sku,
                                n = e.accepting,
                                r = e.libraryApplication,
                                i = e.subscriptionPlan;
                            if (null == t) return null;
                            var o = this.state,
                                s = o.error,
                                a = o.accepted,
                                c = o.isCustomGift;
                            return !o.opened && c ? null : (0, w.iM)({
                                step: this.step,
                                sku: t,
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
                            var e = this.props,
                                t = e.libraryApplication,
                                n = e.accepting,
                                r = this.state,
                                i = r.error,
                                o = r.accepted;
                            return (0, w.e$)(t, i, o, n, this.handleGoToLibrary)
                        }
                    }, {
                        key: "handleClick",
                        get: function() {
                            var e = this.props,
                                t = e.giftCode,
                                n = e.onClose;
                            switch (this.step) {
                                case x.wZ8.ERROR:
                                    return n;
                                case x.wZ8.SUCCESS:
                                    return __OVERLAY__ || null != t.subscriptionPlanId ? n : this.handleGoToLibrary;
                                case x.wZ8.OPEN:
                                    return this.handleOpen;
                                case x.wZ8.CONFIRM:
                                default:
                                    return this.handleAccept
                            }
                        }
                    }]);
                    return n
                }(i.Component),
                Q = a.ZP.connectStores([b.Z, v.Z, h.Z, y.Z, m.Z, p.Z], (function(e) {
                    var t = e.giftCode,
                        n = v.Z.get(t.skuId),
                        r = null != n ? h.Z.getGame(n.applicationId) : null,
                        i = p.Z.useReducedMotion;
                    return {
                        sku: n,
                        libraryApplication: null != n ? (0, w.z2)(t, n, b.Z) : null,
                        application: r,
                        subscriptionPlan: null != t.subscriptionPlanId ? (0, j.oE)(t.subscriptionPlanId) : null,
                        accepting: y.Z.getIsAccepting(t.code),
                        useReducedMotion: i
                    }
                }))(Y);
            const W = function(e) {
                var t = e.channelContext,
                    n = e.code,
                    i = e.customGiftMessage,
                    o = D(e, ["channelContext", "code", "customGiftMessage"]),
                    s = (0,
                        C.Dt)(),
                    c = (0, a.e7)([y.Z], (function() {
                        return y.Z.get(n)
                    }));
                return null == c ? null : (0, r.jsx)(Q, L(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            _(e, t, n[t])
                        }))
                    }
                    return e
                }({}, o), {
                    customGiftMessage: i,
                    channelContext: t,
                    giftCode: c,
                    headerId: s
                }))
            }
        }
    }
]);