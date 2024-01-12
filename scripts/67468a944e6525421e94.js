(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["89407"], {
        775032: function(e, l, s) {
            "use strict";
            s.r(l), s.d(l, {
                default: function() {
                    return n
                }
            });
            var t = s("446674"),
                a = s("697218");

            function n() {
                let e = (0, t.useStateFromStores)([a.default], () => {
                    var e;
                    return null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
                });
                return e
            }
        },
        124539: function(e, l, s) {
            "use strict";
            s.r(l), s.d(l, {
                default: function() {
                    return c
                }
            });
            var t = s("37983");
            s("884691");
            var a = s("414456"),
                n = s.n(a),
                i = s("77078"),
                d = s("145131"),
                o = s("782340"),
                r = s("434848");

            function c(e) {
                let {
                    isDsaEligible: l = !1,
                    className: s,
                    onClose: a,
                    onNext: c,
                    onBack: u
                } = e;
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)(i.ModalHeader, {
                        direction: d.default.Direction.VERTICAL,
                        className: r.header,
                        separator: !1,
                        children: [(0, t.jsx)(i.Heading, {
                            className: r.title,
                            variant: "heading-xl/semibold",
                            children: o.default.Messages.GUILD_CREATE_TITLE
                        }), (0, t.jsx)(i.Text, {
                            className: r.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: o.default.Messages.NUF_DESKTOP_TEMPLATES_SUBTITLE
                        }), null != a && (0, t.jsx)(i.ModalCloseButton, {
                            className: r.closeButton,
                            onClick: a
                        })]
                    }), (0, t.jsx)(i.ModalContent, {
                        className: n(r.templatesList, s),
                        paddingFix: !1,
                        children: (0, t.jsx)(i.Text, {
                            className: r.optionHeader,
                            color: "header-secondary",
                            variant: "text-xs/bold",
                            children: o.default.Messages.GUILD_TEMPLATE_SELECTOR_OPTION_HEADER
                        })
                    }), (0, t.jsxs)(i.ModalFooter, {
                        children: [(0, t.jsx)(i.Button, {
                            onClick: c,
                            color: i.Button.Colors.BRAND,
                            children: o.default.Messages.NEXT
                        }), l && (0, t.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.PRIMARY,
                            onClick: u,
                            children: o.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        795010: function(e, l, s) {
            "use strict";
            s.r(l), s.d(l, {
                default: function() {
                    return d
                }
            });
            var t = s("37983");
            s("884691");
            var a = s("77078"),
                n = s("461380"),
                i = s("30679");

            function d(e) {
                let {
                    url: l,
                    text: s
                } = e;
                return (0, t.jsx)(a.Anchor, {
                    href: l,
                    className: i.externalLinkWrapper,
                    children: (0, t.jsxs)(a.Clickable, {
                        className: i.childButton,
                        children: [(0, t.jsx)(a.Text, {
                            className: i.childText,
                            variant: "text-md/semibold",
                            children: s
                        }), (0, t.jsx)(n.default, {
                            className: i.childIcon,
                            direction: n.default.Directions.RIGHT
                        })]
                    })
                })
            }
        },
        574811: function(e, l, s) {
            "use strict";
            s.r(l), s.d(l, {
                default: function() {
                    return E
                }
            }), s("222007");
            var t = s("37983"),
                a = s("884691"),
                n = s("77078"),
                i = s("775032"),
                d = s("698609"),
                o = s("124539"),
                r = s("57242"),
                c = s("299738"),
                u = s("170213"),
                x = s("701098");

            function E(e) {
                let {
                    classificationId: l,
                    transitionState: s,
                    initialSlide: E = u.AppealIngestionSlideTypes.SPEED_BUMP,
                    onClose: f
                } = e, [_, N] = a.useState(E), S = !1 === (0, i.default)(), {
                    classification: A,
                    isDsaEligible: T
                } = (0, d.useSafetyHubClassification)(null != l ? l : "");
                a.useEffect(() => {
                    T ? N(E) : N(u.AppealIngestionSlideTypes.COLLECT_SIGNAL)
                }, [N, E, T]);
                let h = a.useCallback(() => {
                        r.default.close(), f()
                    }, [f]),
                    I = a.useCallback(() => {
                        var e, l;
                        let s = null;
                        (s = T ? null === (e = u.SlidesOrderDsaEligible[_]) || void 0 === e ? void 0 : e.next : null === (l = u.SlidesOrderNonDsaEligible[_]) || void 0 === l ? void 0 : l.next) ? N(s): h()
                    }, [_, T, h]),
                    p = a.useCallback(() => {
                        var e, l;
                        let s;
                        (s = T ? null === (e = u.SlidesOrderDsaEligible[_]) || void 0 === e ? void 0 : e.prev : null === (l = u.SlidesOrderNonDsaEligible[_]) || void 0 === l ? void 0 : l.prev) ? N(s): h()
                    }, [_, T, h]);
                return (0, t.jsx)(n.ModalRoot, {
                    transitionState: s,
                    disableTrack: !0,
                    children: (0, t.jsx)("div", {
                        className: x.container,
                        children: (0, t.jsxs)(n.Slides, {
                            activeSlide: _,
                            width: 440,
                            children: [(0, t.jsx)(n.Slide, {
                                id: u.AppealIngestionSlideTypes.SPEED_BUMP,
                                children: (0, t.jsx)(c.default, {
                                    classification: A,
                                    onClose: h,
                                    onNext: I,
                                    isSpam: !1,
                                    isCoppa: S
                                })
                            }), (0, t.jsx)(n.Slide, {
                                id: u.AppealIngestionSlideTypes.COLLECT_SIGNAL,
                                children: (0, t.jsx)(o.default, {
                                    isDsaEligible: T,
                                    onClose: h,
                                    onNext: I,
                                    onBack: p
                                })
                            }), (0, t.jsx)(n.Slide, {
                                id: u.AppealIngestionSlideTypes.CONFIRM_SUBMISSION,
                                children: (0, t.jsx)(o.default, {
                                    onClose: h,
                                    onNext: I,
                                    onBack: p
                                })
                            }), (0, t.jsx)(n.Slide, {
                                id: u.AppealIngestionSlideTypes.REQUEST_SENT,
                                children: (0, t.jsx)(o.default, {
                                    onClose: h,
                                    onNext: I,
                                    onBack: p
                                })
                            }), (0, t.jsx)(n.Slide, {
                                id: u.AppealIngestionSlideTypes.THANKS,
                                children: (0, t.jsx)(o.default, {
                                    onClose: h,
                                    onNext: I,
                                    onBack: p
                                })
                            })]
                        })
                    })
                })
            }
        },
        299738: function(e, l, s) {
            "use strict";
            s.r(l), s.d(l, {
                default: function() {
                    return E
                }
            });
            var t = s("37983");
            s("884691");
            var a = s("414456"),
                n = s.n(a),
                i = s("77078"),
                d = s("145131"),
                o = s("795010"),
                r = s("380676"),
                c = s("170213"),
                u = s("782340"),
                x = s("434848");

            function E(e) {
                var l;
                let {
                    classification: s,
                    isSpam: a = !1,
                    isCoppa: E = !1,
                    className: f,
                    onClose: _,
                    onNext: N
                } = e, S = s.explainer_link, A = null != s && null != s.flagged_content && s.flagged_content.length > 0, T = null !== s ? s.description.charAt(0).toUpperCase() + s.description.slice(1) : "", h = !a && !E;
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)(i.ModalHeader, {
                        direction: d.default.Direction.VERTICAL,
                        className: x.header,
                        separator: !1,
                        children: [(0, t.jsx)(i.Heading, {
                            className: x.title,
                            variant: "heading-xl/semibold",
                            children: u.default.Messages.APPEAL_INGESTION_MODAL_HEADER
                        }), (0, t.jsx)(i.Text, {
                            className: x.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: u.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBHEADER
                        }), null != _ && (0, t.jsx)(i.ModalCloseButton, {
                            className: x.closeButton,
                            onClick: _
                        })]
                    }), (0, t.jsxs)(i.ModalContent, {
                        className: n(x.modalContent, f),
                        paddingFix: !1,
                        children: [A && null == s.guild_metadata && (0, t.jsx)(r.ClassificationEvidence, {
                            flaggedContent: null !== (l = s.flagged_content) && void 0 !== l ? l : []
                        }), (0, t.jsx)(i.Text, {
                            className: x.optionHeader,
                            color: "header-secondary",
                            variant: "text-xs/bold",
                            children: u.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_POLICY_HEADER
                        }), (0, t.jsx)("div", {
                            className: x.policyContainer,
                            children: (0, t.jsx)(i.Text, {
                                variant: "text-md/semibold",
                                children: T
                            })
                        }), E && (0, t.jsx)(o.default, {
                            url: c.SafetyHubLinks.AGE_VERIFICATION_LINK,
                            text: u.default.Messages.APPEAL_INGESTION_AGE_VERIFICATION_LINK_TITLE
                        }), a && !E && (0, t.jsx)(o.default, {
                            url: c.SafetyHubLinks.SPAM_LINK,
                            text: u.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBMIT_SPAM
                        }), !E && (0, t.jsx)(o.default, {
                            text: u.default.Messages.APPEAL_INGESTION_LEARN_MORE_LINK_TITLE,
                            url: S
                        }), h && (0, t.jsx)(i.Text, {
                            className: x.learnMore,
                            variant: "text-xs/normal",
                            children: u.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_LEARN_MORE_OTHER_OPTIONS_DSA.format()
                        })]
                    }), h && (0, t.jsx)(i.ModalFooter, {
                        children: (0, t.jsx)(i.Button, {
                            onClick: N,
                            color: i.Button.Colors.BRAND,
                            children: u.default.Messages.NEXT
                        })
                    })]
                })
            }
        }
    }
]);