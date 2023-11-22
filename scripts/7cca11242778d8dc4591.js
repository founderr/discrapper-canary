(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["1174"], {
        579371: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return N
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("77078"),
                o = l("430568"),
                i = l("86678"),
                u = l("385976"),
                d = l("697218"),
                r = l("882641"),
                m = l("945330"),
                c = l("719923"),
                S = l("233965"),
                j = l("32346"),
                x = l("958706"),
                T = l("782340"),
                h = l("645897");

            function f(e) {
                let {
                    customStatusEmoji: t,
                    setCustomStatusEmoji: l,
                    onClose: n
                } = e, u = e => {
                    var t;
                    if (null == e) {
                        l(null);
                        return
                    }
                    let a = null != e.id ? {
                        id: e.id,
                        name: e.name,
                        animated: e.animated
                    } : {
                        id: null,
                        name: null !== (t = e.optionallyDiverseSequence) && void 0 !== t ? t : "",
                        animated: !1
                    };
                    l(a)
                };
                return (0, a.jsx)(s.Popout, {
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, a.jsx)(i.default, {
                            closePopout: t,
                            onSelectEmoji: (e, l) => {
                                u(e), l && t()
                            },
                            pickerIntention: x.EmojiIntention.STATUS,
                            onNavigateAway: n
                        })
                    },
                    position: "left",
                    animation: s.Popout.Animation.NONE,
                    align: "top",
                    children: (e, l) => {
                        let {
                            isShown: n
                        } = l;
                        return (0, a.jsx)(r.default, {
                            ...e,
                            active: n,
                            className: h.emojiButton,
                            tabIndex: 0,
                            renderButtonContents: null == t ? null : () => (0, a.jsx)(o.default, {
                                className: h.emoji,
                                emojiId: t.id,
                                emojiName: t.name,
                                animated: !!t.animated
                            })
                        })
                    }
                })
            }

            function N(e) {
                var t, l;
                let {
                    transitionState: o,
                    onClose: i,
                    startingText: r,
                    startingEmoji: x
                } = e, N = j.default.getCustomHangStatus(), p = null != r ? r : null !== (t = null == N ? void 0 : N.status) && void 0 !== t ? t : "", v = null !== (l = null == N ? void 0 : N.emoji) && void 0 !== l ? l : null;
                if ((null == x ? void 0 : x.id) != null) {
                    let e = c.default.canUseEmojisEverywhere(d.default.getCurrentUser()) && null != u.default.getUsableCustomEmojiById(x.id);
                    v = e ? x : null
                } else(null == x ? void 0 : x.name) != null && (v = x);
                let [C, g] = n.useState(p), [E, A] = n.useState(v);
                return (0, a.jsxs)(s.ModalRoot, {
                    className: h.modal,
                    transitionState: o,
                    size: s.ModalSize.DYNAMIC,
                    children: [(0, a.jsxs)(s.ModalContent, {
                        className: h.modalContent,
                        children: [(0, a.jsx)(s.Button, {
                            "aria-label": T.default.Messages.CLOSE,
                            look: s.Button.Looks.BLANK,
                            size: s.Button.Sizes.NONE,
                            onClick: i,
                            className: h.closeButton,
                            children: (0, a.jsx)(m.default, {
                                width: 16,
                                height: 16,
                                className: h.closeIcon
                            })
                        }), (0, a.jsx)(f, {
                            customStatusEmoji: E,
                            setCustomStatusEmoji: A,
                            onClose: i
                        }), (0, a.jsxs)("div", {
                            className: h.customInputGroup,
                            children: [(0, a.jsx)(s.Text, {
                                className: h.leadInText,
                                variant: "text-xs/semibold",
                                color: "text-muted",
                                children: T.default.Messages.STATUS_LEAD_IN_JUST
                            }), (0, a.jsx)(s.TextInput, {
                                className: h.customInput,
                                value: C,
                                onChange: e => g(e.substring(0, 50)),
                                placeholder: T.default.Messages.CUSTOM_HANG_STATUS_PLACEHOLDER
                            })]
                        })]
                    }), (0, a.jsxs)(s.ModalFooter, {
                        className: h.modalFooter,
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: T.default.Messages.SET_STATUS_MODAL_TITLE
                            }), (0, a.jsx)(s.Text, {
                                color: "text-muted",
                                variant: "text-sm/normal",
                                className: h.subtitle,
                                children: T.default.Messages.SET_STATUS_MODAL_SUBTITLE
                            })]
                        }), (0, a.jsx)(s.Button, {
                            onClick: () => {
                                let e = C.trim();
                                "" !== e && ((0, S.updateCustomHangStatus)(e, E, !0), i())
                            },
                            className: h.button,
                            disabled: "" === C.trim(),
                            children: T.default.Messages.SET_STATUS_MODAL_CTA
                        })]
                    })]
                })
            }
        }
    }
]);