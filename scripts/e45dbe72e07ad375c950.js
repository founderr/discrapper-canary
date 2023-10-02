(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [513], {
        475772: (e, t, r) => {
            e.exports = r.p + "e61bfff1a364621603633d99d2f29f9d.svg"
        },
        473958: (e, t, r) => {
            e.exports = r.p + "e9b7e8263689da11886b9b9c9fc9aef1.svg"
        },
        34837: (e, t, r) => {
            e.exports = r.p + "f3b288c47e9e1de44dd734bb7611c1e4.svg"
        },
        293714: (e, t, r) => {
            e.exports = r.p + "01f1ebdffe8444d968a146d41d5dc2fc.svg"
        },
        140914: (e, t, r) => {
            e.exports = r.p + "94aef594b95ade8d06e7352d12f46305.svg"
        },
        11371: (e, t, r) => {
            e.exports = r.p + "0451500560abfa448183f0e8449e16f0.svg"
        },
        452004: (e, t, r) => {
            e.exports = r.p + "ad0f83d2caba179082a0b279f60736d0.svg"
        },
        79388: (e, t, r) => {
            e.exports = r.p + "30e68910bd70527f2074a0df0779206f.svg"
        },
        381511: (e, t, r) => {
            e.exports = r.p + "4478068f751e2049708b077226c4c2dc.svg"
        },
        561418: (e, t, r) => {
            e.exports = r.p + "223cd9663ce71bcb429e286b4eaed049.svg"
        },
        190555: (e, t, r) => {
            e.exports = r.p + "074e77dd9b5f48195fd402d5a04cb3ce.svg"
        },
        934869: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => V
            });
            var a = r(785893),
                n = r(667294),
                s = r(496486),
                i = r.n(s),
                o = r(202351),
                l = r(513328),
                c = r(304548),
                u = r(735885),
                _ = r(560923),
                f = r(758635),
                I = r(396179),
                h = r(657539),
                d = r(467345),
                p = r(543976),
                m = r(840922),
                E = r(793461),
                T = r(239734),
                C = r(473903),
                A = r(459940),
                M = r(107364),
                N = r(750203),
                R = r(691797),
                g = r(644144),
                L = r(694329),
                O = r(749565),
                P = r(2590),
                S = r(203600),
                v = r(473708),
                y = r(5759),
                Z = r.n(y);

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }

            function b(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function j(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var a = t[r];
                    a.enumerable = a.enumerable || !1;
                    a.configurable = !0;
                    "value" in a && (a.writable = !0);
                    Object.defineProperty(e, a.key, a)
                }
            }

            function U(e) {
                U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return U(e)
            }

            function H(e, t) {
                return !t || "object" !== B(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function D(e, t) {
                D = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return D(e, t)
            }

            function w(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var a, n, s = [],
                            i = !0,
                            o = !1;
                        try {
                            for (r = r.call(e); !(i = (a = r.next()).done); i = !0) {
                                s.push(a.value);
                                if (t && s.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            n = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (o) throw n
                            }
                        }
                        return s
                    }
                }(e, t) || F(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function G(e) {
                return function(e) {
                    if (Array.isArray(e)) return x(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || F(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var B = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function F(e, t) {
                if (e) {
                    if ("string" == typeof e) return x(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    return "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? x(e, t) : void 0
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
                    var r, a = U(e);
                    if (t) {
                        var n = U(this).constructor;
                        r = Reflect.construct(a, arguments, n)
                    } else r = a.apply(this, arguments);
                    return H(this, r)
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
                        t && D(e, t)
                    }(r, e);
                    var t = k(r);

                    function r() {
                        b(this, r);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            copyMode: A.Z.Modes.DEFAULT
                        };
                        e._copyModeTimeout = new l.V7;
                        e.handleGiftCodeCopy = function(t, r) {
                            var a = e.props.sku;
                            null != a && (0, g.dM)(new p.Z({
                                code: r,
                                maxUses: 1
                            }), a);
                            try {
                                (0, R.JG)(t);
                                e.setState({
                                    copyMode: A.Z.Modes.SUCCESS
                                })
                            } catch (t) {
                                e.setState({
                                    copyMode: A.Z.Modes.ERROR
                                })
                            }
                            e._copyModeTimeout.start(1500, (function() {
                                e.setState({
                                    copyMode: A.Z.Modes.DEFAULT
                                })
                            }))
                        };
                        e.handleInventoryClick = function() {
                            I.Z.open(P.oAB.INVENTORY);
                            e.props.onClose()
                        };
                        e.renderGiftCodeSection = function() {
                            var t = e.props,
                                r = t.obscureGiftCode,
                                n = t.giftCode;
                            if (null == n) return null;
                            var s, i = e.state.copyMode;
                            switch (i) {
                                case A.Z.Modes.SUCCESS:
                                    s = v.Z.Messages.BILLING_GIFT_COPIED;
                                    break;
                                case A.Z.Modes.ERROR:
                                    s = v.Z.Messages.FAILED;
                                    break;
                                default:
                                    s = v.Z.Messages.COPY
                            }
                            return (0, a.jsx)(M.Z, {
                                direction: M.Z.Direction.VERTICAL,
                                children: (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(c.FormTitle, {
                                        children: v.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
                                    }), null != n && (0, a.jsx)(A.Z, {
                                        hideMessage: r ? v.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
                                        value: (0, g.Nz)(n),
                                        mode: i,
                                        text: s,
                                        onCopy: function(t) {
                                            return e.handleGiftCodeCopy(t, n)
                                        },
                                        supportsCopy: R.wS,
                                        className: Z().copyInput,
                                        buttonColor: A.Z.ButtonColors.LINK,
                                        buttonLook: A.Z.ButtonLooks.LINK
                                    }), (0, a.jsx)("div", {
                                        className: Z().subtext,
                                        children: v.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                                    })]
                                })
                            })
                        };
                        e.renderRequestSendGift = function() {
                            var t = e.props,
                                r = t.giftCode,
                                n = t.onClose,
                                s = t.giftMessageError;
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: Z().blurb,
                                    children: e.headerBlurb
                                }), null == s && (0, a.jsx)(Y, {
                                    giftCode: r,
                                    onClose: n
                                }), (0, a.jsx)("div", {
                                    className: Z().divider
                                }), e.renderGiftCodeSection()]
                            })
                        };
                        e.renderConfirmSentGift = function() {
                            var t = e.props.giftRecipient;
                            return (0,
                                a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(h.Z, {
                                    user: t,
                                    className: Z().giftRecipient,
                                    size: c.AvatarSizes.SIZE_80
                                }), (0, a.jsx)(c.Heading, {
                                    className: Z().giftRecipientName,
                                    variant: "heading-md/semibold",
                                    children: O.ZP.getName(t)
                                }), (0, a.jsxs)("div", {
                                    className: Z().giftRecipientTag,
                                    children: [" ", O.ZP.getUserTag(t)]
                                }), (0, a.jsx)("div", {
                                    className: Z().giftSentMessage,
                                    children: e.headerBlurb
                                })]
                            })
                        };
                        return e
                    }
                    var n = r.prototype;
                    n.componentWillUnmount = function() {
                        this._copyModeTimeout.stop()
                    };
                    n.render = function() {
                        var e, t, r = this.props,
                            n = r.application,
                            s = r.selectedGiftStyle,
                            i = r.hasSentMessage,
                            o = r.giftRecipient,
                            l = r.giftMessageError,
                            u = r.isSendingMessage;
                        e = (0, g.a8)(o) ? "" : i && null == l ? v.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != l ? v.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : v.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE;
                        t = u ? (0, a.jsx)(c.Spinner, {
                            type: c.SpinnerTypes.PULSING_ELLIPSIS
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(c.Heading, {
                                variant: "heading-lg/semibold",
                                className: null != s ? Z().headerCustomGifting : Z().header,
                                children: e
                            }), i && null != o && null == l || (0, g.a8)(o) ? this.renderConfirmSentGift() : this.renderRequestSendGift()]
                        });
                        return (0, a.jsxs)(M.Z, {
                            direction: M.Z.Direction.VERTICAL,
                            align: M.Z.Align.CENTER,
                            children: [null != n ? (0, a.jsx)(N.Z, {
                                game: n,
                                className: Z().icon,
                                size: N.Z.Sizes.LARGE,
                                skuId: this.iconSKUId
                            }) : null, t]
                        })
                    };
                    ! function(e, t, r) {
                        t && j(e.prototype, t);
                        r && j(e, r)
                    }(r, [{
                        key: "iconSKUId",
                        get: function() {
                            var e = this.props,
                                t = e.subscriptionPlan,
                                r = e.sku;
                            return null != t ? t.skuId : null != r ? r.id : null
                        }
                    }, {
                        key: "headerBlurb",
                        get: function() {
                            var e = this.props,
                                t = e.subscriptionPlan,
                                r = e.hasSentMessage,
                                a = e.giftMessageError,
                                n = e.giftRecipient;
                            if (null != a) return v.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
                            if (null == t) return v.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_BLURB;
                            var s = r || null != n;
                            return (t.interval === S.rV.MONTH ? s ? v.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : v.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : s ? v.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : v.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                                skuName: (0, L.aq)(t.id),
                                intervalCount: t.intervalCount
                            })
                        }
                    }]);
                    return r
                }(n.Component),
                Y = function(e) {
                    var t = e.giftCode,
                        r = e.onClose;
                    n.useEffect((function() {
                        _.Z.fetchRelationships();
                        (0, f.W)()
                    }), []);
                    var s = w(n.useState(), 2),
                        l = s[0],
                        I = s[1],
                        p = w(n.useState(!1), 2),
                        E = p[0],
                        A = p[1],
                        M = w(n.useState(!1), 2),
                        N = M[0],
                        R = M[1],
                        g = (0, o.cj)([T.Z], (function() {
                            return {
                                userAffinities: T.Z.getUserAffinitiesUserIds(),
                                isLoading: T.Z.getFetching()
                            }
                        })),
                        L = g.userAffinities,
                        P = g.isLoading,
                        S = Array.from(L.values()),
                        y = (0, o.e7)([m.Z], (function() {
                            return m.Z.getFriendIDs()
                        })),
                        x = i().difference(y, S),
                        b = G(S).concat(G(x)),
                        j = (0, o.e7)([C.default], (function() {
                            return C.default.filter((function(e) {
                                return b.includes(e.id) && !e.bot
                            }))
                        }), [b]);
                    if (null == j || 0 === j.length) return null;
                    var U = i().sortBy(j, (function(e) {
                        return b.indexOf(e.id)
                    }));
                    return (0, a.jsxs)("div", {
                        className: Z().giftRecipientSection,
                        children: [(0, a.jsx)(c.FormTitle, {
                            children: v.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
                        }), (0, a.jsxs)("div", {
                            className: Z().giftRecipient,
                            children: [(0, a.jsx)(c.SearchableSelect, {
                                placeholder: v.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                                wrapperClassName: Z().giftRecipientInputWrapper,
                                className: E ? Z().giftRecipientInputError : void 0,
                                renderOptionPrefix: function(e) {
                                    return null == (null == e ? void 0 : e.value) ? null : (0, a.jsx)(h.Z, {
                                        user: e.value,
                                        size: c.AvatarSizes.SIZE_20
                                    })
                                },
                                renderLeading: function() {
                                    return P ? (0, a.jsx)(c.Spinner, {
                                        type: c.SpinnerTypes.PULSING_ELLIPSIS
                                    }) : null
                                },
                                value: l,
                                onChange: function(e) {
                                    I(e);
                                    A(!1)
                                },
                                options: U.map((function(e) {
                                    return {
                                        value: e,
                                        label: "".concat(O.ZP.getUserTag(e))
                                    }
                                }))
                            }), (0, a.jsx)(c.Button, {
                                disabled: null == l,
                                submitting: N,
                                className: Z().sendToRecipientButton,
                                onClick: function() {
                                    R(!0);
                                    (0, d.YD)(l, t).then((function() {
                                        r();
                                        (0, u.Ou)()
                                    })).catch((function() {
                                        A(!0);
                                        R(!1)
                                    }))
                                },
                                children: v.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                            })]
                        }), (0, a.jsx)("div", {
                            className: E ? Z().subtextError : Z().subtext,
                            children: E ? v.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : v.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
                        })]
                    })
                };
            const V = o.ZP.connectStores([E.Z], (function() {
                return {
                    obscureGiftCode: E.Z.enabled
                }
            }))(W)
        },
        396546: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => Ue
            });
            var a = r(785893),
                n = r(667294),
                s = r(294184),
                i = r.n(s),
                o = r(441143),
                l = r.n(o),
                c = r(496486),
                u = r.n(c),
                _ = r(498964),
                f = r(202351),
                I = r(575945),
                h = r(304548),
                d = r(744564),
                p = r(653224),
                m = r(396179),
                E = r(74535),
                T = r(316878),
                C = r(795470),
                A = r(22990),
                M = r(420881),
                N = r(166232),
                R = r(622902),
                g = r(736626),
                L = r(183490),
                O = r(76834),
                P = r(485552),
                S = r(567403),
                v = r(473903),
                y = r(775506),
                Z = r(124251),
                x = r(535083),
                b = r(217674),
                j = r(406493),
                U = r(98265),
                H = r(652591),
                D = r(775173),
                w = r(348592),
                G = r(310126),
                B = r(902954),
                F = r(668900),
                k = r(301162),
                W = r(203600),
                Y = r(2590),
                V = r(960412),
                K = r(473708),
                z = r(818673),
                X = r.n(z),
                Q = r(475772),
                J = r.n(Q),
                q = r(473958),
                $ = r.n(q),
                ee = r(34837),
                te = r.n(ee),
                re = r(293714),
                ae = r.n(re),
                ne = r(140914),
                se = r.n(ne),
                ie = r(11371),
                oe = r.n(ie),
                le = r(452004),
                ce = r.n(le),
                ue = r(79388),
                _e = r.n(ue),
                fe = r(381511),
                Ie = r.n(fe),
                he = r(561418),
                de = r.n(he),
                pe = r(190555),
                me = r.n(pe);

            function Ee(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }

            function Te(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function Ce() {
                Ce = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                };
                return Ce.apply(this, arguments)
            }

            function Ae(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, a)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function Me(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var a, n, s = [],
                            i = !0,
                            o = !1;
                        try {
                            for (r = r.call(e); !(i = (a = r.next()).done); i = !0) {
                                s.push(a.value);
                                if (t && s.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            n = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (o) throw n
                            }
                        }
                        return s
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ee(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ee(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ne = G.ZP.getEnableHardwareAcceleration() ? h.AnimatedAvatar : h.Avatar,
                Re = {
                    boostItemVisual: se(),
                    emojiStickersVisual: oe(),
                    screenShareItemVisual: de(),
                    uploadsMessagesItemVisual: ce(),
                    uploadsMessagesItemVisualV2: _e(),
                    PL: Ie(),
                    TR: me()
                },
                ge = {
                    boostItemVisual: J(),
                    emojiStickersVisual: $(),
                    screenShareItemVisual: de(),
                    uploadsMessagesItemVisual: te(),
                    uploadsMessagesItemVisualV2: ae(),
                    PL: Ie(),
                    TR: me()
                };

            function Le() {
                var e = (0, E.ZP)();
                return (0, I.wj)(e) ? ge : Re
            }

            function Oe(e) {
                var t = e.description,
                    r = e.onLearnMore,
                    n = e.renderVisual;
                return (0, a.jsxs)("div", {
                    className: X().whatYouLoseItem,
                    children: [(0, a.jsxs)("div", {
                        className: X().whatYouLoseItemLeftColumn,
                        children: [(0, a.jsx)(h.Text, {
                            variant: "text-md/normal",
                            children: t
                        }), (0, a.jsx)(h.Button, {
                            look: h.Button.Looks.LINK,
                            color: h.Button.Colors.LINK,
                            size: h.Button.Sizes.NONE,
                            className: X().whatYouLoseItemLearnMore,
                            onClick: r,
                            children: K.Z.Messages.LEARN_MORE
                        })]
                    }), (0, a.jsx)("div", {
                        className: X().whatYouLoseItemRightColumn,
                        children: n()
                    })]
                })
            }

            function Pe(e) {
                var t = Ce({}, e),
                    r = (0, E.ZP)(),
                    s = n.useContext(P.f).profileTheme,
                    i = (0, C.O0)(Y.tPk.INTERACTIVE_ACTIVE, null != s ? s : r);
                return (0, a.jsx)(j.Z, Ae(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        a.forEach((function(t) {
                            Te(e, t, r[t])
                        }))
                    }
                    return e
                }({}, t), {
                    color: i.hex
                }))
            }

            function Se(e) {
                var t = e.currentUser,
                    r = e.premiumType,
                    n = e.onClose,
                    s = (0, L.Z)(t.id),
                    i = (0, f.e7)([T.Z], (function() {
                        return T.Z.useReducedMotion
                    })),
                    o = r === W.p9.TIER_1,
                    l = (0, _.EQ)(null == s ? void 0 : s.premiumType).with(W.p9.TIER_2, (function() {
                        return (0, a.jsxs)(P.Z, {
                            forceShowPremium: !0,
                            user: t,
                            profileType: V.y0.CANCEL_MODAL,
                            className: X().profileCard,
                            children: [(0, a.jsx)("div", {
                                className: X().profileBanner,
                                children: (0, a.jsx)(O.Z, {
                                    displayProfile: s,
                                    user: t,
                                    allowEdit: !1,
                                    profileType: V.y0.CANCEL_MODAL
                                })
                            }), (0, a.jsx)(Ne, {
                                className: X().profileAvatar,
                                src: t.getAvatarURL(void 0, (0, h.getAvatarSize)(h.AvatarSizes.SIZE_56), !i),
                                size: h.AvatarSizes.SIZE_56,
                                "aria-label": t.username
                            }), (0, a.jsx)(P.Z.Inner, {
                                className: X().profileInner,
                                children: (0, a.jsxs)("div", {
                                    className: X().profileUserInfo,
                                    children: [(0, a.jsx)(x.Z, {
                                        className: X().profileNameTag,
                                        usernameClass: X().profileNameTagUsername,
                                        name: t.toString()
                                    }), (0, a.jsx)(Pe, {
                                        className: X().profilePremiumIcon
                                    })]
                                })
                            })]
                        })
                    })).otherwise((function() {
                        return (0, a.jsxs)("div", {
                            className: X().profileCardTier1,
                            children: [(0, a.jsx)(Ne, {
                                className: X().profileAvatarTier1,
                                src: t.getAvatarURL(void 0, (0, h.getAvatarSize)(h.AvatarSizes.SIZE_56), !i),
                                size: h.AvatarSizes.SIZE_56,
                                "aria-label": t.username
                            }), (0, a.jsxs)("div", {
                                className: X().profileUserInfoTier1,
                                children: [(0, a.jsx)(x.Z, {
                                    className: X().profileNameTag,
                                    usernameClass: X().profileNameTagUsername,
                                    name: t.toString()
                                }), (0, a.jsx)(j.Z, {
                                    className: X().profilePremiumIcon
                                })]
                            })]
                        })
                    }));
                return (0, a.jsx)(Oe, {
                    description: o ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE.format(),
                    onLearnMore: function() {
                        n();
                        m.Z.open(Y.oAB.PROFILE_CUSTOMIZATION);
                        H.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "user_profile_customization"
                        })
                    },
                    renderVisual: function() {
                        return l
                    }
                }, "profile-item")
            }

            function ve(e) {
                var t = e.premiumType,
                    r = (0, f.e7)([T.Z], (function() {
                        return T.Z.useReducedMotion
                    })),
                    n = (0, A.wC)(null).filter((function(e) {
                        return e.type === M.B.GUILD && (e.animated || null != e.guildId)
                    })).slice(0, 3),
                    s = (0, f.Wu)([N.Z], (function() {
                        return N.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)
                    })),
                    i = Le().emojiStickersVisual,
                    o = t === W.p9.TIER_1;
                return (0, a.jsx)(Oe, {
                    description: o ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS.format(),
                    onLearnMore: function() {
                        window.open(w.Z.getArticleURL(Y.BhN.PREMIUM_DETAILS));
                        H.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "emojis_stickers"
                        })
                    },
                    renderVisual: function() {
                        return null != n && n.length > 0 || !o && null != s && s.length > 0 ? (0, a.jsxs)("div", {
                            className: X().emojiStickersPersonalizedContainer,
                            children: [n.map((function(e) {
                                return null == e.id ? e.url : D.ZP.getEmojiURL({
                                    id: e.id,
                                    animated: !r && e.animated,
                                    size: 58
                                })
                            })).map((function(e) {
                                return null != e ? (0, a.jsx)("img", {
                                    className: X().personalizedEmoji,
                                    alt: "",
                                    src: e
                                }) : null
                            })), o ? null : s.map((function(e) {
                                return (0, a.jsx)(R.ZP, {
                                    disableAnimation: r,
                                    sticker: e,
                                    size: 58,
                                    withLoadingIndicator: !1
                                }, e.id)
                            }))]
                        }) : (0, a.jsx)("img", {
                            className: X().nonPersonalizedGraphic,
                            alt: "",
                            src: i
                        })
                    }
                }, "emoji-stickers-item")
            }

            function ye(e) {
                var t = e.premiumType,
                    r = e.onClose;
                n.useEffect((function() {
                    return d.Z.wait((function() {
                        return (0, p.X8)()
                    }))
                }), []);
                var s = (0, f.e7)([T.Z], (function() {
                        return T.Z.useReducedMotion
                    })),
                    o = Me((0, f.Wu)([y.Z, S.Z], (function() {
                        var e = y.Z.boostSlots,
                            t = new Map;
                        u()(e).map("premiumGuildSubscription").map("guildId").forEach((function(e) {
                            if (null != S.Z.getGuild(e)) {
                                var r, a = null !== (r = t.get(e)) && void 0 !== r ? r : 0;
                                t.set(e, a + 1)
                            }
                        }));
                        var r = null,
                            a = 0;
                        if (t.size > 0) {
                            var n;
                            r = (n = Me(Array.from(t.entries()).reduce((function(e, t) {
                                return t[1] > e[1] ? t : e
                            })), 2))[0], a = n[1]
                        }
                        return [S.Z.getGuild(r), a]
                    })), 2),
                    l = o[0],
                    c = o[1],
                    _ = null != l && c > 0,
                    I = Le().boostItemVisual;
                return (0, a.jsx)(Oe, {
                    description: t === W.p9.TIER_1 ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS.format(),
                    onLearnMore: function() {
                        r();
                        m.Z.open(Y.oAB.GUILD_BOOSTING);
                        H.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "boosts"
                        })
                    },
                    renderVisual: function() {
                        return _ ? (0, a.jsx)("div", {
                            className: X().boostCardContainer,
                            children: (0, a.jsxs)("div", {
                                className: X().boostCard,
                                children: [(0, a.jsx)(Z.Z, {
                                    guild: l,
                                    size: Z.Z.Sizes.MEDIUM,
                                    animate: !s,
                                    className: X().boostCardIcon
                                }), (0, a.jsxs)("div", {
                                    className: X().boostCardInfo,
                                    children: [(0, a.jsx)(h.Text, {
                                        variant: "text-md/normal",
                                        className: i()(X().textSingleLineEllipsis, X().boostCardTitle),
                                        children: l.name
                                    }), (0, a.jsxs)("div", {
                                        className: X().boostCardSubtitle,
                                        children: [(0, a.jsx)(b.Z, {
                                            className: X().boostCardGem
                                        }), (0, a.jsx)(h.Text, {
                                            variant: "text-xs/normal",
                                            className: i()(X().textSingleLineEllipsis, X().boostCardCount),
                                            children: K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_APPLIED.format({
                                                boostCount: c
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }) : (0, a.jsx)("img", {
                            alt: "",
                            src: I
                        })
                    }
                }, "boost-item")
            }
            var Ze = function() {
                var e = Le().screenShareItemVisual;
                return (0, a.jsx)(Oe, {
                    description: K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SCREENSHARE.format(),
                    onLearnMore: function() {
                        window.open(w.Z.getArticleURL(Y.BhN.STREAM_QUALITY_SETTINGS));
                        H.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "screen_share"
                        })
                    },
                    renderVisual: function() {
                        return (0, a.jsx)("img", {
                            alt: "",
                            src: e
                        })
                    }
                }, "screen-share-item")
            };

            function xe(e) {
                var t = e.premiumType,
                    r = Le().uploadsMessagesItemVisual;
                return (0, a.jsx)(Oe, {
                    description: t === W.p9.TIER_2 ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES_TIER_1.format(),
                    onLearnMore: function() {
                        window.open(w.Z.getArticleURL(Y.BhN.PREMIUM_DETAILS));
                        H.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "msgs_uploads"
                        })
                    },
                    renderVisual: function() {
                        return (0, a.jsx)("img", {
                            alt: "",
                            src: r
                        })
                    }
                }, "uploads-item")
            }
            var be = function(e) {
                var t = e.country,
                    r = Le(),
                    n = "PL" === t ? r.PL : r.TR;
                return (0, a.jsx)(Oe, {
                    description: ("PL" === t ? K.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK : K.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK).format(),
                    onLearnMore: function() {
                        window.open(w.Z.getArticleURL(Y.BhN.LOCALIZED_PRICING));
                        H.default.track(Y.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "grandfathered_prices"
                        })
                    },
                    renderVisual: function() {
                        return (0, a.jsx)("img", {
                            alt: "",
                            src: n
                        })
                    }
                }, "grandfathered-prices-item")
            };

            function je(e) {
                var t = e.currentUser,
                    r = e.premiumType,
                    s = e.onClose,
                    i = e.isDowngrade,
                    o = void 0 !== i && i,
                    c = (0, B.Z)(),
                    u = (0, F.U)(),
                    _ = n.useMemo((function() {
                        var e = [];
                        if (u) {
                            l()(null != c, "Subscription billing country should not be null");
                            e.push((0, a.jsx)(be, {
                                country: c
                            }))
                        }
                        switch (r) {
                            case W.p9.TIER_0:
                                e.push((0, a.jsx)(ve, {
                                    premiumType: r
                                }), (0, a.jsx)(xe, {
                                    premiumType: r
                                }));
                                break;
                            case W.p9.TIER_1:
                                o ? e.push((0, a.jsx)(Se, {
                                    currentUser: t,
                                    premiumType: r,
                                    onClose: s
                                }), (0, a.jsx)(Ze, {}), (0, a.jsx)(ye, {
                                    premiumType: r,
                                    onClose: s
                                })) : e.push((0, a.jsx)(Se, {
                                    currentUser: t,
                                    premiumType: r,
                                    onClose: s
                                }), (0, a.jsx)(ve, {
                                    premiumType: r
                                }), (0, a.jsx)(Ze, {}), (0, a.jsx)(xe, {
                                    premiumType: r
                                }), (0, a.jsx)(ye, {
                                    premiumType: r,
                                    onClose: s
                                }));
                                break;
                            case W.p9.TIER_2:
                                o ? e.push((0, a.jsx)(Se, {
                                    currentUser: t,
                                    premiumType: r,
                                    onClose: s
                                }), (0, a.jsx)(ye, {
                                    premiumType: r,
                                    onClose: s
                                }), (0, a.jsx)(Ze, {})) : e.push((0, a.jsx)(Se, {
                                    currentUser: t,
                                    premiumType: r,
                                    onClose: s
                                }), (0, a.jsx)(ve, {
                                    premiumType: r
                                }), (0, a.jsx)(ye, {
                                    premiumType: r,
                                    onClose: s
                                }), (0, a.jsx)(Ze, {}), (0, a.jsx)(xe, {
                                    premiumType: r
                                }))
                        }
                        return e
                    }), [r, t, s, o, u, c]);
                return (0, a.jsx)("div", {
                    className: X().whatYouLoseItemContainer,
                    children: _
                })
            }
            const Ue = function(e) {
                var t = e.premiumType,
                    r = e.titleText,
                    s = e.subtitleText,
                    i = e.footer,
                    o = e.stickyFooter,
                    c = e.onClose,
                    u = e.isDowngrade,
                    _ = void 0 !== u && u,
                    I = (0, f.e7)([v.default], (function() {
                        var e = v.default.getCurrentUser();
                        l()(null != e, "ProfileItem: currentUser cannot be undefined");
                        return e
                    }));
                n.useEffect((function() {
                    (0, g.Z)(I.id, I.getAvatarURL(null, 80))
                }), [I]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(k.Z, {
                        premiumType: t,
                        onClose: c
                    }), (0,
                        a.jsxs)(h.ModalContent, {
                        className: X().body,
                        children: [(0, a.jsx)(U.Z, {
                            size: U.Z.Sizes.SIZE_24,
                            className: X().title,
                            children: r
                        }), (0, a.jsx)(h.Text, {
                            variant: "text-md/normal",
                            className: X().subtitle,
                            children: s
                        }), (0, a.jsx)(je, {
                            currentUser: I,
                            premiumType: t,
                            onClose: c,
                            isDowngrade: _
                        }), !o && i]
                    }), o && (0, a.jsx)(h.ModalFooter, {
                        children: i
                    })]
                })
            }
        },
        671687: (e, t, r) => {
            "use strict";
            r.d(t, {
                C: () => y
            });
            var a = r(785893),
                n = r(667294),
                s = r(294184),
                i = r.n(s),
                o = r(853158),
                l = r(795308),
                c = r(575945),
                u = r(304548),
                _ = r(366007),
                f = r(709189),
                I = r(362660),
                h = r(203600),
                d = r(481141),
                p = r.n(d);

            function m(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function T(e) {
                T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return T(e)
            }

            function C(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, a)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function A(e, t) {
                if (null == e) return {};
                var r, a, n = function(e, t) {
                    if (null == e) return {};
                    var r, a, n = {},
                        s = Object.keys(e);
                    for (a = 0; a < s.length; a++) {
                        r = s[a];
                        t.indexOf(r) >= 0 || (n[r] = e[r])
                    }
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++) {
                        r = s[a];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                    }
                }
                return n
            }

            function M(e, t) {
                return !t || "object" !== L(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function N(e, t) {
                N = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return N(e, t)
            }
            var R, g, L = function(e) {
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
                    var r, a = T(e);
                    if (t) {
                        var n = T(this).constructor;
                        r = Reflect.construct(a, arguments, n)
                    } else r = a.apply(this, arguments);
                    return M(this, r)
                }
            }
            var P, S = Object.freeze({
                DURATION: (R = {}, E(R, h.p9.TIER_0, 1e3), E(R, h.p9.TIER_1, 1e3), E(R, h.p9.TIER_2, 1500), R),
                DELAY: (g = {}, E(g, h.p9.TIER_0, 400), E(g, h.p9.TIER_1, 400), E(g, h.p9.TIER_2, 2200), g),
                FLASH_TIME_PERCENT: .72,
                FLASH_DURATION_PERCENT: .08
            });
            ! function(e) {
                e.PREMIUM_ACTIVATED = "PREMIUM_ACTIVATED";
                e.PREMIUM_UPDATED = "PREMIUM_UPDATED";
                e.PREMIUM_UPGRADED = "PREMIUM_UPGRADED";
                e.GUILD_BOOST_APPLIED = "GUILD_BOOST_APPLIED";
                e.PREMIUM_PAYMENT_STARTED = "PREMIUM_PAYMENT_STARTED"
            }(P || (P = {}));
            var v = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && N(e, t)
                }(r, e);
                var t = O(r);

                function r() {
                    m(this, r);
                    var e;
                    (e = t.apply(this, arguments)).animation = new o.Z.Value(0);
                    return e
                }
                var n = r.prototype;
                n.componentDidMount = function() {
                    this.animate()
                };
                n.animate = function() {
                    var e = this.props.premiumType;
                    o.Z.timing(this.animation, {
                        toValue: 1,
                        delay: S.DELAY[e],
                        duration: S.DURATION[e]
                    }).start()
                };
                n.getContainerStyle = function() {
                    var e = this.props.flashColor,
                        t = S.FLASH_TIME_PERCENT,
                        r = S.FLASH_DURATION_PERCENT,
                        a = (0, I.Cj)(e, 0);
                    return {
                        backgroundColor: this.animation.interpolate({
                            inputRange: [0, t, t, t + r, 1],
                            outputRange: [a, a, e, e, a]
                        })
                    }
                };
                n.getShineStyle = function() {
                    return o.Z.accelerate({
                        transform: [{
                            translateX: this.animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["20%", "160%"]
                            })
                        }]
                    })
                };
                n.getSvgBorderGradientId = function() {
                    var e = this.props,
                        t = e.premiumType;
                    switch (e.type) {
                        case P.GUILD_BOOST_APPLIED:
                            return _.Rj.PREMIUM_GUILD;
                        case P.PREMIUM_ACTIVATED:
                        case P.PREMIUM_PAYMENT_STARTED:
                        case P.PREMIUM_UPGRADED:
                        case P.PREMIUM_UPDATED:
                            return t === h.p9.TIER_0 ? _.Rj.PREMIUM_TIER_0 : t === h.p9.TIER_1 ? _.Rj.PREMIUM_TIER_1 : _.Rj.PREMIUM_TIER_2;
                        default:
                            throw new Error("Unsupported ShineAnimation type specified")
                    }
                };
                n.renderSvgBorder = function() {
                    switch (this.props.type) {
                        case P.GUILD_BOOST_APPLIED:
                            return (0, a.jsx)("svg", {
                                className: p().svgBorder,
                                width: "304",
                                height: "48",
                                viewBox: "0 0 304 48",
                                children: (0, a.jsx)("rect", {
                                    x: "1",
                                    y: "1",
                                    fill: "none",
                                    width: "302",
                                    height: "46",
                                    rx: "8",
                                    stroke: "url(#".concat(this.getSvgBorderGradientId(), ")"),
                                    strokeWidth: "2"
                                })
                            });
                        case P.PREMIUM_PAYMENT_STARTED:
                            return (0, a.jsx)("svg", {
                                className: p().svgBorder,
                                width: "156",
                                height: "48",
                                viewBox: "0 0 156 48",
                                children: (0, a.jsx)("rect", {
                                    x: "1",
                                    y: "1",
                                    fill: "none",
                                    width: "154",
                                    height: "46",
                                    rx: "8",
                                    stroke: "url(#".concat(this.getSvgBorderGradientId(), ")"),
                                    strokeWidth: "2"
                                })
                            });
                        case P.PREMIUM_ACTIVATED:
                        case P.PREMIUM_UPGRADED:
                            return (0, a.jsx)("svg", {
                                className: p().svgBorder,
                                width: "298",
                                height: "48",
                                viewBox: "0 0 298 48",
                                children: (0, a.jsx)("rect", {
                                    x: "1",
                                    y: "1",
                                    fill: "none",
                                    width: "296",
                                    height: "46",
                                    rx: "8",
                                    stroke: "url(#".concat(this.getSvgBorderGradientId(), ")"),
                                    strokeWidth: "2"
                                })
                            });
                        case P.PREMIUM_UPDATED:
                            return (0, a.jsx)("svg", {
                                className: p().svgBorder,
                                width: "276",
                                height: "48",
                                viewBox: "0 0 276 48",
                                children: (0, a.jsx)("rect", {
                                    x: "1",
                                    y: "1",
                                    fill: "none",
                                    width: "274",
                                    height: "46",
                                    rx: "8",
                                    stroke: "url(#".concat(this.getSvgBorderGradientId(), ")"),
                                    strokeWidth: "2"
                                })
                            });
                        default:
                            return null
                    }
                };
                n.renderSvgCopy = function() {
                    switch (this.props.type) {
                        case P.GUILD_BOOST_APPLIED:
                            return (0, a.jsx)("svg", {
                                className: p().svgCopy,
                                width: "304",
                                height: "48",
                                viewBox: "0 0 304 48",
                                children: (0, a.jsxs)("g", {
                                    fill: "currentColor",
                                    children: [(0, a.jsx)("path", {
                                        d: "M50.61,20.21a3.57,3.57,0,0,1-.25.77,3.72,3.72,0,0,1-.49.88,5.79,5.79,0,0,1-.75.85l0,0a.89.89,0,0,0,0,1.26,3.07,3.07,0,0,1,.49.54A4.29,4.29,0,0,1,50.25,26a3.78,3.78,0,0,1,.11,1.45,6.31,6.31,0,0,1-.22,1.27,7,7,0,0,1-2.56,3.71,8.42,8.42,0,0,1-5,1.32H35.24a.57.57,0,0,1-.56-.66l2.56-18.3a.58.58,0,0,1,.56-.5h7.31a6.93,6.93,0,0,1,2.5.42,4.83,4.83,0,0,1,1.87,1.18,4.1,4.1,0,0,1,1.05,1.84A5.45,5.45,0,0,1,50.61,20.21ZM44,21.88a1.93,1.93,0,0,0,1.43-.52,2,2,0,0,0,.63-1.21A1.53,1.53,0,0,0,45.83,19a1.45,1.45,0,0,0-1.3-.55H42.17a.57.57,0,0,0-.56.49l-.34,2.32a.57.57,0,0,0,.57.65Zm-1,7.53a2.44,2.44,0,0,0,1.74-.6,2.26,2.26,0,0,0,.74-1.38,1.77,1.77,0,0,0-.36-1.37,1.82,1.82,0,0,0-1.57-.63H41.19a.57.57,0,0,0-.57.49l-.39,2.84a.57.57,0,0,0,.56.65Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M54.18,20.68a6.89,6.89,0,0,1,1.1-2.92,7.91,7.91,0,0,1,2.12-2.08,9.44,9.44,0,0,1,2.75-1.27,11.56,11.56,0,0,1,3-.41,10.39,10.39,0,0,1,2.91.41,6.66,6.66,0,0,1,2.42,1.27A5.18,5.18,0,0,1,70,17.76a5.44,5.44,0,0,1,.28,2.92l-1,6.64a6.9,6.9,0,0,1-1.1,2.94,7.59,7.59,0,0,1-2.06,2.09,9.41,9.41,0,0,1-2.75,1.24,11.88,11.88,0,0,1-3.1.41,10.39,10.39,0,0,1-2.91-.41A7,7,0,0,1,55,32.35a5.53,5.53,0,0,1-1.54-2.09,5.63,5.63,0,0,1-.27-2.94Zm4,6.64a1.42,1.42,0,0,0,.14.94,2.2,2.2,0,0,0,.6.66,3.28,3.28,0,0,0,.91.38,4.61,4.61,0,0,0,1.1.14,5.15,5.15,0,0,0,1.18-.14,4.24,4.24,0,0,0,1.1-.41A2.63,2.63,0,0,0,64,28.2a2,2,0,0,0,.44-1l1-6.51A1.6,1.6,0,0,0,64.71,19a2.6,2.6,0,0,0-.94-.41,4,4,0,0,0-1.12-.14,4.94,4.94,0,0,0-1.21.14,3.83,3.83,0,0,0-1.07.41,3.19,3.19,0,0,0-.86.68,2.06,2.06,0,0,0-.41,1Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M73.53,20.68a6.89,6.89,0,0,1,1.1-2.92,7.91,7.91,0,0,1,2.12-2.08,9.44,9.44,0,0,1,2.75-1.27,11.56,11.56,0,0,1,3-.41,10.39,10.39,0,0,1,2.91.41,6.66,6.66,0,0,1,2.42,1.27,5.18,5.18,0,0,1,1.54,2.08,5.44,5.44,0,0,1,.28,2.92l-1,6.64a6.9,6.9,0,0,1-1.1,2.94,7.59,7.59,0,0,1-2.06,2.09,9.41,9.41,0,0,1-2.75,1.24,11.88,11.88,0,0,1-3.1.41,10.39,10.39,0,0,1-2.91-.41,7,7,0,0,1-2.4-1.24,5.41,5.41,0,0,1-1.53-2.09,5.52,5.52,0,0,1-.28-2.94Zm4,6.64a1.48,1.48,0,0,0,.14.94,2.2,2.2,0,0,0,.6.66,3.28,3.28,0,0,0,.91.38,4.61,4.61,0,0,0,1.1.14,5.15,5.15,0,0,0,1.18-.14,4.24,4.24,0,0,0,1.1-.41,2.63,2.63,0,0,0,.82-.69,2,2,0,0,0,.44-1l1-6.51a1.8,1.8,0,0,0-.11-1,1.72,1.72,0,0,0-.58-.68,2.6,2.6,0,0,0-.94-.41A4,4,0,0,0,82,18.48a4.94,4.94,0,0,0-1.21.14,3.83,3.83,0,0,0-1.07.41,3.19,3.19,0,0,0-.86.68,2.06,2.06,0,0,0-.41,1Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M93.91,28a.66.66,0,0,1,.88.09,3.75,3.75,0,0,0,1.34.91,5.57,5.57,0,0,0,2.19.47,4.1,4.1,0,0,0,1.76-.36A1.47,1.47,0,0,0,101,28a.93.93,0,0,0-.16-.77,1.88,1.88,0,0,0-.69-.58,4.29,4.29,0,0,0-1-.36A7.84,7.84,0,0,0,97.94,26a7.78,7.78,0,0,1-2.2-.72A6.33,6.33,0,0,1,94,23.89a5.29,5.29,0,0,1-1.07-2,5.48,5.48,0,0,1-.08-2.53,6.12,6.12,0,0,1,1-2.5,6.25,6.25,0,0,1,1.85-1.67A7.55,7.55,0,0,1,98,14.27a12.85,12.85,0,0,1,2.64-.27,11,11,0,0,1,1.73.14,6.34,6.34,0,0,1,3.16,1.45,7.79,7.79,0,0,1,1,1.05.55.55,0,0,1-.13.79l-2.68,1.86a.65.65,0,0,1-.78-.07,3.75,3.75,0,0,0-1.15-.69,5.23,5.23,0,0,0-1.74-.35,3.22,3.22,0,0,0-1.62.33,1.33,1.33,0,0,0-.77,1.09,1.26,1.26,0,0,0,.55,1.3,5.76,5.76,0,0,0,1.79.65,19.61,19.61,0,0,1,2.45.66,5.4,5.4,0,0,1,2,1.16,4.18,4.18,0,0,1,1.24,1.95,6.27,6.27,0,0,1,0,3,6.49,6.49,0,0,1-2.8,4.26,8,8,0,0,1-2.48,1.07,11.5,11.5,0,0,1-2.94.36,8.09,8.09,0,0,1-1.84-.22,9.22,9.22,0,0,1-1.84-.66A8.52,8.52,0,0,1,92.22,32a6.61,6.61,0,0,1-1.06-1.12.55.55,0,0,1,.1-.74Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M119.86,18.75a.57.57,0,0,0-.57.5l-1.92,14a.58.58,0,0,1-.57.5H113a.58.58,0,0,1-.57-.66L114.3,19.4a.58.58,0,0,0-.57-.65H109.8a.57.57,0,0,1-.57-.65l.49-3.36a.58.58,0,0,1,.57-.49h14.32a.57.57,0,0,1,.56.65l-.49,3.36a.57.57,0,0,1-.57.49Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M139.51,24.87l-.51-5a.13.13,0,0,0-.12-.11h0a.12.12,0,0,0-.11.08l-1.87,4.89a.54.54,0,0,0,.51.72H139A.54.54,0,0,0,139.51,24.87Zm6,8.86h-4.23a.55.55,0,0,1-.53-.44l-.58-3a.55.55,0,0,0-.53-.44h-4.46a.53.53,0,0,0-.49.32l-1.47,3.27a.55.55,0,0,1-.49.32h-4.14a.53.53,0,0,1-.48-.77l9.1-18.39a.55.55,0,0,1,.48-.3h3.77a.56.56,0,0,1,.53.42l4.05,18.39A.54.54,0,0,1,145.55,33.73Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M161.19,29.35a.52.52,0,0,1,.19.8A9,9,0,0,1,154,34c-3.86,0-7.43-2.23-6.81-6.65l.94-6.7C148.77,16.25,153,14,157,14a6.16,6.16,0,0,1,6.12,4,.53.53,0,0,1-.31.68l-3.36,1.27a.54.54,0,0,1-.64-.21,3,3,0,0,0-2.58-1.19c-1.42,0-2.84.8-3,2.12l-.94,6.7c-.2,1.27,1,2.06,2.42,2.06A3.51,3.51,0,0,0,157.47,28a.53.53,0,0,1,.67-.16Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M174.59,19.21l-2,14.06a.54.54,0,0,1-.53.46h-3.95a.54.54,0,0,1-.54-.61l1.92-13.76a.53.53,0,0,0-.53-.61h-4.08a.53.53,0,0,1-.53-.6l.51-3.45a.54.54,0,0,1,.53-.45H180a.54.54,0,0,1,.54.6L180,18.3a.54.54,0,0,1-.54.45h-4.38A.54.54,0,0,0,174.59,19.21Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M184.73,33.73h-3.89a.53.53,0,0,1-.53-.61l2.6-18.39a.54.54,0,0,1,.53-.46h3.9a.54.54,0,0,1,.53.61l-2.6,18.39A.55.55,0,0,1,184.73,33.73Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M203.71,14.25h4.13a.52.52,0,0,1,.48.76L199,33.43a.53.53,0,0,1-.48.3h-3.8a.54.54,0,0,1-.52-.42l-4.11-18.42a.54.54,0,0,1,.53-.64h4.23a.53.53,0,0,1,.52.43l1.67,9s0,0,0,.06l.27,4.62h.06l1.49-4.59,0-.06,4.32-9.2A.55.55,0,0,1,203.71,14.25Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M214,24.87l-.52-5a.12.12,0,0,0-.12-.11h0a.11.11,0,0,0-.11.08l-1.87,4.89a.53.53,0,0,0,.5.72h1.58A.54.54,0,0,0,214,24.87Zm6,8.86h-4.23a.55.55,0,0,1-.53-.44l-.58-3a.55.55,0,0,0-.53-.44h-4.47a.55.55,0,0,0-.49.32l-1.47,3.27a.54.54,0,0,1-.49.32h-4.13a.53.53,0,0,1-.48-.77l9.1-18.39a.55.55,0,0,1,.48-.3H216a.54.54,0,0,1,.52.42l4.05,18.39A.53.53,0,0,1,220,33.73Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M230.49,19.21l-2,14.06a.55.55,0,0,1-.53.46h-4a.54.54,0,0,1-.53-.61l1.92-13.76a.54.54,0,0,0-.53-.61h-4.08a.52.52,0,0,1-.53-.6l.51-3.45a.54.54,0,0,1,.53-.45h14.58a.52.52,0,0,1,.53.6l-.51,3.45a.53.53,0,0,1-.53.45H231A.53.53,0,0,0,230.49,19.21Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M243.26,21.8H250a.54.54,0,0,1,.53.61l-.47,3.3a.52.52,0,0,1-.53.46H242.5a.53.53,0,0,0-.53.46l-.27,1.85a.53.53,0,0,0,.53.6h7.45a.53.53,0,0,1,.53.6l-.49,3.59a.54.54,0,0,1-.53.46H236.56a.53.53,0,0,1-.53-.61l2.6-18.39a.54.54,0,0,1,.53-.46h12.63a.54.54,0,0,1,.54.61l-.52,3.58a.54.54,0,0,1-.53.46h-7.75a.53.53,0,0,0-.53.45l-.27,1.83A.53.53,0,0,0,243.26,21.8Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M260.57,29.11c1.36,0,2.59-.74,2.73-1.79l.94-6.53c.14-1.08-.83-1.93-2.19-1.93H260a.54.54,0,0,0-.53.46l-1.32,9.19a.53.53,0,0,0,.53.6Zm1.95-14.84c4,0,7.37,2,6.73,6.52l-.94,6.53c-.64,4.48-4.59,6.41-8.55,6.41H253a.53.53,0,0,1-.53-.61l2.6-18.39a.54.54,0,0,1,.53-.46Z"
                                    })]
                                })
                            });
                        case P.PREMIUM_PAYMENT_STARTED:
                            return (0, a.jsx)("svg", {
                                className: p().svgCopy,
                                width: "156",
                                height: "48",
                                viewBox: "0 0 156 48",
                                children: (0, a.jsxs)("g", {
                                    fill: "currentColor",
                                    children: [(0, a.jsx)("path", {
                                        d: "M115.707 20.8664L114.751 27.2572C114.533 28.7676 112.813 29.4689 111.229 29.4689C109.755 29.4689 108.308 28.7676 108.499 27.3924L109.455 20.8664C109.673 19.437 111.393 18.7089 112.977 18.7089C114.56 18.7089 115.925 19.437 115.707 20.8664ZM113.733 14.3164L113.733 14.3135H103.446C103.183 14.3135 102.96 14.5039 102.922 14.7608L102.421 18.137C102.375 18.4526 102.622 18.7358 102.945 18.7358H104.824C105.013 18.7358 105.142 18.9262 105.068 19.0979C104.834 19.6406 104.663 20.2299 104.568 20.8664L103.612 27.3924C102.984 31.761 106.67 33.9451 110.683 33.9451C114.888 33.9451 119.011 31.761 119.639 27.3924L120.594 20.8664C121.21 16.5841 117.654 14.401 113.733 14.3164Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M51.9335 23.2501L51.9862 26.4178C51.9873 26.483 51.943 26.5403 51.8791 26.5563L50.7895 22.7353C50.7878 22.7295 50.7857 22.7238 50.7833 22.7182L47.4025 14.9005C47.3192 14.708 47.1276 14.583 46.9154 14.583H43.0842C42.82 14.583 42.5964 14.7753 42.5597 15.0336L40.0052 33.0799C39.9607 33.3945 40.2079 33.6753 40.5295 33.6753H44.3462C44.6107 33.6753 44.8347 33.4826 44.8708 33.2236L45.8714 26.0543C45.8722 26.0472 45.8726 26.0401 45.8726 26.033L45.818 22.349L45.9271 22.3224L47.0715 26.1432C47.0732 26.1488 47.0751 26.154 47.0774 26.1593L50.2394 33.3603C50.3233 33.5515 50.5142 33.6753 50.7251 33.6753H54.8582C55.1222 33.6753 55.346 33.483 55.3827 33.2247L57.9376 15.1784C57.9824 14.8638 57.7349 14.583 57.4133 14.583H53.6228C53.3587 14.583 53.1349 14.7751 53.0982 15.0334L51.9348 23.2282C51.9339 23.2355 51.9333 23.2428 51.9335 23.2501Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M59.3201 33.6753H63.1376C63.4019 33.6753 63.6255 33.483 63.6622 33.2247L66.2167 15.1784C66.2614 14.8638 66.014 14.583 65.6923 14.583H61.8748C61.6105 14.583 61.3869 14.7753 61.3502 15.0336L58.7958 33.0799C58.751 33.3945 58.9985 33.6753 59.3201 33.6753Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M68.7951 15.0039L68.295 18.38C68.2482 18.6958 68.4958 18.9787 68.8189 18.9787H72.8136C73.1346 18.9787 73.382 19.2589 73.3382 19.5731L71.4563 33.0814C71.4124 33.3956 71.6596 33.6758 71.9809 33.6758H75.8536C76.1181 33.6758 76.3421 33.4829 76.3782 33.2239L78.2999 19.4306C78.336 19.1716 78.5598 18.9787 78.8245 18.9787H83.1195C83.3823 18.9787 83.6053 18.7885 83.6434 18.5316L84.144 15.1554C84.1908 14.8398 83.9429 14.5566 83.62 14.5566H69.319C69.0562 14.5566 68.8331 14.7471 68.7951 15.0039Z"
                                    }), (0, a.jsx)("path", {
                                        d: "M95.8577 21.2436C95.721 22.3492 94.8476 23.4547 93.3456 23.4547H91.0889C90.7668 23.4547 90.5194 23.1732 90.5648 22.8582L91.0423 19.5357C91.0794 19.2778 91.303 19.0861 91.5667 19.0861H93.9735C95.4206 19.0861 95.9939 20.084 95.8577 21.2436ZM94.5196 14.583H87.2539C86.9898 14.583 86.7661 14.7753 86.7296 15.0336L84.1749 33.0799C84.1304 33.3945 84.3778 33.6753 84.6992 33.6753H88.5707C88.8352 33.6753 89.0592 33.4826 89.0953 33.2236L89.847 27.8336C89.8651 27.704 89.9771 27.6078 90.1094 27.6078H90.6072C90.6974 27.6078 90.7814 27.6532 90.8301 27.7282L94.5274 33.4343C94.6246 33.5845 94.7927 33.6753 94.9733 33.6753H99.7551C100.183 33.6753 100.434 33.199 100.189 32.8524L96.309 27.3745C96.216 27.243 96.2639 27.0603 96.4099 26.9899C98.8867 25.7943 100.325 24.5693 100.799 21.1626C101.345 16.6863 98.506 14.583 94.5196 14.583Z"
                                    })]
                                })
                            });
                        case P.PREMIUM_ACTIVATED:
                            return (0, a.jsx)("svg", {
                                className: p().svgCopy,
                                width: "298",
                                height: "48",
                                viewBox: "0 0 298 48",
                                children: (0, a.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M112.46,20.67l-1,6.52c-.22,1.54-2,2.25-3.59,2.25s-3-.71-2.78-2.11l1-6.66c.23-1.45,2-2.2,3.59-2.2s3,.75,2.79,2.2m-2-6.67H100a.55.55,0,0,0-.54.46l-.51,3.44a.54.54,0,0,0,.54.61h1.91a.26.26,0,0,1,.25.37,7.23,7.23,0,0,0-.51,1.8l-1,6.66c-.64,4.45,3.12,6.68,7.21,6.68,4.28,0,8.49-2.23,9.13-6.68l1-6.66c.63-4.36-3-6.59-7-6.67m-63,9.1.06,3.23a.14.14,0,0,1-.11.14l-1.11-3.89v0l-3.45-8a.54.54,0,0,0-.49-.32H38.42a.53.53,0,0,0-.53.46L35.28,33.12a.54.54,0,0,0,.54.61h3.89a.52.52,0,0,0,.53-.46l1-7.31v0l-.06-3.75.11,0,1.17,3.89v0l3.23,7.34a.52.52,0,0,0,.49.32h4.22a.54.54,0,0,0,.53-.46l2.6-18.39a.53.53,0,0,0-.53-.61H49.17a.54.54,0,0,0-.54.46l-1.18,8.35a0,0,0,0,0,0,0M55,33.73h3.9a.53.53,0,0,0,.53-.46L62,14.88a.53.53,0,0,0-.53-.61H57.58a.54.54,0,0,0-.54.46l-2.6,18.39a.53.53,0,0,0,.53.61m9.66-19-.51,3.44a.54.54,0,0,0,.54.61h4.07a.52.52,0,0,1,.53.6L67.35,33.13a.52.52,0,0,0,.53.6h4a.52.52,0,0,0,.53-.46l2-14.06a.55.55,0,0,1,.54-.46h4.38a.54.54,0,0,0,.53-.46l.51-3.44a.53.53,0,0,0-.53-.61H65.17a.55.55,0,0,0-.54.46m27.59,6.36a2.52,2.52,0,0,1-2.56,2.25h-2.3a.53.53,0,0,1-.53-.61l.48-3.38a.54.54,0,0,1,.54-.46H90.3a1.8,1.8,0,0,1,1.92,2.2m-1.36-6.79H83.45a.52.52,0,0,0-.53.46L80.31,33.12a.54.54,0,0,0,.54.61h3.94a.54.54,0,0,0,.54-.46l.76-5.49a.27.27,0,0,1,.27-.23h.51a.27.27,0,0,1,.23.12l3.77,5.82a.54.54,0,0,0,.45.24H96.2a.53.53,0,0,0,.44-.84l-4-5.58a.27.27,0,0,1,.11-.39c2.52-1.22,4-2.47,4.47-5.94.56-4.57-2.34-6.71-6.4-6.71M133,24.88l-.52-5a.11.11,0,0,0-.12-.1h0a.11.11,0,0,0-.11.07l-1.87,4.9a.53.53,0,0,0,.5.71h1.58a.54.54,0,0,0,.54-.58m6,8.85h-4.23a.54.54,0,0,1-.53-.43l-.59-3a.52.52,0,0,0-.52-.43h-4.47a.53.53,0,0,0-.49.32l-1.47,3.27a.52.52,0,0,1-.49.31h-4.13a.53.53,0,0,1-.48-.76l9.1-18.39a.55.55,0,0,1,.48-.3H135a.54.54,0,0,1,.52.42l4.05,18.39a.53.53,0,0,1-.52.64m15.63-4.37a.53.53,0,0,1,.19.8A9,9,0,0,1,147.47,34c-3.86,0-7.42-2.23-6.81-6.65l.94-6.7c.62-4.4,4.84-6.65,8.79-6.65a6.16,6.16,0,0,1,6.12,4,.53.53,0,0,1-.32.68l-3.35,1.27a.54.54,0,0,1-.64-.22,3,3,0,0,0-2.59-1.18c-1.41,0-2.83.8-3,2.12l-.94,6.7c-.2,1.26,1,2.06,2.42,2.06A3.54,3.54,0,0,0,150.91,28a.54.54,0,0,1,.67-.17ZM168,19.22l-2,14.05a.52.52,0,0,1-.53.46h-3.95a.52.52,0,0,1-.53-.6L163,19.36a.54.54,0,0,0-.54-.6h-4.07a.53.53,0,0,1-.53-.61l.51-3.44a.54.54,0,0,1,.53-.46h14.57a.53.53,0,0,1,.53.61l-.51,3.45a.52.52,0,0,1-.53.45h-4.38a.54.54,0,0,0-.53.46m10.14,14.51h-3.89a.54.54,0,0,1-.54-.6l2.61-18.39a.54.54,0,0,1,.53-.46h3.89a.54.54,0,0,1,.54.61l-2.61,18.39a.52.52,0,0,1-.53.45m19-19.48h4.13a.53.53,0,0,1,.48.77l-9.31,18.42a.53.53,0,0,1-.48.29h-3.79a.54.54,0,0,1-.53-.41l-4.1-18.42a.54.54,0,0,1,.52-.65h4.23a.55.55,0,0,1,.53.44l1.66,9a.13.13,0,0,1,0,.06l.28,4.61h.05l1.49-4.58,0-.06,4.32-9.2a.54.54,0,0,1,.48-.31m10.26,10.63-.51-5a.12.12,0,0,0-.12-.1h0a.14.14,0,0,0-.12.07l-1.86,4.9a.52.52,0,0,0,.5.71h1.58a.53.53,0,0,0,.53-.58m6,8.85h-4.23a.54.54,0,0,1-.53-.43l-.58-3a.54.54,0,0,0-.53-.43h-4.46a.52.52,0,0,0-.49.32l-1.47,3.27a.54.54,0,0,1-.49.31h-4.13A.53.53,0,0,1,196,33l9.1-18.39a.55.55,0,0,1,.49-.3h3.76a.56.56,0,0,1,.53.42l4,18.39a.54.54,0,0,1-.53.64M223.9,19.22l-2,14.05a.54.54,0,0,1-.53.46h-4a.53.53,0,0,1-.53-.6l1.92-13.77a.52.52,0,0,0-.53-.6h-4.08a.54.54,0,0,1-.53-.61l.51-3.44a.55.55,0,0,1,.53-.46h14.58a.53.53,0,0,1,.53.61l-.51,3.45a.54.54,0,0,1-.53.45h-4.38a.53.53,0,0,0-.53.46m12.77,2.59h6.75a.53.53,0,0,1,.53.6l-.47,3.31a.53.53,0,0,1-.53.46h-7a.54.54,0,0,0-.53.45l-.26,1.86a.53.53,0,0,0,.53.6h7.44a.52.52,0,0,1,.53.6l-.49,3.58a.53.53,0,0,1-.53.46H230a.53.53,0,0,1-.53-.6L232,14.74a.55.55,0,0,1,.54-.46h12.62a.53.53,0,0,1,.53.61l-.51,3.58a.53.53,0,0,1-.53.45h-7.75a.54.54,0,0,0-.53.46l-.26,1.82a.53.53,0,0,0,.53.61M254,29.12c1.36,0,2.58-.74,2.72-1.79l.95-6.54c.14-1.07-.84-1.92-2.2-1.92h-2.06a.54.54,0,0,0-.54.45l-1.32,9.19a.54.54,0,0,0,.53.61Zm1.94-14.84c4,0,7.37,2,6.73,6.51l-.94,6.54c-.64,4.48-4.59,6.4-8.54,6.4h-6.75a.54.54,0,0,1-.54-.6l2.61-18.39a.54.54,0,0,1,.53-.46Z"
                                })
                            });
                        case P.PREMIUM_UPGRADED:
                            return (0, a.jsx)("svg", {
                                className: p().svgCopy,
                                width: "298",
                                height: "48",
                                viewBox: "0 0 298 48",
                                children: (0, a.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M112.39,20.67l-1,6.52c-.22,1.54-2,2.26-3.59,2.26s-3-.72-2.79-2.12l1-6.66c.22-1.46,2-2.2,3.59-2.2s3,.74,2.78,2.2m-2-6.68H99.89a.52.52,0,0,0-.53.46l-.51,3.44a.53.53,0,0,0,.53.61h1.92a.26.26,0,0,1,.24.37,7.23,7.23,0,0,0-.51,1.8l-1,6.66c-.64,4.45,3.12,6.68,7.21,6.68,4.29,0,8.49-2.23,9.13-6.68l1-6.66c.63-4.36-3-6.59-7-6.68m-63,9.11,0,3.23a.15.15,0,0,1-.11.15h0l-1.11-3.9v0l-3.44-8a.55.55,0,0,0-.5-.33H38.33a.54.54,0,0,0-.53.46L35.19,33.13a.54.54,0,0,0,.54.61h3.89a.53.53,0,0,0,.53-.47l1-7.31v0l-.06-3.76.11,0,1.17,3.89v0l3.22,7.34a.55.55,0,0,0,.5.33h4.21a.55.55,0,0,0,.54-.46l2.6-18.41a.54.54,0,0,0-.53-.61H49.08a.53.53,0,0,0-.53.46l-1.19,8.36v0m7.53,10.64h3.89a.55.55,0,0,0,.54-.46l2.6-18.41a.53.53,0,0,0-.53-.61H57.5a.55.55,0,0,0-.54.46l-2.6,18.41a.53.53,0,0,0,.53.61m9.66-19.05L64,18.14a.54.54,0,0,0,.54.61h4.07a.54.54,0,0,1,.54.6L67.27,33.13a.53.53,0,0,0,.53.61h4a.55.55,0,0,0,.54-.47l2-14.06a.52.52,0,0,1,.53-.46h4.38a.55.55,0,0,0,.54-.46l.51-3.44a.54.54,0,0,0-.54-.61H65.09a.54.54,0,0,0-.54.45m27.6,6.37a2.52,2.52,0,0,1-2.56,2.25h-2.3a.54.54,0,0,1-.54-.61l.49-3.38a.54.54,0,0,1,.54-.46h2.45a1.79,1.79,0,0,1,1.92,2.2m-1.36-6.8H83.38a.55.55,0,0,0-.54.46l-2.6,18.41a.53.53,0,0,0,.53.61h4a.55.55,0,0,0,.54-.47L86,27.78a.27.27,0,0,1,.27-.23h.51a.25.25,0,0,1,.22.12l3.77,5.82a.57.57,0,0,0,.46.25h4.88a.54.54,0,0,0,.44-.84l-4-5.59a.27.27,0,0,1,.1-.39c2.53-1.22,4-2.47,4.48-6,.56-4.56-2.34-6.71-6.4-6.71m39.67.59-1.7,12.09c-.21,1.54,1.05,2.3,2.43,2.3a2.84,2.84,0,0,0,3.05-2.3L136,14.71a.51.51,0,0,1,.5-.43h3.87a.5.5,0,0,1,.5.5v.07l-1.7,12.09c-.62,4.48-4.78,6.72-8.59,6.72s-7.29-2.24-6.67-6.72l1.73-12.23a.49.49,0,0,1,.49-.43H130a.5.5,0,0,1,.5.5A.17.17,0,0,1,130.46,14.85Zm10.72,18,2.53-18.11a.51.51,0,0,1,.5-.43h7.2c4.67,0,6.43,3.43,6.05,6.88a7.29,7.29,0,0,1-7.69,6.65h-2.62a.51.51,0,0,0-.5.43L146,33a.49.49,0,0,1-.49.43h-3.82a.5.5,0,0,1-.51-.5S141.18,32.85,141.18,32.82Zm6.71-9.31h2.23A2.56,2.56,0,0,0,152.65,21a1.78,1.78,0,0,0-1.86-2.24h-2.37a.51.51,0,0,0-.5.43l-.53,3.72a.5.5,0,0,0,.43.57Zm25.79-5.42L169.37,20A2.33,2.33,0,0,0,167,18.3a2.86,2.86,0,0,0-3,2.19l-.92,6.56c-.18,1.46,1.06,2.19,2.49,2.19s2.91-.73,3.1-2.19l0-.24a.51.51,0,0,0-.44-.57h-2a.5.5,0,0,1-.51-.5s0,0,0-.07l.4-2.94a.5.5,0,0,1,.5-.43h6.68a.5.5,0,0,1,.5.5v.07l-.57,4.18c-.62,4.4-4.65,6.61-8.48,6.61s-7.21-2.21-6.59-6.61l.92-6.56c.62-4.46,4.67-6.48,8.45-6.48C170.09,14,172.79,15,173.68,18.09Zm12.26,15.07-3.59-5.61a.5.5,0,0,0-.42-.23h-.16a.49.49,0,0,0-.49.43L180.56,33a.51.51,0,0,1-.5.43h-3.87a.5.5,0,0,1-.5-.5v-.07l2.53-18.11a.51.51,0,0,1,.5-.43h7.21c3.94,0,6.74,2.11,6.2,6.59-.48,3.53-2,4.72-4.61,6l4,5.78a.5.5,0,0,1-.13.69.48.48,0,0,1-.29.09h-4.78A.48.48,0,0,1,185.94,33.16Zm-3.43-10h2.25A2.46,2.46,0,0,0,187.25,21a1.76,1.76,0,0,0-1.86-2.16H183a.5.5,0,0,0-.5.43L182,22.59a.51.51,0,0,0,.43.57Zm24.55-8.49L211,32.79a.49.49,0,0,1-.38.59h-4.25a.51.51,0,0,1-.5-.4l-.57-3a.49.49,0,0,0-.49-.41h-4.36a.51.51,0,0,0-.46.3l-1.44,3.24a.5.5,0,0,1-.46.29H194a.5.5,0,0,1-.5-.5.44.44,0,0,1,.05-.22l8.85-18.11a.5.5,0,0,1,.45-.28h3.68A.49.49,0,0,1,207.06,14.67Zm-4.51,10.6h1.58a.51.51,0,0,0,.5-.5v-.05l-.5-4.95a.12.12,0,0,0-.11-.09h0a.13.13,0,0,0-.13.09l-1.81,4.82a.5.5,0,0,0,.29.65A.57.57,0,0,0,202.55,25.27Zm13.92-11h6.72c3.83,0,7.15,1.94,6.53,6.4l-.92,6.42c-.62,4.4-4.45,6.29-8.29,6.29h-6.57a.5.5,0,0,1-.51-.5s0,0,0-.07L216,14.71A.51.51,0,0,1,216.47,14.28Zm2.95,14.58h1.88a2.48,2.48,0,0,0,2.64-1.76l.92-6.42c.14-1.05-.81-1.89-2.13-1.89h-2a.5.5,0,0,0-.5.43l-1.29,9.07a.5.5,0,0,0,.43.56Zm17.93-9.59-.26,1.84a.5.5,0,0,0,.43.56h6.66a.5.5,0,0,1,.5.5v.07l-.46,3.29a.49.49,0,0,1-.49.43h-6.88a.51.51,0,0,0-.5.43l-.26,1.86a.51.51,0,0,0,.43.57h7.34a.5.5,0,0,1,.5.5v.07L243.87,33a.49.49,0,0,1-.5.43H231.08a.5.5,0,0,1-.5-.5v-.07l2.53-18.11a.51.51,0,0,1,.5-.43h12.3a.5.5,0,0,1,.5.5.15.15,0,0,1,0,.07l-.5,3.56a.51.51,0,0,1-.5.43h-7.55A.51.51,0,0,0,237.35,19.27Zm12.14-5h6.71c3.84,0,7.16,1.94,6.54,6.4l-.92,6.42c-.62,4.4-4.46,6.29-8.29,6.29H247a.5.5,0,0,1-.5-.5.2.2,0,0,1,0-.07L249,14.71A.5.5,0,0,1,249.49,14.28Zm2.94,14.58h1.88A2.49,2.49,0,0,0,257,27.1l.92-6.42c.13-1.05-.81-1.89-2.14-1.89h-2a.49.49,0,0,0-.49.43l-1.29,9.07a.5.5,0,0,0,.42.56Z"
                                })
                            });
                        case P.PREMIUM_UPDATED:
                            return (0, a.jsx)("svg", {
                                className: p().svgCopy,
                                width: "276",
                                height: "48",
                                viewBox: "0 0 276 48",
                                children: (0, a.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M112.23,20.66l-1,6.49c-.22,1.54-2,2.25-3.58,2.25s-3-.71-2.77-2.11l1-6.63c.22-1.46,2-2.2,3.58-2.2S112.46,19.2,112.23,20.66Zm-2-6.66H99.77a.53.53,0,0,0-.53.46l-.51,3.43a.52.52,0,0,0,.45.6h2a.27.27,0,0,1,.25.37,7,7,0,0,0-.51,1.8l-1,6.63c-.64,4.44,3.11,6.66,7.19,6.66,4.27,0,8.46-2.22,9.1-6.66l1-6.63C117.83,16.3,114.21,14.08,110.23,14ZM47.39,23.08l.06,3.22a.14.14,0,0,1-.11.14l-1.11-3.88v0l-3.43-7.95a.55.55,0,0,0-.5-.32H38.4a.54.54,0,0,0-.54.45l-2.6,18.35a.53.53,0,0,0,.46.6h4a.53.53,0,0,0,.53-.46l1-7.29v0l-.06-3.75.12,0L42.45,26v0l3.22,7.32a.55.55,0,0,0,.49.32h4.21a.54.54,0,0,0,.53-.46l2.6-18.35a.54.54,0,0,0-.46-.6H49.11a.53.53,0,0,0-.53.45l-1.19,8.34v0Zm7.51,10.6h3.88a.55.55,0,0,0,.54-.46l2.6-18.35a.55.55,0,0,0-.46-.6h-4a.53.53,0,0,0-.53.45l-2.6,18.35a.52.52,0,0,0,.46.6Zm9.64-19L64,18.13a.53.53,0,0,0,.53.61h4.06a.54.54,0,0,1,.54.6L67.24,33.07a.53.53,0,0,0,.46.6h4a.55.55,0,0,0,.54-.46l2-14a.53.53,0,0,1,.53-.46H79.1a.54.54,0,0,0,.53-.46l.51-3.43a.55.55,0,0,0-.45-.61H65.07A.53.53,0,0,0,64.54,14.69ZM92.05,21a2.51,2.51,0,0,1-2.55,2.25H87.2a.53.53,0,0,1-.53-.53v-.08l.49-3.38a.52.52,0,0,1,.53-.45h2.45A1.79,1.79,0,0,1,92.05,21Zm-1.36-6.77H83.3a.54.54,0,0,0-.53.46l-2.6,18.34a.53.53,0,0,0,.46.6h4a.55.55,0,0,0,.54-.46l.76-5.48a.27.27,0,0,1,.27-.23h.5a.28.28,0,0,1,.23.12l3.76,5.8a.53.53,0,0,0,.45.25H96a.54.54,0,0,0,.44-.84l-3.95-5.57a.27.27,0,0,1,.06-.37.05.05,0,0,0,0,0c2.52-1.21,4-2.46,4.47-5.92.55-4.55-2.33-6.69-6.39-6.69Zm40.12,0a.49.49,0,0,1,.49.5v.07l-1.73,12.32c-.22,1.56,1.07,2.33,2.47,2.33a2.9,2.9,0,0,0,3.1-2.33l1.76-12.46a.49.49,0,0,1,.49-.43h4a.49.49,0,0,1,.49.5v.07l-1.73,12.32c-.64,4.56-4.87,6.84-8.74,6.84s-7.42-2.28-6.79-6.84l1.76-12.46a.49.49,0,0,1,.49-.43Zm11.88,19.45a.51.51,0,0,1-.5-.49s0-.05,0-.07l2.58-18.46a.5.5,0,0,1,.49-.43h7.35c4.75,0,6.53,3.49,6.15,7a7.41,7.41,0,0,1-7.83,6.76h-2.68a.49.49,0,0,0-.48.42l-.68,4.84a.5.5,0,0,1-.49.42Zm5.83-10.62a.5.5,0,0,0,.42.56h2.36a2.62,2.62,0,0,0,2.58-2.53,1.82,1.82,0,0,0-1.9-2.28h-2.42a.49.49,0,0,0-.49.42Zm13.27-8.4a.49.49,0,0,1,.49-.43h6.85c3.9,0,7.28,2,6.65,6.51l-.94,6.54c-.63,4.48-4.53,6.4-8.43,6.4h-6.72a.49.49,0,0,1-.49-.49.17.17,0,0,1,0-.07Zm3,13.84a.5.5,0,0,0,.42.56h2c1.35,0,2.56-.74,2.7-1.79l.93-6.54c.14-1.07-.82-1.92-2.17-1.92h-2.07a.49.49,0,0,0-.49.42l-1.32,9.26ZM188,14.28a.49.49,0,0,1,.48.39l4,18.46a.49.49,0,0,1-.38.59h-4.36a.49.49,0,0,1-.48-.4l-.59-3.1a.5.5,0,0,0-.49-.4H181.7a.5.5,0,0,0-.45.3l-1.47,3.31a.49.49,0,0,1-.45.29h-4.17a.49.49,0,0,1-.49-.49.54.54,0,0,1,.05-.22l9-18.46a.51.51,0,0,1,.45-.28Zm-4.6,10.52a.5.5,0,0,0,.29.63.51.51,0,0,0,.17,0h1.66A.49.49,0,0,0,186,25v0l-.51-5a.13.13,0,0,0-.07-.16.13.13,0,0,0-.16.07.13.13,0,0,0,0,.06Zm24.73-6.46a.5.5,0,0,1-.49.42h-4.39a.5.5,0,0,0-.49.43l-1.94,14.12a.49.49,0,0,1-.49.42h-4a.49.49,0,0,1-.49-.49.17.17,0,0,1,0-.07l1.9-13.85a.48.48,0,0,0-.42-.55h-4.18a.49.49,0,0,1-.49-.49v-.08l.52-3.51a.51.51,0,0,1,.49-.43h14.47a.5.5,0,0,1,.49.5.17.17,0,0,1,0,.07l-.51,3.52Zm7.23.59a.49.49,0,0,0-.48.42l-.28,1.9a.49.49,0,0,0,.42.55h6.82a.5.5,0,0,1,.5.49s0,.05,0,.07l-.47,3.38a.49.49,0,0,1-.49.43h-7a.49.49,0,0,0-.49.42l-.27,1.93a.5.5,0,0,0,.42.56h7.5a.49.49,0,0,1,.5.49s0,.05,0,.07l-.49,3.66a.5.5,0,0,1-.49.42H208.43a.49.49,0,0,1-.49-.49v-.07l2.58-18.46a.5.5,0,0,1,.49-.43h12.55a.49.49,0,0,1,.49.5v.07l-.52,3.65a.51.51,0,0,1-.49.43Zm11.36-4.22a.49.49,0,0,1,.49-.43H234c3.9,0,7.28,2,6.64,6.51l-.93,6.54c-.63,4.48-4.53,6.4-8.43,6.4h-6.72a.49.49,0,0,1-.49-.49.17.17,0,0,1,0-.07Zm3,13.84a.5.5,0,0,0,.42.56h2c1.35,0,2.56-.74,2.7-1.79l.93-6.54c.14-1.07-.82-1.92-2.17-1.92h-2.07a.49.49,0,0,0-.49.42l-1.32,9.26Z"
                                })
                            });
                        default:
                            return null
                    }
                };
                n.render = function() {
                    var e = this.props.className;
                    return (0, a.jsxs)("div", {
                        className: i()(p().container, e),
                        children: [this.renderSvgBorder(), (0, a.jsxs)(o.Z.div, {
                            className: p().animationContainer,
                            style: this.getContainerStyle(),
                            children: [(0, a.jsx)(f.Z, {
                                className: p().shine,
                                style: this.getShineStyle()
                            }), this.renderSvgCopy()]
                        })]
                    })
                };
                return r
            }(n.PureComponent);
            v.Types = P;

            function y(e) {
                var t = e.theme,
                    r = A(e, ["theme"]),
                    n = (0, u.useToken)(l.Z.unsafe_rawColors.WHITE_500).hex(),
                    s = (0, u.useToken)(l.Z.unsafe_rawColors.BRAND_500).hex(),
                    i = (0, c.wj)(t) ? n : s;
                return (0, a.jsx)(v, C(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        a.forEach((function(t) {
                            E(e, t, r[t])
                        }))
                    }
                    return e
                }({}, r), {
                    theme: t,
                    flashColor: i
                }))
            }
            y.Types = P
        },
        637700: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => g,
                T: () => L
            });
            var a = r(785893),
                n = r(667294),
                s = r(441143),
                i = r.n(s),
                o = r(202351),
                l = r(304548),
                c = r(315804),
                u = r(934869),
                _ = r(782786),
                f = r(449852),
                I = r(551778),
                h = r(746974),
                d = r(694329),
                p = r(671687),
                m = r(203600),
                E = r(2590),
                T = r(473708),
                C = r(618941),
                A = r.n(C);

            function M(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }

            function N(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var a, n, s = [],
                            i = !0,
                            o = !1;
                        try {
                            for (r = r.call(e); !(i = (a = r.next()).done); i = !0) {
                                s.push(a.value);
                                if (t && s.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            n = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (o) throw n
                            }
                        }
                        return s
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return M(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return M(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function R(e) {
                var t, r, n, s = e.planId,
                    l = e.startingPremiumSubscriptionPlanId,
                    c = e.paymentSourceType,
                    u = N((0, o.Wu)([I.Z], (function() {
                        return [I.Z.get(l), I.Z.get(s)]
                    })), 2),
                    _ = u[0],
                    f = u[1];
                i()(null != _ && null != f, "Missing startingPlan or newPlan");
                if (r = l, n = s, m.Y1.indexOf(r) < m.Y1.indexOf(n)) switch (s) {
                        case m.Xh.PREMIUM_MONTH_TIER_1:
                            t = T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
                            E.X7u.has(null != c ? c : E.HeQ.UNKNOWN) && (t = T.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
                            break;
                        case m.Xh.PREMIUM_MONTH_TIER_2:
                            t = T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH;
                            E.X7u.has(null != c ? c : E.HeQ.UNKNOWN) && (t = T.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
                            break;
                        case m.Xh.PREMIUM_YEAR_TIER_1:
                            t = T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR;
                            E.X7u.has(null != c ? c : E.HeQ.UNKNOWN) && (t = T.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
                            break;
                        case m.Xh.PREMIUM_YEAR_TIER_2:
                            t = T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
                                numFreeGuildSubscriptions: m.cb
                            });
                            E.X7u.has(null != c ? c : E.HeQ.UNKNOWN) && (t = T.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
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
                            throw new Error("Unexpected planId: ".concat(s))
                    } else if (_.skuId === m.Si.TIER_2 && f.skuId === m.Si.TIER_1) t = T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
                    else switch (f.skuId) {
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
                            throw new Error("Unexpected skuId: ".concat(f.skuId))
                    }
                return (0, a.jsx)("div", {
                    className: A().text,
                    children: t
                })
            }

            function g(e) {
                var t, r = e.planId,
                    s = e.enableNoPaymentTrial,
                    u = e.startingPremiumSubscriptionPlanId,
                    _ = e.onClose,
                    f = e.followupSKUInfo,
                    C = e.isDowngrade,
                    M = e.hideClose,
                    N = e.postSuccessGuild,
                    g = e.paymentSourceType,
                    L = (0, l.useThemeContext)().theme,
                    O = (0, o.e7)([h.Z], (function() {
                        return null != f ? h.Z.get(f.id) : null
                    }));
                n.useEffect((function() {
                    if (null != f && null == O) {
                        var e = f.applicationId,
                            t = f.id;
                        (0, c.jU)(e, t).catch(E.VqG)
                    }
                }), [f, O]);
                var P = function(e) {
                    return e.skuId === m.Si.TIER_0 ? E.X7u.has(null != g ? g : E.HeQ.UNKNOWN) ? T.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0 : e.skuId === m.Si.TIER_1 ? E.X7u.has(null != g ? g : E.HeQ.UNKNOWN) ? T.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1 : E.X7u.has(null != g ? g : E.HeQ.UNKNOWN) ? T.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : s ? T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : T.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
                };
                if (null != O) t = (0, a.jsx)("div", {
                    className: A().text,
                    children: T.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
                        skuName: O.name
                    })
                });
                else if (null != u) t = (0, a.jsx)(R, {
                    planId: r,
                    startingPremiumSubscriptionPlanId: u
                });
                else if (null != N) {
                    var S = I.Z.get(r);
                    i()(null != S, "Missing plan");
                    t = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: A().text,
                            children: P(S)
                        }), (0, a.jsx)("div", {
                            className: A().text,
                            children: T.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
                                guildName: N.name
                            })
                        })]
                    })
                } else {
                    var v = I.Z.get(r);
                    i()(null != v, "Missing plan");
                    t = (0, a.jsx)("div", {
                        className: A().text,
                        children: P(v)
                    })
                }
                var y, Z = d.ZP.getPremiumType(r);
                i()(null != Z, "premium type should not be null in purchase confirmation");
                y = null != O ? T.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
                    skuName: O.name
                }) : C ? T.Z.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != N ? T.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : T.Z.Messages.PREMIUM_UPGRADE_DONE_BUTTON;
                return (0, a.jsxs)("div", {
                    className: A().confirmation,
                    children: [(0, a.jsx)(p.C, {
                        className: A().banner,
                        theme: L,
                        premiumType: Z,
                        type: E.X7u.has(null != g ? g : E.HeQ.UNKNOWN) ? p.C.Types.PREMIUM_PAYMENT_STARTED : null != u ? p.C.Types.PREMIUM_UPDATED : p.C.Types.PREMIUM_ACTIVATED
                    }), t, M ? null : (0, a.jsx)(l.Button, {
                        onClick: _,
                        children: y
                    })]
                })
            }

            function L(e) {
                var t = e.planId,
                    r = e.selectedGiftStyle,
                    n = e.onClose,
                    s = e.hasSentMessage,
                    l = e.giftMessageError,
                    c = e.isSendingMessage,
                    h = (0,
                        _.usePaymentContext)().giftRecipient,
                    d = (0, o.e7)([I.Z], (function() {
                        return I.Z.get(t)
                    }));
                i()(null != d, "Missing plan");
                var p = (0, o.e7)([f.Z], (function() {
                    return f.Z.getGiftCode(d.skuId)
                }));
                return (0, a.jsx)(u.Z, {
                    giftCode: p,
                    subscriptionPlan: d,
                    onClose: n,
                    selectedGiftStyle: r,
                    hasSentMessage: s,
                    giftRecipient: h,
                    giftMessageError: l,
                    isSendingMessage: c
                })
            }
        }
    }
]);