e.r(n),
    e.d(n, {
        VOICE_CHANNEL_STATUS_MODAL_KEY: function () {
            return m;
        },
        default: function () {
            return S;
        }
    }),
    e(47120),
    e(757143);
var i = e(200651),
    l = e(192379),
    r = e(399606),
    a = e(343817),
    d = e(481060),
    u = e(787014),
    s = e(12498),
    o = e(541716),
    _ = e(752305),
    c = e(893718),
    E = e(600164),
    g = e(19780),
    I = e(626135),
    p = e(981631),
    f = e(388032),
    T = e(352338);
let m = 'VoiceChannelStatusModal';
function S(t) {
    let { channel: n, transitionState: e, onClose: S } = t,
        U = (0, r.e7)([s.Z], () => s.Z.getChannelStatus(n)),
        C = (0, r.e7)([g.Z], () => g.Z.getMediaSessionId()),
        [L, D] = l.useState(null != U ? U : ''),
        [N, O] = l.useState(!1),
        [A, G] = l.useState(null),
        y = L.length > 500;
    l.useEffect(() => {
        I.default.track(p.rMx.OPEN_MODAL, {
            type: 'Voice Channel Topic Modal',
            guild_id: n.guild_id
        });
    }, [n.guild_id]);
    let v = (t) => {
            G(new a.Hx(t, t.status).getAnyErrorMessage());
        },
        Z = async (t) => {
            L === U && S(), null == t || t.preventDefault(), G(null), O(!0);
            let e = L.length,
                i = L.replace(/<(a)?:[^:]+:[0-9]+>/g, '--').length;
            try {
                let t = await u.ZP.updateVoiceChannelStatus(n.id, L);
                204 === t.status
                    ? (I.default.track(p.rMx.VOICE_CHANNEL_TOPIC_SET, {
                          guild_id: n.guild_id,
                          channel_id: n.id,
                          media_session_id: C,
                          raw_length: e,
                          text_length: i
                      }),
                      S())
                    : v(t);
            } catch (t) {
                v(t);
            }
            O(!1);
        },
        [h, M] = l.useState((0, _.JM)(L)),
        b = async () => (
            !y && !N && (await Z()),
            Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0
            })
        );
    return (0, i.jsx)('form', {
        onSubmit: Z,
        className: T.form,
        children: (0, i.jsxs)(d.ModalRoot, {
            transitionState: e,
            size: d.ModalSize.SMALL,
            children: [
                (0, i.jsxs)(d.ModalContent, {
                    children: [
                        (0, i.jsxs)(d.ModalHeader, {
                            direction: E.Z.Direction.VERTICAL,
                            className: T.modalHeader,
                            separator: !1,
                            children: [
                                (0, i.jsx)(d.ModalCloseButton, {
                                    className: T.closeButton,
                                    onClick: S
                                }),
                                (0, i.jsx)('div', { className: T.headerImage }),
                                (0, i.jsx)(d.FormTitle, {
                                    tag: 'h1',
                                    className: T.title,
                                    children: f.intl.string(f.t['5CyJBQ'])
                                }),
                                (0, i.jsx)(d.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: f.intl.string(f.t.NRBYjo)
                                })
                            ]
                        }),
                        (0, i.jsxs)(d.FormSection, {
                            className: T.inputSection,
                            title: f.intl.string(f.t.Fq5lwM),
                            children: [
                                (0, i.jsx)(c.Z, {
                                    innerClassName: T.textArea,
                                    textValue: L,
                                    richValue: h,
                                    placeholder: f.intl.formatToPlainString(f.t.DUXxBg, { channelName: n.name }),
                                    focused: !0,
                                    channel: n,
                                    onChange: (t, n, e) => {
                                        D(n), M(e);
                                    },
                                    onSubmit: b,
                                    type: o.I.VOICE_CHANNEL_STATUS,
                                    canMentionRoles: !1,
                                    canMentionChannels: !1,
                                    allowNewLines: !1,
                                    parentModalKey: m,
                                    maxCharacterCount: 500,
                                    showRemainingCharsAfterCount: 250,
                                    emojiPickerCloseOnModalOuterClick: !0
                                }),
                                null != A
                                    ? (0, i.jsx)(d.FormErrorBlock, {
                                          className: T.error,
                                          children: A
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)(d.ModalFooter, {
                    justify: E.Z.Justify.BETWEEN,
                    direction: E.Z.Direction.HORIZONTAL,
                    children: [
                        (0, i.jsx)(d.Button, {
                            color: d.Button.Colors.PRIMARY,
                            onClick: S,
                            children: f.intl.string(f.t['ETE/oK'])
                        }),
                        (0, i.jsx)(d.Button, {
                            onClick: Z,
                            submitting: N,
                            className: T.button,
                            disabled: y,
                            children: f.intl.string(f.t.XqK2Iy)
                        })
                    ]
                })
            ]
        })
    });
}
