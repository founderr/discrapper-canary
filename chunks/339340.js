e.r(n),
    e.d(n, {
        VOICE_CHANNEL_STATUS_MODAL_KEY: function () {
            return S;
        },
        default: function () {
            return L;
        }
    }),
    e(47120),
    e(757143);
var i = e(200651),
    l = e(192379),
    r = e(399606),
    d = e(343817),
    a = e(481060),
    u = e(787014),
    s = e(12498),
    o = e(541716),
    _ = e(752305),
    c = e(893718),
    E = e(600164),
    I = e(19780),
    g = e(626135),
    p = e(981631),
    T = e(388032),
    f = e(897232);
let S = 'VoiceChannelStatusModal';
function L(t) {
    let { channel: n, transitionState: e, onClose: L } = t,
        m = (0, r.e7)([s.Z], () => s.Z.getChannelStatus(n)),
        U = (0, r.e7)([I.Z], () => I.Z.getMediaSessionId()),
        [C, N] = l.useState(null != m ? m : ''),
        [D, A] = l.useState(!1),
        [G, O] = l.useState(null),
        y = C.length > 500;
    l.useEffect(() => {
        g.default.track(p.rMx.OPEN_MODAL, {
            type: 'Voice Channel Topic Modal',
            guild_id: n.guild_id
        });
    }, [n.guild_id]);
    let v = (t) => {
            O(new d.Hx(t, t.status).getAnyErrorMessage());
        },
        Z = async (t) => {
            C === m && L(), null == t || t.preventDefault(), O(null), A(!0);
            let e = C.length,
                i = C.replace(/<(a)?:[^:]+:[0-9]+>/g, '--').length;
            try {
                let t = await u.ZP.updateVoiceChannelStatus(n.id, C);
                204 === t.status
                    ? (g.default.track(p.rMx.VOICE_CHANNEL_TOPIC_SET, {
                          guild_id: n.guild_id,
                          channel_id: n.id,
                          media_session_id: U,
                          raw_length: e,
                          text_length: i
                      }),
                      L())
                    : v(t);
            } catch (t) {
                v(t);
            }
            A(!1);
        },
        [h, M] = l.useState((0, _.JM)(C)),
        z = async () => (
            !y && !D && (await Z()),
            Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0
            })
        );
    return (0, i.jsx)('form', {
        onSubmit: Z,
        className: f.form,
        children: (0, i.jsxs)(a.ModalRoot, {
            transitionState: e,
            size: a.ModalSize.SMALL,
            children: [
                (0, i.jsxs)(a.ModalContent, {
                    children: [
                        (0, i.jsxs)(a.ModalHeader, {
                            direction: E.Z.Direction.VERTICAL,
                            className: f.modalHeader,
                            separator: !1,
                            children: [
                                (0, i.jsx)(a.ModalCloseButton, {
                                    className: f.closeButton,
                                    onClick: L
                                }),
                                (0, i.jsx)('div', { className: f.headerImage }),
                                (0, i.jsx)(a.FormTitle, {
                                    tag: 'h1',
                                    className: f.title,
                                    children: T.intl.string(T.t['5CyJBQ'])
                                }),
                                (0, i.jsx)(a.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: T.intl.string(T.t.NRBYjo)
                                })
                            ]
                        }),
                        (0, i.jsxs)(a.FormSection, {
                            className: f.inputSection,
                            title: T.intl.string(T.t.Fq5lwM),
                            children: [
                                (0, i.jsx)(c.Z, {
                                    innerClassName: f.textArea,
                                    textValue: C,
                                    richValue: h,
                                    placeholder: T.intl.formatToPlainString(T.t.DUXxBg, { channelName: n.name }),
                                    focused: !0,
                                    channel: n,
                                    onChange: (t, n, e) => {
                                        N(n), M(e);
                                    },
                                    onSubmit: z,
                                    type: o.I.VOICE_CHANNEL_STATUS,
                                    canMentionRoles: !1,
                                    canMentionChannels: !1,
                                    allowNewLines: !1,
                                    parentModalKey: S,
                                    maxCharacterCount: 500,
                                    showRemainingCharsAfterCount: 250,
                                    emojiPickerCloseOnModalOuterClick: !0
                                }),
                                null != G
                                    ? (0, i.jsx)(a.FormErrorBlock, {
                                          className: f.error,
                                          children: G
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)(a.ModalFooter, {
                    justify: E.Z.Justify.BETWEEN,
                    direction: E.Z.Direction.HORIZONTAL,
                    children: [
                        (0, i.jsx)(a.Button, {
                            color: a.Button.Colors.PRIMARY,
                            onClick: L,
                            children: T.intl.string(T.t['ETE/oK'])
                        }),
                        (0, i.jsx)(a.Button, {
                            onClick: Z,
                            submitting: D,
                            className: f.button,
                            disabled: y,
                            children: T.intl.string(T.t.XqK2Iy)
                        })
                    ]
                })
            ]
        })
    });
}
