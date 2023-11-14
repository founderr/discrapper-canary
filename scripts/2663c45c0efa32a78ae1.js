(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["1174"], {
        579371: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return p
                }
            }), a("222007");
            var s = a("37983"),
                l = a("884691"),
                n = a("65597"),
                o = a("77078"),
                d = a("145131"),
                i = a("284679"),
                r = a("233965"),
                c = a("32346"),
                u = a("925749"),
                S = a("329537"),
                h = a("843455"),
                x = a("782340"),
                T = a("645897");

            function p(e) {
                let {
                    transitionState: t,
                    onClose: a
                } = e, p = (0, n.default)([c.default], () => c.default.getCurrentHangStatus()), [C, f] = l.useState(p), g = (0, u.getHangStatusOptions)();
                return (0, s.jsxs)(o.ModalRoot, {
                    transitionState: t,
                    size: o.ModalSize.LARGE,
                    children: [(0, s.jsxs)(o.ModalHeader, {
                        className: T.modalHeader,
                        separator: !1,
                        children: [(0, s.jsx)(o.ModalCloseButton, {
                            className: T.closeButton,
                            onClick: a
                        }), (0, s.jsx)(o.Heading, {
                            variant: "heading-xl/medium",
                            children: x.default.Messages.SET_STATUS_MODAL_TITLE
                        }), (0, s.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: T.subtitle,
                            children: x.default.Messages.SET_STATUS_MODAL_SUBTITLE
                        })]
                    }), (0, s.jsxs)(o.ModalContent, {
                        className: T.modalContent,
                        children: [(0, s.jsx)(o.FormTitle, {
                            className: T.title,
                            children: x.default.Messages.HANG_STATUS
                        }), (0, s.jsx)("div", {
                            className: T.hangStatusSelector,
                            children: Object.entries(g).map(e => {
                                let [t, a] = e;
                                return (0, s.jsx)(o.Clickable, {
                                    onClick: () => f(t),
                                    children: (0, s.jsx)(S.default, {
                                        leadIn: a.leadIn,
                                        name: a.title,
                                        icon: a.icon,
                                        style: C === t ? {
                                            backgroundColor: (0, i.hexWithOpacity)(a.color, .5),
                                            boxShadow: "-3px 4px 0px 0px #000",
                                            borderColor: "transparent"
                                        } : {},
                                        className: T.statusWidget
                                    })
                                }, t)
                            })
                        })]
                    }), (0, s.jsxs)(o.ModalFooter, {
                        justify: d.default.Justify.BETWEEN,
                        direction: d.default.Direction.HORIZONTAL,
                        children: [(0, s.jsx)(o.Button, {
                            color: o.Button.Colors.PRIMARY,
                            onClick: a,
                            children: x.default.Messages.CANCEL
                        }), (0, s.jsx)(o.Button, {
                            onClick: () => {
                                (0, r.updateHangStatus)(C === h.HangStatusTypes.NONE ? null : C, "HangStatusModal"), a()
                            },
                            className: T.button,
                            children: x.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
                        })]
                    })]
                })
            }
        }
    }
]);