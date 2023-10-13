(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [74871], {
        725349: (n, i, e) => {
            n.exports = e.p + "abff1f7f1f1ebe33261ce595c4613042.png"
        },
        521391: (n, i, e) => {
            "use strict";
            e.r(i);
            e.d(i, {
                default: () => G
            });
            var t, a = e(785893),
                s = e(667294),
                c = e(304548),
                o = e(396179),
                r = e(300177),
                l = e(136203),
                u = e(225646),
                d = e(3219),
                f = e(250666),
                I = e(64875),
                A = e(189865),
                x = e(963659),
                T = e(136317),
                m = e(994655),
                _ = e(973323),
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
                for (var e = 0, t = new Array(i); e < i; e++) t[e] = n[e];
                return t
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
                        var t, a, s = [],
                            c = !0,
                            o = !1;
                        try {
                            for (e = e.call(n); !(c = (t = e.next()).done); c = !0) {
                                s.push(t.value);
                                if (i && s.length === i) break
                            }
                        } catch (n) {
                            o = !0;
                            a = n
                        } finally {
                            try {
                                c || null == e.return || e.return()
                            } finally {
                                if (o) throw a
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
            var U = (g(t = {}, p.Us.BAN, [d.Z, j().redIcon]), g(t, p.Us.GLOBAL_QUARANTINE, [_.Z, j().warningIcon]), g(t, p.Us.DISABLE_SUSPICIOUS_ACTIVITY, [_.Z, j().warningIcon]), g(t, p.Us.LIMITED_ACCESS, [I.Z, j().warningIcon]), g(t, p.Us.REQUIRE_VERIFICATION, [_.Z, j().warningIcon]), g(t, p.Us.TEMP_BAN, [I.Z, j().warningIcon]), g(t, p.Us.USER_MESSAGE_REMOVAL, [m.Z, j().redIcon]), g(t, p.Us.USER_SPAMMER, [_.Z, j().warningIcon]),
                    g(t, p.Us.USER_USERNAME_MANGLE, [A.Z, j().warningIcon]), g(t, p.Us.USER_WARNING, [f.Z, j().warningIcon]), t),
                R = _.Z,
                w = function(n) {
                    var i = n.classificationTypeText;
                    return (0, a.jsx)("div", {
                        className: j().classificationHeader,
                        children: (0, a.jsx)(c.Heading, {
                            variant: "heading-xl/normal",
                            children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER.format({
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
                D = function(n) {
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
                                return (0, a.jsx)(O, {
                                    action: n
                                }, n.id)
                            }))
                        })]
                    })
                },
                O = function(n) {
                    var i = n.action,
                        e = k(i.action_type in U ? U[i.action_type] : [R, j().warningIcon], 2),
                        t = e[0],
                        s = e[1];
                    return (0, a.jsx)(a.Fragment, {
                        children: i.descriptions.map((function(n, i) {
                            return (0, a.jsxs)("div", {
                                className: j().classificationActionsTakenRow,
                                children: [(0, a.jsx)("div", {
                                    className: j().classificationActionsTakenRowIcon,
                                    children: (0, a.jsx)(t, {
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
                        e = n.policyExplainerLink;
                    return (0, a.jsxs)(c.Anchor, {
                        href: e,
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
                        e = n.communityGuidelinesLink,
                        t = n.appealLink,
                        s = n.classificationTypeText,
                        o = n.policyExplainerLink;
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
                                communityGuidelinesLink: e
                            })
                        }), (0, a.jsx)(b, {
                            classificationTypeText: s,
                            policyExplainerLink: o
                        }), (0, a.jsx)("div", {
                            className: j().classificationLetUsKnowContainer,
                            children: (0, a.jsx)(c.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: L.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL.format({
                                    link: t
                                })
                            })
                        })]
                    })
                },
                Z = function(n) {
                    return (0, a.jsxs)("div", {
                        className: j().classificationContainer,
                        children: [(0, a.jsx)(w, {
                            classificationTypeText: n.classificationTypeText
                        }), (0, a.jsx)(D, {
                            actions: n.actions
                        }), (0, a.jsx)(M, {
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
                    t = (0, S.YG)(i),
                    c = (0, h.P)();
                s.useEffect((function() {
                    E.default.track(C.rMx.SAFETY_HUB_ACTION, {
                        action: N.n0.ViewViolationDetail,
                        account_standing: c.state,
                        classification_ids: [Number(i)],
                        source: e
                    })
                }), []);
                return null == t ? null : (0, a.jsx)(Z, {
                    actions: t.actions,
                    classificationTypeText: t.description,
                    tosLink: N.sQ.TOS_LINK,
                    communityGuidelinesLink: N.sQ.COMMUNITY_GUIDELINES,
                    appealLink: N.sQ.APPEALS_LINK,
                    policyExplainerLink: t.explainer_link
                })
            };
            var P = e(835813),
                B = e.n(P),
                H = e(725349),
                Y = e.n(H);
            const G = function(n) {
                var i = n.transitionState,
                    e = n.onClose,
                    t = n.classificationId,
                    d = n.source,
                    f = (0, u.Z)(),
                    I = (0, l.e)();
                s.useEffect((function() {
                    I || r.y()
                }), [I]);
                return (0, a.jsxs)(c.ModalRoot, {
                    className: B().modalRoot,
                    transitionState: i,
                    children: [(0, a.jsxs)("div", {
                        className: B().modalHeader,
                        children: [(0, a.jsx)("img", {
                            className: B().image,
                            src: Y(),
                            alt: ""
                        }), (0, a.jsx)(c.ModalCloseButton, {
                            className: B().modalClose,
                            onClick: e
                        })]
                    }), (0, a.jsx)(c.ModalContent, {
                        className: B().modalContent,
                        children: f ? (0, a.jsx)(c.Spinner, {}) : (0, a.jsx)(F, {
                            classificationId: t,
                            source: d
                        })
                    }), (0, a.jsx)(c.ModalFooter, {
                        children: (0, a.jsx)(c.Button, {
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