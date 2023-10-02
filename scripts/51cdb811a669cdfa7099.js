"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [30269], {
        530269: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => S
            });
            var r = t(785893),
                o = t(667294),
                a = t(294184),
                i = t.n(a),
                l = t(517586),
                s = t(304548),
                _ = t(396043),
                c = t(65162),
                u = t(189865),
                I = t(349491),
                E = t(2590),
                A = t(473708),
                N = t(956685),
                d = t.n(N);

            function T(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function M(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function C(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return a
                    }
                }(e, n) || O(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function D(e) {
                return function(e) {
                    if (Array.isArray(e)) return T(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || O(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(e, n) {
                if (e) {
                    if ("string" == typeof e) return T(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? T(e, n) : void 0
                }
            }

            function S(e) {
                var n = e.guildId,
                    t = e.transitionState,
                    a = e.onClose,
                    N = function(e) {
                        var n = O.includes(e);
                        S(n ? function(n) {
                            return n.filter((function(n) {
                                return n !== e
                            }))
                        } : function(n) {
                            return D(n).concat([e])
                        })
                    },
                    T = C(o.useState([]), 2),
                    O = T[0],
                    S = T[1],
                    R = C(o.useState(), 2),
                    f = R[0],
                    h = R[1],
                    L = [{
                        text: A.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_DM_SPAM,
                        value: c.C2.DM_SPAM
                    }, {
                        text: A.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_MENTION_SPAM,
                        value: c.C2.MENTION_SPAM
                    }, {
                        text: A.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANNEL_SPAM,
                        value: c.C2.CHANNEL_SPAM
                    }, {
                        text: A.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUS_NEW_MEMBERS,
                        value: c.C2.SUS_NEW_MEMBERS
                    }, {
                        text: A.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANGING_SETTINGS,
                        value: c.C2.CHANGING_SETTINGS
                    }, {
                        text: A.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_OTHER,
                        value: c.C2.OTHER
                    }];
                if (null == n) {
                    a();
                    return null
                }
                return (0, r.jsxs)(s.ModalRoot, {
                    transitionState: t,
                    size: s.ModalSize.MEDIUM,
                    children: [(0, r.jsx)(s.ModalHeader, {
                        separator: !0,
                        children: (0, r.jsxs)("div", {
                            className: d().headerContainer,
                            children: [(0, r.jsxs)("div", {
                                className: d().headerText,
                                children: [(0, r.jsx)(I.Z, {
                                    color: l.Z.INTERACTIVE_NORMAL,
                                    width: 16,
                                    height: 16
                                }), (0, r.jsx)(s.Heading, {
                                    color: "header-primary",
                                    variant: "heading-md/semibold",
                                    children: A.Z.Messages.GUILD_SERVER_LOCKDOWN_FEEDBACK_DESCRIPTION
                                })]
                            }), (0, r.jsx)(s.Clickable, {
                                onClick: a,
                                children: (0, r.jsx)(u.Z, {
                                    className: d().closeIcon,
                                    width: 16,
                                    height: 16
                                })
                            })]
                        })
                    }), (0, r.jsx)(s.ModalContent, {
                        children: (0, r.jsx)("div", {
                            className: d().options,
                            children: L.map((function(e) {
                                var n = e.text,
                                    t = e.value;
                                return (0, r.jsxs)("div", {
                                    className: i()(d().optionContainer, M({}, d().optionContainerOther, t === c.C2.OTHER)),
                                    children: [(0, r.jsxs)(s.Clickable, {
                                        className: d().optionText,
                                        onClick: function() {
                                            return N(t)
                                        },
                                        children: [(0, r.jsx)("div", {
                                            children: (0, r.jsx)(s.Checkbox, {
                                                type: s.Checkbox.Types.INVERTED,
                                                size: 20,
                                                value: O.includes(t),
                                                onChange: function() {
                                                    return N(t)
                                                }
                                            })
                                        }), (0, r.jsx)(s.Text, {
                                            variant: "text-md/medium",
                                            color: O.includes(t) ? "interactive-active" : "interactive-normal",
                                            children: n
                                        })]
                                    }), t === c.C2.OTHER && O.includes(c.C2.OTHER) && (0, r.jsx)("div", {
                                        className: d().textboxContainer,
                                        children: (0, r.jsx)(s.TextArea, {
                                            className: d().serverLockdownReasonText,
                                            placeholder: A.Z.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                                            onChange: function(e) {
                                                return h(e)
                                            },
                                            value: f,
                                            rows: 2,
                                            autoFocus: !0,
                                            flex: !0
                                        })
                                    })]
                                }, t)
                            }))
                        })
                    }), (0, r.jsx)(s.ModalFooter, {
                        children: (0, r.jsx)(s.Button, {
                            onClick: function() {
                                var e = {
                                    raid_lockdown_feedback_type: O,
                                    raid_lockdown_feedback_other_reason: f,
                                    guild_id: n
                                };
                                (0, _.yw)(E.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, e);
                                a()
                            },
                            color: s.Button.Colors.BRAND_NEW,
                            look: s.Button.Looks.FILLED,
                            submitting: !1,
                            children: A.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUBMIT
                        })
                    })]
                })
            }
        },
        65162: (e, n, t) => {
            t.d(n, {
                x2: () => r,
                wR: () => o,
                $l: () => a,
                J$: () => l,
                C2: () => i
            });
            var r, o, a, i;
            t(473708);
            ! function(e) {
                e.BUG = "BUG";
                e.ALLOWED = "ALLOWED";
                e.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION"
            }(r || (r = {}));
            ! function(e) {
                e.JOIN_RAID = "JOIN_RAID";
                e.MENTION_RAID = "MENTION_RAID"
            }(o || (o = {}));
            ! function(e) {
                e.LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY";
                e.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS";
                e.LEGITIMATE_DMS = "LEGITIMATE_DMS";
                e.DM_SPAM = "DM_SPAM";
                e.JOIN_RAID = "JOIN_RAID";
                e.OTHER = "OTHER"
            }(a || (a = {}));

            function l(e) {
                return e.includes(a.LEGITIMATE_ACTIVITY) ? a.LEGITIMATE_ACTIVITY : e.includes(a.DM_SPAM) ? a.DM_SPAM : e.includes(a.JOIN_RAID) ? a.JOIN_RAID : a.OTHER
            }! function(e) {
                e.DM_SPAM = "DM_SPAM";
                e.MENTION_SPAM = "MENTION_SPAM";
                e.CHANNEL_SPAM = "CHANNEL_SPAM";
                e.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS";
                e.CHANGING_SETTINGS = "CHANGING_SETTINGS";
                e.OTHER = "OTHER"
            }(i || (i = {}))
        }
    }
]);