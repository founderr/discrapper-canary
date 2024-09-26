t.d(s, {
    Z: function () {
        return m;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(692547),
    o = t(481060),
    l = t(596454),
    c = t(594174),
    d = t(74538),
    _ = t(242291),
    u = t(706667),
    E = t(792165),
    T = t(409673),
    S = t(603074),
    I = t(689938),
    N = t(995235);
function A(e) {
    let { onSelect: s } = e,
        [t, r] = a.useState(!1),
        l = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        _ = d.ZP.canUseCustomCallSounds(l);
    function u(e) {
        _ && (r(!1), null == s || s(e));
    }
    return (0, n.jsx)(o.Popout, {
        shouldShow: t,
        position: 'left',
        onRequestClose: () => r(!1),
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)(o.Dialog, {
                children: (0, n.jsx)(S.Z, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: s,
                    onSelect: u,
                    gridNotice: _ ? null : (0, n.jsx)(E.o, {}),
                    analyticsSource: 'call sounds edit setting'
                })
            });
        },
        children: (e) =>
            (0, n.jsx)(T.hU, {
                ...e,
                onClick: () => {
                    r(!t);
                },
                text: I.Z.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND_CHANGE,
                children: (0, n.jsx)(o.PencilIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: N.secondaryIcon
                })
            })
    });
}
function C(e) {
    let { sound: s } = e,
        { previewSound: t } = (0, u.Z)(s, null),
        a =
            0 === (0, _.pI)()
                ? I.Z.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND_LOW_VOLUME
                : I.Z.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
                      emojiName: s.emojiName,
                      soundName: s.name
                  });
    return (0, n.jsx)(T.hU, {
        onClick: t,
        text: a,
        children: (0, n.jsx)(o.VoiceNormalIcon, {
            size: 'md',
            color: 'currentColor',
            className: N.secondaryIconActive
        })
    });
}
function m(e) {
    let { sound: s, isGlobal: t, onSelect: a } = e,
        i = null != s,
        c = null == s ? void 0 : s.emojiId,
        d = null == s ? void 0 : s.emojiName,
        _ = i && (null != d || null != c),
        u = (e) =>
            (0, n.jsx)(o.Text, {
                variant: 'text-xs/medium',
                color: 'header-secondary',
                tag: 'span',
                children: e
            });
    return (0, n.jsxs)('div', {
        className: N.soundButtonSettingContainer,
        children: [
            (0, n.jsxs)('div', {
                className: N.container,
                children: [
                    _ &&
                        (0, n.jsx)(l.Z, {
                            emojiId: c,
                            emojiName: d,
                            className: N.emoji
                        }),
                    (0, n.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        className: N.soundText,
                        children:
                            null == s
                                ? I.Z.Messages.NONE
                                : t
                                  ? I.Z.Messages.CALL_SOUNDS_SETTINGS_ALL_SERVERS.format({
                                        soundName: s.name,
                                        subtextHook: u
                                    })
                                  : s.name
                    }),
                    i
                        ? (0, n.jsx)(C, { sound: s })
                        : (0, n.jsx)(o.VoiceNormalIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: N.secondaryIconDisabled
                          })
                ]
            }),
            (0, n.jsxs)('div', {
                className: N.container,
                children: [
                    (0, n.jsx)(A, { onSelect: a }),
                    i &&
                        !t &&
                        (0, n.jsx)(T.hU, {
                            onClick: () => a(null),
                            text: I.Z.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND_REMOVE,
                            children: (0, n.jsx)(o.TrashIcon, {
                                size: 'md',
                                color: r.Z.unsafe_rawColors.RED_400.css,
                                className: N.secondaryIcon
                            })
                        })
                ]
            })
        ]
    });
}
