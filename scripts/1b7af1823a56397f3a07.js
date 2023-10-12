"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [69521], {
        369521: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => er
            });
            var r = t(785893),
                l = t(667294),
                o = t(441143),
                a = t.n(o),
                i = t(248088),
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
                E = t(964517),
                b = t(671723),
                C = t(715107),
                y = t(473903),
                O = t(375759),
                I = t(107364),
                _ = t(443812),
                j = t(652591),
                x = t(120415),
                N = t(310126),
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
                P = t(294184),
                L = t.n(P),
                M = t(396179),
                w = t(1477),
                D = t(228667),
                G = t(579581),
                U = t(19585),
                k = t(276611),
                B = t(2590),
                V = t(203600),
                F = t(473708),
                H = t(894922),
                W = t.n(H),
                z = t(903803),
                K = t.n(z);
            const Y = function() {
                var e = (0, G.O)(),
                    n = (0,
                        U.Z)().analyticsLocations;
                l.useEffect((function() {
                    j.default.track(B.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: V.cd.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL,
                        location: e.location,
                        location_stack: n
                    })
                }), []);
                return (0, r.jsx)(u.FormItem, {
                    className: K().modalContent,
                    children: (0, r.jsxs)("div", {
                        className: W().nitroUpsellContainer,
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)(u.Heading, {
                                variant: "heading-lg/bold",
                                color: "always-white",
                                className: W().nitroUpsellTitle,
                                children: F.Z.Messages.CLIPS_GO_LIVE_EA_UPSELL_TITLE
                            }), (0, r.jsx)(u.Text, {
                                className: W().nitroUpsellSubtitle,
                                variant: "text-sm/normal",
                                color: "always-white",
                                children: F.Z.Messages.CLIPS_GO_LIVE_EA_UPSELL_BODY.format()
                            })]
                        }), (0, r.jsx)(u.Button, {
                            look: u.Button.Looks.INVERTED,
                            onClick: function() {
                                (0, k.Z)({
                                    subscriptionTier: V.Si.TIER_2,
                                    analyticsLocations: n
                                })
                            },
                            children: F.Z.Messages.CLIPS_GO_LIVE_EA_UPSELL_CTA
                        })]
                    })
                })
            };
            var J = t(418705),
                X = t(515169),
                Q = t(113865),
                $ = t(796308),
                q = t(138049),
                ee = t(348592),
                ne = t(79251),
                te = t(335072),
                re = t(633371),
                le = t(860123),
                oe = t(231852),
                ae = t.n(oe);

            function ie(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function se(e, n) {
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
                    if ("string" == typeof e) return ie(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ie(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ue = function(e) {
                var n = e.clipsEnabled,
                    t = e.isAnimationDone,
                    o = e.guildId,
                    a = e.children,
                    i = (0, s.e7)([te.Z], (function() {
                        return te.Z.getHardwareClassification()
                    })),
                    c = i === re.x.MEETS_MINIMUM || i === re.x.UNKNOWN,
                    d = i === re.x.BELOW_MINIMUM,
                    f = t && (c || d) && !n,
                    m = se((0, Q.c)(f ? [J.z$.CLIPS_ONBOARDING_GO_LIVE_COACHMARK] : []), 2),
                    h = m[0],
                    p = m[1],
                    g = h === J.z$.CLIPS_ONBOARDING_GO_LIVE_COACHMARK;
                l.useEffect((function() {
                    n && (0, X.EW)(J.z$.CLIPS_ONBOARDING_GO_LIVE_COACHMARK, {
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
                        return (0, r.jsx)($.Z, {
                            dismissibleContent: J.z$.CLIPS_ONBOARDING_GO_LIVE_COACHMARK,
                            shouldUseHorizontalButtons: !0,
                            inlineArt: !0,
                            artClassName: ae().clipsEducationArt,
                            position: "right",
                            header: F.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_TITLE,
                            headerClassName: ae().clipsEducationHeader,
                            body: (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: F.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY
                                }), d ? (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    className: ae().warningText,
                                    children: F.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_HARDWARE_IMPACT_WARNING.format({
                                        url: ee.Z.getArticleURL(B.BhN.CLIPS)
                                    })
                                }) : null]
                            }),
                            tryItText: F.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
                            onTryFeature: function(e) {
                                (0, le.em)({
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
                        return a
                    }
                })
            };
            const ce = function(e) {
                var n = e.isAnimationDone,
                    t = e.guildId,
                    l = (0, s.e7)([te.Z], (function() {
                        return te.Z.getSettings().clipsEnabled
                    })),
                    o = (0, s.e7)([q.Z], (function() {
                        return q.Z.getKeybindForAction(B.kg4.SAVE_CLIP)
                    }));
                a()(null != o, "Clips keybind should be set");
                var i = ne.BB(o.shortcut, !0);
                return (0, r.jsx)(u.FormItem, {
                    title: F.Z.Messages.CLIPS_SETTINGS,
                    titleClassName: K().formItemTitle,
                    className: K().modalContent,
                    children: (0, r.jsxs)("div", {
                        className: ae().container,
                        children: [(0, r.jsx)(ue, {
                            clipsEnabled: l,
                            guildId: t,
                            isAnimationDone: n,
                            children: (0, r.jsx)(u.FormSwitch, {
                                className: ae().formSwitch,
                                value: l,
                                onChange: function(e) {
                                    return (0, le.em)({
                                        clipsEnabled: e,
                                        guildId: t,
                                        trackAnalytics: !0
                                    })
                                },
                                hideBorder: !0,
                                children: F.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
                            })
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "interactive-normal",
                            className: ae().description,
                            children: F.Z.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
                                keybind: i,
                                keybindHook: function() {
                                    return (0, r.jsx)("span", {
                                        className: ae().keybindHintKeys,
                                        children: (0, r.jsx)(u.KeyCombo, {
                                            className: ae().keybindShortcut,
                                            shortcut: i
                                        })
                                    })
                                }
                            })
                        })]
                    })
                })
            };
            var de = t(968449),
                fe = t(27851),
                me = t(750203),
                he = t(124251),
                pe = t(425454),
                ge = t(818417),
                ve = t(168075),
                Se = t(795308),
                Ee = t(633878);

            function be(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Ce(e, n) {
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

            function ye(e, n) {
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

            function Oe(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Ie(e, n) {
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

            function _e(e, n) {
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
            const je = (0, ve.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    l = e.height,
                    o = void 0 === l ? 24 : l,
                    a = e.color,
                    i = void 0 === a ? "currentColor" : a,
                    s = e.foreground,
                    u = _e(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", Ie(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            Oe(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, Ee.Z)(u)), {
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
            }), (function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    l = e.height,
                    o = void 0 === l ? 24 : l,
                    a = e.color,
                    i = void 0 === a ? Se.Z.colors.INTERACTIVE_NORMAL : a,
                    s = e.colorClass,
                    u = void 0 === s ? "" : s,
                    c = ye(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", Ce(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            be(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, Ee.Z)(c)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: o,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6Zm0 6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6Zm3-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: u
                    })
                }))
            }));
            var xe = t(72580),
                Ne = t(647428),
                Ae = t(236625),
                Re = t.n(Ae),
                Ze = t(20978),
                Te = t(306472),
                Pe = t(443132),
                Le = t(36256);
            const Me = new Uint32Array(65536),
                we = (e, n) => {
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
                        for (; s--;) Me[e.charCodeAt(s)] |= 1 << s;
                        for (s = 0; s < r; s++) {
                            let e = Me[n.charCodeAt(s)];
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
                        for (; s--;) Me[e.charCodeAt(s)] = 0;
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
                            for (let n = u; n < c; n++) Me[e.charCodeAt(n)] |= 1 << n;
                            for (let e = 0; e < t; e++) {
                                const t = Me[n.charCodeAt(e)],
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
                            for (let n = u; n < c; n++) Me[e.charCodeAt(n)] = 0
                        }
                        let u = 0,
                            c = -1;
                        const d = 32 * s,
                            f = Math.min(32, r - d) + d;
                        for (let n = d; n < f; n++) Me[e.charCodeAt(n)] |= 1 << n;
                        let m = r;
                        for (let e = 0; e < t; e++) {
                            const t = Me[n.charCodeAt(e)],
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
                        for (let n = d; n < f; n++) Me[e.charCodeAt(n)] = 0;
                        return m
                    })(e, n)
                };
            var De = t(496486),
                Ge = t.n(De),
                Ue = t(815208),
                ke = t.n(Ue);

            function Be(e) {
                var n = e.children;
                return (0, r.jsx)("div", {
                    className: ke().card,
                    children: n
                })
            }

            function Ve(e, n) {
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
                    if ("string" == typeof e) return Ve(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ve(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var He = t(403869),
                We = t.n(He),
                ze = t(380203),
                Ke = t.n(ze);

            function Ye(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Je(e, n) {
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
                    if ("string" == typeof e) return Ye(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ye(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Xe(e) {
                var n, t = e.selectedSource,
                    o = e.onChangeVideoDeviceSource,
                    a = e.onChangeAudioDevice,
                    i = (n = E.Z.getVideoDevices(), Object.entries(n).map((function(e) {
                        var n = Fe(e, 2),
                            t = (n[0], n[1]);
                        return {
                            id: "camera:" + t.id,
                            name: t.name,
                            url: ""
                        }
                    }))),
                    c = (0, s.e7)([E.Z], (function() {
                        return E.Z.getInputDevices()
                    })),
                    d = Je(l.useState(function(e, n, t) {
                        if (null != n && null != t) {
                            var r = n.find((function(n) {
                                return n.id === e
                            }));
                            if (null == r) return;
                            var l = Ge().reduce(t, (function(e, n) {
                                return we(r.name, n.name) < we(r.name, e.name) ? n : e
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
                        className: K().modalContent,
                        children: [(0, r.jsx)(u.FormItem, {
                            className: Ke().marginTop8,
                            children: (0, r.jsxs)(Be, {
                                children: [(0, r.jsx)("span", {
                                    className: We().ellipsisText,
                                    children: t.name
                                }), (0, r.jsx)(u.Button, {
                                    className: We().changeButton,
                                    color: u.Button.Colors.PRIMARY,
                                    size: u.Button.Sizes.SMALL,
                                    onClick: o,
                                    children: F.Z.Messages.CHANGE
                                })]
                            })
                        }), (0, r.jsx)(u.FormItem, {
                            className: Ke().marginTop8,
                            title: F.Z.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
                            children: (0, r.jsx)(u.SingleSelect, {
                                value: f,
                                className: Ke().marginaTop8,
                                onChange: function(e) {
                                    m(e);
                                    a(e)
                                },
                                options: Ge().map(c, (function(e) {
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
            var Qe = t(5544),
                $e = t(682776),
                qe = t(602397),
                en = t(924066),
                nn = t(773011),
                tn = t(469023),
                rn = t(96606),
                ln = t(773148),
                on = t(366873),
                an = t.n(on);

            function sn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function un(e) {
                var n = e.channel,
                    t = e.users,
                    l = e.selected,
                    o = void 0 !== l && l,
                    a = (0, nn.ZP)(n),
                    i = null;
                if (null != t && t.length > 0) {
                    i = (0, r.jsx)(rn.Z, {
                        guildId: n.guild_id,
                        className: an().voiceUserList,
                        users: t,
                        renderUser: function(e) {
                            if (null == e) return null;
                            var t = ln.ZP.getName(n.guild_id, n.id, e),
                                l = e.getAvatarURL(n.guild_id, 24);
                            return (0, r.jsx)(u.TooltipContainer, {
                                text: t,
                                children: (0, r.jsx)("img", {
                                    src: null != l ? l : void 0,
                                    "aria-label": e.username,
                                    alt: "",
                                    className: an().avatar
                                })
                            })
                        },
                        renderMoreUsers: function(e) {
                            var l = function(e, n) {
                                var t = n.id,
                                    r = n.guild_id;
                                return e.length <= 1 ? null : 2 === e.length ? F.Z.Messages.GO_LIVE_MODAL_OVERFLOW_TWO_USERS.format({
                                    nickname0: ln.ZP.getName(r, t, e[0]),
                                    nickname1: ln.ZP.getName(r, t, e[1])
                                }) : 3 === e.length ? F.Z.Messages.GO_LIVE_MODAL_OVERFLOW_THREE_USERS.format({
                                    nickname0: ln.ZP.getName(r, t, e[0]),
                                    nickname1: ln.ZP.getName(r, t, e[1]),
                                    nickname2: ln.ZP.getName(r, t, e[2])
                                }) : F.Z.Messages.GO_LIVE_MODAL_OVERFLOW_FOUR_OR_MORE_USERS.format({
                                    nickname0: ln.ZP.getName(r, t, e[0]),
                                    nickname1: ln.ZP.getName(r, t, e[1]),
                                    remainingCount: e.length - 2
                                })
                            }(t.slice(4), n);
                            return (0, r.jsx)("div", {
                                children: (0, r.jsx)(u.TooltipContainer, {
                                    text: l,
                                    children: (0, r.jsx)("div", {
                                        className: an().userListOverflow,
                                        children: e
                                    })
                                })
                            })
                        },
                        max: 5,
                        showUserPopout: !1
                    })
                }
                var s = (0, tn.Z)(n);
                return (0, r.jsxs)("div", {
                    className: L()(an().channelInfo, sn({}, an().selected, o)),
                    children: [(0, r.jsx)(s, {
                        className: an().channelIcon
                    }), (0, r.jsx)("div", {
                        className: an().channelName,
                        children: a
                    }), i]
                })
            }
            var cn = t(227993),
                dn = t.n(cn);

            function fn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function mn(e) {
                var n = e.separator,
                    t = void 0 !== n && n;
                return (0, r.jsx)("div", {
                    className: L()(dn().divider, fn({}, dn().separator, t))
                })
            }
            var hn = t(559221),
                pn = t.n(hn);

            function gn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function vn(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Sn(e, n) {
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
                    if ("string" == typeof e) return gn(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return gn(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function En(e) {
                var n = e.title,
                    t = e.scrollerClassName,
                    o = e.scrollerInnerClassName,
                    a = e.children,
                    i = l.useRef(null),
                    s = Sn(l.useState(!1), 2),
                    c = s[0],
                    d = s[1],
                    f = Sn(l.useState(!1), 2),
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
                        className: L()(pn().title, pn().scrollWrapper),
                        children: [(0, r.jsx)(u.FormTitle, {
                            className: K().formItemTitle,
                            children: n
                        }), (0, r.jsx)(mn, {
                            separator: c
                        })]
                    }), (0, r.jsx)("div", {
                        className: t,
                        children: (0, r.jsx)(u.AdvancedScroller, {
                            ref: i,
                            className: L()(pn().scrollerInner, o, vn({}, pn().bottomSeparator, m)),
                            onScroll: p,
                            children: a
                        })
                    })]
                })
            }
            var bn = t(426314),
                Cn = t.n(bn);

            function yn(e) {
                var n = e.selectedChannelId,
                    t = e.guildId,
                    l = e.onChangeSelectedChannelId,
                    o = (0, s.e7)([y.default], (function() {
                        return y.default.getCurrentUser()
                    })),
                    a = (0, s.e7)([S.Z, Qe.ZP, $e.Z], (function() {
                        return (0, en.h_)(Qe.ZP.getChannels(t), S.Z, $e.Z)
                    })),
                    i = (0,
                        s.e7)([qe.ZP], (function() {
                        return qe.ZP.getVoiceStates(t)
                    })),
                    c = a.map((function(e) {
                        var t;
                        return {
                            name: (0, r.jsx)(un, {
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
                return (0, r.jsx)(En, {
                    title: F.Z.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
                    scrollerInnerClassName: Cn().channelSelectScrollerInner,
                    children: (0, r.jsx)(u.RadioGroup, {
                        options: c,
                        value: n,
                        itemInfoClassName: Cn().channelInfoWrapper,
                        itemTitleClassName: Cn().channelTitleWrapper,
                        onChange: function(e) {
                            var n = e.value;
                            return l(n)
                        }
                    })
                })
            }
            var On = t(664625);

            function In(e) {
                var n = e.channel,
                    t = (0, s.e7)([On.default], (function() {
                        return On.default.getId()
                    })),
                    l = (0, s.e7)([qe.ZP], (function() {
                        return qe.ZP.getVoiceStatesForChannel(n)
                    }), [n]);
                return (0, r.jsx)(u.FormItem, {
                    title: F.Z.Messages.GO_LIVE_MODAL_CURRENT_CHANNEL_FORM_TITLE,
                    className: K().modalContent,
                    titleClassName: K().formItemTitle,
                    children: (0, r.jsx)(Be, {
                        children: (0,
                            r.jsx)(un, {
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
            var _n = t(260561),
                jn = (0, _n.B)({
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
                xn = t(68543),
                Nn = t(406493),
                An = t(116094);
            const Rn = (0, _n.B)({
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
            var Zn = t(207511),
                Tn = t.n(Zn);

            function Pn(e) {
                var n = e.message,
                    t = e.onClose,
                    l = e.openStreamUpsellModal,
                    o = Rn.useExperiment({
                        location: "371fea_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    a = (0, U.Z)().analyticsLocations,
                    i = {
                        section: B.jXE.STREAM_SETTINGS,
                        object: B.qAy.PREMIUM_UPSELL_BANNER,
                        objectType: B.Qqv.BUY
                    };
                return (0, r.jsxs)(u.Clickable, {
                    onClick: function() {
                        ! function() {
                            Rn.trackExposure({
                                location: "371fea_2"
                            });
                            o.enabled ? (0, k.Z)({
                                initialPlanId: null,
                                subscriptionTier: V.Si.TIER_2,
                                analyticsLocations: a,
                                analyticsObject: i
                            }) : l({
                                analyticsLocation: i,
                                onClose: t
                            })
                        }()
                    },
                    className: L()(Tn().upsellBanner, Tn().gradientBackground),
                    children: [(0, r.jsxs)("div", {
                        className: Tn().iconTextContainer,
                        children: [(0, r.jsx)(Nn.Z, {
                            className: Tn().iconColor
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            className: Tn().upsellText,
                            children: null != n ? n : F.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER
                        })]
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        className: Tn().textLink,
                        children: F.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA
                    })]
                })
            }
            var Ln = t(324407),
                Mn = t.n(Ln);

            function wn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Dn(e, n, t, r, l, o, a) {
                try {
                    var i = e[o](a),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, l)
            }

            function Gn(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, l) {
                        var o = e.apply(n, t);

                        function a(e) {
                            Dn(o, r, l, a, i, "next", e)
                        }

                        function i(e) {
                            Dn(o, r, l, a, i, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Un(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function kn(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Un(e, n, t[n])
                    }))
                }
                return e
            }

            function Bn(e, n) {
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

            function Vn(e) {
                return function(e) {
                    if (Array.isArray(e)) return wn(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return wn(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return wn(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Fn = function(e, n) {
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
                                if (t = 1,
                                    r && (l = 2 & o[0] ? r.return : o[0] ? r.throw || ((l = r.return) && l.call(r), 0) : r.next) && !(l = l.call(r, o[1])).done) return l;
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

            function Hn(e) {
                var n = e.analyticsLocation,
                    l = e.onClose;
                (0, u.openModalLazy)(Gn((function() {
                    var e, o;
                    return Fn(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, t.e(23850).then(t.bind(t, 123850))];
                            case 1:
                                e = a.sent(), o = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(o, Bn(kn({}, e), {
                                        onCloseParent: l,
                                        analyticsSource: n
                                    }))
                                }]
                        }
                    }))
                })))
            }

            function Wn() {
                return (0, r.jsxs)("div", {
                    className: Mn().toolTipTextContainer,
                    children: [(0, r.jsx)(Nn.Z, {
                        className: L()(Mn().premiumIcon, Mn().premiumIconColor)
                    }), (0, r.jsx)(u.Text, {
                        className: Mn().upsellText,
                        variant: "text-sm/medium",
                        children: F.Z.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
                    })]
                })
            }

            function zn(e) {
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
                        tooltipClassName: Mn().tooltip,
                        spacing: 12,
                        "aria-label": F.Z.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
                        text: (0, r.jsx)(Wn, {}),
                        children: (0, r.jsx)(I.Z, {
                            align: I.Z.Align.CENTER,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-xs/bold",
                                className: Mn().selectorNitroText,
                                children: f
                            })
                        })
                    });
                    t = function() {
                        return Hn({
                            analyticsLocation: i,
                            onClose: c
                        })
                    }
                } else {
                    n = (0, r.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        className: o ? Mn().selectorTextSelected : Mn().selectorText,
                        children: f
                    });
                    t = function() {
                        return s(d)
                    }
                }
                return {
                    content: n,
                    className: L()(o ? Mn().selectorButtonSelected : Mn().selectorButton, Un({}, Mn().selectorButtonPremiumRequired, a)),
                    onClick: t
                }
            }

            function Kn(e) {
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
                    g = An.ZP.isPremiumExactly(p, V.p9.TIER_0),
                    v = An.ZP.isPremium(p),
                    E = (0, s.e7)([S.Z], (function() {
                        var e;
                        return null === (e = S.Z.getGuild(f)) || void 0 === e ? void 0 : e.premiumTier
                    })),
                    b = (0, G.O)().location,
                    C = jn.useExperiment({
                        location: "a87c74_1"
                    }, {
                        autoTrackExposure: g,
                        disable: !g
                    }).enabled,
                    O = (0, D.Zq)({
                        autoTrackExposure: !1
                    }),
                    _ = (C || !v) && !O,
                    j = h ? R.z8 : R.WC,
                    x = Bn(kn({}, b), {
                        section: B.jXE.STREAM_SETTINGS
                    }),
                    N = (0, r.jsx)(xn.Z, {
                        buttons: j.map((function(e) {
                            return zn({
                                type: e,
                                selected: e.value === l,
                                needsPremium: !(0, A.Z)(t, e.value, o, p, E),
                                analyticsLocation: x,
                                onClick: function() {
                                    return i(e.value)
                                },
                                onClose: n
                            })
                        }))
                    }),
                    Z = (0, r.jsx)(xn.Z, {
                        buttons: R.k0.map((function(e) {
                            return zn({
                                type: e,
                                selected: e.value === o,
                                needsPremium: !(0, A.Z)(t, l, e.value, p, E),
                                analyticsLocation: x,
                                onClick: function() {
                                    return c(e.value)
                                },
                                onClose: n
                            })
                        }))
                    }),
                    T = [{
                        value: R.tI.PRESET_VIDEO,
                        label: F.Z.Messages.STREAM_PRESET_VIDEO
                    }].concat(Vn(h ? [] : [{
                        value: R.tI.PRESET_DOCUMENTS,
                        label: F.Z.Messages.STREAM_PRESET_DOCUMENTS
                    }]), [{
                        value: R.tI.PRESET_CUSTOM,
                        label: F.Z.Messages.STREAM_PRESET_CUSTOM
                    }]),
                    P = t === R.tI.PRESET_DOCUMENTS ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(I.Z, {
                            children: (0, r.jsx)(u.FormItem, {
                                title: F.Z.Messages.STREAM_RESOLUTION,
                                titleClassName: K().formItemTitleSlim,
                                className: Mn().documentModeGroup,
                                children: (0, r.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    children: F.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
                                        fps: o
                                    })
                                })
                            })
                        }), _ ? (0, r.jsx)(Pn, {
                            message: F.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                            onClose: n,
                            openStreamUpsellModal: Hn
                        }) : null]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(I.Z, {
                            children: [(0,
                                r.jsx)(u.FormItem, {
                                title: F.Z.Messages.STREAM_RESOLUTION,
                                className: Mn().settingsGroup,
                                titleClassName: K().formItemTitleSlim,
                                children: N
                            }), (0, r.jsx)(u.FormItem, {
                                title: F.Z.Messages.SCREENSHARE_FRAME_RATE,
                                className: Mn().settingsGroup,
                                titleClassName: K().formItemTitleSlim,
                                children: Z
                            })]
                        }), _ ? (0, r.jsx)(Pn, {
                            onClose: n,
                            openStreamUpsellModal: Hn
                        }) : null]
                    });
                return (0, r.jsx)(m.Z, Bn(kn({}, x), {
                    children: (0, r.jsx)(u.FormItem, {
                        title: F.Z.Messages.STREAM_QUALITY,
                        titleClassName: K().formItemTitle,
                        className: K().modalContent,
                        children: (0, r.jsxs)("div", {
                            className: Mn().qualitySettingsContainer,
                            children: [(0, r.jsx)(u.SingleSelect, {
                                value: t,
                                className: Ke().marginTop8,
                                options: T,
                                onChange: function(e) {
                                    return d(e)
                                }
                            }), P]
                        })
                    })
                }))
            }
            var Yn = t(485081);

            function Jn(e, n, t) {
                return null == n ? e : t.find((function(e) {
                    return (0, Yn.Z)(n.id, e.windowHandle)
                }))
            }
            var Xn = t(190564),
                Qn = t.n(Xn);

            function $n(e) {
                var n = e.selectedSource,
                    t = e.selectSource,
                    l = e.sourceChanged,
                    o = e.onChangeSource,
                    a = (0, s.e7)([b.ZP, O.Z], (function() {
                        return (0, x.ED)() ? (0, T.Z)(b.ZP, O.Z) : null
                    })),
                    i = (0, s.e7)([v.Z], (function() {
                        return null != (null == a ? void 0 : a.id) ? v.Z.getGame(a.id) : null
                    })),
                    c = (0, s.e7)([b.ZP], (function() {
                        return b.ZP.getRunningGames()
                    })),
                    d = (0, s.Wu)([v.Z], (function() {
                        return c.map((function(e) {
                            return null != e.id ? v.Z.getGame(e.id) : null
                        })).filter(xe.lm)
                    }), [c]),
                    f = null;
                null != n ? f = n.name : null != a && (f = a.name);
                if (null == f) return null;
                var m = Jn(a, n, c),
                    h = l ? d.find((function(e) {
                        return e.id === (null == m ? void 0 : m.id)
                    })) : i,
                    p = null != n && n.id.startsWith("screen") ? pe.Z : je;
                return (0, r.jsx)(u.FormItem, {
                    title: F.Z.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
                    className: K().modalContent,
                    titleClassName: K().formItemTitleVerySlim,
                    children: (0, r.jsxs)(Be, {
                        children: [null != h ? (0, r.jsx)(me.Z, {
                            game: h,
                            size: me.Z.Sizes.XSMALL,
                            className: Qn().selectedIcon
                        }) : (0, r.jsx)(p, {
                            className: Qn().selectedIcon
                        }), (0, r.jsx)("span", {
                            className: Qn().ellipsisText,
                            children: f
                        }), t ? (0, r.jsx)(u.Button, {
                            className: Qn().changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: o,
                            children: F.Z.Messages.CHANGE
                        }) : null]
                    })
                })
            }

            function qn(e) {
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
                    title: F.Z.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
                    className: K().modalContent,
                    titleClassName: K().formItemTitle,
                    children: (0, r.jsxs)(Be, {
                        children: [(0, r.jsx)(he.Z, {
                            guild: l,
                            size: he.Z.Sizes.SMALLER,
                            className: Qn().selectedIcon
                        }), (0, r.jsx)("span", {
                            className: Qn().ellipsisText,
                            children: l.toString()
                        }), (0, r.jsx)(u.Button, {
                            className: Qn().changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: n,
                            children: F.Z.Messages.CHANGE
                        })]
                    })
                })
            }

            function et(e) {
                var n = e.text;
                return (0, r.jsxs)(I.Z, {
                    align: I.Z.Align.CENTER,
                    className: Qn().warning,
                    children: [(0, r.jsx)(ge.Z, {
                        className: Qn().warningIcon
                    }), (0, r.jsx)(u.Text, {
                        color: "none",
                        variant: "text-xs/normal",
                        children: n
                    })]
                })
            }

            function nt(e) {
                var n, t = e.guildId,
                    o = (0, s.e7)([fe.Z], (function() {
                        return null !== (n = fe.Z.getMemberCount(t)) && void 0 !== n ? n : 0
                    })),
                    a = de.eo.useSetting(),
                    i = l.useCallback((function(e, n) {
                        de.eo.updateSetting(n);
                        j.default.track(B.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
                            value: n
                        })
                    }), []);
                return o >= 2 && o <= Pe.tB ? (0, r.jsx)(u.FormItem, {
                    className: L()(K().modalContent, Qn().checkboxRow),
                    children: (0, r.jsx)(u.Checkbox, {
                        value: !!a,
                        type: u.Checkbox.Types.INVERTED,
                        onChange: i,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: F.Z.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
                        })
                    })
                }) : null
            }

            function tt(e) {
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
                    v = e.onChangeSelectedPreset,
                    S = e.onChangeSelectedChannelId,
                    b = e.onChangeSource,
                    O = e.onChangeAudioDevice,
                    I = e.onChangeGuild,
                    _ = e.isAnimationDone,
                    j = (0, s.e7)([C.Z, g.Z], (function() {
                        return g.Z.getChannel(C.Z.getVoiceChannelId())
                    })),
                    N = (0, s.e7)([Ne.Z], (function() {
                        return Ne.Z.GPUDriversOutdated
                    })),
                    A = (0, s.e7)([E.Z], (function() {
                        return E.Z.getSoundshareEnabled()
                    })),
                    R = (0,
                        s.e7)([y.default], (function() {
                        return y.default.getCurrentUser()
                    })),
                    Z = (0, D.fH)(c, "go_live_modal", !0),
                    T = (0, D.Zq)({
                        autoTrackExposure: !Z
                    }),
                    P = E.Z.supports(Le.AN.SOUNDSHARE) ? (0, x.ED)() && !Re().satisfies(null === Te.Z || void 0 === Te.Z ? void 0 : Te.Z.os.release, Pe.I9) ? F.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE : (0, x.V5)() && !Re().satisfies(null === Te.Z || void 0 === Te.Z ? void 0 : Te.Z.os.release, Pe.Ec) ? F.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE : null : Ze.GO_LIVE_SCREENSHARE_NO_SOUND;
                null != n && n.id.startsWith("screen") ? P = F.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND : null == P && E.Z.supportsEnableSoundshare() && A !== B.rtk.ENABLED && (P = F.Z.Messages.GO_LIVE_SCREENSHARE_ENABLE_FOR_SOUNDSHARE.format({
                    onVoiceSettingsClick: function() {
                        m();
                        M.Z.open(B.oAB.VOICE)
                    }
                }));
                var L = Z ? (0, r.jsx)(ce, {
                        guildId: c,
                        isAnimationDone: _
                    }) : T ? (0, r.jsx)(Y, {}) : void 0,
                    G = Boolean(null == n ? void 0 : n.id.startsWith("camera")),
                    U = null != R && R.verified && !R.bot,
                    k = null != j && !(0, w.Yk)(j),
                    V = U && k;
                return (0, r.jsxs)(l.Fragment, {
                    children: [G ? (0,
                        r.jsx)(Xe, {
                        selectedSource: n,
                        onChangeVideoDeviceSource: b,
                        onChangeAudioDevice: O
                    }) : (0, r.jsxs)("div", {
                        children: [(0, r.jsx)($n, {
                            selectSource: d,
                            sourceChanged: u,
                            onChangeSource: b,
                            selectedSource: n
                        }), null != P ? (0, r.jsx)(et, {
                            text: P
                        }) : null]
                    }), f && null != c ? (0, r.jsx)(qn, {
                        guildId: c,
                        onChange: I
                    }) : null, null != j ? (0, r.jsx)(In, {
                        channel: j
                    }) : (0, r.jsx)(yn, {
                        guildId: c,
                        selectedChannelId: o,
                        onChangeSelectedChannelId: S
                    }), null != c && V ? (0, r.jsx)(nt, {
                        guildId: c
                    }) : null, N ? (0, r.jsx)(et, {
                        text: F.Z.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
                    }) : null, (0, r.jsx)(Kn, {
                        selectedPreset: a,
                        selectedFPS: t,
                        selectedResolution: i,
                        guildId: c,
                        onClose: m,
                        onFPSChange: h,
                        onResolutionChange: p,
                        onPresetChange: v,
                        captureDeviceSelected: G
                    }), L]
                })
            }
            var rt = t(107218),
                lt = t(718831),
                ot = t(540837),
                at = t.n(ot);

            function it(e) {
                var n = e.guildId,
                    t = e.onClick,
                    l = (0, s.e7)([S.Z], (function() {
                        return S.Z.getGuild(n)
                    })),
                    o = (0, s.e7)([Qe.ZP, S.Z, $e.Z], (function() {
                        return Qe.ZP.getChannels(n)[Qe.Zb].some((function(e) {
                            var n = e.channel;
                            return (0, en.JL)(n, S.Z, $e.Z)
                        }))
                    }));
                return null != l && o ? (0,
                    r.jsxs)(u.Clickable, {
                    onClick: function() {
                        return t(n)
                    },
                    className: at().guildRow,
                    children: [(0, r.jsx)(he.Z, {
                        guild: l,
                        size: he.Z.Sizes.SMALL,
                        className: at().guildIcon
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        className: at().guildName,
                        children: l.toString()
                    }), (0, r.jsx)(lt.Z, {
                        direction: lt.Z.Directions.RIGHT,
                        className: at().guildArrow
                    })]
                }) : null
            }

            function st(e) {
                var n = e.onSelectGuild,
                    t = (0, s.e7)([rt.Z], (function() {
                        return rt.Z.getGuildFolders()
                    }));
                return (0, r.jsx)(En, {
                    title: F.Z.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
                    scrollerClassName: L()(at().guildScroller, K().marginBottom),
                    children: Ge().flatMap(t, (function(e) {
                        return e.guildIds.map((function(e) {
                            return (0, r.jsx)(it, {
                                guildId: e,
                                onClick: n
                            }, e)
                        }))
                    }))
                })
            }
            var ut = t(204841),
                ct = t(12061),
                dt = t(15086),
                ft = t(513328),
                mt = t(875700),
                ht = t(883518),
                pt = t.n(ht);

            function gt(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function vt(e) {
                vt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return vt(e)
            }

            function St(e, n) {
                return !n || "object" !== Ct(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function Et(e, n) {
                Et = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return Et(e, n)
            }
            var bt, Ct = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function yt(e) {
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
                    var t, r = vt(e);
                    if (n) {
                        var l = vt(this).constructor;
                        t = Reflect.construct(r, arguments, l)
                    } else t = r.apply(this, arguments);
                    return St(this, t)
                }
            }! function(e) {
                e.WRAP = "wrap";
                e.STACK = "stack"
            }(bt || (bt = {}));
            var Ot = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && Et(e, n)
                }(t, e);
                var n = yt(t);

                function t() {
                    gt(this, t);
                    return n.apply(this, arguments)
                }
                var l = t.prototype;
                l.renderChildren = function() {
                    var e, n = this.props,
                        t = n.children,
                        l = n.layout,
                        o = n.columns;
                    switch (l) {
                        case bt.STACK:
                            e = "100%";
                            break;
                        case bt.WRAP:
                            e = "".concat(1 / o * 100, "%")
                    }
                    return t.map((function(n, t) {
                        return (0, r.jsx)(I.Z.Child, {
                            className: pt().tile,
                            basis: e,
                            grow: 0,
                            children: n
                        }, t)
                    }))
                };
                l.render = function() {
                    var e = this.props.className;
                    return (0, r.jsx)(I.Z, {
                        className: L()(e, pt().grid),
                        wrap: I.Z.Wrap.WRAP,
                        children: this.renderChildren()
                    })
                };
                return t
            }(l.PureComponent);
            Ot.Layout = bt;
            Ot.defaultProps = {
                children: [],
                layout: bt.WRAP,
                columns: 4
            };
            const It = Ot;
            const _t = (0, _n.B)({
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
            var jt = t(583711),
                xt = t.n(jt);

            function Nt(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function At(e) {
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
                                className: L()(xt().sourceThumbnail, Nt({}, xt().selected, i))
                            })
                        }), (0, r.jsx)(u.Text, {
                            className: L()(xt().sourceName, Nt({}, xt().selected, i)),
                            variant: "text-sm/normal",
                            children: o
                        })]
                    })
                })
            }

            function Rt(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Zt(e, n, t, r, l, o, a) {
                try {
                    var i = e[o](a),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, l)
            }

            function Tt(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, l) {
                        var o = e.apply(n, t);

                        function a(e) {
                            Zt(o, r, l, a, i, "next", e)
                        }

                        function i(e) {
                            Zt(o, r, l, a, i, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Pt(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Lt(e, n) {
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
                    if ("string" == typeof e) return Rt(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Rt(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Mt = function(e, n) {
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
                                        if (!(l = a.trys,
                                                l = l.length > 0 && l[l.length - 1]) && (6 === o[0] || 2 === o[0])) {
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

            function wt(e, n) {
                var t = {};
                n.forEach((function(e) {
                    t[e.id] = e
                }));
                e.forEach((function(e) {
                    t[e.id] = e
                }));
                return Object.values(t).sort((function(e, n) {
                    return Bt(n) - Bt(e)
                }))
            }

            function Dt() {
                return Gt.apply(this, arguments)
            }

            function Gt() {
                return (Gt = Tt((function() {
                    var e, n, t, r, l, o, a, i;
                    return Mt(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                e = E.Z.getVideoDevices();
                                n = (0, dt.Z)(E.Z.getMediaEngine(), [ct.vA.WINDOW, ct.vA.SCREEN], {
                                    width: 176,
                                    height: 99
                                });
                                return [4, Ut()];
                            case 1:
                                t = s.sent();
                                return [4, n];
                            case 2:
                                r = s.sent();
                                l = r.filter((function(e) {
                                    return e.id.startsWith(ct.vA.SCREEN)
                                }));
                                o = wt(r.filter((function(e) {
                                    return e.id.startsWith(ct.vA.WINDOW)
                                })), t);
                                a = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"];
                                i = Object.entries(e).filter((function(e) {
                                    var n = Lt(e, 2);
                                    n[0];
                                    return !n[1].disabled
                                })).map((function(e, n) {
                                    var t = Lt(e, 2),
                                        r = (t[0], t[1]),
                                        l = a[n % a.length],
                                        o = Uint8Array.from(atob(l), (function(e) {
                                            return e.charCodeAt(0)
                                        })),
                                        i = (0, ut.xS)(o);
                                    return {
                                        id: "camera:" + r.id,
                                        name: r.name,
                                        url: i
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

            function Ut() {
                return kt.apply(this, arguments)
            }

            function kt() {
                kt = Tt((function() {
                    var e;
                    return Mt(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                e = b.ZP.getRunningGames();
                                return [4, Promise.all(e.map((t = Tt((function(e) {
                                    var n, t, r, l;
                                    return Mt(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                if (null == e.name) return [2, null];
                                                o.label = 1;
                                            case 1:
                                                o.trys.push([1, 3, , 4]);
                                                return [4, mt.Z.identifyGame(e.pid, e.name)];
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
                return kt.apply(this, arguments)
            }

            function Bt(e) {
                var n = (0, x.ED)() ? (0, T.Z)(b.ZP, O.Z) : null,
                    t = b.ZP.getRunningGames();
                return null != n && (0, Yn.Z)(e.id, n.windowHandle) ? 2 : null != t.find((function(n) {
                    return (0, Yn.Z)(e.id, n.windowHandle)
                })) ? 1 : 0
            }

            function Vt(e) {
                var n = e.selectedSource,
                    t = e.onChangeSelectedSource,
                    o = function() {
                        var e = x.current;
                        null != e && j(!e.isScrolledToTop())
                    },
                    a = _t.useExperiment({
                        location: "GoLive_Source_Select"
                    }).enableGoLiveCaptureCard,
                    i = E.Z.supports(Le.AN.GO_LIVE_HARDWARE),
                    s = Lt(l.useState(null), 2),
                    c = s[0],
                    d = s[1],
                    f = Lt(l.useState(null), 2),
                    m = f[0],
                    h = f[1],
                    p = Lt(l.useState(null), 2),
                    g = p[0],
                    v = p[1],
                    S = null != g && g.length > 0,
                    b = Lt(l.useState(ct.vA.WINDOW), 2),
                    C = b[0],
                    y = b[1],
                    O = Lt(l.useState(!1), 2),
                    _ = O[0],
                    j = O[1],
                    x = l.useRef(null),
                    N = l.useRef(new ft.Xp);
                l.useEffect((function() {
                    var e = N.current;
                    Dt().then((function(e) {
                        var n = e.screenSources,
                            t = e.windowSources,
                            r = e.cameraSources;
                        d(n);
                        h(t);
                        v(r)
                    }));
                    e.start(1e3, Tt((function() {
                        var e, n, t, r;
                        return Mt(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return [4, Dt()];
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
                            x.current = e;
                            var n;
                            j(null !== (n = !e.isScrolledToTop()) && void 0 !== n && n)
                        }
                    }), []),
                    R = function(e) {
                        switch (e) {
                            case ct.vA.WINDOW:
                                return m;
                            case ct.vA.SCREEN:
                                return c;
                            case ct.vA.CAMERA:
                                return g
                        }
                    }(C);
                if (null == R) return (0, r.jsx)(I.Z, {
                    className: xt().spinner,
                    justify: I.Z.Justify.CENTER,
                    align: I.Z.Align.CENTER,
                    children: (0, r.jsx)(u.Spinner, {})
                });
                var Z = R.map((function(e) {
                    var l = e.id,
                        o = (null == n ? void 0 : n.id) === l;
                    return (0, r.jsx)(u.Clickable, {
                        className: L()(xt().tile, Pt({}, xt().selected, o)),
                        onClick: function() {
                            return t(e, null)
                        },
                        children: (0, r.jsx)(At, {
                            source: e,
                            selectedSource: n
                        }, e.id)
                    }, l)
                }));
                return (0, r.jsxs)(l.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: xt().segmentContainer,
                        children: [(0, r.jsx)(mn, {
                            separator: _
                        }), (0, r.jsx)(u.SegmentedControl, {
                            options: function() {
                                var e = [{
                                    name: F.Z.Messages.GO_LIVE_MODAL_APPLICATIONS,
                                    value: ct.vA.WINDOW
                                }, {
                                    name: F.Z.Messages.GO_LIVE_MODAL_SCREENS,
                                    value: ct.vA.SCREEN
                                }];
                                a && i && S && e.push({
                                    name: F.Z.Messages.GO_LIVE_MODAL_CAPTURE,
                                    value: ct.vA.CAMERA
                                });
                                return e
                            }(),
                            value: C,
                            onChange: function(e) {
                                var n = e.value;
                                return y(n)
                            },
                            className: xt().segmentControl,
                            optionClassName: xt().segmentControlOption
                        })]
                    }), C === ct.vA.CAMERA ? (0, r.jsx)("div", {
                        className: xt().sourceContainer,
                        children: (0, r.jsx)(u.AdvancedScroller, {
                            ref: A,
                            className: xt().sourceScroller,
                            onScroll: o,
                            children: (0, r.jsx)(It, {
                                layout: It.Layout.WRAP,
                                columns: 2,
                                className: xt().sourceContainer,
                                children: Z
                            })
                        })
                    }) : (0, r.jsx)(u.AdvancedScroller, {
                        ref: A,
                        className: xt().sourceScroller,
                        onScroll: o,
                        children: (0, r.jsx)(It, {
                            layout: It.Layout.WRAP,
                            columns: 2,
                            className: xt().sourceContainer,
                            children: Z
                        })
                    })]
                })
            }
            var Ft = t(785915);

            function Ht(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Wt(e, n, t, r, l, o, a) {
                try {
                    var i = e[o](a),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, l)
            }

            function zt(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, l) {
                        var o = e.apply(n, t);

                        function a(e) {
                            Wt(o, r, l, a, i, "next", e)
                        }

                        function i(e) {
                            Wt(o, r, l, a, i, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Kt(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Yt(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Kt(e, n, t[n])
                    }))
                }
                return e
            }

            function Jt(e, n) {
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

            function Xt(e, n) {
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
                    if ("string" == typeof e) return Ht(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ht(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Qt, $t = function(e, n) {
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
            }(Qt || (Qt = {}));

            function qt(e, n) {
                j.default.track(B.rMx.SCREENSHARE_FAILED, {
                    source_id: e,
                    screens: n.length
                })
            }

            function er(e) {
                var n, o = e.selectGuild,
                    P = void 0 !== o && o,
                    L = e.selectSource,
                    M = void 0 === L || L,
                    w = e.guildId,
                    D = e.analyticsLocation,
                    G = e.onClose,
                    U = e.transitionState,
                    k = function() {
                        ! function() {
                            a()(null != X || null != ve, "got nothing to stream");
                            var e, n = null !== (e = null == J ? void 0 : J.id) && void 0 !== e ? e : he;
                            a()(null != n, "Received null target channel ID");
                            var t, r = g.Z.getChannel(n),
                                l = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : w;
                            null == J && d.default.selectVoiceChannel(n);
                            var o = Oe,
                                i = je,
                                s = Ae;
                            if (!(0, A.Z)(o, i, s, Q, $)) {
                                o = R.tI.PRESET_VIDEO;
                                i = R.LY.RESOLUTION_720;
                                s = R.ws.FPS_30
                            }(0, f.Rc)({
                                preset: o,
                                resolution: i,
                                frameRate: s
                            });
                            var u = Jn(X, ve, b.ZP.getRunningGames()),
                                m = !(0, x.ED)() || null == u || (null == ve ? void 0 : ve.id.startsWith("camera:")) || null == u ? null : u.pid;
                            (0, f.WH)(l, n, {
                                pid: m,
                                sourceId: null == m && null != ve ? ve.id : null,
                                sourceName: null == m && null != ve ? ve.name : null,
                                audioSourceId: be
                            });
                            zt((function() {
                                return $t(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, h.Z.hasPermission(Ft.Eu.SCREEN_RECORDING, {
                                                showAuthorizationError: !1
                                            })];
                                        case 1:
                                            e.sent() || c.Z.show({
                                                title: F.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                                                body: F.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
                                            });
                                            return [2]
                                    }
                                }))
                            }))()
                        }();
                        G()
                    },
                    V = function() {
                        var e, n = null !== (e = null == X ? void 0 : X.pid) && void 0 !== e ? e : null;
                        (0, u.openModalLazy)(zt((function() {
                            var e, l;
                            return $t(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, t.e(43315).then(t.bind(t, 543315))];
                                    case 1:
                                        e = o.sent(), l = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(l, Jt(Yt({}, e), {
                                                handleStream: k,
                                                pid: n
                                            }))
                                        }]
                                }
                            }))
                        })))
                    },
                    H = (0, s.cj)([p.Z], (function() {
                        return p.Z.getState()
                    })),
                    W = H.preset,
                    z = H.resolution,
                    Y = H.fps,
                    J = (0, s.e7)([C.Z, g.Z], (function() {
                        return g.Z.getChannel(C.Z.getVoiceChannelId())
                    })),
                    X = (0, s.e7)([b.ZP, O.Z], (function() {
                        return (0, x.ED)() ? (0, T.Z)(b.ZP, O.Z) : null
                    })),
                    Q = (0, s.e7)([y.default], (function() {
                        var e = y.default.getCurrentUser();
                        a()(null != e, "GoLiveModal: user cannot be undefined");
                        return e
                    })),
                    $ = (0, s.e7)([S.Z], (function() {
                        var e;
                        return null === (e = S.Z.getGuild(w)) || void 0 === e ? void 0 : e.premiumTier
                    })),
                    q = Xt(null !== (n = Z(W, Q, $)) && void 0 !== n ? n : [R.LY.RESOLUTION_720, R.ws.FPS_30], 2),
                    ee = q[0],
                    ne = q[1];
                if (W !== R.tI.PRESET_CUSTOM) {
                    z = ee;
                    Y = ne
                }
                var te, re = (0, _.Dt)(),
                    le = Xt(l.useState(function(e, n) {
                        return e ? Qt.GUILD : n ? Qt.SOURCE : Qt.CONFIRM
                    }(P, M)), 2),
                    oe = le[0],
                    ae = le[1],
                    ie = Xt(l.useState(null), 2),
                    se = ie[0],
                    ue = ie[1],
                    ce = Xt(l.useState(!1), 2),
                    de = ce[0],
                    fe = ce[1],
                    me = Xt(l.useState(null), 2),
                    he = me[0],
                    pe = me[1],
                    ge = Xt(l.useState(null), 2),
                    ve = ge[0],
                    Se = ge[1],
                    Ee = Xt(l.useState(null), 2),
                    be = Ee[0],
                    Ce = Ee[1],
                    ye = Xt(l.useState(W), 2),
                    Oe = ye[0],
                    Ie = ye[1],
                    _e = Xt(l.useState(z), 2),
                    je = _e[0],
                    xe = _e[1],
                    Ne = Xt(l.useState(Y), 2),
                    Ae = Ne[0],
                    Re = Ne[1],
                    Ze = Xt(l.useState(null != w ? w : null), 2),
                    Te = Ze[0],
                    Pe = Ze[1],
                    Le = null !== (te = null == J ? void 0 : J.id) && void 0 !== te ? te : he;
                l.useEffect((function() {
                    var e = (0, x.ED)() ? (0, T.Z)(b.ZP, O.Z) : null,
                        n = null != (null == e ? void 0 : e.id) ? v.Z.getGame(e.id) : null;
                    j.default.track(B.rMx.OPEN_MODAL, {
                        type: "Go Live Modal",
                        application_id: null == n ? void 0 : n.id,
                        application_name: null == e ? void 0 : e.name,
                        game_id: null == n ? void 0 : n.id,
                        location_section: D
                    })
                }), [D]);
                var Me = l.useCallback((function(e, n, t) {
                    var r = Z(e, Q, $),
                        l = Xt(null != r ? r : [n, t], 2),
                        o = l[0],
                        a = l[1];
                    if (e !== Oe) {
                        n = o;
                        t = a
                    }
                    if (!(0, A.Z)(e, n, t, Q, $)) {
                        var i = Xt(Z(R.tI.PRESET_VIDEO, Q, $), 2);
                        n = i[0];
                        t = i[1]
                    }
                    t !== Ae && Re(t);
                    n !== je && xe(n);
                    o !== n || a !== t ? Ie(R.tI.PRESET_CUSTOM) : e !== Oe && Ie(e)
                }), [Q, $, Ae, je, Oe]);

                function we() {
                    return (we = zt((function(e) {
                        var n, t, l, o;
                        return $t(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    e.preventDefault();
                                    if (oe === Qt.SOURCE) return [2, ae(Qt.CONFIRM)];
                                    n = Jn(X, ve, b.ZP.getRunningGames());
                                    t = N.ZP.supportsFeature(B.eRX.ELEVATED_HOOK) && (null == n ? void 0 : n.elevated);
                                    return (0, x.V5)() && null != ve ? [4, E.Z.getMediaEngine().getDesktopSources()] : [3, 2];
                                case 1:
                                    l = a.sent();
                                    if ((o = ve.id).startsWith("screen") && l.length > 0 && !l.some((function(e) {
                                            return e.includes(o)
                                        }))) {
                                        qt(o, l);
                                        (0, u.openModal)((function(e) {
                                            return (0, r.jsx)(u.ConfirmModal, Jt(Yt({
                                                header: F.Z.Messages.SCREENSHARE_RELAUNCH,
                                                confirmText: F.Z.Messages.OKAY,
                                                cancelText: F.Z.Messages.CANCEL,
                                                onConfirm: function() {
                                                    return N.ZP.relaunch()
                                                }
                                            }, e), {
                                                children: (0, r.jsx)(u.Text, {
                                                    variant: "text-md/normal",
                                                    children: F.Z.Messages.SCREENSHARE_RELAUNCH_BODY
                                                })
                                            }))
                                        }));
                                        return [2]
                                    }
                                    a.label = 2;
                                case 2:
                                    t ? V() : k();
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                var De = l.useCallback((function(e) {
                        Se(e);
                        if (null != e) {
                            ae(Qt.CONFIRM);
                            fe(!0)
                        }
                    }), []),
                    Ge = l.useCallback((function(e) {
                        Pe(e);
                        ae(M ? Qt.SOURCE : Qt.CONFIRM)
                    }), [M]),
                    Ue = function(e) {
                        switch (e) {
                            case Qt.SOURCE:
                                return F.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
                            case Qt.CONFIRM:
                                return null;
                            case Qt.GUILD:
                            default:
                                return F.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
                        }
                    }(oe),
                    ke = (0, r.jsx)(u.ModalHeader, {
                        className: K().modalHeader,
                        separator: !1,
                        children: (0, r.jsxs)(I.Z, {
                            direction: I.Z.Direction.VERTICAL,
                            align: I.Z.Align.CENTER,
                            className: K().header,
                            children: [(0, r.jsx)(u.Heading, {
                                variant: "heading-xl/semibold",
                                id: re,
                                className: K().headerText,
                                children: F.Z.Messages.GO_LIVE_MODAL_TITLE
                            }), null != Ue ? (0, r.jsx)(u.Text, {
                                className: K().headerDescription,
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: Ue
                            }) : null]
                        })
                    }),
                    Be = (0, r.jsxs)(u.Slides, {
                        springConfig: Jt(Yt({}, i.config.stiff), {
                            clamp: !0
                        }),
                        activeSlide: oe,
                        width: 480,
                        onSlideReady: ue,
                        children: [(0, r.jsx)(u.Slide, {
                            id: Qt.GUILD,
                            children: (0, r.jsx)("div", {
                                className: K().modalSize,
                                children: (0, r.jsx)(st, {
                                    onSelectGuild: Ge
                                })
                            })
                        }), (0, r.jsx)(u.Slide, {
                            id: Qt.SOURCE,
                            children: (0, r.jsx)("div", {
                                className: K().modalSize,
                                children: (0, r.jsx)(Vt, {
                                    selectedSource: ve,
                                    onChangeSelectedSource: De
                                })
                            })
                        }), (0, r.jsx)(u.Slide, {
                            id: Qt.CONFIRM,
                            children: (0, r.jsx)("div", {
                                className: K().modalSize,
                                children: (0, r.jsx)(tt, {
                                    selectedChannelId: he,
                                    selectedPreset: Oe,
                                    selectedResolution: je,
                                    selectedSource: ve,
                                    selectedFPS: Ae,
                                    sourceChanged: de,
                                    selectSource: M,
                                    onChangeSelectedFPS: function(e) {
                                        return Me(Oe, je, e)
                                    },
                                    onChangeSelectedResolution: function(e) {
                                        return Me(Oe, e, Ae)
                                    },
                                    onChangeSelectedPreset: function(e) {
                                        return Me(e, je, Ae)
                                    },
                                    onChangeSelectedChannelId: pe,
                                    onChangeSelectedSource: De,
                                    onChangeSource: function() {
                                        return ae(Qt.SOURCE)
                                    },
                                    onChangeAudioDevice: function(e) {
                                        return Ce(e)
                                    },
                                    onChangeGuild: function() {
                                        return ae(Qt.GUILD)
                                    },
                                    onClose: G,
                                    guildId: Te,
                                    selectGuild: P,
                                    isAnimationDone: se === Qt.CONFIRM && U === u.ModalTransitionState.ENTERED
                                })
                            })
                        })]
                    }),
                    Ve = function(e, n, t, r) {
                        switch (e) {
                            case Qt.SOURCE:
                                return n ? Qt.GUILD : null;
                            case Qt.CONFIRM:
                                return r ? Qt.SOURCE : !t && n ? Qt.GUILD : null;
                            case Qt.GUILD:
                            default:
                                return null
                        }
                    }(oe, P, M, de),
                    Fe = oe !== Qt.CONFIRM || null == ve && null == X || null == Le,
                    He = (0, r.jsxs)(u.ModalFooter, {
                        justify: null == Ve ? I.Z.Justify.START : I.Z.Justify.BETWEEN,
                        children: [(0, r.jsx)(u.Button, {
                            type: "submit",
                            size: u.Button.Sizes.SMALL,
                            disabled: Fe,
                            autoFocus: !0,
                            children: F.Z.Messages.GO_LIVE_MODAL_CTA
                        }), null == Ve ? (0, r.jsx)(u.Button, {
                            className: K().cancelButton,
                            look: u.Button.Looks.LINK,
                            size: u.Button.Sizes.SMALL,
                            color: u.ButtonColors.PRIMARY,
                            onClick: G,
                            children: F.Z.Messages.CANCEL
                        }) : (0, r.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            color: u.ButtonColors.PRIMARY,
                            onClick: function() {
                                return ae(Ve)
                            },
                            children: F.Z.Messages.BACK
                        })]
                    });
                return (0, r.jsx)(m.Z, {
                    page: B.ZY5.GO_LIVE_MODAL,
                    children: (0, r.jsxs)(u.ModalRoot, {
                        "aria-labelledby": re,
                        transitionState: U,
                        size: u.ModalSize.DYNAMIC,
                        className: K().modalSize,
                        children: [(0, r.jsx)(u.ModalCloseButton, {
                            onClick: G,
                            className: K().modalCloseButton
                        }), (0, r.jsx)("div", {
                            className: K().art
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
                a = t(304548),
                i = t(237702),
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