(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["92309"], {
        489847: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ab3468632852f3725893.png"
        },
        165057: function(e, t, n) {
            "use strict";
            e.exports = n.p + "50eb2aa99e75c1b8630a.png"
        },
        94646: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c5c556a5e9be016ffb2d.png"
        },
        286642: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a3edb1330403965aa3f6.png"
        },
        655029: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6fac2c0e5ed90d06b3b9.png"
        },
        740683: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7b9383fd24920a3a95b7.png"
        },
        714293: function(e, t, n) {
            "use strict";
            e.exports = n.p + "295744c4b4e7cb95b539.png"
        },
        861485: function(e, t, n) {
            "use strict";
            e.exports = n.p + "16abeb1745235d8aea66.png"
        },
        638538: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ac20c9a7b69e25e9d680.png"
        },
        770704: function(e, t, n) {
            "use strict";
            e.exports = n.p + "81aef01431a5e1293160.png"
        },
        597704: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7bb17dc88ff31be285a8.png"
        },
        290216: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1616ba0a324e68a4fff7.png"
        },
        551290: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f156f6c8b61734c205fc.png"
        },
        93902: function(e, t, n) {
            "use strict";
            e.exports = n.p + "de1981a6479d060d8ebd.png"
        },
        777273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserAffinities: function() {
                    return a
                }
            });
            var s = n("872717"),
                r = n("913144"),
                i = n("843823"),
                l = n("49111");

            function a() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return i.default.needsRefresh() ? (r.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), s.default.get({
                    url: l.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    r.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    r.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        749432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("917351"),
                l = n.n(i),
                a = n("446674"),
                o = n("862337"),
                u = n("77078"),
                d = n("54239"),
                c = n("736964"),
                f = n("777273"),
                p = n("79112"),
                E = n("87657"),
                C = n("210721"),
                S = n("671484"),
                I = n("27618"),
                _ = n("102985"),
                h = n("843823"),
                T = n("697218"),
                g = n("188525"),
                m = n("145131"),
                A = n("953109"),
                N = n("306160"),
                O = n("659632"),
                x = n("719923"),
                R = n("158998"),
                v = n("49111"),
                P = n("646718"),
                F = n("782340"),
                M = n("146948");
            class L extends r.Component {
                componentWillUnmount() {
                    this._copyModeTimeout.stop()
                }
                get iconSKUId() {
                    let {
                        subscriptionPlan: e,
                        sku: t
                    } = this.props;
                    return null != e ? e.skuId : null != t ? t.id : null
                }
                get headerBlurb() {
                    let e;
                    let {
                        subscriptionPlan: t,
                        hasSentMessage: n,
                        giftMessageError: s,
                        giftRecipient: r,
                        selectedGiftStyle: i
                    } = this.props, l = null != i && P.SeasonalGiftStyles2023.includes(i);
                    if (null != s) return F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
                    if (null == t) return F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_BLURB;
                    let a = n || null != r;
                    return (e = t.interval === P.SubscriptionIntervalTypes.MONTH ? a ? l ? F.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : a ? l ? F.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                        skuName: (0, x.getTierDisplayName)(t.id),
                        intervalCount: t.intervalCount
                    })
                }
                render() {
                    let e, t;
                    let {
                        application: n,
                        selectedGiftStyle: r,
                        hasSentMessage: i,
                        giftRecipient: l,
                        giftMessageError: a,
                        isSendingMessage: o
                    } = this.props, d = (0, O.isCustomGiftEnabled)(l);
                    return e = d || i && null == a ? F.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != a ? F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : F.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE, t = o ? (0, s.jsx)(u.Spinner, {
                        type: u.SpinnerTypes.PULSING_ELLIPSIS
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            className: null != r ? M.headerCustomGifting : M.header,
                            children: e
                        }), i && null != l && null == a || (0, O.isCustomGiftEnabled)(l) ? this.renderConfirmSentGift() : this.renderRequestSendGift()]
                    }), (0, s.jsxs)(m.default, {
                        direction: m.default.Direction.VERTICAL,
                        align: m.default.Align.CENTER,
                        children: [null != n ? (0, s.jsx)(A.default, {
                            game: n,
                            className: M.icon,
                            size: A.default.Sizes.LARGE,
                            skuId: this.iconSKUId
                        }) : null, t]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        copyMode: g.default.Modes.DEFAULT
                    }, this._copyModeTimeout = new o.Timeout, this.handleGiftCodeCopy = (e, t) => {
                        let {
                            sku: n
                        } = this.props;
                        null != n && (0, O.trackGiftCodeCopy)(new S.default({
                            code: t,
                            maxUses: 1
                        }), n);
                        try {
                            (0, N.copy)(e), this.setState({
                                copyMode: g.default.Modes.SUCCESS
                            })
                        } catch (e) {
                            this.setState({
                                copyMode: g.default.Modes.ERROR
                            })
                        }
                        this._copyModeTimeout.start(1500, () => {
                            this.setState({
                                copyMode: g.default.Modes.DEFAULT
                            })
                        })
                    }, this.handleInventoryClick = () => {
                        p.default.open(v.UserSettingsSections.INVENTORY), this.props.onClose()
                    }, this.renderGiftCodeSection = () => {
                        let e;
                        let {
                            obscureGiftCode: t,
                            giftCode: n
                        } = this.props;
                        if (null == n) return null;
                        let {
                            copyMode: r
                        } = this.state;
                        switch (r) {
                            case g.default.Modes.SUCCESS:
                                e = F.default.Messages.BILLING_GIFT_COPIED;
                                break;
                            case g.default.Modes.ERROR:
                                e = F.default.Messages.FAILED;
                                break;
                            default:
                                e = F.default.Messages.COPY
                        }
                        return (0, s.jsx)(m.default, {
                            direction: m.default.Direction.VERTICAL,
                            children: (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(u.FormTitle, {
                                    children: F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
                                }), null != n && (0, s.jsx)(g.default, {
                                    hideMessage: t ? F.default.Messages.GIFT_INVENTORY_HIDDEN : null,
                                    value: (0, O.getGiftCodeURL)(n),
                                    mode: r,
                                    text: e,
                                    onCopy: e => this.handleGiftCodeCopy(e, n),
                                    supportsCopy: N.SUPPORTS_COPY,
                                    className: M.copyInput,
                                    buttonColor: g.default.ButtonColors.LINK,
                                    buttonLook: g.default.ButtonLooks.LINK
                                }), (0, s.jsx)("div", {
                                    className: M.subtext,
                                    children: F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                                })]
                            })
                        })
                    }, this.renderRequestSendGift = () => {
                        let {
                            giftCode: e,
                            onClose: t,
                            giftMessageError: n
                        } = this.props;
                        return (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("div", {
                                className: M.blurb,
                                children: this.headerBlurb
                            }), null == n && (0, s.jsx)(y, {
                                giftCode: e,
                                onClose: t
                            }), (0, s.jsx)("div", {
                                className: M.divider
                            }), this.renderGiftCodeSection()]
                        })
                    }, this.renderConfirmSentGift = () => {
                        let {
                            giftRecipient: e
                        } = this.props;
                        return (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(E.default, {
                                user: e,
                                className: M.giftRecipient,
                                size: u.AvatarSizes.SIZE_80
                            }), (0, s.jsx)(u.Heading, {
                                className: M.giftRecipientName,
                                variant: "heading-md/semibold",
                                children: R.default.getName(e)
                            }), (0, s.jsxs)("div", {
                                className: M.giftRecipientTag,
                                children: [" ", R.default.getUserTag(e)]
                            }), (0, s.jsx)("div", {
                                className: M.giftSentMessage,
                                children: this.headerBlurb
                            })]
                        })
                    }
                }
            }
            let y = e => {
                let {
                    giftCode: t,
                    onClose: n
                } = e;
                r.useEffect(() => {
                    c.default.fetchRelationships(), (0, f.fetchUserAffinities)()
                }, []);
                let [i, o] = r.useState(), [p, S] = r.useState(!1), [_, g] = r.useState(!1), {
                    userAffinities: m,
                    isLoading: A
                } = (0, a.useStateFromStoresObject)([h.default], () => ({
                    userAffinities: h.default.getUserAffinitiesUserIds(),
                    isLoading: h.default.getFetching()
                })), N = Array.from(m.values()), O = (0, a.useStateFromStores)([I.default], () => I.default.getFriendIDs()), x = l.difference(O, N), v = [...N, ...x], P = (0, a.useStateFromStores)([T.default], () => T.default.filter(e => v.includes(e.id) && !e.bot), [v]), L = null == P || 0 === P.length;
                if (L) return null;
                let y = l.sortBy(P, e => v.indexOf(e.id));
                return (0, s.jsxs)("div", {
                    className: M.giftRecipientSection,
                    children: [(0, s.jsx)(u.FormTitle, {
                        children: F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
                    }), (0, s.jsxs)("div", {
                        className: M.giftRecipient,
                        children: [(0, s.jsx)(u.SearchableSelect, {
                            placeholder: F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                            wrapperClassName: M.giftRecipientInputWrapper,
                            className: p ? M.giftRecipientInputError : void 0,
                            renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, s.jsx)(E.default, {
                                user: e.value,
                                size: u.AvatarSizes.SIZE_20
                            }),
                            renderLeading: () => A ? (0, s.jsx)(u.Spinner, {
                                type: u.SpinnerTypes.PULSING_ELLIPSIS
                            }) : null,
                            value: i,
                            onChange: e => {
                                o(e), S(!1)
                            },
                            options: y.map(e => ({
                                value: e,
                                label: "".concat(R.default.getUserTag(e))
                            }))
                        }), (0, s.jsx)(u.Button, {
                            disabled: null == i,
                            submitting: _,
                            className: M.sendToRecipientButton,
                            onClick: () => {
                                g(!0), (0, C.sendGiftMessage)(i, t).then(() => {
                                    n(), (0, d.popAllLayers)()
                                }).catch(() => {
                                    S(!0), g(!1)
                                })
                            },
                            children: F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                        })]
                    }), (0, s.jsx)("div", {
                        className: p ? M.subtextError : M.subtext,
                        children: p ? F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
                    })]
                })
            };
            var b = a.default.connectStores([_.default], () => ({
                obscureGiftCode: _.default.enabled
            }))(L)
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("884691");

            function r(e, t) {
                let n = s.useRef(e);
                return s.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
            }
        },
        162426: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var s = n("884691"),
                r = n("599417"),
                i = n("782340");

            function l(e) {
                let [t, n] = s.useState(!1), [l, a] = s.useState(null), o = s.useCallback(async function() {
                    for (var t = arguments.length, s = Array(t), l = 0; l < t; l++) s[l] = arguments[l];
                    try {
                        return a(null), n(!0), await e(...s)
                    } catch (e) {
                        e.message !== i.default.Messages.MFA_V2_CANCELED && a(new r.default(e))
                    } finally {
                        n(!1)
                    }
                }, [e]);
                return [o, {
                    loading: t,
                    error: l
                }]
            }
        },
        923702: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("516555"),
                l = n("172858"),
                a = function(e) {
                    let {
                        confettiTarget: t,
                        confettiCanvas: n,
                        sprites: a,
                        colors: o
                    } = e, [u, d] = r.useState(null), c = (0, i.useConfettiCannon)(n, u), [f, p] = r.useState(!1);
                    return r.useEffect(() => {
                        let e = Array(10).fill(0);
                        return null != t && c.isReady && !f && (e = e.map((n, s) => setTimeout(() => {
                            var n;
                            s === e.length - 1 && p(!0), c.createMultipleConfetti((n = t.getBoundingClientRect(), {
                                ...l.COMMON_CONFETTI_BASE_CONFIG,
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: n.x,
                                        y: n.y
                                    },
                                    maxValue: {
                                        x: n.x + n.width,
                                        y: n.y + n.height / 2
                                    }
                                },
                                velocity: {
                                    type: "static-random",
                                    minValue: {
                                        x: -100,
                                        y: -50
                                    },
                                    maxValue: {
                                        x: 100,
                                        y: -300
                                    }
                                },
                                dragCoefficient: {
                                    type: "static",
                                    value: 1e-4
                                }
                            }), 50)
                        }, 100 * s))), () => {
                            for (let t of e) clearTimeout(t)
                        }
                    }, [c, t, f]), (0, s.jsx)(i.SpriteCanvas, {
                        ref: d,
                        sprites: null != a ? a : l.COMMON_CONFETTI_SPRITES,
                        colors: null != o ? o : l.COMMON_CONFETTI_COLORS,
                        spriteWidth: l.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: l.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    })
                }
        },
        716120: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                l = n("65597"),
                a = n("854588"),
                o = n("206230"),
                u = n("284679"),
                d = n("491232"),
                c = n("408381"),
                f = n("268779"),
                p = e => {
                    let {
                        asset: t,
                        size: n = c.MAX_CONTENT_WIDTH,
                        className: r,
                        style: p,
                        children: E
                    } = e, C = (0, l.default)([o.default], () => o.default.saturation);
                    return (0, s.jsx)("div", {
                        className: i(f.banner, r),
                        style: (() => {
                            if (null == t) return p;
                            let e = (0, d.getCollectiblesAssetURL)(t, {
                                size: n,
                                format: "jpg"
                            });
                            if (1 === C) return {
                                ...p,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let s = (0, u.hexOpacityToRgba)(a.default.unsafe_rawColors.BLACK_500, 1 - C);
                            return {
                                ...p,
                                backgroundImage: "linear-gradient(".concat(s, ", ").concat(s, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: E
                    })
                }
        },
        658756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CollectiblesCollectedModalInner: function() {
                    return M
                },
                default: function() {
                    return L
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                l = n.n(i),
                a = n("516555"),
                o = n("627445"),
                u = n.n(o),
                d = n("65597"),
                c = n("77078"),
                f = n("54239"),
                p = n("206230"),
                E = n("812204"),
                C = n("685665"),
                S = n("606292"),
                I = n("688318"),
                _ = n("38766"),
                h = n("601095"),
                T = n("493390"),
                g = n("697218"),
                m = n("730297"),
                A = n("806410"),
                N = n("923702"),
                O = n("716120"),
                x = n("408381"),
                R = n("57940"),
                v = n("782340"),
                P = n("99242"),
                F = n("53708");
            let M = e => {
                var t, n;
                let {
                    product: i,
                    onClose: l,
                    confettiTarget: a,
                    confettiCanvas: o,
                    category: M,
                    analyticsLocations: L
                } = e, {
                    confettiColors: y,
                    confettiSprites: b,
                    backgroundColors: j,
                    buttonColors: U
                } = (0, R.default)(M), D = (0, d.default)([g.default], () => {
                    let e = g.default.getCurrentUser();
                    return u(null != e, "User cannot be undefined"), e
                }), B = (0, d.default)([p.default], () => p.default.useReducedMotion), k = null !== (t = i.items.find(m.isAvatarDecorationRecord)) && void 0 !== t ? t : null, G = null !== (n = i.items.find(A.isProfileEffectRecord)) && void 0 !== n ? n : null, {
                    avatarDecorationSrc: H
                } = (0, I.default)({
                    user: D,
                    avatarDecorationOverride: k,
                    size: (0, S.getDecorationSizeForAvatarSize)(c.AvatarSizes.SIZE_120)
                }), w = r.useRef(null), {
                    analyticsLocations: V,
                    AnalyticsLocationProvider: Y
                } = (0, C.default)([...L, E.default.COLLECTIBLES_COLLECTED_MODAL]), z = (0, _.default)({
                    analyticsLocations: V
                });
                return null == k && null == G ? null : (0, s.jsxs)(Y, {
                    children: [(0, s.jsxs)("div", {
                        className: P.modalInner,
                        ref: w,
                        style: null != j ? {
                            background: (0, x.getBackgroundGradient)(j)
                        } : void 0,
                        children: [(0, s.jsxs)("div", {
                            className: P.bannerContainer,
                            children: [(0, s.jsx)(O.default, {
                                asset: M.banner,
                                size: 440,
                                className: P.decorationBanner
                            }), null != k && (0, s.jsx)(c.Avatar, {
                                size: c.AvatarSizes.SIZE_120,
                                src: F,
                                avatarDecoration: H,
                                className: P.avatarDecoration,
                                "aria-label": i.name
                            }), null != G && (0, s.jsx)("div", {
                                className: P.profileEffectShopPreview,
                                children: (0, s.jsx)(h.default, {
                                    forCollectedModal: !0,
                                    profileEffectId: null == G ? void 0 : G.id
                                })
                            })]
                        }), (0, s.jsxs)("div", {
                            className: P.collectedInfoContainer,
                            children: [(0, s.jsxs)("div", {
                                className: P.collectedTextContainer,
                                children: [(0, s.jsx)(c.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: v.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: i.name
                                    })
                                }), (0, s.jsx)(c.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: null != G ? v.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : v.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, s.jsx)(c.Button, {
                                onClick: () => {
                                    l(), (0, f.popLayer)(), z(), null != k ? (0, S.openAvatarDecorationModal)({
                                        initialSelectedDecoration: i.items.find(m.isAvatarDecorationRecord),
                                        analyticsLocations: V
                                    }) : null != G && (0, T.openProfileEffectModal)({
                                        analyticsLocations: V,
                                        initialSelectedEffectID: null == G ? void 0 : G.id
                                    })
                                },
                                style: null != U ? {
                                    background: (0, x.getBackgroundGradient)(U, 90)
                                } : void 0,
                                children: v.default.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, s.jsx)(c.ModalCloseButton, {
                            onClick: l,
                            className: P.modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !B && (0, s.jsx)(N.default, {
                        confettiTarget: null != a ? a : w.current,
                        confettiCanvas: o,
                        sprites: b,
                        colors: y
                    })]
                })
            };
            var L = e => {
                let {
                    transitionState: t,
                    product: n,
                    category: i,
                    onClose: o,
                    analyticsLocations: u
                } = e, d = r.useRef(new a.Environment), [f, p] = r.useState(null);
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(a.ConfettiCanvas, {
                        ref: p,
                        className: P.confettiCanvas,
                        environment: d.current
                    }), (0, s.jsx)(c.ModalRoot, {
                        transitionState: t,
                        size: c.ModalSize.DYNAMIC,
                        children: (0, s.jsx)(c.ModalContent, {
                            className: l(P.modalInner, P.modalContentOverrides),
                            children: (0, s.jsx)(M, {
                                product: n,
                                category: i,
                                onClose: o,
                                confettiCanvas: f,
                                analyticsLocations: u
                            })
                        })
                    })]
                })
            }
        },
        408381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_CONTENT_WIDTH: function() {
                    return s
                },
                getLogoSize: function() {
                    return r
                },
                getBackgroundGradient: function() {
                    return i
                }
            });
            let s = 1060,
                r = e => 3.8 * e,
                i = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: n,
                            secondary: s
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(n.toHslString(), ", ").concat(s.toHslString(), ")")
                }
        },
        57940: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var s = n("656280"),
                r = n.n(s),
                i = n("635058"),
                l = n("65597"),
                a = n("669491"),
                o = n("206230"),
                u = n("388491"),
                d = n("172858");
            let c = r(a.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                f = r(a.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                p = (e, t) => {
                    let n = e.toRgb(),
                        s = t.toRgb(),
                        [i, l, a] = (0, u.getValueInColorGradientByPercentage)([n.r, n.g, n.b], [s.r, s.g, s.b], 50);
                    return r({
                        r: i,
                        g: l,
                        b: a
                    })
                },
                E = (e, t) => {
                    let n = r(e),
                        s = r(t),
                        i = p(n, s);
                    return {
                        primary: n,
                        secondary: s,
                        border: i.setAlpha(.4)
                    }
                },
                C = (e, t) => {
                    let n = r(e),
                        s = r(t),
                        i = p(n, s);
                    return {
                        primary: n,
                        secondary: s,
                        text: r(i.isLight() ? f : c)
                    }
                },
                S = (e, t) => {
                    let {
                        h: n,
                        s,
                        l: i
                    } = e.toHsl();
                    return r({
                        h: n,
                        s: s * t,
                        l: i
                    })
                },
                I = {
                    [i.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: E("#146144", "#021A0E"),
                        buttonColors: C("#028737", "#00694A"),
                        confettiSprites: [n("655029"), n("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [i.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: E("#4B79B0", "#0F0E3A"),
                        buttonColors: C("#8A45C1", "#136897"),
                        confettiSprites: [n("597704"), n("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [i.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: E("#E8B26B", "#7A3A00"),
                        buttonColors: C("#FFC355", "#FF9537"),
                        confettiSprites: [n("286642"), n("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [i.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: E("#732565", "#111D40"),
                        buttonColors: C(a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: d.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                        confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                    },
                    [i.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: E("#5280DC", "#060F25"),
                        buttonColors: C("#496BDB", "#3E41B5"),
                        confettiSprites: [n("638538"), n("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [i.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: E("#FFC267", "#6C1A00"),
                        buttonColors: C("#F5A142", "#E4760E"),
                        confettiSprites: [n("740683"), n("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    },
                    [i.CollectiblesCategorySkuId.WINTER]: {
                        backgroundColors: E("#467FFF", "#154ECF"),
                        buttonColors: C("#44C7FF", "#009DFF"),
                        confettiSprites: [n("770704"), n("165057")],
                        confettiColors: ["#3DC3FF", "#297AFF", "#FD8BFF", "#FF3BF5"]
                    }
                };
            var _ = e => {
                let t = (0, l.default)([o.default], () => o.default.saturation);
                if (null == e) return {};
                let n = I[e.skuId];
                return (null == n ? void 0 : n.backgroundColors) == null || 1 === t ? null != n ? n : {} : {
                    ...n,
                    backgroundColors: {
                        primary: S(n.backgroundColors.primary, t),
                        secondary: S(n.backgroundColors.secondary, t),
                        border: S(n.backgroundColors.border, t)
                    },
                    buttonColors: {
                        primary: S(n.buttonColors.primary, t),
                        secondary: S(n.buttonColors.secondary, t),
                        text: n.buttonColors.text
                    },
                    confettiColors: n.confettiColors.map(e => S(r(e), t).toHexString())
                }
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return l
                },
                setHotspotOverride: function() {
                    return a
                },
                clearHotspotOverride: function() {
                    return o
                }
            });
            var s = n("913144"),
                r = n("599110"),
                i = n("49111");

            function l(e) {
                r.default.track(i.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), s.default.wait(() => {
                    s.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function a(e, t) {
                s.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function o(e) {
                s.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var s = n("446674"),
                r = n("913144"),
                i = n("197881"),
                l = n("492397");
            let a = new Set,
                o = {};
            class u extends s.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (a = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (o = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && o[e];
                    return !(l.CONFERENCE_MODE_ENABLED || i.ProcessArgs.isDisallowPopupsSet()) && (n || !a.has(e))
                }
                hasHiddenHotspot(e) {
                    return a.has(e)
                }
                getHotspotOverride(e) {
                    return o[e]
                }
                getState() {
                    return {
                        hiddenHotspots: a,
                        hotspotOverrides: o
                    }
                }
            }
            u.displayName = "HotspotStore", u.persistKey = "hotspots", u.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var d = new u(r.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    a = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (a.has(t)) return !1;
                    a.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    o[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == o[t]) return !1;
                    delete o[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return i.default
                }
            });
            var s = n("533613");
            n.es(s, t);
            var r = n("597517");
            n.es(r, t);
            var i = n("269596")
        },
        894742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("516555"),
                l = n("65597"),
                a = n("812204"),
                o = n("685665"),
                u = n("697218"),
                d = n("635357"),
                c = n("642906"),
                f = n("85336"),
                p = n("385179"),
                E = n("292215"),
                C = n("158184"),
                S = n("385890"),
                I = n("337978"),
                _ = n("49111"),
                h = n("843455"),
                T = n("322859");
            let g = (e, t, n) => (0, s.jsx)(I.CollectiblesPaymentModalHeader, {
                step: n,
                onClose: () => t(!1)
            });

            function m(e) {
                let {
                    onClose: t,
                    onComplete: n,
                    transitionState: I,
                    loadId: m,
                    skuId: A,
                    isGift: N = !1,
                    giftRecipient: O,
                    giftMessage: x,
                    analyticsLocations: R,
                    returnRef: v
                } = e, {
                    analyticsLocations: P,
                    AnalyticsLocationProvider: F
                } = (0, o.default)([...R, a.default.COLLECTIBLES_PAYMENT_MODAL]), M = r.useRef(new i.Environment), [L, y] = r.useState(null), b = (0, l.default)([u.default], () => u.default.getCurrentUser()), j = [E.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, S.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, E.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...E.SHARED_STEP_CONFIGS, E.REVIEW_STEP_CONFIG, {
                    key: f.Step.CONFIRM,
                    renderStep: e => (0, s.jsx)(C.CollectiblesPaymentModalConfirmStep, {
                        ...e,
                        confettiCanvas: L,
                        analyticsLocations: P
                    }),
                    options: {
                        bodyClassName: T.modalOverrideBody,
                        sliderBodyClassName: T.modalOverrideSliderBody
                    }
                }];
                return (0, s.jsxs)(F, {
                    children: [(0, s.jsx)(i.ConfettiCanvas, {
                        ref: y,
                        className: T.confettiCanvas,
                        environment: M.current
                    }), (0, s.jsx)(c.PaymentContextProvider, {
                        stepConfigs: j,
                        applicationId: _.COLLECTIBLES_APPLICATION_ID,
                        skuIDs: [A],
                        isGift: N,
                        activeSubscription: null,
                        purchaseType: h.PurchaseTypes.ONE_TIME,
                        children: (0, s.jsx)(d.GiftContextProvider, {
                            isGift: N,
                            giftRecipient: null != O ? O : b,
                            giftMessage: x,
                            children: (0, s.jsx)(p.PaymentModal, {
                                onClose: t,
                                onComplete: n,
                                loadId: m,
                                applicationId: _.COLLECTIBLES_APPLICATION_ID,
                                skuId: A,
                                initialPlanId: null,
                                analyticsLocations: P,
                                transitionState: I,
                                renderHeader: g,
                                returnRef: v,
                                hideShadow: !0
                            })
                        })
                    })]
                })
            }
        },
        158184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CollectiblesPaymentModalConfirmStep: function() {
                    return C
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("627445"),
                i = n.n(r),
                l = n("65597"),
                a = n("749432"),
                o = n("853987"),
                u = n("658756"),
                d = n("635357"),
                c = n("642906"),
                f = n("650484"),
                p = n("367767");

            function E(e) {
                let {
                    handleClose: t,
                    confettiCanvas: n,
                    analyticsLocations: r
                } = e, {
                    skusById: a,
                    selectedSkuId: d,
                    application: E
                } = (0, c.usePaymentContext)(), {
                    product: C,
                    category: S
                } = (0, l.useStateFromStoresObject)([o.default], () => ({
                    product: o.default.getProduct(d),
                    category: o.default.getCategoryForProduct(d)
                }));
                i(null != d, "Expected selectedSkuId"), i(null != E, "Expected application");
                let I = a[d];
                return (i(null != I, "Expected sku"), null == S || null == C) ? null : (0, s.jsxs)(f.PaymentPortalBody, {
                    children: [(0, s.jsx)(p.default, {}), (0, s.jsx)(u.CollectiblesCollectedModalInner, {
                        product: C,
                        category: S,
                        onClose: t,
                        confettiCanvas: n,
                        analyticsLocations: r
                    })]
                })
            }

            function C(e) {
                let {
                    isGift: t,
                    giftCode: n,
                    selectedGiftStyle: r,
                    hasSentMessage: i,
                    giftRecipient: l,
                    giftMessageError: o,
                    isSendingMessage: u
                } = (0, d.useGiftContext)();
                return t ? (0, s.jsx)(a.default, {
                    giftCode: n,
                    onClose: e.handleClose,
                    selectedGiftStyle: r,
                    hasSentMessage: i,
                    giftRecipient: l,
                    giftMessageError: o,
                    isSendingMessage: u
                }) : (0, s.jsx)(E, {
                    ...e
                })
            }
        },
        385890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                COLLECTIBLES_GIFT_CUSTOMIZATION_STEP: function() {
                    return S
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                i = n("705820"),
                l = n("208559"),
                a = n("177998"),
                o = n("617223"),
                u = n("145131"),
                d = n("635357"),
                c = n("642906"),
                f = n("85336"),
                p = n("650484"),
                E = n("782340"),
                C = n("578956");
            let S = {
                key: f.Step.GIFT_CUSTOMIZATION,
                renderStep: e => (0, s.jsx)(_, {
                    ...e
                }),
                options: {
                    isLargeModal: !0
                }
            };

            function I(e) {
                let {
                    onStepChange: t,
                    onBackClick: n,
                    showBackButton: i
                } = e, {
                    hasPaymentSources: l
                } = (0, c.usePaymentContext)(), o = l ? f.Step.REVIEW : f.Step.ADD_PAYMENT_STEPS;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(r.Button, {
                        onClick: () => t(o),
                        children: E.default.Messages.PAGINATION_NEXT
                    }), i ? (0, s.jsx)(a.default, {
                        onClick: n
                    }) : null]
                })
            }

            function _(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, {
                    giftRecipient: a,
                    customGiftMessage: c = "",
                    setCustomGiftMessage: f
                } = (0, d.useGiftContext)();
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(p.PaymentPortalBody, {
                        children: (0, s.jsxs)("div", {
                            className: C.stepBody,
                            children: [(0, s.jsx)("div", {
                                className: C.bodyColumnMiddle,
                                children: (0, s.jsx)(l.GiftAnimationOptions, {})
                            }), (0, s.jsxs)("div", {
                                className: C.bodyColumnRight,
                                children: [(0, s.jsx)(o.SendGiftToUser, {
                                    giftRecipient: a
                                }), (0, s.jsx)(i.default, {
                                    sectionTitle: E.default.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => null == f ? void 0 : f(e),
                                    pendingText: c,
                                    currentText: c
                                })]
                            })]
                        })
                    }), (0, s.jsx)(p.PaymentPortalFooter, {
                        children: (0, s.jsx)(r.ModalFooter, {
                            justify: u.default.Justify.BETWEEN,
                            align: u.default.Align.CENTER,
                            children: (0, s.jsx)(I, {
                                onStepChange: t,
                                showBackButton: !0,
                                onBackClick: n
                            })
                        })
                    })]
                })
            }
        },
        337978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CollectiblesPaymentModalHeader: function() {
                    return f
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                i = n("834897"),
                l = n("635357"),
                a = n("85336"),
                o = n("425480"),
                u = n("782340"),
                d = n("504898"),
                c = n("551290");
            let f = e => {
                let {
                    step: t,
                    onClose: n
                } = e, {
                    isGift: f
                } = (0, l.useGiftContext)(), p = (0, i.default)(o.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
                if (t === a.Step.CONFIRM || t === a.Step.BENEFITS) return (0, s.jsx)("div", {});
                if (f && (t === a.Step.GIFT_CUSTOMIZATION || t === a.Step.REVIEW)) {
                    let e = t === a.Step.REVIEW ? u.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER : u.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER;
                    return (0, s.jsxs)(r.ModalHeader, {
                        className: d.headerContainerGift,
                        separator: !1,
                        children: [(0, s.jsx)("div", {
                            className: d.headerGift,
                            children: (0, s.jsx)(r.Heading, {
                                variant: "heading-lg/semibold",
                                children: e
                            })
                        }), (0, s.jsx)(r.ModalCloseButton, {
                            onClick: n,
                            className: d.closeButtonGift
                        })]
                    })
                }
                return (0, s.jsxs)("div", {
                    className: d.headerContainer,
                    children: [!p && (0, s.jsx)("div", {
                        className: d.headerImageContainer,
                        "aria-hidden": "true",
                        "data-accessibility": "desaturate",
                        children: (0, s.jsx)("img", {
                            src: c,
                            alt: "",
                            className: d.headerImage
                        })
                    }), (0, s.jsx)(r.ModalCloseButton, {
                        withCircleBackground: !0,
                        className: d.closeButton,
                        onClick: n
                    })]
                })
            }
        },
        7127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalConfirmStep: function() {
                    return f
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("627445"),
                i = n.n(r),
                l = n("77078"),
                a = n("642906"),
                o = n("367767"),
                u = n("650484"),
                d = n("782340"),
                c = n("966425");

            function f(e) {
                let {
                    handleClose: t
                } = e, {
                    skusById: n,
                    selectedSkuId: r,
                    application: f
                } = (0, a.usePaymentContext)();
                i(null != r, "Expected selectedSkuId"), i(null != f, "Expected application");
                let p = n[r];
                i(null != p, "Expected sku");
                let E = d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: f.name,
                    itemName: p.name
                });
                return (0, s.jsxs)(u.PaymentPortalBody, {
                    children: [(0, s.jsx)(o.default, {}), (0, s.jsxs)("div", {
                        className: c.confirmation,
                        children: [(0, s.jsx)(l.Heading, {
                            variant: "heading-xxl/bold",
                            className: c.confirmationHeader,
                            children: "Success!"
                        }), (0, s.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: E
                        }), (0, s.jsx)("div", {
                            className: c.divider
                        }), (0, s.jsx)(l.Button, {
                            onClick: t,
                            children: d.default.Messages.CLOSE
                        })]
                    })]
                })
            }
        },
        292215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
                    return f
                },
                ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
                    return p
                },
                REVIEW_STEP_CONFIG: function() {
                    return S
                },
                ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
                    return I
                },
                SHARED_STEP_CONFIGS: function() {
                    return _
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("357957"),
                i = n("85336"),
                l = n("262683"),
                a = n("946359"),
                o = n("724269"),
                u = n("7127"),
                d = n("99836"),
                c = n("217796");
            let f = {
                    key: null,
                    renderStep: e => (0, s.jsx)(c.OneTimePaymentPredicateStep, {
                        ...e
                    })
                },
                p = {
                    key: i.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)(l.PaymentModalAddPaymentStep, {
                            ...e,
                            breadcrumbSteps: [i.Step.ADD_PAYMENT_STEPS, i.Step.REVIEW, i.Step.CONFIRM],
                            onReturn: () => {
                                let t = r.default.paymentSources;
                                0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(i.Step.REVIEW, {
                                    trackedFromStep: i.Step.ADD_PAYMENT_STEPS
                                })
                            }
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                },
                E = {
                    key: i.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, s.jsx)(o.default, {})
                },
                C = {
                    key: i.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, s.jsx)(a.default, {})
                },
                S = {
                    key: i.Step.REVIEW,
                    renderStep: e => (0, s.jsx)(d.PaymentModalReviewStep, {
                        ...e
                    })
                },
                I = {
                    key: i.Step.CONFIRM,
                    renderStep: e => (0, s.jsx)(u.PaymentModalConfirmStep, {
                        ...e
                    })
                },
                _ = [E, C]
        },
        217796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                OneTimePaymentPredicateStep: function() {
                    return p
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("627445"),
                l = n.n(i),
                a = n("245187"),
                o = n("635357"),
                u = n("642906"),
                d = n("85336"),
                c = n("628738"),
                f = n("49111");

            function p(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, {
                    blockedPayments: i,
                    hasFetchedSkus: p,
                    paymentSources: E,
                    hasFetchedPaymentSources: C,
                    application: S,
                    skusById: I,
                    selectedSkuId: _
                } = (0, u.usePaymentContext)(), {
                    isGift: h
                } = (0, o.useGiftContext)(), [T, g] = r.useState(!0);
                return (r.useEffect(() => {
                    let e = null != S;
                    p && C && e && g(!1)
                }, [p, C, S]), r.useEffect(() => {
                    if (T || i) return;
                    l(null != _, "Expected selectedSkuId");
                    let e = I[_];
                    if (h && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
                        t(d.Step.GIFT_CUSTOMIZATION);
                        return
                    }
                    if (0 === Object.keys(E).length) {
                        t(d.Step.ADD_PAYMENT_STEPS);
                        return
                    }
                    t(d.Step.REVIEW)
                }, [T, i, t, E, h, I, _]), T) ? (0, s.jsx)(c.default, {}) : i ? (0, s.jsx)(a.BlockedPaymentsContentModal, {
                    onClose: n
                }) : null
            }
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007"), n("70102");
            var s = n("37983"),
                r = n("884691"),
                i = n("446674"),
                l = n("206230"),
                a = n("491605"),
                o = n("210721"),
                u = n("78345");

            function d(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: d = !0,
                    defaultAnimationState: c,
                    idleAnimationState: f
                } = e, p = (0, i.useStateFromStores)([l.default], () => l.default.useReducedMotion), [E, C] = r.useState(c), S = r.useRef((0, o.getGiftAnimationData)(t, E)), [I, _] = r.useState(null == f), [h, T] = r.useState(!1), [g, m] = r.useState(-1), A = () => {
                    S.current = (0, o.getGiftAnimationData)(t, E), m(e => e + 1)
                }, N = () => {
                    _(!1), T(!0), m(-1), C(c)
                };
                r.useEffect(() => {
                    null == f && C(c)
                }, [f, c]), r.useEffect(() => {
                    if (null != f && g >= 0) {
                        N();
                        return
                    }
                    A()
                }, [t, f]), r.useEffect(() => {
                    (!h || null == f) && A()
                }, [E]), r.useEffect(() => {
                    h && (_(null == f), T(!1), A())
                }, [h]);
                if (!u.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, s.jsx)(a.default, {
                    importData: S.current,
                    shouldAnimate: !p && d,
                    className: n,
                    versionKey: g,
                    onComplete: null != f ? () => {
                        null != f && (C(f), _(!0))
                    } : void 0,
                    loop: I
                })
            }
        },
        601095: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                l = n.n(i),
                a = n("859498"),
                o = n("635471"),
                u = n("825054"),
                d = n("93902"),
                c = e => {
                    let {
                        profileEffectId: t,
                        isHovering: n,
                        forCollectedModal: i = !1,
                        isPurchased: c
                    } = e, f = i ? 250 : .1, [p, E] = r.useState(!0);
                    return (r.useEffect(() => {
                        if (!0 !== i) E(!1);
                        else {
                            let e = setTimeout(() => {
                                E(!1)
                            }, f);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [f, i]), null != t) ? (0, s.jsxs)("div", {
                        className: l(u.previewContainer, {
                            [u.previewContainerAnimation]: i
                        }),
                        children: [(0, s.jsx)("img", {
                            src: d,
                            alt: " ",
                            className: i ? u.previewForCollected : u.preview,
                            "aria-hidden": !0
                        }), !p && (0, s.jsx)("div", {
                            className: c ? u.purchasedEffect : void 0,
                            children: (0, s.jsx)(o.default, {
                                profileEffectID: t,
                                useThumbnail: !0,
                                autoPlay: i,
                                restartMethod: a.RestartMethod.FromStart,
                                resetOnHover: !0,
                                isHovering: n,
                                introDelay: f,
                                useOpacityOnHover: !1
                            })
                        })]
                    }) : null
                }
        },
        671484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("702976");
            var s, r = n("866227"),
                i = n.n(r),
                l = n("666038"),
                a = n("568734"),
                o = n("797647"),
                u = n("646718");
            let d = Object.freeze({
                PAYMENT_SOURCE_REQUIRED: 1,
                EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
                NOT_SELF_REDEEMABLE: 4
            });
            s = class e extends l.default {
                static createFromServer(t) {
                    return new e({
                        userId: null != t.user ? t.user.id : null,
                        code: t.code,
                        skuId: t.sku_id,
                        uses: t.uses,
                        maxUses: t.max_uses,
                        storeListingId: null != t.store_listing ? t.store_listing.id : null,
                        expiresAt: null != t.expires_at ? i(t.expires_at) : null,
                        redeemed: t.redeemed,
                        subscriptionPlanId: null != t.subscription_plan ? t.subscription_plan.id : t.subscription_plan_id,
                        subscriptionPlan: null != t.subscription_plan ? o.default.createFromServer(t.subscription_plan) : null,
                        revoked: !1,
                        entitlementBranches: null != t.entitlement_branches ? t.entitlement_branches : null,
                        flags: null != t.flags ? t.flags : 0,
                        giftStyle: t.gift_style,
                        subscriptionTrial: null != t.subscription_trial ? {
                            id: t.subscription_trial.id,
                            interval: t.subscription_trial.interval,
                            intervalCount: t.subscription_trial.interval_count,
                            skuId: t.subscription_trial.sku_id
                        } : null,
                        promotion: null != t.promotion ? {
                            id: t.promotion.id,
                            startDate: t.promotion.start_date,
                            endDate: t.promotion.end_date,
                            inboundHeaderText: t.promotion.inbound_header_text,
                            inboundBodyText: t.promotion.inbound_body_text,
                            inboundHelpCenterLink: t.promotion.inbound_help_center_link
                        } : null
                    })
                }
                isExpired() {
                    let e = this.expiresAt;
                    return null != e && i().isAfter(e)
                }
                get hasMultipleCopies() {
                    return this.maxUses > 1
                }
                get isClaimed() {
                    return this.uses >= this.maxUses
                }
                get remainingUses() {
                    return this.maxUses - this.uses
                }
                get isSubscription() {
                    return null != this.subscriptionPlanId
                }
                get premiumSubscriptionType() {
                    return this.isSubscription && u.PremiumSubscriptionSKUToPremiumType[this.skuId] || null
                }
                get isSelfRedeemable() {
                    return !(0, a.hasFlag)(this.flags, d.NOT_SELF_REDEEMABLE)
                }
                get isExistingPremiumSubscriptionDisallowed() {
                    return (0, a.hasFlag)(this.flags, d.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
                }
                get analyticsData() {
                    return {
                        gift_code: this.code,
                        gift_code_max_uses: this.maxUses
                    }
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.userId = e.userId, this.code = e.code, this.skuId = e.skuId, this.uses = e.uses, this.maxUses = e.maxUses, this.expiresAt = e.expiresAt, this.redeemed = e.redeemed, this.storeListingId = e.storeListingId, this.subscriptionPlanId = e.subscriptionPlanId, this.subscriptionPlan = e.subscriptionPlan, this.revoked = e.revoked, this.entitlementBranches = e.entitlementBranches, this.flags = e.flags, this.subscriptionTrial = e.subscriptionTrial, this.promotion = e.promotion, this.giftStyle = e.giftStyle
                }
            }
        },
        843823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var s = n("446674"),
                r = n("913144"),
                i = n("27618");
            let l = !1,
                a = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                o = {
                    ...a
                };

            function u() {
                o.affinityUserIds = new Set(o.userAffinities.map(e => e.user_id).filter(e => !i.default.isBlocked(e)))
            }
            class d extends s.default.PersistedStore {
                initialize(e) {
                    this.waitFor(i.default), null != e && (o.userAffinities = e.userAffinities, o.affinityUserIds = new Set(e.affinityUserIds), o.lastFetched = e.lastFetched), this.syncWith([i.default], u)
                }
                needsRefresh() {
                    return Date.now() - o.lastFetched > 864e5
                }
                getFetching() {
                    return l
                }
                getState() {
                    return o
                }
                getUserAffinities() {
                    return o.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return o.affinityUserIds
                }
            }
            d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
            var c = new d(r.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    o.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), u(), l = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    l = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    l = !1
                },
                LOGOUT: function() {
                    o = {
                        ...a
                    }
                }
            })
        },
        188525: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CopyInputModes: function() {
                    return f
                },
                default: function() {
                    return E
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                l = n.n(i),
                a = n("77078"),
                o = n("474293"),
                u = n("145131"),
                d = n("782340"),
                c = n("863448");
            let f = {
                DEFAULT: "default",
                SUCCESS: "success",
                ERROR: "error"
            };
            class p extends r.PureComponent {
                select() {
                    var e;
                    null === (e = this.inputRef.current) || void 0 === e || e.select()
                }
                renderInput(e) {
                    var t;
                    let {
                        value: n,
                        mode: r
                    } = this.props, i = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
                    return (0, s.jsx)("input", {
                        className: l((0, o.getClass)(c, "input", r), {
                            [c.inputHidden]: e
                        }),
                        ref: this.inputRef,
                        type: "text",
                        value: n,
                        onClick: this.handleInputClick,
                        readOnly: !0,
                        "aria-labelledby": i
                    })
                }
                render() {
                    let e;
                    let {
                        text: t = d.default.Messages.COPY,
                        mode: n,
                        hideMessage: r,
                        className: i,
                        buttonLook: p
                    } = this.props, E = null != r;
                    switch (n) {
                        case f.SUCCESS:
                            e = a.ButtonColors.GREEN;
                            break;
                        case f.ERROR:
                            e = a.ButtonColors.RED;
                            break;
                        default:
                            e = this.props.buttonColor
                    }
                    return (0, s.jsx)(a.FocusRing, {
                        focusTarget: this.inputRef,
                        ringTarget: this.containerRef,
                        children: (0, s.jsx)("div", {
                            className: l((0, o.getClass)(c, "copyInput", n), i),
                            ref: this.containerRef,
                            children: (0, s.jsxs)(u.default, {
                                className: c.layout,
                                children: [(0, s.jsxs)(u.default, {
                                    className: c.inputWrapper,
                                    children: [this.renderInput(E), E ? (0, s.jsx)("div", {
                                        className: c.hiddenMessage,
                                        children: r
                                    }) : null]
                                }), (0, s.jsx)(u.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, s.jsx)(a.Button, {
                                        className: c.button,
                                        onClick: this.handleButtonClick,
                                        size: a.ButtonSizes.MIN,
                                        color: e,
                                        look: p,
                                        children: t
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = r.createRef(), this.containerRef = r.createRef(), this.handleButtonClick = () => {
                        this.select();
                        let {
                            onCopy: e,
                            value: t
                        } = this.props;
                        e(t)
                    }, this.handleInputClick = () => {
                        this.select()
                    }
                }
            }
            p.contextType = a.FormContext, p.defaultProps = {
                supportsCopy: !0,
                buttonColor: a.ButtonColors.PRIMARY,
                buttonLook: a.ButtonLooks.FILLED,
                mode: f.DEFAULT
            }, p.Modes = f, p.ButtonColors = a.ButtonColors, p.ButtonLooks = a.ButtonLooks;
            var E = p
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("926001"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: i,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, i.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("578478"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: i,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: r
                        })
                    })
                }, i.ImageIcon, void 0, {
                    size: 24
                })
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return _
                },
                default: function() {
                    return g
                }
            }), n("424973"), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                l = n.n(i),
                a = n("627445"),
                o = n.n(a),
                u = n("77078"),
                d = n("506885"),
                c = n("981601"),
                f = n("766274"),
                p = n("697218"),
                E = n("368121"),
                C = n("523096"),
                S = n("587974"),
                I = n("494101");
            let _ = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function h(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class T extends r.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: r,
                        extraDetail: i
                    } = this.props, l = [], a = e.length === t ? e.length : t - 1, o = this.renderMoreUsers(a), u = 0;
                    for (; u < a && u < e.length;) {
                        var d;
                        let t = null == o && null == i && u === e.length - 1,
                            a = n(e[u], t, u);
                        l.push(t ? (0, s.jsx)("div", {
                            className: I.avatarContainer,
                            children: a
                        }, h(null !== (d = e[u]) && void 0 !== d ? d : null, u)) : (0, s.jsx)(S.default, {
                            className: I.avatarContainerMasked,
                            height: r,
                            width: r,
                            mask: S.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: a
                        }, h(e[u], u))), u++
                    }
                    return null != i ? l.push(i) : null != o && l.push(o), l
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: i,
                        renderMoreUsers: l,
                        users: a
                    } = this.props, o = Math.min(e, a.length);
                    if (!i) {
                        if (null != n) {
                            if (n >= t) return (0, s.jsx)(r.Fragment, {
                                children: l("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > a.length) {
                                let e = n - a.length;
                                return (0, s.jsx)(r.Fragment, {
                                    children: l("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (o < a.length) {
                            let e = Math.min(a.length - o, 99);
                            return (0, s.jsx)(r.Fragment, {
                                children: l("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, s.jsx)(E.default, {
                        foreground: I.foreground,
                        className: I.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: r,
                        showUserPopout: i,
                        useFallbackUserForPopout: a
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, E = n.find(e => null != e && e.id === f), C = a && null == p.default.getUser(f);
                    return (0, s.jsx)(u.Popout, {
                        position: "right",
                        preload: null == E ? void 0 : () => (0, d.default)(E.id, E.getAvatarURL(r, 80), {
                            guildId: r
                        }),
                        shouldShow: !0 === i && null != f,
                        fixed: !0,
                        renderPopout: e => (o(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, s.jsx)(c.default, {
                            ...this.props,
                            user: C && null != E ? E : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, s.jsxs)("div", {
                            className: l(e, I.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.SIZE_24;
                                switch (e) {
                                    case _.SIZE_16:
                                        return I.size16;
                                    case _.SIZE_24:
                                        return I.size24;
                                    case _.SIZE_32:
                                        return I.size32;
                                    case _.SIZE_56:
                                        return I.size56;
                                    default:
                                        return I.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = r.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: r,
                            guildId: i,
                            size: l
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, s.jsx)("div", {
                                className: I.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % C.default.DEFAULT_AVATARS.length,
                                    t = C.default.DEFAULT_AVATARS[e];
                                return (0, s.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: I.avatar
                                })
                            }
                        }
                        let a = (0, s.jsx)("img", {
                            src: e.getAvatarURL(i, l),
                            alt: e.username,
                            className: I.avatar
                        }, e.id);
                        return r ? (0, s.jsx)(u.Clickable, {
                            className: I.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: a
                        }, e.id) : a
                    }
                }
            }
            T.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, s.jsx)("div", {
                        className: I.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: _.SIZE_24
            };
            var g = T
        }
    }
]);