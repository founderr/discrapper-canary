"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [44951], {
        43564: (t, n, e) => {
            e.d(n, {
                He: () => f,
                yk: () => h,
                wE: () => y,
                zo: () => d,
                wZ: () => A,
                av: () => N,
                df: () => R,
                hY: () => C,
                $J: () => M,
                oL: () => Z
            });
            var r = e(281110),
                i = e(744564),
                o = e(887124),
                u = e(2590),
                a = e(175072);

            function s(t, n, e, r, i, o, u) {
                try {
                    var a = t[o](u),
                        s = a.value
                } catch (t) {
                    e(t);
                    return
                }
                a.done ? n(s) : Promise.resolve(s).then(r, i)
            }

            function l(t) {
                return function() {
                    var n = this,
                        e = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(n, e);

                        function u(t) {
                            s(o, r, i, u, a, "next", t)
                        }

                        function a(t) {
                            s(o, r, i, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }
            var c = function(t, n) {
                var e, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (e) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (e = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                        0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = n.call(t, u)
                            } catch (t) {
                                o = [6, t];
                                r = 0
                            } finally {
                                e = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function f(t) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = l((function(t) {
                    return c(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, r.ZP.post({
                                    url: u.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(t)
                                })];
                            case 1:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function h(t) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = l((function(t) {
                    return c(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, r.ZP.get({
                                    url: u.ANM.CREATOR_MONETIZATION_ELIGIBILITY(t)
                                })];
                            case 1:
                                return [2, n.sent().body]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function y(t, n) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = l((function(t, n) {
                    return c(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, r.ZP.post({
                                    url: u.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(t, n)
                                })];
                            case 1:
                                e.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function d(t) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = l((function(t) {
                    return c(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, r.ZP.post({
                                    url: u.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(t)
                                })];
                            case 1:
                                n.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function A(t) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = l((function(t) {
                    return c(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, r.ZP.get({
                                    url: u.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(t)
                                })];
                            case 1:
                                return [2, n.sent().body]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function N(t) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = l((function(t) {
                    var n;
                    return c(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                e.trys.push([0, 2, , 3]);
                                return [4, r.ZP.get({
                                    url: u.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
                                    query: {
                                        nag_guild_ids: t
                                    }
                                })];
                            case 1:
                                n = e.sent();
                                i.Z.dispatch({
                                    type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
                                    eligibleGuilds: n.body.eligible_guilds
                                });
                                return [3, 3];
                            case 2:
                                e.sent();
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function R(t, n) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = l((function(t, n) {
                    var e, o;
                    return c(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, r.ZP.post({
                                    url: u.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(t),
                                    body: {
                                        team_id: n
                                    }
                                })];
                            case 1:
                                e = a.sent();
                                null != (o = e.body).application && i.Z.dispatch({
                                    type: "APPLICATION_FETCH_SUCCESS",
                                    application: o.application
                                });
                                return [2, o]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function C(t) {
                return r.ZP.post({
                    url: u.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(t)
                })
            }

            function M(t) {
                return r.ZP.post({
                    url: u.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(t)
                })
            }

            function v(t, n) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = l((function(t, n) {
                    return c(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, r.ZP.post({
                                    url: u.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(t),
                                    body: {
                                        code: n
                                    }
                                })];
                            case 1:
                                e.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Z(t, n) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = l((function(t, n) {
                    return c(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, v(t, n)];
                            case 1:
                                e.sent();
                                return [4, o.Z.getApplicationsForGuild(t, {
                                    type: a.w.GUILD_ROLE_SUBSCRIPTIONS,
                                    includeTeam: !0
                                })];
                            case 2:
                                return [2, e.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        654210: (t, n, e) => {
            e.d(n, {
                f: () => u
            });
            var r = e(348592),
                i = e(2590),
                o = e(473708);

            function u() {
                return o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_ACCEPT_TERMS_CHECKBOX.format({
                    fullTermsUrl: r.Z.getArticleURL(i.BhN.CREATOR_TERMS),
                    creatorRevenuePolicyUrl: r.Z.getArticleURL(i.BhN.CREATOR_POLICY)
                })
            }
        },
        44951: (t, n, e) => {
            e.r(n);
            e.d(n, {
                default: () => d
            });
            var r = e(785893),
                i = e(667294),
                o = e(882723),
                u = e(43564),
                a = e(654210),
                s = e(223430),
                l = e(265367),
                c = e(473708),
                f = e(633501),
                p = e.n(f);

            function h(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
                return r
            }

            function T(t, n, e, r, i, o, u) {
                try {
                    var a = t[o](u),
                        s = a.value
                } catch (t) {
                    e(t);
                    return
                }
                a.done ? n(s) : Promise.resolve(s).then(r, i)
            }

            function y(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != e) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (e = e.call(t); !(u = (r = e.next()).done); u = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                u || null == e.return || e.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(t, n) || function(t, n) {
                    if (!t) return;
                    if ("string" == typeof t) return h(t, n);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === e && t.constructor && (e = t.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return h(t, n)
                }(t, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var E = function(t, n) {
                var e, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (e) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (e = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = n.call(t, u)
                            } catch (t) {
                                o = [6, t];
                                r = 0
                            } finally {
                                e = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function d(t) {
                var n, e, f = t.guildId,
                    h = t.transitionState,
                    d = t.onClose,
                    _ = y(i.useState(!1), 2),
                    A = _[0],
                    b = _[1],
                    N = y(i.useState(!1), 2),
                    O = N[0],
                    R = N[1],
                    I = (e = (n = function() {
                        return E(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    b(!0);
                                    t.label = 1;
                                case 1:
                                    t.trys.push([1, , 3, 4]);
                                    return [4, (0, u.zo)(f)];
                                case 2:
                                    t.sent();
                                    d();
                                    return [3, 4];
                                case 3:
                                    b(!1);
                                    return [7];
                                case 4:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, i) {
                            var o = n.apply(t, e);

                            function u(t) {
                                T(o, r, i, u, a, "next", t)
                            }

                            function a(t) {
                                T(o, r, i, u, a, "throw", t)
                            }
                            u(void 0)
                        }))
                    }), function() {
                        return e.apply(this, arguments)
                    }),
                    C = c.Z.Messages.GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_TITLE;
                return (0, r.jsxs)(o.ModalRoot, {
                    className: p().container,
                    size: o.ModalSize.DYNAMIC,
                    transitionState: h,
                    "aria-label": C,
                    children: [(0, r.jsxs)(o.ModalContent, {
                        className: p().content,
                        children: [(0, r.jsxs)("div", {
                            className: p().header,
                            children: [(0, r.jsx)(l.Z, {
                                width: 20,
                                height: 20,
                                className: p().warningIcon
                            }), (0, r.jsx)(s.Z, {
                                size: 8,
                                horizontal: !0
                            }), (0, r.jsx)(o.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: C
                            })]
                        }), (0, r.jsx)(s.Z, {
                            size: 12
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            className: p().body,
                            children: c.Z.Messages.GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_BODY
                        }), (0, r.jsx)(s.Z, {
                            size: 28
                        }), (0, r.jsx)(o.Checkbox, {
                            onChange: function() {
                                R((function(t) {
                                    return !t
                                }))
                            },
                            size: 20,
                            type: o.Checkbox.Types.INVERTED,
                            value: O,
                            children: (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                color: "header-secondary",
                                children: (0, a.f)()
                            })
                        })]
                    }), (0, r.jsxs)(o.ModalFooter, {
                        children: [(0, r.jsx)(o.Button, {
                            color: o.Button.Colors.BRAND,
                            disabled: !O,
                            onClick: I,
                            submitting: A,
                            children: c.Z.Messages.CONFIRM
                        }), (0, r.jsx)(s.Z, {
                            size: 12,
                            horizontal: !0
                        }), (0, r.jsx)(o.Button, {
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.OUTLINED,
                            onClick: d,
                            children: c.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=f2aa388c8cb5927ad858.js.map