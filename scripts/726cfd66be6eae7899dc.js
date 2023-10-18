(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [94232], {
        590486: (e, r, t) => {
            e.exports = t.p + "a2851245b4e25b261540a945a1a7ef7c.svg"
        },
        519549: (e, r, t) => {
            e.exports = t.p + "78abef0672fefda7aab86a01af896271.svg"
        },
        394232: (e, r, t) => {
            "use strict";
            t.r(r);
            t.d(r, {
                default: () => p
            });
            var n = t(785893),
                s = (t(667294), t(70418)),
                a = t(251295),
                o = t(223430),
                i = t(43564),
                l = t(473708),
                c = t(324056),
                u = t.n(c),
                d = t(590486),
                T = t.n(d),
                _ = t(519549),
                E = t.n(_);

            function h(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function f(e, r, t, n, s, a, o) {
                try {
                    var i = e[a](o),
                        l = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? r(l) : Promise.resolve(l).then(n, s)
            }

            function m(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, s, a = [],
                            o = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(o = (n = t.next()).done); o = !0) {
                                a.push(n.value);
                                if (r && a.length === r) break
                            }
                        } catch (e) {
                            i = !0;
                            s = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (i) throw s
                            }
                        }
                        return a
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return h(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var x = function(e, r) {
                var t, n, s, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function i(a) {
                    return function(i) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, n && (s = 2 & a[0] ? n.return : a[0] ? n.throw || ((s = n.return) && s.call(n),
                                        0) : n.next) && !(s = s.call(n, a[1])).done) return s;
                                (n = 0, s) && (a = [2 & a[0], s.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        s = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        n = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = o.trys, s = s.length > 0 && s[s.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!s || a[1] > s[0] && a[1] < s[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < s[1]) {
                                            o.label = s[1];
                                            s = a;
                                            break
                                        }
                                        if (s && o.label < s[2]) {
                                            o.label = s[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        s[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = r.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                n = 0
                            } finally {
                                t = s = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, i])
                    }
                }
            };

            function C(e) {
                var r = e.header,
                    t = e.body;
                return (0, n.jsxs)("div", {
                    className: u().bulletItem,
                    children: [(0, n.jsx)("img", {
                        alt: "",
                        className: u().bulletImage,
                        src: T()
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(s.Text, {
                            variant: "text-sm/semibold",
                            color: "text-normal",
                            children: r
                        }), (0, n.jsx)(o.Z, {
                            size: 4
                        }), (0, n.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: t
                        })]
                    })]
                })
            }

            function p(e) {
                var r, t, c = e.guildId,
                    d = e.demonetized,
                    T = e.transitionState,
                    _ = e.onClose,
                    h = m((0, a.Z)(d ? i.$J : i.hY), 2),
                    p = h[0],
                    N = h[1],
                    A = N.loading,
                    O = N.error,
                    M = (t = (r = function() {
                        return x(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    e.trys.push([0, 2, , 3]);
                                    return [4, p(c)];
                                case 1:
                                    null != e.sent() && (null == _ || _());
                                    return [3, 3];
                                case 2:
                                    e.sent();
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, s) {
                            var a = r.apply(e, t);

                            function o(e) {
                                f(a, n, s, o, i, "next", e)
                            }

                            function i(e) {
                                f(a, n, s, o, i, "throw", e)
                            }
                            o(void 0)
                        }))
                    }), function() {
                        return t.apply(this, arguments)
                    });
                return (0, n.jsxs)(s.ModalRoot, {
                    className: u().container,
                    size: s.ModalSize.SMALL,
                    transitionState: T,
                    "aria-label": l.Z.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_TITLE,
                    children: [(0, n.jsx)(s.ModalHeader, {
                        separator: !1,
                        className: u().header,
                        children: (0, n.jsx)("div", {
                            className: u().imageContainer,
                            children: (0, n.jsx)("img", {
                                alt: "",
                                className: u().image,
                                src: E()
                            })
                        })
                    }), (0, n.jsx)(s.ModalContent, {
                        children: (0, n.jsxs)("div", {
                            className: u().content,
                            children: [(0, n.jsx)(s.Heading, {
                                variant: "heading-xl/medium",
                                color: "header-primary",
                                children: l.Z.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_TITLE
                            }), (0, n.jsx)(o.Z, {
                                size: 12
                            }), (0, n.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: l.Z.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY.format({
                                    termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms"
                                })
                            }), (0, n.jsx)(o.Z, {
                                size: 24
                            }), (0, n.jsx)(C, {
                                header: l.Z.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_1_HEADER,
                                body: l.Z.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_1_BODY
                            }), (0, n.jsx)(o.Z, {
                                size: 16
                            }), (0, n.jsx)(C, {
                                header: l.Z.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_2_HEADER,
                                body: l.Z.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_2_BODY
                            })]
                        })
                    }), (0, n.jsx)(s.ModalFooter, {
                        children: (0, n.jsxs)("div", {
                            className: u().footer,
                            children: [(0, n.jsx)(s.Button, {
                                fullWidth: !0,
                                onClick: M,
                                submitting: A,
                                children: l.Z.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_ACCEPT_CTA
                            }), (0, n.jsx)(o.Z, {
                                size: 4
                            }), (0, n.jsx)(s.Button, {
                                color: s.Button.Colors.CUSTOM,
                                innerClassName: u().remindMeLater,
                                look: s.Button.Looks.LINK,
                                fullWidth: !0,
                                onClick: _,
                                children: l.Z.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_REMIND_ME_LATER
                            }), null == O ? null : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(o.Z, {
                                    size: 8
                                }), (0, n.jsxs)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "status-danger",
                                    children: ["Error: ", O.message]
                                })]
                            }), (0, n.jsx)(o.Z, {
                                size: 10
                            }), (0, n.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: l.Z.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_ACCEPT_DISCLAIMER.format({
                                    termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms"
                                })
                            })]
                        })
                    })]
                })
            }
        }
    }
]);