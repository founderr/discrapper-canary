"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [98211], {
        698211: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => Qt
            });
            var r = t(785893),
                l = t(667294),
                o = t(441143),
                i = t.n(o),
                a = t(248088),
                s = t(202351),
                u = t(304548),
                c = t(105783),
                d = t(116404),
                f = t(481008),
                m = t(213276),
                h = t(738096),
                p = t(341765),
                g = t(61209),
                v = t(959207),
                S = t(567403),
                b = t(964517),
                C = t(671723),
                y = t(715107),
                E = t(473903),
                O = t(375759),
                I = t(107364),
                _ = t(443812),
                j = t(652591),
                N = t(120415),
                x = t(310126),
                A = t(802395),
                R = t(165586);

            function Z(e, n, t) {
                var r = R.no[e],
                    l = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, s = r[Symbol.iterator](); !(l = (a = s.next()).done); l = !0) {
                        var u = a.value;
                        if ((0, A.Z)(e, u.resolution, u.fps, n, t)) return [u.resolution, u.fps]
                    }
                } catch (e) {
                    o = !0;
                    i = e
                } finally {
                    try {
                        l || null == s.return || s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return null
            }
            var T = t(944514),
                P = t(294184),
                M = t.n(P),
                L = t(396179),
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
                X = t(231852),
                Q = t.n(X),
                $ = t(903803),
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
                            i = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            l = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (a) throw l
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
                var n = e.clipsEnabled,
                    t = e.isAnimationDone,
                    o = e.guildId,
                    i = e.children,
                    a = (0, s.e7)([W.Z], (function() {
                        return W.Z.getHardwareClassification()
                    })),
                    c = a === z.x.MEETS_MINIMUM || a === z.x.UNKNOWN,
                    d = a === z.x.BELOW_MINIMUM,
                    f = t && (c || d) && !n,
                    m = ne((0, k.c)(f ? [G.z$.CLIPS_ONBOARDING_GO_LIVE_COACHMARK] : []), 2),
                    h = m[0],
                    p = m[1],
                    g = h === G.z$.CLIPS_ONBOARDING_GO_LIVE_COACHMARK;
                l.useEffect((function() {
                    n && (0, U.EW)(G.z$.CLIPS_ONBOARDING_GO_LIVE_COACHMARK, {
                        forceTrack: !0
                    })
                }), [n]);
                var v = function(e, n) {
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
                                v(e)
                            },
                            onClose: function(e) {
                                v(e, n)
                            }
                        })
                    },
                    children: function() {
                        return i
                    }
                })
            };
            const re = function(e) {
                var n = e.isAnimationDone,
                    t = e.guildId,
                    l = (0, s.e7)([W.Z], (function() {
                        return W.Z.getSettings().clipsEnabled
                    })),
                    o = (0, s.e7)([F.Z], (function() {
                        return F.Z.getKeybindForAction(Y.kg4.SAVE_CLIP)
                    }));
                i()(null != o, "Clips keybind should be set");
                var a = H.BB(o.shortcut, !0);
                return (0, r.jsx)(u.FormItem, {
                    title: J.Z.Messages.CLIPS_SETTINGS,
                    titleClassName: q().formItemTitle,
                    className: q().modalContent,
                    children: (0, r.jsxs)("div", {
                        className: Q().container,
                        children: [(0, r.jsx)(te, {
                            clipsEnabled: l,
                            guildId: t,
                            isAnimationDone: n,
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
                                keybind: a,
                                keybindHook: function() {
                                    return (0, r.jsx)("span", {
                                        className: Q().keybindHintKeys,
                                        children: (0, r.jsx)(u.KeyCombo, {
                                            className: Q().keybindShortcut,
                                            shortcut: a
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
                ie = t(750203),
                ae = t(124251),
                se = t(425454),
                ue = t(818417),
                ce = t(168075),
                de = t(795308),
                fe = t(633878);

            function me(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function he(e, n) {
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

            function pe(e, n) {
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

            function ge(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function ve(e, n) {
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

            function Se(e, n) {
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
            const be = (0, ce.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    l = e.height,
                    o = void 0 === l ? 24 : l,
                    i = e.color,
                    a = void 0 === i ? "currentColor" : i,
                    s = e.foreground,
                    u = Se(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", ve(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            ge(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, fe.Z)(u)), {
                    width: t,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        className: s,
                        fill: a,
                        d: "M22 7.002V5C22 3.898 21.104 3 20 3H4C2.897 3 2 3.898 2 5V7.002H22ZM8 4C8.553 4 9 4.448 9 5C9 5.553 8.553 6 8 6C7.447 6 7 5.553 7 5C7 4.448 7.447 4 8 4ZM5 4C5.553 4 6 4.448 6 5C6 5.553 5.553 6 5 6C4.447 6 4 5.553 4 5C4 4.448 4.447 4 5 4Z"
                    }), (0,
                        r.jsx)("path", {
                        fill: a,
                        d: "M2 8.00201V19C2 20.103 2.897 21 4 21H20C21.104 21 22 20.103 22 19V8.00201H2Z"
                    })]
                }))
            }), (function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    l = e.height,
                    o = void 0 === l ? 24 : l,
                    i = e.color,
                    a = void 0 === i ? de.Z.colors.INTERACTIVE_NORMAL : i,
                    s = e.colorClass,
                    u = void 0 === s ? "" : s,
                    c = pe(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", he(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            me(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, fe.Z)(c)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: o,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6Zm0 6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6Zm3-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: u
                    })
                }))
            }));
            var Ce = t(72580),
                ye = t(647428),
                Ee = t(236625),
                Oe = t.n(Ee),
                Ie = t(20978),
                _e = t(306472),
                je = t(443132),
                Ne = t(36256);
            const xe = new Uint32Array(65536),
                Ae = (e, n) => {
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
                            i = 0,
                            a = t,
                            s = t;
                        for (; s--;) xe[e.charCodeAt(s)] |= 1 << s;
                        for (s = 0; s < r; s++) {
                            let e = xe[n.charCodeAt(s)];
                            const t = e | i;
                            e |= (e & o) + o ^ o;
                            i |= ~(e | o);
                            o &= e;
                            i & l && a++;
                            o & l && a--;
                            i = i << 1 | 1;
                            o = o << 1 | ~(t | i);
                            i &= t
                        }
                        s = t;
                        for (; s--;) xe[e.charCodeAt(s)] = 0;
                        return a
                    })(e, n) : ((e, n) => {
                        const t = n.length,
                            r = e.length,
                            l = [],
                            o = [],
                            i = Math.ceil(t / 32),
                            a = Math.ceil(r / 32);
                        for (let e = 0; e < i; e++) {
                            o[e] = -1;
                            l[e] = 0
                        }
                        let s = 0;
                        for (; s < a - 1; s++) {
                            let i = 0,
                                a = -1;
                            const u = 32 * s,
                                c = Math.min(32, r) + u;
                            for (let n = u; n < c; n++) xe[e.charCodeAt(n)] |= 1 << n;
                            for (let e = 0; e < t; e++) {
                                const t = xe[n.charCodeAt(e)],
                                    r = o[e / 32 | 0] >>> e & 1,
                                    s = l[e / 32 | 0] >>> e & 1,
                                    u = t | i,
                                    c = ((t | s) & a) + a ^ a | t | s;
                                let d = i | ~(c | a),
                                    f = a & c;
                                d >>> 31 ^ r && (o[e / 32 | 0] ^= 1 << e);
                                f >>> 31 ^ s && (l[e / 32 | 0] ^= 1 << e);
                                d = d << 1 | r;
                                f = f << 1 | s;
                                a = f | ~(u | d);
                                i = d & u
                            }
                            for (let n = u; n < c; n++) xe[e.charCodeAt(n)] = 0
                        }
                        let u = 0,
                            c = -1;
                        const d = 32 * s,
                            f = Math.min(32, r - d) + d;
                        for (let n = d; n < f; n++) xe[e.charCodeAt(n)] |= 1 << n;
                        let m = r;
                        for (let e = 0; e < t; e++) {
                            const t = xe[n.charCodeAt(e)],
                                i = o[e / 32 | 0] >>> e & 1,
                                a = l[e / 32 | 0] >>> e & 1,
                                s = t | u,
                                d = ((t | a) & c) + c ^ c | t | a;
                            let f = u | ~(d | c),
                                h = c & d;
                            m += f >>> r - 1 & 1;
                            m -= h >>> r - 1 & 1;
                            f >>> 31 ^ i && (o[e / 32 | 0] ^= 1 << e);
                            h >>> 31 ^ a && (l[e / 32 | 0] ^= 1 << e);
                            f = f << 1 | i;
                            h = h << 1 | a;
                            c = h | ~(s | f);
                            u = f & s
                        }
                        for (let n = d; n < f; n++) xe[e.charCodeAt(n)] = 0;
                        return m
                    })(e, n)
                };
            var Re = t(496486),
                Ze = t.n(Re),
                Te = t(815208),
                Pe = t.n(Te);

            function Me(e) {
                var n = e.children;
                return (0, r.jsx)("div", {
                    className: Pe().card,
                    children: n
                })
            }

            function Le(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function we(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, l, o = [],
                            i = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            l = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (a) throw l
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Le(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Le(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var De = t(403869),
                Ge = t.n(De),
                Ue = t(380203),
                ke = t.n(Ue);

            function Be(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Fe(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, l, o = [],
                            i = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            l = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (a) throw l
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

            function Ve(e) {
                var n, t = e.selectedSource,
                    o = e.onChangeVideoDeviceSource,
                    i = e.onChangeAudioDevice,
                    a = (n = b.Z.getVideoDevices(), Object.entries(n).map((function(e) {
                        var n = we(e, 2),
                            t = (n[0], n[1]);
                        return {
                            id: "camera:" + t.id,
                            name: t.name,
                            url: ""
                        }
                    }))),
                    c = (0, s.e7)([b.Z], (function() {
                        return b.Z.getInputDevices()
                    })),
                    d = Fe(l.useState(function(e, n, t) {
                        if (null != n && null != t) {
                            var r = n.find((function(n) {
                                return n.id === e
                            }));
                            if (null == r) return;
                            var l = Ze().reduce(t, (function(e, n) {
                                return Ae(r.name, n.name) < Ae(r.name, e.name) ? n : e
                            }));
                            if (null == l) return;
                            return l.id
                        }
                    }(t.id, a, c)), 2),
                    f = d[0],
                    m = d[1];
                null != f && i(f);
                return (0, r.jsx)(l.Fragment, {
                    children: (0, r.jsxs)(u.FormItem, {
                        title: "Capture Device",
                        className: q().modalContent,
                        children: [(0, r.jsx)(u.FormItem, {
                            className: ke().marginTop8,
                            children: (0, r.jsxs)(Me, {
                                children: [(0, r.jsx)("span", {
                                    className: Ge().ellipsisText,
                                    children: t.name
                                }), (0, r.jsx)(u.Button, {
                                    className: Ge().changeButton,
                                    color: u.Button.Colors.PRIMARY,
                                    size: u.Button.Sizes.SMALL,
                                    onClick: o,
                                    children: J.Z.Messages.CHANGE
                                })]
                            })
                        }), (0, r.jsx)(u.FormItem, {
                            className: ke().marginTop8,
                            title: J.Z.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
                            children: (0, r.jsx)(u.SingleSelect, {
                                value: f,
                                className: ke().marginaTop8,
                                onChange: function(e) {
                                    m(e);
                                    i(e)
                                },
                                options: Ze().map(c, (function(e) {
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
            var He = t(5544),
                We = t(682776),
                ze = t(602397),
                Ke = t(924066),
                Ye = t(773011),
                Je = t(469023),
                Xe = t(96606),
                Qe = t(773148),
                $e = t(366873),
                qe = t.n($e);

            function en(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function nn(e) {
                var n = e.channel,
                    t = e.users,
                    l = e.selected,
                    o = void 0 !== l && l,
                    i = (0, Ye.ZP)(n),
                    a = null;
                if (null != t && t.length > 0) {
                    a = (0, r.jsx)(Xe.Z, {
                        guildId: n.guild_id,
                        className: qe().voiceUserList,
                        users: t,
                        renderUser: function(e) {
                            if (null == e) return null;
                            var t = Qe.ZP.getName(n.guild_id, n.id, e),
                                l = e.getAvatarURL(n.guild_id, 24);
                            return (0, r.jsx)(u.TooltipContainer, {
                                text: t,
                                children: (0, r.jsx)("img", {
                                    src: null != l ? l : void 0,
                                    "aria-label": e.username,
                                    alt: "",
                                    className: qe().avatar
                                })
                            })
                        },
                        renderMoreUsers: function(e) {
                            var l = function(e, n) {
                                var t = n.id,
                                    r = n.guild_id;
                                return e.length <= 1 ? null : 2 === e.length ? J.Z.Messages.GO_LIVE_MODAL_OVERFLOW_TWO_USERS.format({
                                    nickname0: Qe.ZP.getName(r, t, e[0]),
                                    nickname1: Qe.ZP.getName(r, t, e[1])
                                }) : 3 === e.length ? J.Z.Messages.GO_LIVE_MODAL_OVERFLOW_THREE_USERS.format({
                                    nickname0: Qe.ZP.getName(r, t, e[0]),
                                    nickname1: Qe.ZP.getName(r, t, e[1]),
                                    nickname2: Qe.ZP.getName(r, t, e[2])
                                }) : J.Z.Messages.GO_LIVE_MODAL_OVERFLOW_FOUR_OR_MORE_USERS.format({
                                    nickname0: Qe.ZP.getName(r, t, e[0]),
                                    nickname1: Qe.ZP.getName(r, t, e[1]),
                                    remainingCount: e.length - 2
                                })
                            }(t.slice(4), n);
                            return (0, r.jsx)("div", {
                                children: (0, r.jsx)(u.TooltipContainer, {
                                    text: l,
                                    children: (0, r.jsx)("div", {
                                        className: qe().userListOverflow,
                                        children: e
                                    })
                                })
                            })
                        },
                        max: 5,
                        showUserPopout: !1
                    })
                }
                var s = (0, Je.Z)(n);
                return (0, r.jsxs)("div", {
                    className: M()(qe().channelInfo, en({}, qe().selected, o)),
                    children: [(0, r.jsx)(s, {
                        className: qe().channelIcon
                    }), (0, r.jsx)("div", {
                        className: qe().channelName,
                        children: i
                    }), a]
                })
            }
            var tn = t(227993),
                rn = t.n(tn);

            function ln(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function on(e) {
                var n = e.separator,
                    t = void 0 !== n && n;
                return (0, r.jsx)("div", {
                    className: M()(rn().divider, ln({}, rn().separator, t))
                })
            }
            var an = t(559221),
                sn = t.n(an);

            function un(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function cn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function dn(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, l, o = [],
                            i = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            l = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (a) throw l
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return un(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return un(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function fn(e) {
                var n = e.title,
                    t = e.scrollerClassName,
                    o = e.scrollerInnerClassName,
                    i = e.children,
                    a = l.useRef(null),
                    s = dn(l.useState(!1), 2),
                    c = s[0],
                    d = s[1],
                    f = dn(l.useState(!1), 2),
                    m = f[0],
                    h = f[1],
                    p = l.useCallback((function() {
                        var e = a.current;
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
                        className: M()(sn().title, sn().scrollWrapper),
                        children: [(0, r.jsx)(u.FormTitle, {
                            className: q().formItemTitle,
                            children: n
                        }), (0, r.jsx)(on, {
                            separator: c
                        })]
                    }), (0, r.jsx)("div", {
                        className: t,
                        children: (0, r.jsx)(u.AdvancedScroller, {
                            ref: a,
                            className: M()(sn().scrollerInner, o, cn({}, sn().bottomSeparator, m)),
                            onScroll: p,
                            children: i
                        })
                    })]
                })
            }
            var mn = t(426314),
                hn = t.n(mn);

            function pn(e) {
                var n = e.selectedChannelId,
                    t = e.guildId,
                    l = e.onChangeSelectedChannelId,
                    o = (0, s.e7)([E.default], (function() {
                        return E.default.getCurrentUser()
                    })),
                    i = (0, s.e7)([S.Z, He.ZP, We.Z], (function() {
                        return (0, Ke.h_)(He.ZP.getChannels(t), S.Z, We.Z)
                    })),
                    a = (0, s.e7)([ze.ZP], (function() {
                        return ze.ZP.getVoiceStates(t)
                    })),
                    c = i.map((function(e) {
                        var t;
                        return {
                            name: (0, r.jsx)(nn, {
                                channel: e,
                                users: null === (t = a[e.id]) || void 0 === t ? void 0 : t.filter((function(e) {
                                    return e.user.id !== (null == o ? void 0 : o.id)
                                })).map((function(e) {
                                    return e.user
                                })),
                                selected: e.id === n
                            }),
                            value: e.id
                        }
                    }));
                return (0, r.jsx)(fn, {
                    title: J.Z.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
                    scrollerInnerClassName: hn().channelSelectScrollerInner,
                    children: (0, r.jsx)(u.RadioGroup, {
                        options: c,
                        value: n,
                        itemInfoClassName: hn().channelInfoWrapper,
                        itemTitleClassName: hn().channelTitleWrapper,
                        onChange: function(e) {
                            var n = e.value;
                            return l(n)
                        }
                    })
                })
            }
            var gn = t(664625);

            function vn(e) {
                var n = e.channel,
                    t = (0, s.e7)([gn.default], (function() {
                        return gn.default.getId()
                    })),
                    l = (0, s.e7)([ze.ZP], (function() {
                        return ze.ZP.getVoiceStatesForChannel(n)
                    }), [n]);
                return (0, r.jsx)(u.FormItem, {
                    title: J.Z.Messages.GO_LIVE_MODAL_CURRENT_CHANNEL_FORM_TITLE,
                    className: q().modalContent,
                    titleClassName: q().formItemTitle,
                    children: (0, r.jsx)(Me, {
                        children: (0, r.jsx)(nn, {
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
            var Sn = t(579581),
                bn = t(260561),
                Cn = (0, bn.B)({
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
                yn = t(68543),
                En = t(406493),
                On = t(694329),
                In = t(19585),
                _n = t(276611);
            const jn = (0, bn.B)({
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
            var Nn = t(203600),
                xn = t(207511),
                An = t.n(xn);

            function Rn(e) {
                var n = e.message,
                    t = e.onClose,
                    l = e.openStreamUpsellModal,
                    o = jn.useExperiment({
                        location: "371fea_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    i = (0, In.Z)().analyticsLocations,
                    a = {
                        section: Y.jXE.STREAM_SETTINGS,
                        object: Y.qAy.PREMIUM_UPSELL_BANNER,
                        objectType: Y.Qqv.BUY
                    };
                return (0, r.jsxs)(u.Clickable, {
                    onClick: function() {
                        ! function() {
                            jn.trackExposure({
                                location: "371fea_2"
                            });
                            o.enabled ? (0, _n.Z)({
                                initialPlanId: null,
                                subscriptionTier: Nn.Si.TIER_2,
                                analyticsLocations: i,
                                analyticsObject: a
                            }) : l({
                                analyticsLocation: a,
                                onClose: t
                            })
                        }()
                    },
                    className: M()(An().upsellBanner, An().gradientBackground),
                    children: [(0, r.jsxs)("div", {
                        className: An().iconTextContainer,
                        children: [(0, r.jsx)(En.Z, {
                            className: An().iconColor
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            className: An().upsellText,
                            children: null != n ? n : J.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER
                        })]
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        className: An().textLink,
                        children: J.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA
                    })]
                })
            }
            var Zn = t(324407),
                Tn = t.n(Zn);

            function Pn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Mn(e, n, t, r, l, o, i) {
                try {
                    var a = e[o](i),
                        s = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(s) : Promise.resolve(s).then(r, l)
            }

            function Ln(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, l) {
                        var o = e.apply(n, t);

                        function i(e) {
                            Mn(o, r, l, i, a, "next", e)
                        }

                        function a(e) {
                            Mn(o, r, l, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function wn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Dn(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        wn(e, n, t[n])
                    }))
                }
                return e
            }

            function Gn(e, n) {
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

            function Un(e) {
                return function(e) {
                    if (Array.isArray(e)) return Pn(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Pn(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Pn(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var kn = function(e, n) {
                var t, r, l, o, i = {
                    label: 0,
                    sent: function() {
                        if (1 & l[0]) throw l[1];
                        return l[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (l = 2 & o[0] ? r.return : o[0] ? r.throw || ((l = r.return) && l.call(r), 0) : r.next) && !(l = l.call(r, o[1])).done) return l;
                                (r = 0, l) && (o = [2 & o[0], l.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        l = o;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(l = i.trys, l = l.length > 0 && l[l.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!l || o[1] > l[0] && o[1] < l[3])) {
                                            i.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && i.label < l[1]) {
                                            i.label = l[1];
                                            l = o;
                                            break
                                        }
                                        if (l && i.label < l[2]) {
                                            i.label = l[2];
                                            i.ops.push(o);
                                            break
                                        }
                                        l[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                o = n.call(e, i)
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
                        }([o, a])
                    }
                }
            };

            function Bn(e) {
                var n = e.analyticsLocation,
                    l = e.onClose;
                (0, u.openModalLazy)(Ln((function() {
                    var e, o;
                    return kn(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, t.e(23850).then(t.bind(t, 123850))];
                            case 1:
                                e = i.sent(), o = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(o, Gn(Dn({}, e), {
                                        onCloseParent: l,
                                        analyticsSource: n
                                    }))
                                }]
                        }
                    }))
                })))
            }

            function Fn() {
                return (0, r.jsxs)("div", {
                    className: Tn().toolTipTextContainer,
                    children: [(0, r.jsx)(En.Z, {
                        className: M()(Tn().premiumIcon, Tn().premiumIconColor)
                    }), (0, r.jsx)(u.Text, {
                        className: Tn().upsellText,
                        variant: "text-sm/medium",
                        children: J.Z.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
                    })]
                })
            }

            function Vn(e) {
                var n, t, l = e.type,
                    o = e.selected,
                    i = e.needsPremium,
                    a = e.analyticsLocation,
                    s = e.onClick,
                    c = e.onClose,
                    d = l.value,
                    f = l.label;
                if (i) {
                    n = (0,
                        r.jsx)(u.TooltipContainer, {
                        tooltipClassName: Tn().tooltip,
                        spacing: 12,
                        "aria-label": J.Z.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
                        text: (0, r.jsx)(Fn, {}),
                        children: (0, r.jsx)(I.Z, {
                            align: I.Z.Align.CENTER,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-xs/bold",
                                className: Tn().selectorNitroText,
                                children: f
                            })
                        })
                    });
                    t = function() {
                        return Bn({
                            analyticsLocation: a,
                            onClose: c
                        })
                    }
                } else {
                    n = (0, r.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        className: o ? Tn().selectorTextSelected : Tn().selectorText,
                        children: f
                    });
                    t = function() {
                        return s(d)
                    }
                }
                return {
                    content: n,
                    className: M()(o ? Tn().selectorButtonSelected : Tn().selectorButton, wn({}, Tn().selectorButtonPremiumRequired, i)),
                    onClick: t
                }
            }

            function Hn(e) {
                var n = e.onClose,
                    t = e.selectedPreset,
                    l = e.selectedResolution,
                    o = e.selectedFPS,
                    a = e.onResolutionChange,
                    c = e.onFPSChange,
                    d = e.onPresetChange,
                    f = e.guildId,
                    h = e.captureDeviceSelected,
                    p = (0, s.e7)([E.default], (function() {
                        var e = E.default.getCurrentUser();
                        i()(null != e, "StreamSettings: user cannot be undefined");
                        return e
                    })),
                    g = On.ZP.isPremiumExactly(p, Nn.p9.TIER_0),
                    v = On.ZP.isPremium(p),
                    b = (0, s.e7)([S.Z], (function() {
                        var e;
                        return null === (e = S.Z.getGuild(f)) || void 0 === e ? void 0 : e.premiumTier
                    })),
                    C = (0, Sn.O)().location,
                    y = Cn.useExperiment({
                        location: "a87c74_1"
                    }, {
                        autoTrackExposure: g,
                        disable: !g
                    }).enabled || !v,
                    O = h ? R.z8 : R.WC,
                    _ = Gn(Dn({}, C), {
                        section: Y.jXE.STREAM_SETTINGS
                    }),
                    j = (0, r.jsx)(yn.Z, {
                        buttons: O.map((function(e) {
                            return Vn({
                                type: e,
                                selected: e.value === l,
                                needsPremium: !(0, A.Z)(t, e.value, o, p, b),
                                analyticsLocation: _,
                                onClick: function() {
                                    return a(e.value)
                                },
                                onClose: n
                            })
                        }))
                    }),
                    N = (0, r.jsx)(yn.Z, {
                        buttons: R.k0.map((function(e) {
                            return Vn({
                                type: e,
                                selected: e.value === o,
                                needsPremium: !(0, A.Z)(t, l, e.value, p, b),
                                analyticsLocation: _,
                                onClick: function() {
                                    return c(e.value)
                                },
                                onClose: n
                            })
                        }))
                    }),
                    x = [{
                        value: R.tI.PRESET_VIDEO,
                        label: J.Z.Messages.STREAM_PRESET_VIDEO
                    }].concat(Un(h ? [] : [{
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
                                className: Tn().documentModeGroup,
                                children: (0, r.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    children: J.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
                                        fps: o
                                    })
                                })
                            })
                        }), y ? (0, r.jsx)(Rn, {
                            message: J.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                            onClose: n,
                            openStreamUpsellModal: Bn
                        }) : null]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(I.Z, {
                            children: [(0, r.jsx)(u.FormItem, {
                                title: J.Z.Messages.STREAM_RESOLUTION,
                                className: Tn().settingsGroup,
                                titleClassName: q().formItemTitleSlim,
                                children: j
                            }), (0, r.jsx)(u.FormItem, {
                                title: J.Z.Messages.SCREENSHARE_FRAME_RATE,
                                className: Tn().settingsGroup,
                                titleClassName: q().formItemTitleSlim,
                                children: N
                            })]
                        }), y ? (0, r.jsx)(Rn, {
                            onClose: n,
                            openStreamUpsellModal: Bn
                        }) : null]
                    });
                return (0, r.jsx)(m.Z, Gn(Dn({}, _), {
                    children: (0, r.jsx)(u.FormItem, {
                        title: J.Z.Messages.STREAM_QUALITY,
                        titleClassName: q().formItemTitle,
                        className: q().modalContent,
                        children: (0, r.jsxs)("div", {
                            className: Tn().qualitySettingsContainer,
                            children: [(0, r.jsx)(u.SingleSelect, {
                                value: t,
                                className: ke().marginTop8,
                                options: x,
                                onChange: function(e) {
                                    return d(e)
                                }
                            }), Z]
                        })
                    })
                }))
            }
            var Wn = t(485081);

            function zn(e, n, t) {
                return null == n ? e : t.find((function(e) {
                    return (0, Wn.Z)(n.id, e.windowHandle)
                }))
            }
            var Kn = t(190564),
                Yn = t.n(Kn);

            function Jn(e) {
                var n = e.selectedSource,
                    t = e.selectSource,
                    l = e.sourceChanged,
                    o = e.onChangeSource,
                    i = (0, s.e7)([C.ZP, O.Z], (function() {
                        return (0, N.ED)() ? (0, T.Z)(C.ZP, O.Z) : null
                    })),
                    a = (0, s.e7)([v.Z], (function() {
                        return null != (null == i ? void 0 : i.id) ? v.Z.getGame(i.id) : null
                    })),
                    c = (0, s.e7)([C.ZP], (function() {
                        return C.ZP.getRunningGames()
                    })),
                    d = (0, s.Wu)([v.Z], (function() {
                        return c.map((function(e) {
                            return null != e.id ? v.Z.getGame(e.id) : null
                        })).filter(Ce.lm)
                    }), [c]),
                    f = null;
                null != n ? f = n.name : null != i && (f = i.name);
                if (null == f) return null;
                var m = zn(i, n, c),
                    h = l ? d.find((function(e) {
                        return e.id === (null == m ? void 0 : m.id)
                    })) : a,
                    p = null != n && n.id.startsWith("screen") ? se.Z : be;
                return (0, r.jsx)(u.FormItem, {
                    title: J.Z.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
                    className: q().modalContent,
                    titleClassName: q().formItemTitleVerySlim,
                    children: (0, r.jsxs)(Me, {
                        children: [null != h ? (0, r.jsx)(ie.Z, {
                            game: h,
                            size: ie.Z.Sizes.XSMALL,
                            className: Yn().selectedIcon
                        }) : (0, r.jsx)(p, {
                            className: Yn().selectedIcon
                        }), (0, r.jsx)("span", {
                            className: Yn().ellipsisText,
                            children: f
                        }), t ? (0, r.jsx)(u.Button, {
                            className: Yn().changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: o,
                            children: J.Z.Messages.CHANGE
                        }) : null]
                    })
                })
            }

            function Xn(e) {
                var n = e.onChange,
                    t = e.guildId,
                    l = (0, s.e7)([S.Z], (function() {
                        return S.Z.getGuild(t)
                    }));
                if (null == l) {
                    n();
                    return null
                }
                return (0, r.jsx)(u.FormItem, {
                    title: J.Z.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
                    className: q().modalContent,
                    titleClassName: q().formItemTitle,
                    children: (0, r.jsxs)(Me, {
                        children: [(0, r.jsx)(ae.Z, {
                            guild: l,
                            size: ae.Z.Sizes.SMALLER,
                            className: Yn().selectedIcon
                        }), (0, r.jsx)("span", {
                            className: Yn().ellipsisText,
                            children: l.toString()
                        }), (0, r.jsx)(u.Button, {
                            className: Yn().changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: n,
                            children: J.Z.Messages.CHANGE
                        })]
                    })
                })
            }

            function Qn(e) {
                var n = e.text;
                return (0, r.jsxs)(I.Z, {
                    align: I.Z.Align.CENTER,
                    className: Yn().warning,
                    children: [(0, r.jsx)(ue.Z, {
                        className: Yn().warningIcon
                    }), (0, r.jsx)(u.Text, {
                        color: "none",
                        variant: "text-xs/normal",
                        children: n
                    })]
                })
            }

            function $n(e) {
                var n, t = e.guildId,
                    o = (0, s.e7)([oe.Z], (function() {
                        return null !== (n = oe.Z.getMemberCount(t)) && void 0 !== n ? n : 0
                    })),
                    i = le.eo.useSetting(),
                    a = l.useCallback((function(e, n) {
                        le.eo.updateSetting(n);
                        j.default.track(Y.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
                            value: n
                        })
                    }), []);
                return o >= 2 && o <= je.tB ? (0, r.jsx)(u.FormItem, {
                    className: M()(q().modalContent, Yn().checkboxRow),
                    children: (0, r.jsx)(u.Checkbox, {
                        value: !!i,
                        type: u.Checkbox.Types.INVERTED,
                        onChange: a,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: J.Z.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
                        })
                    })
                }) : null
            }

            function qn(e) {
                var n = e.selectedSource,
                    t = e.selectedFPS,
                    o = e.selectedChannelId,
                    i = e.selectedPreset,
                    a = e.selectedResolution,
                    u = e.sourceChanged,
                    c = e.guildId,
                    d = e.selectSource,
                    f = e.selectGuild,
                    m = e.onClose,
                    h = e.onChangeSelectedFPS,
                    p = e.onChangeSelectedResolution,
                    v = e.onChangeSelectedPreset,
                    S = e.onChangeSelectedChannelId,
                    C = e.onChangeSource,
                    O = e.onChangeAudioDevice,
                    I = e.onChangeGuild,
                    _ = e.isAnimationDone,
                    j = (0, s.e7)([y.Z, g.Z], (function() {
                        return g.Z.getChannel(y.Z.getVoiceChannelId())
                    })),
                    x = (0, s.e7)([ye.Z], (function() {
                        return ye.Z.GPUDriversOutdated
                    })),
                    A = (0, s.e7)([b.Z], (function() {
                        return b.Z.getSoundshareEnabled()
                    })),
                    R = (0, s.e7)([E.default], (function() {
                        return E.default.getCurrentUser()
                    })),
                    Z = (0, D.fH)(c, "go_live_modal", !0),
                    T = b.Z.supports(Ne.AN.SOUNDSHARE) ? (0, N.ED)() && !Oe().satisfies(null === _e.Z || void 0 === _e.Z ? void 0 : _e.Z.os.release, je.I9) ? J.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE : (0,
                        N.V5)() && !Oe().satisfies(null === _e.Z || void 0 === _e.Z ? void 0 : _e.Z.os.release, je.Ec) ? J.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE : null : Ie.GO_LIVE_SCREENSHARE_NO_SOUND;
                null != n && n.id.startsWith("screen") ? T = J.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND : null == T && b.Z.supportsEnableSoundshare() && A !== Y.rtk.ENABLED && (T = J.Z.Messages.GO_LIVE_SCREENSHARE_ENABLE_FOR_SOUNDSHARE.format({
                    onVoiceSettingsClick: function() {
                        m();
                        L.Z.open(Y.oAB.VOICE)
                    }
                }));
                var P = Boolean(null == n ? void 0 : n.id.startsWith("camera")),
                    M = null != R && R.verified && !R.bot,
                    G = null != j && !(0, w.Yk)(j),
                    U = M && G;
                return (0, r.jsxs)(l.Fragment, {
                    children: [P ? (0, r.jsx)(Ve, {
                        selectedSource: n,
                        onChangeVideoDeviceSource: C,
                        onChangeAudioDevice: O
                    }) : (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(Jn, {
                            selectSource: d,
                            sourceChanged: u,
                            onChangeSource: C,
                            selectedSource: n
                        }), null != T ? (0, r.jsx)(Qn, {
                            text: T
                        }) : null]
                    }), f && null != c ? (0, r.jsx)(Xn, {
                        guildId: c,
                        onChange: I
                    }) : null, null != j ? (0, r.jsx)(vn, {
                        channel: j
                    }) : (0, r.jsx)(pn, {
                        guildId: c,
                        selectedChannelId: o,
                        onChangeSelectedChannelId: S
                    }), null != c && U ? (0, r.jsx)($n, {
                        guildId: c
                    }) : null, x ? (0, r.jsx)(Qn, {
                        text: J.Z.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
                    }) : null, (0, r.jsx)(Hn, {
                        selectedPreset: i,
                        selectedFPS: t,
                        selectedResolution: a,
                        guildId: c,
                        onClose: m,
                        onFPSChange: h,
                        onResolutionChange: p,
                        onPresetChange: v,
                        captureDeviceSelected: P
                    }), Z ? (0, r.jsx)(re, {
                        guildId: c,
                        isAnimationDone: _
                    }) : null]
                })
            }
            var et = t(107218),
                nt = t(718831),
                tt = t(540837),
                rt = t.n(tt);

            function lt(e) {
                var n = e.guildId,
                    t = e.onClick,
                    l = (0, s.e7)([S.Z], (function() {
                        return S.Z.getGuild(n)
                    })),
                    o = (0, s.e7)([He.ZP, S.Z, We.Z], (function() {
                        return He.ZP.getChannels(n)[He.Zb].some((function(e) {
                            var n = e.channel;
                            return (0, Ke.JL)(n, S.Z, We.Z)
                        }))
                    }));
                return null != l && o ? (0, r.jsxs)(u.Clickable, {
                    onClick: function() {
                        return t(n)
                    },
                    className: rt().guildRow,
                    children: [(0, r.jsx)(ae.Z, {
                        guild: l,
                        size: ae.Z.Sizes.SMALL,
                        className: rt().guildIcon
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        className: rt().guildName,
                        children: l.toString()
                    }), (0, r.jsx)(nt.Z, {
                        direction: nt.Z.Directions.RIGHT,
                        className: rt().guildArrow
                    })]
                }) : null
            }

            function ot(e) {
                var n = e.onSelectGuild,
                    t = (0, s.e7)([et.Z], (function() {
                        return et.Z.getGuildFolders()
                    }));
                return (0, r.jsx)(fn, {
                    title: J.Z.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
                    scrollerClassName: M()(rt().guildScroller, q().marginBottom),
                    children: Ze().flatMap(t, (function(e) {
                        return e.guildIds.map((function(e) {
                            return (0, r.jsx)(lt, {
                                guildId: e,
                                onClick: n
                            }, e)
                        }))
                    }))
                })
            }

            function it(e) {
                let n = function(e) {
                    let {
                        PI: n,
                        min: t,
                        max: r,
                        cos: l,
                        round: o
                    } = Math, i = e[0] | e[1] << 8 | e[2] << 16, a = e[3] | e[4] << 8, s = (63 & i) / 63, u = (i >> 6 & 63) / 31.5 - 1, c = (i >> 12 & 63) / 31.5 - 1, d = (i >> 18 & 31) / 31, f = i >> 23, m = (a >> 3 & 63) / 63, h = (a >> 9 & 63) / 63, p = a >> 15, g = r(3, p ? f ? 5 : 7 : 7 & a), v = r(3, p ? 7 & a : f ? 5 : 7), S = f ? (15 & e[5]) / 15 : 1, b = (e[5] >> 4) / 15, C = f ? 6 : 5, y = 0, E = (n, t, r) => {
                        let l = [];
                        for (let o = 0; o < t; o++)
                            for (let i = o ? 0 : 1; i * t < n * (t - o); i++) l.push(((e[C + (y >> 1)] >> ((1 & y++) << 2) & 15) / 7.5 - 1) * r);
                        return l
                    }, O = E(g, v, d), I = E(3, 3, 1.25 * m), _ = E(3, 3, 1.25 * h), j = f && E(5, 5, b), N = function(e) {
                        let n = e[3],
                            t = 128 & e[2],
                            r = 128 & e[4];
                        return (r ? t ? 5 : 7 : 7 & n) / (r ? 7 & n : t ? 5 : 7)
                    }(e), x = o(N > 1 ? 32 : 32 * N), A = o(N > 1 ? 32 / N : 32), R = new Uint8Array(x * A * 4), Z = [], T = [];
                    for (let e = 0, o = 0; e < A; e++)
                        for (let i = 0; i < x; i++, o += 4) {
                            let a = s,
                                d = u,
                                m = c,
                                h = S;
                            for (let e = 0, t = r(g, f ? 5 : 3); e < t; e++) Z[e] = l(n / x * (i + .5) * e);
                            for (let t = 0, o = r(v, f ? 5 : 3); t < o; t++) T[t] = l(n / A * (e + .5) * t);
                            for (let e = 0, n = 0; e < v; e++)
                                for (let t = e ? 0 : 1, r = 2 * T[e]; t * v < g * (v - e); t++, n++) a += O[n] * Z[t] * r;
                            for (let e = 0, n = 0; e < 3; e++)
                                for (let t = e ? 0 : 1, r = 2 * T[e]; t < 3 - e; t++, n++) {
                                    let e = Z[t] * r;
                                    d += I[n] * e;
                                    m += _[n] * e
                                }
                            if (f)
                                for (let e = 0, n = 0; e < 5; e++)
                                    for (let t = e ? 0 : 1, r = 2 * T[e]; t < 5 - e; t++, n++) h += j[n] * Z[t] * r;
                            let p = a - 2 / 3 * d,
                                b = (3 * a - p + m) / 2,
                                C = b - m;
                            R[o] = r(0, 255 * t(1, b));
                            R[o + 1] = r(0, 255 * t(1, C));
                            R[o + 2] = r(0, 255 * t(1, p));
                            R[o + 3] = r(0, 255 * t(1, h))
                        }
                    return {
                        w: x,
                        h: A,
                        rgba: R
                    }
                }(e);
                return function(e, n, t) {
                    let r = 4 * e + 1,
                        l = 6 + n * (5 + r),
                        o = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, n >> 8, 255 & n, 8, 6, 0, 0, 0, 0, 0, 0, 0, l >>> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 73, 68, 65, 84, 120, 1],
                        i = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                        a = 1,
                        s = 0;
                    for (let e = 0, l = 0, i = r - 1; e < n; e++, i += r - 1) {
                        o.push(e + 1 < n ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0);
                        for (s = (s + a) % 65521; l < i; l++) {
                            let e = 255 & t[l];
                            o.push(e);
                            a = (a + e) % 65521;
                            s = (s + a) % 65521
                        }
                    }
                    o.push(s >> 8, 255 & s, a >> 8, 255 & a, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130);
                    for (let [e, n] of [
                            [12, 29],
                            [37, 41 + l]
                        ]) {
                        let t = -1;
                        for (let r = e; r < n; r++) {
                            t ^= o[r];
                            t = t >>> 4 ^ i[15 & t];
                            t = t >>> 4 ^ i[15 & t]
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
            var at = t(12061),
                st = t(15086),
                ut = t(513328),
                ct = t(875700),
                dt = t(883518),
                ft = t.n(dt);

            function mt(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function ht(e) {
                ht = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return ht(e)
            }

            function pt(e, n) {
                return !n || "object" !== St(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function gt(e, n) {
                gt = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return gt(e, n)
            }
            var vt, St = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function bt(e) {
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
                    var t, r = ht(e);
                    if (n) {
                        var l = ht(this).constructor;
                        t = Reflect.construct(r, arguments, l)
                    } else t = r.apply(this, arguments);
                    return pt(this, t)
                }
            }! function(e) {
                e.WRAP = "wrap";
                e.STACK = "stack"
            }(vt || (vt = {}));
            var Ct = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && gt(e, n)
                }(t, e);
                var n = bt(t);

                function t() {
                    mt(this, t);
                    return n.apply(this, arguments)
                }
                var l = t.prototype;
                l.renderChildren = function() {
                    var e, n = this.props,
                        t = n.children,
                        l = n.layout,
                        o = n.columns;
                    switch (l) {
                        case vt.STACK:
                            e = "100%";
                            break;
                        case vt.WRAP:
                            e = "".concat(1 / o * 100, "%")
                    }
                    return t.map((function(n, t) {
                        return (0, r.jsx)(I.Z.Child, {
                            className: ft().tile,
                            basis: e,
                            grow: 0,
                            children: n
                        }, t)
                    }))
                };
                l.render = function() {
                    var e = this.props.className;
                    return (0, r.jsx)(I.Z, {
                        className: M()(e, ft().grid),
                        wrap: I.Z.Wrap.WRAP,
                        children: this.renderChildren()
                    })
                };
                return t
            }(l.PureComponent);
            Ct.Layout = vt;
            Ct.defaultProps = {
                children: [],
                layout: vt.WRAP,
                columns: 4
            };
            const yt = Ct;
            const Et = (0, bn.B)({
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
            var Ot = t(583711),
                It = t.n(Ot);

            function _t(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function jt(e) {
                var n = e.source,
                    t = e.selectedSource,
                    l = n.id,
                    o = n.name,
                    i = n.url,
                    a = (null == t ? void 0 : t.id) === l;
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
                                    backgroundImage: "url(".concat(i, ")")
                                },
                                className: M()(It().sourceThumbnail, _t({}, It().selected, a))
                            })
                        }), (0, r.jsx)(u.Text, {
                            className: M()(It().sourceName, _t({}, It().selected, a)),
                            variant: "text-sm/normal",
                            children: o
                        })]
                    })
                })
            }

            function Nt(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function xt(e, n, t, r, l, o, i) {
                try {
                    var a = e[o](i),
                        s = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(s) : Promise.resolve(s).then(r, l)
            }

            function At(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, l) {
                        var o = e.apply(n, t);

                        function i(e) {
                            xt(o, r, l, i, a, "next", e)
                        }

                        function a(e) {
                            xt(o, r, l, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function Rt(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Zt(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, l, o = [],
                            i = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            l = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (a) throw l
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
            var Tt = function(e, n) {
                var t, r, l, o, i = {
                    label: 0,
                    sent: function() {
                        if (1 & l[0]) throw l[1];
                        return l[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (l = 2 & o[0] ? r.return : o[0] ? r.throw || ((l = r.return) && l.call(r), 0) : r.next) && !(l = l.call(r, o[1])).done) return l;
                                (r = 0, l) && (o = [2 & o[0], l.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        l = o;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(l = i.trys, l = l.length > 0 && l[l.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!l || o[1] > l[0] && o[1] < l[3])) {
                                            i.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && i.label < l[1]) {
                                            i.label = l[1];
                                            l = o;
                                            break
                                        }
                                        if (l && i.label < l[2]) {
                                            i.label = l[2];
                                            i.ops.push(o);
                                            break
                                        }
                                        l[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                o = n.call(e, i)
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
                        }([o, a])
                    }
                }
            };

            function Pt(e, n) {
                var t = {};
                n.forEach((function(e) {
                    t[e.id] = e
                }));
                e.forEach((function(e) {
                    t[e.id] = e
                }));
                return Object.values(t).sort((function(e, n) {
                    return Gt(n) - Gt(e)
                }))
            }

            function Mt() {
                return Lt.apply(this, arguments)
            }

            function Lt() {
                return (Lt = At((function() {
                    var e, n, t, r, l, o, i, a;
                    return Tt(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                e = b.Z.getVideoDevices();
                                n = (0, st.Z)(b.Z.getMediaEngine(), [at.vA.WINDOW, at.vA.SCREEN], {
                                    width: 176,
                                    height: 99
                                });
                                return [4, wt()];
                            case 1:
                                t = s.sent();
                                return [4, n];
                            case 2:
                                r = s.sent();
                                l = r.filter((function(e) {
                                    return e.id.startsWith(at.vA.SCREEN)
                                }));
                                o = Pt(r.filter((function(e) {
                                    return e.id.startsWith(at.vA.WINDOW)
                                })), t);
                                i = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"];
                                a = Object.entries(e).filter((function(e) {
                                    var n = Zt(e, 2);
                                    n[0];
                                    return !n[1].disabled
                                })).map((function(e, n) {
                                    var t = Zt(e, 2),
                                        r = (t[0], t[1]),
                                        l = i[n % i.length],
                                        o = it(Uint8Array.from(atob(l), (function(e) {
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
                                    cameraSources: a
                                }]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function wt() {
                return Dt.apply(this, arguments)
            }

            function Dt() {
                Dt = At((function() {
                    var e;
                    return Tt(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                e = C.ZP.getRunningGames();
                                return [4, Promise.all(e.map((t = At((function(e) {
                                    var n, t, r, l;
                                    return Tt(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                if (null == e.name) return [2, null];
                                                o.label = 1;
                                            case 1:
                                                o.trys.push([1, 3, , 4]);
                                                return [4, ct.Z.identifyGame(e.pid, e.name)];
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
                return Dt.apply(this, arguments)
            }

            function Gt(e) {
                var n = (0, N.ED)() ? (0, T.Z)(C.ZP, O.Z) : null,
                    t = C.ZP.getRunningGames();
                return null != n && (0, Wn.Z)(e.id, n.windowHandle) ? 2 : null != t.find((function(n) {
                    return (0, Wn.Z)(e.id, n.windowHandle)
                })) ? 1 : 0
            }

            function Ut(e) {
                var n = e.selectedSource,
                    t = e.onChangeSelectedSource,
                    o = function() {
                        var e = N.current;
                        null != e && j(!e.isScrolledToTop())
                    },
                    i = Et.useExperiment({
                        location: "GoLive_Source_Select"
                    }).enableGoLiveCaptureCard,
                    a = b.Z.supports(Ne.AN.GO_LIVE_HARDWARE),
                    s = Zt(l.useState(null), 2),
                    c = s[0],
                    d = s[1],
                    f = Zt(l.useState(null), 2),
                    m = f[0],
                    h = f[1],
                    p = Zt(l.useState(null), 2),
                    g = p[0],
                    v = p[1],
                    S = null != g && g.length > 0,
                    C = Zt(l.useState(at.vA.WINDOW), 2),
                    y = C[0],
                    E = C[1],
                    O = Zt(l.useState(!1), 2),
                    _ = O[0],
                    j = O[1],
                    N = l.useRef(null),
                    x = l.useRef(new ut.Xp);
                l.useEffect((function() {
                    var e = x.current;
                    Mt().then((function(e) {
                        var n = e.screenSources,
                            t = e.windowSources,
                            r = e.cameraSources;
                        d(n);
                        h(t);
                        v(r)
                    }));
                    e.start(1e3, At((function() {
                        var e, n, t, r;
                        return Tt(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return [4, Mt()];
                                case 1:
                                    e = l.sent(), n = e.screenSources, t = e.windowSources, r = e.cameraSources;
                                    d(n);
                                    h(t);
                                    v(r);
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
                            N.current = e;
                            var n;
                            j(null !== (n = !e.isScrolledToTop()) && void 0 !== n && n)
                        }
                    }), []),
                    R = function(e) {
                        switch (e) {
                            case at.vA.WINDOW:
                                return m;
                            case at.vA.SCREEN:
                                return c;
                            case at.vA.CAMERA:
                                return g
                        }
                    }(y);
                if (null == R) return (0, r.jsx)(I.Z, {
                    className: It().spinner,
                    justify: I.Z.Justify.CENTER,
                    align: I.Z.Align.CENTER,
                    children: (0, r.jsx)(u.Spinner, {})
                });
                var Z = R.map((function(e) {
                    var l = e.id,
                        o = (null == n ? void 0 : n.id) === l;
                    return (0, r.jsx)(u.Clickable, {
                        className: M()(It().tile, Rt({}, It().selected, o)),
                        onClick: function() {
                            return t(e, null)
                        },
                        children: (0, r.jsx)(jt, {
                            source: e,
                            selectedSource: n
                        }, e.id)
                    }, l)
                }));
                return (0, r.jsxs)(l.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: It().segmentContainer,
                        children: [(0, r.jsx)(on, {
                            separator: _
                        }), (0, r.jsx)(u.SegmentedControl, {
                            options: function() {
                                var e = [{
                                    name: J.Z.Messages.GO_LIVE_MODAL_APPLICATIONS,
                                    value: at.vA.WINDOW
                                }, {
                                    name: J.Z.Messages.GO_LIVE_MODAL_SCREENS,
                                    value: at.vA.SCREEN
                                }];
                                i && a && S && e.push({
                                    name: J.Z.Messages.GO_LIVE_MODAL_CAPTURE,
                                    value: at.vA.CAMERA
                                });
                                return e
                            }(),
                            value: y,
                            onChange: function(e) {
                                var n = e.value;
                                return E(n)
                            },
                            className: It().segmentControl,
                            optionClassName: It().segmentControlOption
                        })]
                    }), y === at.vA.CAMERA ? (0, r.jsx)("div", {
                        className: It().sourceContainer,
                        children: (0, r.jsx)(u.AdvancedScroller, {
                            ref: A,
                            className: It().sourceScroller,
                            onScroll: o,
                            children: (0, r.jsx)(yt, {
                                layout: yt.Layout.WRAP,
                                columns: 2,
                                className: It().sourceContainer,
                                children: Z
                            })
                        })
                    }) : (0, r.jsx)(u.AdvancedScroller, {
                        ref: A,
                        className: It().sourceScroller,
                        onScroll: o,
                        children: (0, r.jsx)(yt, {
                            layout: yt.Layout.WRAP,
                            columns: 2,
                            className: It().sourceContainer,
                            children: Z
                        })
                    })]
                })
            }
            var kt = t(785915);

            function Bt(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Ft(e, n, t, r, l, o, i) {
                try {
                    var a = e[o](i),
                        s = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(s) : Promise.resolve(s).then(r, l)
            }

            function Vt(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, l) {
                        var o = e.apply(n, t);

                        function i(e) {
                            Ft(o, r, l, i, a, "next", e)
                        }

                        function a(e) {
                            Ft(o, r, l, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function Ht(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Wt(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Ht(e, n, t[n])
                    }))
                }
                return e
            }

            function zt(e, n) {
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

            function Kt(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, l, o = [],
                            i = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            l = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (a) throw l
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Bt(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Bt(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Yt, Jt = function(e, n) {
                var t, r, l, o, i = {
                    label: 0,
                    sent: function() {
                        if (1 & l[0]) throw l[1];
                        return l[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (l = 2 & o[0] ? r.return : o[0] ? r.throw || ((l = r.return) && l.call(r),
                                        0) : r.next) && !(l = l.call(r, o[1])).done) return l;
                                (r = 0, l) && (o = [2 & o[0], l.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        l = o;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(l = i.trys, l = l.length > 0 && l[l.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!l || o[1] > l[0] && o[1] < l[3])) {
                                            i.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && i.label < l[1]) {
                                            i.label = l[1];
                                            l = o;
                                            break
                                        }
                                        if (l && i.label < l[2]) {
                                            i.label = l[2];
                                            i.ops.push(o);
                                            break
                                        }
                                        l[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                o = n.call(e, i)
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
                        }([o, a])
                    }
                }
            };
            ! function(e) {
                e[e.GUILD = 0] = "GUILD";
                e[e.SOURCE = 1] = "SOURCE";
                e[e.CONFIRM = 2] = "CONFIRM"
            }(Yt || (Yt = {}));

            function Xt(e, n) {
                j.default.track(Y.rMx.SCREENSHARE_FAILED, {
                    source_id: e,
                    screens: n.length
                })
            }

            function Qt(e) {
                var n, o = e.selectGuild,
                    P = void 0 !== o && o,
                    M = e.selectSource,
                    L = void 0 === M || M,
                    w = e.guildId,
                    D = e.analyticsLocation,
                    G = e.onClose,
                    U = e.transitionState,
                    k = function() {
                        ! function() {
                            i()(null != K || null != ve, "got nothing to stream");
                            var e, n = null !== (e = null == z ? void 0 : z.id) && void 0 !== e ? e : he;
                            i()(null != n, "Received null target channel ID");
                            var t, r = g.Z.getChannel(n),
                                l = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : w;
                            null == z && d.default.selectVoiceChannel(n);
                            var o = Oe,
                                a = je,
                                s = Ae;
                            if (!(0, A.Z)(o, a, s, X, Q)) {
                                o = R.tI.PRESET_VIDEO;
                                a = R.LY.RESOLUTION_720;
                                s = R.ws.FPS_30
                            }(0, f.Rc)({
                                preset: o,
                                resolution: a,
                                frameRate: s
                            });
                            var u = zn(K, ve, C.ZP.getRunningGames()),
                                m = !(0, N.ED)() || null == u || (null == ve ? void 0 : ve.id.startsWith("camera:")) || null == u ? null : u.pid;
                            (0, f.WH)(l, n, {
                                pid: m,
                                sourceId: null == m && null != ve ? ve.id : null,
                                sourceName: null == m && null != ve ? ve.name : null,
                                audioSourceId: Ce
                            });
                            Vt((function() {
                                return Jt(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, h.Z.hasPermission(kt.Eu.SCREEN_RECORDING, {
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
                        (0, u.openModalLazy)(Vt((function() {
                            var e, l;
                            return Jt(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, t.e(43315).then(t.bind(t, 543315))];
                                    case 1:
                                        e = o.sent(), l = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(l, zt(Wt({}, e), {
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
                    z = (0, s.e7)([y.Z, g.Z], (function() {
                        return g.Z.getChannel(y.Z.getVoiceChannelId())
                    })),
                    K = (0, s.e7)([C.ZP, O.Z], (function() {
                        return (0, N.ED)() ? (0, T.Z)(C.ZP, O.Z) : null
                    })),
                    X = (0, s.e7)([E.default], (function() {
                        var e = E.default.getCurrentUser();
                        i()(null != e, "GoLiveModal: user cannot be undefined");
                        return e
                    })),
                    Q = (0, s.e7)([S.Z], (function() {
                        var e;
                        return null === (e = S.Z.getGuild(w)) || void 0 === e ? void 0 : e.premiumTier
                    })),
                    $ = Kt(null !== (n = Z(V, X, Q)) && void 0 !== n ? n : [R.LY.RESOLUTION_720, R.ws.FPS_30], 2),
                    ee = $[0],
                    ne = $[1];
                if (V !== R.tI.PRESET_CUSTOM) {
                    H = ee;
                    W = ne
                }
                var te, re = (0, _.Dt)(),
                    le = Kt(l.useState(function(e, n) {
                        return e ? Yt.GUILD : n ? Yt.SOURCE : Yt.CONFIRM
                    }(P, L)), 2),
                    oe = le[0],
                    ie = le[1],
                    ae = Kt(l.useState(null), 2),
                    se = ae[0],
                    ue = ae[1],
                    ce = Kt(l.useState(!1), 2),
                    de = ce[0],
                    fe = ce[1],
                    me = Kt(l.useState(null), 2),
                    he = me[0],
                    pe = me[1],
                    ge = Kt(l.useState(null), 2),
                    ve = ge[0],
                    Se = ge[1],
                    be = Kt(l.useState(null), 2),
                    Ce = be[0],
                    ye = be[1],
                    Ee = Kt(l.useState(V), 2),
                    Oe = Ee[0],
                    Ie = Ee[1],
                    _e = Kt(l.useState(H), 2),
                    je = _e[0],
                    Ne = _e[1],
                    xe = Kt(l.useState(W), 2),
                    Ae = xe[0],
                    Re = xe[1],
                    Ze = Kt(l.useState(null != w ? w : null), 2),
                    Te = Ze[0],
                    Pe = Ze[1],
                    Me = null !== (te = null == z ? void 0 : z.id) && void 0 !== te ? te : he;
                l.useEffect((function() {
                    var e = (0, N.ED)() ? (0, T.Z)(C.ZP, O.Z) : null,
                        n = null != (null == e ? void 0 : e.id) ? v.Z.getGame(e.id) : null;
                    j.default.track(Y.rMx.OPEN_MODAL, {
                        type: "Go Live Modal",
                        application_id: null == n ? void 0 : n.id,
                        application_name: null == e ? void 0 : e.name,
                        game_id: null == n ? void 0 : n.id,
                        location_section: D
                    })
                }), [D]);
                var Le = l.useCallback((function(e, n, t) {
                    var r = Z(e, X, Q),
                        l = Kt(null != r ? r : [n, t], 2),
                        o = l[0],
                        i = l[1];
                    if (e !== Oe) {
                        n = o;
                        t = i
                    }
                    if (!(0, A.Z)(e, n, t, X, Q)) {
                        var a = Kt(Z(R.tI.PRESET_VIDEO, X, Q), 2);
                        n = a[0];
                        t = a[1]
                    }
                    t !== Ae && Re(t);
                    n !== je && Ne(n);
                    o !== n || i !== t ? Ie(R.tI.PRESET_CUSTOM) : e !== Oe && Ie(e)
                }), [X, Q, Ae, je, Oe]);

                function we() {
                    return (we = Vt((function(e) {
                        var n, t, l, o;
                        return Jt(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    e.preventDefault();
                                    if (oe === Yt.SOURCE) return [2, ie(Yt.CONFIRM)];
                                    n = zn(K, ve, C.ZP.getRunningGames());
                                    t = x.ZP.supportsFeature(Y.eRX.ELEVATED_HOOK) && (null == n ? void 0 : n.elevated);
                                    return (0, N.V5)() && null != ve ? [4, b.Z.getMediaEngine().getDesktopSources()] : [3, 2];
                                case 1:
                                    l = i.sent();
                                    if ((o = ve.id).startsWith("screen") && l.length > 0 && !l.some((function(e) {
                                            return e.includes(o)
                                        }))) {
                                        Xt(o, l);
                                        (0, u.openModal)((function(e) {
                                            return (0, r.jsx)(u.ConfirmModal, zt(Wt({
                                                header: J.Z.Messages.SCREENSHARE_RELAUNCH,
                                                confirmText: J.Z.Messages.OKAY,
                                                cancelText: J.Z.Messages.CANCEL,
                                                onConfirm: function() {
                                                    return x.ZP.relaunch()
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
                                    i.label = 2;
                                case 2:
                                    t ? B() : k();
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                var De = l.useCallback((function(e) {
                        Se(e);
                        if (null != e) {
                            ie(Yt.CONFIRM);
                            fe(!0)
                        }
                    }), []),
                    Ge = l.useCallback((function(e) {
                        Pe(e);
                        ie(L ? Yt.SOURCE : Yt.CONFIRM)
                    }), [L]),
                    Ue = function(e) {
                        switch (e) {
                            case Yt.SOURCE:
                                return J.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
                            case Yt.CONFIRM:
                                return null;
                            case Yt.GUILD:
                            default:
                                return J.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
                        }
                    }(oe),
                    ke = (0, r.jsx)(u.ModalHeader, {
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
                            }), null != Ue ? (0, r.jsx)(u.Text, {
                                className: q().headerDescription,
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: Ue
                            }) : null]
                        })
                    }),
                    Be = (0, r.jsxs)(u.Slides, {
                        springConfig: zt(Wt({}, a.config.stiff), {
                            clamp: !0
                        }),
                        activeSlide: oe,
                        width: 480,
                        onSlideReady: ue,
                        children: [(0, r.jsx)(u.Slide, {
                            id: Yt.GUILD,
                            children: (0, r.jsx)("div", {
                                className: q().modalSize,
                                children: (0, r.jsx)(ot, {
                                    onSelectGuild: Ge
                                })
                            })
                        }), (0, r.jsx)(u.Slide, {
                            id: Yt.SOURCE,
                            children: (0, r.jsx)("div", {
                                className: q().modalSize,
                                children: (0, r.jsx)(Ut, {
                                    selectedSource: ve,
                                    onChangeSelectedSource: De
                                })
                            })
                        }), (0, r.jsx)(u.Slide, {
                            id: Yt.CONFIRM,
                            children: (0, r.jsx)("div", {
                                className: q().modalSize,
                                children: (0, r.jsx)(qn, {
                                    selectedChannelId: he,
                                    selectedPreset: Oe,
                                    selectedResolution: je,
                                    selectedSource: ve,
                                    selectedFPS: Ae,
                                    sourceChanged: de,
                                    selectSource: L,
                                    onChangeSelectedFPS: function(e) {
                                        return Le(Oe, je, e)
                                    },
                                    onChangeSelectedResolution: function(e) {
                                        return Le(Oe, e, Ae)
                                    },
                                    onChangeSelectedPreset: function(e) {
                                        return Le(e, je, Ae)
                                    },
                                    onChangeSelectedChannelId: pe,
                                    onChangeSelectedSource: De,
                                    onChangeSource: function() {
                                        return ie(Yt.SOURCE)
                                    },
                                    onChangeAudioDevice: function(e) {
                                        return ye(e)
                                    },
                                    onChangeGuild: function() {
                                        return ie(Yt.GUILD)
                                    },
                                    onClose: G,
                                    guildId: Te,
                                    selectGuild: P,
                                    isAnimationDone: se === Yt.CONFIRM && U === u.ModalTransitionState.ENTERED
                                })
                            })
                        })]
                    }),
                    Fe = function(e, n, t, r) {
                        switch (e) {
                            case Yt.SOURCE:
                                return n ? Yt.GUILD : null;
                            case Yt.CONFIRM:
                                return r ? Yt.SOURCE : !t && n ? Yt.GUILD : null;
                            case Yt.GUILD:
                            default:
                                return null
                        }
                    }(oe, P, L, de),
                    Ve = oe !== Yt.CONFIRM || null == ve && null == K || null == Me,
                    He = (0, r.jsxs)(u.ModalFooter, {
                        justify: null == Fe ? I.Z.Justify.START : I.Z.Justify.BETWEEN,
                        children: [(0, r.jsx)(u.Button, {
                            type: "submit",
                            size: u.Button.Sizes.SMALL,
                            disabled: Ve,
                            autoFocus: !0,
                            children: J.Z.Messages.GO_LIVE_MODAL_CTA
                        }), null == Fe ? (0, r.jsx)(u.Button, {
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
                                return ie(Fe)
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
                                return we.apply(this, arguments)
                            },
                            children: [ke, Be, He]
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
                i = t(304548),
                a = t(237702),
                s = t.n(a),
                u = function(e) {
                    var n = e.data,
                        t = e.disabled,
                        l = n.content,
                        a = n.className,
                        u = n.onClick,
                        c = n.disabled;
                    return (0, r.jsx)(i.FocusRing, {
                        children: (0, r.jsx)("button", {
                            type: "button",
                            className: o()(s().item, a),
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