"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [46559], {
        146559: (e, r, t) => {
            t.r(r);
            t.d(r, {
                default: () => w
            });
            var n = t(785893),
                a = t(667294),
                s = t(993231),
                o = t(882723),
                i = t(735885),
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
                E = t(384411),
                h = t(107364),
                m = t(531441),
                R = t(775173),
                _ = t(773148),
                S = t(749565),
                b = t(2590);
            ! function(e) {
                e.TRANFSER_OWNERSHIP = "TRANFSER_OWNERSHIP";
                e.CONFIRM_EMAIL_CODE = "CONFIRM_EMAIL_CODE"
            }(u || (u = {}));
            ! function(e) {
                e.MFA = "mfa";
                e.SMS = "sms";
                e.EMAIL = "email"
            }(f || (f = {}));
            var N = t(473708),
                O = t(308674),
                y = t.n(O);

            function T(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function I(e, r, t, n, a, s, o) {
                try {
                    var i = e[s](o),
                        l = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? r(l) : Promise.resolve(l).then(n, a)
            }

            function A(e) {
                return function() {
                    var r = this,
                        t = arguments;
                    return new Promise((function(n, a) {
                        var s = e.apply(r, t);

                        function o(e) {
                            I(s, n, a, o, i, "next", e)
                        }

                        function i(e) {
                            I(s, n, a, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function x(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function v(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        x(e, r, t[r])
                    }))
                }
                return e
            }

            function g(e, r) {
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
                        var n, a, s = [],
                            o = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(o = (n = t.next()).done); o = !0) {
                                s.push(n.value);
                                if (r && s.length === r) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return s
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return T(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return T(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var j = function(e, r) {
                    var t, n, a, s, o = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                        next: i(0),
                        throw: i(1),
                        return: i(2)
                    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                        return this
                    }), s;

                    function i(s) {
                        return function(i) {
                            return function(s) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1, n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, s[1])).done) return a;
                                    (n = 0, a) && (s = [2 & s[0], a.value]);
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
                                            n = s[1];
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
                                    s = r.call(e, o)
                                } catch (e) {
                                    s = [6, e];
                                    n = 0
                                } finally {
                                    t = a = 0
                                }
                                if (5 & s[0]) throw s[1];
                                return {
                                    value: s[0] ? s[1] : void 0,
                                    done: !0
                                }
                            }([s, i])
                        }
                    }
                },
                F = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.default.locale;
                    return "https://".concat(b.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000168511")
                };

            function w(e) {
                var r = e.guild,
                    u = e.toUser,
                    E = e.fromUser,
                    O = e.onClose,
                    T = e.transitionState,
                    I = c.useExperiment({
                        location: "4f43f7_1"
                    }, {
                        autoTrackExposure: !0
                    }).enabled,
                    x = P(a.useState(!1), 2),
                    w = x[0],
                    M = x[1],
                    C = r.hasFeature(b.oNc.VERIFIED) || r.hasFeature(b.oNc.PARTNERED),
                    Z = C ? N.Z.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_PAUSED : null,
                    D = C ? N.Z.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_LINK_PAUSED.format({
                        ticketUrl: F()
                    }) : null,
                    L = r.hasFeature(b.oNc.CREATOR_MONETIZABLE) || r.hasFeature(b.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
                (0, d.Z)({
                    type: s.nv.MODAL,
                    name: s.zs.GUILD_TRANSFER_OWNERSHIP
                });

                function k(e) {
                    return W.apply(this, arguments)
                }

                function W() {
                    return (W = A((function(e) {
                        return j(this, (function(t) {
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

                function H() {
                    return B.apply(this, arguments)
                }

                function B() {
                    return (B = A((function() {
                        return j(this, (function(e) {
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

                function U() {
                    U = A((function(e) {
                        return j(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    e.preventDefault();
                                    O();
                                    a.label = 1;
                                case 1:
                                    a.trys.push([1, 6, , 7]);
                                    return !I || E.mfaEnabled || null == E.email ? [3, 3] : [4, p.Z.sendTransferOwnershipPincode(r.id)];
                                case 2:
                                    a.sent();
                                    (0, o.openModalLazy)(A((function() {
                                        var e, r;
                                        return j(this, (function(a) {
                                            switch (a.label) {
                                                case 0:
                                                    return [4, Promise.all([t.e(40532), t.e(84715)]).then(t.bind(t, 884715))];
                                                case 1:
                                                    e = a.sent(), r = e.default;
                                                    return [2, function(e) {
                                                        return (0, n.jsx)(r, g(v({}, e), {
                                                            onFormSubmit: k,
                                                            onResend: H,
                                                            onSuccess: i.xf,
                                                            headerText: N.Z.Messages.TRANSFER_OWNERSHIP,
                                                            confirmButtonText: N.Z.Messages.TRANSFER_OWNERSHIP,
                                                            confirmButtonColor: o.Button.Colors.RED,
                                                            impressionName: s.zs.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })));
                                    return [3, 5];
                                case 3:
                                    return [4, p.Z.transferOwnership(r.id, u.id, E.mfaEnabled ? f.MFA : null)];
                                case 4:
                                    a.sent();
                                    (0, i.xf)();
                                    a.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    a.sent().body.code === b.evJ.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION && (0, o.openModal)((function(e) {
                                        return (0, n.jsx)(o.ConfirmModal, g(v({}, e), {
                                            header: N.Z.Messages.TRANSFER_OWNERSHIP_FAILURE_MODAL_TITLE,
                                            confirmText: N.Z.Messages.GOT_IT,
                                            confirmButtonColor: o.Button.Colors.BRAND,
                                            children: (0, n.jsx)(o.Text, {
                                                variant: "text-md/normal",
                                                children: N.Z.Messages.SERVER_SUBSCRIPTION_OWNERSHIP_TRANSFER_FAILURE_MODAL_BODY.format({
                                                    server_subscription_owner_transfer_article: b.T23
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
                    return U.apply(this, arguments)
                }
                var G = _.ZP.getNickname(r.id, void 0, u),
                    z = u.hasAvatarForGuild(r.id),
                    V = function() {
                        return (0, n.jsxs)("span", {
                            className: y().guildTransfer,
                            children: [null != r.icon ? (0, n.jsx)(o.Avatar, {
                                src: R.ZP.getGuildIconURL({
                                    id: r.id,
                                    icon: r.icon,
                                    size: 16
                                }),
                                size: o.AvatarSizes.SIZE_16,
                                className: y().miniGuildIcon,
                                "aria-hidden": !0
                            }) : null, (0, n.jsx)(o.Text, {
                                className: y().guildName,
                                variant: "text-sm/bold",
                                children: r.toString()
                            })]
                        })
                    };
                return (0, n.jsx)(o.ModalRoot, {
                    transitionState: T,
                    children: (0, n.jsxs)("form", {
                        onSubmit: function(e) {
                            return U.apply(this, arguments)
                        },
                        children: [(0, n.jsx)(o.ModalHeader, {
                            separator: !1,
                            children: (0, n.jsx)(o.Heading, {
                                variant: "heading-lg/semibold",
                                className: y().header,
                                children: N.Z.Messages.TRANSFER_OWNERSHIP
                            })
                        }), (0, n.jsxs)(o.ModalContent, {
                            children: [(0, n.jsx)(o.FormText, {
                                type: o.FormText.Types.DESCRIPTION,
                                className: y().subHeader,
                                children: null != G || z ? N.Z.Messages.TRANSFER_OWNERSHIP_TO_USER_WITH_AKA_V2.format({
                                    GuildHook: V,
                                    user: (0, S.W5)(u),
                                    AKAHook: function() {
                                        return (0, n.jsxs)("span", {
                                            className: y().akaTransfer,
                                            children: [(0, n.jsx)(m.IG, {
                                                text: N.Z.Messages.AKA,
                                                disableColor: !0,
                                                className: y().akaBadge
                                            }), z ? (0, n.jsx)(o.Avatar, {
                                                src: u.getAvatarURL(r.id, 16, !0),
                                                size: o.AvatarSizes.SIZE_16,
                                                className: y().miniAvatar,
                                                "aria-hidden": !0
                                            }) : null, (0, n.jsx)(o.Text, {
                                                className: y().nickname,
                                                variant: "text-sm/normal",
                                                children: null != G ? G : S.ZP.getName(u)
                                            })]
                                        })
                                    }
                                }) : N.Z.Messages.TRANSFER_OWNERSHIP_TO_USER_V2.format({
                                    GuildHook: V,
                                    user: (0, S.W5)(u)
                                })
                            }), (0, n.jsxs)(h.Z, {
                                className: y().fromToWrapper,
                                justify: h.Z.Justify.CENTER,
                                children: [(0, n.jsx)("div", {
                                    className: y().from,
                                    children: (0, n.jsx)(l.Z, {
                                        user: E,
                                        size: o.AvatarSizes.SIZE_80
                                    })
                                }), (0, n.jsx)("div", {
                                    className: y().to,
                                    children: (0, n.jsx)(l.Z, {
                                        user: u,
                                        size: o.AvatarSizes.SIZE_80
                                    })
                                })]
                            }), L && (0, n.jsx)(o.FormText, {
                                type: o.FormText.Types.DESCRIPTION,
                                className: y().roleSubscriptionText,
                                children: N.Z.Messages.TRANSFER_OWNERSHIP_SERVER_SUBSCRIPTION_GUILD.format({
                                    server_subscription_owner_transfer_article: b.T23
                                })
                            }), (0, n.jsx)(o.FormSwitch, {
                                disabled: C,
                                tooltipNote: Z,
                                hideBorder: !0,
                                value: w,
                                onChange: function(e) {
                                    M(e)
                                },
                                children: (0, n.jsx)(o.FormText, {
                                    type: o.FormText.Types.DESCRIPTION,
                                    children: N.Z.Messages.TRANSFER_OWNERSHIP_ACKNOWLEDGE.format({
                                        username: (0, S.W5)(u)
                                    })
                                })
                            }), (0,
                                n.jsx)(o.FormText, {
                                className: y().protectedText,
                                type: o.FormText.Types.DEFAULT,
                                children: D
                            })]
                        }), (0, n.jsxs)(o.ModalFooter, {
                            children: [(0, n.jsx)(o.Button, {
                                type: "submit",
                                disabled: !w,
                                color: o.Button.Colors.RED,
                                children: N.Z.Messages.TRANSFER_OWNERSHIP
                            }), (0, n.jsx)(o.Button, {
                                look: o.Button.Looks.LINK,
                                color: o.Button.Colors.PRIMARY,
                                onClick: O,
                                children: N.Z.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=01f1cdb2ea90e234babd.js.map