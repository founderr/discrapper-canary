"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [33185], {
        533185: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => zt
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
                C = t(525077),
                E = t(671723),
                b = t(715107),
                y = t(473903),
                O = t(375759),
                I = t(107364),
                _ = t(443812),
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
                P = t.n(M),
                L = t(734691),
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
                J = t(473708),
                X = t(616595),
                Q = t.n(X),
                $ = t(753654),
                q = t.n($);

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
                            artClassName: Q().clipsEducationArt,
                            position: "right",
                            header: J.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_TITLE,
                            headerClassName: Q().clipsEducationHeader,
                            body: (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: J.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY
                                }), d ? (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    className: Q().warningText,
                                    children: J.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_HARDWARE_IMPACT_WARNING.format({
                                        url: V.Z.getArticleURL(Y.BhN.CLIPS)
                                    })
                                }) : null]
                            }),
                            tryItText: J.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
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
                    title: J.Z.Messages.CLIPS_SETTINGS,
                    titleClassName: q().formItemTitle,
                    className: q().modalContent,
                    children: (0, r.jsxs)("div", {
                        className: Q().container,
                        children: [(0, r.jsx)(te, {
                            transitionState: n,
                            clipsEnabled: l,
                            guildId: t,
                            children: (0, r.jsx)(u.FormSwitch, {
                                className: Q().formSwitch,
                                value: l,
                                onChange: function(e) {
                                    return (0, K.em)({
                                        clipsEnabled: e,
                                        guildId: t,
                                        trackAnalytics: !0
                                    })
                                },
                                hideBorder: !0,
                                children: J.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
                            })
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "interactive-normal",
                            className: Q().description,
                            children: J.Z.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
                                keybind: i,
                                keybindHook: function() {
                                    return (0, r.jsx)("span", {
                                        className: Q().keybindHintKeys,
                                        children: (0, r.jsx)(u.KeyCombo, {
                                            className: Q().keybindShortcut,
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
                Ce = t(20978),
                Ee = t(306472),
                be = t(443132),
                ye = t(36256);
            const Oe = new Uint32Array(65536),
                Ie = (e, n) => {
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
                        for (; s--;) Oe[e.charCodeAt(s)] |= 1 << s;
                        for (s = 0; s < r; s++) {
                            let e = Oe[n.charCodeAt(s)];
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
                        for (; s--;) Oe[e.charCodeAt(s)] = 0;
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
                            for (let n = u; n < c; n++) Oe[e.charCodeAt(n)] |= 1 << n;
                            for (let e = 0; e < t; e++) {
                                const t = Oe[n.charCodeAt(e)],
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
                            for (let n = u; n < c; n++) Oe[e.charCodeAt(n)] = 0
                        }
                        let u = 0,
                            c = -1;
                        const d = 32 * s,
                            f = Math.min(32, r - d) + d;
                        for (let n = d; n < f; n++) Oe[e.charCodeAt(n)] |= 1 << n;
                        let m = r;
                        for (let e = 0; e < t; e++) {
                            const t = Oe[n.charCodeAt(e)],
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
                        for (let n = d; n < f; n++) Oe[e.charCodeAt(n)] = 0;
                        return m
                    })(e, n)
                };
            var _e = t(496486),
                Ne = t.n(_e),
                xe = t(491264),
                je = t.n(xe);

            function Ae(e) {
                var n = e.children;
                return (0, r.jsx)("div", {
                    className: je().card,
                    children: n
                })
            }

            function Re(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Ze(e, n) {
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
                    if ("string" == typeof e) return Re(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Re(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Te = t(626352),
                Me = t.n(Te),
                Pe = t(518280),
                Le = t.n(Pe);

            function we(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function De(e, n) {
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
                    if ("string" == typeof e) return we(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return we(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ge(e) {
                var n, t = e.selectedSource,
                    o = e.onChangeVideoDeviceSource,
                    a = e.onChangeAudioDevice,
                    i = (n = C.Z.getVideoDevices(), Object.entries(n).map((function(e) {
                        var n = Ze(e, 2),
                            t = (n[0], n[1]);
                        return {
                            id: "camera:" + t.id,
                            name: t.name,
                            url: ""
                        }
                    }))),
                    c = (0, s.e7)([C.Z], (function() {
                        return C.Z.getInputDevices()
                    })),
                    d = De(l.useState(function(e, n, t) {
                        if (null != n && null != t) {
                            var r = n.find((function(n) {
                                return n.id === e
                            }));
                            if (null == r) return;
                            var l = Ne().reduce(t, (function(e, n) {
                                return Ie(r.name, n.name) < Ie(r.name, e.name) ? n : e
                            }));
                            if (null == l) return;
                            return l.id
                        }
                    }(t.id, i, c)), 2),
                    f = d[0],
                    m = d[1];
                null != f && a(f);
                return (0, r.jsx)(l.Fragment, {
                    children: (0, r.jsxs)(u.FormItem, {
                        title: "Capture Device",
                        className: q().modalContent,
                        children: [(0, r.jsx)(u.FormItem, {
                            className: Le().marginTop8,
                            children: (0, r.jsxs)(Ae, {
                                children: [(0, r.jsx)("span", {
                                    className: Me().ellipsisText,
                                    children: t.name
                                }), (0, r.jsx)(u.Button, {
                                    className: Me().changeButton,
                                    color: u.Button.Colors.PRIMARY,
                                    size: u.Button.Sizes.SMALL,
                                    onClick: o,
                                    children: J.Z.Messages.CHANGE
                                })]
                            })
                        }), (0, r.jsx)(u.FormItem, {
                            className: Le().marginTop8,
                            title: J.Z.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
                            children: (0, r.jsx)(u.SingleSelect, {
                                value: f,
                                className: Le().marginaTop8,
                                onChange: function(e) {
                                    m(e);
                                    a(e)
                                },
                                options: Ne().map(c, (function(e) {
                                    return {
                                        value: e.id,
                                        label: e.name
                                    }
                                }))
                            })
                        })]
                    })
                })
            }
            var Ue = t(5544),
                ke = t(682776),
                Be = t(602397),
                Fe = t(924066),
                Ve = t(773011),
                He = t(469023),
                We = t(96606),
                ze = t(773148),
                Ke = t(960767),
                Ye = t.n(Ke);

            function Je(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Xe(e) {
                var n = e.channel,
                    t = e.users,
                    l = e.selected,
                    o = void 0 !== l && l,
                    a = (0, Ve.ZP)(n),
                    i = null;
                if (null != t && t.length > 0) {
                    i = (0, r.jsx)(We.Z, {
                        guildId: n.guild_id,
                        className: Ye().voiceUserList,
                        users: t,
                        renderUser: function(e) {
                            if (null == e) return null;
                            var t = ze.ZP.getName(n.guild_id, n.id, e),
                                l = e.getAvatarURL(n.guild_id, 24);
                            return (0, r.jsx)(u.TooltipContainer, {
                                text: t,
                                children: (0, r.jsx)("img", {
                                    src: null != l ? l : void 0,
                                    "aria-label": e.username,
                                    alt: "",
                                    className: Ye().avatar
                                })
                            })
                        },
                        renderMoreUsers: function(e) {
                            var l = function(e, n) {
                                var t = n.id,
                                    r = n.guild_id;
                                return e.length <= 1 ? null : 2 === e.length ? J.Z.Messages.GO_LIVE_MODAL_OVERFLOW_TWO_USERS.format({
                                    nickname0: ze.ZP.getName(r, t, e[0]),
                                    nickname1: ze.ZP.getName(r, t, e[1])
                                }) : 3 === e.length ? J.Z.Messages.GO_LIVE_MODAL_OVERFLOW_THREE_USERS.format({
                                    nickname0: ze.ZP.getName(r, t, e[0]),
                                    nickname1: ze.ZP.getName(r, t, e[1]),
                                    nickname2: ze.ZP.getName(r, t, e[2])
                                }) : J.Z.Messages.GO_LIVE_MODAL_OVERFLOW_FOUR_OR_MORE_USERS.format({
                                    nickname0: ze.ZP.getName(r, t, e[0]),
                                    nickname1: ze.ZP.getName(r, t, e[1]),
                                    remainingCount: e.length - 2
                                })
                            }(t.slice(4), n);
                            return (0, r.jsx)("div", {
                                children: (0, r.jsx)(u.TooltipContainer, {
                                    text: l,
                                    children: (0, r.jsx)("div", {
                                        className: Ye().userListOverflow,
                                        children: e
                                    })
                                })
                            })
                        },
                        max: 5,
                        showUserPopout: !1
                    })
                }
                var s = (0, He.Z)(n);
                return (0, r.jsxs)("div", {
                    className: P()(Ye().channelInfo, Je({}, Ye().selected, o)),
                    children: [(0, r.jsx)(s, {
                        className: Ye().channelIcon
                    }), (0, r.jsx)("div", {
                        className: Ye().channelName,
                        children: a
                    }), i]
                })
            }
            var Qe = t(202178),
                $e = t.n(Qe);

            function qe(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function en(e) {
                var n = e.separator,
                    t = void 0 !== n && n;
                return (0, r.jsx)("div", {
                    className: P()($e().divider, qe({}, $e().separator, t))
                })
            }
            var nn = t(773358),
                tn = t.n(nn);

            function rn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function ln(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function on(e, n) {
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
                    if ("string" == typeof e) return rn(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return rn(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function an(e) {
                var n = e.title,
                    t = e.scrollerClassName,
                    o = e.scrollerInnerClassName,
                    a = e.children,
                    i = l.useRef(null),
                    s = on(l.useState(!1), 2),
                    c = s[0],
                    d = s[1],
                    f = on(l.useState(!1), 2),
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
                        className: P()(tn().title, tn().scrollWrapper),
                        children: [(0, r.jsx)(u.FormTitle, {
                            className: q().formItemTitle,
                            children: n
                        }), (0, r.jsx)(en, {
                            separator: c
                        })]
                    }), (0, r.jsx)("div", {
                        className: t,
                        children: (0, r.jsx)(u.AdvancedScroller, {
                            ref: i,
                            className: P()(tn().scrollerInner, o, ln({}, tn().bottomSeparator, m)),
                            onScroll: p,
                            children: a
                        })
                    })]
                })
            }
            var sn = t(33173),
                un = t.n(sn);

            function cn(e) {
                var n = e.selectedChannelId,
                    t = e.guildId,
                    l = e.onChangeSelectedChannelId,
                    o = (0, s.e7)([y.default], (function() {
                        return y.default.getCurrentUser()
                    })),
                    a = (0, s.e7)([v.Z, Ue.ZP, ke.Z], (function() {
                        return (0, Fe.h_)(Ue.ZP.getChannels(t), v.Z, ke.Z)
                    })),
                    i = (0, s.e7)([Be.ZP], (function() {
                        return Be.ZP.getVoiceStates(t)
                    })),
                    c = a.map((function(e) {
                        var t;
                        return {
                            name: (0, r.jsx)(Xe, {
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
                return (0, r.jsx)(an, {
                    title: J.Z.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
                    scrollerInnerClassName: un().channelSelectScrollerInner,
                    children: (0, r.jsx)(u.RadioGroup, {
                        options: c,
                        value: n,
                        itemInfoClassName: un().channelInfoWrapper,
                        itemTitleClassName: un().channelTitleWrapper,
                        onChange: function(e) {
                            var n = e.value;
                            return l(n)
                        }
                    })
                })
            }
            var dn = t(664625);

            function fn(e) {
                var n = e.channel,
                    t = (0, s.e7)([dn.default], (function() {
                        return dn.default.getId()
                    })),
                    l = (0,
                        s.e7)([Be.ZP], (function() {
                        return Be.ZP.getVoiceStatesForChannel(n)
                    }), [n]);
                return (0, r.jsx)(u.FormItem, {
                    title: J.Z.Messages.GO_LIVE_MODAL_CURRENT_CHANNEL_FORM_TITLE,
                    className: q().modalContent,
                    titleClassName: q().formItemTitle,
                    children: (0, r.jsx)(Ae, {
                        children: (0, r.jsx)(Xe, {
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
            var mn = t(579581),
                hn = t(260561),
                pn = (0, hn.B)({
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
                gn = t(68543),
                Sn = t(95891),
                vn = t(116094),
                Cn = t(19585),
                En = t(276611);
            const bn = (0, hn.B)({
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
            var yn = t(203600),
                On = t(439281),
                In = t.n(On);

            function _n(e) {
                var n = e.message,
                    t = e.onClose,
                    l = e.openStreamUpsellModal,
                    o = bn.useExperiment({
                        location: "371fea_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    a = (0, Cn.Z)().analyticsLocations,
                    i = {
                        section: Y.jXE.STREAM_SETTINGS,
                        object: Y.qAy.PREMIUM_UPSELL_BANNER,
                        objectType: Y.Qqv.BUY
                    };
                return (0, r.jsxs)(u.Clickable, {
                    onClick: function() {
                        ! function() {
                            bn.trackExposure({
                                location: "371fea_2"
                            });
                            o.enabled ? (0, En.Z)({
                                initialPlanId: null,
                                subscriptionTier: yn.Si.TIER_2,
                                analyticsLocations: a,
                                analyticsObject: i
                            }) : l({
                                analyticsLocation: i,
                                onClose: t
                            })
                        }()
                    },
                    className: P()(In().upsellBanner, In().gradientBackground),
                    children: [(0, r.jsxs)("div", {
                        className: In().iconTextContainer,
                        children: [(0, r.jsx)(Sn.Z, {
                            className: In().iconColor
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            className: In().upsellText,
                            children: null != n ? n : J.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER
                        })]
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        className: In().textLink,
                        children: J.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA
                    })]
                })
            }
            var Nn = t(305025),
                xn = t.n(Nn);

            function jn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function An(e, n, t, r, l, o, a) {
                try {
                    var i = e[o](a),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, l)
            }

            function Rn(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, l) {
                        var o = e.apply(n, t);

                        function a(e) {
                            An(o, r, l, a, i, "next", e)
                        }

                        function i(e) {
                            An(o, r, l, a, i, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Zn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Tn(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Zn(e, n, t[n])
                    }))
                }
                return e
            }

            function Mn(e, n) {
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

            function Pn(e) {
                return function(e) {
                    if (Array.isArray(e)) return jn(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return jn(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return jn(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ln = function(e, n) {
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

            function wn(e) {
                var n = e.analyticsLocation,
                    l = e.onClose;
                (0, u.openModalLazy)(Rn((function() {
                    var e, o;
                    return Ln(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, t.e(23850).then(t.bind(t, 123850))];
                            case 1:
                                e = a.sent(), o = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(o, Mn(Tn({}, e), {
                                        onCloseParent: l,
                                        analyticsSource: n
                                    }))
                                }]
                        }
                    }))
                })))
            }

            function Dn() {
                return (0, r.jsxs)("div", {
                    className: xn().toolTipTextContainer,
                    children: [(0, r.jsx)(Sn.Z, {
                        className: P()(xn().premiumIcon, xn().premiumIconColor)
                    }), (0, r.jsx)(u.Text, {
                        className: xn().upsellText,
                        variant: "text-sm/medium",
                        children: J.Z.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
                    })]
                })
            }

            function Gn(e) {
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
                        tooltipClassName: xn().tooltip,
                        spacing: 12,
                        "aria-label": J.Z.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
                        text: (0, r.jsx)(Dn, {}),
                        children: (0, r.jsx)(I.Z, {
                            align: I.Z.Align.CENTER,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-xs/bold",
                                className: xn().selectorNitroText,
                                children: f
                            })
                        })
                    });
                    t = function() {
                        return wn({
                            analyticsLocation: i,
                            onClose: c
                        })
                    }
                } else {
                    n = (0, r.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        className: o ? xn().selectorTextSelected : xn().selectorText,
                        children: f
                    });
                    t = function() {
                        return s(d)
                    }
                }
                return {
                    content: n,
                    className: P()(o ? xn().selectorButtonSelected : xn().selectorButton, Zn({}, xn().selectorButtonPremiumRequired, a)),
                    onClick: t
                }
            }

            function Un(e) {
                var n = e.onClose,
                    t = e.selectedPreset,
                    l = e.selectedResolution,
                    o = e.selectedFPS,
                    i = e.onResolutionChange,
                    c = e.onFPSChange,
                    d = e.onPresetChange,
                    f = e.guildId,
                    h = e.captureDeviceSelected,
                    p = (0, s.e7)([y.default], (function() {
                        var e = y.default.getCurrentUser();
                        a()(null != e, "StreamSettings: user cannot be undefined");
                        return e
                    })),
                    g = vn.ZP.isPremiumExactly(p, yn.p9.TIER_0),
                    S = vn.ZP.isPremium(p),
                    C = (0, s.e7)([v.Z], (function() {
                        var e;
                        return null === (e = v.Z.getGuild(f)) || void 0 === e ? void 0 : e.premiumTier
                    })),
                    E = (0, mn.O)().location,
                    b = pn.useExperiment({
                        location: "a87c74_1"
                    }, {
                        autoTrackExposure: g,
                        disable: !g
                    }).enabled || !S,
                    O = h ? R.z8 : R.WC,
                    _ = Mn(Tn({}, E), {
                        section: Y.jXE.STREAM_SETTINGS
                    }),
                    N = (0, r.jsx)(gn.Z, {
                        buttons: O.map((function(e) {
                            return Gn({
                                type: e,
                                selected: e.value === l,
                                needsPremium: !(0, A.Z)(t, e.value, o, p, C),
                                analyticsLocation: _,
                                onClick: function() {
                                    return i(e.value)
                                },
                                onClose: n
                            })
                        }))
                    }),
                    x = (0, r.jsx)(gn.Z, {
                        buttons: R.k0.map((function(e) {
                            return Gn({
                                type: e,
                                selected: e.value === o,
                                needsPremium: !(0, A.Z)(t, l, e.value, p, C),
                                analyticsLocation: _,
                                onClick: function() {
                                    return c(e.value)
                                },
                                onClose: n
                            })
                        }))
                    }),
                    j = [{
                        value: R.tI.PRESET_VIDEO,
                        label: J.Z.Messages.STREAM_PRESET_VIDEO
                    }].concat(Pn(h ? [] : [{
                        value: R.tI.PRESET_DOCUMENTS,
                        label: J.Z.Messages.STREAM_PRESET_DOCUMENTS
                    }]), [{
                        value: R.tI.PRESET_CUSTOM,
                        label: J.Z.Messages.STREAM_PRESET_CUSTOM
                    }]),
                    Z = t === R.tI.PRESET_DOCUMENTS ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(I.Z, {
                            children: (0, r.jsx)(u.FormItem, {
                                title: J.Z.Messages.STREAM_RESOLUTION,
                                titleClassName: q().formItemTitleSlim,
                                className: xn().documentModeGroup,
                                children: (0, r.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    children: J.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
                                        fps: o
                                    })
                                })
                            })
                        }), b ? (0, r.jsx)(_n, {
                            message: J.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                            onClose: n,
                            openStreamUpsellModal: wn
                        }) : null]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(I.Z, {
                            children: [(0, r.jsx)(u.FormItem, {
                                title: J.Z.Messages.STREAM_RESOLUTION,
                                className: xn().settingsGroup,
                                titleClassName: q().formItemTitleSlim,
                                children: N
                            }), (0, r.jsx)(u.FormItem, {
                                title: J.Z.Messages.SCREENSHARE_FRAME_RATE,
                                className: xn().settingsGroup,
                                titleClassName: q().formItemTitleSlim,
                                children: x
                            })]
                        }), b ? (0, r.jsx)(_n, {
                            onClose: n,
                            openStreamUpsellModal: wn
                        }) : null]
                    });
                return (0, r.jsx)(m.Z, Mn(Tn({}, _), {
                    children: (0, r.jsx)(u.FormItem, {
                        title: J.Z.Messages.STREAM_QUALITY,
                        titleClassName: q().formItemTitle,
                        className: q().modalContent,
                        children: (0, r.jsxs)("div", {
                            className: xn().qualitySettingsContainer,
                            children: [(0, r.jsx)(u.SingleSelect, {
                                value: t,
                                className: Le().marginTop8,
                                options: j,
                                onChange: function(e) {
                                    return d(e)
                                }
                            }), Z]
                        })
                    })
                }))
            }
            var kn = t(485081);

            function Bn(e, n, t) {
                return null == n ? e : t.find((function(e) {
                    return (0, kn.Z)(n.id, e.windowHandle)
                }))
            }
            var Fn = t(915782),
                Vn = t.n(Fn);

            function Hn(e) {
                var n = e.selectedSource,
                    t = e.selectSource,
                    l = e.sourceChanged,
                    o = e.onChangeSource,
                    a = (0, s.e7)([E.ZP, O.Z], (function() {
                        return (0, x.ED)() ? (0, T.Z)(E.ZP, O.Z) : null
                    })),
                    i = (0, s.e7)([S.Z], (function() {
                        return null != (null == a ? void 0 : a.id) ? S.Z.getGame(a.id) : null
                    })),
                    c = (0, s.e7)([E.ZP], (function() {
                        return E.ZP.getRunningGames()
                    })),
                    d = (0, s.Wu)([S.Z], (function() {
                        return c.map((function(e) {
                            return null != e.id ? S.Z.getGame(e.id) : null
                        })).filter(pe.lm)
                    }), [c]),
                    f = null;
                null != n ? f = n.name : null != a && (f = a.name);
                if (null == f) return null;
                var m = Bn(a, n, c),
                    h = l ? d.find((function(e) {
                        return e.id === (null == m ? void 0 : m.id)
                    })) : i,
                    p = null != n && n.id.startsWith("screen") ? se.Z : he;
                return (0, r.jsx)(u.FormItem, {
                    title: J.Z.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
                    className: q().modalContent,
                    titleClassName: q().formItemTitleVerySlim,
                    children: (0, r.jsxs)(Ae, {
                        children: [null != h ? (0, r.jsx)(ae.Z, {
                            game: h,
                            size: ae.Z.Sizes.XSMALL,
                            className: Vn().selectedIcon
                        }) : (0, r.jsx)(p, {
                            className: Vn().selectedIcon
                        }), (0, r.jsx)("span", {
                            className: Vn().ellipsisText,
                            children: f
                        }), t ? (0, r.jsx)(u.Button, {
                            className: Vn().changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: o,
                            children: J.Z.Messages.CHANGE
                        }) : null]
                    })
                })
            }

            function Wn(e) {
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
                    title: J.Z.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
                    className: q().modalContent,
                    titleClassName: q().formItemTitle,
                    children: (0, r.jsxs)(Ae, {
                        children: [(0, r.jsx)(ie.Z, {
                            guild: l,
                            size: ie.Z.Sizes.SMALLER,
                            className: Vn().selectedIcon
                        }), (0, r.jsx)("span", {
                            className: Vn().ellipsisText,
                            children: l.toString()
                        }), (0, r.jsx)(u.Button, {
                            className: Vn().changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: n,
                            children: J.Z.Messages.CHANGE
                        })]
                    })
                })
            }

            function zn(e) {
                var n = e.text;
                return (0, r.jsxs)(I.Z, {
                    align: I.Z.Align.CENTER,
                    className: Vn().warning,
                    children: [(0, r.jsx)(ue.Z, {
                        className: Vn().warningIcon
                    }), (0, r.jsx)(u.Text, {
                        color: "none",
                        variant: "text-xs/normal",
                        children: n
                    })]
                })
            }

            function Kn(e) {
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
                    className: P()(q().modalContent, Vn().checkboxRow),
                    children: (0, r.jsx)(u.Checkbox, {
                        value: !!a,
                        type: u.Checkbox.Types.INVERTED,
                        onChange: i,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: J.Z.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
                        })
                    })
                }) : null
            }

            function Yn(e) {
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
                    E = e.onChangeSource,
                    O = e.onChangeAudioDevice,
                    I = e.onChangeGuild,
                    _ = e.transitionState,
                    N = (0, s.e7)([b.Z, g.Z], (function() {
                        return g.Z.getChannel(b.Z.getVoiceChannelId())
                    })),
                    j = (0, s.e7)([ge.Z], (function() {
                        return ge.Z.GPUDriversOutdated
                    })),
                    A = (0, s.e7)([C.Z], (function() {
                        return C.Z.getSoundshareEnabled()
                    })),
                    R = (0, s.e7)([y.default], (function() {
                        return y.default.getCurrentUser()
                    })),
                    Z = (0, D.fH)(c, "go_live_modal", !0),
                    T = C.Z.supports(ye.AN.SOUNDSHARE) ? (0, x.ED)() && !ve().satisfies(null === Ee.Z || void 0 === Ee.Z ? void 0 : Ee.Z.os.release, be.I9) ? J.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE : (0,
                        x.V5)() && !ve().satisfies(null === Ee.Z || void 0 === Ee.Z ? void 0 : Ee.Z.os.release, be.Ec) ? J.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE : null : Ce.GO_LIVE_SCREENSHARE_NO_SOUND;
                null != n && n.id.startsWith("screen") ? T = J.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND : null == T && C.Z.supportsEnableSoundshare() && A !== Y.rtk.ENABLED && (T = J.Z.Messages.GO_LIVE_SCREENSHARE_ENABLE_FOR_SOUNDSHARE.format({
                    onVoiceSettingsClick: function() {
                        m();
                        L.Z.open(Y.oAB.VOICE)
                    }
                }));
                var M = Boolean(null == n ? void 0 : n.id.startsWith("camera")),
                    P = null != R && R.verified && !R.bot,
                    G = null != N && !(0, w.Yk)(N),
                    U = P && G;
                return (0, r.jsxs)(l.Fragment, {
                    children: [M ? (0, r.jsx)(Ge, {
                        selectedSource: n,
                        onChangeVideoDeviceSource: E,
                        onChangeAudioDevice: O
                    }) : (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(Hn, {
                            selectSource: d,
                            sourceChanged: u,
                            onChangeSource: E,
                            selectedSource: n
                        }), null != T ? (0, r.jsx)(zn, {
                            text: T
                        }) : null]
                    }), f && null != c ? (0, r.jsx)(Wn, {
                        guildId: c,
                        onChange: I
                    }) : null, null != N ? (0, r.jsx)(fn, {
                        channel: N
                    }) : (0, r.jsx)(cn, {
                        guildId: c,
                        selectedChannelId: o,
                        onChangeSelectedChannelId: v
                    }), null != c && U ? (0, r.jsx)(Kn, {
                        guildId: c
                    }) : null, j ? (0, r.jsx)(zn, {
                        text: J.Z.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
                    }) : null, (0, r.jsx)(Un, {
                        selectedPreset: a,
                        selectedFPS: t,
                        selectedResolution: i,
                        guildId: c,
                        onClose: m,
                        onFPSChange: h,
                        onResolutionChange: p,
                        onPresetChange: S,
                        captureDeviceSelected: M
                    }), Z ? (0, r.jsx)(re, {
                        transitionState: _,
                        guildId: c
                    }) : null]
                })
            }
            var Jn = t(107218),
                Xn = t(718831),
                Qn = t(614272),
                $n = t.n(Qn);

            function qn(e) {
                var n = e.guildId,
                    t = e.onClick,
                    l = (0, s.e7)([v.Z], (function() {
                        return v.Z.getGuild(n)
                    })),
                    o = (0, s.e7)([Ue.ZP, v.Z, ke.Z], (function() {
                        return Ue.ZP.getChannels(n)[Ue.Zb].some((function(e) {
                            var n = e.channel;
                            return (0, Fe.JL)(n, v.Z, ke.Z)
                        }))
                    }));
                return null != l && o ? (0, r.jsxs)(u.Clickable, {
                    onClick: function() {
                        return t(n)
                    },
                    className: $n().guildRow,
                    children: [(0, r.jsx)(ie.Z, {
                        guild: l,
                        size: ie.Z.Sizes.SMALL,
                        className: $n().guildIcon
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        className: $n().guildName,
                        children: l.toString()
                    }), (0, r.jsx)(Xn.Z, {
                        direction: Xn.Z.Directions.RIGHT,
                        className: $n().guildArrow
                    })]
                }) : null
            }

            function et(e) {
                var n = e.onSelectGuild,
                    t = (0, s.e7)([Jn.Z], (function() {
                        return Jn.Z.getGuildFolders()
                    }));
                return (0, r.jsx)(an, {
                    title: J.Z.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
                    scrollerClassName: P()($n().guildScroller, q().marginBottom),
                    children: Ne().flatMap(t, (function(e) {
                        return e.guildIds.map((function(e) {
                            return (0, r.jsx)(qn, {
                                guildId: e,
                                onClick: n
                            }, e)
                        }))
                    }))
                })
            }

            function nt(e) {
                let n = function(e) {
                    let {
                        PI: n,
                        min: t,
                        max: r,
                        cos: l,
                        round: o
                    } = Math, a = e[0] | e[1] << 8 | e[2] << 16, i = e[3] | e[4] << 8, s = (63 & a) / 63, u = (a >> 6 & 63) / 31.5 - 1, c = (a >> 12 & 63) / 31.5 - 1, d = (a >> 18 & 31) / 31, f = a >> 23, m = (i >> 3 & 63) / 63, h = (i >> 9 & 63) / 63, p = i >> 15, g = r(3, p ? f ? 5 : 7 : 7 & i), S = r(3, p ? 7 & i : f ? 5 : 7), v = f ? (15 & e[5]) / 15 : 1, C = (e[5] >> 4) / 15, E = f ? 6 : 5, b = 0, y = (n, t, r) => {
                        let l = [];
                        for (let o = 0; o < t; o++)
                            for (let a = o ? 0 : 1; a * t < n * (t - o); a++) l.push(((e[E + (b >> 1)] >> ((1 & b++) << 2) & 15) / 7.5 - 1) * r);
                        return l
                    }, O = y(g, S, d), I = y(3, 3, 1.25 * m), _ = y(3, 3, 1.25 * h), N = f && y(5, 5, C), x = function(e) {
                        let n = e[3],
                            t = 128 & e[2],
                            r = 128 & e[4];
                        return (r ? t ? 5 : 7 : 7 & n) / (r ? 7 & n : t ? 5 : 7)
                    }(e), j = o(x > 1 ? 32 : 32 * x), A = o(x > 1 ? 32 / x : 32), R = new Uint8Array(j * A * 4), Z = [], T = [];
                    for (let e = 0, o = 0; e < A; e++)
                        for (let a = 0; a < j; a++, o += 4) {
                            let i = s,
                                d = u,
                                m = c,
                                h = v;
                            for (let e = 0, t = r(g, f ? 5 : 3); e < t; e++) Z[e] = l(n / j * (a + .5) * e);
                            for (let t = 0, o = r(S, f ? 5 : 3); t < o; t++) T[t] = l(n / A * (e + .5) * t);
                            for (let e = 0, n = 0; e < S; e++)
                                for (let t = e ? 0 : 1, r = 2 * T[e]; t * S < g * (S - e); t++, n++) i += O[n] * Z[t] * r;
                            for (let e = 0, n = 0; e < 3; e++)
                                for (let t = e ? 0 : 1, r = 2 * T[e]; t < 3 - e; t++, n++) {
                                    let e = Z[t] * r;
                                    d += I[n] * e;
                                    m += _[n] * e
                                }
                            if (f)
                                for (let e = 0, n = 0; e < 5; e++)
                                    for (let t = e ? 0 : 1, r = 2 * T[e]; t < 5 - e; t++, n++) h += N[n] * Z[t] * r;
                            let p = i - 2 / 3 * d,
                                C = (3 * i - p + m) / 2,
                                E = C - m;
                            R[o] = r(0, 255 * t(1, C));
                            R[o + 1] = r(0, 255 * t(1, E));
                            R[o + 2] = r(0, 255 * t(1, p));
                            R[o + 3] = r(0, 255 * t(1, h))
                        }
                    return {
                        w: j,
                        h: A,
                        rgba: R
                    }
                }(e);
                return function(e, n, t) {
                    let r = 4 * e + 1,
                        l = 6 + n * (5 + r),
                        o = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, n >> 8, 255 & n, 8, 6, 0, 0, 0, 0, 0, 0, 0, l >>> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 73, 68, 65, 84, 120, 1],
                        a = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                        i = 1,
                        s = 0;
                    for (let e = 0, l = 0, a = r - 1; e < n; e++, a += r - 1) {
                        o.push(e + 1 < n ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0);
                        for (s = (s + i) % 65521; l < a; l++) {
                            let e = 255 & t[l];
                            o.push(e);
                            i = (i + e) % 65521;
                            s = (s + i) % 65521
                        }
                    }
                    o.push(s >> 8, 255 & s, i >> 8, 255 & i, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130);
                    for (let [e, n] of [
                            [12, 29],
                            [37, 41 + l]
                        ]) {
                        let t = -1;
                        for (let r = e; r < n; r++) {
                            t ^= o[r];
                            t = t >>> 4 ^ a[15 & t];
                            t = t >>> 4 ^ a[15 & t]
                        }
                        t = ~t;
                        o[n++] = t >>> 24;
                        o[n++] = t >> 16 & 255;
                        o[n++] = t >> 8 & 255;
                        o[n++] = 255 & t
                    }
                    return "data:image/png;base64," + btoa(String.fromCharCode(...o))
                }(n.w, n.h, n.rgba)
            }
            var tt = t(12061),
                rt = t(15086),
                lt = t(513328),
                ot = t(875700),
                at = t(495726),
                it = t.n(at);

            function st(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function ut(e) {
                ut = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return ut(e)
            }

            function ct(e, n) {
                return !n || "object" !== mt(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function dt(e, n) {
                dt = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return dt(e, n)
            }
            var ft, mt = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function ht(e) {
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
                    var t, r = ut(e);
                    if (n) {
                        var l = ut(this).constructor;
                        t = Reflect.construct(r, arguments, l)
                    } else t = r.apply(this, arguments);
                    return ct(this, t)
                }
            }! function(e) {
                e.WRAP = "wrap";
                e.STACK = "stack"
            }(ft || (ft = {}));
            var pt = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && dt(e, n)
                }(t, e);
                var n = ht(t);

                function t() {
                    st(this, t);
                    return n.apply(this, arguments)
                }
                var l = t.prototype;
                l.renderChildren = function() {
                    var e, n = this.props,
                        t = n.children,
                        l = n.layout,
                        o = n.columns;
                    switch (l) {
                        case ft.STACK:
                            e = "100%";
                            break;
                        case ft.WRAP:
                            e = "".concat(1 / o * 100, "%")
                    }
                    return t.map((function(n, t) {
                        return (0, r.jsx)(I.Z.Child, {
                            className: it().tile,
                            basis: e,
                            grow: 0,
                            children: n
                        }, t)
                    }))
                };
                l.render = function() {
                    var e = this.props.className;
                    return (0, r.jsx)(I.Z, {
                        className: P()(e, it().grid),
                        wrap: I.Z.Wrap.WRAP,
                        children: this.renderChildren()
                    })
                };
                return t
            }(l.PureComponent);
            pt.Layout = ft;
            pt.defaultProps = {
                children: [],
                layout: ft.WRAP,
                columns: 4
            };
            const gt = pt;
            const St = (0, hn.B)({
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
            var vt = t(139273),
                Ct = t.n(vt);

            function Et(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function bt(e) {
                var n = e.source,
                    t = e.selectedSource,
                    l = n.id,
                    o = n.name,
                    a = n.url,
                    i = (null == t ? void 0 : t.id) === l;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(I.Z, {
                        direction: I.Z.Direction.VERTICAL,
                        justify: I.Z.Justify.CENTER,
                        align: I.Z.Align.CENTER,
                        children: [(0, r.jsx)(I.Z, {
                            justify: I.Z.Justify.CENTER,
                            align: I.Z.Align.CENTER,
                            children: (0, r.jsx)("div", {
                                style: {
                                    backgroundImage: "url(".concat(a, ")")
                                },
                                className: P()(Ct().sourceThumbnail, Et({}, Ct().selected, i))
                            })
                        }), (0, r.jsx)(u.Text, {
                            className: P()(Ct().sourceName, Et({}, Ct().selected, i)),
                            variant: "text-sm/normal",
                            children: o
                        })]
                    })
                })
            }

            function yt(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Ot(e, n, t, r, l, o, a) {
                try {
                    var i = e[o](a),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, l)
            }

            function It(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, l) {
                        var o = e.apply(n, t);

                        function a(e) {
                            Ot(o, r, l, a, i, "next", e)
                        }

                        function i(e) {
                            Ot(o, r, l, a, i, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function _t(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Nt(e, n) {
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
                    if ("string" == typeof e) return yt(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return yt(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var xt = function(e, n) {
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

            function jt(e, n) {
                var t = {};
                n.forEach((function(e) {
                    t[e.id] = e
                }));
                e.forEach((function(e) {
                    t[e.id] = e
                }));
                return Object.values(t).sort((function(e, n) {
                    return Mt(n) - Mt(e)
                }))
            }

            function At() {
                return Rt.apply(this, arguments)
            }

            function Rt() {
                return (Rt = It((function() {
                    var e, n, t, r, l, o, a, i;
                    return xt(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                e = C.Z.getVideoDevices();
                                n = (0, rt.Z)(C.Z.getMediaEngine(), [tt.vA.WINDOW, tt.vA.SCREEN], {
                                    width: 176,
                                    height: 99
                                });
                                return [4, Zt()];
                            case 1:
                                t = s.sent();
                                return [4, n];
                            case 2:
                                r = s.sent();
                                l = r.filter((function(e) {
                                    return e.id.startsWith(tt.vA.SCREEN)
                                }));
                                o = jt(r.filter((function(e) {
                                    return e.id.startsWith(tt.vA.WINDOW)
                                })), t);
                                a = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"];
                                i = Object.entries(e).filter((function(e) {
                                    var n = Nt(e, 2);
                                    n[0];
                                    return !n[1].disabled
                                })).map((function(e, n) {
                                    var t = Nt(e, 2),
                                        r = (t[0], t[1]),
                                        l = a[n % a.length],
                                        o = nt(Uint8Array.from(atob(l), (function(e) {
                                            return e.charCodeAt(0)
                                        })));
                                    return {
                                        id: "camera:" + r.id,
                                        name: r.name,
                                        url: o
                                    }
                                }));
                                return [2, {
                                    windowSources: o,
                                    screenSources: l,
                                    cameraSources: i
                                }]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Zt() {
                return Tt.apply(this, arguments)
            }

            function Tt() {
                Tt = It((function() {
                    var e;
                    return xt(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                e = E.ZP.getRunningGames();
                                return [4, Promise.all(e.map((t = It((function(e) {
                                    var n, t, r, l;
                                    return xt(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                if (null == e.name) return [2, null];
                                                o.label = 1;
                                            case 1:
                                                o.trys.push([1, 3, , 4]);
                                                return [4, ot.Z.identifyGame(e.pid, e.name)];
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
                return Tt.apply(this, arguments)
            }

            function Mt(e) {
                var n = (0, x.ED)() ? (0, T.Z)(E.ZP, O.Z) : null,
                    t = E.ZP.getRunningGames();
                return null != n && (0, kn.Z)(e.id, n.windowHandle) ? 2 : null != t.find((function(n) {
                    return (0, kn.Z)(e.id, n.windowHandle)
                })) ? 1 : 0
            }

            function Pt(e) {
                var n = e.selectedSource,
                    t = e.onChangeSelectedSource,
                    o = function() {
                        var e = x.current;
                        null != e && N(!e.isScrolledToTop())
                    },
                    a = St.useExperiment({
                        location: "GoLive_Source_Select"
                    }).enableGoLiveCaptureCard,
                    i = C.Z.supports(ye.AN.GO_LIVE_HARDWARE),
                    s = Nt(l.useState(null), 2),
                    c = s[0],
                    d = s[1],
                    f = Nt(l.useState(null), 2),
                    m = f[0],
                    h = f[1],
                    p = Nt(l.useState(null), 2),
                    g = p[0],
                    S = p[1],
                    v = null != g && g.length > 0,
                    E = Nt(l.useState(tt.vA.WINDOW), 2),
                    b = E[0],
                    y = E[1],
                    O = Nt(l.useState(!1), 2),
                    _ = O[0],
                    N = O[1],
                    x = l.useRef(null),
                    j = l.useRef(new lt.Xp);
                l.useEffect((function() {
                    var e = j.current;
                    At().then((function(e) {
                        var n = e.screenSources,
                            t = e.windowSources,
                            r = e.cameraSources;
                        d(n);
                        h(t);
                        S(r)
                    }));
                    e.start(1e3, It((function() {
                        var e, n, t, r;
                        return xt(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return [4, At()];
                                case 1:
                                    e = l.sent(), n = e.screenSources, t = e.windowSources, r = e.cameraSources;
                                    d(n);
                                    h(t);
                                    S(r);
                                    return [2]
                            }
                        }))
                    })));
                    return function() {
                        e.stop()
                    }
                }), []);
                var A = l.useCallback((function(e) {
                        if (null !== e) {
                            x.current = e;
                            var n;
                            N(null !== (n = !e.isScrolledToTop()) && void 0 !== n && n)
                        }
                    }), []),
                    R = function(e) {
                        switch (e) {
                            case tt.vA.WINDOW:
                                return m;
                            case tt.vA.SCREEN:
                                return c;
                            case tt.vA.CAMERA:
                                return g
                        }
                    }(b);
                if (null == R) return (0, r.jsx)(I.Z, {
                    className: Ct().spinner,
                    justify: I.Z.Justify.CENTER,
                    align: I.Z.Align.CENTER,
                    children: (0, r.jsx)(u.Spinner, {})
                });
                var Z = R.map((function(e) {
                    var l = e.id,
                        o = (null == n ? void 0 : n.id) === l;
                    return (0, r.jsx)(u.Clickable, {
                        className: P()(Ct().tile, _t({}, Ct().selected, o)),
                        onClick: function() {
                            return t(e, null)
                        },
                        children: (0, r.jsx)(bt, {
                            source: e,
                            selectedSource: n
                        }, e.id)
                    }, l)
                }));
                return (0, r.jsxs)(l.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: Ct().segmentContainer,
                        children: [(0, r.jsx)(en, {
                            separator: _
                        }), (0, r.jsx)(u.SegmentedControl, {
                            options: function() {
                                var e = [{
                                    name: J.Z.Messages.GO_LIVE_MODAL_APPLICATIONS,
                                    value: tt.vA.WINDOW
                                }, {
                                    name: J.Z.Messages.GO_LIVE_MODAL_SCREENS,
                                    value: tt.vA.SCREEN
                                }];
                                a && i && v && e.push({
                                    name: J.Z.Messages.GO_LIVE_MODAL_CAPTURE,
                                    value: tt.vA.CAMERA
                                });
                                return e
                            }(),
                            value: b,
                            onChange: function(e) {
                                var n = e.value;
                                return y(n)
                            },
                            className: Ct().segmentControl,
                            optionClassName: Ct().segmentControlOption
                        })]
                    }), b === tt.vA.CAMERA ? (0, r.jsx)("div", {
                        className: Ct().sourceContainer,
                        children: (0, r.jsx)(u.AdvancedScroller, {
                            ref: A,
                            className: Ct().sourceScroller,
                            onScroll: o,
                            children: (0, r.jsx)(gt, {
                                layout: gt.Layout.WRAP,
                                columns: 2,
                                className: Ct().sourceContainer,
                                children: Z
                            })
                        })
                    }) : (0, r.jsx)(u.AdvancedScroller, {
                        ref: A,
                        className: Ct().sourceScroller,
                        onScroll: o,
                        children: (0, r.jsx)(gt, {
                            layout: gt.Layout.WRAP,
                            columns: 2,
                            className: Ct().sourceContainer,
                            children: Z
                        })
                    })]
                })
            }
            var Lt = t(785915);

            function wt(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Dt(e, n, t, r, l, o, a) {
                try {
                    var i = e[o](a),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, l)
            }

            function Gt(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, l) {
                        var o = e.apply(n, t);

                        function a(e) {
                            Dt(o, r, l, a, i, "next", e)
                        }

                        function i(e) {
                            Dt(o, r, l, a, i, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Ut(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function kt(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Ut(e, n, t[n])
                    }))
                }
                return e
            }

            function Bt(e, n) {
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

            function Ft(e, n) {
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
                    if ("string" == typeof e) return wt(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return wt(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Vt, Ht = function(e, n) {
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
            }(Vt || (Vt = {}));

            function Wt(e, n) {
                N.default.track(Y.rMx.SCREENSHARE_FAILED, {
                    source_id: e,
                    screens: n.length
                })
            }

            function zt(e) {
                var n, o = e.selectGuild,
                    M = void 0 !== o && o,
                    P = e.selectSource,
                    L = void 0 === P || P,
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
                            var o = Ee,
                                i = Oe,
                                s = Ne;
                            if (!(0, A.Z)(o, i, s, X, Q)) {
                                o = R.tI.PRESET_VIDEO;
                                i = R.LY.RESOLUTION_720;
                                s = R.ws.FPS_30
                            }(0, f.Rc)({
                                preset: o,
                                resolution: i,
                                frameRate: s
                            });
                            var u = Bn(K, he, E.ZP.getRunningGames()),
                                m = !(0, x.ED)() || null == u || (null == he ? void 0 : he.id.startsWith("camera:")) || null == u ? null : u.pid;
                            (0, f.WH)(l, n, {
                                pid: m,
                                sourceId: null == m && null != he ? he.id : null,
                                sourceName: null == m && null != he ? he.name : null,
                                audioSourceId: Se
                            });
                            Gt((function() {
                                return Ht(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, h.Z.hasPermission(Lt.Eu.SCREEN_RECORDING, {
                                                showAuthorizationError: !1
                                            })];
                                        case 1:
                                            e.sent() || c.Z.show({
                                                title: J.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                                                body: J.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
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
                        (0, u.openModalLazy)(Gt((function() {
                            var e, l;
                            return Ht(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, t.e(43315).then(t.bind(t, 543315))];
                                    case 1:
                                        e = o.sent(), l = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(l, Bt(kt({}, e), {
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
                    K = (0, s.e7)([E.ZP, O.Z], (function() {
                        return (0, x.ED)() ? (0, T.Z)(E.ZP, O.Z) : null
                    })),
                    X = (0, s.e7)([y.default], (function() {
                        var e = y.default.getCurrentUser();
                        a()(null != e, "GoLiveModal: user cannot be undefined");
                        return e
                    })),
                    Q = (0, s.e7)([v.Z], (function() {
                        var e;
                        return null === (e = v.Z.getGuild(w)) || void 0 === e ? void 0 : e.premiumTier
                    })),
                    $ = Ft(null !== (n = Z(V, X, Q)) && void 0 !== n ? n : [R.LY.RESOLUTION_720, R.ws.FPS_30], 2),
                    ee = $[0],
                    ne = $[1];
                if (V !== R.tI.PRESET_CUSTOM) {
                    H = ee;
                    W = ne
                }
                var te, re = (0, _.Dt)(),
                    le = Ft(l.useState(function(e, n) {
                        return e ? Vt.GUILD : n ? Vt.SOURCE : Vt.CONFIRM
                    }(M, L)), 2),
                    oe = le[0],
                    ae = le[1],
                    ie = Ft(l.useState(!1), 2),
                    se = ie[0],
                    ue = ie[1],
                    ce = Ft(l.useState(null), 2),
                    de = ce[0],
                    fe = ce[1],
                    me = Ft(l.useState(null), 2),
                    he = me[0],
                    pe = me[1],
                    ge = Ft(l.useState(null), 2),
                    Se = ge[0],
                    ve = ge[1],
                    Ce = Ft(l.useState(V), 2),
                    Ee = Ce[0],
                    be = Ce[1],
                    ye = Ft(l.useState(H), 2),
                    Oe = ye[0],
                    Ie = ye[1],
                    _e = Ft(l.useState(W), 2),
                    Ne = _e[0],
                    xe = _e[1],
                    je = Ft(l.useState(null != w ? w : null), 2),
                    Ae = je[0],
                    Re = je[1],
                    Ze = null !== (te = null == z ? void 0 : z.id) && void 0 !== te ? te : de;
                l.useEffect((function() {
                    var e = (0, x.ED)() ? (0, T.Z)(E.ZP, O.Z) : null,
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
                    var r = Z(e, X, Q),
                        l = Ft(null != r ? r : [n, t], 2),
                        o = l[0],
                        a = l[1];
                    if (e !== Ee) {
                        n = o;
                        t = a
                    }
                    if (!(0, A.Z)(e, n, t, X, Q)) {
                        var i = Ft(Z(R.tI.PRESET_VIDEO, X, Q), 2);
                        n = i[0];
                        t = i[1]
                    }
                    t !== Ne && xe(t);
                    n !== Oe && Ie(n);
                    o !== n || a !== t ? be(R.tI.PRESET_CUSTOM) : e !== Ee && be(e)
                }), [X, Q, Ne, Oe, Ee]);

                function Me() {
                    return (Me = Gt((function(e) {
                        var n, t, l, o;
                        return Ht(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    e.preventDefault();
                                    if (oe === Vt.SOURCE) return [2, ae(Vt.CONFIRM)];
                                    n = Bn(K, he, E.ZP.getRunningGames());
                                    t = j.ZP.supportsFeature(Y.eRX.ELEVATED_HOOK) && (null == n ? void 0 : n.elevated);
                                    return (0, x.V5)() && null != he ? [4, C.Z.getMediaEngine().getDesktopSources()] : [3, 2];
                                case 1:
                                    l = a.sent();
                                    if ((o = he.id).startsWith("screen") && l.length > 0 && !l.some((function(e) {
                                            return e.includes(o)
                                        }))) {
                                        Wt(o, l);
                                        (0, u.openModal)((function(e) {
                                            return (0, r.jsx)(u.ConfirmModal, Bt(kt({
                                                header: J.Z.Messages.SCREENSHARE_RELAUNCH,
                                                confirmText: J.Z.Messages.OKAY,
                                                cancelText: J.Z.Messages.CANCEL,
                                                onConfirm: function() {
                                                    return j.ZP.relaunch()
                                                }
                                            }, e), {
                                                children: (0, r.jsx)(u.Text, {
                                                    variant: "text-md/normal",
                                                    children: J.Z.Messages.SCREENSHARE_RELAUNCH_BODY
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
                var Pe = l.useCallback((function(e) {
                        pe(e);
                        if (null != e) {
                            ae(Vt.CONFIRM);
                            ue(!0)
                        }
                    }), []),
                    Le = l.useCallback((function(e) {
                        Re(e);
                        ae(L ? Vt.SOURCE : Vt.CONFIRM)
                    }), [L]),
                    we = function(e) {
                        switch (e) {
                            case Vt.SOURCE:
                                return J.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
                            case Vt.CONFIRM:
                                return null;
                            case Vt.GUILD:
                            default:
                                return J.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
                        }
                    }(oe),
                    De = (0, r.jsx)(u.ModalHeader, {
                        className: q().modalHeader,
                        separator: !1,
                        children: (0, r.jsxs)(I.Z, {
                            direction: I.Z.Direction.VERTICAL,
                            align: I.Z.Align.CENTER,
                            className: q().header,
                            children: [(0, r.jsx)(u.Heading, {
                                variant: "heading-xl/semibold",
                                id: re,
                                className: q().headerText,
                                children: J.Z.Messages.GO_LIVE_MODAL_TITLE
                            }), null != we ? (0, r.jsx)(u.Text, {
                                className: q().headerDescription,
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: we
                            }) : null]
                        })
                    }),
                    Ge = (0, r.jsxs)(u.Slides, {
                        springConfig: Bt(kt({}, i.config.stiff), {
                            clamp: !0
                        }),
                        activeSlide: oe,
                        width: 480,
                        children: [(0, r.jsx)(u.Slide, {
                            id: Vt.GUILD,
                            children: (0, r.jsx)("div", {
                                className: q().modalSize,
                                children: (0, r.jsx)(et, {
                                    onSelectGuild: Le
                                })
                            })
                        }), (0, r.jsx)(u.Slide, {
                            id: Vt.SOURCE,
                            children: (0, r.jsx)("div", {
                                className: q().modalSize,
                                children: (0, r.jsx)(Pt, {
                                    selectedSource: he,
                                    onChangeSelectedSource: Pe
                                })
                            })
                        }), (0, r.jsx)(u.Slide, {
                            id: Vt.CONFIRM,
                            children: (0, r.jsx)("div", {
                                className: q().modalSize,
                                children: (0, r.jsx)(Yn, {
                                    selectedChannelId: de,
                                    selectedPreset: Ee,
                                    selectedResolution: Oe,
                                    selectedSource: he,
                                    selectedFPS: Ne,
                                    sourceChanged: se,
                                    selectSource: L,
                                    onChangeSelectedFPS: function(e) {
                                        return Te(Ee, Oe, e)
                                    },
                                    onChangeSelectedResolution: function(e) {
                                        return Te(Ee, e, Ne)
                                    },
                                    onChangeSelectedPreset: function(e) {
                                        return Te(e, Oe, Ne)
                                    },
                                    onChangeSelectedChannelId: fe,
                                    onChangeSelectedSource: Pe,
                                    onChangeSource: function() {
                                        return ae(Vt.SOURCE)
                                    },
                                    onChangeAudioDevice: function(e) {
                                        return ve(e)
                                    },
                                    onChangeGuild: function() {
                                        return ae(Vt.GUILD)
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
                            case Vt.SOURCE:
                                return n ? Vt.GUILD : null;
                            case Vt.CONFIRM:
                                return r ? Vt.SOURCE : !t && n ? Vt.GUILD : null;
                            case Vt.GUILD:
                            default:
                                return null
                        }
                    }(oe, M, L, se),
                    ke = oe !== Vt.CONFIRM || null == he && null == K || null == Ze,
                    Be = (0, r.jsxs)(u.ModalFooter, {
                        justify: null == Ue ? I.Z.Justify.START : I.Z.Justify.BETWEEN,
                        children: [(0, r.jsx)(u.Button, {
                            type: "submit",
                            size: u.Button.Sizes.SMALL,
                            disabled: ke,
                            autoFocus: !0,
                            children: J.Z.Messages.GO_LIVE_MODAL_CTA
                        }), null == Ue ? (0, r.jsx)(u.Button, {
                            className: q().cancelButton,
                            look: u.Button.Looks.LINK,
                            size: u.Button.Sizes.SMALL,
                            color: u.ButtonColors.PRIMARY,
                            onClick: G,
                            children: J.Z.Messages.CANCEL
                        }) : (0, r.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            color: u.ButtonColors.PRIMARY,
                            onClick: function() {
                                return ae(Ue)
                            },
                            children: J.Z.Messages.BACK
                        })]
                    });
                return (0, r.jsx)(m.Z, {
                    page: Y.ZY5.GO_LIVE_MODAL,
                    children: (0, r.jsxs)(u.ModalRoot, {
                        "aria-labelledby": re,
                        transitionState: U,
                        size: u.ModalSize.DYNAMIC,
                        className: q().modalSize,
                        children: [(0, r.jsx)(u.ModalCloseButton, {
                            onClick: G,
                            className: q().modalCloseButton
                        }), (0, r.jsx)("div", {
                            className: q().art
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
                l = (t(667294), t(294184)),
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