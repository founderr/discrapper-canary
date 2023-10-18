(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [4909, 58820], {
        535169: (e, n, t) => {
            e.exports = t.p + "5656f17248cf747f56433a1d60c8c1bf.svg"
        },
        191505: (e, n, t) => {
            e.exports = t.p + "fd394e078cb4a49bb746cd0badd68702.webm"
        },
        208535: (e, n, t) => {
            e.exports = t.p + "85680f1b119d34559007f0d54abc8947.webm"
        },
        745920: (e, n, t) => {
            e.exports = t.p + "2d889bf9114df188325d15f9e517c325.mov"
        },
        161693: (e, n, t) => {
            e.exports = t.p + "6d5b64b094944af6d52d895c8c2b8a59.mp4"
        },
        28743: (e, n, t) => {
            e.exports = t.p + "dff87c953f43b561d71fbcfe8a93a79a.png"
        },
        106632: (e, n, t) => {
            e.exports = t.p + "3b0d96ed8113994f3d139088726cfecd.webm"
        },
        894919: (e, n, t) => {
            e.exports = t.p + "d44a33e33f751afe9a0e5e42e2156d8f.mov"
        },
        858739: (e, n, t) => {
            e.exports = t.p + "90c2f45413660019fa25f4f9f40ecb5d.mp4"
        },
        172129: (e, n, t) => {
            e.exports = t.p + "61c5375ee8d8dbf35c109b06044394d8.png"
        },
        243874: (e, n, t) => {
            e.exports = t.p + "1eae6aab9a6b4e7da646db415479560b.webm"
        },
        442830: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                default: () => L
            });
            var r = t(785893),
                a = t(667294),
                s = t(517563),
                i = t(202351),
                o = t(281110),
                l = t(384482),
                c = t(784426),
                u = t(664625),
                d = t(107364),
                f = t(558820),
                p = t(2590),
                m = t(473708),
                h = t(137897),
                g = t.n(h),
                v = t(380203),
                N = t.n(v);

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function x(e, n) {
                return !n || "object" !== O(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function E(e, n) {
                E = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return E(e, n)
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = b(e);
                    if (n) {
                        var a = b(this).constructor;
                        t = Reflect.construct(r, arguments, a)
                    } else t = r.apply(this, arguments);
                    return x(this, t)
                }
            }
            i.ZP.initialize();
            var y = "handoff",
                j = "done",
                T = "failed";

            function A() {
                try {
                    window.close()
                } catch (e) {}
            }
            var L = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && E(e, n)
                }(a, e);
                var n = _(a);

                function a(e) {
                    ! function(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, a);
                    var t;
                    (t = n.call(this, e)).done = function() {
                        A();
                        t.setState({
                            stage: j
                        })
                    };
                    t.failed = function() {
                        t.setState({
                            stage: T
                        });
                        A()
                    };
                    t.handleOpenApp = function() {
                        (0, c.uL)(p.Z5c.ME)
                    };
                    var r, i = e.location.search,
                        o = null != i && "" !== i ? (0, s.parse)(i) : {};
                    t.state = {
                        key: null !== (r = o.key) && void 0 !== r ? r : "",
                        stage: "true" === o.done ? j : y
                    };
                    return t
                }
                var i = a.prototype;
                i.componentDidMount = function() {
                    var e = this,
                        n = this.state,
                        t = n.stage,
                        r = n.key;
                    t === j ? A() : u.default.isAuthenticated() ? o.ZP.post({
                        url: p.ANM.HANDOFF,
                        body: {
                            key: r
                        },
                        oldFormErrors: !0
                    }).then((function(n) {
                        return e.handoff(n.body.handoff_token)
                    }), (function() {
                        return e.handoff()
                    })) : this.handoff()
                };
                i.handoff = function(e) {
                    l.default.requestRedirect(p.Etm.BROWSER_HANDOFF, {
                        handoffToken: e,
                        fingerprint: u.default.getFingerprint()
                    }).then(this.done, this.failed)
                };
                i.renderDone = function() {
                    return (0, r.jsxs)(f.ZP, {
                        children: [(0, r.jsx)(f.Ee, {
                            src: t(535169),
                            className: N().marginBottom20
                        }), (0, r.jsx)(f.Dx, {
                            className: N().marginBottom8,
                            children: m.Z.Messages.BROWSER_HANDOFF_DONE_TITLE
                        }), (0, r.jsx)(f.DK, {
                            className: N().marginBottom40,
                            children: m.Z.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE
                        }), (0, r.jsx)(f.zx, {
                            onClick: this.handleOpenApp,
                            children: m.Z.Messages.CONTINUE_TO_WEBAPP
                        })]
                    })
                };
                i.renderFailed = function() {
                    return (0, r.jsxs)(f.ZP, {
                        children: [(0, r.jsx)(f.Ee, {
                            src: t(535169),
                            className: N().marginBottom20
                        }), (0, r.jsx)(f.Dx, {
                            className: N().marginBottom8,
                            children: m.Z.Messages.BROWSER_HANDOFF_FAILED_TITLE
                        }), (0, r.jsx)(f.DK, {
                            className: N().marginBottom40,
                            children: m.Z.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE
                        }), (0, r.jsx)(f.zx, {
                            onClick: this.handleOpenApp,
                            children: m.Z.Messages.CONTINUE_TO_WEBAPP
                        })]
                    })
                };
                i.renderHandoff = function() {
                    return (0, r.jsxs)(f.ZP, {
                        children: [(0, r.jsx)(f.Hh, {}), (0, r.jsx)(f.Dx, {
                            className: N().marginBottom8,
                            children: m.Z.Messages.BROWSER_HANDOFF_AUTHENTICATING_TITLE
                        }), (0, r.jsx)(f.DK, {
                            children: m.Z.Messages.BROWSER_HANDOFF_AUTHENTICATING_DESCRIPTION
                        })]
                    })
                };
                i.render = function() {
                    var e;
                    switch (this.state.stage) {
                        case j:
                            e = this.renderDone();
                            break;
                        case T:
                            e = this.renderFailed();
                            break;
                        default:
                            e = this.renderHandoff()
                    }
                    return (0, r.jsx)(d.Z, {
                        justify: d.Z.Justify.CENTER,
                        align: d.Z.Align.CENTER,
                        className: g().wrapper,
                        children: e
                    })
                };
                return a
            }(a.PureComponent)
        },
        621647: (e, n, t) => {
            "use strict";
            t.d(n, {
                x: () => c
            });
            var r = t(473903),
                a = t(775173),
                s = t(72580),
                i = t(2590);

            function o(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function l(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, s = [],
                            i = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                s.push(r.value);
                                if (n && s.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return s
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    t = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case i.d4z.DM:
                        var o = l(e.recipients.map(r.default.getUser).filter(s.lm), 1),
                            c = o[0];
                        return null == c ? null : c.getAvatarURL(void 0, n, t);
                    case i.d4z.GROUP_DM:
                        return a.ZP.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: n
                        })
                }
            }
        },
        193782: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => d
            });
            var r = (0, t(260561).B)({
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
            var a = t(473708),
                s = t(191505),
                i = t.n(s),
                o = t(208535),
                l = t.n(o),
                c = 16976484e5,
                u = 16990308e5;
            const d = {
                ringtone: {
                    name: "call_ringing_halloween",
                    filename: "call_ringing_halloween.mp3"
                },
                soundSettingsLabel: function() {
                    return a.Z.Messages.SOUND_INCOMING_RING_HALLOWEEN + " 🎃"
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
                    if (!(e < c || e > u)) return {
                        webmDark: i(),
                        webmLight: l()
                    }
                },
                getLoadingTips: function() {
                    var e = Date.now();
                    if (!(e < c || e > u)) return "en-US" === a.Z.getLocale() || e >= 16978212e5 ? [a.Z.Messages.HALLOWEEN_LOADING_TEXT_1, a.Z.Messages.HALLOWEEN_LOADING_TEXT_2, a.Z.Messages.HALLOWEEN_LOADING_TEXT_3, a.Z.Messages.HALLOWEEN_LOADING_TEXT_4, a.Z.Messages.HALLOWEEN_LOADING_TEXT_5, a.Z.Messages.HALLOWEEN_LOADING_TEXT_6, a.Z.Messages.HALLOWEEN_LOADING_TEXT_7, a.Z.Messages.HALLOWEEN_LOADING_TEXT_8, a.Z.Messages.HALLOWEEN_LOADING_TEXT_9] : void 0
                }
            }
        },
        558820: (e, n, t) => {
            "use strict";
            t.d(n, {
                DK: () => _,
                Dx: () => O,
                EJ: () => Z,
                Ee: () => y,
                Hh: () => S,
                II: () => I,
                MC: () => L,
                Vj: () => A,
                ZP: () => C,
                gO: () => R,
                i_: () => D,
                jQ: () => w,
                qE: () => T,
                v6: () => B,
                zx: () => j
            });
            var r = t(785893),
                a = (t(667294), t(294184)),
                s = t.n(a),
                i = t(70418),
                o = t(621647),
                l = t(107364),
                c = t(124251),
                u = t(443812),
                d = t(408481),
                f = t(646161),
                p = t(348592),
                m = t(463473),
                h = t(2590),
                g = t(473708),
                v = t(385994),
                N = t.n(v);

            function b(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function x(e, n) {
                if (null == e) return {};
                var t, r, a = function(e, n) {
                    if (null == e) return {};
                    var t, r, a = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) {
                        t = s[r];
                        n.indexOf(t) >= 0 || (a[t] = e[t])
                    }
                    return a
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) {
                        t = s[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])
                    }
                }
                return a
            }
            var E = i.Avatar;
            null == E && (E = function() {
                return null
            });
            var O = function(e) {
                    var n = e.className,
                        t = e.id,
                        a = e.children;
                    return (0, r.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: s()(N().title, n),
                        id: t,
                        children: a
                    })
                },
                _ = function(e) {
                    var n = e.className,
                        t = e.children;
                    return (0, r.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: n,
                        children: t
                    })
                },
                y = function(e) {
                    var n = e.className,
                        t = e.src;
                    return (0, r.jsx)("img", {
                        alt: "",
                        src: t,
                        className: s()(N().image, n)
                    })
                },
                j = function(e) {
                    var n, t = e.className,
                        a = x(e, ["className"]),
                        o = a.look === i.Button.Looks.LINK;
                    return (0, r.jsx)(i.Button, function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))));
                            r.forEach((function(n) {
                                b(e, n, t[n])
                            }))
                        }
                        return e
                    }({
                        size: o ? i.Button.Sizes.MIN : i.Button.Sizes.LARGE,
                        fullWidth: !o,
                        className: s()(t, (n = {}, b(n, N().button, !o), b(n, N().linkButton, o), n))
                    }, a))
                };
            j.Looks = i.Button.Looks;
            j.Colors = i.Button.Colors;
            j.Sizes = i.Button.Sizes;
            var T = function(e) {
                    var n = e.className,
                        t = e.src,
                        a = e.size;
                    return (0, r.jsx)(E, {
                        src: t,
                        size: a,
                        className: s()(N().inviteLargeIcon, n),
                        "aria-hidden": !0
                    })
                },
                A = function(e) {
                    var n = e.guild,
                        t = e.size,
                        a = e.animate,
                        s = void 0 !== a && a,
                        i = e.className;
                    return (0, r.jsx)(c.Z, {
                        active: !0,
                        guild: n,
                        size: t,
                        animate: s,
                        className: i
                    })
                };
            A.Sizes = c.Z.Sizes;
            var L = function(e) {
                var n = e.className,
                    t = e.channel,
                    a = e.size;
                return (0, r.jsx)(E, {
                    src: (0, o.x)(t),
                    size: a,
                    className: s()(N().inviteIcon, n),
                    "aria-hidden": !0
                })
            };
            L.Sizes = i.AvatarSizes;
            var I = function(e) {
                    var n = e.label,
                        t = e.error,
                        a = e.placeholder,
                        o = e.value,
                        l = e.className,
                        c = e.inputClassName,
                        d = e.setRef,
                        f = e.type,
                        p = void 0 === f ? "text" : f,
                        m = e.onChange,
                        h = e.autoComplete,
                        g = e.autoFocus,
                        v = e.maxLength,
                        x = e.spellCheck,
                        E = e.name,
                        O = e.description,
                        _ = e.required,
                        y = e.onFocus,
                        j = e.onBlur,
                        T = (0, u.Dt)();
                    return (0, r.jsxs)(i.FormItem, {
                        title: n,
                        error: t,
                        className: l,
                        required: _,
                        tag: "label",
                        htmlFor: T,
                        children: [(0, r.jsx)(i.TextInput, {
                            name: E,
                            type: p,
                            value: o,
                            inputRef: d,
                            placeholder: a,
                            inputClassName: s()(c, b({}, N().inputError, null != t)),
                            "aria-label": n,
                            onChange: m,
                            autoComplete: h,
                            autoFocus: g,
                            maxLength: v,
                            spellCheck: x,
                            id: T,
                            onFocus: y,
                            onBlur: j
                        }), null != O ? (0, r.jsx)(i.FormText, {
                            type: i.FormText.Types.DESCRIPTION,
                            className: N().description,
                            children: O
                        }) : null]
                    })
                },
                R = function(e) {
                    var n = e.className,
                        t = e.children;
                    return (0, r.jsx)("div", {
                        className: s()(N().block, n),
                        children: t
                    })
                },
                D = function(e) {
                    var n = e.className,
                        t = e.children,
                        a = e.isProminent;
                    return (0, r.jsx)(i.Text, {
                        variant: a ? "text-sm/normal" : "text-xs/normal",
                        className: s()(N().subText, n),
                        children: t
                    })
                },
                S = function(e) {
                    var n = e.className;
                    return (0, r.jsx)(l.Z, {
                        direction: l.Z.Direction.VERTICAL,
                        align: l.Z.Align.CENTER,
                        className: n,
                        children: (0, r.jsx)(d.Z, {
                            className: N().spinnerVideo
                        })
                    })
                },
                Z = function(e) {
                    var n, t = e.online,
                        a = e.total,
                        o = e.className,
                        c = e.flat,
                        u = e.textClassName;
                    if (null == a) return null;
                    null != t && t > 0 && (n = (0, r.jsxs)("div", {
                        className: s()(N().pill, N().pillOnline, c && N().pillFlat),
                        children: [(0, r.jsx)("i", {
                            className: N().pillIconOnline
                        }), (0, r.jsx)(i.Text, {
                            tag: "span",
                            className: s()(N().pillMessage, u),
                            variant: "text-sm/normal",
                            children: g.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: t
                            })
                        })]
                    }));
                    return (0, r.jsxs)(l.Z, {
                        justify: l.Z.Justify.CENTER,
                        className: o,
                        children: [n, (0, r.jsxs)("div", {
                            className: s()(N().pill, c && N().pillFlat),
                            children: [(0, r.jsx)("i", {
                                className: N().pillIconTotal
                            }), (0, r.jsx)(i.Text, {
                                tag: "span",
                                className: s()(N().pillMessage, u),
                                variant: "text-sm/normal",
                                children: g.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                    count: a
                                })
                            })]
                        })]
                    })
                },
                w = function(e) {
                    var n = e.user;
                    return null == n ? null : (0, r.jsxs)("div", {
                        className: N().joiningAs,
                        children: [(0, r.jsx)(i.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: g.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                        }), (0, r.jsx)(T, {
                            className: N().joiningAsAvatar,
                            src: n.getAvatarURL(void 0, 24),
                            size: i.AvatarSizes.SIZE_24,
                            "aria-label": n.username
                        }), (0, r.jsx)(i.Text, {
                            className: N().joiningAsUsername,
                            tag: "span",
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: n.username
                        })]
                    })
                },
                B = function(e) {
                    var n = e.className;
                    return (0, r.jsxs)(R, {
                        className: n,
                        children: [(0, r.jsx)(j, {
                            onClick: function() {
                                return window.open((0, f.t3)())
                            },
                            children: g.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                                platform: (0, f.DW)()
                            })
                        }), (0, r.jsx)(D, {
                            className: N().downloadButtonSubtext,
                            children: g.Z.Messages.INCOMPATIBLE_BROWSER.format({
                                supportedBrowserURL: p.Z.getArticleURL(h.BhN.SUPPORTED_BROWSERS)
                            })
                        })]
                    })
                };
            const C = function(e) {
                var n = e.className,
                    t = e.contentClassName,
                    a = e.tag,
                    i = void 0 === a ? "section" : a,
                    o = e.onSubmit,
                    l = e.children,
                    c = e.expanded,
                    u = void 0 !== c && c,
                    d = e.theme,
                    f = void 0 === d ? h.BRd.DARK : d,
                    p = e.style;
                return (0, r.jsxs)(i, {
                    onSubmit: o,
                    style: p,
                    className: s()(u ? N().authBoxExpanded : N().authBox, (0, m.Q)(f), n),
                    children: [(0, r.jsx)("div", {
                        className: N().discordLogo
                    }), (0, r.jsx)("div", {
                        className: s()(N().centeringWrapper, t),
                        children: l
                    })]
                })
            }
        },
        408481: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => Z
            });
            var r, a = t(785893),
                s = t(667294),
                i = t(575945),
                o = t(70418),
                l = t(193782),
                c = t(245305),
                u = t(745920),
                d = t.n(u),
                f = t(894919),
                p = t.n(f),
                m = t(786170),
                h = t(2590),
                g = t(161693),
                v = t.n(g),
                N = t(28743),
                b = t.n(N),
                x = t(106632),
                E = t.n(x),
                O = t(858739),
                _ = t.n(O),
                y = t(172129),
                j = t.n(y),
                T = t(243874),
                A = t.n(T);

            function L(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function I(e) {
                var n, t = e.movDark,
                    r = void 0 === t ? d() : t,
                    s = e.movLight,
                    i = void 0 === s ? p() : s,
                    o = e.mp4Dark,
                    l = void 0 === o ? v() : o,
                    u = e.mp4Light,
                    f = void 0 === u ? _() : u,
                    m = e.pngDark,
                    g = void 0 === m ? b() : m,
                    N = e.pngLight,
                    x = void 0 === N ? j() : N,
                    O = e.webmDark,
                    y = void 0 === O ? E() : O,
                    T = e.webmLight,
                    I = void 0 === T ? A() : T,
                    R = (0, c.vu)(),
                    D = [(0, a.jsx)("source", {
                        src: l,
                        type: "video/mp4"
                    }, "mp4"), (0, a.jsx)("img", {
                        alt: "",
                        src: g
                    }, "png")],
                    S = [(0, a.jsx)("source", {
                        src: f,
                        type: "video/mp4"
                    }, "mp4"), (0, a.jsx)("img", {
                        alt: "",
                        src: x
                    }, "png")];
                if (R > 52 || -1 === R) {
                    D.unshift((0, a.jsx)("source", {
                        src: y,
                        type: "video/webm"
                    }, "webm"));
                    S.unshift((0, a.jsx)("source", {
                        src: I,
                        type: "video/webm"
                    }, "webm"))
                }
                if ((0, c.rO)()) {
                    D.unshift((0, a.jsx)("source", {
                        src: r,
                        type: "video/mp4"
                    }, "hevc"));
                    S.unshift((0, a.jsx)("source", {
                        src: i,
                        type: "video/mp4"
                    }, "hevc"))
                }
                return L(n = {}, h.BRd.DARK, D), L(n, h.BRd.LIGHT, S), n
            }
            var R = null === (r = l.Z.getAppSpinnerSources) || void 0 === r ? void 0 : r.call(l.Z),
                D = null != R ? I(R) : null,
                S = I({});
            const Z = function(e) {
                var n = e.loop,
                    t = void 0 === n || n,
                    r = e.autoPlay,
                    l = void 0 === r || r,
                    c = e.setRef,
                    u = e.className,
                    d = e.onReady,
                    f = (0, o.useThemeContext)().theme,
                    p = s.useContext(o.AccessibilityPreferencesContext).reducedMotion,
                    g = S;
                null != D && (g = D);
                var v, N = null !== (v = g[(0, i.wj)(f) ? h.BRd.DARK : h.BRd.LIGHT]) && void 0 !== v ? v : g[h.BRd.DARK];
                return (0, a.jsx)(m.Z, {
                    ref: c,
                    onLoadedData: d,
                    className: u,
                    loop: !p.enabled && t,
                    autoPlay: !p.enabled && l,
                    playsInline: !0,
                    "data-testid": "app-spinner",
                    children: N
                }, f)
            }
        }
    }
]);