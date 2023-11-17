(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["1174"], {
        579371: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return N
                }
            }), a("222007");
            var s = a("37983"),
                n = a("884691"),
                l = a("414456"),
                o = a.n(l),
                u = a("65597"),
                i = a("77078"),
                d = a("430568"),
                r = a("86678"),
                c = a("882641"),
                S = a("145131"),
                m = a("233965"),
                T = a("32346"),
                g = a("925749"),
                j = a("329537"),
                C = a("958706"),
                p = a("843455"),
                x = a("782340"),
                f = a("645897");

            function M(t) {
                let {
                    customStatusEmoji: e,
                    setCustomStatusEmoji: a,
                    onClose: n
                } = t, l = t => {
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
                return (0, s.jsx)(i.Popout, {
                    renderPopout: t => {
                        let {
                            closePopout: e
                        } = t;
                        return (0, s.jsx)(r.default, {
                            closePopout: e,
                            onSelectEmoji: (t, a) => {
                                l(t), a && e()
                            },
                            pickerIntention: C.EmojiIntention.STATUS,
                            onNavigateAway: n
                        })
                    },
                    position: "left",
                    animation: i.Popout.Animation.NONE,
                    align: "top",
                    children: (t, a) => {
                        let {
                            isShown: n
                        } = a;
                        return (0, s.jsx)(c.default, {
                            ...t,
                            active: n,
                            className: f.emojiButton,
                            tabIndex: 0,
                            renderButtonContents: null == e ? null : () => (0, s.jsx)(d.default, {
                                className: f.emoji,
                                emojiId: e.id,
                                emojiName: e.name,
                                animated: !!e.animated
                            })
                        })
                    }
                })
            }

            function N(t) {
                let {
                    transitionState: e,
                    onClose: a,
                    selectedHangStatus: l
                } = t, {
                    oldHangStatus: d,
                    oldStatusText: r,
                    oldStatusIcon: c
                } = (0, u.useStateFromStoresObject)([T.default], () => ({
                    oldHangStatus: T.default.getCurrentHangStatus(),
                    oldStatusText: T.default.getCustomHangStatus(),
                    oldStatusIcon: T.default.getCustomHangStatusEmoji()
                })), [C, N] = n.useState(null != l ? l : d), [h, H] = n.useState(null != r ? r : ""), [A, O] = n.useState(c), U = (0, g.getHangStatusOptions)();
                return (0, s.jsxs)(i.ModalRoot, {
                    transitionState: e,
                    size: i.ModalSize.LARGE,
                    children: [(0, s.jsxs)(i.ModalHeader, {
                        className: f.modalHeader,
                        separator: !1,
                        children: [(0, s.jsx)(i.ModalCloseButton, {
                            className: f.closeButton,
                            onClick: a
                        }), (0, s.jsx)(i.Heading, {
                            variant: "heading-xl/medium",
                            children: x.default.Messages.SET_STATUS_MODAL_TITLE
                        }), (0, s.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: f.subtitle,
                            children: x.default.Messages.SET_STATUS_MODAL_SUBTITLE
                        })]
                    }), (0, s.jsxs)(i.ModalContent, {
                        className: f.modalContent,
                        children: [(0, s.jsx)(i.FormTitle, {
                            className: f.title,
                            children: x.default.Messages.HANG_STATUS
                        }), (0, s.jsxs)("div", {
                            className: f.hangStatusSelector,
                            children: [Object.entries(U).map(t => {
                                let [e, a] = t;
                                return (0, s.jsx)(i.Clickable, {
                                    onClick: () => N(e),
                                    children: (0, s.jsx)(j.default, {
                                        name: a.title,
                                        icon: a.icon,
                                        color: a.color,
                                        selected: C === e,
                                        className: o(f.statusWidget, {
                                            [f.statusWidgetSelected]: C === e
                                        })
                                    })
                                }, e)
                            }), (0, s.jsx)(i.Clickable, {
                                onClick: () => N(p.HangStatusTypes.CUSTOM),
                                children: (0, s.jsx)(j.default, {
                                    name: x.default.Messages.CUSTOM_HANG_STATUS,
                                    selected: C === p.HangStatusTypes.CUSTOM,
                                    className: o(f.statusWidget, {
                                        [f.statusWidgetSelected]: C === p.HangStatusTypes.CUSTOM
                                    })
                                })
                            }, p.HangStatusTypes.CUSTOM)]
                        }), C === p.HangStatusTypes.CUSTOM ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(i.FormTitle, {
                                className: f.title,
                                children: x.default.Messages.CUSTOM_HANG_STATUS
                            }), (0, s.jsxs)("div", {
                                className: f.customInputRow,
                                children: [(0, s.jsx)(M, {
                                    customStatusEmoji: A,
                                    setCustomStatusEmoji: O,
                                    onClose: a
                                }), (0, s.jsx)(i.TextInput, {
                                    className: f.customInput,
                                    value: h,
                                    onChange: H
                                })]
                            })]
                        }) : null]
                    }), (0, s.jsxs)(i.ModalFooter, {
                        justify: S.default.Justify.BETWEEN,
                        direction: S.default.Direction.HORIZONTAL,
                        children: [(0, s.jsx)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
                            onClick: a,
                            children: x.default.Messages.CANCEL
                        }), (0, s.jsx)(i.Button, {
                            onClick: () => {
                                let t = h.trim();
                                if (C === p.HangStatusTypes.CUSTOM && "" !== t)(0, m.updateCustomHangStatus)(h.trim(), A, "HangStatusModal");
                                else {
                                    if (C === p.HangStatusTypes.CUSTOM) return;
                                    (0, m.updateHangStatus)(C, "HangStatusModal")
                                }
                                a()
                            },
                            className: f.button,
                            disabled: C === p.HangStatusTypes.CUSTOM && "" === h.trim(),
                            children: x.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
                        })]
                    })]
                })
            }
        }
    }
]);