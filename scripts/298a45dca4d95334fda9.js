(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [74871], {
        725349: (n, i, t) => {
            n.exports = t.p + "abff1f7f1f1ebe33261ce595c4613042.png"
        },
        521391: (n, i, t) => {
            "use strict";
            t.r(i);
            t.d(i, {
                default: () => M
            });
            var a, e = t(785893),
                s = (t(667294), t(882723)),
                r = t(3219),
                c = t(911501),
                o = t(357566),
                l = t(189865),
                d = t(963659),
                u = t(136317),
                I = t(813749),
                f = t(155830),
                A = t(120641),
                m = t(588161),
                x = t(507850),
                T = t(473708),
                _ = t(446774),
                E = t.n(_);

            function h(n, i) {
                (null == i || i > n.length) && (i = n.length);
                for (var t = 0, a = new Array(i); t < i; t++) a[t] = n[t];
                return a
            }

            function p(n, i, t) {
                i in n ? Object.defineProperty(n, i, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[i] = t;
                return n
            }

            function N(n, i) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, i) {
                    var t = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var a, e, s = [],
                            r = !0,
                            c = !1;
                        try {
                            for (t = t.call(n); !(r = (a = t.next()).done); r = !0) {
                                s.push(a.value);
                                if (i && s.length === i) break
                            }
                        } catch (n) {
                            c = !0;
                            e = n
                        } finally {
                            try {
                                r || null == t.return || t.return()
                            } finally {
                                if (c) throw e
                            }
                        }
                        return s
                    }
                }(n, i) || function(n, i) {
                    if (!n) return;
                    if ("string" == typeof n) return h(n, i);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return h(n, i)
                }(n, i) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var C = (p(a = {}, A.Us.BAN, [r.Z, E().redIcon]), p(a, A.Us.GLOBAL_QUARANTINE, [f.Z, E().warningIcon]), p(a, A.Us.DISABLE_SUSPICIOUS_ACTIVITY, [f.Z, E().warningIcon]), p(a, A.Us.LIMITED_ACCESS, [o.Z, E().warningIcon]), p(a, A.Us.REQUIRE_VERIFICATION, [f.Z, E().warningIcon]), p(a, A.Us.TEMP_BAN, [o.Z, E().warningIcon]), p(a, A.Us.USER_MESSAGE_REMOVAL, [I.Z, E().redIcon]), p(a, A.Us.USER_SPAMMER, [f.Z, E().warningIcon]), p(a, A.Us.USER_USERNAME_MANGLE, [l.Z, E().warningIcon]),
                    p(a, A.Us.USER_WARNING, [c.Z, E().warningIcon]), a),
                S = f.Z,
                L = function(n) {
                    var i = n.classificationTypeText;
                    return (0, e.jsx)("div", {
                        className: E().classificationHeader,
                        children: (0, e.jsx)(s.Heading, {
                            variant: "heading-xl/normal",
                            children: T.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER.format({
                                classification_type: i,
                                classificationHook: function(n, i) {
                                    return (0, e.jsx)("strong", {
                                        children: n
                                    }, i)
                                }
                            })
                        })
                    })
                },
                j = function(n) {
                    var i = n.actions;
                    return 0 === i.filter((function(n) {
                        return n.descriptions.length > 0
                    })).length ? null : (0, e.jsxs)("div", {
                        className: E().classificationActionsTakenContainer,
                        children: [(0, e.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: T.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
                        }), (0, e.jsx)("div", {
                            className: E().classificationActionsTakenCard,
                            children: i.map((function(n) {
                                return (0, e.jsx)(y, {
                                    action: n
                                }, n.id)
                            }))
                        })]
                    })
                },
                y = function(n) {
                    var i = n.action,
                        t = N(i.action_type in C ? C[i.action_type] : [S, E().warningIcon], 2),
                        a = t[0],
                        r = t[1];
                    return (0, e.jsx)(e.Fragment, {
                        children: i.descriptions.map((function(n, i) {
                            return (0, e.jsxs)("div", {
                                className: E().classificationActionsTakenRow,
                                children: [(0, e.jsx)("div", {
                                    className: E().classificationActionsTakenRowIcon,
                                    children: (0, e.jsx)(a, {
                                        className: r,
                                        width: 15,
                                        height: 15
                                    })
                                }), (0, e.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "interactive-normal",
                                    children: n
                                })]
                            }, i)
                        }))
                    })
                },
                v = function(n) {
                    var i = n.classificationTypeText;
                    return (0, e.jsxs)("div", {
                        className: E().classificationPolicyCard,
                        children: [(0, e.jsx)("div", {
                            className: E().classificationPolicyCardIcon,
                            children: (0, e.jsx)(d.Z, {
                                className: E().shieldIcon,
                                width: 32,
                                height: 32
                            })
                        }), (0, e.jsxs)("div", {
                            className: E().classificationPolicyDescriptionContainer,
                            children: [(0, e.jsx)(s.Text, {
                                variant: "text-md/bold",
                                children: T.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
                                    classificationDescription: i
                                })
                            }), (0, e.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: T.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_SUBTEXT
                            })]
                        }), (0, e.jsx)("div", {
                            className: E().classificationPolicyLinkIcon,
                            children: (0, e.jsx)(u.Z, {
                                className: E().arrowIcon,
                                width: "24px",
                                height: "24px"
                            })
                        })]
                    })
                },
                g = function(n) {
                    var i = n.tosLink,
                        t = n.communityGuidelinesLink,
                        a = n.appealLink,
                        r = n.classificationTypeText;
                    return (0, e.jsxs)("div", {
                        className: E().classificationActionExplanationContainer,
                        children: [(0, e.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: T.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
                        }), (0, e.jsx)(s.Text, {
                            className: E().guidelinesExplanation,
                            variant: "text-sm/normal",
                            children: T.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
                                tosLink: i,
                                communityGuidelinesLink: t
                            })
                        }), (0, e.jsx)(v, {
                            classificationTypeText: r
                        }), (0, e.jsx)("div", {
                            className: E().classificationLetUsKnowContainer,
                            children: (0, e.jsx)(s.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: T.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL.format({
                                    link: a
                                })
                            })
                        })]
                    })
                },
                U = function(n) {
                    return (0, e.jsxs)("div", {
                        className: E().classificationContainer,
                        children: [(0, e.jsx)(L, {
                            classificationTypeText: n.classificationTypeText
                        }), (0, e.jsx)(j, {
                            actions: n.actions
                        }), (0, e.jsx)(g, {
                            appealLink: n.appealLink,
                            communityGuidelinesLink: n.communityGuidelinesLink,
                            tosLink: n.tosLink,
                            classificationTypeText: n.classificationTypeText
                        })]
                    })
                };
            const k = function(n) {
                var i = n.classificationId,
                    t = (0, m.Y)(i);
                return null == t ? null : (0, e.jsx)(U, {
                    actions: t.actions,
                    classificationTypeText: t.description,
                    tosLink: x.sQ.TOS_LINK,
                    communityGuidelinesLink: x.sQ.COMMUNITY_GUIDELINES,
                    appealLink: x.sQ.APPEALS_LINK
                })
            };
            var w = t(470762),
                O = t.n(w),
                R = t(725349),
                b = t.n(R);
            const M = function(n) {
                var i = n.transitionState,
                    t = n.onClose,
                    a = n.classificationId;
                return (0, e.jsxs)(s.ModalRoot, {
                    className: O().modalRoot,
                    transitionState: i,
                    children: [(0, e.jsxs)("div", {
                        className: O().modalHeader,
                        children: [(0, e.jsx)("img", {
                            className: O().image,
                            src: b(),
                            alt: ""
                        }), (0, e.jsx)(s.ModalCloseButton, {
                            className: O().modalClose,
                            onClick: t
                        })]
                    }), (0, e.jsx)(s.ModalContent, {
                        className: O().modalContent,
                        children: (0, e.jsx)(k, {
                            classificationId: a
                        })
                    }), (0, e.jsx)(s.ModalFooter, {
                        children: (0, e.jsx)(s.Button, {
                            className: O().button,
                            type: "button",
                            color: s.Button.Colors.BRAND,
                            onClick: t,
                            children: T.Z.Messages.CLOSE
                        })
                    })]
                })
            }
        }
    }
]);