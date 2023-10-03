(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [76192], {
        55146: (e, n, t) => {
            e.exports = t.p + "608f64b01193073a0148ebd815d86784.webm"
        },
        485618: (e, n, t) => {
            e.exports = t.p + "ac85024be0ac6a35c59ceff448502169.webm"
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
        665369: (e, n, t) => {
            e.exports = t.p + "214ec30d4b1191df4e04a35063e5d9e6.mov"
        },
        537020: (e, n, t) => {
            e.exports = t.p + "56dfe2d14c375037f02ae2144856c939.webm"
        },
        978476: (e, n, t) => {
            e.exports = t.p + "98808f8535c2ac6947658982e27e6e1e.mov"
        },
        88070: (e, n, t) => {
            e.exports = t.p + "49b63c2ef79b40545d891bde041934b4.webm"
        },
        308739: (e, n, t) => {
            "use strict";
            t.d(n, {
                R: () => T,
                Z: () => S
            });
            var r = t(785893),
                a = t(667294),
                s = t(202351),
                o = t(304548),
                l = t(873553),
                i = t(451936),
                u = t(382060),
                c = t(848285),
                d = t(722406),
                p = t(473903),
                m = t(750203),
                f = t(206986),
                _ = t(558820),
                E = t(211482),
                N = t(749565),
                h = t(2590),
                v = t(75025),
                g = t(718634),
                I = t(473708),
                b = t(256813),
                x = t.n(b),
                T = function() {
                    return (0, r.jsxs)(a.Fragment, {
                        children: [(0, r.jsx)(_.qE, {
                            src: null,
                            size: o.AvatarSizes.DEPRECATED_SIZE_100,
                            className: x().avatar
                        }), (0, r.jsx)(_.DK, {
                            children: I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
                        }), (0, r.jsx)(_.Dx, {
                            className: x().inviteResolvingGuildName,
                            children: I.Z.Messages.LOADING
                        })]
                    })
                },
                O = function(e) {
                    var n = e.guild,
                        t = e.user,
                        a = e.application,
                        s = e.compact;
                    return null != a ? (0, r.jsx)(m.Z, {
                        className: x().appIcon,
                        game: a,
                        size: x().appIconSize
                    }) : null != t ? (0, r.jsx)(_.qE, {
                        src: null != t ? t.getAvatarURL(void 0, 80) : null,
                        size: o.AvatarSizes.SIZE_80,
                        className: s ? x().compactAvatar : x().avatar
                    }) : null != n ? (0, r.jsx)(E.ZP, {
                        mask: E.ZP.Masks.SQUIRCLE,
                        width: 64,
                        height: 64,
                        className: x().guildIcon,
                        children: (0, r.jsx)(_.Vj, {
                            guild: n,
                            size: _.Vj.Sizes.LARGER,
                            animate: !0
                        })
                    }) : null
                };
            const S = function(e) {
                var n, t = e.invite,
                    a = e.disableUser,
                    m = void 0 !== a && a,
                    E = e.error,
                    b = e.flatActivityCount,
                    T = void 0 !== b && b,
                    S = e.isRegister,
                    A = void 0 !== S && S,
                    y = (0, s.cj)([l.Z, p.default], (function() {
                        return {
                            currentUser: p.default.getCurrentUser(),
                            multiAccounts: l.Z.getUsers()
                        }
                    })),
                    j = y.currentUser,
                    R = y.multiAccounts;
                if (null == t) return null;
                var P, M, D, C = null != t.guild ? new c.Z(t.guild) : null,
                    Z = null != t.channel ? (0, u.jD)(t.channel) : null,
                    L = null != t.target_application ? new i.Z(t.target_application) : null,
                    w = m || null == t.inviter ? null : new d.Z(t.inviter),
                    F = !(null != t.approximate_member_count && t.approximate_member_count > 100 || null != C && C.hasFeature(h.oNc.COMMUNITY)) && null != w,
                    U = null,
                    V = !1;
                if (null != C) {
                    U = null == w ? I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : I.Z.Messages.AUTH_MESSAGE_INVITED_BY.format({
                        username: N.ZP.getFormattedName(w)
                    });
                    t.target_type === g.Iq.STREAM && null != t.target_user && (U = I.Z.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                        username: N.ZP.getFormattedName(t.target_user)
                    }));
                    t.target_type === g.Iq.EMBEDDED_APPLICATION && null != t.target_application && (U = null != w ? I.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
                        username: N.ZP.getFormattedName(w)
                    }) : I.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY);
                    F && null == L && (P = (0, r.jsx)(_.Vj, {
                        className: x().icon,
                        guild: C,
                        size: _.Vj.Sizes.SMALL
                    }));
                    M = C.name;
                    if (null != L) {
                        M = L.name;
                        D = (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(_.DK, {
                                className: x().appIn,
                                children: I.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
                            }), (0, r.jsxs)("div", {
                                className: x().guildContainer,
                                children: [(0, r.jsx)(_.Vj, {
                                    guild: C,
                                    size: _.Vj.Sizes.SMALL
                                }), (0, r.jsx)(o.Text, {
                                    tag: "span",
                                    variant: "text-lg/normal",
                                    color: "header-primary",
                                    className: x().appGuildName,
                                    children: C.name
                                })]
                            })]
                        })
                    }
                } else if (null != Z) {
                    if (null == w) throw new Error("no inviter in group DM invite");
                    var k = N.ZP.getFormattedName(w);
                    if (null != Z.name && "" !== Z.name) {
                        U = I.Z.Messages.AUTH_MESSAGE_INVITED_BY.format({
                            username: k
                        });
                        M = Z.name;
                        null != Z.icon && (P = (0, r.jsx)(_.MC, {
                            channel: Z,
                            size: o.AvatarSizes.SIZE_32
                        }))
                    } else {
                        U = I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM;
                        M = k
                    }
                } else if (null != w) {
                    var B = N.ZP.getFormattedName(w, !0);
                    M = I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                        username: B
                    });
                    V = !0;
                    D = null != E ? null : (0, r.jsx)(_.DK, {
                        className: x().directInviteSubTitle,
                        children: A ? I.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
                            username: B
                        }) : I.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                            username: B
                        })
                    })
                }
                return (0, r.jsxs)("div", {
                    className: x().container,
                    children: [(0, r.jsx)(O, {
                        application: L,
                        guild: C,
                        user: F ? w : null,
                        compact: V
                    }), null != E ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(_.DK, {
                            children: I.Z.Messages.INVITE_MODAL_ERROR_TITLE
                        }), (0, r.jsx)(_.Dx, {
                            children: E
                        })]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(_.DK, {
                            children: U
                        }), (0, r.jsxs)(_.Dx, {
                            className: x().title,
                            children: [null != C ? (0, r.jsx)(f.Z, {
                                guild: C,
                                className: x().guildBadge,
                                tooltipPosition: "left"
                            }) : null, P, M]
                        })]
                    }), D, null != L || V || (null == t || null === (n = t.guild) || void 0 === n ? void 0 : n.id) === v.fQ ? null : (0, r.jsx)(_.EJ, {
                        className: x().activityCount,
                        online: t.approximate_presence_count,
                        total: t.approximate_member_count,
                        flat: T
                    }), R.length > 1 ? (0, r.jsx)(_.jQ, {
                        user: j
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
                o = t(58964),
                l = t(97245),
                i = t(285991),
                u = t(784426),
                c = t(664625),
                d = t(536038),
                p = t(652591),
                m = t(877815),
                f = t(2590);

            function _(e, n, t, r, a, s, o) {
                try {
                    var l = e[s](o),
                        i = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(i) : Promise.resolve(i).then(r, a)
            }

            function E(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var s = e.apply(n, t);

                        function o(e) {
                            _(s, r, a, o, l, "next", e)
                        }

                        function l(e) {
                            _(s, r, a, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            var N = function(e, n) {
                var t, r, a, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function l(s) {
                    return function(l) {
                        return function(s) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                                (r = 0, a) && (s = [2 & s[0], a.value]);
                                switch (s[0]) {
                                    case 0:
                                    case 1:
                                        a = s;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: s[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = s[1];
                                        s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = s;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(s);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                s = n.call(e, o)
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
                        }([s, l])
                    }
                }
            };

            function h(e) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = E((function(e) {
                    var n, t, r, l, u;
                    return N(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                if ("Android" !== (t = null === (n = a().os) || void 0 === n ? void 0 : n.family) && "iOS" !== t) return [3, 5];
                                l = null !== (r = c.default.getFingerprint()) && void 0 !== r ? r : c.default.getId();
                                u = (0, o.WS)();
                                if (null != l || !c.default.isAuthenticated()) return [3, 4];
                                d.label = 1;
                            case 1:
                                d.trys.push([1, 3, , 4]);
                                return [4, (0, i.k)()];
                            case 2:
                                d.sent();
                                l = c.default.getId();
                                return [3, 4];
                            case 3:
                                d.sent();
                                return [3, 4];
                            case 4:
                                return [2, (0, o.ZP)((0, s.Gk)(), {
                                    utmSource: e,
                                    fingerprint: l,
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
                                null != (t = (0, o.zS)(n)) && p.default.track(f.rMx.DEEP_LINK_CLICKED, {
                                    fingerprint: (0, l.K)(t.fingerprint),
                                    attempt_id: t.attemptId,
                                    source: t.utmSource
                                });
                                m.Z.launch(n, (function(e) {
                                    e || (0, u.dL)(d.Z.fallbackRoute)
                                }));
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
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
                o = (0, t(260561).B)({
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
            const l = o;
            var i = t(664625),
                u = t(488110),
                c = t(391438),
                d = t(58118),
                p = t(2590),
                m = t(473708);

            function f(e, n, t, r, a, s, o) {
                try {
                    var l = e[s](o),
                        i = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(i) : Promise.resolve(i).then(r, a)
            }

            function _(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var s = e.apply(n, t);

                        function o(e) {
                            f(s, r, a, o, l, "next", e)
                        }

                        function l(e) {
                            f(s, r, a, o, l, "throw", e)
                        }
                        o(void 0)
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
                var t, r, a, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function l(s) {
                    return function(l) {
                        return function(s) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r),
                                        0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                                (r = 0, a) && (s = [2 & s[0], a.value]);
                                switch (s[0]) {
                                    case 0:
                                    case 1:
                                        a = s;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: s[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = s[1];
                                        s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = s;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(s);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                s = n.call(e, o)
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
                        }([s, l])
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
                    return l.getCurrentConfig({
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
                            title: m.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON,
                            actionText: m.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON
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
                        var o, l, u;
                        return v(this, (function(m) {
                            switch (m.label) {
                                case 0:
                                    o = {};
                                    null != (l = i.default.getFingerprint()) && "" !== l && (o["X-Fingerprint"] = l);
                                    a && (o.authorization = "");
                                    return [4, c.Z.post({
                                        url: p.ANM.VERIFY_PHONE,
                                        headers: o,
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
                                    u = m.sent();
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
                DK: () => x,
                Ee: () => T,
                zx: () => O,
                qE: () => S,
                Vj: () => A,
                MC: () => y,
                II: () => j,
                gO: () => R,
                i_: () => P,
                Hh: () => M,
                EJ: () => D,
                jQ: () => C,
                v6: () => Z,
                ZP: () => L
            });
            var r = t(785893),
                a = (t(667294), t(294184)),
                s = t.n(a),
                o = t(304548),
                l = t(621647),
                i = t(107364),
                u = t(124251),
                c = t(443812),
                d = t(408481),
                p = t(646161),
                m = t(348592),
                f = t(463473),
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
            var I = o.Avatar;
            null == I && (I = function() {
                return null
            });
            var b = function(e) {
                    var n = e.className,
                        t = e.id,
                        a = e.children;
                    return (0, r.jsx)(o.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: s()(h().title, n),
                        id: t,
                        children: a
                    })
                },
                x = function(e) {
                    var n = e.className,
                        t = e.children;
                    return (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: n,
                        children: t
                    })
                },
                T = function(e) {
                    var n = e.className,
                        t = e.src;
                    return (0, r.jsx)("img", {
                        alt: "",
                        src: t,
                        className: s()(h().image, n)
                    })
                },
                O = function(e) {
                    var n, t = e.className,
                        a = g(e, ["className"]),
                        l = a.look === o.Button.Looks.LINK;
                    return (0, r.jsx)(o.Button, function(e) {
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
                        size: l ? o.Button.Sizes.MIN : o.Button.Sizes.LARGE,
                        fullWidth: !l,
                        className: s()(t, (n = {}, v(n, h().button, !l), v(n, h().linkButton, l), n))
                    }, a))
                };
            O.Looks = o.Button.Looks;
            O.Colors = o.Button.Colors;
            O.Sizes = o.Button.Sizes;
            var S = function(e) {
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
                A = function(e) {
                    var n = e.guild,
                        t = e.size,
                        a = e.animate,
                        s = void 0 !== a && a,
                        o = e.className;
                    return (0, r.jsx)(u.Z, {
                        active: !0,
                        guild: n,
                        size: t,
                        animate: s,
                        className: o
                    })
                };
            A.Sizes = u.Z.Sizes;
            var y = function(e) {
                var n = e.className,
                    t = e.channel,
                    a = e.size;
                return (0, r.jsx)(I, {
                    src: (0, l.x)(t),
                    size: a,
                    className: s()(h().inviteIcon, n),
                    "aria-hidden": !0
                })
            };
            y.Sizes = o.AvatarSizes;
            var j = function(e) {
                    var n = e.label,
                        t = e.error,
                        a = e.placeholder,
                        l = e.value,
                        i = e.className,
                        u = e.inputClassName,
                        d = e.setRef,
                        p = e.type,
                        m = void 0 === p ? "text" : p,
                        f = e.onChange,
                        _ = e.autoComplete,
                        E = e.autoFocus,
                        N = e.maxLength,
                        g = e.spellCheck,
                        I = e.name,
                        b = e.description,
                        x = e.required,
                        T = e.onFocus,
                        O = e.onBlur,
                        S = (0, c.Dt)();
                    return (0, r.jsxs)(o.FormItem, {
                        title: n,
                        error: t,
                        className: i,
                        required: x,
                        tag: "label",
                        htmlFor: S,
                        children: [(0, r.jsx)(o.TextInput, {
                            name: I,
                            type: m,
                            value: l,
                            inputRef: d,
                            placeholder: a,
                            inputClassName: s()(u, v({}, h().inputError, null != t)),
                            "aria-label": n,
                            onChange: f,
                            autoComplete: _,
                            autoFocus: E,
                            maxLength: N,
                            spellCheck: g,
                            id: S,
                            onFocus: T,
                            onBlur: O
                        }), null != b ? (0, r.jsx)(o.FormText, {
                            type: o.FormText.Types.DESCRIPTION,
                            className: h().description,
                            children: b
                        }) : null]
                    })
                },
                R = function(e) {
                    var n = e.className,
                        t = e.children;
                    return (0, r.jsx)("div", {
                        className: s()(h().block, n),
                        children: t
                    })
                },
                P = function(e) {
                    var n = e.className,
                        t = e.children,
                        a = e.isProminent;
                    return (0, r.jsx)(o.Text, {
                        variant: a ? "text-sm/normal" : "text-xs/normal",
                        className: s()(h().subText, n),
                        children: t
                    })
                },
                M = function(e) {
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
                D = function(e) {
                    var n, t = e.online,
                        a = e.total,
                        l = e.className,
                        u = e.flat,
                        c = e.textClassName;
                    if (null == a) return null;
                    null != t && t > 0 && (n = (0, r.jsxs)("div", {
                        className: s()(h().pill, h().pillOnline, u && h().pillFlat),
                        children: [(0, r.jsx)("i", {
                            className: h().pillIconOnline
                        }), (0,
                            r.jsx)(o.Text, {
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
                        className: l,
                        children: [n, (0, r.jsxs)("div", {
                            className: s()(h().pill, u && h().pillFlat),
                            children: [(0, r.jsx)("i", {
                                className: h().pillIconTotal
                            }), (0, r.jsx)(o.Text, {
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
                C = function(e) {
                    var n = e.user;
                    return null == n ? null : (0, r.jsxs)("div", {
                        className: h().joiningAs,
                        children: [(0, r.jsx)(o.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: E.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                        }), (0, r.jsx)(S, {
                            className: h().joiningAsAvatar,
                            src: n.getAvatarURL(void 0, 24),
                            size: o.AvatarSizes.SIZE_24,
                            "aria-label": n.username
                        }), (0, r.jsx)(o.Text, {
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
                    return (0, r.jsxs)(R, {
                        className: n,
                        children: [(0, r.jsx)(O, {
                            onClick: function() {
                                return window.open((0, p.t3)())
                            },
                            children: E.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                                platform: (0, p.DW)()
                            })
                        }), (0, r.jsx)(P, {
                            className: h().downloadButtonSubtext,
                            children: E.Z.Messages.INCOMPATIBLE_BROWSER.format({
                                supportedBrowserURL: m.Z.getArticleURL(_.BhN.SUPPORTED_BROWSERS)
                            })
                        })]
                    })
                };
            const L = function(e) {
                var n = e.className,
                    t = e.contentClassName,
                    a = e.tag,
                    o = void 0 === a ? "section" : a,
                    l = e.onSubmit,
                    i = e.children,
                    u = e.expanded,
                    c = void 0 !== u && u,
                    d = e.theme,
                    p = void 0 === d ? _.BRd.DARK : d,
                    m = e.style;
                return (0, r.jsxs)(o, {
                    onSubmit: l,
                    style: m,
                    className: s()(c ? h().authBoxExpanded : h().authBox, (0, f.Q)(p), n),
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
                Z: () => q
            });
            var r = t(785893),
                a = t(667294),
                s = t(730381),
                o = t.n(s),
                l = t(575945),
                i = t(304548),
                u = t(245305),
                c = t(745920),
                d = t.n(c),
                p = t(894919),
                m = t.n(p),
                f = t(665369),
                _ = t.n(f),
                E = t(978476),
                N = t.n(E),
                h = t(786170),
                v = t(2590),
                g = t(55146),
                I = t.n(g),
                b = t(485618),
                x = t.n(b),
                T = t(161693),
                O = t.n(T),
                S = t(28743),
                A = t.n(S),
                y = t(106632),
                j = t.n(y),
                R = t(858739),
                P = t.n(R),
                M = t(172129),
                D = t.n(M),
                C = t(243874),
                Z = t.n(C),
                L = t(537020),
                w = t.n(L),
                F = t(88070),
                U = t.n(F);

            function V(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function k(e) {
                var n, t = e.movDark,
                    a = void 0 === t ? d() : t,
                    s = e.movLight,
                    o = void 0 === s ? m() : s,
                    l = e.mp4Dark,
                    i = void 0 === l ? O() : l,
                    c = e.mp4Light,
                    p = void 0 === c ? P() : c,
                    f = e.pngDark,
                    _ = void 0 === f ? A() : f,
                    E = e.pngLight,
                    N = void 0 === E ? D() : E,
                    h = e.webmDark,
                    g = void 0 === h ? j() : h,
                    I = e.webmLight,
                    b = void 0 === I ? Z() : I,
                    x = (0, u.vu)(),
                    T = [(0, r.jsx)("source", {
                        src: i,
                        type: "video/mp4"
                    }, "mp4"), (0, r.jsx)("img", {
                        alt: "",
                        src: _
                    }, "png")],
                    S = [(0, r.jsx)("source", {
                        src: p,
                        type: "video/mp4"
                    }, "mp4"), (0, r.jsx)("img", {
                        alt: "",
                        src: N
                    }, "png")];
                if (x > 52 || -1 === x) {
                    T.unshift((0, r.jsx)("source", {
                        src: g,
                        type: "video/webm"
                    }, "webm"));
                    S.unshift((0, r.jsx)("source", {
                        src: b,
                        type: "video/webm"
                    }, "webm"))
                }
                if ((0, u.rO)()) {
                    T.unshift((0, r.jsx)("source", {
                        src: a,
                        type: "video/mp4"
                    }, "hevc"));
                    S.unshift((0, r.jsx)("source", {
                        src: o,
                        type: "video/mp4"
                    }, "hevc"))
                }
                return V(n = {}, v.BRd.DARK, T), V(n, v.BRd.LIGHT, S), n
            }
            var B = o()("5/13/2022 10:00 -0800").valueOf(),
                H = o()("5/16/2022 17:00 -0800").valueOf(),
                z = k({
                    webmDark: I(),
                    webmLight: x()
                }),
                G = o()("10/24/2022 08:00 -0800").valueOf(),
                Y = o()("11/3/2022 11:00 -0800").valueOf(),
                K = k({
                    webmDark: w(),
                    webmLight: U(),
                    movDark: _(),
                    movLight: N()
                }),
                W = k({});
            const q = function(e) {
                var n = e.loop,
                    t = void 0 === n || n,
                    s = e.autoPlay,
                    o = void 0 === s || s,
                    u = e.setRef,
                    c = e.className,
                    d = e.onReady,
                    p = (0, i.useThemeContext)().theme,
                    m = a.useContext(i.AccessibilityPreferencesContext).reducedMotion,
                    f = Date.now(),
                    _ = W;
                f >= B && f <= H ? _ = z : f >= G && f <= Y && (_ = K);
                var E, N = null !== (E = _[(0, l.wj)(p) ? v.BRd.DARK : v.BRd.LIGHT]) && void 0 !== E ? E : _[v.BRd.DARK];
                return (0, r.jsx)(h.Z, {
                    ref: u,
                    onLoadedData: d,
                    className: c,
                    loop: !m.enabled && t,
                    autoPlay: !m.enabled && o,
                    playsInline: !0,
                    "data-testid": "app-spinner",
                    children: N
                }, p)
            }
        }
    }
]);