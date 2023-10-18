(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [74871], {
        725349: (n, i, t) => {
            n.exports = t.p + "ba5a7a6ae03572cf6b7dfa5d87700868.png"
        },
        521391: (n, i, t) => {
            "use strict";
            t.r(i);
            t.d(i, {
                default: () => G
            });
            var e, a = t(785893),
                s = t(667294),
                c = t(70418),
                o = t(396179),
                r = t(300177),
                l = t(136203),
                u = t(225646),
                d = t(3219),
                A = t(250666),
                f = t(64875),
                I = t(189865),
                x = t(963659),
                T = t(136317),
                _ = t(994655),
                m = t(155830),
                E = t(652591),
                p = t(120641),
                C = t(580567),
                N = t(588161),
                h = t(507850),
                S = t(2590),
                L = t(473708),
                y = t(819713),
                j = t.n(y);

            function k(n, i) {
                (null == i || i > n.length) && (i = n.length);
                for (var t = 0, e = new Array(i); t < i; t++) e[t] = n[t];
                return e
            }

            function U(n, i, t) {
                i in n ? Object.defineProperty(n, i, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[i] = t;
                return n
            }

            function g(n, i) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, i) {
                    var t = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var e, a, s = [],
                            c = !0,
                            o = !1;
                        try {
                            for (t = t.call(n); !(c = (e = t.next()).done); c = !0) {
                                s.push(e.value);
                                if (i && s.length === i) break
                            }
                        } catch (n) {
                            o = !0;
                            a = n
                        } finally {
                            try {
                                c || null == t.return || t.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return s
                    }
                }(n, i) || function(n, i) {
                    if (!n) return;
                    if ("string" == typeof n) return k(n, i);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return k(n, i)
                }(n, i) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = (U(e = {}, p.Us.BAN, [d.Z, j().redIcon]), U(e, p.Us.GLOBAL_QUARANTINE, [m.Z, j().warningIcon]), U(e, p.Us.DISABLE_SUSPICIOUS_ACTIVITY, [m.Z, j().warningIcon]), U(e, p.Us.LIMITED_ACCESS, [f.Z, j().warningIcon]), U(e, p.Us.REQUIRE_VERIFICATION, [m.Z, j().warningIcon]), U(e, p.Us.TEMP_BAN, [f.Z, j().warningIcon]), U(e, p.Us.USER_MESSAGE_REMOVAL, [_.Z, j().redIcon]), U(e, p.Us.USER_SPAMMER, [m.Z, j().warningIcon]),
                    U(e, p.Us.USER_USERNAME_MANGLE, [I.Z, j().warningIcon]), U(e, p.Us.USER_WARNING, [A.Z, j().warningIcon]), e),
                w = m.Z,
                D = function(n) {
                    var i = n.classificationTypeText;
                    return (0, a.jsx)("div", {
                        className: j().classificationHeader,
                        children: (0, a.jsx)(c.Heading, {
                            variant: "heading-xl/normal",
                            children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format({
                                classification_type: i,
                                classificationHook: function(n, i) {
                                    return (0, a.jsx)("strong", {
                                        children: n
                                    }, i)
                                }
                            })
                        })
                    })
                },
                O = function(n) {
                    var i = n.actions;
                    return 0 === i.filter((function(n) {
                        return n.descriptions.length > 0
                    })).length ? null : (0, a.jsxs)("div", {
                        className: j().classificationActionsTakenContainer,
                        children: [(0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
                        }), (0, a.jsx)("div", {
                            className: j().classificationActionsTakenCard,
                            children: i.map((function(n) {
                                return (0, a.jsx)(R, {
                                    action: n
                                }, n.id)
                            }))
                        })]
                    })
                },
                R = function(n) {
                    var i = n.action,
                        t = g(i.action_type in v ? v[i.action_type] : [w, j().warningIcon], 2),
                        e = t[0],
                        s = t[1];
                    return (0, a.jsx)(a.Fragment, {
                        children: i.descriptions.map((function(n, i) {
                            return (0, a.jsxs)("div", {
                                className: j().classificationActionsTakenRow,
                                children: [(0, a.jsx)("div", {
                                    className: j().classificationActionsTakenRowIcon,
                                    children: (0, a.jsx)(e, {
                                        className: s,
                                        width: 15,
                                        height: 15
                                    })
                                }), (0, a.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "interactive-normal",
                                    children: n
                                })]
                            }, i)
                        }))
                    })
                },
                b = function(n) {
                    var i = n.classificationTypeText,
                        t = n.policyExplainerLink;
                    return (0, a.jsxs)(c.Anchor, {
                        href: t,
                        className: j().classificationPolicyCard,
                        children: [(0, a.jsx)("div", {
                            className: j().classificationPolicyCardIcon,
                            children: (0, a.jsx)(x.Z, {
                                className: j().shieldIcon,
                                width: 32,
                                height: 32
                            })
                        }), (0, a.jsxs)("div", {
                            className: j().classificationPolicyDescriptionContainer,
                            children: [(0, a.jsx)(c.Text, {
                                variant: "text-md/bold",
                                children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
                                    classificationDescription: i
                                })
                            }), (0, a.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_SUBTEXT
                            })]
                        }), (0, a.jsx)("div", {
                            className: j().classificationPolicyLinkIcon,
                            children: (0, a.jsx)(T.Z, {
                                className: j().arrowIcon,
                                width: "24px",
                                height: "24px"
                            })
                        })]
                    })
                },
                M = function(n) {
                    var i = n.tosLink,
                        t = n.communityGuidelinesLink,
                        e = n.appealLink,
                        s = n.classificationTypeText,
                        o = n.policyExplainerLink,
                        r = n.letUsKnowClick;
                    return (0, a.jsxs)("div", {
                        className: j().classificationActionExplanationContainer,
                        children: [(0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
                        }), (0, a.jsx)(c.Text, {
                            className: j().guidelinesExplanation,
                            variant: "text-sm/normal",
                            children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
                                tosLink: i,
                                communityGuidelinesLink: t
                            })
                        }), (0, a.jsx)(b, {
                            classificationTypeText: s,
                            policyExplainerLink: o
                        }), (0, a.jsx)("div", {
                            className: j().classificationLetUsKnowContainer,
                            children: (0, a.jsx)(c.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
                                    letUsKnowHook: function(n, i) {
                                        return (0, a.jsx)(c.Anchor, {
                                            href: e,
                                            onClick: r,
                                            children: n
                                        }, i)
                                    }
                                })
                            })
                        })]
                    })
                },
                Z = function(n) {
                    return (0, a.jsxs)("div", {
                        className: j().classificationContainer,
                        children: [(0, a.jsx)(D, {
                            classificationTypeText: n.classificationTypeText
                        }), (0, a.jsx)(O, {
                            actions: n.actions
                        }), (0, a.jsx)(M, {
                            appealLink: n.appealLink,
                            communityGuidelinesLink: n.communityGuidelinesLink,
                            tosLink: n.tosLink,
                            classificationTypeText: n.classificationTypeText,
                            policyExplainerLink: n.policyExplainerLink,
                            letUsKnowClick: n.letUsKnowClick
                        })]
                    })
                };
            const F = function(n) {
                var i = n.classificationId,
                    t = n.source,
                    e = (0, N.YG)(i),
                    c = (0, C.P)();
                s.useEffect((function() {
                    E.default.track(S.rMx.SAFETY_HUB_ACTION, {
                        action: h.n0.ViewViolationDetail,
                        account_standing: c.state,
                        classification_ids: [Number(i)],
                        source: t
                    })
                }), []);
                return null == e ? null : (0, a.jsx)(Z, {
                    actions: e.actions,
                    classificationTypeText: e.description,
                    tosLink: h.sQ.TOS_LINK,
                    communityGuidelinesLink: h.sQ.COMMUNITY_GUIDELINES,
                    appealLink: h.sQ.APPEALS_LINK,
                    policyExplainerLink: e.explainer_link,
                    letUsKnowClick: function() {
                        E.default.track(S.rMx.SAFETY_HUB_ACTION, {
                            action: h.n0.ClickLetUsKnow,
                            account_standing: c.state,
                            classification_ids: [Number(i)],
                            source: t
                        })
                    }
                })
            };
            var B = t(835813),
                H = t.n(B),
                P = t(725349),
                Y = t.n(P);
            const G = function(n) {
                var i = n.transitionState,
                    t = n.onClose,
                    e = n.classificationId,
                    d = n.source,
                    A = (0, u.Z)(),
                    f = (0, l.e)();
                s.useEffect((function() {
                    f || r.y()
                }), [f]);
                return (0, a.jsxs)(c.ModalRoot, {
                    className: H().modalRoot,
                    transitionState: i,
                    children: [(0, a.jsxs)("div", {
                        className: H().modalHeader,
                        children: [(0, a.jsx)("img", {
                            className: H().image,
                            src: Y(),
                            alt: ""
                        }), (0, a.jsx)(c.ModalCloseButton, {
                            className: H().modalClose,
                            onClick: t
                        })]
                    }), (0, a.jsx)(c.ModalContent, {
                        className: H().modalContent,
                        children: A ? (0, a.jsx)(c.Spinner, {}) : (0, a.jsx)(F, {
                            classificationId: e,
                            source: d
                        })
                    }), (0, a.jsx)(c.ModalFooter, {
                        children: (0, a.jsx)(c.Button, {
                            className: H().button,
                            type: "button",
                            color: c.Button.Colors.BRAND,
                            onClick: function() {
                                t();
                                o.Z.open(S.oAB.PRIVACY_AND_SAFETY, h.SU.ACCOUNT_STANDING)
                            },
                            children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT
                        })
                    })]
                })
            }
        }
    }
]);