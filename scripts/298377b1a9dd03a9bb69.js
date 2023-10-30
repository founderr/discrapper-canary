(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["86514"], {
        149154: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                distance: function() {
                    return r
                }
            });
            let n = new Uint32Array(65536),
                s = (e, t) => {
                    let l = e.length,
                        s = t.length,
                        a = 1 << l - 1,
                        r = -1,
                        i = 0,
                        u = l,
                        o = l;
                    for (; o--;) n[e.charCodeAt(o)] |= 1 << o;
                    for (o = 0; o < s; o++) {
                        let e = n[t.charCodeAt(o)],
                            l = e | i;
                        e |= (e & r) + r ^ r, i |= ~(e | r), r &= e, i & a && u++, r & a && u--, r = r << 1 | ~(l | (i = i << 1 | 1)), i &= l
                    }
                    for (o = l; o--;) n[e.charCodeAt(o)] = 0;
                    return u
                },
                a = (e, t) => {
                    let l = t.length,
                        s = e.length,
                        a = [],
                        r = [],
                        i = Math.ceil(l / 32),
                        u = Math.ceil(s / 32);
                    for (let e = 0; e < i; e++) r[e] = -1, a[e] = 0;
                    let o = 0;
                    for (; o < u - 1; o++) {
                        let i = 0,
                            u = -1,
                            d = 32 * o,
                            c = Math.min(32, s) + d;
                        for (let t = d; t < c; t++) n[e.charCodeAt(t)] |= 1 << t;
                        for (let e = 0; e < l; e++) {
                            let l = n[t.charCodeAt(e)],
                                s = r[e / 32 | 0] >>> e & 1,
                                o = a[e / 32 | 0] >>> e & 1,
                                d = l | i,
                                c = ((l | o) & u) + u ^ u | l | o,
                                f = i | ~(c | u),
                                m = u & c;
                            f >>> 31 ^ s && (r[e / 32 | 0] ^= 1 << e), m >>> 31 ^ o && (a[e / 32 | 0] ^= 1 << e), f = f << 1 | s, u = (m = m << 1 | o) | ~(d | f), i = f & d
                        }
                        for (let t = d; t < c; t++) n[e.charCodeAt(t)] = 0
                    }
                    let d = 0,
                        c = -1,
                        f = 32 * o,
                        m = Math.min(32, s - f) + f;
                    for (let t = f; t < m; t++) n[e.charCodeAt(t)] |= 1 << t;
                    let S = s;
                    for (let e = 0; e < l; e++) {
                        let l = n[t.charCodeAt(e)],
                            i = r[e / 32 | 0] >>> e & 1,
                            u = a[e / 32 | 0] >>> e & 1,
                            o = l | d,
                            f = ((l | u) & c) + c ^ c | l | u,
                            m = d | ~(f | c),
                            E = c & f;
                        S += m >>> s - 1 & 1, S -= E >>> s - 1 & 1, m >>> 31 ^ i && (r[e / 32 | 0] ^= 1 << e), E >>> 31 ^ u && (a[e / 32 | 0] ^= 1 << e), m = m << 1 | i, c = (E = E << 1 | u) | ~(o | m), d = m & o
                    }
                    for (let t = f; t < m; t++) n[e.charCodeAt(t)] = 0;
                    return S
                },
                r = (e, t) => {
                    if (e.length < t.length) {
                        let l = t;
                        t = e, e = l
                    }
                    return 0 === t.length ? e.length : e.length <= 32 ? s(e, t) : a(e, t)
                }
        },
        64847: function(e, t, l) {
            "use strict";
            e.exports = l.p + "c038718481fa8dc048db.svg"
        },
        366801: function(e, t, l) {
            "use strict";
            e.exports = l.p + "ee16b3ebdee5b68090dc.svg"
        },
        267218: function(e, t, l) {
            "use strict";
            e.exports = l.p + "8a9877b68c4ef6b46419.svg"
        },
        17137: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                BrowserIcon: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("669491"),
                a = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: i
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M1 12a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6Z",
                        className: i
                    })]
                })
            }
        },
        187001: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("77078"),
                r = l("997289"),
                i = l("685665"),
                u = l("649844"),
                o = l("599110"),
                d = l("49111"),
                c = l("646718"),
                f = l("782340"),
                m = l("999125"),
                S = l("770420"),
                E = () => {
                    let e = (0, r.useAnalyticsContext)(),
                        {
                            analyticsLocations: t
                        } = (0, i.default)();
                    return s.useEffect(() => {
                        o.default.track(d.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: c.PremiumUpsellTypes.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL,
                            location: e.location,
                            location_stack: t
                        })
                    }, []), (0, n.jsx)(a.FormItem, {
                        className: S.modalContent,
                        children: (0, n.jsxs)("div", {
                            className: m.nitroUpsellContainer,
                            children: [(0, n.jsxs)("div", {
                                children: [(0, n.jsx)(a.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    className: m.nitroUpsellTitle,
                                    children: f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_TITLE
                                }), (0, n.jsx)(a.Text, {
                                    className: m.nitroUpsellSubtitle,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_BODY.format()
                                })]
                            }), (0, n.jsx)(a.Button, {
                                look: a.Button.Looks.INVERTED,
                                onClick: () => {
                                    (0, u.default)({
                                        subscriptionTier: c.PremiumSubscriptionSKUs.TIER_2,
                                        analyticsLocations: t
                                    })
                                },
                                children: f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_CTA
                            })]
                        })
                    })
                }
        },
        504219: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return A
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("627445"),
                r = l.n(a),
                i = l("446674"),
                u = l("151426"),
                o = l("77078"),
                d = l("10641"),
                c = l("235145"),
                f = l("369964"),
                m = l("227602"),
                S = l("701909"),
                E = l("13798"),
                h = l("386045"),
                C = l("30591"),
                g = l("803725"),
                _ = l("49111"),
                N = l("782340"),
                p = l("173266"),
                I = l("770420");
            let x = e => {
                let {
                    clipsEnabled: t,
                    isAnimationDone: l,
                    guildId: a,
                    children: r
                } = e, m = (0, i.useStateFromStores)([h.default], () => h.default.getHardwareClassification()), E = m === C.ClipsHardwareClassification.MEETS_MINIMUM || m === C.ClipsHardwareClassification.UNKNOWN, I = m === C.ClipsHardwareClassification.BELOW_MINIMUM, x = l && (E || I) && !t, [A, R] = (0, c.useGetDismissibleContent)(x ? [u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK] : []), v = A === u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK;
                s.useEffect(() => {
                    t && (0, d.markDismissibleContentAsDismissed)(u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK, {
                        forceTrack: !0
                    })
                }, [t]);
                let T = (e, t) => {
                    e.stopPropagation(), e.preventDefault(), null == t || t(), R()
                };
                return (0, n.jsx)(o.Popout, {
                    shouldShow: v,
                    position: "right",
                    align: "center",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, n.jsx)(f.default, {
                            dismissibleContent: u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK,
                            shouldUseHorizontalButtons: !0,
                            inlineArt: !0,
                            artClassName: p.clipsEducationArt,
                            position: "right",
                            header: N.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_TITLE,
                            headerClassName: p.clipsEducationHeader,
                            body: (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: N.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY
                                }), I ? (0, n.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    className: p.warningText,
                                    children: N.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_HARDWARE_IMPACT_WARNING.format({
                                        url: S.default.getArticleURL(_.HelpdeskArticles.CLIPS)
                                    })
                                }) : null]
                            }),
                            tryItText: N.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
                            onTryFeature: e => {
                                (0, g.updateClipsEnabled)({
                                    clipsEnabled: !0,
                                    guildId: a,
                                    trackAnalytics: !0
                                }), T(e)
                            },
                            onClose: e => {
                                T(e, t)
                            }
                        })
                    },
                    children: () => r
                })
            };
            var A = function(e) {
                let {
                    isAnimationDone: t,
                    guildId: l
                } = e, s = (0, i.useStateFromStores)([h.default], () => h.default.getSettings().clipsEnabled), a = (0, i.useStateFromStores)([m.default], () => m.default.getKeybindForAction(_.GlobalKeybindActions.SAVE_CLIP));
                r(null != a, "Clips keybind should be set");
                let u = E.toString(a.shortcut, !0);
                return (0, n.jsx)(o.FormItem, {
                    title: N.default.Messages.CLIPS_SETTINGS,
                    titleClassName: I.formItemTitle,
                    className: I.modalContent,
                    children: (0, n.jsxs)("div", {
                        className: p.container,
                        children: [(0, n.jsx)(x, {
                            clipsEnabled: s,
                            guildId: l,
                            isAnimationDone: t,
                            children: (0, n.jsx)(o.FormSwitch, {
                                className: p.formSwitch,
                                value: s,
                                onChange: e => (0, g.updateClipsEnabled)({
                                    clipsEnabled: e,
                                    guildId: l,
                                    trackAnalytics: !0
                                }),
                                hideBorder: !0,
                                children: N.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
                            })
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "interactive-normal",
                            className: p.description,
                            children: N.default.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
                                keybind: u,
                                keybindHook: () => (0, n.jsx)("span", {
                                    className: p.keybindHintKeys,
                                    children: (0, n.jsx)(o.KeyCombo, {
                                        className: p.keybindShortcut,
                                        shortcut: u
                                    })
                                })
                            })
                        })]
                    })
                })
            }
        },
        369964: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("414456"),
                r = l.n(a),
                i = l("77078"),
                u = l("731898"),
                o = l("10641"),
                d = l("275623"),
                c = l("216422"),
                f = l("994428"),
                m = l("782340"),
                S = l("804920"),
                E = s.forwardRef(function(e, t) {
                    let {
                        body: l,
                        header: a,
                        artClassName: E,
                        headerClassName: h,
                        contentClassName: C,
                        tryItText: g,
                        onTryFeature: _,
                        onClose: N,
                        className: p,
                        inlineArt: I = !1,
                        isPremiumFeature: x = !1,
                        shouldUseHorizontalButtons: A = !1,
                        showGIFTag: R = !1,
                        dismissibleContent: v,
                        position: T = "top",
                        art: L,
                        isPremiumEarlyAccess: O = !1,
                        maxWidth: M = 280
                    } = e, j = A ? i.Button.Sizes.LARGE : i.Button.Sizes.MAX, [D, U] = s.useState(!1), {
                        ref: P,
                        width: b
                    } = (0, u.default)();

                    function F(e) {
                        (0, o.markDismissibleContentAsDismissed)(v, {
                            dismissAction: e
                        })
                    }
                    return s.useEffect(() => {
                        var e, t;
                        let l = (null !== (t = null === (e = P.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
                        !D && l > M && U(!0)
                    }, [D, b, P, M]), s.useEffect(() => {
                        (0, o.requestMarkDismissibleContentAsShown)(v)
                    }, [v]), (0, n.jsx)("div", {
                        className: p,
                        ref: t,
                        children: (0, n.jsxs)("div", {
                            className: r(S.content, C, {
                                [S.contentNoArt]: null == E || I,
                                [S.contentPremium]: x || O
                            }),
                            children: [(0, n.jsxs)("div", {
                                className: r(E, I ? S.artInline : S.artAbsolute),
                                children: [R && (0, n.jsx)(d.default, {
                                    className: S.gifTag
                                }), L]
                            }), (0, n.jsxs)("div", {
                                className: S.body,
                                children: [(0, n.jsxs)(i.Heading, {
                                    className: r(x ? S.headerWithPremiumIcon : S.header, h),
                                    variant: "heading-md/bold",
                                    color: "always-white",
                                    children: [x && !O ? (0, n.jsx)(c.default, {
                                        className: S.premiumIcon
                                    }) : null, O ? (0, n.jsxs)(i.Text, {
                                        color: "always-white",
                                        variant: "eyebrow",
                                        className: S.earlyAccessBadgeContainer,
                                        children: [(0, n.jsx)(c.default, {
                                            className: S.earlyAccessIcon
                                        }), (0, n.jsx)("span", {
                                            className: S.earlyAccessText,
                                            children: m.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
                                        })]
                                    }) : null, a]
                                }), null == l ? null : "string" == typeof l ? (0, n.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: l
                                }) : l]
                            }), (0, n.jsx)("div", {
                                ref: P,
                                className: D || !A ? S.buttonContainerVertical : S.buttonContainerHorizontal,
                                children: null != _ ? (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(i.Button, {
                                        className: S.button,
                                        size: j,
                                        onClick: e => {
                                            null == N || N(e), _(e), F(f.ContentDismissActionType.PRIMARY)
                                        },
                                        color: x || O ? i.Button.Colors.BRAND : i.Button.Colors.WHITE,
                                        look: x || O ? i.Button.Looks.INVERTED : i.Button.Looks.FILLED,
                                        children: null != g ? g : m.default.Messages.EDUCATION_NEW_FEATURE_TRY_IT
                                    }), (0, n.jsx)(i.Button, {
                                        className: S.button,
                                        size: j,
                                        onClick: e => {
                                            null == N || N(e), F(f.ContentDismissActionType.DISMISS)
                                        },
                                        color: x || O ? i.Button.Colors.WHITE : i.Button.Colors.BRAND,
                                        look: x || O ? i.Button.Looks.LINK : i.Button.Looks.FILLED,
                                        children: m.default.Messages.EDUCATION_NEW_FEATURE_DISMISS
                                    })]
                                }) : (0, n.jsx)(i.Button, {
                                    className: S.button,
                                    size: i.Button.Sizes.MAX,
                                    onClick: e => {
                                        null == N || N(e), F(f.ContentDismissActionType.PRIMARY)
                                    },
                                    color: i.Button.Colors.WHITE,
                                    children: m.default.Messages.EDUCATION_NEW_FEATURE_CONFIRM
                                })
                            }), (0, n.jsx)("div", {
                                className: r(S.pointer, {
                                    [S.bottomPointer]: "top" === T,
                                    [S.leftPointer]: "right" === T
                                })
                            })]
                        })
                    })
                })
        },
        301834: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("862205");
            let s = (0, n.createExperiment)({
                kind: "user",
                id: "2023-06_golive_capture_card",
                label: "GoLive Capture Card Support",
                defaultConfig: {
                    enableGoLiveCaptureCard: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable go live capture card support",
                    config: {
                        enableGoLiveCaptureCard: !0
                    }
                }]
            });
            var a = s
        },
        288207: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            let n = new Set(["nvidia"]);

            function s(e) {
                for (let t of Object.keys(e)) {
                    let l = e[t];
                    if (null != l && null == l.error && n.has(t)) return !0
                }
                return !1
            }
        },
        7738: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("773356"),
                s = l("686298");

            function a(e, t, l) {
                let a = s.ApplicationStreamPresetValues[e];
                for (let s of a)
                    if ((0, n.default)(e, s.resolution, s.fps, t, l)) return [s.resolution, s.fps];
                return null
            }
        },
        709496: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("570277"),
                s = l.n(n),
                a = l("773336");
            let r = {
                [a.PlatformTypes.WINDOWS]: {
                    nvidia: ">=397.93.0"
                }
            };

            function i(e) {
                let t = r[(0, a.getPlatform)()];
                if (null == t) return !1;
                for (let l of Object.keys(e)) {
                    let n = e[l],
                        a = t[l];
                    if (null == n || null == a || null != n.error) continue;
                    let r = function(e) {
                        var t, l;
                        return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (l = e.minor) && void 0 !== l ? l : 0, ".0")
                    }(n);
                    if (!s.satisfies(r, a)) return !0
                }
                return !1
            }
        },
        353487: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("862205");
            let s = (0, n.createExperiment)({
                kind: "user",
                id: "2022-06_inline_streaming_premium_upsell_behavior",
                label: "Inline Streaming Premium Upsell Behavior",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var a = s
        },
        767960: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("446674"),
                s = l("913144"),
                a = l("773336"),
                r = l("50885"),
                i = l("288207"),
                u = l("709496");
            let o = !1,
                d = !0;
            class c extends n.default.Store {
                initialize() {
                    !(!a.isPlatformEmbedded || __OVERLAY__) && r.default.getGPUDriverVersions().then(e => {
                        o = (0, u.default)(e), d = (0, i.default)(e), this.emitChange()
                    })
                }
                get GPUDriversOutdated() {
                    return o
                }
                get canUseHardwareAcceleration() {
                    return d
                }
                getState() {
                    return {
                        GPUDriversOutdated: o,
                        canUseHardwareAcceleration: d
                    }
                }
            }
            c.displayName = "StreamingCapabilitiesStore";
            var f = new c(s.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        streamingCapabilitiesStoreState: t
                    } = e;
                    o = t.GPUDriversOutdated, d = t.canUseHardwareAcceleration
                }
            })
        },
        916262: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("570277"),
                s = l.n(n),
                a = l("229353"),
                r = l("49671"),
                i = l("42887"),
                u = l("773336"),
                o = l("706530"),
                d = l("353927"),
                c = l("782340");

            function f() {
                var e, t;
                if (!i.default.supports(d.Features.SOUNDSHARE)) return a.GO_LIVE_SCREENSHARE_NO_SOUND;
                if ((0, u.isWindows)() && !s.satisfies(null === (e = r.default) || void 0 === e ? void 0 : e.os.release, o.WINDOWS_SOUNDSHARE_VERSION)) return c.default.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE;
                if ((0, u.isMac)() && !s.satisfies(null === (t = r.default) || void 0 === t ? void 0 : t.os.release, o.DARWIN_SOUNDSHARE_VERSION)) return c.default.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE;
                return null
            }
        },
        75974: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("149154"),
                r = l("917351"),
                i = l.n(r),
                u = l("446674"),
                o = l("77078"),
                d = l("42887"),
                c = l("326620"),
                f = l("32649"),
                m = l("782340"),
                S = l("389915"),
                E = l("770420"),
                h = l("926622");

            function C(e) {
                let {
                    selectedSource: t,
                    onChangeVideoDeviceSource: l,
                    onChangeAudioDevice: r
                } = e, C = (0, f.default)(), g = (0, u.useStateFromStores)([d.default], () => d.default.getInputDevices()), [_, N] = s.useState(function(e, t, l) {
                    if (null != t && null != l) {
                        let n = t.find(t => t.id === e);
                        if (null == n) return;
                        let s = i.reduce(l, (e, t) => (0, a.distance)(n.name, t.name) < (0, a.distance)(n.name, e.name) ? t : e);
                        if (null != s) return s.id
                    }
                }(t.id, C, g));
                return null != _ && r(_), (0, n.jsx)(s.Fragment, {
                    children: (0, n.jsxs)(o.FormItem, {
                        title: "Capture Device",
                        className: E.modalContent,
                        children: [(0, n.jsx)(o.FormItem, {
                            className: h.marginTop8,
                            children: (0, n.jsxs)(c.default, {
                                children: [(0, n.jsx)("span", {
                                    className: S.ellipsisText,
                                    children: t.name
                                }), (0, n.jsx)(o.Button, {
                                    className: S.changeButton,
                                    color: o.Button.Colors.PRIMARY,
                                    size: o.Button.Sizes.SMALL,
                                    onClick: l,
                                    children: m.default.Messages.CHANGE
                                })]
                            })
                        }), (0, n.jsx)(o.FormItem, {
                            className: h.marginTop8,
                            title: m.default.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
                            children: (0, n.jsx)(o.SingleSelect, {
                                value: _,
                                className: h.marginaTop8,
                                onChange: e => {
                                    N(e), r(e)
                                },
                                options: i.map(g, e => {
                                    let {
                                        id: t,
                                        name: l
                                    } = e;
                                    return {
                                        value: t,
                                        label: l
                                    }
                                })
                            })
                        })]
                    })
                })
            }
        },
        359812: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("446674"),
                a = l("77078"),
                r = l("923959"),
                i = l("305961"),
                u = l("957255"),
                o = l("697218"),
                d = l("316133"),
                c = l("223913"),
                f = l("379385"),
                m = l("644169"),
                S = l("782340"),
                E = l("524939");

            function h(e) {
                let {
                    selectedChannelId: t,
                    guildId: l,
                    onChangeSelectedChannelId: h
                } = e, C = (0, s.useStateFromStores)([o.default], () => o.default.getCurrentUser()), g = (0, s.useStateFromStores)([i.default, r.default, u.default], () => (0, c.getStreamEligibleChannels)(r.default.getChannels(l), i.default, u.default)), _ = (0, s.useStateFromStores)([d.default], () => d.default.getVoiceStates(l)), N = g.map(e => {
                    var l;
                    return {
                        name: (0, n.jsx)(f.default, {
                            channel: e,
                            users: null === (l = _[e.id]) || void 0 === l ? void 0 : l.filter(e => {
                                let {
                                    user: t
                                } = e;
                                return t.id !== (null == C ? void 0 : C.id)
                            }).map(e => {
                                let {
                                    user: t
                                } = e;
                                return t
                            }),
                            selected: e.id === t
                        }),
                        value: e.id
                    }
                });
                return (0, n.jsx)(m.default, {
                    title: S.default.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
                    scrollerInnerClassName: E.channelSelectScrollerInner,
                    children: (0, n.jsx)(a.RadioGroup, {
                        options: N,
                        value: t,
                        itemInfoClassName: E.channelInfoWrapper,
                        itemTitleClassName: E.channelTitleWrapper,
                        onChange: e => {
                            let {
                                value: t
                            } = e;
                            return h(t)
                        }
                    })
                })
            }
        },
        636909: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return Q
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("414456"),
                r = l.n(a),
                i = l("446674"),
                u = l("77078"),
                o = l("79112"),
                d = l("454273"),
                c = l("56947"),
                f = l("187001"),
                m = l("504219"),
                S = l("845579"),
                E = l("42203"),
                h = l("546463"),
                C = l("525065"),
                g = l("305961"),
                _ = l("42887"),
                N = l("568307"),
                p = l("18494"),
                I = l("697218"),
                x = l("703370"),
                A = l("145131"),
                R = l("953109"),
                v = l("109024"),
                T = l("267675"),
                L = l("423487"),
                O = l("233437"),
                M = l("599110"),
                j = l("449008"),
                D = l("773336"),
                U = l("767960"),
                P = l("375202"),
                b = l("916262"),
                F = l("75974"),
                G = l("359812"),
                k = l("273405"),
                y = l("326620"),
                w = l("985997"),
                B = l("16750"),
                V = l("706530"),
                H = l("49111"),
                W = l("782340"),
                z = l("183351"),
                K = l("770420");

            function Y(e) {
                let {
                    selectedSource: t,
                    selectSource: l,
                    sourceChanged: s,
                    onChangeSource: a
                } = e, r = (0, i.useStateFromStores)([N.default, x.default], () => (0, D.isWindows)() ? (0, P.default)(N.default, x.default) : null), o = (0, i.useStateFromStores)([h.default], () => (null == r ? void 0 : r.id) != null ? h.default.getGame(r.id) : null), d = (0, i.useStateFromStores)([N.default], () => N.default.getRunningGames()), c = (0, i.useStateFromStoresArray)([h.default], () => d.map(e => null != e.id ? h.default.getGame(e.id) : null).filter(j.isNotNullish), [d]), f = null;
                if (null != t ? f = t.name : null != r && (f = r.name), null == f) return null;
                let m = (0, B.default)(r, t, d),
                    S = s ? c.find(e => {
                        let {
                            id: t
                        } = e;
                        return t === (null == m ? void 0 : m.id)
                    }) : o,
                    E = null != t && t.id.startsWith("screen") ? T.default : O.default;
                return (0, n.jsx)(u.FormItem, {
                    title: W.default.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
                    className: K.modalContent,
                    titleClassName: K.formItemTitleVerySlim,
                    children: (0, n.jsxs)(y.default, {
                        children: [null != S ? (0, n.jsx)(R.default, {
                            game: S,
                            size: R.default.Sizes.XSMALL,
                            className: z.selectedIcon
                        }) : (0, n.jsx)(E, {
                            className: z.selectedIcon
                        }), (0, n.jsx)("span", {
                            className: z.ellipsisText,
                            children: f
                        }), l ? (0, n.jsx)(u.Button, {
                            className: z.changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: a,
                            children: W.default.Messages.CHANGE
                        }) : null]
                    })
                })
            }

            function Z(e) {
                let {
                    onChange: t,
                    guildId: l
                } = e, s = (0, i.useStateFromStores)([g.default], () => g.default.getGuild(l));
                return null == s ? (t(), null) : (0, n.jsx)(u.FormItem, {
                    title: W.default.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
                    className: K.modalContent,
                    titleClassName: K.formItemTitle,
                    children: (0, n.jsxs)(y.default, {
                        children: [(0, n.jsx)(v.default, {
                            guild: s,
                            size: v.default.Sizes.SMALLER,
                            className: z.selectedIcon
                        }), (0, n.jsx)("span", {
                            className: z.ellipsisText,
                            children: s.toString()
                        }), (0, n.jsx)(u.Button, {
                            className: z.changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: t,
                            children: W.default.Messages.CHANGE
                        })]
                    })
                })
            }

            function J(e) {
                let {
                    text: t
                } = e;
                return (0, n.jsxs)(A.default, {
                    align: A.default.Align.CENTER,
                    className: z.warning,
                    children: [(0, n.jsx)(L.default, {
                        className: z.warningIcon
                    }), (0, n.jsx)(u.Text, {
                        color: "none",
                        variant: "text-xs/normal",
                        children: t
                    })]
                })
            }

            function X(e) {
                var t;
                let {
                    guildId: l
                } = e, a = (0, i.useStateFromStores)([C.default], () => null !== (t = C.default.getMemberCount(l)) && void 0 !== t ? t : 0), o = S.NotifyFriendsOnGoLive.useSetting(), d = s.useCallback((e, t) => {
                    S.NotifyFriendsOnGoLive.updateSetting(t), M.default.track(H.AnalyticEvents.NOTIFY_STREAM_SETTING_UPDATE, {
                        value: t
                    })
                }, []), c = a >= 2 && a <= V.STREAM_NOTIFY_GUILD_MAX_SIZE;
                return c ? (0, n.jsx)(u.FormItem, {
                    className: r(K.modalContent, z.checkboxRow),
                    children: (0, n.jsx)(u.Checkbox, {
                        value: !!o,
                        type: u.Checkbox.Types.INVERTED,
                        onChange: d,
                        children: (0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: W.default.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
                        })
                    })
                }) : null
            }

            function Q(e) {
                let {
                    selectedSource: t,
                    selectedFPS: l,
                    selectedChannelId: a,
                    selectedPreset: r,
                    selectedResolution: u,
                    sourceChanged: S,
                    guildId: h,
                    selectSource: C,
                    selectGuild: g,
                    onClose: N,
                    onChangeSelectedFPS: x,
                    onChangeSelectedResolution: A,
                    onChangeSelectedPreset: R,
                    onChangeSelectedChannelId: v,
                    onChangeSource: T,
                    onChangeAudioDevice: L,
                    onChangeGuild: O,
                    isAnimationDone: M
                } = e, j = (0, i.useStateFromStores)([p.default, E.default], () => E.default.getChannel(p.default.getVoiceChannelId())), D = (0, i.useStateFromStores)([U.default], () => U.default.GPUDriversOutdated), P = (0, i.useStateFromStores)([_.default], () => _.default.getSoundshareEnabled()), y = (0, i.useStateFromStores)([I.default], () => I.default.getCurrentUser()), B = (0, c.useEnableClips)(), V = (0, c.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
                    autoTrackExposure: !B
                }), z = (0, b.default)();
                null != t && t.id.startsWith("screen") ? z = W.default.Messages.GO_LIVE_SCREENSHARE_NO_SOUND : null == z && _.default.supportsEnableSoundshare() && P !== H.SoundshareEnableState.ENABLED && (z = W.default.Messages.GO_LIVE_SCREENSHARE_ENABLE_FOR_SOUNDSHARE.format({
                    onVoiceSettingsClick: () => {
                        N(), o.default.open(H.UserSettingsSections.VOICE)
                    }
                }));
                let K = B ? (0, n.jsx)(m.default, {
                        guildId: h,
                        isAnimationDone: M
                    }) : V ? (0, n.jsx)(f.default, {}) : void 0,
                    Q = !!(null == t ? void 0 : t.id.startsWith("camera")),
                    q = null != y && y.verified && !y.bot,
                    $ = null != j && !(0, d.isPrivateGuildChannel)(j);
                return (0, n.jsxs)(s.Fragment, {
                    children: [Q ? (0, n.jsx)(F.default, {
                        selectedSource: t,
                        onChangeVideoDeviceSource: T,
                        onChangeAudioDevice: L
                    }) : (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(Y, {
                            selectSource: C,
                            sourceChanged: S,
                            onChangeSource: T,
                            selectedSource: t
                        }), null != z ? (0, n.jsx)(J, {
                            text: z
                        }) : null]
                    }), g && null != h ? (0, n.jsx)(Z, {
                        guildId: h,
                        onChange: O
                    }) : null, null != j ? (0, n.jsx)(k.default, {
                        channel: j
                    }) : (0, n.jsx)(G.default, {
                        guildId: h,
                        selectedChannelId: a,
                        onChangeSelectedChannelId: v
                    }), null != h && q && $ ? (0, n.jsx)(X, {
                        guildId: h
                    }) : null, D ? (0, n.jsx)(J, {
                        text: W.default.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
                    }) : null, (0, n.jsx)(w.default, {
                        selectedPreset: r,
                        selectedFPS: l,
                        selectedResolution: u,
                        guildId: h,
                        onClose: N,
                        onFPSChange: x,
                        onResolutionChange: A,
                        onPresetChange: R,
                        captureDeviceSelected: Q
                    }), K]
                })
            }
        },
        273405: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("446674"),
                a = l("77078"),
                r = l("271938"),
                i = l("316133"),
                u = l("379385"),
                o = l("326620"),
                d = l("782340"),
                c = l("770420");

            function f(e) {
                let {
                    channel: t
                } = e, l = (0, s.useStateFromStores)([r.default], () => r.default.getId()), f = (0, s.useStateFromStores)([i.default], () => i.default.getVoiceStatesForChannel(t), [t]);
                return (0, n.jsx)(a.FormItem, {
                    title: d.default.Messages.GO_LIVE_MODAL_CURRENT_CHANNEL_FORM_TITLE,
                    className: c.modalContent,
                    titleClassName: c.formItemTitle,
                    children: (0, n.jsx)(o.default, {
                        children: (0, n.jsx)(u.default, {
                            channel: t,
                            users: f.filter(e => {
                                let {
                                    user: t
                                } = e;
                                return t.id !== l
                            }).map(e => {
                                let {
                                    user: t
                                } = e;
                                return t
                            })
                        })
                    })
                })
            }
        },
        321443: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                r = l("145912");

            function i(e) {
                let {
                    separator: t = !1
                } = e;
                return (0, n.jsx)("div", {
                    className: a(r.divider, {
                        [r.separator]: t
                    })
                })
            }
        },
        451863: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return H
                }
            });
            var n, s, a = l("37983"),
                r = l("884691"),
                i = l("627445"),
                u = l.n(i),
                o = l("301165"),
                d = l("446674"),
                c = l("77078"),
                f = l("404118"),
                m = l("987317"),
                S = l("990766"),
                E = l("901582"),
                h = l("928609"),
                C = l("268491"),
                g = l("42203"),
                _ = l("546463"),
                N = l("305961"),
                p = l("42887"),
                I = l("568307"),
                x = l("18494"),
                A = l("697218"),
                R = l("703370"),
                v = l("145131"),
                T = l("476765"),
                L = l("599110"),
                O = l("773336"),
                M = l("50885"),
                j = l("773356"),
                D = l("7738"),
                U = l("375202"),
                P = l("636909"),
                b = l("934054"),
                F = l("23922"),
                G = l("16750"),
                k = l("686298"),
                y = l("49111"),
                w = l("180524"),
                B = l("782340"),
                V = l("770420");
            (n = s || (s = {}))[n.GUILD = 0] = "GUILD", n[n.SOURCE = 1] = "SOURCE", n[n.CONFIRM = 2] = "CONFIRM";

            function H(e) {
                var t, n, i, H;
                let {
                    selectGuild: W = !1,
                    selectSource: z = !0,
                    guildId: K,
                    analyticsLocation: Y,
                    onClose: Z,
                    transitionState: J
                } = e, {
                    preset: X,
                    resolution: Q,
                    fps: q
                } = (0, d.useStateFromStoresObject)([C.default], () => C.default.getState()), $ = (0, d.useStateFromStores)([x.default, g.default], () => g.default.getChannel(x.default.getVoiceChannelId())), ee = (0, d.useStateFromStores)([I.default, R.default], () => (0, O.isWindows)() ? (0, U.default)(I.default, R.default) : null), et = (0, d.useStateFromStores)([A.default], () => {
                    let e = A.default.getCurrentUser();
                    return u(null != e, "GoLiveModal: user cannot be undefined"), e
                }), el = (0, d.useStateFromStores)([N.default], () => {
                    var e;
                    return null === (e = N.default.getGuild(K)) || void 0 === e ? void 0 : e.premiumTier
                }), [en, es] = null !== (t = (0, D.default)(X, et, el)) && void 0 !== t ? t : [k.ApplicationStreamResolutions.RESOLUTION_720, k.ApplicationStreamFPS.FPS_30];
                X !== k.ApplicationStreamPresets.PRESET_CUSTOM && (Q = en, q = es);
                let ea = (0, T.useUID)();
                let [er, ei] = r.useState((i = W, H = z, i ? s.GUILD : H ? s.SOURCE : s.CONFIRM)), [eu, eo] = r.useState(null), [ed, ec] = r.useState(!1), [ef, em] = r.useState(null), [eS, eE] = r.useState(null), [eh, eC] = r.useState(null), [eg, e_] = r.useState(X), [eN, ep] = r.useState(Q), [eI, ex] = r.useState(q), [eA, eR] = r.useState(null != K ? K : null), ev = null !== (n = null == $ ? void 0 : $.id) && void 0 !== n ? n : ef;
                r.useEffect(() => {
                    let e = (0, O.isWindows)() ? (0, U.default)(I.default, R.default) : null,
                        t = (null == e ? void 0 : e.id) != null ? _.default.getGame(e.id) : null;
                    L.default.track(y.AnalyticEvents.OPEN_MODAL, {
                        type: "Go Live Modal",
                        application_id: null == t ? void 0 : t.id,
                        application_name: null == e ? void 0 : e.name,
                        game_id: null == t ? void 0 : t.id,
                        location_section: Y
                    })
                }, [Y]);

                function eT() {
                    ! function() {
                        var e, t;
                        u(null != ee || null != eS, "got nothing to stream");
                        let l = null !== (e = null == $ ? void 0 : $.id) && void 0 !== e ? e : ef;
                        u(null != l, "Received null target channel ID");
                        let n = g.default.getChannel(l),
                            s = null !== (t = null == n ? void 0 : n.getGuildId()) && void 0 !== t ? t : K;
                        null == $ && m.default.selectVoiceChannel(l);
                        let a = eg,
                            r = eN,
                            i = eI;
                        !(0, j.default)(a, r, i, et, el) && (a = k.ApplicationStreamPresets.PRESET_VIDEO, r = k.ApplicationStreamResolutions.RESOLUTION_720, i = k.ApplicationStreamFPS.FPS_30), (0, S.updateStreamSettings)({
                            preset: a,
                            resolution: r,
                            frameRate: i
                        });
                        let o = (0, G.default)(ee, eS, I.default.getRunningGames()),
                            d = !(0, O.isWindows)() || null == o || (null == eS ? void 0 : eS.id.startsWith("camera:")),
                            c = d || null == o ? null : o.pid;
                        (0, S.startStream)(s, l, {
                            pid: c,
                            sourceId: null == c && null != eS ? eS.id : null,
                            sourceName: null == c && null != eS ? eS.name : null,
                            audioSourceId: eh
                        }), (async () => {
                            let e = await h.default.hasPermission(w.NativePermissionTypes.SCREEN_RECORDING, {
                                showAuthorizationError: !1
                            });
                            !e && f.default.show({
                                title: B.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                                body: B.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
                            })
                        })()
                    }(), Z()
                }
                let eL = r.useCallback((e, t, l) => {
                    let n = (0, D.default)(e, et, el),
                        [s, a] = null != n ? n : [t, l];
                    if (e !== eg && (t = s, l = a), !(0, j.default)(e, t, l, et, el)) {
                        let [e, n] = (0, D.default)(k.ApplicationStreamPresets.PRESET_VIDEO, et, el);
                        t = e, l = n
                    }
                    l !== eI && ex(l), t !== eN && ep(t), s !== t || a !== l ? e_(k.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eg && e_(e)
                }, [et, el, eI, eN, eg]);
                async function eO(e) {
                    if (e.preventDefault(), er === s.SOURCE) return ei(s.CONFIRM);
                    let t = (0, G.default)(ee, eS, I.default.getRunningGames()),
                        n = M.default.supportsFeature(y.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
                    if ((0, O.isMac)() && null != eS) {
                        let e = await p.default.getMediaEngine().getDesktopSources(),
                            t = eS.id;
                        if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
                            var r, i;
                            r = t, i = e, L.default.track(y.AnalyticEvents.SCREENSHARE_FAILED, {
                                source_id: r,
                                screens: i.length
                            }), (0, c.openModal)(e => (0, a.jsx)(c.ConfirmModal, {
                                header: B.default.Messages.SCREENSHARE_RELAUNCH,
                                confirmText: B.default.Messages.OKAY,
                                cancelText: B.default.Messages.CANCEL,
                                onConfirm: () => M.default.relaunch(),
                                ...e,
                                children: (0, a.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: B.default.Messages.SCREENSHARE_RELAUNCH_BODY
                                })
                            }));
                            return
                        }
                    }
                    n ? ! function() {
                        var e;
                        let t = null !== (e = null == ee ? void 0 : ee.pid) && void 0 !== e ? e : null;
                        (0, c.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await l.el("426319").then(l.bind(l, "426319"));
                            return l => (0, a.jsx)(e, {
                                ...l,
                                handleStream: eT,
                                pid: t
                            })
                        })
                    }() : eT()
                }
                let eM = r.useCallback(e => {
                        eE(e), null != e && (ei(s.CONFIRM), ec(!0))
                    }, []),
                    ej = r.useCallback(e => {
                        eR(e), ei(z ? s.SOURCE : s.CONFIRM)
                    }, [z]),
                    eD = function(e) {
                        switch (e) {
                            case s.SOURCE:
                                return B.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
                            case s.CONFIRM:
                                return null;
                            case s.GUILD:
                            default:
                                return B.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
                        }
                    }(er),
                    eU = (0, a.jsx)(c.ModalHeader, {
                        className: V.modalHeader,
                        separator: !1,
                        children: (0, a.jsxs)(v.default, {
                            direction: v.default.Direction.VERTICAL,
                            align: v.default.Align.CENTER,
                            className: V.header,
                            children: [(0, a.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                id: ea,
                                className: V.headerText,
                                children: B.default.Messages.GO_LIVE_MODAL_TITLE
                            }), null != eD ? (0, a.jsx)(c.Text, {
                                className: V.headerDescription,
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: eD
                            }) : null]
                        })
                    }),
                    eP = (0, a.jsxs)(c.Slides, {
                        springConfig: {
                            ...o.config.stiff,
                            clamp: !0
                        },
                        activeSlide: er,
                        width: 480,
                        onSlideReady: eo,
                        children: [(0, a.jsx)(c.Slide, {
                            id: s.GUILD,
                            children: (0, a.jsx)("div", {
                                className: V.modalSize,
                                children: (0, a.jsx)(b.default, {
                                    onSelectGuild: ej
                                })
                            })
                        }), (0, a.jsx)(c.Slide, {
                            id: s.SOURCE,
                            children: (0, a.jsx)("div", {
                                className: V.modalSize,
                                children: (0, a.jsx)(F.default, {
                                    selectedSource: eS,
                                    onChangeSelectedSource: eM
                                })
                            })
                        }), (0, a.jsx)(c.Slide, {
                            id: s.CONFIRM,
                            children: (0, a.jsx)("div", {
                                className: V.modalSize,
                                children: (0, a.jsx)(P.default, {
                                    selectedChannelId: ef,
                                    selectedPreset: eg,
                                    selectedResolution: eN,
                                    selectedSource: eS,
                                    selectedFPS: eI,
                                    sourceChanged: ed,
                                    selectSource: z,
                                    onChangeSelectedFPS: e => eL(eg, eN, e),
                                    onChangeSelectedResolution: e => eL(eg, e, eI),
                                    onChangeSelectedPreset: e => eL(e, eN, eI),
                                    onChangeSelectedChannelId: em,
                                    onChangeSelectedSource: eM,
                                    onChangeSource: () => ei(s.SOURCE),
                                    onChangeAudioDevice: e => eC(e),
                                    onChangeGuild: () => ei(s.GUILD),
                                    onClose: Z,
                                    guildId: eA,
                                    selectGuild: W,
                                    isAnimationDone: eu === s.CONFIRM && J === c.ModalTransitionState.ENTERED
                                })
                            })
                        })]
                    }),
                    eb = function(e, t, l, n) {
                        switch (e) {
                            case s.SOURCE:
                                return t ? s.GUILD : null;
                            case s.CONFIRM:
                                if (n) return s.SOURCE;
                                if (!l && t) return s.GUILD;
                                return null;
                            case s.GUILD:
                            default:
                                return null
                        }
                    }(er, W, z, ed),
                    eF = er !== s.CONFIRM || null == eS && null == ee || null == ev,
                    eG = (0, a.jsxs)(c.ModalFooter, {
                        justify: null == eb ? v.default.Justify.START : v.default.Justify.BETWEEN,
                        children: [(0, a.jsx)(c.Button, {
                            type: "submit",
                            size: c.Button.Sizes.SMALL,
                            disabled: eF,
                            autoFocus: !0,
                            children: B.default.Messages.GO_LIVE_MODAL_CTA
                        }), null == eb ? (0, a.jsx)(c.Button, {
                            className: V.cancelButton,
                            look: c.Button.Looks.LINK,
                            size: c.Button.Sizes.SMALL,
                            color: c.ButtonColors.PRIMARY,
                            onClick: Z,
                            children: B.default.Messages.CANCEL
                        }) : (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            color: c.ButtonColors.PRIMARY,
                            onClick: () => ei(eb),
                            children: B.default.Messages.BACK
                        })]
                    });
                return (0, a.jsx)(E.default, {
                    page: y.AnalyticsPages.GO_LIVE_MODAL,
                    children: (0, a.jsxs)(c.ModalRoot, {
                        "aria-labelledby": ea,
                        transitionState: J,
                        size: c.ModalSize.DYNAMIC,
                        className: V.modalSize,
                        children: [(0, a.jsx)(c.ModalCloseButton, {
                            onClick: Z,
                            className: V.modalCloseButton
                        }), (0, a.jsx)("div", {
                            className: V.art
                        }), (0, a.jsxs)("form", {
                            onSubmit: eO,
                            children: [eU, eP, eG]
                        })]
                    })
                })
            }
        },
        934054: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                r = l("917351"),
                i = l.n(r),
                u = l("446674"),
                o = l("77078"),
                d = l("923959"),
                c = l("305961"),
                f = l("957255"),
                m = l("677099"),
                S = l("109024"),
                E = l("461380"),
                h = l("223913"),
                C = l("644169"),
                g = l("782340"),
                _ = l("770420"),
                N = l("305013");

            function p(e) {
                let {
                    guildId: t,
                    onClick: l
                } = e, s = (0, u.useStateFromStores)([c.default], () => c.default.getGuild(t)), a = (0, u.useStateFromStores)([d.default, c.default, f.default], () => d.default.getChannels(t)[d.GUILD_VOCAL_CHANNELS_KEY].some(e => {
                    let {
                        channel: t
                    } = e;
                    return (0, h.canStreamInChannel)(t, c.default, f.default)
                }));
                return null != s && a ? (0, n.jsxs)(o.Clickable, {
                    onClick: () => l(t),
                    className: N.guildRow,
                    children: [(0, n.jsx)(S.default, {
                        guild: s,
                        size: S.default.Sizes.SMALL,
                        className: N.guildIcon
                    }), (0, n.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: N.guildName,
                        children: s.toString()
                    }), (0, n.jsx)(E.default, {
                        direction: E.default.Directions.RIGHT,
                        className: N.guildArrow
                    })]
                }) : null
            }

            function I(e) {
                let {
                    onSelectGuild: t
                } = e, l = (0, u.useStateFromStores)([m.default], () => m.default.getGuildFolders());
                return (0, n.jsx)(C.default, {
                    title: g.default.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
                    scrollerClassName: a(N.guildScroller, _.marginBottom),
                    children: i.flatMap(l, e => {
                        let {
                            guildIds: l
                        } = e;
                        return l.map(e => (0, n.jsx)(p, {
                            guildId: e,
                            onClick: t
                        }, e))
                    })
                })
            }
        },
        379385: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                r = l("77078"),
                i = l("679653"),
                u = l("619335"),
                o = l("811305"),
                d = l("387111"),
                c = l("782340"),
                f = l("890514");

            function m(e) {
                let {
                    channel: t,
                    users: l,
                    selected: s = !1
                } = e, m = (0, i.default)(t), S = null;
                null != l && l.length > 0 && (S = (0, n.jsx)(o.default, {
                    guildId: t.guild_id,
                    className: f.voiceUserList,
                    users: l,
                    renderUser: e => {
                        if (null == e) return null;
                        let l = d.default.getName(t.guild_id, t.id, e),
                            s = e.getAvatarURL(t.guild_id, 24);
                        return (0, n.jsx)(r.TooltipContainer, {
                            text: l,
                            children: (0, n.jsx)("img", {
                                src: null != s ? s : void 0,
                                "aria-label": e.username,
                                alt: "",
                                className: f.avatar
                            })
                        })
                    },
                    renderMoreUsers: e => {
                        let s = l.slice(4),
                            a = function(e, t) {
                                let l = t.id,
                                    n = t.guild_id;
                                return e.length <= 1 ? null : 2 === e.length ? c.default.Messages.GO_LIVE_MODAL_OVERFLOW_TWO_USERS.format({
                                    nickname0: d.default.getName(n, l, e[0]),
                                    nickname1: d.default.getName(n, l, e[1])
                                }) : 3 === e.length ? c.default.Messages.GO_LIVE_MODAL_OVERFLOW_THREE_USERS.format({
                                    nickname0: d.default.getName(n, l, e[0]),
                                    nickname1: d.default.getName(n, l, e[1]),
                                    nickname2: d.default.getName(n, l, e[2])
                                }) : c.default.Messages.GO_LIVE_MODAL_OVERFLOW_FOUR_OR_MORE_USERS.format({
                                    nickname0: d.default.getName(n, l, e[0]),
                                    nickname1: d.default.getName(n, l, e[1]),
                                    remainingCount: e.length - 2
                                })
                            }(s, t);
                        return (0, n.jsx)("div", {
                            children: (0, n.jsx)(r.TooltipContainer, {
                                text: a,
                                children: (0, n.jsx)("div", {
                                    className: f.userListOverflow,
                                    children: e
                                })
                            })
                        })
                    },
                    max: 5,
                    showUserPopout: !1
                }));
                let E = (0, u.default)(t);
                return (0, n.jsxs)("div", {
                    className: a(f.channelInfo, {
                        [f.selected]: s
                    }),
                    children: [(0, n.jsx)(E, {
                        className: f.channelIcon
                    }), (0, n.jsx)("div", {
                        className: f.channelName,
                        children: m
                    }), S]
                })
            }
        },
        326620: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("58893");

            function a(e) {
                let {
                    children: t
                } = e;
                return (0, n.jsx)("div", {
                    className: s.card,
                    children: t
                })
            }
        },
        644169: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("414456"),
                r = l.n(a),
                i = l("77078"),
                u = l("321443"),
                o = l("770420"),
                d = l("348004");

            function c(e) {
                let {
                    title: t,
                    scrollerClassName: l,
                    scrollerInnerClassName: a,
                    children: c
                } = e, f = s.useRef(null), [m, S] = s.useState(!1), [E, h] = s.useState(!1), C = s.useCallback(() => {
                    let {
                        current: e
                    } = f;
                    null != e && (S(!e.isScrolledToTop()), h(!e.isScrolledToBottom()))
                }, []);
                return s.useLayoutEffect(() => C(), []), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: r(d.title, d.scrollWrapper),
                        children: [(0, n.jsx)(i.FormTitle, {
                            className: o.formItemTitle,
                            children: t
                        }), (0, n.jsx)(u.default, {
                            separator: m
                        })]
                    }), (0, n.jsx)("div", {
                        className: l,
                        children: (0, n.jsx)(i.AdvancedScroller, {
                            ref: f,
                            className: r(d.scrollerInner, a, {
                                [d.bottomSeparator]: E
                            }),
                            onScroll: C,
                            children: c
                        })
                    })]
                })
            }
        },
        23922: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("414456"),
                r = l.n(a),
                i = l("723251"),
                u = l("771281"),
                o = l("351720"),
                d = l("862337"),
                c = l("77078"),
                f = l("823411"),
                m = l("42887"),
                S = l("568307"),
                E = l("703370"),
                h = l("145131"),
                C = l("162933"),
                g = l("773336"),
                _ = l("301834"),
                N = l("756898"),
                p = l("375202"),
                I = l("321443"),
                x = l("444276"),
                A = l("353927"),
                R = l("782340"),
                v = l("45122");
            async function T() {
                let e = m.default.getVideoDevices(),
                    t = (0, o.default)(m.default.getMediaEngine(), [u.DesktopSources.WINDOW, u.DesktopSources.SCREEN], {
                        width: 176,
                        height: 99
                    }),
                    l = L(),
                    n = await l,
                    s = await t,
                    a = s.filter(e => e.id.startsWith(u.DesktopSources.SCREEN)),
                    r = function(e, t) {
                        let l = {};
                        return t.forEach(e => {
                            l[e.id] = e
                        }), e.forEach(e => {
                            l[e.id] = e
                        }), Object.values(l).sort((e, t) => O(t) - O(e))
                    }(s.filter(e => e.id.startsWith(u.DesktopSources.WINDOW)), n),
                    d = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"],
                    c = Object.entries(e).filter(e => {
                        let [t, l] = e;
                        return !l.disabled
                    }).map((e, t) => {
                        let [l, n] = e, s = d[t % d.length], a = Uint8Array.from(atob(s), e => e.charCodeAt(0)), r = (0, i.thumbHashToDataURL)(a);
                        return {
                            id: "camera:" + n.id,
                            name: n.name,
                            url: r
                        }
                    });
                return {
                    windowSources: r,
                    screenSources: a,
                    cameraSources: c
                }
            }
            async function L() {
                let e = S.default.getRunningGames(),
                    t = await Promise.all(e.map(async e => {
                        let t;
                        if (null == e.name) return null;
                        try {
                            t = await f.default.identifyGame(e.pid, e.name)
                        } catch (e) {
                            return null
                        }
                        let l = e.windowHandle,
                            n = e.name,
                            s = t.icon;
                        return null != l && null != n && null != s ? {
                            id: "window:".concat(l),
                            name: n,
                            url: "data:image/bmp;base64,".concat(s)
                        } : null
                    }));
                return t.filter(e => null !== e)
            }

            function O(e) {
                let t = (0, g.isWindows)() ? (0, p.default)(S.default, E.default) : null,
                    l = S.default.getRunningGames();
                return null != t && (0, N.default)(e.id, t.windowHandle) ? 2 : null != l.find(t => (0, N.default)(e.id, t.windowHandle)) ? 1 : 0
            }

            function M(e) {
                let {
                    selectedSource: t,
                    onChangeSelectedSource: l
                } = e, {
                    enableGoLiveCaptureCard: a
                } = _.default.useExperiment({
                    location: "GoLive_Source_Select"
                }), i = m.default.supports(A.Features.GO_LIVE_HARDWARE), [o, f] = s.useState(null), [S, E] = s.useState(null), [g, N] = s.useState(null), p = null != g && g.length > 0, [L, O] = s.useState(u.DesktopSources.WINDOW), [M, j] = s.useState(!1), D = s.useRef(null), U = s.useRef(new d.Interval);
                s.useEffect(() => {
                    let e = U.current;
                    return T().then(e => {
                        let {
                            screenSources: t,
                            windowSources: l,
                            cameraSources: n
                        } = e;
                        f(t), E(l), N(n)
                    }), e.start(1e3, async () => {
                        let {
                            screenSources: e,
                            windowSources: t,
                            cameraSources: l
                        } = await T();
                        f(e), E(t), N(l)
                    }), () => {
                        e.stop()
                    }
                }, []);
                let P = s.useCallback(e => {
                        if (null !== e) {
                            var t;
                            D.current = e, j((t = !e.isScrolledToTop(), t))
                        }
                    }, []),
                    b = function(e) {
                        switch (e) {
                            case u.DesktopSources.WINDOW:
                                return S;
                            case u.DesktopSources.SCREEN:
                                return o;
                            case u.DesktopSources.CAMERA:
                                return g
                        }
                    }(L);
                if (null == b) return (0, n.jsx)(h.default, {
                    className: v.spinner,
                    justify: h.default.Justify.CENTER,
                    align: h.default.Align.CENTER,
                    children: (0, n.jsx)(c.Spinner, {})
                });
                let F = b.map(e => {
                    let {
                        id: s
                    } = e, a = (null == t ? void 0 : t.id) === s;
                    return (0, n.jsx)(c.Clickable, {
                        className: r(v.tile, {
                            [v.selected]: a
                        }),
                        onClick: () => l(e, null),
                        children: (0, n.jsx)(x.default, {
                            source: e,
                            selectedSource: t
                        }, e.id)
                    }, s)
                });

                function G() {
                    let e = D.current;
                    null != e && j(!e.isScrolledToTop())
                }
                return (0, n.jsxs)(s.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: v.segmentContainer,
                        children: [(0, n.jsx)(I.default, {
                            separator: M
                        }), (0, n.jsx)(c.SegmentedControl, {
                            options: function() {
                                let e = [{
                                    name: R.default.Messages.GO_LIVE_MODAL_APPLICATIONS,
                                    value: u.DesktopSources.WINDOW
                                }, {
                                    name: R.default.Messages.GO_LIVE_MODAL_SCREENS,
                                    value: u.DesktopSources.SCREEN
                                }];
                                return a && i && p && e.push({
                                    name: R.default.Messages.GO_LIVE_MODAL_CAPTURE,
                                    value: u.DesktopSources.CAMERA
                                }), e
                            }(),
                            value: L,
                            onChange: e => {
                                let {
                                    value: t
                                } = e;
                                return O(t)
                            },
                            className: v.segmentControl,
                            optionClassName: v.segmentControlOption
                        })]
                    }), L === u.DesktopSources.CAMERA ? (0, n.jsx)("div", {
                        className: v.sourceContainer,
                        children: (0, n.jsx)(c.AdvancedScroller, {
                            ref: P,
                            className: v.sourceScroller,
                            onScroll: G,
                            children: (0, n.jsx)(C.default, {
                                layout: C.default.Layout.WRAP,
                                columns: 2,
                                className: v.sourceContainer,
                                children: F
                            })
                        })
                    }) : (0, n.jsx)(c.AdvancedScroller, {
                        ref: P,
                        className: v.sourceScroller,
                        onScroll: G,
                        children: (0, n.jsx)(C.default, {
                            layout: C.default.Layout.WRAP,
                            columns: 2,
                            className: v.sourceContainer,
                            children: F
                        })
                    })]
                })
            }
        },
        444276: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                r = l("77078"),
                i = l("145131"),
                u = l("45122");

            function o(e) {
                let {
                    source: t,
                    selectedSource: l
                } = e, {
                    id: s,
                    name: o,
                    url: d
                } = t, c = (null == l ? void 0 : l.id) === s;
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(i.default, {
                        direction: i.default.Direction.VERTICAL,
                        justify: i.default.Justify.CENTER,
                        align: i.default.Align.CENTER,
                        children: [(0, n.jsx)(i.default, {
                            justify: i.default.Justify.CENTER,
                            align: i.default.Align.CENTER,
                            children: (0, n.jsx)("div", {
                                style: {
                                    backgroundImage: "url(".concat(d, ")")
                                },
                                className: a(u.sourceThumbnail, {
                                    [u.selected]: c
                                })
                            })
                        }), (0, n.jsx)(r.Text, {
                            className: a(u.sourceName, {
                                [u.selected]: c
                            }),
                            variant: "text-sm/normal",
                            children: o
                        })]
                    })
                })
            }
        },
        985997: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return D
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                r = l("627445"),
                i = l.n(r),
                u = l("446674"),
                o = l("77078"),
                d = l("901582"),
                c = l("997289"),
                f = l("56947"),
                m = l("506317"),
                S = l("305961"),
                E = l("697218"),
                h = l("140848"),
                C = l("145131"),
                g = l("216422"),
                _ = l("719923"),
                N = l("773356"),
                p = l("480862"),
                I = l("686298"),
                x = l("49111"),
                A = l("646718"),
                R = l("782340"),
                v = l("770420"),
                T = l("986916"),
                L = l("926622");

            function O(e) {
                let {
                    analyticsLocation: t,
                    onClose: s
                } = e;
                (0, o.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("754534").then(l.bind(l, "754534"));
                    return l => (0, n.jsx)(e, {
                        ...l,
                        onCloseParent: s,
                        analyticsSource: t
                    })
                })
            }

            function M() {
                return (0, n.jsxs)("div", {
                    className: T.toolTipTextContainer,
                    children: [(0, n.jsx)(g.default, {
                        className: a(T.premiumIcon, T.premiumIconColor)
                    }), (0, n.jsx)(o.Text, {
                        className: T.upsellText,
                        variant: "text-sm/medium",
                        children: R.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
                    })]
                })
            }

            function j(e) {
                let t, l, {
                        type: s,
                        selected: r,
                        needsPremium: i,
                        analyticsLocation: u,
                        onClick: d,
                        onClose: c
                    } = e,
                    {
                        value: f,
                        label: m
                    } = s;
                return i ? (t = (0, n.jsx)(o.TooltipContainer, {
                    tooltipClassName: T.tooltip,
                    spacing: 12,
                    "aria-label": R.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
                    text: (0, n.jsx)(M, {}),
                    children: (0, n.jsx)(C.default, {
                        align: C.default.Align.CENTER,
                        children: (0, n.jsx)(o.Text, {
                            variant: "text-xs/bold",
                            className: T.selectorNitroText,
                            children: m
                        })
                    })
                }), l = () => O({
                    analyticsLocation: u,
                    onClose: c
                })) : (t = (0, n.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    className: r ? T.selectorTextSelected : T.selectorText,
                    children: m
                }), l = () => d(f)), {
                    content: t,
                    className: a(r ? T.selectorButtonSelected : T.selectorButton, {
                        [T.selectorButtonPremiumRequired]: i
                    }),
                    onClick: l
                }
            }

            function D(e) {
                let {
                    onClose: t,
                    selectedPreset: l,
                    selectedResolution: s,
                    selectedFPS: a,
                    onResolutionChange: r,
                    onFPSChange: g,
                    onPresetChange: M,
                    guildId: D,
                    captureDeviceSelected: U
                } = e, P = (0, u.useStateFromStores)([E.default], () => {
                    let e = E.default.getCurrentUser();
                    return i(null != e, "StreamSettings: user cannot be undefined"), e
                }), b = _.default.isPremiumExactly(P, A.PremiumTypes.TIER_0), F = _.default.isPremium(P), G = (0, u.useStateFromStores)([S.default], () => {
                    var e;
                    return null === (e = S.default.getGuild(D)) || void 0 === e ? void 0 : e.premiumTier
                }), {
                    location: k
                } = (0, c.useAnalyticsContext)(), {
                    enabled: y
                } = m.NitroBasicHDStreamingUpsellExperiment.useExperiment({
                    location: "a87c74_1"
                }, {
                    autoTrackExposure: b,
                    disable: !b
                }), w = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
                    autoTrackExposure: !1
                }), B = (y || !F) && !w, V = U ? I.GoLiveDeviceResolutionButtons : I.ApplicationStreamResolutionButtons, H = {
                    ...k,
                    section: x.AnalyticsSections.STREAM_SETTINGS
                }, W = (0, n.jsx)(h.default, {
                    buttons: V.map(e => j({
                        type: e,
                        selected: e.value === s,
                        needsPremium: !(0, N.default)(l, e.value, a, P, G),
                        analyticsLocation: H,
                        onClick: () => r(e.value),
                        onClose: t
                    }))
                }), z = (0, n.jsx)(h.default, {
                    buttons: I.ApplicationStreamFPSButtons.map(e => j({
                        type: e,
                        selected: e.value === a,
                        needsPremium: !(0, N.default)(l, s, e.value, P, G),
                        analyticsLocation: H,
                        onClick: () => g(e.value),
                        onClose: t
                    }))
                }), K = [{
                    value: I.ApplicationStreamPresets.PRESET_VIDEO,
                    label: R.default.Messages.STREAM_PRESET_VIDEO
                }, ...U ? [] : [{
                    value: I.ApplicationStreamPresets.PRESET_DOCUMENTS,
                    label: R.default.Messages.STREAM_PRESET_DOCUMENTS
                }], {
                    value: I.ApplicationStreamPresets.PRESET_CUSTOM,
                    label: R.default.Messages.STREAM_PRESET_CUSTOM
                }], Y = l === I.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(C.default, {
                        children: (0, n.jsx)(o.FormItem, {
                            title: R.default.Messages.STREAM_RESOLUTION,
                            titleClassName: v.formItemTitleSlim,
                            className: T.documentModeGroup,
                            children: (0, n.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                children: R.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
                                    fps: a
                                })
                            })
                        })
                    }), B ? (0, n.jsx)(p.default, {
                        message: R.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                        onClose: t,
                        openStreamUpsellModal: O
                    }) : null]
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(C.default, {
                        children: [(0, n.jsx)(o.FormItem, {
                            title: R.default.Messages.STREAM_RESOLUTION,
                            className: T.settingsGroup,
                            titleClassName: v.formItemTitleSlim,
                            children: W
                        }), (0, n.jsx)(o.FormItem, {
                            title: R.default.Messages.SCREENSHARE_FRAME_RATE,
                            className: T.settingsGroup,
                            titleClassName: v.formItemTitleSlim,
                            children: z
                        })]
                    }), B ? (0, n.jsx)(p.default, {
                        onClose: t,
                        openStreamUpsellModal: O
                    }) : null]
                });
                return (0, n.jsx)(d.default, {
                    ...H,
                    children: (0, n.jsx)(o.FormItem, {
                        title: R.default.Messages.STREAM_QUALITY,
                        titleClassName: v.formItemTitle,
                        className: v.modalContent,
                        children: (0, n.jsxs)("div", {
                            className: T.qualitySettingsContainer,
                            children: [(0, n.jsx)(o.SingleSelect, {
                                value: l,
                                className: L.marginTop8,
                                options: K,
                                onChange: e => M(e)
                            }), Y]
                        })
                    })
                })
            }
        },
        480862: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                r = l("77078"),
                i = l("685665"),
                u = l("649844"),
                o = l("216422"),
                d = l("353487"),
                c = l("49111"),
                f = l("646718"),
                m = l("782340"),
                S = l("139191");

            function E(e) {
                let {
                    message: t,
                    onClose: l,
                    openStreamUpsellModal: s
                } = e, E = d.default.useExperiment({
                    location: "371fea_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    analyticsLocations: h
                } = (0, i.default)(), C = {
                    section: c.AnalyticsSections.STREAM_SETTINGS,
                    object: c.AnalyticsObjects.PREMIUM_UPSELL_BANNER,
                    objectType: c.AnalyticsObjectTypes.BUY
                }, g = () => (d.default.trackExposure({
                    location: "371fea_2"
                }), E.enabled) ? (0, u.default)({
                    initialPlanId: null,
                    subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
                    analyticsLocations: h,
                    analyticsObject: C
                }) : s({
                    analyticsLocation: C,
                    onClose: l
                });
                return (0, n.jsxs)(r.Clickable, {
                    onClick: () => {
                        g()
                    },
                    className: a(S.upsellBanner, S.gradientBackground),
                    children: [(0, n.jsxs)("div", {
                        className: S.iconTextContainer,
                        children: [(0, n.jsx)(o.default, {
                            className: S.iconColor
                        }), (0, n.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            className: S.upsellText,
                            children: null != t ? t : m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER
                        })]
                    }), (0, n.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        className: S.textLink,
                        children: m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA
                    })]
                })
            }
        },
        32649: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("42887");

            function s() {
                let e = n.default.getVideoDevices(),
                    t = Object.entries(e).map(e => {
                        let [t, l] = e;
                        return {
                            id: "camera:" + l.id,
                            name: l.name,
                            url: ""
                        }
                    });
                return t
            }
        },
        16750: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("756898");

            function s(e, t, l) {
                return null == t ? e : l.find(e => (0, n.default)(t.id, e.windowHandle))
            }
        },
        506317: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                NitroBasicHDStreamingUpsellExperiment: function() {
                    return s
                }
            });
            var n = l("862205");
            let s = (0, n.createExperiment)({
                kind: "user",
                id: "2023-01_nitro_basic_hd_streaming_upsell",
                label: "Nitro Basic HD Streaming Upsell",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable upsell",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        140848: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                r = l("77078"),
                i = l("108037");
            let u = e => {
                let {
                    data: t,
                    disabled: l
                } = e, {
                    content: s,
                    className: u,
                    onClick: o,
                    disabled: d
                } = t;
                return (0, n.jsx)(r.FocusRing, {
                    children: (0, n.jsx)("button", {
                        type: "button",
                        className: a(i.item, u),
                        onClick: o,
                        disabled: l || d,
                        children: s
                    })
                })
            };
            var o = e => {
                let {
                    buttons: t,
                    disabled: l,
                    className: s
                } = e;
                return (0, n.jsx)("div", {
                    role: "group",
                    className: a(i.group, s),
                    children: t.map((e, t) => (0, n.jsx)(u, {
                        data: e,
                        disabled: l
                    }, t))
                })
            }
        },
        162933: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n, s, a = l("37983"),
                r = l("884691"),
                i = l("414456"),
                u = l.n(i),
                o = l("145131"),
                d = l("773712");
            (n = s || (s = {})).WRAP = "wrap", n.STACK = "stack";
            class c extends r.PureComponent {
                renderChildren() {
                    let e;
                    let {
                        children: t,
                        layout: l,
                        columns: n
                    } = this.props;
                    switch (l) {
                        case s.STACK:
                            e = "100%";
                            break;
                        case s.WRAP:
                            e = "".concat(1 / n * 100, "%")
                    }
                    return t.map((t, l) => (0, a.jsx)(o.default.Child, {
                        className: d.tile,
                        basis: e,
                        grow: 0,
                        children: t
                    }, l))
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, a.jsx)(o.default, {
                        className: u(e, d.grid),
                        wrap: o.default.Wrap.WRAP,
                        children: this.renderChildren()
                    })
                }
            }
            c.Layout = s, c.defaultProps = {
                children: [],
                layout: s.WRAP,
                columns: 4
            };
            var f = c
        },
        233437: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("469563"),
                a = l("17137"),
                r = l("75196"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...i
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M22 7.002V5C22 3.898 21.104 3 20 3H4C2.897 3 2 3.898 2 5V7.002H22ZM8 4C8.553 4 9 4.448 9 5C9 5.553 8.553 6 8 6C7.447 6 7 5.553 7 5C7 4.448 7.447 4 8 4ZM5 4C5.553 4 6 4.448 6 5C6 5.553 5.553 6 5 6C4.447 6 4 5.553 4 5C4 4.448 4.447 4 5 4Z"
                        }), (0, n.jsx)("path", {
                            fill: s,
                            d: "M2 8.00201V19C2 20.103 2.897 21 4 21H20C21.104 21 22 20.103 22 19V8.00201H2Z"
                        })]
                    })
                }, a.BrowserIcon)
        },
        811305: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                Sizes: function() {
                    return g
                },
                default: function() {
                    return I
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("414456"),
                r = l.n(a),
                i = l("627445"),
                u = l.n(i),
                o = l("77078"),
                d = l("506885"),
                c = l("981601"),
                f = l("766274"),
                m = l("697218"),
                S = l("368121"),
                E = l("523096"),
                h = l("587974"),
                C = l("494101");
            let g = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function _(e, t) {
                let l = e instanceof f.default ? e : null != e ? e.user : null;
                return null != l ? l.id : "user-".concat(t)
            }

            function N(e) {
                return (0, n.jsx)("div", {
                    className: C.moreUsers,
                    children: e
                })
            }
            class p extends s.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: l = this.defaultRenderUser,
                        size: s,
                        extraDetail: a
                    } = this.props, r = [], i = e.length === t ? e.length : t - 1, u = this.renderMoreUsers(i), o = 0;
                    for (; o < i && o < e.length;) {
                        var d;
                        let t = null == u && null == a && o === e.length - 1,
                            i = l(e[o], t, o);
                        r.push(t ? (0, n.jsx)("div", {
                            className: C.avatarContainer,
                            children: i
                        }, _(null !== (d = e[o]) && void 0 !== d ? d : null, o)) : (0, n.jsx)(h.default, {
                            className: C.avatarContainerMasked,
                            height: s,
                            width: s,
                            mask: h.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: i
                        }, _(e[o], o))), o++
                    }
                    return null != a ? r.push(a) : null != u && r.push(u), r
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: l,
                        hideMoreUsers: a,
                        renderMoreUsers: r,
                        users: i
                    } = this.props, u = Math.min(e, i.length);
                    if (!a) {
                        if (null != l) {
                            if (l >= t) return (0, n.jsx)(s.Fragment, {
                                children: r("".concat(t, "+"), t)
                            }, "more-users");
                            if (l > i.length) {
                                let e = l - i.length;
                                return (0, n.jsx)(s.Fragment, {
                                    children: r("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (u < i.length) {
                            let e = Math.min(i.length - u, 99);
                            return (0, n.jsx)(s.Fragment, {
                                children: r("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, n.jsx)(S.default, {
                        foreground: C.foreground,
                        className: C.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: l,
                        guildId: s,
                        showUserPopout: a,
                        useFallbackUserForPopout: i
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, S = l.find(e => null != e && e.id === f), E = i && null == m.default.getUser(f);
                    return (0, n.jsx)(o.Popout, {
                        position: "right",
                        preload: null == S ? void 0 : () => (0, d.default)(S.id, S.getAvatarURL(s, 80), {
                            guildId: s
                        }),
                        shouldShow: !0 === a && null != f,
                        fixed: !0,
                        renderPopout: e => (u(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, n.jsx)(c.default, {
                            ...this.props,
                            user: E && null != S ? S : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: l => (0, n.jsxs)("div", {
                            className: r(e, C.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.SIZE_24;
                                switch (e) {
                                    case g.SIZE_16:
                                        return C.size16;
                                    case g.SIZE_24:
                                        return C.size24;
                                    case g.SIZE_32:
                                        return C.size32;
                                    case g.SIZE_56:
                                        return C.size56;
                                    default:
                                        return C.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...l,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = s.createRef(), this.defaultRenderUser = (e, t, l) => {
                        let {
                            showUserPopout: s,
                            guildId: a,
                            size: r
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, n.jsx)("div", {
                                className: C.emptyUser
                            });
                            {
                                let e = (null != l ? l : 0) % E.default.DEFAULT_AVATARS.length,
                                    t = E.default.DEFAULT_AVATARS[e];
                                return (0, n.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: C.avatar
                                })
                            }
                        }
                        let i = (0, n.jsx)("img", {
                            src: e.getAvatarURL(a, r),
                            alt: e.username,
                            className: C.avatar
                        }, e.id);
                        return s ? (0, n.jsx)(o.Clickable, {
                            className: C.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: i
                        }, e.id) : i
                    }
                }
            }
            p.defaultProps = {
                max: 10,
                renderMoreUsers: N,
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: g.SIZE_24
            };
            var I = p
        },
        351720: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("627445"),
                s = l.n(n),
                a = l("773179"),
                r = l.n(a),
                i = l("353927");

            function u(e, t, l) {
                let n = window.DiscordNative;
                s(null != n, "Can't get desktop sources outside of native app"), t = null != t ? t : [i.DesktopSources.WINDOW, i.DesktopSources.SCREEN], l = null != l ? l : {
                    width: 150,
                    height: 150
                };
                let a = [];
                return t.includes(i.DesktopSources.SCREEN) && e.supports(i.Features.SCREEN_PREVIEWS) && (a.push(e.getScreenPreviews(l.width, l.height)), t = t.filter(e => e !== i.DesktopSources.SCREEN)), t.includes(i.DesktopSources.WINDOW) && e.supports(i.Features.WINDOW_PREVIEWS) && (a.push(e.getWindowPreviews(l.width, l.height)), t = t.filter(e => e !== i.DesktopSources.WINDOW)), 0 !== t.length && a.push(n.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: l
                })), Promise.all(a).then(e => r.flatten(e))
            }
        }
    }
]);