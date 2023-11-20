(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["1174"], {
        579371: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return T
                }
            }), a("222007");
            var s = a("37983"),
                n = a("884691"),
                o = a("65597"),
                l = a("77078"),
                u = a("430568"),
                i = a("86678"),
                d = a("882641"),
                r = a("233965"),
                m = a("32346"),
                c = a("958706"),
                S = a("782340"),
                j = a("645897");

            function x(t) {
                let {
                    customStatusEmoji: e,
                    setCustomStatusEmoji: a,
                    onClose: n
                } = t, o = t => {
                    var e;
                    if (null == t) {
                        a(null);
                        return
                    }
                    let s = null != t.id ? {
                        id: t.id,
                        name: t.name,
                        animated: t.animated
                    } : {
                        id: null,
                        name: null !== (e = t.optionallyDiverseSequence) && void 0 !== e ? e : "",
                        animated: !1
                    };
                    a(s)
                };
                return (0, s.jsx)(l.Popout, {
                    renderPopout: t => {
                        let {
                            closePopout: e
                        } = t;
                        return (0, s.jsx)(i.default, {
                            closePopout: e,
                            onSelectEmoji: (t, a) => {
                                o(t), a && e()
                            },
                            pickerIntention: c.EmojiIntention.STATUS,
                            onNavigateAway: n
                        })
                    },
                    position: "left",
                    animation: l.Popout.Animation.NONE,
                    align: "top",
                    children: (t, a) => {
                        let {
                            isShown: n
                        } = a;
                        return (0, s.jsx)(d.default, {
                            ...t,
                            active: n,
                            className: j.emojiButton,
                            tabIndex: 0,
                            renderButtonContents: null == e ? null : () => (0, s.jsx)(u.default, {
                                className: j.emoji,
                                emojiId: e.id,
                                emojiName: e.name,
                                animated: !!e.animated
                            })
                        })
                    }
                })
            }

            function T(t) {
                let {
                    transitionState: e,
                    onClose: a
                } = t, {
                    oldStatusText: u,
                    oldStatusIcon: i
                } = (0, o.useStateFromStoresObject)([m.default], () => ({
                    oldHangStatus: m.default.getCurrentHangStatus(),
                    oldStatusText: m.default.getCustomHangStatus(),
                    oldStatusIcon: m.default.getCustomHangStatusEmoji()
                })), [d, c] = n.useState(null != u ? u : ""), [T, p] = n.useState(i);
                return (0, s.jsxs)(l.ModalRoot, {
                    transitionState: e,
                    size: l.ModalSize.DYNAMIC,
                    children: [(0, s.jsxs)(l.ModalContent, {
                        className: j.modalContent,
                        children: [(0, s.jsx)(l.ModalCloseButton, {
                            className: j.closeButton,
                            onClick: a
                        }), (0, s.jsx)("div", {
                            className: j.pickerBackground,
                            children: (0, s.jsx)(x, {
                                customStatusEmoji: T,
                                setCustomStatusEmoji: p,
                                onClose: a
                            })
                        }), (0, s.jsxs)("div", {
                            className: j.customInputGroup,
                            children: [(0, s.jsx)(l.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                children: S.default.Messages.STATUS_LEAD_IN_JUST
                            }), (0, s.jsx)(l.TextInput, {
                                className: j.customInput,
                                value: d,
                                onChange: t => c(t.substring(0, 50)),
                                placeholder: S.default.Messages.CUSTOM_HANG_STATUS_PLACEHOLDER
                            })]
                        })]
                    }), (0, s.jsxs)(l.ModalFooter, {
                        className: j.modalFooter,
                        children: [(0, s.jsxs)("div", {
                            children: [(0, s.jsx)(l.Heading, {
                                variant: "heading-md/semibold",
                                children: S.default.Messages.SET_STATUS_MODAL_TITLE
                            }), (0, s.jsx)(l.Text, {
                                color: "text-muted",
                                variant: "text-sm/normal",
                                className: j.subtitle,
                                children: S.default.Messages.SET_STATUS_MODAL_SUBTITLE
                            })]
                        }), (0, s.jsx)(l.Button, {
                            onClick: () => {
                                let t = d.trim();
                                "" !== t && ((0, r.updateCustomHangStatus)(t, T, "HangStatusModal"), a())
                            },
                            className: j.button,
                            disabled: "" === d.trim(),
                            children: S.default.Messages.SET_STATUS_MODAL_CTA
                        })]
                    })]
                })
            }
        }
    }
]);