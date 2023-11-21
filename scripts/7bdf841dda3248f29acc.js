(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["1174"], {
        579371: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return h
                }
            }), a("222007");
            var s = a("37983"),
                n = a("884691"),
                l = a("446674"),
                o = a("77078"),
                i = a("430568"),
                u = a("86678"),
                d = a("882641"),
                r = a("945330"),
                c = a("233965"),
                m = a("32346"),
                S = a("958706"),
                j = a("782340"),
                x = a("645897");

            function T(e) {
                let {
                    customStatusEmoji: t,
                    setCustomStatusEmoji: a,
                    onClose: n
                } = e, l = e => {
                    var t;
                    if (null == e) {
                        a(null);
                        return
                    }
                    let s = null != e.id ? {
                        id: e.id,
                        name: e.name,
                        animated: e.animated
                    } : {
                        id: null,
                        name: null !== (t = e.optionallyDiverseSequence) && void 0 !== t ? t : "",
                        animated: !1
                    };
                    a(s)
                };
                return (0, s.jsx)(o.Popout, {
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, s.jsx)(u.default, {
                            closePopout: t,
                            onSelectEmoji: (e, a) => {
                                l(e), a && t()
                            },
                            pickerIntention: S.EmojiIntention.STATUS,
                            onNavigateAway: n
                        })
                    },
                    position: "left",
                    animation: o.Popout.Animation.NONE,
                    align: "top",
                    children: (e, a) => {
                        let {
                            isShown: n
                        } = a;
                        return (0, s.jsx)(d.default, {
                            ...e,
                            active: n,
                            className: x.emojiButton,
                            tabIndex: 0,
                            renderButtonContents: null == t ? null : () => (0, s.jsx)(i.default, {
                                className: x.emoji,
                                emojiId: t.id,
                                emojiName: t.name,
                                animated: !!t.animated
                            })
                        })
                    }
                })
            }

            function h(e) {
                var t, a;
                let {
                    transitionState: i,
                    onClose: u
                } = e, d = (0, l.useStateFromStores)([m.default], () => m.default.getCustomHangStatus()), [S, h] = n.useState(null !== (t = null == d ? void 0 : d.status) && void 0 !== t ? t : ""), [p, N] = n.useState(null !== (a = null == d ? void 0 : d.emoji) && void 0 !== a ? a : null);
                return (0, s.jsxs)(o.ModalRoot, {
                    transitionState: i,
                    size: o.ModalSize.DYNAMIC,
                    children: [(0, s.jsxs)(o.ModalContent, {
                        className: x.modalContent,
                        children: [(0, s.jsx)(o.Button, {
                            "aria-label": j.default.Messages.CLOSE,
                            look: o.Button.Looks.BLANK,
                            size: o.Button.Sizes.NONE,
                            onClick: u,
                            className: x.closeButton,
                            children: (0, s.jsx)(r.default, {
                                width: 16,
                                height: 16,
                                className: x.closeIcon
                            })
                        }), (0, s.jsx)("div", {
                            className: x.pickerBackground,
                            children: (0, s.jsx)(T, {
                                customStatusEmoji: p,
                                setCustomStatusEmoji: N,
                                onClose: u
                            })
                        }), (0, s.jsxs)("div", {
                            className: x.customInputGroup,
                            children: [(0, s.jsx)(o.Text, {
                                variant: "text-xs/semibold",
                                color: "text-muted",
                                children: j.default.Messages.STATUS_LEAD_IN_JUST
                            }), (0, s.jsx)(o.TextInput, {
                                className: x.customInput,
                                value: S,
                                onChange: e => h(e.substring(0, 50)),
                                placeholder: j.default.Messages.CUSTOM_HANG_STATUS_PLACEHOLDER
                            })]
                        })]
                    }), (0, s.jsxs)(o.ModalFooter, {
                        className: x.modalFooter,
                        children: [(0, s.jsxs)("div", {
                            children: [(0, s.jsx)(o.Heading, {
                                variant: "heading-md/semibold",
                                children: j.default.Messages.SET_STATUS_MODAL_TITLE
                            }), (0, s.jsx)(o.Text, {
                                color: "text-muted",
                                variant: "text-sm/normal",
                                className: x.subtitle,
                                children: j.default.Messages.SET_STATUS_MODAL_SUBTITLE
                            })]
                        }), (0, s.jsx)(o.Button, {
                            onClick: () => {
                                let e = S.trim();
                                "" !== e && ((0, c.updateCustomHangStatus)(e, p, "HangStatusModal"), u())
                            },
                            className: x.button,
                            disabled: "" === S.trim(),
                            children: j.default.Messages.SET_STATUS_MODAL_CTA
                        })]
                    })]
                })
            }
        }
    }
]);