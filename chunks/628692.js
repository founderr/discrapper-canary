n.d(t, {
    ku: function () {
        return S;
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
    h = n(22382),
    p = n(747071),
    m = n(409673),
    g = n(592125),
    E = n(388032),
    v = n(42693);
function I(e) {
    let { playSound: t } = e;
    return (0, r.jsxs)(l.Clickable, {
        title: 'Risky Click',
        tag: 'span',
        onClick: t,
        className: v.inlineContainer,
        children: [
            (0, r.jsx)(l.VoiceNormalIcon, {
                size: 'md',
                color: 'currentColor',
                className: v.unknownSound
            }),
            (0, r.jsx)('span', { children: 'Unknown' })
        ]
    });
}
function S(e) {
    let { soundId: t } = e,
        n = _.Z.getSoundById(t);
    return null == n ? (0, r.jsx)(I, {}) : (0, r.jsx)(T, { sound: n });
}
function T(e) {
    let { sound: t, playSound: n } = e,
        i = (null == t ? void 0 : t.emojiId) != null || (null == t ? void 0 : t.emojiName) != null,
        a = E.intl.formatToPlainString(E.t.tuMUJy, {
            emojiName: null == t ? void 0 : t.emojiName,
            soundName: null == t ? void 0 : t.name
        });
    return (0, r.jsxs)(l.Clickable, {
        'aria-label': a,
        tag: 'span',
        onClick: n,
        className: s()(v.inlineContainer, v.inlineButton),
        children: [
            i &&
                (0, r.jsx)(u.Z, {
                    emojiId: null == t ? void 0 : t.emojiId,
                    emojiName: null == t ? void 0 : t.emojiName,
                    className: v.soundmojiEmoji
                }),
            (0, r.jsx)('span', { children: ' '.concat(null == t ? void 0 : t.name, ' ') })
        ]
    });
}
t.ZP = function (e) {
    let { channelId: t, messageId: n, soundId: a, jumbo: s = !1 } = e,
        { currentPreviewRef: l } = i.useContext(f.Z),
        u = i.useMemo(() => (0, d.Z)(t, n, a), [t, n, a]),
        _ = (0, o.e7)([g.Z], () => g.Z.getChannel(t)),
        [E, S] = i.useState(!1),
        b = (0, c.P)('soundmoji_chat_mention'),
        y = i.useCallback(() => {
            var e;
            let t = new Audio((0, h.Z)(a));
            null != l.current && l.current.pause(), (l.current = t), (t.currentTime = 0), (t.volume = (0, p.Z)(null !== (e = null == u ? void 0 : u.volume) && void 0 !== e ? e : 0.5)), t.play(), (t.onplay = () => S(!0)), (t.onpause = () => S(!1)), (t.onended = () => S(!1));
        }, [a, u, l, S]);
    return b
        ? null == u
            ? (0, r.jsx)(I, { playSound: y })
            : s
              ? (0, r.jsx)(
                    m.ZP,
                    {
                        containerClassName: v.jumboContainer,
                        className: v.jumboButton,
                        sound: u,
                        channel: _,
                        refreshEnabled: !0,
                        onSelectItem: y,
                        isPlayingSoundOverride: E,
                        isAnimated: !1,
                        isSoundmoji: !0
                    },
                    ''.concat(u.soundId)
                )
              : (0, r.jsx)(T, {
                    sound: u,
                    playSound: y
                })
        : null;
};
