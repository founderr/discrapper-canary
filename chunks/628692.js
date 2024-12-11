n.d(t, {
    ku: function () {
        return A;
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
    I = n(695346),
    T = n(592125),
    b = n(388032),
    S = n(205659);
function y(e) {
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
function A(e) {
    let { soundId: t } = e,
        n = (0, o.e7)([h.Z], () => h.Z.getSoundById(t));
    return (0, d.V2)({ location: 'SoundboardMentionInline' }) ? (null == n ? (0, r.jsx)(y, {}) : (0, r.jsx)(N, { sound: n })) : null;
}
function N(e) {
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
        u = I.jU.useSetting(),
        { currentPreviewRef: d } = i.useContext(p.Z),
        b = (0, o.e7)([h.Z], () => h.Z.getSoundById(a), [a]),
        A = i.useMemo(() => {
            var e;
            return null !== (e = (0, f.Z)(t, n, a)) && void 0 !== e ? e : b;
        }, [t, n, a, b]),
        C = (0, o.e7)([T.Z], () => T.Z.getChannel(t)),
        [R, O] = i.useState(!1),
        D = (0, c.X0)({ location: 'SoundboardMention' }),
        L = i.useCallback(() => {
            var e;
            let t = new Audio((0, g.Z)(a));
            null != d.current && d.current.pause(), (d.current = t), (t.currentTime = 0), (t.volume = (0, E.Z)(null !== (e = null == A ? void 0 : A.volume) && void 0 !== e ? e : 1, I.AY.getSetting())), t.play(), (t.onplay = () => O(!0)), (t.onpause = () => O(!1)), (t.onended = () => O(!1));
        }, [a, A, d, O]);
    return D
        ? null == A
            ? (0, r.jsx)(y, { playSound: L })
            : s && !u
              ? (0, r.jsx)(
                    v.ZP,
                    {
                        containerClassName: S.jumboContainer,
                        className: S.jumboButton,
                        sound: A,
                        channel: C,
                        refreshEnabled: !0,
                        onSelectItem: L,
                        isPlayingSoundOverride: R,
                        isAnimated: !1,
                        isSoundmoji: !0,
                        buttonOverlay: m.Pb.SOUNDMOJI,
                        tooltipClassName: S.tooltip,
                        tooltipContentClassName: S.tooltipContainer,
                        tooltipOverride: (0, r.jsx)(_.Dp, { sound: A })
                    },
                    ''.concat(A.soundId)
                )
              : (0, r.jsx)(l.Tooltip, {
                    'aria-label': A.name,
                    text: (0, r.jsx)(_.Dp, { sound: A }),
                    tooltipClassName: S.tooltip,
                    tooltipContentClassName: S.tooltipContainer,
                    position: 'top',
                    delay: 500,
                    children: (e) =>
                        (0, r.jsx)('span', {
                            ...e,
                            children: (0, r.jsx)(N, {
                                sound: A,
                                playSound: L,
                                isPlaying: R
                            })
                        })
                })
        : null;
};
