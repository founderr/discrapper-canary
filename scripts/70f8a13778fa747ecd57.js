"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [99656], {
        699656: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => wt
            });
            var r = t(785893),
                l = t(667294),
                o = t(441143),
                a = t.n(o),
                i = t(248088),
                s = t(202351),
                u = t(882723),
                c = t(105783),
                d = t(116404),
                f = t(481008),
                m = t(213276),
                h = t(738096),
                p = t(341765),
                g = t(61209),
                S = t(959207),
                v = t(567403),
                E = t(525077),
                C = t(671723),
                b = t(715107),
                O = t(473903),
                _ = t(375759),
                y = t(107364),
                I = t(443812),
                N = t(652591),
                x = t(120415),
                j = t(310126),
                A = t(802395),
                R = t(165586);

            function Z(e, n, t) {
                var r = R.no[e],
                    l = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var i, s = r[Symbol.iterator](); !(l = (i = s.next()).done); l = !0) {
                        var u = i.value;
                        if ((0, A.Z)(e, u.resolution, u.fps, n, t)) return [u.resolution, u.fps]
                    }
                } catch (e) {
                    o = !0;
                    a = e
                } finally {
                    try {
                        l || null == s.return || s.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return null
            }
            var T = t(944514),
                M = t(294184),
                L = t.n(M),
                P = t(734691),
                w = t(1477),
                D = t(228667),
                G = t(418705),
                U = t(896490),
                k = t(113865),
                B = t(796308),
                F = t(138049),
                V = t(348592),
                H = t(79251),
                W = t(335072),
                z = t(633371),
                K = t(860123),
                Y = t(2590),
                $ = t(473708),
                J = t(616595),
                X = t.n(J),
                q = t(753654),
                Q = t.n(q);

            function ee(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function ne(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, l, o = [],
                            a = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            l = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (i) throw l
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return ee(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ee(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var te = function(e) {
                var n = e.transitionState,
                    t = e.clipsEnabled,
                    o = e.guildId,
                    a = e.children,
                    i = (0, s.e7)([W.Z], (function() {
                        return W.Z.getHardwareClassification()
                    })),
                    c = i === z.x.MEETS_MINIMUM || i === z.x.UNKNOWN,
                    d = i === z.x.BELOW_MINIMUM,
                    f = n === u.ModalTransitionState.ENTERED && (c || d) && !t,
                    m = ne((0, k.c)(f ? [G.z$.CLIPS_ONBOARDING_GO_LIVE_COACHMARK] : []), 2),
                    h = m[0],
                    p = m[1],
                    g = h === G.z$.CLIPS_ONBOARDING_GO_LIVE_COACHMARK;
                l.useEffect((function() {
                    t && (0, U.EW)(G.z$.CLIPS_ONBOARDING_GO_LIVE_COACHMARK, {
                        forceTrack: !0
                    })
                }), [t]);
                var S = function(e, n) {
                    e.stopPropagation();
                    e.preventDefault();
                    null == n || n();
                    p()
                };
                return (0, r.jsx)(u.Popout, {
                    shouldShow: g,
                    position: "right",
                    align: "center",
                    renderPopout: function(e) {
                        var n = e.closePopout;
                        return (0, r.jsx)(B.Z, {
                            dismissibleContent: G.z$.CLIPS_ONBOARDING_GO_LIVE_COACHMARK,
                            shouldUseHorizontalButtons: !0,
                            inlineArt: !0,
                            artClassName: X().clipsEducationArt,
                            position: "right",
                            header: $.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_TITLE,
                            headerClassName: X().clipsEducationHeader,
                            body: (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: $.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY
                                }), d ? (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    className: X().warningText,
                                    children: $.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_HARDWARE_IMPACT_WARNING.format({
                                        url: V.Z.getArticleURL(Y.BhN.CLIPS)
                                    })
                                }) : null]
                            }),
                            tryItText: $.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
                            onTryFeature: function(e) {
                                (0, K.em)({
                                    clipsEnabled: !0,
                                    guildId: o,
                                    trackAnalytics: !0
                                });
                                S(e)
                            },
                            onClose: function(e) {
                                S(e, n)
                            }
                        })
                    },
                    children: function() {
                        return a
                    }
                })
            };
            const re = function(e) {
                var n = e.transitionState,
                    t = e.guildId,
                    l = (0, s.e7)([W.Z], (function() {
                        return W.Z.getSettings().clipsEnabled
                    })),
                    o = (0, s.e7)([F.Z], (function() {
                        return F.Z.getKeybindForAction(Y.kg4.SAVE_CLIP)
                    }));
                a()(null != o, "Clips keybind should be set");
                var i = H.BB(o.shortcut, !0);
                return (0, r.jsx)(u.FormItem, {
                    title: $.Z.Messages.CLIPS_SETTINGS,
                    titleClassName: Q().formItemTitle,
                    className: Q().modalContent,
                    children: (0, r.jsxs)("div", {
                        className: X().container,
                        children: [(0, r.jsx)(te, {
                            transitionState: n,
                            clipsEnabled: l,
                            guildId: t,
                            children: (0, r.jsx)(u.FormSwitch, {
                                className: X().formSwitch,
                                value: l,
                                onChange: function(e) {
                                    return (0, K.em)({
                                        clipsEnabled: e,
                                        guildId: t,
                                        trackAnalytics: !0
                                    })
                                },
                                hideBorder: !0,
                                children: $.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
                            })
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "interactive-normal",
                            className: X().description,
                            children: $.Z.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
                                keybind: i,
                                keybindHook: function() {
                                    return (0, r.jsx)("span", {
                                        className: X().keybindHintKeys,
                                        children: (0, r.jsx)(u.KeyCombo, {
                                            className: X().keybindShortcut,
                                            shortcut: i
                                        })
                                    })
                                }
                            })
                        })]
                    })
                })
            };
            var le = t(968449),
                oe = t(27851),
                ae = t(641277),
                ie = t(124251),
                se = t(425454),
                ue = t(265367),
                ce = t(633878);

            function de(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function fe(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function me(e, n) {
                if (null == e) return {};
                var t, r, l = function(e, n) {
                    if (null == e) return {};
                    var t, r, l = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || (l[t] = e[t])
                    }
                    return l
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t])
                    }
                }
                return l
            }

            function he(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    l = e.height,
                    o = void 0 === l ? 24 : l,
                    a = e.color,
                    i = void 0 === a ? "currentColor" : a,
                    s = e.foreground,
                    u = me(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", fe(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            de(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, ce.Z)(u)), {
                    width: t,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        className: s,
                        fill: i,
                        d: "M22 7.002V5C22 3.898 21.104 3 20 3H4C2.897 3 2 3.898 2 5V7.002H22ZM8 4C8.553 4 9 4.448 9 5C9 5.553 8.553 6 8 6C7.447 6 7 5.553 7 5C7 4.448 7.447 4 8 4ZM5 4C5.553 4 6 4.448 6 5C6 5.553 5.553 6 5 6C4.447 6 4 5.553 4 5C4 4.448 4.447 4 5 4Z"
                    }), (0, r.jsx)("path", {
                        fill: i,
                        d: "M2 8.00201V19C2 20.103 2.897 21 4 21H20C21.104 21 22 20.103 22 19V8.00201H2Z"
                    })]
                }))
            }
            var pe = t(72580),
                ge = t(647428),
                Se = t(236625),
                ve = t.n(Se),
                Ee = t(20978),
                Ce = t(306472),
                be = t(443132),
                Oe = t(36256);
            var _e = t(5544),
                ye = t(682776),
                Ie = t(602397),
                Ne = t(924066),
                xe = t(773011),
                je = t(469023),
                Ae = t(96606),
                Re = t(773148),
                Ze = t(960767),
                Te = t.n(Ze);

            function Me(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Le(e) {
                var n = e.channel,
                    t = e.users,
                    l = e.selected,
                    o = void 0 !== l && l,
                    a = (0, xe.ZP)(n),
                    i = null;
                if (null != t && t.length > 0) {
                    i = (0, r.jsx)(Ae.Z, {
                        guildId: n.guild_id,
                        className: Te().voiceUserList,
                        users: t,
                        renderUser: function(e) {
                            if (null == e) return null;
                            var t = Re.ZP.getName(n.guild_id, n.id, e),
                                l = e.getAvatarURL(n.guild_id, 24);
                            return (0, r.jsx)(u.TooltipContainer, {
                                text: t,
                                children: (0, r.jsx)("img", {
                                    src: null != l ? l : void 0,
                                    "aria-label": e.username,
                                    alt: "",
                                    className: Te().avatar
                                })
                            })
                        },
                        renderMoreUsers: function(e) {
                            var l = function(e, n) {
                                var t = n.id,
                                    r = n.guild_id;
                                return e.length <= 1 ? null : 2 === e.length ? $.Z.Messages.GO_LIVE_MODAL_OVERFLOW_TWO_USERS.format({
                                    nickname0: Re.ZP.getName(r, t, e[0]),
                                    nickname1: Re.ZP.getName(r, t, e[1])
                                }) : 3 === e.length ? $.Z.Messages.GO_LIVE_MODAL_OVERFLOW_THREE_USERS.format({
                                    nickname0: Re.ZP.getName(r, t, e[0]),
                                    nickname1: Re.ZP.getName(r, t, e[1]),
                                    nickname2: Re.ZP.getName(r, t, e[2])
                                }) : $.Z.Messages.GO_LIVE_MODAL_OVERFLOW_FOUR_OR_MORE_USERS.format({
                                    nickname0: Re.ZP.getName(r, t, e[0]),
                                    nickname1: Re.ZP.getName(r, t, e[1]),
                                    remainingCount: e.length - 2
                                })
                            }(t.slice(4), n);
                            return (0, r.jsx)("div", {
                                children: (0, r.jsx)(u.TooltipContainer, {
                                    text: l,
                                    children: (0, r.jsx)("div", {
                                        className: Te().userListOverflow,
                                        children: e
                                    })
                                })
                            })
                        },
                        max: 5,
                        showUserPopout: !1
                    })
                }
                var s = (0, je.Z)(n);
                return (0, r.jsxs)("div", {
                    className: L()(Te().channelInfo, Me({}, Te().selected, o)),
                    children: [(0, r.jsx)(s, {
                        className: Te().channelIcon
                    }), (0, r.jsx)("div", {
                        className: Te().channelName,
                        children: a
                    }), i]
                })
            }
            var Pe = t(202178),
                we = t.n(Pe);

            function De(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Ge(e) {
                var n = e.separator,
                    t = void 0 !== n && n;
                return (0, r.jsx)("div", {
                    className: L()(we().divider, De({}, we().separator, t))
                })
            }
            var Ue = t(773358),
                ke = t.n(Ue);

            function Be(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Fe(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Ve(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, l, o = [],
                            a = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            l = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (i) throw l
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Be(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Be(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function He(e) {
                var n = e.title,
                    t = e.scrollerClassName,
                    o = e.scrollerInnerClassName,
                    a = e.children,
                    i = l.useRef(null),
                    s = Ve(l.useState(!1), 2),
                    c = s[0],
                    d = s[1],
                    f = Ve(l.useState(!1), 2),
                    m = f[0],
                    h = f[1],
                    p = l.useCallback((function() {
                        var e = i.current;
                        if (null != e) {
                            d(!e.isScrolledToTop());
                            h(!e.isScrolledToBottom())
                        }
                    }), []);
                l.useLayoutEffect((function() {
                    return p()
                }), []);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: L()(ke().title, ke().scrollWrapper),
                        children: [(0, r.jsx)(u.FormTitle, {
                            className: Q().formItemTitle,
                            children: n
                        }), (0, r.jsx)(Ge, {
                            separator: c
                        })]
                    }), (0, r.jsx)("div", {
                        className: t,
                        children: (0, r.jsx)(u.AdvancedScroller, {
                            ref: i,
                            className: L()(ke().scrollerInner, o, Fe({}, ke().bottomSeparator, m)),
                            onScroll: p,
                            children: a
                        })
                    })]
                })
            }
            var We = t(33173),
                ze = t.n(We);

            function Ke(e) {
                var n = e.selectedChannelId,
                    t = e.guildId,
                    l = e.onChangeSelectedChannelId,
                    o = (0, s.e7)([O.default], (function() {
                        return O.default.getCurrentUser()
                    })),
                    a = (0, s.e7)([v.Z, _e.ZP, ye.Z], (function() {
                        return (0, Ne.h_)(_e.ZP.getChannels(t), v.Z, ye.Z)
                    })),
                    i = (0, s.e7)([Ie.ZP], (function() {
                        return Ie.ZP.getVoiceStates(t)
                    })),
                    c = a.map((function(e) {
                        var t;
                        return {
                            name: (0, r.jsx)(Le, {
                                channel: e,
                                users: null === (t = i[e.id]) || void 0 === t ? void 0 : t.filter((function(e) {
                                    return e.user.id !== (null == o ? void 0 : o.id)
                                })).map((function(e) {
                                    return e.user
                                })),
                                selected: e.id === n
                            }),
                            value: e.id
                        }
                    }));
                return (0, r.jsx)(He, {
                    title: $.Z.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
                    scrollerInnerClassName: ze().channelSelectScrollerInner,
                    children: (0, r.jsx)(u.RadioGroup, {
                        options: c,
                        value: n,
                        itemInfoClassName: ze().channelInfoWrapper,
                        itemTitleClassName: ze().channelTitleWrapper,
                        onChange: function(e) {
                            var n = e.value;
                            return l(n)
                        }
                    })
                })
            }
            var Ye = t(664625),
                $e = t(491264),
                Je = t.n($e);

            function Xe(e) {
                var n = e.children;
                return (0, r.jsx)("div", {
                    className: Je().card,
                    children: n
                })
            }

            function qe(e) {
                var n = e.channel,
                    t = (0, s.e7)([Ye.default], (function() {
                        return Ye.default.getId()
                    })),
                    l = (0, s.e7)([Ie.ZP], (function() {
                        return Ie.ZP.getVoiceStatesForChannel(n)
                    }), [n]);
                return (0, r.jsx)(u.FormItem, {
                    title: $.Z.Messages.GO_LIVE_MODAL_CURRENT_CHANNEL_FORM_TITLE,
                    className: Q().modalContent,
                    titleClassName: Q().formItemTitle,
                    children: (0, r.jsx)(Xe, {
                        children: (0, r.jsx)(Le, {
                            channel: n,
                            users: l.filter((function(e) {
                                return e.user.id !== t
                            })).map((function(e) {
                                return e.user
                            }))
                        })
                    })
                })
            }
            var Qe = t(579581),
                en = t(260561),
                nn = (0, en.B)({
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
                }),
                tn = t(68543),
                rn = t(95891),
                ln = t(116094),
                on = t(19585),
                an = t(276611);
            const sn = (0, en.B)({
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
            var un = t(203600),
                cn = t(439281),
                dn = t.n(cn);

            function fn(e) {
                var n = e.message,
                    t = e.onClose,
                    l = e.openStreamUpsellModal,
                    o = sn.useExperiment({
                        location: "371fea_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    a = (0, on.Z)().analyticsLocations,
                    i = {
                        section: Y.jXE.STREAM_SETTINGS,
                        object: Y.qAy.PREMIUM_UPSELL_BANNER,
                        objectType: Y.Qqv.BUY
                    };
                return (0, r.jsxs)(u.Clickable, {
                    onClick: function() {
                        ! function() {
                            sn.trackExposure({
                                location: "371fea_2"
                            });
                            o.enabled ? (0, an.Z)({
                                initialPlanId: null,
                                subscriptionTier: un.Si.TIER_2,
                                analyticsLocations: a,
                                analyticsObject: i
                            }) : l({
                                analyticsLocation: i,
                                onClose: t
                            })
                        }()
                    },
                    className: L()(dn().upsellBanner, dn().gradientBackground),
                    children: [(0, r.jsxs)("div", {
                        className: dn().iconTextContainer,
                        children: [(0, r.jsx)(rn.Z, {
                            className: dn().iconColor
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            className: dn().upsellText,
                            children: null != n ? n : $.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER
                        })]
                    }), (0,
                        r.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        className: dn().textLink,
                        children: $.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA
                    })]
                })
            }
            var mn = t(305025),
                hn = t.n(mn),
                pn = t(518280),
                gn = t.n(pn);

            function Sn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function vn(e, n, t, r, l, o, a) {
                try {
                    var i = e[o](a),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, l)
            }

            function En(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, l) {
                        var o = e.apply(n, t);

                        function a(e) {
                            vn(o, r, l, a, i, "next", e)
                        }

                        function i(e) {
                            vn(o, r, l, a, i, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Cn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function bn(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Cn(e, n, t[n])
                    }))
                }
                return e
            }

            function On(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function _n(e) {
                return function(e) {
                    if (Array.isArray(e)) return Sn(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Sn(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Sn(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var yn = function(e, n) {
                var t, r, l, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & l[0]) throw l[1];
                        return l[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function i(o) {
                    return function(i) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (l = 2 & o[0] ? r.return : o[0] ? r.throw || ((l = r.return) && l.call(r), 0) : r.next) && !(l = l.call(r, o[1])).done) return l;
                                (r = 0, l) && (o = [2 & o[0], l.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        l = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(l = a.trys, l = l.length > 0 && l[l.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!l || o[1] > l[0] && o[1] < l[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < l[1]) {
                                            a.label = l[1];
                                            l = o;
                                            break
                                        }
                                        if (l && a.label < l[2]) {
                                            a.label = l[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        l[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = l = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, i])
                    }
                }
            };

            function In(e) {
                var n = e.analyticsLocation,
                    l = e.onClose;
                (0, u.openModalLazy)(En((function() {
                    var e, o;
                    return yn(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, t.e(23850).then(t.bind(t, 123850))];
                            case 1:
                                e = a.sent(), o = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(o, On(bn({}, e), {
                                        onCloseParent: l,
                                        analyticsSource: n
                                    }))
                                }]
                        }
                    }))
                })))
            }

            function Nn() {
                return (0, r.jsxs)("div", {
                    className: hn().toolTipTextContainer,
                    children: [(0, r.jsx)(rn.Z, {
                        className: L()(hn().premiumIcon, hn().premiumIconColor)
                    }), (0, r.jsx)(u.Text, {
                        className: hn().upsellText,
                        variant: "text-sm/medium",
                        children: $.Z.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
                    })]
                })
            }

            function xn(e) {
                var n, t, l = e.type,
                    o = e.selected,
                    a = e.needsPremium,
                    i = e.analyticsLocation,
                    s = e.onClick,
                    c = e.onClose,
                    d = l.value,
                    f = l.label;
                if (a) {
                    n = (0, r.jsx)(u.TooltipContainer, {
                        tooltipClassName: hn().tooltip,
                        spacing: 12,
                        "aria-label": $.Z.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
                        text: (0, r.jsx)(Nn, {}),
                        children: (0, r.jsx)(y.Z, {
                            align: y.Z.Align.CENTER,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-xs/bold",
                                className: hn().selectorNitroText,
                                children: f
                            })
                        })
                    });
                    t = function() {
                        return In({
                            analyticsLocation: i,
                            onClose: c
                        })
                    }
                } else {
                    n = (0, r.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        className: o ? hn().selectorTextSelected : hn().selectorText,
                        children: f
                    });
                    t = function() {
                        return s(d)
                    }
                }
                return {
                    content: n,
                    className: L()(o ? hn().selectorButtonSelected : hn().selectorButton, Cn({}, hn().selectorButtonPremiumRequired, a)),
                    onClick: t
                }
            }

            function jn(e) {
                var n = e.onClose,
                    t = e.selectedPreset,
                    l = e.selectedResolution,
                    o = e.selectedFPS,
                    i = e.onResolutionChange,
                    c = e.onFPSChange,
                    d = e.onPresetChange,
                    f = e.guildId,
                    h = e.captureDeviceSelected,
                    p = (0, s.e7)([O.default], (function() {
                        var e = O.default.getCurrentUser();
                        a()(null != e, "StreamSettings: user cannot be undefined");
                        return e
                    })),
                    g = ln.ZP.isPremiumExactly(p, un.p9.TIER_0),
                    S = ln.ZP.isPremium(p),
                    E = (0, s.e7)([v.Z], (function() {
                        var e;
                        return null === (e = v.Z.getGuild(f)) || void 0 === e ? void 0 : e.premiumTier
                    })),
                    C = (0, Qe.O)().location,
                    b = nn.useExperiment({
                        location: "a87c74_1"
                    }, {
                        autoTrackExposure: g,
                        disable: !g
                    }).enabled || !S,
                    _ = h ? R.z8 : R.WC,
                    I = On(bn({}, C), {
                        section: Y.jXE.STREAM_SETTINGS
                    }),
                    N = (0, r.jsx)(tn.Z, {
                        buttons: _.map((function(e) {
                            return xn({
                                type: e,
                                selected: e.value === l,
                                needsPremium: !(0, A.Z)(t, e.value, o, p, E),
                                analyticsLocation: I,
                                onClick: function() {
                                    return i(e.value)
                                },
                                onClose: n
                            })
                        }))
                    }),
                    x = (0, r.jsx)(tn.Z, {
                        buttons: R.k0.map((function(e) {
                            return xn({
                                type: e,
                                selected: e.value === o,
                                needsPremium: !(0, A.Z)(t, l, e.value, p, E),
                                analyticsLocation: I,
                                onClick: function() {
                                    return c(e.value)
                                },
                                onClose: n
                            })
                        }))
                    }),
                    j = [{
                        value: R.tI.PRESET_VIDEO,
                        label: $.Z.Messages.STREAM_PRESET_VIDEO
                    }].concat(_n(h ? [] : [{
                        value: R.tI.PRESET_DOCUMENTS,
                        label: $.Z.Messages.STREAM_PRESET_DOCUMENTS
                    }]), [{
                        value: R.tI.PRESET_CUSTOM,
                        label: $.Z.Messages.STREAM_PRESET_CUSTOM
                    }]),
                    Z = t === R.tI.PRESET_DOCUMENTS ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(y.Z, {
                            children: (0, r.jsx)(u.FormItem, {
                                title: $.Z.Messages.STREAM_RESOLUTION,
                                titleClassName: Q().formItemTitleSlim,
                                className: hn().documentModeGroup,
                                children: (0, r.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    children: $.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
                                        fps: o
                                    })
                                })
                            })
                        }), b ? (0, r.jsx)(fn, {
                            message: $.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                            onClose: n,
                            openStreamUpsellModal: In
                        }) : null]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(y.Z, {
                            children: [(0, r.jsx)(u.FormItem, {
                                title: $.Z.Messages.STREAM_RESOLUTION,
                                className: hn().settingsGroup,
                                titleClassName: Q().formItemTitleSlim,
                                children: N
                            }), (0, r.jsx)(u.FormItem, {
                                title: $.Z.Messages.SCREENSHARE_FRAME_RATE,
                                className: hn().settingsGroup,
                                titleClassName: Q().formItemTitleSlim,
                                children: x
                            })]
                        }), b ? (0, r.jsx)(fn, {
                            onClose: n,
                            openStreamUpsellModal: In
                        }) : null]
                    });
                return (0, r.jsx)(m.Z, On(bn({}, I), {
                    children: (0, r.jsx)(u.FormItem, {
                        title: $.Z.Messages.STREAM_QUALITY,
                        titleClassName: Q().formItemTitle,
                        className: Q().modalContent,
                        children: (0, r.jsxs)("div", {
                            className: hn().qualitySettingsContainer,
                            children: [(0, r.jsx)(u.SingleSelect, {
                                value: t,
                                className: gn().marginTop8,
                                options: j,
                                onChange: function(e) {
                                    return d(e)
                                }
                            }), Z]
                        })
                    })
                }))
            }
            var An = t(485081);

            function Rn(e, n, t) {
                return null == n ? e : t.find((function(e) {
                    return (0, An.Z)(n.id, e.windowHandle)
                }))
            }
            var Zn = t(915782),
                Tn = t.n(Zn);

            function Mn(e) {
                var n = e.selectedSource,
                    t = e.selectSource,
                    l = e.sourceChanged,
                    o = e.onChangeSource,
                    a = (0, s.e7)([C.ZP, _.Z], (function() {
                        return (0, x.ED)() ? (0, T.Z)(C.ZP, _.Z) : null
                    })),
                    i = (0, s.e7)([S.Z], (function() {
                        return null != (null == a ? void 0 : a.id) ? S.Z.getGame(a.id) : null
                    })),
                    c = (0, s.e7)([C.ZP], (function() {
                        return C.ZP.getRunningGames()
                    })),
                    d = (0, s.Wu)([S.Z], (function() {
                        return c.map((function(e) {
                            return null != e.id ? S.Z.getGame(e.id) : null
                        })).filter(pe.lm)
                    }), [c]),
                    f = null;
                null != n ? f = n.name : null != a && (f = a.name);
                if (null == f) return null;
                var m = Rn(a, n, c),
                    h = l ? d.find((function(e) {
                        return e.id === (null == m ? void 0 : m.id)
                    })) : i,
                    p = null != n && n.id.startsWith("screen") ? se.Z : he;
                return (0, r.jsx)(u.FormItem, {
                    title: $.Z.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
                    className: Q().modalContent,
                    titleClassName: Q().formItemTitleVerySlim,
                    children: (0, r.jsxs)(Xe, {
                        children: [null != h ? (0, r.jsx)(ae.Z, {
                            game: h,
                            size: ae.Z.Sizes.XSMALL,
                            className: Tn().selectedIcon
                        }) : (0, r.jsx)(p, {
                            className: Tn().selectedIcon
                        }), (0, r.jsx)("span", {
                            className: Tn().ellipsisText,
                            children: f
                        }), t ? (0, r.jsx)(u.Button, {
                            className: Tn().changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: o,
                            children: $.Z.Messages.CHANGE
                        }) : null]
                    })
                })
            }

            function Ln(e) {
                var n = e.onChange,
                    t = e.guildId,
                    l = (0, s.e7)([v.Z], (function() {
                        return v.Z.getGuild(t)
                    }));
                if (null == l) {
                    n();
                    return null
                }
                return (0, r.jsx)(u.FormItem, {
                    title: $.Z.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
                    className: Q().modalContent,
                    titleClassName: Q().formItemTitle,
                    children: (0, r.jsxs)(Xe, {
                        children: [(0, r.jsx)(ie.Z, {
                            guild: l,
                            size: ie.Z.Sizes.SMALLER,
                            className: Tn().selectedIcon
                        }), (0, r.jsx)("span", {
                            className: Tn().ellipsisText,
                            children: l.toString()
                        }), (0, r.jsx)(u.Button, {
                            className: Tn().changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: n,
                            children: $.Z.Messages.CHANGE
                        })]
                    })
                })
            }

            function Pn(e) {
                var n = e.text;
                return (0, r.jsxs)(y.Z, {
                    align: y.Z.Align.CENTER,
                    className: Tn().warning,
                    children: [(0, r.jsx)(ue.Z, {
                        className: Tn().warningIcon
                    }), (0, r.jsx)(u.Text, {
                        color: "none",
                        variant: "text-xs/normal",
                        children: n
                    })]
                })
            }

            function wn(e) {
                var n, t = e.guildId,
                    o = (0, s.e7)([oe.Z], (function() {
                        return null !== (n = oe.Z.getMemberCount(t)) && void 0 !== n ? n : 0
                    })),
                    a = le.eo.useSetting(),
                    i = l.useCallback((function(e, n) {
                        le.eo.updateSetting(n);
                        N.default.track(Y.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
                            value: n
                        })
                    }), []);
                return o >= 2 && o <= be.tB ? (0, r.jsx)(u.FormItem, {
                    className: L()(Q().modalContent, Tn().checkboxRow),
                    children: (0, r.jsx)(u.Checkbox, {
                        value: !!a,
                        type: u.Checkbox.Types.INVERTED,
                        onChange: i,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: $.Z.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
                        })
                    })
                }) : null
            }

            function Dn(e) {
                var n = e.selectedSource,
                    t = e.selectedFPS,
                    o = e.selectedChannelId,
                    a = e.selectedPreset,
                    i = e.selectedResolution,
                    u = e.sourceChanged,
                    c = e.guildId,
                    d = e.selectSource,
                    f = e.selectGuild,
                    m = e.onClose,
                    h = e.onChangeSelectedFPS,
                    p = e.onChangeSelectedResolution,
                    S = e.onChangeSelectedPreset,
                    v = e.onChangeSelectedChannelId,
                    C = e.onChangeSource,
                    _ = e.onChangeGuild,
                    y = e.transitionState,
                    I = (0, s.e7)([b.Z, g.Z], (function() {
                        return g.Z.getChannel(b.Z.getVoiceChannelId())
                    })),
                    N = (0, s.e7)([ge.Z], (function() {
                        return ge.Z.GPUDriversOutdated
                    })),
                    j = (0, s.e7)([E.Z], (function() {
                        return E.Z.getSoundshareEnabled()
                    })),
                    A = (0, s.e7)([O.default], (function() {
                        return O.default.getCurrentUser()
                    })),
                    R = (0, D.fH)(c, "go_live_modal", !0),
                    Z = E.Z.supports(Oe.AN.SOUNDSHARE) ? (0, x.ED)() && !ve().satisfies(null === Ce.Z || void 0 === Ce.Z ? void 0 : Ce.Z.os.release, be.I9) ? $.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE : (0,
                        x.V5)() && !ve().satisfies(null === Ce.Z || void 0 === Ce.Z ? void 0 : Ce.Z.os.release, be.Ec) ? $.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE : null : Ee.GO_LIVE_SCREENSHARE_NO_SOUND;
                null != n && n.id.startsWith("screen") ? Z = $.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND : null == Z && E.Z.supportsEnableSoundshare() && j !== Y.rtk.ENABLED && (Z = $.Z.Messages.GO_LIVE_SCREENSHARE_ENABLE_FOR_SOUNDSHARE.format({
                    onVoiceSettingsClick: function() {
                        m();
                        P.Z.open(Y.oAB.VOICE)
                    }
                }));
                var T = Boolean(null == n ? void 0 : n.id.startsWith("camera")),
                    M = null != A && A.verified && !A.bot,
                    L = null != I && !(0, w.Yk)(I),
                    G = M && L;
                return (0, r.jsxs)(l.Fragment, {
                    children: [(0, r.jsx)(Mn, {
                        selectSource: d,
                        sourceChanged: u,
                        onChangeSource: C,
                        selectedSource: n
                    }), null != Z ? (0, r.jsx)(Pn, {
                        text: Z
                    }) : null, f && null != c ? (0, r.jsx)(Ln, {
                        guildId: c,
                        onChange: _
                    }) : null, null != I ? (0, r.jsx)(qe, {
                        channel: I
                    }) : (0, r.jsx)(Ke, {
                        guildId: c,
                        selectedChannelId: o,
                        onChangeSelectedChannelId: v
                    }), null != c && G ? (0, r.jsx)(wn, {
                        guildId: c
                    }) : null, N ? (0, r.jsx)(Pn, {
                        text: $.Z.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
                    }) : null, (0,
                        r.jsx)(jn, {
                        selectedPreset: a,
                        selectedFPS: t,
                        selectedResolution: i,
                        guildId: c,
                        onClose: m,
                        onFPSChange: h,
                        onResolutionChange: p,
                        onPresetChange: S,
                        captureDeviceSelected: T
                    }), R ? (0, r.jsx)(re, {
                        transitionState: y,
                        guildId: c
                    }) : null]
                })
            }
            var Gn = t(496486),
                Un = t.n(Gn),
                kn = t(107218),
                Bn = t(718831),
                Fn = t(614272),
                Vn = t.n(Fn);

            function Hn(e) {
                var n = e.guildId,
                    t = e.onClick,
                    l = (0, s.e7)([v.Z], (function() {
                        return v.Z.getGuild(n)
                    })),
                    o = (0, s.e7)([_e.ZP, v.Z, ye.Z], (function() {
                        return _e.ZP.getChannels(n)[_e.Zb].some((function(e) {
                            var n = e.channel;
                            return (0, Ne.JL)(n, v.Z, ye.Z)
                        }))
                    }));
                return null != l && o ? (0, r.jsxs)(u.Clickable, {
                    onClick: function() {
                        return t(n)
                    },
                    className: Vn().guildRow,
                    children: [(0, r.jsx)(ie.Z, {
                        guild: l,
                        size: ie.Z.Sizes.SMALL,
                        className: Vn().guildIcon
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        className: Vn().guildName,
                        children: l.toString()
                    }), (0, r.jsx)(Bn.Z, {
                        direction: Bn.Z.Directions.RIGHT,
                        className: Vn().guildArrow
                    })]
                }) : null
            }

            function Wn(e) {
                var n = e.onSelectGuild,
                    t = (0, s.e7)([kn.Z], (function() {
                        return kn.Z.getGuildFolders()
                    }));
                return (0,
                    r.jsx)(He, {
                    title: $.Z.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
                    scrollerClassName: L()(Vn().guildScroller, Q().marginBottom),
                    children: Un().flatMap(t, (function(e) {
                        return e.guildIds.map((function(e) {
                            return (0, r.jsx)(Hn, {
                                guildId: e,
                                onClick: n
                            }, e)
                        }))
                    }))
                })
            }
            const zn = new Uint32Array(65536),
                Kn = (e, n) => {
                    if (e.length < n.length) {
                        const t = n;
                        n = e;
                        e = t
                    }
                    return 0 === n.length ? e.length : e.length <= 32 ? ((e, n) => {
                        const t = e.length,
                            r = n.length,
                            l = 1 << t - 1;
                        let o = -1,
                            a = 0,
                            i = t,
                            s = t;
                        for (; s--;) zn[e.charCodeAt(s)] |= 1 << s;
                        for (s = 0; s < r; s++) {
                            let e = zn[n.charCodeAt(s)];
                            const t = e | a;
                            e |= (e & o) + o ^ o;
                            a |= ~(e | o);
                            o &= e;
                            a & l && i++;
                            o & l && i--;
                            a = a << 1 | 1;
                            o = o << 1 | ~(t | a);
                            a &= t
                        }
                        s = t;
                        for (; s--;) zn[e.charCodeAt(s)] = 0;
                        return i
                    })(e, n) : ((e, n) => {
                        const t = n.length,
                            r = e.length,
                            l = [],
                            o = [],
                            a = Math.ceil(t / 32),
                            i = Math.ceil(r / 32);
                        for (let e = 0; e < a; e++) {
                            o[e] = -1;
                            l[e] = 0
                        }
                        let s = 0;
                        for (; s < i - 1; s++) {
                            let a = 0,
                                i = -1;
                            const u = 32 * s,
                                c = Math.min(32, r) + u;
                            for (let n = u; n < c; n++) zn[e.charCodeAt(n)] |= 1 << n;
                            for (let e = 0; e < t; e++) {
                                const t = zn[n.charCodeAt(e)],
                                    r = o[e / 32 | 0] >>> e & 1,
                                    s = l[e / 32 | 0] >>> e & 1,
                                    u = t | a,
                                    c = ((t | s) & i) + i ^ i | t | s;
                                let d = a | ~(c | i),
                                    f = i & c;
                                d >>> 31 ^ r && (o[e / 32 | 0] ^= 1 << e);
                                f >>> 31 ^ s && (l[e / 32 | 0] ^= 1 << e);
                                d = d << 1 | r;
                                f = f << 1 | s;
                                i = f | ~(u | d);
                                a = d & u
                            }
                            for (let n = u; n < c; n++) zn[e.charCodeAt(n)] = 0
                        }
                        let u = 0,
                            c = -1;
                        const d = 32 * s,
                            f = Math.min(32, r - d) + d;
                        for (let n = d; n < f; n++) zn[e.charCodeAt(n)] |= 1 << n;
                        let m = r;
                        for (let e = 0; e < t; e++) {
                            const t = zn[n.charCodeAt(e)],
                                a = o[e / 32 | 0] >>> e & 1,
                                i = l[e / 32 | 0] >>> e & 1,
                                s = t | u,
                                d = ((t | i) & c) + c ^ c | t | i;
                            let f = u | ~(d | c),
                                h = c & d;
                            m += f >>> r - 1 & 1;
                            m -= h >>> r - 1 & 1;
                            f >>> 31 ^ a && (o[e / 32 | 0] ^= 1 << e);
                            h >>> 31 ^ i && (l[e / 32 | 0] ^= 1 << e);
                            f = f << 1 | a;
                            h = h << 1 | i;
                            c = h | ~(s | f);
                            u = f & s
                        }
                        for (let n = d; n < f; n++) zn[e.charCodeAt(n)] = 0;
                        return m
                    })(e, n)
                };
            var Yn = t(12061),
                $n = t(15086),
                Jn = t(513328),
                Xn = t(875700),
                qn = t(495726),
                Qn = t.n(qn);

            function et(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function nt(e) {
                nt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return nt(e)
            }

            function tt(e, n) {
                return !n || "object" !== ot(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function rt(e, n) {
                rt = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return rt(e, n)
            }
            var lt, ot = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function at(e) {
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
                    var t, r = nt(e);
                    if (n) {
                        var l = nt(this).constructor;
                        t = Reflect.construct(r, arguments, l)
                    } else t = r.apply(this, arguments);
                    return tt(this, t)
                }
            }! function(e) {
                e.WRAP = "wrap";
                e.STACK = "stack"
            }(lt || (lt = {}));
            var it = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && rt(e, n)
                }(t, e);
                var n = at(t);

                function t() {
                    et(this, t);
                    return n.apply(this, arguments)
                }
                var l = t.prototype;
                l.renderChildren = function() {
                    var e, n = this.props,
                        t = n.children,
                        l = n.layout,
                        o = n.columns;
                    switch (l) {
                        case lt.STACK:
                            e = "100%";
                            break;
                        case lt.WRAP:
                            e = "".concat(1 / o * 100, "%")
                    }
                    return t.map((function(n, t) {
                        return (0, r.jsx)(y.Z.Child, {
                            className: Qn().tile,
                            basis: e,
                            grow: 0,
                            children: n
                        }, t)
                    }))
                };
                l.render = function() {
                    var e = this.props.className;
                    return (0, r.jsx)(y.Z, {
                        className: L()(e, Qn().grid),
                        wrap: y.Z.Wrap.WRAP,
                        children: this.renderChildren()
                    })
                };
                return t
            }(l.PureComponent);
            it.Layout = lt;
            it.defaultProps = {
                children: [],
                layout: lt.WRAP,
                columns: 4
            };
            const st = it;
            const ut = (0, en.B)({
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
            var ct = t(139273),
                dt = t.n(ct);

            function ft(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function mt(e, n, t, r, l, o, a) {
                try {
                    var i = e[o](a),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, l)
            }

            function ht(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, l) {
                        var o = e.apply(n, t);

                        function a(e) {
                            mt(o, r, l, a, i, "next", e)
                        }

                        function i(e) {
                            mt(o, r, l, a, i, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function pt(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function gt(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, l, o = [],
                            a = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            l = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (i) throw l
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return ft(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ft(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var St = function(e, n) {
                var t, r, l, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & l[0]) throw l[1];
                        return l[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function i(o) {
                    return function(i) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (l = 2 & o[0] ? r.return : o[0] ? r.throw || ((l = r.return) && l.call(r), 0) : r.next) && !(l = l.call(r, o[1])).done) return l;
                                (r = 0, l) && (o = [2 & o[0], l.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        l = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(l = a.trys, l = l.length > 0 && l[l.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!l || o[1] > l[0] && o[1] < l[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < l[1]) {
                                            a.label = l[1];
                                            l = o;
                                            break
                                        }
                                        if (l && a.label < l[2]) {
                                            a.label = l[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        l[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = l = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, i])
                    }
                }
            };

            function vt(e, n) {
                var t = {};
                n.forEach((function(e) {
                    t[e.id] = e
                }));
                e.forEach((function(e) {
                    t[e.id] = e
                }));
                return Object.values(t).sort((function(e, n) {
                    return _t(n) - _t(e)
                }))
            }

            function Et() {
                return Ct.apply(this, arguments)
            }

            function Ct() {
                return (Ct = ht((function() {
                    var e, n, t, r, l, o, a;
                    return St(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                e = E.Z.getVideoDevices();
                                n = (0, $n.Z)(E.Z.getMediaEngine(), [Yn.vA.WINDOW, Yn.vA.SCREEN], {
                                    width: 176,
                                    height: 99
                                });
                                return [4, bt()];
                            case 1:
                                t = i.sent();
                                return [4, n];
                            case 2:
                                r = i.sent();
                                l = r.filter((function(e) {
                                    return e.id.startsWith(Yn.vA.SCREEN)
                                }));
                                o = vt(r.filter((function(e) {
                                    return e.id.startsWith(Yn.vA.WINDOW)
                                })), t);
                                a = Object.entries(e).map((function(e) {
                                    var n = gt(e, 2),
                                        t = (n[0], n[1]);
                                    return {
                                        id: "camera:" + t.id,
                                        name: t.name,
                                        url: ""
                                    }
                                }));
                                return [2, {
                                    windowSources: o,
                                    screenSources: l,
                                    cameraSources: a
                                }]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function bt() {
                return Ot.apply(this, arguments)
            }

            function Ot() {
                Ot = ht((function() {
                    var e;
                    return St(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                e = C.ZP.getRunningGames();
                                return [4, Promise.all(e.map((t = ht((function(e) {
                                    var n, t, r, l;
                                    return St(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                if (null == e.name) return [2, null];
                                                o.label = 1;
                                            case 1:
                                                o.trys.push([1, 3, , 4]);
                                                return [4, Xn.Z.identifyGame(e.pid, e.name)];
                                            case 2:
                                                n = o.sent();
                                                return [3, 4];
                                            case 3:
                                                o.sent();
                                                return [2, null];
                                            case 4:
                                                t = e.windowHandle;
                                                r = e.name;
                                                l = n.icon;
                                                return null != t && null != r && null != l ? [2, {
                                                    id: "window:".concat(t),
                                                    name: r,
                                                    url: "data:image/bmp;base64,".concat(l)
                                                }] : [2, null]
                                        }
                                    }))
                                })), function(e) {
                                    return t.apply(this, arguments)
                                })))];
                            case 1:
                                return [2, n.sent().filter((function(e) {
                                    return null !== e
                                }))]
                        }
                        var t
                    }))
                }));
                return Ot.apply(this, arguments)
            }

            function _t(e) {
                var n = (0, x.ED)() ? (0, T.Z)(C.ZP, _.Z) : null,
                    t = C.ZP.getRunningGames();
                return null != n && (0, An.Z)(e.id, n.windowHandle) ? 2 : null != t.find((function(n) {
                    return (0, An.Z)(e.id, n.windowHandle)
                })) ? 1 : 0
            }

            function yt(e) {
                var n = e.selectedSource,
                    t = e.onChangeSelectedSource,
                    o = ut.useExperiment({
                        location: "c06dcc_1"
                    }).enableGoLiveCaptureCard,
                    a = E.Z.supports(Oe.AN.GO_LIVE_HARDWARE),
                    i = gt(l.useState(null), 2),
                    c = i[0],
                    d = i[1],
                    f = gt(l.useState(null), 2),
                    m = f[0],
                    h = f[1],
                    p = gt(l.useState(null), 2),
                    g = p[0],
                    S = p[1],
                    v = gt(l.useState(null), 2),
                    C = v[0],
                    b = v[1],
                    O = gt(l.useState(null), 2),
                    _ = O[0],
                    I = O[1],
                    N = gt(l.useState(!1), 2),
                    x = N[0],
                    j = N[1],
                    A = gt(l.useState(Yn.vA.WINDOW), 2),
                    R = A[0],
                    Z = A[1],
                    T = gt(l.useState(!1), 2),
                    M = T[0],
                    P = T[1],
                    w = l.useRef(null),
                    D = l.useRef(new Jn.Xp),
                    G = (0, s.e7)([E.Z], (function() {
                        return E.Z.getInputDevices()
                    }));
                l.useEffect((function() {
                    var e = D.current;
                    Et().then((function(n) {
                        var t = n.screenSources,
                            r = n.windowSources,
                            l = n.cameraSources;
                        d(t);
                        h(r);
                        S(l);
                        e.start(1e3, ht((function() {
                            var e, n, t, r;
                            return St(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, Et()];
                                    case 1:
                                        e = l.sent(), n = e.screenSources, t = e.windowSources, r = e.cameraSources;
                                        d(n);
                                        h(t);
                                        S(r);
                                        return [2]
                                }
                            }))
                        })))
                    }));
                    return function() {
                        e.stop()
                    }
                }), []);
                var U = l.useCallback((function(e) {
                        if (null !== e) {
                            w.current = e;
                            var n;
                            P(null !== (n = !e.isScrolledToTop()) && void 0 !== n && n)
                        }
                    }), []),
                    k = function(e) {
                        switch (e) {
                            case Yn.vA.WINDOW:
                                return m;
                            case Yn.vA.SCREEN:
                                return c;
                            case Yn.vA.CAMERA:
                                return g
                        }
                    }(R);
                if (null == k) return (0, r.jsx)(y.Z, {
                    className: dt().spinner,
                    justify: y.Z.Justify.CENTER,
                    align: y.Z.Align.CENTER,
                    children: (0, r.jsx)(u.Spinner, {})
                });
                var B = k.map((function(e) {
                    var l = e.id,
                        o = e.name,
                        a = e.url,
                        i = (null == n ? void 0 : n.id) === l;
                    return (0, r.jsx)(u.Clickable, {
                        className: L()(dt().tile, pt({}, dt().selected, i)),
                        onClick: function() {
                            return t(e, null)
                        },
                        children: (0, r.jsxs)(y.Z, {
                            direction: y.Z.Direction.VERTICAL,
                            justify: y.Z.Justify.CENTER,
                            align: y.Z.Align.CENTER,
                            children: [(0, r.jsx)(y.Z, {
                                justify: y.Z.Justify.CENTER,
                                align: y.Z.Align.CENTER,
                                children: (0, r.jsx)("div", {
                                    style: {
                                        backgroundImage: "url(".concat(a, ")")
                                    },
                                    className: L()(dt().sourceThumbnail, pt({}, dt().selected, i))
                                })
                            }), (0, r.jsx)(u.Text, {
                                className: L()(dt().sourceName, pt({}, dt().selected, i)),
                                variant: "text-sm/normal",
                                children: o
                            })]
                        })
                    }, l)
                }));
                return (0, r.jsxs)(l.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: dt().segmentContainer,
                        children: [(0, r.jsx)(Ge, {
                            separator: M
                        }), (0, r.jsx)(u.SegmentedControl, {
                            options: function() {
                                var e = [{
                                    name: $.Z.Messages.GO_LIVE_MODAL_APPLICATIONS,
                                    value: Yn.vA.WINDOW
                                }, {
                                    name: $.Z.Messages.GO_LIVE_MODAL_SCREENS,
                                    value: Yn.vA.SCREEN
                                }];
                                o && a && e.push({
                                    name: $.Z.Messages.GO_LIVE_MODAL_CAPTURE,
                                    value: Yn.vA.CAMERA
                                });
                                return e
                            }(),
                            value: R,
                            onChange: function(e) {
                                var n = e.value;
                                return Z(n)
                            },
                            className: dt().segmentControl,
                            optionClassName: dt().segmentControlOption
                        })]
                    }), R === Yn.vA.CAMERA ? (0, r.jsxs)("div", {
                        className: dt().sourceContainer,
                        children: [(0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "text-normal",
                            children: $.Z.Messages.GO_LIVE_MODAL_CAPTURE_DESCRIPTION
                        }), (0, r.jsx)(u.FormItem, {
                            title: $.Z.Messages.GO_LIVE_FORM_LABEL_VIDEO_DEVICE,
                            className: gn().marginBottom20,
                            children: (0, r.jsx)(u.SingleSelect, {
                                value: _,
                                onChange: function(e) {
                                    return function(e) {
                                        I(e);
                                        if (!x && null != g && null != G) {
                                            var n = g.find((function(n) {
                                                return n.id === e
                                            }));
                                            if (null == n) return;
                                            var t = Un().reduce(G, (function(e, t) {
                                                return Kn(n.name, t.name) < Kn(n.name, e.name) ? t : e
                                            }));
                                            if (null == t) return;
                                            b(t.id)
                                        }
                                    }(e)
                                },
                                options: Un().map(g, (function(e) {
                                    return {
                                        value: e.id,
                                        label: e.name
                                    }
                                }))
                            })
                        }), (0, r.jsx)(u.FormItem, {
                            title: $.Z.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
                            className: gn().marginBottom20,
                            children: (0, r.jsx)(u.SingleSelect, {
                                value: C,
                                onChange: function(e) {
                                    return function(e) {
                                        j(!0);
                                        b(e)
                                    }(e)
                                },
                                options: Un().map(G, (function(e) {
                                    return {
                                        value: e.id,
                                        label: e.name
                                    }
                                }))
                            })
                        }), (0, r.jsx)(u.Button, {
                            onClick: function() {
                                var e = null == g ? void 0 : g.find((function(e) {
                                    return e.id === _
                                }));
                                t(null != e ? e : null, C)
                            },
                            children: $.Z.Messages.GO_LIVE_FORM_BUTTON_CAMERA_READY
                        })]
                    }) : (0,
                        r.jsx)(u.AdvancedScroller, {
                        ref: U,
                        className: dt().sourceScroller,
                        onScroll: function() {
                            var e = w.current;
                            null != e && P(!e.isScrolledToTop())
                        },
                        children: (0, r.jsx)(st, {
                            layout: st.Layout.WRAP,
                            columns: 2,
                            className: dt().sourceContainer,
                            children: B
                        })
                    })]
                })
            }
            var It = t(785915);

            function Nt(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function xt(e, n, t, r, l, o, a) {
                try {
                    var i = e[o](a),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, l)
            }

            function jt(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, l) {
                        var o = e.apply(n, t);

                        function a(e) {
                            xt(o, r, l, a, i, "next", e)
                        }

                        function i(e) {
                            xt(o, r, l, a, i, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function At(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Rt(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        At(e, n, t[n])
                    }))
                }
                return e
            }

            function Zt(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function Tt(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, l, o = [],
                            a = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            l = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (i) throw l
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Nt(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Nt(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Mt, Lt = function(e, n) {
                var t, r, l, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & l[0]) throw l[1];
                        return l[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function i(o) {
                    return function(i) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (l = 2 & o[0] ? r.return : o[0] ? r.throw || ((l = r.return) && l.call(r),
                                        0) : r.next) && !(l = l.call(r, o[1])).done) return l;
                                (r = 0, l) && (o = [2 & o[0], l.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        l = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(l = a.trys, l = l.length > 0 && l[l.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!l || o[1] > l[0] && o[1] < l[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < l[1]) {
                                            a.label = l[1];
                                            l = o;
                                            break
                                        }
                                        if (l && a.label < l[2]) {
                                            a.label = l[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        l[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = l = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, i])
                    }
                }
            };
            ! function(e) {
                e[e.GUILD = 0] = "GUILD";
                e[e.SOURCE = 1] = "SOURCE";
                e[e.CONFIRM = 2] = "CONFIRM"
            }(Mt || (Mt = {}));

            function Pt(e, n) {
                N.default.track(Y.rMx.SCREENSHARE_FAILED, {
                    source_id: e,
                    screens: n.length
                })
            }

            function wt(e) {
                var n, o = e.selectGuild,
                    M = void 0 !== o && o,
                    L = e.selectSource,
                    P = void 0 === L || L,
                    w = e.guildId,
                    D = e.analyticsLocation,
                    G = e.onClose,
                    U = e.transitionState,
                    k = function() {
                        ! function() {
                            a()(null != K || null != he, "got nothing to stream");
                            var e, n = null !== (e = null == z ? void 0 : z.id) && void 0 !== e ? e : de;
                            a()(null != n, "Received null target channel ID");
                            var t, r = g.Z.getChannel(n),
                                l = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : w;
                            null == z && d.default.selectVoiceChannel(n);
                            var o = Ce,
                                i = _e,
                                s = Ne;
                            if (!(0, A.Z)(o, i, s, J, X)) {
                                o = R.tI.PRESET_VIDEO;
                                i = R.LY.RESOLUTION_720;
                                s = R.ws.FPS_30
                            }(0, f.Rc)({
                                preset: o,
                                resolution: i,
                                frameRate: s
                            });
                            var u = Rn(K, he, C.ZP.getRunningGames()),
                                m = !(0, x.ED)() || null == u || (null == he ? void 0 : he.id.startsWith("camera:")) || null == u ? null : u.pid;
                            (0, f.WH)(l, n, {
                                pid: m,
                                sourceId: null == m && null != he ? he.id : null,
                                sourceName: null == m && null != he ? he.name : null,
                                audioSourceId: Se
                            });
                            jt((function() {
                                return Lt(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, h.Z.hasPermission(It.Eu.SCREEN_RECORDING, {
                                                showAuthorizationError: !1
                                            })];
                                        case 1:
                                            e.sent() || c.Z.show({
                                                title: $.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                                                body: $.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
                                            });
                                            return [2]
                                    }
                                }))
                            }))()
                        }();
                        G()
                    },
                    B = function() {
                        var e, n = null !== (e = null == K ? void 0 : K.pid) && void 0 !== e ? e : null;
                        (0, u.openModalLazy)(jt((function() {
                            var e, l;
                            return Lt(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, t.e(43315).then(t.bind(t, 543315))];
                                    case 1:
                                        e = o.sent(), l = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(l, Zt(Rt({}, e), {
                                                handleStream: k,
                                                pid: n
                                            }))
                                        }]
                                }
                            }))
                        })))
                    },
                    F = (0, s.cj)([p.Z], (function() {
                        return p.Z.getState()
                    })),
                    V = F.preset,
                    H = F.resolution,
                    W = F.fps,
                    z = (0, s.e7)([b.Z, g.Z], (function() {
                        return g.Z.getChannel(b.Z.getVoiceChannelId())
                    })),
                    K = (0, s.e7)([C.ZP, _.Z], (function() {
                        return (0, x.ED)() ? (0, T.Z)(C.ZP, _.Z) : null
                    })),
                    J = (0, s.e7)([O.default], (function() {
                        var e = O.default.getCurrentUser();
                        a()(null != e, "GoLiveModal: user cannot be undefined");
                        return e
                    })),
                    X = (0, s.e7)([v.Z], (function() {
                        var e;
                        return null === (e = v.Z.getGuild(w)) || void 0 === e ? void 0 : e.premiumTier
                    })),
                    q = Tt(null !== (n = Z(V, J, X)) && void 0 !== n ? n : [R.LY.RESOLUTION_720, R.ws.FPS_30], 2),
                    ee = q[0],
                    ne = q[1];
                if (V !== R.tI.PRESET_CUSTOM) {
                    H = ee;
                    W = ne
                }
                var te, re = (0, I.Dt)(),
                    le = Tt(l.useState(function(e, n) {
                        return e ? Mt.GUILD : n ? Mt.SOURCE : Mt.CONFIRM
                    }(M, P)), 2),
                    oe = le[0],
                    ae = le[1],
                    ie = Tt(l.useState(!1), 2),
                    se = ie[0],
                    ue = ie[1],
                    ce = Tt(l.useState(null), 2),
                    de = ce[0],
                    fe = ce[1],
                    me = Tt(l.useState(null), 2),
                    he = me[0],
                    pe = me[1],
                    ge = Tt(l.useState(null), 2),
                    Se = ge[0],
                    ve = ge[1],
                    Ee = Tt(l.useState(V), 2),
                    Ce = Ee[0],
                    be = Ee[1],
                    Oe = Tt(l.useState(H), 2),
                    _e = Oe[0],
                    ye = Oe[1],
                    Ie = Tt(l.useState(W), 2),
                    Ne = Ie[0],
                    xe = Ie[1],
                    je = Tt(l.useState(null != w ? w : null), 2),
                    Ae = je[0],
                    Re = je[1],
                    Ze = null !== (te = null == z ? void 0 : z.id) && void 0 !== te ? te : de;
                l.useEffect((function() {
                    var e = (0, x.ED)() ? (0, T.Z)(C.ZP, _.Z) : null,
                        n = null != (null == e ? void 0 : e.id) ? S.Z.getGame(e.id) : null;
                    N.default.track(Y.rMx.OPEN_MODAL, {
                        type: "Go Live Modal",
                        application_id: null == n ? void 0 : n.id,
                        application_name: null == e ? void 0 : e.name,
                        game_id: null == n ? void 0 : n.id,
                        location_section: D
                    })
                }), [D]);
                var Te = l.useCallback((function(e, n, t) {
                    var r = Z(e, J, X),
                        l = Tt(null != r ? r : [n, t], 2),
                        o = l[0],
                        a = l[1];
                    if (e !== Ce) {
                        n = o;
                        t = a
                    }
                    if (!(0, A.Z)(e, n, t, J, X)) {
                        var i = Tt(Z(R.tI.PRESET_VIDEO, J, X), 2);
                        n = i[0];
                        t = i[1]
                    }
                    t !== Ne && xe(t);
                    n !== _e && ye(n);
                    o !== n || a !== t ? be(R.tI.PRESET_CUSTOM) : e !== Ce && be(e)
                }), [J, X, Ne, _e, Ce]);

                function Me() {
                    return (Me = jt((function(e) {
                        var n, t, l, o;
                        return Lt(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    e.preventDefault();
                                    if (oe === Mt.SOURCE) return [2, ae(Mt.CONFIRM)];
                                    n = Rn(K, he, C.ZP.getRunningGames());
                                    t = j.ZP.supportsFeature(Y.eRX.ELEVATED_HOOK) && (null == n ? void 0 : n.elevated);
                                    return (0, x.V5)() && null != he ? [4, E.Z.getMediaEngine().getDesktopSources()] : [3, 2];
                                case 1:
                                    l = a.sent();
                                    if ((o = he.id).startsWith("screen") && l.length > 0 && !l.some((function(e) {
                                            return e.includes(o)
                                        }))) {
                                        Pt(o, l);
                                        (0, u.openModal)((function(e) {
                                            return (0, r.jsx)(u.ConfirmModal, Zt(Rt({
                                                header: $.Z.Messages.SCREENSHARE_RELAUNCH,
                                                confirmText: $.Z.Messages.OKAY,
                                                cancelText: $.Z.Messages.CANCEL,
                                                onConfirm: function() {
                                                    return j.ZP.relaunch()
                                                }
                                            }, e), {
                                                children: (0, r.jsx)(u.Text, {
                                                    variant: "text-md/normal",
                                                    children: $.Z.Messages.SCREENSHARE_RELAUNCH_BODY
                                                })
                                            }))
                                        }));
                                        return [2]
                                    }
                                    a.label = 2;
                                case 2:
                                    t ? B() : k();
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                var Le = l.useCallback((function(e, n) {
                        pe(e);
                        ve(n);
                        if (null != e) {
                            ae(Mt.CONFIRM);
                            ue(!0)
                        }
                    }), []),
                    Pe = l.useCallback((function(e) {
                        Re(e);
                        ae(P ? Mt.SOURCE : Mt.CONFIRM)
                    }), [P]),
                    we = function(e) {
                        switch (e) {
                            case Mt.SOURCE:
                                return $.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
                            case Mt.CONFIRM:
                                return null;
                            case Mt.GUILD:
                            default:
                                return $.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
                        }
                    }(oe),
                    De = (0, r.jsx)(u.ModalHeader, {
                        className: Q().modalHeader,
                        separator: !1,
                        children: (0, r.jsxs)(y.Z, {
                            direction: y.Z.Direction.VERTICAL,
                            align: y.Z.Align.CENTER,
                            className: Q().header,
                            children: [(0, r.jsx)(u.Heading, {
                                variant: "heading-xl/semibold",
                                id: re,
                                className: Q().headerText,
                                children: $.Z.Messages.GO_LIVE_MODAL_TITLE
                            }), null != we ? (0, r.jsx)(u.Text, {
                                className: Q().headerDescription,
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: we
                            }) : null]
                        })
                    }),
                    Ge = (0, r.jsxs)(u.Slides, {
                        springConfig: Zt(Rt({}, i.config.stiff), {
                            clamp: !0
                        }),
                        activeSlide: oe,
                        width: 480,
                        children: [(0, r.jsx)(u.Slide, {
                            id: Mt.GUILD,
                            children: (0, r.jsx)("div", {
                                className: Q().modalSize,
                                children: (0, r.jsx)(Wn, {
                                    onSelectGuild: Pe
                                })
                            })
                        }), (0,
                            r.jsx)(u.Slide, {
                            id: Mt.SOURCE,
                            children: (0, r.jsx)("div", {
                                className: Q().modalSize,
                                children: (0, r.jsx)(yt, {
                                    selectedSource: he,
                                    onChangeSelectedSource: Le
                                })
                            })
                        }), (0, r.jsx)(u.Slide, {
                            id: Mt.CONFIRM,
                            children: (0, r.jsx)("div", {
                                className: Q().modalSize,
                                children: (0, r.jsx)(Dn, {
                                    selectedChannelId: de,
                                    selectedPreset: Ce,
                                    selectedResolution: _e,
                                    selectedSource: he,
                                    selectedFPS: Ne,
                                    sourceChanged: se,
                                    selectSource: P,
                                    onChangeSelectedFPS: function(e) {
                                        return Te(Ce, _e, e)
                                    },
                                    onChangeSelectedResolution: function(e) {
                                        return Te(Ce, e, Ne)
                                    },
                                    onChangeSelectedPreset: function(e) {
                                        return Te(e, _e, Ne)
                                    },
                                    onChangeSelectedChannelId: fe,
                                    onChangeSource: function() {
                                        return ae(Mt.SOURCE)
                                    },
                                    onChangeGuild: function() {
                                        return ae(Mt.GUILD)
                                    },
                                    onClose: G,
                                    guildId: Ae,
                                    selectGuild: M,
                                    transitionState: U
                                })
                            })
                        })]
                    }),
                    Ue = function(e, n, t, r) {
                        switch (e) {
                            case Mt.SOURCE:
                                return n ? Mt.GUILD : null;
                            case Mt.CONFIRM:
                                return r ? Mt.SOURCE : !t && n ? Mt.GUILD : null;
                            case Mt.GUILD:
                            default:
                                return null
                        }
                    }(oe, M, P, se),
                    ke = oe !== Mt.CONFIRM || null == he && null == K || null == Ze,
                    Be = (0, r.jsxs)(u.ModalFooter, {
                        justify: null == Ue ? y.Z.Justify.START : y.Z.Justify.BETWEEN,
                        children: [(0, r.jsx)(u.Button, {
                            type: "submit",
                            size: u.Button.Sizes.SMALL,
                            disabled: ke,
                            autoFocus: !0,
                            children: $.Z.Messages.GO_LIVE_MODAL_CTA
                        }), null == Ue ? (0, r.jsx)(u.Button, {
                            className: Q().cancelButton,
                            look: u.Button.Looks.LINK,
                            size: u.Button.Sizes.SMALL,
                            color: u.ButtonColors.PRIMARY,
                            onClick: G,
                            children: $.Z.Messages.CANCEL
                        }) : (0, r.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            color: u.ButtonColors.PRIMARY,
                            onClick: function() {
                                return ae(Ue)
                            },
                            children: $.Z.Messages.BACK
                        })]
                    });
                return (0, r.jsx)(m.Z, {
                    page: Y.ZY5.GO_LIVE_MODAL,
                    children: (0, r.jsxs)(u.ModalRoot, {
                        "aria-labelledby": re,
                        transitionState: U,
                        size: u.ModalSize.DYNAMIC,
                        className: Q().modalSize,
                        children: [(0, r.jsx)(u.ModalCloseButton, {
                            onClick: G,
                            className: Q().modalCloseButton
                        }), (0, r.jsx)("div", {
                            className: Q().art
                        }), (0, r.jsxs)("form", {
                            onSubmit: function(e) {
                                return Me.apply(this, arguments)
                            },
                            children: [De, Ge, Be]
                        })]
                    })
                })
            }
        },
        68543: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                l = (t(667294),
                    t(294184)),
                o = t.n(l),
                a = t(882723),
                i = t(501438),
                s = t.n(i),
                u = function(e) {
                    var n = e.data,
                        t = e.disabled,
                        l = n.content,
                        i = n.className,
                        u = n.onClick,
                        c = n.disabled;
                    return (0, r.jsx)(a.FocusRing, {
                        children: (0, r.jsx)("button", {
                            type: "button",
                            className: o()(s().item, i),
                            onClick: u,
                            disabled: t || c,
                            children: l
                        })
                    })
                };
            const c = function(e) {
                var n = e.buttons,
                    t = e.disabled,
                    l = e.className;
                return (0, r.jsx)("div", {
                    role: "group",
                    className: o()(s().group, l),
                    children: n.map((function(e, n) {
                        return (0, r.jsx)(u, {
                            data: e,
                            disabled: t
                        }, n)
                    }))
                })
            }
        }
    }
]);
//# sourceMappingURL=70f8a13778fa747ecd57.js.map