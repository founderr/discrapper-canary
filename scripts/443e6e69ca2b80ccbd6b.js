(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["1174"], {
        579371: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return M
                }
            }), a("222007");
            var s = a("37983"),
                n = a("884691"),
                l = a("414456"),
                u = a.n(l),
                o = a("65597"),
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
                N = a("645897");

            function f(t) {
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
                            className: N.emojiButton,
                            tabIndex: 0,
                            renderButtonContents: null == e ? null : () => (0, s.jsx)(d.default, {
                                className: N.emoji,
                                emojiId: e.id,
                                emojiName: e.name,
                                animated: !!e.animated
                            })
                        })
                    }
                })
            }

            function M(t) {
                var e;
                let {
                    transitionState: a,
                    onClose: l,
                    selectedHangStatus: d
                } = t, {
                    oldHangStatus: r,
                    oldStatusText: c,
                    oldStatusIcon: C
                } = (0, o.useStateFromStoresObject)([T.default], () => ({
                    oldHangStatus: T.default.getCurrentHangStatus(),
                    oldStatusText: T.default.getCustomHangStatus(),
                    oldStatusIcon: T.default.getCustomHangStatusEmoji()
                })), [M, H] = n.useState(null !== (e = null != d ? d : r) && void 0 !== e ? e : p.HangStatusTypes.NONE), [h, O] = n.useState(null != c ? c : ""), [A, E] = n.useState(C), U = (0, g.getHangStatusOptions)();
                return (0, s.jsxs)(i.ModalRoot, {
                    transitionState: a,
                    size: i.ModalSize.LARGE,
                    children: [(0, s.jsxs)(i.ModalHeader, {
                        className: N.modalHeader,
                        separator: !1,
                        children: [(0, s.jsx)(i.ModalCloseButton, {
                            className: N.closeButton,
                            onClick: l
                        }), (0, s.jsx)(i.Heading, {
                            variant: "heading-xl/medium",
                            children: x.default.Messages.SET_STATUS_MODAL_TITLE
                        }), (0, s.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: N.subtitle,
                            children: x.default.Messages.SET_STATUS_MODAL_SUBTITLE
                        })]
                    }), (0, s.jsxs)(i.ModalContent, {
                        className: N.modalContent,
                        children: [(0, s.jsx)(i.FormTitle, {
                            className: N.title,
                            children: x.default.Messages.HANG_STATUS
                        }), (0, s.jsxs)("div", {
                            className: N.hangStatusSelector,
                            children: [Object.entries(U).map(t => {
                                let [e, a] = t;
                                return (0, s.jsx)(i.Clickable, {
                                    onClick: () => H(e),
                                    children: (0, s.jsx)(j.default, {
                                        leadIn: a.leadIn,
                                        name: a.title,
                                        icon: a.icon,
                                        color: a.color,
                                        selected: M === e,
                                        className: u(N.statusWidget, {
                                            [N.statusWidgetSelected]: M === e
                                        })
                                    })
                                }, e)
                            }), (0, s.jsx)(i.Clickable, {
                                onClick: () => H(p.HangStatusTypes.CUSTOM),
                                children: (0, s.jsx)(j.default, {
                                    name: x.default.Messages.CUSTOM_HANG_STATUS,
                                    selected: M === p.HangStatusTypes.CUSTOM,
                                    className: u(N.statusWidget, {
                                        [N.statusWidgetSelected]: M === p.HangStatusTypes.CUSTOM
                                    })
                                })
                            }, p.HangStatusTypes.CUSTOM)]
                        }), M === p.HangStatusTypes.CUSTOM ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(i.FormTitle, {
                                className: N.title,
                                children: x.default.Messages.CUSTOM_HANG_STATUS
                            }), (0, s.jsxs)("div", {
                                className: N.customInputRow,
                                children: [(0, s.jsx)(f, {
                                    customStatusEmoji: A,
                                    setCustomStatusEmoji: E,
                                    onClose: l
                                }), (0, s.jsx)(i.TextInput, {
                                    className: N.customInput,
                                    value: h,
                                    onChange: O
                                })]
                            })]
                        }) : null]
                    }), (0, s.jsxs)(i.ModalFooter, {
                        justify: S.default.Justify.BETWEEN,
                        direction: S.default.Direction.HORIZONTAL,
                        children: [(0, s.jsx)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
                            onClick: l,
                            children: x.default.Messages.CANCEL
                        }), (0, s.jsx)(i.Button, {
                            onClick: () => {
                                let t = h.trim();
                                if (M === p.HangStatusTypes.CUSTOM && "" !== t)(0, m.updateCustomHangStatus)(h.trim(), A, "HangStatusModal");
                                else {
                                    if (M === p.HangStatusTypes.CUSTOM) return;
                                    (0, m.updateHangStatus)(M === p.HangStatusTypes.NONE ? null : M, "HangStatusModal")
                                }
                                l()
                            },
                            className: N.button,
                            disabled: M === p.HangStatusTypes.CUSTOM && "" === h.trim(),
                            children: x.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
                        })]
                    })]
                })
            }
        }
    }
]);