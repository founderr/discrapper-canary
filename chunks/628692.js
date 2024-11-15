n.d(t, {
    ku: function () {
        return y;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(399606),
    l = n(481060),
    u = n(596454),
    c = n(722932),
    d = n(125900),
    f = n(801606),
    _ = n(409700),
    p = n(135869),
    h = n(763296),
    m = n(697426),
    g = n(22382),
    E = n(747071),
    v = n(409673),
    I = n(592125),
    b = n(388032),
    S = n(42693);
function T(e) {
    let { playSound: t } = e;
    return (0, r.jsxs)(l.Clickable, {
        title: 'Risky Click',
        tag: 'span',
        onClick: t,
        className: S.inlineContainer,
        children: [
            (0, r.jsx)(l.VoiceNormalIcon, {
                size: 'md',
                color: 'currentColor',
                className: S.unknownSound
            }),
            (0, r.jsx)('span', { children: 'Unknown' })
        ]
    });
}
function y(e) {
    let { soundId: t } = e,
        n = (0, o.e7)([h.Z], () => h.Z.getSoundById(t));
    return (0, d.V)({ location: 'SoundboardMentionInline' }) ? (null == n ? (0, r.jsx)(T, {}) : (0, r.jsx)(A, { sound: n })) : null;
}
function A(e) {
    let { sound: t, playSound: n, isPlaying: i } = e,
        a = (null == t ? void 0 : t.emojiId) != null || (null == t ? void 0 : t.emojiName) != null,
        o = b.intl.formatToPlainString(b.t.tuMUJy, {
            emojiName: null == t ? void 0 : t.emojiName,
            soundName: null == t ? void 0 : t.name
        });
    return (0, c.X0)({ location: 'SoundboardMentionInline' })
        ? (0, r.jsxs)(l.Clickable, {
              'aria-label': o,
              tag: 'span',
              onClick: n,
              className: s()(S.inlineContainer, S.inlineButton, { [S.playing]: !0 === i }),
              children: [
                  a &&
                      (0, r.jsx)(u.Z, {
                          emojiId: null == t ? void 0 : t.emojiId,
                          emojiName: null == t ? void 0 : t.emojiName,
                          className: S.soundmojiEmoji
                      }),
                  (0, r.jsx)('span', { children: ' '.concat(null == t ? void 0 : t.name, ' ') })
              ]
          })
        : null;
}
t.ZP = function (e) {
    let { channelId: t, messageId: n, soundId: a, jumbo: s = !1 } = e,
        { currentPreviewRef: u } = i.useContext(p.Z),
        d = (0, o.e7)(
            [h.Z],
            () => {
                var e;
                return null !== (e = (0, f.Z)(t, n, a)) && void 0 !== e ? e : h.Z.getSoundById(a);
            },
            [t, n, a]
        ),
        b = (0, o.e7)([I.Z], () => I.Z.getChannel(t)),
        [y, N] = i.useState(!1),
        C = (0, c.X0)({ location: 'SoundboardMention' }),
        R = i.useCallback(() => {
            var e;
            let t = new Audio((0, g.Z)(a));
            null != u.current && u.current.pause(), (u.current = t), (t.currentTime = 0), (t.volume = (0, E.Z)(null !== (e = null == d ? void 0 : d.volume) && void 0 !== e ? e : 1)), t.play(), (t.onplay = () => N(!0)), (t.onpause = () => N(!1)), (t.onended = () => N(!1));
        }, [a, d, u, N]);
    return C
        ? null == d
            ? (0, r.jsx)(T, { playSound: R })
            : s
              ? (0, r.jsx)(
                    v.ZP,
                    {
                        containerClassName: S.jumboContainer,
                        className: S.jumboButton,
                        sound: d,
                        channel: b,
                        refreshEnabled: !0,
                        onSelectItem: R,
                        isPlayingSoundOverride: y,
                        isAnimated: !1,
                        isSoundmoji: !0,
                        buttonOverlay: m.Pb.SOUNDMOJI,
                        tooltipClassName: S.tooltip,
                        tooltipContentClassName: S.tooltipContainer,
                        tooltipOverride: (0, r.jsx)(_.Dp, { sound: d })
                    },
                    ''.concat(d.soundId)
                )
              : (0, r.jsx)(l.Tooltip, {
                    'aria-label': d.name,
                    text: (0, r.jsx)(_.Dp, { sound: d }),
                    tooltipClassName: S.tooltip,
                    tooltipContentClassName: S.tooltipContainer,
                    position: 'top',
                    delay: 500,
                    children: (e) =>
                        (0, r.jsx)('span', {
                            ...e,
                            children: (0, r.jsx)(A, {
                                sound: d,
                                playSound: R,
                                isPlaying: y
                            })
                        })
                })
        : null;
};
