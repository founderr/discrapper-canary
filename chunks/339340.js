t.r(n),
    t.d(n, {
        VOICE_CHANNEL_STATUS_MODAL_KEY: function () {
            return T;
        },
        default: function () {
            return h;
        }
    }),
    t(47120),
    t(757143);
var l = t(735250),
    i = t(470079),
    u = t(399606),
    r = t(343817),
    a = t(481060),
    d = t(787014),
    o = t(12498),
    s = t(541716),
    c = t(752305),
    E = t(893718),
    _ = t(600164),
    f = t(19780),
    N = t(626135),
    Z = t(981631),
    I = t(689938),
    C = t(897232);
let T = 'VoiceChannelStatusModal';
function h(e) {
    let { channel: n, transitionState: t, onClose: h } = e,
        g = (0, u.e7)([o.Z], () => o.Z.getChannelStatus(n)),
        A = (0, u.e7)([f.Z], () => f.Z.getMediaSessionId()),
        [S, v] = i.useState(null != g ? g : ''),
        [O, m] = i.useState(!1),
        [L, M] = i.useState(null),
        P = S.length > 500;
    i.useEffect(() => {
        N.default.track(Z.rMx.OPEN_MODAL, {
            type: 'Voice Channel Topic Modal',
            guild_id: n.guild_id
        });
    }, [n.guild_id]);
    let p = (e) => {
            M(new r.Hx(e, e.status).getAnyErrorMessage());
        },
        D = async (e) => {
            S === g && h(), null == e || e.preventDefault(), M(null), m(!0);
            let t = S.length,
                l = S.replace(/<(a)?:[^:]+:[0-9]+>/g, '--').length;
            try {
                let e = await d.ZP.updateVoiceChannelStatus(n.id, S);
                204 === e.status
                    ? (N.default.track(Z.rMx.VOICE_CHANNEL_TOPIC_SET, {
                          guild_id: n.guild_id,
                          channel_id: n.id,
                          media_session_id: A,
                          raw_length: t,
                          text_length: l
                      }),
                      h())
                    : p(e);
            } catch (e) {
                p(e);
            }
            m(!1);
        },
        [V, y] = i.useState((0, c.JM)(S)),
        G = async () => (
            !P && !O && (await D()),
            Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0
            })
        );
    return (0, l.jsx)('form', {
        onSubmit: D,
        className: C.form,
        children: (0, l.jsxs)(a.ModalRoot, {
            transitionState: t,
            size: a.ModalSize.SMALL,
            children: [
                (0, l.jsxs)(a.ModalContent, {
                    children: [
                        (0, l.jsxs)(a.ModalHeader, {
                            direction: _.Z.Direction.VERTICAL,
                            className: C.modalHeader,
                            separator: !1,
                            children: [
                                (0, l.jsx)(a.ModalCloseButton, {
                                    className: C.closeButton,
                                    onClick: h
                                }),
                                (0, l.jsx)('div', { className: C.headerImage }),
                                (0, l.jsx)(a.FormTitle, {
                                    tag: 'h1',
                                    className: C.title,
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
                            className: C.inputSection,
                            title: I.Z.Messages.VOICE_CHANNEL_STATUS,
                            children: [
                                (0, l.jsx)(E.Z, {
                                    innerClassName: C.textArea,
                                    textValue: S,
                                    richValue: V,
                                    placeholder: I.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({ channelName: n.name }),
                                    focused: !0,
                                    channel: n,
                                    onChange: (e, n, t) => {
                                        v(n), y(t);
                                    },
                                    onSubmit: G,
                                    type: s.I.VOICE_CHANNEL_STATUS,
                                    canMentionRoles: !1,
                                    canMentionChannels: !1,
                                    allowNewLines: !1,
                                    parentModalKey: T,
                                    maxCharacterCount: 500,
                                    showRemainingCharsAfterCount: 250,
                                    emojiPickerCloseOnModalOuterClick: !0
                                }),
                                null != L
                                    ? (0, l.jsx)(a.FormErrorBlock, {
                                          className: C.error,
                                          children: L
                                      })
                                    : null
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
                            onClick: h,
                            children: I.Z.Messages.CANCEL
                        }),
                        (0, l.jsx)(a.Button, {
                            onClick: D,
                            submitting: O,
                            className: C.button,
                            disabled: P,
                            children: I.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
                        })
                    ]
                })
            ]
        })
    });
}
