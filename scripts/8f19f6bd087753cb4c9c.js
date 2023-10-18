"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [19507], {
        319507: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => A
            });
            var n = r(785893),
                o = r(667294),
                a = r(70418),
                s = r(443812),
                i = r(292327),
                l = r(473708),
                u = r(849204),
                c = r.n(u);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function h(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, a = [],
                            s = !0,
                            i = !1;
                        try {
                            for (r = r.call(e); !(s = (n = r.next()).done); s = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            o = e
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e) {
                var t = e.initialCustomMessage,
                    r = e.onSubmit,
                    u = e.onClose,
                    d = e.transitionState,
                    A = (0, s.Dt)(),
                    S = h(o.useState(t), 2),
                    f = S[0],
                    M = S[1];
                return (0, n.jsxs)(a.ModalRoot, {
                    transitionState: d,
                    "aria-labelledby": A,
                    size: a.ModalSize.SMALL,
                    children: [(0, n.jsxs)(a.ModalContent, {
                        className: c().actionContentContainer,
                        children: [(0, n.jsx)(a.Heading, {
                            id: A,
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            className: c().header,
                            children: l.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_TITLE
                        }), (0, n.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: l.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_DESCRIPTION
                        }), (0, n.jsx)(a.TextArea, {
                            className: c().customMessageTextArea,
                            placeholder: l.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_CUSTOM_MESSAGE_PLACEHOLDER,
                            value: f,
                            onChange: M,
                            maxLength: i._6
                        })]
                    }), (0, n.jsxs)(a.ModalFooter, {
                        children: [(0, n.jsx)(a.Button, {
                            onClick: function() {
                                r(f)
                            },
                            color: a.Button.Colors.BRAND,
                            size: a.Button.Sizes.SMALL,
                            children: l.Z.Messages.EDIT
                        }), (0, n.jsx)(a.Button, {
                            onClick: function() {
                                u()
                            },
                            color: a.Button.Colors.TRANSPARENT,
                            look: a.Button.Looks.LINK,
                            children: l.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);