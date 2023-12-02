(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["18036"], {
        378913: function(e, t, s) {
            "use strict";
            e.exports = s.p + "906a38cbd45d6780304c.svg"
        },
        356002: function(e, t, s) {
            "use strict";
            e.exports = s.p + "682f1b679b5bdb117165.webm"
        },
        197492: function(e, t, s) {
            "use strict";
            e.exports = s.p + "87590a81cf78665e23ea.webm"
        },
        242777: function(e, t, s) {
            "use strict";
            e.exports = s.p + "27316f256e0a1fb24421.mov"
        },
        838623: function(e, t, s) {
            "use strict";
            e.exports = s.p + "9492f371ccf5db4f0156.mp4"
        },
        844389: function(e, t, s) {
            "use strict";
            e.exports = s.p + "35b6e69b80885d349202.png"
        },
        392518: function(e, t, s) {
            "use strict";
            e.exports = s.p + "b85e9e5e26daee13304b.webm"
        },
        336406: function(e, t, s) {
            "use strict";
            e.exports = s.p + "0375f4834ae07b9d5de9.mov"
        },
        414298: function(e, t, s) {
            "use strict";
            e.exports = s.p + "b9b0ab98fd3fcb65f4d5.mp4"
        },
        815143: function(e, t, s) {
            "use strict";
            e.exports = s.p + "b7fb33c633b7ad9732e5.png"
        },
        134072: function(e, t, s) {
            "use strict";
            e.exports = s.p + "988b1594e4843a08ef39.webm"
        },
        843456: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("414456"),
                l = s.n(a),
                r = s("77078"),
                i = s("476765"),
                o = s("124969"),
                u = s("800932"),
                c = s("434824"),
                d = s("782340"),
                m = s("106468");

            function p(e) {
                let {
                    transitionState: t,
                    onClose: s,
                    guildTemplate: a
                } = e, {
                    form: p,
                    preview: f,
                    handleSubmit: x
                } = (0, u.default)(a, !1), N = (0, i.useUID)();
                return (0, n.jsx)("div", {
                    children: (0, n.jsxs)(r.ModalRoot, {
                        size: r.ModalSize.DYNAMIC,
                        transitionState: t,
                        className: l(m.modalRoot),
                        "aria-labelledby": N,
                        children: [(0, n.jsxs)("div", {
                            className: m.modalContainer,
                            children: [(0, n.jsx)("div", {
                                className: l(m.modalSection, m.ctaSection),
                                children: (0, n.jsx)("div", {
                                    className: m.ctaContainer,
                                    children: (0, n.jsx)(c.default, {
                                        guildTemplate: a,
                                        headerId: N
                                    })
                                })
                            }), (0, n.jsx)("div", {
                                className: l(m.modalSection, m.formSection),
                                children: (0, n.jsxs)(r.Scroller, {
                                    className: m.formContainer,
                                    children: [(0, n.jsx)(o.Title, {
                                        className: m.header,
                                        children: d.default.Messages.GUILD_TEMPLATE_SETUP_DISCORD
                                    }), p, f]
                                })
                            })]
                        }), (0, n.jsxs)(r.ModalFooter, {
                            className: m.modalFooter,
                            children: [(0, n.jsx)(r.Button, {
                                color: r.Button.Colors.PRIMARY,
                                onClick: s,
                                children: d.default.Messages.CLOSE
                            }), (0, n.jsx)(r.Button, {
                                color: r.Button.Colors.GREEN,
                                onClick: async () => {
                                    let e = await x();
                                    null != e && s()
                                },
                                children: d.default.Messages.CREATE
                            })]
                        })]
                    })
                })
            }
        },
        11291: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useHalloween2023Enabled: function() {
                    return l
                },
                isHalloween2023Enabled: function() {
                    return r
                },
                subscribeToHalloweenExperiment: function() {
                    return i
                }
            });
            var n = s("862205");
            let a = (0, n.createExperiment)({
                    kind: "user",
                    id: "2023-10_halloween_2023",
                    label: "Halloween assets 2023",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Halloween assets enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = () => {
                    let {
                        enabled: e
                    } = a.useExperiment({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                r = () => {
                    let {
                        enabled: e
                    } = a.getCurrentConfig({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                i = e => a.subscribe({
                    location: "subscribe"
                }, e)
        },
        684581: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("11291"),
                a = s("782340"),
                l = s("356002"),
                r = s("197492");
            let i = {
                ringtone: {
                    name: "call_ringing_halloween",
                    filename: "call_ringing_halloween.mp3"
                },
                soundSettingsLabel: () => a.default.Messages.SOUND_INCOMING_RING_HALLOWEEN + " \uD83C\uDF83",
                subscribeToEligibility: n.subscribeToHalloweenExperiment,
                isEligible: n.isHalloween2023Enabled,
                useIsEligible: n.useHalloween2023Enabled,
                getAppSpinnerSources: () => {
                    let e = Date.now();
                    if (!(e < 16976484e5) && !(e > 16990308e5)) return {
                        webmDark: l,
                        webmLight: r
                    }
                },
                getLoadingTips: () => {
                    let e = Date.now();
                    if (!(e < 16976484e5) && !(e > 16990308e5)) return [a.default.Messages.HALLOWEEN_LOADING_TEXT_1, a.default.Messages.HALLOWEEN_LOADING_TEXT_2, a.default.Messages.HALLOWEEN_LOADING_TEXT_3, a.default.Messages.HALLOWEEN_LOADING_TEXT_4, a.default.Messages.HALLOWEEN_LOADING_TEXT_5, a.default.Messages.HALLOWEEN_LOADING_TEXT_6, a.default.Messages.HALLOWEEN_LOADING_TEXT_7, a.default.Messages.HALLOWEEN_LOADING_TEXT_8, a.default.Messages.HALLOWEEN_LOADING_TEXT_9]
                }
            };
            var o = i
        },
        124969: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Title: function() {
                    return g
                },
                SubTitle: function() {
                    return b
                },
                Image: function() {
                    return Image
                },
                Button: function() {
                    return E
                },
                Avatar: function() {
                    return _
                },
                GuildIcon: function() {
                    return L
                },
                ChannelIcon: function() {
                    return A
                },
                Input: function() {
                    return I
                },
                Block: function() {
                    return j
                },
                SubText: function() {
                    return v
                },
                AuthSpinner: function() {
                    return S
                },
                ActivityCount: function() {
                    return C
                },
                JoiningAs: function() {
                    return O
                },
                IncompatibleBrowser: function() {
                    return M
                },
                default: function() {
                    return R
                }
            }), s("834022");
            var n = s("37983");
            s("884691");
            var a = s("414456"),
                l = s.n(a),
                r = s("77078"),
                i = s("843962"),
                o = s("145131"),
                u = s("476263"),
                c = s("476765"),
                d = s("637888"),
                m = s("98013"),
                p = s("701909"),
                f = s("439932"),
                x = s("49111"),
                N = s("782340"),
                T = s("79902");
            let h = r.Avatar;
            null == h && (h = () => null);
            let g = e => {
                    let {
                        className: t,
                        id: s,
                        children: a
                    } = e;
                    return (0, n.jsx)(r.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: l(T.title, t),
                        id: s,
                        children: a
                    })
                },
                b = e => {
                    let {
                        className: t,
                        children: s
                    } = e;
                    return (0, n.jsx)(r.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: t,
                        children: s
                    })
                },
                Image = e => {
                    let {
                        className: t,
                        src: s
                    } = e;
                    return (0, n.jsx)("img", {
                        alt: "",
                        src: s,
                        className: l(T.image, t)
                    })
                },
                E = e => {
                    let {
                        className: t,
                        ...s
                    } = e, a = s.look === r.Button.Looks.LINK;
                    return (0, n.jsx)(r.Button, {
                        size: a ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
                        fullWidth: !a,
                        className: l(t, {
                            [T.button]: !a,
                            [T.linkButton]: a
                        }),
                        ...s
                    })
                };
            E.Looks = r.Button.Looks, E.Colors = r.Button.Colors, E.Sizes = r.Button.Sizes;
            let _ = e => {
                    let {
                        className: t,
                        src: s,
                        size: a
                    } = e;
                    return (0, n.jsx)(h, {
                        src: s,
                        size: a,
                        className: l(T.inviteLargeIcon, t),
                        "aria-hidden": !0
                    })
                },
                L = e => {
                    let {
                        guild: t,
                        size: s,
                        animate: a = !1,
                        className: l
                    } = e;
                    return (0, n.jsx)(u.default, {
                        active: !0,
                        guild: t,
                        size: s,
                        animate: a,
                        className: l
                    })
                };
            L.Sizes = u.default.Sizes;
            let A = e => {
                let {
                    className: t,
                    channel: s,
                    size: a
                } = e;
                return (0, n.jsx)(h, {
                    src: (0, i.getChannelIconURL)(s),
                    size: a,
                    className: l(T.inviteIcon, t),
                    "aria-hidden": !0
                })
            };
            A.Sizes = r.AvatarSizes;
            let I = e => {
                    let {
                        label: t,
                        error: s,
                        placeholder: a,
                        value: i,
                        className: o,
                        inputClassName: u,
                        setRef: d,
                        type: m = "text",
                        onChange: p,
                        autoComplete: f,
                        autoFocus: x,
                        maxLength: N,
                        spellCheck: h,
                        name: g,
                        description: b,
                        required: E,
                        onFocus: _,
                        onBlur: L
                    } = e, A = (0, c.useUID)();
                    return (0, n.jsxs)(r.FormItem, {
                        title: t,
                        error: s,
                        className: o,
                        required: E,
                        tag: "label",
                        htmlFor: A,
                        children: [(0, n.jsx)(r.TextInput, {
                            name: g,
                            type: m,
                            value: i,
                            inputRef: d,
                            placeholder: a,
                            inputClassName: l(u, {
                                [T.inputError]: null != s
                            }),
                            "aria-label": t,
                            onChange: p,
                            autoComplete: f,
                            autoFocus: x,
                            maxLength: N,
                            spellCheck: h,
                            id: A,
                            onFocus: _,
                            onBlur: L
                        }), null != b ? (0, n.jsx)(r.FormText, {
                            type: r.FormText.Types.DESCRIPTION,
                            className: T.description,
                            children: b
                        }) : null]
                    })
                },
                j = e => {
                    let {
                        className: t,
                        children: s
                    } = e;
                    return (0, n.jsx)("div", {
                        className: l(T.block, t),
                        children: s
                    })
                },
                v = e => {
                    let {
                        className: t,
                        children: s,
                        isProminent: a
                    } = e;
                    return (0, n.jsx)(r.Text, {
                        variant: a ? "text-sm/normal" : "text-xs/normal",
                        className: l(T.subText, t),
                        children: s
                    })
                },
                S = e => {
                    let {
                        className: t
                    } = e;
                    return (0, n.jsx)(o.default, {
                        direction: o.default.Direction.VERTICAL,
                        align: o.default.Align.CENTER,
                        className: t,
                        children: (0, n.jsx)(d.default, {
                            className: T.spinnerVideo
                        })
                    })
                },
                C = e => {
                    let t, {
                        online: s,
                        total: a,
                        className: i,
                        flat: u,
                        textClassName: c
                    } = e;
                    return null == a ? null : (null != s && s > 0 && (t = (0, n.jsxs)("div", {
                        className: l(T.pill, T.pillOnline, u && T.pillFlat),
                        children: [(0, n.jsx)("i", {
                            className: T.pillIconOnline
                        }), (0, n.jsx)(r.Text, {
                            tag: "span",
                            className: l(T.pillMessage, c),
                            variant: "text-sm/normal",
                            children: N.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: s
                            })
                        })]
                    })), (0, n.jsxs)(o.default, {
                        justify: o.default.Justify.CENTER,
                        className: i,
                        children: [t, (0, n.jsxs)("div", {
                            className: l(T.pill, u && T.pillFlat),
                            children: [(0, n.jsx)("i", {
                                className: T.pillIconTotal
                            }), (0, n.jsx)(r.Text, {
                                tag: "span",
                                className: l(T.pillMessage, c),
                                variant: "text-sm/normal",
                                children: N.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                    count: a
                                })
                            })]
                        })]
                    }))
                },
                O = e => {
                    let {
                        user: t
                    } = e;
                    return null == t ? null : (0, n.jsxs)("div", {
                        className: T.joiningAs,
                        children: [(0, n.jsx)(r.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: N.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                        }), (0, n.jsx)(_, {
                            className: T.joiningAsAvatar,
                            src: t.getAvatarURL(void 0, 24),
                            size: r.AvatarSizes.SIZE_24,
                            "aria-label": t.username
                        }), (0, n.jsx)(r.Text, {
                            className: T.joiningAsUsername,
                            tag: "span",
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: t.username
                        })]
                    })
                },
                M = e => {
                    let {
                        className: t
                    } = e;
                    return (0, n.jsxs)(j, {
                        className: t,
                        children: [(0, n.jsx)(E, {
                            onClick: () => window.open((0, m.getCurrentPlatformDownloadURL)()),
                            children: N.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                                platform: (0, m.getPlatformReadableName)()
                            })
                        }), (0, n.jsx)(v, {
                            className: T.downloadButtonSubtext,
                            children: N.default.Messages.INCOMPATIBLE_BROWSER.format({
                                supportedBrowserURL: p.default.getArticleURL(x.HelpdeskArticles.SUPPORTED_BROWSERS)
                            })
                        })]
                    })
                };
            var R = e => {
                let {
                    className: t,
                    contentClassName: s,
                    tag: a = "section",
                    onSubmit: r,
                    children: i,
                    expanded: o = !1,
                    theme: u = x.ThemeTypes.DARK,
                    style: c
                } = e;
                return (0, n.jsxs)(a, {
                    "data-theme": u,
                    onSubmit: r,
                    style: c,
                    className: l(o ? T.authBoxExpanded : T.authBox, (0, f.getThemeClass)(u), t),
                    children: [(0, n.jsx)("div", {
                        className: T.discordLogo
                    }), (0, n.jsx)("div", {
                        className: l(T.centeringWrapper, s),
                        children: i
                    })]
                })
            }
        },
        637888: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return A
                }
            }), s("843762");
            var n, a = s("37983"),
                l = s("884691"),
                r = s("819855"),
                i = s("77078"),
                o = s("684581"),
                u = s("560528"),
                c = s("242777"),
                d = s("336406"),
                m = s("58608"),
                p = s("49111"),
                f = s("838623"),
                x = s("844389"),
                N = s("392518"),
                T = s("414298"),
                h = s("815143"),
                g = s("134072");

            function b(e) {
                let {
                    movDark: t = c,
                    movLight: s = d,
                    mp4Dark: n = f,
                    mp4Light: l = T,
                    pngDark: r = x,
                    pngLight: i = h,
                    webmDark: o = N,
                    webmLight: m = g
                } = e, b = (0, u.getChromeVersion)(), E = [(0, a.jsx)("source", {
                    src: n,
                    type: "video/mp4"
                }, "mp4"), (0, a.jsx)("img", {
                    alt: "",
                    src: r
                }, "png")], _ = [(0, a.jsx)("source", {
                    src: l,
                    type: "video/mp4"
                }, "mp4"), (0, a.jsx)("img", {
                    alt: "",
                    src: i
                }, "png")];
                return (b > 52 || -1 === b) && (E.unshift((0, a.jsx)("source", {
                    src: o,
                    type: "video/webm"
                }, "webm")), _.unshift((0, a.jsx)("source", {
                    src: m,
                    type: "video/webm"
                }, "webm"))), (0, u.supportsHEVCAlpha)() && (E.unshift((0, a.jsx)("source", {
                    src: t,
                    type: "video/mp4"
                }, "hevc")), _.unshift((0, a.jsx)("source", {
                    src: s,
                    type: "video/mp4"
                }, "hevc"))), {
                    [p.ThemeTypes.DARK]: E,
                    [p.ThemeTypes.LIGHT]: _
                }
            }
            let E = null === (n = o.default.getAppSpinnerSources) || void 0 === n ? void 0 : n.call(o.default),
                _ = null != E ? b(E) : null,
                L = b({});
            var A = e => {
                var t;
                let {
                    loop: s = !0,
                    autoPlay: n = !0,
                    setRef: o,
                    className: u,
                    onReady: c
                } = e, {
                    theme: d
                } = (0, i.useThemeContext)(), {
                    reducedMotion: f
                } = l.useContext(i.AccessibilityPreferencesContext), x = L;
                null != _ && (x = _);
                let N = (0, r.isThemeDark)(d) ? p.ThemeTypes.DARK : p.ThemeTypes.LIGHT,
                    T = null !== (t = x[N]) && void 0 !== t ? t : x[p.ThemeTypes.DARK];
                return (0, a.jsx)(m.default, {
                    ref: o,
                    onLoadedData: c,
                    className: u,
                    loop: !f.enabled && s,
                    autoPlay: !f.enabled && n,
                    playsInline: !0,
                    "data-testid": "app-spinner",
                    children: T
                }, d)
            }
        }
    }
]);