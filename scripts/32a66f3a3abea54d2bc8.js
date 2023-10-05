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
                m: () => w,
                Z: () => x
            });
            var r = t(785893),
                i = t(667294),
                o = t(294184),
                a = t.n(o),
                l = t(248088),
                u = t(304548),
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

            function g(e, n, t, r, i, o, a) {
                try {
                    var l = e[o](a),
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
                        var o = e.apply(n, t);

                        function a(e) {
                            g(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            g(o, r, i, a, l, "throw", e)
                        }
                        a(void 0)
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
                        var r, i, o = [],
                            a = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
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
            var w, I, C = function(e, n) {
                var t, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
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
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };
            ! function(e) {
                e[e.WUMPUS = 0] = "WUMPUS";
                e[e.PHIBI = 1] = "PHIBI"
            }(w || (w = {}));
            var A = (S(I = {}, w.WUMPUS, v().activityCharacterWumpus), S(I, w.PHIBI, v().activityCharacterPhibi), I);
            const x = i.memo((function(e) {
                var n = e.activityName,
                    t = e.activityCharacter,
                    o = void 0 === t ? w.WUMPUS : t,
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
                    x = S[1],
                    T = i.useRef({
                        seconds: b,
                        jitter: P((function() {
                            var e;
                            return C(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        0;
                                        e = function(e) {
                                            if (s.Z.useReducedMotion) return 0;
                                            e -= 5399;
                                            return Math.min(10, e / 300 * 10)
                                        }(T.current.seconds);
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
                    T.current.seconds = b
                }));
                i.useEffect((function() {
                    var e = setInterval((function() {
                        g((function(e) {
                            5399 === e && T.current.jitter();
                            return ++e
                        }))
                    }), 1e3);
                    return function() {
                        return clearInterval(e)
                    }
                }), []);
                var E = o === w.WUMPUS ? y() : p();
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
                            className: a()(v().fakeActivityIcon, A[o]),
                            children: (0, r.jsx)(l.animated.img, {
                                className: v().fakeActivityPencil,
                                src: E,
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
                Z: () => fe
            });
            var r = t(785893),
                i = t(667294),
                o = t(294184),
                a = t.n(o),
                l = t(547308),
                u = t(202351),
                s = t(795308),
                c = t(304548),
                f = t(971402),
                d = t(514722),
                v = t(74535),
                m = t(316878),
                p = t(19585),
                h = t(109206),
                y = t(995141),
                b = t(525628),
                g = t(795470),
                P = t(807947),
                S = t(888291),
                j = t(753251),
                w = t(265022),
                I = t(183490),
                C = t(849699),
                A = t(74188),
                x = t(485552),
                T = t(906615),
                E = t(550773),
                N = t(89303),
                U = t(945123),
                O = t(760028),
                Z = t(184308),
                k = t(169844),
                M = t(968449),
                B = t(21372),
                R = t(491260),
                _ = t(793461),
                L = t(901654),
                z = t(258441),
                D = t(912250),
                W = t(775173),
                F = t(694329),
                G = t(749565),
                H = t(310126),
                V = t(432301),
                q = t(339822),
                $ = t(766959),
                K = t(2590),
                Y = t(921431),
                J = t(960412),
                Q = t(473708),
                X = t(565967),
                ee = t.n(X);

            function ne(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function te(e, n, t, r, i, o, a) {
                try {
                    var l = e[o](a),
                        u = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(u) : Promise.resolve(u).then(r, i)
            }

            function re(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            te(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            te(o, r, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function ie(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function oe(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        ie(e, n, t[n])
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

            function le(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            a = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return ne(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ne(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ue = function(e, n) {
                    var t, r, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
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
                                            if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2];
                                                a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    o = n.call(e, a)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    t = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                se = H.ZP.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar,
                ce = (0, A.zW)({
                    premiumUserWithBanner: ee().avatarUploaderPremium,
                    premiumUserWithoutBanner: ee().avatarUploaderPremiumNoBanner,
                    default: ee().avatarUploaderNormal
                });

            function fe(e) {
                var n, o, A, H = e.user,
                    X = e.guild,
                    ne = e.canUsePremiumCustomization,
                    te = e.onUpsellClick,
                    fe = e.onAvatarChange,
                    de = e.onBannerChange,
                    ve = e.pendingAccentColor,
                    me = e.pendingBanner,
                    pe = e.pendingBio,
                    he = e.pendingPronouns,
                    ye = e.pendingAvatar,
                    be = e.pendingAvatarDecoration,
                    ge = e.pendingNickname,
                    Pe = e.pendingGlobalName,
                    Se = e.pendingThemeColors,
                    je = e.avatarClassName,
                    we = e.activityName,
                    Ie = e.activityCharacter,
                    Ce = e.isTryItOutFlow,
                    Ae = void 0 !== Ce && Ce,
                    xe = e.disabledInputs,
                    Te = void 0 !== xe && xe,
                    Ee = e.hideExampleButton,
                    Ne = void 0 !== Ee && Ee,
                    Ue = e.hideFakeActivity,
                    Oe = void 0 !== Ue && Ue,
                    Ze = e.hideBioSection,
                    ke = void 0 !== Ze && Ze,
                    Me = e.forProfileEffectModal,
                    Be = void 0 !== Me && Me,
                    Re = e.pendingProfileEffectID,
                    _e = e.bodyClassName,
                    Le = function() {
                        var e = null != rn ? (0, c.getStatusBackdropColor)(rn) : null;
                        return (0, r.jsxs)("div", {
                            className: ee().status,
                            children: [null != e && (null == Ke ? void 0 : Ke.canUsePremiumProfileCustomization) && (0, r.jsx)("div", {
                                className: ee().statusDotBackground,
                                style: {
                                    backgroundColor: e,
                                    opacity: (0, c.getStatusBackdropOpacity)(vn, e)
                                }
                            }), (0,
                                r.jsx)("svg", {
                                className: ee().statusDot,
                                children: (0, r.jsx)("rect", {
                                    height: "100%",
                                    width: "100%",
                                    fill: (0, g.Lq)((0, c.getStatusColor)(vn)),
                                    mask: "url(#".concat((0, c.getStatusMask)(vn, !1), ")")
                                })
                            })]
                        })
                    },
                    ze = i.useRef(null),
                    De = le(i.useState(!1), 2),
                    We = De[0],
                    Fe = De[1],
                    Ge = M.QK.getSetting(),
                    He = (0, k.Z)({
                        user: H,
                        guildId: null == X ? void 0 : X.id,
                        avatarDecorationOverride: be,
                        size: c.AvatarSizes.SIZE_80,
                        showPending: !0
                    }),
                    Ve = He.avatarDecorationSrc,
                    qe = He.avatarSrc,
                    $e = He.eventHandlers,
                    Ke = (0, I.Z)(H.id, null == X ? void 0 : X.id),
                    Ye = (0, u.e7)([m.Z], (function() {
                        return m.Z.syncProfileThemeWithUserTheme
                    })),
                    Je = (0, v.ZP)(),
                    Qe = (0, u.e7)([B.ZP], (function() {
                        return null == X ? null : B.ZP.getMember(X.id, H.id)
                    })),
                    Xe = void 0 === ye ? H.getAvatarURL(void 0, 80) : ye,
                    en = (0, h.ZP)(Xe, (0, c.useToken)(s.Z.unsafe_rawColors.PRIMARY_530).hsl(), !1),
                    nn = null == Ke ? void 0 : Ke.getPreviewThemeColors(Se),
                    tn = null !== (n = null == nn ? void 0 : nn[0]) && void 0 !== n ? n : null == Ke ? void 0 : Ke.primaryColor,
                    rn = Ye ? Je : (0, w.V3)(tn),
                    on = (0, P.Z)(null !== (o = null != ve ? ve : tn) && void 0 !== o ? o : (0,
                        l._i)(en)).hsl,
                    an = (0, u.e7)([L.Z], (function() {
                        return L.Z.isFocused()
                    })),
                    ln = Ge ? an : We,
                    un = null == Ke ? void 0 : Ke.getPreviewBanner(me, ln),
                    sn = null != un,
                    cn = null !== (A = (0, q.gh)(ge, null == Qe ? void 0 : Qe.nick)) && void 0 !== A ? A : (0, q.zJ)(Pe, G.ZP.getName(H)),
                    fn = le((0, u.Wu)([R.Z], (function() {
                        return [R.Z.findActivity(H.id, (function(e) {
                            return e.type === K.IIU.CUSTOM_STATUS
                        })), R.Z.getStatus(H.id)]
                    })), 2),
                    dn = fn[0],
                    vn = fn[1],
                    mn = (0, u.e7)([_.Z], (function() {
                        return _.Z.hidePersonalInformation
                    })),
                    pn = (null == Ke ? void 0 : Ke.canUsePremiumProfileCustomization) || ne,
                    hn = i.useCallback((function() {
                        var e, n;
                        null === (n = null === (e = ze.current) || void 0 === e ? void 0 : e.inputRef.current) || void 0 === n || n.activateUploadDialogue()
                    }), []),
                    yn = i.useCallback((function(e, n) {
                        null == e || null == n ? fe(null) : "image/gif" !== n.type || F.ZP.canUseAnimatedAvatar(H) ? (0, c.openModalLazy)(re((function() {
                            var i, o;
                            return ue(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(19887), t.e(91406), t.e(84959), t.e(17363), t.e(56620), t.e(41484)]).then(t.bind(t, 17363))];
                                    case 1:
                                        i = a.sent(), o = i.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(o, oe({
                                                onCrop: fe,
                                                file: n,
                                                imgURI: e,
                                                allowSkip: !0
                                            }, t))
                                        }]
                                }
                            }))
                        }))) : (0, c.openModalLazy)(re((function() {
                            var n, i;
                            return ue(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(83409)]).then(t.bind(t, 383409))];
                                    case 1:
                                        n = o.sent(), i = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, ae(oe({}, n), {
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
                    }), [H, hn, fe]),
                    bn = function(e, n) {
                        if (null == e || null == n) return de(null);
                        (0, c.openModalLazy)(re((function() {
                            var i, o;
                            return ue(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(19887), t.e(91406), t.e(84959), t.e(17363), t.e(56620), t.e(41484)]).then(t.bind(t, 17363))];
                                    case 1:
                                        i = a.sent(), o = i.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(o, oe({
                                                onCrop: de,
                                                uploadType: Y.pC.BANNER,
                                                file: n,
                                                imgURI: e,
                                                allowSkip: !0
                                            }, t))
                                        }]
                                }
                            }))
                        })))
                    },
                    gn = (0, b.OE)({
                        location: "ProfileCustomizationPreview"
                    }).canUseCollectiblesIAP,
                    Pn = "ProfileCustomizationPreview";
                (0, d.j)({
                    location: Pn + " auto on",
                    autoTrackExposure: !0
                });
                (0, d.j)({
                    location: Pn + " auto off",
                    autoTrackExposure: !1
                });
                var Sn = (0, p.Z)().analyticsLocations;
                i.useEffect((function() {
                    if (!Ge) {
                        var e = null == Ke ? void 0 : Ke.getBannerURL({
                            canAnimate: !0,
                            size: 480
                        });
                        if (W.F8(e)) {
                            (new Image).src = null != e ? e : ""
                        }
                    }
                }), [Ke, Ge]);
                var jn, wn, In, Cn, An, xn = null == X && gn,
                    Tn = null == Ke ? void 0 : Ke.profileEffectID;
                return (0, r.jsxs)(x.Z, {
                    forceShowPremium: ne,
                    user: H,
                    guildId: null == X ? void 0 : X.id,
                    profileType: J.y0.POPOUT,
                    pendingThemeColors: Se,
                    className: Be ? pn ? ee().profileEffectsModalCustomizationPreviewWithTheme : ee().profileEffectsModalCustomizationPreviewWithoutTheme : pn ? ee().profileCustomizationPreviewWithTheme : ee().profileCustomizationPreviewWithoutTheme,
                    children: [null != Re ? (0, r.jsx)(j.Z, {
                        profileEffectID: Re
                    }) : null !== Re && null != Tn && (0, r.jsx)(j.Z, {
                        profileEffectID: Tn
                    }), (0, r.jsxs)(c.HeadingLevel, {
                        children: [(0, r.jsx)(C.Z, {
                            profileType: J.y0.POPOUT,
                            hasBanner: sn,
                            isPremium: ne,
                            hasThemeColors: pn,
                            forProfileEffectModal: Be,
                            children: ne ? (0, r.jsxs)("div", {
                                onMouseMove: function() {
                                    return Fe(!0)
                                },
                                onMouseLeave: function() {
                                    return Fe(!1)
                                },
                                children: [(0, r.jsx)(S.Z, {
                                    className: ee().bannerUploader,
                                    showRemoveButton: !1,
                                    disabled: !ne || Te,
                                    image: un,
                                    makeURL: function() {
                                        return un
                                    },
                                    onChange: bn,
                                    imageStyle: {
                                        backgroundColor: on
                                    },
                                    imageClassName: a()(sn ? ee().bannerUploaderInnerSquare : ee().bannerUploaderInnerSquareEmpty, ie({}, ee().noBorderRadius, Be)),
                                    hint: Q.Z.Messages.CHANGE_BANNER,
                                    onOpenImageSelectModal: function() {
                                        return (0, q.$r)(Y.pC.BANNER, null == Qe ? void 0 : Qe.guildId, Ae, void 0, de)
                                    },
                                    hideSize: !0,
                                    maxFileSizeBytes: $.B,
                                    onFileSizeError: q.Wf
                                }), !Ge && W.F8(un) ? (0, r.jsx)(z.Z, {
                                    className: ee().gifTag
                                }) : null]
                            }) : (0, r.jsx)("div", {
                                className: ee().bannerNormal,
                                style: {
                                    backgroundColor: on
                                },
                                children: Te ? null : (0, r.jsx)(c.Clickable, {
                                    onClick: function() {
                                        return null == te ? void 0 : te({
                                            object: K.qAy.EDIT_PROFILE_BANNER
                                        })
                                    },
                                    className: ee().bannerNitroUpsell,
                                    children: (0,
                                        r.jsx)(c.Heading, {
                                        className: ee().bannerNitroUpsellText,
                                        variant: "eyebrow",
                                        children: Q.Z.Messages.USER_SETTINGS_UNLOCK_BANNER
                                    })
                                })
                            })
                        }), xn ? (Cn = function() {
                            return (0, q.$r)(Y.pC.AVATAR, null == Qe ? void 0 : Qe.guildId, Ae)
                        }, An = function() {
                            return (0, y.ps)({
                                analyticsLocations: Sn,
                                isTryItOutFlow: Ae
                            })
                        }, (0, r.jsxs)(c.Clickable, {
                            onMouseEnter: $e.onMouseEnter,
                            onMouseLeave: $e.onMouseLeave,
                            "aria-disabled": Te,
                            onClick: Te ? void 0 : function(e) {
                                (0, f.jW)(e, re((function() {
                                    var e, n;
                                    return ue(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return [4, t.e(96404).then(t.bind(t, 996404))];
                                            case 1:
                                                e = i.sent(), n = e.default;
                                                return [2, function() {
                                                    return (0, r.jsx)(n, {
                                                        changeAvatarAction: Cn,
                                                        changeDecorationAction: An
                                                    })
                                                }]
                                        }
                                    }))
                                })))
                            },
                            className: a()(ce({
                                isPremium: ne,
                                hasBanner: sn
                            }), ie({}, ee().defaultCursor, Te)),
                            children: [(0, r.jsx)(se, {
                                className: ee().avatarUploaderInner,
                                src: qe,
                                avatarDecoration: Ve,
                                size: c.AvatarSizes.SIZE_80,
                                "aria-label": H.username
                            }), Te ? null : (0, r.jsx)("div", {
                                className: ee().hoverIconWrapper,
                                children: (0, r.jsx)(D.Z, {
                                    className: ee().hoverIcon,
                                    color: "white"
                                })
                            }), Le()]
                        })) : (wn = null != Qe && !ne, In = (0, r.jsxs)("div", {
                            className: ce({
                                isPremium: ne,
                                hasBanner: sn
                            }),
                            children: [(0, r.jsx)(S.Z, {
                                disabled: Te,
                                ref: ze,
                                showIcon: null == Ve,
                                hint: wn ? Q.Z.Messages.UNLOCK_GUILD_MEMBER_AVATAR : Q.Z.Messages.CHANGE_AVATAR,
                                showRemoveButton: !1,
                                imageClassName: a()(je, ee().avatarUploaderInner),
                                image: qe,
                                onChange: yn,
                                makeURL: function() {
                                    return qe
                                },
                                maxFileSizeBytes: $.B,
                                onFileSizeError: q.Wf,
                                onOpenImageSelectModal: function() {
                                    return (0, q.$r)(Y.pC.AVATAR, null == Qe ? void 0 : Qe.guildId, Ae, void 0, fe)
                                }
                            }), null != Ve && (0, r.jsx)("img", {
                                className: ee().avatarDecoration,
                                src: Ve,
                                alt: " ",
                                "aria-hidden": !0
                            }), Le()]
                        }), wn ? (0, r.jsx)(c.Clickable, {
                            onClickCapture: function(e) {
                                e.stopPropagation();
                                null == te || te({
                                    object: K.qAy.AVATAR
                                })
                            },
                            children: In
                        }) : In), (0, r.jsx)(E.Cb, {
                            user: H,
                            guildId: null == X ? void 0 : X.id,
                            isTryItOutFlow: Ae,
                            forProfileEffectModal: Be
                        }), (jn = null == Ke ? void 0 : Ke.getPreviewBio(pe), (0, r.jsxs)(x.Z.Inner, {
                            className: a()(ee().body, _e),
                            children: [(0, r.jsx)(Z.Z, {
                                isTryItOut: Ae,
                                user: H,
                                nickname: null != cn ? cn : H.username,
                                pronouns: null != he ? he : null == Ke ? void 0 : Ke.pronouns,
                                usernameIcon: function() {
                                    if (null != Qe && null !== ye && (null != Qe.avatar || null != ye)) return (0, r.jsx)(N.Z, {
                                        user: H,
                                        nickname: cn
                                    })
                                }()
                            }), !Be && (0, r.jsx)(O.Z, {
                                customStatusActivity: dn
                            }), (0, r.jsx)(T.Z, {}), !ke && (0, r.jsx)(U.Z, {
                                isUsingGuildBio: null == jn ? void 0 : jn.isUsingGuildValue,
                                guild: X,
                                bio: null == jn ? void 0 : jn.value,
                                hidePersonalInformation: mn,
                                lastSection: Oe,
                                lineClamp: Be ? 3 : void 0
                            }), !Oe && (0, r.jsx)(V.Z, {
                                activityName: we,
                                activityCharacter: Ie,
                                showExampleButton: null == X && !Ne
                            })]
                        }))]
                    })]
                })
            }
        }
    }
]);