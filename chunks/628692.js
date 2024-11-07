n.d(t, {
    ku: function () {
        return T;
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
    c = n(315744),
    d = n(801606),
    f = n(135869),
    _ = n(763296),
    h = n(697426),
    p = n(22382),
    m = n(747071),
    g = n(409673),
    E = n(592125),
    v = n(388032),
    I = n(42693);
function S(e) {
    let { playSound: t } = e;
    return (0, r.jsxs)(l.Clickable, {
        title: 'Risky Click',
        tag: 'span',
        onClick: t,
        className: I.inlineContainer,
        children: [
            (0, r.jsx)(l.VoiceNormalIcon, {
                size: 'md',
                color: 'currentColor',
                className: I.unknownSound
            }),
            (0, r.jsx)('span', { children: 'Unknown' })
        ]
    });
}
function T(e) {
    let { soundId: t } = e,
        n = (0, o.e7)([_.Z], () => _.Z.getSoundById(t));
    return null == n ? (0, r.jsx)(S, {}) : (0, r.jsx)(b, { sound: n });
}
function b(e) {
    let { sound: t, playSound: n, isPlaying: i } = e,
        a = (null == t ? void 0 : t.emojiId) != null || (null == t ? void 0 : t.emojiName) != null,
        o = v.intl.formatToPlainString(v.t.tuMUJy, {
            emojiName: null == t ? void 0 : t.emojiName,
            soundName: null == t ? void 0 : t.name
        });
    return (0, r.jsxs)(l.Clickable, {
        'aria-label': o,
        tag: 'span',
        onClick: n,
        className: s()(I.inlineContainer, I.inlineButton, { [I.playing]: !0 === i }),
        children: [
            a &&
                (0, r.jsx)(u.Z, {
                    emojiId: null == t ? void 0 : t.emojiId,
                    emojiName: null == t ? void 0 : t.emojiName,
                    className: I.soundmojiEmoji
                }),
            (0, r.jsx)('span', { children: ' '.concat(null == t ? void 0 : t.name, ' ') })
        ]
    });
}
t.ZP = function (e) {
    let { channelId: t, messageId: n, soundId: a, jumbo: s = !1 } = e,
        { currentPreviewRef: l } = i.useContext(f.Z),
        u = i.useMemo(() => (0, d.Z)(t, n, a), [t, n, a]),
        _ = (0, o.e7)([E.Z], () => E.Z.getChannel(t)),
        [v, T] = i.useState(!1),
        y = (0, c.P)('soundmoji_chat_mention'),
        A = i.useCallback(() => {
            var e;
            let t = new Audio((0, p.Z)(a));
            null != l.current && l.current.pause(), (l.current = t), (t.currentTime = 0), (t.volume = (0, m.Z)(null !== (e = null == u ? void 0 : u.volume) && void 0 !== e ? e : 1)), t.play(), (t.onplay = () => T(!0)), (t.onpause = () => T(!1)), (t.onended = () => T(!1));
        }, [a, u, l, T]);
    return y
        ? null == u
            ? (0, r.jsx)(S, { playSound: A })
            : s
              ? (0, r.jsx)(
                    g.ZP,
                    {
                        containerClassName: I.jumboContainer,
                        className: I.jumboButton,
                        sound: u,
                        channel: _,
                        refreshEnabled: !0,
                        onSelectItem: A,
                        isPlayingSoundOverride: v,
                        isAnimated: !1,
                        isSoundmoji: !0,
                        buttonOverlay: h.Pb.SOUNDMOJI
                    },
                    ''.concat(u.soundId)
                )
              : (0, r.jsx)(b, {
                    sound: u,
                    playSound: A,
                    isPlaying: v
                })
        : null;
};
