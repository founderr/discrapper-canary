(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [76192], {
        555700: (e, n, t) => {
            e.exports = t.p + "7b9da5260fc65ad2b03add81090b16c0.mov"
        },
        191505: (e, n, t) => {
            e.exports = t.p + "fd394e078cb4a49bb746cd0badd68702.webm"
        },
        848823: (e, n, t) => {
            e.exports = t.p + "85774a9f7fb42ef4fc9f4731a89f391c.mov"
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
        308739: (e, n, t) => {
            "use strict";
            t.d(n, {
                R: () => O,
                Z: () => A
            });
            var r = t(785893),
                a = t(667294),
                s = t(202351),
                l = t(304548),
                o = t(873553),
                i = t(451936),
                u = t(382060),
                c = t(848285),
                d = t(722406),
                p = t(473903),
                f = t(750203),
                m = t(206986),
                _ = t(558820),
                E = t(211482),
                N = t(749565),
                h = t(2590),
                v = t(75025),
                g = t(718634),
                I = t(473708),
                b = t(256813),
                T = t.n(b),
                O = function() {
                    return (0, r.jsxs)(a.Fragment, {
                        children: [(0, r.jsx)(_.qE, {
                            src: null,
                            size: l.AvatarSizes.DEPRECATED_SIZE_100,
                            className: T().avatar
                        }), (0, r.jsx)(_.DK, {
                            children: I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
                        }), (0, r.jsx)(_.Dx, {
                            className: T().inviteResolvingGuildName,
                            children: I.Z.Messages.LOADING
                        })]
                    })
                },
                x = function(e) {
                    var n = e.guild,
                        t = e.user,
                        a = e.application,
                        s = e.compact;
                    return null != a ? (0, r.jsx)(f.Z, {
                        className: T().appIcon,
                        game: a,
                        size: T().appIconSize
                    }) : null != t ? (0, r.jsx)(_.qE, {
                        src: null != t ? t.getAvatarURL(void 0, 80) : null,
                        size: l.AvatarSizes.SIZE_80,
                        className: s ? T().compactAvatar : T().avatar
                    }) : null != n ? (0, r.jsx)(E.ZP, {
                        mask: E.ZP.Masks.SQUIRCLE,
                        width: 64,
                        height: 64,
                        className: T().guildIcon,
                        children: (0, r.jsx)(_.Vj, {
                            guild: n,
                            size: _.Vj.Sizes.LARGER,
                            animate: !0
                        })
                    }) : null
                };
            const A = function(e) {
                var n, t = e.invite,
                    a = e.disableUser,
                    f = void 0 !== a && a,
                    E = e.error,
                    b = e.flatActivityCount,
                    O = void 0 !== b && b,
                    A = e.isRegister,
                    S = void 0 !== A && A,
                    y = (0, s.cj)([o.Z, p.default], (function() {
                        return {
                            currentUser: p.default.getCurrentUser(),
                            multiAccounts: o.Z.getUsers()
                        }
                    })),
                    L = y.currentUser,
                    j = y.multiAccounts;
                if (null == t) return null;
                var M, R, P, D = null != t.guild ? new c.Z(t.guild) : null,
                    Z = null != t.channel ? (0, u.jD)(t.channel) : null,
                    C = null != t.target_application ? new i.Z(t.target_application) : null,
                    w = f || null == t.inviter ? null : new d.Z(t.inviter),
                    U = !(null != t.approximate_member_count && t.approximate_member_count > 100 || null != D && D.hasFeature(h.oNc.COMMUNITY)) && null != w,
                    F = null,
                    H = !1;
                if (null != D) {
                    F = null == w ? I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : I.Z.Messages.AUTH_MESSAGE_INVITED_BY.format({
                        username: N.ZP.getFormattedName(w)
                    });
                    t.target_type === g.Iq.STREAM && null != t.target_user && (F = I.Z.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                        username: N.ZP.getFormattedName(t.target_user)
                    }));
                    t.target_type === g.Iq.EMBEDDED_APPLICATION && null != t.target_application && (F = null != w ? I.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
                        username: N.ZP.getFormattedName(w)
                    }) : I.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY);
                    U && null == C && (M = (0, r.jsx)(_.Vj, {
                        className: T().icon,
                        guild: D,
                        size: _.Vj.Sizes.SMALL
                    }));
                    R = D.name;
                    if (null != C) {
                        R = C.name;
                        P = (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(_.DK, {
                                className: T().appIn,
                                children: I.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
                            }), (0, r.jsxs)("div", {
                                className: T().guildContainer,
                                children: [(0, r.jsx)(_.Vj, {
                                    guild: D,
                                    size: _.Vj.Sizes.SMALL
                                }), (0, r.jsx)(l.Text, {
                                    tag: "span",
                                    variant: "text-lg/normal",
                                    color: "header-primary",
                                    className: T().appGuildName,
                                    children: D.name
                                })]
                            })]
                        })
                    }
                } else if (null != Z) {
                    if (null == w) throw new Error("no inviter in group DM invite");
                    var V = N.ZP.getFormattedName(w);
                    if (null != Z.name && "" !== Z.name) {
                        F = I.Z.Messages.AUTH_MESSAGE_INVITED_BY.format({
                            username: V
                        });
                        R = Z.name;
                        null != Z.icon && (M = (0, r.jsx)(_.MC, {
                            channel: Z,
                            size: l.AvatarSizes.SIZE_32
                        }))
                    } else {
                        F = I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM;
                        R = V
                    }
                } else if (null != w) {
                    var k = N.ZP.getFormattedName(w, !0);
                    R = I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                        username: k
                    });
                    H = !0;
                    P = null != E ? null : (0, r.jsx)(_.DK, {
                        className: T().directInviteSubTitle,
                        children: S ? I.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
                            username: k
                        }) : I.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                            username: k
                        })
                    })
                }
                return (0, r.jsxs)("div", {
                    className: T().container,
                    children: [(0, r.jsx)(x, {
                        application: C,
                        guild: D,
                        user: U ? w : null,
                        compact: H
                    }), null != E ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(_.DK, {
                            children: I.Z.Messages.INVITE_MODAL_ERROR_TITLE
                        }), (0, r.jsx)(_.Dx, {
                            children: E
                        })]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(_.DK, {
                            children: F
                        }), (0, r.jsxs)(_.Dx, {
                            className: T().title,
                            children: [null != D ? (0, r.jsx)(m.Z, {
                                guild: D,
                                className: T().guildBadge,
                                tooltipPosition: "left"
                            }) : null, M, R]
                        })]
                    }), P, null != C || H || (null == t || null === (n = t.guild) || void 0 === n ? void 0 : n.id) === v.fQ ? null : (0,
                        r.jsx)(_.EJ, {
                        className: T().activityCount,
                        online: t.approximate_presence_count,
                        total: t.approximate_member_count,
                        flat: O
                    }), j.length > 1 ? (0, r.jsx)(_.jQ, {
                        user: L
                    }) : null]
                })
            }
        },
        845882: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => g
            });
            var r = t(131795),
                a = t.n(r),
                s = t(125333),
                l = t(58964),
                o = t(97245),
                i = t(285991),
                u = t(784426),
                c = t(664625),
                d = t(536038),
                p = t(652591),
                f = t(877815),
                m = t(2590);

            function _(e, n, t, r, a, s, l) {
                try {
                    var o = e[s](l),
                        i = o.value
                } catch (e) {
                    t(e);
                    return
                }
                o.done ? n(i) : Promise.resolve(i).then(r, a)
            }

            function E(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var s = e.apply(n, t);

                        function l(e) {
                            _(s, r, a, l, o, "next", e)
                        }

                        function o(e) {
                            _(s, r, a, l, o, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var N = function(e, n) {
                var t, r, a, s, l = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function o(s) {
                    return function(o) {
                        return function(s) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                                (r = 0, a) && (s = [2 & s[0], a.value]);
                                switch (s[0]) {
                                    case 0:
                                    case 1:
                                        a = s;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: s[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = s[1];
                                        s = [0];
                                        continue;
                                    case 7:
                                        s = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = l.trys, a = a.length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                            l.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && l.label < a[1]) {
                                            l.label = a[1];
                                            a = s;
                                            break
                                        }
                                        if (a && l.label < a[2]) {
                                            l.label = a[2];
                                            l.ops.push(s);
                                            break
                                        }
                                        a[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                s = n.call(e, l)
                            } catch (e) {
                                s = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, o])
                    }
                }
            };

            function h(e) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = E((function(e) {
                    var n, t, r, o, u;
                    return N(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                if ("Android" !== (t = null === (n = a().os) || void 0 === n ? void 0 : n.family) && "iOS" !== t) return [3, 5];
                                o = null !== (r = c.default.getFingerprint()) && void 0 !== r ? r : c.default.getId();
                                u = (0, l.WS)();
                                if (null != o || !c.default.isAuthenticated()) return [3, 4];
                                d.label = 1;
                            case 1:
                                d.trys.push([1, 3, , 4]);
                                return [4, (0, i.k)()];
                            case 2:
                                d.sent();
                                o = c.default.getId();
                                return [3, 4];
                            case 3:
                                d.sent();
                                return [3, 4];
                            case 4:
                                return [2, (0, l.ZP)((0, s.Gk)(), {
                                    utmSource: e,
                                    fingerprint: o,
                                    attemptId: u
                                })];
                            case 5:
                                return [2, "discord://"]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function g(e) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = E((function(e) {
                    var n, t;
                    return N(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, h(e)];
                            case 1:
                                n = r.sent();
                                null != (t = (0, l.zS)(n)) && p.default.track(m.rMx.DEEP_LINK_CLICKED, {
                                    fingerprint: (0, o.K)(t.fingerprint),
                                    attempt_id: t.attemptId,
                                    source: t.utmSource
                                });
                                f.Z.launch(n, (function(e) {
                                    e || (0, u.dL)(d.Z.fallbackRoute)
                                }));
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        193782: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => h
            });
            var r = t(730381),
                a = t.n(r),
                s = (0,
                    t(260561).B)({
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
            var l = t(555700),
                o = t.n(l),
                i = t(848823),
                u = t.n(i),
                c = t(473708),
                d = t(191505),
                p = t.n(d),
                f = t(208535),
                m = t.n(f),
                _ = a()("10/18/2023 10:00 -0700").valueOf(),
                E = a()("10/20/2023 10:00 -0700").valueOf(),
                N = a()("11/3/2023 10:00 -0700").valueOf();
            const h = {
                ringtone: {
                    name: "call_ringing_halloween",
                    filename: "call_ringing_halloween.mp3"
                },
                soundSettingsLabel: function() {
                    return c.Z.Messages.SOUND_INCOMING_RING_HALLOWEEN
                },
                subscribeToEligibility: function(e) {
                    return s.subscribe({
                        location: "subscribe"
                    }, e)
                },
                isEligible: function() {
                    return s.getCurrentConfig({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled
                },
                useIsEligible: function() {
                    return s.useExperiment({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled
                },
                getAppSpinnerSources: function() {
                    var e = Date.now();
                    if (!(e < _ || e > N)) return {
                        webmDark: p(),
                        webmLight: m(),
                        movDark: o(),
                        movLight: u()
                    }
                },
                getLoadingTips: function() {
                    var e = Date.now();
                    if (!(e < _ || e > N)) return "en-US" === c.Z.getLocale() || e >= E ? [c.Z.Messages.HALLOWEEN_LOADING_TEXT_1, c.Z.Messages.HALLOWEEN_LOADING_TEXT_2, c.Z.Messages.HALLOWEEN_LOADING_TEXT_3, c.Z.Messages.HALLOWEEN_LOADING_TEXT_4, c.Z.Messages.HALLOWEEN_LOADING_TEXT_5, c.Z.Messages.HALLOWEEN_LOADING_TEXT_6, c.Z.Messages.HALLOWEEN_LOADING_TEXT_7, c.Z.Messages.HALLOWEEN_LOADING_TEXT_8, c.Z.Messages.HALLOWEEN_LOADING_TEXT_9] : void 0
                }
            }
        },
        75025: (e, n, t) => {
            "use strict";
            t.d(n, {
                tF: () => r,
                fQ: () => a
            });
            var r;
            ! function(e) {
                e.STUDENT_PROMPT = "STUDENT_PROMPT";
                e.VERIFY_EMAIL = "VERIFY_EMAIL";
                e.VERIFY_PIN = "VERIFY_PIN";
                e.SELECT_SCHOOL = "SELECT_SCHOOL";
                e.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH";
                e.SUBMIT_SCHOOL = "SUBMIT_SCHOOL";
                e.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION";
                e.EMAIL_WAITLIST = "EMAIL_WAITLIST"
            }(r || (r = {}));
            var a = "884924873015689226"
        },
        426797: (e, n, t) => {
            "use strict";
            t.d(n, {
                L: () => h,
                Z: () => g
            });
            var r = t(571657),
                a = t(281110),
                s = t(744564),
                l = (0, t(260561).B)({
                    kind: "user",
                    id: "2023-02_mfa_remove_phone",
                    label: "Safety Experience MFA Remove Phone",
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
            const o = l;
            var i = t(664625),
                u = t(488110),
                c = t(391438),
                d = t(58118),
                p = t(2590),
                f = t(473708);

            function m(e, n, t, r, a, s, l) {
                try {
                    var o = e[s](l),
                        i = o.value
                } catch (e) {
                    t(e);
                    return
                }
                o.done ? n(i) : Promise.resolve(i).then(r, a)
            }

            function _(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var s = e.apply(n, t);

                        function l(e) {
                            m(s, r, a, l, o, "next", e)
                        }

                        function o(e) {
                            m(s, r, a, l, o, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function E(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function N(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        E(e, n, t[n])
                    }))
                }
                return e
            }
            var h, v = function(e, n) {
                var t, r, a, s, l = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function o(s) {
                    return function(o) {
                        return function(s) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                                (r = 0, a) && (s = [2 & s[0], a.value]);
                                switch (s[0]) {
                                    case 0:
                                    case 1:
                                        a = s;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: s[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = s[1];
                                        s = [0];
                                        continue;
                                    case 7:
                                        s = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = l.trys, a = a.length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                            l.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && l.label < a[1]) {
                                            l.label = a[1];
                                            a = s;
                                            break
                                        }
                                        if (a && l.label < a[2]) {
                                            l.label = a[2];
                                            l.ops.push(s);
                                            break
                                        }
                                        a[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                s = n.call(e, l)
                            } catch (e) {
                                s = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, o])
                    }
                }
            };
            ! function(e) {
                e.USER_ACTION_REQUIRED = "user_action_required";
                e.USER_SETTINGS_UPDATE = "user_settings_update";
                e.GUILD_PHONE_REQUIRED = "guild_phone_required";
                e.MFA_PHONE_UPDATE = "mfa_phone_update";
                e.CONTACT_SYNC = "contact_sync"
            }(h || (h = {}));
            const g = {
                setCountryCode: function(e) {
                    s.Z.dispatch({
                        type: "PHONE_SET_COUNTRY_CODE",
                        countryCode: e
                    })
                },
                removePhone: function(e, n) {
                    return o.getCurrentConfig({
                        location: "81427d_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled ? (0, u.Z)((function(t) {
                        return a.ZP.delete({
                            url: p.ANM.PHONE,
                            body: N({
                                password: e,
                                change_phone_reason: n
                            }, t),
                            oldFormErrors: !0
                        })
                    }), {
                        modalProps: {
                            title: f.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON,
                            actionText: f.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON
                        },
                        checkEnabled: !1
                    }) : a.ZP.delete({
                        url: p.ANM.PHONE,
                        body: {
                            password: e,
                            change_phone_reason: n
                        },
                        oldFormErrors: !0
                    })
                },
                resendCode: function(e) {
                    var n = {},
                        t = i.default.getFingerprint();
                    null != t && "" !== t && (n["X-Fingerprint"] = t);
                    return a.ZP.post({
                        url: p.ANM.RESEND_PHONE,
                        headers: n,
                        body: {
                            phone: e
                        }
                    })
                },
                beginAddPhone: function(e, n) {
                    return a.ZP.post({
                        url: p.ANM.PHONE,
                        body: {
                            phone: e,
                            change_phone_reason: n
                        }
                    })
                },
                addPhone: function(e, n, t) {
                    return a.ZP.post({
                        url: p.ANM.PHONE,
                        body: {
                            phone_token: e,
                            password: n,
                            change_phone_reason: t
                        },
                        oldFormErrors: !0
                    })
                },
                addPhoneWithoutPassword: function(e) {
                    return a.ZP.post({
                        url: p.ANM.PHONE_VERIFY_NO_PASSWORD,
                        body: {
                            code: e
                        }
                    })
                },
                beginReverifyPhone: function(e, n) {
                    return a.ZP.post({
                        url: p.ANM.PHONE_REVERIFY,
                        body: {
                            phone: e,
                            change_phone_reason: n
                        }
                    })
                },
                reverifyPhone: function(e, n, t) {
                    return a.ZP.post({
                        url: p.ANM.PHONE_REVERIFY,
                        body: {
                            phone_token: e,
                            password: n,
                            change_phone_reason: t
                        },
                        oldFormErrors: !0
                    })
                },
                validatePhoneForSupport: function(e) {
                    return a.ZP.post({
                        url: p.ANM.VERIFY_PHONE_FOR_TICKET,
                        body: {
                            token: e
                        },
                        oldFormErrors: !0
                    })
                },
                verifyPhone: function(e, n) {
                    var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return _((function() {
                        var l, o, u;
                        return v(this, (function(f) {
                            switch (f.label) {
                                case 0:
                                    l = {};
                                    null != (o = i.default.getFingerprint()) && "" !== o && (l["X-Fingerprint"] = o);
                                    a && (l.authorization = "");
                                    return [4, c.Z.post({
                                        url: p.ANM.VERIFY_PHONE,
                                        headers: l,
                                        body: {
                                            phone: e,
                                            code: n
                                        },
                                        oldFormErrors: !0,
                                        trackedActionData: {
                                            event: r.a9.USER_VERIFY_PHONE
                                        }
                                    })];
                                case 1:
                                    u = f.sent();
                                    t && s.Z.dispatch({
                                        type: "MODAL_POP",
                                        key: d.M
                                    });
                                    return [2, u.body]
                            }
                        }))
                    }))()
                }
            }
        },
        58118: (e, n, t) => {
            "use strict";
            t.d(n, {
                M: () => r,
                z: () => a
            });
            var r = "PHONE_VERIFICATION_MODAL_KEY",
                a = 6
        },
        558820: (e, n, t) => {
            "use strict";
            t.d(n, {
                Dx: () => b,
                DK: () => T,
                Ee: () => O,
                zx: () => x,
                qE: () => A,
                Vj: () => S,
                MC: () => y,
                II: () => L,
                gO: () => j,
                i_: () => M,
                Hh: () => R,
                EJ: () => P,
                jQ: () => D,
                v6: () => Z,
                ZP: () => C
            });
            var r = t(785893),
                a = (t(667294), t(294184)),
                s = t.n(a),
                l = t(304548),
                o = t(621647),
                i = t(107364),
                u = t(124251),
                c = t(443812),
                d = t(408481),
                p = t(646161),
                f = t(348592),
                m = t(463473),
                _ = t(2590),
                E = t(473708),
                N = t(385994),
                h = t.n(N);

            function v(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function g(e, n) {
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
            var I = l.Avatar;
            null == I && (I = function() {
                return null
            });
            var b = function(e) {
                    var n = e.className,
                        t = e.id,
                        a = e.children;
                    return (0, r.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: s()(h().title, n),
                        id: t,
                        children: a
                    })
                },
                T = function(e) {
                    var n = e.className,
                        t = e.children;
                    return (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: n,
                        children: t
                    })
                },
                O = function(e) {
                    var n = e.className,
                        t = e.src;
                    return (0, r.jsx)("img", {
                        alt: "",
                        src: t,
                        className: s()(h().image, n)
                    })
                },
                x = function(e) {
                    var n, t = e.className,
                        a = g(e, ["className"]),
                        o = a.look === l.Button.Looks.LINK;
                    return (0, r.jsx)(l.Button, function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))));
                            r.forEach((function(n) {
                                v(e, n, t[n])
                            }))
                        }
                        return e
                    }({
                        size: o ? l.Button.Sizes.MIN : l.Button.Sizes.LARGE,
                        fullWidth: !o,
                        className: s()(t, (n = {}, v(n, h().button, !o), v(n, h().linkButton, o), n))
                    }, a))
                };
            x.Looks = l.Button.Looks;
            x.Colors = l.Button.Colors;
            x.Sizes = l.Button.Sizes;
            var A = function(e) {
                    var n = e.className,
                        t = e.src,
                        a = e.size;
                    return (0, r.jsx)(I, {
                        src: t,
                        size: a,
                        className: s()(h().inviteLargeIcon, n),
                        "aria-hidden": !0
                    })
                },
                S = function(e) {
                    var n = e.guild,
                        t = e.size,
                        a = e.animate,
                        s = void 0 !== a && a,
                        l = e.className;
                    return (0, r.jsx)(u.Z, {
                        active: !0,
                        guild: n,
                        size: t,
                        animate: s,
                        className: l
                    })
                };
            S.Sizes = u.Z.Sizes;
            var y = function(e) {
                var n = e.className,
                    t = e.channel,
                    a = e.size;
                return (0, r.jsx)(I, {
                    src: (0, o.x)(t),
                    size: a,
                    className: s()(h().inviteIcon, n),
                    "aria-hidden": !0
                })
            };
            y.Sizes = l.AvatarSizes;
            var L = function(e) {
                    var n = e.label,
                        t = e.error,
                        a = e.placeholder,
                        o = e.value,
                        i = e.className,
                        u = e.inputClassName,
                        d = e.setRef,
                        p = e.type,
                        f = void 0 === p ? "text" : p,
                        m = e.onChange,
                        _ = e.autoComplete,
                        E = e.autoFocus,
                        N = e.maxLength,
                        g = e.spellCheck,
                        I = e.name,
                        b = e.description,
                        T = e.required,
                        O = e.onFocus,
                        x = e.onBlur,
                        A = (0, c.Dt)();
                    return (0, r.jsxs)(l.FormItem, {
                        title: n,
                        error: t,
                        className: i,
                        required: T,
                        tag: "label",
                        htmlFor: A,
                        children: [(0, r.jsx)(l.TextInput, {
                            name: I,
                            type: f,
                            value: o,
                            inputRef: d,
                            placeholder: a,
                            inputClassName: s()(u, v({}, h().inputError, null != t)),
                            "aria-label": n,
                            onChange: m,
                            autoComplete: _,
                            autoFocus: E,
                            maxLength: N,
                            spellCheck: g,
                            id: A,
                            onFocus: O,
                            onBlur: x
                        }), null != b ? (0, r.jsx)(l.FormText, {
                            type: l.FormText.Types.DESCRIPTION,
                            className: h().description,
                            children: b
                        }) : null]
                    })
                },
                j = function(e) {
                    var n = e.className,
                        t = e.children;
                    return (0, r.jsx)("div", {
                        className: s()(h().block, n),
                        children: t
                    })
                },
                M = function(e) {
                    var n = e.className,
                        t = e.children,
                        a = e.isProminent;
                    return (0, r.jsx)(l.Text, {
                        variant: a ? "text-sm/normal" : "text-xs/normal",
                        className: s()(h().subText, n),
                        children: t
                    })
                },
                R = function(e) {
                    var n = e.className;
                    return (0, r.jsx)(i.Z, {
                        direction: i.Z.Direction.VERTICAL,
                        align: i.Z.Align.CENTER,
                        className: n,
                        children: (0, r.jsx)(d.Z, {
                            className: h().spinnerVideo
                        })
                    })
                },
                P = function(e) {
                    var n, t = e.online,
                        a = e.total,
                        o = e.className,
                        u = e.flat,
                        c = e.textClassName;
                    if (null == a) return null;
                    null != t && t > 0 && (n = (0, r.jsxs)("div", {
                        className: s()(h().pill, h().pillOnline, u && h().pillFlat),
                        children: [(0, r.jsx)("i", {
                            className: h().pillIconOnline
                        }), (0, r.jsx)(l.Text, {
                            tag: "span",
                            className: s()(h().pillMessage, c),
                            variant: "text-sm/normal",
                            children: E.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: t
                            })
                        })]
                    }));
                    return (0, r.jsxs)(i.Z, {
                        justify: i.Z.Justify.CENTER,
                        className: o,
                        children: [n, (0, r.jsxs)("div", {
                            className: s()(h().pill, u && h().pillFlat),
                            children: [(0, r.jsx)("i", {
                                className: h().pillIconTotal
                            }), (0, r.jsx)(l.Text, {
                                tag: "span",
                                className: s()(h().pillMessage, c),
                                variant: "text-sm/normal",
                                children: E.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                    count: a
                                })
                            })]
                        })]
                    })
                },
                D = function(e) {
                    var n = e.user;
                    return null == n ? null : (0, r.jsxs)("div", {
                        className: h().joiningAs,
                        children: [(0, r.jsx)(l.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: E.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                        }), (0, r.jsx)(A, {
                            className: h().joiningAsAvatar,
                            src: n.getAvatarURL(void 0, 24),
                            size: l.AvatarSizes.SIZE_24,
                            "aria-label": n.username
                        }), (0, r.jsx)(l.Text, {
                            className: h().joiningAsUsername,
                            tag: "span",
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: n.username
                        })]
                    })
                },
                Z = function(e) {
                    var n = e.className;
                    return (0, r.jsxs)(j, {
                        className: n,
                        children: [(0, r.jsx)(x, {
                            onClick: function() {
                                return window.open((0, p.t3)())
                            },
                            children: E.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                                platform: (0, p.DW)()
                            })
                        }), (0, r.jsx)(M, {
                            className: h().downloadButtonSubtext,
                            children: E.Z.Messages.INCOMPATIBLE_BROWSER.format({
                                supportedBrowserURL: f.Z.getArticleURL(_.BhN.SUPPORTED_BROWSERS)
                            })
                        })]
                    })
                };
            const C = function(e) {
                var n = e.className,
                    t = e.contentClassName,
                    a = e.tag,
                    l = void 0 === a ? "section" : a,
                    o = e.onSubmit,
                    i = e.children,
                    u = e.expanded,
                    c = void 0 !== u && u,
                    d = e.theme,
                    p = void 0 === d ? _.BRd.DARK : d,
                    f = e.style;
                return (0, r.jsxs)(l, {
                    onSubmit: o,
                    style: f,
                    className: s()(c ? h().authBoxExpanded : h().authBox, (0, m.Q)(p), n),
                    children: [(0, r.jsx)("div", {
                        className: h().discordLogo
                    }), (0, r.jsx)("div", {
                        className: s()(h().centeringWrapper, t),
                        children: i
                    })]
                })
            }
        },
        408481: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => P
            });
            var r, a = t(785893),
                s = t(667294),
                l = t(575945),
                o = t(304548),
                i = t(193782),
                u = t(245305),
                c = t(745920),
                d = t.n(c),
                p = t(894919),
                f = t.n(p),
                m = t(786170),
                _ = t(2590),
                E = t(161693),
                N = t.n(E),
                h = t(28743),
                v = t.n(h),
                g = t(106632),
                I = t.n(g),
                b = t(858739),
                T = t.n(b),
                O = t(172129),
                x = t.n(O),
                A = t(243874),
                S = t.n(A);

            function y(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function L(e) {
                var n, t = e.movDark,
                    r = void 0 === t ? d() : t,
                    s = e.movLight,
                    l = void 0 === s ? f() : s,
                    o = e.mp4Dark,
                    i = void 0 === o ? N() : o,
                    c = e.mp4Light,
                    p = void 0 === c ? T() : c,
                    m = e.pngDark,
                    E = void 0 === m ? v() : m,
                    h = e.pngLight,
                    g = void 0 === h ? x() : h,
                    b = e.webmDark,
                    O = void 0 === b ? I() : b,
                    A = e.webmLight,
                    L = void 0 === A ? S() : A,
                    j = (0, u.vu)(),
                    M = [(0, a.jsx)("source", {
                        src: i,
                        type: "video/mp4"
                    }, "mp4"), (0, a.jsx)("img", {
                        alt: "",
                        src: E
                    }, "png")],
                    R = [(0, a.jsx)("source", {
                        src: p,
                        type: "video/mp4"
                    }, "mp4"), (0, a.jsx)("img", {
                        alt: "",
                        src: g
                    }, "png")];
                if (j > 52 || -1 === j) {
                    M.unshift((0, a.jsx)("source", {
                        src: O,
                        type: "video/webm"
                    }, "webm"));
                    R.unshift((0, a.jsx)("source", {
                        src: L,
                        type: "video/webm"
                    }, "webm"))
                }
                if ((0, u.rO)()) {
                    M.unshift((0, a.jsx)("source", {
                        src: r,
                        type: "video/mp4"
                    }, "hevc"));
                    R.unshift((0, a.jsx)("source", {
                        src: l,
                        type: "video/mp4"
                    }, "hevc"))
                }
                return y(n = {}, _.BRd.DARK, M), y(n, _.BRd.LIGHT, R), n
            }
            var j = null === (r = i.Z.getAppSpinnerSources) || void 0 === r ? void 0 : r.call(i.Z),
                M = null != j ? L(j) : null,
                R = L({});
            const P = function(e) {
                var n = e.loop,
                    t = void 0 === n || n,
                    r = e.autoPlay,
                    i = void 0 === r || r,
                    u = e.setRef,
                    c = e.className,
                    d = e.onReady,
                    p = (0, o.useThemeContext)().theme,
                    f = s.useContext(o.AccessibilityPreferencesContext).reducedMotion,
                    E = R;
                null != M && (E = M);
                var N, h = null !== (N = E[(0, l.wj)(p) ? _.BRd.DARK : _.BRd.LIGHT]) && void 0 !== N ? N : E[_.BRd.DARK];
                return (0, a.jsx)(m.Z, {
                    ref: u,
                    onLoadedData: d,
                    className: c,
                    loop: !f.enabled && t,
                    autoPlay: !f.enabled && i,
                    playsInline: !0,
                    "data-testid": "app-spinner",
                    children: h
                }, p)
            }
        }
    }
]);