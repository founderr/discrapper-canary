"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [17864], {
        717864: (t, e, r) => {
            r.r(e);
            r.d(e, {
                default: () => m
            });
            var n = r(785893),
                a = r(667294),
                o = r(418705),
                i = r(382587),
                s = r(109255),
                l = r(802695),
                u = r(882723),
                c = r(896490),
                d = r(473708),
                h = r(380422),
                f = r.n(h);

            function E(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function _(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, a, o = [],
                            i = !0,
                            s = !1;
                        try {
                            for (r = r.call(t); !(i = (n = r.next()).done); i = !0) {
                                o.push(n.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            s = !0;
                            a = t
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return E(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return E(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(t) {
                var e = t.transitionState,
                    r = t.onClose,
                    h = t.onConfirm,
                    E = a.useId(),
                    m = _(a.useState(!1), 2),
                    R = m[0],
                    A = m[1];
                return (0, n.jsxs)(u.ModalRoot, {
                    transitionState: e,
                    className: f().container,
                    "aria-labelledby": E,
                    children: [(0, n.jsx)(u.ModalHeader, {
                        separator: !1,
                        className: f().header,
                        children: (0, n.jsx)(s.X, {
                            id: E,
                            variant: "heading-lg/bold",
                            children: d.Z.Messages.BURST_REACTIONS_REMOVE_MODAL_TITLE
                        })
                    }), (0, n.jsxs)(u.ModalContent, {
                        children: [(0, n.jsx)(l.x, {
                            className: f().description,
                            variant: "text-sm/medium",
                            children: d.Z.Messages.BURST_REACTIONS_REMOVE_MODAL_DESCRIPTION
                        }), (0, n.jsxs)("div", {
                            className: f().buttons,
                            children: [(0, n.jsx)(u.Button, {
                                color: u.Button.Colors.RED,
                                fullWidth: !0,
                                onClick: function() {
                                    R && (0, c.EW)(o.z$.BURST_REACTIONS_REMOVE_MODAL);
                                    h();
                                    r()
                                },
                                children: d.Z.Messages.BURST_REACTIONS_REMOVE_MODAL_CONFIRM
                            }), (0, n.jsx)(u.Button, {
                                color: u.Button.Colors.TRANSPARENT,
                                fullWidth: !0,
                                onClick: r,
                                children: d.Z.Messages.BURST_REACTIONS_REMOVE_MODAL_CANCEL
                            })]
                        })]
                    }), (0, n.jsx)(u.ModalFooter, {
                        children: (0, n.jsx)(i.X, {
                            type: i.X.Types.INVERTED,
                            size: 18,
                            value: R,
                            onChange: function() {
                                return A(!R)
                            },
                            children: (0, n.jsx)(l.x, {
                                variant: "text-sm/medium",
                                color: "interactive-normal",
                                children: d.Z.Messages.DONT_SHOW_AGAIN
                            })
                        })
                    })]
                })
            }
        }
    }
]);