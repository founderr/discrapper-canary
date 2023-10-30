(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94595"], {
        437412: function(t, e, s) {
            "use strict";
            t.exports = s.p + "5fca68e67f05bed32eb4.png"
        },
        669146: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return k
                }
            });
            var i = s("37983"),
                a = s("884691"),
                l = s("414456"),
                n = s.n(l),
                o = s("446674"),
                r = s("77078"),
                u = s("823411"),
                d = s("569272"),
                c = s("206230"),
                f = s("526887"),
                p = s("393414"),
                h = s("546463"),
                m = s("55411"),
                g = s("686470"),
                S = s("697218"),
                C = s("10514"),
                I = s("552712"),
                T = s("953109"),
                M = s("476765"),
                N = s("599110"),
                _ = s("402671"),
                x = s("659632"),
                y = s("380186"),
                E = s("158998"),
                O = s("210721"),
                A = s("845149"),
                R = s("65324"),
                G = s("646718"),
                b = s("49111"),
                j = s("782340"),
                v = s("139194");
            let F = t => {
                let {
                    openedGift: e
                } = t, {
                    createMultipleConfettiAt: s
                } = a.useContext(f.ConfettiCannonContext);
                return a.useEffect(() => {
                    e && s(window.innerWidth / 2, window.innerHeight / 4)
                }, [s, e]), null
            };
            class P extends a.Component {
                componentDidMount() {
                    let {
                        application: t,
                        sku: e,
                        customGiftMessage: s,
                        giftCode: i,
                        emojiName: a
                    } = this.props;
                    null == t && null != e && u.default.fetchApplication(e.applicationId);
                    let l = null != s || null != i.giftStyle,
                        n = null != a ? _.default.getURL(a) : void 0;
                    this.setState({
                        isCustomGift: l,
                        emojiURL: n
                    }), this.trackStepAnalytics()
                }
                get step() {
                    let {
                        libraryApplication: t,
                        accepting: e,
                        giftCode: s
                    } = this.props, {
                        error: i,
                        accepted: a,
                        opened: l,
                        isCustomGift: n
                    } = this.state;
                    return (0, x.getStep)(t, s, i, a, e, l, n)
                }
                get buttonText() {
                    return (0, x.getButtonText)(this.step, this.props.giftCode, this.state.isCustomGift)
                }
                get firstHeaderText() {
                    let {
                        isCustomGift: t,
                        opened: e,
                        accepted: s
                    } = this.state, {
                        giftCode: i,
                        subscriptionPlan: a
                    } = this.props;
                    if (t && !s) {
                        if (!e) return j.default.Messages.GIFT_RECIPIENT_INFO.format({
                            recipientDisplayName: E.default.getName(S.default.getCurrentUser())
                        });
                        {
                            let t = S.default.getUser(i.userId);
                            return j.default.Messages.GIFT_SUBSCRIPTION_INFO.format({
                                senderDisplayName: E.default.getName(t),
                                timeInterval: (null == a ? void 0 : a.interval) === G.SubscriptionIntervalTypes.MONTH ? j.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH : j.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                            })
                        }
                    }
                    return null == this.props.sku ? null : (0, x.getHeaderText)(this.step, this.props.giftCode, this.props.sku)
                }
                get secondHeaderText() {
                    if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
                    let t = S.default.getUser(this.props.giftCode.userId);
                    return j.default.Messages.GIFT_SENDER_INFO.format({
                        senderDisplayName: E.default.getName(t)
                    })
                }
                get bodyText() {
                    let {
                        sku: t,
                        accepting: e,
                        libraryApplication: s,
                        subscriptionPlan: i
                    } = this.props;
                    if (null == t) return null;
                    let {
                        error: a,
                        accepted: l,
                        isCustomGift: n,
                        opened: o
                    } = this.state;
                    return !o && n ? null : (0, x.getBodyText)({
                        step: this.step,
                        sku: t,
                        libraryApplication: s,
                        error: a,
                        accepted: l,
                        accepting: e,
                        onGoToLibrary: this.handleGoToLibrary,
                        subscriptionPlan: i
                    })
                }
                get errorMessage() {
                    let {
                        libraryApplication: t,
                        accepting: e
                    } = this.props, {
                        error: s,
                        accepted: i
                    } = this.state;
                    return (0, x.getErrorMessage)(t, s, i, e, this.handleGoToLibrary)
                }
                get handleClick() {
                    let {
                        giftCode: t,
                        onClose: e
                    } = this.props;
                    switch (this.step) {
                        case b.GiftCodeModalStates.ERROR:
                            return e;
                        case b.GiftCodeModalStates.SUCCESS:
                            if (__OVERLAY__ || null != t.subscriptionPlanId) return e;
                            return this.handleGoToLibrary;
                        case b.GiftCodeModalStates.OPEN:
                            return this.handleOpen;
                        case b.GiftCodeModalStates.CONFIRM:
                        default:
                            return this.handleAccept
                    }
                }
                trackStepAnalytics() {
                    let {
                        giftCode: t,
                        customGiftMessage: e
                    } = this.props, {
                        isCustomGift: s
                    } = this.state;
                    N.default.track(b.AnalyticEvents.GIFT_ACCEPT_STEP, {
                        to_step: this.step,
                        has_custom_message: s,
                        is_custom_message_edited: s && e !== j.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE,
                        gift_style: t.giftStyle,
                        gift_code: t.code
                    })
                }
                render() {
                    let {
                        application: t,
                        accepting: e,
                        onClose: s,
                        giftCode: a,
                        headerId: l,
                        transitionState: o,
                        useReducedMotion: u,
                        onComplete: d,
                        customGiftMessage: c,
                        emojiName: f
                    } = this.props, p = S.default.getUser(a.userId), {
                        isCustomGift: h,
                        accepted: m,
                        opened: g,
                        emojiURL: C
                    } = this.state, I = S.default.getCurrentUser(), M = (null == a ? void 0 : a.userId) != null && null != I && (null == I ? void 0 : I.id) != null && a.userId === I.id;
                    switch (this.step) {
                        case b.GiftCodeModalStates.ERROR:
                            null == d || d(a, !1);
                            break;
                        case b.GiftCodeModalStates.SUCCESS:
                            null == d || d(a, !0)
                    }
                    return (0, i.jsxs)("div", {
                        ref: this.modalRef,
                        children: [(0, i.jsxs)(r.ModalRoot, {
                            transitionState: o,
                            size: r.ModalSize.SMALL,
                            className: v.modal,
                            "aria-labelledby": l,
                            children: [null != a.giftStyle && !h && (0, i.jsx)(R.default, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: a.giftStyle,
                                className: v.seasonalGiftIcon
                            }), (0, i.jsx)("div", {
                                className: h ? void 0 : v.backSplash
                            }), (0, i.jsxs)(r.ModalContent, {
                                className: n({
                                    [v.content]: !h,
                                    [v.contentCustomGift]: h
                                }),
                                children: [(0, i.jsx)(r.ModalCloseButton, {
                                    onClick: s,
                                    className: v.closeButton
                                }), (null == a.giftStyle || h && m) && (0, i.jsx)(T.default, {
                                    size: T.default.Sizes.LARGE,
                                    game: t,
                                    skuId: a.skuId
                                }), (0, i.jsxs)(r.Heading, {
                                    id: l,
                                    className: n({
                                        [v.customGiftHeader]: h && !m,
                                        [v.header]: !h || m
                                    }),
                                    variant: "heading-sm/semibold",
                                    children: [(0, i.jsx)("div", {
                                        className: n({
                                            [v.customGiftHeaderText]: h
                                        }),
                                        children: this.firstHeaderText
                                    }), (0, i.jsx)("div", {
                                        children: this.secondHeaderText
                                    })]
                                }), !(h && !m) && (0, i.jsx)(r.Text, {
                                    className: v.body,
                                    variant: "text-sm/normal",
                                    children: this.bodyText
                                }), h && null != a.giftStyle && !m && (0, i.jsx)(R.default, {
                                    defaultAnimationState: this.getDefaultAnimationStatus(),
                                    idleAnimationState: this.getIdleAnimationStatus(),
                                    className: v.giftAnimation,
                                    giftStyle: a.giftStyle
                                }), h && this.state.opened && !this.state.accepted && null != c && "" !== c && !M && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(r.FormTitle, {
                                        children: j.default.Messages.GIFT_SENDER_INFO.format({
                                            senderDisplayName: E.default.getName(p)
                                        })
                                    }), (0, i.jsx)(r.Heading, {
                                        id: l,
                                        className: v.customMessage,
                                        variant: "heading-sm/bold",
                                        children: this.props.customGiftMessage
                                    })]
                                }), (0, i.jsx)(r.Button, {
                                    submitting: e,
                                    onClick: () => {
                                        this.trackStepAnalytics(), this.handleClick()
                                    },
                                    children: this.buttonText
                                })]
                            })]
                        }), null != a.giftStyle && !u && (0, i.jsx)(i.Fragment, {
                            children: !m && !e && g && (null == f || null == C ? (0, i.jsx)(F, {
                                openedGift: g && !m && !e
                            }) : (0, i.jsx)(A.default, {
                                confettiTarget: this.modalRef.current,
                                emojiURL: C
                            }))
                        })]
                    })
                }
                constructor(...t) {
                    super(...t), this.state = {
                        error: null,
                        accepted: !1,
                        opened: !1,
                        isCustomGift: !1,
                        step: void 0,
                        emojiURL: void 0
                    }, this.modalRef = a.createRef(), this.handleOpen = () => {
                        this.setState({
                            opened: !0
                        })
                    }, this.handleAccept = async () => {
                        let {
                            giftCode: t,
                            channelContext: e
                        } = this.props;
                        if (null == t) throw Error("GiftCode is null at acceptance.");
                        try {
                            await d.default.redeemGiftCode(t.code, {
                                channelId: e
                            }), this.setState({
                                accepted: !0
                            })
                        } catch (t) {
                            this.setState({
                                error: t
                            })
                        }
                    }, this.handleGoToLibrary = () => {
                        let {
                            onClose: t,
                            libraryApplication: e
                        } = this.props;
                        (0, p.transitionTo)(b.Routes.APPLICATION_LIBRARY, {
                            state: {
                                applicationId: null != e ? e.id : null
                            }
                        }), t()
                    }, this.getDefaultAnimationStatus = () => {
                        if (this.step === b.GiftCodeModalStates.OPEN) return O.AnimationState.IDLE;
                        return O.AnimationState.ACTION
                    }, this.getIdleAnimationStatus = () => {
                        if (this.step !== b.GiftCodeModalStates.OPEN) return O.AnimationState.LOOP
                    }
                }
            }
            let L = o.default.connectStores([g.default, I.default, h.default, m.default, C.default, c.default], t => {
                let {
                    giftCode: e
                } = t, s = I.default.get(e.skuId), i = null != s ? h.default.getGame(s.applicationId) : null, a = c.default.useReducedMotion;
                return {
                    sku: s,
                    libraryApplication: null != s ? (0, x.firstLibraryApplicationForGiftCode)(e, s, g.default) : null,
                    application: i,
                    subscriptionPlan: null != e.subscriptionPlanId ? (0, y.getOrFetchSubscriptionPlan)(e.subscriptionPlanId) : null,
                    accepting: m.default.getIsAccepting(e.code),
                    useReducedMotion: a
                }
            })(P);
            var k = t => {
                let {
                    channelContext: e,
                    code: s,
                    customGiftMessage: a,
                    emojiName: l,
                    soundId: n,
                    ...r
                } = t, u = (0, M.useUID)(), d = (0, o.useStateFromStores)([m.default], () => m.default.get(s));
                return null == d ? null : (0, i.jsx)(L, {
                    ...r,
                    customGiftMessage: a,
                    emojiName: l,
                    soundId: n,
                    channelContext: e,
                    giftCode: d,
                    headerId: u
                })
            }
        },
        845149: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return r
                }
            });
            var i = s("37983"),
                a = s("884691"),
                l = s("516555"),
                n = s("526887"),
                o = s("172858"),
                r = function(t) {
                    let {
                        confettiTarget: e,
                        colors: r,
                        emojiURL: u
                    } = t, [d, c] = a.useState(null), {
                        confettiCanvas: f
                    } = a.useContext(n.ConfettiCannonContext), p = (0, l.useConfettiCannon)(f, d), h = a.useMemo(() => [{
                        src: u,
                        colorize: !1
                    }, s("540346")], [u]);
                    return a.useEffect(() => {
                        let t = [, , , , , ].fill(0);
                        return null != e && (t = t.map((t, s) => setTimeout(() => {
                            var t;
                            p.createMultipleConfetti((t = e.getBoundingClientRect(), {
                                ...o.COMMON_CONFETTI_BASE_CONFIG,
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: t.left + 10,
                                        y: t.top + 50
                                    },
                                    maxValue: {
                                        x: t.right - 10,
                                        y: t.top + 100
                                    }
                                },
                                velocity: {
                                    type: "static-random",
                                    minValue: {
                                        x: -25,
                                        y: -25
                                    },
                                    maxValue: {
                                        x: 25,
                                        y: -75
                                    }
                                },
                                dragCoefficient: {
                                    type: "static",
                                    value: .001
                                }
                            }), 50)
                        }, 40 * s))), () => {
                            for (let e of t) clearTimeout(e)
                        }
                    }, [p, e]), (0, i.jsx)(l.SpriteCanvas, {
                        ref: c,
                        sprites: null != h ? h : o.COMMON_CONFETTI_SPRITES,
                        colors: null != r ? r : o.COMMON_CONFETTI_COLORS,
                        spriteWidth: o.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: o.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    })
                }
        }
    }
]);