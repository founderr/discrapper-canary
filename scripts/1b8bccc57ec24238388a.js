(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [94818], {
        524268: (e, n, t) => {
            e.exports = t.p + "2e16625f6f55b96572f79cc35682266f.png"
        },
        950737: (e, n, t) => {
            e.exports = t.p + "3be860e37bf5f2df40ad15d2de5cee0e.png"
        },
        432301: (e, n, t) => {
            "use strict";
            t.d(n, {
                m: () => j,
                Z: () => x
            });
            var r = t(785893),
                i = t(667294),
                a = t(294184),
                o = t.n(a),
                l = t(248088),
                u = t(882723),
                s = t(316878),
                c = t(229714),
                f = t(473708),
                d = t(981054),
                m = t.n(d),
                v = t(524268),
                p = t.n(v),
                h = t(950737),
                y = t.n(h);

            function b(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function g(e, n, t, r, i, a, o) {
                try {
                    var l = e[a](o),
                        u = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(u) : Promise.resolve(u).then(r, i)
            }

            function S(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);

                        function o(e) {
                            g(a, r, i, o, l, "next", e)
                        }

                        function l(e) {
                            g(a, r, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function A(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function P(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return b(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return b(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var j, I, w = function(e, n) {
                var t, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };
            ! function(e) {
                e[e.WUMPUS = 0] = "WUMPUS";
                e[e.PHIBI = 1] = "PHIBI"
            }(j || (j = {}));
            var C = (A(I = {}, j.WUMPUS, m().activityCharacterWumpus), A(I, j.PHIBI, m().activityCharacterPhibi), I);
            const x = i.memo((function(e) {
                var n = e.activityName,
                    t = e.activityCharacter,
                    a = void 0 === t ? j.WUMPUS : t,
                    d = e.showExampleButton,
                    v = void 0 !== d && d,
                    h = P(i.useState(0), 2),
                    b = h[0],
                    g = h[1],
                    A = P((0, l.useSpring)((function() {
                        return {
                            from: {
                                rotate: "0deg"
                            },
                            config: {
                                tension: 1e3,
                                friction: 5
                            }
                        }
                    })), 2),
                    I = A[0],
                    x = A[1],
                    U = i.useRef({
                        seconds: b,
                        jitter: S((function() {
                            var e;
                            return w(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        0;
                                        e = function(e) {
                                            if (s.Z.useReducedMotion) return 0;
                                            e -= 5399;
                                            return Math.min(10, e / 300 * 10)
                                        }(U.current.seconds);
                                        x({
                                            rotate: "-".concat(e, "deg")
                                        });
                                        return [4, new Promise((function(e) {
                                            return setTimeout(e, 80)
                                        }))];
                                    case 1:
                                        n.sent();
                                        x({
                                            rotate: "".concat(e, "deg")
                                        });
                                        return [4, new Promise((function(e) {
                                            return setTimeout(e, 80)
                                        }))];
                                    case 2:
                                        n.sent();
                                        return [3, 0];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    });
                i.useEffect((function() {
                    U.current.seconds = b
                }));
                i.useEffect((function() {
                    var e = setInterval((function() {
                        g((function(e) {
                            5399 === e && U.current.jitter();
                            return ++e
                        }))
                    }), 1e3);
                    return function() {
                        return clearInterval(e)
                    }
                }), []);
                var T = a === j.WUMPUS ? y() : p();
                return (0, r.jsxs)(c.Z, {
                    lastSection: !0,
                    "aria-hidden": !0,
                    children: [(0, r.jsx)(u.Heading, {
                        className: m().fakeActivityTitle,
                        variant: "eyebrow",
                        children: f.Z.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_TITLE
                    }), (0, r.jsxs)("div", {
                        className: m().fakeActivityLayout,
                        children: [(0, r.jsx)("div", {
                            className: o()(m().fakeActivityIcon, C[a]),
                            children: (0, r.jsx)(l.animated.img, {
                                className: m().fakeActivityPencil,
                                src: T,
                                style: I
                            })
                        }), (0, r.jsxs)("div", {
                            className: m().fakeActivityContent,
                            children: [(0, r.jsx)(u.Text, {
                                variant: "text-sm/semibold",
                                children: null != n ? n : f.Z.Messages.USER_SETTINGS_USER_PROFILE
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: f.Z.Messages.PROFILE_CUSTOMIZATION_ACTIVITY_TIME.format({
                                    renderTimeHook: function(e, n) {
                                        var t = b % 60,
                                            i = (b - t) / 60;
                                        return (0, r.jsxs)("span", {
                                            className: m().fakeActivityTimeValues,
                                            children: [i.toString().padStart(2, "0"), ":", t.toString().padStart(2, "0")]
                                        }, n)
                                    }
                                })
                            })]
                        })]
                    }), v && (0, r.jsx)(u.Button, {
                        className: m().button,
                        color: m().buttonColor,
                        size: u.Button.Sizes.SMALL,
                        fullWidth: !0,
                        children: f.Z.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON
                    })]
                })
            }))
        },
        494818: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => pe
            });
            var r = t(785893),
                i = t(667294),
                a = t(294184),
                o = t.n(a),
                l = t(547308),
                u = t(202351),
                s = t(795308),
                c = t(882723),
                f = t(971402),
                d = t(74535),
                m = t(316878),
                v = t(19585),
                p = t(109206),
                h = t(841379),
                y = t(995141),
                b = t(525628),
                g = t(349771),
                S = t(681714);

            function A(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function P(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return A(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return A(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const j = function(e, n) {
                var t = P(i.useState(), 2),
                    r = t[0],
                    a = t[1],
                    o = (0, S.ZP)().categories;
                i.useEffect((function() {
                    null == r && a(o)
                }), [o, r]);
                return i.useMemo((function() {
                    if (null != n) return n;
                    if (e && null != r) {
                        var t = (0, g.IM)(r);
                        return t[Math.floor(Math.random() * t.length)]
                    }
                }), [r, n, e])
            };
            var I = t(795470),
                w = t(807947),
                C = t(888291),
                x = t(752596),
                U = t(265022),
                T = t(183490),
                E = t(295921),
                N = t(74188),
                O = t(485552),
                Z = t(906615),
                k = t(239639),
                M = t(89303),
                B = t(945123),
                R = t(760028),
                _ = t(184308),
                L = t(968449),
                z = t(21372),
                D = t(491260),
                W = t(793461),
                F = t(901654),
                G = t(258441),
                H = t(912250),
                V = t(775173),
                $ = t(116094),
                q = t(749565),
                K = t(310126),
                Y = t(432301),
                J = t(339822),
                Q = t(766959),
                X = t(2590),
                ee = t(921431),
                ne = t(960412),
                te = t(473708),
                re = t(540798),
                ie = t.n(re);

            function ae(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function oe(e, n, t, r, i, a, o) {
                try {
                    var l = e[a](o),
                        u = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(u) : Promise.resolve(u).then(r, i)
            }

            function le(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);

                        function o(e) {
                            oe(a, r, i, o, l, "next", e)
                        }

                        function l(e) {
                            oe(a, r, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function ue(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function se(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        ue(e, n, t[n])
                    }))
                }
                return e
            }

            function ce(e, n) {
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

            function fe(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return ae(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ae(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var de = function(e, n) {
                    var t, r, i, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function l(a) {
                        return function(l) {
                            return function(a) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                    (r = 0, i) && (a = [2 & a[0], i.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1];
                                                i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2];
                                                o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    a = n.call(e, o)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    t = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, l])
                        }
                    }
                },
                me = K.ZP.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar,
                ve = (0, N.zW)({
                    premiumUserWithBanner: ie().avatarUploaderPremium,
                    premiumUserWithoutBanner: ie().avatarUploaderPremiumNoBanner,
                    default: ie().avatarUploaderNormal
                });

            function pe(e) {
                var n, a, g, S = e.user,
                    A = e.guild,
                    P = e.canUsePremiumCustomization,
                    N = e.onUpsellClick,
                    K = e.onAvatarChange,
                    re = e.onBannerChange,
                    ae = e.pendingAccentColor,
                    oe = e.pendingBanner,
                    pe = e.pendingBio,
                    he = e.pendingPronouns,
                    ye = e.pendingAvatar,
                    be = e.pendingAvatarDecoration,
                    ge = e.pendingNickname,
                    Se = e.pendingGlobalName,
                    Ae = e.pendingThemeColors,
                    Pe = e.avatarClassName,
                    je = e.activityName,
                    Ie = e.activityCharacter,
                    we = e.isTryItOutFlow,
                    Ce = void 0 !== we && we,
                    xe = e.disabledInputs,
                    Ue = void 0 !== xe && xe,
                    Te = e.hideExampleButton,
                    Ee = void 0 !== Te && Te,
                    Ne = e.hideFakeActivity,
                    Oe = void 0 !== Ne && Ne,
                    Ze = e.hideBioSection,
                    ke = void 0 !== Ze && Ze,
                    Me = e.forProfileEffectModal,
                    Be = void 0 !== Me && Me,
                    Re = e.pendingProfileEffectID,
                    _e = e.bodyClassName,
                    Le = function() {
                        var e = null != nn ? (0, c.getStatusBackdropColor)(nn) : null;
                        return (0, r.jsxs)("div", {
                            className: ie().status,
                            children: [null != e && (null == $e ? void 0 : $e.canUsePremiumProfileCustomization) && (0, r.jsx)("div", {
                                className: ie().statusDotBackground,
                                style: {
                                    backgroundColor: e,
                                    opacity: (0,
                                        c.getStatusBackdropOpacity)(fn, e)
                                }
                            }), (0, r.jsx)("svg", {
                                className: ie().statusDot,
                                children: (0, r.jsx)("rect", {
                                    height: "100%",
                                    width: "100%",
                                    fill: (0, I.Lq)((0, c.getStatusColor)(fn)),
                                    mask: "url(#".concat((0, c.getStatusMask)(fn, !1), ")")
                                })
                            })]
                        })
                    },
                    ze = i.useRef(null),
                    De = fe(i.useState(!1), 2),
                    We = De[0],
                    Fe = De[1],
                    Ge = L.QK.getSetting(),
                    He = j(Ce, be),
                    Ve = (0, h.Z)({
                        user: S,
                        pendingAvatarDecoration: He,
                        size: (0, y.y9)(c.AvatarSizes.SIZE_80),
                        canAnimate: !0
                    }),
                    $e = (0, T.Z)(S.id, null == A ? void 0 : A.id),
                    qe = (0, u.e7)([m.Z], (function() {
                        return m.Z.syncProfileThemeWithUserTheme
                    })),
                    Ke = (0, d.ZP)(),
                    Ye = (0, u.e7)([z.ZP], (function() {
                        return null == A ? null : z.ZP.getMember(A.id, S.id)
                    })),
                    Je = void 0 === ye ? S.getAvatarURL(void 0, 80) : ye,
                    Qe = (0, p.ZP)(Je, (0, c.useToken)(s.Z.unsafe_rawColors.PRIMARY_530).hsl(), !1),
                    Xe = null == $e ? void 0 : $e.getPreviewThemeColors(Ae),
                    en = null !== (n = null == Xe ? void 0 : Xe[0]) && void 0 !== n ? n : null == $e ? void 0 : $e.primaryColor,
                    nn = qe ? Ke : (0, U.V3)(en),
                    tn = (0, w.Z)(null !== (a = null != ae ? ae : en) && void 0 !== a ? a : (0, l._i)(Qe)).hsl,
                    rn = (0, u.e7)([F.Z], (function() {
                        return F.Z.isFocused()
                    })),
                    an = Ge ? rn : We,
                    on = null == $e ? void 0 : $e.getPreviewBanner(oe, an),
                    ln = null != on,
                    un = null !== (g = (0, J.gh)(ge, null == Ye ? void 0 : Ye.nick)) && void 0 !== g ? g : (0, J.zJ)(Se, q.ZP.getName(S)),
                    sn = fe((0, u.Wu)([D.Z], (function() {
                        return [D.Z.findActivity(S.id, (function(e) {
                            return e.type === X.IIU.CUSTOM_STATUS
                        })), D.Z.getStatus(S.id)]
                    })), 2),
                    cn = sn[0],
                    fn = sn[1],
                    dn = (0, u.e7)([W.Z], (function() {
                        return W.Z.hidePersonalInformation
                    })),
                    mn = (null == $e ? void 0 : $e.canUsePremiumProfileCustomization) || P,
                    vn = i.useCallback((function() {
                        var e, n;
                        null === (n = null === (e = ze.current) || void 0 === e ? void 0 : e.inputRef.current) || void 0 === n || n.activateUploadDialogue()
                    }), []),
                    pn = i.useCallback((function(e, n) {
                        null == e || null == n ? K(null) : "image/gif" !== n.type || $.ZP.canUseAnimatedAvatar(S) ? (0, c.openModalLazy)(le((function() {
                            var i, a;
                            return de(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(17363), t.e(38479)]).then(t.bind(t, 17363))];
                                    case 1:
                                        i = o.sent(), a = i.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(a, se({
                                                onCrop: K,
                                                file: n,
                                                imgURI: e,
                                                allowSkip: !0
                                            }, t))
                                        }]
                                }
                            }))
                        }))) : (0, c.openModalLazy)(le((function() {
                            var n, i;
                            return de(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(83409)]).then(t.bind(t, 383409))];
                                    case 1:
                                        n = a.sent(), i = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, ce(se({}, n), {
                                                imgURI: e,
                                                onChangeAvatar: function() {
                                                    n.onClose();
                                                    vn()
                                                }
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }), [S, vn, K]),
                    hn = function(e, n) {
                        if (null == e || null == n) return re(null);
                        (0, c.openModalLazy)(le((function() {
                            var i, a;
                            return de(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(17363), t.e(38479)]).then(t.bind(t, 17363))];
                                    case 1:
                                        i = o.sent(), a = i.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(a, se({
                                                onCrop: re,
                                                uploadType: ee.pC.BANNER,
                                                file: n,
                                                imgURI: e,
                                                allowSkip: !0
                                            }, t))
                                        }]
                                }
                            }))
                        })))
                    },
                    yn = (0, b.OE)().canUseCollectiblesIAP,
                    bn = (0, v.Z)().analyticsLocations;
                i.useEffect((function() {
                    if (!Ge) {
                        var e = null == $e ? void 0 : $e.getBannerURL({
                            canAnimate: !0,
                            size: 480
                        });
                        if (V.F8(e)) {
                            (new Image).src = null != e ? e : ""
                        }
                    }
                }), [$e, Ge]);
                var gn, Sn, An, Pn, jn, In, wn = null == A && yn,
                    Cn = null == $e ? void 0 : $e.profileEffectID;
                return (0, r.jsxs)(O.Z, {
                    forceShowPremium: P,
                    user: S,
                    guildId: null == A ? void 0 : A.id,
                    profileType: ne.y0.POPOUT,
                    pendingThemeColors: Ae,
                    className: Be ? ie().profileEffectsModalCustomizationPreview : mn ? ie().profileCustomizationPreviewWithTheme : ie().profileCustomizationPreviewWithoutTheme,
                    children: [null != Re ? (0, r.jsx)(x.Z, {
                        profileEffectID: Re
                    }) : null !== Re && null != Cn && (0, r.jsx)(x.Z, {
                        profileEffectID: Cn
                    }), (0, r.jsxs)(c.HeadingLevel, {
                        children: [(0, r.jsx)(E.Z, {
                            user: S,
                            profileType: ne.y0.POPOUT,
                            hasBanner: ln,
                            isPremium: P,
                            hasThemeColors: mn,
                            overrideAvatarDecorationURL: Ve,
                            forProfileEffectModal: Be,
                            children: P ? (0, r.jsxs)("div", {
                                onMouseMove: function() {
                                    return Fe(!0)
                                },
                                onMouseLeave: function() {
                                    return Fe(!1)
                                },
                                children: [(0, r.jsx)(C.Z, {
                                    className: ie().bannerUploader,
                                    showRemoveButton: !1,
                                    disabled: !P || Ue,
                                    image: on,
                                    makeURL: function() {
                                        return on
                                    },
                                    onChange: hn,
                                    imageStyle: {
                                        backgroundColor: tn
                                    },
                                    imageClassName: ln ? ie().bannerUploaderInnerSquare : ie().bannerUploaderInnerSquareEmpty,
                                    hint: te.Z.Messages.CHANGE_BANNER,
                                    onOpenImageSelectModal: function() {
                                        return (0, J.$r)(ee.pC.BANNER, null == Ye ? void 0 : Ye.guildId, Ce)
                                    },
                                    hideSize: !0,
                                    maxFileSizeBytes: Q.B,
                                    onFileSizeError: J.Wf
                                }), !Ge && V.F8(on) ? (0, r.jsx)(G.Z, {
                                    className: ie().gifTag
                                }) : null]
                            }) : (0, r.jsx)("div", {
                                className: ie().bannerNormal,
                                style: {
                                    backgroundColor: tn
                                },
                                children: Ue ? null : (0, r.jsx)(c.Clickable, {
                                    onClick: function() {
                                        return null == N ? void 0 : N({
                                            object: X.qAy.EDIT_PROFILE_BANNER
                                        })
                                    },
                                    className: ie().bannerNitroUpsell,
                                    children: (0, r.jsx)(c.Heading, {
                                        className: ie().bannerNitroUpsellText,
                                        variant: "eyebrow",
                                        children: te.Z.Messages.USER_SETTINGS_UNLOCK_BANNER
                                    })
                                })
                            })
                        }), wn ? (jn = function() {
                            return (0, J.$r)(ee.pC.AVATAR, null == Ye ? void 0 : Ye.guildId, Ce)
                        }, In = function() {
                            return (0, y.ps)({
                                analyticsLocations: bn
                            })
                        }, (0, r.jsxs)(c.Clickable, {
                            "aria-disabled": Ue,
                            onClick: Ue ? void 0 : function(e) {
                                (0, f.jW)(e, le((function() {
                                    var e, n;
                                    return de(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return [4, t.e(96404).then(t.bind(t, 996404))];
                                            case 1:
                                                e = i.sent(), n = e.default;
                                                return [2, function() {
                                                    return (0, r.jsx)(n, {
                                                        changeAvatarAction: jn,
                                                        changeDecorationAction: In
                                                    })
                                                }]
                                        }
                                    }))
                                })))
                            },
                            className: o()(ve({
                                isPremium: P,
                                hasBanner: ln
                            }), ue({}, ie().defaultCursor, Ue)),
                            children: [(0, r.jsx)(me, {
                                className: ie().avatarUploaderInner,
                                src: (0, J.SG)(ye, Ye, S),
                                avatarDecoration: Ve,
                                size: c.AvatarSizes.SIZE_80,
                                "aria-label": S.username
                            }), Ue ? null : (0, r.jsx)("div", {
                                className: ie().hoverIconWrapper,
                                children: (0, r.jsx)(H.Z, {
                                    className: ie().hoverIcon,
                                    color: "white"
                                })
                            }), Le()]
                        })) : (Sn = (0, J.SG)(ye, Ye, S), An = null != Ye && !P, Pn = (0, r.jsxs)("div", {
                            className: ve({
                                isPremium: P,
                                hasBanner: ln
                            }),
                            children: [(0, r.jsx)(C.Z, {
                                disabled: Ue,
                                ref: ze,
                                showIcon: null == Ve,
                                hint: An ? te.Z.Messages.UNLOCK_GUILD_MEMBER_AVATAR : te.Z.Messages.CHANGE_AVATAR,
                                showRemoveButton: !1,
                                imageClassName: o()(Pe, ie().avatarUploaderInner),
                                image: Sn,
                                onChange: pn,
                                makeURL: function() {
                                    return Sn
                                },
                                maxFileSizeBytes: Q.B,
                                onFileSizeError: J.Wf,
                                onOpenImageSelectModal: function() {
                                    return (0,
                                        J.$r)(ee.pC.AVATAR, null == Ye ? void 0 : Ye.guildId, Ce)
                                }
                            }), null != Ve && (0, r.jsx)("img", {
                                className: ie().avatarDecoration,
                                src: Ve,
                                alt: " ",
                                "aria-hidden": !0
                            }), Le()]
                        }), An ? (0, r.jsx)(c.Clickable, {
                            onClickCapture: function(e) {
                                e.stopPropagation();
                                null == N || N({
                                    object: X.qAy.AVATAR
                                })
                            },
                            children: Pn
                        }) : Pn), (0, r.jsx)(k.Cb, {
                            user: S,
                            guildId: null == A ? void 0 : A.id,
                            isTryItOutFlow: Ce
                        }), (gn = null == $e ? void 0 : $e.getPreviewBio(pe), (0, r.jsxs)(O.Z.Inner, {
                            className: o()(ie().body, _e),
                            children: [(0, r.jsx)(_.Z, {
                                isTryItOut: Ce,
                                user: S,
                                nickname: null != un ? un : S.username,
                                pronouns: null != he ? he : null == $e ? void 0 : $e.pronouns,
                                usernameIcon: function() {
                                    if (null != Ye && null !== ye && (null != Ye.avatar || null != ye)) return (0, r.jsx)(M.Z, {
                                        user: S,
                                        nickname: un
                                    })
                                }()
                            }), !Be && (0, r.jsx)(R.Z, {
                                customStatusActivity: cn
                            }), (0, r.jsx)(Z.Z, {}), !ke && (0, r.jsx)(B.Z, {
                                isUsingGuildBio: null == gn ? void 0 : gn.isUsingGuildValue,
                                guild: A,
                                bio: null == gn ? void 0 : gn.value,
                                hidePersonalInformation: dn,
                                lastSection: Oe,
                                lineClamp: Be ? 3 : void 0
                            }), !Oe && (0, r.jsx)(Y.Z, {
                                activityName: je,
                                activityCharacter: Ie,
                                showExampleButton: null == A && !Ee
                            })]
                        }))]
                    })]
                })
            }
        }
    }
]);