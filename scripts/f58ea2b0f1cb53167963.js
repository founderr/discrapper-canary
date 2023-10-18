"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [4483], {
        704483: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => M
            });
            var r = n(785893),
                a = n(667294),
                o = n(441143),
                l = n.n(o),
                i = n(70418),
                s = n(251295),
                u = n(887124),
                c = n(165296),
                _ = n(223430),
                E = n(443812),
                T = n(818417),
                d = n(999259),
                I = n(473708),
                S = n(661492),
                f = n.n(S);

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t, n, r, a, o, l) {
                try {
                    var i = e[o](l),
                        s = i.value
                } catch (e) {
                    n(e);
                    return
                }
                i.done ? t(s) : Promise.resolve(s).then(r, a)
            }

            function A(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o = [],
                            l = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return N(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return N(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = function(e, t) {
                var n, r, a, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                (r = 0, a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = l.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < a[1]) {
                                            l.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && l.label < a[2]) {
                                            l.label = a[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        a[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = t.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = a = 0
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

            function M(e) {
                var t, n, o, S, N = e.transitionState,
                    M = e.application,
                    m = e.onClose,
                    L = (0, E.Dt)(),
                    O = A(a.useState(null == M || null === (t = M.team) || void 0 === t ? void 0 : t.id), 2),
                    C = O[0],
                    b = O[1],
                    g = (0, c.Z)().teams,
                    y = a.useMemo((function() {
                        return g.filter((function(e) {
                            return e.payout_account_status === d.C.ACTIVE
                        })).map((function(e) {
                            return {
                                label: e.name,
                                value: e.id
                            }
                        }))
                    }), [g]),
                    v = (null == M || null === (n = M.team) || void 0 === n ? void 0 : n.id) !== C,
                    x = A((0, s.Z)(u.Z.transferApplication), 2),
                    R = x[0],
                    D = x[1],
                    G = D.loading,
                    j = D.error,
                    P = (S = (o = function() {
                        return p(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    l()(null != M, "no application");
                                    l()(null != C, "no team selected");
                                    return [4, R({
                                        applicationId: M.id,
                                        teamId: C
                                    })];
                                case 1:
                                    null != e.sent() && m();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, r) {
                            var a = o.apply(e, t);

                            function l(e) {
                                h(a, n, r, l, i, "next", e)
                            }

                            function i(e) {
                                h(a, n, r, l, i, "throw", e)
                            }
                            l(void 0)
                        }))
                    }), function() {
                        return S.apply(this, arguments)
                    }),
                    Z = null != (null == M ? void 0 : M.team);
                return (0, r.jsxs)(i.ModalRoot, {
                    transitionState: N,
                    "aria-labelledby": L,
                    children: [(0, r.jsxs)(i.ModalHeader, {
                        children: [(0, r.jsx)(i.Heading, {
                            id: L,
                            variant: "heading-md/semibold",
                            children: Z ? I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_TITLE : I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_TITLE
                        }), (0, r.jsx)(i.ModalCloseButton, {
                            className: f().closeButton,
                            onClick: m
                        })]
                    }), (0, r.jsxs)(i.ModalContent, {
                        className: f().content,
                        children: [Z ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(i.FormText, {
                                children: I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_DESCRIPTION
                            }), (0, r.jsx)(_.Z, {
                                size: 8
                            }), (0, r.jsxs)(i.Heading, {
                                className: f().warningHeading,
                                variant: "text-sm/semibold",
                                color: "text-danger",
                                children: [(0, r.jsx)(T.Z, {
                                    width: 16,
                                    height: 16,
                                    className: f().warningIcon
                                }), I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TEAM_CHANGE_WARNING_HEADING]
                            }), (0, r.jsx)(_.Z, {
                                size: 4
                            }), (0, r.jsx)(i.FormText, {
                                type: i.FormText.Types.ERROR,
                                children: I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TEAM_CHANGE_WARNING
                            })]
                        }) : (0, r.jsx)(i.FormText, {
                            children: I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_DESCRIPTION
                        }), null != j ? (0, r.jsx)(i.FormErrorBlock, {
                            children: j.message
                        }) : null, (0, r.jsx)(_.Z, {
                            size: 16
                        }), (0, r.jsx)(i.FormItem, {
                            title: Z ? I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_TO_TRANSFER_LABEL : I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_MODAL_SELECT_TEAM_LABEL,
                            required: !0,
                            children: (0, r.jsx)(i.SingleSelect, {
                                className: f().teamSelect,
                                options: y,
                                placeholder: I.Z.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,
                                value: C,
                                isDisabled: 0 === y.length,
                                onChange: function(e) {
                                    return b(e)
                                },
                                "aria-label": I.Z.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER
                            })
                        })]
                    }), (0, r.jsx)(i.ModalFooter, {
                        className: f().footer,
                        children: (0, r.jsx)(i.Button, {
                            color: i.Button.Colors.RED,
                            className: f().goBackButton,
                            submitting: G,
                            disabled: !v,
                            onClick: P,
                            children: I.Z.Messages.SAVE
                        })
                    })]
                })
            }
        }
    }
]);