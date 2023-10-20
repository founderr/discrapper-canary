(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [58820], {
        191505: (e, s, n) => {
            e.exports = n.p + "fd394e078cb4a49bb746cd0badd68702.webm"
        },
        208535: (e, s, n) => {
            e.exports = n.p + "85680f1b119d34559007f0d54abc8947.webm"
        },
        745920: (e, s, n) => {
            e.exports = n.p + "2d889bf9114df188325d15f9e517c325.mov"
        },
        161693: (e, s, n) => {
            e.exports = n.p + "6d5b64b094944af6d52d895c8c2b8a59.mp4"
        },
        28743: (e, s, n) => {
            e.exports = n.p + "dff87c953f43b561d71fbcfe8a93a79a.png"
        },
        106632: (e, s, n) => {
            e.exports = n.p + "3b0d96ed8113994f3d139088726cfecd.webm"
        },
        894919: (e, s, n) => {
            e.exports = n.p + "d44a33e33f751afe9a0e5e42e2156d8f.mov"
        },
        858739: (e, s, n) => {
            e.exports = n.p + "90c2f45413660019fa25f4f9f40ecb5d.mp4"
        },
        172129: (e, s, n) => {
            e.exports = n.p + "61c5375ee8d8dbf35c109b06044394d8.png"
        },
        243874: (e, s, n) => {
            e.exports = n.p + "1eae6aab9a6b4e7da646db415479560b.webm"
        },
        193782: (e, s, n) => {
            "use strict";
            n.d(s, {
                Z: () => d
            });
            var a = (0, n(260561).B)({
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
            });
            var t = n(473708),
                r = n(191505),
                i = n.n(r),
                l = n(208535),
                o = n.n(l),
                c = 16976484e5,
                u = 16990308e5;
            const d = {
                ringtone: {
                    name: "call_ringing_halloween",
                    filename: "call_ringing_halloween.mp3"
                },
                soundSettingsLabel: function() {
                    return t.Z.Messages.SOUND_INCOMING_RING_HALLOWEEN + " 🎃"
                },
                subscribeToEligibility: function(e) {
                    return a.subscribe({
                        location: "subscribe"
                    }, e)
                },
                isEligible: function() {
                    return a.getCurrentConfig({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled
                },
                useIsEligible: function() {
                    return a.useExperiment({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled
                },
                getAppSpinnerSources: function() {
                    var e = Date.now();
                    if (!(e < c || e > u)) return {
                        webmDark: i(),
                        webmLight: o()
                    }
                },
                getLoadingTips: function() {
                    var e = Date.now();
                    if (!(e < c || e > u)) return "en-US" === t.Z.getLocale() || e >= 16982532e5 ? [t.Z.Messages.HALLOWEEN_LOADING_TEXT_1, t.Z.Messages.HALLOWEEN_LOADING_TEXT_2, t.Z.Messages.HALLOWEEN_LOADING_TEXT_3, t.Z.Messages.HALLOWEEN_LOADING_TEXT_4, t.Z.Messages.HALLOWEEN_LOADING_TEXT_5, t.Z.Messages.HALLOWEEN_LOADING_TEXT_6, t.Z.Messages.HALLOWEEN_LOADING_TEXT_7, t.Z.Messages.HALLOWEEN_LOADING_TEXT_8, t.Z.Messages.HALLOWEEN_LOADING_TEXT_9] : void 0
                }
            }
        },
        558820: (e, s, n) => {
            "use strict";
            n.d(s, {
                DK: () => _,
                Dx: () => L,
                EJ: () => R,
                Ee: () => j,
                Hh: () => w,
                II: () => y,
                MC: () => I,
                Vj: () => A,
                ZP: () => B,
                gO: () => S,
                i_: () => D,
                jQ: () => Z,
                qE: () => O,
                v6: () => C,
                zx: () => T
            });
            var a = n(785893),
                t = (n(667294), n(294184)),
                r = n.n(t),
                i = n(70418),
                l = n(621647),
                o = n(107364),
                c = n(124251),
                u = n(443812),
                d = n(408481),
                m = n(646161),
                p = n(348592),
                f = n(463473),
                v = n(2590),
                N = n(473708),
                b = n(385994),
                x = n.n(b);

            function g(e, s, n) {
                s in e ? Object.defineProperty(e, s, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[s] = n;
                return e
            }

            function h(e, s) {
                if (null == e) return {};
                var n, a, t = function(e, s) {
                    if (null == e) return {};
                    var n, a, t = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) {
                        n = r[a];
                        s.indexOf(n) >= 0 || (t[n] = e[n])
                    }
                    return t
                }(e, s);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < r.length; a++) {
                        n = r[a];
                        s.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n])
                    }
                }
                return t
            }
            var E = i.Avatar;
            null == E && (E = function() {
                return null
            });
            var L = function(e) {
                    var s = e.className,
                        n = e.id,
                        t = e.children;
                    return (0, a.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: r()(x().title, s),
                        id: n,
                        children: t
                    })
                },
                _ = function(e) {
                    var s = e.className,
                        n = e.children;
                    return (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: s,
                        children: n
                    })
                },
                j = function(e) {
                    var s = e.className,
                        n = e.src;
                    return (0, a.jsx)("img", {
                        alt: "",
                        src: n,
                        className: r()(x().image, s)
                    })
                },
                T = function(e) {
                    var s, n = e.className,
                        t = h(e, ["className"]),
                        l = t.look === i.Button.Looks.LINK;
                    return (0, a.jsx)(i.Button, function(e) {
                        for (var s = 1; s < arguments.length; s++) {
                            var n = null != arguments[s] ? arguments[s] : {},
                                a = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            a.forEach((function(s) {
                                g(e, s, n[s])
                            }))
                        }
                        return e
                    }({
                        size: l ? i.Button.Sizes.MIN : i.Button.Sizes.LARGE,
                        fullWidth: !l,
                        className: r()(n, (s = {}, g(s, x().button, !l), g(s, x().linkButton, l), s))
                    }, t))
                };
            T.Looks = i.Button.Looks;
            T.Colors = i.Button.Colors;
            T.Sizes = i.Button.Sizes;
            var O = function(e) {
                    var s = e.className,
                        n = e.src,
                        t = e.size;
                    return (0, a.jsx)(E, {
                        src: n,
                        size: t,
                        className: r()(x().inviteLargeIcon, s),
                        "aria-hidden": !0
                    })
                },
                A = function(e) {
                    var s = e.guild,
                        n = e.size,
                        t = e.animate,
                        r = void 0 !== t && t,
                        i = e.className;
                    return (0, a.jsx)(c.Z, {
                        active: !0,
                        guild: s,
                        size: n,
                        animate: r,
                        className: i
                    })
                };
            A.Sizes = c.Z.Sizes;
            var I = function(e) {
                var s = e.className,
                    n = e.channel,
                    t = e.size;
                return (0, a.jsx)(E, {
                    src: (0, l.x)(n),
                    size: t,
                    className: r()(x().inviteIcon, s),
                    "aria-hidden": !0
                })
            };
            I.Sizes = i.AvatarSizes;
            var y = function(e) {
                    var s = e.label,
                        n = e.error,
                        t = e.placeholder,
                        l = e.value,
                        o = e.className,
                        c = e.inputClassName,
                        d = e.setRef,
                        m = e.type,
                        p = void 0 === m ? "text" : m,
                        f = e.onChange,
                        v = e.autoComplete,
                        N = e.autoFocus,
                        b = e.maxLength,
                        h = e.spellCheck,
                        E = e.name,
                        L = e.description,
                        _ = e.required,
                        j = e.onFocus,
                        T = e.onBlur,
                        O = (0, u.Dt)();
                    return (0, a.jsxs)(i.FormItem, {
                        title: s,
                        error: n,
                        className: o,
                        required: _,
                        tag: "label",
                        htmlFor: O,
                        children: [(0, a.jsx)(i.TextInput, {
                            name: E,
                            type: p,
                            value: l,
                            inputRef: d,
                            placeholder: t,
                            inputClassName: r()(c, g({}, x().inputError, null != n)),
                            "aria-label": s,
                            onChange: f,
                            autoComplete: v,
                            autoFocus: N,
                            maxLength: b,
                            spellCheck: h,
                            id: O,
                            onFocus: j,
                            onBlur: T
                        }), null != L ? (0, a.jsx)(i.FormText, {
                            type: i.FormText.Types.DESCRIPTION,
                            className: x().description,
                            children: L
                        }) : null]
                    })
                },
                S = function(e) {
                    var s = e.className,
                        n = e.children;
                    return (0, a.jsx)("div", {
                        className: r()(x().block, s),
                        children: n
                    })
                },
                D = function(e) {
                    var s = e.className,
                        n = e.children,
                        t = e.isProminent;
                    return (0, a.jsx)(i.Text, {
                        variant: t ? "text-sm/normal" : "text-xs/normal",
                        className: r()(x().subText, s),
                        children: n
                    })
                },
                w = function(e) {
                    var s = e.className;
                    return (0, a.jsx)(o.Z, {
                        direction: o.Z.Direction.VERTICAL,
                        align: o.Z.Align.CENTER,
                        className: s,
                        children: (0, a.jsx)(d.Z, {
                            className: x().spinnerVideo
                        })
                    })
                },
                R = function(e) {
                    var s, n = e.online,
                        t = e.total,
                        l = e.className,
                        c = e.flat,
                        u = e.textClassName;
                    if (null == t) return null;
                    null != n && n > 0 && (s = (0, a.jsxs)("div", {
                        className: r()(x().pill, x().pillOnline, c && x().pillFlat),
                        children: [(0, a.jsx)("i", {
                            className: x().pillIconOnline
                        }), (0, a.jsx)(i.Text, {
                            tag: "span",
                            className: r()(x().pillMessage, u),
                            variant: "text-sm/normal",
                            children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: n
                            })
                        })]
                    }));
                    return (0, a.jsxs)(o.Z, {
                        justify: o.Z.Justify.CENTER,
                        className: l,
                        children: [s, (0, a.jsxs)("div", {
                            className: r()(x().pill, c && x().pillFlat),
                            children: [(0, a.jsx)("i", {
                                className: x().pillIconTotal
                            }), (0, a.jsx)(i.Text, {
                                tag: "span",
                                className: r()(x().pillMessage, u),
                                variant: "text-sm/normal",
                                children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                    count: t
                                })
                            })]
                        })]
                    })
                },
                Z = function(e) {
                    var s = e.user;
                    return null == s ? null : (0, a.jsxs)("div", {
                        className: x().joiningAs,
                        children: [(0, a.jsx)(i.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: N.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                        }), (0, a.jsx)(O, {
                            className: x().joiningAsAvatar,
                            src: s.getAvatarURL(void 0, 24),
                            size: i.AvatarSizes.SIZE_24,
                            "aria-label": s.username
                        }), (0, a.jsx)(i.Text, {
                            className: x().joiningAsUsername,
                            tag: "span",
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: s.username
                        })]
                    })
                },
                C = function(e) {
                    var s = e.className;
                    return (0, a.jsxs)(S, {
                        className: s,
                        children: [(0, a.jsx)(T, {
                            onClick: function() {
                                return window.open((0, m.t3)())
                            },
                            children: N.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                                platform: (0, m.DW)()
                            })
                        }), (0, a.jsx)(D, {
                            className: x().downloadButtonSubtext,
                            children: N.Z.Messages.INCOMPATIBLE_BROWSER.format({
                                supportedBrowserURL: p.Z.getArticleURL(v.BhN.SUPPORTED_BROWSERS)
                            })
                        })]
                    })
                };
            const B = function(e) {
                var s = e.className,
                    n = e.contentClassName,
                    t = e.tag,
                    i = void 0 === t ? "section" : t,
                    l = e.onSubmit,
                    o = e.children,
                    c = e.expanded,
                    u = void 0 !== c && c,
                    d = e.theme,
                    m = void 0 === d ? v.BRd.DARK : d,
                    p = e.style;
                return (0, a.jsxs)(i, {
                    onSubmit: l,
                    style: p,
                    className: r()(u ? x().authBoxExpanded : x().authBox, (0, f.Q)(m), s),
                    children: [(0, a.jsx)("div", {
                        className: x().discordLogo
                    }), (0, a.jsx)("div", {
                        className: r()(x().centeringWrapper, n),
                        children: o
                    })]
                })
            }
        },
        408481: (e, s, n) => {
            "use strict";
            n.d(s, {
                Z: () => R
            });
            var a, t = n(785893),
                r = n(667294),
                i = n(575945),
                l = n(70418),
                o = n(193782),
                c = n(245305),
                u = n(745920),
                d = n.n(u),
                m = n(894919),
                p = n.n(m),
                f = n(786170),
                v = n(2590),
                N = n(161693),
                b = n.n(N),
                x = n(28743),
                g = n.n(x),
                h = n(106632),
                E = n.n(h),
                L = n(858739),
                _ = n.n(L),
                j = n(172129),
                T = n.n(j),
                O = n(243874),
                A = n.n(O);

            function I(e, s, n) {
                s in e ? Object.defineProperty(e, s, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[s] = n;
                return e
            }

            function y(e) {
                var s, n = e.movDark,
                    a = void 0 === n ? d() : n,
                    r = e.movLight,
                    i = void 0 === r ? p() : r,
                    l = e.mp4Dark,
                    o = void 0 === l ? b() : l,
                    u = e.mp4Light,
                    m = void 0 === u ? _() : u,
                    f = e.pngDark,
                    N = void 0 === f ? g() : f,
                    x = e.pngLight,
                    h = void 0 === x ? T() : x,
                    L = e.webmDark,
                    j = void 0 === L ? E() : L,
                    O = e.webmLight,
                    y = void 0 === O ? A() : O,
                    S = (0, c.vu)(),
                    D = [(0, t.jsx)("source", {
                        src: o,
                        type: "video/mp4"
                    }, "mp4"), (0, t.jsx)("img", {
                        alt: "",
                        src: N
                    }, "png")],
                    w = [(0, t.jsx)("source", {
                        src: m,
                        type: "video/mp4"
                    }, "mp4"), (0, t.jsx)("img", {
                        alt: "",
                        src: h
                    }, "png")];
                if (S > 52 || -1 === S) {
                    D.unshift((0, t.jsx)("source", {
                        src: j,
                        type: "video/webm"
                    }, "webm"));
                    w.unshift((0, t.jsx)("source", {
                        src: y,
                        type: "video/webm"
                    }, "webm"))
                }
                if ((0, c.rO)()) {
                    D.unshift((0, t.jsx)("source", {
                        src: a,
                        type: "video/mp4"
                    }, "hevc"));
                    w.unshift((0, t.jsx)("source", {
                        src: i,
                        type: "video/mp4"
                    }, "hevc"))
                }
                return I(s = {}, v.BRd.DARK, D), I(s, v.BRd.LIGHT, w), s
            }
            var S = null === (a = o.Z.getAppSpinnerSources) || void 0 === a ? void 0 : a.call(o.Z),
                D = null != S ? y(S) : null,
                w = y({});
            const R = function(e) {
                var s = e.loop,
                    n = void 0 === s || s,
                    a = e.autoPlay,
                    o = void 0 === a || a,
                    c = e.setRef,
                    u = e.className,
                    d = e.onReady,
                    m = (0, l.useThemeContext)().theme,
                    p = r.useContext(l.AccessibilityPreferencesContext).reducedMotion,
                    N = w;
                null != D && (N = D);
                var b, x = null !== (b = N[(0, i.wj)(m) ? v.BRd.DARK : v.BRd.LIGHT]) && void 0 !== b ? b : N[v.BRd.DARK];
                return (0, t.jsx)(f.Z, {
                    ref: c,
                    onLoadedData: d,
                    className: u,
                    loop: !p.enabled && n,
                    autoPlay: !p.enabled && o,
                    playsInline: !0,
                    "data-testid": "app-spinner",
                    children: x
                }, m)
            }
        }
    }
]);