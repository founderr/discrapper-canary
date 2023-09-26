(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [80372], {
        806872: (e, t, n) => {
            e.exports = n.p + "6b3cc6ff5c09de83cc37561a43304dee.mp4"
        },
        364142: (e, t, n) => {
            e.exports = n.p + "b6508869eb1b93a8e54729ac86985599.png"
        },
        850811: (e, t, n) => {
            e.exports = n.p + "62ac6016dc438a1fe4926ed43d3fe280.webm"
        },
        333970: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => R
            });
            var s, a = n(785893),
                o = n(667294),
                r = n(882723),
                l = n(327499),
                i = n(822003),
                u = n(136317),
                c = n(786170),
                E = n(773148),
                d = n(2590),
                A = n(473708),
                _ = n(806683),
                N = n.n(_);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, s = new Array(t); n < t; n++) s[n] = e[n];
                return s
            }

            function I(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var s, a, o = [],
                            r = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(r = (s = n.next()).done); r = !0) {
                                o.push(s.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                r || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || T(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(e) {
                return function(e) {
                    if (Array.isArray(e)) return O(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || T(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function T(e, t) {
                if (e) {
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? O(e, t) : void 0
                }
            }! function(e) {
                e[e.INITIAL = 0] = "INITIAL";
                e[e.OTHER_REASON = 1] = "OTHER_REASON"
            }(s || (s = {}));

            function m() {
                return [{
                    value: 0,
                    label: A.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE
                }, {
                    value: 1 * d.UF9.HOUR,
                    label: A.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR
                }, {
                    value: 6 * d.UF9.HOUR,
                    label: A.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR
                }, {
                    value: 12 * d.UF9.HOUR,
                    label: A.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR
                }, {
                    value: 1 * d.UF9.DAY,
                    label: A.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR
                }, {
                    value: 3 * d.UF9.DAY,
                    label: A.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D
                }, {
                    value: 7 * d.UF9.DAY,
                    label: A.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D
                }]
            }
            var f = m()[1].value;

            function R(e) {
                var t = e.guildId,
                    _ = e.user,
                    O = e.location,
                    T = e.userIds,
                    R = e.onBanMultiple,
                    M = e.transitionState,
                    p = e.onClose,
                    b = e.canBulkBan,
                    g = void 0 !== b && b,
                    h = I(o.useState(f), 2),
                    C = h[0],
                    v = h[1],
                    L = I(o.useState(""), 2),
                    y = L[0],
                    B = L[1],
                    x = I(o.useState(s.INITIAL), 2),
                    j = x[0],
                    Z = x[1],
                    H = (0, i.sE)(t, {
                        location: O,
                        targetUserId: null == _ ? void 0 : _.id,
                        targets: T
                    }),
                    k = o.useCallback((function() {
                        if (null != R) {
                            if (!(null != T && (null == T ? void 0 : T.size) > 0 && g)) return;
                            R(t, S(T), C, y)
                        } else {
                            if (null == _) return;
                            l.Z.banUser(t, null == _ ? void 0 : _.id, C, y)
                        }
                        H(i.jQ.BAN);
                        p()
                    }), [R, H, p, T, g, t, C, y, _]),
                    P = o.useCallback((function(e) {
                        v(e)
                    }), []),
                    U = o.useCallback((function(e) {
                        var t = e.value;
                        B(t)
                    }), []),
                    D = o.useCallback((function(e) {
                        B(e)
                    }), []),
                    F = o.useCallback((function() {
                        B("");
                        Z(s.OTHER_REASON)
                    }), []),
                    w = o.useCallback((function() {
                        Z(s.INITIAL)
                    }), []),
                    Y = [{
                        name: A.Z.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT,
                        value: A.Z.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT
                    }, {
                        name: A.Z.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT,
                        value: A.Z.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT
                    }, {
                        name: A.Z.Messages.BAN_REASON_OPTION_BREAKING_RULES,
                        value: A.Z.Messages.BAN_REASON_OPTION_BREAKING_RULES
                    }],
                    G = null != R && null != T ? A.Z.Messages.BAN_MULTIPLE_CONFIRM_TITLE.format({
                        count: null == T ? void 0 : T.size
                    }) : null == _ ? "" : A.Z.Messages.BAN_CONFIRM_TITLE.format({
                        username: "@".concat(E.ZP.getName(t, null, _))
                    });
                return (0, a.jsxs)(r.ModalRoot, {
                    transitionState: M,
                    children: [(0, a.jsx)(r.ModalHeader, {
                        separator: !1,
                        children: (0, a.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children: G
                        })
                    }), (0,
                        a.jsxs)(r.ModalContent, {
                        className: N().modalContent,
                        children: [(0, a.jsxs)(c.Z, {
                            autoPlay: !0,
                            loop: !0,
                            className: N().spacing,
                            width: 400,
                            children: [(0, a.jsx)("source", {
                                src: n(850811),
                                type: "video/webm"
                            }), (0, a.jsx)("source", {
                                src: n(806872),
                                type: "video/mp4"
                            }), (0, a.jsx)("img", {
                                alt: "",
                                src: n(364142)
                            })]
                        }), (0, a.jsx)(r.FormItem, {
                            title: A.Z.Messages.FORM_LABEL_REASON_BAN,
                            className: N().spacing,
                            children: (0, a.jsx)(r.Sequencer, {
                                steps: [s.INITIAL, s.OTHER_REASON],
                                step: j,
                                children: function(e) {
                                    switch (j) {
                                        case s.INITIAL:
                                            return (0, a.jsxs)(a.Fragment, {
                                                children: [(0, a.jsx)(r.RadioGroup, {
                                                    value: y,
                                                    options: e,
                                                    onChange: U,
                                                    radioItemClassName: N().radioItemStyles
                                                }), (0, a.jsxs)(r.Clickable, {
                                                    onClick: F,
                                                    className: N().banReasonOtherClickable,
                                                    children: [(0, a.jsx)(r.Text, {
                                                        variant: "text-md/medium",
                                                        color: "none",
                                                        children: A.Z.Messages.OTHER
                                                    }), (0, a.jsx)(u.Z, {
                                                        width: "16",
                                                        height: "16"
                                                    })]
                                                })]
                                            });
                                        case s.OTHER_REASON:
                                            return (0, a.jsx)(r.TextArea, {
                                                maxLength: d.GNZ,
                                                onChange: D,
                                                value: y,
                                                rows: 5,
                                                autoFocus: !0
                                            })
                                    }
                                }(Y)
                            })
                        }), (0, a.jsx)(r.FormItem, {
                            title: A.Z.Messages.FORM_LABEL_DELETE_MESSAGE_HISTORY,
                            className: N().spacing,
                            children: (0, a.jsx)(r.SingleSelect, {
                                options: m(),
                                value: C,
                                onChange: P
                            })
                        })]
                    }), function() {
                        switch (j) {
                            case s.INITIAL:
                                return (0, a.jsxs)(r.ModalFooter, {
                                    className: N().footer,
                                    children: [(0, a.jsx)(r.Button, {
                                        type: "button",
                                        look: r.Button.Looks.LINK,
                                        color: r.Button.Colors.PRIMARY,
                                        onClick: p,
                                        children: A.Z.Messages.CANCEL
                                    }), (0, a.jsx)(r.Button, {
                                        type: "submit",
                                        color: r.Button.Colors.RED,
                                        size: r.Button.Sizes.SMALL,
                                        onClick: k,
                                        children: A.Z.Messages.BAN
                                    })]
                                });
                            case s.OTHER_REASON:
                                return (0, a.jsxs)(r.ModalFooter, {
                                    className: N().footerStepped,
                                    children: [(0, a.jsx)(r.Button, {
                                        className: N().cancel,
                                        innerClassName: N().cancel,
                                        type: "button",
                                        look: r.Button.Looks.LINK,
                                        color: r.Button.Colors.PRIMARY,
                                        size: r.Button.Sizes.SMALL,
                                        onClick: w,
                                        children: A.Z.Messages.BACK
                                    }), (0, a.jsx)(r.Button, {
                                        type: "submit",
                                        color: r.Button.Colors.RED,
                                        size: r.Button.Sizes.SMALL,
                                        onClick: k,
                                        children: A.Z.Messages.BAN
                                    })]
                                })
                        }
                    }()]
                })
            }
        }
    }
]);