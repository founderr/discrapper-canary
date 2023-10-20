(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [58714], {
        308663: (t, n, e) => {
            t.exports = e.p + "6067e1c3bdd2a6711f42bfe35a5a7961.svg"
        },
        558714: (t, n, e) => {
            "use strict";
            e.r(n);
            e.d(n, {
                default: () => M
            });
            var o = e(785893),
                s = (e(667294), e(70418)),
                a = e(396179),
                i = e(968449),
                l = e(107364),
                r = e(443812),
                c = e(652591),
                d = e(2590),
                A = e(131559),
                _ = e(473708),
                C = e(10842),
                u = e.n(C),
                T = e(308663),
                N = e.n(T);

            function M(t) {
                var n = t.onClose,
                    e = t.transitionState,
                    C = function() {
                        n();
                        a.Z.open(d.oAB.ACCESSIBILITY, null, {
                            scrollPosition: A.rP.LEGACY_CHAT_INPUT
                        })
                    },
                    T = (0, r.Dt)();
                return (0, o.jsxs)(s.ModalRoot, {
                    transitionState: e,
                    "aria-labelledby": T,
                    children: [(0, o.jsx)("img", {
                        className: u().art,
                        src: N(),
                        alt: ""
                    }), (0, o.jsx)(s.ModalContent, {
                        children: (0, o.jsxs)(l.Z, {
                            direction: l.Z.Direction.VERTICAL,
                            justify: l.Z.Justify.CENTER,
                            children: [(0, o.jsx)(s.Heading, {
                                id: T,
                                variant: "heading-lg/semibold",
                                className: u().title,
                                children: _.Z.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_EXPLANATION_MODAL_TITLE
                            }), (0, o.jsx)(s.Text, {
                                variant: "text-md/normal",
                                className: u().body,
                                children: _.Z.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_EXPLANATION_MODAL_MESSAGE.format({
                                    openSettingsHook: function(t, n) {
                                        return (0, o.jsx)(s.Anchor, {
                                            onClick: C,
                                            children: t
                                        }, n)
                                    }
                                })
                            })]
                        })
                    }), (0, o.jsxs)(s.ModalFooter, {
                        children: [(0, o.jsx)(s.Button, {
                            type: "button",
                            onClick: function() {
                                c.default.track(d.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                    enabled: !1,
                                    location: "LegacyChatInputExplanationModal"
                                });
                                i.dN.updateSetting(!1);
                                n()
                            },
                            children: _.Z.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_EXPLANATION_MODAL_BUTTON_CTA
                        }), (0, o.jsx)(s.Button, {
                            type: "button",
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.MEDIUM,
                            color: s.Button.Colors.PRIMARY,
                            onClick: n,
                            children: _.Z.Messages.NO_THANKS
                        })]
                    })]
                })
            }
        }
    }
]);