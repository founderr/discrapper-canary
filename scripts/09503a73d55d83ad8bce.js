"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [43555], {
        443555: (e, a, n) => {
            n.r(a);
            n.d(a, {
                default: () => c
            });
            var i = n(785893),
                s = (n(667294), n(540110)),
                t = n(70418),
                r = n(352628),
                d = n(473708),
                o = n(377783),
                l = n.n(o);

            function c(e) {
                var a = e.transitionState,
                    n = e.onClose,
                    o = (0, r.gD)();
                return (0, i.jsxs)(t.ModalRoot, {
                    transitionState: a,
                    children: [(0, i.jsxs)(t.ModalHeader, {
                        className: l().modalHeader,
                        children: [(0, i.jsxs)(s.Z, {
                            direction: s.Z.Direction.VERTICAL,
                            align: s.Z.Align.START,
                            className: l().modalHeaderText,
                            children: [(0, i.jsx)(t.Text, {
                                variant: "eyebrow",
                                children: d.Z.Messages.STRANGER_DANGER_TIPS_HEADER
                            }), (0, i.jsx)(t.Heading, {
                                variant: "heading-xl/bold",
                                children: d.Z.Messages.STRANGER_DANGER_TIPS_DESCRIPTION
                            })]
                        }), (0, i.jsx)(t.ModalCloseButton, {
                            withCircleBackground: !0,
                            onClick: function() {
                                n()
                            },
                            className: l().closeButton
                        })]
                    }), (0, i.jsx)(t.ModalContent, {
                        className: l().modalContent,
                        children: (0, i.jsx)(s.Z, {
                            className: l().tipsSection,
                            direction: s.Z.Direction.VERTICAL,
                            children: o.map((function(e, a) {
                                return (0, i.jsxs)(s.Z, {
                                    className: l().tipRow,
                                    align: s.Z.Align.CENTER,
                                    wrap: s.Z.Wrap.NO_WRAP,
                                    children: [(0, i.jsx)(t.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-brand",
                                        className: l().tipNumber,
                                        children: a + 1
                                    }), (0, i.jsx)(t.Text, {
                                        variant: "text-sm/medium",
                                        color: "header-secondary",
                                        children: e
                                    })]
                                }, a)
                            }))
                        })
                    })]
                })
            }
        }
    }
]);