(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [58820], {
        555700: (e, a, s) => {
            e.exports = s.p + "7b9da5260fc65ad2b03add81090b16c0.mov"
        },
        191505: (e, a, s) => {
            e.exports = s.p + "fd394e078cb4a49bb746cd0badd68702.webm"
        },
        848823: (e, a, s) => {
            e.exports = s.p + "85774a9f7fb42ef4fc9f4731a89f391c.mov"
        },
        208535: (e, a, s) => {
            e.exports = s.p + "85680f1b119d34559007f0d54abc8947.webm"
        },
        745920: (e, a, s) => {
            e.exports = s.p + "2d889bf9114df188325d15f9e517c325.mov"
        },
        161693: (e, a, s) => {
            e.exports = s.p + "6d5b64b094944af6d52d895c8c2b8a59.mp4"
        },
        28743: (e, a, s) => {
            e.exports = s.p + "dff87c953f43b561d71fbcfe8a93a79a.png"
        },
        106632: (e, a, s) => {
            e.exports = s.p + "3b0d96ed8113994f3d139088726cfecd.webm"
        },
        894919: (e, a, s) => {
            e.exports = s.p + "d44a33e33f751afe9a0e5e42e2156d8f.mov"
        },
        858739: (e, a, s) => {
            e.exports = s.p + "90c2f45413660019fa25f4f9f40ecb5d.mp4"
        },
        172129: (e, a, s) => {
            e.exports = s.p + "61c5375ee8d8dbf35c109b06044394d8.png"
        },
        243874: (e, a, s) => {
            e.exports = s.p + "1eae6aab9a6b4e7da646db415479560b.webm"
        },
        193782: (e, a, s) => {
            "use strict";
            s.d(a, {
                Z: () => x
            });
            var n = s(730381),
                t = s.n(n),
                r = (0, s(260561).B)({
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
            var i = s(555700),
                l = s.n(i),
                o = s(848823),
                c = s.n(o),
                u = s(473708),
                d = s(191505),
                m = s.n(d),
                p = s(208535),
                f = s.n(p),
                v = t()("10/18/2023 10:00 -0700").valueOf(),
                N = t()("10/20/2023 10:00 -0700").valueOf(),
                b = t()("11/3/2023 10:00 -0700").valueOf();
            const x = {
                ringtone: {
                    name: "call_ringing_halloween",
                    filename: "call_ringing_halloween.mp3"
                },
                soundSettingsLabel: function() {
                    return u.Z.Messages.SOUND_INCOMING_RING_HALLOWEEN
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
                    if (!(e < v || e > b)) return {
                        webmDark: m(),
                        webmLight: f(),
                        movDark: l(),
                        movLight: c()
                    }
                },
                getLoadingTips: function() {
                    var e = Date.now();
                    if (!(e < v || e > b)) return "en-US" === u.Z.getLocale() || e >= N ? [u.Z.Messages.HALLOWEEN_LOADING_TEXT_1, u.Z.Messages.HALLOWEEN_LOADING_TEXT_2, u.Z.Messages.HALLOWEEN_LOADING_TEXT_3, u.Z.Messages.HALLOWEEN_LOADING_TEXT_4, u.Z.Messages.HALLOWEEN_LOADING_TEXT_5, u.Z.Messages.HALLOWEEN_LOADING_TEXT_6, u.Z.Messages.HALLOWEEN_LOADING_TEXT_7, u.Z.Messages.HALLOWEEN_LOADING_TEXT_8, u.Z.Messages.HALLOWEEN_LOADING_TEXT_9] : void 0
                }
            }
        },
        558820: (e, a, s) => {
            "use strict";
            s.d(a, {
                DK: () => O,
                Dx: () => L,
                EJ: () => R,
                Ee: () => _,
                Hh: () => w,
                II: () => y,
                MC: () => I,
                Vj: () => A,
                ZP: () => B,
                gO: () => D,
                i_: () => S,
                jQ: () => Z,
                qE: () => T,
                v6: () => C,
                zx: () => j
            });
            var n = s(785893),
                t = (s(667294), s(294184)),
                r = s.n(t),
                i = s(70418),
                l = s(621647),
                o = s(107364),
                c = s(124251),
                u = s(443812),
                d = s(408481),
                m = s(646161),
                p = s(348592),
                f = s(463473),
                v = s(2590),
                N = s(473708),
                b = s(385994),
                x = s.n(b);

            function g(e, a, s) {
                a in e ? Object.defineProperty(e, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = s;
                return e
            }

            function h(e, a) {
                if (null == e) return {};
                var s, n, t = function(e, a) {
                    if (null == e) return {};
                    var s, n, t = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) {
                        s = r[n];
                        a.indexOf(s) >= 0 || (t[s] = e[s])
                    }
                    return t
                }(e, a);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) {
                        s = r[n];
                        a.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(e, s) && (t[s] = e[s])
                    }
                }
                return t
            }
            var E = i.Avatar;
            null == E && (E = function() {
                return null
            });
            var L = function(e) {
                    var a = e.className,
                        s = e.id,
                        t = e.children;
                    return (0, n.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: r()(x().title, a),
                        id: s,
                        children: t
                    })
                },
                O = function(e) {
                    var a = e.className,
                        s = e.children;
                    return (0, n.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: a,
                        children: s
                    })
                },
                _ = function(e) {
                    var a = e.className,
                        s = e.src;
                    return (0, n.jsx)("img", {
                        alt: "",
                        src: s,
                        className: r()(x().image, a)
                    })
                },
                j = function(e) {
                    var a, s = e.className,
                        t = h(e, ["className"]),
                        l = t.look === i.Button.Looks.LINK;
                    return (0, n.jsx)(i.Button, function(e) {
                        for (var a = 1; a < arguments.length; a++) {
                            var s = null != arguments[a] ? arguments[a] : {},
                                n = Object.keys(s);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(s).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(s, e).enumerable
                            }))));
                            n.forEach((function(a) {
                                g(e, a, s[a])
                            }))
                        }
                        return e
                    }({
                        size: l ? i.Button.Sizes.MIN : i.Button.Sizes.LARGE,
                        fullWidth: !l,
                        className: r()(s, (a = {}, g(a, x().button, !l), g(a, x().linkButton, l), a))
                    }, t))
                };
            j.Looks = i.Button.Looks;
            j.Colors = i.Button.Colors;
            j.Sizes = i.Button.Sizes;
            var T = function(e) {
                    var a = e.className,
                        s = e.src,
                        t = e.size;
                    return (0, n.jsx)(E, {
                        src: s,
                        size: t,
                        className: r()(x().inviteLargeIcon, a),
                        "aria-hidden": !0
                    })
                },
                A = function(e) {
                    var a = e.guild,
                        s = e.size,
                        t = e.animate,
                        r = void 0 !== t && t,
                        i = e.className;
                    return (0, n.jsx)(c.Z, {
                        active: !0,
                        guild: a,
                        size: s,
                        animate: r,
                        className: i
                    })
                };
            A.Sizes = c.Z.Sizes;
            var I = function(e) {
                var a = e.className,
                    s = e.channel,
                    t = e.size;
                return (0, n.jsx)(E, {
                    src: (0, l.x)(s),
                    size: t,
                    className: r()(x().inviteIcon, a),
                    "aria-hidden": !0
                })
            };
            I.Sizes = i.AvatarSizes;
            var y = function(e) {
                    var a = e.label,
                        s = e.error,
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
                        title: a,
                        error: s,
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
                            inputClassName: r()(c, g({}, x().inputError, null != s)),
                            "aria-label": a,
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
                D = function(e) {
                    var a = e.className,
                        s = e.children;
                    return (0, n.jsx)("div", {
                        className: r()(x().block, a),
                        children: s
                    })
                },
                S = function(e) {
                    var a = e.className,
                        s = e.children,
                        t = e.isProminent;
                    return (0, n.jsx)(i.Text, {
                        variant: t ? "text-sm/normal" : "text-xs/normal",
                        className: r()(x().subText, a),
                        children: s
                    })
                },
                w = function(e) {
                    var a = e.className;
                    return (0, n.jsx)(o.Z, {
                        direction: o.Z.Direction.VERTICAL,
                        align: o.Z.Align.CENTER,
                        className: a,
                        children: (0, n.jsx)(d.Z, {
                            className: x().spinnerVideo
                        })
                    })
                },
                R = function(e) {
                    var a, s = e.online,
                        t = e.total,
                        l = e.className,
                        c = e.flat,
                        u = e.textClassName;
                    if (null == t) return null;
                    null != s && s > 0 && (a = (0, n.jsxs)("div", {
                        className: r()(x().pill, x().pillOnline, c && x().pillFlat),
                        children: [(0, n.jsx)("i", {
                            className: x().pillIconOnline
                        }), (0, n.jsx)(i.Text, {
                            tag: "span",
                            className: r()(x().pillMessage, u),
                            variant: "text-sm/normal",
                            children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: s
                            })
                        })]
                    }));
                    return (0, n.jsxs)(o.Z, {
                        justify: o.Z.Justify.CENTER,
                        className: l,
                        children: [a, (0, n.jsxs)("div", {
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
                    var a = e.user;
                    return null == a ? null : (0, n.jsxs)("div", {
                        className: x().joiningAs,
                        children: [(0, n.jsx)(i.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: N.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                        }), (0, n.jsx)(T, {
                            className: x().joiningAsAvatar,
                            src: a.getAvatarURL(void 0, 24),
                            size: i.AvatarSizes.SIZE_24,
                            "aria-label": a.username
                        }), (0, n.jsx)(i.Text, {
                            className: x().joiningAsUsername,
                            tag: "span",
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: a.username
                        })]
                    })
                },
                C = function(e) {
                    var a = e.className;
                    return (0, n.jsxs)(D, {
                        className: a,
                        children: [(0, n.jsx)(j, {
                            onClick: function() {
                                return window.open((0, m.t3)())
                            },
                            children: N.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                                platform: (0, m.DW)()
                            })
                        }), (0, n.jsx)(S, {
                            className: x().downloadButtonSubtext,
                            children: N.Z.Messages.INCOMPATIBLE_BROWSER.format({
                                supportedBrowserURL: p.Z.getArticleURL(v.BhN.SUPPORTED_BROWSERS)
                            })
                        })]
                    })
                };
            const B = function(e) {
                var a = e.className,
                    s = e.contentClassName,
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
                    className: r()(u ? x().authBoxExpanded : x().authBox, (0, f.Q)(m), a),
                    children: [(0, n.jsx)("div", {
                        className: x().discordLogo
                    }), (0, n.jsx)("div", {
                        className: r()(x().centeringWrapper, s),
                        children: o
                    })]
                })
            }
        },
        408481: (e, a, s) => {
            "use strict";
            s.d(a, {
                Z: () => R
            });
            var n, t = s(785893),
                r = s(667294),
                i = s(575945),
                l = s(70418),
                o = s(193782),
                c = s(245305),
                u = s(745920),
                d = s.n(u),
                m = s(894919),
                p = s.n(m),
                f = s(786170),
                v = s(2590),
                N = s(161693),
                b = s.n(N),
                x = s(28743),
                g = s.n(x),
                h = s(106632),
                E = s.n(h),
                L = s(858739),
                O = s.n(L),
                _ = s(172129),
                j = s.n(_),
                T = s(243874),
                A = s.n(T);

            function I(e, a, s) {
                a in e ? Object.defineProperty(e, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = s;
                return e
            }

            function y(e) {
                var a, s = e.movDark,
                    n = void 0 === s ? d() : s,
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
                    D = (0, c.vu)(),
                    S = [(0, t.jsx)("source", {
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
                if (D > 52 || -1 === D) {
                    S.unshift((0, t.jsx)("source", {
                        src: _,
                        type: "video/webm"
                    }, "webm"));
                    w.unshift((0, t.jsx)("source", {
                        src: y,
                        type: "video/webm"
                    }, "webm"))
                }
                if ((0, c.rO)()) {
                    S.unshift((0, t.jsx)("source", {
                        src: n,
                        type: "video/mp4"
                    }, "hevc"));
                    w.unshift((0, t.jsx)("source", {
                        src: i,
                        type: "video/mp4"
                    }, "hevc"))
                }
                return I(a = {}, v.BRd.DARK, S), I(a, v.BRd.LIGHT, w), a
            }
            var D = null === (n = o.Z.getAppSpinnerSources) || void 0 === n ? void 0 : n.call(o.Z),
                S = null != D ? y(D) : null,
                w = y({});
            const R = function(e) {
                var a = e.loop,
                    s = void 0 === a || a,
                    n = e.autoPlay,
                    o = void 0 === n || n,
                    c = e.setRef,
                    u = e.className,
                    d = e.onReady,
                    m = (0, l.useThemeContext)().theme,
                    p = r.useContext(l.AccessibilityPreferencesContext).reducedMotion,
                    N = w;
                null != S && (N = S);
                var b, x = null !== (b = N[(0, i.wj)(m) ? v.BRd.DARK : v.BRd.LIGHT]) && void 0 !== b ? b : N[v.BRd.DARK];
                return (0, t.jsx)(f.Z, {
                    ref: c,
                    onLoadedData: d,
                    className: u,
                    loop: !p.enabled && s,
                    autoPlay: !p.enabled && o,
                    playsInline: !0,
                    "data-testid": "app-spinner",
                    children: x
                }, m)
            }
        }
    }
]);