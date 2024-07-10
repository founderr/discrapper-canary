t.r(n), t.d(n, {
    VOICE_CHANNEL_STATUS_MODAL_KEY: function () {
        return C;
    },
    default: function () {
        return S;
    }
}), t(47120), t(757143);
var l = t(735250), i = t(470079), u = t(399606), r = t(343817), a = t(481060), s = t(787014), o = t(12498), d = t(541716), c = t(752305), E = t(893718), N = t(19780), _ = t(285952), f = t(626135), Z = t(981631), I = t(689938), T = t(956582);
let C = 'VoiceChannelStatusModal';
function S(e) {
    let {
            channel: n,
            transitionState: t,
            onClose: S
        } = e, A = (0, u.e7)([o.Z], () => o.Z.getChannelStatus(n)), g = (0, u.e7)([N.Z], () => N.Z.getMediaSessionId()), [h, O] = i.useState(null != A ? A : ''), [m, L] = i.useState(!1), [M, v] = i.useState(null), P = h.length > 500;
    i.useEffect(() => {
        f.default.track(Z.rMx.OPEN_MODAL, {
            type: 'Voice Channel Topic Modal',
            guild_id: n.guild_id
        });
    }, [n.guild_id]);
    let p = e => {
            v(new r.Hx(e, e.status).getAnyErrorMessage());
        }, D = async e => {
            h === A && S(), null == e || e.preventDefault(), v(null), L(!0);
            let t = h.length, l = h.replace(/<(a)?:[^:]+:[0-9]+>/g, '--').length;
            try {
                let e = await s.ZP.updateVoiceChannelStatus(n.id, h);
                204 === e.status ? (f.default.track(Z.rMx.VOICE_CHANNEL_TOPIC_SET, {
                    guild_id: n.guild_id,
                    channel_id: n.id,
                    media_session_id: g,
                    raw_length: t,
                    text_length: l
                }), S()) : p(e);
            } catch (e) {
                p(e);
            }
            L(!1);
        }, [V, G] = i.useState((0, c.JM)(h)), y = async () => (!P && !m && await D(), Promise.resolve({
            shouldClear: !1,
            shouldRefocus: !0
        }));
    return (0, l.jsx)('form', {
        onSubmit: D,
        className: T.form,
        children: (0, l.jsxs)(a.ModalRoot, {
            transitionState: t,
            size: a.ModalSize.SMALL,
            children: [
                (0, l.jsxs)(a.ModalContent, {
                    children: [
                        (0, l.jsxs)(a.ModalHeader, {
                            direction: _.Z.Direction.VERTICAL,
                            className: T.modalHeader,
                            separator: !1,
                            children: [
                                (0, l.jsx)(a.ModalCloseButton, {
                                    className: T.closeButton,
                                    onClick: S
                                }),
                                (0, l.jsx)('div', { className: T.headerImage }),
                                (0, l.jsx)(a.FormTitle, {
                                    tag: 'h1',
                                    className: T.title,
                                    children: I.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE
                                }),
                                (0, l.jsx)(a.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: I.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE
                                })
                            ]
                        }),
                        (0, l.jsxs)(a.FormSection, {
                            className: T.inputSection,
                            title: I.Z.Messages.VOICE_CHANNEL_STATUS,
                            children: [
                                (0, l.jsx)(E.Z, {
                                    innerClassName: T.textArea,
                                    textValue: h,
                                    richValue: V,
                                    placeholder: I.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({ channelName: n.name }),
                                    focused: !0,
                                    channel: n,
                                    onChange: (e, n, t) => {
                                        O(n), G(t);
                                    },
                                    onSubmit: y,
                                    type: d.I.VOICE_CHANNEL_STATUS,
                                    canMentionRoles: !1,
                                    canMentionChannels: !1,
                                    allowNewLines: !1,
                                    parentModalKey: C,
                                    maxCharacterCount: 500,
                                    showRemainingCharsAfterCount: 250,
                                    emojiPickerCloseOnModalOuterClick: !0
                                }),
                                null != M ? (0, l.jsx)(a.FormErrorBlock, {
                                    className: T.error,
                                    children: M
                                }) : null
                            ]
                        })
                    ]
                }),
                (0, l.jsxs)(a.ModalFooter, {
                    justify: _.Z.Justify.BETWEEN,
                    direction: _.Z.Direction.HORIZONTAL,
                    children: [
                        (0, l.jsx)(a.Button, {
                            color: a.Button.Colors.PRIMARY,
                            onClick: S,
                            children: I.Z.Messages.CANCEL
                        }),
                        (0, l.jsx)(a.Button, {
                            onClick: D,
                            submitting: m,
                            className: T.button,
                            disabled: P,
                            children: I.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
                        })
                    ]
                })
            ]
        })
    });
}
