(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [74871], {
        725349: (n, i, t) => {
            n.exports = t.p + "abff1f7f1f1ebe33261ce595c4613042.png"
        },
        521391: (n, i, t) => {
            "use strict";
            t.r(i);
            t.d(i, {
                default: () => P
            });
            var a, e = t(785893),
                s = t(667294),
                c = t(882723),
                o = t(3219),
                r = t(250666),
                l = t(64875),
                d = t(155349),
                u = t(963659),
                f = t(136317),
                I = t(994655),
                A = t(973323),
                m = t(652591),
                x = t(120641),
                T = t(580567),
                _ = t(588161),
                E = t(507850),
                h = t(2590),
                N = t(473708),
                p = t(446774),
                C = t.n(p);

            function S(n, i) {
                (null == i || i > n.length) && (i = n.length);
                for (var t = 0, a = new Array(i); t < i; t++) a[t] = n[t];
                return a
            }

            function L(n, i, t) {
                i in n ? Object.defineProperty(n, i, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[i] = t;
                return n
            }

            function j(n, i) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, i) {
                    var t = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var a, e, s = [],
                            c = !0,
                            o = !1;
                        try {
                            for (t = t.call(n); !(c = (a = t.next()).done); c = !0) {
                                s.push(a.value);
                                if (i && s.length === i) break
                            }
                        } catch (n) {
                            o = !0;
                            e = n
                        } finally {
                            try {
                                c || null == t.return || t.return()
                            } finally {
                                if (o) throw e
                            }
                        }
                        return s
                    }
                }(n, i) || function(n, i) {
                    if (!n) return;
                    if ("string" == typeof n) return S(n, i);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return S(n, i)
                }(n, i) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var y = (L(a = {}, x.Us.BAN, [o.Z, C().redIcon]), L(a, x.Us.GLOBAL_QUARANTINE, [A.Z, C().warningIcon]), L(a, x.Us.DISABLE_SUSPICIOUS_ACTIVITY, [A.Z, C().warningIcon]), L(a, x.Us.LIMITED_ACCESS, [l.Z, C().warningIcon]), L(a, x.Us.REQUIRE_VERIFICATION, [A.Z, C().warningIcon]), L(a, x.Us.TEMP_BAN, [l.Z, C().warningIcon]), L(a, x.Us.USER_MESSAGE_REMOVAL, [I.Z, C().redIcon]), L(a, x.Us.USER_SPAMMER, [A.Z, C().warningIcon]), L(a, x.Us.USER_USERNAME_MANGLE, [d.Z, C().warningIcon]),
                    L(a, x.Us.USER_WARNING, [r.Z, C().warningIcon]), a),
                v = A.Z,
                g = function(n) {
                    var i = n.classificationTypeText;
                    return (0, e.jsx)("div", {
                        className: C().classificationHeader,
                        children: (0, e.jsx)(c.Heading, {
                            variant: "heading-xl/normal",
                            children: N.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER.format({
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
                U = function(n) {
                    var i = n.actions;
                    return 0 === i.filter((function(n) {
                        return n.descriptions.length > 0
                    })).length ? null : (0, e.jsxs)("div", {
                        className: C().classificationActionsTakenContainer,
                        children: [(0, e.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: N.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
                        }), (0, e.jsx)("div", {
                            className: C().classificationActionsTakenCard,
                            children: i.map((function(n) {
                                return (0, e.jsx)(k, {
                                    action: n
                                }, n.id)
                            }))
                        })]
                    })
                },
                k = function(n) {
                    var i = n.action,
                        t = j(i.action_type in y ? y[i.action_type] : [v, C().warningIcon], 2),
                        a = t[0],
                        s = t[1];
                    return (0, e.jsx)(e.Fragment, {
                        children: i.descriptions.map((function(n, i) {
                            return (0, e.jsxs)("div", {
                                className: C().classificationActionsTakenRow,
                                children: [(0, e.jsx)("div", {
                                    className: C().classificationActionsTakenRowIcon,
                                    children: (0, e.jsx)(a, {
                                        className: s,
                                        width: 15,
                                        height: 15
                                    })
                                }), (0, e.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "interactive-normal",
                                    children: n
                                })]
                            }, i)
                        }))
                    })
                },
                w = function(n) {
                    var i = n.classificationTypeText;
                    return (0, e.jsxs)("div", {
                        className: C().classificationPolicyCard,
                        children: [(0, e.jsx)("div", {
                            className: C().classificationPolicyCardIcon,
                            children: (0, e.jsx)(u.Z, {
                                className: C().shieldIcon,
                                width: 32,
                                height: 32
                            })
                        }), (0, e.jsxs)("div", {
                            className: C().classificationPolicyDescriptionContainer,
                            children: [(0, e.jsx)(c.Text, {
                                variant: "text-md/bold",
                                children: N.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
                                    classificationDescription: i
                                })
                            }), (0, e.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: N.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_SUBTEXT
                            })]
                        }), (0, e.jsx)("div", {
                            className: C().classificationPolicyLinkIcon,
                            children: (0, e.jsx)(f.Z, {
                                className: C().arrowIcon,
                                width: "24px",
                                height: "24px"
                            })
                        })]
                    })
                },
                O = function(n) {
                    var i = n.tosLink,
                        t = n.communityGuidelinesLink,
                        a = n.appealLink,
                        s = n.classificationTypeText;
                    return (0, e.jsxs)("div", {
                        className: C().classificationActionExplanationContainer,
                        children: [(0, e.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: N.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
                        }), (0, e.jsx)(c.Text, {
                            className: C().guidelinesExplanation,
                            variant: "text-sm/normal",
                            children: N.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
                                tosLink: i,
                                communityGuidelinesLink: t
                            })
                        }), (0, e.jsx)(w, {
                            classificationTypeText: s
                        }), (0, e.jsx)("div", {
                            className: C().classificationLetUsKnowContainer,
                            children: (0, e.jsx)(c.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: N.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL.format({
                                    link: a
                                })
                            })
                        })]
                    })
                },
                b = function(n) {
                    return (0, e.jsxs)("div", {
                        className: C().classificationContainer,
                        children: [(0, e.jsx)(g, {
                            classificationTypeText: n.classificationTypeText
                        }), (0, e.jsx)(U, {
                            actions: n.actions
                        }), (0, e.jsx)(O, {
                            appealLink: n.appealLink,
                            communityGuidelinesLink: n.communityGuidelinesLink,
                            tosLink: n.tosLink,
                            classificationTypeText: n.classificationTypeText
                        })]
                    })
                };
            const M = function(n) {
                var i = n.classificationId,
                    t = n.source,
                    a = (0, _.Y)(i),
                    c = (0, T.P)();
                s.useEffect((function() {
                    m.default.track(h.rMx.SAFETY_HUB_ACTION, {
                        action: E.n0.ViewViolationDetail,
                        account_standing: c.state,
                        classification_ids: [Number(i)],
                        source: t
                    })
                }), []);
                return null == a ? null : (0, e.jsx)(b, {
                    actions: a.actions,
                    classificationTypeText: a.description,
                    tosLink: E.sQ.TOS_LINK,
                    communityGuidelinesLink: E.sQ.COMMUNITY_GUIDELINES,
                    appealLink: E.sQ.APPEALS_LINK
                })
            };
            var R = t(470762),
                D = t.n(R),
                Z = t(725349),
                F = t.n(Z);
            const P = function(n) {
                var i = n.transitionState,
                    t = n.onClose,
                    a = n.classificationId,
                    s = n.source;
                return (0, e.jsxs)(c.ModalRoot, {
                    className: D().modalRoot,
                    transitionState: i,
                    children: [(0, e.jsxs)("div", {
                        className: D().modalHeader,
                        children: [(0, e.jsx)("img", {
                            className: D().image,
                            src: F(),
                            alt: ""
                        }), (0, e.jsx)(c.ModalCloseButton, {
                            className: D().modalClose,
                            onClick: t
                        })]
                    }), (0, e.jsx)(c.ModalContent, {
                        className: D().modalContent,
                        children: (0, e.jsx)(M, {
                            classificationId: a,
                            source: s
                        })
                    }), (0, e.jsx)(c.ModalFooter, {
                        children: (0, e.jsx)(c.Button, {
                            className: D().button,
                            type: "button",
                            color: c.Button.Colors.BRAND,
                            onClick: t,
                            children: N.Z.Messages.CLOSE
                        })
                    })]
                })
            }
        }
    }
]);