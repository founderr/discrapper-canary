(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["17884"], {
        315147: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3808a69f670fa9a67284.svg"
        },
        210721: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnimationState: function() {
                    return i
                },
                getGiftAnimationData: function() {
                    return f
                },
                sendGiftMessage: function() {
                    return m
                }
            }), n("70102");
            var i, a, l = n("627445"),
                r = n.n(l),
                s = n("450911"),
                u = n("819689"),
                o = n("884351"),
                d = n("42203"),
                c = n("659632"),
                h = n("78345");
            (a = i || (i = {})).ACTION = "action", a.LOOP = "loop", a.IDLE = "idle";
            let f = (e, t) => {
                    let i;
                    switch (e) {
                        case h.PremiumGiftStyles.SNOWGLOBE:
                            i = () => n.el("452661").then(n.t.bind(n, "452661", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case h.PremiumGiftStyles.BOX:
                            i = () => n.el("726871").then(n.t.bind(n, "726871", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case h.PremiumGiftStyles.CUP:
                            i = () => n.el("544929").then(n.t.bind(n, "544929", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case h.PremiumGiftStyles.STANDARD_BOX:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("973372").then(n.t.bind(n, "973372", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("353540").then(n.t.bind(n, "353540", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("303473").then(n.t.bind(n, "303473", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case h.PremiumGiftStyles.CAKE:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("127891").then(n.t.bind(n, "127891", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("953820").then(n.t.bind(n, "953820", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("311972").then(n.t.bind(n, "311972", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case h.PremiumGiftStyles.CHEST:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("269055").then(n.t.bind(n, "269055", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("120467").then(n.t.bind(n, "120467", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("451680").then(n.t.bind(n, "451680", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case h.PremiumGiftStyles.COFFEE:
                            switch (t) {
                                case "idle":
                                    i = () => n.el("863089").then(n.t.bind(n, "863089", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case "loop":
                                    i = () => n.el("949233").then(n.t.bind(n, "949233", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("361896").then(n.t.bind(n, "361896", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        default:
                            i = () => Promise.resolve("Error: Invalid giftStyle")
                    }
                    return i
                },
                m = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let n = await s.default.openPrivateChannel(e.id).then(e => {
                            let t = d.default.getChannel(e);
                            if (r(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        i = (0, c.getGiftCodeURL)(t);
                    return u.default.sendMessage(n.id, o.default.parse(n, i), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
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
                a = n("884691"),
                l = n("446674"),
                r = n("206230"),
                s = n("491605"),
                u = n("210721"),
                o = n("78345");

            function d(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: d = !0,
                    defaultAnimationState: c,
                    idleAnimationState: h
                } = e, f = (0, l.useStateFromStores)([r.default], () => r.default.useReducedMotion), [m, p] = a.useState(c), S = a.useRef((0, u.getGiftAnimationData)(t, m)), [y, b] = a.useState(null == h), [v, C] = a.useState(!1), [x, E] = a.useState(-1), k = () => {
                    S.current = (0, u.getGiftAnimationData)(t, m), E(e => e + 1)
                }, w = () => {
                    b(!1), C(!0), E(-1), p(c)
                };
                a.useEffect(() => {
                    null == h && p(c)
                }, [h, c]), a.useEffect(() => {
                    if (null != h && x >= 0) {
                        w();
                        return
                    }
                    k()
                }, [t, h]), a.useEffect(() => {
                    (!v || null == h) && k()
                }, [m]), a.useEffect(() => {
                    v && (b(null == h), C(!1), k())
                }, [v]);
                if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, i.jsx)(s.default, {
                    importData: S.current,
                    shouldAnimate: !f && d,
                    className: n,
                    versionKey: x,
                    onComplete: null != h ? () => {
                        null != h && (p(h), b(!0))
                    } : void 0,
                    loop: y
                })
            }
        },
        273108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                s = n("446674"),
                u = n("206230"),
                o = n("471671"),
                d = n("629758");
            class c extends a.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: i,
                        pause: a,
                        isWindowFocused: l,
                        useReducedMotion: r
                    } = this.props, [s, {
                        default: u
                    }] = await Promise.all([e(), n.el("230265").then(n.t.bind(n, "230265", 23))]);
                    null != this.animationRef && (this.animation = u.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: s
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (i && !l || a || r) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, i;
                    let {
                        nextScene: a,
                        pauseWhileUnfocused: l,
                        pause: r,
                        isWindowFocused: s,
                        useReducedMotion: u
                    } = this.props;
                    a !== this.currentScene && this.shouldForcePlayAfter() && !r && this.playScene(a), null != this.animation && (l && !e.isWindowFocused && s && !u && !0 !== r ? this.animation.play() : (u || l && e.isWindowFocused && !s) && this.animation.pause()), !e.pause && r ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !r && !u && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== a && r && (this.playScene(a), null === (i = this.animation) || void 0 === i || i.pause())
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
                    } = this.props, a = n[e], l = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || a.BEG !== l.BEG || a.END !== l.END) && this.animation.playSegments([a.BEG, a.END], !0), this.currentScene = e, null != t && t(this.currentScene), i) {
                        var r;
                        null === (r = this.animation) || void 0 === r || r.pause()
                    }
                }
                render() {
                    return (0, i.jsx)("div", {
                        ref: this.handleSetRef,
                        className: r(this.props.className, d.wrapper)
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
            c.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            var h = e => {
                let {
                    componentRef: t,
                    ...n
                } = e, a = (0, s.useStateFromStores)([o.default], () => o.default.isFocused()), l = (0, s.useStateFromStores)([u.default], () => u.default.useReducedMotion);
                return (0, i.jsx)(c, {
                    ...n,
                    isWindowFocused: a,
                    useReducedMotion: l,
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
                a = n("884691"),
                l = n("516555");
            let r = [n("315147")],
                s = ["#FFFFFF"],
                u = 1e3 / 60,
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
                } = e, [c, h] = a.useState(null), [f, m] = a.useState(null), p = (0, l.useConfettiCannon)(f, c), S = a.useMemo(() => new l.Environment({
                    wind: d
                }), [d]), y = a.useCallback(() => {
                    let e = null == f ? void 0 : f.getCanvas();
                    if (null == e) return;
                    let t = e.getBoundingClientRect();
                    p.createConfetti({
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
                }, [p, f]);
                return a.useEffect(() => {
                    let e = n ? setInterval(y, u) : null;
                    return () => clearInterval(e)
                }, [n, y]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(l.ConfettiCanvas, {
                        ref: m,
                        className: t,
                        environment: S
                    }), (0, i.jsx)(l.SpriteCanvas, {
                        ref: h,
                        colors: s,
                        sprites: r,
                        spriteWidth: 6,
                        spriteHeight: 6
                    })]
                })
            }
        }
    }
]);