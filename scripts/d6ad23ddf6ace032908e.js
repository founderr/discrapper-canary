"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [77876], {
        577876: (t, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => y
            });
            var r = n(785893),
                o = n(667294),
                a = n(202351),
                l = n(70418),
                s = n(773011),
                i = n(61209),
                u = n(107364),
                c = n(443812),
                d = n(419051),
                h = n(963985),
                f = n(473708),
                m = n(535504),
                N = n.n(m);

            function C(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function p(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            l = !0,
                            s = !1;
                        try {
                            for (n = n.call(t); !(l = (r = n.next()).done); l = !0) {
                                a.push(r.value);
                                if (e && a.length === e) break
                            }
                        } catch (t) {
                            s = !0;
                            o = t
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return a
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return C(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(t) {
                var e = t.channelId,
                    n = t.onClose,
                    m = t.transitionState,
                    C = (0, c.Dt)(),
                    y = (0, a.e7)([i.Z], (function() {
                        return i.Z.getChannel(e)
                    })),
                    g = (0, s.ZP)(y),
                    x = d.Z.getNickname(e),
                    E = p(o.useState(null != x ? x : ""), 2),
                    I = E[0],
                    M = E[1];
                return (0, r.jsx)("form", {
                    onSubmit: function(t) {
                        t.preventDefault();
                        (0, h.UT)(e, I);
                        n()
                    },
                    children: (0, r.jsxs)(l.ModalRoot, {
                        transitionState: m,
                        "aria-labelledby": C,
                        children: [(0, r.jsxs)(l.ModalHeader, {
                            separator: !0,
                            justify: u.Z.Justify.BETWEEN,
                            children: [(0, r.jsx)(l.Heading, {
                                id: C,
                                variant: "heading-lg/semibold",
                                children: f.Z.Messages.CHANGE_NICKNAME
                            }), (0, r.jsx)(l.ModalCloseButton, {
                                onClick: n
                            })]
                        }), (0, r.jsxs)(l.ModalContent, {
                            children: [(0, r.jsx)(l.FormItem, {
                                className: N().name,
                                title: f.Z.Messages.NICKNAME,
                                children: (0, r.jsx)(l.TextInput, {
                                    value: I,
                                    onChange: M,
                                    placeholder: null != g ? g : void 0,
                                    maxLength: 100,
                                    autoFocus: !0
                                })
                            }), null != x ? (0, r.jsx)(l.Button, {
                                look: l.Button.Looks.LINK,
                                color: l.Button.Colors.LINK,
                                size: l.Button.Sizes.NONE,
                                onClick: function() {
                                    (0, h.UT)(e, null);
                                    n()
                                },
                                className: N().reset,
                                children: f.Z.Messages.RESET_NICKNAME
                            }) : null, (0, r.jsx)(l.Text, {
                                className: N().description,
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: f.Z.Messages.FAVORITES_SET_NICKNAME_DESCRIPTION
                            })]
                        }), (0, r.jsxs)(l.ModalFooter, {
                            children: [(0, r.jsx)(l.Button, {
                                type: "submit",
                                children: f.Z.Messages.CHANGE_NICKNAME
                            }), (0, r.jsx)(l.Button, {
                                onClick: n,
                                look: l.Button.Looks.LINK,
                                color: l.Button.Colors.PRIMARY,
                                children: f.Z.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }
        }
    }
]);