(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [58820], {
        191505: (e, s, a) => {
            e.exports = a.p + "fd394e078cb4a49bb746cd0badd68702.webm"
        },
        208535: (e, s, a) => {
            e.exports = a.p + "85680f1b119d34559007f0d54abc8947.webm"
        },
        745920: (e, s, a) => {
            e.exports = a.p + "2d889bf9114df188325d15f9e517c325.mov"
        },
        161693: (e, s, a) => {
            e.exports = a.p + "6d5b64b094944af6d52d895c8c2b8a59.mp4"
        },
        28743: (e, s, a) => {
            e.exports = a.p + "dff87c953f43b561d71fbcfe8a93a79a.png"
        },
        106632: (e, s, a) => {
            e.exports = a.p + "3b0d96ed8113994f3d139088726cfecd.webm"
        },
        894919: (e, s, a) => {
            e.exports = a.p + "d44a33e33f751afe9a0e5e42e2156d8f.mov"
        },
        858739: (e, s, a) => {
            e.exports = a.p + "90c2f45413660019fa25f4f9f40ecb5d.mp4"
        },
        172129: (e, s, a) => {
            e.exports = a.p + "61c5375ee8d8dbf35c109b06044394d8.png"
        },
        243874: (e, s, a) => {
            e.exports = a.p + "1eae6aab9a6b4e7da646db415479560b.webm"
        },
        193782: (e, s, a) => {
            "use strict";
            a.d(s, {
                Z: () => f
            });
            var n = a(730381),
                t = a.n(n),
                r = (0, a(260561).B)({
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
            var i = a(473708),
                l = a(191505),
                o = a.n(l),
                c = a(208535),
                u = a.n(c),
                d = t()("10/18/2023 10:00 -0700").valueOf(),
                m = t()("10/20/2023 10:00 -0700").valueOf(),
                p = t()("11/3/2023 10:00 -0700").valueOf();
            const f = {
                ringtone: {
                    name: "call_ringing_halloween",
                    filename: "call_ringing_halloween.mp3"
                },
                soundSettingsLabel: function() {
                    return i.Z.Messages.SOUND_INCOMING_RING_HALLOWEEN
                },
                subscribeToEligibility: function(e) {
                    return r.subscribe({
                        location: "subscribe"
                    }, e)
                },
                isEligible: function() {
                    return r.getCurrentConfig({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled
                },
                useIsEligible: function() {
                    return r.useExperiment({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled
                },
                getAppSpinnerSources: function() {
                    var e = Date.now();
                    if (!(e < d || e > p)) return {
                        webmDark: o(),
                        webmLight: u()
                    }
                },
                getLoadingTips: function() {
                    var e = Date.now();
                    if (!(e < d || e > p)) return "en-US" === i.Z.getLocale() || e >= m ? [i.Z.Messages.HALLOWEEN_LOADING_TEXT_1, i.Z.Messages.HALLOWEEN_LOADING_TEXT_2, i.Z.Messages.HALLOWEEN_LOADING_TEXT_3, i.Z.Messages.HALLOWEEN_LOADING_TEXT_4, i.Z.Messages.HALLOWEEN_LOADING_TEXT_5, i.Z.Messages.HALLOWEEN_LOADING_TEXT_6, i.Z.Messages.HALLOWEEN_LOADING_TEXT_7, i.Z.Messages.HALLOWEEN_LOADING_TEXT_8, i.Z.Messages.HALLOWEEN_LOADING_TEXT_9] : void 0
                }
            }
        },
        558820: (e, s, a) => {
            "use strict";
            a.d(s, {
                DK: () => O,
                Dx: () => L,
                EJ: () => R,
                Ee: () => _,
                Hh: () => w,
                II: () => y,
                MC: () => I,
                Vj: () => A,
                ZP: () => B,
                gO: () => S,
                i_: () => D,
                jQ: () => Z,
                qE: () => T,
                v6: () => C,
                zx: () => j
            });
            var n = a(785893),
                t = (a(667294), a(294184)),
                r = a.n(t),
                i = a(70418),
                l = a(621647),
                o = a(107364),
                c = a(124251),
                u = a(443812),
                d = a(408481),
                m = a(646161),
                p = a(348592),
                f = a(463473),
                v = a(2590),
                N = a(473708),
                b = a(385994),
                x = a.n(b);

            function g(e, s, a) {
                s in e ? Object.defineProperty(e, s, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[s] = a;
                return e
            }

            function h(e, s) {
                if (null == e) return {};
                var a, n, t = function(e, s) {
                    if (null == e) return {};
                    var a, n, t = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) {
                        a = r[n];
                        s.indexOf(a) >= 0 || (t[a] = e[a])
                    }
                    return t
                }(e, s);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) {
                        a = r[n];
                        s.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (t[a] = e[a])
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
                        a = e.id,
                        t = e.children;
                    return (0, n.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: r()(x().title, s),
                        id: a,
                        children: t
                    })
                },
                O = function(e) {
                    var s = e.className,
                        a = e.children;
                    return (0, n.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: s,
                        children: a
                    })
                },
                _ = function(e) {
                    var s = e.className,
                        a = e.src;
                    return (0, n.jsx)("img", {
                        alt: "",
                        src: a,
                        className: r()(x().image, s)
                    })
                },
                j = function(e) {
                    var s, a = e.className,
                        t = h(e, ["className"]),
                        l = t.look === i.Button.Looks.LINK;
                    return (0, n.jsx)(i.Button, function(e) {
                        for (var s = 1; s < arguments.length; s++) {
                            var a = null != arguments[s] ? arguments[s] : {},
                                n = Object.keys(a);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(a, e).enumerable
                            }))));
                            n.forEach((function(s) {
                                g(e, s, a[s])
                            }))
                        }
                        return e
                    }({
                        size: l ? i.Button.Sizes.MIN : i.Button.Sizes.LARGE,
                        fullWidth: !l,
                        className: r()(a, (s = {}, g(s, x().button, !l), g(s, x().linkButton, l), s))
                    }, t))
                };
            j.Looks = i.Button.Looks;
            j.Colors = i.Button.Colors;
            j.Sizes = i.Button.Sizes;
            var T = function(e) {
                    var s = e.className,
                        a = e.src,
                        t = e.size;
                    return (0, n.jsx)(E, {
                        src: a,
                        size: t,
                        className: r()(x().inviteLargeIcon, s),
                        "aria-hidden": !0
                    })
                },
                A = function(e) {
                    var s = e.guild,
                        a = e.size,
                        t = e.animate,
                        r = void 0 !== t && t,
                        i = e.className;
                    return (0, n.jsx)(c.Z, {
                        active: !0,
                        guild: s,
                        size: a,
                        animate: r,
                        className: i
                    })
                };
            A.Sizes = c.Z.Sizes;
            var I = function(e) {
                var s = e.className,
                    a = e.channel,
                    t = e.size;
                return (0, n.jsx)(E, {
                    src: (0, l.x)(a),
                    size: t,
                    className: r()(x().inviteIcon, s),
                    "aria-hidden": !0
                })
            };
            I.Sizes = i.AvatarSizes;
            var y = function(e) {
                    var s = e.label,
                        a = e.error,
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
                        O = e.required,
                        _ = e.onFocus,
                        j = e.onBlur,
                        T = (0, u.Dt)();
                    return (0, n.jsxs)(i.FormItem, {
                        title: s,
                        error: a,
                        className: o,
                        required: O,
                        tag: "label",
                        htmlFor: T,
                        children: [(0, n.jsx)(i.TextInput, {
                            name: E,
                            type: p,
                            value: l,
                            inputRef: d,
                            placeholder: t,
                            inputClassName: r()(c, g({}, x().inputError, null != a)),
                            "aria-label": s,
                            onChange: f,
                            autoComplete: v,
                            autoFocus: N,
                            maxLength: b,
                            spellCheck: h,
                            id: T,
                            onFocus: _,
                            onBlur: j
                        }), null != L ? (0, n.jsx)(i.FormText, {
                            type: i.FormText.Types.DESCRIPTION,
                            className: x().description,
                            children: L
                        }) : null]
                    })
                },
                S = function(e) {
                    var s = e.className,
                        a = e.children;
                    return (0, n.jsx)("div", {
                        className: r()(x().block, s),
                        children: a
                    })
                },
                D = function(e) {
                    var s = e.className,
                        a = e.children,
                        t = e.isProminent;
                    return (0, n.jsx)(i.Text, {
                        variant: t ? "text-sm/normal" : "text-xs/normal",
                        className: r()(x().subText, s),
                        children: a
                    })
                },
                w = function(e) {
                    var s = e.className;
                    return (0, n.jsx)(o.Z, {
                        direction: o.Z.Direction.VERTICAL,
                        align: o.Z.Align.CENTER,
                        className: s,
                        children: (0, n.jsx)(d.Z, {
                            className: x().spinnerVideo
                        })
                    })
                },
                R = function(e) {
                    var s, a = e.online,
                        t = e.total,
                        l = e.className,
                        c = e.flat,
                        u = e.textClassName;
                    if (null == t) return null;
                    null != a && a > 0 && (s = (0, n.jsxs)("div", {
                        className: r()(x().pill, x().pillOnline, c && x().pillFlat),
                        children: [(0, n.jsx)("i", {
                            className: x().pillIconOnline
                        }), (0, n.jsx)(i.Text, {
                            tag: "span",
                            className: r()(x().pillMessage, u),
                            variant: "text-sm/normal",
                            children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: a
                            })
                        })]
                    }));
                    return (0, n.jsxs)(o.Z, {
                        justify: o.Z.Justify.CENTER,
                        className: l,
                        children: [s, (0, n.jsxs)("div", {
                            className: r()(x().pill, c && x().pillFlat),
                            children: [(0, n.jsx)("i", {
                                className: x().pillIconTotal
                            }), (0, n.jsx)(i.Text, {
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
                    return null == s ? null : (0, n.jsxs)("div", {
                        className: x().joiningAs,
                        children: [(0, n.jsx)(i.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: N.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                        }), (0, n.jsx)(T, {
                            className: x().joiningAsAvatar,
                            src: s.getAvatarURL(void 0, 24),
                            size: i.AvatarSizes.SIZE_24,
                            "aria-label": s.username
                        }), (0, n.jsx)(i.Text, {
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
                    return (0, n.jsxs)(S, {
                        className: s,
                        children: [(0, n.jsx)(j, {
                            onClick: function() {
                                return window.open((0, m.t3)())
                            },
                            children: N.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                                platform: (0, m.DW)()
                            })
                        }), (0, n.jsx)(D, {
                            className: x().downloadButtonSubtext,
                            children: N.Z.Messages.INCOMPATIBLE_BROWSER.format({
                                supportedBrowserURL: p.Z.getArticleURL(v.BhN.SUPPORTED_BROWSERS)
                            })
                        })]
                    })
                };
            const B = function(e) {
                var s = e.className,
                    a = e.contentClassName,
                    t = e.tag,
                    i = void 0 === t ? "section" : t,
                    l = e.onSubmit,
                    o = e.children,
                    c = e.expanded,
                    u = void 0 !== c && c,
                    d = e.theme,
                    m = void 0 === d ? v.BRd.DARK : d,
                    p = e.style;
                return (0, n.jsxs)(i, {
                    onSubmit: l,
                    style: p,
                    className: r()(u ? x().authBoxExpanded : x().authBox, (0, f.Q)(m), s),
                    children: [(0, n.jsx)("div", {
                        className: x().discordLogo
                    }), (0, n.jsx)("div", {
                        className: r()(x().centeringWrapper, a),
                        children: o
                    })]
                })
            }
        },
        408481: (e, s, a) => {
            "use strict";
            a.d(s, {
                Z: () => R
            });
            var n, t = a(785893),
                r = a(667294),
                i = a(575945),
                l = a(70418),
                o = a(193782),
                c = a(245305),
                u = a(745920),
                d = a.n(u),
                m = a(894919),
                p = a.n(m),
                f = a(786170),
                v = a(2590),
                N = a(161693),
                b = a.n(N),
                x = a(28743),
                g = a.n(x),
                h = a(106632),
                E = a.n(h),
                L = a(858739),
                O = a.n(L),
                _ = a(172129),
                j = a.n(_),
                T = a(243874),
                A = a.n(T);

            function I(e, s, a) {
                s in e ? Object.defineProperty(e, s, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[s] = a;
                return e
            }

            function y(e) {
                var s, a = e.movDark,
                    n = void 0 === a ? d() : a,
                    r = e.movLight,
                    i = void 0 === r ? p() : r,
                    l = e.mp4Dark,
                    o = void 0 === l ? b() : l,
                    u = e.mp4Light,
                    m = void 0 === u ? O() : u,
                    f = e.pngDark,
                    N = void 0 === f ? g() : f,
                    x = e.pngLight,
                    h = void 0 === x ? j() : x,
                    L = e.webmDark,
                    _ = void 0 === L ? E() : L,
                    T = e.webmLight,
                    y = void 0 === T ? A() : T,
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
                        src: _,
                        type: "video/webm"
                    }, "webm"));
                    w.unshift((0, t.jsx)("source", {
                        src: y,
                        type: "video/webm"
                    }, "webm"))
                }
                if ((0, c.rO)()) {
                    D.unshift((0, t.jsx)("source", {
                        src: n,
                        type: "video/mp4"
                    }, "hevc"));
                    w.unshift((0, t.jsx)("source", {
                        src: i,
                        type: "video/mp4"
                    }, "hevc"))
                }
                return I(s = {}, v.BRd.DARK, D), I(s, v.BRd.LIGHT, w), s
            }
            var S = null === (n = o.Z.getAppSpinnerSources) || void 0 === n ? void 0 : n.call(o.Z),
                D = null != S ? y(S) : null,
                w = y({});
            const R = function(e) {
                var s = e.loop,
                    a = void 0 === s || s,
                    n = e.autoPlay,
                    o = void 0 === n || n,
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
                    loop: !p.enabled && a,
                    autoPlay: !p.enabled && o,
                    playsInline: !0,
                    "data-testid": "app-spinner",
                    children: x
                }, m)
            }
        }
    }
]);