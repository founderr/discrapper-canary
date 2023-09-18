"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [51889], {
        833874: (e, n, t) => {
            t.d(n, {
                Z: () => L
            });
            var r = t(785893),
                s = t(667294),
                o = t(496486),
                a = t.n(o),
                l = t(882723),
                i = t(634698),
                u = t(149660),
                c = t(441093),
                E = t(107364),
                d = t(443812),
                _ = t(843133),
                f = t(98265),
                O = t(348592),
                m = t(629438),
                h = t(494579),
                M = t(473708),
                C = t(424529),
                S = t.n(C);

            function I(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function N(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, s, o = [],
                            a = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            s = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (l) throw s
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return I(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b() {
                return (0, r.jsx)(l.Text, {
                    className: S().helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: M.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: O.Z.getSubmitRequestURL()
                    })
                })
            }

            function L(e) {
                var n = e.header,
                    t = e.body,
                    o = e.problems,
                    O = e.transitionState,
                    C = e.feedbackProblems,
                    I = void 0 === C ? [] : C,
                    L = e.otherKey,
                    v = e.hasCloseButton,
                    T = e.onSubmit,
                    p = e.onClose,
                    x = e.canDismissForever,
                    Z = void 0 === x || x,
                    g = e.showHelpdeskLink,
                    A = void 0 === g || g,
                    B = (0, i.Z)(o),
                    H = N(s.useState(!1), 2),
                    R = H[0],
                    k = H[1],
                    y = N(s.useState(null), 2),
                    D = y[0],
                    j = y[1],
                    F = N(s.useState(a().shuffle(o)), 2),
                    U = F[0],
                    V = F[1],
                    G = N(s.useState(""), 2),
                    K = G[0],
                    P = G[1],
                    w = (0,
                        d.Dt)(),
                    z = (0, _.Z)(R),
                    W = (0, _.Z)(D),
                    q = (0, _.Z)(T),
                    Y = (0, _.Z)(K),
                    $ = null != D && I.includes(D);
                s.useEffect((function() {
                    a().isEqual(B, o) || V((0, m.B)(o, L))
                }), [o, B, L]);
                s.useEffect((function() {
                    return function() {
                        q.current({
                            problem: W.current,
                            dontShowAgain: z.current,
                            feedback: Y.current
                        })
                    }
                }), []);
                return (0, r.jsxs)(l.ModalRoot, {
                    transitionState: O,
                    className: S().modalRoot,
                    "aria-labelledby": w,
                    children: [(0, r.jsx)(u.Z, {}), (0, r.jsxs)(l.ModalHeader, {
                        separator: !1,
                        className: S().headerContainer,
                        children: [(0, r.jsx)(f.Z, {
                            id: w,
                            className: S().header,
                            color: f.Z.Colors.CUSTOM,
                            size: f.Z.Sizes.SIZE_24,
                            children: n
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: S().ratingBody,
                            children: t
                        }), v ? (0, r.jsx)(l.ModalCloseButton, {
                            className: S().modalCloseButton,
                            onClick: p
                        }) : null]
                    }), (0, r.jsxs)(l.ModalContent, {
                        className: S().content,
                        children: [$ ? null : (0, r.jsx)(l.FormItem, {
                            className: S().problemInfo,
                            children: (0, r.jsx)(c.Z, {
                                options: U,
                                onClick: function(e) {
                                    var n = e.value;
                                    j(n);
                                    I.includes(n) || p()
                                }
                            })
                        }), $ ? (0, r.jsxs)(l.FormItem, {
                            title: M.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: S().problemInfo,
                            children: [(0, r.jsx)(l.TextArea, {
                                value: K,
                                maxLength: h.iF,
                                onChange: P
                            }), A ? (0, r.jsx)(b, {}) : null]
                        }) : null]
                    }), Z || $ ? (0, r.jsx)(l.ModalFooter, {
                        className: S().footer,
                        direction: E.Z.Direction.HORIZONTAL,
                        children: $ ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(l.Button, {
                                size: l.Button.Sizes.SMALL,
                                look: l.Button.Looks.LINK,
                                color: l.Button.Colors.PRIMARY,
                                onClick: function() {
                                    j(null);
                                    P("")
                                },
                                children: M.Z.Messages.BACK
                            }), (0, r.jsx)(l.Button, {
                                size: l.Button.Sizes.SMALL,
                                onClick: p,
                                children: M.Z.Messages.SUBMIT
                            })]
                        }) : Z ? (0, r.jsx)(l.Checkbox, {
                            size: 18,
                            type: l.Checkbox.Types.INVERTED,
                            value: R,
                            onChange: function() {
                                return k(!R)
                            },
                            children: (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: M.Z.Messages.DONT_SHOW_AGAIN
                            })
                        }) : null
                    }) : null]
                })
            }
        },
        149660: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(667294),
                s = t(792800),
                o = t(120415),
                a = t(473708);

            function l() {
                r.useEffect((function() {
                    o.FB || (0, s.EM)({
                        messages: [a.Z.Messages.GO_LIVE_HEY, a.Z.Messages.GO_LIVE_LOOK, a.Z.Messages.GO_LIVE_LISTEN],
                        interval: 600,
                        count: 20,
                        onlyWhenBlurred: !0
                    })
                }), []);
                return null
            }
        },
        851889: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => _
            });
            var r, s = t(785893),
                o = (t(667294), t(989824)),
                a = t(833874),
                l = t(61209),
                i = t(652591),
                u = t(2590),
                c = t(473708);
            ! function(e) {
                e.BOT_SPAM = "bot-spam";
                e.NO_GO = "no-go";
                e.OVERWHELM = "overwhelm";
                e.SENSITIVE = "sensitive";
                e.OTHER = "other"
            }(r || (r = {}));

            function E() {
                return [{
                    value: r.BOT_SPAM,
                    label: c.Z.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_BOTS
                }, {
                    value: r.NO_GO,
                    label: c.Z.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_NO_GO
                }, {
                    value: r.OVERWHELM,
                    label: c.Z.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_TOO_MUCH
                }, {
                    value: r.SENSITIVE,
                    label: c.Z.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_SENSITIVE
                }, {
                    value: r.OTHER,
                    label: c.Z.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_OTHER
                }]
            }
            var d = [r.OTHER];

            function _(e) {
                var n = e.transitionState,
                    t = e.onClose,
                    _ = e.channelId,
                    f = e.onSubmit,
                    O = (0, o.Z)(E);
                return (0, s.jsx)(a.Z, {
                    header: c.Z.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_TITLE,
                    body: c.Z.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_SUBTITLE,
                    problems: O,
                    feedbackProblems: d,
                    onSubmit: function(e) {
                        var n = e.problem,
                            t = e.feedback,
                            r = null == n;
                        if (!r) {
                            ! function(e, n, t, r) {
                                var s = l.Z.getChannel(e);
                                null != s && i.default.track(u.rMx.USER_REPORT_SUBMITTED, {
                                    report_name: "Guild Home Channel Removed",
                                    guild_id: s.guild_id,
                                    channel_id: s.id,
                                    reason: n,
                                    feedback: t,
                                    skipped: r
                                })
                            }(_, n, t, r);
                            f()
                        }
                    },
                    onClose: t,
                    transitionState: n,
                    otherKey: r.OTHER,
                    canDismissForever: !1,
                    showHelpdeskLink: !1
                })
            }
        }
    }
]);