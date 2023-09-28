(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [74871], {
        725349: (n, i, e) => {
            n.exports = e.p + "abff1f7f1f1ebe33261ce595c4613042.png"
        },
        521391: (n, i, e) => {
            "use strict";
            e.r(i);
            e.d(i, {
                default: () => Y
            });
            var t, a = e(785893),
                s = e(667294),
                c = e(304548),
                r = e(300177),
                o = e(136203),
                l = e(225646),
                d = e(3219),
                u = e(250666),
                f = e(64875),
                x = e(155349),
                I = e(963659),
                A = e(136317),
                m = e(994655),
                T = e(973323),
                p = e(652591),
                E = e(120641),
                _ = e(580567),
                h = e(588161),
                N = e(507850),
                L = e(2590),
                S = e(473708),
                C = e(819713),
                y = e.n(C);

            function j(n, i) {
                (null == i || i > n.length) && (i = n.length);
                for (var e = 0, t = new Array(i); e < i; e++) t[e] = n[e];
                return t
            }

            function v(n, i, e) {
                i in n ? Object.defineProperty(n, i, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[i] = e;
                return n
            }

            function g(n, i) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, i) {
                    var e = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != e) {
                        var t, a, s = [],
                            c = !0,
                            r = !1;
                        try {
                            for (e = e.call(n); !(c = (t = e.next()).done); c = !0) {
                                s.push(t.value);
                                if (i && s.length === i) break
                            }
                        } catch (n) {
                            r = !0;
                            a = n
                        } finally {
                            try {
                                c || null == e.return || e.return()
                            } finally {
                                if (r) throw a
                            }
                        }
                        return s
                    }
                }(n, i) || function(n, i) {
                    if (!n) return;
                    if ("string" == typeof n) return j(n, i);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === e && n.constructor && (e = n.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return j(n, i)
                }(n, i) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = (v(t = {}, E.Us.BAN, [d.Z, y().redIcon]), v(t, E.Us.GLOBAL_QUARANTINE, [T.Z, y().warningIcon]), v(t, E.Us.DISABLE_SUSPICIOUS_ACTIVITY, [T.Z, y().warningIcon]), v(t, E.Us.LIMITED_ACCESS, [f.Z, y().warningIcon]), v(t, E.Us.REQUIRE_VERIFICATION, [T.Z, y().warningIcon]), v(t, E.Us.TEMP_BAN, [f.Z, y().warningIcon]), v(t, E.Us.USER_MESSAGE_REMOVAL, [m.Z, y().redIcon]), v(t, E.Us.USER_SPAMMER, [T.Z, y().warningIcon]),
                    v(t, E.Us.USER_USERNAME_MANGLE, [x.Z, y().warningIcon]), v(t, E.Us.USER_WARNING, [u.Z, y().warningIcon]), t),
                U = T.Z,
                w = function(n) {
                    var i = n.classificationTypeText;
                    return (0, a.jsx)("div", {
                        className: y().classificationHeader,
                        children: (0, a.jsx)(c.Heading, {
                            variant: "heading-xl/normal",
                            children: S.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER.format({
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
                        className: y().classificationActionsTakenContainer,
                        children: [(0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: S.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
                        }), (0, a.jsx)("div", {
                            className: y().classificationActionsTakenCard,
                            children: i.map((function(n) {
                                return (0, a.jsx)(b, {
                                    action: n
                                }, n.id)
                            }))
                        })]
                    })
                },
                b = function(n) {
                    var i = n.action,
                        e = g(i.action_type in k ? k[i.action_type] : [U, y().warningIcon], 2),
                        t = e[0],
                        s = e[1];
                    return (0, a.jsx)(a.Fragment, {
                        children: i.descriptions.map((function(n, i) {
                            return (0, a.jsxs)("div", {
                                className: y().classificationActionsTakenRow,
                                children: [(0, a.jsx)("div", {
                                    className: y().classificationActionsTakenRowIcon,
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
                M = function(n) {
                    var i = n.classificationTypeText,
                        e = n.policyExplainerLink;
                    return (0, a.jsxs)(c.Anchor, {
                        href: e,
                        className: y().classificationPolicyCard,
                        children: [(0, a.jsx)("div", {
                            className: y().classificationPolicyCardIcon,
                            children: (0, a.jsx)(I.Z, {
                                className: y().shieldIcon,
                                width: 32,
                                height: 32
                            })
                        }), (0, a.jsxs)("div", {
                            className: y().classificationPolicyDescriptionContainer,
                            children: [(0, a.jsx)(c.Text, {
                                variant: "text-md/bold",
                                children: S.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
                                    classificationDescription: i
                                })
                            }), (0, a.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: S.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_SUBTEXT
                            })]
                        }), (0, a.jsx)("div", {
                            className: y().classificationPolicyLinkIcon,
                            children: (0, a.jsx)(A.Z, {
                                className: y().arrowIcon,
                                width: "24px",
                                height: "24px"
                            })
                        })]
                    })
                },
                R = function(n) {
                    var i = n.tosLink,
                        e = n.communityGuidelinesLink,
                        t = n.appealLink,
                        s = n.classificationTypeText,
                        r = n.policyExplainerLink;
                    return (0, a.jsxs)("div", {
                        className: y().classificationActionExplanationContainer,
                        children: [(0, a.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: S.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
                        }), (0, a.jsx)(c.Text, {
                            className: y().guidelinesExplanation,
                            variant: "text-sm/normal",
                            children: S.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
                                tosLink: i,
                                communityGuidelinesLink: e
                            })
                        }), (0, a.jsx)(M, {
                            classificationTypeText: s,
                            policyExplainerLink: r
                        }), (0, a.jsx)("div", {
                            className: y().classificationLetUsKnowContainer,
                            children: (0, a.jsx)(c.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: S.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL.format({
                                    link: t
                                })
                            })
                        })]
                    })
                },
                D = function(n) {
                    return (0, a.jsxs)("div", {
                        className: y().classificationContainer,
                        children: [(0, a.jsx)(w, {
                            classificationTypeText: n.classificationTypeText
                        }), (0, a.jsx)(O, {
                            actions: n.actions
                        }), (0, a.jsx)(R, {
                            appealLink: n.appealLink,
                            communityGuidelinesLink: n.communityGuidelinesLink,
                            tosLink: n.tosLink,
                            classificationTypeText: n.classificationTypeText,
                            policyExplainerLink: n.policyExplainerLink
                        })]
                    })
                };
            const Z = function(n) {
                var i = n.classificationId,
                    e = n.source,
                    t = (0, h.YG)(i),
                    c = (0, _.P)();
                s.useEffect((function() {
                    p.default.track(L.rMx.SAFETY_HUB_ACTION, {
                        action: N.n0.ViewViolationDetail,
                        account_standing: c.state,
                        classification_ids: [Number(i)],
                        source: e
                    })
                }), []);
                return null == t ? null : (0, a.jsx)(D, {
                    actions: t.actions,
                    classificationTypeText: t.description,
                    tosLink: N.sQ.TOS_LINK,
                    communityGuidelinesLink: N.sQ.COMMUNITY_GUIDELINES,
                    appealLink: N.sQ.APPEALS_LINK,
                    policyExplainerLink: t.explainer_link
                })
            };
            var F = e(835813),
                P = e.n(F),
                B = e(725349),
                H = e.n(B);
            const Y = function(n) {
                var i = n.transitionState,
                    e = n.onClose,
                    t = n.classificationId,
                    d = n.source,
                    u = (0, l.Z)(),
                    f = (0, o.e)();
                s.useEffect((function() {
                    f || r.l()
                }), [f]);
                return (0, a.jsxs)(c.ModalRoot, {
                    className: P().modalRoot,
                    transitionState: i,
                    children: [(0, a.jsxs)("div", {
                        className: P().modalHeader,
                        children: [(0, a.jsx)("img", {
                            className: P().image,
                            src: H(),
                            alt: ""
                        }), (0, a.jsx)(c.ModalCloseButton, {
                            className: P().modalClose,
                            onClick: e
                        })]
                    }), (0, a.jsx)(c.ModalContent, {
                        className: P().modalContent,
                        children: u ? (0, a.jsx)(c.Spinner, {}) : (0, a.jsx)(Z, {
                            classificationId: t,
                            source: d
                        })
                    }), (0, a.jsx)(c.ModalFooter, {
                        children: (0, a.jsx)(c.Button, {
                            className: P().button,
                            type: "button",
                            color: c.Button.Colors.BRAND,
                            onClick: e,
                            children: S.Z.Messages.CLOSE
                        })
                    })]
                })
            }
        }
    }
]);