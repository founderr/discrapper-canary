(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["1174"], {
        579371: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return N
                }
            }), a("222007");
            var l = a("37983"),
                n = a("884691"),
                s = a("77078"),
                o = a("430568"),
                i = a("86678"),
                u = a("385976"),
                d = a("697218"),
                r = a("882641"),
                m = a("945330"),
                c = a("719923"),
                S = a("233965"),
                j = a("32346"),
                x = a("958706"),
                T = a("782340"),
                h = a("645897");

            function f(e) {
                let {
                    customStatusEmoji: t,
                    setCustomStatusEmoji: a,
                    onClose: n
                } = e, u = e => {
                    var t;
                    if (null == e) {
                        a(null);
                        return
                    }
                    let l = null != e.id ? {
                        id: e.id,
                        name: e.name,
                        animated: e.animated
                    } : {
                        id: null,
                        name: null !== (t = e.optionallyDiverseSequence) && void 0 !== t ? t : "",
                        animated: !1
                    };
                    a(l)
                };
                return (0, l.jsx)(s.Popout, {
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, l.jsx)(i.default, {
                            closePopout: t,
                            onSelectEmoji: (e, a) => {
                                u(e), a && t()
                            },
                            pickerIntention: x.EmojiIntention.STATUS,
                            onNavigateAway: n
                        })
                    },
                    position: "left",
                    animation: s.Popout.Animation.NONE,
                    align: "top",
                    children: (e, a) => {
                        let {
                            isShown: n
                        } = a;
                        return (0, l.jsx)(r.default, {
                            ...e,
                            active: n,
                            className: h.emojiButton,
                            tabIndex: 0,
                            renderButtonContents: null == t ? null : () => (0, l.jsx)(o.default, {
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
                var t, a;
                let {
                    transitionState: o,
                    onClose: i,
                    startingText: r,
                    startingEmoji: x
                } = e, N = j.default.getCustomHangStatus(), p = null != r ? r : null !== (t = null == N ? void 0 : N.status) && void 0 !== t ? t : "", v = null !== (a = null == N ? void 0 : N.emoji) && void 0 !== a ? a : null;
                if ((null == x ? void 0 : x.id) != null) {
                    let e = c.default.canUseEmojisEverywhere(d.default.getCurrentUser()) && null != u.default.getUsableCustomEmojiById(x.id);
                    v = e ? x : null
                } else(null == x ? void 0 : x.name) != null && (v = x);
                let [g, C] = n.useState(p), [E, A] = n.useState(v);
                return (0, l.jsxs)(s.ModalRoot, {
                    className: h.modal,
                    transitionState: o,
                    size: s.ModalSize.DYNAMIC,
                    children: [(0, l.jsxs)(s.ModalContent, {
                        className: h.modalContent,
                        children: [(0, l.jsx)(s.Button, {
                            "aria-label": T.default.Messages.CLOSE,
                            look: s.Button.Looks.BLANK,
                            size: s.Button.Sizes.NONE,
                            onClick: i,
                            className: h.closeButton,
                            children: (0, l.jsx)(m.default, {
                                width: 16,
                                height: 16,
                                className: h.closeIcon
                            })
                        }), (0, l.jsx)(f, {
                            customStatusEmoji: E,
                            setCustomStatusEmoji: A,
                            onClose: i
                        }), (0, l.jsxs)("div", {
                            className: h.customInputGroup,
                            children: [(0, l.jsx)(s.Text, {
                                className: h.leadInText,
                                variant: "text-xs/semibold",
                                color: "text-muted",
                                children: T.default.Messages.STATUS_LEAD_IN_JUST
                            }), (0, l.jsx)(s.TextInput, {
                                className: h.customInput,
                                value: g,
                                onChange: e => C(e.substring(0, 50)),
                                placeholder: T.default.Messages.CUSTOM_HANG_STATUS_PLACEHOLDER
                            })]
                        })]
                    }), (0, l.jsxs)(s.ModalFooter, {
                        className: h.modalFooter,
                        children: [(0, l.jsxs)("div", {
                            children: [(0, l.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: T.default.Messages.SET_STATUS_MODAL_TITLE
                            }), (0, l.jsx)(s.Text, {
                                color: "text-muted",
                                variant: "text-sm/normal",
                                className: h.subtitle,
                                children: T.default.Messages.SET_STATUS_MODAL_SUBTITLE
                            })]
                        }), (0, l.jsx)(s.Button, {
                            onClick: () => {
                                let e = g.trim();
                                "" !== e && ((0, S.updateCustomHangStatus)(e, E, "HangStatusModal", !0), i())
                            },
                            className: h.button,
                            disabled: "" === g.trim(),
                            children: T.default.Messages.SET_STATUS_MODAL_CTA
                        })]
                    })]
                })
            }
        }
    }
]);