(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [513], {
        475772: (e, t, n) => {
            e.exports = n.p + "e61bfff1a364621603633d99d2f29f9d.svg"
        },
        473958: (e, t, n) => {
            e.exports = n.p + "e9b7e8263689da11886b9b9c9fc9aef1.svg"
        },
        34837: (e, t, n) => {
            e.exports = n.p + "f3b288c47e9e1de44dd734bb7611c1e4.svg"
        },
        293714: (e, t, n) => {
            e.exports = n.p + "01f1ebdffe8444d968a146d41d5dc2fc.svg"
        },
        140914: (e, t, n) => {
            e.exports = n.p + "94aef594b95ade8d06e7352d12f46305.svg"
        },
        11371: (e, t, n) => {
            e.exports = n.p + "0451500560abfa448183f0e8449e16f0.svg"
        },
        452004: (e, t, n) => {
            e.exports = n.p + "ad0f83d2caba179082a0b279f60736d0.svg"
        },
        79388: (e, t, n) => {
            e.exports = n.p + "30e68910bd70527f2074a0df0779206f.svg"
        },
        381511: (e, t, n) => {
            e.exports = n.p + "4478068f751e2049708b077226c4c2dc.svg"
        },
        561418: (e, t, n) => {
            e.exports = n.p + "223cd9663ce71bcb429e286b4eaed049.svg"
        },
        190555: (e, t, n) => {
            e.exports = n.p + "074e77dd9b5f48195fd402d5a04cb3ce.svg"
        },
        934869: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => V
            });
            var r = n(785893),
                s = n(667294),
                i = n(496486),
                a = n.n(i),
                o = n(202351),
                u = n(513328),
                l = n(70418),
                c = n(735885),
                _ = n(560923),
                I = n(758635),
                f = n(396179),
                d = n(657539),
                p = n(467345),
                E = n(543976),
                m = n(840922),
                N = n(793461),
                T = n(239734),
                C = n(473903),
                R = n(459940),
                A = n(107364),
                M = n(750203),
                g = n(691797),
                S = n(644144),
                O = n(116094),
                L = n(749565),
                P = n(2590),
                h = n(203600),
                y = n(473708),
                b = n(5759),
                v = n.n(b);

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Z(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function j(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function U(e) {
                U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return U(e)
            }

            function G(e, t) {
                return !t || "object" !== w(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function F(e, t) {
                F = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return F(e, t)
            }

            function H(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, s, i = [],
                            a = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            s = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (o) throw s
                            }
                        }
                        return i
                    }
                }(e, t) || B(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function D(e) {
                return function(e) {
                    if (Array.isArray(e)) return x(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || B(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var w = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function B(e, t) {
                if (e) {
                    if ("string" == typeof e) return x(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? x(e, t) : void 0
                }
            }

            function k(e) {
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
                    var n, r = U(e);
                    if (t) {
                        var s = U(this).constructor;
                        n = Reflect.construct(r, arguments, s)
                    } else n = r.apply(this, arguments);
                    return G(this, n)
                }
            }
            var W = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && F(e, t)
                    }(n, e);
                    var t = k(n);

                    function n() {
                        Z(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            copyMode: R.Z.Modes.DEFAULT
                        };
                        e._copyModeTimeout = new u.V7;
                        e.handleGiftCodeCopy = function(t, n) {
                            var r = e.props.sku;
                            null != r && (0, S.dM)(new E.Z({
                                code: n,
                                maxUses: 1
                            }), r);
                            try {
                                (0, g.JG)(t);
                                e.setState({
                                    copyMode: R.Z.Modes.SUCCESS
                                })
                            } catch (t) {
                                e.setState({
                                    copyMode: R.Z.Modes.ERROR
                                })
                            }
                            e._copyModeTimeout.start(1500, (function() {
                                e.setState({
                                    copyMode: R.Z.Modes.DEFAULT
                                })
                            }))
                        };
                        e.handleInventoryClick = function() {
                            f.Z.open(P.oAB.INVENTORY);
                            e.props.onClose()
                        };
                        e.renderGiftCodeSection = function() {
                            var t = e.props,
                                n = t.obscureGiftCode,
                                s = t.giftCode;
                            if (null == s) return null;
                            var i, a = e.state.copyMode;
                            switch (a) {
                                case R.Z.Modes.SUCCESS:
                                    i = y.Z.Messages.BILLING_GIFT_COPIED;
                                    break;
                                case R.Z.Modes.ERROR:
                                    i = y.Z.Messages.FAILED;
                                    break;
                                default:
                                    i = y.Z.Messages.COPY
                            }
                            return (0, r.jsx)(A.Z, {
                                direction: A.Z.Direction.VERTICAL,
                                children: (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(l.FormTitle, {
                                        children: y.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
                                    }), null != s && (0, r.jsx)(R.Z, {
                                        hideMessage: n ? y.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
                                        value: (0, S.Nz)(s),
                                        mode: a,
                                        text: i,
                                        onCopy: function(t) {
                                            return e.handleGiftCodeCopy(t, s)
                                        },
                                        supportsCopy: g.wS,
                                        className: v().copyInput,
                                        buttonColor: R.Z.ButtonColors.LINK,
                                        buttonLook: R.Z.ButtonLooks.LINK
                                    }), (0, r.jsx)("div", {
                                        className: v().subtext,
                                        children: y.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                                    })]
                                })
                            })
                        };
                        e.renderRequestSendGift = function() {
                            var t = e.props,
                                n = t.giftCode,
                                s = t.onClose,
                                i = t.giftMessageError;
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    className: v().blurb,
                                    children: e.headerBlurb
                                }), null == i && (0, r.jsx)(Y, {
                                    giftCode: n,
                                    onClose: s
                                }), (0, r.jsx)("div", {
                                    className: v().divider
                                }), e.renderGiftCodeSection()]
                            })
                        };
                        e.renderConfirmSentGift = function() {
                            var t = e.props.giftRecipient;
                            return (0,
                                r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(d.Z, {
                                    user: t,
                                    className: v().giftRecipient,
                                    size: l.AvatarSizes.SIZE_80
                                }), (0, r.jsx)(l.Heading, {
                                    className: v().giftRecipientName,
                                    variant: "heading-md/semibold",
                                    children: L.ZP.getName(t)
                                }), (0, r.jsxs)("div", {
                                    className: v().giftRecipientTag,
                                    children: [" ", L.ZP.getUserTag(t)]
                                }), (0, r.jsx)("div", {
                                    className: v().giftSentMessage,
                                    children: e.headerBlurb
                                })]
                            })
                        };
                        return e
                    }
                    var s = n.prototype;
                    s.componentWillUnmount = function() {
                        this._copyModeTimeout.stop()
                    };
                    s.render = function() {
                        var e, t, n = this.props,
                            s = n.application,
                            i = n.selectedGiftStyle,
                            a = n.hasSentMessage,
                            o = n.giftRecipient,
                            u = n.giftMessageError,
                            c = n.isSendingMessage;
                        e = (0, S.a8)(o) || a && null == u ? y.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != u ? y.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : y.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE;
                        t = c ? (0, r.jsx)(l.Spinner, {
                            type: l.SpinnerTypes.PULSING_ELLIPSIS
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(l.Heading, {
                                variant: "heading-lg/semibold",
                                className: null != i ? v().headerCustomGifting : v().header,
                                children: e
                            }), a && null != o && null == u || (0, S.a8)(o) ? this.renderConfirmSentGift() : this.renderRequestSendGift()]
                        });
                        return (0, r.jsxs)(A.Z, {
                            direction: A.Z.Direction.VERTICAL,
                            align: A.Z.Align.CENTER,
                            children: [null != s ? (0, r.jsx)(M.Z, {
                                game: s,
                                className: v().icon,
                                size: M.Z.Sizes.LARGE,
                                skuId: this.iconSKUId
                            }) : null, t]
                        })
                    };
                    ! function(e, t, n) {
                        t && j(e.prototype, t);
                        n && j(e, n)
                    }(n, [{
                        key: "iconSKUId",
                        get: function() {
                            var e = this.props,
                                t = e.subscriptionPlan,
                                n = e.sku;
                            return null != t ? t.skuId : null != n ? n.id : null
                        }
                    }, {
                        key: "headerBlurb",
                        get: function() {
                            var e = this.props,
                                t = e.subscriptionPlan,
                                n = e.hasSentMessage,
                                r = e.giftMessageError,
                                s = e.giftRecipient;
                            if (null != r) return y.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
                            if (null == t) return y.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_BLURB;
                            var i = n || null != s;
                            return (t.interval === h.rV.MONTH ? i ? y.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : y.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : i ? y.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : y.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                                skuName: (0, O.aq)(t.id),
                                intervalCount: t.intervalCount
                            })
                        }
                    }]);
                    return n
                }(s.Component),
                Y = function(e) {
                    var t = e.giftCode,
                        n = e.onClose;
                    s.useEffect((function() {
                        _.Z.fetchRelationships();
                        (0, I.W)()
                    }), []);
                    var i = H(s.useState(), 2),
                        u = i[0],
                        f = i[1],
                        E = H(s.useState(!1), 2),
                        N = E[0],
                        R = E[1],
                        A = H(s.useState(!1), 2),
                        M = A[0],
                        g = A[1],
                        S = (0, o.cj)([T.Z], (function() {
                            return {
                                userAffinities: T.Z.getUserAffinitiesUserIds(),
                                isLoading: T.Z.getFetching()
                            }
                        })),
                        O = S.userAffinities,
                        P = S.isLoading,
                        h = Array.from(O.values()),
                        b = (0, o.e7)([m.Z], (function() {
                            return m.Z.getFriendIDs()
                        })),
                        x = a().difference(b, h),
                        Z = D(h).concat(D(x)),
                        j = (0, o.e7)([C.default], (function() {
                            return C.default.filter((function(e) {
                                return Z.includes(e.id) && !e.bot
                            }))
                        }), [Z]);
                    if (null == j || 0 === j.length) return null;
                    var U = a().sortBy(j, (function(e) {
                        return Z.indexOf(e.id)
                    }));
                    return (0, r.jsxs)("div", {
                        className: v().giftRecipientSection,
                        children: [(0, r.jsx)(l.FormTitle, {
                            children: y.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
                        }), (0, r.jsxs)("div", {
                            className: v().giftRecipient,
                            children: [(0, r.jsx)(l.SearchableSelect, {
                                placeholder: y.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                                wrapperClassName: v().giftRecipientInputWrapper,
                                className: N ? v().giftRecipientInputError : void 0,
                                renderOptionPrefix: function(e) {
                                    return null == (null == e ? void 0 : e.value) ? null : (0, r.jsx)(d.Z, {
                                        user: e.value,
                                        size: l.AvatarSizes.SIZE_20
                                    })
                                },
                                renderLeading: function() {
                                    return P ? (0, r.jsx)(l.Spinner, {
                                        type: l.SpinnerTypes.PULSING_ELLIPSIS
                                    }) : null
                                },
                                value: u,
                                onChange: function(e) {
                                    f(e);
                                    R(!1)
                                },
                                options: U.map((function(e) {
                                    return {
                                        value: e,
                                        label: "".concat(L.ZP.getUserTag(e))
                                    }
                                }))
                            }), (0, r.jsx)(l.Button, {
                                disabled: null == u,
                                submitting: M,
                                className: v().sendToRecipientButton,
                                onClick: function() {
                                    g(!0);
                                    (0, p.YD)(u, t).then((function() {
                                        n();
                                        (0, c.Ou)()
                                    })).catch((function() {
                                        R(!0);
                                        g(!1)
                                    }))
                                },
                                children: y.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                            })]
                        }), (0, r.jsx)("div", {
                            className: N ? v().subtextError : v().subtext,
                            children: N ? y.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : y.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
                        })]
                    })
                };
            const V = o.ZP.connectStores([N.Z], (function() {
                return {
                    obscureGiftCode: N.Z.enabled
                }
            }))(W)
        },
        396546: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Ue
            });
            var r = n(785893),
                s = n(667294),
                i = n(294184),
                a = n.n(i),
                o = n(441143),
                u = n.n(o),
                l = n(496486),
                c = n.n(l),
                _ = n(498964),
                I = n(202351),
                f = n(575945),
                d = n(70418),
                p = n(744564),
                E = n(653224),
                m = n(396179),
                N = n(74535),
                T = n(316878),
                C = n(795470),
                R = n(22990),
                A = n(420881),
                M = n(166232),
                g = n(622902),
                S = n(736626),
                O = n(183490),
                L = n(76834),
                P = n(485552),
                h = n(567403),
                y = n(473903),
                b = n(775506),
                v = n(124251),
                x = n(535083),
                Z = n(217674),
                j = n(406493),
                U = n(98265),
                G = n(652591),
                F = n(775173),
                H = n(348592),
                D = n(310126),
                w = n(902954),
                B = n(668900),
                k = n(301162),
                W = n(203600),
                Y = n(2590),
                V = n(960412),
                K = n(473708),
                z = n(818673),
                X = n.n(z),
                Q = n(475772),
                J = n.n(Q),
                q = n(473958),
                $ = n.n(q),
                ee = n(34837),
                te = n.n(ee),
                ne = n(293714),
                re = n.n(ne),
                se = n(140914),
                ie = n.n(se),
                ae = n(11371),
                oe = n.n(ae),
                ue = n(452004),
                le = n.n(ue),
                ce = n(79388),
                _e = n.n(ce),
                Ie = n(381511),
                fe = n.n(Ie),
                de = n(561418),
                pe = n.n(de),
                Ee = n(190555),
                me = n.n(Ee);

            function Ne(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Te(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ce() {
                Ce = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                };
                return Ce.apply(this, arguments)
            }

            function Re(e, t) {
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

            function Ae(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, s, i = [],
                            a = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            s = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (o) throw s
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ne(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ne(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Me = D.ZP.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar,
                ge = {
                    boostItemVisual: ie(),
                    emojiStickersVisual: oe(),
                    screenShareItemVisual: pe(),
                    uploadsMessagesItemVisual: le(),
                    uploadsMessagesItemVisualV2: _e(),
                    PL: fe(),
                    TR: me()
                },
                Se = {
                    boostItemVisual: J(),
                    emojiStickersVisual: $(),
                    screenShareItemVisual: pe(),
                    uploadsMessagesItemVisual: te(),
                    uploadsMessagesItemVisualV2: re(),
                    PL: fe(),
                    TR: me()
                };

            function Oe() {
                var e = (0, N.ZP)();
                return (0, f.wj)(e) ? Se : ge
            }

            function Le(e) {
                var t = e.description,
                    n = e.onLearnMore,
                    s = e.renderVisual;
                return (0, r.jsxs)("div", {
                    className: X().whatYouLoseItem,
                    children: [(0, r.jsxs)("div", {
                        className: X().whatYouLoseItemLeftColumn,
                        children: [(0, r.jsx)(d.Text, {
                            variant: "text-md/normal",
                            children: t
                        }), (0, r.jsx)(d.Button, {
                            look: d.Button.Looks.LINK,
                            color: d.Button.Colors.LINK,
                            size: d.Button.Sizes.NONE,
                            className: X().whatYouLoseItemLearnMore,
                            onClick: n,
                            children: K.Z.Messages.LEARN_MORE
                        })]
                    }), (0, r.jsx)("div", {
                        className: X().whatYouLoseItemRightColumn,
                        children: s()
                    })]
                })
            }

            function Pe(e) {
                var t = Ce({}, e),
                    n = (0, N.ZP)(),
                    i = s.useContext(P.f).profileTheme,
                    a = (0, C.O0)(Y.tPk.INTERACTIVE_ACTIVE, null != i ? i : n);
                return (0, r.jsx)(j.Z, Re(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            Te(e, t, n[t])
                        }))
                    }
                    return e
                }({}, t), {
                    color: a.hex
                }))
            }

            function he(e) {
                var t = e.currentUser,
                    n = e.premiumType,
                    s = e.onClose,
                    i = (0, O.Z)(t.id),
                    a = (0, I.e7)([T.Z], (function() {
                        return T.Z.useReducedMotion
                    })),
                    o = n === W.p9.TIER_1,
                    u = (0, _.EQ)(null == i ? void 0 : i.premiumType).with(W.p9.TIER_2, (function() {
                        return (0, r.jsxs)(P.Z, {
                            forceShowPremium: !0,
                            user: t,
                            profileType: V.y0.CANCEL_MODAL,
                            className: X().profileCard,
                            children: [(0, r.jsx)("div", {
                                className: X().profileBanner,
                                children: (0, r.jsx)(L.Z, {
                                    displayProfile: i,
                                    user: t,
                                    allowEdit: !1,
                                    profileType: V.y0.CANCEL_MODAL
                                })
                            }), (0, r.jsx)(Me, {
                                className: X().profileAvatar,
                                src: t.getAvatarURL(void 0, (0, d.getAvatarSize)(d.AvatarSizes.SIZE_56), !a),
                                size: d.AvatarSizes.SIZE_56,
                                "aria-label": t.username
                            }), (0, r.jsx)(P.Z.Inner, {
                                className: X().profileInner,
                                children: (0, r.jsxs)("div", {
                                    className: X().profileUserInfo,
                                    children: [(0, r.jsx)(x.Z, {
                                        className: X().profileNameTag,
                                        usernameClass: X().profileNameTagUsername,
                                        name: t.toString()
                                    }), (0, r.jsx)(Pe, {
                                        className: X().profilePremiumIcon
                                    })]
                                })
                            })]
                        })
                    })).otherwise((function() {
                        return (0, r.jsxs)("div", {
                            className: X().profileCardTier1,
                            children: [(0, r.jsx)(Me, {
                                className: X().profileAvatarTier1,
                                src: t.getAvatarURL(void 0, (0, d.getAvatarSize)(d.AvatarSizes.SIZE_56), !a),
                                size: d.AvatarSizes.SIZE_56,
                                "aria-label": t.username
                            }), (0, r.jsxs)("div", {
                                className: X().profileUserInfoTier1,
                                children: [(0, r.jsx)(x.Z, {
                                    className: X().profileNameTag,
                                    usernameClass: X().profileNameTagUsername,
                                    name: t.toString()
                                }), (0, r.jsx)(j.Z, {
                                    className: X().profilePremiumIcon
                                })]
                            })]
                        })
                    }));
                return (0, r.jsx)(Le, {
                    description: o ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE.format(),
                    onLearnMore: function() {
                        s();
                        m.Z.open(Y.oAB.PROFILE_CUSTOMIZATION);
                        G.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "user_profile_customization"
                        })
                    },
                    renderVisual: function() {
                        return u
                    }
                }, "profile-item")
            }

            function ye(e) {
                var t = e.premiumType,
                    n = (0, I.e7)([T.Z], (function() {
                        return T.Z.useReducedMotion
                    })),
                    s = (0, R.wC)(null).filter((function(e) {
                        return e.type === A.B.GUILD && (e.animated || null != e.guildId)
                    })).slice(0, 3),
                    i = (0, I.Wu)([M.Z], (function() {
                        return M.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - s.length)
                    })),
                    a = Oe().emojiStickersVisual,
                    o = t === W.p9.TIER_1;
                return (0, r.jsx)(Le, {
                    description: o ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS.format(),
                    onLearnMore: function() {
                        window.open(H.Z.getArticleURL(Y.BhN.PREMIUM_DETAILS));
                        G.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "emojis_stickers"
                        })
                    },
                    renderVisual: function() {
                        return null != s && s.length > 0 || !o && null != i && i.length > 0 ? (0, r.jsxs)("div", {
                            className: X().emojiStickersPersonalizedContainer,
                            children: [s.map((function(e) {
                                return null == e.id ? e.url : F.ZP.getEmojiURL({
                                    id: e.id,
                                    animated: !n && e.animated,
                                    size: 58
                                })
                            })).map((function(e) {
                                return null != e ? (0, r.jsx)("img", {
                                    className: X().personalizedEmoji,
                                    alt: "",
                                    src: e
                                }) : null
                            })), o ? null : i.map((function(e) {
                                return (0, r.jsx)(g.ZP, {
                                    disableAnimation: n,
                                    sticker: e,
                                    size: 58,
                                    withLoadingIndicator: !1
                                }, e.id)
                            }))]
                        }) : (0, r.jsx)("img", {
                            className: X().nonPersonalizedGraphic,
                            alt: "",
                            src: a
                        })
                    }
                }, "emoji-stickers-item")
            }

            function be(e) {
                var t = e.premiumType,
                    n = e.onClose;
                s.useEffect((function() {
                    return p.Z.wait((function() {
                        return (0, E.X8)()
                    }))
                }), []);
                var i = (0, I.e7)([T.Z], (function() {
                        return T.Z.useReducedMotion
                    })),
                    o = Ae((0, I.Wu)([b.Z, h.Z], (function() {
                        var e = b.Z.boostSlots,
                            t = new Map;
                        c()(e).map("premiumGuildSubscription").map("guildId").forEach((function(e) {
                            if (null != h.Z.getGuild(e)) {
                                var n, r = null !== (n = t.get(e)) && void 0 !== n ? n : 0;
                                t.set(e, r + 1)
                            }
                        }));
                        var n = null,
                            r = 0;
                        if (t.size > 0) {
                            var s;
                            n = (s = Ae(Array.from(t.entries()).reduce((function(e, t) {
                                return t[1] > e[1] ? t : e
                            })), 2))[0], r = s[1]
                        }
                        return [h.Z.getGuild(n), r]
                    })), 2),
                    u = o[0],
                    l = o[1],
                    _ = null != u && l > 0,
                    f = Oe().boostItemVisual;
                return (0, r.jsx)(Le, {
                    description: t === W.p9.TIER_1 ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS.format(),
                    onLearnMore: function() {
                        n();
                        m.Z.open(Y.oAB.GUILD_BOOSTING);
                        G.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "boosts"
                        })
                    },
                    renderVisual: function() {
                        return _ ? (0, r.jsx)("div", {
                            className: X().boostCardContainer,
                            children: (0, r.jsxs)("div", {
                                className: X().boostCard,
                                children: [(0, r.jsx)(v.Z, {
                                    guild: u,
                                    size: v.Z.Sizes.MEDIUM,
                                    animate: !i,
                                    className: X().boostCardIcon
                                }), (0, r.jsxs)("div", {
                                    className: X().boostCardInfo,
                                    children: [(0, r.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        className: a()(X().textSingleLineEllipsis, X().boostCardTitle),
                                        children: u.name
                                    }), (0, r.jsxs)("div", {
                                        className: X().boostCardSubtitle,
                                        children: [(0, r.jsx)(Z.Z, {
                                            className: X().boostCardGem
                                        }), (0, r.jsx)(d.Text, {
                                            variant: "text-xs/normal",
                                            className: a()(X().textSingleLineEllipsis, X().boostCardCount),
                                            children: K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_APPLIED.format({
                                                boostCount: l
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }) : (0, r.jsx)("img", {
                            alt: "",
                            src: f
                        })
                    }
                }, "boost-item")
            }
            var ve = function() {
                var e = Oe().screenShareItemVisual;
                return (0, r.jsx)(Le, {
                    description: K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SCREENSHARE.format(),
                    onLearnMore: function() {
                        window.open(H.Z.getArticleURL(Y.BhN.STREAM_QUALITY_SETTINGS));
                        G.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "screen_share"
                        })
                    },
                    renderVisual: function() {
                        return (0, r.jsx)("img", {
                            alt: "",
                            src: e
                        })
                    }
                }, "screen-share-item")
            };

            function xe(e) {
                var t = e.premiumType,
                    n = Oe().uploadsMessagesItemVisual;
                return (0, r.jsx)(Le, {
                    description: t === W.p9.TIER_2 ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES_TIER_1.format(),
                    onLearnMore: function() {
                        window.open(H.Z.getArticleURL(Y.BhN.PREMIUM_DETAILS));
                        G.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "msgs_uploads"
                        })
                    },
                    renderVisual: function() {
                        return (0, r.jsx)("img", {
                            alt: "",
                            src: n
                        })
                    }
                }, "uploads-item")
            }
            var Ze = function(e) {
                var t = e.country,
                    n = Oe(),
                    s = "PL" === t ? n.PL : n.TR;
                return (0, r.jsx)(Le, {
                    description: ("PL" === t ? K.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK : K.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK).format(),
                    onLearnMore: function() {
                        window.open(H.Z.getArticleURL(Y.BhN.LOCALIZED_PRICING));
                        G.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "grandfathered_prices"
                        })
                    },
                    renderVisual: function() {
                        return (0, r.jsx)("img", {
                            alt: "",
                            src: s
                        })
                    }
                }, "grandfathered-prices-item")
            };

            function je(e) {
                var t = e.currentUser,
                    n = e.premiumType,
                    i = e.onClose,
                    a = e.isDowngrade,
                    o = void 0 !== a && a,
                    l = (0, w.Z)(),
                    c = (0, B.U)(),
                    _ = s.useMemo((function() {
                        var e = [];
                        if (c) {
                            u()(null != l, "Subscription billing country should not be null");
                            e.push((0, r.jsx)(Ze, {
                                country: l
                            }))
                        }
                        switch (n) {
                            case W.p9.TIER_0:
                                e.push((0, r.jsx)(ye, {
                                    premiumType: n
                                }), (0, r.jsx)(xe, {
                                    premiumType: n
                                }));
                                break;
                            case W.p9.TIER_1:
                                o ? e.push((0, r.jsx)(he, {
                                    currentUser: t,
                                    premiumType: n,
                                    onClose: i
                                }), (0, r.jsx)(ve, {}), (0, r.jsx)(be, {
                                    premiumType: n,
                                    onClose: i
                                })) : e.push((0, r.jsx)(he, {
                                    currentUser: t,
                                    premiumType: n,
                                    onClose: i
                                }), (0, r.jsx)(ye, {
                                    premiumType: n
                                }), (0, r.jsx)(ve, {}), (0, r.jsx)(xe, {
                                    premiumType: n
                                }), (0, r.jsx)(be, {
                                    premiumType: n,
                                    onClose: i
                                }));
                                break;
                            case W.p9.TIER_2:
                                o ? e.push((0, r.jsx)(he, {
                                    currentUser: t,
                                    premiumType: n,
                                    onClose: i
                                }), (0, r.jsx)(be, {
                                    premiumType: n,
                                    onClose: i
                                }), (0, r.jsx)(ve, {})) : e.push((0, r.jsx)(he, {
                                    currentUser: t,
                                    premiumType: n,
                                    onClose: i
                                }), (0, r.jsx)(ye, {
                                    premiumType: n
                                }), (0, r.jsx)(be, {
                                    premiumType: n,
                                    onClose: i
                                }), (0, r.jsx)(ve, {}), (0, r.jsx)(xe, {
                                    premiumType: n
                                }))
                        }
                        return e
                    }), [n, t, i, o, c, l]);
                return (0, r.jsx)("div", {
                    className: X().whatYouLoseItemContainer,
                    children: _
                })
            }
            const Ue = function(e) {
                var t = e.premiumType,
                    n = e.titleText,
                    i = e.subtitleText,
                    a = e.footer,
                    o = e.stickyFooter,
                    l = e.onClose,
                    c = e.isDowngrade,
                    _ = void 0 !== c && c,
                    f = (0, I.e7)([y.default], (function() {
                        var e = y.default.getCurrentUser();
                        u()(null != e, "ProfileItem: currentUser cannot be undefined");
                        return e
                    }));
                s.useEffect((function() {
                    (0, S.Z)(f.id, f.getAvatarURL(null, 80))
                }), [f]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(k.Z, {
                        premiumType: t,
                        onClose: l
                    }), (0,
                        r.jsxs)(d.ModalContent, {
                        className: X().body,
                        children: [(0, r.jsx)(U.Z, {
                            size: U.Z.Sizes.SIZE_24,
                            className: X().title,
                            children: n
                        }), (0, r.jsx)(d.Text, {
                            variant: "text-md/normal",
                            className: X().subtitle,
                            children: i
                        }), (0, r.jsx)(je, {
                            currentUser: f,
                            premiumType: t,
                            onClose: l,
                            isDowngrade: _
                        }), !o && a]
                    }), o && (0, r.jsx)(d.ModalFooter, {
                        children: a
                    })]
                })
            }
        },
        637700: (e, t, n) => {
            "use strict";
            n.d(t, {
                T: () => O,
                Z: () => S
            });
            var r = n(785893),
                s = n(667294),
                i = n(441143),
                a = n.n(i),
                o = n(202351),
                u = n(70418),
                l = n(315804),
                c = n(934869),
                _ = n(782786),
                I = n(449852),
                f = n(551778),
                d = n(746974),
                p = n(116094),
                E = n(671687),
                m = n(203600),
                N = n(2590),
                T = n(473708),
                C = n(618941),
                R = n.n(C);

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function M(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, s, i = [],
                            a = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            s = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (o) throw s
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return A(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e) {
                var t, n, s, i = e.planId,
                    u = e.startingPremiumSubscriptionPlanId,
                    l = e.paymentSourceType,
                    c = M((0, o.Wu)([f.Z], (function() {
                        return [f.Z.get(u), f.Z.get(i)]
                    })), 2),
                    _ = c[0],
                    I = c[1];
                a()(null != _ && null != I, "Missing startingPlan or newPlan");
                if (n = u, s = i, m.Y1.indexOf(n) < m.Y1.indexOf(s)) switch (i) {
                        case m.Xh.PREMIUM_MONTH_TIER_1:
                            t = T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
                            N.X7u.has(null != l ? l : N.HeQ.UNKNOWN) && (t = T.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
                            break;
                        case m.Xh.PREMIUM_MONTH_TIER_2:
                            t = T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH;
                            N.X7u.has(null != l ? l : N.HeQ.UNKNOWN) && (t = T.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
                            break;
                        case m.Xh.PREMIUM_YEAR_TIER_1:
                            t = T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR;
                            N.X7u.has(null != l ? l : N.HeQ.UNKNOWN) && (t = T.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
                            break;
                        case m.Xh.PREMIUM_YEAR_TIER_2:
                            t = T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
                                numFreeGuildSubscriptions: m.cb
                            });
                            N.X7u.has(null != l ? l : N.HeQ.UNKNOWN) && (t = T.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
                                numFreeGuildSubscriptions: m.cb
                            }));
                            break;
                        case m.Xh.PREMIUM_3_MONTH_TIER_2:
                        case m.Xh.PREMIUM_6_MONTH_TIER_2:
                            t = T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
                            break;
                        case m.Xh.PREMIUM_MONTH_TIER_0:
                        case m.Xh.PREMIUM_YEAR_TIER_0:
                            t = T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                            break;
                        default:
                            throw new Error("Unexpected planId: ".concat(i))
                    } else if (_.skuId === m.Si.TIER_2 && I.skuId === m.Si.TIER_1) t = T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
                    else switch (I.skuId) {
                        case m.Si.TIER_0:
                            t = T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                            break;
                        case m.Si.TIER_1:
                            t = T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
                            break;
                        case m.Si.TIER_2:
                            t = 1 !== _.intervalCount ? T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
                            break;
                        default:
                            throw new Error("Unexpected skuId: ".concat(I.skuId))
                    }
                return (0, r.jsx)("div", {
                    className: R().text,
                    children: t
                })
            }

            function S(e) {
                var t, n = e.planId,
                    i = e.enableNoPaymentTrial,
                    c = e.startingPremiumSubscriptionPlanId,
                    _ = e.onClose,
                    I = e.followupSKUInfo,
                    C = e.isDowngrade,
                    A = e.hideClose,
                    M = e.postSuccessGuild,
                    S = e.paymentSourceType,
                    O = (0, u.useThemeContext)().theme,
                    L = (0,
                        o.e7)([d.Z], (function() {
                        return null != I ? d.Z.get(I.id) : null
                    }));
                s.useEffect((function() {
                    if (null != I && null == L) {
                        var e = I.applicationId,
                            t = I.id;
                        (0, l.jU)(e, t).catch(N.VqG)
                    }
                }), [I, L]);
                var P = function(e) {
                    return e.skuId === m.Si.TIER_0 ? N.X7u.has(null != S ? S : N.HeQ.UNKNOWN) ? T.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0 : e.skuId === m.Si.TIER_1 ? N.X7u.has(null != S ? S : N.HeQ.UNKNOWN) ? T.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1 : N.X7u.has(null != S ? S : N.HeQ.UNKNOWN) ? T.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : i ? T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
                };
                if (null != L) t = (0, r.jsx)("div", {
                    className: R().text,
                    children: T.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
                        skuName: L.name
                    })
                });
                else if (null != c) t = (0, r.jsx)(g, {
                    planId: n,
                    startingPremiumSubscriptionPlanId: c
                });
                else if (null != M) {
                    var h = f.Z.get(n);
                    a()(null != h, "Missing plan");
                    t = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: R().text,
                            children: P(h)
                        }), (0, r.jsx)("div", {
                            className: R().text,
                            children: T.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
                                guildName: M.name
                            })
                        })]
                    })
                } else {
                    var y = f.Z.get(n);
                    a()(null != y, "Missing plan");
                    t = (0, r.jsx)("div", {
                        className: R().text,
                        children: P(y)
                    })
                }
                var b, v = p.ZP.getPremiumType(n);
                a()(null != v, "premium type should not be null in purchase confirmation");
                b = null != L ? T.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
                    skuName: L.name
                }) : C ? T.Z.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != M ? T.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : T.Z.Messages.PREMIUM_UPGRADE_DONE_BUTTON;
                return (0, r.jsxs)("div", {
                    className: R().confirmation,
                    children: [(0, r.jsx)(E.C, {
                        className: R().banner,
                        theme: O,
                        premiumType: v,
                        type: N.X7u.has(null != S ? S : N.HeQ.UNKNOWN) ? E.C.Types.PREMIUM_PAYMENT_STARTED : null != c ? E.C.Types.PREMIUM_UPDATED : E.C.Types.PREMIUM_ACTIVATED
                    }), t, A ? null : (0, r.jsx)(u.Button, {
                        onClick: _,
                        children: b
                    })]
                })
            }

            function O(e) {
                var t = e.planId,
                    n = e.selectedGiftStyle,
                    s = e.onClose,
                    i = e.hasSentMessage,
                    u = e.giftMessageError,
                    l = e.isSendingMessage,
                    d = (0, _.usePaymentContext)().giftRecipient,
                    p = (0, o.e7)([f.Z], (function() {
                        return f.Z.get(t)
                    }));
                a()(null != p, "Missing plan");
                var E = (0, o.e7)([I.Z], (function() {
                    return I.Z.getGiftCode(p.skuId)
                }));
                return (0, r.jsx)(c.Z, {
                    giftCode: E,
                    subscriptionPlan: p,
                    onClose: s,
                    selectedGiftStyle: n,
                    hasSentMessage: i,
                    giftRecipient: d,
                    giftMessageError: u,
                    isSendingMessage: l
                })
            }
        }
    }
]);