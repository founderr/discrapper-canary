(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [18354], {
        524268: (e, n, t) => {
            e.exports = t.p + "2e16625f6f55b96572f79cc35682266f.png"
        },
        950737: (e, n, t) => {
            e.exports = t.p + "3be860e37bf5f2df40ad15d2de5cee0e.png"
        },
        432301: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => C,
                m: () => w
            });
            var r = t(785893),
                i = t(667294),
                a = t(294184),
                o = t.n(a),
                l = t(248088),
                u = t(70418),
                s = t(316878),
                c = t(229714),
                f = t(473708),
                d = t(763973),
                v = t.n(d),
                m = t(524268),
                p = t.n(m),
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

            function P(e) {
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

            function S(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function j(e, n) {
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
            var w, I, x = function(e, n) {
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
            }(w || (w = {}));
            var A = (S(I = {}, w.WUMPUS, v().activityCharacterWumpus), S(I, w.PHIBI, v().activityCharacterPhibi), I);
            const C = i.memo((function(e) {
                var n = e.activityName,
                    t = e.activityCharacter,
                    a = void 0 === t ? w.WUMPUS : t,
                    d = e.showExampleButton,
                    m = void 0 !== d && d,
                    h = j(i.useState(0), 2),
                    b = h[0],
                    g = h[1],
                    S = j((0, l.useSpring)((function() {
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
                    I = S[0],
                    C = S[1],
                    E = i.useRef({
                        seconds: b,
                        jitter: P((function() {
                            var e;
                            return x(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        0;
                                        e = function(e) {
                                            if (s.Z.useReducedMotion) return 0;
                                            e -= 5399;
                                            return Math.min(10, e / 300 * 10)
                                        }(E.current.seconds);
                                        C({
                                            rotate: "-".concat(e, "deg")
                                        });
                                        return [4, new Promise((function(e) {
                                            return setTimeout(e, 80)
                                        }))];
                                    case 1:
                                        n.sent();
                                        C({
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
                    E.current.seconds = b
                }));
                i.useEffect((function() {
                    var e = setInterval((function() {
                        g((function(e) {
                            5399 === e && E.current.jitter();
                            return ++e
                        }))
                    }), 1e3);
                    return function() {
                        return clearInterval(e)
                    }
                }), []);
                var T = a === w.WUMPUS ? y() : p();
                return (0, r.jsxs)(c.Z, {
                    lastSection: !0,
                    "aria-hidden": !0,
                    children: [(0, r.jsx)(u.Heading, {
                        className: v().fakeActivityTitle,
                        variant: "eyebrow",
                        children: f.Z.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_TITLE
                    }), (0, r.jsxs)("div", {
                        className: v().fakeActivityLayout,
                        children: [(0, r.jsx)("div", {
                            className: o()(v().fakeActivityIcon, A[a]),
                            children: (0, r.jsx)(l.animated.img, {
                                className: v().fakeActivityPencil,
                                src: T,
                                style: I
                            })
                        }), (0, r.jsxs)("div", {
                            className: v().fakeActivityContent,
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
                                            className: v().fakeActivityTimeValues,
                                            children: [i.toString().padStart(2, "0"), ":", t.toString().padStart(2, "0")]
                                        }, n)
                                    }
                                })
                            })]
                        })]
                    }), m && (0, r.jsx)(u.Button, {
                        className: v().button,
                        color: v().buttonColor,
                        size: u.Button.Sizes.SMALL,
                        fullWidth: !0,
                        children: f.Z.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON
                    })]
                })
            }))
        },
        618354: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => ce
            });
            var r = t(785893),
                i = t(667294),
                a = t(294184),
                o = t.n(a),
                l = t(547308),
                u = t(202351),
                s = t(795308),
                c = t(70418),
                f = t(971402),
                d = t(514722),
                v = t(74535),
                m = t(316878),
                p = t(19585),
                h = t(109206),
                y = t(995141),
                b = t(795470),
                g = t(807947),
                P = t(888291),
                S = t(753251),
                j = t(265022),
                w = t(183490),
                I = t(849699),
                x = t(74188),
                A = t(485552),
                C = t(906615),
                E = t(550773),
                T = t(89303),
                N = t(945123),
                U = t(760028),
                O = t(184308),
                Z = t(169844),
                k = t(968449),
                M = t(21372),
                B = t(491260),
                R = t(793461),
                _ = t(901654),
                z = t(258441),
                L = t(912250),
                D = t(775173),
                W = t(116094),
                F = t(749565),
                G = t(310126),
                H = t(432301),
                V = t(339822),
                q = t(766959),
                $ = t(2590),
                K = t(921431),
                Y = t(960412),
                J = t(473708),
                Q = t(565967),
                X = t.n(Q);

            function ee(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function ne(e, n, t, r, i, a, o) {
                try {
                    var l = e[a](o),
                        u = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(u) : Promise.resolve(u).then(r, i)
            }

            function te(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);

                        function o(e) {
                            ne(a, r, i, o, l, "next", e)
                        }

                        function l(e) {
                            ne(a, r, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function re(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function ie(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        re(e, n, t[n])
                    }))
                }
                return e
            }

            function ae(e, n) {
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

            function oe(e, n) {
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
                    if ("string" == typeof e) return ee(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ee(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var le = function(e, n) {
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
                ue = G.ZP.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar,
                se = (0, x.zW)({
                    premiumUserWithBanner: X().avatarUploaderPremium,
                    premiumUserWithoutBanner: X().avatarUploaderPremiumNoBanner,
                    default: X().avatarUploaderNormal
                });

            function ce(e) {
                var n, a, x, G = e.user,
                    Q = e.guild,
                    ee = e.canUsePremiumCustomization,
                    ne = e.onUpsellClick,
                    ce = e.onAvatarChange,
                    fe = e.onBannerChange,
                    de = e.pendingAccentColor,
                    ve = e.pendingBanner,
                    me = e.pendingBio,
                    pe = e.pendingPronouns,
                    he = e.pendingAvatar,
                    ye = e.pendingAvatarDecoration,
                    be = e.pendingNickname,
                    ge = e.pendingGlobalName,
                    Pe = e.pendingThemeColors,
                    Se = e.avatarClassName,
                    je = e.activityName,
                    we = e.activityCharacter,
                    Ie = e.isTryItOutFlow,
                    xe = void 0 !== Ie && Ie,
                    Ae = e.disabledInputs,
                    Ce = void 0 !== Ae && Ae,
                    Ee = e.hideExampleButton,
                    Te = void 0 !== Ee && Ee,
                    Ne = e.hideFakeActivity,
                    Ue = void 0 !== Ne && Ne,
                    Oe = e.hideBioSection,
                    Ze = void 0 !== Oe && Oe,
                    ke = e.forProfileEffectModal,
                    Me = void 0 !== ke && ke,
                    Be = e.pendingProfileEffectID,
                    Re = e.bodyClassName,
                    _e = function() {
                        var e = null != tn ? (0, c.getStatusBackdropColor)(tn) : null;
                        return (0, r.jsxs)("div", {
                            className: X().status,
                            children: [null != e && (null == $e ? void 0 : $e.canUsePremiumProfileCustomization) && (0, r.jsx)("div", {
                                className: X().statusDotBackground,
                                style: {
                                    backgroundColor: e,
                                    opacity: (0, c.getStatusBackdropOpacity)(vn, e)
                                }
                            }), (0, r.jsx)("svg", {
                                className: X().statusDot,
                                children: (0, r.jsx)("rect", {
                                    height: "100%",
                                    width: "100%",
                                    fill: (0, b.Lq)((0, c.getStatusColor)(vn)),
                                    mask: "url(#".concat((0, c.getStatusMask)(vn, !1), ")")
                                })
                            })]
                        })
                    },
                    ze = i.useRef(null),
                    Le = oe(i.useState(!1), 2),
                    De = Le[0],
                    We = Le[1],
                    Fe = k.QK.getSetting(),
                    Ge = (0, Z.Z)({
                        user: G,
                        guildId: null == Q ? void 0 : Q.id,
                        avatarDecorationOverride: ye,
                        avatarOverride: he,
                        size: c.AvatarSizes.SIZE_80,
                        showPending: !0
                    }),
                    He = Ge.avatarDecorationSrc,
                    Ve = Ge.avatarSrc,
                    qe = Ge.eventHandlers,
                    $e = (0, w.Z)(G.id, null == Q ? void 0 : Q.id),
                    Ke = (0, u.e7)([m.Z], (function() {
                        return m.Z.syncProfileThemeWithUserTheme
                    })),
                    Ye = (0, v.ZP)(),
                    Je = (0, u.e7)([M.ZP], (function() {
                        return null == Q ? null : M.ZP.getMember(Q.id, G.id)
                    })),
                    Qe = void 0 === he ? G.getAvatarURL(void 0, 80) : he,
                    Xe = (0, h.ZP)(Qe, (0, c.useToken)(s.Z.unsafe_rawColors.PRIMARY_530).hsl(), !1),
                    en = null == $e ? void 0 : $e.getPreviewThemeColors(Pe),
                    nn = null !== (n = null == en ? void 0 : en[0]) && void 0 !== n ? n : null == $e ? void 0 : $e.primaryColor,
                    tn = Ke ? Ye : (0, j.V3)(nn),
                    rn = (0, g.Z)(null !== (a = null != de ? de : nn) && void 0 !== a ? a : (0,
                        l._i)(Xe)).hsl,
                    an = (0, u.e7)([_.Z], (function() {
                        return _.Z.isFocused()
                    })),
                    on = Fe ? an : De,
                    ln = null == $e ? void 0 : $e.getPreviewBanner(ve, on),
                    un = null != ln,
                    sn = null != (null == $e ? void 0 : $e.profileEffectID),
                    cn = null !== (x = (0, V.gh)(be, null == Je ? void 0 : Je.nick)) && void 0 !== x ? x : (0, V.zJ)(ge, F.ZP.getName(G)),
                    fn = oe((0, u.Wu)([B.Z], (function() {
                        return [B.Z.findActivity(G.id, (function(e) {
                            return e.type === $.IIU.CUSTOM_STATUS
                        })), B.Z.getStatus(G.id)]
                    })), 2),
                    dn = fn[0],
                    vn = fn[1],
                    mn = (0, u.e7)([R.Z], (function() {
                        return R.Z.hidePersonalInformation
                    })),
                    pn = (null == $e ? void 0 : $e.canUsePremiumProfileCustomization) || ee,
                    hn = i.useCallback((function() {
                        var e, n;
                        null === (n = null === (e = ze.current) || void 0 === e ? void 0 : e.inputRef.current) || void 0 === n || n.activateUploadDialogue()
                    }), []),
                    yn = i.useCallback((function(e, n) {
                        null == e || null == n ? ce(null) : "image/gif" !== n.type || W.ZP.canUseAnimatedAvatar(G) ? (0, c.openModalLazy)(te((function() {
                            var i, a;
                            return le(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(91406), t.e(84959), t.e(17363), t.e(61670)]).then(t.bind(t, 17363))];
                                    case 1:
                                        i = o.sent(), a = i.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(a, ie({
                                                onCrop: ce,
                                                file: n,
                                                imgURI: e,
                                                allowSkip: !0
                                            }, t))
                                        }]
                                }
                            }))
                        }))) : (0, c.openModalLazy)(te((function() {
                            var n, i;
                            return le(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(83409)]).then(t.bind(t, 383409))];
                                    case 1:
                                        n = a.sent(), i = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, ae(ie({}, n), {
                                                imgURI: e,
                                                onChangeAvatar: function() {
                                                    n.onClose();
                                                    hn()
                                                }
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }), [G, hn, ce]),
                    bn = function(e, n) {
                        if (null == e || null == n) return fe(null);
                        (0, c.openModalLazy)(te((function() {
                            var i, a;
                            return le(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(91406), t.e(84959), t.e(17363), t.e(61670)]).then(t.bind(t, 17363))];
                                    case 1:
                                        i = o.sent(), a = i.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(a, ie({
                                                onCrop: fe,
                                                uploadType: K.pC.BANNER,
                                                file: n,
                                                imgURI: e,
                                                allowSkip: !0
                                            }, t))
                                        }]
                                }
                            }))
                        })))
                    },
                    gn = "ProfileCustomizationPreview";
                (0, d.j)({
                    location: gn + " auto on",
                    autoTrackExposure: !0
                });
                (0, d.j)({
                    location: gn + " auto off",
                    autoTrackExposure: !1
                });
                var Pn = (0, p.Z)().analyticsLocations;
                i.useEffect((function() {
                    if (!Fe) {
                        var e = null == $e ? void 0 : $e.getBannerURL({
                            canAnimate: !0,
                            size: 480
                        });
                        if (D.F8(e)) {
                            (new Image).src = null != e ? e : ""
                        }
                    }
                }), [$e, Fe]);
                var Sn, jn, wn, In, xn, An = null == Q,
                    Cn = null == $e ? void 0 : $e.profileEffectID;
                return (0, r.jsxs)(A.Z, {
                    forceShowPremium: ee,
                    user: G,
                    guildId: null == Q ? void 0 : Q.id,
                    profileType: Y.y0.POPOUT,
                    pendingThemeColors: Pe,
                    className: Me ? pn ? X().profileEffectsModalCustomizationPreviewWithTheme : X().profileEffectsModalCustomizationPreviewWithoutTheme : pn ? X().profileCustomizationPreviewWithTheme : X().profileCustomizationPreviewWithoutTheme,
                    children: [null != Be ? (0, r.jsx)(S.Z, {
                        profileEffectID: Be
                    }) : null !== Be && null != Cn && (0, r.jsx)(S.Z, {
                        profileEffectID: Cn
                    }), (0, r.jsxs)(c.HeadingLevel, {
                        children: [(0, r.jsx)(I.Z, {
                            profileType: Y.y0.POPOUT,
                            hasBanner: un,
                            isPremium: ee,
                            hasThemeColors: pn,
                            forProfileEffectModal: Me,
                            hasProfileEffect: sn,
                            children: ee ? (0, r.jsxs)("div", {
                                onMouseMove: function() {
                                    return We(!0)
                                },
                                onMouseLeave: function() {
                                    return We(!1)
                                },
                                children: [(0, r.jsx)(P.Z, {
                                    className: X().bannerUploader,
                                    showRemoveButton: !1,
                                    disabled: !ee || Ce,
                                    image: ln,
                                    makeURL: function() {
                                        return ln
                                    },
                                    onChange: bn,
                                    imageStyle: {
                                        backgroundColor: rn
                                    },
                                    imageClassName: o()(un ? X().bannerUploaderInnerSquare : X().bannerUploaderInnerSquareEmpty),
                                    hint: J.Z.Messages.CHANGE_BANNER,
                                    onOpenImageSelectModal: function() {
                                        return (0, V.$r)(K.pC.BANNER, null == Je ? void 0 : Je.guildId, xe, void 0)
                                    },
                                    hideSize: !0,
                                    maxFileSizeBytes: q.B,
                                    onFileSizeError: V.Wf
                                }), !Fe && D.F8(ln) ? (0, r.jsx)(z.Z, {
                                    className: X().gifTag
                                }) : null]
                            }) : (0, r.jsx)("div", {
                                className: sn ? X().bannerUploaderInnerSquare : X().bannerNormal,
                                style: {
                                    backgroundColor: rn
                                },
                                children: Ce ? null : (0, r.jsx)(c.Clickable, {
                                    onClick: function() {
                                        return null == ne ? void 0 : ne({
                                            object: $.qAy.EDIT_PROFILE_BANNER
                                        })
                                    },
                                    className: X().bannerNitroUpsell,
                                    children: (0, r.jsx)(c.Heading, {
                                        className: X().bannerNitroUpsellText,
                                        variant: "eyebrow",
                                        children: J.Z.Messages.USER_SETTINGS_UNLOCK_BANNER
                                    })
                                })
                            })
                        }), An ? (In = function() {
                            return (0, V.$r)(K.pC.AVATAR, null == Je ? void 0 : Je.guildId, xe)
                        }, xn = function() {
                            return (0, y.ps)({
                                analyticsLocations: Pn,
                                isTryItOutFlow: xe
                            })
                        }, (0, r.jsxs)(c.Clickable, ae(ie({}, qe), {
                            "aria-disabled": Ce,
                            onClick: Ce ? void 0 : function(e) {
                                (0, f.jW)(e, te((function() {
                                    var e, n;
                                    return le(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return [4, t.e(96404).then(t.bind(t, 996404))];
                                            case 1:
                                                e = i.sent(), n = e.default;
                                                return [2, function() {
                                                    return (0, r.jsx)(n, {
                                                        changeAvatarAction: In,
                                                        changeDecorationAction: xn
                                                    })
                                                }]
                                        }
                                    }))
                                })))
                            },
                            className: o()(se({
                                isPremium: ee,
                                hasBanner: un,
                                hasProfileEffect: sn
                            }), re({}, X().defaultCursor, Ce)),
                            children: [(0, r.jsx)(ue, {
                                className: X().avatarUploaderInner,
                                src: Ve,
                                avatarDecoration: He,
                                size: c.AvatarSizes.SIZE_80,
                                "aria-label": G.username
                            }), Ce ? null : (0, r.jsx)("div", {
                                className: X().hoverIconWrapper,
                                children: (0, r.jsx)(L.Z, {
                                    className: X().hoverIcon,
                                    color: "white"
                                })
                            }), _e()]
                        }))) : (jn = null != Je && !ee, wn = (0, r.jsxs)("div", {
                            className: se({
                                isPremium: ee,
                                hasBanner: un,
                                hasProfileEffect: sn
                            }),
                            children: [(0, r.jsx)(P.Z, {
                                disabled: Ce,
                                ref: ze,
                                showIcon: null == He,
                                hint: jn ? J.Z.Messages.UNLOCK_GUILD_MEMBER_AVATAR : J.Z.Messages.CHANGE_AVATAR,
                                showRemoveButton: !1,
                                imageClassName: o()(Se, X().avatarUploaderInner),
                                image: Ve,
                                onChange: yn,
                                makeURL: function() {
                                    return Ve
                                },
                                maxFileSizeBytes: q.B,
                                onFileSizeError: V.Wf,
                                onOpenImageSelectModal: function() {
                                    return (0, V.$r)(K.pC.AVATAR, null == Je ? void 0 : Je.guildId, xe, void 0)
                                }
                            }), null != He && (0, r.jsx)("img", {
                                className: X().avatarDecoration,
                                src: He,
                                alt: " ",
                                "aria-hidden": !0
                            }), _e()]
                        }), jn ? (0, r.jsx)(c.Clickable, {
                            onClickCapture: function(e) {
                                e.stopPropagation();
                                null == ne || ne({
                                    object: $.qAy.AVATAR
                                })
                            },
                            children: wn
                        }) : wn), (0, r.jsx)(E.Cb, {
                            user: G,
                            guildId: null == Q ? void 0 : Q.id,
                            isTryItOutFlow: xe,
                            forProfileEffectModal: Me
                        }), (Sn = null == $e ? void 0 : $e.getPreviewBio(me), (0, r.jsxs)(A.Z.Inner, {
                            className: o()(X().body, Re),
                            children: [(0, r.jsx)(O.Z, {
                                isTryItOut: xe,
                                user: G,
                                nickname: null != cn ? cn : G.username,
                                pronouns: null != pe ? pe : null == $e ? void 0 : $e.pronouns,
                                usernameIcon: function() {
                                    if (null != Je && null !== he && (null != Je.avatar || null != he)) return (0,
                                        r.jsx)(T.Z, {
                                        user: G,
                                        nickname: cn
                                    })
                                }()
                            }), !Me && (0, r.jsx)(U.Z, {
                                customStatusActivity: dn
                            }), (0, r.jsx)(C.Z, {}), !Ze && (0, r.jsx)(N.Z, {
                                isUsingGuildBio: null == Sn ? void 0 : Sn.isUsingGuildValue,
                                guild: Q,
                                bio: null == Sn ? void 0 : Sn.value,
                                hidePersonalInformation: mn,
                                lastSection: Ue,
                                lineClamp: Me ? 3 : void 0
                            }), !Ue && (0, r.jsx)(H.Z, {
                                activityName: je,
                                activityCharacter: we,
                                showExampleButton: null == Q && !Te
                            })]
                        }))]
                    })]
                })
            }
        }
    }
]);