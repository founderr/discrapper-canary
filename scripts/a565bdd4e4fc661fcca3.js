(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [74871], {
        725349: (n, i, e) => {
            n.exports = e.p + "ba5a7a6ae03572cf6b7dfa5d87700868.png"
        },
        521391: (n, i, e) => {
            "use strict";
            e.r(i);
            e.d(i, {
                default: () => G
            });
            var a, t = e(785893),
                s = e(667294),
                c = e(70418),
                o = e(396179),
                r = e(300177),
                l = e(136203),
                d = e(225646),
                u = e(3219),
                I = e(250666),
                A = e(64875),
                f = e(189865),
                x = e(963659),
                T = e(136317),
                m = e(994655),
                _ = e(155830),
                E = e(652591),
                p = e(120641),
                h = e(580567),
                S = e(588161),
                N = e(507850),
                C = e(2590),
                L = e(473708),
                y = e(819713),
                j = e.n(y);

            function v(n, i) {
                (null == i || i > n.length) && (i = n.length);
                for (var e = 0, a = new Array(i); e < i; e++) a[e] = n[e];
                return a
            }

            function g(n, i, e) {
                i in n ? Object.defineProperty(n, i, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[i] = e;
                return n
            }

            function k(n, i) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, i) {
                    var e = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != e) {
                        var a, t, s = [],
                            c = !0,
                            o = !1;
                        try {
                            for (e = e.call(n); !(c = (a = e.next()).done); c = !0) {
                                s.push(a.value);
                                if (i && s.length === i) break
                            }
                        } catch (n) {
                            o = !0;
                            t = n
                        } finally {
                            try {
                                c || null == e.return || e.return()
                            } finally {
                                if (o) throw t
                            }
                        }
                        return s
                    }
                }(n, i) || function(n, i) {
                    if (!n) return;
                    if ("string" == typeof n) return v(n, i);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === e && n.constructor && (e = n.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return v(n, i)
                }(n, i) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var U = (g(a = {}, p.Us.BAN, [u.Z, j().redIcon]), g(a, p.Us.GLOBAL_QUARANTINE, [_.Z, j().warningIcon]), g(a, p.Us.DISABLE_SUSPICIOUS_ACTIVITY, [_.Z, j().warningIcon]), g(a, p.Us.LIMITED_ACCESS, [A.Z, j().warningIcon]), g(a, p.Us.REQUIRE_VERIFICATION, [_.Z, j().warningIcon]), g(a, p.Us.TEMP_BAN, [A.Z, j().warningIcon]), g(a, p.Us.USER_MESSAGE_REMOVAL, [m.Z, j().redIcon]), g(a, p.Us.USER_SPAMMER, [_.Z, j().warningIcon]),
                    g(a, p.Us.USER_USERNAME_MANGLE, [f.Z, j().warningIcon]), g(a, p.Us.USER_WARNING, [I.Z, j().warningIcon]), a),
                R = _.Z,
                w = function(n) {
                    var i = n.classificationTypeText;
                    return (0, t.jsx)("div", {
                        className: j().classificationHeader,
                        children: (0, t.jsx)(c.Heading, {
                            variant: "heading-xl/normal",
                            children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER.format({
                                classification_type: i,
                                classificationHook: function(n, i) {
                                    return (0, t.jsx)("strong", {
                                        children: n
                                    }, i)
                                }
                            })
                        })
                    })
                },
                D = function(n) {
                    var i = n.actions;
                    return 0 === i.filter((function(n) {
                        return n.descriptions.length > 0
                    })).length ? null : (0, t.jsxs)("div", {
                        className: j().classificationActionsTakenContainer,
                        children: [(0, t.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
                        }), (0, t.jsx)("div", {
                            className: j().classificationActionsTakenCard,
                            children: i.map((function(n) {
                                return (0, t.jsx)(O, {
                                    action: n
                                }, n.id)
                            }))
                        })]
                    })
                },
                O = function(n) {
                    var i = n.action,
                        e = k(i.action_type in U ? U[i.action_type] : [R, j().warningIcon], 2),
                        a = e[0],
                        s = e[1];
                    return (0, t.jsx)(t.Fragment, {
                        children: i.descriptions.map((function(n, i) {
                            return (0, t.jsxs)("div", {
                                className: j().classificationActionsTakenRow,
                                children: [(0, t.jsx)("div", {
                                    className: j().classificationActionsTakenRowIcon,
                                    children: (0, t.jsx)(a, {
                                        className: s,
                                        width: 15,
                                        height: 15
                                    })
                                }), (0, t.jsx)(c.Text, {
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
                        e = n.policyExplainerLink;
                    return (0, t.jsxs)(c.Anchor, {
                        href: e,
                        className: j().classificationPolicyCard,
                        children: [(0, t.jsx)("div", {
                            className: j().classificationPolicyCardIcon,
                            children: (0, t.jsx)(x.Z, {
                                className: j().shieldIcon,
                                width: 32,
                                height: 32
                            })
                        }), (0, t.jsxs)("div", {
                            className: j().classificationPolicyDescriptionContainer,
                            children: [(0, t.jsx)(c.Text, {
                                variant: "text-md/bold",
                                children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
                                    classificationDescription: i
                                })
                            }), (0, t.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_SUBTEXT
                            })]
                        }), (0, t.jsx)("div", {
                            className: j().classificationPolicyLinkIcon,
                            children: (0, t.jsx)(T.Z, {
                                className: j().arrowIcon,
                                width: "24px",
                                height: "24px"
                            })
                        })]
                    })
                },
                M = function(n) {
                    var i = n.tosLink,
                        e = n.communityGuidelinesLink,
                        a = n.appealLink,
                        s = n.classificationTypeText,
                        o = n.policyExplainerLink;
                    return (0, t.jsxs)("div", {
                        className: j().classificationActionExplanationContainer,
                        children: [(0, t.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
                        }), (0, t.jsx)(c.Text, {
                            className: j().guidelinesExplanation,
                            variant: "text-sm/normal",
                            children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
                                tosLink: i,
                                communityGuidelinesLink: e
                            })
                        }), (0, t.jsx)(b, {
                            classificationTypeText: s,
                            policyExplainerLink: o
                        }), (0, t.jsx)("div", {
                            className: j().classificationLetUsKnowContainer,
                            children: (0, t.jsx)(c.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL.format({
                                    link: a
                                })
                            })
                        })]
                    })
                },
                Z = function(n) {
                    return (0, t.jsxs)("div", {
                        className: j().classificationContainer,
                        children: [(0, t.jsx)(w, {
                            classificationTypeText: n.classificationTypeText
                        }), (0, t.jsx)(D, {
                            actions: n.actions
                        }), (0, t.jsx)(M, {
                            appealLink: n.appealLink,
                            communityGuidelinesLink: n.communityGuidelinesLink,
                            tosLink: n.tosLink,
                            classificationTypeText: n.classificationTypeText,
                            policyExplainerLink: n.policyExplainerLink
                        })]
                    })
                };
            const F = function(n) {
                var i = n.classificationId,
                    e = n.source,
                    a = (0, S.YG)(i),
                    c = (0, h.P)();
                s.useEffect((function() {
                    E.default.track(C.rMx.SAFETY_HUB_ACTION, {
                        action: N.n0.ViewViolationDetail,
                        account_standing: c.state,
                        classification_ids: [Number(i)],
                        source: e
                    })
                }), []);
                return null == a ? null : (0, t.jsx)(Z, {
                    actions: a.actions,
                    classificationTypeText: a.description,
                    tosLink: N.sQ.TOS_LINK,
                    communityGuidelinesLink: N.sQ.COMMUNITY_GUIDELINES,
                    appealLink: N.sQ.APPEALS_LINK,
                    policyExplainerLink: a.explainer_link
                })
            };
            var P = e(835813),
                B = e.n(P),
                H = e(725349),
                Y = e.n(H);
            const G = function(n) {
                var i = n.transitionState,
                    e = n.onClose,
                    a = n.classificationId,
                    u = n.source,
                    I = (0, d.Z)(),
                    A = (0, l.e)();
                s.useEffect((function() {
                    A || r.y()
                }), [A]);
                return (0, t.jsxs)(c.ModalRoot, {
                    className: B().modalRoot,
                    transitionState: i,
                    children: [(0, t.jsxs)("div", {
                        className: B().modalHeader,
                        children: [(0, t.jsx)("img", {
                            className: B().image,
                            src: Y(),
                            alt: ""
                        }), (0, t.jsx)(c.ModalCloseButton, {
                            className: B().modalClose,
                            onClick: e
                        })]
                    }), (0, t.jsx)(c.ModalContent, {
                        className: B().modalContent,
                        children: I ? (0, t.jsx)(c.Spinner, {}) : (0, t.jsx)(F, {
                            classificationId: a,
                            source: u
                        })
                    }), (0, t.jsx)(c.ModalFooter, {
                        children: (0, t.jsx)(c.Button, {
                            className: B().button,
                            type: "button",
                            color: c.Button.Colors.BRAND,
                            onClick: function() {
                                e();
                                o.Z.open(C.oAB.PRIVACY_AND_SAFETY, N.SU.SUPPORT)
                            },
                            children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT
                        })
                    })]
                })
            }
        }
    }
]);