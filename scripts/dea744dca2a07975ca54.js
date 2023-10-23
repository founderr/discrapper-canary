"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [43555], {
        443555: (e, s, a) => {
            a.r(s);
            a.d(s, {
                default: () => N
            });
            var n = a(785893),
                i = a(667294),
                t = a(70418),
                r = a(34225),
                d = a(538412),
                o = a(352628),
                c = a(2590),
                l = a(473708),
                R = a(377783),
                E = a.n(R);

            function N(e) {
                var s = e.transitionState,
                    a = e.onClose,
                    R = e.handleBlock,
                    N = e.handleMute,
                    x = e.channelId,
                    h = e.warningId,
                    _ = e.senderId,
                    A = function() {
                        a()
                    },
                    m = (0, o.gD)();
                i.useEffect((function() {
                    (0, d.MC)(c.rMx.CHANNEL_SAFETY_WARNING_MODAL_VIEWED, {
                        channelId: x,
                        warningId: h,
                        senderId: _
                    })
                }), [x, h, _]);
                return (0, n.jsxs)(t.ModalRoot, {
                    transitionState: s,
                    children: [(0, n.jsxs)(t.ModalHeader, {
                        className: E().modalHeader,
                        children: [(0, n.jsxs)("div", {
                            className: E().modalHeaderText,
                            children: [(0, n.jsx)(t.Text, {
                                variant: "eyebrow",
                                children: l.Z.Messages.STRANGER_DANGER_TIPS_HEADER
                            }), (0, n.jsx)(t.Heading, {
                                variant: "heading-xl/bold",
                                children: l.Z.Messages.STRANGER_DANGER_TIPS_DESCRIPTION
                            })]
                        }), (0, n.jsx)(t.ModalCloseButton, {
                            withCircleBackground: !0,
                            onClick: A,
                            className: E().closeButton
                        })]
                    }), (0, n.jsxs)(t.ModalContent, {
                        className: E().modalContent,
                        children: [(0, n.jsx)("div", {
                            className: E().tipsSection,
                            children: m.map((function(e, s) {
                                return (0, n.jsxs)("div", {
                                    className: E().tipRow,
                                    children: [(0, n.jsx)(t.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-brand",
                                        className: E().tipNumber,
                                        children: s + 1
                                    }), (0, n.jsx)(t.Text, {
                                        variant: "text-sm/medium",
                                        color: "header-secondary",
                                        children: e
                                    })]
                                }, s)
                            }))
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(t.Text, {
                                className: E().moreHeading,
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: l.Z.Messages.STRANGER_DANGER_MORE_HEADER
                            }), (0, n.jsxs)("div", {
                                className: E().tipsSection,
                                children: [(0, n.jsxs)("div", {
                                    className: E().safetyAction,
                                    children: [(0, n.jsxs)("div", {
                                        className: E().safetyActionText,
                                        children: [(0, n.jsx)(t.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: l.Z.Messages.STRANGER_DANGER_MORE_MUTE
                                        }), (0, n.jsx)(t.Text, {
                                            variant: "text-xs/medium",
                                            color: "header-secondary",
                                            children: l.Z.Messages.STRANGER_DANGER_MORE_MUTE_DESCRIPTION
                                        })]
                                    }), (0,
                                        n.jsx)(t.Button, {
                                        size: t.Button.Sizes.SMALL,
                                        color: t.Button.Colors.PRIMARY,
                                        "aria-label": l.Z.Messages.STRANGER_DANGER_MORE_MUTE,
                                        onClick: function() {
                                            A();
                                            N()
                                        },
                                        children: l.Z.Messages.STRANGER_DANGER_MORE_MUTE
                                    })]
                                }), (0, n.jsx)(r.Z, {}), (0, n.jsxs)("div", {
                                    className: E().safetyAction,
                                    children: [(0, n.jsxs)("div", {
                                        className: E().safetyActionText,
                                        children: [(0, n.jsx)(t.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: l.Z.Messages.STRANGER_DANGER_MORE_BLOCK
                                        }), (0, n.jsx)(t.Text, {
                                            variant: "text-xs/medium",
                                            color: "header-secondary",
                                            children: l.Z.Messages.STRANGER_DANGER_MORE_BLOCK_DESCRIPTION
                                        })]
                                    }), (0, n.jsx)(t.Button, {
                                        size: t.Button.Sizes.SMALL,
                                        color: t.Button.Colors.RED,
                                        "aria-label": l.Z.Messages.STRANGER_DANGER_BANNER_BLOCK,
                                        onClick: function() {
                                            A();
                                            R()
                                        },
                                        children: l.Z.Messages.STRANGER_DANGER_BANNER_BLOCK
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }
        }
    }
]);