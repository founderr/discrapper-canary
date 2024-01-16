(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["89407"], {
        124539: function(e, l, s) {
            "use strict";
            s.r(l), s.d(l, {
                default: function() {
                    return c
                }
            });
            var a = s("37983");
            s("884691");
            var t = s("414456"),
                n = s.n(t),
                i = s("77078"),
                d = s("145131"),
                o = s("782340"),
                r = s("434848");

            function c(e) {
                let {
                    isDsaEligible: l = !1,
                    className: s,
                    onClose: t,
                    onNext: c,
                    onBack: u
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(i.ModalHeader, {
                        direction: d.default.Direction.VERTICAL,
                        className: r.header,
                        separator: !1,
                        children: [(0, a.jsx)(i.Heading, {
                            className: r.title,
                            variant: "heading-xl/semibold",
                            children: o.default.Messages.GUILD_CREATE_TITLE
                        }), (0, a.jsx)(i.Text, {
                            className: r.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: o.default.Messages.NUF_DESKTOP_TEMPLATES_SUBTITLE
                        }), null != t && (0, a.jsx)(i.ModalCloseButton, {
                            className: r.closeButton,
                            onClick: t
                        })]
                    }), (0, a.jsx)(i.ModalContent, {
                        className: n(r.templatesList, s),
                        paddingFix: !1,
                        children: (0, a.jsx)(i.Text, {
                            className: r.optionHeader,
                            color: "header-secondary",
                            variant: "text-xs/bold",
                            children: o.default.Messages.GUILD_TEMPLATE_SELECTOR_OPTION_HEADER
                        })
                    }), (0, a.jsxs)(i.ModalFooter, {
                        children: [(0, a.jsx)(i.Button, {
                            onClick: c,
                            color: i.Button.Colors.BRAND,
                            children: o.default.Messages.NEXT
                        }), l && (0, a.jsx)(i.Button, {
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
            var a = s("37983");
            s("884691");
            var t = s("77078"),
                n = s("461380"),
                i = s("30679");

            function d(e) {
                let {
                    url: l,
                    text: s
                } = e;
                return (0, a.jsx)(t.Anchor, {
                    href: l,
                    className: i.externalLinkWrapper,
                    children: (0, a.jsxs)(t.Clickable, {
                        className: i.childButton,
                        children: [(0, a.jsx)(t.Text, {
                            className: i.childText,
                            variant: "text-md/semibold",
                            children: s
                        }), (0, a.jsx)(n.default, {
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
                    return x
                }
            }), s("222007");
            var a = s("37983"),
                t = s("884691"),
                n = s("77078"),
                i = s("698609"),
                d = s("124539"),
                o = s("57242"),
                r = s("299738"),
                c = s("170213"),
                u = s("701098");

            function x(e) {
                let {
                    classificationId: l,
                    transitionState: s,
                    initialSlide: x = c.AppealIngestionSlideTypes.SPEED_BUMP,
                    onClose: E
                } = e, [_, N] = t.useState(x), {
                    classification: f,
                    isDsaEligible: S
                } = (0, i.useSafetyHubClassification)(null != l ? l : ""), T = (null == f ? void 0 : f.is_spam) || !1, A = (null == f ? void 0 : f.is_coppa) || !1;
                t.useEffect(() => {
                    S ? N(x) : N(c.AppealIngestionSlideTypes.COLLECT_SIGNAL)
                }, [N, x, S]);
                let h = t.useCallback(() => {
                        o.default.close(), E()
                    }, [E]),
                    I = t.useCallback(() => {
                        var e, l;
                        let s = null;
                        (s = S ? null === (e = c.SlidesOrderDsaEligible[_]) || void 0 === e ? void 0 : e.next : null === (l = c.SlidesOrderNonDsaEligible[_]) || void 0 === l ? void 0 : l.next) ? N(s): h()
                    }, [_, S, h]),
                    p = t.useCallback(() => {
                        var e, l;
                        let s;
                        (s = S ? null === (e = c.SlidesOrderDsaEligible[_]) || void 0 === e ? void 0 : e.prev : null === (l = c.SlidesOrderNonDsaEligible[_]) || void 0 === l ? void 0 : l.prev) ? N(s): h()
                    }, [_, S, h]);
                return (0, a.jsx)(n.ModalRoot, {
                    transitionState: s,
                    disableTrack: !0,
                    children: (0, a.jsx)("div", {
                        className: u.container,
                        children: (0, a.jsxs)(n.Slides, {
                            activeSlide: _,
                            width: 440,
                            children: [(0, a.jsx)(n.Slide, {
                                id: c.AppealIngestionSlideTypes.SPEED_BUMP,
                                children: (0, a.jsx)(r.default, {
                                    classification: f,
                                    onClose: h,
                                    onNext: I,
                                    isSpam: T,
                                    isCoppa: A
                                })
                            }), (0, a.jsx)(n.Slide, {
                                id: c.AppealIngestionSlideTypes.COLLECT_SIGNAL,
                                children: (0, a.jsx)(d.default, {
                                    isDsaEligible: S,
                                    onClose: h,
                                    onNext: I,
                                    onBack: p
                                })
                            }), (0, a.jsx)(n.Slide, {
                                id: c.AppealIngestionSlideTypes.CONFIRM_SUBMISSION,
                                children: (0, a.jsx)(d.default, {
                                    onClose: h,
                                    onNext: I,
                                    onBack: p
                                })
                            }), (0, a.jsx)(n.Slide, {
                                id: c.AppealIngestionSlideTypes.REQUEST_SENT,
                                children: (0, a.jsx)(d.default, {
                                    onClose: h,
                                    onNext: I,
                                    onBack: p
                                })
                            }), (0, a.jsx)(n.Slide, {
                                id: c.AppealIngestionSlideTypes.THANKS,
                                children: (0, a.jsx)(d.default, {
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
            var a = s("37983");
            s("884691");
            var t = s("414456"),
                n = s.n(t),
                i = s("77078"),
                d = s("145131"),
                o = s("795010"),
                r = s("380676"),
                c = s("170213"),
                u = s("782340"),
                x = s("434848");

            function E(e) {
                var l, s;
                let {
                    classification: t,
                    isSpam: E = !1,
                    isCoppa: _ = !1,
                    className: N,
                    onClose: f,
                    onNext: S
                } = e, T = null !== (l = null == t ? void 0 : t.explainer_link) && void 0 !== l ? l : "", A = null != t && null != t.flagged_content && t.flagged_content.length > 0, h = null !== t ? t.description.charAt(0).toUpperCase() + t.description.slice(1) : "", I = !E && !_;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(i.ModalHeader, {
                        direction: d.default.Direction.VERTICAL,
                        className: x.header,
                        separator: !1,
                        children: [(0, a.jsx)(i.Heading, {
                            className: x.title,
                            variant: "heading-xl/semibold",
                            children: u.default.Messages.APPEAL_INGESTION_MODAL_HEADER
                        }), (0, a.jsx)(i.Text, {
                            className: x.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: u.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBHEADER
                        }), null != f && (0, a.jsx)(i.ModalCloseButton, {
                            className: x.closeButton,
                            onClick: f
                        })]
                    }), (0, a.jsxs)(i.ModalContent, {
                        className: n(x.modalContent, N),
                        paddingFix: !1,
                        children: [A && null == t.guild_metadata && (0, a.jsx)(r.ClassificationEvidence, {
                            flaggedContent: null !== (s = t.flagged_content) && void 0 !== s ? s : []
                        }), (0, a.jsx)(i.Text, {
                            className: x.optionHeader,
                            color: "header-secondary",
                            variant: "text-xs/bold",
                            children: u.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_POLICY_HEADER
                        }), (0, a.jsx)("div", {
                            className: x.policyContainer,
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-md/semibold",
                                children: h
                            })
                        }), _ && (0, a.jsx)(o.default, {
                            url: c.SafetyHubLinks.AGE_VERIFICATION_LINK,
                            text: u.default.Messages.APPEAL_INGESTION_AGE_VERIFICATION_LINK_TITLE
                        }), E && !_ && (0, a.jsx)(o.default, {
                            url: c.SafetyHubLinks.SPAM_LINK,
                            text: u.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBMIT_SPAM
                        }), !_ && (0, a.jsx)(o.default, {
                            text: u.default.Messages.APPEAL_INGESTION_LEARN_MORE_LINK_TITLE,
                            url: T
                        }), I && (0, a.jsx)(i.Text, {
                            className: x.learnMore,
                            variant: "text-xs/normal",
                            children: u.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_LEARN_MORE_OTHER_OPTIONS_DSA.format()
                        })]
                    }), I && (0, a.jsx)(i.ModalFooter, {
                        children: (0, a.jsx)(i.Button, {
                            onClick: S,
                            color: i.Button.Colors.BRAND,
                            children: u.default.Messages.NEXT
                        })
                    })]
                })
            }
        }
    }
]);