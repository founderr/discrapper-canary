n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(692547),
    a = n(481060),
    o = n(596454),
    c = n(594174),
    d = n(74538),
    u = n(242291),
    m = n(706667),
    g = n(792165),
    h = n(409673),
    p = n(603074),
    x = n(388032),
    T = n(477733);
function S(e) {
    let { onSelect: t } = e,
        [n, l] = s.useState(!1),
        o = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
        u = d.ZP.canUseCustomCallSounds(o);
    function m(e) {
        u && (l(!1), null == t || t(e));
    }
    return (0, i.jsx)(a.Popout, {
        shouldShow: n,
        position: 'left',
        onRequestClose: () => l(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(a.Dialog, {
                children: (0, i.jsx)(p.Z, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: m,
                    gridNotice: u ? null : (0, i.jsx)(g.o, {}),
                    analyticsSource: 'call sounds edit setting'
                })
            });
        },
        children: (e) =>
            (0, i.jsx)(h.hU, {
                ...e,
                onClick: () => {
                    l(!n);
                },
                text: x.intl.string(x.t.uOe0Aw),
                children: (0, i.jsx)(a.PencilIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: T.secondaryIcon
                })
            })
    });
}
function _(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, m.Z)(t, null),
        s =
            0 === (0, u.pI)()
                ? x.intl.string(x.t.OASXjo)
                : x.intl.formatToPlainString(x.t['/8fYOz'], {
                      emojiName: t.emojiName,
                      soundName: t.name
                  });
    return (0, i.jsx)(h.hU, {
        onClick: n,
        text: s,
        children: (0, i.jsx)(a.VoiceNormalIcon, {
            size: 'md',
            color: 'currentColor',
            className: T.secondaryIconActive
        })
    });
}
function E(e) {
    let { sound: t, isGlobal: n, onSelect: s } = e,
        r = null != t,
        c = null == t ? void 0 : t.emojiId,
        d = null == t ? void 0 : t.emojiName,
        u = r && (null != d || null != c),
        m = (e) =>
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/medium',
                color: 'header-secondary',
                tag: 'span',
                children: e
            });
    return (0, i.jsxs)('div', {
        className: T.soundButtonSettingContainer,
        children: [
            (0, i.jsxs)('div', {
                className: T.container,
                children: [
                    u &&
                        (0, i.jsx)(o.Z, {
                            emojiId: c,
                            emojiName: d,
                            className: T.emoji
                        }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        className: T.soundText,
                        children:
                            null == t
                                ? x.intl.string(x.t.PoWNfX)
                                : n
                                  ? x.intl.format(x.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: m
                                    })
                                  : t.name
                    }),
                    r
                        ? (0, i.jsx)(_, { sound: t })
                        : (0, i.jsx)(a.VoiceNormalIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: T.secondaryIconDisabled
                          })
                ]
            }),
            (0, i.jsxs)('div', {
                className: T.container,
                children: [
                    (0, i.jsx)(S, { onSelect: s }),
                    r &&
                        !n &&
                        (0, i.jsx)(h.hU, {
                            onClick: () => s(null),
                            text: x.intl.string(x.t.jmtcGB),
                            children: (0, i.jsx)(a.TrashIcon, {
                                size: 'md',
                                color: l.Z.unsafe_rawColors.RED_400.css,
                                className: T.secondaryIcon
                            })
                        })
                ]
            })
        ]
    });
}
