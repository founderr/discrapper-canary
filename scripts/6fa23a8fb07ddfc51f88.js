"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [43555], {
        443555: (e, n, a) => {
            a.r(n);
            a.d(n, {
                default: () => x
            });
            var i = a(785893),
                s = a(667294),
                r = a(540110),
                t = a(70418),
                d = a(538412),
                c = a(352628),
                l = a(2590),
                o = a(473708),
                h = a(377783),
                N = a.n(h);

            function x(e) {
                var n = e.transitionState,
                    a = e.onClose,
                    h = e.channelId,
                    x = e.warningId,
                    m = e.senderId,
                    u = (0, c.gD)();
                s.useEffect((function() {
                    (0, d.MC)(l.rMx.CHANNEL_SAFETY_WARNING_MODAL_VIEWED, {
                        channelId: h,
                        warningId: x,
                        senderId: m
                    })
                }), [h, x, m]);
                return (0, i.jsxs)(t.ModalRoot, {
                    transitionState: n,
                    children: [(0, i.jsxs)(t.ModalHeader, {
                        className: N().modalHeader,
                        children: [(0, i.jsxs)(r.Z, {
                            direction: r.Z.Direction.VERTICAL,
                            align: r.Z.Align.START,
                            className: N().modalHeaderText,
                            children: [(0, i.jsx)(t.Text, {
                                variant: "eyebrow",
                                children: o.Z.Messages.STRANGER_DANGER_TIPS_HEADER
                            }), (0, i.jsx)(t.Heading, {
                                variant: "heading-xl/bold",
                                children: o.Z.Messages.STRANGER_DANGER_TIPS_DESCRIPTION
                            })]
                        }), (0, i.jsx)(t.ModalCloseButton, {
                            withCircleBackground: !0,
                            onClick: function() {
                                a()
                            },
                            className: N().closeButton
                        })]
                    }), (0, i.jsx)(t.ModalContent, {
                        className: N().modalContent,
                        children: (0, i.jsx)(r.Z, {
                            className: N().tipsSection,
                            direction: r.Z.Direction.VERTICAL,
                            children: u.map((function(e, n) {
                                return (0, i.jsxs)(r.Z, {
                                    className: N().tipRow,
                                    align: r.Z.Align.CENTER,
                                    wrap: r.Z.Wrap.NO_WRAP,
                                    children: [(0, i.jsx)(t.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-brand",
                                        className: N().tipNumber,
                                        children: n + 1
                                    }), (0, i.jsx)(t.Text, {
                                        variant: "text-sm/medium",
                                        color: "header-secondary",
                                        children: e
                                    })]
                                }, n)
                            }))
                        })
                    })]
                })
            }
        }
    }
]);