"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [46559], {
        146559: (e, r, t) => {
            t.r(r);
            t.d(r, {
                default: () => C
            });
            var n = t(785893),
                o = t(667294),
                a = t(571657),
                i = t(304548),
                s = t(735885),
                l = t(657539),
                c = (0, t(260561).B)({
                    kind: "user",
                    id: "2023-02_guild_transfer_ownership_verification",
                    label: "Safety Experience Guild Transfer Ownership Verification",
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
            var u, f, d = t(479373),
                p = t(703790),
                b = t(384411),
                O = t(107364),
                y = t(531441),
                h = t(775173),
                m = t(773148),
                v = t(749565),
                E = t(2590);
            ! function(e) {
                e.TRANFSER_OWNERSHIP = "TRANFSER_OWNERSHIP";
                e.CONFIRM_EMAIL_CODE = "CONFIRM_EMAIL_CODE"
            }(u || (u = {}));
            ! function(e) {
                e.MFA = "mfa";
                e.SMS = "sms";
                e.EMAIL = "email"
            }(f || (f = {}));
            var R = t(473708),
                N = t(559399),
                g = t.n(N);

            function S(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function _(e, r, t, n, o, a, i) {
                try {
                    var s = e[a](i),
                        l = s.value
                } catch (e) {
                    t(e);
                    return
                }
                s.done ? r(l) : Promise.resolve(l).then(n, o)
            }

            function T(e) {
                return function() {
                    var r = this,
                        t = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(r, t);

                        function i(e) {
                            _(a, n, o, i, s, "next", e)
                        }

                        function s(e) {
                            _(a, n, o, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function j(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function I(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        j(e, r, t[r])
                    }))
                }
                return e
            }

            function A(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function P(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, o, a = [],
                            i = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(i = (n = t.next()).done); i = !0) {
                                a.push(n.value);
                                if (r && a.length === r) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return a
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return S(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var x = function(e, r) {
                    var t, n, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (t = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                                    (n = 0, o) && (a = [2 & a[0], o.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            n = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1];
                                                o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2];
                                                i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    a = r.call(e, i)
                                } catch (e) {
                                    a = [6, e];
                                    n = 0
                                } finally {
                                    t = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                },
                w = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.default.locale;
                    return "https://".concat(E.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000168511")
                };

            function C(e) {
                var r = e.guild,
                    u = e.toUser,
                    b = e.fromUser,
                    N = e.onClose,
                    S = e.transitionState,
                    _ = c.useExperiment({
                        location: "4f43f7_1"
                    }, {
                        autoTrackExposure: !0
                    }).enabled,
                    j = P(o.useState(!1), 2),
                    C = j[0],
                    D = j[1],
                    M = r.hasFeature(E.oNc.VERIFIED) || r.hasFeature(E.oNc.PARTNERED),
                    Z = M ? R.Z.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_PAUSED : null,
                    F = M ? R.Z.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_LINK_PAUSED.format({
                        ticketUrl: w()
                    }) : null,
                    k = r.hasFeature(E.oNc.CREATOR_MONETIZABLE) || r.hasFeature(E.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
                (0, d.Z)({
                    type: a.nv.MODAL,
                    name: a.zs.GUILD_TRANSFER_OWNERSHIP
                });

                function L(e) {
                    return U.apply(this, arguments)
                }

                function U() {
                    return (U = T((function(e) {
                        return x(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, p.Z.transferOwnership(r.id, u.id, f.EMAIL, e)];
                                case 1:
                                    t.sent();
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }

                function B() {
                    return G.apply(this, arguments)
                }

                function G() {
                    return (G = T((function() {
                        return x(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, p.Z.sendTransferOwnershipPincode(r.id, !0)];
                                case 1:
                                    e.sent();
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }

                function H() {
                    H = T((function(e) {
                        return x(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    e.preventDefault();
                                    N();
                                    o.label = 1;
                                case 1:
                                    o.trys.push([1, 6, , 7]);
                                    return !_ || b.mfaEnabled || null == b.email ? [3, 3] : [4, p.Z.sendTransferOwnershipPincode(r.id)];
                                case 2:
                                    o.sent();
                                    (0, i.openModalLazy)(T((function() {
                                        var e, r;
                                        return x(this, (function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    return [4, Promise.all([t.e(40532), t.e(84715)]).then(t.bind(t, 884715))];
                                                case 1:
                                                    e = o.sent(), r = e.default;
                                                    return [2, function(e) {
                                                        return (0, n.jsx)(r, A(I({}, e), {
                                                            onFormSubmit: L,
                                                            onResend: B,
                                                            onSuccess: s.xf,
                                                            headerText: R.Z.Messages.TRANSFER_OWNERSHIP,
                                                            confirmButtonText: R.Z.Messages.TRANSFER_OWNERSHIP,
                                                            confirmButtonColor: i.Button.Colors.RED,
                                                            impressionName: a.zs.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })));
                                    return [3, 5];
                                case 3:
                                    return [4, p.Z.transferOwnership(r.id, u.id, b.mfaEnabled ? f.MFA : null)];
                                case 4:
                                    o.sent();
                                    (0, s.xf)();
                                    o.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    o.sent().body.code === E.evJ.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION && (0, i.openModal)((function(e) {
                                        return (0, n.jsx)(i.ConfirmModal, A(I({}, e), {
                                            header: R.Z.Messages.TRANSFER_OWNERSHIP_FAILURE_MODAL_TITLE,
                                            confirmText: R.Z.Messages.GOT_IT,
                                            confirmButtonColor: i.Button.Colors.BRAND,
                                            children: (0, n.jsx)(i.Text, {
                                                variant: "text-md/normal",
                                                children: R.Z.Messages.SERVER_SUBSCRIPTION_OWNERSHIP_TRANSFER_FAILURE_MODAL_BODY.format({
                                                    server_subscription_owner_transfer_article: E.T23
                                                })
                                            })
                                        }))
                                    }));
                                    return [3, 7];
                                case 7:
                                    return [2]
                            }
                        }))
                    }));
                    return H.apply(this, arguments)
                }
                var W = m.ZP.getNickname(r.id, void 0, u),
                    z = u.hasAvatarForGuild(r.id),
                    V = function() {
                        return (0, n.jsxs)("span", {
                            className: g().guildTransfer,
                            children: [null != r.icon ? (0, n.jsx)(i.Avatar, {
                                src: h.ZP.getGuildIconURL({
                                    id: r.id,
                                    icon: r.icon,
                                    size: 16
                                }),
                                size: i.AvatarSizes.SIZE_16,
                                className: g().miniGuildIcon,
                                "aria-hidden": !0
                            }) : null, (0, n.jsx)(i.Text, {
                                className: g().guildName,
                                variant: "text-sm/bold",
                                children: r.toString()
                            })]
                        })
                    };
                return (0, n.jsx)(i.ModalRoot, {
                    transitionState: S,
                    children: (0, n.jsxs)("form", {
                        onSubmit: function(e) {
                            return H.apply(this, arguments)
                        },
                        children: [(0, n.jsx)(i.ModalHeader, {
                            separator: !1,
                            children: (0, n.jsx)(i.Heading, {
                                variant: "heading-lg/semibold",
                                className: g().header,
                                children: R.Z.Messages.TRANSFER_OWNERSHIP
                            })
                        }), (0, n.jsxs)(i.ModalContent, {
                            children: [(0, n.jsx)(i.FormText, {
                                type: i.FormText.Types.DESCRIPTION,
                                className: g().subHeader,
                                children: null != W || z ? R.Z.Messages.TRANSFER_OWNERSHIP_TO_USER_WITH_AKA_V2.format({
                                    GuildHook: V,
                                    user: (0, v.W5)(u),
                                    AKAHook: function() {
                                        return (0, n.jsxs)("span", {
                                            className: g().akaTransfer,
                                            children: [(0, n.jsx)(y.IG, {
                                                text: R.Z.Messages.AKA,
                                                disableColor: !0,
                                                className: g().akaBadge
                                            }), z ? (0, n.jsx)(i.Avatar, {
                                                src: u.getAvatarURL(r.id, 16, !0),
                                                size: i.AvatarSizes.SIZE_16,
                                                className: g().miniAvatar,
                                                "aria-hidden": !0
                                            }) : null, (0, n.jsx)(i.Text, {
                                                className: g().nickname,
                                                variant: "text-sm/normal",
                                                children: null != W ? W : v.ZP.getName(u)
                                            })]
                                        })
                                    }
                                }) : R.Z.Messages.TRANSFER_OWNERSHIP_TO_USER_V2.format({
                                    GuildHook: V,
                                    user: (0, v.W5)(u)
                                })
                            }), (0, n.jsxs)(O.Z, {
                                className: g().fromToWrapper,
                                justify: O.Z.Justify.CENTER,
                                children: [(0, n.jsx)("div", {
                                    className: g().from,
                                    children: (0, n.jsx)(l.Z, {
                                        user: b,
                                        size: i.AvatarSizes.SIZE_80
                                    })
                                }), (0, n.jsx)("div", {
                                    className: g().to,
                                    children: (0, n.jsx)(l.Z, {
                                        user: u,
                                        size: i.AvatarSizes.SIZE_80
                                    })
                                })]
                            }), k && (0, n.jsx)(i.FormText, {
                                type: i.FormText.Types.DESCRIPTION,
                                className: g().roleSubscriptionText,
                                children: R.Z.Messages.TRANSFER_OWNERSHIP_SERVER_SUBSCRIPTION_GUILD.format({
                                    server_subscription_owner_transfer_article: E.T23
                                })
                            }), (0, n.jsx)(i.FormSwitch, {
                                disabled: M,
                                tooltipNote: Z,
                                hideBorder: !0,
                                value: C,
                                onChange: function(e) {
                                    D(e)
                                },
                                children: (0, n.jsx)(i.FormText, {
                                    type: i.FormText.Types.DESCRIPTION,
                                    children: R.Z.Messages.TRANSFER_OWNERSHIP_ACKNOWLEDGE.format({
                                        username: (0, v.W5)(u)
                                    })
                                })
                            }), (0,
                                n.jsx)(i.FormText, {
                                className: g().protectedText,
                                type: i.FormText.Types.DEFAULT,
                                children: F
                            })]
                        }), (0, n.jsxs)(i.ModalFooter, {
                            children: [(0, n.jsx)(i.Button, {
                                type: "submit",
                                disabled: !C,
                                color: i.Button.Colors.RED,
                                children: R.Z.Messages.TRANSFER_OWNERSHIP
                            }), (0, n.jsx)(i.Button, {
                                look: i.Button.Looks.LINK,
                                color: i.Button.Colors.PRIMARY,
                                onClick: N,
                                children: R.Z.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }
        },
        479373: (e, r, t) => {
            t.d(r, {
                Z: () => R
            });
            var n = t(667294),
                o = t(110251),
                a = t.n(o),
                i = t(873955),
                s = t.n(i),
                l = t(571657),
                c = t(744564),
                u = t(61209),
                f = t(715107),
                d = t(464187),
                p = t(652591),
                b = t(396043),
                O = t(930114);

            function y(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function h(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        y(e, r, t[r])
                    }))
                }
                return e
            }

            function m(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }
            var v = (0, l.Gb)({
                analyticEventConfigs: p.AnalyticEventConfigs,
                dispatcher: c.Z,
                TRACK_ACTION_NAME: "TRACK"
            });

            function E(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = e.name,
                    n = e.type,
                    o = e.properties;
                if (e.type !== l.nv.MODAL || null != e.name || !(0, O.Ez)().some((function(e) {
                        var r;
                        return null === (r = e._stackContext) || void 0 === r ? void 0 : r.isSlide
                    }))) {
                    (0, O.Ps)(e);
                    var a, i, s = null !== (a = null == o ? void 0 : o.guild_id) && void 0 !== a ? a : d.Z.getGuildId(),
                        c = null !== (i = null == o ? void 0 : o.channel_id) && void 0 !== i ? i : f.Z.getChannelId(s),
                        y = (0,
                            p.expandEventProperties)(h({
                            impression_type: n,
                            location: (0, O.k$)()
                        }, (0, b.hH)(s), (0, b.v_)(u.Z.getChannel(c)), o));
                    if (r)(0, O.dT)(null, null);
                    else {
                        if (null != t && null != n) {
                            (0, p.debugLogEvent)(t, y);
                            v(t, y)
                        }(0, O.dT)(t, y)
                    }
                }
            }

            function R(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        disableTrack: !1,
                        trackOnInitialLoad: !1
                    },
                    t = arguments.length > 2 ? arguments[2] : void 0,
                    o = n.useRef(),
                    i = n.useRef();
                n.useEffect((function() {
                    var n = !a()(o.current, e);
                    n && (o.current = e);
                    var l = !a()(i.current, t);
                    l && (i.current = t);
                    if (n || l) {
                        var c = m(h({}, e), {
                            sequenceId: s()("impression_")
                        });
                        E(c, r.disableTrack);
                        return function() {
                            null != c && (0, O.dw)(c)
                        }
                    }
                }), r.trackOnInitialLoad ? [] : void 0)
            }
        },
        87931: (e, r, t) => {
            t.d(r, {
                Z: () => n
            });
            const n = t(517586).Z
        },
        531441: (e, r, t) => {
            t.d(r, {
                Dv: () => p,
                OV: () => O,
                NG: () => y,
                mA: () => h,
                IG: () => m,
                lB: () => v,
                G2: () => E,
                fW: () => R
            });
            var n = t(785893),
                o = (t(667294), t(294184)),
                a = t.n(o),
                i = (t(304548), t(87931)),
                s = (t(473708), t(800624)),
                l = t.n(s);

            function c(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function u(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        c(e, r, t[r])
                    }))
                }
                return e
            }

            function f(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function d(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                        t = a[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        t = a[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            var p = {
                ROUND: l().baseShapeRound,
                ROUND_LEFT: l().baseShapeRoundLeft,
                ROUND_RIGHT: l().baseShapeRoundRight,
                SQUARE: ""
            };

            function b(e) {
                switch (e) {
                    case 1:
                    case 4:
                    case 6:
                        return 1;
                    default:
                        return
                }
            }

            function O(e) {
                return e < 10 ? 16 : e < 100 ? 22 : 30
            }

            function y(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            var h = function(e) {
                    var r = e.count,
                        t = e.color,
                        o = void 0 === t ? i.Z.STATUS_DANGER : t,
                        s = e.disableColor,
                        c = void 0 !== s && s,
                        h = e.shape,
                        m = void 0 === h ? p.ROUND : h,
                        v = e.className,
                        E = e.style,
                        R = d(e, ["count", "color", "disableColor", "shape", "className", "style"]);
                    return (0, n.jsx)("div", f(u({
                        className: a()(v, l().numberBadge, m),
                        style: u({
                            backgroundColor: c ? void 0 : o,
                            width: O(r),
                            paddingRight: b(r)
                        }, E)
                    }, R), {
                        children: y(r)
                    }))
                },
                m = function(e) {
                    var r = e.text,
                        t = e.className,
                        o = e.color,
                        s = void 0 === o ? i.Z.STATUS_DANGER : o,
                        c = e.shape,
                        b = void 0 === c ? p.ROUND : c,
                        O = e.disableColor,
                        y = void 0 !== O && O,
                        h = e.style,
                        m = d(e, ["text", "className", "color", "shape", "disableColor", "style"]);
                    return (0, n.jsx)("div", f(u({
                        className: a()(t, l().textBadge, b),
                        style: u({
                            backgroundColor: y ? void 0 : s
                        }, h)
                    }, m), {
                        children: r
                    }))
                },
                v = function(e) {
                    var r = e.text,
                        t = e.className,
                        o = d(e, ["text", "className"]);
                    return (0, n.jsx)(m, u({
                        className: a()(l().premiumBadge, t),
                        text: r
                    }, o))
                },
                E = function(e) {
                    var r = e.icon,
                        t = e.className,
                        o = e.color,
                        s = void 0 === o ? i.Z.STATUS_DANGER : o,
                        c = e.shape,
                        f = void 0 === c ? p.ROUND : c,
                        d = e.disableColor,
                        b = void 0 !== d && d,
                        O = e.style;
                    return (0, n.jsx)("div", {
                        className: a()(t, l().iconBadge, f),
                        style: u({
                            backgroundColor: b ? void 0 : s
                        }, O),
                        children: (0, n.jsx)(r, {
                            className: l().icon
                        })
                    })
                },
                R = function(e) {
                    var r = e.className,
                        t = e.color,
                        o = void 0 === t ? i.Z.INTERACTIVE_ACTIVE : t,
                        s = e.shape,
                        c = void 0 === s ? p.ROUND : s,
                        f = e.disableColor,
                        b = void 0 !== f && f,
                        O = e.style,
                        y = d(e, ["className", "color", "shape", "disableColor", "style"]);
                    return (0,
                        n.jsx)("div", u({
                        className: a()(r, l().circleBadge, c),
                        style: u({
                            backgroundColor: b ? void 0 : o
                        }, O)
                    }, y))
                }
        }
    }
]);