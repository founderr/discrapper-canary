(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["86514"], {
        268258: function(e, t, l) {
            "use strict";
            l("222007"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stringSimilarity = void 0;
            t.stringSimilarity = function(e, t, l, a) {
                if (void 0 === l && (l = 2), void 0 === a && (a = !1), !a && (e = e.toLowerCase(), t = t.toLowerCase()), e.length < l || t.length < l) return 0;
                for (var n = new Map, s = 0; s < e.length - (l - 1); s++) {
                    var r = e.substr(s, l);
                    n.set(r, n.has(r) ? n.get(r) + 1 : 1)
                }
                for (var i = 0, u = 0; u < t.length - (l - 1); u++) {
                    var o = t.substr(u, l),
                        d = n.has(o) ? n.get(o) : 0;
                    d > 0 && (n.set(o, d - 1), i++)
                }
                return 2 * i / (e.length + t.length - (l - 1) * 2)
            }, t.default = t.stringSimilarity
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
            var a = l("37983");
            l("884691");
            var n = l("669491"),
                s = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: i
                    }), (0, a.jsx)("path", {
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
            var a = l("37983"),
                n = l("884691"),
                s = l("77078"),
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
                    return n.useEffect(() => {
                        o.default.track(d.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: c.PremiumUpsellTypes.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL,
                            location: e.location,
                            location_stack: t
                        })
                    }, []), (0, a.jsx)(s.FormItem, {
                        className: S.modalContent,
                        children: (0, a.jsxs)("div", {
                            className: m.nitroUpsellContainer,
                            children: [(0, a.jsxs)("div", {
                                children: [(0, a.jsx)(s.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    className: m.nitroUpsellTitle,
                                    children: f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_TITLE
                                }), (0, a.jsx)(s.Text, {
                                    className: m.nitroUpsellSubtitle,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_BODY.format()
                                })]
                            }), (0, a.jsx)(s.Button, {
                                look: s.Button.Looks.INVERTED,
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
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("627445"),
                r = l.n(s),
                i = l("446674"),
                u = l("151426"),
                o = l("77078"),
                d = l("10641"),
                c = l("235145"),
                f = l("369964"),
                m = l("227602"),
                S = l("701909"),
                E = l("13798"),
                C = l("386045"),
                g = l("30591"),
                _ = l("803725"),
                h = l("49111"),
                N = l("782340"),
                p = l("173266"),
                I = l("770420");
            let x = e => {
                let {
                    clipsEnabled: t,
                    isAnimationDone: l,
                    guildId: s,
                    children: r
                } = e, m = (0, i.useStateFromStores)([C.default], () => C.default.getHardwareClassification()), E = m === g.ClipsHardwareClassification.MEETS_MINIMUM || m === g.ClipsHardwareClassification.UNKNOWN, I = m === g.ClipsHardwareClassification.BELOW_MINIMUM, x = l && (E || I) && !t, [A, R] = (0, c.useGetDismissibleContent)(x ? [u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK] : []), v = A === u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK;
                n.useEffect(() => {
                    t && (0, d.markDismissibleContentAsDismissed)(u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK, {
                        forceTrack: !0
                    })
                }, [t]);
                let T = (e, t) => {
                    e.stopPropagation(), e.preventDefault(), null == t || t(), R()
                };
                return (0, a.jsx)(o.Popout, {
                    shouldShow: v,
                    position: "right",
                    align: "center",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, a.jsx)(f.default, {
                            dismissibleContent: u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK,
                            shouldUseHorizontalButtons: !0,
                            inlineArt: !0,
                            artClassName: p.clipsEducationArt,
                            position: "right",
                            header: N.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_TITLE,
                            headerClassName: p.clipsEducationHeader,
                            body: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: N.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY
                                }), I ? (0, a.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    className: p.warningText,
                                    children: N.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_HARDWARE_IMPACT_WARNING.format({
                                        url: S.default.getArticleURL(h.HelpdeskArticles.CLIPS)
                                    })
                                }) : null]
                            }),
                            tryItText: N.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
                            onTryFeature: e => {
                                (0, _.updateClipsEnabled)({
                                    clipsEnabled: !0,
                                    guildId: s,
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
                } = e, n = (0, i.useStateFromStores)([C.default], () => C.default.getSettings().clipsEnabled), s = (0, i.useStateFromStores)([m.default], () => m.default.getKeybindForAction(h.GlobalKeybindActions.SAVE_CLIP));
                r(null != s, "Clips keybind should be set");
                let u = E.toString(s.shortcut, !0);
                return (0, a.jsx)(o.FormItem, {
                    title: N.default.Messages.CLIPS_SETTINGS,
                    titleClassName: I.formItemTitle,
                    className: I.modalContent,
                    children: (0, a.jsxs)("div", {
                        className: p.container,
                        children: [(0, a.jsx)(x, {
                            clipsEnabled: n,
                            guildId: l,
                            isAnimationDone: t,
                            children: (0, a.jsx)(o.FormSwitch, {
                                className: p.formSwitch,
                                value: n,
                                onChange: e => (0, _.updateClipsEnabled)({
                                    clipsEnabled: e,
                                    guildId: l,
                                    trackAnalytics: !0
                                }),
                                hideBorder: !0,
                                children: N.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
                            })
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "interactive-normal",
                            className: p.description,
                            children: N.default.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
                                keybind: u,
                                keybindHook: () => (0, a.jsx)("span", {
                                    className: p.keybindHintKeys,
                                    children: (0, a.jsx)(o.KeyCombo, {
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
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                r = l.n(s),
                i = l("77078"),
                u = l("731898"),
                o = l("10641"),
                d = l("275623"),
                c = l("216422"),
                f = l("994428"),
                m = l("782340"),
                S = l("804920"),
                E = n.forwardRef(function(e, t) {
                    let {
                        body: l,
                        header: s,
                        artClassName: E,
                        headerClassName: C,
                        contentClassName: g,
                        tryItText: _,
                        onTryFeature: h,
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
                        maxWidth: j = 280
                    } = e, M = A ? i.Button.Sizes.LARGE : i.Button.Sizes.MAX, [D, P] = n.useState(!1), {
                        ref: b,
                        width: U
                    } = (0, u.default)();

                    function G(e) {
                        (0, o.markDismissibleContentAsDismissed)(v, {
                            dismissAction: e
                        })
                    }
                    return n.useEffect(() => {
                        var e, t;
                        let l = (null !== (t = null === (e = b.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
                        !D && l > j && P(!0)
                    }, [D, U, b, j]), n.useEffect(() => {
                        (0, o.requestMarkDismissibleContentAsShown)(v)
                    }, [v]), (0, a.jsx)("div", {
                        className: p,
                        ref: t,
                        children: (0, a.jsxs)("div", {
                            className: r(S.content, g, {
                                [S.contentNoArt]: null == E || I,
                                [S.contentPremium]: x || O
                            }),
                            children: [(0, a.jsxs)("div", {
                                className: r(E, I ? S.artInline : S.artAbsolute),
                                children: [R && (0, a.jsx)(d.default, {
                                    className: S.gifTag
                                }), L]
                            }), (0, a.jsxs)("div", {
                                className: S.body,
                                children: [(0, a.jsxs)(i.Heading, {
                                    className: r(x ? S.headerWithPremiumIcon : S.header, C),
                                    variant: "heading-md/bold",
                                    color: "always-white",
                                    children: [x && !O ? (0, a.jsx)(c.default, {
                                        className: S.premiumIcon
                                    }) : null, O ? (0, a.jsxs)(i.Text, {
                                        color: "always-white",
                                        variant: "eyebrow",
                                        className: S.earlyAccessBadgeContainer,
                                        children: [(0, a.jsx)(c.default, {
                                            className: S.earlyAccessIcon
                                        }), (0, a.jsx)("span", {
                                            className: S.earlyAccessText,
                                            children: m.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
                                        })]
                                    }) : null, s]
                                }), null == l ? null : "string" == typeof l ? (0, a.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: l
                                }) : l]
                            }), (0, a.jsx)("div", {
                                ref: b,
                                className: D || !A ? S.buttonContainerVertical : S.buttonContainerHorizontal,
                                children: null != h ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(i.Button, {
                                        className: S.button,
                                        size: M,
                                        onClick: e => {
                                            null == N || N(e), h(e), G(f.ContentDismissActionType.PRIMARY)
                                        },
                                        color: x || O ? i.Button.Colors.BRAND : i.Button.Colors.WHITE,
                                        look: x || O ? i.Button.Looks.INVERTED : i.Button.Looks.FILLED,
                                        children: null != _ ? _ : m.default.Messages.EDUCATION_NEW_FEATURE_TRY_IT
                                    }), (0, a.jsx)(i.Button, {
                                        className: S.button,
                                        size: M,
                                        onClick: e => {
                                            null == N || N(e), G(f.ContentDismissActionType.DISMISS)
                                        },
                                        color: x || O ? i.Button.Colors.WHITE : i.Button.Colors.BRAND,
                                        look: x || O ? i.Button.Looks.LINK : i.Button.Looks.FILLED,
                                        children: m.default.Messages.EDUCATION_NEW_FEATURE_DISMISS
                                    })]
                                }) : (0, a.jsx)(i.Button, {
                                    className: S.button,
                                    size: i.Button.Sizes.MAX,
                                    onClick: e => {
                                        null == N || N(e), G(f.ContentDismissActionType.PRIMARY)
                                    },
                                    color: i.Button.Colors.WHITE,
                                    children: m.default.Messages.EDUCATION_NEW_FEATURE_CONFIRM
                                })
                            }), (0, a.jsx)("div", {
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
                    return s
                }
            });
            var a = l("862205");
            let n = (0, a.createExperiment)({
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
            var s = n
        },
        288207: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            }), l("222007");
            let a = new Set(["nvidia"]);

            function n(e) {
                for (let t of Object.keys(e)) {
                    let l = e[t];
                    if (null != l && null == l.error && a.has(t)) return !0
                }
                return !1
            }
        },
        439792: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            }), l("222007");
            var a = l("570277"),
                n = l.n(a),
                s = l("773336");
            let r = {
                [s.PlatformTypes.WINDOWS]: {
                    nvidia: "<=537.58.0"
                }
            };

            function i(e) {
                let t = r[(0, s.getPlatform)()];
                if (null == t) return !1;
                for (let l of Object.keys(e)) {
                    let a = e[l],
                        s = t[l];
                    if (null == a || null == s || null != a.error) continue;
                    let r = function(e) {
                        var t, l;
                        return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (l = e.minor) && void 0 !== l ? l : 0, ".0")
                    }(a);
                    if (!n.satisfies(r, s)) return !0
                }
                return !1
            }
        },
        7738: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            }), l("222007");
            var a = l("773356"),
                n = l("686298");

            function s(e, t, l) {
                let s = n.ApplicationStreamPresetValues[e];
                for (let n of s)
                    if ((0, a.default)(e, n.resolution, n.fps, t, l)) return [n.resolution, n.fps];
                return null
            }
        },
        709496: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            }), l("222007");
            var a = l("570277"),
                n = l.n(a),
                s = l("773336");
            let r = {
                [s.PlatformTypes.WINDOWS]: {
                    nvidia: ">=397.93.0"
                }
            };

            function i(e) {
                let t = r[(0, s.getPlatform)()];
                if (null == t) return !1;
                for (let l of Object.keys(e)) {
                    let a = e[l],
                        s = t[l];
                    if (null == a || null == s || null != a.error) continue;
                    let r = function(e) {
                        var t, l;
                        return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (l = e.minor) && void 0 !== l ? l : 0, ".0")
                    }(a);
                    if (!n.satisfies(r, s)) return !0
                }
                return !1
            }
        },
        353487: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("862205");
            let n = (0, a.createExperiment)({
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
            var s = n
        },
        767960: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return S
                }
            });
            var a = l("446674"),
                n = l("913144"),
                s = l("773336"),
                r = l("50885"),
                i = l("288207"),
                u = l("439792"),
                o = l("709496");
            let d = !1,
                c = !0,
                f = !1;
            class m extends a.default.Store {
                initialize() {
                    !(!s.isPlatformEmbedded || __OVERLAY__) && r.default.getGPUDriverVersions().then(e => {
                        d = (0, o.default)(e), c = (0, i.default)(e), f = (0, u.default)(e), this.emitChange()
                    })
                }
                get GPUDriversOutdated() {
                    return d
                }
                get canUseHardwareAcceleration() {
                    return c
                }
                get problematicGPUDriver() {
                    return f
                }
                getState() {
                    return {
                        GPUDriversOutdated: d,
                        canUseHardwareAcceleration: c,
                        problematicGPUDriver: f
                    }
                }
            }
            m.displayName = "StreamingCapabilitiesStore";
            var S = new m(n.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        streamingCapabilitiesStoreState: t
                    } = e;
                    d = t.GPUDriversOutdated, c = t.canUseHardwareAcceleration
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
            var a = l("570277"),
                n = l.n(a),
                s = l("229353"),
                r = l("49671"),
                i = l("42887"),
                u = l("773336"),
                o = l("706530"),
                d = l("353927"),
                c = l("782340");

            function f() {
                if (!i.default.supports(d.Features.SOUNDSHARE)) return s.GO_LIVE_SCREENSHARE_NO_SOUND;
                if ((0, u.isWindows)() && !n.satisfies(null === r.default || void 0 === r.default ? void 0 : r.default.os.release, o.WINDOWS_SOUNDSHARE_VERSION)) return c.default.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE;
                if ((0, u.isMac)() && !n.satisfies(null === r.default || void 0 === r.default ? void 0 : r.default.os.release, o.DARWIN_SOUNDSHARE_VERSION)) return c.default.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE;
                return null
            }
        },
        75974: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            }), l("808653"), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("917351"),
                r = l.n(s),
                i = l("268258"),
                u = l("446674"),
                o = l("77078"),
                d = l("42887"),
                c = l("326620"),
                f = l("32649"),
                m = l("782340"),
                S = l("389915"),
                E = l("770420"),
                C = l("926622");

            function g(e) {
                let {
                    selectedSource: t,
                    onChangeVideoDeviceSource: l,
                    onChangeAudioDevice: s
                } = e, g = (0, f.default)(), _ = (0, u.useStateFromStores)([d.default], () => d.default.getInputDevices()), [h, N] = n.useState(function(e, t, l) {
                    if (null != t && null != l) {
                        let a = t.find(t => t.id === e);
                        if (null == a) return;
                        let n = r.reduce(l, (e, t) => (0, i.stringSimilarity)(a.name, t.name) > (0, i.stringSimilarity)(a.name, e.name) ? t : e);
                        if (null != n) return n.id
                    }
                }(t.id, g, _));
                return null != h && s(h), (0, a.jsx)(n.Fragment, {
                    children: (0, a.jsxs)(o.FormItem, {
                        title: "Capture Device",
                        className: E.modalContent,
                        children: [(0, a.jsx)(o.FormItem, {
                            className: C.marginTop8,
                            children: (0, a.jsxs)(c.default, {
                                children: [(0, a.jsx)("span", {
                                    className: S.ellipsisText,
                                    children: t.name
                                }), (0, a.jsx)(o.Button, {
                                    className: S.changeButton,
                                    color: o.Button.Colors.PRIMARY,
                                    size: o.Button.Sizes.SMALL,
                                    onClick: l,
                                    children: m.default.Messages.CHANGE
                                })]
                            })
                        }), (0, a.jsx)(o.FormItem, {
                            className: C.marginTop8,
                            title: m.default.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
                            children: (0, a.jsx)(o.SingleSelect, {
                                value: h,
                                className: C.marginaTop8,
                                onChange: e => {
                                    N(e), s(e)
                                },
                                options: r.map(_, e => {
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
                    return C
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("446674"),
                s = l("77078"),
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

            function C(e) {
                let {
                    selectedChannelId: t,
                    guildId: l,
                    onChangeSelectedChannelId: C
                } = e, g = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser()), _ = (0, n.useStateFromStores)([i.default, r.default, u.default], () => (0, c.getStreamEligibleChannels)(r.default.getChannels(l), i.default, u.default)), h = (0, n.useStateFromStores)([d.default], () => d.default.getVoiceStates(l)), N = _.map(e => {
                    var l;
                    return {
                        name: (0, a.jsx)(f.default, {
                            channel: e,
                            users: null === (l = h[e.id]) || void 0 === l ? void 0 : l.filter(e => {
                                let {
                                    user: t
                                } = e;
                                return t.id !== (null == g ? void 0 : g.id)
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
                return (0, a.jsx)(m.default, {
                    title: S.default.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
                    scrollerInnerClassName: E.channelSelectScrollerInner,
                    children: (0, a.jsx)(s.RadioGroup, {
                        options: N,
                        value: t,
                        itemInfoClassName: E.channelInfoWrapper,
                        itemTitleClassName: E.channelTitleWrapper,
                        onChange: e => {
                            let {
                                value: t
                            } = e;
                            return C(t)
                        }
                    })
                })
            }
        },
        636909: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return q
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                r = l.n(s),
                i = l("446674"),
                u = l("77078"),
                o = l("79112"),
                d = l("299285"),
                c = l("454273"),
                f = l("56947"),
                m = l("187001"),
                S = l("504219"),
                E = l("845579"),
                C = l("42203"),
                g = l("525065"),
                _ = l("305961"),
                h = l("42887"),
                N = l("568307"),
                p = l("18494"),
                I = l("697218"),
                x = l("703370"),
                A = l("145131"),
                R = l("953109"),
                v = l("476263"),
                T = l("267675"),
                L = l("423487"),
                O = l("233437"),
                j = l("599110"),
                M = l("449008"),
                D = l("701909"),
                P = l("773336"),
                b = l("767960"),
                U = l("375202"),
                G = l("916262"),
                k = l("75974"),
                y = l("359812"),
                F = l("273405"),
                w = l("326620"),
                B = l("985997"),
                V = l("16750"),
                H = l("706530"),
                W = l("49111"),
                z = l("782340"),
                K = l("183351"),
                Y = l("770420");

            function Z(e) {
                let {
                    selectedSource: t,
                    selectSource: l,
                    sourceChanged: n,
                    onChangeSource: s
                } = e, r = (0, i.useStateFromStores)([N.default, x.default], () => (0, P.isWindows)() ? (0, U.default)(N.default, x.default) : null), o = (0, i.useStateFromStores)([d.default], () => (null == r ? void 0 : r.id) != null ? d.default.getApplication(r.id) : null), c = (0, i.useStateFromStores)([N.default], () => N.default.getRunningGames()), f = (0, i.useStateFromStoresArray)([d.default], () => c.map(e => null != e.id ? d.default.getApplication(e.id) : null).filter(M.isNotNullish), [c]), m = null;
                if (null != t ? m = t.name : null != r && (m = r.name), null == m) return null;
                let S = (0, V.default)(r, t, c),
                    E = n ? f.find(e => {
                        let {
                            id: t
                        } = e;
                        return t === (null == S ? void 0 : S.id)
                    }) : o,
                    C = null != t && t.id.startsWith("screen") ? T.default : O.default;
                return (0, a.jsx)(u.FormItem, {
                    title: z.default.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
                    className: Y.modalContent,
                    titleClassName: Y.formItemTitleVerySlim,
                    children: (0, a.jsxs)(w.default, {
                        children: [null != E ? (0, a.jsx)(R.default, {
                            game: E,
                            size: R.default.Sizes.XSMALL,
                            className: K.selectedIcon
                        }) : (0, a.jsx)(C, {
                            className: K.selectedIcon
                        }), (0, a.jsx)("span", {
                            className: K.ellipsisText,
                            children: m
                        }), l ? (0, a.jsx)(u.Button, {
                            className: K.changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: s,
                            children: z.default.Messages.CHANGE
                        }) : null]
                    })
                })
            }

            function J(e) {
                let {
                    onChange: t,
                    guildId: l
                } = e, n = (0, i.useStateFromStores)([_.default], () => _.default.getGuild(l));
                return null == n ? (t(), null) : (0, a.jsx)(u.FormItem, {
                    title: z.default.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
                    className: Y.modalContent,
                    titleClassName: Y.formItemTitle,
                    children: (0, a.jsxs)(w.default, {
                        children: [(0, a.jsx)(v.default, {
                            guild: n,
                            size: v.default.Sizes.SMALLER,
                            className: K.selectedIcon
                        }), (0, a.jsx)("span", {
                            className: K.ellipsisText,
                            children: n.toString()
                        }), (0, a.jsx)(u.Button, {
                            className: K.changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: t,
                            children: z.default.Messages.CHANGE
                        })]
                    })
                })
            }

            function X(e) {
                let {
                    text: t
                } = e;
                return (0, a.jsxs)(A.default, {
                    align: A.default.Align.CENTER,
                    className: K.warning,
                    children: [(0, a.jsx)(L.default, {
                        className: K.warningIcon
                    }), (0, a.jsx)(u.Text, {
                        color: "none",
                        variant: "text-xs/normal",
                        children: t
                    })]
                })
            }

            function Q(e) {
                let {
                    guildId: t
                } = e, l = (0, i.useStateFromStores)([g.default], () => {
                    var e;
                    return null !== (e = g.default.getMemberCount(t)) && void 0 !== e ? e : 0
                }), s = E.NotifyFriendsOnGoLive.useSetting(), o = n.useCallback((e, t) => {
                    E.NotifyFriendsOnGoLive.updateSetting(t), j.default.track(W.AnalyticEvents.NOTIFY_STREAM_SETTING_UPDATE, {
                        value: t
                    })
                }, []), d = l >= 2 && l <= H.STREAM_NOTIFY_GUILD_MAX_SIZE;
                return d ? (0, a.jsx)(u.FormItem, {
                    className: r(Y.modalContent, K.checkboxRow),
                    children: (0, a.jsx)(u.Checkbox, {
                        value: !!s,
                        type: u.Checkbox.Types.INVERTED,
                        onChange: o,
                        children: (0, a.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: z.default.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
                        })
                    })
                }) : null
            }

            function q(e) {
                let {
                    selectedSource: t,
                    selectedFPS: l,
                    selectedChannelId: s,
                    selectedPreset: r,
                    selectedResolution: u,
                    sourceChanged: d,
                    guildId: E,
                    selectSource: g,
                    selectGuild: _,
                    onClose: N,
                    onChangeSelectedFPS: x,
                    onChangeSelectedResolution: A,
                    onChangeSelectedPreset: R,
                    onChangeSelectedChannelId: v,
                    onChangeSource: T,
                    onChangeAudioDevice: L,
                    onChangeGuild: O,
                    isAnimationDone: j
                } = e, M = (0, i.useStateFromStores)([p.default, C.default], () => C.default.getChannel(p.default.getVoiceChannelId())), P = (0, i.useStateFromStores)([b.default], () => b.default.GPUDriversOutdated), U = (0, i.useStateFromStores)([b.default], () => b.default.problematicGPUDriver), w = (0, i.useStateFromStores)([h.default], () => h.default.getSoundshareEnabled()), V = (0, i.useStateFromStores)([I.default], () => I.default.getCurrentUser()), H = (0, f.useEnableClips)(), K = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
                    autoTrackExposure: !H
                }), Y = (0, G.default)();
                null != t && t.id.startsWith("screen") ? Y = z.default.Messages.GO_LIVE_SCREENSHARE_NO_SOUND : null == Y && h.default.supportsEnableSoundshare() && w !== W.SoundshareEnableState.ENABLED && (Y = z.default.Messages.GO_LIVE_SCREENSHARE_ENABLE_FOR_SOUNDSHARE.format({
                    onVoiceSettingsClick: () => {
                        N(), o.default.open(W.UserSettingsSections.VOICE)
                    }
                }));
                let q = H ? (0, a.jsx)(S.default, {
                        guildId: E,
                        isAnimationDone: j
                    }) : K ? (0, a.jsx)(m.default, {}) : void 0,
                    $ = !!(null == t ? void 0 : t.id.startsWith("camera")),
                    ee = null != V && V.verified && !V.bot,
                    et = null != M && !(0, c.isPrivateGuildChannel)(M);
                return (0, a.jsxs)(n.Fragment, {
                    children: [$ ? (0, a.jsx)(k.default, {
                        selectedSource: t,
                        onChangeVideoDeviceSource: T,
                        onChangeAudioDevice: L
                    }) : (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(Z, {
                            selectSource: g,
                            sourceChanged: d,
                            onChangeSource: T,
                            selectedSource: t
                        }), null != Y ? (0, a.jsx)(X, {
                            text: Y
                        }) : null]
                    }), _ && null != E ? (0, a.jsx)(J, {
                        guildId: E,
                        onChange: O
                    }) : null, null != M ? (0, a.jsx)(F.default, {
                        channel: M
                    }) : (0, a.jsx)(y.default, {
                        guildId: E,
                        selectedChannelId: s,
                        onChangeSelectedChannelId: v
                    }), null != E && ee && et ? (0, a.jsx)(Q, {
                        guildId: E
                    }) : null, P ? (0, a.jsx)(X, {
                        text: z.default.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
                    }) : null, U ? (0, a.jsx)(X, {
                        text: z.default.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
                            helpCenterLink: D.default.getArticleURL(W.HelpdeskArticles.NVIDIA_DRIVER_ISSUES)
                        })
                    }) : null, (0, a.jsx)(B.default, {
                        selectedPreset: r,
                        selectedFPS: l,
                        selectedResolution: u,
                        guildId: E,
                        onClose: N,
                        onFPSChange: x,
                        onResolutionChange: A,
                        onPresetChange: R,
                        captureDeviceSelected: $
                    }), q]
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
            var a = l("37983");
            l("884691");
            var n = l("446674"),
                s = l("77078"),
                r = l("271938"),
                i = l("316133"),
                u = l("379385"),
                o = l("326620"),
                d = l("782340"),
                c = l("770420");

            function f(e) {
                let {
                    channel: t
                } = e, l = (0, n.useStateFromStores)([r.default], () => r.default.getId()), f = (0, n.useStateFromStores)([i.default], () => i.default.getVoiceStatesForChannel(t), [t]);
                return (0, a.jsx)(s.FormItem, {
                    title: d.default.Messages.GO_LIVE_MODAL_CURRENT_CHANNEL_FORM_TITLE,
                    className: c.modalContent,
                    titleClassName: c.formItemTitle,
                    children: (0, a.jsx)(o.default, {
                        children: (0, a.jsx)(u.default, {
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
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
                r = l("145912");

            function i(e) {
                let {
                    separator: t = !1
                } = e;
                return (0, a.jsx)("div", {
                    className: s(r.divider, {
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
            }), l("222007");
            var a, n, s = l("37983"),
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
                C = l("299285"),
                g = l("928609"),
                _ = l("268491"),
                h = l("42203"),
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
                j = l("50885"),
                M = l("773356"),
                D = l("7738"),
                P = l("375202"),
                b = l("636909"),
                U = l("934054"),
                G = l("23922"),
                k = l("16750"),
                y = l("686298"),
                F = l("49111"),
                w = l("180524"),
                B = l("782340"),
                V = l("770420");
            (n = a || (a = {}))[n.GUILD = 0] = "GUILD", n[n.SOURCE = 1] = "SOURCE", n[n.CONFIRM = 2] = "CONFIRM";

            function H(e) {
                var t, a, n, i;
                let {
                    selectGuild: H = !1,
                    selectSource: W = !0,
                    guildId: z,
                    analyticsLocation: K,
                    onClose: Y,
                    transitionState: Z
                } = e, {
                    preset: J,
                    resolution: X,
                    fps: Q
                } = (0, d.useStateFromStoresObject)([_.default], () => _.default.getState()), q = (0, d.useStateFromStores)([x.default, h.default], () => h.default.getChannel(x.default.getVoiceChannelId())), $ = (0, d.useStateFromStores)([I.default, R.default], () => (0, O.isWindows)() ? (0, P.default)(I.default, R.default) : null), ee = (0, d.useStateFromStores)([A.default], () => {
                    let e = A.default.getCurrentUser();
                    return u(null != e, "GoLiveModal: user cannot be undefined"), e
                }), et = (0, d.useStateFromStores)([N.default], () => {
                    var e;
                    return null === (e = N.default.getGuild(z)) || void 0 === e ? void 0 : e.premiumTier
                }), [el, ea] = null !== (t = (0, D.default)(J, ee, et)) && void 0 !== t ? t : [y.ApplicationStreamResolutions.RESOLUTION_720, y.ApplicationStreamFPS.FPS_30];
                J !== y.ApplicationStreamPresets.PRESET_CUSTOM && (X = el, Q = ea);
                let en = (0, T.useUID)();
                let [es, er] = r.useState((n = H, i = W, n ? 0 : i ? 1 : 2)), [ei, eu] = r.useState(null), [eo, ed] = r.useState(!1), [ec, ef] = r.useState(null), [em, eS] = r.useState(null), [eE, eC] = r.useState(null), [eg, e_] = r.useState(J), [eh, eN] = r.useState(X), [ep, eI] = r.useState(Q), [ex, eA] = r.useState(null != z ? z : null), eR = null !== (a = null == q ? void 0 : q.id) && void 0 !== a ? a : ec;
                r.useEffect(() => {
                    let e = (0, O.isWindows)() ? (0, P.default)(I.default, R.default) : null,
                        t = (null == e ? void 0 : e.id) != null ? C.default.getApplication(e.id) : null;
                    L.default.track(F.AnalyticEvents.OPEN_MODAL, {
                        type: "Go Live Modal",
                        application_id: null == t ? void 0 : t.id,
                        application_name: null == e ? void 0 : e.name,
                        game_id: null == t ? void 0 : t.id,
                        location_section: K
                    })
                }, [K]);

                function ev() {
                    ! function() {
                        var e, t;
                        u(null != $ || null != em, "got nothing to stream");
                        let l = null !== (e = null == q ? void 0 : q.id) && void 0 !== e ? e : ec;
                        u(null != l, "Received null target channel ID");
                        let a = h.default.getChannel(l),
                            n = null !== (t = null == a ? void 0 : a.getGuildId()) && void 0 !== t ? t : z;
                        null == q && m.default.selectVoiceChannel(l);
                        let s = eg,
                            r = eh,
                            i = ep;
                        !(0, M.default)(s, r, i, ee, et) && (s = y.ApplicationStreamPresets.PRESET_VIDEO, r = y.ApplicationStreamResolutions.RESOLUTION_720, i = y.ApplicationStreamFPS.FPS_30), (0, S.updateStreamSettings)({
                            preset: s,
                            resolution: r,
                            frameRate: i
                        });
                        let o = (0, k.default)($, em, I.default.getRunningGames()),
                            d = !(0, O.isWindows)() || null == o || (null == em ? void 0 : em.id.startsWith("camera:")),
                            c = d || null == o ? null : o.pid;
                        (0, S.startStream)(n, l, {
                            pid: c,
                            sourceId: null == c && null != em ? em.id : null,
                            sourceName: null == c && null != em ? em.name : null,
                            audioSourceId: eE
                        }), (async () => {
                            let e = await g.default.hasPermission(w.NativePermissionTypes.SCREEN_RECORDING, {
                                showAuthorizationError: !1
                            });
                            !e && f.default.show({
                                title: B.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                                body: B.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
                            })
                        })()
                    }(), Y()
                }
                let eT = r.useCallback((e, t, l) => {
                    let a = (0, D.default)(e, ee, et),
                        [n, s] = null != a ? a : [t, l];
                    if (e !== eg && (t = n, l = s), !(0, M.default)(e, t, l, ee, et)) {
                        let [e, a] = (0, D.default)(y.ApplicationStreamPresets.PRESET_VIDEO, ee, et);
                        t = e, l = a
                    }
                    l !== ep && eI(l), t !== eh && eN(t), n !== t || s !== l ? e_(y.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eg && e_(e)
                }, [ee, et, ep, eh, eg]);
                async function eL(e) {
                    if (e.preventDefault(), 1 === es) return er(2);
                    let t = (0, k.default)($, em, I.default.getRunningGames()),
                        a = j.default.supportsFeature(F.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
                    if ((0, O.isMac)() && null != em) {
                        let e = await p.default.getMediaEngine().getDesktopSources(),
                            t = em.id;
                        if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
                            var n, r;
                            n = t, r = e, L.default.track(F.AnalyticEvents.SCREENSHARE_FAILED, {
                                source_id: n,
                                screens: r.length
                            }), (0, c.openModal)(e => (0, s.jsx)(c.ConfirmModal, {
                                header: B.default.Messages.SCREENSHARE_RELAUNCH,
                                confirmText: B.default.Messages.OKAY,
                                cancelText: B.default.Messages.CANCEL,
                                onConfirm: () => j.default.relaunch(),
                                ...e,
                                children: (0, s.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: B.default.Messages.SCREENSHARE_RELAUNCH_BODY
                                })
                            }));
                            return
                        }
                    }
                    a ? ! function() {
                        var e;
                        let t = null !== (e = null == $ ? void 0 : $.pid) && void 0 !== e ? e : null;
                        (0, c.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await l.el("426319").then(l.bind(l, "426319"));
                            return l => (0, s.jsx)(e, {
                                ...l,
                                handleStream: ev,
                                pid: t
                            })
                        })
                    }() : ev()
                }
                let eO = r.useCallback(e => {
                        eS(e), null != e && (er(2), ed(!0))
                    }, []),
                    ej = r.useCallback(e => {
                        eA(e), er(W ? 1 : 2)
                    }, [W]),
                    eM = function(e) {
                        switch (e) {
                            case 1:
                                return B.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
                            case 2:
                                return null;
                            default:
                                return B.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
                        }
                    }(es),
                    eD = (0, s.jsx)(c.ModalHeader, {
                        className: V.modalHeader,
                        separator: !1,
                        children: (0, s.jsxs)(v.default, {
                            direction: v.default.Direction.VERTICAL,
                            align: v.default.Align.CENTER,
                            className: V.header,
                            children: [(0, s.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                id: en,
                                className: V.headerText,
                                children: B.default.Messages.GO_LIVE_MODAL_TITLE
                            }), null != eM ? (0, s.jsx)(c.Text, {
                                className: V.headerDescription,
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: eM
                            }) : null]
                        })
                    }),
                    eP = (0, s.jsxs)(c.Slides, {
                        springConfig: {
                            ...o.config.stiff,
                            clamp: !0
                        },
                        activeSlide: es,
                        width: 480,
                        onSlideReady: eu,
                        children: [(0, s.jsx)(c.Slide, {
                            id: 0,
                            children: (0, s.jsx)("div", {
                                className: V.modalSize,
                                children: (0, s.jsx)(U.default, {
                                    onSelectGuild: ej
                                })
                            })
                        }), (0, s.jsx)(c.Slide, {
                            id: 1,
                            children: (0, s.jsx)("div", {
                                className: V.modalSize,
                                children: (0, s.jsx)(G.default, {
                                    selectedSource: em,
                                    onChangeSelectedSource: eO
                                })
                            })
                        }), (0, s.jsx)(c.Slide, {
                            id: 2,
                            children: (0, s.jsx)("div", {
                                className: V.modalSize,
                                children: (0, s.jsx)(b.default, {
                                    selectedChannelId: ec,
                                    selectedPreset: eg,
                                    selectedResolution: eh,
                                    selectedSource: em,
                                    selectedFPS: ep,
                                    sourceChanged: eo,
                                    selectSource: W,
                                    onChangeSelectedFPS: e => eT(eg, eh, e),
                                    onChangeSelectedResolution: e => eT(eg, e, ep),
                                    onChangeSelectedPreset: e => eT(e, eh, ep),
                                    onChangeSelectedChannelId: ef,
                                    onChangeSelectedSource: eO,
                                    onChangeSource: () => er(1),
                                    onChangeAudioDevice: e => eC(e),
                                    onChangeGuild: () => er(0),
                                    onClose: Y,
                                    guildId: ex,
                                    selectGuild: H,
                                    isAnimationDone: 2 === ei && Z === c.ModalTransitionState.ENTERED
                                })
                            })
                        })]
                    }),
                    eb = function(e, t, l, a) {
                        switch (e) {
                            case 1:
                                return t ? 0 : null;
                            case 2:
                                if (a) return 1;
                                if (!l && t) return 0;
                                return null;
                            default:
                                return null
                        }
                    }(es, H, W, eo),
                    eU = 2 !== es || null == em && null == $ || null == eR,
                    eG = (0, s.jsxs)(c.ModalFooter, {
                        justify: null == eb ? v.default.Justify.START : v.default.Justify.BETWEEN,
                        children: [(0, s.jsx)(c.Button, {
                            type: "submit",
                            size: c.Button.Sizes.SMALL,
                            disabled: eU,
                            autoFocus: !0,
                            children: B.default.Messages.GO_LIVE_MODAL_CTA
                        }), null == eb ? (0, s.jsx)(c.Button, {
                            className: V.cancelButton,
                            look: c.Button.Looks.LINK,
                            size: c.Button.Sizes.SMALL,
                            color: c.ButtonColors.PRIMARY,
                            onClick: Y,
                            children: B.default.Messages.CANCEL
                        }) : (0, s.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            color: c.ButtonColors.PRIMARY,
                            onClick: () => er(eb),
                            children: B.default.Messages.BACK
                        })]
                    });
                return (0, s.jsx)(E.default, {
                    page: F.AnalyticsPages.GO_LIVE_MODAL,
                    children: (0, s.jsxs)(c.ModalRoot, {
                        "aria-labelledby": en,
                        transitionState: Z,
                        size: c.ModalSize.DYNAMIC,
                        className: V.modalSize,
                        children: [(0, s.jsx)(c.ModalCloseButton, {
                            onClick: Y,
                            className: V.modalCloseButton
                        }), (0, s.jsx)("div", {
                            className: V.art
                        }), (0, s.jsxs)("form", {
                            onSubmit: eL,
                            children: [eD, eP, eG]
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
            }), l("881410");
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
                r = l("917351"),
                i = l.n(r),
                u = l("446674"),
                o = l("77078"),
                d = l("923959"),
                c = l("305961"),
                f = l("957255"),
                m = l("677099"),
                S = l("476263"),
                E = l("461380"),
                C = l("223913"),
                g = l("644169"),
                _ = l("782340"),
                h = l("770420"),
                N = l("305013");

            function p(e) {
                let {
                    guildId: t,
                    onClick: l
                } = e, n = (0, u.useStateFromStores)([c.default], () => c.default.getGuild(t)), s = (0, u.useStateFromStores)([d.default, c.default, f.default], () => d.default.getChannels(t)[d.GUILD_VOCAL_CHANNELS_KEY].some(e => {
                    let {
                        channel: t
                    } = e;
                    return (0, C.canStreamInChannel)(t, c.default, f.default)
                }));
                return null != n && s ? (0, a.jsxs)(o.Clickable, {
                    onClick: () => l(t),
                    className: N.guildRow,
                    children: [(0, a.jsx)(S.default, {
                        guild: n,
                        size: S.default.Sizes.SMALL,
                        className: N.guildIcon
                    }), (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: N.guildName,
                        children: n.toString()
                    }), (0, a.jsx)(E.default, {
                        direction: E.default.Directions.RIGHT,
                        className: N.guildArrow
                    })]
                }) : null
            }

            function I(e) {
                let {
                    onSelectGuild: t
                } = e, l = (0, u.useStateFromStores)([m.default], () => m.default.getGuildFolders());
                return (0, a.jsx)(g.default, {
                    title: _.default.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
                    scrollerClassName: s(N.guildScroller, h.marginBottom),
                    children: i.flatMap(l, e => {
                        let {
                            guildIds: l
                        } = e;
                        return l.map(e => (0, a.jsx)(p, {
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
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
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
                    selected: n = !1
                } = e, m = (0, i.default)(t), S = null;
                null != l && l.length > 0 && (S = (0, a.jsx)(o.default, {
                    guildId: t.guild_id,
                    className: f.voiceUserList,
                    users: l,
                    renderUser: e => {
                        if (null == e) return null;
                        let l = d.default.getName(t.guild_id, t.id, e),
                            n = e.getAvatarURL(t.guild_id, 24);
                        return (0, a.jsx)(r.TooltipContainer, {
                            text: l,
                            children: (0, a.jsx)("img", {
                                src: null != n ? n : void 0,
                                "aria-label": e.username,
                                alt: "",
                                className: f.avatar
                            })
                        })
                    },
                    renderMoreUsers: e => {
                        let n = l.slice(4),
                            s = function(e, t) {
                                let l = t.id,
                                    a = t.guild_id;
                                return e.length <= 1 ? null : 2 === e.length ? c.default.Messages.GO_LIVE_MODAL_OVERFLOW_TWO_USERS.format({
                                    nickname0: d.default.getName(a, l, e[0]),
                                    nickname1: d.default.getName(a, l, e[1])
                                }) : 3 === e.length ? c.default.Messages.GO_LIVE_MODAL_OVERFLOW_THREE_USERS.format({
                                    nickname0: d.default.getName(a, l, e[0]),
                                    nickname1: d.default.getName(a, l, e[1]),
                                    nickname2: d.default.getName(a, l, e[2])
                                }) : c.default.Messages.GO_LIVE_MODAL_OVERFLOW_FOUR_OR_MORE_USERS.format({
                                    nickname0: d.default.getName(a, l, e[0]),
                                    nickname1: d.default.getName(a, l, e[1]),
                                    remainingCount: e.length - 2
                                })
                            }(n, t);
                        return (0, a.jsx)("div", {
                            children: (0, a.jsx)(r.TooltipContainer, {
                                text: s,
                                children: (0, a.jsx)("div", {
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
                return (0, a.jsxs)("div", {
                    className: s(f.channelInfo, {
                        [f.selected]: n
                    }),
                    children: [(0, a.jsx)(E, {
                        className: f.channelIcon
                    }), (0, a.jsx)("div", {
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
                    return s
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("58893");

            function s(e) {
                let {
                    children: t
                } = e;
                return (0, a.jsx)("div", {
                    className: n.card,
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
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                r = l.n(s),
                i = l("77078"),
                u = l("321443"),
                o = l("770420"),
                d = l("348004");

            function c(e) {
                let {
                    title: t,
                    scrollerClassName: l,
                    scrollerInnerClassName: s,
                    children: c
                } = e, f = n.useRef(null), [m, S] = n.useState(!1), [E, C] = n.useState(!1), g = n.useCallback(() => {
                    let {
                        current: e
                    } = f;
                    null != e && (S(!e.isScrolledToTop()), C(!e.isScrolledToBottom()))
                }, []);
                return n.useLayoutEffect(() => g(), []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: r(d.title, d.scrollWrapper),
                        children: [(0, a.jsx)(i.FormTitle, {
                            className: o.formItemTitle,
                            children: t
                        }), (0, a.jsx)(u.default, {
                            separator: m
                        })]
                    }), (0, a.jsx)("div", {
                        className: l,
                        children: (0, a.jsx)(i.AdvancedScroller, {
                            ref: f,
                            className: r(d.scrollerInner, s, {
                                [d.bottomSeparator]: E
                            }),
                            onScroll: g,
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
                    return j
                }
            }), l("222007"), l("311790"), l("477657"), l("811875"), l("90301"), l("652153"), l("28797"), l("817884"), l("597349"), l("667536"), l("690341"), l("492311"), l("101997"), l("424973");
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                r = l.n(s),
                i = l("723251"),
                u = l("771281"),
                o = l("351720"),
                d = l("862337"),
                c = l("77078"),
                f = l("823411"),
                m = l("42887"),
                S = l("568307"),
                E = l("703370"),
                C = l("145131"),
                g = l("162933"),
                _ = l("773336"),
                h = l("301834"),
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
                    a = await l,
                    n = await t,
                    s = n.filter(e => e.id.startsWith(u.DesktopSources.SCREEN)),
                    r = function(e, t) {
                        let l = {};
                        return t.forEach(e => {
                            l[e.id] = e
                        }), e.forEach(e => {
                            l[e.id] = e
                        }), Object.values(l).sort((e, t) => O(t) - O(e))
                    }(n.filter(e => e.id.startsWith(u.DesktopSources.WINDOW)), a),
                    d = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"],
                    c = Object.entries(e).filter(e => {
                        let [t, l] = e;
                        return !l.disabled
                    }).map((e, t) => {
                        let [l, a] = e, n = d[t % d.length], s = Uint8Array.from(atob(n), e => e.charCodeAt(0)), r = (0, i.thumbHashToDataURL)(s);
                        return {
                            id: "camera:" + a.id,
                            name: a.name,
                            url: r
                        }
                    });
                return {
                    windowSources: r,
                    screenSources: s,
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
                            a = e.name,
                            n = t.icon;
                        return null != l && null != a && null != n ? {
                            id: "window:".concat(l),
                            name: a,
                            url: "data:image/bmp;base64,".concat(n)
                        } : null
                    }));
                return t.filter(e => null !== e)
            }

            function O(e) {
                let t = (0, _.isWindows)() ? (0, p.default)(S.default, E.default) : null,
                    l = S.default.getRunningGames();
                return null != t && (0, N.default)(e.id, t.windowHandle) ? 2 : null != l.find(t => (0, N.default)(e.id, t.windowHandle)) ? 1 : 0
            }

            function j(e) {
                let {
                    selectedSource: t,
                    onChangeSelectedSource: l
                } = e, {
                    enableGoLiveCaptureCard: s
                } = h.default.useExperiment({
                    location: "GoLive_Source_Select"
                }), i = m.default.supports(A.Features.GO_LIVE_HARDWARE), [o, f] = n.useState(null), [S, E] = n.useState(null), [_, N] = n.useState(null), p = null != _ && _.length > 0, [L, O] = n.useState(u.DesktopSources.WINDOW), [j, M] = n.useState(!1), D = n.useRef(null), P = n.useRef(new d.Interval);
                n.useEffect(() => {
                    let e = P.current;
                    return T().then(e => {
                        let {
                            screenSources: t,
                            windowSources: l,
                            cameraSources: a
                        } = e;
                        f(t), E(l), N(a)
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
                let b = n.useCallback(e => {
                        if (null !== e) {
                            var t;
                            D.current = e, M((t = !e.isScrolledToTop(), t))
                        }
                    }, []),
                    U = function(e) {
                        switch (e) {
                            case u.DesktopSources.WINDOW:
                                return S;
                            case u.DesktopSources.SCREEN:
                                return o;
                            case u.DesktopSources.CAMERA:
                                return _
                        }
                    }(L);
                if (null == U) return (0, a.jsx)(C.default, {
                    className: v.spinner,
                    justify: C.default.Justify.CENTER,
                    align: C.default.Align.CENTER,
                    children: (0, a.jsx)(c.Spinner, {})
                });
                let G = U.map(e => {
                    let {
                        id: n
                    } = e, s = (null == t ? void 0 : t.id) === n;
                    return (0, a.jsx)(c.Clickable, {
                        className: r(v.tile, {
                            [v.selected]: s
                        }),
                        onClick: () => l(e, null),
                        children: (0, a.jsx)(x.default, {
                            source: e,
                            selectedSource: t
                        }, e.id)
                    }, n)
                });

                function k() {
                    let e = D.current;
                    null != e && M(!e.isScrolledToTop())
                }
                return (0, a.jsxs)(n.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: v.segmentContainer,
                        children: [(0, a.jsx)(I.default, {
                            separator: j
                        }), (0, a.jsx)(c.SegmentedControl, {
                            options: function() {
                                let e = [{
                                    name: R.default.Messages.GO_LIVE_MODAL_APPLICATIONS,
                                    value: u.DesktopSources.WINDOW
                                }, {
                                    name: R.default.Messages.GO_LIVE_MODAL_SCREENS,
                                    value: u.DesktopSources.SCREEN
                                }];
                                return s && i && p && e.push({
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
                    }), L === u.DesktopSources.CAMERA ? (0, a.jsx)("div", {
                        className: v.sourceContainer,
                        children: (0, a.jsx)(c.AdvancedScroller, {
                            ref: b,
                            className: v.sourceScroller,
                            onScroll: k,
                            children: (0, a.jsx)(g.default, {
                                layout: g.default.Layout.WRAP,
                                columns: 2,
                                className: v.sourceContainer,
                                children: G
                            })
                        })
                    }) : (0, a.jsx)(c.AdvancedScroller, {
                        ref: b,
                        className: v.sourceScroller,
                        onScroll: k,
                        children: (0, a.jsx)(g.default, {
                            layout: g.default.Layout.WRAP,
                            columns: 2,
                            className: v.sourceContainer,
                            children: G
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
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
                r = l("77078"),
                i = l("145131"),
                u = l("45122");

            function o(e) {
                let {
                    source: t,
                    selectedSource: l
                } = e, {
                    id: n,
                    name: o,
                    url: d
                } = t, c = (null == l ? void 0 : l.id) === n;
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(i.default, {
                        direction: i.default.Direction.VERTICAL,
                        justify: i.default.Justify.CENTER,
                        align: i.default.Align.CENTER,
                        children: [(0, a.jsx)(i.default, {
                            justify: i.default.Justify.CENTER,
                            align: i.default.Align.CENTER,
                            children: (0, a.jsx)("div", {
                                style: {
                                    backgroundImage: "url(".concat(d, ")")
                                },
                                className: s(u.sourceThumbnail, {
                                    [u.selected]: c
                                })
                            })
                        }), (0, a.jsx)(r.Text, {
                            className: s(u.sourceName, {
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
            }), l("222007");
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
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
                C = l("140848"),
                g = l("145131"),
                _ = l("216422"),
                h = l("719923"),
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
                    onClose: n
                } = e;
                (0, o.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("754534").then(l.bind(l, "754534"));
                    return l => (0, a.jsx)(e, {
                        ...l,
                        onCloseParent: n,
                        analyticsSource: t
                    })
                })
            }

            function j() {
                return (0, a.jsxs)("div", {
                    className: T.toolTipTextContainer,
                    children: [(0, a.jsx)(_.default, {
                        className: s(T.premiumIcon, T.premiumIconColor)
                    }), (0, a.jsx)(o.Text, {
                        className: T.upsellText,
                        variant: "text-sm/medium",
                        children: R.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
                    })]
                })
            }

            function M(e) {
                let t, l, {
                        type: n,
                        selected: r,
                        needsPremium: i,
                        analyticsLocation: u,
                        onClick: d,
                        onClose: c
                    } = e,
                    {
                        value: f,
                        label: m
                    } = n;
                return i ? (t = (0, a.jsx)(o.TooltipContainer, {
                    tooltipClassName: T.tooltip,
                    spacing: 12,
                    "aria-label": R.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
                    text: (0, a.jsx)(j, {}),
                    children: (0, a.jsx)(g.default, {
                        align: g.default.Align.CENTER,
                        children: (0, a.jsx)(o.Text, {
                            variant: "text-xs/bold",
                            className: T.selectorNitroText,
                            children: m
                        })
                    })
                }), l = () => O({
                    analyticsLocation: u,
                    onClose: c
                })) : (t = (0, a.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    className: r ? T.selectorTextSelected : T.selectorText,
                    children: m
                }), l = () => d(f)), {
                    content: t,
                    className: s(r ? T.selectorButtonSelected : T.selectorButton, {
                        [T.selectorButtonPremiumRequired]: i
                    }),
                    onClick: l
                }
            }

            function D(e) {
                let {
                    onClose: t,
                    selectedPreset: l,
                    selectedResolution: n,
                    selectedFPS: s,
                    onResolutionChange: r,
                    onFPSChange: _,
                    onPresetChange: j,
                    guildId: D,
                    captureDeviceSelected: P
                } = e, b = (0, u.useStateFromStores)([E.default], () => {
                    let e = E.default.getCurrentUser();
                    return i(null != e, "StreamSettings: user cannot be undefined"), e
                }), U = h.default.isPremiumExactly(b, A.PremiumTypes.TIER_0), G = h.default.isPremium(b), k = (0, u.useStateFromStores)([S.default], () => {
                    var e;
                    return null === (e = S.default.getGuild(D)) || void 0 === e ? void 0 : e.premiumTier
                }), {
                    location: y
                } = (0, c.useAnalyticsContext)(), {
                    enabled: F
                } = m.NitroBasicHDStreamingUpsellExperiment.useExperiment({
                    location: "a87c74_1"
                }, {
                    autoTrackExposure: U,
                    disable: !U
                }), w = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
                    autoTrackExposure: !1
                }), B = (F || !G) && !w, V = P ? I.GoLiveDeviceResolutionButtons : I.ApplicationStreamResolutionButtons, H = {
                    ...y,
                    section: x.AnalyticsSections.STREAM_SETTINGS
                }, W = (0, a.jsx)(C.default, {
                    buttons: V.map(e => M({
                        type: e,
                        selected: e.value === n,
                        needsPremium: !(0, N.default)(l, e.value, s, b, k),
                        analyticsLocation: H,
                        onClick: () => r(e.value),
                        onClose: t
                    }))
                }), z = (0, a.jsx)(C.default, {
                    buttons: I.ApplicationStreamFPSButtons.map(e => M({
                        type: e,
                        selected: e.value === s,
                        needsPremium: !(0, N.default)(l, n, e.value, b, k),
                        analyticsLocation: H,
                        onClick: () => _(e.value),
                        onClose: t
                    }))
                }), K = [{
                    value: I.ApplicationStreamPresets.PRESET_VIDEO,
                    label: R.default.Messages.STREAM_PRESET_VIDEO
                }, ...P ? [] : [{
                    value: I.ApplicationStreamPresets.PRESET_DOCUMENTS,
                    label: R.default.Messages.STREAM_PRESET_DOCUMENTS
                }], {
                    value: I.ApplicationStreamPresets.PRESET_CUSTOM,
                    label: R.default.Messages.STREAM_PRESET_CUSTOM
                }], Y = l === I.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(g.default, {
                        children: (0, a.jsx)(o.FormItem, {
                            title: R.default.Messages.STREAM_RESOLUTION,
                            titleClassName: v.formItemTitleSlim,
                            className: T.documentModeGroup,
                            children: (0, a.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                children: R.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
                                    fps: s
                                })
                            })
                        })
                    }), B ? (0, a.jsx)(p.default, {
                        message: R.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                        onClose: t,
                        openStreamUpsellModal: O
                    }) : null]
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(g.default, {
                        children: [(0, a.jsx)(o.FormItem, {
                            title: R.default.Messages.STREAM_RESOLUTION,
                            className: T.settingsGroup,
                            titleClassName: v.formItemTitleSlim,
                            children: W
                        }), (0, a.jsx)(o.FormItem, {
                            title: R.default.Messages.SCREENSHARE_FRAME_RATE,
                            className: T.settingsGroup,
                            titleClassName: v.formItemTitleSlim,
                            children: z
                        })]
                    }), B ? (0, a.jsx)(p.default, {
                        onClose: t,
                        openStreamUpsellModal: O
                    }) : null]
                });
                return (0, a.jsx)(d.default, {
                    ...H,
                    children: (0, a.jsx)(o.FormItem, {
                        title: R.default.Messages.STREAM_QUALITY,
                        titleClassName: v.formItemTitle,
                        className: v.modalContent,
                        children: (0, a.jsxs)("div", {
                            className: T.qualitySettingsContainer,
                            children: [(0, a.jsx)(o.SingleSelect, {
                                value: l,
                                className: L.marginTop8,
                                options: K,
                                onChange: e => j(e)
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
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
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
                    openStreamUpsellModal: n
                } = e, E = d.default.useExperiment({
                    location: "371fea_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    analyticsLocations: C
                } = (0, i.default)(), g = {
                    section: c.AnalyticsSections.STREAM_SETTINGS,
                    object: c.AnalyticsObjects.PREMIUM_UPSELL_BANNER,
                    objectType: c.AnalyticsObjectTypes.BUY
                }, _ = () => (d.default.trackExposure({
                    location: "371fea_2"
                }), E.enabled) ? (0, u.default)({
                    initialPlanId: null,
                    subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
                    analyticsLocations: C,
                    analyticsObject: g
                }) : n({
                    analyticsLocation: g,
                    onClose: l
                });
                return (0, a.jsxs)(r.Clickable, {
                    onClick: () => {
                        _()
                    },
                    className: s(S.upsellBanner, S.gradientBackground),
                    children: [(0, a.jsxs)("div", {
                        className: S.iconTextContainer,
                        children: [(0, a.jsx)(o.default, {
                            className: S.iconColor
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            className: S.upsellText,
                            children: null != t ? t : m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER
                        })]
                    }), (0, a.jsx)(r.Text, {
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
                    return n
                }
            }), l("222007");
            var a = l("42887");

            function n() {
                let e = a.default.getVideoDevices(),
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
                    return n
                }
            });
            var a = l("756898");

            function n(e, t, l) {
                return null == t ? e : l.find(e => (0, a.default)(t.id, e.windowHandle))
            }
        },
        506317: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                NitroBasicHDStreamingUpsellExperiment: function() {
                    return n
                }
            });
            var a = l("862205");
            let n = (0, a.createExperiment)({
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
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
                r = l("77078"),
                i = l("108037");
            let u = e => {
                let {
                    data: t,
                    disabled: l
                } = e, {
                    content: n,
                    className: u,
                    onClick: o,
                    disabled: d
                } = t;
                return (0, a.jsx)(r.FocusRing, {
                    children: (0, a.jsx)("button", {
                        type: "button",
                        className: s(i.item, u),
                        onClick: o,
                        disabled: l || d,
                        children: n
                    })
                })
            };
            var o = e => {
                let {
                    buttons: t,
                    disabled: l,
                    className: n
                } = e;
                return (0, a.jsx)("div", {
                    role: "group",
                    className: s(i.group, n),
                    children: t.map((e, t) => (0, a.jsx)(u, {
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
            var a, n, s = l("37983"),
                r = l("884691"),
                i = l("414456"),
                u = l.n(i),
                o = l("145131"),
                d = l("773712");
            (a = n || (n = {})).WRAP = "wrap", a.STACK = "stack";
            class c extends r.PureComponent {
                renderChildren() {
                    let e;
                    let {
                        children: t,
                        layout: l,
                        columns: a
                    } = this.props;
                    switch (l) {
                        case "stack":
                            e = "100%";
                            break;
                        case "wrap":
                            e = "".concat(1 / a * 100, "%")
                    }
                    return t.map((t, l) => (0, s.jsx)(o.default.Child, {
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
                    return (0, s.jsx)(o.default, {
                        className: u(e, d.grid),
                        wrap: o.default.Wrap.WRAP,
                        children: this.renderChildren()
                    })
                }
            }
            c.Layout = n, c.defaultProps = {
                children: [],
                layout: "wrap",
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
            var a = l("37983");
            l("884691");
            var n = l("469563"),
                s = l("17137"),
                r = l("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: n = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: [(0, a.jsx)("path", {
                            className: s,
                            fill: n,
                            d: "M22 7.002V5C22 3.898 21.104 3 20 3H4C2.897 3 2 3.898 2 5V7.002H22ZM8 4C8.553 4 9 4.448 9 5C9 5.553 8.553 6 8 6C7.447 6 7 5.553 7 5C7 4.448 7.447 4 8 4ZM5 4C5.553 4 6 4.448 6 5C6 5.553 5.553 6 5 6C4.447 6 4 5.553 4 5C4 4.448 4.447 4 5 4Z"
                        }), (0, a.jsx)("path", {
                            fill: n,
                            d: "M2 8.00201V19C2 20.103 2.897 21 4 21H20C21.104 21 22 20.103 22 19V8.00201H2Z"
                        })]
                    })
                }, s.BrowserIcon)
        },
        351720: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            }), l("424973"), l("222007");
            var a = l("627445"),
                n = l.n(a),
                s = l("773179"),
                r = l.n(s),
                i = l("353927");

            function u(e, t, l) {
                let a = window.DiscordNative;
                n(null != a, "Can't get desktop sources outside of native app"), t = null != t ? t : [i.DesktopSources.WINDOW, i.DesktopSources.SCREEN], l = null != l ? l : {
                    width: 150,
                    height: 150
                };
                let s = [];
                return t.includes(i.DesktopSources.SCREEN) && e.supports(i.Features.SCREEN_PREVIEWS) && (s.push(e.getScreenPreviews(l.width, l.height)), t = t.filter(e => e !== i.DesktopSources.SCREEN)), t.includes(i.DesktopSources.WINDOW) && e.supports(i.Features.WINDOW_PREVIEWS) && (s.push(e.getWindowPreviews(l.width, l.height)), t = t.filter(e => e !== i.DesktopSources.WINDOW)), 0 !== t.length && s.push(a.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: l
                })), Promise.all(s).then(e => r.flatten(e))
            }
        }
    }
]);