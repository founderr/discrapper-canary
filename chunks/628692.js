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
    b = n(592125),
    I = n(388032),
    T = n(979093);
function S(e) {
    let { playSound: t } = e;
    return (0, r.jsxs)(l.Clickable, {
        title: 'Risky Click',
        tag: 'span',
        onClick: t,
        className: T.inlineContainer,
        children: [
            (0, r.jsx)(l.VoiceNormalIcon, {
                size: 'md',
                color: 'currentColor',
                className: T.unknownSound
            }),
            (0, r.jsx)('span', { children: 'Unknown' })
        ]
    });
}
function y(e) {
    let { soundId: t } = e,
        n = (0, o.e7)([h.Z], () => h.Z.getSoundById(t));
    return (0, d.V)({ location: 'SoundboardMentionInline' }) ? (null == n ? (0, r.jsx)(S, {}) : (0, r.jsx)(A, { sound: n })) : null;
}
function A(e) {
    let { sound: t, playSound: n, isPlaying: i } = e,
        a = (null == t ? void 0 : t.emojiId) != null || (null == t ? void 0 : t.emojiName) != null,
        o = I.intl.formatToPlainString(I.t.tuMUJy, {
            emojiName: null == t ? void 0 : t.emojiName,
            soundName: null == t ? void 0 : t.name
        });
    return (0, c.X0)({ location: 'SoundboardMentionInline' })
        ? (0, r.jsxs)(l.Clickable, {
              'aria-label': o,
              tag: 'span',
              onClick: n,
              className: s()(T.inlineContainer, T.inlineButton, { [T.playing]: !0 === i }),
              children: [
                  a &&
                      (0, r.jsx)(u.Z, {
                          emojiId: null == t ? void 0 : t.emojiId,
                          emojiName: null == t ? void 0 : t.emojiName,
                          className: T.soundmojiEmoji
                      }),
                  (0, r.jsx)('span', { children: ' '.concat(null == t ? void 0 : t.name, ' ') })
              ]
          })
        : null;
}
t.ZP = function (e) {
    let { channelId: t, messageId: n, soundId: a, jumbo: s = !1 } = e,
        { currentPreviewRef: u } = i.useContext(p.Z),
        d = (0, o.e7)([h.Z], () => h.Z.getSoundById(a), [a]),
        I = i.useMemo(() => {
            var e;
            return null !== (e = (0, f.Z)(t, n, a)) && void 0 !== e ? e : d;
        }, [t, n, a, d]),
        y = (0, o.e7)([b.Z], () => b.Z.getChannel(t)),
        [N, C] = i.useState(!1),
        R = (0, c.X0)({ location: 'SoundboardMention' }),
        O = i.useCallback(() => {
            var e;
            let t = new Audio((0, g.Z)(a));
            null != u.current && u.current.pause(), (u.current = t), (t.currentTime = 0), (t.volume = (0, E.Z)(null !== (e = null == I ? void 0 : I.volume) && void 0 !== e ? e : 1)), t.play(), (t.onplay = () => C(!0)), (t.onpause = () => C(!1)), (t.onended = () => C(!1));
        }, [a, I, u, C]);
    return R
        ? null == I
            ? (0, r.jsx)(S, { playSound: O })
            : s
              ? (0, r.jsx)(
                    v.ZP,
                    {
                        containerClassName: T.jumboContainer,
                        className: T.jumboButton,
                        sound: I,
                        channel: y,
                        refreshEnabled: !0,
                        onSelectItem: O,
                        isPlayingSoundOverride: N,
                        isAnimated: !1,
                        isSoundmoji: !0,
                        buttonOverlay: m.Pb.SOUNDMOJI,
                        tooltipClassName: T.tooltip,
                        tooltipContentClassName: T.tooltipContainer,
                        tooltipOverride: (0, r.jsx)(_.Dp, { sound: I })
                    },
                    ''.concat(I.soundId)
                )
              : (0, r.jsx)(l.Tooltip, {
                    'aria-label': I.name,
                    text: (0, r.jsx)(_.Dp, { sound: I }),
                    tooltipClassName: T.tooltip,
                    tooltipContentClassName: T.tooltipContainer,
                    position: 'top',
                    delay: 500,
                    children: (e) =>
                        (0, r.jsx)('span', {
                            ...e,
                            children: (0, r.jsx)(A, {
                                sound: I,
                                playSound: O,
                                isPlaying: N
                            })
                        })
                })
        : null;
};
