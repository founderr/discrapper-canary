s.d(n, {
    Z: function () {
        return m;
    }
}),
    s(47120),
    s(757143);
var t = s(735250),
    l = s(470079),
    i = s(481060),
    r = s(907040),
    a = s(981631),
    c = s(185923),
    o = s(689938),
    u = s(898492);
let d = {
        section: a.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
        openPopoutType: 'gift_effect_emoji_picker'
    },
    _ = c.Hz.GIFT;
function m(e) {
    let { setEmojiConfetti: n, emojiConfetti: s } = e,
        [a, c] = l.useState(!1),
        m = (e) =>
            (0, t.jsxs)('div', {
                className: u.customGiftContent,
                children: [
                    (0, t.jsxs)('div', {
                        className: u.customGiftHeader,
                        children: [
                            (0, t.jsx)(i.Text, {
                                variant: 'text-md/bold',
                                children: o.Z.Messages.GIFT_SELECT_EMOJI
                            }),
                            (0, t.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                children: o.Z.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                            })
                        ]
                    }),
                    e
                ]
            }),
        I = (e) => {
            null != n && (n(e), c(!1));
        };
    return (0, t.jsx)(i.Popout, {
        shouldShow: a,
        position: 'bottom',
        align: 'left',
        autoInvert: !1,
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, t.jsx)(i.Dialog, {
                children: (0, t.jsx)(r.Z, {
                    analyticsOverride: d,
                    closePopout: n,
                    onSelectEmoji: I,
                    wrapper: 'div',
                    pickerIntention: _,
                    renderHeader: m,
                    headerClassName: u.emojiHeader,
                    className: u.emojiList,
                    listHeaderClassName: u.emojiList,
                    searchProps: { accessory: (0, t.jsx)(t.Fragment, {}) }
                })
            });
        },
        children: () =>
            (0, t.jsx)('div', {
                className: u.container,
                children: (0, t.jsx)(i.Clickable, {
                    className: u.emoji,
                    onClick: () => c(!0),
                    children:
                        (null == s ? void 0 : s.name) == null
                            ? (0, t.jsxs)(t.Fragment, {
                                  children: [
                                      (0, t.jsx)(i.ReactionIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: u.emojiIcon,
                                          width: 14,
                                          height: 14
                                      }),
                                      (0, t.jsx)(i.Text, {
                                          className: u.text,
                                          variant: 'text-sm/semibold',
                                          children: o.Z.Messages.GIFT_SELECT_EMOJI
                                      })
                                  ]
                              })
                            : (0, t.jsxs)(t.Fragment, {
                                  children: [
                                      (0, t.jsx)(i.Text, {
                                          className: u.textSelected,
                                          variant: 'text-sm/semibold',
                                          children: null == s.guildId ? s.optionallyDiverseSequence : null
                                      }),
                                      (0, t.jsx)(i.Text, {
                                          className: u.text,
                                          variant: 'text-sm/semibold',
                                          children: s.name.replace(/_/g, ' ')
                                      })
                                  ]
                              })
                })
            })
    });
}
