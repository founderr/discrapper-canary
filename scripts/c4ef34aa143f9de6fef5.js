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

            function P(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function A(e, n) {
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
            var C = (P(I = {}, j.WUMPUS, v().activityCharacterWumpus), P(I, j.PHIBI, v().activityCharacterPhibi), I);
            const x = i.memo((function(e) {
                var n = e.activityName,
                    t = e.activityCharacter,
                    a = void 0 === t ? j.WUMPUS : t,
                    d = e.showExampleButton,
                    m = void 0 !== d && d,
                    h = A(i.useState(0), 2),
                    b = h[0],
                    g = h[1],
                    P = A((0, l.useSpring)((function() {
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
                    I = P[0],
                    x = P[1],
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
                var N = a === j.WUMPUS ? y() : p();
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
                            className: o()(v().fakeActivityIcon, C[a]),
                            children: (0, r.jsx)(l.animated.img, {
                                className: v().fakeActivityPencil,
                                src: N,
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
                c = t(882723),
                f = t(971402),
                d = t(74535),
                v = t(316878),
                m = t(19585),
                p = t(109206),
                h = t(841379),
                y = t(995141),
                b = t(525628),
                g = t(795470),
                S = t(807947),
                P = t(888291),
                A = t(752596),
                j = t(265022),
                I = t(183490),
                w = t(295921),
                C = t(74188),
                x = t(485552),
                U = t(906615),
                N = t(239639),
                T = t(89303),
                E = t(945123),
                O = t(760028),
                Z = t(184308),
                k = t(968449),
                M = t(21372),
                B = t(491260),
                R = t(793461),
                _ = t(901654),
                L = t(258441),
                z = t(912250),
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
                Q = t(540798),
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
                se = (0, C.zW)({
                    premiumUserWithBanner: X().avatarUploaderPremium,
                    premiumUserWithoutBanner: X().avatarUploaderPremiumNoBanner,
                    default: X().avatarUploaderNormal
                });

            function ce(e) {
                var n, a, C, G = e.user,
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
                    Se = e.pendingThemeColors,
                    Pe = e.avatarClassName,
                    Ae = e.activityName,
                    je = e.activityCharacter,
                    Ie = e.isTryItOutFlow,
                    we = void 0 !== Ie && Ie,
                    Ce = e.disabledInputs,
                    xe = void 0 !== Ce && Ce,
                    Ue = e.hideExampleButton,
                    Ne = void 0 !== Ue && Ue,
                    Te = e.hideFakeActivity,
                    Ee = void 0 !== Te && Te,
                    Oe = e.hideBioSection,
                    Ze = void 0 !== Oe && Oe,
                    ke = e.forProfileEffectModal,
                    Me = void 0 !== ke && ke,
                    Be = e.pendingProfileEffectID,
                    Re = e.bodyClassName,
                    _e = function() {
                        var e = null != Xe ? (0, c.getStatusBackdropColor)(Xe) : null;
                        return (0, r.jsxs)("div", {
                            className: X().status,
                            children: [null != e && (null == He ? void 0 : He.canUsePremiumProfileCustomization) && (0, r.jsx)("div", {
                                className: X().statusDotBackground,
                                style: {
                                    backgroundColor: e,
                                    opacity: (0, c.getStatusBackdropOpacity)(sn, e)
                                }
                            }), (0, r.jsx)("svg", {
                                className: X().statusDot,
                                children: (0, r.jsx)("rect", {
                                    height: "100%",
                                    width: "100%",
                                    fill: (0, g.Lq)((0, c.getStatusColor)(sn)),
                                    mask: "url(#".concat((0, c.getStatusMask)(sn, !1), ")")
                                })
                            })]
                        })
                    },
                    Le = i.useRef(null),
                    ze = oe(i.useState(!1), 2),
                    De = ze[0],
                    We = ze[1],
                    Fe = k.QK.getSetting(),
                    Ge = (0, h.Z)({
                        user: G,
                        pendingAvatarDecoration: ye,
                        size: (0, y.y9)(c.AvatarSizes.SIZE_80),
                        canAnimate: !0
                    }),
                    He = (0, I.Z)(G.id, null == Q ? void 0 : Q.id),
                    Ve = (0, u.e7)([v.Z], (function() {
                        return v.Z.syncProfileThemeWithUserTheme
                    })),
                    qe = (0, d.ZP)(),
                    $e = (0, u.e7)([M.ZP], (function() {
                        return null == Q ? null : M.ZP.getMember(Q.id, G.id)
                    })),
                    Ke = void 0 === he ? G.getAvatarURL(void 0, 80) : he,
                    Ye = (0, p.ZP)(Ke, (0, c.useToken)(s.Z.unsafe_rawColors.PRIMARY_530).hsl(), !1),
                    Je = null == He ? void 0 : He.getPreviewThemeColors(Se),
                    Qe = null !== (n = null == Je ? void 0 : Je[0]) && void 0 !== n ? n : null == He ? void 0 : He.primaryColor,
                    Xe = Ve ? qe : (0, j.V3)(Qe),
                    en = (0, S.Z)(null !== (a = null != de ? de : Qe) && void 0 !== a ? a : (0, l._i)(Ye)).hsl,
                    nn = (0, u.e7)([_.Z], (function() {
                        return _.Z.isFocused()
                    })),
                    tn = Fe ? nn : De,
                    rn = null == He ? void 0 : He.getPreviewBanner(ve, tn),
                    an = null != rn,
                    on = null !== (C = (0, V.gh)(be, null == $e ? void 0 : $e.nick)) && void 0 !== C ? C : (0, V.zJ)(ge, F.ZP.getName(G)),
                    ln = oe((0, u.Wu)([B.Z], (function() {
                        return [B.Z.findActivity(G.id, (function(e) {
                            return e.type === $.IIU.CUSTOM_STATUS
                        })), B.Z.getStatus(G.id)]
                    })), 2),
                    un = ln[0],
                    sn = ln[1],
                    cn = (0, u.e7)([R.Z], (function() {
                        return R.Z.hidePersonalInformation
                    })),
                    fn = (null == He ? void 0 : He.canUsePremiumProfileCustomization) || ee,
                    dn = i.useCallback((function() {
                        var e, n;
                        null === (n = null === (e = Le.current) || void 0 === e ? void 0 : e.inputRef.current) || void 0 === n || n.activateUploadDialogue()
                    }), []),
                    vn = i.useCallback((function(e, n) {
                        null == e || null == n ? ce(null) : "image/gif" !== n.type || W.ZP.canUseAnimatedAvatar(G) ? (0, c.openModalLazy)(te((function() {
                            var i, a;
                            return le(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(17363), t.e(38479)]).then(t.bind(t, 17363))];
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
                                                    dn()
                                                }
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }), [G, dn, ce]),
                    mn = function(e, n) {
                        if (null == e || null == n) return fe(null);
                        (0, c.openModalLazy)(te((function() {
                            var i, a;
                            return le(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(17363), t.e(38479)]).then(t.bind(t, 17363))];
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
                    pn = (0, b.OE)().canUseCollectiblesIAP,
                    hn = (0, m.Z)().analyticsLocations;
                i.useEffect((function() {
                    if (!Fe) {
                        var e = null == He ? void 0 : He.getBannerURL({
                            canAnimate: !0,
                            size: 480
                        });
                        if (D.F8(e)) {
                            (new Image).src = null != e ? e : ""
                        }
                    }
                }), [He, Fe]);
                var yn, bn, gn, Sn, Pn, An, jn = null == Q && pn,
                    In = null == He ? void 0 : He.profileEffectID;
                return (0, r.jsxs)(x.Z, {
                    forceShowPremium: ee,
                    user: G,
                    guildId: null == Q ? void 0 : Q.id,
                    profileType: Y.y0.POPOUT,
                    pendingThemeColors: Se,
                    className: Me ? X().profileEffectsModalCustomizationPreview : fn ? X().profileCustomizationPreviewWithTheme : X().profileCustomizationPreviewWithoutTheme,
                    children: [null != Be ? (0, r.jsx)(A.Z, {
                        profileEffectID: Be
                    }) : null !== Be && null != In && (0, r.jsx)(A.Z, {
                        profileEffectID: In
                    }), (0, r.jsxs)(c.HeadingLevel, {
                        children: [(0, r.jsx)(w.Z, {
                            user: G,
                            profileType: Y.y0.POPOUT,
                            hasBanner: an,
                            isPremium: ee,
                            hasThemeColors: fn,
                            overrideAvatarDecorationURL: Ge,
                            forProfileEffectModal: Me,
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
                                    disabled: !ee || xe,
                                    image: rn,
                                    makeURL: function() {
                                        return rn
                                    },
                                    onChange: mn,
                                    imageStyle: {
                                        backgroundColor: en
                                    },
                                    imageClassName: an ? X().bannerUploaderInnerSquare : X().bannerUploaderInnerSquareEmpty,
                                    hint: J.Z.Messages.CHANGE_BANNER,
                                    onOpenImageSelectModal: function() {
                                        return (0, V.$r)(K.pC.BANNER, null == $e ? void 0 : $e.guildId, we)
                                    },
                                    hideSize: !0,
                                    maxFileSizeBytes: q.B,
                                    onFileSizeError: V.Wf
                                }), !Fe && D.F8(rn) ? (0, r.jsx)(L.Z, {
                                    className: X().gifTag
                                }) : null]
                            }) : (0, r.jsx)("div", {
                                className: X().bannerNormal,
                                style: {
                                    backgroundColor: en
                                },
                                children: xe ? null : (0, r.jsx)(c.Clickable, {
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
                        }), jn ? (Pn = function() {
                            return (0, V.$r)(K.pC.AVATAR, null == $e ? void 0 : $e.guildId, we)
                        }, An = function() {
                            return (0, y.ps)({
                                analyticsLocations: hn
                            })
                        }, (0, r.jsxs)(c.Clickable, {
                            "aria-disabled": xe,
                            onClick: xe ? void 0 : function(e) {
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
                                                        changeAvatarAction: Pn,
                                                        changeDecorationAction: An
                                                    })
                                                }]
                                        }
                                    }))
                                })))
                            },
                            className: o()(se({
                                isPremium: ee,
                                hasBanner: an
                            }), re({}, X().defaultCursor, xe)),
                            children: [(0, r.jsx)(ue, {
                                className: X().avatarUploaderInner,
                                src: (0, V.SG)(he, $e, G),
                                avatarDecoration: Ge,
                                size: c.AvatarSizes.SIZE_80,
                                "aria-label": G.username
                            }), xe ? null : (0, r.jsx)("div", {
                                className: X().hoverIconWrapper,
                                children: (0, r.jsx)(z.Z, {
                                    className: X().hoverIcon,
                                    color: "white"
                                })
                            }), _e()]
                        })) : (bn = (0, V.SG)(he, $e, G), gn = null != $e && !ee, Sn = (0, r.jsxs)("div", {
                            className: se({
                                isPremium: ee,
                                hasBanner: an
                            }),
                            children: [(0, r.jsx)(P.Z, {
                                disabled: xe,
                                ref: Le,
                                showIcon: null == Ge,
                                hint: gn ? J.Z.Messages.UNLOCK_GUILD_MEMBER_AVATAR : J.Z.Messages.CHANGE_AVATAR,
                                showRemoveButton: !1,
                                imageClassName: o()(Pe, X().avatarUploaderInner),
                                image: bn,
                                onChange: vn,
                                makeURL: function() {
                                    return bn
                                },
                                maxFileSizeBytes: q.B,
                                onFileSizeError: V.Wf,
                                onOpenImageSelectModal: function() {
                                    return (0,
                                        V.$r)(K.pC.AVATAR, null == $e ? void 0 : $e.guildId, we)
                                }
                            }), null != Ge && (0, r.jsx)("img", {
                                className: X().avatarDecoration,
                                src: Ge,
                                alt: " ",
                                "aria-hidden": !0
                            }), _e()]
                        }), gn ? (0, r.jsx)(c.Clickable, {
                            onClickCapture: function(e) {
                                e.stopPropagation();
                                null == ne || ne({
                                    object: $.qAy.AVATAR
                                })
                            },
                            children: Sn
                        }) : Sn), (0, r.jsx)(N.Cb, {
                            user: G,
                            guildId: null == Q ? void 0 : Q.id,
                            isTryItOutFlow: we
                        }), (yn = null == He ? void 0 : He.getPreviewBio(me), (0, r.jsxs)(x.Z.Inner, {
                            className: o()(X().body, Re),
                            children: [(0, r.jsx)(Z.Z, {
                                isTryItOut: we,
                                user: G,
                                nickname: null != on ? on : G.username,
                                pronouns: null != pe ? pe : null == He ? void 0 : He.pronouns,
                                usernameIcon: function() {
                                    if (null != $e && null !== he && (null != $e.avatar || null != he)) return (0, r.jsx)(T.Z, {
                                        user: G,
                                        nickname: on
                                    })
                                }()
                            }), !Me && (0, r.jsx)(O.Z, {
                                customStatusActivity: un
                            }), (0, r.jsx)(U.Z, {}), !Ze && (0, r.jsx)(E.Z, {
                                isUsingGuildBio: null == yn ? void 0 : yn.isUsingGuildValue,
                                guild: Q,
                                bio: null == yn ? void 0 : yn.value,
                                hidePersonalInformation: cn,
                                lastSection: Ee,
                                lineClamp: Me ? 3 : void 0
                            }), !Ee && (0, r.jsx)(H.Z, {
                                activityName: Ae,
                                activityCharacter: je,
                                showExampleButton: null == Q && !Ne
                            })]
                        }))]
                    })]
                })
            }
        }
    }
]);