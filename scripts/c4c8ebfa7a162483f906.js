(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [33970], {
        806872: (e, t, s) => {
            e.exports = s.p + "6b3cc6ff5c09de83cc37561a43304dee.mp4"
        },
        364142: (e, t, s) => {
            e.exports = s.p + "b6508869eb1b93a8e54729ac86985599.png"
        },
        850811: (e, t, s) => {
            e.exports = s.p + "62ac6016dc438a1fe4926ed43d3fe280.webm"
        },
        333970: (e, t, s) => {
            "use strict";
            s.r(t);
            s.d(t, {
                default: () => f
            });
            var n, a = s(785893),
                r = s(667294),
                o = s(70418),
                l = s(327499),
                i = s(822003),
                u = s(136317),
                c = s(786170),
                E = s(773148),
                d = s(2590),
                _ = s(473708),
                A = s(806683),
                N = s.n(A);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, n = new Array(t); s < t; s++) n[s] = e[s];
                return n
            }

            function S(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != s) {
                        var n, a, r = [],
                            o = !0,
                            l = !1;
                        try {
                            for (s = s.call(e); !(o = (n = s.next()).done); o = !0) {
                                r.push(n.value);
                                if (t && r.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == s.return || s.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return r
                    }
                }(e, t) || m(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(e) {
                return function(e) {
                    if (Array.isArray(e)) return O(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || m(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, t) {
                if (e) {
                    if ("string" == typeof e) return O(e, t);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === s && e.constructor && (s = e.constructor.name);
                    return "Map" === s || "Set" === s ? Array.from(s) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? O(e, t) : void 0
                }
            }! function(e) {
                e[e.INITIAL = 0] = "INITIAL";
                e[e.OTHER_REASON = 1] = "OTHER_REASON"
            }(n || (n = {}));

            function R() {
                return [{
                    value: 0,
                    label: _.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE
                }, {
                    value: 1 * d.UF9.HOUR,
                    label: _.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR
                }, {
                    value: 6 * d.UF9.HOUR,
                    label: _.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR
                }, {
                    value: 12 * d.UF9.HOUR,
                    label: _.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR
                }, {
                    value: 1 * d.UF9.DAY,
                    label: _.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR
                }, {
                    value: 3 * d.UF9.DAY,
                    label: _.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D
                }, {
                    value: 7 * d.UF9.DAY,
                    label: _.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D
                }]
            }
            var T = R()[1].value;

            function f(e) {
                var t = e.guildId,
                    A = e.user,
                    O = e.location,
                    m = e.userIds,
                    f = e.onBanMultiple,
                    M = e.transitionState,
                    p = e.onClose,
                    b = e.canBulkBan,
                    g = void 0 !== b && b,
                    h = S(r.useState(T), 2),
                    C = h[0],
                    v = h[1],
                    L = S(r.useState(""), 2),
                    B = L[0],
                    y = L[1],
                    x = S(r.useState(n.INITIAL), 2),
                    j = x[0],
                    Z = x[1],
                    H = S(r.useState(!1), 2),
                    k = H[0],
                    P = H[1],
                    U = (0, i.sE)(t, {
                        location: O,
                        targetUserId: null == A ? void 0 : A.id,
                        targets: m
                    }),
                    D = r.useCallback((function() {
                        if (null != f) {
                            if (!(null != m && (null == m ? void 0 : m.size) > 0 && g) || k) return;
                            if ("" === B.trim() && !k) {
                                P(!0);
                                return
                            }
                            f(t, I(m), C, B)
                        } else {
                            if (null == A) return;
                            l.Z.banUser(t, null == A ? void 0 : A.id, C, B)
                        }
                        U(i.jQ.BAN);
                        p()
                    }), [f, U, p, m, g, k, B, t, C, A]),
                    F = r.useCallback((function(e) {
                        v(e)
                    }), []),
                    w = r.useCallback((function(e) {
                        var t = e.value;
                        y(t);
                        P(!1)
                    }), []),
                    Y = r.useCallback((function(e) {
                        y(e);
                        k && P(!1)
                    }), [k]),
                    G = r.useCallback((function() {
                        y("");
                        Z(n.OTHER_REASON)
                    }), []),
                    z = r.useCallback((function() {
                        Z(n.INITIAL)
                    }), []),
                    K = [{
                        name: _.Z.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT,
                        value: _.Z.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT
                    }, {
                        name: _.Z.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT,
                        value: _.Z.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT
                    }, {
                        name: _.Z.Messages.BAN_REASON_OPTION_BREAKING_RULES,
                        value: _.Z.Messages.BAN_REASON_OPTION_BREAKING_RULES
                    }],
                    Q = null != f && null != m ? _.Z.Messages.BAN_MULTIPLE_CONFIRM_TITLE.format({
                        count: null == m ? void 0 : m.size
                    }) : null == A ? "" : _.Z.Messages.BAN_CONFIRM_TITLE.format({
                        username: "@".concat(E.ZP.getName(t, null, A))
                    });
                return (0, a.jsxs)(o.ModalRoot, {
                    transitionState: M,
                    children: [(0, a.jsx)(o.ModalHeader, {
                        separator: !1,
                        children: (0, a.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            children: Q
                        })
                    }), (0, a.jsxs)(o.ModalContent, {
                        className: N().modalContent,
                        children: [(0, a.jsxs)(c.Z, {
                            autoPlay: !0,
                            loop: !0,
                            className: N().spacing,
                            width: 400,
                            children: [(0, a.jsx)("source", {
                                src: s(850811),
                                type: "video/webm"
                            }), (0, a.jsx)("source", {
                                src: s(806872),
                                type: "video/mp4"
                            }), (0, a.jsx)("img", {
                                alt: "",
                                src: s(364142)
                            })]
                        }), (0, a.jsxs)(o.FormItem, {
                            title: _.Z.Messages.FORM_LABEL_REASON_BAN,
                            className: N().spacing,
                            children: [k && (0, a.jsx)(o.FormErrorBlock, {
                                className: N().error,
                                children: _.Z.Messages.BAN_REASON_REQUIRED_ERROR
                            }), (0, a.jsx)(o.Sequencer, {
                                steps: [n.INITIAL, n.OTHER_REASON],
                                step: j,
                                children: function(e) {
                                    switch (j) {
                                        case n.INITIAL:
                                            return (0, a.jsxs)(a.Fragment, {
                                                children: [(0, a.jsx)(o.RadioGroup, {
                                                    value: B,
                                                    options: e,
                                                    onChange: w,
                                                    radioItemClassName: N().radioItemStyles
                                                }), (0, a.jsxs)(o.Clickable, {
                                                    onClick: G,
                                                    className: N().banReasonOtherClickable,
                                                    children: [(0, a.jsx)(o.Text, {
                                                        variant: "text-md/medium",
                                                        color: "none",
                                                        children: _.Z.Messages.OTHER
                                                    }), (0, a.jsx)(u.Z, {
                                                        width: "16",
                                                        height: "16"
                                                    })]
                                                })]
                                            });
                                        case n.OTHER_REASON:
                                            return (0, a.jsx)(o.TextArea, {
                                                maxLength: d.GNZ,
                                                onChange: Y,
                                                value: B,
                                                rows: 5,
                                                autoFocus: !0
                                            })
                                    }
                                }(K)
                            })]
                        }), (0, a.jsx)(o.FormItem, {
                            title: _.Z.Messages.FORM_LABEL_DELETE_MESSAGE_HISTORY,
                            className: N().spacing,
                            children: (0, a.jsx)(o.SingleSelect, {
                                options: R(),
                                value: C,
                                onChange: F
                            })
                        })]
                    }), function() {
                        switch (j) {
                            case n.INITIAL:
                                return (0, a.jsxs)(o.ModalFooter, {
                                    className: N().footer,
                                    children: [(0, a.jsx)(o.Button, {
                                        type: "button",
                                        look: o.Button.Looks.LINK,
                                        color: o.Button.Colors.PRIMARY,
                                        onClick: p,
                                        children: _.Z.Messages.CANCEL
                                    }), (0, a.jsx)(o.Button, {
                                        type: "submit",
                                        color: o.Button.Colors.RED,
                                        size: o.Button.Sizes.SMALL,
                                        onClick: D,
                                        children: _.Z.Messages.BAN
                                    })]
                                });
                            case n.OTHER_REASON:
                                return (0, a.jsxs)(o.ModalFooter, {
                                    className: N().footerStepped,
                                    children: [(0, a.jsx)(o.Button, {
                                        className: N().cancel,
                                        innerClassName: N().cancel,
                                        type: "button",
                                        look: o.Button.Looks.LINK,
                                        color: o.Button.Colors.PRIMARY,
                                        size: o.Button.Sizes.SMALL,
                                        onClick: z,
                                        children: _.Z.Messages.BACK
                                    }), (0, a.jsx)(o.Button, {
                                        type: "submit",
                                        color: o.Button.Colors.RED,
                                        size: o.Button.Sizes.SMALL,
                                        onClick: D,
                                        children: _.Z.Messages.BAN
                                    })]
                                })
                        }
                    }()]
                })
            }
        }
    }
]);