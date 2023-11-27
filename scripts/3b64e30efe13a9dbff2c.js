(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["28110"], {
        315147: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3808a69f670fa9a67284.svg"
        },
        452113: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("850068"),
                r = n("524503"),
                a = n("393414"),
                u = n("162771"),
                s = n("642906"),
                o = n("385179"),
                d = n("49111");

            function f(e) {
                let {
                    onClose: t,
                    initialPlanId: n,
                    analyticsObject: f,
                    analyticsLocation: c,
                    analyticsLocations: E,
                    analyticsSubscriptionType: R,
                    renderHeader: _,
                    planGroup: p,
                    reviewWarningMessage: h,
                    applicationId: I,
                    guildId: S,
                    onComplete: L,
                    forcesTransitionToGuild: m,
                    skuId: A,
                    ...y
                } = e, {
                    subscriptionMetadataRequest: T
                } = (0, s.usePaymentContext)();
                return (0, i.jsx)(o.PaymentModal, {
                    ...y,
                    initialPlanId: n,
                    skuId: A,
                    onClose: e => {
                        t();
                        let n = null == T ? void 0 : T.guild_id;
                        e && null != n && (l.fetchSubscriptions(), (0, r.fetchEntitlementsForGuild)(n), null == L || L(), null != n && (m || u.default.getGuildId() !== n) && (0, a.transitionTo)(d.Routes.CHANNEL(n)))
                    },
                    analyticsLocations: E,
                    analyticsObject: f,
                    analyticsLocation: c,
                    analyticsSubscriptionType: R,
                    renderHeader: _,
                    planGroup: p,
                    reviewWarningMessage: h,
                    applicationId: I,
                    guildId: S,
                    forceNewPaymentModal: !0
                })
            }
        },
        179935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchReferralsRemaining: function() {
                    return s
                },
                checkRecipientEligibility: function() {
                    return o
                },
                createReferralTrial: function() {
                    return d
                },
                resolveReferralTrialOffer: function() {
                    return f
                }
            });
            var i = n("872717"),
                l = n("913144"),
                r = n("819689"),
                a = n("18494"),
                u = n("49111");
            let s = () => (l.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                }), i.default.get({
                    url: u.Endpoints.GET_REFERRALS_REMAINING,
                    oldFormErrors: !0
                }).then(e => {
                    l.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                        referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                        sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
                    })
                }, () => {
                    l.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
                    })
                })),
                o = e => (l.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                    recipientId: e
                }), i.default.post({
                    url: u.Endpoints.CREATE_REFERRAL_PREVIEW(e),
                    oldFormErrors: !0
                }).then(t => {
                    l.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                        recipientId: e,
                        is_eligible: null != t.body && t.body.is_eligible
                    })
                }, () => {
                    l.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                        recipientId: e
                    })
                }));
            async function d(e) {
                try {
                    var t;
                    let n = await i.default.post({
                            url: u.Endpoints.CREATE_REFERRAL(e),
                            oldFormErrors: !0
                        }),
                        r = null !== (t = n.body) && void 0 !== t ? t : null;
                    return l.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_SUCCESS",
                        userTrialOffer: r
                    }), {
                        userTrialOffer: r
                    }
                } catch (e) {
                    if (l.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_FAIL"
                        }), e.body.code === u.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                        let t = a.default.getCurrentlySelectedChannelId();
                        null != t && r.default.sendClydeError(t, e.body.code)
                    }
                }
            }
            async function f(e) {
                try {
                    var t;
                    let n = await i.default.get({
                            url: u.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                            oldFormErrors: !0
                        }),
                        r = null !== (t = n.body) && void 0 !== t ? t : null;
                    return l.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                        userTrialOffer: r
                    }), {
                        userTrialOffer: r
                    }
                } catch (t) {
                    l.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_FAIL",
                        userTrialOfferId: e
                    })
                }
            }
        },
        540692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var i = n("637612"),
                l = n("446674"),
                r = n("913144"),
                a = n("697218"),
                u = n("179935"),
                s = n("49111");
            let o = null,
                d = {},
                f = [],
                c = new Set,
                E = !1,
                R = new Set,
                _ = new Set,
                p = {},
                h = 0,
                I = null,
                S = () => !0;

            function L(e) {
                R.add(e)
            }

            function m(e) {
                let {
                    messages: t
                } = e;
                t.forEach(e => A(e))
            }

            function A(e) {
                let t = e.type === i.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!_.has(t) && !R.has(t)) {
                    var n;
                    n = t, R.add(n), r.default.wait(() => (0, u.resolveReferralTrialOffer)(t).catch(s.NOOP_NULL))
                }
            }
            class y extends l.default.Store {
                initialize() {
                    this.waitFor(a.default), this.syncWith([a.default], S)
                }
                checkAndFetchReferralsRemaining() {
                    null == o && !E && h < 5 && (null == I || I < Date.now()) && (0, u.fetchReferralsRemaining)()
                }
                getReferralsRemaining() {
                    return this.checkAndFetchReferralsRemaining(), o
                }
                getSentUserIds() {
                    return this.checkAndFetchReferralsRemaining(), null == f ? [] : f
                }
                isFetchingReferralsRemaining() {
                    return E
                }
                isFetchingRecipientEligibility(e) {
                    return c.has(e)
                }
                getRecipientEligibility(e) {
                    return void 0 === d[e] && !c.has(e) && (0, u.checkRecipientEligibility)(e), d[e]
                }
                getRelevantUserTrialOffer(e) {
                    return p[e]
                }
                isResolving(e) {
                    return R.has(e)
                }
            }
            y.displayName = "ReferralTrialStore";
            var T = new y(r.default, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    let {
                        userTrialOfferId: t,
                        recipientId: n
                    } = e;
                    if (!E && (0, u.fetchReferralsRemaining)(), !c.has(n) && (0, u.checkRecipientEligibility)(n), !R.has(t)) {
                        var i;
                        i = t, R.add(i), r.default.wait(() => (0, u.resolveReferralTrialOffer)(t).catch(s.NOOP_NULL))
                    }
                },
                BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
                    let {} = e;
                    E = !0
                },
                BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
                    let {
                        referrals_remaining: t,
                        sent_user_ids: n
                    } = e;
                    E = !1, o = t, f = n
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    let {} = e;
                    E = !1, h += 1, I = Date.now() + 1e3 * Math.pow(2, h)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    c.add(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
                    let {
                        recipientId: t,
                        is_eligible: n
                    } = e;
                    d[t] = n, c.delete(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    d[t] = !1, c.delete(t)
                },
                BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    (0, u.fetchReferralsRemaining)(), p[t.id] = t, f = [...f, t.user_id]
                },
                BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t && (R.delete(t.id), _.add(t.id), p[t.id] = t)
                },
                BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
                    let {
                        userTrialOfferId: t
                    } = e;
                    R.delete(t), _.add(t)
                },
                LOAD_MESSAGES_SUCCESS: m,
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    A(t)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: m,
                LOGOUT: function() {
                    o = null, d = {}, f = [], c = new Set, E = !1, R = new Set, _ = new Set, p = {}, h = 0, I = null
                }
            })
        },
        917247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePremiumTrialOffer: function() {
                    return s
                }
            });
            var i = n("65597"),
                l = n("340412"),
                r = n("540692"),
                a = n("833516"),
                u = n("646718");

            function s(e) {
                var t, n, s, o;
                let d = (0, a.useTrialOffer)(u.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID),
                    f = (0, a.useTrialOffer)(u.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    c = (0, a.useTrialOffer)(u.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    E = (0, a.useTrialOffer)(l.default.getAnyOfUserTrialOfferId([u.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, u.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, u.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, u.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    R = (0, a.useTrialOffer)(u.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
                    _ = (0, i.default)([r.default], () => void 0 === e ? null : r.default.getRelevantUserTrialOffer(e));
                return null !== (o = null !== (s = null !== (n = null !== (t = null != d ? d : _) && void 0 !== t ? t : f) && void 0 !== n ? n : c) && void 0 !== s ? s : E) && void 0 !== o ? o : R
            }
        },
        833516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hasUserTrialOfferExpired: function() {
                    return o
                },
                useTrialOffer: function() {
                    return d
                }
            }), n("222007");
            var i = n("884691"),
                l = n("446674"),
                r = n("862337"),
                a = n("697218"),
                u = n("340412"),
                s = n("719923");

            function o(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function d(e) {
                let t = (0, l.useStateFromStores)([u.default], () => u.default.getUserTrialOffer(e)),
                    [n, d] = i.useState(o(t)),
                    f = (0, l.useStateFromStores)([a.default], () => (0, s.isPremium)(a.default.getCurrentUser()));
                return i.useEffect(() => {
                    if (null != t && null != t.expires_at) {
                        let e = new r.Timeout,
                            i = () => {
                                let l = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                null == e || e.start(l, () => {
                                    !n && o(t) ? d(!0) : i()
                                })
                            };
                        return i(), () => e.stop()
                    }
                }, [n, t]), n || f ? null : t
            }
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007"), n("70102");
            var i = n("37983"),
                l = n("884691"),
                r = n("446674"),
                a = n("206230"),
                u = n("491605"),
                s = n("210721"),
                o = n("78345");

            function d(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: d = !0,
                    defaultAnimationState: f,
                    idleAnimationState: c
                } = e, E = (0, r.useStateFromStores)([a.default], () => a.default.useReducedMotion), [R, _] = l.useState(f), p = l.useRef((0, s.getGiftAnimationData)(t, R)), [h, I] = l.useState(null == c), [S, L] = l.useState(!1), [m, A] = l.useState(-1), y = () => {
                    p.current = (0, s.getGiftAnimationData)(t, R), A(e => e + 1)
                }, T = () => {
                    I(!1), L(!0), A(-1), _(f)
                };
                l.useEffect(() => {
                    null == c && _(f)
                }, [c, f]), l.useEffect(() => {
                    if (null != c && m >= 0) {
                        T();
                        return
                    }
                    y()
                }, [t, c]), l.useEffect(() => {
                    (!S || null == c) && y()
                }, [R]), l.useEffect(() => {
                    S && (I(null == c), L(!1), y())
                }, [S]);
                if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, i.jsx)(u.default, {
                    importData: p.current,
                    shouldAnimate: !E && d,
                    className: n,
                    versionKey: m,
                    onComplete: null != c ? () => {
                        null != c && (_(c), I(!0))
                    } : void 0,
                    loop: h
                })
            }
        },
        273108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                u = n("446674"),
                s = n("206230"),
                o = n("471671"),
                d = n("629758");
            class f extends l.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: i,
                        pause: l,
                        isWindowFocused: r,
                        useReducedMotion: a
                    } = this.props, [u, {
                        default: s
                    }] = await Promise.all([e(), n.el("230265").then(n.t.bind(n, "230265", 23))]);
                    null != this.animationRef && (this.animation = s.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: u
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (i && !r || l || a) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, i;
                    let {
                        nextScene: l,
                        pauseWhileUnfocused: r,
                        pause: a,
                        isWindowFocused: u,
                        useReducedMotion: s
                    } = this.props;
                    l !== this.currentScene && this.shouldForcePlayAfter() && !a && this.playScene(l), null != this.animation && (r && !e.isWindowFocused && u && !s && !0 !== a ? this.animation.play() : (s || r && e.isWindowFocused && !u) && this.animation.pause()), !e.pause && a ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !a && !s && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== l && a && (this.playScene(l), null === (i = this.animation) || void 0 === i || i.pause())
                }
                shouldForcePlayAfter() {
                    let {
                        sceneSegments: e
                    } = this.props, t = e[this.currentScene];
                    return !0 === t.shouldForcePlayAfter
                }
                playScene(e) {
                    if (this.isUnmounted) return;
                    let {
                        onScenePlay: t,
                        sceneSegments: n,
                        useReducedMotion: i
                    } = this.props, l = n[e], r = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || l.BEG !== r.BEG || l.END !== r.END) && this.animation.playSegments([l.BEG, l.END], !0), this.currentScene = e, null != t && t(this.currentScene), i) {
                        var a;
                        null === (a = this.animation) || void 0 === a || a.pause()
                    }
                }
                render() {
                    return (0, i.jsx)("div", {
                        ref: this.handleSetRef,
                        className: a(this.props.className, d.wrapper)
                    })
                }
                constructor(...e) {
                    super(...e), this.animationRef = null, this.currentScene = this.props.nextScene, this.isUnmounted = !1, this.handleLoopComplete = () => {
                        let {
                            onSceneComplete: e,
                            nextScene: t
                        } = this.props;
                        null != e && e(this.currentScene), this.playScene(t)
                    }, this.handleComplete = () => {
                        let {
                            onSceneComplete: e
                        } = this.props;
                        null != e && e(this.currentScene)
                    }, this.handleSetRef = e => {
                        this.animationRef = e;
                        let {
                            animationRef: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            f.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            var c = e => {
                let {
                    componentRef: t,
                    ...n
                } = e, l = (0, u.useStateFromStores)([o.default], () => o.default.isFocused()), r = (0, u.useStateFromStores)([s.default], () => s.default.useReducedMotion);
                return (0, i.jsx)(f, {
                    ...n,
                    isWindowFocused: l,
                    useReducedMotion: r,
                    ref: t
                })
            }
        },
        181108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var i = n("37983"),
                l = n("884691"),
                r = n("516555");
            let a = [n("315147")],
                u = ["#FFFFFF"],
                s = 1e3 / 60,
                o = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 0,
                            y: 1
                        },
                        maxValue: {
                            x: 3,
                            y: 3
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        maxValue: {
                            x: 0,
                            y: 0,
                            z: 360
                        },
                        minAddValue: {
                            x: 0,
                            y: 0,
                            z: -5
                        },
                        maxAddValue: {
                            x: 0,
                            y: 0,
                            z: 5
                        }
                    },
                    size: {
                        type: "static-random",
                        minValue: 2,
                        maxValue: 6
                    },
                    dragCoefficient: {
                        type: "static",
                        value: {
                            x: .05,
                            y: .05
                        }
                    },
                    opacity: {
                        type: "static",
                        value: .3
                    }
                };

            function d(e) {
                let {
                    className: t,
                    firing: n = !0,
                    wind: d = 2
                } = e, [f, c] = l.useState(null), [E, R] = l.useState(null), _ = (0, r.useConfettiCannon)(E, f), p = l.useMemo(() => new r.Environment({
                    wind: d
                }), [d]), h = l.useCallback(() => {
                    let e = null == E ? void 0 : E.getCanvas();
                    if (null == e) return;
                    let t = e.getBoundingClientRect();
                    _.createConfetti({
                        ...o,
                        position: {
                            type: "static-random",
                            minValue: {
                                x: -t.width / 2,
                                y: -6
                            },
                            maxValue: {
                                x: t.width,
                                y: -6
                            }
                        }
                    })
                }, [_, E]);
                return l.useEffect(() => {
                    let e = n ? setInterval(h, s) : null;
                    return () => clearInterval(e)
                }, [n, h]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(r.ConfettiCanvas, {
                        ref: R,
                        className: t,
                        environment: p
                    }), (0, i.jsx)(r.SpriteCanvas, {
                        ref: c,
                        colors: u,
                        sprites: a,
                        spriteWidth: 6,
                        spriteHeight: 6
                    })]
                })
            }
        }
    }
]);